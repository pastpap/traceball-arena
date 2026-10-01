module Boards.View exposing (boardSummaryStateLabel, viewBoardCard, viewBoardListSection)

import Boards.Summary exposing (BoardSummary)
import Element exposing (..)
import Element.Background as Bg
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html.Attributes


type alias Actions msg =
    { onRefresh : msg
    , onCopy : String -> msg
    , onDelete : String -> msg
    }


viewBoardListSection : Actions msg -> List BoardSummary -> Element msg
viewBoardListSection actions boardList =
    column
        [ width fill
        , Bg.color (rgba255 0 0 0 0.25)
        , Border.rounded 12
        , padding 12
        , spacing 8
        ]
        [ row [ width fill ]
            [ el [ Font.bold, Font.size 14, Font.color (rgb255 140 200 140) ] (text "Live boards")
            , el [ alignRight ]
                (Input.button
                    [ width (px 48)
                    , height (px 48)
                    , Border.rounded 12
                    , Border.width 2
                    , Border.color (rgb255 110 180 255)
                    , Bg.color (rgba255 9 32 18 0.9)
                    , Font.color (rgb255 141 255 174)
                    , Font.size 24
                    , Font.bold
                    , padding 0
                    , htmlAttribute (Html.Attributes.id "refreshBoards")
                    ]
                    { onPress = Just actions.onRefresh
                    , label = el [ centerX, centerY ] (text "↻")
                    }
                )
            ]
        , if List.isEmpty boardList then
            el [ Font.size 13, Font.color (rgba255 255 255 255 0.5) ] (text "No live boards. Create one!")

          else
            column [ width fill, spacing 6 ]
                (List.map (viewBoardCard actions) boardList)
        ]


viewBoardCard : Actions msg -> BoardSummary -> Element msg
viewBoardCard actions board =
    row
        [ width fill
        , spacing 10
        , Bg.color (rgba255 255 255 255 0.06)
        , Border.rounded 8
        , padding 10
        , htmlAttribute (Html.Attributes.attribute "data-elm-board-card" board.roomId)
        ]
        [ link
            [ width fill
            , mouseOver [ Bg.color (rgba255 255 255 255 0.04) ]
            , Border.rounded 8
            , paddingXY 2 2
            ]
            { url = "/?board=" ++ board.roomId
            , label =
                column [ width fill, spacing 6 ]
                    [ row [ width fill, spacing 8 ]
                        [ el [ Font.bold, Font.size 14, width fill ] (text board.roomId)
                        , el [ Font.size 12, Font.color (rgba255 255 255 255 0.5), width shrink ]
                            (text (String.fromInt board.occupiedCount ++ "/2 seated"))
                        ]
                    , paragraph [ width fill, Font.size 12, Font.color (rgba255 255 255 255 0.68) ]
                        [ text (boardSummaryStateLabel board.state) ]
                    ]
            }
        , Input.button
            [ width (px 86)
            , height (px 44)
            , Border.rounded 14
            , Border.width 1
            , Border.color (rgb255 98 232 248)
            , Bg.color (rgba255 9 32 18 0.9)
            , Font.color (rgb255 141 255 174)
            , Font.size 14
            , Font.bold
            , padding 0
            ]
            { onPress = Just (actions.onCopy board.roomId)
            , label = el [ centerX, centerY ] (text "Copy")
            }
        , if board.isOwner then
            Input.button
                [ width (px 86)
                , height (px 44)
                , Border.rounded 14
                , Border.width 1
                , Border.color (rgb255 219 80 73)
                , Bg.color (rgba255 255 59 48 36)
                , Font.color (rgb255 255 211 208)
                , Font.size 14
                , Font.bold
                , padding 0
                ]
                { onPress = Just (actions.onDelete board.roomId)
                , label = el [ centerX, centerY ] (text "Delete")
                }

          else
            none
        ]


boardSummaryStateLabel : String -> String
boardSummaryStateLabel state =
    case state of
        "WaitingForPlayers" ->
            "Waiting for players"

        "OneSeatOccupied" ->
            "1 seat occupied"

        "InProgress" ->
            "Game in progress"

        "SessionPaused" ->
            "Game paused"

        "Complete" ->
            "Round complete"

        _ ->
            state
