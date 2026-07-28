import { existsSync, readFileSync } from 'node:fs';

const required = ['public/index.html', 'public/app.js', 'public/styles.css', 'src/server.js', 'src/game.js', 'railway.json'];
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
}
const railway = JSON.parse(readFileSync('railway.json', 'utf8'));
if (railway.deploy.healthcheckPath !== '/api/health') throw new Error('Railway healthcheck must be /api/health');

const css = readFileSync('public/styles.css', 'utf8');
if (!css.includes('aspect-ratio: 720 / 920')) throw new Error('Board canvas must preserve its 720/920 aspect ratio.');
if (!css.includes('max-width: 720px')) throw new Error('Board canvas must be capped so it does not over-stretch on wide screens.');
if (!css.includes('@media (max-width: 640px)')) throw new Error('Mobile layout breakpoint is required.');

console.log('Static build checks passed.');
