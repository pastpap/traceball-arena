import { existsSync, readFileSync } from 'node:fs';

const required = ['public/index.html', 'public/app.js', 'public/styles.css', 'public/icon.svg', 'public/manifest.webmanifest', 'public/sw.js', 'src/server.js', 'src/game.js', 'railway.json'];
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
}
const railway = JSON.parse(readFileSync('railway.json', 'utf8'));
if (railway.deploy.healthcheckPath !== '/api/health') throw new Error('Railway healthcheck must be /api/health');

const css = readFileSync('public/styles.css', 'utf8');
if (!css.includes('aspect-ratio: 720 / 920')) throw new Error('Board canvas must preserve its 720/920 aspect ratio.');
if (!css.includes('max-width: 720px')) throw new Error('Board canvas must be capped so it does not over-stretch on wide screens.');
if (!css.includes('@media (max-width: 640px)')) throw new Error('Mobile layout breakpoint is required.');
if (!css.includes('@media (max-width: 1024px)') || !css.includes('body[data-mobile-page="play"] .board-card')) {
  throw new Error('Tablet-sized screens must use the same mobile tab/page topology as phones.');
}
if (!css.includes('.mobile-page { display: none !important; }')) throw new Error('Mobile pages must be split into tabbed panels.');
if (!css.includes('.inline-form input { flex: 1 1 320px; min-width: 260px; }') || !css.includes('.inline-form .primary { flex: 0 0 auto; width: auto; min-width: 170px; }')) {
  throw new Error('Desktop invite-link input must keep usable width beside the Join game button.');
}
if (!css.includes('@media (max-width: 640px)') || !css.includes('.inline-form input { min-width: 0; }')) {
  throw new Error('Mobile invite-link input must reset min-width so the form can stack cleanly.');
}
if (!css.includes('.inline-form input { flex: 0 1 auto; min-width: 0; min-height: 0; }')) {
  throw new Error('Mobile invite-link input must reset desktop flex-basis so it does not become a tall text box.');
}
if (!css.includes('.mobile-page.hidden { display: none !important; }')) {
  throw new Error('Hidden Home cards must stay hidden on mobile even when they also have mobile-page active.');
}
if (!css.includes('body[data-mobile-page="play"] .board-card')) throw new Error('Mobile play page must prioritize the board viewport.');

const html = readFileSync('public/index.html', 'utf8');
if (!html.includes('data-page-target="play"') || !html.includes('data-mobile-page="invite"') || !html.includes('data-mobile-page="match"')) {
  throw new Error('Mobile page navigation markup is required.');
}
const homeTab = html.indexOf('>Home</button>');
const playTab = html.indexOf('data-page-target="play"');
const matchTab = html.indexOf('data-page-target="match"');
if (!(homeTab >= 0 && homeTab < playTab && playTab < matchTab)) throw new Error('Mobile tabs must be ordered Home, Play, Match.');
if (html.includes('>Invite</button>')) throw new Error('Invite tab must be renamed to Home.');
if (!html.includes('board-replay replay')) throw new Error('Replay controls must live with the board.');
if (!html.includes('score-strip') || !html.includes('p1Score') || !html.includes('p2Score')) {
  throw new Error('Match card must render the traced name/score/name layout.');
}
if (html.includes('modeSelect') || html.includes('Choose game type') || html.includes('How do you want to play?')) {
  throw new Error('Do not render a separate choose-game-type explainer card.');
}
if (html.includes('id="startLocalSetup"') || html.includes('>Start local game</button>')) {
  throw new Error('Top-level Start local game button must be removed; Local belongs in the Home selector.');
}
const heroStart = html.indexOf('<section class="hero">');
const navStart = html.indexOf('<nav class="mobile-nav"');
const heroHtml = html.slice(heroStart, navStart);
if (heroHtml.includes('Create online game') || heroHtml.includes('Start local game') || heroHtml.includes('class="actions"')) {
  throw new Error('Hero/top area must not contain Create online game or Start local game buttons.');
}
const navEnd = html.indexOf('</nav>', navStart);
const modeToggle = html.indexOf('id="homeModeToggle"');
const joinPanel = html.indexOf('id="joinPanel"');
const localPanel = html.indexOf('id="localPanel"');
if (!(navEnd < modeToggle && modeToggle < joinPanel && joinPanel < localPanel)) {
  throw new Error('Home Online/Local selector must sit directly under the Home/Play/Match navigation and above the swapped cards.');
}
if (!html.includes('data-home-mode="online"') || !html.includes('data-home-mode="local"')) {
  throw new Error('Home selector must offer Online and Local options.');
}
if (!html.includes('id="onlineActionToggle"') || !html.includes('data-online-action="new"') || !html.includes('data-online-action="incoming"')) {
  throw new Error('Online card must split New game and Incoming game into linked sub-tabs.');
}
if (!html.includes('id="playerNameInput"') || !html.includes('id="newGamePanel"') || !html.includes('id="existingGamePanel"')) {
  throw new Error('Online card must have one generic persisted player-name input shared by both online tabs.');
}
if (!html.includes('id="generateRoom"') || !html.includes('>Generate</button>')) {
  throw new Error('New game tab must contain a Generate button that creates an online room.');
}
if (!html.includes('id="joinGeneratedRoom"') || !html.includes('>Join generated game</button>')) {
  throw new Error('New game tab must reintroduce an explicit Join button after Generate so invite copying stays on Home.');
}
if (!html.includes('id="winnerOverlay"') || !html.includes('class="winner-card"') || !html.includes('Winner')) {
  throw new Error('Play board must include a golden winner modal overlay.');
}
if (!html.includes('id="existingRoomForm"') || !html.includes('id="existingRoomInput"') || !html.includes('>Join game</button>')) {
  throw new Error('Online card must allow safely joining an existing game by pasted invite link or room code.');
}
if (html.includes('id="newRoom"') || html.includes('id="joinForm"')) {
  throw new Error('Online actions must not use the old mixed New game/Join form layout.');
}
if (!html.includes('localPanel') || !html.includes('startLocal')) {
  throw new Error('Local selector must reveal the local setup card.');
}
if (!html.includes('localP1Name') || !html.includes('localP2Name')) {
  throw new Error('Local PvP setup must collect both face-to-face player names.');
}
if (!html.includes('copyInviteCard')) throw new Error('Copy invite button must live inside the Join this match card.');
if (html.includes('id="copyInvite"')) throw new Error('Top-level copy invite button must be removed.');
if (!html.includes('rel="icon" href="/icon.svg"') || !html.includes('rel="manifest" href="/manifest.webmanifest"')) {
  throw new Error('Favicon and PWA manifest links are required.');
}

