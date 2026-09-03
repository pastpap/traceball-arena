module Board.Decode exposing (boardDecoder, boardStateDecoder, personDecoder, pointDecoder, roundDecoder, seatDecoder, seatStateDecoder, sessionDecoder)

import Board.Types exposing (..)
import Json.Decode as Decode exposing (Decoder)


boardDecoder : Decoder Board
boardDecoder =
    Decode.map8 boardPartial
        (Decode.field "code" Decode.string)
        (Decode.field "version" Decode.int)
        (Decode.field "state" boardStateDecoder)
        (Decode.at [ "seats", "blue" ] seatDecoder)
        (Decode.at [ "seats", "red" ] seatDecoder)
        (Decode.field "currentSession" (Decode.nullable sessionDecoder))
        (Decode.field "watchers" (Decode.list personDecoder))
        (Decode.field "waitingList" (Decode.list personDecoder))
        |> Decode.andThen
            (\finish ->
                Decode.map3 finish
                    (Decode.field "createdAt" Decode.int)
                    (Decode.field "updatedAt" Decode.int)
                    (Decode.field "expiresAt" Decode.int)
            )


boardPartial : String -> Int -> BoardState -> Seat -> Seat -> Maybe Session -> List Person -> List Person -> Int -> Int -> Int -> Board
boardPartial code version state blue red currentSession watchers waitingList createdAt updatedAt expiresAt =
    { code = code
    , version = version
    , state = state
    , blue = blue
    , red = red
    , currentSession = currentSession
    , watchers = watchers
    , waitingList = waitingList
    , createdAt = createdAt
    , updatedAt = updatedAt
    , expiresAt = expiresAt
    }


personDecoder : Decoder Person
personDecoder =
    Decode.map2 Person
        (Decode.field "displayName" Decode.string)
        (Decode.maybe (Decode.field "joinedAt" Decode.int))


seatDecoder : Decoder Seat
seatDecoder =
    Decode.map6 Seat
        (Decode.field "color" Decode.string)
        (Decode.field "state" seatStateDecoder)
        (Decode.field "player" (Decode.nullable personDecoder))
        (Decode.field "disconnectedAt" (Decode.nullable Decode.int))
        (Decode.field "canBeFreedAt" (Decode.nullable Decode.int))
        (Decode.field "canBeFreed" Decode.bool)


sessionDecoder : Decoder Session
sessionDecoder =
    Decode.map8
        (\id_ state_ score_ turn_ winner_ endReason_ moveCount_ round_ ->
            { id = id_
            , state = state_
            , score = score_
            , turn = turn_
            , winner = winner_
            , endReason = endReason_
            , moveCount = moveCount_
            , round = round_
            , moveTimeLimitSeconds = Nothing
            }
        )
        (Decode.maybe (Decode.field "id" Decode.string))
        (Decode.field "state" sessionStateDecoder)
        (Decode.field "score" scoreDecoder)
        (Decode.maybe (Decode.field "turn" Decode.string))
        (Decode.field "winner" (Decode.nullable Decode.string))
        (Decode.field "endReason" (Decode.nullable Decode.string))
        sessionMoveCountDecoder
        (Decode.maybe (Decode.field "round" roundDecoder))
        |> Decode.andThen
            (\base ->
                Decode.map
                    (\secs -> { base | moveTimeLimitSeconds = secs })
                    (Decode.maybe (Decode.field "moveTimeLimitSeconds" Decode.int))
            )


scoreDecoder : Decoder Score
scoreDecoder =
    Decode.map2 Score
        (Decode.field "blue" Decode.int)
        (Decode.field "red" Decode.int)


sessionMoveCountDecoder : Decoder Int
sessionMoveCountDecoder =
    Decode.oneOf
        [ Decode.at [ "round", "moves" ] (Decode.list Decode.value)
            |> Decode.map List.length
        , Decode.succeed 0
        ]


pointDecoder : Decoder Point
pointDecoder =
    Decode.map2 Point
        (Decode.field "x" Decode.int)
        (Decode.field "y" Decode.int)


moveDecoder : Decoder Move
moveDecoder =
    Decode.map5 Move
        (Decode.field "from" pointDecoder)
        (Decode.field "to" pointDecoder)
        (Decode.field "playerId" Decode.string)
        (Decode.oneOf [ Decode.field "segment" Decode.string, Decode.succeed "" ])
        (Decode.oneOf [ Decode.field "bounce" Decode.bool, Decode.succeed False ])


roundDecoder : Decoder Round
roundDecoder =
    Decode.map8
        (\state turn ball visited segments moves legalMoves winner ->
            { state = state
            , turn = turn
            , ball = ball
            , visited = visited
            , segments = segments
            , moves = moves
            , legalMoves = legalMoves
            , winner = winner
            , endReason = Nothing
            }
        )
        (Decode.field "state" Decode.string)
        (Decode.field "turn" Decode.string)
        (Decode.field "ball" pointDecoder)
        (Decode.oneOf [ Decode.field "visited" (Decode.list Decode.string), Decode.succeed [] ])
        (Decode.oneOf [ Decode.field "segments" (Decode.list Decode.string), Decode.succeed [] ])
        (Decode.oneOf [ Decode.field "moves" (Decode.list moveDecoder), Decode.succeed [] ])
        (Decode.oneOf [ Decode.field "legalMoves" (Decode.list pointDecoder), Decode.succeed [] ])
        (Decode.field "winner" (Decode.nullable Decode.string))
        |> Decode.andThen
            (\r ->
                Decode.map (\er -> { r | endReason = er })
                    (Decode.field "endReason" (Decode.nullable Decode.string))
            )


boardStateDecoder : Decoder BoardState
boardStateDecoder =
    Decode.string
        |> Decode.map
            (\value ->
                case value of
                    "WaitingForPlayers" ->
                        WaitingForPlayers

                    "OneSeatOccupied" ->
                        OneSeatOccupied

                    "SessionActive" ->
                        SessionActive

                    "SessionPaused" ->
                        SessionPaused

                    "BetweenRounds" ->
                        BetweenRounds

                    "SessionEnded" ->
                        SessionEnded

                    "BoardExpired" ->
                        BoardExpired

                    other ->
                        UnknownBoardState other
            )


seatStateDecoder : Decoder SeatState
seatStateDecoder =
    Decode.string
        |> Decode.map
            (\value ->
                case value of
                    "Vacant" ->
                        Vacant

                    "Occupied" ->
                        Occupied

                    "DisconnectedReserved" ->
                        DisconnectedReserved

                    other ->
                        UnknownSeatState other
            )


sessionStateDecoder : Decoder SessionState
sessionStateDecoder =
    Decode.string
        |> Decode.map
            (\value ->
                case value of
                    "Active" ->
                        Active

                    "Paused" ->
                        Paused

                    "BetweenRounds" ->
                        BetweenRoundSession

                    "Ended" ->
                        Ended

                    other ->
                        UnknownSessionState other
            )
