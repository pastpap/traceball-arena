module View.Timer exposing (ControlConfig, SheetConfig, viewBottomSheet, viewControl)

import Element exposing (Attribute, Element, alignRight, centerY, column, el, fill, paddingXY, rgb255, row, spacing, text, width)
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html exposing (Html)
import Html.Attributes
import Html.Events
import Json.Decode as Decode
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


type alias SheetConfig msg =
    { current : Int
    , dismiss : msg
    , ignoreClick : msg
    , onSelect : Int -> msg
    }


viewBottomSheet : SheetConfig msg -> Element msg
viewBottomSheet config =
    Element.html <|
        Html.div
            [ Html.Attributes.style "position" "fixed"
            , Html.Attributes.style "inset" "0"
            , Html.Attributes.style "display" "flex"
            , Html.Attributes.style "align-items" "flex-end"
            , Html.Attributes.style "justify-content" "center"
            , Html.Attributes.style "padding" "0"
            , Html.Attributes.style "background" "rgba(2, 10, 4, 0.44)"
            , Html.Attributes.style "backdrop-filter" "blur(14px)"
            , Html.Attributes.style "z-index" "70"
            , Html.Events.onClick config.dismiss
            ]
            [ Html.div
                [ Html.Attributes.style "width" "min(100%, 420px)"
                , Html.Attributes.style "max-height" "min(82vh, 560px)"
                , Html.Attributes.style "overflow-y" "auto"
                , Html.Attributes.style "border-top" "1px solid rgba(141, 255, 174, 0.22)"
                , Html.Attributes.style "border-left" "1px solid rgb(72, 106, 82)"
                , Html.Attributes.style "border-right" "1px solid rgb(72, 106, 82)"
                , Html.Attributes.style "border-radius" "28px 28px 0 0"
                , Html.Attributes.style "padding" "10px 16px calc(18px + env(safe-area-inset-bottom, 0px))"
                , Html.Attributes.style "background" "linear-gradient(180deg, rgba(23, 57, 31, 0.99), rgba(10, 35, 18, 0.99))"
                , Html.Attributes.style "box-shadow" "0 -18px 54px rgba(0, 0, 0, 0.42)"
                , Html.Events.stopPropagationOn "click" (Decode.succeed ( config.ignoreClick, True ))
                ]
                ([ Html.div
                    [ Html.Attributes.style "width" "44px"
                    , Html.Attributes.style "height" "5px"
                    , Html.Attributes.style "margin" "2px auto 14px"
                    , Html.Attributes.style "border-radius" "999px"
                    , Html.Attributes.style "background" "rgba(244, 255, 246, 0.34)"
                    ]
                    []
                 , Html.div
                    [ Html.Attributes.style "font-size" "11px"
                    , Html.Attributes.style "font-weight" "800"
                    , Html.Attributes.style "letter-spacing" "0.14em"
                    , Html.Attributes.style "text-transform" "uppercase"
                    , Html.Attributes.style "color" "rgb(141, 255, 174)"
                    ]
                    [ Html.text "Move timer" ]
                 , Html.h3
                    [ Html.Attributes.style "margin" "8px 0 4px"
                    , Html.Attributes.style "font-size" "21px"
                    , Html.Attributes.style "color" "rgb(244, 255, 246)"
                    ]
                    [ Html.text "Choose turn duration" ]
                 , Html.p
                    [ Html.Attributes.style "margin" "0 0 14px"
                    , Html.Attributes.style "font-size" "13px"
                    , Html.Attributes.style "line-height" "1.45"
                    , Html.Attributes.style "color" "rgb(199, 220, 204)"
                    ]
                    [ Html.text "The timer applies when you create or start the next game." ]
                 , Html.div
                    [ Html.Attributes.style "display" "inline-flex"
                    , Html.Attributes.style "align-items" "center"
                    , Html.Attributes.style "gap" "8px"
                    , Html.Attributes.style "margin-bottom" "8px"
                    , Html.Attributes.style "padding" "7px 10px"
                    , Html.Attributes.style "border-radius" "999px"
                    , Html.Attributes.style "border" "1px solid rgba(141, 255, 174, 0.22)"
                    , Html.Attributes.style "background" "rgba(8, 24, 12, 0.42)"
                    , Html.Attributes.style "font-size" "12px"
                    , Html.Attributes.style "font-weight" "700"
                    , Html.Attributes.style "color" "rgb(218, 236, 222)"
                    ]
                    [ Html.text "Current"
                    , Html.span [ Html.Attributes.style "color" "rgb(23, 210, 230)" ] [ Html.text (moveTimerLabel config.current) ]
                    ]
                 ]
                    ++ List.map (viewSheetOption config) timerOptions
                    ++ [ Html.button
                            [ Html.Attributes.type_ "button"
                            , Html.Attributes.style "width" "100%"
                            , Html.Attributes.style "margin-top" "12px"
                            , Html.Attributes.style "padding" "14px 14px"
                            , Html.Attributes.style "border-radius" "18px"
                            , Html.Attributes.style "border" "1px solid rgba(141, 255, 174, 0.14)"
                            , Html.Attributes.style "background" "rgba(255,255,255,0.06)"
                            , Html.Attributes.style "color" "rgb(244, 255, 246)"
                            , Html.Attributes.style "font-size" "14px"
                            , Html.Attributes.style "font-weight" "700"
                            , Html.Events.onClick config.dismiss
                            ]
                            [ Html.text "Cancel" ]
                       ]
                )
            ]


viewSheetOption : SheetConfig msg -> Int -> Html msg
viewSheetOption config optionSeconds =
    let
        isSelected =
            config.current == optionSeconds

        borderColor =
            if isSelected then
                "rgba(23, 210, 230, 0.58)"

            else
                "rgba(255,255,255,0.10)"

        backgroundColor =
            if isSelected then
                "linear-gradient(135deg, rgba(39, 192, 80, 0.34), rgba(29, 160, 234, 0.34))"

            else
                "rgba(5, 26, 10, 0.66)"
    in
    Html.button
        [ Html.Attributes.type_ "button"
        , Html.Attributes.style "width" "100%"
        , Html.Attributes.style "display" "flex"
        , Html.Attributes.style "align-items" "center"
        , Html.Attributes.style "justify-content" "space-between"
        , Html.Attributes.style "gap" "12px"
        , Html.Attributes.style "margin-top" "10px"
        , Html.Attributes.style "padding" "16px 16px"
        , Html.Attributes.style "border-radius" "20px"
        , Html.Attributes.style "border" ("1px solid " ++ borderColor)
        , Html.Attributes.style "background" backgroundColor
        , Html.Attributes.style "color" "rgb(244, 255, 246)"
        , Html.Attributes.style "font-size" "15px"
        , Html.Attributes.style "font-weight" "800"
        , Html.Events.onClick (config.onSelect optionSeconds)
        ]
        [ Html.span [] [ Html.text (moveTimerLabel optionSeconds) ]
        , Html.span
            [ Html.Attributes.style "color"
                (if isSelected then
                    "rgb(23, 210, 230)"

                 else
                    "rgba(255,255,255,0.34)"
                )
            ]
            [ Html.text
                (if isSelected then
                    "Selected"

                 else
                    ""
                )
            ]
        ]
