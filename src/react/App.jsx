import React, { useEffect, useReducer, useRef, useState } from "react";
import ElmBoard from "./components/ElmBoard.jsx";
import MatchPanel from "./components/MatchPanel.jsx";
import ShareControls from "./components/ShareControls.jsx";
import { createBoard as createBoardRequest } from "./lib/api.js";
import { connectBoardSocket } from "./lib/socket.js";
import { persistPlayerName } from "./lib/storage.js";
import { shellReducer } from "./state/shellReducer.js";

const pageStyle = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  padding: "32px 20px",
  background:
    "radial-gradient(circle at top, rgba(10, 143, 40, 0.18), transparent 38%), linear-gradient(180deg, #f6fbf4 0%, #e4f0e2 100%)",
  color: "#102a1a",
};

const panelStyle = {
  width: "min(720px, 100%)",
  borderRadius: "24px",
  padding: "28px",
  background: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 24px 70px rgba(16, 42, 26, 0.16)",
  border: "1px solid rgba(16, 42, 26, 0.08)",
};

const eyebrowStyle = {
  margin: 0,
  fontSize: "0.85rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#0a8f28",
  fontWeight: 700,
};

const titleStyle = {
  margin: "10px 0 12px",
  fontSize: "clamp(2rem, 4vw, 3.25rem)",
  lineHeight: 1.05,
};

const leadStyle = {
  margin: 0,
  fontSize: "1.05rem",
  lineHeight: 1.6,
  color: "#33513f",
};

const cardGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
  marginTop: "24px",
};

const cardStyle = {
  padding: "16px",
  borderRadius: "18px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)",
};

const labelStyle = {
  margin: 0,
  fontSize: "0.78rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#567062",
};

const valueStyle = {
  margin: "8px 0 0",
  fontSize: "1rem",
  fontWeight: 700,
  wordBreak: "break-word",
};

const fieldStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "12px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const buttonRowStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "18px",
  flexWrap: "wrap",
};

const buttonStyle = (active) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: active ? "#102a1a" : "#f7fbf7",
  color: active ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
});

const placeholderStyle = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  background: "#eef7f0",
  border: "1px dashed rgba(16, 42, 26, 0.18)",
  color: "#153124",
  fontWeight: 600,
};

const noteStyle = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55,
};

const connectionDotStyle = {
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  marginRight: "8px",
  background: "#9aa79e",
};

function normalizeBoardCode(value) {
  return String(value || "").trim();
}

function normalizeVersion(value) {
  const next = Number(value);
  return Number.isFinite(next) ? next : 0;
}

function readGamePlayers(snapshot) {
  const players = snapshot?.game?.players;
  return players && typeof players === "object" ? players : null;
}

function isOccupiedSeatStatus(status) {
  const normalized = String(status || "").trim();
  return normalized === "active" || normalized === "disconnected";
}

function seatLabel(seatId) {
  return seatId === "p1" ? "Claim Blue" : "Claim Red";
}

function isActiveSession(snapshot) {
  return (
    snapshot?.game?.status === "playing" || snapshot?.game?.status === "paused"
  );
}

function defaultHistory() {
  return globalThis.window?.history ?? globalThis.history ?? null;
}

function defaultLocation() {
  return globalThis.window?.location ?? globalThis.location ?? null;
}

function readLocationHref(locationLike) {
  if (!locationLike) return "";
  if (typeof locationLike.href === "string" && locationLike.href) {
    return locationLike.href;
  }
  return `${locationLike.origin || "http://localhost"}${locationLike.pathname || "/react"}${locationLike.search || ""}${locationLike.hash || ""}`;
}

export function getInitialReactBoardCode({
  locationLike = defaultLocation(),
} = {}) {
  const href = readLocationHref(locationLike);
  if (!href) return "";

  const url = new URL(href);
  return normalizeBoardCode(
    url.searchParams.get("board") ||
      url.searchParams.get("room") ||
      url.searchParams.get("code") ||
      "",
  );
}

