module View.Rules exposing (viewOverlay)

import Element exposing (Element)
import Html exposing (Html)
import Html.Attributes
import View.Dialog as Dialog


viewOverlay : Dialog.Actions msg -> Bool -> Element msg
viewOverlay actions isMobile =
    Dialog.viewOverlay actions
        [ Dialog.viewHeader actions isMobile "How to play" "Game Rules"
        , Html.div [ Html.Attributes.class "dialog-body" ]
            [ Html.ul [ Html.Attributes.class "rules-list" ]
                (List.map ruleItem
                    [ "Draw one line segment per turn from the ball's current position to any adjacent grid point."
                    , "You may bounce off points that were already visited — but never cross or overlap an existing line."
                    , "Bouncing off the walls is also legal and often strategic."
                    , "The point in the middle of the gate line is a special bouncing point. It can be strategically used to change the direction of the ball or close the gate."
                    , "If you have no legal moves, you lose the round and your opponent scores."
                    , "Score by moving the ball into the opponent's goal gate."
                    , "If the move timer expires, the turn passes to the other player."
                    ]
                )
            , Html.p [ Html.Attributes.class "rules-note" ]
                [ Html.text "A variant of Paper Soccer (Paper Football). First player to reach the agreed score wins the match." ]
            ]
        ]


ruleItem : String -> Html msg
ruleItem text =
    Html.li [ Html.Attributes.class "rules-list-item" ]
        [ Html.span [ Html.Attributes.class "rules-bullet" ] []
        , Html.span [] [ Html.text text ]
        ]
