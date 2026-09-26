import { mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

await mkdir('test-results', { recursive: true });
const result = spawnSync(
  process.execPath,
  [
    '--experimental-test-coverage',
    '--test',
    '--test-coverage-include=core/src/**',
    '--test-reporter=spec',
    '--test-reporter=lcov',
    '--test-reporter-destination=stdout',
    '--test-reporter-destination=test-results/runtime-coverage.lcov',
    'core/test/runtime/*.test.mjs',
  ],
  { stdio: 'inherit' },
);
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
