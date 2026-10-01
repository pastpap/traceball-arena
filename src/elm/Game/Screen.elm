module Game.Screen exposing (BoardScreenConfig, PauseOverlayConfig)

import Board.Types exposing (Board)


type alias PauseOverlayConfig msg =
    { title : String
    , message : String
    , turnText : String
    , resumeAction : Maybe msg
    }


type alias BoardScreenConfig msg =
    { board : Board
    , ownSeat : Maybe String
    , boardFlipped : Bool
    , turnHopSerial : Int
    , replayIndex : Maybe Int
    , isCompactLayout : Bool
    , showWinnerOverlay : Bool
    , timerSecs : Maybe Int
    , timerRemainingSecs : Maybe Int
    , statusText : String
    , turnIndicatorText : String
    , turnIndicatorIsRed : Bool
    , matchSubtitle : String
    , moveCount : Int
    , isPaused : Bool
    , showJoinBlue : Bool
    , showJoinRed : Bool
    , showSeatActions : Bool
    , shareAction : Maybe msg
    , leaveAction : Maybe msg
    , pauseAction : Maybe msg
    , newRoundAction : Maybe msg
    , pauseOverlay : Maybe (PauseOverlayConfig msg)
    }
