const FIXTURE_URL = "/fixtures/phase1/board-active-session.json";
const CLIENT_ID_KEY = "traceballElmClientId";
const PLAYER_NAME_KEY = "traceballPlayerName";
const ONLINE_TIMER_KEY = "traceballOnlineMoveTimer";
const LOCAL_RUNTIME_KEY = "traceballLocalRuntime";

function initialModel() {
  return {
    board: null,
    boardCode: "",
    version: 0,
    error: null,
    ignoredStaleVersion: null,
    connectionStatus: "idle",
    clientId: "",
    ownSeat: null,
    waitingListMember: false,
    autoJoinAttempted: false,
    pendingMoveKey: null,
    pendingNewRound: false,
    pendingFreeSeat: null,
    replayIndex: null,
    localRuntime: false,
    localPaused: false,
    winnerDismissed: false,
  };
}

function decodeStateMessage(message) {
  if (!message || typeof message !== "object") {
    return { ok: false, error: "malformed message: expected object" };
  }
  if (message.type === "error") {
    return { ok: false, error: message.error || "Server error." };
  }
  if (message.type === "BoardNotFound") {
    return {
      ok: false,
      error: message.message || "Board not found or expired.",
      boardCode: message.boardCode || "",
    };
  }
  if (message.type !== "state") {
    return {
      ok: false,
      error: `unsupported message type: ${message.type || "missing type"}`,
    };
  }
  if (!message.board || typeof message.board !== "object") {
    return { ok: false, error: "malformed state: missing board payload" };
  }
  const board = message.board;
  const version = Number(message.version ?? board.version);
  if (!Number.isFinite(version)) {
    return { ok: false, error: "malformed state: missing numeric version" };
  }
  if (!board.code || !board.seats || !board.seats.blue || !board.seats.red) {
    return { ok: false, error: "malformed state: missing board code or seats" };
  }
  return {
    ok: true,
    value: {
      board,
      boardCode: message.boardCode || board.code,
      version,
    },
  };
}

function applyState(model, message) {
  const current = model || initialModel();
  const decoded = decodeStateMessage(message);
  if (!decoded.ok) {
    return {
      ...current,
      error: decoded.error,
      boardCode: decoded.boardCode ?? current.boardCode,
    };
  }
  const incoming = decoded.value;
  if (incoming.version <= current.version) {
    return { ...current, ignoredStaleVersion: incoming.version, error: null };
  }
  const incomingWinner =
    incoming.board?.currentSession?.round?.winner ??
    incoming.board?.currentSession?.winner ??
    null;
  const currentWinner =
    current.board?.currentSession?.round?.winner ??
    current.board?.currentSession?.winner ??
    null;

  return {
    ...current,
    board: incoming.board,
    boardCode: incoming.boardCode,
    version: incoming.version,
    error: null,
    ignoredStaleVersion: null,
    replayIndex: null,
    winnerDismissed:
      currentWinner && incomingWinner === currentWinner
        ? Boolean(current.winnerDismissed)
        : false,
  };
}

function getStorage() {
  return window.localStorage || localStorage;
}

function getOrCreateClientId() {
  const storage = getStorage();
  const existing = storage?.getItem?.(CLIENT_ID_KEY);
  if (existing) return existing;
  const randomPart = Math.random().toString(36).slice(2, 12);
  const id = `traceball-elm-${randomPart}`;
  storage?.setItem?.(CLIENT_ID_KEY, id);
  return id;
}

function getStoredPlayerName() {
  const storage = getStorage();
  const stored = String(storage?.getItem?.(PLAYER_NAME_KEY) || "").trim();
  return stored.slice(0, 24) || "Elm Player";
}

function persistPlayerName(name) {
  const value =
    String(name || "")
      .trim()
      .slice(0, 24) || "Elm Player";
  getStorage()?.setItem?.(PLAYER_NAME_KEY, value);
  return value;
}

function normalizeMoveTimerSeconds(value, fallback = 15) {
  const seconds = Number(value);
  return Number.isFinite(seconds) && seconds >= 0 ? seconds : fallback;
}

function getStoredOnlineMoveTimer() {
  return normalizeMoveTimerSeconds(
    getStorage()?.getItem?.(ONLINE_TIMER_KEY),
    15,
  );
}

function persistOnlineMoveTimer(seconds) {
  const value = normalizeMoveTimerSeconds(seconds, 15);
  getStorage()?.setItem?.(ONLINE_TIMER_KEY, String(value));
  return value;
}

function timerOptions(selectedSeconds = 15) {
  const options = [0, 5, 10, 15, 30, 60];
  return options
    .map(
      (seconds) =>
        `<option value="${seconds}"${Number(selectedSeconds) === seconds ? " selected" : ""}>${seconds === 0 ? "Off" : `${seconds} seconds`}</option>`,
    )
    .join("");
}

function normalizeLocalName(value, fallback) {
  return (
    String(value || "")
      .trim()
      .slice(0, 24) || fallback
  );
}

function isLocalBoardPoint(point) {
  if (!point) return false;
  const x = Number(point.x);
  const y = Number(point.y);
  if (!Number.isInteger(x) || !Number.isInteger(y)) return false;
  if (x < 0 || x > 8 || y < 0 || y > 12) return false;
  if (y >= 1 && y <= 11) return true;
  return x >= 3 && x <= 5;
}

function localPointKey(point) {
  return `${Number(point.x)},${Number(point.y)}`;
}

function localSegmentKey(a, b) {
  const ak = localPointKey(a);
  const bk = localPointKey(b);
  return ak < bk ? `${ak}|${bk}` : `${bk}|${ak}`;
}

function localHasSegment(round, from, to) {
  return (
    Array.isArray(round?.segments) &&
    round.segments.includes(localSegmentKey(from, to))
  );
}

function localIsBoundaryPoint(point) {
  return (
    Number(point.x) === 0 ||
    Number(point.x) === 8 ||
    Number(point.y) === 1 ||
    Number(point.y) === 11
  );
}

function localIsTracedMarginSegment(from, to) {
  const dx = Math.abs(Number(from.x) - Number(to.x));
  const dy = Math.abs(Number(from.y) - Number(to.y));
  if (dx + dy !== 1) return false;

  const verticalSide =
    Number(from.x) === Number(to.x) &&
    (Number(from.x) === 0 || Number(from.x) === 8) &&
    Number(from.y) >= 1 &&
    Number(from.y) <= 11 &&
    Number(to.y) >= 1 &&
    Number(to.y) <= 11;
  if (verticalSide) return true;

  const horizontalPitchEdge =
    Number(from.y) === Number(to.y) &&
    (Number(from.y) === 1 || Number(from.y) === 11) &&
    Number(from.x) >= 0 &&
    Number(from.x) < 9 &&
    Number(to.x) >= 0 &&
    Number(to.x) < 9;
  if (!horizontalPitchEdge) return false;

  const inGateMouth =
    Math.min(Number(from.x), Number(to.x)) >= 3 &&
    Math.max(Number(from.x), Number(to.x)) <= 5;
  return !inGateMouth;
}

function localIsBlockedCornerCut(from, to) {
  const diagonal =
    Math.abs(Number(from.x) - Number(to.x)) === 1 &&
    Math.abs(Number(from.y) - Number(to.y)) === 1;
  if (!diagonal) return false;
  const touchesTopOutside =
    (Number(from.y) === 1 && Number(to.y) === 0) ||
    (Number(from.y) === 0 && Number(to.y) === 1);
  const touchesBottomOutside =
    (Number(from.y) === 11 && Number(to.y) === 12) ||
    (Number(from.y) === 12 && Number(to.y) === 11);
  if (
    (touchesTopOutside || touchesBottomOutside) &&
    (Number(to.x) < 3 ||
      Number(to.x) > 5 ||
      Number(from.x) < 3 ||
      Number(from.x) > 5)
  )
    return true;
  return false;
}

function computeLocalLegalMoves(round) {
  const from = round?.ball || { x: 4, y: 6 };
  const options = [];
  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      if (dx === 0 && dy === 0) continue;
      const to = { x: Number(from.x) + dx, y: Number(from.y) + dy };
      if (!isLocalBoardPoint(to)) continue;
      if (localHasSegment(round, from, to)) continue;
      if (localIsTracedMarginSegment(from, to)) continue;
      if (localIsBlockedCornerCut(from, to)) continue;
      options.push(to);
    }
  }
  return options;
}

function createLocalRuntimeBoard({
  blueName = "Blue",
  redName = "Red",
  moveTimeLimitSeconds = 15,
  score = { blue: 0, red: 0 },
  turn = "p1",
} = {}) {
  const ball = { x: 4, y: 6 };
  const visited = ["4,6"];
  const round = {
    state: "InProgress",
    turn,
    ball,
    visited,
    moves: [],
    segments: [],
    legalMoves: [],
  };
  round.legalMoves = computeLocalLegalMoves(round);
  return {
    code: "LOCAL",
    state: "SessionActive",
    seats: {
      blue: {
        state: "Occupied",
        player: {
          id: "local-blue",
          displayName: normalizeLocalName(blueName, "Blue"),
        },
      },
      red: {
        state: "Occupied",
        player: {
          id: "local-red",
          displayName: normalizeLocalName(redName, "Red"),
        },
      },
    },
    watchers: [],
    waitingList: [],
    updatedAt: "local-runtime",
    expiresAt: "local-runtime",
    currentSession: {
      state: "SessionActive",
      score: {
        blue: Number.isFinite(Number(score?.blue)) ? Number(score.blue) : 0,
        red: Number.isFinite(Number(score?.red)) ? Number(score.red) : 0,
      },
      moveTimeLimitSeconds: normalizeMoveTimerSeconds(moveTimeLimitSeconds, 15),
      round,
    },
  };
}

function createLocalRuntimeModel({
  blueName = "Blue",
  redName = "Red",
  moveTimeLimitSeconds = 15,
} = {}) {
  const board = createLocalRuntimeBoard({
    blueName,
    redName,
    moveTimeLimitSeconds,
  });
  return {
    ...initialModel(),
    board,
    boardCode: board.code,
    version: 1,
    ownSeat: "p1",
    localRuntime: true,
    localPaused: false,
    connectionStatus: "local",
    clientId: getOrCreateClientId(),
  };
}

function isValidLocalRuntimeModel(model) {
  if (!model || model.localRuntime !== true) return false;
  const board = model.board;
  const round = board?.currentSession?.round;
  if (!board || board.code !== "LOCAL" || !round) return false;
  if (
    !Array.isArray(round.visited) ||
    !Array.isArray(round.moves) ||
    !Array.isArray(round.legalMoves)
  )
    return false;
  if (
    !board?.seats?.blue?.player?.displayName ||
    !board?.seats?.red?.player?.displayName
  )
    return false;
  return true;
}

function serializeLocalRuntimeModel(model) {
  if (!isValidLocalRuntimeModel(model)) return "";
  return JSON.stringify({
    v: 1,
    savedAt: Date.now(),
    model,
  });
}

function restoreLocalRuntimeModel(rawValue) {
  if (!rawValue) return null;
  let parsed;
  try {
    parsed = JSON.parse(rawValue);
  } catch {
    return null;
  }
  const candidate = parsed?.model ?? parsed;
  if (!isValidLocalRuntimeModel(candidate)) return null;
  return {
    ...initialModel(),
    ...candidate,
    localRuntime: true,
    localPaused: Boolean(candidate.localPaused),
    connectionStatus: "local",
    boardCode: candidate.board?.code || "LOCAL",
    clientId: candidate.clientId || getOrCreateClientId(),
  };
}

function loadSavedLocalRuntimeModel() {
  const raw = getStorage()?.getItem?.(LOCAL_RUNTIME_KEY);
  const restored = restoreLocalRuntimeModel(raw);
  if (!restored && raw) getStorage()?.removeItem?.(LOCAL_RUNTIME_KEY);
  return restored;
}

function saveLocalRuntimeModel(model) {
  const serialized = serializeLocalRuntimeModel(model);
  if (serialized) getStorage()?.setItem?.(LOCAL_RUNTIME_KEY, serialized);
  return serialized;
}

function clearSavedLocalRuntimeModel() {
  getStorage()?.removeItem?.(LOCAL_RUNTIME_KEY);
}

