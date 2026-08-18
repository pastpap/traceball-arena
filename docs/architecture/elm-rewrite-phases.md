# Traceball Arena Elm Rewrite Phases

> Phased plan for evolving Traceball Arena toward an Elm frontend while keeping the Node backend authoritative. This is not a commit-by-commit plan; it is the roadmap agents should use when proposing or reviewing implementation work.

## Principles

- Keep the app deployable on Railway staging at every phase.
- Keep production-safe behavior on `main`/`develop`; experiment on `elm-rewrite`.
- Do not rewrite backend and frontend at the same time unless a phase explicitly calls for a backend protocol change.
- Server remains authoritative for online play.
- Elm owns client state, view rendering, and stale-version protection.
- Prefer SVG for board rendering unless a spike proves canvas is better.
- Maintain mobile/iOS 15 compatibility as a quality gate.
- Every phase must include regression tests or smoke checks for reconnect/leave/join behavior.

## Branch and deployment setup

- Default branch: `develop`
- Experiment branch: `elm-rewrite`
- Railway staging environment: `staging`
- Railway staging service: `traceball-arena-elm-staging`
- Staging branch source: `elm-rewrite`
- Staging URL: `https://traceball-arena-elm-staging-staging.up.railway.app`

Pushing to `elm-rewrite` should auto-deploy staging.

## Phase 0: Architecture and agent foundation

**Goal:** Give humans and agents a shared source of truth before implementation.

Deliverables:

- `docs/architecture/board-state-machine.md`
- `docs/architecture/elm-rewrite-phases.md`
- Repo-local agent definitions under `.github/agents/`

Exit criteria:

- Agents can answer board/session lifecycle questions from docs.
- No code behavior has changed except docs/agent files.
- Staging auto-deploy remains green.

## Phase 1: Protocol contract and fixtures

**Goal:** Freeze the server/client contract before Elm decoders are written.

Deliverables:

- Document `ClientToServer` messages.
- Document `ServerToClient` messages.
- `docs/architecture/realtime-protocol-phase1.md`
- Add canonical JSON fixtures for board states:
  - board with creator only
  - board with active session
  - full board with watcher
  - full board with waiting-list member
  - disconnected player during grace
  - disconnected player eligible to free
  - between rounds
  - expired/not found
- Add tests that validate backend responses match fixtures where practical.

Important decisions:

- Every state broadcast includes board `version`.
- Message names should be intent-based, not UI-based.
- Keep old protocol compatibility only if needed for incremental migration.

Exit criteria:

- Backend test suite passes.
- Fixtures are stable enough for Elm JSON decoder tests.
- Staging WebSocket smoke test still passes.

## Phase 2: Elm shell beside current frontend

**Goal:** Add Elm build infrastructure without replacing the current UI.

Deliverables:

- Add Elm tooling and build scripts.
- Add `elm.json` and Elm source modules under `src/elm/`.
- Add `npm run build:elm`; on platforms with an Elm compiler it compile-checks `src/elm/Main.elm`, while Android/Termux keeps the checked-in Phase 2 shell runtime.
- Add an Elm app entry point behind a route/flag, for example `/elm` or `?frontend=elm`.
- Elm renders a static board from a fixture.
- Elm has a top-level `Model`, `Msg`, `update`, and `view` structure.
- Existing JS frontend remains available.

Suggested Elm modules:

```text
src/elm/Main.elm
src/elm/Board.elm
src/elm/Board/Types.elm
src/elm/Board/Decode.elm
src/elm/Board/View.elm
src/elm/Protocol.elm
src/elm/Route.elm
```

Exit criteria:

- `npm run build` builds both existing app and Elm shell.
- Staging serves the Elm shell without breaking existing frontend.
- Static fixture renders correctly on mobile-sized viewport.

## Phase 3: Elm state decoder and stale-version handling

**Goal:** Teach Elm to consume authoritative server state safely.

Deliverables:

