import { mkdirSync } from "node:fs";
import { expect, test } from "@playwright/test";

mkdirSync("test-results/screenshots", { recursive: true });

async function captureScenario(page, name) {
  await page.screenshot({
    path: `test-results/screenshots/${name}.png`,
    fullPage: true,
  });
}

async function safeClose(context) {
  if (!context) return;
  try {
    await context.close();
  } catch {
    // Ignore teardown failures when browser/context was already closed by timeout.
  }
}

async function showMobileHomeIfNeeded(page) {
  const nameInput = page.locator("#playerNameInput");
  if (await nameInput.isVisible().catch(() => false)) return;
  const homeTab = page.locator('.mobile-tab[data-page-target="invite"]');
  if (await homeTab.count()) {
    await homeTab.click();
  }
  await expect(nameInput).toBeVisible();
}

async function createBoardAsBlue(page, name = "P1") {
  await page.goto("/");
  await showMobileHomeIfNeeded(page);
  await page.locator("#playerNameInput").fill(name);
  await page.locator("#onlineMoveTimer").selectOption("5");
  await page.locator("#elmCreateBoard").click();
  await expect(page.locator("#playStatus")).toContainText(/Board /);
  await expect(page.locator(".hero-board-role")).toContainText("You are Blue");
  const url = new URL(page.url());
  const boardCode = url.searchParams.get("board");
  expect(boardCode).toBeTruthy();
  return boardCode;
}

async function openBoard(page, boardCode, name) {
  await page.goto(`/?board=${boardCode}`);
  await expect(page.locator("#playStatus")).toContainText(`Board ${boardCode}`);
  const nameInput = page.locator("#elmPlayerName");
  if (await nameInput.count()) await nameInput.fill(name);
}

async function showMobileMatchIfNeeded(page, command) {
  const visibleCommand = page
    .locator(`[data-elm-command="${command}"]:visible`)
    .first();
  if (await visibleCommand.count()) return;
  const matchTab = page.locator('.mobile-tab[data-page-target="match"]');
  if (await matchTab.count()) {
    await matchTab.click();
  }
}

async function showMobilePlayIfNeeded(page) {
  const boardStage = page.locator(".board-stage");
  if (await boardStage.isVisible().catch(() => false)) return;
  const playTab = page.locator('.mobile-tab[data-page-target="play"]');
  if (await playTab.count()) {
    await playTab.click();
  }
}

async function clickOwnTurnMove(page, key) {
  const move = page
    .locator(
      `[data-elm-legal-context="own-turn"] [data-elm-legal-move="${key}"]`,
    )
    .first();
  await expect(move).toBeVisible();
  await move.click();
}

async function joinRed(page, name = "P2") {
  const nameInput = page.locator("#elmPlayerName");
  if (await nameInput.count()) await nameInput.fill(name);
  await showMobileMatchIfNeeded(page, "claim-red");
  await page.locator('[data-elm-command="claim-red"]:visible').first().click();
  await expect(page.locator(".hero-board-role")).toContainText("You are Red");
}

