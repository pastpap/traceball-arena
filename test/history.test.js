import { describe, expect, it } from 'vitest';
import {
  makeGameHistoryEntry,
  upsertGameHistory,
  makeSuspendedLocalGame,
  restoreSuspendedLocalGame,
} from '../public/history.js';

function finishedGame(overrides = {}) {
  return {
    roomId: 'room-123',
    status: 'finished',
    players: {
      p1: { id: 'p1', name: 'Blue', color: '#0b7cff' },
      p2: { id: 'p2', name: 'Red', color: '#ff3b30' },
    },
    turn: 'p2',
    ball: { x: 4, y: 0 },
    visited: ['4,6', '4,5', '4,4', '4,3', '4,2', '4,1', '4,0'],
    segments: ['4,6|4,5', '4,5|4,4'],
    moves: [
      { playerId: 'p1', from: { x: 4, y: 6 }, to: { x: 4, y: 5 }, segment: '4,6|4,5', at: 1000 },
      { playerId: 'p2', from: { x: 4, y: 5 }, to: { x: 4, y: 4 }, segment: '4,5|4,4', at: 2000 },
    ],
    score: { p1: 1, p2: 0 },
    winner: 'p1',
    endReason: 'Blue scored!',
    moveTimeLimitMs: 15000,
    turnStartedAt: null,
    lastTimeout: null,
    consecutiveTimeouts: 0,
    pause: null,
    legalMoves: [],
    ...overrides,
  };
}

describe('game history persistence helpers', () => {
  it('creates replay-ready history entries for finished online games', () => {
    const game = finishedGame();

    const entry = makeGameHistoryEntry(game, { mode: 'online', roomId: 'room-123', savedAt: 3000 });

    expect(entry).toMatchObject({
      mode: 'online',
      roomId: 'room-123',
      playedAt: 3000,
      winner: 'p1',
      endReason: 'Blue scored!',
      moveCount: 2,
      score: { p1: 1, p2: 0 },
    });
    expect(entry.players.p1.name).toBe('Blue');
    expect(entry.game.status).toBe('finished');
    expect(entry.game.moves).toHaveLength(2);
    expect(entry.signature).toContain('online:room-123:p1:2:Blue scored!');
  });

  it('dedupes saved history and keeps newest finished games first for local and online games', () => {
    const online = finishedGame();
    const local = finishedGame({ roomId: 'local', winner: 'p2', endReason: 'Red scored!', score: { p1: 0, p2: 1 } });

    let history = upsertGameHistory([], online, { mode: 'online', roomId: 'room-123', savedAt: 3000 });
    history = upsertGameHistory(history, online, { mode: 'online', roomId: 'room-123', savedAt: 4000 });
    history = upsertGameHistory(history, local, { mode: 'local', roomId: 'local', savedAt: 5000 });

    expect(history).toHaveLength(2);
    expect(history[0]).toMatchObject({ mode: 'local', winner: 'p2', playedAt: 5000 });
    expect(history[1]).toMatchObject({ mode: 'online', winner: 'p1', playedAt: 4000 });
  });

  it('caps stored history to the requested maximum', () => {
    let history = [];
    for (let i = 0; i < 4; i += 1) {
      const game = finishedGame({ roomId: `room-${i}`, endReason: `Game ${i}`, moves: [{ playerId: 'p1', from: { x: 4, y: 6 }, to: { x: 4, y: 5 }, segment: `s${i}`, at: i }] });
      history = upsertGameHistory(history, game, { mode: 'online', roomId: `room-${i}`, savedAt: i }, 3);
    }

    expect(history.map((entry) => entry.roomId)).toEqual(['room-3', 'room-2', 'room-1']);
  });

  it('stores paused local games for same-device resume but ignores online paused games', () => {
    const pausedLocal = finishedGame({ status: 'paused', roomId: 'local', pause: { reason: 'manual', resumeTurn: 'p2' }, winner: null, endReason: null });
    const pausedOnline = finishedGame({ status: 'paused', pause: { reason: 'manual', resumeTurn: 'p2' }, winner: null, endReason: null });

    const suspended = makeSuspendedLocalGame(pausedLocal, { mode: 'local', savedAt: 6000 });

    expect(suspended).toMatchObject({ mode: 'local', savedAt: 6000 });
    expect(suspended.game.status).toBe('paused');
    expect(restoreSuspendedLocalGame(suspended).game.pause.resumeTurn).toBe('p2');
    expect(makeSuspendedLocalGame(pausedOnline, { mode: 'online', savedAt: 7000 })).toBe(null);
  });
});
