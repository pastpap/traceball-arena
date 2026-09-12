import { readFileSync } from "node:fs";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const bridgeSource = readFileSync("public/elm.js", "utf8");

async function importFresh(relativePath) {
  const url = new URL(relativePath, import.meta.url);
  return import(`${url.href}?t=${Date.now()}-${Math.random()}`);
}

function loadBridge(overrides = {}) {
  const storage = overrides.localStorage ?? {
    values: new Map(),
    getItem(k) {
      return this.values.get(k) ?? null;
    },
    setItem(k, v) {
      this.values.set(k, String(v));
    },
  };
  const location = overrides.location ?? {
    protocol: "https:",
    host: "example.test",
    search: "",
  };
  const context = {
    console,
    window: {
      location,
      localStorage: storage,
      WebSocket: overrides.WebSocket,
      Elm: overrides.Elm,
      history: overrides.history,
      navigator: overrides.navigator,
    },
    document: overrides.document ?? { querySelector: () => null },
    navigator: overrides.navigator,
    location,
    localStorage: storage,
    WebSocket: overrides.WebSocket,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    fetch:
      overrides.fetch ??
      (async () => ({ ok: false, status: 404, json: async () => ({}) })),
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
            outgoingClientCommand: {
              subscribe(cb) {
                sendCommand = cb;
              },
            },
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
      values: new Map([
        ["traceballPlayerName", "Stefan"],
        ["traceballOnlineMoveTimer", "30"],
      ]),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: makeElm(({ flags }) => {
        initFlags = flags;
      }),
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
    const savedGame = {
      blueName: "Stefan",
      redName: "Alex",
      turn: "p1",
      ball: { x: 4, y: 6 },
      visited: ["4,6"],
      segments: [],
      moves: [],
      scoreBlue: 0,
      scoreRed: 0,
      winner: null,
      endReason: null,
    };
    const storage = {
      values: new Map([
        ["traceballPlayerName", "Stefan"],
        [
          "traceballElmLocalRuntime",
          JSON.stringify({ savedLocalGame: savedGame, savedLocalPaused: true }),
        ],
      ]),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: makeElm(({ flags }) => {
        initFlags = flags;
      }),
      localStorage: storage,
      document: { querySelector: () => null },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });

    expect(initFlags.savedLocalPaused).toBe(true);
    expect(initFlags.savedLocalGame).toMatchObject({
      blueName: "Stefan",
      redName: "Alex",
    });
  });

  it("generates and persists a random name when no name is stored", async () => {
    let initFlags = null;
    const storage = {
      values: new Map(),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: makeElm(({ flags }) => {
        initFlags = flags;
      }),
      localStorage: storage,
      document: { querySelector: () => null },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });

    expect(typeof initFlags.playerName).toBe("string");
    expect(initFlags.playerName.length).toBeGreaterThan(3);
    expect(storage.values.get("traceballPlayerName")).toBe(
      initFlags.playerName,
    );
  });

  it("normalizes stored multi-word names when initializing the Elm runtime", async () => {
    let initFlags = null;
    const storage = {
      values: new Map([["traceballPlayerName", "  Alex   Smith  "]]),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: makeElm(({ flags }) => {
        initFlags = flags;
      }),
      localStorage: storage,
      document: { querySelector: () => null },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });

    expect(initFlags.playerName).toBe("Alex Smith");
    expect(storage.values.get("traceballPlayerName")).toBe("Alex Smith");
  });

  it("preserves client ID across mounts via localStorage", async () => {
    const storage = {
      values: new Map(),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const ids = [];
    const { bridge: b1 } = loadBridge({
      Elm: makeElm(({ flags }) => ids.push(flags.clientId)),
      localStorage: storage,
      document: { querySelector: () => null },
    });
    await b1.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    const { bridge: b2 } = loadBridge({
      Elm: makeElm(({ flags }) => ids.push(flags.clientId)),
      localStorage: storage,
      document: { querySelector: () => null },
    });
    await b2.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });

    expect(ids[0]).toBe(ids[1]);
    expect(ids[0]).toMatch(/^traceball-elm-/);
  });
});