- Elm decoders for board/session/seat/round state.
- Runtime checks that every canonical Phase 1 fixture can render without throwing.
- Version gate: ignore stale state where `incoming.version <= model.version`.
- Error display for malformed/unsupported state.
- Tests for decoders and version handling, if using Elm test tooling.

Exit criteria:

- Elm can render all canonical fixtures.
- Stale state does not regress the model.
- Missing/unknown fields produce controlled errors or compatibility paths.

## Phase 4: Elm WebSocket integration

**Goal:** Connect Elm to the existing Node WebSocket backend.

Deliverables:

- JS ports or Elm WebSocket setup for:
  - connect/disconnect
  - send client command
  - receive server state/error messages
- Additive JavaScript WebSocket bridge for `/elm?board=<code>` while Elm source keeps the same model/update contract for later ports.
- Client identity handoff via JS/localStorage port.
- Watch/open board by code.
- Display connection status and reconnecting state.

Exit criteria:

- Elm can open a board as watcher.
- Elm receives live state broadcasts.
- Reconnect preserves clientId.
- Staging smoke script verifies basic create/watch/claim flow.

## Phase 5: Elm seating flows

**Goal:** Move board-centric join/leave/waiting-list UX into Elm.

Deliverables:

- Create board -> creator immediately joins Blue. ✅ Phase 5 bridge path added in `/elm` runtime.
- Open code behavior:
  - both vacant -> choose color. ✅ Vacant seats render explicit Join Blue/Join Red controls.
  - one vacant -> watch only until the user explicitly claims the open color. ✅ Single-vacancy boards no longer auto-claim from the watch/open path.
  - full -> watch only. ✅ Full boards stay watcher-only unless the user explicitly joins the waiting list.
- Explicit `Join waiting list` / `Leave waiting list` controls. ✅ Backed by server commands.
- Claim seat from waiting-list opportunity. ✅ Claiming a seat removes the client from waiting-list state.
- Leave seat forfeit flow with clear confirmation. ✅ `/elm` sends `leave` with forfeit wording in the UI.

Exit criteria:

- No generic ambiguous `Join Game` flow remains in Elm UI.
- Watchers are not automatically waiting-list members.
- Client cannot occupy both seats on same board.
- Mobile flow has obvious primary actions.

## Phase 6: Elm board rendering and move UX

**Goal:** Prove Elm can consume live board state and submit move intent. This phase is functional, not visual-parity-complete.

Deliverables:

- **Phase 6A read-only renderer:** SVG board renderer from canonical round state. ✅ `/elm` now renders pitch, gates, grid points, gate-bounce points, traced segments, ball position, current-turn marker, and server-provided legal-move markers without enabling move input.
- **Phase 6B legal-move readability:** refine legal move highlights for seat/watch context and older-device readability. ✅ `/elm` now emits own-turn, opponent-turn, and watcher legal-move contexts with distinct markers, legend copy, and larger SVG rings while keeping input disabled.
- **Phase 6C move input:** touch-friendly hit targets and move command from Elm to server. ✅ Own-turn legal SVG targets now submit server-authoritative `{ type: 'move', to }` commands, mark pending moves locally, and remain inert for watchers/opponent turns.
- **Phase 6D between-round UI:** Goal/between-round UI and Continue/New Round button. ✅ `/elm` now renders winner, end reason, score, seated-player Continue/New Round reset action, watcher waiting copy, and pending new-round feedback.

Exit criteria:

- Mobile/touch interaction is reliable on older devices.
- Move command is server-authoritative.
- Between-round state is visible and stable.

## Phase 7: Disconnection, grace, and stuck-seat recovery

**Goal:** Solve the class of failures observed in real phone sessions.

Deliverables:

