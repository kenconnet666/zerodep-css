// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/**
 * gap 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GapKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`gap:inherit;`。
   */
  readonly inherit: Property.Gap | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`gap:initial;`。
   */
  readonly initial: Property.Gap | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`gap:normal;`。 */
  readonly normal: Property.Gap | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`gap:revert;`。
   */
  readonly revert: Property.Gap | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`gap:revert-layer;`。
   */
  readonly revertLayer: Property.Gap | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`gap:unset;`。
   */
  readonly unset: Property.Gap | CssString = 'unset';
}

/**
 * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。（gap）
 *
 * 两个值依次为 row-gap 和 column-gap；在 Flex 中对应项目还是行间距取决于 flex-direction。它不增加容器外缘的间距。
 *
 * 适用场景：给 Flex/Grid 项目设置统一间隔，避免逐个项目添加 margin。
 * @example
 * s.gap.px(8, 16) // gap:8px 16px;
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
 */
export class GapCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`gap:inherit;`。
   */
  readonly inherit: string = 'gap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`gap:initial;`。
   */
  readonly initial: string = 'gap:initial;';
  /** CSS 声明：`gap:normal;`。 */
  readonly normal: string = 'gap:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`gap:revert;`。
   */
  readonly revert: string = 'gap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`gap:revert-layer;`。
   */
  readonly revertLayer: string = 'gap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`gap:unset;`。
   */
  readonly unset: string = 'gap:unset;';
  /**
   * 创建 gap 属性作者；普通使用通过 s.gap 取得共享实例。
   * @example
   * class CustomGapCss extends GapCss {}
   */
  constructor() {
    super('gap');
  }
  /**
   * 原样生成 gap 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 gap:value;。
   * @example
   * s.gap.raw('inherit') // gap:inherit;
   */
  raw(value: Property.Gap | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.px(1)
   */
  px(value1: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 px。
   * @param value2 列间距（column-gap）的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.px(1, 2)
   */
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cm(1)
   */
  cm(value1: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cm。
   * @param value2 列间距（column-gap）的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cm(1, 2)
   */
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.mm(1)
   */
  mm(value1: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 mm。
   * @param value2 列间距（column-gap）的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.mm(1, 2)
   */
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.q(1)
   */
  q(value1: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 q。
   * @param value2 列间距（column-gap）的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.q(1, 2)
   */
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.in(1)
   */
  in(value1: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 in。
   * @param value2 列间距（column-gap）的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.in(1, 2)
   */
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.pt(1)
   */
  pt(value1: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 pt。
   * @param value2 列间距（column-gap）的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.pt(1, 2)
   */
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.pc(1)
   */
  pc(value1: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 pc。
   * @param value2 列间距（column-gap）的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.pc(1, 2)
   */
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.em(1)
   */
  em(value1: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 em。
   * @param value2 列间距（column-gap）的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.em(1, 2)
   */
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rem(1)
   */
  rem(value1: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 rem。
   * @param value2 列间距（column-gap）的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rem(1, 2)
   */
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ex(1)
   */
  ex(value1: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 ex。
   * @param value2 列间距（column-gap）的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ex(1, 2)
   */
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rex(1)
   */
  rex(value1: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 rex。
   * @param value2 列间距（column-gap）的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rex(1, 2)
   */
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ch(1)
   */
  ch(value1: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 ch。
   * @param value2 列间距（column-gap）的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ch(1, 2)
   */
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rch(1)
   */
  rch(value1: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 rch。
   * @param value2 列间距（column-gap）的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rch(1, 2)
   */
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cap(1)
   */
  cap(value1: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cap。
   * @param value2 列间距（column-gap）的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cap(1, 2)
   */
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rcap(1)
   */
  rcap(value1: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 rcap。
   * @param value2 列间距（column-gap）的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rcap(1, 2)
   */
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ic(1)
   */
  ic(value1: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 ic。
   * @param value2 列间距（column-gap）的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ic(1, 2)
   */
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ric(1)
   */
  ric(value1: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 ric。
   * @param value2 列间距（column-gap）的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.ric(1, 2)
   */
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lh(1)
   */
  lh(value1: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 lh。
   * @param value2 列间距（column-gap）的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lh(1, 2)
   */
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rlh(1)
   */
  rlh(value1: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 rlh。
   * @param value2 列间距（column-gap）的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.rlh(1, 2)
   */
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vw(1)
   */
  vw(value1: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 vw。
   * @param value2 列间距（column-gap）的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vw(1, 2)
   */
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vh(1)
   */
  vh(value1: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 vh。
   * @param value2 列间距（column-gap）的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vh(1, 2)
   */
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vi(1)
   */
  vi(value1: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 vi。
   * @param value2 列间距（column-gap）的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vi(1, 2)
   */
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vb(1)
   */
  vb(value1: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 vb。
   * @param value2 列间距（column-gap）的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vb(1, 2)
   */
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vmin(1)
   */
  vmin(value1: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 vmin。
   * @param value2 列间距（column-gap）的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vmin(1, 2)
   */
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vmax(1)
   */
  vmax(value1: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 vmax。
   * @param value2 列间距（column-gap）的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.vmax(1, 2)
   */
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svw(1)
   */
  svw(value1: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 svw。
   * @param value2 列间距（column-gap）的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svw(1, 2)
   */
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svh(1)
   */
  svh(value1: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 svh。
   * @param value2 列间距（column-gap）的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svh(1, 2)
   */
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svi(1)
   */
  svi(value1: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 svi。
   * @param value2 列间距（column-gap）的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svi(1, 2)
   */
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svb(1)
   */
  svb(value1: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 svb。
   * @param value2 列间距（column-gap）的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svb(1, 2)
   */
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svmin(1)
   */
  svmin(value1: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 svmin。
   * @param value2 列间距（column-gap）的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svmin(1, 2)
   */
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svmax(1)
   */
  svmax(value1: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 svmax。
   * @param value2 列间距（column-gap）的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.svmax(1, 2)
   */
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvw(1)
   */
  lvw(value1: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 lvw。
   * @param value2 列间距（column-gap）的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvw(1, 2)
   */
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvh(1)
   */
  lvh(value1: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 lvh。
   * @param value2 列间距（column-gap）的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvh(1, 2)
   */
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvi(1)
   */
  lvi(value1: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 lvi。
   * @param value2 列间距（column-gap）的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvi(1, 2)
   */
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvb(1)
   */
  lvb(value1: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 lvb。
   * @param value2 列间距（column-gap）的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvb(1, 2)
   */
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvmin(1)
   */
  lvmin(value1: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 lvmin。
   * @param value2 列间距（column-gap）的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvmin(1, 2)
   */
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvmax(1)
   */
  lvmax(value1: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 lvmax。
   * @param value2 列间距（column-gap）的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.lvmax(1, 2)
   */
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvw(1)
   */
  dvw(value1: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 dvw。
   * @param value2 列间距（column-gap）的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvw(1, 2)
   */
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvh(1)
   */
  dvh(value1: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 dvh。
   * @param value2 列间距（column-gap）的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvh(1, 2)
   */
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvi(1)
   */
  dvi(value1: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 dvi。
   * @param value2 列间距（column-gap）的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvi(1, 2)
   */
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvb(1)
   */
  dvb(value1: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 dvb。
   * @param value2 列间距（column-gap）的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvb(1, 2)
   */
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvmin(1)
   */
  dvmin(value1: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 dvmin。
   * @param value2 列间距（column-gap）的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvmin(1, 2)
   */
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvmax(1)
   */
  dvmax(value1: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 dvmax。
   * @param value2 列间距（column-gap）的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.dvmax(1, 2)
   */
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqw(1)
   */
  cqw(value1: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cqw。
   * @param value2 列间距（column-gap）的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqw(1, 2)
   */
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqh(1)
   */
  cqh(value1: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cqh。
   * @param value2 列间距（column-gap）的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqh(1, 2)
   */
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqi(1)
   */
  cqi(value1: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cqi。
   * @param value2 列间距（column-gap）的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqi(1, 2)
   */
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqb(1)
   */
  cqb(value1: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cqb。
   * @param value2 列间距（column-gap）的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqb(1, 2)
   */
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqmin(1)
   */
  cqmin(value1: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cqmin。
   * @param value2 列间距（column-gap）的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqmin(1, 2)
   */
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqmax(1)
   */
  cqmax(value1: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 cqmax。
   * @param value2 列间距（column-gap）的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）与列间距（column-gap）的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.percent(1)
   */
  percent(value1: number): string;
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 行间距（row-gap）的数值，自动附加 %。
   * @param value2 列间距（column-gap）的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.gap.percent(1, 2)
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
   * s.gap.calc('var(--value) * 2')
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
   * s.gap.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Gap | CssString, ...others: (Property.Gap | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gap.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Gap | CssString, ...others: (Property.Gap | CssString)[]): string {
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
   * s.gap.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Gap | CssString,
    preferred: Property.Gap | CssString,
    maximum: Property.Gap | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * glyph-orientation-vertical 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GlyphOrientationVerticalKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`glyph-orientation-vertical:auto;`。 */
  readonly auto: Property.GlyphOrientationVertical | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`glyph-orientation-vertical:inherit;`。
   */
  readonly inherit: Property.GlyphOrientationVertical | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`glyph-orientation-vertical:initial;`。
   */
  readonly initial: Property.GlyphOrientationVertical | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`glyph-orientation-vertical:revert;`。
   */
  readonly revert: Property.GlyphOrientationVertical | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`glyph-orientation-vertical:revert-layer;`。
   */
  readonly revertLayer: Property.GlyphOrientationVertical | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`glyph-orientation-vertical:unset;`。
   */
  readonly unset: Property.GlyphOrientationVertical | CssString = 'unset';
}

/**
 * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。（glyph-orientation-vertical）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
 */
export class GlyphOrientationVerticalCss extends CssProperty {
  /** CSS 声明：`glyph-orientation-vertical:auto;`。 */
  readonly auto: string = 'glyph-orientation-vertical:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`glyph-orientation-vertical:inherit;`。
   */
  readonly inherit: string = 'glyph-orientation-vertical:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`glyph-orientation-vertical:initial;`。
   */
  readonly initial: string = 'glyph-orientation-vertical:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`glyph-orientation-vertical:revert;`。
   */
  readonly revert: string = 'glyph-orientation-vertical:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`glyph-orientation-vertical:revert-layer;`。
   */
  readonly revertLayer: string = 'glyph-orientation-vertical:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`glyph-orientation-vertical:unset;`。
   */
  readonly unset: string = 'glyph-orientation-vertical:unset;';
  /**
   * 创建 glyph-orientation-vertical 属性作者；普通使用通过 s.glyphOrientationVertical 取得共享实例。
   * @example
   * class CustomGlyphOrientationVerticalCss extends GlyphOrientationVerticalCss {}
   */
  constructor() {
    super('glyph-orientation-vertical');
  }
  /**
   * 原样生成 glyph-orientation-vertical 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 glyph-orientation-vertical:value;。
   * @example
   * s.glyphOrientationVertical.raw('inherit') // glyph-orientation-vertical:inherit;
   */
  raw(value: Property.GlyphOrientationVertical | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.glyphOrientationVertical.calc('var(--value) * 2')
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
   * s.glyphOrientationVertical.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GlyphOrientationVertical | CssString,
    ...others: (Property.GlyphOrientationVertical | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.glyphOrientationVertical.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GlyphOrientationVertical | CssString,
    ...others: (Property.GlyphOrientationVertical | CssString)[]
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
   * s.glyphOrientationVertical.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GlyphOrientationVertical | CssString,
    preferred: Property.GlyphOrientationVertical | CssString,
    maximum: Property.GlyphOrientationVertical | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid:inherit;`。
   */
  readonly inherit: Property.Grid | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid:initial;`。
   */
  readonly initial: Property.Grid | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid:none;`。 */
  readonly none: Property.Grid | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid:revert;`。
   */
  readonly revert: Property.Grid | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid:revert-layer;`。
   */
  readonly revertLayer: Property.Grid | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid:unset;`。
   */
  readonly unset: Property.Grid | CssString = 'unset';
}

/**
 * 集中设置显式和隐式网格的轨道、区域及自动放置方式。（grid）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
 */
export class GridCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid:inherit;`。
   */
  readonly inherit: string = 'grid:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid:initial;`。
   */
  readonly initial: string = 'grid:initial;';
  /** CSS 声明：`grid:none;`。 */
  readonly none: string = 'grid:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid:revert;`。
   */
  readonly revert: string = 'grid:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid:revert-layer;`。
   */
  readonly revertLayer: string = 'grid:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid:unset;`。
   */
  readonly unset: string = 'grid:unset;';
  /**
   * 创建 grid 属性作者；普通使用通过 s.grid 取得共享实例。
   * @example
   * class CustomGridCss extends GridCss {}
   */
  constructor() {
    super('grid');
  }
  /**
   * 原样生成 grid 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid:value;。
   * @example
   * s.grid.raw('inherit') // grid:inherit;
   */
  raw(value: Property.Grid | CssString): string {
    return this.declaration(value);
  }
}

/**
 * grid-area 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridAreaKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-area:auto;`。 */
  readonly auto: Property.GridArea | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-area:inherit;`。
   */
  readonly inherit: Property.GridArea | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-area:initial;`。
   */
  readonly initial: Property.GridArea | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-area:revert;`。
   */
  readonly revert: Property.GridArea | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-area:revert-layer;`。
   */
  readonly revertLayer: Property.GridArea | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-area:unset;`。
   */
  readonly unset: Property.GridArea | CssString = 'unset';
}

/**
 * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。（grid-area）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
 */
export class GridAreaCss extends CssProperty {
  /** CSS 声明：`grid-area:auto;`。 */
  readonly auto: string = 'grid-area:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-area:inherit;`。
   */
  readonly inherit: string = 'grid-area:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-area:initial;`。
   */
  readonly initial: string = 'grid-area:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-area:revert;`。
   */
  readonly revert: string = 'grid-area:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-area:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-area:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-area:unset;`。
   */
  readonly unset: string = 'grid-area:unset;';
  /**
   * 创建 grid-area 属性作者；普通使用通过 s.gridArea 取得共享实例。
   * @example
   * class CustomGridAreaCss extends GridAreaCss {}
   */
  constructor() {
    super('grid-area');
  }
  /**
   * 原样生成 grid-area 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-area:value;。
   * @example
   * s.gridArea.raw('inherit') // grid-area:inherit;
   */
  raw(value: Property.GridArea | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridArea.calc('var(--value) * 2')
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
   * s.gridArea.min('var(--first)', 'var(--second)')
   */
  min(value: Property.GridArea | CssString, ...others: (Property.GridArea | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridArea.max('var(--first)', 'var(--second)')
   */
  max(value: Property.GridArea | CssString, ...others: (Property.GridArea | CssString)[]): string {
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
   * s.gridArea.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridArea | CssString,
    preferred: Property.GridArea | CssString,
    maximum: Property.GridArea | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid-auto-columns 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridAutoColumnsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-auto-columns:auto;`。 */
  readonly auto: Property.GridAutoColumns | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-auto-columns:inherit;`。
   */
  readonly inherit: Property.GridAutoColumns | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-auto-columns:initial;`。
   */
  readonly initial: Property.GridAutoColumns | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-auto-columns:max-content;`。 */
  readonly maxContent: Property.GridAutoColumns | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-auto-columns:min-content;`。 */
  readonly minContent: Property.GridAutoColumns | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-auto-columns:revert;`。
   */
  readonly revert: Property.GridAutoColumns | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-auto-columns:revert-layer;`。
   */
  readonly revertLayer: Property.GridAutoColumns | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-auto-columns:unset;`。
   */
  readonly unset: Property.GridAutoColumns | CssString = 'unset';
}

/**
 * 设置隐式生成的网格列尺寸。（grid-auto-columns）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
 */
export class GridAutoColumnsCss extends LengthCssProperty {
  /** CSS 声明：`grid-auto-columns:auto;`。 */
  readonly auto: string = 'grid-auto-columns:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-auto-columns:inherit;`。
   */
  readonly inherit: string = 'grid-auto-columns:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-auto-columns:initial;`。
   */
  readonly initial: string = 'grid-auto-columns:initial;';
  /** CSS 声明：`grid-auto-columns:max-content;`。 */
  readonly maxContent: string = 'grid-auto-columns:max-content;';
  /** CSS 声明：`grid-auto-columns:min-content;`。 */
  readonly minContent: string = 'grid-auto-columns:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-auto-columns:revert;`。
   */
  readonly revert: string = 'grid-auto-columns:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-auto-columns:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-auto-columns:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-auto-columns:unset;`。
   */
  readonly unset: string = 'grid-auto-columns:unset;';
  /**
   * 创建 grid-auto-columns 属性作者；普通使用通过 s.gridAutoColumns 取得共享实例。
   * @example
   * class CustomGridAutoColumnsCss extends GridAutoColumnsCss {}
   */
  constructor() {
    super('grid-auto-columns');
  }
  /**
   * 原样生成 grid-auto-columns 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-auto-columns:value;。
   * @example
   * s.gridAutoColumns.raw('inherit') // grid-auto-columns:inherit;
   */
  raw(value: Property.GridAutoColumns | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridAutoColumns.calc('var(--value) * 2')
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
   * s.gridAutoColumns.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridAutoColumns | CssString,
    ...others: (Property.GridAutoColumns | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridAutoColumns.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridAutoColumns | CssString,
    ...others: (Property.GridAutoColumns | CssString)[]
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
   * s.gridAutoColumns.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridAutoColumns | CssString,
    preferred: Property.GridAutoColumns | CssString,
    maximum: Property.GridAutoColumns | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
  /**
   * 以最小和最大尺寸限定一条网格轨道。
   *
   * 非零长度须带单位；嵌套在 repeat 中时应传 minmax(...) 裸字符串。
   * @param minimum 轨道最小尺寸；不能使用 fr 作为最小值。
   * @param maximum 轨道最大尺寸，可使用 fr；不能小于最小值以缩小该下限。
   * @returns 包含 minmax(...) 的完整属性声明。
   * @example
   * s.gridAutoColumns.minmax(0, '1fr')
   */
  minmax(
    minimum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
    maximum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
  ): string {
    return this.raw(`minmax(${minimum}, ${maximum})`);
  }
  /**
   * 在自动最小尺寸与最大内容尺寸之间，以给定上限约束轨道。
   * @param limit 带单位的长度、百分比或 0，不接受 fr 作为上限。
   * @returns 包含 fit-content(...) 的完整属性声明。
   * @example
   * s.gridAutoColumns.fitContent('20rem')
   */
  fitContent(limit: CssString | 0): string {
    return this.raw(`fit-content(${limit})`);
  }
}

/**
 * grid-auto-flow 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridAutoFlowKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 优先沿列放置项目，必要时创建新的隐式列。
   *
   * CSS 声明：`grid-auto-flow:column;`。
   */
  readonly column: Property.GridAutoFlow | CssString = 'column';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 尝试回填前面留下的空洞，可能让视觉顺序与 DOM 顺序不同。
   *
   * CSS 声明：`grid-auto-flow:dense;`。
   */
  readonly dense: Property.GridAutoFlow | CssString = 'dense';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-auto-flow:inherit;`。
   */
  readonly inherit: Property.GridAutoFlow | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-auto-flow:initial;`。
   */
  readonly initial: Property.GridAutoFlow | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-auto-flow:revert;`。
   */
  readonly revert: Property.GridAutoFlow | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-auto-flow:revert-layer;`。
   */
  readonly revertLayer: Property.GridAutoFlow | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 优先沿行放置项目，必要时创建新的隐式行。
   *
   * CSS 声明：`grid-auto-flow:row;`。
   */
  readonly row: Property.GridAutoFlow | CssString = 'row';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-auto-flow:unset;`。
   */
  readonly unset: Property.GridAutoFlow | CssString = 'unset';
}

/**
 * 设置网格自动放置算法的行列方向及是否密集填洞。（grid-auto-flow）
 *
 * dense 可能改变视觉顺序，但不改变 DOM 和键盘导航顺序。
 *
 * 常用值：
 * - `row`：优先沿行放置项目，必要时创建新的隐式行。
 * - `column`：优先沿列放置项目，必要时创建新的隐式列。
 * - `dense`：尝试回填前面留下的空洞，可能让视觉顺序与 DOM 顺序不同。
 *
 * 适用场景：控制未明确指定位置的网格项目如何自动填入轨道。
 *
 * CSS 初始值：`row`（不同于浏览器默认样式表）。
 * @example
 * css(s.display.grid, s.gridAutoFlow.row)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
 */
export class GridAutoFlowCss extends CssProperty {
  /**
   * 优先沿列放置项目，必要时创建新的隐式列。
   *
   * CSS 声明：`grid-auto-flow:column;`。
   */
  readonly column: string = 'grid-auto-flow:column;';
  /**
   * 尝试回填前面留下的空洞，可能让视觉顺序与 DOM 顺序不同。
   *
   * CSS 声明：`grid-auto-flow:dense;`。
   */
  readonly dense: string = 'grid-auto-flow:dense;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-auto-flow:inherit;`。
   */
  readonly inherit: string = 'grid-auto-flow:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-auto-flow:initial;`。
   */
  readonly initial: string = 'grid-auto-flow:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-auto-flow:revert;`。
   */
  readonly revert: string = 'grid-auto-flow:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-auto-flow:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-auto-flow:revert-layer;';
  /**
   * 优先沿行放置项目，必要时创建新的隐式行。
   *
   * CSS 声明：`grid-auto-flow:row;`。
   */
  readonly row: string = 'grid-auto-flow:row;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-auto-flow:unset;`。
   */
  readonly unset: string = 'grid-auto-flow:unset;';
  /**
   * 创建 grid-auto-flow 属性作者；普通使用通过 s.gridAutoFlow 取得共享实例。
   * @example
   * class CustomGridAutoFlowCss extends GridAutoFlowCss {}
   */
  constructor() {
    super('grid-auto-flow');
  }
  /**
   * 原样生成 grid-auto-flow 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-auto-flow:value;。
   * @example
   * s.gridAutoFlow.raw('inherit') // grid-auto-flow:inherit;
   */
  raw(value: Property.GridAutoFlow | CssString): string {
    return this.declaration(value);
  }
}

/**
 * grid-auto-rows 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridAutoRowsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-auto-rows:auto;`。 */
  readonly auto: Property.GridAutoRows | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-auto-rows:inherit;`。
   */
  readonly inherit: Property.GridAutoRows | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-auto-rows:initial;`。
   */
  readonly initial: Property.GridAutoRows | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-auto-rows:max-content;`。 */
  readonly maxContent: Property.GridAutoRows | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-auto-rows:min-content;`。 */
  readonly minContent: Property.GridAutoRows | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-auto-rows:revert;`。
   */
  readonly revert: Property.GridAutoRows | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-auto-rows:revert-layer;`。
   */
  readonly revertLayer: Property.GridAutoRows | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-auto-rows:unset;`。
   */
  readonly unset: Property.GridAutoRows | CssString = 'unset';
}

/**
 * 设置隐式生成的网格行尺寸。（grid-auto-rows）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
 */
export class GridAutoRowsCss extends LengthCssProperty {
  /** CSS 声明：`grid-auto-rows:auto;`。 */
  readonly auto: string = 'grid-auto-rows:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-auto-rows:inherit;`。
   */
  readonly inherit: string = 'grid-auto-rows:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-auto-rows:initial;`。
   */
  readonly initial: string = 'grid-auto-rows:initial;';
  /** CSS 声明：`grid-auto-rows:max-content;`。 */
  readonly maxContent: string = 'grid-auto-rows:max-content;';
  /** CSS 声明：`grid-auto-rows:min-content;`。 */
  readonly minContent: string = 'grid-auto-rows:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-auto-rows:revert;`。
   */
  readonly revert: string = 'grid-auto-rows:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-auto-rows:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-auto-rows:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-auto-rows:unset;`。
   */
  readonly unset: string = 'grid-auto-rows:unset;';
  /**
   * 创建 grid-auto-rows 属性作者；普通使用通过 s.gridAutoRows 取得共享实例。
   * @example
   * class CustomGridAutoRowsCss extends GridAutoRowsCss {}
   */
  constructor() {
    super('grid-auto-rows');
  }
  /**
   * 原样生成 grid-auto-rows 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-auto-rows:value;。
   * @example
   * s.gridAutoRows.raw('inherit') // grid-auto-rows:inherit;
   */
  raw(value: Property.GridAutoRows | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridAutoRows.calc('var(--value) * 2')
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
   * s.gridAutoRows.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridAutoRows | CssString,
    ...others: (Property.GridAutoRows | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridAutoRows.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridAutoRows | CssString,
    ...others: (Property.GridAutoRows | CssString)[]
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
   * s.gridAutoRows.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridAutoRows | CssString,
    preferred: Property.GridAutoRows | CssString,
    maximum: Property.GridAutoRows | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
  /**
   * 以最小和最大尺寸限定一条网格轨道。
   *
   * 非零长度须带单位；嵌套在 repeat 中时应传 minmax(...) 裸字符串。
   * @param minimum 轨道最小尺寸；不能使用 fr 作为最小值。
   * @param maximum 轨道最大尺寸，可使用 fr；不能小于最小值以缩小该下限。
   * @returns 包含 minmax(...) 的完整属性声明。
   * @example
   * s.gridAutoRows.minmax(0, '1fr')
   */
  minmax(
    minimum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
    maximum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
  ): string {
    return this.raw(`minmax(${minimum}, ${maximum})`);
  }
  /**
   * 在自动最小尺寸与最大内容尺寸之间，以给定上限约束轨道。
   * @param limit 带单位的长度、百分比或 0，不接受 fr 作为上限。
   * @returns 包含 fit-content(...) 的完整属性声明。
   * @example
   * s.gridAutoRows.fitContent('20rem')
   */
  fitContent(limit: CssString | 0): string {
    return this.raw(`fit-content(${limit})`);
  }
}

/**
 * grid-column 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridColumnKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-column:auto;`。 */
  readonly auto: Property.GridColumn | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-column:inherit;`。
   */
  readonly inherit: Property.GridColumn | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-column:initial;`。
   */
  readonly initial: Property.GridColumn | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-column:revert;`。
   */
  readonly revert: Property.GridColumn | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-column:revert-layer;`。
   */
  readonly revertLayer: Property.GridColumn | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-column:unset;`。
   */
  readonly unset: Property.GridColumn | CssString = 'unset';
}

/**
 * 设置网格项目的列起点和列终点。（grid-column）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
 */
export class GridColumnCss extends CssProperty {
  /** CSS 声明：`grid-column:auto;`。 */
  readonly auto: string = 'grid-column:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-column:inherit;`。
   */
  readonly inherit: string = 'grid-column:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-column:initial;`。
   */
  readonly initial: string = 'grid-column:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-column:revert;`。
   */
  readonly revert: string = 'grid-column:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-column:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-column:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-column:unset;`。
   */
  readonly unset: string = 'grid-column:unset;';
  /**
   * 创建 grid-column 属性作者；普通使用通过 s.gridColumn 取得共享实例。
   * @example
   * class CustomGridColumnCss extends GridColumnCss {}
   */
  constructor() {
    super('grid-column');
  }
  /**
   * 原样生成 grid-column 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-column:value;。
   * @example
   * s.gridColumn.raw('inherit') // grid-column:inherit;
   */
  raw(value: Property.GridColumn | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridColumn.calc('var(--value) * 2')
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
   * s.gridColumn.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridColumn | CssString,
    ...others: (Property.GridColumn | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridColumn.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridColumn | CssString,
    ...others: (Property.GridColumn | CssString)[]
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
   * s.gridColumn.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridColumn | CssString,
    preferred: Property.GridColumn | CssString,
    maximum: Property.GridColumn | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid-column-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridColumnEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-column-end:auto;`。 */
  readonly auto: Property.GridColumnEnd | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-column-end:inherit;`。
   */
  readonly inherit: Property.GridColumnEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-column-end:initial;`。
   */
  readonly initial: Property.GridColumnEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-column-end:revert;`。
   */
  readonly revert: Property.GridColumnEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-column-end:revert-layer;`。
   */
  readonly revertLayer: Property.GridColumnEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-column-end:unset;`。
   */
  readonly unset: Property.GridColumnEnd | CssString = 'unset';
}

/**
 * 设置网格项目的列终止线或跨越范围。（grid-column-end）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
 */
export class GridColumnEndCss extends CssProperty {
  /** CSS 声明：`grid-column-end:auto;`。 */
  readonly auto: string = 'grid-column-end:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-column-end:inherit;`。
   */
  readonly inherit: string = 'grid-column-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-column-end:initial;`。
   */
  readonly initial: string = 'grid-column-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-column-end:revert;`。
   */
  readonly revert: string = 'grid-column-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-column-end:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-column-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-column-end:unset;`。
   */
  readonly unset: string = 'grid-column-end:unset;';
  /**
   * 创建 grid-column-end 属性作者；普通使用通过 s.gridColumnEnd 取得共享实例。
   * @example
   * class CustomGridColumnEndCss extends GridColumnEndCss {}
   */
  constructor() {
    super('grid-column-end');
  }
  /**
   * 原样生成 grid-column-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-column-end:value;。
   * @example
   * s.gridColumnEnd.raw('inherit') // grid-column-end:inherit;
   */
  raw(value: Property.GridColumnEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridColumnEnd.calc('var(--value) * 2')
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
   * s.gridColumnEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridColumnEnd | CssString,
    ...others: (Property.GridColumnEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridColumnEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridColumnEnd | CssString,
    ...others: (Property.GridColumnEnd | CssString)[]
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
   * s.gridColumnEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridColumnEnd | CssString,
    preferred: Property.GridColumnEnd | CssString,
    maximum: Property.GridColumnEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid-column-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridColumnStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-column-start:auto;`。 */
  readonly auto: Property.GridColumnStart | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-column-start:inherit;`。
   */
  readonly inherit: Property.GridColumnStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-column-start:initial;`。
   */
  readonly initial: Property.GridColumnStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-column-start:revert;`。
   */
  readonly revert: Property.GridColumnStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-column-start:revert-layer;`。
   */
  readonly revertLayer: Property.GridColumnStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-column-start:unset;`。
   */
  readonly unset: Property.GridColumnStart | CssString = 'unset';
}

/**
 * 设置网格项目的列起始线或跨越范围。（grid-column-start）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
 */
export class GridColumnStartCss extends CssProperty {
  /** CSS 声明：`grid-column-start:auto;`。 */
  readonly auto: string = 'grid-column-start:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-column-start:inherit;`。
   */
  readonly inherit: string = 'grid-column-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-column-start:initial;`。
   */
  readonly initial: string = 'grid-column-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-column-start:revert;`。
   */
  readonly revert: string = 'grid-column-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-column-start:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-column-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-column-start:unset;`。
   */
  readonly unset: string = 'grid-column-start:unset;';
  /**
   * 创建 grid-column-start 属性作者；普通使用通过 s.gridColumnStart 取得共享实例。
   * @example
   * class CustomGridColumnStartCss extends GridColumnStartCss {}
   */
  constructor() {
    super('grid-column-start');
  }
  /**
   * 原样生成 grid-column-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-column-start:value;。
   * @example
   * s.gridColumnStart.raw('inherit') // grid-column-start:inherit;
   */
  raw(value: Property.GridColumnStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridColumnStart.calc('var(--value) * 2')
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
   * s.gridColumnStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridColumnStart | CssString,
    ...others: (Property.GridColumnStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridColumnStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridColumnStart | CssString,
    ...others: (Property.GridColumnStart | CssString)[]
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
   * s.gridColumnStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridColumnStart | CssString,
    preferred: Property.GridColumnStart | CssString,
    maximum: Property.GridColumnStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid-row 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridRowKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-row:auto;`。 */
  readonly auto: Property.GridRow | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-row:inherit;`。
   */
  readonly inherit: Property.GridRow | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-row:initial;`。
   */
  readonly initial: Property.GridRow | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-row:revert;`。
   */
  readonly revert: Property.GridRow | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-row:revert-layer;`。
   */
  readonly revertLayer: Property.GridRow | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-row:unset;`。
   */
  readonly unset: Property.GridRow | CssString = 'unset';
}

/**
 * 设置网格项目的行起点和行终点。（grid-row）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
 */
export class GridRowCss extends CssProperty {
  /** CSS 声明：`grid-row:auto;`。 */
  readonly auto: string = 'grid-row:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-row:inherit;`。
   */
  readonly inherit: string = 'grid-row:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-row:initial;`。
   */
  readonly initial: string = 'grid-row:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-row:revert;`。
   */
  readonly revert: string = 'grid-row:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-row:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-row:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-row:unset;`。
   */
  readonly unset: string = 'grid-row:unset;';
  /**
   * 创建 grid-row 属性作者；普通使用通过 s.gridRow 取得共享实例。
   * @example
   * class CustomGridRowCss extends GridRowCss {}
   */
  constructor() {
    super('grid-row');
  }
  /**
   * 原样生成 grid-row 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-row:value;。
   * @example
   * s.gridRow.raw('inherit') // grid-row:inherit;
   */
  raw(value: Property.GridRow | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridRow.calc('var(--value) * 2')
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
   * s.gridRow.min('var(--first)', 'var(--second)')
   */
  min(value: Property.GridRow | CssString, ...others: (Property.GridRow | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridRow.max('var(--first)', 'var(--second)')
   */
  max(value: Property.GridRow | CssString, ...others: (Property.GridRow | CssString)[]): string {
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
   * s.gridRow.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridRow | CssString,
    preferred: Property.GridRow | CssString,
    maximum: Property.GridRow | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid-row-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridRowEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-row-end:auto;`。 */
  readonly auto: Property.GridRowEnd | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-row-end:inherit;`。
   */
  readonly inherit: Property.GridRowEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-row-end:initial;`。
   */
  readonly initial: Property.GridRowEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-row-end:revert;`。
   */
  readonly revert: Property.GridRowEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-row-end:revert-layer;`。
   */
  readonly revertLayer: Property.GridRowEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-row-end:unset;`。
   */
  readonly unset: Property.GridRowEnd | CssString = 'unset';
}

/**
 * 设置网格项目的行终止线或跨越范围。（grid-row-end）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
 */
export class GridRowEndCss extends CssProperty {
  /** CSS 声明：`grid-row-end:auto;`。 */
  readonly auto: string = 'grid-row-end:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-row-end:inherit;`。
   */
  readonly inherit: string = 'grid-row-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-row-end:initial;`。
   */
  readonly initial: string = 'grid-row-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-row-end:revert;`。
   */
  readonly revert: string = 'grid-row-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-row-end:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-row-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-row-end:unset;`。
   */
  readonly unset: string = 'grid-row-end:unset;';
  /**
   * 创建 grid-row-end 属性作者；普通使用通过 s.gridRowEnd 取得共享实例。
   * @example
   * class CustomGridRowEndCss extends GridRowEndCss {}
   */
  constructor() {
    super('grid-row-end');
  }
  /**
   * 原样生成 grid-row-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-row-end:value;。
   * @example
   * s.gridRowEnd.raw('inherit') // grid-row-end:inherit;
   */
  raw(value: Property.GridRowEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridRowEnd.calc('var(--value) * 2')
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
   * s.gridRowEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridRowEnd | CssString,
    ...others: (Property.GridRowEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridRowEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridRowEnd | CssString,
    ...others: (Property.GridRowEnd | CssString)[]
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
   * s.gridRowEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridRowEnd | CssString,
    preferred: Property.GridRowEnd | CssString,
    maximum: Property.GridRowEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid-row-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridRowStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-row-start:auto;`。 */
  readonly auto: Property.GridRowStart | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-row-start:inherit;`。
   */
  readonly inherit: Property.GridRowStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-row-start:initial;`。
   */
  readonly initial: Property.GridRowStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-row-start:revert;`。
   */
  readonly revert: Property.GridRowStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-row-start:revert-layer;`。
   */
  readonly revertLayer: Property.GridRowStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-row-start:unset;`。
   */
  readonly unset: Property.GridRowStart | CssString = 'unset';
}

/**
 * 设置网格项目的行起始线或跨越范围。（grid-row-start）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
 */
export class GridRowStartCss extends CssProperty {
  /** CSS 声明：`grid-row-start:auto;`。 */
  readonly auto: string = 'grid-row-start:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-row-start:inherit;`。
   */
  readonly inherit: string = 'grid-row-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-row-start:initial;`。
   */
  readonly initial: string = 'grid-row-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-row-start:revert;`。
   */
  readonly revert: string = 'grid-row-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-row-start:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-row-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-row-start:unset;`。
   */
  readonly unset: string = 'grid-row-start:unset;';
  /**
   * 创建 grid-row-start 属性作者；普通使用通过 s.gridRowStart 取得共享实例。
   * @example
   * class CustomGridRowStartCss extends GridRowStartCss {}
   */
  constructor() {
    super('grid-row-start');
  }
  /**
   * 原样生成 grid-row-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-row-start:value;。
   * @example
   * s.gridRowStart.raw('inherit') // grid-row-start:inherit;
   */
  raw(value: Property.GridRowStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridRowStart.calc('var(--value) * 2')
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
   * s.gridRowStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridRowStart | CssString,
    ...others: (Property.GridRowStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridRowStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridRowStart | CssString,
    ...others: (Property.GridRowStart | CssString)[]
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
   * s.gridRowStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridRowStart | CssString,
    preferred: Property.GridRowStart | CssString,
    maximum: Property.GridRowStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * grid-template 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridTemplateKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template:inherit;`。
   */
  readonly inherit: Property.GridTemplate | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template:initial;`。
   */
  readonly initial: Property.GridTemplate | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template:none;`。 */
  readonly none: Property.GridTemplate | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template:revert;`。
   */
  readonly revert: Property.GridTemplate | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template:revert-layer;`。
   */
  readonly revertLayer: Property.GridTemplate | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template:unset;`。
   */
  readonly unset: Property.GridTemplate | CssString = 'unset';
}

/**
 * 集中设置显式网格的行、列和命名区域。（grid-template）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
 */
export class GridTemplateCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template:inherit;`。
   */
  readonly inherit: string = 'grid-template:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template:initial;`。
   */
  readonly initial: string = 'grid-template:initial;';
  /** CSS 声明：`grid-template:none;`。 */
  readonly none: string = 'grid-template:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template:revert;`。
   */
  readonly revert: string = 'grid-template:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-template:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template:unset;`。
   */
  readonly unset: string = 'grid-template:unset;';
  /**
   * 创建 grid-template 属性作者；普通使用通过 s.gridTemplate 取得共享实例。
   * @example
   * class CustomGridTemplateCss extends GridTemplateCss {}
   */
  constructor() {
    super('grid-template');
  }
  /**
   * 原样生成 grid-template 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-template:value;。
   * @example
   * s.gridTemplate.raw('inherit') // grid-template:inherit;
   */
  raw(value: Property.GridTemplate | CssString): string {
    return this.declaration(value);
  }
}

/**
 * grid-template-areas 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridTemplateAreasKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template-areas:inherit;`。
   */
  readonly inherit: Property.GridTemplateAreas | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template-areas:initial;`。
   */
  readonly initial: Property.GridTemplateAreas | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-areas:none;`。 */
  readonly none: Property.GridTemplateAreas | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template-areas:revert;`。
   */
  readonly revert: Property.GridTemplateAreas | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template-areas:revert-layer;`。
   */
  readonly revertLayer: Property.GridTemplateAreas | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template-areas:unset;`。
   */
  readonly unset: Property.GridTemplateAreas | CssString = 'unset';
}

/**
 * 用区域名称矩阵定义网格布局区域。（grid-template-areas）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
 */
export class GridTemplateAreasCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template-areas:inherit;`。
   */
  readonly inherit: string = 'grid-template-areas:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template-areas:initial;`。
   */
  readonly initial: string = 'grid-template-areas:initial;';
  /** CSS 声明：`grid-template-areas:none;`。 */
  readonly none: string = 'grid-template-areas:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template-areas:revert;`。
   */
  readonly revert: string = 'grid-template-areas:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template-areas:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-template-areas:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template-areas:unset;`。
   */
  readonly unset: string = 'grid-template-areas:unset;';
  /**
   * 创建 grid-template-areas 属性作者；普通使用通过 s.gridTemplateAreas 取得共享实例。
   * @example
   * class CustomGridTemplateAreasCss extends GridTemplateAreasCss {}
   */
  constructor() {
    super('grid-template-areas');
  }
  /**
   * 原样生成 grid-template-areas 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-template-areas:value;。
   * @example
   * s.gridTemplateAreas.raw('inherit') // grid-template-areas:inherit;
   */
  raw(value: Property.GridTemplateAreas | CssString): string {
    return this.declaration(value);
  }
}

/**
 * grid-template-columns 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridTemplateColumnsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-columns:auto;`。 */
  readonly auto: Property.GridTemplateColumns | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template-columns:inherit;`。
   */
  readonly inherit: Property.GridTemplateColumns | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template-columns:initial;`。
   */
  readonly initial: Property.GridTemplateColumns | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-columns:max-content;`。 */
  readonly maxContent: Property.GridTemplateColumns | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-columns:min-content;`。 */
  readonly minContent: Property.GridTemplateColumns | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-columns:none;`。 */
  readonly none: Property.GridTemplateColumns | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template-columns:revert;`。
   */
  readonly revert: Property.GridTemplateColumns | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template-columns:revert-layer;`。
   */
  readonly revertLayer: Property.GridTemplateColumns | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-columns:subgrid;`。 */
  readonly subgrid: Property.GridTemplateColumns | CssString = 'subgrid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template-columns:unset;`。
   */
  readonly unset: Property.GridTemplateColumns | CssString = 'unset';
}

/**
 * 定义显式网格的列轨道尺寸及网格线名称。（grid-template-columns）
 *
 * 每个轨道值定义一列；fr 分配剩余空间。需要允许长内容所在列缩小时，可使用 minmax(0, 1fr)。
 *
 * 适用场景：响应式卡片、表单标签与输入框的列布局。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @example
 * s.gridTemplateColumns.repeat(3, 'minmax(0, 1fr)') // grid-template-columns:repeat(3, minmax(0, 1fr));
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
 */
export class GridTemplateColumnsCss extends LengthCssProperty {
  /** CSS 声明：`grid-template-columns:auto;`。 */
  readonly auto: string = 'grid-template-columns:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template-columns:inherit;`。
   */
  readonly inherit: string = 'grid-template-columns:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template-columns:initial;`。
   */
  readonly initial: string = 'grid-template-columns:initial;';
  /** CSS 声明：`grid-template-columns:max-content;`。 */
  readonly maxContent: string = 'grid-template-columns:max-content;';
  /** CSS 声明：`grid-template-columns:min-content;`。 */
  readonly minContent: string = 'grid-template-columns:min-content;';
  /** CSS 声明：`grid-template-columns:none;`。 */
  readonly none: string = 'grid-template-columns:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template-columns:revert;`。
   */
  readonly revert: string = 'grid-template-columns:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template-columns:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-template-columns:revert-layer;';
  /** CSS 声明：`grid-template-columns:subgrid;`。 */
  readonly subgrid: string = 'grid-template-columns:subgrid;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template-columns:unset;`。
   */
  readonly unset: string = 'grid-template-columns:unset;';
  /**
   * 创建 grid-template-columns 属性作者；普通使用通过 s.gridTemplateColumns 取得共享实例。
   * @example
   * class CustomGridTemplateColumnsCss extends GridTemplateColumnsCss {}
   */
  constructor() {
    super('grid-template-columns');
  }
  /**
   * 原样生成 grid-template-columns 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-template-columns:value;。
   * @example
   * s.gridTemplateColumns.raw('inherit') // grid-template-columns:inherit;
   */
  raw(value: Property.GridTemplateColumns | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridTemplateColumns.calc('var(--value) * 2')
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
   * s.gridTemplateColumns.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridTemplateColumns | CssString,
    ...others: (Property.GridTemplateColumns | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridTemplateColumns.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridTemplateColumns | CssString,
    ...others: (Property.GridTemplateColumns | CssString)[]
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
   * s.gridTemplateColumns.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridTemplateColumns | CssString,
    preferred: Property.GridTemplateColumns | CssString,
    maximum: Property.GridTemplateColumns | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
  /**
   * 重复一组网格轨道，生成当前轨道属性的完整声明。
   *
   * auto-fit 会折叠空轨道，auto-fill 保留空轨道。函数参数接收裸 CSS 值，不接收其他属性方法生成的完整声明。
   * @param count 正整数次数，或 auto-fill/auto-fit；不在此处验证次数。
   * @param track 第一条轨道的 CSS 值，长度须带单位；也可传 minmax(...) 字符串。
   * @param tracks 其余轨道的 CSS 值，以空格连接。
   * @returns 包含 repeat(...) 的完整属性声明。
   * @example
   * s.gridTemplateColumns.repeat(3, 'minmax(0, 1fr)')
   */
  repeat(
    count: number | 'auto-fill' | 'auto-fit' | CssString,
    track: 'auto' | 'min-content' | 'max-content' | CssString | 0,
    ...tracks: ('auto' | 'min-content' | 'max-content' | CssString | 0)[]
  ): string {
    return this.raw(`repeat(${count}, ${[track, ...tracks].join(' ')})`);
  }
  /**
   * 以最小和最大尺寸限定一条网格轨道。
   *
   * 非零长度须带单位；嵌套在 repeat 中时应传 minmax(...) 裸字符串。
   * @param minimum 轨道最小尺寸；不能使用 fr 作为最小值。
   * @param maximum 轨道最大尺寸，可使用 fr；不能小于最小值以缩小该下限。
   * @returns 包含 minmax(...) 的完整属性声明。
   * @example
   * s.gridTemplateColumns.minmax(0, '1fr')
   */
  minmax(
    minimum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
    maximum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
  ): string {
    return this.raw(`minmax(${minimum}, ${maximum})`);
  }
  /**
   * 在自动最小尺寸与最大内容尺寸之间，以给定上限约束轨道。
   * @param limit 带单位的长度、百分比或 0，不接受 fr 作为上限。
   * @returns 包含 fit-content(...) 的完整属性声明。
   * @example
   * s.gridTemplateColumns.fitContent('20rem')
   */
  fitContent(limit: CssString | 0): string {
    return this.raw(`fit-content(${limit})`);
  }
}

/**
 * grid-template-rows 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class GridTemplateRowsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-rows:auto;`。 */
  readonly auto: Property.GridTemplateRows | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template-rows:inherit;`。
   */
  readonly inherit: Property.GridTemplateRows | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template-rows:initial;`。
   */
  readonly initial: Property.GridTemplateRows | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-rows:max-content;`。 */
  readonly maxContent: Property.GridTemplateRows | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-rows:min-content;`。 */
  readonly minContent: Property.GridTemplateRows | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-rows:none;`。 */
  readonly none: Property.GridTemplateRows | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template-rows:revert;`。
   */
  readonly revert: Property.GridTemplateRows | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template-rows:revert-layer;`。
   */
  readonly revertLayer: Property.GridTemplateRows | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`grid-template-rows:subgrid;`。 */
  readonly subgrid: Property.GridTemplateRows | CssString = 'subgrid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template-rows:unset;`。
   */
  readonly unset: Property.GridTemplateRows | CssString = 'unset';
}

/**
 * 定义显式网格的行轨道尺寸及网格线名称。（grid-template-rows）
 *
 * 每个轨道值定义一行，未显式定义的行使用 grid-auto-rows。
 *
 * 适用场景：区分固定工具栏和可伸缩内容区域。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @example
 * s.gridTemplateRows.raw('auto minmax(0, 1fr)')
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
 */
export class GridTemplateRowsCss extends LengthCssProperty {
  /** CSS 声明：`grid-template-rows:auto;`。 */
  readonly auto: string = 'grid-template-rows:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`grid-template-rows:inherit;`。
   */
  readonly inherit: string = 'grid-template-rows:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`grid-template-rows:initial;`。
   */
  readonly initial: string = 'grid-template-rows:initial;';
  /** CSS 声明：`grid-template-rows:max-content;`。 */
  readonly maxContent: string = 'grid-template-rows:max-content;';
  /** CSS 声明：`grid-template-rows:min-content;`。 */
  readonly minContent: string = 'grid-template-rows:min-content;';
  /** CSS 声明：`grid-template-rows:none;`。 */
  readonly none: string = 'grid-template-rows:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`grid-template-rows:revert;`。
   */
  readonly revert: string = 'grid-template-rows:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`grid-template-rows:revert-layer;`。
   */
  readonly revertLayer: string = 'grid-template-rows:revert-layer;';
  /** CSS 声明：`grid-template-rows:subgrid;`。 */
  readonly subgrid: string = 'grid-template-rows:subgrid;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`grid-template-rows:unset;`。
   */
  readonly unset: string = 'grid-template-rows:unset;';
  /**
   * 创建 grid-template-rows 属性作者；普通使用通过 s.gridTemplateRows 取得共享实例。
   * @example
   * class CustomGridTemplateRowsCss extends GridTemplateRowsCss {}
   */
  constructor() {
    super('grid-template-rows');
  }
  /**
   * 原样生成 grid-template-rows 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 grid-template-rows:value;。
   * @example
   * s.gridTemplateRows.raw('inherit') // grid-template-rows:inherit;
   */
  raw(value: Property.GridTemplateRows | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.gridTemplateRows.calc('var(--value) * 2')
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
   * s.gridTemplateRows.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.GridTemplateRows | CssString,
    ...others: (Property.GridTemplateRows | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.gridTemplateRows.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.GridTemplateRows | CssString,
    ...others: (Property.GridTemplateRows | CssString)[]
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
   * s.gridTemplateRows.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.GridTemplateRows | CssString,
    preferred: Property.GridTemplateRows | CssString,
    maximum: Property.GridTemplateRows | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
  /**
   * 重复一组网格轨道，生成当前轨道属性的完整声明。
   *
   * auto-fit 会折叠空轨道，auto-fill 保留空轨道。函数参数接收裸 CSS 值，不接收其他属性方法生成的完整声明。
   * @param count 正整数次数，或 auto-fill/auto-fit；不在此处验证次数。
   * @param track 第一条轨道的 CSS 值，长度须带单位；也可传 minmax(...) 字符串。
   * @param tracks 其余轨道的 CSS 值，以空格连接。
   * @returns 包含 repeat(...) 的完整属性声明。
   * @example
   * s.gridTemplateRows.repeat(3, 'minmax(0, 1fr)')
   */
  repeat(
    count: number | 'auto-fill' | 'auto-fit' | CssString,
    track: 'auto' | 'min-content' | 'max-content' | CssString | 0,
    ...tracks: ('auto' | 'min-content' | 'max-content' | CssString | 0)[]
  ): string {
    return this.raw(`repeat(${count}, ${[track, ...tracks].join(' ')})`);
  }
  /**
   * 以最小和最大尺寸限定一条网格轨道。
   *
   * 非零长度须带单位；嵌套在 repeat 中时应传 minmax(...) 裸字符串。
   * @param minimum 轨道最小尺寸；不能使用 fr 作为最小值。
   * @param maximum 轨道最大尺寸，可使用 fr；不能小于最小值以缩小该下限。
   * @returns 包含 minmax(...) 的完整属性声明。
   * @example
   * s.gridTemplateRows.minmax(0, '1fr')
   */
  minmax(
    minimum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
    maximum: 'auto' | 'min-content' | 'max-content' | CssString | 0,
  ): string {
    return this.raw(`minmax(${minimum}, ${maximum})`);
  }
  /**
   * 在自动最小尺寸与最大内容尺寸之间，以给定上限约束轨道。
   * @param limit 带单位的长度、百分比或 0，不接受 fr 作为上限。
   * @returns 包含 fit-content(...) 的完整属性声明。
   * @example
   * s.gridTemplateRows.fitContent('20rem')
   */
  fitContent(limit: CssString | 0): string {
    return this.raw(`fit-content(${limit})`);
  }
}

/**
 * hanging-punctuation 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class HangingPunctuationKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hanging-punctuation:allow-end;`。 */
  readonly allowEnd: Property.HangingPunctuation | CssString = 'allow-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hanging-punctuation:first;`。 */
  readonly first: Property.HangingPunctuation | CssString = 'first';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hanging-punctuation:force-end;`。 */
  readonly forceEnd: Property.HangingPunctuation | CssString = 'force-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hanging-punctuation:inherit;`。
   */
  readonly inherit: Property.HangingPunctuation | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hanging-punctuation:initial;`。
   */
  readonly initial: Property.HangingPunctuation | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hanging-punctuation:last;`。 */
  readonly last: Property.HangingPunctuation | CssString = 'last';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hanging-punctuation:none;`。 */
  readonly none: Property.HangingPunctuation | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hanging-punctuation:revert;`。
   */
  readonly revert: Property.HangingPunctuation | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hanging-punctuation:revert-layer;`。
   */
  readonly revertLayer: Property.HangingPunctuation | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hanging-punctuation:unset;`。
   */
  readonly unset: Property.HangingPunctuation | CssString = 'unset';
}

/**
 * 控制标点是否可以悬挂在行盒边缘之外。（hanging-punctuation）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
 */
export class HangingPunctuationCss extends CssProperty {
  /** CSS 声明：`hanging-punctuation:allow-end;`。 */
  readonly allowEnd: string = 'hanging-punctuation:allow-end;';
  /** CSS 声明：`hanging-punctuation:first;`。 */
  readonly first: string = 'hanging-punctuation:first;';
  /** CSS 声明：`hanging-punctuation:force-end;`。 */
  readonly forceEnd: string = 'hanging-punctuation:force-end;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hanging-punctuation:inherit;`。
   */
  readonly inherit: string = 'hanging-punctuation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hanging-punctuation:initial;`。
   */
  readonly initial: string = 'hanging-punctuation:initial;';
  /** CSS 声明：`hanging-punctuation:last;`。 */
  readonly last: string = 'hanging-punctuation:last;';
  /** CSS 声明：`hanging-punctuation:none;`。 */
  readonly none: string = 'hanging-punctuation:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hanging-punctuation:revert;`。
   */
  readonly revert: string = 'hanging-punctuation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hanging-punctuation:revert-layer;`。
   */
  readonly revertLayer: string = 'hanging-punctuation:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hanging-punctuation:unset;`。
   */
  readonly unset: string = 'hanging-punctuation:unset;';
  /**
   * 创建 hanging-punctuation 属性作者；普通使用通过 s.hangingPunctuation 取得共享实例。
   * @example
   * class CustomHangingPunctuationCss extends HangingPunctuationCss {}
   */
  constructor() {
    super('hanging-punctuation');
  }
  /**
   * 原样生成 hanging-punctuation 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 hanging-punctuation:value;。
   * @example
   * s.hangingPunctuation.raw('inherit') // hanging-punctuation:inherit;
   */
  raw(value: Property.HangingPunctuation | CssString): string {
    return this.declaration(value);
  }
}

/**
 * height 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class HeightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   *
   * CSS 声明：`height:auto;`。
   */
  readonly auto: Property.Height | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   *
   * CSS 声明：`height:fit-content;`。
   */
  readonly fitContent: Property.Height | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`height:inherit;`。
   */
  readonly inherit: Property.Height | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`height:initial;`。
   */
  readonly initial: Property.Height | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用内容的最大内部尺寸，通常不进行软换行。
   *
   * CSS 声明：`height:max-content;`。
   */
  readonly maxContent: Property.Height | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   *
   * CSS 声明：`height:min-content;`。
   */
  readonly minContent: Property.Height | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`height:revert;`。
   */
  readonly revert: Property.Height | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`height:revert-layer;`。
   */
  readonly revertLayer: Property.Height | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`height:unset;`。
   */
  readonly unset: Property.Height | CssString = 'unset';
}

/**
 * 设置元素的物理高度，盒子范围受 box-sizing 影响。（height）
 *
 * 百分比高度能否解析取决于包含块的尺寸确定方式；设置 100% 不自动等于视口高度。
 *
 * 适用场景：控制物理高度；滚动面板通常结合 max-height 和 overflow。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * css(s.maxHeight.rem(20), s.overflowY.auto)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
 */
export class HeightCss extends LengthCssProperty {
  /**
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   *
   * CSS 声明：`height:auto;`。
   */
  readonly auto: string = 'height:auto;';
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   *
   * CSS 声明：`height:fit-content;`。
   */
  readonly fitContent: string = 'height:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`height:inherit;`。
   */
  readonly inherit: string = 'height:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`height:initial;`。
   */
  readonly initial: string = 'height:initial;';
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   *
   * CSS 声明：`height:max-content;`。
   */
  readonly maxContent: string = 'height:max-content;';
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   *
   * CSS 声明：`height:min-content;`。
   */
  readonly minContent: string = 'height:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`height:revert;`。
   */
  readonly revert: string = 'height:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`height:revert-layer;`。
   */
  readonly revertLayer: string = 'height:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`height:unset;`。
   */
  readonly unset: string = 'height:unset;';
  /**
   * 创建 height 属性作者；普通使用通过 s.height 取得共享实例。
   * @example
   * class CustomHeightCss extends HeightCss {}
   */
  constructor() {
    super('height');
  }
  /**
   * 原样生成 height 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 height:value;。
   * @example
   * s.height.raw('inherit') // height:inherit;
   */
  raw(value: Property.Height | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.height.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.height.calc('var(--value) * 2')
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
   * s.height.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Height | CssString, ...others: (Property.Height | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.height.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Height | CssString, ...others: (Property.Height | CssString)[]): string {
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
   * s.height.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Height | CssString,
    preferred: Property.Height | CssString,
    maximum: Property.Height | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * hyphenate-character 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class HyphenateCharacterKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hyphenate-character:auto;`。 */
  readonly auto: Property.HyphenateCharacter | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hyphenate-character:inherit;`。
   */
  readonly inherit: Property.HyphenateCharacter | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hyphenate-character:initial;`。
   */
  readonly initial: Property.HyphenateCharacter | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hyphenate-character:revert;`。
   */
  readonly revert: Property.HyphenateCharacter | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hyphenate-character:revert-layer;`。
   */
  readonly revertLayer: Property.HyphenateCharacter | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hyphenate-character:unset;`。
   */
  readonly unset: Property.HyphenateCharacter | CssString = 'unset';
}

/**
 * 设置自动断词时插入的断字符号。（hyphenate-character）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
 */
export class HyphenateCharacterCss extends CssProperty {
  /** CSS 声明：`hyphenate-character:auto;`。 */
  readonly auto: string = 'hyphenate-character:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hyphenate-character:inherit;`。
   */
  readonly inherit: string = 'hyphenate-character:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hyphenate-character:initial;`。
   */
  readonly initial: string = 'hyphenate-character:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hyphenate-character:revert;`。
   */
  readonly revert: string = 'hyphenate-character:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hyphenate-character:revert-layer;`。
   */
  readonly revertLayer: string = 'hyphenate-character:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hyphenate-character:unset;`。
   */
  readonly unset: string = 'hyphenate-character:unset;';
  /**
   * 创建 hyphenate-character 属性作者；普通使用通过 s.hyphenateCharacter 取得共享实例。
   * @example
   * class CustomHyphenateCharacterCss extends HyphenateCharacterCss {}
   */
  constructor() {
    super('hyphenate-character');
  }
  /**
   * 原样生成 hyphenate-character 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 hyphenate-character:value;。
   * @example
   * s.hyphenateCharacter.raw('inherit') // hyphenate-character:inherit;
   */
  raw(value: Property.HyphenateCharacter | CssString): string {
    return this.declaration(value);
  }
}

/**
 * hyphenate-limit-chars 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class HyphenateLimitCharsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hyphenate-limit-chars:auto;`。 */
  readonly auto: Property.HyphenateLimitChars | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hyphenate-limit-chars:inherit;`。
   */
  readonly inherit: Property.HyphenateLimitChars | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hyphenate-limit-chars:initial;`。
   */
  readonly initial: Property.HyphenateLimitChars | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hyphenate-limit-chars:revert;`。
   */
  readonly revert: Property.HyphenateLimitChars | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hyphenate-limit-chars:revert-layer;`。
   */
  readonly revertLayer: Property.HyphenateLimitChars | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hyphenate-limit-chars:unset;`。
   */
  readonly unset: Property.HyphenateLimitChars | CssString = 'unset';
}

/**
 * 限制可断词的最小单词长度以及断点两侧的最少字符数。（hyphenate-limit-chars）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
 */
export class HyphenateLimitCharsCss extends CssProperty {
  /** CSS 声明：`hyphenate-limit-chars:auto;`。 */
  readonly auto: string = 'hyphenate-limit-chars:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hyphenate-limit-chars:inherit;`。
   */
  readonly inherit: string = 'hyphenate-limit-chars:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hyphenate-limit-chars:initial;`。
   */
  readonly initial: string = 'hyphenate-limit-chars:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hyphenate-limit-chars:revert;`。
   */
  readonly revert: string = 'hyphenate-limit-chars:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hyphenate-limit-chars:revert-layer;`。
   */
  readonly revertLayer: string = 'hyphenate-limit-chars:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hyphenate-limit-chars:unset;`。
   */
  readonly unset: string = 'hyphenate-limit-chars:unset;';
  /**
   * 创建 hyphenate-limit-chars 属性作者；普通使用通过 s.hyphenateLimitChars 取得共享实例。
   * @example
   * class CustomHyphenateLimitCharsCss extends HyphenateLimitCharsCss {}
   */
  constructor() {
    super('hyphenate-limit-chars');
  }
  /**
   * 原样生成 hyphenate-limit-chars 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 hyphenate-limit-chars:value;。
   * @example
   * s.hyphenateLimitChars.raw('inherit') // hyphenate-limit-chars:inherit;
   */
  raw(value: Property.HyphenateLimitChars | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.hyphenateLimitChars.calc('var(--value) * 2')
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
   * s.hyphenateLimitChars.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.HyphenateLimitChars | CssString,
    ...others: (Property.HyphenateLimitChars | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.hyphenateLimitChars.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.HyphenateLimitChars | CssString,
    ...others: (Property.HyphenateLimitChars | CssString)[]
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
   * s.hyphenateLimitChars.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.HyphenateLimitChars | CssString,
    preferred: Property.HyphenateLimitChars | CssString,
    maximum: Property.HyphenateLimitChars | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * hyphens 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class HyphensKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hyphens:auto;`。 */
  readonly auto: Property.Hyphens | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hyphens:inherit;`。
   */
  readonly inherit: Property.Hyphens | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hyphens:initial;`。
   */
  readonly initial: Property.Hyphens | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hyphens:manual;`。 */
  readonly manual: Property.Hyphens | CssString = 'manual';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`hyphens:none;`。 */
  readonly none: Property.Hyphens | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hyphens:revert;`。
   */
  readonly revert: Property.Hyphens | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hyphens:revert-layer;`。
   */
  readonly revertLayer: Property.Hyphens | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hyphens:unset;`。
   */
  readonly unset: Property.Hyphens | CssString = 'unset';
}

/**
 * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。（hyphens）
 *
 * CSS 初始值：`manual`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
 */
export class HyphensCss extends CssProperty {
  /** CSS 声明：`hyphens:auto;`。 */
  readonly auto: string = 'hyphens:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`hyphens:inherit;`。
   */
  readonly inherit: string = 'hyphens:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`hyphens:initial;`。
   */
  readonly initial: string = 'hyphens:initial;';
  /** CSS 声明：`hyphens:manual;`。 */
  readonly manual: string = 'hyphens:manual;';
  /** CSS 声明：`hyphens:none;`。 */
  readonly none: string = 'hyphens:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`hyphens:revert;`。
   */
  readonly revert: string = 'hyphens:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`hyphens:revert-layer;`。
   */
  readonly revertLayer: string = 'hyphens:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`hyphens:unset;`。
   */
  readonly unset: string = 'hyphens:unset;';
  /**
   * 创建 hyphens 属性作者；普通使用通过 s.hyphens 取得共享实例。
   * @example
   * class CustomHyphensCss extends HyphensCss {}
   */
  constructor() {
    super('hyphens');
  }
  /**
   * 原样生成 hyphens 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 hyphens:value;。
   * @example
   * s.hyphens.raw('inherit') // hyphens:inherit;
   */
  raw(value: Property.Hyphens | CssString): string {
    return this.declaration(value);
  }
}

/**
 * image-orientation 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ImageOrientationKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`image-orientation:flip;`。 */
  readonly flip: Property.ImageOrientation | CssString = 'flip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`image-orientation:from-image;`。 */
  readonly fromImage: Property.ImageOrientation | CssString = 'from-image';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`image-orientation:inherit;`。
   */
  readonly inherit: Property.ImageOrientation | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`image-orientation:initial;`。
   */
  readonly initial: Property.ImageOrientation | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`image-orientation:revert;`。
   */
  readonly revert: Property.ImageOrientation | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`image-orientation:revert-layer;`。
   */
  readonly revertLayer: Property.ImageOrientation | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`image-orientation:unset;`。
   */
  readonly unset: Property.ImageOrientation | CssString = 'unset';
}

/**
 * 设置图像是否按元数据等信息调整方向。（image-orientation）
 *
 * CSS 初始值：`from-image`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
 */
export class ImageOrientationCss extends CssProperty {
  /** CSS 声明：`image-orientation:flip;`。 */
  readonly flip: string = 'image-orientation:flip;';
  /** CSS 声明：`image-orientation:from-image;`。 */
  readonly fromImage: string = 'image-orientation:from-image;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`image-orientation:inherit;`。
   */
  readonly inherit: string = 'image-orientation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`image-orientation:initial;`。
   */
  readonly initial: string = 'image-orientation:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`image-orientation:revert;`。
   */
  readonly revert: string = 'image-orientation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`image-orientation:revert-layer;`。
   */
  readonly revertLayer: string = 'image-orientation:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`image-orientation:unset;`。
   */
  readonly unset: string = 'image-orientation:unset;';
  /**
   * 创建 image-orientation 属性作者；普通使用通过 s.imageOrientation 取得共享实例。
   * @example
   * class CustomImageOrientationCss extends ImageOrientationCss {}
   */
  constructor() {
    super('image-orientation');
  }
  /**
   * 原样生成 image-orientation 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 image-orientation:value;。
   * @example
   * s.imageOrientation.raw('inherit') // image-orientation:inherit;
   */
  raw(value: Property.ImageOrientation | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 deg 单位生成完整属性声明。角度，360deg 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 deg。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.imageOrientation.deg(1)
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
   * s.imageOrientation.grad(1)
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
   * s.imageOrientation.rad(1)
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
   * s.imageOrientation.turn(1)
   */
  turn(value: number): string {
    return this.declaration(`${value}turn`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.imageOrientation.calc('var(--value) * 2')
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
   * s.imageOrientation.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ImageOrientation | CssString,
    ...others: (Property.ImageOrientation | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.imageOrientation.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ImageOrientation | CssString,
    ...others: (Property.ImageOrientation | CssString)[]
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
   * s.imageOrientation.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ImageOrientation | CssString,
    preferred: Property.ImageOrientation | CssString,
    maximum: Property.ImageOrientation | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * image-rendering 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ImageRenderingKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`image-rendering:auto;`。 */
  readonly auto: Property.ImageRendering | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`image-rendering:crisp-edges;`。 */
  readonly crispEdges: Property.ImageRendering | CssString = 'crisp-edges';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`image-rendering:inherit;`。
   */
  readonly inherit: Property.ImageRendering | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`image-rendering:initial;`。
   */
  readonly initial: Property.ImageRendering | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`image-rendering:pixelated;`。 */
  readonly pixelated: Property.ImageRendering | CssString = 'pixelated';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`image-rendering:revert;`。
   */
  readonly revert: Property.ImageRendering | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`image-rendering:revert-layer;`。
   */
  readonly revertLayer: Property.ImageRendering | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`image-rendering:smooth;`。 */
  readonly smooth: Property.ImageRendering | CssString = 'smooth';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`image-rendering:unset;`。
   */
  readonly unset: Property.ImageRendering | CssString = 'unset';
}

/**
 * 向浏览器指定图像缩放时的插值与清晰度偏好。（image-rendering）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
 */
export class ImageRenderingCss extends CssProperty {
  /** CSS 声明：`image-rendering:auto;`。 */
  readonly auto: string = 'image-rendering:auto;';
  /** CSS 声明：`image-rendering:crisp-edges;`。 */
  readonly crispEdges: string = 'image-rendering:crisp-edges;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`image-rendering:inherit;`。
   */
  readonly inherit: string = 'image-rendering:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`image-rendering:initial;`。
   */
  readonly initial: string = 'image-rendering:initial;';
  /** CSS 声明：`image-rendering:pixelated;`。 */
  readonly pixelated: string = 'image-rendering:pixelated;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`image-rendering:revert;`。
   */
  readonly revert: string = 'image-rendering:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`image-rendering:revert-layer;`。
   */
  readonly revertLayer: string = 'image-rendering:revert-layer;';
  /** CSS 声明：`image-rendering:smooth;`。 */
  readonly smooth: string = 'image-rendering:smooth;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`image-rendering:unset;`。
   */
  readonly unset: string = 'image-rendering:unset;';
  /**
   * 创建 image-rendering 属性作者；普通使用通过 s.imageRendering 取得共享实例。
   * @example
   * class CustomImageRenderingCss extends ImageRenderingCss {}
   */
  constructor() {
    super('image-rendering');
  }
  /**
   * 原样生成 image-rendering 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 image-rendering:value;。
   * @example
   * s.imageRendering.raw('inherit') // image-rendering:inherit;
   */
  raw(value: Property.ImageRendering | CssString): string {
    return this.declaration(value);
  }
}

/**
 * image-resolution 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ImageResolutionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`image-resolution:from-image;`。 */
  readonly fromImage: Property.ImageResolution | CssString = 'from-image';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`image-resolution:inherit;`。
   */
  readonly inherit: Property.ImageResolution | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`image-resolution:initial;`。
   */
  readonly initial: Property.ImageResolution | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`image-resolution:revert;`。
   */
  readonly revert: Property.ImageResolution | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`image-resolution:revert-layer;`。
   */
  readonly revertLayer: Property.ImageResolution | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`image-resolution:unset;`。
   */
  readonly unset: Property.ImageResolution | CssString = 'unset';
}

/**
 * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。（image-resolution）
 *
 * CSS 初始值：`1dppx`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
 */
export class ImageResolutionCss extends CssProperty {
  /** CSS 声明：`image-resolution:from-image;`。 */
  readonly fromImage: string = 'image-resolution:from-image;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`image-resolution:inherit;`。
   */
  readonly inherit: string = 'image-resolution:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`image-resolution:initial;`。
   */
  readonly initial: string = 'image-resolution:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`image-resolution:revert;`。
   */
  readonly revert: string = 'image-resolution:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`image-resolution:revert-layer;`。
   */
  readonly revertLayer: string = 'image-resolution:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`image-resolution:unset;`。
   */
  readonly unset: string = 'image-resolution:unset;';
  /**
   * 创建 image-resolution 属性作者；普通使用通过 s.imageResolution 取得共享实例。
   * @example
   * class CustomImageResolutionCss extends ImageResolutionCss {}
   */
  constructor() {
    super('image-resolution');
  }
  /**
   * 原样生成 image-resolution 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 image-resolution:value;。
   * @example
   * s.imageResolution.raw('inherit') // image-resolution:inherit;
   */
  raw(value: Property.ImageResolution | CssString): string {
    return this.declaration(value);
  }
}

/**
 * initial-letter 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InitialLetterKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`initial-letter:inherit;`。
   */
  readonly inherit: Property.InitialLetter | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`initial-letter:initial;`。
   */
  readonly initial: Property.InitialLetter | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`initial-letter:normal;`。 */
  readonly normal: Property.InitialLetter | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`initial-letter:revert;`。
   */
  readonly revert: Property.InitialLetter | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`initial-letter:revert-layer;`。
   */
  readonly revertLayer: Property.InitialLetter | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`initial-letter:unset;`。
   */
  readonly unset: Property.InitialLetter | CssString = 'unset';
}

/**
 * 设置段落首字下沉或抬升时占用的行数与对齐位置。（initial-letter）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
 */
export class InitialLetterCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`initial-letter:inherit;`。
   */
  readonly inherit: string = 'initial-letter:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`initial-letter:initial;`。
   */
  readonly initial: string = 'initial-letter:initial;';
  /** CSS 声明：`initial-letter:normal;`。 */
  readonly normal: string = 'initial-letter:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`initial-letter:revert;`。
   */
  readonly revert: string = 'initial-letter:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`initial-letter:revert-layer;`。
   */
  readonly revertLayer: string = 'initial-letter:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`initial-letter:unset;`。
   */
  readonly unset: string = 'initial-letter:unset;';
  /**
   * 创建 initial-letter 属性作者；普通使用通过 s.initialLetter 取得共享实例。
   * @example
   * class CustomInitialLetterCss extends InitialLetterCss {}
   */
  constructor() {
    super('initial-letter');
  }
  /**
   * 原样生成 initial-letter 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 initial-letter:value;。
   * @example
   * s.initialLetter.raw('inherit') // initial-letter:inherit;
   */
  raw(value: Property.InitialLetter | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.initialLetter.calc('var(--value) * 2')
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
   * s.initialLetter.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InitialLetter | CssString,
    ...others: (Property.InitialLetter | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.initialLetter.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InitialLetter | CssString,
    ...others: (Property.InitialLetter | CssString)[]
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
   * s.initialLetter.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InitialLetter | CssString,
    preferred: Property.InitialLetter | CssString,
    maximum: Property.InitialLetter | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * initial-letter-align 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InitialLetterAlignKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`initial-letter-align:alphabetic;`。 */
  readonly alphabetic: Property.InitialLetterAlign | CssString = 'alphabetic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`initial-letter-align:auto;`。 */
  readonly auto: Property.InitialLetterAlign | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`initial-letter-align:hanging;`。 */
  readonly hanging: Property.InitialLetterAlign | CssString = 'hanging';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`initial-letter-align:ideographic;`。 */
  readonly ideographic: Property.InitialLetterAlign | CssString = 'ideographic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`initial-letter-align:inherit;`。
   */
  readonly inherit: Property.InitialLetterAlign | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`initial-letter-align:initial;`。
   */
  readonly initial: Property.InitialLetterAlign | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`initial-letter-align:revert;`。
   */
  readonly revert: Property.InitialLetterAlign | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`initial-letter-align:revert-layer;`。
   */
  readonly revertLayer: Property.InitialLetterAlign | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`initial-letter-align:unset;`。
   */
  readonly unset: Property.InitialLetterAlign | CssString = 'unset';
}

/**
 * 设置首字下沉时字形与正文使用的对齐基线。（initial-letter-align）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
 */
export class InitialLetterAlignCss extends CssProperty {
  /** CSS 声明：`initial-letter-align:alphabetic;`。 */
  readonly alphabetic: string = 'initial-letter-align:alphabetic;';
  /** CSS 声明：`initial-letter-align:auto;`。 */
  readonly auto: string = 'initial-letter-align:auto;';
  /** CSS 声明：`initial-letter-align:hanging;`。 */
  readonly hanging: string = 'initial-letter-align:hanging;';
  /** CSS 声明：`initial-letter-align:ideographic;`。 */
  readonly ideographic: string = 'initial-letter-align:ideographic;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`initial-letter-align:inherit;`。
   */
  readonly inherit: string = 'initial-letter-align:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`initial-letter-align:initial;`。
   */
  readonly initial: string = 'initial-letter-align:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`initial-letter-align:revert;`。
   */
  readonly revert: string = 'initial-letter-align:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`initial-letter-align:revert-layer;`。
   */
  readonly revertLayer: string = 'initial-letter-align:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`initial-letter-align:unset;`。
   */
  readonly unset: string = 'initial-letter-align:unset;';
  /**
   * 创建 initial-letter-align 属性作者；普通使用通过 s.initialLetterAlign 取得共享实例。
   * @example
   * class CustomInitialLetterAlignCss extends InitialLetterAlignCss {}
   */
  constructor() {
    super('initial-letter-align');
  }
  /**
   * 原样生成 initial-letter-align 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 initial-letter-align:value;。
   * @example
   * s.initialLetterAlign.raw('inherit') // initial-letter-align:inherit;
   */
  raw(value: Property.InitialLetterAlign | CssString): string {
    return this.declaration(value);
  }
}

/**
 * inline-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InlineSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   *
   * CSS 声明：`inline-size:auto;`。
   */
  readonly auto: Property.InlineSize | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   *
   * CSS 声明：`inline-size:fit-content;`。
   */
  readonly fitContent: Property.InlineSize | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inline-size:inherit;`。
   */
  readonly inherit: Property.InlineSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inline-size:initial;`。
   */
  readonly initial: Property.InlineSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用内容的最大内部尺寸，通常不进行软换行。
   *
   * CSS 声明：`inline-size:max-content;`。
   */
  readonly maxContent: Property.InlineSize | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   *
   * CSS 声明：`inline-size:min-content;`。
   */
  readonly minContent: Property.InlineSize | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inline-size:revert;`。
   */
  readonly revert: Property.InlineSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inline-size:revert-layer;`。
   */
  readonly revertLayer: Property.InlineSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inline-size:unset;`。
   */
  readonly unset: Property.InlineSize | CssString = 'unset';
}

/**
 * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。（inline-size）
 *
 * 水平书写时通常对应 width，竖直书写时通常对应 height。实际尺寸还受 min-inline-size/max-inline-size 和 box-sizing 约束。
 *
 * 适用场景：希望布局尺寸跟随书写模式变化的组件。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * s.inlineSize.rem(20)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
 */
export class InlineSizeCss extends LengthCssProperty {
  /**
   * 让布局算法决定尺寸，不保证等于父元素尺寸。
   *
   * CSS 声明：`inline-size:auto;`。
   */
  readonly auto: string = 'inline-size:auto;';
  /**
   * 在最小和最大内部尺寸之间按可用空间夹取尺寸。
   *
   * CSS 声明：`inline-size:fit-content;`。
   */
  readonly fitContent: string = 'inline-size:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inline-size:inherit;`。
   */
  readonly inherit: string = 'inline-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inline-size:initial;`。
   */
  readonly initial: string = 'inline-size:initial;';
  /**
   * 采用内容的最大内部尺寸，通常不进行软换行。
   *
   * CSS 声明：`inline-size:max-content;`。
   */
  readonly maxContent: string = 'inline-size:max-content;';
  /**
   * 采用内容的最小内部尺寸，文字会考虑可用的软换行机会。
   *
   * CSS 声明：`inline-size:min-content;`。
   */
  readonly minContent: string = 'inline-size:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inline-size:revert;`。
   */
  readonly revert: string = 'inline-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inline-size:revert-layer;`。
   */
  readonly revertLayer: string = 'inline-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inline-size:unset;`。
   */
  readonly unset: string = 'inline-size:unset;';
  /**
   * 创建 inline-size 属性作者；普通使用通过 s.inlineSize 取得共享实例。
   * @example
   * class CustomInlineSizeCss extends InlineSizeCss {}
   */
  constructor() {
    super('inline-size');
  }
  /**
   * 原样生成 inline-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inline-size:value;。
   * @example
   * s.inlineSize.raw('inherit') // inline-size:inherit;
   */
  raw(value: Property.InlineSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.inlineSize.calc('var(--value) * 2')
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
   * s.inlineSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InlineSize | CssString,
    ...others: (Property.InlineSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.inlineSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InlineSize | CssString,
    ...others: (Property.InlineSize | CssString)[]
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
   * s.inlineSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InlineSize | CssString,
    preferred: Property.InlineSize | CssString,
    maximum: Property.InlineSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * inset 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InsetKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`inset:auto;`。 */
  readonly auto: Property.Inset | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset:inherit;`。
   */
  readonly inherit: Property.Inset | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset:initial;`。
   */
  readonly initial: Property.Inset | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset:revert;`。
   */
  readonly revert: Property.Inset | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset:revert-layer;`。
   */
  readonly revertLayer: Property.Inset | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset:unset;`。
   */
  readonly unset: Property.Inset | CssString = 'unset';
}

/**
 * 同时设置定位元素的上、右、下、左偏移。（inset）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
 */
export class InsetCss extends LengthCssProperty {
  /** CSS 声明：`inset:auto;`。 */
  readonly auto: string = 'inset:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset:inherit;`。
   */
  readonly inherit: string = 'inset:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset:initial;`。
   */
  readonly initial: string = 'inset:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset:revert;`。
   */
  readonly revert: string = 'inset:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset:revert-layer;`。
   */
  readonly revertLayer: string = 'inset:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset:unset;`。
   */
  readonly unset: string = 'inset:unset;';
  /**
   * 创建 inset 属性作者；普通使用通过 s.inset 取得共享实例。
   * @example
   * class CustomInsetCss extends InsetCss {}
   */
  constructor() {
    super('inset');
  }
  /**
   * 原样生成 inset 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inset:value;。
   * @example
   * s.inset.raw('inherit') // inset:inherit;
   */
  raw(value: Property.Inset | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 四边的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.inset.px(1)
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
   * s.inset.px(1, 2)
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
   * s.inset.px(1, 2, 3)
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
   * s.inset.px(1, 2, 3, 4)
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
   * s.inset.cm(1)
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
   * s.inset.cm(1, 2)
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
   * s.inset.cm(1, 2, 3)
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
   * s.inset.cm(1, 2, 3, 4)
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
   * s.inset.mm(1)
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
   * s.inset.mm(1, 2)
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
   * s.inset.mm(1, 2, 3)
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
   * s.inset.mm(1, 2, 3, 4)
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
   * s.inset.q(1)
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
   * s.inset.q(1, 2)
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
   * s.inset.q(1, 2, 3)
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
   * s.inset.q(1, 2, 3, 4)
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
   * s.inset.in(1)
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
   * s.inset.in(1, 2)
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
   * s.inset.in(1, 2, 3)
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
   * s.inset.in(1, 2, 3, 4)
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
   * s.inset.pt(1)
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
   * s.inset.pt(1, 2)
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
   * s.inset.pt(1, 2, 3)
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
   * s.inset.pt(1, 2, 3, 4)
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
   * s.inset.pc(1)
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
   * s.inset.pc(1, 2)
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
   * s.inset.pc(1, 2, 3)
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
   * s.inset.pc(1, 2, 3, 4)
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
   * s.inset.em(1)
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
   * s.inset.em(1, 2)
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
   * s.inset.em(1, 2, 3)
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
   * s.inset.em(1, 2, 3, 4)
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
   * s.inset.rem(1)
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
   * s.inset.rem(1, 2)
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
   * s.inset.rem(1, 2, 3)
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
   * s.inset.rem(1, 2, 3, 4)
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
   * s.inset.ex(1)
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
   * s.inset.ex(1, 2)
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
   * s.inset.ex(1, 2, 3)
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
   * s.inset.ex(1, 2, 3, 4)
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
   * s.inset.rex(1)
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
   * s.inset.rex(1, 2)
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
   * s.inset.rex(1, 2, 3)
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
   * s.inset.rex(1, 2, 3, 4)
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
   * s.inset.ch(1)
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
   * s.inset.ch(1, 2)
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
   * s.inset.ch(1, 2, 3)
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
   * s.inset.ch(1, 2, 3, 4)
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
   * s.inset.rch(1)
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
   * s.inset.rch(1, 2)
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
   * s.inset.rch(1, 2, 3)
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
   * s.inset.rch(1, 2, 3, 4)
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
   * s.inset.cap(1)
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
   * s.inset.cap(1, 2)
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
   * s.inset.cap(1, 2, 3)
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
   * s.inset.cap(1, 2, 3, 4)
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
   * s.inset.rcap(1)
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
   * s.inset.rcap(1, 2)
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
   * s.inset.rcap(1, 2, 3)
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
   * s.inset.rcap(1, 2, 3, 4)
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
   * s.inset.ic(1)
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
   * s.inset.ic(1, 2)
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
   * s.inset.ic(1, 2, 3)
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
   * s.inset.ic(1, 2, 3, 4)
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
   * s.inset.ric(1)
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
   * s.inset.ric(1, 2)
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
   * s.inset.ric(1, 2, 3)
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
   * s.inset.ric(1, 2, 3, 4)
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
   * s.inset.lh(1)
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
   * s.inset.lh(1, 2)
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
   * s.inset.lh(1, 2, 3)
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
   * s.inset.lh(1, 2, 3, 4)
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
   * s.inset.rlh(1)
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
   * s.inset.rlh(1, 2)
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
   * s.inset.rlh(1, 2, 3)
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
   * s.inset.rlh(1, 2, 3, 4)
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
   * s.inset.vw(1)
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
   * s.inset.vw(1, 2)
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
   * s.inset.vw(1, 2, 3)
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
   * s.inset.vw(1, 2, 3, 4)
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
   * s.inset.vh(1)
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
   * s.inset.vh(1, 2)
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
   * s.inset.vh(1, 2, 3)
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
   * s.inset.vh(1, 2, 3, 4)
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
   * s.inset.vi(1)
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
   * s.inset.vi(1, 2)
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
   * s.inset.vi(1, 2, 3)
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
   * s.inset.vi(1, 2, 3, 4)
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
   * s.inset.vb(1)
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
   * s.inset.vb(1, 2)
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
   * s.inset.vb(1, 2, 3)
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
   * s.inset.vb(1, 2, 3, 4)
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
   * s.inset.vmin(1)
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
   * s.inset.vmin(1, 2)
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
   * s.inset.vmin(1, 2, 3)
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
   * s.inset.vmin(1, 2, 3, 4)
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
   * s.inset.vmax(1)
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
   * s.inset.vmax(1, 2)
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
   * s.inset.vmax(1, 2, 3)
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
   * s.inset.vmax(1, 2, 3, 4)
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
   * s.inset.svw(1)
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
   * s.inset.svw(1, 2)
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
   * s.inset.svw(1, 2, 3)
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
   * s.inset.svw(1, 2, 3, 4)
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
   * s.inset.svh(1)
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
   * s.inset.svh(1, 2)
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
   * s.inset.svh(1, 2, 3)
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
   * s.inset.svh(1, 2, 3, 4)
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
   * s.inset.svi(1)
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
   * s.inset.svi(1, 2)
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
   * s.inset.svi(1, 2, 3)
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
   * s.inset.svi(1, 2, 3, 4)
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
   * s.inset.svb(1)
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
   * s.inset.svb(1, 2)
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
   * s.inset.svb(1, 2, 3)
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
   * s.inset.svb(1, 2, 3, 4)
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
   * s.inset.svmin(1)
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
   * s.inset.svmin(1, 2)
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
   * s.inset.svmin(1, 2, 3)
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
   * s.inset.svmin(1, 2, 3, 4)
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
   * s.inset.svmax(1)
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
   * s.inset.svmax(1, 2)
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
   * s.inset.svmax(1, 2, 3)
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
   * s.inset.svmax(1, 2, 3, 4)
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
   * s.inset.lvw(1)
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
   * s.inset.lvw(1, 2)
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
   * s.inset.lvw(1, 2, 3)
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
   * s.inset.lvw(1, 2, 3, 4)
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
   * s.inset.lvh(1)
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
   * s.inset.lvh(1, 2)
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
   * s.inset.lvh(1, 2, 3)
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
   * s.inset.lvh(1, 2, 3, 4)
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
   * s.inset.lvi(1)
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
   * s.inset.lvi(1, 2)
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
   * s.inset.lvi(1, 2, 3)
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
   * s.inset.lvi(1, 2, 3, 4)
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
   * s.inset.lvb(1)
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
   * s.inset.lvb(1, 2)
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
   * s.inset.lvb(1, 2, 3)
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
   * s.inset.lvb(1, 2, 3, 4)
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
   * s.inset.lvmin(1)
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
   * s.inset.lvmin(1, 2)
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
   * s.inset.lvmin(1, 2, 3)
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
   * s.inset.lvmin(1, 2, 3, 4)
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
   * s.inset.lvmax(1)
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
   * s.inset.lvmax(1, 2)
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
   * s.inset.lvmax(1, 2, 3)
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
   * s.inset.lvmax(1, 2, 3, 4)
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
   * s.inset.dvw(1)
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
   * s.inset.dvw(1, 2)
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
   * s.inset.dvw(1, 2, 3)
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
   * s.inset.dvw(1, 2, 3, 4)
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
   * s.inset.dvh(1)
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
   * s.inset.dvh(1, 2)
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
   * s.inset.dvh(1, 2, 3)
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
   * s.inset.dvh(1, 2, 3, 4)
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
   * s.inset.dvi(1)
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
   * s.inset.dvi(1, 2)
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
   * s.inset.dvi(1, 2, 3)
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
   * s.inset.dvi(1, 2, 3, 4)
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
   * s.inset.dvb(1)
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
   * s.inset.dvb(1, 2)
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
   * s.inset.dvb(1, 2, 3)
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
   * s.inset.dvb(1, 2, 3, 4)
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
   * s.inset.dvmin(1)
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
   * s.inset.dvmin(1, 2)
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
   * s.inset.dvmin(1, 2, 3)
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
   * s.inset.dvmin(1, 2, 3, 4)
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
   * s.inset.dvmax(1)
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
   * s.inset.dvmax(1, 2)
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
   * s.inset.dvmax(1, 2, 3)
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
   * s.inset.dvmax(1, 2, 3, 4)
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
   * s.inset.cqw(1)
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
   * s.inset.cqw(1, 2)
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
   * s.inset.cqw(1, 2, 3)
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
   * s.inset.cqw(1, 2, 3, 4)
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
   * s.inset.cqh(1)
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
   * s.inset.cqh(1, 2)
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
   * s.inset.cqh(1, 2, 3)
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
   * s.inset.cqh(1, 2, 3, 4)
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
   * s.inset.cqi(1)
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
   * s.inset.cqi(1, 2)
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
   * s.inset.cqi(1, 2, 3)
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
   * s.inset.cqi(1, 2, 3, 4)
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
   * s.inset.cqb(1)
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
   * s.inset.cqb(1, 2)
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
   * s.inset.cqb(1, 2, 3)
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
   * s.inset.cqb(1, 2, 3, 4)
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
   * s.inset.cqmin(1)
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
   * s.inset.cqmin(1, 2)
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
   * s.inset.cqmin(1, 2, 3)
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
   * s.inset.cqmin(1, 2, 3, 4)
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
   * s.inset.cqmax(1)
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
   * s.inset.cqmax(1, 2)
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
   * s.inset.cqmax(1, 2, 3)
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
   * s.inset.cqmax(1, 2, 3, 4)
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
   * s.inset.calc('var(--value) * 2')
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
   * s.inset.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Inset | CssString, ...others: (Property.Inset | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.inset.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Inset | CssString, ...others: (Property.Inset | CssString)[]): string {
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
   * s.inset.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Inset | CssString,
    preferred: Property.Inset | CssString,
    maximum: Property.Inset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * inset-block 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InsetBlockKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`inset-block:auto;`。 */
  readonly auto: Property.InsetBlock | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-block:inherit;`。
   */
  readonly inherit: Property.InsetBlock | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-block:initial;`。
   */
  readonly initial: Property.InsetBlock | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-block:revert;`。
   */
  readonly revert: Property.InsetBlock | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-block:revert-layer;`。
   */
  readonly revertLayer: Property.InsetBlock | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-block:unset;`。
   */
  readonly unset: Property.InsetBlock | CssString = 'unset';
}

/**
 * 设置定位元素沿逻辑块轴的起始和结束偏移。（inset-block）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
 */
export class InsetBlockCss extends LengthCssProperty {
  /** CSS 声明：`inset-block:auto;`。 */
  readonly auto: string = 'inset-block:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-block:inherit;`。
   */
  readonly inherit: string = 'inset-block:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-block:initial;`。
   */
  readonly initial: string = 'inset-block:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-block:revert;`。
   */
  readonly revert: string = 'inset-block:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-block:revert-layer;`。
   */
  readonly revertLayer: string = 'inset-block:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-block:unset;`。
   */
  readonly unset: string = 'inset-block:unset;';
  /**
   * 创建 inset-block 属性作者；普通使用通过 s.insetBlock 取得共享实例。
   * @example
   * class CustomInsetBlockCss extends InsetBlockCss {}
   */
  constructor() {
    super('inset-block');
  }
  /**
   * 原样生成 inset-block 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inset-block:value;。
   * @example
   * s.insetBlock.raw('inherit') // inset-block:inherit;
   */
  raw(value: Property.InsetBlock | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑块轴两侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.insetBlock.px(1)
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
   * s.insetBlock.px(1, 2)
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
   * s.insetBlock.cm(1)
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
   * s.insetBlock.cm(1, 2)
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
   * s.insetBlock.mm(1)
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
   * s.insetBlock.mm(1, 2)
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
   * s.insetBlock.q(1)
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
   * s.insetBlock.q(1, 2)
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
   * s.insetBlock.in(1)
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
   * s.insetBlock.in(1, 2)
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
   * s.insetBlock.pt(1)
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
   * s.insetBlock.pt(1, 2)
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
   * s.insetBlock.pc(1)
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
   * s.insetBlock.pc(1, 2)
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
   * s.insetBlock.em(1)
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
   * s.insetBlock.em(1, 2)
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
   * s.insetBlock.rem(1)
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
   * s.insetBlock.rem(1, 2)
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
   * s.insetBlock.ex(1)
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
   * s.insetBlock.ex(1, 2)
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
   * s.insetBlock.rex(1)
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
   * s.insetBlock.rex(1, 2)
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
   * s.insetBlock.ch(1)
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
   * s.insetBlock.ch(1, 2)
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
   * s.insetBlock.rch(1)
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
   * s.insetBlock.rch(1, 2)
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
   * s.insetBlock.cap(1)
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
   * s.insetBlock.cap(1, 2)
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
   * s.insetBlock.rcap(1)
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
   * s.insetBlock.rcap(1, 2)
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
   * s.insetBlock.ic(1)
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
   * s.insetBlock.ic(1, 2)
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
   * s.insetBlock.ric(1)
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
   * s.insetBlock.ric(1, 2)
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
   * s.insetBlock.lh(1)
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
   * s.insetBlock.lh(1, 2)
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
   * s.insetBlock.rlh(1)
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
   * s.insetBlock.rlh(1, 2)
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
   * s.insetBlock.vw(1)
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
   * s.insetBlock.vw(1, 2)
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
   * s.insetBlock.vh(1)
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
   * s.insetBlock.vh(1, 2)
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
   * s.insetBlock.vi(1)
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
   * s.insetBlock.vi(1, 2)
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
   * s.insetBlock.vb(1)
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
   * s.insetBlock.vb(1, 2)
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
   * s.insetBlock.vmin(1)
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
   * s.insetBlock.vmin(1, 2)
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
   * s.insetBlock.vmax(1)
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
   * s.insetBlock.vmax(1, 2)
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
   * s.insetBlock.svw(1)
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
   * s.insetBlock.svw(1, 2)
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
   * s.insetBlock.svh(1)
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
   * s.insetBlock.svh(1, 2)
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
   * s.insetBlock.svi(1)
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
   * s.insetBlock.svi(1, 2)
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
   * s.insetBlock.svb(1)
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
   * s.insetBlock.svb(1, 2)
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
   * s.insetBlock.svmin(1)
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
   * s.insetBlock.svmin(1, 2)
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
   * s.insetBlock.svmax(1)
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
   * s.insetBlock.svmax(1, 2)
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
   * s.insetBlock.lvw(1)
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
   * s.insetBlock.lvw(1, 2)
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
   * s.insetBlock.lvh(1)
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
   * s.insetBlock.lvh(1, 2)
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
   * s.insetBlock.lvi(1)
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
   * s.insetBlock.lvi(1, 2)
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
   * s.insetBlock.lvb(1)
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
   * s.insetBlock.lvb(1, 2)
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
   * s.insetBlock.lvmin(1)
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
   * s.insetBlock.lvmin(1, 2)
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
   * s.insetBlock.lvmax(1)
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
   * s.insetBlock.lvmax(1, 2)
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
   * s.insetBlock.dvw(1)
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
   * s.insetBlock.dvw(1, 2)
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
   * s.insetBlock.dvh(1)
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
   * s.insetBlock.dvh(1, 2)
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
   * s.insetBlock.dvi(1)
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
   * s.insetBlock.dvi(1, 2)
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
   * s.insetBlock.dvb(1)
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
   * s.insetBlock.dvb(1, 2)
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
   * s.insetBlock.dvmin(1)
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
   * s.insetBlock.dvmin(1, 2)
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
   * s.insetBlock.dvmax(1)
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
   * s.insetBlock.dvmax(1, 2)
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
   * s.insetBlock.cqw(1)
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
   * s.insetBlock.cqw(1, 2)
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
   * s.insetBlock.cqh(1)
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
   * s.insetBlock.cqh(1, 2)
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
   * s.insetBlock.cqi(1)
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
   * s.insetBlock.cqi(1, 2)
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
   * s.insetBlock.cqb(1)
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
   * s.insetBlock.cqb(1, 2)
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
   * s.insetBlock.cqmin(1)
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
   * s.insetBlock.cqmin(1, 2)
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
   * s.insetBlock.cqmax(1)
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
   * s.insetBlock.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.insetBlock.calc('var(--value) * 2')
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
   * s.insetBlock.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InsetBlock | CssString,
    ...others: (Property.InsetBlock | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.insetBlock.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InsetBlock | CssString,
    ...others: (Property.InsetBlock | CssString)[]
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
   * s.insetBlock.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InsetBlock | CssString,
    preferred: Property.InsetBlock | CssString,
    maximum: Property.InsetBlock | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * inset-block-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InsetBlockEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`inset-block-end:auto;`。 */
  readonly auto: Property.InsetBlockEnd | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-block-end:inherit;`。
   */
  readonly inherit: Property.InsetBlockEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-block-end:initial;`。
   */
  readonly initial: Property.InsetBlockEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-block-end:revert;`。
   */
  readonly revert: Property.InsetBlockEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-block-end:revert-layer;`。
   */
  readonly revertLayer: Property.InsetBlockEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-block-end:unset;`。
   */
  readonly unset: Property.InsetBlockEnd | CssString = 'unset';
}

/**
 * 设置定位元素在逻辑块轴结束侧的偏移。（inset-block-end）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
 */
export class InsetBlockEndCss extends LengthCssProperty {
  /** CSS 声明：`inset-block-end:auto;`。 */
  readonly auto: string = 'inset-block-end:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-block-end:inherit;`。
   */
  readonly inherit: string = 'inset-block-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-block-end:initial;`。
   */
  readonly initial: string = 'inset-block-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-block-end:revert;`。
   */
  readonly revert: string = 'inset-block-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-block-end:revert-layer;`。
   */
  readonly revertLayer: string = 'inset-block-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-block-end:unset;`。
   */
  readonly unset: string = 'inset-block-end:unset;';
  /**
   * 创建 inset-block-end 属性作者；普通使用通过 s.insetBlockEnd 取得共享实例。
   * @example
   * class CustomInsetBlockEndCss extends InsetBlockEndCss {}
   */
  constructor() {
    super('inset-block-end');
  }
  /**
   * 原样生成 inset-block-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inset-block-end:value;。
   * @example
   * s.insetBlockEnd.raw('inherit') // inset-block-end:inherit;
   */
  raw(value: Property.InsetBlockEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.insetBlockEnd.calc('var(--value) * 2')
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
   * s.insetBlockEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InsetBlockEnd | CssString,
    ...others: (Property.InsetBlockEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.insetBlockEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InsetBlockEnd | CssString,
    ...others: (Property.InsetBlockEnd | CssString)[]
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
   * s.insetBlockEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InsetBlockEnd | CssString,
    preferred: Property.InsetBlockEnd | CssString,
    maximum: Property.InsetBlockEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * inset-block-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InsetBlockStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`inset-block-start:auto;`。 */
  readonly auto: Property.InsetBlockStart | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-block-start:inherit;`。
   */
  readonly inherit: Property.InsetBlockStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-block-start:initial;`。
   */
  readonly initial: Property.InsetBlockStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-block-start:revert;`。
   */
  readonly revert: Property.InsetBlockStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-block-start:revert-layer;`。
   */
  readonly revertLayer: Property.InsetBlockStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-block-start:unset;`。
   */
  readonly unset: Property.InsetBlockStart | CssString = 'unset';
}

/**
 * 设置定位元素在逻辑块轴起始侧的偏移。（inset-block-start）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
 */
export class InsetBlockStartCss extends LengthCssProperty {
  /** CSS 声明：`inset-block-start:auto;`。 */
  readonly auto: string = 'inset-block-start:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-block-start:inherit;`。
   */
  readonly inherit: string = 'inset-block-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-block-start:initial;`。
   */
  readonly initial: string = 'inset-block-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-block-start:revert;`。
   */
  readonly revert: string = 'inset-block-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-block-start:revert-layer;`。
   */
  readonly revertLayer: string = 'inset-block-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-block-start:unset;`。
   */
  readonly unset: string = 'inset-block-start:unset;';
  /**
   * 创建 inset-block-start 属性作者；普通使用通过 s.insetBlockStart 取得共享实例。
   * @example
   * class CustomInsetBlockStartCss extends InsetBlockStartCss {}
   */
  constructor() {
    super('inset-block-start');
  }
  /**
   * 原样生成 inset-block-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inset-block-start:value;。
   * @example
   * s.insetBlockStart.raw('inherit') // inset-block-start:inherit;
   */
  raw(value: Property.InsetBlockStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.insetBlockStart.calc('var(--value) * 2')
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
   * s.insetBlockStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InsetBlockStart | CssString,
    ...others: (Property.InsetBlockStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.insetBlockStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InsetBlockStart | CssString,
    ...others: (Property.InsetBlockStart | CssString)[]
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
   * s.insetBlockStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InsetBlockStart | CssString,
    preferred: Property.InsetBlockStart | CssString,
    maximum: Property.InsetBlockStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * inset-inline 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InsetInlineKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`inset-inline:auto;`。 */
  readonly auto: Property.InsetInline | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-inline:inherit;`。
   */
  readonly inherit: Property.InsetInline | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-inline:initial;`。
   */
  readonly initial: Property.InsetInline | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-inline:revert;`。
   */
  readonly revert: Property.InsetInline | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-inline:revert-layer;`。
   */
  readonly revertLayer: Property.InsetInline | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-inline:unset;`。
   */
  readonly unset: Property.InsetInline | CssString = 'unset';
}

/**
 * 设置定位元素沿逻辑行内轴的起始和结束偏移。（inset-inline）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
 */
export class InsetInlineCss extends LengthCssProperty {
  /** CSS 声明：`inset-inline:auto;`。 */
  readonly auto: string = 'inset-inline:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-inline:inherit;`。
   */
  readonly inherit: string = 'inset-inline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-inline:initial;`。
   */
  readonly initial: string = 'inset-inline:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-inline:revert;`。
   */
  readonly revert: string = 'inset-inline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-inline:revert-layer;`。
   */
  readonly revertLayer: string = 'inset-inline:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-inline:unset;`。
   */
  readonly unset: string = 'inset-inline:unset;';
  /**
   * 创建 inset-inline 属性作者；普通使用通过 s.insetInline 取得共享实例。
   * @example
   * class CustomInsetInlineCss extends InsetInlineCss {}
   */
  constructor() {
    super('inset-inline');
  }
  /**
   * 原样生成 inset-inline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inset-inline:value;。
   * @example
   * s.insetInline.raw('inherit') // inset-inline:inherit;
   */
  raw(value: Property.InsetInline | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 逻辑行内轴两侧的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.insetInline.px(1)
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
   * s.insetInline.px(1, 2)
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
   * s.insetInline.cm(1)
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
   * s.insetInline.cm(1, 2)
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
   * s.insetInline.mm(1)
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
   * s.insetInline.mm(1, 2)
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
   * s.insetInline.q(1)
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
   * s.insetInline.q(1, 2)
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
   * s.insetInline.in(1)
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
   * s.insetInline.in(1, 2)
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
   * s.insetInline.pt(1)
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
   * s.insetInline.pt(1, 2)
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
   * s.insetInline.pc(1)
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
   * s.insetInline.pc(1, 2)
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
   * s.insetInline.em(1)
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
   * s.insetInline.em(1, 2)
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
   * s.insetInline.rem(1)
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
   * s.insetInline.rem(1, 2)
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
   * s.insetInline.ex(1)
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
   * s.insetInline.ex(1, 2)
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
   * s.insetInline.rex(1)
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
   * s.insetInline.rex(1, 2)
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
   * s.insetInline.ch(1)
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
   * s.insetInline.ch(1, 2)
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
   * s.insetInline.rch(1)
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
   * s.insetInline.rch(1, 2)
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
   * s.insetInline.cap(1)
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
   * s.insetInline.cap(1, 2)
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
   * s.insetInline.rcap(1)
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
   * s.insetInline.rcap(1, 2)
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
   * s.insetInline.ic(1)
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
   * s.insetInline.ic(1, 2)
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
   * s.insetInline.ric(1)
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
   * s.insetInline.ric(1, 2)
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
   * s.insetInline.lh(1)
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
   * s.insetInline.lh(1, 2)
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
   * s.insetInline.rlh(1)
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
   * s.insetInline.rlh(1, 2)
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
   * s.insetInline.vw(1)
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
   * s.insetInline.vw(1, 2)
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
   * s.insetInline.vh(1)
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
   * s.insetInline.vh(1, 2)
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
   * s.insetInline.vi(1)
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
   * s.insetInline.vi(1, 2)
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
   * s.insetInline.vb(1)
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
   * s.insetInline.vb(1, 2)
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
   * s.insetInline.vmin(1)
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
   * s.insetInline.vmin(1, 2)
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
   * s.insetInline.vmax(1)
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
   * s.insetInline.vmax(1, 2)
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
   * s.insetInline.svw(1)
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
   * s.insetInline.svw(1, 2)
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
   * s.insetInline.svh(1)
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
   * s.insetInline.svh(1, 2)
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
   * s.insetInline.svi(1)
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
   * s.insetInline.svi(1, 2)
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
   * s.insetInline.svb(1)
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
   * s.insetInline.svb(1, 2)
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
   * s.insetInline.svmin(1)
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
   * s.insetInline.svmin(1, 2)
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
   * s.insetInline.svmax(1)
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
   * s.insetInline.svmax(1, 2)
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
   * s.insetInline.lvw(1)
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
   * s.insetInline.lvw(1, 2)
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
   * s.insetInline.lvh(1)
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
   * s.insetInline.lvh(1, 2)
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
   * s.insetInline.lvi(1)
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
   * s.insetInline.lvi(1, 2)
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
   * s.insetInline.lvb(1)
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
   * s.insetInline.lvb(1, 2)
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
   * s.insetInline.lvmin(1)
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
   * s.insetInline.lvmin(1, 2)
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
   * s.insetInline.lvmax(1)
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
   * s.insetInline.lvmax(1, 2)
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
   * s.insetInline.dvw(1)
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
   * s.insetInline.dvw(1, 2)
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
   * s.insetInline.dvh(1)
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
   * s.insetInline.dvh(1, 2)
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
   * s.insetInline.dvi(1)
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
   * s.insetInline.dvi(1, 2)
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
   * s.insetInline.dvb(1)
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
   * s.insetInline.dvb(1, 2)
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
   * s.insetInline.dvmin(1)
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
   * s.insetInline.dvmin(1, 2)
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
   * s.insetInline.dvmax(1)
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
   * s.insetInline.dvmax(1, 2)
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
   * s.insetInline.cqw(1)
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
   * s.insetInline.cqw(1, 2)
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
   * s.insetInline.cqh(1)
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
   * s.insetInline.cqh(1, 2)
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
   * s.insetInline.cqi(1)
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
   * s.insetInline.cqi(1, 2)
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
   * s.insetInline.cqb(1)
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
   * s.insetInline.cqb(1, 2)
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
   * s.insetInline.cqmin(1)
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
   * s.insetInline.cqmin(1, 2)
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
   * s.insetInline.cqmax(1)
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
   * s.insetInline.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.insetInline.calc('var(--value) * 2')
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
   * s.insetInline.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InsetInline | CssString,
    ...others: (Property.InsetInline | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.insetInline.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InsetInline | CssString,
    ...others: (Property.InsetInline | CssString)[]
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
   * s.insetInline.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InsetInline | CssString,
    preferred: Property.InsetInline | CssString,
    maximum: Property.InsetInline | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * inset-inline-end 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InsetInlineEndKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`inset-inline-end:auto;`。 */
  readonly auto: Property.InsetInlineEnd | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-inline-end:inherit;`。
   */
  readonly inherit: Property.InsetInlineEnd | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-inline-end:initial;`。
   */
  readonly initial: Property.InsetInlineEnd | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-inline-end:revert;`。
   */
  readonly revert: Property.InsetInlineEnd | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-inline-end:revert-layer;`。
   */
  readonly revertLayer: Property.InsetInlineEnd | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-inline-end:unset;`。
   */
  readonly unset: Property.InsetInlineEnd | CssString = 'unset';
}

/**
 * 设置定位元素在逻辑行内轴结束侧的偏移。（inset-inline-end）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
 */
export class InsetInlineEndCss extends LengthCssProperty {
  /** CSS 声明：`inset-inline-end:auto;`。 */
  readonly auto: string = 'inset-inline-end:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-inline-end:inherit;`。
   */
  readonly inherit: string = 'inset-inline-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-inline-end:initial;`。
   */
  readonly initial: string = 'inset-inline-end:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-inline-end:revert;`。
   */
  readonly revert: string = 'inset-inline-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-inline-end:revert-layer;`。
   */
  readonly revertLayer: string = 'inset-inline-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-inline-end:unset;`。
   */
  readonly unset: string = 'inset-inline-end:unset;';
  /**
   * 创建 inset-inline-end 属性作者；普通使用通过 s.insetInlineEnd 取得共享实例。
   * @example
   * class CustomInsetInlineEndCss extends InsetInlineEndCss {}
   */
  constructor() {
    super('inset-inline-end');
  }
  /**
   * 原样生成 inset-inline-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inset-inline-end:value;。
   * @example
   * s.insetInlineEnd.raw('inherit') // inset-inline-end:inherit;
   */
  raw(value: Property.InsetInlineEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.insetInlineEnd.calc('var(--value) * 2')
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
   * s.insetInlineEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InsetInlineEnd | CssString,
    ...others: (Property.InsetInlineEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.insetInlineEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InsetInlineEnd | CssString,
    ...others: (Property.InsetInlineEnd | CssString)[]
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
   * s.insetInlineEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InsetInlineEnd | CssString,
    preferred: Property.InsetInlineEnd | CssString,
    maximum: Property.InsetInlineEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * inset-inline-start 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InsetInlineStartKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`inset-inline-start:auto;`。 */
  readonly auto: Property.InsetInlineStart | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-inline-start:inherit;`。
   */
  readonly inherit: Property.InsetInlineStart | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-inline-start:initial;`。
   */
  readonly initial: Property.InsetInlineStart | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-inline-start:revert;`。
   */
  readonly revert: Property.InsetInlineStart | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-inline-start:revert-layer;`。
   */
  readonly revertLayer: Property.InsetInlineStart | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-inline-start:unset;`。
   */
  readonly unset: Property.InsetInlineStart | CssString = 'unset';
}

/**
 * 设置定位元素在逻辑行内轴起始侧的偏移。（inset-inline-start）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
 */
export class InsetInlineStartCss extends LengthCssProperty {
  /** CSS 声明：`inset-inline-start:auto;`。 */
  readonly auto: string = 'inset-inline-start:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`inset-inline-start:inherit;`。
   */
  readonly inherit: string = 'inset-inline-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`inset-inline-start:initial;`。
   */
  readonly initial: string = 'inset-inline-start:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`inset-inline-start:revert;`。
   */
  readonly revert: string = 'inset-inline-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`inset-inline-start:revert-layer;`。
   */
  readonly revertLayer: string = 'inset-inline-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`inset-inline-start:unset;`。
   */
  readonly unset: string = 'inset-inline-start:unset;';
  /**
   * 创建 inset-inline-start 属性作者；普通使用通过 s.insetInlineStart 取得共享实例。
   * @example
   * class CustomInsetInlineStartCss extends InsetInlineStartCss {}
   */
  constructor() {
    super('inset-inline-start');
  }
  /**
   * 原样生成 inset-inline-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 inset-inline-start:value;。
   * @example
   * s.insetInlineStart.raw('inherit') // inset-inline-start:inherit;
   */
  raw(value: Property.InsetInlineStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.insetInlineStart.calc('var(--value) * 2')
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
   * s.insetInlineStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.InsetInlineStart | CssString,
    ...others: (Property.InsetInlineStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.insetInlineStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.InsetInlineStart | CssString,
    ...others: (Property.InsetInlineStart | CssString)[]
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
   * s.insetInlineStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.InsetInlineStart | CssString,
    preferred: Property.InsetInlineStart | CssString,
    maximum: Property.InsetInlineStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * interpolate-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class InterpolateSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许受支持的内部尺寸关键字与长度/百分比之间插值，不保证两个关键字之间可以插值。
   *
   * CSS 声明：`interpolate-size:allow-keywords;`。
   */
  readonly allowKeywords: Property.InterpolateSize | CssString = 'allow-keywords';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`interpolate-size:inherit;`。
   */
  readonly inherit: Property.InterpolateSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`interpolate-size:initial;`。
   */
  readonly initial: Property.InterpolateSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保持仅数值尺寸之间的插值行为。
   *
   * CSS 声明：`interpolate-size:numeric-only;`。
   */
  readonly numericOnly: Property.InterpolateSize | CssString = 'numeric-only';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`interpolate-size:revert;`。
   */
  readonly revert: Property.InterpolateSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`interpolate-size:revert-layer;`。
   */
  readonly revertLayer: Property.InterpolateSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`interpolate-size:unset;`。
   */
  readonly unset: Property.InterpolateSize | CssString = 'unset';
}

/**
 * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。（interpolate-size）
 *
 * CSS 初始值：`numeric-only`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
 */
export class InterpolateSizeCss extends CssProperty {
  /**
   * 允许受支持的内部尺寸关键字与长度/百分比之间插值，不保证两个关键字之间可以插值。
   *
   * CSS 声明：`interpolate-size:allow-keywords;`。
   */
  readonly allowKeywords: string = 'interpolate-size:allow-keywords;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`interpolate-size:inherit;`。
   */
  readonly inherit: string = 'interpolate-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`interpolate-size:initial;`。
   */
  readonly initial: string = 'interpolate-size:initial;';
  /**
   * 保持仅数值尺寸之间的插值行为。
   *
   * CSS 声明：`interpolate-size:numeric-only;`。
   */
  readonly numericOnly: string = 'interpolate-size:numeric-only;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`interpolate-size:revert;`。
   */
  readonly revert: string = 'interpolate-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`interpolate-size:revert-layer;`。
   */
  readonly revertLayer: string = 'interpolate-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`interpolate-size:unset;`。
   */
  readonly unset: string = 'interpolate-size:unset;';
  /**
   * 创建 interpolate-size 属性作者；普通使用通过 s.interpolateSize 取得共享实例。
   * @example
   * class CustomInterpolateSizeCss extends InterpolateSizeCss {}
   */
  constructor() {
    super('interpolate-size');
  }
  /**
   * 原样生成 interpolate-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 interpolate-size:value;。
   * @example
   * s.interpolateSize.raw('inherit') // interpolate-size:inherit;
   */
  raw(value: Property.InterpolateSize | CssString): string {
    return this.declaration(value);
  }
}

/**
 * isolation 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class IsolationKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由其他属性是否需要层叠上下文决定，不强制隔离。
   *
   * CSS 声明：`isolation:auto;`。
   */
  readonly auto: Property.Isolation | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`isolation:inherit;`。
   */
  readonly inherit: Property.Isolation | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`isolation:initial;`。
   */
  readonly initial: Property.Isolation | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立独立层叠上下文，使混合效果在该分组内处理。
   *
   * CSS 声明：`isolation:isolate;`。
   */
  readonly isolate: Property.Isolation | CssString = 'isolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`isolation:revert;`。
   */
  readonly revert: Property.Isolation | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`isolation:revert-layer;`。
   */
  readonly revertLayer: Property.Isolation | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`isolation:unset;`。
   */
  readonly unset: Property.Isolation | CssString = 'unset';
}

/**
 * 控制元素是否建立独立的层叠上下文，隔离混合效果。（isolation）
 *
 * 常用值：
 * - `auto`：由其他属性是否需要层叠上下文决定，不强制隔离。
 * - `isolate`：建立独立层叠上下文，使混合效果在该分组内处理。
 *
 * 适用场景：建立局部层叠边界，或限制混合模式影响范围。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * s.isolation.isolate
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
 */
export class IsolationCss extends CssProperty {
  /**
   * 由其他属性是否需要层叠上下文决定，不强制隔离。
   *
   * CSS 声明：`isolation:auto;`。
   */
  readonly auto: string = 'isolation:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`isolation:inherit;`。
   */
  readonly inherit: string = 'isolation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`isolation:initial;`。
   */
  readonly initial: string = 'isolation:initial;';
  /**
   * 建立独立层叠上下文，使混合效果在该分组内处理。
   *
   * CSS 声明：`isolation:isolate;`。
   */
  readonly isolate: string = 'isolation:isolate;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`isolation:revert;`。
   */
  readonly revert: string = 'isolation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`isolation:revert-layer;`。
   */
  readonly revertLayer: string = 'isolation:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`isolation:unset;`。
   */
  readonly unset: string = 'isolation:unset;';
  /**
   * 创建 isolation 属性作者；普通使用通过 s.isolation 取得共享实例。
   * @example
   * class CustomIsolationCss extends IsolationCss {}
   */
  constructor() {
    super('isolation');
  }
  /**
   * 原样生成 isolation 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 isolation:value;。
   * @example
   * s.isolation.raw('inherit') // isolation:inherit;
   */
  raw(value: Property.Isolation | CssString): string {
    return this.declaration(value);
  }
}

/**
 * justify-content 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class JustifyContentKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 将整体内容放在主轴或行内轴的中间，不改变项目内部文字对齐。
   *
   * CSS 声明：`justify-content:center;`。
   */
  readonly center: Property.JustifyContent | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-content:end;`。 */
  readonly end: Property.JustifyContent | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * Flex 内容靠主轴终点排列。
   *
   * CSS 声明：`justify-content:flex-end;`。
   */
  readonly flexEnd: Property.JustifyContent | CssString = 'flex-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * Flex 内容靠主轴起点排列；起点受 flex-direction 影响。
   *
   * CSS 声明：`justify-content:flex-start;`。
   */
  readonly flexStart: Property.JustifyContent | CssString = 'flex-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-content:inherit;`。
   */
  readonly inherit: Property.JustifyContent | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-content:initial;`。
   */
  readonly initial: Property.JustifyContent | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-content:left;`。 */
  readonly left: Property.JustifyContent | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-content:normal;`。 */
  readonly normal: Property.JustifyContent | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-content:revert;`。
   */
  readonly revert: Property.JustifyContent | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-content:revert-layer;`。
   */
  readonly revertLayer: Property.JustifyContent | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-content:right;`。 */
  readonly right: Property.JustifyContent | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 每个项目两侧分配相等空间，容器边缘的空间是相邻项目间的一半。
   *
   * CSS 声明：`justify-content:space-around;`。
   */
  readonly spaceAround: Property.JustifyContent | CssString = 'space-around';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 首尾项目贴两端，剩余空间等分到相邻项目之间。
   *
   * 区别：space-evenly 在两端也保留等量空间；space-around 的边缘空间只有项目之间的一半。
   *
   * 适用场景：工具栏左侧标题和右侧操作分居两端。
   *
   * 注意：只有一个项目时靠起始侧，不会自动居中。
   *
   * CSS 声明：`justify-content:space-between;`。
   * @example
   * css(s.display.flex, s.justifyContent.spaceBetween, s.alignItems.center)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  readonly spaceBetween: Property.JustifyContent | CssString = 'space-between';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 容器两端和相邻项目之间分配相等空间。
   *
   * 适用场景：希望容器两端和项目之间空隙一致的导航或操作组。
   *
   * CSS 声明：`justify-content:space-evenly;`。
   * @example
   * css(s.display.flex, s.justifyContent.spaceEvenly)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  readonly spaceEvenly: Property.JustifyContent | CssString = 'space-evenly';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-content:start;`。 */
  readonly start: Property.JustifyContent | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在支持的布局中拉伸自动尺寸的内容；Flex 主轴增长通常由 flex-grow 控制。
   *
   * CSS 声明：`justify-content:stretch;`。
   */
  readonly stretch: Property.JustifyContent | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-content:unset;`。
   */
  readonly unset: Property.JustifyContent | CssString = 'unset';
}

/**
 * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。（justify-content）
 *
 * Flex 中沿主轴分配空间，Grid 中沿行内轴对齐网格整体。没有剩余空间时，空间分配效果可能不明显。
 *
 * 常用值：
 * - `center`：将整体内容放在主轴或行内轴的中间，不改变项目内部文字对齐。
 * - `space-between`：首尾项目贴两端，剩余空间等分到相邻项目之间。
 * - `space-around`：每个项目两侧分配相等空间，容器边缘的空间是相邻项目间的一半。
 * - `space-evenly`：容器两端和相邻项目之间分配相等空间。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @example
 * css(s.display.flex, s.justifyContent.spaceBetween)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
 */
export class JustifyContentCss extends CssProperty {
  /**
   * 将整体内容放在主轴或行内轴的中间，不改变项目内部文字对齐。
   *
   * CSS 声明：`justify-content:center;`。
   */
  readonly center: string = 'justify-content:center;';
  /** CSS 声明：`justify-content:end;`。 */
  readonly end: string = 'justify-content:end;';
  /**
   * Flex 内容靠主轴终点排列。
   *
   * CSS 声明：`justify-content:flex-end;`。
   */
  readonly flexEnd: string = 'justify-content:flex-end;';
  /**
   * Flex 内容靠主轴起点排列；起点受 flex-direction 影响。
   *
   * CSS 声明：`justify-content:flex-start;`。
   */
  readonly flexStart: string = 'justify-content:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-content:inherit;`。
   */
  readonly inherit: string = 'justify-content:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-content:initial;`。
   */
  readonly initial: string = 'justify-content:initial;';
  /** CSS 声明：`justify-content:left;`。 */
  readonly left: string = 'justify-content:left;';
  /** CSS 声明：`justify-content:normal;`。 */
  readonly normal: string = 'justify-content:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-content:revert;`。
   */
  readonly revert: string = 'justify-content:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-content:revert-layer;`。
   */
  readonly revertLayer: string = 'justify-content:revert-layer;';
  /** CSS 声明：`justify-content:right;`。 */
  readonly right: string = 'justify-content:right;';
  /**
   * 每个项目两侧分配相等空间，容器边缘的空间是相邻项目间的一半。
   *
   * CSS 声明：`justify-content:space-around;`。
   */
  readonly spaceAround: string = 'justify-content:space-around;';
  /**
   * 首尾项目贴两端，剩余空间等分到相邻项目之间。
   *
   * 区别：space-evenly 在两端也保留等量空间；space-around 的边缘空间只有项目之间的一半。
   *
   * 适用场景：工具栏左侧标题和右侧操作分居两端。
   *
   * 注意：只有一个项目时靠起始侧，不会自动居中。
   *
   * CSS 声明：`justify-content:space-between;`。
   * @example
   * css(s.display.flex, s.justifyContent.spaceBetween, s.alignItems.center)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  readonly spaceBetween: string = 'justify-content:space-between;';
  /**
   * 容器两端和相邻项目之间分配相等空间。
   *
   * 适用场景：希望容器两端和项目之间空隙一致的导航或操作组。
   *
   * CSS 声明：`justify-content:space-evenly;`。
   * @example
   * css(s.display.flex, s.justifyContent.spaceEvenly)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  readonly spaceEvenly: string = 'justify-content:space-evenly;';
  /** CSS 声明：`justify-content:start;`。 */
  readonly start: string = 'justify-content:start;';
  /**
   * 在支持的布局中拉伸自动尺寸的内容；Flex 主轴增长通常由 flex-grow 控制。
   *
   * CSS 声明：`justify-content:stretch;`。
   */
  readonly stretch: string = 'justify-content:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-content:unset;`。
   */
  readonly unset: string = 'justify-content:unset;';
  /**
   * 创建 justify-content 属性作者；普通使用通过 s.justifyContent 取得共享实例。
   * @example
   * class CustomJustifyContentCss extends JustifyContentCss {}
   */
  constructor() {
    super('justify-content');
  }
  /**
   * 原样生成 justify-content 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 justify-content:value;。
   * @example
   * s.justifyContent.raw('inherit') // justify-content:inherit;
   */
  raw(value: Property.JustifyContent | CssString): string {
    return this.declaration(value);
  }
}

/**
 * justify-items 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class JustifyItemsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:anchor-center;`。 */
  readonly anchorCenter: Property.JustifyItems | CssString = 'anchor-center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:baseline;`。 */
  readonly baseline: Property.JustifyItems | CssString = 'baseline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:center;`。 */
  readonly center: Property.JustifyItems | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:end;`。 */
  readonly end: Property.JustifyItems | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:flex-end;`。 */
  readonly flexEnd: Property.JustifyItems | CssString = 'flex-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:flex-start;`。 */
  readonly flexStart: Property.JustifyItems | CssString = 'flex-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-items:inherit;`。
   */
  readonly inherit: Property.JustifyItems | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-items:initial;`。
   */
  readonly initial: Property.JustifyItems | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:left;`。 */
  readonly left: Property.JustifyItems | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:legacy;`。 */
  readonly legacy: Property.JustifyItems | CssString = 'legacy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:normal;`。 */
  readonly normal: Property.JustifyItems | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-items:revert;`。
   */
  readonly revert: Property.JustifyItems | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-items:revert-layer;`。
   */
  readonly revertLayer: Property.JustifyItems | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:right;`。 */
  readonly right: Property.JustifyItems | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:self-end;`。 */
  readonly selfEnd: Property.JustifyItems | CssString = 'self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:self-start;`。 */
  readonly selfStart: Property.JustifyItems | CssString = 'self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:start;`。 */
  readonly start: Property.JustifyItems | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-items:stretch;`。 */
  readonly stretch: Property.JustifyItems | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-items:unset;`。
   */
  readonly unset: Property.JustifyItems | CssString = 'unset';
}

/**
 * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。（justify-items）
 *
 * CSS 初始值：`legacy`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
 */
export class JustifyItemsCss extends CssProperty {
  /** CSS 声明：`justify-items:anchor-center;`。 */
  readonly anchorCenter: string = 'justify-items:anchor-center;';
  /** CSS 声明：`justify-items:baseline;`。 */
  readonly baseline: string = 'justify-items:baseline;';
  /** CSS 声明：`justify-items:center;`。 */
  readonly center: string = 'justify-items:center;';
  /** CSS 声明：`justify-items:end;`。 */
  readonly end: string = 'justify-items:end;';
  /** CSS 声明：`justify-items:flex-end;`。 */
  readonly flexEnd: string = 'justify-items:flex-end;';
  /** CSS 声明：`justify-items:flex-start;`。 */
  readonly flexStart: string = 'justify-items:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-items:inherit;`。
   */
  readonly inherit: string = 'justify-items:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-items:initial;`。
   */
  readonly initial: string = 'justify-items:initial;';
  /** CSS 声明：`justify-items:left;`。 */
  readonly left: string = 'justify-items:left;';
  /** CSS 声明：`justify-items:legacy;`。 */
  readonly legacy: string = 'justify-items:legacy;';
  /** CSS 声明：`justify-items:normal;`。 */
  readonly normal: string = 'justify-items:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-items:revert;`。
   */
  readonly revert: string = 'justify-items:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-items:revert-layer;`。
   */
  readonly revertLayer: string = 'justify-items:revert-layer;';
  /** CSS 声明：`justify-items:right;`。 */
  readonly right: string = 'justify-items:right;';
  /** CSS 声明：`justify-items:self-end;`。 */
  readonly selfEnd: string = 'justify-items:self-end;';
  /** CSS 声明：`justify-items:self-start;`。 */
  readonly selfStart: string = 'justify-items:self-start;';
  /** CSS 声明：`justify-items:start;`。 */
  readonly start: string = 'justify-items:start;';
  /** CSS 声明：`justify-items:stretch;`。 */
  readonly stretch: string = 'justify-items:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-items:unset;`。
   */
  readonly unset: string = 'justify-items:unset;';
  /**
   * 创建 justify-items 属性作者；普通使用通过 s.justifyItems 取得共享实例。
   * @example
   * class CustomJustifyItemsCss extends JustifyItemsCss {}
   */
  constructor() {
    super('justify-items');
  }
  /**
   * 原样生成 justify-items 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 justify-items:value;。
   * @example
   * s.justifyItems.raw('inherit') // justify-items:inherit;
   */
  raw(value: Property.JustifyItems | CssString): string {
    return this.declaration(value);
  }
}

/**
 * justify-self 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class JustifySelfKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:anchor-center;`。 */
  readonly anchorCenter: Property.JustifySelf | CssString = 'anchor-center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 采用父容器 justify-items 等上下文决定的对齐方式；不用于 Flex 项目的主轴分配。
   *
   * CSS 声明：`justify-self:auto;`。
   */
  readonly auto: Property.JustifySelf | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:baseline;`。 */
  readonly baseline: Property.JustifySelf | CssString = 'baseline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:center;`。 */
  readonly center: Property.JustifySelf | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:end;`。 */
  readonly end: Property.JustifySelf | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:flex-end;`。 */
  readonly flexEnd: Property.JustifySelf | CssString = 'flex-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:flex-start;`。 */
  readonly flexStart: Property.JustifySelf | CssString = 'flex-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-self:inherit;`。
   */
  readonly inherit: Property.JustifySelf | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-self:initial;`。
   */
  readonly initial: Property.JustifySelf | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:left;`。 */
  readonly left: Property.JustifySelf | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:normal;`。 */
  readonly normal: Property.JustifySelf | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-self:revert;`。
   */
  readonly revert: Property.JustifySelf | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-self:revert-layer;`。
   */
  readonly revertLayer: Property.JustifySelf | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:right;`。 */
  readonly right: Property.JustifySelf | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:self-end;`。 */
  readonly selfEnd: Property.JustifySelf | CssString = 'self-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:self-start;`。 */
  readonly selfStart: Property.JustifySelf | CssString = 'self-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-self:start;`。 */
  readonly start: Property.JustifySelf | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 在自动尺寸和最小/最大约束允许时沿行内轴拉伸。
   *
   * CSS 声明：`justify-self:stretch;`。
   */
  readonly stretch: Property.JustifySelf | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-self:unset;`。
   */
  readonly unset: Property.JustifySelf | CssString = 'unset';
}

/**
 * 单独设置项目在其布局区域内的行内轴对齐方式。（justify-self）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
 */
export class JustifySelfCss extends CssProperty {
  /** CSS 声明：`justify-self:anchor-center;`。 */
  readonly anchorCenter: string = 'justify-self:anchor-center;';
  /**
   * 采用父容器 justify-items 等上下文决定的对齐方式；不用于 Flex 项目的主轴分配。
   *
   * CSS 声明：`justify-self:auto;`。
   */
  readonly auto: string = 'justify-self:auto;';
  /** CSS 声明：`justify-self:baseline;`。 */
  readonly baseline: string = 'justify-self:baseline;';
  /** CSS 声明：`justify-self:center;`。 */
  readonly center: string = 'justify-self:center;';
  /** CSS 声明：`justify-self:end;`。 */
  readonly end: string = 'justify-self:end;';
  /** CSS 声明：`justify-self:flex-end;`。 */
  readonly flexEnd: string = 'justify-self:flex-end;';
  /** CSS 声明：`justify-self:flex-start;`。 */
  readonly flexStart: string = 'justify-self:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-self:inherit;`。
   */
  readonly inherit: string = 'justify-self:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-self:initial;`。
   */
  readonly initial: string = 'justify-self:initial;';
  /** CSS 声明：`justify-self:left;`。 */
  readonly left: string = 'justify-self:left;';
  /** CSS 声明：`justify-self:normal;`。 */
  readonly normal: string = 'justify-self:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-self:revert;`。
   */
  readonly revert: string = 'justify-self:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-self:revert-layer;`。
   */
  readonly revertLayer: string = 'justify-self:revert-layer;';
  /** CSS 声明：`justify-self:right;`。 */
  readonly right: string = 'justify-self:right;';
  /** CSS 声明：`justify-self:self-end;`。 */
  readonly selfEnd: string = 'justify-self:self-end;';
  /** CSS 声明：`justify-self:self-start;`。 */
  readonly selfStart: string = 'justify-self:self-start;';
  /** CSS 声明：`justify-self:start;`。 */
  readonly start: string = 'justify-self:start;';
  /**
   * 在自动尺寸和最小/最大约束允许时沿行内轴拉伸。
   *
   * CSS 声明：`justify-self:stretch;`。
   */
  readonly stretch: string = 'justify-self:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-self:unset;`。
   */
  readonly unset: string = 'justify-self:unset;';
  /**
   * 创建 justify-self 属性作者；普通使用通过 s.justifySelf 取得共享实例。
   * @example
   * class CustomJustifySelfCss extends JustifySelfCss {}
   */
  constructor() {
    super('justify-self');
  }
  /**
   * 原样生成 justify-self 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 justify-self:value;。
   * @example
   * s.justifySelf.raw('inherit') // justify-self:inherit;
   */
  raw(value: Property.JustifySelf | CssString): string {
    return this.declaration(value);
  }
}

/**
 * justify-tracks 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class JustifyTracksKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:center;`。 */
  readonly center: Property.JustifyTracks | CssString = 'center';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:end;`。 */
  readonly end: Property.JustifyTracks | CssString = 'end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:flex-end;`。 */
  readonly flexEnd: Property.JustifyTracks | CssString = 'flex-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:flex-start;`。 */
  readonly flexStart: Property.JustifyTracks | CssString = 'flex-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-tracks:inherit;`。
   */
  readonly inherit: Property.JustifyTracks | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-tracks:initial;`。
   */
  readonly initial: Property.JustifyTracks | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:left;`。 */
  readonly left: Property.JustifyTracks | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:normal;`。 */
  readonly normal: Property.JustifyTracks | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-tracks:revert;`。
   */
  readonly revert: Property.JustifyTracks | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-tracks:revert-layer;`。
   */
  readonly revertLayer: Property.JustifyTracks | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:right;`。 */
  readonly right: Property.JustifyTracks | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:space-around;`。 */
  readonly spaceAround: Property.JustifyTracks | CssString = 'space-around';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:space-between;`。 */
  readonly spaceBetween: Property.JustifyTracks | CssString = 'space-between';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:space-evenly;`。 */
  readonly spaceEvenly: Property.JustifyTracks | CssString = 'space-evenly';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:start;`。 */
  readonly start: Property.JustifyTracks | CssString = 'start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`justify-tracks:stretch;`。 */
  readonly stretch: Property.JustifyTracks | CssString = 'stretch';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-tracks:unset;`。
   */
  readonly unset: Property.JustifyTracks | CssString = 'unset';
}

/**
 * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。（justify-tracks）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
 */
export class JustifyTracksCss extends CssProperty {
  /** CSS 声明：`justify-tracks:center;`。 */
  readonly center: string = 'justify-tracks:center;';
  /** CSS 声明：`justify-tracks:end;`。 */
  readonly end: string = 'justify-tracks:end;';
  /** CSS 声明：`justify-tracks:flex-end;`。 */
  readonly flexEnd: string = 'justify-tracks:flex-end;';
  /** CSS 声明：`justify-tracks:flex-start;`。 */
  readonly flexStart: string = 'justify-tracks:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`justify-tracks:inherit;`。
   */
  readonly inherit: string = 'justify-tracks:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`justify-tracks:initial;`。
   */
  readonly initial: string = 'justify-tracks:initial;';
  /** CSS 声明：`justify-tracks:left;`。 */
  readonly left: string = 'justify-tracks:left;';
  /** CSS 声明：`justify-tracks:normal;`。 */
  readonly normal: string = 'justify-tracks:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`justify-tracks:revert;`。
   */
  readonly revert: string = 'justify-tracks:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`justify-tracks:revert-layer;`。
   */
  readonly revertLayer: string = 'justify-tracks:revert-layer;';
  /** CSS 声明：`justify-tracks:right;`。 */
  readonly right: string = 'justify-tracks:right;';
  /** CSS 声明：`justify-tracks:space-around;`。 */
  readonly spaceAround: string = 'justify-tracks:space-around;';
  /** CSS 声明：`justify-tracks:space-between;`。 */
  readonly spaceBetween: string = 'justify-tracks:space-between;';
  /** CSS 声明：`justify-tracks:space-evenly;`。 */
  readonly spaceEvenly: string = 'justify-tracks:space-evenly;';
  /** CSS 声明：`justify-tracks:start;`。 */
  readonly start: string = 'justify-tracks:start;';
  /** CSS 声明：`justify-tracks:stretch;`。 */
  readonly stretch: string = 'justify-tracks:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`justify-tracks:unset;`。
   */
  readonly unset: string = 'justify-tracks:unset;';
  /**
   * 创建 justify-tracks 属性作者；普通使用通过 s.justifyTracks 取得共享实例。
   * @example
   * class CustomJustifyTracksCss extends JustifyTracksCss {}
   */
  constructor() {
    super('justify-tracks');
  }
  /**
   * 原样生成 justify-tracks 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 justify-tracks:value;。
   * @example
   * s.justifyTracks.raw('inherit') // justify-tracks:inherit;
   */
  raw(value: Property.JustifyTracks | CssString): string {
    return this.declaration(value);
  }
}

/**
 * left 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class LeftKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`left:auto;`。 */
  readonly auto: Property.Left | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`left:inherit;`。
   */
  readonly inherit: Property.Left | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`left:initial;`。
   */
  readonly initial: Property.Left | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`left:revert;`。
   */
  readonly revert: Property.Left | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`left:revert-layer;`。
   */
  readonly revertLayer: Property.Left | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`left:unset;`。
   */
  readonly unset: Property.Left | CssString = 'unset';
}

/**
 * 设置定位元素相对于其定位参照的左侧偏移。（left）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
 */
export class LeftCss extends LengthCssProperty {
  /** CSS 声明：`left:auto;`。 */
  readonly auto: string = 'left:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`left:inherit;`。
   */
  readonly inherit: string = 'left:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`left:initial;`。
   */
  readonly initial: string = 'left:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`left:revert;`。
   */
  readonly revert: string = 'left:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`left:revert-layer;`。
   */
  readonly revertLayer: string = 'left:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`left:unset;`。
   */
  readonly unset: string = 'left:unset;';
  /**
   * 创建 left 属性作者；普通使用通过 s.left 取得共享实例。
   * @example
   * class CustomLeftCss extends LeftCss {}
   */
  constructor() {
    super('left');
  }
  /**
   * 原样生成 left 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 left:value;。
   * @example
   * s.left.raw('inherit') // left:inherit;
   */
  raw(value: Property.Left | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.left.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.left.calc('var(--value) * 2')
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
   * s.left.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Left | CssString, ...others: (Property.Left | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.left.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Left | CssString, ...others: (Property.Left | CssString)[]): string {
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
   * s.left.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Left | CssString,
    preferred: Property.Left | CssString,
    maximum: Property.Left | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * letter-spacing 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class LetterSpacingKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`letter-spacing:inherit;`。
   */
  readonly inherit: Property.LetterSpacing | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`letter-spacing:initial;`。
   */
  readonly initial: Property.LetterSpacing | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`letter-spacing:normal;`。 */
  readonly normal: Property.LetterSpacing | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`letter-spacing:revert;`。
   */
  readonly revert: Property.LetterSpacing | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`letter-spacing:revert-layer;`。
   */
  readonly revertLayer: Property.LetterSpacing | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`letter-spacing:unset;`。
   */
  readonly unset: Property.LetterSpacing | CssString = 'unset';
}

/**
 * 设置字符之间额外增加或减少的间距。（letter-spacing）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
 */
export class LetterSpacingCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`letter-spacing:inherit;`。
   */
  readonly inherit: string = 'letter-spacing:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`letter-spacing:initial;`。
   */
  readonly initial: string = 'letter-spacing:initial;';
  /** CSS 声明：`letter-spacing:normal;`。 */
  readonly normal: string = 'letter-spacing:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`letter-spacing:revert;`。
   */
  readonly revert: string = 'letter-spacing:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`letter-spacing:revert-layer;`。
   */
  readonly revertLayer: string = 'letter-spacing:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`letter-spacing:unset;`。
   */
  readonly unset: string = 'letter-spacing:unset;';
  /**
   * 创建 letter-spacing 属性作者；普通使用通过 s.letterSpacing 取得共享实例。
   * @example
   * class CustomLetterSpacingCss extends LetterSpacingCss {}
   */
  constructor() {
    super('letter-spacing');
  }
  /**
   * 原样生成 letter-spacing 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 letter-spacing:value;。
   * @example
   * s.letterSpacing.raw('inherit') // letter-spacing:inherit;
   */
  raw(value: Property.LetterSpacing | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.letterSpacing.calc('var(--value) * 2')
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
   * s.letterSpacing.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.LetterSpacing | CssString,
    ...others: (Property.LetterSpacing | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.letterSpacing.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.LetterSpacing | CssString,
    ...others: (Property.LetterSpacing | CssString)[]
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
   * s.letterSpacing.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.LetterSpacing | CssString,
    preferred: Property.LetterSpacing | CssString,
    maximum: Property.LetterSpacing | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * lighting-color 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class LightingColorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:AccentColor;`。 */
  readonly AccentColor: Property.LightingColor | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:AccentColorText;`。 */
  readonly AccentColorText: Property.LightingColor | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ActiveBorder;`。 */
  readonly ActiveBorder: Property.LightingColor | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ActiveCaption;`。 */
  readonly ActiveCaption: Property.LightingColor | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ActiveText;`。 */
  readonly ActiveText: Property.LightingColor | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:AppWorkspace;`。 */
  readonly AppWorkspace: Property.LightingColor | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Background;`。 */
  readonly Background: Property.LightingColor | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ButtonBorder;`。 */
  readonly ButtonBorder: Property.LightingColor | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ButtonFace;`。 */
  readonly ButtonFace: Property.LightingColor | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.LightingColor | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ButtonShadow;`。 */
  readonly ButtonShadow: Property.LightingColor | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ButtonText;`。 */
  readonly ButtonText: Property.LightingColor | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Canvas;`。 */
  readonly Canvas: Property.LightingColor | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:CanvasText;`。 */
  readonly CanvasText: Property.LightingColor | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:CaptionText;`。 */
  readonly CaptionText: Property.LightingColor | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Field;`。 */
  readonly Field: Property.LightingColor | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:FieldText;`。 */
  readonly FieldText: Property.LightingColor | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:GrayText;`。 */
  readonly GrayText: Property.LightingColor | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Highlight;`。 */
  readonly Highlight: Property.LightingColor | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:HighlightText;`。 */
  readonly HighlightText: Property.LightingColor | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:InactiveBorder;`。 */
  readonly InactiveBorder: Property.LightingColor | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:InactiveCaption;`。 */
  readonly InactiveCaption: Property.LightingColor | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.LightingColor | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:InfoBackground;`。 */
  readonly InfoBackground: Property.LightingColor | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:InfoText;`。 */
  readonly InfoText: Property.LightingColor | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:LinkText;`。 */
  readonly LinkText: Property.LightingColor | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Mark;`。 */
  readonly Mark: Property.LightingColor | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:MarkText;`。 */
  readonly MarkText: Property.LightingColor | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Menu;`。 */
  readonly Menu: Property.LightingColor | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:MenuText;`。 */
  readonly MenuText: Property.LightingColor | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Scrollbar;`。 */
  readonly Scrollbar: Property.LightingColor | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:SelectedItem;`。 */
  readonly SelectedItem: Property.LightingColor | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:SelectedItemText;`。 */
  readonly SelectedItemText: Property.LightingColor | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.LightingColor | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ThreeDFace;`。 */
  readonly ThreeDFace: Property.LightingColor | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.LightingColor | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.LightingColor | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.LightingColor | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:VisitedText;`。 */
  readonly VisitedText: Property.LightingColor | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:Window;`。 */
  readonly Window: Property.LightingColor | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:WindowFrame;`。 */
  readonly WindowFrame: Property.LightingColor | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:WindowText;`。 */
  readonly WindowText: Property.LightingColor | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:aliceblue;`。 */
  readonly aliceblue: Property.LightingColor | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:antiquewhite;`。 */
  readonly antiquewhite: Property.LightingColor | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:aqua;`。 */
  readonly aqua: Property.LightingColor | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:aquamarine;`。 */
  readonly aquamarine: Property.LightingColor | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:azure;`。 */
  readonly azure: Property.LightingColor | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:beige;`。 */
  readonly beige: Property.LightingColor | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:bisque;`。 */
  readonly bisque: Property.LightingColor | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:black;`。 */
  readonly black: Property.LightingColor | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:blanchedalmond;`。 */
  readonly blanchedalmond: Property.LightingColor | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:blue;`。 */
  readonly blue: Property.LightingColor | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:blueviolet;`。 */
  readonly blueviolet: Property.LightingColor | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:brown;`。 */
  readonly brown: Property.LightingColor | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:burlywood;`。 */
  readonly burlywood: Property.LightingColor | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:cadetblue;`。 */
  readonly cadetblue: Property.LightingColor | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:chartreuse;`。 */
  readonly chartreuse: Property.LightingColor | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:chocolate;`。 */
  readonly chocolate: Property.LightingColor | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:coral;`。 */
  readonly coral: Property.LightingColor | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:cornflowerblue;`。 */
  readonly cornflowerblue: Property.LightingColor | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:cornsilk;`。 */
  readonly cornsilk: Property.LightingColor | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:crimson;`。 */
  readonly crimson: Property.LightingColor | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`lighting-color:currentColor;`。
   */
  readonly currentColor: Property.LightingColor | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:cyan;`。 */
  readonly cyan: Property.LightingColor | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkblue;`。 */
  readonly darkblue: Property.LightingColor | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkcyan;`。 */
  readonly darkcyan: Property.LightingColor | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.LightingColor | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkgray;`。 */
  readonly darkgray: Property.LightingColor | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkgreen;`。 */
  readonly darkgreen: Property.LightingColor | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkgrey;`。 */
  readonly darkgrey: Property.LightingColor | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkkhaki;`。 */
  readonly darkkhaki: Property.LightingColor | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkmagenta;`。 */
  readonly darkmagenta: Property.LightingColor | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkolivegreen;`。 */
  readonly darkolivegreen: Property.LightingColor | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkorange;`。 */
  readonly darkorange: Property.LightingColor | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkorchid;`。 */
  readonly darkorchid: Property.LightingColor | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkred;`。 */
  readonly darkred: Property.LightingColor | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darksalmon;`。 */
  readonly darksalmon: Property.LightingColor | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkseagreen;`。 */
  readonly darkseagreen: Property.LightingColor | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkslateblue;`。 */
  readonly darkslateblue: Property.LightingColor | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkslategray;`。 */
  readonly darkslategray: Property.LightingColor | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkslategrey;`。 */
  readonly darkslategrey: Property.LightingColor | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkturquoise;`。 */
  readonly darkturquoise: Property.LightingColor | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:darkviolet;`。 */
  readonly darkviolet: Property.LightingColor | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:deeppink;`。 */
  readonly deeppink: Property.LightingColor | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:deepskyblue;`。 */
  readonly deepskyblue: Property.LightingColor | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:dimgray;`。 */
  readonly dimgray: Property.LightingColor | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:dimgrey;`。 */
  readonly dimgrey: Property.LightingColor | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:dodgerblue;`。 */
  readonly dodgerblue: Property.LightingColor | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:firebrick;`。 */
  readonly firebrick: Property.LightingColor | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:floralwhite;`。 */
  readonly floralwhite: Property.LightingColor | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:forestgreen;`。 */
  readonly forestgreen: Property.LightingColor | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:fuchsia;`。 */
  readonly fuchsia: Property.LightingColor | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:gainsboro;`。 */
  readonly gainsboro: Property.LightingColor | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ghostwhite;`。 */
  readonly ghostwhite: Property.LightingColor | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:gold;`。 */
  readonly gold: Property.LightingColor | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:goldenrod;`。 */
  readonly goldenrod: Property.LightingColor | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:gray;`。 */
  readonly gray: Property.LightingColor | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:green;`。 */
  readonly green: Property.LightingColor | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:greenyellow;`。 */
  readonly greenyellow: Property.LightingColor | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:grey;`。 */
  readonly grey: Property.LightingColor | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:honeydew;`。 */
  readonly honeydew: Property.LightingColor | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:hotpink;`。 */
  readonly hotpink: Property.LightingColor | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:indianred;`。 */
  readonly indianred: Property.LightingColor | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:indigo;`。 */
  readonly indigo: Property.LightingColor | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`lighting-color:inherit;`。
   */
  readonly inherit: Property.LightingColor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`lighting-color:initial;`。
   */
  readonly initial: Property.LightingColor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:ivory;`。 */
  readonly ivory: Property.LightingColor | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:khaki;`。 */
  readonly khaki: Property.LightingColor | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lavender;`。 */
  readonly lavender: Property.LightingColor | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lavenderblush;`。 */
  readonly lavenderblush: Property.LightingColor | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lawngreen;`。 */
  readonly lawngreen: Property.LightingColor | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lemonchiffon;`。 */
  readonly lemonchiffon: Property.LightingColor | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightblue;`。 */
  readonly lightblue: Property.LightingColor | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightcoral;`。 */
  readonly lightcoral: Property.LightingColor | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightcyan;`。 */
  readonly lightcyan: Property.LightingColor | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.LightingColor | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightgray;`。 */
  readonly lightgray: Property.LightingColor | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightgreen;`。 */
  readonly lightgreen: Property.LightingColor | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightgrey;`。 */
  readonly lightgrey: Property.LightingColor | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightpink;`。 */
  readonly lightpink: Property.LightingColor | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightsalmon;`。 */
  readonly lightsalmon: Property.LightingColor | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightseagreen;`。 */
  readonly lightseagreen: Property.LightingColor | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightskyblue;`。 */
  readonly lightskyblue: Property.LightingColor | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightslategray;`。 */
  readonly lightslategray: Property.LightingColor | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightslategrey;`。 */
  readonly lightslategrey: Property.LightingColor | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightsteelblue;`。 */
  readonly lightsteelblue: Property.LightingColor | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lightyellow;`。 */
  readonly lightyellow: Property.LightingColor | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:lime;`。 */
  readonly lime: Property.LightingColor | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:limegreen;`。 */
  readonly limegreen: Property.LightingColor | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:linen;`。 */
  readonly linen: Property.LightingColor | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:magenta;`。 */
  readonly magenta: Property.LightingColor | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:maroon;`。 */
  readonly maroon: Property.LightingColor | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.LightingColor | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumblue;`。 */
  readonly mediumblue: Property.LightingColor | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumorchid;`。 */
  readonly mediumorchid: Property.LightingColor | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumpurple;`。 */
  readonly mediumpurple: Property.LightingColor | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumseagreen;`。 */
  readonly mediumseagreen: Property.LightingColor | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumslateblue;`。 */
  readonly mediumslateblue: Property.LightingColor | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.LightingColor | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumturquoise;`。 */
  readonly mediumturquoise: Property.LightingColor | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mediumvioletred;`。 */
  readonly mediumvioletred: Property.LightingColor | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:midnightblue;`。 */
  readonly midnightblue: Property.LightingColor | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mintcream;`。 */
  readonly mintcream: Property.LightingColor | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:mistyrose;`。 */
  readonly mistyrose: Property.LightingColor | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:moccasin;`。 */
  readonly moccasin: Property.LightingColor | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:navajowhite;`。 */
  readonly navajowhite: Property.LightingColor | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:navy;`。 */
  readonly navy: Property.LightingColor | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:oldlace;`。 */
  readonly oldlace: Property.LightingColor | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:olive;`。 */
  readonly olive: Property.LightingColor | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:olivedrab;`。 */
  readonly olivedrab: Property.LightingColor | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:orange;`。 */
  readonly orange: Property.LightingColor | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:orangered;`。 */
  readonly orangered: Property.LightingColor | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:orchid;`。 */
  readonly orchid: Property.LightingColor | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:palegoldenrod;`。 */
  readonly palegoldenrod: Property.LightingColor | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:palegreen;`。 */
  readonly palegreen: Property.LightingColor | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:paleturquoise;`。 */
  readonly paleturquoise: Property.LightingColor | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:palevioletred;`。 */
  readonly palevioletred: Property.LightingColor | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:papayawhip;`。 */
  readonly papayawhip: Property.LightingColor | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:peachpuff;`。 */
  readonly peachpuff: Property.LightingColor | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:peru;`。 */
  readonly peru: Property.LightingColor | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:pink;`。 */
  readonly pink: Property.LightingColor | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:plum;`。 */
  readonly plum: Property.LightingColor | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:powderblue;`。 */
  readonly powderblue: Property.LightingColor | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:purple;`。 */
  readonly purple: Property.LightingColor | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:rebeccapurple;`。 */
  readonly rebeccapurple: Property.LightingColor | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:red;`。 */
  readonly red: Property.LightingColor | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`lighting-color:revert;`。
   */
  readonly revert: Property.LightingColor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`lighting-color:revert-layer;`。
   */
  readonly revertLayer: Property.LightingColor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:rosybrown;`。 */
  readonly rosybrown: Property.LightingColor | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:royalblue;`。 */
  readonly royalblue: Property.LightingColor | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:saddlebrown;`。 */
  readonly saddlebrown: Property.LightingColor | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:salmon;`。 */
  readonly salmon: Property.LightingColor | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:sandybrown;`。 */
  readonly sandybrown: Property.LightingColor | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:seagreen;`。 */
  readonly seagreen: Property.LightingColor | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:seashell;`。 */
  readonly seashell: Property.LightingColor | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:sienna;`。 */
  readonly sienna: Property.LightingColor | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:silver;`。 */
  readonly silver: Property.LightingColor | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:skyblue;`。 */
  readonly skyblue: Property.LightingColor | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:slateblue;`。 */
  readonly slateblue: Property.LightingColor | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:slategray;`。 */
  readonly slategray: Property.LightingColor | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:slategrey;`。 */
  readonly slategrey: Property.LightingColor | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:snow;`。 */
  readonly snow: Property.LightingColor | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:springgreen;`。 */
  readonly springgreen: Property.LightingColor | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:steelblue;`。 */
  readonly steelblue: Property.LightingColor | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:tan;`。 */
  readonly tan: Property.LightingColor | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:teal;`。 */
  readonly teal: Property.LightingColor | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:thistle;`。 */
  readonly thistle: Property.LightingColor | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:tomato;`。 */
  readonly tomato: Property.LightingColor | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`lighting-color:transparent;`。
   */
  readonly transparent: Property.LightingColor | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:turquoise;`。 */
  readonly turquoise: Property.LightingColor | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`lighting-color:unset;`。
   */
  readonly unset: Property.LightingColor | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:violet;`。 */
  readonly violet: Property.LightingColor | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:wheat;`。 */
  readonly wheat: Property.LightingColor | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:white;`。 */
  readonly white: Property.LightingColor | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:whitesmoke;`。 */
  readonly whitesmoke: Property.LightingColor | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:yellow;`。 */
  readonly yellow: Property.LightingColor | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`lighting-color:yellowgreen;`。 */
  readonly yellowgreen: Property.LightingColor | CssString = 'yellowgreen';
}

/**
 * 设置 SVG 光照滤镜使用的光源颜色。（lighting-color）
 *
 * CSS 初始值：`white`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
 */
export class LightingColorCss extends CssProperty {
  /** CSS 声明：`lighting-color:AccentColor;`。 */
  readonly AccentColor: string = 'lighting-color:AccentColor;';
  /** CSS 声明：`lighting-color:AccentColorText;`。 */
  readonly AccentColorText: string = 'lighting-color:AccentColorText;';
  /** CSS 声明：`lighting-color:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'lighting-color:ActiveBorder;';
  /** CSS 声明：`lighting-color:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'lighting-color:ActiveCaption;';
  /** CSS 声明：`lighting-color:ActiveText;`。 */
  readonly ActiveText: string = 'lighting-color:ActiveText;';
  /** CSS 声明：`lighting-color:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'lighting-color:AppWorkspace;';
  /** CSS 声明：`lighting-color:Background;`。 */
  readonly Background: string = 'lighting-color:Background;';
  /** CSS 声明：`lighting-color:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'lighting-color:ButtonBorder;';
  /** CSS 声明：`lighting-color:ButtonFace;`。 */
  readonly ButtonFace: string = 'lighting-color:ButtonFace;';
  /** CSS 声明：`lighting-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'lighting-color:ButtonHighlight;';
  /** CSS 声明：`lighting-color:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'lighting-color:ButtonShadow;';
  /** CSS 声明：`lighting-color:ButtonText;`。 */
  readonly ButtonText: string = 'lighting-color:ButtonText;';
  /** CSS 声明：`lighting-color:Canvas;`。 */
  readonly Canvas: string = 'lighting-color:Canvas;';
  /** CSS 声明：`lighting-color:CanvasText;`。 */
  readonly CanvasText: string = 'lighting-color:CanvasText;';
  /** CSS 声明：`lighting-color:CaptionText;`。 */
  readonly CaptionText: string = 'lighting-color:CaptionText;';
  /** CSS 声明：`lighting-color:Field;`。 */
  readonly Field: string = 'lighting-color:Field;';
  /** CSS 声明：`lighting-color:FieldText;`。 */
  readonly FieldText: string = 'lighting-color:FieldText;';
  /** CSS 声明：`lighting-color:GrayText;`。 */
  readonly GrayText: string = 'lighting-color:GrayText;';
  /** CSS 声明：`lighting-color:Highlight;`。 */
  readonly Highlight: string = 'lighting-color:Highlight;';
  /** CSS 声明：`lighting-color:HighlightText;`。 */
  readonly HighlightText: string = 'lighting-color:HighlightText;';
  /** CSS 声明：`lighting-color:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'lighting-color:InactiveBorder;';
  /** CSS 声明：`lighting-color:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'lighting-color:InactiveCaption;';
  /** CSS 声明：`lighting-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'lighting-color:InactiveCaptionText;';
  /** CSS 声明：`lighting-color:InfoBackground;`。 */
  readonly InfoBackground: string = 'lighting-color:InfoBackground;';
  /** CSS 声明：`lighting-color:InfoText;`。 */
  readonly InfoText: string = 'lighting-color:InfoText;';
  /** CSS 声明：`lighting-color:LinkText;`。 */
  readonly LinkText: string = 'lighting-color:LinkText;';
  /** CSS 声明：`lighting-color:Mark;`。 */
  readonly Mark: string = 'lighting-color:Mark;';
  /** CSS 声明：`lighting-color:MarkText;`。 */
  readonly MarkText: string = 'lighting-color:MarkText;';
  /** CSS 声明：`lighting-color:Menu;`。 */
  readonly Menu: string = 'lighting-color:Menu;';
  /** CSS 声明：`lighting-color:MenuText;`。 */
  readonly MenuText: string = 'lighting-color:MenuText;';
  /** CSS 声明：`lighting-color:Scrollbar;`。 */
  readonly Scrollbar: string = 'lighting-color:Scrollbar;';
  /** CSS 声明：`lighting-color:SelectedItem;`。 */
  readonly SelectedItem: string = 'lighting-color:SelectedItem;';
  /** CSS 声明：`lighting-color:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'lighting-color:SelectedItemText;';
  /** CSS 声明：`lighting-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'lighting-color:ThreeDDarkShadow;';
  /** CSS 声明：`lighting-color:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'lighting-color:ThreeDFace;';
  /** CSS 声明：`lighting-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'lighting-color:ThreeDHighlight;';
  /** CSS 声明：`lighting-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'lighting-color:ThreeDLightShadow;';
  /** CSS 声明：`lighting-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'lighting-color:ThreeDShadow;';
  /** CSS 声明：`lighting-color:VisitedText;`。 */
  readonly VisitedText: string = 'lighting-color:VisitedText;';
  /** CSS 声明：`lighting-color:Window;`。 */
  readonly Window: string = 'lighting-color:Window;';
  /** CSS 声明：`lighting-color:WindowFrame;`。 */
  readonly WindowFrame: string = 'lighting-color:WindowFrame;';
  /** CSS 声明：`lighting-color:WindowText;`。 */
  readonly WindowText: string = 'lighting-color:WindowText;';
  /** CSS 声明：`lighting-color:aliceblue;`。 */
  readonly aliceblue: string = 'lighting-color:aliceblue;';
  /** CSS 声明：`lighting-color:antiquewhite;`。 */
  readonly antiquewhite: string = 'lighting-color:antiquewhite;';
  /** CSS 声明：`lighting-color:aqua;`。 */
  readonly aqua: string = 'lighting-color:aqua;';
  /** CSS 声明：`lighting-color:aquamarine;`。 */
  readonly aquamarine: string = 'lighting-color:aquamarine;';
  /** CSS 声明：`lighting-color:azure;`。 */
  readonly azure: string = 'lighting-color:azure;';
  /** CSS 声明：`lighting-color:beige;`。 */
  readonly beige: string = 'lighting-color:beige;';
  /** CSS 声明：`lighting-color:bisque;`。 */
  readonly bisque: string = 'lighting-color:bisque;';
  /** CSS 声明：`lighting-color:black;`。 */
  readonly black: string = 'lighting-color:black;';
  /** CSS 声明：`lighting-color:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'lighting-color:blanchedalmond;';
  /** CSS 声明：`lighting-color:blue;`。 */
  readonly blue: string = 'lighting-color:blue;';
  /** CSS 声明：`lighting-color:blueviolet;`。 */
  readonly blueviolet: string = 'lighting-color:blueviolet;';
  /** CSS 声明：`lighting-color:brown;`。 */
  readonly brown: string = 'lighting-color:brown;';
  /** CSS 声明：`lighting-color:burlywood;`。 */
  readonly burlywood: string = 'lighting-color:burlywood;';
  /** CSS 声明：`lighting-color:cadetblue;`。 */
  readonly cadetblue: string = 'lighting-color:cadetblue;';
  /** CSS 声明：`lighting-color:chartreuse;`。 */
  readonly chartreuse: string = 'lighting-color:chartreuse;';
  /** CSS 声明：`lighting-color:chocolate;`。 */
  readonly chocolate: string = 'lighting-color:chocolate;';
  /** CSS 声明：`lighting-color:coral;`。 */
  readonly coral: string = 'lighting-color:coral;';
  /** CSS 声明：`lighting-color:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'lighting-color:cornflowerblue;';
  /** CSS 声明：`lighting-color:cornsilk;`。 */
  readonly cornsilk: string = 'lighting-color:cornsilk;';
  /** CSS 声明：`lighting-color:crimson;`。 */
  readonly crimson: string = 'lighting-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`lighting-color:currentColor;`。
   */
  readonly currentColor: string = 'lighting-color:currentColor;';
  /** CSS 声明：`lighting-color:cyan;`。 */
  readonly cyan: string = 'lighting-color:cyan;';
  /** CSS 声明：`lighting-color:darkblue;`。 */
  readonly darkblue: string = 'lighting-color:darkblue;';
  /** CSS 声明：`lighting-color:darkcyan;`。 */
  readonly darkcyan: string = 'lighting-color:darkcyan;';
  /** CSS 声明：`lighting-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'lighting-color:darkgoldenrod;';
  /** CSS 声明：`lighting-color:darkgray;`。 */
  readonly darkgray: string = 'lighting-color:darkgray;';
  /** CSS 声明：`lighting-color:darkgreen;`。 */
  readonly darkgreen: string = 'lighting-color:darkgreen;';
  /** CSS 声明：`lighting-color:darkgrey;`。 */
  readonly darkgrey: string = 'lighting-color:darkgrey;';
  /** CSS 声明：`lighting-color:darkkhaki;`。 */
  readonly darkkhaki: string = 'lighting-color:darkkhaki;';
  /** CSS 声明：`lighting-color:darkmagenta;`。 */
  readonly darkmagenta: string = 'lighting-color:darkmagenta;';
  /** CSS 声明：`lighting-color:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'lighting-color:darkolivegreen;';
  /** CSS 声明：`lighting-color:darkorange;`。 */
  readonly darkorange: string = 'lighting-color:darkorange;';
  /** CSS 声明：`lighting-color:darkorchid;`。 */
  readonly darkorchid: string = 'lighting-color:darkorchid;';
  /** CSS 声明：`lighting-color:darkred;`。 */
  readonly darkred: string = 'lighting-color:darkred;';
  /** CSS 声明：`lighting-color:darksalmon;`。 */
  readonly darksalmon: string = 'lighting-color:darksalmon;';
  /** CSS 声明：`lighting-color:darkseagreen;`。 */
  readonly darkseagreen: string = 'lighting-color:darkseagreen;';
  /** CSS 声明：`lighting-color:darkslateblue;`。 */
  readonly darkslateblue: string = 'lighting-color:darkslateblue;';
  /** CSS 声明：`lighting-color:darkslategray;`。 */
  readonly darkslategray: string = 'lighting-color:darkslategray;';
  /** CSS 声明：`lighting-color:darkslategrey;`。 */
  readonly darkslategrey: string = 'lighting-color:darkslategrey;';
  /** CSS 声明：`lighting-color:darkturquoise;`。 */
  readonly darkturquoise: string = 'lighting-color:darkturquoise;';
  /** CSS 声明：`lighting-color:darkviolet;`。 */
  readonly darkviolet: string = 'lighting-color:darkviolet;';
  /** CSS 声明：`lighting-color:deeppink;`。 */
  readonly deeppink: string = 'lighting-color:deeppink;';
  /** CSS 声明：`lighting-color:deepskyblue;`。 */
  readonly deepskyblue: string = 'lighting-color:deepskyblue;';
  /** CSS 声明：`lighting-color:dimgray;`。 */
  readonly dimgray: string = 'lighting-color:dimgray;';
  /** CSS 声明：`lighting-color:dimgrey;`。 */
  readonly dimgrey: string = 'lighting-color:dimgrey;';
  /** CSS 声明：`lighting-color:dodgerblue;`。 */
  readonly dodgerblue: string = 'lighting-color:dodgerblue;';
  /** CSS 声明：`lighting-color:firebrick;`。 */
  readonly firebrick: string = 'lighting-color:firebrick;';
  /** CSS 声明：`lighting-color:floralwhite;`。 */
  readonly floralwhite: string = 'lighting-color:floralwhite;';
  /** CSS 声明：`lighting-color:forestgreen;`。 */
  readonly forestgreen: string = 'lighting-color:forestgreen;';
  /** CSS 声明：`lighting-color:fuchsia;`。 */
  readonly fuchsia: string = 'lighting-color:fuchsia;';
  /** CSS 声明：`lighting-color:gainsboro;`。 */
  readonly gainsboro: string = 'lighting-color:gainsboro;';
  /** CSS 声明：`lighting-color:ghostwhite;`。 */
  readonly ghostwhite: string = 'lighting-color:ghostwhite;';
  /** CSS 声明：`lighting-color:gold;`。 */
  readonly gold: string = 'lighting-color:gold;';
  /** CSS 声明：`lighting-color:goldenrod;`。 */
  readonly goldenrod: string = 'lighting-color:goldenrod;';
  /** CSS 声明：`lighting-color:gray;`。 */
  readonly gray: string = 'lighting-color:gray;';
  /** CSS 声明：`lighting-color:green;`。 */
  readonly green: string = 'lighting-color:green;';
  /** CSS 声明：`lighting-color:greenyellow;`。 */
  readonly greenyellow: string = 'lighting-color:greenyellow;';
  /** CSS 声明：`lighting-color:grey;`。 */
  readonly grey: string = 'lighting-color:grey;';
  /** CSS 声明：`lighting-color:honeydew;`。 */
  readonly honeydew: string = 'lighting-color:honeydew;';
  /** CSS 声明：`lighting-color:hotpink;`。 */
  readonly hotpink: string = 'lighting-color:hotpink;';
  /** CSS 声明：`lighting-color:indianred;`。 */
  readonly indianred: string = 'lighting-color:indianred;';
  /** CSS 声明：`lighting-color:indigo;`。 */
  readonly indigo: string = 'lighting-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`lighting-color:inherit;`。
   */
  readonly inherit: string = 'lighting-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`lighting-color:initial;`。
   */
  readonly initial: string = 'lighting-color:initial;';
  /** CSS 声明：`lighting-color:ivory;`。 */
  readonly ivory: string = 'lighting-color:ivory;';
  /** CSS 声明：`lighting-color:khaki;`。 */
  readonly khaki: string = 'lighting-color:khaki;';
  /** CSS 声明：`lighting-color:lavender;`。 */
  readonly lavender: string = 'lighting-color:lavender;';
  /** CSS 声明：`lighting-color:lavenderblush;`。 */
  readonly lavenderblush: string = 'lighting-color:lavenderblush;';
  /** CSS 声明：`lighting-color:lawngreen;`。 */
  readonly lawngreen: string = 'lighting-color:lawngreen;';
  /** CSS 声明：`lighting-color:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'lighting-color:lemonchiffon;';
  /** CSS 声明：`lighting-color:lightblue;`。 */
  readonly lightblue: string = 'lighting-color:lightblue;';
  /** CSS 声明：`lighting-color:lightcoral;`。 */
  readonly lightcoral: string = 'lighting-color:lightcoral;';
  /** CSS 声明：`lighting-color:lightcyan;`。 */
  readonly lightcyan: string = 'lighting-color:lightcyan;';
  /** CSS 声明：`lighting-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'lighting-color:lightgoldenrodyellow;';
  /** CSS 声明：`lighting-color:lightgray;`。 */
  readonly lightgray: string = 'lighting-color:lightgray;';
  /** CSS 声明：`lighting-color:lightgreen;`。 */
  readonly lightgreen: string = 'lighting-color:lightgreen;';
  /** CSS 声明：`lighting-color:lightgrey;`。 */
  readonly lightgrey: string = 'lighting-color:lightgrey;';
  /** CSS 声明：`lighting-color:lightpink;`。 */
  readonly lightpink: string = 'lighting-color:lightpink;';
  /** CSS 声明：`lighting-color:lightsalmon;`。 */
  readonly lightsalmon: string = 'lighting-color:lightsalmon;';
  /** CSS 声明：`lighting-color:lightseagreen;`。 */
  readonly lightseagreen: string = 'lighting-color:lightseagreen;';
  /** CSS 声明：`lighting-color:lightskyblue;`。 */
  readonly lightskyblue: string = 'lighting-color:lightskyblue;';
  /** CSS 声明：`lighting-color:lightslategray;`。 */
  readonly lightslategray: string = 'lighting-color:lightslategray;';
  /** CSS 声明：`lighting-color:lightslategrey;`。 */
  readonly lightslategrey: string = 'lighting-color:lightslategrey;';
  /** CSS 声明：`lighting-color:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'lighting-color:lightsteelblue;';
  /** CSS 声明：`lighting-color:lightyellow;`。 */
  readonly lightyellow: string = 'lighting-color:lightyellow;';
  /** CSS 声明：`lighting-color:lime;`。 */
  readonly lime: string = 'lighting-color:lime;';
  /** CSS 声明：`lighting-color:limegreen;`。 */
  readonly limegreen: string = 'lighting-color:limegreen;';
  /** CSS 声明：`lighting-color:linen;`。 */
  readonly linen: string = 'lighting-color:linen;';
  /** CSS 声明：`lighting-color:magenta;`。 */
  readonly magenta: string = 'lighting-color:magenta;';
  /** CSS 声明：`lighting-color:maroon;`。 */
  readonly maroon: string = 'lighting-color:maroon;';
  /** CSS 声明：`lighting-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'lighting-color:mediumaquamarine;';
  /** CSS 声明：`lighting-color:mediumblue;`。 */
  readonly mediumblue: string = 'lighting-color:mediumblue;';
  /** CSS 声明：`lighting-color:mediumorchid;`。 */
  readonly mediumorchid: string = 'lighting-color:mediumorchid;';
  /** CSS 声明：`lighting-color:mediumpurple;`。 */
  readonly mediumpurple: string = 'lighting-color:mediumpurple;';
  /** CSS 声明：`lighting-color:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'lighting-color:mediumseagreen;';
  /** CSS 声明：`lighting-color:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'lighting-color:mediumslateblue;';
  /** CSS 声明：`lighting-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'lighting-color:mediumspringgreen;';
  /** CSS 声明：`lighting-color:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'lighting-color:mediumturquoise;';
  /** CSS 声明：`lighting-color:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'lighting-color:mediumvioletred;';
  /** CSS 声明：`lighting-color:midnightblue;`。 */
  readonly midnightblue: string = 'lighting-color:midnightblue;';
  /** CSS 声明：`lighting-color:mintcream;`。 */
  readonly mintcream: string = 'lighting-color:mintcream;';
  /** CSS 声明：`lighting-color:mistyrose;`。 */
  readonly mistyrose: string = 'lighting-color:mistyrose;';
  /** CSS 声明：`lighting-color:moccasin;`。 */
  readonly moccasin: string = 'lighting-color:moccasin;';
  /** CSS 声明：`lighting-color:navajowhite;`。 */
  readonly navajowhite: string = 'lighting-color:navajowhite;';
  /** CSS 声明：`lighting-color:navy;`。 */
  readonly navy: string = 'lighting-color:navy;';
  /** CSS 声明：`lighting-color:oldlace;`。 */
  readonly oldlace: string = 'lighting-color:oldlace;';
  /** CSS 声明：`lighting-color:olive;`。 */
  readonly olive: string = 'lighting-color:olive;';
  /** CSS 声明：`lighting-color:olivedrab;`。 */
  readonly olivedrab: string = 'lighting-color:olivedrab;';
  /** CSS 声明：`lighting-color:orange;`。 */
  readonly orange: string = 'lighting-color:orange;';
  /** CSS 声明：`lighting-color:orangered;`。 */
  readonly orangered: string = 'lighting-color:orangered;';
  /** CSS 声明：`lighting-color:orchid;`。 */
  readonly orchid: string = 'lighting-color:orchid;';
  /** CSS 声明：`lighting-color:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'lighting-color:palegoldenrod;';
  /** CSS 声明：`lighting-color:palegreen;`。 */
  readonly palegreen: string = 'lighting-color:palegreen;';
  /** CSS 声明：`lighting-color:paleturquoise;`。 */
  readonly paleturquoise: string = 'lighting-color:paleturquoise;';
  /** CSS 声明：`lighting-color:palevioletred;`。 */
  readonly palevioletred: string = 'lighting-color:palevioletred;';
  /** CSS 声明：`lighting-color:papayawhip;`。 */
  readonly papayawhip: string = 'lighting-color:papayawhip;';
  /** CSS 声明：`lighting-color:peachpuff;`。 */
  readonly peachpuff: string = 'lighting-color:peachpuff;';
  /** CSS 声明：`lighting-color:peru;`。 */
  readonly peru: string = 'lighting-color:peru;';
  /** CSS 声明：`lighting-color:pink;`。 */
  readonly pink: string = 'lighting-color:pink;';
  /** CSS 声明：`lighting-color:plum;`。 */
  readonly plum: string = 'lighting-color:plum;';
  /** CSS 声明：`lighting-color:powderblue;`。 */
  readonly powderblue: string = 'lighting-color:powderblue;';
  /** CSS 声明：`lighting-color:purple;`。 */
  readonly purple: string = 'lighting-color:purple;';
  /** CSS 声明：`lighting-color:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'lighting-color:rebeccapurple;';
  /** CSS 声明：`lighting-color:red;`。 */
  readonly red: string = 'lighting-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`lighting-color:revert;`。
   */
  readonly revert: string = 'lighting-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`lighting-color:revert-layer;`。
   */
  readonly revertLayer: string = 'lighting-color:revert-layer;';
  /** CSS 声明：`lighting-color:rosybrown;`。 */
  readonly rosybrown: string = 'lighting-color:rosybrown;';
  /** CSS 声明：`lighting-color:royalblue;`。 */
  readonly royalblue: string = 'lighting-color:royalblue;';
  /** CSS 声明：`lighting-color:saddlebrown;`。 */
  readonly saddlebrown: string = 'lighting-color:saddlebrown;';
  /** CSS 声明：`lighting-color:salmon;`。 */
  readonly salmon: string = 'lighting-color:salmon;';
  /** CSS 声明：`lighting-color:sandybrown;`。 */
  readonly sandybrown: string = 'lighting-color:sandybrown;';
  /** CSS 声明：`lighting-color:seagreen;`。 */
  readonly seagreen: string = 'lighting-color:seagreen;';
  /** CSS 声明：`lighting-color:seashell;`。 */
  readonly seashell: string = 'lighting-color:seashell;';
  /** CSS 声明：`lighting-color:sienna;`。 */
  readonly sienna: string = 'lighting-color:sienna;';
  /** CSS 声明：`lighting-color:silver;`。 */
  readonly silver: string = 'lighting-color:silver;';
  /** CSS 声明：`lighting-color:skyblue;`。 */
  readonly skyblue: string = 'lighting-color:skyblue;';
  /** CSS 声明：`lighting-color:slateblue;`。 */
  readonly slateblue: string = 'lighting-color:slateblue;';
  /** CSS 声明：`lighting-color:slategray;`。 */
  readonly slategray: string = 'lighting-color:slategray;';
  /** CSS 声明：`lighting-color:slategrey;`。 */
  readonly slategrey: string = 'lighting-color:slategrey;';
  /** CSS 声明：`lighting-color:snow;`。 */
  readonly snow: string = 'lighting-color:snow;';
  /** CSS 声明：`lighting-color:springgreen;`。 */
  readonly springgreen: string = 'lighting-color:springgreen;';
  /** CSS 声明：`lighting-color:steelblue;`。 */
  readonly steelblue: string = 'lighting-color:steelblue;';
  /** CSS 声明：`lighting-color:tan;`。 */
  readonly tan: string = 'lighting-color:tan;';
  /** CSS 声明：`lighting-color:teal;`。 */
  readonly teal: string = 'lighting-color:teal;';
  /** CSS 声明：`lighting-color:thistle;`。 */
  readonly thistle: string = 'lighting-color:thistle;';
  /** CSS 声明：`lighting-color:tomato;`。 */
  readonly tomato: string = 'lighting-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`lighting-color:transparent;`。
   */
  readonly transparent: string = 'lighting-color:transparent;';
  /** CSS 声明：`lighting-color:turquoise;`。 */
  readonly turquoise: string = 'lighting-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`lighting-color:unset;`。
   */
  readonly unset: string = 'lighting-color:unset;';
  /** CSS 声明：`lighting-color:violet;`。 */
  readonly violet: string = 'lighting-color:violet;';
  /** CSS 声明：`lighting-color:wheat;`。 */
  readonly wheat: string = 'lighting-color:wheat;';
  /** CSS 声明：`lighting-color:white;`。 */
  readonly white: string = 'lighting-color:white;';
  /** CSS 声明：`lighting-color:whitesmoke;`。 */
  readonly whitesmoke: string = 'lighting-color:whitesmoke;';
  /** CSS 声明：`lighting-color:yellow;`。 */
  readonly yellow: string = 'lighting-color:yellow;';
  /** CSS 声明：`lighting-color:yellowgreen;`。 */
  readonly yellowgreen: string = 'lighting-color:yellowgreen;';
  /**
   * 创建 lighting-color 属性作者；普通使用通过 s.lightingColor 取得共享实例。
   * @example
   * class CustomLightingColorCss extends LightingColorCss {}
   */
  constructor() {
    super('lighting-color');
  }
  /**
   * 原样生成 lighting-color 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 lighting-color:value;。
   * @example
   * s.lightingColor.raw('inherit') // lighting-color:inherit;
   */
  raw(value: Property.LightingColor | CssString): string {
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
   * s.lightingColor.rgb(255, 0, 0, 0.5)
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
   * s.lightingColor.hsl(210, 50, 40, 0.8)
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
   * s.lightingColor.oklch(0.7, 0.15, 250)
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
   * s.lightingColor.oklab(0.7, 0.1, -0.1)
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
 * line-break 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class LineBreakKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`line-break:anywhere;`。 */
  readonly anywhere: Property.LineBreak | CssString = 'anywhere';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`line-break:auto;`。 */
  readonly auto: Property.LineBreak | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-break:inherit;`。
   */
  readonly inherit: Property.LineBreak | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-break:initial;`。
   */
  readonly initial: Property.LineBreak | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`line-break:loose;`。 */
  readonly loose: Property.LineBreak | CssString = 'loose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`line-break:normal;`。 */
  readonly normal: Property.LineBreak | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-break:revert;`。
   */
  readonly revert: Property.LineBreak | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-break:revert-layer;`。
   */
  readonly revertLayer: Property.LineBreak | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`line-break:strict;`。 */
  readonly strict: Property.LineBreak | CssString = 'strict';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-break:unset;`。
   */
  readonly unset: Property.LineBreak | CssString = 'unset';
}

/**
 * 设置东亚文字标点等字符的换行严格程度。（line-break）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
 */
export class LineBreakCss extends CssProperty {
  /** CSS 声明：`line-break:anywhere;`。 */
  readonly anywhere: string = 'line-break:anywhere;';
  /** CSS 声明：`line-break:auto;`。 */
  readonly auto: string = 'line-break:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-break:inherit;`。
   */
  readonly inherit: string = 'line-break:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-break:initial;`。
   */
  readonly initial: string = 'line-break:initial;';
  /** CSS 声明：`line-break:loose;`。 */
  readonly loose: string = 'line-break:loose;';
  /** CSS 声明：`line-break:normal;`。 */
  readonly normal: string = 'line-break:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-break:revert;`。
   */
  readonly revert: string = 'line-break:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-break:revert-layer;`。
   */
  readonly revertLayer: string = 'line-break:revert-layer;';
  /** CSS 声明：`line-break:strict;`。 */
  readonly strict: string = 'line-break:strict;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-break:unset;`。
   */
  readonly unset: string = 'line-break:unset;';
  /**
   * 创建 line-break 属性作者；普通使用通过 s.lineBreak 取得共享实例。
   * @example
   * class CustomLineBreakCss extends LineBreakCss {}
   */
  constructor() {
    super('line-break');
  }
  /**
   * 原样生成 line-break 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 line-break:value;。
   * @example
   * s.lineBreak.raw('inherit') // line-break:inherit;
   */
  raw(value: Property.LineBreak | CssString): string {
    return this.declaration(value);
  }
}

/**
 * line-clamp 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class LineClampKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-clamp:inherit;`。
   */
  readonly inherit: Property.LineClamp | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-clamp:initial;`。
   */
  readonly initial: Property.LineClamp | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`line-clamp:none;`。 */
  readonly none: Property.LineClamp | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-clamp:revert;`。
   */
  readonly revert: Property.LineClamp | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-clamp:revert-layer;`。
   */
  readonly revertLayer: Property.LineClamp | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-clamp:unset;`。
   */
  readonly unset: Property.LineClamp | CssString = 'unset';
}

/**
 * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。（line-clamp）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
 */
export class LineClampCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-clamp:inherit;`。
   */
  readonly inherit: string = 'line-clamp:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-clamp:initial;`。
   */
  readonly initial: string = 'line-clamp:initial;';
  /** CSS 声明：`line-clamp:none;`。 */
  readonly none: string = 'line-clamp:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-clamp:revert;`。
   */
  readonly revert: string = 'line-clamp:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-clamp:revert-layer;`。
   */
  readonly revertLayer: string = 'line-clamp:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-clamp:unset;`。
   */
  readonly unset: string = 'line-clamp:unset;';
  /**
   * 创建 line-clamp 属性作者；普通使用通过 s.lineClamp 取得共享实例。
   * @example
   * class CustomLineClampCss extends LineClampCss {}
   */
  constructor() {
    super('line-clamp');
  }
  /**
   * 原样生成 line-clamp 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 line-clamp:value;。
   * @example
   * s.lineClamp.raw('inherit') // line-clamp:inherit;
   */
  raw(value: Property.LineClamp | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.lineClamp.calc('var(--value) * 2')
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
   * s.lineClamp.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.LineClamp | CssString,
    ...others: (Property.LineClamp | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.lineClamp.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.LineClamp | CssString,
    ...others: (Property.LineClamp | CssString)[]
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
   * s.lineClamp.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.LineClamp | CssString,
    preferred: Property.LineClamp | CssString,
    maximum: Property.LineClamp | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * line-height 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class LineHeightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-height:inherit;`。
   */
  readonly inherit: Property.LineHeight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-height:initial;`。
   */
  readonly initial: Property.LineHeight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 由浏览器和字体度量确定行高，没有固定的跨字体倍数。
   *
   * CSS 声明：`line-height:normal;`。
   */
  readonly normal: Property.LineHeight | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-height:revert;`。
   */
  readonly revert: Property.LineHeight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-height:revert-layer;`。
   */
  readonly revertLayer: Property.LineHeight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-height:unset;`。
   */
  readonly unset: Property.LineHeight | CssString = 'unset';
}

/**
 * 设置行盒高度；无单位数值按元素自身字号计算。（line-height）
 *
 * 无单位数字作为倍数继承；长度值按长度继承。单独设置行高不会自动实现多行文本垂直居中。
 *
 * 适用场景：控制正文行间节奏；可继承的字号倍数通常比固定长度更适合嵌套文字。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @example
 * s.lineHeight.raw(1.5) // line-height:1.5;
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
 */
export class LineHeightCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-height:inherit;`。
   */
  readonly inherit: string = 'line-height:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-height:initial;`。
   */
  readonly initial: string = 'line-height:initial;';
  /**
   * 由浏览器和字体度量确定行高，没有固定的跨字体倍数。
   *
   * CSS 声明：`line-height:normal;`。
   */
  readonly normal: string = 'line-height:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-height:revert;`。
   */
  readonly revert: string = 'line-height:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-height:revert-layer;`。
   */
  readonly revertLayer: string = 'line-height:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-height:unset;`。
   */
  readonly unset: string = 'line-height:unset;';
  /**
   * 创建 line-height 属性作者；普通使用通过 s.lineHeight 取得共享实例。
   * @example
   * class CustomLineHeightCss extends LineHeightCss {}
   */
  constructor() {
    super('line-height');
  }
  /**
   * 原样生成 line-height 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 line-height:value;。
   * @example
   * s.lineHeight.raw('inherit') // line-height:inherit;
   */
  raw(value: Property.LineHeight | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.lineHeight.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.lineHeight.calc('var(--value) * 2')
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
   * s.lineHeight.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.LineHeight | CssString,
    ...others: (Property.LineHeight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.lineHeight.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.LineHeight | CssString,
    ...others: (Property.LineHeight | CssString)[]
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
   * s.lineHeight.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.LineHeight | CssString,
    preferred: Property.LineHeight | CssString,
    maximum: Property.LineHeight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * line-height-step 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class LineHeightStepKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-height-step:inherit;`。
   */
  readonly inherit: Property.LineHeightStep | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-height-step:initial;`。
   */
  readonly initial: Property.LineHeightStep | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-height-step:revert;`。
   */
  readonly revert: Property.LineHeightStep | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-height-step:revert-layer;`。
   */
  readonly revertLayer: Property.LineHeightStep | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-height-step:unset;`。
   */
  readonly unset: Property.LineHeightStep | CssString = 'unset';
}

/**
 * 设置行盒高度向上取整使用的步长。（line-height-step）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
 */
export class LineHeightStepCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`line-height-step:inherit;`。
   */
  readonly inherit: string = 'line-height-step:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`line-height-step:initial;`。
   */
  readonly initial: string = 'line-height-step:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`line-height-step:revert;`。
   */
  readonly revert: string = 'line-height-step:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`line-height-step:revert-layer;`。
   */
  readonly revertLayer: string = 'line-height-step:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`line-height-step:unset;`。
   */
  readonly unset: string = 'line-height-step:unset;';
  /**
   * 创建 line-height-step 属性作者；普通使用通过 s.lineHeightStep 取得共享实例。
   * @example
   * class CustomLineHeightStepCss extends LineHeightStepCss {}
   */
  constructor() {
    super('line-height-step');
  }
  /**
   * 原样生成 line-height-step 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 line-height-step:value;。
   * @example
   * s.lineHeightStep.raw('inherit') // line-height-step:inherit;
   */
  raw(value: Property.LineHeightStep | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.lineHeightStep.calc('var(--value) * 2')
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
   * s.lineHeightStep.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.LineHeightStep | CssString,
    ...others: (Property.LineHeightStep | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.lineHeightStep.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.LineHeightStep | CssString,
    ...others: (Property.LineHeightStep | CssString)[]
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
   * s.lineHeightStep.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.LineHeightStep | CssString,
    preferred: Property.LineHeightStep | CssString,
    maximum: Property.LineHeightStep | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * list-style 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ListStyleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style:inherit;`。
   */
  readonly inherit: Property.ListStyle | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style:initial;`。
   */
  readonly initial: Property.ListStyle | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`list-style:inside;`。 */
  readonly inside: Property.ListStyle | CssString = 'inside';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`list-style:none;`。 */
  readonly none: Property.ListStyle | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`list-style:outside;`。 */
  readonly outside: Property.ListStyle | CssString = 'outside';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style:revert;`。
   */
  readonly revert: Property.ListStyle | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style:revert-layer;`。
   */
  readonly revertLayer: Property.ListStyle | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style:unset;`。
   */
  readonly unset: Property.ListStyle | CssString = 'unset';
}

/**
 * 集中设置列表标记的类型、图像和位置。（list-style）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
 */
export class ListStyleCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style:inherit;`。
   */
  readonly inherit: string = 'list-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style:initial;`。
   */
  readonly initial: string = 'list-style:initial;';
  /** CSS 声明：`list-style:inside;`。 */
  readonly inside: string = 'list-style:inside;';
  /** CSS 声明：`list-style:none;`。 */
  readonly none: string = 'list-style:none;';
  /** CSS 声明：`list-style:outside;`。 */
  readonly outside: string = 'list-style:outside;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style:revert;`。
   */
  readonly revert: string = 'list-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style:revert-layer;`。
   */
  readonly revertLayer: string = 'list-style:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style:unset;`。
   */
  readonly unset: string = 'list-style:unset;';
  /**
   * 创建 list-style 属性作者；普通使用通过 s.listStyle 取得共享实例。
   * @example
   * class CustomListStyleCss extends ListStyleCss {}
   */
  constructor() {
    super('list-style');
  }
  /**
   * 原样生成 list-style 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 list-style:value;。
   * @example
   * s.listStyle.raw('inherit') // list-style:inherit;
   */
  raw(value: Property.ListStyle | CssString): string {
    return this.declaration(value);
  }
}

/**
 * list-style-image 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ListStyleImageKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style-image:inherit;`。
   */
  readonly inherit: Property.ListStyleImage | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style-image:initial;`。
   */
  readonly initial: Property.ListStyleImage | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`list-style-image:none;`。 */
  readonly none: Property.ListStyleImage | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style-image:revert;`。
   */
  readonly revert: Property.ListStyleImage | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style-image:revert-layer;`。
   */
  readonly revertLayer: Property.ListStyleImage | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style-image:unset;`。
   */
  readonly unset: Property.ListStyleImage | CssString = 'unset';
}

/**
 * 设置用作列表标记的图像。（list-style-image）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
 */
export class ListStyleImageCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style-image:inherit;`。
   */
  readonly inherit: string = 'list-style-image:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style-image:initial;`。
   */
  readonly initial: string = 'list-style-image:initial;';
  /** CSS 声明：`list-style-image:none;`。 */
  readonly none: string = 'list-style-image:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style-image:revert;`。
   */
  readonly revert: string = 'list-style-image:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style-image:revert-layer;`。
   */
  readonly revertLayer: string = 'list-style-image:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style-image:unset;`。
   */
  readonly unset: string = 'list-style-image:unset;';
  /**
   * 创建 list-style-image 属性作者；普通使用通过 s.listStyleImage 取得共享实例。
   * @example
   * class CustomListStyleImageCss extends ListStyleImageCss {}
   */
  constructor() {
    super('list-style-image');
  }
  /**
   * 原样生成 list-style-image 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 list-style-image:value;。
   * @example
   * s.listStyleImage.raw('inherit') // list-style-image:inherit;
   */
  raw(value: Property.ListStyleImage | CssString): string {
    return this.declaration(value);
  }
}

/**
 * list-style-position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ListStylePositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style-position:inherit;`。
   */
  readonly inherit: Property.ListStylePosition | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style-position:initial;`。
   */
  readonly initial: Property.ListStylePosition | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`list-style-position:inside;`。 */
  readonly inside: Property.ListStylePosition | CssString = 'inside';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`list-style-position:outside;`。 */
  readonly outside: Property.ListStylePosition | CssString = 'outside';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style-position:revert;`。
   */
  readonly revert: Property.ListStylePosition | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style-position:revert-layer;`。
   */
  readonly revertLayer: Property.ListStylePosition | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style-position:unset;`。
   */
  readonly unset: Property.ListStylePosition | CssString = 'unset';
}

/**
 * 设置列表标记位于主块盒内部还是外部。（list-style-position）
 *
 * CSS 初始值：`outside`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
 */
export class ListStylePositionCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style-position:inherit;`。
   */
  readonly inherit: string = 'list-style-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style-position:initial;`。
   */
  readonly initial: string = 'list-style-position:initial;';
  /** CSS 声明：`list-style-position:inside;`。 */
  readonly inside: string = 'list-style-position:inside;';
  /** CSS 声明：`list-style-position:outside;`。 */
  readonly outside: string = 'list-style-position:outside;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style-position:revert;`。
   */
  readonly revert: string = 'list-style-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style-position:revert-layer;`。
   */
  readonly revertLayer: string = 'list-style-position:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style-position:unset;`。
   */
  readonly unset: string = 'list-style-position:unset;';
  /**
   * 创建 list-style-position 属性作者；普通使用通过 s.listStylePosition 取得共享实例。
   * @example
   * class CustomListStylePositionCss extends ListStylePositionCss {}
   */
  constructor() {
    super('list-style-position');
  }
  /**
   * 原样生成 list-style-position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 list-style-position:value;。
   * @example
   * s.listStylePosition.raw('inherit') // list-style-position:inherit;
   */
  raw(value: Property.ListStylePosition | CssString): string {
    return this.declaration(value);
  }
}

/**
 * list-style-type 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ListStyleTypeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style-type:inherit;`。
   */
  readonly inherit: Property.ListStyleType | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style-type:initial;`。
   */
  readonly initial: Property.ListStyleType | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`list-style-type:none;`。 */
  readonly none: Property.ListStyleType | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style-type:revert;`。
   */
  readonly revert: Property.ListStyleType | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style-type:revert-layer;`。
   */
  readonly revertLayer: Property.ListStyleType | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style-type:unset;`。
   */
  readonly unset: Property.ListStyleType | CssString = 'unset';
}

/**
 * 设置列表标记或计数器的样式。（list-style-type）
 *
 * CSS 初始值：`disc`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
 */
export class ListStyleTypeCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`list-style-type:inherit;`。
   */
  readonly inherit: string = 'list-style-type:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`list-style-type:initial;`。
   */
  readonly initial: string = 'list-style-type:initial;';
  /** CSS 声明：`list-style-type:none;`。 */
  readonly none: string = 'list-style-type:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`list-style-type:revert;`。
   */
  readonly revert: string = 'list-style-type:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`list-style-type:revert-layer;`。
   */
  readonly revertLayer: string = 'list-style-type:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`list-style-type:unset;`。
   */
  readonly unset: string = 'list-style-type:unset;';
  /**
   * 创建 list-style-type 属性作者；普通使用通过 s.listStyleType 取得共享实例。
   * @example
   * class CustomListStyleTypeCss extends ListStyleTypeCss {}
   */
  constructor() {
    super('list-style-type');
  }
  /**
   * 原样生成 list-style-type 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 list-style-type:value;。
   * @example
   * s.listStyleType.raw('inherit') // list-style-type:inherit;
   */
  raw(value: Property.ListStyleType | CssString): string {
    return this.declaration(value);
  }
}
