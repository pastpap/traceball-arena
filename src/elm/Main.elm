port module Main exposing (main)

import Board.Types exposing (Board, BoardState(..), Point, Seat, SeatState(..), SessionState(..))
import Board.View exposing (viewBoard)
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
import Json.Decode as Decode
import Json.Encode as Encode
import Protocol exposing (ServerMessage(..), StateMessage, boardNotFoundCode)
import Task
import Time



-- ── Model ──────────────────────────────────────────────────────────────────────


type alias Model =
    { board : Maybe Board
    , boardCode : String
    , version : Int
    , error : Maybe String
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
    , onlineMoveTimer : Int
    , showLobby : Bool
    , localLobbyTab : Bool
    , mainTab : String
    , joinedSeat : Maybe String
    , viewportWidth : Int
    , dismissedWinnerKey : Maybe String
    , showTimerSheet : Bool
    , currentTimeMs : Int
    }


type alias Flags =
    { boardCode : String
    , clientId : String
    , playerName : String
    , savedLocalGame : Maybe LocalGame
    , savedLocalPaused : Bool
    , onlineMoveTimer : Int
    }



-- ── Local game types ──────────────────────────────────────────────────────────


type alias LocalPoint =
    { x : Int, y : Int }


type alias LocalMove =
    { playerId : String
    , from : LocalPoint
    , to : LocalPoint
    , segment : String
    , bounce : Bool
    }


type alias LocalGame =
    { blueName : String
    , redName : String
    , turn : String
    , ball : LocalPoint
    , visited : List String
    , segments : List String
    , moves : List LocalMove
    , scoreBlue : Int
    , scoreRed : Int
    , winner : Maybe String
    , endReason : Maybe String
    , moveTimerSeconds : Int
    , turnStartedAtMs : Maybe Int
    , consecutiveTimeouts : Int
    }



-- ── Board summary ─────────────────────────────────────────────────────────────


type alias BoardSummary =
    { roomId : String
    , state : String
    , activeCount : Int
    , vacantCount : Int
    , moveCount : Int
    }



-- ── Msg ────────────────────────────────────────────────────────────────────────


type Msg
    = ReceiveSocket Decode.Value
    | ConnectionChanged String
    | UpdateBoardCodeInput String
    | SubmitWatchBoard
    | UpdatePlayerName String
    | ClaimSeat String
    | JoinWaitingList
    | LeaveWaitingList
    | LeaveSeat
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
    | ReceiveBoardCreated String
    | RequestBoardList
    | CreateBoard
    | UpdateOnlineMoveTimer String
    | SelectOnlineMoveTimer Int
    | OpenTimerSheet
    | CloseTimerSheet
    | IgnoreSheetClick
    | ToggleLobby
    | SetLobbyTab Bool
    | SetMainTab String
    | ViewportMeasured Dom.Viewport
    | ViewportResized Int Int
    | DismissWinnerBanner
    | Tick Time.Posix



-- ── Ports ──────────────────────────────────────────────────────────────────────


port incomingSocketMessage : (Decode.Value -> msg) -> Sub msg


port incomingConnectionStatus : (String -> msg) -> Sub msg


port incomingBoardList : (Decode.Value -> msg) -> Sub msg


port incomingBoardCreated : (String -> msg) -> Sub msg


port outgoingClientCommand : Encode.Value -> Cmd msg



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
            , version = 0
            , error = Nothing
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
            , onlineMoveTimer = 15
            , showLobby = True
            , localLobbyTab = False
            , mainTab = "game"
            , joinedSeat = Nothing
            , viewportWidth = 1024
            , dismissedWinnerKey = Nothing
            , showTimerSheet = False
            , currentTimeMs = 0
            }

        model =
            applyFlags flags emptyModel

        initialCommands =
            Task.perform ViewportMeasured Dom.getViewport
                :: Task.perform Tick Time.now
                :: outgoingClientCommand (Encode.object [ ( "type", Encode.string "fetchBoardList" ) ])
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
        , Browser.Events.onResize ViewportResized
        , Time.every 250 Tick
        ]



-- ── Flags decoder ─────────────────────────────────────────────────────────────


flagsDecoder : Decode.Decoder Flags
flagsDecoder =
    Decode.map6 Flags
        (Decode.field "boardCode" Decode.string)
        (Decode.field "clientId" Decode.string)
        (Decode.field "playerName" Decode.string)
        (Decode.maybe (Decode.field "savedLocalGame" localGameDecoder))
        (Decode.maybe (Decode.field "savedLocalPaused" Decode.bool)
            |> Decode.map (Maybe.withDefault False)
        )
        (Decode.maybe (Decode.field "onlineMoveTimer" Decode.int)
            |> Decode.map (Maybe.withDefault 15)
        )


applyFlags : Decode.Value -> Model -> Model
applyFlags flags model =
    case Decode.decodeValue flagsDecoder flags of
        Ok parsed ->
            let
                sanitized =
                    sanitizeBoardCode parsed.boardCode

                invalid =
                    not (String.isEmpty (String.trim parsed.boardCode)) && not (isValidBoardCode sanitized)

                shouldOpenGameImmediately =
                    isValidBoardCode sanitized
            in
            { model
                | boardCode = sanitized
                , clientId = parsed.clientId
                , draftBoardCode = sanitized
                , playerName = sanitizePlayerName parsed.playerName
                , localGame = parsed.savedLocalGame
                , localPaused = parsed.savedLocalPaused
                , onlineMoveTimer = parsed.onlineMoveTimer
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
    if incoming.version <= model.version then
        { model | ignoredStaleVersion = Just incoming.version, error = Nothing }

    else
        let
            nextModel =
                { model
                    | board = Just incoming.board
                    , boardCode = incoming.boardCode
                    , draftBoardCode = incoming.boardCode
                    , version = incoming.version
                    , error = Nothing
                    , ignoredStaleVersion = Nothing
                    , replayIndex = Nothing
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
                            ( { model | error = Nothing, joinedSeat = Nothing }, Cmd.none )

                        WaitingListJoined ->
                            ( { model | error = Nothing }, Cmd.none )

                        WaitingListLeft ->
                            ( { model | error = Nothing }, Cmd.none )

                        SeatFreed ->
                            ( { model | error = Nothing }, Cmd.none )

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
            in
            case model.localGame of
                Just lg ->
                    if model.localPaused then
                        ( { model | currentTimeMs = nowMs }, Cmd.none )

                    else
                        case expireLocalTurnIfNeeded nowMs lg of
                            Just nextGame ->
                                ( { model | currentTimeMs = nowMs, localGame = Just nextGame, localPaused = nextGame.turnStartedAtMs == Nothing && nextGame.winner == Nothing }
                                , persistLocalCmd (Just nextGame) (nextGame.turnStartedAtMs == Nothing && nextGame.winner == Nothing)
                                )

                            Nothing ->
                                ( { model | currentTimeMs = nowMs }, Cmd.none )

                Nothing ->
                    ( { model | currentTimeMs = nowMs }, Cmd.none )

        ViewportMeasured viewport ->
            ( { model | viewportWidth = round viewport.viewport.width }, Cmd.none )

        ViewportResized width _ ->
            ( { model | viewportWidth = width }, Cmd.none )

        DismissWinnerBanner ->
            ( { model | dismissedWinnerKey = currentWinnerKey model }, Cmd.none )

        OpenTimerSheet ->
            ( { model | showTimerSheet = True }, Cmd.none )

        CloseTimerSheet ->
            ( { model | showTimerSheet = False }, Cmd.none )

        IgnoreSheetClick ->
            ( model, Cmd.none )

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
                    , outgoingClientCommand
                        (Encode.object
                            [ ( "type", Encode.string "updateUrl" )
                            , ( "url", Encode.string ("/?board=" ++ boardCode) )
                            ]
                        )
                    ]
                )

            else
                ( { model | error = Just "Enter a valid board code." }, Cmd.none )

        UpdatePlayerName raw ->
            let
                name =
                    sanitizePlayerName raw
            in
            ( { model | playerName = name, error = Nothing }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "persistPlayerName" )
                    , ( "name", Encode.string name )
                    ]
                )
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
                            case applyLocalMove model.currentTimeMs lg point of
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
                            restartLocalRound model.currentTimeMs lg
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
            let
                game =
                    startLocalGame model.currentTimeMs model.localBlueName model.localRedName model.onlineMoveTimer
            in
            ( { model | localGame = Just game, localPaused = False, error = Nothing, replayIndex = Nothing, dismissedWinnerKey = Nothing, showLobby = False, showTimerSheet = False }
            , persistLocalCmd (Just game) False
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
                                restartLocalTurnClock model.currentTimeMs { lg | consecutiveTimeouts = 0 }
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
                            restartLocalRound model.currentTimeMs lg
                    in
                    ( { model | localGame = Just nextGame, localPaused = False, error = Nothing, dismissedWinnerKey = Nothing }
                    , persistLocalCmd (Just nextGame) False
                    )

                Nothing ->
                    ( model, Cmd.none )

        LeaveLocalGame ->
            ( { model | localGame = Nothing, localPaused = False, error = Nothing, dismissedWinnerKey = Nothing }
            , persistLocalCmd Nothing False
            )

        UpdateLocalBlueName raw ->
            ( { model | localBlueName = String.trim raw |> String.left 24 }, Cmd.none )

        UpdateLocalRedName raw ->
            ( { model | localRedName = String.trim raw |> String.left 24 }, Cmd.none )

        ReceiveBoardList value ->
            let
                rooms =
                    case Decode.decodeValue (Decode.field "rooms" (Decode.list boardSummaryDecoder)) value of
                        Ok list ->
                            list

                        Err _ ->
                            case Decode.decodeValue (Decode.list boardSummaryDecoder) value of
                                Ok list ->
                                    list

                                Err _ ->
                                    []
            in
            ( { model | boardList = rooms }, Cmd.none )

        ReceiveBoardCreated newCode ->
            let
                sanitized =
                    sanitizeBoardCode newCode
            in
            if isValidBoardCode sanitized then
                ( { model | boardCode = sanitized, draftBoardCode = sanitized, connectionStatus = "connecting", dismissedWinnerKey = Nothing }
                , outgoingClientCommand
                    (Encode.object
                        [ ( "type", Encode.string "claimSeat" )
                        , ( "seatId", Encode.string "p1" )
                        , ( "name", Encode.string model.playerName )
                        , ( "roomId", Encode.string sanitized )
                        , ( "clientId", Encode.string model.clientId )
                        ]
                    )
                )

            else
                ( { model | error = Just "Board creation failed." }, Cmd.none )

        RequestBoardList ->
            ( model, outgoingClientCommand (Encode.object [ ( "type", Encode.string "fetchBoardList" ) ]) )

        CreateBoard ->
            ( { model | showLobby = False, showTimerSheet = False }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "createBoard" )
                    , ( "moveTimeLimitSeconds", Encode.int model.onlineMoveTimer )
                    ]
                )
            )

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
            ( { model | onlineMoveTimer = normalized, showTimerSheet = False }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "persistOnlineMoveTimer" )
                    , ( "seconds", Encode.int normalized )
                    ]
                )
            )

        ToggleLobby ->
            ( { model | showLobby = not model.showLobby }, Cmd.none )

        SetMainTab tab ->
            ( { model | mainTab = tab }, Cmd.none )

        SetLobbyTab isLocal ->
            ( { model | localLobbyTab = isLocal, showLobby = True }, Cmd.none )



