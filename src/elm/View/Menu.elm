module View.Menu exposing (Actions, viewDesktop, viewMobile)

import Element exposing (Element)
import Html exposing (Html)
import Html.Attributes
import Html.Events
import Json.Decode as Decode


type alias Actions msg =
    { dismiss : msg
    , ignoreClick : msg
    , showHistory : msg
    , showRules : msg
    }


viewDesktop : Actions msg -> Element msg
viewDesktop actions =
    Element.html <|
        Html.div
            [ Html.Attributes.style "position" "fixed"
            , Html.Attributes.style "inset" "0"
            , Html.Attributes.style "z-index" "50"
            , Html.Events.onClick actions.dismiss
            ]
            [ Html.div
                [ Html.Attributes.class "popup-menu"
                , Html.Events.stopPropagationOn "click" (Decode.succeed ( actions.ignoreClick, True ))
                ]
                [ popupMenuItem "clock_history" "Game History" actions.showHistory
                , popupMenuItem "menu_book" "Game Rules" actions.showRules
                ]
            ]


popupMenuItem : String -> String -> msg -> Html msg
popupMenuItem iconLabel label onClickMsg =
    Html.button
        [ Html.Attributes.type_ "button"
        , Html.Attributes.class "popup-menu-item"
        , Html.Events.onClick onClickMsg
        ]
        [ Html.span [ Html.Attributes.class "popup-menu-icon" ] [ Html.text (menuIcon iconLabel) ]
        , Html.span [ Html.Attributes.class "popup-menu-label" ] [ Html.text label ]
        , Html.span [ Html.Attributes.class "popup-menu-chevron" ] [ Html.text "›" ]
        ]


menuIcon : String -> String
menuIcon key =
    case key of
        "clock_history" ->
            "🕓"

        "menu_book" ->
            "📖"

        _ ->
            "•"


viewMobile : Actions msg -> Element msg
viewMobile actions =
    Element.html <|
        Html.div
            [ Html.Attributes.class "sheet-overlay"
            , Html.Events.onClick actions.dismiss
            ]
            [ Html.div
                [ Html.Attributes.class "sheet-card"
                , Html.Events.stopPropagationOn "click" (Decode.succeed ( actions.ignoreClick, True ))
                ]
                [ Html.div [ Html.Attributes.class "sheet-handle" ] []
                , Html.div [ Html.Attributes.class "sheet-header" ]
                    [ Html.p [ Html.Attributes.class "sheet-eyebrow" ] [ Html.text "Traceball Arena" ]
                    , Html.p [ Html.Attributes.class "sheet-title" ] [ Html.text "Menu" ]
                    ]
                , Html.div [ Html.Attributes.class "sheet-items" ]
                    [ popupMenuItem "clock_history" "Game History" actions.showHistory
                    , popupMenuItem "menu_book" "Game Rules" actions.showRules
                    ]
                , Html.button
                    [ Html.Attributes.type_ "button"
                    , Html.Attributes.class "sheet-close-btn"
                    , Html.Events.onClick actions.dismiss
                    ]
                    [ Html.text "Close" ]
                ]
            ]
