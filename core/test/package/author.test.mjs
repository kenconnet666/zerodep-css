import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { ColorCss, Css, WidthCss } from '../../dist/index.js';
import * as author from '../../dist/index.js';

test('直接属性链独立可用，系统字段只在首次构造 Css 时注册', () => {
  assert.equal(Object.getOwnPropertyDescriptor(Css.prototype, 'color'), undefined);
  assert.equal(new ColorCss().red, 'color:red;');
  assert.equal(Object.getOwnPropertyDescriptor(Css.prototype, 'color'), undefined);

  class ThemeWidth extends WidthCss {
    _md = this.raw('48rem');
  }
  class ThemeCss extends Css {
    width = new ThemeWidth();
  }
  class AppWidth extends ThemeWidth {
    _sidebar = this.raw('18rem');
  }
  class AppCss extends ThemeCss {
    width = new AppWidth();
  }

  const theme = new AppCss();
  const getter = Object.getOwnPropertyDescriptor(Css.prototype, 'color')?.get;
  assert.equal(typeof getter, 'function');
  assert.equal(
    Object.getOwnPropertyNames(Css.prototype).filter(
      (name) => name !== 'constructor' && !name.startsWith('_'),
    ).length,
    502,
  );
  assert.equal(theme.width._md, 'width:48rem;');
  assert.equal(theme.width._sidebar, 'width:18rem;');

  const base = new Css();
  assert.equal(Object.getOwnPropertyDescriptor(Css.prototype, 'color')?.get, getter);
  assert.equal(theme.color, base.color);
  assert.equal(theme.color.red, 'color:red;');
  assert.equal(Object.isFrozen(base.color), true);
});

test('消费端只导入少数能力时移除完整作者模型', async () => {
  const sources = {
    marker: "import { className } from '@zerodep-css/core'; console.log(className('Card.title'))",
    color: "import { ColorCss } from '@zerodep-css/core'; console.log(new ColorCss().red)",
    full: "import { Css } from '@zerodep-css/core'; console.log(new Css().color.red)",
  };
  const bytes = {};
  for (const [name, contents] of Object.entries(sources)) {
    const result = await build({
      stdin: { contents, resolveDir: resolve('core'), sourcefile: 'consumer.ts' },
      bundle: true,
      minify: true,
      write: false,
      format: 'iife',
      platform: 'browser',
      target: 'es2023',
    });
    bytes[name] = Buffer.byteLength(result.outputFiles[0].text);
  }
  assert.ok(bytes.marker < bytes.full / 4, JSON.stringify(bytes));
  assert.ok(bytes.color < bytes.full / 4, JSON.stringify(bytes));
  console.log(JSON.stringify(bytes));
});

test('单位与颜色数学方法保持声明字符串与简写参数含义', () => {
  const s = new Css();
  assert.equal(Object.hasOwn(WidthCss.prototype, 'raw'), true);
  assert.equal(s.animationPlayState.raw('paused'), 'animation-play-state:paused;');
  assert.equal(s.width.raw('calc(100% - 2rem)'), 'width:calc(100% - 2rem);');
  assert.equal(s.width.min(0, '10px'), 'width:min(0, 10px);');
  assert.equal(s.opacity.max(0.25, 1), 'opacity:max(0.25, 1);');
  assert.equal(s.width.rem(1.5), 'width:1.5rem;');
  assert.equal(s.padding.rem(0.5, 1), 'padding:0.5rem 1rem;');
  assert.equal(s.gap.em(1, 2), 'gap:1em 2em;');
  assert.equal(s.width.percent(50), 'width:50%;');
  assert.equal(s.animationDuration.ms(180), 'animation-duration:180ms;');
  assert.equal(s.rotate.turn(0.5), 'rotate:0.5turn;');
  assert.equal(s.color.rgb(255, 0, 0, 0.5), 'color:rgb(255 0 0 / 0.5);');
  assert.equal(s.color.hsl(200, 60, 50), 'color:hsl(200 60% 50%);');
  assert.equal(s.width.clamp('16rem', '50vw', '40rem'), 'width:clamp(16rem, 50vw, 40rem);');
  assert.equal(s.textBox.cap, 'text-box:cap;');
});

test('下划线选择器方法共享原型，支持只读数组且不登记或展开类名', () => {
  assert.equal('ic' in author, false);
  const s = new Css();
  const parts = Object.freeze([s.color.red, Object.freeze([false, null, s.opacity.raw(0)])]);
  assert.equal(s._hover(parts), '&:hover{color:red;opacity:0;}');
  assert.equal(s._active(s._before(s.content.raw('""'))), '&:active{&::before{content:"";}}');
  assert.equal(
    s._selector('@supports (display: grid)', s.display.grid),
    '@supports (display: grid){display:grid;}',
  );
  assert.equal(s._selector('50%', s.opacity.raw(0.5)), '50%{opacity:0.5;}');
  assert.equal(s._selector('& > .title', 'z-existing'), '& > .title{z-existing}');
  assert.equal(s._hover, new Css()._hover);
  assert.equal(Object.hasOwn(s, '_hover'), false);
  assert.equal(s.width.ic(1), 'width:1ic;');
  class AppCss extends Css {
    _highlight(...parts) {
      return this._selector('&[data-highlight]', parts);
    }
  }
  assert.equal(new AppCss()._highlight(s.color.red), '&[data-highlight]{color:red;}');
});

test('动态属性方法统一经过声明格式化，固定字段仍为普通常量', () => {
  class ProjectWidth extends WidthCss {
    declaration(value) {
      return super.declaration('calc(' + value + ' * 2)');
    }
  }
  const width = new ProjectWidth();
  assert.equal(width.raw('12px'), 'width:calc(12px * 2);');
  assert.equal(width.px(12), 'width:calc(12px * 2);');
  assert.equal(width.percent(50), 'width:calc(50% * 2);');
  assert.equal(width.clamp('1px', '12px', '20px'), 'width:calc(clamp(1px, 12px, 20px) * 2);');
  assert.equal(width.auto, 'width:auto;');
});

test('颜色通道允许变量字符串，现代颜色方法保持原生值，补全 placeholder 选择器', () => {
  const s = new Css();
  assert.equal(
    s.color.rgb('var(--red)', 20, 30, 'var(--alpha)'),
    'color:rgb(var(--red) 20 30 / var(--alpha));',
  );
  assert.equal(
    s.color.hsl('1turn', 'var(--sat)', 50, '50%'),
    'color:hsl(1turn var(--sat) 50% / 50%);',
  );
  assert.equal(s.color.oklch(0.7, 0.15, 240, 0.5), 'color:oklch(0.7 0.15 240 / 0.5);');
  assert.equal(s.fill.oklab('70%', 0.1, 'var(--b)'), 'fill:oklab(70% 0.1 var(--b));');
  assert.equal(s._placeholder(s.color.gray), '&::placeholder{color:gray;}');
});
