import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { describe, expect, it } from 'vitest';

const shellSource = readFileSync('public/elm.js', 'utf8');

function loadShell() {
  const root = { innerHTML: '' };
  const context = {
    console,
    window: {},
    document: { querySelector: () => root },
    fetch: async () => ({ ok: false, status: 404, json: async () => ({}) }),
  };
  vm.createContext(context);
  vm.runInContext(shellSource, context, { filename: 'public/elm.js' });
  return { shell: context.window.TraceballElmShell, root };
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
});
