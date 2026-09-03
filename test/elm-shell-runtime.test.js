import { readFileSync } from "node:fs";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const bridgeSource = readFileSync("public/elm.js", "utf8");

function loadBridge(overrides = {}) {
  const storage = overrides.localStorage ?? {
    values: new Map(),
    getItem(k) { return this.values.get(k) ?? null; },
    setItem(k, v) { this.values.set(k, String(v)); },
  };
  const location = overrides.location ?? { protocol: "https:", host: "example.test", search: "" };
  const context = {
    console,
    window: {
      location,
      localStorage: storage,
      WebSocket: overrides.WebSocket,
      Elm: overrides.Elm,
      history: overrides.history,
    },
    document: overrides.document ?? { querySelector: () => null },
    location,
    localStorage: storage,
    WebSocket: overrides.WebSocket,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    fetch: overrides.fetch ?? (async () => ({ ok: false, status: 404, json: async () => ({}) })),
    URL: overrides.URL ?? URL,
  };
  vm.createContext(context);
  vm.runInContext(bridgeSource, context, { filename: "public/elm.js" });
  return { bridge: context.window.TraceballElmBridge, storage, context };
}

function makeElm(onInit) {
  return {
    Main: {
      init(opts) {
        onInit?.(opts);
        return {
          ports: {
            incomingSocketMessage: { send: () => {} },
            incomingConnectionStatus: { send: () => {} },
          },
        };
      },
    },
  };
}

function makeElmWithPorts(extraPorts = {}) {
  let sendCommand = () => {};
  const elm = {
    Main: {
      init() {
        return {
          ports: {
            incomingSocketMessage: { send: () => {} },
            incomingConnectionStatus: { send: () => {} },
            outgoingClientCommand: { subscribe(cb) { sendCommand = cb; } },
            ...extraPorts,
          },
        };
      },
    },
  };
  return { elm, getSendCommand: () => sendCommand };
}

describe("Elm runtime bridge — flags", () => {
  it("passes boardCode, clientId, playerName, onlineMoveTimer to Elm init", async () => {
    let initFlags = null;
    const storage = {
      values: new Map([["traceballPlayerName", "Stefan"], ["traceballOnlineMoveTimer", "30"]]),
      getItem(k) { return this.values.get(k) ?? null; },
      setItem(k, v) { this.values.set(k, String(v)); },
    };
    const { bridge } = loadBridge({
      Elm: makeElm(({ flags }) => { initFlags = flags; }),
      localStorage: storage,
      document: { querySelector: () => null },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "ROOM123" });

    expect(initFlags.boardCode).toBe("ROOM123");
    expect(initFlags.clientId).toMatch(/^traceball-elm-/);
    expect(initFlags.playerName).toBe("Stefan");
    expect(initFlags.onlineMoveTimer).toBe(30);
  });

  it("restores saved Elm local game into flags", async () => {
    let initFlags = null;
    const savedGame = { blueName: "Stefan", redName: "Alex", turn: "p1", ball: { x: 4, y: 6 }, visited: ["4,6"], segments: [], moves: [], scoreBlue: 0, scoreRed: 0, winner: null, endReason: null };
    const storage = {
      values: new Map([
        ["traceballPlayerName", "Stefan"],
        ["traceballElmLocalRuntime", JSON.stringify({ savedLocalGame: savedGame, savedLocalPaused: true })],
      ]),
      getItem(k) { return this.values.get(k) ?? null; },
      setItem(k, v) { this.values.set(k, String(v)); },
    };
    const { bridge } = loadBridge({
      Elm: makeElm(({ flags }) => { initFlags = flags; }),
      localStorage: storage,
      document: { querySelector: () => null },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });

    expect(initFlags.savedLocalPaused).toBe(true);
    expect(initFlags.savedLocalGame).toMatchObject({ blueName: "Stefan", redName: "Alex" });
  });

  it("generates and persists a random name when no name is stored", async () => {
    let initFlags = null;
    const storage = { values: new Map(), getItem(k) { return this.values.get(k) ?? null; }, setItem(k, v) { this.values.set(k, String(v)); } };
    const { bridge } = loadBridge({
      Elm: makeElm(({ flags }) => { initFlags = flags; }),
      localStorage: storage,
      document: { querySelector: () => null },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });

    expect(typeof initFlags.playerName).toBe("string");
    expect(initFlags.playerName.length).toBeGreaterThan(3);
    expect(storage.values.get("traceballPlayerName")).toBe(initFlags.playerName);
  });

  it("preserves client ID across mounts via localStorage", async () => {
    const storage = { values: new Map(), getItem(k) { return this.values.get(k) ?? null; }, setItem(k, v) { this.values.set(k, String(v)); } };
    const ids = [];
    const { bridge: b1 } = loadBridge({ Elm: makeElm(({ flags }) => ids.push(flags.clientId)), localStorage: storage, document: { querySelector: () => null } });
    await b1.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    const { bridge: b2 } = loadBridge({ Elm: makeElm(({ flags }) => ids.push(flags.clientId)), localStorage: storage, document: { querySelector: () => null } });
    await b2.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });

    expect(ids[0]).toBe(ids[1]);
    expect(ids[0]).toMatch(/^traceball-elm-/);
  });
});

