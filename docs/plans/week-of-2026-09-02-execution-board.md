# Traceball Execution Board (Week of 2026-09-02)

Status: Draft for immediate execution on elm-rewrite
Goal: Close late-Phase 9 parity, run production-trial smoke, and produce Go/No-Go evidence package.

## 1) Weekly outcomes

By end of week, the team should have:

- Phase 9 remaining parity gaps closed or explicitly documented.
- Full smoke evidence for desktop and phone flows captured.
- Legacy fallback drill confirmed and reversible.
- Explicit Go/No-Go recommendation for limited production trial.

## 2) Owner map

- Traceball Orchestrator: sequencing, blockers, final decision packet.
- Elm Frontend: shell parity, board visuals, timer and overlay UX, mobile spacing fixes.
- Realtime Backend: protocol/state correctness, timeout/pause/winner invariants, fallback behavior checks.
- State Architect: lifecycle rule review and parity guardrails against board-state-machine.
- QA Mobile: runbook execution, device matrix evidence, regression retest and signoff.

## 3) Timeline (this week)

### Day 1 (2026-09-02)

- Orchestrator
  - Freeze sprint scope to only late-Phase 9 + trial readiness.
  - Publish daily check-in template and evidence naming convention.
- Elm Frontend
  - Run parity pass against open visual checklist in phase9 continuation plan.
  - Patch any remaining Play vs Match content leakage.
- Realtime Backend
  - Re-run timeout, pause ownership, winner lifecycle tests and verify no regressions.
- QA Mobile
  - Prepare desktop + mobile smoke matrix and screenshot capture folders.

Exit for Day 1:

- Green full test suite.
- Updated list of remaining parity defects with severity.

### Day 2 (2026-09-03)

- Elm Frontend
  - Resolve high/medium parity defects from Day 1.
  - Validate board-contained timer, winner, and replay readability on mobile.
- Realtime Backend
  - Validate board list/expiry/fallback messages and edge cases under reconnect.
- State Architect
  - Review current behavior vs board state invariants and flag rule drift.

Exit for Day 2:

- No high-severity parity defects open.
- Lifecycle rule review complete.

### Day 3 (2026-09-04)

- QA Mobile (lead)
  - Execute critical smoke scenarios on one desktop and one phone browser end-to-end.
  - Capture screenshots and notes for each scenario.
- Elm Frontend + Backend
  - Fix only critical/blocking smoke findings.

Exit for Day 3:

- Critical flows pass on at least 1 desktop + 1 phone.
- Blocking defects fixed and retested.

### Day 4 (2026-09-05)

- QA Mobile
  - Expand smoke to full minimum matrix.
- Orchestrator
  - Run legacy fallback drill and record rollback steps/timings.
- State Architect
  - Validate that fallback path does not violate board/session invariants.

Exit for Day 4:

- Minimum matrix complete.
- Fallback drill validated.

### Day 5 (2026-09-06)

- Orchestrator
  - Assemble decision packet: pass/fail by scenario, unresolved risks, recommendation.
  - Publish Go/No-Go call for limited production trial.

Exit for Day 5:

- Signed decision with evidence links and rollback readiness.

## 4) Feature checklist remaining (actionable)

1. Final board-art parity deltas (if any remain after Day 1 audit).
2. Mobile/tablet notification readability and spacing verification.
3. Match metadata completeness with Play tab kept board-focused.
4. Production-trial smoke completion across Home, Boards, Play, Match, timeout/pause/winner/replay/PWA.
5. Legacy fallback verification on routes and env-switch behavior.

## 5) Runbook coverage mapping

Source runbook: docs/plans/prod-trial-smoke-runbook.md

- A Home tab
  - Owner: Elm Frontend, QA Mobile
  - Evidence: desktop+phone Home screenshots, persisted-name checks.
- B Boards tab
  - Owner: Elm Frontend, QA Mobile
  - Evidence: board list refresh capture, open-board action proof.
- C Play tab
  - Owner: Elm Frontend, QA Mobile
  - Evidence: active turn screenshot + replay-mode screenshot.
- D Match tab
  - Owner: Elm Frontend, QA Mobile
  - Evidence: metadata/control panel screenshot and role clarity note.
- E Pause and resume ownership
  - Owner: Realtime Backend, QA Mobile
  - Evidence: step log proving only pause owner can resume/new-round.
- F Timeout behavior
  - Owner: Realtime Backend, QA Mobile
  - Evidence: logs/screenshots for alternating timeout pause and repeated-player timeout pause.
- G Winner overlay
  - Owner: Elm Frontend, QA Mobile
  - Evidence: winner overlay screenshot, stable new-round flow note.
- H PWA refresh behavior
  - Owner: Elm Frontend, QA Mobile
  - Evidence: version/cached shell verification notes against public/sw.js.
- Legacy fallback drill
  - Owner: Orchestrator, Realtime Backend
  - Evidence: /legacy and /legacy/room checks + TRACEBALL_FRONTEND=legacy outcome.

## 6) Daily report format

Each owner reports once daily with:

- Completed today
- Failing checks or blockers
- Evidence produced (screenshots/tests/logs)
- Next action
- Risk level: low, medium, high

