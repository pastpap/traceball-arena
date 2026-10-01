module Shared.Validation exposing (isValidBoardCode, sanitizeBoardCode)


isValidBoardCode : String -> Bool
isValidBoardCode code =
    let
        n =
            String.length code
    in
    n >= 6 && n <= 32


sanitizeBoardCode : String -> String
sanitizeBoardCode raw =
    raw
        |> String.trim
        |> String.filter (\c -> Char.isAlphaNum c || c == '_' || c == '-')
        |> String.left 32
