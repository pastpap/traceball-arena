module Main exposing (main, update, view)

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
    , error : Maybe String
    }


type Msg
    = LoadedFixture (Result Decode.Error StateMessage)
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
    ( applyFixture flags { board = Nothing, error = Nothing }, Cmd.none )


applyFixture : Decode.Value -> Model -> Model
applyFixture flags model =
    case Decode.decodeValue stateMessageDecoder flags of
        Ok message ->
            { model | board = Just message.board, error = Nothing }

        Err decodeError ->
            { model | error = Just (Decode.errorToString decodeError) }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LoadedFixture result ->
            case result of
                Ok message ->
                    ( { model | board = Just message.board, error = Nothing }, Cmd.none )

                Err decodeError ->
                    ( { model | error = Just (Decode.errorToString decodeError) }, Cmd.none )

        NoOp ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [ class "elm-shell" ]
        [ h1 [] [ text "Traceball Arena — Elm Shell" ]
        , p [ class "elm-shell-note" ] [ text "Phase 2 renders the canonical board contract beside the existing JavaScript frontend." ]
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
