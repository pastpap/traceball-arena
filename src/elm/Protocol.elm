module Protocol exposing (ServerMessage(..), StateMessage, stateMessageDecoder)

import Board.Decode exposing (boardDecoder)
import Board.Types exposing (Board)
import Json.Decode as Decode exposing (Decoder)


type alias StateMessage =
    { boardCode : String
    , version : Int
    , board : Board
    }


type ServerMessage
    = State StateMessage
    | BoardNotFound String
    | UnsupportedMessage String


stateMessageDecoder : Decoder StateMessage
stateMessageDecoder =
    Decode.map3 StateMessage
        (Decode.field "boardCode" Decode.string)
        (Decode.field "version" Decode.int)
        (Decode.field "board" boardDecoder)