function applyLocalRuntimeMove(model, key) {
  if (!isValidLocalRuntimeModel(model)) return null;
  const point = parseElmPointKey(key);
  if (!point) return null;
  const round = model.board.currentSession.round;
  const legalKeys = new Set(
    (round.legalMoves || []).map((move) => elmPointKey(move)),
  );
  if (!legalKeys.has(key)) return null;

  const from = round.ball || { x: 4, y: 6 };
  const turn = round.turn === "p2" ? "p2" : "p1";
  const visitedBefore =
    Array.isArray(round.visited) && round.visited.includes(key);
  const boundaryBounce = localIsBoundaryPoint(point);
  const move = {
    playerId: turn,
    from,
    to: point,
    segment: localSegmentKey(from, point),
    bounce: false,
    at: Date.now(),
  };
  const visited = Array.isArray(round.visited) ? [...round.visited] : ["4,6"];
  if (!visited.includes(key)) visited.push(key);
  const segments = Array.isArray(round.segments)
    ? [...round.segments, move.segment]
    : [move.segment];
  const moves = Array.isArray(round.moves) ? [...round.moves, move] : [move];

  const ownGoal =
    (turn === "p1" && Number(point.y) === 12) ||
    (turn === "p2" && Number(point.y) === 0);
  const opponentGoal =
    (turn === "p1" && Number(point.y) === 0) ||
    (turn === "p2" && Number(point.y) === 12);
  const winner = opponentGoal
    ? turn
    : ownGoal
      ? turn === "p1"
        ? "p2"
        : "p1"
      : null;
  const score = { ...model.board.currentSession.score };
  if (winner === "p1") score.blue = Number(score.blue || 0) + 1;
  if (winner === "p2") score.red = Number(score.red || 0) + 1;

  const nextTurn = turn === "p1" ? "p2" : "p1";
  const getsBounce = visitedBefore || boundaryBounce;
  move.bounce = getsBounce;
  const turnAfterMove = getsBounce ? turn : nextTurn;
  const inProgressRound = {
    ...round,
    state: "InProgress",
    turn: turnAfterMove,
    ball: point,
    visited,
    moves,
    segments,
    legalMoves: [],
  };
  const candidateLegalMoves = computeLocalLegalMoves(inProgressRound);
  const stuckWinner =
    !winner && candidateLegalMoves.length === 0
      ? turnAfterMove === "p1"
        ? "p2"
        : "p1"
      : null;
  if (stuckWinner === "p1") score.blue = Number(score.blue || 0) + 1;
  if (stuckWinner === "p2") score.red = Number(score.red || 0) + 1;
  const effectiveWinner = winner || stuckWinner;

  const nextRound = effectiveWinner
    ? {
        ...round,
        state: "BetweenRounds",
        turn: turnAfterMove,
        ball: point,
        winner: effectiveWinner,
        endReason: winner
          ? `${effectiveWinner === "p1" ? "Blue" : "Red"} scored in the local match.`
          : `${turnAfterMove === "p1" ? "Blue" : "Red"} is stuck — ${effectiveWinner === "p1" ? "Blue" : "Red"} wins.`,
        visited,
        moves,
        segments,
        legalMoves: [],
      }
    : {
        ...inProgressRound,
        legalMoves: candidateLegalMoves,
      };

  return {
    ...model,
    ownSeat: turnAfterMove,
    pendingMoveKey: key,
    replayIndex: null,
    error: null,
    board: {
      ...model.board,
      state: effectiveWinner ? "BetweenRounds" : "SessionActive",
      updatedAt: Date.now(),
      currentSession: {
        ...model.board.currentSession,
        state: effectiveWinner ? "BetweenRounds" : "SessionActive",
        score,
        round: nextRound,
      },
    },
  };
}

function restartLocalRuntimeRound(model) {
  if (!isValidLocalRuntimeModel(model)) return model;
  const blueName = model.board.seats.blue.player.displayName;
  const redName = model.board.seats.red.player.displayName;
  const moveTimeLimitSeconds = normalizeMoveTimerSeconds(
    model.board.currentSession.moveTimeLimitSeconds,
    15,
  );
  const score = model.board.currentSession.score || { blue: 0, red: 0 };
  const board = createLocalRuntimeBoard({
    blueName,
    redName,
    moveTimeLimitSeconds,
    score,
    turn: "p1",
  });
  return {
    ...model,
    board,
    ownSeat: "p1",
    localPaused: false,
    pendingMoveKey: null,
    pendingNewRound: false,
    replayIndex: null,
    error: null,
  };
}

function localRuntimeSummary(model) {
  if (!isValidLocalRuntimeModel(model))
    return "Resume the saved same-device game.";
  const blue = model.board.seats.blue.player.displayName;
  const red = model.board.seats.red.player.displayName;
  const timer = normalizeMoveTimerSeconds(
    model.board.currentSession.moveTimeLimitSeconds,
    15,
  );
  return `${blue} vs ${red}${timer ? ` · ${timer}s timer` : " · no timer"}`;
}

function websocketUrl() {
  const loc = window.location || location;
  const protocol = loc.protocol === "https:" ? "wss:" : "ws:";
  return `${protocol}//${loc.host}/ws`;
}

function parseBoardCodeFromLocation() {
  const loc = window.location || location;
  const params = new URLSearchParams(loc.search || "");
  return sanitizeBoardCode(
    params.get("board") || params.get("room") || params.get("code") || "",
  );
}

function sanitizeBoardCode(value) {
  const code = String(value || "").trim();
  return /^[A-Za-z0-9_-]{6,32}$/.test(code) ? code : "";
}

