module Game.Screen exposing (BoardScreenConfig, PauseOverlayConfig, ReplayActions, mobileCard, shareIconSvg, viewBoardBadgeHtml, viewBoardTurnChipHtml, viewBoardTurnClockSlotHtml, viewBoardTurnWidgetsHtml, viewGhostButtonHtml, viewMobileActionButton, viewMobileJoinSeatButton, viewMobilePrimaryActionButton, viewMobileReplayCard, viewMobileScorePill, viewMobileTimerChip, viewPauseOverlayHtml, viewPausePanelHtml, viewReplayHtml, viewRoundSummaryHtml, viewShareIconButtonHtml, viewShareMobileButton, viewSquareIconButtonHtml, viewTimerPillHtml, viewWinnerOverlayHtml)

import Board.Types exposing (Board, BoardState(..))
import Element exposing (Element, alignRight, centerX, centerY, clip, clipX, column, el, fill, fillPortion, height, none, padding, paddingXY, paragraph, px, rgb255, row, spacing, text, width)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html exposing (Html)
import Html.Attributes
import Html.Events
import Svg
import Svg.Attributes as SvgA


type alias PauseOverlayConfig msg =
    { title : String
    , message : String
    , turnText : String
    , resumeAction : Maybe msg
    }


type alias BoardScreenConfig msg =
    { board : Board
    , ownSeat : Maybe String
    , boardFlipped : Bool
    , turnHopSerial : Int
    , replayIndex : Maybe Int
    , isCompactLayout : Bool
    , showWinnerOverlay : Bool
    , timerSecs : Maybe Int
    , timerRemainingSecs : Maybe Int
    , statusText : String
    , turnIndicatorText : String
    , turnIndicatorIsRed : Bool
    , matchSubtitle : String
    , moveCount : Int
    , isPaused : Bool
    , showJoinBlue : Bool
    , showJoinRed : Bool
    , showSeatActions : Bool
    , shareAction : Maybe msg
    , leaveAction : Maybe msg
    , pauseAction : Maybe msg
    , newRoundAction : Maybe msg
    , pauseOverlay : Maybe (PauseOverlayConfig msg)
    }


type alias ReplayActions msg =
    { toStart : msg
    , stepBack : msg
    , stepForward : msg
    , toLive : msg
    }


viewReplayHtml : ReplayActions msg -> Maybe Int -> Int -> Html msg
viewReplayHtml actions replayIndex moveCount =
    let
        currentIndex =
            Maybe.withDefault moveCount replayIndex

        isLive =
            replayIndex == Nothing

        replayProgress =
            if moveCount <= 0 then
                "0%"

            else
                String.fromFloat (toFloat currentIndex / toFloat moveCount * 100) ++ "%"

        label =
            if moveCount == 0 then
                "Replay appears once moves are made."

            else
                "Move "
                    ++ String.fromInt currentIndex
                    ++ " of "
                    ++ String.fromInt moveCount
                    ++ (if isLive then
                            " - live board"

                        else
                            ""
                       )
    in
    Html.div [ Html.Attributes.class "board-replay replay" ]
        [ Html.h2 [] [ Html.text "Replay" ]
        , Html.div [ Html.Attributes.class "replay-controls" ]
            [ viewReplayButton (moveCount > 0) (Just actions.toStart) "⏮" "Start"
            , viewReplayButton (moveCount > 0) (Just actions.stepBack) "◀" "Back"
            , viewReplayButton (moveCount > 0) (Just actions.stepForward) "▶" "Next"
            , viewReplayButton (moveCount > 0) (Just actions.toLive) "⏭" "Live"
            ]
        , Html.div [ Html.Attributes.class "replay-progress", Html.Attributes.attribute "aria-hidden" "true" ]
            [ Html.div [ Html.Attributes.class "replay-progress-fill", Html.Attributes.style "width" replayProgress ] [] ]
        , Html.p [ Html.Attributes.id "replayText" ] [ Html.text label ]
        ]


viewReplayButton : Bool -> Maybe msg -> String -> String -> Html msg
viewReplayButton enabled onPress icon label =
    Html.button
        ([ Html.Attributes.type_ "button"
         , Html.Attributes.disabled (not enabled)
         , Html.Attributes.attribute "aria-label" label
         ]
            ++ onClickAttributes
                (if enabled then
                    onPress

                 else
                    Nothing
                )
        )
        [ Html.span [ Html.Attributes.class "replay-btn-icon", Html.Attributes.attribute "aria-hidden" "true" ] [ Html.text icon ]
        , Html.span [ Html.Attributes.class "replay-btn-label" ] [ Html.text label ]
        ]


