export const WIDTH = 9;
export const HEIGHT = 13;
export const TOP_GOAL_Y = 0;
export const BOTTOM_GOAL_Y = HEIGHT - 1;
export const GOAL_X_MIN = 3;
export const GOAL_X_MAX = 5;
export const START = { x: 4, y: 6 };
export const MOVE_TIME_LIMIT_OPTIONS_MS = [0, 5000, 10000, 15000, 20000, 30000];
export const DEFAULT_MOVE_TIME_LIMIT_MS = 15000;
export const DISCONNECT_GRACE_MS = 60_000;
export const BOARD_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function createGame(roomId, options = {}) {
  const now = Number.isFinite(options.now) ? options.now : Date.now();
  const game = {
    roomId,
    status: 'waiting',
    players: { p1: createSeat('p1'), p2: createSeat('p2') },
    turn: 'p1',
    ball: { ...START },
    visited: [pointKey(START)],
    segments: [],
    moves: [],
    score: { p1: 0, p2: 0 },
    winner: null,
    endReason: null,
    moveTimeLimitMs: normalizeMoveTimeLimitMs(options.moveTimeLimitMs ?? secondsToMs(options.moveTimeLimitSeconds), DEFAULT_MOVE_TIME_LIMIT_MS),
    turnStartedAt: null,
    lastTimeout: null,
    consecutiveTimeouts: 0,
    pause: null,
    sessionId: null,
    sessionStartedAt: null,
    sessionEndedAt: null,
    history: [],
    watcherClientIds: [],
    waitingList: [],
    createdAt: now,
    updatedAt: now,
    version: 1,
  };
  return game;
}

export function publicGame(game) {
  return {
    roomId: game.roomId,
    status: game.status,
    players: publicPlayers(game.players),
    turn: game.turn,
    ball: game.ball,
    visited: game.visited,
    segments: game.segments,
    moves: game.moves,
    score: game.score,
    winner: game.winner,
    endReason: game.endReason,
    moveTimeLimitMs: game.moveTimeLimitMs || 0,
    turnStartedAt: game.turnStartedAt,
    lastTimeout: game.lastTimeout || null,
    consecutiveTimeouts: game.consecutiveTimeouts || 0,
    pause: game.pause || null,
    sessionId: game.sessionId || null,
    sessionStartedAt: game.sessionStartedAt || null,
    sessionEndedAt: game.sessionEndedAt || null,
    history: Array.isArray(game.history) ? game.history.slice(-10) : [],
    historyCount: Array.isArray(game.history) ? game.history.length : 0,
    createdAt: game.createdAt ?? null,
    updatedAt: game.updatedAt ?? null,
    lastActivityAt: boardLastActivityAt(game),
    expiresAt: boardExpiresAt(game),
    legalMoves: game.status === 'playing' ? legalMoves(game) : [],
    board: { width: WIDTH, height: HEIGHT, goalXMin: GOAL_X_MIN, goalXMax: GOAL_X_MAX },
  };
}

export function boardLastActivityAt(game) {
  return Number(game?.updatedAt ?? game?.createdAt ?? 0);
}

export function boardExpiresAt(game) {
  return boardLastActivityAt(game) + BOARD_TTL_MS;
}

export function isBoardExpired(game, now = Date.now()) {
  return Number(now) >= boardExpiresAt(game);
}

export function addPlayer(game, name, clientId) {
  normalizeSeats(game);
  const cleanClientId = cleanClient(clientId);
  if (isWatcherClient(game, cleanClientId)) return { ok: false, error: 'Choose an open seat to rejoin this board.' };
  if (cleanClientId) {
    for (const id of ['p1', 'p2']) {
      if (game.players[id]?.clientId === cleanClientId) {
        const cleanName = cleanPlayerName(name, id);
        game.players[id].name = cleanName;
        game.players[id].status = 'active';
        game.players[id].disconnectedAt = null;
        game.players[id].canBeFreedAt = null;
        if (game.status === 'paused' && bothSeatsActive(game)) {
          resumeGame(game);
        } else {
          markUpdated(game);
        }
        return { ok: true, playerId: id, rejoined: true };
      }
    }
  }
  const seatId = vacantSeatIds(game)[0];
  if (!seatId) return { ok: false, error: 'Room is already full.' };
  return claimSeat(game, seatId, name, clientId);
}

