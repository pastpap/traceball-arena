module Local.Codec exposing
    ( localGameDecoder
    , localGameEncoder
    , localMoveDecoder
    , localMoveEncoder
    )

import Json.Decode as Decode
import Json.Encode as Encode
import Local.Types exposing (LocalGame, LocalMove)
import Shared.Timer exposing (normalizeMoveTimerSeconds)


localGameEncoder : LocalGame -> Encode.Value
localGameEncoder game =
    Encode.object
        [ ( "blueName", Encode.string game.blueName )
        , ( "redName", Encode.string game.redName )
        , ( "turn", Encode.string game.turn )
        , ( "ball", Encode.object [ ( "x", Encode.int game.ball.x ), ( "y", Encode.int game.ball.y ) ] )
        , ( "visited", Encode.list Encode.string game.visited )
        , ( "segments", Encode.list Encode.string game.segments )
        , ( "moves", Encode.list localMoveEncoder game.moves )
        , ( "scoreBlue", Encode.int game.scoreBlue )
        , ( "scoreRed", Encode.int game.scoreRed )
        , ( "winner", game.winner |> Maybe.map Encode.string |> Maybe.withDefault Encode.null )
        , ( "endReason", game.endReason |> Maybe.map Encode.string |> Maybe.withDefault Encode.null )
        , ( "moveTimerSeconds", Encode.int game.moveTimerSeconds )
        , ( "turnStartedAtMs", game.turnStartedAtMs |> Maybe.map Encode.int |> Maybe.withDefault Encode.null )
        , ( "consecutiveTimeouts", Encode.int game.consecutiveTimeouts )
        ]


localMoveEncoder : LocalMove -> Encode.Value
localMoveEncoder move =
    Encode.object
        [ ( "playerId", Encode.string move.playerId )
        , ( "from", Encode.object [ ( "x", Encode.int move.from.x ), ( "y", Encode.int move.from.y ) ] )
        , ( "to", Encode.object [ ( "x", Encode.int move.to.x ), ( "y", Encode.int move.to.y ) ] )
        , ( "segment", Encode.string move.segment )
        , ( "bounce", Encode.bool move.bounce )
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
            , moveTimerSeconds = 15
            , turnStartedAtMs = Nothing
            , consecutiveTimeouts = 0
            }
        )
        (Decode.field "blueName" Decode.string)
        (Decode.field "redName" Decode.string)
        (Decode.field "turn" Decode.string)
        pointAtBallDecoder
        (Decode.field "visited" (Decode.list Decode.string))
        (Decode.field "segments" (Decode.list Decode.string))
        (Decode.field "moves" (Decode.list localMoveDecoder))
        (Decode.field "scoreBlue" Decode.int)
        |> Decode.andThen
            (\base ->
                Decode.map6
                    (\scoreRed winner endReason moveTimerSeconds turnStartedAtMs consecutiveTimeouts ->
                        { base
                            | scoreRed = scoreRed
                            , winner = winner
                            , endReason = endReason
                            , moveTimerSeconds = normalizeMoveTimerSeconds moveTimerSeconds
                            , turnStartedAtMs = turnStartedAtMs
                            , consecutiveTimeouts = consecutiveTimeouts
                        }
                    )
                    (Decode.field "scoreRed" Decode.int)
                    (Decode.field "winner" (Decode.nullable Decode.string))
                    (Decode.field "endReason" (Decode.nullable Decode.string))
                    (Decode.oneOf [ Decode.field "moveTimerSeconds" Decode.int, Decode.succeed 15 ])
                    (Decode.oneOf [ Decode.field "turnStartedAtMs" (Decode.nullable Decode.int), Decode.succeed Nothing ])
                    (Decode.oneOf [ Decode.field "consecutiveTimeouts" Decode.int, Decode.succeed 0 ])
            )


localMoveDecoder : Decode.Decoder LocalMove
localMoveDecoder =
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


pointAtBallDecoder : Decode.Decoder { x : Int, y : Int }
pointAtBallDecoder =
    Decode.map2 (\x y -> { x = x, y = y })
        (Decode.at [ "ball", "x" ] Decode.int)
        (Decode.at [ "ball", "y" ] Decode.int)
