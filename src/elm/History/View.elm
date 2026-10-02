module History.View exposing (OverlayConfig, relativeDateLabel, viewHistoryEntry, viewOverlay)

import Element exposing (Element)
import View.Dialog as Dialog
import History.Types exposing (HistoryEntry)
import Html exposing (Html)
import Html.Attributes
import Html.Events


type alias OverlayConfig msg =
    { dialogActions : Dialog.Actions msg
    , isMobile : Bool
    , nowMs : Int
    , entries : List HistoryEntry
    , onReplay : Int -> msg
    }


viewOverlay : OverlayConfig msg -> Element msg
viewOverlay config =
    Dialog.viewOverlay config.dialogActions
        [ Dialog.viewHeader config.dialogActions config.isMobile "Traceball Arena" "Game History"
        , Html.div [ Html.Attributes.class "dialog-body" ]
            [ if List.isEmpty config.entries then
                Html.div [ Html.Attributes.class "dialog-empty" ]
                    [ Html.div [ Html.Attributes.class "dialog-empty-icon" ] [ Html.text "📂" ]
                    , Html.div [ Html.Attributes.class "dialog-empty-text" ]
                        [ Html.text "No games yet. Finished games will appear here." ]
                    ]

              else
                Html.div [ Html.Attributes.class "history-list" ]
                    (List.indexedMap (viewHistoryEntry config.nowMs config.onReplay) (List.take 12 config.entries))
            ]
        ]


viewHistoryEntry : Int -> (Int -> msg) -> Int -> HistoryEntry -> Html msg
viewHistoryEntry nowMs onReplay index entry =
    let
        scoreLabel =
            String.fromInt entry.scoreP1 ++ "\u{202F}–\u{202F}" ++ String.fromInt entry.scoreP2

        winnerLabel =
            case entry.winner of
                Just "p1" ->
                    entry.p1Name ++ " won"

                Just "p2" ->
                    entry.p2Name ++ " won"

                _ ->
                    "No winner"
    in
    Html.div
        [ Html.Attributes.class "history-entry"
        , Html.Events.onClick (onReplay index)
        ]
        [ Html.div [ Html.Attributes.class "history-entry-main" ]
            [ Html.div [ Html.Attributes.class "history-entry-players" ]
                [ Html.text (entry.p1Name ++ " vs " ++ entry.p2Name) ]
            , Html.div [ Html.Attributes.class "history-entry-score" ]
                [ Html.text (scoreLabel ++ "\u{2002}·\u{2002}" ++ winnerLabel ++ "\u{2002}·\u{2002}" ++ String.fromInt entry.moveCount ++ " moves") ]
            ]
        , Html.div [ Html.Attributes.class "history-entry-side" ]
            [ Html.span [ Html.Attributes.class "history-badge" ] [ Html.text entry.mode ]
            , Html.span [ Html.Attributes.class "history-date" ] [ Html.text (relativeDateLabel nowMs entry.playedAt) ]
            , Html.span [ Html.Attributes.class "history-play-icon" ] [ Html.text "▶" ]
            ]
        ]


relativeDateLabel : Int -> Int -> String
relativeDateLabel nowMs playedAtMs =
    let
        diffMs =
            nowMs - playedAtMs

        diffHours =
            diffMs // (1000 * 60 * 60)

        diffDays =
            diffHours // 24
    in
    if diffMs <= 0 then
        "Just now"

    else if diffHours < 1 then
        "< 1 h ago"

    else if diffHours < 24 then
        String.fromInt diffHours ++ " h ago"

    else if diffDays == 1 then
        "Yesterday"

    else if diffDays < 7 then
        String.fromInt diffDays ++ " days ago"

    else
        let
            weeks =
                diffDays // 7
        in
        if weeks < 5 then
            String.fromInt weeks
                ++ (if weeks == 1 then
                        " week ago"

                    else
                        " weeks ago"
                   )

        else
            let
                months =
                    diffDays // 30
            in
            String.fromInt months
                ++ (if months == 1 then
                        " month ago"

                    else
                        " months ago"
                   )
