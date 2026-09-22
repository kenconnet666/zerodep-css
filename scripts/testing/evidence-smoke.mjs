import assert from 'node:assert/strict';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { withBrowserPage } from './browser-evidence.mjs';

/** 主动触发一次可控失败，确认 CI 在真正断言失败时仍有可读证据。 */
export async function verifyEvidence(browser, output) {
  await assert.rejects(
    withBrowserPage(browser, output, 'expected-failure', async (page) => {
      await page.setContent('<h1>中文测试证据</h1>');
      throw new Error('expected evidence probe');
    }),
    /expected evidence probe/,
  );
  const [id] = await readdir(resolve(output, 'cases'));
  const folder = resolve(output, 'cases', id);
  const result = JSON.parse(await readFile(resolve(folder, 'result.json'), 'utf8'));
  assert.equal(result.status, 'failed');
  assert.equal(result.name, 'expected-failure');
  assert.match(result.error, /expected evidence probe/);
  assert.equal((await readFile(resolve(folder, 'failure.png'))).subarray(1, 4).toString(), 'PNG');
  assert.equal((await readFile(resolve(folder, 'trace.zip'))).subarray(0, 2).toString(), 'PK');
  await writeFile(
    resolve(output, 'verification.json'),
    JSON.stringify({ status: 'passed', note: 'cases 中的失败为主动注入，验证留证链路。' }) + '\n',
  );
}
