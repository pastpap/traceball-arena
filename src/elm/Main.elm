port module Main exposing (main)

import App.Flags as Flags
import Board.Types exposing (Board, BoardState(..), Point, Seat, SeatState(..), SessionState(..))
import Board.View exposing (viewBoard)
import Boards.Decode as BoardsDecode
import Boards.Summary exposing (BoardSummary, CreatedBoardInfo)
import Boards.View as BoardsView
import Browser
import Browser.Dom as Dom
import Browser.Events
import Element exposing (..)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html exposing (Html)
import Html.Attributes
import Html.Events
import View.Dialog as Dialog
import View.Menu as Menu
import View.Rules as Rules
import View.Timer as Timer
import View.Header as Header
import View.Layout as Layout
import Game.Screen as Screen exposing (BoardScreenConfig, PauseOverlayConfig)
import History.Codec as HistoryCodec
import History.Types exposing (HistoryEntry)
import History.View as HistoryView
import Json.Decode as Decode
import Json.Encode as Encode
import Local.Codec as LocalCodec
import Local.Game as LocalGameLogic
import Local.Types exposing (LocalGame, LocalMove, LocalPoint)
import Lobby.View as LobbyView
import Port.Commands as Commands
import Protocol exposing (ServerMessage(..), StateMessage, boardNotFoundCode)
import Task
import Time
import Shared.Names exposing (limitNameInput, sanitizePlayerName)
import Shared.Timer exposing (moveTimerLabel, normalizeMoveTimerSeconds, timerOptions)
import Shared.Validation exposing (isValidBoardCode, sanitizeBoardCode)



-- ── Model ──────────────────────────────────────────────────────────────────────


type alias Model =
    { board : Maybe Board
    , boardCode : String
    , inviteUrl : Maybe String
    , version : Int
    , error : Maybe String
    , toast : Maybe String
    , toastExpiresAtMs : Maybe Int
    , ignoredStaleVersion : Maybe Int
    , connectionStatus : String
    , clientId : String
    , draftBoardCode : String
    , playerName : String
    , draftFreeSeat : String
    , replayIndex : Maybe Int
    , localGame : Maybe LocalGame
    , localPaused : Bool
    , localBlueName : String
    , localRedName : String
    , boardList : List BoardSummary
    , localMoveTimer : Int
    , onlineMoveTimer : Int
    , confirmLeaveOnlineForLocal : Bool
    , showLobby : Bool
    , localLobbyTab : Bool
    , mainTab : String
    , joinedSeat : Maybe String
    , viewportWidth : Int
    , dismissedWinnerKey : Maybe String
    , showTimerSheet : Maybe TimerTarget
    , menuPanel : Maybe String
    , gameHistory : List HistoryEntry
    , rawHistoryEntries : List Decode.Value
    , historyReplayGame : Maybe LocalGame
    , currentTimeMs : Int
    , lastOnlineTurn : Maybe String
    , turnHopSerial : Int
    }


type TimerTarget
    = OnlineTimer
    | LocalTimer





-- ── Msg ────────────────────────────────────────────────────────────────────────


type Msg
    = ReceiveSocket Decode.Value
    | ConnectionChanged String
    | UpdateBoardCodeInput String
    | SubmitWatchBoard
    | UpdatePlayerName String
    | CopyBoardLink String
    | DeleteBoard String
    | ClientNotice String
    | PauseOnlineGame
    | ClaimSeat String
    | JoinWaitingList
    | LeaveWaitingList
    | LeaveSeat
    | ResumeOnlinePause
    | ClickLegalMove Point
    | StartNewRound
    | UpdateFreeSeatInput String
    | SubmitFreeSeat
    | ReplayToStart
    | ReplayStepBack
    | ReplayStepForward
    | ReplayToLive
    | StartLocalMatch
    | ToggleLocalPause
    | LocalNewRound
    | LeaveLocalGame
    | UpdateLocalBlueName String
    | UpdateLocalRedName String
    | ReceiveBoardList Decode.Value
    | ReceiveBoardCreated Decode.Value
    | RequestBoardList
    | CreateBoard
    | UpdateLocalMoveTimer String
    | UpdateOnlineMoveTimer String
    | SelectLocalMoveTimer Int
    | SelectOnlineMoveTimer Int
    | OpenTimerSheet TimerTarget
    | CloseTimerSheet
    | IgnoreSheetClick
    | ToggleLobby
    | SetLobbyTab Bool
    | SetMainTab String
    | ViewportMeasured Dom.Viewport
    | ViewportResized Int Int
    | DismissWinnerBanner
    | Tick Time.Posix
    | OpenAppMenu
    | CloseAppMenu
    | ShowHistoryPanel
    | ShowRulesPanel
    | ReceiveGameHistory Decode.Value
    | OpenHistoryReplay Int
    | CloseHistoryReplay



-- ── Ports ──────────────────────────────────────────────────────────────────────


port incomingSocketMessage : (Decode.Value -> msg) -> Sub msg


port incomingConnectionStatus : (String -> msg) -> Sub msg


port incomingBoardList : (Decode.Value -> msg) -> Sub msg


port incomingBoardCreated : (Decode.Value -> msg) -> Sub msg


port incomingClientNotice : (String -> msg) -> Sub msg


port outgoingClientCommand : Encode.Value -> Cmd msg


port incomingGameHistory : (Decode.Value -> msg) -> Sub msg



-- ── Program ────────────────────────────────────────────────────────────────────


main : Program Decode.Value Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }



-- ── Init ───────────────────────────────────────────────────────────────────────


init : Decode.Value -> ( Model, Cmd Msg )
init flags =
    let
        emptyModel =
            { board = Nothing
            , boardCode = ""
            , inviteUrl = Nothing
            , version = 0
            , error = Nothing
            , toast = Nothing
            , toastExpiresAtMs = Nothing
            , ignoredStaleVersion = Nothing
            , connectionStatus = "idle"
            , clientId = ""
            , draftBoardCode = ""
            , playerName = "Player"
            , draftFreeSeat = "p1"
            , replayIndex = Nothing
            , localGame = Nothing
            , localPaused = False
            , localBlueName = "Blue"
            , localRedName = "Red"
            , boardList = []
            , localMoveTimer = 15
            , onlineMoveTimer = 15
            , confirmLeaveOnlineForLocal = False
            , showLobby = True
            , localLobbyTab = False
            , mainTab = "game"
            , joinedSeat = Nothing
            , viewportWidth = 1024
            , dismissedWinnerKey = Nothing
            , showTimerSheet = Nothing
            , menuPanel = Nothing
            , gameHistory = []
            , rawHistoryEntries = []
            , historyReplayGame = Nothing
            , currentTimeMs = 0
            , lastOnlineTurn = Nothing
            , turnHopSerial = 0
            }

        model =
            applyFlags flags emptyModel

        initialCommands =
            Task.perform ViewportMeasured Dom.getViewport
                :: Task.perform Tick Time.now
                :: outgoingClientCommand Commands.fetchBoardListCommand
                :: (if isValidBoardCode model.boardCode then
                        [ watchBoardCommand model.boardCode model.clientId ]

                    else
                        []
                   )
    in
    ( if isValidBoardCode model.boardCode then
        { model | connectionStatus = "connecting", showLobby = False }

      else
        model
    , Cmd.batch initialCommands
    )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ incomingSocketMessage ReceiveSocket
        , incomingConnectionStatus ConnectionChanged
        , incomingBoardList ReceiveBoardList
        , incomingBoardCreated ReceiveBoardCreated
        , incomingClientNotice ClientNotice
        , incomingGameHistory ReceiveGameHistory
        , Browser.Events.onResize ViewportResized
        , Time.every 250 Tick
        ]