function createSocketBridge({ boardCode, root, onModelChange } = {}) {
  const code = sanitizeBoardCode(boardCode);
  const bridge = {
    boardCode: code,
    clientId: getOrCreateClientId(),
    model: {
      ...initialModel(),
      boardCode: code,
      clientId: getOrCreateClientId(),
      connectionStatus: "connecting",
    },
    socket: null,
    close() {
      if (bridge.socket) bridge.socket.close();
    },
    sendCommand(command) {
      if (!bridge.socket || bridge.socket.readyState !== 1) return false;
      bridge.socket.send(JSON.stringify(command));
      return true;
    },
    claimSeat(seatId, name = "Elm Player") {
      return bridge.sendCommand({
        type: "claimSeat",
        roomId: bridge.boardCode,
        seatId,
        name,
        clientId: bridge.clientId,
      });
    },
    joinWaitingList(name = "Elm Player") {
      return bridge.sendCommand({
        type: "joinWaitingList",
        roomId: bridge.boardCode,
        name,
        clientId: bridge.clientId,
      });
    },
    leaveWaitingList() {
      return bridge.sendCommand({
        type: "leaveWaitingList",
        roomId: bridge.boardCode,
        clientId: bridge.clientId,
      });
    },
    leaveSeat() {
      return bridge.sendCommand({ type: "leave" });
    },
    submitMove(point) {
      return bridge.sendCommand({ type: "move", to: point });
    },
    newRound() {
      return bridge.sendCommand({ type: "reset" });
    },
    freeSeat(seatId) {
      return bridge.sendCommand({ type: "freeSeat", seatId });
    },
  };
  if (!code) {
    bridge.model = {
      ...bridge.model,
      connectionStatus: "error",
      error: "Enter a valid board code to watch.",
    };
    renderBridge(root, bridge, onModelChange);
    return bridge;
  }
  const SocketCtor = window.WebSocket || WebSocket;
  bridge.socket = new SocketCtor(websocketUrl());
  bridge.socket.onopen = () => {
    bridge.model = {
      ...bridge.model,
      connectionStatus: "connected",
      error: null,
    };
    bridge.socket.send(
      JSON.stringify({
        type: "watch",
        roomId: code,
        clientId: bridge.clientId,
      }),
    );
    renderBridge(root, bridge, onModelChange);
  };
  bridge.socket.onmessage = (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch {
      bridge.model = {
        ...bridge.model,
        error: "malformed websocket message",
        connectionStatus: "connected",
      };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === "joined") {
      bridge.model = {
        ...bridge.model,
        ownSeat: message.playerId || bridge.model.ownSeat,
        waitingListMember: false,
        error: null,
        pendingMoveKey: null,
        pendingNewRound: false,
        pendingFreeSeat: null,
      };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === "left") {
      bridge.model = { ...bridge.model, ownSeat: null, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === "waitingListJoined") {
      bridge.model = { ...bridge.model, waitingListMember: true, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === "waitingListLeft") {
      bridge.model = { ...bridge.model, waitingListMember: false, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === "seatFreed") {
      bridge.model = { ...bridge.model, pendingFreeSeat: null, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === "error") {
      const errorText = message.error || "Server error.";
      if (/not found|expired/i.test(errorText)) {
        bridge.model = { ...bridge.model, error: errorText };
        renderBridge(root, bridge, onModelChange);
      } else {
        // Transient gameplay error (e.g. timer): show as toast, keep board visible
        setToast(errorText);
        if (
          bridge.model.pendingMoveKey != null ||
          bridge.model.pendingNewRound ||
          bridge.model.pendingFreeSeat != null
        ) {
          bridge.model = {
            ...bridge.model,
            pendingMoveKey: null,
            pendingNewRound: false,
            pendingFreeSeat: null,
          };
          refreshBridgeRender(root, bridge);
        }
      }
      return;
    }
    bridge.model = {
      ...applyState(bridge.model, message),
      connectionStatus: bridge.model.connectionStatus,
      clientId: bridge.clientId,
      ownSeat: bridge.model.ownSeat,
      waitingListMember: bridge.model.waitingListMember,
      autoJoinAttempted: bridge.model.autoJoinAttempted,
      pendingMoveKey: null,
      pendingNewRound: false,
      pendingFreeSeat: null,
    };
    saveGameToHistory(bridge.model);
    renderBridge(root, bridge, onModelChange);
  };
  bridge.socket.onerror = () => {
    bridge.model = {
      ...bridge.model,
      connectionStatus: "error",
      error: "WebSocket connection error.",
    };
    renderBridge(root, bridge, onModelChange);
  };
  bridge.socket.onclose = () => {
    bridge.model = { ...bridge.model, connectionStatus: "disconnected" };
    renderBridge(root, bridge, onModelChange);
  };
  renderBridge(root, bridge, onModelChange);
  return bridge;
}

function boardUrl(code = "") {
  return `/?board=${encodeURIComponent(code)}`;
}

function absoluteRoomInviteUrl(code = "") {
  const loc = window.location || location;
  const origin = loc.origin || `${loc.protocol}//${loc.host}`;
  return `${origin}/room/${encodeURIComponent(code)}`;
}

function roomSummaryFromBoard(board) {
  if (!board?.code) return null;
  const session = board.currentSession;
  const activeCount = ["blue", "red"].filter(
    (seat) => board.seats?.[seat]?.state !== "Vacant",
  ).length;
  return {
    roomId: board.code,
    elmUrl: boardUrl(board.code),
    state: board.state,
    status: session?.state || board.state,
    occupancy: { activeCount, vacantCount: Math.max(0, 2 - activeCount) },
    score: session?.score || { blue: 0, red: 0 },
    moveCount: session?.round?.moves?.length || 0,
    watcherCount: Array.isArray(board.watchers) ? board.watchers.length : 0,
    waitingListCount: Array.isArray(board.waitingList)
      ? board.waitingList.length
      : 0,
    lastActivityAt: board.updatedAt || "current board",
    expiresAt: board.expiresAt || "unknown",
  };
}

function renderInviteShare(model = initialModel()) {
  const code = sanitizeBoardCode(model?.boardCode || model?.board?.code || "");
  if (!code) return "";
  const inviteUrl = absoluteRoomInviteUrl(code);
  return `
    <section id="inviteBox" class="invite" aria-label="Share this match">
      <img id="qr" alt="QR code for board ${escapeHtml(code)}" src="/api/qr?url=${encodeURIComponent(inviteUrl)}" />
      <div>
        <label for="inviteLink">Send this link to a friend</label>
        <input id="inviteLink" readonly value="${escapeHtml(inviteUrl)}" />
        <button id="copyInviteCard" class="ghost" type="button" data-elm-command="copy-invite">Copy invite link</button>
        <p id="roomText" class="elm-shell-note">Board ${escapeHtml(code)} · friends can scan the QR or open the link.</p>
      </div>
    </section>`;
}

async function createBoardAsBlue({
  root,
  name = "Elm Player",
  moveTimeLimitSeconds = 15,
  onModelChange,
} = {}) {
  const response = await fetch("/api/rooms", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ moveTimeLimitSeconds }),
  });
  if (!response.ok) throw new Error(`Create board failed: ${response.status}`);
  const data = await response.json();
  const boardCode = sanitizeBoardCode(data.roomId);
  if (!boardCode) throw new Error("Create board failed: invalid board code.");
  if (window.history?.replaceState)
    window.history.replaceState({}, "", boardUrl(boardCode));
  const bridge = createSocketBridge({ boardCode, root, onModelChange });
  const originalOnOpen = bridge.socket?.onopen;
  if (bridge.socket) {
    bridge.socket.onopen = () => {
      originalOnOpen?.();
      bridge.claimSeat("p1", name);
    };
  }
  return bridge;
}

function createLocalBridge({
  root,
  blueName = "Blue",
  redName = "Red",
  moveTimeLimitSeconds = 15,
  restoredModel = null,
  onModelChange,
} = {}) {
  const model =
    restoredModel ||
    createLocalRuntimeModel({ blueName, redName, moveTimeLimitSeconds });
  const bridge = {
    localRuntime: true,
    model,
    close() {},
    leaveSeat() {
      clearSavedLocalRuntimeModel();
      bridge.model = {
        ...initialModel(),
        clientId: getOrCreateClientId(),
        connectionStatus: "idle",
        localRuntime: false,
        localPaused: false,
      };
      return true;
    },
    newRound() {
      bridge.model = restartLocalRuntimeRound(bridge.model);
      saveLocalRuntimeModel(bridge.model);
      return true;
    },
  };
  saveLocalRuntimeModel(bridge.model);
  renderBridge(root, bridge, onModelChange);
  return bridge;
}

function renderBridge(root, bridge, onModelChange) {
  if (root) root.innerHTML = renderModel(bridge.model);
  wireElmBoardCanvas(bridge.model);
  if (typeof onModelChange === "function") onModelChange(bridge.model, bridge);
}

function seatLabel(seat) {
  if (!seat || seat.state === "Vacant") return "Open seat";
  const name = seat.player?.displayName || "Unknown player";
  const disconnected =
    seat.state === "DisconnectedReserved" && seat.canBeFreed
      ? " · can be freed"
      : "";
  return `${name} · ${seat.state}${disconnected}`;
}

function peopleList(title, people) {
  const items =
    Array.isArray(people) && people.length
      ? `<ul>${people.map((person) => `<li>${escapeHtml(person.displayName || "Anonymous")}</li>`).join("")}</ul>`
      : "<p>None</p>";
  return `<section class="elm-people"><h3>${title}</h3>${items}</section>`;
}

function renderOpenBoardForm(model = initialModel()) {
  const code = model.boardCode || "";
  const playerName = getStoredPlayerName();
  const onlineTimer = getStoredOnlineMoveTimer();
  const savedLocal = loadSavedLocalRuntimeModel();
  const localBlue =
    savedLocal?.board?.seats?.blue?.player?.displayName || "Blue";
  const localRed = savedLocal?.board?.seats?.red?.player?.displayName || "Red";
  const localTimer = normalizeMoveTimerSeconds(
    savedLocal?.board?.currentSession?.moveTimeLimitSeconds,
    15,
  );
  const resumeHiddenClass = savedLocal ? "" : " hidden";
  return `
    <div id="homeModeToggle" class="home-mode-toggle mobile-page active" data-mobile-page="invite" role="group" aria-label="Home game type">
      <button id="onlineMode" class="active" type="button" data-home-mode="online" aria-pressed="true">Online</button>
      <button id="localMode" type="button" data-home-mode="local" aria-pressed="false">Local</button>
    </div>
    <div class="online-form-stack">
      <label class="player-name-field" for="playerNameInput">
        <span>Your name</span>
        <input id="playerNameInput" autocomplete="nickname" maxlength="24" placeholder="Your name" value="${escapeHtml(playerName)}" required />
      </label>
      <form class="elm-open-board" id="elmOpenBoardForm">
        <label for="elmBoardCode">Open board as watcher</label>
        <div class="elm-open-row">
          <input id="elmBoardCode" name="board" value="${escapeHtml(code)}" placeholder="Board code" autocomplete="off" />
          <button type="submit">Watch board</button>
          <button type="button" id="elmCreateBoard">Create board as Blue</button>
        </div>
        <label class="timer-setting" for="onlineMoveTimer"><span>Move timer</span><select id="onlineMoveTimer">${timerOptions(onlineTimer)}</select></label>
        <p class="elm-connection">Connection: ${escapeHtml(model.connectionStatus || "idle")}</p>
      </form>
    </div>
    <section id="localPanel" class="card join-panel local-panel mobile-page hidden" data-mobile-page="invite">
      <div><h2>Local same-screen PvP</h2><p>Players face each other and play on this device. The pitch stays fixed for local play.</p></div>
      <section id="resumeLocalCard" class="resume-local-card${resumeHiddenClass}" aria-live="polite"><div><strong>Paused local game</strong><p id="resumeLocalText">${escapeHtml(localRuntimeSummary(savedLocal))}</p></div><div class="resume-local-actions"><button id="resumeLocalSaved" class="primary" type="button">Resume saved game</button><button id="discardLocalSaved" class="ghost" type="button">Discard</button></div></section>
      <form id="localForm">
        <input id="localP1Name" maxlength="24" placeholder="Blue player name" value="${escapeHtml(localBlue)}" required />
        <input id="localP2Name" maxlength="24" placeholder="Red player name" value="${escapeHtml(localRed)}" required />
        <label class="timer-setting" for="localMoveTimer"><span>Move timer</span><select id="localMoveTimer">${timerOptions(localTimer)}</select></label>
        <button id="startLocal" class="primary" type="submit">Start local match</button>
      </form>
    </section>`;
}

const ELM_BOARD = {
  width: 9,
  height: 13,
  goalXMin: 3,
  goalXMax: 5,
  viewWidth: 900,
  viewHeight: 1300,
  margin: 86,
};

function elmScreenX(x) {
  return (
    ELM_BOARD.margin +
    Number(x) *
      ((ELM_BOARD.viewWidth - ELM_BOARD.margin * 2) / (ELM_BOARD.width - 1))
  );
}

function elmScreenY(y) {
  return (
    ELM_BOARD.margin +
    Number(y) *
      ((ELM_BOARD.viewHeight - ELM_BOARD.margin * 2) / (ELM_BOARD.height - 1))
  );
}

function elmPointKey(point) {
  return `${Number(point?.x)},${Number(point?.y)}`;
}

function elmGridPoints() {
  const pts = [];
  for (let y = 1; y <= 11; y += 1)
    for (let x = 0; x <= 8; x += 1) pts.push({ x, y });
  for (const y of [0, 12]) for (let x = 3; x <= 5; x += 1) pts.push({ x, y });
  return pts;
}

function isElmGateBouncePoint(point) {
  return (
    Number(point?.x) === 4 &&
    (Number(point?.y) === 1 || Number(point?.y) === 11)
  );
}

function playerColor(playerId) {
  return playerId === "p2" || playerId === "red" ? "#ff3b30" : "#0b7cff";
}

function normalizeSeatId(seatId) {
  if (seatId === "p1" || seatId === "blue") return "blue";
  if (seatId === "p2" || seatId === "red") return "red";
  return null;
}

function legalMoveContext(model, round) {
  const turn = normalizeSeatId(round?.turn) || "blue";
  const ownSeat = normalizeSeatId(model?.ownSeat);
  if (!ownSeat) {
    return {
      name: "watcher",
      state: "preview",
      color: turn,
      playable: false,
      note: "Watching: legal moves are preview only.",
    };
  }
  if (ownSeat === turn) {
    return {
      name: "own-turn",
      state: "ready",
      color: turn,
      playable: true,
      note: "Your legal moves. Tap a highlighted point to move.",
    };
  }
  return {
    name: "opponent-turn",
    state: "waiting",
    color: turn,
    playable: false,
    note: "Opponent turn: legal moves shown for orientation.",
  };
}

function renderSvgLine(from, to, attrs = "") {
  return `<line x1="${elmScreenX(from.x)}" y1="${elmScreenY(from.y)}" x2="${elmScreenX(to.x)}" y2="${elmScreenY(to.y)}" ${attrs} />`;
}
function parseElmPointKey(key) {
  const match = String(key || "").match(/^(\d+),(\d+)$/);
  if (!match) return null;
  const point = { x: Number(match[1]), y: Number(match[2]) };
  if (!Number.isInteger(point.x) || !Number.isInteger(point.y)) return null;
  if (
    point.x < 0 ||
    point.x >= ELM_BOARD.width ||
    point.y < 0 ||
    point.y >= ELM_BOARD.height
  )
    return null;
  return point;
}

function isLegalMoveKey(model, key) {
  const point = parseElmPointKey(key);
  if (!point) return false;
  const legalMoves = model?.board?.currentSession?.round?.legalMoves;
  return (
    Array.isArray(legalMoves) &&
    legalMoves.some((move) => elmPointKey(move) === key)
  );
}

function isOwnTurn(model) {
  const round = model?.board?.currentSession?.round;
  const context = legalMoveContext(model, round);
  return context.name === "own-turn";
}

function replayMoveCount(model) {
  return Number(model?.board?.currentSession?.round?.moves?.length || 0);
}

function clampReplayIndex(value, max) {
  const raw = Number(value);
  if (!Number.isFinite(raw)) return max;
  return Math.max(0, Math.min(max, Math.trunc(raw)));
}

function replayEffectiveIndex(model) {
  const max = replayMoveCount(model);
  return model?.replayIndex == null
    ? max
    : clampReplayIndex(model.replayIndex, max);
}

function replayIsActive(model) {
  const max = replayMoveCount(model);
  return (
    max > 0 && model?.replayIndex != null && replayEffectiveIndex(model) < max
  );
}

function applyReplayCommand(model, command) {
  const max = replayMoveCount(model);
  if (max <= 0) return model;
  const current = replayEffectiveIndex(model);
  let next = current;
  if (command === "replay-start") next = 0;
  if (command === "replay-prev") next = Math.max(0, current - 1);
  if (command === "replay-next") next = Math.min(max, current + 1);
  if (command === "replay-end") next = max;
  return {
    ...model,
    replayIndex: next >= max ? null : next,
    pendingMoveKey: null,
  };
}

function projectRoundForReplay(round, replayIndex) {
  const allMoves = Array.isArray(round?.moves) ? round.moves : [];
  const max = allMoves.length;
  const step = replayIndex == null ? max : clampReplayIndex(replayIndex, max);
  if (step >= max) {
    return {
      round,
      replayActive: false,
      replayStep: max,
      replayTotal: max,
    };
  }

  const start = { x: 4, y: 6 };
  const moves = allMoves.slice(0, step);
  const visited = ["4,6"];
  const segments = [];
  for (const move of moves) {
    if (!move) continue;
    const toKey = elmPointKey(move.to || start);
    if (!visited.includes(toKey)) visited.push(toKey);
    if (move.segment) segments.push(move.segment);
    else if (move.from && move.to)
      segments.push(`${elmPointKey(move.from)}|${elmPointKey(move.to)}`);
  }

  const last = moves.at(-1);
  const turn =
    step === 0
      ? allMoves[0]?.playerId || round?.turn || "p1"
      : last?.bounce
        ? last?.playerId
        : last?.playerId === "p1"
          ? "p2"
          : last?.playerId === "p2"
            ? "p1"
            : round?.turn;

  return {
    round: {
      ...round,
      state: "Replay",
      turn,
      ball: last?.to || start,
      visited,
      segments,
      moves,
      legalMoves: [],
      winner: null,
      endReason: null,
    },
    replayActive: true,
    replayStep: step,
    replayTotal: max,
  };
}

function isBetweenRounds(model) {
  return (
    model?.board?.state === "BetweenRounds" ||
    model?.board?.currentSession?.state === "BetweenRounds" ||
    model?.board?.currentSession?.round?.state === "BetweenRounds"
  );
}

function isSeated(model) {
  return normalizeSeatId(model?.ownSeat) !== null;
}

function submitNewRound(bridge) {
  if (!bridge || !isSeated(bridge.model) || !isBetweenRounds(bridge.model))
    return false;
  if (bridge.model?.localRuntime) {
    bridge.model = restartLocalRuntimeRound(bridge.model);
    saveLocalRuntimeModel(bridge.model);
    return true;
  }
  const submitted =
    typeof bridge.newRound === "function"
      ? bridge.newRound()
      : bridge.sendCommand?.({ type: "reset" });
  if (!submitted) return false;
  bridge.model = { ...bridge.model, pendingNewRound: true, error: null };
  return true;
}

function seatColorToId(color) {
  if (color === "blue" || color === "p1") return "p1";
  if (color === "red" || color === "p2") return "p2";
  return null;
}

function seatIdToColor(seatId) {
  if (seatId === "p1" || seatId === "blue") return "blue";
  if (seatId === "p2" || seatId === "red") return "red";
  return null;
}

function disconnectedSeatEntries(board) {
  return ["blue", "red"]
    .map((color) => ({
      color,
      seatId: seatColorToId(color),
      seat: board?.seats?.[color],
    }))
    .filter((entry) => entry.seat?.state === "DisconnectedReserved");
}

function canOwnSeatFreeDisconnectedSeat(model, targetSeatId) {
  const ownSeat = normalizeSeatId(model?.ownSeat);
  const targetColor = seatIdToColor(targetSeatId);
  if (!ownSeat || !targetColor || ownSeat === targetColor) return false;
  const seat = model?.board?.seats?.[targetColor];
  return Boolean(seat?.state === "DisconnectedReserved" && seat.canBeFreed);
}

function submitFreeDisconnectedSeat(bridge, seatId) {
  if (!bridge || !canOwnSeatFreeDisconnectedSeat(bridge.model, seatId))
    return false;
  const submitted =
    typeof bridge.freeSeat === "function"
      ? bridge.freeSeat(seatId)
      : bridge.sendCommand?.({ type: "freeSeat", seatId });
  if (!submitted) return false;
  bridge.model = { ...bridge.model, pendingFreeSeat: seatId, error: null };
  return true;
}

function submitMoveFromLegalTarget(bridge, key) {
  if (
    !bridge ||
    replayIsActive(bridge.model) ||
    !isOwnTurn(bridge.model) ||
    !isLegalMoveKey(bridge.model, key)
  )
    return false;
  if (bridge.model?.localRuntime) {
    const next = applyLocalRuntimeMove(bridge.model, key);
    if (!next) return false;
    bridge.model = { ...next, error: null };
    saveLocalRuntimeModel(bridge.model);
    saveGameToHistory(bridge.model);
    return true;
  }
  const point = parseElmPointKey(key);
  const submitted =
    typeof bridge.submitMove === "function"
      ? bridge.submitMove(point)
      : bridge.sendCommand?.({ type: "move", to: point });
  if (!submitted) return false;
  bridge.model = { ...bridge.model, pendingMoveKey: key, error: null };
  return true;
}

// --- Canvas overlay: turn-marker jump + confetti (mirrors app.js rAF approach) ---
const ELM_ANIM = {
  currentModel: null,
  jumpAnim: null,
  confettiUntil: 0,
  prevWinnerKey: "",
  rafId: 0,
};
const ELM_CONFETTI_MS = 4800;
const ELM_JUMP_MS = 1400;
const ELM_CONFETTI_COLORS = [
  "#ffe784",
  "#ffffff",
  "#11bf46",
  "#0b7cff",
  "#ff3b30",
  "#ff8bd1",
];
function elmTurnId(model) {
  const t =
    model?.board?.currentSession?.round?.turn ??
    model?.board?.currentSession?.turn;
  return normalizeSeatId(t) || "blue";
}
function elmTurnColor(id) {
  return id === "red" ? "#ff3b30" : "#0b7cff";
}
function elmTurnSpot(id) {
  const gy = id === "red" ? 0 : 12;
  return { x: Math.min(900 - 28, elmScreenX(5) + 38), y: elmScreenY(gy) };
}
function elmClockSpot(id) {
  const gy = id === "red" ? 0 : 12;
  return { x: Math.max(26, elmScreenX(3) - 54), y: elmScreenY(gy) };
}
function elmDrawSevenSeg(ctx2d, char, x, y, w, h, color) {
  const active =
    {
      0: ["a", "b", "c", "d", "e", "f"],
      1: ["b", "c"],
      2: ["a", "b", "g", "e", "d"],
      3: ["a", "b", "g", "c", "d"],
      4: ["f", "g", "b", "c"],
      5: ["a", "f", "g", "c", "d"],
      6: ["a", "f", "g", "e", "c", "d"],
      7: ["a", "b", "c"],
      8: ["a", "b", "c", "d", "e", "f", "g"],
      9: ["a", "b", "c", "d", "f", "g"],
    }[char] || [];
  const t = 4;
  const half = h / 2;
  const r = {
    a: [x + t, y, w - t * 2, t],
    b: [x + w - t, y + t, t, half - t],
    c: [x + w - t, y + half, t, half - t],
    d: [x + t, y + h - t, w - t * 2, t],
    e: [x, y + half, t, half - t],
    f: [x, y + t, t, half - t],
    g: [x + t, y + half - t / 2, w - t * 2, t],
  };
  ctx2d.fillStyle = "rgba(141,255,174,.11)";
  for (const s of Object.values(r)) {
    ctx2d.beginPath();
    ctx2d.roundRect?.(...s, 2) ?? ctx2d.rect(...s);
    ctx2d.fill();
  }
  ctx2d.fillStyle = color;
  for (const k of active) {
    ctx2d.beginPath();
    ctx2d.roundRect?.(...r[k], 2) ?? ctx2d.rect(...r[k]);
    ctx2d.fill();
  }
}
function elmDrawSevenSegNum(ctx2d, text, x, y, color) {
  let cx = x;
  for (const ch of text) {
    elmDrawSevenSeg(ctx2d, ch, cx, y, 19, 30, color);
    cx += 25;
  }
}
function elmLerp(a, b, t) {
  return a + (b - a) * t;
}
function elmEase(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
function elmMixHex(a, b, t) {
  const ph = (h) => {
    const v = parseInt(h.slice(1), 16);
    return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
  };
  const ca = ph(a);
  const cb = ph(b);
  const m = (x, y) => Math.round(x + (y - x) * t);
  return `rgb(${m(ca.r, cb.r)},${m(ca.g, cb.g)},${m(ca.b, cb.b)})`;
}
function elmDrawMarker(ctx2d, x, y, color, scale) {
  const r = 24 * scale;
  ctx2d.save();
  ctx2d.shadowColor = color;
  ctx2d.shadowBlur = 20 * scale;
  ctx2d.fillStyle = color;
  ctx2d.beginPath();
  ctx2d.arc(x, y, r, 0, Math.PI * 2);
  ctx2d.fill();
  ctx2d.shadowBlur = 0;
  ctx2d.strokeStyle = "#fff";
  ctx2d.lineWidth = 4 * scale;
  ctx2d.stroke();
  ctx2d.fillStyle = "#fff";
  ctx2d.beginPath();
  ctx2d.arc(x, y, r * 0.58, 0, Math.PI * 2);
  ctx2d.fill();
  ctx2d.font = `${Math.round(r * 0.95)}px system-ui`;
  ctx2d.textAlign = "center";
  ctx2d.textBaseline = "middle";
  ctx2d.fillStyle = "#111";
  ctx2d.fillText("\u26bd", x, y + 1);
  ctx2d.restore();
}
function tickElmCanvas() {
  ELM_ANIM.rafId = 0;
  const cv =
    typeof document !== "undefined"
      ? document.querySelector("[data-elm-board-canvas]")
      : null;
  if (!cv) return;
  const ctx2d = cv.getContext("2d");
  ctx2d.clearRect(0, 0, cv.width, cv.height);
  const model = ELM_ANIM.currentModel;
  const session = model?.board?.currentSession;
  const round = session?.round;
  const isActive =
    model?.board?.state === "SessionActive" || session?.state === "Active";
  let more = false;
  const fy = (y) => (ELM_ANIM.inverted ? 1300 - y : y);
  if (isActive) {
    const tid = elmTurnId(model);
    if (ELM_ANIM.jumpAnim) {
      const elapsed =
        (typeof performance !== "undefined" ? performance.now() : 0) -
        ELM_ANIM.jumpAnim.startedAt;
      if (elapsed < ELM_JUMP_MS) {
        const t = elmEase(elapsed / ELM_JUMP_MS);
        const spot = elmTurnSpot(tid);
        elmDrawMarker(
          ctx2d,
          elmLerp(ELM_ANIM.jumpAnim.from.x, spot.x, t),
          fy(elmLerp(ELM_ANIM.jumpAnim.from.y, spot.y, t)) -
            Math.sin(Math.PI * t) * 140,
          elmMixHex(
            ELM_ANIM.jumpAnim.fromColor,
            elmTurnColor(tid),
            Math.min(1, t * 1.18),
          ),
          1 + Math.sin(Math.PI * t) * 0.55,
        );
        more = true;
      } else {
        ELM_ANIM.jumpAnim = null;
      }
    }
    if (!ELM_ANIM.jumpAnim) {
      const spot = elmTurnSpot(tid);
      elmDrawMarker(ctx2d, spot.x, fy(spot.y), elmTurnColor(tid), 1);
    }
  }
  if (ELM_ANIM.confettiUntil > Date.now()) {
    const winner = round?.winner;
    const gateY = winner === "p1" || winner === "blue" ? 12 : 0;
    const gx = elmScreenX(4);
    const gy = fy(elmScreenY(gateY));
    const elapsed =
      ELM_CONFETTI_MS - Math.max(0, ELM_ANIM.confettiUntil - Date.now());
    ctx2d.save();
    for (let i = 0; i < 54; i++) {
      const ang = (((i * 137.5) % 360) * Math.PI) / 180;
      const burst = 18 + ((i * 23) % 96);
      const fall = (elapsed / ELM_CONFETTI_MS) * (86 + (i % 7) * 16);
      const wob = Math.sin(elapsed / 210 + i) * 18;
      const x = gx + Math.cos(ang) * burst + wob;
      const fallsDown = (gateY === 0) !== ELM_ANIM.inverted;
      const y = gy + Math.sin(ang) * burst + (fallsDown ? fall : -fall);
      ctx2d.translate(x, y);
      ctx2d.rotate(ang + elapsed / 220);
      ctx2d.fillStyle = ELM_CONFETTI_COLORS[i % ELM_CONFETTI_COLORS.length];
      ctx2d.globalAlpha = Math.max(0, 1 - elapsed / (ELM_CONFETTI_MS + 400));
      ctx2d.fillRect(-4, -7, 8, 14);
      ctx2d.setTransform(1, 0, 0, 1, 0, 0);
    }
    ctx2d.restore();
    more = true;
  }
  if (more && typeof requestAnimationFrame !== "undefined")
    ELM_ANIM.rafId = requestAnimationFrame(tickElmCanvas);
  // Move clock (drawn after animation check so the clock itself triggers rAF while counting down)
  const timerMeta = isActive ? onlineTimerMeta(model?.board) : null;
  if (timerMeta && timerMeta.deadlineAt != null) {
    const tid = elmTurnId(model);
    const spot = elmClockSpot(tid);
    const clkY = fy(spot.y);
    const remaining = Math.max(0, Number(timerMeta.deadlineAt) - Date.now());
    const seconds = Math.max(0, Math.ceil(remaining / 1000));
    const limitMs = (timerMeta.seconds || 0) * 1000;
    const warning = limitMs > 0 && remaining <= Math.min(5000, limitMs * 0.34);
    const danger = remaining <= 3000;
    const clkColor = danger ? "#ff3b30" : warning ? "#ffe66d" : "#8dffae";
    ctx2d.save();
    ctx2d.fillStyle = "rgba(0,8,3,.78)";
    ctx2d.strokeStyle = clkColor;
    ctx2d.lineWidth = 2;
    ctx2d.beginPath();
    (ctx2d.roundRect ?? ctx2d.rect).call(
      ctx2d,
      spot.x - 39,
      clkY - 21,
      78,
      42,
      10,
    );
    ctx2d.fill();
    ctx2d.shadowColor = clkColor;
    ctx2d.shadowBlur = danger ? 16 : 9;
    ctx2d.stroke();
    ctx2d.shadowBlur = 0;
    elmDrawSevenSegNum(
      ctx2d,
      String(seconds).padStart(2, "0"),
      spot.x - 25,
      clkY - 15,
      clkColor,
    );
    ctx2d.restore();
    if (
      remaining > 0 &&
      !ELM_ANIM.rafId &&
      typeof requestAnimationFrame !== "undefined"
    )
      ELM_ANIM.rafId = requestAnimationFrame(tickElmCanvas);
  }
}
function wireElmBoardCanvas(newModel) {
  const prev = ELM_ANIM.currentModel;
  if (prev && newModel) {
    const pt = elmTurnId(prev);
    const nt = elmTurnId(newModel);
    const wasActive =
      prev?.board?.state === "SessionActive" ||
      prev?.board?.currentSession?.state === "Active";
    const isActive =
      newModel?.board?.state === "SessionActive" ||
      newModel?.board?.currentSession?.state === "Active";
    if (wasActive && isActive && pt !== nt) {
      ELM_ANIM.jumpAnim = {
        from: elmTurnSpot(pt),
        fromColor: elmTurnColor(pt),
        startedAt: typeof performance !== "undefined" ? performance.now() : 0,
      };
    }
    const winner = newModel?.board?.currentSession?.round?.winner;
    const wk = winner
      ? `${newModel?.board?.code}:${winner}:${newModel?.board?.currentSession?.round?.moves?.length ?? 0}`
      : "";
    if (winner && wk !== ELM_ANIM.prevWinnerKey) {
      ELM_ANIM.prevWinnerKey = wk;
      ELM_ANIM.confettiUntil = Date.now() + ELM_CONFETTI_MS;
    }
  }
  ELM_ANIM.inverted =
    !newModel?.localRuntime && normalizeSeatId(newModel?.ownSeat) === "red";
  ELM_ANIM.currentModel = newModel;
  if (!ELM_ANIM.rafId && typeof requestAnimationFrame !== "undefined")
    ELM_ANIM.rafId = requestAnimationFrame(tickElmCanvas);
}
function renderSvgFlags() {
  const defs = [
    { gx: 0, gy: 1, color: "#ff3b30" },
    { gx: 8, gy: 1, color: "#ff3b30" },
    { gx: 0, gy: 11, color: "#0b7cff" },
    { gx: 8, gy: 11, color: "#0b7cff" },
  ];
  return defs
    .map(({ gx, gy, color }) => {
      const cx = elmScreenX(gx);
      const cy = elmScreenY(gy);
      const dx = gx > 0 ? 1 : -1;
      const dy = gy < 6 ? -1 : 1;
      const hx = cx + dx * 22;
      const hy = cy + dy * 56;
      const pl = Math.hypot(hx - cx, hy - cy);
      const ux = (hx - cx) / pl;
      const uy = (hy - cy) / pl;
      let nx = -uy;
      let ny = ux;
      if (nx * dx < 0) {
        nx = -nx;
        ny = -ny;
      }
      const p = (v) => v.toFixed(1);
      const pts = [
        p(hx - ux * 15) + "," + p(hy - uy * 15),
        p(hx + nx * 36) + "," + p(hy + ny * 36),
        p(hx + ux * 15) + "," + p(hy + uy * 15),
      ].join(" ");
      return `<g class="elm-flag" data-elm-flag="${gx},${gy}"><line x1="${p(cx)}" y1="${p(cy)}" x2="${p(hx)}" y2="${p(hy)}" stroke="white" stroke-width="5" stroke-linecap="round"/><circle cx="${p(cx)}" cy="${p(cy)}" r="5" fill="white" opacity="0.5"/><polygon points="${pts}" fill="${color}" opacity="0.9"/></g>`;
    })
    .join("");
}

function renderReadOnlyBoard(board, model = initialModel()) {
  const round = board?.currentSession?.round;
  if (!round) {
    return '<section class="elm-board-preview"><p>No round to render yet.</p></section>';
  }
  const replay = projectRoundForReplay(round, model?.replayIndex);
  const renderedRound = replay.round;
  const moves = Array.isArray(renderedRound.moves) ? renderedRound.moves : [];
  const visited = new Set(
    Array.isArray(renderedRound.visited)
      ? renderedRound.visited.map(String)
      : ["4,6"],
  );
  for (const move of moves) if (move?.to) visited.add(elmPointKey(move.to));
  const legalMoves = Array.isArray(renderedRound.legalMoves)
    ? renderedRound.legalMoves
    : [];
  const ball = renderedRound.ball || moves.at(-1)?.to || { x: 4, y: 6 };
  const legalContext = replay.replayActive
    ? {
        name: "watcher",
        state: "preview",
        color: normalizeSeatId(renderedRound?.turn) || "blue",
        playable: false,
        note: `Replay ${replay.replayStep}/${replay.replayTotal}: board controls are read-only.`,
      }
    : legalMoveContext(model, renderedRound);
  const turn = legalContext.color;
  const pitchOutline = [
    renderSvgLine({ x: 0, y: 1 }, { x: 3, y: 1 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 5, y: 1 }, { x: 8, y: 1 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 8, y: 1 }, { x: 8, y: 11 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 8, y: 11 }, { x: 5, y: 11 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 3, y: 11 }, { x: 0, y: 11 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 0, y: 11 }, { x: 0, y: 1 }, 'class="elm-pitch-line"'),
  ].join("");
  const gates = `
    <g data-elm-gate="red" class="elm-gate elm-gate-red">
      ${renderSvgLine({ x: 3, y: 1 }, { x: 3, y: 0 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 3, y: 0 }, { x: 5, y: 0 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 5, y: 0 }, { x: 5, y: 1 }, 'class="elm-gate-line"')}
    </g>
    <g data-elm-gate="blue" class="elm-gate elm-gate-blue">
      ${renderSvgLine({ x: 3, y: 11 }, { x: 3, y: 12 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 3, y: 12 }, { x: 5, y: 12 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 5, y: 12 }, { x: 5, y: 11 }, 'class="elm-gate-line"')}
    </g>`;
  const grid = elmGridPoints()
    .map((point) => {
      const key = elmPointKey(point);
      const gateBounce = isElmGateBouncePoint(point);
      const visitedClass = visited.has(key) ? " elm-point-visited" : "";
      const bounceAttr = gateBounce ? ` data-elm-gate-bounce="${key}"` : "";
      return `<circle class="elm-grid-point${visitedClass}${gateBounce ? " elm-gate-bounce" : ""}" data-elm-point="${key}"${visited.has(key) ? ` data-elm-visited="${key}"` : ""}${bounceAttr} cx="${elmScreenX(point.x)}" cy="${elmScreenY(point.y)}" r="${visited.has(key) ? 12 : gateBounce ? 10 : 7}" />`;
    })
    .join("");
  const segments = moves
    .map((move) => {
      if (!move?.from || !move?.to) return "";
      const segmentKey = escapeHtml(
        move.segment || `${elmPointKey(move.from)}|${elmPointKey(move.to)}`,
      );
      return `<g data-elm-segment="${segmentKey}" class="elm-traced-segment">${renderSvgLine(move.from, move.to, `class="elm-segment-stroke" stroke="${playerColor(move.playerId)}"`)}${renderSvgLine(move.from, move.to, 'class="elm-segment-highlight"')}</g>`;
    })
    .join("");
  // Simplified legal moves: single dot, player color for local, yellow for online own-turn
  const isOwnTurn = legalContext.name === "own-turn";
  const isLocal = Boolean(model?.localRuntime);
  const dotColor = isOwnTurn
    ? isLocal
      ? turn === "red"
        ? "#ff3b30"
        : "#0b7cff"
      : "#ffe66d"
    : null;
  const dotFill =
    dotColor === "#ffe66d"
      ? "rgba(255,230,109,0.16)"
      : dotColor === "#ff3b30"
        ? "rgba(255,59,48,0.16)"
        : dotColor
          ? "rgba(11,124,255,0.16)"
          : "none";
  const playableAttr = legalContext.playable
    ? ' data-elm-legal-playable="true"'
    : "";
  const legal = legalMoves
    .map((point) => {
      const key = elmPointKey(point);
      const cx = elmScreenX(point.x);
      const cy = elmScreenY(point.y);
      const pendingAttr =
        model?.pendingMoveKey === key
          ? ` data-elm-pending-move="${key}" data-elm-move-feedback="pending"`
          : "";
      const dot = dotColor
        ? `<circle class="elm-legal-dot${pendingAttr ? " elm-legal-pending-dot" : ""}" cx="${cx}" cy="${cy}" r="21" stroke="${dotColor}" fill="${dotFill}" stroke-width="4"/>`
        : "";
      return `<g class="elm-legal-target elm-legal-${legalContext.name}${pendingAttr ? " elm-legal-pending" : ""}" data-elm-legal-move="${key}" data-elm-legal-move-state="${legalContext.state}"${playableAttr}${pendingAttr}><circle class="elm-legal-hit-area" cx="${cx}" cy="${cy}" r="34" fill="transparent" stroke="none"/>${dot}</g>`;
    })
    .join("");
  const ballKey = elmPointKey(ball);
  const shouldInvert = !isLocal && normalizeSeatId(model?.ownSeat) === "red";
  const ballSvg = `<g class="elm-ball" data-elm-ball="${ballKey}" transform="translate(${elmScreenX(ball.x)} ${elmScreenY(ball.y)})"><circle r="26" fill="rgba(0,0,0,0.18)"/><text data-elm-ball-crest="true" class="elm-ball-emoji" x="0" y="${shouldInvert ? "-1" : "1"}" text-anchor="middle" dominant-baseline="middle" font-size="26" font-family="system-ui"${shouldInvert ? ' transform="scale(1,-1)"' : ""}>\u26bd</text></g>`;
  // Goal mesh geometry (inset from posts and boundary)
  const meshX = elmScreenX(3) + 11;
  const meshW = elmScreenX(5) - 11 - meshX;
  const redMeshY = elmScreenY(0) + 9;
  const redMeshH = elmScreenY(1) - 9 - redMeshY;
  const blueMeshY = elmScreenY(11) + 9;
  const blueMeshH = elmScreenY(12) - 9 - blueMeshY;
  return `
    <section class="elm-board-preview">
      <div class="elm-board-stage${shouldInvert ? " elm-board-inverted" : ""}" data-elm-board-stage>
        <svg data-elm-board-svg role="img" aria-label="Read-only Traceball board" viewBox="0 0 900 1300" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="elmPitchGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stop-color="#0cb240"/>
              <stop offset="100%" stop-color="#03651e"/>
            </linearGradient>
            <pattern id="elmGoalMesh" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="12" y2="12" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
              <line x1="12" y1="0" x2="0" y2="12" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
              <line x1="0" y1="6" x2="12" y2="6" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
            </pattern>
          </defs>
          <g${shouldInvert ? ' transform="translate(0,1300) scale(1,-1)"' : ""}>
          <rect class="elm-pitch-bg" x="18" y="18" width="864" height="1264" rx="34" />
          <rect class="elm-pitch-frame" x="30" y="30" width="840" height="1240" rx="26" />
          <g class="elm-pitch-stripes"><path d="M-140 1282 L100 18 H220 L-20 1282 Z"/><path d="M260 1282 L500 18 H620 L380 1282 Z"/><path d="M660 1282 L900 18 H1020 L780 1282 Z"/></g>
          <g class="elm-pitch-outline">${pitchOutline}${gates}</g>
          <rect class="elm-goal-mesh" x="${meshX}" y="${redMeshY}" width="${meshW}" height="${redMeshH}" fill="url(#elmGoalMesh)"/>
          <rect class="elm-goal-mesh" x="${meshX}" y="${blueMeshY}" width="${meshW}" height="${blueMeshH}" fill="url(#elmGoalMesh)"/>
          ${renderSvgFlags()}
          <g class="elm-segments-layer">${segments}</g>
          <g class="elm-points-layer">${grid}</g>
          <g class="elm-legal-layer" data-elm-legal-context="${legalContext.name}">${legal}</g>
          ${ballSvg}
          </g>
        </svg>
        <canvas class="elm-board-canvas" data-elm-board-canvas width="900" height="1300"></canvas>
      </div>
      <div class="elm-board-legend" data-elm-legal-context="${legalContext.name}"><span class="elm-legend-dot elm-legal-${legalContext.color}"></span>${escapeHtml(legalContext.note)}</div>
      <p class="elm-shell-note">Phase 6C board: own-turn legal targets submit move intent; the server confirms with the next live state.</p>
    </section>`;
}

function playerDisplayName(board, color) {
  return (
    board?.seats?.[color]?.player?.displayName ||
    (color === "red" ? "Red" : "Blue")
  );
}

function winnerLabel(winner) {
  if (winner === "red" || winner === "p2") return "Red";
  if (winner === "blue" || winner === "p1") return "Blue";
  return "Round";
}

function renderRoundResult(model) {
  const board = model?.board;
  const session = board?.currentSession;
  const round = session?.round;
  if (!isBetweenRounds(model) || !round) return "";
  const winner = winnerLabel(round.winner);
  const blueScore = Number(session?.score?.blue || 0);
  const redScore = Number(session?.score?.red || 0);
  const endReason = round.endReason || "Round complete.";
  const canContinue = isSeated(model);
  const pending = model?.pendingNewRound;
  const action = canContinue
    ? `<div class="elm-action-row" data-elm-round-actions><button type="button" class="elm-primary" data-elm-command="new-round"${pending ? " disabled" : ""}>${pending ? "Starting next round…" : "Continue / New Round"}</button></div>`
    : '<p class="elm-shell-note">Waiting for a seated player to continue.</p>';
  return `
    <section class="elm-round-result" data-elm-round-result>
      <p class="eyebrow">Round complete</p>
      <h3>${escapeHtml(winner)} wins this round</h3>
      <p>${escapeHtml(endReason)}</p>
      <p><strong>Score:</strong> Blue ${blueScore} — Red ${redScore}</p>
      <p class="elm-shell-note">${escapeHtml(playerDisplayName(board, "blue"))} vs ${escapeHtml(playerDisplayName(board, "red"))}</p>
      ${action}
    </section>`;
}

function renderDisconnectedSeatRecovery(model) {
  const board = model?.board;
  const disconnected = disconnectedSeatEntries(board);
  if (!disconnected.length) return "";
  const ownSeatColor = normalizeSeatId(model?.ownSeat);
  const rows = disconnected
    .map(({ color, seatId, seat }) => {
      const label = color === "red" ? "Red" : "Blue";
      const player = seat?.player?.displayName || label;
      const canFree = canOwnSeatFreeDisconnectedSeat(model, seatId);
      const ownDisconnectedSeat = ownSeatColor === color;
      const seconds =
        seat?.canBeFreedAt && seat?.disconnectedAt
          ? Math.max(
              0,
              Math.ceil(
                (Number(seat.canBeFreedAt) - Number(seat.disconnectedAt)) /
                  1000,
              ),
            )
          : 60;
      const action = ownDisconnectedSeat
        ? '<p class="elm-shell-note">Your seat is reserved — reconnect from the same browser to reclaim it.</p>'
        : canFree
          ? `<div class="elm-action-row" data-elm-disconnect-actions><button type="button" class="elm-primary" data-elm-command="free-seat" data-elm-seat="${seatId}"${model?.pendingFreeSeat === seatId ? " disabled" : ""}>${model?.pendingFreeSeat === seatId ? "Making seat available…" : `Make ${label} seat available`}</button></div>`
          : `<p class="elm-shell-note">Make seat available in ${seconds}s.</p>`;
      return `<article class="elm-disconnected-seat elm-disconnected-${color}" data-elm-disconnected-seat="${color}"><h3>${escapeHtml(player)} disconnected</h3><p>Friend disconnected. Seat reserved during grace.</p>${action}</article>`;
    })
    .join("");
  return `<section class="elm-disconnect-recovery">${rows}</section>`;
}

function renderSeatingActions(model) {
  const board = model.board;
  if (!board) return "";
  const blueVacant = board.seats?.blue?.state === "Vacant";
  const redVacant = board.seats?.red?.state === "Vacant";
  const full = !blueVacant && !redVacant;
  const ownSeat = model.ownSeat;
  const waiting = model.waitingListMember;
  const nameValue = "Elm Player";
  const seatButtons = ownSeat
    ? `<button type="button" class="elm-danger" data-elm-command="leave-seat">Leave seat / forfeit</button>`
    : `${blueVacant ? '<button type="button" data-elm-command="claim-blue">Join Blue</button>' : ""}${redVacant ? '<button type="button" data-elm-command="claim-red">Join Red</button>' : ""}`;
  const waitingButton =
    full && !ownSeat
      ? waiting
        ? '<button type="button" data-elm-command="leave-waiting-list">Leave waiting list</button>'
        : '<button type="button" data-elm-command="join-waiting-list">Join waiting list</button>'
      : "";
  const guidance =
    full && !ownSeat
      ? "Board is full. Watch or join the explicit waiting list."
      : ownSeat
        ? "You are seated on this board."
        : "Choose an open color to sit down.";
  return `
    <section class="elm-actions" data-elm-actions>
      <h3>Board actions</h3>
      <label for="elmPlayerName">Display name</label>
      <input id="elmPlayerName" value="${escapeHtml(nameValue)}" autocomplete="nickname" />
      <p>${escapeHtml(guidance)}</p>
      <div class="elm-action-row">${seatButtons}${waitingButton}</div>
    </section>`;
}

function renderBoardMessage(message) {
  const model = applyState(initialModel(), message);
  return renderModel(model);
}

function roomSummaryState(room) {
  return room?.state || room?.boardState || room?.status || "Unknown";
}

function roomSummaryScore(room) {
  const score = room?.score || {};
  return `Blue ${Number(score.blue ?? score.p1 ?? 0)} — Red ${Number(score.red ?? score.p2 ?? 0)}`;
}

function roomSummaryOccupancy(room) {
  const occupancy = room?.occupancy || {};
  const active = Number(occupancy.activeCount ?? 0);
  const vacant = Number(occupancy.vacantCount ?? Math.max(0, 2 - active));
  return `${active} seated · ${vacant} open`;
}

function renderBoardList(rooms = []) {
  const visible = Array.isArray(rooms) ? rooms : [];
  const cards = visible
    .map((room) => {
      const code = room?.roomId || room?.code || "";
      const elmUrl = room?.elmUrl || boardUrl(code);
      const moves = Number(room?.moveCount || 0);
      const watchers = Number(
        room?.watcherCount ?? room?.watchers?.length ?? 0,
      );
      const waiting = Number(
        room?.waitingListCount ?? room?.waitingList?.length ?? 0,
      );
      return `
      <article class="elm-board-card" data-elm-board-card="${escapeHtml(code)}">
        <header><strong>${escapeHtml(code)}</strong><span class="elm-pill">${escapeHtml(roomSummaryState(room))}</span></header>
        <p>${escapeHtml(roomSummaryOccupancy(room))}</p>
        <p>Score ${escapeHtml(roomSummaryScore(room))}</p>
        <p>${moves} traced moves · ${watchers} watching · ${waiting} waiting</p>
        <p class="elm-shell-note">Last activity ${escapeHtml(room?.lastActivityAt ?? "unknown")} · Expires ${escapeHtml(room?.expiresAt ?? "unknown")}</p>
        <a class="elm-primary-link" href="${escapeHtml(elmUrl)}">Open board</a>
      </article>`;
    })
    .join("");
  return `
    <section class="elm-board-list" data-elm-board-list>
      <div class="boards-header"><div><p class="boards-kicker">Server lobby</p><h2>Boards</h2><p class="elm-shell-note">Public boards expire after one week of inactivity.</p></div><button type="button" id="refreshBoards" class="ghost" data-elm-command="refresh-boards">Refresh</button></div>
      ${cards || "<p>No public boards right now. Create a fresh board to start.</p>"}
    </section>`;
}

function replaceBoardsPanelContent(root, html) {
  if (
    !root ||
    typeof root.innerHTML !== "string" ||
    !root.innerHTML.includes('id="boardsPanel"')
  ) {
    if (root) root.innerHTML = html;
    return;
  }
  root.innerHTML = root.innerHTML.replace(
    /<section id="boardsPanel"[\s\S]*?<\/section>\s*<section class="game-layout">/,
    `<section id="boardsPanel" class="card boards-panel mobile-page" data-mobile-page="boards">${html}</section>\n\n      <section class="game-layout">`,
  );
}

async function loadBoardList(root) {
  try {
    const response = await fetch("/api/rooms", { cache: "no-store" });
    if (!response.ok)
      throw new Error(`Board list request failed: ${response.status}`);
    const payload = await response.json();
    replaceBoardsPanelContent(root, renderBoardList(payload.rooms || []));
    return payload.rooms || [];
  } catch (error) {
    replaceBoardsPanelContent(
      root,
      `<section class="elm-board-list" data-elm-board-list><h2>Live boards</h2><p class="elm-error">${escapeHtml(error?.message || "Could not load board list.")}</p></section>`,
    );
    return [];
  }
}

function renderBoardRecovery(model) {
  if (!model?.error || !/not found|expired/i.test(model.error)) return "";
  return `
    <section class="elm-board-recovery" data-elm-board-recovery>
      <h2>Board unavailable</h2>
      <p>${escapeHtml(model.error)}</p>
      <p class="elm-shell-note">Boards expire after one week of inactivity and in-memory staging boards reset when the service restarts.</p>
      <div class="elm-action-row"><button type="button" id="elmCreateBoard" class="elm-primary">Create a fresh board</button><a href="/">Browse live boards</a></div>
    </section>`;
}

function phase9CommandVisibility(model) {
  const board = model?.board;
  const ownSeat = model?.ownSeat;
  const blueVacant = board?.seats?.blue?.state === "Vacant";
  const redVacant = board?.seats?.red?.state === "Vacant";
  const full = board && !blueVacant && !redVacant;
  const waiting = model?.waitingListMember;
  return {
    showBlue: !ownSeat && blueVacant,
    showRed: !ownSeat && redVacant,
    showWaitingJoin: full && !ownSeat && !waiting,
    showWaitingLeave: full && !ownSeat && waiting,
    showLeave: Boolean(ownSeat),
    showNewRound: isSeated(model),
  };
}

function hiddenClass(visible) {
  return visible ? "" : " hidden";
}

function renderPhase9SeatButtons(model, scope = "match") {
  const visibility = phase9CommandVisibility(model);
  const play = scope === "play";
  const buttonClass = play ? "play-join-button ghost" : "ghost";
  const leaveClass = play ? "play-leave-button ghost danger" : "ghost danger";
  return `
    <button id="${play ? "playClaimP1" : "claimP1"}" class="${buttonClass}${hiddenClass(visibility.showBlue)}" type="button" data-elm-command="claim-blue">Join Blue</button>
    <button id="${play ? "playClaimP2" : "claimP2"}" class="${buttonClass}${hiddenClass(visibility.showRed)}" type="button" data-elm-command="claim-red">Join Red</button>
    <button id="${play ? "playJoinWaitingList" : "joinWaitingList"}" class="${buttonClass}${hiddenClass(visibility.showWaitingJoin)}" type="button" data-elm-command="join-waiting-list">Join waiting list</button>
    <button id="${play ? "playLeaveWaitingList" : "leaveWaitingList"}" class="${buttonClass}${hiddenClass(visibility.showWaitingLeave)}" type="button" data-elm-command="leave-waiting-list">Leave waiting list</button>
    <button id="${play ? "playLeaveSeat" : "leaveSeat"}" class="${leaveClass}${hiddenClass(visibility.showLeave)}" type="button" data-elm-command="leave-seat">Leave / forfeit</button>`;
}

function renderPlayLeaveButton(model) {
  return `<button id="playLeaveSeat" class="play-leave-button ghost danger${hiddenClass(Boolean(model?.ownSeat))}" type="button" data-elm-command="leave-seat">Leave / forfeit</button>`;
}

function renderPlayBoardBody(model, board) {
  const recovery = renderBoardRecovery(model);
  if (recovery) return recovery;
  if (!board) return "<p>Loading board state…</p>";
  return renderReadOnlyBoard(board, model);
}

function onlineTimerMeta(board) {
  const session = board?.currentSession;
  const round = session?.round;
  const rawSeconds =
    session?.moveTimeLimitSeconds ??
    round?.moveTimeLimitSeconds ??
    board?.moveTimeLimitSeconds;
  const rawMs =
    session?.moveTimeLimitMs ??
    round?.moveTimeLimitMs ??
    board?.moveTimeLimitMs;
  const seconds = Number.isFinite(Number(rawSeconds))
    ? Number(rawSeconds)
    : Number.isFinite(Number(rawMs))
      ? Math.round(Number(rawMs) / 1000)
      : null;
  const deadlineAt = round?.deadlineAt ?? session?.deadlineAt ?? null;
  if ((!seconds || seconds <= 0) && deadlineAt == null) return null;
  return { seconds: seconds && seconds > 0 ? seconds : null, deadlineAt };
}

function onlineTimerText(board) {
  const timer = onlineTimerMeta(board);
  if (!timer) return "";
  const limit = timer.seconds ? `${timer.seconds}s` : "server timer";
  return timer.deadlineAt == null
    ? `${limit}`
    : `${limit} · deadline ${timer.deadlineAt}`;
}

function renderBoardTimerDisplay(board) {
  const timer = onlineTimerMeta(board);
  if (!timer) return "";
  const limit = timer.seconds ? `${timer.seconds}s` : "server timer";
  const deadline =
    timer.deadlineAt == null
      ? ""
      : `<span>Deadline ${escapeHtml(timer.deadlineAt)}</span>`;
  return `<section class="elm-timer-display" data-elm-timer-display aria-label="Move timer"><span>Timer: ${escapeHtml(limit)}</span>${deadline}</section>`;
}

function titleCase(value) {
  const text = String(value || "").trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
}

function colorLabel(color) {
  const normalized = normalizeSeatId(color);
  if (normalized === "red") return "Red";
  if (normalized === "blue") return "Blue";
  return "None";
}

function viewerRoleLabel(model) {
  const ownSeat = normalizeSeatId(model?.ownSeat);
  if (ownSeat) return `You are ${colorLabel(ownSeat)}`;
  if (model?.waitingListMember) return "Waiting list";
  return "Watching";
}

function renderBoardHud(model) {
  const board = model?.board;
  if (!board) return "";
  const round = board.currentSession?.round;
  const turn = colorLabel(round?.turn || board.currentSession?.turn || "");
  const orientation = normalizeSeatId(model?.ownSeat) || "watcher";
  const status = titleCase(model?.connectionStatus || "idle");
  return `
    <section class="elm-board-hud" data-elm-board-hud data-elm-orientation="${escapeHtml(orientation)}" aria-label="Board status">
      <span><strong>${escapeHtml(board.code)}</strong></span>
      <span>${escapeHtml(viewerRoleLabel(model))}</span>
      <span>Turn: ${escapeHtml(turn)}</span>
      <span>${escapeHtml(status)}</span>
      ${renderBoardTimerDisplay(board)}
    </section>`;
}

function renderMatchDetails(model) {
  const board = model?.board;
  const session = board?.currentSession;
  const score = session?.score
    ? `Blue ${session.score.blue} — Red ${session.score.red}`
    : "No session score yet";
  const ownSeat = normalizeSeatId(model?.ownSeat);
  const role = ownSeat
    ? ownSeat === "blue"
      ? "Blue player"
      : "Red player"
    : model?.waitingListMember
      ? "Waiting list"
      : "Watcher";
  if (!board)
    return `<section class="match-details" data-elm-match-details><p>Open a board to see match details.</p></section>`;
  const watchers = Array.isArray(board.watchers) ? board.watchers : [];
  const waiting = Array.isArray(board.waitingList) ? board.waitingList : [];
  const moveCount = Number(session?.round?.moves?.length || 0);
  const timerText = onlineTimerText(board);
  return `
    <section class="match-details" data-elm-match-details>
      <p><strong>Board:</strong> ${escapeHtml(board.code)}</p>
      <p><strong>Connection:</strong> ${escapeHtml(model.connectionStatus || "idle")}</p>
      <p><strong>Your role:</strong> ${escapeHtml(role)}</p>
      <p><strong>Blue:</strong> ${escapeHtml(seatLabel(board.seats?.blue))}</p>
      <p><strong>Red:</strong> ${escapeHtml(seatLabel(board.seats?.red))}</p>
      <p><strong>Session:</strong> ${escapeHtml(session?.state || board.state)}</p>
      <p><strong>Score:</strong> ${escapeHtml(score)}</p>
      <p><strong>Turn:</strong> ${escapeHtml(session?.round?.turn || "none")}</p>
      <p><strong>Replay:</strong> ${moveCount} traced moves</p>
      ${timerText ? `<p><strong>Timer:</strong> ${escapeHtml(timerText)}</p>` : ""}
      <p><strong>Watching:</strong> ${watchers.length}</p>
      <p><strong>Waiting list:</strong> ${waiting.length}${waiting.length ? ` — ${escapeHtml(waiting.map((p) => p.displayName || "Anonymous").join(", "))}` : ""}</p>
      ${peopleList("Watchers", watchers)}
      ${peopleList("Waiting list", waiting)}
      <p class="elm-shell-note">Last activity ${escapeHtml(board.updatedAt || "unknown")} · Expires ${escapeHtml(board.expiresAt || "unknown")}</p>
      ${renderSeatingActions(model)}
      ${renderDisconnectedSeatRecovery(model)}
      ${renderRoundResult(model)}
    </section>`;
}

function renderModel(model) {
  const board = model.board;
  const session = board?.currentSession;
  const runtimeMode = model.localRuntime ? "local" : "online";
  const score = session?.score
    ? `Blue ${session.score.blue} — Red ${session.score.red}`
    : "No session score yet";
  const boardTitle = board
    ? `Board ${escapeHtml(board.code)}`
    : "Traceball Arena";
  const stateLabel = board ? escapeHtml(board.state) : "No board open";
  const staleNote = model.ignoredStaleVersion
    ? `<p class="elm-shell-note">Ignored stale version ${Number(model.ignoredStaleVersion)}.</p>`
    : "";
  const newRoundControlAttr = isSeated(model)
    ? 'data-elm-command="new-round"'
    : 'disabled aria-disabled="true"';
  const roundWinner = board?.currentSession?.round?.winner || null;
  const winnerName = roundWinner ? winnerLabel(roundWinner) : "Player";
  const winnerOverlayClass =
    roundWinner && !model?.winnerDismissed
      ? "winner-overlay"
      : "winner-overlay hidden";
  const isServerPaused =
    board?.state === "SessionPaused" ||
    board?.currentSession?.state === "Paused";
  const isPaused = model.localPaused || isServerPaused;
  const pauseOverlayClass = `pause-overlay${isPaused ? "" : " hidden"}`;
  const boardStageClass = `board-stage${isPaused ? " paused" : ""}`;
  const pauseMessage = model.localRuntime
    ? "Game paused on this device. Resume when both players are ready."
    : "Board hidden while paused.";
  const pauseTurn = model.localRuntime
    ? `Turn: ${escapeHtml(colorLabel(board?.currentSession?.round?.turn || ""))}`
    : "Turn resumes here.";
  const moveCount = Number(session?.round?.moves?.length || 0);
  const replayIndex = replayEffectiveIndex(model);
  const replayActive = replayIsActive(model);
  const replayStartDisabled = moveCount <= 0 || replayIndex <= 0;
  const replayPrevDisabled = moveCount <= 0 || replayIndex <= 0;
  const replayNextDisabled = moveCount <= 0 || replayIndex >= moveCount;
  const replayEndDisabled = moveCount <= 0 || replayIndex >= moveCount;
  const replayText =
    moveCount <= 0
      ? "Replay appears once moves are made."
      : replayActive
        ? `Replay ${replayIndex} / ${moveCount}`
        : `Live view at move ${moveCount} / ${moveCount}`;
  const boardBody = `${staleNote}${renderPlayBoardBody(model, board)}`;

  return `
    <main class="shell" data-elm-phase="9" data-elm-runtime="${runtimeMode}" data-elm-shell-actions>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Realtime paper-soccer</p>
          <h1>Traceball Arena</h1>
          <p class="lede">Draw one line per move, bounce from old points and walls, and sneak the ball into the other gate.</p>
        </div>
        <button id="appMenuButton" class="app-menu-button" type="button" aria-label="Open app menu" aria-expanded="false" aria-controls="appMenuOverlay">
          <span aria-hidden="true">☰</span>
        </button>
      </section>

      <nav class="mobile-nav" aria-label="Mobile game pages">
        <button type="button" class="mobile-tab" data-page-target="invite">Home</button>
        <button type="button" class="mobile-tab" data-page-target="boards">Boards</button>
        <button type="button" class="mobile-tab active" data-page-target="play">Play</button>
        <button type="button" class="mobile-tab" data-page-target="match">Match</button>
      </nav>

      <section id="joinPanel" class="card join-panel mobile-page" data-mobile-page="invite">
        <div class="online-header">
          <h2>Online game</h2>
          <p>Open a board as watcher, then choose an open seat when you are ready to play.</p>
        </div>
        ${renderOpenBoardForm(model)}
        ${renderInviteShare(model)}
      </section>

      <section id="boardsPanel" class="card boards-panel mobile-page" data-mobile-page="boards">
        ${
          board
            ? renderBoardList([roomSummaryFromBoard(board)].filter(Boolean))
            : `
        <div class="boards-header">
          <div>
            <p class="boards-kicker">Server lobby</p>
            <h2>Boards</h2>
            <p>Live board list is available from the lobby route.</p>
          </div>
        </div>`
        }
      </section>

      <section class="game-layout">
        <div class="board-card mobile-page active" data-mobile-page="play">
          <div id="playStatus" class="play-status">${boardTitle}</div>
          <div id="turnIndicator" class="turn-indicator" aria-live="polite">${stateLabel}</div>
          ${renderBoardHud(model)}
          <div class="play-board-actions">
            ${renderPlayLeaveButton(model)}
            <button id="playPauseGame" class="play-pause-button ghost" type="button" data-elm-command="pause"><span aria-hidden="true">⏸</span> Pause</button>
          </div>
          <div class="${boardStageClass}">
            ${boardBody}
            <div id="pauseOverlay" class="${pauseOverlayClass}" aria-live="polite" role="dialog" aria-modal="true" aria-labelledby="pauseTitle">
              <div class="pause-card">
                <div class="pause-kicker">Paused</div>
                <h2 id="pauseTitle">Game paused</h2>
                <p id="pauseMessage">${pauseMessage}</p>
                <p id="pauseTurn">${pauseTurn}</p>
                <div class="pause-actions">
                  <button id="resumeGame" class="primary" type="button" data-elm-command="resume">Resume game</button>
                  <button id="pauseNewRound" class="ghost" type="button" ${newRoundControlAttr}>New round</button>
                </div>
              </div>
            </div>
            <div id="winnerOverlay" class="${winnerOverlayClass}" aria-live="polite">
              <div class="winner-card">
                <button id="winnerClose" class="winner-close" type="button" aria-label="Close winner banner" data-elm-command="close-winner">×</button>
                <div class="winner-kicker">Winner</div>
                <div id="winnerName" class="winner-name">${escapeHtml(winnerName)}</div>
                <button id="winnerNewRound" class="winner-new-round" type="button" ${newRoundControlAttr}>New Round</button>
              </div>
            </div>
          </div>
          <div class="board-replay replay">
            <h2>Replay</h2>
            <div class="replay-controls">
              <button id="replayStart" type="button" data-elm-command="replay-start"${replayStartDisabled ? " disabled" : ""}>Start</button>
              <button id="replayPrev" type="button" data-elm-command="replay-prev"${replayPrevDisabled ? " disabled" : ""}>‹</button>
              <button id="replayNext" type="button" data-elm-command="replay-next"${replayNextDisabled ? " disabled" : ""}>›</button>
              <button id="replayEnd" type="button" data-elm-command="replay-end"${replayEndDisabled ? " disabled" : ""}>End</button>
            </div>
            <input id="replayRange" type="range" min="0" max="${moveCount}" value="${replayIndex}" />
            <p id="replayText">${replayText}</p>
          </div>
        </div>
        <aside class="side mobile-page" data-mobile-page="match">
          <div class="card scoreboard">
            <h2>Match</h2>
            <div id="status">${boardTitle}</div>
            <div class="players score-strip" aria-label="Room score">
              <div class="score-name blue-name"><span class="dot blue"></span><strong id="p1">${escapeHtml(playerDisplayName(board, "blue"))}</strong></div>
              <div class="score-spacer" aria-hidden="true"></div>
              <div class="score-name red-name"><strong id="p2">${escapeHtml(playerDisplayName(board, "red"))}</strong><span class="dot red"></span></div>
              <div id="p1Score" class="score-number blue-score">${Number(session?.score?.blue || 0)}</div>
              <div class="score-dash">-</div>
              <div id="p2Score" class="score-number red-score">${Number(session?.score?.red || 0)}</div>
            </div>
            <div id="seatActions" class="seat-actions">${renderPhase9SeatButtons(model, "match")}</div>
            <button id="pauseGame" class="ghost" type="button" data-elm-command="pause">Pause game</button>
            <button id="reset" class="ghost" type="button" ${newRoundControlAttr}>New round</button>
            ${renderMatchDetails(model)}
          </div>
        </aside>
      </section>
    </main>
    <div id="appMenuDropdown" class="app-menu-dropdown hidden" role="menu" aria-label="App menu">
      <button class="app-menu-choice" type="button" role="menuitem" data-menu-view="history">Play History</button>
      <button class="app-menu-choice" type="button" role="menuitem" data-menu-view="rules">Rules</button>
      <p class="app-menu-note">More settings later.</p>
    </div>
    <div id="appContentOverlay" class="app-content-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="appContentTitle">
      <div class="app-content-panel">
        <div class="app-content-header">
          <div>
            <p class="app-menu-kicker">Traceball Arena</p>
            <h2 id="appContentTitle">Menu</h2>
          </div>
          <button id="appContentClose" class="app-menu-close" type="button" aria-label="Close window">×</button>
        </div>
        <section id="appMenuHistory" class="app-menu-section hidden">
          <div class="history-header">
            <div><h3>Play History</h3><p>Saved on this device for local and online games.</p></div>
            <button id="clearMenuHistory" class="ghost" type="button">Clear</button>
          </div>
          <div id="menuHistoryList" class="history-list"><p class="history-empty">Finished games will appear here.</p></div>
        </section>
        <section id="appMenuRules" class="app-menu-section hidden">
          <h3>Rules</h3>
          <ul class="app-menu-rules">
            <li>Move one point in any of 8 directions.</li>
            <li>No line segment can be reused.</li>
            <li>Margin lines are already traced; only margin points may be used.</li>
            <li>Landing on a visited point, wall, or black gate-mouth dot gives another move.</li>
            <li>The black dot in the middle of each gate line is already a bounce point.</li>
            <li>Score in the opponent gate. Own gate = own goal.</li>
            <li>If a move timer is enabled, each move or bounce gets a fresh clock.</li>
            <li>If time expires, no line is drawn; the ball stays and the turn passes.</li>
            <li>Two timeouts in a row pause the game; the board is hidden until play resumes.</li>
            <li>Either joined player can pause or resume during a round.</li>
            <li>If you are stuck, you lose.</li>
          </ul>
        </section>
      </div>
    </div>
    <div id="toast" role="status"></div>`;
}

function playerNameFromRoot(root) {
  const input =
    document.querySelector("#playerNameInput") ||
    document.querySelector("#elmPlayerName");
  return persistPlayerName(input?.value || getStoredPlayerName());
}

let appMenuWired = false;

function saveGameToHistory(model) {
  const board = model?.board;
  if (!board || board.state !== "BetweenRounds") return;
  const session = board.currentSession;
  const round = session?.round;
  if (!round?.winner) return;
  const winnerSeat = round.winner === "blue" ? "p1" : "p2";
  const isLocal = Boolean(model.localRuntime);
  const blueName = board.seats?.blue?.player?.displayName || "Blue";
  const redName = board.seats?.red?.player?.displayName || "Red";
  const blueScore = Number(session?.score?.blue || 0);
  const redScore = Number(session?.score?.red || 0);
  const moves = Array.isArray(round.moves) ? round.moves : [];
  const sig = `${board.code}:${session?.sessionId || ""}:${winnerSeat}:${blueScore}:${redScore}`;
  try {
    const storage = typeof window !== "undefined" ? window.localStorage : null;
    const raw = storage?.getItem?.("traceballGameHistory");
    const existing = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(existing)) return;
    const alreadySaved = existing.some(
      (e) =>
        `${e.roomId}:${e.sessionId || ""}:${e.winner}:${e.score?.p1}:${e.score?.p2}` ===
        sig,
    );
    if (alreadySaved) return;
    const entry = {
      roomId: board.code || "local",
      sessionId: session?.sessionId || null,
      mode: isLocal ? "local" : "online",
      savedAt: Date.now(),
      playedAt: Date.now(),
      winner: winnerSeat,
      endReason: round.endReason || "",
      players: {
        p1: { name: blueName, status: "active" },
        p2: { name: redName, status: "active" },
      },
      score: { p1: blueScore, p2: redScore },
      moveCount: moves.length,
    };
    storage?.setItem?.(
      "traceballGameHistory",
      JSON.stringify([entry, ...existing].slice(0, 50)),
    );
  } catch {}
}

function renderMenuHistory(container) {
  if (!container) return;
  let entries = [];
  try {
    const raw =
      typeof window !== "undefined" &&
      window.localStorage?.getItem?.("traceballGameHistory");
    if (raw) entries = JSON.parse(raw);
  } catch {}
  if (!Array.isArray(entries) || entries.length === 0) {
    container.innerHTML =
      '<p class="history-empty">Finished games will appear here. Online games are saved on every device that sees the result.</p>';
    return;
  }
  const clearBtn = document.querySelector("#clearMenuHistory");
  if (clearBtn) clearBtn.disabled = false;
  container.innerHTML = entries
    .slice(0, 8)
    .map((entry) => {
      const winnerName =
        entry.players?.[entry.winner]?.name || entry.winner || "Unknown";
      const p1 = entry.players?.p1?.name || "Blue";
      const p2 = entry.players?.p2?.name || "Red";
      const score = `${entry.score?.p1 || 0}-${entry.score?.p2 || 0}`;
      const date = entry.playedAt
        ? new Date(entry.playedAt).toLocaleDateString()
        : "";
      return `<article class="history-item"><div class="history-item-title"><span>${escapeHtml(winnerName)} won</span><span>${escapeHtml(score)}</span></div><div class="history-meta">${escapeHtml(entry.mode || "online")} \u00b7 ${escapeHtml(p1)} vs ${escapeHtml(p2)} \u00b7 ${entry.moveCount || 0} moves${date ? ` \u00b7 ${escapeHtml(date)}` : ""}</div></article>`;
    })
    .join("");
}

function openAppMenuContent(view) {
  const showHistory = view === "history";
  const overlay = document.querySelector("#appContentOverlay");
  const title = document.querySelector("#appContentTitle");
  const histSection = document.querySelector("#appMenuHistory");
  const rulesSection = document.querySelector("#appMenuRules");
  const closeBtn = document.querySelector("#appContentClose");
  document.querySelector("#appMenuDropdown")?.classList?.add("hidden");
  document
    .querySelector("#appMenuButton")
    ?.setAttribute("aria-expanded", "false");
  if (title) title.textContent = showHistory ? "Play History" : "Rules";
  histSection?.classList?.toggle("hidden", !showHistory);
  rulesSection?.classList?.toggle("hidden", showHistory);
  if (showHistory)
    renderMenuHistory(document.querySelector("#menuHistoryList"));
  overlay?.classList?.remove("hidden");
  document.body?.classList?.add("menu-open");
  if (typeof requestAnimationFrame !== "undefined")
    requestAnimationFrame(() => closeBtn?.focus?.());
}

function closeAppMenuContent() {
  document.querySelector("#appContentOverlay")?.classList?.add("hidden");
  document.body?.classList?.remove("menu-open");
  document.querySelector("#appMenuButton")?.focus?.();
}

function wireAppMenu() {
  const button = document.querySelector("#appMenuButton");
  const dropdown = document.querySelector("#appMenuDropdown");
  const overlay = document.querySelector("#appContentOverlay");
  const closeBtn = document.querySelector("#appContentClose");
  const clearBtn = document.querySelector("#clearMenuHistory");
  if (!button) return;
  button.addEventListener("click", () => {
    if (dropdown?.classList?.contains("hidden")) {
      dropdown?.classList?.remove("hidden");
      button.setAttribute("aria-expanded", "true");
    } else {
      dropdown?.classList?.add("hidden");
      button.setAttribute("aria-expanded", "false");
    }
  });
  dropdown?.addEventListener("click", (event) => {
    const choice = event.target?.closest?.("[data-menu-view]");
    if (choice) openAppMenuContent(choice.dataset.menuView);
  });
  closeBtn?.addEventListener("click", closeAppMenuContent);
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeAppMenuContent();
  });
  clearBtn?.addEventListener("click", () => {
    try {
      window.localStorage?.removeItem?.("traceballGameHistory");
    } catch {}
    const list = document.querySelector("#menuHistoryList");
    if (list)
      list.innerHTML =
        '<p class="history-empty">Finished games will appear here.</p>';
    setToast("Game history cleared on this device.");
  });
  if (!appMenuWired) {
    appMenuWired = true;
    document.addEventListener("click", (event) => {
      const dd = document.querySelector("#appMenuDropdown");
      if (
        dd &&
        !dd.classList.contains("hidden") &&
        !event.target?.closest?.("#appMenuDropdown") &&
        !event.target?.closest?.("#appMenuButton")
      ) {
        dd.classList.add("hidden");
        document
          .querySelector("#appMenuButton")
          ?.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const ov = document.querySelector("#appContentOverlay");
      const dd = document.querySelector("#appMenuDropdown");
      if (ov && !ov.classList.contains("hidden")) closeAppMenuContent();
      else if (dd && !dd.classList.contains("hidden")) {
        dd.classList.add("hidden");
        document
          .querySelector("#appMenuButton")
          ?.setAttribute("aria-expanded", "false");
      }
    });
  }
}

