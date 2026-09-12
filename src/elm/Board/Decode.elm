module Board.Decode exposing (boardDecoder, boardFromPublicGameDecoder, boardStateDecoder, personDecoder, pointDecoder, roundDecoder, seatDecoder, seatStateDecoder, sessionDecoder)

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
        (Decode.oneOf [ Decode.field "displayName" Decode.string, Decode.field "name" Decode.string, Decode.succeed "Guest" ])
        (Decode.oneOf [ Decode.field "joinedAt" (Decode.nullable Decode.int), Decode.succeed Nothing ])


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
        sessionIdDecoder
        (Decode.field "state" sessionStateDecoder)
        (Decode.field "score" scoreDecoder)
        sessionTurnDecoder
        sessionWinnerDecoder
        sessionEndReasonDecoder
        sessionMoveCountDecoder
        (Decode.maybe (Decode.field "round" roundDecoder))
        |> Decode.andThen
            (\base ->
                Decode.map
                    (\secs -> { base | moveTimeLimitSeconds = secs })
                    (Decode.maybe (Decode.field "moveTimeLimitSeconds" Decode.int))
            )


sessionIdDecoder : Decoder (Maybe String)
sessionIdDecoder =
    Decode.oneOf
        [ Decode.field "id" (Decode.nullable Decode.string)
        , Decode.field "sessionId" (Decode.nullable Decode.string)
        , Decode.succeed Nothing
        ]


sessionTurnDecoder : Decoder (Maybe String)
sessionTurnDecoder =
    Decode.oneOf
        [ Decode.field "turn" (Decode.nullable Decode.string)
        , Decode.at [ "round", "turn" ] Decode.string |> Decode.map Just
        , Decode.succeed Nothing
        ]


sessionWinnerDecoder : Decoder (Maybe String)
sessionWinnerDecoder =
    Decode.oneOf
        [ Decode.field "winner" (Decode.nullable Decode.string)
        , Decode.at [ "round", "winner" ] (Decode.nullable Decode.string)
        , Decode.succeed Nothing
        ]


sessionEndReasonDecoder : Decoder (Maybe String)
sessionEndReasonDecoder =
    Decode.oneOf
        [ Decode.field "endReason" (Decode.nullable Decode.string)
        , Decode.at [ "round", "endReason" ] (Decode.nullable Decode.string)
        , Decode.succeed Nothing
        ]


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
            , deadlineAt = Nothing
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
                Decode.map2 (\deadlineAt endReason -> { r | deadlineAt = deadlineAt, endReason = endReason })
                    (Decode.maybe (Decode.field "deadlineAt" Decode.int))
                    (Decode.oneOf
                        [ Decode.field "endReason" (Decode.nullable Decode.string)
                        , Decode.succeed Nothing
                        ]
                    )
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


boardFromPublicGameDecoder : String -> Int -> Decoder Board
boardFromPublicGameDecoder boardCode version =
    Decode.value
        |> Decode.andThen
            (\value ->
                let
                    defaultBlue =
                        { color = "blue", state = Vacant, player = Nothing, disconnectedAt = Nothing, canBeFreedAt = Nothing, canBeFreed = False }

                    defaultRed =
                        { color = "red", state = Vacant, player = Nothing, disconnectedAt = Nothing, canBeFreedAt = Nothing, canBeFreed = False }

                    roomId =
                        decodeWithDefault (Decode.field "roomId" Decode.string) boardCode value

                    status =
                        decodeWithDefault (Decode.field "status" Decode.string) "waiting" value

                    seats =
                        decodeWithDefault (Decode.field "players" publicSeatsDecoder) ( defaultBlue, defaultRed ) value

                    turn =
                        decodeWithDefault (Decode.field "turn" Decode.string) "p1" value

                    ball =
                        decodeWithDefault (Decode.field "ball" pointDecoder) { x = 4, y = 6 } value

                    visited =
                        decodeWithDefault (Decode.field "visited" (Decode.list Decode.string)) [] value

                    segments =
                        decodeWithDefault (Decode.field "segments" (Decode.list Decode.string)) [] value

                    moves =
                        decodeWithDefault (Decode.field "moves" (Decode.list moveDecoder)) [] value

                    score =
                        decodeWithDefault (Decode.field "score" publicScoreDecoder) { blue = 0, red = 0 } value

                    timerMs =
                        decodeWithDefault (Decode.field "moveTimeLimitMs" Decode.int) 0 value

                    turnStartedAt =
                        decodeWithDefault (Decode.field "turnStartedAt" (Decode.nullable Decode.int)) Nothing value

                    winner =
                        decodeWithDefault (Decode.field "winner" (Decode.nullable Decode.string)) Nothing value

                    endReason =
                        decodeWithDefault (Decode.field "endReason" (Decode.nullable Decode.string)) Nothing value

                    waitingList =
                        decodeWithDefault (Decode.field "waitingList" (Decode.list personDecoder)) [] value

                    watchers =
                        decodeWithDefault (Decode.field "watchers" (Decode.list personDecoder)) [] value

                    legalMoves =
                        decodeWithDefault (Decode.field "legalMoves" (Decode.list pointDecoder)) [] value

                    createdAt =
                        decodeWithDefault (Decode.field "createdAt" Decode.int) 0 value

                    updatedAt =
                        decodeWithDefault (Decode.field "updatedAt" Decode.int) 0 value

                    expiresAt =
                        decodeWithDefault (Decode.field "expiresAt" Decode.int) 0 value

                    code =
                        if String.isEmpty roomId then
                            boardCode

                        else
                            roomId

                    timerSeconds =
                        if timerMs >= 0 then
                            Just (round (toFloat timerMs / 1000))

                        else
                            Nothing

                    deadlineAt =
                        if timerMs > 0 then
                            turnStartedAt |> Maybe.map (\ts -> ts + timerMs)

                        else
                            Nothing

                    roundState =
                        if status == "finished" then
                            "PendingContinue"

                        else
                            "Active"

                    round_ =
                        { state = roundState
                        , turn = normalizeTurnSeat turn
                        , ball = ball
                        , visited = visited
                        , segments = segments
                        , moves = moves
                        , legalMoves = legalMoves
                        , deadlineAt = deadlineAt
                        , winner = winner
                        , endReason = endReason
                        }

                    currentSession =
                        if status == "playing" || status == "paused" || status == "finished" then
                            Just
                                { id = decodeWithDefault (Decode.field "sessionId" (Decode.nullable Decode.string)) Nothing value
                                , state = sessionStateFromPublicGame status
                                , score = score
                                , turn = Just (normalizeTurnSeat turn)
                                , winner = winner
                                , endReason = endReason
                                , moveCount = List.length moves
                                , round = Just round_
                                , moveTimeLimitSeconds = timerSeconds
                                }

                        else
                            Nothing
                in
                Decode.succeed
                    { code = code
                    , version = version
                    , state = boardStateFromPublicGame status seats
                    , blue = Tuple.first seats
                    , red = Tuple.second seats
                    , currentSession = currentSession
                    , watchers = watchers
                    , waitingList = waitingList
                    , createdAt = createdAt
                    , updatedAt = updatedAt
                    , expiresAt = expiresAt
                    }
            )


