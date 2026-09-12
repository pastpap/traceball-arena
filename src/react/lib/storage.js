export const CLIENT_ID_KEY = "traceballElmClientId";
export const PLAYER_NAME_KEY = "traceballPlayerName";
export const ONLINE_TIMER_KEY = "traceballOnlineMoveTimer";
export const LOCAL_RUNTIME_ELM_KEY = "traceballElmLocalRuntime";

function defaultStorage() {
  return globalThis.window?.localStorage || globalThis.localStorage;
}

function randomToken(random = Math.random) {
  return random().toString(36).slice(2, 12);
}

export function getOrCreateClientId({
  storage = defaultStorage(),
  random = Math.random,
} = {}) {
  const existing = storage?.getItem?.(CLIENT_ID_KEY);
  if (existing) return existing;
  const clientId = `traceball-elm-${randomToken(random)}`;
  storage?.setItem?.(CLIENT_ID_KEY, clientId);
  return clientId;
}

export function generateRandomPlayerName(random = Math.random) {
  const pick = (values) => values[Math.floor(random() * values.length)];
  return `${pick(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${pick(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}

export function normalizePlayerName(name, fallback = "") {
  const value = String(name || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 24);
  return value || fallback;
}

export function getStoredPlayerName({
  storage = defaultStorage(),
  randomName = generateRandomPlayerName,
} = {}) {
  const stored = String(storage?.getItem?.(PLAYER_NAME_KEY) || "");
  const normalized = normalizePlayerName(stored, "");
  if (normalized && normalized !== "Elm Player") {
    storage?.setItem?.(PLAYER_NAME_KEY, normalized);
    return normalized;
  }
  const playerName = randomName();
  storage?.setItem?.(PLAYER_NAME_KEY, playerName);
  return playerName;
}

export function persistPlayerName(
  name,
  { storage = defaultStorage(), randomName = generateRandomPlayerName } = {},
) {
  const playerName = normalizePlayerName(name, randomName());
  storage?.setItem?.(PLAYER_NAME_KEY, playerName);
  return playerName;
}

export function normalizeMoveTimerSeconds(value, fallback = 15) {
  const seconds = Number(value);
  return Number.isFinite(seconds) && seconds >= 0 ? seconds : fallback;
}

export function getStoredOnlineMoveTimer({
  storage = defaultStorage(),
  fallback = 15,
} = {}) {
  return normalizeMoveTimerSeconds(
    storage?.getItem?.(ONLINE_TIMER_KEY),
    fallback,
  );
}

export function persistOnlineMoveTimer(
  seconds,
  { storage = defaultStorage(), fallback = 15 } = {},
) {
  const normalized = normalizeMoveTimerSeconds(seconds, fallback);
  storage?.setItem?.(ONLINE_TIMER_KEY, String(normalized));
  return normalized;
}

export function loadSavedElmLocalRuntime({ storage = defaultStorage() } = {}) {
  const raw = storage?.getItem?.(LOCAL_RUNTIME_ELM_KEY);
  if (!raw) return { savedLocalGame: null, savedLocalPaused: false };
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return { savedLocalGame: null, savedLocalPaused: false };
    }
    return {
      savedLocalGame:
        parsed.savedLocalGame && typeof parsed.savedLocalGame === "object"
          ? parsed.savedLocalGame
          : null,
      savedLocalPaused: Boolean(parsed.savedLocalPaused),
    };
  } catch {
    return { savedLocalGame: null, savedLocalPaused: false };
  }
}

export function saveElmLocalRuntime(
  { savedLocalGame, savedLocalPaused },
  { storage = defaultStorage() } = {},
) {
  storage?.setItem?.(
    LOCAL_RUNTIME_ELM_KEY,
    JSON.stringify({
      savedLocalGame: savedLocalGame || null,
      savedLocalPaused: Boolean(savedLocalPaused),
    }),
  );
}
