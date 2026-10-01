module Lobby.View exposing (LobbyCardConfig, LocalLobbyConfig, OnlineLobbyConfig, viewInviteCard, viewLobbyCard, viewLocalLobbyContent, viewOnlineLobbyContent)

import Element exposing (..)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
import Html.Events
import Local.Types exposing (LocalGame)


type alias LobbyCardConfig msg =
    { localTabActive : Bool
    , onOnlineTab : msg
    , onLocalTab : msg
    , localContent : Element msg
    , onlineContent : Element msg
    }


viewLobbyCard : LobbyCardConfig msg -> Element msg
viewLobbyCard config =
    column
        [ width fill
        , Bg.color (rgb255 14 44 22)
        , Border.width 1
        , Border.color (rgb255 72 106 82)
        , Border.rounded 24
        , padding 20
        , spacing 16
        ]
        [ el [ Font.bold, Font.size 20 ]
            (text
                (if config.localTabActive then
                    "Local same-screen PvP"

                 else
                    "Online game"
                )
            )
        , paragraph [ width fill, Font.size 13, Font.color (rgba255 255 255 255 100), spacing 4 ]
            [ text
                (if config.localTabActive then
                    "Players face each other and play on this device. The pitch stays fixed for local play."

                 else
                    "Open a board as watcher, then choose an open seat when you are ready to play."
                )
            ]
        , row
            [ width fill
            , Bg.color (rgb255 14 44 22)
            , Border.width 1
            , Border.color (rgb255 72 106 82)
            , Border.rounded 28
            , padding 4
            , spacing 0
            ]
            [ gradientTabButton "Online" (not config.localTabActive) config.onOnlineTab
            , gradientTabButton "Local" config.localTabActive config.onLocalTab
            ]
        , if config.localTabActive then
            config.localContent

          else
            config.onlineContent
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
                    [ htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)") ]

                else
                    []
               )
        )
        { onPress = Just onPress, label = el [ centerX ] (text label) }


type alias OnlineLobbyConfig msg =
    { playerName : String
    , draftBoardCode : String
    , boardCode : String
    , inviteUrl : Maybe String
    , timerControl : Element msg
    , connectionStatus : String
    , error : Maybe String
    , onPlayerName : String -> msg
    , onBoardCode : String -> msg
    , onWatchBoard : msg
    , onCreateBoard : msg
    , onCopyBoardLink : String -> msg
    , onOpenCreatedBoard : msg
    }


viewOnlineLobbyContent : OnlineLobbyConfig msg -> Element msg
viewOnlineLobbyContent config =
    column [ width fill, spacing 14 ]
        [ column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Your name")
            , Input.text
                (formFieldAttrs ++ [ htmlAttribute (Html.Attributes.id "playerNameInput") ])
                { onChange = config.onPlayerName
                , text = config.playerName
                , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Your name"))
                , label = Input.labelHidden "Your name"
                }
            ]
        , case config.inviteUrl of
            Just inviteUrl ->
                viewInviteCard
                    { boardCode = config.boardCode
                    , inviteUrl = inviteUrl
                    , onCopyBoardLink = config.onCopyBoardLink
                    , onOpenCreatedBoard = config.onOpenCreatedBoard
                    }

            Nothing ->
                none
        , column
            (formSubpanelAttrs ++ [ spacing 10 ])
            [ el [ Font.size 13, Font.bold ] (text "Open board as watcher")
            , Input.text
                (formFieldAttrs ++ [ htmlAttribute (Html.Attributes.id "boardCodeInput") ])
                { onChange = config.onBoardCode
                , text = config.draftBoardCode
                , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Board code"))
                , label = Input.labelHidden "Board code"
                }
            , Input.button
                [ width fill
                , padding 15
                , Border.rounded 10
                , Font.bold
                , Font.size 15
                , Font.color (rgb255 8 18 8)
                , htmlAttribute (Html.Attributes.style "background" "#17d2e6")
                ]
                { onPress = Just config.onWatchBoard, label = el [ centerX ] (text "Watch board") }
            , Input.button
                [ width fill
                , padding 15
                , Border.rounded 10
                , Font.bold
                , Font.size 15
                , Font.color (rgb255 8 18 8)
                , htmlAttribute (Html.Attributes.style "background" "#11c2d8")
                , htmlAttribute (Html.Attributes.id "elmCreateBoard")
                ]
                { onPress = Just config.onCreateBoard, label = el [ centerX ] (text "Create board as Blue") }
            ]
        , column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Move timer")
            , el [ width fill ] config.timerControl
            ]
        , el [ Font.size 12, Font.color (rgba255 255 255 255 55) ]
            (text ("Connection: " ++ config.connectionStatus))
        , case config.error of
            Just e ->
                el [ Font.color (rgb255 255 100 80), Font.size 13 ] (text e)

            Nothing ->
                none
        ]


