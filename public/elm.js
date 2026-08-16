const FIXTURE_URL = '/fixtures/phase1/board-active-session.json';
const CLIENT_ID_KEY = 'traceballElmClientId';
const PLAYER_NAME_KEY = 'traceballPlayerName';

function initialModel() {
  return {
    board: null,
    boardCode: '',
    version: 0,
    error: null,
    ignoredStaleVersion: null,
    connectionStatus: 'idle',
    clientId: '',
    ownSeat: null,
    waitingListMember: false,
    autoJoinAttempted: false,
    pendingMoveKey: null,
    pendingNewRound: false,
    pendingFreeSeat: null,
  };
}

function decodeStateMessage(message) {
  if (!message || typeof message !== 'object') {
    return { ok: false, error: 'malformed message: expected object' };
  }
  if (message.type === 'error') {
    return { ok: false, error: message.error || 'Server error.' };
  }
  if (message.type === 'BoardNotFound') {
    return { ok: false, error: message.message || 'Board not found or expired.', boardCode: message.boardCode || '' };
  }
  if (message.type !== 'state') {
    return { ok: false, error: `unsupported message type: ${message.type || 'missing type'}` };
  }
  if (!message.board || typeof message.board !== 'object') {
    return { ok: false, error: 'malformed state: missing board payload' };
  }
  const board = message.board;
  const version = Number(message.version ?? board.version);
  if (!Number.isFinite(version)) {
    return { ok: false, error: 'malformed state: missing numeric version' };
  }
  if (!board.code || !board.seats || !board.seats.blue || !board.seats.red) {
    return { ok: false, error: 'malformed state: missing board code or seats' };
  }
  return {
    ok: true,
    value: {
      board,
      boardCode: message.boardCode || board.code,
      version,
    },
  };
}

function applyState(model, message) {
  const current = model || initialModel();
  const decoded = decodeStateMessage(message);
  if (!decoded.ok) {
    return { ...current, error: decoded.error, boardCode: decoded.boardCode ?? current.boardCode };
  }
  const incoming = decoded.value;
  if (incoming.version <= current.version) {
    return { ...current, ignoredStaleVersion: incoming.version, error: null };
  }
  return {
    ...current,
    board: incoming.board,
    boardCode: incoming.boardCode,
    version: incoming.version,
    error: null,
    ignoredStaleVersion: null,
  };
}

function getStorage() {
  return window.localStorage || localStorage;
}

function getOrCreateClientId() {
  const storage = getStorage();
  const existing = storage?.getItem?.(CLIENT_ID_KEY);
  if (existing) return existing;
  const randomPart = Math.random().toString(36).slice(2, 12);
  const id = `traceball-elm-${randomPart}`;
  storage?.setItem?.(CLIENT_ID_KEY, id);
  return id;
}

function getStoredPlayerName() {
  const storage = getStorage();
  const stored = String(storage?.getItem?.(PLAYER_NAME_KEY) || '').trim();
  return stored.slice(0, 24) || 'Elm Player';
}

function persistPlayerName(name) {
  const value = String(name || '').trim().slice(0, 24) || 'Elm Player';
  getStorage()?.setItem?.(PLAYER_NAME_KEY, value);
  return value;
}

function timerOptions(selectedSeconds = 15) {
  const options = [0, 5, 10, 15, 30, 60];
  return options.map((seconds) => `<option value="${seconds}"${Number(selectedSeconds) === seconds ? ' selected' : ''}>${seconds === 0 ? 'Off' : `${seconds} seconds`}</option>`).join('');
}

function websocketUrl() {
  const loc = window.location || location;
  const protocol = loc.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${loc.host}/ws`;
}

function parseBoardCodeFromLocation() {
  const loc = window.location || location;
  const params = new URLSearchParams(loc.search || '');
  return sanitizeBoardCode(params.get('board') || params.get('room') || params.get('code') || '');
}

function sanitizeBoardCode(value) {
  const code = String(value || '').trim();
  return /^[A-Za-z0-9_-]{6,32}$/.test(code) ? code : '';
}

function createSocketBridge({ boardCode, root, onModelChange } = {}) {
  const code = sanitizeBoardCode(boardCode);
  const bridge = {
    boardCode: code,
    clientId: getOrCreateClientId(),
    model: { ...initialModel(), boardCode: code, clientId: getOrCreateClientId(), connectionStatus: 'connecting' },
    socket: null,
    close() {
      if (bridge.socket) bridge.socket.close();
    },
    sendCommand(command) {
      if (!bridge.socket || bridge.socket.readyState !== 1) return false;
      bridge.socket.send(JSON.stringify(command));
      return true;
    },
    claimSeat(seatId, name = 'Elm Player') {
      return bridge.sendCommand({ type: 'claimSeat', roomId: bridge.boardCode, seatId, name, clientId: bridge.clientId });
    },
    joinWaitingList(name = 'Elm Player') {
      return bridge.sendCommand({ type: 'joinWaitingList', roomId: bridge.boardCode, name, clientId: bridge.clientId });
    },
    leaveWaitingList() {
      return bridge.sendCommand({ type: 'leaveWaitingList', roomId: bridge.boardCode, clientId: bridge.clientId });
    },
    leaveSeat() {
      return bridge.sendCommand({ type: 'leave' });
    },
    submitMove(point) {
      return bridge.sendCommand({ type: 'move', to: point });
    },
    newRound() {
      return bridge.sendCommand({ type: 'reset' });
    },
    freeSeat(seatId) {
      return bridge.sendCommand({ type: 'freeSeat', seatId });
    },
  };
  if (!code) {
    bridge.model = { ...bridge.model, connectionStatus: 'error', error: 'Enter a valid board code to watch.' };
    renderBridge(root, bridge, onModelChange);
    return bridge;
  }
  const SocketCtor = window.WebSocket || WebSocket;
  bridge.socket = new SocketCtor(websocketUrl());
  bridge.socket.onopen = () => {
    bridge.model = { ...bridge.model, connectionStatus: 'connected', error: null };
    bridge.socket.send(JSON.stringify({ type: 'watch', roomId: code, clientId: bridge.clientId }));
    renderBridge(root, bridge, onModelChange);
  };
  bridge.socket.onmessage = (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch {
      bridge.model = { ...bridge.model, error: 'malformed websocket message', connectionStatus: 'connected' };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === 'joined') {
      bridge.model = { ...bridge.model, ownSeat: message.playerId || bridge.model.ownSeat, waitingListMember: false, error: null, pendingMoveKey: null, pendingNewRound: false, pendingFreeSeat: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === 'left') {
      bridge.model = { ...bridge.model, ownSeat: null, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === 'waitingListJoined') {
      bridge.model = { ...bridge.model, waitingListMember: true, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === 'waitingListLeft') {
      bridge.model = { ...bridge.model, waitingListMember: false, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    if (message.type === 'seatFreed') {
      bridge.model = { ...bridge.model, pendingFreeSeat: null, error: null };
      renderBridge(root, bridge, onModelChange);
      return;
    }
    bridge.model = { ...applyState(bridge.model, message), connectionStatus: bridge.model.connectionStatus, clientId: bridge.clientId, ownSeat: bridge.model.ownSeat, waitingListMember: bridge.model.waitingListMember, autoJoinAttempted: bridge.model.autoJoinAttempted, pendingMoveKey: null, pendingNewRound: false, pendingFreeSeat: null };
    renderBridge(root, bridge, onModelChange);
  };
  bridge.socket.onerror = () => {
    bridge.model = { ...bridge.model, connectionStatus: 'error', error: 'WebSocket connection error.' };
    renderBridge(root, bridge, onModelChange);
  };
  bridge.socket.onclose = () => {
    bridge.model = { ...bridge.model, connectionStatus: 'disconnected' };
    renderBridge(root, bridge, onModelChange);
  };
  renderBridge(root, bridge, onModelChange);
  return bridge;
}



function boardUrl(code = '') {
  return `/?board=${encodeURIComponent(code)}`;
}

function absoluteRoomInviteUrl(code = '') {
  const loc = window.location || location;
  const origin = loc.origin || `${loc.protocol}//${loc.host}`;
  return `${origin}/room/${encodeURIComponent(code)}`;
}

