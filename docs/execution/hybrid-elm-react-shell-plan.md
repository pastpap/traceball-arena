# Hybrid Elm Board + React Product Shell Implementation Plan

> **For Hermes / VS Code squad agents:** Use the repo-local squad with orchestrator-first routing. Implement one small vertical slice at a time with tests before behavior changes.

**Goal:** Hybridize Traceball so Elm remains responsible for board/game correctness while React owns the high-churn product shell: home, boards list, match details, menus, rules/history, sharing, and mobile navigation.

**Architecture:** Keep the Node/Express/WebSocket backend authoritative. Keep Elm as an island for deterministic board/replay rendering and board-local messages. Add a React shell mounted at `/` that owns app/product UI and embeds the Elm board island through a typed bridge. Keep the existing full-Elm frontend reachable as a rollback route during migration.

**Tech Stack:** Node.js, Express, WebSocket `ws`, Elm 0.19.1, React + Vite or equivalent lightweight bundler, Vitest, Playwright.

---

## Baseline / branching recommendation

Start from a clean, green baseline:

1. Merge `feature/full-elm-ui-replace` into `elm-rewrite` after CI/local gates pass.
2. Create a new branch from updated `elm-rewrite`:

   ```bash
   git checkout elm-rewrite
   git pull --ff-only origin elm-rewrite
   git checkout -b feature/elm-board-react-product-shell
   ```

3. Keep the full-Elm frontend available as rollback during the hybrid work, for example `/elm` or `/full-elm`.
4. Do not remove full-Elm shell code until React shell reaches parity gates.

If merging to `elm-rewrite` would trigger staging and you do not want the full-Elm Phase 1 baseline deployed, create an intermediate integration branch instead:

```bash
git checkout -b integration/hybrid-base feature/full-elm-ui-replace
git checkout -b feature/elm-board-react-product-shell
```

But preferred path is still: green Phase 1 -> merge to `elm-rewrite` -> branch hybrid.

---

## Non-negotiable architecture rules

- Server remains authoritative for online play.
- React must not compute online legal moves, winners, timeout authority, seat authority, or lifecycle authority.
- Elm board island receives board/replay state and renders board/game surface.
- React product shell owns navigation, cards, menus, panels, board list, sharing, settings, and responsive shell layout.
- Browser effects stay explicit: WebSocket, localStorage, clipboard, URL, service worker, and fetch boundaries should live in typed bridge/shell modules, not scattered through React components.
- Keep rollback route working until hybrid parity is proven.
- Every slice adds or updates tests before implementation.

---

## Target ownership split

### Elm owns

- Board SVG/canvas rendering.
- Legal move target rendering.
- Replay board rendering.
- Board orientation for seated online players.
- Board-local overlays that depend directly on game state: ball, moves, winner/pause/timer display when rendered on-board.
- Optional: local deterministic same-screen game logic until/unless separated later.

### React owns

- Home / Online setup / Local setup shell.
- Boards list and refresh UI.
- Match details panel.
- Rules and history panels.
- Share/copy/QR affordances.
- Burger/menu/mobile navigation.
- Timer selection controls.
- Toasts and non-board notifications.
- Route state and shell layout.

### Backend owns

- Room creation/list/delete.
- Seat claim/free/waiting list/leave.
- Online moves and timers.
- Pause/resume/new round permissions.
- Public board state projection.

---

## Milestone 0: baseline verification

### Task 0.1: Verify Phase 1 baseline

**Objective:** Confirm the branch is green before hybrid work starts.

**Commands:**

```bash
git status --short --branch
npm run test
npm run build
```

**Expected:**

- Working tree clean.
- Vitest passes.
- Static build passes.
- If Elm compiler is unavailable locally, CI must compile Elm before merge.

**Commit:** none if only verifying.

---

## Milestone 1: create React shell beside existing Elm shell

### Task 1.1: Add React/Vite dependencies and scripts

**Objective:** Add a minimal React build pipeline without changing routes yet.

**Files:**

- Modify: `package.json`
- Create: `vite.config.js` or equivalent
- Create: `src/react/main.jsx`
- Create: `src/react/App.jsx`
- Create: `src/react/styles.css` if needed
- Modify/create tests for static build contract

