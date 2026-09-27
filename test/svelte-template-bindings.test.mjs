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
function component(source, options, id = '/test/Template.svelte') {
  const warnings = [];
  const result = plugin(options).transform.call(
    { warn: (message) => warnings.push(message) },
    source,
    id,
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
      name === 'zerodep-css-svelte'
        ? adapter
        : name === 'zerodep-css-svelte/bindings'
          ? bindings
          : require(name),
    module,
    module.exports,
  );
  return { component: module.exports.default, transformed, warnings };
}
const script = `<script>import {Css,css,bx} from 'zerodep-css-svelte'; const s=new Css(); let width=$state(12);</script>`;
function inspect(source, options, id) {
  const result = component(source, options, id),
    host = adapter.createServerCssHost();
  const html = adapter.withCssHost(host, () => render(result.component).body);
  return { ...result, html, rules: host.rules() };
}

test('依赖 SSR 和 HMR 的缓存查询保留绑定转换及稳定变量身份', () => {
  const source = `${script}<svg class={css(s.width.raw(bx(width+'px')))}></svg>`;
  const baseline = inspect(source);
  for (const query of ['v=first', 'v=second', 't=123', 'v=hash&t=456']) {
    const result = inspect(source, undefined, '/test/Template.svelte?' + query);
    assert.equal(result.transformed, baseline.transformed);
    assert.match(result.html, /--zi-[^:]+: 12px/);
    assert.deepEqual(result.warnings, []);
  }
});

test('样式和资源子请求不会被误当作 Svelte 源组件解析', () => {
  for (const suffix of ['?svelte&type=style&lang.css', '?raw', '?url', '?v=hash&raw', '.js']) {
    assert.equal(
      plugin().transform.call({ warn() {} }, 'not Svelte source', '/test/Template.svelte' + suffix),
      undefined,
    );
  }
});

test('Svelte 元素变量兼容已有 style 和 style 指令，多变量、常量及未执行分支', () => {
  const result =
    inspect(`<script>import {Css,css,bx} from 'zerodep-css-svelte';const s=new Css();let width=$state(20);
    function format(n){return n+'px'} function fail(){throw Error('inactive')}</script>
    <div style="color:red" style:height={width+'px'} class={css(s.padding.raw(bx(format(width))+' '+bx('2px')),
      true?s.width.raw(bx(format(width))):s.width.raw(bx(fail())),s._hover(s.opacity.raw(bx(0.5))))}></div>`);
  assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 0);
  assert.match(result.html, /color:red/);
  assert.match(result.html, /height: 20px/);
  assert.match(result.html, /--zi-[^:]+: 2px/);
  assert.match(result.html, /--zi-[^:]+: initial/);
  assert.ok(result.rules.some((r) => r.body.includes('&:hover')));
});

test('Svelte 关闭内联绑定时保留严格 CSP 传输，空值在元素模式下重置', () => {
  const source = `${script}<div class={css(s.width.raw(bx(width+'px')))}></div>`;
  const result = inspect(source, { inlineBindings: false });
  assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 1);
  assert.doesNotMatch(result.html, /style=/);
  const empty = inspect(`${script}<div class={css(s.width.raw(bx(null)))}></div>`);
  assert.match(empty.html, /--zi-[^:]+: initial/);
});

test('Svelte 的覆写方法和任意选择器不改变变量的原有作用域', () => {
  const result = inspect(`<script>import {Css,WidthCss,css,bx} from 'zerodep-css-svelte';
    class Width extends WidthCss {raw(value){return super.raw(value)}} class App extends Css {width=new Width()}
    const s=new App();let width=$state(20);</script>
    <div class={css(s.width.raw(bx(width+'px')))}></div>
    <div class={css(s._selector('& + div',s.width.raw(bx(width+'px'))))}></div>`);
  assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 2);
  assert.doesNotMatch(result.html, /style=/);
});

test('Svelte Grid 方法使用元素变量，项目选择器和主题方法保留用户实现', () => {
  const result = inspect(`<script>import {Css,css,bx} from 'zerodep-css-svelte';
    import {ProjectCss} from '../core/examples/project-css.ts';const s=new Css(),project=new ProjectCss();let width=$state(20);</script>
    <div class={css(s.gridTemplateColumns.repeat(2,bx(width+'px'),'1fr'),s.gridAutoRows.minmax(0,bx(width+'px')),s.gridTemplateRows.fitContent(bx('50%')))}></div>
    <div class={css(project._media('(width >= 0px)',s.width.raw(bx(width+'px'))))}></div>
    <div class={css(project.theme({text:bx('red')}),project.color._text)}></div>`);
  assert.match(result.html, /--zi-[^:]+: 20px/);
  assert.match(result.html, /--zi-[^:]+: 50%/);
  assert.ok(result.rules.some((r) => r.body.includes('repeat(2, var(--zi-')));
  assert.ok(result.rules.some((r) => r.body.includes('@media (width >= 0px)')));
  assert.ok(result.rules.some((r) => r.body.includes('--z-theme-text:var(--zv-')));
  assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 2);
});

