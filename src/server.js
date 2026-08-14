import express from 'express';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { nanoid } from 'nanoid';
import QRCode from 'qrcode';
import { activeSeatCount, addPlayer, applyTurnTimeout, boardExpiresAt, boardLastActivityAt, claimSeat, createGame, freeDisconnectedSeat, isBoardExpired, joinWaitingList, leavePlayerAfterOpponentGrace, leaveWaitingList, makeMove, markPlayerDisconnected, normalizeMoveTimeLimitMs, pauseGame, publicGame, resetGame, resumeGame } from './game.js';
import { toLegacyCompatibleStateMessage } from './protocol/phase1.js';

const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });
const rooms = new Map();
const sockets = new Map();
const roomTimers = new Map();
const appShellPath = fileURLToPath(new URL('../public/index.html', import.meta.url));
const elmShellPath = fileURLToPath(new URL('../public/elm.html', import.meta.url));

app.use(express.static('public', { extensions: ['html'] }));

app.get('/api/health', (_req, res) => {
  cleanupExpiredRooms();
  res.json({ ok: true, rooms: rooms.size, uptime: process.uptime() });
});

app.post('/api/rooms', express.json(), (req, res) => {
  cleanupExpiredRooms();
  const roomId = nanoid(8);
  const moveTimeLimitMs = normalizeMoveTimeLimitMs(Number(req.body?.moveTimeLimitSeconds) * 1000, 15000);
  const game = createGame(roomId, { moveTimeLimitMs });
  rooms.set(roomId, game);
  res.json({ roomId, url: roomUrl(roomId, originFromRequest(req)), moveTimeLimitMs: game.moveTimeLimitMs });
});

app.get('/api/rooms', (req, res) => {
  cleanupExpiredRooms();
  const origin = originFromRequest(req);
  const summaries = [...rooms.values()]
    .map((game) => publicRoomSummary(game, origin))
    .sort((a, b) => Number(b.updatedAt || 0) - Number(a.updatedAt || 0));
  res.json({ rooms: summaries });
});

app.get('/api/rooms/:roomId', (req, res) => {
  cleanupExpiredRooms();
  const roomId = safeRoomId(req.params.roomId);
  if (!roomId) return res.status(400).json({ error: 'Invalid room code.' });
  const game = rooms.get(roomId);
  if (!game) return res.status(404).json({ error: 'Game not found or expired.' });
  res.json({ roomId, url: roomUrl(roomId, originFromRequest(req)), moveTimeLimitMs: game.moveTimeLimitMs || 0 });
});

app.get('/api/qr', async (req, res) => {
  const url = typeof req.query.url === 'string' ? req.query.url : roomUrl(String(req.query.room || ''), originFromRequest(req));
  try {
    const png = await QRCode.toBuffer(url, { type: 'png', margin: 1, scale: 8, color: { dark: '#102a1a', light: '#ffffff' } });
    res.setHeader('content-type', 'image/png');
    res.send(png);
  } catch (error) {
    res.status(500).json({ error: 'Could not generate QR code.' });
  }
});

app.get('/elm', (_req, res) => {
  res.type('html').send(readFileSync(elmShellPath, 'utf8'));
});

app.get('/room/:roomId', (_req, res) => {
  res.type('html').send(readFileSync(appShellPath, 'utf8'));
});

