import assert from 'node:assert/strict';
import test from 'node:test';
import cssBindings from '../../vue/dist/vite.js';
import { bundle } from './mup-bundle.mjs';

test('插件和消费方各自安装 Vue 编译器时，模板缓存仍生成有效浏览器产物', async () => {
  const plugin = cssBindings();
  // 本目录有独立 node_modules；同版本编译器的内部 Symbol 仍具有不同身份。
  const result = await bundle('vue', 'browser', 'vue-binding-performance-driver.ts', {
    dist: true,
    vueCompilerOptions: plugin.api.compilerOptions,
    transformSfc(code, id) {
      const source = code.replace(
        ':class="classFor(row)"',
        ':class="css(s.color.red, s.width.px(20 + iteration * props.count + row))"',
      );
      assert.notEqual(source, code);
      return plugin.transform.call({ warn() {} }, source, id)?.code ?? source;
    },
  });
  assert.ok(result.length > 0);
  assert.ok(/\.row\(/.test(result), '跨编译器实例也必须启用列表缓存，不能静默退回');
});
