import { describe, expect, it } from 'vitest';
import { BOARD_TTL_MS, boardExpiresAt, boardLastActivityAt, addPlayer, claimSeat, createGame, isBoardExpired, joinWaitingList, leavePlayer, leaveWaitingList, makeMove, pauseGame, publicGame, resetGame, resumeGame } from '../src/game.js';

describe('room state lifecycle', () => {
  it('newly created boards start with vacant blue and red seats plus empty session history', () => {
    const game = createGame('room-test');

    expect(game.players.p1).toMatchObject({ id: 'p1', name: 'Blue', color: '#0b7cff', clientId: null, status: 'vacant' });
    expect(game.players.p2).toMatchObject({ id: 'p2', name: 'Red', color: '#ff3b30', clientId: null, status: 'vacant' });
    expect(game.score).toEqual({ p1: 0, p2: 0 });
    expect(game.history).toEqual([]);
    expect(game.status).toBe('waiting');
  });

  it('lets clients claim seats and starts a fresh session once both sides are active', () => {
    const game = createGame('room-test');

    expect(claimSeat(game, 'p1', 'Desktop', 'desktop-client', 1000)).toEqual({ ok: true, playerId: 'p1' });
    expect(game.players.p1).toMatchObject({ name: 'Desktop', clientId: 'desktop-client', status: 'active' });
    expect(game.status).toBe('waiting');

    expect(claimSeat(game, 'p2', 'Phone', 'phone-client', 2000)).toEqual({ ok: true, playerId: 'p2' });
    expect(game.players.p2).toMatchObject({ name: 'Phone', clientId: 'phone-client', status: 'active' });
    expect(game.status).toBe('playing');
    expect(game.sessionStartedAt).toBe(2000);
    expect(game.score).toEqual({ p1: 0, p2: 0 });
  });

  it('keeps reconnect behavior for the same browser client without exposing client IDs publicly', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'First name', 'phone-client');
    claimSeat(game, 'p2', 'Other phone', 'other-client');

    expect(addPlayer(game, 'Updated name', 'phone-client')).toEqual({ ok: true, playerId: 'p1', rejoined: true });
    expect(game.players.p1?.name).toBe('Updated name');
    expect(publicGame(game).players.p1).not.toHaveProperty('clientId');
    expect(publicGame(game).players.p2).not.toHaveProperty('clientId');
  });

  it('rejects attempts to claim a seat occupied by another client', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client');

    const result = claimSeat(game, 'p1', 'Intruder', 'other-client');

    expect(result.ok).toBe(false);
    expect(result.error).toMatch(/occupied/i);
    expect(game.players.p1.name).toBe('Desktop');
  });

  it('lets a lone player leave without creating a forfeit history entry', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client');

    const result = leavePlayer(game, 'p1', 3000);

    expect(result).toMatchObject({ ok: true, playerId: 'p1', forfeit: false, winner: null });
    expect(game.players.p1).toMatchObject({ id: 'p1', name: 'Blue', clientId: null, status: 'vacant' });
    expect(game.history).toHaveLength(0);
    expect(game.score).toEqual({ p1: 0, p2: 0 });
    expect(game.status).toBe('waiting');
  });

  it('turns an explicit leave into a forfeit win, stores history, resets the board, and keeps the opponent seated', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client', 1000);
    claimSeat(game, 'p2', 'Phone', 'phone-client', 2000);
    makeMove(game, 'p1', { x: 5, y: 6 }, 2500);

    const result = leavePlayer(game, 'p1', 3000);

    expect(result).toMatchObject({ ok: true, playerId: 'p1', forfeit: true, winner: 'p2' });
    expect(game.history).toHaveLength(1);
    expect(game.history[0]).toMatchObject({
      reason: 'forfeit',
      winner: 'p2',
      loser: 'p1',
      finalScore: { p1: 0, p2: 1 },
      moveCount: 1,
    });
    expect(game.history[0].endReason).toContain('wins by forfeit');
    expect(game.players.p1).toMatchObject({ id: 'p1', name: 'Blue', clientId: null, status: 'vacant' });
    expect(game.players.p2).toMatchObject({ name: 'Phone', clientId: 'phone-client', status: 'active' });
    expect(game.score).toEqual({ p1: 0, p2: 0 });
    expect(game.ball).toEqual({ x: 4, y: 6 });
    expect(game.moves).toHaveLength(0);
    expect(game.status).toBe('waiting');
  });

  it('lets watchers explicitly join and leave the waiting list without occupying a seat', () => {
    const game = createGame('room-test', { now: 1000 });
    claimSeat(game, 'p1', 'Blue Player', 'blue-client', 1100);
    claimSeat(game, 'p2', 'Red Player', 'red-client', 1200);

    expect(joinWaitingList(game, 'Next Player', 'next-client', 1300)).toEqual({ ok: true, clientId: 'next-client', waiting: true });
    expect(game.waitingList).toEqual([{ displayName: 'Next Player', clientId: 'next-client', joinedAt: 1300 }]);
    expect(game.players.p1.clientId).toBe('blue-client');
    expect(game.players.p2.clientId).toBe('red-client');
    expect(publicGame(game)).not.toHaveProperty('waitingList');

    expect(joinWaitingList(game, 'Renamed Next', 'next-client', 1400)).toEqual({ ok: true, clientId: 'next-client', waiting: true, rejoined: true });
    expect(game.waitingList).toEqual([{ displayName: 'Renamed Next', clientId: 'next-client', joinedAt: 1300 }]);

    expect(leaveWaitingList(game, 'next-client', 1500)).toEqual({ ok: true, clientId: 'next-client', waiting: false });
    expect(game.waitingList).toEqual([]);
  });

  it('keeps an explicit leaver as a watcher until they press a seat join button', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client', 1000);
    claimSeat(game, 'p2', 'Phone', 'phone-client', 2000);

    leavePlayer(game, 'p1', 3000);
    const autoResume = addPlayer(game, 'Desktop again', 'desktop-client');

    expect(autoResume.ok).toBe(false);
    expect(autoResume.error).toMatch(/open seat/i);
    expect(game.players.p1).toMatchObject({ id: 'p1', status: 'vacant', clientId: null });

    const explicitJoin = claimSeat(game, 'p1', 'Desktop again', 'desktop-client', 4000);

    expect(explicitJoin).toEqual({ ok: true, playerId: 'p1' });
    expect(game.players.p1).toMatchObject({ name: 'Desktop again', clientId: 'desktop-client', status: 'active' });
  });

  it('starts a new zero-zero session on the same board when a replacement claims the vacated side', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client', 1000);
    claimSeat(game, 'p2', 'Phone', 'phone-client', 2000);
    leavePlayer(game, 'p1', 3000);

    const result = claimSeat(game, 'p1', 'New Blue', 'new-client', 4000);

    expect(result).toEqual({ ok: true, playerId: 'p1' });
    expect(game.status).toBe('playing');
    expect(game.sessionStartedAt).toBe(4000);
    expect(game.history).toHaveLength(1);
    expect(game.score).toEqual({ p1: 0, p2: 0 });
  });

  it('starts a new round without resetting the active player-session score or recording table history', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client', 1000);
    claimSeat(game, 'p2', 'Phone', 'phone-client', 2000);
    game.ball = { x: 4, y: 1 };
    game.turn = 'p1';

    expect(makeMove(game, 'p1', { x: 4, y: 0 }, 2500)).toMatchObject({ ok: true, gameOver: true });
    expect(game.score).toEqual({ p1: 1, p2: 0 });

    resetGame(game, 3000);

    expect(game.status).toBe('playing');
    expect(game.score).toEqual({ p1: 1, p2: 0 });
    expect(game.history).toHaveLength(0);
    expect(game.ball).toEqual({ x: 4, y: 6 });
    expect(game.moves).toHaveLength(0);
    expect(game.sessionStartedAt).toBe(2000);
  });

  it('records the cumulative session score with timestamps only when a player leaves, then resets for the next pairing', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client', 1000);
    claimSeat(game, 'p2', 'Phone', 'phone-client', 2000);
    game.ball = { x: 4, y: 1 };
    game.turn = 'p1';
    makeMove(game, 'p1', { x: 4, y: 0 }, 2500);
    resetGame(game, 3000);
    game.ball = { x: 4, y: 11 };
    game.turn = 'p2';
    makeMove(game, 'p2', { x: 4, y: 12 }, 3500);

    const result = leavePlayer(game, 'p1', 5000);

    expect(result).toMatchObject({ ok: true, playerId: 'p1', winner: null });
    expect(game.history).toHaveLength(1);
    expect(game.history[0]).toMatchObject({
      reason: 'session-ended',
      startedAt: 2000,
      endedAt: 5000,
      players: {
        p1: { name: 'Desktop' },
        p2: { name: 'Phone' },
      },
      finalScore: { p1: 1, p2: 1 },
    });
    expect(game.score).toEqual({ p1: 0, p2: 0 });

    claimSeat(game, 'p1', 'New Blue', 'new-client', 6000);

    expect(game.sessionStartedAt).toBe(6000);
    expect(game.score).toEqual({ p1: 0, p2: 0 });
    expect(game.history).toHaveLength(1);
  });

  it('increments board version on state-changing lifecycle operations', () => {
    const game = createGame('room-test', { now: 1000 });

    expect(game.version).toBe(1);

    claimSeat(game, 'p1', 'Desktop', 'desktop-client', 1100);
    expect(game.version).toBe(2);

    claimSeat(game, 'p2', 'Phone', 'phone-client', 1200);
    expect(game.version).toBe(3);

    pauseGame(game, { reason: 'manual', byPlayerId: 'p1', now: 1300 });
    expect(game.version).toBe(4);

    resumeGame(game, 1400);
    expect(game.version).toBe(5);

    makeMove(game, 'p1', { x: 5, y: 6 }, 1500);
    expect(game.version).toBe(6);

    resetGame(game, 1600);
    expect(game.version).toBe(7);

    leavePlayer(game, 'p1', 1700);
    expect(game.version).toBe(8);
  });

  it('exposes board last-activity and expiry metadata for public lists', () => {
    const game = createGame('room-test', { now: 1000 });

    expect(BOARD_TTL_MS).toBe(7 * 24 * 60 * 60 * 1000);
    expect(boardLastActivityAt(game)).toBe(1000);
    expect(boardExpiresAt(game)).toBe(1000 + BOARD_TTL_MS);
    expect(isBoardExpired(game, boardExpiresAt(game) - 1)).toBe(false);
    expect(isBoardExpired(game, boardExpiresAt(game))).toBe(true);

    claimSeat(game, 'p1', 'Desktop', 'desktop-client', 2500);
    const publicState = publicGame(game);

    expect(boardLastActivityAt(game)).toBe(2500);
    expect(publicState).toMatchObject({
      createdAt: 1000,
      updatedAt: 2500,
      lastActivityAt: 2500,
      expiresAt: 2500 + BOARD_TTL_MS,
    });
  });

  it('resets a new round to waiting when a board has a vacant seat', () => {
    const game = createGame('room-test');
    claimSeat(game, 'p1', 'Desktop', 'desktop-client');

    resetGame(game);

    expect(game.status).toBe('waiting');
    expect(game.score).toEqual({ p1: 0, p2: 0 });
    expect(game.moves).toHaveLength(0);
  });
});