export function buildElmSnapshotFromServerMessage(message) {
  if (!message || typeof message !== "object") return null;
  if (String(message.type || "") !== "state") return null;

  const boardCode = normalizeBoardCode(message.boardCode || message.roomId);
  const hasBoard = message.board && typeof message.board === "object";
  const hasGame = message.game && typeof message.game === "object";

  if (!boardCode || (!hasBoard && !hasGame)) return null;

  return {
    boardCode,
    version: normalizeVersion(message.version),
    ...(hasBoard ? { board: message.board } : {}),
    ...(hasGame ? { game: message.game } : {}),
  };
}

export function syncReactBoardUrl(
  boardCode,
  { historyLike = defaultHistory(), locationLike = defaultLocation() } = {},
) {
  if (!locationLike || typeof historyLike?.replaceState !== "function") {
    return null;
  }

  const currentHref =
    typeof locationLike.href === "string" && locationLike.href
      ? locationLike.href
      : `${locationLike.origin || "http://localhost"}${locationLike.pathname || "/react"}${locationLike.search || ""}${locationLike.hash || ""}`;
  const url = new URL(currentHref);
  url.pathname = "/react";
  if (boardCode) {
    url.searchParams.set("board", String(boardCode).trim());
  } else {
    url.searchParams.delete("board");
  }
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  historyLike.replaceState(historyLike.state ?? null, "", nextUrl);
  return nextUrl;
}

export function connectLiveBoardSnapshot({
  currentBoardCode,
  clientId,
  dispatch,
  onOwnSeat,
  onMessage,
  connect = connectBoardSocket,
}) {
  const roomId = normalizeBoardCode(currentBoardCode);
  if (!roomId || typeof connect !== "function") return null;

  return connect({
    roomId,
    clientId: String(clientId || ""),
    onStatus(status) {
      dispatch?.({ type: "setConnectionStatus", status });
    },
    onMessage(message) {
      onMessage?.(message);

      if (message?.type === "joined") {
        const seat = String(message.playerId || "").trim();
        if (seat === "p1" || seat === "p2") {
          onOwnSeat?.(seat);
          dispatch?.({ type: "setWaitingListMembership", isMember: false });
        }
        return;
      }

      if (message?.type === "left") {
        onOwnSeat?.(null);
        dispatch?.({ type: "setWaitingListMembership", isMember: false });
        dispatch?.({ type: "setToast", toast: "You left the board." });
        return;
      }

      if (message?.type === "waitingListJoined") {
        dispatch?.({ type: "setWaitingListMembership", isMember: true });
        return;
      }

      if (message?.type === "waitingListLeft") {
        dispatch?.({ type: "setWaitingListMembership", isMember: false });
        return;
      }

      if (
        message?.type === "BoardNotFound" &&
        typeof message.message === "string"
      ) {
        dispatch?.({ type: "setToast", toast: message.message });
        return;
      }

      if (message?.type === "error" && typeof message.error === "string") {
        dispatch?.({ type: "setToast", toast: message.error });
        return;
      }

      const snapshot = buildElmSnapshotFromServerMessage(message);
      if (!snapshot) return;
      dispatch?.({ type: "receiveBoardState", boardState: snapshot });
    },
  });
}

export function startWatchingBoard({
  roomId,
  clientId,
  dispatch,
  setOwnSeat,
  connectionRef,
  activeBoardRef,
  onMessage,
  connect = connectLiveBoardSnapshot,
}) {
  const nextRoomId = normalizeBoardCode(roomId);
  if (!nextRoomId || typeof connect !== "function") return null;

  if (activeBoardRef?.current === nextRoomId && connectionRef?.current) {
    return connectionRef.current;
  }

  connectionRef?.current?.close?.();
  if (connectionRef) connectionRef.current = null;
  if (activeBoardRef) activeBoardRef.current = nextRoomId;
  setOwnSeat?.(null);

  const runtime = connect({
    currentBoardCode: nextRoomId,
    clientId,
    dispatch,
    onOwnSeat: setOwnSeat,
    onMessage,
  });

  if (connectionRef) connectionRef.current = runtime;
  return runtime;
}