describe("Elm runtime bridge — outgoing command handlers", () => {
  it("persists player name when Elm emits persistPlayerName", async () => {
    const { elm, getSendCommand } = makeElmWithPorts();
    const storage = { values: new Map([["traceballPlayerName", "Stefan"]]), getItem(k) { return this.values.get(k) ?? null; }, setItem(k, v) { this.values.set(k, String(v)); } };
    const { bridge } = loadBridge({ Elm: elm, localStorage: storage, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "persistPlayerName", name: "Alex" });
    expect(storage.values.get("traceballPlayerName")).toBe("Alex");
  });

  it("persists online move timer when Elm emits persistOnlineMoveTimer", async () => {
    const { elm, getSendCommand } = makeElmWithPorts();
    const storage = { values: new Map(), getItem(k) { return this.values.get(k) ?? null; }, setItem(k, v) { this.values.set(k, String(v)); } };
    const { bridge } = loadBridge({ Elm: elm, localStorage: storage, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "persistOnlineMoveTimer", seconds: 30 });
    expect(storage.values.get("traceballOnlineMoveTimer")).toBe("30");
  });

  it("persists Elm local runtime snapshot when Elm emits persistLocalRuntime", async () => {
    const { elm, getSendCommand } = makeElmWithPorts();
    const storage = { values: new Map(), getItem(k) { return this.values.get(k) ?? null; }, setItem(k, v) { this.values.set(k, String(v)); } };
    const { bridge } = loadBridge({ Elm: elm, localStorage: storage, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "persistLocalRuntime", localPaused: true, localGame: { blueName: "Stefan", redName: "Alex" } });
    const raw = storage.values.get("traceballElmLocalRuntime");
    expect(JSON.parse(raw)).toMatchObject({ savedLocalPaused: true, savedLocalGame: { blueName: "Stefan", redName: "Alex" } });
  });

  it("routes updateUrl to history.replaceState", async () => {
    const historyCalls = [];
    const { elm, getSendCommand } = makeElmWithPorts();
    const { bridge } = loadBridge({
      Elm: elm,
      history: { replaceState(_s, _t, url) { historyCalls.push(String(url)); } },
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "updateUrl", url: "/?board=ROOM123" });
    expect(historyCalls).toEqual(["/?board=ROOM123"]);
  });

  it("fetches board list and pushes result to incomingBoardList port", async () => {
    let boardListReceived = null;
    const { elm, getSendCommand } = makeElmWithPorts({ incomingBoardList: { send: (v) => { boardListReceived = v; } } });
    const { bridge } = loadBridge({
      Elm: elm,
      document: { querySelector: () => null },
      fetch: async () => ({ ok: true, json: async () => ({ rooms: [{ roomId: "LIVE42", state: "WaitingForPlayers" }] }) }),
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "fetchBoardList" });
    await new Promise((r) => setTimeout(r, 20));
    expect(boardListReceived).toMatchObject({ rooms: [{ roomId: "LIVE42" }] });
  });

  it("pushes empty rooms when fetchBoardList request fails", async () => {
    let boardListReceived = null;
    const { elm, getSendCommand } = makeElmWithPorts({ incomingBoardList: { send: (v) => { boardListReceived = v; } } });
    const { bridge } = loadBridge({
      Elm: elm,
      document: { querySelector: () => null },
      fetch: async () => ({ ok: false, status: 503 }),
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "fetchBoardList" });
    await new Promise((r) => setTimeout(r, 20));
    expect(boardListReceived).toMatchObject({ rooms: [] });
  });

  it("creates board via POST, connects WebSocket, and notifies Elm via incomingBoardCreated", async () => {
    const sockets = [];
    let boardCreatedCode = null;
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingBoardCreated: { send: (c) => { boardCreatedCode = c; } },
    });
    class FakeWebSocket {
      constructor() { this.sent = []; sockets.push(this); }
      send(raw) { this.sent.push(JSON.parse(raw)); }
      close() { this.onclose?.(); }
    }
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
      fetch: async (url, opts) => opts?.method === "POST"
        ? { ok: true, json: async () => ({ roomId: "NEWRM1" }) }
        : { ok: false, status: 404 },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "createBoard", moveTimeLimitSeconds: 15 });
    await new Promise((r) => setTimeout(r, 20));
    sockets[0].onopen();
    expect(sockets.length).toBe(1);
    expect(boardCreatedCode).toBe("NEWRM1");
    expect(sockets[0].sent[0]).toMatchObject({ type: "watch", roomId: "NEWRM1" });
  });
});

