module Local.Game exposing
    ( applyLocalMove
    , computeLocalLegalMoves
    , expireLocalTurnIfNeeded
    , localTurnDeadlineAt
    , restartLocalRound
    , restartLocalTurnClock
    , startLocalGame
    )

import Local.Types exposing (LocalGame, LocalPoint)
import Shared.Timer exposing (normalizeMoveTimerSeconds)


startLocalGame : Int -> String -> String -> Int -> LocalGame
startLocalGame nowMs blueName_ redName_ moveTimerSeconds =
    { blueName =
        if String.isEmpty (String.trim blueName_) then
            "Blue"

        else
            String.trim blueName_
    , redName =
        if String.isEmpty (String.trim redName_) then
            "Red"

        else
            String.trim redName_
    , turn = "p1"
    , ball = { x = 4, y = 6 }
    , visited = [ "4,6" ]
    , segments = []
    , moves = []
    , scoreBlue = 0
    , scoreRed = 0
    , winner = Nothing
    , endReason = Nothing
    , moveTimerSeconds = normalizeMoveTimerSeconds moveTimerSeconds
    , turnStartedAtMs =
        if moveTimerSeconds > 0 then
            Just nowMs

        else
            Nothing
    , consecutiveTimeouts = 0
    }


pkLocal : LocalPoint -> String
pkLocal p =
    String.fromInt p.x ++ "," ++ String.fromInt p.y


localSegmentKey : LocalPoint -> LocalPoint -> String
localSegmentKey a b =
    let
        ak =
            pkLocal a

        bk =
            pkLocal b
    in
    if ak < bk then
        ak ++ "|" ++ bk

    else
        bk ++ "|" ++ ak


isLocalBoardPoint : LocalPoint -> Bool
isLocalBoardPoint p =
    if p.x < 0 || p.x > 8 || p.y < 0 || p.y > 12 then
        False

    else if p.y >= 1 && p.y <= 11 then
        True

    else
        p.x >= 3 && p.x <= 5


isLocalBoundaryPoint : LocalPoint -> Bool
isLocalBoundaryPoint p =
    p.x == 0 || p.x == 8 || p.y == 1 || p.y == 11


isLocalTracedMarginSegment : LocalPoint -> LocalPoint -> Bool
isLocalTracedMarginSegment from to =
    let
        dx =
            abs (from.x - to.x)

        dy =
            abs (from.y - to.y)

        verticalSide =
            from.x == to.x && (from.x == 0 || from.x == 8) && from.y >= 1 && from.y <= 11 && to.y >= 1 && to.y <= 11

        horizontalPitchEdge =
            from.y == to.y && (from.y == 1 || from.y == 11) && from.x >= 0 && from.x <= 8 && to.x >= 0 && to.x <= 8

        inGateMouth =
            min from.x to.x >= 3 && max from.x to.x <= 5
    in
    if dx + dy /= 1 then
        False

    else if verticalSide then
        True

    else if not horizontalPitchEdge then
        False

    else
        not inGateMouth


isLocalBlockedCornerCut : LocalPoint -> LocalPoint -> Bool
isLocalBlockedCornerCut from to =
    let
        diagonal =
            abs (from.x - to.x) == 1 && abs (from.y - to.y) == 1

        touchesTopOutside =
            (from.y == 1 && to.y == 0) || (from.y == 0 && to.y == 1)

        touchesBottomOutside =
            (from.y == 11 && to.y == 12) || (from.y == 12 && to.y == 11)

        outsideGateMouth =
            to.x < 3 || to.x > 5 || from.x < 3 || from.x > 5
    in
    diagonal && (touchesTopOutside || touchesBottomOutside) && outsideGateMouth


computeLocalLegalMoves : LocalGame -> List LocalPoint
computeLocalLegalMoves game =
    let
        from =
            game.ball

        deltas =
            [ ( -1, -1 ), ( 0, -1 ), ( 1, -1 ), ( -1, 0 ), ( 1, 0 ), ( -1, 1 ), ( 0, 1 ), ( 1, 1 ) ]

        candidates =
            List.map (\( dx, dy ) -> { x = from.x + dx, y = from.y + dy }) deltas

        hasSegment a b =
            List.member (localSegmentKey a b) game.segments
    in
    candidates
        |> List.filter isLocalBoardPoint
        |> List.filter (\to -> not (hasSegment from to))
        |> List.filter (\to -> not (isLocalTracedMarginSegment from to))
        |> List.filter (\to -> not (isLocalBlockedCornerCut from to))


