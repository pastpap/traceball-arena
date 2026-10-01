module Boards.Summary exposing (BoardSummary, CreatedBoardInfo)


type alias BoardSummary =
    { roomId : String
    , state : String
    , occupiedCount : Int
    , activeCount : Int
    , vacantCount : Int
    , moveCount : Int
    , isOwner : Bool
    }


type alias CreatedBoardInfo =
    { roomId : String
    , url : String
    }
