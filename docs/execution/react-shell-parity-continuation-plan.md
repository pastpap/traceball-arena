# React Shell Parity Continuation Plan

> Continuation of `docs/execution/hybrid-elm-react-shell-plan.md` (Milestones 0-5 Done, Slice 27 readiness green).
> Stefan's finding: the React shell at `/` and `/react` is functionally incomplete (no Boards list, no
> disconnect-recovery control) and visually unrelated to the polished `/elm` shell it replaced as default.
> This plan closes functional gaps first, then visual parity, in small reversible slices.

**Non-negotiables carried forward unchanged:**
- Server remains authoritative.
- Elm owns board/game correctness; React owns product shell.
- `/elm` rollback route must keep working through every slice.
- Tests before implementation.
- `public/styles.css` is shared by both shells — see "Shared-CSS editing discipline" below; treat it as a standing
  rule for every visual slice, not a one-time checklist.

## Shared-CSS editing discipline (applies to every slice from 32 onward)

1. Never edit the property list of an existing Elm-used rule (`.hero`, `.board-stage`, `.pause-overlay`,
   `.score-strip`, `.popup-menu`, `.sheet-*`, `.dialog-*`, `.winner-card`, etc.).
2. New React-only surfaces get genuinely new class names (`react-shell-*`, `react-boards-list-item`), not
   near-duplicates of existing names.
3. Where React reuses an Elm class verbatim (see per-surface table below), reproduce the internal child order
   Elm relies on (e.g. `score-name.blue-name` + `score-spacer` + `score-name.red-name` + ...), not just the
   class name.
4. Any override that must differ for React is a compounded, additively-named class
   (`.dialog-card.react-shell-dialog-card`), never a modification of the shared selector.
5. Capture the `/elm` visual baseline (Slice 31) before the first shared-CSS-touching slice (32) lands, and
   re-run the `/elm` leg of that baseline after every subsequent CSS-touching slice.

## Per-surface CSS reuse table (from Elm Frontend review)

| Surface | Treatment | Adjacency risk |
|---|---|---|
| Hero/home | Reuse verbatim | None — self-contained |
| Score-strip / seat-actions | Reuse verbatim | None — self-contained |
| Popup-menu / sheet nav | Reuse verbatim | None — self-contained |
| Rules/history dialog chrome | Reuse verbatim (retire `react-shell-modal*` or explicitly keep as accepted divergence — product call) | None |
| Pause/winner overlay | Reuse verbatim, **only** inside `ElmBoard`'s `.board-stage` wrapper | High — coupled to `#board` id + `.board-stage.paused` ancestor |
| Boards list | Fork new `react-shell-*` names | N/A — no real Elm target exists (dead CSS today) |
| Share/invite panel | Reuse verbatim | None — self-contained |

---

## Slice 28: Free disconnected seat (CRITICAL — invariant gap, ship first)

**Objective:** Close the State-Architect-flagged gap: a disconnected opponent past the 60s grace window
currently has no "Make seat available" control anywhere in the React shell, so a ghost player can block
a board indefinitely.

**Files:**
- Modify: `src/react/App.jsx` (new `handleFreeSeatAction`, alongside existing `handlePauseAction` etc.)
- Modify: `src/react/components/MatchPanel.jsx` (render "Make seat available" when `canBeFreed === true`)
- Test: `test/react-free-seat-controls.test.js` (new, mirrors `react-pause-resume-controls.test.js`)
- Test: extend `test/e2e/hybrid-shell.spec.js` or new `test/e2e/react-free-seat.spec.js`

**Test first (unit):**
- Control renders only when `players[opponentSeat].status === "disconnected"` AND `canBeFreed === true`
  from the snapshot; absent when `canBeFreed === false` or seat is `"vacant"`/`"active"`.
- Clicking sends exactly `{ type: "freeSeat", seatId }` on the existing connection.

**Test first (e2e):** two-context test — disconnect one seated player (kill socket), wait past 60s grace
(or use existing test time-control pattern from `realtime-websocket-flow.test.js`), opponent clicks
"Make seat available" → seat becomes vacant, opponent awarded the point, session archived, board stays
joinable.

**Acceptance:** matches `board-state-machine.md` "Disconnect rules" exactly; no protocol/backend change
needed (`server.js:307` already implements `freeSeat`).

**Commit:** `git commit -m "fix: add free-disconnected-seat control to React match panel"`

---

