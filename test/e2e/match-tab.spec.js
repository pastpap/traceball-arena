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

async function showHomeIfNeeded(page) {
  const nameInput = page.locator("#playerNameInput");
  if (await nameInput.isVisible().catch(() => false)) return;

  const homeTab = page.locator('.mobile-tab[data-page-target="invite"]');
  if (await homeTab.isVisible().catch(() => false)) {
    await homeTab.click();
    await expect(nameInput).toBeVisible();
    return;
  }

  const lobbyButton = page.locator(
    '.hero-lobby-btn[data-elm-command="toggle-lobby"]',
  );
  if (await lobbyButton.isVisible().catch(() => false)) {
    const boardsPanel = page.locator("#boardsPanel");
    if (!(await boardsPanel.isVisible().catch(() => false))) {
      await lobbyButton.click();
    }
  }

  const desktopGameTab = page.locator('.lobby-tab[data-lobby-tab="game"]');
  if (await desktopGameTab.isVisible().catch(() => false)) {
    await desktopGameTab.click();
  }

  await expect(nameInput).toBeVisible();
}

async function showMatchIfNeeded(page) {
  const details = page.locator("[data-elm-match-details]");
  if (await details.isVisible().catch(() => false)) return;

  const matchTab = page.locator('.mobile-tab[data-page-target="match"]');
  if (await matchTab.isVisible().catch(() => false)) {
    await matchTab.click();
    await expect(details).toBeVisible();
    return;
  }

  const lobbyButton = page.locator(
    '.hero-lobby-btn[data-elm-command="toggle-lobby"]',
  );
  if (await lobbyButton.isVisible().catch(() => false)) {
    const isOpen = await page
      .locator('[data-elm-shell-actions][data-elm-lobby-open="true"]')
      .count();
    if (!isOpen) await lobbyButton.click();
  }

  const desktopGameTab = page.locator('.lobby-tab[data-lobby-tab="game"]');
  if (await desktopGameTab.isVisible().catch(() => false)) {
    await desktopGameTab.click();
  }

  await expect(details).toBeVisible();
}

async function createBoardAsBlue(page, name = "P1") {
  await page.goto("/");
  await showHomeIfNeeded(page);
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
  const nameInput = page.locator("#playerNameInput");
  if (await nameInput.isVisible().catch(() => false)) {
    await nameInput.fill(name);
  }
}

async function expandMatchInfo(page) {
  await showMatchIfNeeded(page);
  const details = page.locator("details.match-info-details").first();
  await expect(details).toBeVisible();
  if (!(await details.evaluate((node) => node.hasAttribute("open")))) {
    await page.locator("summary.match-info-toggle").first().click();
  }
  await expect(page.locator(".match-info-content")).toBeVisible();
}

test.describe("Match tab smoke", () => {
  test("shows match metadata and role-gated seat/waiting controls", async ({
    browser,
  }) => {
    const p1Context = await browser.newContext();
    const p2Context = await browser.newContext();
    const p3Context = await browser.newContext();

    const p1 = await p1Context.newPage();
    const p2 = await p2Context.newPage();
    const p3 = await p3Context.newPage();

    try {
      const boardCode = await createBoardAsBlue(p1, "P1");

      await openBoard(p2, boardCode, "P2");
      await openBoard(p3, boardCode, "Watcher");

      await expandMatchInfo(p2);
      await captureScenario(p2, "qa-match-watcher");
      await expect(p2.locator(".match-info-content")).toContainText(
        `Board: ${boardCode}`,
      );
      await expect(p2.locator(".match-info-content")).toContainText(
        /Your role:\s*Watcher|Watching/i,
      );

      await expect(
        p2.locator('[data-elm-command="claim-red"]:visible').first(),
      ).toBeVisible();
      await p2
        .locator('[data-elm-command="claim-red"]:visible')
        .first()
        .click();
      await captureScenario(p2, "qa-match-red-player");
      await expect(p2.locator(".hero-board-role")).toContainText("You are Red");

      await expandMatchInfo(p2);
      await expect(p2.locator(".match-info-content")).toContainText(
        /Your role:\s*(You are Red|Red player)/i,
      );
      await expect(
        p2.locator('[data-elm-command="leave-seat"]:visible').first(),
      ).toBeVisible();

      await expandMatchInfo(p3);
      await captureScenario(p3, "qa-match-waiting-list-before-join");
      await expect(p3.locator(".match-info-content")).toContainText(
        /Your role:\s*Watcher|Watching/i,
      );

      const joinWaiting = p3
        .locator('[data-elm-command="join-waiting-list"]:visible')
        .first();
      await expect(joinWaiting).toBeVisible();
      await joinWaiting.click();

      await expect(
        p3.locator('[data-elm-command="leave-waiting-list"]:visible').first(),
      ).toBeVisible();
      await captureScenario(p3, "qa-match-waiting-list");

      await expandMatchInfo(p3);
      await expect(p3.locator(".match-info-content")).toContainText(
        /Your role:\s*Waiting list/i,
      );
    } finally {
      await safeClose(p1Context);
      await safeClose(p2Context);
      await safeClose(p3Context);
    }
  });
});
