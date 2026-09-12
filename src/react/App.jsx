import React, { useReducer } from "react";
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

const noteStyle = {
  marginTop: "24px",
  padding: "16px 18px",
  borderRadius: "18px",
  background: "#102a1a",
  color: "#f6fbf4",
  lineHeight: 1.55,
};

export default function App({ initialState }) {
  const [state] = useReducer(shellReducer, initialState);

  return (
    <main style={pageStyle}>
      <section style={panelStyle}>
        <p style={eyebrowStyle}>React product shell</p>
        <h1 style={titleStyle}>Traceball Arena</h1>
        <p style={leadStyle}>
          This additive route proves the hybrid React runtime and bundle. Elm
          board rendering is not mounted yet, and no gameplay authority or fake
          move logic lives here.
        </p>

        <div style={cardGridStyle}>
          <article style={cardStyle}>
            <p style={labelStyle}>Stored Player</p>
            <p style={valueStyle}>{state.playerName || "Unavailable"}</p>
          </article>
          <article style={cardStyle}>
            <p style={labelStyle}>Client Identity</p>
            <p style={valueStyle}>{state.clientId || "Unavailable"}</p>
          </article>
          <article style={cardStyle}>
            <p style={labelStyle}>Online Move Timer</p>
            <p style={valueStyle}>{state.onlineSetup.moveTimeLimitSeconds}s</p>
          </article>
        </div>

        <div style={noteStyle}>
          Elm remains the board and replay correctness surface. The server
          remains authoritative for seats, timers, pause/resume, winners, and
          online move validation.
        </div>
      </section>
    </main>
  );
}
