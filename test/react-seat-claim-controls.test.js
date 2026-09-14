import { describe, expect, it, vi } from "vitest";
import {
  connectLiveBoardSnapshot,
  getClaimableSeatActions,
  handleClaimSeat,
} from "../src/react/App.jsx";

describe("React seat claim controls", () => {
  it("exposes Claim Blue and Claim Red for a watched board with vacant seats", () => {
    const actions = getClaimableSeatActions({
      snapshot: {
        boardCode: "ROOM123",
        game: {
          players: {
            p1: { status: "vacant", name: "Blue" },
            p2: { status: "vacant", name: "Red" },
          },
        },
      },
      ownSeat: null,
    });

    expect(actions).toEqual([
      { seatId: "p1", label: "Claim Blue" },
      { seatId: "p2", label: "Claim Red" },
    ]);
  });

  it("hides claim actions when viewer is already seated or seat is not vacant", () => {
    expect(
      getClaimableSeatActions({
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "active" },
              p2: { status: "vacant" },
            },
          },
        },
        ownSeat: "p1",
      }),
    ).toEqual([]);

    expect(
      getClaimableSeatActions({
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "disconnected" },
              p2: { status: "active" },
            },
          },
        },
        ownSeat: null,
      }),
    ).toEqual([]);
  });

  it("sends claimSeat with roomId, clientId, and player name", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();
    const before = {
      boardCode: "ROOM123",
      version: 1,
      game: {
        players: {
          p1: { status: "vacant" },
          p2: { status: "vacant" },
        },
      },
    };

    handleClaimSeat({
      seatId: "p1",
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      playerName: "Stefan",
      connection,
      dispatch,
      boardState: before,
    });

    expect(connection.send).toHaveBeenCalledWith({
      type: "claimSeat",
      seatId: "p1",
      name: "Stefan",
      roomId: "ROOM123",
      clientId: "client-1",
    });
    const receiveBoardStateActions = dispatch.mock.calls.filter(
      ([action]) => action?.type === "receiveBoardState",
    );
    expect(receiveBoardStateActions).toHaveLength(0);
    expect(before.game.players.p1.status).toBe("vacant");
  });

  it("records ownSeat from server joined message while watch mode itself does not auto-claim", () => {
    const dispatch = vi.fn();
    const onOwnSeat = vi.fn();
    const connect = vi.fn(({ onStatus, onMessage }) => {
      onStatus("connected");
      onMessage({
        type: "state",
        boardCode: "ROOM123",
        version: 1,
        game: {
          roomId: "ROOM123",
          players: { p1: { status: "vacant" }, p2: { status: "vacant" } },
        },
      });
      onMessage({ type: "joined", playerId: "p2", rejoined: false });
      return { close: vi.fn(), send: vi.fn() };
    });

    connectLiveBoardSnapshot({
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      dispatch,
      onOwnSeat,
      connect,
    });

    expect(connect).toHaveBeenCalledWith(
      expect.objectContaining({
        roomId: "ROOM123",
        clientId: "client-1",
      }),
    );
    expect(onOwnSeat).toHaveBeenCalledWith("p2");
  });

  it("surfaces controlled error when claim is attempted without a usable socket", () => {
    const dispatch = vi.fn();

    handleClaimSeat({
      seatId: "p1",
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      playerName: "Stefan",
      connection: null,
      dispatch,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Connection unavailable. Reconnect to claim a seat.",
    });
  });
});