describe("Elm runtime bridge — outgoing command handlers", () => {
  it("persists player name when Elm emits persistPlayerName", async () => {
    const { elm, getSendCommand } = makeElmWithPorts();
    const storage = {
      values: new Map([["traceballPlayerName", "Stefan"]]),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: elm,
      localStorage: storage,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "persistPlayerName", name: "Alex" });
    expect(storage.values.get("traceballPlayerName")).toBe("Alex");
  });

  it("normalizes whitespace in multi-word player names while preserving spaces", async () => {
    const { elm, getSendCommand } = makeElmWithPorts();
    const storage = {
      values: new Map(),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: elm,
      localStorage: storage,
      document: { querySelector: () => null },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "persistPlayerName", name: "  Alex   Smith  " });

    expect(storage.values.get("traceballPlayerName")).toBe("Alex Smith");
  });

  it("persists online move timer when Elm emits persistOnlineMoveTimer", async () => {
    const { elm, getSendCommand } = makeElmWithPorts();
    const storage = {
      values: new Map(),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: elm,
      localStorage: storage,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "persistOnlineMoveTimer", seconds: 30 });
    expect(storage.values.get("traceballOnlineMoveTimer")).toBe("30");
  });

  it("copies a board link and notifies Elm when the clipboard update succeeds", async () => {
    let notice = null;
    let copied = null;
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingClientNotice: {
        send: (value) => {
          notice = value;
        },
      },
    });
    const { bridge } = loadBridge({
      Elm: elm,
      navigator: {
        clipboard: {
          writeText: async (value) => {
            copied = value;
          },
        },
      },
      document: { querySelector: () => null },
      location: { protocol: "https:", host: "example.test", search: "" },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "copyBoardLink", roomId: "ROOM123" });
    await new Promise((r) => setTimeout(r, 20));

    expect(copied).toBe("https://example.test/?board=ROOM123");
    expect(notice).toBe("Link copied to clipboard.");
  });

  it("persists Elm local runtime snapshot when Elm emits persistLocalRuntime", async () => {
    const { elm, getSendCommand } = makeElmWithPorts();
    const storage = {
      values: new Map(),
      getItem(k) {
        return this.values.get(k) ?? null;
      },
      setItem(k, v) {
        this.values.set(k, String(v));
      },
    };
    const { bridge } = loadBridge({
      Elm: elm,
      localStorage: storage,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({
      type: "persistLocalRuntime",
      localPaused: true,
      localGame: { blueName: "Stefan", redName: "Alex" },
    });
    const raw = storage.values.get("traceballElmLocalRuntime");
    expect(JSON.parse(raw)).toMatchObject({
      savedLocalPaused: true,
      savedLocalGame: { blueName: "Stefan", redName: "Alex" },
    });
  });

  it("routes updateUrl to history.replaceState", async () => {
    const historyCalls = [];
    const { elm, getSendCommand } = makeElmWithPorts();
    const { bridge } = loadBridge({
      Elm: elm,
      history: {
        replaceState(_s, _t, url) {
          historyCalls.push(String(url));
        },
      },
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "updateUrl", url: "/?board=ROOM123" });
    expect(historyCalls).toEqual(["/?board=ROOM123"]);
  });

  it("fetches board list and pushes result to incomingBoardList port", async () => {
    let boardListReceived = null;
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingBoardList: {
        send: (v) => {
          boardListReceived = v;
        },
      },
    });
    const { bridge } = loadBridge({
      Elm: elm,
      document: { querySelector: () => null },
      fetch: async () => ({
        ok: true,
        json: async () => ({
          rooms: [{ roomId: "LIVE42", state: "WaitingForPlayers" }],
        }),
      }),
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "fetchBoardList" });
    await new Promise((r) => setTimeout(r, 20));
    expect(boardListReceived).toMatchObject({ rooms: [{ roomId: "LIVE42" }] });
  });

  it("pushes empty rooms when fetchBoardList request fails", async () => {
    let boardListReceived = null;
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingBoardList: {
        send: (v) => {
          boardListReceived = v;
        },
      },
    });
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
    let boardCreatedInfo = null;
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingBoardCreated: {
        send: (value) => {
          boardCreatedInfo = value;
        },
      },
    });
    class FakeWebSocket {
      constructor() {
        this.sent = [];
        sockets.push(this);
      }
      send(raw) {
        this.sent.push(JSON.parse(raw));
      }
      close() {
        this.onclose?.();
      }
    }
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
      fetch: async (url, opts) =>
        opts?.method === "POST"
          ? {
              ok: true,
              json: async () => ({
                roomId: "NEWRM1",
                url: "https://example.test/room/NEWRM1",
              }),
            }
          : { ok: false, status: 404 },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "createBoard", moveTimeLimitSeconds: 15 });
    await new Promise((r) => setTimeout(r, 20));
    sockets[0].onopen();
    expect(sockets.length).toBe(1);
    expect(boardCreatedInfo).toEqual({
      roomId: "NEWRM1",
      url: "https://example.test/room/NEWRM1",
    });
    expect(sockets[0].sent[0]).toMatchObject({
      type: "watch",
      roomId: "NEWRM1",
    });
  });

  it("preserves an explicit off timer when creating a board", async () => {
    let createPayload = null;
    class FakeWebSocket {
      constructor() {
        this.sent = [];
      }
      send(raw) {
        this.sent.push(JSON.parse(raw));
      }
      close() {
        this.onclose?.();
      }
    }
    const { elm, getSendCommand } = makeElmWithPorts();
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
      fetch: async (_url, opts) => {
        if (opts?.method === "POST") {
          createPayload = JSON.parse(String(opts.body || "{}"));
          return {
            ok: true,
            json: async () => ({
              roomId: "NEWRM1",
              url: "https://example.test/room/NEWRM1",
            }),
          };
        }

        return { ok: true, json: async () => ({ rooms: [] }) };
      },
    });

    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "createBoard", moveTimeLimitSeconds: 0 });
    await new Promise((r) => setTimeout(r, 20));

    expect(createPayload).toMatchObject({ moveTimeLimitSeconds: 0 });
  });
});

