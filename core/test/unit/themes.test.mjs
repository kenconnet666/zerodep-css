import assert from 'node:assert/strict';
import test from 'node:test';
import { Css, createRuntime } from '../../dist/index.js';
import { ThemeCss, lightTheme, darkTheme } from '../../dist/themes.js';
import { parse, walk, generate } from 'css-tree';

// 独立按 WCAG 2.2 相对亮度计算；不使用产品代码或四舍五入来判断阈值。
// https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
function luminance(hex) {
  assert.match(hex, /^#[0-9a-f]{6}$/i);
  const rgb = [1, 3, 5]
    .map((index) => parseInt(hex.slice(index, index + 2), 16) / 255)
    .map((value) => (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
function contrast(a, b) {
  const first = luminance(a),
    second = luminance(b);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}
test('亮暗预设的文字、强调前景和焦点/边框达到约定对比度', () => {
  assert.equal(contrast('#ffffff', '#000000'), 21);
  for (const theme of [lightTheme, darkTheme]) {
    const color = theme.defaults.color;
    for (const background of ['canvas', 'surface', 'surfaceRaised']) {
      for (const text of ['text', 'textMuted', 'textDisabled'])
        assert(
          contrast(color[text], color[background]) >= 4.5,
          `${theme.defaults.colorScheme}: ${text}/${background}`,
        );
      for (const edge of ['border', 'focusRing'])
        assert(contrast(color[edge], color[background]) >= 3, `${edge}/${background}`);
    }
    for (const [background, text] of [
      ['primary', 'onPrimary'],
      ['secondary', 'onSecondary'],
      ['accent', 'onAccent'],
      ['success', 'onSuccess'],
      ['warning', 'onWarning'],
      ['danger', 'onDanger'],
      ['info', 'onInfo'],
    ])
      assert(
        contrast(color[text], color[background]) >= 4.5,
        `${theme.defaults.colorScheme}: ${text}/${background}`,
      );
  }
});

test('暗色继承完整 schema 与变量身份，自定义覆盖不修改两套系统预设', () => {
  assert.equal(lightTheme.schema, darkTheme.schema);
  const compare = (a, b) => {
    for (const key of Object.keys(a)) {
      if ('name' in a[key]) assert.equal(a[key].name, b[key].name);
      else compare(a[key], b[key]);
    }
  };
  compare(lightTheme.tokens, darkTheme.tokens);
  const custom = darkTheme.extend({ color: { primary: '#ff0000' } });
  assert.equal(custom.tokens.color.primary.name, lightTheme.tokens.color.primary.name);
  assert.equal(custom.defaults.color.primary, '#ff0000');
  assert.equal(darkTheme.defaults.color.primary, '#93c5fd');
  assert.equal(lightTheme.defaults.color.primary, '#2563eb');
  assert.throws(() => {
    lightTheme.defaults.color.primary = '#000000';
  });
});

test('可选作者类不污染 Css，所有公开 token getter 均无关键字或单位冲突', () => {
  const runtime = createRuntime({ target: null });
  try {
    const factory = (s) => {
      s.color.text;
      s.backgroundColor.surface;
      s.borderColor.border;
      s.outlineColor.focusRing;
      s.fill.primary;
      s.stroke.accent;
      s.padding.md;
      s.margin.zero;
      s.gap.sm;
      s.borderRadius.lg;
      s.fontFamily.body;
      s.fontSize.md;
      s.transitionDuration.fast;
      s.boxShadow.md;
      s.colorScheme.theme;
    };
    const content = runtime.css(factory, ThemeCss);
    assert.throws(
      () =>
        runtime.css((s) => {
          s.color.primary;
        }, Css),
      /Unknown/,
    );
    const light = lightTheme.className(runtime),
      dark = darkTheme.className(runtime);
    assert.notEqual(light, dark);
    assert.equal(runtime.css(factory, ThemeCss), content);
    assert.equal(runtime.stats().classes, 3);
    assert(runtime.renderStyles().includes('color-scheme:var('));
  } finally {
    runtime.dispose();
  }
});

test('所有便利成员写入正确 CSS 属性和语义变量，不因 getter 复制而串位', () => {
  const properties = [
    ['color', 'color', 'color'],
    ['backgroundColor', 'background-color', 'color'],
    ['borderColor', 'border-color', 'color'],
    ['outlineColor', 'outline-color', 'color'],
    ['fill', 'fill', 'color'],
    ['stroke', 'stroke', 'color'],
    ['padding', 'padding', 'space'],
    ['margin', 'margin', 'space'],
    ['gap', 'gap', 'space'],
    ['borderRadius', 'border-radius', 'radius'],
    ['fontFamily', 'font-family', 'fontFamily'],
    ['fontSize', 'font-size', 'fontSize'],
    ['transitionDuration', 'transition-duration', 'duration'],
    ['boxShadow', 'box-shadow', 'shadow'],
    ['colorScheme', 'color-scheme', null],
  ];
  const runtime = createRuntime({ target: null });
  try {
    for (const [member, property, group] of properties) {
      const tokens = group ? lightTheme.tokens[group] : { theme: lightTheme.tokens.colorScheme };
      for (const [keyword, token] of Object.entries(tokens)) {
        const id = runtime.css((s) => {
          s[member][keyword];
        }, ThemeCss);
        const declarations = [];
        walk(
          parse(runtime.snapshot().records.find((record) => record.id === id).body, {
            context: 'declarationList',
            parseCustomProperty: true,
          }),
          (node) => {
            if (node.type === 'Declaration') declarations.push(node);
          },
        );
        assert.deepEqual(
          declarations.map((node) => node.property),
          [property],
          member + '.' + keyword,
        );
        assert(
          generate(declarations[0].value).startsWith(`var(${token.name},`),
          member + '.' + keyword,
        );
      }
    }
  } finally {
    runtime.dispose();
  }
});