export function claimSeat(game, seatId, name, clientId, now = Date.now()) {
  normalizeSeats(game);
  if (!['p1', 'p2'].includes(seatId)) return { ok: false, error: 'Invalid seat.' };
  const cleanClientId = cleanClient(clientId);
  const cleanName = cleanPlayerName(name, seatId);

  if (cleanClientId) {
    for (const id of ['p1', 'p2']) {
      if (game.players[id]?.clientId === cleanClientId) {
        game.players[id].name = cleanName;
        game.players[id].status = 'active';
        game.players[id].disconnectedAt = null;
        game.players[id].canBeFreedAt = null;
        forgetWatcherClient(game, cleanClientId);
        removeWaitingClient(game, cleanClientId);
        if (game.status === 'paused' && bothSeatsActive(game)) {
          resumeGame(game, now);
        } else {
          markUpdated(game, now);
        }
        return { ok: true, playerId: id, rejoined: true };
      }
    }
  }

  if (isSeatActive(game.players[seatId])) return { ok: false, error: 'That seat is already occupied.' };

  game.players[seatId] = { ...createSeat(seatId), name: cleanName, clientId: cleanClientId, status: 'active' };
  forgetWatcherClient(game, cleanClientId);
  removeWaitingClient(game, cleanClientId);
  if (bothSeatsActive(game) && game.status === 'waiting') startSession(game, now);
  markUpdated(game, now);
  return { ok: true, playerId: seatId };
}

export function rejoinPlayerByClient(game, clientId, now = Date.now()) {
  normalizeSeats(game);
  const cleanClientId = cleanClient(clientId);
  if (!cleanClientId) return { ok: false, error: 'Client identity is required.' };
  for (const id of ['p1', 'p2']) {
    const player = game.players[id];
    if (player?.clientId !== cleanClientId) continue;
    if (player.status === 'vacant') return { ok: false, error: 'That seat is vacant.' };
    player.status = 'active';
    player.disconnectedAt = null;
    player.canBeFreedAt = null;
    forgetWatcherClient(game, cleanClientId);
    removeWaitingClient(game, cleanClientId);
    if (game.status === 'paused' && bothSeatsActive(game)) {
      resumeGame(game, now);
    } else {
      markUpdated(game, now);
    }
    return { ok: true, playerId: id, rejoined: true };
  }
  return { ok: false, error: 'No reserved seat for this client.' };
}

export function joinWaitingList(game, name, clientId, now = Date.now()) {
  normalizeSeats(game);
  game.waitingList = Array.isArray(game.waitingList) ? game.waitingList : [];
  const cleanClientId = cleanClient(clientId);
  if (!cleanClientId) return { ok: false, error: 'Client identity is required.' };
  for (const id of ['p1', 'p2']) {
    if (game.players[id]?.clientId === cleanClientId && isSeatActive(game.players[id])) {
      return { ok: false, error: 'You already occupy a seat on this board.' };
    }
  }
  const displayName = cleanPlayerName(name, 'watcher');
  const existing = game.waitingList.find((person) => person.clientId === cleanClientId);
  if (existing) {
    existing.displayName = displayName;
    markUpdated(game, now);
    return { ok: true, clientId: cleanClientId, waiting: true, rejoined: true };
  }
  game.waitingList.push({ displayName, clientId: cleanClientId, joinedAt: now });
  markUpdated(game, now);
  return { ok: true, clientId: cleanClientId, waiting: true };
}

export function leaveWaitingList(game, clientId, now = Date.now()) {
  game.waitingList = Array.isArray(game.waitingList) ? game.waitingList : [];
  const cleanClientId = cleanClient(clientId);
  if (!cleanClientId) return { ok: false, error: 'Client identity is required.' };
  const before = game.waitingList.length;
  game.waitingList = game.waitingList.filter((person) => person.clientId !== cleanClientId);
  if (game.waitingList.length === before) return { ok: false, error: 'You are not on the waiting list.' };
  markUpdated(game, now);
  return { ok: true, clientId: cleanClientId, waiting: false };
}

