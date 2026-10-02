# Next Elm Modularization Implementation Plan

> **Status (2026-10-03):** Compiler checkpoint and E9–E11 peripheral-view/layout slices are complete through `7e61491`. This document is retained as the historical execution plan. The active next-step plan is [Elm reassessment and verification-first roadmap](2026-10-03-elm-reassessment-roadmap.md): executable Elm tests first, then a pure local-to-board adapter, followed by a conditional Game.Screen review. Later-slice device smoke is not assumed confirmed.

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Finish extracting cohesive peripheral views while preserving gameplay and establishing real compile/deployment evidence.

**Architecture:** Main remains the program, concrete Msg, ports, model, update, and app-derived action owner. Generic rendering modules receive named data/action records or child-content slots. Node remains authoritative for online lifecycle and gameplay.

**Tech Stack:** Elm 0.19.1, elm-ui, Node/WebSocket, Vitest, Railway.

---

## Baseline and decisions

Inspected branch: feature/full-elm-ui-replace at a34df80. Main.elm is 2,811 lines; Game/Screen.elm is 1,068 lines. E8 game-screen extraction and contract propagation are complete. Do not continue polishing signatures without a concrete benefit, and do not move all remaining views into Game.Screen.

Current build can exit successfully without compiling Elm (scripts/build-elm.js). Local fallback-runtime tests do not execute the newly extracted Elm. Compiler/deployment evidence is the first checkpoint, not an optional final caveat. No deployment health claim is made by this plan.

## Common slice procedure

For each code task below:
1. Add a declaration-aware guard in test/elm-modularization-guard.test.js requiring destination ownership, generic msg signatures, and absence of moved declarations in Main. Assert relevant action/field wiring within the changed function, not just anywhere in the file.
2. Run npm run test -- test/elm-modularization-guard.test.js and verify the new assertion fails for the intended reason.
3. Move existing bodies unchanged; replace concrete actions with root-supplied fields. Preserve CSS classes, text, responsiveness, event propagation, and optional-action visibility.
4. Run targeted guards, node scripts/check-static.js, npm run test, npm run build, and git diff --check. Review the diff for accidental behavior changes.
5. Require real Elm compilation of the exact candidate revision in a supported environment. Treat fallback as unavailable compilation, not success.
6. Commit only the task files, push feature/full-elm-ui-replace, compare git rev-parse HEAD with git ls-remote origin refs/heads/feature/full-elm-ui-replace, then verify Railway revision/build logs and smoke-test the deployed bundle.
7. Stop at the pushed checkpoint; do not combine subsequent risky extractions before smoke evidence.

## Task 1 — Establish compiler and deployed-source evidence (E9a)

**Objective:** Prove that the already-pushed source compiles and staging runs a newly generated runtime.

**Inspect:** scripts/build-elm.js, package.json, Railway build settings/logs, served runtime selection in public/elm.js.
**Potential modifications, only if evidence shows a gap:** scripts/build-elm.js; a focused build-script test; deployment/CI configuration.

1. Locate the build logs for a34df80 and record whether Elm make actually ran.
2. Verify public/elm.js selects the generated public/elm-runtime.js and that the deployed revision is a34df80 (or an explicitly recorded later checkpoint).
3. If compilation is missing, establish a supported Linux CI/build job that executes Elm make on src/elm/Main.elm. Do not assume optional dependency installation guarantees compilation.
4. If needed, add a deployment/CI strict mode that errors when compiler discovery fails, keeping the documented Termux fallback usable locally. Write tests for missing-compiler strict failure, local fallback, and compiler nonzero exit before modifying the script.
5. Compile the current source and resolve any compile errors in small corrective slices before continuing view extraction.
6. Run desktop/mobile smoke: local and online play, pause-owner permissions, replay, seat join/leave, timers, winner/new round. Save exact build/revision evidence without secrets.

**Acceptance:** Real Elm compilation and source-to-served-bundle lineage are evidenced. A passing fallback build or successful push alone is insufficient.

## Task 2 — Shared dialog frame (E9b)

**Objective:** Extract the reusable dialog container/header without moving history or rules content yet.

**Create:** src/elm/View/Dialog.elm.
**Modify:** src/elm/Main.elm (currently viewDialogOverlay and dialogHeader near 2441–2478).
**Test:** test/elm-modularization-guard.test.js.

Use a generic action record, for example:
```elm
type alias Actions msg =
    { dismiss : msg, ignoreClick : msg, backToMenu : msg }

viewOverlay : Actions msg -> List (Html msg) -> Element msg
viewHeader : Actions msg -> Bool -> String -> String -> Html msg
```
Main constructs actions from CloseAppMenu, IgnoreSheetClick, OpenAppMenu. Move existing bodies and preserve the dialog-card stopPropagationOn handler. History/rules callers render children through the new module.

