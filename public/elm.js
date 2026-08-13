const FIXTURE_URL = '/fixtures/phase1/board-active-session.json';

function seatLabel(seat) {
  if (!seat || seat.state === 'Vacant') return 'Open seat';
  const name = seat.player?.displayName || 'Unknown player';
  return `${name} · ${seat.state}`;
}

function peopleList(title, people) {
  const items = Array.isArray(people) && people.length
    ? `<ul>${people.map((person) => `<li>${escapeHtml(person.displayName || 'Anonymous')}</li>`).join('')}</ul>`
    : '<p>None</p>';
  return `<section class="elm-people"><h3>${title}</h3>${items}</section>`;
}

function renderBoard(message) {
  const board = message.board;
  const session = board.currentSession;
  const score = session?.score ? `Blue ${session.score.blue} — Red ${session.score.red}` : 'No session score yet';
  return `
    <section class="elm-shell">
      <p class="eyebrow">Traceball Arena — Elm Shell</p>
      <h1>Board ${escapeHtml(board.code)}</h1>
      <p class="elm-shell-note">Phase 2 renders the canonical board contract beside the existing JavaScript frontend.</p>
      <div class="elm-board-shell">
        <header class="elm-board-header">
          <span class="elm-pill">${escapeHtml(board.state)}</span>
          <span class="elm-version">v${Number(board.version || message.version || 0)}</span>
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
  root.innerHTML = '<p>Loading Traceball Arena — Elm Shell…</p>';
  try {
    const response = await fetch(FIXTURE_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Fixture request failed: ${response.status}`);
    const message = await response.json();
    root.innerHTML = renderBoard(message);
  } catch (error) {
    root.innerHTML = `<section class="elm-shell"><h1>Traceball Arena — Elm Shell</h1><p class="elm-error">${escapeHtml(error.message)}</p></section>`;
  }
}

window.TraceballElmShell = { mount, renderBoard };
mount();
