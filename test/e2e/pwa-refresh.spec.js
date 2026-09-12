import { expect, test } from "@playwright/test";

test.describe("PWA refresh smoke", () => {
  test("registers service worker and keeps update hooks for refresh behavior", async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName !== "chromium",
      "Service worker lifecycle assertions are scoped to Chromium smoke for now.",
    );

    await page.goto("/");

    const registrationInfo = await page.evaluate(async () => {
      if (!("serviceWorker" in navigator)) return { supported: false };
      const registration = await navigator.serviceWorker.ready;
      await registration.update();
      return {
        supported: true,
        scope: registration.scope,
        hasActive: Boolean(registration.active),
        activeUrl: registration.active?.scriptURL || "",
        hasWaiting: Boolean(registration.waiting),
      };
    });

    expect(registrationInfo.supported).toBe(true);
    expect(registrationInfo.hasActive).toBe(true);
    expect(registrationInfo.activeUrl).toContain("/sw.js");

    await page.reload();
    await page.waitForFunction(() => {
      return Boolean(navigator.serviceWorker?.controller);
    });

    const swSource = await page.request.get("/sw.js");
    expect(swSource.ok()).toBe(true);
    const body = await swSource.text();
    expect(body).toContain("CACHE_NAME");
    expect(body).toContain("SKIP_WAITING");
    expect(body).toContain("self.skipWaiting");
  });
});
