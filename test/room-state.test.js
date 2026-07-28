import { describe, expect, it } from 'vitest';
import { addPlayer, createGame, resetGame } from '../src/game.js';

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

  it('newly created rooms start clean with no inherited players', () => {
    const first = createGame('first-room');
    addPlayer(first, 'Desktop');
    addPlayer(first, 'Phone');

    const next = createGame('next-room');

    expect(next.players).toEqual({ p1: null, p2: null });
    expect(next.status).toBe('waiting');
  });
});