**Test first:** add a static test/check asserting the future React source entry exists and build script is declared.

**Commands:**

```bash
npm install react react-dom @vitejs/plugin-react vite
npm run test
npm run build
```

**Acceptance:** React source compiles to a separate output directory such as `public/react/` or `dist/react/`, but the served app still uses existing Elm routes.

**Commit:**

```bash
git add package.json package-lock.json vite.config.js src/react scripts test
git commit -m "chore: add React shell build pipeline"
```

### Task 1.2: Serve React shell on a new route

**Objective:** Add a non-default route, e.g. `/react`, for the new shell.

**Files:**

- Modify: `src/server.js`
- Create: `public/react.html` or generated HTML route handling
- Test: `test/fallback-routes.test.js`

**Test first:** assert `/react` returns a React mount root and does not break `/` or `/elm`.

**Acceptance:**

- `/` still serves current full-Elm default.
- `/elm` still serves current full-Elm default/rollback.
- `/react` serves React shell.
- `/room/:roomId` behavior unchanged.

**Commit:**

```bash
git commit -m "feat: serve React shell beside Elm shell"
```

---

## Milestone 2: extract browser/realtime bridge for React shell

### Task 2.1: Create shell API client modules

**Objective:** Move fetch/WebSocket/localStorage behavior behind explicit modules React can call.

**Files:**

- Create: `src/react/lib/storage.js`
- Create: `src/react/lib/api.js`
- Create: `src/react/lib/socket.js`
- Test: `test/react-shell-bridge.test.js`

**Functions:**

- `getOrCreateClientId()`
- `getStoredPlayerName()`
- `persistPlayerName(name)`
- `getStoredOnlineMoveTimer()`
- `persistOnlineMoveTimer(seconds)`
- `fetchBoardList(clientId)`
- `createBoard({ clientId, moveTimeLimitSeconds })`
- `deleteBoard({ roomId, clientId })`
- `connectBoardSocket({ roomId, clientId, onMessage, onStatus })`

**Test first:** pure storage and API URL construction tests; fake fetch/WebSocket for bridge behavior.

**Acceptance:** Existing `public/elm.js` still works; React has its own bridge modules.

**Commit:**

```bash
git commit -m "feat: add React shell browser bridge modules"
```

### Task 2.2: Add typed shell state reducer

**Objective:** Give React an explicit reducer for product shell state without duplicating game authority.

**Files:**

- Create: `src/react/state/shellReducer.js`
- Test: `test/react-shell-state.test.js`

**State should include:**

- `clientId`
- `playerName`
- `connectionStatus`
- `currentBoardCode`
- `boardState` as latest server snapshot
- `boardList`
- `mainTab` / mobile page state
- `mode`: online/local
- `toast`
- `historyPanel` / `rulesPanel` visibility

**Acceptance:** Reducer handles shell-only events and stores server snapshots; it does not implement online game rules.

**Commit:**

```bash
git commit -m "feat: add React shell state reducer"
```

---

## Milestone 3: embed Elm board island in React

### Task 3.1: Build a minimal Elm board-island contract

**Objective:** Define the smallest Elm API React needs to render a board/replay.

**Files:**

- Create or modify: `src/elm/BoardIsland.elm`
- Modify: `elm.json`
- Modify: `scripts/build-elm.js`
- Test/static check: `scripts/check-static.js`

**Input:** board/replay state through flags or ports.

**Output:** board-local commands only, e.g. move click events.

**Acceptance:** A separate generated island bundle can be built while full-Elm app remains available.

**Commit:**

```bash
git commit -m "feat: add Elm board island entrypoint"
```

### Task 3.2: Create React `ElmBoard` component

**Objective:** Mount the Elm board island from React and pass board state into it.

**Files:**

- Create: `src/react/components/ElmBoard.jsx`
- Test: `test/react-elm-board.test.js`

**Test first:** mount component with fake `window.Elm.BoardIsland.init`; assert init flags and port subscription behavior.

