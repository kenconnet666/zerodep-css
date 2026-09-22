import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';
import { transformCss as vue } from '../../../vue/dist/compiler/index.js';
import { transformCss as svelte } from '../../../svelte/dist/compiler/index.js';
import { TraceMap, originalPositionFor } from '@jridgewell/trace-mapping';

function fixture(framework, expression) {
  const script = `import {useStyleRuntime} from '@zerodep-css/${framework}';const {css:style}=useStyleRuntime();let width=10;`;
  return framework === 'vue'
    ? `<script setup lang="ts">${script}</script><template><div :class="${expression}"/></template>`
    : `<script lang="ts">${script}</script><div class={${expression}}/>`;
}
for (const [framework, transform] of [
  ['vue', vue],
  ['svelte', svelte],
]) {
  test(`${framework}：css 别名与重复值的源码位置独立保留`, () => {
    const source = fixture(framework, 'style(s=>{s.width.px(width);s.height.px(width)})');
    const result = transform(source, resolve('Sample.' + framework));
    const map = new TraceMap(JSON.parse(result.map.toString()));
    assert.deepEqual(map.sourcesContent, [source]);
    const references = [...result.code.matchAll(/var\((--zcss-[a-f0-9]+)\)/g)];
    assert.equal(references.length, 2);
    for (let index = 0; index < references.length; index++) {
      const offset = references[index].index + 4;
      const before = result.code.slice(0, offset);
      const point = originalPositionFor(map, {
        line: before.split('\n').length,
        column: offset - before.lastIndexOf('\n') - 1,
      });
      assert.equal(point.line, 1);
      assert.equal(point.column, source.indexOf(index ? 's.height' : 's.width'));
    }
  });
  test(`${framework}：根目录迁移不改变变量标识`, () => {
    const source = fixture(framework, 'style(s=>{s.width.px(width)})');
    const first = transform(source, resolve('checkout-a/src/Card.' + framework), {
      root: resolve('checkout-a'),
    });
    const second = transform(source, resolve('checkout-b/src/Card.' + framework), {
      root: resolve('checkout-b'),
    });
    assert.equal(first.code, second.code);
    assert.equal(
      transform(source, resolve('external/Card.' + framework), { root: resolve('app') }),
      null,
    );
  });
  test(`${framework}：回调局部类、变量写入和同名函数保留运行时作用域`, () => {
    for (const body of [
      'class Value{static width=10;}s.width.px(Value.width);',
      'let value=width;s.width.px(value);value++;',
      'const bx=(n:number)=>n*3;s.width.px(bx(width));',
    ])
      assert.equal(
        transform(fixture(framework, `style(s=>{${body}})`), resolve('Scope.' + framework)),
        null,
      );
  });
  test(`${framework}：开发来源不携带绝对目录且正常交给官方编译器`, () => {
    const source = fixture(
      framework,
      `style(s=>{s.name('panel').config({debug:true});s.width.px(width)})`,
    );
    const result = transform(source, resolve('src/Named.' + framework), { debug: true });
    assert(result.code.includes('src/Named.' + framework));
    if (framework === 'vue')
      compileScript(parse(result.code).descriptor, { id: 'named', inlineTemplate: true });
    else compile(result.code, { filename: resolve('src/Named.svelte'), generate: 'client' });
    assert(
      !transform(source, resolve('src/Named.' + framework), { debug: false }).code.includes(
        'withStyleSource',
      ),
    );
  });
}
test('Svelte 模板 const 遮蔽 css 别名时保留局部函数', () => {
  const source = `<script>import {useStyleRuntime} from '@zerodep-css/svelte';const {css:style}=useStyleRuntime();let width=10;</script>{#if true}{@const style=()=> 'local'}<div class={style(s=>{s.width.px(width)})}/>{/if}`;
  assert.equal(svelte(source, resolve('Shadow.svelte')), null);
});
