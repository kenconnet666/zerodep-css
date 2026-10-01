// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/**
 * padding 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding:inherit;`。
   */
  readonly inherit: Property.Padding | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding:initial;`。
   */
  readonly initial: Property.Padding | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding:revert;`。
   */
  readonly revert: Property.Padding | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding:revert-layer;`。
   */
  readonly revertLayer: Property.Padding | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding:unset;`。
   */
  readonly unset: Property.Padding | CssString = 'unset';
}

/**
 * 设置内容与边框之间的四边内边距，不接受负值。（padding）
 *
 * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。不能使用负值或 auto。
 *
 * 适用场景：控制文字或子元素与组件边框之间的留白。
 * @example
 * s.padding.rem(0.5, 1) // padding:0.5rem 1rem;
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
 */
export class PaddingCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding:inherit;`。
   */
  readonly inherit: string = 'padding:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding:initial;`。
   */
  readonly initial: string = 'padding:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding:revert;`。
   */
  readonly revert: string = 'padding:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding:revert-layer;`。
   */
  readonly revertLayer: string = 'padding:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding:unset;`。
   */
  readonly unset: string = 'padding:unset;';
  /**
   * 创建 padding 属性作者；普通使用通过 s.padding 取得共享实例。
   * @example
   * class CustomPaddingCss extends PaddingCss {}
   */
  constructor() {
    super('padding');
  }
  /**
   * 原样生成 padding 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding:value;。
   * @example
   * s.padding.raw('inherit') // padding:inherit;
   */
  raw(value: Property.Padding | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.px(1)
   */
  px(value1: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 px。
   * @param value2 左、右的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.px(1, 2)
   */
  px(value1: number, value2: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 px。
   * @param value2 左、右的数值，自动附加 px。
   * @param value3 下的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.px(1, 2, 3)
   */
  px(value1: number, value2: number, value3: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 px。
   * @param value2 右的数值，自动附加 px。
   * @param value3 下的数值，自动附加 px。
   * @param value4 左的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.px(1, 2, 3, 4)
   */
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cm(1)
   */
  cm(value1: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cm。
   * @param value2 左、右的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cm(1, 2)
   */
  cm(value1: number, value2: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cm。
   * @param value2 左、右的数值，自动附加 cm。
   * @param value3 下的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cm(1, 2, 3)
   */
  cm(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cm。
   * @param value2 右的数值，自动附加 cm。
   * @param value3 下的数值，自动附加 cm。
   * @param value4 左的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cm(1, 2, 3, 4)
   */
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.mm(1)
   */
  mm(value1: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 mm。
   * @param value2 左、右的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.mm(1, 2)
   */
  mm(value1: number, value2: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 mm。
   * @param value2 左、右的数值，自动附加 mm。
   * @param value3 下的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.mm(1, 2, 3)
   */
  mm(value1: number, value2: number, value3: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 mm。
   * @param value2 右的数值，自动附加 mm。
   * @param value3 下的数值，自动附加 mm。
   * @param value4 左的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.mm(1, 2, 3, 4)
   */
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.q(1)
   */
  q(value1: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 q。
   * @param value2 左、右的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.q(1, 2)
   */
  q(value1: number, value2: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 q。
   * @param value2 左、右的数值，自动附加 q。
   * @param value3 下的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.q(1, 2, 3)
   */
  q(value1: number, value2: number, value3: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 q。
   * @param value2 右的数值，自动附加 q。
   * @param value3 下的数值，自动附加 q。
   * @param value4 左的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.q(1, 2, 3, 4)
   */
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.in(1)
   */
  in(value1: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 in。
   * @param value2 左、右的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.in(1, 2)
   */
  in(value1: number, value2: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 in。
   * @param value2 左、右的数值，自动附加 in。
   * @param value3 下的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.in(1, 2, 3)
   */
  in(value1: number, value2: number, value3: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 in。
   * @param value2 右的数值，自动附加 in。
   * @param value3 下的数值，自动附加 in。
   * @param value4 左的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.in(1, 2, 3, 4)
   */
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pt(1)
   */
  pt(value1: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 pt。
   * @param value2 左、右的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pt(1, 2)
   */
  pt(value1: number, value2: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 pt。
   * @param value2 左、右的数值，自动附加 pt。
   * @param value3 下的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pt(1, 2, 3)
   */
  pt(value1: number, value2: number, value3: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 pt。
   * @param value2 右的数值，自动附加 pt。
   * @param value3 下的数值，自动附加 pt。
   * @param value4 左的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pt(1, 2, 3, 4)
   */
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pc(1)
   */
  pc(value1: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 pc。
   * @param value2 左、右的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pc(1, 2)
   */
  pc(value1: number, value2: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 pc。
   * @param value2 左、右的数值，自动附加 pc。
   * @param value3 下的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pc(1, 2, 3)
   */
  pc(value1: number, value2: number, value3: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 pc。
   * @param value2 右的数值，自动附加 pc。
   * @param value3 下的数值，自动附加 pc。
   * @param value4 左的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.pc(1, 2, 3, 4)
   */
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.em(1)
   */
  em(value1: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 em。
   * @param value2 左、右的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.em(1, 2)
   */
  em(value1: number, value2: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 em。
   * @param value2 左、右的数值，自动附加 em。
   * @param value3 下的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.em(1, 2, 3)
   */
  em(value1: number, value2: number, value3: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 em。
   * @param value2 右的数值，自动附加 em。
   * @param value3 下的数值，自动附加 em。
   * @param value4 左的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.em(1, 2, 3, 4)
   */
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rem(1)
   */
  rem(value1: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 rem。
   * @param value2 左、右的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rem(1, 2)
   */
  rem(value1: number, value2: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rem。
   * @param value2 左、右的数值，自动附加 rem。
   * @param value3 下的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rem(1, 2, 3)
   */
  rem(value1: number, value2: number, value3: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rem。
   * @param value2 右的数值，自动附加 rem。
   * @param value3 下的数值，自动附加 rem。
   * @param value4 左的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rem(1, 2, 3, 4)
   */
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ex(1)
   */
  ex(value1: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 ex。
   * @param value2 左、右的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ex(1, 2)
   */
  ex(value1: number, value2: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ex。
   * @param value2 左、右的数值，自动附加 ex。
   * @param value3 下的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ex(1, 2, 3)
   */
  ex(value1: number, value2: number, value3: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ex。
   * @param value2 右的数值，自动附加 ex。
   * @param value3 下的数值，自动附加 ex。
   * @param value4 左的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ex(1, 2, 3, 4)
   */
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rex(1)
   */
  rex(value1: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 rex。
   * @param value2 左、右的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rex(1, 2)
   */
  rex(value1: number, value2: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rex。
   * @param value2 左、右的数值，自动附加 rex。
   * @param value3 下的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rex(1, 2, 3)
   */
  rex(value1: number, value2: number, value3: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rex。
   * @param value2 右的数值，自动附加 rex。
   * @param value3 下的数值，自动附加 rex。
   * @param value4 左的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rex(1, 2, 3, 4)
   */
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ch(1)
   */
  ch(value1: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 ch。
   * @param value2 左、右的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ch(1, 2)
   */
  ch(value1: number, value2: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ch。
   * @param value2 左、右的数值，自动附加 ch。
   * @param value3 下的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ch(1, 2, 3)
   */
  ch(value1: number, value2: number, value3: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ch。
   * @param value2 右的数值，自动附加 ch。
   * @param value3 下的数值，自动附加 ch。
   * @param value4 左的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ch(1, 2, 3, 4)
   */
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rch(1)
   */
  rch(value1: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 rch。
   * @param value2 左、右的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rch(1, 2)
   */
  rch(value1: number, value2: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rch。
   * @param value2 左、右的数值，自动附加 rch。
   * @param value3 下的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rch(1, 2, 3)
   */
  rch(value1: number, value2: number, value3: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rch。
   * @param value2 右的数值，自动附加 rch。
   * @param value3 下的数值，自动附加 rch。
   * @param value4 左的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rch(1, 2, 3, 4)
   */
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cap(1)
   */
  cap(value1: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cap。
   * @param value2 左、右的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cap(1, 2)
   */
  cap(value1: number, value2: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cap。
   * @param value2 左、右的数值，自动附加 cap。
   * @param value3 下的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cap(1, 2, 3)
   */
  cap(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cap。
   * @param value2 右的数值，自动附加 cap。
   * @param value3 下的数值，自动附加 cap。
   * @param value4 左的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cap(1, 2, 3, 4)
   */
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rcap(1)
   */
  rcap(value1: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 rcap。
   * @param value2 左、右的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rcap(1, 2)
   */
  rcap(value1: number, value2: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rcap。
   * @param value2 左、右的数值，自动附加 rcap。
   * @param value3 下的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rcap(1, 2, 3)
   */
  rcap(value1: number, value2: number, value3: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rcap。
   * @param value2 右的数值，自动附加 rcap。
   * @param value3 下的数值，自动附加 rcap。
   * @param value4 左的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rcap(1, 2, 3, 4)
   */
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ic(1)
   */
  ic(value1: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 ic。
   * @param value2 左、右的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ic(1, 2)
   */
  ic(value1: number, value2: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ic。
   * @param value2 左、右的数值，自动附加 ic。
   * @param value3 下的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ic(1, 2, 3)
   */
  ic(value1: number, value2: number, value3: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ic。
   * @param value2 右的数值，自动附加 ic。
   * @param value3 下的数值，自动附加 ic。
   * @param value4 左的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ic(1, 2, 3, 4)
   */
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ric(1)
   */
  ric(value1: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 ric。
   * @param value2 左、右的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ric(1, 2)
   */
  ric(value1: number, value2: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ric。
   * @param value2 左、右的数值，自动附加 ric。
   * @param value3 下的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ric(1, 2, 3)
   */
  ric(value1: number, value2: number, value3: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 ric。
   * @param value2 右的数值，自动附加 ric。
   * @param value3 下的数值，自动附加 ric。
   * @param value4 左的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.ric(1, 2, 3, 4)
   */
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lh(1)
   */
  lh(value1: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 lh。
   * @param value2 左、右的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lh(1, 2)
   */
  lh(value1: number, value2: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lh。
   * @param value2 左、右的数值，自动附加 lh。
   * @param value3 下的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lh(1, 2, 3)
   */
  lh(value1: number, value2: number, value3: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lh。
   * @param value2 右的数值，自动附加 lh。
   * @param value3 下的数值，自动附加 lh。
   * @param value4 左的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lh(1, 2, 3, 4)
   */
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rlh(1)
   */
  rlh(value1: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 rlh。
   * @param value2 左、右的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rlh(1, 2)
   */
  rlh(value1: number, value2: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rlh。
   * @param value2 左、右的数值，自动附加 rlh。
   * @param value3 下的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rlh(1, 2, 3)
   */
  rlh(value1: number, value2: number, value3: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 rlh。
   * @param value2 右的数值，自动附加 rlh。
   * @param value3 下的数值，自动附加 rlh。
   * @param value4 左的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.rlh(1, 2, 3, 4)
   */
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vw(1)
   */
  vw(value1: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 vw。
   * @param value2 左、右的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vw(1, 2)
   */
  vw(value1: number, value2: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vw。
   * @param value2 左、右的数值，自动附加 vw。
   * @param value3 下的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vw(1, 2, 3)
   */
  vw(value1: number, value2: number, value3: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vw。
   * @param value2 右的数值，自动附加 vw。
   * @param value3 下的数值，自动附加 vw。
   * @param value4 左的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vw(1, 2, 3, 4)
   */
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vh(1)
   */
  vh(value1: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 vh。
   * @param value2 左、右的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vh(1, 2)
   */
  vh(value1: number, value2: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vh。
   * @param value2 左、右的数值，自动附加 vh。
   * @param value3 下的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vh(1, 2, 3)
   */
  vh(value1: number, value2: number, value3: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vh。
   * @param value2 右的数值，自动附加 vh。
   * @param value3 下的数值，自动附加 vh。
   * @param value4 左的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vh(1, 2, 3, 4)
   */
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vi(1)
   */
  vi(value1: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 vi。
   * @param value2 左、右的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vi(1, 2)
   */
  vi(value1: number, value2: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vi。
   * @param value2 左、右的数值，自动附加 vi。
   * @param value3 下的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vi(1, 2, 3)
   */
  vi(value1: number, value2: number, value3: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vi。
   * @param value2 右的数值，自动附加 vi。
   * @param value3 下的数值，自动附加 vi。
   * @param value4 左的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vi(1, 2, 3, 4)
   */
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vb(1)
   */
  vb(value1: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 vb。
   * @param value2 左、右的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vb(1, 2)
   */
  vb(value1: number, value2: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vb。
   * @param value2 左、右的数值，自动附加 vb。
   * @param value3 下的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vb(1, 2, 3)
   */
  vb(value1: number, value2: number, value3: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vb。
   * @param value2 右的数值，自动附加 vb。
   * @param value3 下的数值，自动附加 vb。
   * @param value4 左的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vb(1, 2, 3, 4)
   */
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmin(1)
   */
  vmin(value1: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 vmin。
   * @param value2 左、右的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmin(1, 2)
   */
  vmin(value1: number, value2: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vmin。
   * @param value2 左、右的数值，自动附加 vmin。
   * @param value3 下的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmin(1, 2, 3)
   */
  vmin(value1: number, value2: number, value3: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vmin。
   * @param value2 右的数值，自动附加 vmin。
   * @param value3 下的数值，自动附加 vmin。
   * @param value4 左的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmin(1, 2, 3, 4)
   */
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmax(1)
   */
  vmax(value1: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 vmax。
   * @param value2 左、右的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmax(1, 2)
   */
  vmax(value1: number, value2: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vmax。
   * @param value2 左、右的数值，自动附加 vmax。
   * @param value3 下的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmax(1, 2, 3)
   */
  vmax(value1: number, value2: number, value3: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 vmax。
   * @param value2 右的数值，自动附加 vmax。
   * @param value3 下的数值，自动附加 vmax。
   * @param value4 左的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.vmax(1, 2, 3, 4)
   */
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svw(1)
   */
  svw(value1: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 svw。
   * @param value2 左、右的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svw(1, 2)
   */
  svw(value1: number, value2: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svw。
   * @param value2 左、右的数值，自动附加 svw。
   * @param value3 下的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svw(1, 2, 3)
   */
  svw(value1: number, value2: number, value3: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svw。
   * @param value2 右的数值，自动附加 svw。
   * @param value3 下的数值，自动附加 svw。
   * @param value4 左的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svw(1, 2, 3, 4)
   */
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svh(1)
   */
  svh(value1: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 svh。
   * @param value2 左、右的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svh(1, 2)
   */
  svh(value1: number, value2: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svh。
   * @param value2 左、右的数值，自动附加 svh。
   * @param value3 下的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svh(1, 2, 3)
   */
  svh(value1: number, value2: number, value3: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svh。
   * @param value2 右的数值，自动附加 svh。
   * @param value3 下的数值，自动附加 svh。
   * @param value4 左的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svh(1, 2, 3, 4)
   */
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svi(1)
   */
  svi(value1: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 svi。
   * @param value2 左、右的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svi(1, 2)
   */
  svi(value1: number, value2: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svi。
   * @param value2 左、右的数值，自动附加 svi。
   * @param value3 下的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svi(1, 2, 3)
   */
  svi(value1: number, value2: number, value3: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svi。
   * @param value2 右的数值，自动附加 svi。
   * @param value3 下的数值，自动附加 svi。
   * @param value4 左的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svi(1, 2, 3, 4)
   */
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svb(1)
   */
  svb(value1: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 svb。
   * @param value2 左、右的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svb(1, 2)
   */
  svb(value1: number, value2: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svb。
   * @param value2 左、右的数值，自动附加 svb。
   * @param value3 下的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svb(1, 2, 3)
   */
  svb(value1: number, value2: number, value3: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svb。
   * @param value2 右的数值，自动附加 svb。
   * @param value3 下的数值，自动附加 svb。
   * @param value4 左的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svb(1, 2, 3, 4)
   */
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmin(1)
   */
  svmin(value1: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 svmin。
   * @param value2 左、右的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmin(1, 2)
   */
  svmin(value1: number, value2: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svmin。
   * @param value2 左、右的数值，自动附加 svmin。
   * @param value3 下的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmin(1, 2, 3)
   */
  svmin(value1: number, value2: number, value3: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svmin。
   * @param value2 右的数值，自动附加 svmin。
   * @param value3 下的数值，自动附加 svmin。
   * @param value4 左的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmin(1, 2, 3, 4)
   */
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmax(1)
   */
  svmax(value1: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 svmax。
   * @param value2 左、右的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmax(1, 2)
   */
  svmax(value1: number, value2: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svmax。
   * @param value2 左、右的数值，自动附加 svmax。
   * @param value3 下的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmax(1, 2, 3)
   */
  svmax(value1: number, value2: number, value3: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 svmax。
   * @param value2 右的数值，自动附加 svmax。
   * @param value3 下的数值，自动附加 svmax。
   * @param value4 左的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.svmax(1, 2, 3, 4)
   */
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvw(1)
   */
  lvw(value1: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 lvw。
   * @param value2 左、右的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvw(1, 2)
   */
  lvw(value1: number, value2: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvw。
   * @param value2 左、右的数值，自动附加 lvw。
   * @param value3 下的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvw(1, 2, 3)
   */
  lvw(value1: number, value2: number, value3: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvw。
   * @param value2 右的数值，自动附加 lvw。
   * @param value3 下的数值，自动附加 lvw。
   * @param value4 左的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvw(1, 2, 3, 4)
   */
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvh(1)
   */
  lvh(value1: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 lvh。
   * @param value2 左、右的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvh(1, 2)
   */
  lvh(value1: number, value2: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvh。
   * @param value2 左、右的数值，自动附加 lvh。
   * @param value3 下的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvh(1, 2, 3)
   */
  lvh(value1: number, value2: number, value3: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvh。
   * @param value2 右的数值，自动附加 lvh。
   * @param value3 下的数值，自动附加 lvh。
   * @param value4 左的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvh(1, 2, 3, 4)
   */
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvi(1)
   */
  lvi(value1: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 lvi。
   * @param value2 左、右的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvi(1, 2)
   */
  lvi(value1: number, value2: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvi。
   * @param value2 左、右的数值，自动附加 lvi。
   * @param value3 下的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvi(1, 2, 3)
   */
  lvi(value1: number, value2: number, value3: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvi。
   * @param value2 右的数值，自动附加 lvi。
   * @param value3 下的数值，自动附加 lvi。
   * @param value4 左的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvi(1, 2, 3, 4)
   */
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvb(1)
   */
  lvb(value1: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 lvb。
   * @param value2 左、右的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvb(1, 2)
   */
  lvb(value1: number, value2: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvb。
   * @param value2 左、右的数值，自动附加 lvb。
   * @param value3 下的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvb(1, 2, 3)
   */
  lvb(value1: number, value2: number, value3: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvb。
   * @param value2 右的数值，自动附加 lvb。
   * @param value3 下的数值，自动附加 lvb。
   * @param value4 左的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvb(1, 2, 3, 4)
   */
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmin(1)
   */
  lvmin(value1: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 lvmin。
   * @param value2 左、右的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmin(1, 2)
   */
  lvmin(value1: number, value2: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvmin。
   * @param value2 左、右的数值，自动附加 lvmin。
   * @param value3 下的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmin(1, 2, 3)
   */
  lvmin(value1: number, value2: number, value3: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvmin。
   * @param value2 右的数值，自动附加 lvmin。
   * @param value3 下的数值，自动附加 lvmin。
   * @param value4 左的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmin(1, 2, 3, 4)
   */
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmax(1)
   */
  lvmax(value1: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 lvmax。
   * @param value2 左、右的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmax(1, 2)
   */
  lvmax(value1: number, value2: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvmax。
   * @param value2 左、右的数值，自动附加 lvmax。
   * @param value3 下的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmax(1, 2, 3)
   */
  lvmax(value1: number, value2: number, value3: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 lvmax。
   * @param value2 右的数值，自动附加 lvmax。
   * @param value3 下的数值，自动附加 lvmax。
   * @param value4 左的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.lvmax(1, 2, 3, 4)
   */
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvw(1)
   */
  dvw(value1: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 dvw。
   * @param value2 左、右的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvw(1, 2)
   */
  dvw(value1: number, value2: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvw。
   * @param value2 左、右的数值，自动附加 dvw。
   * @param value3 下的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvw(1, 2, 3)
   */
  dvw(value1: number, value2: number, value3: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvw。
   * @param value2 右的数值，自动附加 dvw。
   * @param value3 下的数值，自动附加 dvw。
   * @param value4 左的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvw(1, 2, 3, 4)
   */
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvh(1)
   */
  dvh(value1: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 dvh。
   * @param value2 左、右的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvh(1, 2)
   */
  dvh(value1: number, value2: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvh。
   * @param value2 左、右的数值，自动附加 dvh。
   * @param value3 下的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvh(1, 2, 3)
   */
  dvh(value1: number, value2: number, value3: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvh。
   * @param value2 右的数值，自动附加 dvh。
   * @param value3 下的数值，自动附加 dvh。
   * @param value4 左的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvh(1, 2, 3, 4)
   */
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvi(1)
   */
  dvi(value1: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 dvi。
   * @param value2 左、右的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvi(1, 2)
   */
  dvi(value1: number, value2: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvi。
   * @param value2 左、右的数值，自动附加 dvi。
   * @param value3 下的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvi(1, 2, 3)
   */
  dvi(value1: number, value2: number, value3: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvi。
   * @param value2 右的数值，自动附加 dvi。
   * @param value3 下的数值，自动附加 dvi。
   * @param value4 左的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvi(1, 2, 3, 4)
   */
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvb(1)
   */
  dvb(value1: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 dvb。
   * @param value2 左、右的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvb(1, 2)
   */
  dvb(value1: number, value2: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvb。
   * @param value2 左、右的数值，自动附加 dvb。
   * @param value3 下的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvb(1, 2, 3)
   */
  dvb(value1: number, value2: number, value3: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvb。
   * @param value2 右的数值，自动附加 dvb。
   * @param value3 下的数值，自动附加 dvb。
   * @param value4 左的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvb(1, 2, 3, 4)
   */
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmin(1)
   */
  dvmin(value1: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 dvmin。
   * @param value2 左、右的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmin(1, 2)
   */
  dvmin(value1: number, value2: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvmin。
   * @param value2 左、右的数值，自动附加 dvmin。
   * @param value3 下的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmin(1, 2, 3)
   */
  dvmin(value1: number, value2: number, value3: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvmin。
   * @param value2 右的数值，自动附加 dvmin。
   * @param value3 下的数值，自动附加 dvmin。
   * @param value4 左的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmin(1, 2, 3, 4)
   */
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmax(1)
   */
  dvmax(value1: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 dvmax。
   * @param value2 左、右的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmax(1, 2)
   */
  dvmax(value1: number, value2: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvmax。
   * @param value2 左、右的数值，自动附加 dvmax。
   * @param value3 下的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmax(1, 2, 3)
   */
  dvmax(value1: number, value2: number, value3: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 dvmax。
   * @param value2 右的数值，自动附加 dvmax。
   * @param value3 下的数值，自动附加 dvmax。
   * @param value4 左的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.dvmax(1, 2, 3, 4)
   */
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqw(1)
   */
  cqw(value1: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cqw。
   * @param value2 左、右的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqw(1, 2)
   */
  cqw(value1: number, value2: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqw。
   * @param value2 左、右的数值，自动附加 cqw。
   * @param value3 下的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqw(1, 2, 3)
   */
  cqw(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqw。
   * @param value2 右的数值，自动附加 cqw。
   * @param value3 下的数值，自动附加 cqw。
   * @param value4 左的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqw(1, 2, 3, 4)
   */
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqh(1)
   */
  cqh(value1: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cqh。
   * @param value2 左、右的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqh(1, 2)
   */
  cqh(value1: number, value2: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqh。
   * @param value2 左、右的数值，自动附加 cqh。
   * @param value3 下的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqh(1, 2, 3)
   */
  cqh(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqh。
   * @param value2 右的数值，自动附加 cqh。
   * @param value3 下的数值，自动附加 cqh。
   * @param value4 左的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqh(1, 2, 3, 4)
   */
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqi(1)
   */
  cqi(value1: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cqi。
   * @param value2 左、右的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqi(1, 2)
   */
  cqi(value1: number, value2: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqi。
   * @param value2 左、右的数值，自动附加 cqi。
   * @param value3 下的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqi(1, 2, 3)
   */
  cqi(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqi。
   * @param value2 右的数值，自动附加 cqi。
   * @param value3 下的数值，自动附加 cqi。
   * @param value4 左的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqi(1, 2, 3, 4)
   */
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqb(1)
   */
  cqb(value1: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cqb。
   * @param value2 左、右的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqb(1, 2)
   */
  cqb(value1: number, value2: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqb。
   * @param value2 左、右的数值，自动附加 cqb。
   * @param value3 下的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqb(1, 2, 3)
   */
  cqb(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqb。
   * @param value2 右的数值，自动附加 cqb。
   * @param value3 下的数值，自动附加 cqb。
   * @param value4 左的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqb(1, 2, 3, 4)
   */
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmin(1)
   */
  cqmin(value1: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cqmin。
   * @param value2 左、右的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmin(1, 2)
   */
  cqmin(value1: number, value2: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqmin。
   * @param value2 左、右的数值，自动附加 cqmin。
   * @param value3 下的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmin(1, 2, 3)
   */
  cqmin(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqmin。
   * @param value2 右的数值，自动附加 cqmin。
   * @param value3 下的数值，自动附加 cqmin。
   * @param value4 左的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmin(1, 2, 3, 4)
   */
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmax(1)
   */
  cqmax(value1: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 cqmax。
   * @param value2 左、右的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqmax。
   * @param value2 左、右的数值，自动附加 cqmax。
   * @param value3 下的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmax(1, 2, 3)
   */
  cqmax(value1: number, value2: number, value3: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 cqmax。
   * @param value2 右的数值，自动附加 cqmax。
   * @param value3 下的数值，自动附加 cqmax。
   * @param value4 左的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.cqmax(1, 2, 3, 4)
   */
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.percent(1)
   */
  percent(value1: number): string;
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上、下的数值，自动附加 %。
   * @param value2 左、右的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.percent(1, 2)
   */
  percent(value1: number, value2: number): string;
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 %。
   * @param value2 左、右的数值，自动附加 %。
   * @param value3 下的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.percent(1, 2, 3)
   */
  percent(value1: number, value2: number, value3: number): string;
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 上的数值，自动附加 %。
   * @param value2 右的数值，自动附加 %。
   * @param value3 下的数值，自动附加 %。
   * @param value4 左的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.padding.percent(1, 2, 3, 4)
   */
  percent(value1: number, value2: number, value3: number, value4: number): string;
  percent(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}%`).join(' '));
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.padding.calc('var(--value) * 2')
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
   * s.padding.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Padding | CssString, ...others: (Property.Padding | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.padding.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Padding | CssString, ...others: (Property.Padding | CssString)[]): string {
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
   * s.padding.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Padding | CssString,
    preferred: Property.Padding | CssString,
    maximum: Property.Padding | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-block 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingBlockKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-block:inherit;`。
   */
  readonly inherit: Property.PaddingBlock | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-block:initial;`。
   */
  readonly initial: Property.PaddingBlock | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-block:revert;`。
   */
  readonly revert: Property.PaddingBlock | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-block:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingBlock | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-block:unset;`。
   */
  readonly unset: Property.PaddingBlock | CssString = 'unset';
}

/**
 * 设置逻辑块轴起始侧和结束侧的内边距。（padding-block）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
 */
export class PaddingBlockCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-block:inherit;`。
   */
  readonly inherit: string = 'padding-block:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-block:initial;`。
   */
  readonly initial: string = 'padding-block:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-block:revert;`。
   */
  readonly revert: string = 'padding-block:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-block:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-block:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-block:unset;`。
   */
  readonly unset: string = 'padding-block:unset;';
  /**
   * 创建 padding-block 属性作者；普通使用通过 s.paddingBlock 取得共享实例。
   * @example
   * class CustomPaddingBlockCss extends PaddingBlockCss {}
   */
  constructor() {
    super('padding-block');
  }
  /**
   * 原样生成 padding-block 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-block:value;。
   * @example
   * s.paddingBlock.raw('inherit') // padding-block:inherit;
   */
  raw(value: Property.PaddingBlock | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.px(1)
   */
  px(value1: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 px。
   * @param value2 逻辑块轴结束侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.px(1, 2)
   */
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cm(1)
   */
  cm(value1: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cm。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cm(1, 2)
   */
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.mm(1)
   */
  mm(value1: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 mm。
   * @param value2 逻辑块轴结束侧的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.mm(1, 2)
   */
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.q(1)
   */
  q(value1: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 q。
   * @param value2 逻辑块轴结束侧的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.q(1, 2)
   */
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.in(1)
   */
  in(value1: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 in。
   * @param value2 逻辑块轴结束侧的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.in(1, 2)
   */
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.pt(1)
   */
  pt(value1: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 pt。
   * @param value2 逻辑块轴结束侧的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.pt(1, 2)
   */
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.pc(1)
   */
  pc(value1: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 pc。
   * @param value2 逻辑块轴结束侧的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.pc(1, 2)
   */
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.em(1)
   */
  em(value1: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 em。
   * @param value2 逻辑块轴结束侧的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.em(1, 2)
   */
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rem(1)
   */
  rem(value1: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 rem。
   * @param value2 逻辑块轴结束侧的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rem(1, 2)
   */
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ex(1)
   */
  ex(value1: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 ex。
   * @param value2 逻辑块轴结束侧的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ex(1, 2)
   */
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rex(1)
   */
  rex(value1: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 rex。
   * @param value2 逻辑块轴结束侧的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rex(1, 2)
   */
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ch(1)
   */
  ch(value1: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 ch。
   * @param value2 逻辑块轴结束侧的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ch(1, 2)
   */
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rch(1)
   */
  rch(value1: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 rch。
   * @param value2 逻辑块轴结束侧的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rch(1, 2)
   */
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cap(1)
   */
  cap(value1: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cap。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cap(1, 2)
   */
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rcap(1)
   */
  rcap(value1: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 rcap。
   * @param value2 逻辑块轴结束侧的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rcap(1, 2)
   */
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ic(1)
   */
  ic(value1: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 ic。
   * @param value2 逻辑块轴结束侧的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ic(1, 2)
   */
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ric(1)
   */
  ric(value1: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 ric。
   * @param value2 逻辑块轴结束侧的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.ric(1, 2)
   */
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lh(1)
   */
  lh(value1: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 lh。
   * @param value2 逻辑块轴结束侧的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lh(1, 2)
   */
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rlh(1)
   */
  rlh(value1: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 rlh。
   * @param value2 逻辑块轴结束侧的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.rlh(1, 2)
   */
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vw(1)
   */
  vw(value1: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 vw。
   * @param value2 逻辑块轴结束侧的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vw(1, 2)
   */
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vh(1)
   */
  vh(value1: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 vh。
   * @param value2 逻辑块轴结束侧的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vh(1, 2)
   */
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vi(1)
   */
  vi(value1: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 vi。
   * @param value2 逻辑块轴结束侧的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vi(1, 2)
   */
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vb(1)
   */
  vb(value1: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 vb。
   * @param value2 逻辑块轴结束侧的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vb(1, 2)
   */
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vmin(1)
   */
  vmin(value1: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 vmin。
   * @param value2 逻辑块轴结束侧的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vmin(1, 2)
   */
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vmax(1)
   */
  vmax(value1: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 vmax。
   * @param value2 逻辑块轴结束侧的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.vmax(1, 2)
   */
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svw(1)
   */
  svw(value1: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 svw。
   * @param value2 逻辑块轴结束侧的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svw(1, 2)
   */
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svh(1)
   */
  svh(value1: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 svh。
   * @param value2 逻辑块轴结束侧的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svh(1, 2)
   */
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svi(1)
   */
  svi(value1: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 svi。
   * @param value2 逻辑块轴结束侧的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svi(1, 2)
   */
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svb(1)
   */
  svb(value1: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 svb。
   * @param value2 逻辑块轴结束侧的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svb(1, 2)
   */
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svmin(1)
   */
  svmin(value1: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 svmin。
   * @param value2 逻辑块轴结束侧的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svmin(1, 2)
   */
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svmax(1)
   */
  svmax(value1: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 svmax。
   * @param value2 逻辑块轴结束侧的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.svmax(1, 2)
   */
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvw(1)
   */
  lvw(value1: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 lvw。
   * @param value2 逻辑块轴结束侧的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvw(1, 2)
   */
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvh(1)
   */
  lvh(value1: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 lvh。
   * @param value2 逻辑块轴结束侧的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvh(1, 2)
   */
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvi(1)
   */
  lvi(value1: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 lvi。
   * @param value2 逻辑块轴结束侧的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvi(1, 2)
   */
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvb(1)
   */
  lvb(value1: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 lvb。
   * @param value2 逻辑块轴结束侧的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvb(1, 2)
   */
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvmin(1)
   */
  lvmin(value1: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 lvmin。
   * @param value2 逻辑块轴结束侧的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvmin(1, 2)
   */
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvmax(1)
   */
  lvmax(value1: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 lvmax。
   * @param value2 逻辑块轴结束侧的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.lvmax(1, 2)
   */
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvw(1)
   */
  dvw(value1: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 dvw。
   * @param value2 逻辑块轴结束侧的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvw(1, 2)
   */
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvh(1)
   */
  dvh(value1: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 dvh。
   * @param value2 逻辑块轴结束侧的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvh(1, 2)
   */
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvi(1)
   */
  dvi(value1: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 dvi。
   * @param value2 逻辑块轴结束侧的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvi(1, 2)
   */
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvb(1)
   */
  dvb(value1: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 dvb。
   * @param value2 逻辑块轴结束侧的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvb(1, 2)
   */
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvmin(1)
   */
  dvmin(value1: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 dvmin。
   * @param value2 逻辑块轴结束侧的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvmin(1, 2)
   */
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvmax(1)
   */
  dvmax(value1: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 dvmax。
   * @param value2 逻辑块轴结束侧的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.dvmax(1, 2)
   */
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqw(1)
   */
  cqw(value1: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cqw。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqw(1, 2)
   */
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqh(1)
   */
  cqh(value1: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cqh。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqh(1, 2)
   */
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqi(1)
   */
  cqi(value1: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cqi。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqi(1, 2)
   */
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqb(1)
   */
  cqb(value1: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cqb。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqb(1, 2)
   */
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqmin(1)
   */
  cqmin(value1: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cqmin。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqmin(1, 2)
   */
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqmax(1)
   */
  cqmax(value1: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 cqmax。
   * @param value2 逻辑块轴结束侧的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.percent(1)
   */
  percent(value1: number): string;
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴起始侧的数值，自动附加 %。
   * @param value2 逻辑块轴结束侧的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBlock.percent(1, 2)
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
   * s.paddingBlock.calc('var(--value) * 2')
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
   * s.paddingBlock.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingBlock | CssString,
    ...others: (Property.PaddingBlock | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingBlock.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingBlock | CssString,
    ...others: (Property.PaddingBlock | CssString)[]
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
   * s.paddingBlock.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingBlock | CssString,
    preferred: Property.PaddingBlock | CssString,
    maximum: Property.PaddingBlock | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-block-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingBlockEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-block-end:inherit;`。
   */
  readonly inherit: Property.PaddingBlockEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-block-end:initial;`。
   */
  readonly initial: Property.PaddingBlockEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-block-end:revert;`。
   */
  readonly revert: Property.PaddingBlockEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-block-end:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingBlockEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-block-end:unset;`。
   */
  readonly unset: Property.PaddingBlockEnd | CssString = 'unset';
}

/**
 * 设置逻辑块轴结束侧的内边距。（padding-block-end）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
 */
export class PaddingBlockEndCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-block-end:inherit;`。
   */
  readonly inherit: string = 'padding-block-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-block-end:initial;`。
   */
  readonly initial: string = 'padding-block-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-block-end:revert;`。
   */
  readonly revert: string = 'padding-block-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-block-end:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-block-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-block-end:unset;`。
   */
  readonly unset: string = 'padding-block-end:unset;';
  /**
   * 创建 padding-block-end 属性作者；普通使用通过 s.paddingBlockEnd 取得共享实例。
   * @example
   * class CustomPaddingBlockEndCss extends PaddingBlockEndCss {}
   */
  constructor() {
    super('padding-block-end');
  }
  /**
   * 原样生成 padding-block-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-block-end:value;。
   * @example
   * s.paddingBlockEnd.raw('inherit') // padding-block-end:inherit;
   */
  raw(value: Property.PaddingBlockEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingBlockEnd.calc('var(--value) * 2')
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
   * s.paddingBlockEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingBlockEnd | CssString,
    ...others: (Property.PaddingBlockEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingBlockEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingBlockEnd | CssString,
    ...others: (Property.PaddingBlockEnd | CssString)[]
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
   * s.paddingBlockEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingBlockEnd | CssString,
    preferred: Property.PaddingBlockEnd | CssString,
    maximum: Property.PaddingBlockEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-block-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingBlockStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-block-start:inherit;`。
   */
  readonly inherit: Property.PaddingBlockStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-block-start:initial;`。
   */
  readonly initial: Property.PaddingBlockStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-block-start:revert;`。
   */
  readonly revert: Property.PaddingBlockStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-block-start:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingBlockStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-block-start:unset;`。
   */
  readonly unset: Property.PaddingBlockStart | CssString = 'unset';
}

/**
 * 设置逻辑块轴起始侧的内边距。（padding-block-start）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
 */
export class PaddingBlockStartCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-block-start:inherit;`。
   */
  readonly inherit: string = 'padding-block-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-block-start:initial;`。
   */
  readonly initial: string = 'padding-block-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-block-start:revert;`。
   */
  readonly revert: string = 'padding-block-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-block-start:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-block-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-block-start:unset;`。
   */
  readonly unset: string = 'padding-block-start:unset;';
  /**
   * 创建 padding-block-start 属性作者；普通使用通过 s.paddingBlockStart 取得共享实例。
   * @example
   * class CustomPaddingBlockStartCss extends PaddingBlockStartCss {}
   */
  constructor() {
    super('padding-block-start');
  }
  /**
   * 原样生成 padding-block-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-block-start:value;。
   * @example
   * s.paddingBlockStart.raw('inherit') // padding-block-start:inherit;
   */
  raw(value: Property.PaddingBlockStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingBlockStart.calc('var(--value) * 2')
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
   * s.paddingBlockStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingBlockStart | CssString,
    ...others: (Property.PaddingBlockStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingBlockStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingBlockStart | CssString,
    ...others: (Property.PaddingBlockStart | CssString)[]
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
   * s.paddingBlockStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingBlockStart | CssString,
    preferred: Property.PaddingBlockStart | CssString,
    maximum: Property.PaddingBlockStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-bottom 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingBottomKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-bottom:inherit;`。
   */
  readonly inherit: Property.PaddingBottom | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-bottom:initial;`。
   */
  readonly initial: Property.PaddingBottom | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-bottom:revert;`。
   */
  readonly revert: Property.PaddingBottom | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-bottom:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingBottom | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-bottom:unset;`。
   */
  readonly unset: Property.PaddingBottom | CssString = 'unset';
}

/**
 * 设置下内边距。（padding-bottom）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
 */
export class PaddingBottomCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-bottom:inherit;`。
   */
  readonly inherit: string = 'padding-bottom:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-bottom:initial;`。
   */
  readonly initial: string = 'padding-bottom:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-bottom:revert;`。
   */
  readonly revert: string = 'padding-bottom:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-bottom:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-bottom:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-bottom:unset;`。
   */
  readonly unset: string = 'padding-bottom:unset;';
  /**
   * 创建 padding-bottom 属性作者；普通使用通过 s.paddingBottom 取得共享实例。
   * @example
   * class CustomPaddingBottomCss extends PaddingBottomCss {}
   */
  constructor() {
    super('padding-bottom');
  }
  /**
   * 原样生成 padding-bottom 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-bottom:value;。
   * @example
   * s.paddingBottom.raw('inherit') // padding-bottom:inherit;
   */
  raw(value: Property.PaddingBottom | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingBottom.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingBottom.calc('var(--value) * 2')
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
   * s.paddingBottom.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingBottom | CssString,
    ...others: (Property.PaddingBottom | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingBottom.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingBottom | CssString,
    ...others: (Property.PaddingBottom | CssString)[]
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
   * s.paddingBottom.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingBottom | CssString,
    preferred: Property.PaddingBottom | CssString,
    maximum: Property.PaddingBottom | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-inline 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingInlineKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-inline:inherit;`。
   */
  readonly inherit: Property.PaddingInline | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-inline:initial;`。
   */
  readonly initial: Property.PaddingInline | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-inline:revert;`。
   */
  readonly revert: Property.PaddingInline | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-inline:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingInline | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-inline:unset;`。
   */
  readonly unset: Property.PaddingInline | CssString = 'unset';
}

/**
 * 设置逻辑行内轴起始侧和结束侧的内边距。（padding-inline）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
 */
export class PaddingInlineCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-inline:inherit;`。
   */
  readonly inherit: string = 'padding-inline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-inline:initial;`。
   */
  readonly initial: string = 'padding-inline:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-inline:revert;`。
   */
  readonly revert: string = 'padding-inline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-inline:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-inline:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-inline:unset;`。
   */
  readonly unset: string = 'padding-inline:unset;';
  /**
   * 创建 padding-inline 属性作者；普通使用通过 s.paddingInline 取得共享实例。
   * @example
   * class CustomPaddingInlineCss extends PaddingInlineCss {}
   */
  constructor() {
    super('padding-inline');
  }
  /**
   * 原样生成 padding-inline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-inline:value;。
   * @example
   * s.paddingInline.raw('inherit') // padding-inline:inherit;
   */
  raw(value: Property.PaddingInline | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.px(1)
   */
  px(value1: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 px。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.px(1, 2)
   */
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cm(1)
   */
  cm(value1: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cm。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cm(1, 2)
   */
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.mm(1)
   */
  mm(value1: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 mm。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.mm(1, 2)
   */
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.q(1)
   */
  q(value1: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 q。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.q(1, 2)
   */
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.in(1)
   */
  in(value1: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 in。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.in(1, 2)
   */
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.pt(1)
   */
  pt(value1: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 pt。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.pt(1, 2)
   */
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.pc(1)
   */
  pc(value1: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 pc。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.pc(1, 2)
   */
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.em(1)
   */
  em(value1: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 em。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.em(1, 2)
   */
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rem(1)
   */
  rem(value1: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 rem。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rem(1, 2)
   */
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ex(1)
   */
  ex(value1: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 ex。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ex(1, 2)
   */
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rex(1)
   */
  rex(value1: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 rex。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rex(1, 2)
   */
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ch(1)
   */
  ch(value1: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 ch。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ch(1, 2)
   */
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rch(1)
   */
  rch(value1: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 rch。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rch(1, 2)
   */
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cap(1)
   */
  cap(value1: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cap。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cap(1, 2)
   */
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rcap(1)
   */
  rcap(value1: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 rcap。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rcap(1, 2)
   */
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ic(1)
   */
  ic(value1: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 ic。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ic(1, 2)
   */
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ric(1)
   */
  ric(value1: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 ric。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.ric(1, 2)
   */
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lh(1)
   */
  lh(value1: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 lh。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lh(1, 2)
   */
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rlh(1)
   */
  rlh(value1: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 rlh。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.rlh(1, 2)
   */
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vw(1)
   */
  vw(value1: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 vw。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vw(1, 2)
   */
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vh(1)
   */
  vh(value1: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 vh。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vh(1, 2)
   */
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vi(1)
   */
  vi(value1: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 vi。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vi(1, 2)
   */
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vb(1)
   */
  vb(value1: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 vb。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vb(1, 2)
   */
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vmin(1)
   */
  vmin(value1: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 vmin。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vmin(1, 2)
   */
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vmax(1)
   */
  vmax(value1: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 vmax。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.vmax(1, 2)
   */
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svw(1)
   */
  svw(value1: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 svw。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svw(1, 2)
   */
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svh(1)
   */
  svh(value1: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 svh。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svh(1, 2)
   */
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svi(1)
   */
  svi(value1: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 svi。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svi(1, 2)
   */
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svb(1)
   */
  svb(value1: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 svb。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svb(1, 2)
   */
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svmin(1)
   */
  svmin(value1: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 svmin。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svmin(1, 2)
   */
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svmax(1)
   */
  svmax(value1: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 svmax。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.svmax(1, 2)
   */
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvw(1)
   */
  lvw(value1: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 lvw。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvw(1, 2)
   */
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvh(1)
   */
  lvh(value1: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 lvh。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvh(1, 2)
   */
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvi(1)
   */
  lvi(value1: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 lvi。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvi(1, 2)
   */
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvb(1)
   */
  lvb(value1: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 lvb。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvb(1, 2)
   */
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvmin(1)
   */
  lvmin(value1: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 lvmin。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvmin(1, 2)
   */
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvmax(1)
   */
  lvmax(value1: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 lvmax。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.lvmax(1, 2)
   */
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvw(1)
   */
  dvw(value1: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 dvw。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvw(1, 2)
   */
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvh(1)
   */
  dvh(value1: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 dvh。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvh(1, 2)
   */
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvi(1)
   */
  dvi(value1: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 dvi。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvi(1, 2)
   */
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvb(1)
   */
  dvb(value1: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 dvb。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvb(1, 2)
   */
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvmin(1)
   */
  dvmin(value1: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 dvmin。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvmin(1, 2)
   */
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvmax(1)
   */
  dvmax(value1: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 dvmax。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.dvmax(1, 2)
   */
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqw(1)
   */
  cqw(value1: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cqw。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqw(1, 2)
   */
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqh(1)
   */
  cqh(value1: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cqh。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqh(1, 2)
   */
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqi(1)
   */
  cqi(value1: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cqi。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqi(1, 2)
   */
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqb(1)
   */
  cqb(value1: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cqb。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqb(1, 2)
   */
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqmin(1)
   */
  cqmin(value1: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cqmin。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqmin(1, 2)
   */
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqmax(1)
   */
  cqmax(value1: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 cqmax。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.percent(1)
   */
  percent(value1: number): string;
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴起始侧的数值，自动附加 %。
   * @param value2 逻辑行内轴结束侧的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingInline.percent(1, 2)
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
   * s.paddingInline.calc('var(--value) * 2')
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
   * s.paddingInline.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingInline | CssString,
    ...others: (Property.PaddingInline | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingInline.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingInline | CssString,
    ...others: (Property.PaddingInline | CssString)[]
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
   * s.paddingInline.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingInline | CssString,
    preferred: Property.PaddingInline | CssString,
    maximum: Property.PaddingInline | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-inline-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingInlineEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-inline-end:inherit;`。
   */
  readonly inherit: Property.PaddingInlineEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-inline-end:initial;`。
   */
  readonly initial: Property.PaddingInlineEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-inline-end:revert;`。
   */
  readonly revert: Property.PaddingInlineEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-inline-end:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingInlineEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-inline-end:unset;`。
   */
  readonly unset: Property.PaddingInlineEnd | CssString = 'unset';
}

/**
 * 设置逻辑行内轴结束侧的内边距。（padding-inline-end）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
 */
export class PaddingInlineEndCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-inline-end:inherit;`。
   */
  readonly inherit: string = 'padding-inline-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-inline-end:initial;`。
   */
  readonly initial: string = 'padding-inline-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-inline-end:revert;`。
   */
  readonly revert: string = 'padding-inline-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-inline-end:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-inline-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-inline-end:unset;`。
   */
  readonly unset: string = 'padding-inline-end:unset;';
  /**
   * 创建 padding-inline-end 属性作者；普通使用通过 s.paddingInlineEnd 取得共享实例。
   * @example
   * class CustomPaddingInlineEndCss extends PaddingInlineEndCss {}
   */
  constructor() {
    super('padding-inline-end');
  }
  /**
   * 原样生成 padding-inline-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-inline-end:value;。
   * @example
   * s.paddingInlineEnd.raw('inherit') // padding-inline-end:inherit;
   */
  raw(value: Property.PaddingInlineEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingInlineEnd.calc('var(--value) * 2')
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
   * s.paddingInlineEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingInlineEnd | CssString,
    ...others: (Property.PaddingInlineEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingInlineEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingInlineEnd | CssString,
    ...others: (Property.PaddingInlineEnd | CssString)[]
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
   * s.paddingInlineEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingInlineEnd | CssString,
    preferred: Property.PaddingInlineEnd | CssString,
    maximum: Property.PaddingInlineEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-inline-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingInlineStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-inline-start:inherit;`。
   */
  readonly inherit: Property.PaddingInlineStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-inline-start:initial;`。
   */
  readonly initial: Property.PaddingInlineStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-inline-start:revert;`。
   */
  readonly revert: Property.PaddingInlineStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-inline-start:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingInlineStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-inline-start:unset;`。
   */
  readonly unset: Property.PaddingInlineStart | CssString = 'unset';
}

/**
 * 设置逻辑行内轴起始侧的内边距。（padding-inline-start）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
 */
export class PaddingInlineStartCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-inline-start:inherit;`。
   */
  readonly inherit: string = 'padding-inline-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-inline-start:initial;`。
   */
  readonly initial: string = 'padding-inline-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-inline-start:revert;`。
   */
  readonly revert: string = 'padding-inline-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-inline-start:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-inline-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-inline-start:unset;`。
   */
  readonly unset: string = 'padding-inline-start:unset;';
  /**
   * 创建 padding-inline-start 属性作者；普通使用通过 s.paddingInlineStart 取得共享实例。
   * @example
   * class CustomPaddingInlineStartCss extends PaddingInlineStartCss {}
   */
  constructor() {
    super('padding-inline-start');
  }
  /**
   * 原样生成 padding-inline-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-inline-start:value;。
   * @example
   * s.paddingInlineStart.raw('inherit') // padding-inline-start:inherit;
   */
  raw(value: Property.PaddingInlineStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingInlineStart.calc('var(--value) * 2')
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
   * s.paddingInlineStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingInlineStart | CssString,
    ...others: (Property.PaddingInlineStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingInlineStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingInlineStart | CssString,
    ...others: (Property.PaddingInlineStart | CssString)[]
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
   * s.paddingInlineStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingInlineStart | CssString,
    preferred: Property.PaddingInlineStart | CssString,
    maximum: Property.PaddingInlineStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-left 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingLeftKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-left:inherit;`。
   */
  readonly inherit: Property.PaddingLeft | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-left:initial;`。
   */
  readonly initial: Property.PaddingLeft | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-left:revert;`。
   */
  readonly revert: Property.PaddingLeft | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-left:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingLeft | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-left:unset;`。
   */
  readonly unset: Property.PaddingLeft | CssString = 'unset';
}

/**
 * 设置左内边距。（padding-left）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
 */
export class PaddingLeftCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-left:inherit;`。
   */
  readonly inherit: string = 'padding-left:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-left:initial;`。
   */
  readonly initial: string = 'padding-left:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-left:revert;`。
   */
  readonly revert: string = 'padding-left:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-left:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-left:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-left:unset;`。
   */
  readonly unset: string = 'padding-left:unset;';
  /**
   * 创建 padding-left 属性作者；普通使用通过 s.paddingLeft 取得共享实例。
   * @example
   * class CustomPaddingLeftCss extends PaddingLeftCss {}
   */
  constructor() {
    super('padding-left');
  }
  /**
   * 原样生成 padding-left 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-left:value;。
   * @example
   * s.paddingLeft.raw('inherit') // padding-left:inherit;
   */
  raw(value: Property.PaddingLeft | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingLeft.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingLeft.calc('var(--value) * 2')
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
   * s.paddingLeft.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingLeft | CssString,
    ...others: (Property.PaddingLeft | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingLeft.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingLeft | CssString,
    ...others: (Property.PaddingLeft | CssString)[]
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
   * s.paddingLeft.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingLeft | CssString,
    preferred: Property.PaddingLeft | CssString,
    maximum: Property.PaddingLeft | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-right 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingRightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-right:inherit;`。
   */
  readonly inherit: Property.PaddingRight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-right:initial;`。
   */
  readonly initial: Property.PaddingRight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-right:revert;`。
   */
  readonly revert: Property.PaddingRight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-right:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingRight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-right:unset;`。
   */
  readonly unset: Property.PaddingRight | CssString = 'unset';
}

/**
 * 设置右内边距。（padding-right）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
 */
export class PaddingRightCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-right:inherit;`。
   */
  readonly inherit: string = 'padding-right:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-right:initial;`。
   */
  readonly initial: string = 'padding-right:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-right:revert;`。
   */
  readonly revert: string = 'padding-right:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-right:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-right:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-right:unset;`。
   */
  readonly unset: string = 'padding-right:unset;';
  /**
   * 创建 padding-right 属性作者；普通使用通过 s.paddingRight 取得共享实例。
   * @example
   * class CustomPaddingRightCss extends PaddingRightCss {}
   */
  constructor() {
    super('padding-right');
  }
  /**
   * 原样生成 padding-right 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-right:value;。
   * @example
   * s.paddingRight.raw('inherit') // padding-right:inherit;
   */
  raw(value: Property.PaddingRight | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingRight.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingRight.calc('var(--value) * 2')
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
   * s.paddingRight.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingRight | CssString,
    ...others: (Property.PaddingRight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingRight.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingRight | CssString,
    ...others: (Property.PaddingRight | CssString)[]
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
   * s.paddingRight.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingRight | CssString,
    preferred: Property.PaddingRight | CssString,
    maximum: Property.PaddingRight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * padding-top 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaddingTopKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-top:inherit;`。
   */
  readonly inherit: Property.PaddingTop | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-top:initial;`。
   */
  readonly initial: Property.PaddingTop | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-top:revert;`。
   */
  readonly revert: Property.PaddingTop | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-top:revert-layer;`。
   */
  readonly revertLayer: Property.PaddingTop | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-top:unset;`。
   */
  readonly unset: Property.PaddingTop | CssString = 'unset';
}

/**
 * 设置上内边距。（padding-top）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
 */
export class PaddingTopCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`padding-top:inherit;`。
   */
  readonly inherit: string = 'padding-top:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`padding-top:initial;`。
   */
  readonly initial: string = 'padding-top:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`padding-top:revert;`。
   */
  readonly revert: string = 'padding-top:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`padding-top:revert-layer;`。
   */
  readonly revertLayer: string = 'padding-top:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`padding-top:unset;`。
   */
  readonly unset: string = 'padding-top:unset;';
  /**
   * 创建 padding-top 属性作者；普通使用通过 s.paddingTop 取得共享实例。
   * @example
   * class CustomPaddingTopCss extends PaddingTopCss {}
   */
  constructor() {
    super('padding-top');
  }
  /**
   * 原样生成 padding-top 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 padding-top:value;。
   * @example
   * s.paddingTop.raw('inherit') // padding-top:inherit;
   */
  raw(value: Property.PaddingTop | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.paddingTop.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.paddingTop.calc('var(--value) * 2')
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
   * s.paddingTop.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PaddingTop | CssString,
    ...others: (Property.PaddingTop | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.paddingTop.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PaddingTop | CssString,
    ...others: (Property.PaddingTop | CssString)[]
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
   * s.paddingTop.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PaddingTop | CssString,
    preferred: Property.PaddingTop | CssString,
    maximum: Property.PaddingTop | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * page 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PageKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`page:auto;`。 */
  readonly auto: Property.Page | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`page:inherit;`。
   */
  readonly inherit: Property.Page | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`page:initial;`。
   */
  readonly initial: Property.Page | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`page:revert;`。
   */
  readonly revert: Property.Page | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`page:revert-layer;`。
   */
  readonly revertLayer: Property.Page | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`page:unset;`。
   */
  readonly unset: Property.Page | CssString = 'unset';
}

/**
 * 选择分页媒体中使用的命名页面类型。（page）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
 */
export class PageCss extends CssProperty {
  /** CSS 声明：`page:auto;`。 */
  readonly auto: string = 'page:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`page:inherit;`。
   */
  readonly inherit: string = 'page:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`page:initial;`。
   */
  readonly initial: string = 'page:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`page:revert;`。
   */
  readonly revert: string = 'page:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`page:revert-layer;`。
   */
  readonly revertLayer: string = 'page:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`page:unset;`。
   */
  readonly unset: string = 'page:unset;';
  /**
   * 创建 page 属性作者；普通使用通过 s.page 取得共享实例。
   * @example
   * class CustomPageCss extends PageCss {}
   */
  constructor() {
    super('page');
  }
  /**
   * 原样生成 page 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 page:value;。
   * @example
   * s.page.raw('inherit') // page:inherit;
   */
  raw(value: Property.Page | CssString): string {
    return this.declaration(value);
  }
}

/**
 * paint-order 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PaintOrderKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`paint-order:fill;`。 */
  readonly fill: Property.PaintOrder | CssString = 'fill';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`paint-order:inherit;`。
   */
  readonly inherit: Property.PaintOrder | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`paint-order:initial;`。
   */
  readonly initial: Property.PaintOrder | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`paint-order:markers;`。 */
  readonly markers: Property.PaintOrder | CssString = 'markers';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`paint-order:normal;`。 */
  readonly normal: Property.PaintOrder | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`paint-order:revert;`。
   */
  readonly revert: Property.PaintOrder | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`paint-order:revert-layer;`。
   */
  readonly revertLayer: Property.PaintOrder | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`paint-order:stroke;`。 */
  readonly stroke: Property.PaintOrder | CssString = 'stroke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`paint-order:unset;`。
   */
  readonly unset: Property.PaintOrder | CssString = 'unset';
}

/**
 * 设置 SVG 填充、描边和标记的绘制先后顺序。（paint-order）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
 */
export class PaintOrderCss extends CssProperty {
  /** CSS 声明：`paint-order:fill;`。 */
  readonly fill: string = 'paint-order:fill;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`paint-order:inherit;`。
   */
  readonly inherit: string = 'paint-order:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`paint-order:initial;`。
   */
  readonly initial: string = 'paint-order:initial;';
  /** CSS 声明：`paint-order:markers;`。 */
  readonly markers: string = 'paint-order:markers;';
  /** CSS 声明：`paint-order:normal;`。 */
  readonly normal: string = 'paint-order:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`paint-order:revert;`。
   */
  readonly revert: string = 'paint-order:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`paint-order:revert-layer;`。
   */
  readonly revertLayer: string = 'paint-order:revert-layer;';
  /** CSS 声明：`paint-order:stroke;`。 */
  readonly stroke: string = 'paint-order:stroke;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`paint-order:unset;`。
   */
  readonly unset: string = 'paint-order:unset;';
  /**
   * 创建 paint-order 属性作者；普通使用通过 s.paintOrder 取得共享实例。
   * @example
   * class CustomPaintOrderCss extends PaintOrderCss {}
   */
  constructor() {
    super('paint-order');
  }
  /**
   * 原样生成 paint-order 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 paint-order:value;。
   * @example
   * s.paintOrder.raw('inherit') // paint-order:inherit;
   */
  raw(value: Property.PaintOrder | CssString): string {
    return this.declaration(value);
  }
}

/**
 * perspective 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PerspectiveKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`perspective:inherit;`。
   */
  readonly inherit: Property.Perspective | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`perspective:initial;`。
   */
  readonly initial: Property.Perspective | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`perspective:none;`。 */
  readonly none: Property.Perspective | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`perspective:revert;`。
   */
  readonly revert: Property.Perspective | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`perspective:revert-layer;`。
   */
  readonly revertLayer: Property.Perspective | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`perspective:unset;`。
   */
  readonly unset: Property.Perspective | CssString = 'unset';
}

/**
 * 设置观察子元素三维变换时的透视距离。（perspective）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
 */
export class PerspectiveCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`perspective:inherit;`。
   */
  readonly inherit: string = 'perspective:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`perspective:initial;`。
   */
  readonly initial: string = 'perspective:initial;';
  /** CSS 声明：`perspective:none;`。 */
  readonly none: string = 'perspective:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`perspective:revert;`。
   */
  readonly revert: string = 'perspective:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`perspective:revert-layer;`。
   */
  readonly revertLayer: string = 'perspective:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`perspective:unset;`。
   */
  readonly unset: string = 'perspective:unset;';
  /**
   * 创建 perspective 属性作者；普通使用通过 s.perspective 取得共享实例。
   * @example
   * class CustomPerspectiveCss extends PerspectiveCss {}
   */
  constructor() {
    super('perspective');
  }
  /**
   * 原样生成 perspective 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 perspective:value;。
   * @example
   * s.perspective.raw('inherit') // perspective:inherit;
   */
  raw(value: Property.Perspective | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.perspective.calc('var(--value) * 2')
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
   * s.perspective.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.Perspective | CssString,
    ...others: (Property.Perspective | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.perspective.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.Perspective | CssString,
    ...others: (Property.Perspective | CssString)[]
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
   * s.perspective.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Perspective | CssString,
    preferred: Property.Perspective | CssString,
    maximum: Property.Perspective | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * perspective-origin 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PerspectiveOriginKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`perspective-origin:bottom;`。 */
  readonly bottom: Property.PerspectiveOrigin | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`perspective-origin:center;`。 */
  readonly center: Property.PerspectiveOrigin | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`perspective-origin:inherit;`。
   */
  readonly inherit: Property.PerspectiveOrigin | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`perspective-origin:initial;`。
   */
  readonly initial: Property.PerspectiveOrigin | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`perspective-origin:left;`。 */
  readonly left: Property.PerspectiveOrigin | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`perspective-origin:revert;`。
   */
  readonly revert: Property.PerspectiveOrigin | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`perspective-origin:revert-layer;`。
   */
  readonly revertLayer: Property.PerspectiveOrigin | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`perspective-origin:right;`。 */
  readonly right: Property.PerspectiveOrigin | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`perspective-origin:top;`。 */
  readonly top: Property.PerspectiveOrigin | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`perspective-origin:unset;`。
   */
  readonly unset: Property.PerspectiveOrigin | CssString = 'unset';
}

/**
 * 设置三维透视的观察原点。（perspective-origin）
 *
 * CSS 初始值：`50% 50%`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
 */
export class PerspectiveOriginCss extends LengthCssProperty {
  /** CSS 声明：`perspective-origin:bottom;`。 */
  readonly bottom: string = 'perspective-origin:bottom;';
  /** CSS 声明：`perspective-origin:center;`。 */
  readonly center: string = 'perspective-origin:center;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`perspective-origin:inherit;`。
   */
  readonly inherit: string = 'perspective-origin:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`perspective-origin:initial;`。
   */
  readonly initial: string = 'perspective-origin:initial;';
  /** CSS 声明：`perspective-origin:left;`。 */
  readonly left: string = 'perspective-origin:left;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`perspective-origin:revert;`。
   */
  readonly revert: string = 'perspective-origin:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`perspective-origin:revert-layer;`。
   */
  readonly revertLayer: string = 'perspective-origin:revert-layer;';
  /** CSS 声明：`perspective-origin:right;`。 */
  readonly right: string = 'perspective-origin:right;';
  /** CSS 声明：`perspective-origin:top;`。 */
  readonly top: string = 'perspective-origin:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`perspective-origin:unset;`。
   */
  readonly unset: string = 'perspective-origin:unset;';
  /**
   * 创建 perspective-origin 属性作者；普通使用通过 s.perspectiveOrigin 取得共享实例。
   * @example
   * class CustomPerspectiveOriginCss extends PerspectiveOriginCss {}
   */
  constructor() {
    super('perspective-origin');
  }
  /**
   * 原样生成 perspective-origin 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 perspective-origin:value;。
   * @example
   * s.perspectiveOrigin.raw('inherit') // perspective-origin:inherit;
   */
  raw(value: Property.PerspectiveOrigin | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.perspectiveOrigin.calc('var(--value) * 2')
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
   * s.perspectiveOrigin.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.PerspectiveOrigin | CssString,
    ...others: (Property.PerspectiveOrigin | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.perspectiveOrigin.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.PerspectiveOrigin | CssString,
    ...others: (Property.PerspectiveOrigin | CssString)[]
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
   * s.perspectiveOrigin.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.PerspectiveOrigin | CssString,
    preferred: Property.PerspectiveOrigin | CssString,
    maximum: Property.PerspectiveOrigin | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * place-content 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PlaceContentKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:baseline;`。 */
  readonly baseline: Property.PlaceContent | CssString = 'baseline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:center;`。 */
  readonly center: Property.PlaceContent | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:end;`。 */
  readonly end: Property.PlaceContent | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:flex-end;`。 */
  readonly flexEnd: Property.PlaceContent | CssString = 'flex-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:flex-start;`。 */
  readonly flexStart: Property.PlaceContent | CssString = 'flex-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`place-content:inherit;`。
   */
  readonly inherit: Property.PlaceContent | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`place-content:initial;`。
   */
  readonly initial: Property.PlaceContent | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:normal;`。 */
  readonly normal: Property.PlaceContent | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`place-content:revert;`。
   */
  readonly revert: Property.PlaceContent | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`place-content:revert-layer;`。
   */
  readonly revertLayer: Property.PlaceContent | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:space-around;`。 */
  readonly spaceAround: Property.PlaceContent | CssString = 'space-around';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:space-between;`。 */
  readonly spaceBetween: Property.PlaceContent | CssString = 'space-between';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:space-evenly;`。 */
  readonly spaceEvenly: Property.PlaceContent | CssString = 'space-evenly';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:start;`。 */
  readonly start: Property.PlaceContent | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-content:stretch;`。 */
  readonly stretch: Property.PlaceContent | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`place-content:unset;`。
   */
  readonly unset: Property.PlaceContent | CssString = 'unset';
}

/**
 * 同时设置 align-content 与 justify-content。（place-content）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
 */
export class PlaceContentCss extends CssProperty {
  /** CSS 声明：`place-content:baseline;`。 */
  readonly baseline: string = 'place-content:baseline;';
  /** CSS 声明：`place-content:center;`。 */
  readonly center: string = 'place-content:center;';
  /** CSS 声明：`place-content:end;`。 */
  readonly end: string = 'place-content:end;';
  /** CSS 声明：`place-content:flex-end;`。 */
  readonly flexEnd: string = 'place-content:flex-end;';
  /** CSS 声明：`place-content:flex-start;`。 */
  readonly flexStart: string = 'place-content:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`place-content:inherit;`。
   */
  readonly inherit: string = 'place-content:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`place-content:initial;`。
   */
  readonly initial: string = 'place-content:initial;';
  /** CSS 声明：`place-content:normal;`。 */
  readonly normal: string = 'place-content:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`place-content:revert;`。
   */
  readonly revert: string = 'place-content:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`place-content:revert-layer;`。
   */
  readonly revertLayer: string = 'place-content:revert-layer;';
  /** CSS 声明：`place-content:space-around;`。 */
  readonly spaceAround: string = 'place-content:space-around;';
  /** CSS 声明：`place-content:space-between;`。 */
  readonly spaceBetween: string = 'place-content:space-between;';
  /** CSS 声明：`place-content:space-evenly;`。 */
  readonly spaceEvenly: string = 'place-content:space-evenly;';
  /** CSS 声明：`place-content:start;`。 */
  readonly start: string = 'place-content:start;';
  /** CSS 声明：`place-content:stretch;`。 */
  readonly stretch: string = 'place-content:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`place-content:unset;`。
   */
  readonly unset: string = 'place-content:unset;';
  /**
   * 创建 place-content 属性作者；普通使用通过 s.placeContent 取得共享实例。
   * @example
   * class CustomPlaceContentCss extends PlaceContentCss {}
   */
  constructor() {
    super('place-content');
  }
  /**
   * 原样生成 place-content 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 place-content:value;。
   * @example
   * s.placeContent.raw('inherit') // place-content:inherit;
   */
  raw(value: Property.PlaceContent | CssString): string {
    return this.declaration(value);
  }
}

/**
 * place-items 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PlaceItemsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:anchor-center;`。 */
  readonly anchorCenter: Property.PlaceItems | CssString = 'anchor-center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:baseline;`。 */
  readonly baseline: Property.PlaceItems | CssString = 'baseline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:center;`。 */
  readonly center: Property.PlaceItems | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:end;`。 */
  readonly end: Property.PlaceItems | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:flex-end;`。 */
  readonly flexEnd: Property.PlaceItems | CssString = 'flex-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:flex-start;`。 */
  readonly flexStart: Property.PlaceItems | CssString = 'flex-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`place-items:inherit;`。
   */
  readonly inherit: Property.PlaceItems | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`place-items:initial;`。
   */
  readonly initial: Property.PlaceItems | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:normal;`。 */
  readonly normal: Property.PlaceItems | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`place-items:revert;`。
   */
  readonly revert: Property.PlaceItems | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`place-items:revert-layer;`。
   */
  readonly revertLayer: Property.PlaceItems | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:self-end;`。 */
  readonly selfEnd: Property.PlaceItems | CssString = 'self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:self-start;`。 */
  readonly selfStart: Property.PlaceItems | CssString = 'self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:start;`。 */
  readonly start: Property.PlaceItems | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-items:stretch;`。 */
  readonly stretch: Property.PlaceItems | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`place-items:unset;`。
   */
  readonly unset: Property.PlaceItems | CssString = 'unset';
}

/**
 * 同时设置 align-items 与 justify-items。（place-items）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
 */
export class PlaceItemsCss extends CssProperty {
  /** CSS 声明：`place-items:anchor-center;`。 */
  readonly anchorCenter: string = 'place-items:anchor-center;';
  /** CSS 声明：`place-items:baseline;`。 */
  readonly baseline: string = 'place-items:baseline;';
  /** CSS 声明：`place-items:center;`。 */
  readonly center: string = 'place-items:center;';
  /** CSS 声明：`place-items:end;`。 */
  readonly end: string = 'place-items:end;';
  /** CSS 声明：`place-items:flex-end;`。 */
  readonly flexEnd: string = 'place-items:flex-end;';
  /** CSS 声明：`place-items:flex-start;`。 */
  readonly flexStart: string = 'place-items:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`place-items:inherit;`。
   */
  readonly inherit: string = 'place-items:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`place-items:initial;`。
   */
  readonly initial: string = 'place-items:initial;';
  /** CSS 声明：`place-items:normal;`。 */
  readonly normal: string = 'place-items:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`place-items:revert;`。
   */
  readonly revert: string = 'place-items:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`place-items:revert-layer;`。
   */
  readonly revertLayer: string = 'place-items:revert-layer;';
  /** CSS 声明：`place-items:self-end;`。 */
  readonly selfEnd: string = 'place-items:self-end;';
  /** CSS 声明：`place-items:self-start;`。 */
  readonly selfStart: string = 'place-items:self-start;';
  /** CSS 声明：`place-items:start;`。 */
  readonly start: string = 'place-items:start;';
  /** CSS 声明：`place-items:stretch;`。 */
  readonly stretch: string = 'place-items:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`place-items:unset;`。
   */
  readonly unset: string = 'place-items:unset;';
  /**
   * 创建 place-items 属性作者；普通使用通过 s.placeItems 取得共享实例。
   * @example
   * class CustomPlaceItemsCss extends PlaceItemsCss {}
   */
  constructor() {
    super('place-items');
  }
  /**
   * 原样生成 place-items 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 place-items:value;。
   * @example
   * s.placeItems.raw('inherit') // place-items:inherit;
   */
  raw(value: Property.PlaceItems | CssString): string {
    return this.declaration(value);
  }
}

/**
 * place-self 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PlaceSelfKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:anchor-center;`。 */
  readonly anchorCenter: Property.PlaceSelf | CssString = 'anchor-center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:auto;`。 */
  readonly auto: Property.PlaceSelf | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:baseline;`。 */
  readonly baseline: Property.PlaceSelf | CssString = 'baseline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:center;`。 */
  readonly center: Property.PlaceSelf | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:end;`。 */
  readonly end: Property.PlaceSelf | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:flex-end;`。 */
  readonly flexEnd: Property.PlaceSelf | CssString = 'flex-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:flex-start;`。 */
  readonly flexStart: Property.PlaceSelf | CssString = 'flex-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`place-self:inherit;`。
   */
  readonly inherit: Property.PlaceSelf | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`place-self:initial;`。
   */
  readonly initial: Property.PlaceSelf | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:normal;`。 */
  readonly normal: Property.PlaceSelf | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`place-self:revert;`。
   */
  readonly revert: Property.PlaceSelf | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`place-self:revert-layer;`。
   */
  readonly revertLayer: Property.PlaceSelf | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:self-end;`。 */
  readonly selfEnd: Property.PlaceSelf | CssString = 'self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:self-start;`。 */
  readonly selfStart: Property.PlaceSelf | CssString = 'self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:start;`。 */
  readonly start: Property.PlaceSelf | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`place-self:stretch;`。 */
  readonly stretch: Property.PlaceSelf | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`place-self:unset;`。
   */
  readonly unset: Property.PlaceSelf | CssString = 'unset';
}

/**
 * 同时设置 align-self 与 justify-self。（place-self）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
 */
export class PlaceSelfCss extends CssProperty {
  /** CSS 声明：`place-self:anchor-center;`。 */
  readonly anchorCenter: string = 'place-self:anchor-center;';
  /** CSS 声明：`place-self:auto;`。 */
  readonly auto: string = 'place-self:auto;';
  /** CSS 声明：`place-self:baseline;`。 */
  readonly baseline: string = 'place-self:baseline;';
  /** CSS 声明：`place-self:center;`。 */
  readonly center: string = 'place-self:center;';
  /** CSS 声明：`place-self:end;`。 */
  readonly end: string = 'place-self:end;';
  /** CSS 声明：`place-self:flex-end;`。 */
  readonly flexEnd: string = 'place-self:flex-end;';
  /** CSS 声明：`place-self:flex-start;`。 */
  readonly flexStart: string = 'place-self:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`place-self:inherit;`。
   */
  readonly inherit: string = 'place-self:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`place-self:initial;`。
   */
  readonly initial: string = 'place-self:initial;';
  /** CSS 声明：`place-self:normal;`。 */
  readonly normal: string = 'place-self:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`place-self:revert;`。
   */
  readonly revert: string = 'place-self:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`place-self:revert-layer;`。
   */
  readonly revertLayer: string = 'place-self:revert-layer;';
  /** CSS 声明：`place-self:self-end;`。 */
  readonly selfEnd: string = 'place-self:self-end;';
  /** CSS 声明：`place-self:self-start;`。 */
  readonly selfStart: string = 'place-self:self-start;';
  /** CSS 声明：`place-self:start;`。 */
  readonly start: string = 'place-self:start;';
  /** CSS 声明：`place-self:stretch;`。 */
  readonly stretch: string = 'place-self:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`place-self:unset;`。
   */
  readonly unset: string = 'place-self:unset;';
  /**
   * 创建 place-self 属性作者；普通使用通过 s.placeSelf 取得共享实例。
   * @example
   * class CustomPlaceSelfCss extends PlaceSelfCss {}
   */
  constructor() {
    super('place-self');
  }
  /**
   * 原样生成 place-self 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 place-self:value;。
   * @example
   * s.placeSelf.raw('inherit') // place-self:inherit;
   */
  raw(value: Property.PlaceSelf | CssString): string {
    return this.declaration(value);
  }
}

/**
 * pointer-events 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PointerEventsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:all;`。 */
  readonly all: Property.PointerEvents | CssString = 'all';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用当前元素类型的默认命中规则。
   *
   * CSS 声明：`pointer-events:auto;`。
   */
  readonly auto: Property.PointerEvents | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:fill;`。 */
  readonly fill: Property.PointerEvents | CssString = 'fill';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`pointer-events:inherit;`。
   */
  readonly inherit: Property.PointerEvents | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`pointer-events:initial;`。
   */
  readonly initial: Property.PointerEvents | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 元素本身不成为指针命中目标；不等于禁用，仍可能通过 Tab 获焦，后代也可恢复命中。
   *
   * 适用场景：覆盖在内容上方但不应拦截点击的装饰层。
   *
   * 注意：后代可以恢复命中；来自后代的事件仍可能经过祖先监听器。
   *
   * CSS 声明：`pointer-events:none;`。
   * @example
   * s.pointerEvents.none
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  readonly none: Property.PointerEvents | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:painted;`。 */
  readonly painted: Property.PointerEvents | CssString = 'painted';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`pointer-events:revert;`。
   */
  readonly revert: Property.PointerEvents | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`pointer-events:revert-layer;`。
   */
  readonly revertLayer: Property.PointerEvents | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:stroke;`。 */
  readonly stroke: Property.PointerEvents | CssString = 'stroke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`pointer-events:unset;`。
   */
  readonly unset: Property.PointerEvents | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:visible;`。 */
  readonly visible: Property.PointerEvents | CssString = 'visible';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:visibleFill;`。 */
  readonly visibleFill: Property.PointerEvents | CssString = 'visibleFill';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:visiblePainted;`。 */
  readonly visiblePainted: Property.PointerEvents | CssString = 'visiblePainted';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`pointer-events:visibleStroke;`。 */
  readonly visibleStroke: Property.PointerEvents | CssString = 'visibleStroke';
}

/**
 * 设置元素何时可以成为指针命中目标；SVG 还支持按填充和描边命中。（pointer-events）
 *
 * 控制指针命中，不等同于原生 disabled，也不会单独阻止键盘交互。
 *
 * 常用值：
 * - `auto`：采用当前元素类型的默认命中规则。
 * - `none`：元素本身不成为指针命中目标；不等于禁用，仍可能通过 Tab 获焦，后代也可恢复命中。
 *
 * 适用场景：允许指针穿过装饰层；可交互控件的禁用应同时处理行为和语义。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * s.pointerEvents.none
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
 */
export class PointerEventsCss extends CssProperty {
  /** CSS 声明：`pointer-events:all;`。 */
  readonly all: string = 'pointer-events:all;';
  /**
   * 采用当前元素类型的默认命中规则。
   *
   * CSS 声明：`pointer-events:auto;`。
   */
  readonly auto: string = 'pointer-events:auto;';
  /** CSS 声明：`pointer-events:fill;`。 */
  readonly fill: string = 'pointer-events:fill;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`pointer-events:inherit;`。
   */
  readonly inherit: string = 'pointer-events:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`pointer-events:initial;`。
   */
  readonly initial: string = 'pointer-events:initial;';
  /**
   * 元素本身不成为指针命中目标；不等于禁用，仍可能通过 Tab 获焦，后代也可恢复命中。
   *
   * 适用场景：覆盖在内容上方但不应拦截点击的装饰层。
   *
   * 注意：后代可以恢复命中；来自后代的事件仍可能经过祖先监听器。
   *
   * CSS 声明：`pointer-events:none;`。
   * @example
   * s.pointerEvents.none
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  readonly none: string = 'pointer-events:none;';
  /** CSS 声明：`pointer-events:painted;`。 */
  readonly painted: string = 'pointer-events:painted;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`pointer-events:revert;`。
   */
  readonly revert: string = 'pointer-events:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`pointer-events:revert-layer;`。
   */
  readonly revertLayer: string = 'pointer-events:revert-layer;';
  /** CSS 声明：`pointer-events:stroke;`。 */
  readonly stroke: string = 'pointer-events:stroke;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`pointer-events:unset;`。
   */
  readonly unset: string = 'pointer-events:unset;';
  /** CSS 声明：`pointer-events:visible;`。 */
  readonly visible: string = 'pointer-events:visible;';
  /** CSS 声明：`pointer-events:visibleFill;`。 */
  readonly visibleFill: string = 'pointer-events:visibleFill;';
  /** CSS 声明：`pointer-events:visiblePainted;`。 */
  readonly visiblePainted: string = 'pointer-events:visiblePainted;';
  /** CSS 声明：`pointer-events:visibleStroke;`。 */
  readonly visibleStroke: string = 'pointer-events:visibleStroke;';
  /**
   * 创建 pointer-events 属性作者；普通使用通过 s.pointerEvents 取得共享实例。
   * @example
   * class CustomPointerEventsCss extends PointerEventsCss {}
   */
  constructor() {
    super('pointer-events');
  }
  /**
   * 原样生成 pointer-events 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 pointer-events:value;。
   * @example
   * s.pointerEvents.raw('inherit') // pointer-events:inherit;
   */
  raw(value: Property.PointerEvents | CssString): string {
    return this.declaration(value);
  }
}

/**
 * position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 脱离普通文档流，按包含块定位；包含块通常由定位祖先或 transform 等属性建立。
   *
   * 适用场景：容器内部的角标、图标覆盖和定位装饰。
   *
   * 注意：通常在预期的容器上设置 position:relative；元素不为自己保留普通流占位。
   *
   * CSS 声明：`position:absolute;`。
   * @example
   * css(s.position.absolute, s.top.px(0), s.right.px(0))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly absolute: Property.Position | CssString = 'absolute';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 脱离普通流，通常相对视口固定；某些祖先属性会建立不同的包含块。
   *
   * 区别：absolute 通常跟随其包含块滚动；fixed 在以视口为包含块时保持视口位置。
   *
   * 适用场景：固定工具栏或覆盖层。
   *
   * 注意：祖先的 transform 等属性可能改变固定定位的包含块；z-index 仍受层叠上下文约束。
   *
   * CSS 声明：`position:fixed;`。
   * @example
   * css(s.position.fixed, s.inset.px(0))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly fixed: Property.Position | CssString = 'fixed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position:inherit;`。
   */
  readonly inherit: Property.Position | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position:initial;`。
   */
  readonly initial: Property.Position | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保留普通流中的原位置，再按偏移移动绘制位置；不会为偏移后的区域重新排版。
   *
   * 区别：absolute 会脱离普通流；relative 仍保留原占位。
   *
   * 适用场景：为绝对定位后代提供定位参照，或做不改变其他元素排布的视觉偏移。
   *
   * CSS 声明：`position:relative;`。
   * @example
   * s.position.relative
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly relative: Property.Position | CssString = 'relative';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position:revert;`。
   */
  readonly revert: Property.Position | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position:revert-layer;`。
   */
  readonly revertLayer: Property.Position | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 参与普通文档流，top/right/bottom/left 等定位偏移不生效。
   *
   * CSS 声明：`position:static;`。
   */
  readonly static: Property.Position | CssString = 'static';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保留流内位置，在滚动范围内按 inset 约束吸附。对应轴至少一个 inset 须非 auto，并受滚动祖先和包含块限制。
   *
   * 区别：与 fixed 不同，它保留流内占位，并受自身所在包含块的范围约束。
   *
   * 适用场景：滚动列表的分组标题、吸顶工具栏。
   *
   * 注意：对应轴至少一个 inset 必须非 auto；祖先 overflow 可能改变滚动参照。
   *
   * CSS 声明：`position:sticky;`。
   * @example
   * css(s.position.sticky, s.top.px(0))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly sticky: Property.Position | CssString = 'sticky';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position:unset;`。
   */
  readonly unset: Property.Position | CssString = 'unset';
}

/**
 * 设置元素的定位方式，并决定偏移属性如何参与布局。（position）
 *
 * 偏移通常通过 top/right/bottom/left 或逻辑 inset 属性设置。fixed 和 absolute 的包含块也可能由 transform 等属性建立。
 *
 * 常用值：
 * - `static`：参与普通文档流，top/right/bottom/left 等定位偏移不生效。
 * - `relative`：保留普通流中的原位置，再按偏移移动绘制位置；不会为偏移后的区域重新排版。
 * - `absolute`：脱离普通文档流，按包含块定位；包含块通常由定位祖先或 transform 等属性建立。
 * - `fixed`：脱离普通流，通常相对视口固定；某些祖先属性会建立不同的包含块。
 * - `sticky`：保留流内位置，在滚动范围内按 inset 约束吸附。对应轴至少一个 inset 须非 auto，并受滚动祖先和包含块限制。
 *
 * 适用场景：建立定位参照、覆盖层、固定区域或滚动吸附内容。
 *
 * CSS 初始值：`static`（不同于浏览器默认样式表）。
 * @example
 * css(s.position.sticky, s.top.px(0))
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
 */
export class PositionCss extends CssProperty {
  /**
   * 脱离普通文档流，按包含块定位；包含块通常由定位祖先或 transform 等属性建立。
   *
   * 适用场景：容器内部的角标、图标覆盖和定位装饰。
   *
   * 注意：通常在预期的容器上设置 position:relative；元素不为自己保留普通流占位。
   *
   * CSS 声明：`position:absolute;`。
   * @example
   * css(s.position.absolute, s.top.px(0), s.right.px(0))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly absolute: string = 'position:absolute;';
  /**
   * 脱离普通流，通常相对视口固定；某些祖先属性会建立不同的包含块。
   *
   * 区别：absolute 通常跟随其包含块滚动；fixed 在以视口为包含块时保持视口位置。
   *
   * 适用场景：固定工具栏或覆盖层。
   *
   * 注意：祖先的 transform 等属性可能改变固定定位的包含块；z-index 仍受层叠上下文约束。
   *
   * CSS 声明：`position:fixed;`。
   * @example
   * css(s.position.fixed, s.inset.px(0))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly fixed: string = 'position:fixed;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position:inherit;`。
   */
  readonly inherit: string = 'position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position:initial;`。
   */
  readonly initial: string = 'position:initial;';
  /**
   * 保留普通流中的原位置，再按偏移移动绘制位置；不会为偏移后的区域重新排版。
   *
   * 区别：absolute 会脱离普通流；relative 仍保留原占位。
   *
   * 适用场景：为绝对定位后代提供定位参照，或做不改变其他元素排布的视觉偏移。
   *
   * CSS 声明：`position:relative;`。
   * @example
   * s.position.relative
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly relative: string = 'position:relative;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position:revert;`。
   */
  readonly revert: string = 'position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position:revert-layer;`。
   */
  readonly revertLayer: string = 'position:revert-layer;';
  /**
   * 参与普通文档流，top/right/bottom/left 等定位偏移不生效。
   *
   * CSS 声明：`position:static;`。
   */
  readonly static: string = 'position:static;';
  /**
   * 保留流内位置，在滚动范围内按 inset 约束吸附。对应轴至少一个 inset 须非 auto，并受滚动祖先和包含块限制。
   *
   * 区别：与 fixed 不同，它保留流内占位，并受自身所在包含块的范围约束。
   *
   * 适用场景：滚动列表的分组标题、吸顶工具栏。
   *
   * 注意：对应轴至少一个 inset 必须非 auto；祖先 overflow 可能改变滚动参照。
   *
   * CSS 声明：`position:sticky;`。
   * @example
   * css(s.position.sticky, s.top.px(0))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  readonly sticky: string = 'position:sticky;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position:unset;`。
   */
  readonly unset: string = 'position:unset;';
  /**
   * 创建 position 属性作者；普通使用通过 s.position 取得共享实例。
   * @example
   * class CustomPositionCss extends PositionCss {}
   */
  constructor() {
    super('position');
  }
  /**
   * 原样生成 position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 position:value;。
   * @example
   * s.position.raw('inherit') // position:inherit;
   */
  raw(value: Property.Position | CssString): string {
    return this.declaration(value);
  }
}

/**
 * position-anchor 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PositionAnchorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-anchor:auto;`。 */
  readonly auto: Property.PositionAnchor | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-anchor:inherit;`。
   */
  readonly inherit: Property.PositionAnchor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-anchor:initial;`。
   */
  readonly initial: Property.PositionAnchor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-anchor:revert;`。
   */
  readonly revert: Property.PositionAnchor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-anchor:revert-layer;`。
   */
  readonly revertLayer: Property.PositionAnchor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-anchor:unset;`。
   */
  readonly unset: Property.PositionAnchor | CssString = 'unset';
}

/**
 * 选择绝对定位元素使用的默认锚点。（position-anchor）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
 */
export class PositionAnchorCss extends CssProperty {
  /** CSS 声明：`position-anchor:auto;`。 */
  readonly auto: string = 'position-anchor:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-anchor:inherit;`。
   */
  readonly inherit: string = 'position-anchor:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-anchor:initial;`。
   */
  readonly initial: string = 'position-anchor:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-anchor:revert;`。
   */
  readonly revert: string = 'position-anchor:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-anchor:revert-layer;`。
   */
  readonly revertLayer: string = 'position-anchor:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-anchor:unset;`。
   */
  readonly unset: string = 'position-anchor:unset;';
  /**
   * 创建 position-anchor 属性作者；普通使用通过 s.positionAnchor 取得共享实例。
   * @example
   * class CustomPositionAnchorCss extends PositionAnchorCss {}
   */
  constructor() {
    super('position-anchor');
  }
  /**
   * 原样生成 position-anchor 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 position-anchor:value;。
   * @example
   * s.positionAnchor.raw('inherit') // position-anchor:inherit;
   */
  raw(value: Property.PositionAnchor | CssString): string {
    return this.declaration(value);
  }
}

/**
 * position-area 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PositionAreaKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:block-end;`。 */
  readonly blockEnd: Property.PositionArea | CssString = 'block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:block-start;`。 */
  readonly blockStart: Property.PositionArea | CssString = 'block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:bottom;`。 */
  readonly bottom: Property.PositionArea | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:center;`。 */
  readonly center: Property.PositionArea | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:end;`。 */
  readonly end: Property.PositionArea | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-area:inherit;`。
   */
  readonly inherit: Property.PositionArea | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-area:initial;`。
   */
  readonly initial: Property.PositionArea | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:inline-end;`。 */
  readonly inlineEnd: Property.PositionArea | CssString = 'inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:inline-start;`。 */
  readonly inlineStart: Property.PositionArea | CssString = 'inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:left;`。 */
  readonly left: Property.PositionArea | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:none;`。 */
  readonly none: Property.PositionArea | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-area:revert;`。
   */
  readonly revert: Property.PositionArea | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-area:revert-layer;`。
   */
  readonly revertLayer: Property.PositionArea | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:right;`。 */
  readonly right: Property.PositionArea | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:self-block-end;`。 */
  readonly selfBlockEnd: Property.PositionArea | CssString = 'self-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:self-block-start;`。 */
  readonly selfBlockStart: Property.PositionArea | CssString = 'self-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:self-end;`。 */
  readonly selfEnd: Property.PositionArea | CssString = 'self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:self-inline-end;`。 */
  readonly selfInlineEnd: Property.PositionArea | CssString = 'self-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:self-inline-start;`。 */
  readonly selfInlineStart: Property.PositionArea | CssString = 'self-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:self-start;`。 */
  readonly selfStart: Property.PositionArea | CssString = 'self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-all;`。 */
  readonly spanAll: Property.PositionArea | CssString = 'span-all';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-block-end;`。 */
  readonly spanBlockEnd: Property.PositionArea | CssString = 'span-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-block-start;`。 */
  readonly spanBlockStart: Property.PositionArea | CssString = 'span-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-bottom;`。 */
  readonly spanBottom: Property.PositionArea | CssString = 'span-bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-end;`。 */
  readonly spanEnd: Property.PositionArea | CssString = 'span-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-inline-end;`。 */
  readonly spanInlineEnd: Property.PositionArea | CssString = 'span-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-inline-start;`。 */
  readonly spanInlineStart: Property.PositionArea | CssString = 'span-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-left;`。 */
  readonly spanLeft: Property.PositionArea | CssString = 'span-left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-right;`。 */
  readonly spanRight: Property.PositionArea | CssString = 'span-right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-self-block-end;`。 */
  readonly spanSelfBlockEnd: Property.PositionArea | CssString = 'span-self-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-self-block-start;`。 */
  readonly spanSelfBlockStart: Property.PositionArea | CssString = 'span-self-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-self-end;`。 */
  readonly spanSelfEnd: Property.PositionArea | CssString = 'span-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-self-inline-end;`。 */
  readonly spanSelfInlineEnd: Property.PositionArea | CssString = 'span-self-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-self-inline-start;`。 */
  readonly spanSelfInlineStart: Property.PositionArea | CssString = 'span-self-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-self-start;`。 */
  readonly spanSelfStart: Property.PositionArea | CssString = 'span-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-start;`。 */
  readonly spanStart: Property.PositionArea | CssString = 'span-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-top;`。 */
  readonly spanTop: Property.PositionArea | CssString = 'span-top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-x-end;`。 */
  readonly spanXEnd: Property.PositionArea | CssString = 'span-x-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-x-self-end;`。 */
  readonly spanXSelfEnd: Property.PositionArea | CssString = 'span-x-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-x-self-start;`。 */
  readonly spanXSelfStart: Property.PositionArea | CssString = 'span-x-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-x-start;`。 */
  readonly spanXStart: Property.PositionArea | CssString = 'span-x-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-y-end;`。 */
  readonly spanYEnd: Property.PositionArea | CssString = 'span-y-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-y-self-end;`。 */
  readonly spanYSelfEnd: Property.PositionArea | CssString = 'span-y-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-y-self-start;`。 */
  readonly spanYSelfStart: Property.PositionArea | CssString = 'span-y-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:span-y-start;`。 */
  readonly spanYStart: Property.PositionArea | CssString = 'span-y-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:start;`。 */
  readonly start: Property.PositionArea | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:top;`。 */
  readonly top: Property.PositionArea | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-area:unset;`。
   */
  readonly unset: Property.PositionArea | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:x-end;`。 */
  readonly xEnd: Property.PositionArea | CssString = 'x-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:x-self-end;`。 */
  readonly xSelfEnd: Property.PositionArea | CssString = 'x-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:x-self-start;`。 */
  readonly xSelfStart: Property.PositionArea | CssString = 'x-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:x-start;`。 */
  readonly xStart: Property.PositionArea | CssString = 'x-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:y-end;`。 */
  readonly yEnd: Property.PositionArea | CssString = 'y-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:y-self-end;`。 */
  readonly ySelfEnd: Property.PositionArea | CssString = 'y-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:y-self-start;`。 */
  readonly ySelfStart: Property.PositionArea | CssString = 'y-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-area:y-start;`。 */
  readonly yStart: Property.PositionArea | CssString = 'y-start';
}

/**
 * 选择相对于锚点的定位区域。（position-area）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
 */
export class PositionAreaCss extends CssProperty {
  /** CSS 声明：`position-area:block-end;`。 */
  readonly blockEnd: string = 'position-area:block-end;';
  /** CSS 声明：`position-area:block-start;`。 */
  readonly blockStart: string = 'position-area:block-start;';
  /** CSS 声明：`position-area:bottom;`。 */
  readonly bottom: string = 'position-area:bottom;';
  /** CSS 声明：`position-area:center;`。 */
  readonly center: string = 'position-area:center;';
  /** CSS 声明：`position-area:end;`。 */
  readonly end: string = 'position-area:end;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-area:inherit;`。
   */
  readonly inherit: string = 'position-area:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-area:initial;`。
   */
  readonly initial: string = 'position-area:initial;';
  /** CSS 声明：`position-area:inline-end;`。 */
  readonly inlineEnd: string = 'position-area:inline-end;';
  /** CSS 声明：`position-area:inline-start;`。 */
  readonly inlineStart: string = 'position-area:inline-start;';
  /** CSS 声明：`position-area:left;`。 */
  readonly left: string = 'position-area:left;';
  /** CSS 声明：`position-area:none;`。 */
  readonly none: string = 'position-area:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-area:revert;`。
   */
  readonly revert: string = 'position-area:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-area:revert-layer;`。
   */
  readonly revertLayer: string = 'position-area:revert-layer;';
  /** CSS 声明：`position-area:right;`。 */
  readonly right: string = 'position-area:right;';
  /** CSS 声明：`position-area:self-block-end;`。 */
  readonly selfBlockEnd: string = 'position-area:self-block-end;';
  /** CSS 声明：`position-area:self-block-start;`。 */
  readonly selfBlockStart: string = 'position-area:self-block-start;';
  /** CSS 声明：`position-area:self-end;`。 */
  readonly selfEnd: string = 'position-area:self-end;';
  /** CSS 声明：`position-area:self-inline-end;`。 */
  readonly selfInlineEnd: string = 'position-area:self-inline-end;';
  /** CSS 声明：`position-area:self-inline-start;`。 */
  readonly selfInlineStart: string = 'position-area:self-inline-start;';
  /** CSS 声明：`position-area:self-start;`。 */
  readonly selfStart: string = 'position-area:self-start;';
  /** CSS 声明：`position-area:span-all;`。 */
  readonly spanAll: string = 'position-area:span-all;';
  /** CSS 声明：`position-area:span-block-end;`。 */
  readonly spanBlockEnd: string = 'position-area:span-block-end;';
  /** CSS 声明：`position-area:span-block-start;`。 */
  readonly spanBlockStart: string = 'position-area:span-block-start;';
  /** CSS 声明：`position-area:span-bottom;`。 */
  readonly spanBottom: string = 'position-area:span-bottom;';
  /** CSS 声明：`position-area:span-end;`。 */
  readonly spanEnd: string = 'position-area:span-end;';
  /** CSS 声明：`position-area:span-inline-end;`。 */
  readonly spanInlineEnd: string = 'position-area:span-inline-end;';
  /** CSS 声明：`position-area:span-inline-start;`。 */
  readonly spanInlineStart: string = 'position-area:span-inline-start;';
  /** CSS 声明：`position-area:span-left;`。 */
  readonly spanLeft: string = 'position-area:span-left;';
  /** CSS 声明：`position-area:span-right;`。 */
  readonly spanRight: string = 'position-area:span-right;';
  /** CSS 声明：`position-area:span-self-block-end;`。 */
  readonly spanSelfBlockEnd: string = 'position-area:span-self-block-end;';
  /** CSS 声明：`position-area:span-self-block-start;`。 */
  readonly spanSelfBlockStart: string = 'position-area:span-self-block-start;';
  /** CSS 声明：`position-area:span-self-end;`。 */
  readonly spanSelfEnd: string = 'position-area:span-self-end;';
  /** CSS 声明：`position-area:span-self-inline-end;`。 */
  readonly spanSelfInlineEnd: string = 'position-area:span-self-inline-end;';
  /** CSS 声明：`position-area:span-self-inline-start;`。 */
  readonly spanSelfInlineStart: string = 'position-area:span-self-inline-start;';
  /** CSS 声明：`position-area:span-self-start;`。 */
  readonly spanSelfStart: string = 'position-area:span-self-start;';
  /** CSS 声明：`position-area:span-start;`。 */
  readonly spanStart: string = 'position-area:span-start;';
  /** CSS 声明：`position-area:span-top;`。 */
  readonly spanTop: string = 'position-area:span-top;';
  /** CSS 声明：`position-area:span-x-end;`。 */
  readonly spanXEnd: string = 'position-area:span-x-end;';
  /** CSS 声明：`position-area:span-x-self-end;`。 */
  readonly spanXSelfEnd: string = 'position-area:span-x-self-end;';
  /** CSS 声明：`position-area:span-x-self-start;`。 */
  readonly spanXSelfStart: string = 'position-area:span-x-self-start;';
  /** CSS 声明：`position-area:span-x-start;`。 */
  readonly spanXStart: string = 'position-area:span-x-start;';
  /** CSS 声明：`position-area:span-y-end;`。 */
  readonly spanYEnd: string = 'position-area:span-y-end;';
  /** CSS 声明：`position-area:span-y-self-end;`。 */
  readonly spanYSelfEnd: string = 'position-area:span-y-self-end;';
  /** CSS 声明：`position-area:span-y-self-start;`。 */
  readonly spanYSelfStart: string = 'position-area:span-y-self-start;';
  /** CSS 声明：`position-area:span-y-start;`。 */
  readonly spanYStart: string = 'position-area:span-y-start;';
  /** CSS 声明：`position-area:start;`。 */
  readonly start: string = 'position-area:start;';
  /** CSS 声明：`position-area:top;`。 */
  readonly top: string = 'position-area:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-area:unset;`。
   */
  readonly unset: string = 'position-area:unset;';
  /** CSS 声明：`position-area:x-end;`。 */
  readonly xEnd: string = 'position-area:x-end;';
  /** CSS 声明：`position-area:x-self-end;`。 */
  readonly xSelfEnd: string = 'position-area:x-self-end;';
  /** CSS 声明：`position-area:x-self-start;`。 */
  readonly xSelfStart: string = 'position-area:x-self-start;';
  /** CSS 声明：`position-area:x-start;`。 */
  readonly xStart: string = 'position-area:x-start;';
  /** CSS 声明：`position-area:y-end;`。 */
  readonly yEnd: string = 'position-area:y-end;';
  /** CSS 声明：`position-area:y-self-end;`。 */
  readonly ySelfEnd: string = 'position-area:y-self-end;';
  /** CSS 声明：`position-area:y-self-start;`。 */
  readonly ySelfStart: string = 'position-area:y-self-start;';
  /** CSS 声明：`position-area:y-start;`。 */
  readonly yStart: string = 'position-area:y-start;';
  /**
   * 创建 position-area 属性作者；普通使用通过 s.positionArea 取得共享实例。
   * @example
   * class CustomPositionAreaCss extends PositionAreaCss {}
   */
  constructor() {
    super('position-area');
  }
  /**
   * 原样生成 position-area 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 position-area:value;。
   * @example
   * s.positionArea.raw('inherit') // position-area:inherit;
   */
  raw(value: Property.PositionArea | CssString): string {
    return this.declaration(value);
  }
}

/**
 * position-try 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PositionTryKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:block-end;`。 */
  readonly blockEnd: Property.PositionTry | CssString = 'block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:block-start;`。 */
  readonly blockStart: Property.PositionTry | CssString = 'block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:bottom;`。 */
  readonly bottom: Property.PositionTry | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:center;`。 */
  readonly center: Property.PositionTry | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:end;`。 */
  readonly end: Property.PositionTry | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:flip-block;`。 */
  readonly flipBlock: Property.PositionTry | CssString = 'flip-block';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:flip-inline;`。 */
  readonly flipInline: Property.PositionTry | CssString = 'flip-inline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:flip-start;`。 */
  readonly flipStart: Property.PositionTry | CssString = 'flip-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-try:inherit;`。
   */
  readonly inherit: Property.PositionTry | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-try:initial;`。
   */
  readonly initial: Property.PositionTry | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:inline-end;`。 */
  readonly inlineEnd: Property.PositionTry | CssString = 'inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:inline-start;`。 */
  readonly inlineStart: Property.PositionTry | CssString = 'inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:left;`。 */
  readonly left: Property.PositionTry | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:none;`。 */
  readonly none: Property.PositionTry | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-try:revert;`。
   */
  readonly revert: Property.PositionTry | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-try:revert-layer;`。
   */
  readonly revertLayer: Property.PositionTry | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:right;`。 */
  readonly right: Property.PositionTry | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:self-block-end;`。 */
  readonly selfBlockEnd: Property.PositionTry | CssString = 'self-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:self-block-start;`。 */
  readonly selfBlockStart: Property.PositionTry | CssString = 'self-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:self-end;`。 */
  readonly selfEnd: Property.PositionTry | CssString = 'self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:self-inline-end;`。 */
  readonly selfInlineEnd: Property.PositionTry | CssString = 'self-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:self-inline-start;`。 */
  readonly selfInlineStart: Property.PositionTry | CssString = 'self-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:self-start;`。 */
  readonly selfStart: Property.PositionTry | CssString = 'self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-all;`。 */
  readonly spanAll: Property.PositionTry | CssString = 'span-all';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-block-end;`。 */
  readonly spanBlockEnd: Property.PositionTry | CssString = 'span-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-block-start;`。 */
  readonly spanBlockStart: Property.PositionTry | CssString = 'span-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-bottom;`。 */
  readonly spanBottom: Property.PositionTry | CssString = 'span-bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-end;`。 */
  readonly spanEnd: Property.PositionTry | CssString = 'span-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-inline-end;`。 */
  readonly spanInlineEnd: Property.PositionTry | CssString = 'span-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-inline-start;`。 */
  readonly spanInlineStart: Property.PositionTry | CssString = 'span-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-left;`。 */
  readonly spanLeft: Property.PositionTry | CssString = 'span-left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-right;`。 */
  readonly spanRight: Property.PositionTry | CssString = 'span-right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-self-block-end;`。 */
  readonly spanSelfBlockEnd: Property.PositionTry | CssString = 'span-self-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-self-block-start;`。 */
  readonly spanSelfBlockStart: Property.PositionTry | CssString = 'span-self-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-self-end;`。 */
  readonly spanSelfEnd: Property.PositionTry | CssString = 'span-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-self-inline-end;`。 */
  readonly spanSelfInlineEnd: Property.PositionTry | CssString = 'span-self-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-self-inline-start;`。 */
  readonly spanSelfInlineStart: Property.PositionTry | CssString = 'span-self-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-self-start;`。 */
  readonly spanSelfStart: Property.PositionTry | CssString = 'span-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-start;`。 */
  readonly spanStart: Property.PositionTry | CssString = 'span-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-top;`。 */
  readonly spanTop: Property.PositionTry | CssString = 'span-top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-x-end;`。 */
  readonly spanXEnd: Property.PositionTry | CssString = 'span-x-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-x-self-end;`。 */
  readonly spanXSelfEnd: Property.PositionTry | CssString = 'span-x-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-x-self-start;`。 */
  readonly spanXSelfStart: Property.PositionTry | CssString = 'span-x-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-x-start;`。 */
  readonly spanXStart: Property.PositionTry | CssString = 'span-x-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-y-end;`。 */
  readonly spanYEnd: Property.PositionTry | CssString = 'span-y-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-y-self-end;`。 */
  readonly spanYSelfEnd: Property.PositionTry | CssString = 'span-y-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-y-self-start;`。 */
  readonly spanYSelfStart: Property.PositionTry | CssString = 'span-y-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:span-y-start;`。 */
  readonly spanYStart: Property.PositionTry | CssString = 'span-y-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:start;`。 */
  readonly start: Property.PositionTry | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:top;`。 */
  readonly top: Property.PositionTry | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-try:unset;`。
   */
  readonly unset: Property.PositionTry | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:x-end;`。 */
  readonly xEnd: Property.PositionTry | CssString = 'x-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:x-self-end;`。 */
  readonly xSelfEnd: Property.PositionTry | CssString = 'x-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:x-self-start;`。 */
  readonly xSelfStart: Property.PositionTry | CssString = 'x-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:x-start;`。 */
  readonly xStart: Property.PositionTry | CssString = 'x-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:y-end;`。 */
  readonly yEnd: Property.PositionTry | CssString = 'y-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:y-self-end;`。 */
  readonly ySelfEnd: Property.PositionTry | CssString = 'y-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:y-self-start;`。 */
  readonly ySelfStart: Property.PositionTry | CssString = 'y-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try:y-start;`。 */
  readonly yStart: Property.PositionTry | CssString = 'y-start';
}

/**
 * 同时设置锚点定位的候选回退方式及尝试顺序。（position-try）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
 */
export class PositionTryCss extends CssProperty {
  /** CSS 声明：`position-try:block-end;`。 */
  readonly blockEnd: string = 'position-try:block-end;';
  /** CSS 声明：`position-try:block-start;`。 */
  readonly blockStart: string = 'position-try:block-start;';
  /** CSS 声明：`position-try:bottom;`。 */
  readonly bottom: string = 'position-try:bottom;';
  /** CSS 声明：`position-try:center;`。 */
  readonly center: string = 'position-try:center;';
  /** CSS 声明：`position-try:end;`。 */
  readonly end: string = 'position-try:end;';
  /** CSS 声明：`position-try:flip-block;`。 */
  readonly flipBlock: string = 'position-try:flip-block;';
  /** CSS 声明：`position-try:flip-inline;`。 */
  readonly flipInline: string = 'position-try:flip-inline;';
  /** CSS 声明：`position-try:flip-start;`。 */
  readonly flipStart: string = 'position-try:flip-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-try:inherit;`。
   */
  readonly inherit: string = 'position-try:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-try:initial;`。
   */
  readonly initial: string = 'position-try:initial;';
  /** CSS 声明：`position-try:inline-end;`。 */
  readonly inlineEnd: string = 'position-try:inline-end;';
  /** CSS 声明：`position-try:inline-start;`。 */
  readonly inlineStart: string = 'position-try:inline-start;';
  /** CSS 声明：`position-try:left;`。 */
  readonly left: string = 'position-try:left;';
  /** CSS 声明：`position-try:none;`。 */
  readonly none: string = 'position-try:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-try:revert;`。
   */
  readonly revert: string = 'position-try:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-try:revert-layer;`。
   */
  readonly revertLayer: string = 'position-try:revert-layer;';
  /** CSS 声明：`position-try:right;`。 */
  readonly right: string = 'position-try:right;';
  /** CSS 声明：`position-try:self-block-end;`。 */
  readonly selfBlockEnd: string = 'position-try:self-block-end;';
  /** CSS 声明：`position-try:self-block-start;`。 */
  readonly selfBlockStart: string = 'position-try:self-block-start;';
  /** CSS 声明：`position-try:self-end;`。 */
  readonly selfEnd: string = 'position-try:self-end;';
  /** CSS 声明：`position-try:self-inline-end;`。 */
  readonly selfInlineEnd: string = 'position-try:self-inline-end;';
  /** CSS 声明：`position-try:self-inline-start;`。 */
  readonly selfInlineStart: string = 'position-try:self-inline-start;';
  /** CSS 声明：`position-try:self-start;`。 */
  readonly selfStart: string = 'position-try:self-start;';
  /** CSS 声明：`position-try:span-all;`。 */
  readonly spanAll: string = 'position-try:span-all;';
  /** CSS 声明：`position-try:span-block-end;`。 */
  readonly spanBlockEnd: string = 'position-try:span-block-end;';
  /** CSS 声明：`position-try:span-block-start;`。 */
  readonly spanBlockStart: string = 'position-try:span-block-start;';
  /** CSS 声明：`position-try:span-bottom;`。 */
  readonly spanBottom: string = 'position-try:span-bottom;';
  /** CSS 声明：`position-try:span-end;`。 */
  readonly spanEnd: string = 'position-try:span-end;';
  /** CSS 声明：`position-try:span-inline-end;`。 */
  readonly spanInlineEnd: string = 'position-try:span-inline-end;';
  /** CSS 声明：`position-try:span-inline-start;`。 */
  readonly spanInlineStart: string = 'position-try:span-inline-start;';
  /** CSS 声明：`position-try:span-left;`。 */
  readonly spanLeft: string = 'position-try:span-left;';
  /** CSS 声明：`position-try:span-right;`。 */
  readonly spanRight: string = 'position-try:span-right;';
  /** CSS 声明：`position-try:span-self-block-end;`。 */
  readonly spanSelfBlockEnd: string = 'position-try:span-self-block-end;';
  /** CSS 声明：`position-try:span-self-block-start;`。 */
  readonly spanSelfBlockStart: string = 'position-try:span-self-block-start;';
  /** CSS 声明：`position-try:span-self-end;`。 */
  readonly spanSelfEnd: string = 'position-try:span-self-end;';
  /** CSS 声明：`position-try:span-self-inline-end;`。 */
  readonly spanSelfInlineEnd: string = 'position-try:span-self-inline-end;';
  /** CSS 声明：`position-try:span-self-inline-start;`。 */
  readonly spanSelfInlineStart: string = 'position-try:span-self-inline-start;';
  /** CSS 声明：`position-try:span-self-start;`。 */
  readonly spanSelfStart: string = 'position-try:span-self-start;';
  /** CSS 声明：`position-try:span-start;`。 */
  readonly spanStart: string = 'position-try:span-start;';
  /** CSS 声明：`position-try:span-top;`。 */
  readonly spanTop: string = 'position-try:span-top;';
  /** CSS 声明：`position-try:span-x-end;`。 */
  readonly spanXEnd: string = 'position-try:span-x-end;';
  /** CSS 声明：`position-try:span-x-self-end;`。 */
  readonly spanXSelfEnd: string = 'position-try:span-x-self-end;';
  /** CSS 声明：`position-try:span-x-self-start;`。 */
  readonly spanXSelfStart: string = 'position-try:span-x-self-start;';
  /** CSS 声明：`position-try:span-x-start;`。 */
  readonly spanXStart: string = 'position-try:span-x-start;';
  /** CSS 声明：`position-try:span-y-end;`。 */
  readonly spanYEnd: string = 'position-try:span-y-end;';
  /** CSS 声明：`position-try:span-y-self-end;`。 */
  readonly spanYSelfEnd: string = 'position-try:span-y-self-end;';
  /** CSS 声明：`position-try:span-y-self-start;`。 */
  readonly spanYSelfStart: string = 'position-try:span-y-self-start;';
  /** CSS 声明：`position-try:span-y-start;`。 */
  readonly spanYStart: string = 'position-try:span-y-start;';
  /** CSS 声明：`position-try:start;`。 */
  readonly start: string = 'position-try:start;';
  /** CSS 声明：`position-try:top;`。 */
  readonly top: string = 'position-try:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-try:unset;`。
   */
  readonly unset: string = 'position-try:unset;';
  /** CSS 声明：`position-try:x-end;`。 */
  readonly xEnd: string = 'position-try:x-end;';
  /** CSS 声明：`position-try:x-self-end;`。 */
  readonly xSelfEnd: string = 'position-try:x-self-end;';
  /** CSS 声明：`position-try:x-self-start;`。 */
  readonly xSelfStart: string = 'position-try:x-self-start;';
  /** CSS 声明：`position-try:x-start;`。 */
  readonly xStart: string = 'position-try:x-start;';
  /** CSS 声明：`position-try:y-end;`。 */
  readonly yEnd: string = 'position-try:y-end;';
  /** CSS 声明：`position-try:y-self-end;`。 */
  readonly ySelfEnd: string = 'position-try:y-self-end;';
  /** CSS 声明：`position-try:y-self-start;`。 */
  readonly ySelfStart: string = 'position-try:y-self-start;';
  /** CSS 声明：`position-try:y-start;`。 */
  readonly yStart: string = 'position-try:y-start;';
  /**
   * 创建 position-try 属性作者；普通使用通过 s.positionTry 取得共享实例。
   * @example
   * class CustomPositionTryCss extends PositionTryCss {}
   */
  constructor() {
    super('position-try');
  }
  /**
   * 原样生成 position-try 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 position-try:value;。
   * @example
   * s.positionTry.raw('inherit') // position-try:inherit;
   */
  raw(value: Property.PositionTry | CssString): string {
    return this.declaration(value);
  }
}

/**
 * position-try-fallbacks 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PositionTryFallbacksKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:block-end;`。 */
  readonly blockEnd: Property.PositionTryFallbacks | CssString = 'block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:block-start;`。 */
  readonly blockStart: Property.PositionTryFallbacks | CssString = 'block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:bottom;`。 */
  readonly bottom: Property.PositionTryFallbacks | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:center;`。 */
  readonly center: Property.PositionTryFallbacks | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:end;`。 */
  readonly end: Property.PositionTryFallbacks | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:flip-block;`。 */
  readonly flipBlock: Property.PositionTryFallbacks | CssString = 'flip-block';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:flip-inline;`。 */
  readonly flipInline: Property.PositionTryFallbacks | CssString = 'flip-inline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:flip-start;`。 */
  readonly flipStart: Property.PositionTryFallbacks | CssString = 'flip-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-try-fallbacks:inherit;`。
   */
  readonly inherit: Property.PositionTryFallbacks | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-try-fallbacks:initial;`。
   */
  readonly initial: Property.PositionTryFallbacks | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:inline-end;`。 */
  readonly inlineEnd: Property.PositionTryFallbacks | CssString = 'inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:inline-start;`。 */
  readonly inlineStart: Property.PositionTryFallbacks | CssString = 'inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:left;`。 */
  readonly left: Property.PositionTryFallbacks | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:none;`。 */
  readonly none: Property.PositionTryFallbacks | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-try-fallbacks:revert;`。
   */
  readonly revert: Property.PositionTryFallbacks | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-try-fallbacks:revert-layer;`。
   */
  readonly revertLayer: Property.PositionTryFallbacks | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:right;`。 */
  readonly right: Property.PositionTryFallbacks | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:self-block-end;`。 */
  readonly selfBlockEnd: Property.PositionTryFallbacks | CssString = 'self-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:self-block-start;`。 */
  readonly selfBlockStart: Property.PositionTryFallbacks | CssString = 'self-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:self-end;`。 */
  readonly selfEnd: Property.PositionTryFallbacks | CssString = 'self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:self-inline-end;`。 */
  readonly selfInlineEnd: Property.PositionTryFallbacks | CssString = 'self-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:self-inline-start;`。 */
  readonly selfInlineStart: Property.PositionTryFallbacks | CssString = 'self-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:self-start;`。 */
  readonly selfStart: Property.PositionTryFallbacks | CssString = 'self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-all;`。 */
  readonly spanAll: Property.PositionTryFallbacks | CssString = 'span-all';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-block-end;`。 */
  readonly spanBlockEnd: Property.PositionTryFallbacks | CssString = 'span-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-block-start;`。 */
  readonly spanBlockStart: Property.PositionTryFallbacks | CssString = 'span-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-bottom;`。 */
  readonly spanBottom: Property.PositionTryFallbacks | CssString = 'span-bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-end;`。 */
  readonly spanEnd: Property.PositionTryFallbacks | CssString = 'span-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-inline-end;`。 */
  readonly spanInlineEnd: Property.PositionTryFallbacks | CssString = 'span-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-inline-start;`。 */
  readonly spanInlineStart: Property.PositionTryFallbacks | CssString = 'span-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-left;`。 */
  readonly spanLeft: Property.PositionTryFallbacks | CssString = 'span-left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-right;`。 */
  readonly spanRight: Property.PositionTryFallbacks | CssString = 'span-right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-self-block-end;`。 */
  readonly spanSelfBlockEnd: Property.PositionTryFallbacks | CssString = 'span-self-block-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-self-block-start;`。 */
  readonly spanSelfBlockStart: Property.PositionTryFallbacks | CssString = 'span-self-block-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-self-end;`。 */
  readonly spanSelfEnd: Property.PositionTryFallbacks | CssString = 'span-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-self-inline-end;`。 */
  readonly spanSelfInlineEnd: Property.PositionTryFallbacks | CssString = 'span-self-inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-self-inline-start;`。 */
  readonly spanSelfInlineStart: Property.PositionTryFallbacks | CssString =
    'span-self-inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-self-start;`。 */
  readonly spanSelfStart: Property.PositionTryFallbacks | CssString = 'span-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-start;`。 */
  readonly spanStart: Property.PositionTryFallbacks | CssString = 'span-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-top;`。 */
  readonly spanTop: Property.PositionTryFallbacks | CssString = 'span-top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-x-end;`。 */
  readonly spanXEnd: Property.PositionTryFallbacks | CssString = 'span-x-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-x-self-end;`。 */
  readonly spanXSelfEnd: Property.PositionTryFallbacks | CssString = 'span-x-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-x-self-start;`。 */
  readonly spanXSelfStart: Property.PositionTryFallbacks | CssString = 'span-x-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-x-start;`。 */
  readonly spanXStart: Property.PositionTryFallbacks | CssString = 'span-x-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-y-end;`。 */
  readonly spanYEnd: Property.PositionTryFallbacks | CssString = 'span-y-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-y-self-end;`。 */
  readonly spanYSelfEnd: Property.PositionTryFallbacks | CssString = 'span-y-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-y-self-start;`。 */
  readonly spanYSelfStart: Property.PositionTryFallbacks | CssString = 'span-y-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:span-y-start;`。 */
  readonly spanYStart: Property.PositionTryFallbacks | CssString = 'span-y-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:start;`。 */
  readonly start: Property.PositionTryFallbacks | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:top;`。 */
  readonly top: Property.PositionTryFallbacks | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-try-fallbacks:unset;`。
   */
  readonly unset: Property.PositionTryFallbacks | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:x-end;`。 */
  readonly xEnd: Property.PositionTryFallbacks | CssString = 'x-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:x-self-end;`。 */
  readonly xSelfEnd: Property.PositionTryFallbacks | CssString = 'x-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:x-self-start;`。 */
  readonly xSelfStart: Property.PositionTryFallbacks | CssString = 'x-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:x-start;`。 */
  readonly xStart: Property.PositionTryFallbacks | CssString = 'x-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:y-end;`。 */
  readonly yEnd: Property.PositionTryFallbacks | CssString = 'y-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:y-self-end;`。 */
  readonly ySelfEnd: Property.PositionTryFallbacks | CssString = 'y-self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:y-self-start;`。 */
  readonly ySelfStart: Property.PositionTryFallbacks | CssString = 'y-self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-fallbacks:y-start;`。 */
  readonly yStart: Property.PositionTryFallbacks | CssString = 'y-start';
}

/**
 * 设置锚点定位溢出时尝试的替代位置。（position-try-fallbacks）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
 */
export class PositionTryFallbacksCss extends CssProperty {
  /** CSS 声明：`position-try-fallbacks:block-end;`。 */
  readonly blockEnd: string = 'position-try-fallbacks:block-end;';
  /** CSS 声明：`position-try-fallbacks:block-start;`。 */
  readonly blockStart: string = 'position-try-fallbacks:block-start;';
  /** CSS 声明：`position-try-fallbacks:bottom;`。 */
  readonly bottom: string = 'position-try-fallbacks:bottom;';
  /** CSS 声明：`position-try-fallbacks:center;`。 */
  readonly center: string = 'position-try-fallbacks:center;';
  /** CSS 声明：`position-try-fallbacks:end;`。 */
  readonly end: string = 'position-try-fallbacks:end;';
  /** CSS 声明：`position-try-fallbacks:flip-block;`。 */
  readonly flipBlock: string = 'position-try-fallbacks:flip-block;';
  /** CSS 声明：`position-try-fallbacks:flip-inline;`。 */
  readonly flipInline: string = 'position-try-fallbacks:flip-inline;';
  /** CSS 声明：`position-try-fallbacks:flip-start;`。 */
  readonly flipStart: string = 'position-try-fallbacks:flip-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-try-fallbacks:inherit;`。
   */
  readonly inherit: string = 'position-try-fallbacks:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-try-fallbacks:initial;`。
   */
  readonly initial: string = 'position-try-fallbacks:initial;';
  /** CSS 声明：`position-try-fallbacks:inline-end;`。 */
  readonly inlineEnd: string = 'position-try-fallbacks:inline-end;';
  /** CSS 声明：`position-try-fallbacks:inline-start;`。 */
  readonly inlineStart: string = 'position-try-fallbacks:inline-start;';
  /** CSS 声明：`position-try-fallbacks:left;`。 */
  readonly left: string = 'position-try-fallbacks:left;';
  /** CSS 声明：`position-try-fallbacks:none;`。 */
  readonly none: string = 'position-try-fallbacks:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-try-fallbacks:revert;`。
   */
  readonly revert: string = 'position-try-fallbacks:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-try-fallbacks:revert-layer;`。
   */
  readonly revertLayer: string = 'position-try-fallbacks:revert-layer;';
  /** CSS 声明：`position-try-fallbacks:right;`。 */
  readonly right: string = 'position-try-fallbacks:right;';
  /** CSS 声明：`position-try-fallbacks:self-block-end;`。 */
  readonly selfBlockEnd: string = 'position-try-fallbacks:self-block-end;';
  /** CSS 声明：`position-try-fallbacks:self-block-start;`。 */
  readonly selfBlockStart: string = 'position-try-fallbacks:self-block-start;';
  /** CSS 声明：`position-try-fallbacks:self-end;`。 */
  readonly selfEnd: string = 'position-try-fallbacks:self-end;';
  /** CSS 声明：`position-try-fallbacks:self-inline-end;`。 */
  readonly selfInlineEnd: string = 'position-try-fallbacks:self-inline-end;';
  /** CSS 声明：`position-try-fallbacks:self-inline-start;`。 */
  readonly selfInlineStart: string = 'position-try-fallbacks:self-inline-start;';
  /** CSS 声明：`position-try-fallbacks:self-start;`。 */
  readonly selfStart: string = 'position-try-fallbacks:self-start;';
  /** CSS 声明：`position-try-fallbacks:span-all;`。 */
  readonly spanAll: string = 'position-try-fallbacks:span-all;';
  /** CSS 声明：`position-try-fallbacks:span-block-end;`。 */
  readonly spanBlockEnd: string = 'position-try-fallbacks:span-block-end;';
  /** CSS 声明：`position-try-fallbacks:span-block-start;`。 */
  readonly spanBlockStart: string = 'position-try-fallbacks:span-block-start;';
  /** CSS 声明：`position-try-fallbacks:span-bottom;`。 */
  readonly spanBottom: string = 'position-try-fallbacks:span-bottom;';
  /** CSS 声明：`position-try-fallbacks:span-end;`。 */
  readonly spanEnd: string = 'position-try-fallbacks:span-end;';
  /** CSS 声明：`position-try-fallbacks:span-inline-end;`。 */
  readonly spanInlineEnd: string = 'position-try-fallbacks:span-inline-end;';
  /** CSS 声明：`position-try-fallbacks:span-inline-start;`。 */
  readonly spanInlineStart: string = 'position-try-fallbacks:span-inline-start;';
  /** CSS 声明：`position-try-fallbacks:span-left;`。 */
  readonly spanLeft: string = 'position-try-fallbacks:span-left;';
  /** CSS 声明：`position-try-fallbacks:span-right;`。 */
  readonly spanRight: string = 'position-try-fallbacks:span-right;';
  /** CSS 声明：`position-try-fallbacks:span-self-block-end;`。 */
  readonly spanSelfBlockEnd: string = 'position-try-fallbacks:span-self-block-end;';
  /** CSS 声明：`position-try-fallbacks:span-self-block-start;`。 */
  readonly spanSelfBlockStart: string = 'position-try-fallbacks:span-self-block-start;';
  /** CSS 声明：`position-try-fallbacks:span-self-end;`。 */
  readonly spanSelfEnd: string = 'position-try-fallbacks:span-self-end;';
  /** CSS 声明：`position-try-fallbacks:span-self-inline-end;`。 */
  readonly spanSelfInlineEnd: string = 'position-try-fallbacks:span-self-inline-end;';
  /** CSS 声明：`position-try-fallbacks:span-self-inline-start;`。 */
  readonly spanSelfInlineStart: string = 'position-try-fallbacks:span-self-inline-start;';
  /** CSS 声明：`position-try-fallbacks:span-self-start;`。 */
  readonly spanSelfStart: string = 'position-try-fallbacks:span-self-start;';
  /** CSS 声明：`position-try-fallbacks:span-start;`。 */
  readonly spanStart: string = 'position-try-fallbacks:span-start;';
  /** CSS 声明：`position-try-fallbacks:span-top;`。 */
  readonly spanTop: string = 'position-try-fallbacks:span-top;';
  /** CSS 声明：`position-try-fallbacks:span-x-end;`。 */
  readonly spanXEnd: string = 'position-try-fallbacks:span-x-end;';
  /** CSS 声明：`position-try-fallbacks:span-x-self-end;`。 */
  readonly spanXSelfEnd: string = 'position-try-fallbacks:span-x-self-end;';
  /** CSS 声明：`position-try-fallbacks:span-x-self-start;`。 */
  readonly spanXSelfStart: string = 'position-try-fallbacks:span-x-self-start;';
  /** CSS 声明：`position-try-fallbacks:span-x-start;`。 */
  readonly spanXStart: string = 'position-try-fallbacks:span-x-start;';
  /** CSS 声明：`position-try-fallbacks:span-y-end;`。 */
  readonly spanYEnd: string = 'position-try-fallbacks:span-y-end;';
  /** CSS 声明：`position-try-fallbacks:span-y-self-end;`。 */
  readonly spanYSelfEnd: string = 'position-try-fallbacks:span-y-self-end;';
  /** CSS 声明：`position-try-fallbacks:span-y-self-start;`。 */
  readonly spanYSelfStart: string = 'position-try-fallbacks:span-y-self-start;';
  /** CSS 声明：`position-try-fallbacks:span-y-start;`。 */
  readonly spanYStart: string = 'position-try-fallbacks:span-y-start;';
  /** CSS 声明：`position-try-fallbacks:start;`。 */
  readonly start: string = 'position-try-fallbacks:start;';
  /** CSS 声明：`position-try-fallbacks:top;`。 */
  readonly top: string = 'position-try-fallbacks:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-try-fallbacks:unset;`。
   */
  readonly unset: string = 'position-try-fallbacks:unset;';
  /** CSS 声明：`position-try-fallbacks:x-end;`。 */
  readonly xEnd: string = 'position-try-fallbacks:x-end;';
  /** CSS 声明：`position-try-fallbacks:x-self-end;`。 */
  readonly xSelfEnd: string = 'position-try-fallbacks:x-self-end;';
  /** CSS 声明：`position-try-fallbacks:x-self-start;`。 */
  readonly xSelfStart: string = 'position-try-fallbacks:x-self-start;';
  /** CSS 声明：`position-try-fallbacks:x-start;`。 */
  readonly xStart: string = 'position-try-fallbacks:x-start;';
  /** CSS 声明：`position-try-fallbacks:y-end;`。 */
  readonly yEnd: string = 'position-try-fallbacks:y-end;';
  /** CSS 声明：`position-try-fallbacks:y-self-end;`。 */
  readonly ySelfEnd: string = 'position-try-fallbacks:y-self-end;';
  /** CSS 声明：`position-try-fallbacks:y-self-start;`。 */
  readonly ySelfStart: string = 'position-try-fallbacks:y-self-start;';
  /** CSS 声明：`position-try-fallbacks:y-start;`。 */
  readonly yStart: string = 'position-try-fallbacks:y-start;';
  /**
   * 创建 position-try-fallbacks 属性作者；普通使用通过 s.positionTryFallbacks 取得共享实例。
   * @example
   * class CustomPositionTryFallbacksCss extends PositionTryFallbacksCss {}
   */
  constructor() {
    super('position-try-fallbacks');
  }
  /**
   * 原样生成 position-try-fallbacks 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 position-try-fallbacks:value;。
   * @example
   * s.positionTryFallbacks.raw('inherit') // position-try-fallbacks:inherit;
   */
  raw(value: Property.PositionTryFallbacks | CssString): string {
    return this.declaration(value);
  }
}

/**
 * position-try-order 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PositionTryOrderKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-try-order:inherit;`。
   */
  readonly inherit: Property.PositionTryOrder | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-try-order:initial;`。
   */
  readonly initial: Property.PositionTryOrder | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-order:most-block-size;`。 */
  readonly mostBlockSize: Property.PositionTryOrder | CssString = 'most-block-size';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-order:most-height;`。 */
  readonly mostHeight: Property.PositionTryOrder | CssString = 'most-height';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-order:most-inline-size;`。 */
  readonly mostInlineSize: Property.PositionTryOrder | CssString = 'most-inline-size';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-order:most-width;`。 */
  readonly mostWidth: Property.PositionTryOrder | CssString = 'most-width';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-try-order:normal;`。 */
  readonly normal: Property.PositionTryOrder | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-try-order:revert;`。
   */
  readonly revert: Property.PositionTryOrder | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-try-order:revert-layer;`。
   */
  readonly revertLayer: Property.PositionTryOrder | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-try-order:unset;`。
   */
  readonly unset: Property.PositionTryOrder | CssString = 'unset';
}

/**
 * 设置锚点定位候选方案的尝试顺序。（position-try-order）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
 */
export class PositionTryOrderCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-try-order:inherit;`。
   */
  readonly inherit: string = 'position-try-order:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-try-order:initial;`。
   */
  readonly initial: string = 'position-try-order:initial;';
  /** CSS 声明：`position-try-order:most-block-size;`。 */
  readonly mostBlockSize: string = 'position-try-order:most-block-size;';
  /** CSS 声明：`position-try-order:most-height;`。 */
  readonly mostHeight: string = 'position-try-order:most-height;';
  /** CSS 声明：`position-try-order:most-inline-size;`。 */
  readonly mostInlineSize: string = 'position-try-order:most-inline-size;';
  /** CSS 声明：`position-try-order:most-width;`。 */
  readonly mostWidth: string = 'position-try-order:most-width;';
  /** CSS 声明：`position-try-order:normal;`。 */
  readonly normal: string = 'position-try-order:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-try-order:revert;`。
   */
  readonly revert: string = 'position-try-order:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-try-order:revert-layer;`。
   */
  readonly revertLayer: string = 'position-try-order:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-try-order:unset;`。
   */
  readonly unset: string = 'position-try-order:unset;';
  /**
   * 创建 position-try-order 属性作者；普通使用通过 s.positionTryOrder 取得共享实例。
   * @example
   * class CustomPositionTryOrderCss extends PositionTryOrderCss {}
   */
  constructor() {
    super('position-try-order');
  }
  /**
   * 原样生成 position-try-order 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 position-try-order:value;。
   * @example
   * s.positionTryOrder.raw('inherit') // position-try-order:inherit;
   */
  raw(value: Property.PositionTryOrder | CssString): string {
    return this.declaration(value);
  }
}

/**
 * position-visibility 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PositionVisibilityKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-visibility:always;`。 */
  readonly always: Property.PositionVisibility | CssString = 'always';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-visibility:anchors-valid;`。 */
  readonly anchorsValid: Property.PositionVisibility | CssString = 'anchors-valid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-visibility:anchors-visible;`。 */
  readonly anchorsVisible: Property.PositionVisibility | CssString = 'anchors-visible';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-visibility:inherit;`。
   */
  readonly inherit: Property.PositionVisibility | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-visibility:initial;`。
   */
  readonly initial: Property.PositionVisibility | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`position-visibility:no-overflow;`。 */
  readonly noOverflow: Property.PositionVisibility | CssString = 'no-overflow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-visibility:revert;`。
   */
  readonly revert: Property.PositionVisibility | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-visibility:revert-layer;`。
   */
  readonly revertLayer: Property.PositionVisibility | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-visibility:unset;`。
   */
  readonly unset: Property.PositionVisibility | CssString = 'unset';
}

/**
 * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。（position-visibility）
 *
 * CSS 初始值：`anchors-visible`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
 */
export class PositionVisibilityCss extends CssProperty {
  /** CSS 声明：`position-visibility:always;`。 */
  readonly always: string = 'position-visibility:always;';
  /** CSS 声明：`position-visibility:anchors-valid;`。 */
  readonly anchorsValid: string = 'position-visibility:anchors-valid;';
  /** CSS 声明：`position-visibility:anchors-visible;`。 */
  readonly anchorsVisible: string = 'position-visibility:anchors-visible;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`position-visibility:inherit;`。
   */
  readonly inherit: string = 'position-visibility:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`position-visibility:initial;`。
   */
  readonly initial: string = 'position-visibility:initial;';
  /** CSS 声明：`position-visibility:no-overflow;`。 */
  readonly noOverflow: string = 'position-visibility:no-overflow;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`position-visibility:revert;`。
   */
  readonly revert: string = 'position-visibility:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`position-visibility:revert-layer;`。
   */
  readonly revertLayer: string = 'position-visibility:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`position-visibility:unset;`。
   */
  readonly unset: string = 'position-visibility:unset;';
  /**
   * 创建 position-visibility 属性作者；普通使用通过 s.positionVisibility 取得共享实例。
   * @example
   * class CustomPositionVisibilityCss extends PositionVisibilityCss {}
   */
  constructor() {
    super('position-visibility');
  }
  /**
   * 原样生成 position-visibility 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 position-visibility:value;。
   * @example
   * s.positionVisibility.raw('inherit') // position-visibility:inherit;
   */
  raw(value: Property.PositionVisibility | CssString): string {
    return this.declaration(value);
  }
}

/**
 * print-color-adjust 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class PrintColorAdjustKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`print-color-adjust:economy;`。 */
  readonly economy: Property.PrintColorAdjust | CssString = 'economy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`print-color-adjust:exact;`。 */
  readonly exact: Property.PrintColorAdjust | CssString = 'exact';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`print-color-adjust:inherit;`。
   */
  readonly inherit: Property.PrintColorAdjust | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`print-color-adjust:initial;`。
   */
  readonly initial: Property.PrintColorAdjust | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`print-color-adjust:revert;`。
   */
  readonly revert: Property.PrintColorAdjust | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`print-color-adjust:revert-layer;`。
   */
  readonly revertLayer: Property.PrintColorAdjust | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`print-color-adjust:unset;`。
   */
  readonly unset: Property.PrintColorAdjust | CssString = 'unset';
}

/**
 * 设置打印时浏览器是否可以为节墨或可读性调整颜色。（print-color-adjust）
 *
 * CSS 初始值：`economy`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class PrintColorAdjustCss extends CssProperty {
  /** CSS 声明：`print-color-adjust:economy;`。 */
  readonly economy: string = 'print-color-adjust:economy;';
  /** CSS 声明：`print-color-adjust:exact;`。 */
  readonly exact: string = 'print-color-adjust:exact;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`print-color-adjust:inherit;`。
   */
  readonly inherit: string = 'print-color-adjust:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`print-color-adjust:initial;`。
   */
  readonly initial: string = 'print-color-adjust:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`print-color-adjust:revert;`。
   */
  readonly revert: string = 'print-color-adjust:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`print-color-adjust:revert-layer;`。
   */
  readonly revertLayer: string = 'print-color-adjust:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`print-color-adjust:unset;`。
   */
  readonly unset: string = 'print-color-adjust:unset;';
  /**
   * 创建 print-color-adjust 属性作者；普通使用通过 s.printColorAdjust 取得共享实例。
   * @example
   * class CustomPrintColorAdjustCss extends PrintColorAdjustCss {}
   */
  constructor() {
    super('print-color-adjust');
  }
  /**
   * 原样生成 print-color-adjust 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 print-color-adjust:value;。
   * @example
   * s.printColorAdjust.raw('inherit') // print-color-adjust:inherit;
   */
  raw(value: Property.PrintColorAdjust | CssString): string {
    return this.declaration(value);
  }
}

/**
 * quotes 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class QuotesKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`quotes:auto;`。 */
  readonly auto: Property.Quotes | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`quotes:inherit;`。
   */
  readonly inherit: Property.Quotes | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`quotes:initial;`。
   */
  readonly initial: Property.Quotes | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`quotes:none;`。 */
  readonly none: Property.Quotes | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`quotes:revert;`。
   */
  readonly revert: Property.Quotes | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`quotes:revert-layer;`。
   */
  readonly revertLayer: Property.Quotes | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`quotes:unset;`。
   */
  readonly unset: Property.Quotes | CssString = 'unset';
}

/**
 * 设置生成引号所用的开闭字符对。（quotes）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
 */
export class QuotesCss extends CssProperty {
  /** CSS 声明：`quotes:auto;`。 */
  readonly auto: string = 'quotes:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`quotes:inherit;`。
   */
  readonly inherit: string = 'quotes:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`quotes:initial;`。
   */
  readonly initial: string = 'quotes:initial;';
  /** CSS 声明：`quotes:none;`。 */
  readonly none: string = 'quotes:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`quotes:revert;`。
   */
  readonly revert: string = 'quotes:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`quotes:revert-layer;`。
   */
  readonly revertLayer: string = 'quotes:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`quotes:unset;`。
   */
  readonly unset: string = 'quotes:unset;';
  /**
   * 创建 quotes 属性作者；普通使用通过 s.quotes 取得共享实例。
   * @example
   * class CustomQuotesCss extends QuotesCss {}
   */
  constructor() {
    super('quotes');
  }
  /**
   * 原样生成 quotes 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 quotes:value;。
   * @example
   * s.quotes.raw('inherit') // quotes:inherit;
   */
  raw(value: Property.Quotes | CssString): string {
    return this.declaration(value);
  }
}

/**
 * r 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`r:inherit;`。
   */
  readonly inherit: Property.R | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`r:initial;`。
   */
  readonly initial: Property.R | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`r:revert;`。
   */
  readonly revert: Property.R | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`r:revert-layer;`。
   */
  readonly revertLayer: Property.R | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`r:unset;`。
   */
  readonly unset: Property.R | CssString = 'unset';
}

/**
 * 设置 SVG 圆的半径。（r）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
 */
export class RCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`r:inherit;`。
   */
  readonly inherit: string = 'r:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`r:initial;`。
   */
  readonly initial: string = 'r:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`r:revert;`。
   */
  readonly revert: string = 'r:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`r:revert-layer;`。
   */
  readonly revertLayer: string = 'r:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`r:unset;`。
   */
  readonly unset: string = 'r:unset;';
  /**
   * 创建 r 属性作者；普通使用通过 s.r 取得共享实例。
   * @example
   * class CustomRCss extends RCss {}
   */
  constructor() {
    super('r');
  }
  /**
   * 原样生成 r 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 r:value;。
   * @example
   * s.r.raw('inherit') // r:inherit;
   */
  raw(value: Property.R | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.r.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.r.calc('var(--value) * 2')
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
   * s.r.min('var(--first)', 'var(--second)')
   */
  min(value: Property.R | CssString, ...others: (Property.R | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.r.max('var(--first)', 'var(--second)')
   */
  max(value: Property.R | CssString, ...others: (Property.R | CssString)[]): string {
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
   * s.r.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.R | CssString,
    preferred: Property.R | CssString,
    maximum: Property.R | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * resize 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ResizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`resize:block;`。 */
  readonly block: Property.Resize | CssString = 'block';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`resize:both;`。 */
  readonly both: Property.Resize | CssString = 'both';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`resize:horizontal;`。 */
  readonly horizontal: Property.Resize | CssString = 'horizontal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`resize:inherit;`。
   */
  readonly inherit: Property.Resize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`resize:initial;`。
   */
  readonly initial: Property.Resize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`resize:inline;`。 */
  readonly inline: Property.Resize | CssString = 'inline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`resize:none;`。 */
  readonly none: Property.Resize | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`resize:revert;`。
   */
  readonly revert: Property.Resize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`resize:revert-layer;`。
   */
  readonly revertLayer: Property.Resize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`resize:unset;`。
   */
  readonly unset: Property.Resize | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`resize:vertical;`。 */
  readonly vertical: Property.Resize | CssString = 'vertical';
}

/**
 * 设置用户是否能调整元素尺寸以及可调整的方向。（resize）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
 */
export class ResizeCss extends CssProperty {
  /** CSS 声明：`resize:block;`。 */
  readonly block: string = 'resize:block;';
  /** CSS 声明：`resize:both;`。 */
  readonly both: string = 'resize:both;';
  /** CSS 声明：`resize:horizontal;`。 */
  readonly horizontal: string = 'resize:horizontal;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`resize:inherit;`。
   */
  readonly inherit: string = 'resize:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`resize:initial;`。
   */
  readonly initial: string = 'resize:initial;';
  /** CSS 声明：`resize:inline;`。 */
  readonly inline: string = 'resize:inline;';
  /** CSS 声明：`resize:none;`。 */
  readonly none: string = 'resize:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`resize:revert;`。
   */
  readonly revert: string = 'resize:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`resize:revert-layer;`。
   */
  readonly revertLayer: string = 'resize:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`resize:unset;`。
   */
  readonly unset: string = 'resize:unset;';
  /** CSS 声明：`resize:vertical;`。 */
  readonly vertical: string = 'resize:vertical;';
  /**
   * 创建 resize 属性作者；普通使用通过 s.resize 取得共享实例。
   * @example
   * class CustomResizeCss extends ResizeCss {}
   */
  constructor() {
    super('resize');
  }
  /**
   * 原样生成 resize 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 resize:value;。
   * @example
   * s.resize.raw('inherit') // resize:inherit;
   */
  raw(value: Property.Resize | CssString): string {
    return this.declaration(value);
  }
}

/**
 * right 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`right:auto;`。 */
  readonly auto: Property.Right | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`right:inherit;`。
   */
  readonly inherit: Property.Right | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`right:initial;`。
   */
  readonly initial: Property.Right | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`right:revert;`。
   */
  readonly revert: Property.Right | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`right:revert-layer;`。
   */
  readonly revertLayer: Property.Right | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`right:unset;`。
   */
  readonly unset: Property.Right | CssString = 'unset';
}

/**
 * 设置定位元素相对于其定位参照的右侧偏移。（right）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
 */
export class RightCss extends LengthCssProperty {
  /** CSS 声明：`right:auto;`。 */
  readonly auto: string = 'right:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`right:inherit;`。
   */
  readonly inherit: string = 'right:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`right:initial;`。
   */
  readonly initial: string = 'right:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`right:revert;`。
   */
  readonly revert: string = 'right:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`right:revert-layer;`。
   */
  readonly revertLayer: string = 'right:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`right:unset;`。
   */
  readonly unset: string = 'right:unset;';
  /**
   * 创建 right 属性作者；普通使用通过 s.right 取得共享实例。
   * @example
   * class CustomRightCss extends RightCss {}
   */
  constructor() {
    super('right');
  }
  /**
   * 原样生成 right 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 right:value;。
   * @example
   * s.right.raw('inherit') // right:inherit;
   */
  raw(value: Property.Right | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.right.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.right.calc('var(--value) * 2')
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
   * s.right.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Right | CssString, ...others: (Property.Right | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.right.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Right | CssString, ...others: (Property.Right | CssString)[]): string {
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
   * s.right.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Right | CssString,
    preferred: Property.Right | CssString,
    maximum: Property.Right | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * rotate 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RotateKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`rotate:inherit;`。
   */
  readonly inherit: Property.Rotate | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`rotate:initial;`。
   */
  readonly initial: Property.Rotate | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`rotate:none;`。 */
  readonly none: Property.Rotate | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`rotate:revert;`。
   */
  readonly revert: Property.Rotate | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`rotate:revert-layer;`。
   */
  readonly revertLayer: Property.Rotate | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`rotate:unset;`。
   */
  readonly unset: Property.Rotate | CssString = 'unset';
}

/**
 * 独立设置元素旋转，不必重写 transform 中的其他变换。（rotate）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
 */
export class RotateCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`rotate:inherit;`。
   */
  readonly inherit: string = 'rotate:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`rotate:initial;`。
   */
  readonly initial: string = 'rotate:initial;';
  /** CSS 声明：`rotate:none;`。 */
  readonly none: string = 'rotate:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`rotate:revert;`。
   */
  readonly revert: string = 'rotate:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`rotate:revert-layer;`。
   */
  readonly revertLayer: string = 'rotate:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`rotate:unset;`。
   */
  readonly unset: string = 'rotate:unset;';
  /**
   * 创建 rotate 属性作者；普通使用通过 s.rotate 取得共享实例。
   * @example
   * class CustomRotateCss extends RotateCss {}
   */
  constructor() {
    super('rotate');
  }
  /**
   * 原样生成 rotate 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 rotate:value;。
   * @example
   * s.rotate.raw('inherit') // rotate:inherit;
   */
  raw(value: Property.Rotate | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 deg 单位生成完整属性声明。角度，360deg 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 deg。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.rotate.deg(1)
   */
  deg(value: number): string {
    return this.declaration(`${value}deg`);
  }
  /**
   * 使用 grad 单位生成完整属性声明。百分度，400grad 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 grad。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.rotate.grad(1)
   */
  grad(value: number): string {
    return this.declaration(`${value}grad`);
  }
  /**
   * 使用 rad 单位生成完整属性声明。弧度，2πrad 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 rad。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.rotate.rad(1)
   */
  rad(value: number): string {
    return this.declaration(`${value}rad`);
  }
  /**
   * 使用 turn 单位生成完整属性声明。周数，1turn 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 turn。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.rotate.turn(1)
   */
  turn(value: number): string {
    return this.declaration(`${value}turn`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.rotate.calc('var(--value) * 2')
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
   * s.rotate.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Rotate | CssString, ...others: (Property.Rotate | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.rotate.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Rotate | CssString, ...others: (Property.Rotate | CssString)[]): string {
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
   * s.rotate.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Rotate | CssString,
    preferred: Property.Rotate | CssString,
    maximum: Property.Rotate | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * row-gap 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RowGapKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`row-gap:inherit;`。
   */
  readonly inherit: Property.RowGap | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`row-gap:initial;`。
   */
  readonly initial: Property.RowGap | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`row-gap:normal;`。 */
  readonly normal: Property.RowGap | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`row-gap:revert;`。
   */
  readonly revert: Property.RowGap | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`row-gap:revert-layer;`。
   */
  readonly revertLayer: Property.RowGap | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`row-gap:unset;`。
   */
  readonly unset: Property.RowGap | CssString = 'unset';
}

/**
 * 设置布局中相邻行之间的间距。（row-gap）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
 */
export class RowGapCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`row-gap:inherit;`。
   */
  readonly inherit: string = 'row-gap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`row-gap:initial;`。
   */
  readonly initial: string = 'row-gap:initial;';
  /** CSS 声明：`row-gap:normal;`。 */
  readonly normal: string = 'row-gap:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`row-gap:revert;`。
   */
  readonly revert: string = 'row-gap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`row-gap:revert-layer;`。
   */
  readonly revertLayer: string = 'row-gap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`row-gap:unset;`。
   */
  readonly unset: string = 'row-gap:unset;';
  /**
   * 创建 row-gap 属性作者；普通使用通过 s.rowGap 取得共享实例。
   * @example
   * class CustomRowGapCss extends RowGapCss {}
   */
  constructor() {
    super('row-gap');
  }
  /**
   * 原样生成 row-gap 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 row-gap:value;。
   * @example
   * s.rowGap.raw('inherit') // row-gap:inherit;
   */
  raw(value: Property.RowGap | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.rowGap.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.rowGap.calc('var(--value) * 2')
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
   * s.rowGap.min('var(--first)', 'var(--second)')
   */
  min(value: Property.RowGap | CssString, ...others: (Property.RowGap | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.rowGap.max('var(--first)', 'var(--second)')
   */
  max(value: Property.RowGap | CssString, ...others: (Property.RowGap | CssString)[]): string {
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
   * s.rowGap.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.RowGap | CssString,
    preferred: Property.RowGap | CssString,
    maximum: Property.RowGap | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * ruby-align 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RubyAlignKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-align:center;`。 */
  readonly center: Property.RubyAlign | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-align:inherit;`。
   */
  readonly inherit: Property.RubyAlign | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-align:initial;`。
   */
  readonly initial: Property.RubyAlign | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-align:revert;`。
   */
  readonly revert: Property.RubyAlign | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-align:revert-layer;`。
   */
  readonly revertLayer: Property.RubyAlign | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-align:space-around;`。 */
  readonly spaceAround: Property.RubyAlign | CssString = 'space-around';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-align:space-between;`。 */
  readonly spaceBetween: Property.RubyAlign | CssString = 'space-between';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-align:start;`。 */
  readonly start: Property.RubyAlign | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-align:unset;`。
   */
  readonly unset: Property.RubyAlign | CssString = 'unset';
}

/**
 * 设置注音文字与基底文字之间剩余空间的分配方式。（ruby-align）
 *
 * CSS 初始值：`space-around`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
 */
export class RubyAlignCss extends CssProperty {
  /** CSS 声明：`ruby-align:center;`。 */
  readonly center: string = 'ruby-align:center;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-align:inherit;`。
   */
  readonly inherit: string = 'ruby-align:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-align:initial;`。
   */
  readonly initial: string = 'ruby-align:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-align:revert;`。
   */
  readonly revert: string = 'ruby-align:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-align:revert-layer;`。
   */
  readonly revertLayer: string = 'ruby-align:revert-layer;';
  /** CSS 声明：`ruby-align:space-around;`。 */
  readonly spaceAround: string = 'ruby-align:space-around;';
  /** CSS 声明：`ruby-align:space-between;`。 */
  readonly spaceBetween: string = 'ruby-align:space-between;';
  /** CSS 声明：`ruby-align:start;`。 */
  readonly start: string = 'ruby-align:start;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-align:unset;`。
   */
  readonly unset: string = 'ruby-align:unset;';
  /**
   * 创建 ruby-align 属性作者；普通使用通过 s.rubyAlign 取得共享实例。
   * @example
   * class CustomRubyAlignCss extends RubyAlignCss {}
   */
  constructor() {
    super('ruby-align');
  }
  /**
   * 原样生成 ruby-align 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 ruby-align:value;。
   * @example
   * s.rubyAlign.raw('inherit') // ruby-align:inherit;
   */
  raw(value: Property.RubyAlign | CssString): string {
    return this.declaration(value);
  }
}

/**
 * ruby-merge 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RubyMergeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-merge:auto;`。 */
  readonly auto: Property.RubyMerge | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-merge:collapse;`。 */
  readonly collapse: Property.RubyMerge | CssString = 'collapse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-merge:inherit;`。
   */
  readonly inherit: Property.RubyMerge | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-merge:initial;`。
   */
  readonly initial: Property.RubyMerge | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-merge:revert;`。
   */
  readonly revert: Property.RubyMerge | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-merge:revert-layer;`。
   */
  readonly revertLayer: Property.RubyMerge | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-merge:separate;`。 */
  readonly separate: Property.RubyMerge | CssString = 'separate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-merge:unset;`。
   */
  readonly unset: Property.RubyMerge | CssString = 'unset';
}

/**
 * 设置相邻注音容器的合并方式；使用前核对目标浏览器。（ruby-merge）
 *
 * CSS 初始值：`separate`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
 */
export class RubyMergeCss extends CssProperty {
  /** CSS 声明：`ruby-merge:auto;`。 */
  readonly auto: string = 'ruby-merge:auto;';
  /** CSS 声明：`ruby-merge:collapse;`。 */
  readonly collapse: string = 'ruby-merge:collapse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-merge:inherit;`。
   */
  readonly inherit: string = 'ruby-merge:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-merge:initial;`。
   */
  readonly initial: string = 'ruby-merge:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-merge:revert;`。
   */
  readonly revert: string = 'ruby-merge:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-merge:revert-layer;`。
   */
  readonly revertLayer: string = 'ruby-merge:revert-layer;';
  /** CSS 声明：`ruby-merge:separate;`。 */
  readonly separate: string = 'ruby-merge:separate;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-merge:unset;`。
   */
  readonly unset: string = 'ruby-merge:unset;';
  /**
   * 创建 ruby-merge 属性作者；普通使用通过 s.rubyMerge 取得共享实例。
   * @example
   * class CustomRubyMergeCss extends RubyMergeCss {}
   */
  constructor() {
    super('ruby-merge');
  }
  /**
   * 原样生成 ruby-merge 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 ruby-merge:value;。
   * @example
   * s.rubyMerge.raw('inherit') // ruby-merge:inherit;
   */
  raw(value: Property.RubyMerge | CssString): string {
    return this.declaration(value);
  }
}

/**
 * ruby-overhang 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RubyOverhangKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-overhang:auto;`。 */
  readonly auto: Property.RubyOverhang | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-overhang:inherit;`。
   */
  readonly inherit: Property.RubyOverhang | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-overhang:initial;`。
   */
  readonly initial: Property.RubyOverhang | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-overhang:none;`。 */
  readonly none: Property.RubyOverhang | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-overhang:revert;`。
   */
  readonly revert: Property.RubyOverhang | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-overhang:revert-layer;`。
   */
  readonly revertLayer: Property.RubyOverhang | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-overhang:unset;`。
   */
  readonly unset: Property.RubyOverhang | CssString = 'unset';
}

/**
 * 控制注音文字是否可以悬伸到相邻文本上方。（ruby-overhang）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
 */
export class RubyOverhangCss extends CssProperty {
  /** CSS 声明：`ruby-overhang:auto;`。 */
  readonly auto: string = 'ruby-overhang:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-overhang:inherit;`。
   */
  readonly inherit: string = 'ruby-overhang:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-overhang:initial;`。
   */
  readonly initial: string = 'ruby-overhang:initial;';
  /** CSS 声明：`ruby-overhang:none;`。 */
  readonly none: string = 'ruby-overhang:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-overhang:revert;`。
   */
  readonly revert: string = 'ruby-overhang:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-overhang:revert-layer;`。
   */
  readonly revertLayer: string = 'ruby-overhang:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-overhang:unset;`。
   */
  readonly unset: string = 'ruby-overhang:unset;';
  /**
   * 创建 ruby-overhang 属性作者；普通使用通过 s.rubyOverhang 取得共享实例。
   * @example
   * class CustomRubyOverhangCss extends RubyOverhangCss {}
   */
  constructor() {
    super('ruby-overhang');
  }
  /**
   * 原样生成 ruby-overhang 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 ruby-overhang:value;。
   * @example
   * s.rubyOverhang.raw('inherit') // ruby-overhang:inherit;
   */
  raw(value: Property.RubyOverhang | CssString): string {
    return this.declaration(value);
  }
}

/**
 * ruby-position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RubyPositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-position:alternate;`。 */
  readonly alternate: Property.RubyPosition | CssString = 'alternate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-position:inherit;`。
   */
  readonly inherit: Property.RubyPosition | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-position:initial;`。
   */
  readonly initial: Property.RubyPosition | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-position:inter-character;`。 */
  readonly interCharacter: Property.RubyPosition | CssString = 'inter-character';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-position:over;`。 */
  readonly over: Property.RubyPosition | CssString = 'over';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-position:revert;`。
   */
  readonly revert: Property.RubyPosition | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-position:revert-layer;`。
   */
  readonly revertLayer: Property.RubyPosition | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`ruby-position:under;`。 */
  readonly under: Property.RubyPosition | CssString = 'under';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-position:unset;`。
   */
  readonly unset: Property.RubyPosition | CssString = 'unset';
}

/**
 * 设置注音文字相对于基底文字的位置。（ruby-position）
 *
 * CSS 初始值：`alternate`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
 */
export class RubyPositionCss extends CssProperty {
  /** CSS 声明：`ruby-position:alternate;`。 */
  readonly alternate: string = 'ruby-position:alternate;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ruby-position:inherit;`。
   */
  readonly inherit: string = 'ruby-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ruby-position:initial;`。
   */
  readonly initial: string = 'ruby-position:initial;';
  /** CSS 声明：`ruby-position:inter-character;`。 */
  readonly interCharacter: string = 'ruby-position:inter-character;';
  /** CSS 声明：`ruby-position:over;`。 */
  readonly over: string = 'ruby-position:over;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ruby-position:revert;`。
   */
  readonly revert: string = 'ruby-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ruby-position:revert-layer;`。
   */
  readonly revertLayer: string = 'ruby-position:revert-layer;';
  /** CSS 声明：`ruby-position:under;`。 */
  readonly under: string = 'ruby-position:under;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ruby-position:unset;`。
   */
  readonly unset: string = 'ruby-position:unset;';
  /**
   * 创建 ruby-position 属性作者；普通使用通过 s.rubyPosition 取得共享实例。
   * @example
   * class CustomRubyPositionCss extends RubyPositionCss {}
   */
  constructor() {
    super('ruby-position');
  }
  /**
   * 原样生成 ruby-position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 ruby-position:value;。
   * @example
   * s.rubyPosition.raw('inherit') // ruby-position:inherit;
   */
  raw(value: Property.RubyPosition | CssString): string {
    return this.declaration(value);
  }
}

/**
 * rx 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RxKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`rx:inherit;`。
   */
  readonly inherit: Property.Rx | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`rx:initial;`。
   */
  readonly initial: Property.Rx | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`rx:revert;`。
   */
  readonly revert: Property.Rx | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`rx:revert-layer;`。
   */
  readonly revertLayer: Property.Rx | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`rx:unset;`。
   */
  readonly unset: Property.Rx | CssString = 'unset';
}

/**
 * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。（rx）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
 */
export class RxCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`rx:inherit;`。
   */
  readonly inherit: string = 'rx:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`rx:initial;`。
   */
  readonly initial: string = 'rx:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`rx:revert;`。
   */
  readonly revert: string = 'rx:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`rx:revert-layer;`。
   */
  readonly revertLayer: string = 'rx:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`rx:unset;`。
   */
  readonly unset: string = 'rx:unset;';
  /**
   * 创建 rx 属性作者；普通使用通过 s.rx 取得共享实例。
   * @example
   * class CustomRxCss extends RxCss {}
   */
  constructor() {
    super('rx');
  }
  /**
   * 原样生成 rx 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 rx:value;。
   * @example
   * s.rx.raw('inherit') // rx:inherit;
   */
  raw(value: Property.Rx | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.rx.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.rx.calc('var(--value) * 2')
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
   * s.rx.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Rx | CssString, ...others: (Property.Rx | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.rx.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Rx | CssString, ...others: (Property.Rx | CssString)[]): string {
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
   * s.rx.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Rx | CssString,
    preferred: Property.Rx | CssString,
    maximum: Property.Rx | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * ry 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class RyKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ry:inherit;`。
   */
  readonly inherit: Property.Ry | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ry:initial;`。
   */
  readonly initial: Property.Ry | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ry:revert;`。
   */
  readonly revert: Property.Ry | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ry:revert-layer;`。
   */
  readonly revertLayer: Property.Ry | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ry:unset;`。
   */
  readonly unset: Property.Ry | CssString = 'unset';
}

/**
 * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。（ry）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
 */
export class RyCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`ry:inherit;`。
   */
  readonly inherit: string = 'ry:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`ry:initial;`。
   */
  readonly initial: string = 'ry:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`ry:revert;`。
   */
  readonly revert: string = 'ry:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`ry:revert-layer;`。
   */
  readonly revertLayer: string = 'ry:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`ry:unset;`。
   */
  readonly unset: string = 'ry:unset;';
  /**
   * 创建 ry 属性作者；普通使用通过 s.ry 取得共享实例。
   * @example
   * class CustomRyCss extends RyCss {}
   */
  constructor() {
    super('ry');
  }
  /**
   * 原样生成 ry 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 ry:value;。
   * @example
   * s.ry.raw('inherit') // ry:inherit;
   */
  raw(value: Property.Ry | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.ry.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.ry.calc('var(--value) * 2')
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
   * s.ry.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Ry | CssString, ...others: (Property.Ry | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.ry.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Ry | CssString, ...others: (Property.Ry | CssString)[]): string {
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
   * s.ry.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Ry | CssString,
    preferred: Property.Ry | CssString,
    maximum: Property.Ry | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}
