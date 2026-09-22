import assert from 'node:assert/strict';
import test from 'node:test';
import { Css, createRuntime } from '../../dist/index.js';

class AppCss extends Css {
  #space = 8;
  get brandColor() {
    return 'red';
  }
  get color() {
    return this.extendProperty(super.color, { brand: this.brandColor });
  }
  control(size) {
    switch (size) {
      case 'small':
        this.padding.px(this.#space / 2);
        break;
      default:
        this.padding.px(this.#space);
    }
    this.color.brand;
  }
}
class DarkCss extends AppCss {
  get brandColor() {
    return 'blue';
  }
}

test('Css 使用真实继承、super、私有字段和属性关键字扩展', () => {
  const runtime = createRuntime({ target: null });
  try {
    const a = runtime.css((s) => {
      assert(s instanceof AppCss);
      s.control('small');
      s.hover((h) => {
        assert(h instanceof AppCss);
        h.color.brand;
      });
    }, AppCss);
    const b = runtime.css((s) => s.control('small'), DarkCss);
    const records = runtime.snapshot().records;
    assert.match(records.find((r) => r.id === a).body, /padding:4px;color:red/);
    assert.match(records.find((r) => r.id === b).body, /padding:4px;color:blue/);
    assert.notEqual(a, b);
  } finally {
    runtime.dispose();
  }
});

test('继承成员同样受构建生命周期约束，实例不会在调用间共享', () => {
  const runtime = createRuntime({ target: null });
  let first, second;
  try {
    const a = runtime.css((s) => {
      first = s;
      s.control('small');
    }, AppCss);
    const b = runtime.css((s) => {
      second = s;
      s.control('small');
    }, AppCss);
    assert.equal(a, b);
    assert.notEqual(first, second);
    assert.throws(() => first.control('small'), /synchronous callback/);
    assert.throws(() => new Css(), /style runtime/);
    assert.throws(() => runtime.css(() => {}, class {}), /extend Css/);
    class InvalidCss extends Css {
      get color() {
        return this.extendProperty(super.color, { raw: 'red' });
      }
    }
    assert.throws(() => runtime.css((s) => s.color.raw('blue'), InvalidCss), /cannot replace/);
  } finally {
    runtime.dispose();
  }
});

test('常用状态与 pseudo 等价，派生类型进入全局规则且不污染相邻规则', () => {
  const runtime = createRuntime({ target: null });
  let captured;
  try {
    for (const [method, pseudo] of [
      ['focus', ':focus'],
      ['focusWithin', ':focus-within'],
      ['active', ':active'],
      ['disabled', ':disabled'],
    ]) {
      const direct = runtime.css((s) => s[method]((h) => h.control('small')), AppCss);
      assert.equal(
        direct,
        runtime.css((s) => s.pseudo(pseudo, (h) => h.control('small')), AppCss),
      );
    }
    const handle = runtime.mountGlobal((g) => {
      g.rule(
        'button',
        (s) => {
          captured = s;
          s.control('small');
          s.focus((h) => {
            assert(h instanceof AppCss);
            h.color.brand;
          });
        },
        AppCss,
      );
      assert.throws(() => captured.control('small'), /synchronous callback/);
      g.media('print', (m) => m.rule('a', (s) => s.control('large'), DarkCss));
      g.rule('input', (s) => {
        assert.equal(s.constructor, Css);
        s.color.green;
      });
    });
    const body = runtime.snapshot().records.find((r) => r.id === handle.id).body;
    assert.match(body, /button\{padding:4px;color:red;&:focus\{color:red\}\}/);
    assert.match(body, /@media print\{a\{padding:8px;color:blue\}\}/);
    handle.update((g) => g.rule('button', (s) => s.disabled((h) => h.control('large')), AppCss));
    assert.match(runtime.renderStyles(), /button\{&:disabled\{padding:8px;color:red\}\}/);
    handle.dispose();
  } finally {
    runtime.dispose();
  }
});