const app = readFileSync('public/app.js', 'utf8');
if (!app.includes('const MOVE_HINT_ALPHA = 1') || !app.includes('const MOVE_HINT_FADE_IN_MS = 650') || !app.includes('legalMoveHintStartedAt') || !app.includes('startLegalMoveHintFade') || !app.includes('legalMoveHintColor') || !app.includes("gameMode === 'local' ? currentPlayerColor(game.turn) : '#ffe66d'")) {
  throw new Error('Legal-move hint circles must fade in once, use blue/red only in local same-screen mode, and keep yellow hints online.');
}
if (app.includes('MOVE_HINT_PULSE_MS') || app.includes('animateLegalMoveHints') || app.includes('requestLegalMoveHintFrame') || app.includes('now % MOVE_HINT')) {
  throw new Error('Legal-move hint circles must not pulse continuously after they have appeared.');
}
if (!html.includes('>Incoming game</button>') || html.includes('>Existing game</button>') || !app.includes("setOnlineAction('incoming')") || !app.includes('prefillIncomingInviteFromUrl') || !app.includes('generateRandomPlayerName') || !app.includes('updateInviteVisibility')) {
  throw new Error('Home Online flow must use Incoming game naming, deep-link to Incoming with prefilled invite input, randomize empty player names, and hide invites outside New game.');
}
if (!app.includes('const TURN_MARKER_JUMP_MS = 1400') || !app.includes('const TURN_MARKER_MAX_SCALE = 1.55') || !app.includes('const scale = 1 + Math.sin(Math.PI * t)') || !app.includes('drawTurnMarker(x, y, color, scale)') || !app.includes('startTurnMarkerJump') || !app.includes('drawTurnMarkerJump') || !app.includes('mixPlayerColors')) {
  throw new Error('Turn gate ball must arc more slowly and grow toward mid-board before shrinking at the other gate.');
}
if (!app.includes('const CONFETTI_MS = 4800') || app.includes('confettiUntil = Date.now() + 3200')) {
  throw new Error('Celebration/confetti animation must be slower so players can understand the result.');
}
if (!app.includes("els.inviteLink.addEventListener('focus', copyInviteFromField)") || !app.includes("els.inviteLink.addEventListener('pointerdown', copyInviteFromField)")) {
  throw new Error('Invite link field must copy on focus/press.');
}
if (!app.includes("playerId === 'p2'") || !app.includes('applyBoardTransform') || !app.includes('ctx.rotate(Math.PI)') || !app.includes('boardSpacePoint')) {
  throw new Error('Board view must rotate the renderer and invert click hit-testing for the second player.');
}
if (!app.includes('drawTurnGateBall') || !app.includes('ownGateMarginY') || !app.includes('Math.max(leftPost.x, rightPost.x) + 34')) {
  throw new Error('Current-turn gate ball marker must be drawn on the right side of the active gate.');
}
if (!app.includes('drawGatePlayerLabels') || !app.includes('drawGoalMesh') || !app.includes("game.score?.[id]")) {
  throw new Error('Gate labels, light in-gate mesh, and room score rendering are required.');
}
if (!app.includes('traceballClientId') || !app.includes('clientId });')) {
  throw new Error('Client join messages must include a stable browser client id for reconnects.');
}
if (!app.includes('resumeRoomSession') || !app.includes('wakeConnection') || !app.includes('visibilitychange')) {
  throw new Error('PWA/iPhone lifecycle events must reconnect and rejoin the player session.');
}
if (!app.includes("navigator.serviceWorker.register('/sw.js')")) throw new Error('PWA service worker registration is required.');
if (!app.includes('setOnlineAction') || !app.includes('joinOnlinePlayer') || !app.includes("setMobilePage('play')")) {
  throw new Error('Client must switch online sub-tabs and navigate final online actions to Play.');
}
if (!app.includes('joinGeneratedRoom') || !app.includes('joinGeneratedGame') || app.includes("createRoom(data.roomId") || !app.includes("setMobilePage('invite')")) {
  throw new Error('Generate must stay on Home and only the explicit generated-room Join action may navigate to Play.');
}
if (!app.includes('updateWinnerOverlay') || !app.includes('drawWinnerGateConfetti') || !app.includes('confettiUntil') || !app.includes('requestAnimationFrame')) {
  throw new Error('Client must show a winner overlay and animate confetti over the winner gate.');
}
if (!app.includes('function winnerOwnGateY') || !app.includes("return winnerId === 'p1' ? 12 : 0") || app.includes("const winnerGateY = game.winner === 'p1' ? 0 : 12")) {
  throw new Error('Winner confetti must anchor to the winner’s own gate, not the gate they scored into.');
}
if (!app.includes('persistPlayerName') || !app.includes('traceballPlayerName') || !app.includes('playerNameInput.value = playerName')) {
  throw new Error('Generic player name must be initialized from and persisted to localStorage.');
}
if (!app.includes('parseRoomInput') || !app.includes('joinExistingRoom') || !app.includes('/api/rooms/') || !app.includes('input.length > 200')) {
  throw new Error('Client must safely parse pasted invite links/codes, cap input length, and check room existence before navigation.');
}
if (!app.includes('url.origin !== location.origin') || !app.includes('/^[A-Za-z0-9_-]{6,32}$/')) {
  throw new Error('Pasted room links must be same-origin and room codes must use a strict allowlist.');
}
if (!app.includes("gameMode = 'local'") || !app.includes('setHomeMode') || !app.includes('startLocalGame') || !app.includes('makeLocalMove')) {
  throw new Error('Client app must support an Online/Local Home selector and local same-screen PvP without WebSockets.');
}
if (!app.includes("return gameMode !== 'local' && playerId === 'p2'")) {
  throw new Error('Local same-screen PvP must keep a static board; only online red-player view may rotate.');
}
if (app.includes("gameMode === 'local' ? game?.turn === 'p2'")) {
  throw new Error('Local PvP must not rotate the pitch by active turn.');
}
if (!app.includes('Local same-screen PvP') || !app.includes('Players face each other')) {
  throw new Error('Local PvP UI copy must explain static face-to-face same-screen play.');
}

