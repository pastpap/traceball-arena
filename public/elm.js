const FIXTURE_URL = '/fixtures/phase1/board-active-session.json';
const CLIENT_ID_KEY = 'traceballElmClientId';

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
    autoJoinSingleVacantSeat(bridge);
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



function vacantSeatIds(board) {
  const seats = [];
  if (board?.seats?.blue?.state === 'Vacant') seats.push('p1');
  if (board?.seats?.red?.state === 'Vacant') seats.push('p2');
  return seats;
}

function autoJoinSingleVacantSeat(bridge) {
  const openSeats = vacantSeatIds(bridge.model.board);
  if (bridge.model.autoJoinAttempted || bridge.model.ownSeat || bridge.model.waitingListMember || openSeats.length !== 1) return;
  bridge.model = { ...bridge.model, autoJoinAttempted: true };
  bridge.claimSeat(openSeats[0], 'Elm Player');
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
  return `
    <form class="elm-open-board" id="elmOpenBoardForm">
      <label for="elmBoardCode">Open board as watcher</label>
      <div class="elm-open-row">
        <input id="elmBoardCode" name="board" value="${escapeHtml(code)}" placeholder="Board code" autocomplete="off" />
        <button type="submit">Watch board</button>
        <button type="button" id="elmCreateBoard">Create board as Blue</button>
      </div>
      <p class="elm-connection">Connection: ${escapeHtml(model.connectionStatus || 'idle')}</p>
    </form>`;
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
    const pendingAttr = model?.pendingMoveKey === key ? ` data-elm-pending-move="${key}"` : '';
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
    const elmUrl = room?.elmUrl || `/elm?board=${encodeURIComponent(code)}`;
    const moves = Number(room?.moveCount || 0);
    return `
      <article class="elm-board-card" data-elm-board-card="${escapeHtml(code)}">
        <header><strong>${escapeHtml(code)}</strong><span class="elm-pill">${escapeHtml(roomSummaryState(room))}</span></header>
        <p>${escapeHtml(roomSummaryOccupancy(room))}</p>
        <p>Score ${escapeHtml(roomSummaryScore(room))}</p>
        <p>${moves} traced moves</p>
        <p class="elm-shell-note">Last activity ${escapeHtml(room?.lastActivityAt ?? 'unknown')} · Expires ${escapeHtml(room?.expiresAt ?? 'unknown')}</p>
        <a class="elm-primary-link" href="${escapeHtml(elmUrl)}">Open board</a>
      </article>`;
  }).join('');
  return `
    <section class="elm-board-list" data-elm-board-list>
      <h2>Live boards</h2>
      <p class="elm-shell-note">Public boards expire after one week of inactivity.</p>
      ${cards || '<p>No public boards right now. Create a fresh board to start.</p>'}
    </section>`;
}

async function loadBoardList(root) {
  try {
    const response = await fetch('/api/rooms', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Board list request failed: ${response.status}`);
    const payload = await response.json();
    if (root) root.innerHTML = renderBoardList(payload.rooms || []);
    return payload.rooms || [];
  } catch (error) {
    if (root) root.innerHTML = `<section class="elm-board-list" data-elm-board-list><h2>Live boards</h2><p class="elm-error">${escapeHtml(error?.message || 'Could not load board list.')}</p></section>`;
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
      <div class="elm-action-row"><button type="button" id="elmCreateBoard" class="elm-primary">Create a fresh board</button><a href="/elm">Browse live boards</a></div>
    </section>`;
}

function renderModel(model) {
  const shellHeader = `
    <p class="eyebrow">Traceball Arena — Elm Shell</p>
    <h1>${model.board ? `Board ${escapeHtml(model.board.code)}` : 'Traceball Arena — Elm Shell'}</h1>
    <p class="elm-shell-note">Phase 8 adds live board list, expiry metadata, and expired-board recovery while the server remains authoritative.</p>
    ${renderOpenBoardForm(model)}`;
  if (model.error) {
    const recovery = renderBoardRecovery(model);
    return `<section class="elm-shell">${shellHeader}${recovery || `<p class="elm-error">${escapeHtml(model.error)}</p>`}</section>`;
  }
  if (!model.board) {
    return `<section class="elm-shell">${shellHeader}<p>Loading board state…</p></section>`;
  }
  const board = model.board;
  const session = board.currentSession;
  const score = session?.score ? `Blue ${session.score.blue} — Red ${session.score.red}` : 'No session score yet';
  const staleNote = model.ignoredStaleVersion ? `<p class="elm-shell-note">Ignored stale version ${Number(model.ignoredStaleVersion)}.</p>` : '';
  return `
    <section class="elm-shell">
      ${shellHeader}
      ${staleNote}
      <div class="elm-board-shell">
        <header class="elm-board-header">
          <span class="elm-pill">${escapeHtml(board.state)}</span>
          <span class="elm-version">v${Number(board.version || model.version || 0)}</span>
        </header>
        <div class="elm-seats">
          <article class="elm-seat elm-seat-blue"><strong>Blue</strong><p>${escapeHtml(seatLabel(board.seats?.blue))}</p></article>
          <article class="elm-seat elm-seat-red"><strong>Red</strong><p>${escapeHtml(seatLabel(board.seats?.red))}</p></article>
        </div>
        ${renderSeatingActions(model)}
        ${renderDisconnectedSeatRecovery(model)}
        ${renderRoundResult(model)}
        ${renderReadOnlyBoard(board, model)}
        <section class="elm-session"><h3>${escapeHtml(session?.state || 'No active session')}</h3><p>${escapeHtml(score)}</p></section>
        ${peopleList('Watchers', board.watchers)}
        ${peopleList('Waiting list', board.waitingList)}
      </div>
      <p class="elm-shell-link"><a href="/">Back to current JavaScript frontend</a></p>
    </section>`;
}


function playerNameFromRoot(root) {
  const input = document.querySelector('#elmPlayerName');
  return String(input?.value || 'Elm Player').trim().slice(0, 24) || 'Elm Player';
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
    if (root) root.innerHTML = renderModel(bridge.model);
    wireOpenBoardForm(root);
    wireSeatingActions(root, bridge);
    wireBoardMoveTargets(root, bridge);
    wireDisconnectActions(root, bridge);
  });
}

