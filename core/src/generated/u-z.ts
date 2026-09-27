// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/**
 * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。（unicode-bidi）
 *
 * CSS 语法：`normal | embed | isolate | bidi-override | isolate-override | plaintext`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
 */
export class UnicodeBidiCss extends CssProperty {
  /** CSS 声明：`unicode-bidi:bidi-override;`。 */
  readonly bidiOverride = 'unicode-bidi:bidi-override;';
  /** CSS 声明：`unicode-bidi:embed;`。 */
  readonly embed = 'unicode-bidi:embed;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`unicode-bidi:inherit;`。
   */
  readonly inherit = 'unicode-bidi:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`unicode-bidi:initial;`。
   */
  readonly initial = 'unicode-bidi:initial;';
  /** CSS 声明：`unicode-bidi:isolate;`。 */
  readonly isolate = 'unicode-bidi:isolate;';
  /** CSS 声明：`unicode-bidi:isolate-override;`。 */
  readonly isolateOverride = 'unicode-bidi:isolate-override;';
  /** CSS 声明：`unicode-bidi:normal;`。 */
  readonly normal = 'unicode-bidi:normal;';
  /** CSS 声明：`unicode-bidi:plaintext;`。 */
  readonly plaintext = 'unicode-bidi:plaintext;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`unicode-bidi:revert;`。
   */
  readonly revert = 'unicode-bidi:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`unicode-bidi:revert-layer;`。
   */
  readonly revertLayer = 'unicode-bidi:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`unicode-bidi:unset;`。
   */
  readonly unset = 'unicode-bidi:unset;';
  /**
   * 创建 unicode-bidi 属性作者；普通使用通过 s.unicodeBidi 取得共享实例。
   * @example
   * class CustomUnicodeBidiCss extends UnicodeBidiCss {}
   */
  constructor() {
    super('unicode-bidi');
  }
  /**
   * 原样生成 unicode-bidi 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 unicode-bidi:value;。
   * @example
   * s.unicodeBidi.raw('inherit') // unicode-bidi:inherit;
   */
  raw(value: Property.UnicodeBidi | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置用户是否可以选取元素中的文本。（user-select）
 *
 * CSS 语法：`auto | text | none | all`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
 */
export class UserSelectCss extends CssProperty {
  /**
   * 将元素内容作为整体选取单元。
   *
   * CSS 声明：`user-select:all;`。
   */
  readonly all = 'user-select:all;';
  /**
   * 由父级与元素上下文决定使用的选取行为。
   *
   * CSS 声明：`user-select:auto;`。
   */
  readonly auto = 'user-select:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`user-select:inherit;`。
   */
  readonly inherit = 'user-select:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`user-select:initial;`。
   */
  readonly initial = 'user-select:initial;';
  /**
   * 阻止常规文本选取，不是内容保护或访问控制。
   *
   * CSS 声明：`user-select:none;`。
   */
  readonly none = 'user-select:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`user-select:revert;`。
   */
  readonly revert = 'user-select:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`user-select:revert-layer;`。
   */
  readonly revertLayer = 'user-select:revert-layer;';
  /**
   * 允许文本选取。
   *
   * CSS 声明：`user-select:text;`。
   */
  readonly text = 'user-select:text;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`user-select:unset;`。
   */
  readonly unset = 'user-select:unset;';
  /**
   * 创建 user-select 属性作者；普通使用通过 s.userSelect 取得共享实例。
   * @example
   * class CustomUserSelectCss extends UserSelectCss {}
   */
  constructor() {
    super('user-select');
  }
  /**
   * 原样生成 user-select 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 user-select:value;。
   * @example
   * s.userSelect.raw('inherit') // user-select:inherit;
   */
  raw(value: Property.UserSelect | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置 SVG 图形变换时对描边等矢量效果的处理。（vector-effect）
 *
 * CSS 语法：`none | non-scaling-stroke | non-scaling-size | non-rotation | fixed-position`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
 */
export class VectorEffectCss extends CssProperty {
  /** CSS 声明：`vector-effect:fixed-position;`。 */
  readonly fixedPosition = 'vector-effect:fixed-position;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`vector-effect:inherit;`。
   */
  readonly inherit = 'vector-effect:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`vector-effect:initial;`。
   */
  readonly initial = 'vector-effect:initial;';
  /** CSS 声明：`vector-effect:non-rotation;`。 */
  readonly nonRotation = 'vector-effect:non-rotation;';
  /** CSS 声明：`vector-effect:non-scaling-size;`。 */
  readonly nonScalingSize = 'vector-effect:non-scaling-size;';
  /** CSS 声明：`vector-effect:non-scaling-stroke;`。 */
  readonly nonScalingStroke = 'vector-effect:non-scaling-stroke;';
  /** CSS 声明：`vector-effect:none;`。 */
  readonly none = 'vector-effect:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`vector-effect:revert;`。
   */
  readonly revert = 'vector-effect:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`vector-effect:revert-layer;`。
   */
  readonly revertLayer = 'vector-effect:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`vector-effect:unset;`。
   */
  readonly unset = 'vector-effect:unset;';
  /**
   * 创建 vector-effect 属性作者；普通使用通过 s.vectorEffect 取得共享实例。
   * @example
   * class CustomVectorEffectCss extends VectorEffectCss {}
   */
  constructor() {
    super('vector-effect');
  }
  /**
   * 原样生成 vector-effect 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 vector-effect:value;。
   * @example
   * s.vectorEffect.raw('inherit') // vector-effect:inherit;
   */
  raw(value: Property.VectorEffect | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。（vertical-align）
 *
 * CSS 语法：`baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`。
 *
 * CSS 初始值：`baseline`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
 */
export class VerticalAlignCss extends LengthCssProperty {
  /** CSS 声明：`vertical-align:baseline;`。 */
  readonly baseline = 'vertical-align:baseline;';
  /** CSS 声明：`vertical-align:bottom;`。 */
  readonly bottom = 'vertical-align:bottom;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`vertical-align:inherit;`。
   */
  readonly inherit = 'vertical-align:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`vertical-align:initial;`。
   */
  readonly initial = 'vertical-align:initial;';
  /** CSS 声明：`vertical-align:middle;`。 */
  readonly middle = 'vertical-align:middle;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`vertical-align:revert;`。
   */
  readonly revert = 'vertical-align:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`vertical-align:revert-layer;`。
   */
  readonly revertLayer = 'vertical-align:revert-layer;';
  /** CSS 声明：`vertical-align:sub;`。 */
  readonly sub = 'vertical-align:sub;';
  /** CSS 声明：`vertical-align:super;`。 */
  readonly super = 'vertical-align:super;';
  /** CSS 声明：`vertical-align:text-bottom;`。 */
  readonly textBottom = 'vertical-align:text-bottom;';
  /** CSS 声明：`vertical-align:text-top;`。 */
  readonly textTop = 'vertical-align:text-top;';
  /** CSS 声明：`vertical-align:top;`。 */
  readonly top = 'vertical-align:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`vertical-align:unset;`。
   */
  readonly unset = 'vertical-align:unset;';
  /**
   * 创建 vertical-align 属性作者；普通使用通过 s.verticalAlign 取得共享实例。
   * @example
   * class CustomVerticalAlignCss extends VerticalAlignCss {}
   */
  constructor() {
    super('vertical-align');
  }
  /**
   * 原样生成 vertical-align 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 vertical-align:value;。
   * @example
   * s.verticalAlign.raw('inherit') // vertical-align:inherit;
   */
  raw(value: Property.VerticalAlign | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.verticalAlign.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.verticalAlign.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.verticalAlign.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.VerticalAlign | CssString,
    ...others: (Property.VerticalAlign | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.verticalAlign.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.VerticalAlign | CssString,
    ...others: (Property.VerticalAlign | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.verticalAlign.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.VerticalAlign | CssString,
    preferred: Property.VerticalAlign | CssString,
    maximum: Property.VerticalAlign | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 同时声明基于元素可见进度的时间线名称与轴。（view-timeline）
 *
 * CSS 语法：`[ <'view-timeline-name'> [ <'view-timeline-axis'> || <'view-timeline-inset'> ]? ]#`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
 */
export class ViewTimelineCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`view-timeline:inherit;`。
   */
  readonly inherit = 'view-timeline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`view-timeline:initial;`。
   */
  readonly initial = 'view-timeline:initial;';
  /** CSS 声明：`view-timeline:none;`。 */
  readonly none = 'view-timeline:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`view-timeline:revert;`。
   */
  readonly revert = 'view-timeline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`view-timeline:revert-layer;`。
   */
  readonly revertLayer = 'view-timeline:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`view-timeline:unset;`。
   */
  readonly unset = 'view-timeline:unset;';
  /**
   * 创建 view-timeline 属性作者；普通使用通过 s.viewTimeline 取得共享实例。
   * @example
   * class CustomViewTimelineCss extends ViewTimelineCss {}
   */
  constructor() {
    super('view-timeline');
  }
  /**
   * 原样生成 view-timeline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 view-timeline:value;。
   * @example
   * s.viewTimeline.raw('inherit') // view-timeline:inherit;
   */
  raw(value: Property.ViewTimeline | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置可见进度时间线所观察的滚动轴。（view-timeline-axis）
 *
 * CSS 语法：`[ block | inline | x | y ]#`。
 *
 * CSS 初始值：`block`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
 */
export class ViewTimelineAxisCss extends CssProperty {
  /** CSS 声明：`view-timeline-axis:block;`。 */
  readonly block = 'view-timeline-axis:block;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`view-timeline-axis:inherit;`。
   */
  readonly inherit = 'view-timeline-axis:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`view-timeline-axis:initial;`。
   */
  readonly initial = 'view-timeline-axis:initial;';
  /** CSS 声明：`view-timeline-axis:inline;`。 */
  readonly inline = 'view-timeline-axis:inline;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`view-timeline-axis:revert;`。
   */
  readonly revert = 'view-timeline-axis:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`view-timeline-axis:revert-layer;`。
   */
  readonly revertLayer = 'view-timeline-axis:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`view-timeline-axis:unset;`。
   */
  readonly unset = 'view-timeline-axis:unset;';
  /** CSS 声明：`view-timeline-axis:x;`。 */
  readonly x = 'view-timeline-axis:x;';
  /** CSS 声明：`view-timeline-axis:y;`。 */
  readonly y = 'view-timeline-axis:y;';
  /**
   * 创建 view-timeline-axis 属性作者；普通使用通过 s.viewTimelineAxis 取得共享实例。
   * @example
   * class CustomViewTimelineAxisCss extends ViewTimelineAxisCss {}
   */
  constructor() {
    super('view-timeline-axis');
  }
  /**
   * 原样生成 view-timeline-axis 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 view-timeline-axis:value;。
   * @example
   * s.viewTimelineAxis.raw('inherit') // view-timeline-axis:inherit;
   */
  raw(value: Property.ViewTimelineAxis | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置可见进度时间线使用的滚动视口内缩范围。（view-timeline-inset）
 *
 * CSS 语法：`[ [ auto | <length-percentage> ]{1,2} ]#`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
 */
export class ViewTimelineInsetCss extends LengthCssProperty {
  /** CSS 声明：`view-timeline-inset:auto;`。 */
  readonly auto = 'view-timeline-inset:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`view-timeline-inset:inherit;`。
   */
  readonly inherit = 'view-timeline-inset:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`view-timeline-inset:initial;`。
   */
  readonly initial = 'view-timeline-inset:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`view-timeline-inset:revert;`。
   */
  readonly revert = 'view-timeline-inset:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`view-timeline-inset:revert-layer;`。
   */
  readonly revertLayer = 'view-timeline-inset:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`view-timeline-inset:unset;`。
   */
  readonly unset = 'view-timeline-inset:unset;';
  /**
   * 创建 view-timeline-inset 属性作者；普通使用通过 s.viewTimelineInset 取得共享实例。
   * @example
   * class CustomViewTimelineInsetCss extends ViewTimelineInsetCss {}
   */
  constructor() {
    super('view-timeline-inset');
  }
  /**
   * 原样生成 view-timeline-inset 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 view-timeline-inset:value;。
   * @example
   * s.viewTimelineInset.raw('inherit') // view-timeline-inset:inherit;
   */
  raw(value: Property.ViewTimelineInset | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.px(1)
   */
  px(value1: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 px。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.px(1, 2)
   */
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cm(1)
   */
  cm(value1: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cm。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cm(1, 2)
   */
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.mm(1)
   */
  mm(value1: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 mm。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.mm(1, 2)
   */
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.q(1)
   */
  q(value1: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 q。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.q(1, 2)
   */
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.in(1)
   */
  in(value1: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 in。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.in(1, 2)
   */
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.pt(1)
   */
  pt(value1: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 pt。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.pt(1, 2)
   */
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.pc(1)
   */
  pc(value1: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 pc。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.pc(1, 2)
   */
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.em(1)
   */
  em(value1: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 em。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.em(1, 2)
   */
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rem(1)
   */
  rem(value1: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 rem。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rem(1, 2)
   */
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ex(1)
   */
  ex(value1: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 ex。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ex(1, 2)
   */
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rex(1)
   */
  rex(value1: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 rex。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rex(1, 2)
   */
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ch(1)
   */
  ch(value1: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 ch。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ch(1, 2)
   */
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rch(1)
   */
  rch(value1: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 rch。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rch(1, 2)
   */
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cap(1)
   */
  cap(value1: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cap。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cap(1, 2)
   */
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rcap(1)
   */
  rcap(value1: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 rcap。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rcap(1, 2)
   */
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ic(1)
   */
  ic(value1: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 ic。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ic(1, 2)
   */
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ric(1)
   */
  ric(value1: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 ric。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.ric(1, 2)
   */
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lh(1)
   */
  lh(value1: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 lh。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lh(1, 2)
   */
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rlh(1)
   */
  rlh(value1: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 rlh。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.rlh(1, 2)
   */
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vw(1)
   */
  vw(value1: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 vw。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vw(1, 2)
   */
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vh(1)
   */
  vh(value1: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 vh。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vh(1, 2)
   */
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vi(1)
   */
  vi(value1: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 vi。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vi(1, 2)
   */
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vb(1)
   */
  vb(value1: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 vb。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vb(1, 2)
   */
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vmin(1)
   */
  vmin(value1: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 vmin。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vmin(1, 2)
   */
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vmax(1)
   */
  vmax(value1: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 vmax。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.vmax(1, 2)
   */
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svw(1)
   */
  svw(value1: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 svw。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svw(1, 2)
   */
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svh(1)
   */
  svh(value1: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 svh。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svh(1, 2)
   */
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svi(1)
   */
  svi(value1: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 svi。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svi(1, 2)
   */
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svb(1)
   */
  svb(value1: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 svb。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svb(1, 2)
   */
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svmin(1)
   */
  svmin(value1: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 svmin。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svmin(1, 2)
   */
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svmax(1)
   */
  svmax(value1: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 svmax。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.svmax(1, 2)
   */
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvw(1)
   */
  lvw(value1: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 lvw。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvw(1, 2)
   */
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvh(1)
   */
  lvh(value1: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 lvh。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvh(1, 2)
   */
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvi(1)
   */
  lvi(value1: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 lvi。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvi(1, 2)
   */
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvb(1)
   */
  lvb(value1: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 lvb。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvb(1, 2)
   */
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvmin(1)
   */
  lvmin(value1: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 lvmin。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvmin(1, 2)
   */
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvmax(1)
   */
  lvmax(value1: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 lvmax。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.lvmax(1, 2)
   */
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvw(1)
   */
  dvw(value1: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 dvw。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvw(1, 2)
   */
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvh(1)
   */
  dvh(value1: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 dvh。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvh(1, 2)
   */
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvi(1)
   */
  dvi(value1: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 dvi。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvi(1, 2)
   */
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvb(1)
   */
  dvb(value1: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 dvb。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvb(1, 2)
   */
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvmin(1)
   */
  dvmin(value1: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 dvmin。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvmin(1, 2)
   */
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvmax(1)
   */
  dvmax(value1: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 dvmax。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.dvmax(1, 2)
   */
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqw(1)
   */
  cqw(value1: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cqw。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqw(1, 2)
   */
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqh(1)
   */
  cqh(value1: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cqh。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqh(1, 2)
   */
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqi(1)
   */
  cqi(value1: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cqi。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqi(1, 2)
   */
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqb(1)
   */
  cqb(value1: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cqb。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqb(1, 2)
   */
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqmin(1)
   */
  cqmin(value1: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cqmin。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqmin(1, 2)
   */
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqmax(1)
   */
  cqmax(value1: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 cqmax。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩与时间线可见范围结束侧内缩的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.percent(1)
   */
  percent(value1: number): string;
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 时间线可见范围起始侧内缩的数值，自动附加 %。
   * @param value2 时间线可见范围结束侧内缩的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.viewTimelineInset.percent(1, 2)
   */
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}%`).join(' '));
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.viewTimelineInset.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.viewTimelineInset.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ViewTimelineInset | CssString,
    ...others: (Property.ViewTimelineInset | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.viewTimelineInset.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ViewTimelineInset | CssString,
    ...others: (Property.ViewTimelineInset | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.viewTimelineInset.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ViewTimelineInset | CssString,
    preferred: Property.ViewTimelineInset | CssString,
    maximum: Property.ViewTimelineInset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 声明基于元素进入和离开滚动视口的时间线名称。（view-timeline-name）
 *
 * CSS 语法：`[ none | <dashed-ident> ]#`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
 */
export class ViewTimelineNameCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`view-timeline-name:inherit;`。
   */
  readonly inherit = 'view-timeline-name:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`view-timeline-name:initial;`。
   */
  readonly initial = 'view-timeline-name:initial;';
  /** CSS 声明：`view-timeline-name:none;`。 */
  readonly none = 'view-timeline-name:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`view-timeline-name:revert;`。
   */
  readonly revert = 'view-timeline-name:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`view-timeline-name:revert-layer;`。
   */
  readonly revertLayer = 'view-timeline-name:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`view-timeline-name:unset;`。
   */
  readonly unset = 'view-timeline-name:unset;';
  /**
   * 创建 view-timeline-name 属性作者；普通使用通过 s.viewTimelineName 取得共享实例。
   * @example
   * class CustomViewTimelineNameCss extends ViewTimelineNameCss {}
   */
  constructor() {
    super('view-timeline-name');
  }
  /**
   * 原样生成 view-timeline-name 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 view-timeline-name:value;。
   * @example
   * s.viewTimelineName.raw('inherit') // view-timeline-name:inherit;
   */
  raw(value: Property.ViewTimelineName | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 为视图过渡的快照伪元素分组，以便共用样式。（view-transition-class）
 *
 * CSS 语法：`none | <custom-ident>+`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
 */
export class ViewTransitionClassCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`view-transition-class:inherit;`。
   */
  readonly inherit = 'view-transition-class:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`view-transition-class:initial;`。
   */
  readonly initial = 'view-transition-class:initial;';
  /** CSS 声明：`view-transition-class:none;`。 */
  readonly none = 'view-transition-class:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`view-transition-class:revert;`。
   */
  readonly revert = 'view-transition-class:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`view-transition-class:revert-layer;`。
   */
  readonly revertLayer = 'view-transition-class:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`view-transition-class:unset;`。
   */
  readonly unset = 'view-transition-class:unset;';
  /**
   * 创建 view-transition-class 属性作者；普通使用通过 s.viewTransitionClass 取得共享实例。
   * @example
   * class CustomViewTransitionClassCss extends ViewTransitionClassCss {}
   */
  constructor() {
    super('view-transition-class');
  }
  /**
   * 原样生成 view-transition-class 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 view-transition-class:value;。
   * @example
   * s.viewTransitionClass.raw('inherit') // view-transition-class:inherit;
   */
  raw(value: Property.ViewTransitionClass | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 为视图过渡中的元素命名，以匹配前后状态的快照。（view-transition-name）
 *
 * CSS 语法：`none | <custom-ident> | match-element`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
 */
export class ViewTransitionNameCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`view-transition-name:inherit;`。
   */
  readonly inherit = 'view-transition-name:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`view-transition-name:initial;`。
   */
  readonly initial = 'view-transition-name:initial;';
  /** CSS 声明：`view-transition-name:match-element;`。 */
  readonly matchElement = 'view-transition-name:match-element;';
  /** CSS 声明：`view-transition-name:none;`。 */
  readonly none = 'view-transition-name:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`view-transition-name:revert;`。
   */
  readonly revert = 'view-transition-name:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`view-transition-name:revert-layer;`。
   */
  readonly revertLayer = 'view-transition-name:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`view-transition-name:unset;`。
   */
  readonly unset = 'view-transition-name:unset;';
  /**
   * 创建 view-transition-name 属性作者；普通使用通过 s.viewTransitionName 取得共享实例。
   * @example
   * class CustomViewTransitionNameCss extends ViewTransitionNameCss {}
   */
  constructor() {
    super('view-transition-name');
  }
  /**
   * 原样生成 view-transition-name 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 view-transition-name:value;。
   * @example
   * s.viewTransitionName.raw('inherit') // view-transition-name:inherit;
   */
  raw(value: Property.ViewTransitionName | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置元素是否可见；隐藏通常保留布局空间。（visibility）
 *
 * CSS 语法：`visible | hidden | collapse`。
 *
 * CSS 初始值：`visible`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
 */
export class VisibilityCss extends CssProperty {
  /**
   * 对表格行列等特定布局有折叠语义，其他场景通常类似 hidden；应核对具体布局行为。
   *
   * CSS 声明：`visibility:collapse;`。
   */
  readonly collapse = 'visibility:collapse;';
  /**
   * 隐藏绘制但通常保留布局空间；后代可显式恢复 visible。
   *
   * CSS 声明：`visibility:hidden;`。
   */
  readonly hidden = 'visibility:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`visibility:inherit;`。
   */
  readonly inherit = 'visibility:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`visibility:initial;`。
   */
  readonly initial = 'visibility:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`visibility:revert;`。
   */
  readonly revert = 'visibility:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`visibility:revert-layer;`。
   */
  readonly revertLayer = 'visibility:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`visibility:unset;`。
   */
  readonly unset = 'visibility:unset;';
  /**
   * 正常显示元素。
   *
   * CSS 声明：`visibility:visible;`。
   */
  readonly visible = 'visibility:visible;';
  /**
   * 创建 visibility 属性作者；普通使用通过 s.visibility 取得共享实例。
   * @example
   * class CustomVisibilityCss extends VisibilityCss {}
   */
  constructor() {
    super('visibility');
  }
  /**
   * 原样生成 visibility 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 visibility:value;。
   * @example
   * s.visibility.raw('inherit') // visibility:inherit;
   */
  raw(value: Property.Visibility | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置空白折叠和换行处理方式。（white-space）
 *
 * CSS 语法：`normal | pre | pre-wrap | pre-line | <'white-space-collapse'> || <'text-wrap-mode'>`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
 */
export class WhiteSpaceCss extends CssProperty {
  /**
   * 保留空白并允许在保留的空格后换行；行末空格占据空间。
   *
   * CSS 声明：`white-space:break-spaces;`。
   */
  readonly breakSpaces = 'white-space:break-spaces;';
  /** CSS 声明：`white-space:collapse;`。 */
  readonly collapse = 'white-space:collapse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`white-space:inherit;`。
   */
  readonly inherit = 'white-space:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`white-space:initial;`。
   */
  readonly initial = 'white-space:initial;';
  /**
   * 折叠连续空白和源换行，允许软换行。
   *
   * CSS 声明：`white-space:normal;`。
   */
  readonly normal = 'white-space:normal;';
  /**
   * 折叠空白并禁止软换行；不会自行生成省略号。
   *
   * CSS 声明：`white-space:nowrap;`。
   */
  readonly nowrap = 'white-space:nowrap;';
  /**
   * 保留空白和源换行，不进行普通软换行。
   *
   * CSS 声明：`white-space:pre;`。
   */
  readonly pre = 'white-space:pre;';
  /**
   * 折叠空格等空白但保留源换行，同时允许软换行。
   *
   * CSS 声明：`white-space:pre-line;`。
   */
  readonly preLine = 'white-space:pre-line;';
  /**
   * 保留空白和源换行，同时允许软换行。
   *
   * CSS 声明：`white-space:pre-wrap;`。
   */
  readonly preWrap = 'white-space:pre-wrap;';
  /** CSS 声明：`white-space:preserve;`。 */
  readonly preserve = 'white-space:preserve;';
  /** CSS 声明：`white-space:preserve-breaks;`。 */
  readonly preserveBreaks = 'white-space:preserve-breaks;';
  /** CSS 声明：`white-space:preserve-spaces;`。 */
  readonly preserveSpaces = 'white-space:preserve-spaces;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`white-space:revert;`。
   */
  readonly revert = 'white-space:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`white-space:revert-layer;`。
   */
  readonly revertLayer = 'white-space:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`white-space:unset;`。
   */
  readonly unset = 'white-space:unset;';
  /** CSS 声明：`white-space:wrap;`。 */
  readonly wrap = 'white-space:wrap;';
  /**
   * 创建 white-space 属性作者；普通使用通过 s.whiteSpace 取得共享实例。
   * @example
   * class CustomWhiteSpaceCss extends WhiteSpaceCss {}
   */
  constructor() {
    super('white-space');
  }
  /**
   * 原样生成 white-space 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 white-space:value;。
   * @example
   * s.whiteSpace.raw('inherit') // white-space:inherit;
   */
  raw(value: Property.WhiteSpace | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置空格、制表符和换行符如何折叠或保留。（white-space-collapse）
 *
 * CSS 语法：`collapse | preserve | preserve-breaks | preserve-spaces | break-spaces`。
 *
 * CSS 初始值：`collapse`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
 */
export class WhiteSpaceCollapseCss extends CssProperty {
  /** CSS 声明：`white-space-collapse:break-spaces;`。 */
  readonly breakSpaces = 'white-space-collapse:break-spaces;';
  /** CSS 声明：`white-space-collapse:collapse;`。 */
  readonly collapse = 'white-space-collapse:collapse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`white-space-collapse:inherit;`。
   */
  readonly inherit = 'white-space-collapse:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`white-space-collapse:initial;`。
   */
  readonly initial = 'white-space-collapse:initial;';
  /** CSS 声明：`white-space-collapse:preserve;`。 */
  readonly preserve = 'white-space-collapse:preserve;';
  /** CSS 声明：`white-space-collapse:preserve-breaks;`。 */
  readonly preserveBreaks = 'white-space-collapse:preserve-breaks;';
  /** CSS 声明：`white-space-collapse:preserve-spaces;`。 */
  readonly preserveSpaces = 'white-space-collapse:preserve-spaces;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`white-space-collapse:revert;`。
   */
  readonly revert = 'white-space-collapse:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`white-space-collapse:revert-layer;`。
   */
  readonly revertLayer = 'white-space-collapse:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`white-space-collapse:unset;`。
   */
  readonly unset = 'white-space-collapse:unset;';
  /**
   * 创建 white-space-collapse 属性作者；普通使用通过 s.whiteSpaceCollapse 取得共享实例。
   * @example
   * class CustomWhiteSpaceCollapseCss extends WhiteSpaceCollapseCss {}
   */
  constructor() {
    super('white-space-collapse');
  }
  /**
   * 原样生成 white-space-collapse 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 white-space-collapse:value;。
   * @example
   * s.whiteSpaceCollapse.raw('inherit') // white-space-collapse:inherit;
   */
  raw(value: Property.WhiteSpaceCollapse | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置分页或分栏断点后需保留的最少行数。（widows）
 *
 * CSS 语法：`<integer>`。
 *
 * CSS 初始值：`2`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
 */
export class WidowsCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`widows:inherit;`。
   */
  readonly inherit = 'widows:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`widows:initial;`。
   */
  readonly initial = 'widows:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`widows:revert;`。
   */
  readonly revert = 'widows:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`widows:revert-layer;`。
   */
  readonly revertLayer = 'widows:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`widows:unset;`。
   */
  readonly unset = 'widows:unset;';
  /**
   * 创建 widows 属性作者；普通使用通过 s.widows 取得共享实例。
   * @example
   * class CustomWidowsCss extends WidowsCss {}
   */
  constructor() {
    super('widows');
  }
  /**
   * 原样生成 widows 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 widows:value;。
   * @example
   * s.widows.raw('inherit') // widows:inherit;
   */
  raw(value: Property.Widows | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.widows.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.widows.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Widows | CssString, ...others: (Property.Widows | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.widows.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Widows | CssString, ...others: (Property.Widows | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.widows.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Widows | CssString,
    preferred: Property.Widows | CssString,
    maximum: Property.Widows | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置元素的物理宽度，盒子范围受 box-sizing 影响。（width）
 *
 * 百分比依据包含块解析；auto、内部尺寸和最小/最大约束共同决定最终使用尺寸。
 *
 * CSS 语法：`auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * s.width.rem(20) // width:20rem;
 * @example
 * s.width.clamp('12rem', '50vw', '40rem') // width:clamp(12rem, 50vw, 40rem);
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
 */
export class WidthCss extends LengthCssProperty {
  /**
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   *
   * CSS 声明：`width:auto;`。
   */
  readonly auto = 'width:auto;';
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   *
   * CSS 声明：`width:fit-content;`。
   */
  readonly fitContent = 'width:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`width:inherit;`。
   */
  readonly inherit = 'width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`width:initial;`。
   */
  readonly initial = 'width:initial;';
  /** CSS 声明：`width:intrinsic;`。 */
  readonly intrinsic = 'width:intrinsic;';
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   *
   * CSS 声明：`width:max-content;`。
   */
  readonly maxContent = 'width:max-content;';
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   *
   * CSS 声明：`width:min-content;`。
   */
  readonly minContent = 'width:min-content;';
  /** CSS 声明：`width:min-intrinsic;`。 */
  readonly minIntrinsic = 'width:min-intrinsic;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`width:revert;`。
   */
  readonly revert = 'width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`width:revert-layer;`。
   */
  readonly revertLayer = 'width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`width:unset;`。
   */
  readonly unset = 'width:unset;';
  /**
   * 创建 width 属性作者；普通使用通过 s.width 取得共享实例。
   * @example
   * class CustomWidthCss extends WidthCss {}
   */
  constructor() {
    super('width');
  }
  /**
   * 原样生成 width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 width:value;。
   * @example
   * s.width.raw('inherit') // width:inherit;
   */
  raw(value: Property.Width | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.width.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.width.calc('100% - 2rem')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.width.min('100%', '40rem')
   */
  min(value: Property.Width | CssString, ...others: (Property.Width | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.width.max('100%', '40rem')
   */
  max(value: Property.Width | CssString, ...others: (Property.Width | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.width.clamp('12rem', '50vw', '40rem')
   */
  clamp(
    minimum: Property.Width | CssString,
    preferred: Property.Width | CssString,
    maximum: Property.Width | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 提前告知浏览器可能发生变化的属性，便于准备优化资源。（will-change）
 *
 * 仅对即将发生的变化短期使用；长期或大量声明可能占用额外资源，并提前改变层叠上下文。
 *
 * CSS 语法：`auto | <animateable-feature>#`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
 */
export class WillChangeCss extends CssProperty {
  /** CSS 声明：`will-change:auto;`。 */
  readonly auto = 'will-change:auto;';
  /** CSS 声明：`will-change:contents;`。 */
  readonly contents = 'will-change:contents;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`will-change:inherit;`。
   */
  readonly inherit = 'will-change:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`will-change:initial;`。
   */
  readonly initial = 'will-change:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`will-change:revert;`。
   */
  readonly revert = 'will-change:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`will-change:revert-layer;`。
   */
  readonly revertLayer = 'will-change:revert-layer;';
  /** CSS 声明：`will-change:scroll-position;`。 */
  readonly scrollPosition = 'will-change:scroll-position;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`will-change:unset;`。
   */
  readonly unset = 'will-change:unset;';
  /**
   * 创建 will-change 属性作者；普通使用通过 s.willChange 取得共享实例。
   * @example
   * class CustomWillChangeCss extends WillChangeCss {}
   */
  constructor() {
    super('will-change');
  }
  /**
   * 原样生成 will-change 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 will-change:value;。
   * @example
   * s.willChange.raw('inherit') // will-change:inherit;
   */
  raw(value: Property.WillChange | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置单词内部或文字之间的断行规则。（word-break）
 *
 * CSS 语法：`normal | break-all | keep-all | break-word | auto-phrase`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
 */
export class WordBreakCss extends CssProperty {
  /** CSS 声明：`word-break:auto-phrase;`。 */
  readonly autoPhrase = 'word-break:auto-phrase;';
  /**
   * 允许在更多字符间断行以防溢出，可能拆开普通单词。
   *
   * CSS 声明：`word-break:break-all;`。
   */
  readonly breakAll = 'word-break:break-all;';
  /** CSS 声明：`word-break:break-word;`。 */
  readonly breakWord = 'word-break:break-word;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`word-break:inherit;`。
   */
  readonly inherit = 'word-break:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`word-break:initial;`。
   */
  readonly initial = 'word-break:initial;';
  /**
   * 限制中日韩文字内部断行，其他文字仍按正常规则处理。
   *
   * CSS 声明：`word-break:keep-all;`。
   */
  readonly keepAll = 'word-break:keep-all;';
  /**
   * 按语言的默认断行规则处理。
   *
   * CSS 声明：`word-break:normal;`。
   */
  readonly normal = 'word-break:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`word-break:revert;`。
   */
  readonly revert = 'word-break:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`word-break:revert-layer;`。
   */
  readonly revertLayer = 'word-break:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`word-break:unset;`。
   */
  readonly unset = 'word-break:unset;';
  /**
   * 创建 word-break 属性作者；普通使用通过 s.wordBreak 取得共享实例。
   * @example
   * class CustomWordBreakCss extends WordBreakCss {}
   */
  constructor() {
    super('word-break');
  }
  /**
   * 原样生成 word-break 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 word-break:value;。
   * @example
   * s.wordBreak.raw('inherit') // word-break:inherit;
   */
  raw(value: Property.WordBreak | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置单词或词间分隔符的额外间距。（word-spacing）
 *
 * CSS 语法：`normal | <length>`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
 */
export class WordSpacingCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`word-spacing:inherit;`。
   */
  readonly inherit = 'word-spacing:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`word-spacing:initial;`。
   */
  readonly initial = 'word-spacing:initial;';
  /** CSS 声明：`word-spacing:normal;`。 */
  readonly normal = 'word-spacing:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`word-spacing:revert;`。
   */
  readonly revert = 'word-spacing:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`word-spacing:revert-layer;`。
   */
  readonly revertLayer = 'word-spacing:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`word-spacing:unset;`。
   */
  readonly unset = 'word-spacing:unset;';
  /**
   * 创建 word-spacing 属性作者；普通使用通过 s.wordSpacing 取得共享实例。
   * @example
   * class CustomWordSpacingCss extends WordSpacingCss {}
   */
  constructor() {
    super('word-spacing');
  }
  /**
   * 原样生成 word-spacing 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 word-spacing:value;。
   * @example
   * s.wordSpacing.raw('inherit') // word-spacing:inherit;
   */
  raw(value: Property.WordSpacing | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.wordSpacing.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.wordSpacing.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.WordSpacing | CssString,
    ...others: (Property.WordSpacing | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.wordSpacing.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.WordSpacing | CssString,
    ...others: (Property.WordSpacing | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.wordSpacing.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.WordSpacing | CssString,
    preferred: Property.WordSpacing | CssString,
    maximum: Property.WordSpacing | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。（word-wrap）
 *
 * CSS 语法：`normal | break-word`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
 */
export class WordWrapCss extends CssProperty {
  /**
   * 必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
   *
   * CSS 声明：`word-wrap:break-word;`。
   */
  readonly breakWord = 'word-wrap:break-word;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`word-wrap:inherit;`。
   */
  readonly inherit = 'word-wrap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`word-wrap:initial;`。
   */
  readonly initial = 'word-wrap:initial;';
  /**
   * 只使用正常换行机会，不为长单词额外断行。
   *
   * CSS 声明：`word-wrap:normal;`。
   */
  readonly normal = 'word-wrap:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`word-wrap:revert;`。
   */
  readonly revert = 'word-wrap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`word-wrap:revert-layer;`。
   */
  readonly revertLayer = 'word-wrap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`word-wrap:unset;`。
   */
  readonly unset = 'word-wrap:unset;';
  /**
   * 创建 word-wrap 属性作者；普通使用通过 s.wordWrap 取得共享实例。
   * @example
   * class CustomWordWrapCss extends WordWrapCss {}
   */
  constructor() {
    super('word-wrap');
  }
  /**
   * 原样生成 word-wrap 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 word-wrap:value;。
   * @example
   * s.wordWrap.raw('inherit') // word-wrap:inherit;
   */
  raw(value: Property.WordWrap | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置水平或竖直书写模式，以及行和块的推进方向。（writing-mode）
 *
 * CSS 语法：`horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`。
 *
 * CSS 初始值：`horizontal-tb`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
 */
export class WritingModeCss extends CssProperty {
  /** CSS 声明：`writing-mode:horizontal-tb;`。 */
  readonly horizontalTb = 'writing-mode:horizontal-tb;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`writing-mode:inherit;`。
   */
  readonly inherit = 'writing-mode:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`writing-mode:initial;`。
   */
  readonly initial = 'writing-mode:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`writing-mode:revert;`。
   */
  readonly revert = 'writing-mode:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`writing-mode:revert-layer;`。
   */
  readonly revertLayer = 'writing-mode:revert-layer;';
  /** CSS 声明：`writing-mode:sideways-lr;`。 */
  readonly sidewaysLr = 'writing-mode:sideways-lr;';
  /** CSS 声明：`writing-mode:sideways-rl;`。 */
  readonly sidewaysRl = 'writing-mode:sideways-rl;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`writing-mode:unset;`。
   */
  readonly unset = 'writing-mode:unset;';
  /** CSS 声明：`writing-mode:vertical-lr;`。 */
  readonly verticalLr = 'writing-mode:vertical-lr;';
  /** CSS 声明：`writing-mode:vertical-rl;`。 */
  readonly verticalRl = 'writing-mode:vertical-rl;';
  /**
   * 创建 writing-mode 属性作者；普通使用通过 s.writingMode 取得共享实例。
   * @example
   * class CustomWritingModeCss extends WritingModeCss {}
   */
  constructor() {
    super('writing-mode');
  }
  /**
   * 原样生成 writing-mode 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 writing-mode:value;。
   * @example
   * s.writingMode.raw('inherit') // writing-mode:inherit;
   */
  raw(value: Property.WritingMode | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置适用 SVG 元素的水平几何坐标。（x）
 *
 * CSS 语法：`<length> | <percentage>`。
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
 */
export class XCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`x:inherit;`。
   */
  readonly inherit = 'x:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`x:initial;`。
   */
  readonly initial = 'x:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`x:revert;`。
   */
  readonly revert = 'x:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`x:revert-layer;`。
   */
  readonly revertLayer = 'x:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`x:unset;`。
   */
  readonly unset = 'x:unset;';
  /**
   * 创建 x 属性作者；普通使用通过 s.x 取得共享实例。
   * @example
   * class CustomXCss extends XCss {}
   */
  constructor() {
    super('x');
  }
  /**
   * 原样生成 x 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 x:value;。
   * @example
   * s.x.raw('inherit') // x:inherit;
   */
  raw(value: Property.X | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.x.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.x.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.x.min('var(--first)', 'var(--second)')
   */
  min(value: Property.X | CssString, ...others: (Property.X | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.x.max('var(--first)', 'var(--second)')
   */
  max(value: Property.X | CssString, ...others: (Property.X | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.x.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.X | CssString,
    preferred: Property.X | CssString,
    maximum: Property.X | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置适用 SVG 元素的垂直几何坐标。（y）
 *
 * CSS 语法：`<length> | <percentage>`。
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
 */
export class YCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`y:inherit;`。
   */
  readonly inherit = 'y:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`y:initial;`。
   */
  readonly initial = 'y:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`y:revert;`。
   */
  readonly revert = 'y:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`y:revert-layer;`。
   */
  readonly revertLayer = 'y:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`y:unset;`。
   */
  readonly unset = 'y:unset;';
  /**
   * 创建 y 属性作者；普通使用通过 s.y 取得共享实例。
   * @example
   * class CustomYCss extends YCss {}
   */
  constructor() {
    super('y');
  }
  /**
   * 原样生成 y 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 y:value;。
   * @example
   * s.y.raw('inherit') // y:inherit;
   */
  raw(value: Property.Y | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.y.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.y.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.y.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Y | CssString, ...others: (Property.Y | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.y.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Y | CssString, ...others: (Property.Y | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.y.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Y | CssString,
    preferred: Property.Y | CssString,
    maximum: Property.Y | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置元素在所属层叠上下文中的层叠级别。（z-index）
 *
 * 数值只在所属层叠上下文内比较；更大的数值不保证盖过其他层叠上下文。Flex/Grid 项目也可以使用 z-index。
 *
 * CSS 语法：`auto | <integer>`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
 */
export class ZIndexCss extends CssProperty {
  /** CSS 声明：`z-index:auto;`。 */
  readonly auto = 'z-index:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`z-index:inherit;`。
   */
  readonly inherit = 'z-index:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`z-index:initial;`。
   */
  readonly initial = 'z-index:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`z-index:revert;`。
   */
  readonly revert = 'z-index:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`z-index:revert-layer;`。
   */
  readonly revertLayer = 'z-index:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`z-index:unset;`。
   */
  readonly unset = 'z-index:unset;';
  /**
   * 创建 z-index 属性作者；普通使用通过 s.zIndex 取得共享实例。
   * @example
   * class CustomZIndexCss extends ZIndexCss {}
   */
  constructor() {
    super('z-index');
  }
  /**
   * 原样生成 z-index 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 z-index:value;。
   * @example
   * s.zIndex.raw('inherit') // z-index:inherit;
   */
  raw(value: Property.ZIndex | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.zIndex.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.zIndex.min('var(--first)', 'var(--second)')
   */
  min(value: Property.ZIndex | CssString, ...others: (Property.ZIndex | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.zIndex.max('var(--first)', 'var(--second)')
   */
  max(value: Property.ZIndex | CssString, ...others: (Property.ZIndex | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.zIndex.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ZIndex | CssString,
    preferred: Property.ZIndex | CssString,
    maximum: Property.ZIndex | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。（zoom）
 *
 * CSS 语法：`normal | reset | <number [0,∞]> || <percentage [0,∞]>`。
 *
 * CSS 初始值：`1`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
 */
export class ZoomCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`zoom:inherit;`。
   */
  readonly inherit = 'zoom:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`zoom:initial;`。
   */
  readonly initial = 'zoom:initial;';
  /** CSS 声明：`zoom:normal;`。 */
  readonly normal = 'zoom:normal;';
  /** CSS 声明：`zoom:reset;`。 */
  readonly reset = 'zoom:reset;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`zoom:revert;`。
   */
  readonly revert = 'zoom:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`zoom:revert-layer;`。
   */
  readonly revertLayer = 'zoom:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`zoom:unset;`。
   */
  readonly unset = 'zoom:unset;';
  /**
   * 创建 zoom 属性作者；普通使用通过 s.zoom 取得共享实例。
   * @example
   * class CustomZoomCss extends ZoomCss {}
   */
  constructor() {
    super('zoom');
  }
  /**
   * 原样生成 zoom 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 zoom:value;。
   * @example
   * s.zoom.raw('inherit') // zoom:inherit;
   */
  raw(value: Property.Zoom | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.zoom.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.zoom.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.zoom.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Zoom | CssString, ...others: (Property.Zoom | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.zoom.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Zoom | CssString, ...others: (Property.Zoom | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.zoom.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Zoom | CssString,
    preferred: Property.Zoom | CssString,
    maximum: Property.Zoom | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}
