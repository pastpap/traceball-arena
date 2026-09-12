port module BoardIsland exposing (main)

import Board.Decode exposing (boardDecoder, boardFromPublicGameDecoder)
import Board.Types exposing (Board, Point)
import Board.View exposing (viewBoard)
import Browser
import Html exposing (Html, div, text)
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode


port boardSnapshot : (Decode.Value -> msg) -> Sub msg


port boardMoveClicked : Encode.Value -> Cmd msg


type alias Model =
    { boardCode : String
    , version : Int
    , board : Maybe Board
    , ownSeat : Maybe String
    , replayIndex : Maybe Int
    , flipVertical : Bool
    , error : Maybe String
    }


type Msg
    = ReceiveBoardSnapshot Decode.Value
    | BoardClicked Point


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
    update (ReceiveBoardSnapshot flags) (emptyModel ())


emptyModel : () -> Model
emptyModel _ =
    { boardCode = ""
    , version = 0
    , board = Nothing
    , ownSeat = Nothing
    , replayIndex = Nothing
    , flipVertical = False
    , error = Nothing
    }


subscriptions : Model -> Sub Msg
subscriptions _ =
    boardSnapshot ReceiveBoardSnapshot


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ReceiveBoardSnapshot value ->
            case decodeSnapshot value of
                Ok nextModel ->
                    ( nextModel, Cmd.none )

                Err error ->
                    ( { model | error = Just (Decode.errorToString error) }, Cmd.none )

        BoardClicked point ->
            let
                payload =
                    Encode.object
                        [ ( "type", Encode.string "boardMoveClick" )
                        , ( "boardCode", Encode.string model.boardCode )
                        , ( "point", Encode.object [ ( "x", Encode.int point.x ), ( "y", Encode.int point.y ) ] )
                        ]
            in
            ( model, boardMoveClicked payload )


view : Model -> Html Msg
view model =
    case model.error of
        Just message ->
            div [] [ text ("Board unavailable: " ++ message) ]

        Nothing ->
            case model.board of
                Just board ->
                    viewBoard BoardClicked model.ownSeat model.replayIndex model.flipVertical board

                Nothing ->
                    div [] [ text "Board unavailable" ]


decodeSnapshot : Decode.Value -> Result Decode.Error Model
decodeSnapshot value =
    Decode.decodeValue snapshotDecoder value


snapshotDecoder : Decoder Model
snapshotDecoder =
    Decode.oneOf
        [ canonicalSnapshotDecoder
        , publicGameSnapshotDecoder
        ]


canonicalSnapshotDecoder : Decoder Model
canonicalSnapshotDecoder =
    Decode.map6
        (\boardCode version board ownSeat replayIndex flipVertical ->
            { boardCode = boardCode
            , version = version
            , board = Just board
            , ownSeat = ownSeat
            , replayIndex = replayIndex
            , flipVertical = flipVertical
            , error = Nothing
            }
        )
        (Decode.field "boardCode" Decode.string)
        (Decode.field "version" Decode.int)
        (Decode.field "board" boardDecoder)
        (Decode.oneOf [ Decode.field "ownSeat" (Decode.nullable Decode.string), Decode.succeed Nothing ])
        (Decode.oneOf [ Decode.field "replayIndex" (Decode.nullable Decode.int), Decode.succeed Nothing ])
        (Decode.oneOf [ Decode.field "flipVertical" Decode.bool, Decode.succeed False ])


publicGameSnapshotDecoder : Decoder Model
publicGameSnapshotDecoder =
    Decode.field "boardCode" Decode.string
        |> Decode.andThen
            (\boardCode ->
                Decode.field "version" Decode.int
                    |> Decode.andThen
                        (\version ->
                            Decode.map3
                                (\ownSeat replayIndex flipVertical ->
                                    { boardCode = boardCode
                                    , version = version
                                    , board = Nothing
                                    , ownSeat = ownSeat
                                    , replayIndex = replayIndex
                                    , flipVertical = flipVertical
                                    , error = Nothing
                                    }
                                )
                                (Decode.oneOf [ Decode.field "ownSeat" (Decode.nullable Decode.string), Decode.succeed Nothing ])
                                (Decode.oneOf [ Decode.field "replayIndex" (Decode.nullable Decode.int), Decode.succeed Nothing ])
                                (Decode.oneOf [ Decode.field "flipVertical" Decode.bool, Decode.succeed False ])
                                |> Decode.andThen
                                    (\base ->
                                        Decode.field "game" (boardFromPublicGameDecoder boardCode version)
                                            |> Decode.map
                                                (\board ->
                                                    { base
                                                        | board = Just board
                                                    }
                                                )
                                    )
                        )
            )
