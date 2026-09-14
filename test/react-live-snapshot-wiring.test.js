import { describe, expect, it, vi } from "vitest";
import {
  buildElmSnapshotFromServerMessage,
  connectLiveBoardSnapshot,
  handlePendingBoardMoveClick,
  handleElmBoardMoveClick,
} from "../src/react/App.jsx";
import { buildBoardIslandFlags } from "../src/react/components/ElmBoard.jsx";
import {
  createInitialShellState,
  shellReducer,
} from "../src/react/state/shellReducer.js";

describe("React live snapshot wiring", () => {
  it("connects watch socket for current board and dispatches live state snapshots", () => {
    const dispatch = vi.fn();
    const close = vi.fn();
    const connect = vi.fn(({ onStatus, onMessage }) => {
      onStatus("connected");
      onMessage({
        type: "state",
        boardCode: "ROOM123",
        version: 3,
        game: { roomId: "ROOM123", status: "playing" },
      });
      onMessage({ type: "joined", playerId: "p1" });
      return { close, send: vi.fn() };
    });

    const runtime = connectLiveBoardSnapshot({
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      dispatch,
      connect,
    });

    expect(connect).toHaveBeenCalledWith(
      expect.objectContaining({
        roomId: "ROOM123",
        clientId: "client-1",
      }),
    );

    expect(dispatch).toHaveBeenCalledWith({
      type: "setConnectionStatus",
      status: "connected",
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "receiveBoardState",
      boardState: {
        boardCode: "ROOM123",
        version: 3,
        game: { roomId: "ROOM123", status: "playing" },
      },
    });

    runtime?.close?.();
    expect(close).toHaveBeenCalledTimes(1);
  });

  it("surfaces server error messages as shell toast", () => {
    const dispatch = vi.fn();
    const connect = vi.fn(({ onMessage }) => {
      onMessage({ type: "error", error: "Move not legal." });
      return { close: vi.fn(), send: vi.fn() };
    });

    connectLiveBoardSnapshot({
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      dispatch,
      connect,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Move not legal.",
    });
  });

  it("stores incoming state in reducer and produces ElmBoard-ready flags", () => {
    const initial = createInitialShellState({ currentBoardCode: "ROOM123" });
    const next = shellReducer(initial, {
      type: "receiveBoardState",
      boardState: {
        boardCode: "ROOM123",
        version: 4,
        game: { roomId: "ROOM123", status: "playing" },
      },
    });

    const flags = buildBoardIslandFlags({
      snapshot: next.boardState,
      ownSeat: null,
      replayIndex: null,
      flipVertical: false,
    });

    expect(next.boardState).toEqual({
      boardCode: "ROOM123",
      version: 4,
      game: { roomId: "ROOM123", status: "playing" },
    });
    expect(flags).toEqual(
      expect.objectContaining({
        boardCode: "ROOM123",
        version: 4,
        game: { roomId: "ROOM123", status: "playing" },
        ownSeat: null,
        replayIndex: null,
        flipVertical: false,
      }),
    );
  });

  it("ignores non-state messages for snapshots", () => {
    expect(
      buildElmSnapshotFromServerMessage({ type: "joined", playerId: "p1" }),
    ).toBeNull();
  });

  it("handles board move clicks without sending socket move commands", () => {
    const dispatch = vi.fn();
    const fakeConnection = { send: vi.fn() };

    handlePendingBoardMoveClick({
      payload: { type: "boardMoveClick", point: { x: 4, y: 6 } },
      dispatch,
      connection: fakeConnection,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Move click received; server command not wired yet.",
    });
    expect(fakeConnection.send).not.toHaveBeenCalled();
  });

  it("does not send move command when seat is unknown", () => {
    const dispatch = vi.fn();
    const connection = { send: vi.fn(), socket: { readyState: 1 } };

    handleElmBoardMoveClick({
      payload: { type: "boardMoveClick", point: { x: 4, y: 6 } },
      ownSeat: null,
      connection,
      dispatch,
    });

    expect(connection.send).not.toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Join a seat to move.",
    });
  });

  it("sends move intent when seated and socket is open", () => {
    const dispatch = vi.fn();
    const connection = { send: vi.fn(), socket: { readyState: 1 } };

    handleElmBoardMoveClick({
      payload: { type: "boardMoveClick", point: { x: 2, y: 3 } },
      ownSeat: "p1",
      connection,
      dispatch,
    });

    expect(connection.send).toHaveBeenCalledWith({
      type: "move",
      to: { x: 2, y: 3 },
    });
  });

  it("does not mutate board state locally after move click", () => {
    const dispatch = vi.fn();
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const before = {
      boardCode: "ROOM123",
      version: 5,
      game: { roomId: "ROOM123", status: "playing" },
    };

    handleElmBoardMoveClick({
      payload: { type: "boardMoveClick", point: { x: 7, y: 5 } },
      ownSeat: "p2",
      connection,
      dispatch,
      boardState: before,
    });

    expect(connection.send).toHaveBeenCalledTimes(1);
    const receiveBoardStateActions = dispatch.mock.calls.filter(
      ([action]) => action?.type === "receiveBoardState",
    );
    expect(receiveBoardStateActions).toHaveLength(0);
    expect(before).toEqual({
      boardCode: "ROOM123",
      version: 5,
      game: { roomId: "ROOM123", status: "playing" },
    });
  });
});
