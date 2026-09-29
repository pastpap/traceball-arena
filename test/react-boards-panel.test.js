import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import {
  BoardsPanel,
  buildBoardsPanelModel,
} from "../src/react/components/BoardsPanel.jsx";
import {
  buildBoardOpenUrl,
  handleOpenBoardFromList,
  handleRefreshBoardList,
  handleDeleteBoardFromList,
} from "../src/react/App.jsx";

function collectHostElements(node, type, results = []) {
  if (Array.isArray(node)) {
    node.forEach((child) => collectHostElements(child, type, results));
    return results;
  }

  if (!node || typeof node !== "object") return results;

  if (node.type === type) {
    results.push(node);
  }

  const children = node.props?.children;
  const list = Array.isArray(children) ? children : [children];
  list.forEach((child) => collectHostElements(child, type, results));
  return results;
}

function buttonLabels(node) {
  return collectHostElements(node, "button").map((button) => {
    const children = button.props?.children;
    return Array.isArray(children) ? children.join("") : String(children || "");
  });
}

function renderPanel(props) {
  return renderToStaticMarkup(React.createElement(BoardsPanel, props));
}

describe("React BoardsPanel model", () => {
  it("returns one entry per board with a trimmed room id", () => {
    const model = buildBoardsPanelModel({
      boards: [
        {
          roomId: "ROOM123",
          state: "WaitingForPlayers",
          occupancy: { occupiedCount: 1 },
          isOwner: true,
        },
        {
          roomId: "  ",
          state: "SessionActive",
          occupancy: { occupiedCount: 2 },
          isOwner: false,
        },
      ],
    });

    expect(model.isEmpty).toBe(false);
    expect(model.boards).toEqual([
      {
        roomId: "ROOM123",
        stateLabel: "Waiting for players",
        occupiedCount: 1,
        isOwner: true,
      },
    ]);
  });

  it("reports empty for a missing or empty board list", () => {
    expect(buildBoardsPanelModel({ boards: [] }).isEmpty).toBe(true);
    expect(buildBoardsPanelModel({}).isEmpty).toBe(true);
  });
});

describe("React BoardsPanel component", () => {
  it("shows an explicit empty state rather than a blank list", () => {
    const html = renderPanel({ boards: [] });
    expect(html).toContain("No live boards. Create one from Home!");
  });

  it("renders one card per board with occupancy and state", () => {
    const html = renderPanel({
      boards: [
        {
          roomId: "ROOM123",
          state: "OneSeatOccupied",
          occupancy: { occupiedCount: 1 },
          isOwner: false,
        },
      ],
    });

    expect(html).toContain("ROOM123");
    expect(html).toContain("1/2 seated");
    expect(html).toContain("1 seat occupied");
  });

  it("renders Delete only for boards the caller owns, Open for every board", () => {
    const onOpen = vi.fn();
    const onDelete = vi.fn();

    const element = BoardsPanel({
      boards: [
        { roomId: "OWNED1", state: "WaitingForPlayers", isOwner: true },
        { roomId: "OTHER1", state: "WaitingForPlayers", isOwner: false },
      ],
      onOpen,
      onDelete,
    });

    expect(buttonLabels(element)).toEqual([
      "Refresh",
      "Open",
      "Delete",
      "Open",
    ]);

    const buttons = collectHostElements(element, "button");
    buttons[1].props.onClick();
    buttons[2].props.onClick();
    buttons[3].props.onClick();

    expect(onOpen).toHaveBeenCalledWith("OWNED1");
    expect(onDelete).toHaveBeenCalledWith("OWNED1");
    expect(onOpen).toHaveBeenCalledWith("OTHER1");
    expect(onDelete).not.toHaveBeenCalledWith("OTHER1");
  });

  it("re-invokes refresh every time the Refresh button is clicked", () => {
    const onRefresh = vi.fn();
    const element = BoardsPanel({ boards: [], onRefresh });

    const [refreshButton] = collectHostElements(element, "button");
    refreshButton.props.onClick();
    refreshButton.props.onClick();

    expect(onRefresh).toHaveBeenCalledTimes(2);
  });
});

describe("React boards list actions", () => {
  it("builds a same-origin-relative open URL for a board code", () => {
    expect(buildBoardOpenUrl("ROOM123")).toBe("/react?board=ROOM123");
    expect(buildBoardOpenUrl("  ")).toBeNull();
  });

  it("opens a board via a real full-page navigation, matching Elm's boards list", () => {
    const assign = vi.fn();
    handleOpenBoardFromList({ roomId: "ROOM123", locationLike: { assign } });

    expect(assign).toHaveBeenCalledWith("/react?board=ROOM123");
  });

  it("never touches a socket connection or dispatch when opening from the list", () => {
    // Opening from the Boards list is a real navigation only. Even if a
    // connection/dispatch happen to be in scope at the call site, this
    // handler must never use them, so it structurally cannot send a
    // claimSeat/joinWaitingList frame the way the URL-arrival path can.
    const assign = vi.fn();
    const connection = { send: vi.fn() };
    const dispatch = vi.fn();

    handleOpenBoardFromList({
      roomId: "ROOM123",
      locationLike: { assign },
      connection,
      dispatch,
    });

    expect(assign).toHaveBeenCalledWith("/react?board=ROOM123");
    expect(connection.send).not.toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalled();
  });

  it("refreshes the board list and dispatches the result", async () => {
    const dispatch = vi.fn();
    const fetchList = vi.fn().mockResolvedValue({ rooms: [{ roomId: "A" }] });

    await handleRefreshBoardList({ clientId: "client-1", dispatch, fetchList });
    await handleRefreshBoardList({ clientId: "client-1", dispatch, fetchList });

    expect(fetchList).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: "receiveBoardList",
      boardList: { rooms: [{ roomId: "A" }] },
    });
  });

  it("toasts instead of throwing when the board list refresh fails", async () => {
    const dispatch = vi.fn();
    const fetchList = vi.fn().mockRejectedValue(new Error("network down"));

    await handleRefreshBoardList({ clientId: "client-1", dispatch, fetchList });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Could not refresh the boards list.",
    });
  });

  it("deletes a board as its owner and refreshes the list", async () => {
    const dispatch = vi.fn();
    const deleteRequest = vi.fn().mockResolvedValue({ ok: true });
    const refreshList = vi.fn();

    await handleDeleteBoardFromList({
      roomId: "ROOM123",
      clientId: "owner-client",
      dispatch,
      deleteRequest,
      refreshList,
    });

    expect(deleteRequest).toHaveBeenCalledWith({
      roomId: "ROOM123",
      clientId: "owner-client",
    });
    expect(refreshList).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Board ROOM123 deleted.",
    });
  });

  it("surfaces the server's exact 403 error text as a toast and does not refresh", async () => {
    const dispatch = vi.fn();
    const deleteRequest = vi
      .fn()
      .mockRejectedValue(new Error("Only the board creator can delete this board."));
    const refreshList = vi.fn();

    await handleDeleteBoardFromList({
      roomId: "ROOM123",
      clientId: "not-owner",
      dispatch,
      deleteRequest,
      refreshList,
    });

    expect(dispatch).toHaveBeenCalledWith({
      type: "setToast",
      toast: "Only the board creator can delete this board.",
    });
    expect(refreshList).not.toHaveBeenCalled();
  });
});
