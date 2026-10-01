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
    expect(mainSource).toContain("HistoryView.viewHistoryEntry");
    expect(mainSource).not.toContain("viewHistoryEntry : Int -> Int -> HistoryEntry -> Html Msg");
    expect(mainSource).not.toContain("relativeDateLabel : Int -> Int -> String");
  });
});
