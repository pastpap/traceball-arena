module Local.Types exposing (LocalGame, LocalMove, LocalPoint)


type alias LocalPoint =
    { x : Int, y : Int }


type alias LocalMove =
    { playerId : String
    , from : LocalPoint
    , to : LocalPoint
    , segment : String
    , bounce : Bool
    }


type alias LocalGame =
    { blueName : String
    , redName : String
    , turn : String
    , ball : LocalPoint
    , visited : List String
    , segments : List String
    , moves : List LocalMove
    , scoreBlue : Int
    , scoreRed : Int
    , winner : Maybe String
    , endReason : Maybe String
    , moveTimerSeconds : Int
    , turnStartedAtMs : Maybe Int
    , consecutiveTimeouts : Int
    }