export function leavePlayer(game, playerId, now = Date.now()) {
  normalizeSeats(game);
  if (!['p1', 'p2'].includes(playerId)) return { ok: false, error: 'Invalid player.' };
  if (!isSeatActive(game.players[playerId])) return { ok: false, error: 'That seat is already vacant.' };

  const opponentId = otherPlayer(playerId);
  const opponentActive = isSeatActive(game.players[opponentId]);
  const leavingClientId = cleanClient(game.players[playerId]?.clientId);
  let historyEntry = null;
  if (opponentActive && game.sessionStartedAt) {
    const wasPlaying = game.status === 'playing';
    if (wasPlaying) {
      game.score = game.score || { p1: 0, p2: 0 };
      game.score[opponentId] = (game.score[opponentId] || 0) + 1;
    }
    const endReason = wasPlaying
      ? `${playerName(game, playerId)} left. ${playerName(game, opponentId)} wins by forfeit.`
      : `${playerName(game, playerId)} left. Session ended.`;
    const scoreWinner = leadingPlayer(game.score);
    historyEntry = archiveSessionResult(game, {
      winner: wasPlaying ? opponentId : scoreWinner,
      loser: wasPlaying ? playerId : null,
      reason: wasPlaying ? 'forfeit' : 'session-ended',
      endReason,
      now,
    });
  }

  game.players[playerId] = createSeat(playerId);
  rememberWatcherClient(game, leavingClientId);
  resetCurrentBoardForNextSession(game, now, { autoStart: false });
  game.status = 'waiting';
  game.turnStartedAt = null;
  markUpdated(game, now);

  return { ok: true, playerId, winner: historyEntry?.winner || null, forfeit: historyEntry?.reason === 'forfeit', historyEntry };
}

export function markPlayerDisconnected(game, playerId, now = Date.now()) {
  normalizeSeats(game);
  if (!['p1', 'p2'].includes(playerId)) return { ok: false, error: 'Invalid player.' };
  const player = game.players[playerId];
  if (!isSeatActive(player)) return { ok: false, error: 'That seat is not active.' };
  player.status = 'disconnected';
  player.disconnectedAt = now;
  player.canBeFreedAt = now + DISCONNECT_GRACE_MS;
  if (game.status === 'playing') {
    pauseGame(game, { reason: 'disconnect', byPlayerId: playerId, now });
  } else {
    markUpdated(game, now);
  }
  return { ok: true, playerId, canBeFreedAt: player.canBeFreedAt };
}

export function freeDisconnectedSeat(game, actorPlayerId, seatId, now = Date.now()) {
  normalizeSeats(game);
  if (!['p1', 'p2'].includes(actorPlayerId) || !['p1', 'p2'].includes(seatId)) return { ok: false, error: 'Invalid seat.' };
  if (actorPlayerId === seatId) return { ok: false, error: 'You cannot free your own reserved seat.' };
  if (!isSeatActive(game.players[actorPlayerId])) return { ok: false, error: 'Only the seated opponent can free a disconnected seat.' };
  const seat = game.players[seatId];
  if (seat?.status !== 'disconnected') return { ok: false, error: 'That seat is not disconnected.' };
  if (!Number.isFinite(seat.canBeFreedAt) || now < seat.canBeFreedAt) return { ok: false, error: 'Disconnect grace has not expired.' };

  const wasSessionActive = Boolean(game.sessionStartedAt && ['playing', 'paused', 'finished'].includes(game.status));
  let historyEntry = null;
  if (wasSessionActive) {
    game.score = game.score || { p1: 0, p2: 0 };
    game.score[actorPlayerId] = (game.score[actorPlayerId] || 0) + 1;
    historyEntry = archiveSessionResult(game, {
      winner: actorPlayerId,
      loser: seatId,
      reason: 'disconnect-forfeit',
      endReason: `${playerName(game, seatId)} did not return. ${playerName(game, actorPlayerId)} wins by disconnect forfeit.`,
      now,
    });
  }

  game.players[seatId] = createSeat(seatId);
  resetCurrentBoardForNextSession(game, now, { autoStart: false, preserveScore: true });
  game.status = 'waiting';
  markUpdated(game, now);
  return { ok: true, playerId: seatId, winner: actorPlayerId, forfeit: wasSessionActive, historyEntry };
}

export function releaseExpiredDisconnectedSeats(game, now = Date.now()) {
  normalizeSeats(game);
  const released = [];
  for (const playerId of ['p1', 'p2']) {
    const seat = game.players[playerId];
    if (seat?.status !== 'disconnected') continue;
    if (!Number.isFinite(seat.canBeFreedAt) || now < seat.canBeFreedAt) continue;
    game.players[playerId] = createSeat(playerId);
    released.push(playerId);
  }
  if (!released.length) return { ok: false, released };
  resetCurrentBoardForNextSession(game, now, { autoStart: false, preserveScore: false });
  game.status = 'waiting';
  game.turnStartedAt = null;
  markUpdated(game, now);
  return { ok: true, released };
}