-- ── View ───────────────────────────────────────────────────────────────────────


view : Model -> Html Msg
view model =
    let
        hasGame =
            model.localGame /= Nothing || model.board /= Nothing
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
                , inFront
                    (if model.showTimerSheet && model.viewportWidth <= 640 then
                        viewTimerBottomSheet model.onlineMoveTimer

                     else
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
            model.localGame /= Nothing || model.board /= Nothing

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
                        viewBoardListSection model

                      else
                        viewLobbyCard model
                    ]

        gameView =
            el [ width fill, centerX, paddingXY 10 10 ] <|
                Element.html <|
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
                        [ lobbyLayout, gameView ]

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
            { onPress = Nothing
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
                { onPress = Nothing
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


viewLobbyCard : Model -> Element Msg
viewLobbyCard model =
    column
        [ width fill
        , Bg.color (rgb255 14 44 22)
        , Border.width 1
        , Border.color (rgb255 72 106 82)
        , Border.rounded 24
        , padding 20
        , spacing 16
        ]
        [ -- Title and description change based on active subtab
          el [ Font.bold, Font.size 20 ]
            (text
                (if model.localLobbyTab then
                    "Local same-screen PvP"

                 else
                    "Online game"
                )
            )
        , paragraph [ width fill, Font.size 13, Font.color (rgba255 255 255 255 100), spacing 4 ]
            [ text
                (if model.localLobbyTab then
                    "Players face each other and play on this device. The pitch stays fixed for local play."

                 else
                    "Open a board as watcher, then choose an open seat when you are ready to play."
                )
            ]

        -- Online/Local subtab toggle (same pill style as main tabs)
        , row
            [ width fill
            , Bg.color (rgb255 14 44 22)
            , Border.width 1
            , Border.color (rgb255 72 106 82)
            , Border.rounded 28
            , padding 4
            , spacing 0
            ]
            [ gradientTabButton "Online" (not model.localLobbyTab) (SetLobbyTab False)
            , gradientTabButton "Local" model.localLobbyTab (SetLobbyTab True)
            ]

        -- Form content
        , if model.localLobbyTab then
            viewLocalLobbyContent model

          else
            viewOnlineLobbyContent model
        ]


type alias PauseOverlayConfig =
    { title : String
    , message : String
    , turnText : String
    , resumeAction : Maybe Msg
    , newRoundAction : Maybe Msg
    }


type alias BoardScreenConfig =
    { board : Board
    , ownSeat : Maybe String
    , replayIndex : Maybe Int
    , isCompactLayout : Bool
    , showWinnerOverlay : Bool
    , timerSecs : Maybe Int
    , timerRemainingSecs : Maybe Int
    , statusText : String
    , turnIndicatorText : String
    , turnIndicatorIsRed : Bool
    , matchSubtitle : String
    , moveCount : Int
    , isPaused : Bool
    , showJoinBlue : Bool
    , showJoinRed : Bool
    , showSeatActions : Bool
    , leaveAction : Maybe Msg
    , pauseAction : Maybe Msg
    , newRoundAction : Maybe Msg
    , pauseOverlay : Maybe PauseOverlayConfig
    }


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

        pauseOverlay =
            if model.localPaused then
                Just
                    { title = "Game paused"
                    , message = "Board hidden while paused."
                    , turnText = turnOwnerName board lg.turn ++ " to move when resumed."
                    , resumeAction = Just ToggleLocalPause
                    , newRoundAction = Just LocalNewRound
                    }

            else
                Nothing
    in
    viewBoardScreenHtml
        { board = board
        , ownSeat = Just lg.turn
        , replayIndex = model.replayIndex
        , isCompactLayout = model.viewportWidth <= 640
        , showWinnerOverlay = winnerKeyForBoard board /= model.dismissedWinnerKey
        , timerSecs = timerSecs
        , timerRemainingSecs = Nothing
        , statusText = localStatusText model board lg.turn winnerName
        , turnIndicatorText = localTurnIndicatorText model board lg.turn winnerName
        , turnIndicatorIsRed = normalizeSeatId lg.turn == "red"
        , matchSubtitle = "Board LOCAL"
        , moveCount = List.length lg.moves
        , isPaused = model.localPaused
        , showJoinBlue = False
        , showJoinRed = False
        , showSeatActions = False
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

        round =
            board.currentSession |> Maybe.andThen .round

        turn =
            round |> Maybe.map .turn |> Maybe.withDefault ""

        winnerName =
            if replayShowsWinner model.replayIndex (currentMoveCount model) then
                round |> Maybe.andThen .winner |> Maybe.map (winnerDisplayName board)

            else
                Nothing
    in
    viewBoardScreenHtml
        { board = board
        , ownSeat = ownSeat
        , replayIndex = model.replayIndex
        , isCompactLayout = model.viewportWidth <= 640
        , showWinnerOverlay = winnerKeyForBoard board /= model.dismissedWinnerKey
        , timerSecs = board.currentSession |> Maybe.andThen .moveTimeLimitSeconds |> Maybe.andThen positiveMaybe
        , timerRemainingSecs = activeTimerRemainingSeconds model.currentTimeMs board
        , statusText = onlineStatusText board ownSeat turn winnerName
        , turnIndicatorText = onlineTurnIndicatorText board turn winnerName
        , turnIndicatorIsRed = normalizeSeatId turn == "red"
        , matchSubtitle = "Board " ++ board.code
        , moveCount = currentMoveCount model
        , isPaused = board.state == SessionPaused
        , showJoinBlue = ownSeat == Nothing && seatIsVacant board.blue
        , showJoinRed = ownSeat == Nothing && seatIsVacant board.red
        , showSeatActions = True
        , leaveAction = ownSeat |> Maybe.map (\_ -> LeaveSeat)
        , pauseAction = Nothing
        , newRoundAction =
            if winnerName /= Nothing && ownSeat /= Nothing then
                Just StartNewRound

            else
                Nothing
        , pauseOverlay = Nothing
        }


viewBoardScreenHtml : BoardScreenConfig -> Html Msg
viewBoardScreenHtml config =
    if config.isCompactLayout then
        layout [ width fill ] (viewMobileBoardScreen config)

    else
        viewDesktopBoardScreenHtml config


viewDesktopBoardScreenHtml : BoardScreenConfig -> Html Msg
viewDesktopBoardScreenHtml config =
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
    in
    Html.section [ Html.Attributes.class "game-layout" ]
        [ Html.div
            [ Html.Attributes.class "board-card mobile-page active"
            , Html.Attributes.attribute "data-mobile-page" "play"
            ]
            [ Html.div [ Html.Attributes.id "playStatus", Html.Attributes.class "play-status" ] [ Html.text config.statusText ]
            , viewTimerPillHtml config.timerSecs config.timerRemainingSecs
            , Html.div
                [ Html.Attributes.classList
                    [ ( "turn-indicator", True )
                    , ( "red", config.turnIndicatorIsRed )
                    ]
                ]
                [ Html.text config.turnIndicatorText ]
            , Html.div [ Html.Attributes.class "play-board-actions" ]
                [ viewGhostButtonHtml "play-join-button ghost" config.showJoinBlue (Just (ClaimSeat "blue")) "Join Blue"
                , viewGhostButtonHtml "play-join-button ghost" config.showJoinRed (Just (ClaimSeat "red")) "Join Red"
                , viewGhostButtonHtml "play-pause-button ghost"
                    (config.pauseAction /= Nothing)
                    config.pauseAction
                    (if config.isPaused then
                        "▶ Resume"

                     else
                        "⏸ Pause"
                    )
                , viewGhostButtonHtml "play-leave-button ghost danger" (config.leaveAction /= Nothing) config.leaveAction "Leave / forfeit"
                ]
            , viewBoardStageHtml True config blueName redName blueScore redScore winnerName
            , viewReplayHtml config.replayIndex config.moveCount
            ]
        , Html.aside
            [ Html.Attributes.class "side mobile-page active"
            , Html.Attributes.attribute "data-mobile-page" "match"
            ]
            [ Html.div [ Html.Attributes.class "card scoreboard elm-match-panel" ]
                ([ Html.h2 [] [ Html.text "Match" ]
                 , Html.p [ Html.Attributes.class "elm-match-subtitle" ] [ Html.text config.matchSubtitle ]
                 , Html.div [ Html.Attributes.id "status" ] [ Html.text config.statusText ]
                 , Html.div [ Html.Attributes.class "players score-strip", Html.Attributes.attribute "aria-label" "Room score" ]
                    [ Html.div [ Html.Attributes.class "score-name blue-name" ]
                        [ Html.span [ Html.Attributes.class "dot blue" ] []
                        , Html.strong [] [ Html.text blueName ]
                        ]
                    , Html.div [ Html.Attributes.class "score-spacer", Html.Attributes.attribute "aria-hidden" "true" ] []
                    , Html.div [ Html.Attributes.class "score-name red-name" ]
                        [ Html.strong [] [ Html.text redName ]
                        , Html.span [ Html.Attributes.class "dot red" ] []
                        ]
                    , Html.div [ Html.Attributes.class "score-number blue-score" ] [ Html.text (String.fromInt blueScore) ]
                    , Html.div [ Html.Attributes.class "score-dash" ] [ Html.text "-" ]
                    , Html.div [ Html.Attributes.class "score-number red-score" ] [ Html.text (String.fromInt redScore) ]
                    ]
                 , Html.div [ Html.Attributes.class "elm-match-actions" ]
                    [ viewSquareIconButtonHtml "elm-match-icon danger" config.leaveAction "✕" "Leave game"
                    , viewSquareIconButtonHtml "elm-match-icon"
                        config.pauseAction
                        (if config.isPaused then
                            "▶"

                         else
                            "⏸"
                        )
                        "Pause game"
                    , viewSquareIconButtonHtml "elm-match-icon success" config.newRoundAction "↺" "Start new round"
                    ]
                 ]
                    ++ (case winnerName of
                            Just name ->
                                [ viewRoundSummaryHtml name blueScore redScore config.newRoundAction ]

                            Nothing ->
                                []
                       )
                    ++ [ if config.showSeatActions && (config.showJoinBlue || config.showJoinRed || config.leaveAction /= Nothing) then
                            Html.div [ Html.Attributes.class "seat-actions" ]
                                [ viewGhostButtonHtml "ghost" config.showJoinBlue (Just (ClaimSeat "blue")) "Join Blue"
                                , viewGhostButtonHtml "ghost" config.showJoinRed (Just (ClaimSeat "red")) "Join Red"
                                , viewGhostButtonHtml "ghost danger" (config.leaveAction /= Nothing) config.leaveAction "Leave / forfeit"
                                ]

                         else
                            Html.text ""
                       ]
                )
            ]
        ]


viewMobileBoardScreen : BoardScreenConfig -> Element Msg
viewMobileBoardScreen config =
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
    column [ width fill, spacing 12 ]
        [ viewMobileTopCard config statusBanner blueName redName blueScore redScore
        , el [ width fill, centerX ]
            (Element.html (viewBoardStageHtml True config blueName redName blueScore redScore winnerName))
        , viewMobileReplayCard config.replayIndex config.moveCount
        ]


viewBoardStageHtml : Bool -> BoardScreenConfig -> String -> String -> Int -> Int -> Maybe String -> Html Msg
viewBoardStageHtml showWinnerOverlay config blueName redName blueScore redScore winnerName =
    Html.div
        [ Html.Attributes.classList
            [ ( "board-stage", True )
            , ( "paused", config.isPaused )
            , ( "mobile-hero-board", config.isCompactLayout )
            ]
        ]
        ([ viewBoard ClickLegalMove config.ownSeat config.replayIndex config.board
         , viewBoardBadgeHtml "top" "red" redName redScore
         , viewBoardBadgeHtml "bottom" "blue" blueName blueScore
         ]
            ++ (case config.pauseOverlay of
                    Just overlay ->
                        [ viewPauseOverlayHtml overlay ]

                    Nothing ->
                        []
               )
            ++ (if showWinnerOverlay && config.showWinnerOverlay then
                    case winnerName of
                        Just name ->
                            [ viewWinnerOverlayHtml config.isCompactLayout name config.newRoundAction ]

                        Nothing ->
                            []

                else
                    []
               )
        )


viewMobileTopCard : BoardScreenConfig -> String -> String -> String -> Int -> Int -> Element Msg
viewMobileTopCard config statusBanner blueName redName blueScore redScore =
    if config.newRoundAction /= Nothing then
        mobileCard
            [ row [ width fill, centerY ]
                [ el [ Font.color (rgba255 255 255 255 170), Font.size 11, Font.semiBold ] (text config.matchSubtitle)
                , el [ alignRight, Font.color (rgb255 141 255 174), Font.size 11, Font.bold, Font.letterSpacing 1 ] (text "ROUND COMPLETE")
                ]
            , row [ width fill, spacing 8, centerY ]
                [ viewMobileScorePill "blue" blueName blueScore
                , viewMobileScorePill "red" redName redScore
                ]
            , row [ width fill, spacing 10 ] <|
                List.filterMap identity
                    [ config.newRoundAction |> Maybe.map (\msg -> viewMobilePrimaryActionButton msg "▶" "Continue")
                    , config.leaveAction |> Maybe.map (\msg -> viewMobileActionButton True msg "✕" "Leave")
                    ]
            ]

    else
        mobileCard
            [ row [ width fill, centerY ]
                [ viewMobileTimerChip config.timerSecs config.timerRemainingSecs
                , el [ alignRight, Font.color (rgba255 255 255 255 170), Font.size 11, Font.semiBold ] (text config.matchSubtitle)
                ]
            , el
                [ width fill
                , paddingXY 12 10
                , Border.rounded 18
                , Bg.color
                    (if config.turnIndicatorIsRed then
                        rgb255 83 29 26

                     else
                        rgb255 17 54 76
                    )
                , Border.width 1
                , Border.color (rgb255 76 106 118)
                , Font.color (rgb255 245 249 244)
                , Font.size 15
                , Font.bold
                ]
                (paragraph [] [ text statusBanner ])
            , row [ width fill, spacing 8, centerY ]
                [ viewMobileScorePill "blue" blueName blueScore
                , viewMobileScorePill "red" redName redScore
                ]
            , wrappedRow [ width fill, spacing 10 ] <|
                List.filterMap identity
                    [ if config.showSeatActions && config.showJoinBlue then
                        Just (viewMobileActionButton False (ClaimSeat "blue") "●" "Join Blue")

                      else
                        Nothing
                    , if config.showSeatActions && config.showJoinRed then
                        Just (viewMobileActionButton False (ClaimSeat "red") "●" "Join Red")

                      else
                        Nothing
                    , config.pauseAction
                        |> Maybe.map
                            (\msg ->
                                viewMobileActionButton False
                                    msg
                                    (if config.isPaused then
                                        "▶"

                                     else
                                        "⏸"
                                    )
                                    (if config.isPaused then
                                        "Resume"

                                     else
                                        "Pause"
                                    )
                            )
                    , config.leaveAction |> Maybe.map (\msg -> viewMobileActionButton True msg "✕" "Leave")
                    ]
            ]


viewMobileTimerChip : Maybe Int -> Maybe Int -> Element Msg
viewMobileTimerChip timerSecs timerRemainingSecs =
    case timerSecs of
        Just secs ->
            row
                [ spacing 8
                , paddingXY 10 6
                , Border.rounded 999
                , Bg.color (rgba255 0 0 0 150)
                , Border.width 1
                , Border.color (rgba255 255 255 255 20)
                , Font.color (rgb255 240 255 244)
                , Font.size 12
                , Font.bold
                ]
                (text ("Timer: " ++ String.fromInt secs ++ "s")
                    :: (case timerRemainingSecs of
                            Just remainingSecs ->
                                [ el [ Font.color (rgb255 141 255 174) ] (text (String.fromInt remainingSecs ++ "s left")) ]

                            Nothing ->
                                []
                       )
                )

        Nothing ->
            none


viewMobileScorePill : String -> String -> Int -> Element Msg
viewMobileScorePill color name score =
    let
        nameRow =
            if color == "blue" then
                row [ width fill, spacing 7, centerY ]
                    [ el [ width fill, alignRight ] (viewMobileEllipsisText True 12 name)
                    , el [ Font.size 12, Font.color (rgb255 11 124 255) ] (text "●")
                    ]

            else
                row [ width fill, spacing 7, centerY ]
                    [ el [ Font.size 12, Font.color (rgb255 255 59 48) ] (text "●")
                    , el [ width fill ] (viewMobileEllipsisText False 12 name)
                    ]

        scoreRow =
            if color == "blue" then
                row [ width fill ]
                    [ el [ alignRight, Font.size 32, Font.bold, Font.color (rgb255 255 255 255) ]
                        (text (String.fromInt score))
                    ]

            else
                row [ width fill ]
                    [ el [ Font.size 32, Font.bold, Font.color (rgb255 255 255 255) ]
                        (text (String.fromInt score))
                    ]
    in
    column
        [ width fill
        , height (px 92)
        , spacing 4
        , paddingXY 10 9
        , Border.rounded 18
        , Bg.color (rgb255 15 42 22)
        , Border.width 1
        , Border.color
            (if color == "blue" then
                rgb255 34 90 160

             else
                rgb255 142 49 45
            )
        , clip
        ]
        [ nameRow
        , scoreRow
        ]


viewMobileEllipsisText : Bool -> Int -> String -> Element Msg
viewMobileEllipsisText alignEnd size label =
    el
        [ width fill
        , clipX
        , Font.size size
        , Font.bold
        , Font.color (rgb255 232 245 236)
        , Element.htmlAttribute
            (Html.Attributes.style
                "text-align"
                (if alignEnd then
                    "right"

                 else
                    "left"
                )
            )
        , Element.htmlAttribute (Html.Attributes.style "overflow" "hidden")
        , Element.htmlAttribute (Html.Attributes.style "text-overflow" "ellipsis")
        , Element.htmlAttribute (Html.Attributes.style "white-space" "nowrap")
        ]
        (text label)


viewMobileActionButton : Bool -> Msg -> String -> String -> Element Msg
viewMobileActionButton isDanger msg icon label =
    Input.button
        [ width fill
        , paddingXY 0 10
        , Border.rounded 16
        , Border.width 1
        , Border.color
            (if isDanger then
                rgb255 219 80 73

             else
                rgb255 70 92 74
            )
        , Bg.color
            (if isDanger then
                rgb255 86 24 20

             else
                rgb255 28 54 31
            )
        , Font.color (rgb255 248 241 238)
        , Font.size 16
        , Font.bold
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" label)
        ]
        { onPress = Just msg, label = el [ centerX, centerY ] (text icon) }


viewMobilePrimaryActionButton : Msg -> String -> String -> Element Msg
viewMobilePrimaryActionButton msg icon label =
    Input.button
        [ width fill
        , paddingXY 0 10
        , Border.rounded 16
        , Bg.color (rgb255 246 185 43)
        , Font.color (rgb255 50 29 0)
        , Font.bold
        , Font.size 16
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" label)
        ]
        { onPress = Just msg, label = el [ centerX, centerY ] (text icon) }


viewMobileReplayCard : Maybe Int -> Int -> Element Msg
viewMobileReplayCard replayIndex moveCount =
    let
        currentIndex =
            Maybe.withDefault moveCount replayIndex

        label =
            if moveCount == 0 then
                "Replay appears once moves are made."

            else
                "Move "
                    ++ String.fromInt currentIndex
                    ++ " of "
                    ++ String.fromInt moveCount
                    ++ (if replayIndex == Nothing then
                            " - live board"

                        else
                            ""
                       )

        progress =
            if moveCount <= 0 then
                0

            else
                round ((toFloat currentIndex / toFloat moveCount) * 100)
    in
    mobileCard
        [ el [ Font.size 15, Font.bold, Font.color (rgb255 244 255 246) ] (text "Replay")
        , row [ width fill, spacing 8 ]
            [ viewMobileReplayButton (moveCount > 0) (Just ReplayToStart) "⏮" "Start"
            , viewMobileReplayButton (moveCount > 0) (Just ReplayStepBack) "◀" "Back"
            , viewMobileReplayButton (moveCount > 0) (Just ReplayStepForward) "▶" "Next"
            , viewMobileReplayButton (moveCount > 0) (Just ReplayToLive) "⏭" "Live"
            ]
        , el
            [ width fill
            , height (px 8)
            , Border.rounded 999
            , Bg.color (rgba255 255 255 255 28)
            , clip
            ]
            (el
                [ width (fillPortion progress)
                , height fill
                , Border.rounded 999
                , Bg.color (rgb255 24 221 79)
                ]
                none
            )
        , paragraph [ width fill, Font.size 13, Font.color (rgb255 200 220 200), Font.bold ] [ text label ]
        ]


viewMobileReplayButton : Bool -> Maybe Msg -> String -> String -> Element Msg
viewMobileReplayButton enabled onPress icon label =
    Input.button
        [ width fill
        , paddingXY 0 8
        , Border.rounded 16
        , Border.width 1
        , Border.color (rgb255 70 92 74)
        , Bg.color (rgb255 28 54 31)
        , Font.color
            (if enabled then
                rgb255 244 255 246

             else
                rgba255 255 255 255 120
            )
        , Font.size 16
        , Font.bold
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" label)
        ]
        { onPress =
            if enabled then
                onPress

            else
                Nothing
        , label = el [ centerX, centerY ] (text icon)
        }


mobileCard : List (Element Msg) -> Element Msg
mobileCard children =
    column
        [ width fill
        , spacing 8
        , padding 10
        , Border.rounded 22
        , Border.width 1
        , Border.color (rgb255 110 130 112)
        , Bg.color (rgba255 2 29 10 214)
        , Font.color (rgb255 244 255 246)
        , Font.size 13
        ]
        children


viewTimerPillHtml : Maybe Int -> Maybe Int -> Html Msg
viewTimerPillHtml timerSecs timerRemainingSecs =
    case timerSecs of
        Just secs ->
            Html.div [ Html.Attributes.class "elm-timer-display" ]
                (Html.text ("Timer: " ++ String.fromInt secs ++ "s")
                    :: (case timerRemainingSecs of
                            Just remainingSecs ->
                                [ Html.span [ Html.Attributes.class "elm-timer-countdown" ] [ Html.text (String.fromInt remainingSecs ++ "s left") ] ]

                            Nothing ->
                                []
                       )
                )

        Nothing ->
            Html.text ""


viewBoardBadgeHtml : String -> String -> String -> Int -> Html Msg
viewBoardBadgeHtml position color name score =
    Html.div
        [ Html.Attributes.class ("elm-board-badge elm-board-badge-" ++ position) ]
        [ Html.span [ Html.Attributes.class ("dot " ++ color) ] []
        , Html.span [] [ Html.text name ]
        , Html.span [ Html.Attributes.class "elm-board-badge-score" ] [ Html.text (String.fromInt score) ]
        ]


viewPauseOverlayHtml : PauseOverlayConfig -> Html Msg
viewPauseOverlayHtml overlay =
    Html.div [ Html.Attributes.class "pause-overlay", Html.Attributes.attribute "aria-live" "polite" ]
        [ Html.div [ Html.Attributes.class "pause-card" ]
            [ Html.div [ Html.Attributes.class "pause-kicker" ] [ Html.text "Paused" ]
            , Html.h2 [] [ Html.text overlay.title ]
            , Html.p [] [ Html.text overlay.message ]
            , Html.p [ Html.Attributes.id "pauseTurn" ] [ Html.text overlay.turnText ]
            , Html.div [ Html.Attributes.class "pause-actions" ]
                [ viewPrimaryButtonHtml overlay.resumeAction "Resume game"
                , viewGhostButtonHtml "ghost" True overlay.newRoundAction "New round"
                ]
            ]
        ]


viewWinnerOverlayHtml : Bool -> String -> Maybe Msg -> Html Msg
viewWinnerOverlayHtml isCompactLayout winnerName onNewRound =
    Html.div
        [ Html.Attributes.classList
            [ ( "winner-overlay", True )
            , ( "winner-overlay-mobile", isCompactLayout )
            ]
        , Html.Attributes.attribute "aria-live" "polite"
        ]
        [ Html.div [ Html.Attributes.class "winner-card" ]
            [ Html.button
                [ Html.Attributes.type_ "button"
                , Html.Attributes.classList
                    [ ( "winner-close", True )
                    , ( "hidden", onNewRound == Nothing && not isCompactLayout )
                    ]
                , Html.Attributes.attribute "aria-label" "Close winner banner"
                , Html.Events.onClick DismissWinnerBanner
                ]
                [ Html.text "×" ]
            , Html.div [ Html.Attributes.class "winner-kicker" ] [ Html.text "Winner" ]
            , Html.div [ Html.Attributes.class "winner-name" ] [ Html.text winnerName ]
            , if isCompactLayout then
                Html.text ""

              else
                Html.button
                    ([ Html.Attributes.type_ "button", Html.Attributes.class "winner-new-round" ]
                        ++ onClickAttributes onNewRound
                    )
                    [ Html.text "New Round" ]
            ]
        ]


viewReplayHtml : Maybe Int -> Int -> Html Msg
viewReplayHtml replayIndex moveCount =
    let
        currentIndex =
            Maybe.withDefault moveCount replayIndex

        isLive =
            replayIndex == Nothing

        replayProgress =
            if moveCount <= 0 then
                "0%"

            else
                String.fromFloat (toFloat currentIndex / toFloat moveCount * 100) ++ "%"

        label =
            if moveCount == 0 then
                "Replay appears once moves are made."

            else
                "Move "
                    ++ String.fromInt currentIndex
                    ++ " of "
                    ++ String.fromInt moveCount
                    ++ (if isLive then
                            " - live board"

                        else
                            ""
                       )
    in
    Html.div [ Html.Attributes.class "board-replay replay" ]
        [ Html.h2 [] [ Html.text "Replay" ]
        , Html.div [ Html.Attributes.class "replay-controls" ]
            [ viewReplayButton (moveCount > 0) (Just ReplayToStart) "Start"
            , viewReplayButton (moveCount > 0) (Just ReplayStepBack) "‹"
            , viewReplayButton (moveCount > 0) (Just ReplayStepForward) "›"
            , viewReplayButton (moveCount > 0) (Just ReplayToLive) "End"
            ]
        , Html.div [ Html.Attributes.class "replay-progress", Html.Attributes.attribute "aria-hidden" "true" ]
            [ Html.div [ Html.Attributes.class "replay-progress-fill", Html.Attributes.style "width" replayProgress ] [] ]
        , Html.p [ Html.Attributes.id "replayText" ] [ Html.text label ]
        ]


viewReplayButton : Bool -> Maybe Msg -> String -> Html Msg
viewReplayButton enabled onPress label =
    Html.button
        ([ Html.Attributes.type_ "button"
         , Html.Attributes.disabled (not enabled)
         ]
            ++ onClickAttributes
                (if enabled then
                    onPress

                 else
                    Nothing
                )
        )
        [ Html.text label ]


viewRoundSummaryHtml : String -> Int -> Int -> Maybe Msg -> Html Msg
viewRoundSummaryHtml winnerName blueScore redScore onNewRound =
    Html.section [ Html.Attributes.class "elm-round-result" ]
        [ Html.p [ Html.Attributes.class "elm-match-summary-kicker" ] [ Html.text "Round complete" ]
        , Html.h3 [] [ Html.text (winnerName ++ " wins this round") ]
        , Html.p [ Html.Attributes.class "elm-match-meta" ] [ Html.text ("Score: Blue " ++ String.fromInt blueScore ++ " - Red " ++ String.fromInt redScore) ]
        , viewGhostButtonHtml "elm-match-continue" True onNewRound "Continue / New Round"
        ]


viewGhostButtonHtml : String -> Bool -> Maybe Msg -> String -> Html Msg
viewGhostButtonHtml baseClass isVisible onPress label =
    Html.button
        ([ Html.Attributes.type_ "button"
         , Html.Attributes.classList
            [ ( baseClass, True )
            , ( "hidden", not isVisible )
            ]
         ]
            ++ onClickAttributes onPress
        )
        [ Html.text label ]


viewPrimaryButtonHtml : Maybe Msg -> String -> Html Msg
viewPrimaryButtonHtml onPress label =
    Html.button
        ([ Html.Attributes.type_ "button", Html.Attributes.class "primary" ]
            ++ onClickAttributes onPress
        )
        [ Html.text label ]


viewSquareIconButtonHtml : String -> Maybe Msg -> String -> String -> Html Msg
viewSquareIconButtonHtml className onPress icon ariaLabel =
    Html.button
        ([ Html.Attributes.type_ "button"
         , Html.Attributes.class className
         , Html.Attributes.attribute "aria-label" ariaLabel
         ]
            ++ onClickAttributes onPress
        )
        [ Html.span [ Html.Attributes.attribute "aria-hidden" "true" ] [ Html.text icon ] ]


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
                "Game paused. " ++ turnOwnerName board turn ++ " to move when resumed."

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
                    "Game paused. " ++ turnOwnerName board turn ++ " to move when resumed."

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


viewOnlineLobbyContent : Model -> Element Msg
viewOnlineLobbyContent model =
    column [ width fill, spacing 14 ]
        [ -- Your name
          column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Your name")
            , Input.text
                formFieldAttrs
                { onChange = UpdatePlayerName
                , text = model.playerName
                , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Your name"))
                , label = Input.labelHidden "Your name"
                }
            ]

        -- Open board section
        , column
            (formSubpanelAttrs ++ [ spacing 10 ])
            [ el [ Font.size 13, Font.bold ] (text "Open board as watcher")
            , Input.text
                formFieldAttrs
                { onChange = UpdateBoardCodeInput
                , text = model.draftBoardCode
                , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Board code"))
                , label = Input.labelHidden "Board code"
                }
            , Input.button
                [ width fill
                , padding 15
                , Border.rounded 10
                , Font.bold
                , Font.size 15
                , Font.color (rgb255 8 18 8)
                , Element.htmlAttribute (Html.Attributes.style "background" "#17d2e6")
                ]
                { onPress = Just SubmitWatchBoard, label = el [ centerX ] (text "Watch board") }
            , Input.button
                [ width fill
                , padding 15
                , Border.rounded 10
                , Font.bold
                , Font.size 15
                , Font.color (rgb255 8 18 8)
                , Element.htmlAttribute (Html.Attributes.style "background" "#11c2d8")
                ]
                { onPress = Just CreateBoard, label = el [ centerX ] (text "Create board as Blue") }
            ]

        -- Move timer
        , column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Move timer")
            , el [ width fill ] (viewTimerControl model)
            ]

        -- Connection: idle
        , el [ Font.size 12, Font.color (rgba255 255 255 255 55) ]
            (text ("Connection: " ++ model.connectionStatus))
        , case model.error of
            Just e ->
                el [ Font.color (rgb255 255 100 80), Font.size 13 ] (text e)

            Nothing ->
                none
        ]


viewLocalLobbyContent : Model -> Element Msg
viewLocalLobbyContent model =
    column [ width fill, spacing 14 ]
        [ -- Paused game card (when a local game is active)
          case model.localGame of
            Just lg ->
                if model.viewportWidth <= 640 then
                    column
                        [ width fill
                        , Bg.color (rgb255 14 44 22)
                        , Border.rounded 18
                        , Border.width 1
                        , Border.color (rgb255 72 106 82)
                        , padding 14
                        , spacing 12
                        ]
                        [ column [ width fill, spacing 4 ]
                            [ el [ Font.bold, Font.size 15, Font.color (rgb255 244 255 246) ] (text "Paused local game")
                            , el [ Font.size 13, Font.color (rgb255 199 220 204) ]
                                (text (lg.blueName ++ " vs " ++ lg.redName))
                            ]
                        , Input.button
                            [ width fill
                            , Element.htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)")
                            , Border.rounded 16
                            , paddingXY 0 12
                            , Font.bold
                            , Font.size 14
                            , Font.color (rgb255 10 20 10)
                            ]
                            { onPress = Just ToggleLobby, label = el [ centerX ] (text "Resume saved game") }
                        , Input.button
                            [ width fill
                            , Bg.color (rgb255 56 70 57)
                            , Border.rounded 16
                            , paddingXY 0 12
                            , Font.size 14
                            , Font.color (rgb255 240 245 241)
                            ]
                            { onPress = Just LeaveLocalGame, label = el [ centerX ] (text "Discard") }
                        ]

                else
                    row
                        [ width fill
                        , Bg.color (rgba255 0 0 0 28)
                        , Border.rounded 10
                        , padding 14
                        , spacing 10
                        ]
                        [ column [ width fill, spacing 4 ]
                            [ el [ Font.bold, Font.size 14 ] (text "Paused local game")
                            , el [ Font.size 13, Font.color (rgba255 255 255 255 100) ]
                                (text (lg.blueName ++ " vs " ++ lg.redName))
                            ]
                        , column [ spacing 8, Element.alignRight ]
                            [ Input.button
                                [ Element.htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)")
                                , Border.rounded 20
                                , paddingXY 16 9
                                , Font.bold
                                , Font.size 13
                                , Font.color (rgb255 10 20 10)
                                ]
                                { onPress = Just ToggleLobby, label = text "Resume saved game" }
                            , Input.button
                                [ Bg.color (rgba255 50 70 50 180)
                                , Border.rounded 20
                                , paddingXY 16 9
                                , Font.size 13
                                ]
                                { onPress = Just LeaveLocalGame, label = text "Discard" }
                            ]
                        ]

            Nothing ->
                none

        -- Player name inputs (stacked, full width)
        , Input.text
            formFieldAttrs
            { onChange = UpdateLocalBlueName
            , text = model.localBlueName
            , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Blue"))
            , label = Input.labelHidden "Blue"
            }
        , Input.text
            formFieldAttrs
            { onChange = UpdateLocalRedName
            , text = model.localRedName
            , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Red"))
            , label = Input.labelHidden "Red"
            }

        -- Move timer
        , column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Move timer")
            , el [ width fill ] (viewTimerControl model)
            ]

        -- Start local match (gradient button, full width)
        , Input.button
            [ width fill
            , padding 15
            , Border.rounded 10
            , Font.bold
            , Font.size 15
            , Font.color (rgb255 10 20 10)
            , Element.htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)")
            ]
            { onPress = Just StartLocalMatch, label = el [ centerX ] (text "Start local match") }
        ]