-- ── Flags application ────────────────────────────────────────────────────────


applyFlags : Decode.Value -> Model -> Model
applyFlags flags model =
    case Flags.decodeFlags LocalCodec.localGameDecoder flags of
        Ok parsed ->
            let
                sanitized =
                    sanitizeBoardCode parsed.boardCode

                localMoveTimer =
                    parsed.savedLocalGame
                        |> Maybe.map .moveTimerSeconds
                        |> Maybe.withDefault 15
                        |> normalizeMoveTimerSeconds

                invalid =
                    not (String.isEmpty (String.trim parsed.boardCode)) && not (isValidBoardCode sanitized)

                shouldOpenGameImmediately =
                    isValidBoardCode sanitized
            in
            { model
                | boardCode = sanitized
                , inviteUrl = Nothing
                , clientId = parsed.clientId
                , draftBoardCode = sanitized
                , playerName = sanitizePlayerName parsed.playerName
                , localGame = parsed.savedLocalGame
                , localPaused = parsed.savedLocalPaused
                , localMoveTimer = localMoveTimer
                , onlineMoveTimer = parsed.onlineMoveTimer
                , confirmLeaveOnlineForLocal = False
                , localBlueName = sanitizePlayerName parsed.playerName
                , localRedName = "Red"
                , showLobby = not shouldOpenGameImmediately
                , localLobbyTab = False
                , mainTab = "game"
                , error =
                    if invalid then
                        Just "Enter a valid board code."

                    else
                        Nothing
            }

        Err decodeError ->
            { model | error = Just (Decode.errorToString decodeError) }


applyIncoming : StateMessage -> Model -> Model
applyIncoming incoming model =
    if isValidBoardCode model.boardCode && incoming.boardCode /= model.boardCode then
        { model | ignoredStaleVersion = Just incoming.version, error = Nothing }

    else if incoming.boardCode == model.boardCode && incoming.version <= model.version then
        { model | ignoredStaleVersion = Just incoming.version, error = Nothing }

    else
        let
            nextTurn =
                incoming.board.currentSession
                    |> Maybe.andThen .round
                    |> Maybe.map (.turn >> normalizeSeatId)
                    |> Maybe.andThen
                        (\turn ->
                            if String.isEmpty turn then
                                Nothing

                            else
                                Just turn
                        )

            turnChanged =
                case ( model.lastOnlineTurn, nextTurn ) of
                    ( Just prev, Just next ) ->
                        prev /= next

                    _ ->
                        False

            nextModel =
                { model
                    | board = Just incoming.board
                    , boardCode = incoming.boardCode
                    , draftBoardCode = incoming.boardCode
                    , version = incoming.version
                    , error = Nothing
                    , ignoredStaleVersion = Nothing
                    , replayIndex = Nothing
                    , lastOnlineTurn = nextTurn
                    , turnHopSerial =
                        if turnChanged then
                            model.turnHopSerial + 1

                        else
                            model.turnHopSerial
                }
        in
        if currentWinnerKey nextModel == model.dismissedWinnerKey then
            { nextModel | joinedSeat = retainJoinedSeat model.joinedSeat incoming.board }

        else
            { nextModel | dismissedWinnerKey = Nothing, joinedSeat = retainJoinedSeat model.joinedSeat incoming.board }



