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
});