function roomSummaryFromBoard(board) {
  if (!board?.code) return null;
  const session = board.currentSession;
  const activeCount = ['blue', 'red'].filter((seat) => board.seats?.[seat]?.state !== 'Vacant').length;
  return {
    roomId: board.code,
    elmUrl: boardUrl(board.code),
    state: board.state,
    status: session?.state || board.state,
    occupancy: { activeCount, vacantCount: Math.max(0, 2 - activeCount) },
    score: session?.score || { blue: 0, red: 0 },
    moveCount: session?.round?.moves?.length || 0,
    watcherCount: Array.isArray(board.watchers) ? board.watchers.length : 0,
    waitingListCount: Array.isArray(board.waitingList) ? board.waitingList.length : 0,
    lastActivityAt: board.updatedAt || 'current board',
    expiresAt: board.expiresAt || 'unknown',
  };
}

function renderInviteShare(model = initialModel()) {
  const code = sanitizeBoardCode(model?.boardCode || model?.board?.code || '');
  if (!code) return '';
  const inviteUrl = absoluteRoomInviteUrl(code);
  return `
    <section id="inviteBox" class="invite" aria-label="Share this match">
      <img id="qr" alt="QR code for board ${escapeHtml(code)}" src="/api/qr?url=${encodeURIComponent(inviteUrl)}" />
      <div>
        <label for="inviteLink">Send this link to a friend</label>
        <input id="inviteLink" readonly value="${escapeHtml(inviteUrl)}" />
        <button id="copyInviteCard" class="ghost" type="button" data-elm-command="copy-invite">Copy invite link</button>
        <p id="roomText" class="elm-shell-note">Board ${escapeHtml(code)} · friends can scan the QR or open the link.</p>
      </div>
    </section>`;
}

async function createBoardAsBlue({ root, name = 'Elm Player', moveTimeLimitSeconds = 15, onModelChange } = {}) {
  const response = await fetch('/api/rooms', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ moveTimeLimitSeconds }),
  });
  if (!response.ok) throw new Error(`Create board failed: ${response.status}`);
  const data = await response.json();
  const boardCode = sanitizeBoardCode(data.roomId);
  if (!boardCode) throw new Error('Create board failed: invalid board code.');
  if (window.history?.replaceState) window.history.replaceState({}, '', boardUrl(boardCode));
  const bridge = createSocketBridge({ boardCode, root, onModelChange });
  const originalOnOpen = bridge.socket?.onopen;
  if (bridge.socket) {
    bridge.socket.onopen = () => {
      originalOnOpen?.();
      bridge.claimSeat('p1', name);
    };
  }
  return bridge;
}

function renderBridge(root, bridge, onModelChange) {
  if (root) root.innerHTML = renderModel(bridge.model);
  if (typeof onModelChange === 'function') onModelChange(bridge.model, bridge);
}

function seatLabel(seat) {
  if (!seat || seat.state === 'Vacant') return 'Open seat';
  const name = seat.player?.displayName || 'Unknown player';
  const disconnected = seat.state === 'DisconnectedReserved' && seat.canBeFreed ? ' · can be freed' : '';
  return `${name} · ${seat.state}${disconnected}`;
}

function peopleList(title, people) {
  const items = Array.isArray(people) && people.length
    ? `<ul>${people.map((person) => `<li>${escapeHtml(person.displayName || 'Anonymous')}</li>`).join('')}</ul>`
    : '<p>None</p>';
  return `<section class="elm-people"><h3>${title}</h3>${items}</section>`;
}

function renderOpenBoardForm(model = initialModel()) {
  const code = model.boardCode || '';
  const playerName = getStoredPlayerName();
  return `
    <div id="homeModeToggle" class="home-mode-toggle mobile-page active" data-mobile-page="invite" role="group" aria-label="Home game type">
      <button id="onlineMode" class="active" type="button" data-home-mode="online" aria-pressed="true">Online</button>
      <button id="localMode" type="button" data-home-mode="local" aria-pressed="false">Local</button>
    </div>
    <div class="online-form-stack">
      <label class="player-name-field" for="playerNameInput">
        <span>Your name</span>
        <input id="playerNameInput" autocomplete="nickname" maxlength="24" placeholder="Your name" value="${escapeHtml(playerName)}" required />
      </label>
      <form class="elm-open-board" id="elmOpenBoardForm">
        <label for="elmBoardCode">Open board as watcher</label>
        <div class="elm-open-row">
          <input id="elmBoardCode" name="board" value="${escapeHtml(code)}" placeholder="Board code" autocomplete="off" />
          <button type="submit">Watch board</button>
          <button type="button" id="elmCreateBoard">Create board as Blue</button>
        </div>
        <label class="timer-setting" for="onlineMoveTimer"><span>Move timer</span><select id="onlineMoveTimer">${timerOptions(15)}</select></label>
        <p class="elm-connection">Connection: ${escapeHtml(model.connectionStatus || 'idle')}</p>
      </form>
    </div>
    <section id="localPanel" class="card join-panel local-panel mobile-page hidden" data-mobile-page="invite">
      <div><h2>Local same-screen PvP</h2><p>Players face each other and play on this device. The pitch stays fixed for local play.</p></div>
      <section id="resumeLocalCard" class="resume-local-card hidden" aria-live="polite"><div><strong>Paused local game</strong><p id="resumeLocalText">Resume the saved same-device game.</p></div><div class="resume-local-actions"><button id="resumeLocalSaved" class="primary" type="button">Resume saved game</button><button id="discardLocalSaved" class="ghost" type="button">Discard</button></div></section>
      <form id="localForm">
        <input id="localP1Name" maxlength="24" placeholder="Blue player name" value="Blue" required />
        <input id="localP2Name" maxlength="24" placeholder="Red player name" value="Red" required />
        <label class="timer-setting" for="localMoveTimer"><span>Move timer</span><select id="localMoveTimer">${timerOptions(15)}</select></label>
        <button id="startLocal" class="primary" type="submit">Start local match</button>
      </form>
    </section>`;
}



const ELM_BOARD = { width: 9, height: 13, goalXMin: 3, goalXMax: 5, viewWidth: 900, viewHeight: 1300, margin: 86 };

function elmScreenX(x) {
  return ELM_BOARD.margin + Number(x) * ((ELM_BOARD.viewWidth - ELM_BOARD.margin * 2) / (ELM_BOARD.width - 1));
}

