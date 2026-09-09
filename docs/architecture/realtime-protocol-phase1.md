# Traceball Arena Phase 1 Realtime Protocol

> Canonical server/client contract for the Elm rewrite. The Phase 1 adapter layer is retired: the server broadcasts raw `game` payloads, and Elm derives the board/session view model in `Board.Decode`.

## Goals

- Freeze a board-centric JSON shape for Elm decoders.
- Keep the Node backend authoritative.
- Include monotonic state versions for stale-message protection.
- Make watcher vs waiting-list membership explicit.

## Naming

The canonical architecture uses board-centric names:

- board code, not room id
- blue/red seats, not p1/p2 in Elm-facing data
- session/round state nested under board

State message fields are `type`, `boardCode`, `version`, and `game`.

## ServerToClient messages

### State

Authoritative board snapshot.

```json
{
  "type": "state",
  "boardCode": "ROOM123",
  "version": 2,
  "game": {}
}
```

Fields:

- `type`: lowercase `state`.
- `boardCode`: board/table code.
- `version`: monotonically increasing board version. Elm must ignore incoming state where `incoming.version <= current.version` for the same board.
- `game`: authoritative server payload from `publicGame(game)`.

### Joined

Current acknowledgement message used by the runtime.

```json
{
  "type": "joined",
  "playerId": "p1",
  "roomId": "ROOM123",
  "url": "https://example.test/room/ROOM123"
}
```

Elm should eventually prefer board/seat state from the next `state` message over this acknowledgement.

### Left

Current acknowledgement for explicit leave.

```json
{
  "type": "left",
  "playerId": "p1",
  "roomId": "ROOM123",
  "forfeit": true,
  "winner": "p2"
}
```

### Error

Current general error shape:

```json
{
  "type": "error",
  "error": "Game not found or expired."
}
```

Future canonical error shape for Elm decoders:

```json
{
  "type": "BoardNotFound",
  "boardCode": "MISSING",
  "reason": "not_found_or_expired",
  "message": "Board not found or expired."
}
```

The Phase 1 fixture for not-found uses the future canonical shape.

## Canonical board snapshot

```json
{
  "code": "ROOM123",
  "version": 2,
  "state": "SessionActive",
  "seats": {
    "blue": {
      "color": "blue",
      "state": "Occupied",
      "player": { "displayName": "Stefan" },
      "disconnectedAt": null,
      "canBeFreedAt": null,
      "canBeFreed": false
    },
    "red": {
      "color": "red",
      "state": "Occupied",
      "player": { "displayName": "Friend" },
      "disconnectedAt": null,
      "canBeFreedAt": null,
      "canBeFreed": false
    }
  },
  "currentSession": {},
  "watchers": [],
  "waitingList": [],
  "history": [],
  "createdAt": 1000,
  "updatedAt": 2000,
  "expiresAt": 604802000
}
```

Do not expose `clientId` in public board snapshots.

## Board states

Canonical values:

- `WaitingForPlayers`
- `OneSeatOccupied`
- `SessionActive`
- `SessionPaused`
- `BetweenRounds`
- `SessionEnded`
- `BoardExpired`

Current mappings used by Elm decoder:

- backend `waiting` + zero active seats -> `WaitingForPlayers`
- backend `waiting` + one active seat -> `OneSeatOccupied`
- backend `playing` -> `SessionActive`
- backend `paused` -> `SessionPaused`
- backend `finished` -> `BetweenRounds`

`SessionEnded` and `BoardExpired` are documented target states but are not fully implemented in the current backend yet.

## Seat states

Canonical values:

- `Vacant`
- `Occupied`
- `DisconnectedReserved`

Seat payload:

```json
{
  "color": "blue",
  "state": "Occupied",
  "player": { "displayName": "Stefan" },
  "disconnectedAt": null,
  "canBeFreedAt": null,
  "canBeFreed": false
}
```

## Watchers and waiting list

Watching is passive:

```json
{
  "watchers": [{ "displayName": "Watcher One", "joinedAt": 3000 }],
  "waitingList": []
}
```

Waiting-list opt-in is explicit:

```json
{
  "waitingList": [{ "displayName": "Next Player", "joinedAt": 3100 }]
}
```

Do not infer waiting-list membership from watching.

## Current ClientToServer messages

The existing frontend/server protocol accepts:

### join

Current generic auto-join/rejoin command.

```json
{
  "type": "join",
  "roomId": "ROOM123",
  "name": "Stefan",
  "clientId": "browser-client-id"
}
```

Current behavior:

- Rejoins same client if already seated.
- Claims first vacant seat otherwise.
- Blocks explicit leavers remembered as watcher clients until they explicitly claim a seat.

### watch

Passive watch.

```json
{
  "type": "watch",
  "roomId": "ROOM123"
}
```

### claimSeat

Explicit seat claim.

```json
{
  "type": "claimSeat",
  "roomId": "ROOM123",
  "seatId": "p1",
  "name": "Stefan",
  "clientId": "browser-client-id"
}
```

Elm-facing canonical color mapping:

- `blue` -> `p1`
- `red` -> `p2`

### move

```json
{
  "type": "move",
  "to": { "x": 5, "y": 6 }
}
```

### leave

```json
{
  "type": "leave"
}
```

### pause / resume

```json
{ "type": "pause" }
{ "type": "resume" }
```

Current behavior:

- Only the seated player whose turn it is may manually pause.
- Only that same current-turn seat may resume a paused session.
- Automatic timeout/disconnect pauses keep resume authority with the current-turn seat.
- The pause overlay is resume-only; `reset`/new-round actions belong to winner/between-round flows, not to paused play.

### reset

Current wire name for starting/continuing a new round.

```json
{ "type": "reset" }
```

Canonical Elm name should become `ContinueRound` later.

## Future canonical ClientToServer messages

These are target names for Elm and/or later protocol cleanup:

- `CreateBoard`
- `OpenBoard`
- `WatchBoard`
- `JoinWaitingList`
- `LeaveWaitingList`
- `ClaimSeat`
- `LeaveSeat`
- `MakeMove`
- `PauseSession`
- `ResumeSession`
- `ContinueRound`
- `FreeDisconnectedSeat`

Phase 1 does not need to implement all of them. It documents the direction and naming targets.

## Runtime note

Elm consumes the raw `game` state payload directly.