-- ── Update ─────────────────────────────────────────────────────────────────────


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReceiveSocket value ->
            case Decode.decodeValue Protocol.serverMessageDecoder value of
                Ok serverMessage ->
                    case serverMessage of
                        State incoming ->
                            ( applyIncoming incoming model, Cmd.none )

                        BoardNotFound payload ->
                            ( { model
                                | board = Nothing
                                , boardCode = boardNotFoundCode payload model.boardCode
                                , inviteUrl = Nothing
                                , joinedSeat = Nothing
                                , error = Just payload.message
                              }
                            , Cmd.none
                            )

                        Joined maybeSeatId ->
                            ( { model
                                | error = Nothing
                                , joinedSeat =
                                    case maybeSeatId of
                                        Just seatId ->
                                            Just (normalizeSeatId seatId)

                                        Nothing ->
                                            model.joinedSeat
                              }
                            , Cmd.none
                            )

                        Left ->
                            ( { model
                                | error = Nothing
                                , joinedSeat = Nothing
                                , toast = Just "You left the board."
                                , toastExpiresAtMs = Just (model.currentTimeMs + 2200)
                              }
                            , Cmd.none
                            )

                        WaitingListJoined ->
                            ( { model | error = Nothing }, Cmd.none )

                        WaitingListLeft ->
                            ( { model
                                | error = Nothing
                                , toast = Just "You left the waiting list."
                                , toastExpiresAtMs = Just (model.currentTimeMs + 2200)
                              }
                            , Cmd.none
                            )

                        SeatFreed ->
                            ( { model
                                | error = Nothing
                                , toast = Just "Seat released."
                                , toastExpiresAtMs = Just (model.currentTimeMs + 2200)
                              }
                            , Cmd.none
                            )

                        ServerError message ->
                            ( { model | error = Just message }, Cmd.none )

                        UnsupportedMessage message ->
                            ( { model | error = Just message }, Cmd.none )

                Err decodeError ->
                    ( { model | error = Just (Decode.errorToString decodeError) }, Cmd.none )

        ConnectionChanged status ->
            ( { model | connectionStatus = status }, Cmd.none )

        Tick now ->
            let
                nowMs =
                    Time.posixToMillis now

                withToast updatedModel =
                    applyToastTick nowMs updatedModel
            in
            case model.localGame of
                Just lg ->
                    if model.localPaused then
                        ( withToast { model | currentTimeMs = nowMs }, Cmd.none )

                    else
                        case LocalGameLogic.expireLocalTurnIfNeeded nowMs lg of
                            Just nextGame ->
                                ( withToast { model | currentTimeMs = nowMs, localGame = Just nextGame, localPaused = nextGame.turnStartedAtMs == Nothing && nextGame.winner == Nothing }
                                , persistLocalCmd (Just nextGame) (nextGame.turnStartedAtMs == Nothing && nextGame.winner == Nothing)
                                )

                            Nothing ->
                                ( withToast { model | currentTimeMs = nowMs }, Cmd.none )

                Nothing ->
                    ( withToast { model | currentTimeMs = nowMs }, Cmd.none )

        ViewportMeasured viewport ->
            ( { model | viewportWidth = round viewport.viewport.width }, Cmd.none )

        ViewportResized width _ ->
            ( { model | viewportWidth = width }, Cmd.none )

        DismissWinnerBanner ->
            ( { model | dismissedWinnerKey = currentWinnerKey model }, Cmd.none )

        OpenTimerSheet target ->
            ( { model | showTimerSheet = Just target }, Cmd.none )

        CloseTimerSheet ->
            ( { model | showTimerSheet = Nothing }, Cmd.none )

        IgnoreSheetClick ->
            ( model, Cmd.none )

        OpenAppMenu ->
            ( { model | menuPanel = Just "menu", showTimerSheet = Nothing }, Cmd.none )

        CloseAppMenu ->
            ( { model | menuPanel = Nothing }, Cmd.none )

        ShowHistoryPanel ->
            ( { model | menuPanel = Just "history" }
            , outgoingClientCommand Commands.fetchGameHistoryCommand
            )

        ShowRulesPanel ->
            ( { model | menuPanel = Just "rules" }, Cmd.none )

        ReceiveGameHistory value ->
            let
                rawList =
                    value
                        |> Decode.decodeValue (Decode.list Decode.value)
                        |> Result.withDefault []
            in
            ( { model
                | gameHistory = HistoryCodec.decodeHistoryEntries value
                , rawHistoryEntries = rawList
              }
            , Cmd.none
            )

        OpenHistoryReplay index ->
            case List.head (List.drop index model.rawHistoryEntries) of
                Just rawEntry ->
                    case Decode.decodeValue (Decode.field "game" HistoryCodec.historyLocalGameDecoder) rawEntry of
                        Ok game ->
                            ( { model
                                | historyReplayGame = Just game
                                , menuPanel = Nothing
                                , replayIndex = Just 0
                                , showLobby = False
                              }
                            , Cmd.none
                            )

                        Err _ ->
                            ( model, Cmd.none )

                Nothing ->
                    ( model, Cmd.none )

        CloseHistoryReplay ->
            ( { model
                | historyReplayGame = Nothing
                , replayIndex = Nothing
                , menuPanel = Just "history"
                , showLobby = model.board == Nothing && model.localGame == Nothing
              }
            , Cmd.none
            )

        UpdateBoardCodeInput raw ->
            ( { model | draftBoardCode = sanitizeBoardCode raw, error = Nothing }, Cmd.none )

        SubmitWatchBoard ->
            let
                boardCode =
                    sanitizeBoardCode model.draftBoardCode
            in
            if isValidBoardCode boardCode then
                ( { model
                    | boardCode = boardCode
                    , inviteUrl = Nothing
                    , draftBoardCode = boardCode
                    , board = Nothing
                    , joinedSeat = Nothing
                    , replayIndex = Nothing
                    , version = 0
                    , dismissedWinnerKey = Nothing
                    , showLobby = False
                    , connectionStatus = "connecting"
                    , error = Nothing
                  }
                , Cmd.batch
                    [ watchBoardCommand boardCode model.clientId
                    , outgoingClientCommand (Commands.updateUrlCommand ("/?board=" ++ boardCode))
                    ]
                )

            else
                ( { model | error = Just "Enter a valid board code." }, Cmd.none )

        UpdatePlayerName raw ->
            let
                name =
                    limitNameInput raw
            in
            ( { model | playerName = name, error = Nothing }
            , outgoingClientCommand (Commands.persistPlayerNameCommand (sanitizePlayerName name))
            )

        CopyBoardLink roomId ->
            if isValidBoardCode roomId then
                ( model
                , outgoingClientCommand (Commands.copyBoardLinkCommand roomId)
                )

            else
                ( model, Cmd.none )

        DeleteBoard roomId ->
            if isValidBoardCode roomId then
                ( model
                , outgoingClientCommand (Commands.deleteBoardCommand roomId)
                )

            else
                ( model, Cmd.none )

        ClientNotice message ->
            ( { model
                | toast = Just message
                , toastExpiresAtMs = Just (model.currentTimeMs + 2200)
                , error = Nothing
              }
            , Cmd.none
            )

        PauseOnlineGame ->
            ( model
            , outgoingClientCommand Commands.pauseCommand
            )

        ClaimSeat seatId ->
            let
                serverSeatId =
                    if seatId == "blue" then
                        "p1"

                    else if seatId == "red" then
                        "p2"

                    else
                        seatId
            in
            ( model
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "claimSeat" )
                    , ( "seatId", Encode.string serverSeatId )
                    , ( "name", Encode.string model.playerName )
                    , ( "roomId", Encode.string model.boardCode )
                    , ( "clientId", Encode.string model.clientId )
                    ]
                )
            )

        JoinWaitingList ->
            ( model
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "joinWaitingList" )
                    , ( "name", Encode.string model.playerName )
                    , ( "roomId", Encode.string model.boardCode )
                    , ( "clientId", Encode.string model.clientId )
                    ]
                )
            )

        LeaveWaitingList ->
            ( model
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "leaveWaitingList" )
                    , ( "roomId", Encode.string model.boardCode )
                    , ( "clientId", Encode.string model.clientId )
                    ]
                )
            )

        LeaveSeat ->
            ( { model | joinedSeat = Nothing }
            , outgoingClientCommand (Encode.object [ ( "type", Encode.string "leave" ) ])
            )

        ResumeOnlinePause ->
            ( model
            , outgoingClientCommand Commands.resumeCommand
            )

        ClickLegalMove point ->
            if activeBoard model /= Nothing then
                ( model
                , outgoingClientCommand
                    (Encode.object
                        [ ( "type", Encode.string "move" )
                        , ( "to"
                          , Encode.object
                                [ ( "x", Encode.int point.x )
                                , ( "y", Encode.int point.y )
                                ]
                          )
                        ]
                    )
                )

            else
                case activeLocalGame model of
                    Just lg ->
                        if model.localPaused then
                            ( { model | error = Just "Resume the game before moving." }, Cmd.none )

                        else
                            case LocalGameLogic.applyLocalMove model.currentTimeMs lg point of
                                Ok nextGame ->
                                    ( { model | localGame = Just nextGame, error = Nothing, dismissedWinnerKey = Nothing }
                                    , persistLocalCmd (Just nextGame) False
                                    )

                                Err reason ->
                                    ( { model | error = Just reason }, Cmd.none )

                    Nothing ->
                        ( model
                        , outgoingClientCommand
                            (Encode.object
                                [ ( "type", Encode.string "move" )
                                , ( "to"
                                  , Encode.object
                                        [ ( "x", Encode.int point.x )
                                        , ( "y", Encode.int point.y )
                                        ]
                                  )
                                ]
                            )
                        )

        StartNewRound ->
            case model.localGame of
                Just lg ->
                    let
                        nextGame =
                            LocalGameLogic.restartLocalRound model.currentTimeMs lg
                    in
                    ( { model | localGame = Just nextGame, error = Nothing, dismissedWinnerKey = Nothing }
                    , persistLocalCmd (Just nextGame) False
                    )

                Nothing ->
                    ( model
                    , outgoingClientCommand (Encode.object [ ( "type", Encode.string "reset" ) ])
                    )

        UpdateFreeSeatInput raw ->
            ( { model | draftFreeSeat = String.toLower (String.trim raw), error = Nothing }, Cmd.none )

        SubmitFreeSeat ->
            if model.draftFreeSeat == "p1" || model.draftFreeSeat == "p2" then
                ( model
                , outgoingClientCommand
                    (Encode.object
                        [ ( "type", Encode.string "freeSeat" )
                        , ( "seatId", Encode.string model.draftFreeSeat )
                        ]
                    )
                )

            else
                ( { model | error = Just "Seat must be p1 or p2." }, Cmd.none )

        ReplayToStart ->
            ( { model | replayIndex = Just 0 }, Cmd.none )

        ReplayStepBack ->
            let
                currentIndex =
                    Maybe.withDefault (currentMoveCount model) model.replayIndex
            in
            ( { model | replayIndex = Just (max 0 (currentIndex - 1)) }, Cmd.none )

        ReplayStepForward ->
            let
                max_ =
                    currentMoveCount model

                next =
                    Maybe.withDefault max_ model.replayIndex + 1
            in
            ( { model
                | replayIndex =
                    if next >= max_ then
                        Nothing

                    else
                        Just next
              }
            , Cmd.none
            )

        ReplayToLive ->
            ( { model | replayIndex = Nothing }, Cmd.none )

        StartLocalMatch ->
            if model.board /= Nothing && not model.confirmLeaveOnlineForLocal then
                ( { model
                    | confirmLeaveOnlineForLocal = True
                    , toast = Just "Starting local play will leave the online board and clear its URL. Press again to confirm."
                    , toastExpiresAtMs = Just (model.currentTimeMs + 3200)
                  }
                , Cmd.none
                )

            else
                let
                    game =
                        LocalGameLogic.startLocalGame model.currentTimeMs model.localBlueName model.localRedName model.localMoveTimer
                in
                ( { model
                    | localGame = Just game
                    , localPaused = False
                    , error = Nothing
                    , replayIndex = Nothing
                    , dismissedWinnerKey = Nothing
                    , showLobby = False
                    , showTimerSheet = Nothing
                    , historyReplayGame = Nothing
                    , board = Nothing
                    , boardCode = ""
                    , joinedSeat = Nothing
                    , connectionStatus = "idle"
                    , confirmLeaveOnlineForLocal = False
                  }
                , Cmd.batch
                    [ persistLocalCmd (Just game) False
                    , outgoingClientCommand (Encode.object [ ( "type", Encode.string "disconnectSocket" ) ])
                    , outgoingClientCommand (Encode.object [ ( "type", Encode.string "updateUrl" ), ( "url", Encode.string "/" ) ])
                    ]
                )

        ToggleLocalPause ->
            case model.localGame of
                Just lg ->
                    let
                        nextPaused =
                            not model.localPaused

                        nextGame =
                            if nextPaused then
                                { lg | turnStartedAtMs = Nothing }

                            else
                                LocalGameLogic.restartLocalTurnClock model.currentTimeMs { lg | consecutiveTimeouts = 0 }
                    in
                    ( { model | localGame = Just nextGame, localPaused = nextPaused }
                    , persistLocalCmd (Just nextGame) nextPaused
                    )

                Nothing ->
                    ( model, Cmd.none )

        LocalNewRound ->
            case model.localGame of
                Just lg ->
                    let
                        nextGame =
                            LocalGameLogic.restartLocalRound model.currentTimeMs lg
                    in
                    ( { model | localGame = Just nextGame, localPaused = False, error = Nothing, dismissedWinnerKey = Nothing }
                    , persistLocalCmd (Just nextGame) False
                    )

                Nothing ->
                    ( model, Cmd.none )

        LeaveLocalGame ->
            ( { model
                | localGame = Nothing
                , localPaused = False
                , error = Nothing
                , dismissedWinnerKey = Nothing
                , toast = Just "Local game discarded."
                , toastExpiresAtMs = Just (model.currentTimeMs + 2200)
              }
            , persistLocalCmd Nothing False
            )

        UpdateLocalBlueName raw ->
            ( { model | localBlueName = limitNameInput raw }, Cmd.none )

        UpdateLocalRedName raw ->
            ( { model | localRedName = limitNameInput raw }, Cmd.none )

        ReceiveBoardList value ->
            let
                rooms =
                    case Decode.decodeValue (Decode.field "rooms" (Decode.list BoardsDecode.boardSummaryDecoder)) value of
                        Ok list ->
                            list

                        Err _ ->
                            case Decode.decodeValue (Decode.list BoardsDecode.boardSummaryDecoder) value of
                                Ok list ->
                                    list

                                Err _ ->
                                    []
            in
            ( { model | boardList = rooms }, Cmd.none )

        ReceiveBoardCreated value ->
            case Decode.decodeValue BoardsDecode.createdBoardInfoDecoder value of
                Ok info ->
                    let
                        sanitized =
                            sanitizeBoardCode info.roomId
                    in
                    if isValidBoardCode sanitized then
                        ( { model
                            | boardCode = sanitized
                            , inviteUrl = Just info.url
                            , draftBoardCode = sanitized
                            , board = Nothing
                            , joinedSeat = Nothing
                            , replayIndex = Nothing
                            , version = 0
                            , connectionStatus = "connecting"
                            , dismissedWinnerKey = Nothing
                            , showLobby = True
                            , mainTab = "game"
                            , error = Nothing
                          }
                        , Cmd.batch
                            [ outgoingClientCommand
                                (Encode.object
                                    [ ( "type", Encode.string "claimSeat" )
                                    , ( "seatId", Encode.string "p1" )
                                    , ( "name", Encode.string model.playerName )
                                    , ( "roomId", Encode.string sanitized )
                                    , ( "clientId", Encode.string model.clientId )
                                    ]
                                )
                            , outgoingClientCommand
                                (Encode.object
                                    [ ( "type", Encode.string "updateUrl" )
                                    , ( "url", Encode.string ("/?board=" ++ sanitized) )
                                    ]
                                )
                            ]
                        )

                    else
                        ( { model | inviteUrl = Nothing, error = Just "Board creation failed." }, Cmd.none )

                Err _ ->
                    ( { model | inviteUrl = Nothing, error = Just "Board creation failed." }, Cmd.none )

        RequestBoardList ->
            ( model, outgoingClientCommand (Encode.object [ ( "type", Encode.string "fetchBoardList" ) ]) )

        CreateBoard ->
            ( { model | inviteUrl = Nothing, showLobby = True, showTimerSheet = Nothing, mainTab = "game", error = Nothing, confirmLeaveOnlineForLocal = False }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "createBoard" )
                    , ( "moveTimeLimitSeconds", Encode.int model.onlineMoveTimer )
                    ]
                )
            )

        UpdateLocalMoveTimer raw ->
            let
                seconds =
                    raw
                        |> String.toInt
                        |> Maybe.map normalizeMoveTimerSeconds
                        |> Maybe.withDefault 15
            in
            ( { model | localMoveTimer = seconds }, Cmd.none )

        UpdateOnlineMoveTimer raw ->
            let
                seconds =
                    raw
                        |> String.toInt
                        |> Maybe.map normalizeMoveTimerSeconds
                        |> Maybe.withDefault 15
            in
            ( { model | onlineMoveTimer = seconds }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "persistOnlineMoveTimer" )
                    , ( "seconds", Encode.int seconds )
                    ]
                )
            )

        SelectOnlineMoveTimer seconds ->
            let
                normalized =
                    normalizeMoveTimerSeconds seconds
            in
            ( { model | onlineMoveTimer = normalized, showTimerSheet = Nothing }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "persistOnlineMoveTimer" )
                    , ( "seconds", Encode.int normalized )
                    ]
                )
            )

        SelectLocalMoveTimer seconds ->
            let
                normalized =
                    normalizeMoveTimerSeconds seconds
            in
            ( { model | localMoveTimer = normalized, showTimerSheet = Nothing }, Cmd.none )

        ToggleLobby ->
            ( { model | showLobby = not model.showLobby, showTimerSheet = Nothing }, Cmd.none )

        SetMainTab tab ->
            ( { model | mainTab = tab }, Cmd.none )

        SetLobbyTab isLocal ->
            ( { model
                | localLobbyTab = isLocal
                , showLobby = True
                , confirmLeaveOnlineForLocal =
                    if isLocal then
                        model.confirmLeaveOnlineForLocal

                    else
                        False
              }
            , Cmd.none
            )