**Acceptance:** React can render a fake board state into Elm island on `/react` without changing gameplay routes.

**Commit:**

```bash
git commit -m "feat: embed Elm board island in React shell"
```

---

## Milestone 4: rebuild product shell in React, one surface at a time

### Task 4.1: React Home shell

**Objective:** React owns Online/Local mode choice, shared player name, and online timer selection.

**Files:**

- Create: `src/react/components/HomePanel.jsx`
- Test: `test/react-home-shell.test.js`

**Acceptance:** shared player name persists once; local/online cards do not mix controls.

**Commit:**

```bash
git commit -m "feat: add React home shell"
```

### Task 4.2: React Boards list

**Objective:** React owns board list fetch/refresh/open/delete UI.

**Files:**

- Create: `src/react/components/BoardsPanel.jsx`
- Test: `test/react-boards-panel.test.js`

**Acceptance:** shows active boards from `/api/rooms`; open/watch does not auto-claim seats; delete only appears for owner.

**Commit:**

```bash
git commit -m "feat: add React boards panel"
```

### Task 4.3: React Match details panel

**Objective:** React owns seat actions, waiting list, free disconnected seat, pause/resume, new round, leave/forfeit controls.

**Files:**

- Create: `src/react/components/MatchPanel.jsx`
- Test: `test/react-match-panel.test.js`

**Acceptance:** controls are role/state-specific and dispatch intent commands only.

**Commit:**

```bash
git commit -m "feat: add React match details panel"
```

### Task 4.4: React menu/history/rules/share shell

**Objective:** React owns app menu, rules panel, history panel, share/copy/QR UI, and toasts.

**Files:**

- Create: `src/react/components/AppMenu.jsx`
- Create: `src/react/components/HistoryPanel.jsx`
- Create: `src/react/components/RulesPanel.jsx`
- Create: `src/react/components/ShareControls.jsx`
- Test: `test/react-menu-history.test.js`

**Acceptance:** menu opens lightweight choices; rules/history open in bounded panels; no long content dumped into burger dropdown.

**Commit:**

```bash
git commit -m "feat: add React menu history rules and sharing"
```

---

## Milestone 5: route cutover with rollback

### Task 5.1: Add hybrid route smoke tests

**Objective:** Prove React shell can create/open/watch/join/move using real HTTP + WebSocket while Elm renders board island.

**Files:**

- Create/modify: `test/e2e/hybrid-shell.spec.js`
- Modify: `test/realtime-websocket-flow.test.js` only if protocol changes are required

**Acceptance:** at least one local server smoke covers: create room, claim seats, move, pause/resume, board list refresh, route reload/rejoin behavior.

**Commit:**

```bash
git commit -m "test: add hybrid shell smoke coverage"
```

### Task 5.2: Make `/react` candidate default behind a reversible flag or route swap

**Objective:** Prepare default route cutover without deleting full-Elm rollback.

**Files:**

- Modify: `src/server.js`
- Modify: `README.md`
- Modify: `docs/architecture/realtime-protocol-phase1.md` if protocol docs changed

**Acceptance:**

- `/` can serve React hybrid shell.
- `/elm` or `/full-elm` still serves full-Elm rollback.
- old invite links still route to `/?board=<code>`.
- Service worker cache version bumped.

**Commit:**

```bash
git commit -m "feat: make hybrid shell the default route with Elm rollback"
```

---

## Final gates before merging hybrid work

Run:

```bash
npm run test
npm run build
npm run test:e2e
```

Manual smoke:

- Desktop current browser: create board, join second client, move, pause/resume, leave/forfeit.
- Mobile current phone: same flow plus navigation/menu/share.
- PWA/service worker refresh after cache bump.
- Old iPad/iOS 15 best-effort only, unless current devices also fail.

PR / merge notes:

- Keep PR draft if rollback route is missing.
- Keep PR draft if React shell cannot complete create/join/move flow.
- Keep PR draft if full-Elm fallback is broken.
- Explicitly list any remaining non-parity gaps.

---

## VS Code squad prompting guide

Use the orchestrator first. Then assign specialists only after the orchestrator returns a slice plan.

