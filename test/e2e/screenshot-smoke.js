const { test, expect } = require("@playwright/test");

async function captureScenario(page, name) {
  await page.screenshot({
    path: `test-results/screenshots/${name}.png`,
    fullPage: true,
  });
}

async function captureHome(page) {
  await page.goto("/");
  await page.locator("#playerNameInput").waitFor({ state: "visible" });
  await captureScenario(page, "qa-home");
}

async function captureBoards(page) {
  await page.goto("/");
  await page.locator("#playerNameInput").fill("QA");
  await page.locator("#elmCreateBoard").click();
  await page.locator("#playStatus").waitFor({ state: "visible" });
  await captureScenario(page, "qa-boards");
}

async function captureMatch(page) {
  await page.goto("/");
  await page.locator("#playerNameInput").fill("QA");
  await page.locator("#elmCreateBoard").click();
  await page.locator(".mobile-tab[data-page-target='match']").click();
  await page.locator(".match-info-content").waitFor({ state: "visible" });
  await captureScenario(page, "qa-match");
}

async function captureWinner(page) {
  await page.goto("/");
  await page.locator("#localMode").click();
  await page.locator("#localP1Name").fill("Blue");
  await page.locator("#localP2Name").fill("Red");
  await page.locator("#startLocal").click();
  const moveSelector =
    '[data-elm-legal-context="own-turn"] [data-elm-legal-move]';
  for (let i = 0; i < 10; i += 1) {
    const move = page.locator(moveSelector).first();
    if (await move.count()) {
      await move.click();
    }
  }
  await page.locator("#winnerOverlay").waitFor({ state: "visible" });
  await captureScenario(page, "qa-winner");
}

module.exports = {
  captureHome,
  captureBoards,
  captureMatch,
  captureWinner,
  captureScenario,
};