- Seat state `DisconnectedReserved` exposed to Elm. ✅ Phase 1 state carries disconnected seat reservation metadata through the live `/elm` shell.
- 60-second grace display. ✅ `/elm` shows the disconnected player, reserved-seat copy, and grace countdown text.
- Reconnect by same `clientId`. ✅ Server marks dropped player sockets as disconnected instead of vacant; opening/watching with the same stable `clientId` reclaims the reserved seat and resumes paused play, while fresh watchers stay seatless.
- Opponent-only `Make seat available` control after grace. ✅ Elm gates the `freeSeat` command to the seated opponent only after `canBeFreed` is true.
- Freeing stale opponent awards forfeit point and closes session. ✅ `freeDisconnectedSeat` archives a `disconnect-forfeit`, increments the remaining player score, and opens the seat.
- Leaving after opponent grace has expired abandons/clears rather than awarding ghost point. ✅ Server leave path clears both seats when the opponent is stale-disconnected past grace.

Exit criteria:

- Automated WebSocket smoke test covers disconnect -> reconnect within grace.
- Automated WebSocket smoke test covers disconnect -> free after grace.
- Automated WebSocket smoke test covers both players leave/disconnect without board getting stuck.

## Phase 8: Board list, expiry, and cleanup

**Goal:** Make public boards manageable and finite.

Deliverables:

- Board list shows public boards with useful status. ✅ `/elm` now loads `/api/rooms` and renders board cards with state, occupancy, score, moves, and Open board links.
- `lastActivityAt`/`expiresAt` exposed where useful. ✅ Public game/list summaries include `createdAt`, `updatedAt`, `lastActivityAt`, and `expiresAt`.
- 1-week inactivity cleanup. ✅ Server calls `cleanupExpiredRooms()` before health/list/create/detail/WebSocket message handling and removes timers/sockets for expired boards.
- Expired/not-found UI in Elm. ✅ `BoardNotFound` messages render a recovery panel with Create a fresh board and Browse live boards paths.

Exit criteria:

- Expired boards disappear from public list.
- Direct link to expired board shows clear recovery path.
- Cleanup is covered by tests.

## Phase 9: Visual parity with the JavaScript frontend

**Goal:** Make the Elm route look and feel like the current JavaScript frontend before it can become the default production UI, while also preserving the clearer board-centric lifecycle semantics from Phases 3-8.

Current user-observed gaps from the Phase 9 staging playtest:

- Home only exposes online board opening/creation; it must also expose local same-screen game creation.
- The player name is split/inconsistent: the seated player can be `Stefan` while the visible Elm input still says `Elm Player`.
- Boards tab is static copy; it must show active online boards.
- Play tab is overloaded with board-action cards, round-result cards, seat cards, and session text that distract from gameplay.
- Online gameplay lost legacy board behavior: turn indicator animation is missing, online player orientation is not flipped so the seated player always attacks upward, and move timers are missing.
- Match tab lacks board/match metadata that was previously available elsewhere.
- Board itself needs more embedded player/status/timer information so the page does not need large cards above the board.

Deliverables:

1. **Home tab: player identity, online setup, and local game setup**
   - Match `public/index.html` Home semantics: `Your name` field must be the first setup control on Home.
   - Persist the player name through the same `traceballPlayerName` localStorage key used by the JavaScript UI; do not render a separate stale `Elm Player` input inside board actions.
   - Use the persisted name for all online commands: create board, claim Blue/Red, join waiting list, and rejoin/watcher display.
   - Add the local/online mode toggle back to Home.
   - Add local same-screen setup on Home: Blue name, Red name, local move timer, resume saved local game, discard saved local game, and Start local match.
   - Local games keep the fixed shared-board orientation because both players play from one device.
   - Regression checks: Home render contains `playerNameInput`, `onlineMode`, `localMode`, `localForm`, `localP1Name`, `localP2Name`, `localMoveTimer`, and uses the persisted player name instead of `Elm Player` after a name is set.

2. **Boards tab: active online boards**
   - Boards tab must load `/api/rooms` and render active online boards inside the tab, not below or outside the tab shell.
   - Show useful board summary data per card: board code/link, state, occupancy/vacant seats, current score, move count, active/waiting/watcher counts where available, last activity, expiry, and Open/Watch action.
   - Add refresh affordance equivalent to the JavaScript UI.
   - Keep expired/not-found recovery behavior from Phase 8.
   - Regression checks: Boards tab render contains active board cards after `loadBoardList`, an empty state when no boards exist, and Open board links target `/elm?board=...`.