wss.on('connection', (ws) => {
  const socketState = { roomId: null, playerId: null };
  sockets.set(ws, socketState);

  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return send(ws, 'error', { error: 'Invalid JSON.' });
    }
    cleanupExpiredRooms();

    if (msg.type === 'join') {
      const roomId = safeRoomId(msg.roomId);
      if (!roomId) return send(ws, 'error', { error: 'Invalid room code.' });
      const game = rooms.get(roomId);
      if (!game) return send(ws, 'error', { error: 'Game not found or expired.' });
      const result = addPlayer(game, msg.name, msg.clientId);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      socketState.roomId = roomId;
      socketState.playerId = result.playerId;
      send(ws, 'joined', { playerId: result.playerId, roomId, url: roomUrl(roomId) });
      broadcast(roomId);
      return;
    }

    if (msg.type === 'watch') {
      const roomId = safeRoomId(msg.roomId);
      if (!roomId) return send(ws, 'error', { error: 'Invalid room code.' });
      if (!rooms.has(roomId)) return send(ws, 'error', { error: 'Game not found or expired.' });
      if (socketState.roomId !== roomId) socketState.playerId = null;
      socketState.roomId = roomId;
      broadcast(roomId);
      return;
    }

    if (msg.type === 'claimSeat') {
      const roomId = safeRoomId(msg.roomId);
      if (!roomId) return send(ws, 'error', { error: 'Invalid room code.' });
      const game = rooms.get(roomId);
      if (!game) return send(ws, 'error', { error: 'Game not found or expired.' });
      const result = claimSeat(game, msg.seatId, msg.name, msg.clientId);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      socketState.roomId = roomId;
      socketState.playerId = result.playerId;
      send(ws, 'joined', { playerId: result.playerId, roomId, rejoined: Boolean(result.rejoined) });
      broadcast(roomId);
      return;
    }

    if (msg.type === 'joinWaitingList') {
      const roomId = safeRoomId(msg.roomId);
      if (!roomId) return send(ws, 'error', { error: 'Invalid room code.' });
      const game = rooms.get(roomId);
      if (!game) return send(ws, 'error', { error: 'Game not found or expired.' });
      const result = joinWaitingList(game, msg.name, msg.clientId);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      socketState.roomId = roomId;
      send(ws, 'waitingListJoined', { roomId, rejoined: Boolean(result.rejoined) });
      broadcast(roomId);
      return;
    }

    if (msg.type === 'leaveWaitingList') {
      const roomId = safeRoomId(msg.roomId || socketState.roomId);
      if (!roomId) return send(ws, 'error', { error: 'Invalid room code.' });
      const game = rooms.get(roomId);
      if (!game) return send(ws, 'error', { error: 'Game not found or expired.' });
      const result = leaveWaitingList(game, msg.clientId);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      socketState.roomId = roomId;
      send(ws, 'waitingListLeft', { roomId });
      broadcast(roomId);
      return;
    }

    const game = socketState.roomId ? rooms.get(socketState.roomId) : null;
    if (!game) return send(ws, 'error', { error: 'Join a room first.' });

    if (msg.type === 'move') {
      const timeout = applyTurnTimeout(game);
      if (timeout.ok) {
        broadcast(socketState.roomId);
        return send(ws, 'error', { error: timeout.paused ? 'Both players timed out — game paused.' : 'Time expired — turn passed.' });
      }
      const result = makeMove(game, socketState.playerId, msg.to);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      broadcast(socketState.roomId);
      return;
    }

    if (msg.type === 'leave') {
      if (!socketState.playerId) return send(ws, 'error', { error: 'You are not occupying a seat.' });
      const leavingPlayerId = socketState.playerId;
      const result = leavePlayerAfterOpponentGrace(game, leavingPlayerId);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      socketState.playerId = null;
      send(ws, 'left', {
        playerId: leavingPlayerId,
        roomId: socketState.roomId,
        forfeit: result.forfeit,
        winner: result.winner,
      });
      broadcast(socketState.roomId);
      return;
    }

    if (msg.type === 'freeSeat') {
      if (!socketState.playerId) return send(ws, 'error', { error: 'Only the seated opponent can free a disconnected seat.' });
      const result = freeDisconnectedSeat(game, socketState.playerId, msg.seatId);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      send(ws, 'seatFreed', {
        playerId: result.playerId,
        roomId: socketState.roomId,
        winner: result.winner,
        forfeit: result.forfeit,
      });
      broadcast(socketState.roomId);
      return;
    }

    if (msg.type === 'pause') {
      if (!socketState.playerId) return send(ws, 'error', { error: 'Only joined players can pause.' });
      const result = pauseGame(game, { reason: 'manual', byPlayerId: socketState.playerId });
      if (!result.ok) return send(ws, 'error', { error: result.error });
      broadcast(socketState.roomId);
      return;
    }

    if (msg.type === 'resume') {
      if (!socketState.playerId) return send(ws, 'error', { error: 'Only joined players can resume.' });
      const result = resumeGame(game);
      if (!result.ok) return send(ws, 'error', { error: result.error });
      broadcast(socketState.roomId);
      return;
    }

    if (msg.type === 'reset') {
      if (!socketState.playerId) return send(ws, 'error', { error: 'Only joined players can start a new round.' });
      resetGame(game);
      broadcast(socketState.roomId);
      return;
    }
  });

  ws.on('close', () => {
    const state = sockets.get(ws);
    sockets.delete(ws);
    if (!state?.roomId || !state.playerId) return;
    const game = rooms.get(state.roomId);
    if (!game) return;
    const result = markPlayerDisconnected(game, state.playerId);
    if (result.ok) broadcast(state.roomId);
  });
});

