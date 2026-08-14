const FIXTURE_URL = '/fixtures/phase1/board-active-session.json';

function initialModel() {
  return {
    board: null,
    boardCode: '',
    version: 0,
    error: null,
    ignoredStaleVersion: null,
  };
}

function decodeStateMessage(message) {
  if (!message || typeof message !== 'object') {
    return { ok: false, error: 'malformed message: expected object' };
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

function renderBoardMessage(message) {
  const model = applyState(initialModel(), message);
  return renderModel(model);
}

function renderModel(model) {
  if (model.error) {
    return `<section class="elm-shell"><h1>Traceball Arena — Elm Shell</h1><p class="elm-error">${escapeHtml(model.error)}</p></section>`;
  }
  if (!model.board) {
    return '<section class="elm-shell"><h1>Traceball Arena — Elm Shell</h1><p>Loading board fixture…</p></section>';
  }
  const board = model.board;
  const session = board.currentSession;
  const score = session?.score ? `Blue ${session.score.blue} — Red ${session.score.red}` : 'No session score yet';
  const staleNote = model.ignoredStaleVersion ? `<p class="elm-shell-note">Ignored stale version ${Number(model.ignoredStaleVersion)}.</p>` : '';
  return `
    <section class="elm-shell">
      <p class="eyebrow">Traceball Arena — Elm Shell</p>
      <h1>Board ${escapeHtml(board.code)}</h1>
      <p class="elm-shell-note">Phase 3 decodes canonical board state and ignores stale versions beside the existing JavaScript frontend.</p>
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
  let model = initialModel();
  root.innerHTML = renderModel(model);
  try {
    const response = await fetch(FIXTURE_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Fixture request failed: ${response.status}`);
    const message = await response.json();
    model = applyState(model, message);
    root.innerHTML = renderModel(model);
  } catch (error) {
    root.innerHTML = renderModel({ ...model, error: error.message });
  }
}

window.TraceballElmShell = { initialModel, decodeStateMessage, applyState, renderModel, renderBoardMessage, mount };
mount();
