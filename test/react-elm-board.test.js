import { describe, expect, it, vi } from "vitest";
import {
  buildBoardIslandFlags,
  mountElmBoardIsland,
} from "../src/react/components/ElmBoard.jsx";

describe("React ElmBoard seam", () => {
  it("builds flags from snapshot metadata and seam props", () => {
    const snapshot = {
      boardCode: "ROOM123",
      version: 7,
      game: { roomId: "ROOM123", status: "playing" },
    };

    const flags = buildBoardIslandFlags({
      snapshot,
      ownSeat: "blue",
      replayIndex: 2,
      flipVertical: true,
    });

    expect(flags.boardCode).toBe("ROOM123");
    expect(flags.version).toBe(7);
    expect(flags.game).toEqual({ roomId: "ROOM123", status: "playing" });
    expect(flags.ownSeat).toBe("blue");
    expect(flags.replayIndex).toBe(2);
    expect(flags.flipVertical).toBe(true);
  });

  it("mounts BoardIsland, forwards snapshot updates, and wires move-click events", () => {
    const subscribe = vi.fn();
    const unsubscribe = vi.fn();
    const sendSnapshot = vi.fn();
    const init = vi.fn(() => ({
      ports: {
        boardSnapshot: { send: sendSnapshot },
        boardMoveClicked: {
          subscribe,
          unsubscribe,
        },
      },
    }));

    const onMoveClick = vi.fn();
    const node = { id: "elm-board-host" };
    const snapshot = {
      boardCode: "ROOM123",
      version: 1,
      board: { code: "ROOM123", version: 1 },
    };

    const runtime = mountElmBoardIsland({
      node,
      snapshot,
      ownSeat: "red",
      replayIndex: null,
      flipVertical: false,
      onMoveClick,
      elmRuntime: { Elm: { BoardIsland: { init } } },
    });

    expect(init).toHaveBeenCalledTimes(1);
    expect(init).toHaveBeenCalledWith(
      expect.objectContaining({
        node,
        flags: expect.objectContaining({
          boardCode: "ROOM123",
          version: 1,
          board: { code: "ROOM123", version: 1 },
          ownSeat: "red",
          replayIndex: null,
          flipVertical: false,
        }),
      }),
    );
    expect(subscribe).toHaveBeenCalledTimes(1);

    const movePayload = { type: "boardMoveClick", point: { x: 4, y: 6 } };
    const moveHandler = subscribe.mock.calls[0][0];
    moveHandler(movePayload);
    expect(onMoveClick).toHaveBeenCalledWith(movePayload);

    runtime.sendSnapshotUpdate({
      snapshot: {
        boardCode: "ROOM123",
        version: 2,
        game: { roomId: "ROOM123", status: "playing" },
      },
      ownSeat: "red",
      replayIndex: 1,
      flipVertical: true,
    });

    expect(sendSnapshot).toHaveBeenCalledWith(
      expect.objectContaining({
        boardCode: "ROOM123",
        version: 2,
        game: { roomId: "ROOM123", status: "playing" },
        ownSeat: "red",
        replayIndex: 1,
        flipVertical: true,
      }),
    );

    runtime.cleanup();
    expect(unsubscribe).toHaveBeenCalledWith(moveHandler);
  });
});
