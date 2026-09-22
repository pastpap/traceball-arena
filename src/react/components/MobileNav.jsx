import React from "react";

const navWrapStyle = {
  marginTop: "18px",
};

const navListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "8px",
};

const navButtonStyle = (active) => ({
  border: "1px solid rgba(16, 42, 26, 0.12)",
  borderRadius: "999px",
  padding: "8px 10px",
  background: active ? "#102a1a" : "#f7fbf7",
  color: active ? "#f6fbf4" : "#102a1a",
  fontWeight: 700,
  cursor: "pointer",
  width: "100%",
});

export function MobileNav({ tabs = [], activeTab = "home", onChangeTab }) {
  const safeTabs = Array.isArray(tabs) ? tabs : [];
  if (safeTabs.length === 0) return null;

  return (
    <nav style={navWrapStyle} aria-label="Shell navigation">
      <div style={navListStyle}>
        {safeTabs.map((tab) => {
          const id = String(tab.id || "").trim();
          const label = String(tab.label || id || "Tab");
          const isActive = id === activeTab;
          return (
            <button
              key={id}
              type="button"
              style={navButtonStyle(isActive)}
              aria-label={`Go to ${label} section`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => onChangeTab?.(id)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;
