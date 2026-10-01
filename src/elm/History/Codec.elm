module History.Codec exposing
    ( decodeHistoryEntries
    , historyEntryDecoder
    , historyLocalGameDecoder
    )

import History.Types exposing (HistoryEntry)
import Json.Decode as Decode
import Local.Codec as LocalCodec
import Local.Types exposing (LocalGame)


historyEntryDecoder : Decode.Decoder HistoryEntry
historyEntryDecoder =
    Decode.map8 HistoryEntry
        (Decode.oneOf [ Decode.field "mode" Decode.string, Decode.succeed "local" ])
        (Decode.oneOf [ Decode.at [ "players", "p1", "name" ] Decode.string, Decode.succeed "P1" ])
        (Decode.oneOf [ Decode.at [ "players", "p2", "name" ] Decode.string, Decode.succeed "P2" ])
        (Decode.oneOf [ Decode.at [ "score", "p1" ] Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.at [ "score", "p2" ] Decode.int, Decode.succeed 0 ])
        (Decode.maybe (Decode.field "winner" Decode.string))
        (Decode.oneOf [ Decode.field "moveCount" Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.field "playedAt" Decode.int, Decode.succeed 0 ])


decodeHistoryEntries : Decode.Value -> List HistoryEntry
decodeHistoryEntries value =
    value
        |> Decode.decodeValue (Decode.list historyEntryDecoder)
        |> Result.withDefault []


historyLocalGameDecoder : Decode.Decoder LocalGame
historyLocalGameDecoder =
    Decode.map8
        (\blueName redName turn ball visited segments moves scoreBlue ->
            { blueName = blueName
            , redName = redName
            , turn = turn
            , ball = ball
            , visited = visited
            , segments = segments
            , moves = moves
            , scoreBlue = scoreBlue
            , scoreRed = 0
            , winner = Nothing
            , endReason = Nothing
            , moveTimerSeconds = 0
            , turnStartedAtMs = Nothing
            , consecutiveTimeouts = 0
            }
        )
        (Decode.oneOf [ Decode.at [ "players", "p1", "name" ] Decode.string, Decode.succeed "Blue" ])
        (Decode.oneOf [ Decode.at [ "players", "p2", "name" ] Decode.string, Decode.succeed "Red" ])
        (Decode.oneOf [ Decode.field "turn" Decode.string, Decode.succeed "p1" ])
        (Decode.map2 (\x y -> { x = x, y = y })
            (Decode.at [ "ball", "x" ] Decode.int)
            (Decode.at [ "ball", "y" ] Decode.int)
        )
        (Decode.oneOf [ Decode.field "visited" (Decode.list Decode.string), Decode.succeed [ "4,6" ] ])
        (Decode.oneOf [ Decode.field "segments" (Decode.list Decode.string), Decode.succeed [] ])
        (Decode.oneOf [ Decode.field "moves" (Decode.list LocalCodec.localMoveDecoder), Decode.succeed [] ])
        (Decode.oneOf [ Decode.at [ "score", "p1" ] Decode.int, Decode.succeed 0 ])
        |> Decode.andThen
            (\base ->
                Decode.map5
                    (\scoreRed winner endReason timerMs timeouts ->
                        { base
                            | scoreRed = scoreRed
                            , winner = winner
                            , endReason = endReason
                            , moveTimerSeconds = timerMs // 1000
                            , consecutiveTimeouts = timeouts
                        }
                    )
                    (Decode.oneOf [ Decode.at [ "score", "p2" ] Decode.int, Decode.succeed 0 ])
                    (Decode.oneOf [ Decode.field "winner" (Decode.nullable Decode.string), Decode.succeed Nothing ])
                    (Decode.oneOf [ Decode.field "endReason" (Decode.nullable Decode.string), Decode.succeed Nothing ])
                    (Decode.oneOf [ Decode.field "moveTimeLimitMs" Decode.int, Decode.succeed 0 ])
                    (Decode.oneOf [ Decode.field "consecutiveTimeouts" Decode.int, Decode.succeed 0 ])
            )
