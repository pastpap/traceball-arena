const canvas = document.querySelector('#board');
const ctx = canvas.getContext('2d');
const els = {
  newRoom: document.querySelector('#newRoom'),
  copyInvite: document.querySelector('#copyInvite'),
  joinForm: document.querySelector('#joinForm'),
  nameInput: document.querySelector('#nameInput'),
  roomText: document.querySelector('#roomText'),
  inviteBox: document.querySelector('#inviteBox'),
  inviteLink: document.querySelector('#inviteLink'),
  qr: document.querySelector('#qr'),
  status: document.querySelector('#status'),
  playStatus: document.querySelector('#playStatus'),
  p1: document.querySelector('#p1'),
  p2: document.querySelector('#p2'),
  reset: document.querySelector('#reset'),
  replayStart: document.querySelector('#replayStart'),
  replayPrev: document.querySelector('#replayPrev'),
  replayNext: document.querySelector('#replayNext'),
  replayEnd: document.querySelector('#replayEnd'),
  replayRange: document.querySelector('#replayRange'),
  replayText: document.querySelector('#replayText'),
  turnIndicator: document.querySelector('#turnIndicator'),
  toast: document.querySelector('#toast'),
};

const mobileTabs = [...document.querySelectorAll('.mobile-tab')];
const mobilePages = [...document.querySelectorAll('.mobile-page')];

let socket;
let roomId = location.pathname.startsWith('/room/') ? location.pathname.split('/').pop() : null;
let inviteUrl = roomId ? `${location.origin}/room/${roomId}` : '';
let playerId = null;
let game = null;
let replayIndex = null;

const board = { width: 9, height: 13, goalXMin: 3, goalXMax: 5 };
const margin = 58;

init();

function init() {
  setMobilePage('invite');
  if (roomId) showInvite();
  updateRoomText();
  draw();
  if (roomId) connect(() => watchCurrentRoom());
  els.newRoom.addEventListener('click', createRoom);
  els.copyInvite.addEventListener('click', copyInvite);
  els.inviteLink.addEventListener('focus', copyInviteFromField);
  els.inviteLink.addEventListener('pointerdown', copyInviteFromField);
  els.joinForm.addEventListener('submit', join);
  els.reset.addEventListener('click', () => send({ type: 'reset' }));
  canvas.addEventListener('click', boardClick);
  els.replayStart.addEventListener('click', () => setReplay(0));
  els.replayPrev.addEventListener('click', () => setReplay(Math.max(0, currentReplay() - 1)));
  els.replayNext.addEventListener('click', () => setReplay(Math.min((game?.moves?.length || 0), currentReplay() + 1)));
  els.replayEnd.addEventListener('click', () => setReplay(game?.moves?.length || 0));
  els.replayRange.addEventListener('input', () => setReplay(Number(els.replayRange.value)));
  mobileTabs.forEach((tab) => tab.addEventListener('click', () => setMobilePage(tab.dataset.pageTarget)));
}

async function createRoom() {
  if (socket && socket.readyState <= WebSocket.OPEN) socket.close();
  socket = null;
  playerId = null;
  game = null;
  replayIndex = null;
  const res = await fetch('/api/rooms', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' });
  const data = await res.json();
  roomId = data.roomId;
  inviteUrl = data.url || `${location.origin}/room/${roomId}`;
  history.pushState({}, '', `/room/${roomId}`);
  showInvite();
  updateRoomText();
  updateUi();
  draw();
  connect(() => watchCurrentRoom());
  setMobilePage('invite');
  toast('Game created. Choose a name to join.');
}

function join(event) {
  event.preventDefault();
  if (!roomId) return toast('Create a game first.');
  const name = els.nameInput.value.trim();
  const joinRoom = () => send({ type: 'join', roomId, name });
  if (!socket || socket.readyState > WebSocket.OPEN) connect(joinRoom);
  else if (socket.readyState === WebSocket.CONNECTING) socket.addEventListener('open', joinRoom, { once: true });
  else joinRoom();
}

function connect(onOpen) {
  const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  socket = new WebSocket(`${protocol}://${location.host}/ws`);
  if (onOpen) socket.addEventListener('open', onOpen, { once: true });
  socket.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.type === 'joined') {
      playerId = msg.playerId;
      setMobilePage('play');
      toast(`Joined as ${playerId === 'p1' ? 'Blue' : 'Red'}.`);
    }
    if (msg.type === 'state') {
      game = msg.game;
      if (replayIndex !== null && replayIndex > game.moves.length) replayIndex = game.moves.length;
      updateUi();
      draw();
    }
    if (msg.type === 'error') toast(msg.error);
  });
  socket.addEventListener('close', () => {
    if (socket) toast('Connection closed. Refresh or join again.');
  });
}

