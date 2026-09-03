module Board.View exposing (viewBoard)

import Board.Types exposing (..)
import Html exposing (Html)
import Svg as S
import Svg.Attributes as SA
import Svg.Events as SE



-- ── Board geometry ────────────────────────────────────────────────────────────


bm : Float
bm =
    58


stepX : Float
stepX =
    75.5


stepY : Float
stepY =
    67


sx : Int -> String
sx x =
    flt (bm + toFloat x * stepX)


sy : Int -> String
sy y =
    flt (bm + toFloat y * stepY)


sxv : Int -> Float
sxv x =
    bm + toFloat x * stepX


syv : Int -> Float
syv y =
    bm + toFloat y * stepY


flt : Float -> String
flt =
    String.fromFloat


pk : Point -> String
pk p =
    String.fromInt p.x ++ "," ++ String.fromInt p.y


toSeatColor : String -> String
toSeatColor s =
    case s of
        "p1" ->
            "blue"

        "p2" ->
            "red"

        _ ->
            s


playerHex : String -> String
playerHex seat =
    if toSeatColor seat == "red" then
        "#ff3b30"

    else
        "#0b7cff"


isOwnTurnCheck : Maybe String -> String -> Bool
isOwnTurnCheck ownSeat turn =
    case ownSeat of
        Nothing ->
            False

        Just s ->
            toSeatColor s == toSeatColor turn


allBoardPoints : List Point
allBoardPoints =
    List.concatMap
        (\x -> List.range 1 11 |> List.map (\y -> { x = x, y = y }))
        (List.range 0 8)
        ++ List.concatMap
            (\x -> [ { x = x, y = 0 }, { x = x, y = 12 } ])
            (List.range 3 5)



-- ── Main view ─────────────────────────────────────────────────────────────────


viewBoard : (Point -> msg) -> Maybe String -> Maybe Int -> Board -> Html msg
viewBoard onMove ownSeat replayIndex board =
    let
        session =
            board.currentSession

        round =
            session |> Maybe.andThen .round

        ball =
            round |> Maybe.map .ball |> Maybe.withDefault { x = 4, y = 6 }

        legalMoves =
            round |> Maybe.map .legalMoves |> Maybe.withDefault []

        moves =
            round |> Maybe.map .moves |> Maybe.withDefault []

        turn =
            round |> Maybe.map .turn |> Maybe.withDefault ""

        winner =
            round |> Maybe.andThen .winner

        visited =
            round |> Maybe.map .visited |> Maybe.withDefault [ pk ball ]

        interactive =
            isOwnTurnCheck ownSeat turn && winner == Nothing && replayIndex == Nothing
    in
    S.svg
        [ SA.id "board"
        , SA.viewBox "0 0 720 920"
        , SA.style "width:100%;height:auto;display:block;margin:0 auto"
        , SA.preserveAspectRatio "xMidYMid meet"
        ]
        [ -- Main pitch background
          S.rect [ SA.x "12", SA.y "12", SA.width "696", SA.height "896", SA.rx "28", SA.fill "#0cb240" ] []

        -- Pitch stripe overlay
        , S.g [ SA.opacity "0.06", SA.fill "white" ]
            [ S.polygon [ SA.points "-80,1300 120,0 240,0 40,1300" ] []
            , S.polygon [ SA.points "300,1300 500,0 620,0 420,1300" ] []
            , S.polygon [ SA.points "680,1300 880,0 1000,0 800,1300" ] []
            ]

        -- Gate mesh (goal net texture)
        , viewGateMesh 0
        , viewGateMesh 11

        -- Pitch outline lines
        , S.g
            [ SA.stroke "#f8fff8"
            , SA.strokeWidth "8"
            , SA.fill "none"
            , SA.strokeLinecap "round"
            , SA.strokeLinejoin "round"
            ]
            [ -- Top side (split at gate)
              S.line [ SA.x1 (sx 0), SA.y1 (sy 1), SA.x2 (sx 3), SA.y2 (sy 1) ] []
            , S.line [ SA.x1 (sx 5), SA.y1 (sy 1), SA.x2 (sx 8), SA.y2 (sy 1) ] []

            -- Bottom side (split at gate)
            , S.line [ SA.x1 (sx 0), SA.y1 (sy 11), SA.x2 (sx 3), SA.y2 (sy 11) ] []
            , S.line [ SA.x1 (sx 5), SA.y1 (sy 11), SA.x2 (sx 8), SA.y2 (sy 11) ] []

            -- Left side
            , S.line [ SA.x1 (sx 0), SA.y1 (sy 1), SA.x2 (sx 0), SA.y2 (sy 11) ] []

            -- Right side
            , S.line [ SA.x1 (sx 8), SA.y1 (sy 1), SA.x2 (sx 8), SA.y2 (sy 11) ] []

            -- Red gate (top)
            , S.line [ SA.x1 (sx 3), SA.y1 (sy 1), SA.x2 (sx 3), SA.y2 (sy 0) ] []
            , S.line [ SA.x1 (sx 3), SA.y1 (sy 0), SA.x2 (sx 5), SA.y2 (sy 0) ] []
            , S.line [ SA.x1 (sx 5), SA.y1 (sy 0), SA.x2 (sx 5), SA.y2 (sy 1) ] []

            -- Blue gate (bottom)
            , S.line [ SA.x1 (sx 3), SA.y1 (sy 11), SA.x2 (sx 3), SA.y2 (sy 12) ] []
            , S.line [ SA.x1 (sx 3), SA.y1 (sy 12), SA.x2 (sx 5), SA.y2 (sy 12) ] []
            , S.line [ SA.x1 (sx 5), SA.y1 (sy 12), SA.x2 (sx 5), SA.y2 (sy 11) ] []
            ]

        -- Gate post caps (circles at each gate post corner)
        , viewPostCap 3 1
        , viewPostCap 5 1
        , viewPostCap 3 11
        , viewPostCap 5 11
        , viewPostCap 3 0
        , viewPostCap 5 0
        , viewPostCap 3 12
        , viewPostCap 5 12

        -- Corner flags
        , viewCornerFlag 0 1 "#ff3b30"
        , viewCornerFlag 8 1 "#ff3b30"
        , viewCornerFlag 0 11 "#0b7cff"
        , viewCornerFlag 8 11 "#0b7cff"

        -- Grid dots
        , S.g [] (List.map (viewGridDot visited (pk ball)) allBoardPoints)

        -- Traced move segments
        , S.g [] (List.map viewMoveSegment moves)

        -- Legal move targets
        , S.g [] <|
            if interactive then
                List.map (viewLegalTarget onMove turn) legalMoves

            else if not (List.isEmpty legalMoves) then
                List.map (viewLegalPreview turn) legalMoves

            else
                []

        -- Ball
        , S.g []
            [ S.circle
                [ SA.cx (sx ball.x)
                , SA.cy (sy ball.y)
                , SA.r "26"
                , SA.fill "rgba(0,0,0,0.22)"
                ]
                []
            , S.text_
                [ SA.x (sx ball.x)
                , SA.y (sy ball.y)
                , SA.textAnchor "middle"
                , SA.dominantBaseline "middle"
                , SA.fontSize "38"
                , SA.style "user-select:none;pointer-events:none"
                ]
                [ S.text "⚽" ]
            ]

        -- Ball
        , S.g []
            [ S.circle
                [ SA.cx (sx ball.x)
                , SA.cy (sy ball.y)
                , SA.r "15"
                , SA.fill "#f8fff8"
                , SA.stroke "rgba(0,0,0,0.2)"
                , SA.strokeWidth "2"
                ]
                []
            , S.circle
                [ SA.cx (sx ball.x)
                , SA.cy (sy ball.y)
                , SA.r "5"
                , SA.fill "#101820"
                ]
                []
            ]
        ]



