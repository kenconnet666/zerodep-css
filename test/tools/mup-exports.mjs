import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { build } from 'esbuild';

for (const framework of ['vue', 'svelte']) {
  for (const platform of ['browser', 'node']) {
    const result = await build({
      stdin: {
        contents: `import { css } from '@zerodep-css/${framework}'; console.log(css);`,
        resolveDir: resolve(`../../${framework}`),
        sourcefile: 'self.ts',
      },
      bundle: true,
      write: false,
      platform,
      format: 'esm',
    });
    const output = result.outputFiles[0].text;
    assert.equal(output.includes('CSS browser host is unavailable'), platform === 'browser');
    assert.equal(output.includes('CSS server host is unavailable'), platform === 'node');
    console.log(JSON.stringify({ framework, platform, status: 'passed' }));
  }
}
