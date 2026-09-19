import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import {
  MatchPanel,
  buildMatchPanelModel,
} from "../src/react/components/MatchPanel.jsx";

function renderPanel(props) {
  return renderToStaticMarkup(React.createElement(MatchPanel, props));
}

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

describe("React MatchPanel", () => {
  it("renders occupied and vacant seat details", () => {
    const html = renderPanel({
      snapshot: {
        boardCode: "ROOM123",
        game: {
          status: "waiting",
          players: {
            p1: { status: "active", name: "Stefan" },
            p2: { status: "vacant", name: "Red" },
          },
          score: { p1: 0, p2: 0 },
          moves: [],
        },
      },
      ownSeat: null,
      connectionStatus: "connected",
      isWaitingListMember: false,
      claimableSeatActions: [],
      leaveSeatAction: null,
      waitingListAction: null,
      pauseResumeActions: [],
      newRoundAction: null,
    });

    expect(html).toContain("Blue seat");
    expect(html).toContain("Stefan");
    expect(html).toContain("Occupied");
    expect(html).toContain("Red seat");
    expect(html).toContain("Open");
  });

  it("derives the viewer role from seat and waiting-list membership", () => {
    expect(
      buildMatchPanelModel({
        snapshot: { boardCode: "ROOM123", game: { players: {} } },
        ownSeat: "p1",
      }).viewerRole,
    ).toBe("Blue");

    expect(
      buildMatchPanelModel({
        snapshot: { boardCode: "ROOM123", game: { players: {} } },
        ownSeat: "p2",
      }).viewerRole,
    ).toBe("Red");

    expect(
      buildMatchPanelModel({
        snapshot: { boardCode: "ROOM123", game: { players: {} } },
        ownSeat: null,
        isWaitingListMember: false,
      }).viewerRole,
    ).toBe("Watching");

    expect(
      buildMatchPanelModel({
        snapshot: { boardCode: "ROOM123", game: { players: {} } },
        ownSeat: null,
        isWaitingListMember: true,
      }).viewerRole,
    ).toBe("Waiting List");
  });

  it("renders session state, turn, score, and move count", () => {
    const html = renderPanel({
      snapshot: {
        boardCode: "ROOM123",
        game: {
          status: "playing",
          turn: "p2",
          players: {
            p1: { status: "active", name: "Blue One" },
            p2: { status: "active", name: "Red Two" },
          },
          score: { p1: 2, p2: 1 },
          moves: [{}, {}, {}],
        },
      },
      ownSeat: "p2",
      connectionStatus: "connected",
      isWaitingListMember: false,
      claimableSeatActions: [],
      leaveSeatAction: null,
      waitingListAction: null,
      pauseResumeActions: [],
      newRoundAction: null,
    });

    expect(html).toContain("Session State");
    expect(html).toContain("playing");
    expect(html).toContain("Current Turn");
    expect(html).toContain("Red");
    expect(html).toContain("Score");
    expect(html).toContain("2 - 1");
    expect(html).toContain("Move Count");
    expect(html).toContain(">3<");
  });

  it("renders waiting-list metadata and timer/activity summaries", () => {
    const html = renderPanel({
      snapshot: {
        boardCode: "ROOM123",
        game: {
          status: "playing",
          turn: "p1",
          moveTimeLimitMs: 15000,
          turnStartedAt: 185000,
          lastActivityAt: 180000,
          expiresAt: 900000,
          players: {
            p1: { status: "active", name: "Blue One" },
            p2: { status: "active", name: "Red Two" },
          },
          waitingList: [
            { displayName: "Stefan", joinedAt: 1000 },
            { displayName: "Mara", joinedAt: 2000 },
          ],
          score: { p1: 2, p2: 1 },
          moves: [{}, {}],
        },
      },
      ownSeat: null,
      connectionStatus: "connected",
      isWaitingListMember: false,
      claimableSeatActions: [],
      leaveSeatAction: null,
      waitingListAction: null,
      pauseResumeActions: [],
      newRoundAction: null,
      nowMs: 190000,
    });

    expect(html).toContain("Waiting List");
    expect(html).toContain(">2<");
    expect(html).toContain("Stefan");
    expect(html).toContain("Mara");
    expect(html).toContain("Move Timer");
    expect(html).toContain("15s per move");
    expect(html).toContain("deadline in 10s");
    expect(html).toContain("Last Activity");
    expect(html).toContain("10s ago");
    expect(html).toContain("Expires");
    expect(html).toContain("in 12m");
  });

  it("omits watcher count when the server has not published a public watcher total", () => {
    const html = renderPanel({
      snapshot: {
        boardCode: "ROOM123",
        game: {
          status: "waiting",
          players: {
            p1: { status: "vacant", name: "Blue" },
            p2: { status: "vacant", name: "Red" },
          },
          watchers: [],
          score: { p1: 0, p2: 0 },
          moves: [],
        },
      },
      ownSeat: null,
      connectionStatus: "connected",
      isWaitingListMember: false,
      claimableSeatActions: [],
      leaveSeatAction: null,
      waitingListAction: null,
      pauseResumeActions: [],
      newRoundAction: null,
    });

    expect(html).not.toContain("Watchers");
  });

  it("renders watcher count only when the server publishes an explicit public total", () => {
    const html = renderPanel({
      snapshot: {
        boardCode: "ROOM123",
        game: {
          status: "waiting",
          watcherCount: 3,
          players: {
            p1: { status: "vacant", name: "Blue" },
            p2: { status: "vacant", name: "Red" },
          },
          score: { p1: 0, p2: 0 },
          moves: [],
        },
      },
      ownSeat: null,
      connectionStatus: "connected",
      isWaitingListMember: false,
      claimableSeatActions: [],
      leaveSeatAction: null,
      waitingListAction: null,
      pauseResumeActions: [],
      newRoundAction: null,
    });

    expect(html).toContain("Watchers");
    expect(html).toContain(">3<");
  });

  it("renders the existing action controls and keeps callbacks separate", () => {
    const onClaimSeat = vi.fn();
    const onLeaveSeat = vi.fn();
    const onWaitingListAction = vi.fn();
    const onPauseAction = vi.fn();
    const onNewRoundAction = vi.fn();

    const element = MatchPanel({
      snapshot: {
        boardCode: "ROOM123",
        game: {
          status: "paused",
          turn: "p1",
          players: {
            p1: { status: "vacant", name: "Blue" },
            p2: { status: "active", name: "Red Two" },
          },
          score: { p1: 1, p2: 2 },
          moves: [{}],
        },
      },
      ownSeat: null,
      connectionStatus: "connected",
      isWaitingListMember: true,
      claimableSeatActions: [{ seatId: "p1", label: "Claim Blue" }],
      leaveSeatAction: { label: "Leave Seat", danger: false },
      waitingListAction: { type: "leave", label: "Leave Waiting List" },
      pauseResumeActions: [{ type: "pause", label: "Pause Game" }],
      newRoundAction: { label: "Continue", reason: "between-rounds" },
      onClaimSeat,
      onLeaveSeat,
      onWaitingListAction,
      onPauseAction,
      onResumeAction: vi.fn(),
      onNewRoundAction,
    });

    const buttons = collectHostElements(element, "button");
    expect(buttonLabels(element)).toEqual([
      "Claim Blue",
      "Leave Seat",
      "Leave Waiting List",
      "Pause Game",
      "Continue",
    ]);

    buttons[0].props.onClick();
    buttons[1].props.onClick();
    buttons[2].props.onClick();
    buttons[3].props.onClick();
    buttons[4].props.onClick();

    expect(onClaimSeat).toHaveBeenCalledWith("p1");
    expect(onLeaveSeat).toHaveBeenCalledTimes(1);
    expect(onWaitingListAction).toHaveBeenCalledWith("leave");
    expect(onPauseAction).toHaveBeenCalledWith("pause");
    expect(onNewRoundAction).toHaveBeenCalledTimes(1);
  });

  it("returns no match controls when there is no board snapshot", () => {
    expect(
      MatchPanel({
        snapshot: null,
        ownSeat: null,
        connectionStatus: "idle",
        isWaitingListMember: false,
        claimableSeatActions: [],
        leaveSeatAction: null,
        waitingListAction: null,
        pauseResumeActions: [],
        newRoundAction: null,
      }),
    ).toBeNull();
  });
});