3. **Play tab: focus-only gameplay surface**
   - Play tab should show only:
     - the board/stage;
     - the replay controls/scrubber/text;
     - the Leave / forfeit button when the viewer is seated;
     - minimal pause/winner overlays when applicable.
   - Remove from Play tab: board action cards, display-name inputs, full seat cards, round-result cards, watchers/waiting-list lists, score blocks, and generic explanatory text.
   - Move join/claim/waiting-list/new-round and match metadata to Home/Match as appropriate.
   - Between-round Play tab should stay board/replay focused; Continue/New Round belongs in Match or a compact overlay, not a large card above the board.
   - Regression checks: Play tab HTML does not contain `data-elm-actions`, `elm-seats`, display-name input, watcher/waiting-list lists, or large round-result panel; it does contain `board-stage`, board renderer, replay controls, and seated-only leave/forfeit.

4. **Board visual parity and embedded board HUD**
   - Port or share the same board graphics/artifacts from `public/app.js`: canvas dimensions/fit, pitch geometry, wall/gate strokes, margin lines, black gate-mouth bounce dots, grid/visited points, player-colored traced segments, ball graphic, legal-move affordances, winner overlay, confetti, pause blur, replay scrubber, and older-device/mobile spacing.
   - Add board-embedded HUD information so external cards are not needed in Play:
     - Blue/Red player names;
     - seat status: occupied, open, disconnected/reserved, waiting/rejoining;
     - active turn/whose move;
     - current score;
     - move timer/remaining time;
     - online/local orientation indicator if needed.
   - Match the legacy JavaScript board presentation closely enough that the board carries the player/status context visually.
   - Regression checks: board render includes data hooks for player labels, seat status, turn, score, timer, and legal-move affordances.

5. **Online orientation and turn animation**
   - Online games must orient the board for the seated player so that the local player always attacks upward.
   - Blue should not always appear at the bottom for seated online players; transform/render coordinates and labels based on `ownSeat`.
   - Watchers can use canonical/fixed orientation unless a watcher-specific orientation choice is later added.
   - Local games must keep fixed orientation because both players share one screen.
   - Restore the legacy online turn marker animation: the turn marker flies in an arc over the board, grows toward the center, and returns to normal size on the other side.
   - Keep animation non-distracting and event-based: animate only when turn changes, not continuously.
   - Regression checks: online p1/p2 render paths expose different orientation transforms; local render path stays fixed; turn-change state exposes/starts one-shot marker animation hooks.

6. **Match tab: board and session metadata**
   - Match tab should contain the detailed information removed from Play:
     - board code and invite/open link;
     - connection status;
     - own role: Blue, Red, watcher, waiting-list member;
     - Blue/Red names and seat statuses;
     - active session state;
     - score;
     - current turn;
     - move count and replay summary;
     - watcher count;
     - waiting-list count and names where safe/useful;
     - last activity and expiry;
     - disconnected seat grace/recovery controls;
     - Continue/New Round when seated and between rounds;
     - claim open seat / join waiting list / leave waiting list controls when relevant.
   - Regression checks: Match tab contains the metadata/control hooks above, while Play tab remains focused.

7. **Move timer parity**
   - Restore timer setup controls for both online and local modes.
   - Online create-board flow must pass the selected `moveTimeLimitMs` to `/api/rooms`.
   - Runtime board HUD must show remaining move time for the active turn and timeout/paused status.
   - Local game runtime must enforce/display local timer behavior equivalent to the JavaScript UI.
   - Keep server-authoritative online timeout behavior; the UI countdown is a display of server state plus local clock interpolation, not authority.
   - Regression checks: create-board payload includes selected timer; render includes timer display when enabled; timeout/paused states render clearly; local timer tests cover pass/pause behavior.

