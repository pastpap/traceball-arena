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
if (!css.includes('.mobile-page { display: none !important; }')) throw new Error('Mobile pages must be split into tabbed panels.');
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
if (!html.includes('id="newRoom"') || !html.includes('>New game</button>')) {
  throw new Error('Online card must contain a New game button that creates an online room.');
}
if (!html.includes('id="existingRoomForm"') || !html.includes('id="existingRoomInput"') || !html.includes('>Join game</button>')) {
  throw new Error('Online card must allow safely joining an existing game by pasted invite link or room code.');
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
if (!sw.includes('traceball-arena-v8') || !sw.includes('SKIP_WAITING')) throw new Error('PWA service worker must force an app-shell refresh for installed iPhone apps.');

const server = readFileSync('src/server.js', 'utf8');
if (!server.includes("app.get('/api/rooms/:roomId'") || !server.includes('safeRoomId')) {
  throw new Error('Server must expose a safe direct room lookup for pasted links/codes.');
}

console.log('Static build checks passed.');
