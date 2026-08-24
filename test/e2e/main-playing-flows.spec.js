import { expect, test } from '@playwright/test';

async function createBoardAsBlue(page, name = 'P1') {
  await page.goto('/');
  await page.locator('#playerNameInput').fill(name);
  await page.locator('#onlineMoveTimer').selectOption('5');
  await page.locator('#elmCreateBoard').click();
  await expect(page.locator('#playStatus')).toContainText(/Board /);
  await expect(page.locator('.hero-board-role')).toContainText('You are Blue');
  const url = new URL(page.url());
  const boardCode = url.searchParams.get('board');
  expect(boardCode).toBeTruthy();
  return boardCode;
}

async function openBoard(page, boardCode, name) {
  await page.goto(`/?board=${boardCode}`);
  await expect(page.locator('#playStatus')).toContainText(`Board ${boardCode}`);
  const nameInput = page.locator('#elmPlayerName');
  if (await nameInput.count()) await nameInput.fill(name);
}

async function joinRed(page, name = 'P2') {
  const nameInput = page.locator('#elmPlayerName');
  if (await nameInput.count()) await nameInput.fill(name);
  await page.locator('#claimP2, #playClaimP2').first().click();
  await expect(page.locator('.hero-board-role')).toContainText('You are Red');
  await expect(page.locator('#status')).toContainText(/Turn: Blue|Board .* active|Active/i);
}

test.describe('main realtime playing flows', () => {
  test('same-client board reopen does not let an old socket disconnect P1 or blank the board', async ({ browser, baseURL }) => {
    const p1Context = await browser.newContext();
    const p2Context = await browser.newContext();
    const p1 = await p1Context.newPage();
    const p2 = await p2Context.newPage();
    const p1Dialogs = [];
    p1.on('dialog', async (dialog) => {
      p1Dialogs.push(dialog.message());
      await dialog.dismiss();
    });
    p2.on('dialog', async (dialog) => dialog.accept());

    try {
      const boardCode = await createBoardAsBlue(p1, 'P1');
      await openBoard(p2, boardCode, 'P2');
      await joinRed(p2, 'P2');
      await expect(p1.locator('#playStatus')).toContainText(`Board ${boardCode}`);

      const p1Reopen = await p1Context.newPage();
      await openBoard(p1Reopen, boardCode, 'P1');
      await expect(p1Reopen.locator('.hero-board-role')).toContainText('You are Blue');
      await p1.close();

      await expect(p1Reopen.locator('.board-stage')).toBeVisible();
      await expect(p1Reopen.locator('#playStatus')).toContainText(`Board ${boardCode}`);
      await expect(p2.locator('#status')).toContainText(/P1|Blue/);
      await expect(p2.locator('#status')).not.toContainText(/Waiting for players/i);

      await p2.locator('#playLeaveSeat, #leaveSeat').first().click();
      await expect(p1Reopen.locator('#claimP2, #playClaimP2').first()).toBeVisible();
      await expect(p1Reopen.locator('.hero-board-role')).toContainText('You are Blue');
      expect(p1Dialogs).toEqual([]);

      const response = await p1Reopen.request.get(`${baseURL}/api/rooms`);
      const rooms = (await response.json()).rooms;
      const room = rooms.find((item) => item.roomId === boardCode);
      expect(room.occupancy.p1).toBe('active');
      expect(room.occupancy.p2).toBe('vacant');
    } finally {
      await p1Context.close();
      await p2Context.close();
    }
  });

  test('idle timeout pause keeps both players on the board and only the timed-out player can resume', async ({ browser }) => {
    const p1Context = await browser.newContext();
    const p2Context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
    const p1 = await p1Context.newPage();
    const p2 = await p2Context.newPage();
    try {
      const boardCode = await createBoardAsBlue(p1, 'P1');
      await openBoard(p2, boardCode, 'P2');
      await joinRed(p2, 'P2');

      await expect(p1.locator('#pauseOverlay')).toHaveClass(/visible/, { timeout: 13_000 });
      await expect(p2.locator('#pauseOverlay')).toHaveClass(/visible/);
      await expect(p1.locator('.board-stage')).toBeVisible();
      await expect(p2.locator('.board-stage')).toBeVisible();
      await expect(p1.locator('#playStatus')).toContainText(`Board ${boardCode}`);
      await expect(p2.locator('#playStatus')).toContainText(`Board ${boardCode}`);

      await expect(p1.locator('#resumeGame, [data-elm-command="resume"]')).toHaveCount(0);
      await expect(p2.locator('#resumeGame, [data-elm-command="resume"]')).not.toHaveCount(0);
    } finally {
      await p1Context.close();
      await p2Context.close();
    }
  });
});