8. **CSS/structure parity discipline**
   - Reuse the same page shell/layout structure as `public/index.html`: Home, Boards, Play, Match, replay, rules, history, board-stage, winner/pause overlays, mobile tabs, and action placement.
   - Reuse the same CSS classes and visual design tokens from `public/styles.css` where possible instead of inventing separate `elm-*` panels.
   - Keep the Elm-owned state and server-authoritative command flow from Phases 3-8; do not reintroduce ambiguous join/waiting-list behavior while copying the legacy UI.
   - Add visual/parity regression checks that assert the Elm shell renders the legacy structural markers (`board-stage`, `board-card`, replay controls, side/match cards, winner overlay hooks) and either shares or intentionally mirrors the legacy board renderer.

Suggested implementation order:

1. Name persistence and Home tab structure.
2. Boards tab active list placement and refresh.
3. Split Play vs Match responsibilities and move controls/metadata out of Play.
4. Board HUD labels/status and cleanup of duplicate cards.
5. Online orientation transform for seated players; fixed orientation for local games.
6. One-shot turn marker arc animation.
7. Online/local timer controls and runtime display.
8. iPad/iOS 15 staging smoke and PR checklist update.

Exit criteria:

- On staging, a user cannot tell at first glance whether they are using the JavaScript UI or Elm UI except for intentionally improved lifecycle copy.
- Home supports both online and local setup, with one persisted player name used consistently everywhere.
- Boards tab shows active online boards.
- Play tab is focused: board + replay + leave/forfeit only, with board-embedded HUD for status.
- Match tab contains board/session/watcher/waiting-list/score controls and details.
- Online seated players always attack upward; local games keep fixed shared-board orientation.
- Turn animation and timers match the JavaScript behavior closely enough for user playtesting.
- iPad/iOS 15 smoke passes for home, local setup, board list, join/watch/rejoin, orientation, turn animation, timer, move input, between-round, replay, and leave/forfeit flows.
- The PR body explicitly lists any remaining non-parity gaps; if there are non-trivial gaps, Phase 10 cannot proceed.

Recent implementation update (2026-08-18 to 2026-08-19):

- Desktop usability was tightened with explicit lobby/game mode switching and desktop lobby Game/Boards tabs.
- Play remains board-centric while match/lobby details stay outside the immediate board focus.
- Board now shows embedded player-name badges to reduce context switching.
- Live update UX now uses badge + toast notifications when user is away from gameplay:
  - desktop badge on Game button,
  - mobile badge on Play tab,
  - no forced navigation back to board.
- Re-render preservation now keeps current mobile page and desktop lobby-open state during socket updates.
- Notification trigger now includes move-count changes (including same-turn bounce chains), not only turn/state changes.

## Phase 10: Switch default frontend

**Goal:** Make Elm the primary frontend only after functional parity, lifecycle reliability, and visual parity are proven.

Deliverables:

- Elm route becomes default app route only after Phase 9 visual parity is complete. ⚠️ Current `elm-rewrite` staging serves the functional Elm shell by default for testing, but this is not production-ready UI parity.
- Old JS frontend removed or kept behind a temporary fallback flag. ⚠️ Legacy JavaScript UI remains at `/legacy` and `/legacy/room/:roomId`; `TRACEBALL_FRONTEND=legacy` rolls the root route and old room links back to legacy without code changes.
- PWA service worker cache version bumped after parity cutover. ⚠️ Current staging cache is `traceball-arena-v34` for shell testing, not final production parity.
- README updated with Elm development commands and explicit visual-parity status.

Exit criteria:

- Full tests/build pass.
- Staging phone playtest passes.
- Production deployment plan is explicit and reversible.

## Future backend experiment: Elixir/BEAM

Do not combine with Elm migration until the frontend/backend protocol is stable.

A later Elixir spike can model:

```text
Board = GenServer process
BoardSupervisor = dynamic supervisor of board processes
Phoenix Channel = board subscription and client commands
```

Spike scope should be minimal:

- create board
- watch board
- claim seat
- leave seat
- broadcast state

Do not port all game rules until the room-process model proves simpler than the Node Map-based backend.
