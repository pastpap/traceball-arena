import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { describe, expect, it } from 'vitest';
import WebSocket from 'ws';

const HOST = '127.0.0.1';

function randomPort() {
  return 4200 + Math.floor(Math.random() * 1000);
}

async function startServer(port) {
  const child = spawn(process.execPath, ['src/server.js'], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let output = '';
  child.stdout.on('data', (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    output += chunk.toString();
  });
  const baseUrl = `http://${HOST}:${port}`;
  for (let i = 0; i < 80; i += 1) {
    if (child.exitCode != null) throw new Error(`server exited early: ${output}`);
    try {
      const response = await fetch(`${baseUrl}/api/health`);
      if (response.ok) return { child, baseUrl, wsUrl: `ws://${HOST}:${port}/ws` };
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  child.kill('SIGTERM');
  throw new Error(`server did not become ready: ${output}`);
}

async function stopServer(child) {
  if (!child || child.exitCode != null) return;
  child.kill('SIGTERM');
  await Promise.race([
    once(child, 'exit'),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]);
  if (child.exitCode == null) child.kill('SIGKILL');
}

async function createRoom(baseUrl, moveTimeLimitSeconds = 5) {
  const response = await fetch(`${baseUrl}/api/rooms`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ moveTimeLimitSeconds }),
  });
  expect(response.ok).toBe(true);
  return response.json();
}

async function roomSummary(baseUrl, roomId) {
  const response = await fetch(`${baseUrl}/api/rooms`, { cache: 'no-store' });
  expect(response.ok).toBe(true);
  const payload = await response.json();
  return payload.rooms.find((room) => room.roomId === roomId);
}

async function connect(wsUrl, label) {
  const ws = new WebSocket(wsUrl);
  const messages = [];
  ws.on('message', (raw) => {
    messages.push(JSON.parse(raw.toString()));
  });
  await once(ws, 'open');
  return { label, ws, messages };
}

function send(client, payload) {
  client.ws.send(JSON.stringify(payload));
}

async function waitFor(client, predicate, label = 'message', timeoutMs = 3000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const found = client.messages.find(predicate);
    if (found) return found;
    await new Promise((resolve) => setTimeout(resolve, 25));
  }
  throw new Error(`Timed out waiting for ${client.label} ${label}; saw ${JSON.stringify(client.messages)}`);
}