function rewireBridgeView(root, bridge) {
  wireOpenBoardForm(root);
  wireSeatingActions(root, bridge);
  wirePhase9ShellActions(root, bridge);
  wireBoardMoveTargets(root, bridge);
  wireReplayRange(root, bridge);
  wireRoundActions(root, bridge);
  wireDisconnectActions(root, bridge);
  wireAppMenu();
}

function refreshBridgeRender(root, bridge) {
  if (root) root.innerHTML = renderModel(bridge.model);
  rewireBridgeView(root, bridge);
  wireElmBoardCanvas(bridge.model);
}

function activateMobilePage(page) {
  if (!page) return;
  const body = document.body;
  if (body?.dataset) body.dataset.mobilePage = page;
  document.querySelectorAll?.(".mobile-tab")?.forEach?.((tab) => {
    tab.classList?.toggle?.("active", tab?.dataset?.pageTarget === page);
  });
  document.querySelectorAll?.(".mobile-page")?.forEach?.((panel) => {
    panel.classList?.toggle?.("active", panel?.dataset?.mobilePage === page);
  });
}

function setToast(message) {
  const toast = document.querySelector("#toast");
  if (toast) toast.textContent = message;
}

function activateHomeMode(mode = "online") {
  const online = mode !== "local";
  document.querySelector("#onlineMode")?.classList?.toggle?.("active", online);
  document
    .querySelector("#onlineMode")
    ?.setAttribute?.("aria-pressed", online ? "true" : "false");
  document.querySelector("#localMode")?.classList?.toggle?.("active", !online);
  document
    .querySelector("#localMode")
    ?.setAttribute?.("aria-pressed", online ? "false" : "true");
  document
    .querySelector(".online-form-stack")
    ?.classList?.toggle?.("hidden", !online);
  document.querySelector("#localPanel")?.classList?.toggle?.("hidden", online);
}

