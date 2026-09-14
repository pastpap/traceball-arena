import { describe, expect, it, vi } from "vitest";
import {
  connectLiveBoardSnapshot,
  getLeaveSeatAction,
  handleLeaveSeat,
} from "../src/react/App.jsx";

describe("React leave seat flow", () => {
  it("does not expose Leave Seat for an unseated watcher", () => {
    expect(
      getLeaveSeatAction({
        ownSeat: null,
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "waiting" },
        },
      }),
    ).toBeNull();
  });

  it("shows Leave Seat before active session and Forfeit copy during active play", () => {
    expect(
      getLeaveSeatAction({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "waiting" },
        },
      }),
    ).toEqual({ label: "Leave Seat", danger: false });

    expect(
      getLeaveSeatAction({
        ownSeat: "p2",
        snapshot: {
          boardCode: "ROOM123",
          game: { status: "playing" },
        },
      }),
    ).toEqual({ label: "Leave Seat (Forfeit)", danger: true });
  });

  it("sends leave intent without clearing ownSeat locally", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();
    const setOwnSeat = vi.fn();

    handleLeaveSeat({
      ownSeat: "p1",
      connection,
      dispatch,
      setOwnSeat,
    });

    expect(connection.send).toHaveBeenCalledWith({ type: "leave" });
    expect(setOwnSeat).not.toHaveBeenCalled();
    const clearSeatCalls = dispatch.mock.calls.filter(
      ([action]) =>
        action?.type === "setOwnSeat" || action?.type === "receiveBoardState",
    );
    expect(clearSeatCalls).toHaveLength(0);
  });

  it("clears ownSeat and shows toast only after server left confirmation", () => {
    const dispatch = vi.fn();
    const onOwnSeat = vi.fn();
    const connect = vi.fn(({ onStatus, onMessage }) => {
      onStatus("connected");
      onMessage({ type: "joined", playerId: "p1" });
      onMessage({ type: "left", roomId: "ROOM123", playerId: "p1" });
      return { close: vi.fn(), send: vi.fn() };
    });

    connectLiveBoardSnapshot({
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      dispatch,
      onOwnSeat,
      connect,
    });

    expect(onOwnSeat).toHaveBeenNthCalledWith(1, "p1");
    expect(onOwnSeat).toHaveBeenNthCalledWith(2, null);
    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "You left the board.",
    });
  });

  it("surfaces server leave errors as controlled toast", () => {
    const dispatch = vi.fn();
    const connect = vi.fn(({ onMessage }) => {
      onMessage({ type: "error", error: "You are not occupying a seat." });
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
      toast: "You are not occupying a seat.",
    });
  });
});
