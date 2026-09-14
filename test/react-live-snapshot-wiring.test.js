import { describe, expect, it, vi } from "vitest";
import {
  buildElmSnapshotFromServerMessage,
  connectLiveBoardSnapshot,
  handlePendingBoardMoveClick,
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
});