function elmScreenY(y) {
  return ELM_BOARD.margin + Number(y) * ((ELM_BOARD.viewHeight - ELM_BOARD.margin * 2) / (ELM_BOARD.height - 1));
}

function elmPointKey(point) {
  return `${Number(point?.x)},${Number(point?.y)}`;
}

function elmGridPoints() {
  const pts = [];
  for (let y = 1; y <= 11; y += 1) for (let x = 0; x <= 8; x += 1) pts.push({ x, y });
  for (const y of [0, 12]) for (let x = 3; x <= 5; x += 1) pts.push({ x, y });
  return pts;
}

function isElmGateBouncePoint(point) {
  return Number(point?.x) === 4 && (Number(point?.y) === 1 || Number(point?.y) === 11);
}

function playerColor(playerId) {
  return playerId === 'p2' || playerId === 'red' ? '#ff3b30' : '#0b7cff';
}

function normalizeSeatId(seatId) {
  if (seatId === 'p1' || seatId === 'blue') return 'blue';
  if (seatId === 'p2' || seatId === 'red') return 'red';
  return null;
}

function legalMoveContext(model, round) {
  const turn = normalizeSeatId(round?.turn) || 'blue';
  const ownSeat = normalizeSeatId(model?.ownSeat);
  if (!ownSeat) {
    return {
      name: 'watcher',
      state: 'preview',
      color: turn,
      playable: false,
      note: 'Watching: legal moves are preview only.',
    };
  }
  if (ownSeat === turn) {
    return {
      name: 'own-turn',
      state: 'ready',
      color: turn,
      playable: true,
      note: 'Your legal moves. Tap a highlighted point to move.',
    };
  }
  return {
    name: 'opponent-turn',
    state: 'waiting',
    color: turn,
    playable: false,
    note: 'Opponent turn: legal moves shown for orientation.',
  };
}

function renderSvgLine(from, to, attrs = '') {
  return `<line x1="${elmScreenX(from.x)}" y1="${elmScreenY(from.y)}" x2="${elmScreenX(to.x)}" y2="${elmScreenY(to.y)}" ${attrs} />`;
}
function parseElmPointKey(key) {
  const match = String(key || '').match(/^(\d+),(\d+)$/);
  if (!match) return null;
  const point = { x: Number(match[1]), y: Number(match[2]) };
  if (!Number.isInteger(point.x) || !Number.isInteger(point.y)) return null;
  if (point.x < 0 || point.x >= ELM_BOARD.width || point.y < 0 || point.y >= ELM_BOARD.height) return null;
  return point;
}

function isLegalMoveKey(model, key) {
  const point = parseElmPointKey(key);
  if (!point) return false;
  const legalMoves = model?.board?.currentSession?.round?.legalMoves;
  return Array.isArray(legalMoves) && legalMoves.some((move) => elmPointKey(move) === key);
}

function isOwnTurn(model) {
  const round = model?.board?.currentSession?.round;
  const context = legalMoveContext(model, round);
  return context.name === 'own-turn';
}

function isBetweenRounds(model) {
  return model?.board?.state === 'BetweenRounds' || model?.board?.currentSession?.state === 'BetweenRounds' || model?.board?.currentSession?.round?.state === 'BetweenRounds';
}

function isSeated(model) {
  return normalizeSeatId(model?.ownSeat) !== null;
}

function submitNewRound(bridge) {
  if (!bridge || !isSeated(bridge.model) || !isBetweenRounds(bridge.model)) return false;
  const submitted = typeof bridge.newRound === 'function'
    ? bridge.newRound()
    : bridge.sendCommand?.({ type: 'reset' });
  if (!submitted) return false;
  bridge.model = { ...bridge.model, pendingNewRound: true, error: null };
  return true;
}

function seatColorToId(color) {
  if (color === 'blue' || color === 'p1') return 'p1';
  if (color === 'red' || color === 'p2') return 'p2';
  return null;
}

function seatIdToColor(seatId) {
  if (seatId === 'p1' || seatId === 'blue') return 'blue';
  if (seatId === 'p2' || seatId === 'red') return 'red';
  return null;
}

function disconnectedSeatEntries(board) {
  return ['blue', 'red']
    .map((color) => ({ color, seatId: seatColorToId(color), seat: board?.seats?.[color] }))
    .filter((entry) => entry.seat?.state === 'DisconnectedReserved');
}

function canOwnSeatFreeDisconnectedSeat(model, targetSeatId) {
  const ownSeat = normalizeSeatId(model?.ownSeat);
  const targetColor = seatIdToColor(targetSeatId);
  if (!ownSeat || !targetColor || ownSeat === targetColor) return false;
  const seat = model?.board?.seats?.[targetColor];
  return Boolean(seat?.state === 'DisconnectedReserved' && seat.canBeFreed);
}

function submitFreeDisconnectedSeat(bridge, seatId) {
  if (!bridge || !canOwnSeatFreeDisconnectedSeat(bridge.model, seatId)) return false;
  const submitted = typeof bridge.freeSeat === 'function'
    ? bridge.freeSeat(seatId)
    : bridge.sendCommand?.({ type: 'freeSeat', seatId });
  if (!submitted) return false;
  bridge.model = { ...bridge.model, pendingFreeSeat: seatId, error: null };
  return true;
}

function submitMoveFromLegalTarget(bridge, key) {
  if (!bridge || !isOwnTurn(bridge.model) || !isLegalMoveKey(bridge.model, key)) return false;
  const point = parseElmPointKey(key);
  const submitted = typeof bridge.submitMove === 'function'
    ? bridge.submitMove(point)
    : bridge.sendCommand?.({ type: 'move', to: point });
  if (!submitted) return false;
  bridge.model = { ...bridge.model, pendingMoveKey: key, error: null };
  return true;
}


