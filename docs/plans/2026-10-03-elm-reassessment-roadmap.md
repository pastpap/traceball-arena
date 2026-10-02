# Elm Reassessment and Verification-First Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Strengthen executable Elm behavior coverage before making any further architectural changes, then remove one clear pure adapter from Main.

**Architecture:** Main remains the TEA composition root: Model, concrete Msg, init/update/subscriptions, ports, navigation, permissions, and application action construction. Pure rules/codecs are tested directly. Node remains authoritative for online gameplay and lifecycle. Renderers remain generic over msg; no child-update architecture is introduced.

**Tech Stack:** Elm 0.19.1, elm-ui, Node/WebSocket, Vitest, elm-test on a supported Linux runner, Railway staging.

---

## Inspected baseline — 2026-10-03

Branch: `feature/full-elm-ui-replace`; inspected code revision: `7e61491`.
Working tree was clean at inspection. This document is planning only; proposed tasks have not been implemented.

- `src/elm/Main.elm`: 2,210 lines (original baseline: 5,086).
- `src/elm/Game/Screen.elm`: 1,068 lines.
- `src/elm/View/Layout.elm`: 101 lines.
- `src/elm/View/Header.elm`: 239 lines.
- `src/elm/Local/Game.elm`: 389 lines.
- Main's `update` begins at line 390; the view section begins at line 1048. The update area is substantial, but size alone does not justify relocating it.
- Main still adapts local/online/history state into screen contracts, selects permitted actions, and owns app/menu/timer routing. Those responsibilities are legitimate orchestration.
- Clear pure extraction candidate: `localGameToBoard : LocalGame -> Board`, at lines 2132–2210. It depends on Local.Game and Board.Types, not Main.Model, Msg, or ports.
- `elm.json` has empty test-dependency sections. No `.elm` test files were found in the repository, and no `.github/workflows` files were present.
- `test/local-runtime.test.js` and `test/history.test.js` are skipped placeholders claiming tests live in an Elm suite. That suite is absent. Do not count these placeholders as behavioral coverage.

### Closed previous roadmap

The 2026-10-02 plan's compiler checkpoint, E9 dialogs/menu/rules/history, E10 timer controls/sheet, and E11 headers/tabs/mobile/desktop layouts are complete. Latest completed slice: E11g, `7e61491`.

Latest slice handoff reported 47 modularization guards, 118 passing Vitest tests, two skipped test files, and 27 modules compiled on Railway with deployed runtime lineage verified. Those are historical checkpoint results, not fresh execution evidence from this planning task. Device interaction smoke for subsequent E9–E11 slices remains unconfirmed; the earlier user-confirmed checkpoint does not automatically cover them.

## Reassessment decisions

1. Close the peripheral-view extraction phase. Do not chase a Main line-count target.
2. Prioritize executable Elm rule/codec tests. Source guards check boundaries and wiring; compiler success checks types; neither proves rule outcomes.
3. Extract the pure local-to-board adapter only after the test runner and local-rule coverage are established.
4. Reassess Game.Screen after that. Its mixed concerns and broad exposing list warrant inspection, not an immediate wholesale split.
5. Defer update/Msg splitting, Model relocation, seat-ownership helper extraction, status-text reshaping, and styling micro-extractions. These have greater coupling or lower payoff.
6. No new features, React parity restart, animation libraries, production cutover, or client-side online authority in this phase.

## Common code-slice delivery procedure

Every code slice is one independently reviewable commit pushed to `feature/full-elm-ui-replace`.

1. Inspect existing behavior and callers. Write one failing behavioral test or boundary guard for the intended change; run it and confirm the specific failure.
2. Implement the smallest change; no behavior redesign. For characterization of already-correct behavior, do not change production logic to manufacture a red test: prove the runner/assertion path fails with a temporary incorrect expectation, then restore it and record the check.
3. Run targeted Elm tests and boundary tests, then:
   ```sh
   npm run test -- test/elm-modularization-guard.test.js
   node scripts/check-static.js
   npm run test
   npm run build
   git diff --check
   ```
