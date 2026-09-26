import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { parse, compileScript } from 'vue/compiler-sfc';
import { fileURLToPath } from 'node:url';

test('Vue 可执行示例必须有模板，不能误写成自定义 SFC 块', async () => {
  const root = new URL('../vue/examples/', import.meta.url);
  for (const name of await readdir(root)) {
    if (!name.endsWith('.vue')) continue;
    const source = await readFile(new URL(name, root), 'utf8');
    const { descriptor, errors } = parse(source, { filename: fileURLToPath(new URL(name, root)) });
    assert.deepEqual(errors, [], name);
    assert.ok(descriptor.template, `${name} is missing its template`);
    assert.equal(descriptor.customBlocks.length, 0, name);
    compileScript(descriptor, { id: name, inlineTemplate: true });
  }
});