viewBoardListSection : Model -> Element Msg
viewBoardListSection model =
    column
        [ width fill
        , Bg.color (rgba255 0 0 0 0.25)
        , Border.rounded 12
        , padding 12
        , spacing 8
        ]
        [ row [ width fill ]
            [ el [ Font.bold, Font.size 14, Font.color (rgb255 140 200 140) ] (text "Live boards")
            , el [ alignRight ] (miniButton "↻" (Just RequestBoardList))
            ]
        , if List.isEmpty model.boardList then
            el [ Font.size 13, Font.color (rgba255 255 255 255 0.5) ] (text "No live boards. Create one!")

          else
            column [ width fill, spacing 6 ]
                (List.map viewBoardCard model.boardList)
        ]


viewBoardCard : BoardSummary -> Element Msg
viewBoardCard board =
    link
        [ width fill
        , Bg.color (rgba255 255 255 255 0.06)
        , Border.rounded 8
        , padding 10
        , mouseOver [ Bg.color (rgba255 255 255 255 0.12) ]
        ]
        { url = "/?board=" ++ board.roomId
        , label =
            row [ width fill, spacing 8 ]
                [ el [ Font.bold, Font.size 14 ] (text board.roomId)
                , el [ Font.size 12, Font.color (rgba255 255 255 255 0.6) ] (text board.state)
                , el [ alignRight, Font.size 12, Font.color (rgba255 255 255 255 0.5) ]
                    (text (String.fromInt board.activeCount ++ "/2 seated"))
                ]
        }


