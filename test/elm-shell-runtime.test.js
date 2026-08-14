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
    document: { querySelector: () => root },
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
      expect(html).toContain('Traceball Arena — Elm Shell');
      expect(html).toContain('Board ROOM123');
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
    expect(ownTurn).toContain('Your legal moves. Input arrives in Phase 6C.');

    expect(waitingTurn).toContain('data-elm-legal-context="opponent-turn"');
    expect(waitingTurn).toContain('data-elm-legal-move-state="waiting"');
    expect(waitingTurn).toContain('Opponent turn: legal moves shown for orientation.');
    expect(waitingTurn).not.toContain('data-elm-legal-playable="true"');
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
    expect(sent[1]).toMatchObject({ type: 'claimSeat', roomId: 'ROOM123', seatId: 'p2', clientId: bridge.clientId });

    bridge.claimSeat('p1', 'Elm Blue');
    bridge.claimSeat('p2', 'Elm Red');
    bridge.joinWaitingList('Elm Waiter');
    bridge.leaveWaitingList();
    bridge.leaveSeat();

    expect(sent.slice(2)).toEqual([
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