function renderReadOnlyBoard(board, model = initialModel()) {
  const round = board?.currentSession?.round;
  if (!round) {
    return '<section class="elm-board-preview"><p>No round to render yet.</p></section>';
  }
  const moves = Array.isArray(round.moves) ? round.moves : [];
  const visited = new Set(Array.isArray(round.visited) ? round.visited.map(String) : ['4,6']);
  for (const move of moves) if (move?.to) visited.add(elmPointKey(move.to));
  const legalMoves = Array.isArray(round.legalMoves) ? round.legalMoves : [];
  const ball = round.ball || moves.at(-1)?.to || { x: 4, y: 6 };
  const legalContext = legalMoveContext(model, round);
  const turn = legalContext.color;
  const pitchOutline = [
    renderSvgLine({ x: 0, y: 1 }, { x: 3, y: 1 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 5, y: 1 }, { x: 8, y: 1 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 8, y: 1 }, { x: 8, y: 11 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 8, y: 11 }, { x: 5, y: 11 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 3, y: 11 }, { x: 0, y: 11 }, 'class="elm-pitch-line"'),
    renderSvgLine({ x: 0, y: 11 }, { x: 0, y: 1 }, 'class="elm-pitch-line"'),
  ].join('');
  const gates = `
    <g data-elm-gate="red" class="elm-gate elm-gate-red">
      ${renderSvgLine({ x: 3, y: 1 }, { x: 3, y: 0 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 3, y: 0 }, { x: 5, y: 0 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 5, y: 0 }, { x: 5, y: 1 }, 'class="elm-gate-line"')}
    </g>
    <g data-elm-gate="blue" class="elm-gate elm-gate-blue">
      ${renderSvgLine({ x: 3, y: 11 }, { x: 3, y: 12 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 3, y: 12 }, { x: 5, y: 12 }, 'class="elm-gate-line"')}
      ${renderSvgLine({ x: 5, y: 12 }, { x: 5, y: 11 }, 'class="elm-gate-line"')}
    </g>`;
  const grid = elmGridPoints().map((point) => {
    const key = elmPointKey(point);
    const gateBounce = isElmGateBouncePoint(point);
    const visitedClass = visited.has(key) ? ' elm-point-visited' : '';
    const bounceAttr = gateBounce ? ` data-elm-gate-bounce="${key}"` : '';
    return `<circle class="elm-grid-point${visitedClass}${gateBounce ? ' elm-gate-bounce' : ''}" data-elm-point="${key}"${visited.has(key) ? ` data-elm-visited="${key}"` : ''}${bounceAttr} cx="${elmScreenX(point.x)}" cy="${elmScreenY(point.y)}" r="${visited.has(key) ? 12 : gateBounce ? 10 : 7}" />`;
  }).join('');
  const segments = moves.map((move) => {
    if (!move?.from || !move?.to) return '';
    const segmentKey = escapeHtml(move.segment || `${elmPointKey(move.from)}|${elmPointKey(move.to)}`);
    return `<g data-elm-segment="${segmentKey}" class="elm-traced-segment">${renderSvgLine(move.from, move.to, `class="elm-segment-stroke" stroke="${playerColor(move.playerId)}"`)}${renderSvgLine(move.from, move.to, 'class="elm-segment-highlight"')}</g>`;
  }).join('');
  const playableAttr = legalContext.playable ? ' data-elm-legal-playable="true"' : '';
  const legal = legalMoves.map((point) => {
    const key = elmPointKey(point);
    const pendingAttr = model?.pendingMoveKey === key ? ` data-elm-pending-move="${key}" data-elm-move-feedback="pending"` : '';
    return `<g class="elm-legal-target elm-legal-${legalContext.name}${pendingAttr ? ' elm-legal-pending' : ''}" data-elm-legal-move="${key}" data-elm-legal-move-state="${legalContext.state}"${playableAttr}${pendingAttr}><circle class="elm-legal-hit-ring" cx="${elmScreenX(point.x)}" cy="${elmScreenY(point.y)}" r="34" /><circle class="elm-legal-move elm-legal-${turn}" cx="${elmScreenX(point.x)}" cy="${elmScreenY(point.y)}" r="24" /><text class="elm-legal-label" x="${elmScreenX(point.x)}" y="${elmScreenY(point.y) + 6}">•</text></g>`;
  }).join('');
  const ballKey = elmPointKey(ball);
  const ballSvg = `<g class="elm-ball" data-elm-ball="${ballKey}" transform="translate(${elmScreenX(ball.x)} ${elmScreenY(ball.y)})"><circle r="22" fill="#f8fff8"/><circle r="10" fill="#101820"/><path d="M-18 0 L18 0 M0 -18 L0 18" stroke="#101820" stroke-width="4" stroke-linecap="round" opacity=".72"/></g>`;
  const turnY = turn === 'red' || turn === 'p2' ? 0 : 12;
  const turnMarker = `<circle class="elm-turn-marker elm-turn-${turn === 'red' || turn === 'p2' ? 'red' : 'blue'}" cx="${elmScreenX(5.65)}" cy="${elmScreenY(turnY)}" r="18" />`;
  return `
    <section class="elm-board-preview">
      <h3>Board preview</h3>
      <svg data-elm-board-svg role="img" aria-label="Read-only Traceball board" viewBox="0 0 900 1300" preserveAspectRatio="xMidYMid meet">
        <rect class="elm-pitch-bg" x="18" y="18" width="864" height="1264" rx="34" />
        <g class="elm-pitch-stripes"><path d="M-140 1282 L100 18 H220 L-20 1282 Z"/><path d="M260 1282 L500 18 H620 L380 1282 Z"/><path d="M660 1282 L900 18 H1020 L780 1282 Z"/></g>
        <g class="elm-pitch-outline">${pitchOutline}${gates}</g>
        <g class="elm-segments-layer">${segments}</g>
        <g class="elm-points-layer">${grid}</g>
        <g class="elm-legal-layer" data-elm-legal-context="${legalContext.name}">${legal}</g>
        ${ballSvg}
        ${turnMarker}
      </svg>
      <div class="elm-board-legend" data-elm-legal-context="${legalContext.name}"><span class="elm-legend-dot elm-legal-${legalContext.color}"></span>${escapeHtml(legalContext.note)}</div>
      <p class="elm-shell-note">Phase 6C board: own-turn legal targets submit move intent; the server confirms with the next live state.</p>
    </section>`;
}

function playerDisplayName(board, color) {
  return board?.seats?.[color]?.player?.displayName || (color === 'red' ? 'Red' : 'Blue');
}

function winnerLabel(winner) {
  if (winner === 'red' || winner === 'p2') return 'Red';
  if (winner === 'blue' || winner === 'p1') return 'Blue';
  return 'Round';
}

function renderRoundResult(model) {
  const board = model?.board;
  const session = board?.currentSession;
  const round = session?.round;
  if (!isBetweenRounds(model) || !round) return '';
  const winner = winnerLabel(round.winner);
  const blueScore = Number(session?.score?.blue || 0);
  const redScore = Number(session?.score?.red || 0);
  const endReason = round.endReason || 'Round complete.';
  const canContinue = isSeated(model);
  const pending = model?.pendingNewRound;
  const action = canContinue
    ? `<div class="elm-action-row" data-elm-round-actions><button type="button" class="elm-primary" data-elm-command="new-round"${pending ? ' disabled' : ''}>${pending ? 'Starting next round…' : 'Continue / New Round'}</button></div>`
    : '<p class="elm-shell-note">Waiting for a seated player to continue.</p>';
  return `
    <section class="elm-round-result" data-elm-round-result>
      <p class="eyebrow">Round complete</p>
      <h3>${escapeHtml(winner)} wins this round</h3>
      <p>${escapeHtml(endReason)}</p>
      <p><strong>Score:</strong> Blue ${blueScore} — Red ${redScore}</p>
      <p class="elm-shell-note">${escapeHtml(playerDisplayName(board, 'blue'))} vs ${escapeHtml(playerDisplayName(board, 'red'))}</p>
      ${action}
    </section>`;
}

