import { expect } from "@playwright/test";

export async function safeClose(target) {
  if (!target) return;
  try {
    await target.close();
  } catch {
    // Ignore teardown failures when the browser target is already gone.
  }
}

async function isVisible(locator) {
  try {
    return await locator.isVisible();
  } catch {
    return false;
  }
}

export async function showHomeIfNeeded(page) {
  const nameInput = page.getByRole("textbox", { name: "Your name" });
  if (await isVisible(nameInput)) return;

  const setupTab = page.getByRole("button", { name: "Setup" });
  if (await isVisible(setupTab)) {
    await setupTab.click();
    if (await isVisible(nameInput)) return;
  }

  const homeTab = page.locator('.mobile-tab[data-page-target="invite"]');
  if (await isVisible(homeTab)) {
    await homeTab.click();
    await expect(nameInput).toBeVisible();
    return;
  }

  const lobbyButton = page.getByRole("button", { name: "Lobby" });
  if (await isVisible(lobbyButton)) {
    await lobbyButton.click();
  }

  await expect(nameInput).toBeVisible();
}

export async function showBoardsIfNeeded(page) {
  const refreshButton = page.locator("#refreshBoards");
  if (await isVisible(refreshButton)) return;

  const boardsButton = page.getByRole("button", { name: "Boards" });
  if (await isVisible(boardsButton)) {
    await boardsButton.click();
    if (await isVisible(refreshButton)) return;
  }

  const boardsTab = page.locator('.mobile-tab[data-page-target="boards"]');
  if (await isVisible(boardsTab)) {
    await boardsTab.click();
    await expect(refreshButton).toBeVisible();
    return;
  }

  const lobbyButton = page.getByRole("button", { name: "Lobby" });
  if (await isVisible(lobbyButton)) {
    await lobbyButton.click();
    await expect(boardsButton).toBeVisible();
  }

  if (await isVisible(boardsButton)) {
    await boardsButton.click();
  }

  await expect(refreshButton).toBeVisible();
}

export async function showMatchIfNeeded(page) {
  const leaveButton = page
    .getByRole("button", { name: /Leave|Leave game/i })
    .first();
  const joinRedButton = page.getByRole("button", { name: "Join Red" }).first();
  const resumeButton = page
    .getByRole("button", { name: "Resume game" })
    .first();

  if (
    (await isVisible(leaveButton)) ||
    (await isVisible(joinRedButton)) ||
    (await isVisible(resumeButton))
  ) {
    return;
  }

  const matchTab = page.locator('.mobile-tab[data-page-target="match"]');
  if (await isVisible(matchTab)) {
    await matchTab.click();
  }
}

export async function showPlayIfNeeded(page) {
  const boardStage = page.locator(".board-stage");
  if (await isVisible(boardStage)) return;

  const playTab = page.locator('.mobile-tab[data-page-target="play"]');
  if (await isVisible(playTab)) {
    await playTab.click();
    await expect(boardStage).toBeVisible();
    return;
  }

  const openGameButton = page.getByRole("button", { name: "Open Game" });
  if (await isVisible(openGameButton)) {
    await openGameButton.click();
  }

  await expect(boardStage).toBeVisible();
}

export async function openBoard(page, boardCode, name = "Player") {
  await page.goto(`/?board=${boardCode}`);
  await expect(page).toHaveURL(new RegExp(`\\?board=${boardCode}$`));
  await expect(page.locator("body")).toContainText(boardCode);

  const nameInput = page.getByRole("textbox", { name: "Your name" });
  if (await isVisible(nameInput)) {
    await nameInput.fill(name);
  }
}

export async function createBoardAsBlue(page, name = "P1") {
  await page.goto("/");
  await showHomeIfNeeded(page);
  await page.getByRole("textbox", { name: "Your name" }).fill(name);

  const timerSelect = page.locator("#onlineMoveTimer");
  if (await isVisible(timerSelect)) {
    await timerSelect.selectOption("5");
  }

  await page.getByRole("button", { name: "Create board as Blue" }).click();
  await expect(page).toHaveURL(/\?board=/);

  const boardCode = new URL(page.url()).searchParams.get("board");
  expect(boardCode).toBeTruthy();

  const openGameNow = page.getByRole("button", { name: "Open game now" });
  if (await isVisible(openGameNow)) {
    await openGameNow.click({ force: true });
  }

  await expect(page.locator("body")).toContainText(boardCode);

  return boardCode;
}

export async function joinRed(page, name = "P2") {
  await showMatchIfNeeded(page);

  const nameInput = page.getByRole("textbox", { name: "Your name" });
  if (await isVisible(nameInput)) {
    await nameInput.fill(name);
  }

  const joinButton = page.getByRole("button", { name: "Join Red" });
  await expect(joinButton).toBeVisible();
  await joinButton.click({ force: true });
  await expect(joinButton).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: /Leave|Leave game/i }).first(),
  ).toBeVisible();
}

export async function fetchRoomSummary(page, baseURL, boardCode) {
  const response = await page.request.get(`${baseURL}/api/rooms`);
  expect(response.ok()).toBe(true);
  const payload = await response.json();
  return payload.rooms.find((room) => room.roomId === boardCode);
}