test.describe("main realtime playing flows", () => {
  test("same-client board reopen does not let an old socket disconnect P1 or blank the board", async ({
    browser,
    baseURL,
  }) => {
    const p1Context = await browser.newContext();
    const p2Context = await browser.newContext();
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
      await expect(p1.locator("#playStatus")).toContainText(
        `Board ${boardCode}`,
      );

      const p1Reopen = await p1Context.newPage();
      await openBoard(p1Reopen, boardCode, "P1");
      await expect(p1Reopen.locator(".hero-board-role")).toContainText(
        "You are Blue",
      );
      await p1.close();

      await expect(p1Reopen.locator(".board-stage")).toBeVisible();
      await expect(p1Reopen.locator("#playStatus")).toContainText(
        `Board ${boardCode}`,
      );
      await expect(p2.locator("#p1")).toContainText(/P1|Blue/);
      await expect(p2.locator("#playStatus")).toContainText(
        `Board ${boardCode}`,
      );

      await showMobileMatchIfNeeded(p2, "leave-seat");
      await p2
        .locator('[data-elm-command="leave-seat"]:visible')
        .first()
        .click();
      await expect(
        p1Reopen.locator('[data-elm-command="claim-red"]:visible'),
      ).toHaveCount(0);
      await expect(p1Reopen.locator(".hero-board-role")).toContainText(
        "You are Blue",
      );
      expect(p1Dialogs).toEqual([]);

      const response = await p1Reopen.request.get(`${baseURL}/api/rooms`);
      const rooms = (await response.json()).rooms;
      const room = rooms.find((item) => item.roomId === boardCode);
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
    const p1Context = await browser.newContext();
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

      await showMobilePlayIfNeeded(p2);
      await expect(
        p2.locator('[data-elm-command="resume"]:visible'),
      ).not.toHaveCount(0, { timeout: 20_000 });

      await expect(p2.locator(".hero-board-role")).toContainText(
        /You are Red/i,
      );
      await expect(p1.locator("#playStatus")).toContainText(
        `Board ${boardCode}`,
      );
      await expect(p2.locator("#playStatus")).toContainText(
        `Board ${boardCode}`,
      );

      await expect(
        p1.locator('[data-elm-command="resume"]:visible'),
      ).toHaveCount(0);
      await expect(
        p2.locator('[data-elm-command="resume"]:visible'),
      ).not.toHaveCount(0);
    } finally {
      await safeClose(p1Context);
      await safeClose(p2Context);
    }
  });

  test("manual pause only allows the pausing player to resume or start a new round", async ({
    browser,
  }) => {
    const p1Context = await browser.newContext();
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

      await p1.locator('[data-elm-command="pause"]:visible').first().click();

      await expect(p1.locator("#pauseOverlay")).toBeVisible();
      await expect(p2.locator("#pauseOverlay")).toBeVisible();
      await captureScenario(p1, "qa-pause-owner-controls");

      await expect(p1.locator("#resumeGame:visible")).toHaveCount(1);
      await expect(p1.locator("#pauseNewRound:visible")).toHaveCount(1);

      await expect(p2.locator("#resumeGame:visible")).toHaveCount(0);
      await expect(p2.locator("#pauseNewRound:visible")).toHaveCount(0);

      await p1.locator("#resumeGame:visible").click();

      await expect(p1.locator("#pauseOverlay")).toBeHidden();
      await expect(p2.locator("#pauseOverlay")).toBeHidden();
      await expect(p1.locator("#playStatus")).toContainText(
        `Board ${boardCode}`,
      );
      await expect(p2.locator("#playStatus")).toContainText(
        `Board ${boardCode}`,
      );
    } finally {
      await safeClose(p1Context);
      await safeClose(p2Context);
    }
  });

  test("local replay controls step through moves and return to live board", async ({
    page,
  }) => {
    await page.goto("/");
    await showMobileHomeIfNeeded(page);

    await page.locator("#localMode").click();
    await page.locator("#localP1Name").fill("Blue");
    await page.locator("#localP2Name").fill("Red");
    await page.locator("#localMoveTimer").selectOption("10");
    await page.locator("#startLocal").click();

    await showMobilePlayIfNeeded(page);
    await expect(page.locator(".board-stage")).toBeVisible();
    await expect(page.locator("#replayText")).toContainText(
      "Replay appears once moves are made.",
    );

    await page
      .locator('[data-elm-legal-context="own-turn"] [data-elm-legal-move]')
      .first()
      .click();
    await page
      .locator('[data-elm-legal-context="own-turn"] [data-elm-legal-move]')
      .first()
      .click();

    await expect(page.locator("#replayText")).toContainText(
      "Live view at move 2 / 2",
    );

    await page.locator("#replayStart").click();
    await captureScenario(page, "qa-replay-step-through");
    await expect(page.locator("#replayText")).toContainText("Replay 0 / 2");

    await page.locator("#replayNext").click();
    await expect(page.locator("#replayText")).toContainText("Replay 1 / 2");

    await page.locator("#replayEnd").click();
    await expect(page.locator("#replayText")).toContainText(
      "Live view at move 2 / 2",
    );
  });

  test("winner overlay appears after a scored local round and new round clears it", async ({
    page,
  }) => {
    await page.goto("/");
    await showMobileHomeIfNeeded(page);

    await page.locator("#localMode").click();
    await page.locator("#localP1Name").fill("Blue");
    await page.locator("#localP2Name").fill("Red");
    await page.locator("#localMoveTimer").selectOption("10");
    await page.locator("#startLocal").click();

    await showMobilePlayIfNeeded(page);

    // Deterministic path to Blue scoring at the top gate.
    await clickOwnTurnMove(page, "4,5");
    await clickOwnTurnMove(page, "5,5");
    await clickOwnTurnMove(page, "4,4");
    await clickOwnTurnMove(page, "5,4");
    await clickOwnTurnMove(page, "4,3");
    await clickOwnTurnMove(page, "5,3");
    await clickOwnTurnMove(page, "4,2");
    await clickOwnTurnMove(page, "5,2");
    await clickOwnTurnMove(page, "4,1");
    await clickOwnTurnMove(page, "4,0");

    await expect(page.locator("#winnerOverlay")).toBeVisible();
    await captureScenario(page, "qa-winner-overlay");
    await expect(page.locator("#winnerName")).toContainText(/Blue/i);
    await expect(page.locator("#winnerNewRound")).toBeVisible();

    await page.locator("#winnerNewRound").click();

    await expect(page.locator("#winnerOverlay")).toBeHidden();
    await expect(page.locator("#playStatus")).toContainText(/Board LOCAL/i);
    await expect(page.locator("#replayText")).toContainText(
      /Replay appears once moves are made.|Live view at move 0 \/ 0/i,
    );
  });
});