const manifest = JSON.parse(readFileSync('public/manifest.webmanifest', 'utf8'));
if (manifest.name !== 'Traceball Arena' || manifest.display !== 'standalone') throw new Error('PWA manifest must define Traceball Arena as a standalone app.');
if (!manifest.icons?.some((icon) => icon.src === '/icon.svg' && icon.purpose.includes('maskable'))) {
  throw new Error('PWA manifest must reuse the Traceball icon as a maskable app icon.');
}
const icon = readFileSync('public/icon.svg', 'utf8');
if (!icon.includes('<svg') || !icon.includes('Traceball Arena icon')) throw new Error('Traceball SVG icon is required.');
const sw = readFileSync('public/sw.js', 'utf8');
if (!sw.includes('self.addEventListener') || !sw.includes('CACHE_NAME')) throw new Error('PWA service worker shell cache is required.');
if (!sw.includes('traceball-arena-v17') || !sw.includes('SKIP_WAITING')) throw new Error('PWA service worker must force an app-shell refresh for installed iPhone apps.');

for (const marker of ['.online-form-stack', 'padding: 18px', '.invite {', 'padding: 16px', '.online-action-toggle {', 'margin-top: 2px']) {
  if (!css.includes(marker)) throw new Error(`Home form spacing must let name/action/invite sections breathe: missing ${marker}`);
}

const readme = readFileSync('README.md', 'utf8');
for (const marker of ['## Gameplay', '## Technologies', '## Game-dev evolution', '## Screenshots', 'docs/screenshots/traceball-home.svg', 'docs/screenshots/traceball-play.svg']) {
  if (!readme.includes(marker)) throw new Error(`README must document gameplay, technology, evolution, and screenshots: missing ${marker}`);
}
for (const shot of ['docs/screenshots/traceball-home.svg', 'docs/screenshots/traceball-play.svg']) {
  if (!existsSync(shot)) throw new Error(`Missing README screenshot asset ${shot}`);
}

const server = readFileSync('src/server.js', 'utf8');
if (!server.includes("app.get('/api/rooms/:roomId'") || !server.includes('safeRoomId')) {
  throw new Error('Server must expose a safe direct room lookup for pasted links/codes.');
}

console.log('Static build checks passed.');
