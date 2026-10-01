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
    expect(mainSource).toContain("Flags.decodeFlags localGameDecoder flags");
    expect(mainSource).not.toContain("flagsDecoder : Decode.Decoder Flags");
  });
});
