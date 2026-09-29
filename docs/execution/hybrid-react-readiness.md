# Hybrid React Shell — Rollback & Readiness Evidence

Slice 27. Snapshot taken on 2026-09-30, branch `feature/elm-board-react-product-shell`, commit `fe6188a` (this slice's changes are on top, uncommitted at time of writing — see "Changes in this slice" below).

Purpose: give explicit, run-and-recorded evidence that (a) the React shell is safely the default route, (b) the full-Elm `/elm` rollback still works end to end, and (c) the backend/protocol layer is untouched, before this branch goes to staging review.

## 1. Route-level rollback

Verified by `test/fallback-routes.test.js` (spawns a real `node src/server.js` process and hits it with `fetch`, no mocks):

| Route | Expected | Verified by |
| --- | --- | --- |
| `/` | React shell (`#react-root`, `/react-build/main.js`) | "serves React hybrid shell on /" |
| `/react` | Same React shell, byte-identical to `/` | "serves the same React hybrid shell on /react" + "keeps / and /react on the same React shell contract" |
| `/?board=ROOM123` | Still React shell (board param preserved for default route) | "serves the React shell contract on /?board=ROOM123" |
| `/elm` | Full Elm shell (`#elm-root`, `/elm-runtime.js`, `/elm.js`) | "serves Elm rollback shell on /elm" |
| `/elm?board=ROOM123` | Full Elm shell, board query preserved | "serves the same Elm rollback shell contract on /elm?board=ROOM123" |
| `/room/:roomId` | 302 → `/?board=<code>` (old invite links land in React default) | "redirects /room/:roomId to the React default shell board query" |
| `/elm/room/:roomId` | 302 → `/elm?board=<code>` (rollback invite links stay in Elm) | "redirects /elm/room/:roomId to the Elm rollback board query" |
| `/legacy`, `/legacy/room/:roomId` | 404 | "does not expose removed /legacy routes" |

Result: **11/11 passed** (see command output below). `/elm` rollback is explicitly protected by its own dedicated assertions, independent of the `/` and `/react` assertions.

## 2. Asset-level rollback

Added in this slice — previously only the React bundle had a live-fetch test; the Elm runtime/bridge had none.

- `test/fallback-routes.test.js` → new test **"serves the generated Elm runtime and bridge assets from the running server"**: fetches `/elm-runtime.js` (200, contains compiled-Elm marker `_Platform_export`) and `/elm.js` (200, contains bridge marker `mountElmRuntime`) from the live server.
- `scripts/check-static.js` → now also reads `public/elm-runtime.js` at build time and asserts it contains `_Platform_export`, so a broken/empty Elm build fails `npm run build`, not just at runtime.
- Pre-existing: `scripts/check-static.js` already asserted `/elm.html` references `/elm-runtime.js` and `/elm.js`, and `/react.html` references `/react-build/main.js`.

## 3. Protocol-level smoke (backend WebSocket)

No backend/game-authority files were touched this slice (`src/server.js`, `src/game.js`, `src/elm/*` are all untouched — confirmed via `git status` below). Ran the existing backend WebSocket suite unchanged:

- `test/realtime-websocket-flow.test.js` — 6/6 passed, including idle-timeout pause/resume, duplicate-socket reconnect, and same-client rejoin flows against a real spawned server + real `ws` client sockets.
- `test/room-state.test.js`, `test/game.test.js` — 17/17 and 22/22 passed (pure game-rule/room-lifecycle unit coverage, unaffected by routing).

## 4. Hybrid smoke (create → open → claim → move → observe)

`test/e2e/hybrid-shell.spec.js` → **"React hybrid playable smoke"**: real two-browser-context Playwright run against the live dev server —

1. Create board from `/react` as P1.
2. Poll `/api/rooms` and confirm `WaitingForPlayers`.
3. Claim Blue as P1, confirm `OneSeatOccupied`.
4. Open the same board from a second context as P2, claim Red, confirm `SessionActive`.
5. P1 sends a legal move; poll `/api/rooms` and confirm `moveCount` increments to 1 and the move target disappears from P1's legal-move set while appearing in P2's.

This exercises the full backend authority path (seat claim → session activation → move validation → move broadcast) through the new default React shell. Passed both times it was run this slice (see command output below).

`test/e2e/hybrid-shell.spec.js` → **"React default route cutover"** (added Slice 26, re-verified here): `/` mounts `#react-root` and the old `/room/ROOM123` link redirects into it; `/elm` mounts real Elm-rendered content (`Watch board` button) with zero `#react-root` leakage, before and after `/elm/room/ROOM123`.

## 5. PWA / cache

- `public/sw.js` cache bumped to `traceball-arena-v44` (Slice 26 follow-up fix also removed a dead `/index.html` precache entry that was silently failing `cache.addAll` and uninstalling the service worker on every route — see prior slice's remediation notes).
- `APP_SHELL` includes both shells' assets: `/`, `/react`, `/react.html`, `/react-build/main.js`, `/board-island-runtime.js`, `/elm`, `/elm.html`, `/elm-runtime.js`, `/elm.js`, plus shared assets (`styles.css`, `history.js`, `icon.svg`, `manifest.webmanifest`).
- Fetch-handler fallback candidates are shell-specific (`/elm` requests fall back to `/elm`/`/elm.html`, `/react` requests fall back to `/react`/`/react.html`), so an offline `/elm` request cannot silently resolve to the React shell.
- `scripts/check-static.js` statically enforces all of the above (cache name present, both shells' assets listed, shell-specific fallback regexes present) — build fails if any of this drifts.
- `src/react/main.jsx` registers the service worker (Slice 26 follow-up fix — previously only `public/elm.js` did, so the service worker never activated on the new default route). Confirmed via `test/e2e/pwa-refresh.spec.js` (not in this slice's required run list, but was re-verified in the prior remediation round: passes on chromium).

## Commands run and results (this slice)

```
$ npm run test -- test/fallback-routes.test.js
Test Files  1 passed (1)
     Tests  11 passed (11)

$ npm run test
Test Files  21 passed | 2 skipped (23)
     Tests  180 passed (180)

$ npm run build
Elm source compile check passed.
Elm runtime bundle generated at public/elm-runtime.js.
Elm BoardIsland runtime bundle generated at public/board-island-runtime.js.
vite build ✓ 40 modules transformed, public/react-build/main.js 439.02 kB (gzip 99.83 kB)
Static build checks passed.

$ npm run test:e2e -- test/e2e/hybrid-shell.spec.js --project=chromium
3 passed (2.1s)
```

Full `npm run test:e2e` (all four configured Playwright projects — chromium, webkit, mobile-chromium-shape, mobile-webkit-shape) was also attempted:

```
$ npx playwright test test/e2e/hybrid-shell.spec.js
6 passed (chromium + mobile-chromium-shape)
6 failed (webkit + mobile-webkit-shape): browserType.launch: Executable doesn't exist at .../webkit-2336/pw_run.sh
```

**Blocker, documented per instructions:** this sandbox only has the Chromium browser binary installed (`npx playwright install chromium` was run in a prior slice). WebKit is not installed here, so the `webkit` and `mobile-webkit-shape` Playwright projects cannot execute locally — every failure is `browserType.launch: Executable doesn't exist`, not a test assertion failure. All Chromium-family projects (`chromium`, `mobile-chromium-shape`) pass 3/3 tests each (6/6 total). Fix: run `npx playwright install` (full) in an environment with network access to the Playwright CDN, or rely on CI, before treating WebKit coverage as green.

## Manual checks still required (current phone/desktop)

Automated coverage above proves routing, asset serving, protocol correctness, and one full create→claim→move→observe hybrid loop on Chromium desktop + a Chromium-based mobile viewport shape. It does **not** replace hands-on verification of:

- **Real iOS Safari (current iOS)** — actual WebKit engine, not just Playwright's `mobile-webkit-shape` emulation (which couldn't run in this sandbox anyway). Verify: `/` loads the React shell, install-to-home-screen PWA flow, and that `/elm` is still reachable by typing it manually.
- **Real Android Chrome (current)** — home-screen install prompt, offline reload behavior after the `v44` cache bump (old clients should not get stuck on a stale cached shell).
- **Current desktop Safari** — not covered by any Playwright project in this config; only Chromium and WebKit-engine emulation are configured.
- **Reduced-motion / accessibility spot check** on a real device for the React shell's mobile navigation (automated `react-motion-policy.test.js` covers the policy in isolation, not real-device rendering).
- **Manual `/elm` rollback walkthrough on a real phone**: create a board, claim a seat, play a few moves, confirm pause/resume and new-round still work identically to before the cutover. Automated coverage (`main-playing-flows.spec.js`, `reconnect-regressions.spec.js`, `match-tab.spec.js` — all repointed to `/elm` in the prior remediation round) exercises this on Chromium only.
- **QR/share flow on a real phone camera** for both a freshly created board and an `/elm`-rollback-created board.

## Old iPad / iOS 15

Remains **best-effort only**, consistent with existing project policy (see `README.md`'s manual smoke guidance carried over from prior slices). No automated coverage targets iOS 15 or original iPad hardware; do not block staging on it, but note any manual findings here if tested.

## No backend authority changes

Confirmed for this slice: `src/game.js`, `src/server.js`, and `src/elm/*` are unmodified (`git status` shows only `scripts/check-static.js`, `test/fallback-routes.test.js`, this new doc, and a README note touched). All server-side game rules, seat/timer/pause authority, and Elm board/game logic are byte-identical to before this slice.

## Files touched this slice

- `test/fallback-routes.test.js` — added the Elm runtime/bridge live-asset rollback test.
- `scripts/check-static.js` — added a build-time content assertion for `public/elm-runtime.js`.
- `docs/execution/hybrid-react-readiness.md` — this document.
- `README.md` — short pointer to this readiness doc (see "Elm rewrite and repo agents" section).
