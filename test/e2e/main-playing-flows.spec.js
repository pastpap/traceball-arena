import { mkdirSync } from "node:fs";
import { expect, test } from "@playwright/test";
import {
  createBoardAsBlue,
  fetchRoomDetails,
  fetchRoomSummary,
  joinRed,
  openBoard,
  safeClose,
  selectMoveTimer,
  showHomeIfNeeded,
  showMatchIfNeeded,
  showPlayIfNeeded,
} from "./helpers/elm-shell.js";

mkdirSync("test-results/screenshots", { recursive: true });

async function captureScenario(page, name) {
  await page.screenshot({
    path: `test-results/screenshots/${name}.png`,
    fullPage: true,
  });
}

async function clickOwnTurnMove(page, key) {
  const move = page
    .locator(
      `[data-elm-legal-context="own-turn"][data-elm-legal-move="${key}"]`,
    )
    .first();
  await expect(move).toHaveCount(1);
  await move.click({ force: true });
}

async function playLocalSequence(page, moves) {
  for (const move of moves) {
    await clickOwnTurnMove(page, move);
  }
}

async function startLocalMatch(page) {
  await page.goto("/");
  await showHomeIfNeeded(page);
  await page.getByRole("button", { name: "Local" }).click();
  await page.getByRole("textbox", { name: "Blue" }).first().fill("Blue");
  await page.getByRole("textbox", { name: "Red" }).first().fill("Red");
  await selectMoveTimer(page, "localMoveTimer", 10);
  await page.getByRole("button", { name: "Start local match" }).click();
  await showPlayIfNeeded(page);
}

