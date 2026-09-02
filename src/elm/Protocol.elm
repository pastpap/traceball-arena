module Protocol exposing (BoardNotFoundPayload, ServerMessage(..), StateMessage, boardNotFoundCode, serverMessageDecoder, stateMessageDecoder)

import Board.Decode exposing (boardDecoder)
import Board.Types exposing (Board)
import Json.Decode as Decode exposing (Decoder)


type alias StateMessage =
    { boardCode : String
    , version : Int
    , board : Board
    }


type alias BoardNotFoundPayload =
    { boardCode : Maybe String
    , message : String
    }


type ServerMessage
    = State StateMessage
    | BoardNotFound BoardNotFoundPayload
    | Joined (Maybe String)
    | Left
    | WaitingListJoined
    | WaitingListLeft
    | SeatFreed
    | ServerError String
    | UnsupportedMessage String


serverMessageDecoder : Decoder ServerMessage
serverMessageDecoder =
    Decode.field "type" Decode.string
        |> Decode.andThen decodeByType


decodeByType : String -> Decoder ServerMessage
decodeByType messageType =
    case messageType of
        "state" ->
            Decode.map State stateMessageDecoder

        "BoardNotFound" ->
            Decode.map BoardNotFound boardNotFoundDecoder

        "joined" ->
            Decode.map Joined (Decode.maybe (Decode.field "playerId" Decode.string))

        "left" ->
            Decode.succeed Left

        "waitingListJoined" ->
            Decode.succeed WaitingListJoined

        "waitingListLeft" ->
            Decode.succeed WaitingListLeft

        "seatFreed" ->
            Decode.succeed SeatFreed

        "error" ->
            Decode.map ServerError
                (Decode.oneOf
                    [ Decode.field "error" Decode.string
                    , Decode.succeed "Server error."
                    ]
                )

        _ ->
            Decode.succeed (UnsupportedMessage ("unsupported message type: " ++ messageType))


boardNotFoundDecoder : Decoder BoardNotFoundPayload
boardNotFoundDecoder =
    Decode.map2 BoardNotFoundPayload
        (Decode.maybe (Decode.field "boardCode" Decode.string))
        (Decode.oneOf
            [ Decode.field "message" Decode.string
            , Decode.succeed "Board not found or expired."
            ]
        )


boardNotFoundCode : BoardNotFoundPayload -> String -> String
boardNotFoundCode payload fallback =
    case payload.boardCode of
        Just boardCode ->
            boardCode

        Nothing ->
            fallback


stateMessageDecoder : Decoder StateMessage
stateMessageDecoder =
    Decode.field "board" boardDecoder
        |> Decode.andThen
            (\board ->
                Decode.map2
                    (\boardCode version ->
                        { boardCode = boardCode
                        , version = version
                        , board = board
                        }
                    )
                    (Decode.oneOf
                        [ Decode.field "boardCode" Decode.string
                        , Decode.succeed board.code
                        ]
                    )
                    (Decode.oneOf
                        [ Decode.field "version" Decode.int
                        , Decode.succeed board.version
                        ]
                    )
            )