function wireRoundActions(root, bridge) {
  const actions = document.querySelector('[data-elm-round-actions]');
  actions?.addEventListener?.('click', (event) => {
    const command = event.target?.dataset?.elmCommand;
    if (command !== 'new-round') return;
    if (!submitNewRound(bridge)) return;
    event.preventDefault?.();
    if (root) root.innerHTML = renderModel(bridge.model);
    wireOpenBoardForm(root);
    wireSeatingActions(root, bridge);
    wireBoardMoveTargets(root, bridge);
    wireRoundActions(root, bridge);
    wireDisconnectActions(root, bridge);
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
    if (root) root.innerHTML = renderModel(bridge.model);
    wireOpenBoardForm(root);
    wireSeatingActions(root, bridge);
    wireBoardMoveTargets(root, bridge);
    wireRoundActions(root, bridge);
    wireDisconnectActions(root, bridge);
  });
}

function wireOpenBoardForm(root) {
  const form = document.querySelector('#elmOpenBoardForm');
  const input = document.querySelector('#elmBoardCode');
  const createButton = document.querySelector('#elmCreateBoard');
  form?.addEventListener?.('submit', (event) => {
    event.preventDefault();
    const code = sanitizeBoardCode(input?.value || '');
    if (code) {
      const url = new URL(window.location.href);
      url.searchParams.set('board', code);
      window.history?.replaceState?.({}, '', url);
    }
    createSocketBridge({ boardCode: code, root, onModelChange: (_model, bridge) => { wireOpenBoardForm(root); wireSeatingActions(root, bridge); wireBoardMoveTargets(root, bridge); wireRoundActions(root, bridge); wireDisconnectActions(root, bridge); } });
  });
  createButton?.addEventListener?.('click', async () => {
    try {
      await createBoardAsBlue({ root, name: playerNameFromRoot(root), onModelChange: (_model, bridge) => { wireOpenBoardForm(root); wireSeatingActions(root, bridge); wireBoardMoveTargets(root, bridge); wireRoundActions(root, bridge); wireDisconnectActions(root, bridge); } });
    } catch (error) {
      if (root) root.innerHTML = renderModel({ ...initialModel(), error: error?.message || 'Create board failed.' });
    }
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
    createSocketBridge({ boardCode, root, onModelChange: (_model, bridge) => { wireOpenBoardForm(root); wireSeatingActions(root, bridge); wireBoardMoveTargets(root, bridge); wireRoundActions(root, bridge); wireDisconnectActions(root, bridge); } });
    return;
  }
  let model = { ...initialModel(), clientId: getOrCreateClientId() };
  root.innerHTML = renderModel(model);
  wireOpenBoardForm(root);
  try {
    const response = await fetch('/api/rooms', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Board list request failed: ${response.status}`);
    const payload = await response.json();
    root.innerHTML = renderModel(model) + renderBoardList(payload.rooms || []);
    wireOpenBoardForm(root);
  } catch (error) {
    root.innerHTML = renderModel(model) + `<section class="elm-board-list" data-elm-board-list><h2>Live boards</h2><p class="elm-error">${escapeHtml(error.message)}</p></section>`;
    wireOpenBoardForm(root);
  }
}

window.TraceballElmShell = { initialModel, decodeStateMessage, applyState, getOrCreateClientId, websocketUrl, parseBoardCodeFromLocation, createSocketBridge, createBoardAsBlue, renderReadOnlyBoard, renderRoundResult, renderDisconnectedSeatRecovery, renderBoardList, loadBoardList, renderModel, renderBoardMessage, submitMoveFromLegalTarget, submitNewRound, submitFreeDisconnectedSeat, wireBoardMoveTargets, wireRoundActions, wireDisconnectActions, mount };
mount();