export function leavePlayerAfterOpponentGrace(game, playerId, now = Date.now()) {
  normalizeSeats(game);
  if (!['p1', 'p2'].includes(playerId)) return { ok: false, error: 'Invalid player.' };
  const opponentId = otherPlayer(playerId);
  const opponent = game.players[opponentId];
  if (!isSeatActive(game.players[playerId])) return { ok: false, error: 'That seat is already vacant.' };
  if (opponent?.status !== 'disconnected') {
    return leavePlayer(game, playerId, now);
  }

  game.players[playerId] = createSeat(playerId);
  game.players[opponentId] = createSeat(opponentId);
  resetCurrentBoardForNextSession(game, now, { autoStart: false, preserveScore: false });
  game.status = 'waiting';
  markUpdated(game, now);
  return { ok: true, playerId, abandoned: true };
}

export function makeMove(game, playerId, to, now = Date.now()) {
  if (game.status !== 'playing') return { ok: false, error: 'Game is not playing.' };
  if (hasTurnTimedOut(game, now)) return { ok: false, error: 'Time expired.', timeout: true };
  if (game.turn !== playerId) return { ok: false, error: 'Not your turn.' };

  game.consecutiveTimeouts = 0;
  game.pause = null;
  const from = game.ball;
  const target = normalizePoint(to);
  if (!target) return { ok: false, error: 'Invalid target.' };
  if (!isOneStep(from, target)) return { ok: false, error: 'Move one point in any of 8 directions.' };
  if (!isOnBoardOrGoal(target)) return { ok: false, error: 'Move stays on the pitch or through a gate.' };
  if (hasSegment(game, from, target)) return { ok: false, error: 'That line was already used.' };
  if (isTracedMarginSegment(from, target)) return { ok: false, error: 'The margin line is already traced.' };
  if (isBlockedCornerCut(from, target)) return { ok: false, error: 'Cannot cut through the outside corner.' };

  const visitedBefore = game.visited.includes(pointKey(target));
  const boundaryBounce = isBoundaryPoint(target);
  const segment = segmentKey(from, target);
  game.segments.push(segment);
  game.ball = target;
  if (!visitedBefore) game.visited.push(pointKey(target));

  const move = {
    playerId,
    from,
    to: target,
    segment,
    bounce: false,
    at: now,
  };

  const goal = goalForMove(playerId, target);
  if (goal) {
    game.status = 'finished';
    game.turnStartedAt = null;
    finishGame(game, goal.winner, goal.reason);
    move.goal = true;
    game.moves.push(move);
    markUpdated(game, now);
    return { ok: true, gameOver: true };
  }

  const getsBounce = visitedBefore || boundaryBounce;
  move.bounce = getsBounce;
  game.moves.push(move);
  if (!getsBounce) game.turn = otherPlayer(playerId);

  const moves = legalMoves(game);
  if (moves.length === 0) {
    game.status = 'finished';
    game.turnStartedAt = null;
    const winner = otherPlayer(game.turn);
    finishGame(game, winner, `${playerName(game, game.turn)} is stuck — ${playerName(game, winner)} wins.`);
  } else {
    startTurnClock(game, now);
  }
  markUpdated(game, now);
  return { ok: true, bounce: getsBounce };
}

export function legalMoves(game) {
  const options = [];
  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      if (dx === 0 && dy === 0) continue;
      const to = { x: game.ball.x + dx, y: game.ball.y + dy };
      if (isOnBoardOrGoal(to) && !hasSegment(game, game.ball, to) && !isTracedMarginSegment(game.ball, to) && !isBlockedCornerCut(game.ball, to)) {
        options.push(to);
      }
    }
  }
  return options;
}

