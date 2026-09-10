import { expect, test } from "@playwright/test";
import {
  createBoardAsBlue,
  fetchRoomSummary,
  joinRed,
  openBoard,
  safeClose,
  showBoardsIfNeeded,
  showMatchIfNeeded,
} from "./helpers/elm-shell.js";

test.describe("Reconnect regressions", () => {
  test("disconnect pause shows a consistent paused panel and only Blue can resume after Red reopens", async ({
    browser,
    baseURL,
  }) => {
    const blueContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const redContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
    });
    const blue = await blueContext.newPage();
    const red = await redContext.newPage();

    try {
      const boardCode = await createBoardAsBlue(blue, "P1");
      await openBoard(red, boardCode, "P2");
      await joinRed(red, "P2");

      await expect
        .poll(async () => {
          const summary = await fetchRoomSummary(blue, baseURL, boardCode);
          return summary
            ? {
                state: summary.state,
                activeCount: summary.occupancy.activeCount,
                p1: summary.occupancy.p1,
                p2: summary.occupancy.p2,
              }
            : null;
        })
        .toEqual({
          state: "SessionActive",
          activeCount: 2,
          p1: "active",
          p2: "active",
        });

      await red.close();

      await expect
        .poll(async () => {
          const summary = await fetchRoomSummary(blue, baseURL, boardCode);
          return summary
            ? {
                state: summary.state,
                activeCount: summary.occupancy.activeCount,
                p1: summary.occupancy.p1,
                p2: summary.occupancy.p2,
              }
            : null;
        })
        .toEqual({
          state: "SessionPaused",
          activeCount: 1,
          p1: "active",
          p2: "disconnected",
        });

      const bluePausePanel = blue.locator('[data-elm-pause-panel="true"]');
      await expect(bluePausePanel).toBeVisible();
      await expect(bluePausePanel).toContainText("Game paused");
      await expect(bluePausePanel).toContainText(/Next:\s*P1|Blue/i);

      const blueResume = bluePausePanel.getByRole("button", {
        name: "Resume game",
      });
      await expect(blueResume).toBeVisible();

      const redReopen = await redContext.newPage();
      await openBoard(redReopen, boardCode, "P2");
      await showMatchIfNeeded(redReopen);

      await expect(
        redReopen.getByRole("button", { name: "Join Red" }),
      ).toHaveCount(0);
      await expect(
        redReopen.getByRole("button", { name: /Leave|Leave game/i }).first(),
      ).toBeVisible();

      await expect
        .poll(async () => {
          const summary = await fetchRoomSummary(blue, baseURL, boardCode);
          return summary
            ? {
                state: summary.state,
                activeCount: summary.occupancy.activeCount,
                p1: summary.occupancy.p1,
                p2: summary.occupancy.p2,
              }
            : null;
        })
        .toEqual({
          state: "SessionPaused",
          activeCount: 2,
          p1: "active",
          p2: "active",
        });

      await blueResume.click({ force: true });

      await expect
        .poll(async () => {
          const summary = await fetchRoomSummary(blue, baseURL, boardCode);
          return summary ? summary.state : null;
        })
        .toBe("SessionActive");

      await expect(bluePausePanel).toHaveCount(0);
    } finally {
      await safeClose(blueContext);
      await safeClose(redContext);
    }
  });

  test("board list keeps a disconnected reserved seat visible and same-client reopen restores Blue", async ({
    browser,
    baseURL,
  }) => {
    const blueContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const observerContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const blue = await blueContext.newPage();
    const observer = await observerContext.newPage();

    try {
      const boardCode = await createBoardAsBlue(blue, "P1");
      await observer.goto("/");
      await showBoardsIfNeeded(observer);

      await blue.close();

      await expect
        .poll(async () => {
          const summary = await fetchRoomSummary(observer, baseURL, boardCode);
          return summary
            ? {
                state: summary.state,
                activeCount: summary.occupancy.activeCount,
                occupiedCount: summary.occupancy.occupiedCount,
                p1: summary.occupancy.p1,
                p2: summary.occupancy.p2,
              }
            : null;
        })
        .toEqual({
          state: "OneSeatOccupied",
          activeCount: 0,
          occupiedCount: 1,
          p1: "disconnected",
          p2: "vacant",
        });

      await observer.locator("#refreshBoards").click();
      const boardLink = observer
        .locator(`a[href="/?board=${boardCode}"]`)
        .first();
      await expect(boardLink).toBeVisible();
      await expect(boardLink).toContainText(boardCode);
      await expect(boardLink).toContainText("1/2 seated");
      await expect(boardLink).toContainText("1 seat occupied");

      const blueReopen = await blueContext.newPage();
      await openBoard(blueReopen, boardCode, "P1");
      await expect(blueReopen.locator("body")).toContainText("You are Blue");
      await expect(
        blueReopen.getByRole("button", { name: "Join Blue" }),
      ).toHaveCount(0);

      await expect
        .poll(async () => {
          const summary = await fetchRoomSummary(observer, baseURL, boardCode);
          return summary
            ? {
                activeCount: summary.occupancy.activeCount,
                occupiedCount: summary.occupancy.occupiedCount,
                p1: summary.occupancy.p1,
              }
            : null;
        })
        .toEqual({
          activeCount: 1,
          occupiedCount: 1,
          p1: "active",
        });
    } finally {
      await safeClose(blueContext);
      await safeClose(observerContext);
    }
  });
});