function selectedMoveTimerSeconds(selector, fallback = 15) {
  const value = normalizeMoveTimerSeconds(
    document.querySelector(selector)?.value ?? fallback,
    fallback,
  );
  if (selector === "#onlineMoveTimer") persistOnlineMoveTimer(value);
  return value;
}

function selectedMoveTimer(selector, fallback = 15) {
  return selectedMoveTimerSeconds(selector, fallback);
}

function wirePhase9ShellActions(root, bridge) {
  const shell = document.querySelector("[data-elm-shell-actions]");
  shell?.addEventListener?.("click", (event) => {
    const target =
      event.target?.closest?.(
        "[data-elm-command], [data-page-target], [data-home-mode]",
      ) || event.target;
    const homeMode = target?.dataset?.homeMode;
    if (homeMode) {
      event.preventDefault?.();
      activateHomeMode(homeMode);
      return;
    }
    const page = target?.dataset?.pageTarget;
    if (page) {
      event.preventDefault?.();
      activateMobilePage(page);
      return;
    }
    const command = target?.dataset?.elmCommand;
    if (!command) return;
    event.preventDefault?.();
    const name = playerNameFromRoot(root);
    let changed = false;
    if (command === "claim-blue")
      changed = bridge.claimSeat?.("p1", name) || false;
    if (command === "claim-red")
      changed = bridge.claimSeat?.("p2", name) || false;
    if (command === "join-waiting-list")
      changed = bridge.joinWaitingList?.(name) || false;
    if (command === "leave-waiting-list")
      changed = bridge.leaveWaitingList?.() || false;
    if (command === "leave-seat") {
      const confirmed = window.confirm
        ? window.confirm(
            "Leave your seat? This may forfeit the current session.",
          )
        : true;
      if (confirmed) changed = bridge.leaveSeat?.() || false;
    }
    if (command === "new-round") changed = submitNewRound(bridge);
    if (command === "copy-invite") {
      const input = document.querySelector("#inviteLink");
      input?.select?.();
      const value =
        input?.value ||
        absoluteRoomInviteUrl(
          bridge.model?.boardCode || bridge.model?.board?.code || "",
        );
      const clipboard =
        typeof navigator !== "undefined" ? navigator.clipboard : null;
      clipboard
        ?.writeText?.(value)
        .then?.(() => setToast("Invite link copied."));
      if (!clipboard) setToast("Invite link ready to copy.");
    }
    if (command === "refresh-boards") {
      loadBoardList(root).then?.(() => rewireBridgeView(root, bridge));
    }
    if (command.startsWith("replay-")) {
      bridge.model = applyReplayCommand(bridge.model, command);
      changed = true;
    }
    if (command === "pause" && bridge.model?.localRuntime) {
      bridge.model = { ...bridge.model, localPaused: true, error: null };
      saveLocalRuntimeModel(bridge.model);
      changed = true;
    }
    if (command === "resume" && bridge.model?.localRuntime) {
      bridge.model = { ...bridge.model, localPaused: false, error: null };
      saveLocalRuntimeModel(bridge.model);
      changed = true;
    }
    if (command === "close-winner") {
      bridge.model = { ...bridge.model, winnerDismissed: true, error: null };
      changed = true;
    } else if (command === "pause" && !bridge.model?.localRuntime) {
      bridge.sendCommand?.({ type: "pause" });
    } else if (command === "resume" && !bridge.model?.localRuntime) {
      bridge.sendCommand?.({ type: "resume" });
    }
    if (changed) refreshBridgeRender(root, bridge);
  });
}