decodeWithDefault : Decoder a -> a -> Decode.Value -> a
decodeWithDefault decoder fallback value =
    case Decode.decodeValue decoder value of
        Ok result ->
            result

        Err _ ->
            fallback


publicScoreDecoder : Decoder Score
publicScoreDecoder =
    Decode.map2 Score
        (Decode.oneOf [ Decode.field "p1" Decode.int, Decode.succeed 0 ])
        (Decode.oneOf [ Decode.field "p2" Decode.int, Decode.succeed 0 ])


publicSeatsDecoder : Decoder ( Seat, Seat )
publicSeatsDecoder =
    Decode.map2 Tuple.pair
        (Decode.field "p1" (publicSeatDecoder "blue" "Blue"))
        (Decode.field "p2" (publicSeatDecoder "red" "Red"))


publicSeatDecoder : String -> String -> Decoder Seat
publicSeatDecoder color fallbackName =
    Decode.map5
        (\rawStatus name disconnectedAt canBeFreedAt canBeFreed ->
            let
                status =
                    publicSeatState rawStatus
            in
            { color = color
            , state = status
            , player =
                if status == Vacant then
                    Nothing

                else
                    Just { displayName = name, joinedAt = Nothing }
            , disconnectedAt = disconnectedAt
            , canBeFreedAt = canBeFreedAt
            , canBeFreed = canBeFreed
            }
        )
        (Decode.oneOf [ Decode.field "status" Decode.string, Decode.succeed "vacant" ])
        (Decode.oneOf [ Decode.field "name" Decode.string, Decode.succeed fallbackName ])
        (Decode.oneOf [ Decode.field "disconnectedAt" (Decode.nullable Decode.int), Decode.succeed Nothing ])
        (Decode.oneOf [ Decode.field "canBeFreedAt" (Decode.nullable Decode.int), Decode.succeed Nothing ])
        (Decode.oneOf [ Decode.field "canBeFreed" Decode.bool, Decode.succeed False ])


publicSeatState : String -> SeatState
publicSeatState rawStatus =
    case rawStatus of
        "active" ->
            Occupied

        "disconnected" ->
            DisconnectedReserved

        "vacant" ->
            Vacant

        other ->
            UnknownSeatState other


boardStateFromPublicGame : String -> ( Seat, Seat ) -> BoardState
boardStateFromPublicGame status seats =
    if status == "finished" then
        BetweenRounds

    else if status == "playing" then
        SessionActive

    else if status == "paused" then
        SessionPaused

    else
        let
            blueSeat =
                Tuple.first seats

            redSeat =
                Tuple.second seats

            activeCount =
                List.length (List.filter identity [ blueSeat.state == Occupied, redSeat.state == Occupied ])
        in
        if activeCount == 1 then
            OneSeatOccupied

        else
            WaitingForPlayers


sessionStateFromPublicGame : String -> SessionState
sessionStateFromPublicGame status =
    case status of
        "playing" ->
            Active

        "paused" ->
            Paused

        "finished" ->
            BetweenRoundSession

        other ->
            UnknownSessionState other


normalizeTurnSeat : String -> String
normalizeTurnSeat turn =
    if turn == "p2" || turn == "red" then
        "red"

    else
        "blue"