function cleanupExpiredRooms(now = Date.now()) {
  for (const [roomId, game] of rooms.entries()) {
    if (!isBoardExpired(game, now)) continue;
    clearTimeout(roomTimers.get(roomId));
    roomTimers.delete(roomId);
    rooms.delete(roomId);
    for (const [client, state] of sockets.entries()) {
      if (state.roomId !== roomId) continue;
      state.roomId = null;
      state.playerId = null;
      send(client, 'BoardNotFound', { boardCode: roomId, reason: 'not_found_or_expired', message: 'Board not found or expired.' });
    }
  }
}

function safeRoomId(value) {
  const roomId = String(value || '').trim();
  return /^[A-Za-z0-9_-]{6,32}$/.test(roomId) ? roomId : null;
}

function broadcast(roomId) {
  const game = rooms.get(roomId);
  if (!game) return;
  applyTurnTimeout(game);
  const payload = toLegacyCompatibleStateMessage(game);
  for (const [client, state] of sockets.entries()) {
    if (state.roomId === roomId && client.readyState === client.OPEN) {
      send(client, 'state', payload);
    }
  }
  scheduleRoomTimeout(roomId);
}

function scheduleRoomTimeout(roomId) {
  clearTimeout(roomTimers.get(roomId));
  roomTimers.delete(roomId);
  const game = rooms.get(roomId);
  if (!game || game.status !== 'playing' || !game.moveTimeLimitMs || !game.turnStartedAt) return;
  const delay = Math.max(0, game.turnStartedAt + game.moveTimeLimitMs - Date.now() + 30);
  const timer = setTimeout(() => {
    const current = rooms.get(roomId);
    if (!current) return;
    if (applyTurnTimeout(current).ok) broadcast(roomId);
    else scheduleRoomTimeout(roomId);
  }, delay);
  roomTimers.set(roomId, timer);
}

function send(ws, type, payload) {
  if (ws.readyState === ws.OPEN) ws.send(JSON.stringify({ type, ...payload }));
}

function publicRoomSummary(game, requestOrigin) {
  const activeCount = activeSeatCount(game);
  const publicState = publicGame(game);
  const lastResult = publicState.history.length ? publicState.history[publicState.history.length - 1] : null;
  return {
    roomId: game.roomId,
    url: roomUrl(game.roomId, requestOrigin),
    elmUrl: elmRoomUrl(game.roomId, requestOrigin),
    status: game.status,
    state: publicState.status === 'finished' ? 'BetweenRounds' : publicState.status === 'playing' ? 'SessionActive' : publicState.status === 'paused' ? 'SessionPaused' : activeCount === 1 ? 'OneSeatOccupied' : 'WaitingForPlayers',
    players: publicState.players,
    occupancy: {
      activeCount,
      vacantCount: 2 - activeCount,
      p1: publicState.players.p1?.status || 'vacant',
      p2: publicState.players.p2?.status || 'vacant',
    },
    score: publicState.score,
    moveCount: Array.isArray(game.moves) ? game.moves.length : 0,
    historyCount: Array.isArray(game.history) ? game.history.length : 0,
    lastResult,
    createdAt: game.createdAt,
    updatedAt: game.updatedAt,
    lastActivityAt: boardLastActivityAt(game),
    expiresAt: boardExpiresAt(game),
  };
}

function roomUrl(roomId, requestOrigin) {
  const base = requestOrigin || process.env.PUBLIC_URL || (process.env.RAILWAY_PUBLIC_DOMAIN && `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`) || `http://localhost:${PORT}`;
  return `${base}/room/${roomId}`;
}

function elmRoomUrl(roomId, requestOrigin) {
  const base = requestOrigin || process.env.PUBLIC_URL || (process.env.RAILWAY_PUBLIC_DOMAIN && `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`) || `http://localhost:${PORT}`;
  return `${base}/elm?board=${encodeURIComponent(roomId)}`;
}

function originFromRequest(req) {
  const host = req.get('x-forwarded-host') || req.get('host');
  if (!host) return null;
  const protocol = req.get('x-forwarded-proto') || req.protocol || 'http';
  return `${protocol}://${host}`;
}

server.listen(PORT, () => {
  console.log(`Traceball Arena listening on ${PORT}`);
});