function wireReplayRange(root, bridge) {
  const range = document.querySelector("#replayRange");
  range?.addEventListener?.("input", (event) => {
    const max = replayMoveCount(bridge.model);
    const next = clampReplayIndex(event?.target?.value, max);
    bridge.model = {
      ...bridge.model,
      replayIndex: next >= max ? null : next,
      pendingMoveKey: null,
    };
    refreshBridgeRender(root, bridge);
  });
}

function wireSeatingActions(root, bridge) {
  const actions = document.querySelector("[data-elm-actions]");
  actions?.addEventListener?.("click", (event) => {
    const command = event.target?.dataset?.elmCommand;
    if (!command) return;
    const name = playerNameFromRoot(root);
    if (command === "claim-blue") bridge.claimSeat("p1", name);
    if (command === "claim-red") bridge.claimSeat("p2", name);
    if (command === "join-waiting-list") bridge.joinWaitingList(name);
    if (command === "leave-waiting-list") bridge.leaveWaitingList();
    if (
      command === "leave-seat" &&
      window.confirm?.("Leave your seat? This may forfeit the current session.")
    )
      bridge.leaveSeat();
  });
}

function wireBoardMoveTargets(root, bridge) {
  const legalLayer = document.querySelector(
    '[data-elm-legal-context="own-turn"]',
  );
  legalLayer?.addEventListener?.("click", (event) => {
    const target = event.target?.closest?.("[data-elm-legal-move]");
    if (!target?.dataset?.elmLegalPlayable) return;
    const key = target.dataset.elmLegalMove;
    if (!submitMoveFromLegalTarget(bridge, key)) return;
    event.preventDefault?.();
    refreshBridgeRender(root, bridge);
  });
}

