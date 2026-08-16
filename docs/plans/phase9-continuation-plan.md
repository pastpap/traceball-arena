# Traceball Phase 9 Continuation Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Continue Phase 9 toward visual/product parity while keeping the game board-centric. Push completed slices directly to `elm-rewrite` unless Stefan explicitly asks for branches/PRs again.

**Architecture:** The current default shell is rendered by `public/elm.js` and tested by `test/elm-shell-runtime.test.js`. Each slice should begin with a failing runtime/static test, implement the smallest UI/runtime change, run `npm test`, `npm run build`, and a local HTTP/WebSocket smoke before pushing directly to `elm-rewrite`. Keep online server state authoritative; local same-screen runtime can be isolated in the shell until it is promoted to shared game helpers.

**Tech Stack:** Node.js, Express, WebSocket `ws`, Vitest, static HTML/CSS/JS in `public/`, checked-in Elm shell fallback.

---

## Current Phase 9 status

Completed in PR branch `phase9-home-boards-match`:

- Home has a generic persisted `playerNameInput` using `traceballPlayerName`.
- Home has explicit Online/Local setup controls.
- Local same-screen setup scaffold exists with player names and timer selector.
- The current online board is visible in the Boards tab immediately after create/join, and the Boards tab can still be replaced by `/api/rooms` results.
- Home restores share affordances for the active board: invite link, copy button, and QR code.
- Play is focused on board/replay/leave; join/waiting/session details live in Match.
- Task 1 Board HUD/orientation is implemented: Play shows board code, viewer role, turn, connection state, and a `data-elm-orientation` marker.

## Play tab parity reminders

When reaching full Play tab parity with the legacy JS version, do not forget:

- Reuse existing assets and animations rather than replacing them with plain placeholders.
- Keep the win modal/overlay after a win, including a clear button to start a new match/round.
- Add countdown timers into/onto the board surface like the JS version, not only as side-panel text.
- Render player names and the current session score in the board surface itself so the board remains self-contained.
- Keep Play board-centric: these overlays belong on/around the board; lobby/join/watch details still belong in Home/Boards/Match.

## Guardrails

- Keep Traceball board-centric: Play should not become a lobby/details dumping ground.
- Do not mix online and local flows in the same visible card; use Home mode switching.
- Do not reintroduce a generic ambiguous “Join Game” action.
- Persist generic shared inputs once; do not create separate hidden name inputs for each action.
- Prefer one-shot/fade feedback over continuous pulsing.
- Keep iPad Air 2 / iOS 15 compatibility in mind: conservative CSS, no fragile modern-only APIs without fallback.
- Add/update tests before implementation for every behavior change.

---

## Task 1: Board HUD and orientation polish

**Objective:** Make turn, role, player side, and board context obvious without moving match details back into Play.

**Files:**
- Modify: `test/elm-shell-runtime.test.js`
- Modify: `public/elm.js`
- Modify if needed: `public/styles.css`
- Modify if needed: `scripts/check-static.js`

**Step 1: Write failing test**

Add a Vitest case that renders:

```js
const model = { ...shell.applyState(shell.initialModel(), fixture('board-active-session')), ownSeat: 'p1' };
const html = shell.renderModel(model);
const playSection = html.slice(html.indexOf('class="board-card mobile-page active"'), html.indexOf('<aside class="side mobile-page"'));
expect(playSection).toContain('data-elm-board-hud');
expect(playSection).toContain('You are Blue');
expect(playSection).toContain('Turn:');
expect(playSection).toContain('data-elm-orientation="blue"');
```

**Step 2: Verify RED**

Run:

```bash
npx vitest run test/elm-shell-runtime.test.js -t "Board HUD"
```

Expected: FAIL because HUD markers do not exist.

**Step 3: Implement minimally**

Add a pure render helper in `public/elm.js`, e.g. `renderBoardHud(model)`, and place it above `.board-stage`. It should show:

- board code
- viewer role (`You are Blue`, `You are Red`, `Watching`, or `Waiting list`)
- current turn
- concise connection state

**Step 4: Verify GREEN**

Run:

```bash
npx vitest run test/elm-shell-runtime.test.js -t "Board HUD"
npm test
npm run build
```

**Step 5: Commit**

```bash
git add public/elm.js public/styles.css scripts/check-static.js test/elm-shell-runtime.test.js docs/plans/phase9-continuation-plan.md
git commit -m "feat: add Phase 9 board HUD orientation"
```

---

## Task 2: One-shot turn/move feedback

**Objective:** Add non-distracting feedback when a move is pending/confirmed or the turn changes.

**Files:**
- Modify: `test/elm-shell-runtime.test.js`
- Modify: `public/elm.js`
- Modify: `public/styles.css`

**Step 1: Write failing test**