describe("Elm runtime bridge — WebSocket lifecycle", () => {
  it("opens WebSocket and sends watch on connect", async () => {
    const sockets = [];
    const statuses = [];
    class FakeWebSocket {
      constructor() {
        this.sent = [];
        sockets.push(this);
      }
      send(raw) {
        this.sent.push(JSON.parse(raw));
      }
      close() {
        this.onclose?.();
      }
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingConnectionStatus: { send: (s) => statuses.push(s) },
    });
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({
      type: "watch",
      roomId: "ROOM123",
      clientId: "traceball-elm-xyz",
    });
    expect(sockets.length).toBe(1);
    sockets[0].onopen();
    expect(statuses).toContain("connected");
    expect(sockets[0].sent[0]).toMatchObject({
      type: "watch",
      roomId: "ROOM123",
      clientId: "traceball-elm-xyz",
    });
  });

  it("forwards incoming WebSocket messages to incomingSocketMessage port", async () => {
    const messages = [];
    const sockets = [];
    class FakeWebSocket {
      constructor() {
        this.sent = [];
        sockets.push(this);
      }
      send() {}
      close() {}
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingSocketMessage: { send: (m) => messages.push(m) },
    });
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-abc" });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify({ type: "state", boardCode: "ROOM123", version: 1 }),
    });
    expect(messages.some((m) => m.type === "state")).toBe(true);
  });

  it("pushes disconnected status when socket closes", async () => {
    const statuses = [];
    const sockets = [];
    class FakeWebSocket {
      constructor() {
        sockets.push(this);
      }
      send() {}
      close() {
        this.onclose?.();
      }
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingConnectionStatus: { send: (s) => statuses.push(s) },
    });
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
    });
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
      constructor() {
        sockets.push(this);
      }
      send() {}
      close() {}
    }
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingConnectionStatus: { send: (s) => statuses.push(s) },
    });
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-abc" });
    sockets[0].onerror();
    expect(statuses).toContain("error");
  });

  it("forwards protocol commands through open WebSocket", async () => {
    const sockets = [];
    class FakeWebSocket {
      constructor() {
        this.sent = [];
        sockets.push(this);
      }
      send(raw) {
        this.sent.push(JSON.parse(raw));
      }
      close() {
        this.onclose?.();
      }
    }
    const { elm, getSendCommand } = makeElmWithPorts();
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({
      type: "watch",
      roomId: "ROOM123",
      clientId: "elm-custom",
    });
    sockets[0].onopen();

    getSendCommand()({
      type: "claimSeat",
      seatId: "p1",
      name: "Stefan",
      roomId: "ROOM123",
      clientId: "elm-custom",
    });
    getSendCommand()({
      type: "joinWaitingList",
      name: "Stefan",
      roomId: "ROOM123",
      clientId: "elm-custom",
    });
    getSendCommand()({
      type: "leaveWaitingList",
      roomId: "ROOM123",
      clientId: "elm-custom",
    });
    getSendCommand()({ type: "leave" });
    getSendCommand()({ type: "move", to: { x: 4, y: 5 } });
    getSendCommand()({ type: "reset" });
    getSendCommand()({ type: "freeSeat", seatId: "p2" });

    expect(sockets[0].sent[1]).toMatchObject({
      type: "claimSeat",
      seatId: "p1",
    });
    expect(sockets[0].sent[2]).toMatchObject({ type: "joinWaitingList" });
    expect(sockets[0].sent[3]).toMatchObject({ type: "leaveWaitingList" });
    expect(sockets[0].sent[4]).toMatchObject({ type: "leave" });
    expect(sockets[0].sent[5]).toMatchObject({
      type: "move",
      to: { x: 4, y: 5 },
    });
    expect(sockets[0].sent[6]).toMatchObject({ type: "reset" });
    expect(sockets[0].sent[7]).toMatchObject({
      type: "freeSeat",
      seatId: "p2",
    });
  });

  it("pushes error message when command arrives but socket is not open", async () => {
    const messages = [];
    const { elm, getSendCommand } = makeElmWithPorts({
      incomingSocketMessage: { send: (m) => messages.push(m) },
    });
    const { bridge } = loadBridge({
      Elm: elm,
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "move", to: { x: 4, y: 5 } });
    expect(messages.some((m) => m.type === "error")).toBe(true);
  });

  it("does not update URL from JS on socket open — Elm owns URL via updateUrl command", async () => {
    const historyCalls = [];
    const sockets = [];
    class FakeWebSocket {
      constructor() {
        sockets.push(this);
      }
      send() {}
      close() {}
    }
    const { elm, getSendCommand } = makeElmWithPorts();
    const { bridge } = loadBridge({
      Elm: elm,
      WebSocket: FakeWebSocket,
      history: {
        replaceState(_s, _t, url) {
          historyCalls.push(String(url));
        },
      },
      document: { querySelector: () => null },
    });
    await bridge.mountElmRuntime({ innerHTML: "" }, { boardCode: "" });
    getSendCommand()({ type: "watch", roomId: "ROOM123", clientId: "elm-abc" });
    sockets[0].onopen();
    // JS must not update URL on connect; Elm emits updateUrl after ConnectionChanged "connected"
    expect(historyCalls.length).toBe(0);
  });
});

