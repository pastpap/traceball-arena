import { mkdirSync } from "node:fs";
import { expect, test } from "@playwright/test";

mkdirSync("test-results/screenshots", { recursive: true });

async function captureScenario(page, name) {
  await page.screenshot({
    path: `test-results/screenshots/${name}.png`,
    fullPage: true,
  });
}

async function showMobileHomeIfNeeded(page) {
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

async function showMobileBoardsIfNeeded(page) {
  const boardsPanel = page.locator("#boardsPanel");
  if (await boardsPanel.isVisible().catch(() => false)) return;

  const boardsTab = page.locator('.mobile-tab[data-page-target="boards"]');
  if (await boardsTab.isVisible().catch(() => false)) {
    await boardsTab.click();
    await expect(boardsPanel).toBeVisible();
    return;
  }

  const lobbyButton = page.locator(
    '.hero-lobby-btn[data-elm-command="toggle-lobby"]',
  );
  if (await lobbyButton.isVisible().catch(() => false)) {
    await lobbyButton.click();
  }

  const desktopBoardsTab = page.locator('.lobby-tab[data-lobby-tab="boards"]');
  if (await desktopBoardsTab.isVisible().catch(() => false)) {
    await desktopBoardsTab.click();
  }

  await expect(boardsPanel).toBeVisible();
}

test.describe("Home and Boards smoke", () => {
  test("persists player name and lists/open board from Boards tab", async ({
    page,
  }) => {
    const playerName = "Stefan Smoke";

    await page.goto("/");
    await showMobileHomeIfNeeded(page);

    await page.locator("#playerNameInput").fill(playerName);
    await page.locator("#onlineMoveTimer").selectOption("5");
    await page.locator("#elmCreateBoard").click();

    await captureScenario(page, "qa-home-created-board");
    await expect(page.locator("#playStatus")).toContainText(/Board /);
    const createdUrl = new URL(page.url());
    const boardCode = createdUrl.searchParams.get("board");
    expect(boardCode).toBeTruthy();

    await showMobileBoardsIfNeeded(page);
    await page.locator("#refreshBoards").click();

    const boardCard = page.locator(`[data-elm-board-card="${boardCode}"]`);
    await expect(boardCard).toBeVisible();

    const openLink = boardCard.locator("a.elm-primary-link");
    await expect(openLink).toBeVisible();
    await expect(openLink).toHaveAttribute(
      "href",
      new RegExp(`\\?board=${boardCode}`),
    );

    await openLink.click();
    await captureScenario(page, "qa-boards-opened-board");
    await expect(page.locator("#playStatus")).toContainText(
      `Board ${boardCode}`,
    );

    await showMobileHomeIfNeeded(page);
    await expect(page.locator("#playerNameInput")).toHaveValue(playerName);
  });
});
