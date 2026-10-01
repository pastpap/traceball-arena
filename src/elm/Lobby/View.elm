module Lobby.View exposing (OnlineLobbyConfig, viewInviteCard, viewOnlineLobbyContent)

import Element exposing (..)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes
import Html.Events


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
