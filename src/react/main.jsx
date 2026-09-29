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

// React shell is now the default route, so it must register the PWA service worker itself.
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      registration.update?.().catch?.(() => {});
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    })
    .catch(() => {});
}
