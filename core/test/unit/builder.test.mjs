import assert from 'node:assert/strict';
import { test } from 'node:test';
import { keyframes, globalCss, cssVar, ibind } from '../../dist/index.js';
import { buildStyleProgram } from '../../dist/builder.js';
import {
  propertyMetadata,
  keywordGroups,
  helperGroups,
  descriptorMetadata,
} from '../../dist/generated/metadata.js';

test('保留 fallback、简写和长属性的书写顺序', () => {
  const p = buildStyleProgram((s) => {
    s.height.vh(100);
    s.height.dvh(100);
    s.marginLeft.px(4);
    s.margin.px(8);
    s.marginLeft.px(12);
  });
  assert.deepEqual(
    p.map((n) => [n.property, n.value.value]),
    [
      ['height', '100vh'],
      ['height', '100dvh'],
      ['margin-left', '4px'],
      ['margin', '8px'],
      ['margin-left', '12px'],
    ],
  );
  assert(p.every((n) => Object.isFrozen(n) && Object.isFrozen(n.value)));
  assert(Object.isFrozen(p));
});
test('普通控制流每次重新执行，构建器没有共享状态', () => {
  let open = false;
  const factory = (s) => {
    s.display.token(open ? 'flex' : 'none');
    if (open) s.gap.px(8);
  };
  assert.equal(buildStyleProgram(factory).length, 1);
  open = true;
  assert.equal(buildStyleProgram(factory).length, 2);
  assert.equal(
    buildStyleProgram((s) => {
      s.opacity.raw(1);
    }).length,
    1,
  );
});
test('生成单位方法区分维度、分隔符、范围和参数个数', () => {
  const p = buildStyleProgram((s) => {
    s.padding.px(1, 2, 3, 4);
    s.animationDuration.ms(100, 200);
    s.opacity.pct(50);
    s.rotate.deg(90);
    s.zIndex.raw(2);
  });
  assert.deepEqual(
    p.map((n) => n.value.value),
    ['1px 2px 3px 4px', '100ms, 200ms', '50%', '90deg', 2],
  );
  for (const callback of [
    (s) => s.outlineWidth.pct(10),
    (s) => s.width.ms(2),
    (s) => s.padding.px(1, 2, 3, 4, 5),
    (s) => s.padding.px(-1),
    (s) => s.animationDuration.ms(-1),
    (s) => s.zIndex.raw(1.5),
    (s) => s.width.px(Infinity),
    (s) => s.width.px('2'),
  ])
    assert.throws(() => buildStyleProgram(callback), TypeError);
});
test('严格调用与显式 raw/自定义属性分离', () => {
  assert.throws(
    () =>
      buildStyleProgram((s) => {
        s.display.token('banana');
      }),
    /Unknown CSS token/,
  );
  assert.throws(
    () =>
      buildStyleProgram((s) => {
        s.font.px(12);
      }),
    /Unknown/,
  );
  const p = buildStyleProgram((s) => {
    s.width.raw('50%');
    s.width.raw(0);
    s.transform.raw('translate(1px, 2px)');
    s.custom.raw('--distance', '4px');
    s.property.raw('future-property', 'value');
  });
  assert.equal(p[0].value.value, '50%');
  assert.equal(p[2].value.kind, 'raw');
  assert.equal(p[4].property, 'future-property');
  assert.throws(() => buildStyleProgram((s) => s.display.raw({})), TypeError);
});
test('选择器、嵌套条件和交错声明不重排', () => {
  const p = buildStyleProgram((s) => {
    s.color.red;
    s.hover((h) => {
      h.color.blue;
    });
    s.color.green;
    s.media('(width > 40rem)', (m) => {
      m.containerQuery('card (width > 20rem)', (c) => {
        c.display.grid;
      });
    });
  });
  assert.deepEqual(
    p.map((n) => n.kind),
    ['declaration', 'style-rule', 'declaration', 'style-group'],
  );
  assert.equal(p[1].selector, '&:hover');
  assert.equal(p[3].children[0].name, '@container');
  assert.throws(() => buildStyleProgram((s) => s.selector('.external', () => {})), /contain &/);
  const c = buildStyleProgram((s) => {
    s.container.raw('card / inline-size');
  });
  assert.equal(c[0].property, 'container');
});
test('伪选择器目录完整提供，未知名称拒绝', () => {
  const p = buildStyleProgram((s) => {
    s.pseudo('::selection', (n) => {
      n.color.red;
    });
    s.pseudoFunction(':has', '> img', (n) => {
      n.display.grid;
    });
    s.before((n) => {
      n.content.raw('"a&b;c:d"');
    });
  });
  assert.equal(p[1].selector, '&:has(> img)');
  assert.equal(p[2].children[0].value.value, '"a&b;c:d"');
  assert.throws(() => buildStyleProgram((s) => s.pseudo(':not-real', () => {})), /Unknown/);
});
test('important 传播到对应声明但不能进入帧上下文', () => {
  const p = buildStyleProgram((s) => {
    s.important((i) => {
      i.color.red;
      i.hover((h) => {
        h.color.blue;
      });
    });
    s.color.green;
  });
  assert(p[0].important);
  assert(p[1].children[0].important);
  assert.equal(p[2].important, false);
  assert.throws(() => keyframes((k) => k.from((s) => s.important(() => {}))), /Unknown/);
});
test('帧保留重复偏移和声明，支持多偏移、时间线范围', () => {
  const k = keyframes((k) => {
    k.from((s) => {
      s.opacity.raw(0);
    });
    k.at(50, (s) => {
      s.opacity.raw(0.5);
    });
    k.at(50, (s) => {
      s.transform.raw('scale(1.1)');
    });
    k.at([75, 'entry 100%'], (s) => {
      s.opacity.raw(1);
    });
    k.to((s) => {
      s.opacity.raw(1);
    });
  });
  assert.deepEqual(
    k.frames.map((f) => f.offsets),
    [['from'], ['50%'], ['50%'], ['75%', 'entry 100%'], ['to']],
  );
  assert(Object.isFrozen(k.frames));
  assert.throws(() => keyframes((k) => k.at(101, () => {})), /between/);
  assert.throws(() => keyframes((k) => k.at([], () => {})), /offset/);
});
test('全局样式按上下文建立规则，不注入 DOM', () => {
  const g = globalCss((g) => {
    g.layerOrder('reset', 'base', 'components');
    g.statement('@import', 'url("base.css") layer(base)');
    g.layer('base', (b) =>
      b.rule('body', (s) => {
        s.margin.px(0);
      }),
    );
    g.fontFace((d) => {
      d.fontFamily.raw('Demo');
      d.src.raw('url(demo.woff2)');
      d.fontDisplay.swap;
    });
    g.property('--progress', (d) => {
      d.syntax.raw('"<number>"');
      d.inherits.false;
      d.initialValue.raw(0);
    });
    g.page(':first', (p) => {
      p.margin.cm(1);
      p.size.A4;
      p.marginBox('top-center', (s) => {
        s.content.raw('"Report"');
      });
    });
  });
  assert.equal(g.rules[3].name, '@font-face');
  assert.equal(g.rules[4].name, '@property');
  assert.equal(g.rules[5].children.at(-1).name, '@top-center');
  assert.throws(
    () =>
      globalCss((g) =>
        g.fontFace((d) => {
          d.color.red;
        }),
      ),
    /Unknown/,
  );
  assert.throws(() => globalCss((g) => g.descriptors('@media', '', () => {})), /context/);
});
test('全局条件没有根级前导入口，根级顺序被检查', () => {
  assert.throws(
    () =>
      globalCss((g) => {
        g.rule('body', () => {});
        g.statement('@import', 'url(x)');
      }),
    /preamble/,
  );
  assert.throws(
    () =>
      globalCss((g) => {
        g.statement('@namespace', 'svg url(x)');
        g.statement('@import', 'url(x)');
      }),
    /preamble/,
  );
  assert.throws(
    () => globalCss((g) => g.media('print', (m) => m.statement('@import', 'url(x)'))),
    TypeError,
  );
});
test('CSS 变量引用保持结构，ibind 尚未有编译接入时明确报错', () => {
  const v = cssVar('--tone', 'red');
  const p = buildStyleProgram((s) => {
    s.color.raw(v);
  });
  assert.deepEqual(p[0].value, { kind: 'variable', name: '--tone', fallback: 'red' });
  assert.equal(cssVar('--0').name, '--0');
  assert.equal(cssVar('--颜色').name, '--颜色');
  assert.throws(() => cssVar('tone'), TypeError);
  assert.throws(() => ibind(2), /compiler integration/);
});
test('属性是不可调用对象，不暴露函数成员', () => {
  const p = buildStyleProgram((s) => {
    assert.equal(typeof s.width, 'object');
    assert.throws(() => s.width('10px'), TypeError);
    assert.throws(() => s.width.call(undefined, '10px'), /Unknown/);
    assert.throws(() => s.width.prototype, /Unknown/);
    s.width.raw('10px');
    s.opacity.raw(0.5);
  });
  assert.deepEqual(
    p.map((n) => n.value.value),
    ['10px', 0.5],
  );
});
test('token 严格校验字面量，raw 不限制字符串枚举并保留数值约束', () => {
  const p = buildStyleProgram((s) => {
    s.display.token('flex');
    s.display.raw('future-display-value');
    s.width.raw('calc(100% - 2rem)');
    s.opacity.raw(0.5);
  });
  assert.deepEqual(
    p.map((n) => n.value.value),
    ['flex', 'future-display-value', 'calc(100% - 2rem)', 0.5],
  );
  assert.throws(() => buildStyleProgram((s) => s.width.token('50%')), /Unknown CSS token/);
  assert.throws(() => buildStyleProgram((s) => s.opacity.token(1)), /Unknown CSS token/);
  assert.throws(() => buildStyleProgram((s) => s.color.raw(1)), /numeric/);
});
test('回调必须同步，捕获的 Builder 在回调外失效', () => {
  let captured;
  buildStyleProgram((s) => {
    captured = s;
    s.opacity.raw(1);
  });
  assert.throws(() => captured.opacity.raw(0), /synchronous/);
  assert.throws(() => buildStyleProgram(() => 42), /return void/);
  assert.throws(
    () =>
      buildStyleProgram(async (s) => {
        s.opacity.raw(1);
      }),
    /async/,
  );
  assert.throws(
    () =>
      buildStyleProgram((s) => {
        throw new Error('user error');
      }),
    /user error/,
  );
  assert.equal(
    buildStyleProgram((s) => {
      s.opacity.raw(1);
    })[0].value.value,
    1,
  );
});
test('每个生成属性成员都被运行时识别，元数据组引用有效', () => {
  for (const [name, meta] of Object.entries(propertyMetadata)) {
    assert(keywordGroups[meta.keywords]);
    assert(helperGroups[meta.helpers]);
    const p = buildStyleProgram((s) => {
      s[name].inherit;
    });
    assert.equal(p[0].property, meta.cssName);
  }
  assert(!Object.hasOwn(descriptorMetadata, '@media'));
  assert(!Object.hasOwn(descriptorMetadata, '@container'));
});
