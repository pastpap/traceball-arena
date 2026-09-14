import { expect, test } from "@playwright/test";
import { safeClose } from "./helpers/elm-shell.js";

async function createBoardFromReact(page, name = "P1") {
  await page.goto("/react");
  await page.getByRole("textbox", { name: "Player name" }).fill(name);
  await page.getByRole("button", { name: "Create Board" }).click();
  await expect(page).toHaveURL(/\/react\?board=/);
  const boardCode = new URL(page.url()).searchParams.get("board");
  expect(boardCode).toBeTruthy();
  await expect(page.locator("svg#board")).toBeVisible();
  return boardCode;
}

async function openReactBoard(page, boardCode, name = "P2") {
  await page.goto(`/react?board=${boardCode}`);
  await expect(page).toHaveURL(new RegExp(`/react\\?board=${boardCode}$`));
  await page.getByRole("textbox", { name: "Player name" }).fill(name);
}

async function fetchRoomSummary(page, baseURL, boardCode, clientId = "") {
  const suffix = clientId
    ? `?clientId=${encodeURIComponent(clientId)}`
    : "";
  const response = await page.request.get(`${baseURL}/api/rooms${suffix}`);
  expect(response.ok()).toBe(true);
  const payload = await response.json();
  return payload.rooms.find((room) => room.roomId === boardCode);
}

test.describe("React hybrid playable smoke", () => {
  test("/react create watch claim and move path reaches an authoritative active session", async ({
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

    try {
      const boardCode = await createBoardFromReact(p1, "P1");

      await expect
        .poll(async () => {
          const room = await fetchRoomSummary(p1, baseURL, boardCode, "p1-owner");
          return room
            ? {
                state: room.state,
                p1: room.players?.p1?.status,
                p2: room.players?.p2?.status,
                moveCount: room.moveCount,
              }
            : null;
        })
        .toEqual({
          state: "WaitingForPlayers",
          p1: "vacant",
          p2: "vacant",
          moveCount: 0,
        });

      await expect(p1.getByRole("button", { name: "Claim Blue" })).toBeVisible();
      await expect(p1.getByRole("button", { name: "Claim Red" })).toBeVisible();
      await p1.getByRole("button", { name: "Claim Blue" }).click();

      await expect
        .poll(async () => {
          const room = await fetchRoomSummary(p1, baseURL, boardCode);
          return room
            ? {
                state: room.state,
                p1: room.players?.p1?.status,
                p2: room.players?.p2?.status,
                moveCount: room.moveCount,
              }
            : null;
        })
        .toEqual({
          state: "OneSeatOccupied",
          p1: "active",
          p2: "vacant",
          moveCount: 0,
        });

      await openReactBoard(p2, boardCode, "P2");
      await expect(p2.getByRole("button", { name: "Claim Red" })).toBeVisible();
      await expect(p2.getByRole("button", { name: "Claim Blue" })).toHaveCount(0);

      await p2.getByRole("button", { name: "Claim Red" }).click();

      await expect
        .poll(async () => {
          const room = await fetchRoomSummary(p1, baseURL, boardCode);
          return room
            ? {
                state: room.state,
                p1: room.players?.p1?.status,
                p2: room.players?.p2?.status,
                moveCount: room.moveCount,
              }
            : null;
        })
        .toEqual({
          state: "SessionActive",
          p1: "active",
          p2: "active",
          moveCount: 0,
        });

      const firstMove = p1.locator('[data-elm-legal-context="own-turn"]').first();
      await expect(firstMove).toBeVisible();
      const moveKey = await firstMove.getAttribute("data-elm-legal-move");
      expect(moveKey).toBeTruthy();

      await firstMove.click({ force: true });

      await expect
        .poll(async () => {
          const room = await fetchRoomSummary(p1, baseURL, boardCode);
          return room?.moveCount ?? -1;
        })
        .toBe(1);

      await expect(
        p1.locator(`[data-elm-legal-context="own-turn"][data-elm-legal-move="${moveKey}"]`),
      ).toHaveCount(0);
      await expect
        .poll(async () => p2.locator('[data-elm-legal-context="own-turn"]').count())
        .toBeGreaterThan(0);
    } finally {
      await safeClose(p1Context);
      await safeClose(p2Context);
    }
  });
});
