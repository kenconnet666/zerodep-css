import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { launchBrowser } from './browser.mjs';
import { createServerCssHost, serializeCssRules } from '../../core/dist/server.js';

const host = createServerCssHost();
const body =
  '&::before{content:"\\</StYlE><script>globalThis.injected=true</script>";}\r\ncolor:red;';
const className = host.css(body);
const { cssText, manifest } = serializeCssRules(host.rules());
const output = await build({
  entryPoints: [fileURLToPath(new URL('../../core/src/browser.ts', import.meta.url))],
  bundle: true,
  write: false,
  format: 'iife',
  globalName: 'transport',
  platform: 'browser',
});
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.setContent(
    `<style data-zerodep-css>${cssText}</style><script type="application/json" data-zerodep-css>${manifest}</script><div id="restored" class="${className}"></div><div id="reference" class="reference"></div>`,
  );
  await page.addScriptTag({ content: output.outputFiles[0].text });
  const result = await page.evaluate(
    ({ body, className }) => {
      const style = document.createElement('style');
      document.head.append(style);
      // 与不经过 HTML 的 CSSOM 写入比较，验证转义没有改变 CSS 字符串语义。
      style.sheet.insertRule(`.reference{${body}}`);
      const original = getComputedStyle(document.querySelector('#reference'), '::before').content;
      const restored = getComputedStyle(document.querySelector('#restored'), '::before').content;
      window.transport.hydrateCss();
      const same = window.transport.css(body) === className;
      window.transport.hydrateCss(); // 清单已消费，重复 init 不再次恢复。
      return {
        original,
        restored,
        same,
        injected: Boolean(window.injected),
        scripts: document.querySelectorAll('script[data-zerodep-css]').length,
        rules: document.querySelector('style[data-zerodep-css]').sheet.cssRules.length,
      };
    },
    { body, className },
  );
  assert.equal(result.original, result.restored);
  assert.notEqual(result.original, 'none');
  assert.equal(result.same, true);
  assert.equal(result.injected, false);
  assert.equal(result.scripts, 0);
  assert.equal(result.rules, 1);
  const retryPage = await browser.newPage();
  const bad = serializeCssRules([{ ...host.rules()[0], className: 'z-wrong' }]);
  await retryPage.setContent(
    `<style data-zerodep-css>${bad.cssText}</style><script type="application/json" data-zerodep-css>${bad.manifest}</script>`,
  );
  await retryPage.addScriptTag({ content: output.outputFiles[0].text });
  const retry = await retryPage.evaluate(
    ({ cssText, manifest }) => {
      let failed = false;
      try {
        window.transport.hydrateCss();
      } catch {
        failed = true;
      }
      document.querySelector('style[data-zerodep-css]').textContent = cssText;
      document.querySelector('script[data-zerodep-css]').textContent = manifest;
      window.transport.hydrateCss();
      return failed && !document.querySelector('script[data-zerodep-css]');
    },
    { cssText, manifest },
  );
  assert.equal(retry, true);
  console.log(JSON.stringify({ transport: 'passed', tagEscape: 'passed', cssSemantics: 'passed' }));
} finally {
  await browser.close();
}
