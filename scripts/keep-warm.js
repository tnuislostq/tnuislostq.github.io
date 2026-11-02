const https = require('https');

const URLS = [
  'https://ai-monk-interview-app.onrender.com/',
  'https://asalps-app.onrender.com',
  'https://flow-track-w0md.onrender.com',
  'https://sitepulse-audit.onrender.com',
  'https://tuko-chat.onrender.com',
  'https://expense-splitter-group-tab-tracker.onrender.com'
];

async function ping(url) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.get(url, { timeout: 30000 }, (res) => {
      resolve({ url, status: res.statusCode, timeMs: Date.now() - start });
    });
    req.on('error', (err) => resolve({ url, error: err.message, timeMs: Date.now() - start }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, error: 'timeout', timeMs: Date.now() - start });
    });
  });
}

async function run() {
  console.log(`[${new Date().toISOString()}] Pinging Render services to prevent free-tier sleep...`);
  const results = await Promise.all(URLS.map(ping));
  for (const r of results) {
    if (r.status === 200) {
      console.log(`  ✓ ${r.url} -> ${r.status} (${r.timeMs}ms)`);
    } else {
      console.log(`  ⚠ ${r.url} -> ${r.status || r.error} (${r.timeMs}ms)`);
    }
  }
}

if (require.main === module) {
  run();
}

module.exports = { run, URLS };