viewTimerControl : Model -> Element Msg
viewTimerControl model =
    if model.viewportWidth <= 640 then
        Input.button
            (formFieldAttrs
                ++ [ Border.rounded 16
                   , paddingXY 14 12
                   , Font.size 14
                   ]
            )
            { onPress = Just OpenTimerSheet
            , label =
                row [ width fill, centerY ]
                    [ column [ spacing 2 ]
                        [ el [ Font.size 11, Font.color (rgb255 185 212 191), Font.semiBold ] (text "Selected timer")
                        , el [ Font.bold ] (text (moveTimerLabel model.onlineMoveTimer))
                        ]
                    , el [ alignRight, Font.color (rgb255 141 255 174), Font.bold, Font.size 12 ] (text "Change")
                    ]
            }

    else
        viewTimerSelect model.onlineMoveTimer


viewTimerSelect : Int -> Element Msg
viewTimerSelect current =
    Element.html
        (Html.select
            [ Html.Attributes.style "background" "rgba(0,0,0,0.5)"
            , Html.Attributes.style "color" "#e0ffe0"
            , Html.Attributes.style "border" "1px solid rgba(255,255,255,0.1)"
            , Html.Attributes.style "border-radius" "10px"
            , Html.Attributes.style "padding" "12px 14px"
            , Html.Attributes.style "font-size" "14px"
            , Html.Attributes.style "cursor" "pointer"
            , Html.Attributes.style "width" "100%"
            , Html.Events.onInput UpdateOnlineMoveTimer
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


viewTimerBottomSheet : Int -> Element Msg
viewTimerBottomSheet current =
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
                    ++ List.map (viewTimerSheetOption current) timerOptions
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


viewTimerSheetOption : Int -> Int -> Html Msg
viewTimerSheetOption current optionSeconds =
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
        , Html.Events.onClick (SelectOnlineMoveTimer optionSeconds)
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


timerOptions : List Int
timerOptions =
    [ 0, 5, 10, 15, 20, 30 ]


normalizeMoveTimerSeconds : Int -> Int
normalizeMoveTimerSeconds seconds =
    if List.member seconds timerOptions then
        seconds

    else
        15


moveTimerLabel : Int -> String
moveTimerLabel seconds =
    if seconds <= 0 then
        "Off"

    else
        String.fromInt seconds ++ " seconds"


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
            if blueName == Just model.playerName then
                Just "blue"

            else if redName == Just model.playerName then
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
    if model.board /= Nothing then
        Nothing

    else
        model.localGame


isValidBoardCode : String -> Bool
isValidBoardCode code =
    let
        n =
            String.length code
    in
    n >= 6 && n <= 32


sanitizeBoardCode : String -> String
sanitizeBoardCode raw =
    raw
        |> String.trim
        |> String.filter (\c -> Char.isAlphaNum c || c == '_' || c == '-')
        |> String.left 32


sanitizePlayerName : String -> String
sanitizePlayerName raw =
    let
        t =
            String.trim raw
    in
    if String.isEmpty t then
        "Player"

    else
        String.left 24 t


watchBoardCommand : String -> String -> Cmd Msg
watchBoardCommand boardCode clientId =
    if isValidBoardCode boardCode then
        outgoingClientCommand
            (Encode.object
                [ ( "type", Encode.string "watch" )
                , ( "roomId", Encode.string boardCode )
                , ( "clientId", Encode.string clientId )
                ]
            )

    else
        Cmd.none


persistLocalCmd : Maybe LocalGame -> Bool -> Cmd Msg
persistLocalCmd localGame paused =
    outgoingClientCommand
        (Encode.object
            [ ( "type", Encode.string "persistLocalRuntime" )
            , ( "localGame"
              , case localGame of
                    Just g ->
                        localGameEncoder g

                    Nothing ->
                        Encode.null
              )
            , ( "localPaused", Encode.bool paused )
            ]
        )



-- ── Board summary decoder ──────────────────────────────────────────────────────


boardSummaryDecoder : Decode.Decoder BoardSummary
boardSummaryDecoder =
    Decode.map5 BoardSummary
        (Decode.field "roomId" Decode.string)
        (Decode.oneOf [ Decode.field "state" Decode.string, Decode.succeed "unknown" ])
        (Decode.oneOf [ Decode.at [ "occupancy", "activeCount" ] Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.at [ "occupancy", "vacantCount" ] Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.field "moveCount" Decode.int, Decode.succeed 0 ])



-- ── Local game ─────────────────────────────────────────────────────────────────


startLocalGame : Int -> String -> String -> Int -> LocalGame
startLocalGame nowMs blueName_ redName_ moveTimerSeconds =
    { blueName =
        if String.isEmpty (String.trim blueName_) then
            "Blue"

        else
            String.trim blueName_
    , redName =
        if String.isEmpty (String.trim redName_) then
            "Red"

        else
            String.trim redName_
    , turn = "p1"
    , ball = { x = 4, y = 6 }
    , visited = [ "4,6" ]
    , segments = []
    , moves = []
    , scoreBlue = 0
    , scoreRed = 0
    , winner = Nothing
    , endReason = Nothing
    , moveTimerSeconds = normalizeMoveTimerSeconds moveTimerSeconds
    , turnStartedAtMs =
        if moveTimerSeconds > 0 then
            Just nowMs

        else
            Nothing
    , consecutiveTimeouts = 0
    }


localGameEncoder : LocalGame -> Encode.Value
localGameEncoder g =
    Encode.object
        [ ( "blueName", Encode.string g.blueName )
        , ( "redName", Encode.string g.redName )
        , ( "turn", Encode.string g.turn )
        , ( "ball", Encode.object [ ( "x", Encode.int g.ball.x ), ( "y", Encode.int g.ball.y ) ] )
        , ( "visited", Encode.list Encode.string g.visited )
        , ( "segments", Encode.list Encode.string g.segments )
        , ( "moves", Encode.list localMoveEncoder g.moves )
        , ( "scoreBlue", Encode.int g.scoreBlue )
        , ( "scoreRed", Encode.int g.scoreRed )
        , ( "winner", g.winner |> Maybe.map Encode.string |> Maybe.withDefault Encode.null )
        , ( "endReason", g.endReason |> Maybe.map Encode.string |> Maybe.withDefault Encode.null )
        , ( "moveTimerSeconds", Encode.int g.moveTimerSeconds )
        , ( "turnStartedAtMs", g.turnStartedAtMs |> Maybe.map Encode.int |> Maybe.withDefault Encode.null )
        , ( "consecutiveTimeouts", Encode.int g.consecutiveTimeouts )
        ]


localMoveEncoder : LocalMove -> Encode.Value
localMoveEncoder m =
    Encode.object
        [ ( "playerId", Encode.string m.playerId )
        , ( "from", Encode.object [ ( "x", Encode.int m.from.x ), ( "y", Encode.int m.from.y ) ] )
        , ( "to", Encode.object [ ( "x", Encode.int m.to.x ), ( "y", Encode.int m.to.y ) ] )
        , ( "segment", Encode.string m.segment )
        , ( "bounce", Encode.bool m.bounce )
        ]


localGameDecoder : Decode.Decoder LocalGame
localGameDecoder =
    Decode.map8
        (\blueName_ redName_ turn ball visited segments moves scoreBlue ->
            { blueName = blueName_
            , redName = redName_
            , turn = turn
            , ball = ball
            , visited = visited
            , segments = segments
            , moves = moves
            , scoreBlue = scoreBlue
            , scoreRed = 0
            , winner = Nothing
            , endReason = Nothing
            , moveTimerSeconds = 15
            , turnStartedAtMs = Nothing
            , consecutiveTimeouts = 0
            }
        )
        (Decode.field "blueName" Decode.string)
        (Decode.field "redName" Decode.string)
        (Decode.field "turn" Decode.string)
        (Decode.map2 (\x y -> { x = x, y = y })
            (Decode.at [ "ball", "x" ] Decode.int)
            (Decode.at [ "ball", "y" ] Decode.int)
        )
        (Decode.field "visited" (Decode.list Decode.string))
        (Decode.field "segments" (Decode.list Decode.string))
        (Decode.field "moves" (Decode.list localMoveDecoderHelper))
        (Decode.field "scoreBlue" Decode.int)
        |> Decode.andThen
            (\base ->
                Decode.map6
                    (\scoreRed winner endReason moveTimerSeconds turnStartedAtMs consecutiveTimeouts ->
                        { base
                            | scoreRed = scoreRed
                            , winner = winner
                            , endReason = endReason
                            , moveTimerSeconds = normalizeMoveTimerSeconds moveTimerSeconds
                            , turnStartedAtMs = turnStartedAtMs
                            , consecutiveTimeouts = consecutiveTimeouts
                        }
                    )
                    (Decode.field "scoreRed" Decode.int)
                    (Decode.field "winner" (Decode.nullable Decode.string))
                    (Decode.field "endReason" (Decode.nullable Decode.string))
                    (Decode.oneOf [ Decode.field "moveTimerSeconds" Decode.int, Decode.succeed 15 ])
                    (Decode.oneOf [ Decode.field "turnStartedAtMs" (Decode.nullable Decode.int), Decode.succeed Nothing ])
                    (Decode.oneOf [ Decode.field "consecutiveTimeouts" Decode.int, Decode.succeed 0 ])
            )


localMoveDecoderHelper : Decode.Decoder LocalMove
localMoveDecoderHelper =
    Decode.map5 LocalMove
        (Decode.field "playerId" Decode.string)
        (Decode.map2 (\x y -> { x = x, y = y })
            (Decode.at [ "from", "x" ] Decode.int)
            (Decode.at [ "from", "y" ] Decode.int)
        )
        (Decode.map2 (\x y -> { x = x, y = y })
            (Decode.at [ "to", "x" ] Decode.int)
            (Decode.at [ "to", "y" ] Decode.int)
        )
        (Decode.oneOf [ Decode.field "segment" Decode.string, Decode.succeed "" ])
        (Decode.oneOf [ Decode.field "bounce" Decode.bool, Decode.succeed False ])



-- ── Local game state machine ───────────────────────────────────────────────────


pkLocal : LocalPoint -> String
pkLocal p =
    String.fromInt p.x ++ "," ++ String.fromInt p.y


localSegmentKey : LocalPoint -> LocalPoint -> String
localSegmentKey a b =
    let
        ak =
            pkLocal a

        bk =
            pkLocal b
    in
    if ak < bk then
        ak ++ "|" ++ bk

    else
        bk ++ "|" ++ ak


isLocalBoardPoint : LocalPoint -> Bool
isLocalBoardPoint p =
    if p.x < 0 || p.x > 8 || p.y < 0 || p.y > 12 then
        False

    else if p.y >= 1 && p.y <= 11 then
        True

    else
        p.x >= 3 && p.x <= 5


isLocalBoundaryPoint : LocalPoint -> Bool
isLocalBoundaryPoint p =
    p.x == 0 || p.x == 8 || p.y == 1 || p.y == 11


isLocalTracedMarginSegment : LocalPoint -> LocalPoint -> Bool
isLocalTracedMarginSegment from to =
    let
        dx =
            abs (from.x - to.x)

        dy =
            abs (from.y - to.y)

        verticalSide =
            from.x == to.x && (from.x == 0 || from.x == 8) && from.y >= 1 && from.y <= 11 && to.y >= 1 && to.y <= 11

        horizontalPitchEdge =
            from.y == to.y && (from.y == 1 || from.y == 11) && from.x >= 0 && from.x <= 8 && to.x >= 0 && to.x <= 8

        inGateMouth =
            min from.x to.x >= 3 && max from.x to.x <= 5
    in
    if dx + dy /= 1 then
        False

    else if verticalSide then
        True

    else if not horizontalPitchEdge then
        False

    else
        not inGateMouth


isLocalBlockedCornerCut : LocalPoint -> LocalPoint -> Bool
isLocalBlockedCornerCut from to =
    let
        diagonal =
            abs (from.x - to.x) == 1 && abs (from.y - to.y) == 1

        touchesTopOutside =
            (from.y == 1 && to.y == 0) || (from.y == 0 && to.y == 1)

        touchesBottomOutside =
            (from.y == 11 && to.y == 12) || (from.y == 12 && to.y == 11)

        outsideGateMouth =
            to.x < 3 || to.x > 5 || from.x < 3 || from.x > 5
    in
    diagonal && (touchesTopOutside || touchesBottomOutside) && outsideGateMouth


computeLocalLegalMoves : LocalGame -> List LocalPoint
computeLocalLegalMoves lg =
    let
        from =
            lg.ball

        deltas =
            [ ( -1, -1 ), ( 0, -1 ), ( 1, -1 ), ( -1, 0 ), ( 1, 0 ), ( -1, 1 ), ( 0, 1 ), ( 1, 1 ) ]

        candidates =
            List.map (\( dx, dy ) -> { x = from.x + dx, y = from.y + dy }) deltas

        hasSegment a b =
            List.member (localSegmentKey a b) lg.segments
    in
    candidates
        |> List.filter isLocalBoardPoint
        |> List.filter (\to -> not (hasSegment from to))
        |> List.filter (\to -> not (isLocalTracedMarginSegment from to))
        |> List.filter (\to -> not (isLocalBlockedCornerCut from to))


applyLocalMove : Int -> LocalGame -> LocalPoint -> Result String LocalGame
applyLocalMove nowMs lg to =
    case lg.winner of
        Just _ ->
            Err "Round is over — start a new round."

        Nothing ->
            let
                legalMoves =
                    computeLocalLegalMoves lg

                toKey =
                    pkLocal to

                isLegal =
                    List.any (\p -> pkLocal p == toKey) legalMoves
            in
            if not isLegal then
                Err "Not a legal move from here."

            else
                let
                    from =
                        lg.ball

                    visitedBefore =
                        List.member toKey lg.visited

                    bounce =
                        visitedBefore || isLocalBoundaryPoint to

                    nextTurn =
                        if bounce then
                            lg.turn

                        else if lg.turn == "p1" then
                            "p2"

                        else
                            "p1"

                    seg =
                        localSegmentKey from to

                    nextVisited =
                        if visitedBefore then
                            lg.visited

                        else
                            lg.visited ++ [ toKey ]

                    nextMoves =
                        lg.moves ++ [ { playerId = lg.turn, from = from, to = to, segment = seg, bounce = bounce } ]

                    ownGoal =
                        (lg.turn == "p1" && to.y == 12) || (lg.turn == "p2" && to.y == 0)

                    opponentGoal =
                        (lg.turn == "p1" && to.y == 0) || (lg.turn == "p2" && to.y == 12)

                    goalWinner =
                        if opponentGoal then
                            Just lg.turn

                        else if ownGoal then
                            Just
                                (if lg.turn == "p1" then
                                    "p2"

                                 else
                                    "p1"
                                )

                        else
                            Nothing

                    moved =
                        { lg
                            | turn = nextTurn
                            , ball = to
                            , visited = nextVisited
                            , segments = lg.segments ++ [ seg ]
                            , moves = nextMoves
                            , consecutiveTimeouts = 0
                        }

                    stuckWinner =
                        if goalWinner == Nothing && List.isEmpty (computeLocalLegalMoves moved) then
                            Just
                                (if nextTurn == "p1" then
                                    "p2"

                                 else
                                    "p1"
                                )

                        else
                            Nothing

                    winner =
                        case goalWinner of
                            Just w ->
                                Just w

                            Nothing ->
                                stuckWinner
                in
                Ok
                    (case winner of
                        Just w ->
                            { moved
                                | winner = Just w
                                , endReason = Just "Round complete"
                                , turnStartedAtMs = Nothing
                                , scoreBlue =
                                    if w == "p1" then
                                        moved.scoreBlue + 1

                                    else
                                        moved.scoreBlue
                                , scoreRed =
                                    if w == "p2" then
                                        moved.scoreRed + 1

                                    else
                                        moved.scoreRed
                            }

                        Nothing ->
                            restartLocalTurnClock nowMs moved
                    )


restartLocalRound : Int -> LocalGame -> LocalGame
restartLocalRound nowMs lg =
    { lg
        | turn = "p1"
        , ball = { x = 4, y = 6 }
        , visited = [ "4,6" ]
        , segments = []
        , moves = []
        , winner = Nothing
        , endReason = Nothing
        , consecutiveTimeouts = 0
        , turnStartedAtMs =
            if lg.moveTimerSeconds > 0 then
                Just nowMs

            else
                Nothing
    }



-- ── Convert LocalGame to Board for SVG display ────────────────────────────────


localGameToBoard : LocalGame -> Board
localGameToBoard lg =
    let
        legalMoves =
            computeLocalLegalMoves lg

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
            , deadlineAt = localTurnDeadlineAt lg
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


restartLocalTurnClock : Int -> LocalGame -> LocalGame
restartLocalTurnClock nowMs lg =
    { lg
        | turnStartedAtMs =
            if lg.moveTimerSeconds > 0 then
                Just nowMs

            else
                Nothing
    }


localTurnDeadlineAt : LocalGame -> Maybe Int
localTurnDeadlineAt lg =
    if lg.moveTimerSeconds <= 0 || lg.winner /= Nothing then
        Nothing

    else
        lg.turnStartedAtMs
            |> Maybe.map (\startedAtMs -> startedAtMs + (lg.moveTimerSeconds * 1000))


expireLocalTurnIfNeeded : Int -> LocalGame -> Maybe LocalGame
expireLocalTurnIfNeeded nowMs lg =
    localTurnDeadlineAt lg
        |> Maybe.andThen
            (\deadlineAt ->
                if nowMs < deadlineAt then
                    Nothing

                else if lg.consecutiveTimeouts >= 1 then
                    Just { lg | turnStartedAtMs = Nothing, consecutiveTimeouts = 0 }

                else
                    let
                        timedOutPlayer =
                            lg.turn

                        nextTurn =
                            if lg.turn == "p1" then
                                "p2"

                            else
                                "p1"

                        switched =
                            restartLocalTurnClock nowMs { lg | turn = nextTurn, consecutiveTimeouts = 1 }

                        winner =
                            if List.isEmpty (computeLocalLegalMoves switched) then
                                Just timedOutPlayer

                            else
                                Nothing
                    in
                    Just <|
                        case winner of
                            Just winnerId ->
                                { switched
                                    | winner = Just winnerId
                                    , endReason = Just "Round complete"
                                    , turnStartedAtMs = Nothing
                                    , scoreBlue =
                                        if winnerId == "p1" then
                                            switched.scoreBlue + 1

                                        else
                                            switched.scoreBlue
                                    , scoreRed =
                                        if winnerId == "p2" then
                                            switched.scoreRed + 1

                                        else
                                            switched.scoreRed
                                }

                            Nothing ->
                                switched
            )
