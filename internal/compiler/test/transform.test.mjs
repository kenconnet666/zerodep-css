import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';
import { transformBx as vue } from '../../../vue/dist/compiler/index.js';
import { transformBx as svelte } from '../../../svelte/dist/compiler/index.js';
import { bxValue, bxTuple } from '../../../core/dist/binding.js';
import { TraceMap, originalPositionFor } from '@jridgewell/trace-mapping';
import { transform as compileJs } from 'esbuild';
import { createRequire } from 'node:module';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import * as adapter from '../../../vue/dist/index.js';
import * as bindingRuntime from '../../../core/dist/binding.js';
import * as vueCompilerRuntime from '../../../vue/dist/compiler-runtime.js';
import { createStyleContext } from '../../../core/dist/index.js';

function fixture(framework, expression, extra = '', alias = 'bx') {
  const script = `import { bx as ${alias}, useStyleRuntime } from '@zerodep-css/${framework}'; const {css}=useStyleRuntime(); let width=10;${extra}`;
  return framework === 'vue'
    ? `<script setup lang="ts">${script}</script><template><div :class="${expression}" /></template>`
    : `<script lang="ts">${script}</script><div class={${expression}} />`;
}
for (const [framework, transform] of [
  ['vue', vue],
  ['svelte', svelte],
]) {
  const filename = resolve('sample.' + framework);
  test(`${framework}：导入别名、单位、多变量与源码映射`, () => {
    const code = fixture(
      framework,
      'css(s=>{s.width.px(bind(width));s.padding.px(1,bind(width));})',
      '',
      'bind',
    );
    const result = transform(code, filename);
    assert(result.code.includes('var(--zbx-'));
    assert(!result.code.includes('px(bind('));
    assert.equal(JSON.parse(result.map.toString()).sourcesContent[0], code);
    const variableOffset = result.code.indexOf('--zbx-');
    const generatedBefore = result.code.slice(0, variableOffset);
    const original = originalPositionFor(new TraceMap(JSON.parse(result.map.toString())), {
      line: generatedBefore.split('\n').length,
      column: variableOffset - generatedBefore.lastIndexOf('\n') - 1,
    });
    const expected = code.indexOf('bind(width)');
    assert.equal(original.line, code.slice(0, expected).split('\n').length);
    assert.equal(original.column, expected - code.slice(0, expected).lastIndexOf('\n') - 1);
    if (framework === 'vue') {
      const { descriptor } = parse(result.code);
      compileScript(descriptor, { id: 'test', inlineTemplate: true });
    } else compile(result.code, { filename, generate: 'client' });
  });
  test(`${framework}：局部同名函数和普通变量不被提升`, () => {
    assert.equal(
      transform(
        fixture(framework, 'css(s=>{const bx=(v:number)=>v;s.width.px(bx(width));})'),
        filename,
      ),
      null,
    );
    assert.equal(transform(fixture(framework, 'css(s=>{s.width.px(width);})'), filename), null);
  });
  test(`${framework}：项目外无 bx 的组件交回官方编译器`, () => {
    const source =
      framework === 'vue'
        ? '<script setup>const value=1;</script><template><div>{{value}}</div></template>'
        : '<script>const value=1;</script><div>{value}</div>';
    assert.equal(
      transform(source, resolve('external', 'App.' + framework), { root: resolve('app') }),
      null,
    );
  });
  test(`${framework}：作用域和字符串边界给定位诊断`, () => {
    for (const expression of [
      'css(s=>{const local=1;s.width.px(bx(local));})',
      'css(s=>{class Value{static width=20;}s.width.px(bx(Value.width));})',
      'css(s=>{s.width.px(bx(width)+1);})',
      'css(s=>{s.width.px(bx(Math.random()));})',
      'css(s=>{if(width)s.width.px(bx(width));})',
      'css(s=>{if(width)return;s.width.px(bx(width));})',
      'css(s=>{s.width.px(bx(width++));})',
      'css(s=>{s.animation.ms(width,bx(width));})',
      'width ? css(s=>{s.width.px(bx(width));}) : null',
      'css(s=>{s.transform.raw(`foo${bx(width)}px`);})',
    ])
      assert.throws(
        () => transform(fixture(framework, expression), filename),
        /\[zerodep bx\].*:\d+:\d+:/,
      );
  });
  test(`${framework}：模板多变量分别绑定，变量 ID 不含 checkout 路径`, () => {
    const source = fixture(
      framework,
      'css(s=>{s.transform.raw(`translate(${bx(width)}px, ${bx(width)}px)`);})',
    );
    const a = transform(source, resolve('one', 'sample.' + framework), { root: resolve('one') });
    const b = transform(source, resolve('two', 'sample.' + framework), { root: resolve('two') });
    assert.equal(a.code, b.code);
    assert.equal(new Set(a.code.match(/--zbx-[a-f0-9]+/g)).size, 2);
    assert(!/var\([^)]*\)px/.test(a.code));
  });
  test(`${framework}：无关嵌套函数的参数不遮蔽外层绑定值`, () => {
    const result = transform(
      fixture(framework, 'css(s=>{const local=(width:number)=>width;s.width.px(bx(width));})'),
      filename,
    );
    assert(result.code.includes('var(--zbx-'));
  });
  test(`${framework}：已绑定 class 的额外拼接/组件透传不能静默漏绑定`, () => {
    const base = fixture(framework, 'shared', 'const shared=css(s=>{s.width.px(bx(width));});');
    const invalid =
      framework === 'vue'
        ? base.replace('</template>', '<div :class="[shared]"/></template>')
        : base + '<div class={[shared]} />';
    assert.throws(() => transform(invalid, filename), /class.*(?:拼接|透传)/);
  });
}
test('bx 变量格式化沿用标量、单位、范围与 CSS 边界约束', () => {
  assert.equal(bxValue(0, { unit: 'px', numbers: [{ min: 0 }] }), '0px');
  assert.equal(bxValue(-2, { unit: 'px' }), '-2px');
  assert.equal(bxValue('red', { tokens: ['red', 'blue'] }), 'red');
  for (const value of [NaN, Infinity, null, undefined, {}, '']) assert.throws(() => bxValue(value));
  assert.throws(() => bxValue(-1, { numbers: [{ min: 0 }] }));
  assert.throws(() => bxValue('1', { unit: 'px' }));
  assert.throws(() => bxValue('red; color:blue'));
  assert.throws(() => bxValue('green', { tokens: ['red'] }));
});

