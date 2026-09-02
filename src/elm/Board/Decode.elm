module Board.Decode exposing (boardDecoder, boardStateDecoder, personDecoder, seatDecoder, seatStateDecoder, sessionDecoder)

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
    Decode.map7 Session
        (Decode.maybe (Decode.field "id" Decode.string))
        (Decode.field "state" sessionStateDecoder)
        (Decode.field "score" scoreDecoder)
        (Decode.maybe (Decode.field "turn" Decode.string))
        (Decode.field "winner" (Decode.nullable Decode.string))
        (Decode.field "endReason" (Decode.nullable Decode.string))
        sessionMoveCountDecoder


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
