import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { connectBoardSocket } from "../src/react/lib/socket.js";
import App, {
  createLocalMatchFlow,
  handleLocalBoardMoveClick,
  createReactBoardFlow,
} from "../src/react/App.jsx";
import { buildBoardIslandFlags } from "../src/react/components/ElmBoard.jsx";
import {
  createLocalMatch,
  applyLocalMoveClick,
  getLocalOwnSeat,
  LOCAL_BOARD_CODE,
} from "../src/react/lib/localGame.js";
import {
  createInitialShellState,
  shellReducer,
} from "../src/react/state/shellReducer.js";

vi.mock("../src/react/lib/socket.js", () => ({
  connectBoardSocket: vi.fn(),
  websocketUrl: vi.fn(() => "ws://example.test/ws"),
}));

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

describe("React local same-screen mode", () => {
  it("creates an initial local game snapshot with blue/red names", () => {
    const { snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
    });

    expect(snapshot.game.players.p1.name).toBe("Ada");
    expect(snapshot.game.players.p2.name).toBe("Grace");
    expect(snapshot.game.status).toBe("playing");
    expect(snapshot.game.turn).toBe("p1");
  });

  it("does not require room/socket fields for the local snapshot", () => {
    const { snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
    });

    expect(snapshot.boardCode).toBe(LOCAL_BOARD_CODE);
    expect(snapshot).not.toHaveProperty("clientId");
    expect(snapshot).not.toHaveProperty("connection");
    expect(snapshot.game.roomId).toBe(LOCAL_BOARD_CODE);
  });

  it("updates ball and turn per local helper rules on a legal move click", () => {
    const { game, snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 0,
    });

    const target = snapshot.game.legalMoves[0];
    const {
      ok,
      bounce,
      snapshot: nextSnapshot,
    } = applyLocalMoveClick({
      game,
      payload: { point: target },
    });

    expect(ok).toBe(true);
    expect(bounce).toBe(false);
    expect(nextSnapshot.game.ball).toEqual(target);
    expect(nextSnapshot.game.turn).toBe("p2");
  });

  it("rejects a move click when no local match has started", () => {
    const { error, snapshot } = applyLocalMoveClick({
      game: null,
      payload: { point: { x: 4, y: 5 } },
    });

    expect(error).toBe("Start a local match first.");
    expect(snapshot).toBeNull();
  });

  it("lets ElmBoard render the local snapshot with fixed orientation", () => {
    const { snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
    });

    const flags = buildBoardIslandFlags({
      snapshot,
      ownSeat: getLocalOwnSeat(snapshot),
      replayIndex: null,
      flipVertical: false,
    });

    expect(flags.boardCode).toBe(LOCAL_BOARD_CODE);
    expect(flags.ownSeat).toBe("p1");
    expect(flags.flipVertical).toBe(false);
    expect(flags.game).toBeTruthy();
  });

  it("does not call connectBoardSocket when starting or playing a local match", () => {
    const dispatch = vi.fn();
    const localGameRef = { current: null };

    createLocalMatchFlow({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 0,
      dispatch,
      localGameRef,
    });

    const target = localGameRef.current
      ? applyLocalMoveClick({ game: localGameRef.current, payload: {} })
          .snapshot?.game?.legalMoves?.[0]
      : null;

    handleLocalBoardMoveClick({
      payload: { point: target },
      localGameRef,
      dispatch,
    });

    expect(connectBoardSocket).not.toHaveBeenCalled();
  });
});

describe("React local mode flow helpers", () => {
  it("createLocalMatchFlow stores the engine in the ref and dispatches startLocalMatch", () => {
    const dispatch = vi.fn();
    const localGameRef = { current: null };

    const snapshot = createLocalMatchFlow({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
      dispatch,
      localGameRef,
    });

    expect(localGameRef.current).toBeTruthy();
    expect(dispatch).toHaveBeenCalledWith({
      type: "startLocalMatch",
      snapshot,
    });
  });

  it("handleLocalBoardMoveClick dispatches receiveLocalGameState after a move", () => {
    const dispatch = vi.fn();
    const localGameRef = { current: null };

    createLocalMatchFlow({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 0,
      dispatch,
      localGameRef,
    });

    const firstLegalMove = localGameRef.current
      ? applyLocalMoveClick({ game: localGameRef.current, payload: {} })
          .snapshot?.game?.legalMoves?.[0]
      : null;

    handleLocalBoardMoveClick({
      payload: { point: firstLegalMove },
      localGameRef,
      dispatch,
    });

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: "receiveLocalGameState" }),
    );
  });

  it("surfaces a toast and does not crash when no local match is active", () => {
    const dispatch = vi.fn();
    const localGameRef = { current: null };

    handleLocalBoardMoveClick({
      payload: { point: { x: 4, y: 5 } },
      localGameRef,
      dispatch,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Start a local match first.",
    });
  });
});

