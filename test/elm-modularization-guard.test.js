import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const checkStaticSource = readFileSync("scripts/check-static.js", "utf8");
const mainSource = readFileSync("src/elm/Main.elm", "utf8");

describe("Elm modularization static guard", () => {
  it("protects Main.elm from growing while the modularization slices run", () => {
    expect(checkStaticSource).toContain("MAX_MAIN_ELM_LINES");
    expect(checkStaticSource).toContain("Main.elm has grown past");
  });

  it("protects Main.elm as the only Elm entrypoint exposing main", () => {
    expect(checkStaticSource).toContain("port module Main exposing (main)");
    expect(mainSource).toContain("port module Main exposing (main)");
  });

  it("records the planned modularization module roots in the static guard", () => {
    for (const root of [
      "App",
      "Port",
      "Page",
      "View",
      "Online",
      "Local",
      "History",
      "Boards",
      "Shared",
    ]) {
      expect(checkStaticSource).toContain(`src/elm/${root}`);
    }
  });

  it("extracts flag decoding into App.Flags while Main remains the only program entrypoint", () => {
    expect(existsSync("src/elm/App/Flags.elm")).toBe(true);

    const flagsSource = readFileSync("src/elm/App/Flags.elm", "utf8");
    expect(flagsSource).toContain("module App.Flags exposing");
    expect(flagsSource).toContain("decodeFlags");
    expect(flagsSource).toContain("defaultOnlineMoveTimer");
    expect(flagsSource).not.toContain("main : Program");
    expect(mainSource).toContain("import App.Flags as Flags");
    expect(mainSource).toContain("Flags.decodeFlags LocalCodec.localGameDecoder flags");
    expect(mainSource).not.toContain("flagsDecoder : Decode.Decoder Flags");
  });

  it("extracts shared validation, name, and timer helpers out of Main", () => {
    for (const [path, markers] of [
      ["src/elm/Shared/Validation.elm", ["module Shared.Validation exposing", "sanitizeBoardCode", "isValidBoardCode"]],
      ["src/elm/Shared/Names.elm", ["module Shared.Names exposing", "limitNameInput", "sanitizePlayerName"]],
      ["src/elm/Shared/Timer.elm", ["module Shared.Timer exposing", "normalizeMoveTimerSeconds", "timerOptions", "moveTimerLabel"]],
    ]) {
      expect(existsSync(path)).toBe(true);
      const source = readFileSync(path, "utf8");
      for (const marker of markers) {
        expect(source).toContain(marker);
      }
      expect(source).not.toContain("main : Program");
    }

    expect(mainSource).toContain("import Shared.Names exposing");
    expect(mainSource).toContain("import Shared.Timer exposing");
    expect(mainSource).toContain("import Shared.Validation exposing");
    expect(mainSource).not.toContain("sanitizeBoardCode : String -> String");
    expect(mainSource).not.toContain("sanitizePlayerName : String -> String");
    expect(mainSource).not.toContain("normalizeMoveTimerSeconds : Int -> Int");
  });

  it("extracts port command payload constructors without moving Elm ports out of Main", () => {
    expect(existsSync("src/elm/Port/Commands.elm")).toBe(true);

    const source = readFileSync("src/elm/Port/Commands.elm", "utf8");
    for (const marker of [
      "module Port.Commands exposing",
      "fetchBoardListCommand",
      "fetchGameHistoryCommand",
      "watchCommand",
      "updateUrlCommand",
      "persistPlayerNameCommand",
      "persistLocalRuntimeCommand",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).not.toMatch(/^port\s+/m);
    expect(source).not.toContain("Cmd ");
    expect(mainSource).toContain("import Port.Commands as Commands");
    expect(mainSource).toContain("outgoingClientCommand Commands.fetchBoardListCommand");
    expect(mainSource).toContain("Commands.watchCommand boardCode clientId");
    expect(mainSource).toContain("Commands.persistLocalRuntimeCommand LocalCodec.localGameEncoder localGame paused");
  });

  it("extracts local game type aliases before moving local behavior", () => {
    expect(existsSync("src/elm/Local/Types.elm")).toBe(true);

    const source = readFileSync("src/elm/Local/Types.elm", "utf8");
    for (const marker of [
      "module Local.Types exposing",
      "type alias LocalPoint",
      "type alias LocalMove",
      "type alias LocalGame",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).not.toContain("main : Program");
    expect(mainSource).toContain("import Local.Types exposing (LocalGame, LocalMove, LocalPoint)");
    expect(mainSource).not.toContain("type alias LocalGame =");
    expect(mainSource).not.toContain("type alias LocalMove =");
    expect(mainSource).not.toContain("type alias LocalPoint =");
  });

  it("extracts local game JSON codecs before moving local behavior", () => {
    expect(existsSync("src/elm/Local/Codec.elm")).toBe(true);

    const source = readFileSync("src/elm/Local/Codec.elm", "utf8");
    for (const marker of [
      "module Local.Codec exposing",
      "localGameDecoder",
      "localGameEncoder",
      "localMoveDecoder",
      "localMoveEncoder",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("import Local.Types exposing");
    expect(source).not.toContain("main : Program");
    expect(mainSource).toContain("import Local.Codec as LocalCodec");
    expect(mainSource).toContain("Flags.decodeFlags LocalCodec.localGameDecoder flags");
    expect(mainSource).toContain("Commands.persistLocalRuntimeCommand LocalCodec.localGameEncoder localGame paused");
    expect(mainSource).not.toContain("localGameEncoder : LocalGame -> Encode.Value");
    expect(mainSource).not.toContain("localGameDecoder : Decode.Decoder LocalGame");
    expect(mainSource).not.toContain("localMoveDecoderHelper : Decode.Decoder LocalMove");
  });

  it("extracts pure local game rules while leaving board conversion in Main", () => {
    expect(existsSync("src/elm/Local/Game.elm")).toBe(true);

    const source = readFileSync("src/elm/Local/Game.elm", "utf8");
    for (const marker of [
      "module Local.Game exposing",
      "startLocalGame",
      "computeLocalLegalMoves",
      "applyLocalMove",
      "restartLocalRound",
      "restartLocalTurnClock",
      "localTurnDeadlineAt",
      "expireLocalTurnIfNeeded",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("import Local.Types exposing");
    expect(source).not.toContain("Board.Types");
    expect(source).not.toContain("main : Program");
    expect(mainSource).toContain("import Local.Game as LocalGameLogic");
    expect(mainSource).toContain("LocalGameLogic.startLocalGame");
    expect(mainSource).toContain("LocalGameLogic.applyLocalMove");
    expect(mainSource).toContain("LocalGameLogic.computeLocalLegalMoves");
    expect(mainSource).not.toContain("startLocalGame : Int -> String -> String -> Int -> LocalGame");
    expect(mainSource).not.toContain("applyLocalMove : Int -> LocalGame -> LocalPoint -> Result String LocalGame");
    expect(mainSource).not.toContain("expireLocalTurnIfNeeded : Int -> LocalGame -> Maybe LocalGame");
  });

  it("extracts history entry types and decoders", () => {
    expect(existsSync("src/elm/History/Types.elm")).toBe(true);
    expect(existsSync("src/elm/History/Codec.elm")).toBe(true);

    const typesSource = readFileSync("src/elm/History/Types.elm", "utf8");
    expect(typesSource).toContain("module History.Types exposing");
    expect(typesSource).toContain("type alias HistoryEntry");
    expect(typesSource).not.toContain("main : Program");

    const codecSource = readFileSync("src/elm/History/Codec.elm", "utf8");
    for (const marker of [
      "module History.Codec exposing",
      "decodeHistoryEntries",
      "historyEntryDecoder",
      "historyLocalGameDecoder",
    ]) {
      expect(codecSource).toContain(marker);
    }
    expect(codecSource).toContain("import History.Types exposing");
    expect(codecSource).toContain("import Local.Codec as LocalCodec");
    expect(mainSource).toContain("import History.Codec as HistoryCodec");
    expect(mainSource).toContain("import History.Types exposing (HistoryEntry)");
    expect(mainSource).toContain("HistoryCodec.decodeHistoryEntries value");
    expect(mainSource).toContain("Decode.field \"game\" HistoryCodec.historyLocalGameDecoder");
    expect(mainSource).not.toContain("type alias HistoryEntry =");
    expect(mainSource).not.toContain("historyEntryDecoder : Decode.Decoder HistoryEntry");
    expect(mainSource).not.toContain("historyLocalGameDecoder : Decode.Decoder LocalGame");
  });

  it("extracts history list view helpers", () => {
    expect(existsSync("src/elm/History/View.elm")).toBe(true);

    const source = readFileSync("src/elm/History/View.elm", "utf8");
    for (const marker of [
      "module History.View exposing",
      "relativeDateLabel",
      "viewHistoryEntry",
      "HistoryEntry",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).not.toContain("main : Program");
    expect(mainSource).toContain("import History.View as HistoryView");
    expect(source).toContain("viewHistoryEntry : Int -> (Int -> msg) -> Int -> HistoryEntry -> Html msg");
    expect(mainSource).not.toContain("viewHistoryEntry : Int -> Int -> HistoryEntry -> Html Msg");
    expect(mainSource).not.toContain("relativeDateLabel : Int -> Int -> String");
  });

  it("extracts board summary types and decoders", () => {
    expect(existsSync("src/elm/Boards/Summary.elm")).toBe(true);
    expect(existsSync("src/elm/Boards/Decode.elm")).toBe(true);

    const summarySource = readFileSync("src/elm/Boards/Summary.elm", "utf8");
    expect(summarySource).toContain("module Boards.Summary exposing");
    expect(summarySource).toContain("type alias BoardSummary");
    expect(summarySource).toContain("type alias CreatedBoardInfo");

    const decodeSource = readFileSync("src/elm/Boards/Decode.elm", "utf8");
    for (const marker of [
      "module Boards.Decode exposing",
      "boardSummaryDecoder",
      "createdBoardInfoDecoder",
      "import Boards.Summary exposing",
    ]) {
      expect(decodeSource).toContain(marker);
    }
    expect(mainSource).toContain("import Boards.Decode as BoardsDecode");
    expect(mainSource).toContain("import Boards.Summary exposing (BoardSummary, CreatedBoardInfo)");
    expect(mainSource).toContain("BoardsDecode.boardSummaryDecoder");
    expect(mainSource).toContain("BoardsDecode.createdBoardInfoDecoder");
    expect(mainSource).not.toContain("type alias BoardSummary =");
    expect(mainSource).not.toContain("boardSummaryDecoder : Decode.Decoder BoardSummary");
    expect(mainSource).not.toContain("createdBoardInfoDecoder : Decode.Decoder CreatedBoardInfo");
  });

  it("extracts boards list and card views", () => {
    expect(existsSync("src/elm/Boards/View.elm")).toBe(true);

    const source = readFileSync("src/elm/Boards/View.elm", "utf8");
    for (const marker of [
      "module Boards.View exposing",
      "viewBoardListSection",
      "viewBoardCard",
      "boardSummaryStateLabel",
      "BoardSummary",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).not.toContain("main : Program");
    expect(mainSource).toContain("import Boards.View as BoardsView");
    expect(mainSource).toContain("BoardsView.viewBoardListSection");
    expect(mainSource).not.toContain("viewBoardListSection : Model -> Element Msg");
    expect(mainSource).not.toContain("viewBoardCard : BoardSummary -> Element Msg");
    expect(mainSource).not.toContain("boardSummaryStateLabel : String -> String");
  });

  it("extracts online lobby views", () => {
    expect(existsSync("src/elm/Lobby/View.elm")).toBe(true);

    const source = readFileSync("src/elm/Lobby/View.elm", "utf8");
    for (const marker of [
      "module Lobby.View exposing",
      "viewOnlineLobbyContent",
      "viewInviteCard",
      "OnlineLobbyConfig",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).not.toContain("main : Program");
    expect(mainSource).toContain("import Lobby.View as LobbyView");
    expect(mainSource).toContain("LobbyView.viewOnlineLobbyContent");
    expect(mainSource).not.toContain("viewOnlineLobbyContent : Model -> Element Msg");
    expect(mainSource).not.toContain("viewInviteCard : String -> String -> Element Msg");
  });

  it("extracts local lobby setup views", () => {
    expect(existsSync("src/elm/Lobby/View.elm")).toBe(true);

    const source = readFileSync("src/elm/Lobby/View.elm", "utf8");
    for (const marker of [
      "viewLocalLobbyContent",
      "LocalLobbyConfig",
      "Paused local game",
      "Start local match",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("import Local.Types exposing (LocalGame)");
    expect(mainSource).toContain("LobbyView.viewLocalLobbyContent");
    expect(mainSource).not.toContain("viewLocalLobbyContent : Model -> Element Msg");
  });

  it("extracts lobby card and online/local tab shell", () => {
    expect(existsSync("src/elm/Lobby/View.elm")).toBe(true);

    const source = readFileSync("src/elm/Lobby/View.elm", "utf8");
    for (const marker of [
      "viewLobbyCard",
      "LobbyCardConfig",
      "Local same-screen PvP",
      "Online game",
      "gradientTabButton",
    ]) {
      expect(source).toContain(marker);
    }
    expect(mainSource).toContain("LobbyView.viewLobbyCard");
    expect(mainSource).not.toContain("viewLobbyCard : Model -> Element Msg");
  });

  it("extracts game screen config types", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "module Game.Screen exposing",
      "type alias PauseOverlayConfig",
      "type alias BoardScreenConfig",
      "import Board.Types exposing (Board",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).not.toContain("main : Program");
    expect(mainSource).toContain("import Game.Screen as Screen exposing (BoardScreenConfig, PauseOverlayConfig)");
    expect(mainSource).not.toContain("type alias PauseOverlayConfig =");
    expect(mainSource).not.toContain("type alias BoardScreenConfig =");
  });

  it("extracts pause overlay and panel views", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewPauseOverlayHtml",
      "viewPausePanelHtml",
      "pause-overlay",
      "pause-card pause-panel",
      "onClickAttributes",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("import Html exposing (Html)");
    expect(source).toContain("viewPauseOverlayHtml");
    expect(source).toContain("viewPausePanelHtml");
    expect(mainSource).not.toContain("viewPauseOverlayHtml : PauseOverlayConfig Msg -> Html Msg");
    expect(mainSource).not.toContain("viewPausePanelHtml : PauseOverlayConfig Msg -> Html Msg");
  });

  it("extracts winner overlay and game action button views", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewWinnerOverlayHtml",
      "viewGhostButtonHtml",
      "viewSquareIconButtonHtml",
      "viewShareIconButtonHtml",
      "shareIconSvg",
      "winner-overlay",
      "winner-new-round",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("import Svg");
    expect(source).toContain("viewWinnerOverlayHtml");
    expect(source).toContain("viewGhostButtonHtml");
    expect(source).toContain("viewSquareIconButtonHtml");
    expect(source).toContain("viewShareIconButtonHtml");
    expect(mainSource).not.toContain("viewWinnerOverlayHtml : Bool -> String -> Maybe Msg -> Html Msg");
    expect(mainSource).not.toContain("viewGhostButtonHtml : String -> Bool -> Maybe Msg -> String -> Html Msg");
    expect(mainSource).not.toContain("viewSquareIconButtonHtml : String -> Maybe Msg -> String -> String -> Html Msg");
    expect(mainSource).not.toContain("viewShareIconButtonHtml : String -> Maybe Msg -> String -> Html Msg");
  });

  it("extracts mobile game action controls", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewMobileActionButton",
      "viewMobileJoinSeatButton",
      "viewMobilePrimaryActionButton",
      "viewShareMobileButton",
      "Join ",
      "data-elm-command",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("import Element exposing");
    expect(source).toContain("import Element.Input as Input");
    expect(source).toContain("viewMobileActionButton");
    expect(source).toContain("viewMobileJoinSeatButton");
    expect(source).toContain("viewMobilePrimaryActionButton");
    expect(source).toContain("viewShareMobileButton");
    expect(mainSource).not.toContain("viewMobileActionButton : Bool -> Msg -> String -> String -> Element Msg");
    expect(mainSource).not.toContain("viewMobileJoinSeatButton : String -> Msg -> Element Msg");
    expect(mainSource).not.toContain("viewMobilePrimaryActionButton : Msg -> String -> String -> Element Msg");
    expect(mainSource).not.toContain("viewShareMobileButton : Msg -> Element Msg");
  });

  it("extracts replay and round summary html helpers", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "type alias ReplayActions msg",
      "viewReplayHtml",
      "viewReplayButton",
      "viewRoundSummaryHtml",
      "replay-progress-fill",
      "elm-round-result",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("viewReplayHtml");
    expect(source).toContain("viewRoundSummaryHtml");
    expect(mainSource).not.toContain("viewReplayHtml : Maybe Int -> Int -> Html Msg");
    expect(mainSource).not.toContain("viewReplayButton : Bool -> Maybe Msg -> String -> String -> Html Msg");
    expect(mainSource).not.toContain("viewRoundSummaryHtml : String -> Int -> Int -> Maybe Msg -> Html Msg");
  });

  it("extracts mobile game HUD and replay card helpers", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "mobileCard",
      "viewMobileTimerChip",
      "viewMobileScorePill",
      "viewMobileReplayCard",
      "viewMobileReplayButton",
      "viewMobileEllipsisText",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("mobileCard");
    expect(source).toContain("viewMobileTimerChip");
    expect(source).toContain("viewMobileScorePill");
    expect(source).toContain("viewMobileReplayCard");
    expect(mainSource).not.toContain("viewMobileTimerChip : Maybe Int -> Maybe Int -> Element Msg");
    expect(mainSource).not.toContain("viewMobileScorePill : String -> String -> Int -> Element Msg");
    expect(mainSource).not.toContain("viewMobileReplayCard : Maybe Int -> Int -> Element Msg");
    expect(mainSource).not.toContain("mobileCard : List (Element Msg) -> Element Msg");
  });

  it("extracts desktop game HUD helpers", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewTimerPillHtml",
      "viewBoardBadgeHtml",
      "viewBoardTurnChipHtml",
      "viewBoardTurnClockSlotHtml",
      "elm-timer-display",
      "elm-board-badge",
      "elm-board-turn-chip",
      "elm-board-turn-clock",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("viewTimerPillHtml");
    expect(source).toContain("viewBoardBadgeHtml");
    expect(source).toContain("viewBoardTurnWidgetsHtml");
    expect(mainSource).not.toContain("viewTimerPillHtml : Maybe Int -> Maybe Int -> Html Msg");
    expect(mainSource).not.toContain("viewBoardBadgeHtml : String -> String -> String -> Int -> Html Msg");
    expect(mainSource).not.toContain("viewBoardTurnChipHtml : Bool -> Bool -> Int -> Html Msg");
    expect(mainSource).not.toContain("viewBoardTurnClockSlotHtml : String -> Bool -> Int -> Bool -> Bool -> Html Msg");
  });

  it("extracts board turn widget composition", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "type alias BoardTurnWidgetData",
      "boardTurnWidgetData",
      "viewBoardTurnWidgetsHtml",
      "elm-board-turn-overlay",
      "turn-blue",
      "clockSeconds",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("viewBoardTurnWidgetsHtml");
    expect(mainSource).not.toContain("type alias BoardTurnWidgetData");
    expect(mainSource).not.toContain("viewBoardTurnWidgetsHtml : BoardScreenConfig Msg -> Html Msg");
    expect(mainSource).not.toContain("boardTurnWidgetData : BoardScreenConfig Msg -> Maybe BoardTurnWidgetData");
  });

  it("extracts the mobile top-card shell", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewMobileTopCard",
      "ROUND COMPLETE",
      "statusBanner",
      "viewMobileScorePill",
      "viewMobileJoinSeatButton",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("viewMobileTopCard");
    expect(mainSource).not.toContain("viewMobileTopCard : BoardScreenConfig Msg -> String -> String -> String -> Int -> Int -> Element Msg");
    expect(mainSource).not.toContain("ROUND COMPLETE");
  });

  it("extracts the desktop match side panel", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewDesktopMatchPanelHtml",
      "elm-match-panel",
      "score-strip",
      "elm-match-actions",
      "seat-actions",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("viewDesktopMatchPanelHtml");
    expect(mainSource).not.toContain("Html.Attributes.class \"card scoreboard elm-match-panel\"");
    expect(mainSource).not.toContain("Html.Attributes.class \"players score-strip\"");
  });

  it("extracts the board stage shell", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewBoardStageHtml",
      "board-stage",
      "mobile-hero-board",
      "board-stage-flipped",
      "viewWinnerOverlayHtml",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toContain("viewBoardStageHtml");
    expect(mainSource).not.toContain("viewBoardStageHtml : Bool -> BoardScreenConfig Msg -> String -> String -> Int -> Int -> Maybe String -> Html Msg");
    expect(mainSource).not.toContain("Html.Attributes.classList\n            [ ( \"board-stage\", True )");
  });

  it("extracts the desktop board screen shell", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewDesktopBoardScreenHtml",
      "game-layout",
      "board-card mobile-page active",
      "viewDesktopMatchPanelHtml",
      "viewReplayHtml",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toMatch(/^viewDesktopBoardScreenHtml :/m);
    expect(mainSource).not.toContain("Html.section [ Html.Attributes.class \"game-layout\" ]");
    expect(mainSource).not.toContain("Html.Attributes.class \"board-card mobile-page active\"");
  });

  it("shares the named render contract with match panels", () => {
    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const [name, next, result, extra] of [["viewDesktopMatchPanelHtml", "viewMobileActionButton", "Html", "winnerName"], ["viewMobileTopCard", "viewMobileReplayCard", "Element", "statusBanner"]]) {
      expect(source).toContain(`${name} : BoardScreenConfig msg -> BoardScreenRenderConfig msg -> ${result} msg`);
      const body = source.slice(source.indexOf(`${name} :`), source.indexOf(`${next} :`));
      for (const field of ["joinBlueAction", "joinRedAction", "blueName", "redName", "blueScore", "redScore", extra]) {
        expect(body).toContain(`render.${field}`);
      }
      expect(source).toContain(`${name} config render`);
    }
    expect(source).toContain("config.showSeatActions && (config.showJoinBlue || config.showJoinRed)");
    expect(source).toContain("if config.newRoundAction /= Nothing then");
  });

  it("uses the shared render contract for board stage chrome", () => {
    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    expect(source).toContain("viewBoardStageHtml : (String -> String) -> Bool -> BoardScreenConfig msg -> BoardScreenRenderConfig msg -> Html msg");
    const stage = source.slice(source.indexOf("viewBoardStageHtml :"), source.indexOf("viewMobileBoardScreen :"));
    for (const field of ["boardView", "blueName", "redName", "blueScore", "redScore", "winnerName", "onDismissWinner"]) {
      expect(stage).toContain(`render.${field}`);
    }
    expect(stage).toContain("showWinnerOverlay && config.showWinnerOverlay");
    expect(stage).toContain("case config.pauseOverlay of");
    expect(source.match(/viewBoardStageHtml\n\s+normalizeSeatId\n\s+True\n\s+config\n\s+render/g)).toHaveLength(2);
  });

  it("shares the named render contract across desktop and mobile shells", () => {
    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const [name, result] of [["viewDesktopBoardScreenHtml", "Html"], ["viewMobileBoardScreen", "Element"]]) {
      expect(source).toContain(`${name} : (String -> String) -> BoardScreenConfig msg -> BoardScreenRenderConfig msg -> ${result} msg`);
      expect(source).toContain(`${name} normalizeSeatId config render`);
      const body = source.slice(source.indexOf(`${name} :`)).split(/\n\n(?=[a-zA-Z])/)[0];
      expect(body).toContain("viewBoardStageHtml");
      expect(body).toContain(`${name === "viewDesktopBoardScreenHtml" ? "viewDesktopMatchPanelHtml" : "viewMobileTopCard"} config render`);
      for (const field of ["replayActions"]) {
        expect(body).toContain(`render.${field}`);
      }
    }
  });

  it("uses a named generic contract for responsive screen rendering", () => {
    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    expect(source).toContain("type alias BoardScreenRenderConfig msg =");
    expect(source).toContain("viewBoardScreenHtml : (String -> String) -> BoardScreenConfig msg -> BoardScreenRenderConfig msg -> Html msg");
    for (const field of ["replayActions", "boardView", "joinBlueAction", "joinRedAction", "blueName", "redName", "blueScore", "redScore", "winnerName", "statusBanner", "onDismissWinner"]) {
      expect(source).toMatch(new RegExp(field + " :"));
      expect(mainSource).toMatch(new RegExp(field + " ="));
    }
    expect(source).not.toMatch(/^import Main/m);
  });

  it("consolidates the responsive board screen wrapper", () => {
    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    expect(source).toMatch(/^viewBoardScreenHtml :/m);
    expect(source).toContain("if config.isCompactLayout then");
    expect(source).toContain("Element.layout [ width fill ]");
    expect(mainSource).toContain("Screen.viewBoardScreenHtml");
    expect(mainSource).not.toMatch(/^viewDesktopBoardScreenHtml :/m);
    const root = mainSource.slice(mainSource.indexOf("viewBoardScreenHtml :"), mainSource.indexOf("viewToast :"));
    expect(root.match(/session =/g)).toHaveLength(1);
    expect(root.match(/viewBoard ClickLegalMove/g)).toHaveLength(1);
  });

  it("extracts the mobile board screen shell", () => {
    expect(existsSync("src/elm/Game/Screen.elm")).toBe(true);

    const source = readFileSync("src/elm/Game/Screen.elm", "utf8");
    for (const marker of [
      "viewMobileBoardScreen",
      "viewMobileTopCard",
      "viewBoardStageHtml",
      "viewMobileReplayCard",
      "statusBanner",
    ]) {
      expect(source).toContain(marker);
    }
    expect(source).toMatch(/^viewMobileBoardScreen :/m);
    expect(mainSource).not.toContain("column [ width fill, spacing 12 ]");
    expect(mainSource).not.toContain("viewMobileBoardScreen : BoardScreenConfig Msg -> Element Msg");
  });
  it("extracts generic dialog frame while preserving dismissal and navigation", () => {
    expect(existsSync("src/elm/View/Dialog.elm")).toBe(true);
    const dialog = readFileSync("src/elm/View/Dialog.elm", "utf8");
    expect(dialog).toContain("viewOverlay : Actions msg -> List (Html msg) -> Element msg");
    expect(dialog).toContain("viewHeader : Actions msg -> Bool -> String -> String -> Html msg");
    expect(dialog).toContain('Html.Events.onClick actions.dismiss');
    expect(dialog).toContain('Decode.succeed ( actions.ignoreClick, True )');
    expect(dialog).toContain('Html.Events.onClick actions.backToMenu');
    expect(dialog).toContain('if isMobile then');
    for (const marker of ['dialog-overlay', 'dialog-card', 'dialog-back', 'dialog-close', '← Menu', '×']) {
      expect(dialog).toContain(marker);
    }
    expect(dialog).not.toMatch(/import Main|\bCloseAppMenu\b|\bIgnoreSheetClick\b|\bOpenAppMenu\b/);
    expect(mainSource).not.toMatch(/^viewDialogOverlay\s*:|^dialogHeader\s*:/m);
    const history = readFileSync('src/elm/History/View.elm', 'utf8');
    expect(history).toContain('Dialog.viewOverlay config.dialogActions');
    expect(history).toContain('Dialog.viewHeader config.dialogActions config.isMobile');
    expect(mainSource).toContain('dismiss = CloseAppMenu');
    expect(mainSource).toContain('ignoreClick = IgnoreSheetClick');
    expect(mainSource).toContain('backToMenu = OpenAppMenu');
  });

  it("extracts generic desktop and mobile menu shells", () => {
    expect(existsSync("src/elm/View/Menu.elm")).toBe(true);
    const menu = readFileSync("src/elm/View/Menu.elm", "utf8");
    expect(menu).toContain("viewDesktop : Actions msg -> Element msg");
    expect(menu).toContain("viewMobile : Actions msg -> Element msg");
    for (const shell of ["viewDesktop", "viewMobile"]) {
      const body = menu.split(`${shell} actions =`)[1].split(/\n\n[a-zA-Z]+ :/)[0];
      expect(body).toContain("Html.Events.onClick actions.dismiss");
      expect(body).toContain("Decode.succeed ( actions.ignoreClick, True )");
      expect(body).toContain('popupMenuItem "clock_history" "Game History" actions.showHistory');
      expect(body).toContain('popupMenuItem "menu_book" "Game Rules" actions.showRules');
    }
    for (const marker of ['popup-menu', 'sheet-overlay', 'sheet-card', 'sheet-close-btn', '🕓', '📖']) {
      expect(menu).toContain(marker);
    }
    expect(menu).not.toMatch(/import Main|\bMsg\b|\bCloseAppMenu\b|\bShowHistoryPanel\b|\bShowRulesPanel\b/);
    expect(mainSource).not.toMatch(/^(viewDesktopMenuDropdown|viewMobileMenuSheet|popupMenuItem|menuIcon)\s*:/m);
    expect(mainSource).toContain("Menu.viewDesktop menuActions");
    expect(mainSource).toContain("Menu.viewMobile menuActions");
    expect(mainSource).toContain("showHistory = ShowHistoryPanel");
    expect(mainSource).toContain("showRules = ShowRulesPanel");
    expect(mainSource).toContain("model.viewportWidth <= 640");
  });

  it("extracts rules content without changing its copy or dialog actions", () => {
    expect(existsSync("src/elm/View/Rules.elm")).toBe(true);
    const rules = readFileSync("src/elm/View/Rules.elm", "utf8");
    expect(rules).toContain("viewOverlay : Dialog.Actions msg -> Bool -> Element msg");
    expect(rules).toContain("Dialog.viewOverlay actions");
    expect(rules).toContain('Dialog.viewHeader actions isMobile "How to play" "Game Rules"');
    expect(rules).toContain("ruleItem : String -> Html msg");
    expect(rules).not.toMatch(/import Main|\bMsg\b|\bCloseAppMenu\b/);
    expect(mainSource).not.toMatch(/^(viewRulesOverlay|ruleItem)\s*:/m);
    expect(mainSource).toContain("Rules.viewOverlay dialogActions isMobile");
    const originalStrings = ["\"How to play\"", "\"Game Rules\"", "\"dialog-body\"", "\"rules-list\"", "\"Draw one line segment per turn from the ball's current position to any adjacent grid point.\"", "\"You may bounce off points that were already visited — but never cross or overlap an existing line.\"", "\"Bouncing off the walls is also legal and often strategic.\"", "\"The point in the middle of the gate line is a special bouncing point. It can be strategically used to change the direction of the ball or close the gate.\"", "\"If you have no legal moves, you lose the round and your opponent scores.\"", "\"Score by moving the ball into the opponent's goal gate.\"", "\"If the move timer expires, the turn passes to the other player.\"", "\"rules-note\"", "\"A variant of Paper Soccer (Paper Football). First player to reach the agreed score wins the match.\"", "\"rules-list-item\"", "\"rules-bullet\""];
    expect(rules.match(/"(?:[^"\\]|\\.)*"/g)).toEqual(originalStrings);
  });

  it("extracts history overlay with unchanged ordering and replay index wiring", () => {
    const history = readFileSync("src/elm/History/View.elm", "utf8");
    expect(history).toContain("type alias OverlayConfig msg");
    expect(history).toContain("viewOverlay : OverlayConfig msg -> Element msg");
    const overlay = history.split("viewOverlay config =")[1].split(/\n\n[a-zA-Z]+ :/)[0];
    expect(overlay).toContain("Dialog.viewOverlay config.dialogActions");
    expect(overlay).toContain('Dialog.viewHeader config.dialogActions config.isMobile "Traceball Arena" "Game History"');
    expect(overlay).toContain("List.isEmpty config.entries");
    expect(overlay).toContain("List.indexedMap (viewHistoryEntry config.nowMs config.onReplay) (List.take 12 config.entries)");
    expect(overlay).toContain("No games yet. Finished games will appear here.");
    expect(history).toContain("onReplay : Int -> msg");
    expect(history).not.toMatch(/import Main|\bOpenHistoryReplay\b|\bMsg\b/);
    expect(mainSource).not.toMatch(/^viewHistoryOverlay\s*:/m);
    expect(mainSource).toContain("HistoryView.viewOverlay");
    expect(mainSource).toContain("entries = model.gameHistory");
    expect(mainSource).toContain("nowMs = model.currentTimeMs");
    expect(mainSource).toContain("onReplay = OpenHistoryReplay");
    expect(mainSource).toContain("viewHistoryReplayHtml : Model -> LocalGame -> Html Msg");
  });

  it("extracts timer control and native select without moving target semantics", () => {
    expect(existsSync("src/elm/View/Timer.elm")).toBe(true);
    const timer = readFileSync("src/elm/View/Timer.elm", "utf8");
    expect(timer).toContain("viewControl : ControlConfig msg -> Element msg");
    expect(timer).toContain("viewSelect : ControlConfig msg -> Element msg");
    expect(timer).toContain("import Shared.Timer exposing (moveTimerLabel, timerOptions)");
    expect(timer).toContain("if config.isMobile then");
    expect(timer).toContain("onPress = Just config.openSheet");
    expect(timer).toContain("config.fieldAttrs");
    expect(timer).toContain("Html.Attributes.id config.selectId");
    expect(timer).toContain("Html.Events.onInput config.onInput");
    expect(timer).toContain("Html.Attributes.selected (s == config.current)");
    expect(timer).toContain("Html.Attributes.value (String.fromInt s)");
    expect(timer).toContain('"Off"');
    expect(timer).toContain('" seconds"');
    expect(timer).not.toMatch(/import Main|\bTimerTarget\b|\bMsg\b|\bOpenTimerSheet\b/);
    expect(mainSource).not.toMatch(/^viewTimerSelect\s*:/m);
    expect(mainSource).toContain("Timer.viewControl");
    expect(mainSource).toContain("openSheet = OpenTimerSheet target");
    expect(mainSource).toContain("onInput = timerUpdateMsg target");
    expect(mainSource).toContain("selectId = timerSelectId target");
    expect(mainSource).toContain("fieldAttrs = formFieldAttrs");
    expect(mainSource).toContain("timerSelectMsg : TimerTarget -> Int -> Msg");
  });

  it("extracts timer sheet with selection and dismissal wiring intact", () => {
    const timer = readFileSync("src/elm/View/Timer.elm", "utf8");
    expect(timer).toContain("viewBottomSheet : SheetConfig msg -> Element msg");
    expect(timer).toContain("viewSheetOption : SheetConfig msg -> Int -> Html msg");
    const sheet = timer.split("viewBottomSheet config =")[1].split("viewSheetOption :")[0];
    expect(sheet.match(/Html.Events.onClick config.dismiss/g)).toHaveLength(2);
    expect(sheet).toContain("Decode.succeed ( config.ignoreClick, True )");
    expect(sheet).toContain("List.map (viewSheetOption config) timerOptions");
    expect(sheet).toContain("moveTimerLabel config.current");
    expect(sheet).toContain('"Cancel"');
    expect(sheet).toContain("safe-area-inset-bottom");
    expect(timer).toContain("config.current == optionSeconds");
    expect(timer).toContain("Html.Events.onClick (config.onSelect optionSeconds)");
    expect(timer).toContain("onSelect : Int -> msg");
    expect(mainSource).not.toMatch(/^(viewTimerBottomSheet|viewTimerSheetOption)\s*:/m);
    expect(mainSource).toContain("Timer.viewBottomSheet");
    expect(mainSource).toContain("current = timerValueFor target model");
    expect(mainSource).toContain("onSelect = timerSelectMsg target");
    expect(mainSource).toContain("dismiss = CloseTimerSheet");
    expect(mainSource).toContain("ignoreClick = IgnoreSheetClick");
  });

});