### Prompt 1 — Orchestrator: make execution board

```text
You are traceball-orchestrator. Read:
- docs/execution/hybrid-elm-react-shell-plan.md
- README.md
- docs/architecture/board-state-machine.md
- docs/architecture/realtime-protocol-phase1.md
- .github/agents/squad.agent.md

Goal: prepare the first hybridization execution board for feature/elm-board-react-product-shell.

Constraints:
- Server remains authoritative.
- Elm remains board/game correctness island.
- React owns product shell only.
- Keep full-Elm rollback route working.
- Use TDD: test first, implement second.

Output:
1. The first 3 implementation slices only.
2. Exact files each slice may touch.
3. The test command for each slice.
4. Which specialist agent should implement/review each slice.
Do not modify files yet.
```

### Prompt 2 — Realtime backend: boundary review before coding

```text
You are traceball-realtime-backend. Review the hybrid plan before implementation.

Read:
- docs/execution/hybrid-elm-react-shell-plan.md
- src/game.js
- src/server.js
- docs/architecture/board-state-machine.md
- docs/architecture/realtime-protocol-phase1.md

Question: What server/protocol boundaries must React not cross?

Output:
- Commands React may send.
- State React may display.
- State React must not compute.
- Tests that must stay green.
- Any protocol changes needed for hybrid shell.
Do not modify files.
```

### Prompt 3 — Elm frontend: board island design

```text
You are traceball-elm-frontend. Design the Elm board island extraction.

Read:
- docs/execution/hybrid-elm-react-shell-plan.md
- src/elm/Main.elm
- src/elm/Board/View.elm
- src/elm/Board/Types.elm
- src/elm/Board/Decode.elm
- src/elm/Protocol.elm

Goal: propose the smallest Elm board island that React can mount.

Constraints:
- Preserve board/replay correctness.
- Do not move online authority into Elm.
- Avoid rewriting the board renderer.
- Keep full-Elm app working during migration.

Output:
1. Proposed Elm entrypoint/module names.
2. Flags/ports contract between React and Elm.
3. Which code can be reused unchanged.
4. Which tests/static checks should be added first.
Do not modify files.
```

### Prompt 4 — QA/mobile: parity gates

```text
You are traceball-qa-mobile. Create the hybrid shell QA checklist.

Read:
- docs/execution/hybrid-elm-react-shell-plan.md
- docs/execution/qa-evidence-checklist.md
- test/e2e/main-playing-flows.spec.js
- test/e2e/reconnect-regressions.spec.js

Goal: define automated and manual evidence required before `/` can switch to React hybrid shell.

Output:
- Required Vitest tests.
- Required Playwright/e2e tests.
- Manual desktop smoke.
- Manual mobile smoke.
- PWA/cache checks.
- Rollback checks.
Do not modify files.
```

### Prompt 5 — Implementation slice prompt template

Use this for each small slice after the orchestrator approves it:

```text
You are [SPECIALIST_AGENT]. Implement Slice [N]: [slice name].

Read first:
- docs/execution/hybrid-elm-react-shell-plan.md
- [specific files listed by orchestrator]

Scope:
- Touch only: [file list]
- Do not change online game authority.
- Keep `/` and `/elm` working unless this slice explicitly changes routes.
- Keep full-Elm rollback route working.

TDD steps:
1. Write the failing test first.
2. Run the targeted test and show the failure.
3. Implement the smallest change.
4. Run the targeted test and show it passing.
5. Run `npm run test` and `npm run build` if this slice touches build/server/runtime routes.
6. Summarize changed files and any risks.

Do not continue to the next slice.
```

### Prompt 6 — Reviewer prompt after each slice

```text
You are [REVIEWER_AGENT]. Review Slice [N]: [slice name].

Original slice requirements:
[paste requirements]

Review against:
- docs/execution/hybrid-elm-react-shell-plan.md
- server authority rules
- rollback route requirement
- board-centric UI requirements

Output:
- Verdict: APPROVED or REQUEST_CHANGES
- Spec gaps
- Authority/boundary issues
- Test gaps
- Suggested fixes
Do not modify files unless explicitly asked.
```
