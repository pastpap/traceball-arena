import React from "react";

const panelStyle = {
  marginTop: "20px",
  padding: "18px",
  borderRadius: "20px",
  background: "#f7fbf7",
  border: "1px solid rgba(16, 42, 26, 0.08)",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

const headingStyle = {
  margin: 0,
  fontSize: "1.25rem",
};

const subheadStyle = {
  margin: "4px 0 0",
  fontSize: "0.9rem",
  color: "#567062",
};

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "999px",
  padding: "8px 12px",
  background: "rgba(16, 42, 26, 0.08)",
  fontWeight: 700,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: "12px",
  marginTop: "16px",
};

const cardStyle = {
  padding: "14px",
  borderRadius: "16px",
  background: "#ffffff",
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

const metaStyle = {
  marginTop: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "10px 16px",
};

const metaRowStyle = {
  paddingTop: "10px",
  borderTop: "1px solid rgba(16, 42, 26, 0.08)",
};

const buttonRowStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "16px",
  flexWrap: "wrap",
};

const buttonStyle = (danger = false) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 14px",
  background: danger ? "#fff1f1" : "#f7fbf7",
  color: danger ? "#9b1c1c" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
});

const listStyle = {
  margin: "8px 0 0",
  paddingLeft: "18px",
  color: "#33513f",
};

function toSeatColor(seatId) {
  return seatId === "p1" ? "Blue" : seatId === "p2" ? "Red" : "Unknown";
}

function toSeatStatus(status) {
  const normalized = String(status || "").trim();
  if (normalized === "vacant") return "Open";
  if (normalized === "disconnected") return "Disconnected";
  if (normalized === "active") return "Occupied";
  return normalized || "Unknown";
}

function toViewerRole(ownSeat, isWaitingListMember) {
  if (ownSeat === "p1") return "Blue";
  if (ownSeat === "p2") return "Red";
  return isWaitingListMember ? "Waiting List" : "Watching";
}

function scoreText(score) {
  return `${Number(score?.p1 || 0)} - ${Number(score?.p2 || 0)}`;
}

function moveCount(game) {
  if (Array.isArray(game?.moves)) return game.moves.length;
  const next = Number(game?.moveCount);
  return Number.isFinite(next) ? next : 0;
}