export function canReachTurnChange(game, maxDepth = 120) {
  const seen = new Set();

  function search(state, depth) {
    const moves = legalMoves(state);
    if (moves.length === 0) return false;

    for (const to of moves) {
      const visitedBefore = state.visited.includes(pointKey(to));
      const bounce = visitedBefore || isBoundaryPoint(to);
      if (!bounce) return true;
    }

    if (depth >= maxDepth) return false;
    const key = `${pointKey(state.ball)}|${state.segments.slice().sort().join(';')}|${state.visited.slice().sort().join(';')}`;
    if (seen.has(key)) return false;
    seen.add(key);

    for (const to of moves) {
      const visitedBefore = state.visited.includes(pointKey(to));
      const bounce = visitedBefore || isBoundaryPoint(to);
      if (!bounce) continue;
      const next = {
        ...state,
        ball: { ...to },
        visited: visitedBefore ? state.visited.slice() : [...state.visited, pointKey(to)],
        segments: [...state.segments, segmentKey(state.ball, to)],
      };
      if (search(next, depth + 1)) return true;
    }

    return false;
  }

  return search({ ...game, ball: { ...game.ball }, visited: game.visited.slice(), segments: game.segments.slice() }, 0);
}

export function resetGame(game, now = Date.now()) {
  normalizeSeats(game);
  if (bothSeatsActive(game)) {
    resetCurrentBoardForNextSession(game, now, { autoStart: false, preserveScore: true, preserveSession: true });
    game.status = 'playing';
    startTurnClock(game, now);
    markUpdated(game, now);
    return game;
  }
  resetCurrentBoardForNextSession(game, now, { autoStart: false });
  markUpdated(game, now);
  return game;
}

export function normalizeMoveTimeLimitMs(value, fallback = 0) {
  const raw = Number(value);
  if (!Number.isFinite(raw)) return fallback;
  const rounded = Math.round(raw);
  return MOVE_TIME_LIMIT_OPTIONS_MS.includes(rounded) ? rounded : fallback;
}

export function startTurnClock(game, now = Date.now()) {
  game.turnStartedAt = game.status === 'playing' && game.moveTimeLimitMs > 0 ? now : null;
}

export function hasTurnTimedOut(game, now = Date.now()) {
  return game.status === 'playing'
    && game.moveTimeLimitMs > 0
    && Number.isFinite(game.turnStartedAt)
    && now - game.turnStartedAt >= game.moveTimeLimitMs;
}

export function applyTurnTimeout(game, now = Date.now()) {
  if (!hasTurnTimedOut(game, now)) return { ok: false };
  const timedOutPlayer = game.turn;
  game.lastTimeout = { playerId: timedOutPlayer, at: now, ball: { ...game.ball } };

  if ((game.consecutiveTimeouts || 0) >= 1) {
    pauseGame(game, { reason: 'idle', byPlayerId: timedOutPlayer, now, origin: 'consecutive-timeouts' });
    return { ok: true, timedOutPlayer, paused: true };
  }

  if (!canReachTurnChange(game)) {
    game.status = 'finished';
    game.turnStartedAt = null;
    const winner = otherPlayer(timedOutPlayer);
    finishGame(game, winner, `${playerName(game, timedOutPlayer)} cannot reach a turn-changing move after timing out — ${playerName(game, winner)} wins.`);
    markUpdated(game, now);
    return { ok: true, timedOutPlayer, gameOver: true, winner };
  }

  const nextPlayer = otherPlayer(timedOutPlayer);
  game.consecutiveTimeouts = 1;
  game.turn = nextPlayer;
  const moves = legalMoves(game);
  if (moves.length === 0) {
    game.status = 'finished';
    game.turnStartedAt = null;
    finishGame(game, timedOutPlayer, `${playerName(game, nextPlayer)} is stuck after ${playerName(game, timedOutPlayer)} timed out — ${playerName(game, timedOutPlayer)} wins.`);
  } else {
    startTurnClock(game, now);
  }
  markUpdated(game, now);
  return { ok: true, timedOutPlayer, nextPlayer };
}

export function pauseGame(game, { reason = 'manual', byPlayerId = null, now = Date.now(), origin = null } = {}) {
  if (game.status !== 'playing') return { ok: false, error: 'Game is not playing.' };
  const elapsed = game.moveTimeLimitMs > 0 && Number.isFinite(game.turnStartedAt)
    ? Math.max(0, now - game.turnStartedAt)
    : 0;
  const remainingMs = game.moveTimeLimitMs > 0
    ? Math.max(0, game.moveTimeLimitMs - elapsed)
    : 0;
  game.status = 'paused';
  game.turnStartedAt = null;
  game.pause = {
    reason,
    byPlayerId,
    pausedAt: now,
    resumeTurn: game.turn,
    remainingMs,
    origin,
  };
  markUpdated(game, now);
  return { ok: true };
}

