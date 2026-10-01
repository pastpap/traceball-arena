module History.Types exposing (HistoryEntry)


type alias HistoryEntry =
    { mode : String
    , p1Name : String
    , p2Name : String
    , scoreP1 : Int
    , scoreP2 : Int
    , winner : Maybe String
    , moveCount : Int
    , playedAt : Int
    }
