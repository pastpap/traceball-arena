# Traceball Arena Board State Machine

> Canonical product and architecture rules for the Elm rewrite. Treat this document as the source of truth for agents and humans working on board/session lifecycle.

## Core model

Traceball Arena is board-centric.

- **Board**: the durable public table identified by a unique code/link. A board can be discovered from the board list and opened directly by code.
- **Seat**: one of two playable sides on a board: `blue` and `red`.
- **Player**: an anonymous browser client occupying one seat on one board. Identity is currently `clientId` plus display name, not an account.
- **Watcher**: a connected client observing a board without requesting a seat.
- **Waiting-list member**: a watcher who explicitly opted in to be considered for the next available seat.
- **Session**: a match-like period between the current blue and red seat occupants. A new human replacement always starts a new session.
- **Round**: one point/rally within a session. After a goal, players continue with a button to start the next round.

## Product invariants

These rules must stay true across backend, Elm frontend, tests, and agent work:

1. A board code refers to a board/table, not to a single session.
2. A client can occupy at most one seat per board.
3. A client may play on multiple boards at the same time.
4. Opening/watching a full board does **not** automatically add the client to the waiting list.
5. Joining the waiting list requires explicit user intent.
6. The server is authoritative for online state.
7. Every server state broadcast must include a monotonically increasing board `version`; Elm ignores stale versions.
8. A replacement player starts a fresh 0-0 session.
9. Explicit leave is a forfeit when the opponent is active or still within disconnect grace.
10. Disconnected seats are reserved for 60 seconds before the opponent can make them available.
11. Boards expire after 1 week of inactivity and are then cleaned up.
12. Public boards stay discoverable for now.

## Board state

Use the board as the top-level state machine:

```text
BoardCreated
  -> WaitingForPlayers
  -> OneSeatOccupied
  -> SessionActive
  -> SessionPaused
  -> BetweenRounds
  -> SessionEnded
  -> WaitingForPlayers | OneSeatOccupied
  -> BoardExpired
```

Implementation note: `SessionEnded` is often an event/moment rather than a long-lived UI state. It may be represented as a transition that appends a session history entry and then derives the next board state from seat occupancy.

Recommended durable shape:

```text
Board
  code
  version
  state
  seats
  currentSession?
  watchers
  waitingList
  history
  createdAt
  updatedAt
  expiresAt
```

## Seat state

Each board has exactly two seats:

```text
Seat
  color: Blue | Red
  state: Vacant | Occupied | DisconnectedReserved
  player?
  disconnectedAt?
  canBeFreedAt?
```

### Seat transitions

```text
Vacant
  -> Occupied                 when a client claims/auto-joins the seat

Occupied
  -> Vacant                   when player leaves and session is closed
  -> DisconnectedReserved     when player's socket disconnects unexpectedly

DisconnectedReserved
  -> Occupied                 when same clientId reconnects within 60 seconds
  -> Vacant                   when opponent frees the seat after 60 seconds
  -> Vacant                   when board/session is abandoned/expired
```

Only the same `clientId` can reclaim a disconnected reserved seat automatically. A different device/browser cannot take it until the grace period ends and the opponent frees it, or until future account support exists.

## Join/open behavior

When a user generates a board:

```text
create board -> creator immediately joins Blue -> board is OneSeatOccupied
```

When a user opens a board by code/link:

```text
both seats vacant      -> user chooses Blue or Red
exactly one seat free  -> user automatically joins the free seat
no seats free          -> user opens as Watcher, with optional Join Waiting List button
```

Watching is passive. A watcher remains outside the waiting list until they click an explicit opt-in control such as `Join waiting list`.

If a seat opens and the waiting list is non-empty, the first waiting-list member should get first opportunity to claim the open seat. Keep the first implementation simple: FIFO order, no bidding/approval rules.

## Session lifecycle

A session starts when both seats are occupied by active players and no current session exists.

```text
NoSession + Blue occupied + Red occupied
  -> SessionActive(score 0-0, round initialized)
```

A session remains tied to the exact two seat occupants that started it. If either occupant leaves or is replaced, the old session closes and a replacement starts a new session.

### Session transitions

```text
SessionActive
  -> SessionPaused       when either seated player pauses or a player disconnects
  -> BetweenRounds       when a goal/point is scored
  -> SessionEnded        when a player forfeits, stale seat is freed, both players leave, or board expires

SessionPaused
  -> SessionActive       when either seated active player resumes
  -> SessionEnded        when leave/free/expire closes the session

BetweenRounds
  -> SessionActive       when players press Continue/New Round
  -> SessionEnded        when leave/free/expire closes the session
```

Either seated player may pause or resume. Watchers and waiting-list members cannot pause/resume.

## Leave and forfeit rules

When a seated player presses Leave:

- The leaver forfeits if the opponent is active or still within the 60-second disconnect grace window.
- The opponent receives one point.
- The current session closes and is archived.
- The leaver's seat becomes vacant.
- The leaver becomes unseated; they may watch or explicitly join/wait again.
- A replacement player starts a new 0-0 session.

If the opponent has already exceeded disconnect grace, leaving abandons/clears the broken session rather than awarding the disconnected ghost a point.

## Disconnect rules

Unexpected disconnect is not the same as Leave.

```text
player socket disconnects
  -> mark seat DisconnectedReserved
  -> pause active session
  -> show opponent: "Player disconnected"
  -> start 60-second grace timer
```

During grace:

- The disconnected client may reconnect automatically by `clientId`.
- The opponent sees the disconnected state and waits.
- The seat is not claimable by others.

After grace:

- The opponent sees `Make seat available`.
- If the opponent clicks it, the disconnected player forfeits.
- The active opponent gets one point.
- The session closes and is archived.
- The disconnected seat becomes vacant.
- The board remains joinable.

If both players disappear and neither returns, board cleanup eventually expires the board after inactivity.

## Round rules

Rounds are nested inside a session.

- The server validates moves.
- The Elm frontend may preview legal moves, but accepted state comes from the server.
- After a goal, the board moves to `BetweenRounds`.
- Players press a Continue/New Round button to start the next round.
- No target score is required for now; sessions are casual/endless until closed by leave/free/expire.

## Board expiry

A board expires after 1 week of inactivity.

Activity includes server-observed board interactions such as:

- create board
- open/watch board
- join waiting list
- claim seat
- leave seat
- reconnect
- move
- pause/resume
- continue round
- free disconnected seat

Expired boards are removed from public lists and cannot be joined. If a client opens an expired board code, the UI should show a clear expired/not found state and offer to create a new board.

## Session history summary

When a session closes, archive at least:

```text
SessionSummary
  sessionId
  boardCode
  blueName
  redName
  finalScore
  startedAt
  endedAt
  endedReason
  winnerColor?
  forfeitByColor?
```

Do not require full move replay in the first rewrite phase. Keep the door open for it later.

## Protocol implications

Every broadcast state should include:

```json
{
  "type": "state",
  "boardCode": "ABCD12",
  "version": 42,
  "board": {}
}
```

Client commands should be intent-focused:

```text
CreateBoard
OpenBoard
WatchBoard
JoinWaitingList
LeaveWaitingList
ClaimSeat
LeaveSeat
MakeMove
PauseSession
ResumeSession
ContinueRound
FreeDisconnectedSeat
```

Server events/history can be event-shaped even if not persisted yet:

```text
BoardCreated
SeatClaimed
WatcherJoined
WaitingListJoined
SessionStarted
MoveAccepted
RoundScored
PlayerDisconnected
PlayerReconnected
SeatFreed
SessionEnded
BoardExpired
```
