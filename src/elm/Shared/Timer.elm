module Shared.Timer exposing (moveTimerLabel, normalizeMoveTimerSeconds, timerOptions)


timerOptions : List Int
timerOptions =
    [ 0, 5, 10, 15, 20, 30 ]


normalizeMoveTimerSeconds : Int -> Int
normalizeMoveTimerSeconds seconds =
    if List.member seconds timerOptions then
        seconds

    else
        15


moveTimerLabel : Int -> String
moveTimerLabel seconds =
    if seconds <= 0 then
        "Off"

    else
        String.fromInt seconds ++ " seconds"