-- ── View ───────────────────────────────────────────────────────────────────────


view : Model -> Html Msg
view model =
    let
        hasGame =
            model.historyReplayGame /= Nothing || model.localGame /= Nothing || model.board /= Nothing
    in
    Html.main_
        [ Html.Attributes.class "shell"
        , Html.Attributes.attribute "data-elm-mode"
            (if hasGame then
                "playing"

             else
                "lobby"
            )
        , Html.Attributes.attribute "data-elm-lobby-open"
            (if model.showLobby then
                "true"

             else
                "false"
            )
        ]
        [ Element.layout
            [ width fill
            , Font.color (rgb255 244 255 246)
            , Font.family [ Font.typeface "system-ui", Font.sansSerif ]
            ]
            (el
                [ width fill
                , inFront (viewMenuOverlay model)
                , inFront
                    (case ( model.showTimerSheet, model.viewportWidth <= 640 ) of
                        ( Just target, True ) ->
                            Timer.viewBottomSheet
                                { current = timerValueFor target model
                                , dismiss = CloseTimerSheet
                                , ignoreClick = IgnoreSheetClick
                                , onSelect = timerSelectMsg target
                                }

                        _ ->
                            none
                    )
                , inFront
                    (case model.toast of
                        Just message ->
                            viewToast message

                        Nothing ->
                            none
                    )
                ]
                (viewApp model)
            )
        ]


