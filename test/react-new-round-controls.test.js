import { describe, expect, it, vi } from "vitest";
import {
  connectLiveBoardSnapshot,
  getNewRoundAction,
  handleNewRoundAction,
} from "../src/react/App.jsx";

describe("React new round controls", () => {
  it("does not expose New Round to an unseated watcher", () => {
    expect(
      getNewRoundAction({
        ownSeat: null,
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "finished" },
        },
      }),
    ).toBeNull();
  });

  it("shows Continue after a finished round and Start New Round for a paused owner", () => {
    expect(
      getNewRoundAction({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "finished" },
        },
      }),
    ).toEqual({ label: "Continue", reason: "between-rounds" });

    expect(
      getNewRoundAction({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            status: "paused",
            pause: { byPlayerId: "p1", resumeTurn: "p1" },
          },
        },
      }),
    ).toEqual({ label: "Start New Round", reason: "paused-owner" });
  });

  it("does not show New Round to a paused non-owner", () => {
    expect(
      getNewRoundAction({
        ownSeat: "p2",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            status: "paused",
            pause: { byPlayerId: "p1", resumeTurn: "p1" },
          },
        },
      }),
    ).toBeNull();
  });

  it("sends reset intent without mutating local board state", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();
    const before = {
      boardCode: "ROOM123",
      version: 7,
      game: {
        status: "finished",
        score: { p1: 1, p2: 0 },
        moves: [{ to: { x: 4, y: 0 } }],
      },
    };

    handleNewRoundAction({
      ownSeat: "p1",
      connection,
      dispatch,
      boardState: before,
    });

    expect(connection.send).toHaveBeenCalledWith({ type: "reset" });
    const stateMutations = dispatch.mock.calls.filter(
      ([action]) => action?.type === "receiveBoardState",
    );
    expect(stateMutations).toHaveLength(0);
    expect(before).toEqual({
      boardCode: "ROOM123",
      version: 7,
      game: {
        status: "finished",
        score: { p1: 1, p2: 0 },
        moves: [{ to: { x: 4, y: 0 } }],
      },
    });
  });

  it("surfaces server reset errors as controlled toast", () => {
    const dispatch = vi.fn();
    const connect = vi.fn(({ onMessage }) => {
      onMessage({
        type: "error",
        error:
          "Only the player who paused or timed out can start a new round while paused.",
      });
      return { close: vi.fn(), send: vi.fn() };
    });

    connectLiveBoardSnapshot({
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      dispatch,
      onOwnSeat: vi.fn(),
      connect,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast:
        "Only the player who paused or timed out can start a new round while paused.",
    });
  });
});