**Acceptance:** Backdrop closes; card clicks do not close; mobile back opens menu; desktop close dismisses. Commit: refactor: extract Elm dialog frame.

## Task 3 — Desktop/mobile menu views (E9c)

**Objective:** Move the complete paired menu presentation into one bounded module.

**Create:** src/elm/View/Menu.elm.
**Modify:** src/elm/Main.elm (viewDesktopMenuDropdown, popupMenuItem, menuIcon, viewMobileMenuSheet currently near 2317–2389).
**Test:** test/elm-modularization-guard.test.js.

Use a record containing dismiss, ignoreClick, showHistory, showRules. Keep viewMenuOverlay's model.menuPanel dispatch in Main. Move the two menu shells and their leaf helpers together, without changing the menu contents or breakpoint (640).

**Acceptance:** History/rules intents, backdrop dismissal, inside-click isolation, labels/icons, and mobile close behavior match baseline. Commit: refactor: extract Elm menu views.

## Task 4 — Rules content and history overlay (E9d/E9e)

**Objective:** Move the remaining dialog contents without mixing replay orchestration into the same slice.

**E9d files:** create src/elm/View/Rules.elm; modify Main; guard test.
Move viewRulesOverlay and ruleItem; consume View.Dialog. Root supplies dialog actions and responsive choice. Keep every rule string unchanged. Commit: refactor: extract Elm rules view.

**E9e files:** modify src/elm/History/View.elm and Main; guard test.
Move the history list/empty-state overlay into History.View. Pass currentTimeMs, history entries, responsive choice, dialog actions, and OpenHistoryReplay as a generic Int -> msg constructor, preserving List.take 12 and ordering. Confirm the constructor signature from current Main before coding. Keep replay game reconstruction and menu dispatch in Main. Commit: refactor: extract Elm history overlay.

**Acceptance:** Exact rules text; empty history state; max 12 ordered entries; relative-date labels and selected-index mapping unchanged. Separate commits/pushes.

## Task 5 — Timer controls (E10a/E10b)

**Objective:** Extract timer presentation without relocating timer target/update semantics.

**Create:** src/elm/View/Timer.elm.
**Modify:** Main's viewTimerControl, viewTimerSelect, viewTimerBottomSheet, viewTimerSheetOption (currently near 2074–2289); guard test.

First inspect TimerTarget declarations and event decoders. Keep TimerTarget and concrete Msg in Main; supply current seconds, open/close/ignore actions, and a seconds -> msg callback. Move select/control first (E10a), then bottom-sheet/options (E10b). Do not alter option values, normalization, selection, or persistence.

**Acceptance:** Identical timer options, current selection, mobile dismissal, click isolation, target routing, and online/local timers. Separate commits/pushes.

## Task 6 — Headers, then app layout (E11a onward)

**Objective:** Extract remaining product chrome only after the smaller views compile and pass device checks.

**Proposed files:** src/elm/View/Header.elm, src/elm/View/Layout.elm; Main; guard test.

1. Inventory dependencies in viewGameHeader, viewMobileGameHeader, viewMobileLobbyHeader, viewMobileOpenGameStrip, viewMainTabs, viewHeaderHtml (currently near 1233–1592).
2. Extract cohesive mobile/desktop header groups in separate slices with named actions/data; retain model-derived permissions, routing, and tabs in Main.
3. Only then extract viewMobileApp/viewApp layout with child-content slots. Do not relocate root update, socket handling, ports, or Browser.element.
4. Write a detailed per-slice contract after inspection; do not pre-create speculative modules.

**Acceptance:** Same relevant-only actions, menu/tab navigation, mobile spacing, board-centric game experience, and responsive thresholds.

## Later decisions (not authorized implementation scope)

- Inspect Game.Screen's 1,068-line size after the above; split only on cohesive concerns (HUD/replay/pause), not arbitrary line quotas.
- Add actual Elm unit tests for Local.Game and codecs on supported tooling before considering state/update extraction.
- Reassess whether Main is now a readable orchestration module; a short enough Main is not the sole success criterion.
- Do not split Msg, move online authority to the client, reintroduce hybrid React, add animation packages, or promote staging to production during this refactor phase.

## Delivery and stopping rules

One behavior-preserving, compile-verified, pushed slice at a time. Present SHA, local gates, real compile evidence, deployed revision, and any remaining uncertainty separately. If compilation/deployment cannot be retrieved or executed, report that blocker and stop claiming staging verification. Private reference books/text remain outside the repository.
