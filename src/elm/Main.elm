port module Main exposing (main)

import Board.Types exposing (Board, BoardState(..), Point, Seat, SeatState(..), SessionState(..))
import Board.View exposing (viewBoard)
import Browser
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
    | ToggleLobby
    | SetLobbyTab Bool
    | SetMainTab String



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
            }

        model =
            applyFlags flags emptyModel

        initialCommands =
            outgoingClientCommand (Encode.object [ ( "type", Encode.string "fetchBoardList" ) ])
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
                , showLobby = False
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
        { model
            | board = Just incoming.board
            , boardCode = incoming.boardCode
            , draftBoardCode = incoming.boardCode
            , version = incoming.version
            , error = Nothing
            , ignoredStaleVersion = Nothing
            , replayIndex = Nothing
        }



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
                                , error = Just payload.message
                              }
                            , Cmd.none
                            )

                        Joined _ ->
                            ( { model | error = Nothing }, Cmd.none )

                        Left ->
                            ( { model | error = Nothing }, Cmd.none )

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
                    , replayIndex = Nothing
                    , version = 0
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
            ( model
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "claimSeat" )
                    , ( "seatId", Encode.string seatId )
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
            ( model
            , outgoingClientCommand (Encode.object [ ( "type", Encode.string "leave" ) ])
            )

        ClickLegalMove point ->
            case model.localGame of
                Just lg ->
                    if model.localPaused then
                        ( { model | error = Just "Resume the game before moving." }, Cmd.none )

                    else
                        case applyLocalMove lg point of
                            Ok nextGame ->
                                ( { model | localGame = Just nextGame, error = Nothing }
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
                            restartLocalRound lg
                    in
                    ( { model | localGame = Just nextGame, error = Nothing }
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
            ( { model | replayIndex = Just (max 0 (currentMoveCount model - 1)) }, Cmd.none )

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
                    startLocalGame model.localBlueName model.localRedName
            in
            ( { model | localGame = Just game, localPaused = False, error = Nothing, replayIndex = Nothing }
            , persistLocalCmd (Just game) False
            )

        ToggleLocalPause ->
            case model.localGame of
                Just _ ->
                    ( { model | localPaused = not model.localPaused }
                    , persistLocalCmd model.localGame (not model.localPaused)
                    )

                Nothing ->
                    ( model, Cmd.none )

        LocalNewRound ->
            case model.localGame of
                Just lg ->
                    let
                        nextGame =
                            restartLocalRound lg
                    in
                    ( { model | localGame = Just nextGame, localPaused = False, error = Nothing }
                    , persistLocalCmd (Just nextGame) False
                    )

                Nothing ->
                    ( model, Cmd.none )

        LeaveLocalGame ->
            ( { model | localGame = Nothing, localPaused = False, error = Nothing }
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
                ( { model | boardCode = sanitized, draftBoardCode = sanitized, connectionStatus = "connecting" }
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
            ( model
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
                    Maybe.withDefault 15 (String.toInt raw)
            in
            ( { model | onlineMoveTimer = seconds }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "persistOnlineMoveTimer" )
                    , ( "seconds", Encode.int seconds )
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
        [ Element.layout [ width fill ] (viewApp model) ]


viewApp : Model -> Element Msg
viewApp model =
    let
        hasGame =
            model.localGame /= Nothing || model.board /= Nothing

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
    in
    column
        [ width fill ]
        [ Element.html (viewHeaderHtml model hasGame)
        , if hasGame then
            column [ width fill ]
                [ lobbyLayout
                , el [ width fill, centerX, paddingXY 10 10 ] <|
                    Element.html <|
                        case model.localGame of
                            Just lg ->
                                viewLocalGameHtml model lg

                            Nothing ->
                                case model.board of
                                    Just board ->
                                        viewOnlineGameHtml model board

                                    Nothing ->
                                        Html.text ""
                ]

          else
            lobbyLayout
        ]


viewMainTabs : Model -> Element Msg
viewMainTabs model =
    row
        [ width fill
        , Bg.color (rgba255 0 0 0 50)
        , Border.rounded 28
        , padding 4
        , spacing 0
        ]
        [ gradientTabButton "Game" (model.mainTab == "game") (SetMainTab "game")
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
        , Bg.color (rgba255 0 0 0 35)
        , Border.rounded 14
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
        , el [ Font.size 13, Font.color (rgba255 255 255 255 100) ]
            (text
                (if model.localLobbyTab then
                    "Players face each other and play on this device. The pitch stays fixed for local play."

                 else
                    "Open a board as watcher, then choose an open seat when you are ready to play."
                )
            )

        -- Online/Local subtab toggle (same pill style as main tabs)
        , row
            [ width fill
            , Bg.color (rgba255 0 0 0 50)
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
    , timerSecs : Maybe Int
    , statusText : String
    , turnIndicatorText : String
    , turnIndicatorIsRed : Bool
    , matchSubtitle : String
    , moveCount : Int
    , isPaused : Bool
    , showJoinBlue : Bool
    , showJoinRed : Bool
    , leaveAction : Maybe Msg
    , pauseAction : Maybe Msg
    , newRoundAction : Maybe Msg
    , pauseOverlay : Maybe PauseOverlayConfig
    }


viewHeaderHtml : Model -> Bool -> Html Msg
viewHeaderHtml model hasGame =
    let
        heroStatus =
            case model.localGame of
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
                    case model.board of
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
                , Html.span [ Html.Attributes.class (heroRoleClass heroStatus.roleClass) ] [ Html.text heroStatus.roleText ]
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
            lg.winner |> Maybe.map (winnerDisplayName board)

        timerSecs =
            positiveMaybe model.onlineMoveTimer

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
        , replayIndex = Nothing
        , timerSecs = timerSecs
        , statusText = localStatusText model board lg.turn winnerName
        , turnIndicatorText = localTurnIndicatorText model board lg.turn winnerName
        , turnIndicatorIsRed = normalizeSeatId lg.turn == "red"
        , matchSubtitle = "Local game"
        , moveCount = List.length lg.moves
        , isPaused = model.localPaused
        , showJoinBlue = False
        , showJoinRed = False
        , leaveAction = Just LeaveLocalGame
        , pauseAction = Just ToggleLocalPause
        , newRoundAction =
            if lg.winner /= Nothing then
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
            round |> Maybe.andThen .winner |> Maybe.map (winnerDisplayName board)
    in
    viewBoardScreenHtml
        { board = board
        , ownSeat = ownSeat
        , replayIndex = model.replayIndex
        , timerSecs = board.currentSession |> Maybe.andThen .moveTimeLimitSeconds |> Maybe.andThen positiveMaybe
        , statusText = onlineStatusText board ownSeat turn winnerName
        , turnIndicatorText = onlineTurnIndicatorText board turn winnerName
        , turnIndicatorIsRed = normalizeSeatId turn == "red"
        , matchSubtitle = "Board " ++ board.code
        , moveCount = currentMoveCount model
        , isPaused = board.state == SessionPaused
        , showJoinBlue = ownSeat == Nothing && seatIsVacant board.blue
        , showJoinRed = ownSeat == Nothing && seatIsVacant board.red
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
    let
        session =
            config.board.currentSession

        round =
            session |> Maybe.andThen .round

        winnerName =
            round |> Maybe.andThen .winner |> Maybe.map (winnerDisplayName config.board)

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
            , viewTimerPillHtml config.timerSecs
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
            , Html.div
                [ Html.Attributes.classList
                    [ ( "board-stage", True )
                    , ( "paused", config.isPaused )
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
                    ++ (case winnerName of
                            Just name ->
                                [ viewWinnerOverlayHtml name config.newRoundAction ]

                            Nothing ->
                                []
                       )
                )
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
                    ++ [ if config.showJoinBlue || config.showJoinRed || config.leaveAction /= Nothing then
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


viewTimerPillHtml : Maybe Int -> Html Msg
viewTimerPillHtml timerSecs =
    case timerSecs of
        Just secs ->
            Html.div [ Html.Attributes.class "elm-timer-display" ]
                [ Html.text ("Timer: " ++ String.fromInt secs ++ "s") ]

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


viewWinnerOverlayHtml : String -> Maybe Msg -> Html Msg
viewWinnerOverlayHtml winnerName onNewRound =
    Html.div [ Html.Attributes.class "winner-overlay", Html.Attributes.attribute "aria-live" "polite" ]
        [ Html.div [ Html.Attributes.class "winner-card" ]
            [ Html.button
                [ Html.Attributes.type_ "button"
                , Html.Attributes.class "winner-close"
                , Html.Attributes.attribute "aria-label" "Close winner banner"
                ]
                [ Html.text "×" ]
            , Html.div [ Html.Attributes.class "winner-kicker" ] [ Html.text "Winner" ]
            , Html.div [ Html.Attributes.class "winner-name" ] [ Html.text winnerName ]
            , Html.button
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

        label =
            if moveCount == 0 then
                "Replay appears once moves are made."

            else
                "Move " ++ String.fromInt currentIndex ++ " of " ++ String.fromInt moveCount
    in
    Html.div [ Html.Attributes.class "board-replay replay" ]
        [ Html.h2 [] [ Html.text "Replay" ]
        , Html.div [ Html.Attributes.class "replay-controls" ]
            [ viewTextButtonHtml (Just ReplayToStart) "Start"
            , viewTextButtonHtml (Just ReplayStepBack) "‹"
            , viewTextButtonHtml (Just ReplayStepForward) "›"
            , viewTextButtonHtml (Just ReplayToLive) "End"
            ]
        , Html.input
            [ Html.Attributes.id "replayRange"
            , Html.Attributes.type_ "range"
            , Html.Attributes.min "0"
            , Html.Attributes.max (String.fromInt moveCount)
            , Html.Attributes.value (String.fromInt currentIndex)
            ]
            []
        , Html.p [ Html.Attributes.id "replayText" ] [ Html.text label ]
        ]


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


viewTextButtonHtml : Maybe Msg -> String -> Html Msg
viewTextButtonHtml onPress label =
    Html.button
        (Html.Attributes.type_ "button" :: onClickAttributes onPress)
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
                turnOwnerName board turn ++ "'s turn" ++ timerSentence (positiveMaybe model.onlineMoveTimer)


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


viewOnlineLobbyContent : Model -> Element Msg
viewOnlineLobbyContent model =
    column [ width fill, spacing 14 ]
        [ -- Your name
          column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Your name")
            , Input.text
                [ Bg.color (rgba255 0 0 0 50)
                , Border.color (rgba255 255 255 255 10)
                , Border.rounded 10
                , Font.color (rgb255 230 255 230)
                , padding 14
                ]
                { onChange = UpdatePlayerName
                , text = model.playerName
                , placeholder = Just (Input.placeholder [ Font.color (rgba255 255 255 255 35) ] (text "Your name"))
                , label = Input.labelHidden "Your name"
                }
            ]

        -- Open board section
        , column
            [ width fill
            , Bg.color (rgba255 0 0 0 25)
            , Border.rounded 10
            , padding 14
            , spacing 10
            ]
            [ el [ Font.size 13, Font.bold ] (text "Open board as watcher")
            , Input.text
                [ Bg.color (rgba255 0 0 0 50)
                , Border.color (rgba255 255 255 255 10)
                , Border.rounded 10
                , Font.color (rgb255 230 255 230)
                , padding 14
                ]
                { onChange = UpdateBoardCodeInput
                , text = model.draftBoardCode
                , placeholder = Just (Input.placeholder [ Font.color (rgba255 255 255 255 30) ] (text "Board code"))
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
        , row [ width fill, spacing 10 ]
            [ el [ Font.size 13, Font.bold ] (text "Move timer")
            , el [ width fill ] (viewTimerSelect model.onlineMoveTimer)
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
            [ Bg.color (rgba255 0 0 0 50)
            , Border.color (rgba255 255 255 255 10)
            , Border.rounded 10
            , Font.color (rgb255 230 255 230)
            , padding 14
            , width fill
            ]
            { onChange = UpdateLocalBlueName
            , text = model.localBlueName
            , placeholder = Just (Input.placeholder [ Font.color (rgba255 255 255 255 30) ] (text "Blue"))
            , label = Input.labelHidden "Blue"
            }
        , Input.text
            [ Bg.color (rgba255 0 0 0 50)
            , Border.color (rgba255 255 255 255 10)
            , Border.rounded 10
            , Font.color (rgb255 230 255 230)
            , padding 14
            , width fill
            ]
            { onChange = UpdateLocalRedName
            , text = model.localRedName
            , placeholder = Just (Input.placeholder [ Font.color (rgba255 255 255 255 30) ] (text "Red"))
            , label = Input.labelHidden "Red"
            }

        -- Move timer
        , column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Move timer")
            , el [ width fill ] (viewTimerSelect model.onlineMoveTimer)
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
                [ 0, 5, 10, 15, 30, 60 ]
            )
        )


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



-- ── Domain helpers ────────────────────────────────────────────────────────────


derivedOwnSeat : Model -> Board -> Maybe String
derivedOwnSeat model board =
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


currentMoveCount : Model -> Int
currentMoveCount model =
    case model.localGame of
        Just lg ->
            List.length lg.moves

        Nothing ->
            model.board
                |> Maybe.andThen .currentSession
                |> Maybe.andThen .round
                |> Maybe.map (.moves >> List.length)
                |> Maybe.withDefault 0


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


startLocalGame : String -> String -> LocalGame
startLocalGame blueName_ redName_ =
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
                Decode.map3
                    (\scoreRed winner endReason ->
                        { base | scoreRed = scoreRed, winner = winner, endReason = endReason }
                    )
                    (Decode.field "scoreRed" Decode.int)
                    (Decode.field "winner" (Decode.nullable Decode.string))
                    (Decode.field "endReason" (Decode.nullable Decode.string))
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


applyLocalMove : LocalGame -> LocalPoint -> Result String LocalGame
applyLocalMove lg to =
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
                        { lg | turn = nextTurn, ball = to, visited = nextVisited, segments = lg.segments ++ [ seg ], moves = nextMoves }

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
                            moved
                    )


restartLocalRound : LocalGame -> LocalGame
restartLocalRound lg =
    { lg
        | turn = "p1"
        , ball = { x = 4, y = 6 }
        , visited = [ "4,6" ]
        , segments = []
        , moves = []
        , winner = Nothing
        , endReason = Nothing
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
            , moveTimeLimitSeconds = Nothing
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
