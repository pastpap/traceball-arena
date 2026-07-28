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
if (!css.includes('body[data-mobile-page="play"] .board-card')) throw new Error('Mobile play page must prioritize the board viewport.');

const html = readFileSync('public/index.html', 'utf8');
if (!html.includes('data-page-target="play"') || !html.includes('data-mobile-page="invite"') || !html.includes('data-mobile-page="match"')) {
  throw new Error('Mobile page navigation markup is required.');
}
const inviteTab = html.indexOf('data-page-target="invite"');
const playTab = html.indexOf('data-page-target="play"');
const matchTab = html.indexOf('data-page-target="match"');
if (!(inviteTab < playTab && playTab < matchTab)) throw new Error('Mobile tabs must be ordered Invite, Play, Match.');
if (!html.includes('board-replay replay')) throw new Error('Replay controls must live with the board.');
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
if (!app.includes('drawTurnGateBall') || !app.includes('ownGateMarginY') || !app.includes('canvas.width - 28')) {
  throw new Error('Current-turn gate ball marker must be drawn on the right board margin.');
}
if (!app.includes("navigator.serviceWorker.register('/sw.js')")) throw new Error('PWA service worker registration is required.');

const manifest = JSON.parse(readFileSync('public/manifest.webmanifest', 'utf8'));
if (manifest.name !== 'Traceball Arena' || manifest.display !== 'standalone') throw new Error('PWA manifest must define Traceball Arena as a standalone app.');
if (!manifest.icons?.some((icon) => icon.src === '/icon.svg' && icon.purpose.includes('maskable'))) {
  throw new Error('PWA manifest must reuse the Traceball icon as a maskable app icon.');
}
const icon = readFileSync('public/icon.svg', 'utf8');
if (!icon.includes('<svg') || !icon.includes('Traceball Arena icon')) throw new Error('Traceball SVG icon is required.');
const sw = readFileSync('public/sw.js', 'utf8');
if (!sw.includes('self.addEventListener') || !sw.includes('CACHE_NAME')) throw new Error('PWA service worker shell cache is required.');

console.log('Static build checks passed.');
