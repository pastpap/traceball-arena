# Full Elm Modularization Spike

> **For Hermes:** Use `subagent-driven-development` only after this spike is accepted. The first implementation pass should be refactor-only and preserve the staging `/` + `/elm` behavior.

**Goal:** Decide whether the full-Elm staging branch can continue as the primary Traceball frontend by modularizing the Elm app instead of rebuilding visual/product parity in React.

**Branch inspected:** `feature/full-elm-ui-replace`  
**Staging context:** `docs/architecture/elm-rewrite-phases.md` says Railway staging follows `elm-rewrite`, with `/` and `/elm` both serving the Elm runtime after Phase 9. This branch is the full-Elm product baseline for the spike.  
**Spike date:** 2026-09-30

---

## Executive recommendation

Full Elm is viable for Traceball **if** the next phase is treated as a modularization/refactor phase, not as more feature work in `src/elm/Main.elm`.

The current full-Elm branch is functionally and visually closer to the desired product than the React/Elm hybrid branch. The main blocker is not Elm as a language and not the absence of animation/game packages. The blocker is that nearly all app concerns have accumulated in one 5,086-line `Main.elm`.

Recommendation:

1. Pause React visual-parity work.
2. Keep `feature/elm-board-react-product-shell` as a learning/reference branch.
3. Make the full-Elm branch the candidate path again, but only through strict no-behavior-change modularization slices.
4. Do not add playground/animation packages until after the core module seams compile and tests/build are stable.

---

## Current Elm code shape

Elm source files currently found:

```text
src/elm/Main.elm              5086 lines
src/elm/Board/View.elm         815 lines
src/elm/Board/Decode.elm       534 lines
src/elm/Protocol.elm           119 lines
src/elm/Board/Types.elm        118 lines
```

Existing good seams:

- `Board.Types` already holds canonical board/session/seat types.
- `Board.Decode` already handles canonical board and raw `publicGame` payloads.
- `Board.View` already owns deterministic SVG board rendering.
- `Protocol` already decodes server message variants.
- `Main.elm` already has a clear top-level Elm architecture: `Model`, `Msg`, `init`, `subscriptions`, `update`, `view`.

Current problem:

- `Main.elm` owns everything else: app model, ports, URL/startup, socket update handling, online commands, lobby/home, board screen, mobile/desktop layout, local game rules, local persistence, history decoding/replay, dialogs, timers, menus, and styling helpers.

That makes agents slow and risky because any change requires loading and understanding a 5k-line file.

---

## Verification evidence from this spike

Commands run on `feature/full-elm-ui-replace`:

```bash
npm run test
```

Result:

```text
71 passed, 2 skipped
```

```bash
npm run build
```

Result:

```text
Elm compiler is not available on this platform; keeping checked-in Phase 2 Elm shell runtime.
Static build checks passed.
```

Important caveat: this Termux/Android environment cannot compile Elm locally because the Elm compiler is unavailable here. CI/Railway/desktop must remain responsible for true Elm compile verification.

---

## Package assessment

Current `elm.json` already includes:

```json
"elm/browser"
"elm/core"
"elm/html"
"elm/json"
"elm/svg"
"elm/time"
"mdgriffith/elm-ui"
```

### Animation packages

Elm animation packages such as `mdgriffith/elm-animator`, `mdgriffith/elm-style-animation`, or `mgold/elm-animation` may help later, but they are not the first bottleneck.

Traceball needs subtle, bounded feedback:

- one-shot turn/move feedback
- pause/winner overlay transitions
- possible ball/turn-token movement
- reduced-motion-safe effects

These can mostly be done with the current `Time`, CSS classes, SVG attributes, and small model flags. A package is only justified if a concrete animation becomes hard to express.

### Elm playground/game packages

`evancz/elm-playground` is useful for learning or isolated visual experiments. It is not a good production foundation for Traceball's current app because Traceball already has:

- server-authoritative online lifecycle
- ports/WebSocket bridge
- SVG board renderer
- mobile PWA shell
- replay/history
- local same-screen mode

A playground package would likely create a second abstraction rather than simplifying the current one.

### Testing packages

The more important package gap is `elm-explorations/test` plus `elm-test`, because refactoring `Main.elm` safely would benefit from pure Elm unit tests for extracted modules. This requires a platform with working Elm tooling; it is not reliable on this Termux runtime.

---

## Target module map

This is the proposed destination. Do not create all modules in one commit.

