import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "../src/react/App.jsx";
import {
  CLIENT_ID_KEY,
  PLAYER_NAME_KEY,
  ONLINE_TIMER_KEY,
  getOrCreateClientId,
  getStoredOnlineMoveTimer,
  getStoredPlayerName,
  persistPlayerName,
} from "../src/react/lib/storage.js";
import {
  createInitialShellState,
  shellReducer,
} from "../src/react/state/shellReducer.js";

describe("React shell hydration", () => {
  it("hydrates identity and timer state from existing storage keys without mixing local and online timers", () => {
    const storage = {
      values: new Map([
        [CLIENT_ID_KEY, "traceball-elm-abc123"],
        [PLAYER_NAME_KEY, "Ada"],
        [ONLINE_TIMER_KEY, "25"],
      ]),
      getItem(key) {
        return this.values.get(key) ?? null;
      },
      setItem(key, value) {
        this.values.set(key, String(value));
      },
    };

    const clientId = getOrCreateClientId({ storage });
    const playerName = getStoredPlayerName({ storage, randomName: () => "Guest" });
    const onlineMoveTimer = getStoredOnlineMoveTimer({ storage, fallback: 15 });
    const shell = createInitialShellState({
      clientId,
      playerName,
      onlineMoveTimer,
      localMoveTimer: 10,
      mode: "online",
      mainTab: "home",
    });

    expect(clientId).toBe("traceball-elm-abc123");
    expect(playerName).toBe("Ada");
    expect(onlineMoveTimer).toBe(25);
    expect(shell.onlineSetup.moveTimeLimitSeconds).toBe(25);
    expect(shell.localSetup.moveTimeLimitSeconds).toBe(10);
    expect(shell.mode).toBe("online");
    expect(shell.mainTab).toBe("home");
  });

  it("renders a minimal shell summary and the board placeholder from reducer-backed state", () => {
    const html = renderToStaticMarkup(
      React.createElement(App, {
        initialState: createInitialShellState({
          clientId: "traceball-elm-abc123",
          playerName: "Ada",
          onlineMoveTimer: 25,
          mode: "online",
          mainTab: "home",
        }),
      }),
    );

    expect(html).toContain("Traceball Arena");
    expect(html).toContain("Ada");
    expect(html).toContain("...abc123");
    expect(html).toContain("online");
    expect(html).toContain("home");
    expect(html).toContain("25s");
    expect(html).toContain("Board island not mounted yet");
  });

  it("updates shell state and persists the player name from the React shell", () => {
    const storage = {
      values: new Map(),
      getItem(key) {
        return this.values.get(key) ?? null;
      },
      setItem(key, value) {
        this.values.set(key, String(value));
      },
    };

    const nextState = shellReducer(
      createInitialShellState({
        clientId: "traceball-elm-abc123",
        playerName: "Ada",
        onlineMoveTimer: 25,
      }),
      { type: "setPlayerName", playerName: "Grace" },
    );

    const persisted = persistPlayerName("Grace", { storage });

    expect(nextState.playerName).toBe("Grace");
    expect(persisted).toBe("Grace");
    expect(storage.values.get(PLAYER_NAME_KEY)).toBe("Grace");
  });
});
