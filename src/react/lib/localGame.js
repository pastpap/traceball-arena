import {
  createGame,
  claimSeat,
  makeMove,
  publicGame,
} from "../../game.js";

export const LOCAL_BOARD_CODE = "LOCAL";
const LOCAL_BLUE_CLIENT_ID = "local-blue";
const LOCAL_RED_CLIENT_ID = "local-red";

function cleanLocalName(name, fallback) {
  const trimmed = String(name || "").trim();
  return trimmed || fallback;
}

// Reuses the authoritative engine so local moves follow the same rules as online play.
export function createLocalGameState({
  blueName,
  redName,
  moveTimeLimitSeconds,
} = {}) {
  const game = createGame(LOCAL_BOARD_CODE, {
    moveTimeLimitSeconds: Number(moveTimeLimitSeconds) || 0,
  });
  claimSeat(game, "p1", cleanLocalName(blueName, "Blue"), LOCAL_BLUE_CLIENT_ID);
  claimSeat(game, "p2", cleanLocalName(redName, "Red"), LOCAL_RED_CLIENT_ID);
  return game;
}

export function buildLocalSnapshot(game) {
  if (!game || typeof game !== "object") return null;
  return {
    boardCode: LOCAL_BOARD_CODE,
    version: Number(game.version) || 0,
    game: publicGame(game),
  };
}

export function createLocalMatch(options = {}) {
  const game = createLocalGameState(options);
  return { game, snapshot: buildLocalSnapshot(game) };
}

function localMoveTargetFromPayload(payload) {
  const point = payload?.point;
  if (!point || typeof point !== "object") return null;
  const x = Number(point.x);
  const y = Number(point.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return { x, y };
}

export function applyLocalMoveClick({ game, payload } = {}) {
  if (!game || typeof game !== "object") {
    return { ok: false, error: "Start a local match first.", snapshot: null };
  }

  const to = localMoveTargetFromPayload(payload);
  if (!to) {
    return {
      ok: false,
      error: "Invalid move target.",
      snapshot: buildLocalSnapshot(game),
    };
  }

  const playerId = String(game.turn || "").trim();
  if (playerId !== "p1" && playerId !== "p2") {
    return {
      ok: false,
      error: "No active local turn.",
      snapshot: buildLocalSnapshot(game),
    };
  }

  const result = makeMove(game, playerId, to);
  return { ...result, snapshot: buildLocalSnapshot(game) };
}

export function getLocalOwnSeat(snapshot) {
  const turn = String(snapshot?.game?.turn || "").trim();
  return turn === "p1" || turn === "p2" ? turn : null;
}