viewApp : Model -> Element Msg
viewApp model =
    let
        hasGame =
            model.historyReplayGame /= Nothing || model.localGame /= Nothing || model.board /= Nothing

        isMobile =
            model.viewportWidth <= 640

        lobbyLayout =
            el
                [ width (fill |> maximum 640)
                , centerX
                , paddingXY 10 8
                , Element.htmlAttribute (Html.Attributes.class "lobby-layout")
                , Element.htmlAttribute (Html.Attributes.attribute "data-lobby-active-tab" model.mainTab)
                ]
            <|
                column [ width fill, spacing 8 ]
                    [ viewMainTabs model
                    , if model.mainTab == "boards" then
                        BoardsView.viewBoardListSection
                            { onRefresh = RequestBoardList
                            , onCopy = CopyBoardLink
                            , onDelete = DeleteBoard
                            }
                            model.boardList

                      else
                        LobbyView.viewLobbyCard
                            { localTabActive = model.localLobbyTab
                            , onOnlineTab = SetLobbyTab False
                            , onLocalTab = SetLobbyTab True
                            , localContent =
                                LobbyView.viewLocalLobbyContent
                                    { localGame = model.localGame
                                    , viewportWidth = model.viewportWidth
                                    , localBlueName = model.localBlueName
                                    , localRedName = model.localRedName
                                    , timerControl = viewTimerControl LocalTimer model.localMoveTimer model
                                    , hasOnlineBoard = model.board /= Nothing
                                    , confirmLeaveOnlineForLocal = model.confirmLeaveOnlineForLocal
                                    , onResumeSavedGame = ToggleLobby
                                    , onDiscardSavedGame = LeaveLocalGame
                                    , onBlueName = UpdateLocalBlueName
                                    , onRedName = UpdateLocalRedName
                                    , onStartLocalMatch = StartLocalMatch
                                    }
                            , onlineContent =
                                LobbyView.viewOnlineLobbyContent
                                    { playerName = model.playerName
                                    , draftBoardCode = model.draftBoardCode
                                    , boardCode = model.boardCode
                                    , inviteUrl = model.inviteUrl
                                    , timerControl = viewTimerControl OnlineTimer model.onlineMoveTimer model
                                    , connectionStatus = model.connectionStatus
                                    , error = model.error
                                    , onPlayerName = UpdatePlayerName
                                    , onBoardCode = UpdateBoardCodeInput
                                    , onWatchBoard = SubmitWatchBoard
                                    , onCreateBoard = CreateBoard
                                    , onCopyBoardLink = CopyBoardLink
                                    , onOpenCreatedBoard = ToggleLobby
                                    }
                            }
                    ]

        gameView =
            el [ width fill, centerX, paddingXY 10 10 ] <|
                Element.html <|
                    case model.historyReplayGame of
                        Just game ->
                            viewHistoryReplayHtml model game

                        Nothing ->
                            case activeBoard model of
                                Just board ->
                                    viewOnlineGameHtml model board

                                Nothing ->
                                    case activeLocalGame model of
                                        Just lg ->
                                            viewLocalGameHtml model lg

                                        Nothing ->
                                            Html.text ""
    in
    if isMobile then
        Layout.viewMobileApp
            { showGame = hasGame && not model.showLobby
            , header =
                if hasGame && not model.showLobby then
                    Header.viewMobileGame mobileHeaderActions

                else
                    Header.viewMobileLobby mobileHeaderActions
            , gameContent = gameView
            , lobbyContent = lobbyLayout
            , openGameStrip =
                if hasGame then
                    Header.viewMobileOpenGameStrip mobileHeaderActions

                else
                    none
            }

    else
        Layout.viewDesktopApp
            { hasGame = hasGame
            , header =
                if hasGame then
                    viewGameHeader model

                else
                    el [ width fill ] (Element.html (viewHeaderHtml model False))
            , content =
                if hasGame && not model.showLobby then
                    gameView

                else
                    lobbyLayout
            }


viewGameHeader : Model -> Element Msg
viewGameHeader model =
    Header.viewDesktopGame (gameHeaderConfig model)


heroStatusFor : Model -> Header.HeroStatus
heroStatusFor model =
    case activeBoard model of
        Just board ->
            let
                ownSeat =
                    derivedOwnSeat model board

                turn =
                    board.currentSession
                        |> Maybe.andThen .round
                        |> Maybe.map .turn
                        |> Maybe.withDefault ""
            in
            { boardCode = board.code
            , roleText =
                case ownSeat of
                    Just seatId ->
                        "You are " ++ turnColorLabel seatId

                    Nothing ->
                        "Watching"
            , roleClass = ownSeat |> Maybe.map normalizeSeatId |> Maybe.withDefault ""
            , turnText =
                if String.isEmpty turn then
                    waitingStatusTextForBoard board

                else
                    "Turn: " ++ turnColorLabel turn
            }

        Nothing ->
            case activeLocalGame model of
                Just lg ->
                    { boardCode = "LOCAL"
                    , roleText = "You are " ++ turnColorLabel lg.turn
                    , roleClass = normalizeSeatId lg.turn
                    , turnText =
                        if model.localPaused then
                            "Paused"

                        else if lg.winner /= Nothing then
                            "Round complete"

                        else
                            "Turn: " ++ turnColorLabel lg.turn
                    }

                Nothing ->
                    { boardCode = "", roleText = "", roleClass = "", turnText = "" }


gameHeaderConfig : Model -> Header.DesktopGameConfig Msg
gameHeaderConfig model =
    let
        heroStatus =
            heroStatusFor model
    in
    { status = heroStatus
    , roleContainerClass = heroRoleClass heroStatus.roleClass
    , toggleLobby = ToggleLobby
    , openMenu = OpenAppMenu
    }


mobileHeaderActions : Header.MobileActions Msg
mobileHeaderActions =
    { toggleLobby = ToggleLobby
    , openMenu = OpenAppMenu
    }


viewMainTabs : Model -> Element Msg
viewMainTabs model =
    Layout.viewMainTabs
        { setupActive = model.mainTab == "game"
        , boardsActive = model.mainTab == "boards"
        , showSetup = SetMainTab "game"
        , showBoards = SetMainTab "boards"
        }


viewHeaderHtml : Model -> Bool -> Html Msg
viewHeaderHtml model hasGame =
    Header.viewHtml hasGame (gameHeaderConfig model)


heroRoleClass : String -> String
heroRoleClass roleClass =
    if String.isEmpty roleClass then
        "hero-board-role"

    else
        "hero-board-role " ++ roleClass


