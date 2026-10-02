module View.Timer exposing (ControlConfig, viewControl)

import Element exposing (Attribute, Element, alignRight, centerY, column, el, fill, paddingXY, rgb255, row, spacing, text, width)
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
import Html.Events
import Shared.Timer exposing (moveTimerLabel, timerOptions)


type alias ControlConfig msg =
    { isMobile : Bool
    , current : Int
    , fieldAttrs : List (Attribute msg)
    , openSheet : msg
    , selectId : String
    , onInput : String -> msg
    }


viewControl : ControlConfig msg -> Element msg
viewControl config =
    if config.isMobile then
        Input.button
            (config.fieldAttrs
                ++ [ Border.rounded 16
                   , paddingXY 14 12
                   , Font.size 14
                   ]
            )
            { onPress = Just config.openSheet
            , label =
                row [ width fill, centerY ]
                    [ column [ spacing 2 ]
                        [ el [ Font.size 11, Font.color (rgb255 185 212 191), Font.semiBold ] (text "Selected timer")
                        , el [ Font.bold ] (text (moveTimerLabel config.current))
                        ]
                    , el [ alignRight, Font.color (rgb255 141 255 174), Font.bold, Font.size 12 ] (text "Change")
                    ]
            }

    else
        viewSelect config


viewSelect : ControlConfig msg -> Element msg
viewSelect config =
    Element.html
        (Html.select
            [ Html.Attributes.id config.selectId
            , Html.Attributes.style "background" "rgba(0,0,0,0.5)"
            , Html.Attributes.style "color" "#e0ffe0"
            , Html.Attributes.style "border" "1px solid rgba(255,255,255,0.1)"
            , Html.Attributes.style "border-radius" "10px"
            , Html.Attributes.style "padding" "12px 14px"
            , Html.Attributes.style "font-size" "14px"
            , Html.Attributes.style "cursor" "pointer"
            , Html.Attributes.style "width" "100%"
            , Html.Events.onInput config.onInput
            ]
            (List.map
                (\s ->
                    Html.option
                        [ Html.Attributes.value (String.fromInt s)
                        , Html.Attributes.selected (s == config.current)
                        ]
                        [ Html.text
                            (if s == 0 then
                                "Off"

                             else
                                String.fromInt s ++ " seconds"
                            )
                        ]
                )
                timerOptions
            )
        )
