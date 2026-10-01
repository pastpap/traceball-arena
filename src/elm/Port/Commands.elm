module Port.Commands exposing
    ( copyBoardLinkCommand
    , deleteBoardCommand
    , fetchBoardListCommand
    , fetchGameHistoryCommand
    , pauseCommand
    , persistLocalRuntimeCommand
    , persistPlayerNameCommand
    , resumeCommand
    , updateUrlCommand
    , watchCommand
    )

import Json.Encode as Encode


fetchBoardListCommand : Encode.Value
fetchBoardListCommand =
    Encode.object [ ( "type", Encode.string "fetchBoardList" ) ]


fetchGameHistoryCommand : Encode.Value
fetchGameHistoryCommand =
    Encode.object [ ( "type", Encode.string "fetchGameHistory" ) ]


watchCommand : String -> String -> Encode.Value
watchCommand boardCode clientId =
    Encode.object
        [ ( "type", Encode.string "watch" )
        , ( "roomId", Encode.string boardCode )
        , ( "clientId", Encode.string clientId )
        ]


updateUrlCommand : String -> Encode.Value
updateUrlCommand url =
    Encode.object
        [ ( "type", Encode.string "updateUrl" )
        , ( "url", Encode.string url )
        ]


persistPlayerNameCommand : String -> Encode.Value
persistPlayerNameCommand name =
    Encode.object
        [ ( "type", Encode.string "persistPlayerName" )
        , ( "name", Encode.string name )
        ]


copyBoardLinkCommand : String -> Encode.Value
copyBoardLinkCommand roomId =
    Encode.object
        [ ( "type", Encode.string "copyBoardLink" )
        , ( "roomId", Encode.string roomId )
        ]


deleteBoardCommand : String -> Encode.Value
deleteBoardCommand roomId =
    Encode.object
        [ ( "type", Encode.string "deleteBoard" )
        , ( "roomId", Encode.string roomId )
        ]


pauseCommand : Encode.Value
pauseCommand =
    Encode.object [ ( "type", Encode.string "pause" ) ]


resumeCommand : Encode.Value
resumeCommand =
    Encode.object [ ( "type", Encode.string "resume" ) ]


persistLocalRuntimeCommand : (localGame -> Encode.Value) -> Maybe localGame -> Bool -> Encode.Value
persistLocalRuntimeCommand localGameEncoder localGame paused =
    Encode.object
        [ ( "type", Encode.string "persistLocalRuntime" )
        , ( "localGame"
          , case localGame of
                Just game ->
                    localGameEncoder game

                Nothing ->
                    Encode.null
          )
        , ( "localPaused", Encode.bool paused )
        ]