viewRoundSummaryHtml : String -> Int -> Int -> Maybe msg -> Html msg
viewRoundSummaryHtml winnerName blueScore redScore onNewRound =
    Html.section [ Html.Attributes.class "elm-round-result" ]
        [ Html.p [ Html.Attributes.class "elm-match-summary-kicker" ] [ Html.text "Round complete" ]
        , Html.h3 [] [ Html.text (winnerName ++ " wins this round") ]
        , Html.p [ Html.Attributes.class "elm-match-meta" ] [ Html.text ("Score: Blue " ++ String.fromInt blueScore ++ " - Red " ++ String.fromInt redScore) ]
        , viewGhostButtonHtml "elm-match-continue" True onNewRound "Continue / New Round"
        ]


viewPauseOverlayHtml : PauseOverlayConfig msg -> Html msg
viewPauseOverlayHtml overlay =
    Html.div [ Html.Attributes.id "pauseOverlay", Html.Attributes.class "pause-overlay", Html.Attributes.attribute "aria-live" "polite" ]
        [ Html.div [ Html.Attributes.class "pause-card" ]
            [ Html.div [ Html.Attributes.class "pause-kicker" ] [ Html.text "Paused" ]
            , Html.h2 [] [ Html.text overlay.title ]
            , Html.p [] [ Html.text overlay.message ]
            , Html.p [ Html.Attributes.id "pauseTurn" ] [ Html.text overlay.turnText ]
            , Html.div [ Html.Attributes.class "pause-actions" ]
                [ Html.button
                    ([ Html.Attributes.id "resumeGame"
                     , Html.Attributes.type_ "button"
                     , Html.Attributes.classList
                        [ ( "primary", True )
                        , ( "hidden", overlay.resumeAction == Nothing )
                        ]
                     , Html.Attributes.disabled (overlay.resumeAction == Nothing)
                     , Html.Attributes.attribute "data-elm-command" "resume"
                     ]
                        ++ onClickAttributes overlay.resumeAction
                    )
                    [ Html.text "Resume game" ]
                ]
            ]
        ]


viewPausePanelHtml : PauseOverlayConfig msg -> Html msg
viewPausePanelHtml overlay =
    Html.div
        [ Html.Attributes.class "pause-card pause-panel"
        , Html.Attributes.attribute "data-elm-pause-panel" "true"
        , Html.Attributes.attribute "aria-live" "polite"
        ]
        ([ Html.div [ Html.Attributes.class "pause-kicker" ] [ Html.text "Paused" ]
         , Html.h2 [] [ Html.text overlay.title ]
         , Html.p [] [ Html.text overlay.message ]
         , Html.p [ Html.Attributes.class "pause-turn" ] [ Html.text overlay.turnText ]
         ]
            ++ (case overlay.resumeAction of
                    Just resumeAction ->
                        [ Html.div [ Html.Attributes.class "pause-actions pause-panel-actions" ]
                            [ Html.button
                                ([ Html.Attributes.type_ "button"
                                 , Html.Attributes.attribute "data-elm-command" "resume"
                                 ]
                                    ++ onClickAttributes (Just resumeAction)
                                )
                                [ Html.text "Resume game" ]
                            ]
                        ]

                    Nothing ->
                        []
               )
        )


viewWinnerOverlayHtml : Bool -> String -> Maybe msg -> msg -> Html msg
viewWinnerOverlayHtml isCompactLayout winnerName onNewRound onDismiss =
    Html.div
        [ Html.Attributes.classList
            [ ( "winner-overlay", True )
            , ( "winner-overlay-mobile", isCompactLayout )
            ]
        , Html.Attributes.attribute "aria-live" "polite"
        ]
        [ Html.div [ Html.Attributes.class "winner-card" ]
            [ Html.button
                [ Html.Attributes.type_ "button"
                , Html.Attributes.classList
                    [ ( "winner-close", True )
                    , ( "hidden", onNewRound == Nothing && not isCompactLayout )
                    ]
                , Html.Attributes.attribute "aria-label" "Close winner banner"
                , Html.Events.onClick onDismiss
                ]
                [ Html.text "×" ]
            , Html.div [ Html.Attributes.class "winner-kicker" ] [ Html.text "Winner" ]
            , Html.div [ Html.Attributes.class "winner-name" ] [ Html.text winnerName ]
            , if isCompactLayout then
                Html.text ""

              else
                Html.button
                    ([ Html.Attributes.type_ "button", Html.Attributes.class "winner-new-round" ]
                        ++ onClickAttributes onNewRound
                    )
                    [ Html.text "New Round" ]
            ]
        ]


