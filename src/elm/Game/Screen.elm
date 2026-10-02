module Game.Screen exposing (BoardScreenConfig, PauseOverlayConfig, shareIconSvg, viewGhostButtonHtml, viewPauseOverlayHtml, viewPausePanelHtml, viewShareIconButtonHtml, viewSquareIconButtonHtml, viewWinnerOverlayHtml)

import Board.Types exposing (Board)
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


onClickAttributes : Maybe msg -> List (Html.Attribute msg)
onClickAttributes onPress =
    case onPress of
        Just msg ->
            [ Html.Events.onClick msg ]

        Nothing ->
            []