export function resumeGame(game, now = Date.now(), byPlayerId = null) {
  normalizeSeats(game);
  if (game.status !== 'paused') return { ok: false, error: 'Game is not paused.' };
  if (!bothSeatsActive(game)) return { ok: false, error: 'Both seats must be filled before resuming.' };
  const pause = game.pause || null;
  if (byPlayerId && pause?.byPlayerId && byPlayerId !== pause.byPlayerId) {
    return { ok: false, error: 'Only the player who paused or timed out can resume this game.' };
  }
  const resetsIdleTimeoutClock = pause?.reason === 'idle' && pause?.origin === 'consecutive-timeouts';
  game.status = 'playing';
  game.turn = pause?.resumeTurn || game.turn;
  const remainingMs = resetsIdleTimeoutClock
    ? game.moveTimeLimitMs || 0
    : Number.isFinite(pause?.remainingMs)
      ? Math.max(0, Math.min(game.moveTimeLimitMs || 0, pause.remainingMs))
      : game.moveTimeLimitMs || 0;
  game.pause = null;
  if (!resetsIdleTimeoutClock) game.consecutiveTimeouts = 0;
  if (game.moveTimeLimitMs > 0) {
    game.turnStartedAt = now - (game.moveTimeLimitMs - remainingMs);
  } else {
    game.turnStartedAt = null;
  }
  markUpdated(game, now);
  return { ok: true };
}


export function createSeat(id) {
  return {
    id,
    name: id === 'p1' ? 'Blue' : 'Red',
    color: id === 'p1' ? '#0b7cff' : '#ff3b30',
    clientId: null,
    status: 'vacant',
  };
}

export function isSeatActive(player) {
  return player?.status === 'active';
}

export function activeSeatCount(game) {
  normalizeSeats(game);
  return ['p1', 'p2'].filter((id) => isSeatActive(game.players[id])).length;
}

export function bothSeatsActive(game) {
  return activeSeatCount(game) === 2;
}

export function vacantSeatIds(game) {
  normalizeSeats(game);
  return ['p1', 'p2'].filter((id) => !isSeatActive(game.players[id]));
}

export function startSession(game, now = Date.now()) {
  normalizeSeats(game);
  if (!bothSeatsActive(game)) return { ok: false, error: 'Both seats must be filled before starting.' };
  game.status = 'playing';
  game.turn = 'p1';
  game.ball = { ...START };
  game.visited = [pointKey(START)];
  game.segments = [];
  game.moves = [];
  game.score = { p1: 0, p2: 0 };
  game.winner = null;
  game.endReason = null;
  game.sessionId = createSessionId(now);
  game.sessionStartedAt = now;
  game.sessionEndedAt = null;
  game.lastTimeout = null;
  game.consecutiveTimeouts = 0;
  game.pause = null;
  startTurnClock(game, now);
  game.updatedAt = now;
  return { ok: true };
}

export function resetCurrentBoardForNextSession(game, now = Date.now(), { autoStart = true, preserveScore = false, preserveSession = false } = {}) {
  const players = game.players;
  const history = Array.isArray(game.history) ? game.history : [];
  const watcherClientIds = Array.isArray(game.watcherClientIds) ? [...game.watcherClientIds] : [];
  const waitingList = Array.isArray(game.waitingList) ? [...game.waitingList] : [];
  const moveTimeLimitMs = game.moveTimeLimitMs || 0;
  const createdAt = game.createdAt || now;
  const version = Number(game.version || 1);
  const score = preserveScore ? { p1: Number(game.score?.p1 || 0), p2: Number(game.score?.p2 || 0) } : { p1: 0, p2: 0 };
  const sessionId = preserveSession ? game.sessionId || createSessionId(now) : null;
  const sessionStartedAt = preserveSession ? game.sessionStartedAt || now : null;
  game.players = players;
  game.history = history;
  game.watcherClientIds = watcherClientIds;
  game.waitingList = waitingList;
  game.moveTimeLimitMs = moveTimeLimitMs;
  game.createdAt = createdAt;
  game.status = 'waiting';
  game.turn = 'p1';
  game.ball = { ...START };
  game.visited = [pointKey(START)];
  game.segments = [];
  game.moves = [];
  game.score = score;
  game.winner = null;
  game.endReason = null;
  game.sessionId = sessionId;
  game.sessionStartedAt = sessionStartedAt;
  game.sessionEndedAt = null;
  game.lastTimeout = null;
  game.consecutiveTimeouts = 0;
  game.pause = null;
  game.turnStartedAt = null;
  game.updatedAt = now;
  game.version = version;
  if (autoStart && bothSeatsActive(game)) startSession(game, now);
  return game;
}

