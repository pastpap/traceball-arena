import { readFileSync } from "node:fs";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const shellSource = readFileSync("public/elm.js", "utf8");

function loadShell(overrides = {}) {
  const storage = overrides.localStorage ?? {
    values: new Map(),
    getItem(key) {
      return this.values.get(key) ?? null;
    },
    setItem(key, value) {
      this.values.set(key, String(value));
    },
    removeItem(key) {
      this.values.delete(key);
    },
  };
  const location = overrides.location ?? {
    protocol: "https:",
    host: "example.test",
    search: "",
  };
  const context = {
    console,
    window: { location, localStorage: storage, WebSocket: overrides.WebSocket },
    document: overrides.document ?? {
      querySelector: () => null,
      querySelectorAll: () => [],
    },
    location,
    localStorage: storage,
    WebSocket: overrides.WebSocket,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    fetch:
      overrides.fetch ??
      (async () => ({ ok: false, status: 404, json: async () => ({}) })),
  };
  vm.createContext(context);
  vm.runInContext(shellSource, context, { filename: "public/elm.js" });
  return { shell: context.window.TraceballElmShell, storage };
}

describe("Task 4 local same-screen runtime helpers", () => {
  it("creates a local runtime model from player names and timer", () => {
    const { shell } = loadShell();

    const model = shell.createLocalRuntimeModel({
      blueName: "Stefan",
      redName: "Alex",
      moveTimeLimitSeconds: 10,
    });

    expect(model.localRuntime).toBe(true);
    expect(model.board.code).toBe("LOCAL");
    expect(model.board.seats.blue.player.displayName).toBe("Stefan");
    expect(model.board.seats.red.player.displayName).toBe("Alex");
    expect(model.board.currentSession.moveTimeLimitSeconds).toBe(10);
    expect(Array.isArray(model.board.currentSession.round.legalMoves)).toBe(
      true,
    );
    expect(model.board.currentSession.round.legalMoves.length).toBeGreaterThan(
      0,
    );
  });

  it("serializes and restores a saved local runtime model", () => {
    const { shell } = loadShell();

    const model = shell.createLocalRuntimeModel({
      blueName: "Blue",
      redName: "Red",
      moveTimeLimitSeconds: 30,
    });
    const serialized = shell.serializeLocalRuntimeModel(model);
    const restored = shell.restoreLocalRuntimeModel(serialized);

    expect(typeof serialized).toBe("string");
    expect(restored).not.toBeNull();
    expect(restored.localRuntime).toBe(true);
    expect(restored.board.code).toBe("LOCAL");
    expect(restored.board.currentSession.moveTimeLimitSeconds).toBe(30);
    expect(restored.board.seats.blue.player.displayName).toBe("Blue");
    expect(restored.board.seats.red.player.displayName).toBe("Red");
  });

  it("rejects malformed saved local runtime payloads", () => {
    const { shell } = loadShell();

    expect(shell.restoreLocalRuntimeModel('{"bad":true}')).toBeNull();
    expect(shell.restoreLocalRuntimeModel("not-json")).toBeNull();
  });

  it("applies a legal local move and flips turn", () => {
    const { shell } = loadShell();

    const initial = shell.createLocalRuntimeModel({
      blueName: "Blue",
      redName: "Red",
      moveTimeLimitSeconds: 15,
    });
    const key = "4,5";
    expect(
      initial.board.currentSession.round.legalMoves.some(
        (point) => `${point.x},${point.y}` === key,
      ),
    ).toBe(true);

    const next = shell.applyLocalRuntimeMove(initial, key);

    expect(next).not.toBeNull();
    expect(next.board.currentSession.round.moves.length).toBe(1);
    expect(next.board.currentSession.round.ball).toEqual({ x: 4, y: 5 });
    expect(next.board.currentSession.round.turn).toBe("p2");
    expect(next.ownSeat).toBe("p2");
  });

  it("keeps visited nodes legal when the segment is not already traced", () => {
    const { shell } = loadShell();

    let model = shell.createLocalRuntimeModel({
      blueName: "Blue",
      redName: "Red",
      moveTimeLimitSeconds: 15,
    });
    model = shell.applyLocalRuntimeMove(model, "5,6");
    model = shell.applyLocalRuntimeMove(model, "5,7");

    const legalKeys = model.board.currentSession.round.legalMoves.map(
      (point) => `${point.x},${point.y}`,
    );

    expect(legalKeys).toContain("4,6");
  });

  it("grants a bounce turn when landing on a visited point", () => {
    const { shell } = loadShell();

    let model = shell.createLocalRuntimeModel({
      blueName: "Blue",
      redName: "Red",
      moveTimeLimitSeconds: 15,
    });
    model = shell.applyLocalRuntimeMove(model, "5,6");
    model = shell.applyLocalRuntimeMove(model, "5,7");
    const bounced = shell.applyLocalRuntimeMove(model, "4,6");

    expect(bounced.board.currentSession.round.moves.at(-1).bounce).toBe(true);
    expect(bounced.board.currentSession.round.turn).toBe("p1");
    expect(bounced.ownSeat).toBe("p1");
  });
});