viewGhostButtonHtml : String -> Bool -> Maybe msg -> String -> Html msg
viewGhostButtonHtml baseClass isVisible onPress label =
    Html.button
        ([ Html.Attributes.type_ "button"
         , Html.Attributes.disabled (onPress == Nothing)
         , Html.Attributes.classList
            [ ( baseClass, True )
            , ( "hidden", not isVisible )
            ]
         ]
            ++ onClickAttributes onPress
        )
        [ Html.text label ]


viewSquareIconButtonHtml : String -> Maybe msg -> String -> String -> Html msg
viewSquareIconButtonHtml className onPress icon ariaLabel =
    Html.button
        ([ Html.Attributes.type_ "button"
         , Html.Attributes.classList
            [ ( className, True )
            , ( "hidden", onPress == Nothing )
            ]
         , Html.Attributes.disabled (onPress == Nothing)
         , Html.Attributes.attribute "aria-label" ariaLabel
         , Html.Attributes.attribute
            "data-elm-command"
            (if ariaLabel == "Pause game" then
                "pause"

             else if ariaLabel == "Resume game" then
                "resume"

             else
                ""
            )
         ]
            ++ onClickAttributes onPress
        )
        [ Html.span [ Html.Attributes.attribute "aria-hidden" "true" ] [ Html.text icon ] ]


shareIconSvg : Html msg
shareIconSvg =
    Svg.svg
        [ SvgA.viewBox "0 0 24 24"
        , SvgA.fill "none"
        , SvgA.stroke "currentColor"
        , SvgA.strokeWidth "2.2"
        , SvgA.strokeLinecap "round"
        , SvgA.strokeLinejoin "round"
        , Html.Attributes.attribute "aria-hidden" "true"
        , SvgA.width "18"
        , SvgA.height "18"
        ]
        [ Svg.circle [ SvgA.cx "18", SvgA.cy "5", SvgA.r "3" ] []
        , Svg.circle [ SvgA.cx "6", SvgA.cy "12", SvgA.r "3" ] []
        , Svg.circle [ SvgA.cx "18", SvgA.cy "19", SvgA.r "3" ] []
        , Svg.line [ SvgA.x1 "8.59", SvgA.y1 "13.51", SvgA.x2 "15.42", SvgA.y2 "17.49" ] []
        , Svg.line [ SvgA.x1 "15.41", SvgA.y1 "6.51", SvgA.x2 "8.59", SvgA.y2 "10.49" ] []
        ]


viewShareIconButtonHtml : String -> Maybe msg -> String -> Html msg
viewShareIconButtonHtml className onPress ariaLabel =
    Html.button
        ([ Html.Attributes.type_ "button"
         , Html.Attributes.classList
            [ ( className, True )
            , ( "hidden", onPress == Nothing )
            ]
         , Html.Attributes.disabled (onPress == Nothing)
         , Html.Attributes.attribute "aria-label" ariaLabel
         ]
            ++ onClickAttributes onPress
        )
        [ shareIconSvg ]


viewMobileActionButton : Bool -> msg -> String -> String -> Element msg
viewMobileActionButton isDanger msg icon label =
    Input.button
        [ width fill
        , paddingXY 0 10
        , Border.rounded 16
        , Border.width 1
        , Border.color
            (if isDanger then
                rgb255 219 80 73

             else
                rgb255 70 92 74
            )
        , Bg.color
            (if isDanger then
                rgb255 86 24 20

             else
                rgb255 28 54 31
            )
        , Font.color (rgb255 248 241 238)
        , Font.size 16
        , Font.bold
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" label)
        , Element.htmlAttribute
            (Html.Attributes.attribute
                "data-elm-command"
                (if label == "Pause" then
                    "pause"

                 else if label == "Resume" then
                    "resume"

                 else
                    ""
                )
            )
        ]
        { onPress = Just msg, label = el [ centerX, centerY ] (text icon) }