function wireRoundActions(root, bridge) {
  const actions = document.querySelector("[data-elm-round-actions]");
  actions?.addEventListener?.("click", (event) => {
    const command = event.target?.dataset?.elmCommand;
    if (command !== "new-round") return;
    if (!submitNewRound(bridge)) return;
    event.preventDefault?.();
    refreshBridgeRender(root, bridge);
  });
}

function wireDisconnectActions(root, bridge) {
  const actions = document.querySelector("[data-elm-disconnect-actions]");
  actions?.addEventListener?.("click", (event) => {
    const command = event.target?.dataset?.elmCommand;
    const seatId = event.target?.dataset?.elmSeat;
    if (command !== "free-seat") return;
    if (!submitFreeDisconnectedSeat(bridge, seatId)) return;
    event.preventDefault?.();
    refreshBridgeRender(root, bridge);
  });
}

function wireOpenBoardForm(root) {
  const form = document.querySelector("#elmOpenBoardForm");
  const input = document.querySelector("#elmBoardCode");
  const createButton = document.querySelector("#elmCreateBoard");
  const localForm = document.querySelector("#localForm");
  const resumeLocalButton = document.querySelector("#resumeLocalSaved");
  const discardLocalButton = document.querySelector("#discardLocalSaved");
  form?.addEventListener?.("submit", (event) => {
    event.preventDefault();
    const code = sanitizeBoardCode(input?.value || "");
    if (code) {
      const url = new URL(window.location.href);
      url.searchParams.set("board", code);
      window.history?.replaceState?.({}, "", url);
    }
    createSocketBridge({
      boardCode: code,
      root,
      onModelChange: (_model, bridge) => {
        rewireBridgeView(root, bridge);
      },
    });
  });
  createButton?.addEventListener?.("click", async () => {
    try {
      await createBoardAsBlue({
        root,
        name: playerNameFromRoot(root),
        moveTimeLimitSeconds: selectedMoveTimer("#onlineMoveTimer", 15),
        onModelChange: (_model, bridge) => {
          rewireBridgeView(root, bridge);
        },
      });
    } catch (error) {
      if (root)
        root.innerHTML = renderModel({
          ...initialModel(),
          error: error?.message || "Create board failed.",
        });
    }
  });
  localForm?.addEventListener?.("submit", (event) => {
    event.preventDefault?.();
    const p1 = normalizeLocalName(
      document.querySelector("#localP1Name")?.value,
      "Blue",
    );
    const p2 = normalizeLocalName(
      document.querySelector("#localP2Name")?.value,
      "Red",
    );
    const timer = selectedMoveTimer("#localMoveTimer", 15);
    const bridge = createLocalBridge({
      root,
      blueName: p1,
      redName: p2,
      moveTimeLimitSeconds: timer,
      onModelChange: (_model, activeBridge) => {
        rewireBridgeView(root, activeBridge);
      },
    });
    rewireBridgeView(root, bridge);
    activateMobilePage("play");
  });

  resumeLocalButton?.addEventListener?.("click", () => {
    const restored = loadSavedLocalRuntimeModel();
    if (!restored) {
      setToast("No saved local game found.");
      return;
    }
    const bridge = createLocalBridge({
      root,
      restoredModel: restored,
      onModelChange: (_model, activeBridge) => {
        rewireBridgeView(root, activeBridge);
      },
    });
    rewireBridgeView(root, bridge);
    activateMobilePage("play");
  });

  discardLocalButton?.addEventListener?.("click", () => {
    clearSavedLocalRuntimeModel();
    const model = { ...initialModel(), clientId: getOrCreateClientId() };
    if (root) root.innerHTML = renderModel(model);
    wireOpenBoardForm(root);
    wirePhase9ShellActions(root, { model });
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function mount() {
  const root = document.querySelector("#elm-root");
  if (!root) return;
  const boardCode = parseBoardCodeFromLocation();
  if (boardCode && (window.WebSocket || typeof WebSocket !== "undefined")) {
    createSocketBridge({
      boardCode,
      root,
      onModelChange: (_model, bridge) => {
        rewireBridgeView(root, bridge);
      },
    });
    return;
  }
  let model = { ...initialModel(), clientId: getOrCreateClientId() };
  root.innerHTML = renderModel(model);
  wireOpenBoardForm(root);
  wirePhase9ShellActions(root, { model });
  await loadBoardList(root);
  wireOpenBoardForm(root);
  wirePhase9ShellActions(root, { model });
}

window.TraceballElmShell = {
  initialModel,
  decodeStateMessage,
  applyState,
  getOrCreateClientId,
  websocketUrl,
  parseBoardCodeFromLocation,
  createSocketBridge,
  createBoardAsBlue,
  createLocalBridge,
  createLocalRuntimeModel,
  serializeLocalRuntimeModel,
  restoreLocalRuntimeModel,
  applyLocalRuntimeMove,
  loadSavedLocalRuntimeModel,
  saveLocalRuntimeModel,
  clearSavedLocalRuntimeModel,
  renderReadOnlyBoard,
  renderRoundResult,
  renderDisconnectedSeatRecovery,
  renderBoardList,
  loadBoardList,
  renderModel,
  renderBoardMessage,
  submitMoveFromLegalTarget,
  submitNewRound,
  submitFreeDisconnectedSeat,
  wirePhase9ShellActions,
  wireBoardMoveTargets,
  wireRoundActions,
  wireDisconnectActions,
  mount,
};
mount();

if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      registration.update?.().catch?.(() => {});
      if (registration.waiting)
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
    })
    .catch(() => {});
}
