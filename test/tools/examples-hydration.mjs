import assert from 'node:assert/strict';
import { launchBrowser } from './browser.mjs';
import { bundle } from './mup-bundle.mjs';
import { assertInitial, exerciseExample, ruleCount } from './example-assertions.mjs';

const requests = [
  { initialWidth: 24, initialTheme: 'light' },
  { initialWidth: 40, initialTheme: 'dark' },
];
const browser = await launchBrowser();
try {
  for (const framework of ['vue', 'svelte']) {
    const source = await bundle(framework, 'node', `${framework}-examples-server.ts`);
    const server = await import(
      `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
    );
    const rendered = await Promise.all(
      requests.map((props, index) => server.renderPage(props, index === 0 ? 10 : 0)),
    );
    // 共享的 24/48px 分支合法复用；第二个请求独有的 40px 不得进入第一个请求。
    assert.equal(
      rendered[0].rules.some((rule) => rule.body.includes('width:40px;')),
      false,
    );
    assert.equal(
      rendered[1].rules.some((rule) => rule.body.includes('width:40px;')),
      true,
    );
    assert.equal(rendered[0].html.includes('#111827'), true);
    assert.equal(rendered[1].html.includes('#e5e7eb'), true);
    const repeated = await server.renderPage(requests[0]);
    assert.deepEqual(repeated.rules, rendered[0].rules);
    assert.equal(repeated.cssText, rendered[0].cssText);

    const client = await bundle(framework, 'browser', `${framework}-examples-driver.ts`);
    for (let index = 0; index < requests.length; index++) {
      const props = requests[index];
      const result = rendered[index];
      const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (['warning', 'error'].includes(message.type())) errors.push(message.text());
      });
      try {
        // 这里全部是本测试的可信输入；正式 HTML 输出需要由宿主安全序列化。
        await page.setContent(
          `<style data-zerodep-css>${result.cssText}</style><div id="app">${result.html}</div>`,
        );
        // 在任何客户端代码执行前验证首屏，防止 effect 掩盖服务端漏样式。
        await assertInitial(page, props.initialWidth, props.initialTheme);
        assert.equal(await ruleCount(page), result.rules.length);
        await page.evaluate(() => {
          window.serverNodes = [...document.querySelectorAll('[data-sample]')];
        });
        await page.addScriptTag({ content: client });
        await page.evaluate(
          async ({ props, rules }) => {
            window.mupBundle.restore(rules);
            window.exampleControl = await window.mupBundle.start(
              document.querySelector('#app'),
              props,
              true,
            );
            const nodes = [...document.querySelectorAll('[data-sample]')];
            if (
              nodes.length !== window.serverNodes.length ||
              nodes.some((node, i) => node !== window.serverNodes[i])
            )
              throw new Error('Hydration replaced server elements.');
            delete window.serverNodes;
          },
          { props, rules: result.rules },
        );
        await assertInitial(page, props.initialWidth, props.initialTheme);
        assert.equal(await page.locator('style[data-zerodep-css]').count(), 1);
        assert.equal(await ruleCount(page), result.rules.length);
        await exerciseExample(page, props.initialWidth, props.initialTheme);
        const afterUpdates = await ruleCount(page);
        await page.evaluate(() => window.exampleControl.dispose());
        assert.equal(await page.locator('[data-sample]').count(), 0);
        // 同一文档重新挂载只复用规则，不再调用一次性的 hydrateCss。
        await page.evaluate(async (props) => {
          window.exampleControl = await window.mupBundle.start(
            document.querySelector('#app'),
            props,
          );
        }, props);
        await assertInitial(page, props.initialWidth, props.initialTheme);
        assert.equal(await ruleCount(page), afterUpdates);
        await page.evaluate(() => window.exampleControl.dispose());
        assert.deepEqual(errors, []);
      } finally {
        await page.close();
      }
    }
    console.log(
      JSON.stringify({ framework, examples: 'ssr-hydration', requests: 2, status: 'passed' }),
    );
  }
} finally {
  await browser.close();
}
