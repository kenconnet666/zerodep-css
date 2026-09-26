import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { ColorCss, Css, WidthCss } from '../../dist/index.js';

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
  assert.equal(Object.getOwnPropertyNames(Css.prototype).length - 1, 502);
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
    ic: "import { ic } from '@zerodep-css/core'; console.log(ic('&:hover', 'color:red;'))",
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
  assert.ok(bytes.ic < bytes.full / 4, JSON.stringify(bytes));
  assert.ok(bytes.color < bytes.full / 4, JSON.stringify(bytes));
  console.log(JSON.stringify(bytes));
});

test('单位与颜色数学方法保持声明字符串与简写参数含义', () => {
  const s = new Css();
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