function formatDuration(ms) {
  const seconds = Math.max(0, Math.ceil(Number(ms || 0) / 1000));
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.ceil(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.ceil(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.ceil(hours / 24);
  return `${days}d`;
}

function formatRelativeTime(targetMs, nowMs, mode) {
  const numericTarget = Number(targetMs);
  if (!Number.isFinite(numericTarget) || numericTarget <= 0) return null;

  const delta = numericTarget - Number(nowMs || 0);
  const distance = formatDuration(Math.abs(delta));

  if (mode === "future") {
    return delta >= 0 ? `in ${distance}` : `${distance} ago`;
  }

  return delta <= 0 ? `${distance} ago` : `in ${distance}`;
}

function formatMoveTimerSummary(game, nowMs) {
  const limitMs = Number(game?.moveTimeLimitMs);
  if (!Number.isFinite(limitMs) || limitMs <= 0) return "Untimed";

  const base = `${Math.round(limitMs / 1000)}s per move`;
  const turnStartedAt = Number(game?.turnStartedAt);
  if (!Number.isFinite(turnStartedAt) || turnStartedAt <= 0) return base;

  const deadlineAt = turnStartedAt + limitMs;
  const relative = formatRelativeTime(deadlineAt, nowMs, "future");
  return relative ? `${base} • deadline ${relative}` : base;
}

function seatModel(players, seatId) {
  const seat = players?.[seatId] || {};
  const status = toSeatStatus(seat.status);
  return {
    id: seatId,
    label: `${toSeatColor(seatId)} seat`,
    name: status === "Open" ? null : String(seat.name || "").trim() || null,
    status,
  };
}

export function buildMatchPanelModel({
  snapshot,
  ownSeat = null,
  connectionStatus = "idle",
  isWaitingListMember = false,
  claimableSeatActions = [],
  leaveSeatAction = null,
  waitingListAction = null,
  pauseResumeActions = [],
  newRoundAction = null,
  nowMs = Date.now(),
} = {}) {
  if (!snapshot || typeof snapshot !== "object") return null;

  const game =
    snapshot.game && typeof snapshot.game === "object" ? snapshot.game : {};
  const players =
    game.players && typeof game.players === "object" ? game.players : {};
  const waitingList = Array.isArray(game.waitingList) ? game.waitingList : [];
  const watchers = Array.isArray(game.watchers) ? game.watchers : [];
  const boardCode = String(snapshot.boardCode || game.roomId || "").trim();
  const currentTurn = String(game.turn || "").trim();

  return {
    boardCode,
    connectionStatus: String(connectionStatus || "idle"),
    viewerRole: toViewerRole(String(ownSeat || "").trim(), isWaitingListMember),
    seats: [seatModel(players, "p1"), seatModel(players, "p2")],
    sessionState: String(game.status || "waiting"),
    currentTurn: currentTurn ? toSeatColor(currentTurn) : "Waiting",
    score: scoreText(game.score),
    moveCount: moveCount(game),
    timerSummary: formatMoveTimerSummary(game, nowMs),
    waitingListCount: waitingList.length,
    waitingListNames: waitingList
      .map((entry) => String(entry?.displayName || "").trim())
      .filter(Boolean),
    watcherCount: watchers.length,
    lastActivity: formatRelativeTime(game.lastActivityAt, nowMs, "past"),
    expiry: formatRelativeTime(game.expiresAt, nowMs, "future"),
    actions: {
      claimableSeatActions: Array.isArray(claimableSeatActions)
        ? claimableSeatActions
        : [],
      leaveSeatAction,
      waitingListAction,
      pauseResumeActions: Array.isArray(pauseResumeActions)
        ? pauseResumeActions
        : [],
      newRoundAction,
    },
  };
}

function StatusCard({ label, value, children }) {
  return (
    <article style={cardStyle}>
      <p style={labelStyle}>{label}</p>
      <p style={valueStyle}>{value}</p>
      {children}
    </article>
  );
}

export function MatchPanel({
  snapshot,
  ownSeat,
  connectionStatus,
  isWaitingListMember,
  claimableSeatActions,
  leaveSeatAction,
  waitingListAction,
  pauseResumeActions,
  newRoundAction,
  onClaimSeat,
  onLeaveSeat,
  onWaitingListAction,
  onPauseAction,
  onResumeAction,
  onNewRoundAction,
  nowMs,
}) {
  const model = buildMatchPanelModel({
    snapshot,
    ownSeat,
    connectionStatus,
    isWaitingListMember,
    claimableSeatActions,
    leaveSeatAction,
    waitingListAction,
    pauseResumeActions,
    newRoundAction,
    nowMs,
  });

  if (!model) return null;

  return (
    <section style={panelStyle} aria-label="Match details">
      <div style={headerStyle}>
        <div>
          <h2 style={headingStyle}>Match details</h2>
          <p style={subheadStyle}>Board {model.boardCode || "not selected"}</p>
        </div>
        <div style={badgeStyle}>{model.viewerRole}</div>
      </div>

      <div style={gridStyle}>
        <StatusCard label="Connection Status" value={model.connectionStatus} />
        {model.seats.map((seat) => (
          <StatusCard
            key={seat.id}
            label={seat.label}
            value={seat.name || seat.status}
          >
            <p style={subheadStyle}>Status: {seat.status}</p>
          </StatusCard>
        ))}
      </div>

      <div style={metaStyle}>
        <div style={metaRowStyle}>
          <p style={labelStyle}>Session State</p>
          <p style={valueStyle}>{model.sessionState}</p>
        </div>
        <div style={metaRowStyle}>
          <p style={labelStyle}>Current Turn</p>
          <p style={valueStyle}>{model.currentTurn}</p>
        </div>
        <div style={metaRowStyle}>
          <p style={labelStyle}>Score</p>
          <p style={valueStyle}>{model.score}</p>
        </div>
        <div style={metaRowStyle}>
          <p style={labelStyle}>Move Count</p>
          <p style={valueStyle}>{model.moveCount}</p>
        </div>
        <div style={metaRowStyle}>
          <p style={labelStyle}>Move Timer</p>
          <p style={valueStyle}>{model.timerSummary}</p>
        </div>
        <div style={metaRowStyle}>
          <p style={labelStyle}>Waiting List</p>
          <p style={valueStyle}>{model.waitingListCount}</p>
          {model.waitingListNames.length > 0 ? (
            <ul style={listStyle}>
              {model.waitingListNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <div style={metaRowStyle}>
          <p style={labelStyle}>Watchers</p>
          <p style={valueStyle}>{model.watcherCount}</p>
        </div>
        {model.lastActivity ? (
          <div style={metaRowStyle}>
            <p style={labelStyle}>Last Activity</p>
            <p style={valueStyle}>{model.lastActivity}</p>
          </div>
        ) : null}
        {model.expiry ? (
          <div style={metaRowStyle}>
            <p style={labelStyle}>Expires</p>
            <p style={valueStyle}>{model.expiry}</p>
          </div>
        ) : null}
      </div>

      <div style={buttonRowStyle}>
        {model.actions.claimableSeatActions.map((action) => (
          <button
            key={action.seatId}
            type="button"
            style={buttonStyle(false)}
            onClick={() => onClaimSeat?.(action.seatId)}
          >
            {action.label}
          </button>
        ))}
        {model.actions.leaveSeatAction ? (
          <button
            type="button"
            style={buttonStyle(Boolean(model.actions.leaveSeatAction.danger))}
            onClick={() => onLeaveSeat?.()}
          >
            {model.actions.leaveSeatAction.label}
          </button>
        ) : null}
        {model.actions.waitingListAction ? (
          <button
            type="button"
            style={buttonStyle(false)}
            onClick={() =>
              onWaitingListAction?.(model.actions.waitingListAction.type)
            }
          >
            {model.actions.waitingListAction.label}
          </button>
        ) : null}
        {model.actions.pauseResumeActions.map((action) => (
          <button
            key={action.type}
            type="button"
            style={buttonStyle(false)}
            onClick={() => {
              if (action.type === "pause") {
                onPauseAction?.("pause");
                return;
              }
              onResumeAction?.("resume");
            }}
          >
            {action.label}
          </button>
        ))}
        {model.actions.newRoundAction ? (
          <button
            type="button"
            style={buttonStyle(false)}
            onClick={() => onNewRoundAction?.()}
          >
            {model.actions.newRoundAction.label}
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default MatchPanel;
