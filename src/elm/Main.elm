port module Main exposing (main)

import Board.Types exposing (Board)
import Board.View exposing (viewBoard)
import Browser
import Char
import Html exposing (Html, button, div, form, h1, input, p, text)
import Html.Attributes exposing (class, id, placeholder, type_, value)
import Html.Events exposing (onClick, onInput, onSubmit)
import Json.Decode as Decode
import Json.Encode as Encode
import Protocol exposing (ServerMessage(..), StateMessage, boardNotFoundCode)


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
    , draftMoveTarget : String
    , draftFreeSeat : String
    , replayIndex : Maybe Int
    }


type alias Flags =
    { boardCode : String
    , clientId : String
    , playerName : String
    }


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
    | UpdateMoveTarget String
    | SubmitMove
    | StartNewRound
    | UpdateFreeSeatInput String
    | SubmitFreeSeat
    | ReplayToStart
    | ReplayStepBack
    | ReplayStepForward
    | ReplayToLive


port incomingSocketMessage : (Decode.Value -> msg) -> Sub msg


port incomingConnectionStatus : (String -> msg) -> Sub msg


port outgoingClientCommand : Encode.Value -> Cmd msg


main : Program Decode.Value Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }


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
            , playerName = "Elm Player"
            , draftMoveTarget = ""
            , draftFreeSeat = "p1"
            , replayIndex = Nothing
            }

        model =
            applyFlags flags emptyModel

        watchModel =
            if isValidBoardCode model.boardCode then
                { model | connectionStatus = "connecting" }

            else
                model
    in
    ( watchModel, watchBoardCommand watchModel.boardCode watchModel.clientId )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.batch
        [ incomingSocketMessage ReceiveSocket
        , incomingConnectionStatus ConnectionChanged
        ]


flagsDecoder : Decode.Decoder Flags
flagsDecoder =
    Decode.map3 Flags
        (Decode.field "boardCode" Decode.string)
        (Decode.field "clientId" Decode.string)
        (Decode.field "playerName" Decode.string)


applyFlags : Decode.Value -> Model -> Model
applyFlags flags model =
    case Decode.decodeValue flagsDecoder flags of
        Ok parsed ->
            let
                sanitizedBoardCode =
                    sanitizeBoardCode parsed.boardCode

                invalidBoardCode =
                    not (String.isEmpty (String.trim parsed.boardCode)) && not (isValidBoardCode sanitizedBoardCode)
            in
            { model
                | boardCode = sanitizedBoardCode
                , clientId = parsed.clientId
                , draftBoardCode = sanitizedBoardCode
                , playerName = sanitizePlayerName parsed.playerName
                , error =
                    if invalidBoardCode then
                        Just "Enter a valid board code to watch."

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
            if isValidBoardCode model.draftBoardCode then
                ( { model
                    | connectionStatus = "connecting"
                    , error = Nothing
                    , boardCode = model.draftBoardCode
                  }
                , watchBoardCommand model.draftBoardCode model.clientId
                )

            else
                ( { model | error = Just "Enter a valid board code to watch." }, Cmd.none )

        UpdatePlayerName raw ->
            let
                nextName =
                    sanitizePlayerName raw
            in
            ( { model | playerName = nextName, error = Nothing }
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "persistPlayerName" )
                    , ( "name", Encode.string nextName )
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
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "leave" )
                    ]
                )
            )

        UpdateMoveTarget raw ->
            ( { model | draftMoveTarget = String.trim raw, error = Nothing }, Cmd.none )

        SubmitMove ->
            case parsePoint model.draftMoveTarget of
                Just point ->
                    ( model
                    , outgoingClientCommand
                        (Encode.object
                            [ ( "type", Encode.string "move" )
                            , ( "to", encodePoint point )
                            ]
                        )
                    )

                Nothing ->
                    ( { model | error = Just "Move target must be in x,y format." }, Cmd.none )

        StartNewRound ->
            ( model
            , outgoingClientCommand
                (Encode.object
                    [ ( "type", Encode.string "reset" )
                    ]
                )
            )

        UpdateFreeSeatInput raw ->
            ( { model | draftFreeSeat = normalizeSeatId raw, error = Nothing }, Cmd.none )

        SubmitFreeSeat ->
            if isSeatId model.draftFreeSeat then
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
            ( { model
                | replayIndex =
                    case model.replayIndex of
                        Nothing ->
                            Just (max 0 (currentMoveCount model - 1))

                        Just idx ->
                            Just (max 0 (idx - 1))
              }
            , Cmd.none
            )

        ReplayStepForward ->
            let
                maxIndex =
                    currentMoveCount model
            in
            ( { model
                | replayIndex =
                    case model.replayIndex of
                        Nothing ->
                            Nothing

                        Just idx ->
                            if idx + 1 >= maxIndex then
                                Nothing

                            else
                                Just (idx + 1)
              }
            , Cmd.none
            )

        ReplayToLive ->
            ( { model | replayIndex = Nothing }, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "elm-shell" ]
        [ h1 [] [ text "Traceball Arena — Elm Runtime" ]
        , p [ class "elm-shell-note" ] [ text "Phase 10 migration path: runtime state decode/apply now flows through Elm when runtime=elm is enabled." ]
        , viewWatchControls model
        , viewRuntimeActionControls model
        , p [ class "elm-connection" ] [ text ("Connection: " ++ model.connectionStatus) ]
        , viewStaleNotice model.ignoredStaleVersion
        , case model.error of
            Just message ->
                div [ class "elm-error" ] [ text message ]

            Nothing ->
                text ""
        , case model.board of
            Just board ->
                viewBoard model.replayIndex board

            Nothing ->
                div [ class "elm-loading" ] [ text "Open a board to begin." ]
        ]


