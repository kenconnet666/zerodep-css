import test from 'node:test';
import assert from 'node:assert/strict';
import { createBindingTransform, replacePropsId } from '../../dist/compiler.js';
import { createBindings } from '../../dist/bindings.js';
import { Css, WidthCss, bx } from '../../dist/index.js';
import { createServerCssHost } from '../../dist/server.js';
const transform = (text) =>
  createBindingTransform(
    "import { css, bx, globalCss, keyframes } from '@zerodep-css/vue'; import { computed } from 'vue'; " +
      text,
    'test.vue',
    'vue',
  );
function fixture() {
  const host = createServerCssHost(),
    tasks = [];
  const scope = createBindings(
    'test',
    host.setBindings,
    (run) => {
      run();
      tasks.push(run);
      return () => tasks.splice(tasks.indexOf(run), 1);
    },
    undefined,
    host.releaseBindings,
  );
  return { host, scope, tasks, s: new Css() };
}

test('bx 显式绑定常量、普通值与响应式表达式；未标记调用保持原样', () => {
  const result = transform(
    "const a=css(s.width.raw(bx('12px')), s.opacity.raw(bx(0.5)), s.height.raw(bx(value)), s.color.raw(bx(color.value))); const b=css(s.width.px(width.value));",
  );
  assert.equal(result.used, true);
  assert.equal((result.script.match(/\.bind\(/g) ?? []).length, 4);
  assert.match(result.script, /\(\) => \('12px'\)/);
  assert.match(result.script, /css\(s.width.px\(width.value\)\)/);
  assert.equal(transform('const b=css(s.width.px(width.value));').used, false);
  assert.throws(() => bx('12px'), /compiler plugin/);
});

test('别名、命名空间及多变量字符串被转换，局部同名 bx 不转换', () => {
  const result = createBindingTransform(
    "import {bx as bind} from '@zerodep-css/vue'; import * as z from '@zerodep-css/core'; const a=bind(12); const b=z.bx('red');",
    'a.vue',
    'vue',
  );
  assert.equal((result.script.match(/\.bind\(/g) ?? []).length, 2);
  for (const text of [
    'function run(bx){return bx(12)}',
    'for(const bx of handlers){bx(12)}',
    'try{}catch(bx){bx(12)}',
    'function run(){if(ok){var bx=custom;}return bx(12)}',
    'switch(mode){case 1:const bx=custom;bx(12)}',
  ])
    assert.equal(transform(text).used, false, text);
  assert.equal(
    createBindingTransform("import type {bx} from '@zerodep-css/core'; bx(12)", 'a.vue', 'vue')
      .used,
    false,
  );
  assert.equal(
    replacePropsId('const id = $props.id(); const text = "$props.id()";', 'saved'),
    'const id = saved; const text = "$props.id()";',
  );
});

test('显式值允许自定义格式化；多变量声明、组合类和生命周期保持关联', () => {
  const { host, scope, tasks, s } = fixture();
  let x = 2;
  const name = scope.capture('box', host.css, () => [
    s.padding.raw(scope.bind('x', () => x + 'px') + ' ' + scope.bind('y', () => x * 2 + 'px')),
    s.opacity.raw(scope.bind('constant', () => 0.5)),
  ]);
  const combined = host.css(name, s.color.red);
  const first = host.rules().find((r) => r.kind === 'bindings');
  assert.deepEqual(first.targets, [name, combined]);
  assert.match(first.body, /:2px;.*:4px;.*:0.5;/);
  x = 8;
  tasks.forEach((run) => run());
  assert.match(host.rules().find((r) => r.kind === 'bindings').body, /:8px;.*:16px;/);
  scope.dispose();
  assert.equal(tasks.length, 0);
  assert.equal(
    host.rules().some((r) => r.kind === 'bindings'),
    false,
  );
});

test('独立 bx 可复用，空值恢复关联，不自动补单位或判断 CSS 有效性', () => {
  const { host, scope, tasks, s } = fixture();
  let value = 12;
  const ref = scope.bind('value', () => value);
  const a = host.css(s.width.raw(ref)),
    b = host.css(s.height.raw(ref));
  const body = () => host.rules().find((r) => r.kind === 'bindings');
  assert.match(body().body, /:12;/);
  assert.deepEqual(body().targets, [a, b]);
  value = null;
  tasks.forEach((run) => run());
  assert.equal(body().body, '');
  value = 'invalid';
  tasks.forEach((run) => run());
  assert.match(body().body, /:invalid;/);
  value = 0;
  tasks.forEach((run) => run());
  assert.match(body().body, /:0;/);
  scope.dispose();
});

test('帧内按列表 key 复用，多变量更新不重复注册；可变数组不误命中', () => {
  const { host, scope, s } = fixture();
  let calls = 0;
  const register = (...parts) => {
    calls++;
    return host.css(...parts);
  };
  const draw = (key, value) =>
    scope.frame('row', [key], () =>
      scope.capture('css', register, () => [s.width.raw(scope.bind('width', () => value + 'px'))]),
    );
  const a = draw('a', 10),
    b = draw('b', 20);
  assert.notEqual(a, b);
  assert.equal(draw('b', 30), b);
  assert.equal(draw('a', 40), a);
  assert.equal(calls, 2);
  assert.equal(host.rules().length, 4);
  const parts = [s.color.red];
  const array = () =>
    scope.frame('array', [], () => scope.capture('style', register, () => [parts]));
  const red = array();
  parts[0] = s.color.blue;
  assert.notEqual(array(), red);
  scope.dispose();
});

test('动画、全局样式、选择器和覆写方法共用显式变量语义', () => {
  const { host, scope, s } = fixture();
  const animation = scope.capture('frames', host.keyframes, () => [
    s._selector('to', s.opacity.raw(scope.bind('alpha', () => 0.5))),
  ]);
  const animated = host.css(s.animationName.raw(animation));
  assert.ok(host.rules().some((r) => r.kind === 'bindings' && r.targets.includes(animated)));
  scope.capture('global', host.globalCss, () => [
    'theme',
    s._selector('body', s.color.raw(scope.bind('color', () => 'red'))),
  ]);
  assert.ok(host.rules().some((r) => r.kind === 'bindings' && r.root));
  class CustomWidth extends WidthCss {
    raw(value) {
      return super.raw('calc(' + value + ' * 2)');
    }
  }
  const name = scope.capture('custom', host.css, () => [
    s._hover(new CustomWidth().raw(scope.bind('width', () => '12px'))),
  ]);
  assert.match(host.rules().find((r) => r.className === name).body, /&:hover\{width:calc\(var\(/);
  scope.dispose();
});

test('手写 computed 与 Svelte derived 复用绑定帧', () => {
  const vue = transform("const box=computed(()=>css(s.width.raw(bx(width.value+'px'))));");
  assert.match(vue.script, /computed\(__zc.frameCallback/);
  assert.match(vue.script, /\.capture\(/);
  const svelte = createBindingTransform(
    "import {css,bx} from '@zerodep-css/svelte'; const box=$derived(css(s.width.raw(bx(width+'px'))));",
    'a.svelte',
    'svelte',
  );
  assert.match(svelte.script, /\$derived.by\(__zc.frameCallback/);
  for (const text of ['bx()', 'bx(1,2)', 'bx(...values)', 'bx(bx(1))', 'bx(await value)'])
    assert.throws(() => transform(text), /bx|binding/);
  const { scope } = fixture();
  assert.throws(() => scope.runtime(() => scope.bind('x', () => 1)), /not supported/);
  scope.dispose();
});

test('同名全局块被覆盖后，重新执行带 bx 的调用会恢复原块', () => {
  const { host, scope } = fixture();
  const result = transform("function apply(){globalCss('theme','body{color:'+bx('red')+';}')}");
  const script = result.script.replace(/import[^;]+;/g, '');
  const apply = new Function('__zc', 'globalCss', script + '; return apply;')(
    scope,
    host.globalCss,
  );
  const draw = () => scope.frame('global', [], apply);
  draw();
  const first = host.rules().find((r) => r.key === 'theme').body;
  host.globalCss('theme', 'body{color:blue;}');
  draw();
  assert.equal(host.rules().find((r) => r.key === 'theme').body, first);
  host.globalCss('theme');
  draw();
  assert.equal(host.rules().find((r) => r.key === 'theme').body, first);
  scope.dispose();
});

test('常量生成变量但不创建订阅，动态读取和清理仍完整', () => {
  const { host, scope, tasks, s } = fixture();
  const constant = scope.bind('constant', () => 12, true);
  host.css(s.opacity.raw(constant));
  assert.equal(tasks.length, 0);
  assert.match(host.rules().find((r) => r.kind === 'bindings').body, /:12;/);
  scope.bind('dynamic', () => 24);
  assert.equal(tasks.length, 1);
  const queued = tasks[0];
  scope.dispose();
  scope.dispose();
  queued();
  assert.equal(tasks.length, 0);
  assert.equal(
    host.rules().some((r) => r.kind === 'bindings'),
    false,
  );
  assert.throws(() => scope.bind('late', () => 1), /disposed/);
});

test('绑定表达式和登记失败均撤回订阅，现有组恢复后仍可重试', () => {
  const { host, scope, tasks, s } = fixture();
  assert.throws(
    () =>
      scope.capture(
        'bad',
        () => {
          throw new Error('write failed');
        },
        () => [s.width.raw(scope.bind('x', () => '12px'))],
      ),
    /write failed/,
  );
  assert.equal(tasks.length, 0);
  assert.equal(
    host.rules().some((r) => r.kind === 'bindings'),
    false,
  );
  let fail = false,
    value = '12px';
  const draw = () =>
    scope.frame('row', [], () =>
      scope.capture('good', host.css, () => {
        const part = s.width.raw(scope.bind('x', () => value));
        if (fail) throw new Error('read failed');
        return [part];
      }),
    );
  const initial = draw();
  fail = true;
  value = '24px';
  assert.throws(draw, /read failed/);
  assert.match(host.rules().find((r) => r.kind === 'bindings').body, /:12px;/);
  fail = false;
  assert.equal(draw(), initial);
  assert.match(host.rules().find((r) => r.kind === 'bindings').body, /:24px;/);
  scope.dispose();
});
