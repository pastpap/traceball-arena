import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { claimSeat, createGame, makeMove } from '../src/game.js';
import { toPhase1StateMessage, toLegacyCompatibleStateMessage } from '../src/protocol/phase1.js';

function fixture(name) {
  return JSON.parse(readFileSync(new URL(`./fixtures/phase1/${name}.json`, import.meta.url), 'utf8'));
}

describe('Phase 1 canonical protocol adapter', () => {
  it('adapts a creator-only board to the canonical state fixture', () => {
    const game = createGame('ROOM123', { moveTimeLimitMs: 15000, now: 1000 });
    claimSeat(game, 'p1', 'Stefan', 'client-blue', 1000);

    const message = toPhase1StateMessage(game, { version: 1, now: 1000 });

    expect(message).toEqual(fixture('board-creator-only'));
  });

  it('adapts an active session to the canonical state fixture', () => {
    const game = createGame('ROOM123', { moveTimeLimitMs: 15000, now: 1000 });
    claimSeat(game, 'p1', 'Stefan', 'client-blue', 1000);
    claimSeat(game, 'p2', 'Friend', 'client-red', 2000);
    game.sessionId = 'session-active-fixture';

    const message = toPhase1StateMessage(game, { version: 2, now: 2000 });

    expect(message).toEqual(fixture('board-active-session'));
  });

  it('exposes server-authoritative move timer metadata in active sessions', () => {
    const game = createGame('ROOM123', { moveTimeLimitMs: 30000, now: 1000 });
    claimSeat(game, 'p1', 'Stefan', 'client-blue', 1000);
    claimSeat(game, 'p2', 'Friend', 'client-red', 2000);
    game.turnStartedAt = 2000;

    const message = toPhase1StateMessage(game, { version: 2, now: 2000 });

    expect(message.board.currentSession.moveTimeLimitSeconds).toBe(30);
    expect(message.board.currentSession.round.deadlineAt).toBe(32000);
  });

  it('maps a scored round to BetweenRounds so Elm can render the Continue flow', () => {
    const game = createGame('ROOM123', { moveTimeLimitMs: 15000, now: 1000 });
    claimSeat(game, 'p1', 'Stefan', 'client-blue', 1000);
    claimSeat(game, 'p2', 'Friend', 'client-red', 2000);
    game.sessionId = 'session-between-rounds-fixture';
    game.ball = { x: 4, y: 1 };
    game.turn = 'p1';
    makeMove(game, 'p1', { x: 4, y: 0 }, 2500);

    const message = toPhase1StateMessage(game, { version: 3, now: 2500 });

    expect(message).toEqual(fixture('board-between-rounds'));
  });

  it('keeps the legacy game payload while adding the canonical board payload', () => {
    const game = createGame('ROOM123', { moveTimeLimitMs: 15000, now: 1000 });
    claimSeat(game, 'p1', 'Stefan', 'client-blue', 1000);

    const message = toLegacyCompatibleStateMessage(game, { version: 1, now: 1000 });

    expect(message).toMatchObject({
      type: 'state',
      boardCode: 'ROOM123',
      version: 1,
      game: {
        roomId: 'ROOM123',
        players: {
          p1: { id: 'p1', name: 'Stefan', status: 'active' },
          p2: { id: 'p2', name: 'Red', status: 'vacant' },
        },
      },
      board: {
        code: 'ROOM123',
        state: 'OneSeatOccupied',
      },
    });
  });

  it('exposes future-state fixtures for waiting list, disconnection grace, freeable seats, and not found', () => {
    expect(fixture('board-full-with-watcher').board.waitingList).toEqual([]);
    expect(fixture('board-full-with-waiting-list-member').board.waitingList).toHaveLength(1);
    expect(fixture('board-disconnected-player-during-grace').board.seats.red.state).toBe('DisconnectedReserved');
    expect(fixture('board-disconnected-player-eligible-to-free').board.seats.red.canBeFreed).toBe(true);
    expect(fixture('board-not-found')).toMatchObject({ type: 'BoardNotFound', boardCode: 'MISSING' });
  });
});
