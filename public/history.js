export const HISTORY_STORAGE_KEY = 'traceballGameHistory';
export const SUSPENDED_LOCAL_STORAGE_KEY = 'traceballSuspendedLocalGame';
export const MAX_HISTORY_ENTRIES = 50;

export function makeGameHistoryEntry(game, { mode = 'local', roomId = game?.roomId || 'local', savedAt = Date.now() } = {}) {
  if (!game || game.status !== 'finished') return null;
  const gameSnapshot = cloneGameForStorage(game);
  const normalizedMode = mode === 'online' ? 'online' : 'local';
  const normalizedRoomId = String(roomId || game.roomId || normalizedMode);
  const moveCount = gameSnapshot.moves.length;
  const signature = historySignature(gameSnapshot, normalizedMode, normalizedRoomId);
  return {
    id: signature,
    signature,
    mode: normalizedMode,
    roomId: normalizedRoomId,
    playedAt: savedAt,
    players: gameSnapshot.players,
    score: gameSnapshot.score,
    winner: gameSnapshot.winner,
    endReason: gameSnapshot.endReason,
    moveCount,
    moveTimeLimitMs: gameSnapshot.moveTimeLimitMs || 0,
    game: gameSnapshot,
  };
}

export function upsertGameHistory(existingHistory, game, options = {}, maxEntries = MAX_HISTORY_ENTRIES) {
  const entry = makeGameHistoryEntry(game, options);
  if (!entry) return Array.isArray(existingHistory) ? existingHistory : [];
  const history = Array.isArray(existingHistory) ? existingHistory : [];
  const withoutDuplicate = history.filter((item) => item?.signature !== entry.signature);
  return [entry, ...withoutDuplicate]
    .sort((a, b) => Number(b?.playedAt || 0) - Number(a?.playedAt || 0))
    .slice(0, Math.max(1, maxEntries));
}

export function makeSuspendedLocalGame(game, { mode = 'local', savedAt = Date.now() } = {}) {
  if (mode !== 'local' || !game || game.status !== 'paused') return null;
  return {
    mode: 'local',
    savedAt,
    game: cloneGameForStorage(game),
  };
}

export function restoreSuspendedLocalGame(suspended) {
  if (!suspended || suspended.mode !== 'local' || suspended.game?.status !== 'paused') return null;
  return {
    mode: 'local',
    savedAt: Number(suspended.savedAt) || 0,
    game: cloneGameForStorage(suspended.game),
  };
}

export function cloneGameForStorage(game) {
  return {
    roomId: String(game.roomId || 'local'),
    status: game.status,
    players: clonePlayers(game.players),
    turn: game.turn || 'p1',
    ball: clonePoint(game.ball || { x: 4, y: 6 }),
    visited: Array.isArray(game.visited) ? [...game.visited] : ['4,6'],
    segments: Array.isArray(game.segments) ? [...game.segments] : [],
    moves: cloneMoves(game.moves),
    score: { p1: Number(game.score?.p1 || 0), p2: Number(game.score?.p2 || 0) },
    winner: game.winner || null,
    endReason: game.endReason || null,
    moveTimeLimitMs: Number(game.moveTimeLimitMs || 0),
    turnStartedAt: Number.isFinite(game.turnStartedAt) ? game.turnStartedAt : null,
    lastTimeout: game.lastTimeout ? {
      playerId: game.lastTimeout.playerId,
      at: Number(game.lastTimeout.at || 0),
      ball: clonePoint(game.lastTimeout.ball || game.ball || { x: 4, y: 6 }),
    } : null,
    consecutiveTimeouts: Number(game.consecutiveTimeouts || 0),
    pause: game.pause ? {
      reason: game.pause.reason || 'manual',
      byPlayerId: game.pause.byPlayerId || null,
      pausedAt: Number(game.pause.pausedAt || 0),
      resumeTurn: game.pause.resumeTurn || game.turn || 'p1',
    } : null,
    legalMoves: Array.isArray(game.legalMoves) ? game.legalMoves.map(clonePoint) : [],
  };
}

function historySignature(game, mode, roomId) {
  const lastMove = game.moves[game.moves.length - 1];
  const lastSegment = lastMove?.segment || '';
  return [
    mode,
    roomId,
    game.winner || 'none',
    game.moves.length,
    game.endReason || '',
    lastSegment,
  ].join(':');
}

function clonePlayers(players = {}) {
  return {
    p1: players.p1 ? clonePlayer(players.p1, 'p1', '#0b7cff') : null,
    p2: players.p2 ? clonePlayer(players.p2, 'p2', '#ff3b30') : null,
  };
}

function clonePlayer(player, fallbackId, fallbackColor) {
  return {
    id: player.id || fallbackId,
    name: String(player.name || (fallbackId === 'p1' ? 'Blue' : 'Red')).slice(0, 24),
    color: player.color || fallbackColor,
    ...(player.clientId ? { clientId: player.clientId } : {}),
  };
}

function cloneMoves(moves = []) {
  return Array.isArray(moves) ? moves.map((move) => ({
    playerId: move.playerId,
    from: clonePoint(move.from),
    to: clonePoint(move.to),
    segment: move.segment || '',
    bounce: Boolean(move.bounce),
    goal: Boolean(move.goal),
    at: Number(move.at || 0),
  })) : [];
}

function clonePoint(point) {
  return { x: Number(point?.x || 0), y: Number(point?.y || 0) };
}