viewStaleNotice : Maybe Int -> Html Msg
viewStaleNotice maybeVersion =
    case maybeVersion of
        Just version ->
            p [ class "elm-shell-note" ] [ text ("Ignored stale version " ++ String.fromInt version ++ ".") ]

        Nothing ->
            text ""


viewWatchControls : Model -> Html Msg
viewWatchControls model =
    form [ class "elm-runtime-controls", onSubmit SubmitWatchBoard ]
        [ input
            [ id "elmRuntimeBoardCode"
            , placeholder "Board code"
            , value model.draftBoardCode
            , onInput UpdateBoardCodeInput
            ]
            []
        , button [ class "primary", type_ "submit" ] [ text "Open board" ]
        ]


viewRuntimeActionControls : Model -> Html Msg
viewRuntimeActionControls model =
    div [ class "elm-runtime-controls" ]
        [ p [] [ text ("Runtime name: " ++ model.playerName) ]
        , input
            [ id "elmRuntimePlayerName"
            , placeholder "Player name"
            , value model.playerName
            , onInput UpdatePlayerName
            ]
            []
        , div [ class "actions" ]
            [ button [ class "compact", type_ "button", onClick (ClaimSeat "p1") ] [ text "Claim Blue" ]
            , button [ class "compact", type_ "button", onClick (ClaimSeat "p2") ] [ text "Claim Red" ]
            , button [ class "compact", type_ "button", onClick JoinWaitingList ] [ text "Join waiting list" ]
            , button [ class "compact", type_ "button", onClick LeaveWaitingList ] [ text "Leave waiting list" ]
            , button [ class "compact", type_ "button", onClick LeaveSeat ] [ text "Leave seat" ]
            ]
        , p [] [ text ("Role: " ++ viewerRole model) ]
        , viewRuntimeReplayControls model
        , input
            [ id "elmRuntimeMoveTarget"
            , placeholder "Move target x,y"
            , value model.draftMoveTarget
            , onInput UpdateMoveTarget
            ]
            []
        , button [ class "compact", type_ "button", onClick SubmitMove ] [ text "Send move" ]
        , button [ class "compact", type_ "button", onClick StartNewRound ] [ text "Start new round" ]
        , input
            [ id "elmRuntimeFreeSeat"
            , placeholder "Seat to free (p1/p2)"
            , value model.draftFreeSeat
            , onInput UpdateFreeSeatInput
            ]
            []
        , button [ class "compact", type_ "button", onClick SubmitFreeSeat ] [ text "Free seat" ]
        ]


viewRuntimeReplayControls : Model -> Html Msg
viewRuntimeReplayControls model =
    let
        moveCount =
            currentMoveCount model
    in
    if moveCount <= 0 then
        text ""

    else
        div [ class "actions" ]
            [ button [ class "compact", type_ "button", onClick ReplayToStart ] [ text "Replay start" ]
            , button [ class "compact", type_ "button", onClick ReplayStepBack ] [ text "Replay back" ]
            , button [ class "compact", type_ "button", onClick ReplayStepForward ] [ text "Replay next" ]
            , button [ class "compact", type_ "button", onClick ReplayToLive ] [ text "Replay live" ]
            ]


isValidBoardCode : String -> Bool
isValidBoardCode code =
    let
        size =
            String.length code
    in
    size >= 6 && size <= 32


sanitizeBoardCode : String -> String
sanitizeBoardCode raw =
    raw
        |> String.trim
        |> String.filter isBoardCodeChar
        |> String.left 32


isBoardCodeChar : Char.Char -> Bool
isBoardCodeChar char =
    Char.isAlphaNum char || char == '_' || char == '-'


sanitizePlayerName : String -> String
sanitizePlayerName raw =
    let
        trimmed =
            String.trim raw
    in
    if String.isEmpty trimmed then
        "Elm Player"

    else
        String.left 24 trimmed


viewerRole : Model -> String
viewerRole model =
    let
        isBlue =
            model.board
                |> Maybe.map .blue
                |> Maybe.andThen .player
                |> Maybe.map .displayName
                |> Maybe.map ((==) model.playerName)
                |> Maybe.withDefault False

        isRed =
            model.board
                |> Maybe.map .red
                |> Maybe.andThen .player
                |> Maybe.map .displayName
                |> Maybe.map ((==) model.playerName)
                |> Maybe.withDefault False

        inWaitingList =
            model.board
                |> Maybe.map .waitingList
                |> Maybe.map (List.any (\person -> person.displayName == model.playerName))
                |> Maybe.withDefault False
    in
    if isBlue then
        "Blue"

    else if isRed then
        "Red"

    else if inWaitingList then
        "Waiting list"

    else
        "Watcher"


type alias Point =
    { x : Int
    , y : Int
    }


parsePoint : String -> Maybe Point
parsePoint raw =
    case String.split "," (String.trim raw) of
        [ sx, sy ] ->
            case ( String.toInt (String.trim sx), String.toInt (String.trim sy) ) of
                ( Just x, Just y ) ->
                    if x >= 0 && x <= 8 && y >= 0 && y <= 12 then
                        Just { x = x, y = y }

                    else
                        Nothing

                _ ->
                    Nothing

        _ ->
            Nothing


encodePoint : Point -> Encode.Value
encodePoint point =
    Encode.object
        [ ( "x", Encode.int point.x )
        , ( "y", Encode.int point.y )
        ]


normalizeSeatId : String -> String
normalizeSeatId raw =
    String.toLower (String.trim raw)


isSeatId : String -> Bool
isSeatId seatId =
    seatId == "p1" || seatId == "p2"


currentMoveCount : Model -> Int
currentMoveCount model =
    model.board
        |> Maybe.andThen .currentSession
        |> Maybe.map .moveCount
        |> Maybe.withDefault 0


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