test('snippet 多次调用具有独立变量值，const tag 解构别名参与绑定', () => {
  const result = inspect(`${script}
{#snippet card(value)}
 {@const {size}=value}
 <div class={css(s.width.raw(bx(size+'px')),s.padding.raw(bx(size+'px')+' '+bx(width+'px')))}></div>
{/snippet}
{@render card({size:10})}{@render card({size:30})}`);
  assert.deepEqual(result.warnings, []);
  const values = result.rules.filter((rule) => rule.kind === 'bindings');
  assert.equal(values.length, 0);
  assert.equal(result.rules.filter((rule) => (rule.kind ?? 'class') === 'class').length, 1);
  assert.match(result.html, /style="[^"]*10px[^"]*12px/);
  assert.match(result.html, /style="[^"]*30px[^"]*12px/);
});

test('each 中的 const tag 不漏绑定，同名 css 局部声明不被误当成库入口', () => {
  const result = inspect(`${script}
{#each [{id:1,width:20},{id:2,width:40}] as row (row.id)}
 {@const size=row.width}
 <div class={css(s.width.raw(bx(size+'px')))}></div>
{/each}
{#if true}{@const css=()=> 'external'}<div class={css(s.width.px(width))}></div>{/if}`);
  assert.equal(result.rules.filter((rule) => rule.kind === 'bindings').length, 0);
  assert.match(result.html, /--zi-[^:]+: 20px/);
  assert.match(result.html, /--zi-[^:]+: 40px/);
  assert.match(result.html, /class="external"/);
});

test('const tag 中直接构建 CSS 或调用样式辅助函数，都拥有模板绑定帧', () => {
  const result =
    inspect(`<script>import {Css,css,bx} from 'zerodep-css-svelte';const s=new Css();let width=$state(12);
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
  assert.match(result.html, /--zi-[^:]+: 32px/);
  assert.match(result.transformed, /\.runtime|\.frame/);
  assert.match(result.transformed, /css\(s.width.px\(width\)\)/);
});

test('模块导出的 snippet 保持可导出，不捕获组件实例宿主', () => {
  const result =
    inspect(`<script module>import {Css,css} from 'zerodep-css-svelte';const s=new Css();export {card};</script>
<script>import {css as makeCss,bx} from 'zerodep-css-svelte';let width=$state(12);const box=makeCss(s.width.raw(bx(width+'px')));</script>
{#snippet card(value)}<div class={css(s.width.px(value))}></div>{/snippet}
<div class={box}></div>{@render card(20)}`);
  assert.equal(result.rules.filter((rule) => rule.kind === 'bindings').length, 1);
  assert.ok(result.rules.some((rule) => rule.body === 'width:20px;'));
});

test('常量与普通变量 bx 也生成变量，derived.by 工厂隔离各次创建', () => {
  const result = inspect(`<script>import {Css,css,bx} from 'zerodep-css-svelte'; const s=new Css();
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
    `<script>import {Css,css,bx} from 'zerodep-css-svelte';const s=new Css();let width=$state(12);function read(){return css(s.width.raw(bx(width+'px')))} const box=$derived.by(read);</script><div class={box}></div>`,
  );
  assert.match(result.transformed, /\$derived.by\(__zc.frameCallback/);
  assert.match(result.rules.find((r) => r.kind === 'bindings').body, /:12px;/);
});

test('SSR 由服务端入口决定，不受测试环境中 document 全局影响', () => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'document');
  Object.defineProperty(globalThis, 'document', { value: {}, configurable: true });
  try {
    const result = inspect(`${script}<div class={css(s.width.raw(bx(width+'px')))}></div>`);
    assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 0);
    assert.match(result.html, /--zi-[^:]+: 12px/);
  } finally {
    if (previous) Object.defineProperty(globalThis, 'document', previous);
    else delete globalThis.document;
  }
});

test('Svelte effect 回调可编译且不会提前在服务端运行', () => {
  const result = inspect(
    `<script>import {Css,css,bx} from 'zerodep-css-svelte';const s=new Css();let width=$state(12);let box=$state(css(s.height.px(12)));$effect(()=>{const next=width;box=css(s.height.raw(bx(next+'px')))});</script><div class={box}></div>`,
  );
  assert.match(result.transformed, /\$effect\(__zc.frameCallback/);
  assert.equal(result.rules.filter((r) => r.kind === 'bindings').length, 0);
  assert.ok(result.rules.some((r) => r.body === 'height:12px;'));
});
