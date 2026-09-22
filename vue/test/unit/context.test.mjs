import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSSRApp, effectScope, ref, nextTick } from 'vue';
import {
  createStyleContext,
  installStyleContext,
  useStyleRuntime,
  useGlobalCss,
} from '../../dist/index.js';

test('Vue 显式上下文、应用注入与缺失上下文诊断', () => {
  const context = createStyleContext({ target: null });
  assert.throws(() => useStyleRuntime(), /Provide a style context/);
  assert.equal(useStyleRuntime(context), context.runtime);
  const app = createSSRApp({ render: () => null });
  installStyleContext(app, context);
  assert.equal(
    app.runWithContext(() => useStyleRuntime()),
    context.runtime,
  );
  assert.throws(() => useGlobalCss('outside', () => {}, context), /active Vue/);
  context.dispose();
});
test('Vue 服务端不订阅状态，scope 结束后规则保留到请求输出', async () => {
  const context = createStyleContext({ target: null });
  const color = ref('red');
  const scope = effectScope();
  let count = 0;
  scope.run(() =>
    useGlobalCss(
      'page',
      (g) => {
        count++;
        g.rule('body', (s) => s.color.raw(color.value));
      },
      context,
    ),
  );
  color.value = 'blue';
  await nextTick();
  scope.stop();
  assert.equal(count, 1);
  assert.equal(context.runtime.stats().globals, 1);
  assert.match(context.renderStyles(), /color:red/);
  context.dispose();
});