viewMobileJoinSeatButton : String -> msg -> Element msg
viewMobileJoinSeatButton seat msg =
    let
        seatLabel =
            if seat == "red" then
                "Red"

            else
                "Blue"

        dotColor =
            if seat == "red" then
                rgb255 255 88 80

            else
                rgb255 58 151 255

        borderColor =
            if seat == "red" then
                rgb255 153 55 51

            else
                rgb255 54 106 173
    in
    Input.button
        [ width fill
        , paddingXY 10 10
        , Border.rounded 16
        , Border.width 1
        , Border.color borderColor
        , Bg.color (rgb255 28 54 31)
        , Font.color (rgb255 248 241 238)
        , Font.size 14
        , Font.bold
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" ("Join " ++ seatLabel))
        ]
        { onPress = Just msg
        , label =
            row [ centerX, centerY, spacing 8 ]
                [ el [ Font.color dotColor, Font.size 14 ] (text "●")
                , text ("Join " ++ seatLabel)
                ]
        }


viewMobilePrimaryActionButton : msg -> String -> String -> Element msg
viewMobilePrimaryActionButton msg icon label =
    Input.button
        [ width fill
        , paddingXY 0 10
        , Border.rounded 16
        , Bg.color (rgb255 246 185 43)
        , Font.color (rgb255 50 29 0)
        , Font.bold
        , Font.size 16
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" label)
        ]
        { onPress = Just msg, label = el [ centerX, centerY ] (text icon) }


viewShareMobileButton : msg -> Element msg
viewShareMobileButton shareMsg =
    Input.button
        [ width fill
        , paddingXY 0 10
        , Border.rounded 16
        , Border.width 1
        , Border.color (rgb255 98 232 248)
        , Bg.color (Element.rgba255 11 124 255 36)
        , Font.color (rgb255 232 251 255)
        , Font.size 16
        , Font.bold
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" "Share")
        ]
        { onPress = Just shareMsg
        , label =
            el [ centerX, centerY ]
                (Element.html shareIconSvg)
        }


viewMobileTimerChip : Maybe Int -> Maybe Int -> Element msg
viewMobileTimerChip timerSecs timerRemainingSecs =
    case timerSecs of
        Just secs ->
            row
                [ spacing 8
                , paddingXY 10 6
                , Border.rounded 999
                , Bg.color (Element.rgba255 0 0 0 150)
                , Border.width 1
                , Border.color (Element.rgba255 255 255 255 20)
                , Font.color (rgb255 240 255 244)
                , Font.size 12
                , Font.bold
                ]
                (text ("Timer: " ++ String.fromInt secs ++ "s")
                    :: (case timerRemainingSecs of
                            Just remainingSecs ->
                                [ el [ Font.color (rgb255 141 255 174) ] (text (String.fromInt remainingSecs ++ "s left")) ]

                            Nothing ->
                                []
                       )
                )

        Nothing ->
            none


viewMobileScorePill : String -> String -> Int -> Element msg
viewMobileScorePill color name score =
    let
        nameRow =
            if color == "blue" then
                row [ width fill, spacing 7, centerY ]
                    [ el [ width fill, alignRight ] (viewMobileEllipsisText True 12 name)
                    , el [ Font.size 12, Font.color (rgb255 11 124 255) ] (text "●")
                    ]

            else
                row [ width fill, spacing 7, centerY ]
                    [ el [ Font.size 12, Font.color (rgb255 255 59 48) ] (text "●")
                    , el [ width fill ] (viewMobileEllipsisText False 12 name)
                    ]

        scoreRow =
            if color == "blue" then
                row [ width fill ]
                    [ el [ alignRight, Font.size 32, Font.bold, Font.color (rgb255 255 255 255) ]
                        (text (String.fromInt score))
                    ]

            else
                row [ width fill ]
                    [ el [ Font.size 32, Font.bold, Font.color (rgb255 255 255 255) ]
                        (text (String.fromInt score))
                    ]
    in
    column
        [ width fill
        , height (px 92)
        , spacing 4
        , paddingXY 10 9
        , Border.rounded 18
        , Bg.color (rgb255 15 42 22)
        , Border.width 1
        , Border.color
            (if color == "blue" then
                rgb255 34 90 160

             else
                rgb255 142 49 45
            )
        , clip
        ]
        [ nameRow
        , scoreRow
        ]


viewMobileEllipsisText : Bool -> Int -> String -> Element msg
viewMobileEllipsisText alignEnd size label =
    el
        [ width fill
        , clipX
        , Font.size size
        , Font.bold
        , Font.color (rgb255 232 245 236)
        , Element.htmlAttribute
            (Html.Attributes.style
                "text-align"
                (if alignEnd then
                    "right"

                 else
                    "left"
                )
            )
        , Element.htmlAttribute (Html.Attributes.style "overflow" "hidden")
        , Element.htmlAttribute (Html.Attributes.style "text-overflow" "ellipsis")
        , Element.htmlAttribute (Html.Attributes.style "white-space" "nowrap")
        ]
        (text label)


