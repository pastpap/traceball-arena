import { readFileSync } from "node:fs";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const shellSource = readFileSync("public/elm.js", "utf8");
const cssSource = readFileSync("public/styles.css", "utf8");

function loadShell(overrides = {}) {
  const root = { innerHTML: "" };
  const storage = overrides.localStorage ?? {
    values: new Map(),
    getItem(key) {
      return this.values.get(key) ?? null;
    },
    setItem(key, value) {
      this.values.set(key, String(value));
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
    document: overrides.document ?? { querySelector: () => root },
    location,
    localStorage: storage,
    WebSocket: overrides.WebSocket,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    fetch:
      overrides.fetch ??
      (async () => ({ ok: false, status: 404, json: async () => ({}) })),
    Date: overrides.Date ?? Date,
  };
  vm.createContext(context);
  vm.runInContext(shellSource, context, { filename: "public/elm.js" });
  return { shell: context.window.TraceballElmShell, root, storage, context };
}

function fixture(name) {
  return JSON.parse(readFileSync(`test/fixtures/phase1/${name}.json`, "utf8"));
}

describe("Phase 3 Elm shell runtime contract", () => {
  it("renders every canonical state fixture without throwing", () => {
    const { shell } = loadShell();
    const fixtureNames = [
      "board-creator-only",
      "board-active-session",
      "board-full-with-watcher",
      "board-full-with-waiting-list-member",
      "board-disconnected-player-during-grace",
      "board-disconnected-player-eligible-to-free",
      "board-between-rounds",
    ];

    for (const name of fixtureNames) {
      const html = shell.renderBoardMessage(fixture(name));
      expect(html).toContain("Traceball Arena");
      expect(html).toContain("Board ROOM123");
      expect(html).toContain('class="board-stage');
    }
  });

  it("renders watcher and waiting-list membership as separate concepts", () => {
    const { shell } = loadShell();

    const watcherHtml = shell.renderBoardMessage(
      fixture("board-full-with-watcher"),
    );
    expect(watcherHtml).toContain("Watchers");
    expect(watcherHtml).toContain("Watcher One");
    expect(watcherHtml).toContain("Waiting list");
    expect(watcherHtml).toContain("None");

    const waitingHtml = shell.renderBoardMessage(
      fixture("board-full-with-waiting-list-member"),
    );
    expect(waitingHtml).toContain("Watchers");
    expect(waitingHtml).toContain("Watcher One");
    expect(waitingHtml).toContain("Waiting list");
    expect(waitingHtml).toContain("Next Player");
  });

  it("renders Phase 9 legacy shell structure around live Elm board state", () => {
    const { shell } = loadShell();
    const html = shell.renderBoardMessage(fixture("board-active-session"));

    for (const marker of [
      'class="shell"',
      'class="hero"',
      'class="mobile-nav"',
      'data-page-target="invite"',
      'data-page-target="boards"',
      'data-page-target="play"',
      'data-page-target="match"',
      'id="joinPanel"',
      'id="boardsPanel"',
      'class="game-layout"',
      'class="board-card mobile-page active"',
      'class="board-stage"',
      'id="pauseOverlay"',
      'id="winnerOverlay"',
      'class="board-replay replay"',
      'id="replayRange"',
      'class="side mobile-page"',
      'class="card scoreboard"',
      'id="seatActions"',
      'id="appMenuDropdown"',
      'id="appContentOverlay"',
      'id="toast"',
    ]) {
      expect(html).toContain(marker);
    }
    expect(html).not.toContain("Traceball Arena — Elm Shell");
  });

  it("renders Home with persisted player name, online setup, and local setup controls", () => {
    const storage = {
      values: new Map([
        ["traceballPlayerName", "Stefan"],
        ["traceballOnlineMoveTimer", "30"],
      ]),
      getItem(key) {
        return this.values.get(key) ?? null;
      },
      setItem(key, value) {
        this.values.set(key, String(value));
      },
    };
    const { shell } = loadShell({ localStorage: storage });

    const html = shell.renderModel(shell.initialModel());

    expect(html).toContain('id="playerNameInput"');
    expect(html).toContain('value="Stefan"');
    expect(html).toContain('id="onlineMode"');
    expect(html).toContain('id="localMode"');
    expect(html).toContain('id="localForm"');
    expect(html).toContain('id="localP1Name"');
    expect(html).toContain('id="localP2Name"');
    expect(html).toContain('id="localMoveTimer"');
    expect(html).toContain('id="onlineMoveTimer"');
    expect(html).toContain('<option value="30" selected>30 seconds</option>');
    expect(html).not.toContain('id="elmPlayerName"');
  });

  it("generates and persists the legacy funny player name when no name is stored", () => {
    const { shell, storage } = loadShell();

    const html = shell.renderModel(shell.initialModel());
    const generatedName = storage.values.get("traceballPlayerName");

    expect(generatedName).toMatch(
      /^(Neon|Turbo|Cosmic|Lucky|Zigzag|Pixel|Rocket|Nimble|Thunder|Glitch) (Striker|Ranger|Falcon|Comet|Dribbler|Phantom|Kicker|Ace|Tiger|Wizard)$/,
    );
    expect(html).toContain(`value="${generatedName}"`);
    expect(html).not.toContain('value="Elm Player"');
  });

  it("migrates the stale Elm Player fallback to a generated funny name", () => {
    const storage = {
      values: new Map([["traceballPlayerName", "Elm Player"]]),
      getItem(key) {
        return this.values.get(key) ?? null;
      },
      setItem(key, value) {
        this.values.set(key, String(value));
      },
    };
    const { shell } = loadShell({ localStorage: storage });

    const html = shell.renderModel(shell.initialModel());
    const generatedName = storage.values.get("traceballPlayerName");

    expect(generatedName).not.toBe("Elm Player");
    expect(generatedName).toMatch(
      /^(Neon|Turbo|Cosmic|Lucky|Zigzag|Pixel|Rocket|Nimble|Thunder|Glitch) (Striker|Ranger|Falcon|Comet|Dribbler|Phantom|Kicker|Ace|Tiger|Wizard)$/,
    );
    expect(html).toContain(`value="${generatedName}"`);
  });

  it("renders online timer metadata in Match and Play without enforcing it client-side", () => {
    const { shell } = loadShell();
    const message = fixture("board-active-session");
    message.board.currentSession.moveTimeLimitSeconds = 30;
    message.board.currentSession.round.deadlineAt = 32000;
    const model = {
      ...shell.applyState(shell.initialModel(), message),
      ownSeat: "p1",
      connectionStatus: "connected",
    };

    const html = shell.renderModel(model);
    const playSection = html.slice(
      html.indexOf('class="board-card mobile-page active"'),
      html.indexOf('<aside class="side mobile-page"'),
    );
    const matchSection = html.slice(
      html.indexOf('<aside class="side mobile-page"'),
    );

    expect(playSection).toContain('data-elm-timer-display');
    expect(playSection).toContain('data-elm-timer-countdown');
    expect(matchSection).toContain(
      "<strong>Timer:</strong> 30s · deadline 32000",
    );
  });

  it("renders a countdown and resets the local move deadline after each local move", () => {
    let now = 1000;
    class FakeDate extends Date {
      constructor(...args) {
        super(...(args.length ? args : [now]));
      }
      static now() {
        return now;
      }
    }
    const { shell } = loadShell({ Date: FakeDate });
    const model = shell.createLocalRuntimeModel({
      blueName: "Stefan",
      redName: "Alex",
      moveTimeLimitSeconds: 10,
    });

    expect(model.board.currentSession.round.deadlineAt).toBe(11000);
    expect(shell.renderModel(model)).toContain('10s left');

    now = 4000;
    const moveKey = model.board.currentSession.round.legalMoves
      .map((move) => `${move.x},${move.y}`)
      .find((key) => key !== "4,6");
    const moved = shell.applyLocalRuntimeMove(model, moveKey);

    expect(moved.board.currentSession.round.turnStartedAt).toBe(4000);
    expect(moved.board.currentSession.round.deadlineAt).toBe(14000);
    expect(shell.renderModel(moved)).toContain('10s left');
  });

  it("freezes local countdown while paused and resumes with the remaining time", () => {
    let now = 1000;
    class FakeDate extends Date {
      constructor(...args) {
        super(...(args.length ? args : [now]));
      }
      static now() {
        return now;
      }
    }
    const { shell } = loadShell({ Date: FakeDate });
    const model = shell.createLocalRuntimeModel({
      blueName: "Stefan",
      redName: "Alex",
      moveTimeLimitSeconds: 10,
    });

    now = 4000;
    const paused = shell.pauseLocalRuntimeModel(model);
    expect(paused.localPaused).toBe(true);
    expect(paused.board.currentSession.pause).toMatchObject({ remainingMs: 7000 });
    expect(paused.board.currentSession.round.deadlineAt).toBe(null);

    now = 20000;
    expect(shell.renderModel(paused)).toContain('7s left');

    const resumed = shell.resumeLocalRuntimeModel(paused);
    expect(resumed.localPaused).toBe(false);
    expect(resumed.board.currentSession.pause).toBe(null);
    expect(resumed.board.currentSession.round.turnStartedAt).toBe(17000);
    expect(resumed.board.currentSession.round.deadlineAt).toBe(27000);
    expect(shell.renderModel(resumed)).toContain('7s left');
  });

  it("shows paused online timer remaining without counting down to zero while paused", () => {
    let now = 20_000;
    class FakeDate extends Date {
      constructor(...args) {
        super(...(args.length ? args : [now]));
      }
      static now() {
        return now;
      }
    }
    const { shell } = loadShell({ Date: FakeDate });
    const message = fixture("board-active-session");
    message.board.state = "SessionPaused";
    message.board.currentSession.state = "Paused";
    message.board.currentSession.moveTimeLimitSeconds = 10;
    message.board.currentSession.pause = { reason: "manual", resumeTurn: "p1", remainingMs: 7000 };
    delete message.board.currentSession.round.deadlineAt;

    const model = shell.applyState(shell.initialModel(), message);

    expect(shell.renderModel(model)).toContain('7s left');
  });

  it("renders the current created/joined board in Boards tab and restores share link plus QR", () => {
    const { shell } = loadShell({
      location: {
        protocol: "https:",
        host: "traceball.test",
        search: "?board=ROOM123",
      },
    });
    const model = {
      ...shell.applyState(
        shell.initialModel(),
        fixture("board-active-session"),
      ),
      ownSeat: "p1",
    };

    const html = shell.renderModel(model);
    const homeSection = html.slice(
      html.indexOf('id="joinPanel"'),
      html.indexOf('id="boardsPanel"'),
    );
    const boardsSection = html.slice(
      html.indexOf('id="boardsPanel"'),
      html.indexOf('<section class="game-layout"'),
    );

    expect(homeSection).toContain('id="inviteBox"');
    expect(homeSection).toContain('id="inviteLink"');
    expect(homeSection).toContain(
      'value="https://traceball.test/room/ROOM123"',
    );
    expect(homeSection).toContain('id="copyInviteCard"');
    expect(homeSection).toContain('id="qr"');
    expect(homeSection).toContain("/api/qr?url=");

    expect(boardsSection).toContain("data-elm-board-list");
    expect(boardsSection).toContain('data-elm-board-card="ROOM123"');
    expect(boardsSection).toContain("Open board");
  });

  it("renders viewer role and connection info in match sidebar details (HUD removed from play area)", () => {
    const { shell } = loadShell();
    const model = {
      ...shell.applyState(
        shell.initialModel(),
        fixture("board-active-session"),
      ),
      ownSeat: "p1",
      connectionStatus: "connected",
    };
    const html = shell.renderModel(model);
    const playSection = html.slice(
      html.indexOf('class="board-card mobile-page active"'),
      html.indexOf('<aside class="side mobile-page"'),
    );
    const matchSection = html.slice(
      html.indexOf('<aside class="side mobile-page"'),
    );

    expect(playSection).not.toContain("data-elm-board-hud");
    expect(matchSection).toContain("data-elm-match-details");
    expect(matchSection).toContain("Blue player");
    expect(matchSection).toContain("Connection:");
  });

  it("keeps Play focused on board/replay/leave and moves join controls to Match/Home", () => {
    const { shell } = loadShell();
    const oneSeat = shell.applyState(
      shell.initialModel(),
      fixture("board-creator-only"),
    );
    const oneSeatHtml = shell.renderModel(oneSeat);
    const playSection = oneSeatHtml.slice(
      oneSeatHtml.indexOf('class="board-card mobile-page active"'),
      oneSeatHtml.indexOf('<aside class="side mobile-page"'),
    );

    expect(playSection).toContain('class="board-stage"');
    expect(playSection).toContain('class="board-replay replay"');
    expect(playSection).not.toContain('id="playClaimP2"');
    expect(playSection).not.toContain("data-elm-actions");
    expect(playSection).not.toContain('class="elm-seats"');
    expect(playSection).not.toContain("data-elm-round-result");

    expect(oneSeatHtml).toContain('id="claimP2" class="ghost"');
    expect(oneSeatHtml).toContain('data-elm-command="claim-red"');

    const seated = {
      ...shell.applyState(
        shell.initialModel(),
        fixture("board-active-session"),
      ),
      ownSeat: "p1",
    };
    const seatedHtml = shell.renderModel(seated);
    const seatedPlay = seatedHtml.slice(
      seatedHtml.indexOf('class="board-card mobile-page active"'),
      seatedHtml.indexOf('<aside class="side mobile-page"'),
    );
    expect(seatedPlay).toContain('class="board-stage"');
    expect(seatedHtml).toContain('data-elm-command="leave-seat"');
  });

  it("wires Phase 9 visible shell buttons to existing Elm bridge commands", () => {
    const sent = [];
    const shellActions = {
      handler: null,
      addEventListener(type, handler) {
        if (type === "click") this.handler = handler;
      },
    };
    const { shell, root } = loadShell({
      document: {
        body: { dataset: {}, classList: { toggle() {} } },
        querySelector: (selector) =>
          selector === "[data-elm-shell-actions]" ? shellActions : null,
        querySelectorAll: () => [],
      },
    });
    const base = shell.applyState(
      shell.initialModel(),
      fixture("board-creator-only"),
    );
    const bridge = {
      model: { ...base, ownSeat: null },
      claimSeat(seatId, name) {
        sent.push({ type: "claimSeat", seatId, name });
        return true;
      },
      joinWaitingList(name) {
        sent.push({ type: "joinWaitingList", name });
        return true;
      },
      leaveWaitingList() {
        sent.push({ type: "leaveWaitingList" });
        return true;
      },
      leaveSeat() {
        sent.push({ type: "leave" });
        return true;
      },
      newRound() {
        sent.push({ type: "reset" });
        return true;
      },
    };

    shell.wirePhase9ShellActions(root, bridge);
    shellActions.handler({
      target: { dataset: { elmCommand: "claim-red" } },
      preventDefault() {},
    });

    expect(sent).toHaveLength(1);
    expect(sent[0]).toMatchObject({ type: "claimSeat", seatId: "p2" });
    expect(sent[0].name).toMatch(
      /^(Neon|Turbo|Cosmic|Lucky|Zigzag|Pixel|Rocket|Nimble|Thunder|Glitch) (Striker|Ranger|Falcon|Comet|Dribbler|Phantom|Kicker|Ace|Tiger|Wizard)$/,
    );
    expect(root.innerHTML).toContain("Board ROOM123");
  });

  it("shows a winner overlay and winner name when a round has ended", () => {
    const { shell } = loadShell();
    const message = fixture("board-active-session");
    message.board.currentSession.round.winner = "p2";
    message.board.currentSession.round.endReason =
      "Red scored in the local match.";

    const html = shell.renderBoardMessage(message);

    expect(html).toContain('id="winnerOverlay"');
    expect(html).toContain('class="winner-overlay"');
    expect(html).not.toContain('class="winner-overlay hidden"');
    expect(html).toContain("Red");
    expect(html).toContain("Winner");
  });

  it("renders richer board-art markers and legacy-style field details", () => {
    const { shell } = loadShell();

    const html = shell.renderBoardMessage(fixture("board-active-session"));

    expect(html).toContain("data-elm-board-svg");
    expect(html).toContain('data-elm-flag="0,1"');
    expect(html).toContain('data-elm-flag="8,11"');
    expect(html).toContain("data-elm-board-canvas");
    expect(html).toContain('data-elm-ball-crest="true"');
    expect(html).toContain('data-elm-legal-move="3,5"');
    expect(html).toContain('data-elm-gate="blue"');
    expect(html).toContain('data-elm-gate="red"');
  });

  it("renders a winner gate confetti burst when the round ends", () => {
    const { shell } = loadShell();
    const message = fixture("board-active-session");
    message.board.currentSession.round.winner = "p2";
    const html = shell.renderBoardMessage(message);

    // Confetti animates on canvas overlay, not in SVG
    expect(html).toContain("data-elm-board-canvas");
    expect(html).toContain('data-elm-gate="red"');
    expect(html).toContain('id="winnerOverlay"');
  });

  it("renders a read-only SVG board with grid, gates, ball, and live legal-move overlay", () => {
    const { shell } = loadShell();

    const html = shell.renderBoardMessage(fixture("board-active-session"));

    expect(html).toContain("data-elm-board-svg");
    expect(html).toContain('viewBox="0 0 900 1300"');
    expect(html).toMatch(/aria-label="[^"]*read-only Traceball board"/i);
    expect(html).toContain('data-elm-ball="4,6"');
    expect(html).toContain('data-elm-legal-move="3,5"');
    expect(html).toContain('data-elm-gate="blue"');
    expect(html).toContain('data-elm-gate="red"');
    expect(html).toContain('data-elm-gate-bounce="4,1"');
    expect(html).toContain('data-elm-gate-bounce="4,11"');
  });

  it("renders read-only traced move segments from the canonical round state", () => {
    const { shell } = loadShell();
    const message = fixture("board-active-session");
    const round = message.board.currentSession.round;
    round.ball = { x: 5, y: 5 };
    round.visited = ["4,6", "5,5"];
    round.segments = ["4,6|5,5"];
    round.moves = [
      {
        playerId: "p1",
        from: { x: 4, y: 6 },
        to: { x: 5, y: 5 },
        segment: "4,6|5,5",
        bounce: false,
        at: 2100,
      },
    ];

    const html = shell.renderBoardMessage(message);

    expect(html).toContain('data-elm-segment="4,6|5,5"');
    expect(html).toContain('data-elm-visited="5,5"');
    expect(html).toContain('data-elm-ball="5,5"');
  });

  it("renders legal moves as read-only watcher hints when the viewer is not seated", () => {
    const { shell } = loadShell();

    const html = shell.renderBoardMessage(fixture("board-active-session"));

    expect(html).toContain('data-elm-legal-context="watcher"');
    expect(html).toContain('data-elm-legal-move-state="preview"');
    expect(html).toContain("Watching: legal moves are preview only.");
    expect(html).not.toContain('data-elm-legal-playable="true"');
  });

  it("distinguishes own-turn legal move hints from waiting-for-opponent hints", () => {
    const { shell } = loadShell();
    const message = fixture("board-active-session");

    const ownTurn = shell.renderModel({
      ...shell.applyState(shell.initialModel(), message),
      ownSeat: "p1",
    });
    const waitingTurn = shell.renderModel({
      ...shell.applyState(shell.initialModel(), message),
      ownSeat: "p2",
    });

    expect(ownTurn).toContain('data-elm-legal-context="own-turn"');
    expect(ownTurn).toContain('data-elm-legal-playable="true"');
    expect(ownTurn).toContain(
      "Your legal moves. Tap a highlighted point to move.",
    );

    expect(waitingTurn).toContain('data-elm-legal-context="opponent-turn"');
    expect(waitingTurn).toContain('data-elm-legal-move-state="waiting"');
    expect(waitingTurn).toContain(
      "Opponent turn: legal moves shown for orientation.",
    );
    expect(waitingTurn).not.toContain('data-elm-legal-playable="true"');
  });

  it("renders pending move feedback as a one-shot animation without continuous pulsing", () => {
    const { shell } = loadShell();
    const model = {
      ...shell.applyState(
        shell.initialModel(),
        fixture("board-active-session"),
      ),
      ownSeat: "p1",
      pendingMoveKey: "4,5",
    };

    const html = shell.renderModel(model);

    expect(html).toContain('data-elm-pending-move="4,5"');
    expect(html).toContain('data-elm-move-feedback="pending"');
    expect(html).toContain("elm-legal-pending");
    expect(cssSource).toContain(".elm-legal-pending");
    expect(cssSource).toContain("@keyframes elm-move-confirm-once");
    expect(cssSource).not.toMatch(/elm-legal-pending[\s\S]{0,260}infinite/);
  });

  it("submits a server-authoritative move from an own-turn Elm legal target", () => {
    const sent = [];
    const sockets = [];
    const legalLayer = {
      handler: null,
      addEventListener(type, handler) {
        if (type === "click") this.handler = handler;
      },
    };
    const target = {
      dataset: { elmLegalMove: "3,5", elmLegalPlayable: "true" },
      closest(selector) {
        return selector === "[data-elm-legal-move]" ? this : null;
      },
    };
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) {
        sent.push(JSON.parse(payload));
      }
      close() {
        this.closed = true;
      }
    }

    const { shell, root } = loadShell({
      WebSocket: FakeWebSocket,
      document: {
        querySelector: (selector) =>
          selector === '[data-elm-legal-context="own-turn"]'
            ? legalLayer
            : null,
      },
    });
    const bridge = shell.createSocketBridge({ boardCode: "ROOM123", root });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify(fixture("board-active-session")),
    });
    bridge.model = { ...bridge.model, ownSeat: "p1" };
    root.innerHTML = shell.renderModel(bridge.model);
    shell.wireBoardMoveTargets(root, bridge);

    legalLayer.handler({
      target,
      preventDefault() {
        this.prevented = true;
      },
    });

    expect(sent.at(-1)).toEqual({ type: "move", to: { x: 3, y: 5 } });
    expect(bridge.model.pendingMoveKey).toBe("3,5");
  });

  it("does not submit Elm board moves while watching or waiting for the opponent", () => {
    const sent = [];
    const { shell } = loadShell();
    const base = shell.applyState(
      shell.initialModel(),
      fixture("board-active-session"),
    );
    const bridge = {
      boardCode: "ROOM123",
      clientId: "traceball-elm-test",
      model: { ...base, ownSeat: null },
      sendCommand(command) {
        sent.push(command);
        return true;
      },
    };

    expect(shell.submitMoveFromLegalTarget(bridge, "3,5")).toBe(false);
    bridge.model = { ...base, ownSeat: "p2" };
    expect(shell.submitMoveFromLegalTarget(bridge, "3,5")).toBe(false);
    bridge.model = { ...base, ownSeat: "p1" };
    expect(shell.submitMoveFromLegalTarget(bridge, "not-a-point")).toBe(false);

    expect(sent).toEqual([]);
  });

  it("renders a between-round result panel with score and seated-player new-round control", () => {
    const { shell } = loadShell();
    const base = shell.applyState(
      shell.initialModel(),
      fixture("board-between-rounds"),
    );

    const watcherHtml = shell.renderModel({ ...base, ownSeat: null });
    const seatedHtml = shell.renderModel({ ...base, ownSeat: "p1" });

    expect(seatedHtml).toContain("data-elm-round-result");
    expect(seatedHtml).toContain("Blue wins this round");
    expect(seatedHtml).toContain("p1 scored!");
    expect(seatedHtml).toContain("Blue 1 — Red 0");
    expect(seatedHtml).toContain('data-elm-command="new-round"');
    expect(seatedHtml).toContain("Continue / New Round");
    expect(watcherHtml).toContain("Waiting for a seated player to continue.");
    expect(watcherHtml).not.toContain('data-elm-command="new-round"');
  });

  it("sends reset only from a seated player between rounds", () => {
    const sent = [];
    const { shell } = loadShell();
    const base = shell.applyState(
      shell.initialModel(),
      fixture("board-between-rounds"),
    );
    const bridge = {
      model: { ...base, ownSeat: null },
      newRound() {
        sent.push({ type: "reset" });
        return true;
      },
    };

    expect(shell.submitNewRound(bridge)).toBe(false);
    bridge.model = { ...base, ownSeat: "p1" };
    expect(shell.submitNewRound(bridge)).toBe(true);

    expect(sent).toEqual([{ type: "reset" }]);
    expect(bridge.model.pendingNewRound).toBe(true);
  });

  it("wires the between-round Continue/New Round button to the reset command", () => {
    const sent = [];
    const roundActions = {
      handler: null,
      addEventListener(type, handler) {
        if (type === "click") this.handler = handler;
      },
    };
    const target = { dataset: { elmCommand: "new-round" } };
    const { shell, root } = loadShell({
      document: {
        querySelector: (selector) =>
          selector === "[data-elm-round-actions]" ? roundActions : null,
      },
    });
    const base = shell.applyState(
      shell.initialModel(),
      fixture("board-between-rounds"),
    );
    const bridge = {
      model: { ...base, ownSeat: "p1" },
      newRound() {
        sent.push({ type: "reset" });
        return true;
      },
    };

    shell.wireRoundActions(root, bridge);
    roundActions.handler({
      target,
      preventDefault() {
        this.prevented = true;
      },
    });

    expect(sent).toEqual([{ type: "reset" }]);
    expect(root.innerHTML).toContain("Starting next round…");
  });

  it("renders Phase 7 disconnected-seat grace and free-seat recovery controls only for the seated opponent", () => {
    const { shell } = loadShell();
    const during = shell.applyState(
      shell.initialModel(),
      fixture("board-disconnected-player-during-grace"),
    );
    const eligible = shell.applyState(
      shell.initialModel(),
      fixture("board-disconnected-player-eligible-to-free"),
    );

    const watcherDuringGrace = shell.renderModel({ ...during, ownSeat: null });
    const opponentDuringGrace = shell.renderModel({ ...during, ownSeat: "p1" });
    const opponentAfterGrace = shell.renderModel({
      ...eligible,
      ownSeat: "p1",
    });
    const disconnectedOwnView = shell.renderModel({
      ...eligible,
      ownSeat: "p2",
    });

    expect(opponentDuringGrace).toContain('data-elm-disconnected-seat="red"');
    expect(opponentDuringGrace).toContain(
      "Friend disconnected. Seat reserved during grace.",
    );
    expect(opponentDuringGrace).toContain("Make seat available in 60s");
    expect(opponentDuringGrace).not.toContain('data-elm-command="free-seat"');

    expect(opponentAfterGrace).toContain('data-elm-command="free-seat"');
    expect(opponentAfterGrace).toContain('data-elm-seat="p2"');
    expect(opponentAfterGrace).toContain("Make Red seat available");
    expect(watcherDuringGrace).not.toContain('data-elm-command="free-seat"');
    expect(disconnectedOwnView).toContain(
      "Your seat is reserved — reconnect from the same browser to reclaim it.",
    );
  });

  it("sends freeSeat only for a seated opponent whose disconnected grace expired", () => {
    const sent = [];
    const { shell } = loadShell();
    const eligible = shell.applyState(
      shell.initialModel(),
      fixture("board-disconnected-player-eligible-to-free"),
    );
    const during = shell.applyState(
      shell.initialModel(),
      fixture("board-disconnected-player-during-grace"),
    );
    const bridge = {
      model: { ...eligible, ownSeat: null },
      freeSeat(seatId) {
        sent.push({ type: "freeSeat", seatId });
        return true;
      },
    };

    expect(shell.submitFreeDisconnectedSeat(bridge, "p2")).toBe(false);
    bridge.model = { ...during, ownSeat: "p1" };
    expect(shell.submitFreeDisconnectedSeat(bridge, "p2")).toBe(false);
    bridge.model = { ...eligible, ownSeat: "p2" };
    expect(shell.submitFreeDisconnectedSeat(bridge, "p2")).toBe(false);
    bridge.model = { ...eligible, ownSeat: "p1" };
    expect(shell.submitFreeDisconnectedSeat(bridge, "p2")).toBe(true);

    expect(sent).toEqual([{ type: "freeSeat", seatId: "p2" }]);
    expect(bridge.model.pendingFreeSeat).toBe("p2");
  });

  it("wires Phase 7 Make seat available clicks to the freeSeat command", () => {
    const sent = [];
    const recoveryActions = {
      handler: null,
      addEventListener(type, handler) {
        if (type === "click") this.handler = handler;
      },
    };
    const target = { dataset: { elmCommand: "free-seat", elmSeat: "p2" } };
    const { shell, root } = loadShell({
      document: {
        querySelector: (selector) =>
          selector === "[data-elm-disconnect-actions]" ? recoveryActions : null,
      },
    });
    const eligible = shell.applyState(
      shell.initialModel(),
      fixture("board-disconnected-player-eligible-to-free"),
    );
    const bridge = {
      model: { ...eligible, ownSeat: "p1" },
      freeSeat(seatId) {
        sent.push({ type: "freeSeat", seatId });
        return true;
      },
    };

    shell.wireDisconnectActions(root, bridge);
    recoveryActions.handler({
      target,
      preventDefault() {
        this.prevented = true;
      },
    });

    expect(sent).toEqual([{ type: "freeSeat", seatId: "p2" }]);
    expect(root.innerHTML).toContain("Making seat available…");
  });

  it("keeps the newer model when a stale state message arrives", () => {
    const { shell } = loadShell();
    const current = shell.applyState(
      shell.initialModel(),
      fixture("board-active-session"),
    );
    const stale = fixture("board-creator-only");
    stale.version = current.version;
    stale.board.version = current.version;

    const next = shell.applyState(current, stale);

    expect(next.version).toBe(current.version);
    expect(next.board.state).toBe("SessionActive");
    expect(next.ignoredStaleVersion).toBe(stale.version);
  });

  it("returns a controlled error for malformed state and not-found messages", () => {
    const { shell } = loadShell();

    const bad = shell.applyState(shell.initialModel(), {
      type: "state",
      version: 3,
      boardCode: "BAD",
    });
    expect(bad.error).toContain("missing board");

    const notFound = shell.applyState(
      shell.initialModel(),
      fixture("board-not-found"),
    );
    expect(notFound.error).toContain("Board not found");
    const notFoundHtml = shell.renderModel(notFound);
    expect(notFoundHtml).toContain("data-elm-board-recovery");
    expect(notFoundHtml).toContain("Create a fresh board");
  });

  it("renders Phase 8 board list cards with status, occupancy, activity, expiry, and Elm links", () => {
    const { shell } = loadShell();
    const html = shell.renderBoardList([
      {
        roomId: "ROOM123",
        elmUrl: "/elm?board=ROOM123",
        state: "SessionActive",
        status: "playing",
        occupancy: { activeCount: 2, vacantCount: 0 },
        score: { p1: 2, p2: 1 },
        moveCount: 7,
        lastActivityAt: 2000,
        expiresAt: 604802000,
      },
      {
        roomId: "OPEN456",
        elmUrl: "/elm?board=OPEN456",
        state: "WaitingForPlayers",
        occupancy: { activeCount: 1, vacantCount: 1 },
        lastActivityAt: 1000,
        expiresAt: 604801000,
      },
    ]);

    expect(html).toContain("data-elm-board-list");
    expect(html).toContain('data-elm-board-card="ROOM123"');
    expect(html).toContain("SessionActive");
    expect(html).toContain("2 seated · 0 open");
    expect(html).toContain("Score Blue 2 — Red 1");
    expect(html).toContain("Last activity");
    expect(html).toContain("Expires");
    expect(html).toContain('href="/elm?board=ROOM123"');
    expect(html).toContain("Open board");
  });

  it("loads active online boards into the Boards tab without replacing the whole shell", async () => {
    const { shell, root } = loadShell({
      fetch: async (url) => {
        expect(url).toBe("/api/rooms");
        return {
          ok: true,
          json: async () => ({
            rooms: [
              {
                roomId: "ROOM123",
                elmUrl: "/elm?board=ROOM123",
                state: "WaitingForPlayers",
                occupancy: { activeCount: 0, vacantCount: 2 },
                lastActivityAt: 1000,
                expiresAt: 604801000,
              },
            ],
          }),
        };
      },
    });
    root.innerHTML = shell.renderModel(shell.initialModel());

    await shell.loadBoardList(root);

    expect(root.innerHTML).toContain('id="boardsPanel"');
    expect(root.innerHTML).toContain("data-elm-board-list");
    expect(root.innerHTML).toContain('data-elm-board-card="ROOM123"');
    expect(root.innerHTML).toContain('href="/elm?board=ROOM123"');
    expect(root.innerHTML).toContain('id="joinPanel"');
    expect(root.innerHTML).toContain('class="board-card mobile-page active"');
  });

  it("keeps Boards panel active on mobile when refreshing board list", async () => {
    const { shell, root } = loadShell({
      document: {
        body: { dataset: { mobilePage: "boards" } },
        querySelector: () => null,
      },
      fetch: async () => ({
        ok: true,
        json: async () => ({ rooms: [] }),
      }),
    });

    root.innerHTML = shell.renderModel(shell.initialModel());

    await shell.loadBoardList(root);

    expect(root.innerHTML).toContain(
      'id="boardsPanel" class="card boards-panel mobile-page active"',
    );
    expect(root.innerHTML).toContain("No public boards right now");
  });

  it("preserves an Elm client id through localStorage for WebSocket handoff", () => {
    const { shell, storage } = loadShell();

    const first = shell.getOrCreateClientId();
    const second = shell.getOrCreateClientId();

    expect(first).toMatch(/^traceball-elm-/);
    expect(second).toBe(first);
    expect(storage.getItem("traceballElmClientId")).toBe(first);
  });

  it("opens a board as watcher over WebSocket and applies live state", () => {
    const sent = [];
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor(url) {
        this.url = url;
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) {
        sent.push(JSON.parse(payload));
      }
      close() {
        this.closed = true;
      }
    }

    const { shell } = loadShell({ WebSocket: FakeWebSocket });
    const bridge = shell.createSocketBridge({
      boardCode: "ROOM123",
      root: { innerHTML: "" },
    });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify(fixture("board-active-session")),
    });

    expect(sockets[0].url).toBe("wss://example.test/ws");
    expect(sent[0]).toMatchObject({
      type: "watch",
      roomId: "ROOM123",
      clientId: bridge.clientId,
    });
    expect(bridge.model.board.state).toBe("SessionActive");
    expect(bridge.model.connectionStatus).toBe("connected");
  });

  it("shows Play badge and toast on live updates when mobile view is not on Play", () => {
    const sent = [];
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) {
        sent.push(JSON.parse(payload));
      }
      close() {
        this.closed = true;
      }
    }

    const playTab = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
      removeAttribute(key) {
        this.attrs.delete(key);
      },
    };
    const lobbyBtn = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
      removeAttribute(key) {
        this.attrs.delete(key);
      },
    };
    const toast = {
      textContent: "",
      classList: { add() {}, remove() {} },
    };
    const body = { dataset: { mobilePage: "boards" } };
    const documentStub = {
      body,
      querySelector(selector) {
        if (selector === "#elm-root") return null;
        if (selector === '[data-page-target="play"]') return playTab;
        if (selector === ".hero-lobby-btn") return lobbyBtn;
        if (selector === "#toast") return toast;
        if (selector === "[data-elm-lobby-open='true']") return null;
        return null;
      },
    };

    const { shell } = loadShell({
      WebSocket: FakeWebSocket,
      document: documentStub,
    });
    shell.createSocketBridge({ boardCode: "ROOM123", root: { innerHTML: "" } });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify(fixture("board-active-session")),
    });

    expect(playTab.attrs.has("data-badge")).toBe(true);
    expect(lobbyBtn.attrs.has("data-badge")).toBe(false);
    expect(toast.textContent).toContain("Turn:");
    expect(body.dataset.mobilePage).toBe("boards");
    expect(sent[0]).toMatchObject({ type: "watch", roomId: "ROOM123" });
  });

  it("shows Game badge and toast on live updates when desktop lobby is open", () => {
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send() {}
      close() {
        this.closed = true;
      }
    }

    const playTab = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
      removeAttribute(key) {
        this.attrs.delete(key);
      },
    };
    const lobbyBtn = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
      removeAttribute(key) {
        this.attrs.delete(key);
      },
    };
    const toast = {
      textContent: "",
      classList: { add() {}, remove() {} },
    };
    const shellOpen = { getAttribute: () => "true" };
    const documentStub = {
      body: { dataset: { mobilePage: "play" } },
      querySelector(selector) {
        if (selector === "#elm-root") return null;
        if (selector === '[data-page-target="play"]') return playTab;
        if (selector === ".hero-lobby-btn") return lobbyBtn;
        if (selector === "#toast") return toast;
        if (selector === "[data-elm-lobby-open='true']") return shellOpen;
        return null;
      },
    };

    const { shell } = loadShell({
      WebSocket: FakeWebSocket,
      document: documentStub,
    });
    shell.createSocketBridge({ boardCode: "ROOM123", root: { innerHTML: "" } });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify(fixture("board-active-session")),
    });

    expect(lobbyBtn.attrs.has("data-badge")).toBe(true);
    expect(playTab.attrs.has("data-badge")).toBe(false);
    expect(toast.textContent).toContain("Turn:");
  });

  it("shows notification when a new move arrives even if turn does not change", () => {
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send() {}
      close() {
        this.closed = true;
      }
    }

    const playTab = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
      removeAttribute(key) {
        this.attrs.delete(key);
      },
    };
    const lobbyBtn = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
      removeAttribute(key) {
        this.attrs.delete(key);
      },
    };
    const toast = {
      textContent: "",
      classList: { add() {}, remove() {} },
    };
    const body = { dataset: { mobilePage: "boards" } };
    const documentStub = {
      body,
      querySelector(selector) {
        if (selector === "#elm-root") return null;
        if (selector === '[data-page-target="play"]') return playTab;
        if (selector === ".hero-lobby-btn") return lobbyBtn;
        if (selector === "#toast") return toast;
        if (selector === "[data-elm-lobby-open='true']") return null;
        return null;
      },
    };

    const { shell } = loadShell({
      WebSocket: FakeWebSocket,
      document: documentStub,
    });
    shell.createSocketBridge({ boardCode: "ROOM123", root: { innerHTML: "" } });
    sockets[0].onopen();

    const first = fixture("board-active-session");
    sockets[0].onmessage({ data: JSON.stringify(first) });

    const second = fixture("board-active-session");
    second.version = 3;
    second.board.version = 3;
    second.board.currentSession.round.moves = [
      {
        from: { x: 4, y: 6 },
        to: { x: 4, y: 5 },
        playerId: "red",
      },
    ];
    second.board.currentSession.round.turn = "blue";
    sockets[0].onmessage({ data: JSON.stringify(second) });

    expect(playTab.attrs.has("data-badge")).toBe(true);
    expect(toast.textContent).toBe("Move: Red");
  });

  it("keeps the current mobile page on live updates instead of forcing Play", () => {
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send() {}
      close() {
        this.closed = true;
      }
    }

    const shellNode = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
    };
    const lobbyBtn = { textContent: "Lobby" };
    const body = { dataset: { mobilePage: "match" } };
    const documentStub = {
      body,
      querySelector(selector) {
        if (selector === "#elm-root") return null;
        if (selector === "[data-elm-shell-actions]") return shellNode;
        if (selector === ".hero-lobby-btn") return lobbyBtn;
        if (selector === "[data-elm-lobby-open='true']") return null;
        return null;
      },
    };

    const { shell } = loadShell({
      WebSocket: FakeWebSocket,
      document: documentStub,
    });
    shell.createSocketBridge({ boardCode: "ROOM123", root: { innerHTML: "" } });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify(fixture("board-active-session")),
    });

    expect(body.dataset.mobilePage).toBe("match");
    expect(shellNode.attrs.get("data-elm-lobby-open")).toBe("false");
    expect(lobbyBtn.textContent).toBe("Lobby");
  });

  it("keeps desktop lobby open on live updates instead of forcing game view", () => {
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send() {}
      close() {
        this.closed = true;
      }
    }

    let lobbyOpenState = true;
    const shellNode = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
        if (key === "data-elm-lobby-open") lobbyOpenState = value === "true";
      },
    };
    const lobbyBtn = { textContent: "Game" };
    const documentStub = {
      body: { dataset: { mobilePage: "play" } },
      querySelector(selector) {
        if (selector === "#elm-root") return null;
        if (selector === "[data-elm-shell-actions]") return shellNode;
        if (selector === ".hero-lobby-btn") return lobbyBtn;
        if (selector === "[data-elm-lobby-open='true']")
          return lobbyOpenState ? shellNode : null;
        return null;
      },
    };

    const { shell } = loadShell({
      WebSocket: FakeWebSocket,
      document: documentStub,
    });
    shell.createSocketBridge({ boardCode: "ROOM123", root: { innerHTML: "" } });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify(fixture("board-active-session")),
    });

    expect(shellNode.attrs.get("data-elm-lobby-open")).toBe("true");
    expect(lobbyBtn.textContent).toBe("Game");
  });

  it("keeps desktop lobby open on background or top-bar clicks", () => {
    const listeners = {};
    const shellNode = {
      attrs: new Map([["data-elm-lobby-open", "true"]]),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
    };
    const documentStub = {
      querySelector(selector) {
        if (selector === "#elm-root") return null;
        if (selector === "[data-elm-lobby-open='true']") return shellNode;
        return null;
      },
      addEventListener(type, handler) {
        listeners[type] = handler;
      },
    };
    const { shell } = loadShell({ document: documentStub });
    shell.wireLobbyDrawer();

    listeners.click({ target: { closest: () => null } });
    expect(shellNode.attrs.get("data-elm-lobby-open")).toBe("true");

    listeners.keydown({ key: "Escape" });
    expect(shellNode.attrs.get("data-elm-lobby-open")).toBe("false");
  });

  it("exposes board-centric seating commands without a generic Join Game action", () => {
    const sent = [];
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) {
        sent.push(JSON.parse(payload));
      }
      close() {
        this.closed = true;
      }
    }

    const { shell, root } = loadShell({ WebSocket: FakeWebSocket });
    const bridge = shell.createSocketBridge({ boardCode: "ROOM123", root });
    sockets[0].onopen();
    sockets[0].onmessage({
      data: JSON.stringify(fixture("board-creator-only")),
    });

    expect(root.innerHTML).toContain("Join Red");
    expect(root.innerHTML).not.toContain("Join Game");
    expect(sent).toHaveLength(1);
    expect(sent[0]).toMatchObject({
      type: "watch",
      roomId: "ROOM123",
      clientId: bridge.clientId,
    });
    expect(bridge.model.ownSeat).toBe(null);

    bridge.claimSeat("p1", "Elm Blue");
    bridge.claimSeat("p2", "Elm Red");
    bridge.joinWaitingList("Elm Waiter");
    bridge.leaveWaitingList();
    bridge.leaveSeat();

    expect(sent.slice(1)).toEqual([
      {
        type: "claimSeat",
        roomId: "ROOM123",
        seatId: "p1",
        name: "Elm Blue",
        clientId: bridge.clientId,
      },
      {
        type: "claimSeat",
        roomId: "ROOM123",
        seatId: "p2",
        name: "Elm Red",
        clientId: bridge.clientId,
      },
      {
        type: "joinWaitingList",
        roomId: "ROOM123",
        name: "Elm Waiter",
        clientId: bridge.clientId,
      },
      {
        type: "leaveWaitingList",
        roomId: "ROOM123",
        clientId: bridge.clientId,
      },
      { type: "leave" },
    ]);
  });

  it("creates a board and immediately claims Blue for the creator", async () => {
    const { shell: renderShell } = loadShell();
    expect(renderShell.renderModel(renderShell.initialModel())).toContain(
      "Create board as Blue",
    );

    const sent = [];
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) {
        sent.push(JSON.parse(payload));
      }
      close() {
        this.closed = true;
      }
    }

    let createBody;
    const { shell, root } = loadShell({
      WebSocket: FakeWebSocket,
      fetch: async (url, options) => {
        expect(url).toBe("/api/rooms");
        expect(options.method).toBe("POST");
        createBody = JSON.parse(options.body);
        return { ok: true, json: async () => ({ roomId: "NEW12345" }) };
      },
    });

    const bridge = await shell.createBoardAsBlue({
      root,
      name: "Creator",
      moveTimeLimitSeconds: 30,
    });
    sockets[0].onopen();

    expect(bridge.boardCode).toBe("NEW12345");
    expect(createBody).toEqual({ moveTimeLimitSeconds: 30 });
    expect(sent).toEqual([
      { type: "watch", roomId: "NEW12345", clientId: bridge.clientId },
      {
        type: "claimSeat",
        roomId: "NEW12345",
        seatId: "p1",
        name: "Creator",
        clientId: bridge.clientId,
      },
    ]);
  });

  it("renders replay step state and projects board segments for the selected move index", () => {
    const { shell } = loadShell();
    const message = fixture("board-active-session");
    message.board.currentSession.round.moves = [
      {
        playerId: "p1",
        from: { x: 4, y: 6 },
        to: { x: 5, y: 6 },
        segment: "4,6|5,6",
        bounce: false,
        at: 1,
      },
      {
        playerId: "p2",
        from: { x: 5, y: 6 },
        to: { x: 5, y: 7 },
        segment: "5,6|5,7",
        bounce: false,
        at: 2,
      },
    ];
    message.board.currentSession.round.segments = ["4,6|5,6", "5,6|5,7"];
    message.board.currentSession.round.visited = ["4,6", "5,6", "5,7"];
    message.board.currentSession.round.ball = { x: 5, y: 7 };
    message.board.currentSession.round.legalMoves = [{ x: 4, y: 7 }];

    const model = {
      ...shell.applyState(shell.initialModel(), message),
      ownSeat: "p1",
      replayIndex: 1,
    };

    const html = shell.renderModel(model);

    expect(html).toContain("Replay 1 / 2");
    expect(html).toContain('data-elm-segment="4,6|5,6"');
    expect(html).not.toContain('data-elm-segment="5,6|5,7"');
    expect(html).toContain(
      'id="replayRange" type="range" min="0" max="2" value="1"',
    );
  });

  it("wires replay commands to change replay index and return to live view", () => {
    const shellActions = {
      handler: null,
      addEventListener(type, handler) {
        if (type === "click") this.handler = handler;
      },
    };
    const { shell, root } = loadShell({
      document: {
        querySelector: (selector) =>
          selector === "[data-elm-shell-actions]" ? shellActions : null,
        querySelectorAll: () => [],
      },
    });
    const message = fixture("board-active-session");
    message.board.currentSession.round.moves = [
      {
        playerId: "p1",
        from: { x: 4, y: 6 },
        to: { x: 5, y: 6 },
        segment: "4,6|5,6",
        bounce: false,
        at: 1,
      },
      {
        playerId: "p2",
        from: { x: 5, y: 6 },
        to: { x: 5, y: 7 },
        segment: "5,6|5,7",
        bounce: false,
        at: 2,
      },
    ];
    message.board.currentSession.round.segments = ["4,6|5,6", "5,6|5,7"];
    message.board.currentSession.round.visited = ["4,6", "5,6", "5,7"];
    message.board.currentSession.round.ball = { x: 5, y: 7 };
    message.board.currentSession.round.legalMoves = [{ x: 4, y: 7 }];
    const base = shell.applyState(shell.initialModel(), message);
    const bridge = { model: { ...base, ownSeat: "p1" } };

    shell.wirePhase9ShellActions(root, bridge);
    shellActions.handler({
      target: { dataset: { elmCommand: "replay-start" } },
      preventDefault() {},
    });
    expect(bridge.model.replayIndex).toBe(0);
    expect(root.innerHTML).toContain("Replay 0 / 2");

    shellActions.handler({
      target: { dataset: { elmCommand: "replay-end" } },
      preventDefault() {},
    });
    expect(bridge.model.replayIndex).toBe(null);
    expect(root.innerHTML).toContain("Live view at move 2 / 2");
  });

  it("starts a local same-screen runtime bridge and renders a local board shell", () => {
    const { shell, root } = loadShell();

    const bridge = shell.createLocalBridge({
      root,
      blueName: "Stefan",
      redName: "Alex",
      moveTimeLimitSeconds: 10,
    });

    expect(bridge.model.localRuntime).toBe(true);
    expect(bridge.model.board.code).toBe("LOCAL");
    expect(root.innerHTML).toContain('data-elm-runtime="local"');
    expect(root.innerHTML).toContain("Stefan");
    expect(root.innerHTML).toContain("Alex");
    expect(root.innerHTML).toContain("Timer:");
  });

  it("persists paused local runtime state and restores it from storage", () => {
    const storage = {
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
    const { shell } = loadShell({ localStorage: storage });

    const local = shell.createLocalRuntimeModel({
      blueName: "Blue",
      redName: "Red",
      moveTimeLimitSeconds: 30,
    });
    local.localPaused = true;
    shell.saveLocalRuntimeModel(local);
    const restored = shell.loadSavedLocalRuntimeModel();

    expect(restored).not.toBeNull();
    expect(restored.localRuntime).toBe(true);
    expect(restored.localPaused).toBe(true);
    expect(restored.board.currentSession.moveTimeLimitSeconds).toBe(30);
    expect(shell.renderModel(restored)).toContain(
      'id="pauseOverlay" class="pause-overlay"',
    );
  });

  it("forces desktop game view for local runtime even if lobby was previously open", () => {
    const shellNode = {
      attrs: new Map(),
      setAttribute(key, value) {
        this.attrs.set(key, String(value));
      },
    };
    const lobbyBtn = { textContent: "Game" };
    const localMain = {};
    const documentStub = {
      querySelector(selector) {
        if (selector === "#elm-root") return null;
        if (selector === "[data-elm-lobby-open='true']") return shellNode;
        if (selector === "[data-elm-shell-actions]") return shellNode;
        if (selector === ".hero-lobby-btn") return lobbyBtn;
        if (selector === 'main[data-elm-runtime="local"]') return localMain;
        return null;
      },
      querySelectorAll() {
        return [];
      },
    };

    const { shell, root } = loadShell({ document: documentStub });

    shell.createLocalBridge({
      root,
      blueName: "Stefan",
      redName: "Alex",
      moveTimeLimitSeconds: 10,
    });

    expect(shellNode.attrs.get("data-elm-lobby-open")).toBe("false");
    expect(lobbyBtn.textContent).toBe("Lobby");
  });

  it("positions board player badges in gate corridors and spaces match result details", () => {
    const { shell } = loadShell();
    const html = shell.renderBoardMessage(fixture("board-active-session"));

    expect(html).toContain('class="elm-board-badge elm-board-badge-top"');
    expect(html).toContain('class="elm-board-badge elm-board-badge-bottom"');
    expect(cssSource).toContain("--elm-board-badge-gate-corridor-y");
    expect(cssSource).toMatch(
      /\.elm-board-badge-top\s*{[\s\S]*top:\s*var\(--elm-board-badge-gate-corridor-y\);[\s\S]*transform:\s*translate\(-50%,\s*-50%\);/,
    );
    expect(cssSource).toMatch(
      /\.elm-board-badge-bottom\s*{[\s\S]*bottom:\s*var\(--elm-board-badge-gate-corridor-y\);[\s\S]*transform:\s*translate\(-50%,\s*50%\);/,
    );
    expect(cssSource).not.toMatch(/\.elm-board-badge-top\s*{[\s\S]*top:\s*4px/);
    expect(cssSource).not.toMatch(/\.elm-board-badge-bottom\s*{[\s\S]*bottom:\s*4px/);
    expect(cssSource).toMatch(
      /\.match-action-row\s*\+\s*\.match-details\s*{[\s\S]*margin-top:\s*1rem;/,
    );
    expect(cssSource).toMatch(
      /\.match-details\s*{[\s\S]*display:\s*grid;[\s\S]*gap:\s*0\.9rem;/,
    );
  });

  it("scopes winner dismissal to a specific board winner event", () => {
    const { shell } = loadShell();
    const message = fixture("board-between-rounds");
    let model = shell.applyState(shell.initialModel(), message);
    const dismissedKey = shell.winnerOverlayKey(model);

    model = { ...model, dismissedWinnerKey: dismissedKey };
    expect(shell.renderModel(model)).toContain('class="winner-overlay hidden"');

    const sameWinnerRefresh = structuredClone(message);
    sameWinnerRefresh.version = model.version + 1;
    sameWinnerRefresh.board.version = sameWinnerRefresh.version;
    model = shell.applyState(model, sameWinnerRefresh);
    expect(model.dismissedWinnerKey).toBe(dismissedKey);
    expect(shell.renderModel(model)).toContain('class="winner-overlay hidden"');

    const nextWinnerEvent = structuredClone(sameWinnerRefresh);
    nextWinnerEvent.version = model.version + 1;
    nextWinnerEvent.board.version = nextWinnerEvent.version;
    nextWinnerEvent.board.currentSession.round.moves.push({
      playerId: "p1",
      from: { x: 4, y: 1 },
      to: { x: 4, y: 0 },
      segment: "4,1|4,0",
      bounce: false,
      at: 3000,
    });
    model = shell.applyState(model, nextWinnerEvent);

    expect(model.dismissedWinnerKey).toBe("");
    expect(shell.renderModel(model)).toContain('class="winner-overlay"');
    expect(shell.renderModel(model)).not.toContain('class="winner-overlay hidden"');
  });

  it("saves replayable history entries and converts them back into read-only replay models", () => {
    const storage = {
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
    const { shell } = loadShell({ localStorage: storage });
    const model = shell.applyState(shell.initialModel(), fixture("board-between-rounds"));

    shell.saveGameToHistory(model);
    const entries = JSON.parse(storage.getItem("traceballGameHistory"));
    expect(entries[0].game).toBeTruthy();
    expect(entries[0].game.moves.length).toBe(model.board.currentSession.round.moves.length);

    const historyModel = shell.historyEntryToModel(entries[0]);
    expect(historyModel.historyReplay).toBe(true);
    expect(historyModel.replayIndex).toBe(0);
    expect(historyModel.board.currentSession.round.moves.length).toBe(entries[0].game.moves.length);
    expect(shell.submitMoveFromLegalTarget({ model: historyModel }, "4,6")).toBe(false);
    expect(shell.submitNewRound({ model: historyModel })).toBe(false);
  });

  it("renders history items with replay controls", () => {
    const storage = {
      values: new Map(),
      getItem(key) {
        return this.values.get(key) ?? null;
      },
      setItem(key, value) {
        this.values.set(key, String(value));
      },
    };
    const { shell } = loadShell({ localStorage: storage });
    const model = shell.applyState(shell.initialModel(), fixture("board-between-rounds"));
    shell.saveGameToHistory(model);
    const container = { innerHTML: "" };

    shell.renderMenuHistory(container);

    expect(container.innerHTML).toContain('class="history-item"');
    expect(container.innerHTML).toContain('data-history-index="0"');
    expect(container.innerHTML).toContain("Replay");
  });
});