export function getClaimableSeatActions({ snapshot, ownSeat } = {}) {
  const seat = String(ownSeat || "").trim();
  if (seat === "p1" || seat === "p2") return [];

  const players = readGamePlayers(snapshot);
  if (!players) return [];

  return ["p1", "p2"]
    .filter((seatId) => players?.[seatId]?.status === "vacant")
    .map((seatId) => ({ seatId, label: seatLabel(seatId) }));
}

export function getLeaveSeatAction({ ownSeat, snapshot } = {}) {
  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") return null;

  return isActiveSession(snapshot)
    ? { label: "Leave Seat (Forfeit)", danger: true }
    : { label: "Leave Seat", danger: false };
}

export function getWaitingListAction({
  ownSeat,
  snapshot,
  isWaitingListMember,
} = {}) {
  const seat = String(ownSeat || "").trim();
  if (seat === "p1" || seat === "p2") return null;

  if (Boolean(isWaitingListMember)) {
    return { type: "leave", label: "Leave Waiting List" };
  }

  const players = readGamePlayers(snapshot);
  if (!players) return null;

  const bothSeatsOccupied = ["p1", "p2"].every((seatId) =>
    isOccupiedSeatStatus(players?.[seatId]?.status),
  );

  return bothSeatsOccupied
    ? { type: "join", label: "Join Waiting List" }
    : null;
}

export function getPauseResumeActions({ ownSeat, snapshot } = {}) {
  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") return [];

  const status = String(snapshot?.game?.status || "").trim();
  if (status === "playing") {
    return snapshot?.game?.turn === seat
      ? [{ type: "pause", label: "Pause Game" }]
      : [];
  }

  if (status === "paused") {
    const resumeOwner =
      snapshot?.game?.pause?.resumeTurn ||
      snapshot?.game?.pause?.byPlayerId ||
      null;
    return resumeOwner === seat
      ? [{ type: "resume", label: "Resume Game" }]
      : [];
  }

  return [];
}

export function getNewRoundAction({ ownSeat, snapshot } = {}) {
  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") return null;

  const status = String(snapshot?.game?.status || "").trim();
  if (status === "finished") {
    return { label: "Continue", reason: "between-rounds" };
  }

  if (status === "paused" && snapshot?.game?.pause?.byPlayerId === seat) {
    return { label: "Start New Round", reason: "paused-owner" };
  }

  return null;
}

export function initializeBoardFromUrl({
  clientId,
  dispatch,
  startWatching,
  locationLike = defaultLocation(),
}) {
  const roomId = getInitialReactBoardCode({ locationLike });
  if (!roomId) return null;

  dispatch?.({ type: "setCurrentBoardCode", boardCode: roomId });

  return startWatching?.({
    roomId,
    clientId,
    onMessage(message) {
      if (
        message?.type === "BoardNotFound" &&
        typeof message.message === "string"
      ) {
        dispatch?.({ type: "setToast", toast: message.message });
      }
      if (message?.type === "error" && typeof message.error === "string") {
        dispatch?.({ type: "setToast", toast: message.error });
      }
    },
  });
}

export function handlePendingBoardMoveClick({ dispatch }) {
  dispatch?.({
    type: "setToast",
    toast: "Move click received; server command not wired yet.",
  });
}

function moveTargetFromPayload(payload) {
  const point = payload?.point;
  if (!point || typeof point !== "object") return null;
  const x = Number(point.x);
  const y = Number(point.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return { x, y };
}

function isSocketOpen(connection) {
  const OPEN = 1;
  return (
    typeof connection?.send === "function" &&
    Number(connection?.socket?.readyState) === OPEN
  );
}

export function handleElmBoardMoveClick({
  payload,
  ownSeat,
  connection,
  dispatch,
}) {
  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to move.",
    });
    return;
  }

  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") {
    dispatch?.({ type: "setToast", toast: "Join a seat to move." });
    return;
  }

  const to = moveTargetFromPayload(payload);
  if (!to) {
    dispatch?.({ type: "setToast", toast: "Invalid move target." });
    return;
  }

  try {
    connection.send({ type: "move", to });
  } catch {
    dispatch?.({
      type: "setToast",
      toast: "Move could not be sent. Reconnect and try again.",
    });
  }
}

