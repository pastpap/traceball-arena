module View.Header exposing (DesktopGameConfig, HeroStatus, viewDesktopGame, MobileActions, viewMobileGame, viewMobileLobby, viewMobileOpenGameStrip)

import Element exposing (Element, alignRight, centerX, centerY, el, fill, height, inFront, none, paddingXY, px, rgb255, rgba255, row, spacing, text, width)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Events
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


type alias HeroStatus =
    { boardCode : String
    , roleText : String
    , roleClass : String
    , turnText : String
    }


type alias DesktopGameConfig msg =
    { status : HeroStatus
    , roleContainerClass : String
    , toggleLobby : msg
    , openMenu : msg
    }


viewDesktopGame : DesktopGameConfig msg -> Element msg
viewDesktopGame config =
    el
        [ width fill
        , Element.htmlAttribute (Html.Attributes.class "hero")
        , inFront <|
            el [ centerX, centerY ] <|
                row
                    [ spacing 9
                    , centerX
                    , centerY
                    , Element.htmlAttribute (Html.Attributes.class "hero-game-status")
                    ]
                    [ el [ Element.htmlAttribute (Html.Attributes.class "hero-board-code"), Font.size 16, Font.color (rgb255 247 255 248), Font.bold ] (text config.status.boardCode)
                    , el [ Element.htmlAttribute (Html.Attributes.class config.roleContainerClass) ] <|
                        row [ spacing 6, centerY ] <|
                            (if String.isEmpty config.status.roleClass then
                                []

                             else
                                [ el [ Element.htmlAttribute (Html.Attributes.class ("hero-role-dot " ++ config.status.roleClass)) ] none ]
                            )
                                ++ [ el [ Font.size 13, Font.color (rgb255 240 248 244), Font.semiBold ] (text config.status.roleText) ]
                    , el [ Element.htmlAttribute (Html.Attributes.class "hero-turn-state"), Font.size 13, Font.color (rgb255 213 230 217), Font.semiBold ] (text config.status.turnText)
                    ]
        ]
    <|
        row [ width fill, centerY ]
            [ row [ spacing 9, centerY, Element.htmlAttribute (Html.Attributes.class "hero-brand") ]
                [ Element.html <| Html.img [ Html.Attributes.class "hero-icon", Html.Attributes.src "/icon.svg", Html.Attributes.alt "" ] []
                , el [ Element.htmlAttribute (Html.Attributes.class "hero-title"), Font.size 15, Font.color (rgb255 244 255 246), Font.bold ] (text "Traceball Arena")
                ]
            , row [ alignRight, spacing 7, centerY, Element.htmlAttribute (Html.Attributes.class "hero-actions") ]
                [ Input.button
                    [ Element.htmlAttribute (Html.Attributes.class "hero-lobby-btn"), Font.size 13, Font.color (rgb255 244 255 246), Font.semiBold ]
                    { onPress = Just config.toggleLobby, label = text "Lobby" }
                , Element.html <|
                    Html.button
                        [ Html.Attributes.type_ "button"
                        , Html.Attributes.class "app-menu-button"
                        , Html.Attributes.attribute "aria-label" "Open app menu"
                        , Html.Events.onClick config.openMenu
                        ]
                        [ Html.span [ Html.Attributes.attribute "aria-hidden" "true" ] [ Html.text "☰" ] ]
                ]
            ]
