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
    bridge.model = { ...applyState(bridge.model, message), connectionStatus: bridge.model.connectionStatus, clientId: bridge.clientId };
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

function renderBridge(root, bridge, onModelChange) {
  if (root) root.innerHTML = renderModel(bridge.model);
  if (typeof onModelChange === 'function') onModelChange(bridge.model);
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
      </div>
      <p class="elm-connection">Connection: ${escapeHtml(model.connectionStatus || 'idle')}</p>
    </form>`;
}

function renderBoardMessage(message) {
  const model = applyState(initialModel(), message);
  return renderModel(model);
}

function renderModel(model) {
  const shellHeader = `
    <p class="eyebrow">Traceball Arena — Elm Shell</p>
    <h1>${model.board ? `Board ${escapeHtml(model.board.code)}` : 'Traceball Arena — Elm Shell'}</h1>
    <p class="elm-shell-note">Phase 4 can open a live board as watcher over WebSocket while preserving a stable client id.</p>
    ${renderOpenBoardForm(model)}`;
  if (model.error) {
    return `<section class="elm-shell">${shellHeader}<p class="elm-error">${escapeHtml(model.error)}</p></section>`;
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
        <section class="elm-session"><h3>${escapeHtml(session?.state || 'No active session')}</h3><p>${escapeHtml(score)}</p></section>
        ${peopleList('Watchers', board.watchers)}
        ${peopleList('Waiting list', board.waitingList)}
      </div>
      <p class="elm-shell-link"><a href="/">Back to current JavaScript frontend</a></p>
    </section>`;
}

function wireOpenBoardForm(root) {
  const form = document.querySelector('#elmOpenBoardForm');
  const input = document.querySelector('#elmBoardCode');
  form?.addEventListener?.('submit', (event) => {
    event.preventDefault();
    const code = sanitizeBoardCode(input?.value || '');
    if (code) {
      const url = new URL(window.location.href);
      url.searchParams.set('board', code);
      window.history?.replaceState?.({}, '', url);
    }
    createSocketBridge({ boardCode: code, root, onModelChange: () => wireOpenBoardForm(root) });
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
    createSocketBridge({ boardCode, root, onModelChange: () => wireOpenBoardForm(root) });
    return;
  }
  let model = { ...initialModel(), clientId: getOrCreateClientId() };
  root.innerHTML = renderModel(model);
  wireOpenBoardForm(root);
  try {
    const response = await fetch(FIXTURE_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Fixture request failed: ${response.status}`);
    const message = await response.json();
    model = applyState(model, message);
    root.innerHTML = renderModel(model);
    wireOpenBoardForm(root);
  } catch (error) {
    root.innerHTML = renderModel({ ...model, error: error.message });
    wireOpenBoardForm(root);
  }
}

window.TraceballElmShell = { initialModel, decodeStateMessage, applyState, getOrCreateClientId, websocketUrl, parseBoardCodeFromLocation, createSocketBridge, renderModel, renderBoardMessage, mount };
mount();
