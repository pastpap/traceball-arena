export const WIDTH = 9;
export const HEIGHT = 13;
export const TOP_GOAL_Y = 0;
export const BOTTOM_GOAL_Y = HEIGHT - 1;
export const GOAL_X_MIN = 3;
export const GOAL_X_MAX = 5;
export const START = { x: 4, y: 6 };

export function createGame(roomId) {
  const game = {
    roomId,
    status: 'waiting',
    players: { p1: null, p2: null },
    turn: 'p1',
    ball: { ...START },
    visited: [pointKey(START)],
    segments: [],
    moves: [],
    score: { p1: 0, p2: 0 },
    winner: null,
    endReason: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  return game;
}

export function publicGame(game) {
  return {
    roomId: game.roomId,
    status: game.status,
    players: game.players,
    turn: game.turn,
    ball: game.ball,
    visited: game.visited,
    segments: game.segments,
    moves: game.moves,
    score: game.score,
    winner: game.winner,
    endReason: game.endReason,
    legalMoves: game.status === 'playing' ? legalMoves(game) : [],
    board: { width: WIDTH, height: HEIGHT, goalXMin: GOAL_X_MIN, goalXMax: GOAL_X_MAX },
  };
}

export function addPlayer(game, name, clientId) {
  const cleanName = String(name || '').trim().slice(0, 24) || 'Player';
  const cleanClientId = String(clientId || '').trim().slice(0, 80) || null;
  if (cleanClientId) {
    for (const id of ['p1', 'p2']) {
      if (game.players[id]?.clientId === cleanClientId) {
        game.players[id].name = cleanName;
        game.updatedAt = Date.now();
        return { ok: true, playerId: id, rejoined: true };
      }
    }
  }
  let playerId;
  if (!game.players.p1) {
    playerId = 'p1';
    game.players.p1 = { id: 'p1', name: cleanName, color: '#0b7cff', clientId: cleanClientId };
  } else if (!game.players.p2) {
    playerId = 'p2';
    game.players.p2 = { id: 'p2', name: cleanName, color: '#ff3b30', clientId: cleanClientId };
    game.status = 'playing';
  } else {
    return { ok: false, error: 'Room is already full.' };
  }
  game.updatedAt = Date.now();
  return { ok: true, playerId };
}

export function makeMove(game, playerId, to) {
  if (game.status !== 'playing') return { ok: false, error: 'Game is not playing.' };
  if (game.turn !== playerId) return { ok: false, error: 'Not your turn.' };

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
    at: Date.now(),
  };

  const goal = goalForMove(playerId, target);
  if (goal) {
    game.status = 'finished';
    finishGame(game, goal.winner, goal.reason);
    move.goal = true;
    game.moves.push(move);
    game.updatedAt = Date.now();
    return { ok: true, gameOver: true };
  }

  const getsBounce = visitedBefore || boundaryBounce;
  move.bounce = getsBounce;
  game.moves.push(move);
  if (!getsBounce) game.turn = otherPlayer(playerId);

  const moves = legalMoves(game);
  if (moves.length === 0) {
    game.status = 'finished';
    const winner = otherPlayer(game.turn);
    finishGame(game, winner, `${playerName(game, game.turn)} is stuck — ${playerName(game, winner)} wins.`);
  }
  game.updatedAt = Date.now();
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

export function resetGame(game) {
  const players = game.players;
  const score = { p1: game.score?.p1 || 0, p2: game.score?.p2 || 0 };
  Object.assign(game, createGame(game.roomId));
  game.players = players;
  game.score = score;
  game.status = players.p1 && players.p2 ? 'playing' : 'waiting';
  return game;
}

function finishGame(game, winner, reason) {
  if (game.winner) return;
  game.winner = winner;
  game.endReason = reason;
  game.score = game.score || { p1: 0, p2: 0 };
  game.score[winner] = (game.score[winner] || 0) + 1;
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