## Slice 29: Boards tab + BoardsPanel.jsx (functional gap, decision-gated)

**Objective:** Close the "no Boards list exists" gap (Milestone 4 Task 4.2 debt) — **with an explicit
decision on Slice 28's sibling risk (Critical #2 from State Architect) resolved before writing the Open
handler.**

**Decision required (pick one, record in the slice's PR description):**
- (a) Boards-tab "Open" does a real navigation (`window.location.assign`), matching Elm's `<a href>`
  exactly — simplest, sidesteps the single-connection-singleton risk entirely.
- (b) Kept in-SPA, but guarded: if `ownSeat` is occupied and `isActiveSession(liveSnapshot)` is true,
  show a confirm ("Leave your current seat first, or switching boards will disconnect you") before
  dispatching `setCurrentBoardCode`.

**Files:**
- Create: `src/react/components/BoardsPanel.jsx`
- Modify: `src/react/App.jsx` (add `"boards"` to `navTabs`, mount `BoardsPanel`)
- Test: `test/react-boards-panel.test.js` (new)
- Test: `test/e2e/react-boards-panel.spec.js` (new, mirrors `home-boards.spec.js` intent for `/react`)
- Extend: `test/react-mobile-navigation.test.js` (Boards-tab visibility/single-tab-active cases)

**Test first (unit, `test/react-boards-panel.test.js`):**
- Renders one card per `fetchBoardList` entry; empty list shows an explicit "no boards" state, not blank.
- Clicking Open/Watch reuses the already-tested `startWatching`/`setCurrentBoardCode` seam and sends
  **no** `claimSeat`/`joinWaitingList` frame (independent assertion from the URL-arrival path already
  covered in `react-open-board-from-url.test.js` — boards-list-arrival is a different code path).
- Refresh re-invokes `fetchBoardList` (assert call count increments).
- Delete renders **only** when `board.isOwner === true`; absent (not just disabled) otherwise.
- Delete on a 403 surfaces the server's exact error text as a toast.
- Whichever Slice-29 decision is chosen (real nav vs. guard), assert it explicitly — this is the
  regression pin for State Architect's Critical #2.

**Test first (e2e, `test/e2e/react-boards-panel.spec.js`):**
- Create board as Blue on `/react`, open Boards tab, refresh, confirm card + occupancy text.
- Open from the card → confirm watcher-only (no auto-claim), matching invariant #4/#5.
- Second context, different clientId: confirm delete unavailable for non-owner, available for owner,
  card disappears after delete.
- Expired/removed board code → expired-state UI, not a crash/infinite spinner.

**Acceptance:** `isOwner` consumed from the already-server-computed `/api/rooms` flag (no client-side
ownership recomputation); watch/open path never claims a seat or waiting-list slot; Slice-29 decision
(real nav vs. guard) is implemented and pinned by a test.

**Commit:** `git commit -m "feat: add React boards list panel and Boards tab"`

---

## Slice 30: Extract HomePanel.jsx (pure refactor, Milestone 4 Task 4.1 debt)

**Objective:** Move the inline Home section (mode choice, player name, online setup, Create Board) out of
`App.jsx` into its own component — no behavior change.

**Files:**
- Create: `src/react/components/HomePanel.jsx`
- Modify: `src/react/App.jsx`
- Test: `test/react-home-shell.test.js` (new — was planned in Milestone 4, never written)

**Test first:** before-refactor characterization test asserting current Home behavior (name persists,
mode toggle, Create Board dispatch) passes against the still-inline version; then the same test suite
passes unchanged after extraction.

**Acceptance:** `useEffect` dependency arrays around `state.currentBoardCode`/`state.clientId` in
`App.jsx` (~830, ~857) are preserved verbatim — a naive extraction that recreates `startWatching`
callbacks per render could retrigger the reconnect effect unnecessarily (State Architect minor note).
Add a regression test asserting the reconnect effect does not re-fire on unrelated Home-state changes.

**Commit:** `git commit -m "refactor: extract React HomePanel from App.jsx"`

---

## Slice 31: `/elm` visual regression baseline (must precede any shared-CSS edit)

**Objective:** Capture a committed Chromium screenshot baseline of the **`/elm` rollback shell** before
any shared `public/styles.css` edits land, so later slices have something to diff against.

**Files:**
- Convert: `test/e2e/screenshot-smoke.js` from an orphaned helper into a real spec:
  `test/e2e/react-elm-visual-parity.spec.js`
- Baselines committed under `test/e2e/__screenshots__/`

**Test first:** `expect(page).toHaveScreenshot(name, { maxDiffPixelRatio })` per surface, **per shell**
(not a `/react`-vs-`/elm` diff — they're allowed to look different mid-build-out). Surfaces: home hero,
mid-game board with score-strip, paused overlay, winner overlay, popup-menu open, rules/history dialog
open. Chromium-project only (WebKit unavailable in this sandbox, same Slice-27 blocker — tag accordingly,
don't block merge on it).

**Acceptance:** `/elm` baselines exist and pass on a clean run; `scripts/check-static.js` gains a guard
that new/renamed classes for React work don't collide with existing `.elm-*`-prefixed selectors.

**Commit:** `git commit -m "test: add per-shell visual regression baseline"`

---

## Slice 32: Home/hero visual parity

**Objective:** Replace `HomePanel.jsx`'s ad hoc inline styles with Elm's `hero`/`hero-brand`/`hero-title`/
`hero-board-code`/`hero-actions`/`hero-game-status`/`hero-turn-state` classes, reproducing Elm's child
order exactly.

**Files:** Modify `src/react/components/HomePanel.jsx`.
**Test:** extend `test/react-home-shell.test.js` with class-presence assertions; re-run Slice 31's
`/elm` baseline (must be unchanged, since `hero` is reuse-only, no edits to the rule itself).
**Acceptance:** no literal debug copy remains ("Client Identity" raw clientId, "Active Tab" indicator);
visually matches `/elm`'s home hero.
**Commit:** `git commit -m "style: adopt Elm hero classes for React home panel"`

---

## Slice 33: Match/score-strip + seat-actions visual parity

**Objective:** Replace `MatchPanel.jsx`'s generic label/value card grid with `score-strip`/`scoreboard`/
`score-name`/`score-number`/`score-dash`/`seat-actions` classes.

**Files:** Modify `src/react/components/MatchPanel.jsx`.
**Test:** extend `test/react-match-panel.test.js`; re-run `/elm` baseline (unchanged expected).
**Acceptance:** seat/pause/waiting-list/new-round controls remain role/state-gated exactly as today
(no behavior change, styling only); `/elm` baseline diff is zero.
**Commit:** `git commit -m "style: adopt Elm score-strip and seat-actions classes for Match panel"`

---

## Slice 34: Popup-menu / sheet mobile nav parity

**Objective:** Rework `AppMenu.jsx` (absolute dropdown) and `MobileNav.jsx` (plain button grid) into
Elm's `popup-menu` + `sheet-overlay`/`sheet-card`/`sheet-handle`/`sheet-header`/`sheet-items` pattern.

**Files:** Modify `src/react/components/AppMenu.jsx`, `src/react/components/MobileNav.jsx`.
**Test:** extend `test/react-mobile-navigation.test.js`, `test/react-menu-history.test.js`.
**Acceptance:** touch targets remain ≥44px (QA mobile checklist); reduced-motion policy
(`react-motion-policy.test.js`) still passes; `/elm` baseline diff is zero.
**Manual check (per QA recommendation — do this per-slice, not deferred):** 5-minute real-phone pass on
current iOS Safari + Android Chrome for the new sheet/popup interaction.
**Commit:** `git commit -m "style: adopt Elm popup-menu and sheet nav pattern for React mobile nav"`

---

## Slice 35: Rules/history dialog parity + retire-or-keep decision

**Objective:** Decide and implement: retire `react-shell-modal*` (styles.css:2541-2598) in favor of
Elm's `dialog-overlay`/`dialog-card`/`dialog-header`/`dialog-body` chrome + `rules-list*`/`history-*`
content classes, **or** explicitly document that React's modal intentionally differs (bottom-anchored vs.
Elm's full overlay) as an accepted product decision. Do not let the two systems silently coexist without
a decision recorded either way.

**Files:** Modify `src/react/components/RulesPanel.jsx`, `src/react/components/HistoryPanel.jsx`;
if retiring, remove the now-unused `react-shell-modal*` rules from `public/styles.css` (a deletion of
React-only rules, not an edit to any Elm-used rule — safe under the shared-CSS discipline).

**Test:** extend `test/react-menu-history.test.js`; re-run `/elm` baseline.
**Acceptance:** decision recorded in the slice's PR description either way; History panel's own
"UI scaffolding only" disclaimer is either removed (if replay lands) or left honestly in place —
do not silently drop the disclaimer without also landing real replay controls.
**Commit:** `git commit -m "style: reconcile React rules/history dialogs with Elm chrome"`

---

## Slice 36: Board-local pause/winner overlay (highest-risk slice — Elm + React)

**Objective:** Give the React shell an on-board pause/winner visual. Per Elm Frontend review, **neither
shell's board island renders this today** — this is new work, not "reuse what Elm already has."

**Decision required (record in PR description):**
- (a) Extend `BoardIsland.elm` with visual-only flags (`isPaused: Bool`, `pauseTurnText: Maybe String`,
  `winnerName: Maybe String`) through the existing snapshot port; `ElmBoard.jsx`'s host wrapper gets
  `board-stage`/`paused` classes so the existing `.board-stage.paused #board` blur rule fires for free.
  Keeps "board-local overlay = Elm's job" true in code. Higher cost (Elm build + port change).
- (b) React renders its own `pause-overlay`/`winner-overlay` divs as siblings of `<ElmBoard/>` inside a
  `<div className="board-stage">` wrapper it controls, reusing the CSS verbatim. Lower cost, faster,
  but blurs the board-island ownership boundary the plan doc describes.

**Files (option a):** `src/elm/BoardIsland.elm`, `elm.json`/`scripts/build-elm.js` if the port shape
changes, `src/react/components/ElmBoard.jsx`.
**Files (option b):** `src/react/components/ElmBoard.jsx`, `src/react/App.jsx` (new overlay markup),
no Elm changes.

**Test first:** unit test asserting the pause/winner visual appears/disappears based on `snapshot.game.status`
and `pause` fields already present in every state broadcast; e2e test seating two players, pausing,
confirming the blurred-board + pause-card visual renders, then confirming it clears on resume; same for
a scored round → winner-card visual → New Round clears it.
**Acceptance:** control (pause/resume/new-round buttons) stays in `MatchPanel.jsx` per the plan's
ownership split regardless of which option is chosen — only the **visual acknowledgement** moves;
`/elm` baseline diff is zero (option a must not change `Main.elm`'s existing rendering; option b touches
no shared Elm code at all).
**Commit:** `git commit -m "feat: add board-local pause/winner overlay to hybrid shell"`

---

## Slice 37: Boards list visual design (net-new, not parity — sequenced last)

**Objective:** Give `BoardsPanel.jsx` (Slice 29, functional-only) a real visual design. Per Elm Frontend
correction, there is no existing Elm board-card visual to clone — this is new design work using a forked
`react-shell-*`/`react-boards-list-item` class, not a parity task.

**Files:** Modify `src/react/components/BoardsPanel.jsx`; add new (not reused) classes to `public/styles.css`.
**Test:** extend `test/react-boards-panel.test.js` with visual/structure assertions; add to the
`react-elm-visual-parity.spec.js` baseline as a `/react`-only surface (no `/elm` equivalent to diff against).
**Acceptance:** new class names do not collide with `.board-card`/`.lobby-board-card`/`.elm-board-card`.
**Commit:** `git commit -m "style: design React boards list cards"`

---

## Slice 38: Share/invite panel visual parity (can run parallel to 35 or 37)

**Objective:** Replace `ShareControls.jsx`'s ad hoc styles with Elm's `invite`/`invite-actions`/
`invite-copy-panel` classes.

**Files:** Modify `src/react/components/ShareControls.jsx`.
**Test:** extend `test/react-share-controls.test.js`; re-run `/elm` baseline.
**Commit:** `git commit -m "style: adopt Elm invite classes for React share controls"`

---

## Final gates (re-run after Slice 38, matching the original plan doc's gate)

```bash
npm run test
npm run build
npm run test:e2e
```

Plus, specific to this continuation:
- `/elm` visual baseline (Slice 31 harness) shows **zero diff** across all slices that touched shared CSS.
- Manual mobile pass **per visual-parity slice** (32–36, per QA recommendation), not deferred to one
  end-of-epic pass; one additional **consolidated** pass at the very end for cross-slice interaction
  effects only (e.g. does the new popup-menu visually collide with the new score-strip).
- Update `docs/execution/hybrid-react-readiness.md` with a new "Slice 38 parity evidence" section, and
  update `README.md`'s "Elm rewrite and repo agents" section to drop the now-stale "Home/Boards/Play/Match"
  claim once the Boards tab actually exists on `/react` too (currently only true for `/elm`).