```text
src/elm/Main.elm
src/elm/App/Model.elm
src/elm/App/Msg.elm
src/elm/App/Flags.elm
src/elm/App/Update.elm
src/elm/App/Subscriptions.elm
src/elm/App/View.elm

src/elm/Port/Commands.elm
src/elm/Port/Decode.elm

src/elm/Page/Home.elm
src/elm/Page/Boards.elm
src/elm/Page/Play.elm
src/elm/Page/Match.elm
src/elm/Page/Menu.elm

src/elm/View/Header.elm
src/elm/View/Layout.elm
src/elm/View/Dialog.elm
src/elm/View/Timer.elm
src/elm/View/Buttons.elm

src/elm/Online/State.elm
src/elm/Online/Commands.elm
src/elm/Online/Update.elm

src/elm/Local/Game.elm
src/elm/Local/Decode.elm
src/elm/Local/Encode.elm
src/elm/Local/View.elm

src/elm/History/Types.elm
src/elm/History/Decode.elm
src/elm/History/View.elm

src/elm/Boards/Summary.elm
src/elm/Boards/Decode.elm
src/elm/Boards/View.elm

src/elm/Shared/Time.elm
src/elm/Shared/Names.elm
src/elm/Shared/Validation.elm
```

Keep existing modules:

```text
src/elm/Board/Types.elm
src/elm/Board/Decode.elm
src/elm/Board/View.elm
src/elm/Protocol.elm
```

Likely later split from `Board.View`, but not first:

```text
src/elm/Board/Geometry.elm
src/elm/Board/Markers.elm
src/elm/Board/Decor.elm
```

---

## Safe extraction order

### Slice E0 — Add module-boundary static checks

**Objective:** Make sure future refactors reduce `Main.elm` instead of silently moving the monolith around.

**Files:**

- Modify: `scripts/check-static.js`
- Test: existing `npm run build`

**Checks to add:**

- `src/elm/Main.elm` line count may not increase.
- New modules under `src/elm/App`, `Page`, `Local`, `History`, `Boards`, `View`, `Shared` must exist once extraction starts.
- `Main.elm` must continue exposing only `main`.

Acceptance: no behavior change.

---

### Slice E1 — Extract flags/init helpers

**Why first:** Low risk. It isolates boot state and removes non-view code from `Main.elm`.

**Create:**

```text
src/elm/App/Flags.elm
src/elm/App/Model.elm
```

Move:

- `type alias Flags`
- `flagsDecoder`
- `applyFlags`
- `normalizeMoveTimerSeconds` if needed by flags
- `Model` alias only if it does not create cyclic imports; otherwise introduce `App.Model` after `Msg` split.

Acceptance:

- `Main.elm` still owns `main`, `init`, `update`, `view`.
- `npm run build` passes.
- `npm run test` passes.

---

### Slice E2 — Extract shared validation/name/timer helpers

**Create:**

```text
src/elm/Shared/Validation.elm
src/elm/Shared/Names.elm
src/elm/Shared/Time.elm
```

Move pure helpers:

- `isValidBoardCode`
- `sanitizeBoardCode`
- `limitNameInput`
- `normalizeWhitespaceName`
- `sanitizePlayerName`
- `timerOptions`
- `normalizeMoveTimerSeconds`
- `moveTimerLabel`
- `relativeDateLabel`
- `timerSentence`

Acceptance:

- No port/view behavior changes.
- These modules are pure and easy to test later with `elm-test`.

---

### Slice E3 — Extract port command constructors

**Create:**

```text
src/elm/Port/Commands.elm
```

Move command builders, not the `port` declarations themselves:

- `watchBoardCommand`
- `persistLocalCmd`
- helper encoders for outgoing command payloads where practical

Important Elm constraint: ports can only be declared in a `port module`, so keep `port outgoingClientCommand` in `Main.elm`. Extract functions that return `Encode.Value` or accept `(Encode.Value -> Cmd Msg)` only if type boundaries stay simple.

Acceptance:

- `Main.elm` still owns actual port declarations.
- Command payloads unchanged.

---

### Slice E4 — Extract local game state machine

**Why:** This is a clear, self-contained domain chunk near the bottom of `Main.elm`.

**Create:**

```text
src/elm/Local/Game.elm
src/elm/Local/Codec.elm
```

Move:

- `LocalPoint`
- `LocalMove`
- `LocalGame`
- `startLocalGame`
- `localGameEncoder`
- `localGameDecoder`
- `localMoveEncoder`
- `localMoveDecoderHelper`
- `pkLocal`
- `localSegmentKey`
- `isLocalBoardPoint`
- `isLocalBoundaryPoint`
- `isLocalTracedMarginSegment`
- `isLocalBlockedCornerCut`
- `computeLocalLegalMoves`
- `applyLocalMove`
- `restartLocalRound`
- `restartLocalTurnClock`
- `localTurnDeadlineAt`
- `expireLocalTurnIfNeeded`
- `localGameToBoard`

Acceptance:

- Local same-screen play behaves unchanged.
- Saved local game decoding remains backward compatible.
- `Main.elm` loses the largest pure domain block.

This is the first slice where `elm-test` would be genuinely useful if the environment supports it.

---

### Slice E5 — Extract history model/decode/view

**Create:**

```text
src/elm/History/Types.elm
src/elm/History/Decode.elm
src/elm/History/View.elm
```

Move:

