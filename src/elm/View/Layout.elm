module View.Layout exposing (MainTabsConfig, MobileAppConfig, viewMainTabs, viewMobileApp)

import Element exposing (Element, centerX, column, el, fill, padding, paddingXY, rgb255, rgba255, row, spacing, text, width)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html.Attributes


type alias MainTabsConfig msg =
    { setupActive : Bool
    , boardsActive : Bool
    , showSetup : msg
    , showBoards : msg
    }


viewMainTabs : MainTabsConfig msg -> Element msg
viewMainTabs config =
    row
        [ width fill
        , Bg.color (rgb255 14 44 22)
        , Border.width 1
        , Border.color (rgb255 72 106 82)
        , Border.rounded 28
        , padding 4
        , spacing 0
        ]
        [ gradientTabButton "Setup" config.setupActive config.showSetup
        , gradientTabButton "Boards" config.boardsActive config.showBoards
        ]


gradientTabButton : String -> Bool -> msg -> Element msg
gradientTabButton label active onPress =
    Input.button
        ([ width fill
         , paddingXY 0 11
         , Border.rounded 24
         , Font.bold
         , Font.size 15
         , Font.color
            (if active then
                rgb255 10 20 10

             else
                rgba255 255 255 255 140
            )
         ]
            ++ (if active then
                    [ Element.htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)") ]

                else
                    []
               )
        )
        { onPress = Just onPress, label = el [ centerX ] (text label) }


type alias MobileAppConfig msg =
    { showGame : Bool
    , header : Element msg
    , gameContent : Element msg
    , lobbyContent : Element msg
    , openGameStrip : Element msg
    }


viewMobileApp : MobileAppConfig msg -> Element msg
viewMobileApp config =
    column [ width fill ]
        [ config.header
        , if config.showGame then
            config.gameContent

          else
            column [ width fill, spacing 8 ]
                [ config.openGameStrip
                , config.lobbyContent
                ]
        ]