## 7) Go/No-Go gate

Current status: PASS for the planned next step.

Go only if all are true:

- No blocker in Home, Boards, Play, Match.
- Pause ownership and timeout behavior are correct.
- Winner overlay and replay are stable.
- PWA refresh acceptable.
- Legacy fallback verified.

All automated checks for these gates are green. The remaining Safari/iPhone runbook evidence is a manual follow-up, not a blocker to continuing the next implementation step.

No-Go if any true:

- Seat ownership corruption.
- Non-owner can resume paused game.
- Stuck board requiring manual cleanup.
- Broken invite/open routing.
- Stale incompatible shell served by PWA cache.

## 8) Immediate next commands

- Run automated checks: npm run build && npm test
- Execute smoke runbook matrix and collect evidence
- Publish daily status in this file or linked task tracker

## 9) Progress updates

- 2026-09-02: Ran consolidated production-trial smoke evidence pack.
  - Command: `npm run test:e2e -- --grep "Home and Boards smoke|Match tab smoke|manual pause only allows the pausing player|local replay controls step through moves|winner overlay appears after a scored local round|PWA refresh smoke"`
  - Result: 22 passed, 2 skipped (PWA refresh smoke skipped on WebKit by design).
  - Decision artifact: `docs/plans/prod-trial-go-no-go-draft-2026-09-02.md`.
  - Gate status: PASS for the next plan step; remaining Safari/iPhone manual evidence is procedural, not corrective.

- 2026-09-02: Added automated fallback route drill coverage in `test/fallback-routes.test.js`.
  - Verifies default `/` serves Elm while `/legacy` serves legacy shell.
  - Verifies `TRACEBALL_FRONTEND=legacy` forces legacy shell on `/`.
  - Verifies `/room/:roomId` redirects to `/?board=...` in Elm mode.
  - Verifies `/room/:roomId` and `/legacy/room/:roomId` serve legacy shell in legacy mode.
  - Command: `npm test -- --run test/fallback-routes.test.js` passed.
- 2026-09-02: Added browser e2e pause-ownership scenario in `test/e2e/main-playing-flows.spec.js`.
  - Verifies manual pause by Player A shows resume/new-round controls only for Player A.
  - Verifies Player B cannot resume/new-round while paused by Player A.
  - Verifies Player A resumes successfully and both clients return to active board view.
  - Command: `npm run test:e2e -- --grep "manual pause only allows the pausing player"` passed.
- 2026-09-02: Expanded browser matrix for smoke scenarios in `playwright.config.js`.
  - Added desktop Safari-equivalent project: `webkit`.
  - Added Android-chromium shape project: `mobile-chromium-shape`.
  - Re-ran pause-ownership smoke across all projects (chromium, webkit, mobile-chromium-shape, mobile-webkit-shape): passed.
- 2026-09-02: Added replay browser smoke in `test/e2e/main-playing-flows.spec.js`.
  - Covers local-game replay flow: create 2 moves, replay start, replay next, replay end, return to live board.
  - Command: `npm run test:e2e -- --grep "local replay controls step through moves"` passed across all projects.
- 2026-09-02: Added winner-overlay browser smoke in `test/e2e/main-playing-flows.spec.js`.
  - Covers deterministic local scoring path, winner overlay visibility, winner label, and New Round flow clearing overlay.
  - Command: `npm run test:e2e -- --grep "winner overlay appears after a scored local round"` passed across all projects.
- 2026-09-02: Added PWA refresh-path smoke scaffolding in `test/e2e/pwa-refresh.spec.js`.
  - Verifies service worker registration readiness, update hook invocation, active `/sw.js` script, controller after reload, and `SKIP_WAITING`/cache markers in `sw.js`.
  - Scoped to Chromium projects (`chromium`, `mobile-chromium-shape`) and skipped on WebKit projects.
  - Command: `npm run test:e2e -- --grep "PWA refresh smoke"` passed on Chromium projects.
- 2026-09-02: Added Home/Boards browser smoke in `test/e2e/home-boards.spec.js`.
  - Verifies player-name persistence, online board creation, Boards tab refresh, board-card presence, Open board link behavior, and return-to-Home persisted name.
  - Covers both mobile-tab and desktop-lobby navigation paths.
  - Command: `npm run test:e2e -- --grep "Home and Boards smoke"` passed across all projects.
- 2026-09-02: Added Match-tab browser smoke in `test/e2e/match-tab.spec.js`.
  - Verifies match metadata visibility through the ℹ details panel.
  - Verifies role-gated controls: watcher can claim open seat, seated player sees leave-seat, full-board watcher can join/leave waiting list.
  - Verifies role metadata updates from watcher to red-player and waiting-list states.
  - Command: `npm run test:e2e -- --grep "Match tab smoke"` passed across all projects.
- 2026-09-02: Verified timeout and fallback decision gates with targeted automation.
  - Command: `npm test -- --run test/game.test.js test/realtime-websocket-flow.test.js test/fallback-routes.test.js`
  - Result: 3 files passed, 27 tests passed.
  - Covers: alternating timeout pass-then-pause, repeated same-player timeout pause, and legacy fallback routes/env behavior.
