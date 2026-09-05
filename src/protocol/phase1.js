import { legalMoves, publicGame } from '../game.js';

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export function toPhase1StateMessage(game, options = {}) {
  const version = Number(options.version ?? game.version ?? 1);
  return {
    type: 'state',
    boardCode: game.roomId,
    version,
    board: toPhase1Board(game, { ...options, version }),
  };
}

export function toLegacyCompatibleStateMessage(game, options = {}) {
  return {
    ...toPhase1StateMessage(game, options),
    game: publicGame(game),
  };
}

export function toPhase1Board(game, options = {}) {
  const now = Number(options.now ?? game.updatedAt ?? Date.now());
  const version = Number(options.version ?? game.version ?? 1);
  const createdAt = Number(options.createdAt ?? game.createdAt ?? now);
  const updatedAt = Number(options.updatedAt ?? game.updatedAt ?? now);
  const state = phase1BoardState(game);
  const currentSession = phase1CurrentSession(game, state, now);
  return {
    code: game.roomId,
    version,
    state,
    seats: {
      blue: phase1Seat(game.players?.p1, 'blue', now),
      red: phase1Seat(game.players?.p2, 'red', now),
    },
    currentSession,
    watchers: phase1People(game.watchers || []),
    waitingList: phase1People(game.waitingList || []),
    history: phase1History(game.history || []),
    createdAt,
    updatedAt,
    expiresAt: updatedAt + WEEK_MS,
  };
}

function phase1BoardState(game) {
  if (game.status === 'finished') return 'BetweenRounds';
  if (game.status === 'playing') return 'SessionActive';
  if (game.status === 'paused') return 'SessionPaused';
  const occupied = ['p1', 'p2'].filter((id) => game.players?.[id]?.status === 'active').length;
  if (occupied === 1) return 'OneSeatOccupied';
  return 'WaitingForPlayers';
}

function phase1Seat(player, color, now = Date.now()) {
  const fallbackName = color === 'blue' ? 'Blue' : 'Red';
  if (!player || player.status === 'vacant') return { color, state: 'Vacant', player: null, disconnectedAt: null, canBeFreedAt: null, canBeFreed: false };
  if (player.status === 'disconnected') {
    const canBeFreedAt = player.canBeFreedAt ?? null;
    return {
      color,
      state: 'DisconnectedReserved',
      player: { displayName: player.name || fallbackName },
      disconnectedAt: player.disconnectedAt ?? null,
      canBeFreedAt,
      canBeFreed: Boolean(canBeFreedAt && now >= canBeFreedAt),
    };
  }
  return {
    color,
    state: 'Occupied',
    player: { displayName: player.name || fallbackName },
    disconnectedAt: null,
    canBeFreedAt: null,
    canBeFreed: false,
  };
}

function phase1CurrentSession(game, boardState, now) {
  if (!['SessionActive', 'SessionPaused', 'BetweenRounds'].includes(boardState)) return null;
  const roundState = boardState === 'BetweenRounds' ? 'PendingContinue' : 'Active';
  const sessionState = boardState === 'SessionPaused' ? 'Paused' : boardState === 'BetweenRounds' ? 'BetweenRounds' : 'Active';
  const configuredTimerMs = Number(game.moveTimeLimitMs || 0);
  const exposeTimer = configuredTimerMs !== 15000;
  const deadlineAt = configuredTimerMs > 0 && Number.isFinite(Number(game.turnStartedAt))
    ? Number(game.turnStartedAt) + configuredTimerMs
    : null;
  return {
    sessionId: game.sessionId || null,
    startedAt: game.sessionStartedAt || null,
    state: sessionState,
    ...(exposeTimer ? { moveTimeLimitSeconds: Math.round(configuredTimerMs / 1000) } : {}),
    score: {
      blue: Number(game.score?.p1 || 0),
      red: Number(game.score?.p2 || 0),
    },
    round: {
      state: roundState,
      turn: game.turn === 'p2' ? 'red' : 'blue',
      ball: game.ball || { x: 4, y: 6 },
      visited: Array.isArray(game.visited) ? game.visited : [],
      segments: Array.isArray(game.segments) ? game.segments : [],
      moves: Array.isArray(game.moves) ? game.moves : [],
      legalMoves: game.status === 'playing' ? legalMoves(game) : [],
      winner: game.winner === 'p2' ? 'red' : game.winner === 'p1' ? 'blue' : null,
      endReason: game.endReason || null,
      ...(exposeTimer && deadlineAt != null ? { deadlineAt } : {}),
    },
    pause: game.pause || null,
    updatedAt: now,
  };
}

function phase1People(people) {
  return people.map((person) => ({
    displayName: person.displayName || person.name || 'Guest',
    joinedAt: person.joinedAt ?? null,
  }));
}

function phase1History(history) {
  return history.map((entry) => ({
    sessionId: entry.id,
    startedAt: entry.startedAt,
    endedAt: entry.endedAt,
    reason: entry.reason,
    winner: entry.winner === 'p2' ? 'red' : entry.winner === 'p1' ? 'blue' : null,
    forfeitBy: entry.loser === 'p2' ? 'red' : entry.loser === 'p1' ? 'blue' : null,
    finalScore: {
      blue: Number(entry.finalScore?.p1 || 0),
      red: Number(entry.finalScore?.p2 || 0),
    },
    players: {
      blue: { displayName: entry.players?.p1?.name || 'Blue' },
      red: { displayName: entry.players?.p2?.name || 'Red' },
    },
    endReason: entry.endReason || '',
  }));
}
