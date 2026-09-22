import React from "react";

function normalizeCount(value) {
  const next = Number(value);
  return Number.isFinite(next) && next >= 0 ? next : 0;
}

export function HistoryPanel({ open, localHistoryCount = 0, onClose }) {
  if (!open) return null;

  const count = normalizeCount(localHistoryCount);

  return (
    <section
      className="react-shell-modal"
      aria-label="Match history"
      role="dialog"
      aria-modal="true"
    >
      <header className="react-shell-modal-header">
        <h2>History</h2>
        <button type="button" className="react-shell-modal-close" onClick={onClose}>
          Close
        </button>
      </header>

      <p>History replay will move here next.</p>
      <p>Local snapshots available: {count}</p>
      <p className="react-shell-modal-note">
        This slice is UI scaffolding only and does not claim full replay
        controls yet.
      </p>
    </section>
  );
}