viewMobileReplayCard : ReplayActions msg -> Maybe Int -> Int -> Element msg
viewMobileReplayCard actions replayIndex moveCount =
    let
        currentIndex =
            Maybe.withDefault moveCount replayIndex

        label =
            if moveCount == 0 then
                "Replay appears once moves are made."

            else
                "Move "
                    ++ String.fromInt currentIndex
                    ++ " of "
                    ++ String.fromInt moveCount
                    ++ (if replayIndex == Nothing then
                            " - live board"

                        else
                            ""
                       )

        progress =
            if moveCount <= 0 then
                0

            else
                round ((toFloat currentIndex / toFloat moveCount) * 100)
    in
    mobileCard
        [ el [ Font.size 15, Font.bold, Font.color (rgb255 244 255 246) ] (text "Replay")
        , row [ width fill, spacing 8 ]
            [ viewMobileReplayButton (moveCount > 0) (Just actions.toStart) "⏮" "Start"
            , viewMobileReplayButton (moveCount > 0) (Just actions.stepBack) "◀" "Back"
            , viewMobileReplayButton (moveCount > 0) (Just actions.stepForward) "▶" "Next"
            , viewMobileReplayButton (moveCount > 0) (Just actions.toLive) "⏭" "Live"
            ]
        , el
            [ width fill
            , height (px 8)
            , Border.rounded 999
            , Bg.color (Element.rgba255 255 255 255 28)
            , clip
            ]
            (el
                [ width (fillPortion progress)
                , height fill
                , Border.rounded 999
                , Bg.color (rgb255 24 221 79)
                ]
                none
            )
        , paragraph [ width fill, Font.size 13, Font.color (rgb255 200 220 200), Font.bold ] [ text label ]
        ]


viewMobileReplayButton : Bool -> Maybe msg -> String -> String -> Element msg
viewMobileReplayButton enabled onPress icon label =
    Input.button
        [ width fill
        , paddingXY 0 8
        , Border.rounded 16
        , Border.width 1
        , Border.color (rgb255 70 92 74)
        , Bg.color (rgb255 28 54 31)
        , Font.color
            (if enabled then
                rgb255 244 255 246

             else
                Element.rgba255 255 255 255 120
            )
        , Font.size 16
        , Font.bold
        , Element.htmlAttribute (Html.Attributes.attribute "aria-label" label)
        ]
        { onPress =
            if enabled then
                onPress

            else
                Nothing
        , label = el [ centerX, centerY ] (text icon)
        }


mobileCard : List (Element msg) -> Element msg
mobileCard children =
    column
        [ width fill
        , spacing 8
        , padding 10
        , Border.rounded 22
        , Border.width 1
        , Border.color (rgb255 110 130 112)
        , Bg.color (Element.rgba255 2 29 10 214)
        , Font.color (rgb255 244 255 246)
        , Font.size 13
        ]
        children


type alias BoardTurnWidgetData =
    { turnIsRed : Bool
    , turnAtTop : Bool
    , hopSerial : Int
    , clockSeconds : Maybe Int
    }


viewBoardTurnWidgetsHtml : (String -> String) -> BoardScreenConfig msg -> Html msg
viewBoardTurnWidgetsHtml normalizeSeatId config =
    case boardTurnWidgetData normalizeSeatId config of
        Nothing ->
            Html.text ""

        Just widget ->
            let
                warningThreshold =
                    config.timerSecs
                        |> Maybe.map (\limit -> min 5 (max 1 (round (toFloat limit * 0.34))))
                        |> Maybe.withDefault 5

                isDanger =
                    widget.clockSeconds
                        |> Maybe.map (\seconds -> seconds <= 3)
                        |> Maybe.withDefault False

                isWarning =
                    not isDanger
                        && (widget.clockSeconds
                                |> Maybe.map (\seconds -> seconds <= warningThreshold)
                                |> Maybe.withDefault False
                           )
            in
            Html.div
                [ Html.Attributes.classList
                    [ ( "elm-board-turn-overlay", True )
                    , ( "turn-red", widget.turnIsRed )
                    , ( "turn-blue", not widget.turnIsRed )
                    ]
                ]
                (viewBoardTurnChipHtml widget.turnIsRed widget.turnAtTop widget.hopSerial
                    :: (case widget.clockSeconds of
                            Just seconds ->
                                [ viewBoardTurnClockSlotHtml "top" widget.turnAtTop seconds isWarning isDanger
                                , viewBoardTurnClockSlotHtml "bottom" (not widget.turnAtTop) seconds isWarning isDanger
                                ]

                            Nothing ->
                                []
                       )
                )


