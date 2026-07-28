import { describe, expect, it } from 'vitest';
import { addPlayer, createGame, legalMoves, makeMove } from '../src/game.js';

function readyGame() {
  const game = createGame('room-test');
  addPlayer(game, 'Blue');
  addPlayer(game, 'Red');
  return game;
}

describe('traceball rules', () => {
  it('starts from midfield with eight legal moves', () => {
    const game = readyGame();
    expect(game.ball).toEqual({ x: 4, y: 6 });
    expect(legalMoves(game)).toHaveLength(8);
  });

  it('forbids reusing a segment in either direction', () => {
    const game = readyGame();
    const first = makeMove(game, 'p1', { x: 5, y: 6 });
    expect(first.ok).toBe(true);
    const back = makeMove(game, 'p2', { x: 4, y: 6 });
    expect(back.ok).toBe(false);
  });

  it('grants a bounce turn when landing on a visited point', () => {
    const game = readyGame();
    expect(makeMove(game, 'p1', { x: 5, y: 6 }).ok).toBe(true);
    expect(makeMove(game, 'p2', { x: 5, y: 7 }).ok).toBe(true);
    const bounce = makeMove(game, 'p1', { x: 4, y: 6 });
    expect(bounce.ok).toBe(true);
    expect(game.turn).toBe('p1');
  });

  it('ends as a goal when entering the opponent gate', () => {
    const game = readyGame();
    game.ball = { x: 4, y: 1 };
    game.turn = 'p1';
    const result = makeMove(game, 'p1', { x: 4, y: 0 });
    expect(result.ok).toBe(true);
    expect(game.status).toBe('finished');
    expect(game.winner).toBe('p1');
  });

  it('treats entering own gate as an own goal', () => {
    const game = readyGame();
    game.ball = { x: 4, y: 11 };
    game.turn = 'p1';
    const result = makeMove(game, 'p1', { x: 4, y: 12 });
    expect(result.ok).toBe(true);
    expect(game.status).toBe('finished');
    expect(game.winner).toBe('p2');
    expect(game.endReason).toContain('Own goal');
  });
});
