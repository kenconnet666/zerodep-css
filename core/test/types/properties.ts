import {
  css,
  createRuntime,
  keyframes,
  globalCss,
  cssVar,
  type StyleBuilder,
} from '../../src/index.js';

// 仅由 tsc 检查，不执行这些包含宏/预期错误的类型用例。
export function typeContract(width: number, visible: boolean) {
  const runtime = createRuntime({ target: null });
  const className: string = runtime.css((s) => {
    s.width.px(width);
  });
  const frames = keyframes((k) =>
    k.from((s) => {
      s.opacity.raw(0);
    }),
  );
  const animationClass: string = runtime.css((s) => {
    s.animationName.raw([frames]);
  });
  void className;
  void animationClass;
  css((s) => {
    s.display.token(visible ? 'flex' : 'none');
    s.width.px(width);
    s.width.raw('25%');
    s.display.raw('any-future-string');
    s.width.raw('some-new-css-function(100%)');
    s.flexShrink.raw(0);
    s.padding.px(8, 16);
    s.animationDuration.ms(100, 200);
    s.opacity.pct(50);
    s.color.raw(cssVar('--text'));
    s.width.px(width);
    s.color.raw('red');
    s.container.raw('card / inline-size');
    s.containerQuery('card (width > 20rem)', (n) => {
      n.display.grid;
    });
    s.pseudo('::selection', (n) => {
      n.color.red;
    });
    s.pseudoFunction(':has', '> img', (n) => {
      n.display.grid;
    });
    // @ts-expect-error 拼错的属性
    s.dispaly;
    // @ts-expect-error token 不允许任意字符串
    s.display.token('banana');
    // @ts-expect-error 属性对象不可调用
    s.width('50%');
    // @ts-expect-error 百分比值走 raw 或 pct，不是 token 关键字
    s.width.token('50%');
    // @ts-expect-error color 的 raw 不接受数值
    s.color.raw(123);
    // @ts-expect-error 属性对象没有函数 prototype
    s.width.prototype;
    // @ts-expect-error 错误的关键字
    s.display.banana;
    // @ts-expect-error 边框线宽不接受百分比
    s.outlineWidth.pct(10);
    // @ts-expect-error 时间属性不接受长度
    s.animationDuration.px(10);
    // @ts-expect-error 数值方法不接受带单位字符串
    s.width.px('10px');
    // @ts-expect-error 简写个数错误
    s.padding.px(1, 2, 3, 4, 5);
    // @ts-expect-error 单位方法不允许 undefined，避免不完整的列表
    s.padding.px(undefined);
    // @ts-expect-error 必需的 font-family 等部分不能因包含 length 而消失
    s.font.px(12);
    // @ts-expect-error 未知伪类
    s.pseudo(':made-up', () => {});
  });
  keyframes((k) => {
    k.from((s) => {
      s.opacity.raw(0);
      // @ts-expect-error 帧内无普通选择器
      s.hover(() => {});
      // @ts-expect-error 帧内不接受 important 块
      s.important(() => {});
    });
    k.at([50, 'entry 100%'], (s) => {
      s.opacity.raw(1);
    });
  });
  globalCss((g) => {
    g.fontFace((d) => {
      d.fontFamily.raw('Demo');
      d.src.raw('url(demo.woff2)');
      d.fontDisplay.swap;
      // @ts-expect-error font-face 是描述符，不是普通属性集合
      d.color.red;
      // @ts-expect-error 描述符不提供普通选择器
      d.hover(() => {});
    });
    g.page(':first', (p) => {
      p.margin.cm(1);
      p.size.A4;
    });
    g.property('--progress', (d) => {
      d.syntax.raw('"<number>"');
      d.inherits.false;
      d.initialValue.raw(0);
    });
    // @ts-expect-error media 描述的是查询特征，不是声明描述符块
    g.descriptors('@media', '', () => {});
    g.media('print', (n) => {
      // @ts-expect-error 条件组不是根级前导语句上下文
      n.statement('@import', 'url(x)');
    });
  });
}
export function reusable(s: StyleBuilder) {
  s.display.flex;
  s.alignItems.center;
}