function renderDisconnectedSeatRecovery(model) {
  const board = model?.board;
  const disconnected = disconnectedSeatEntries(board);
  if (!disconnected.length) return '';
  const ownSeatColor = normalizeSeatId(model?.ownSeat);
  const rows = disconnected.map(({ color, seatId, seat }) => {
    const label = color === 'red' ? 'Red' : 'Blue';
    const player = seat?.player?.displayName || label;
    const canFree = canOwnSeatFreeDisconnectedSeat(model, seatId);
    const ownDisconnectedSeat = ownSeatColor === color;
    const seconds = seat?.canBeFreedAt && seat?.disconnectedAt
      ? Math.max(0, Math.ceil((Number(seat.canBeFreedAt) - Number(seat.disconnectedAt)) / 1000))
      : 60;
    const action = ownDisconnectedSeat
      ? '<p class="elm-shell-note">Your seat is reserved — reconnect from the same browser to reclaim it.</p>'
      : canFree
        ? `<div class="elm-action-row" data-elm-disconnect-actions><button type="button" class="elm-primary" data-elm-command="free-seat" data-elm-seat="${seatId}"${model?.pendingFreeSeat === seatId ? ' disabled' : ''}>${model?.pendingFreeSeat === seatId ? 'Making seat available…' : `Make ${label} seat available`}</button></div>`
        : `<p class="elm-shell-note">Make seat available in ${seconds}s.</p>`;
    return `<article class="elm-disconnected-seat elm-disconnected-${color}" data-elm-disconnected-seat="${color}"><h3>${escapeHtml(player)} disconnected</h3><p>Friend disconnected. Seat reserved during grace.</p>${action}</article>`;
  }).join('');
  return `<section class="elm-disconnect-recovery">${rows}</section>`;
}

function renderSeatingActions(model) {
  const board = model.board;
  if (!board) return '';
  const blueVacant = board.seats?.blue?.state === 'Vacant';
  const redVacant = board.seats?.red?.state === 'Vacant';
  const full = !blueVacant && !redVacant;
  const ownSeat = model.ownSeat;
  const waiting = model.waitingListMember;
  const nameValue = 'Elm Player';
  const seatButtons = ownSeat
    ? `<button type="button" class="elm-danger" data-elm-command="leave-seat">Leave seat / forfeit</button>`
    : `${blueVacant ? '<button type="button" data-elm-command="claim-blue">Join Blue</button>' : ''}${redVacant ? '<button type="button" data-elm-command="claim-red">Join Red</button>' : ''}`;
  const waitingButton = full && !ownSeat
    ? (waiting ? '<button type="button" data-elm-command="leave-waiting-list">Leave waiting list</button>' : '<button type="button" data-elm-command="join-waiting-list">Join waiting list</button>')
    : '';
  const guidance = full && !ownSeat ? 'Board is full. Watch or join the explicit waiting list.' : ownSeat ? 'You are seated on this board.' : 'Choose an open color to sit down.';
  return `
    <section class="elm-actions" data-elm-actions>
      <h3>Board actions</h3>
      <label for="elmPlayerName">Display name</label>
      <input id="elmPlayerName" value="${escapeHtml(nameValue)}" autocomplete="nickname" />
      <p>${escapeHtml(guidance)}</p>
      <div class="elm-action-row">${seatButtons}${waitingButton}</div>
    </section>`;
}

function renderBoardMessage(message) {
  const model = applyState(initialModel(), message);
  return renderModel(model);
}

function roomSummaryState(room) {
  return room?.state || room?.boardState || room?.status || 'Unknown';
}

function roomSummaryScore(room) {
  const score = room?.score || {};
  return `Blue ${Number(score.blue ?? score.p1 ?? 0)} — Red ${Number(score.red ?? score.p2 ?? 0)}`;
}

function roomSummaryOccupancy(room) {
  const occupancy = room?.occupancy || {};
  const active = Number(occupancy.activeCount ?? 0);
  const vacant = Number(occupancy.vacantCount ?? Math.max(0, 2 - active));
  return `${active} seated · ${vacant} open`;
}

function renderBoardList(rooms = []) {
  const visible = Array.isArray(rooms) ? rooms : [];
  const cards = visible.map((room) => {
    const code = room?.roomId || room?.code || '';
    const elmUrl = room?.elmUrl || boardUrl(code);
    const moves = Number(room?.moveCount || 0);
    const watchers = Number(room?.watcherCount ?? room?.watchers?.length ?? 0);
    const waiting = Number(room?.waitingListCount ?? room?.waitingList?.length ?? 0);
    return `
      <article class="elm-board-card" data-elm-board-card="${escapeHtml(code)}">
        <header><strong>${escapeHtml(code)}</strong><span class="elm-pill">${escapeHtml(roomSummaryState(room))}</span></header>
        <p>${escapeHtml(roomSummaryOccupancy(room))}</p>
        <p>Score ${escapeHtml(roomSummaryScore(room))}</p>
        <p>${moves} traced moves · ${watchers} watching · ${waiting} waiting</p>
        <p class="elm-shell-note">Last activity ${escapeHtml(room?.lastActivityAt ?? 'unknown')} · Expires ${escapeHtml(room?.expiresAt ?? 'unknown')}</p>
        <a class="elm-primary-link" href="${escapeHtml(elmUrl)}">Open board</a>
      </article>`;
  }).join('');
  return `
    <section class="elm-board-list" data-elm-board-list>
      <div class="boards-header"><div><p class="boards-kicker">Server lobby</p><h2>Boards</h2><p class="elm-shell-note">Public boards expire after one week of inactivity.</p></div><button type="button" id="refreshBoards" class="ghost" data-elm-command="refresh-boards">Refresh</button></div>
      ${cards || '<p>No public boards right now. Create a fresh board to start.</p>'}
    </section>`;
}

function replaceBoardsPanelContent(root, html) {
  if (!root || typeof root.innerHTML !== 'string' || !root.innerHTML.includes('id="boardsPanel"')) {
    if (root) root.innerHTML = html;
    return;
  }
  root.innerHTML = root.innerHTML.replace(/<section id="boardsPanel"[\s\S]*?<\/section>\s*<section class="game-layout">/, `<section id="boardsPanel" class="card boards-panel mobile-page" data-mobile-page="boards">${html}</section>\n\n      <section class="game-layout">`);
}