4. Run `npm run test:elm` in the supported environment once Task E12a adds that script. A skipped runner, missing compiler, fallback build, or zero discovered tests must not pass this gate.
5. Review the diff; stage only the slice files; commit and push. Compare local HEAD with `git ls-remote origin refs/heads/feature/full-elm-ui-replace`.
6. Require real Elm compilation of the candidate revision. Verify Railway build logs, active deployed revision, container/public runtime hashes, and health before declaring deployed completion.
7. Keep compiler/assets/unit/static evidence distinct from desktop/phone interaction smoke. Stop for a real compiler, test-runner, or deployment blocker; do not silently replace Elm tests with JavaScript reimplementations.

## Task E12a — Establish an executable Elm test gate

**Objective:** Prove actual Elm assertions execute and fail correctly on a supported Linux runner.

**Files:**
- Modify: `package.json`, `package-lock.json`, `elm.json`.
- Create: `tests/Shared/TimerTest.elm`.
- Create: `.github/workflows/elm-tests.yml`.
- Modify: `test/local-runtime.test.js`, `test/history.test.js` comments only to describe the precise coverage status; do not imply rules/history are covered by the initial timer fixture.
- Update: this roadmap with the chosen tool versions and execution evidence.

**Steps:**
1. Inspect `src/elm/Shared/Timer.elm` and choose one exported deterministic normalization case. Inspect supported elm-test/compiler versions rather than guessing them.
2. Install and lock a compatible elm-test dev dependency; add required Elm test dependencies. Define `test:elm` as `elm-test` (local installed binary, not an unpinned npx download).
3. Write an Elm test importing the actual Shared.Timer function. Temporarily assert an incorrect expected result and verify a nonzero test exit; restore the correct assertion and rerun.
4. Add a Linux CI job targeting this branch and relevant pull requests: checkout, supported Node setup, `npm ci`, `npm run test:elm`, `npm run build`. The compiler/test runner must be required for this job, not a fallback. Avoid ARM/Termux unsupported binary assumptions.
5. Execute the workflow on the exact pushed revision and read back its conclusion/logs. A valid alternative for diagnosis is supported Debian/proot tooling, but a local proposal alone does not establish a recurring CI gate.
6. Correct the skipped-file comments to acknowledge the newly established runner and still-pending local/history coverage.

**Acceptance:** At least one real Elm assertion runs; intentional assertion failure produces nonzero exit; restored test passes; supported CI executes the exact revision successfully. Do not remove the skipped placeholders merely to make test totals look cleaner.

**Commit:** `test: establish executable Elm test gate`.

## Task E12b — Characterize Local.Game transitions

**Objective:** Test existing local rules directly before further movement.

**Files:** Create `tests/Local/GameTest.elm`; inspect `src/elm/Local/Game.elm` and `src/elm/Local/Types.elm`. Production changes require a separately identified bug, not a refactor pretext.

**Steps:**
1. Read all exposed functions and existing Node rule tests. Derive expected fixtures from the current Elm implementation and established game requirements, not from similarly named server code alone.
2. Add start-game/normal-move/illegal-move cases. Assert ball, turn, move count, and legal-move consequences.
3. Add bounce/goal/terminal-round cases with explicit small fixtures. Assert winner, score, end reason, and no further mutation after completion.
4. Add timer-disabled/deadline-boundary/expiry/restart cases. Characterize consecutive and same-player timeout bookkeeping and automatic pause-related state without changing its owner in Main.
5. Split rule groups into separate pushed checkpoints if fixtures become large. Record covered behaviors, not just test counts.

**Acceptance:** Tests import Local.Game, execute compiled Elm, and verify full transition outputs relevant to each fixture. Where pause policy lives in Main rather than Local.Game, document the uncovered seam rather than claiming unit coverage of it.

**Commit:** `test: characterize Elm local game transitions` (or narrower per group).

## Task E12c — Characterize persistence/history codecs

**Objective:** Protect restored local games and history replay data against codec regressions.

**Files:** Create `tests/Local/CodecTest.elm`, `tests/History/CodecTest.elm`; inspect `src/elm/Local/Codec.elm`, `src/elm/History/Codec.elm`, and both Types modules.