describe("React shell bridge modules", () => {
  it("persists stable shell identity and online timer in storage helpers", async () => {
    const storage = {
      values: new Map([["traceballPlayerName", "  Alex   Smith  "]]),
      getItem(key) {
        return this.values.get(key) ?? null;
      },
      setItem(key, value) {
        this.values.set(key, String(value));
      },
    };
    const storageModule = await importFresh("../src/react/lib/storage.js");

    const firstId = storageModule.getOrCreateClientId({
      storage,
      random: () => 0.123456789,
    });
    const secondId = storageModule.getOrCreateClientId({
      storage,
      random: () => 0.987654321,
    });
    const normalizedName = storageModule.getStoredPlayerName({
      storage,
      randomName: () => "Fallback Player",
    });
    const zeroTimer = storageModule.persistOnlineMoveTimer(0, { storage });

    expect(firstId).toBe(secondId);
    expect(firstId).toMatch(/^traceball-elm-/);
    expect(normalizedName).toBe("Alex Smith");
    expect(storage.values.get("traceballPlayerName")).toBe("Alex Smith");
    expect(zeroTimer).toBe(0);
    expect(storage.values.get("traceballOnlineMoveTimer")).toBe("0");
  });

  it("builds board-list and create-board requests through the API helpers", async () => {
    const requests = [];
    const apiModule = await importFresh("../src/react/lib/api.js");
    const fetchImpl = async (url, options = {}) => {
      requests.push({ url: String(url), options });
      return {
        ok: true,
        json: async () =>
          options.method === "POST"
            ? { roomId: "NEWRM1", url: "https://example.test/room/NEWRM1" }
            : { rooms: [{ roomId: "LIVE42" }] },
      };
    };

    const boardList = await apiModule.fetchBoardList("traceball-elm-123", {
      fetchImpl,
    });
    const created = await apiModule.createBoard(
      { clientId: "traceball-elm-123", moveTimeLimitSeconds: 0 },
      { fetchImpl },
    );

    expect(boardList).toMatchObject({ rooms: [{ roomId: "LIVE42" }] });
    expect(created).toMatchObject({ roomId: "NEWRM1" });
    expect(requests[0]).toMatchObject({
      url: "/api/rooms?clientId=traceball-elm-123",
      options: { cache: "no-store" },
    });
    expect(requests[1]).toMatchObject({
      url: "/api/rooms",
      options: {
        method: "POST",
        headers: { "content-type": "application/json" },
      },
    });
    expect(JSON.parse(String(requests[1].options.body))).toMatchObject({
      clientId: "traceball-elm-123",
      moveTimeLimitSeconds: 0,
    });
  });

  it("builds delete-board requests and surfaces creator-only server errors", async () => {
    const requests = [];
    const apiModule = await importFresh("../src/react/lib/api.js");
    const fetchImpl = async (url, options = {}) => {
      requests.push({ url: String(url), options });
      return {
        ok: false,
        status: 403,
        json: async () => ({
          error: "Only the board creator can delete this board.",
        }),
      };
    };

    await expect(
      apiModule.deleteBoard(
        { roomId: "ROOM 123", clientId: "traceball-elm-123" },
        { fetchImpl },
      ),
    ).rejects.toThrow("Only the board creator can delete this board.");

    expect(requests[0]).toMatchObject({
      url: "/api/rooms/ROOM%20123?clientId=traceball-elm-123",
      options: { method: "DELETE" },
    });
  });

  it("opens a board socket and emits status plus authoritative messages", async () => {
    const statuses = [];
    const messages = [];
    const sockets = [];
    class FakeWebSocket {
      constructor(url) {
        this.url = url;
        this.sent = [];
        sockets.push(this);
      }
      send(raw) {
        this.sent.push(JSON.parse(raw));
      }
      close() {
        this.onclose?.();
      }
    }
    const socketModule = await importFresh("../src/react/lib/socket.js");

    const connection = socketModule.connectBoardSocket({
      roomId: "ROOM123",
      clientId: "traceball-elm-xyz",
      onStatus: (status) => statuses.push(status),
      onMessage: (message) => messages.push(message),
      WebSocketImpl: FakeWebSocket,
      socketUrl: "wss://example.test/ws",
    });

    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify({ type: "state", boardCode: "ROOM123", version: 2 }),
    });
    connection.close();

    expect(sockets[0].url).toBe("wss://example.test/ws");
    expect(sockets[0].sent[0]).toMatchObject({
      type: "watch",
      roomId: "ROOM123",
      clientId: "traceball-elm-xyz",
    });
    expect(statuses).toEqual(["connected", "disconnected"]);
    expect(messages).toEqual([
      { type: "state", boardCode: "ROOM123", version: 2 },
    ]);
  });

  it("stores only newer board snapshots and keeps local and online timers separate", async () => {
    const reducerModule = await importFresh(
      "../src/react/state/shellReducer.js",
    );

    let state = reducerModule.createInitialShellState({
      clientId: "traceball-elm-123",
      playerName: "Stefan",
      onlineMoveTimer: 15,
      localMoveTimer: 45,
    });

    state = reducerModule.shellReducer(state, {
      type: "receiveBoardState",
      boardState: {
        boardCode: "ROOM123",
        version: 3,
        game: { state: "SessionActive" },
      },
    });
    state = reducerModule.shellReducer(state, {
      type: "receiveBoardState",
      boardState: {
        boardCode: "ROOM123",
        version: 2,
        game: { state: "WaitingForPlayers" },
      },
    });
    state = reducerModule.shellReducer(state, {
      type: "setLocalMoveTimer",
      seconds: 30,
    });

    expect(state.boardState).toMatchObject({
      boardCode: "ROOM123",
      version: 3,
    });
    expect(state.localSetup.moveTimeLimitSeconds).toBe(30);
    expect(state.onlineSetup.moveTimeLimitSeconds).toBe(15);
  });

  it("ignores late snapshots from a previous board after an explicit board switch", async () => {
    const reducerModule = await importFresh(
      "../src/react/state/shellReducer.js",
    );

    let state = reducerModule.createInitialShellState({
      clientId: "traceball-elm-123",
      currentBoardCode: "ROOM123",
      boardState: {
        boardCode: "ROOM123",
        version: 3,
        game: { state: "SessionActive" },
      },
    });

    state = reducerModule.shellReducer(state, {
      type: "setCurrentBoardCode",
      boardCode: "ROOM999",
    });
    const afterLateRoom123 = reducerModule.shellReducer(state, {
      type: "receiveBoardState",
      boardState: {
        boardCode: "ROOM123",
        version: 4,
        game: { state: "BetweenRounds" },
      },
    });

    expect(afterLateRoom123.currentBoardCode).toBe("ROOM999");
    expect(afterLateRoom123.boardState).toMatchObject({
      boardCode: "ROOM123",
      version: 3,
      game: { state: "SessionActive" },
    });

    state = reducerModule.shellReducer(afterLateRoom123, {
      type: "receiveBoardState",
      boardState: {
        boardCode: "ROOM999",
        version: 1,
        game: { state: "WaitingForPlayers" },
      },
    });

    expect(state.currentBoardCode).toBe("ROOM999");
    expect(state.boardState).toMatchObject({
      boardCode: "ROOM999",
      version: 1,
      game: { state: "WaitingForPlayers" },
    });
  });
});
