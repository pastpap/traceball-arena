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
  alignItems: "center",
  gap: "12px",
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

const emptyStyle = {
  marginTop: "14px",
  fontSize: "0.95rem",
  color: "#567062",
};

const listStyle = {
  listStyle: "none",
  margin: "14px 0 0",
  padding: 0,
  display: "grid",
  gap: "10px",
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
  padding: "12px 14px",
  borderRadius: "16px",
  background: "#ffffff",
  border: "1px solid rgba(16, 42, 26, 0.08)",
};

const codeStyle = {
  margin: 0,
  fontWeight: 700,
  fontSize: "1rem",
};

const metaTextStyle = {
  margin: "4px 0 0",
  fontSize: "0.82rem",
  color: "#567062",
};

const buttonRowStyle = {
  display: "flex",
  gap: "8px",
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

function boardStateLabel(state) {
  switch (String(state || "").trim()) {
    case "WaitingForPlayers":
      return "Waiting for players";
    case "OneSeatOccupied":
      return "1 seat occupied";
    case "SessionActive":
      return "Game in progress";
    case "SessionPaused":
      return "Game paused";
    case "BetweenRounds":
      return "Round complete";
    default:
      return state || "Unknown";
  }
}

export function buildBoardsPanelModel({ boards } = {}) {
  const list = Array.isArray(boards) ? boards : [];

  return {
    isEmpty: list.length === 0,
    boards: list
      .map((board) => ({
        roomId: String(board?.roomId || "").trim(),
        stateLabel: boardStateLabel(board?.state),
        occupiedCount: Number(board?.occupancy?.occupiedCount ?? 0),
        isOwner: Boolean(board?.isOwner),
      }))
      .filter((board) => Boolean(board.roomId)),
  };
}

export function BoardsPanel({ boards, onRefresh, onOpen, onDelete }) {
  const model = buildBoardsPanelModel({ boards });

  return (
    <section style={panelStyle} aria-label="Boards list">
      <div style={headerStyle}>
        <div>
          <h2 style={headingStyle}>Live boards</h2>
          <p style={subheadStyle}>Boards refresh only when you ask them to.</p>
        </div>
        <button type="button" style={buttonStyle(false)} onClick={() => onRefresh?.()}>
          Refresh
        </button>
      </div>

      {model.isEmpty ? (
        <p style={emptyStyle}>No live boards. Create one from Home!</p>
      ) : (
        <ul style={listStyle}>
          {model.boards.map((board) => (
            <li key={board.roomId} style={itemStyle} data-board-card={board.roomId}>
              <div>
                <p style={codeStyle}>{board.roomId}</p>
                <p style={metaTextStyle}>
                  {board.occupiedCount}/2 seated • {board.stateLabel}
                </p>
              </div>
              <div style={buttonRowStyle}>
                <button
                  type="button"
                  style={buttonStyle(false)}
                  onClick={() => onOpen?.(board.roomId)}
                >
                  Open
                </button>
                {board.isOwner ? (
                  <button
                    type="button"
                    style={buttonStyle(true)}
                    onClick={() => onDelete?.(board.roomId)}
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default BoardsPanel;
