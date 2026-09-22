import React from "react";

export function RulesPanel({ open, onClose }) {
  if (!open) return null;

  return (
    <section
      className="react-shell-modal"
      aria-label="Traceball rules"
      role="dialog"
      aria-modal="true"
    >
      <header className="react-shell-modal-header">
        <h2>Rules</h2>
        <button type="button" className="react-shell-modal-close" onClick={onClose}>
          Close
        </button>
      </header>

      <ul className="react-shell-modal-list">
        <li>Ball movement is one-step movement between neighboring dots.</li>
        <li>You cannot reuse a segment that has already been drawn.</li>
        <li>
          Landing on a visited dot, boundary rebound point, or gate-mouth center
          dot causes a bounce and grants an extra move.
        </li>
        <li>You score by entering the opponent gate.</li>
        <li>Own goal counts for the opponent.</li>
        <li>No legal moves on your turn means you lose the round.</li>
        <li>
          In online matches, server-authoritative timers and turn control decide
          pause, timeout, and legality.
        </li>
      </ul>
    </section>
  );
}
