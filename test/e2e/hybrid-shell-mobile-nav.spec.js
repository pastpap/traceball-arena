import { expect, test } from "@playwright/test";

test.describe("React hybrid mobile tab visibility", () => {
  test("mobile tabs switch visible section one-at-a-time", async ({ page }) => {
    await page.goto("/react");

    const homeSection = page.locator('[data-section="home"]');
    const playSection = page.locator('[data-section="play"]');
    const matchSection = page.locator('[data-section="match"]');

    await expect(page.getByRole("button", { name: "Home" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Play" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Match" })).toBeVisible();

    await expect(homeSection).toBeVisible();
    await expect(playSection).toBeHidden();
    await expect(matchSection).toBeHidden();

    await page.getByRole("button", { name: "Play" }).click();
    await expect(homeSection).toBeHidden();
    await expect(playSection).toBeVisible();
    await expect(matchSection).toBeHidden();

    await page.getByRole("button", { name: "Match" }).click();
    await expect(homeSection).toBeHidden();
    await expect(playSection).toBeHidden();
    await expect(matchSection).toBeVisible();
  });
});
