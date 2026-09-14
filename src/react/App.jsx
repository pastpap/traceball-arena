import React, { useEffect, useReducer } from "react";
import ElmBoard from "./components/ElmBoard.jsx";
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

export function connectLiveBoardSnapshot({
  currentBoardCode,
  clientId,
  dispatch,
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
      const snapshot = buildElmSnapshotFromServerMessage(message);
      if (!snapshot) return;
      dispatch?.({ type: "receiveBoardState", boardState: snapshot });
    },
  });
}

export function handlePendingBoardMoveClick({ dispatch }) {
  dispatch?.({
    type: "setToast",
    toast: "Move click received; server command not wired yet.",
  });
}

export default function App({ initialState }) {
  const [state, dispatch] = useReducer(shellReducer, initialState);
  const demoSnapshot = initialState?.demoBoardSnapshot || null;
  const liveSnapshot = state.boardState || demoSnapshot;
  const connectionStatus = String(state.connectionStatus || "idle");

  useEffect(() => {
    const roomId = normalizeBoardCode(state.currentBoardCode);
    if (!roomId) {
      dispatch({ type: "setConnectionStatus", status: "idle" });
      return undefined;
    }

    let runtime = null;
    try {
      runtime = connectLiveBoardSnapshot({
        currentBoardCode: roomId,
        clientId: state.clientId,
        dispatch,
      });
    } catch {
      dispatch({ type: "setConnectionStatus", status: "error" });
      return undefined;
    }

    return () => {
      runtime?.close?.();
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

  return (
    <main style={pageStyle}>
      <section style={panelStyle}>
        <p style={eyebrowStyle}>React product shell</p>
        <h1 style={titleStyle}>Traceball Arena</h1>
        <p style={leadStyle}>
          The React shell owns product state only. The Elm board island is not
          mounted yet, and online authority remains on the server.
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
          <p style={labelStyle}>Active Tab</p>
          <p style={valueStyle}>{state.mainTab || "home"}</p>
        </div>

        {liveSnapshot ? (
          <div style={placeholderStyle}>
            <ElmBoard
              snapshot={liveSnapshot}
              ownSeat={null}
              replayIndex={null}
              flipVertical={false}
              onMoveClick={(payload) => {
                console.info("Board move click", payload);
                handlePendingBoardMoveClick({ dispatch });
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
