import { describe, expect, it, vi } from "vitest";
import { getFreeSeatAction, handleFreeSeatAction } from "../src/react/App.jsx";

describe("React free disconnected seat controls", () => {
  it("does not expose the control to an unseated watcher", () => {
    expect(
      getFreeSeatAction({
        ownSeat: null,
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "disconnected", canBeFreed: true },
              p2: { status: "vacant" },
            },
          },
        },
      }),
    ).toBeNull();
  });

  it("does not expose the control while the opponent is still active", () => {
    expect(
      getFreeSeatAction({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "active" },
              p2: { status: "active" },
            },
          },
        },
      }),
    ).toBeNull();
  });

  it("does not expose the control while the opponent is disconnected but still within grace", () => {
    expect(
      getFreeSeatAction({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "active" },
              p2: { status: "disconnected", canBeFreed: false },
            },
          },
        },
      }),
    ).toBeNull();
  });

  it("shows the control to the seated opponent once the disconnect grace has expired", () => {
    expect(
      getFreeSeatAction({
        ownSeat: "p1",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "active" },
              p2: { status: "disconnected", canBeFreed: true },
            },
          },
        },
      }),
    ).toEqual({ seatId: "p2", label: "Make Seat Available" });

    expect(
      getFreeSeatAction({
        ownSeat: "p2",
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "disconnected", canBeFreed: true },
              p2: { status: "active" },
            },
          },
        },
      }),
    ).toEqual({ seatId: "p1", label: "Make Seat Available" });
  });

  it("sends freeSeat intent for the disconnected seat without mutating board state locally", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();

    handleFreeSeatAction({ ownSeat: "p1", seatId: "p2", connection, dispatch });

    expect(connection.send).toHaveBeenCalledWith({
      type: "freeSeat",
      seatId: "p2",
    });
    const stateMutations = dispatch.mock.calls.filter(
      ([action]) => action?.type === "receiveBoardState",
    );
    expect(stateMutations).toHaveLength(0);
  });

  it("toasts instead of sending when the caller is not occupying a seat", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();

    handleFreeSeatAction({ ownSeat: null, seatId: "p2", connection, dispatch });

    expect(connection.send).not.toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "You are not occupying a seat.",
    });
  });

  it("toasts instead of sending when the connection is unavailable", () => {
    const dispatch = vi.fn();

    handleFreeSeatAction({
      ownSeat: "p1",
      seatId: "p2",
      connection: null,
      dispatch,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to free the seat.",
    });
  });
});
