module Board.View exposing (viewBoard)

import Board.Types exposing (..)
import Html exposing (Html, div, h2, li, p, section, span, text, ul)
import Html.Attributes exposing (class)


viewBoard : Maybe Int -> Board -> Html msg
viewBoard replayIndex board =
    section [ class "elm-board-shell" ]
        [ div [ class "elm-board-header" ]
            [ h2 [] [ text ("Board " ++ board.code) ]
            , span [ class "elm-pill" ] [ text (boardStateLabel board.state) ]
            , span [ class "elm-version" ] [ text ("v" ++ String.fromInt board.version) ]
            ]
        , div [ class "elm-seats" ]
            [ viewSeat "Blue" board.blue
            , viewSeat "Red" board.red
            ]
        , viewBoardMeta replayIndex board
        , viewSession board.currentSession
        , viewPeople "Watchers" board.watchers
        , viewPeople "Waiting list" board.waitingList
        ]


viewBoardMeta : Maybe Int -> Board -> Html msg
viewBoardMeta replayIndex board =
    let
        moveCount =
            board.currentSession
                |> Maybe.map .moveCount
                |> Maybe.withDefault 0

        replayStatus =
            if moveCount <= 0 then
                "Replay: no moves yet."

            else
                case replayIndex of
                    Just idx ->
                        "Replay " ++ String.fromInt idx ++ " / " ++ String.fromInt moveCount

                    Nothing ->
                        "Live view at move " ++ String.fromInt moveCount ++ " / " ++ String.fromInt moveCount
    in
    div [ class "elm-board-meta" ]
        [ p [] [ text ("Board state: " ++ boardStateLabel board.state) ]
        , p [] [ text ("Occupancy: " ++ String.fromInt (occupiedSeatCount board) ++ "/2 seated") ]
        , p [] [ text ("Watchers: " ++ String.fromInt (List.length board.watchers) ++ " · Waiting list: " ++ String.fromInt (List.length board.waitingList)) ]
        , p [] [ text ("Updated: " ++ String.fromInt board.updatedAt ++ " · Expires: " ++ String.fromInt board.expiresAt) ]
        , p [ class "elm-replay-meta" ] [ text replayStatus ]
        ]


viewSeat : String -> Seat -> Html msg
viewSeat label seat =
    div [ class ("elm-seat elm-seat-" ++ seat.color) ]
        [ span [ class "elm-seat-label" ] [ text label ]
        , span [ class "elm-seat-state" ] [ text (seatStateLabel seat.state) ]
        , p [] [ text (Maybe.withDefault "Open seat" (Maybe.map .displayName seat.player)) ]
        ]


viewSession : Maybe Session -> Html msg
viewSession maybeSession =
    case maybeSession of
        Nothing ->
            div [ class "elm-session" ] [ text "No active session yet." ]

        Just session ->
            div [ class "elm-session" ]
                [ span [ class "elm-seat-label" ] [ text (sessionStateLabel session.state) ]
                , p [] [ text ("Score: Blue " ++ String.fromInt session.score.blue ++ " — Red " ++ String.fromInt session.score.red) ]
                , p [] [ text ("Moves: " ++ String.fromInt session.moveCount) ]
                ]


viewPeople : String -> List Person -> Html msg
viewPeople label people =
    div [ class "elm-people" ]
        [ span [ class "elm-seat-label" ] [ text label ]
        , if List.isEmpty people then
            p [] [ text "None" ]

          else
            ul [] (List.map (\person -> li [] [ text person.displayName ]) people)
        ]


occupiedSeatCount : Board -> Int
occupiedSeatCount board =
    List.length (List.filter isSeatOccupied [ board.blue, board.red ])


isSeatOccupied : Seat -> Bool
isSeatOccupied seat =
    case seat.state of
        Occupied ->
            True

        DisconnectedReserved ->
            True

        _ ->
            False


boardStateLabel : BoardState -> String
boardStateLabel state =
    case state of
        WaitingForPlayers ->
            "Waiting for players"

        OneSeatOccupied ->
            "One seat occupied"

        SessionActive ->
            "Session active"

        SessionPaused ->
            "Session paused"

        BetweenRounds ->
            "Between rounds"

        SessionEnded ->
            "Session ended"

        BoardExpired ->
            "Board expired"

        UnknownBoardState value ->
            "Unknown: " ++ value


seatStateLabel : SeatState -> String
seatStateLabel state =
    case state of
        Vacant ->
            "Vacant"

        Occupied ->
            "Occupied"

        DisconnectedReserved ->
            "Disconnected"

        UnknownSeatState value ->
            "Unknown: " ++ value


sessionStateLabel : SessionState -> String
sessionStateLabel state =
    case state of
        Active ->
            "Active session"

        Paused ->
            "Paused session"

        BetweenRoundSession ->
            "Between rounds"

        Ended ->
            "Ended session"

        UnknownSessionState value ->
            "Unknown session: " ++ value