export function archiveSessionResult(game, { winner, loser = winner ? otherPlayer(winner) : null, reason = 'finished', endReason = '', now = Date.now() } = {}) {
  game.history = Array.isArray(game.history) ? game.history : [];
  const finalScore = { p1: Number(game.score?.p1 || 0), p2: Number(game.score?.p2 || 0) };
  const entry = {
    id: game.sessionId || createSessionId(now),
    startedAt: game.sessionStartedAt || game.createdAt || now,
    endedAt: now,
    reason,
    winner,
    loser,
    players: {
      p1: snapshotPlayerForHistory(game.players.p1, 'p1'),
      p2: snapshotPlayerForHistory(game.players.p2, 'p2'),
    },
    finalScore,
    moveCount: Array.isArray(game.moves) ? game.moves.length : 0,
    endReason,
  };
  game.history.push(entry);
  if (game.history.length > 50) game.history = game.history.slice(-50);
  game.sessionEndedAt = now;
  return entry;
}

function publicPlayers(players = {}) {
  return {
    p1: publicPlayer(players.p1, 'p1'),
    p2: publicPlayer(players.p2, 'p2'),
  };
}

function publicPlayer(player, id) {
  const seat = player || createSeat(id);
  return {
    id: seat.id || id,
    name: seat.name || (id === 'p1' ? 'Blue' : 'Red'),
    color: seat.color || (id === 'p1' ? '#0b7cff' : '#ff3b30'),
    status: seat.status || 'active',
    disconnectedAt: seat.disconnectedAt ?? null,
    canBeFreedAt: seat.canBeFreedAt ?? null,
  };
}

function snapshotPlayerForHistory(player, id) {
  const seat = publicPlayer(player, id);
  return { id: seat.id, name: seat.name, color: seat.color };
}

function normalizeSeats(game) {
  game.players = game.players || {};
  for (const id of ['p1', 'p2']) {
    if (!game.players[id]) game.players[id] = createSeat(id);
    else if (!game.players[id].status) game.players[id].status = 'active';
    if (!game.players[id].color) game.players[id].color = id === 'p1' ? '#0b7cff' : '#ff3b30';
    if (!game.players[id].id) game.players[id].id = id;
  }
  if (!Array.isArray(game.history)) game.history = [];
  if (!Array.isArray(game.waitingList)) game.waitingList = [];
}

function cleanClient(clientId) {
  return String(clientId || '').trim().slice(0, 80) || null;
}

function cleanPlayerName(name, seatId) {
  return String(name || '').trim().slice(0, 24) || (seatId === 'p1' ? 'Blue' : seatId === 'p2' ? 'Red' : 'Guest');
}

function markUpdated(game, now = Date.now()) {
  game.updatedAt = now;
  game.version = Number(game.version || 0) + 1;
}

function createSessionId(now = Date.now()) {
  return `session-${now}-${Math.random().toString(36).slice(2, 8)}`;
}

function isWatcherClient(game, clientId) {
  return Boolean(clientId && Array.isArray(game.watcherClientIds) && game.watcherClientIds.includes(clientId));
}

function rememberWatcherClient(game, clientId) {
  if (!clientId) return;
  game.watcherClientIds = Array.isArray(game.watcherClientIds) ? game.watcherClientIds : [];
  if (!game.watcherClientIds.includes(clientId)) game.watcherClientIds.push(clientId);
}

function forgetWatcherClient(game, clientId) {
  if (!clientId || !Array.isArray(game.watcherClientIds)) return;
  game.watcherClientIds = game.watcherClientIds.filter((id) => id !== clientId);
}

function removeWaitingClient(game, clientId) {
  if (!clientId || !Array.isArray(game.waitingList)) return;
  game.waitingList = game.waitingList.filter((person) => person.clientId !== clientId);
}