boardTurnWidgetData : (String -> String) -> BoardScreenConfig msg -> Maybe BoardTurnWidgetData
boardTurnWidgetData normalizeSeatId config =
    if config.board.state /= SessionActive || config.replayIndex /= Nothing || config.isPaused then
        Nothing

    else
        config.board.currentSession
            |> Maybe.andThen .round
            |> Maybe.map .turn
            |> Maybe.andThen
                (\turn ->
                    if String.isEmpty turn then
                        Nothing

                    else
                        let
                            clockSeconds =
                                case config.timerRemainingSecs of
                                    Just seconds ->
                                        Just (max 0 seconds)

                                    Nothing ->
                                        config.timerSecs
                        in
                        Just
                            { turnIsRed = normalizeSeatId turn == "red"
                            , turnAtTop =
                                if config.boardFlipped then
                                    normalizeSeatId turn /= "red"

                                else
                                    normalizeSeatId turn == "red"
                            , hopSerial = config.turnHopSerial
                            , clockSeconds = clockSeconds
                            }
                )


viewTimerPillHtml : Maybe Int -> Maybe Int -> Html msg
viewTimerPillHtml timerSecs timerRemainingSecs =
    case timerSecs of
        Just secs ->
            Html.div [ Html.Attributes.class "elm-timer-display" ]
                (Html.text ("Timer: " ++ String.fromInt secs ++ "s")
                    :: (case timerRemainingSecs of
                            Just remainingSecs ->
                                [ Html.span [ Html.Attributes.class "elm-timer-countdown" ] [ Html.text (String.fromInt remainingSecs ++ "s left") ] ]

                            Nothing ->
                                []
                       )
                )

        Nothing ->
            Html.text ""


viewBoardBadgeHtml : String -> String -> String -> Int -> Html msg
viewBoardBadgeHtml position color name score =
    Html.div
        [ Html.Attributes.class ("elm-board-badge elm-board-badge-" ++ position) ]
        [ Html.span [ Html.Attributes.class ("dot " ++ color) ] []
        , Html.span [] [ Html.text name ]
        , Html.span [ Html.Attributes.class "elm-board-badge-score" ] [ Html.text (String.fromInt score) ]
        ]


viewBoardTurnClockSlotHtml : String -> Bool -> Int -> Bool -> Bool -> Html msg
viewBoardTurnClockSlotHtml position isActive seconds isWarning isDanger =
    Html.div
        [ Html.Attributes.classList
            [ ( "elm-board-turn-clock", True )
            , ( "slot-top", position == "top" )
            , ( "slot-bottom", position == "bottom" )
            , ( "active", isActive )
            , ( "inactive", not isActive )
            , ( "warning", isWarning )
            , ( "danger", isDanger )
            ]
        ]
        [ Html.span [ Html.Attributes.class "elm-board-turn-clock-digits" ]
            [ Html.text (String.padLeft 2 '0' (String.fromInt (max 0 seconds))) ]
        ]


viewBoardTurnChipHtml : Bool -> Bool -> Int -> Html msg
viewBoardTurnChipHtml turnIsRed turnAtTop hopSerial =
    Html.div
        [ Html.Attributes.classList
            [ ( "elm-board-turn-chip", True )
            , ( "red", turnIsRed )
            , ( "blue", not turnIsRed )
            , ( "at-top", turnAtTop )
            , ( "at-bottom", not turnAtTop )
            , ( "arch-hop", hopSerial > 0 )
            , ( "to-top", turnAtTop )
            , ( "to-bottom", not turnAtTop )
            ]
        ]
        [ Html.span [ Html.Attributes.class "elm-board-turn-chip-ball", Html.Attributes.attribute "aria-hidden" "true" ] [ Html.text "⚽" ] ]


onClickAttributes : Maybe msg -> List (Html.Attribute msg)
onClickAttributes onPress =
    case onPress of
        Just msg ->
            [ Html.Events.onClick msg ]

        Nothing ->
            []
