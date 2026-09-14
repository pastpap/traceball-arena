import { describe, expect, it, vi } from "vitest";
import { createReactBoardFlow, syncReactBoardUrl } from "../src/react/App.jsx";

describe("React create-board flow", () => {
  it("updates the React URL with the created board code", () => {
    const replaceState = vi.fn();
    const locationLike = {
      pathname: "/react",
      search: "",
      hash: "",
      origin: "http://example.test",
      href: "http://example.test/react",
    };

    const nextUrl = syncReactBoardUrl("ROOM123", {
      historyLike: { replaceState, state: null },
      locationLike,
    });

    expect(nextUrl).toBe("/react?board=ROOM123");
    expect(replaceState).toHaveBeenCalledWith(null, "", "/react?board=ROOM123");
  });

  it("creates a board with client identity and selected timer, then starts watching it", async () => {
    const dispatch = vi.fn();
    const syncUrl = vi.fn();
    const refreshBoardList = vi.fn();
    const send = vi.fn();
    const startWatching = vi.fn(() => ({ send }));
    const create = vi.fn(async ({ clientId, moveTimeLimitSeconds }) => ({
      roomId: "ROOM123",
      clientId,
      moveTimeLimitSeconds,
    }));

    const result = await createReactBoardFlow({
      clientId: "client-1",
      moveTimeLimitSeconds: 30,
      dispatch,
      create,
      syncUrl,
      startWatching,
      refreshBoardList,
    });

    expect(create).toHaveBeenCalledWith({
      clientId: "client-1",
      moveTimeLimitSeconds: 30,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: "setCurrentBoardCode",
      boardCode: "ROOM123",
    });
    expect(syncUrl).toHaveBeenCalledWith("ROOM123");
    expect(startWatching).toHaveBeenCalledWith(
      expect.objectContaining({
        roomId: "ROOM123",
        clientId: "client-1",
      }),
    );
    expect(refreshBoardList).toHaveBeenCalledTimes(1);
    expect(send).not.toHaveBeenCalled();
    expect(result).toEqual(
      expect.objectContaining({
        roomId: "ROOM123",
      }),
    );
  });

  it("surfaces controlled errors when board creation fails", async () => {
    const dispatch = vi.fn();
    const create = vi.fn(async () => {
      throw new Error("Board creation failed: 500");
    });

    const result = await createReactBoardFlow({
      clientId: "client-1",
      moveTimeLimitSeconds: 15,
      dispatch,
      create,
    });

    expect(result).toBeNull();
    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Board creation failed: 500",
    });
  });
});
