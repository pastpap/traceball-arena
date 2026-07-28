# Traceball Arena

A realtime browser game inspired by paper soccer / Trace Soccer.

## What it does

- Create a room and share a link or QR code.
- Second player joins, chooses a name, and the game starts immediately.
- WebSocket gameplay with synchronized board state.
- 8-direction movement, no repeated segments, bounce turns from visited points/boundaries, goals, own goals, stuck-loss detection.
- Client-side replay viewer after a game ends. No accounts and no persistent database.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Railway

The app is a single Node web service. Railway should run:

```bash
npm install
npm start
```

The server binds to `process.env.PORT`.

## Rules implemented for this MVP

- The ball starts at midfield.
- Players alternate unless the mover lands on an already visited point or wall/boundary point, which grants a bounce and another move.
- Movement is one grid step in any of 8 directions.
- A segment can never be used twice in either direction.
- Entering the opponent gate scores and ends the game.
- Entering your own gate is an own goal and awards the win to the opponent.
- If the player to move has no legal moves, they lose.
