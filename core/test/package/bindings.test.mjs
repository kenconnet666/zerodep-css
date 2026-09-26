import test from 'node:test';
import assert from 'node:assert/strict';
import { createBindingTransform, replacePropsId } from '../../dist/compiler.js';
import { createBindings } from '../../dist/bindings.js';
import { Css } from '../../dist/index.js';
import { createServerCssHost } from '../../dist/server.js';
const transform = (text) =>
  createBindingTransform(
    `import { css, ic } from '@zerodep-css/vue'; import { ref } from 'vue'; const s = new Css(); const width = ref(12); ${text}`,
    'test.vue',
    'vue',
  );

test('转换保留快照、覆写与非响应式普通路径，并支持多参数和局部别名', () => {
  const result = transform(
    'const snapshot = width.value; const a = css(s.width.px(snapshot)); const b = css(s.padding.px(width.value, 4)); function rowCss(row) { const size = row.width; return css(s.width.px(size)); }',
  );
  assert.match(result.script, /css\(s.width.px\(snapshot\)\)/);
  assert.match(result.script, /"padding", s.padding, "px", \[\(\) => \(width.value\), 4\]/);
  assert.match(result.script, /"width", s.width, "px", \[\(\) => \(size\)\]/);
  assert.match(
    transform('function example(css) { return css(s.width.px(width.value)); }').script,
    /return css\(s.width.px\(width.value\)\)/,
  );
  const unsupported = transform(
    'const a = computed(() => css(s.width.px(width.value))); const b = css(s.width.px(width.value++));',
  );
  assert.equal(unsupported.used, false);
  assert.equal(unsupported.warnings.size, 2);
  assert.equal(
    replacePropsId('const id = $props.id(); const text = "$props.id()";', 'saved'),
    'const id = saved; const text = "$props.id()";',
  );
});

test('绑定多参数、cx、动画引用、SSR 清单及生命周期', () => {
  const host = createServerCssHost();
  const tasks = [];
  const scope = createBindings('test', host.setBindings, (update) => {
    update();
    tasks.push(update);
    return () => tasks.splice(tasks.indexOf(update), 1);
  });
  const s = new Css();
  let x = 2;
  const bound = scope.capture('box', host.css, () => [
    scope.value('padding', 'padding', s.padding, 'px', [() => x, () => x * 2]),
  ]);
  const combined = host.cx(bound, host.css(s.color.red));
  const rules = host.rules();
  const variable = rules.find((rule) => rule.kind === 'bindings');
  assert.deepEqual(variable.targets, [bound, combined]);
  assert.match(variable.body, /:2px;.*:4px;/);
  x = 8;
  tasks.forEach((update) => update());
  assert.match(host.rules().find((rule) => rule.kind === 'bindings').body, /:8px;.*:16px;/);
  assert.equal(host.rules().length, rules.length);
  scope.dispose();
  assert.equal(tasks.length, 0);
  assert.equal(
    host.rules().some((rule) => rule.kind === 'bindings'),
    false,
  );
});

test('用户覆写 raw 不被已知单位转换绕过；挂载后普通调用继续原始求值', () => {
  const host = createServerCssHost();
  const scope = createBindings('override', host.setBindings, (update) => {
    update();
    return () => {};
  });
  const s = new Css();
  const custom = { raw: s.width.raw, px: (value) => `width:${value * 2}px;` };
  const name = scope.capture('custom', host.css, () => [
    scope.value('x', 'width', custom, 'px', [() => 3]),
  ]);
  assert.equal(host.rules().find((rule) => rule.className === name).body, 'width:6px;');
  scope.finishSetup();
  const plain = scope.capture('plain', host.css, () => [
    scope.value('x', 'width', s.width, 'px', [() => 5]),
  ]);
  assert.equal(host.rules().find((rule) => rule.className === plain).body, 'width:5px;');
});

test('框架模板帧隔离列表键，重排不重建绑定规则', () => {
  const host = createServerCssHost();
  const scope = createBindings('rows', host.setBindings, (update) => {
    update();
    return () => {};
  });
  const s = new Css();
  scope.finishSetup();
  const draw = (key, width) =>
    scope.frame('row', [key], () =>
      scope.capture('style', host.css, () => [
        scope.value('width', 'width', s.width, 'px', [() => width]),
      ]),
    );
  const a = draw('a', 10),
    b = draw('b', 20);
  assert.notEqual(a, b);
  assert.equal(draw('b', 30), b);
  assert.equal(draw('a', 40), a);
  assert.equal(host.rules().length, 4);
});

test('静态全局块不创建响应式订阅，动态全局块按整体更新', () => {
  const fixed = createBindingTransform(
    "import { globalCss, ic } from '@zerodep-css/vue'; globalCss('base', ic('body', 'margin:0;'));",
    'static.vue',
    'vue',
  );
  assert.equal(fixed.used, false);
  const dynamic = createBindingTransform(
    "import { globalCss, ic } from '@zerodep-css/vue'; import { ref } from 'vue'; const color = ref('red'); globalCss('theme', ic('body', `color:${color.value};`));",
    'theme.vue',
    'vue',
  );
  assert.equal(dynamic.used, true);
  assert.match(dynamic.script, /\.effect\(/);
  const shadowed = transform(
    'function outer() { function css(value) { return value; } return css(s.width.px(width.value)); }',
  );
  assert.equal(shadowed.used, false);
});
