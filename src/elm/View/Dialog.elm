module View.Dialog exposing (Actions, viewHeader, viewOverlay)

import Element exposing (Element)
import Html exposing (Html)
import Html.Attributes
import Html.Events
import Json.Decode as Decode


type alias Actions msg =
    { dismiss : msg
    , ignoreClick : msg
    , backToMenu : msg
    }


viewOverlay : Actions msg -> List (Html msg) -> Element msg
viewOverlay actions children =
    Element.html <|
        Html.div
            [ Html.Attributes.class "dialog-overlay"
            , Html.Events.onClick actions.dismiss
            ]
            [ Html.div
                [ Html.Attributes.class "dialog-card"
                , Html.Events.stopPropagationOn "click" (Decode.succeed ( actions.ignoreClick, True ))
                ]
                children
            ]


viewHeader : Actions msg -> Bool -> String -> String -> Html msg
viewHeader actions isMobile eyebrow title =
    Html.div [ Html.Attributes.class "dialog-header" ]
        [ Html.div []
            [ Html.p [ Html.Attributes.class "dialog-eyebrow" ] [ Html.text eyebrow ]
            , Html.h2 [ Html.Attributes.class "dialog-title" ] [ Html.text title ]
            ]
        , if isMobile then
            Html.button
                [ Html.Attributes.type_ "button"
                , Html.Attributes.class "dialog-back"
                , Html.Events.onClick actions.backToMenu
                ]
                [ Html.text "← Menu" ]

          else
            Html.button
                [ Html.Attributes.type_ "button"
                , Html.Attributes.class "dialog-close"
                , Html.Events.onClick actions.dismiss
                ]
                [ Html.text "×" ]
        ]