export function handleClaimSeat({
  seatId,
  currentBoardCode,
  clientId,
  playerName,
  connection,
  dispatch,
}) {
  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat.",
    });
    return;
  }

  const normalizedSeatId = String(seatId || "").trim();
  if (normalizedSeatId !== "p1" && normalizedSeatId !== "p2") {
    dispatch?.({ type: "setToast", toast: "Invalid seat selection." });
    return;
  }

  connection.send({
    type: "claimSeat",
    seatId: normalizedSeatId,
    name: String(playerName || "").trim(),
    roomId: normalizeBoardCode(currentBoardCode),
    clientId: String(clientId || "").trim(),
  });
}

export function handleJoinWaitingList({
  currentBoardCode,
  clientId,
  playerName,
  connection,
  dispatch,
}) {
  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to join the waiting list.",
    });
    return;
  }

  connection.send({
    type: "joinWaitingList",
    name: String(playerName || "").trim(),
    roomId: normalizeBoardCode(currentBoardCode),
    clientId: String(clientId || "").trim(),
  });
}

export function handleLeaveWaitingList({
  currentBoardCode,
  clientId,
  connection,
  dispatch,
}) {
  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave the waiting list.",
    });
    return;
  }

  connection.send({
    type: "leaveWaitingList",
    roomId: normalizeBoardCode(currentBoardCode),
    clientId: String(clientId || "").trim(),
  });
}

export function handleLeaveSeat({ ownSeat, connection, dispatch }) {
  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") {
    dispatch?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }

  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to leave your seat.",
    });
    return;
  }

  connection.send({ type: "leave" });
}

export function handlePauseAction({ ownSeat, connection, dispatch }) {
  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") {
    dispatch?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }

  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to pause.",
    });
    return;
  }

  connection.send({ type: "pause" });
}

export function handleResumeAction({ ownSeat, connection, dispatch }) {
  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") {
    dispatch?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }

  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to resume.",
    });
    return;
  }

  connection.send({ type: "resume" });
}

export function handleNewRoundAction({ ownSeat, connection, dispatch }) {
  const seat = String(ownSeat || "").trim();
  if (seat !== "p1" && seat !== "p2") {
    dispatch?.({ type: "setToast", toast: "You are not occupying a seat." });
    return;
  }

  if (!isSocketOpen(connection)) {
    dispatch?.({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to continue.",
    });
    return;
  }

  connection.send({ type: "reset" });
}

export async function createReactBoardFlow({
  clientId,
  moveTimeLimitSeconds,
  dispatch,
  create = createBoardRequest,
  syncUrl = syncReactBoardUrl,
  startWatching,
  refreshBoardList,
}) {
  try {
    const created = await create({ clientId, moveTimeLimitSeconds });
    const roomId = normalizeBoardCode(created?.roomId);
    if (!roomId) {
      throw new Error("Board creation response missing roomId.");
    }

    dispatch?.({ type: "setCurrentBoardCode", boardCode: roomId });
    syncUrl?.(roomId);
    startWatching?.({ roomId, clientId });
    await refreshBoardList?.();
    return created;
  } catch (error) {
    dispatch?.({
      type: "setToast",
      toast:
        error instanceof Error && error.message
          ? error.message
          : "Board creation failed.",
    });
    return null;
  }
}

