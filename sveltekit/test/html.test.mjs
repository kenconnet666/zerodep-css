import assert from 'node:assert/strict';
import test from 'node:test';
import { headMarker, injectPageStyles } from '../dist/html.js';

test('显式 head 标记保留原文、注释和类似关闭标签的脚本文本', () => {
  const html = `<!doctype html><html><head><script>const text = "</head>"</script>${headMarker}</head><body><main>ok</main></body></html>`;
  const manifest = '{"version":1,"value":"\\u003c/script>"}';
  const output = injectPageStyles(
    html,
    '<style data-zerodep="z">.z{color:red}</style>',
    manifest,
    'a"&<',
  );
  assert(output.includes(`<script>const text = "</head>"</script><style`));
  assert(output.includes('nonce="a&quot;&amp;&lt;"'));
  assert(output.includes(`<script type="application/json" data-zerodep-css-manifest`));
  assert(output.includes(`${manifest}</script>${headMarker}</head>`));
  assert(output.endsWith('<body><main>ok</main></body></html>'));
});

test('缺失或重复的专属标记不能静默选择错误注入位置', () => {
  assert.throws(() => injectPageStyles('<html><head></head></html>', '', '{}'), /exactly one/);
  assert.throws(
    () => injectPageStyles(`<head>${headMarker}${headMarker}</head>`, '', '{}'),
    /exactly one/,
  );
});