-- ── Pitch decorations ─────────────────────────────────────────────────────────


viewGateMesh : Int -> S.Svg msg
viewGateMesh gy =
    let
        x0 =
            sxv 3

        y0 =
            syv gy

        x1 =
            sxv 5

        y1 =
            syv (gy + 1)
    in
    S.g []
        [ S.line [ SA.x1 (flt x0), SA.y1 (flt y0), SA.x2 (flt x1), SA.y2 (flt y1), SA.stroke "rgba(255,255,255,0.18)", SA.strokeWidth "1" ] []
        , S.line [ SA.x1 (flt x1), SA.y1 (flt y0), SA.x2 (flt x0), SA.y2 (flt y1), SA.stroke "rgba(255,255,255,0.18)", SA.strokeWidth "1" ] []
        ]


viewPostCap : Int -> Int -> S.Svg msg
viewPostCap x y =
    S.circle
        [ SA.cx (sx x)
        , SA.cy (sy y)
        , SA.r "6"
        , SA.fill "rgba(255,255,255,0.9)"
        ]
        []


viewCornerFlag : Int -> Int -> String -> S.Svg msg
viewCornerFlag gx gy color =
    let
        cx_ =
            sxv gx

        cy_ =
            syv gy

        dx =
            if gx > 0 then
                1

            else
                -1

        dy =
            if gy < 6 then
                -1

            else
                1

        hx =
            cx_ + toFloat dx * 18

        hy =
            cy_ + toFloat dy * 48

        pl =
            sqrt ((hx - cx_) ^ 2 + (hy - cy_) ^ 2)

        ux =
            (hx - cx_) / pl

        uy =
            (hy - cy_) / pl

        -- Normal perpendicular to pole direction
        nx0 =
            -uy

        ny0 =
            ux

        -- Ensure flag faces outward
        ( nx, ny ) =
            if nx0 * toFloat dx < 0 then
                ( -nx0, -ny0 )

            else
                ( nx0, ny0 )

        -- Flag polygon points
        p1x =
            hx - ux * 15

        p1y =
            hy - uy * 15

        p2x =
            hx + nx * 30

        p2y =
            hy + ny * 30

        p3x =
            hx + ux * 15

        p3y =
            hy + uy * 15

        pts =
            flt p1x
                ++ ","
                ++ flt p1y
                ++ " "
                ++ flt p2x
                ++ ","
                ++ flt p2y
                ++ " "
                ++ flt p3x
                ++ ","
                ++ flt p3y
    in
    S.g []
        [ S.line
            [ SA.x1 (flt cx_)
            , SA.y1 (flt cy_)
            , SA.x2 (flt hx)
            , SA.y2 (flt hy)
            , SA.stroke "rgba(255,255,255,0.9)"
            , SA.strokeWidth "4"
            , SA.strokeLinecap "round"
            ]
            []
        , S.circle
            [ SA.cx (flt cx_)
            , SA.cy (flt cy_)
            , SA.r "5"
            , SA.fill "rgba(255,255,255,0.55)"
            ]
            []
        , S.polygon
            [ SA.points pts
            , SA.fill color
            , SA.opacity "0.92"
            ]
            []
        ]