type alias InviteCardConfig msg =
    { boardCode : String
    , inviteUrl : String
    , onCopyBoardLink : String -> msg
    , onOpenCreatedBoard : msg
    }


viewInviteCard : InviteCardConfig msg -> Element msg
viewInviteCard config =
    html <|
        Html.section [ Html.Attributes.class "invite", Html.Attributes.id "inviteCard" ]
            [ Html.img
                [ Html.Attributes.src ("/api/qr?room=" ++ config.boardCode)
                , Html.Attributes.alt ("QR code for board " ++ config.boardCode)
                ]
                []
            , Html.div [ Html.Attributes.class "invite-copy-panel" ]
                [ Html.label [ Html.Attributes.for "inviteUrl" ] [ Html.text "Share this board" ]
                , Html.input
                    [ Html.Attributes.id "inviteUrl"
                    , Html.Attributes.type_ "text"
                    , Html.Attributes.readonly True
                    , Html.Attributes.value config.inviteUrl
                    ]
                    []
                , Html.div [ Html.Attributes.class "invite-actions" ]
                    [ Html.button
                        [ Html.Attributes.id "copyInviteCard"
                        , Html.Attributes.type_ "button"
                        , Html.Attributes.class "compact"
                        , Html.Events.onClick (config.onCopyBoardLink config.boardCode)
                        ]
                        [ Html.text "Copy link" ]
                    , Html.button
                        [ Html.Attributes.id "openCreatedBoard"
                        , Html.Attributes.type_ "button"
                        , Html.Attributes.class "compact primary"
                        , Html.Events.onClick config.onOpenCreatedBoard
                        ]
                        [ Html.text "Open game now" ]
                    ]
                ]
            ]


type alias LocalLobbyConfig msg =
    { localGame : Maybe LocalGame
    , viewportWidth : Int
    , localBlueName : String
    , localRedName : String
    , timerControl : Element msg
    , hasOnlineBoard : Bool
    , confirmLeaveOnlineForLocal : Bool
    , onResumeSavedGame : msg
    , onDiscardSavedGame : msg
    , onBlueName : String -> msg
    , onRedName : String -> msg
    , onStartLocalMatch : msg
    }


viewLocalLobbyContent : LocalLobbyConfig msg -> Element msg
viewLocalLobbyContent config =
    column [ width fill, spacing 14 ]
        [ case config.localGame of
            Just localGame ->
                viewPausedLocalGameCard config localGame

            Nothing ->
                none
        , Input.text
            formFieldAttrs
            { onChange = config.onBlueName
            , text = config.localBlueName
            , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Blue"))
            , label = Input.labelHidden "Blue"
            }
        , Input.text
            formFieldAttrs
            { onChange = config.onRedName
            , text = config.localRedName
            , placeholder = Just (Input.placeholder formPlaceholderAttrs (text "Red"))
            , label = Input.labelHidden "Red"
            }
        , column [ width fill, spacing 6 ]
            [ el [ Font.size 13, Font.bold ] (text "Move timer")
            , el [ width fill ] config.timerControl
            ]
        , if config.hasOnlineBoard then
            column
                [ width fill
                , spacing 6
                , Bg.color (rgba255 255 193 7 26)
                , Border.rounded 10
                , Border.width 1
                , Border.color (rgba255 255 193 7 120)
                , padding 12
                ]
                [ el [ Font.bold, Font.size 13, Font.color (rgb255 255 233 166) ]
                    (text "Starting local play leaves the current online board")
                , el [ Font.size 13, Font.color (rgb255 239 243 225) ]
                    (text
                        (if config.confirmLeaveOnlineForLocal then
                            "Press the button again to confirm. The online board will be disconnected and the URL will be cleared."

                         else
                            "Your online seat and board route stay active until local play starts."
                        )
                    )
                ]

          else
            none
        , Input.button
            [ width fill
            , padding 15
            , Border.rounded 10
            , Font.bold
            , Font.size 15
            , Font.color (rgb255 10 20 10)
            , htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)")
            ]
            { onPress = Just config.onStartLocalMatch
            , label =
                el [ centerX ]
                    (text
                        (if config.hasOnlineBoard && config.confirmLeaveOnlineForLocal then
                            "Leave online board and start local match"

                         else
                            "Start local match"
                        )
                    )
            }
        ]