function watchCurrentRoom() {
  if (roomId) send({ type: 'watch', roomId });
}

function send(payload) {
  if (!socket || socket.readyState !== WebSocket.OPEN) return toast('Not connected yet.');
  socket.send(JSON.stringify(payload));
}

function boardClick(event) {
  if (!game || game.status !== 'playing' || replayIndex !== null) return;
  if (game.turn !== playerId) return toast('Wait for your turn.');
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const click = { x: (event.clientX - rect.left) * scaleX, y: (event.clientY - rect.top) * scaleY };
  const target = nearestPoint(click);
  if (!target) return;
  const legal = game.legalMoves.some((p) => p.x === target.x && p.y === target.y);
  if (!legal) return toast('That move is not legal.');
  send({ type: 'move', to: target });
}

function nearestPoint(click) {
  let best = null;
  let bestDist = Infinity;
  const candidates = game?.legalMoves || gridPoints();
  for (const p of candidates) {
    const px = screenX(p.x);
    const py = screenY(p.y);
    const dist = Math.hypot(click.x - px, click.y - py);
    if (dist < bestDist) { bestDist = dist; best = p; }
  }
  return bestDist < 32 ? best : null;
}

function updateUi() {
  if (!game) {
    els.p1.textContent = 'Waiting for blue';
    els.p2.textContent = 'Waiting for red';
    els.status.textContent = roomId ? 'Choose a name to join this room.' : 'Create a game or open an invite link.';
    els.playStatus.textContent = roomId ? 'Join this room, then play full-screen here.' : 'Create or open a room first.';
    els.replayRange.max = 0;
    els.replayRange.value = 0;
    els.replayText.textContent = 'Replay appears once moves are made.';
    els.turnIndicator.textContent = 'Waiting for players';
    els.turnIndicator.className = 'turn-indicator';
    return;
  }
  els.p1.textContent = game.players.p1?.name || 'Waiting for blue';
  els.p2.textContent = game.players.p2?.name || 'Waiting for red';
  const turnName = game.players[game.turn]?.name || game.turn;
  if (game.status === 'waiting') els.status.textContent = 'Waiting for a friend to join. Share the link or QR code.';
  if (game.status === 'playing') els.status.textContent = `${turnName}'s turn${game.turn === playerId ? ' — your move.' : '.'}`;
  if (game.status === 'finished') els.status.textContent = `${game.players[game.winner]?.name || game.winner} wins. ${game.endReason}`;
  els.playStatus.textContent = els.status.textContent;
  updateTurnIndicator();
  els.replayRange.max = game.moves.length;
  els.replayRange.value = currentReplay();
  els.replayText.textContent = game.moves.length ? `Move ${currentReplay()} of ${game.moves.length}` : 'Replay appears once moves are made.';
}

function showInvite() {
  inviteUrl = `${location.origin}/room/${roomId}`;
  els.inviteBox.classList.remove('hidden');
  els.inviteLink.value = inviteUrl;
  els.qr.src = `/api/qr?url=${encodeURIComponent(inviteUrl)}`;
}

function updateRoomText() {
  els.roomText.textContent = roomId ? `Room ${roomId}. Share it, then both players join with a name.` : 'Create a game or open an invite link.';
}

async function copyInvite() {
  if (!inviteUrl) return toast('Create a game first.');
  await navigator.clipboard.writeText(inviteUrl);
  toast('Invite link copied.');
}

