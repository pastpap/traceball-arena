module Board.Types exposing
    ( Board
    , BoardState(..)
    , Move
    , Person
    , Point
    , Round
    , Score
    , Seat
    , SeatState(..)
    , Session
    , SessionState(..)
    )


type BoardState
    = WaitingForPlayers
    | OneSeatOccupied
    | SessionActive
    | SessionPaused
    | BetweenRounds
    | SessionEnded
    | BoardExpired
    | UnknownBoardState String


type SeatState
    = Vacant
    | Occupied
    | DisconnectedReserved
    | UnknownSeatState String


type SessionState
    = Active
    | Paused
    | BetweenRoundSession
    | Ended
    | UnknownSessionState String


type alias Point =
    { x : Int
    , y : Int
    }


type alias Move =
    { from : Point
    , to : Point
    , playerId : String
    , segment : String
    , bounce : Bool
    }


type alias Round =
    { state : String
    , turn : String
    , ball : Point
    , visited : List String
    , segments : List String
    , moves : List Move
    , legalMoves : List Point
    , deadlineAt : Maybe Int
    , winner : Maybe String
    , endReason : Maybe String
    }


type alias Person =
    { displayName : String
    , joinedAt : Maybe Int
    }


type alias Seat =
    { color : String
    , state : SeatState
    , player : Maybe Person
    , disconnectedAt : Maybe Int
    , canBeFreedAt : Maybe Int
    , canBeFreed : Bool
    }


type alias Score =
    { blue : Int
    , red : Int
    }


type alias Session =
    { id : Maybe String
    , state : SessionState
    , score : Score
    , turn : Maybe String
    , winner : Maybe String
    , endReason : Maybe String
    , moveCount : Int
    , round : Maybe Round
    , moveTimeLimitSeconds : Maybe Int
    }


type alias Board =
    { code : String
    , version : Int
    , state : BoardState
    , blue : Seat
    , red : Seat
    , currentSession : Maybe Session
    , watchers : List Person
    , waitingList : List Person
    , createdAt : Int
    , updatedAt : Int
    , expiresAt : Int
    }