- `HistoryEntry`
- `historyEntryDecoder`
- `decodeHistoryEntries`
- `historyLocalGameDecoder`
- `viewHistoryOverlay`
- `viewHistoryEntry`
- `viewHistoryReplayHtml`

Risk: `viewHistoryReplayHtml` depends on board-screen view helpers. If extracting it causes a cycle, first extract only `Types` and `Decode`, then move the view after board-screen helpers are isolated.

Acceptance:

- History menu still opens.
- Replay from history still renders read-only board state.

---

### Slice E6 — Extract boards list summary/decode/view

**Create:**

```text
src/elm/Boards/Summary.elm
src/elm/Boards/Decode.elm
src/elm/Boards/View.elm
```

Move:

- `BoardSummary`
- `boardSummaryDecoder`
- `viewBoardListSection`
- `viewBoardCard`
- `boardSummaryStateLabel`

Acceptance:

- Boards tab still loads `/api/rooms`.
- Empty state and Open links still work.
- Open board links still target `/?board=...`.

---

### Slice E7 — Extract lobby/home pages

**Create:**

```text
src/elm/Page/Home.elm
```

Move:

- `viewLobbyCard`
- `viewOnlineLobbyContent`
- `viewInviteCard`
- `viewLocalLobbyContent`
- form attribute helpers if still needed only by Home

Risk: these views currently depend on many `Msg` constructors and `Model` fields. This slice becomes easier after E1-E6.

Acceptance:

- Home tab still shows persisted name first.
- Online/local mode switching unchanged.
- Create/open/share local setup unchanged.

---

### Slice E8 — Extract dialogs/menu/timer UI

**Create:**

```text
src/elm/Page/Menu.elm
src/elm/View/Dialog.elm
src/elm/View/Timer.elm
```

Move:

- `viewMenuOverlay`
- `viewDesktopMenuDropdown`
- `viewMobileMenuSheet`
- `popupMenuItem`
- `menuIcon`
- `viewRulesOverlay`
- `ruleItem`
- `viewDialogOverlay`
- `dialogHeader`
- `viewTimerControl`
- `viewTimerSelect`
- `viewTimerBottomSheet`
- `viewTimerSheetOption`

Acceptance:

- Burger menu still opens menu first.
- Rules/history dialogs are still bounded/mobile-safe.
- Timer sheet behavior unchanged.

---

### Slice E9 — Extract board-screen/product-shell view

**Create:**

```text
src/elm/Page/Play.elm
src/elm/Page/Match.elm
src/elm/View/Header.elm
src/elm/View/Layout.elm
```

Move after prior slices:

- `viewGameHeader`
- `viewMobileGameHeader`
- `viewMobileLobbyHeader`
- `viewMobileOpenGameStrip`
- `viewOnlineGameHtml`
- `viewLocalGameHtml`
- `viewBoardScreenHtml`
- `viewDesktopBoardScreenHtml`
- `viewMobileBoardScreen`
- `viewBoardStageHtml`
- pause/winner/replay/score/mobile helper views

Risk: this is the largest view extraction. Do it last.

Acceptance:

- Play remains board-centric.
- Pause/winner overlays unchanged.
- Replay controls unchanged.
- Mobile layout unchanged.

---

## What not to do

- Do not introduce React back into this branch during the spike.
- Do not add `elm-playground` to production code.
- Do not add an animation package before extracting local game/history/boards modules.
- Do not split `Msg` before the view/domain modules are stable; changing `Msg` too early will turn a refactor into a rewrite.
- Do not move actual `port` declarations out of `Main.elm`; Elm ports must remain in a `port module`.
- Do not change route behavior: `/` and `/elm` stay Elm on the full-Elm/staging branch.

---

## Suggested package policy

### Add now

None.

### Add only on desktop/CI branch after refactor starts

```bash
npm install --save-dev elm-test
```

Then update `elm.json` test dependencies with `elm-explorations/test` and add tests for extracted pure modules.

### Consider later

- `mdgriffith/elm-animator` or similar only if one-shot animation state becomes painful.
- Keep animation optional and reduced-motion-safe.

### Avoid for production core

- `evancz/elm-playground` as the production app layer. Use only for isolated experiments if desired.

---

## Decision gate after E4

After extracting flags/shared helpers/ports/local game, measure again:

```bash
wc -l src/elm/Main.elm
npm run test
npm run build
```

Continue full-Elm path if:

- `Main.elm` drops meaningfully below ~4,000 lines.
- Local game remains stable.
- Route/static/WebSocket tests stay green.
- The next slices look mechanical rather than conceptual.

Reconsider hybrid if:

- extraction creates cycles that require large `Msg`/`Model` rewrites early,
- agents repeatedly break compile with small view moves,
- or product UI changes remain difficult even after Home/Boards/History are modules.

---

## Bottom line

The full-Elm branch is not a dead end. It is a good product baseline trapped inside one overgrown `Main.elm`.

The right next move is **modular Elm**, not Elm packages and not more React parity work.
