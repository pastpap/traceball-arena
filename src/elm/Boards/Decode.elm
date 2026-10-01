module Boards.Decode exposing (boardSummaryDecoder, createdBoardInfoDecoder)

import Boards.Summary exposing (BoardSummary, CreatedBoardInfo)
import Json.Decode as Decode


boardSummaryDecoder : Decode.Decoder BoardSummary
boardSummaryDecoder =
    Decode.map7 BoardSummary
        (Decode.field "roomId" Decode.string)
        (Decode.oneOf [ Decode.field "state" Decode.string, Decode.succeed "unknown" ])
        (Decode.oneOf [ Decode.at [ "occupancy", "occupiedCount" ] Decode.int, Decode.at [ "occupancy", "activeCount" ] Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.at [ "occupancy", "activeCount" ] Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.at [ "occupancy", "vacantCount" ] Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.field "moveCount" Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.field "isOwner" Decode.bool, Decode.succeed False ])


createdBoardInfoDecoder : Decode.Decoder CreatedBoardInfo
createdBoardInfoDecoder =
    Decode.map2 CreatedBoardInfo
        (Decode.field "roomId" Decode.string)
        (Decode.field "url" Decode.string)