test('Svelte 模板 const 同名函数保持原样，不误当导入宏', () => {
  const source =
    fixture('svelte', 'css(s=>{s.width.px(bx(10));})').replace(
      '<div',
      '{#if true}{@const bx=(value:number)=>value*3}<div',
    ) + '{/if}';
  assert.equal(svelte(source, resolve('scope.svelte')), null);
});

test('重复 getter 的来源映射分别指回各自 bx 调用', () => {
  const source = fixture('svelte', 'css(s=>{s.width.px(bx(width));s.height.px(bx(width));})');
  const result = svelte(source, resolve('map.svelte'));
  const expressions = [...result.code.matchAll(/__zbx_value_\d+\(width,/g)];
  assert.equal(expressions.length, 2);
  const map = new TraceMap(JSON.parse(result.map.toString()));
  const expected = [source.indexOf('bx(width)'), source.lastIndexOf('bx(width)')];
  expressions.forEach((expression, index) => {
    const before = result.code.slice(0, expression.index);
    const point = originalPositionFor(map, {
      line: before.split('\n').length,
      column: expression.index - before.lastIndexOf('\n') - 1,
    });
    assert.equal(
      point.column,
      expected[index] - source.slice(0, expected[index]).lastIndexOf('\n') - 1,
    );
  });
});
test('单位参数备选约束不因逐位置取并集而放宽', () => {
  const alternatives = [
    [{ min: 0 }, {}],
    [{}, { min: 0 }],
  ];
  assert.deepEqual(bxTuple([1, -1], alternatives), [1, -1]);
  assert.deepEqual(bxTuple([-1, 1], alternatives), [-1, 1]);
  assert.throws(() => bxTuple([-1, -1], alternatives));
});

test('Vue 模板提升保留普通对象简写的语法与依赖', () => {
  const source = fixture(
    'vue',
    'css(s=>{const normal={width};s.height.px(normal.width);s.width.px(bx(width));})',
  );
  const result = vue(source, resolve('sample.vue'));
  const { descriptor } = parse(result.code);
  assert.doesNotThrow(() => compileScript(descriptor, { id: 'test', inlineTemplate: true }));
});

test('Vue 无解构 props 在提升的 class 和变量计算中保持可用', async () => {
  const source = `<script setup lang="ts">import {bx,useStyleRuntime} from '@zerodep-css/vue';defineProps<{width:number;color:string}>();const {css}=useStyleRuntime();</script><template><div :class="css(s=>{s.color.raw(color);s.width.px(bx(width));})"/></template>`;
  const result = vue(source, resolve('Props.vue'));
  const { descriptor } = parse(result.code);
  const compiled = compileScript(descriptor, {
    id: 'props',
    inlineTemplate: true,
    templateOptions: { ssr: true },
  });
  const js = await compileJs(compiled.content, { loader: 'ts', format: 'cjs', target: 'node24' });
  const module = { exports: {} };
  const require = createRequire(import.meta.url);
  new Function('require', 'module', 'exports', js.code)(
    (id) =>
      id === '@zerodep-css/vue'
        ? adapter
        : id === '@zerodep-css/core/binding'
          ? bindingRuntime
          : require(id),
    module,
    module.exports,
  );
  const context = createStyleContext({ target: null });
  try {
    const app = createSSRApp(module.exports.default, { width: 20, color: 'red' });
    adapter.installStyleContext(app, context);
    const html = await renderToString(app);
    assert.match(html, /20px/);
    assert(context.runtime.snapshot().records.some((record) => record.body.includes('color:red')));
  } finally {
    context.dispose();
  }
});

test('Vue 条件列表只计算实际可见行的绑定', async () => {
  const source = `<script setup lang="ts">import {ref} from 'vue';import {bx,useStyleRuntime} from '@zerodep-css/vue';const {css}=useStyleRuntime();const rows=ref([{id:'a',enabled:false,detail:null},{id:'b',enabled:true,detail:{width:20}}]);</script><template><template v-for="row in rows" :key="row.id"><div v-if="row.enabled" :class="css(s=>{s.width.px(bx(row.detail.width));})"/></template></template>`;
  const result = vue(source, resolve('Guarded.vue'));
  assert(!result.code.includes('.map('));
  const { descriptor } = parse(result.code);
  const compiled = compileScript(descriptor, {
    id: 'guarded',
    inlineTemplate: true,
    templateOptions: { ssr: true },
  });
  const js = await compileJs(compiled.content, { loader: 'ts', format: 'cjs', target: 'node24' });
  const module = { exports: {} };
  const require = createRequire(import.meta.url);
  new Function('require', 'module', 'exports', js.code)(
    (id) =>
      id === '@zerodep-css/vue'
        ? adapter
        : id === '@zerodep-css/core/binding'
          ? bindingRuntime
          : id === '@zerodep-css/vue/compiler-runtime'
            ? vueCompilerRuntime
            : require(id),
    module,
    module.exports,
  );
  const context = createStyleContext({ target: null });
  try {
    const app = createSSRApp(module.exports.default);
    adapter.installStyleContext(app, context);
    assert.match(await renderToString(app), /20px/);
  } finally {
    context.dispose();
  }
});
