import { describe, expect, it } from 'vitest';
import { addPlayer, applyTurnTimeout, canReachTurnChange, claimSeat, createGame, freeDisconnectedSeat, leavePlayerAfterOpponentGrace, legalMoves, makeMove, markPlayerDisconnected, pauseGame, resumeGame } from '../src/game.js';

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

  it('treats margins as already traced lines while allowing margin points', () => {
    const game = readyGame();
    game.ball = { x: 0, y: 6 };
    game.visited.push('0,6');
    game.turn = 'p1';

    expect(legalMoves(game)).not.toContainEqual({ x: 0, y: 5 });
    expect(legalMoves(game)).not.toContainEqual({ x: 0, y: 7 });
    expect(legalMoves(game)).toContainEqual({ x: 1, y: 6 });

    const alongMargin = makeMove(game, 'p1', { x: 0, y: 5 });
    expect(alongMargin.ok).toBe(false);
    expect(alongMargin.error).toContain('margin');
  });

  it('allows moves through the gate mouth but not along outer pitch margins', () => {
    const game = readyGame();
    game.ball = { x: 3, y: 1 };
    game.visited.push('3,1');
    game.turn = 'p1';

    expect(legalMoves(game)).toContainEqual({ x: 4, y: 1 });
    expect(legalMoves(game)).not.toContainEqual({ x: 2, y: 1 });
  });

  it('grants a bounce on the unvisited gate-mouth center point', () => {
    const game = readyGame();
    game.ball = { x: 4, y: 2 };
    game.visited.push('4,2');
    game.turn = 'p1';

    const result = makeMove(game, 'p1', { x: 4, y: 1 });

    expect(result.ok).toBe(true);
    expect(result.bounce).toBe(true);
    expect(game.turn).toBe('p1');
  });

  it('detects turn-change availability through a forced bounce path', () => {
    const game = readyGame();
    game.ball = { x: 0, y: 6 };
    game.visited = ['4,6', '0,6', '1,5', '1,6', '1,7'];
    game.segments = [];

    expect(legalMoves(game)).toEqual([{ x: 1, y: 5 }, { x: 1, y: 6 }, { x: 1, y: 7 }]);
    expect(canReachTurnChange(game)).toBe(true);
  });

  it('detects no turn-change availability when no legal path exists', () => {
    const game = readyGame();
    game.ball = { x: 4, y: 6 };
    game.segments = [
      '3,5|4,6',
      '3,6|4,6',
      '3,7|4,6',
      '4,5|4,6',
      '4,6|4,7',
      '4,6|5,5',
      '4,6|5,6',
      '4,6|5,7',
    ];

    expect(legalMoves(game)).toHaveLength(0);
    expect(canReachTurnChange(game)).toBe(false);
  });

  it('passes the turn on timeout without drawing a line or moving the ball', () => {
    const game = readyGame();
    game.moveTimeLimitMs = 5000;
    game.turnStartedAt = 1000;

    const result = applyTurnTimeout(game, 6000);

    expect(result.ok).toBe(true);
    expect(result.timedOutPlayer).toBe('p1');
    expect(game.turn).toBe('p2');
    expect(game.consecutiveTimeouts).toBe(1);
    expect(game.ball).toEqual({ x: 4, y: 6 });
    expect(game.segments).toHaveLength(0);
    expect(game.moves).toHaveLength(0);
    expect(game.turnStartedAt).toBe(6000);
  });

  it('pauses instead of passing back after two consecutive timeouts', () => {
    const game = readyGame();
    game.moveTimeLimitMs = 5000;
    game.turnStartedAt = 1000;

    expect(applyTurnTimeout(game, 6000)).toMatchObject({ ok: true, timedOutPlayer: 'p1', nextPlayer: 'p2' });
    const second = applyTurnTimeout(game, 11000);

    expect(second).toMatchObject({ ok: true, timedOutPlayer: 'p2', paused: true });
    expect(game.status).toBe('paused');
    expect(game.turn).toBe('p2');
    expect(game.turnStartedAt).toBe(null);
    expect(game.pause).toMatchObject({ reason: 'idle', byPlayerId: 'p2', resumeTurn: 'p2' });
    expect(game.ball).toEqual({ x: 4, y: 6 });
    expect(game.segments).toHaveLength(0);
  });

  it('pauses on behalf of one player after that same player times out more than twice in a row', () => {
    const game = readyGame();
    game.moveTimeLimitMs = 5000;
    game.turnStartedAt = 1000;

    expect(applyTurnTimeout(game, 6000)).toMatchObject({ ok: true, timedOutPlayer: 'p1', nextPlayer: 'p2' });
    expect(game.timeoutStreaks).toEqual({ p1: 1, p2: 0 });

    expect(makeMove(game, 'p2', { x: 5, y: 6 }, 7000)).toMatchObject({ ok: true, bounce: false });
    expect(game.turn).toBe('p1');
    expect(game.timeoutStreaks).toEqual({ p1: 1, p2: 0 });

    expect(applyTurnTimeout(game, 12000)).toMatchObject({ ok: true, timedOutPlayer: 'p1', nextPlayer: 'p2' });
    expect(game.timeoutStreaks).toEqual({ p1: 2, p2: 0 });

    expect(makeMove(game, 'p2', { x: 6, y: 6 }, 13000)).toMatchObject({ ok: true, bounce: false });
    expect(game.turn).toBe('p1');
    const third = applyTurnTimeout(game, 18000);

    expect(third).toMatchObject({ ok: true, timedOutPlayer: 'p1', paused: true, origin: 'repeated-player-timeouts' });
    expect(game.status).toBe('paused');
    expect(game.turn).toBe('p1');
    expect(game.pause).toMatchObject({ reason: 'idle', byPlayerId: 'p1', resumeTurn: 'p1', origin: 'repeated-player-timeouts' });
    expect(resumeGame(game, 19000, 'p2')).toMatchObject({ ok: false, error: expect.stringMatching(/paused the game|timed out/i) });
    expect(resumeGame(game, 19000, 'p1').ok).toBe(true);
    expect(game.turnStartedAt).toBe(19000);
  });

  it('resumes paused games with only the remaining turn time, not a fresh timer', () => {
    const game = readyGame();
    game.moveTimeLimitMs = 5000;
    game.turnStartedAt = 1000;

    expect(pauseGame(game, { reason: 'manual', byPlayerId: 'p1', now: 2000 }).ok).toBe(true);
    expect(game.status).toBe('paused');
    expect(game.turn).toBe('p1');
    expect(game.turnStartedAt).toBe(null);
    expect(game.pause).toMatchObject({ remainingMs: 4000 });

    expect(resumeGame(game, 3000).ok).toBe(true);
    expect(game.status).toBe('playing');
    expect(game.turn).toBe('p1');
    expect(game.turnStartedAt).toBe(2000);
    expect(game.turnStartedAt + game.moveTimeLimitMs).toBe(7000);
    expect(game.pause).toBe(null);
    expect(game.consecutiveTimeouts).toBe(0);
  });

  it('resumes a two-player idle pause with a fresh clock for the second timed-out player only', () => {
    const game = readyGame();
    game.moveTimeLimitMs = 5000;
    game.turnStartedAt = 1000;

    expect(applyTurnTimeout(game, 6000)).toMatchObject({ ok: true, timedOutPlayer: 'p1', nextPlayer: 'p2' });
    expect(applyTurnTimeout(game, 11000)).toMatchObject({ ok: true, timedOutPlayer: 'p2', paused: true });
    expect(game.pause).toMatchObject({ reason: 'idle', byPlayerId: 'p2', resumeTurn: 'p2', remainingMs: 0 });

    expect(resumeGame(game, 12000, 'p1')).toMatchObject({ ok: false, error: expect.stringMatching(/paused the game|timed out/i) });
    expect(game.status).toBe('paused');

    expect(resumeGame(game, 12000, 'p2').ok).toBe(true);

    expect(game.status).toBe('playing');
    expect(game.turn).toBe('p2');
    expect(game.turnStartedAt).toBe(12000);
    expect(applyTurnTimeout(game, 12000)).toMatchObject({ ok: false });
    expect(applyTurnTimeout(game, 17000)).toMatchObject({ ok: true, timedOutPlayer: 'p2', paused: true });
  });

  it('rejects a move that arrives after the server-side timer deadline', () => {
    const game = readyGame();
    game.moveTimeLimitMs = 5000;
    game.turnStartedAt = 1000;

    const result = makeMove(game, 'p1', { x: 5, y: 6 }, 6001);

    expect(result.ok).toBe(false);
    expect(result.timeout).toBe(true);
    expect(game.ball).toEqual({ x: 4, y: 6 });
    expect(game.segments).toHaveLength(0);
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

  it('reserves a disconnected seat during grace and allows same-client reclaim', () => {
    const game = readyGame();
    game.players.p2.clientId = 'red-phone';
    game.turn = 'p2';

    const disconnected = markPlayerDisconnected(game, 'p2', 10_000);

    expect(disconnected).toMatchObject({ ok: true, playerId: 'p2', canBeFreedAt: 70_000 });
    expect(game.status).toBe('paused');
    expect(game.players.p2).toMatchObject({ status: 'disconnected', clientId: 'red-phone', disconnectedAt: 10_000, canBeFreedAt: 70_000 });
    expect(claimSeat(game, 'p2', 'Red returns', 'red-phone', 20_000)).toMatchObject({ ok: true, playerId: 'p2', rejoined: true });
    expect(game.players.p2).toMatchObject({ status: 'active', name: 'Red returns', clientId: 'red-phone' });
    expect(game.status).toBe('playing');
  });

  it('blocks freeing a disconnected opponent until grace expires, then awards a forfeit point', () => {
    const game = readyGame();
    game.players.p2.clientId = 'red-phone';
    game.turn = 'p2';
    markPlayerDisconnected(game, 'p2', 10_000);

    expect(freeDisconnectedSeat(game, 'p1', 'p2', 69_999)).toMatchObject({ ok: false });
    const freed = freeDisconnectedSeat(game, 'p1', 'p2', 70_000);

    expect(freed).toMatchObject({ ok: true, playerId: 'p2', winner: 'p1', forfeit: true });
    expect(game.players.p2.status).toBe('vacant');
    expect(game.score.p1).toBe(1);
    expect(game.status).toBe('waiting');
    expect(game.history.at(-1)).toMatchObject({ winner: 'p1', loser: 'p2', reason: 'disconnect-forfeit' });
  });

  it('clears the board without a ghost forfeit when the remaining player leaves after opponent grace expires', () => {
    const game = readyGame();
    game.players.p2.clientId = 'red-phone';
    game.turn = 'p2';
    markPlayerDisconnected(game, 'p2', 10_000);

    const left = leavePlayerAfterOpponentGrace(game, 'p1', 70_000);

    expect(left).toMatchObject({ ok: true, abandoned: true });
    expect(game.score.p1).toBe(0);
    expect(game.score.p2).toBe(0);
    expect(game.status).toBe('waiting');
    expect(game.players.p1.status).toBe('vacant');
    expect(game.players.p2.status).toBe('vacant');
  });
});
