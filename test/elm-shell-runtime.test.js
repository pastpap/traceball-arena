import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { describe, expect, it } from 'vitest';

const shellSource = readFileSync('public/elm.js', 'utf8');

function loadShell(overrides = {}) {
  const root = { innerHTML: '' };
  const storage = overrides.localStorage ?? {
    values: new Map(),
    getItem(key) { return this.values.get(key) ?? null; },
    setItem(key, value) { this.values.set(key, String(value)); },
  };
  const location = overrides.location ?? { protocol: 'https:', host: 'example.test', search: '' };
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
    fetch: overrides.fetch ?? (async () => ({ ok: false, status: 404, json: async () => ({}) })),
  };
  vm.createContext(context);
  vm.runInContext(shellSource, context, { filename: 'public/elm.js' });
  return { shell: context.window.TraceballElmShell, root, storage, context };
}

function fixture(name) {
  return JSON.parse(readFileSync(`test/fixtures/phase1/${name}.json`, 'utf8'));
}

describe('Phase 3 Elm shell runtime contract', () => {
  it('renders every canonical state fixture without throwing', () => {
    const { shell } = loadShell();
    const fixtureNames = [
      'board-creator-only',
      'board-active-session',
      'board-full-with-watcher',
      'board-full-with-waiting-list-member',
      'board-disconnected-player-during-grace',
      'board-disconnected-player-eligible-to-free',
      'board-between-rounds',
    ];

    for (const name of fixtureNames) {
      const html = shell.renderBoardMessage(fixture(name));
      expect(html).toContain('Traceball Arena');
      expect(html).toContain('Board ROOM123');
      expect(html).toContain('class="board-stage"');
    }
  });

  it('renders watcher and waiting-list membership as separate concepts', () => {
    const { shell } = loadShell();

    const watcherHtml = shell.renderBoardMessage(fixture('board-full-with-watcher'));
    expect(watcherHtml).toContain('Watchers');
    expect(watcherHtml).toContain('Watcher One');
    expect(watcherHtml).toContain('Waiting list');
    expect(watcherHtml).toContain('None');

    const waitingHtml = shell.renderBoardMessage(fixture('board-full-with-waiting-list-member'));
    expect(waitingHtml).toContain('Watchers');
    expect(waitingHtml).toContain('Watcher One');
    expect(waitingHtml).toContain('Waiting list');
    expect(waitingHtml).toContain('Next Player');
  });

  it('renders Phase 9 legacy shell structure around live Elm board state', () => {
    const { shell } = loadShell();
    const html = shell.renderBoardMessage(fixture('board-active-session'));

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
    expect(html).not.toContain('Traceball Arena — Elm Shell');
  });

  it('renders Home with persisted player name, online setup, and local setup controls', () => {
    const storage = {
      values: new Map([['traceballPlayerName', 'Stefan']]),
      getItem(key) { return this.values.get(key) ?? null; },
      setItem(key, value) { this.values.set(key, String(value)); },
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
    expect(html).not.toContain('id="elmPlayerName"');
  });

  it('renders the current created/joined board in Boards tab and restores share link plus QR', () => {
    const { shell } = loadShell({ location: { protocol: 'https:', host: 'traceball.test', search: '?board=ROOM123' } });
    const model = { ...shell.applyState(shell.initialModel(), fixture('board-active-session')), ownSeat: 'p1' };

    const html = shell.renderModel(model);
    const homeSection = html.slice(html.indexOf('id="joinPanel"'), html.indexOf('id="boardsPanel"'));
    const boardsSection = html.slice(html.indexOf('id="boardsPanel"'), html.indexOf('<section class="game-layout"'));

    expect(homeSection).toContain('id="inviteBox"');
    expect(homeSection).toContain('id="inviteLink"');
    expect(homeSection).toContain('value="https://traceball.test/room/ROOM123"');
    expect(homeSection).toContain('id="copyInviteCard"');
    expect(homeSection).toContain('id="qr"');
    expect(homeSection).toContain('/api/qr?url=');

    expect(boardsSection).toContain('data-elm-board-list');
    expect(boardsSection).toContain('data-elm-board-card="ROOM123"');
    expect(boardsSection).toContain('Open board');
  });

  it('renders a concise board HUD with viewer role, turn, and orientation', () => {
    const { shell } = loadShell();
    const model = { ...shell.applyState(shell.initialModel(), fixture('board-active-session')), ownSeat: 'p1', connectionStatus: 'connected' };
    const html = shell.renderModel(model);
    const playSection = html.slice(html.indexOf('class="board-card mobile-page active"'), html.indexOf('<aside class="side mobile-page"'));

    expect(playSection).toContain('data-elm-board-hud');
    expect(playSection).toContain('data-elm-orientation="blue"');
    expect(playSection).toContain('You are Blue');
    expect(playSection).toContain('Turn: Blue');
    expect(playSection).toContain('Connected');
  });

  it('keeps Play focused on board/replay/leave and moves join controls to Match/Home', () => {
    const { shell } = loadShell();
    const oneSeat = shell.applyState(shell.initialModel(), fixture('board-creator-only'));
    const oneSeatHtml = shell.renderModel(oneSeat);
    const playSection = oneSeatHtml.slice(oneSeatHtml.indexOf('class="board-card mobile-page active"'), oneSeatHtml.indexOf('<aside class="side mobile-page"'));

    expect(playSection).toContain('class="board-stage"');
    expect(playSection).toContain('class="board-replay replay"');
    expect(playSection).not.toContain('id="playClaimP2"');
    expect(playSection).not.toContain('data-elm-actions');
    expect(playSection).not.toContain('class="elm-seats"');
    expect(playSection).not.toContain('data-elm-round-result');

    expect(oneSeatHtml).toContain('id="claimP2" class="ghost"');
    expect(oneSeatHtml).toContain('data-elm-command="claim-red"');

    const seated = { ...shell.applyState(shell.initialModel(), fixture('board-active-session')), ownSeat: 'p1' };
    const seatedHtml = shell.renderModel(seated);
    const seatedPlay = seatedHtml.slice(seatedHtml.indexOf('class="board-card mobile-page active"'), seatedHtml.indexOf('<aside class="side mobile-page"'));
    expect(seatedPlay).toContain('id="playLeaveSeat"');
    expect(seatedPlay).toContain('data-elm-command="leave-seat"');
  });

  it('wires Phase 9 visible shell buttons to existing Elm bridge commands', () => {
    const sent = [];
    const shellActions = {
      handler: null,
      addEventListener(type, handler) {
        if (type === 'click') this.handler = handler;
      },
    };
    const { shell, root } = loadShell({
      document: {
        body: { dataset: {}, classList: { toggle() {} } },
        querySelector: (selector) => (selector === '[data-elm-shell-actions]' ? shellActions : null),
        querySelectorAll: () => [],
      },
    });
    const base = shell.applyState(shell.initialModel(), fixture('board-creator-only'));
    const bridge = {
      model: { ...base, ownSeat: null },
      claimSeat(seatId, name) { sent.push({ type: 'claimSeat', seatId, name }); return true; },
      joinWaitingList(name) { sent.push({ type: 'joinWaitingList', name }); return true; },
      leaveWaitingList() { sent.push({ type: 'leaveWaitingList' }); return true; },
      leaveSeat() { sent.push({ type: 'leave' }); return true; },
      newRound() { sent.push({ type: 'reset' }); return true; },
    };

    shell.wirePhase9ShellActions(root, bridge);
    shellActions.handler({ target: { dataset: { elmCommand: 'claim-red' } }, preventDefault() {} });

    expect(sent).toEqual([{ type: 'claimSeat', seatId: 'p2', name: 'Elm Player' }]);
    expect(root.innerHTML).toContain('Board ROOM123');
  });

  it('renders a read-only SVG board with grid, gates, ball, and live legal-move overlay', () => {
    const { shell } = loadShell();

    const html = shell.renderBoardMessage(fixture('board-active-session'));

    expect(html).toContain('data-elm-board-svg');
    expect(html).toContain('viewBox="0 0 900 1300"');
    expect(html).toContain('aria-label="Read-only Traceball board"');
    expect(html).toContain('data-elm-ball="4,6"');
    expect(html).toContain('data-elm-legal-move="3,5"');
    expect(html).toContain('data-elm-gate="blue"');
    expect(html).toContain('data-elm-gate="red"');
    expect(html).toContain('data-elm-gate-bounce="4,1"');
    expect(html).toContain('data-elm-gate-bounce="4,11"');
  });

  it('renders read-only traced move segments from the canonical round state', () => {
    const { shell } = loadShell();
    const message = fixture('board-active-session');
    const round = message.board.currentSession.round;
    round.ball = { x: 5, y: 5 };
    round.visited = ['4,6', '5,5'];
    round.segments = ['4,6|5,5'];
    round.moves = [
      { playerId: 'p1', from: { x: 4, y: 6 }, to: { x: 5, y: 5 }, segment: '4,6|5,5', bounce: false, at: 2100 },
    ];

    const html = shell.renderBoardMessage(message);

    expect(html).toContain('data-elm-segment="4,6|5,5"');
    expect(html).toContain('data-elm-visited="5,5"');
    expect(html).toContain('data-elm-ball="5,5"');
  });

  it('renders legal moves as read-only watcher hints when the viewer is not seated', () => {
    const { shell } = loadShell();

    const html = shell.renderBoardMessage(fixture('board-active-session'));

    expect(html).toContain('data-elm-legal-context="watcher"');
    expect(html).toContain('data-elm-legal-move-state="preview"');
    expect(html).toContain('Watching: legal moves are preview only.');
    expect(html).not.toContain('data-elm-legal-playable="true"');
  });

  it('distinguishes own-turn legal move hints from waiting-for-opponent hints', () => {
    const { shell } = loadShell();
    const message = fixture('board-active-session');

    const ownTurn = shell.renderModel({
      ...shell.applyState(shell.initialModel(), message),
      ownSeat: 'p1',
    });
    const waitingTurn = shell.renderModel({
      ...shell.applyState(shell.initialModel(), message),
      ownSeat: 'p2',
    });

    expect(ownTurn).toContain('data-elm-legal-context="own-turn"');
    expect(ownTurn).toContain('data-elm-legal-playable="true"');
    expect(ownTurn).toContain('Your legal moves. Tap a highlighted point to move.');

    expect(waitingTurn).toContain('data-elm-legal-context="opponent-turn"');
    expect(waitingTurn).toContain('data-elm-legal-move-state="waiting"');
    expect(waitingTurn).toContain('Opponent turn: legal moves shown for orientation.');
    expect(waitingTurn).not.toContain('data-elm-legal-playable="true"');
  });

  it('submits a server-authoritative move from an own-turn Elm legal target', () => {
    const sent = [];
    const sockets = [];
    const legalLayer = {
      handler: null,
      addEventListener(type, handler) {
        if (type === 'click') this.handler = handler;
      },
    };
    const target = {
      dataset: { elmLegalMove: '3,5', elmLegalPlayable: 'true' },
      closest(selector) {
        return selector === '[data-elm-legal-move]' ? this : null;
      },
    };
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) { sent.push(JSON.parse(payload)); }
      close() { this.closed = true; }
    }

    const { shell, root } = loadShell({
      WebSocket: FakeWebSocket,
      document: { querySelector: (selector) => (selector === '[data-elm-legal-context="own-turn"]' ? legalLayer : null) },
    });
    const bridge = shell.createSocketBridge({ boardCode: 'ROOM123', root });
    sockets[0].onopen();
    sockets[0].onmessage({ data: JSON.stringify(fixture('board-active-session')) });
    bridge.model = { ...bridge.model, ownSeat: 'p1' };
    root.innerHTML = shell.renderModel(bridge.model);
    shell.wireBoardMoveTargets(root, bridge);

    legalLayer.handler({ target, preventDefault() { this.prevented = true; } });

    expect(sent.at(-1)).toEqual({ type: 'move', to: { x: 3, y: 5 } });
    expect(bridge.model.pendingMoveKey).toBe('3,5');
  });

  it('does not submit Elm board moves while watching or waiting for the opponent', () => {
    const sent = [];
    const { shell } = loadShell();
    const base = shell.applyState(shell.initialModel(), fixture('board-active-session'));
    const bridge = {
      boardCode: 'ROOM123',
      clientId: 'traceball-elm-test',
      model: { ...base, ownSeat: null },
      sendCommand(command) { sent.push(command); return true; },
    };

    expect(shell.submitMoveFromLegalTarget(bridge, '3,5')).toBe(false);
    bridge.model = { ...base, ownSeat: 'p2' };
    expect(shell.submitMoveFromLegalTarget(bridge, '3,5')).toBe(false);
    bridge.model = { ...base, ownSeat: 'p1' };
    expect(shell.submitMoveFromLegalTarget(bridge, 'not-a-point')).toBe(false);

    expect(sent).toEqual([]);
  });

  it('renders a between-round result panel with score and seated-player new-round control', () => {
    const { shell } = loadShell();
    const base = shell.applyState(shell.initialModel(), fixture('board-between-rounds'));

    const watcherHtml = shell.renderModel({ ...base, ownSeat: null });
    const seatedHtml = shell.renderModel({ ...base, ownSeat: 'p1' });

    expect(seatedHtml).toContain('data-elm-round-result');
    expect(seatedHtml).toContain('Blue wins this round');
    expect(seatedHtml).toContain('p1 scored!');
    expect(seatedHtml).toContain('Blue 1 — Red 0');
    expect(seatedHtml).toContain('data-elm-command="new-round"');
    expect(seatedHtml).toContain('Continue / New Round');
    expect(watcherHtml).toContain('Waiting for a seated player to continue.');
    expect(watcherHtml).not.toContain('data-elm-command="new-round"');
  });

  it('sends reset only from a seated player between rounds', () => {
    const sent = [];
    const { shell } = loadShell();
    const base = shell.applyState(shell.initialModel(), fixture('board-between-rounds'));
    const bridge = {
      model: { ...base, ownSeat: null },
      newRound() { sent.push({ type: 'reset' }); return true; },
    };

    expect(shell.submitNewRound(bridge)).toBe(false);
    bridge.model = { ...base, ownSeat: 'p1' };
    expect(shell.submitNewRound(bridge)).toBe(true);

    expect(sent).toEqual([{ type: 'reset' }]);
    expect(bridge.model.pendingNewRound).toBe(true);
  });

  it('wires the between-round Continue/New Round button to the reset command', () => {
    const sent = [];
    const roundActions = {
      handler: null,
      addEventListener(type, handler) {
        if (type === 'click') this.handler = handler;
      },
    };
    const target = { dataset: { elmCommand: 'new-round' } };
    const { shell, root } = loadShell({
      document: { querySelector: (selector) => (selector === '[data-elm-round-actions]' ? roundActions : null) },
    });
    const base = shell.applyState(shell.initialModel(), fixture('board-between-rounds'));
    const bridge = {
      model: { ...base, ownSeat: 'p1' },
      newRound() { sent.push({ type: 'reset' }); return true; },
    };

    shell.wireRoundActions(root, bridge);
    roundActions.handler({ target, preventDefault() { this.prevented = true; } });

    expect(sent).toEqual([{ type: 'reset' }]);
    expect(root.innerHTML).toContain('Starting next round…');
  });

  it('renders Phase 7 disconnected-seat grace and free-seat recovery controls only for the seated opponent', () => {
    const { shell } = loadShell();
    const during = shell.applyState(shell.initialModel(), fixture('board-disconnected-player-during-grace'));
    const eligible = shell.applyState(shell.initialModel(), fixture('board-disconnected-player-eligible-to-free'));

    const watcherDuringGrace = shell.renderModel({ ...during, ownSeat: null });
    const opponentDuringGrace = shell.renderModel({ ...during, ownSeat: 'p1' });
    const opponentAfterGrace = shell.renderModel({ ...eligible, ownSeat: 'p1' });
    const disconnectedOwnView = shell.renderModel({ ...eligible, ownSeat: 'p2' });

    expect(opponentDuringGrace).toContain('data-elm-disconnected-seat="red"');
    expect(opponentDuringGrace).toContain('Friend disconnected. Seat reserved during grace.');
    expect(opponentDuringGrace).toContain('Make seat available in 60s');
    expect(opponentDuringGrace).not.toContain('data-elm-command="free-seat"');

    expect(opponentAfterGrace).toContain('data-elm-command="free-seat"');
    expect(opponentAfterGrace).toContain('data-elm-seat="p2"');
    expect(opponentAfterGrace).toContain('Make Red seat available');
    expect(watcherDuringGrace).not.toContain('data-elm-command="free-seat"');
    expect(disconnectedOwnView).toContain('Your seat is reserved — reconnect from the same browser to reclaim it.');
  });

  it('sends freeSeat only for a seated opponent whose disconnected grace expired', () => {
    const sent = [];
    const { shell } = loadShell();
    const eligible = shell.applyState(shell.initialModel(), fixture('board-disconnected-player-eligible-to-free'));
    const during = shell.applyState(shell.initialModel(), fixture('board-disconnected-player-during-grace'));
    const bridge = {
      model: { ...eligible, ownSeat: null },
      freeSeat(seatId) { sent.push({ type: 'freeSeat', seatId }); return true; },
    };

    expect(shell.submitFreeDisconnectedSeat(bridge, 'p2')).toBe(false);
    bridge.model = { ...during, ownSeat: 'p1' };
    expect(shell.submitFreeDisconnectedSeat(bridge, 'p2')).toBe(false);
    bridge.model = { ...eligible, ownSeat: 'p2' };
    expect(shell.submitFreeDisconnectedSeat(bridge, 'p2')).toBe(false);
    bridge.model = { ...eligible, ownSeat: 'p1' };
    expect(shell.submitFreeDisconnectedSeat(bridge, 'p2')).toBe(true);

    expect(sent).toEqual([{ type: 'freeSeat', seatId: 'p2' }]);
    expect(bridge.model.pendingFreeSeat).toBe('p2');
  });

  it('wires Phase 7 Make seat available clicks to the freeSeat command', () => {
    const sent = [];
    const recoveryActions = {
      handler: null,
      addEventListener(type, handler) {
        if (type === 'click') this.handler = handler;
      },
    };
    const target = { dataset: { elmCommand: 'free-seat', elmSeat: 'p2' } };
    const { shell, root } = loadShell({
      document: { querySelector: (selector) => (selector === '[data-elm-disconnect-actions]' ? recoveryActions : null) },
    });
    const eligible = shell.applyState(shell.initialModel(), fixture('board-disconnected-player-eligible-to-free'));
    const bridge = {
      model: { ...eligible, ownSeat: 'p1' },
      freeSeat(seatId) { sent.push({ type: 'freeSeat', seatId }); return true; },
    };

    shell.wireDisconnectActions(root, bridge);
    recoveryActions.handler({ target, preventDefault() { this.prevented = true; } });

    expect(sent).toEqual([{ type: 'freeSeat', seatId: 'p2' }]);
    expect(root.innerHTML).toContain('Making seat available…');
  });

  it('keeps the newer model when a stale state message arrives', () => {
    const { shell } = loadShell();
    const current = shell.applyState(shell.initialModel(), fixture('board-active-session'));
    const stale = fixture('board-creator-only');
    stale.version = current.version;
    stale.board.version = current.version;

    const next = shell.applyState(current, stale);

    expect(next.version).toBe(current.version);
    expect(next.board.state).toBe('SessionActive');
    expect(next.ignoredStaleVersion).toBe(stale.version);
  });

  it('returns a controlled error for malformed state and not-found messages', () => {
    const { shell } = loadShell();

    const bad = shell.applyState(shell.initialModel(), { type: 'state', version: 3, boardCode: 'BAD' });
    expect(bad.error).toContain('missing board');

    const notFound = shell.applyState(shell.initialModel(), fixture('board-not-found'));
    expect(notFound.error).toContain('Board not found');
    const notFoundHtml = shell.renderModel(notFound);
    expect(notFoundHtml).toContain('data-elm-board-recovery');
    expect(notFoundHtml).toContain('Create a fresh board');
  });

  it('renders Phase 8 board list cards with status, occupancy, activity, expiry, and Elm links', () => {
    const { shell } = loadShell();
    const html = shell.renderBoardList([
      {
        roomId: 'ROOM123',
        elmUrl: '/elm?board=ROOM123',
        state: 'SessionActive',
        status: 'playing',
        occupancy: { activeCount: 2, vacantCount: 0 },
        score: { p1: 2, p2: 1 },
        moveCount: 7,
        lastActivityAt: 2000,
        expiresAt: 604802000,
      },
      {
        roomId: 'OPEN456',
        elmUrl: '/elm?board=OPEN456',
        state: 'WaitingForPlayers',
        occupancy: { activeCount: 1, vacantCount: 1 },
        lastActivityAt: 1000,
        expiresAt: 604801000,
      },
    ]);

    expect(html).toContain('data-elm-board-list');
    expect(html).toContain('data-elm-board-card="ROOM123"');
    expect(html).toContain('SessionActive');
    expect(html).toContain('2 seated · 0 open');
    expect(html).toContain('Score Blue 2 — Red 1');
    expect(html).toContain('Last activity 2000');
    expect(html).toContain('Expires 604802000');
    expect(html).toContain('href="/elm?board=ROOM123"');
    expect(html).toContain('Open board');
  });

  it('loads active online boards into the Boards tab without replacing the whole shell', async () => {
    const { shell, root } = loadShell({
      fetch: async (url) => {
        expect(url).toBe('/api/rooms');
        return { ok: true, json: async () => ({ rooms: [{ roomId: 'ROOM123', elmUrl: '/elm?board=ROOM123', state: 'WaitingForPlayers', occupancy: { activeCount: 0, vacantCount: 2 }, lastActivityAt: 1000, expiresAt: 604801000 }] }) };
      },
    });
    root.innerHTML = shell.renderModel(shell.initialModel());

    await shell.loadBoardList(root);

    expect(root.innerHTML).toContain('id="boardsPanel"');
    expect(root.innerHTML).toContain('data-elm-board-list');
    expect(root.innerHTML).toContain('data-elm-board-card="ROOM123"');
    expect(root.innerHTML).toContain('href="/elm?board=ROOM123"');
    expect(root.innerHTML).toContain('id="joinPanel"');
    expect(root.innerHTML).toContain('class="board-card mobile-page active"');
  });

  it('preserves an Elm client id through localStorage for WebSocket handoff', () => {
    const { shell, storage } = loadShell();

    const first = shell.getOrCreateClientId();
    const second = shell.getOrCreateClientId();

    expect(first).toMatch(/^traceball-elm-/);
    expect(second).toBe(first);
    expect(storage.getItem('traceballElmClientId')).toBe(first);
  });

  it('opens a board as watcher over WebSocket and applies live state', () => {
    const sent = [];
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor(url) {
        this.url = url;
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) { sent.push(JSON.parse(payload)); }
      close() { this.closed = true; }
    }

    const { shell } = loadShell({ WebSocket: FakeWebSocket });
    const bridge = shell.createSocketBridge({ boardCode: 'ROOM123', root: { innerHTML: '' } });
    sockets[0].onopen();
    sockets[0].onmessage({ data: JSON.stringify(fixture('board-active-session')) });

    expect(sockets[0].url).toBe('wss://example.test/ws');
    expect(sent[0]).toMatchObject({ type: 'watch', roomId: 'ROOM123', clientId: bridge.clientId });
    expect(bridge.model.board.state).toBe('SessionActive');
    expect(bridge.model.connectionStatus).toBe('connected');
  });

  it('exposes board-centric seating commands without a generic Join Game action', () => {
    const sent = [];
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) { sent.push(JSON.parse(payload)); }
      close() { this.closed = true; }
    }

    const { shell, root } = loadShell({ WebSocket: FakeWebSocket });
    const bridge = shell.createSocketBridge({ boardCode: 'ROOM123', root });
    sockets[0].onopen();
    sockets[0].onmessage({ data: JSON.stringify(fixture('board-creator-only')) });

    expect(root.innerHTML).toContain('Join Red');
    expect(root.innerHTML).not.toContain('Join Game');
    expect(sent).toHaveLength(1);
    expect(sent[0]).toMatchObject({ type: 'watch', roomId: 'ROOM123', clientId: bridge.clientId });
    expect(bridge.model.ownSeat).toBe(null);

    bridge.claimSeat('p1', 'Elm Blue');
    bridge.claimSeat('p2', 'Elm Red');
    bridge.joinWaitingList('Elm Waiter');
    bridge.leaveWaitingList();
    bridge.leaveSeat();

    expect(sent.slice(1)).toEqual([
      { type: 'claimSeat', roomId: 'ROOM123', seatId: 'p1', name: 'Elm Blue', clientId: bridge.clientId },
      { type: 'claimSeat', roomId: 'ROOM123', seatId: 'p2', name: 'Elm Red', clientId: bridge.clientId },
      { type: 'joinWaitingList', roomId: 'ROOM123', name: 'Elm Waiter', clientId: bridge.clientId },
      { type: 'leaveWaitingList', roomId: 'ROOM123', clientId: bridge.clientId },
      { type: 'leave' },
    ]);
  });

  it('creates a board and immediately claims Blue for the creator', async () => {
    const { shell: renderShell } = loadShell();
    expect(renderShell.renderModel(renderShell.initialModel())).toContain('Create board as Blue');

    const sent = [];
    const sockets = [];
    class FakeWebSocket {
      static OPEN = 1;
      constructor() {
        this.readyState = FakeWebSocket.OPEN;
        sockets.push(this);
      }
      send(payload) { sent.push(JSON.parse(payload)); }
      close() { this.closed = true; }
    }

    const { shell, root } = loadShell({
      WebSocket: FakeWebSocket,
      fetch: async (url, options) => {
        expect(url).toBe('/api/rooms');
        expect(options.method).toBe('POST');
        return { ok: true, json: async () => ({ roomId: 'NEW12345' }) };
      },
    });

    const bridge = await shell.createBoardAsBlue({ root, name: 'Creator' });
    sockets[0].onopen();

    expect(bridge.boardCode).toBe('NEW12345');
    expect(sent).toEqual([
      { type: 'watch', roomId: 'NEW12345', clientId: bridge.clientId },
      { type: 'claimSeat', roomId: 'NEW12345', seatId: 'p1', name: 'Creator', clientId: bridge.clientId },
    ]);
  });
});