**Steps:**
1. Inventory exposed encoders/decoders and their current accepted formats/default behavior.
2. Add local-game round-trip cases including scores, moves, timer fields, and terminal state. Assert all semantically persisted fields, allowing intentional nonpersisted fields only when documented.
3. Add history fixture/round-trip cases for the current format, empty collections, invalid/missing values, and compatibility defaults actually supported by the decoder.
4. Verify malformed JSON follows the existing error/fallback contract; do not broaden accepted formats during characterization.

**Acceptance:** Actual Elm decoder/encoder behavior is tested; malformed and supported compatibility paths are explicit. UI history index/cap and replay navigation remain separate integration concerns.

**Commit:** `test: characterize Elm persistence codecs` (local/history may be separate slices).

## Task E13 — Extract the pure local-to-board display adapter

**Objective:** Remove the clearest remaining non-orchestration helper from Main without moving action selection.

**Files:**
- Create: `src/elm/Local/BoardAdapter.elm`, `tests/Local/BoardAdapterTest.elm`.
- Modify: `src/elm/Main.elm`, `test/elm-modularization-guard.test.js`.

**Proposed public contract:**
```elm
module Local.BoardAdapter exposing (toBoard)

-- Imports and existing conversion body move from Main unchanged.
-- No Main import, Model, Msg, ports, commands, or view rendering.
toBoard : LocalGame -> Board
```

**Steps:**
1. Capture the existing conversion body's output contract: LOCAL code, board/session/round state, occupied named seats, legal moves, score, move/version count, deadline, winner/end reason, and empty watcher/waiting lists.
2. Add a failing boundary guard requiring the new module and absence of `localGameToBoard` in Main; add active/terminal/timed-game adapter test fixtures.
3. Move the existing function unchanged, rename only the public entry to `toBoard`, and replace every root caller with `LocalBoardAdapter.toBoard`.
4. Remove unused imports only where the moved body was their last caller. Review winner-key/history-replay call sites as well as local screen construction.
5. Run all common gates and focused local/replay/timer/winner staging checks.

**Acceptance:** Pure adapter has no dependency on Main; active and terminal mappings are identical; Main still builds concrete screen actions and chooses online/local/history behavior.

**Commit:** `refactor: extract Elm local board adapter`.

## Task E14 — Conditional Game.Screen responsibility review

**Objective:** Decide whether a split would improve navigation and coupling, not merely lower line counts.

**Inspect:** `src/elm/Game/Screen.elm`, all imports/callers, and guards.

Current groups include replay/round summaries; pause/winner overlays; shared actions; responsive shells/top-card/match-panel/stage; and HUD widgets. Several leaf helpers are exported despite being presentation details. Do not replace one catch-all with generic Utils.

1. Inventory actual external consumers of every exposed symbol and internal dependency directions.
2. Evaluate replay rendering as the first candidate: `Game/Replay.elm` could own `ReplayActions`, HTML replay controls, round summary, and mobile replay card/helpers if this avoids cycles and preserves styling dependencies.
3. Retain only a justified public API. If common types must move, plan that independently; do not create mutually importing Screen/Replay modules.
4. Write an exact per-slice file/contract/guard plan before changing source. Preserve public contracts through a small compatibility step if consumers need staged migration.
5. Split only with clear reduced coupling or easier maintenance. Otherwise record 'retain Game.Screen' and stop.

**Acceptance:** Review yields a justified decision and bounded plan, not automatic extraction authorization. No desktop/mobile redesign or animation changes.

## Interaction checkpoint and stopping rule

Before E13, obtain focused desktop and phone evidence for the current staging revision: Setup/Boards switching, local/online gameplay, game-to-lobby/Open Game return, menu/rules/history, timer sheet, pause/resume ownership, winner/new round, and replay navigation. Browser automation remains environment-limited; explicitly request device confirmation if it cannot execute. Do not reinterpret 'continue' as confirmation.

After E13 and the E14 decision, reassess again. Leave Main's update/Msg/model intact unless repeated cross-domain maintenance problems justify a new plan. The desired endpoint is understandable orchestration plus executable behavior coverage, not the smallest Main file.

## Recommended next action

Start E12a only. Establish the executable Elm gate before adding rule coverage or extracting more code. This roadmap update does not implement or run the proposed test infrastructure.
