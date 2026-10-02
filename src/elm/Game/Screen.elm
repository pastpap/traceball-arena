module Game.Screen exposing (BoardScreenConfig, PauseOverlayConfig, viewPauseOverlayHtml, viewPausePanelHtml)

import Board.Types exposing (Board)
import Html exposing (Html)
import Html.Attributes
import Html.Events


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


onClickAttributes : Maybe msg -> List (Html.Attribute msg)
onClickAttributes onPress =
    case onPress of
        Just msg ->
            [ Html.Events.onClick msg ]

        Nothing ->
            []
