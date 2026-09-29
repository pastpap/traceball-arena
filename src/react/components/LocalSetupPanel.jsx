import React from "react";

const cardStyle = {
  marginTop: "14px",
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

const fieldGridStyle = {
  display: "grid",
  gap: "12px",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  marginTop: "10px",
};

const fieldStyle = {
  width: "100%",
  marginTop: "6px",
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid rgba(16, 42, 26, 0.14)",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const timerRowStyle = {
  display: "flex",
  gap: "8px",
  marginTop: "8px",
  flexWrap: "wrap",
};

const timerButtonStyle = (active) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "6px 12px",
  background: active ? "#102a1a" : "#ffffff",
  color: active ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
});

const startButtonStyle = {
  marginTop: "16px",
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "10px 16px",
  background: "#0a8f28",
  color: "#f6fbf4",
  fontWeight: 700,
  cursor: "pointer",
};

const noteStyle = {
  marginTop: "10px",
  fontSize: "0.9rem",
  color: "#567062",
  lineHeight: 1.5,
};

const TIMER_OPTIONS_SECONDS = [0, 5, 10, 15, 20, 30];

export function LocalSetupPanel({
  blueName,
  redName,
  moveTimeLimitSeconds,
  onChangeBlueName,
  onChangeRedName,
  onChangeMoveTimer,
  onStartMatch,
  hasActiveMatch,
}) {
  return (
    <article style={cardStyle} data-setup-card="local">
      <p style={labelStyle}>Local setup</p>

      <div style={fieldGridStyle}>
        <label>
          <span style={labelStyle}>Blue player name</span>
          <input
            aria-label="Blue player name"
            value={blueName || ""}
            onChange={(event) => onChangeBlueName?.(event)}
            style={fieldStyle}
            placeholder="Blue"
          />
        </label>
        <label>
          <span style={labelStyle}>Red player name</span>
          <input
            aria-label="Red player name"
            value={redName || ""}
            onChange={(event) => onChangeRedName?.(event)}
            style={fieldStyle}
            placeholder="Red"
          />
        </label>
      </div>

      <p style={{ ...labelStyle, marginTop: "14px" }}>Local move timer</p>
      <div style={timerRowStyle}>
        {TIMER_OPTIONS_SECONDS.map((seconds) => (
          <button
            key={seconds}
            type="button"
            aria-label={
              seconds === 0
                ? "No local move timer"
                : `${seconds}s local move timer`
            }
            style={timerButtonStyle(Number(moveTimeLimitSeconds) === seconds)}
            onClick={() => onChangeMoveTimer?.(seconds)}
          >
            {seconds === 0 ? "No timer" : `${seconds}s`}
          </button>
        ))}
      </div>
      <p style={noteStyle}>Timer selection is not enforced yet.</p>

      <button
        type="button"
        style={startButtonStyle}
        onClick={() => onStartMatch?.()}
      >
        {hasActiveMatch ? "Restart Local Match" : "Start Local Match"}
      </button>

      <p style={noteStyle}>
        Local same-screen play stays on this device. No room code, invite link,
        or server connection is used.
      </p>
    </article>
  );
}

export default LocalSetupPanel;
