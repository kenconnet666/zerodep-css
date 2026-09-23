import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { watchDirectory } from '../../language-services/watch-directory.mjs';

test('语言服务监听允许目录消失，并在重建后继续接收文件变化', async () => {
  const root = await mkdtemp(join(tmpdir(), 'zerodep-watcher-'));
  const folder = join(root, 'dist');
  const errors = [];
  let watcher;
  try {
    assert.equal(
      watchDirectory(
        folder,
        {},
        () => {},
        (e) => errors.push(e),
      ),
      undefined,
    );
    await mkdir(folder);
    let notify;
    const change = new Promise((resolve) => {
      notify = resolve;
    });
    watcher = watchDirectory(
      folder,
      {},
      (_event, name) => {
        if (String(name) === 'index.d.ts') notify();
      },
      (e) => errors.push(e),
    );
    assert(watcher);
    await writeFile(join(folder, 'index.d.ts'), 'export {};');
    let timer;
    try {
      await Promise.race([
        change,
        new Promise((_, reject) => {
          timer = setTimeout(() => reject(new Error('watch timeout')), 5000);
        }),
      ]);
    } finally {
      clearTimeout(timer);
    }
    watcher.close();
    await rm(folder, { recursive: true });
    assert.equal(
      watchDirectory(
        folder,
        {},
        () => {},
        (e) => errors.push(e),
      ),
      undefined,
    );
    assert.deepEqual(errors, []);
  } finally {
    watcher?.close();
    assert.equal(dirname(resolve(root)), resolve(tmpdir()));
    await rm(root, { recursive: true, force: true });
  }
});
