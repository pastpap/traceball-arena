import React from "react";

const menuWrapStyle = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "flex-end",
};

const menuButtonStyle = {
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "9px 14px",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
};

const menuStyle = {
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  minWidth: "160px",
  borderRadius: "14px",
  padding: "8px",
  border: "1px solid rgba(16, 42, 26, 0.12)",
  background: "#ffffff",
  boxShadow: "0 16px 38px rgba(16, 42, 26, 0.14)",
  display: "grid",
  gap: "6px",
  zIndex: 10,
};

const menuItemStyle = {
  border: "1px solid rgba(16, 42, 26, 0.1)",
  borderRadius: "10px",
  padding: "8px 10px",
  textAlign: "left",
  background: "#f7fbf7",
  color: "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
};

export function AppMenu({
  menuOpen,
  onToggle,
  onSelectRules,
  onSelectHistory,
}) {
  return (
    <div style={menuWrapStyle}>
      <button
        type="button"
        style={menuButtonStyle}
        aria-expanded={Boolean(menuOpen)}
        aria-haspopup="menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => onToggle?.(!menuOpen)}
      >
        Menu
      </button>

      {menuOpen ? (
        <div style={menuStyle} role="menu" aria-label="App menu">
          <button
            type="button"
            role="menuitem"
            style={menuItemStyle}
            onClick={() => onSelectRules?.()}
          >
            Rules
          </button>
          <button
            type="button"
            role="menuitem"
            style={menuItemStyle}
            onClick={() => onSelectHistory?.()}
          >
            History
          </button>
        </div>
      ) : null}
    </div>
  );
}
