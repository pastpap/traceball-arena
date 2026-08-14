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

- Create board -> creator immediately joins Blue.
- Open code behavior:
  - both vacant -> choose color
  - one vacant -> auto-join vacant seat
  - full -> watch only
- Explicit `Join waiting list` / `Leave waiting list` controls.
- Claim seat from waiting-list opportunity.
- Leave seat forfeit flow with clear confirmation.

Exit criteria:

- No generic ambiguous `Join Game` flow remains in Elm UI.
- Watchers are not automatically waiting-list members.
- Client cannot occupy both seats on same board.
- Mobile flow has obvious primary actions.

## Phase 6: Elm board rendering and move UX

**Goal:** Replace canvas-heavy gameplay UI with Elm-owned board rendering.

Deliverables:

- SVG board renderer or documented reason to keep canvas.
- Legal move highlights from server state and/or local pure helper.
- Touch-friendly hit targets.
- Move command from Elm to server.
- Goal/between-round UI.
- Continue/New Round button.

Exit criteria:

- Mobile/touch interaction is reliable on older devices.
- Move command is server-authoritative.
- Between-round state is visible and stable.

## Phase 7: Disconnection, grace, and stuck-seat recovery

**Goal:** Solve the class of failures observed in real phone sessions.

Deliverables:

- Seat state `DisconnectedReserved` exposed to Elm.
- 60-second grace display.
- Reconnect by same `clientId`.
- Opponent-only `Make seat available` control after grace.
- Freeing stale opponent awards forfeit point and closes session.
- Leaving after opponent grace has expired abandons/clears rather than awarding ghost point.

Exit criteria:

- Automated WebSocket smoke test covers disconnect -> reconnect within grace.
- Automated WebSocket smoke test covers disconnect -> free after grace.
- Automated WebSocket smoke test covers both players leave/disconnect without board getting stuck.

## Phase 8: Board list, expiry, and cleanup

**Goal:** Make public boards manageable and finite.

Deliverables:

- Board list shows public boards with useful status.
- `lastActivityAt`/`expiresAt` exposed where useful.
- 1-week inactivity cleanup.
- Expired/not-found UI in Elm.

Exit criteria:

- Expired boards disappear from public list.
- Direct link to expired board shows clear recovery path.
- Cleanup is covered by tests.

## Phase 9: Switch default frontend

**Goal:** Make Elm the primary frontend when feature parity and reliability are proven.

Deliverables:

- Elm route becomes default app route.
- Old JS frontend removed or kept behind a temporary fallback flag.
- PWA service worker cache version bumped.
- README updated with Elm development commands.

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