viewLocalGameHtml : Model -> LocalGame -> Html Msg
viewLocalGameHtml model lg =
    let
        board =
            localGameToBoard lg

        winnerName =
            if replayShowsWinner model.replayIndex (List.length lg.moves) then
                lg.winner |> Maybe.map (winnerDisplayName board)

            else
                Nothing

        timerSecs =
            positiveMaybe lg.moveTimerSeconds

        timerRemainingSecs =
            activeTimerRemainingSeconds model.currentTimeMs board

        pauseOverlay =
            if model.localPaused then
                Just
                    { title = "Game paused"
                    , message = "Paused. Resume when ready."
                    , turnText = "Next: " ++ turnOwnerName board lg.turn
                    , resumeAction = Just ToggleLocalPause
                    }

            else
                Nothing
    in
    viewBoardScreenHtml
        { board = board
        , ownSeat = Just lg.turn
        , boardFlipped = False
        , turnHopSerial = 0
        , replayIndex = model.replayIndex
        , isCompactLayout = model.viewportWidth <= 640
        , showWinnerOverlay = winnerKeyForBoard board /= model.dismissedWinnerKey
        , timerSecs = timerSecs
        , timerRemainingSecs = timerRemainingSecs
        , statusText = localStatusText model board lg.turn winnerName
        , turnIndicatorText = localTurnIndicatorText model board lg.turn winnerName
        , turnIndicatorIsRed = normalizeSeatId lg.turn == "red"
        , matchSubtitle = "Board LOCAL"
        , moveCount = List.length lg.moves
        , isPaused = model.localPaused
        , showJoinBlue = False
        , showJoinRed = False
        , showSeatActions = False
        , shareAction = Nothing
        , leaveAction = Just LeaveLocalGame
        , pauseAction = Just ToggleLocalPause
        , newRoundAction =
            if winnerName /= Nothing then
                Just LocalNewRound

            else
                Nothing
        , pauseOverlay = pauseOverlay
        }


viewOnlineGameHtml : Model -> Board -> Html Msg
viewOnlineGameHtml model board =
    let
        ownSeat =
            derivedOwnSeat model board

        boardFlipped =
            ownSeat
                |> Maybe.map normalizeSeatId
                |> Maybe.map (\seat -> seat == "red")
                |> Maybe.withDefault False

        round =
            board.currentSession |> Maybe.andThen .round

        turn =
            round |> Maybe.map .turn |> Maybe.withDefault ""

        winnerName =
            if replayShowsWinner model.replayIndex (currentMoveCount model) then
                round |> Maybe.andThen .winner |> Maybe.map (winnerDisplayName board)

            else
                Nothing

        onlineTimerSecs =
            board.currentSession
                |> Maybe.andThen .moveTimeLimitSeconds
                |> Maybe.andThen positiveMaybe

        onlineTimerRemaining =
            activeTimerRemainingSeconds model.currentTimeMs board

        onlinePauseOverlay =
            if board.state == SessionPaused then
                Just
                    { title = "Game paused"
                    , message = "Paused. Resume when ready."
                    , turnText = "Next: " ++ turnOwnerName board turn
                    , resumeAction =
                        if seatMatchesTurn ownSeat turn then
                            Just ResumeOnlinePause

                        else
                            Nothing
                    }

            else
                Nothing

        shareAction =
            if boardHasOnlyOwnSeat ownSeat board then
                Just (CopyBoardLink board.code)

            else
                Nothing
    in
    viewBoardScreenHtml
        { board = board
        , ownSeat = ownSeat
        , boardFlipped = boardFlipped
        , turnHopSerial = model.turnHopSerial
        , replayIndex = model.replayIndex
        , isCompactLayout = model.viewportWidth <= 640
        , showWinnerOverlay = winnerKeyForBoard board /= model.dismissedWinnerKey
        , timerSecs = onlineTimerSecs
        , timerRemainingSecs = onlineTimerRemaining
        , statusText = onlineStatusText board ownSeat turn winnerName
        , turnIndicatorText = onlineTurnIndicatorText board turn winnerName
        , turnIndicatorIsRed = normalizeSeatId turn == "red"
        , matchSubtitle = "Board " ++ board.code
        , moveCount = currentMoveCount model
        , isPaused = board.state == SessionPaused
        , showJoinBlue = ownSeat == Nothing && seatIsVacant board.blue
        , showJoinRed = ownSeat == Nothing && seatIsVacant board.red
        , showSeatActions = True
        , shareAction = shareAction
        , leaveAction = ownSeat |> Maybe.map (\_ -> LeaveSeat)
        , pauseAction =
            if board.state == SessionActive && seatMatchesTurn ownSeat turn then
                Just PauseOnlineGame

            else
                Nothing
        , newRoundAction =
            if winnerName /= Nothing && ownSeat /= Nothing then
                Just StartNewRound

            else
                Nothing
        , pauseOverlay = onlinePauseOverlay
        }


viewBoardScreenHtml : BoardScreenConfig Msg -> Html Msg
viewBoardScreenHtml config =
    let
        session =
            config.board.currentSession

        round =
            session |> Maybe.andThen .round

        winnerName =
            if config.showWinnerOverlay then
                round |> Maybe.andThen .winner |> Maybe.map (winnerDisplayName config.board)

            else
                Nothing

        blueName =
            config.board.blue.player |> Maybe.map .displayName |> Maybe.withDefault "Blue"

        redName =
            config.board.red.player |> Maybe.map .displayName |> Maybe.withDefault "Red"

        blueScore =
            session |> Maybe.map (.score >> .blue) |> Maybe.withDefault 0

        redScore =
            session |> Maybe.map (.score >> .red) |> Maybe.withDefault 0

        statusBanner =
            case winnerName of
                Just name ->
                    name ++ " wins the round"

                Nothing ->
                    config.turnIndicatorText
    in
    Screen.viewBoardScreenHtml
        normalizeSeatId
        config
        { replayActions =
            { toStart = ReplayToStart
            , stepBack = ReplayStepBack
            , stepForward = ReplayStepForward
            , toLive = ReplayToLive
            }
        , boardView = viewBoard ClickLegalMove config.ownSeat config.replayIndex config.boardFlipped config.board
        , joinBlueAction =
            if config.showSeatActions && config.showJoinBlue then
                Just (ClaimSeat "blue")

            else
                Nothing
        , joinRedAction =
            if config.showSeatActions && config.showJoinRed then
                Just (ClaimSeat "red")

            else
                Nothing
        , blueName = blueName
        , redName = redName
        , blueScore = blueScore
        , redScore = redScore
        , winnerName = winnerName
        , statusBanner = statusBanner
        , onDismissWinner = DismissWinnerBanner
        }


viewToast : String -> Element Msg
viewToast message =
    el [ Element.htmlAttribute (Html.Attributes.id "toast"), Element.htmlAttribute (Html.Attributes.class "show") ]
        (text message)


applyToastTick : Int -> Model -> Model
applyToastTick nowMs model =
    case ( model.toast, model.toastExpiresAtMs ) of
        ( Just _, Just expiresAtMs ) ->
            if nowMs >= expiresAtMs then
                { model | toast = Nothing, toastExpiresAtMs = Nothing }

            else
                model

        _ ->
            model


onClickAttributes : Maybe Msg -> List (Html.Attribute Msg)
onClickAttributes onPress =
    case onPress of
        Just msg ->
            [ Html.Events.onClick msg ]

        Nothing ->
            []


positiveMaybe : Int -> Maybe Int
positiveMaybe value =
    if value > 0 then
        Just value

    else
        Nothing


