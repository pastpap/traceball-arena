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
                            viewTimerBottomSheet target (timerValueFor target model)

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
        viewMobileApp model hasGame lobbyLayout gameView

    else
        column
            [ width fill ]
            [ if hasGame then
                viewGameHeader model

              else
                el [ width fill ] (Element.html (viewHeaderHtml model False))
            , if hasGame then
                column [ width fill ]
                    (if model.showLobby then
                        [ lobbyLayout ]

                     else
                        [ gameView ]
                    )

              else
                lobbyLayout
            ]


viewMobileApp : Model -> Bool -> Element Msg -> Element Msg -> Element Msg
viewMobileApp model hasGame lobbyLayout gameView =
    column [ width fill ]
        [ if hasGame && not model.showLobby then
            viewMobileGameHeader

          else
            viewMobileLobbyHeader
        , if hasGame && not model.showLobby then
            gameView

          else
            column [ width fill, spacing 8 ]
                [ if hasGame then
                    viewMobileOpenGameStrip

                  else
                    none
                , lobbyLayout
                ]
        ]


viewGameHeader : Model -> Element Msg
viewGameHeader model =
    let
        heroStatus =
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
    in
    el
        [ width fill
        , Element.htmlAttribute (Html.Attributes.class "hero")
        , inFront <|
            el [ centerX, centerY ] <|
                row
                    [ spacing 9
                    , centerX
                    , centerY
                    , Element.htmlAttribute (Html.Attributes.class "hero-game-status")
                    ]
                    [ el [ Element.htmlAttribute (Html.Attributes.class "hero-board-code"), Font.size 16, Font.color (rgb255 247 255 248), Font.bold ] (text heroStatus.boardCode)
                    , el [ Element.htmlAttribute (Html.Attributes.class (heroRoleClass heroStatus.roleClass)) ] <|
                        row [ spacing 6, centerY ] <|
                            (if String.isEmpty heroStatus.roleClass then
                                []

                             else
                                [ el [ Element.htmlAttribute (Html.Attributes.class ("hero-role-dot " ++ heroStatus.roleClass)) ] none ]
                            )
                                ++ [ el [ Font.size 13, Font.color (rgb255 240 248 244), Font.semiBold ] (text heroStatus.roleText) ]
                    , el [ Element.htmlAttribute (Html.Attributes.class "hero-turn-state"), Font.size 13, Font.color (rgb255 213 230 217), Font.semiBold ] (text heroStatus.turnText)
                    ]
        ]
    <|
        row [ width fill, centerY ]
            [ row [ spacing 9, centerY, Element.htmlAttribute (Html.Attributes.class "hero-brand") ]
                [ Element.html <| Html.img [ Html.Attributes.class "hero-icon", Html.Attributes.src "/icon.svg", Html.Attributes.alt "" ] []
                , el [ Element.htmlAttribute (Html.Attributes.class "hero-title"), Font.size 15, Font.color (rgb255 244 255 246), Font.bold ] (text "Traceball Arena")
                ]
            , row [ alignRight, spacing 7, centerY, Element.htmlAttribute (Html.Attributes.class "hero-actions") ]
                [ Input.button
                    [ Element.htmlAttribute (Html.Attributes.class "hero-lobby-btn"), Font.size 13, Font.color (rgb255 244 255 246), Font.semiBold ]
                    { onPress = Just ToggleLobby, label = text "Lobby" }
                , Element.html <|
                    Html.button
                        [ Html.Attributes.type_ "button"
                        , Html.Attributes.class "app-menu-button"
                        , Html.Attributes.attribute "aria-label" "Open app menu"
                        , Html.Events.onClick OpenAppMenu
                        ]
                        [ Html.span [ Html.Attributes.attribute "aria-hidden" "true" ] [ Html.text "☰" ] ]
                ]
            ]


