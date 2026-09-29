import { expect, test } from "@playwright/test";
import { safeClose } from "./helpers/elm-shell.js";

async function createBoardFromReact(page, name) {
  await page.goto("/react");
  await page.getByRole("textbox", { name: "Player name" }).fill(name);
  await page.getByRole("button", { name: "Create Board" }).click();
  await expect(page).toHaveURL(/\/react\?board=/);
  const boardCode = new URL(page.url()).searchParams.get("board");
  expect(boardCode).toBeTruthy();
  return boardCode;
}

test.describe("React Boards tab smoke", () => {
  test("lists a created board, opens it as a watcher only, and lets only the owner delete it", async ({
    browser,
  }) => {
    const ownerContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const otherContext = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });
    const owner = await ownerContext.newPage();
    const other = await otherContext.newPage();

    try {
      const boardCode = await createBoardFromReact(owner, "Owner");

      await owner.getByRole("button", { name: "Boards" }).click();
      await owner.getByRole("button", { name: "Refresh" }).click();
      const ownerCard = owner.locator(`[data-board-card="${boardCode}"]`);
      await expect(ownerCard).toBeVisible();
      await expect(ownerCard).toContainText("0/2 seated");
      await expect(
        ownerCard.getByRole("button", { name: "Delete" }),
      ).toBeVisible();

      // A different browser context (different clientId) opens the boards
      // list, sees the board without a Delete button (non-owner), and Open
      // never auto-claims a seat or a waiting-list slot.
      await other.goto("/react");
      await other.getByRole("textbox", { name: "Player name" }).fill("Watcher");
      await other.getByRole("button", { name: "Boards" }).click();
      await other.getByRole("button", { name: "Refresh" }).click();
      const otherCard = other.locator(`[data-board-card="${boardCode}"]`);
      await expect(otherCard).toBeVisible();
      await expect(
        otherCard.getByRole("button", { name: "Delete" }),
      ).toHaveCount(0);

      await otherCard.getByRole("button", { name: "Open" }).click();
      await expect(other).toHaveURL(
        new RegExp(`/react\\?board=${boardCode}$`),
      );

      await other.getByRole("button", { name: "Match" }).click();
      await expect(
        other.getByRole("button", { name: "Claim Blue" }),
      ).toBeVisible();
      await expect(
        other.getByRole("button", { name: "Claim Red" }),
      ).toBeVisible();

      // Only the owner can delete; the card disappears from their own list
      // after the next refresh.
      await owner.bringToFront();
      await ownerCard.getByRole("button", { name: "Delete" }).click();
      await owner.getByRole("button", { name: "Refresh" }).click();
      await expect(
        owner.locator(`[data-board-card="${boardCode}"]`),
      ).toHaveCount(0);
    } finally {
      await safeClose(ownerContext);
      await safeClose(otherContext);
    }
  });
});