seatIsVacant : Seat -> Bool
seatIsVacant seat =
    case seat.state of
        Vacant ->
            True

        _ ->
            False


normalizeSeatId : String -> String
normalizeSeatId seatId =
    if seatId == "p1" then
        "blue"

    else if seatId == "p2" then
        "red"

    else
        seatId


turnOwnerName : Board -> String -> String
turnOwnerName board turn =
    case normalizeSeatId turn of
        "blue" ->
            board.blue.player |> Maybe.map .displayName |> Maybe.withDefault "Blue"

        "red" ->
            board.red.player |> Maybe.map .displayName |> Maybe.withDefault "Red"

        _ ->
            turn


winnerDisplayName : Board -> String -> String
winnerDisplayName board winnerId =
    turnOwnerName board winnerId


waitingStatusTextForBoard : Board -> String
waitingStatusTextForBoard board =
    let
        blueVacant =
            seatIsVacant board.blue

        redVacant =
            seatIsVacant board.red
    in
    if blueVacant && redVacant then
        "Board open - choose Blue or Red."

    else if blueVacant then
        "Waiting for a Blue player."

    else if redVacant then
        "Waiting for a Red player."

    else
        "Waiting for the next session."


localStatusText : Model -> Board -> String -> Maybe String -> String
localStatusText model board turn winnerName =
    case winnerName of
        Just name ->
            name ++ " wins. Round complete."

        Nothing ->
            if model.localPaused then
                "Paused. " ++ turnOwnerName board turn ++ " moves next."

            else
                turnOwnerName board turn
                    ++ "'s turn"
                    ++ timerSentence (board.currentSession |> Maybe.andThen .moveTimeLimitSeconds |> Maybe.andThen positiveMaybe)


localTurnIndicatorText : Model -> Board -> String -> Maybe String -> String
localTurnIndicatorText model _ turn winnerName =
    case winnerName of
        Just name ->
            name ++ " wins the round"

        Nothing ->
            if model.localPaused then
                "Game paused"

            else
                turnColorLabel turn ++ " to move"


onlineStatusText : Board -> Maybe String -> String -> Maybe String -> String
onlineStatusText board ownSeat turn winnerName =
    case winnerName of
        Just name ->
            name ++ " wins. " ++ (board.currentSession |> Maybe.andThen .round |> Maybe.andThen .endReason |> Maybe.withDefault "Round complete.")

        Nothing ->
            case board.state of
                WaitingForPlayers ->
                    waitingStatusTextForBoard board

                OneSeatOccupied ->
                    waitingStatusTextForBoard board

                SessionPaused ->
                    "Paused. " ++ turnOwnerName board turn ++ " moves next."

                _ ->
                    if String.isEmpty turn then
                        waitingStatusTextForBoard board

                    else
                        turnOwnerName board turn
                            ++ "'s turn"
                            ++ (if seatMatchesTurn ownSeat turn then
                                    " - your move"

                                else
                                    ""
                               )
                            ++ timerSentence (board.currentSession |> Maybe.andThen .moveTimeLimitSeconds |> Maybe.andThen positiveMaybe)


onlineTurnIndicatorText : Board -> String -> Maybe String -> String
onlineTurnIndicatorText board turn winnerName =
    case winnerName of
        Just name ->
            name ++ " wins the round"

        Nothing ->
            if String.isEmpty turn then
                waitingStatusTextForBoard board

            else
                turnColorLabel turn ++ " to move"


seatMatchesTurn : Maybe String -> String -> Bool
seatMatchesTurn ownSeat turn =
    case ownSeat of
        Just seatId ->
            normalizeSeatId seatId == normalizeSeatId turn

        Nothing ->
            False


boardHasOnlyOwnSeat : Maybe String -> Board -> Bool
boardHasOnlyOwnSeat ownSeat board =
    case ownSeat |> Maybe.map normalizeSeatId of
        Just "blue" ->
            seatIsVacant board.red

        Just "red" ->
            seatIsVacant board.blue

        _ ->
            False


timerSentence : Maybe Int -> String
timerSentence timerSecs =
    case timerSecs of
        Just secs ->
            " - " ++ String.fromInt secs ++ "s timer."

        Nothing ->
            "."


replayShowsWinner : Maybe Int -> Int -> Bool
replayShowsWinner replayIndex moveCount =
    case replayIndex of
        Nothing ->
            True

        Just index ->
            index >= moveCount


currentWinnerKey : Model -> Maybe String
currentWinnerKey model =
    case activeBoard model of
        Just board ->
            winnerKeyForBoard board

        Nothing ->
            activeLocalGame model |> Maybe.map localGameToBoard |> Maybe.andThen winnerKeyForBoard


winnerKeyForBoard : Board -> Maybe String
winnerKeyForBoard board =
    let
        session =
            board.currentSession

        round =
            session |> Maybe.andThen .round
    in
    round
        |> Maybe.andThen .winner
        |> Maybe.map
            (\winnerId ->
                board.code
                    ++ ":"
                    ++ winnerId
                    ++ ":"
                    ++ String.fromInt board.version
                    ++ ":"
                    ++ String.fromInt (session |> Maybe.map (.score >> .blue) |> Maybe.withDefault 0)
                    ++ ":"
                    ++ String.fromInt (session |> Maybe.map (.score >> .red) |> Maybe.withDefault 0)
            )


viewTimerControl : TimerTarget -> Int -> Model -> Element Msg
viewTimerControl target current model =
    Timer.viewControl
        { isMobile = model.viewportWidth <= 640
        , current = current
        , fieldAttrs = formFieldAttrs
        , openSheet = OpenTimerSheet target
        , selectId = timerSelectId target
        , onInput = timerUpdateMsg target
        }


-- ── App menu ───────────────────────────────────────────────────────────────────


menuActions : Menu.Actions Msg
menuActions =
    { dismiss = CloseAppMenu
    , ignoreClick = IgnoreSheetClick
    , showHistory = ShowHistoryPanel
    , showRules = ShowRulesPanel
    }


viewMenuOverlay : Model -> Element Msg
viewMenuOverlay model =
    let
        isMobile =
            model.viewportWidth <= 640
    in
    case model.menuPanel of
        Nothing ->
            none

        Just "menu" ->
            if isMobile then
                Menu.viewMobile menuActions

            else
                Menu.viewDesktop menuActions

        Just "history" ->
            HistoryView.viewOverlay
                { dialogActions = dialogActions
                , isMobile = isMobile
                , nowMs = model.currentTimeMs
                , entries = model.gameHistory
                , onReplay = OpenHistoryReplay
                }

        Just "rules" ->
            Rules.viewOverlay dialogActions isMobile

        Just _ ->
            none


dialogActions : Dialog.Actions Msg
dialogActions =
    { dismiss = CloseAppMenu
    , ignoreClick = IgnoreSheetClick
    , backToMenu = OpenAppMenu
    }


