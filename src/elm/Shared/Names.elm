module Shared.Names exposing (limitNameInput, normalizeWhitespaceName, sanitizePlayerName)


limitNameInput : String -> String
limitNameInput raw =
    String.left 24 raw


normalizeWhitespaceName : String -> String
normalizeWhitespaceName raw =
    raw
        |> String.trim
        |> String.words
        |> String.join " "
        |> String.left 24


sanitizePlayerName : String -> String
sanitizePlayerName raw =
    let
        normalized =
            normalizeWhitespaceName raw
    in
    if String.isEmpty normalized then
        "Player"

    else
        normalized
