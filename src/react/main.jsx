import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  getOrCreateClientId,
  getStoredOnlineMoveTimer,
  getStoredPlayerName,
} from "./lib/storage.js";
import { createInitialShellState } from "./state/shellReducer.js";

const rootElement = document.getElementById("react-root");

if (rootElement) {
  const initialState = createInitialShellState({
    clientId: getOrCreateClientId(),
    playerName: getStoredPlayerName(),
    onlineMoveTimer: getStoredOnlineMoveTimer(),
  });

  createRoot(rootElement).render(
    <React.StrictMode>
      <App initialState={initialState} />
    </React.StrictMode>,
  );
}