-- ── Grid dots ─────────────────────────────────────────────────────────────────


viewGridDot : List String -> String -> Point -> S.Svg msg
viewGridDot visited ballKey pt =
    if pk pt == ballKey then
        S.g [] []

    else
        let
            key =
                pk pt

            isVisited =
                List.member key visited

            -- Gate-mouth bounce dot: the single center dot at x=4, y=1 or y=11
            isGateBounce =
                pt.x == 4 && (pt.y == 1 || pt.y == 11)
        in
        if isGateBounce then
            S.g []
                [ S.circle [ SA.cx (sx pt.x), SA.cy (sy pt.y), SA.r "8", SA.fill "#050c05" ] [] ]

        else if isVisited then
            S.circle [ SA.cx (sx pt.x), SA.cy (sy pt.y), SA.r "10", SA.fill "rgba(255,255,255,0.72)" ] []

        else
            S.circle [ SA.cx (sx pt.x), SA.cy (sy pt.y), SA.r "4.5", SA.fill "rgba(255,255,255,0.28)" ] []



-- ── Move segments ─────────────────────────────────────────────────────────────


viewMoveSegment : Move -> S.Svg msg
viewMoveSegment move =
    let
        color =
            playerHex move.playerId
    in
    S.g []
        [ -- Shadow underneath
          S.line
            [ SA.x1 (sx move.from.x)
            , SA.y1 (sy move.from.y)
            , SA.x2 (sx move.to.x)
            , SA.y2 (sy move.to.y)
            , SA.stroke "rgba(0,0,0,0.25)"
            , SA.strokeWidth "10"
            , SA.strokeLinecap "round"
            ]
            []

        -- Colored line
        , S.line
            [ SA.x1 (sx move.from.x)
            , SA.y1 (sy move.from.y)
            , SA.x2 (sx move.to.x)
            , SA.y2 (sy move.to.y)
            , SA.stroke color
            , SA.strokeWidth "6"
            , SA.strokeLinecap "round"
            , SA.opacity "0.88"
            ]
            []
        ]



-- ── Legal move targets ────────────────────────────────────────────────────────


viewLegalTarget : (Point -> msg) -> String -> Point -> S.Svg msg
viewLegalTarget onMove turn pt =
    let
        color =
            playerHex turn

        -- Hex with 15% opacity for fill
        fillColor =
            color ++ "26"
    in
    S.g
        [ SE.onClick (onMove pt), SA.style "cursor:pointer" ]
        [ S.circle [ SA.cx (sx pt.x), SA.cy (sy pt.y), SA.r "27", SA.fill "transparent" ] []
        , S.circle
            [ SA.cx (sx pt.x)
            , SA.cy (sy pt.y)
            , SA.r "17"
            , SA.fill "none"
            , SA.stroke color
            , SA.strokeWidth "1"
            , SA.opacity "0.35"
            ]
            []
        , S.circle
            [ SA.cx (sx pt.x)
            , SA.cy (sy pt.y)
            , SA.r "12"
            , SA.fill fillColor
            , SA.stroke color
            , SA.strokeWidth "2"
            ]
            []
        ]


viewLegalPreview : String -> Point -> S.Svg msg
viewLegalPreview _ pt =
    S.circle
        [ SA.cx (sx pt.x)
        , SA.cy (sy pt.y)
        , SA.r "11"
        , SA.fill "rgba(255,255,255,0.05)"
        , SA.stroke "rgba(255,255,255,0.18)"
        , SA.strokeWidth "1"
        ]
        []
