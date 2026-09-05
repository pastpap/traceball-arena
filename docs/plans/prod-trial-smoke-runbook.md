# Traceball Elm Rewrite Prod Trial Smoke Runbook

Date: 2026-08-24
Scope: Final validation before trialing Elm rewrite in production
Branch target: elm-rewrite

## 1) Objective

Run a deterministic final pass across desktop and phone flows, then make a clear go or no-go call for production trial with legacy fallback retained.

## 2) Preconditions

- Current branch is elm-rewrite and synced with origin.
- Legacy fallback remains available at /legacy and /legacy/room/:roomId.
- Fallback env switch is available via TRACEBALL_FRONTEND=legacy.
- Service worker cache version is confirmed in public/sw.js (currently traceball-arena-v40).
- Core automated checks are green:
  - npm run build
  - npm test
  - npm run test:e2e (run this outside the VS Code agent sandbox)

## 3) Environments Under Test

- Staging URL:
  - https://traceball-arena-elm-staging-staging.up.railway.app
- Optional production shadow check URL:
  - https://traceball-arena-production.up.railway.app

## 4) Device and Browser Matrix

Minimum matrix:

- Desktop Chrome latest
- Desktop Safari latest
- iPhone Safari latest
- Android Chrome latest (or equivalent mobile Chromium)

Best-effort:

- iOS 15 iPad profile if available

## 5) Critical Smoke Scenarios

Pass all scenarios on at least one desktop browser and one phone browser.

### A. Home tab

- Loads without layout break.
- Player name persists and is reused across actions.
- Online create/open board controls function.
- Local setup controls render and start local match.

Evidence to capture:

- Screenshot of Home on desktop and phone.

### B. Boards tab

- Live board list loads.
- Board card has valid Open action.
- Refresh updates list without navigation glitches.

Evidence to capture:

- Screenshot of Boards list with at least one active board.

### C. Play tab

- Board renders correctly with overlays and controls.
- Move input works for seated player only.
- Replay controls function (step back/forward and return live).

Evidence to capture:

- Screenshot during active turn.
- Screenshot while replay mode is active.

### D. Match tab

- Metadata and control details are reachable.
- Viewer role and connection status are clear.
- Between-round controls appear only when valid.

Evidence to capture:

- Screenshot of Match details panel.

### E. Pause and resume ownership

- Player A pauses.
- Player B cannot resume or start new round while paused by A.
- Player A can resume.

Expected outcome:

- Ownership guard behaves exactly as above.

### F. Timeout behavior

Validate two branches:

- Consecutive alternating timeouts:
  - First timeout passes turn.
  - Second timeout pauses game.
- Repeated same-player timeouts:
  - After repeated same-player timeout streak, game auto-pauses.

Expected outcome:

- Pause reason and control ownership remain consistent.

### G. Winner overlay

- Complete a round to winner state.
- Winner overlay appears correctly.
- New round flow remains stable.

Evidence to capture:

- Screenshot of winner overlay state.

### H. PWA refresh behavior

- Install/open as PWA where available.
- Trigger refresh path after deploy/update.
- Confirm new shell is loaded and no stale UI shell remains.

Evidence to capture:

- Note version check against public/sw.js cache string.

## 6) Legacy Fallback Drill

Before trial sign-off, verify rollback path:

- Direct route checks:
  - /legacy
  - /legacy/room/:roomId
- Config rollback check:
  - TRACEBALL_FRONTEND=legacy forces legacy shell on root route.

Expected outcome:

- Fallback is immediate and operational.

## 7) Trial Decision Rubric

Go for production trial only if all are true:

- No blocker in Home, Boards, Play, Match core flow.
- Pause/resume ownership is correct.
- Timeout auto-pause behavior is correct.
- Replay works in active testing session.
- Winner overlay and new-round behavior are stable.
- PWA refresh path is acceptable.
- Legacy fallback validated.

No-go if any of these occur:

- Seat ownership corruption
- Wrong player can resume paused game
- Stuck board requiring manual cleanup
- Broken routing from invite/open flows
- PWA serves stale incompatible shell

## 8) Execution Log Template

Use this table during the pass.

| Scenario         | Desktop Chrome | Desktop Safari | iPhone Safari | Android Chrome | Status | Notes |
| ---------------- | -------------- | -------------- | ------------- | -------------- | ------ | ----- |
| Home tab         |                |                |               |                |        |       |
| Boards tab       |                |                |               |                |        |       |
| Play tab         |                |                |               |                |        |       |
| Match tab        |                |                |               |                |        |       |
| Pause ownership  |                |                |               |                |        |       |
| Timeout behavior |                |                |               |                |        |       |
| Replay           |                |                |               |                |        |       |
| Winner overlay   |                |                |               |                |        |       |
| PWA refresh      |                |                |               |                |        |       |
| Legacy fallback  |                |                |               |                |        |       |

Final verdict:

- CONDITIONAL GO for limited production trial
- NO-GO and continue fixes only if the Safari/iPhone evidence matrix is incomplete

Decision owner:

- Traceball Orchestrator + QA Mobile

Date:

- 2026-09-02

Latest draft decision artifact:

- docs/plans/prod-trial-go-no-go-draft-2026-09-02.md