async function copyInviteFromField() {
  if (!inviteUrl) return;
  els.inviteLink.select();
  try {
    await navigator.clipboard.writeText(inviteUrl);
    toast('Invite link copied.');
  } catch {
    toast('Invite selected — copy it from the field.');
  }
}

function updateTurnIndicator() {
  const turn = game?.turn;
  const player = game?.players?.[turn];
  const colorName = turn === 'p1' ? 'Blue' : 'Red';
  const name = player?.name || colorName;
  const orientation = playerId ? `${playerId === 'p1' ? 'Blue' : 'Red'} at bottom` : 'Spectator view: blue at bottom';
  els.turnIndicator.textContent = game.status === 'playing'
    ? `${colorName} turn — ${name}${turn === playerId ? ' — you attack upward' : ''} · ${orientation}`
    : `${game.status === 'finished' ? 'Match finished' : 'Waiting'} · ${orientation}`;
  els.turnIndicator.className = `turn-indicator ${turn === 'p2' ? 'red' : 'blue'}`;
}

function setReplay(index) {
  if (!game) return;
  replayIndex = index === game.moves.length ? null : index;
  els.replayRange.value = index;
  els.replayText.textContent = `Move ${index} of ${game.moves.length}${replayIndex === null ? ' — live board' : ''}`;
  draw();
}

function currentReplay() {
  if (!game) return 0;
  return replayIndex === null ? game.moves.length : replayIndex;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPitch();
  const moves = replayMoves();
  drawSegments(moves);
  drawPoints(moves);
  drawBall(moves);
  drawLegalMoves();
}

function replayMoves() {
  if (!game) return [];
  return game.moves.slice(0, currentReplay());
}

function drawPitch() {
  const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grd.addColorStop(0, '#0cb240');
  grd.addColorStop(1, '#03651e');
  ctx.fillStyle = grd;
  roundRect(ctx, 12, 12, canvas.width - 24, canvas.height - 24, 28);
  ctx.fill();
  ctx.save();
  ctx.globalAlpha = .22;
  for (let i = -canvas.height; i < canvas.width; i += 150) {
    ctx.fillStyle = i % 300 === 0 ? '#75ff8a' : '#004b12';
    ctx.beginPath();
    ctx.moveTo(i, 12); ctx.lineTo(i + 100, 12); ctx.lineTo(i + canvas.height + 100, canvas.height - 12); ctx.lineTo(i + canvas.height, canvas.height - 12); ctx.closePath(); ctx.fill();
  }
  ctx.restore();

  ctx.strokeStyle = '#f8fff8';
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(screenX(0), screenY(1));
  ctx.lineTo(screenX(3), screenY(1));
  ctx.moveTo(screenX(5), screenY(1));
  ctx.lineTo(screenX(8), screenY(1));
  ctx.lineTo(screenX(8), screenY(11));
  ctx.lineTo(screenX(5), screenY(11));
  ctx.moveTo(screenX(3), screenY(11));
  ctx.lineTo(screenX(0), screenY(11));
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(screenX(0), screenY(1)); ctx.lineTo(screenX(0), screenY(11));
  ctx.moveTo(screenX(8), screenY(1)); ctx.lineTo(screenX(8), screenY(11));
  ctx.stroke();
  drawGoal(0); drawGoal(12);
  drawFlags();
}

function drawGoal(y) {
  const top = y === 0;
  const x1 = screenX(3), x2 = screenX(5), gy = screenY(y);
  ctx.strokeStyle = '#f8fff8'; ctx.lineWidth = 8;
  ctx.beginPath(); ctx.moveTo(x1, top ? screenY(1) : screenY(11)); ctx.lineTo(x1, gy); ctx.lineTo(x2, gy); ctx.lineTo(x2, top ? screenY(1) : screenY(11)); ctx.stroke();
  ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 1;
  for (let x = x1; x <= x2 + 1; x += 10) { ctx.beginPath(); ctx.moveTo(x, gy); ctx.lineTo(x + 42, top ? gy - 54 : gy + 54); ctx.stroke(); }
  for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(x1, gy + (top ? -i * 10 : i * 10)); ctx.lineTo(x2, gy + (top ? -i * 10 : i * 10)); ctx.stroke(); }
  ctx.restore();
}

