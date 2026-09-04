const CLIENT_ID_KEY = "traceballElmClientId";
const PLAYER_NAME_KEY = "traceballPlayerName";
const ONLINE_TIMER_KEY = "traceballOnlineMoveTimer";
const LOCAL_RUNTIME_ELM_KEY = "traceballElmLocalRuntime";

function getStorage() {
  return window.localStorage || localStorage;
}

function getOrCreateClientId() {
  const storage = getStorage();
  const existing = storage?.getItem?.(CLIENT_ID_KEY);
  if (existing) return existing;
  const id = `traceball-elm-${Math.random().toString(36).slice(2, 12)}`;
  storage?.setItem?.(CLIENT_ID_KEY, id);
  return id;
}

function generateRandomPlayerName() {
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  return `${pick(["Neon", "Turbo", "Cosmic", "Lucky", "Pixel", "Rocket", "Thunder"])} ${pick(["Striker", "Falcon", "Comet", "Phantom", "Kicker", "Ace", "Wizard"])}`;
}

function getStoredPlayerName() {
  const storage = getStorage();
  const stored = String(storage?.getItem?.(PLAYER_NAME_KEY) || "").trim();
  if (stored && stored !== "Elm Player") return stored.slice(0, 24);
  const name = generateRandomPlayerName();
  storage?.setItem?.(PLAYER_NAME_KEY, name);
  return name;
}

function persistPlayerName(name) {
  const value =
    String(name || "")
      .trim()
      .slice(0, 24) || generateRandomPlayerName();
  getStorage()?.setItem?.(PLAYER_NAME_KEY, value);
  return value;
}

