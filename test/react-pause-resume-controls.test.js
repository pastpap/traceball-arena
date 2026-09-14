import { describe, expect, it, vi } from "vitest";
import {
  connectLiveBoardSnapshot,
  getPauseResumeActions,
  handlePauseAction,
  handleResumeAction,
} from "../src/react/App.jsx";

describe("React pause resume controls", () => {
  it("does not expose Pause or Resume to an unseated watcher", () => {
    expect(
      getPauseResumeActions({
        ownSeat: null,
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "playing", turn: "p1" },
        },
      }),
    ).toEqual([]);
  });

  it("shows Pause to the seated active-turn player only", () => {
    expect(
      getPauseResumeActions({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "playing", turn: "p1" },
        },
      }),
    ).toEqual([{ type: "pause", label: "Pause Game" }]);

    expect(
      getPauseResumeActions({
        ownSeat: "p2",
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "playing", turn: "p1" },
        },
      }),
    ).toEqual([]);
  });

  it("sends pause intent without mutating board state locally", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();

    handlePauseAction({ ownSeat: "p1", connection, dispatch });

    expect(connection.send).toHaveBeenCalledWith({ type: "pause" });
    const stateMutations = dispatch.mock.calls.filter(
      ([action]) => action?.type === "receiveBoardState",
    );
    expect(stateMutations).toHaveLength(0);
  });

  it("shows Resume only to the paused resume owner", () => {
    expect(
      getPauseResumeActions({
        ownSeat: "p2",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            status: "paused",
            turn: "p2",
            pause: { byPlayerId: "p1", resumeTurn: "p2" },
          },
        },
      }),
    ).toEqual([{ type: "resume", label: "Resume Game" }]);

    expect(
      getPauseResumeActions({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            status: "paused",
            turn: "p2",
            pause: { byPlayerId: "p1", resumeTurn: "p2" },
          },
        },
      }),
    ).toEqual([]);
  });

  it("sends resume intent without mutating board state locally", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();

    handleResumeAction({ ownSeat: "p2", connection, dispatch });

    expect(connection.send).toHaveBeenCalledWith({ type: "resume" });
    const stateMutations = dispatch.mock.calls.filter(
      ([action]) => action?.type === "receiveBoardState",
    );
    expect(stateMutations).toHaveLength(0);
  });

  it("surfaces server pause/resume errors as toast", () => {
    const dispatch = vi.fn();
    const connect = vi.fn(({ onMessage }) => {
      onMessage({ type: "error", error: "Only joined players can pause." });
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
      toast: "Only joined players can pause.",
    });
  });
});
