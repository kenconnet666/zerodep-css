import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { resolve } from 'node:path';
import * as system from '../../dist/index.js';
import { ThemeCss, ThemeColorCss, themes } from '../../dist/theme.js';

test('主题是可选的第二层继承，关键词仍为声明字符串', () => {
  assert.equal('ThemeCss' in system, false);
  assert.equal('_text' in new system.Css().color, false);
  class ProjectColor extends ThemeColorCss {
    _brand = this.raw('rebeccapurple');
  }
  class ProjectCss extends ThemeCss {
    color = new ProjectColor();
  }
  const s = new ProjectCss();
  assert.equal(s.color._text, 'color:var(--z-theme-text);');
  assert.equal(s.color._brand, 'color:rebeccapurple;');
  assert.equal(s.color.red, 'color:red;');
  assert.equal(s.backgroundColor._surfaceHover, 'background-color:var(--z-theme-surface-hover);');
  assert.equal(s.borderColor._border, 'border-color:var(--z-theme-border);');
  assert.equal(s._hover(s.color._accent), '&:hover{color:var(--z-theme-accent);}');
  assert.match(themes.light, /^color-scheme:light;/);
  assert.match(themes.dark, /^color-scheme:dark;/);
  const names = (value) => [...value.matchAll(/(--z-theme-[\w-]+):/g)].map((match) => match[1]);
  assert.deepEqual(names(themes.light), names(themes.dark));
  assert.equal(names(themes.light).length, 15);
});

test('系统入口不会引入可选主题变量或调色板', async () => {
  const result = await build({
    stdin: {
      contents: "import {Css} from '@zerodep-css/core'; console.log(new Css().color.red);",
      resolveDir: resolve('core'),
    },
    bundle: true,
    write: false,
    minify: true,
    platform: 'browser',
  });
  assert.equal(result.outputFiles[0].text.includes('--z-theme-'), false);
});
