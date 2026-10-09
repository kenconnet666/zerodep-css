import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { compile } from 'zerodep-js-compiler';
import { _createRoot } from 'zerodep-js';
import { renderToString } from 'zerodep-js-ssr';
import { Css, createCssContext, createServerCssHost, withCssHost } from '../dist/server.js';
import cssCompiler from '../dist/compiler.js';

test('独立适配器通过框架扩展完成变量更新和 SSR', async () => {
  const source = await readFile(new URL('./fixture.tsx', import.meta.url), 'utf8');
  const output = compile(source, 'fixture.tsx', { extensions: [cssCompiler()] });
  assert.match(output.code, /zerodep-css-zerodep-js\/internal/);
  assert.doesNotMatch(output.code, /zerodep-js\/css/);
  const file = new URL('./.compiled-fixture.mjs', import.meta.url);
  await writeFile(file, output.code);
  try {
    const { App, exercise } = await import(file.href);
    const host = createServerCssHost();
    const values = withCssHost(host, exercise);
    assert.equal(values[0][0], values[1][0]);
    assert.match(values[0][1], /:24px/);
    assert.match(values[1][1], /:28px/);
    assert.match(values[1][1], /--custom:kept/);
    const html = withCssHost(createServerCssHost(), () => renderToString(App));
    assert.match(html, /继承作者/);
    assert.match(html, /:24px/);
    assert.equal(
      html,
      withCssHost(createServerCssHost(), () => renderToString(App)),
    );
  } finally {
    await unlink(file);
  }
});
test('上下文和框架共享作用域，未提供时不创建单例', () => {
  const context = createCssContext();
  _createRoot((dispose) => {
    try {
      assert.throws(() => context.useCss(), /provideCss/);
      const s = context.provideCss(new Css());
      _createRoot((stop) => {
        assert.equal(context.useCss(), s);
        stop();
      });
    } finally {
      dispose();
    }
  });
  _createRoot((dispose) => {
    try {
      assert.throws(() => context.useCss(), /provideCss/);
    } finally {
      dispose();
    }
  });
});
