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

Go only if all are true:

- No blocker in Home, Boards, Play, Match.
- Pause ownership and timeout behavior are correct.
- Winner overlay and replay are stable.
- PWA refresh acceptable.
- Legacy fallback verified.

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
