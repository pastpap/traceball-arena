import { mkdirSync } from "node:fs";
import { expect, test } from "@playwright/test";
import {
  createBoardAsBlue,
  showBoardsIfNeeded,
  showHomeIfNeeded,
} from "./helpers/elm-shell.js";

mkdirSync("test-results/screenshots", { recursive: true });

async function captureScenario(page, name) {
  await page.screenshot({
    path: `test-results/screenshots/${name}.png`,
    fullPage: true,
  });
}

test.describe("Home and Boards smoke", () => {
  test("persists player name and lists/open board from Boards tab", async ({
    browser,
  }) => {
    const playerName = "Stefan Smoke";
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      isMobile: false,
    });
    const page = await context.newPage();

    try {
      const boardCode = await createBoardAsBlue(page, playerName);

      await captureScenario(page, "qa-home-created-board");
      await expect(page.locator("body")).toContainText(boardCode);

      await showBoardsIfNeeded(page);
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
      await expect(page.locator("body")).toContainText(boardCode);

      await showHomeIfNeeded(page);
      await expect(
        page.getByRole("textbox", { name: "Your name" }),
      ).toHaveValue(playerName);
    } finally {
      await context.close();
    }
  });
});