async function loadBoardList(root) {
  try {
    const response = await fetch('/api/rooms', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Board list request failed: ${response.status}`);
    const payload = await response.json();
    replaceBoardsPanelContent(root, renderBoardList(payload.rooms || []));
    return payload.rooms || [];
  } catch (error) {
    replaceBoardsPanelContent(root, `<section class="elm-board-list" data-elm-board-list><h2>Live boards</h2><p class="elm-error">${escapeHtml(error?.message || 'Could not load board list.')}</p></section>`);
    return [];
  }
}

function renderBoardRecovery(model) {
  if (!model?.error || !/not found|expired/i.test(model.error)) return '';
  return `
    <section class="elm-board-recovery" data-elm-board-recovery>
      <h2>Board unavailable</h2>
      <p>${escapeHtml(model.error)}</p>
      <p class="elm-shell-note">Boards expire after one week of inactivity and in-memory staging boards reset when the service restarts.</p>
      <div class="elm-action-row"><button type="button" id="elmCreateBoard" class="elm-primary">Create a fresh board</button><a href="/">Browse live boards</a></div>
    </section>`;
}

function phase9CommandVisibility(model) {
  const board = model?.board;
  const ownSeat = model?.ownSeat;
  const blueVacant = board?.seats?.blue?.state === 'Vacant';
  const redVacant = board?.seats?.red?.state === 'Vacant';
  const full = board && !blueVacant && !redVacant;
  const waiting = model?.waitingListMember;
  return {
    showBlue: !ownSeat && blueVacant,
    showRed: !ownSeat && redVacant,
    showWaitingJoin: full && !ownSeat && !waiting,
    showWaitingLeave: full && !ownSeat && waiting,
    showLeave: Boolean(ownSeat),
    showNewRound: isSeated(model),
  };
}

function hiddenClass(visible) {
  return visible ? '' : ' hidden';
}

function renderPhase9SeatButtons(model, scope = 'match') {
  const visibility = phase9CommandVisibility(model);
  const play = scope === 'play';
  const buttonClass = play ? 'play-join-button ghost' : 'ghost';
  const leaveClass = play ? 'play-leave-button ghost danger' : 'ghost danger';
  return `
    <button id="${play ? 'playClaimP1' : 'claimP1'}" class="${buttonClass}${hiddenClass(visibility.showBlue)}" type="button" data-elm-command="claim-blue">Join Blue</button>
    <button id="${play ? 'playClaimP2' : 'claimP2'}" class="${buttonClass}${hiddenClass(visibility.showRed)}" type="button" data-elm-command="claim-red">Join Red</button>
    <button id="${play ? 'playJoinWaitingList' : 'joinWaitingList'}" class="${buttonClass}${hiddenClass(visibility.showWaitingJoin)}" type="button" data-elm-command="join-waiting-list">Join waiting list</button>
    <button id="${play ? 'playLeaveWaitingList' : 'leaveWaitingList'}" class="${buttonClass}${hiddenClass(visibility.showWaitingLeave)}" type="button" data-elm-command="leave-waiting-list">Leave waiting list</button>
    <button id="${play ? 'playLeaveSeat' : 'leaveSeat'}" class="${leaveClass}${hiddenClass(visibility.showLeave)}" type="button" data-elm-command="leave-seat">Leave / forfeit</button>`;
}

function renderPlayLeaveButton(model) {
  return `<button id="playLeaveSeat" class="play-leave-button ghost danger${hiddenClass(Boolean(model?.ownSeat))}" type="button" data-elm-command="leave-seat">Leave / forfeit</button>`;
}

function renderPlayBoardBody(model, board) {
  if (model.error) return renderBoardRecovery(model) || `<p class="elm-error">${escapeHtml(model.error)}</p>`;
  if (!board) return '<p>Loading board state…</p>';
  return renderReadOnlyBoard(board, model);
}

function titleCase(value) {
  const text = String(value || '').trim();
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}

function colorLabel(color) {
  const normalized = normalizeSeatId(color);
  if (normalized === 'red') return 'Red';
  if (normalized === 'blue') return 'Blue';
  return 'None';
}

function viewerRoleLabel(model) {
  const ownSeat = normalizeSeatId(model?.ownSeat);
  if (ownSeat) return `You are ${colorLabel(ownSeat)}`;
  if (model?.waitingListMember) return 'Waiting list';
  return 'Watching';
}

function renderBoardHud(model) {
  const board = model?.board;
  if (!board) return '';
  const round = board.currentSession?.round;
  const turn = colorLabel(round?.turn || board.currentSession?.turn || '');
  const orientation = normalizeSeatId(model?.ownSeat) || 'watcher';
  const status = titleCase(model?.connectionStatus || 'idle');
  return `
    <section class="elm-board-hud" data-elm-board-hud data-elm-orientation="${escapeHtml(orientation)}" aria-label="Board status">
      <span><strong>${escapeHtml(board.code)}</strong></span>
      <span>${escapeHtml(viewerRoleLabel(model))}</span>
      <span>Turn: ${escapeHtml(turn)}</span>
      <span>${escapeHtml(status)}</span>
    </section>`;
}

function renderMatchDetails(model) {
  const board = model?.board;
  const session = board?.currentSession;
  const score = session?.score ? `Blue ${session.score.blue} — Red ${session.score.red}` : 'No session score yet';
  const ownSeat = normalizeSeatId(model?.ownSeat);
  const role = ownSeat ? (ownSeat === 'blue' ? 'Blue player' : 'Red player') : (model?.waitingListMember ? 'Waiting list' : 'Watcher');
  if (!board) return `<section class="match-details" data-elm-match-details><p>Open a board to see match details.</p></section>`;
  const watchers = Array.isArray(board.watchers) ? board.watchers : [];
  const waiting = Array.isArray(board.waitingList) ? board.waitingList : [];
  const moveCount = Number(session?.round?.moves?.length || 0);
  return `
    <section class="match-details" data-elm-match-details>
      <p><strong>Board:</strong> ${escapeHtml(board.code)}</p>
      <p><strong>Connection:</strong> ${escapeHtml(model.connectionStatus || 'idle')}</p>
      <p><strong>Your role:</strong> ${escapeHtml(role)}</p>
      <p><strong>Blue:</strong> ${escapeHtml(seatLabel(board.seats?.blue))}</p>
      <p><strong>Red:</strong> ${escapeHtml(seatLabel(board.seats?.red))}</p>
      <p><strong>Session:</strong> ${escapeHtml(session?.state || board.state)}</p>
      <p><strong>Score:</strong> ${escapeHtml(score)}</p>
      <p><strong>Turn:</strong> ${escapeHtml(session?.round?.turn || 'none')}</p>
      <p><strong>Replay:</strong> ${moveCount} traced moves</p>
      <p><strong>Watching:</strong> ${watchers.length}</p>
      <p><strong>Waiting list:</strong> ${waiting.length}${waiting.length ? ` — ${escapeHtml(waiting.map((p) => p.displayName || 'Anonymous').join(', '))}` : ''}</p>
      ${peopleList('Watchers', watchers)}
      ${peopleList('Waiting list', waiting)}
      <p class="elm-shell-note">Last activity ${escapeHtml(board.updatedAt || 'unknown')} · Expires ${escapeHtml(board.expiresAt || 'unknown')}</p>
      ${renderSeatingActions(model)}
      ${renderDisconnectedSeatRecovery(model)}
      ${renderRoundResult(model)}
    </section>`;
}

function renderModel(model) {
  const board = model.board;
  const session = board?.currentSession;
  const score = session?.score ? `Blue ${session.score.blue} — Red ${session.score.red}` : 'No session score yet';
  const boardTitle = board ? `Board ${escapeHtml(board.code)}` : 'Traceball Arena';
  const stateLabel = board ? escapeHtml(board.state) : 'No board open';
  const staleNote = model.ignoredStaleVersion ? `<p class="elm-shell-note">Ignored stale version ${Number(model.ignoredStaleVersion)}.</p>` : '';
  const newRoundControlAttr = isSeated(model) ? 'data-elm-command="new-round"' : 'disabled aria-disabled="true"';
  const boardBody = `${staleNote}${renderPlayBoardBody(model, board)}`;

  return `
    <main class="shell" data-elm-phase="9" data-elm-shell-actions>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Realtime paper-soccer</p>
          <h1>Traceball Arena</h1>
          <p class="lede">Draw one line per move, bounce from old points and walls, and sneak the ball into the other gate.</p>
        </div>
        <button id="appMenuButton" class="app-menu-button" type="button" aria-label="Open app menu" aria-expanded="false" aria-controls="appMenuOverlay">
          <span aria-hidden="true">☰</span>
        </button>
      </section>

      <nav class="mobile-nav" aria-label="Mobile game pages">
        <button type="button" class="mobile-tab" data-page-target="invite">Home</button>
        <button type="button" class="mobile-tab" data-page-target="boards">Boards</button>
        <button type="button" class="mobile-tab active" data-page-target="play">Play</button>
        <button type="button" class="mobile-tab" data-page-target="match">Match</button>
      </nav>

      <section id="joinPanel" class="card join-panel mobile-page" data-mobile-page="invite">
        <div class="online-header">
          <h2>Online game</h2>
          <p>Open a board as watcher, then choose an open seat when you are ready to play.</p>
        </div>
        ${renderOpenBoardForm(model)}
        ${renderInviteShare(model)}
      </section>

      <section id="boardsPanel" class="card boards-panel mobile-page" data-mobile-page="boards">
        ${board ? renderBoardList([roomSummaryFromBoard(board)].filter(Boolean)) : `
        <div class="boards-header">
          <div>
            <p class="boards-kicker">Server lobby</p>
            <h2>Boards</h2>
            <p>Live board list is available from the lobby route.</p>
          </div>
        </div>`}
      </section>

      <section class="game-layout">
        <div class="board-card mobile-page active" data-mobile-page="play">
          <div id="playStatus" class="play-status">${boardTitle}</div>
          <div id="turnIndicator" class="turn-indicator" aria-live="polite">${stateLabel}</div>
          ${renderBoardHud(model)}
          <div class="play-board-actions">
            ${renderPlayLeaveButton(model)}
            <button id="playPauseGame" class="play-pause-button ghost" type="button" data-elm-command="pause"><span aria-hidden="true">⏸</span> Pause</button>
          </div>
          <div class="board-stage">
            ${boardBody}
            <div id="pauseOverlay" class="pause-overlay hidden" aria-live="polite" role="dialog" aria-modal="true" aria-labelledby="pauseTitle">
              <div class="pause-card">
                <div class="pause-kicker">Paused</div>
                <h2 id="pauseTitle">Game paused</h2>
                <p id="pauseMessage">Board hidden while paused.</p>
                <p id="pauseTurn">Turn resumes here.</p>
                <div class="pause-actions">
                  <button id="resumeGame" class="primary" type="button" data-elm-command="resume">Resume game</button>
                  <button id="pauseNewRound" class="ghost" type="button" ${newRoundControlAttr}>New round</button>
                </div>
              </div>
            </div>
            <div id="winnerOverlay" class="winner-overlay hidden" aria-live="polite">
              <div class="winner-card">
                <button id="winnerClose" class="winner-close" type="button" aria-label="Close winner banner" data-elm-command="close-winner">×</button>
                <div class="winner-kicker">Winner</div>
                <div id="winnerName" class="winner-name">Player</div>
                <button id="winnerNewRound" class="winner-new-round" type="button" ${newRoundControlAttr}>New Round</button>
              </div>
            </div>
          </div>
          <div class="board-replay replay">
            <h2>Replay</h2>
            <div class="replay-controls">
              <button id="replayStart" type="button" data-elm-command="replay-start">Start</button>
              <button id="replayPrev" type="button" data-elm-command="replay-prev">‹</button>
              <button id="replayNext" type="button" data-elm-command="replay-next">›</button>
              <button id="replayEnd" type="button" data-elm-command="replay-end">End</button>
            </div>
            <input id="replayRange" type="range" min="0" max="0" value="0" />
            <p id="replayText">Replay appears once moves are made.</p>
          </div>
        </div>
        <aside class="side mobile-page" data-mobile-page="match">
          <div class="card scoreboard">
            <h2>Match</h2>
            <div id="status">${boardTitle}</div>
            <div class="players score-strip" aria-label="Room score">
              <div class="score-name blue-name"><span class="dot blue"></span><strong id="p1">${escapeHtml(playerDisplayName(board, 'blue'))}</strong></div>
              <div class="score-spacer" aria-hidden="true"></div>
              <div class="score-name red-name"><strong id="p2">${escapeHtml(playerDisplayName(board, 'red'))}</strong><span class="dot red"></span></div>
              <div id="p1Score" class="score-number blue-score">${Number(session?.score?.blue || 0)}</div>
              <div class="score-dash">-</div>
              <div id="p2Score" class="score-number red-score">${Number(session?.score?.red || 0)}</div>
            </div>
            <div id="seatActions" class="seat-actions">${renderPhase9SeatButtons(model, 'match')}</div>
            <button id="pauseGame" class="ghost" type="button" data-elm-command="pause">Pause game</button>
            <button id="reset" class="ghost" type="button" ${newRoundControlAttr}>New round</button>
            ${renderMatchDetails(model)}
          </div>
        </aside>
      </section>
    </main>
    <div id="appMenuDropdown" class="app-menu-dropdown hidden" role="menu" aria-label="App menu">
      <button class="app-menu-choice" type="button" role="menuitem" data-menu-view="history">Play History</button>
      <button class="app-menu-choice" type="button" role="menuitem" data-menu-view="rules">Rules</button>
      <p class="app-menu-note">More settings later.</p>
    </div>
    <div id="appContentOverlay" class="app-content-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="appContentTitle">
      <div class="app-content-panel">
        <div class="app-content-header">
          <div>
            <p class="app-menu-kicker">Traceball Arena</p>
            <h2 id="appContentTitle">Menu</h2>
          </div>
          <button id="appContentClose" class="app-menu-close" type="button" aria-label="Close window">×</button>
        </div>
      </div>
    </div>
    <div id="toast" role="status"></div>`;
}


function playerNameFromRoot(root) {
  const input = document.querySelector('#playerNameInput') || document.querySelector('#elmPlayerName');
  return persistPlayerName(input?.value || getStoredPlayerName());
}

function rewireBridgeView(root, bridge) {
  wireOpenBoardForm(root);
  wireSeatingActions(root, bridge);
  wirePhase9ShellActions(root, bridge);
  wireBoardMoveTargets(root, bridge);
  wireRoundActions(root, bridge);
  wireDisconnectActions(root, bridge);
}

function refreshBridgeRender(root, bridge) {
  if (root) root.innerHTML = renderModel(bridge.model);
  rewireBridgeView(root, bridge);
}

function activateMobilePage(page) {
  if (!page) return;
  const body = document.body;
  if (body?.dataset) body.dataset.mobilePage = page;
  document.querySelectorAll?.('.mobile-tab')?.forEach?.((tab) => {
    tab.classList?.toggle?.('active', tab?.dataset?.pageTarget === page);
  });
  document.querySelectorAll?.('.mobile-page')?.forEach?.((panel) => {
    panel.classList?.toggle?.('active', panel?.dataset?.mobilePage === page);
  });
}

function setToast(message) {
  const toast = document.querySelector('#toast');
  if (toast) toast.textContent = message;
}

function activateHomeMode(mode = 'online') {
  const online = mode !== 'local';
  document.querySelector('#onlineMode')?.classList?.toggle?.('active', online);
  document.querySelector('#onlineMode')?.setAttribute?.('aria-pressed', online ? 'true' : 'false');
  document.querySelector('#localMode')?.classList?.toggle?.('active', !online);
  document.querySelector('#localMode')?.setAttribute?.('aria-pressed', online ? 'false' : 'true');
  document.querySelector('.online-form-stack')?.classList?.toggle?.('hidden', !online);
  document.querySelector('#localPanel')?.classList?.toggle?.('hidden', online);
}

function selectedMoveTimer(selector, fallback = 15) {
  const value = Number(document.querySelector(selector)?.value ?? fallback);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function wirePhase9ShellActions(root, bridge) {
  const shell = document.querySelector('[data-elm-shell-actions]');
  shell?.addEventListener?.('click', (event) => {
    const target = event.target?.closest?.('[data-elm-command], [data-page-target], [data-home-mode]') || event.target;
    const homeMode = target?.dataset?.homeMode;
    if (homeMode) {
      event.preventDefault?.();
      activateHomeMode(homeMode);
      return;
    }
    const page = target?.dataset?.pageTarget;
    if (page) {
      event.preventDefault?.();
      activateMobilePage(page);
      return;
    }
    const command = target?.dataset?.elmCommand;
    if (!command) return;
    event.preventDefault?.();
    const name = playerNameFromRoot(root);
    let changed = false;
    if (command === 'claim-blue') changed = bridge.claimSeat?.('p1', name) || false;
    if (command === 'claim-red') changed = bridge.claimSeat?.('p2', name) || false;
    if (command === 'join-waiting-list') changed = bridge.joinWaitingList?.(name) || false;
    if (command === 'leave-waiting-list') changed = bridge.leaveWaitingList?.() || false;
    if (command === 'leave-seat') {
      const confirmed = window.confirm ? window.confirm('Leave your seat? This may forfeit the current session.') : true;
      if (confirmed) changed = bridge.leaveSeat?.() || false;
    }
    if (command === 'new-round') changed = submitNewRound(bridge);
    if (command === 'copy-invite') {
      const input = document.querySelector('#inviteLink');
      input?.select?.();
      const value = input?.value || absoluteRoomInviteUrl(bridge.model?.boardCode || bridge.model?.board?.code || '');
      const clipboard = typeof navigator !== 'undefined' ? navigator.clipboard : null;
      clipboard?.writeText?.(value).then?.(() => setToast('Invite link copied.'));
      if (!clipboard) setToast('Invite link ready to copy.');
    }
    if (command === 'refresh-boards') {
      loadBoardList(root).then?.(() => rewireBridgeView(root, bridge));
    }
    if (command === 'pause' || command === 'resume' || command.startsWith('replay-') || command === 'close-winner') {
      setToast('This control is wired; full visual parity for this action is coming in the next Phase 9 slice.');
    }
    if (changed) refreshBridgeRender(root, bridge);
  });
}

function wireSeatingActions(root, bridge) {
  const actions = document.querySelector('[data-elm-actions]');
  actions?.addEventListener?.('click', (event) => {
    const command = event.target?.dataset?.elmCommand;
    if (!command) return;
    const name = playerNameFromRoot(root);
    if (command === 'claim-blue') bridge.claimSeat('p1', name);
    if (command === 'claim-red') bridge.claimSeat('p2', name);
    if (command === 'join-waiting-list') bridge.joinWaitingList(name);
    if (command === 'leave-waiting-list') bridge.leaveWaitingList();
    if (command === 'leave-seat' && window.confirm?.('Leave your seat? This may forfeit the current session.')) bridge.leaveSeat();
  });
}

function wireBoardMoveTargets(root, bridge) {
  const legalLayer = document.querySelector('[data-elm-legal-context="own-turn"]');
  legalLayer?.addEventListener?.('click', (event) => {
    const target = event.target?.closest?.('[data-elm-legal-move]');
    if (!target?.dataset?.elmLegalPlayable) return;
    const key = target.dataset.elmLegalMove;
    if (!submitMoveFromLegalTarget(bridge, key)) return;
    event.preventDefault?.();
    refreshBridgeRender(root, bridge);
  });
}

function wireRoundActions(root, bridge) {
  const actions = document.querySelector('[data-elm-round-actions]');
  actions?.addEventListener?.('click', (event) => {
    const command = event.target?.dataset?.elmCommand;
    if (command !== 'new-round') return;
    if (!submitNewRound(bridge)) return;
    event.preventDefault?.();
    refreshBridgeRender(root, bridge);
  });
}

function wireDisconnectActions(root, bridge) {
  const actions = document.querySelector('[data-elm-disconnect-actions]');
  actions?.addEventListener?.('click', (event) => {
    const command = event.target?.dataset?.elmCommand;
    const seatId = event.target?.dataset?.elmSeat;
    if (command !== 'free-seat') return;
    if (!submitFreeDisconnectedSeat(bridge, seatId)) return;
    event.preventDefault?.();
    refreshBridgeRender(root, bridge);
  });
}

function wireOpenBoardForm(root) {
  const form = document.querySelector('#elmOpenBoardForm');
  const input = document.querySelector('#elmBoardCode');
  const createButton = document.querySelector('#elmCreateBoard');
  const localForm = document.querySelector('#localForm');
  form?.addEventListener?.('submit', (event) => {
    event.preventDefault();
    const code = sanitizeBoardCode(input?.value || '');
    if (code) {
      const url = new URL(window.location.href);
      url.searchParams.set('board', code);
      window.history?.replaceState?.({}, '', url);
    }
    createSocketBridge({ boardCode: code, root, onModelChange: (_model, bridge) => { rewireBridgeView(root, bridge); } });
  });
  createButton?.addEventListener?.('click', async () => {
    try {
      await createBoardAsBlue({ root, name: playerNameFromRoot(root), moveTimeLimitSeconds: selectedMoveTimer('#onlineMoveTimer', 15), onModelChange: (_model, bridge) => { rewireBridgeView(root, bridge); } });
    } catch (error) {
      if (root) root.innerHTML = renderModel({ ...initialModel(), error: error?.message || 'Create board failed.' });
    }
  });
  localForm?.addEventListener?.('submit', (event) => {
    event.preventDefault?.();
    const p1 = String(document.querySelector('#localP1Name')?.value || 'Blue').trim().slice(0, 24) || 'Blue';
    const p2 = String(document.querySelector('#localP2Name')?.value || 'Red').trim().slice(0, 24) || 'Red';
    const timer = selectedMoveTimer('#localMoveTimer', 15);
    setToast(`Local match setup saved: ${p1} vs ${p2}${timer ? ` · ${timer}s timer` : ' · no timer'}. Local runtime is next.`);
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function mount() {
  const root = document.querySelector('#elm-root');
  if (!root) return;
  const boardCode = parseBoardCodeFromLocation();
  if (boardCode && (window.WebSocket || typeof WebSocket !== 'undefined')) {
    createSocketBridge({ boardCode, root, onModelChange: (_model, bridge) => { rewireBridgeView(root, bridge); } });
    return;
  }
  let model = { ...initialModel(), clientId: getOrCreateClientId() };
  root.innerHTML = renderModel(model);
  wireOpenBoardForm(root);
  wirePhase9ShellActions(root, { model });
  await loadBoardList(root);
  wireOpenBoardForm(root);
  wirePhase9ShellActions(root, { model });
}

window.TraceballElmShell = { initialModel, decodeStateMessage, applyState, getOrCreateClientId, websocketUrl, parseBoardCodeFromLocation, createSocketBridge, createBoardAsBlue, renderReadOnlyBoard, renderRoundResult, renderDisconnectedSeatRecovery, renderBoardList, loadBoardList, renderModel, renderBoardMessage, submitMoveFromLegalTarget, submitNewRound, submitFreeDisconnectedSeat, wirePhase9ShellActions, wireBoardMoveTargets, wireRoundActions, wireDisconnectActions, mount };
mount();

if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    registration.update?.().catch?.(() => {});
    if (registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }).catch(() => {});
}
