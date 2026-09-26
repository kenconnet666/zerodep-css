import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { transformSync } from 'esbuild';
import { compile } from 'svelte/compiler';
import { render } from 'svelte/server';
import * as adapter from '../svelte/dist/server.js';
import * as bindings from '../svelte/dist/bindings-server.js';
import plugin from '../svelte/dist/vite.js';

const require = createRequire(import.meta.url);
function component(source) {
  const warnings = [];
  const result = plugin().transform.call(
    { warn: (message) => warnings.push(message) },
    source,
    '/test/Template.svelte',
  );
  const transformed = result?.code ?? source;
  // 两套正式编译目标都必须接受转换，客户端仍由 Svelte 生成派生。
  compile(transformed, { filename: 'Template.svelte', generate: 'client', dev: false });
  const code = compile(transformed, { filename: 'Template.svelte', generate: 'server', dev: false })
    .js.code;
  const js = transformSync(code, { loader: 'js', format: 'cjs' }).code;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', js)(
    (name) =>
      name === '@zerodep-css/svelte'
        ? adapter
        : name === '@zerodep-css/svelte/bindings'
          ? bindings
          : require(name),
    module,
    module.exports,
  );
  return { component: module.exports.default, transformed, warnings };
}
const script = `<script>import {Css,css,bx} from '@zerodep-css/svelte'; const s=new Css(); let width=$state(12);</script>`;
function inspect(source) {
  const result = component(source),
    host = adapter.createServerCssHost();
  const html = adapter.withCssHost(host, () => render(result.component).body);
  return { ...result, html, rules: host.rules() };
}

test('snippet 多次调用具有独立变量值，const tag 解构别名参与绑定', () => {
  const result = inspect(`${script}
{#snippet card(value)}
 {@const {size}=value}
 <div class={css(s.width.raw(bx(size+'px')),s.padding.raw(bx(size+'px')+' '+bx(width+'px')))}></div>
{/snippet}
{@render card({size:10})}{@render card({size:30})}`);
  assert.deepEqual(result.warnings, []);
  const values = result.rules.filter((rule) => rule.kind === 'bindings');
  assert.equal(values.length, 2);
  assert.notEqual(values[0].key, values[1].key);
  assert.match(values[0].body, /10px/);
  assert.match(values[1].body, /30px/);
  assert.match(values[0].body, /12px/);
  assert.match(values[1].body, /12px/);
});

test('each 中的 const tag 不漏绑定，同名 css 局部声明不被误当成库入口', () => {
  const result = inspect(`${script}
{#each [{id:1,width:20},{id:2,width:40}] as row (row.id)}
 {@const size=row.width}
 <div class={css(s.width.raw(bx(size+'px')))}></div>
{/each}
{#if true}{@const css=()=> 'external'}<div class={css(s.width.px(width))}></div>{/if}`);
  assert.equal(result.rules.filter((rule) => rule.kind === 'bindings').length, 2);
  assert.match(result.html, /class="external"/);
});

test('const tag 中直接构建 CSS 或调用样式辅助函数，都拥有模板绑定帧', () => {
  const result =
    inspect(`<script>import {Css,css,bx} from '@zerodep-css/svelte';const s=new Css();let width=$state(12);
function style(value){return css(s.width.raw(bx(value+'px')));}</script>
{#if true}{@const first=css(s.height.raw(bx(width+'px')))}{@const second=style(width)}
<div class={first}></div><div class={second}></div>{/if}`);
  assert.equal(result.rules.filter((rule) => rule.kind === 'bindings').length, 2);
  assert.ok(
    result.rules
      .filter((rule) => rule.kind === 'bindings')
      .every((rule) => rule.body.includes('12px')),
  );
});

test('await then/catch 变量进入各自作用域，普通值的 then 分支可绑定', () => {
  const result = inspect(`${script}
{#await {size:32} then item}<div class={css(s.width.raw(bx(item.size+'px')))}></div>{:catch css}<div class={css(s.width.px(width))}></div>{/await}`);
  assert.match(result.rules.find((rule) => rule.kind === 'bindings').body, /32px/);
  assert.match(result.transformed, /\.runtime|\.frame/);
  assert.match(result.transformed, /css\(s.width.px\(width\)\)/);
});

test('模块导出的 snippet 保持可导出，不捕获组件实例宿主', () => {
  const result =
    inspect(`<script module>import {Css,css} from '@zerodep-css/svelte';const s=new Css();export {card};</script>
<script>import {css as makeCss,bx} from '@zerodep-css/svelte';let width=$state(12);const box=makeCss(s.width.raw(bx(width+'px')));</script>
{#snippet card(value)}<div class={css(s.width.px(value))}></div>{/snippet}
<div class={box}></div>{@render card(20)}`);
  assert.equal(result.rules.filter((rule) => rule.kind === 'bindings').length, 1);
  assert.ok(result.rules.some((rule) => rule.body === 'width:20px;'));
});

test('常量与普通变量 bx 也生成变量，derived.by 工厂隔离各次创建', () => {
  const result = inspect(`<script>import {Css,css,bx} from '@zerodep-css/svelte'; const s=new Css();
const plain='12px';const opacity=bx(0.5);
function make(value){const name=$derived(css(s.opacity.raw(opacity),s.width.raw(bx(value))));return ()=>name;}
const a=make(plain),b=make('24px');</script><div class={a()}></div><div class={b()}></div>`);
  const values = result.rules.filter((r) => r.kind === 'bindings');
  assert.equal(values.length, 3);
  assert.ok(values.some((r) => r.body.includes(':12px;')));
  assert.ok(values.some((r) => r.body.includes(':24px;')));
  assert.ok(values.some((r) => r.body.includes(':0.5;')));
});

test('derived.by 引用命名 getter 时仍使用派生实例作用域', () => {
  const result = inspect(
    `<script>import {Css,css,bx} from '@zerodep-css/svelte';const s=new Css();let width=$state(12);function read(){return css(s.width.raw(bx(width+'px')))} const box=$derived.by(read);</script><div class={box}></div>`,
  );
  assert.match(result.transformed, /\$derived.by\(__zc.frameCallback/);
  assert.match(result.rules.find((r) => r.kind === 'bindings').body, /:12px;/);
});

test('SSR 由服务端入口决定，不受测试环境中 document 全局影响', () => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'document');
  Object.defineProperty(globalThis, 'document', { value: {}, configurable: true });
  try {
    const result = inspect(`${script}<div class={css(s.width.raw(bx(width+'px')))}></div>`);
    assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 1);
    assert.match(result.rules.find((r) => r.kind === 'bindings').body, /:12px;/);
  } finally {
    if (previous) Object.defineProperty(globalThis, 'document', previous);
    else delete globalThis.document;
  }
});

test('Svelte effect 回调可编译且不会提前在服务端运行', () => {
  const result = inspect(
    `<script>import {Css,css,bx} from '@zerodep-css/svelte';const s=new Css();let width=$state(12);let box=$state(css(s.height.px(12)));$effect(()=>{const next=width;box=css(s.height.raw(bx(next+'px')))});</script><div class={box}></div>`,
  );
  assert.match(result.transformed, /\$effect\(__zc.frameCallback/);
  assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 0);
  assert.ok(result.rules.some((r) => r.body === 'height:12px;'));
});
