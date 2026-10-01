// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/**
 * margin 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin:auto;`。
   */
  readonly auto: Property.Margin | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin:inherit;`。
   */
  readonly inherit: Property.Margin | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin:initial;`。
   */
  readonly initial: Property.Margin | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin:revert;`。
   */
  readonly revert: Property.Margin | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin:revert-layer;`。
   */
  readonly revertLayer: Property.Margin | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin:unset;`。
   */
  readonly unset: Property.Margin | CssString = 'unset';
}

/**
 * 设置盒子四周的外边距，可使用负值或自动外边距。（margin）
 *
 * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。块布局中的垂直外边距可能折叠。
 *
 * 适用场景：控制盒子外侧与相邻内容的距离；布局项统一间隔可考虑容器 gap。
 * @example
 * s.margin.px(8, 16) // margin:8px 16px;
 * @example
 * s.margin.raw('0 auto') // margin:0 auto;
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
 */
export class MarginCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin:auto;`。
   */
  readonly auto: string = 'margin:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin:inherit;`。
   */
  readonly inherit: string = 'margin:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin:initial;`。
   */
  readonly initial: string = 'margin:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin:revert;`。
   */
  readonly revert: string = 'margin:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin:revert-layer;`。
   */
  readonly revertLayer: string = 'margin:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin:unset;`。
   */
  readonly unset: string = 'margin:unset;';
  /**
   * 创建 margin 属性作者；普通使用通过 s.margin 取得共享实例。
   * @example
   * class CustomMarginCss extends MarginCss {}
   */
  constructor() {
    super('margin');
  }
  /**
   * 原样生成 margin 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin:value;。
   * @example
   * s.margin.raw('inherit') // margin:inherit;
   */
  raw(value: Property.Margin | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.margin.px(1)
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
   * s.margin.px(1, 2)
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
   * s.margin.px(1, 2, 3)
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
   * s.margin.px(1, 2, 3, 4)
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
   * s.margin.cm(1)
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
   * s.margin.cm(1, 2)
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
   * s.margin.cm(1, 2, 3)
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
   * s.margin.cm(1, 2, 3, 4)
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
   * s.margin.mm(1)
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
   * s.margin.mm(1, 2)
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
   * s.margin.mm(1, 2, 3)
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
   * s.margin.mm(1, 2, 3, 4)
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
   * s.margin.q(1)
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
   * s.margin.q(1, 2)
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
   * s.margin.q(1, 2, 3)
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
   * s.margin.q(1, 2, 3, 4)
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
   * s.margin.in(1)
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
   * s.margin.in(1, 2)
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
   * s.margin.in(1, 2, 3)
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
   * s.margin.in(1, 2, 3, 4)
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
   * s.margin.pt(1)
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
   * s.margin.pt(1, 2)
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
   * s.margin.pt(1, 2, 3)
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
   * s.margin.pt(1, 2, 3, 4)
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
   * s.margin.pc(1)
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
   * s.margin.pc(1, 2)
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
   * s.margin.pc(1, 2, 3)
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
   * s.margin.pc(1, 2, 3, 4)
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
   * s.margin.em(1)
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
   * s.margin.em(1, 2)
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
   * s.margin.em(1, 2, 3)
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
   * s.margin.em(1, 2, 3, 4)
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
   * s.margin.rem(1)
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
   * s.margin.rem(1, 2)
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
   * s.margin.rem(1, 2, 3)
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
   * s.margin.rem(1, 2, 3, 4)
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
   * s.margin.ex(1)
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
   * s.margin.ex(1, 2)
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
   * s.margin.ex(1, 2, 3)
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
   * s.margin.ex(1, 2, 3, 4)
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
   * s.margin.rex(1)
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
   * s.margin.rex(1, 2)
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
   * s.margin.rex(1, 2, 3)
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
   * s.margin.rex(1, 2, 3, 4)
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
   * s.margin.ch(1)
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
   * s.margin.ch(1, 2)
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
   * s.margin.ch(1, 2, 3)
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
   * s.margin.ch(1, 2, 3, 4)
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
   * s.margin.rch(1)
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
   * s.margin.rch(1, 2)
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
   * s.margin.rch(1, 2, 3)
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
   * s.margin.rch(1, 2, 3, 4)
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
   * s.margin.cap(1)
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
   * s.margin.cap(1, 2)
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
   * s.margin.cap(1, 2, 3)
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
   * s.margin.cap(1, 2, 3, 4)
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
   * s.margin.rcap(1)
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
   * s.margin.rcap(1, 2)
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
   * s.margin.rcap(1, 2, 3)
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
   * s.margin.rcap(1, 2, 3, 4)
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
   * s.margin.ic(1)
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
   * s.margin.ic(1, 2)
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
   * s.margin.ic(1, 2, 3)
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
   * s.margin.ic(1, 2, 3, 4)
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
   * s.margin.ric(1)
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
   * s.margin.ric(1, 2)
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
   * s.margin.ric(1, 2, 3)
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
   * s.margin.ric(1, 2, 3, 4)
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
   * s.margin.lh(1)
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
   * s.margin.lh(1, 2)
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
   * s.margin.lh(1, 2, 3)
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
   * s.margin.lh(1, 2, 3, 4)
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
   * s.margin.rlh(1)
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
   * s.margin.rlh(1, 2)
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
   * s.margin.rlh(1, 2, 3)
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
   * s.margin.rlh(1, 2, 3, 4)
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
   * s.margin.vw(1)
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
   * s.margin.vw(1, 2)
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
   * s.margin.vw(1, 2, 3)
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
   * s.margin.vw(1, 2, 3, 4)
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
   * s.margin.vh(1)
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
   * s.margin.vh(1, 2)
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
   * s.margin.vh(1, 2, 3)
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
   * s.margin.vh(1, 2, 3, 4)
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
   * s.margin.vi(1)
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
   * s.margin.vi(1, 2)
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
   * s.margin.vi(1, 2, 3)
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
   * s.margin.vi(1, 2, 3, 4)
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
   * s.margin.vb(1)
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
   * s.margin.vb(1, 2)
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
   * s.margin.vb(1, 2, 3)
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
   * s.margin.vb(1, 2, 3, 4)
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
   * s.margin.vmin(1)
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
   * s.margin.vmin(1, 2)
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
   * s.margin.vmin(1, 2, 3)
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
   * s.margin.vmin(1, 2, 3, 4)
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
   * s.margin.vmax(1)
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
   * s.margin.vmax(1, 2)
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
   * s.margin.vmax(1, 2, 3)
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
   * s.margin.vmax(1, 2, 3, 4)
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
   * s.margin.svw(1)
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
   * s.margin.svw(1, 2)
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
   * s.margin.svw(1, 2, 3)
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
   * s.margin.svw(1, 2, 3, 4)
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
   * s.margin.svh(1)
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
   * s.margin.svh(1, 2)
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
   * s.margin.svh(1, 2, 3)
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
   * s.margin.svh(1, 2, 3, 4)
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
   * s.margin.svi(1)
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
   * s.margin.svi(1, 2)
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
   * s.margin.svi(1, 2, 3)
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
   * s.margin.svi(1, 2, 3, 4)
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
   * s.margin.svb(1)
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
   * s.margin.svb(1, 2)
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
   * s.margin.svb(1, 2, 3)
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
   * s.margin.svb(1, 2, 3, 4)
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
   * s.margin.svmin(1)
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
   * s.margin.svmin(1, 2)
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
   * s.margin.svmin(1, 2, 3)
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
   * s.margin.svmin(1, 2, 3, 4)
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
   * s.margin.svmax(1)
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
   * s.margin.svmax(1, 2)
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
   * s.margin.svmax(1, 2, 3)
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
   * s.margin.svmax(1, 2, 3, 4)
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
   * s.margin.lvw(1)
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
   * s.margin.lvw(1, 2)
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
   * s.margin.lvw(1, 2, 3)
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
   * s.margin.lvw(1, 2, 3, 4)
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
   * s.margin.lvh(1)
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
   * s.margin.lvh(1, 2)
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
   * s.margin.lvh(1, 2, 3)
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
   * s.margin.lvh(1, 2, 3, 4)
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
   * s.margin.lvi(1)
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
   * s.margin.lvi(1, 2)
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
   * s.margin.lvi(1, 2, 3)
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
   * s.margin.lvi(1, 2, 3, 4)
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
   * s.margin.lvb(1)
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
   * s.margin.lvb(1, 2)
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
   * s.margin.lvb(1, 2, 3)
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
   * s.margin.lvb(1, 2, 3, 4)
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
   * s.margin.lvmin(1)
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
   * s.margin.lvmin(1, 2)
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
   * s.margin.lvmin(1, 2, 3)
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
   * s.margin.lvmin(1, 2, 3, 4)
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
   * s.margin.lvmax(1)
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
   * s.margin.lvmax(1, 2)
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
   * s.margin.lvmax(1, 2, 3)
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
   * s.margin.lvmax(1, 2, 3, 4)
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
   * s.margin.dvw(1)
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
   * s.margin.dvw(1, 2)
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
   * s.margin.dvw(1, 2, 3)
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
   * s.margin.dvw(1, 2, 3, 4)
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
   * s.margin.dvh(1)
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
   * s.margin.dvh(1, 2)
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
   * s.margin.dvh(1, 2, 3)
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
   * s.margin.dvh(1, 2, 3, 4)
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
   * s.margin.dvi(1)
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
   * s.margin.dvi(1, 2)
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
   * s.margin.dvi(1, 2, 3)
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
   * s.margin.dvi(1, 2, 3, 4)
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
   * s.margin.dvb(1)
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
   * s.margin.dvb(1, 2)
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
   * s.margin.dvb(1, 2, 3)
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
   * s.margin.dvb(1, 2, 3, 4)
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
   * s.margin.dvmin(1)
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
   * s.margin.dvmin(1, 2)
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
   * s.margin.dvmin(1, 2, 3)
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
   * s.margin.dvmin(1, 2, 3, 4)
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
   * s.margin.dvmax(1)
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
   * s.margin.dvmax(1, 2)
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
   * s.margin.dvmax(1, 2, 3)
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
   * s.margin.dvmax(1, 2, 3, 4)
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
   * s.margin.cqw(1)
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
   * s.margin.cqw(1, 2)
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
   * s.margin.cqw(1, 2, 3)
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
   * s.margin.cqw(1, 2, 3, 4)
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
   * s.margin.cqh(1)
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
   * s.margin.cqh(1, 2)
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
   * s.margin.cqh(1, 2, 3)
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
   * s.margin.cqh(1, 2, 3, 4)
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
   * s.margin.cqi(1)
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
   * s.margin.cqi(1, 2)
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
   * s.margin.cqi(1, 2, 3)
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
   * s.margin.cqi(1, 2, 3, 4)
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
   * s.margin.cqb(1)
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
   * s.margin.cqb(1, 2)
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
   * s.margin.cqb(1, 2, 3)
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
   * s.margin.cqb(1, 2, 3, 4)
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
   * s.margin.cqmin(1)
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
   * s.margin.cqmin(1, 2)
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
   * s.margin.cqmin(1, 2, 3)
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
   * s.margin.cqmin(1, 2, 3, 4)
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
   * s.margin.cqmax(1)
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
   * s.margin.cqmax(1, 2)
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
   * s.margin.cqmax(1, 2, 3)
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
   * s.margin.cqmax(1, 2, 3, 4)
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
   * s.margin.percent(1)
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
   * s.margin.percent(1, 2)
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
   * s.margin.percent(1, 2, 3)
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
   * s.margin.percent(1, 2, 3, 4)
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
   * s.margin.calc('var(--value) * 2')
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
   * s.margin.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Margin | CssString, ...others: (Property.Margin | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.margin.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Margin | CssString, ...others: (Property.Margin | CssString)[]): string {
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
   * s.margin.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Margin | CssString,
    preferred: Property.Margin | CssString,
    maximum: Property.Margin | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-block 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginBlockKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-block:auto;`。
   */
  readonly auto: Property.MarginBlock | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-block:inherit;`。
   */
  readonly inherit: Property.MarginBlock | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-block:initial;`。
   */
  readonly initial: Property.MarginBlock | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-block:revert;`。
   */
  readonly revert: Property.MarginBlock | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-block:revert-layer;`。
   */
  readonly revertLayer: Property.MarginBlock | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-block:unset;`。
   */
  readonly unset: Property.MarginBlock | CssString = 'unset';
}

/**
 * 设置逻辑块轴起始侧和结束侧的外边距。（margin-block）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
 */
export class MarginBlockCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-block:auto;`。
   */
  readonly auto: string = 'margin-block:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-block:inherit;`。
   */
  readonly inherit: string = 'margin-block:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-block:initial;`。
   */
  readonly initial: string = 'margin-block:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-block:revert;`。
   */
  readonly revert: string = 'margin-block:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-block:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-block:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-block:unset;`。
   */
  readonly unset: string = 'margin-block:unset;';
  /**
   * 创建 margin-block 属性作者；普通使用通过 s.marginBlock 取得共享实例。
   * @example
   * class CustomMarginBlockCss extends MarginBlockCss {}
   */
  constructor() {
    super('margin-block');
  }
  /**
   * 原样生成 margin-block 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-block:value;。
   * @example
   * s.marginBlock.raw('inherit') // margin-block:inherit;
   */
  raw(value: Property.MarginBlock | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.marginBlock.px(1)
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
   * s.marginBlock.px(1, 2)
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
   * s.marginBlock.cm(1)
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
   * s.marginBlock.cm(1, 2)
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
   * s.marginBlock.mm(1)
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
   * s.marginBlock.mm(1, 2)
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
   * s.marginBlock.q(1)
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
   * s.marginBlock.q(1, 2)
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
   * s.marginBlock.in(1)
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
   * s.marginBlock.in(1, 2)
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
   * s.marginBlock.pt(1)
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
   * s.marginBlock.pt(1, 2)
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
   * s.marginBlock.pc(1)
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
   * s.marginBlock.pc(1, 2)
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
   * s.marginBlock.em(1)
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
   * s.marginBlock.em(1, 2)
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
   * s.marginBlock.rem(1)
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
   * s.marginBlock.rem(1, 2)
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
   * s.marginBlock.ex(1)
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
   * s.marginBlock.ex(1, 2)
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
   * s.marginBlock.rex(1)
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
   * s.marginBlock.rex(1, 2)
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
   * s.marginBlock.ch(1)
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
   * s.marginBlock.ch(1, 2)
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
   * s.marginBlock.rch(1)
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
   * s.marginBlock.rch(1, 2)
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
   * s.marginBlock.cap(1)
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
   * s.marginBlock.cap(1, 2)
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
   * s.marginBlock.rcap(1)
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
   * s.marginBlock.rcap(1, 2)
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
   * s.marginBlock.ic(1)
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
   * s.marginBlock.ic(1, 2)
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
   * s.marginBlock.ric(1)
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
   * s.marginBlock.ric(1, 2)
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
   * s.marginBlock.lh(1)
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
   * s.marginBlock.lh(1, 2)
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
   * s.marginBlock.rlh(1)
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
   * s.marginBlock.rlh(1, 2)
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
   * s.marginBlock.vw(1)
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
   * s.marginBlock.vw(1, 2)
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
   * s.marginBlock.vh(1)
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
   * s.marginBlock.vh(1, 2)
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
   * s.marginBlock.vi(1)
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
   * s.marginBlock.vi(1, 2)
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
   * s.marginBlock.vb(1)
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
   * s.marginBlock.vb(1, 2)
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
   * s.marginBlock.vmin(1)
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
   * s.marginBlock.vmin(1, 2)
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
   * s.marginBlock.vmax(1)
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
   * s.marginBlock.vmax(1, 2)
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
   * s.marginBlock.svw(1)
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
   * s.marginBlock.svw(1, 2)
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
   * s.marginBlock.svh(1)
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
   * s.marginBlock.svh(1, 2)
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
   * s.marginBlock.svi(1)
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
   * s.marginBlock.svi(1, 2)
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
   * s.marginBlock.svb(1)
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
   * s.marginBlock.svb(1, 2)
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
   * s.marginBlock.svmin(1)
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
   * s.marginBlock.svmin(1, 2)
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
   * s.marginBlock.svmax(1)
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
   * s.marginBlock.svmax(1, 2)
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
   * s.marginBlock.lvw(1)
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
   * s.marginBlock.lvw(1, 2)
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
   * s.marginBlock.lvh(1)
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
   * s.marginBlock.lvh(1, 2)
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
   * s.marginBlock.lvi(1)
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
   * s.marginBlock.lvi(1, 2)
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
   * s.marginBlock.lvb(1)
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
   * s.marginBlock.lvb(1, 2)
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
   * s.marginBlock.lvmin(1)
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
   * s.marginBlock.lvmin(1, 2)
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
   * s.marginBlock.lvmax(1)
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
   * s.marginBlock.lvmax(1, 2)
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
   * s.marginBlock.dvw(1)
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
   * s.marginBlock.dvw(1, 2)
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
   * s.marginBlock.dvh(1)
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
   * s.marginBlock.dvh(1, 2)
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
   * s.marginBlock.dvi(1)
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
   * s.marginBlock.dvi(1, 2)
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
   * s.marginBlock.dvb(1)
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
   * s.marginBlock.dvb(1, 2)
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
   * s.marginBlock.dvmin(1)
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
   * s.marginBlock.dvmin(1, 2)
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
   * s.marginBlock.dvmax(1)
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
   * s.marginBlock.dvmax(1, 2)
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
   * s.marginBlock.cqw(1)
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
   * s.marginBlock.cqw(1, 2)
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
   * s.marginBlock.cqh(1)
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
   * s.marginBlock.cqh(1, 2)
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
   * s.marginBlock.cqi(1)
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
   * s.marginBlock.cqi(1, 2)
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
   * s.marginBlock.cqb(1)
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
   * s.marginBlock.cqb(1, 2)
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
   * s.marginBlock.cqmin(1)
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
   * s.marginBlock.cqmin(1, 2)
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
   * s.marginBlock.cqmax(1)
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
   * s.marginBlock.cqmax(1, 2)
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
   * s.marginBlock.percent(1)
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
   * s.marginBlock.percent(1, 2)
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
   * s.marginBlock.calc('var(--value) * 2')
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
   * s.marginBlock.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginBlock | CssString,
    ...others: (Property.MarginBlock | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginBlock.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginBlock | CssString,
    ...others: (Property.MarginBlock | CssString)[]
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
   * s.marginBlock.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginBlock | CssString,
    preferred: Property.MarginBlock | CssString,
    maximum: Property.MarginBlock | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-block-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginBlockEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-block-end:auto;`。
   */
  readonly auto: Property.MarginBlockEnd | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-block-end:inherit;`。
   */
  readonly inherit: Property.MarginBlockEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-block-end:initial;`。
   */
  readonly initial: Property.MarginBlockEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-block-end:revert;`。
   */
  readonly revert: Property.MarginBlockEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-block-end:revert-layer;`。
   */
  readonly revertLayer: Property.MarginBlockEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-block-end:unset;`。
   */
  readonly unset: Property.MarginBlockEnd | CssString = 'unset';
}

/**
 * 设置逻辑块轴结束侧的外边距。（margin-block-end）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
 */
export class MarginBlockEndCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-block-end:auto;`。
   */
  readonly auto: string = 'margin-block-end:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-block-end:inherit;`。
   */
  readonly inherit: string = 'margin-block-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-block-end:initial;`。
   */
  readonly initial: string = 'margin-block-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-block-end:revert;`。
   */
  readonly revert: string = 'margin-block-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-block-end:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-block-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-block-end:unset;`。
   */
  readonly unset: string = 'margin-block-end:unset;';
  /**
   * 创建 margin-block-end 属性作者；普通使用通过 s.marginBlockEnd 取得共享实例。
   * @example
   * class CustomMarginBlockEndCss extends MarginBlockEndCss {}
   */
  constructor() {
    super('margin-block-end');
  }
  /**
   * 原样生成 margin-block-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-block-end:value;。
   * @example
   * s.marginBlockEnd.raw('inherit') // margin-block-end:inherit;
   */
  raw(value: Property.MarginBlockEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginBlockEnd.calc('var(--value) * 2')
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
   * s.marginBlockEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginBlockEnd | CssString,
    ...others: (Property.MarginBlockEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginBlockEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginBlockEnd | CssString,
    ...others: (Property.MarginBlockEnd | CssString)[]
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
   * s.marginBlockEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginBlockEnd | CssString,
    preferred: Property.MarginBlockEnd | CssString,
    maximum: Property.MarginBlockEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-block-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginBlockStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-block-start:auto;`。
   */
  readonly auto: Property.MarginBlockStart | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-block-start:inherit;`。
   */
  readonly inherit: Property.MarginBlockStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-block-start:initial;`。
   */
  readonly initial: Property.MarginBlockStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-block-start:revert;`。
   */
  readonly revert: Property.MarginBlockStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-block-start:revert-layer;`。
   */
  readonly revertLayer: Property.MarginBlockStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-block-start:unset;`。
   */
  readonly unset: Property.MarginBlockStart | CssString = 'unset';
}

/**
 * 设置逻辑块轴起始侧的外边距。（margin-block-start）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
 */
export class MarginBlockStartCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-block-start:auto;`。
   */
  readonly auto: string = 'margin-block-start:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-block-start:inherit;`。
   */
  readonly inherit: string = 'margin-block-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-block-start:initial;`。
   */
  readonly initial: string = 'margin-block-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-block-start:revert;`。
   */
  readonly revert: string = 'margin-block-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-block-start:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-block-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-block-start:unset;`。
   */
  readonly unset: string = 'margin-block-start:unset;';
  /**
   * 创建 margin-block-start 属性作者；普通使用通过 s.marginBlockStart 取得共享实例。
   * @example
   * class CustomMarginBlockStartCss extends MarginBlockStartCss {}
   */
  constructor() {
    super('margin-block-start');
  }
  /**
   * 原样生成 margin-block-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-block-start:value;。
   * @example
   * s.marginBlockStart.raw('inherit') // margin-block-start:inherit;
   */
  raw(value: Property.MarginBlockStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginBlockStart.calc('var(--value) * 2')
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
   * s.marginBlockStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginBlockStart | CssString,
    ...others: (Property.MarginBlockStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginBlockStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginBlockStart | CssString,
    ...others: (Property.MarginBlockStart | CssString)[]
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
   * s.marginBlockStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginBlockStart | CssString,
    preferred: Property.MarginBlockStart | CssString,
    maximum: Property.MarginBlockStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-bottom 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginBottomKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-bottom:auto;`。
   */
  readonly auto: Property.MarginBottom | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-bottom:inherit;`。
   */
  readonly inherit: Property.MarginBottom | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-bottom:initial;`。
   */
  readonly initial: Property.MarginBottom | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-bottom:revert;`。
   */
  readonly revert: Property.MarginBottom | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-bottom:revert-layer;`。
   */
  readonly revertLayer: Property.MarginBottom | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-bottom:unset;`。
   */
  readonly unset: Property.MarginBottom | CssString = 'unset';
}

/**
 * 设置下外边距。（margin-bottom）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
 */
export class MarginBottomCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-bottom:auto;`。
   */
  readonly auto: string = 'margin-bottom:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-bottom:inherit;`。
   */
  readonly inherit: string = 'margin-bottom:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-bottom:initial;`。
   */
  readonly initial: string = 'margin-bottom:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-bottom:revert;`。
   */
  readonly revert: string = 'margin-bottom:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-bottom:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-bottom:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-bottom:unset;`。
   */
  readonly unset: string = 'margin-bottom:unset;';
  /**
   * 创建 margin-bottom 属性作者；普通使用通过 s.marginBottom 取得共享实例。
   * @example
   * class CustomMarginBottomCss extends MarginBottomCss {}
   */
  constructor() {
    super('margin-bottom');
  }
  /**
   * 原样生成 margin-bottom 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-bottom:value;。
   * @example
   * s.marginBottom.raw('inherit') // margin-bottom:inherit;
   */
  raw(value: Property.MarginBottom | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.marginBottom.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginBottom.calc('var(--value) * 2')
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
   * s.marginBottom.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginBottom | CssString,
    ...others: (Property.MarginBottom | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginBottom.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginBottom | CssString,
    ...others: (Property.MarginBottom | CssString)[]
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
   * s.marginBottom.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginBottom | CssString,
    preferred: Property.MarginBottom | CssString,
    maximum: Property.MarginBottom | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-inline 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginInlineKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-inline:auto;`。
   */
  readonly auto: Property.MarginInline | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-inline:inherit;`。
   */
  readonly inherit: Property.MarginInline | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-inline:initial;`。
   */
  readonly initial: Property.MarginInline | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-inline:revert;`。
   */
  readonly revert: Property.MarginInline | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-inline:revert-layer;`。
   */
  readonly revertLayer: Property.MarginInline | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-inline:unset;`。
   */
  readonly unset: Property.MarginInline | CssString = 'unset';
}

/**
 * 设置逻辑行内轴起始侧和结束侧的外边距。（margin-inline）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
 */
export class MarginInlineCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-inline:auto;`。
   */
  readonly auto: string = 'margin-inline:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-inline:inherit;`。
   */
  readonly inherit: string = 'margin-inline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-inline:initial;`。
   */
  readonly initial: string = 'margin-inline:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-inline:revert;`。
   */
  readonly revert: string = 'margin-inline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-inline:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-inline:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-inline:unset;`。
   */
  readonly unset: string = 'margin-inline:unset;';
  /**
   * 创建 margin-inline 属性作者；普通使用通过 s.marginInline 取得共享实例。
   * @example
   * class CustomMarginInlineCss extends MarginInlineCss {}
   */
  constructor() {
    super('margin-inline');
  }
  /**
   * 原样生成 margin-inline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-inline:value;。
   * @example
   * s.marginInline.raw('inherit') // margin-inline:inherit;
   */
  raw(value: Property.MarginInline | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.marginInline.px(1)
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
   * s.marginInline.px(1, 2)
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
   * s.marginInline.cm(1)
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
   * s.marginInline.cm(1, 2)
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
   * s.marginInline.mm(1)
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
   * s.marginInline.mm(1, 2)
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
   * s.marginInline.q(1)
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
   * s.marginInline.q(1, 2)
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
   * s.marginInline.in(1)
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
   * s.marginInline.in(1, 2)
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
   * s.marginInline.pt(1)
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
   * s.marginInline.pt(1, 2)
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
   * s.marginInline.pc(1)
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
   * s.marginInline.pc(1, 2)
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
   * s.marginInline.em(1)
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
   * s.marginInline.em(1, 2)
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
   * s.marginInline.rem(1)
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
   * s.marginInline.rem(1, 2)
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
   * s.marginInline.ex(1)
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
   * s.marginInline.ex(1, 2)
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
   * s.marginInline.rex(1)
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
   * s.marginInline.rex(1, 2)
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
   * s.marginInline.ch(1)
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
   * s.marginInline.ch(1, 2)
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
   * s.marginInline.rch(1)
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
   * s.marginInline.rch(1, 2)
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
   * s.marginInline.cap(1)
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
   * s.marginInline.cap(1, 2)
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
   * s.marginInline.rcap(1)
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
   * s.marginInline.rcap(1, 2)
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
   * s.marginInline.ic(1)
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
   * s.marginInline.ic(1, 2)
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
   * s.marginInline.ric(1)
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
   * s.marginInline.ric(1, 2)
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
   * s.marginInline.lh(1)
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
   * s.marginInline.lh(1, 2)
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
   * s.marginInline.rlh(1)
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
   * s.marginInline.rlh(1, 2)
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
   * s.marginInline.vw(1)
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
   * s.marginInline.vw(1, 2)
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
   * s.marginInline.vh(1)
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
   * s.marginInline.vh(1, 2)
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
   * s.marginInline.vi(1)
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
   * s.marginInline.vi(1, 2)
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
   * s.marginInline.vb(1)
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
   * s.marginInline.vb(1, 2)
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
   * s.marginInline.vmin(1)
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
   * s.marginInline.vmin(1, 2)
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
   * s.marginInline.vmax(1)
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
   * s.marginInline.vmax(1, 2)
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
   * s.marginInline.svw(1)
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
   * s.marginInline.svw(1, 2)
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
   * s.marginInline.svh(1)
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
   * s.marginInline.svh(1, 2)
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
   * s.marginInline.svi(1)
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
   * s.marginInline.svi(1, 2)
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
   * s.marginInline.svb(1)
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
   * s.marginInline.svb(1, 2)
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
   * s.marginInline.svmin(1)
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
   * s.marginInline.svmin(1, 2)
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
   * s.marginInline.svmax(1)
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
   * s.marginInline.svmax(1, 2)
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
   * s.marginInline.lvw(1)
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
   * s.marginInline.lvw(1, 2)
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
   * s.marginInline.lvh(1)
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
   * s.marginInline.lvh(1, 2)
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
   * s.marginInline.lvi(1)
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
   * s.marginInline.lvi(1, 2)
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
   * s.marginInline.lvb(1)
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
   * s.marginInline.lvb(1, 2)
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
   * s.marginInline.lvmin(1)
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
   * s.marginInline.lvmin(1, 2)
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
   * s.marginInline.lvmax(1)
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
   * s.marginInline.lvmax(1, 2)
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
   * s.marginInline.dvw(1)
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
   * s.marginInline.dvw(1, 2)
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
   * s.marginInline.dvh(1)
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
   * s.marginInline.dvh(1, 2)
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
   * s.marginInline.dvi(1)
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
   * s.marginInline.dvi(1, 2)
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
   * s.marginInline.dvb(1)
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
   * s.marginInline.dvb(1, 2)
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
   * s.marginInline.dvmin(1)
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
   * s.marginInline.dvmin(1, 2)
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
   * s.marginInline.dvmax(1)
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
   * s.marginInline.dvmax(1, 2)
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
   * s.marginInline.cqw(1)
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
   * s.marginInline.cqw(1, 2)
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
   * s.marginInline.cqh(1)
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
   * s.marginInline.cqh(1, 2)
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
   * s.marginInline.cqi(1)
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
   * s.marginInline.cqi(1, 2)
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
   * s.marginInline.cqb(1)
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
   * s.marginInline.cqb(1, 2)
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
   * s.marginInline.cqmin(1)
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
   * s.marginInline.cqmin(1, 2)
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
   * s.marginInline.cqmax(1)
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
   * s.marginInline.cqmax(1, 2)
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
   * s.marginInline.percent(1)
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
   * s.marginInline.percent(1, 2)
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
   * s.marginInline.calc('var(--value) * 2')
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
   * s.marginInline.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginInline | CssString,
    ...others: (Property.MarginInline | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginInline.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginInline | CssString,
    ...others: (Property.MarginInline | CssString)[]
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
   * s.marginInline.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginInline | CssString,
    preferred: Property.MarginInline | CssString,
    maximum: Property.MarginInline | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-inline-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginInlineEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-inline-end:auto;`。
   */
  readonly auto: Property.MarginInlineEnd | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-inline-end:inherit;`。
   */
  readonly inherit: Property.MarginInlineEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-inline-end:initial;`。
   */
  readonly initial: Property.MarginInlineEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-inline-end:revert;`。
   */
  readonly revert: Property.MarginInlineEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-inline-end:revert-layer;`。
   */
  readonly revertLayer: Property.MarginInlineEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-inline-end:unset;`。
   */
  readonly unset: Property.MarginInlineEnd | CssString = 'unset';
}

/**
 * 设置逻辑行内轴结束侧的外边距。（margin-inline-end）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
 */
export class MarginInlineEndCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-inline-end:auto;`。
   */
  readonly auto: string = 'margin-inline-end:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-inline-end:inherit;`。
   */
  readonly inherit: string = 'margin-inline-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-inline-end:initial;`。
   */
  readonly initial: string = 'margin-inline-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-inline-end:revert;`。
   */
  readonly revert: string = 'margin-inline-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-inline-end:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-inline-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-inline-end:unset;`。
   */
  readonly unset: string = 'margin-inline-end:unset;';
  /**
   * 创建 margin-inline-end 属性作者；普通使用通过 s.marginInlineEnd 取得共享实例。
   * @example
   * class CustomMarginInlineEndCss extends MarginInlineEndCss {}
   */
  constructor() {
    super('margin-inline-end');
  }
  /**
   * 原样生成 margin-inline-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-inline-end:value;。
   * @example
   * s.marginInlineEnd.raw('inherit') // margin-inline-end:inherit;
   */
  raw(value: Property.MarginInlineEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginInlineEnd.calc('var(--value) * 2')
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
   * s.marginInlineEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginInlineEnd | CssString,
    ...others: (Property.MarginInlineEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginInlineEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginInlineEnd | CssString,
    ...others: (Property.MarginInlineEnd | CssString)[]
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
   * s.marginInlineEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginInlineEnd | CssString,
    preferred: Property.MarginInlineEnd | CssString,
    maximum: Property.MarginInlineEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-inline-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginInlineStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-inline-start:auto;`。
   */
  readonly auto: Property.MarginInlineStart | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-inline-start:inherit;`。
   */
  readonly inherit: Property.MarginInlineStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-inline-start:initial;`。
   */
  readonly initial: Property.MarginInlineStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-inline-start:revert;`。
   */
  readonly revert: Property.MarginInlineStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-inline-start:revert-layer;`。
   */
  readonly revertLayer: Property.MarginInlineStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-inline-start:unset;`。
   */
  readonly unset: Property.MarginInlineStart | CssString = 'unset';
}

/**
 * 设置逻辑行内轴起始侧的外边距。（margin-inline-start）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
 */
export class MarginInlineStartCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-inline-start:auto;`。
   */
  readonly auto: string = 'margin-inline-start:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-inline-start:inherit;`。
   */
  readonly inherit: string = 'margin-inline-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-inline-start:initial;`。
   */
  readonly initial: string = 'margin-inline-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-inline-start:revert;`。
   */
  readonly revert: string = 'margin-inline-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-inline-start:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-inline-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-inline-start:unset;`。
   */
  readonly unset: string = 'margin-inline-start:unset;';
  /**
   * 创建 margin-inline-start 属性作者；普通使用通过 s.marginInlineStart 取得共享实例。
   * @example
   * class CustomMarginInlineStartCss extends MarginInlineStartCss {}
   */
  constructor() {
    super('margin-inline-start');
  }
  /**
   * 原样生成 margin-inline-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-inline-start:value;。
   * @example
   * s.marginInlineStart.raw('inherit') // margin-inline-start:inherit;
   */
  raw(value: Property.MarginInlineStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginInlineStart.calc('var(--value) * 2')
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
   * s.marginInlineStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginInlineStart | CssString,
    ...others: (Property.MarginInlineStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginInlineStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginInlineStart | CssString,
    ...others: (Property.MarginInlineStart | CssString)[]
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
   * s.marginInlineStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginInlineStart | CssString,
    preferred: Property.MarginInlineStart | CssString,
    maximum: Property.MarginInlineStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-left 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginLeftKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-left:auto;`。
   */
  readonly auto: Property.MarginLeft | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-left:inherit;`。
   */
  readonly inherit: Property.MarginLeft | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-left:initial;`。
   */
  readonly initial: Property.MarginLeft | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-left:revert;`。
   */
  readonly revert: Property.MarginLeft | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-left:revert-layer;`。
   */
  readonly revertLayer: Property.MarginLeft | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-left:unset;`。
   */
  readonly unset: Property.MarginLeft | CssString = 'unset';
}

/**
 * 设置左外边距。（margin-left）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
 */
export class MarginLeftCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-left:auto;`。
   */
  readonly auto: string = 'margin-left:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-left:inherit;`。
   */
  readonly inherit: string = 'margin-left:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-left:initial;`。
   */
  readonly initial: string = 'margin-left:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-left:revert;`。
   */
  readonly revert: string = 'margin-left:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-left:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-left:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-left:unset;`。
   */
  readonly unset: string = 'margin-left:unset;';
  /**
   * 创建 margin-left 属性作者；普通使用通过 s.marginLeft 取得共享实例。
   * @example
   * class CustomMarginLeftCss extends MarginLeftCss {}
   */
  constructor() {
    super('margin-left');
  }
  /**
   * 原样生成 margin-left 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-left:value;。
   * @example
   * s.marginLeft.raw('inherit') // margin-left:inherit;
   */
  raw(value: Property.MarginLeft | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.marginLeft.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginLeft.calc('var(--value) * 2')
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
   * s.marginLeft.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginLeft | CssString,
    ...others: (Property.MarginLeft | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginLeft.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginLeft | CssString,
    ...others: (Property.MarginLeft | CssString)[]
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
   * s.marginLeft.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginLeft | CssString,
    preferred: Property.MarginLeft | CssString,
    maximum: Property.MarginLeft | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-right 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginRightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-right:auto;`。
   */
  readonly auto: Property.MarginRight | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-right:inherit;`。
   */
  readonly inherit: Property.MarginRight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-right:initial;`。
   */
  readonly initial: Property.MarginRight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-right:revert;`。
   */
  readonly revert: Property.MarginRight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-right:revert-layer;`。
   */
  readonly revertLayer: Property.MarginRight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-right:unset;`。
   */
  readonly unset: Property.MarginRight | CssString = 'unset';
}

/**
 * 设置右外边距。（margin-right）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
 */
export class MarginRightCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-right:auto;`。
   */
  readonly auto: string = 'margin-right:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-right:inherit;`。
   */
  readonly inherit: string = 'margin-right:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-right:initial;`。
   */
  readonly initial: string = 'margin-right:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-right:revert;`。
   */
  readonly revert: string = 'margin-right:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-right:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-right:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-right:unset;`。
   */
  readonly unset: string = 'margin-right:unset;';
  /**
   * 创建 margin-right 属性作者；普通使用通过 s.marginRight 取得共享实例。
   * @example
   * class CustomMarginRightCss extends MarginRightCss {}
   */
  constructor() {
    super('margin-right');
  }
  /**
   * 原样生成 margin-right 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-right:value;。
   * @example
   * s.marginRight.raw('inherit') // margin-right:inherit;
   */
  raw(value: Property.MarginRight | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.marginRight.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginRight.calc('var(--value) * 2')
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
   * s.marginRight.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginRight | CssString,
    ...others: (Property.MarginRight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginRight.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginRight | CssString,
    ...others: (Property.MarginRight | CssString)[]
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
   * s.marginRight.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginRight | CssString,
    preferred: Property.MarginRight | CssString,
    maximum: Property.MarginRight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-top 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginTopKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-top:auto;`。
   */
  readonly auto: Property.MarginTop | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-top:inherit;`。
   */
  readonly inherit: Property.MarginTop | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-top:initial;`。
   */
  readonly initial: Property.MarginTop | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-top:revert;`。
   */
  readonly revert: Property.MarginTop | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-top:revert-layer;`。
   */
  readonly revertLayer: Property.MarginTop | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-top:unset;`。
   */
  readonly unset: Property.MarginTop | CssString = 'unset';
}

/**
 * 设置上外边距。（margin-top）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
 */
export class MarginTopCss extends LengthCssProperty {
  /**
   * 由布局模式分配自动外边距；在 Flex/Grid 中可吸收剩余空间，不保证所有方向都自动居中。
   *
   * CSS 声明：`margin-top:auto;`。
   */
  readonly auto: string = 'margin-top:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-top:inherit;`。
   */
  readonly inherit: string = 'margin-top:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-top:initial;`。
   */
  readonly initial: string = 'margin-top:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-top:revert;`。
   */
  readonly revert: string = 'margin-top:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-top:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-top:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-top:unset;`。
   */
  readonly unset: string = 'margin-top:unset;';
  /**
   * 创建 margin-top 属性作者；普通使用通过 s.marginTop 取得共享实例。
   * @example
   * class CustomMarginTopCss extends MarginTopCss {}
   */
  constructor() {
    super('margin-top');
  }
  /**
   * 原样生成 margin-top 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-top:value;。
   * @example
   * s.marginTop.raw('inherit') // margin-top:inherit;
   */
  raw(value: Property.MarginTop | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.marginTop.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.marginTop.calc('var(--value) * 2')
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
   * s.marginTop.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MarginTop | CssString,
    ...others: (Property.MarginTop | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.marginTop.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MarginTop | CssString,
    ...others: (Property.MarginTop | CssString)[]
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
   * s.marginTop.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MarginTop | CssString,
    preferred: Property.MarginTop | CssString,
    maximum: Property.MarginTop | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * margin-trim 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarginTrimKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`margin-trim:all;`。 */
  readonly all: Property.MarginTrim | CssString = 'all';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`margin-trim:in-flow;`。 */
  readonly inFlow: Property.MarginTrim | CssString = 'in-flow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-trim:inherit;`。
   */
  readonly inherit: Property.MarginTrim | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-trim:initial;`。
   */
  readonly initial: Property.MarginTrim | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`margin-trim:none;`。 */
  readonly none: Property.MarginTrim | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-trim:revert;`。
   */
  readonly revert: Property.MarginTrim | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-trim:revert-layer;`。
   */
  readonly revertLayer: Property.MarginTrim | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-trim:unset;`。
   */
  readonly unset: Property.MarginTrim | CssString = 'unset';
}

/**
 * 控制容器边缘处子元素外边距的裁减。（margin-trim）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
 */
export class MarginTrimCss extends CssProperty {
  /** CSS 声明：`margin-trim:all;`。 */
  readonly all: string = 'margin-trim:all;';
  /** CSS 声明：`margin-trim:in-flow;`。 */
  readonly inFlow: string = 'margin-trim:in-flow;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`margin-trim:inherit;`。
   */
  readonly inherit: string = 'margin-trim:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`margin-trim:initial;`。
   */
  readonly initial: string = 'margin-trim:initial;';
  /** CSS 声明：`margin-trim:none;`。 */
  readonly none: string = 'margin-trim:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`margin-trim:revert;`。
   */
  readonly revert: string = 'margin-trim:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`margin-trim:revert-layer;`。
   */
  readonly revertLayer: string = 'margin-trim:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`margin-trim:unset;`。
   */
  readonly unset: string = 'margin-trim:unset;';
  /**
   * 创建 margin-trim 属性作者；普通使用通过 s.marginTrim 取得共享实例。
   * @example
   * class CustomMarginTrimCss extends MarginTrimCss {}
   */
  constructor() {
    super('margin-trim');
  }
  /**
   * 原样生成 margin-trim 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 margin-trim:value;。
   * @example
   * s.marginTrim.raw('inherit') // margin-trim:inherit;
   */
  raw(value: Property.MarginTrim | CssString): string {
    return this.declaration(value);
  }
}

/**
 * marker 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarkerKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker:inherit;`。
   */
  readonly inherit: Property.Marker | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker:initial;`。
   */
  readonly initial: Property.Marker | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`marker:none;`。 */
  readonly none: Property.Marker | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker:revert;`。
   */
  readonly revert: Property.Marker | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker:revert-layer;`。
   */
  readonly revertLayer: Property.Marker | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker:unset;`。
   */
  readonly unset: Property.Marker | CssString = 'unset';
}

/**
 * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。（marker）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
 */
export class MarkerCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker:inherit;`。
   */
  readonly inherit: string = 'marker:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker:initial;`。
   */
  readonly initial: string = 'marker:initial;';
  /** CSS 声明：`marker:none;`。 */
  readonly none: string = 'marker:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker:revert;`。
   */
  readonly revert: string = 'marker:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker:revert-layer;`。
   */
  readonly revertLayer: string = 'marker:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker:unset;`。
   */
  readonly unset: string = 'marker:unset;';
  /**
   * 创建 marker 属性作者；普通使用通过 s.marker 取得共享实例。
   * @example
   * class CustomMarkerCss extends MarkerCss {}
   */
  constructor() {
    super('marker');
  }
  /**
   * 原样生成 marker 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 marker:value;。
   * @example
   * s.marker.raw('inherit') // marker:inherit;
   */
  raw(value: Property.Marker | CssString): string {
    return this.declaration(value);
  }
}

/**
 * marker-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarkerEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker-end:inherit;`。
   */
  readonly inherit: Property.MarkerEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker-end:initial;`。
   */
  readonly initial: Property.MarkerEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`marker-end:none;`。 */
  readonly none: Property.MarkerEnd | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker-end:revert;`。
   */
  readonly revert: Property.MarkerEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker-end:revert-layer;`。
   */
  readonly revertLayer: Property.MarkerEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker-end:unset;`。
   */
  readonly unset: Property.MarkerEnd | CssString = 'unset';
}

/**
 * 设置 SVG 路径终点的标记图形。（marker-end）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
 */
export class MarkerEndCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker-end:inherit;`。
   */
  readonly inherit: string = 'marker-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker-end:initial;`。
   */
  readonly initial: string = 'marker-end:initial;';
  /** CSS 声明：`marker-end:none;`。 */
  readonly none: string = 'marker-end:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker-end:revert;`。
   */
  readonly revert: string = 'marker-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker-end:revert-layer;`。
   */
  readonly revertLayer: string = 'marker-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker-end:unset;`。
   */
  readonly unset: string = 'marker-end:unset;';
  /**
   * 创建 marker-end 属性作者；普通使用通过 s.markerEnd 取得共享实例。
   * @example
   * class CustomMarkerEndCss extends MarkerEndCss {}
   */
  constructor() {
    super('marker-end');
  }
  /**
   * 原样生成 marker-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 marker-end:value;。
   * @example
   * s.markerEnd.raw('inherit') // marker-end:inherit;
   */
  raw(value: Property.MarkerEnd | CssString): string {
    return this.declaration(value);
  }
}

/**
 * marker-mid 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarkerMidKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker-mid:inherit;`。
   */
  readonly inherit: Property.MarkerMid | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker-mid:initial;`。
   */
  readonly initial: Property.MarkerMid | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`marker-mid:none;`。 */
  readonly none: Property.MarkerMid | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker-mid:revert;`。
   */
  readonly revert: Property.MarkerMid | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker-mid:revert-layer;`。
   */
  readonly revertLayer: Property.MarkerMid | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker-mid:unset;`。
   */
  readonly unset: Property.MarkerMid | CssString = 'unset';
}

/**
 * 设置 SVG 路径中间顶点的标记图形。（marker-mid）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
 */
export class MarkerMidCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker-mid:inherit;`。
   */
  readonly inherit: string = 'marker-mid:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker-mid:initial;`。
   */
  readonly initial: string = 'marker-mid:initial;';
  /** CSS 声明：`marker-mid:none;`。 */
  readonly none: string = 'marker-mid:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker-mid:revert;`。
   */
  readonly revert: string = 'marker-mid:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker-mid:revert-layer;`。
   */
  readonly revertLayer: string = 'marker-mid:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker-mid:unset;`。
   */
  readonly unset: string = 'marker-mid:unset;';
  /**
   * 创建 marker-mid 属性作者；普通使用通过 s.markerMid 取得共享实例。
   * @example
   * class CustomMarkerMidCss extends MarkerMidCss {}
   */
  constructor() {
    super('marker-mid');
  }
  /**
   * 原样生成 marker-mid 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 marker-mid:value;。
   * @example
   * s.markerMid.raw('inherit') // marker-mid:inherit;
   */
  raw(value: Property.MarkerMid | CssString): string {
    return this.declaration(value);
  }
}

/**
 * marker-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MarkerStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker-start:inherit;`。
   */
  readonly inherit: Property.MarkerStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker-start:initial;`。
   */
  readonly initial: Property.MarkerStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`marker-start:none;`。 */
  readonly none: Property.MarkerStart | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker-start:revert;`。
   */
  readonly revert: Property.MarkerStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker-start:revert-layer;`。
   */
  readonly revertLayer: Property.MarkerStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker-start:unset;`。
   */
  readonly unset: Property.MarkerStart | CssString = 'unset';
}

/**
 * 设置 SVG 路径起点的标记图形。（marker-start）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
 */
export class MarkerStartCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`marker-start:inherit;`。
   */
  readonly inherit: string = 'marker-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`marker-start:initial;`。
   */
  readonly initial: string = 'marker-start:initial;';
  /** CSS 声明：`marker-start:none;`。 */
  readonly none: string = 'marker-start:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`marker-start:revert;`。
   */
  readonly revert: string = 'marker-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`marker-start:revert-layer;`。
   */
  readonly revertLayer: string = 'marker-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`marker-start:unset;`。
   */
  readonly unset: string = 'marker-start:unset;';
  /**
   * 创建 marker-start 属性作者；普通使用通过 s.markerStart 取得共享实例。
   * @example
   * class CustomMarkerStartCss extends MarkerStartCss {}
   */
  constructor() {
    super('marker-start');
  }
  /**
   * 原样生成 marker-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 marker-start:value;。
   * @example
   * s.markerStart.raw('inherit') // marker-start:inherit;
   */
  raw(value: Property.MarkerStart | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:add;`。 */
  readonly add: Property.Mask | CssString = 'add';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:alpha;`。 */
  readonly alpha: Property.Mask | CssString = 'alpha';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:border-box;`。 */
  readonly borderBox: Property.Mask | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:bottom;`。 */
  readonly bottom: Property.Mask | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:center;`。 */
  readonly center: Property.Mask | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:content-box;`。 */
  readonly contentBox: Property.Mask | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:exclude;`。 */
  readonly exclude: Property.Mask | CssString = 'exclude';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:fill-box;`。 */
  readonly fillBox: Property.Mask | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask:inherit;`。
   */
  readonly inherit: Property.Mask | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask:initial;`。
   */
  readonly initial: Property.Mask | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:intersect;`。 */
  readonly intersect: Property.Mask | CssString = 'intersect';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:left;`。 */
  readonly left: Property.Mask | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:luminance;`。 */
  readonly luminance: Property.Mask | CssString = 'luminance';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:margin-box;`。 */
  readonly marginBox: Property.Mask | CssString = 'margin-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:match-source;`。 */
  readonly matchSource: Property.Mask | CssString = 'match-source';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:no-clip;`。 */
  readonly noClip: Property.Mask | CssString = 'no-clip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:no-repeat;`。 */
  readonly noRepeat: Property.Mask | CssString = 'no-repeat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:none;`。 */
  readonly none: Property.Mask | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:padding-box;`。 */
  readonly paddingBox: Property.Mask | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:repeat;`。 */
  readonly repeat: Property.Mask | CssString = 'repeat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:repeat-x;`。 */
  readonly repeatX: Property.Mask | CssString = 'repeat-x';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:repeat-y;`。 */
  readonly repeatY: Property.Mask | CssString = 'repeat-y';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask:revert;`。
   */
  readonly revert: Property.Mask | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask:revert-layer;`。
   */
  readonly revertLayer: Property.Mask | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:right;`。 */
  readonly right: Property.Mask | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:round;`。 */
  readonly round: Property.Mask | CssString = 'round';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:space;`。 */
  readonly space: Property.Mask | CssString = 'space';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:stroke-box;`。 */
  readonly strokeBox: Property.Mask | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:subtract;`。 */
  readonly subtract: Property.Mask | CssString = 'subtract';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:top;`。 */
  readonly top: Property.Mask | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask:unset;`。
   */
  readonly unset: Property.Mask | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask:view-box;`。 */
  readonly viewBox: Property.Mask | CssString = 'view-box';
}

/**
 * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。（mask）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
 */
export class MaskCss extends LengthCssProperty {
  /** CSS 声明：`mask:add;`。 */
  readonly add: string = 'mask:add;';
  /** CSS 声明：`mask:alpha;`。 */
  readonly alpha: string = 'mask:alpha;';
  /** CSS 声明：`mask:border-box;`。 */
  readonly borderBox: string = 'mask:border-box;';
  /** CSS 声明：`mask:bottom;`。 */
  readonly bottom: string = 'mask:bottom;';
  /** CSS 声明：`mask:center;`。 */
  readonly center: string = 'mask:center;';
  /** CSS 声明：`mask:content-box;`。 */
  readonly contentBox: string = 'mask:content-box;';
  /** CSS 声明：`mask:exclude;`。 */
  readonly exclude: string = 'mask:exclude;';
  /** CSS 声明：`mask:fill-box;`。 */
  readonly fillBox: string = 'mask:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask:inherit;`。
   */
  readonly inherit: string = 'mask:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask:initial;`。
   */
  readonly initial: string = 'mask:initial;';
  /** CSS 声明：`mask:intersect;`。 */
  readonly intersect: string = 'mask:intersect;';
  /** CSS 声明：`mask:left;`。 */
  readonly left: string = 'mask:left;';
  /** CSS 声明：`mask:luminance;`。 */
  readonly luminance: string = 'mask:luminance;';
  /** CSS 声明：`mask:margin-box;`。 */
  readonly marginBox: string = 'mask:margin-box;';
  /** CSS 声明：`mask:match-source;`。 */
  readonly matchSource: string = 'mask:match-source;';
  /** CSS 声明：`mask:no-clip;`。 */
  readonly noClip: string = 'mask:no-clip;';
  /** CSS 声明：`mask:no-repeat;`。 */
  readonly noRepeat: string = 'mask:no-repeat;';
  /** CSS 声明：`mask:none;`。 */
  readonly none: string = 'mask:none;';
  /** CSS 声明：`mask:padding-box;`。 */
  readonly paddingBox: string = 'mask:padding-box;';
  /** CSS 声明：`mask:repeat;`。 */
  readonly repeat: string = 'mask:repeat;';
  /** CSS 声明：`mask:repeat-x;`。 */
  readonly repeatX: string = 'mask:repeat-x;';
  /** CSS 声明：`mask:repeat-y;`。 */
  readonly repeatY: string = 'mask:repeat-y;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask:revert;`。
   */
  readonly revert: string = 'mask:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask:revert-layer;`。
   */
  readonly revertLayer: string = 'mask:revert-layer;';
  /** CSS 声明：`mask:right;`。 */
  readonly right: string = 'mask:right;';
  /** CSS 声明：`mask:round;`。 */
  readonly round: string = 'mask:round;';
  /** CSS 声明：`mask:space;`。 */
  readonly space: string = 'mask:space;';
  /** CSS 声明：`mask:stroke-box;`。 */
  readonly strokeBox: string = 'mask:stroke-box;';
  /** CSS 声明：`mask:subtract;`。 */
  readonly subtract: string = 'mask:subtract;';
  /** CSS 声明：`mask:top;`。 */
  readonly top: string = 'mask:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask:unset;`。
   */
  readonly unset: string = 'mask:unset;';
  /** CSS 声明：`mask:view-box;`。 */
  readonly viewBox: string = 'mask:view-box;';
  /**
   * 创建 mask 属性作者；普通使用通过 s.mask 取得共享实例。
   * @example
   * class CustomMaskCss extends MaskCss {}
   */
  constructor() {
    super('mask');
  }
  /**
   * 原样生成 mask 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask:value;。
   * @example
   * s.mask.raw('inherit') // mask:inherit;
   */
  raw(value: Property.Mask | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.mask.calc('var(--value) * 2')
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
   * s.mask.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Mask | CssString, ...others: (Property.Mask | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.mask.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Mask | CssString, ...others: (Property.Mask | CssString)[]): string {
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
   * s.mask.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Mask | CssString,
    preferred: Property.Mask | CssString,
    maximum: Property.Mask | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mask-border 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskBorderKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border:alpha;`。 */
  readonly alpha: Property.MaskBorder | CssString = 'alpha';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border:inherit;`。
   */
  readonly inherit: Property.MaskBorder | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border:initial;`。
   */
  readonly initial: Property.MaskBorder | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border:luminance;`。 */
  readonly luminance: Property.MaskBorder | CssString = 'luminance';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border:none;`。 */
  readonly none: Property.MaskBorder | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border:repeat;`。 */
  readonly repeat: Property.MaskBorder | CssString = 'repeat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border:revert;`。
   */
  readonly revert: Property.MaskBorder | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border:revert-layer;`。
   */
  readonly revertLayer: Property.MaskBorder | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border:round;`。 */
  readonly round: Property.MaskBorder | CssString = 'round';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border:space;`。 */
  readonly space: Property.MaskBorder | CssString = 'space';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border:stretch;`。 */
  readonly stretch: Property.MaskBorder | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border:unset;`。
   */
  readonly unset: Property.MaskBorder | CssString = 'unset';
}

/**
 * 设置基于九宫格图像切片的边框遮罩。（mask-border）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
 */
export class MaskBorderCss extends CssProperty {
  /** CSS 声明：`mask-border:alpha;`。 */
  readonly alpha: string = 'mask-border:alpha;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border:inherit;`。
   */
  readonly inherit: string = 'mask-border:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border:initial;`。
   */
  readonly initial: string = 'mask-border:initial;';
  /** CSS 声明：`mask-border:luminance;`。 */
  readonly luminance: string = 'mask-border:luminance;';
  /** CSS 声明：`mask-border:none;`。 */
  readonly none: string = 'mask-border:none;';
  /** CSS 声明：`mask-border:repeat;`。 */
  readonly repeat: string = 'mask-border:repeat;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border:revert;`。
   */
  readonly revert: string = 'mask-border:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-border:revert-layer;';
  /** CSS 声明：`mask-border:round;`。 */
  readonly round: string = 'mask-border:round;';
  /** CSS 声明：`mask-border:space;`。 */
  readonly space: string = 'mask-border:space;';
  /** CSS 声明：`mask-border:stretch;`。 */
  readonly stretch: string = 'mask-border:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border:unset;`。
   */
  readonly unset: string = 'mask-border:unset;';
  /**
   * 创建 mask-border 属性作者；普通使用通过 s.maskBorder 取得共享实例。
   * @example
   * class CustomMaskBorderCss extends MaskBorderCss {}
   */
  constructor() {
    super('mask-border');
  }
  /**
   * 原样生成 mask-border 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-border:value;。
   * @example
   * s.maskBorder.raw('inherit') // mask-border:inherit;
   */
  raw(value: Property.MaskBorder | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maskBorder.calc('var(--value) * 2')
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
   * s.maskBorder.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaskBorder | CssString,
    ...others: (Property.MaskBorder | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maskBorder.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaskBorder | CssString,
    ...others: (Property.MaskBorder | CssString)[]
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
   * s.maskBorder.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaskBorder | CssString,
    preferred: Property.MaskBorder | CssString,
    maximum: Property.MaskBorder | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mask-border-mode 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskBorderModeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-mode:alpha;`。 */
  readonly alpha: Property.MaskBorderMode | CssString = 'alpha';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-mode:inherit;`。
   */
  readonly inherit: Property.MaskBorderMode | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-mode:initial;`。
   */
  readonly initial: Property.MaskBorderMode | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-mode:luminance;`。 */
  readonly luminance: Property.MaskBorderMode | CssString = 'luminance';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-mode:revert;`。
   */
  readonly revert: Property.MaskBorderMode | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-mode:revert-layer;`。
   */
  readonly revertLayer: Property.MaskBorderMode | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-mode:unset;`。
   */
  readonly unset: Property.MaskBorderMode | CssString = 'unset';
}

/**
 * 设置边框遮罩使用 alpha 还是亮度信息。（mask-border-mode）
 *
 * CSS 初始值：`alpha`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
 */
export class MaskBorderModeCss extends CssProperty {
  /** CSS 声明：`mask-border-mode:alpha;`。 */
  readonly alpha: string = 'mask-border-mode:alpha;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-mode:inherit;`。
   */
  readonly inherit: string = 'mask-border-mode:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-mode:initial;`。
   */
  readonly initial: string = 'mask-border-mode:initial;';
  /** CSS 声明：`mask-border-mode:luminance;`。 */
  readonly luminance: string = 'mask-border-mode:luminance;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-mode:revert;`。
   */
  readonly revert: string = 'mask-border-mode:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-mode:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-border-mode:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-mode:unset;`。
   */
  readonly unset: string = 'mask-border-mode:unset;';
  /**
   * 创建 mask-border-mode 属性作者；普通使用通过 s.maskBorderMode 取得共享实例。
   * @example
   * class CustomMaskBorderModeCss extends MaskBorderModeCss {}
   */
  constructor() {
    super('mask-border-mode');
  }
  /**
   * 原样生成 mask-border-mode 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-border-mode:value;。
   * @example
   * s.maskBorderMode.raw('inherit') // mask-border-mode:inherit;
   */
  raw(value: Property.MaskBorderMode | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-border-outset 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskBorderOutsetKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-outset:inherit;`。
   */
  readonly inherit: Property.MaskBorderOutset | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-outset:initial;`。
   */
  readonly initial: Property.MaskBorderOutset | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-outset:revert;`。
   */
  readonly revert: Property.MaskBorderOutset | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-outset:revert-layer;`。
   */
  readonly revertLayer: Property.MaskBorderOutset | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-outset:unset;`。
   */
  readonly unset: Property.MaskBorderOutset | CssString = 'unset';
}

/**
 * 设置边框遮罩超出边框盒的距离。（mask-border-outset）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
 */
export class MaskBorderOutsetCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-outset:inherit;`。
   */
  readonly inherit: string = 'mask-border-outset:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-outset:initial;`。
   */
  readonly initial: string = 'mask-border-outset:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-outset:revert;`。
   */
  readonly revert: string = 'mask-border-outset:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-outset:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-border-outset:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-outset:unset;`。
   */
  readonly unset: string = 'mask-border-outset:unset;';
  /**
   * 创建 mask-border-outset 属性作者；普通使用通过 s.maskBorderOutset 取得共享实例。
   * @example
   * class CustomMaskBorderOutsetCss extends MaskBorderOutsetCss {}
   */
  constructor() {
    super('mask-border-outset');
  }
  /**
   * 原样生成 mask-border-outset 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-border-outset:value;。
   * @example
   * s.maskBorderOutset.raw('inherit') // mask-border-outset:inherit;
   */
  raw(value: Property.MaskBorderOutset | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.maskBorderOutset.px(1)
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
   * s.maskBorderOutset.px(1, 2)
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
   * s.maskBorderOutset.px(1, 2, 3)
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
   * s.maskBorderOutset.px(1, 2, 3, 4)
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
   * s.maskBorderOutset.cm(1)
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
   * s.maskBorderOutset.cm(1, 2)
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
   * s.maskBorderOutset.cm(1, 2, 3)
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
   * s.maskBorderOutset.cm(1, 2, 3, 4)
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
   * s.maskBorderOutset.mm(1)
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
   * s.maskBorderOutset.mm(1, 2)
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
   * s.maskBorderOutset.mm(1, 2, 3)
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
   * s.maskBorderOutset.mm(1, 2, 3, 4)
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
   * s.maskBorderOutset.q(1)
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
   * s.maskBorderOutset.q(1, 2)
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
   * s.maskBorderOutset.q(1, 2, 3)
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
   * s.maskBorderOutset.q(1, 2, 3, 4)
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
   * s.maskBorderOutset.in(1)
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
   * s.maskBorderOutset.in(1, 2)
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
   * s.maskBorderOutset.in(1, 2, 3)
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
   * s.maskBorderOutset.in(1, 2, 3, 4)
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
   * s.maskBorderOutset.pt(1)
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
   * s.maskBorderOutset.pt(1, 2)
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
   * s.maskBorderOutset.pt(1, 2, 3)
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
   * s.maskBorderOutset.pt(1, 2, 3, 4)
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
   * s.maskBorderOutset.pc(1)
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
   * s.maskBorderOutset.pc(1, 2)
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
   * s.maskBorderOutset.pc(1, 2, 3)
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
   * s.maskBorderOutset.pc(1, 2, 3, 4)
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
   * s.maskBorderOutset.em(1)
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
   * s.maskBorderOutset.em(1, 2)
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
   * s.maskBorderOutset.em(1, 2, 3)
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
   * s.maskBorderOutset.em(1, 2, 3, 4)
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
   * s.maskBorderOutset.rem(1)
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
   * s.maskBorderOutset.rem(1, 2)
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
   * s.maskBorderOutset.rem(1, 2, 3)
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
   * s.maskBorderOutset.rem(1, 2, 3, 4)
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
   * s.maskBorderOutset.ex(1)
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
   * s.maskBorderOutset.ex(1, 2)
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
   * s.maskBorderOutset.ex(1, 2, 3)
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
   * s.maskBorderOutset.ex(1, 2, 3, 4)
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
   * s.maskBorderOutset.rex(1)
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
   * s.maskBorderOutset.rex(1, 2)
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
   * s.maskBorderOutset.rex(1, 2, 3)
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
   * s.maskBorderOutset.rex(1, 2, 3, 4)
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
   * s.maskBorderOutset.ch(1)
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
   * s.maskBorderOutset.ch(1, 2)
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
   * s.maskBorderOutset.ch(1, 2, 3)
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
   * s.maskBorderOutset.ch(1, 2, 3, 4)
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
   * s.maskBorderOutset.rch(1)
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
   * s.maskBorderOutset.rch(1, 2)
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
   * s.maskBorderOutset.rch(1, 2, 3)
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
   * s.maskBorderOutset.rch(1, 2, 3, 4)
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
   * s.maskBorderOutset.cap(1)
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
   * s.maskBorderOutset.cap(1, 2)
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
   * s.maskBorderOutset.cap(1, 2, 3)
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
   * s.maskBorderOutset.cap(1, 2, 3, 4)
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
   * s.maskBorderOutset.rcap(1)
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
   * s.maskBorderOutset.rcap(1, 2)
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
   * s.maskBorderOutset.rcap(1, 2, 3)
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
   * s.maskBorderOutset.rcap(1, 2, 3, 4)
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
   * s.maskBorderOutset.ic(1)
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
   * s.maskBorderOutset.ic(1, 2)
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
   * s.maskBorderOutset.ic(1, 2, 3)
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
   * s.maskBorderOutset.ic(1, 2, 3, 4)
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
   * s.maskBorderOutset.ric(1)
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
   * s.maskBorderOutset.ric(1, 2)
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
   * s.maskBorderOutset.ric(1, 2, 3)
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
   * s.maskBorderOutset.ric(1, 2, 3, 4)
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
   * s.maskBorderOutset.lh(1)
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
   * s.maskBorderOutset.lh(1, 2)
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
   * s.maskBorderOutset.lh(1, 2, 3)
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
   * s.maskBorderOutset.lh(1, 2, 3, 4)
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
   * s.maskBorderOutset.rlh(1)
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
   * s.maskBorderOutset.rlh(1, 2)
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
   * s.maskBorderOutset.rlh(1, 2, 3)
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
   * s.maskBorderOutset.rlh(1, 2, 3, 4)
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
   * s.maskBorderOutset.vw(1)
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
   * s.maskBorderOutset.vw(1, 2)
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
   * s.maskBorderOutset.vw(1, 2, 3)
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
   * s.maskBorderOutset.vw(1, 2, 3, 4)
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
   * s.maskBorderOutset.vh(1)
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
   * s.maskBorderOutset.vh(1, 2)
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
   * s.maskBorderOutset.vh(1, 2, 3)
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
   * s.maskBorderOutset.vh(1, 2, 3, 4)
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
   * s.maskBorderOutset.vi(1)
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
   * s.maskBorderOutset.vi(1, 2)
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
   * s.maskBorderOutset.vi(1, 2, 3)
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
   * s.maskBorderOutset.vi(1, 2, 3, 4)
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
   * s.maskBorderOutset.vb(1)
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
   * s.maskBorderOutset.vb(1, 2)
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
   * s.maskBorderOutset.vb(1, 2, 3)
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
   * s.maskBorderOutset.vb(1, 2, 3, 4)
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
   * s.maskBorderOutset.vmin(1)
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
   * s.maskBorderOutset.vmin(1, 2)
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
   * s.maskBorderOutset.vmin(1, 2, 3)
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
   * s.maskBorderOutset.vmin(1, 2, 3, 4)
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
   * s.maskBorderOutset.vmax(1)
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
   * s.maskBorderOutset.vmax(1, 2)
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
   * s.maskBorderOutset.vmax(1, 2, 3)
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
   * s.maskBorderOutset.vmax(1, 2, 3, 4)
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
   * s.maskBorderOutset.svw(1)
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
   * s.maskBorderOutset.svw(1, 2)
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
   * s.maskBorderOutset.svw(1, 2, 3)
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
   * s.maskBorderOutset.svw(1, 2, 3, 4)
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
   * s.maskBorderOutset.svh(1)
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
   * s.maskBorderOutset.svh(1, 2)
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
   * s.maskBorderOutset.svh(1, 2, 3)
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
   * s.maskBorderOutset.svh(1, 2, 3, 4)
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
   * s.maskBorderOutset.svi(1)
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
   * s.maskBorderOutset.svi(1, 2)
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
   * s.maskBorderOutset.svi(1, 2, 3)
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
   * s.maskBorderOutset.svi(1, 2, 3, 4)
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
   * s.maskBorderOutset.svb(1)
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
   * s.maskBorderOutset.svb(1, 2)
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
   * s.maskBorderOutset.svb(1, 2, 3)
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
   * s.maskBorderOutset.svb(1, 2, 3, 4)
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
   * s.maskBorderOutset.svmin(1)
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
   * s.maskBorderOutset.svmin(1, 2)
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
   * s.maskBorderOutset.svmin(1, 2, 3)
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
   * s.maskBorderOutset.svmin(1, 2, 3, 4)
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
   * s.maskBorderOutset.svmax(1)
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
   * s.maskBorderOutset.svmax(1, 2)
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
   * s.maskBorderOutset.svmax(1, 2, 3)
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
   * s.maskBorderOutset.svmax(1, 2, 3, 4)
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
   * s.maskBorderOutset.lvw(1)
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
   * s.maskBorderOutset.lvw(1, 2)
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
   * s.maskBorderOutset.lvw(1, 2, 3)
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
   * s.maskBorderOutset.lvw(1, 2, 3, 4)
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
   * s.maskBorderOutset.lvh(1)
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
   * s.maskBorderOutset.lvh(1, 2)
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
   * s.maskBorderOutset.lvh(1, 2, 3)
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
   * s.maskBorderOutset.lvh(1, 2, 3, 4)
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
   * s.maskBorderOutset.lvi(1)
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
   * s.maskBorderOutset.lvi(1, 2)
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
   * s.maskBorderOutset.lvi(1, 2, 3)
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
   * s.maskBorderOutset.lvi(1, 2, 3, 4)
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
   * s.maskBorderOutset.lvb(1)
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
   * s.maskBorderOutset.lvb(1, 2)
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
   * s.maskBorderOutset.lvb(1, 2, 3)
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
   * s.maskBorderOutset.lvb(1, 2, 3, 4)
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
   * s.maskBorderOutset.lvmin(1)
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
   * s.maskBorderOutset.lvmin(1, 2)
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
   * s.maskBorderOutset.lvmin(1, 2, 3)
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
   * s.maskBorderOutset.lvmin(1, 2, 3, 4)
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
   * s.maskBorderOutset.lvmax(1)
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
   * s.maskBorderOutset.lvmax(1, 2)
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
   * s.maskBorderOutset.lvmax(1, 2, 3)
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
   * s.maskBorderOutset.lvmax(1, 2, 3, 4)
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
   * s.maskBorderOutset.dvw(1)
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
   * s.maskBorderOutset.dvw(1, 2)
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
   * s.maskBorderOutset.dvw(1, 2, 3)
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
   * s.maskBorderOutset.dvw(1, 2, 3, 4)
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
   * s.maskBorderOutset.dvh(1)
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
   * s.maskBorderOutset.dvh(1, 2)
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
   * s.maskBorderOutset.dvh(1, 2, 3)
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
   * s.maskBorderOutset.dvh(1, 2, 3, 4)
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
   * s.maskBorderOutset.dvi(1)
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
   * s.maskBorderOutset.dvi(1, 2)
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
   * s.maskBorderOutset.dvi(1, 2, 3)
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
   * s.maskBorderOutset.dvi(1, 2, 3, 4)
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
   * s.maskBorderOutset.dvb(1)
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
   * s.maskBorderOutset.dvb(1, 2)
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
   * s.maskBorderOutset.dvb(1, 2, 3)
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
   * s.maskBorderOutset.dvb(1, 2, 3, 4)
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
   * s.maskBorderOutset.dvmin(1)
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
   * s.maskBorderOutset.dvmin(1, 2)
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
   * s.maskBorderOutset.dvmin(1, 2, 3)
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
   * s.maskBorderOutset.dvmin(1, 2, 3, 4)
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
   * s.maskBorderOutset.dvmax(1)
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
   * s.maskBorderOutset.dvmax(1, 2)
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
   * s.maskBorderOutset.dvmax(1, 2, 3)
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
   * s.maskBorderOutset.dvmax(1, 2, 3, 4)
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
   * s.maskBorderOutset.cqw(1)
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
   * s.maskBorderOutset.cqw(1, 2)
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
   * s.maskBorderOutset.cqw(1, 2, 3)
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
   * s.maskBorderOutset.cqw(1, 2, 3, 4)
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
   * s.maskBorderOutset.cqh(1)
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
   * s.maskBorderOutset.cqh(1, 2)
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
   * s.maskBorderOutset.cqh(1, 2, 3)
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
   * s.maskBorderOutset.cqh(1, 2, 3, 4)
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
   * s.maskBorderOutset.cqi(1)
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
   * s.maskBorderOutset.cqi(1, 2)
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
   * s.maskBorderOutset.cqi(1, 2, 3)
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
   * s.maskBorderOutset.cqi(1, 2, 3, 4)
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
   * s.maskBorderOutset.cqb(1)
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
   * s.maskBorderOutset.cqb(1, 2)
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
   * s.maskBorderOutset.cqb(1, 2, 3)
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
   * s.maskBorderOutset.cqb(1, 2, 3, 4)
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
   * s.maskBorderOutset.cqmin(1)
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
   * s.maskBorderOutset.cqmin(1, 2)
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
   * s.maskBorderOutset.cqmin(1, 2, 3)
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
   * s.maskBorderOutset.cqmin(1, 2, 3, 4)
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
   * s.maskBorderOutset.cqmax(1)
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
   * s.maskBorderOutset.cqmax(1, 2)
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
   * s.maskBorderOutset.cqmax(1, 2, 3)
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
   * s.maskBorderOutset.cqmax(1, 2, 3, 4)
   */
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maskBorderOutset.calc('var(--value) * 2')
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
   * s.maskBorderOutset.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaskBorderOutset | CssString,
    ...others: (Property.MaskBorderOutset | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maskBorderOutset.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaskBorderOutset | CssString,
    ...others: (Property.MaskBorderOutset | CssString)[]
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
   * s.maskBorderOutset.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaskBorderOutset | CssString,
    preferred: Property.MaskBorderOutset | CssString,
    maximum: Property.MaskBorderOutset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mask-border-repeat 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskBorderRepeatKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-repeat:inherit;`。
   */
  readonly inherit: Property.MaskBorderRepeat | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-repeat:initial;`。
   */
  readonly initial: Property.MaskBorderRepeat | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-repeat:repeat;`。 */
  readonly repeat: Property.MaskBorderRepeat | CssString = 'repeat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-repeat:revert;`。
   */
  readonly revert: Property.MaskBorderRepeat | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-repeat:revert-layer;`。
   */
  readonly revertLayer: Property.MaskBorderRepeat | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-repeat:round;`。 */
  readonly round: Property.MaskBorderRepeat | CssString = 'round';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-repeat:space;`。 */
  readonly space: Property.MaskBorderRepeat | CssString = 'space';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-repeat:stretch;`。 */
  readonly stretch: Property.MaskBorderRepeat | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-repeat:unset;`。
   */
  readonly unset: Property.MaskBorderRepeat | CssString = 'unset';
}

/**
 * 设置边框遮罩切片的重复或拉伸方式。（mask-border-repeat）
 *
 * CSS 初始值：`stretch`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
 */
export class MaskBorderRepeatCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-repeat:inherit;`。
   */
  readonly inherit: string = 'mask-border-repeat:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-repeat:initial;`。
   */
  readonly initial: string = 'mask-border-repeat:initial;';
  /** CSS 声明：`mask-border-repeat:repeat;`。 */
  readonly repeat: string = 'mask-border-repeat:repeat;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-repeat:revert;`。
   */
  readonly revert: string = 'mask-border-repeat:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-repeat:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-border-repeat:revert-layer;';
  /** CSS 声明：`mask-border-repeat:round;`。 */
  readonly round: string = 'mask-border-repeat:round;';
  /** CSS 声明：`mask-border-repeat:space;`。 */
  readonly space: string = 'mask-border-repeat:space;';
  /** CSS 声明：`mask-border-repeat:stretch;`。 */
  readonly stretch: string = 'mask-border-repeat:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-repeat:unset;`。
   */
  readonly unset: string = 'mask-border-repeat:unset;';
  /**
   * 创建 mask-border-repeat 属性作者；普通使用通过 s.maskBorderRepeat 取得共享实例。
   * @example
   * class CustomMaskBorderRepeatCss extends MaskBorderRepeatCss {}
   */
  constructor() {
    super('mask-border-repeat');
  }
  /**
   * 原样生成 mask-border-repeat 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-border-repeat:value;。
   * @example
   * s.maskBorderRepeat.raw('inherit') // mask-border-repeat:inherit;
   */
  raw(value: Property.MaskBorderRepeat | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-border-slice 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskBorderSliceKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-slice:inherit;`。
   */
  readonly inherit: Property.MaskBorderSlice | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-slice:initial;`。
   */
  readonly initial: Property.MaskBorderSlice | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-slice:revert;`。
   */
  readonly revert: Property.MaskBorderSlice | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-slice:revert-layer;`。
   */
  readonly revertLayer: Property.MaskBorderSlice | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-slice:unset;`。
   */
  readonly unset: Property.MaskBorderSlice | CssString = 'unset';
}

/**
 * 设置边框遮罩图像的切片位置。（mask-border-slice）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
 */
export class MaskBorderSliceCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-slice:inherit;`。
   */
  readonly inherit: string = 'mask-border-slice:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-slice:initial;`。
   */
  readonly initial: string = 'mask-border-slice:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-slice:revert;`。
   */
  readonly revert: string = 'mask-border-slice:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-slice:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-border-slice:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-slice:unset;`。
   */
  readonly unset: string = 'mask-border-slice:unset;';
  /**
   * 创建 mask-border-slice 属性作者；普通使用通过 s.maskBorderSlice 取得共享实例。
   * @example
   * class CustomMaskBorderSliceCss extends MaskBorderSliceCss {}
   */
  constructor() {
    super('mask-border-slice');
  }
  /**
   * 原样生成 mask-border-slice 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-border-slice:value;。
   * @example
   * s.maskBorderSlice.raw('inherit') // mask-border-slice:inherit;
   */
  raw(value: Property.MaskBorderSlice | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maskBorderSlice.calc('var(--value) * 2')
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
   * s.maskBorderSlice.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaskBorderSlice | CssString,
    ...others: (Property.MaskBorderSlice | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maskBorderSlice.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaskBorderSlice | CssString,
    ...others: (Property.MaskBorderSlice | CssString)[]
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
   * s.maskBorderSlice.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaskBorderSlice | CssString,
    preferred: Property.MaskBorderSlice | CssString,
    maximum: Property.MaskBorderSlice | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mask-border-source 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskBorderSourceKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-source:inherit;`。
   */
  readonly inherit: Property.MaskBorderSource | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-source:initial;`。
   */
  readonly initial: Property.MaskBorderSource | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-source:none;`。 */
  readonly none: Property.MaskBorderSource | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-source:revert;`。
   */
  readonly revert: Property.MaskBorderSource | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-source:revert-layer;`。
   */
  readonly revertLayer: Property.MaskBorderSource | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-source:unset;`。
   */
  readonly unset: Property.MaskBorderSource | CssString = 'unset';
}

/**
 * 设置边框遮罩的源图像。（mask-border-source）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
 */
export class MaskBorderSourceCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-source:inherit;`。
   */
  readonly inherit: string = 'mask-border-source:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-source:initial;`。
   */
  readonly initial: string = 'mask-border-source:initial;';
  /** CSS 声明：`mask-border-source:none;`。 */
  readonly none: string = 'mask-border-source:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-source:revert;`。
   */
  readonly revert: string = 'mask-border-source:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-source:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-border-source:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-source:unset;`。
   */
  readonly unset: string = 'mask-border-source:unset;';
  /**
   * 创建 mask-border-source 属性作者；普通使用通过 s.maskBorderSource 取得共享实例。
   * @example
   * class CustomMaskBorderSourceCss extends MaskBorderSourceCss {}
   */
  constructor() {
    super('mask-border-source');
  }
  /**
   * 原样生成 mask-border-source 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-border-source:value;。
   * @example
   * s.maskBorderSource.raw('inherit') // mask-border-source:inherit;
   */
  raw(value: Property.MaskBorderSource | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-border-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskBorderWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-border-width:auto;`。 */
  readonly auto: Property.MaskBorderWidth | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-width:inherit;`。
   */
  readonly inherit: Property.MaskBorderWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-width:initial;`。
   */
  readonly initial: Property.MaskBorderWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-width:revert;`。
   */
  readonly revert: Property.MaskBorderWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-width:revert-layer;`。
   */
  readonly revertLayer: Property.MaskBorderWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-width:unset;`。
   */
  readonly unset: Property.MaskBorderWidth | CssString = 'unset';
}

/**
 * 设置边框遮罩各边的宽度。（mask-border-width）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
 */
export class MaskBorderWidthCss extends LengthCssProperty {
  /** CSS 声明：`mask-border-width:auto;`。 */
  readonly auto: string = 'mask-border-width:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-border-width:inherit;`。
   */
  readonly inherit: string = 'mask-border-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-border-width:initial;`。
   */
  readonly initial: string = 'mask-border-width:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-border-width:revert;`。
   */
  readonly revert: string = 'mask-border-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-border-width:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-border-width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-border-width:unset;`。
   */
  readonly unset: string = 'mask-border-width:unset;';
  /**
   * 创建 mask-border-width 属性作者；普通使用通过 s.maskBorderWidth 取得共享实例。
   * @example
   * class CustomMaskBorderWidthCss extends MaskBorderWidthCss {}
   */
  constructor() {
    super('mask-border-width');
  }
  /**
   * 原样生成 mask-border-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-border-width:value;。
   * @example
   * s.maskBorderWidth.raw('inherit') // mask-border-width:inherit;
   */
  raw(value: Property.MaskBorderWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.maskBorderWidth.px(1)
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
   * s.maskBorderWidth.px(1, 2)
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
   * s.maskBorderWidth.px(1, 2, 3)
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
   * s.maskBorderWidth.px(1, 2, 3, 4)
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
   * s.maskBorderWidth.cm(1)
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
   * s.maskBorderWidth.cm(1, 2)
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
   * s.maskBorderWidth.cm(1, 2, 3)
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
   * s.maskBorderWidth.cm(1, 2, 3, 4)
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
   * s.maskBorderWidth.mm(1)
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
   * s.maskBorderWidth.mm(1, 2)
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
   * s.maskBorderWidth.mm(1, 2, 3)
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
   * s.maskBorderWidth.mm(1, 2, 3, 4)
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
   * s.maskBorderWidth.q(1)
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
   * s.maskBorderWidth.q(1, 2)
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
   * s.maskBorderWidth.q(1, 2, 3)
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
   * s.maskBorderWidth.q(1, 2, 3, 4)
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
   * s.maskBorderWidth.in(1)
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
   * s.maskBorderWidth.in(1, 2)
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
   * s.maskBorderWidth.in(1, 2, 3)
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
   * s.maskBorderWidth.in(1, 2, 3, 4)
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
   * s.maskBorderWidth.pt(1)
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
   * s.maskBorderWidth.pt(1, 2)
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
   * s.maskBorderWidth.pt(1, 2, 3)
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
   * s.maskBorderWidth.pt(1, 2, 3, 4)
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
   * s.maskBorderWidth.pc(1)
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
   * s.maskBorderWidth.pc(1, 2)
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
   * s.maskBorderWidth.pc(1, 2, 3)
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
   * s.maskBorderWidth.pc(1, 2, 3, 4)
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
   * s.maskBorderWidth.em(1)
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
   * s.maskBorderWidth.em(1, 2)
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
   * s.maskBorderWidth.em(1, 2, 3)
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
   * s.maskBorderWidth.em(1, 2, 3, 4)
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
   * s.maskBorderWidth.rem(1)
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
   * s.maskBorderWidth.rem(1, 2)
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
   * s.maskBorderWidth.rem(1, 2, 3)
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
   * s.maskBorderWidth.rem(1, 2, 3, 4)
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
   * s.maskBorderWidth.ex(1)
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
   * s.maskBorderWidth.ex(1, 2)
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
   * s.maskBorderWidth.ex(1, 2, 3)
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
   * s.maskBorderWidth.ex(1, 2, 3, 4)
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
   * s.maskBorderWidth.rex(1)
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
   * s.maskBorderWidth.rex(1, 2)
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
   * s.maskBorderWidth.rex(1, 2, 3)
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
   * s.maskBorderWidth.rex(1, 2, 3, 4)
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
   * s.maskBorderWidth.ch(1)
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
   * s.maskBorderWidth.ch(1, 2)
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
   * s.maskBorderWidth.ch(1, 2, 3)
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
   * s.maskBorderWidth.ch(1, 2, 3, 4)
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
   * s.maskBorderWidth.rch(1)
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
   * s.maskBorderWidth.rch(1, 2)
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
   * s.maskBorderWidth.rch(1, 2, 3)
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
   * s.maskBorderWidth.rch(1, 2, 3, 4)
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
   * s.maskBorderWidth.cap(1)
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
   * s.maskBorderWidth.cap(1, 2)
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
   * s.maskBorderWidth.cap(1, 2, 3)
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
   * s.maskBorderWidth.cap(1, 2, 3, 4)
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
   * s.maskBorderWidth.rcap(1)
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
   * s.maskBorderWidth.rcap(1, 2)
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
   * s.maskBorderWidth.rcap(1, 2, 3)
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
   * s.maskBorderWidth.rcap(1, 2, 3, 4)
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
   * s.maskBorderWidth.ic(1)
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
   * s.maskBorderWidth.ic(1, 2)
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
   * s.maskBorderWidth.ic(1, 2, 3)
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
   * s.maskBorderWidth.ic(1, 2, 3, 4)
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
   * s.maskBorderWidth.ric(1)
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
   * s.maskBorderWidth.ric(1, 2)
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
   * s.maskBorderWidth.ric(1, 2, 3)
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
   * s.maskBorderWidth.ric(1, 2, 3, 4)
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
   * s.maskBorderWidth.lh(1)
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
   * s.maskBorderWidth.lh(1, 2)
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
   * s.maskBorderWidth.lh(1, 2, 3)
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
   * s.maskBorderWidth.lh(1, 2, 3, 4)
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
   * s.maskBorderWidth.rlh(1)
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
   * s.maskBorderWidth.rlh(1, 2)
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
   * s.maskBorderWidth.rlh(1, 2, 3)
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
   * s.maskBorderWidth.rlh(1, 2, 3, 4)
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
   * s.maskBorderWidth.vw(1)
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
   * s.maskBorderWidth.vw(1, 2)
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
   * s.maskBorderWidth.vw(1, 2, 3)
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
   * s.maskBorderWidth.vw(1, 2, 3, 4)
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
   * s.maskBorderWidth.vh(1)
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
   * s.maskBorderWidth.vh(1, 2)
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
   * s.maskBorderWidth.vh(1, 2, 3)
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
   * s.maskBorderWidth.vh(1, 2, 3, 4)
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
   * s.maskBorderWidth.vi(1)
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
   * s.maskBorderWidth.vi(1, 2)
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
   * s.maskBorderWidth.vi(1, 2, 3)
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
   * s.maskBorderWidth.vi(1, 2, 3, 4)
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
   * s.maskBorderWidth.vb(1)
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
   * s.maskBorderWidth.vb(1, 2)
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
   * s.maskBorderWidth.vb(1, 2, 3)
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
   * s.maskBorderWidth.vb(1, 2, 3, 4)
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
   * s.maskBorderWidth.vmin(1)
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
   * s.maskBorderWidth.vmin(1, 2)
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
   * s.maskBorderWidth.vmin(1, 2, 3)
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
   * s.maskBorderWidth.vmin(1, 2, 3, 4)
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
   * s.maskBorderWidth.vmax(1)
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
   * s.maskBorderWidth.vmax(1, 2)
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
   * s.maskBorderWidth.vmax(1, 2, 3)
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
   * s.maskBorderWidth.vmax(1, 2, 3, 4)
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
   * s.maskBorderWidth.svw(1)
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
   * s.maskBorderWidth.svw(1, 2)
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
   * s.maskBorderWidth.svw(1, 2, 3)
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
   * s.maskBorderWidth.svw(1, 2, 3, 4)
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
   * s.maskBorderWidth.svh(1)
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
   * s.maskBorderWidth.svh(1, 2)
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
   * s.maskBorderWidth.svh(1, 2, 3)
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
   * s.maskBorderWidth.svh(1, 2, 3, 4)
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
   * s.maskBorderWidth.svi(1)
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
   * s.maskBorderWidth.svi(1, 2)
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
   * s.maskBorderWidth.svi(1, 2, 3)
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
   * s.maskBorderWidth.svi(1, 2, 3, 4)
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
   * s.maskBorderWidth.svb(1)
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
   * s.maskBorderWidth.svb(1, 2)
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
   * s.maskBorderWidth.svb(1, 2, 3)
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
   * s.maskBorderWidth.svb(1, 2, 3, 4)
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
   * s.maskBorderWidth.svmin(1)
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
   * s.maskBorderWidth.svmin(1, 2)
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
   * s.maskBorderWidth.svmin(1, 2, 3)
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
   * s.maskBorderWidth.svmin(1, 2, 3, 4)
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
   * s.maskBorderWidth.svmax(1)
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
   * s.maskBorderWidth.svmax(1, 2)
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
   * s.maskBorderWidth.svmax(1, 2, 3)
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
   * s.maskBorderWidth.svmax(1, 2, 3, 4)
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
   * s.maskBorderWidth.lvw(1)
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
   * s.maskBorderWidth.lvw(1, 2)
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
   * s.maskBorderWidth.lvw(1, 2, 3)
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
   * s.maskBorderWidth.lvw(1, 2, 3, 4)
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
   * s.maskBorderWidth.lvh(1)
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
   * s.maskBorderWidth.lvh(1, 2)
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
   * s.maskBorderWidth.lvh(1, 2, 3)
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
   * s.maskBorderWidth.lvh(1, 2, 3, 4)
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
   * s.maskBorderWidth.lvi(1)
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
   * s.maskBorderWidth.lvi(1, 2)
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
   * s.maskBorderWidth.lvi(1, 2, 3)
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
   * s.maskBorderWidth.lvi(1, 2, 3, 4)
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
   * s.maskBorderWidth.lvb(1)
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
   * s.maskBorderWidth.lvb(1, 2)
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
   * s.maskBorderWidth.lvb(1, 2, 3)
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
   * s.maskBorderWidth.lvb(1, 2, 3, 4)
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
   * s.maskBorderWidth.lvmin(1)
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
   * s.maskBorderWidth.lvmin(1, 2)
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
   * s.maskBorderWidth.lvmin(1, 2, 3)
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
   * s.maskBorderWidth.lvmin(1, 2, 3, 4)
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
   * s.maskBorderWidth.lvmax(1)
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
   * s.maskBorderWidth.lvmax(1, 2)
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
   * s.maskBorderWidth.lvmax(1, 2, 3)
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
   * s.maskBorderWidth.lvmax(1, 2, 3, 4)
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
   * s.maskBorderWidth.dvw(1)
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
   * s.maskBorderWidth.dvw(1, 2)
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
   * s.maskBorderWidth.dvw(1, 2, 3)
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
   * s.maskBorderWidth.dvw(1, 2, 3, 4)
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
   * s.maskBorderWidth.dvh(1)
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
   * s.maskBorderWidth.dvh(1, 2)
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
   * s.maskBorderWidth.dvh(1, 2, 3)
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
   * s.maskBorderWidth.dvh(1, 2, 3, 4)
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
   * s.maskBorderWidth.dvi(1)
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
   * s.maskBorderWidth.dvi(1, 2)
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
   * s.maskBorderWidth.dvi(1, 2, 3)
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
   * s.maskBorderWidth.dvi(1, 2, 3, 4)
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
   * s.maskBorderWidth.dvb(1)
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
   * s.maskBorderWidth.dvb(1, 2)
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
   * s.maskBorderWidth.dvb(1, 2, 3)
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
   * s.maskBorderWidth.dvb(1, 2, 3, 4)
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
   * s.maskBorderWidth.dvmin(1)
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
   * s.maskBorderWidth.dvmin(1, 2)
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
   * s.maskBorderWidth.dvmin(1, 2, 3)
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
   * s.maskBorderWidth.dvmin(1, 2, 3, 4)
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
   * s.maskBorderWidth.dvmax(1)
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
   * s.maskBorderWidth.dvmax(1, 2)
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
   * s.maskBorderWidth.dvmax(1, 2, 3)
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
   * s.maskBorderWidth.dvmax(1, 2, 3, 4)
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
   * s.maskBorderWidth.cqw(1)
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
   * s.maskBorderWidth.cqw(1, 2)
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
   * s.maskBorderWidth.cqw(1, 2, 3)
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
   * s.maskBorderWidth.cqw(1, 2, 3, 4)
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
   * s.maskBorderWidth.cqh(1)
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
   * s.maskBorderWidth.cqh(1, 2)
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
   * s.maskBorderWidth.cqh(1, 2, 3)
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
   * s.maskBorderWidth.cqh(1, 2, 3, 4)
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
   * s.maskBorderWidth.cqi(1)
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
   * s.maskBorderWidth.cqi(1, 2)
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
   * s.maskBorderWidth.cqi(1, 2, 3)
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
   * s.maskBorderWidth.cqi(1, 2, 3, 4)
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
   * s.maskBorderWidth.cqb(1)
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
   * s.maskBorderWidth.cqb(1, 2)
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
   * s.maskBorderWidth.cqb(1, 2, 3)
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
   * s.maskBorderWidth.cqb(1, 2, 3, 4)
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
   * s.maskBorderWidth.cqmin(1)
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
   * s.maskBorderWidth.cqmin(1, 2)
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
   * s.maskBorderWidth.cqmin(1, 2, 3)
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
   * s.maskBorderWidth.cqmin(1, 2, 3, 4)
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
   * s.maskBorderWidth.cqmax(1)
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
   * s.maskBorderWidth.cqmax(1, 2)
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
   * s.maskBorderWidth.cqmax(1, 2, 3)
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
   * s.maskBorderWidth.cqmax(1, 2, 3, 4)
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
   * s.maskBorderWidth.percent(1)
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
   * s.maskBorderWidth.percent(1, 2)
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
   * s.maskBorderWidth.percent(1, 2, 3)
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
   * s.maskBorderWidth.percent(1, 2, 3, 4)
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
   * s.maskBorderWidth.calc('var(--value) * 2')
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
   * s.maskBorderWidth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaskBorderWidth | CssString,
    ...others: (Property.MaskBorderWidth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maskBorderWidth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaskBorderWidth | CssString,
    ...others: (Property.MaskBorderWidth | CssString)[]
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
   * s.maskBorderWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaskBorderWidth | CssString,
    preferred: Property.MaskBorderWidth | CssString,
    maximum: Property.MaskBorderWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mask-clip 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskClipKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-clip:border-box;`。 */
  readonly borderBox: Property.MaskClip | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-clip:content-box;`。 */
  readonly contentBox: Property.MaskClip | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-clip:fill-box;`。 */
  readonly fillBox: Property.MaskClip | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-clip:inherit;`。
   */
  readonly inherit: Property.MaskClip | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-clip:initial;`。
   */
  readonly initial: Property.MaskClip | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-clip:no-clip;`。 */
  readonly noClip: Property.MaskClip | CssString = 'no-clip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-clip:padding-box;`。 */
  readonly paddingBox: Property.MaskClip | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-clip:revert;`。
   */
  readonly revert: Property.MaskClip | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-clip:revert-layer;`。
   */
  readonly revertLayer: Property.MaskClip | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-clip:stroke-box;`。 */
  readonly strokeBox: Property.MaskClip | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-clip:unset;`。
   */
  readonly unset: Property.MaskClip | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-clip:view-box;`。 */
  readonly viewBox: Property.MaskClip | CssString = 'view-box';
}

/**
 * 设置遮罩效果允许作用的裁剪区域。（mask-clip）
 *
 * CSS 初始值：`border-box`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
 */
export class MaskClipCss extends CssProperty {
  /** CSS 声明：`mask-clip:border-box;`。 */
  readonly borderBox: string = 'mask-clip:border-box;';
  /** CSS 声明：`mask-clip:content-box;`。 */
  readonly contentBox: string = 'mask-clip:content-box;';
  /** CSS 声明：`mask-clip:fill-box;`。 */
  readonly fillBox: string = 'mask-clip:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-clip:inherit;`。
   */
  readonly inherit: string = 'mask-clip:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-clip:initial;`。
   */
  readonly initial: string = 'mask-clip:initial;';
  /** CSS 声明：`mask-clip:no-clip;`。 */
  readonly noClip: string = 'mask-clip:no-clip;';
  /** CSS 声明：`mask-clip:padding-box;`。 */
  readonly paddingBox: string = 'mask-clip:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-clip:revert;`。
   */
  readonly revert: string = 'mask-clip:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-clip:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-clip:revert-layer;';
  /** CSS 声明：`mask-clip:stroke-box;`。 */
  readonly strokeBox: string = 'mask-clip:stroke-box;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-clip:unset;`。
   */
  readonly unset: string = 'mask-clip:unset;';
  /** CSS 声明：`mask-clip:view-box;`。 */
  readonly viewBox: string = 'mask-clip:view-box;';
  /**
   * 创建 mask-clip 属性作者；普通使用通过 s.maskClip 取得共享实例。
   * @example
   * class CustomMaskClipCss extends MaskClipCss {}
   */
  constructor() {
    super('mask-clip');
  }
  /**
   * 原样生成 mask-clip 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-clip:value;。
   * @example
   * s.maskClip.raw('inherit') // mask-clip:inherit;
   */
  raw(value: Property.MaskClip | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-composite 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskCompositeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-composite:add;`。 */
  readonly add: Property.MaskComposite | CssString = 'add';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-composite:exclude;`。 */
  readonly exclude: Property.MaskComposite | CssString = 'exclude';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-composite:inherit;`。
   */
  readonly inherit: Property.MaskComposite | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-composite:initial;`。
   */
  readonly initial: Property.MaskComposite | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-composite:intersect;`。 */
  readonly intersect: Property.MaskComposite | CssString = 'intersect';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-composite:revert;`。
   */
  readonly revert: Property.MaskComposite | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-composite:revert-layer;`。
   */
  readonly revertLayer: Property.MaskComposite | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-composite:subtract;`。 */
  readonly subtract: Property.MaskComposite | CssString = 'subtract';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-composite:unset;`。
   */
  readonly unset: Property.MaskComposite | CssString = 'unset';
}

/**
 * 设置多个遮罩图层之间的合成运算。（mask-composite）
 *
 * CSS 初始值：`add`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
 */
export class MaskCompositeCss extends CssProperty {
  /** CSS 声明：`mask-composite:add;`。 */
  readonly add: string = 'mask-composite:add;';
  /** CSS 声明：`mask-composite:exclude;`。 */
  readonly exclude: string = 'mask-composite:exclude;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-composite:inherit;`。
   */
  readonly inherit: string = 'mask-composite:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-composite:initial;`。
   */
  readonly initial: string = 'mask-composite:initial;';
  /** CSS 声明：`mask-composite:intersect;`。 */
  readonly intersect: string = 'mask-composite:intersect;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-composite:revert;`。
   */
  readonly revert: string = 'mask-composite:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-composite:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-composite:revert-layer;';
  /** CSS 声明：`mask-composite:subtract;`。 */
  readonly subtract: string = 'mask-composite:subtract;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-composite:unset;`。
   */
  readonly unset: string = 'mask-composite:unset;';
  /**
   * 创建 mask-composite 属性作者；普通使用通过 s.maskComposite 取得共享实例。
   * @example
   * class CustomMaskCompositeCss extends MaskCompositeCss {}
   */
  constructor() {
    super('mask-composite');
  }
  /**
   * 原样生成 mask-composite 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-composite:value;。
   * @example
   * s.maskComposite.raw('inherit') // mask-composite:inherit;
   */
  raw(value: Property.MaskComposite | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-image 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskImageKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-image:inherit;`。
   */
  readonly inherit: Property.MaskImage | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-image:initial;`。
   */
  readonly initial: Property.MaskImage | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-image:none;`。 */
  readonly none: Property.MaskImage | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-image:revert;`。
   */
  readonly revert: Property.MaskImage | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-image:revert-layer;`。
   */
  readonly revertLayer: Property.MaskImage | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-image:unset;`。
   */
  readonly unset: Property.MaskImage | CssString = 'unset';
}

/**
 * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。（mask-image）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
 */
export class MaskImageCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-image:inherit;`。
   */
  readonly inherit: string = 'mask-image:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-image:initial;`。
   */
  readonly initial: string = 'mask-image:initial;';
  /** CSS 声明：`mask-image:none;`。 */
  readonly none: string = 'mask-image:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-image:revert;`。
   */
  readonly revert: string = 'mask-image:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-image:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-image:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-image:unset;`。
   */
  readonly unset: string = 'mask-image:unset;';
  /**
   * 创建 mask-image 属性作者；普通使用通过 s.maskImage 取得共享实例。
   * @example
   * class CustomMaskImageCss extends MaskImageCss {}
   */
  constructor() {
    super('mask-image');
  }
  /**
   * 原样生成 mask-image 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-image:value;。
   * @example
   * s.maskImage.raw('inherit') // mask-image:inherit;
   */
  raw(value: Property.MaskImage | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-mode 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskModeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-mode:alpha;`。 */
  readonly alpha: Property.MaskMode | CssString = 'alpha';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-mode:inherit;`。
   */
  readonly inherit: Property.MaskMode | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-mode:initial;`。
   */
  readonly initial: Property.MaskMode | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-mode:luminance;`。 */
  readonly luminance: Property.MaskMode | CssString = 'luminance';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-mode:match-source;`。 */
  readonly matchSource: Property.MaskMode | CssString = 'match-source';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-mode:revert;`。
   */
  readonly revert: Property.MaskMode | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-mode:revert-layer;`。
   */
  readonly revertLayer: Property.MaskMode | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-mode:unset;`。
   */
  readonly unset: Property.MaskMode | CssString = 'unset';
}

/**
 * 设置遮罩按 alpha、亮度或源类型解释。（mask-mode）
 *
 * CSS 初始值：`match-source`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
 */
export class MaskModeCss extends CssProperty {
  /** CSS 声明：`mask-mode:alpha;`。 */
  readonly alpha: string = 'mask-mode:alpha;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-mode:inherit;`。
   */
  readonly inherit: string = 'mask-mode:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-mode:initial;`。
   */
  readonly initial: string = 'mask-mode:initial;';
  /** CSS 声明：`mask-mode:luminance;`。 */
  readonly luminance: string = 'mask-mode:luminance;';
  /** CSS 声明：`mask-mode:match-source;`。 */
  readonly matchSource: string = 'mask-mode:match-source;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-mode:revert;`。
   */
  readonly revert: string = 'mask-mode:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-mode:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-mode:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-mode:unset;`。
   */
  readonly unset: string = 'mask-mode:unset;';
  /**
   * 创建 mask-mode 属性作者；普通使用通过 s.maskMode 取得共享实例。
   * @example
   * class CustomMaskModeCss extends MaskModeCss {}
   */
  constructor() {
    super('mask-mode');
  }
  /**
   * 原样生成 mask-mode 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-mode:value;。
   * @example
   * s.maskMode.raw('inherit') // mask-mode:inherit;
   */
  raw(value: Property.MaskMode | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-origin 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskOriginKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-origin:border-box;`。 */
  readonly borderBox: Property.MaskOrigin | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-origin:content-box;`。 */
  readonly contentBox: Property.MaskOrigin | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-origin:fill-box;`。 */
  readonly fillBox: Property.MaskOrigin | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-origin:inherit;`。
   */
  readonly inherit: Property.MaskOrigin | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-origin:initial;`。
   */
  readonly initial: Property.MaskOrigin | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-origin:padding-box;`。 */
  readonly paddingBox: Property.MaskOrigin | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-origin:revert;`。
   */
  readonly revert: Property.MaskOrigin | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-origin:revert-layer;`。
   */
  readonly revertLayer: Property.MaskOrigin | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-origin:stroke-box;`。 */
  readonly strokeBox: Property.MaskOrigin | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-origin:unset;`。
   */
  readonly unset: Property.MaskOrigin | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-origin:view-box;`。 */
  readonly viewBox: Property.MaskOrigin | CssString = 'view-box';
}

/**
 * 设置遮罩图像定位所依据的盒子。（mask-origin）
 *
 * CSS 初始值：`border-box`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
 */
export class MaskOriginCss extends CssProperty {
  /** CSS 声明：`mask-origin:border-box;`。 */
  readonly borderBox: string = 'mask-origin:border-box;';
  /** CSS 声明：`mask-origin:content-box;`。 */
  readonly contentBox: string = 'mask-origin:content-box;';
  /** CSS 声明：`mask-origin:fill-box;`。 */
  readonly fillBox: string = 'mask-origin:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-origin:inherit;`。
   */
  readonly inherit: string = 'mask-origin:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-origin:initial;`。
   */
  readonly initial: string = 'mask-origin:initial;';
  /** CSS 声明：`mask-origin:padding-box;`。 */
  readonly paddingBox: string = 'mask-origin:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-origin:revert;`。
   */
  readonly revert: string = 'mask-origin:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-origin:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-origin:revert-layer;';
  /** CSS 声明：`mask-origin:stroke-box;`。 */
  readonly strokeBox: string = 'mask-origin:stroke-box;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-origin:unset;`。
   */
  readonly unset: string = 'mask-origin:unset;';
  /** CSS 声明：`mask-origin:view-box;`。 */
  readonly viewBox: string = 'mask-origin:view-box;';
  /**
   * 创建 mask-origin 属性作者；普通使用通过 s.maskOrigin 取得共享实例。
   * @example
   * class CustomMaskOriginCss extends MaskOriginCss {}
   */
  constructor() {
    super('mask-origin');
  }
  /**
   * 原样生成 mask-origin 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-origin:value;。
   * @example
   * s.maskOrigin.raw('inherit') // mask-origin:inherit;
   */
  raw(value: Property.MaskOrigin | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskPositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-position:bottom;`。 */
  readonly bottom: Property.MaskPosition | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-position:center;`。 */
  readonly center: Property.MaskPosition | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-position:inherit;`。
   */
  readonly inherit: Property.MaskPosition | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-position:initial;`。
   */
  readonly initial: Property.MaskPosition | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-position:left;`。 */
  readonly left: Property.MaskPosition | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-position:revert;`。
   */
  readonly revert: Property.MaskPosition | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-position:revert-layer;`。
   */
  readonly revertLayer: Property.MaskPosition | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-position:right;`。 */
  readonly right: Property.MaskPosition | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-position:top;`。 */
  readonly top: Property.MaskPosition | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-position:unset;`。
   */
  readonly unset: Property.MaskPosition | CssString = 'unset';
}

/**
 * 设置遮罩图像在定位区域中的位置。（mask-position）
 *
 * CSS 初始值：`0% 0%`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
 */
export class MaskPositionCss extends LengthCssProperty {
  /** CSS 声明：`mask-position:bottom;`。 */
  readonly bottom: string = 'mask-position:bottom;';
  /** CSS 声明：`mask-position:center;`。 */
  readonly center: string = 'mask-position:center;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-position:inherit;`。
   */
  readonly inherit: string = 'mask-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-position:initial;`。
   */
  readonly initial: string = 'mask-position:initial;';
  /** CSS 声明：`mask-position:left;`。 */
  readonly left: string = 'mask-position:left;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-position:revert;`。
   */
  readonly revert: string = 'mask-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-position:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-position:revert-layer;';
  /** CSS 声明：`mask-position:right;`。 */
  readonly right: string = 'mask-position:right;';
  /** CSS 声明：`mask-position:top;`。 */
  readonly top: string = 'mask-position:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-position:unset;`。
   */
  readonly unset: string = 'mask-position:unset;';
  /**
   * 创建 mask-position 属性作者；普通使用通过 s.maskPosition 取得共享实例。
   * @example
   * class CustomMaskPositionCss extends MaskPositionCss {}
   */
  constructor() {
    super('mask-position');
  }
  /**
   * 原样生成 mask-position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-position:value;。
   * @example
   * s.maskPosition.raw('inherit') // mask-position:inherit;
   */
  raw(value: Property.MaskPosition | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maskPosition.calc('var(--value) * 2')
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
   * s.maskPosition.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaskPosition | CssString,
    ...others: (Property.MaskPosition | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maskPosition.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaskPosition | CssString,
    ...others: (Property.MaskPosition | CssString)[]
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
   * s.maskPosition.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaskPosition | CssString,
    preferred: Property.MaskPosition | CssString,
    maximum: Property.MaskPosition | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mask-repeat 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskRepeatKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-repeat:inherit;`。
   */
  readonly inherit: Property.MaskRepeat | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-repeat:initial;`。
   */
  readonly initial: Property.MaskRepeat | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-repeat:no-repeat;`。 */
  readonly noRepeat: Property.MaskRepeat | CssString = 'no-repeat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-repeat:repeat;`。 */
  readonly repeat: Property.MaskRepeat | CssString = 'repeat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-repeat:repeat-x;`。 */
  readonly repeatX: Property.MaskRepeat | CssString = 'repeat-x';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-repeat:repeat-y;`。 */
  readonly repeatY: Property.MaskRepeat | CssString = 'repeat-y';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-repeat:revert;`。
   */
  readonly revert: Property.MaskRepeat | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-repeat:revert-layer;`。
   */
  readonly revertLayer: Property.MaskRepeat | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-repeat:round;`。 */
  readonly round: Property.MaskRepeat | CssString = 'round';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-repeat:space;`。 */
  readonly space: Property.MaskRepeat | CssString = 'space';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-repeat:unset;`。
   */
  readonly unset: Property.MaskRepeat | CssString = 'unset';
}

/**
 * 设置遮罩图像的重复方式。（mask-repeat）
 *
 * CSS 初始值：`repeat`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
 */
export class MaskRepeatCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-repeat:inherit;`。
   */
  readonly inherit: string = 'mask-repeat:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-repeat:initial;`。
   */
  readonly initial: string = 'mask-repeat:initial;';
  /** CSS 声明：`mask-repeat:no-repeat;`。 */
  readonly noRepeat: string = 'mask-repeat:no-repeat;';
  /** CSS 声明：`mask-repeat:repeat;`。 */
  readonly repeat: string = 'mask-repeat:repeat;';
  /** CSS 声明：`mask-repeat:repeat-x;`。 */
  readonly repeatX: string = 'mask-repeat:repeat-x;';
  /** CSS 声明：`mask-repeat:repeat-y;`。 */
  readonly repeatY: string = 'mask-repeat:repeat-y;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-repeat:revert;`。
   */
  readonly revert: string = 'mask-repeat:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-repeat:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-repeat:revert-layer;';
  /** CSS 声明：`mask-repeat:round;`。 */
  readonly round: string = 'mask-repeat:round;';
  /** CSS 声明：`mask-repeat:space;`。 */
  readonly space: string = 'mask-repeat:space;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-repeat:unset;`。
   */
  readonly unset: string = 'mask-repeat:unset;';
  /**
   * 创建 mask-repeat 属性作者；普通使用通过 s.maskRepeat 取得共享实例。
   * @example
   * class CustomMaskRepeatCss extends MaskRepeatCss {}
   */
  constructor() {
    super('mask-repeat');
  }
  /**
   * 原样生成 mask-repeat 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-repeat:value;。
   * @example
   * s.maskRepeat.raw('inherit') // mask-repeat:inherit;
   */
  raw(value: Property.MaskRepeat | CssString): string {
    return this.declaration(value);
  }
}

/**
 * mask-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   *
   * CSS 声明：`mask-size:auto;`。
   */
  readonly auto: Property.MaskSize | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   *
   * CSS 声明：`mask-size:contain;`。
   */
  readonly contain: Property.MaskSize | CssString = 'contain';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   *
   * CSS 声明：`mask-size:cover;`。
   */
  readonly cover: Property.MaskSize | CssString = 'cover';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-size:inherit;`。
   */
  readonly inherit: Property.MaskSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-size:initial;`。
   */
  readonly initial: Property.MaskSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-size:revert;`。
   */
  readonly revert: Property.MaskSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-size:revert-layer;`。
   */
  readonly revertLayer: Property.MaskSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-size:unset;`。
   */
  readonly unset: Property.MaskSize | CssString = 'unset';
}

/**
 * 设置遮罩图像的尺寸。（mask-size）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
 */
export class MaskSizeCss extends LengthCssProperty {
  /**
   * 依据图像内部尺寸、比例及另一维的设置确定尺寸。
   *
   * CSS 声明：`mask-size:auto;`。
   */
  readonly auto: string = 'mask-size:auto;';
  /**
   * 保持图像比例并使整张图像容纳于定位区域，可能留下空白。
   *
   * CSS 声明：`mask-size:contain;`。
   */
  readonly contain: string = 'mask-size:contain;';
  /**
   * 保持图像比例并覆盖整个定位区域，超出部分可能被裁剪。
   *
   * CSS 声明：`mask-size:cover;`。
   */
  readonly cover: string = 'mask-size:cover;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-size:inherit;`。
   */
  readonly inherit: string = 'mask-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-size:initial;`。
   */
  readonly initial: string = 'mask-size:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-size:revert;`。
   */
  readonly revert: string = 'mask-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-size:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-size:unset;`。
   */
  readonly unset: string = 'mask-size:unset;';
  /**
   * 创建 mask-size 属性作者；普通使用通过 s.maskSize 取得共享实例。
   * @example
   * class CustomMaskSizeCss extends MaskSizeCss {}
   */
  constructor() {
    super('mask-size');
  }
  /**
   * 原样生成 mask-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-size:value;。
   * @example
   * s.maskSize.raw('inherit') // mask-size:inherit;
   */
  raw(value: Property.MaskSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maskSize.calc('var(--value) * 2')
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
   * s.maskSize.min('var(--first)', 'var(--second)')
   */
  min(value: Property.MaskSize | CssString, ...others: (Property.MaskSize | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maskSize.max('var(--first)', 'var(--second)')
   */
  max(value: Property.MaskSize | CssString, ...others: (Property.MaskSize | CssString)[]): string {
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
   * s.maskSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaskSize | CssString,
    preferred: Property.MaskSize | CssString,
    maximum: Property.MaskSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mask-type 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaskTypeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-type:alpha;`。 */
  readonly alpha: Property.MaskType | CssString = 'alpha';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-type:inherit;`。
   */
  readonly inherit: Property.MaskType | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-type:initial;`。
   */
  readonly initial: Property.MaskType | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mask-type:luminance;`。 */
  readonly luminance: Property.MaskType | CssString = 'luminance';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-type:revert;`。
   */
  readonly revert: Property.MaskType | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-type:revert-layer;`。
   */
  readonly revertLayer: Property.MaskType | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-type:unset;`。
   */
  readonly unset: Property.MaskType | CssString = 'unset';
}

/**
 * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。（mask-type）
 *
 * CSS 初始值：`luminance`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
 */
export class MaskTypeCss extends CssProperty {
  /** CSS 声明：`mask-type:alpha;`。 */
  readonly alpha: string = 'mask-type:alpha;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mask-type:inherit;`。
   */
  readonly inherit: string = 'mask-type:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mask-type:initial;`。
   */
  readonly initial: string = 'mask-type:initial;';
  /** CSS 声明：`mask-type:luminance;`。 */
  readonly luminance: string = 'mask-type:luminance;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mask-type:revert;`。
   */
  readonly revert: string = 'mask-type:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mask-type:revert-layer;`。
   */
  readonly revertLayer: string = 'mask-type:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mask-type:unset;`。
   */
  readonly unset: string = 'mask-type:unset;';
  /**
   * 创建 mask-type 属性作者；普通使用通过 s.maskType 取得共享实例。
   * @example
   * class CustomMaskTypeCss extends MaskTypeCss {}
   */
  constructor() {
    super('mask-type');
  }
  /**
   * 原样生成 mask-type 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mask-type:value;。
   * @example
   * s.maskType.raw('inherit') // mask-type:inherit;
   */
  raw(value: Property.MaskType | CssString): string {
    return this.declaration(value);
  }
}

/**
 * masonry-auto-flow 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MasonryAutoFlowKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`masonry-auto-flow:definite-first;`。 */
  readonly definiteFirst: Property.MasonryAutoFlow | CssString = 'definite-first';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`masonry-auto-flow:inherit;`。
   */
  readonly inherit: Property.MasonryAutoFlow | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`masonry-auto-flow:initial;`。
   */
  readonly initial: Property.MasonryAutoFlow | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`masonry-auto-flow:next;`。 */
  readonly next: Property.MasonryAutoFlow | CssString = 'next';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`masonry-auto-flow:ordered;`。 */
  readonly ordered: Property.MasonryAutoFlow | CssString = 'ordered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`masonry-auto-flow:pack;`。 */
  readonly pack: Property.MasonryAutoFlow | CssString = 'pack';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`masonry-auto-flow:revert;`。
   */
  readonly revert: Property.MasonryAutoFlow | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`masonry-auto-flow:revert-layer;`。
   */
  readonly revertLayer: Property.MasonryAutoFlow | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`masonry-auto-flow:unset;`。
   */
  readonly unset: Property.MasonryAutoFlow | CssString = 'unset';
}

/**
 * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。（masonry-auto-flow）
 *
 * CSS 初始值：`pack`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
 */
export class MasonryAutoFlowCss extends CssProperty {
  /** CSS 声明：`masonry-auto-flow:definite-first;`。 */
  readonly definiteFirst: string = 'masonry-auto-flow:definite-first;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`masonry-auto-flow:inherit;`。
   */
  readonly inherit: string = 'masonry-auto-flow:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`masonry-auto-flow:initial;`。
   */
  readonly initial: string = 'masonry-auto-flow:initial;';
  /** CSS 声明：`masonry-auto-flow:next;`。 */
  readonly next: string = 'masonry-auto-flow:next;';
  /** CSS 声明：`masonry-auto-flow:ordered;`。 */
  readonly ordered: string = 'masonry-auto-flow:ordered;';
  /** CSS 声明：`masonry-auto-flow:pack;`。 */
  readonly pack: string = 'masonry-auto-flow:pack;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`masonry-auto-flow:revert;`。
   */
  readonly revert: string = 'masonry-auto-flow:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`masonry-auto-flow:revert-layer;`。
   */
  readonly revertLayer: string = 'masonry-auto-flow:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`masonry-auto-flow:unset;`。
   */
  readonly unset: string = 'masonry-auto-flow:unset;';
  /**
   * 创建 masonry-auto-flow 属性作者；普通使用通过 s.masonryAutoFlow 取得共享实例。
   * @example
   * class CustomMasonryAutoFlowCss extends MasonryAutoFlowCss {}
   */
  constructor() {
    super('masonry-auto-flow');
  }
  /**
   * 原样生成 masonry-auto-flow 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 masonry-auto-flow:value;。
   * @example
   * s.masonryAutoFlow.raw('inherit') // masonry-auto-flow:inherit;
   */
  raw(value: Property.MasonryAutoFlow | CssString): string {
    return this.declaration(value);
  }
}

/**
 * math-depth 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MathDepthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`math-depth:auto-add;`。 */
  readonly autoAdd: Property.MathDepth | CssString = 'auto-add';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`math-depth:inherit;`。
   */
  readonly inherit: Property.MathDepth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`math-depth:initial;`。
   */
  readonly initial: Property.MathDepth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`math-depth:revert;`。
   */
  readonly revert: Property.MathDepth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`math-depth:revert-layer;`。
   */
  readonly revertLayer: Property.MathDepth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`math-depth:unset;`。
   */
  readonly unset: Property.MathDepth | CssString = 'unset';
}

/**
 * 设置数学公式的嵌套深度，用于数学字号等排版计算。（math-depth）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
 */
export class MathDepthCss extends CssProperty {
  /** CSS 声明：`math-depth:auto-add;`。 */
  readonly autoAdd: string = 'math-depth:auto-add;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`math-depth:inherit;`。
   */
  readonly inherit: string = 'math-depth:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`math-depth:initial;`。
   */
  readonly initial: string = 'math-depth:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`math-depth:revert;`。
   */
  readonly revert: string = 'math-depth:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`math-depth:revert-layer;`。
   */
  readonly revertLayer: string = 'math-depth:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`math-depth:unset;`。
   */
  readonly unset: string = 'math-depth:unset;';
  /**
   * 创建 math-depth 属性作者；普通使用通过 s.mathDepth 取得共享实例。
   * @example
   * class CustomMathDepthCss extends MathDepthCss {}
   */
  constructor() {
    super('math-depth');
  }
  /**
   * 原样生成 math-depth 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 math-depth:value;。
   * @example
   * s.mathDepth.raw('inherit') // math-depth:inherit;
   */
  raw(value: Property.MathDepth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.mathDepth.calc('var(--value) * 2')
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
   * s.mathDepth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MathDepth | CssString,
    ...others: (Property.MathDepth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.mathDepth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MathDepth | CssString,
    ...others: (Property.MathDepth | CssString)[]
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
   * s.mathDepth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MathDepth | CssString,
    preferred: Property.MathDepth | CssString,
    maximum: Property.MathDepth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * math-shift 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MathShiftKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`math-shift:compact;`。 */
  readonly compact: Property.MathShift | CssString = 'compact';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`math-shift:inherit;`。
   */
  readonly inherit: Property.MathShift | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`math-shift:initial;`。
   */
  readonly initial: Property.MathShift | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`math-shift:normal;`。 */
  readonly normal: Property.MathShift | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`math-shift:revert;`。
   */
  readonly revert: Property.MathShift | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`math-shift:revert-layer;`。
   */
  readonly revertLayer: Property.MathShift | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`math-shift:unset;`。
   */
  readonly unset: Property.MathShift | CssString = 'unset';
}

/**
 * 控制数学上标采用正常还是压缩的垂直偏移。（math-shift）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
 */
export class MathShiftCss extends CssProperty {
  /** CSS 声明：`math-shift:compact;`。 */
  readonly compact: string = 'math-shift:compact;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`math-shift:inherit;`。
   */
  readonly inherit: string = 'math-shift:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`math-shift:initial;`。
   */
  readonly initial: string = 'math-shift:initial;';
  /** CSS 声明：`math-shift:normal;`。 */
  readonly normal: string = 'math-shift:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`math-shift:revert;`。
   */
  readonly revert: string = 'math-shift:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`math-shift:revert-layer;`。
   */
  readonly revertLayer: string = 'math-shift:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`math-shift:unset;`。
   */
  readonly unset: string = 'math-shift:unset;';
  /**
   * 创建 math-shift 属性作者；普通使用通过 s.mathShift 取得共享实例。
   * @example
   * class CustomMathShiftCss extends MathShiftCss {}
   */
  constructor() {
    super('math-shift');
  }
  /**
   * 原样生成 math-shift 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 math-shift:value;。
   * @example
   * s.mathShift.raw('inherit') // math-shift:inherit;
   */
  raw(value: Property.MathShift | CssString): string {
    return this.declaration(value);
  }
}

/**
 * math-style 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MathStyleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`math-style:compact;`。 */
  readonly compact: Property.MathStyle | CssString = 'compact';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`math-style:inherit;`。
   */
  readonly inherit: Property.MathStyle | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`math-style:initial;`。
   */
  readonly initial: Property.MathStyle | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`math-style:normal;`。 */
  readonly normal: Property.MathStyle | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`math-style:revert;`。
   */
  readonly revert: Property.MathStyle | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`math-style:revert-layer;`。
   */
  readonly revertLayer: Property.MathStyle | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`math-style:unset;`。
   */
  readonly unset: Property.MathStyle | CssString = 'unset';
}

/**
 * 设置数学公式采用正常还是紧凑排版。（math-style）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
 */
export class MathStyleCss extends CssProperty {
  /** CSS 声明：`math-style:compact;`。 */
  readonly compact: string = 'math-style:compact;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`math-style:inherit;`。
   */
  readonly inherit: string = 'math-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`math-style:initial;`。
   */
  readonly initial: string = 'math-style:initial;';
  /** CSS 声明：`math-style:normal;`。 */
  readonly normal: string = 'math-style:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`math-style:revert;`。
   */
  readonly revert: string = 'math-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`math-style:revert-layer;`。
   */
  readonly revertLayer: string = 'math-style:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`math-style:unset;`。
   */
  readonly unset: string = 'math-style:unset;';
  /**
   * 创建 math-style 属性作者；普通使用通过 s.mathStyle 取得共享实例。
   * @example
   * class CustomMathStyleCss extends MathStyleCss {}
   */
  constructor() {
    super('math-style');
  }
  /**
   * 原样生成 math-style 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 math-style:value;。
   * @example
   * s.mathStyle.raw('inherit') // math-style:inherit;
   */
  raw(value: Property.MathStyle | CssString): string {
    return this.declaration(value);
  }
}

/**
 * max-block-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaxBlockSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-block-size:fit-content;`。 */
  readonly fitContent: Property.MaxBlockSize | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-block-size:inherit;`。
   */
  readonly inherit: Property.MaxBlockSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-block-size:initial;`。
   */
  readonly initial: Property.MaxBlockSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-block-size:max-content;`。 */
  readonly maxContent: Property.MaxBlockSize | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-block-size:min-content;`。 */
  readonly minContent: Property.MaxBlockSize | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-block-size:none;`。 */
  readonly none: Property.MaxBlockSize | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-block-size:revert;`。
   */
  readonly revert: Property.MaxBlockSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-block-size:revert-layer;`。
   */
  readonly revertLayer: Property.MaxBlockSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-block-size:unset;`。
   */
  readonly unset: Property.MaxBlockSize | CssString = 'unset';
}

/**
 * 限制元素逻辑块轴的最大尺寸。（max-block-size）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
 */
export class MaxBlockSizeCss extends LengthCssProperty {
  /** CSS 声明：`max-block-size:fit-content;`。 */
  readonly fitContent: string = 'max-block-size:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-block-size:inherit;`。
   */
  readonly inherit: string = 'max-block-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-block-size:initial;`。
   */
  readonly initial: string = 'max-block-size:initial;';
  /** CSS 声明：`max-block-size:max-content;`。 */
  readonly maxContent: string = 'max-block-size:max-content;';
  /** CSS 声明：`max-block-size:min-content;`。 */
  readonly minContent: string = 'max-block-size:min-content;';
  /** CSS 声明：`max-block-size:none;`。 */
  readonly none: string = 'max-block-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-block-size:revert;`。
   */
  readonly revert: string = 'max-block-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-block-size:revert-layer;`。
   */
  readonly revertLayer: string = 'max-block-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-block-size:unset;`。
   */
  readonly unset: string = 'max-block-size:unset;';
  /**
   * 创建 max-block-size 属性作者；普通使用通过 s.maxBlockSize 取得共享实例。
   * @example
   * class CustomMaxBlockSizeCss extends MaxBlockSizeCss {}
   */
  constructor() {
    super('max-block-size');
  }
  /**
   * 原样生成 max-block-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 max-block-size:value;。
   * @example
   * s.maxBlockSize.raw('inherit') // max-block-size:inherit;
   */
  raw(value: Property.MaxBlockSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maxBlockSize.calc('var(--value) * 2')
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
   * s.maxBlockSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaxBlockSize | CssString,
    ...others: (Property.MaxBlockSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maxBlockSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaxBlockSize | CssString,
    ...others: (Property.MaxBlockSize | CssString)[]
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
   * s.maxBlockSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaxBlockSize | CssString,
    preferred: Property.MaxBlockSize | CssString,
    maximum: Property.MaxBlockSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * max-height 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaxHeightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-height:fit-content;`。 */
  readonly fitContent: Property.MaxHeight | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-height:inherit;`。
   */
  readonly inherit: Property.MaxHeight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-height:initial;`。
   */
  readonly initial: Property.MaxHeight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-height:intrinsic;`。 */
  readonly intrinsic: Property.MaxHeight | CssString = 'intrinsic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-height:max-content;`。 */
  readonly maxContent: Property.MaxHeight | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-height:min-content;`。 */
  readonly minContent: Property.MaxHeight | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-height:none;`。 */
  readonly none: Property.MaxHeight | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-height:revert;`。
   */
  readonly revert: Property.MaxHeight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-height:revert-layer;`。
   */
  readonly revertLayer: Property.MaxHeight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-height:unset;`。
   */
  readonly unset: Property.MaxHeight | CssString = 'unset';
}

/**
 * 限制元素的最大物理高度。（max-height）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
 */
export class MaxHeightCss extends LengthCssProperty {
  /** CSS 声明：`max-height:fit-content;`。 */
  readonly fitContent: string = 'max-height:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-height:inherit;`。
   */
  readonly inherit: string = 'max-height:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-height:initial;`。
   */
  readonly initial: string = 'max-height:initial;';
  /** CSS 声明：`max-height:intrinsic;`。 */
  readonly intrinsic: string = 'max-height:intrinsic;';
  /** CSS 声明：`max-height:max-content;`。 */
  readonly maxContent: string = 'max-height:max-content;';
  /** CSS 声明：`max-height:min-content;`。 */
  readonly minContent: string = 'max-height:min-content;';
  /** CSS 声明：`max-height:none;`。 */
  readonly none: string = 'max-height:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-height:revert;`。
   */
  readonly revert: string = 'max-height:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-height:revert-layer;`。
   */
  readonly revertLayer: string = 'max-height:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-height:unset;`。
   */
  readonly unset: string = 'max-height:unset;';
  /**
   * 创建 max-height 属性作者；普通使用通过 s.maxHeight 取得共享实例。
   * @example
   * class CustomMaxHeightCss extends MaxHeightCss {}
   */
  constructor() {
    super('max-height');
  }
  /**
   * 原样生成 max-height 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 max-height:value;。
   * @example
   * s.maxHeight.raw('inherit') // max-height:inherit;
   */
  raw(value: Property.MaxHeight | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.maxHeight.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maxHeight.calc('var(--value) * 2')
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
   * s.maxHeight.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaxHeight | CssString,
    ...others: (Property.MaxHeight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maxHeight.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaxHeight | CssString,
    ...others: (Property.MaxHeight | CssString)[]
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
   * s.maxHeight.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaxHeight | CssString,
    preferred: Property.MaxHeight | CssString,
    maximum: Property.MaxHeight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * max-inline-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaxInlineSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-inline-size:fit-content;`。 */
  readonly fitContent: Property.MaxInlineSize | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-inline-size:inherit;`。
   */
  readonly inherit: Property.MaxInlineSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-inline-size:initial;`。
   */
  readonly initial: Property.MaxInlineSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-inline-size:max-content;`。 */
  readonly maxContent: Property.MaxInlineSize | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-inline-size:min-content;`。 */
  readonly minContent: Property.MaxInlineSize | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-inline-size:none;`。 */
  readonly none: Property.MaxInlineSize | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-inline-size:revert;`。
   */
  readonly revert: Property.MaxInlineSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-inline-size:revert-layer;`。
   */
  readonly revertLayer: Property.MaxInlineSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-inline-size:unset;`。
   */
  readonly unset: Property.MaxInlineSize | CssString = 'unset';
}

/**
 * 限制元素逻辑行内轴的最大尺寸。（max-inline-size）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
 */
export class MaxInlineSizeCss extends LengthCssProperty {
  /** CSS 声明：`max-inline-size:fit-content;`。 */
  readonly fitContent: string = 'max-inline-size:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-inline-size:inherit;`。
   */
  readonly inherit: string = 'max-inline-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-inline-size:initial;`。
   */
  readonly initial: string = 'max-inline-size:initial;';
  /** CSS 声明：`max-inline-size:max-content;`。 */
  readonly maxContent: string = 'max-inline-size:max-content;';
  /** CSS 声明：`max-inline-size:min-content;`。 */
  readonly minContent: string = 'max-inline-size:min-content;';
  /** CSS 声明：`max-inline-size:none;`。 */
  readonly none: string = 'max-inline-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-inline-size:revert;`。
   */
  readonly revert: string = 'max-inline-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-inline-size:revert-layer;`。
   */
  readonly revertLayer: string = 'max-inline-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-inline-size:unset;`。
   */
  readonly unset: string = 'max-inline-size:unset;';
  /**
   * 创建 max-inline-size 属性作者；普通使用通过 s.maxInlineSize 取得共享实例。
   * @example
   * class CustomMaxInlineSizeCss extends MaxInlineSizeCss {}
   */
  constructor() {
    super('max-inline-size');
  }
  /**
   * 原样生成 max-inline-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 max-inline-size:value;。
   * @example
   * s.maxInlineSize.raw('inherit') // max-inline-size:inherit;
   */
  raw(value: Property.MaxInlineSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maxInlineSize.calc('var(--value) * 2')
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
   * s.maxInlineSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MaxInlineSize | CssString,
    ...others: (Property.MaxInlineSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maxInlineSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MaxInlineSize | CssString,
    ...others: (Property.MaxInlineSize | CssString)[]
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
   * s.maxInlineSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaxInlineSize | CssString,
    preferred: Property.MaxInlineSize | CssString,
    maximum: Property.MaxInlineSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * max-lines 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaxLinesKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-lines:inherit;`。
   */
  readonly inherit: Property.MaxLines | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-lines:initial;`。
   */
  readonly initial: Property.MaxLines | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-lines:none;`。 */
  readonly none: Property.MaxLines | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-lines:revert;`。
   */
  readonly revert: Property.MaxLines | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-lines:revert-layer;`。
   */
  readonly revertLayer: Property.MaxLines | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-lines:unset;`。
   */
  readonly unset: Property.MaxLines | CssString = 'unset';
}

/**
 * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。（max-lines）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
 */
export class MaxLinesCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-lines:inherit;`。
   */
  readonly inherit: string = 'max-lines:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-lines:initial;`。
   */
  readonly initial: string = 'max-lines:initial;';
  /** CSS 声明：`max-lines:none;`。 */
  readonly none: string = 'max-lines:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-lines:revert;`。
   */
  readonly revert: string = 'max-lines:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-lines:revert-layer;`。
   */
  readonly revertLayer: string = 'max-lines:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-lines:unset;`。
   */
  readonly unset: string = 'max-lines:unset;';
  /**
   * 创建 max-lines 属性作者；普通使用通过 s.maxLines 取得共享实例。
   * @example
   * class CustomMaxLinesCss extends MaxLinesCss {}
   */
  constructor() {
    super('max-lines');
  }
  /**
   * 原样生成 max-lines 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 max-lines:value;。
   * @example
   * s.maxLines.raw('inherit') // max-lines:inherit;
   */
  raw(value: Property.MaxLines | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maxLines.calc('var(--value) * 2')
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
   * s.maxLines.min('var(--first)', 'var(--second)')
   */
  min(value: Property.MaxLines | CssString, ...others: (Property.MaxLines | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maxLines.max('var(--first)', 'var(--second)')
   */
  max(value: Property.MaxLines | CssString, ...others: (Property.MaxLines | CssString)[]): string {
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
   * s.maxLines.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaxLines | CssString,
    preferred: Property.MaxLines | CssString,
    maximum: Property.MaxLines | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * max-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MaxWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-width:fit-content;`。 */
  readonly fitContent: Property.MaxWidth | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-width:inherit;`。
   */
  readonly inherit: Property.MaxWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-width:initial;`。
   */
  readonly initial: Property.MaxWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-width:intrinsic;`。 */
  readonly intrinsic: Property.MaxWidth | CssString = 'intrinsic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-width:max-content;`。 */
  readonly maxContent: Property.MaxWidth | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-width:min-content;`。 */
  readonly minContent: Property.MaxWidth | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`max-width:none;`。 */
  readonly none: Property.MaxWidth | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-width:revert;`。
   */
  readonly revert: Property.MaxWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-width:revert-layer;`。
   */
  readonly revertLayer: Property.MaxWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-width:unset;`。
   */
  readonly unset: Property.MaxWidth | CssString = 'unset';
}

/**
 * 限制元素的最大物理宽度。（max-width）
 *
 * 限制最终宽度，不会单独要求元素达到该宽度。最小尺寸约束可能优先于较小的最大尺寸。
 *
 * 适用场景：限制正文行长、弹窗宽度或响应式内容区。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @example
 * css(s.width.percent(100), s.maxWidth.rem(48))
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
 */
export class MaxWidthCss extends LengthCssProperty {
  /** CSS 声明：`max-width:fit-content;`。 */
  readonly fitContent: string = 'max-width:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`max-width:inherit;`。
   */
  readonly inherit: string = 'max-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`max-width:initial;`。
   */
  readonly initial: string = 'max-width:initial;';
  /** CSS 声明：`max-width:intrinsic;`。 */
  readonly intrinsic: string = 'max-width:intrinsic;';
  /** CSS 声明：`max-width:max-content;`。 */
  readonly maxContent: string = 'max-width:max-content;';
  /** CSS 声明：`max-width:min-content;`。 */
  readonly minContent: string = 'max-width:min-content;';
  /** CSS 声明：`max-width:none;`。 */
  readonly none: string = 'max-width:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`max-width:revert;`。
   */
  readonly revert: string = 'max-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`max-width:revert-layer;`。
   */
  readonly revertLayer: string = 'max-width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`max-width:unset;`。
   */
  readonly unset: string = 'max-width:unset;';
  /**
   * 创建 max-width 属性作者；普通使用通过 s.maxWidth 取得共享实例。
   * @example
   * class CustomMaxWidthCss extends MaxWidthCss {}
   */
  constructor() {
    super('max-width');
  }
  /**
   * 原样生成 max-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 max-width:value;。
   * @example
   * s.maxWidth.raw('inherit') // max-width:inherit;
   */
  raw(value: Property.MaxWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.maxWidth.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.maxWidth.calc('var(--value) * 2')
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
   * s.maxWidth.min('var(--first)', 'var(--second)')
   */
  min(value: Property.MaxWidth | CssString, ...others: (Property.MaxWidth | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.maxWidth.max('var(--first)', 'var(--second)')
   */
  max(value: Property.MaxWidth | CssString, ...others: (Property.MaxWidth | CssString)[]): string {
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
   * s.maxWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MaxWidth | CssString,
    preferred: Property.MaxWidth | CssString,
    maximum: Property.MaxWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * min-block-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MinBlockSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-block-size:auto;`。 */
  readonly auto: Property.MinBlockSize | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-block-size:fit-content;`。 */
  readonly fitContent: Property.MinBlockSize | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-block-size:inherit;`。
   */
  readonly inherit: Property.MinBlockSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-block-size:initial;`。
   */
  readonly initial: Property.MinBlockSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-block-size:max-content;`。 */
  readonly maxContent: Property.MinBlockSize | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-block-size:min-content;`。 */
  readonly minContent: Property.MinBlockSize | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-block-size:revert;`。
   */
  readonly revert: Property.MinBlockSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-block-size:revert-layer;`。
   */
  readonly revertLayer: Property.MinBlockSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-block-size:unset;`。
   */
  readonly unset: Property.MinBlockSize | CssString = 'unset';
}

/**
 * 设置元素逻辑块轴的最小尺寸。（min-block-size）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
 */
export class MinBlockSizeCss extends LengthCssProperty {
  /** CSS 声明：`min-block-size:auto;`。 */
  readonly auto: string = 'min-block-size:auto;';
  /** CSS 声明：`min-block-size:fit-content;`。 */
  readonly fitContent: string = 'min-block-size:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-block-size:inherit;`。
   */
  readonly inherit: string = 'min-block-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-block-size:initial;`。
   */
  readonly initial: string = 'min-block-size:initial;';
  /** CSS 声明：`min-block-size:max-content;`。 */
  readonly maxContent: string = 'min-block-size:max-content;';
  /** CSS 声明：`min-block-size:min-content;`。 */
  readonly minContent: string = 'min-block-size:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-block-size:revert;`。
   */
  readonly revert: string = 'min-block-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-block-size:revert-layer;`。
   */
  readonly revertLayer: string = 'min-block-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-block-size:unset;`。
   */
  readonly unset: string = 'min-block-size:unset;';
  /**
   * 创建 min-block-size 属性作者；普通使用通过 s.minBlockSize 取得共享实例。
   * @example
   * class CustomMinBlockSizeCss extends MinBlockSizeCss {}
   */
  constructor() {
    super('min-block-size');
  }
  /**
   * 原样生成 min-block-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 min-block-size:value;。
   * @example
   * s.minBlockSize.raw('inherit') // min-block-size:inherit;
   */
  raw(value: Property.MinBlockSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.minBlockSize.calc('var(--value) * 2')
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
   * s.minBlockSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MinBlockSize | CssString,
    ...others: (Property.MinBlockSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.minBlockSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MinBlockSize | CssString,
    ...others: (Property.MinBlockSize | CssString)[]
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
   * s.minBlockSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MinBlockSize | CssString,
    preferred: Property.MinBlockSize | CssString,
    maximum: Property.MinBlockSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * min-height 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MinHeightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-height:auto;`。 */
  readonly auto: Property.MinHeight | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-height:fit-content;`。 */
  readonly fitContent: Property.MinHeight | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-height:inherit;`。
   */
  readonly inherit: Property.MinHeight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-height:initial;`。
   */
  readonly initial: Property.MinHeight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-height:intrinsic;`。 */
  readonly intrinsic: Property.MinHeight | CssString = 'intrinsic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-height:max-content;`。 */
  readonly maxContent: Property.MinHeight | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-height:min-content;`。 */
  readonly minContent: Property.MinHeight | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-height:revert;`。
   */
  readonly revert: Property.MinHeight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-height:revert-layer;`。
   */
  readonly revertLayer: Property.MinHeight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-height:unset;`。
   */
  readonly unset: Property.MinHeight | CssString = 'unset';
}

/**
 * 设置元素的最小物理高度。（min-height）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
 */
export class MinHeightCss extends LengthCssProperty {
  /** CSS 声明：`min-height:auto;`。 */
  readonly auto: string = 'min-height:auto;';
  /** CSS 声明：`min-height:fit-content;`。 */
  readonly fitContent: string = 'min-height:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-height:inherit;`。
   */
  readonly inherit: string = 'min-height:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-height:initial;`。
   */
  readonly initial: string = 'min-height:initial;';
  /** CSS 声明：`min-height:intrinsic;`。 */
  readonly intrinsic: string = 'min-height:intrinsic;';
  /** CSS 声明：`min-height:max-content;`。 */
  readonly maxContent: string = 'min-height:max-content;';
  /** CSS 声明：`min-height:min-content;`。 */
  readonly minContent: string = 'min-height:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-height:revert;`。
   */
  readonly revert: string = 'min-height:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-height:revert-layer;`。
   */
  readonly revertLayer: string = 'min-height:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-height:unset;`。
   */
  readonly unset: string = 'min-height:unset;';
  /**
   * 创建 min-height 属性作者；普通使用通过 s.minHeight 取得共享实例。
   * @example
   * class CustomMinHeightCss extends MinHeightCss {}
   */
  constructor() {
    super('min-height');
  }
  /**
   * 原样生成 min-height 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 min-height:value;。
   * @example
   * s.minHeight.raw('inherit') // min-height:inherit;
   */
  raw(value: Property.MinHeight | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.minHeight.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.minHeight.calc('var(--value) * 2')
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
   * s.minHeight.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MinHeight | CssString,
    ...others: (Property.MinHeight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.minHeight.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MinHeight | CssString,
    ...others: (Property.MinHeight | CssString)[]
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
   * s.minHeight.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MinHeight | CssString,
    preferred: Property.MinHeight | CssString,
    maximum: Property.MinHeight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * min-inline-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MinInlineSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-inline-size:auto;`。 */
  readonly auto: Property.MinInlineSize | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-inline-size:fit-content;`。 */
  readonly fitContent: Property.MinInlineSize | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-inline-size:inherit;`。
   */
  readonly inherit: Property.MinInlineSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-inline-size:initial;`。
   */
  readonly initial: Property.MinInlineSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-inline-size:max-content;`。 */
  readonly maxContent: Property.MinInlineSize | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-inline-size:min-content;`。 */
  readonly minContent: Property.MinInlineSize | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-inline-size:revert;`。
   */
  readonly revert: Property.MinInlineSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-inline-size:revert-layer;`。
   */
  readonly revertLayer: Property.MinInlineSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-inline-size:unset;`。
   */
  readonly unset: Property.MinInlineSize | CssString = 'unset';
}

/**
 * 设置元素逻辑行内轴的最小尺寸。（min-inline-size）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
 */
export class MinInlineSizeCss extends LengthCssProperty {
  /** CSS 声明：`min-inline-size:auto;`。 */
  readonly auto: string = 'min-inline-size:auto;';
  /** CSS 声明：`min-inline-size:fit-content;`。 */
  readonly fitContent: string = 'min-inline-size:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-inline-size:inherit;`。
   */
  readonly inherit: string = 'min-inline-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-inline-size:initial;`。
   */
  readonly initial: string = 'min-inline-size:initial;';
  /** CSS 声明：`min-inline-size:max-content;`。 */
  readonly maxContent: string = 'min-inline-size:max-content;';
  /** CSS 声明：`min-inline-size:min-content;`。 */
  readonly minContent: string = 'min-inline-size:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-inline-size:revert;`。
   */
  readonly revert: string = 'min-inline-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-inline-size:revert-layer;`。
   */
  readonly revertLayer: string = 'min-inline-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-inline-size:unset;`。
   */
  readonly unset: string = 'min-inline-size:unset;';
  /**
   * 创建 min-inline-size 属性作者；普通使用通过 s.minInlineSize 取得共享实例。
   * @example
   * class CustomMinInlineSizeCss extends MinInlineSizeCss {}
   */
  constructor() {
    super('min-inline-size');
  }
  /**
   * 原样生成 min-inline-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 min-inline-size:value;。
   * @example
   * s.minInlineSize.raw('inherit') // min-inline-size:inherit;
   */
  raw(value: Property.MinInlineSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.minInlineSize.calc('var(--value) * 2')
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
   * s.minInlineSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.MinInlineSize | CssString,
    ...others: (Property.MinInlineSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.minInlineSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.MinInlineSize | CssString,
    ...others: (Property.MinInlineSize | CssString)[]
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
   * s.minInlineSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MinInlineSize | CssString,
    preferred: Property.MinInlineSize | CssString,
    maximum: Property.MinInlineSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * min-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MinWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 自动最小尺寸由布局模式决定；Flex/Grid 项目可能受内容最小宽度限制。
   *
   * CSS 声明：`min-width:auto;`。
   */
  readonly auto: Property.MinWidth | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-width:fit-content;`。 */
  readonly fitContent: Property.MinWidth | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-width:inherit;`。
   */
  readonly inherit: Property.MinWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-width:initial;`。
   */
  readonly initial: Property.MinWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-width:intrinsic;`。 */
  readonly intrinsic: Property.MinWidth | CssString = 'intrinsic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-width:max-content;`。 */
  readonly maxContent: Property.MinWidth | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-width:min-content;`。 */
  readonly minContent: Property.MinWidth | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`min-width:min-intrinsic;`。 */
  readonly minIntrinsic: Property.MinWidth | CssString = 'min-intrinsic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-width:revert;`。
   */
  readonly revert: Property.MinWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-width:revert-layer;`。
   */
  readonly revertLayer: Property.MinWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-width:unset;`。
   */
  readonly unset: Property.MinWidth | CssString = 'unset';
}

/**
 * 设置元素的最小物理宽度。（min-width）
 *
 * Flex/Grid 项目的 auto 最小尺寸可能由内容决定。需要允许其收缩时，可以按布局目的设置 min-width:0。
 *
 * 适用场景：给控件设置最小可用宽度，或用 0 允许 Flex/Grid 子项突破自动内容最小宽度。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * s.minWidth.px(0)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
 */
export class MinWidthCss extends LengthCssProperty {
  /**
   * 自动最小尺寸由布局模式决定；Flex/Grid 项目可能受内容最小宽度限制。
   *
   * CSS 声明：`min-width:auto;`。
   */
  readonly auto: string = 'min-width:auto;';
  /** CSS 声明：`min-width:fit-content;`。 */
  readonly fitContent: string = 'min-width:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`min-width:inherit;`。
   */
  readonly inherit: string = 'min-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`min-width:initial;`。
   */
  readonly initial: string = 'min-width:initial;';
  /** CSS 声明：`min-width:intrinsic;`。 */
  readonly intrinsic: string = 'min-width:intrinsic;';
  /** CSS 声明：`min-width:max-content;`。 */
  readonly maxContent: string = 'min-width:max-content;';
  /** CSS 声明：`min-width:min-content;`。 */
  readonly minContent: string = 'min-width:min-content;';
  /** CSS 声明：`min-width:min-intrinsic;`。 */
  readonly minIntrinsic: string = 'min-width:min-intrinsic;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`min-width:revert;`。
   */
  readonly revert: string = 'min-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`min-width:revert-layer;`。
   */
  readonly revertLayer: string = 'min-width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`min-width:unset;`。
   */
  readonly unset: string = 'min-width:unset;';
  /**
   * 创建 min-width 属性作者；普通使用通过 s.minWidth 取得共享实例。
   * @example
   * class CustomMinWidthCss extends MinWidthCss {}
   */
  constructor() {
    super('min-width');
  }
  /**
   * 原样生成 min-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 min-width:value;。
   * @example
   * s.minWidth.raw('inherit') // min-width:inherit;
   */
  raw(value: Property.MinWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.minWidth.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.minWidth.calc('var(--value) * 2')
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
   * s.minWidth.min('var(--first)', 'var(--second)')
   */
  min(value: Property.MinWidth | CssString, ...others: (Property.MinWidth | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.minWidth.max('var(--first)', 'var(--second)')
   */
  max(value: Property.MinWidth | CssString, ...others: (Property.MinWidth | CssString)[]): string {
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
   * s.minWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.MinWidth | CssString,
    preferred: Property.MinWidth | CssString,
    maximum: Property.MinWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * mix-blend-mode 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MixBlendModeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:color;`。 */
  readonly color: Property.MixBlendMode | CssString = 'color';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:color-burn;`。 */
  readonly colorBurn: Property.MixBlendMode | CssString = 'color-burn';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:color-dodge;`。 */
  readonly colorDodge: Property.MixBlendMode | CssString = 'color-dodge';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:darken;`。 */
  readonly darken: Property.MixBlendMode | CssString = 'darken';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:difference;`。 */
  readonly difference: Property.MixBlendMode | CssString = 'difference';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:exclusion;`。 */
  readonly exclusion: Property.MixBlendMode | CssString = 'exclusion';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:hard-light;`。 */
  readonly hardLight: Property.MixBlendMode | CssString = 'hard-light';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:hue;`。 */
  readonly hue: Property.MixBlendMode | CssString = 'hue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mix-blend-mode:inherit;`。
   */
  readonly inherit: Property.MixBlendMode | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mix-blend-mode:initial;`。
   */
  readonly initial: Property.MixBlendMode | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:lighten;`。 */
  readonly lighten: Property.MixBlendMode | CssString = 'lighten';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:luminosity;`。 */
  readonly luminosity: Property.MixBlendMode | CssString = 'luminosity';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:multiply;`。 */
  readonly multiply: Property.MixBlendMode | CssString = 'multiply';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:normal;`。 */
  readonly normal: Property.MixBlendMode | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:overlay;`。 */
  readonly overlay: Property.MixBlendMode | CssString = 'overlay';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:plus-darker;`。 */
  readonly plusDarker: Property.MixBlendMode | CssString = 'plus-darker';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:plus-lighter;`。 */
  readonly plusLighter: Property.MixBlendMode | CssString = 'plus-lighter';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mix-blend-mode:revert;`。
   */
  readonly revert: Property.MixBlendMode | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mix-blend-mode:revert-layer;`。
   */
  readonly revertLayer: Property.MixBlendMode | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:saturation;`。 */
  readonly saturation: Property.MixBlendMode | CssString = 'saturation';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:screen;`。 */
  readonly screen: Property.MixBlendMode | CssString = 'screen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`mix-blend-mode:soft-light;`。 */
  readonly softLight: Property.MixBlendMode | CssString = 'soft-light';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mix-blend-mode:unset;`。
   */
  readonly unset: Property.MixBlendMode | CssString = 'unset';
}

/**
 * 设置元素整体与其背后内容的颜色混合方式。（mix-blend-mode）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
 */
export class MixBlendModeCss extends CssProperty {
  /** CSS 声明：`mix-blend-mode:color;`。 */
  readonly color: string = 'mix-blend-mode:color;';
  /** CSS 声明：`mix-blend-mode:color-burn;`。 */
  readonly colorBurn: string = 'mix-blend-mode:color-burn;';
  /** CSS 声明：`mix-blend-mode:color-dodge;`。 */
  readonly colorDodge: string = 'mix-blend-mode:color-dodge;';
  /** CSS 声明：`mix-blend-mode:darken;`。 */
  readonly darken: string = 'mix-blend-mode:darken;';
  /** CSS 声明：`mix-blend-mode:difference;`。 */
  readonly difference: string = 'mix-blend-mode:difference;';
  /** CSS 声明：`mix-blend-mode:exclusion;`。 */
  readonly exclusion: string = 'mix-blend-mode:exclusion;';
  /** CSS 声明：`mix-blend-mode:hard-light;`。 */
  readonly hardLight: string = 'mix-blend-mode:hard-light;';
  /** CSS 声明：`mix-blend-mode:hue;`。 */
  readonly hue: string = 'mix-blend-mode:hue;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`mix-blend-mode:inherit;`。
   */
  readonly inherit: string = 'mix-blend-mode:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`mix-blend-mode:initial;`。
   */
  readonly initial: string = 'mix-blend-mode:initial;';
  /** CSS 声明：`mix-blend-mode:lighten;`。 */
  readonly lighten: string = 'mix-blend-mode:lighten;';
  /** CSS 声明：`mix-blend-mode:luminosity;`。 */
  readonly luminosity: string = 'mix-blend-mode:luminosity;';
  /** CSS 声明：`mix-blend-mode:multiply;`。 */
  readonly multiply: string = 'mix-blend-mode:multiply;';
  /** CSS 声明：`mix-blend-mode:normal;`。 */
  readonly normal: string = 'mix-blend-mode:normal;';
  /** CSS 声明：`mix-blend-mode:overlay;`。 */
  readonly overlay: string = 'mix-blend-mode:overlay;';
  /** CSS 声明：`mix-blend-mode:plus-darker;`。 */
  readonly plusDarker: string = 'mix-blend-mode:plus-darker;';
  /** CSS 声明：`mix-blend-mode:plus-lighter;`。 */
  readonly plusLighter: string = 'mix-blend-mode:plus-lighter;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`mix-blend-mode:revert;`。
   */
  readonly revert: string = 'mix-blend-mode:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`mix-blend-mode:revert-layer;`。
   */
  readonly revertLayer: string = 'mix-blend-mode:revert-layer;';
  /** CSS 声明：`mix-blend-mode:saturation;`。 */
  readonly saturation: string = 'mix-blend-mode:saturation;';
  /** CSS 声明：`mix-blend-mode:screen;`。 */
  readonly screen: string = 'mix-blend-mode:screen;';
  /** CSS 声明：`mix-blend-mode:soft-light;`。 */
  readonly softLight: string = 'mix-blend-mode:soft-light;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`mix-blend-mode:unset;`。
   */
  readonly unset: string = 'mix-blend-mode:unset;';
  /**
   * 创建 mix-blend-mode 属性作者；普通使用通过 s.mixBlendMode 取得共享实例。
   * @example
   * class CustomMixBlendModeCss extends MixBlendModeCss {}
   */
  constructor() {
    super('mix-blend-mode');
  }
  /**
   * 原样生成 mix-blend-mode 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 mix-blend-mode:value;。
   * @example
   * s.mixBlendMode.raw('inherit') // mix-blend-mode:inherit;
   */
  raw(value: Property.MixBlendMode | CssString): string {
    return this.declaration(value);
  }
}

/**
 * motion 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MotionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:auto;`。 */
  readonly auto: Property.Offset | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:border-box;`。 */
  readonly borderBox: Property.Offset | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:bottom;`。 */
  readonly bottom: Property.Offset | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:center;`。 */
  readonly center: Property.Offset | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:content-box;`。 */
  readonly contentBox: Property.Offset | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:fill-box;`。 */
  readonly fillBox: Property.Offset | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion:inherit;`。
   */
  readonly inherit: Property.Offset | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion:initial;`。
   */
  readonly initial: Property.Offset | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:left;`。 */
  readonly left: Property.Offset | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:none;`。 */
  readonly none: Property.Offset | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:normal;`。 */
  readonly normal: Property.Offset | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:padding-box;`。 */
  readonly paddingBox: Property.Offset | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion:revert;`。
   */
  readonly revert: Property.Offset | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion:revert-layer;`。
   */
  readonly revertLayer: Property.Offset | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:right;`。 */
  readonly right: Property.Offset | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:stroke-box;`。 */
  readonly strokeBox: Property.Offset | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:top;`。 */
  readonly top: Property.Offset | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion:unset;`。
   */
  readonly unset: Property.Offset | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion:view-box;`。 */
  readonly viewBox: Property.Offset | CssString = 'view-box';
}

/**
 * 设置运动路径的旧式简写；对应现代 offset 属性族。（motion）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
 */
export class MotionCss extends LengthCssProperty {
  /** CSS 声明：`motion:auto;`。 */
  readonly auto: string = 'motion:auto;';
  /** CSS 声明：`motion:border-box;`。 */
  readonly borderBox: string = 'motion:border-box;';
  /** CSS 声明：`motion:bottom;`。 */
  readonly bottom: string = 'motion:bottom;';
  /** CSS 声明：`motion:center;`。 */
  readonly center: string = 'motion:center;';
  /** CSS 声明：`motion:content-box;`。 */
  readonly contentBox: string = 'motion:content-box;';
  /** CSS 声明：`motion:fill-box;`。 */
  readonly fillBox: string = 'motion:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion:inherit;`。
   */
  readonly inherit: string = 'motion:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion:initial;`。
   */
  readonly initial: string = 'motion:initial;';
  /** CSS 声明：`motion:left;`。 */
  readonly left: string = 'motion:left;';
  /** CSS 声明：`motion:none;`。 */
  readonly none: string = 'motion:none;';
  /** CSS 声明：`motion:normal;`。 */
  readonly normal: string = 'motion:normal;';
  /** CSS 声明：`motion:padding-box;`。 */
  readonly paddingBox: string = 'motion:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion:revert;`。
   */
  readonly revert: string = 'motion:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion:revert-layer;`。
   */
  readonly revertLayer: string = 'motion:revert-layer;';
  /** CSS 声明：`motion:right;`。 */
  readonly right: string = 'motion:right;';
  /** CSS 声明：`motion:stroke-box;`。 */
  readonly strokeBox: string = 'motion:stroke-box;';
  /** CSS 声明：`motion:top;`。 */
  readonly top: string = 'motion:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion:unset;`。
   */
  readonly unset: string = 'motion:unset;';
  /** CSS 声明：`motion:view-box;`。 */
  readonly viewBox: string = 'motion:view-box;';
  /**
   * 创建 motion 属性作者；普通使用通过 s.motion 取得共享实例。
   * @example
   * class CustomMotionCss extends MotionCss {}
   */
  constructor() {
    super('motion');
  }
  /**
   * 原样生成 motion 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 motion:value;。
   * @example
   * s.motion.raw('inherit') // motion:inherit;
   */
  raw(value: Property.Offset | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.motion.calc('var(--value) * 2')
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
   * s.motion.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Offset | CssString, ...others: (Property.Offset | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.motion.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Offset | CssString, ...others: (Property.Offset | CssString)[]): string {
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
   * s.motion.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Offset | CssString,
    preferred: Property.Offset | CssString,
    maximum: Property.Offset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * motion-distance 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MotionDistanceKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion-distance:inherit;`。
   */
  readonly inherit: Property.OffsetDistance | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion-distance:initial;`。
   */
  readonly initial: Property.OffsetDistance | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion-distance:revert;`。
   */
  readonly revert: Property.OffsetDistance | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion-distance:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetDistance | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion-distance:unset;`。
   */
  readonly unset: Property.OffsetDistance | CssString = 'unset';
}

/**
 * 设置沿运动路径行进距离的旧属性；对应 offset-distance。（motion-distance）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
 */
export class MotionDistanceCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion-distance:inherit;`。
   */
  readonly inherit: string = 'motion-distance:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion-distance:initial;`。
   */
  readonly initial: string = 'motion-distance:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion-distance:revert;`。
   */
  readonly revert: string = 'motion-distance:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion-distance:revert-layer;`。
   */
  readonly revertLayer: string = 'motion-distance:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion-distance:unset;`。
   */
  readonly unset: string = 'motion-distance:unset;';
  /**
   * 创建 motion-distance 属性作者；普通使用通过 s.motionDistance 取得共享实例。
   * @example
   * class CustomMotionDistanceCss extends MotionDistanceCss {}
   */
  constructor() {
    super('motion-distance');
  }
  /**
   * 原样生成 motion-distance 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 motion-distance:value;。
   * @example
   * s.motionDistance.raw('inherit') // motion-distance:inherit;
   */
  raw(value: Property.OffsetDistance | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.motionDistance.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.motionDistance.calc('var(--value) * 2')
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
   * s.motionDistance.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OffsetDistance | CssString,
    ...others: (Property.OffsetDistance | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.motionDistance.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OffsetDistance | CssString,
    ...others: (Property.OffsetDistance | CssString)[]
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
   * s.motionDistance.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OffsetDistance | CssString,
    preferred: Property.OffsetDistance | CssString,
    maximum: Property.OffsetDistance | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * motion-path 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MotionPathKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-path:border-box;`。 */
  readonly borderBox: Property.OffsetPath | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-path:content-box;`。 */
  readonly contentBox: Property.OffsetPath | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-path:fill-box;`。 */
  readonly fillBox: Property.OffsetPath | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion-path:inherit;`。
   */
  readonly inherit: Property.OffsetPath | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion-path:initial;`。
   */
  readonly initial: Property.OffsetPath | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-path:none;`。 */
  readonly none: Property.OffsetPath | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-path:padding-box;`。 */
  readonly paddingBox: Property.OffsetPath | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion-path:revert;`。
   */
  readonly revert: Property.OffsetPath | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion-path:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetPath | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-path:stroke-box;`。 */
  readonly strokeBox: Property.OffsetPath | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion-path:unset;`。
   */
  readonly unset: Property.OffsetPath | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-path:view-box;`。 */
  readonly viewBox: Property.OffsetPath | CssString = 'view-box';
}

/**
 * 设置运动路径的旧属性；对应 offset-path。（motion-path）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
 */
export class MotionPathCss extends CssProperty {
  /** CSS 声明：`motion-path:border-box;`。 */
  readonly borderBox: string = 'motion-path:border-box;';
  /** CSS 声明：`motion-path:content-box;`。 */
  readonly contentBox: string = 'motion-path:content-box;';
  /** CSS 声明：`motion-path:fill-box;`。 */
  readonly fillBox: string = 'motion-path:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion-path:inherit;`。
   */
  readonly inherit: string = 'motion-path:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion-path:initial;`。
   */
  readonly initial: string = 'motion-path:initial;';
  /** CSS 声明：`motion-path:none;`。 */
  readonly none: string = 'motion-path:none;';
  /** CSS 声明：`motion-path:padding-box;`。 */
  readonly paddingBox: string = 'motion-path:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion-path:revert;`。
   */
  readonly revert: string = 'motion-path:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion-path:revert-layer;`。
   */
  readonly revertLayer: string = 'motion-path:revert-layer;';
  /** CSS 声明：`motion-path:stroke-box;`。 */
  readonly strokeBox: string = 'motion-path:stroke-box;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion-path:unset;`。
   */
  readonly unset: string = 'motion-path:unset;';
  /** CSS 声明：`motion-path:view-box;`。 */
  readonly viewBox: string = 'motion-path:view-box;';
  /**
   * 创建 motion-path 属性作者；普通使用通过 s.motionPath 取得共享实例。
   * @example
   * class CustomMotionPathCss extends MotionPathCss {}
   */
  constructor() {
    super('motion-path');
  }
  /**
   * 原样生成 motion-path 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 motion-path:value;。
   * @example
   * s.motionPath.raw('inherit') // motion-path:inherit;
   */
  raw(value: Property.OffsetPath | CssString): string {
    return this.declaration(value);
  }
}

/**
 * motion-rotation 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class MotionRotationKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-rotation:auto;`。 */
  readonly auto: Property.OffsetRotate | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion-rotation:inherit;`。
   */
  readonly inherit: Property.OffsetRotate | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion-rotation:initial;`。
   */
  readonly initial: Property.OffsetRotate | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`motion-rotation:reverse;`。 */
  readonly reverse: Property.OffsetRotate | CssString = 'reverse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion-rotation:revert;`。
   */
  readonly revert: Property.OffsetRotate | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion-rotation:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetRotate | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion-rotation:unset;`。
   */
  readonly unset: Property.OffsetRotate | CssString = 'unset';
}

/**
 * 设置运动路径旋转方式的旧属性；对应 offset-rotate。（motion-rotation）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class MotionRotationCss extends CssProperty {
  /** CSS 声明：`motion-rotation:auto;`。 */
  readonly auto: string = 'motion-rotation:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`motion-rotation:inherit;`。
   */
  readonly inherit: string = 'motion-rotation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`motion-rotation:initial;`。
   */
  readonly initial: string = 'motion-rotation:initial;';
  /** CSS 声明：`motion-rotation:reverse;`。 */
  readonly reverse: string = 'motion-rotation:reverse;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`motion-rotation:revert;`。
   */
  readonly revert: string = 'motion-rotation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`motion-rotation:revert-layer;`。
   */
  readonly revertLayer: string = 'motion-rotation:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`motion-rotation:unset;`。
   */
  readonly unset: string = 'motion-rotation:unset;';
  /**
   * 创建 motion-rotation 属性作者；普通使用通过 s.motionRotation 取得共享实例。
   * @example
   * class CustomMotionRotationCss extends MotionRotationCss {}
   */
  constructor() {
    super('motion-rotation');
  }
  /**
   * 原样生成 motion-rotation 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 motion-rotation:value;。
   * @example
   * s.motionRotation.raw('inherit') // motion-rotation:inherit;
   */
  raw(value: Property.OffsetRotate | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 deg 单位生成完整属性声明。角度，360deg 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 deg。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.motionRotation.deg(1)
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
   * s.motionRotation.grad(1)
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
   * s.motionRotation.rad(1)
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
   * s.motionRotation.turn(1)
   */
  turn(value: number): string {
    return this.declaration(`${value}turn`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.motionRotation.calc('var(--value) * 2')
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
   * s.motionRotation.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OffsetRotate | CssString,
    ...others: (Property.OffsetRotate | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.motionRotation.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OffsetRotate | CssString,
    ...others: (Property.OffsetRotate | CssString)[]
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
   * s.motionRotation.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OffsetRotate | CssString,
    preferred: Property.OffsetRotate | CssString,
    maximum: Property.OffsetRotate | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * object-fit 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ObjectFitKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保留宽高比并完整放入内容盒，可能留下空白。
   *
   * 区别：cover 优先填满盒子并可能裁剪；contain 优先保留完整内容。
   *
   * 适用场景：希望完整显示的商品图或图像预览。
   *
   * CSS 声明：`object-fit:contain;`。
   * @example
   * css(s.width.rem(20), s.height.rem(12), s.objectFit.contain)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  readonly contain: Property.ObjectFit | CssString = 'contain';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保留宽高比并填满内容盒，可能裁掉部分图像。
   *
   * 区别：contain 保证完整图像可见但可能留白；fill 可能改变图像比例。
   *
   * 适用场景：固定尺寸头像、卡片封面。
   *
   * 注意：裁剪位置由 object-position 控制，盒子尺寸仍需另外设置。
   *
   * CSS 声明：`object-fit:cover;`。
   * @example
   * css(s.width.px(80), s.height.px(80), s.objectFit.cover)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  readonly cover: Property.ObjectFit | CssString = 'cover';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 把内容拉伸到内容盒，可能改变原有宽高比。
   *
   * CSS 声明：`object-fit:fill;`。
   */
  readonly fill: Property.ObjectFit | CssString = 'fill';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`object-fit:inherit;`。
   */
  readonly inherit: Property.ObjectFit | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`object-fit:initial;`。
   */
  readonly initial: Property.ObjectFit | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 不按内容盒缩放替换内容。
   *
   * CSS 声明：`object-fit:none;`。
   */
  readonly none: Property.ObjectFit | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`object-fit:revert;`。
   */
  readonly revert: Property.ObjectFit | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`object-fit:revert-layer;`。
   */
  readonly revertLayer: Property.ObjectFit | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在 none 和 contain 中选择得到较小内容尺寸的方案。
   *
   * CSS 声明：`object-fit:scale-down;`。
   */
  readonly scaleDown: Property.ObjectFit | CssString = 'scale-down';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`object-fit:unset;`。
   */
  readonly unset: Property.ObjectFit | CssString = 'unset';
}

/**
 * 设置替换元素的内容如何适应其内容盒，例如图像的裁切和缩放。（object-fit）
 *
 * 控制 img、video 等替换内容在盒子内部的缩放与裁剪；不改变盒子本身的 width/height。
 *
 * 常用值：
 * - `fill`：把内容拉伸到内容盒，可能改变原有宽高比。
 * - `contain`：保留宽高比并完整放入内容盒，可能留下空白。
 * - `cover`：保留宽高比并填满内容盒，可能裁掉部分图像。
 * - `none`：不按内容盒缩放替换内容。
 * - `scale-down`：在 none 和 contain 中选择得到较小内容尺寸的方案。
 *
 * 适用场景：封面裁剪、头像和完整图像预览。
 *
 * CSS 初始值：`fill`（不同于浏览器默认样式表）。
 * @example
 * css(s.width.px(80), s.height.px(80), s.objectFit.cover)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
 */
export class ObjectFitCss extends CssProperty {
  /**
   * 保留宽高比并完整放入内容盒，可能留下空白。
   *
   * 区别：cover 优先填满盒子并可能裁剪；contain 优先保留完整内容。
   *
   * 适用场景：希望完整显示的商品图或图像预览。
   *
   * CSS 声明：`object-fit:contain;`。
   * @example
   * css(s.width.rem(20), s.height.rem(12), s.objectFit.contain)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  readonly contain: string = 'object-fit:contain;';
  /**
   * 保留宽高比并填满内容盒，可能裁掉部分图像。
   *
   * 区别：contain 保证完整图像可见但可能留白；fill 可能改变图像比例。
   *
   * 适用场景：固定尺寸头像、卡片封面。
   *
   * 注意：裁剪位置由 object-position 控制，盒子尺寸仍需另外设置。
   *
   * CSS 声明：`object-fit:cover;`。
   * @example
   * css(s.width.px(80), s.height.px(80), s.objectFit.cover)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  readonly cover: string = 'object-fit:cover;';
  /**
   * 把内容拉伸到内容盒，可能改变原有宽高比。
   *
   * CSS 声明：`object-fit:fill;`。
   */
  readonly fill: string = 'object-fit:fill;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`object-fit:inherit;`。
   */
  readonly inherit: string = 'object-fit:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`object-fit:initial;`。
   */
  readonly initial: string = 'object-fit:initial;';
  /**
   * 不按内容盒缩放替换内容。
   *
   * CSS 声明：`object-fit:none;`。
   */
  readonly none: string = 'object-fit:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`object-fit:revert;`。
   */
  readonly revert: string = 'object-fit:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`object-fit:revert-layer;`。
   */
  readonly revertLayer: string = 'object-fit:revert-layer;';
  /**
   * 在 none 和 contain 中选择得到较小内容尺寸的方案。
   *
   * CSS 声明：`object-fit:scale-down;`。
   */
  readonly scaleDown: string = 'object-fit:scale-down;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`object-fit:unset;`。
   */
  readonly unset: string = 'object-fit:unset;';
  /**
   * 创建 object-fit 属性作者；普通使用通过 s.objectFit 取得共享实例。
   * @example
   * class CustomObjectFitCss extends ObjectFitCss {}
   */
  constructor() {
    super('object-fit');
  }
  /**
   * 原样生成 object-fit 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 object-fit:value;。
   * @example
   * s.objectFit.raw('inherit') // object-fit:inherit;
   */
  raw(value: Property.ObjectFit | CssString): string {
    return this.declaration(value);
  }
}

/**
 * object-position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ObjectPositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`object-position:bottom;`。 */
  readonly bottom: Property.ObjectPosition | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`object-position:center;`。 */
  readonly center: Property.ObjectPosition | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`object-position:inherit;`。
   */
  readonly inherit: Property.ObjectPosition | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`object-position:initial;`。
   */
  readonly initial: Property.ObjectPosition | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`object-position:left;`。 */
  readonly left: Property.ObjectPosition | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`object-position:revert;`。
   */
  readonly revert: Property.ObjectPosition | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`object-position:revert-layer;`。
   */
  readonly revertLayer: Property.ObjectPosition | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`object-position:right;`。 */
  readonly right: Property.ObjectPosition | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`object-position:top;`。 */
  readonly top: Property.ObjectPosition | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`object-position:unset;`。
   */
  readonly unset: Property.ObjectPosition | CssString = 'unset';
}

/**
 * 设置替换元素内容在内容盒内的对齐位置。（object-position）
 *
 * CSS 初始值：`50% 50%`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
 */
export class ObjectPositionCss extends LengthCssProperty {
  /** CSS 声明：`object-position:bottom;`。 */
  readonly bottom: string = 'object-position:bottom;';
  /** CSS 声明：`object-position:center;`。 */
  readonly center: string = 'object-position:center;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`object-position:inherit;`。
   */
  readonly inherit: string = 'object-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`object-position:initial;`。
   */
  readonly initial: string = 'object-position:initial;';
  /** CSS 声明：`object-position:left;`。 */
  readonly left: string = 'object-position:left;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`object-position:revert;`。
   */
  readonly revert: string = 'object-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`object-position:revert-layer;`。
   */
  readonly revertLayer: string = 'object-position:revert-layer;';
  /** CSS 声明：`object-position:right;`。 */
  readonly right: string = 'object-position:right;';
  /** CSS 声明：`object-position:top;`。 */
  readonly top: string = 'object-position:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`object-position:unset;`。
   */
  readonly unset: string = 'object-position:unset;';
  /**
   * 创建 object-position 属性作者；普通使用通过 s.objectPosition 取得共享实例。
   * @example
   * class CustomObjectPositionCss extends ObjectPositionCss {}
   */
  constructor() {
    super('object-position');
  }
  /**
   * 原样生成 object-position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 object-position:value;。
   * @example
   * s.objectPosition.raw('inherit') // object-position:inherit;
   */
  raw(value: Property.ObjectPosition | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.objectPosition.calc('var(--value) * 2')
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
   * s.objectPosition.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ObjectPosition | CssString,
    ...others: (Property.ObjectPosition | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.objectPosition.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ObjectPosition | CssString,
    ...others: (Property.ObjectPosition | CssString)[]
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
   * s.objectPosition.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ObjectPosition | CssString,
    preferred: Property.ObjectPosition | CssString,
    maximum: Property.ObjectPosition | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * object-view-box 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ObjectViewBoxKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`object-view-box:inherit;`。
   */
  readonly inherit: Property.ObjectViewBox | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`object-view-box:initial;`。
   */
  readonly initial: Property.ObjectViewBox | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`object-view-box:none;`。 */
  readonly none: Property.ObjectViewBox | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`object-view-box:revert;`。
   */
  readonly revert: Property.ObjectViewBox | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`object-view-box:revert-layer;`。
   */
  readonly revertLayer: Property.ObjectViewBox | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`object-view-box:unset;`。
   */
  readonly unset: Property.ObjectViewBox | CssString = 'unset';
}

/**
 * 设置替换元素内容的可视区域，控制用于呈现的图像范围。（object-view-box）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
 */
export class ObjectViewBoxCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`object-view-box:inherit;`。
   */
  readonly inherit: string = 'object-view-box:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`object-view-box:initial;`。
   */
  readonly initial: string = 'object-view-box:initial;';
  /** CSS 声明：`object-view-box:none;`。 */
  readonly none: string = 'object-view-box:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`object-view-box:revert;`。
   */
  readonly revert: string = 'object-view-box:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`object-view-box:revert-layer;`。
   */
  readonly revertLayer: string = 'object-view-box:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`object-view-box:unset;`。
   */
  readonly unset: string = 'object-view-box:unset;';
  /**
   * 创建 object-view-box 属性作者；普通使用通过 s.objectViewBox 取得共享实例。
   * @example
   * class CustomObjectViewBoxCss extends ObjectViewBoxCss {}
   */
  constructor() {
    super('object-view-box');
  }
  /**
   * 原样生成 object-view-box 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 object-view-box:value;。
   * @example
   * s.objectViewBox.raw('inherit') // object-view-box:inherit;
   */
  raw(value: Property.ObjectViewBox | CssString): string {
    return this.declaration(value);
  }
}

/**
 * offset 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OffsetKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:auto;`。 */
  readonly auto: Property.Offset | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:border-box;`。 */
  readonly borderBox: Property.Offset | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:bottom;`。 */
  readonly bottom: Property.Offset | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:center;`。 */
  readonly center: Property.Offset | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:content-box;`。 */
  readonly contentBox: Property.Offset | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:fill-box;`。 */
  readonly fillBox: Property.Offset | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset:inherit;`。
   */
  readonly inherit: Property.Offset | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset:initial;`。
   */
  readonly initial: Property.Offset | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:left;`。 */
  readonly left: Property.Offset | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:none;`。 */
  readonly none: Property.Offset | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:normal;`。 */
  readonly normal: Property.Offset | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:padding-box;`。 */
  readonly paddingBox: Property.Offset | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset:revert;`。
   */
  readonly revert: Property.Offset | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset:revert-layer;`。
   */
  readonly revertLayer: Property.Offset | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:right;`。 */
  readonly right: Property.Offset | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:stroke-box;`。 */
  readonly strokeBox: Property.Offset | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:top;`。 */
  readonly top: Property.Offset | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset:unset;`。
   */
  readonly unset: Property.Offset | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset:view-box;`。 */
  readonly viewBox: Property.Offset | CssString = 'view-box';
}

/**
 * 集中设置运动路径、起始位置、距离、方向和锚点。（offset）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
 */
export class OffsetCss extends LengthCssProperty {
  /** CSS 声明：`offset:auto;`。 */
  readonly auto: string = 'offset:auto;';
  /** CSS 声明：`offset:border-box;`。 */
  readonly borderBox: string = 'offset:border-box;';
  /** CSS 声明：`offset:bottom;`。 */
  readonly bottom: string = 'offset:bottom;';
  /** CSS 声明：`offset:center;`。 */
  readonly center: string = 'offset:center;';
  /** CSS 声明：`offset:content-box;`。 */
  readonly contentBox: string = 'offset:content-box;';
  /** CSS 声明：`offset:fill-box;`。 */
  readonly fillBox: string = 'offset:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset:inherit;`。
   */
  readonly inherit: string = 'offset:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset:initial;`。
   */
  readonly initial: string = 'offset:initial;';
  /** CSS 声明：`offset:left;`。 */
  readonly left: string = 'offset:left;';
  /** CSS 声明：`offset:none;`。 */
  readonly none: string = 'offset:none;';
  /** CSS 声明：`offset:normal;`。 */
  readonly normal: string = 'offset:normal;';
  /** CSS 声明：`offset:padding-box;`。 */
  readonly paddingBox: string = 'offset:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset:revert;`。
   */
  readonly revert: string = 'offset:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset:revert-layer;`。
   */
  readonly revertLayer: string = 'offset:revert-layer;';
  /** CSS 声明：`offset:right;`。 */
  readonly right: string = 'offset:right;';
  /** CSS 声明：`offset:stroke-box;`。 */
  readonly strokeBox: string = 'offset:stroke-box;';
  /** CSS 声明：`offset:top;`。 */
  readonly top: string = 'offset:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset:unset;`。
   */
  readonly unset: string = 'offset:unset;';
  /** CSS 声明：`offset:view-box;`。 */
  readonly viewBox: string = 'offset:view-box;';
  /**
   * 创建 offset 属性作者；普通使用通过 s.offset 取得共享实例。
   * @example
   * class CustomOffsetCss extends OffsetCss {}
   */
  constructor() {
    super('offset');
  }
  /**
   * 原样生成 offset 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 offset:value;。
   * @example
   * s.offset.raw('inherit') // offset:inherit;
   */
  raw(value: Property.Offset | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.offset.calc('var(--value) * 2')
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
   * s.offset.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Offset | CssString, ...others: (Property.Offset | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.offset.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Offset | CssString, ...others: (Property.Offset | CssString)[]): string {
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
   * s.offset.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Offset | CssString,
    preferred: Property.Offset | CssString,
    maximum: Property.Offset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * offset-anchor 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OffsetAnchorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-anchor:auto;`。 */
  readonly auto: Property.OffsetAnchor | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-anchor:bottom;`。 */
  readonly bottom: Property.OffsetAnchor | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-anchor:center;`。 */
  readonly center: Property.OffsetAnchor | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-anchor:inherit;`。
   */
  readonly inherit: Property.OffsetAnchor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-anchor:initial;`。
   */
  readonly initial: Property.OffsetAnchor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-anchor:left;`。 */
  readonly left: Property.OffsetAnchor | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-anchor:revert;`。
   */
  readonly revert: Property.OffsetAnchor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-anchor:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetAnchor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-anchor:right;`。 */
  readonly right: Property.OffsetAnchor | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-anchor:top;`。 */
  readonly top: Property.OffsetAnchor | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-anchor:unset;`。
   */
  readonly unset: Property.OffsetAnchor | CssString = 'unset';
}

/**
 * 设置元素沿运动路径移动时与路径相接的内部锚点。（offset-anchor）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
 */
export class OffsetAnchorCss extends LengthCssProperty {
  /** CSS 声明：`offset-anchor:auto;`。 */
  readonly auto: string = 'offset-anchor:auto;';
  /** CSS 声明：`offset-anchor:bottom;`。 */
  readonly bottom: string = 'offset-anchor:bottom;';
  /** CSS 声明：`offset-anchor:center;`。 */
  readonly center: string = 'offset-anchor:center;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-anchor:inherit;`。
   */
  readonly inherit: string = 'offset-anchor:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-anchor:initial;`。
   */
  readonly initial: string = 'offset-anchor:initial;';
  /** CSS 声明：`offset-anchor:left;`。 */
  readonly left: string = 'offset-anchor:left;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-anchor:revert;`。
   */
  readonly revert: string = 'offset-anchor:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-anchor:revert-layer;`。
   */
  readonly revertLayer: string = 'offset-anchor:revert-layer;';
  /** CSS 声明：`offset-anchor:right;`。 */
  readonly right: string = 'offset-anchor:right;';
  /** CSS 声明：`offset-anchor:top;`。 */
  readonly top: string = 'offset-anchor:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-anchor:unset;`。
   */
  readonly unset: string = 'offset-anchor:unset;';
  /**
   * 创建 offset-anchor 属性作者；普通使用通过 s.offsetAnchor 取得共享实例。
   * @example
   * class CustomOffsetAnchorCss extends OffsetAnchorCss {}
   */
  constructor() {
    super('offset-anchor');
  }
  /**
   * 原样生成 offset-anchor 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 offset-anchor:value;。
   * @example
   * s.offsetAnchor.raw('inherit') // offset-anchor:inherit;
   */
  raw(value: Property.OffsetAnchor | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.offsetAnchor.calc('var(--value) * 2')
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
   * s.offsetAnchor.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OffsetAnchor | CssString,
    ...others: (Property.OffsetAnchor | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.offsetAnchor.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OffsetAnchor | CssString,
    ...others: (Property.OffsetAnchor | CssString)[]
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
   * s.offsetAnchor.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OffsetAnchor | CssString,
    preferred: Property.OffsetAnchor | CssString,
    maximum: Property.OffsetAnchor | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * offset-distance 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OffsetDistanceKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-distance:inherit;`。
   */
  readonly inherit: Property.OffsetDistance | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-distance:initial;`。
   */
  readonly initial: Property.OffsetDistance | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-distance:revert;`。
   */
  readonly revert: Property.OffsetDistance | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-distance:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetDistance | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-distance:unset;`。
   */
  readonly unset: Property.OffsetDistance | CssString = 'unset';
}

/**
 * 设置元素沿运动路径行进的距离。（offset-distance）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
 */
export class OffsetDistanceCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-distance:inherit;`。
   */
  readonly inherit: string = 'offset-distance:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-distance:initial;`。
   */
  readonly initial: string = 'offset-distance:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-distance:revert;`。
   */
  readonly revert: string = 'offset-distance:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-distance:revert-layer;`。
   */
  readonly revertLayer: string = 'offset-distance:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-distance:unset;`。
   */
  readonly unset: string = 'offset-distance:unset;';
  /**
   * 创建 offset-distance 属性作者；普通使用通过 s.offsetDistance 取得共享实例。
   * @example
   * class CustomOffsetDistanceCss extends OffsetDistanceCss {}
   */
  constructor() {
    super('offset-distance');
  }
  /**
   * 原样生成 offset-distance 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 offset-distance:value;。
   * @example
   * s.offsetDistance.raw('inherit') // offset-distance:inherit;
   */
  raw(value: Property.OffsetDistance | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.offsetDistance.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.offsetDistance.calc('var(--value) * 2')
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
   * s.offsetDistance.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OffsetDistance | CssString,
    ...others: (Property.OffsetDistance | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.offsetDistance.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OffsetDistance | CssString,
    ...others: (Property.OffsetDistance | CssString)[]
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
   * s.offsetDistance.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OffsetDistance | CssString,
    preferred: Property.OffsetDistance | CssString,
    maximum: Property.OffsetDistance | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * offset-path 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OffsetPathKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-path:border-box;`。 */
  readonly borderBox: Property.OffsetPath | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-path:content-box;`。 */
  readonly contentBox: Property.OffsetPath | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-path:fill-box;`。 */
  readonly fillBox: Property.OffsetPath | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-path:inherit;`。
   */
  readonly inherit: Property.OffsetPath | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-path:initial;`。
   */
  readonly initial: Property.OffsetPath | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-path:none;`。 */
  readonly none: Property.OffsetPath | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-path:padding-box;`。 */
  readonly paddingBox: Property.OffsetPath | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-path:revert;`。
   */
  readonly revert: Property.OffsetPath | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-path:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetPath | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-path:stroke-box;`。 */
  readonly strokeBox: Property.OffsetPath | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-path:unset;`。
   */
  readonly unset: Property.OffsetPath | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-path:view-box;`。 */
  readonly viewBox: Property.OffsetPath | CssString = 'view-box';
}

/**
 * 设置元素运动所沿用的路径。（offset-path）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
 */
export class OffsetPathCss extends CssProperty {
  /** CSS 声明：`offset-path:border-box;`。 */
  readonly borderBox: string = 'offset-path:border-box;';
  /** CSS 声明：`offset-path:content-box;`。 */
  readonly contentBox: string = 'offset-path:content-box;';
  /** CSS 声明：`offset-path:fill-box;`。 */
  readonly fillBox: string = 'offset-path:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-path:inherit;`。
   */
  readonly inherit: string = 'offset-path:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-path:initial;`。
   */
  readonly initial: string = 'offset-path:initial;';
  /** CSS 声明：`offset-path:none;`。 */
  readonly none: string = 'offset-path:none;';
  /** CSS 声明：`offset-path:padding-box;`。 */
  readonly paddingBox: string = 'offset-path:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-path:revert;`。
   */
  readonly revert: string = 'offset-path:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-path:revert-layer;`。
   */
  readonly revertLayer: string = 'offset-path:revert-layer;';
  /** CSS 声明：`offset-path:stroke-box;`。 */
  readonly strokeBox: string = 'offset-path:stroke-box;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-path:unset;`。
   */
  readonly unset: string = 'offset-path:unset;';
  /** CSS 声明：`offset-path:view-box;`。 */
  readonly viewBox: string = 'offset-path:view-box;';
  /**
   * 创建 offset-path 属性作者；普通使用通过 s.offsetPath 取得共享实例。
   * @example
   * class CustomOffsetPathCss extends OffsetPathCss {}
   */
  constructor() {
    super('offset-path');
  }
  /**
   * 原样生成 offset-path 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 offset-path:value;。
   * @example
   * s.offsetPath.raw('inherit') // offset-path:inherit;
   */
  raw(value: Property.OffsetPath | CssString): string {
    return this.declaration(value);
  }
}

/**
 * offset-position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OffsetPositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-position:auto;`。 */
  readonly auto: Property.OffsetPosition | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-position:bottom;`。 */
  readonly bottom: Property.OffsetPosition | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-position:center;`。 */
  readonly center: Property.OffsetPosition | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-position:inherit;`。
   */
  readonly inherit: Property.OffsetPosition | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-position:initial;`。
   */
  readonly initial: Property.OffsetPosition | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-position:left;`。 */
  readonly left: Property.OffsetPosition | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-position:normal;`。 */
  readonly normal: Property.OffsetPosition | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-position:revert;`。
   */
  readonly revert: Property.OffsetPosition | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-position:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetPosition | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-position:right;`。 */
  readonly right: Property.OffsetPosition | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-position:top;`。 */
  readonly top: Property.OffsetPosition | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-position:unset;`。
   */
  readonly unset: Property.OffsetPosition | CssString = 'unset';
}

/**
 * 设置运动路径的初始位置。（offset-position）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
 */
export class OffsetPositionCss extends LengthCssProperty {
  /** CSS 声明：`offset-position:auto;`。 */
  readonly auto: string = 'offset-position:auto;';
  /** CSS 声明：`offset-position:bottom;`。 */
  readonly bottom: string = 'offset-position:bottom;';
  /** CSS 声明：`offset-position:center;`。 */
  readonly center: string = 'offset-position:center;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-position:inherit;`。
   */
  readonly inherit: string = 'offset-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-position:initial;`。
   */
  readonly initial: string = 'offset-position:initial;';
  /** CSS 声明：`offset-position:left;`。 */
  readonly left: string = 'offset-position:left;';
  /** CSS 声明：`offset-position:normal;`。 */
  readonly normal: string = 'offset-position:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-position:revert;`。
   */
  readonly revert: string = 'offset-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-position:revert-layer;`。
   */
  readonly revertLayer: string = 'offset-position:revert-layer;';
  /** CSS 声明：`offset-position:right;`。 */
  readonly right: string = 'offset-position:right;';
  /** CSS 声明：`offset-position:top;`。 */
  readonly top: string = 'offset-position:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-position:unset;`。
   */
  readonly unset: string = 'offset-position:unset;';
  /**
   * 创建 offset-position 属性作者；普通使用通过 s.offsetPosition 取得共享实例。
   * @example
   * class CustomOffsetPositionCss extends OffsetPositionCss {}
   */
  constructor() {
    super('offset-position');
  }
  /**
   * 原样生成 offset-position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 offset-position:value;。
   * @example
   * s.offsetPosition.raw('inherit') // offset-position:inherit;
   */
  raw(value: Property.OffsetPosition | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.offsetPosition.calc('var(--value) * 2')
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
   * s.offsetPosition.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OffsetPosition | CssString,
    ...others: (Property.OffsetPosition | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.offsetPosition.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OffsetPosition | CssString,
    ...others: (Property.OffsetPosition | CssString)[]
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
   * s.offsetPosition.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OffsetPosition | CssString,
    preferred: Property.OffsetPosition | CssString,
    maximum: Property.OffsetPosition | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * offset-rotate 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OffsetRotateKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-rotate:auto;`。 */
  readonly auto: Property.OffsetRotate | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-rotate:inherit;`。
   */
  readonly inherit: Property.OffsetRotate | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-rotate:initial;`。
   */
  readonly initial: Property.OffsetRotate | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-rotate:reverse;`。 */
  readonly reverse: Property.OffsetRotate | CssString = 'reverse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-rotate:revert;`。
   */
  readonly revert: Property.OffsetRotate | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-rotate:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetRotate | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-rotate:unset;`。
   */
  readonly unset: Property.OffsetRotate | CssString = 'unset';
}

/**
 * 设置元素沿运动路径移动时的方向和附加旋转。（offset-rotate）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class OffsetRotateCss extends CssProperty {
  /** CSS 声明：`offset-rotate:auto;`。 */
  readonly auto: string = 'offset-rotate:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-rotate:inherit;`。
   */
  readonly inherit: string = 'offset-rotate:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-rotate:initial;`。
   */
  readonly initial: string = 'offset-rotate:initial;';
  /** CSS 声明：`offset-rotate:reverse;`。 */
  readonly reverse: string = 'offset-rotate:reverse;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-rotate:revert;`。
   */
  readonly revert: string = 'offset-rotate:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-rotate:revert-layer;`。
   */
  readonly revertLayer: string = 'offset-rotate:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-rotate:unset;`。
   */
  readonly unset: string = 'offset-rotate:unset;';
  /**
   * 创建 offset-rotate 属性作者；普通使用通过 s.offsetRotate 取得共享实例。
   * @example
   * class CustomOffsetRotateCss extends OffsetRotateCss {}
   */
  constructor() {
    super('offset-rotate');
  }
  /**
   * 原样生成 offset-rotate 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 offset-rotate:value;。
   * @example
   * s.offsetRotate.raw('inherit') // offset-rotate:inherit;
   */
  raw(value: Property.OffsetRotate | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 deg 单位生成完整属性声明。角度，360deg 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 deg。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.offsetRotate.deg(1)
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
   * s.offsetRotate.grad(1)
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
   * s.offsetRotate.rad(1)
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
   * s.offsetRotate.turn(1)
   */
  turn(value: number): string {
    return this.declaration(`${value}turn`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.offsetRotate.calc('var(--value) * 2')
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
   * s.offsetRotate.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OffsetRotate | CssString,
    ...others: (Property.OffsetRotate | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.offsetRotate.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OffsetRotate | CssString,
    ...others: (Property.OffsetRotate | CssString)[]
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
   * s.offsetRotate.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OffsetRotate | CssString,
    preferred: Property.OffsetRotate | CssString,
    maximum: Property.OffsetRotate | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * offset-rotation 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OffsetRotationKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-rotation:auto;`。 */
  readonly auto: Property.OffsetRotate | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-rotation:inherit;`。
   */
  readonly inherit: Property.OffsetRotate | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-rotation:initial;`。
   */
  readonly initial: Property.OffsetRotate | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`offset-rotation:reverse;`。 */
  readonly reverse: Property.OffsetRotate | CssString = 'reverse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-rotation:revert;`。
   */
  readonly revert: Property.OffsetRotate | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-rotation:revert-layer;`。
   */
  readonly revertLayer: Property.OffsetRotate | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-rotation:unset;`。
   */
  readonly unset: Property.OffsetRotate | CssString = 'unset';
}

/**
 * 设置路径旋转的旧名称；新代码使用 offset-rotate。（offset-rotation）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class OffsetRotationCss extends CssProperty {
  /** CSS 声明：`offset-rotation:auto;`。 */
  readonly auto: string = 'offset-rotation:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`offset-rotation:inherit;`。
   */
  readonly inherit: string = 'offset-rotation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`offset-rotation:initial;`。
   */
  readonly initial: string = 'offset-rotation:initial;';
  /** CSS 声明：`offset-rotation:reverse;`。 */
  readonly reverse: string = 'offset-rotation:reverse;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`offset-rotation:revert;`。
   */
  readonly revert: string = 'offset-rotation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`offset-rotation:revert-layer;`。
   */
  readonly revertLayer: string = 'offset-rotation:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`offset-rotation:unset;`。
   */
  readonly unset: string = 'offset-rotation:unset;';
  /**
   * 创建 offset-rotation 属性作者；普通使用通过 s.offsetRotation 取得共享实例。
   * @example
   * class CustomOffsetRotationCss extends OffsetRotationCss {}
   */
  constructor() {
    super('offset-rotation');
  }
  /**
   * 原样生成 offset-rotation 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 offset-rotation:value;。
   * @example
   * s.offsetRotation.raw('inherit') // offset-rotation:inherit;
   */
  raw(value: Property.OffsetRotate | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 deg 单位生成完整属性声明。角度，360deg 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 deg。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.offsetRotation.deg(1)
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
   * s.offsetRotation.grad(1)
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
   * s.offsetRotation.rad(1)
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
   * s.offsetRotation.turn(1)
   */
  turn(value: number): string {
    return this.declaration(`${value}turn`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.offsetRotation.calc('var(--value) * 2')
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
   * s.offsetRotation.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OffsetRotate | CssString,
    ...others: (Property.OffsetRotate | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.offsetRotation.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OffsetRotate | CssString,
    ...others: (Property.OffsetRotate | CssString)[]
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
   * s.offsetRotation.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OffsetRotate | CssString,
    preferred: Property.OffsetRotate | CssString,
    maximum: Property.OffsetRotate | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * opacity 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OpacityKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`opacity:inherit;`。
   */
  readonly inherit: Property.Opacity | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`opacity:initial;`。
   */
  readonly initial: Property.Opacity | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`opacity:revert;`。
   */
  readonly revert: Property.Opacity | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`opacity:revert-layer;`。
   */
  readonly revertLayer: Property.Opacity | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`opacity:unset;`。
   */
  readonly unset: Property.Opacity | CssString = 'unset';
}

/**
 * 设置元素及其子树合成后的整体不透明度。（opacity）
 *
 * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
 *
 * 适用场景：统一调整整个元素子树的透明度；只需背景半透明时应使用带 alpha 的背景色。
 *
 * CSS 初始值：`1`（不同于浏览器默认样式表）。
 * @example
 * s.opacity.raw(0.5) // opacity:0.5;
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
 */
export class OpacityCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`opacity:inherit;`。
   */
  readonly inherit: string = 'opacity:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`opacity:initial;`。
   */
  readonly initial: string = 'opacity:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`opacity:revert;`。
   */
  readonly revert: string = 'opacity:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`opacity:revert-layer;`。
   */
  readonly revertLayer: string = 'opacity:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`opacity:unset;`。
   */
  readonly unset: string = 'opacity:unset;';
  /**
   * 创建 opacity 属性作者；普通使用通过 s.opacity 取得共享实例。
   * @example
   * class CustomOpacityCss extends OpacityCss {}
   */
  constructor() {
    super('opacity');
  }
  /**
   * 原样生成 opacity 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 opacity:value;。
   * @example
   * s.opacity.raw('inherit') // opacity:inherit;
   */
  raw(value: Property.Opacity | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.opacity.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.opacity.calc('var(--value) * 2')
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
   * s.opacity.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Opacity | CssString, ...others: (Property.Opacity | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.opacity.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Opacity | CssString, ...others: (Property.Opacity | CssString)[]): string {
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
   * s.opacity.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Opacity | CssString,
    preferred: Property.Opacity | CssString,
    maximum: Property.Opacity | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * order 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OrderKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`order:inherit;`。
   */
  readonly inherit: Property.Order | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`order:initial;`。
   */
  readonly initial: Property.Order | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`order:revert;`。
   */
  readonly revert: Property.Order | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`order:revert-layer;`。
   */
  readonly revertLayer: Property.Order | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`order:unset;`。
   */
  readonly unset: Property.Order | CssString = 'unset';
}

/**
 * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。（order）
 *
 * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
 */
export class OrderCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`order:inherit;`。
   */
  readonly inherit: string = 'order:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`order:initial;`。
   */
  readonly initial: string = 'order:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`order:revert;`。
   */
  readonly revert: string = 'order:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`order:revert-layer;`。
   */
  readonly revertLayer: string = 'order:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`order:unset;`。
   */
  readonly unset: string = 'order:unset;';
  /**
   * 创建 order 属性作者；普通使用通过 s.order 取得共享实例。
   * @example
   * class CustomOrderCss extends OrderCss {}
   */
  constructor() {
    super('order');
  }
  /**
   * 原样生成 order 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 order:value;。
   * @example
   * s.order.raw('inherit') // order:inherit;
   */
  raw(value: Property.Order | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.order.calc('var(--value) * 2')
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
   * s.order.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Order | CssString, ...others: (Property.Order | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.order.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Order | CssString, ...others: (Property.Order | CssString)[]): string {
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
   * s.order.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Order | CssString,
    preferred: Property.Order | CssString,
    maximum: Property.Order | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * orphans 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OrphansKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`orphans:inherit;`。
   */
  readonly inherit: Property.Orphans | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`orphans:initial;`。
   */
  readonly initial: Property.Orphans | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`orphans:revert;`。
   */
  readonly revert: Property.Orphans | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`orphans:revert-layer;`。
   */
  readonly revertLayer: Property.Orphans | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`orphans:unset;`。
   */
  readonly unset: Property.Orphans | CssString = 'unset';
}

/**
 * 设置分页或分栏断点前需保留的最少行数。（orphans）
 *
 * CSS 初始值：`2`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
 */
export class OrphansCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`orphans:inherit;`。
   */
  readonly inherit: string = 'orphans:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`orphans:initial;`。
   */
  readonly initial: string = 'orphans:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`orphans:revert;`。
   */
  readonly revert: string = 'orphans:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`orphans:revert-layer;`。
   */
  readonly revertLayer: string = 'orphans:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`orphans:unset;`。
   */
  readonly unset: string = 'orphans:unset;';
  /**
   * 创建 orphans 属性作者；普通使用通过 s.orphans 取得共享实例。
   * @example
   * class CustomOrphansCss extends OrphansCss {}
   */
  constructor() {
    super('orphans');
  }
  /**
   * 原样生成 orphans 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 orphans:value;。
   * @example
   * s.orphans.raw('inherit') // orphans:inherit;
   */
  raw(value: Property.Orphans | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.orphans.calc('var(--value) * 2')
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
   * s.orphans.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Orphans | CssString, ...others: (Property.Orphans | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.orphans.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Orphans | CssString, ...others: (Property.Orphans | CssString)[]): string {
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
   * s.orphans.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Orphans | CssString,
    preferred: Property.Orphans | CssString,
    maximum: Property.Orphans | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * outline 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OutlineKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:AccentColor;`。 */
  readonly AccentColor: Property.Outline | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:AccentColorText;`。 */
  readonly AccentColorText: Property.Outline | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ActiveBorder;`。 */
  readonly ActiveBorder: Property.Outline | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ActiveCaption;`。 */
  readonly ActiveCaption: Property.Outline | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ActiveText;`。 */
  readonly ActiveText: Property.Outline | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:AppWorkspace;`。 */
  readonly AppWorkspace: Property.Outline | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Background;`。 */
  readonly Background: Property.Outline | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ButtonBorder;`。 */
  readonly ButtonBorder: Property.Outline | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ButtonFace;`。 */
  readonly ButtonFace: Property.Outline | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.Outline | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ButtonShadow;`。 */
  readonly ButtonShadow: Property.Outline | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ButtonText;`。 */
  readonly ButtonText: Property.Outline | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Canvas;`。 */
  readonly Canvas: Property.Outline | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:CanvasText;`。 */
  readonly CanvasText: Property.Outline | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:CaptionText;`。 */
  readonly CaptionText: Property.Outline | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Field;`。 */
  readonly Field: Property.Outline | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:FieldText;`。 */
  readonly FieldText: Property.Outline | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:GrayText;`。 */
  readonly GrayText: Property.Outline | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Highlight;`。 */
  readonly Highlight: Property.Outline | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:HighlightText;`。 */
  readonly HighlightText: Property.Outline | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:InactiveBorder;`。 */
  readonly InactiveBorder: Property.Outline | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:InactiveCaption;`。 */
  readonly InactiveCaption: Property.Outline | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.Outline | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:InfoBackground;`。 */
  readonly InfoBackground: Property.Outline | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:InfoText;`。 */
  readonly InfoText: Property.Outline | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:LinkText;`。 */
  readonly LinkText: Property.Outline | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Mark;`。 */
  readonly Mark: Property.Outline | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:MarkText;`。 */
  readonly MarkText: Property.Outline | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Menu;`。 */
  readonly Menu: Property.Outline | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:MenuText;`。 */
  readonly MenuText: Property.Outline | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Scrollbar;`。 */
  readonly Scrollbar: Property.Outline | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:SelectedItem;`。 */
  readonly SelectedItem: Property.Outline | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:SelectedItemText;`。 */
  readonly SelectedItemText: Property.Outline | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.Outline | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ThreeDFace;`。 */
  readonly ThreeDFace: Property.Outline | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.Outline | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.Outline | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.Outline | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:VisitedText;`。 */
  readonly VisitedText: Property.Outline | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:Window;`。 */
  readonly Window: Property.Outline | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:WindowFrame;`。 */
  readonly WindowFrame: Property.Outline | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:WindowText;`。 */
  readonly WindowText: Property.Outline | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:aliceblue;`。 */
  readonly aliceblue: Property.Outline | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:antiquewhite;`。 */
  readonly antiquewhite: Property.Outline | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:aqua;`。 */
  readonly aqua: Property.Outline | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:aquamarine;`。 */
  readonly aquamarine: Property.Outline | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:auto;`。 */
  readonly auto: Property.Outline | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:azure;`。 */
  readonly azure: Property.Outline | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:beige;`。 */
  readonly beige: Property.Outline | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:bisque;`。 */
  readonly bisque: Property.Outline | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:black;`。 */
  readonly black: Property.Outline | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:blanchedalmond;`。 */
  readonly blanchedalmond: Property.Outline | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:blue;`。 */
  readonly blue: Property.Outline | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:blueviolet;`。 */
  readonly blueviolet: Property.Outline | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:brown;`。 */
  readonly brown: Property.Outline | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:burlywood;`。 */
  readonly burlywood: Property.Outline | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:cadetblue;`。 */
  readonly cadetblue: Property.Outline | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:chartreuse;`。 */
  readonly chartreuse: Property.Outline | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:chocolate;`。 */
  readonly chocolate: Property.Outline | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:coral;`。 */
  readonly coral: Property.Outline | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:cornflowerblue;`。 */
  readonly cornflowerblue: Property.Outline | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:cornsilk;`。 */
  readonly cornsilk: Property.Outline | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:crimson;`。 */
  readonly crimson: Property.Outline | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`outline:currentColor;`。
   */
  readonly currentColor: Property.Outline | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:cyan;`。 */
  readonly cyan: Property.Outline | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkblue;`。 */
  readonly darkblue: Property.Outline | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkcyan;`。 */
  readonly darkcyan: Property.Outline | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.Outline | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkgray;`。 */
  readonly darkgray: Property.Outline | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkgreen;`。 */
  readonly darkgreen: Property.Outline | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkgrey;`。 */
  readonly darkgrey: Property.Outline | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkkhaki;`。 */
  readonly darkkhaki: Property.Outline | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkmagenta;`。 */
  readonly darkmagenta: Property.Outline | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkolivegreen;`。 */
  readonly darkolivegreen: Property.Outline | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkorange;`。 */
  readonly darkorange: Property.Outline | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkorchid;`。 */
  readonly darkorchid: Property.Outline | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkred;`。 */
  readonly darkred: Property.Outline | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darksalmon;`。 */
  readonly darksalmon: Property.Outline | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkseagreen;`。 */
  readonly darkseagreen: Property.Outline | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkslateblue;`。 */
  readonly darkslateblue: Property.Outline | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkslategray;`。 */
  readonly darkslategray: Property.Outline | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkslategrey;`。 */
  readonly darkslategrey: Property.Outline | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkturquoise;`。 */
  readonly darkturquoise: Property.Outline | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:darkviolet;`。 */
  readonly darkviolet: Property.Outline | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:dashed;`。 */
  readonly dashed: Property.Outline | CssString = 'dashed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:deeppink;`。 */
  readonly deeppink: Property.Outline | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:deepskyblue;`。 */
  readonly deepskyblue: Property.Outline | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:dimgray;`。 */
  readonly dimgray: Property.Outline | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:dimgrey;`。 */
  readonly dimgrey: Property.Outline | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:dodgerblue;`。 */
  readonly dodgerblue: Property.Outline | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:dotted;`。 */
  readonly dotted: Property.Outline | CssString = 'dotted';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:double;`。 */
  readonly double: Property.Outline | CssString = 'double';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:firebrick;`。 */
  readonly firebrick: Property.Outline | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:floralwhite;`。 */
  readonly floralwhite: Property.Outline | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:forestgreen;`。 */
  readonly forestgreen: Property.Outline | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:fuchsia;`。 */
  readonly fuchsia: Property.Outline | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:gainsboro;`。 */
  readonly gainsboro: Property.Outline | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ghostwhite;`。 */
  readonly ghostwhite: Property.Outline | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:gold;`。 */
  readonly gold: Property.Outline | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:goldenrod;`。 */
  readonly goldenrod: Property.Outline | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:gray;`。 */
  readonly gray: Property.Outline | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:green;`。 */
  readonly green: Property.Outline | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:greenyellow;`。 */
  readonly greenyellow: Property.Outline | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:grey;`。 */
  readonly grey: Property.Outline | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:groove;`。 */
  readonly groove: Property.Outline | CssString = 'groove';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:honeydew;`。 */
  readonly honeydew: Property.Outline | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:hotpink;`。 */
  readonly hotpink: Property.Outline | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:indianred;`。 */
  readonly indianred: Property.Outline | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:indigo;`。 */
  readonly indigo: Property.Outline | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline:inherit;`。
   */
  readonly inherit: Property.Outline | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline:initial;`。
   */
  readonly initial: Property.Outline | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:inset;`。 */
  readonly inset: Property.Outline | CssString = 'inset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ivory;`。 */
  readonly ivory: Property.Outline | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:khaki;`。 */
  readonly khaki: Property.Outline | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lavender;`。 */
  readonly lavender: Property.Outline | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lavenderblush;`。 */
  readonly lavenderblush: Property.Outline | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lawngreen;`。 */
  readonly lawngreen: Property.Outline | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lemonchiffon;`。 */
  readonly lemonchiffon: Property.Outline | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightblue;`。 */
  readonly lightblue: Property.Outline | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightcoral;`。 */
  readonly lightcoral: Property.Outline | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightcyan;`。 */
  readonly lightcyan: Property.Outline | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.Outline | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightgray;`。 */
  readonly lightgray: Property.Outline | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightgreen;`。 */
  readonly lightgreen: Property.Outline | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightgrey;`。 */
  readonly lightgrey: Property.Outline | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightpink;`。 */
  readonly lightpink: Property.Outline | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightsalmon;`。 */
  readonly lightsalmon: Property.Outline | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightseagreen;`。 */
  readonly lightseagreen: Property.Outline | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightskyblue;`。 */
  readonly lightskyblue: Property.Outline | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightslategray;`。 */
  readonly lightslategray: Property.Outline | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightslategrey;`。 */
  readonly lightslategrey: Property.Outline | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightsteelblue;`。 */
  readonly lightsteelblue: Property.Outline | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lightyellow;`。 */
  readonly lightyellow: Property.Outline | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:lime;`。 */
  readonly lime: Property.Outline | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:limegreen;`。 */
  readonly limegreen: Property.Outline | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:linen;`。 */
  readonly linen: Property.Outline | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:magenta;`。 */
  readonly magenta: Property.Outline | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:maroon;`。 */
  readonly maroon: Property.Outline | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:medium;`。 */
  readonly medium: Property.Outline | CssString = 'medium';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.Outline | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumblue;`。 */
  readonly mediumblue: Property.Outline | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumorchid;`。 */
  readonly mediumorchid: Property.Outline | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumpurple;`。 */
  readonly mediumpurple: Property.Outline | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumseagreen;`。 */
  readonly mediumseagreen: Property.Outline | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumslateblue;`。 */
  readonly mediumslateblue: Property.Outline | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.Outline | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumturquoise;`。 */
  readonly mediumturquoise: Property.Outline | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mediumvioletred;`。 */
  readonly mediumvioletred: Property.Outline | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:midnightblue;`。 */
  readonly midnightblue: Property.Outline | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mintcream;`。 */
  readonly mintcream: Property.Outline | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:mistyrose;`。 */
  readonly mistyrose: Property.Outline | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:moccasin;`。 */
  readonly moccasin: Property.Outline | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:navajowhite;`。 */
  readonly navajowhite: Property.Outline | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:navy;`。 */
  readonly navy: Property.Outline | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:none;`。 */
  readonly none: Property.Outline | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:oldlace;`。 */
  readonly oldlace: Property.Outline | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:olive;`。 */
  readonly olive: Property.Outline | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:olivedrab;`。 */
  readonly olivedrab: Property.Outline | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:orange;`。 */
  readonly orange: Property.Outline | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:orangered;`。 */
  readonly orangered: Property.Outline | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:orchid;`。 */
  readonly orchid: Property.Outline | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:outset;`。 */
  readonly outset: Property.Outline | CssString = 'outset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:palegoldenrod;`。 */
  readonly palegoldenrod: Property.Outline | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:palegreen;`。 */
  readonly palegreen: Property.Outline | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:paleturquoise;`。 */
  readonly paleturquoise: Property.Outline | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:palevioletred;`。 */
  readonly palevioletred: Property.Outline | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:papayawhip;`。 */
  readonly papayawhip: Property.Outline | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:peachpuff;`。 */
  readonly peachpuff: Property.Outline | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:peru;`。 */
  readonly peru: Property.Outline | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:pink;`。 */
  readonly pink: Property.Outline | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:plum;`。 */
  readonly plum: Property.Outline | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:powderblue;`。 */
  readonly powderblue: Property.Outline | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:purple;`。 */
  readonly purple: Property.Outline | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:rebeccapurple;`。 */
  readonly rebeccapurple: Property.Outline | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:red;`。 */
  readonly red: Property.Outline | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline:revert;`。
   */
  readonly revert: Property.Outline | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline:revert-layer;`。
   */
  readonly revertLayer: Property.Outline | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:ridge;`。 */
  readonly ridge: Property.Outline | CssString = 'ridge';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:rosybrown;`。 */
  readonly rosybrown: Property.Outline | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:royalblue;`。 */
  readonly royalblue: Property.Outline | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:saddlebrown;`。 */
  readonly saddlebrown: Property.Outline | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:salmon;`。 */
  readonly salmon: Property.Outline | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:sandybrown;`。 */
  readonly sandybrown: Property.Outline | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:seagreen;`。 */
  readonly seagreen: Property.Outline | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:seashell;`。 */
  readonly seashell: Property.Outline | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:sienna;`。 */
  readonly sienna: Property.Outline | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:silver;`。 */
  readonly silver: Property.Outline | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:skyblue;`。 */
  readonly skyblue: Property.Outline | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:slateblue;`。 */
  readonly slateblue: Property.Outline | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:slategray;`。 */
  readonly slategray: Property.Outline | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:slategrey;`。 */
  readonly slategrey: Property.Outline | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:snow;`。 */
  readonly snow: Property.Outline | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:solid;`。 */
  readonly solid: Property.Outline | CssString = 'solid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:springgreen;`。 */
  readonly springgreen: Property.Outline | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:steelblue;`。 */
  readonly steelblue: Property.Outline | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:tan;`。 */
  readonly tan: Property.Outline | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:teal;`。 */
  readonly teal: Property.Outline | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:thick;`。 */
  readonly thick: Property.Outline | CssString = 'thick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:thin;`。 */
  readonly thin: Property.Outline | CssString = 'thin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:thistle;`。 */
  readonly thistle: Property.Outline | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:tomato;`。 */
  readonly tomato: Property.Outline | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`outline:transparent;`。
   */
  readonly transparent: Property.Outline | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:turquoise;`。 */
  readonly turquoise: Property.Outline | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline:unset;`。
   */
  readonly unset: Property.Outline | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:violet;`。 */
  readonly violet: Property.Outline | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:wheat;`。 */
  readonly wheat: Property.Outline | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:white;`。 */
  readonly white: Property.Outline | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:whitesmoke;`。 */
  readonly whitesmoke: Property.Outline | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:yellow;`。 */
  readonly yellow: Property.Outline | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline:yellowgreen;`。 */
  readonly yellowgreen: Property.Outline | CssString = 'yellowgreen';
}

/**
 * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。（outline）
 *
 * 不占布局空间，可用 outline-offset 调整距离；键盘焦点指示不应被无替代地移除。
 *
 * 适用场景：控件焦点指示和不影响布局的轮廓。
 * @example
 * s._focusVisible(s.outline.raw('2px solid currentColor'), s.outlineOffset.px(2))
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
 */
export class OutlineCss extends LengthCssProperty {
  /** CSS 声明：`outline:AccentColor;`。 */
  readonly AccentColor: string = 'outline:AccentColor;';
  /** CSS 声明：`outline:AccentColorText;`。 */
  readonly AccentColorText: string = 'outline:AccentColorText;';
  /** CSS 声明：`outline:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'outline:ActiveBorder;';
  /** CSS 声明：`outline:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'outline:ActiveCaption;';
  /** CSS 声明：`outline:ActiveText;`。 */
  readonly ActiveText: string = 'outline:ActiveText;';
  /** CSS 声明：`outline:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'outline:AppWorkspace;';
  /** CSS 声明：`outline:Background;`。 */
  readonly Background: string = 'outline:Background;';
  /** CSS 声明：`outline:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'outline:ButtonBorder;';
  /** CSS 声明：`outline:ButtonFace;`。 */
  readonly ButtonFace: string = 'outline:ButtonFace;';
  /** CSS 声明：`outline:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'outline:ButtonHighlight;';
  /** CSS 声明：`outline:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'outline:ButtonShadow;';
  /** CSS 声明：`outline:ButtonText;`。 */
  readonly ButtonText: string = 'outline:ButtonText;';
  /** CSS 声明：`outline:Canvas;`。 */
  readonly Canvas: string = 'outline:Canvas;';
  /** CSS 声明：`outline:CanvasText;`。 */
  readonly CanvasText: string = 'outline:CanvasText;';
  /** CSS 声明：`outline:CaptionText;`。 */
  readonly CaptionText: string = 'outline:CaptionText;';
  /** CSS 声明：`outline:Field;`。 */
  readonly Field: string = 'outline:Field;';
  /** CSS 声明：`outline:FieldText;`。 */
  readonly FieldText: string = 'outline:FieldText;';
  /** CSS 声明：`outline:GrayText;`。 */
  readonly GrayText: string = 'outline:GrayText;';
  /** CSS 声明：`outline:Highlight;`。 */
  readonly Highlight: string = 'outline:Highlight;';
  /** CSS 声明：`outline:HighlightText;`。 */
  readonly HighlightText: string = 'outline:HighlightText;';
  /** CSS 声明：`outline:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'outline:InactiveBorder;';
  /** CSS 声明：`outline:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'outline:InactiveCaption;';
  /** CSS 声明：`outline:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'outline:InactiveCaptionText;';
  /** CSS 声明：`outline:InfoBackground;`。 */
  readonly InfoBackground: string = 'outline:InfoBackground;';
  /** CSS 声明：`outline:InfoText;`。 */
  readonly InfoText: string = 'outline:InfoText;';
  /** CSS 声明：`outline:LinkText;`。 */
  readonly LinkText: string = 'outline:LinkText;';
  /** CSS 声明：`outline:Mark;`。 */
  readonly Mark: string = 'outline:Mark;';
  /** CSS 声明：`outline:MarkText;`。 */
  readonly MarkText: string = 'outline:MarkText;';
  /** CSS 声明：`outline:Menu;`。 */
  readonly Menu: string = 'outline:Menu;';
  /** CSS 声明：`outline:MenuText;`。 */
  readonly MenuText: string = 'outline:MenuText;';
  /** CSS 声明：`outline:Scrollbar;`。 */
  readonly Scrollbar: string = 'outline:Scrollbar;';
  /** CSS 声明：`outline:SelectedItem;`。 */
  readonly SelectedItem: string = 'outline:SelectedItem;';
  /** CSS 声明：`outline:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'outline:SelectedItemText;';
  /** CSS 声明：`outline:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'outline:ThreeDDarkShadow;';
  /** CSS 声明：`outline:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'outline:ThreeDFace;';
  /** CSS 声明：`outline:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'outline:ThreeDHighlight;';
  /** CSS 声明：`outline:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'outline:ThreeDLightShadow;';
  /** CSS 声明：`outline:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'outline:ThreeDShadow;';
  /** CSS 声明：`outline:VisitedText;`。 */
  readonly VisitedText: string = 'outline:VisitedText;';
  /** CSS 声明：`outline:Window;`。 */
  readonly Window: string = 'outline:Window;';
  /** CSS 声明：`outline:WindowFrame;`。 */
  readonly WindowFrame: string = 'outline:WindowFrame;';
  /** CSS 声明：`outline:WindowText;`。 */
  readonly WindowText: string = 'outline:WindowText;';
  /** CSS 声明：`outline:aliceblue;`。 */
  readonly aliceblue: string = 'outline:aliceblue;';
  /** CSS 声明：`outline:antiquewhite;`。 */
  readonly antiquewhite: string = 'outline:antiquewhite;';
  /** CSS 声明：`outline:aqua;`。 */
  readonly aqua: string = 'outline:aqua;';
  /** CSS 声明：`outline:aquamarine;`。 */
  readonly aquamarine: string = 'outline:aquamarine;';
  /** CSS 声明：`outline:auto;`。 */
  readonly auto: string = 'outline:auto;';
  /** CSS 声明：`outline:azure;`。 */
  readonly azure: string = 'outline:azure;';
  /** CSS 声明：`outline:beige;`。 */
  readonly beige: string = 'outline:beige;';
  /** CSS 声明：`outline:bisque;`。 */
  readonly bisque: string = 'outline:bisque;';
  /** CSS 声明：`outline:black;`。 */
  readonly black: string = 'outline:black;';
  /** CSS 声明：`outline:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'outline:blanchedalmond;';
  /** CSS 声明：`outline:blue;`。 */
  readonly blue: string = 'outline:blue;';
  /** CSS 声明：`outline:blueviolet;`。 */
  readonly blueviolet: string = 'outline:blueviolet;';
  /** CSS 声明：`outline:brown;`。 */
  readonly brown: string = 'outline:brown;';
  /** CSS 声明：`outline:burlywood;`。 */
  readonly burlywood: string = 'outline:burlywood;';
  /** CSS 声明：`outline:cadetblue;`。 */
  readonly cadetblue: string = 'outline:cadetblue;';
  /** CSS 声明：`outline:chartreuse;`。 */
  readonly chartreuse: string = 'outline:chartreuse;';
  /** CSS 声明：`outline:chocolate;`。 */
  readonly chocolate: string = 'outline:chocolate;';
  /** CSS 声明：`outline:coral;`。 */
  readonly coral: string = 'outline:coral;';
  /** CSS 声明：`outline:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'outline:cornflowerblue;';
  /** CSS 声明：`outline:cornsilk;`。 */
  readonly cornsilk: string = 'outline:cornsilk;';
  /** CSS 声明：`outline:crimson;`。 */
  readonly crimson: string = 'outline:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`outline:currentColor;`。
   */
  readonly currentColor: string = 'outline:currentColor;';
  /** CSS 声明：`outline:cyan;`。 */
  readonly cyan: string = 'outline:cyan;';
  /** CSS 声明：`outline:darkblue;`。 */
  readonly darkblue: string = 'outline:darkblue;';
  /** CSS 声明：`outline:darkcyan;`。 */
  readonly darkcyan: string = 'outline:darkcyan;';
  /** CSS 声明：`outline:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'outline:darkgoldenrod;';
  /** CSS 声明：`outline:darkgray;`。 */
  readonly darkgray: string = 'outline:darkgray;';
  /** CSS 声明：`outline:darkgreen;`。 */
  readonly darkgreen: string = 'outline:darkgreen;';
  /** CSS 声明：`outline:darkgrey;`。 */
  readonly darkgrey: string = 'outline:darkgrey;';
  /** CSS 声明：`outline:darkkhaki;`。 */
  readonly darkkhaki: string = 'outline:darkkhaki;';
  /** CSS 声明：`outline:darkmagenta;`。 */
  readonly darkmagenta: string = 'outline:darkmagenta;';
  /** CSS 声明：`outline:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'outline:darkolivegreen;';
  /** CSS 声明：`outline:darkorange;`。 */
  readonly darkorange: string = 'outline:darkorange;';
  /** CSS 声明：`outline:darkorchid;`。 */
  readonly darkorchid: string = 'outline:darkorchid;';
  /** CSS 声明：`outline:darkred;`。 */
  readonly darkred: string = 'outline:darkred;';
  /** CSS 声明：`outline:darksalmon;`。 */
  readonly darksalmon: string = 'outline:darksalmon;';
  /** CSS 声明：`outline:darkseagreen;`。 */
  readonly darkseagreen: string = 'outline:darkseagreen;';
  /** CSS 声明：`outline:darkslateblue;`。 */
  readonly darkslateblue: string = 'outline:darkslateblue;';
  /** CSS 声明：`outline:darkslategray;`。 */
  readonly darkslategray: string = 'outline:darkslategray;';
  /** CSS 声明：`outline:darkslategrey;`。 */
  readonly darkslategrey: string = 'outline:darkslategrey;';
  /** CSS 声明：`outline:darkturquoise;`。 */
  readonly darkturquoise: string = 'outline:darkturquoise;';
  /** CSS 声明：`outline:darkviolet;`。 */
  readonly darkviolet: string = 'outline:darkviolet;';
  /** CSS 声明：`outline:dashed;`。 */
  readonly dashed: string = 'outline:dashed;';
  /** CSS 声明：`outline:deeppink;`。 */
  readonly deeppink: string = 'outline:deeppink;';
  /** CSS 声明：`outline:deepskyblue;`。 */
  readonly deepskyblue: string = 'outline:deepskyblue;';
  /** CSS 声明：`outline:dimgray;`。 */
  readonly dimgray: string = 'outline:dimgray;';
  /** CSS 声明：`outline:dimgrey;`。 */
  readonly dimgrey: string = 'outline:dimgrey;';
  /** CSS 声明：`outline:dodgerblue;`。 */
  readonly dodgerblue: string = 'outline:dodgerblue;';
  /** CSS 声明：`outline:dotted;`。 */
  readonly dotted: string = 'outline:dotted;';
  /** CSS 声明：`outline:double;`。 */
  readonly double: string = 'outline:double;';
  /** CSS 声明：`outline:firebrick;`。 */
  readonly firebrick: string = 'outline:firebrick;';
  /** CSS 声明：`outline:floralwhite;`。 */
  readonly floralwhite: string = 'outline:floralwhite;';
  /** CSS 声明：`outline:forestgreen;`。 */
  readonly forestgreen: string = 'outline:forestgreen;';
  /** CSS 声明：`outline:fuchsia;`。 */
  readonly fuchsia: string = 'outline:fuchsia;';
  /** CSS 声明：`outline:gainsboro;`。 */
  readonly gainsboro: string = 'outline:gainsboro;';
  /** CSS 声明：`outline:ghostwhite;`。 */
  readonly ghostwhite: string = 'outline:ghostwhite;';
  /** CSS 声明：`outline:gold;`。 */
  readonly gold: string = 'outline:gold;';
  /** CSS 声明：`outline:goldenrod;`。 */
  readonly goldenrod: string = 'outline:goldenrod;';
  /** CSS 声明：`outline:gray;`。 */
  readonly gray: string = 'outline:gray;';
  /** CSS 声明：`outline:green;`。 */
  readonly green: string = 'outline:green;';
  /** CSS 声明：`outline:greenyellow;`。 */
  readonly greenyellow: string = 'outline:greenyellow;';
  /** CSS 声明：`outline:grey;`。 */
  readonly grey: string = 'outline:grey;';
  /** CSS 声明：`outline:groove;`。 */
  readonly groove: string = 'outline:groove;';
  /** CSS 声明：`outline:honeydew;`。 */
  readonly honeydew: string = 'outline:honeydew;';
  /** CSS 声明：`outline:hotpink;`。 */
  readonly hotpink: string = 'outline:hotpink;';
  /** CSS 声明：`outline:indianred;`。 */
  readonly indianred: string = 'outline:indianred;';
  /** CSS 声明：`outline:indigo;`。 */
  readonly indigo: string = 'outline:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline:inherit;`。
   */
  readonly inherit: string = 'outline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline:initial;`。
   */
  readonly initial: string = 'outline:initial;';
  /** CSS 声明：`outline:inset;`。 */
  readonly inset: string = 'outline:inset;';
  /** CSS 声明：`outline:ivory;`。 */
  readonly ivory: string = 'outline:ivory;';
  /** CSS 声明：`outline:khaki;`。 */
  readonly khaki: string = 'outline:khaki;';
  /** CSS 声明：`outline:lavender;`。 */
  readonly lavender: string = 'outline:lavender;';
  /** CSS 声明：`outline:lavenderblush;`。 */
  readonly lavenderblush: string = 'outline:lavenderblush;';
  /** CSS 声明：`outline:lawngreen;`。 */
  readonly lawngreen: string = 'outline:lawngreen;';
  /** CSS 声明：`outline:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'outline:lemonchiffon;';
  /** CSS 声明：`outline:lightblue;`。 */
  readonly lightblue: string = 'outline:lightblue;';
  /** CSS 声明：`outline:lightcoral;`。 */
  readonly lightcoral: string = 'outline:lightcoral;';
  /** CSS 声明：`outline:lightcyan;`。 */
  readonly lightcyan: string = 'outline:lightcyan;';
  /** CSS 声明：`outline:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'outline:lightgoldenrodyellow;';
  /** CSS 声明：`outline:lightgray;`。 */
  readonly lightgray: string = 'outline:lightgray;';
  /** CSS 声明：`outline:lightgreen;`。 */
  readonly lightgreen: string = 'outline:lightgreen;';
  /** CSS 声明：`outline:lightgrey;`。 */
  readonly lightgrey: string = 'outline:lightgrey;';
  /** CSS 声明：`outline:lightpink;`。 */
  readonly lightpink: string = 'outline:lightpink;';
  /** CSS 声明：`outline:lightsalmon;`。 */
  readonly lightsalmon: string = 'outline:lightsalmon;';
  /** CSS 声明：`outline:lightseagreen;`。 */
  readonly lightseagreen: string = 'outline:lightseagreen;';
  /** CSS 声明：`outline:lightskyblue;`。 */
  readonly lightskyblue: string = 'outline:lightskyblue;';
  /** CSS 声明：`outline:lightslategray;`。 */
  readonly lightslategray: string = 'outline:lightslategray;';
  /** CSS 声明：`outline:lightslategrey;`。 */
  readonly lightslategrey: string = 'outline:lightslategrey;';
  /** CSS 声明：`outline:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'outline:lightsteelblue;';
  /** CSS 声明：`outline:lightyellow;`。 */
  readonly lightyellow: string = 'outline:lightyellow;';
  /** CSS 声明：`outline:lime;`。 */
  readonly lime: string = 'outline:lime;';
  /** CSS 声明：`outline:limegreen;`。 */
  readonly limegreen: string = 'outline:limegreen;';
  /** CSS 声明：`outline:linen;`。 */
  readonly linen: string = 'outline:linen;';
  /** CSS 声明：`outline:magenta;`。 */
  readonly magenta: string = 'outline:magenta;';
  /** CSS 声明：`outline:maroon;`。 */
  readonly maroon: string = 'outline:maroon;';
  /** CSS 声明：`outline:medium;`。 */
  readonly medium: string = 'outline:medium;';
  /** CSS 声明：`outline:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'outline:mediumaquamarine;';
  /** CSS 声明：`outline:mediumblue;`。 */
  readonly mediumblue: string = 'outline:mediumblue;';
  /** CSS 声明：`outline:mediumorchid;`。 */
  readonly mediumorchid: string = 'outline:mediumorchid;';
  /** CSS 声明：`outline:mediumpurple;`。 */
  readonly mediumpurple: string = 'outline:mediumpurple;';
  /** CSS 声明：`outline:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'outline:mediumseagreen;';
  /** CSS 声明：`outline:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'outline:mediumslateblue;';
  /** CSS 声明：`outline:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'outline:mediumspringgreen;';
  /** CSS 声明：`outline:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'outline:mediumturquoise;';
  /** CSS 声明：`outline:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'outline:mediumvioletred;';
  /** CSS 声明：`outline:midnightblue;`。 */
  readonly midnightblue: string = 'outline:midnightblue;';
  /** CSS 声明：`outline:mintcream;`。 */
  readonly mintcream: string = 'outline:mintcream;';
  /** CSS 声明：`outline:mistyrose;`。 */
  readonly mistyrose: string = 'outline:mistyrose;';
  /** CSS 声明：`outline:moccasin;`。 */
  readonly moccasin: string = 'outline:moccasin;';
  /** CSS 声明：`outline:navajowhite;`。 */
  readonly navajowhite: string = 'outline:navajowhite;';
  /** CSS 声明：`outline:navy;`。 */
  readonly navy: string = 'outline:navy;';
  /** CSS 声明：`outline:none;`。 */
  readonly none: string = 'outline:none;';
  /** CSS 声明：`outline:oldlace;`。 */
  readonly oldlace: string = 'outline:oldlace;';
  /** CSS 声明：`outline:olive;`。 */
  readonly olive: string = 'outline:olive;';
  /** CSS 声明：`outline:olivedrab;`。 */
  readonly olivedrab: string = 'outline:olivedrab;';
  /** CSS 声明：`outline:orange;`。 */
  readonly orange: string = 'outline:orange;';
  /** CSS 声明：`outline:orangered;`。 */
  readonly orangered: string = 'outline:orangered;';
  /** CSS 声明：`outline:orchid;`。 */
  readonly orchid: string = 'outline:orchid;';
  /** CSS 声明：`outline:outset;`。 */
  readonly outset: string = 'outline:outset;';
  /** CSS 声明：`outline:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'outline:palegoldenrod;';
  /** CSS 声明：`outline:palegreen;`。 */
  readonly palegreen: string = 'outline:palegreen;';
  /** CSS 声明：`outline:paleturquoise;`。 */
  readonly paleturquoise: string = 'outline:paleturquoise;';
  /** CSS 声明：`outline:palevioletred;`。 */
  readonly palevioletred: string = 'outline:palevioletred;';
  /** CSS 声明：`outline:papayawhip;`。 */
  readonly papayawhip: string = 'outline:papayawhip;';
  /** CSS 声明：`outline:peachpuff;`。 */
  readonly peachpuff: string = 'outline:peachpuff;';
  /** CSS 声明：`outline:peru;`。 */
  readonly peru: string = 'outline:peru;';
  /** CSS 声明：`outline:pink;`。 */
  readonly pink: string = 'outline:pink;';
  /** CSS 声明：`outline:plum;`。 */
  readonly plum: string = 'outline:plum;';
  /** CSS 声明：`outline:powderblue;`。 */
  readonly powderblue: string = 'outline:powderblue;';
  /** CSS 声明：`outline:purple;`。 */
  readonly purple: string = 'outline:purple;';
  /** CSS 声明：`outline:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'outline:rebeccapurple;';
  /** CSS 声明：`outline:red;`。 */
  readonly red: string = 'outline:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline:revert;`。
   */
  readonly revert: string = 'outline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline:revert-layer;`。
   */
  readonly revertLayer: string = 'outline:revert-layer;';
  /** CSS 声明：`outline:ridge;`。 */
  readonly ridge: string = 'outline:ridge;';
  /** CSS 声明：`outline:rosybrown;`。 */
  readonly rosybrown: string = 'outline:rosybrown;';
  /** CSS 声明：`outline:royalblue;`。 */
  readonly royalblue: string = 'outline:royalblue;';
  /** CSS 声明：`outline:saddlebrown;`。 */
  readonly saddlebrown: string = 'outline:saddlebrown;';
  /** CSS 声明：`outline:salmon;`。 */
  readonly salmon: string = 'outline:salmon;';
  /** CSS 声明：`outline:sandybrown;`。 */
  readonly sandybrown: string = 'outline:sandybrown;';
  /** CSS 声明：`outline:seagreen;`。 */
  readonly seagreen: string = 'outline:seagreen;';
  /** CSS 声明：`outline:seashell;`。 */
  readonly seashell: string = 'outline:seashell;';
  /** CSS 声明：`outline:sienna;`。 */
  readonly sienna: string = 'outline:sienna;';
  /** CSS 声明：`outline:silver;`。 */
  readonly silver: string = 'outline:silver;';
  /** CSS 声明：`outline:skyblue;`。 */
  readonly skyblue: string = 'outline:skyblue;';
  /** CSS 声明：`outline:slateblue;`。 */
  readonly slateblue: string = 'outline:slateblue;';
  /** CSS 声明：`outline:slategray;`。 */
  readonly slategray: string = 'outline:slategray;';
  /** CSS 声明：`outline:slategrey;`。 */
  readonly slategrey: string = 'outline:slategrey;';
  /** CSS 声明：`outline:snow;`。 */
  readonly snow: string = 'outline:snow;';
  /** CSS 声明：`outline:solid;`。 */
  readonly solid: string = 'outline:solid;';
  /** CSS 声明：`outline:springgreen;`。 */
  readonly springgreen: string = 'outline:springgreen;';
  /** CSS 声明：`outline:steelblue;`。 */
  readonly steelblue: string = 'outline:steelblue;';
  /** CSS 声明：`outline:tan;`。 */
  readonly tan: string = 'outline:tan;';
  /** CSS 声明：`outline:teal;`。 */
  readonly teal: string = 'outline:teal;';
  /** CSS 声明：`outline:thick;`。 */
  readonly thick: string = 'outline:thick;';
  /** CSS 声明：`outline:thin;`。 */
  readonly thin: string = 'outline:thin;';
  /** CSS 声明：`outline:thistle;`。 */
  readonly thistle: string = 'outline:thistle;';
  /** CSS 声明：`outline:tomato;`。 */
  readonly tomato: string = 'outline:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`outline:transparent;`。
   */
  readonly transparent: string = 'outline:transparent;';
  /** CSS 声明：`outline:turquoise;`。 */
  readonly turquoise: string = 'outline:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline:unset;`。
   */
  readonly unset: string = 'outline:unset;';
  /** CSS 声明：`outline:violet;`。 */
  readonly violet: string = 'outline:violet;';
  /** CSS 声明：`outline:wheat;`。 */
  readonly wheat: string = 'outline:wheat;';
  /** CSS 声明：`outline:white;`。 */
  readonly white: string = 'outline:white;';
  /** CSS 声明：`outline:whitesmoke;`。 */
  readonly whitesmoke: string = 'outline:whitesmoke;';
  /** CSS 声明：`outline:yellow;`。 */
  readonly yellow: string = 'outline:yellow;';
  /** CSS 声明：`outline:yellowgreen;`。 */
  readonly yellowgreen: string = 'outline:yellowgreen;';
  /**
   * 创建 outline 属性作者；普通使用通过 s.outline 取得共享实例。
   * @example
   * class CustomOutlineCss extends OutlineCss {}
   */
  constructor() {
    super('outline');
  }
  /**
   * 原样生成 outline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 outline:value;。
   * @example
   * s.outline.raw('inherit') // outline:inherit;
   */
  raw(value: Property.Outline | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.outline.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.outline.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.outline.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.outline.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.outline.calc('var(--value) * 2')
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
   * s.outline.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Outline | CssString, ...others: (Property.Outline | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.outline.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Outline | CssString, ...others: (Property.Outline | CssString)[]): string {
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
   * s.outline.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Outline | CssString,
    preferred: Property.Outline | CssString,
    maximum: Property.Outline | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * outline-color 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OutlineColorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:AccentColor;`。 */
  readonly AccentColor: Property.OutlineColor | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:AccentColorText;`。 */
  readonly AccentColorText: Property.OutlineColor | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ActiveBorder;`。 */
  readonly ActiveBorder: Property.OutlineColor | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ActiveCaption;`。 */
  readonly ActiveCaption: Property.OutlineColor | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ActiveText;`。 */
  readonly ActiveText: Property.OutlineColor | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:AppWorkspace;`。 */
  readonly AppWorkspace: Property.OutlineColor | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Background;`。 */
  readonly Background: Property.OutlineColor | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ButtonBorder;`。 */
  readonly ButtonBorder: Property.OutlineColor | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ButtonFace;`。 */
  readonly ButtonFace: Property.OutlineColor | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.OutlineColor | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ButtonShadow;`。 */
  readonly ButtonShadow: Property.OutlineColor | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ButtonText;`。 */
  readonly ButtonText: Property.OutlineColor | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Canvas;`。 */
  readonly Canvas: Property.OutlineColor | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:CanvasText;`。 */
  readonly CanvasText: Property.OutlineColor | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:CaptionText;`。 */
  readonly CaptionText: Property.OutlineColor | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Field;`。 */
  readonly Field: Property.OutlineColor | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:FieldText;`。 */
  readonly FieldText: Property.OutlineColor | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:GrayText;`。 */
  readonly GrayText: Property.OutlineColor | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Highlight;`。 */
  readonly Highlight: Property.OutlineColor | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:HighlightText;`。 */
  readonly HighlightText: Property.OutlineColor | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:InactiveBorder;`。 */
  readonly InactiveBorder: Property.OutlineColor | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:InactiveCaption;`。 */
  readonly InactiveCaption: Property.OutlineColor | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.OutlineColor | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:InfoBackground;`。 */
  readonly InfoBackground: Property.OutlineColor | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:InfoText;`。 */
  readonly InfoText: Property.OutlineColor | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:LinkText;`。 */
  readonly LinkText: Property.OutlineColor | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Mark;`。 */
  readonly Mark: Property.OutlineColor | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:MarkText;`。 */
  readonly MarkText: Property.OutlineColor | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Menu;`。 */
  readonly Menu: Property.OutlineColor | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:MenuText;`。 */
  readonly MenuText: Property.OutlineColor | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Scrollbar;`。 */
  readonly Scrollbar: Property.OutlineColor | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:SelectedItem;`。 */
  readonly SelectedItem: Property.OutlineColor | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:SelectedItemText;`。 */
  readonly SelectedItemText: Property.OutlineColor | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.OutlineColor | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ThreeDFace;`。 */
  readonly ThreeDFace: Property.OutlineColor | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.OutlineColor | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.OutlineColor | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.OutlineColor | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:VisitedText;`。 */
  readonly VisitedText: Property.OutlineColor | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:Window;`。 */
  readonly Window: Property.OutlineColor | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:WindowFrame;`。 */
  readonly WindowFrame: Property.OutlineColor | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:WindowText;`。 */
  readonly WindowText: Property.OutlineColor | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:aliceblue;`。 */
  readonly aliceblue: Property.OutlineColor | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:antiquewhite;`。 */
  readonly antiquewhite: Property.OutlineColor | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:aqua;`。 */
  readonly aqua: Property.OutlineColor | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:aquamarine;`。 */
  readonly aquamarine: Property.OutlineColor | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:auto;`。 */
  readonly auto: Property.OutlineColor | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:azure;`。 */
  readonly azure: Property.OutlineColor | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:beige;`。 */
  readonly beige: Property.OutlineColor | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:bisque;`。 */
  readonly bisque: Property.OutlineColor | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:black;`。 */
  readonly black: Property.OutlineColor | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:blanchedalmond;`。 */
  readonly blanchedalmond: Property.OutlineColor | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:blue;`。 */
  readonly blue: Property.OutlineColor | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:blueviolet;`。 */
  readonly blueviolet: Property.OutlineColor | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:brown;`。 */
  readonly brown: Property.OutlineColor | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:burlywood;`。 */
  readonly burlywood: Property.OutlineColor | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:cadetblue;`。 */
  readonly cadetblue: Property.OutlineColor | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:chartreuse;`。 */
  readonly chartreuse: Property.OutlineColor | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:chocolate;`。 */
  readonly chocolate: Property.OutlineColor | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:coral;`。 */
  readonly coral: Property.OutlineColor | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:cornflowerblue;`。 */
  readonly cornflowerblue: Property.OutlineColor | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:cornsilk;`。 */
  readonly cornsilk: Property.OutlineColor | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:crimson;`。 */
  readonly crimson: Property.OutlineColor | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`outline-color:currentColor;`。
   */
  readonly currentColor: Property.OutlineColor | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:cyan;`。 */
  readonly cyan: Property.OutlineColor | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkblue;`。 */
  readonly darkblue: Property.OutlineColor | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkcyan;`。 */
  readonly darkcyan: Property.OutlineColor | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.OutlineColor | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkgray;`。 */
  readonly darkgray: Property.OutlineColor | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkgreen;`。 */
  readonly darkgreen: Property.OutlineColor | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkgrey;`。 */
  readonly darkgrey: Property.OutlineColor | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkkhaki;`。 */
  readonly darkkhaki: Property.OutlineColor | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkmagenta;`。 */
  readonly darkmagenta: Property.OutlineColor | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkolivegreen;`。 */
  readonly darkolivegreen: Property.OutlineColor | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkorange;`。 */
  readonly darkorange: Property.OutlineColor | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkorchid;`。 */
  readonly darkorchid: Property.OutlineColor | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkred;`。 */
  readonly darkred: Property.OutlineColor | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darksalmon;`。 */
  readonly darksalmon: Property.OutlineColor | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkseagreen;`。 */
  readonly darkseagreen: Property.OutlineColor | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkslateblue;`。 */
  readonly darkslateblue: Property.OutlineColor | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkslategray;`。 */
  readonly darkslategray: Property.OutlineColor | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkslategrey;`。 */
  readonly darkslategrey: Property.OutlineColor | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkturquoise;`。 */
  readonly darkturquoise: Property.OutlineColor | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:darkviolet;`。 */
  readonly darkviolet: Property.OutlineColor | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:deeppink;`。 */
  readonly deeppink: Property.OutlineColor | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:deepskyblue;`。 */
  readonly deepskyblue: Property.OutlineColor | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:dimgray;`。 */
  readonly dimgray: Property.OutlineColor | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:dimgrey;`。 */
  readonly dimgrey: Property.OutlineColor | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:dodgerblue;`。 */
  readonly dodgerblue: Property.OutlineColor | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:firebrick;`。 */
  readonly firebrick: Property.OutlineColor | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:floralwhite;`。 */
  readonly floralwhite: Property.OutlineColor | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:forestgreen;`。 */
  readonly forestgreen: Property.OutlineColor | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:fuchsia;`。 */
  readonly fuchsia: Property.OutlineColor | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:gainsboro;`。 */
  readonly gainsboro: Property.OutlineColor | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ghostwhite;`。 */
  readonly ghostwhite: Property.OutlineColor | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:gold;`。 */
  readonly gold: Property.OutlineColor | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:goldenrod;`。 */
  readonly goldenrod: Property.OutlineColor | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:gray;`。 */
  readonly gray: Property.OutlineColor | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:green;`。 */
  readonly green: Property.OutlineColor | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:greenyellow;`。 */
  readonly greenyellow: Property.OutlineColor | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:grey;`。 */
  readonly grey: Property.OutlineColor | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:honeydew;`。 */
  readonly honeydew: Property.OutlineColor | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:hotpink;`。 */
  readonly hotpink: Property.OutlineColor | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:indianred;`。 */
  readonly indianred: Property.OutlineColor | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:indigo;`。 */
  readonly indigo: Property.OutlineColor | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-color:inherit;`。
   */
  readonly inherit: Property.OutlineColor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-color:initial;`。
   */
  readonly initial: Property.OutlineColor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:ivory;`。 */
  readonly ivory: Property.OutlineColor | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:khaki;`。 */
  readonly khaki: Property.OutlineColor | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lavender;`。 */
  readonly lavender: Property.OutlineColor | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lavenderblush;`。 */
  readonly lavenderblush: Property.OutlineColor | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lawngreen;`。 */
  readonly lawngreen: Property.OutlineColor | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lemonchiffon;`。 */
  readonly lemonchiffon: Property.OutlineColor | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightblue;`。 */
  readonly lightblue: Property.OutlineColor | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightcoral;`。 */
  readonly lightcoral: Property.OutlineColor | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightcyan;`。 */
  readonly lightcyan: Property.OutlineColor | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.OutlineColor | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightgray;`。 */
  readonly lightgray: Property.OutlineColor | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightgreen;`。 */
  readonly lightgreen: Property.OutlineColor | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightgrey;`。 */
  readonly lightgrey: Property.OutlineColor | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightpink;`。 */
  readonly lightpink: Property.OutlineColor | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightsalmon;`。 */
  readonly lightsalmon: Property.OutlineColor | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightseagreen;`。 */
  readonly lightseagreen: Property.OutlineColor | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightskyblue;`。 */
  readonly lightskyblue: Property.OutlineColor | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightslategray;`。 */
  readonly lightslategray: Property.OutlineColor | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightslategrey;`。 */
  readonly lightslategrey: Property.OutlineColor | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightsteelblue;`。 */
  readonly lightsteelblue: Property.OutlineColor | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lightyellow;`。 */
  readonly lightyellow: Property.OutlineColor | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:lime;`。 */
  readonly lime: Property.OutlineColor | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:limegreen;`。 */
  readonly limegreen: Property.OutlineColor | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:linen;`。 */
  readonly linen: Property.OutlineColor | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:magenta;`。 */
  readonly magenta: Property.OutlineColor | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:maroon;`。 */
  readonly maroon: Property.OutlineColor | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.OutlineColor | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumblue;`。 */
  readonly mediumblue: Property.OutlineColor | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumorchid;`。 */
  readonly mediumorchid: Property.OutlineColor | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumpurple;`。 */
  readonly mediumpurple: Property.OutlineColor | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumseagreen;`。 */
  readonly mediumseagreen: Property.OutlineColor | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumslateblue;`。 */
  readonly mediumslateblue: Property.OutlineColor | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.OutlineColor | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumturquoise;`。 */
  readonly mediumturquoise: Property.OutlineColor | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mediumvioletred;`。 */
  readonly mediumvioletred: Property.OutlineColor | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:midnightblue;`。 */
  readonly midnightblue: Property.OutlineColor | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mintcream;`。 */
  readonly mintcream: Property.OutlineColor | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:mistyrose;`。 */
  readonly mistyrose: Property.OutlineColor | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:moccasin;`。 */
  readonly moccasin: Property.OutlineColor | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:navajowhite;`。 */
  readonly navajowhite: Property.OutlineColor | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:navy;`。 */
  readonly navy: Property.OutlineColor | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:oldlace;`。 */
  readonly oldlace: Property.OutlineColor | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:olive;`。 */
  readonly olive: Property.OutlineColor | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:olivedrab;`。 */
  readonly olivedrab: Property.OutlineColor | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:orange;`。 */
  readonly orange: Property.OutlineColor | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:orangered;`。 */
  readonly orangered: Property.OutlineColor | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:orchid;`。 */
  readonly orchid: Property.OutlineColor | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:palegoldenrod;`。 */
  readonly palegoldenrod: Property.OutlineColor | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:palegreen;`。 */
  readonly palegreen: Property.OutlineColor | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:paleturquoise;`。 */
  readonly paleturquoise: Property.OutlineColor | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:palevioletred;`。 */
  readonly palevioletred: Property.OutlineColor | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:papayawhip;`。 */
  readonly papayawhip: Property.OutlineColor | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:peachpuff;`。 */
  readonly peachpuff: Property.OutlineColor | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:peru;`。 */
  readonly peru: Property.OutlineColor | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:pink;`。 */
  readonly pink: Property.OutlineColor | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:plum;`。 */
  readonly plum: Property.OutlineColor | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:powderblue;`。 */
  readonly powderblue: Property.OutlineColor | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:purple;`。 */
  readonly purple: Property.OutlineColor | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:rebeccapurple;`。 */
  readonly rebeccapurple: Property.OutlineColor | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:red;`。 */
  readonly red: Property.OutlineColor | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-color:revert;`。
   */
  readonly revert: Property.OutlineColor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-color:revert-layer;`。
   */
  readonly revertLayer: Property.OutlineColor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:rosybrown;`。 */
  readonly rosybrown: Property.OutlineColor | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:royalblue;`。 */
  readonly royalblue: Property.OutlineColor | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:saddlebrown;`。 */
  readonly saddlebrown: Property.OutlineColor | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:salmon;`。 */
  readonly salmon: Property.OutlineColor | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:sandybrown;`。 */
  readonly sandybrown: Property.OutlineColor | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:seagreen;`。 */
  readonly seagreen: Property.OutlineColor | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:seashell;`。 */
  readonly seashell: Property.OutlineColor | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:sienna;`。 */
  readonly sienna: Property.OutlineColor | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:silver;`。 */
  readonly silver: Property.OutlineColor | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:skyblue;`。 */
  readonly skyblue: Property.OutlineColor | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:slateblue;`。 */
  readonly slateblue: Property.OutlineColor | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:slategray;`。 */
  readonly slategray: Property.OutlineColor | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:slategrey;`。 */
  readonly slategrey: Property.OutlineColor | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:snow;`。 */
  readonly snow: Property.OutlineColor | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:springgreen;`。 */
  readonly springgreen: Property.OutlineColor | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:steelblue;`。 */
  readonly steelblue: Property.OutlineColor | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:tan;`。 */
  readonly tan: Property.OutlineColor | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:teal;`。 */
  readonly teal: Property.OutlineColor | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:thistle;`。 */
  readonly thistle: Property.OutlineColor | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:tomato;`。 */
  readonly tomato: Property.OutlineColor | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`outline-color:transparent;`。
   */
  readonly transparent: Property.OutlineColor | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:turquoise;`。 */
  readonly turquoise: Property.OutlineColor | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-color:unset;`。
   */
  readonly unset: Property.OutlineColor | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:violet;`。 */
  readonly violet: Property.OutlineColor | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:wheat;`。 */
  readonly wheat: Property.OutlineColor | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:white;`。 */
  readonly white: Property.OutlineColor | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:whitesmoke;`。 */
  readonly whitesmoke: Property.OutlineColor | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:yellow;`。 */
  readonly yellow: Property.OutlineColor | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-color:yellowgreen;`。 */
  readonly yellowgreen: Property.OutlineColor | CssString = 'yellowgreen';
}

/**
 * 设置轮廓线颜色。（outline-color）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
 */
export class OutlineColorCss extends CssProperty {
  /** CSS 声明：`outline-color:AccentColor;`。 */
  readonly AccentColor: string = 'outline-color:AccentColor;';
  /** CSS 声明：`outline-color:AccentColorText;`。 */
  readonly AccentColorText: string = 'outline-color:AccentColorText;';
  /** CSS 声明：`outline-color:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'outline-color:ActiveBorder;';
  /** CSS 声明：`outline-color:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'outline-color:ActiveCaption;';
  /** CSS 声明：`outline-color:ActiveText;`。 */
  readonly ActiveText: string = 'outline-color:ActiveText;';
  /** CSS 声明：`outline-color:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'outline-color:AppWorkspace;';
  /** CSS 声明：`outline-color:Background;`。 */
  readonly Background: string = 'outline-color:Background;';
  /** CSS 声明：`outline-color:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'outline-color:ButtonBorder;';
  /** CSS 声明：`outline-color:ButtonFace;`。 */
  readonly ButtonFace: string = 'outline-color:ButtonFace;';
  /** CSS 声明：`outline-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'outline-color:ButtonHighlight;';
  /** CSS 声明：`outline-color:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'outline-color:ButtonShadow;';
  /** CSS 声明：`outline-color:ButtonText;`。 */
  readonly ButtonText: string = 'outline-color:ButtonText;';
  /** CSS 声明：`outline-color:Canvas;`。 */
  readonly Canvas: string = 'outline-color:Canvas;';
  /** CSS 声明：`outline-color:CanvasText;`。 */
  readonly CanvasText: string = 'outline-color:CanvasText;';
  /** CSS 声明：`outline-color:CaptionText;`。 */
  readonly CaptionText: string = 'outline-color:CaptionText;';
  /** CSS 声明：`outline-color:Field;`。 */
  readonly Field: string = 'outline-color:Field;';
  /** CSS 声明：`outline-color:FieldText;`。 */
  readonly FieldText: string = 'outline-color:FieldText;';
  /** CSS 声明：`outline-color:GrayText;`。 */
  readonly GrayText: string = 'outline-color:GrayText;';
  /** CSS 声明：`outline-color:Highlight;`。 */
  readonly Highlight: string = 'outline-color:Highlight;';
  /** CSS 声明：`outline-color:HighlightText;`。 */
  readonly HighlightText: string = 'outline-color:HighlightText;';
  /** CSS 声明：`outline-color:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'outline-color:InactiveBorder;';
  /** CSS 声明：`outline-color:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'outline-color:InactiveCaption;';
  /** CSS 声明：`outline-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'outline-color:InactiveCaptionText;';
  /** CSS 声明：`outline-color:InfoBackground;`。 */
  readonly InfoBackground: string = 'outline-color:InfoBackground;';
  /** CSS 声明：`outline-color:InfoText;`。 */
  readonly InfoText: string = 'outline-color:InfoText;';
  /** CSS 声明：`outline-color:LinkText;`。 */
  readonly LinkText: string = 'outline-color:LinkText;';
  /** CSS 声明：`outline-color:Mark;`。 */
  readonly Mark: string = 'outline-color:Mark;';
  /** CSS 声明：`outline-color:MarkText;`。 */
  readonly MarkText: string = 'outline-color:MarkText;';
  /** CSS 声明：`outline-color:Menu;`。 */
  readonly Menu: string = 'outline-color:Menu;';
  /** CSS 声明：`outline-color:MenuText;`。 */
  readonly MenuText: string = 'outline-color:MenuText;';
  /** CSS 声明：`outline-color:Scrollbar;`。 */
  readonly Scrollbar: string = 'outline-color:Scrollbar;';
  /** CSS 声明：`outline-color:SelectedItem;`。 */
  readonly SelectedItem: string = 'outline-color:SelectedItem;';
  /** CSS 声明：`outline-color:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'outline-color:SelectedItemText;';
  /** CSS 声明：`outline-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'outline-color:ThreeDDarkShadow;';
  /** CSS 声明：`outline-color:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'outline-color:ThreeDFace;';
  /** CSS 声明：`outline-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'outline-color:ThreeDHighlight;';
  /** CSS 声明：`outline-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'outline-color:ThreeDLightShadow;';
  /** CSS 声明：`outline-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'outline-color:ThreeDShadow;';
  /** CSS 声明：`outline-color:VisitedText;`。 */
  readonly VisitedText: string = 'outline-color:VisitedText;';
  /** CSS 声明：`outline-color:Window;`。 */
  readonly Window: string = 'outline-color:Window;';
  /** CSS 声明：`outline-color:WindowFrame;`。 */
  readonly WindowFrame: string = 'outline-color:WindowFrame;';
  /** CSS 声明：`outline-color:WindowText;`。 */
  readonly WindowText: string = 'outline-color:WindowText;';
  /** CSS 声明：`outline-color:aliceblue;`。 */
  readonly aliceblue: string = 'outline-color:aliceblue;';
  /** CSS 声明：`outline-color:antiquewhite;`。 */
  readonly antiquewhite: string = 'outline-color:antiquewhite;';
  /** CSS 声明：`outline-color:aqua;`。 */
  readonly aqua: string = 'outline-color:aqua;';
  /** CSS 声明：`outline-color:aquamarine;`。 */
  readonly aquamarine: string = 'outline-color:aquamarine;';
  /** CSS 声明：`outline-color:auto;`。 */
  readonly auto: string = 'outline-color:auto;';
  /** CSS 声明：`outline-color:azure;`。 */
  readonly azure: string = 'outline-color:azure;';
  /** CSS 声明：`outline-color:beige;`。 */
  readonly beige: string = 'outline-color:beige;';
  /** CSS 声明：`outline-color:bisque;`。 */
  readonly bisque: string = 'outline-color:bisque;';
  /** CSS 声明：`outline-color:black;`。 */
  readonly black: string = 'outline-color:black;';
  /** CSS 声明：`outline-color:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'outline-color:blanchedalmond;';
  /** CSS 声明：`outline-color:blue;`。 */
  readonly blue: string = 'outline-color:blue;';
  /** CSS 声明：`outline-color:blueviolet;`。 */
  readonly blueviolet: string = 'outline-color:blueviolet;';
  /** CSS 声明：`outline-color:brown;`。 */
  readonly brown: string = 'outline-color:brown;';
  /** CSS 声明：`outline-color:burlywood;`。 */
  readonly burlywood: string = 'outline-color:burlywood;';
  /** CSS 声明：`outline-color:cadetblue;`。 */
  readonly cadetblue: string = 'outline-color:cadetblue;';
  /** CSS 声明：`outline-color:chartreuse;`。 */
  readonly chartreuse: string = 'outline-color:chartreuse;';
  /** CSS 声明：`outline-color:chocolate;`。 */
  readonly chocolate: string = 'outline-color:chocolate;';
  /** CSS 声明：`outline-color:coral;`。 */
  readonly coral: string = 'outline-color:coral;';
  /** CSS 声明：`outline-color:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'outline-color:cornflowerblue;';
  /** CSS 声明：`outline-color:cornsilk;`。 */
  readonly cornsilk: string = 'outline-color:cornsilk;';
  /** CSS 声明：`outline-color:crimson;`。 */
  readonly crimson: string = 'outline-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`outline-color:currentColor;`。
   */
  readonly currentColor: string = 'outline-color:currentColor;';
  /** CSS 声明：`outline-color:cyan;`。 */
  readonly cyan: string = 'outline-color:cyan;';
  /** CSS 声明：`outline-color:darkblue;`。 */
  readonly darkblue: string = 'outline-color:darkblue;';
  /** CSS 声明：`outline-color:darkcyan;`。 */
  readonly darkcyan: string = 'outline-color:darkcyan;';
  /** CSS 声明：`outline-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'outline-color:darkgoldenrod;';
  /** CSS 声明：`outline-color:darkgray;`。 */
  readonly darkgray: string = 'outline-color:darkgray;';
  /** CSS 声明：`outline-color:darkgreen;`。 */
  readonly darkgreen: string = 'outline-color:darkgreen;';
  /** CSS 声明：`outline-color:darkgrey;`。 */
  readonly darkgrey: string = 'outline-color:darkgrey;';
  /** CSS 声明：`outline-color:darkkhaki;`。 */
  readonly darkkhaki: string = 'outline-color:darkkhaki;';
  /** CSS 声明：`outline-color:darkmagenta;`。 */
  readonly darkmagenta: string = 'outline-color:darkmagenta;';
  /** CSS 声明：`outline-color:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'outline-color:darkolivegreen;';
  /** CSS 声明：`outline-color:darkorange;`。 */
  readonly darkorange: string = 'outline-color:darkorange;';
  /** CSS 声明：`outline-color:darkorchid;`。 */
  readonly darkorchid: string = 'outline-color:darkorchid;';
  /** CSS 声明：`outline-color:darkred;`。 */
  readonly darkred: string = 'outline-color:darkred;';
  /** CSS 声明：`outline-color:darksalmon;`。 */
  readonly darksalmon: string = 'outline-color:darksalmon;';
  /** CSS 声明：`outline-color:darkseagreen;`。 */
  readonly darkseagreen: string = 'outline-color:darkseagreen;';
  /** CSS 声明：`outline-color:darkslateblue;`。 */
  readonly darkslateblue: string = 'outline-color:darkslateblue;';
  /** CSS 声明：`outline-color:darkslategray;`。 */
  readonly darkslategray: string = 'outline-color:darkslategray;';
  /** CSS 声明：`outline-color:darkslategrey;`。 */
  readonly darkslategrey: string = 'outline-color:darkslategrey;';
  /** CSS 声明：`outline-color:darkturquoise;`。 */
  readonly darkturquoise: string = 'outline-color:darkturquoise;';
  /** CSS 声明：`outline-color:darkviolet;`。 */
  readonly darkviolet: string = 'outline-color:darkviolet;';
  /** CSS 声明：`outline-color:deeppink;`。 */
  readonly deeppink: string = 'outline-color:deeppink;';
  /** CSS 声明：`outline-color:deepskyblue;`。 */
  readonly deepskyblue: string = 'outline-color:deepskyblue;';
  /** CSS 声明：`outline-color:dimgray;`。 */
  readonly dimgray: string = 'outline-color:dimgray;';
  /** CSS 声明：`outline-color:dimgrey;`。 */
  readonly dimgrey: string = 'outline-color:dimgrey;';
  /** CSS 声明：`outline-color:dodgerblue;`。 */
  readonly dodgerblue: string = 'outline-color:dodgerblue;';
  /** CSS 声明：`outline-color:firebrick;`。 */
  readonly firebrick: string = 'outline-color:firebrick;';
  /** CSS 声明：`outline-color:floralwhite;`。 */
  readonly floralwhite: string = 'outline-color:floralwhite;';
  /** CSS 声明：`outline-color:forestgreen;`。 */
  readonly forestgreen: string = 'outline-color:forestgreen;';
  /** CSS 声明：`outline-color:fuchsia;`。 */
  readonly fuchsia: string = 'outline-color:fuchsia;';
  /** CSS 声明：`outline-color:gainsboro;`。 */
  readonly gainsboro: string = 'outline-color:gainsboro;';
  /** CSS 声明：`outline-color:ghostwhite;`。 */
  readonly ghostwhite: string = 'outline-color:ghostwhite;';
  /** CSS 声明：`outline-color:gold;`。 */
  readonly gold: string = 'outline-color:gold;';
  /** CSS 声明：`outline-color:goldenrod;`。 */
  readonly goldenrod: string = 'outline-color:goldenrod;';
  /** CSS 声明：`outline-color:gray;`。 */
  readonly gray: string = 'outline-color:gray;';
  /** CSS 声明：`outline-color:green;`。 */
  readonly green: string = 'outline-color:green;';
  /** CSS 声明：`outline-color:greenyellow;`。 */
  readonly greenyellow: string = 'outline-color:greenyellow;';
  /** CSS 声明：`outline-color:grey;`。 */
  readonly grey: string = 'outline-color:grey;';
  /** CSS 声明：`outline-color:honeydew;`。 */
  readonly honeydew: string = 'outline-color:honeydew;';
  /** CSS 声明：`outline-color:hotpink;`。 */
  readonly hotpink: string = 'outline-color:hotpink;';
  /** CSS 声明：`outline-color:indianred;`。 */
  readonly indianred: string = 'outline-color:indianred;';
  /** CSS 声明：`outline-color:indigo;`。 */
  readonly indigo: string = 'outline-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-color:inherit;`。
   */
  readonly inherit: string = 'outline-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-color:initial;`。
   */
  readonly initial: string = 'outline-color:initial;';
  /** CSS 声明：`outline-color:ivory;`。 */
  readonly ivory: string = 'outline-color:ivory;';
  /** CSS 声明：`outline-color:khaki;`。 */
  readonly khaki: string = 'outline-color:khaki;';
  /** CSS 声明：`outline-color:lavender;`。 */
  readonly lavender: string = 'outline-color:lavender;';
  /** CSS 声明：`outline-color:lavenderblush;`。 */
  readonly lavenderblush: string = 'outline-color:lavenderblush;';
  /** CSS 声明：`outline-color:lawngreen;`。 */
  readonly lawngreen: string = 'outline-color:lawngreen;';
  /** CSS 声明：`outline-color:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'outline-color:lemonchiffon;';
  /** CSS 声明：`outline-color:lightblue;`。 */
  readonly lightblue: string = 'outline-color:lightblue;';
  /** CSS 声明：`outline-color:lightcoral;`。 */
  readonly lightcoral: string = 'outline-color:lightcoral;';
  /** CSS 声明：`outline-color:lightcyan;`。 */
  readonly lightcyan: string = 'outline-color:lightcyan;';
  /** CSS 声明：`outline-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'outline-color:lightgoldenrodyellow;';
  /** CSS 声明：`outline-color:lightgray;`。 */
  readonly lightgray: string = 'outline-color:lightgray;';
  /** CSS 声明：`outline-color:lightgreen;`。 */
  readonly lightgreen: string = 'outline-color:lightgreen;';
  /** CSS 声明：`outline-color:lightgrey;`。 */
  readonly lightgrey: string = 'outline-color:lightgrey;';
  /** CSS 声明：`outline-color:lightpink;`。 */
  readonly lightpink: string = 'outline-color:lightpink;';
  /** CSS 声明：`outline-color:lightsalmon;`。 */
  readonly lightsalmon: string = 'outline-color:lightsalmon;';
  /** CSS 声明：`outline-color:lightseagreen;`。 */
  readonly lightseagreen: string = 'outline-color:lightseagreen;';
  /** CSS 声明：`outline-color:lightskyblue;`。 */
  readonly lightskyblue: string = 'outline-color:lightskyblue;';
  /** CSS 声明：`outline-color:lightslategray;`。 */
  readonly lightslategray: string = 'outline-color:lightslategray;';
  /** CSS 声明：`outline-color:lightslategrey;`。 */
  readonly lightslategrey: string = 'outline-color:lightslategrey;';
  /** CSS 声明：`outline-color:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'outline-color:lightsteelblue;';
  /** CSS 声明：`outline-color:lightyellow;`。 */
  readonly lightyellow: string = 'outline-color:lightyellow;';
  /** CSS 声明：`outline-color:lime;`。 */
  readonly lime: string = 'outline-color:lime;';
  /** CSS 声明：`outline-color:limegreen;`。 */
  readonly limegreen: string = 'outline-color:limegreen;';
  /** CSS 声明：`outline-color:linen;`。 */
  readonly linen: string = 'outline-color:linen;';
  /** CSS 声明：`outline-color:magenta;`。 */
  readonly magenta: string = 'outline-color:magenta;';
  /** CSS 声明：`outline-color:maroon;`。 */
  readonly maroon: string = 'outline-color:maroon;';
  /** CSS 声明：`outline-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'outline-color:mediumaquamarine;';
  /** CSS 声明：`outline-color:mediumblue;`。 */
  readonly mediumblue: string = 'outline-color:mediumblue;';
  /** CSS 声明：`outline-color:mediumorchid;`。 */
  readonly mediumorchid: string = 'outline-color:mediumorchid;';
  /** CSS 声明：`outline-color:mediumpurple;`。 */
  readonly mediumpurple: string = 'outline-color:mediumpurple;';
  /** CSS 声明：`outline-color:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'outline-color:mediumseagreen;';
  /** CSS 声明：`outline-color:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'outline-color:mediumslateblue;';
  /** CSS 声明：`outline-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'outline-color:mediumspringgreen;';
  /** CSS 声明：`outline-color:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'outline-color:mediumturquoise;';
  /** CSS 声明：`outline-color:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'outline-color:mediumvioletred;';
  /** CSS 声明：`outline-color:midnightblue;`。 */
  readonly midnightblue: string = 'outline-color:midnightblue;';
  /** CSS 声明：`outline-color:mintcream;`。 */
  readonly mintcream: string = 'outline-color:mintcream;';
  /** CSS 声明：`outline-color:mistyrose;`。 */
  readonly mistyrose: string = 'outline-color:mistyrose;';
  /** CSS 声明：`outline-color:moccasin;`。 */
  readonly moccasin: string = 'outline-color:moccasin;';
  /** CSS 声明：`outline-color:navajowhite;`。 */
  readonly navajowhite: string = 'outline-color:navajowhite;';
  /** CSS 声明：`outline-color:navy;`。 */
  readonly navy: string = 'outline-color:navy;';
  /** CSS 声明：`outline-color:oldlace;`。 */
  readonly oldlace: string = 'outline-color:oldlace;';
  /** CSS 声明：`outline-color:olive;`。 */
  readonly olive: string = 'outline-color:olive;';
  /** CSS 声明：`outline-color:olivedrab;`。 */
  readonly olivedrab: string = 'outline-color:olivedrab;';
  /** CSS 声明：`outline-color:orange;`。 */
  readonly orange: string = 'outline-color:orange;';
  /** CSS 声明：`outline-color:orangered;`。 */
  readonly orangered: string = 'outline-color:orangered;';
  /** CSS 声明：`outline-color:orchid;`。 */
  readonly orchid: string = 'outline-color:orchid;';
  /** CSS 声明：`outline-color:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'outline-color:palegoldenrod;';
  /** CSS 声明：`outline-color:palegreen;`。 */
  readonly palegreen: string = 'outline-color:palegreen;';
  /** CSS 声明：`outline-color:paleturquoise;`。 */
  readonly paleturquoise: string = 'outline-color:paleturquoise;';
  /** CSS 声明：`outline-color:palevioletred;`。 */
  readonly palevioletred: string = 'outline-color:palevioletred;';
  /** CSS 声明：`outline-color:papayawhip;`。 */
  readonly papayawhip: string = 'outline-color:papayawhip;';
  /** CSS 声明：`outline-color:peachpuff;`。 */
  readonly peachpuff: string = 'outline-color:peachpuff;';
  /** CSS 声明：`outline-color:peru;`。 */
  readonly peru: string = 'outline-color:peru;';
  /** CSS 声明：`outline-color:pink;`。 */
  readonly pink: string = 'outline-color:pink;';
  /** CSS 声明：`outline-color:plum;`。 */
  readonly plum: string = 'outline-color:plum;';
  /** CSS 声明：`outline-color:powderblue;`。 */
  readonly powderblue: string = 'outline-color:powderblue;';
  /** CSS 声明：`outline-color:purple;`。 */
  readonly purple: string = 'outline-color:purple;';
  /** CSS 声明：`outline-color:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'outline-color:rebeccapurple;';
  /** CSS 声明：`outline-color:red;`。 */
  readonly red: string = 'outline-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-color:revert;`。
   */
  readonly revert: string = 'outline-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-color:revert-layer;`。
   */
  readonly revertLayer: string = 'outline-color:revert-layer;';
  /** CSS 声明：`outline-color:rosybrown;`。 */
  readonly rosybrown: string = 'outline-color:rosybrown;';
  /** CSS 声明：`outline-color:royalblue;`。 */
  readonly royalblue: string = 'outline-color:royalblue;';
  /** CSS 声明：`outline-color:saddlebrown;`。 */
  readonly saddlebrown: string = 'outline-color:saddlebrown;';
  /** CSS 声明：`outline-color:salmon;`。 */
  readonly salmon: string = 'outline-color:salmon;';
  /** CSS 声明：`outline-color:sandybrown;`。 */
  readonly sandybrown: string = 'outline-color:sandybrown;';
  /** CSS 声明：`outline-color:seagreen;`。 */
  readonly seagreen: string = 'outline-color:seagreen;';
  /** CSS 声明：`outline-color:seashell;`。 */
  readonly seashell: string = 'outline-color:seashell;';
  /** CSS 声明：`outline-color:sienna;`。 */
  readonly sienna: string = 'outline-color:sienna;';
  /** CSS 声明：`outline-color:silver;`。 */
  readonly silver: string = 'outline-color:silver;';
  /** CSS 声明：`outline-color:skyblue;`。 */
  readonly skyblue: string = 'outline-color:skyblue;';
  /** CSS 声明：`outline-color:slateblue;`。 */
  readonly slateblue: string = 'outline-color:slateblue;';
  /** CSS 声明：`outline-color:slategray;`。 */
  readonly slategray: string = 'outline-color:slategray;';
  /** CSS 声明：`outline-color:slategrey;`。 */
  readonly slategrey: string = 'outline-color:slategrey;';
  /** CSS 声明：`outline-color:snow;`。 */
  readonly snow: string = 'outline-color:snow;';
  /** CSS 声明：`outline-color:springgreen;`。 */
  readonly springgreen: string = 'outline-color:springgreen;';
  /** CSS 声明：`outline-color:steelblue;`。 */
  readonly steelblue: string = 'outline-color:steelblue;';
  /** CSS 声明：`outline-color:tan;`。 */
  readonly tan: string = 'outline-color:tan;';
  /** CSS 声明：`outline-color:teal;`。 */
  readonly teal: string = 'outline-color:teal;';
  /** CSS 声明：`outline-color:thistle;`。 */
  readonly thistle: string = 'outline-color:thistle;';
  /** CSS 声明：`outline-color:tomato;`。 */
  readonly tomato: string = 'outline-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`outline-color:transparent;`。
   */
  readonly transparent: string = 'outline-color:transparent;';
  /** CSS 声明：`outline-color:turquoise;`。 */
  readonly turquoise: string = 'outline-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-color:unset;`。
   */
  readonly unset: string = 'outline-color:unset;';
  /** CSS 声明：`outline-color:violet;`。 */
  readonly violet: string = 'outline-color:violet;';
  /** CSS 声明：`outline-color:wheat;`。 */
  readonly wheat: string = 'outline-color:wheat;';
  /** CSS 声明：`outline-color:white;`。 */
  readonly white: string = 'outline-color:white;';
  /** CSS 声明：`outline-color:whitesmoke;`。 */
  readonly whitesmoke: string = 'outline-color:whitesmoke;';
  /** CSS 声明：`outline-color:yellow;`。 */
  readonly yellow: string = 'outline-color:yellow;';
  /** CSS 声明：`outline-color:yellowgreen;`。 */
  readonly yellowgreen: string = 'outline-color:yellowgreen;';
  /**
   * 创建 outline-color 属性作者；普通使用通过 s.outlineColor 取得共享实例。
   * @example
   * class CustomOutlineColorCss extends OutlineColorCss {}
   */
  constructor() {
    super('outline-color');
  }
  /**
   * 原样生成 outline-color 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 outline-color:value;。
   * @example
   * s.outlineColor.raw('inherit') // outline-color:inherit;
   */
  raw(value: Property.OutlineColor | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.outlineColor.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.outlineColor.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.outlineColor.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.outlineColor.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/**
 * outline-offset 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OutlineOffsetKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-offset:inherit;`。
   */
  readonly inherit: Property.OutlineOffset | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-offset:initial;`。
   */
  readonly initial: Property.OutlineOffset | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-offset:revert;`。
   */
  readonly revert: Property.OutlineOffset | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-offset:revert-layer;`。
   */
  readonly revertLayer: Property.OutlineOffset | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-offset:unset;`。
   */
  readonly unset: Property.OutlineOffset | CssString = 'unset';
}

/**
 * 设置轮廓线与边框边缘之间的距离。（outline-offset）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
 */
export class OutlineOffsetCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-offset:inherit;`。
   */
  readonly inherit: string = 'outline-offset:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-offset:initial;`。
   */
  readonly initial: string = 'outline-offset:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-offset:revert;`。
   */
  readonly revert: string = 'outline-offset:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-offset:revert-layer;`。
   */
  readonly revertLayer: string = 'outline-offset:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-offset:unset;`。
   */
  readonly unset: string = 'outline-offset:unset;';
  /**
   * 创建 outline-offset 属性作者；普通使用通过 s.outlineOffset 取得共享实例。
   * @example
   * class CustomOutlineOffsetCss extends OutlineOffsetCss {}
   */
  constructor() {
    super('outline-offset');
  }
  /**
   * 原样生成 outline-offset 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 outline-offset:value;。
   * @example
   * s.outlineOffset.raw('inherit') // outline-offset:inherit;
   */
  raw(value: Property.OutlineOffset | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.outlineOffset.calc('var(--value) * 2')
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
   * s.outlineOffset.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OutlineOffset | CssString,
    ...others: (Property.OutlineOffset | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.outlineOffset.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OutlineOffset | CssString,
    ...others: (Property.OutlineOffset | CssString)[]
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
   * s.outlineOffset.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OutlineOffset | CssString,
    preferred: Property.OutlineOffset | CssString,
    maximum: Property.OutlineOffset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * outline-style 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OutlineStyleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:auto;`。 */
  readonly auto: Property.OutlineStyle | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:dashed;`。 */
  readonly dashed: Property.OutlineStyle | CssString = 'dashed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:dotted;`。 */
  readonly dotted: Property.OutlineStyle | CssString = 'dotted';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:double;`。 */
  readonly double: Property.OutlineStyle | CssString = 'double';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:groove;`。 */
  readonly groove: Property.OutlineStyle | CssString = 'groove';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-style:inherit;`。
   */
  readonly inherit: Property.OutlineStyle | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-style:initial;`。
   */
  readonly initial: Property.OutlineStyle | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:inset;`。 */
  readonly inset: Property.OutlineStyle | CssString = 'inset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:none;`。 */
  readonly none: Property.OutlineStyle | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:outset;`。 */
  readonly outset: Property.OutlineStyle | CssString = 'outset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-style:revert;`。
   */
  readonly revert: Property.OutlineStyle | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-style:revert-layer;`。
   */
  readonly revertLayer: Property.OutlineStyle | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:ridge;`。 */
  readonly ridge: Property.OutlineStyle | CssString = 'ridge';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-style:solid;`。 */
  readonly solid: Property.OutlineStyle | CssString = 'solid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-style:unset;`。
   */
  readonly unset: Property.OutlineStyle | CssString = 'unset';
}

/**
 * 设置轮廓线线型。（outline-style）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
 */
export class OutlineStyleCss extends CssProperty {
  /** CSS 声明：`outline-style:auto;`。 */
  readonly auto: string = 'outline-style:auto;';
  /** CSS 声明：`outline-style:dashed;`。 */
  readonly dashed: string = 'outline-style:dashed;';
  /** CSS 声明：`outline-style:dotted;`。 */
  readonly dotted: string = 'outline-style:dotted;';
  /** CSS 声明：`outline-style:double;`。 */
  readonly double: string = 'outline-style:double;';
  /** CSS 声明：`outline-style:groove;`。 */
  readonly groove: string = 'outline-style:groove;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-style:inherit;`。
   */
  readonly inherit: string = 'outline-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-style:initial;`。
   */
  readonly initial: string = 'outline-style:initial;';
  /** CSS 声明：`outline-style:inset;`。 */
  readonly inset: string = 'outline-style:inset;';
  /** CSS 声明：`outline-style:none;`。 */
  readonly none: string = 'outline-style:none;';
  /** CSS 声明：`outline-style:outset;`。 */
  readonly outset: string = 'outline-style:outset;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-style:revert;`。
   */
  readonly revert: string = 'outline-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-style:revert-layer;`。
   */
  readonly revertLayer: string = 'outline-style:revert-layer;';
  /** CSS 声明：`outline-style:ridge;`。 */
  readonly ridge: string = 'outline-style:ridge;';
  /** CSS 声明：`outline-style:solid;`。 */
  readonly solid: string = 'outline-style:solid;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-style:unset;`。
   */
  readonly unset: string = 'outline-style:unset;';
  /**
   * 创建 outline-style 属性作者；普通使用通过 s.outlineStyle 取得共享实例。
   * @example
   * class CustomOutlineStyleCss extends OutlineStyleCss {}
   */
  constructor() {
    super('outline-style');
  }
  /**
   * 原样生成 outline-style 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 outline-style:value;。
   * @example
   * s.outlineStyle.raw('inherit') // outline-style:inherit;
   */
  raw(value: Property.OutlineStyle | CssString): string {
    return this.declaration(value);
  }
}

/**
 * outline-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OutlineWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-width:inherit;`。
   */
  readonly inherit: Property.OutlineWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-width:initial;`。
   */
  readonly initial: Property.OutlineWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-width:medium;`。 */
  readonly medium: Property.OutlineWidth | CssString = 'medium';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-width:revert;`。
   */
  readonly revert: Property.OutlineWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-width:revert-layer;`。
   */
  readonly revertLayer: Property.OutlineWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-width:thick;`。 */
  readonly thick: Property.OutlineWidth | CssString = 'thick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`outline-width:thin;`。 */
  readonly thin: Property.OutlineWidth | CssString = 'thin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-width:unset;`。
   */
  readonly unset: Property.OutlineWidth | CssString = 'unset';
}

/**
 * 设置轮廓线宽度。（outline-width）
 *
 * CSS 初始值：`medium`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
 */
export class OutlineWidthCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`outline-width:inherit;`。
   */
  readonly inherit: string = 'outline-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`outline-width:initial;`。
   */
  readonly initial: string = 'outline-width:initial;';
  /** CSS 声明：`outline-width:medium;`。 */
  readonly medium: string = 'outline-width:medium;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`outline-width:revert;`。
   */
  readonly revert: string = 'outline-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`outline-width:revert-layer;`。
   */
  readonly revertLayer: string = 'outline-width:revert-layer;';
  /** CSS 声明：`outline-width:thick;`。 */
  readonly thick: string = 'outline-width:thick;';
  /** CSS 声明：`outline-width:thin;`。 */
  readonly thin: string = 'outline-width:thin;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`outline-width:unset;`。
   */
  readonly unset: string = 'outline-width:unset;';
  /**
   * 创建 outline-width 属性作者；普通使用通过 s.outlineWidth 取得共享实例。
   * @example
   * class CustomOutlineWidthCss extends OutlineWidthCss {}
   */
  constructor() {
    super('outline-width');
  }
  /**
   * 原样生成 outline-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 outline-width:value;。
   * @example
   * s.outlineWidth.raw('inherit') // outline-width:inherit;
   */
  raw(value: Property.OutlineWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.outlineWidth.calc('var(--value) * 2')
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
   * s.outlineWidth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OutlineWidth | CssString,
    ...others: (Property.OutlineWidth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.outlineWidth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OutlineWidth | CssString,
    ...others: (Property.OutlineWidth | CssString)[]
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
   * s.outlineWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OutlineWidth | CssString,
    preferred: Property.OutlineWidth | CssString,
    maximum: Property.OutlineWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * overflow 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow:auto;`。
   * @example
   * s.overflow.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly auto: Property.Overflow | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow:clip;`。
   * @example
   * s.overflow.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly clip: Property.Overflow | CssString = 'clip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow:hidden;`。
   * @example
   * s.overflow.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly hidden: Property.Overflow | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow:inherit;`。
   */
  readonly inherit: Property.Overflow | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow:initial;`。
   */
  readonly initial: Property.Overflow | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   *
   * CSS 声明：`overflow:overlay;`。
   */
  readonly overlay: Property.Overflow | CssString = 'overlay';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow:revert;`。
   */
  readonly revert: Property.Overflow | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow:revert-layer;`。
   */
  readonly revertLayer: Property.Overflow | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow:scroll;`。
   */
  readonly scroll: Property.Overflow | CssString = 'scroll';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow:unset;`。
   */
  readonly unset: Property.Overflow | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow:visible;`。
   */
  readonly visible: Property.Overflow | CssString = 'visible';
}

/**
 * 设置内容超出盒子时的裁剪和滚动行为。（overflow）
 *
 * 一个值同时设置两轴；两个值依次设置 overflow-x、overflow-y。通常需要尺寸约束才会出现可滚动的溢出。
 *
 * 常用值：
 * - `visible`：允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
 * - `hidden`：裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
 * - `clip`：在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
 * - `auto`：按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
 * - `scroll`：建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
 *
 * 适用场景：滚动面板、内容裁剪和受限尺寸区域。
 *
 * CSS 初始值：`visible`（不同于浏览器默认样式表）。
 * @example
 * css(s.maxHeight.rem(20), s.overflow.auto)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
 */
export class OverflowCss extends CssProperty {
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow:auto;`。
   * @example
   * s.overflow.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly auto: string = 'overflow:auto;';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow:clip;`。
   * @example
   * s.overflow.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly clip: string = 'overflow:clip;';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow:hidden;`。
   * @example
   * s.overflow.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  readonly hidden: string = 'overflow:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow:inherit;`。
   */
  readonly inherit: string = 'overflow:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow:initial;`。
   */
  readonly initial: string = 'overflow:initial;';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   *
   * CSS 声明：`overflow:overlay;`。
   */
  readonly overlay: string = 'overflow:overlay;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow:revert;`。
   */
  readonly revert: string = 'overflow:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow:revert-layer;';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow:scroll;`。
   */
  readonly scroll: string = 'overflow:scroll;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow:unset;`。
   */
  readonly unset: string = 'overflow:unset;';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow:visible;`。
   */
  readonly visible: string = 'overflow:visible;';
  /**
   * 创建 overflow 属性作者；普通使用通过 s.overflow 取得共享实例。
   * @example
   * class CustomOverflowCss extends OverflowCss {}
   */
  constructor() {
    super('overflow');
  }
  /**
   * 原样生成 overflow 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow:value;。
   * @example
   * s.overflow.raw('inherit') // overflow:inherit;
   */
  raw(value: Property.Overflow | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overflow-anchor 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowAnchorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overflow-anchor:auto;`。 */
  readonly auto: Property.OverflowAnchor | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-anchor:inherit;`。
   */
  readonly inherit: Property.OverflowAnchor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-anchor:initial;`。
   */
  readonly initial: Property.OverflowAnchor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overflow-anchor:none;`。 */
  readonly none: Property.OverflowAnchor | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-anchor:revert;`。
   */
  readonly revert: Property.OverflowAnchor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-anchor:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowAnchor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-anchor:unset;`。
   */
  readonly unset: Property.OverflowAnchor | CssString = 'unset';
}

/**
 * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。（overflow-anchor）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
 */
export class OverflowAnchorCss extends CssProperty {
  /** CSS 声明：`overflow-anchor:auto;`。 */
  readonly auto: string = 'overflow-anchor:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-anchor:inherit;`。
   */
  readonly inherit: string = 'overflow-anchor:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-anchor:initial;`。
   */
  readonly initial: string = 'overflow-anchor:initial;';
  /** CSS 声明：`overflow-anchor:none;`。 */
  readonly none: string = 'overflow-anchor:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-anchor:revert;`。
   */
  readonly revert: string = 'overflow-anchor:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-anchor:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-anchor:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-anchor:unset;`。
   */
  readonly unset: string = 'overflow-anchor:unset;';
  /**
   * 创建 overflow-anchor 属性作者；普通使用通过 s.overflowAnchor 取得共享实例。
   * @example
   * class CustomOverflowAnchorCss extends OverflowAnchorCss {}
   */
  constructor() {
    super('overflow-anchor');
  }
  /**
   * 原样生成 overflow-anchor 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-anchor:value;。
   * @example
   * s.overflowAnchor.raw('inherit') // overflow-anchor:inherit;
   */
  raw(value: Property.OverflowAnchor | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overflow-block 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowBlockKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-block:auto;`。
   * @example
   * s.overflowBlock.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly auto: Property.OverflowBlock | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-block:clip;`。
   * @example
   * s.overflowBlock.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly clip: Property.OverflowBlock | CssString = 'clip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-block:hidden;`。
   * @example
   * s.overflowBlock.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly hidden: Property.OverflowBlock | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-block:inherit;`。
   */
  readonly inherit: Property.OverflowBlock | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-block:initial;`。
   */
  readonly initial: Property.OverflowBlock | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-block:revert;`。
   */
  readonly revert: Property.OverflowBlock | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-block:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowBlock | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-block:scroll;`。
   */
  readonly scroll: Property.OverflowBlock | CssString = 'scroll';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-block:unset;`。
   */
  readonly unset: Property.OverflowBlock | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-block:visible;`。
   */
  readonly visible: Property.OverflowBlock | CssString = 'visible';
}

/**
 * 设置逻辑块轴上的溢出行为。（overflow-block）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
 */
export class OverflowBlockCss extends CssProperty {
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-block:auto;`。
   * @example
   * s.overflowBlock.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly auto: string = 'overflow-block:auto;';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-block:clip;`。
   * @example
   * s.overflowBlock.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly clip: string = 'overflow-block:clip;';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-block:hidden;`。
   * @example
   * s.overflowBlock.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  readonly hidden: string = 'overflow-block:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-block:inherit;`。
   */
  readonly inherit: string = 'overflow-block:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-block:initial;`。
   */
  readonly initial: string = 'overflow-block:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-block:revert;`。
   */
  readonly revert: string = 'overflow-block:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-block:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-block:revert-layer;';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-block:scroll;`。
   */
  readonly scroll: string = 'overflow-block:scroll;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-block:unset;`。
   */
  readonly unset: string = 'overflow-block:unset;';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-block:visible;`。
   */
  readonly visible: string = 'overflow-block:visible;';
  /**
   * 创建 overflow-block 属性作者；普通使用通过 s.overflowBlock 取得共享实例。
   * @example
   * class CustomOverflowBlockCss extends OverflowBlockCss {}
   */
  constructor() {
    super('overflow-block');
  }
  /**
   * 原样生成 overflow-block 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-block:value;。
   * @example
   * s.overflowBlock.raw('inherit') // overflow-block:inherit;
   */
  raw(value: Property.OverflowBlock | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overflow-clip-box 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowClipBoxKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overflow-clip-box:content-box;`。 */
  readonly contentBox: Property.OverflowClipBox | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-clip-box:inherit;`。
   */
  readonly inherit: Property.OverflowClipBox | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-clip-box:initial;`。
   */
  readonly initial: Property.OverflowClipBox | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overflow-clip-box:padding-box;`。 */
  readonly paddingBox: Property.OverflowClipBox | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-clip-box:revert;`。
   */
  readonly revert: Property.OverflowClipBox | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-clip-box:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowClipBox | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-clip-box:unset;`。
   */
  readonly unset: Property.OverflowClipBox | CssString = 'unset';
}

/**
 * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。（overflow-clip-box）
 *
 * CSS 初始值：`padding-box`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
 */
export class OverflowClipBoxCss extends CssProperty {
  /** CSS 声明：`overflow-clip-box:content-box;`。 */
  readonly contentBox: string = 'overflow-clip-box:content-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-clip-box:inherit;`。
   */
  readonly inherit: string = 'overflow-clip-box:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-clip-box:initial;`。
   */
  readonly initial: string = 'overflow-clip-box:initial;';
  /** CSS 声明：`overflow-clip-box:padding-box;`。 */
  readonly paddingBox: string = 'overflow-clip-box:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-clip-box:revert;`。
   */
  readonly revert: string = 'overflow-clip-box:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-clip-box:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-clip-box:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-clip-box:unset;`。
   */
  readonly unset: string = 'overflow-clip-box:unset;';
  /**
   * 创建 overflow-clip-box 属性作者；普通使用通过 s.overflowClipBox 取得共享实例。
   * @example
   * class CustomOverflowClipBoxCss extends OverflowClipBoxCss {}
   */
  constructor() {
    super('overflow-clip-box');
  }
  /**
   * 原样生成 overflow-clip-box 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-clip-box:value;。
   * @example
   * s.overflowClipBox.raw('inherit') // overflow-clip-box:inherit;
   */
  raw(value: Property.OverflowClipBox | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overflow-clip-margin 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowClipMarginKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overflow-clip-margin:border-box;`。 */
  readonly borderBox: Property.OverflowClipMargin | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overflow-clip-margin:content-box;`。 */
  readonly contentBox: Property.OverflowClipMargin | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-clip-margin:inherit;`。
   */
  readonly inherit: Property.OverflowClipMargin | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-clip-margin:initial;`。
   */
  readonly initial: Property.OverflowClipMargin | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overflow-clip-margin:padding-box;`。 */
  readonly paddingBox: Property.OverflowClipMargin | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-clip-margin:revert;`。
   */
  readonly revert: Property.OverflowClipMargin | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-clip-margin:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowClipMargin | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-clip-margin:unset;`。
   */
  readonly unset: Property.OverflowClipMargin | CssString = 'unset';
}

/**
 * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。（overflow-clip-margin）
 *
 * CSS 初始值：`0px`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
 */
export class OverflowClipMarginCss extends LengthCssProperty {
  /** CSS 声明：`overflow-clip-margin:border-box;`。 */
  readonly borderBox: string = 'overflow-clip-margin:border-box;';
  /** CSS 声明：`overflow-clip-margin:content-box;`。 */
  readonly contentBox: string = 'overflow-clip-margin:content-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-clip-margin:inherit;`。
   */
  readonly inherit: string = 'overflow-clip-margin:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-clip-margin:initial;`。
   */
  readonly initial: string = 'overflow-clip-margin:initial;';
  /** CSS 声明：`overflow-clip-margin:padding-box;`。 */
  readonly paddingBox: string = 'overflow-clip-margin:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-clip-margin:revert;`。
   */
  readonly revert: string = 'overflow-clip-margin:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-clip-margin:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-clip-margin:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-clip-margin:unset;`。
   */
  readonly unset: string = 'overflow-clip-margin:unset;';
  /**
   * 创建 overflow-clip-margin 属性作者；普通使用通过 s.overflowClipMargin 取得共享实例。
   * @example
   * class CustomOverflowClipMarginCss extends OverflowClipMarginCss {}
   */
  constructor() {
    super('overflow-clip-margin');
  }
  /**
   * 原样生成 overflow-clip-margin 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-clip-margin:value;。
   * @example
   * s.overflowClipMargin.raw('inherit') // overflow-clip-margin:inherit;
   */
  raw(value: Property.OverflowClipMargin | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.overflowClipMargin.calc('var(--value) * 2')
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
   * s.overflowClipMargin.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.OverflowClipMargin | CssString,
    ...others: (Property.OverflowClipMargin | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.overflowClipMargin.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.OverflowClipMargin | CssString,
    ...others: (Property.OverflowClipMargin | CssString)[]
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
   * s.overflowClipMargin.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.OverflowClipMargin | CssString,
    preferred: Property.OverflowClipMargin | CssString,
    maximum: Property.OverflowClipMargin | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * overflow-inline 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowInlineKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-inline:auto;`。
   * @example
   * s.overflowInline.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly auto: Property.OverflowInline | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-inline:clip;`。
   * @example
   * s.overflowInline.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly clip: Property.OverflowInline | CssString = 'clip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-inline:hidden;`。
   * @example
   * s.overflowInline.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly hidden: Property.OverflowInline | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-inline:inherit;`。
   */
  readonly inherit: Property.OverflowInline | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-inline:initial;`。
   */
  readonly initial: Property.OverflowInline | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-inline:revert;`。
   */
  readonly revert: Property.OverflowInline | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-inline:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowInline | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-inline:scroll;`。
   */
  readonly scroll: Property.OverflowInline | CssString = 'scroll';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-inline:unset;`。
   */
  readonly unset: Property.OverflowInline | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-inline:visible;`。
   */
  readonly visible: Property.OverflowInline | CssString = 'visible';
}

/**
 * 设置逻辑行内轴上的溢出行为。（overflow-inline）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
 */
export class OverflowInlineCss extends CssProperty {
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-inline:auto;`。
   * @example
   * s.overflowInline.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly auto: string = 'overflow-inline:auto;';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-inline:clip;`。
   * @example
   * s.overflowInline.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly clip: string = 'overflow-inline:clip;';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-inline:hidden;`。
   * @example
   * s.overflowInline.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  readonly hidden: string = 'overflow-inline:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-inline:inherit;`。
   */
  readonly inherit: string = 'overflow-inline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-inline:initial;`。
   */
  readonly initial: string = 'overflow-inline:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-inline:revert;`。
   */
  readonly revert: string = 'overflow-inline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-inline:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-inline:revert-layer;';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-inline:scroll;`。
   */
  readonly scroll: string = 'overflow-inline:scroll;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-inline:unset;`。
   */
  readonly unset: string = 'overflow-inline:unset;';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-inline:visible;`。
   */
  readonly visible: string = 'overflow-inline:visible;';
  /**
   * 创建 overflow-inline 属性作者；普通使用通过 s.overflowInline 取得共享实例。
   * @example
   * class CustomOverflowInlineCss extends OverflowInlineCss {}
   */
  constructor() {
    super('overflow-inline');
  }
  /**
   * 原样生成 overflow-inline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-inline:value;。
   * @example
   * s.overflowInline.raw('inherit') // overflow-inline:inherit;
   */
  raw(value: Property.OverflowInline | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overflow-wrap 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowWrapKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 必要时允许在长文本任意位置断行，这些机会参与 min-content 尺寸计算。
   *
   * 区别：break-word 的额外断点不按 anywhere 的方式参与最小内容宽度计算；word-break:break-all 更积极地拆分普通单词。
   *
   * 适用场景：展示不可控的长 URL 或无空格文本。
   *
   * CSS 声明：`overflow-wrap:anywhere;`。
   * @example
   * s.overflowWrap.anywhere
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  readonly anywhere: Property.OverflowWrap | CssString = 'anywhere';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
   *
   * CSS 声明：`overflow-wrap:break-word;`。
   */
  readonly breakWord: Property.OverflowWrap | CssString = 'break-word';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-wrap:inherit;`。
   */
  readonly inherit: Property.OverflowWrap | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-wrap:initial;`。
   */
  readonly initial: Property.OverflowWrap | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 只使用正常换行机会，不为长单词额外断行。
   *
   * CSS 声明：`overflow-wrap:normal;`。
   */
  readonly normal: Property.OverflowWrap | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-wrap:revert;`。
   */
  readonly revert: Property.OverflowWrap | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-wrap:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowWrap | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-wrap:unset;`。
   */
  readonly unset: Property.OverflowWrap | CssString = 'unset';
}

/**
 * 设置不可正常断开的长文本是否允许额外换行。（overflow-wrap）
 *
 * 常用值：
 * - `normal`：只使用正常换行机会，不为长单词额外断行。
 * - `anywhere`：必要时允许在长文本任意位置断行，这些机会参与 min-content 尺寸计算。
 * - `break-word`：必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
 *
 * 适用场景：防止 URL、标识符等长文本撑破容器。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @example
 * s.overflowWrap.anywhere
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
 */
export class OverflowWrapCss extends CssProperty {
  /**
   * 必要时允许在长文本任意位置断行，这些机会参与 min-content 尺寸计算。
   *
   * 区别：break-word 的额外断点不按 anywhere 的方式参与最小内容宽度计算；word-break:break-all 更积极地拆分普通单词。
   *
   * 适用场景：展示不可控的长 URL 或无空格文本。
   *
   * CSS 声明：`overflow-wrap:anywhere;`。
   * @example
   * s.overflowWrap.anywhere
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  readonly anywhere: string = 'overflow-wrap:anywhere;';
  /**
   * 必要时允许长文本断行，但新增断点不按 anywhere 的方式参与 min-content 计算。
   *
   * CSS 声明：`overflow-wrap:break-word;`。
   */
  readonly breakWord: string = 'overflow-wrap:break-word;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-wrap:inherit;`。
   */
  readonly inherit: string = 'overflow-wrap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-wrap:initial;`。
   */
  readonly initial: string = 'overflow-wrap:initial;';
  /**
   * 只使用正常换行机会，不为长单词额外断行。
   *
   * CSS 声明：`overflow-wrap:normal;`。
   */
  readonly normal: string = 'overflow-wrap:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-wrap:revert;`。
   */
  readonly revert: string = 'overflow-wrap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-wrap:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-wrap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-wrap:unset;`。
   */
  readonly unset: string = 'overflow-wrap:unset;';
  /**
   * 创建 overflow-wrap 属性作者；普通使用通过 s.overflowWrap 取得共享实例。
   * @example
   * class CustomOverflowWrapCss extends OverflowWrapCss {}
   */
  constructor() {
    super('overflow-wrap');
  }
  /**
   * 原样生成 overflow-wrap 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-wrap:value;。
   * @example
   * s.overflowWrap.raw('inherit') // overflow-wrap:inherit;
   */
  raw(value: Property.OverflowWrap | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overflow-x 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowXKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-x:auto;`。
   * @example
   * s.overflowX.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly auto: Property.OverflowX | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-x:clip;`。
   * @example
   * s.overflowX.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly clip: Property.OverflowX | CssString = 'clip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-x:hidden;`。
   * @example
   * s.overflowX.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly hidden: Property.OverflowX | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-x:inherit;`。
   */
  readonly inherit: Property.OverflowX | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-x:initial;`。
   */
  readonly initial: Property.OverflowX | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   *
   * CSS 声明：`overflow-x:overlay;`。
   */
  readonly overlay: Property.OverflowX | CssString = 'overlay';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-x:revert;`。
   */
  readonly revert: Property.OverflowX | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-x:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowX | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-x:scroll;`。
   */
  readonly scroll: Property.OverflowX | CssString = 'scroll';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-x:unset;`。
   */
  readonly unset: Property.OverflowX | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-x:visible;`。
   */
  readonly visible: Property.OverflowX | CssString = 'visible';
}

/**
 * 设置水平方向的溢出行为。（overflow-x）
 *
 * 和 overflow-y 的组合可能改变计算值；例如另一轴是 auto 时，visible 可能按 auto 计算。
 *
 * 常用值：
 * - `auto`：按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
 * - `hidden`：裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
 * - `clip`：在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
 *
 * 适用场景：横向滚动标签、宽表格或水平内容裁剪。
 *
 * CSS 初始值：`visible`（不同于浏览器默认样式表）。
 * @example
 * s.overflowX.auto
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
 */
export class OverflowXCss extends CssProperty {
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-x:auto;`。
   * @example
   * s.overflowX.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly auto: string = 'overflow-x:auto;';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-x:clip;`。
   * @example
   * s.overflowX.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly clip: string = 'overflow-x:clip;';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-x:hidden;`。
   * @example
   * s.overflowX.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  readonly hidden: string = 'overflow-x:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-x:inherit;`。
   */
  readonly inherit: string = 'overflow-x:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-x:initial;`。
   */
  readonly initial: string = 'overflow-x:initial;';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   *
   * CSS 声明：`overflow-x:overlay;`。
   */
  readonly overlay: string = 'overflow-x:overlay;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-x:revert;`。
   */
  readonly revert: string = 'overflow-x:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-x:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-x:revert-layer;';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-x:scroll;`。
   */
  readonly scroll: string = 'overflow-x:scroll;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-x:unset;`。
   */
  readonly unset: string = 'overflow-x:unset;';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-x:visible;`。
   */
  readonly visible: string = 'overflow-x:visible;';
  /**
   * 创建 overflow-x 属性作者；普通使用通过 s.overflowX 取得共享实例。
   * @example
   * class CustomOverflowXCss extends OverflowXCss {}
   */
  constructor() {
    super('overflow-x');
  }
  /**
   * 原样生成 overflow-x 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-x:value;。
   * @example
   * s.overflowX.raw('inherit') // overflow-x:inherit;
   */
  raw(value: Property.OverflowX | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overflow-y 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverflowYKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-y:auto;`。
   * @example
   * s.overflowY.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly auto: Property.OverflowY | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-y:clip;`。
   * @example
   * s.overflowY.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly clip: Property.OverflowY | CssString = 'clip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-y:hidden;`。
   * @example
   * s.overflowY.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly hidden: Property.OverflowY | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-y:inherit;`。
   */
  readonly inherit: Property.OverflowY | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-y:initial;`。
   */
  readonly initial: Property.OverflowY | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   *
   * CSS 声明：`overflow-y:overlay;`。
   */
  readonly overlay: Property.OverflowY | CssString = 'overlay';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-y:revert;`。
   */
  readonly revert: Property.OverflowY | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-y:revert-layer;`。
   */
  readonly revertLayer: Property.OverflowY | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-y:scroll;`。
   */
  readonly scroll: Property.OverflowY | CssString = 'scroll';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-y:unset;`。
   */
  readonly unset: Property.OverflowY | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-y:visible;`。
   */
  readonly visible: Property.OverflowY | CssString = 'visible';
}

/**
 * 设置垂直方向的溢出行为。（overflow-y）
 *
 * 通常配合 height/max-height 或可收缩的布局区域使用。
 *
 * 常用值：
 * - `auto`：按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
 * - `hidden`：裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
 * - `clip`：在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
 *
 * 适用场景：纵向列表和弹窗内容区。
 *
 * CSS 初始值：`visible`（不同于浏览器默认样式表）。
 * @example
 * css(s.maxHeight.rem(20), s.overflowY.auto)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
 */
export class OverflowYCss extends CssProperty {
  /**
   * 按溢出情况提供滚动机制；滚动条外观和是否占空间由环境决定。
   *
   * 区别：scroll 通常始终预留或显示滚动机制；auto 根据溢出情况显示滚动条，外观由平台决定。
   *
   * 适用场景：内容超过受限尺寸时可以滚动的面板。
   *
   * CSS 声明：`overflow-y:auto;`。
   * @example
   * s.overflowY.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly auto: string = 'overflow-y:auto;';
  /**
   * 在裁剪边界截断内容，不建立滚动容器，也不支持程序化滚动。
   *
   * 区别：与 hidden 不同，不支持程序化滚动，也不单独建立块格式化上下文。
   *
   * 适用场景：只裁剪绘制，不希望该轴成为滚动容器的区域。
   *
   * 注意：两轴设置会影响计算结果；与另一轴 auto/scroll 等组合时，要检查最终溢出行为。
   *
   * CSS 声明：`overflow-y:clip;`。
   * @example
   * s.overflowY.clip
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly clip: string = 'overflow-y:clip;';
  /**
   * 裁剪溢出且不显示滚动条，但仍是可通过脚本等方式滚动的滚动容器。
   *
   * 区别：clip 不建立滚动容器；hidden 仍可通过脚本或焦点移动滚动。
   *
   * 适用场景：需要裁剪且仍保留程序化滚动的容器。
   *
   * 注意：可能成为 sticky 后代的滚动参照，不能把它仅理解成视觉裁剪。
   *
   * CSS 声明：`overflow-y:hidden;`。
   * @example
   * s.overflowY.hidden
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  readonly hidden: string = 'overflow-y:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overflow-y:inherit;`。
   */
  readonly inherit: string = 'overflow-y:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overflow-y:initial;`。
   */
  readonly initial: string = 'overflow-y:initial;';
  /**
   * 历史兼容值，现代实现通常将其作为 auto 的别名；不保证滚动条覆盖在内容上。
   *
   * CSS 声明：`overflow-y:overlay;`。
   */
  readonly overlay: string = 'overflow-y:overlay;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overflow-y:revert;`。
   */
  readonly revert: string = 'overflow-y:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overflow-y:revert-layer;`。
   */
  readonly revertLayer: string = 'overflow-y:revert-layer;';
  /**
   * 建立滚动容器，通常即使未溢出也显示滚动条；具体外观由平台决定。
   *
   * CSS 声明：`overflow-y:scroll;`。
   */
  readonly scroll: string = 'overflow-y:scroll;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overflow-y:unset;`。
   */
  readonly unset: string = 'overflow-y:unset;';
  /**
   * 允许内容绘制到盒子外；与另一轴的设置组合时计算值可能变化。
   *
   * CSS 声明：`overflow-y:visible;`。
   */
  readonly visible: string = 'overflow-y:visible;';
  /**
   * 创建 overflow-y 属性作者；普通使用通过 s.overflowY 取得共享实例。
   * @example
   * class CustomOverflowYCss extends OverflowYCss {}
   */
  constructor() {
    super('overflow-y');
  }
  /**
   * 原样生成 overflow-y 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overflow-y:value;。
   * @example
   * s.overflowY.raw('inherit') // overflow-y:inherit;
   */
  raw(value: Property.OverflowY | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overlay 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverlayKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overlay:auto;`。 */
  readonly auto: Property.Overlay | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overlay:inherit;`。
   */
  readonly inherit: Property.Overlay | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overlay:initial;`。
   */
  readonly initial: Property.Overlay | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`overlay:none;`。 */
  readonly none: Property.Overlay | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overlay:revert;`。
   */
  readonly revert: Property.Overlay | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overlay:revert-layer;`。
   */
  readonly revertLayer: Property.Overlay | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overlay:unset;`。
   */
  readonly unset: Property.Overlay | CssString = 'unset';
}

/**
 * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。（overlay）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
 */
export class OverlayCss extends CssProperty {
  /** CSS 声明：`overlay:auto;`。 */
  readonly auto: string = 'overlay:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overlay:inherit;`。
   */
  readonly inherit: string = 'overlay:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overlay:initial;`。
   */
  readonly initial: string = 'overlay:initial;';
  /** CSS 声明：`overlay:none;`。 */
  readonly none: string = 'overlay:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overlay:revert;`。
   */
  readonly revert: string = 'overlay:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overlay:revert-layer;`。
   */
  readonly revertLayer: string = 'overlay:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overlay:unset;`。
   */
  readonly unset: string = 'overlay:unset;';
  /**
   * 创建 overlay 属性作者；普通使用通过 s.overlay 取得共享实例。
   * @example
   * class CustomOverlayCss extends OverlayCss {}
   */
  constructor() {
    super('overlay');
  }
  /**
   * 原样生成 overlay 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overlay:value;。
   * @example
   * s.overlay.raw('inherit') // overlay:inherit;
   */
  raw(value: Property.Overlay | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overscroll-behavior 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverscrollBehaviorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior:auto;`。
   */
  readonly auto: Property.OverscrollBehavior | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior:contain;`。
   */
  readonly contain: Property.OverscrollBehavior | CssString = 'contain';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior:inherit;`。
   */
  readonly inherit: Property.OverscrollBehavior | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior:initial;`。
   */
  readonly initial: Property.OverscrollBehavior | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior:none;`。
   */
  readonly none: Property.OverscrollBehavior | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior:revert;`。
   */
  readonly revert: Property.OverscrollBehavior | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior:revert-layer;`。
   */
  readonly revertLayer: Property.OverscrollBehavior | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior:unset;`。
   */
  readonly unset: Property.OverscrollBehavior | CssString = 'unset';
}

/**
 * 控制滚动到边界后的滚动链和越界反馈行为。（overscroll-behavior）
 *
 * 常用值：
 * - `auto`：采用默认滚动链和边界反馈。
 * - `contain`：阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
 * - `none`：阻止滚动链，并抑制当前容器的默认越界反馈。
 *
 * 适用场景：阻止弹窗或内部滚动面板到达边界后继续滚动外层页面。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * css(s.overflowY.auto, s.overscrollBehavior.contain)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
 */
export class OverscrollBehaviorCss extends CssProperty {
  /**
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior:auto;`。
   */
  readonly auto: string = 'overscroll-behavior:auto;';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior:contain;`。
   */
  readonly contain: string = 'overscroll-behavior:contain;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior:inherit;`。
   */
  readonly inherit: string = 'overscroll-behavior:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior:initial;`。
   */
  readonly initial: string = 'overscroll-behavior:initial;';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior:none;`。
   */
  readonly none: string = 'overscroll-behavior:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior:revert;`。
   */
  readonly revert: string = 'overscroll-behavior:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior:revert-layer;`。
   */
  readonly revertLayer: string = 'overscroll-behavior:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior:unset;`。
   */
  readonly unset: string = 'overscroll-behavior:unset;';
  /**
   * 创建 overscroll-behavior 属性作者；普通使用通过 s.overscrollBehavior 取得共享实例。
   * @example
   * class CustomOverscrollBehaviorCss extends OverscrollBehaviorCss {}
   */
  constructor() {
    super('overscroll-behavior');
  }
  /**
   * 原样生成 overscroll-behavior 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overscroll-behavior:value;。
   * @example
   * s.overscrollBehavior.raw('inherit') // overscroll-behavior:inherit;
   */
  raw(value: Property.OverscrollBehavior | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overscroll-behavior-block 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverscrollBehaviorBlockKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-block:auto;`。
   */
  readonly auto: Property.OverscrollBehaviorBlock | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-block:contain;`。
   */
  readonly contain: Property.OverscrollBehaviorBlock | CssString = 'contain';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-block:inherit;`。
   */
  readonly inherit: Property.OverscrollBehaviorBlock | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-block:initial;`。
   */
  readonly initial: Property.OverscrollBehaviorBlock | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-block:none;`。
   */
  readonly none: Property.OverscrollBehaviorBlock | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-block:revert;`。
   */
  readonly revert: Property.OverscrollBehaviorBlock | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-block:revert-layer;`。
   */
  readonly revertLayer: Property.OverscrollBehaviorBlock | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-block:unset;`。
   */
  readonly unset: Property.OverscrollBehaviorBlock | CssString = 'unset';
}

/**
 * 控制逻辑块轴上到达滚动边界后的行为。（overscroll-behavior-block）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
 */
export class OverscrollBehaviorBlockCss extends CssProperty {
  /**
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-block:auto;`。
   */
  readonly auto: string = 'overscroll-behavior-block:auto;';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-block:contain;`。
   */
  readonly contain: string = 'overscroll-behavior-block:contain;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-block:inherit;`。
   */
  readonly inherit: string = 'overscroll-behavior-block:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-block:initial;`。
   */
  readonly initial: string = 'overscroll-behavior-block:initial;';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-block:none;`。
   */
  readonly none: string = 'overscroll-behavior-block:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-block:revert;`。
   */
  readonly revert: string = 'overscroll-behavior-block:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-block:revert-layer;`。
   */
  readonly revertLayer: string = 'overscroll-behavior-block:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-block:unset;`。
   */
  readonly unset: string = 'overscroll-behavior-block:unset;';
  /**
   * 创建 overscroll-behavior-block 属性作者；普通使用通过 s.overscrollBehaviorBlock 取得共享实例。
   * @example
   * class CustomOverscrollBehaviorBlockCss extends OverscrollBehaviorBlockCss {}
   */
  constructor() {
    super('overscroll-behavior-block');
  }
  /**
   * 原样生成 overscroll-behavior-block 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overscroll-behavior-block:value;。
   * @example
   * s.overscrollBehaviorBlock.raw('inherit') // overscroll-behavior-block:inherit;
   */
  raw(value: Property.OverscrollBehaviorBlock | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overscroll-behavior-inline 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverscrollBehaviorInlineKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-inline:auto;`。
   */
  readonly auto: Property.OverscrollBehaviorInline | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-inline:contain;`。
   */
  readonly contain: Property.OverscrollBehaviorInline | CssString = 'contain';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-inline:inherit;`。
   */
  readonly inherit: Property.OverscrollBehaviorInline | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-inline:initial;`。
   */
  readonly initial: Property.OverscrollBehaviorInline | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-inline:none;`。
   */
  readonly none: Property.OverscrollBehaviorInline | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-inline:revert;`。
   */
  readonly revert: Property.OverscrollBehaviorInline | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-inline:revert-layer;`。
   */
  readonly revertLayer: Property.OverscrollBehaviorInline | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-inline:unset;`。
   */
  readonly unset: Property.OverscrollBehaviorInline | CssString = 'unset';
}

/**
 * 控制逻辑行内轴上到达滚动边界后的行为。（overscroll-behavior-inline）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
 */
export class OverscrollBehaviorInlineCss extends CssProperty {
  /**
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-inline:auto;`。
   */
  readonly auto: string = 'overscroll-behavior-inline:auto;';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-inline:contain;`。
   */
  readonly contain: string = 'overscroll-behavior-inline:contain;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-inline:inherit;`。
   */
  readonly inherit: string = 'overscroll-behavior-inline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-inline:initial;`。
   */
  readonly initial: string = 'overscroll-behavior-inline:initial;';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-inline:none;`。
   */
  readonly none: string = 'overscroll-behavior-inline:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-inline:revert;`。
   */
  readonly revert: string = 'overscroll-behavior-inline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-inline:revert-layer;`。
   */
  readonly revertLayer: string = 'overscroll-behavior-inline:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-inline:unset;`。
   */
  readonly unset: string = 'overscroll-behavior-inline:unset;';
  /**
   * 创建 overscroll-behavior-inline 属性作者；普通使用通过 s.overscrollBehaviorInline 取得共享实例。
   * @example
   * class CustomOverscrollBehaviorInlineCss extends OverscrollBehaviorInlineCss {}
   */
  constructor() {
    super('overscroll-behavior-inline');
  }
  /**
   * 原样生成 overscroll-behavior-inline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overscroll-behavior-inline:value;。
   * @example
   * s.overscrollBehaviorInline.raw('inherit') // overscroll-behavior-inline:inherit;
   */
  raw(value: Property.OverscrollBehaviorInline | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overscroll-behavior-x 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverscrollBehaviorXKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-x:auto;`。
   */
  readonly auto: Property.OverscrollBehaviorX | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-x:contain;`。
   */
  readonly contain: Property.OverscrollBehaviorX | CssString = 'contain';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-x:inherit;`。
   */
  readonly inherit: Property.OverscrollBehaviorX | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-x:initial;`。
   */
  readonly initial: Property.OverscrollBehaviorX | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-x:none;`。
   */
  readonly none: Property.OverscrollBehaviorX | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-x:revert;`。
   */
  readonly revert: Property.OverscrollBehaviorX | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-x:revert-layer;`。
   */
  readonly revertLayer: Property.OverscrollBehaviorX | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-x:unset;`。
   */
  readonly unset: Property.OverscrollBehaviorX | CssString = 'unset';
}

/**
 * 控制水平方向到达滚动边界后的行为。（overscroll-behavior-x）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
 */
export class OverscrollBehaviorXCss extends CssProperty {
  /**
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-x:auto;`。
   */
  readonly auto: string = 'overscroll-behavior-x:auto;';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-x:contain;`。
   */
  readonly contain: string = 'overscroll-behavior-x:contain;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-x:inherit;`。
   */
  readonly inherit: string = 'overscroll-behavior-x:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-x:initial;`。
   */
  readonly initial: string = 'overscroll-behavior-x:initial;';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-x:none;`。
   */
  readonly none: string = 'overscroll-behavior-x:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-x:revert;`。
   */
  readonly revert: string = 'overscroll-behavior-x:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-x:revert-layer;`。
   */
  readonly revertLayer: string = 'overscroll-behavior-x:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-x:unset;`。
   */
  readonly unset: string = 'overscroll-behavior-x:unset;';
  /**
   * 创建 overscroll-behavior-x 属性作者；普通使用通过 s.overscrollBehaviorX 取得共享实例。
   * @example
   * class CustomOverscrollBehaviorXCss extends OverscrollBehaviorXCss {}
   */
  constructor() {
    super('overscroll-behavior-x');
  }
  /**
   * 原样生成 overscroll-behavior-x 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overscroll-behavior-x:value;。
   * @example
   * s.overscrollBehaviorX.raw('inherit') // overscroll-behavior-x:inherit;
   */
  raw(value: Property.OverscrollBehaviorX | CssString): string {
    return this.declaration(value);
  }
}

/**
 * overscroll-behavior-y 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class OverscrollBehaviorYKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-y:auto;`。
   */
  readonly auto: Property.OverscrollBehaviorY | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-y:contain;`。
   */
  readonly contain: Property.OverscrollBehaviorY | CssString = 'contain';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-y:inherit;`。
   */
  readonly inherit: Property.OverscrollBehaviorY | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-y:initial;`。
   */
  readonly initial: Property.OverscrollBehaviorY | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-y:none;`。
   */
  readonly none: Property.OverscrollBehaviorY | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-y:revert;`。
   */
  readonly revert: Property.OverscrollBehaviorY | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-y:revert-layer;`。
   */
  readonly revertLayer: Property.OverscrollBehaviorY | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-y:unset;`。
   */
  readonly unset: Property.OverscrollBehaviorY | CssString = 'unset';
}

/**
 * 控制垂直方向到达滚动边界后的行为。（overscroll-behavior-y）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
 */
export class OverscrollBehaviorYCss extends CssProperty {
  /**
   * 采用默认滚动链和边界反馈。
   *
   * CSS 声明：`overscroll-behavior-y:auto;`。
   */
  readonly auto: string = 'overscroll-behavior-y:auto;';
  /**
   * 阻止滚动链传播到祖先，同时可保留当前容器的边界反馈。
   *
   * CSS 声明：`overscroll-behavior-y:contain;`。
   */
  readonly contain: string = 'overscroll-behavior-y:contain;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`overscroll-behavior-y:inherit;`。
   */
  readonly inherit: string = 'overscroll-behavior-y:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`overscroll-behavior-y:initial;`。
   */
  readonly initial: string = 'overscroll-behavior-y:initial;';
  /**
   * 阻止滚动链，并抑制当前容器的默认越界反馈。
   *
   * CSS 声明：`overscroll-behavior-y:none;`。
   */
  readonly none: string = 'overscroll-behavior-y:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`overscroll-behavior-y:revert;`。
   */
  readonly revert: string = 'overscroll-behavior-y:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`overscroll-behavior-y:revert-layer;`。
   */
  readonly revertLayer: string = 'overscroll-behavior-y:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`overscroll-behavior-y:unset;`。
   */
  readonly unset: string = 'overscroll-behavior-y:unset;';
  /**
   * 创建 overscroll-behavior-y 属性作者；普通使用通过 s.overscrollBehaviorY 取得共享实例。
   * @example
   * class CustomOverscrollBehaviorYCss extends OverscrollBehaviorYCss {}
   */
  constructor() {
    super('overscroll-behavior-y');
  }
  /**
   * 原样生成 overscroll-behavior-y 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 overscroll-behavior-y:value;。
   * @example
   * s.overscrollBehaviorY.raw('inherit') // overscroll-behavior-y:inherit;
   */
  raw(value: Property.OverscrollBehaviorY | CssString): string {
    return this.declaration(value);
  }
}