describe("Elm runtime bridge — WebSocket lifecycle", () => {
  it("opens WebSocket and sends watch on connect", async () => {
    const sockets = [];
    const statuses = [];
    class FakeWebSocket {
      constructor() { this.sent = []; sockets.push(this); }
      send(raw) { this.sent.push(JSON.parse(raw)); }
      close() { this.onclose?.(); }
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingConnectionStatus: { send: (s) => statuses.push(s) },
    });
    const { bridge } = loadBridge({ Elm: elm, WebSocket: FakeWebSocket, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "traceball-elm-xyz" });
    expect(sockets.length).toBe(1);
    sockets[0].onopen();
    expect(statuses).toContain("connected");
    expect(sockets[0].sent[0]).toMatchObject({ type: "watch", roomId: "ROOM123", clientId: "traceball-elm-xyz" });
  });

  it("forwards incoming WebSocket messages to incomingSocketMessage port", async () => {
    const messages = [];
    const sockets = [];
    class FakeWebSocket {
      constructor() { this.sent = []; sockets.push(this); }
      send() {}
      close() {}
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingSocketMessage: { send: (m) => messages.push(m) },
    });
    const { bridge } = loadBridge({ Elm: elm, WebSocket: FakeWebSocket, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-abc" });
    sockets[0].onopen();
    sockets[0].onmessage({ data: JSON.stringify({ type: "state", boardCode: "ROOM123", version: 1 }) });
    expect(messages.some((m) => m.type === "state")).toBe(true);
  });

  it("pushes disconnected status when socket closes", async () => {
    const statuses = [];
    const sockets = [];
    class FakeWebSocket {
      constructor() { sockets.push(this); }
      send() {}
      close() { this.onclose?.(); }
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingConnectionStatus: { send: (s) => statuses.push(s) },
    });
    const { bridge } = loadBridge({ Elm: elm, WebSocket: FakeWebSocket, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-abc" });
    sockets[0].onopen();
    sockets[0].onclose();
    expect(statuses).toContain("disconnected");
  });

  it("pushes error status when socket errors", async () => {
    const statuses = [];
    const sockets = [];
    class FakeWebSocket {
      constructor() { sockets.push(this); }
      send() {}
      close() {}
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingConnectionStatus: { send: (s) => statuses.push(s) },
    });
    const { bridge } = loadBridge({ Elm: elm, WebSocket: FakeWebSocket, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-abc" });
    sockets[0].onerror();
    expect(statuses).toContain("error");
  });

  it("forwards protocol commands through open WebSocket", async () => {
    const sockets = [];
    class FakeWebSocket {
      constructor() { this.sent = []; sockets.push(this); }
      send(raw) { this.sent.push(JSON.parse(raw)); }
      close() { this.onclose?.(); }
    }
    const { elm, getSendCommand } = makeElmWithPorts();
    const { bridge } = loadBridge({ Elm: elm, WebSocket: FakeWebSocket, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-custom" });
    sockets[0].onopen();

    getSendCommand()({ type: "claimSeat", seatId: "p1", name: "Stefan", roomId: "ROOM123", clientId: "elm-custom" });
    getSendCommand()({ type: "joinWaitingList", name: "Stefan", roomId: "ROOM123", clientId: "elm-custom" });
    getSendCommand()({ type: "leaveWaitingList", roomId: "ROOM123", clientId: "elm-custom" });
    getSendCommand()({ type: "leave" });
    getSendCommand()({ type: "move", to: { x: 4, y: 5 } });
    getSendCommand()({ type: "reset" });
    getSendCommand()({ type: "freeSeat", seatId: "p2" });

    expect(sockets[0].sent[1]).toMatchObject({ type: "claimSeat", seatId: "p1" });
    expect(sockets[0].sent[2]).toMatchObject({ type: "joinWaitingList" });
    expect(sockets[0].sent[3]).toMatchObject({ type: "leaveWaitingList" });
    expect(sockets[0].sent[4]).toMatchObject({ type: "leave" });
    expect(sockets[0].sent[5]).toMatchObject({ type: "move", to: { x: 4, y: 5 } });
    expect(sockets[0].sent[6]).toMatchObject({ type: "reset" });
    expect(sockets[0].sent[7]).toMatchObject({ type: "freeSeat", seatId: "p2" });
  });

  it("pushes error message when command arrives but socket is not open", async () => {
    const messages = [];
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingSocketMessage: { send: (m) => messages.push(m) },
    });
    const { bridge } = loadBridge({ Elm: elm, document: { querySelector: () => null } });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "move", to: { x: 4, y: 5 } });
    expect(messages.some((m) => m.type === "error")).toBe(true);
  });

  it("does not update URL from JS on socket open — Elm owns URL via updateUrl command", async () => {
    const historyCalls = [];
    const sockets = [];
    class FakeWebSocket {
      constructor() { sockets.push(this); }
      send() {}
      close() {}
    }
    const { elm, getSendCommand } = makeElmWithPorts();
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      history: { replaceState(_s, _t, url) { historyCalls.push(String(url)); } },
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-abc" });
    sockets[0].onopen();
    // JS must not update URL on connect; Elm emits updateUrl after ConnectionChanged "connected"
    expect(historyCalls.length).toBe(0);
  });
});
