module View.Header exposing (MobileActions, viewMobileGame, viewMobileLobby, viewMobileOpenGameStrip)

import Element exposing (Element, alignRight, centerX, centerY, el, fill, height, paddingXY, px, rgb255, rgba255, row, spacing, text, width)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes


type alias MobileActions msg =
    { toggleLobby : msg
    , openMenu : msg
    }


viewMobileGame : MobileActions msg -> Element msg
viewMobileGame actions =
    row
        [ width fill
        , centerY
        , paddingXY 10 8
        , spacing 8
        , Border.rounded 22
        , Border.width 1
        , Border.color (rgba255 115 176 132 60)
        , Bg.color (rgba255 1 22 8 240)
        , Font.color (rgb255 244 255 246)
        ]
        [ Input.button
            [ width (px 42)
            , height (px 42)
            , Border.rounded 16
            , Border.width 1
            , Border.color (rgb255 64 88 69)
            , Bg.color (rgb255 10 36 18)
            , Font.size 22
            , Font.color (rgb255 244 255 246)
            ]
            { onPress = Just actions.toggleLobby
            , label = el [ centerX, centerY, Font.color (rgb255 244 255 246), Element.htmlAttribute (Html.Attributes.attribute "aria-label" "Open lobby") ] (text "←")
            }
        , el [ width fill, centerX, Font.size 16, Font.bold, Font.color (rgb255 244 255 246) ] (text "Game")
        , Input.button
            [ width (px 42)
            , height (px 42)
            , Border.rounded 16
            , Border.width 1
            , Border.color (rgb255 64 88 69)
            , Bg.color (rgb255 10 36 18)
            , Font.size 20
            , Font.color (rgb255 244 255 246)
            ]
            { onPress = Just actions.openMenu
            , label = el [ centerX, centerY, Font.color (rgb255 244 255 246), Element.htmlAttribute (Html.Attributes.attribute "aria-label" "Open app menu") ] (text "☰")
            }
        ]


viewMobileLobby : MobileActions msg -> Element msg
viewMobileLobby actions =
    row
        [ width fill
        , centerY
        , paddingXY 10 8
        , spacing 10
        , Border.rounded 22
        , Border.width 1
        , Border.color (rgba255 115 176 132 60)
        , Bg.color (rgba255 1 22 8 240)
        ]
        [ row [ spacing 10, centerY ]
            [ Element.html <| Html.img [ Html.Attributes.class "hero-icon", Html.Attributes.src "/icon.svg", Html.Attributes.alt "" ] []
            , el [ Font.size 17, Font.bold, Font.color (rgb255 244 255 246) ] (text "Traceball Arena")
            ]
        , el [ alignRight ] <|
            Input.button
                [ width (px 42)
                , height (px 42)
                , Border.rounded 16
                , Border.width 1
                , Border.color (rgb255 64 88 69)
                , Bg.color (rgb255 10 36 18)
                , Font.size 20
                , Font.color (rgb255 244 255 246)
                ]
                { onPress = Just actions.openMenu
                , label = el [ centerX, centerY, Font.color (rgb255 244 255 246), Element.htmlAttribute (Html.Attributes.attribute "aria-label" "Open app menu") ] (text "☰")
                }
        ]


viewMobileOpenGameStrip : MobileActions msg -> Element msg
viewMobileOpenGameStrip actions =
    row
        [ width fill
        , spacing 10
        , centerY
        , paddingXY 12 10
        , Border.rounded 18
        , Border.width 1
        , Border.color (rgb255 72 106 82)
        , Bg.color (rgb255 14 44 22)
        ]
        [ el [ width fill, Font.size 13, Font.color (rgb255 210 230 212), Font.semiBold ] (text "Game in progress")
        , Input.button
            [ paddingXY 12 8
            , Border.rounded 14
            , Bg.color (rgb255 33 194 216)
            , Border.width 1
            , Border.color (rgb255 98 232 248)
            , Font.color (rgb255 6 22 10)
            , Font.bold
            , Font.size 13
            ]
            { onPress = Just actions.toggleLobby, label = text "Open Game" }
        ]