viewMobileGameHeader : Element Msg
viewMobileGameHeader =
    row
        [ width fill
        , centerY
        , paddingXY 10 8
        , spacing 8
        , Border.rounded 22
        , Border.width 1
        , Border.color (rgba255 115 176 132 60)
        , Bg.color (rgba255 1 22 8 240)
        , Font.color (rgb255 244 255 246)
        ]
        [ Input.button
            [ width (px 42)
            , height (px 42)
            , Border.rounded 16
            , Border.width 1
            , Border.color (rgb255 64 88 69)
            , Bg.color (rgb255 10 36 18)
            , Font.size 22
            , Font.color (rgb255 244 255 246)
            ]
            { onPress = Just ToggleLobby
            , label = el [ centerX, centerY, Font.color (rgb255 244 255 246), Element.htmlAttribute (Html.Attributes.attribute "aria-label" "Open lobby") ] (text "←")
            }
        , el [ width fill, centerX, Font.size 16, Font.bold, Font.color (rgb255 244 255 246) ] (text "Game")
        , Input.button
            [ width (px 42)
            , height (px 42)
            , Border.rounded 16
            , Border.width 1
            , Border.color (rgb255 64 88 69)
            , Bg.color (rgb255 10 36 18)
            , Font.size 20
            , Font.color (rgb255 244 255 246)
            ]
            { onPress = Just OpenAppMenu
            , label = el [ centerX, centerY, Font.color (rgb255 244 255 246), Element.htmlAttribute (Html.Attributes.attribute "aria-label" "Open app menu") ] (text "☰")
            }
        ]


viewMobileLobbyHeader : Element Msg
viewMobileLobbyHeader =
    row
        [ width fill
        , centerY
        , paddingXY 10 8
        , spacing 10
        , Border.rounded 22
        , Border.width 1
        , Border.color (rgba255 115 176 132 60)
        , Bg.color (rgba255 1 22 8 240)
        ]
        [ row [ spacing 10, centerY ]
            [ Element.html <| Html.img [ Html.Attributes.class "hero-icon", Html.Attributes.src "/icon.svg", Html.Attributes.alt "" ] []
            , el [ Font.size 17, Font.bold, Font.color (rgb255 244 255 246) ] (text "Traceball Arena")
            ]
        , el [ alignRight ] <|
            Input.button
                [ width (px 42)
                , height (px 42)
                , Border.rounded 16
                , Border.width 1
                , Border.color (rgb255 64 88 69)
                , Bg.color (rgb255 10 36 18)
                , Font.size 20
                , Font.color (rgb255 244 255 246)
                ]
                { onPress = Just OpenAppMenu
                , label = el [ centerX, centerY, Font.color (rgb255 244 255 246), Element.htmlAttribute (Html.Attributes.attribute "aria-label" "Open app menu") ] (text "☰")
                }
        ]


viewMobileOpenGameStrip : Element Msg
viewMobileOpenGameStrip =
    row
        [ width fill
        , spacing 10
        , centerY
        , paddingXY 12 10
        , Border.rounded 18
        , Border.width 1
        , Border.color (rgb255 72 106 82)
        , Bg.color (rgb255 14 44 22)
        ]
        [ el [ width fill, Font.size 13, Font.color (rgb255 210 230 212), Font.semiBold ] (text "Game in progress")
        , Input.button
            [ paddingXY 12 8
            , Border.rounded 14
            , Bg.color (rgb255 33 194 216)
            , Border.width 1
            , Border.color (rgb255 98 232 248)
            , Font.color (rgb255 6 22 10)
            , Font.bold
            , Font.size 13
            ]
            { onPress = Just ToggleLobby, label = text "Open Game" }
        ]


viewMainTabs : Model -> Element Msg
viewMainTabs model =
    row
        [ width fill
        , Bg.color (rgb255 14 44 22)
        , Border.width 1
        , Border.color (rgb255 72 106 82)
        , Border.rounded 28
        , padding 4
        , spacing 0
        ]
        [ gradientTabButton "Setup" (model.mainTab == "game") (SetMainTab "game")
        , gradientTabButton "Boards" (model.mainTab == "boards") (SetMainTab "boards")
        ]


gradientTabButton : String -> Bool -> Msg -> Element Msg
gradientTabButton label active onPress =
    Input.button
        ([ width fill
         , paddingXY 0 11
         , Border.rounded 24
         , Font.bold
         , Font.size 15
         , Font.color
            (if active then
                rgb255 10 20 10

             else
                rgba255 255 255 255 140
            )
         ]
            ++ (if active then
                    [ Element.htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)") ]

                else
                    []
               )
        )
        { onPress = Just onPress, label = el [ centerX ] (text label) }