async function closeClient(client) {
  if (!client || client.ws.readyState === WebSocket.CLOSED) return;
  client.ws.close();
  await Promise.race([
    once(client.ws, 'close'),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
}

describe('realtime WebSocket main playing flows', () => {
  it('does not disconnect a seated player when an older duplicate socket closes after same-client rejoin', async () => {
    const port = randomPort();
    const server = await startServer(port);
    const clients = [];
    try {
      const { roomId } = await createRoom(server.baseUrl, 5);
      const p1a = await connect(server.wsUrl, 'p1-old');
      const p2 = await connect(server.wsUrl, 'p2');
      clients.push(p1a, p2);

      send(p1a, { type: 'claimSeat', roomId, seatId: 'p1', name: 'P1', clientId: 'same-blue' });
      await waitFor(p1a, (msg) => msg.type === 'joined' && msg.playerId === 'p1', 'p1 joined');
      send(p2, { type: 'claimSeat', roomId, seatId: 'p2', name: 'P2', clientId: 'red-client' });
      await waitFor(p2, (msg) => msg.type === 'joined' && msg.playerId === 'p2', 'p2 joined');
      await waitFor(p2, (msg) => msg.type === 'state' && msg.board?.state === 'SessionActive', 'active game');

      const p1b = await connect(server.wsUrl, 'p1-new');
      clients.push(p1b);
      send(p1b, { type: 'watch', roomId, clientId: 'same-blue' });
      await waitFor(p1b, (msg) => msg.type === 'joined' && msg.playerId === 'p1' && msg.rejoined === true, 'same-client rejoin');

      await closeClient(p1a);
      await new Promise((resolve) => setTimeout(resolve, 150));

      const summary = await roomSummary(server.baseUrl, roomId);
      expect(summary.occupancy.activeCount).toBe(2);
      expect(summary.occupancy.p1).toBe('active');
      expect(summary.occupancy.p2).toBe('active');
      expect(p1b.messages.at(-1)?.board?.seats?.blue?.state).toBe('Occupied');
    } finally {
      await Promise.all(clients.map(closeClient));
      await stopServer(server.child);
    }
  });

  it('keeps the remaining player seated when the opponent leaves while another same-client socket is active', async () => {
    const port = randomPort();
    const server = await startServer(port);
    const clients = [];
    try {
      const { roomId } = await createRoom(server.baseUrl, 5);
      const p1a = await connect(server.wsUrl, 'p1-old');
      const p2 = await connect(server.wsUrl, 'p2');
      clients.push(p1a, p2);
      send(p1a, { type: 'claimSeat', roomId, seatId: 'p1', name: 'P1', clientId: 'same-blue' });
      await waitFor(p1a, (msg) => msg.type === 'joined' && msg.playerId === 'p1', 'p1 joined');
      send(p2, { type: 'claimSeat', roomId, seatId: 'p2', name: 'P2', clientId: 'red-client' });
      await waitFor(p2, (msg) => msg.type === 'joined' && msg.playerId === 'p2', 'p2 joined');

      const p1b = await connect(server.wsUrl, 'p1-new');
      clients.push(p1b);
      send(p1b, { type: 'watch', roomId, clientId: 'same-blue' });
      await waitFor(p1b, (msg) => msg.type === 'joined' && msg.playerId === 'p1', 'p1 rejoined');
      await closeClient(p1a);
      await new Promise((resolve) => setTimeout(resolve, 150));

      send(p2, { type: 'leave' });
      await waitFor(p2, (msg) => msg.type === 'left' && msg.playerId === 'p2', 'p2 left');
      await new Promise((resolve) => setTimeout(resolve, 150));

      const summary = await roomSummary(server.baseUrl, roomId);
      expect(summary.occupancy.activeCount).toBe(1);
      expect(summary.occupancy.p1).toBe('active');
      expect(summary.occupancy.p2).toBe('vacant');
    } finally {
      await Promise.all(clients.map(closeClient));
      await stopServer(server.child);
    }
  });

  it('only allows the player who paused to start a new round from the paused state', async () => {
    const port = randomPort();
    const server = await startServer(port);
    const clients = [];
    try {
      const { roomId } = await createRoom(server.baseUrl, 5);
      const p1 = await connect(server.wsUrl, 'pause-p1');
      const p2 = await connect(server.wsUrl, 'pause-p2');
      clients.push(p1, p2);

      send(p1, { type: 'claimSeat', roomId, seatId: 'p1', name: 'P1', clientId: 'pause-blue' });
      await waitFor(p1, (msg) => msg.type === 'joined' && msg.playerId === 'p1', 'p1 joined');
      send(p2, { type: 'claimSeat', roomId, seatId: 'p2', name: 'P2', clientId: 'pause-red' });
      await waitFor(p2, (msg) => msg.type === 'joined' && msg.playerId === 'p2', 'p2 joined');
      await waitFor(p2, (msg) => msg.type === 'state' && msg.board?.state === 'SessionActive', 'active game');

      send(p1, { type: 'pause' });
      await waitFor(p2, (msg) => msg.type === 'state' && msg.board?.state === 'SessionPaused', 'paused game');

      send(p2, { type: 'reset' });
      await waitFor(p2, (msg) => msg.type === 'error' && /paused/i.test(msg.error), 'opponent reset rejection');
      const stillPaused = await roomSummary(server.baseUrl, roomId);
      expect(stillPaused.state).toBe('SessionPaused');

      send(p1, { type: 'reset' });
      await waitFor(p2, (msg) => msg.type === 'state' && msg.board?.state === 'SessionActive' && msg.board?.version > 4, 'pause initiator reset');
      const restarted = await roomSummary(server.baseUrl, roomId);
      expect(restarted.state).toBe('SessionActive');
    } finally {
      await Promise.all(clients.map(closeClient));
      await stopServer(server.child);
    }
  });

  it('passes the first idle timeout, pauses on the second, and keeps the board listed with both players active', async () => {
    const port = randomPort();
    const server = await startServer(port);
    const clients = [];
    try {
      const { roomId } = await createRoom(server.baseUrl, 5);
      const p1 = await connect(server.wsUrl, 'p1');
      const p2 = await connect(server.wsUrl, 'p2');
      clients.push(p1, p2);
      send(p1, { type: 'claimSeat', roomId, seatId: 'p1', name: 'P1', clientId: 'blue-client' });
      await waitFor(p1, (msg) => msg.type === 'joined' && msg.playerId === 'p1', 'p1 joined');
      send(p2, { type: 'claimSeat', roomId, seatId: 'p2', name: 'P2', clientId: 'red-client' });
      await waitFor(p2, (msg) => msg.type === 'joined' && msg.playerId === 'p2', 'p2 joined');
      await waitFor(p2, (msg) => msg.type === 'state' && msg.board?.state === 'SessionActive', 'active game');

      await waitFor(p1, (msg) => msg.type === 'state' && msg.board?.currentSession?.round?.turn === 'red', 'first timeout passed turn', 7000);
      await waitFor(p1, (msg) => msg.type === 'state' && msg.board?.state === 'SessionPaused', 'second timeout paused', 7000);

      const summary = await roomSummary(server.baseUrl, roomId);
      expect(summary.state).toBe('SessionPaused');
      expect(summary.occupancy.activeCount).toBe(2);
      expect(summary.occupancy.p1).toBe('active');
      expect(summary.occupancy.p2).toBe('active');
    } finally {
      await Promise.all(clients.map(closeClient));
      await stopServer(server.child);
    }
  }, 15000);
});