viewPausedLocalGameCard : LocalLobbyConfig msg -> LocalGame -> Element msg
viewPausedLocalGameCard config localGame =
    if config.viewportWidth <= 640 then
        column
            [ width fill
            , Bg.color (rgb255 14 44 22)
            , Border.rounded 18
            , Border.width 1
            , Border.color (rgb255 72 106 82)
            , padding 14
            , spacing 12
            ]
            [ column [ width fill, spacing 4 ]
                [ el [ Font.bold, Font.size 15, Font.color (rgb255 244 255 246) ] (text "Paused local game")
                , el [ Font.size 13, Font.color (rgb255 199 220 204) ]
                    (text (localGame.blueName ++ " vs " ++ localGame.redName))
                ]
            , Input.button
                [ width fill
                , htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)")
                , Border.rounded 16
                , paddingXY 0 12
                , Font.bold
                , Font.size 14
                , Font.color (rgb255 10 20 10)
                ]
                { onPress = Just config.onResumeSavedGame, label = el [ centerX ] (text "Resume saved game") }
            , Input.button
                [ width fill
                , Bg.color (rgb255 56 70 57)
                , Border.rounded 16
                , paddingXY 0 12
                , Font.size 14
                , Font.color (rgb255 240 245 241)
                ]
                { onPress = Just config.onDiscardSavedGame, label = el [ centerX ] (text "Discard") }
            ]

    else
        row
            [ width fill
            , Bg.color (rgba255 0 0 0 28)
            , Border.rounded 10
            , padding 14
            , spacing 10
            ]
            [ column [ width fill, spacing 4 ]
                [ el [ Font.bold, Font.size 14 ] (text "Paused local game")
                , el [ Font.size 13, Font.color (rgba255 255 255 255 100) ]
                    (text (localGame.blueName ++ " vs " ++ localGame.redName))
                ]
            , column [ spacing 8, alignRight ]
                [ Input.button
                    [ htmlAttribute (Html.Attributes.style "background" "linear-gradient(135deg, #27c050 0%, #1da0ea 100%)")
                    , Border.rounded 20
                    , paddingXY 16 9
                    , Font.bold
                    , Font.size 13
                    , Font.color (rgb255 10 20 10)
                    ]
                    { onPress = Just config.onResumeSavedGame, label = text "Resume saved game" }
                , Input.button
                    [ Bg.color (rgba255 50 70 50 180)
                    , Border.rounded 20
                    , paddingXY 16 9
                    , Font.size 13
                    ]
                    { onPress = Just config.onDiscardSavedGame, label = text "Discard" }
                ]
            ]


formFieldAttrs : List (Attribute msg)
formFieldAttrs =
    [ width fill
    , Bg.color (rgba255 0 0 0 0.35)
    , Border.width 1
    , Border.color (rgba255 255 255 255 0.14)
    , Border.rounded 10
    , Font.color (rgb255 224 255 224)
    , paddingXY 14 12
    ]


formPlaceholderAttrs : List (Attribute msg)
formPlaceholderAttrs =
    [ Font.color (rgba255 255 255 255 0.35) ]


formSubpanelAttrs : List (Attribute msg)
formSubpanelAttrs =
    [ width fill
    , Bg.color (rgba255 0 0 0 0.18)
    , Border.rounded 12
    , padding 12
    ]
