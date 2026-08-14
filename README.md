# Traceball Arena

A realtime browser game inspired by paper soccer / Trace Soccer. It started as a no-account WebSocket MVP and has evolved into a small shareable arena with online rooms, local same-screen play, mobile/tablet topology, replay, scorekeeping, and clearer game-state feedback.

Live app: https://traceball-arena-production.up.railway.app

## Screenshots

![Traceball Arena home and invite flow](docs/screenshots/traceball-home.svg)

![Traceball Arena gameplay board](docs/screenshots/traceball-play.svg)

## What it does

- Create a room and share a link or QR code.
- Friend joins from the link, chooses a name, and the match starts through WebSockets.
- Local same-screen PvP for two players on one device, without room creation or sockets.
- 8-direction movement with no repeated segments.
- Bounce/continue turns from already visited points, boundary points, and black gate-mouth center dots.
- Goals, own goals, stuck-loss detection, cumulative room/local score, and new-round reset.
- Configurable per-move clock: off, 5, 10, 15, 20, or 30 seconds; timeout passes the turn without drawing a line.
- Client-side replay controls live with the board. No accounts and no persistent database.
- Responsive layout: desktop uses a board + match side panel; phones/tablets use Home / Play / Match tabs.

## Gameplay

Traceball is a turn-based grid football game:

- The ball starts at midfield.
- On your turn, move one point in any of 8 directions: up, down, left, right, or diagonally.
- A traced segment cannot be used twice in either direction.
- Landing on a fresh point usually passes the turn to the other player.
- Landing on a previously visited point, boundary point, or black gate-mouth center dot gives a bounce, so the same player continues.
- If the per-move clock is enabled, every move or bounce starts a fresh timer; a timeout draws no line, leaves the ball where it is, and passes the turn.
- Entering the opponent gate scores and ends the round.
- Entering your own gate is an own goal and gives the round to the opponent.
- If the player to move has no legal move, they are stuck and lose the round.

Visual feedback:

- Legal move circles are dimmed and use the current player color instead of generic yellow.
- Black dots in the middle of the gate lines mark special bounce points: they continue the mover's turn even before being visited.
- The turn marker ball sits next to the current player's home gate.
- When the turn changes, the marker jumps across the board and changes color as it reaches the next gate.
- Winner state appears as a golden overlay with confetti at the winner's own gate.

## Technologies

- **Runtime:** Node.js
- **Server:** Express static/app shell server
- **Realtime:** `ws` WebSocket rooms with in-memory room state
- **IDs:** `nanoid` room codes
- **QR:** `qrcode` endpoint for invite links
- **Frontend:** vanilla HTML/CSS/JavaScript canvas renderer
- **PWA:** manifest + service worker app-shell cache with forced refresh on updates
- **Tests:** Vitest rule/state tests plus static build checks for UI and deployment contracts
- **Deployment:** Railway single-service Node app using `railway.json`

## Game-dev evolution

The project grew through small playable slices:

1. **Core realtime MVP** — room creation, invite links, QR code, two WebSocket players, and canonical server-side game state.
2. **Rules and replay** — 8-direction legal moves, visited/boundary bounce rules, goals, own goals, stuck-loss detection, and move replay.
3. **Mobile playability** — board aspect-ratio constraints, mobile/tablet Home / Play / Match tabs, replay controls beside the board, and service worker cache refreshes.
4. **Robust room lifecycle** — watcher sockets for invite pages, stable client IDs, reconnect/rejoin handling for mobile/PWA lifecycle events, and guarded mutating actions.
5. **Local same-screen mode** — client-side local PvP with the same state shape as online rooms, cumulative score preservation, static face-to-face board, and no WebSocket slot consumption.
6. **Game polish** — gate labels, score strip, winner modal, gate confetti, player-colored move hints, slower result animation, and a jumping turn marker.

The implementation intentionally stays no-DB for now: rooms, scores, and replays are in memory and disappear when the Railway service restarts.

## Elm rewrite and repo agents

The `elm-rewrite` branch is the staging branch for introducing Elm into the frontend while the Node backend stays authoritative.

Current Elm shell route:

- `/elm` renders the Phase 7 board shell from fixtures or a live board code query, including an SVG board preview from canonical round state.
- Existing `/` and `/room/:roomId` JavaScript frontend routes remain unchanged.
- The Elm-side model gates incoming state by monotonically increasing `version`, reports malformed/not-found messages as controlled errors, and uses a JavaScript WebSocket bridge with stable `traceballElmClientId` identity.
- The `/elm` shell has board-centric seating actions: create board as Blue, auto-join the single vacant seat, choose Blue/Red when both seats are open, explicitly join/leave the waiting list when full, and leave a seat with clear forfeit wording.
- Phase 7 keeps the server authoritative: own-turn legal SVG targets submit `{ type: 'move', to }`, seated players continue between rounds with `{ type: 'reset' }`, disconnected seats are reserved for same-client reconnect during grace, and only the seated opponent can send `{ type: 'freeSeat', seatId }` after grace.

Architecture and rewrite docs:

- `docs/architecture/board-state-machine.md`
- `docs/architecture/elm-rewrite-phases.md`
- `docs/architecture/realtime-protocol-phase1.md`

Repo-local agent definitions live in `.github/agents/` for IDE-assisted work:

- `squad.agent.md` — squad entry point
- `traceball-orchestrator.agent.md` — primary point of entry for tasks/questions
- `traceball-state-architect.agent.md` — board/session/seat lifecycle
- `traceball-elm-frontend.agent.md` — Elm architecture and UI state
- `traceball-realtime-backend.agent.md` — WebSocket/backend protocol
- `traceball-qa-mobile.agent.md` — tests, staging, and mobile regressions

Railway staging for `elm-rewrite`:

https://traceball-arena-elm-staging-staging.up.railway.app

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Useful checks:

```bash
npm test
npm run build
```

`npm run build` currently runs static contract checks rather than bundling; this app is served directly from `public/`.

## Railway

The app is a single Node web service. Railway should run:

```bash
npm install
npm start
```

The server binds to `process.env.PORT`. `railway.json` configures:

- Railpack build
- `npm run build` build command
- `npm run start` start command
- `/api/health` health check
- restart-on-failure policy

## Rules implemented for this MVP

- The ball starts at midfield.
- Players alternate unless the mover lands on an already visited point, wall/boundary point, or black gate-mouth center dot, which grants a bounce and another move.
- Movement is one grid step in any of 8 directions.
- A segment can never be used twice in either direction.
- Entering the opponent gate scores and ends the game.
- Entering your own gate is an own goal and awards the win to the opponent.
- If the player to move has no legal moves, they lose.