viewHeaderHtml : Model -> Bool -> Html Msg
viewHeaderHtml model hasGame =
    let
        heroStatus =
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
    in
    Html.section
        [ Html.Attributes.class "hero" ]
        [ Html.div
            [ Html.Attributes.class "hero-copy" ]
            [ Html.p [ Html.Attributes.class "eyebrow" ] [ Html.text "Realtime paper-soccer" ]
            , Html.h1 [] [ Html.text "Traceball Arena" ]
            , Html.p [ Html.Attributes.class "lede" ] [ Html.text "Draw one line per move, bounce from old points and walls, and sneak the ball into the other gate." ]
            ]
        , Html.div
            [ Html.Attributes.class "hero-brand" ]
            [ Html.img [ Html.Attributes.class "hero-icon", Html.Attributes.src "/icon.svg", Html.Attributes.alt "" ] []
            , Html.span [ Html.Attributes.class "hero-title" ] [ Html.text "Traceball Arena" ]
            ]
        , if hasGame then
            Html.div
                [ Html.Attributes.class "hero-game-status" ]
                [ Html.span [ Html.Attributes.class "hero-board-code" ] [ Html.text heroStatus.boardCode ]
                , Html.span [ Html.Attributes.class (heroRoleClass heroStatus.roleClass) ]
                    (if String.isEmpty heroStatus.roleClass then
                        [ Html.text heroStatus.roleText ]

                     else
                        [ Html.span [ Html.Attributes.class ("hero-role-dot " ++ heroStatus.roleClass) ] []
                        , Html.text heroStatus.roleText
                        ]
                    )
                , Html.span [ Html.Attributes.class "hero-turn-state" ] [ Html.text heroStatus.turnText ]
                ]

          else
            Html.text ""
        , Html.div
            [ Html.Attributes.class "hero-actions" ]
            [ if hasGame then
                Html.button
                    [ Html.Attributes.type_ "button"
                    , Html.Attributes.class "hero-lobby-btn"
                    , Html.Events.onClick ToggleLobby
                    ]
                    [ Html.text "Lobby" ]

              else
                Html.text ""
            , Html.button
                [ Html.Attributes.type_ "button"
                , Html.Attributes.class "app-menu-button"
                , Html.Attributes.attribute "aria-label" "Open app menu"
                , Html.Events.onClick OpenAppMenu
                ]
                [ Html.span [ Html.Attributes.attribute "aria-hidden" "true" ] [ Html.text "☰" ] ]
            ]
        ]


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
    if model.viewportWidth <= 640 then
        Input.button
            (formFieldAttrs
                ++ [ Border.rounded 16
                   , paddingXY 14 12
                   , Font.size 14
                   ]
            )
            { onPress = Just (OpenTimerSheet target)
            , label =
                row [ width fill, centerY ]
                    [ column [ spacing 2 ]
                        [ el [ Font.size 11, Font.color (rgb255 185 212 191), Font.semiBold ] (text "Selected timer")
                        , el [ Font.bold ] (text (moveTimerLabel current))
                        ]
                    , el [ alignRight, Font.color (rgb255 141 255 174), Font.bold, Font.size 12 ] (text "Change")
                    ]
            }

    else
        viewTimerSelect target current


viewTimerSelect : TimerTarget -> Int -> Element Msg
viewTimerSelect target current =
    Element.html
        (Html.select
            [ Html.Attributes.id (timerSelectId target)
            , Html.Attributes.style "background" "rgba(0,0,0,0.5)"
            , Html.Attributes.style "color" "#e0ffe0"
            , Html.Attributes.style "border" "1px solid rgba(255,255,255,0.1)"
            , Html.Attributes.style "border-radius" "10px"
            , Html.Attributes.style "padding" "12px 14px"
            , Html.Attributes.style "font-size" "14px"
            , Html.Attributes.style "cursor" "pointer"
            , Html.Attributes.style "width" "100%"
            , Html.Events.onInput (timerUpdateMsg target)
            ]
            (List.map
                (\s ->
                    Html.option
                        [ Html.Attributes.value (String.fromInt s)
                        , Html.Attributes.selected (s == current)
                        ]
                        [ Html.text
                            (if s == 0 then
                                "Off"

                             else
                                String.fromInt s ++ " seconds"
                            )
                        ]
                )
                timerOptions
            )
        )