function drawFlags() {
  for (const p of [{x:0,y:1,c:'#ff3b30'},{x:8,y:1,c:'#ff3b30'},{x:0,y:11,c:'#0b7cff'},{x:8,y:11,c:'#0b7cff'}]) {
    const x = screenX(p.x), y = screenY(p.y);
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (p.x ? 18 : -18), y + (p.y < 6 ? -48 : 48)); ctx.stroke();
    ctx.fillStyle = p.c; ctx.beginPath(); ctx.moveTo(x + (p.x ? 18 : -18), y + (p.y < 6 ? -48 : 48)); ctx.lineTo(x + (p.x ? 48 : -48), y + (p.y < 6 ? -39 : 39)); ctx.lineTo(x + (p.x ? 18 : -18), y + (p.y < 6 ? -28 : 28)); ctx.fill();
  }
}

function drawSegments(moves) {
  ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const m of moves) {
    ctx.strokeStyle = m.playerId === 'p1' ? '#0b7cff' : '#ff3b30';
    ctx.beginPath(); ctx.moveTo(screenX(m.from.x), screenY(m.from.y)); ctx.lineTo(screenX(m.to.x), screenY(m.to.y)); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.84)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(screenX(m.from.x), screenY(m.from.y)); ctx.lineTo(screenX(m.to.x), screenY(m.to.y)); ctx.stroke();
    ctx.lineWidth = 7;
  }
}

function drawPoints(moves) {
  const visited = new Set(['4,6']);
  for (const m of moves) visited.add(`${m.to.x},${m.to.y}`);
  for (const p of gridPoints()) {
    const hit = visited.has(`${p.x},${p.y}`);
    ctx.fillStyle = hit ? '#0b7cff' : '#f5fff7';
    ctx.beginPath(); ctx.arc(screenX(p.x), screenY(p.y), hit ? 10 : 7, 0, Math.PI * 2); ctx.fill();
    if (hit) { ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 2; ctx.stroke(); }
  }
}

function drawBall(moves) {
  const p = moves.length ? moves[moves.length - 1].to : (game?.ball || { x: 4, y: 6 });
  ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(screenX(p.x), screenY(p.y), 15, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#111'; ctx.font = '20px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('⚽', screenX(p.x), screenY(p.y) + 1);
}

function isPlayerInverted() { return playerId === 'p2'; }

function drawLegalMoves() {
  if (!game || game.status !== 'playing' || game.turn !== playerId || replayIndex !== null) return;
  ctx.strokeStyle = '#ffe66d'; ctx.lineWidth = 4;
  for (const p of game.legalMoves) {
    ctx.beginPath(); ctx.arc(screenX(p.x), screenY(p.y), 17, 0, Math.PI * 2); ctx.stroke();
  }
}

function gridPoints() {
  const pts = [];
  for (let y = 1; y <= 11; y++) for (let x = 0; x <= 8; x++) pts.push({ x, y });
  for (let y of [0, 12]) for (let x = 3; x <= 5; x++) pts.push({ x, y });
  return pts;
}
function screenX(x) {
  const viewX = isPlayerInverted() ? (board.width - 1 - x) : x;
  return margin + viewX * ((canvas.width - margin * 2) / (board.width - 1));
}
function screenY(y) {
  const viewY = isPlayerInverted() ? (board.height - 1 - y) : y;
  return margin + viewY * ((canvas.height - margin * 2) / (board.height - 1));
}
function roundRect(context, x, y, w, h, r) { context.beginPath(); context.roundRect(x, y, w, h, r); }
function toast(message) { els.toast.textContent = message; els.toast.classList.add('show'); setTimeout(() => els.toast.classList.remove('show'), 2300); }

function setMobilePage(page = 'play') {
  const selected = ['play', 'invite', 'match'].includes(page) ? page : 'play';
  document.body.dataset.mobilePage = selected;
  mobileTabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.pageTarget === selected));
  mobilePages.forEach((panel) => panel.classList.toggle('active', panel.dataset.mobilePage === selected));
  if (selected === 'play') requestAnimationFrame(draw);
}