function finishGame(game, winner, reason) {
  if (game.winner) return;
  game.winner = winner;
  game.endReason = reason;
  game.score = game.score || { p1: 0, p2: 0 };
  game.score[winner] = (game.score[winner] || 0) + 1;
}

function leadingPlayer(score = {}) {
  const p1 = Number(score.p1 || 0);
  const p2 = Number(score.p2 || 0);
  if (p1 === p2) return null;
  return p1 > p2 ? 'p1' : 'p2';
}

function playerName(game, id) {
  return game.players[id]?.name || id;
}

export function otherPlayer(id) {
  return id === 'p1' ? 'p2' : 'p1';
}

export function pointKey(p) {
  return `${p.x},${p.y}`;
}

function secondsToMs(seconds) {
  if (seconds === undefined || seconds === null || seconds === '') return undefined;
  return Number(seconds) * 1000;
}

function normalizePoint(to) {
  const x = Number(to?.x);
  const y = Number(to?.y);
  if (!Number.isInteger(x) || !Number.isInteger(y)) return null;
  return { x, y };
}

function isOneStep(a, b) {
  const dx = Math.abs(a.x - b.x);
  const dy = Math.abs(a.y - b.y);
  return dx <= 1 && dy <= 1 && (dx + dy > 0);
}

function isOnBoardOrGoal(p) {
  const inMain = p.x >= 0 && p.x < WIDTH && p.y > TOP_GOAL_Y && p.y < BOTTOM_GOAL_Y;
  const inGate = p.x >= GOAL_X_MIN && p.x <= GOAL_X_MAX && (p.y === TOP_GOAL_Y || p.y === BOTTOM_GOAL_Y);
  return inMain || inGate;
}

function isBoundaryPoint(p) {
  return p.x === 0 || p.x === WIDTH - 1 || p.y === 1 || p.y === HEIGHT - 2;
}

function isTracedMarginSegment(from, to) {
  const dx = Math.abs(from.x - to.x);
  const dy = Math.abs(from.y - to.y);
  if (dx + dy !== 1) return false;

  const verticalSide = from.x === to.x
    && (from.x === 0 || from.x === WIDTH - 1)
    && from.y >= 1 && from.y <= HEIGHT - 2
    && to.y >= 1 && to.y <= HEIGHT - 2;
  if (verticalSide) return true;

  const horizontalPitchEdge = from.y === to.y
    && (from.y === 1 || from.y === HEIGHT - 2)
    && from.x >= 0 && from.x < WIDTH
    && to.x >= 0 && to.x < WIDTH;
  if (!horizontalPitchEdge) return false;

  const inGateMouth = Math.min(from.x, to.x) >= GOAL_X_MIN
    && Math.max(from.x, to.x) <= GOAL_X_MAX;
  return !inGateMouth;
}

function isBlockedCornerCut(from, to) {
  // Avoid diagonal moves that leave/enter through the non-gate corners of the rectangular pitch.
  const diagonal = Math.abs(from.x - to.x) === 1 && Math.abs(from.y - to.y) === 1;
  if (!diagonal) return false;
  const touchesTopOutside = (from.y === 1 && to.y === 0) || (from.y === 0 && to.y === 1);
  const touchesBottomOutside = (from.y === HEIGHT - 2 && to.y === HEIGHT - 1) || (from.y === HEIGHT - 1 && to.y === HEIGHT - 2);
  if ((touchesTopOutside || touchesBottomOutside) && (to.x < GOAL_X_MIN || to.x > GOAL_X_MAX || from.x < GOAL_X_MIN || from.x > GOAL_X_MAX)) return true;
  return false;
}

function hasSegment(game, a, b) {
  return game.segments.includes(segmentKey(a, b));
}

export function segmentKey(a, b) {
  const ak = pointKey(a);
  const bk = pointKey(b);
  return ak < bk ? `${ak}|${bk}` : `${bk}|${ak}`;
}

function goalForMove(playerId, target) {
  if (target.y !== TOP_GOAL_Y && target.y !== BOTTOM_GOAL_Y) return null;
  const attacksTop = playerId === 'p1';
  const scoredOpponentGoal = (attacksTop && target.y === TOP_GOAL_Y) || (!attacksTop && target.y === BOTTOM_GOAL_Y);
  if (scoredOpponentGoal) return { winner: playerId, reason: `${playerId} scored!` };
  return { winner: otherPlayer(playerId), reason: `Own goal by ${playerId}.` };
}
