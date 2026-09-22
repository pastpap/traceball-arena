import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "../src/react/App.jsx";
import {
  createInitialShellState,
  shellReducer,
} from "../src/react/state/shellReducer.js";

function renderShell(overrides = {}) {
  return renderToStaticMarkup(
    React.createElement(App, {
      initialState: createInitialShellState({
        clientId: "traceball-elm-abc123",
        playerName: "Ada",
        onlineMoveTimer: 25,
        mode: "online",
        mainTab: "home",
        ...overrides,
      }),
    }),
  );
}

function demoSnapshot() {
  return {
    boardCode: "ROOM123",
    version: 4,
    game: {
      roomId: "ROOM123",
      status: "waiting",
      players: {
        p1: { status: "vacant", name: "" },
        p2: { status: "vacant", name: "" },
      },
      waitingList: [],
      score: { p1: 0, p2: 0 },
      moveCount: 0,
    },
  };
}

describe("React mobile navigation", () => {
  it("renders Home, Play, and Match tabs", () => {
    const html = renderShell();

    expect(html).toContain("Home");
    expect(html).toContain("Play");
    expect(html).toContain("Match");
  });

  it("selecting Play hides Home setup", () => {
    const html = renderShell({
      mainTab: "play",
      boardState: demoSnapshot(),
      currentBoardCode: "ROOM123",
    });

    expect(html).toContain('data-section="home" data-visible="false"');
    expect(html).toContain('data-section="play" data-visible="true"');
  });

  it("selecting Match shows seat and action panel", () => {
    const html = renderShell({
      mainTab: "match",
      boardState: demoSnapshot(),
      currentBoardCode: "ROOM123",
    });

    expect(html).toContain("Match details");
    expect(html).toContain("Claim Blue");
    expect(html).toContain("Claim Red");
  });

  it("Play section contains board island host when board snapshot exists", () => {
    const html = renderShell({
      mainTab: "play",
      boardState: demoSnapshot(),
      currentBoardCode: "ROOM123",
    });

    expect(html).toContain('data-testid="elm-board-island-host"');
  });

  it("does not mix online and local setup controls in one visible card", () => {
    const onlineHtml = renderShell({ mode: "online", mainTab: "home" });
    const localHtml = renderShell({ mode: "local", mainTab: "home" });

    expect(onlineHtml).toContain("Online setup");
    expect(onlineHtml).not.toContain("Local setup");
    expect(localHtml).toContain("Local setup");
    expect(localHtml).not.toContain("Online setup");
  });

  it("socket state updates do not force active tab back to Play", () => {
    const initial = createInitialShellState({
      mainTab: "match",
      currentBoardCode: "ROOM123",
    });

    const next = shellReducer(initial, {
      type: "receiveBoardState",
      boardState: demoSnapshot(),
    });

    expect(next.mainTab).toBe("match");
  });
});
