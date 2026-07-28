import { existsSync, readFileSync } from 'node:fs';

const required = ['public/index.html', 'public/app.js', 'public/styles.css', 'src/server.js', 'src/game.js', 'railway.json'];
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
}
const railway = JSON.parse(readFileSync('railway.json', 'utf8'));
if (railway.deploy.healthcheckPath !== '/api/health') throw new Error('Railway healthcheck must be /api/health');
console.log('Static build checks passed.');