export default function App({ initialState }) {
  const [state, dispatch] = useReducer(shellReducer, initialState);
  const [ownSeat, setOwnSeat] = useState(null);
  const connectionRef = useRef(null);
  const activeBoardRef = useRef("");
  const demoSnapshot = initialState?.demoBoardSnapshot || null;
  const liveSnapshot = state.boardState || demoSnapshot;
  const connectionStatus = String(state.connectionStatus || "idle");
  const claimableSeatActions = getClaimableSeatActions({
    snapshot: liveSnapshot,
    ownSeat,
  });
  const leaveSeatAction = getLeaveSeatAction({
    ownSeat,
    snapshot: liveSnapshot,
  });
  const waitingListAction = getWaitingListAction({
    ownSeat,
    snapshot: liveSnapshot,
    isWaitingListMember: state.isWaitingListMember,
  });
  const pauseResumeActions = getPauseResumeActions({
    ownSeat,
    snapshot: liveSnapshot,
  });
  const newRoundAction = getNewRoundAction({
    ownSeat,
    snapshot: liveSnapshot,
  });

  useEffect(() => {
    const runtime = initializeBoardFromUrl({
      clientId: state.clientId,
      dispatch,
      startWatching: ({ roomId, clientId, onMessage }) =>
        startWatchingBoard({
          roomId,
          clientId,
          dispatch,
          setOwnSeat,
          connectionRef,
          activeBoardRef,
          onMessage,
        }),
    });

    return () => {
      if (connectionRef.current === runtime && runtime) {
        activeBoardRef.current = "";
        connectionRef.current = null;
        runtime.close?.();
      }
    };
    // URL-driven startup should run once; later board switches are state-driven.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const roomId = normalizeBoardCode(state.currentBoardCode);
    if (!roomId) {
      connectionRef.current = null;
      setOwnSeat(null);
      dispatch({ type: "setConnectionStatus", status: "idle" });
      return undefined;
    }

    let runtime = null;
    try {
      runtime = startWatchingBoard({
        roomId,
        clientId: state.clientId,
        dispatch,
        setOwnSeat,
        connectionRef,
        activeBoardRef,
        onMessage: null,
      });
    } catch {
      activeBoardRef.current = "";
      connectionRef.current = null;
      dispatch({ type: "setConnectionStatus", status: "error" });
      return undefined;
    }

    return () => {
      if (connectionRef.current === runtime) {
        activeBoardRef.current = "";
        connectionRef.current = null;
        runtime?.close?.();
      }
    };
  }, [state.currentBoardCode, state.clientId]);

  const playerIdentity =
    state.clientId && state.clientId.length > 6
      ? `...${state.clientId.slice(-6)}`
      : "identity ready";

  const handleNameChange = (event) => {
    const nextName = event.target.value;
    dispatch({ type: "setPlayerName", playerName: nextName });
    persistPlayerName(nextName);
  };

  const handleCreateBoard = async () => {
    await createReactBoardFlow({
      clientId: state.clientId,
      moveTimeLimitSeconds: state.onlineSetup.moveTimeLimitSeconds,
      dispatch,
      startWatching: ({ roomId, clientId }) =>
        startWatchingBoard({
          roomId,
          clientId,
          dispatch,
          setOwnSeat,
          connectionRef,
          activeBoardRef,
        }),
    });
  };

  const handleMatchClaimSeat = (seatId) => {
    handleClaimSeat({
      seatId,
      currentBoardCode: state.currentBoardCode,
      clientId: state.clientId,
      playerName: state.playerName,
      connection: connectionRef.current,
      dispatch,
    });
  };

  const handleMatchLeaveSeat = () => {
    handleLeaveSeat({
      ownSeat,
      connection: connectionRef.current,
      dispatch,
    });
  };

  const handleMatchWaitingListAction = (actionType) => {
    if (actionType === "join") {
      handleJoinWaitingList({
        currentBoardCode: state.currentBoardCode,
        clientId: state.clientId,
        playerName: state.playerName,
        connection: connectionRef.current,
        dispatch,
      });
      return;
    }

    handleLeaveWaitingList({
      currentBoardCode: state.currentBoardCode,
      clientId: state.clientId,
      connection: connectionRef.current,
      dispatch,
    });
  };

  const handleMatchPause = () => {
    handlePauseAction({
      ownSeat,
      connection: connectionRef.current,
      dispatch,
    });
  };

  const handleMatchResume = () => {
    handleResumeAction({
      ownSeat,
      connection: connectionRef.current,
      dispatch,
    });
  };

  const handleMatchNewRound = () => {
    handleNewRoundAction({
      ownSeat,
      connection: connectionRef.current,
      dispatch,
    });
  };

  const handleShareToast = (toast) => {
    dispatch({ type: "setToast", toast });
  };

  return (
    <main style={pageStyle}>
      <section style={panelStyle}>
        <p style={eyebrowStyle}>React product shell</p>
        <h1 style={titleStyle}>Traceball Arena</h1>
        <p style={leadStyle}>
          The React shell owns product state while Elm renders the board island.
          Online authority remains on the server.
        </p>

        <div style={cardGridStyle}>
          <article style={cardStyle}>
            <p style={labelStyle}>Player Name</p>
            <input
              aria-label="Player name"
              value={state.playerName || ""}
              onChange={handleNameChange}
              style={fieldStyle}
              placeholder="Enter your name"
            />
          </article>
          <article style={cardStyle}>
            <p style={labelStyle}>Client Identity</p>
            <p style={valueStyle}>{playerIdentity}</p>
          </article>
          <article style={cardStyle}>
            <p style={labelStyle}>Online Move Timer</p>
            <p style={valueStyle}>{state.onlineSetup.moveTimeLimitSeconds}s</p>
          </article>
          <article style={cardStyle}>
            <p style={labelStyle}>Connection</p>
            <p style={valueStyle}>
              <span
                style={{
                  ...connectionDotStyle,
                  background:
                    connectionStatus === "connected"
                      ? "#0a8f28"
                      : connectionStatus === "error"
                        ? "#d64545"
                        : "#9aa79e",
                }}
              />
              {connectionStatus}
            </p>
          </article>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p style={labelStyle}>Selected Mode</p>
          <div style={buttonRowStyle}>
            <button
              type="button"
              style={buttonStyle(state.mode === "online")}
              onClick={() => dispatch({ type: "setMode", mode: "online" })}
            >
              Online
            </button>
            <button
              type="button"
              style={buttonStyle(state.mode === "local")}
              onClick={() => dispatch({ type: "setMode", mode: "local" })}
            >
              Local
            </button>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p style={labelStyle}>Online Actions</p>
          <div style={buttonRowStyle}>
            <button
              type="button"
              style={buttonStyle(false)}
              onClick={handleCreateBoard}
            >
              Create Board
            </button>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p style={labelStyle}>Active Tab</p>
          <p style={valueStyle}>{state.mainTab || "home"}</p>
        </div>

        {state.currentBoardCode ? (
          <ShareControls
            boardCode={state.currentBoardCode}
            onToast={handleShareToast}
          />
        ) : null}

        {liveSnapshot ? (
          <MatchPanel
            snapshot={liveSnapshot}
            ownSeat={ownSeat}
            connectionStatus={connectionStatus}
            isWaitingListMember={state.isWaitingListMember}
            claimableSeatActions={claimableSeatActions}
            leaveSeatAction={leaveSeatAction}
            waitingListAction={waitingListAction}
            pauseResumeActions={pauseResumeActions}
            newRoundAction={newRoundAction}
            onClaimSeat={handleMatchClaimSeat}
            onLeaveSeat={handleMatchLeaveSeat}
            onWaitingListAction={handleMatchWaitingListAction}
            onPauseAction={handleMatchPause}
            onResumeAction={handleMatchResume}
            onNewRoundAction={handleMatchNewRound}
          />
        ) : null}

        {liveSnapshot ? (
          <div style={placeholderStyle}>
            <ElmBoard
              snapshot={liveSnapshot}
              ownSeat={ownSeat}
              replayIndex={null}
              flipVertical={false}
              onMoveClick={(payload) => {
                console.info("Board move click", payload);
                handleElmBoardMoveClick({
                  payload,
                  ownSeat,
                  connection: connectionRef.current,
                  dispatch,
                });
              }}
            />
          </div>
        ) : (
          <div style={placeholderStyle}>Board island not mounted yet</div>
        )}

        {state.toast ? (
          <div style={{ ...placeholderStyle, marginTop: "10px" }}>
            {state.toast}
          </div>
        ) : null}

        <div style={noteStyle}>
          Elm remains the board and replay correctness surface. The server
          remains authoritative for seats, timers, pause/resume, winners, and
          online move validation.
        </div>
      </section>
    </main>
  );
}
