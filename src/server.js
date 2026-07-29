import express from 'express';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { nanoid } from 'nanoid';
import QRCode from 'qrcode';
import { addPlayer, createGame, makeMove, publicGame, resetGame } from './game.js';

const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });
const rooms = new Map();
const sockets = new Map();
const appShellPath = fileURLToPath(new URL('../public/index.html', import.meta.url));

app.use(express.static('public', { extensions: ['html'] }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, rooms: rooms.size, uptime: process.uptime() });
});

app.post('/api/rooms', express.json(), (req, res) => {
  const roomId = nanoid(8);
  const game = createGame(roomId);
  rooms.set(roomId, game);
  res.json({ roomId, url: roomUrl(roomId, originFromRequest(req)) });
});

app.get('/api/rooms/:roomId', (req, res) => {
  const roomId = safeRoomId(req.params.roomId);
  if (!roomId) return res.status(400).json({ error: 'Invalid room code.' });
  if (!rooms.has(roomId)) return res.status(404).json({ error: 'Game not found or expired.' });
  res.json({ roomId, url: roomUrl(roomId, originFromRequest(req)) });
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

    const game = socketState.roomId ? rooms.get(socketState.roomId) : null;
    if (!game) return send(ws, 'error', { error: 'Join a room first.' });

    if (msg.type === 'move') {
      const result = makeMove(game, socketState.playerId, msg.to);
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
    sockets.delete(ws);
  });
});

function getOrCreateRoom(roomId) {
  let game = rooms.get(roomId);
  if (!game) {
    game = createGame(roomId);
    rooms.set(roomId, game);
  }
  return game;
}

function safeRoomId(value) {
  const roomId = String(value || '').trim();
  return /^[A-Za-z0-9_-]{6,32}$/.test(roomId) ? roomId : null;
}

function broadcast(roomId) {
  const game = rooms.get(roomId);
  if (!game) return;
  const payload = { game: publicGame(game) };
  for (const [client, state] of sockets.entries()) {
    if (state.roomId === roomId && client.readyState === client.OPEN) {
      send(client, 'state', payload);
    }
  }
}

function send(ws, type, payload) {
  if (ws.readyState === ws.OPEN) ws.send(JSON.stringify({ type, ...payload }));
}

function roomUrl(roomId, requestOrigin) {
  const base = requestOrigin || process.env.PUBLIC_URL || (process.env.RAILWAY_PUBLIC_DOMAIN && `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`) || `http://localhost:${PORT}`;
  return `${base}/room/${roomId}`;
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