describe("React local mode reducer state", () => {
  it("keeps mode and local setup fields in reducer state", () => {
    const initial = createInitialShellState({ mode: "local" });
    expect(initial.mode).toBe("local");
    expect(initial.localSetup).toEqual(
      expect.objectContaining({
        moveTimeLimitSeconds: 15,
        blueName: "",
        redName: "",
      }),
    );
    expect(initial.localSnapshot).toBeNull();
  });

  it("updates local player names and move timer without touching online setup", () => {
    let state = createInitialShellState({ mode: "local" });
    state = shellReducer(state, { type: "setLocalBlueName", name: "Ada" });
    state = shellReducer(state, { type: "setLocalRedName", name: "Grace" });
    state = shellReducer(state, { type: "setLocalMoveTimer", seconds: 10 });

    expect(state.localSetup.blueName).toBe("Ada");
    expect(state.localSetup.redName).toBe("Grace");
    expect(state.localSetup.moveTimeLimitSeconds).toBe(10);
    expect(state.onlineSetup.moveTimeLimitSeconds).toBe(15);
  });

  it("stores local match snapshots via startLocalMatch and receiveLocalGameState", () => {
    const { snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
    });

    let state = createInitialShellState({ mode: "local" });
    state = shellReducer(state, { type: "startLocalMatch", snapshot });
    expect(state.localSnapshot).toEqual(snapshot);

    const nextSnapshot = { ...snapshot, version: snapshot.version + 1 };
    state = shellReducer(state, {
      type: "receiveLocalGameState",
      snapshot: nextSnapshot,
    });
    expect(state.localSnapshot).toEqual(nextSnapshot);
  });
});

describe("React local mode shell rendering", () => {
  it("shows local setup only when mode is local", () => {
    const onlineHtml = renderShell({ mode: "online" });
    const localHtml = renderShell({ mode: "local" });

    expect(onlineHtml).not.toContain("Blue player name");
    expect(onlineHtml).not.toContain("Red player name");
    expect(localHtml).toContain("Blue player name");
    expect(localHtml).toContain("Red player name");
    expect(localHtml).not.toContain("Create Board");
  });

  it("discloses that the local move timer is not enforced yet", () => {
    const localHtml = renderShell({ mode: "local" });

    expect(localHtml).toContain("Timer selection is not enforced yet.");
  });

  it("does not render any online seat/pause/waiting-list actions in the local Match tab", () => {
    const { snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
    });

    const html = renderShell({
      mode: "local",
      mainTab: "match",
      localSnapshot: snapshot,
    });

    expect(html).toContain("Ada");
    expect(html).toContain("Grace");
    expect(html).not.toContain("Claim Blue");
    expect(html).not.toContain("Claim Red");
    expect(html).not.toContain("Leave Seat");
    expect(html).not.toContain("Pause Game");
    expect(html).not.toContain("Resume Game");
    expect(html).not.toContain("Join Waiting List");
    expect(html).not.toContain("Leave Waiting List");
  });

  it("shows a round-over placeholder in Play and Match once a local match finishes", () => {
    const { snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
    });
    const finishedSnapshot = {
      ...snapshot,
      game: { ...snapshot.game, status: "finished", legalMoves: [] },
    };

    const playHtml = renderShell({
      mode: "local",
      mainTab: "play",
      localSnapshot: finishedSnapshot,
    });
    const matchHtml = renderShell({
      mode: "local",
      mainTab: "match",
      localSnapshot: finishedSnapshot,
    });

    expect(playHtml).toContain(
      "Round over. Start a new local match from Home to play again.",
    );
    expect(matchHtml).toContain(
      "Round over. Start a new local match from Home to play again.",
    );
  });

  it("renders the ElmBoard host in Play for an active local match", () => {
    const { snapshot } = createLocalMatch({
      blueName: "Ada",
      redName: "Grace",
      moveTimeLimitSeconds: 15,
    });

    const html = renderShell({
      mode: "local",
      mainTab: "play",
      localSnapshot: snapshot,
    });

    expect(html).toContain('data-testid="elm-board-island-host"');
  });

  it("prompts to start a local match when Play is opened before starting one", () => {
    const html = renderShell({ mode: "local", mainTab: "play" });

    expect(html).toContain("Start a local match from Home to play");
    expect(html).not.toContain('data-testid="elm-board-island-host"');
  });
});

describe("React online mode remains unchanged", () => {
  it("still creates a board with client identity and selected timer, then starts watching it", async () => {
    const dispatch = vi.fn();
    const syncUrl = vi.fn();
    const refreshBoardList = vi.fn();
    const startWatching = vi.fn(() => ({ send: vi.fn() }));
    const create = vi.fn(async ({ clientId, moveTimeLimitSeconds }) => ({
      roomId: "ROOM123",
      clientId,
      moveTimeLimitSeconds,
    }));

    await createReactBoardFlow({
      clientId: "client-1",
      moveTimeLimitSeconds: 30,
      dispatch,
      create,
      syncUrl,
      startWatching,
      refreshBoardList,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setCurrentBoardCode",
      boardCode: "ROOM123",
    });
    expect(syncUrl).toHaveBeenCalledWith("ROOM123");
  });

  it("keeps the online setup card visible and unaffected in online mode", () => {
    const html = renderShell({ mode: "online" });

    expect(html).toContain("Online setup");
    expect(html).toContain("Create Board");
  });
});