applyLocalMove : Int -> LocalGame -> LocalPoint -> Result String LocalGame
applyLocalMove nowMs game to =
    case game.winner of
        Just _ ->
            Err "Round is over — start a new round."

        Nothing ->
            let
                legalMoves =
                    computeLocalLegalMoves game

                toKey =
                    pkLocal to

                isLegal =
                    List.any (\p -> pkLocal p == toKey) legalMoves
            in
            if not isLegal then
                Err "Not a legal move from here."

            else
                let
                    from =
                        game.ball

                    visitedBefore =
                        List.member toKey game.visited

                    bounce =
                        visitedBefore || isLocalBoundaryPoint to

                    nextTurn =
                        if bounce then
                            game.turn

                        else if game.turn == "p1" then
                            "p2"

                        else
                            "p1"

                    segment =
                        localSegmentKey from to

                    nextVisited =
                        if visitedBefore then
                            game.visited

                        else
                            game.visited ++ [ toKey ]

                    nextMoves =
                        game.moves ++ [ { playerId = game.turn, from = from, to = to, segment = segment, bounce = bounce } ]

                    ownGoal =
                        (game.turn == "p1" && to.y == 12) || (game.turn == "p2" && to.y == 0)

                    opponentGoal =
                        (game.turn == "p1" && to.y == 0) || (game.turn == "p2" && to.y == 12)

                    goalWinner =
                        if opponentGoal then
                            Just game.turn

                        else if ownGoal then
                            Just
                                (if game.turn == "p1" then
                                    "p2"

                                 else
                                    "p1"
                                )

                        else
                            Nothing

                    moved =
                        { game
                            | turn = nextTurn
                            , ball = to
                            , visited = nextVisited
                            , segments = game.segments ++ [ segment ]
                            , moves = nextMoves
                            , consecutiveTimeouts = 0
                        }

                    stuckWinner =
                        if goalWinner == Nothing && List.isEmpty (computeLocalLegalMoves moved) then
                            Just
                                (if nextTurn == "p1" then
                                    "p2"

                                 else
                                    "p1"
                                )

                        else
                            Nothing

                    winner =
                        case goalWinner of
                            Just w ->
                                Just w

                            Nothing ->
                                stuckWinner
                in
                Ok
                    (case winner of
                        Just w ->
                            { moved
                                | winner = Just w
                                , endReason = Just "Round complete"
                                , turnStartedAtMs = Nothing
                                , scoreBlue =
                                    if w == "p1" then
                                        moved.scoreBlue + 1

                                    else
                                        moved.scoreBlue
                                , scoreRed =
                                    if w == "p2" then
                                        moved.scoreRed + 1

                                    else
                                        moved.scoreRed
                            }

                        Nothing ->
                            restartLocalTurnClock nowMs moved
                    )


restartLocalRound : Int -> LocalGame -> LocalGame
restartLocalRound nowMs game =
    { game
        | turn = "p1"
        , ball = { x = 4, y = 6 }
        , visited = [ "4,6" ]
        , segments = []
        , moves = []
        , winner = Nothing
        , endReason = Nothing
        , consecutiveTimeouts = 0
        , turnStartedAtMs =
            if game.moveTimerSeconds > 0 then
                Just nowMs

            else
                Nothing
    }


restartLocalTurnClock : Int -> LocalGame -> LocalGame
restartLocalTurnClock nowMs game =
    { game
        | turnStartedAtMs =
            if game.moveTimerSeconds > 0 then
                Just nowMs

            else
                Nothing
    }


localTurnDeadlineAt : LocalGame -> Maybe Int
localTurnDeadlineAt game =
    if game.moveTimerSeconds <= 0 || game.winner /= Nothing then
        Nothing

    else
        game.turnStartedAtMs
            |> Maybe.map (\startedAtMs -> startedAtMs + (game.moveTimerSeconds * 1000))


expireLocalTurnIfNeeded : Int -> LocalGame -> Maybe LocalGame
expireLocalTurnIfNeeded nowMs game =
    localTurnDeadlineAt game
        |> Maybe.andThen
            (\deadlineAt ->
                if nowMs < deadlineAt then
                    Nothing

                else if game.consecutiveTimeouts >= 1 then
                    Just { game | turnStartedAtMs = Nothing, consecutiveTimeouts = 0 }

                else
                    let
                        timedOutPlayer =
                            game.turn

                        nextTurn =
                            if game.turn == "p1" then
                                "p2"

                            else
                                "p1"

                        switched =
                            restartLocalTurnClock nowMs { game | turn = nextTurn, consecutiveTimeouts = 1 }

                        winner =
                            if List.isEmpty (computeLocalLegalMoves switched) then
                                Just timedOutPlayer

                            else
                                Nothing
                    in
                    Just <|
                        case winner of
                            Just winnerId ->
                                { switched
                                    | winner = Just winnerId
                                    , endReason = Just "Round complete"
                                    , turnStartedAtMs = Nothing
                                    , scoreBlue =
                                        if winnerId == "p1" then
                                            switched.scoreBlue + 1

                                        else
                                            switched.scoreBlue
                                    , scoreRed =
                                        if winnerId == "p2" then
                                            switched.scoreRed + 1

                                        else
                                            switched.scoreRed
                                }

                            Nothing ->
                                switched
            )
