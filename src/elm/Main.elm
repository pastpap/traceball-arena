module Main exposing (applyIncoming, main, update, view)

import Board.Decode exposing (boardDecoder)
import Board.Types exposing (Board)
import Board.View exposing (viewBoard)
import Browser
import Html exposing (Html, div, h1, p, text)
import Html.Attributes exposing (class)
import Json.Decode as Decode
import Protocol exposing (StateMessage, stateMessageDecoder)


type alias Model =
    { board : Maybe Board
    , boardCode : String
    , version : Int
    , error : Maybe String
    , ignoredStaleVersion : Maybe Int
    , connectionStatus : String
    , clientId : String
    }


type Msg
    = LoadedFixture (Result Decode.Error StateMessage)
    | ReceiveServerMessage (Result Decode.Error StateMessage)
    | ConnectionChanged String
    | NoOp


main : Program Decode.Value Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = \_ -> Sub.none
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
            }
    in
    ( applyFixture flags emptyModel, Cmd.none )


applyFixture : Decode.Value -> Model -> Model
applyFixture flags model =
    case Decode.decodeValue stateMessageDecoder flags of
        Ok incoming ->
            applyIncoming incoming model

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
            , version = incoming.version
            , error = Nothing
            , ignoredStaleVersion = Nothing
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LoadedFixture result ->
            case result of
                Ok incoming ->
                    ( applyIncoming incoming model, Cmd.none )

                Err decodeError ->
                    ( { model | error = Just (Decode.errorToString decodeError) }, Cmd.none )

        ReceiveServerMessage result ->
            case result of
                Ok incoming ->
                    ( applyIncoming incoming model, Cmd.none )

                Err decodeError ->
                    ( { model | error = Just (Decode.errorToString decodeError) }, Cmd.none )

        ConnectionChanged status ->
            ( { model | connectionStatus = status }, Cmd.none )

        NoOp ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "elm-shell" ]
        [ h1 [] [ text "Traceball Arena — Elm Shell" ]
        , p [ class "elm-shell-note" ] [ text "Phase 4 receives live board state over a WebSocket bridge while preserving clientId identity in JavaScript/localStorage." ]
        , p [ class "elm-connection" ] [ text ("Connection: " ++ model.connectionStatus) ]
        , viewStaleNotice model.ignoredStaleVersion
        , case model.error of
            Just message ->
                div [ class "elm-error" ] [ text message ]

            Nothing ->
                text ""
        , case model.board of
            Just board ->
                viewBoard board

            Nothing ->
                div [ class "elm-loading" ] [ text "Loading board fixture…" ]
        ]


viewStaleNotice : Maybe Int -> Html Msg
viewStaleNotice maybeVersion =
    case maybeVersion of
        Just version ->
            p [ class "elm-shell-note" ] [ text ("Ignored stale version " ++ String.fromInt version ++ ".") ]

        Nothing ->
            text ""
