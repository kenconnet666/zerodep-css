// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** CSS 属性 unicode-bidi；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
 */
export class UnicodeBidiCss extends CssProperty {
  readonly bidiOverride = 'unicode-bidi:bidi-override;';
  readonly embed = 'unicode-bidi:embed;';
  readonly inherit = 'unicode-bidi:inherit;';
  readonly initial = 'unicode-bidi:initial;';
  readonly isolate = 'unicode-bidi:isolate;';
  readonly isolateOverride = 'unicode-bidi:isolate-override;';
  readonly normal = 'unicode-bidi:normal;';
  readonly plaintext = 'unicode-bidi:plaintext;';
  readonly revert = 'unicode-bidi:revert;';
  readonly revertLayer = 'unicode-bidi:revert-layer;';
  readonly unset = 'unicode-bidi:unset;';
  constructor() {
    super('unicode-bidi');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.UnicodeBidi | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 user-select；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
 */
export class UserSelectCss extends CssProperty {
  readonly all = 'user-select:all;';
  readonly auto = 'user-select:auto;';
  readonly inherit = 'user-select:inherit;';
  readonly initial = 'user-select:initial;';
  readonly none = 'user-select:none;';
  readonly revert = 'user-select:revert;';
  readonly revertLayer = 'user-select:revert-layer;';
  readonly text = 'user-select:text;';
  readonly unset = 'user-select:unset;';
  constructor() {
    super('user-select');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.UserSelect | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 vector-effect；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
 */
export class VectorEffectCss extends CssProperty {
  readonly fixedPosition = 'vector-effect:fixed-position;';
  readonly inherit = 'vector-effect:inherit;';
  readonly initial = 'vector-effect:initial;';
  readonly nonRotation = 'vector-effect:non-rotation;';
  readonly nonScalingSize = 'vector-effect:non-scaling-size;';
  readonly nonScalingStroke = 'vector-effect:non-scaling-stroke;';
  readonly none = 'vector-effect:none;';
  readonly revert = 'vector-effect:revert;';
  readonly revertLayer = 'vector-effect:revert-layer;';
  readonly unset = 'vector-effect:unset;';
  constructor() {
    super('vector-effect');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.VectorEffect | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 vertical-align；初始值 baseline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
 */
export class VerticalAlignCss extends LengthCssProperty {
  readonly baseline = 'vertical-align:baseline;';
  readonly bottom = 'vertical-align:bottom;';
  readonly inherit = 'vertical-align:inherit;';
  readonly initial = 'vertical-align:initial;';
  readonly middle = 'vertical-align:middle;';
  readonly revert = 'vertical-align:revert;';
  readonly revertLayer = 'vertical-align:revert-layer;';
  readonly sub = 'vertical-align:sub;';
  readonly super = 'vertical-align:super;';
  readonly textBottom = 'vertical-align:text-bottom;';
  readonly textTop = 'vertical-align:text-top;';
  readonly top = 'vertical-align:top;';
  readonly unset = 'vertical-align:unset;';
  constructor() {
    super('vertical-align');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.VerticalAlign | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.VerticalAlign | CssString,
    ...others: (Property.VerticalAlign | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.VerticalAlign | CssString,
    ...others: (Property.VerticalAlign | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.VerticalAlign | CssString,
    preferred: Property.VerticalAlign | CssString,
    maximum: Property.VerticalAlign | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 view-timeline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
 */
export class ViewTimelineCss extends CssProperty {
  readonly inherit = 'view-timeline:inherit;';
  readonly initial = 'view-timeline:initial;';
  readonly none = 'view-timeline:none;';
  readonly revert = 'view-timeline:revert;';
  readonly revertLayer = 'view-timeline:revert-layer;';
  readonly unset = 'view-timeline:unset;';
  constructor() {
    super('view-timeline');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ViewTimeline | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 view-timeline-axis；初始值 block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
 */
export class ViewTimelineAxisCss extends CssProperty {
  readonly block = 'view-timeline-axis:block;';
  readonly inherit = 'view-timeline-axis:inherit;';
  readonly initial = 'view-timeline-axis:initial;';
  readonly inline = 'view-timeline-axis:inline;';
  readonly revert = 'view-timeline-axis:revert;';
  readonly revertLayer = 'view-timeline-axis:revert-layer;';
  readonly unset = 'view-timeline-axis:unset;';
  readonly x = 'view-timeline-axis:x;';
  readonly y = 'view-timeline-axis:y;';
  constructor() {
    super('view-timeline-axis');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ViewTimelineAxis | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 view-timeline-inset；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
 */
export class ViewTimelineInsetCss extends LengthCssProperty {
  readonly auto = 'view-timeline-inset:auto;';
  readonly inherit = 'view-timeline-inset:inherit;';
  readonly initial = 'view-timeline-inset:initial;';
  readonly revert = 'view-timeline-inset:revert;';
  readonly revertLayer = 'view-timeline-inset:revert-layer;';
  readonly unset = 'view-timeline-inset:unset;';
  constructor() {
    super('view-timeline-inset');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ViewTimelineInset | CssString): string {
    return this.declaration(value);
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.ViewTimelineInset | CssString,
    ...others: (Property.ViewTimelineInset | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.ViewTimelineInset | CssString,
    ...others: (Property.ViewTimelineInset | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.ViewTimelineInset | CssString,
    preferred: Property.ViewTimelineInset | CssString,
    maximum: Property.ViewTimelineInset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 view-timeline-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
 */
export class ViewTimelineNameCss extends CssProperty {
  readonly inherit = 'view-timeline-name:inherit;';
  readonly initial = 'view-timeline-name:initial;';
  readonly none = 'view-timeline-name:none;';
  readonly revert = 'view-timeline-name:revert;';
  readonly revertLayer = 'view-timeline-name:revert-layer;';
  readonly unset = 'view-timeline-name:unset;';
  constructor() {
    super('view-timeline-name');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ViewTimelineName | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 view-transition-class；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
 */
export class ViewTransitionClassCss extends CssProperty {
  readonly inherit = 'view-transition-class:inherit;';
  readonly initial = 'view-transition-class:initial;';
  readonly none = 'view-transition-class:none;';
  readonly revert = 'view-transition-class:revert;';
  readonly revertLayer = 'view-transition-class:revert-layer;';
  readonly unset = 'view-transition-class:unset;';
  constructor() {
    super('view-transition-class');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ViewTransitionClass | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 view-transition-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
 */
export class ViewTransitionNameCss extends CssProperty {
  readonly inherit = 'view-transition-name:inherit;';
  readonly initial = 'view-transition-name:initial;';
  readonly matchElement = 'view-transition-name:match-element;';
  readonly none = 'view-transition-name:none;';
  readonly revert = 'view-transition-name:revert;';
  readonly revertLayer = 'view-transition-name:revert-layer;';
  readonly unset = 'view-transition-name:unset;';
  constructor() {
    super('view-transition-name');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ViewTransitionName | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 visibility；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
 */
export class VisibilityCss extends CssProperty {
  readonly collapse = 'visibility:collapse;';
  readonly hidden = 'visibility:hidden;';
  readonly inherit = 'visibility:inherit;';
  readonly initial = 'visibility:initial;';
  readonly revert = 'visibility:revert;';
  readonly revertLayer = 'visibility:revert-layer;';
  readonly unset = 'visibility:unset;';
  readonly visible = 'visibility:visible;';
  constructor() {
    super('visibility');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Visibility | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 white-space；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
 */
export class WhiteSpaceCss extends CssProperty {
  readonly breakSpaces = 'white-space:break-spaces;';
  readonly collapse = 'white-space:collapse;';
  readonly inherit = 'white-space:inherit;';
  readonly initial = 'white-space:initial;';
  readonly normal = 'white-space:normal;';
  readonly nowrap = 'white-space:nowrap;';
  readonly pre = 'white-space:pre;';
  readonly preLine = 'white-space:pre-line;';
  readonly preWrap = 'white-space:pre-wrap;';
  readonly preserve = 'white-space:preserve;';
  readonly preserveBreaks = 'white-space:preserve-breaks;';
  readonly preserveSpaces = 'white-space:preserve-spaces;';
  readonly revert = 'white-space:revert;';
  readonly revertLayer = 'white-space:revert-layer;';
  readonly unset = 'white-space:unset;';
  readonly wrap = 'white-space:wrap;';
  constructor() {
    super('white-space');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.WhiteSpace | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 white-space-collapse；初始值 collapse。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
 */
export class WhiteSpaceCollapseCss extends CssProperty {
  readonly breakSpaces = 'white-space-collapse:break-spaces;';
  readonly collapse = 'white-space-collapse:collapse;';
  readonly inherit = 'white-space-collapse:inherit;';
  readonly initial = 'white-space-collapse:initial;';
  readonly preserve = 'white-space-collapse:preserve;';
  readonly preserveBreaks = 'white-space-collapse:preserve-breaks;';
  readonly preserveSpaces = 'white-space-collapse:preserve-spaces;';
  readonly revert = 'white-space-collapse:revert;';
  readonly revertLayer = 'white-space-collapse:revert-layer;';
  readonly unset = 'white-space-collapse:unset;';
  constructor() {
    super('white-space-collapse');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.WhiteSpaceCollapse | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 widows；初始值 2。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
 */
export class WidowsCss extends CssProperty {
  readonly inherit = 'widows:inherit;';
  readonly initial = 'widows:initial;';
  readonly revert = 'widows:revert;';
  readonly revertLayer = 'widows:revert-layer;';
  readonly unset = 'widows:unset;';
  constructor() {
    super('widows');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Widows | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Widows | CssString, ...others: (Property.Widows | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Widows | CssString, ...others: (Property.Widows | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Widows | CssString,
    preferred: Property.Widows | CssString,
    maximum: Property.Widows | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** 宽度（CSS width）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
 */
export class WidthCss extends LengthCssProperty {
  readonly auto = 'width:auto;';
  readonly fitContent = 'width:fit-content;';
  readonly inherit = 'width:inherit;';
  readonly initial = 'width:initial;';
  readonly intrinsic = 'width:intrinsic;';
  readonly maxContent = 'width:max-content;';
  readonly minContent = 'width:min-content;';
  readonly minIntrinsic = 'width:min-intrinsic;';
  readonly revert = 'width:revert;';
  readonly revertLayer = 'width:revert-layer;';
  readonly unset = 'width:unset;';
  constructor() {
    super('width');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Width | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Width | CssString, ...others: (Property.Width | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Width | CssString, ...others: (Property.Width | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Width | CssString,
    preferred: Property.Width | CssString,
    maximum: Property.Width | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 will-change；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
 */
export class WillChangeCss extends CssProperty {
  readonly auto = 'will-change:auto;';
  readonly contents = 'will-change:contents;';
  readonly inherit = 'will-change:inherit;';
  readonly initial = 'will-change:initial;';
  readonly revert = 'will-change:revert;';
  readonly revertLayer = 'will-change:revert-layer;';
  readonly scrollPosition = 'will-change:scroll-position;';
  readonly unset = 'will-change:unset;';
  constructor() {
    super('will-change');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.WillChange | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 word-break；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
 */
export class WordBreakCss extends CssProperty {
  readonly autoPhrase = 'word-break:auto-phrase;';
  readonly breakAll = 'word-break:break-all;';
  readonly breakWord = 'word-break:break-word;';
  readonly inherit = 'word-break:inherit;';
  readonly initial = 'word-break:initial;';
  readonly keepAll = 'word-break:keep-all;';
  readonly normal = 'word-break:normal;';
  readonly revert = 'word-break:revert;';
  readonly revertLayer = 'word-break:revert-layer;';
  readonly unset = 'word-break:unset;';
  constructor() {
    super('word-break');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.WordBreak | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 word-spacing；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
 */
export class WordSpacingCss extends LengthCssProperty {
  readonly inherit = 'word-spacing:inherit;';
  readonly initial = 'word-spacing:initial;';
  readonly normal = 'word-spacing:normal;';
  readonly revert = 'word-spacing:revert;';
  readonly revertLayer = 'word-spacing:revert-layer;';
  readonly unset = 'word-spacing:unset;';
  constructor() {
    super('word-spacing');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.WordSpacing | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.WordSpacing | CssString,
    ...others: (Property.WordSpacing | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.WordSpacing | CssString,
    ...others: (Property.WordSpacing | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.WordSpacing | CssString,
    preferred: Property.WordSpacing | CssString,
    maximum: Property.WordSpacing | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 word-wrap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
 */
export class WordWrapCss extends CssProperty {
  readonly breakWord = 'word-wrap:break-word;';
  readonly inherit = 'word-wrap:inherit;';
  readonly initial = 'word-wrap:initial;';
  readonly normal = 'word-wrap:normal;';
  readonly revert = 'word-wrap:revert;';
  readonly revertLayer = 'word-wrap:revert-layer;';
  readonly unset = 'word-wrap:unset;';
  constructor() {
    super('word-wrap');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.WordWrap | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 writing-mode；初始值 horizontal-tb。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
 */
export class WritingModeCss extends CssProperty {
  readonly horizontalTb = 'writing-mode:horizontal-tb;';
  readonly inherit = 'writing-mode:inherit;';
  readonly initial = 'writing-mode:initial;';
  readonly revert = 'writing-mode:revert;';
  readonly revertLayer = 'writing-mode:revert-layer;';
  readonly sidewaysLr = 'writing-mode:sideways-lr;';
  readonly sidewaysRl = 'writing-mode:sideways-rl;';
  readonly unset = 'writing-mode:unset;';
  readonly verticalLr = 'writing-mode:vertical-lr;';
  readonly verticalRl = 'writing-mode:vertical-rl;';
  constructor() {
    super('writing-mode');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.WritingMode | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 x；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
 */
export class XCss extends LengthCssProperty {
  readonly inherit = 'x:inherit;';
  readonly initial = 'x:initial;';
  readonly revert = 'x:revert;';
  readonly revertLayer = 'x:revert-layer;';
  readonly unset = 'x:unset;';
  constructor() {
    super('x');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.X | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.X | CssString, ...others: (Property.X | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.X | CssString, ...others: (Property.X | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.X | CssString,
    preferred: Property.X | CssString,
    maximum: Property.X | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 y；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
 */
export class YCss extends LengthCssProperty {
  readonly inherit = 'y:inherit;';
  readonly initial = 'y:initial;';
  readonly revert = 'y:revert;';
  readonly revertLayer = 'y:revert-layer;';
  readonly unset = 'y:unset;';
  constructor() {
    super('y');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Y | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Y | CssString, ...others: (Property.Y | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Y | CssString, ...others: (Property.Y | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Y | CssString,
    preferred: Property.Y | CssString,
    maximum: Property.Y | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 z-index；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
 */
export class ZIndexCss extends CssProperty {
  readonly auto = 'z-index:auto;';
  readonly inherit = 'z-index:inherit;';
  readonly initial = 'z-index:initial;';
  readonly revert = 'z-index:revert;';
  readonly revertLayer = 'z-index:revert-layer;';
  readonly unset = 'z-index:unset;';
  constructor() {
    super('z-index');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ZIndex | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.ZIndex | CssString, ...others: (Property.ZIndex | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.ZIndex | CssString, ...others: (Property.ZIndex | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.ZIndex | CssString,
    preferred: Property.ZIndex | CssString,
    maximum: Property.ZIndex | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 zoom；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
 */
export class ZoomCss extends CssProperty {
  readonly inherit = 'zoom:inherit;';
  readonly initial = 'zoom:initial;';
  readonly normal = 'zoom:normal;';
  readonly reset = 'zoom:reset;';
  readonly revert = 'zoom:revert;';
  readonly revertLayer = 'zoom:revert-layer;';
  readonly unset = 'zoom:unset;';
  constructor() {
    super('zoom');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Zoom | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Zoom | CssString, ...others: (Property.Zoom | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Zoom | CssString, ...others: (Property.Zoom | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Zoom | CssString,
    preferred: Property.Zoom | CssString,
    maximum: Property.Zoom | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}
