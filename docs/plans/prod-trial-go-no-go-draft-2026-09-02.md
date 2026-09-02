# Traceball Prod Trial Go/No-Go Draft (2026-09-02)

Status: Final draft
Branch: elm-rewrite
Decision owner: Traceball Orchestrator + QA Mobile

## 1) Evidence baseline (automated)

Command executed:

- `npm run test:e2e -- --grep "Home and Boards smoke|Match tab smoke|manual pause only allows the pausing player|local replay controls step through moves|winner overlay appears after a scored local round|PWA refresh smoke"`

Result:

- 22 passed
- 2 skipped (PWA refresh smoke on WebKit projects by design)

Coverage from this pack:

- A Home tab: PASS (automated)
- B Boards tab: PASS (automated)
- C Play tab: PASS (automated replay and winner flow)
- D Match tab: PASS (automated role/metadata/control gating)
- E Pause and resume ownership: PASS (automated)
- G Winner overlay: PASS (automated)
- H PWA refresh behavior: PASS on Chromium, SKIP on WebKit (by test design)

## 2) Remaining required checks before final GO

Automated checks now cover timeout and fallback gates:

- F Timeout behavior branch 1: alternating timeout pass-then-pause (PASS via `test/realtime-websocket-flow.test.js` and `test/game.test.js`)
- F Timeout behavior branch 2: repeated same-player timeout auto-pause (PASS via `test/game.test.js`)
- Legacy fallback drill: `/legacy`, `/legacy/room/:roomId`, and `TRACEBALL_FRONTEND=legacy` (PASS via `test/fallback-routes.test.js`)

Still pending for final sign-off:

- Manual screenshot evidence set for desktop + phone matrix per runbook
- Human validation notes for Safari/iPhone interaction quality (PWA refresh automation is Chromium-scoped)

## 3) Risk snapshot

Current risk: LOW-MEDIUM

Reasons:

- Core user flows, timeout branches, and fallback behavior are green in automation.
- Final blocker is evidence completeness for manual matrix artifacts and subjective UX confirmation on phone Safari.

## 4) Recommendation

Final recommendation: CONDITIONAL GO

Why:

- Automated evidence is green across the critical smoke pack.
- Timeout behavior and legacy-fallback protections are validated in code-level and WebSocket tests.
- Remaining condition is not product risk; it is manual evidence completeness for Safari/iPhone validation.

Condition to remove the condition:

- Complete the manual screenshot matrix and add short validation notes for desktop Safari + iPhone Safari.

If the Safari/iPhone matrix is not completed, retain:

- NO-GO for full production trial and continue evidence collection.

## 5) Sign-off block

- Final verdict: CONDITIONAL GO
- Reviewer(s): Traceball Orchestrator, QA Mobile
- Date: 2026-09-02