viewTimerBottomSheet : TimerTarget -> Int -> Element Msg
viewTimerBottomSheet target current =
    Element.html <|
        Html.div
            [ Html.Attributes.style "position" "fixed"
            , Html.Attributes.style "inset" "0"
            , Html.Attributes.style "display" "flex"
            , Html.Attributes.style "align-items" "flex-end"
            , Html.Attributes.style "justify-content" "center"
            , Html.Attributes.style "padding" "0"
            , Html.Attributes.style "background" "rgba(2, 10, 4, 0.44)"
            , Html.Attributes.style "backdrop-filter" "blur(14px)"
            , Html.Attributes.style "z-index" "70"
            , Html.Events.onClick CloseTimerSheet
            ]
            [ Html.div
                [ Html.Attributes.style "width" "min(100%, 420px)"
                , Html.Attributes.style "max-height" "min(82vh, 560px)"
                , Html.Attributes.style "overflow-y" "auto"
                , Html.Attributes.style "border-top" "1px solid rgba(141, 255, 174, 0.22)"
                , Html.Attributes.style "border-left" "1px solid rgb(72, 106, 82)"
                , Html.Attributes.style "border-right" "1px solid rgb(72, 106, 82)"
                , Html.Attributes.style "border-radius" "28px 28px 0 0"
                , Html.Attributes.style "padding" "10px 16px calc(18px + env(safe-area-inset-bottom, 0px))"
                , Html.Attributes.style "background" "linear-gradient(180deg, rgba(23, 57, 31, 0.99), rgba(10, 35, 18, 0.99))"
                , Html.Attributes.style "box-shadow" "0 -18px 54px rgba(0, 0, 0, 0.42)"
                , Html.Events.stopPropagationOn "click" (Decode.succeed ( IgnoreSheetClick, True ))
                ]
                ([ Html.div
                    [ Html.Attributes.style "width" "44px"
                    , Html.Attributes.style "height" "5px"
                    , Html.Attributes.style "margin" "2px auto 14px"
                    , Html.Attributes.style "border-radius" "999px"
                    , Html.Attributes.style "background" "rgba(244, 255, 246, 0.34)"
                    ]
                    []
                 , Html.div
                    [ Html.Attributes.style "font-size" "11px"
                    , Html.Attributes.style "font-weight" "800"
                    , Html.Attributes.style "letter-spacing" "0.14em"
                    , Html.Attributes.style "text-transform" "uppercase"
                    , Html.Attributes.style "color" "rgb(141, 255, 174)"
                    ]
                    [ Html.text "Move timer" ]
                 , Html.h3
                    [ Html.Attributes.style "margin" "8px 0 4px"
                    , Html.Attributes.style "font-size" "21px"
                    , Html.Attributes.style "color" "rgb(244, 255, 246)"
                    ]
                    [ Html.text "Choose turn duration" ]
                 , Html.p
                    [ Html.Attributes.style "margin" "0 0 14px"
                    , Html.Attributes.style "font-size" "13px"
                    , Html.Attributes.style "line-height" "1.45"
                    , Html.Attributes.style "color" "rgb(199, 220, 204)"
                    ]
                    [ Html.text "The timer applies when you create or start the next game." ]
                 , Html.div
                    [ Html.Attributes.style "display" "inline-flex"
                    , Html.Attributes.style "align-items" "center"
                    , Html.Attributes.style "gap" "8px"
                    , Html.Attributes.style "margin-bottom" "8px"
                    , Html.Attributes.style "padding" "7px 10px"
                    , Html.Attributes.style "border-radius" "999px"
                    , Html.Attributes.style "border" "1px solid rgba(141, 255, 174, 0.22)"
                    , Html.Attributes.style "background" "rgba(8, 24, 12, 0.42)"
                    , Html.Attributes.style "font-size" "12px"
                    , Html.Attributes.style "font-weight" "700"
                    , Html.Attributes.style "color" "rgb(218, 236, 222)"
                    ]
                    [ Html.text "Current"
                    , Html.span [ Html.Attributes.style "color" "rgb(23, 210, 230)" ] [ Html.text (moveTimerLabel current) ]
                    ]
                 ]
                    ++ List.map (viewTimerSheetOption target current) timerOptions
                    ++ [ Html.button
                            [ Html.Attributes.type_ "button"
                            , Html.Attributes.style "width" "100%"
                            , Html.Attributes.style "margin-top" "12px"
                            , Html.Attributes.style "padding" "14px 14px"
                            , Html.Attributes.style "border-radius" "18px"
                            , Html.Attributes.style "border" "1px solid rgba(141, 255, 174, 0.14)"
                            , Html.Attributes.style "background" "rgba(255,255,255,0.06)"
                            , Html.Attributes.style "color" "rgb(244, 255, 246)"
                            , Html.Attributes.style "font-size" "14px"
                            , Html.Attributes.style "font-weight" "700"
                            , Html.Events.onClick CloseTimerSheet
                            ]
                            [ Html.text "Cancel" ]
                       ]
                )
            ]


