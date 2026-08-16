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

**Goal:** Replace canvas-heavy gameplay UI with Elm-owned board rendering.

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

## Phase 9: Switch default frontend

**Goal:** Make Elm the primary frontend when feature parity and reliability are proven.

Deliverables:

- Elm route becomes default app route. ✅ `/` now serves the board-centric Elm shell; `/room/:roomId` redirects to `/?board=<roomId>` for old invite compatibility.
- Old JS frontend removed or kept behind a temporary fallback flag. ✅ Legacy JavaScript UI remains at `/legacy` and `/legacy/room/:roomId`; `TRACEBALL_FRONTEND=legacy` rolls back root/old room routes.
- PWA service worker cache version bumped. ✅ Cache is `traceball-arena-v34` and includes `/`, `/elm.html`, `/elm.js`, and legacy assets.
- README updated with Elm development commands. ✅ README documents default/fallback routes, rollback flag, and the Elm-shell development flow.

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
