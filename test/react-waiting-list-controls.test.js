import { describe, expect, it, vi } from "vitest";
import {
  connectLiveBoardSnapshot,
  getWaitingListAction,
  handleJoinWaitingList,
  handleLeaveWaitingList,
} from "../src/react/App.jsx";
import {
  createInitialShellState,
  shellReducer,
} from "../src/react/state/shellReducer.js";

describe("React waiting list controls", () => {
  it("shows Join Waiting List for an unseated watcher when both seats are occupied", () => {
    expect(
      getWaitingListAction({
        ownSeat: null,
        isWaitingListMember: false,
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
    ).toEqual({ type: "join", label: "Join Waiting List" });
  });

  it("watching a full board does not auto-join the waiting list", () => {
    const dispatch = vi.fn();
    const connect = vi.fn(({ onMessage }) => {
      onMessage({
        type: "state",
        boardCode: "ROOM123",
        version: 1,
        game: {
          players: {
            p1: { status: "active" },
            p2: { status: "active" },
          },
          waitingList: [],
        },
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

    expect(
      dispatch.mock.calls.some(
        ([action]) => action?.type === "setWaitingListMembership",
      ),
    ).toBe(false);
  });

  it("sends joinWaitingList with roomId, clientId, and player name", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();

    handleJoinWaitingList({
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      playerName: "Stefan",
      connection,
      dispatch,
    });

    expect(connection.send).toHaveBeenCalledWith({
      type: "joinWaitingList",
      name: "Stefan",
      roomId: "ROOM123",
      clientId: "client-1",
    });
    expect(
      dispatch.mock.calls.some(
        ([action]) => action?.type === "setWaitingListMembership",
      ),
    ).toBe(false);
  });

  it("shows Leave Waiting List when the server already marked the viewer as waiting", () => {
    expect(
      getWaitingListAction({
        ownSeat: null,
        isWaitingListMember: true,
        snapshot: {
          boardCode: "ROOM123",
          game: {
            players: {
              p1: { status: "active" },
              p2: { status: "active" },
            },
            waitingList: [{ displayName: "Stefan", joinedAt: 1000 }],
          },
        },
      }),
    ).toEqual({ type: "leave", label: "Leave Waiting List" });
  });

  it("sends leaveWaitingList with roomId and clientId", () => {
    const connection = { send: vi.fn(), socket: { readyState: 1 } };
    const dispatch = vi.fn();

    handleLeaveWaitingList({
      currentBoardCode: "ROOM123",
      clientId: "client-1",
      connection,
      dispatch,
    });

    expect(connection.send).toHaveBeenCalledWith({
      type: "leaveWaitingList",
      roomId: "ROOM123",
      clientId: "client-1",
    });
    expect(
      dispatch.mock.calls.some(
        ([action]) => action?.type === "setWaitingListMembership",
      ),
    ).toBe(false);
  });

  it("uses server waiting-list acknowledgements to drive membership UI state", () => {
    const dispatch = vi.fn();
    const connect = vi.fn(({ onMessage }) => {
      onMessage({ type: "waitingListJoined", roomId: "ROOM123" });
      onMessage({ type: "waitingListLeft", roomId: "ROOM123" });
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
      type: "setWaitingListMembership",
      isMember: true,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: "setWaitingListMembership",
      isMember: false,
    });

    const initial = createInitialShellState({ currentBoardCode: "ROOM123" });
    const joined = shellReducer(initial, {
      type: "setWaitingListMembership",
      isMember: true,
    });
    const left = shellReducer(joined, {
      type: "setWaitingListMembership",
      isMember: false,
    });

    expect(joined.isWaitingListMember).toBe(true);
    expect(left.isWaitingListMember).toBe(false);
  });
});