viewHistoryReplayHtml : Model -> LocalGame -> Html Msg
viewHistoryReplayHtml model lg =
    let
        board =
            localGameToBoard lg

        winnerName =
            if replayShowsWinner model.replayIndex (List.length lg.moves) then
                lg.winner |> Maybe.map (winnerDisplayName board)

            else
                Nothing

        statusText =
            case winnerName of
                Just n ->
                    n ++ " won · " ++ Maybe.withDefault "game over" lg.endReason

                Nothing ->
                    lg.blueName ++ " vs " ++ lg.redName
    in
    viewBoardScreenHtml
        { board = board
        , ownSeat = Nothing
        , boardFlipped = False
        , turnHopSerial = 0
        , replayIndex = model.replayIndex
        , isCompactLayout = model.viewportWidth <= 640
        , showWinnerOverlay = False
        , timerSecs = Nothing
        , timerRemainingSecs = Nothing
        , statusText = statusText
        , turnIndicatorText = lg.blueName ++ " vs " ++ lg.redName
        , turnIndicatorIsRed = False
        , matchSubtitle = "History Replay"
        , moveCount = List.length lg.moves
        , isPaused = False
        , showJoinBlue = False
        , showJoinRed = False
        , showSeatActions = False
        , shareAction = Nothing
        , leaveAction = Just CloseHistoryReplay
        , pauseAction = Nothing
        , newRoundAction = Nothing
        , pauseOverlay = Nothing
        }


formFieldAttrs : List (Attribute Msg)
formFieldAttrs =
    [ width fill
    , paddingXY 14 14
    , Border.width 1
    , Border.rounded 14
    , Border.color (rgb255 92 132 99)
    , Bg.color (rgba255 31 72 41 226)
    , Font.color (rgb255 242 255 245)
    ]


formPlaceholderAttrs : List (Attribute Msg)
formPlaceholderAttrs =
    [ Font.color (rgba255 228 244 232 138) ]


formSubpanelAttrs : List (Attribute Msg)
formSubpanelAttrs =
    [ width fill
    , Bg.color (rgba255 17 53 27 214)
    , Border.rounded 18
    , Border.width 1
    , Border.color (rgb255 72 106 82)
    , padding 14
    ]


miniButton : String -> Maybe Msg -> Element Msg
miniButton label onPress =
    Input.button
        [ Bg.color (rgba255 255 255 255 8)
        , Border.rounded 6
        , paddingXY 10 6
        , Font.size 14
        , mouseOver [ Bg.color (rgba255 255 255 255 16) ]
        ]
        { onPress = onPress, label = text label }


turnColorLabel : String -> String
turnColorLabel t =
    if t == "blue" || t == "p1" then
        "Blue"

    else if t == "red" || t == "p2" then
        "Red"

    else
        t


timerValueFor : TimerTarget -> Model -> Int
timerValueFor target model =
    case target of
        OnlineTimer ->
            model.onlineMoveTimer

        LocalTimer ->
            model.localMoveTimer


timerSelectId : TimerTarget -> String
timerSelectId target =
    case target of
        OnlineTimer ->
            "onlineMoveTimer"

        LocalTimer ->
            "localMoveTimer"


timerUpdateMsg : TimerTarget -> String -> Msg
timerUpdateMsg target =
    case target of
        OnlineTimer ->
            UpdateOnlineMoveTimer

        LocalTimer ->
            UpdateLocalMoveTimer


timerSelectMsg : TimerTarget -> Int -> Msg
timerSelectMsg target =
    case target of
        OnlineTimer ->
            SelectOnlineMoveTimer

        LocalTimer ->
            SelectLocalMoveTimer


activeTimerRemainingSeconds : Int -> Board -> Maybe Int
activeTimerRemainingSeconds nowMs board =
    if nowMs <= 0 then
        Nothing

    else
        board.currentSession
            |> Maybe.andThen .round
            |> Maybe.andThen .deadlineAt
            |> Maybe.map (\deadlineAt -> max 0 ((deadlineAt - nowMs + 999) // 1000))



-- ── Domain helpers ────────────────────────────────────────────────────────────


derivedOwnSeat : Model -> Board -> Maybe String
derivedOwnSeat model board =
    case retainJoinedSeat model.joinedSeat board of
        Just seatId ->
            Just seatId

        Nothing ->
            let
                blueName =
                    board.blue.player |> Maybe.map .displayName

                redName =
                    board.red.player |> Maybe.map .displayName
            in
            if blueName == Just (sanitizePlayerName model.playerName) then
                Just "blue"

            else if redName == Just (sanitizePlayerName model.playerName) then
                Just "red"

            else
                Nothing


retainJoinedSeat : Maybe String -> Board -> Maybe String
retainJoinedSeat joinedSeat board =
    case joinedSeat |> Maybe.map normalizeSeatId of
        Just "blue" ->
            if seatIsVacant board.blue then
                Nothing

            else
                Just "blue"

        Just "red" ->
            if seatIsVacant board.red then
                Nothing

            else
                Just "red"

        _ ->
            Nothing


currentMoveCount : Model -> Int
currentMoveCount model =
    case activeBoard model of
        Just board ->
            board
                |> .currentSession
                |> Maybe.andThen .round
                |> Maybe.map (.moves >> List.length)
                |> Maybe.withDefault 0

        Nothing ->
            activeLocalGame model |> Maybe.map (.moves >> List.length) |> Maybe.withDefault 0


activeBoard : Model -> Maybe Board
activeBoard model =
    model.board


activeLocalGame : Model -> Maybe LocalGame
activeLocalGame model =
    case model.historyReplayGame of
        Just game ->
            Just game

        Nothing ->
            if model.board /= Nothing then
                Nothing

            else
                model.localGame


watchBoardCommand : String -> String -> Cmd Msg
watchBoardCommand boardCode clientId =
    if isValidBoardCode boardCode then
        outgoingClientCommand (Commands.watchCommand boardCode clientId)

    else
        Cmd.none


persistLocalCmd : Maybe LocalGame -> Bool -> Cmd Msg
persistLocalCmd localGame paused =
    outgoingClientCommand (Commands.persistLocalRuntimeCommand LocalCodec.localGameEncoder localGame paused)



-- ── Convert LocalGame to Board for SVG display ────────────────────────────────


localGameToBoard : LocalGame -> Board
localGameToBoard lg =
    let
        legalMoves =
            LocalGameLogic.computeLocalLegalMoves lg

        -- LocalPoint and Board.Types.Point are structurally identical
        toP p =
            { x = p.x, y = p.y }

        toM m =
            { from = toP m.from
            , to = toP m.to
            , playerId = m.playerId
            , segment = m.segment
            , bounce = m.bounce
            }

        round =
            { state =
                if lg.winner /= Nothing then
                    "BetweenRounds"

                else
                    "Active"
            , turn = lg.turn
            , ball = toP lg.ball
            , visited = lg.visited
            , segments = lg.segments
            , moves = List.map toM lg.moves
            , legalMoves = List.map toP legalMoves
            , deadlineAt = LocalGameLogic.localTurnDeadlineAt lg
            , winner = lg.winner
            , endReason = lg.endReason
            }

        session =
            { id = Nothing
            , state =
                if lg.winner /= Nothing then
                    BetweenRoundSession

                else
                    Active
            , score = { blue = lg.scoreBlue, red = lg.scoreRed }
            , turn = Just lg.turn
            , winner = lg.winner
            , endReason = lg.endReason
            , moveCount = List.length lg.moves
            , round = Just round
            , moveTimeLimitSeconds = Just lg.moveTimerSeconds
            }

        mkSeat color_ name =
            { color = color_
            , state = Occupied
            , player = Just { displayName = name, joinedAt = Nothing }
            , disconnectedAt = Nothing
            , canBeFreedAt = Nothing
            , canBeFreed = False
            }
    in
    { code = "LOCAL"
    , version = List.length lg.moves
    , state =
        if lg.winner /= Nothing then
            BetweenRounds

        else
            SessionActive
    , blue = mkSeat "blue" lg.blueName
    , red = mkSeat "red" lg.redName
    , currentSession = Just session
    , watchers = []
    , waitingList = []
    , createdAt = 0
    , updatedAt = 0
    , expiresAt = 0
    }
