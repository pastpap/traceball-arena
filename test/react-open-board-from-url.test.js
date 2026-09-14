import { describe, expect, it, vi } from "vitest";
import {
  getInitialReactBoardCode,
  initializeBoardFromUrl,
} from "../src/react/App.jsx";

describe("React open board from URL", () => {
  it("reads board query params with board priority", () => {
    const locationLike = {
      href: "http://example.test/react?board=ROOM123&room=ROOM999&code=ROOM888",
    };

    expect(getInitialReactBoardCode({ locationLike })).toBe("ROOM123");
  });

  it("falls back to room and code query params", () => {
    expect(
      getInitialReactBoardCode({
        locationLike: { href: "http://example.test/react?room=ROOM999" },
      }),
    ).toBe("ROOM999");

    expect(
      getInitialReactBoardCode({
        locationLike: { href: "http://example.test/react?code=ROOM888" },
      }),
    ).toBe("ROOM888");
  });

  it("initializes currentBoardCode from URL and starts watcher mode without auto-join", () => {
    const dispatch = vi.fn();
    const startWatching = vi.fn(() => ({ send: vi.fn(), close: vi.fn() }));

    const runtime = initializeBoardFromUrl({
      clientId: "client-1",
      dispatch,
      startWatching,
      locationLike: { href: "http://example.test/react?board=ROOM123" },
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setCurrentBoardCode",
      boardCode: "ROOM123",
    });
    expect(startWatching).toHaveBeenCalledWith(
      expect.objectContaining({
        roomId: "ROOM123",
        clientId: "client-1",
      }),
    );
    const send = runtime?.send;
    expect(send).toBeTypeOf("function");
    expect(send).not.toHaveBeenCalled();
  });

  it("surfaces board-not-found and server errors while keeping shell usable", () => {
    const dispatch = vi.fn();
    const startWatching = vi.fn(({ onMessage }) => {
      onMessage?.({
        type: "BoardNotFound",
        boardCode: "ROOM123",
        message: "Board not found or expired.",
      });
      onMessage?.({ type: "error", error: "Invalid room code." });
      return { send: vi.fn(), close: vi.fn() };
    });

    initializeBoardFromUrl({
      clientId: "client-1",
      dispatch,
      startWatching,
      locationLike: { href: "http://example.test/react?board=ROOM123" },
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setCurrentBoardCode",
      boardCode: "ROOM123",
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Board not found or expired.",
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Invalid room code.",
    });
  });
});