viewTimerSheetOption : TimerTarget -> Int -> Int -> Html Msg
viewTimerSheetOption target current optionSeconds =
    let
        isSelected =
            current == optionSeconds

        borderColor =
            if isSelected then
                "rgba(23, 210, 230, 0.58)"

            else
                "rgba(255,255,255,0.10)"

        backgroundColor =
            if isSelected then
                "linear-gradient(135deg, rgba(39, 192, 80, 0.34), rgba(29, 160, 234, 0.34))"

            else
                "rgba(5, 26, 10, 0.66)"
    in
    Html.button
        [ Html.Attributes.type_ "button"
        , Html.Attributes.style "width" "100%"
        , Html.Attributes.style "display" "flex"
        , Html.Attributes.style "align-items" "center"
        , Html.Attributes.style "justify-content" "space-between"
        , Html.Attributes.style "gap" "12px"
        , Html.Attributes.style "margin-top" "10px"
        , Html.Attributes.style "padding" "16px 16px"
        , Html.Attributes.style "border-radius" "20px"
        , Html.Attributes.style "border" ("1px solid " ++ borderColor)
        , Html.Attributes.style "background" backgroundColor
        , Html.Attributes.style "color" "rgb(244, 255, 246)"
        , Html.Attributes.style "font-size" "15px"
        , Html.Attributes.style "font-weight" "800"
        , Html.Events.onClick (timerSelectMsg target optionSeconds)
        ]
        [ Html.span [] [ Html.text (moveTimerLabel optionSeconds) ]
        , Html.span
            [ Html.Attributes.style "color"
                (if isSelected then
                    "rgb(23, 210, 230)"

                 else
                    "rgba(255,255,255,0.34)"
                )
            ]
            [ Html.text
                (if isSelected then
                    "Selected"

                 else
                    ""
                )
            ]
        ]



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
            viewHistoryOverlay model isMobile

        Just "rules" ->
            viewRulesOverlay isMobile

        Just _ ->
            none


dialogActions : Dialog.Actions Msg
dialogActions =
    { dismiss = CloseAppMenu
    , ignoreClick = IgnoreSheetClick
    , backToMenu = OpenAppMenu
    }


viewHistoryOverlay : Model -> Bool -> Element Msg
viewHistoryOverlay model isMobile =
    Dialog.viewOverlay dialogActions
        [ Dialog.viewHeader dialogActions isMobile "Traceball Arena" "Game History"
        , Html.div [ Html.Attributes.class "dialog-body" ]
            [ if List.isEmpty model.gameHistory then
                Html.div [ Html.Attributes.class "dialog-empty" ]
                    [ Html.div [ Html.Attributes.class "dialog-empty-icon" ] [ Html.text "📂" ]
                    , Html.div [ Html.Attributes.class "dialog-empty-text" ]
                        [ Html.text "No games yet. Finished games will appear here." ]
                    ]

              else
                Html.div [ Html.Attributes.class "history-list" ]
                    (List.indexedMap (HistoryView.viewHistoryEntry model.currentTimeMs OpenHistoryReplay) (List.take 12 model.gameHistory))
            ]
        ]


viewRulesOverlay : Bool -> Element Msg
viewRulesOverlay isMobile =
    Dialog.viewOverlay dialogActions
        [ Dialog.viewHeader dialogActions isMobile "How to play" "Game Rules"
        , Html.div [ Html.Attributes.class "dialog-body" ]
            [ Html.ul [ Html.Attributes.class "rules-list" ]
                (List.map ruleItem
                    [ "Draw one line segment per turn from the ball's current position to any adjacent grid point."
                    , "You may bounce off points that were already visited — but never cross or overlap an existing line."
                    , "Bouncing off the walls is also legal and often strategic."
                    , "The point in the middle of the gate line is a special bouncing point. It can be strategically used to change the direction of the ball or close the gate."
                    , "If you have no legal moves, you lose the round and your opponent scores."
                    , "Score by moving the ball into the opponent's goal gate."
                    , "If the move timer expires, the turn passes to the other player."
                    ]
                )
            , Html.p [ Html.Attributes.class "rules-note" ]
                [ Html.text "A variant of Paper Soccer (Paper Football). First player to reach the agreed score wins the match." ]
            ]
        ]


ruleItem : String -> Html Msg
ruleItem text =
    Html.li [ Html.Attributes.class "rules-list-item" ]
        [ Html.span [ Html.Attributes.class "rules-bullet" ] []
        , Html.span [] [ Html.text text ]
        ]


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
