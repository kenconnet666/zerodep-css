import assert from 'node:assert/strict';
import { withBrowserPage } from '../../../scripts/testing/browser-evidence.mjs';

export async function runBrowserTests(browser, baseUrl, ssr, output) {
  const results = [];
  async function scenario(name, fn, path = '/') {
    return withBrowserPage(
      browser,
      output,
      name,
      async (page) => {
        const errors = [];
        page.on('pageerror', (e) => errors.push(e.message));
        await page.goto(baseUrl + path);
        await page.evaluate(async () => {
          window.z = await import('/core.js');
        });
        const result = await fn(page);
        assert.deepEqual(errors, [], 'Unexpected browser errors');
        results.push({ name, result });
        console.log('BROWSER PASS: ' + name);
      },
      { viewport: { width: 800, height: 600 } },
    );
  }
  await scenario('直接 css / 外部字符串、重复使用和内容变化', async (page) => {
    const result = await page.evaluate(() => {
      const { css } = window.z;
      const factory = (s) => {
        s.display.flex;
        s.padding.px(8, 16);
      };
      const name = css(factory);
      const node = document.createElement('div');
      node.className = name;
      document.body.append(node);
      const before = getComputedStyle(node).padding;
      const same = css(factory);
      const count = document.querySelectorAll('style[data-zerodep]').length;
      node.className = css((s) => s.padding.px(12));
      return { name, same, count, display: before, padding: getComputedStyle(node).padding };
    });
    assert.equal(result.name, result.same);
    assert.equal(result.count, 1);
    assert.equal(result.display, '8px 16px');
    assert.equal(result.padding, '12px');
    return result;
  });
  await scenario('原生嵌套、交错声明、属性字符串和伪元素', async (page) => {
    await page.evaluate(() => {
      const r = window.z.createRuntime({ namespace: 'nested' });
      window.runtime = r;
      const el = document.createElement('div');
      el.id = 'box';
      el.dataset.symbol = '&';
      el.textContent = 'box';
      el.className = r.css((s) => {
        s.color.red;
        s.hover((h) => h.color.blue);
        s.color.green;
        s.selector('&[data-symbol="&"]', (h) => h.padding.px(7));
        s.before((h) => h.content.raw('"a&b;c:d"'));
      });
      document.body.append(el);
    });
    await page.locator('#box').hover();
    const result = await page.evaluate(() => {
      const el = document.querySelector('#box');
      return {
        color: getComputedStyle(el).color,
        padding: getComputedStyle(el).padding,
        content: getComputedStyle(el, '::before').content,
      };
    });
    assert.equal(result.color, 'rgb(0, 0, 255)');
    assert.equal(result.padding, '7px');
    assert.equal(result.content, '"a&b;c:d"');
    return result;
  });
  await scenario('交错的同优先级嵌套声明保持顺序', async (page) => {
    const result = await page.evaluate(() => {
      const r = window.z.createRuntime({ namespace: 'order' });
      const el = document.createElement('div');
      el.className = r.css((s) => {
        s.color.red;
        s.selector('&', (h) => h.color.blue);
        s.color.green;
      });
      document.body.append(el);
      return getComputedStyle(el).color;
    });
    assert.equal(result, 'rgb(0, 128, 0)');
    return result;
  });
  await scenario('media / supports / container / scope / starting-style', async (page) => {
    const result = await page.evaluate(() => {
      const r = window.z.createRuntime({ namespace: 'conditions' });
      const parent = document.createElement('section');
      parent.className = 'scope';
      parent.style.cssText = 'container-type:inline-size;container-name:card;width:300px';
      const el = document.createElement('div');
      el.className = r.css((s) => {
        s.media('(width > 500px)', (m) =>
          m.supports('(display:grid)', (q) =>
            q.containerQuery('card (width > 200px)', (c) => c.padding.px(19)),
          ),
        );
        s.startingStyle((p) => p.opacity.raw(0));
        s.opacity.raw(1);
      });
      parent.append(el);
      document.body.append(parent);
      r.mountGlobal((g) => g.scope('(.scope)', (n) => n.rule(':scope > div', (s) => s.color.red)));
      return {
        padding: getComputedStyle(el).padding,
        color: getComputedStyle(el).color,
        opacity: getComputedStyle(el).opacity,
        cssRules: [...document.querySelectorAll('style')].reduce(
          (n, s) => n + s.sheet.cssRules.length,
          0,
        ),
      };
    });
    assert.equal(result.padding, '19px');
    assert.equal(result.color, 'rgb(255, 0, 0)');
    assert.equal(result.opacity, '1');
    return result;
  });
  await scenario('层序与 important 的反向层优先级', async (page) => {
    const result = await page.evaluate(() => {
      const r = window.z.createRuntime({
        namespace: 'layers',
        layers: ['base', 'override'],
        layer: 'override',
      });
      const el = document.createElement('div');
      el.id = 'layered';
      el.className = r.css((s) => {
        s.color.blue;
        s.important((h) => h.padding.px(10));
      });
      document.body.append(el);
      r.mountGlobal((g) =>
        g.layer('base', (n) =>
          n.rule('#layered', (s) => {
            s.color.red;
            s.important((h) => h.padding.px(2));
          }),
        ),
      );
      return { color: getComputedStyle(el).color, padding: getComputedStyle(el).padding };
    });
    assert.equal(result.color, 'rgb(0, 0, 255)');
    assert.equal(result.padding, '2px');
    return result;
  });
  await scenario('动画依赖注册与实际播放、共享资源驻留', async (page) => {
    const result = await page.evaluate(async () => {
      const { createRuntime, keyframes } = window.z;
      const r = createRuntime({ namespace: 'animation' });
      const fade = keyframes((k) => {
        k.from((s) => s.opacity.raw(0));
        k.to((s) => s.opacity.raw(1));
      });
      const name = r.css((s) => {
        s.animationName.raw(fade);
        s.animationDuration.ms(20);
        s.animationFillMode.forwards;
      });
      const el = document.createElement('div');
      el.className = name;
      el.textContent = 'animation';
      document.body.append(el);
      const animations = el.getAnimations();
      await Promise.all(animations.map((a) => a.finished));
      r.css((s) => {
        s.animationName.raw(fade);
        s.color.red;
      });
      return {
        animations: animations.length,
        opacity: getComputedStyle(el).opacity,
        name: getComputedStyle(el).animationName,
        stats: r.stats(),
      };
    });
    assert.equal(result.animations, 1);
    assert.equal(result.opacity, '1');
    assert.equal(result.stats.keyframes, 1);
    return result;
  });
  await scenario('动画 raw 名称和资源对象产生相同 CSS 时合并依赖而不重插规则', async (page) => {
    const result = await page.evaluate(() => {
      const r = window.z.createRuntime({ namespace: 'dependency-merge' });
      const animation = window.z.keyframes((k) => k.from((s) => s.opacity.raw(0)));
      const name = r.keyframes(animation);
      const first = r.css((s) => s.animationName.raw(name));
      const before = [...document.querySelectorAll('style[data-zerodep="dependency-merge"]')];
      const second = r.css((s) => s.animationName.raw(animation));
      const after = [...document.querySelectorAll('style[data-zerodep="dependency-merge"]')];
      return {
        first,
        second,
        same: before.length === after.length && before.every((n, i) => n === after[i]),
        deps: r.snapshot().records.find((x) => x.kind === 'class').dependencies,
        name,
      };
    });
    assert.equal(result.first, result.second);
    assert(result.same);
    assert.deepEqual(result.deps, [result.name]);
    return result;
  });
  await scenario('全局固定槽位更新、释放和同内容独立挂载', async (page) => {
    const result = await page.evaluate(() => {
      const r = window.z.createRuntime({ namespace: 'global' });
      const red = (g) => g.rule('body', (s) => s.color.red);
      const a = r.mountGlobal(red),
        b = r.mountGlobal((g) => g.rule('body', (s) => s.color.blue)),
        c = r.mountGlobal(red);
      const colors = [getComputedStyle(document.body).color];
      a.update((g) => g.rule('body', (s) => s.color.green));
      colors.push(getComputedStyle(document.body).color);
      c.dispose();
      colors.push(getComputedStyle(document.body).color);
      b.dispose();
      colors.push(getComputedStyle(document.body).color);
      const ids = [...document.querySelectorAll('style[data-zerodep="global"]')].map(
        (n) => n.dataset.zerodepId,
      );
      r.dispose();
      return {
        colors,
        ids,
        remaining: document.querySelectorAll('style[data-zerodep="global"]').length,
      };
    });
    assert.deepEqual(result.colors, [
      'rgb(255, 0, 0)',
      'rgb(255, 0, 0)',
      'rgb(0, 0, 255)',
      'rgb(0, 128, 0)',
    ]);
    assert.equal(result.remaining, 0);
    return result;
  });
  await scenario('CSSOM 插入失败事务回滚后可重试', async (page) => {
    const result = await page.evaluate(() => {
      const { createRuntime, keyframes } = window.z;
      const r = createRuntime({ namespace: 'rollback' });
      const fade = keyframes((k) => k.from((s) => s.opacity.raw(0)));
      const factory = (s) => {
        s.animationName.raw(fade);
        s.color.red;
      };
      const original = CSSStyleSheet.prototype.insertRule;
      let failed = false;
      CSSStyleSheet.prototype.insertRule = function (rule, index) {
        if (rule.startsWith('.rollback-'))
          throw new DOMException('Injected failure', 'SyntaxError');
        return original.call(this, rule, index);
      };
      try {
        r.css(factory);
      } catch {
        failed = true;
      } finally {
        CSSStyleSheet.prototype.insertRule = original;
      }
      const afterFailure = {
        records: r.stats().records,
        nodes: document.querySelectorAll('style[data-zerodep="rollback"]').length,
      };
      const name = r.css(factory);
      const global = r.mountGlobal((g) => g.rule('body', (s) => s.color.blue));
      CSSStyleSheet.prototype.insertRule = function (rule, index) {
        if (rule.startsWith('body'))
          throw new DOMException('Injected update failure', 'SyntaxError');
        return original.call(this, rule, index);
      };
      try {
        global.update((g) => g.rule('body', (s) => s.color.red));
      } catch {
      } finally {
        CSSStyleSheet.prototype.insertRule = original;
      }
      return {
        failed,
        afterFailure,
        name,
        color: getComputedStyle(document.body).color,
        records: r.stats().records,
      };
    });
    assert(result.failed);
    assert.deepEqual(result.afterFailure, { records: 0, nodes: 0 });
    assert.equal(result.color, 'rgb(0, 0, 255)');
    assert.equal(result.records, 3);
    return result;
  });
  await scenario('缓存命中不会掩盖被宿主移除的样式', async (page) => {
    const result = await page.evaluate(() => {
      const r = window.z.createRuntime({ namespace: 'removed' });
      const f = (s) => s.color.red;
      r.css(f);
      document.querySelector('style[data-zerodep="removed"]').remove();
      let failed = false;
      try {
        r.css(f);
      } catch {
        failed = true;
      }
      r.dispose();
      const next = window.z.createRuntime({ namespace: 'removed' });
      const name = next.css(f);
      return { failed, name };
    });
    assert(result.failed);
    return result;
  });
  await scenario('ShadowRoot 隔离与插入位置', async (page) => {
    const result = await page.evaluate(() => {
      const host = document.createElement('div');
      document.body.append(host);
      const shadow = host.attachShadow({ mode: 'open' });
      const marker = document.createElement('span');
      shadow.append(marker);
      const r = window.z.createRuntime({
        target: shadow,
        namespace: 'shadow',
        insertionPoint: marker,
      });
      const name = r.css((s) => s.color.red);
      const inner = document.createElement('div');
      inner.className = name;
      shadow.append(inner);
      const outside = document.createElement('div');
      outside.className = name;
      document.body.append(outside);
      const before = Boolean(
        shadow.querySelector('style').compareDocumentPosition(marker) &
        Node.DOCUMENT_POSITION_FOLLOWING,
      );
      return {
        inside: getComputedStyle(inner).color,
        outside: getComputedStyle(outside).color,
        before,
      };
    });
    assert.equal(result.inside, 'rgb(255, 0, 0)');
    assert.notEqual(result.outside, 'rgb(255, 0, 0)');
    assert(result.before);
    return result;
  });
  await scenario('字体加载、计数器和分页规则被浏览器接受', async (page) => {
    const result = await page.evaluate(async () => {
      const r = window.z.createRuntime({ namespace: 'assets' });
      r.mountGlobal((g) => {
        g.fontFace((d) => {
          d.fontFamily.raw('RuntimeFont');
          // Windows 与 Playwright Linux runner 的本机字体不同；不依赖外部字体网络。
          d.src.raw('local("Arial"),local("Liberation Sans"),local("DejaVu Sans")');
        });
        g.counterStyle('runtime-steps', (d) => {
          d.system.cyclic;
          d.symbols.raw('"①" "②"');
        });
        g.page(':first', (p) => p.margin.cm(1));
      });
      const node = document.createElement('div');
      node.textContent = 'Font';
      node.className = r.css((s) => {
        s.fontFamily.raw('RuntimeFont');
        s.fontSize.px(16);
      });
      document.body.append(node);
      const loaded = await document.fonts.load('16px RuntimeFont');
      const rules = [...document.querySelectorAll('style[data-zerodep="assets"]')].flatMap((n) =>
        [...n.sheet.cssRules].map((r) => r.constructor.name),
      );
      return { loaded: loaded.length, font: getComputedStyle(node).fontFamily, rules };
    });
    assert.equal(result.loaded, 1);
    assert(result.font.includes('RuntimeFont'));
    for (const name of ['CSSFontFaceRule', 'CSSCounterStyleRule', 'CSSPageRule'])
      assert(result.rules.includes(name), name);
    return result;
  });
  await scenario('跨 runtime 的 @property 名称冲突与释放', async (page) => {
    const result = await page.evaluate(() => {
      const one = window.z.createRuntime({ namespace: 'one' }),
        two = window.z.createRuntime({ namespace: 'two' });
      const property = (syntax, value) => (g) =>
        g.property('--registered', (d) => {
          d.syntax.raw(JSON.stringify(syntax));
          d.inherits.false;
          d.initialValue.raw(value);
        });
      const a = one.mountGlobal(property('<number>', 1));
      let conflict = false;
      try {
        two.mountGlobal(property('<length>', '2px'));
      } catch {
        conflict = true;
      }
      const empty = two.stats().records;
      a.dispose();
      two.mountGlobal(property('<length>', '2px'));
      const el = document.createElement('div');
      document.body.append(el);
      return {
        conflict,
        empty,
        initial: getComputedStyle(el).getPropertyValue('--registered').trim(),
      };
    });
    assert(result.conflict);
    assert.equal(result.empty, 0);
    assert.equal(result.initial, '2px');
    return result;
  });
  await scenario('浏览器不支持的根规则不能缓存为成功，SSR 恢复也检查 CSSOM', async (page) => {
    const result = await page.evaluate(() => {
      const r = window.z.createRuntime({ namespace: 'unsupported' });
      let insertionFailed = false;
      try {
        r.mountGlobal((g) => g.rawRule('@zerodep-unsupported x{body{color:red}}'));
      } catch {
        insertionFailed = true;
      }
      const count = r.stats().records;
      r.mountGlobal((g) => g.rule('body', (s) => s.color.blue));
      const server = window.z.createRuntime({ target: null, namespace: 'unsupported-ssr' });
      server.mountGlobal((g) => g.rawRule('@zerodep-unsupported x{body{color:red}}'));
      document.head.insertAdjacentHTML('beforeend', server.renderStyles());
      let hydrationFailed = false;
      try {
        window.z.createRuntime({ namespace: 'unsupported-ssr', hydrate: server.snapshot() });
      } catch {
        hydrationFailed = true;
      }
      return {
        insertionFailed,
        count,
        hydrationFailed,
        color: getComputedStyle(document.body).color,
      };
    });
    assert(result.insertionFailed);
    assert.equal(result.count, 0);
    assert(result.hydrationFailed);
    assert.equal(result.color, 'rgb(0, 0, 255)');
    return result;
  });
  await scenario(
    'CSP nonce 成功、无 nonce 失败且不污染缓存',
    async (page) => {
      const result = await page.evaluate(() => {
        const allowed = window.z.createRuntime({ namespace: 'allowed', nonce: 'dGVzdA==' });
        const el = document.createElement('div');
        el.className = allowed.css((s) => s.color.red);
        document.body.append(el);
        const blocked = window.z.createRuntime({ namespace: 'blocked' });
        let failed = false;
        try {
          blocked.css((s) => s.color.blue);
        } catch {
          failed = true;
        }
        return { color: getComputedStyle(el).color, failed, records: blocked.stats().records };
      });
      assert.equal(result.color, 'rgb(255, 0, 0)');
      assert(result.failed);
      assert.equal(result.records, 0);
      return result;
    },
    '/csp',
  );
  await scenario(
    'SSR 首屏、HTML 转义、恢复不重复插入并认领全局槽位',
    async (page) => {
      const initial = await page.evaluate(() => ({
        color: getComputedStyle(document.querySelector('#ssr-box')).color,
        padding: getComputedStyle(document.querySelector('#ssr-box')).padding,
        content: getComputedStyle(document.querySelector('#hostile'), '::before').content,
        injected: window.__injected ?? null,
      }));
      assert.equal(initial.color, 'rgb(0, 0, 255)');
      assert.equal(initial.padding, '8px 16px');
      assert.equal(initial.injected, null);
      assert(initial.content.includes('</StYlE>'));
      const result = await page.evaluate(({ globalIds }) => {
        const before = [...document.querySelectorAll('style[data-zerodep="ssr"]')];
        const manifest = JSON.parse(document.querySelector('#manifest').textContent);
        const r = window.z.createRuntime({
          namespace: 'ssr',
          layers: ['base', 'components'],
          layer: 'components',
          hydrate: manifest,
        });
        const fade = window.z.keyframes((k) => {
          k.from((s) => s.opacity.raw(0));
          k.to((s) => s.opacity.raw(1));
        });
        const name = r.css((s) => {
          s.padding.px(8, 16);
          s.animationName.raw(fade);
          s.animationDuration.ms(1);
          s.color.blue;
        });
        const after = [...document.querySelectorAll('style[data-zerodep="ssr"]')];
        const sameNodes = before.length === after.length && before.every((n, i) => n === after[i]);
        r.claimGlobal(globalIds[0]).update((g) => g.rule('body', (s) => s.color.green));
        r.claimGlobal(globalIds[2]).dispose();
        return {
          name,
          sameNodes,
          bodyColor: getComputedStyle(document.body).color,
          nonce: r.renderStyles().includes('nonce="c2VydmVy"'),
        };
      }, ssr);
      assert.equal(result.name, ssr.className);
      assert(result.sameNodes);
      assert.equal(result.bodyColor, 'rgb(0, 0, 255)');
      assert(result.nonce);
      return { initial, ...result };
    },
    '/ssr',
  );
  await scenario(
    '失败的 hydration 保留 SSR DOM，随后正确恢复',
    async (page) => {
      const result = await page.evaluate(() => {
        const manifest = JSON.parse(document.querySelector('#manifest').textContent);
        const nodes = [...document.querySelectorAll('style')];
        const bad = structuredClone(manifest);
        bad.records.find((r) => r.kind === 'global').body = 'body{color:black}';
        let failed = false;
        try {
          window.z.createRuntime({
            namespace: 'ssr',
            layers: ['base', 'components'],
            layer: 'components',
            hydrate: bad,
          });
        } catch {
          failed = true;
        }
        const preserved = nodes.every((n) => n.isConnected);
        const runtime = window.z.createRuntime({
          namespace: 'ssr',
          layers: ['base', 'components'],
          layer: 'components',
          hydrate: manifest,
        });
        return { failed, preserved, records: runtime.stats().records };
      });
      assert(result.failed);
      assert(result.preserved);
      return result;
    },
    '/ssr',
  );
  return results;
}
