import { describe, expect, it } from 'vitest';
import { addPlayer, createGame, makeMove, resetGame } from '../src/game.js';

describe('room state lifecycle', () => {
  it('keeps both players visible after a new round reset', () => {
    const game = createGame('room-test');
    expect(addPlayer(game, 'Desktop')).toEqual({ ok: true, playerId: 'p1' });
    expect(addPlayer(game, 'Phone')).toEqual({ ok: true, playerId: 'p2' });

    resetGame(game);

    expect(game.status).toBe('playing');
    expect(game.players.p1?.name).toBe('Desktop');
    expect(game.players.p2?.name).toBe('Phone');
    expect(game.turn).toBe('p1');
  });

  it('keeps room score available across new rounds', () => {
    const game = createGame('room-test');
    addPlayer(game, 'Desktop');
    addPlayer(game, 'Phone');
    game.ball = { x: 4, y: 1 };
    game.turn = 'p1';

    expect(makeMove(game, 'p1', { x: 4, y: 0 }).ok).toBe(true);
    expect(game.score).toEqual({ p1: 1, p2: 0 });

    resetGame(game);

    expect(game.status).toBe('playing');
    expect(game.score).toEqual({ p1: 1, p2: 0 });
    expect(game.moves).toHaveLength(0);
  });

  it('newly created rooms start clean with no inherited players or score', () => {
    const first = createGame('first-room');
    addPlayer(first, 'Desktop');
    addPlayer(first, 'Phone');

    const next = createGame('next-room');

    expect(next.players).toEqual({ p1: null, p2: null });
    expect(next.score).toEqual({ p1: 0, p2: 0 });
    expect(next.status).toBe('waiting');
  });

  it('lets the same browser client reclaim its player slot after reconnecting', () => {
    const game = createGame('room-test');
    expect(addPlayer(game, 'First name', 'phone-client')).toEqual({ ok: true, playerId: 'p1' });
    addPlayer(game, 'Other phone', 'other-client');

    expect(addPlayer(game, 'Updated name', 'phone-client')).toEqual({ ok: true, playerId: 'p1', rejoined: true });
    expect(game.players.p1?.name).toBe('Updated name');
    expect(game.players.p2?.name).toBe('Other phone');
  });
});
