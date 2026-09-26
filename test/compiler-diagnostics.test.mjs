import test from 'node:test';
import assert from 'node:assert/strict';
import { TraceMap, originalPositionFor } from '@jridgewell/trace-mapping';
import vue from '../vue/dist/vite.js';
import svelte from '../svelte/dist/vite.js';
import { resolve } from 'node:path';

const position = (source, needle) => {
  const offset = source.indexOf(needle),
    prefix = source.slice(0, offset);
  return { line: prefix.split('\n').length, column: offset - prefix.lastIndexOf('\n') - 1 };
};
for (const [framework, plugin] of [
  ['vue', vue],
  ['svelte', svelte],
]) {
  test(`${framework} 开发定位准确，生产不含定位字典，未修改代码保留映射`, () => {
    const script = `import {Css,css} from '@zerodep-css/${framework}';\n${framework === 'vue' ? "import {ref} from 'vue'; const width=ref(12);" : 'let width=$state({value:12});'}\nconst s=new Css();\nconst box=css(s.width.px(width.value));\nconst untouched = 42;`;
    const source = `<script ${framework === 'vue' ? 'setup ' : ''}lang="ts">\n${script}\n</script>\n${framework === 'vue' ? '<template><div :class="box"></div></template>' : '<div class={box}></div>'}`;
    const path = resolve('test', `Card.${framework === 'vue' ? 'vue' : 'svelte'}`);
    for (const dev of [true, false]) {
      const instance = plugin();
      instance.configResolved({ root: resolve('test'), isProduction: !dev });
      const result = instance.transform.call(
        { warn: (message) => assert.fail(message) },
        source,
        path,
      );
      const call = position(source, 's.width.px');
      assert.equal(result.code.includes(`Card.${framework}:${call.line}:${call.column + 1}`), dev);
      const generated = position(result.code, 'const untouched');
      const original = originalPositionFor(new TraceMap(result.map), generated);
      assert.equal(original.line, position(source, 'const untouched').line);
      assert.equal(original.column, position(source, 'const untouched').column);
    }
  });
}