Test that pending legal moves render a one-shot feedback marker without continuous pulse classes:

```js
const model = { ...shell.applyState(shell.initialModel(), fixture('board-active-session')), ownSeat: 'p1', pendingMoveKey: '4,5' };
const html = shell.renderModel(model);
expect(html).toContain('data-elm-pending-move="4,5"');
expect(html).toContain('elm-legal-pending');
expect(html).not.toContain('infinite');
```

**Step 2: Verify RED**

Run the targeted Vitest test and confirm failure for the missing feedback/CSS assertion.

**Step 3: Implement minimally**

Use CSS animation that runs once (`animation-iteration-count: 1` or shorthand without `infinite`). Keep it subtle.

**Step 4: Verify GREEN**

Run targeted test, `npm test`, and `npm run build`.

**Step 5: Commit**

```bash
git add public/elm.js public/styles.css test/elm-shell-runtime.test.js
git commit -m "feat: add one-shot move feedback"
```

---

## Task 3: Online move timer display and command payload sanity

**Objective:** Surface configured move timers in UI and ensure create-room uses the selected online timer.

**Files:**
- Modify: `test/elm-shell-runtime.test.js`
- Modify: `public/elm.js`

**Step 1: Write failing tests**

Add tests for:

- `createBoardAsBlue` sends selected `moveTimeLimitSeconds`.
- Home online timer selector persists the chosen value or uses the selected value during create.
- Match/Play displays a timer label when `board.currentSession.round.deadlineAt` or timer metadata is present.

**Step 2: Verify RED**

Run targeted tests and confirm they fail for missing display/persistence.

**Step 3: Implement minimally**

Keep server authoritative. The client should display timer metadata and send requested room settings, not enforce online rules locally.

**Step 4: Verify GREEN**

Run targeted tests, `npm test`, `npm run build`, and local smoke creating a timed room.

**Step 5: Commit**

```bash
git add public/elm.js test/elm-shell-runtime.test.js
git commit -m "feat: surface online move timer settings"
```

---

## Task 4: Local same-screen runtime slice

**Objective:** Make the Local Home setup start an actual same-device game with basic state, pause/resume placeholder backed by localStorage, and board rendering reuse.

**Files:**
- Modify: `test/elm-shell-runtime.test.js`
- Modify: `public/elm.js`
- Modify: `public/styles.css`
- Optional create: `test/local-runtime.test.js` if extracting pure helpers

**Step 1: Extract testable helpers first**

Before DOM wiring, add pure helper tests for:

- creating local model from player names and timer
- serializing/restoring saved local model
- rejecting malformed saved local model
- applying a legal local move

**Step 2: Verify RED**

Run targeted helper tests and confirm missing functions fail.

**Step 3: Implement minimal helpers**

Keep helpers small and independent from DOM. Reuse board geometry/rendering where possible.

**Step 4: Wire Home Local submit**

`#localForm` should render a local board model instead of only showing a toast. Pause/resume can save/restore local model to localStorage.

**Step 5: Verify GREEN**

Run helper tests, shell tests, full test suite, build, and local browser smoke.

**Step 6: Commit**

```bash
git add public/elm.js public/styles.css test/elm-shell-runtime.test.js test/local-runtime.test.js
git commit -m "feat: start local same-screen Traceball runtime"
```

---

## Task 5: iPad/mobile visual smoke and cache/version handoff

**Objective:** Make sure mobile layout remains usable and deployment clients receive updated assets.

**Files:**
- Modify: `scripts/check-static.js`
- Modify if needed: `public/styles.css`
- Modify if needed: `public/sw.js`

**Step 1: Write/update static checks**

Assert:

- mobile nav keeps four grouped tabs
- Play card does not include join/waiting controls
- Home contains invite link/QR only when a board exists
- service worker cache version changes when app shell markup changes materially

**Step 2: Verify RED if adding a new guard**

Temporarily target missing markers before implementation, then update code.

**Step 3: Verify**

Run:

```bash
npm test
npm run build
```

Then perform a manual/device smoke where available.

**Step 4: Commit**

```bash
git add public/styles.css public/sw.js scripts/check-static.js
git commit -m "test: guard Phase 9 mobile shell parity"
```

---

## Final verification before PR handoff

Run:

```bash
npm test
npm run build
PORT=4179 npm start
```

In a separate terminal or script:

```bash
curl -fsS http://127.0.0.1:4179/elm >/dev/null
curl -fsS http://127.0.0.1:4179/elm.js | grep 'playerNameInput'
node scripts-or-inline-smoke-that-creates-room-and-connects-ws.js
```

PR handoff must include:

- PR URL
- test/build results
- local smoke result
- whether GitHub checks exist/pass
- explicit note that the PR remains open for user review/merge