function normalizeMoveTimerSeconds(v, fallback = 15) {
  const n = Number(v);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

function getStoredOnlineMoveTimer() {
  return normalizeMoveTimerSeconds(
    getStorage()?.getItem?.(ONLINE_TIMER_KEY),
    15,
  );
}

function persistOnlineMoveTimer(seconds) {
  const v = normalizeMoveTimerSeconds(seconds, 15);
  getStorage()?.setItem?.(ONLINE_TIMER_KEY, String(v));
  return v;
}

function loadSavedElmLocalRuntime() {
  const raw = getStorage()?.getItem?.(LOCAL_RUNTIME_ELM_KEY);
  if (!raw) return { savedLocalGame: null, savedLocalPaused: false };
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object")
      return { savedLocalGame: null, savedLocalPaused: false };
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

function saveElmLocalRuntime({ savedLocalGame, savedLocalPaused }) {
  getStorage()?.setItem?.(
    LOCAL_RUNTIME_ELM_KEY,
    JSON.stringify({
      savedLocalGame: savedLocalGame || null,
      savedLocalPaused: Boolean(savedLocalPaused),
    }),
  );
}

function websocketUrl() {
  const loc = window.location || location;
  return `${loc.protocol === "https:" ? "wss:" : "ws:"}//${loc.host}/ws`;
}

function parseRawBoardCodeFromLocation() {
  const loc = window.location || location;
  const p = new URLSearchParams(loc.search || "");
  return String(p.get("board") || p.get("room") || p.get("code") || "").trim();
}

function installMobileBoardHero(root) {
  if (!root) return;

  let rafId = 0;

  const update = () => {
    rafId = 0;
    const boardStage = root.querySelector(".mobile-hero-board");
    if (!boardStage) return;

    const isMobile =
      window.matchMedia?.("(max-width: 640px)")?.matches ??
      window.innerWidth <= 640;
    if (!isMobile) {
      boardStage.classList.remove("mobile-hero-board-active");
      return;
    }

    const rect = boardStage.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight || 0;
    const viewportCenter = viewportHeight / 2;
    const boardCenter = rect.top + rect.height / 2;
    const centeredEnough =
      Math.abs(boardCenter - viewportCenter) <=
      Math.min(90, viewportHeight * 0.18);

    const scrollBottom = window.scrollY + viewportHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
    );
    const reachedBottom = scrollBottom >= docHeight - 4;

    boardStage.classList.toggle(
      "mobile-hero-board-active",
      centeredEnough || reachedBottom,
    );
  };

  const requestUpdate = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  const observer = new MutationObserver(requestUpdate);
  observer.observe(root, { childList: true, subtree: true });

  requestUpdate();
}

async function mountElmRuntime(root, { boardCode } = {}) {
  const elmMain = window.Elm?.Main;
  if (!elmMain?.init) return false;

  const clientId = getOrCreateClientId();
  const app = elmMain.init({
    node: root,
    flags: {
      boardCode: boardCode || "",
      clientId,
      playerName: getStoredPlayerName(),
      ...loadSavedElmLocalRuntime(),
      onlineMoveTimer: getStoredOnlineMoveTimer(),
    },
  });

  const push = (msg) => app?.ports?.incomingSocketMessage?.send?.(msg);
  const pushStatus = (s) => app?.ports?.incomingConnectionStatus?.send?.(s);
  let sock = null;

  const closeSocket = () => {
    if (!sock) return;
    sock.onopen = sock.onmessage = sock.onerror = sock.onclose = null;
    sock.close?.();
    sock = null;
  };

  const connect = (code, reqClientId = clientId, isNew = false) => {
    if (!(window.WebSocket || typeof WebSocket !== "undefined")) {
      pushStatus("error");
      push({ type: "error", error: "WebSocket unavailable." });
      return;
    }
    closeSocket();
    const ws = new (window.WebSocket || WebSocket)(websocketUrl());
    sock = ws;
    ws.onopen = () => {
      pushStatus("connected");
      ws.send(
        JSON.stringify({
          type: "watch",
          roomId: code,
          clientId: String(reqClientId || clientId || "").trim(),
        }),
      );
      if (isNew) app?.ports?.incomingBoardCreated?.send?.(code);
    };
    ws.onmessage = (e) => {
      try {
        push(JSON.parse(e.data));
      } catch {
        push({ type: "error", error: "malformed websocket message" });
      }
    };
    ws.onerror = () => pushStatus("error");
    ws.onclose = () => {
      if (ws !== sock) return;
      pushStatus("disconnected");
      sock = null;
    };
  };

  app?.ports?.outgoingClientCommand?.subscribe?.((cmd) => {
    if (!cmd || typeof cmd !== "object") return;
    const t = String(cmd.type || "");
    if (t === "watch") {
      connect(cmd.roomId, cmd.clientId, false);
      return;
    }
    if (t === "persistPlayerName") {
      persistPlayerName(cmd.name);
      return;
    }
    if (t === "persistLocalRuntime") {
      saveElmLocalRuntime({
        savedLocalGame:
          cmd.localGame && typeof cmd.localGame === "object"
            ? cmd.localGame
            : null,
        savedLocalPaused: Boolean(cmd.localPaused),
      });
      return;
    }
    if (t === "persistOnlineMoveTimer") {
      persistOnlineMoveTimer(cmd.seconds);
      return;
    }
    if (t === "updateUrl") {
      if (cmd.url && window.history?.replaceState)
        window.history.replaceState({}, "", String(cmd.url));
      return;
    }
    if (t === "fetchBoardList") {
      fetch("/api/rooms", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((d) => app?.ports?.incomingBoardList?.send?.(d))
        .catch(() => app?.ports?.incomingBoardList?.send?.({ rooms: [] }));
      return;
    }
    if (t === "createBoard") {
      const sec = Number(cmd.moveTimeLimitSeconds) || 15;
      fetch("/api/rooms", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ moveTimeLimitSeconds: sec }),
      })
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((d) => {
          const c = String(d?.roomId || "").trim();
          if (c) connect(c, clientId, true);
          else
            push({
              type: "error",
              error: "Board creation failed: no board code returned.",
            });
        })
        .catch(() => push({ type: "error", error: "Board creation failed." }));
      return;
    }
    if (!sock || typeof sock.send !== "function") {
      push({
        type: "error",
        error: "Socket unavailable for command dispatch.",
      });
      return;
    }
    sock.send(JSON.stringify(cmd));
  });

  return true;
}

async function mount() {
  const root = document.querySelector("#elm-root");
  if (!root) return;
  await mountElmRuntime(root, { boardCode: parseRawBoardCodeFromLocation() });
  installMobileBoardHero(root);
}

window.TraceballElmBridge = { mountElmRuntime };

if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((r) => {
      r.update?.().catch?.(() => {});
      if (r.waiting) r.waiting.postMessage({ type: "SKIP_WAITING" });
    })
    .catch(() => {});
}

mount();