test.describe("main realtime playing flows", () => {
  test("local timer changes do not leak into online board creation when online timer is off", async ({
    page,
    baseURL,
  }) => {
    await page.goto("/");
    await showHomeIfNeeded(page);
    await page.getByRole("button", { name: "Local" }).click();
    await page.getByRole("textbox", { name: "Blue" }).first().fill("Blue");
    await page.getByRole("textbox", { name: "Red" }).first().fill("Red");
    await selectMoveTimer(page, "localMoveTimer", 10);

    await page.getByRole("button", { name: "Online" }).click();
    await selectMoveTimer(page, "onlineMoveTimer", 0);
    await page.getByRole("button", { name: "Create board as Blue" }).click();
    await expect(page).toHaveURL(/\?board=/);

    const openGameNow = page.getByRole("button", { name: "Open game now" });
    if (await openGameNow.isVisible().catch(() => false)) {
      await openGameNow.click({ force: true });
    }

    const boardCode = new URL(page.url()).searchParams.get("board");
    expect(boardCode).toBeTruthy();

    const room = await fetchRoomDetails(page, baseURL, boardCode);
    expect(room.moveTimeLimitMs).toBe(0);
  });

  test("same-client board reopen does not let an old socket disconnect P1 or blank the board", async ({
    browser,
    baseURL,
  }) => {
    const p1Context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const p2Context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const p1 = await p1Context.newPage();
    const p2 = await p2Context.newPage();
    const p1Dialogs = [];
    p1.on("dialog", async (dialog) => {
      p1Dialogs.push(dialog.message());
      await dialog.dismiss();
    });
    p2.on("dialog", async (dialog) => dialog.accept());

    try {
      const boardCode = await createBoardAsBlue(p1, "P1");
      await openBoard(p2, boardCode, "P2");
      await joinRed(p2, "P2");
      await expect(p1.locator("body")).toContainText(boardCode);

      const p1Reopen = await p1Context.newPage();
      await openBoard(p1Reopen, boardCode, "P1");
      await expect(p1Reopen.locator("body")).toContainText("You are Blue");
      await p1.close();

      await showPlayIfNeeded(p1Reopen);
      await expect(p1Reopen.locator("body")).toContainText(boardCode);
      await expect(p2.locator("body")).toContainText(/P1|Blue/);
      await expect(p2.locator("body")).toContainText(boardCode);

      await showMatchIfNeeded(p2);
      await p2
        .getByRole("button", { name: /Leave|Leave game/i })
        .first()
        .click();
      await expect(
        p1Reopen.getByRole("button", { name: "Join Red" }),
      ).toHaveCount(0);
      await expect(p1Reopen.locator("body")).toContainText("You are Blue");
      expect(p1Dialogs).toEqual([]);

      const room = await fetchRoomSummary(p1Reopen, baseURL, boardCode);
      expect(room.occupancy.p1).toBe("active");
      expect(room.occupancy.p2).toBe("vacant");
    } finally {
      await safeClose(p1Context);
      await safeClose(p2Context);
    }
  });

  test("idle timeout pause keeps both players on the board and only the timed-out player can resume", async ({
    browser,
  }) => {
    const p1Context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const p2Context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
    });
    const p1 = await p1Context.newPage();
    const p2 = await p2Context.newPage();
    try {
      const boardCode = await createBoardAsBlue(p1, "P1");
      await openBoard(p2, boardCode, "P2");
      await joinRed(p2, "P2");

      await showPlayIfNeeded(p2);
      const p2PausePanel = p2.locator('[data-elm-pause-panel="true"]');
      await expect(p2PausePanel).toContainText("Game paused", {
        timeout: 20000,
      });
      await expect(
        p2PausePanel.getByRole("button", { name: "Resume game" }),
      ).toBeVisible();

      const p1PausePanel = p1.locator('[data-elm-pause-panel="true"]');
      await expect(p1PausePanel).toBeVisible();
      await expect(
        p1PausePanel.getByRole("button", { name: "Resume game" }),
      ).toHaveCount(0);
      await expect(p1.locator("body")).toContainText(boardCode);
      await expect(p2.locator("body")).toContainText(boardCode);
    } finally {
      await safeClose(p1Context);
      await safeClose(p2Context);
    }
  });

  test("manual pause only allows the pausing player to resume or start a new round", async ({
    browser,
  }) => {
    const p1Context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const p2Context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      isMobile: true,
    });
    const p1 = await p1Context.newPage();
    const p2 = await p2Context.newPage();
    try {
      const boardCode = await createBoardAsBlue(p1, "P1");
      await openBoard(p2, boardCode, "P2");
      await joinRed(p2, "P2");

      await p1.getByRole("button", { name: "Pause game" }).click();

      const p1PausePanel = p1.locator('[data-elm-pause-panel="true"]');
      const p2PausePanel = p2.locator('[data-elm-pause-panel="true"]');
      await expect(p1PausePanel).toBeVisible();
      await expect(p2PausePanel).toBeVisible();
      await captureScenario(p1, "qa-pause-owner-controls");

      await expect(
        p1PausePanel.getByRole("button", { name: "Resume game" }),
      ).toBeVisible();
      await expect(
        p1.getByRole("button", { name: "Start new round" }),
      ).toHaveCount(0);

      await expect(
        p2PausePanel.getByRole("button", { name: "Resume game" }),
      ).toHaveCount(0);
      await expect(
        p2.getByRole("button", { name: "Start new round" }),
      ).toHaveCount(0);

      await p1PausePanel
        .getByRole("button", { name: "Resume game" })
        .click({ force: true });

      await expect(p1PausePanel).toHaveCount(0);
      await expect(p2PausePanel).toHaveCount(0);
      await expect(p1.locator("body")).toContainText(boardCode);
      await expect(p2.locator("body")).toContainText(boardCode);
    } finally {
      await safeClose(p1Context);
      await safeClose(p2Context);
    }
  });

  test("local replay controls step through moves and return to live board", async ({
    browser,
  }) => {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const page = await context.newPage();
    try {
      await startLocalMatch(page);

      await expect(page.locator(".board-stage")).toBeVisible();
      await expect(page.locator("#replayText")).toContainText(
        "Replay appears once moves are made.",
      );

      await playLocalSequence(page, ["3,5", "2,4"]);

      await expect(page.locator("#replayText")).toContainText(
        "Move 2 of 2 - live board",
      );

      await page.getByRole("button", { name: "Start" }).click();
      await captureScenario(page, "qa-replay-step-through");
      await expect(page.locator("#replayText")).toContainText("Move 0 of 2");

      await page.getByRole("button", { name: "Next" }).click();
      await expect(page.locator("#replayText")).toContainText("Move 1 of 2");

      await page.getByRole("button", { name: "Live" }).click();
      await expect(page.locator("#replayText")).toContainText(
        "Move 2 of 2 - live board",
      );
    } finally {
      await safeClose(context);
    }
  });

  test("winner overlay appears after a scored local round and new round clears it", async ({
    browser,
  }) => {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const page = await context.newPage();
    try {
      await startLocalMatch(page);

      await playLocalSequence(page, [
        "3,5",
        "2,4",
        "1,3",
        "0,2",
        "1,1",
        "1,2",
        "2,1",
        "2,2",
        "1,1",
      ]);

      const winnerOverlay = page.locator(".winner-overlay");
      await expect(winnerOverlay).toBeVisible();
      await captureScenario(page, "qa-winner-overlay");
      await expect(winnerOverlay).toContainText(/Blue/i);
      const winnerNewRound = page.getByRole("button", {
        name: "New Round",
        exact: true,
      });
      await expect(winnerNewRound).toBeVisible();

      await winnerNewRound.click();

      await expect(winnerOverlay).toHaveCount(0);
      await expect(page.locator("body")).toContainText(/Board LOCAL/i);
      await expect(page.locator("#replayText")).toContainText(
        /Replay appears once moves are made.|Move 0 of 0 - live board/i,
      );
    } finally {
      await safeClose(context);
    }
  });
});
