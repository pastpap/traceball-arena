import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/test/e2e/**'],
    // Realtime/server tests use child processes, sockets, and tight lifecycle
    // probes. Running test files in parallel on small staging/Termux runners
    // makes those probes flaky, so keep the project gate deterministic.
    fileParallelism: false,
  },
});
