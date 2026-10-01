module App.Flags exposing (Flags, decodeFlags, defaultOnlineMoveTimer)

import Json.Decode as Decode


type alias Flags localGame =
    { boardCode : String
    , clientId : String
    , playerName : String
    , savedLocalGame : Maybe localGame
    , savedLocalPaused : Bool
    , onlineMoveTimer : Int
    }


defaultOnlineMoveTimer : Int
defaultOnlineMoveTimer =
    15


decodeFlags : Decode.Decoder localGame -> Decode.Value -> Result Decode.Error (Flags localGame)
decodeFlags localGameDecoder flags =
    Decode.decodeValue (flagsDecoder localGameDecoder) flags


flagsDecoder : Decode.Decoder localGame -> Decode.Decoder (Flags localGame)
flagsDecoder localGameDecoder =
    Decode.map6 Flags
        (Decode.field "boardCode" Decode.string)
        (Decode.field "clientId" Decode.string)
        (Decode.field "playerName" Decode.string)
        (Decode.maybe (Decode.field "savedLocalGame" localGameDecoder))
        (Decode.maybe (Decode.field "savedLocalPaused" Decode.bool)
            |> Decode.map (Maybe.withDefault False)
        )
        (Decode.maybe (Decode.field "onlineMoveTimer" Decode.int)
            |> Decode.map (Maybe.withDefault defaultOnlineMoveTimer)
        )
