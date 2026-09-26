// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** CSS 属性 scale；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
 */
export class ScaleCss extends CssProperty<Property.Scale> {
  readonly inherit = 'scale:inherit;';
  readonly initial = 'scale:initial;';
  readonly none = 'scale:none;';
  readonly revert = 'scale:revert;';
  readonly revertLayer = 'scale:revert-layer;';
  readonly unset = 'scale:unset;';
  constructor() {
    super('scale');
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(value1: number, value2: number, value3: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Scale, number> | (string & {}),
    ...others: (Extract<Property.Scale, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Scale, number> | (string & {}),
    ...others: (Extract<Property.Scale, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Scale, number> | (string & {}),
    preferred: Extract<Property.Scale, number> | (string & {}),
    maximum: Extract<Property.Scale, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-behavior；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
 */
export class ScrollBehaviorCss extends CssProperty<Property.ScrollBehavior> {
  readonly auto = 'scroll-behavior:auto;';
  readonly inherit = 'scroll-behavior:inherit;';
  readonly initial = 'scroll-behavior:initial;';
  readonly revert = 'scroll-behavior:revert;';
  readonly revertLayer = 'scroll-behavior:revert-layer;';
  readonly smooth = 'scroll-behavior:smooth;';
  readonly unset = 'scroll-behavior:unset;';
  constructor() {
    super('scroll-behavior');
  }
}

/** CSS 属性 scroll-initial-target；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
 */
export class ScrollInitialTargetCss extends CssProperty<Property.ScrollInitialTarget> {
  readonly inherit = 'scroll-initial-target:inherit;';
  readonly initial = 'scroll-initial-target:initial;';
  readonly nearest = 'scroll-initial-target:nearest;';
  readonly none = 'scroll-initial-target:none;';
  readonly revert = 'scroll-initial-target:revert;';
  readonly revertLayer = 'scroll-initial-target:revert-layer;';
  readonly unset = 'scroll-initial-target:unset;';
  constructor() {
    super('scroll-initial-target');
  }
}

/** CSS 属性 scroll-margin。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
 */
export class ScrollMarginCss extends LengthCssProperty<Property.ScrollMargin> {
  readonly inherit = 'scroll-margin:inherit;';
  readonly initial = 'scroll-margin:initial;';
  readonly revert = 'scroll-margin:revert;';
  readonly revertLayer = 'scroll-margin:revert-layer;';
  readonly unset = 'scroll-margin:unset;';
  constructor() {
    super('scroll-margin');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMargin, number> | (string & {}),
    ...others: (Extract<Property.ScrollMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMargin, number> | (string & {}),
    ...others: (Extract<Property.ScrollMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMargin, number> | (string & {}),
    preferred: Extract<Property.ScrollMargin, number> | (string & {}),
    maximum: Extract<Property.ScrollMargin, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
 */
export class ScrollMarginBlockCss extends LengthCssProperty<Property.ScrollMarginBlock> {
  readonly inherit = 'scroll-margin-block:inherit;';
  readonly initial = 'scroll-margin-block:initial;';
  readonly revert = 'scroll-margin-block:revert;';
  readonly revertLayer = 'scroll-margin-block:revert-layer;';
  readonly unset = 'scroll-margin-block:unset;';
  constructor() {
    super('scroll-margin-block');
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
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginBlock, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginBlock, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginBlock, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginBlock, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginBlock, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-block-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
 */
export class ScrollMarginBlockEndCss extends LengthCssProperty<Property.ScrollMarginBlockEnd> {
  readonly inherit = 'scroll-margin-block-end:inherit;';
  readonly initial = 'scroll-margin-block-end:initial;';
  readonly revert = 'scroll-margin-block-end:revert;';
  readonly revertLayer = 'scroll-margin-block-end:revert-layer;';
  readonly unset = 'scroll-margin-block-end:unset;';
  constructor() {
    super('scroll-margin-block-end');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginBlockEnd, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginBlockEnd, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginBlockEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-block-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
 */
export class ScrollMarginBlockStartCss extends LengthCssProperty<Property.ScrollMarginBlockStart> {
  readonly inherit = 'scroll-margin-block-start:inherit;';
  readonly initial = 'scroll-margin-block-start:initial;';
  readonly revert = 'scroll-margin-block-start:revert;';
  readonly revertLayer = 'scroll-margin-block-start:revert-layer;';
  readonly unset = 'scroll-margin-block-start:unset;';
  constructor() {
    super('scroll-margin-block-start');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginBlockStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginBlockStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginBlockStart, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginBlockStart, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginBlockStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
 */
export class ScrollMarginBottomCss extends LengthCssProperty<Property.ScrollMarginBottom> {
  readonly inherit = 'scroll-margin-bottom:inherit;';
  readonly initial = 'scroll-margin-bottom:initial;';
  readonly revert = 'scroll-margin-bottom:revert;';
  readonly revertLayer = 'scroll-margin-bottom:revert-layer;';
  readonly unset = 'scroll-margin-bottom:unset;';
  constructor() {
    super('scroll-margin-bottom');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginBottom, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
 */
export class ScrollMarginInlineCss extends LengthCssProperty<Property.ScrollMarginInline> {
  readonly inherit = 'scroll-margin-inline:inherit;';
  readonly initial = 'scroll-margin-inline:initial;';
  readonly revert = 'scroll-margin-inline:revert;';
  readonly revertLayer = 'scroll-margin-inline:revert-layer;';
  readonly unset = 'scroll-margin-inline:unset;';
  constructor() {
    super('scroll-margin-inline');
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
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginInline, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginInline, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginInline, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginInline, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginInline, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginInline, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginInline, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-inline-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
 */
export class ScrollMarginInlineEndCss extends LengthCssProperty<Property.ScrollMarginInlineEnd> {
  readonly inherit = 'scroll-margin-inline-end:inherit;';
  readonly initial = 'scroll-margin-inline-end:initial;';
  readonly revert = 'scroll-margin-inline-end:revert;';
  readonly revertLayer = 'scroll-margin-inline-end:revert-layer;';
  readonly unset = 'scroll-margin-inline-end:unset;';
  constructor() {
    super('scroll-margin-inline-end');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginInlineEnd, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginInlineEnd, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginInlineEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-inline-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
 */
export class ScrollMarginInlineStartCss extends LengthCssProperty<Property.ScrollMarginInlineStart> {
  readonly inherit = 'scroll-margin-inline-start:inherit;';
  readonly initial = 'scroll-margin-inline-start:initial;';
  readonly revert = 'scroll-margin-inline-start:revert;';
  readonly revertLayer = 'scroll-margin-inline-start:revert-layer;';
  readonly unset = 'scroll-margin-inline-start:unset;';
  constructor() {
    super('scroll-margin-inline-start');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginInlineStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginInlineStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginInlineStart, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginInlineStart, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginInlineStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
 */
export class ScrollMarginLeftCss extends LengthCssProperty<Property.ScrollMarginLeft> {
  readonly inherit = 'scroll-margin-left:inherit;';
  readonly initial = 'scroll-margin-left:initial;';
  readonly revert = 'scroll-margin-left:revert;';
  readonly revertLayer = 'scroll-margin-left:revert-layer;';
  readonly unset = 'scroll-margin-left:unset;';
  constructor() {
    super('scroll-margin-left');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginLeft, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
 */
export class ScrollMarginRightCss extends LengthCssProperty<Property.ScrollMarginRight> {
  readonly inherit = 'scroll-margin-right:inherit;';
  readonly initial = 'scroll-margin-right:initial;';
  readonly revert = 'scroll-margin-right:revert;';
  readonly revertLayer = 'scroll-margin-right:revert-layer;';
  readonly unset = 'scroll-margin-right:unset;';
  constructor() {
    super('scroll-margin-right');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginRight, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginRight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginRight, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginRight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginRight, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginRight, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginRight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-margin-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
 */
export class ScrollMarginTopCss extends LengthCssProperty<Property.ScrollMarginTop> {
  readonly inherit = 'scroll-margin-top:inherit;';
  readonly initial = 'scroll-margin-top:initial;';
  readonly revert = 'scroll-margin-top:revert;';
  readonly revertLayer = 'scroll-margin-top:revert-layer;';
  readonly unset = 'scroll-margin-top:unset;';
  constructor() {
    super('scroll-margin-top');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginTop, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginTop, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginTop, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginTop, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginTop, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginTop, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginTop, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
 */
export class ScrollPaddingCss extends LengthCssProperty<Property.ScrollPadding> {
  readonly auto = 'scroll-padding:auto;';
  readonly inherit = 'scroll-padding:inherit;';
  readonly initial = 'scroll-padding:initial;';
  readonly revert = 'scroll-padding:revert;';
  readonly revertLayer = 'scroll-padding:revert-layer;';
  readonly unset = 'scroll-padding:unset;';
  constructor() {
    super('scroll-padding');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(value1: number, value2: number, value3: number): string;
  percent(value1: number, value2: number, value3: number, value4: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollPadding, number> | (string & {}),
    ...others: (Extract<Property.ScrollPadding, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPadding, number> | (string & {}),
    ...others: (Extract<Property.ScrollPadding, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPadding, number> | (string & {}),
    preferred: Extract<Property.ScrollPadding, number> | (string & {}),
    maximum: Extract<Property.ScrollPadding, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
 */
export class ScrollPaddingBlockCss extends LengthCssProperty<Property.ScrollPaddingBlock> {
  readonly auto = 'scroll-padding-block:auto;';
  readonly inherit = 'scroll-padding-block:inherit;';
  readonly initial = 'scroll-padding-block:initial;';
  readonly revert = 'scroll-padding-block:revert;';
  readonly revertLayer = 'scroll-padding-block:revert-layer;';
  readonly unset = 'scroll-padding-block:unset;';
  constructor() {
    super('scroll-padding-block');
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
    value: Extract<Property.ScrollPaddingBlock, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingBlock, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingBlock, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingBlock, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingBlock, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-block-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
 */
export class ScrollPaddingBlockEndCss extends LengthCssProperty<Property.ScrollPaddingBlockEnd> {
  readonly auto = 'scroll-padding-block-end:auto;';
  readonly inherit = 'scroll-padding-block-end:inherit;';
  readonly initial = 'scroll-padding-block-end:initial;';
  readonly revert = 'scroll-padding-block-end:revert;';
  readonly revertLayer = 'scroll-padding-block-end:revert-layer;';
  readonly unset = 'scroll-padding-block-end:unset;';
  constructor() {
    super('scroll-padding-block-end');
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
    value: Extract<Property.ScrollPaddingBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingBlockEnd, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingBlockEnd, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingBlockEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-block-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
 */
export class ScrollPaddingBlockStartCss extends LengthCssProperty<Property.ScrollPaddingBlockStart> {
  readonly auto = 'scroll-padding-block-start:auto;';
  readonly inherit = 'scroll-padding-block-start:inherit;';
  readonly initial = 'scroll-padding-block-start:initial;';
  readonly revert = 'scroll-padding-block-start:revert;';
  readonly revertLayer = 'scroll-padding-block-start:revert-layer;';
  readonly unset = 'scroll-padding-block-start:unset;';
  constructor() {
    super('scroll-padding-block-start');
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
    value: Extract<Property.ScrollPaddingBlockStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingBlockStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingBlockStart, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingBlockStart, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingBlockStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-bottom；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
 */
export class ScrollPaddingBottomCss extends LengthCssProperty<Property.ScrollPaddingBottom> {
  readonly auto = 'scroll-padding-bottom:auto;';
  readonly inherit = 'scroll-padding-bottom:inherit;';
  readonly initial = 'scroll-padding-bottom:initial;';
  readonly revert = 'scroll-padding-bottom:revert;';
  readonly revertLayer = 'scroll-padding-bottom:revert-layer;';
  readonly unset = 'scroll-padding-bottom:unset;';
  constructor() {
    super('scroll-padding-bottom');
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
    value: Extract<Property.ScrollPaddingBottom, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingBottom, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingBottom, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingBottom, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingBottom, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
 */
export class ScrollPaddingInlineCss extends LengthCssProperty<Property.ScrollPaddingInline> {
  readonly auto = 'scroll-padding-inline:auto;';
  readonly inherit = 'scroll-padding-inline:inherit;';
  readonly initial = 'scroll-padding-inline:initial;';
  readonly revert = 'scroll-padding-inline:revert;';
  readonly revertLayer = 'scroll-padding-inline:revert-layer;';
  readonly unset = 'scroll-padding-inline:unset;';
  constructor() {
    super('scroll-padding-inline');
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
    value: Extract<Property.ScrollPaddingInline, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingInline, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingInline, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingInline, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingInline, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingInline, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingInline, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-inline-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
 */
export class ScrollPaddingInlineEndCss extends LengthCssProperty<Property.ScrollPaddingInlineEnd> {
  readonly auto = 'scroll-padding-inline-end:auto;';
  readonly inherit = 'scroll-padding-inline-end:inherit;';
  readonly initial = 'scroll-padding-inline-end:initial;';
  readonly revert = 'scroll-padding-inline-end:revert;';
  readonly revertLayer = 'scroll-padding-inline-end:revert-layer;';
  readonly unset = 'scroll-padding-inline-end:unset;';
  constructor() {
    super('scroll-padding-inline-end');
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
    value: Extract<Property.ScrollPaddingInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingInlineEnd, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingInlineEnd, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingInlineEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-inline-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
 */
export class ScrollPaddingInlineStartCss extends LengthCssProperty<Property.ScrollPaddingInlineStart> {
  readonly auto = 'scroll-padding-inline-start:auto;';
  readonly inherit = 'scroll-padding-inline-start:inherit;';
  readonly initial = 'scroll-padding-inline-start:initial;';
  readonly revert = 'scroll-padding-inline-start:revert;';
  readonly revertLayer = 'scroll-padding-inline-start:revert-layer;';
  readonly unset = 'scroll-padding-inline-start:unset;';
  constructor() {
    super('scroll-padding-inline-start');
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
    value: Extract<Property.ScrollPaddingInlineStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingInlineStart, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingInlineStart, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingInlineStart, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingInlineStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-left；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
 */
export class ScrollPaddingLeftCss extends LengthCssProperty<Property.ScrollPaddingLeft> {
  readonly auto = 'scroll-padding-left:auto;';
  readonly inherit = 'scroll-padding-left:inherit;';
  readonly initial = 'scroll-padding-left:initial;';
  readonly revert = 'scroll-padding-left:revert;';
  readonly revertLayer = 'scroll-padding-left:revert-layer;';
  readonly unset = 'scroll-padding-left:unset;';
  constructor() {
    super('scroll-padding-left');
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
    value: Extract<Property.ScrollPaddingLeft, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingLeft, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingLeft, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingLeft, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingLeft, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-right；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
 */
export class ScrollPaddingRightCss extends LengthCssProperty<Property.ScrollPaddingRight> {
  readonly auto = 'scroll-padding-right:auto;';
  readonly inherit = 'scroll-padding-right:inherit;';
  readonly initial = 'scroll-padding-right:initial;';
  readonly revert = 'scroll-padding-right:revert;';
  readonly revertLayer = 'scroll-padding-right:revert-layer;';
  readonly unset = 'scroll-padding-right:unset;';
  constructor() {
    super('scroll-padding-right');
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
    value: Extract<Property.ScrollPaddingRight, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingRight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingRight, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingRight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingRight, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingRight, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingRight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-padding-top；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
 */
export class ScrollPaddingTopCss extends LengthCssProperty<Property.ScrollPaddingTop> {
  readonly auto = 'scroll-padding-top:auto;';
  readonly inherit = 'scroll-padding-top:inherit;';
  readonly initial = 'scroll-padding-top:initial;';
  readonly revert = 'scroll-padding-top:revert;';
  readonly revertLayer = 'scroll-padding-top:revert-layer;';
  readonly unset = 'scroll-padding-top:unset;';
  constructor() {
    super('scroll-padding-top');
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
    value: Extract<Property.ScrollPaddingTop, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingTop, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollPaddingTop, number> | (string & {}),
    ...others: (Extract<Property.ScrollPaddingTop, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollPaddingTop, number> | (string & {}),
    preferred: Extract<Property.ScrollPaddingTop, number> | (string & {}),
    maximum: Extract<Property.ScrollPaddingTop, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-snap-align；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
 */
export class ScrollSnapAlignCss extends CssProperty<Property.ScrollSnapAlign> {
  readonly center = 'scroll-snap-align:center;';
  readonly end = 'scroll-snap-align:end;';
  readonly inherit = 'scroll-snap-align:inherit;';
  readonly initial = 'scroll-snap-align:initial;';
  readonly none = 'scroll-snap-align:none;';
  readonly revert = 'scroll-snap-align:revert;';
  readonly revertLayer = 'scroll-snap-align:revert-layer;';
  readonly start = 'scroll-snap-align:start;';
  readonly unset = 'scroll-snap-align:unset;';
  constructor() {
    super('scroll-snap-align');
  }
}

/** CSS 属性 scroll-snap-margin。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
 */
export class ScrollSnapMarginCss extends LengthCssProperty<Property.ScrollMargin> {
  readonly inherit = 'scroll-snap-margin:inherit;';
  readonly initial = 'scroll-snap-margin:initial;';
  readonly revert = 'scroll-snap-margin:revert;';
  readonly revertLayer = 'scroll-snap-margin:revert-layer;';
  readonly unset = 'scroll-snap-margin:unset;';
  constructor() {
    super('scroll-snap-margin');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMargin, number> | (string & {}),
    ...others: (Extract<Property.ScrollMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMargin, number> | (string & {}),
    ...others: (Extract<Property.ScrollMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMargin, number> | (string & {}),
    preferred: Extract<Property.ScrollMargin, number> | (string & {}),
    maximum: Extract<Property.ScrollMargin, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-snap-margin-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
 */
export class ScrollSnapMarginBottomCss extends LengthCssProperty<Property.ScrollMarginBottom> {
  readonly inherit = 'scroll-snap-margin-bottom:inherit;';
  readonly initial = 'scroll-snap-margin-bottom:initial;';
  readonly revert = 'scroll-snap-margin-bottom:revert;';
  readonly revertLayer = 'scroll-snap-margin-bottom:revert-layer;';
  readonly unset = 'scroll-snap-margin-bottom:unset;';
  constructor() {
    super('scroll-snap-margin-bottom');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginBottom, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginBottom, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-snap-margin-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
 */
export class ScrollSnapMarginLeftCss extends LengthCssProperty<Property.ScrollMarginLeft> {
  readonly inherit = 'scroll-snap-margin-left:inherit;';
  readonly initial = 'scroll-snap-margin-left:initial;';
  readonly revert = 'scroll-snap-margin-left:revert;';
  readonly revertLayer = 'scroll-snap-margin-left:revert-layer;';
  readonly unset = 'scroll-snap-margin-left:unset;';
  constructor() {
    super('scroll-snap-margin-left');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginLeft, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginLeft, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-snap-margin-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
 */
export class ScrollSnapMarginRightCss extends LengthCssProperty<Property.ScrollMarginRight> {
  readonly inherit = 'scroll-snap-margin-right:inherit;';
  readonly initial = 'scroll-snap-margin-right:initial;';
  readonly revert = 'scroll-snap-margin-right:revert;';
  readonly revertLayer = 'scroll-snap-margin-right:revert-layer;';
  readonly unset = 'scroll-snap-margin-right:unset;';
  constructor() {
    super('scroll-snap-margin-right');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginRight, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginRight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginRight, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginRight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginRight, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginRight, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginRight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-snap-margin-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
 */
export class ScrollSnapMarginTopCss extends LengthCssProperty<Property.ScrollMarginTop> {
  readonly inherit = 'scroll-snap-margin-top:inherit;';
  readonly initial = 'scroll-snap-margin-top:initial;';
  readonly revert = 'scroll-snap-margin-top:revert;';
  readonly revertLayer = 'scroll-snap-margin-top:revert-layer;';
  readonly unset = 'scroll-snap-margin-top:unset;';
  constructor() {
    super('scroll-snap-margin-top');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ScrollMarginTop, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginTop, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ScrollMarginTop, number> | (string & {}),
    ...others: (Extract<Property.ScrollMarginTop, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ScrollMarginTop, number> | (string & {}),
    preferred: Extract<Property.ScrollMarginTop, number> | (string & {}),
    maximum: Extract<Property.ScrollMarginTop, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 scroll-snap-stop；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
 */
export class ScrollSnapStopCss extends CssProperty<Property.ScrollSnapStop> {
  readonly always = 'scroll-snap-stop:always;';
  readonly inherit = 'scroll-snap-stop:inherit;';
  readonly initial = 'scroll-snap-stop:initial;';
  readonly normal = 'scroll-snap-stop:normal;';
  readonly revert = 'scroll-snap-stop:revert;';
  readonly revertLayer = 'scroll-snap-stop:revert-layer;';
  readonly unset = 'scroll-snap-stop:unset;';
  constructor() {
    super('scroll-snap-stop');
  }
}

/** CSS 属性 scroll-snap-type；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
 */
export class ScrollSnapTypeCss extends CssProperty<Property.ScrollSnapType> {
  readonly block = 'scroll-snap-type:block;';
  readonly both = 'scroll-snap-type:both;';
  readonly inherit = 'scroll-snap-type:inherit;';
  readonly initial = 'scroll-snap-type:initial;';
  readonly inline = 'scroll-snap-type:inline;';
  readonly none = 'scroll-snap-type:none;';
  readonly revert = 'scroll-snap-type:revert;';
  readonly revertLayer = 'scroll-snap-type:revert-layer;';
  readonly unset = 'scroll-snap-type:unset;';
  readonly x = 'scroll-snap-type:x;';
  readonly y = 'scroll-snap-type:y;';
  constructor() {
    super('scroll-snap-type');
  }
}

/** CSS 属性 scroll-timeline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
 */
export class ScrollTimelineCss extends CssProperty<Property.ScrollTimeline> {
  readonly inherit = 'scroll-timeline:inherit;';
  readonly initial = 'scroll-timeline:initial;';
  readonly none = 'scroll-timeline:none;';
  readonly revert = 'scroll-timeline:revert;';
  readonly revertLayer = 'scroll-timeline:revert-layer;';
  readonly unset = 'scroll-timeline:unset;';
  constructor() {
    super('scroll-timeline');
  }
}

/** CSS 属性 scroll-timeline-axis；初始值 block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
 */
export class ScrollTimelineAxisCss extends CssProperty<Property.ScrollTimelineAxis> {
  readonly block = 'scroll-timeline-axis:block;';
  readonly inherit = 'scroll-timeline-axis:inherit;';
  readonly initial = 'scroll-timeline-axis:initial;';
  readonly inline = 'scroll-timeline-axis:inline;';
  readonly revert = 'scroll-timeline-axis:revert;';
  readonly revertLayer = 'scroll-timeline-axis:revert-layer;';
  readonly unset = 'scroll-timeline-axis:unset;';
  readonly x = 'scroll-timeline-axis:x;';
  readonly y = 'scroll-timeline-axis:y;';
  constructor() {
    super('scroll-timeline-axis');
  }
}

/** CSS 属性 scroll-timeline-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
 */
export class ScrollTimelineNameCss extends CssProperty<Property.ScrollTimelineName> {
  readonly inherit = 'scroll-timeline-name:inherit;';
  readonly initial = 'scroll-timeline-name:initial;';
  readonly none = 'scroll-timeline-name:none;';
  readonly revert = 'scroll-timeline-name:revert;';
  readonly revertLayer = 'scroll-timeline-name:revert-layer;';
  readonly unset = 'scroll-timeline-name:unset;';
  constructor() {
    super('scroll-timeline-name');
  }
}

/** CSS 属性 scrollbar-color；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
 */
export class ScrollbarColorCss extends CssProperty<Property.ScrollbarColor> {
  readonly auto = 'scrollbar-color:auto;';
  readonly inherit = 'scrollbar-color:inherit;';
  readonly initial = 'scrollbar-color:initial;';
  readonly revert = 'scrollbar-color:revert;';
  readonly revertLayer = 'scrollbar-color:revert-layer;';
  readonly unset = 'scrollbar-color:unset;';
  constructor() {
    super('scrollbar-color');
  }
}

/** CSS 属性 scrollbar-gutter；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
 */
export class ScrollbarGutterCss extends CssProperty<Property.ScrollbarGutter> {
  readonly auto = 'scrollbar-gutter:auto;';
  readonly inherit = 'scrollbar-gutter:inherit;';
  readonly initial = 'scrollbar-gutter:initial;';
  readonly revert = 'scrollbar-gutter:revert;';
  readonly revertLayer = 'scrollbar-gutter:revert-layer;';
  readonly stable = 'scrollbar-gutter:stable;';
  readonly unset = 'scrollbar-gutter:unset;';
  constructor() {
    super('scrollbar-gutter');
  }
}

/** CSS 属性 scrollbar-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
 */
export class ScrollbarWidthCss extends CssProperty<Property.ScrollbarWidth> {
  readonly auto = 'scrollbar-width:auto;';
  readonly inherit = 'scrollbar-width:inherit;';
  readonly initial = 'scrollbar-width:initial;';
  readonly none = 'scrollbar-width:none;';
  readonly revert = 'scrollbar-width:revert;';
  readonly revertLayer = 'scrollbar-width:revert-layer;';
  readonly thin = 'scrollbar-width:thin;';
  readonly unset = 'scrollbar-width:unset;';
  constructor() {
    super('scrollbar-width');
  }
}

/** CSS 属性 shape-image-threshold；初始值 0.0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
 */
export class ShapeImageThresholdCss extends CssProperty<Property.ShapeImageThreshold> {
  readonly inherit = 'shape-image-threshold:inherit;';
  readonly initial = 'shape-image-threshold:initial;';
  readonly revert = 'shape-image-threshold:revert;';
  readonly revertLayer = 'shape-image-threshold:revert-layer;';
  readonly unset = 'shape-image-threshold:unset;';
  constructor() {
    super('shape-image-threshold');
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
    value: Extract<Property.ShapeImageThreshold, number> | (string & {}),
    ...others: (Extract<Property.ShapeImageThreshold, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ShapeImageThreshold, number> | (string & {}),
    ...others: (Extract<Property.ShapeImageThreshold, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ShapeImageThreshold, number> | (string & {}),
    preferred: Extract<Property.ShapeImageThreshold, number> | (string & {}),
    maximum: Extract<Property.ShapeImageThreshold, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 shape-margin；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
 */
export class ShapeMarginCss extends LengthCssProperty<Property.ShapeMargin> {
  readonly inherit = 'shape-margin:inherit;';
  readonly initial = 'shape-margin:initial;';
  readonly revert = 'shape-margin:revert;';
  readonly revertLayer = 'shape-margin:revert-layer;';
  readonly unset = 'shape-margin:unset;';
  constructor() {
    super('shape-margin');
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
    value: Extract<Property.ShapeMargin, number> | (string & {}),
    ...others: (Extract<Property.ShapeMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ShapeMargin, number> | (string & {}),
    ...others: (Extract<Property.ShapeMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ShapeMargin, number> | (string & {}),
    preferred: Extract<Property.ShapeMargin, number> | (string & {}),
    maximum: Extract<Property.ShapeMargin, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 shape-outside；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
 */
export class ShapeOutsideCss extends CssProperty<Property.ShapeOutside> {
  readonly borderBox = 'shape-outside:border-box;';
  readonly contentBox = 'shape-outside:content-box;';
  readonly inherit = 'shape-outside:inherit;';
  readonly initial = 'shape-outside:initial;';
  readonly marginBox = 'shape-outside:margin-box;';
  readonly none = 'shape-outside:none;';
  readonly paddingBox = 'shape-outside:padding-box;';
  readonly revert = 'shape-outside:revert;';
  readonly revertLayer = 'shape-outside:revert-layer;';
  readonly unset = 'shape-outside:unset;';
  constructor() {
    super('shape-outside');
  }
}

/** CSS 属性 shape-rendering；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
 */
export class ShapeRenderingCss extends CssProperty<Property.ShapeRendering> {
  readonly auto = 'shape-rendering:auto;';
  readonly crispEdges = 'shape-rendering:crispEdges;';
  readonly geometricPrecision = 'shape-rendering:geometricPrecision;';
  readonly inherit = 'shape-rendering:inherit;';
  readonly initial = 'shape-rendering:initial;';
  readonly optimizeSpeed = 'shape-rendering:optimizeSpeed;';
  readonly revert = 'shape-rendering:revert;';
  readonly revertLayer = 'shape-rendering:revert-layer;';
  readonly unset = 'shape-rendering:unset;';
  constructor() {
    super('shape-rendering');
  }
}

/** CSS 属性 speak-as；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
 */
export class SpeakAsCss extends CssProperty<Property.SpeakAs> {
  readonly digits = 'speak-as:digits;';
  readonly inherit = 'speak-as:inherit;';
  readonly initial = 'speak-as:initial;';
  readonly literalPunctuation = 'speak-as:literal-punctuation;';
  readonly noPunctuation = 'speak-as:no-punctuation;';
  readonly normal = 'speak-as:normal;';
  readonly revert = 'speak-as:revert;';
  readonly revertLayer = 'speak-as:revert-layer;';
  readonly spellOut = 'speak-as:spell-out;';
  readonly unset = 'speak-as:unset;';
  constructor() {
    super('speak-as');
  }
}

/** CSS 属性 stop-color；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
 */
export class StopColorCss extends CssProperty<Property.StopColor> {
  readonly AccentColor = 'stop-color:AccentColor;';
  readonly AccentColorText = 'stop-color:AccentColorText;';
  readonly ActiveBorder = 'stop-color:ActiveBorder;';
  readonly ActiveCaption = 'stop-color:ActiveCaption;';
  readonly ActiveText = 'stop-color:ActiveText;';
  readonly AppWorkspace = 'stop-color:AppWorkspace;';
  readonly Background = 'stop-color:Background;';
  readonly ButtonBorder = 'stop-color:ButtonBorder;';
  readonly ButtonFace = 'stop-color:ButtonFace;';
  readonly ButtonHighlight = 'stop-color:ButtonHighlight;';
  readonly ButtonShadow = 'stop-color:ButtonShadow;';
  readonly ButtonText = 'stop-color:ButtonText;';
  readonly Canvas = 'stop-color:Canvas;';
  readonly CanvasText = 'stop-color:CanvasText;';
  readonly CaptionText = 'stop-color:CaptionText;';
  readonly Field = 'stop-color:Field;';
  readonly FieldText = 'stop-color:FieldText;';
  readonly GrayText = 'stop-color:GrayText;';
  readonly Highlight = 'stop-color:Highlight;';
  readonly HighlightText = 'stop-color:HighlightText;';
  readonly InactiveBorder = 'stop-color:InactiveBorder;';
  readonly InactiveCaption = 'stop-color:InactiveCaption;';
  readonly InactiveCaptionText = 'stop-color:InactiveCaptionText;';
  readonly InfoBackground = 'stop-color:InfoBackground;';
  readonly InfoText = 'stop-color:InfoText;';
  readonly LinkText = 'stop-color:LinkText;';
  readonly Mark = 'stop-color:Mark;';
  readonly MarkText = 'stop-color:MarkText;';
  readonly Menu = 'stop-color:Menu;';
  readonly MenuText = 'stop-color:MenuText;';
  readonly Scrollbar = 'stop-color:Scrollbar;';
  readonly SelectedItem = 'stop-color:SelectedItem;';
  readonly SelectedItemText = 'stop-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'stop-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'stop-color:ThreeDFace;';
  readonly ThreeDHighlight = 'stop-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'stop-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'stop-color:ThreeDShadow;';
  readonly VisitedText = 'stop-color:VisitedText;';
  readonly Window = 'stop-color:Window;';
  readonly WindowFrame = 'stop-color:WindowFrame;';
  readonly WindowText = 'stop-color:WindowText;';
  readonly aliceblue = 'stop-color:aliceblue;';
  readonly antiquewhite = 'stop-color:antiquewhite;';
  readonly aqua = 'stop-color:aqua;';
  readonly aquamarine = 'stop-color:aquamarine;';
  readonly azure = 'stop-color:azure;';
  readonly beige = 'stop-color:beige;';
  readonly bisque = 'stop-color:bisque;';
  readonly black = 'stop-color:black;';
  readonly blanchedalmond = 'stop-color:blanchedalmond;';
  readonly blue = 'stop-color:blue;';
  readonly blueviolet = 'stop-color:blueviolet;';
  readonly brown = 'stop-color:brown;';
  readonly burlywood = 'stop-color:burlywood;';
  readonly cadetblue = 'stop-color:cadetblue;';
  readonly chartreuse = 'stop-color:chartreuse;';
  readonly chocolate = 'stop-color:chocolate;';
  readonly coral = 'stop-color:coral;';
  readonly cornflowerblue = 'stop-color:cornflowerblue;';
  readonly cornsilk = 'stop-color:cornsilk;';
  readonly crimson = 'stop-color:crimson;';
  readonly currentColor = 'stop-color:currentColor;';
  readonly cyan = 'stop-color:cyan;';
  readonly darkblue = 'stop-color:darkblue;';
  readonly darkcyan = 'stop-color:darkcyan;';
  readonly darkgoldenrod = 'stop-color:darkgoldenrod;';
  readonly darkgray = 'stop-color:darkgray;';
  readonly darkgreen = 'stop-color:darkgreen;';
  readonly darkgrey = 'stop-color:darkgrey;';
  readonly darkkhaki = 'stop-color:darkkhaki;';
  readonly darkmagenta = 'stop-color:darkmagenta;';
  readonly darkolivegreen = 'stop-color:darkolivegreen;';
  readonly darkorange = 'stop-color:darkorange;';
  readonly darkorchid = 'stop-color:darkorchid;';
  readonly darkred = 'stop-color:darkred;';
  readonly darksalmon = 'stop-color:darksalmon;';
  readonly darkseagreen = 'stop-color:darkseagreen;';
  readonly darkslateblue = 'stop-color:darkslateblue;';
  readonly darkslategray = 'stop-color:darkslategray;';
  readonly darkslategrey = 'stop-color:darkslategrey;';
  readonly darkturquoise = 'stop-color:darkturquoise;';
  readonly darkviolet = 'stop-color:darkviolet;';
  readonly deeppink = 'stop-color:deeppink;';
  readonly deepskyblue = 'stop-color:deepskyblue;';
  readonly dimgray = 'stop-color:dimgray;';
  readonly dimgrey = 'stop-color:dimgrey;';
  readonly dodgerblue = 'stop-color:dodgerblue;';
  readonly firebrick = 'stop-color:firebrick;';
  readonly floralwhite = 'stop-color:floralwhite;';
  readonly forestgreen = 'stop-color:forestgreen;';
  readonly fuchsia = 'stop-color:fuchsia;';
  readonly gainsboro = 'stop-color:gainsboro;';
  readonly ghostwhite = 'stop-color:ghostwhite;';
  readonly gold = 'stop-color:gold;';
  readonly goldenrod = 'stop-color:goldenrod;';
  readonly gray = 'stop-color:gray;';
  readonly green = 'stop-color:green;';
  readonly greenyellow = 'stop-color:greenyellow;';
  readonly grey = 'stop-color:grey;';
  readonly honeydew = 'stop-color:honeydew;';
  readonly hotpink = 'stop-color:hotpink;';
  readonly indianred = 'stop-color:indianred;';
  readonly indigo = 'stop-color:indigo;';
  readonly inherit = 'stop-color:inherit;';
  readonly initial = 'stop-color:initial;';
  readonly ivory = 'stop-color:ivory;';
  readonly khaki = 'stop-color:khaki;';
  readonly lavender = 'stop-color:lavender;';
  readonly lavenderblush = 'stop-color:lavenderblush;';
  readonly lawngreen = 'stop-color:lawngreen;';
  readonly lemonchiffon = 'stop-color:lemonchiffon;';
  readonly lightblue = 'stop-color:lightblue;';
  readonly lightcoral = 'stop-color:lightcoral;';
  readonly lightcyan = 'stop-color:lightcyan;';
  readonly lightgoldenrodyellow = 'stop-color:lightgoldenrodyellow;';
  readonly lightgray = 'stop-color:lightgray;';
  readonly lightgreen = 'stop-color:lightgreen;';
  readonly lightgrey = 'stop-color:lightgrey;';
  readonly lightpink = 'stop-color:lightpink;';
  readonly lightsalmon = 'stop-color:lightsalmon;';
  readonly lightseagreen = 'stop-color:lightseagreen;';
  readonly lightskyblue = 'stop-color:lightskyblue;';
  readonly lightslategray = 'stop-color:lightslategray;';
  readonly lightslategrey = 'stop-color:lightslategrey;';
  readonly lightsteelblue = 'stop-color:lightsteelblue;';
  readonly lightyellow = 'stop-color:lightyellow;';
  readonly lime = 'stop-color:lime;';
  readonly limegreen = 'stop-color:limegreen;';
  readonly linen = 'stop-color:linen;';
  readonly magenta = 'stop-color:magenta;';
  readonly maroon = 'stop-color:maroon;';
  readonly mediumaquamarine = 'stop-color:mediumaquamarine;';
  readonly mediumblue = 'stop-color:mediumblue;';
  readonly mediumorchid = 'stop-color:mediumorchid;';
  readonly mediumpurple = 'stop-color:mediumpurple;';
  readonly mediumseagreen = 'stop-color:mediumseagreen;';
  readonly mediumslateblue = 'stop-color:mediumslateblue;';
  readonly mediumspringgreen = 'stop-color:mediumspringgreen;';
  readonly mediumturquoise = 'stop-color:mediumturquoise;';
  readonly mediumvioletred = 'stop-color:mediumvioletred;';
  readonly midnightblue = 'stop-color:midnightblue;';
  readonly mintcream = 'stop-color:mintcream;';
  readonly mistyrose = 'stop-color:mistyrose;';
  readonly moccasin = 'stop-color:moccasin;';
  readonly navajowhite = 'stop-color:navajowhite;';
  readonly navy = 'stop-color:navy;';
  readonly oldlace = 'stop-color:oldlace;';
  readonly olive = 'stop-color:olive;';
  readonly olivedrab = 'stop-color:olivedrab;';
  readonly orange = 'stop-color:orange;';
  readonly orangered = 'stop-color:orangered;';
  readonly orchid = 'stop-color:orchid;';
  readonly palegoldenrod = 'stop-color:palegoldenrod;';
  readonly palegreen = 'stop-color:palegreen;';
  readonly paleturquoise = 'stop-color:paleturquoise;';
  readonly palevioletred = 'stop-color:palevioletred;';
  readonly papayawhip = 'stop-color:papayawhip;';
  readonly peachpuff = 'stop-color:peachpuff;';
  readonly peru = 'stop-color:peru;';
  readonly pink = 'stop-color:pink;';
  readonly plum = 'stop-color:plum;';
  readonly powderblue = 'stop-color:powderblue;';
  readonly purple = 'stop-color:purple;';
  readonly rebeccapurple = 'stop-color:rebeccapurple;';
  readonly red = 'stop-color:red;';
  readonly revert = 'stop-color:revert;';
  readonly revertLayer = 'stop-color:revert-layer;';
  readonly rosybrown = 'stop-color:rosybrown;';
  readonly royalblue = 'stop-color:royalblue;';
  readonly saddlebrown = 'stop-color:saddlebrown;';
  readonly salmon = 'stop-color:salmon;';
  readonly sandybrown = 'stop-color:sandybrown;';
  readonly seagreen = 'stop-color:seagreen;';
  readonly seashell = 'stop-color:seashell;';
  readonly sienna = 'stop-color:sienna;';
  readonly silver = 'stop-color:silver;';
  readonly skyblue = 'stop-color:skyblue;';
  readonly slateblue = 'stop-color:slateblue;';
  readonly slategray = 'stop-color:slategray;';
  readonly slategrey = 'stop-color:slategrey;';
  readonly snow = 'stop-color:snow;';
  readonly springgreen = 'stop-color:springgreen;';
  readonly steelblue = 'stop-color:steelblue;';
  readonly tan = 'stop-color:tan;';
  readonly teal = 'stop-color:teal;';
  readonly thistle = 'stop-color:thistle;';
  readonly tomato = 'stop-color:tomato;';
  readonly transparent = 'stop-color:transparent;';
  readonly turquoise = 'stop-color:turquoise;';
  readonly unset = 'stop-color:unset;';
  readonly violet = 'stop-color:violet;';
  readonly wheat = 'stop-color:wheat;';
  readonly white = 'stop-color:white;';
  readonly whitesmoke = 'stop-color:whitesmoke;';
  readonly yellow = 'stop-color:yellow;';
  readonly yellowgreen = 'stop-color:yellowgreen;';
  constructor() {
    super('stop-color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 stop-opacity；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
 */
export class StopOpacityCss extends CssProperty<Property.StopOpacity> {
  readonly inherit = 'stop-opacity:inherit;';
  readonly initial = 'stop-opacity:initial;';
  readonly revert = 'stop-opacity:revert;';
  readonly revertLayer = 'stop-opacity:revert-layer;';
  readonly unset = 'stop-opacity:unset;';
  constructor() {
    super('stop-opacity');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.StopOpacity, number> | (string & {}),
    ...others: (Extract<Property.StopOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.StopOpacity, number> | (string & {}),
    ...others: (Extract<Property.StopOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.StopOpacity, number> | (string & {}),
    preferred: Extract<Property.StopOpacity, number> | (string & {}),
    maximum: Extract<Property.StopOpacity, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 stroke。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
 */
export class StrokeCss extends CssProperty<Property.Stroke> {
  readonly AccentColor = 'stroke:AccentColor;';
  readonly AccentColorText = 'stroke:AccentColorText;';
  readonly ActiveBorder = 'stroke:ActiveBorder;';
  readonly ActiveCaption = 'stroke:ActiveCaption;';
  readonly ActiveText = 'stroke:ActiveText;';
  readonly AppWorkspace = 'stroke:AppWorkspace;';
  readonly Background = 'stroke:Background;';
  readonly ButtonBorder = 'stroke:ButtonBorder;';
  readonly ButtonFace = 'stroke:ButtonFace;';
  readonly ButtonHighlight = 'stroke:ButtonHighlight;';
  readonly ButtonShadow = 'stroke:ButtonShadow;';
  readonly ButtonText = 'stroke:ButtonText;';
  readonly Canvas = 'stroke:Canvas;';
  readonly CanvasText = 'stroke:CanvasText;';
  readonly CaptionText = 'stroke:CaptionText;';
  readonly Field = 'stroke:Field;';
  readonly FieldText = 'stroke:FieldText;';
  readonly GrayText = 'stroke:GrayText;';
  readonly Highlight = 'stroke:Highlight;';
  readonly HighlightText = 'stroke:HighlightText;';
  readonly InactiveBorder = 'stroke:InactiveBorder;';
  readonly InactiveCaption = 'stroke:InactiveCaption;';
  readonly InactiveCaptionText = 'stroke:InactiveCaptionText;';
  readonly InfoBackground = 'stroke:InfoBackground;';
  readonly InfoText = 'stroke:InfoText;';
  readonly LinkText = 'stroke:LinkText;';
  readonly Mark = 'stroke:Mark;';
  readonly MarkText = 'stroke:MarkText;';
  readonly Menu = 'stroke:Menu;';
  readonly MenuText = 'stroke:MenuText;';
  readonly Scrollbar = 'stroke:Scrollbar;';
  readonly SelectedItem = 'stroke:SelectedItem;';
  readonly SelectedItemText = 'stroke:SelectedItemText;';
  readonly ThreeDDarkShadow = 'stroke:ThreeDDarkShadow;';
  readonly ThreeDFace = 'stroke:ThreeDFace;';
  readonly ThreeDHighlight = 'stroke:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'stroke:ThreeDLightShadow;';
  readonly ThreeDShadow = 'stroke:ThreeDShadow;';
  readonly VisitedText = 'stroke:VisitedText;';
  readonly Window = 'stroke:Window;';
  readonly WindowFrame = 'stroke:WindowFrame;';
  readonly WindowText = 'stroke:WindowText;';
  readonly aliceblue = 'stroke:aliceblue;';
  readonly antiquewhite = 'stroke:antiquewhite;';
  readonly aqua = 'stroke:aqua;';
  readonly aquamarine = 'stroke:aquamarine;';
  readonly azure = 'stroke:azure;';
  readonly beige = 'stroke:beige;';
  readonly bisque = 'stroke:bisque;';
  readonly black = 'stroke:black;';
  readonly blanchedalmond = 'stroke:blanchedalmond;';
  readonly blue = 'stroke:blue;';
  readonly blueviolet = 'stroke:blueviolet;';
  readonly brown = 'stroke:brown;';
  readonly burlywood = 'stroke:burlywood;';
  readonly cadetblue = 'stroke:cadetblue;';
  readonly chartreuse = 'stroke:chartreuse;';
  readonly chocolate = 'stroke:chocolate;';
  readonly contextFill = 'stroke:context-fill;';
  readonly contextStroke = 'stroke:context-stroke;';
  readonly coral = 'stroke:coral;';
  readonly cornflowerblue = 'stroke:cornflowerblue;';
  readonly cornsilk = 'stroke:cornsilk;';
  readonly crimson = 'stroke:crimson;';
  readonly currentColor = 'stroke:currentColor;';
  readonly cyan = 'stroke:cyan;';
  readonly darkblue = 'stroke:darkblue;';
  readonly darkcyan = 'stroke:darkcyan;';
  readonly darkgoldenrod = 'stroke:darkgoldenrod;';
  readonly darkgray = 'stroke:darkgray;';
  readonly darkgreen = 'stroke:darkgreen;';
  readonly darkgrey = 'stroke:darkgrey;';
  readonly darkkhaki = 'stroke:darkkhaki;';
  readonly darkmagenta = 'stroke:darkmagenta;';
  readonly darkolivegreen = 'stroke:darkolivegreen;';
  readonly darkorange = 'stroke:darkorange;';
  readonly darkorchid = 'stroke:darkorchid;';
  readonly darkred = 'stroke:darkred;';
  readonly darksalmon = 'stroke:darksalmon;';
  readonly darkseagreen = 'stroke:darkseagreen;';
  readonly darkslateblue = 'stroke:darkslateblue;';
  readonly darkslategray = 'stroke:darkslategray;';
  readonly darkslategrey = 'stroke:darkslategrey;';
  readonly darkturquoise = 'stroke:darkturquoise;';
  readonly darkviolet = 'stroke:darkviolet;';
  readonly deeppink = 'stroke:deeppink;';
  readonly deepskyblue = 'stroke:deepskyblue;';
  readonly dimgray = 'stroke:dimgray;';
  readonly dimgrey = 'stroke:dimgrey;';
  readonly dodgerblue = 'stroke:dodgerblue;';
  readonly firebrick = 'stroke:firebrick;';
  readonly floralwhite = 'stroke:floralwhite;';
  readonly forestgreen = 'stroke:forestgreen;';
  readonly fuchsia = 'stroke:fuchsia;';
  readonly gainsboro = 'stroke:gainsboro;';
  readonly ghostwhite = 'stroke:ghostwhite;';
  readonly gold = 'stroke:gold;';
  readonly goldenrod = 'stroke:goldenrod;';
  readonly gray = 'stroke:gray;';
  readonly green = 'stroke:green;';
  readonly greenyellow = 'stroke:greenyellow;';
  readonly grey = 'stroke:grey;';
  readonly honeydew = 'stroke:honeydew;';
  readonly hotpink = 'stroke:hotpink;';
  readonly indianred = 'stroke:indianred;';
  readonly indigo = 'stroke:indigo;';
  readonly inherit = 'stroke:inherit;';
  readonly initial = 'stroke:initial;';
  readonly ivory = 'stroke:ivory;';
  readonly khaki = 'stroke:khaki;';
  readonly lavender = 'stroke:lavender;';
  readonly lavenderblush = 'stroke:lavenderblush;';
  readonly lawngreen = 'stroke:lawngreen;';
  readonly lemonchiffon = 'stroke:lemonchiffon;';
  readonly lightblue = 'stroke:lightblue;';
  readonly lightcoral = 'stroke:lightcoral;';
  readonly lightcyan = 'stroke:lightcyan;';
  readonly lightgoldenrodyellow = 'stroke:lightgoldenrodyellow;';
  readonly lightgray = 'stroke:lightgray;';
  readonly lightgreen = 'stroke:lightgreen;';
  readonly lightgrey = 'stroke:lightgrey;';
  readonly lightpink = 'stroke:lightpink;';
  readonly lightsalmon = 'stroke:lightsalmon;';
  readonly lightseagreen = 'stroke:lightseagreen;';
  readonly lightskyblue = 'stroke:lightskyblue;';
  readonly lightslategray = 'stroke:lightslategray;';
  readonly lightslategrey = 'stroke:lightslategrey;';
  readonly lightsteelblue = 'stroke:lightsteelblue;';
  readonly lightyellow = 'stroke:lightyellow;';
  readonly lime = 'stroke:lime;';
  readonly limegreen = 'stroke:limegreen;';
  readonly linen = 'stroke:linen;';
  readonly magenta = 'stroke:magenta;';
  readonly maroon = 'stroke:maroon;';
  readonly mediumaquamarine = 'stroke:mediumaquamarine;';
  readonly mediumblue = 'stroke:mediumblue;';
  readonly mediumorchid = 'stroke:mediumorchid;';
  readonly mediumpurple = 'stroke:mediumpurple;';
  readonly mediumseagreen = 'stroke:mediumseagreen;';
  readonly mediumslateblue = 'stroke:mediumslateblue;';
  readonly mediumspringgreen = 'stroke:mediumspringgreen;';
  readonly mediumturquoise = 'stroke:mediumturquoise;';
  readonly mediumvioletred = 'stroke:mediumvioletred;';
  readonly midnightblue = 'stroke:midnightblue;';
  readonly mintcream = 'stroke:mintcream;';
  readonly mistyrose = 'stroke:mistyrose;';
  readonly moccasin = 'stroke:moccasin;';
  readonly navajowhite = 'stroke:navajowhite;';
  readonly navy = 'stroke:navy;';
  readonly none = 'stroke:none;';
  readonly oldlace = 'stroke:oldlace;';
  readonly olive = 'stroke:olive;';
  readonly olivedrab = 'stroke:olivedrab;';
  readonly orange = 'stroke:orange;';
  readonly orangered = 'stroke:orangered;';
  readonly orchid = 'stroke:orchid;';
  readonly palegoldenrod = 'stroke:palegoldenrod;';
  readonly palegreen = 'stroke:palegreen;';
  readonly paleturquoise = 'stroke:paleturquoise;';
  readonly palevioletred = 'stroke:palevioletred;';
  readonly papayawhip = 'stroke:papayawhip;';
  readonly peachpuff = 'stroke:peachpuff;';
  readonly peru = 'stroke:peru;';
  readonly pink = 'stroke:pink;';
  readonly plum = 'stroke:plum;';
  readonly powderblue = 'stroke:powderblue;';
  readonly purple = 'stroke:purple;';
  readonly rebeccapurple = 'stroke:rebeccapurple;';
  readonly red = 'stroke:red;';
  readonly revert = 'stroke:revert;';
  readonly revertLayer = 'stroke:revert-layer;';
  readonly rosybrown = 'stroke:rosybrown;';
  readonly royalblue = 'stroke:royalblue;';
  readonly saddlebrown = 'stroke:saddlebrown;';
  readonly salmon = 'stroke:salmon;';
  readonly sandybrown = 'stroke:sandybrown;';
  readonly seagreen = 'stroke:seagreen;';
  readonly seashell = 'stroke:seashell;';
  readonly sienna = 'stroke:sienna;';
  readonly silver = 'stroke:silver;';
  readonly skyblue = 'stroke:skyblue;';
  readonly slateblue = 'stroke:slateblue;';
  readonly slategray = 'stroke:slategray;';
  readonly slategrey = 'stroke:slategrey;';
  readonly snow = 'stroke:snow;';
  readonly springgreen = 'stroke:springgreen;';
  readonly steelblue = 'stroke:steelblue;';
  readonly tan = 'stroke:tan;';
  readonly teal = 'stroke:teal;';
  readonly thistle = 'stroke:thistle;';
  readonly tomato = 'stroke:tomato;';
  readonly transparent = 'stroke:transparent;';
  readonly turquoise = 'stroke:turquoise;';
  readonly unset = 'stroke:unset;';
  readonly violet = 'stroke:violet;';
  readonly wheat = 'stroke:wheat;';
  readonly white = 'stroke:white;';
  readonly whitesmoke = 'stroke:whitesmoke;';
  readonly yellow = 'stroke:yellow;';
  readonly yellowgreen = 'stroke:yellowgreen;';
  constructor() {
    super('stroke');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 stroke-color；初始值 transparent。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
 */
export class StrokeColorCss extends CssProperty<Property.StrokeColor> {
  readonly AccentColor = 'stroke-color:AccentColor;';
  readonly AccentColorText = 'stroke-color:AccentColorText;';
  readonly ActiveBorder = 'stroke-color:ActiveBorder;';
  readonly ActiveCaption = 'stroke-color:ActiveCaption;';
  readonly ActiveText = 'stroke-color:ActiveText;';
  readonly AppWorkspace = 'stroke-color:AppWorkspace;';
  readonly Background = 'stroke-color:Background;';
  readonly ButtonBorder = 'stroke-color:ButtonBorder;';
  readonly ButtonFace = 'stroke-color:ButtonFace;';
  readonly ButtonHighlight = 'stroke-color:ButtonHighlight;';
  readonly ButtonShadow = 'stroke-color:ButtonShadow;';
  readonly ButtonText = 'stroke-color:ButtonText;';
  readonly Canvas = 'stroke-color:Canvas;';
  readonly CanvasText = 'stroke-color:CanvasText;';
  readonly CaptionText = 'stroke-color:CaptionText;';
  readonly Field = 'stroke-color:Field;';
  readonly FieldText = 'stroke-color:FieldText;';
  readonly GrayText = 'stroke-color:GrayText;';
  readonly Highlight = 'stroke-color:Highlight;';
  readonly HighlightText = 'stroke-color:HighlightText;';
  readonly InactiveBorder = 'stroke-color:InactiveBorder;';
  readonly InactiveCaption = 'stroke-color:InactiveCaption;';
  readonly InactiveCaptionText = 'stroke-color:InactiveCaptionText;';
  readonly InfoBackground = 'stroke-color:InfoBackground;';
  readonly InfoText = 'stroke-color:InfoText;';
  readonly LinkText = 'stroke-color:LinkText;';
  readonly Mark = 'stroke-color:Mark;';
  readonly MarkText = 'stroke-color:MarkText;';
  readonly Menu = 'stroke-color:Menu;';
  readonly MenuText = 'stroke-color:MenuText;';
  readonly Scrollbar = 'stroke-color:Scrollbar;';
  readonly SelectedItem = 'stroke-color:SelectedItem;';
  readonly SelectedItemText = 'stroke-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'stroke-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'stroke-color:ThreeDFace;';
  readonly ThreeDHighlight = 'stroke-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'stroke-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'stroke-color:ThreeDShadow;';
  readonly VisitedText = 'stroke-color:VisitedText;';
  readonly Window = 'stroke-color:Window;';
  readonly WindowFrame = 'stroke-color:WindowFrame;';
  readonly WindowText = 'stroke-color:WindowText;';
  readonly aliceblue = 'stroke-color:aliceblue;';
  readonly antiquewhite = 'stroke-color:antiquewhite;';
  readonly aqua = 'stroke-color:aqua;';
  readonly aquamarine = 'stroke-color:aquamarine;';
  readonly azure = 'stroke-color:azure;';
  readonly beige = 'stroke-color:beige;';
  readonly bisque = 'stroke-color:bisque;';
  readonly black = 'stroke-color:black;';
  readonly blanchedalmond = 'stroke-color:blanchedalmond;';
  readonly blue = 'stroke-color:blue;';
  readonly blueviolet = 'stroke-color:blueviolet;';
  readonly brown = 'stroke-color:brown;';
  readonly burlywood = 'stroke-color:burlywood;';
  readonly cadetblue = 'stroke-color:cadetblue;';
  readonly chartreuse = 'stroke-color:chartreuse;';
  readonly chocolate = 'stroke-color:chocolate;';
  readonly coral = 'stroke-color:coral;';
  readonly cornflowerblue = 'stroke-color:cornflowerblue;';
  readonly cornsilk = 'stroke-color:cornsilk;';
  readonly crimson = 'stroke-color:crimson;';
  readonly currentColor = 'stroke-color:currentColor;';
  readonly cyan = 'stroke-color:cyan;';
  readonly darkblue = 'stroke-color:darkblue;';
  readonly darkcyan = 'stroke-color:darkcyan;';
  readonly darkgoldenrod = 'stroke-color:darkgoldenrod;';
  readonly darkgray = 'stroke-color:darkgray;';
  readonly darkgreen = 'stroke-color:darkgreen;';
  readonly darkgrey = 'stroke-color:darkgrey;';
  readonly darkkhaki = 'stroke-color:darkkhaki;';
  readonly darkmagenta = 'stroke-color:darkmagenta;';
  readonly darkolivegreen = 'stroke-color:darkolivegreen;';
  readonly darkorange = 'stroke-color:darkorange;';
  readonly darkorchid = 'stroke-color:darkorchid;';
  readonly darkred = 'stroke-color:darkred;';
  readonly darksalmon = 'stroke-color:darksalmon;';
  readonly darkseagreen = 'stroke-color:darkseagreen;';
  readonly darkslateblue = 'stroke-color:darkslateblue;';
  readonly darkslategray = 'stroke-color:darkslategray;';
  readonly darkslategrey = 'stroke-color:darkslategrey;';
  readonly darkturquoise = 'stroke-color:darkturquoise;';
  readonly darkviolet = 'stroke-color:darkviolet;';
  readonly deeppink = 'stroke-color:deeppink;';
  readonly deepskyblue = 'stroke-color:deepskyblue;';
  readonly dimgray = 'stroke-color:dimgray;';
  readonly dimgrey = 'stroke-color:dimgrey;';
  readonly dodgerblue = 'stroke-color:dodgerblue;';
  readonly firebrick = 'stroke-color:firebrick;';
  readonly floralwhite = 'stroke-color:floralwhite;';
  readonly forestgreen = 'stroke-color:forestgreen;';
  readonly fuchsia = 'stroke-color:fuchsia;';
  readonly gainsboro = 'stroke-color:gainsboro;';
  readonly ghostwhite = 'stroke-color:ghostwhite;';
  readonly gold = 'stroke-color:gold;';
  readonly goldenrod = 'stroke-color:goldenrod;';
  readonly gray = 'stroke-color:gray;';
  readonly green = 'stroke-color:green;';
  readonly greenyellow = 'stroke-color:greenyellow;';
  readonly grey = 'stroke-color:grey;';
  readonly honeydew = 'stroke-color:honeydew;';
  readonly hotpink = 'stroke-color:hotpink;';
  readonly indianred = 'stroke-color:indianred;';
  readonly indigo = 'stroke-color:indigo;';
  readonly inherit = 'stroke-color:inherit;';
  readonly initial = 'stroke-color:initial;';
  readonly ivory = 'stroke-color:ivory;';
  readonly khaki = 'stroke-color:khaki;';
  readonly lavender = 'stroke-color:lavender;';
  readonly lavenderblush = 'stroke-color:lavenderblush;';
  readonly lawngreen = 'stroke-color:lawngreen;';
  readonly lemonchiffon = 'stroke-color:lemonchiffon;';
  readonly lightblue = 'stroke-color:lightblue;';
  readonly lightcoral = 'stroke-color:lightcoral;';
  readonly lightcyan = 'stroke-color:lightcyan;';
  readonly lightgoldenrodyellow = 'stroke-color:lightgoldenrodyellow;';
  readonly lightgray = 'stroke-color:lightgray;';
  readonly lightgreen = 'stroke-color:lightgreen;';
  readonly lightgrey = 'stroke-color:lightgrey;';
  readonly lightpink = 'stroke-color:lightpink;';
  readonly lightsalmon = 'stroke-color:lightsalmon;';
  readonly lightseagreen = 'stroke-color:lightseagreen;';
  readonly lightskyblue = 'stroke-color:lightskyblue;';
  readonly lightslategray = 'stroke-color:lightslategray;';
  readonly lightslategrey = 'stroke-color:lightslategrey;';
  readonly lightsteelblue = 'stroke-color:lightsteelblue;';
  readonly lightyellow = 'stroke-color:lightyellow;';
  readonly lime = 'stroke-color:lime;';
  readonly limegreen = 'stroke-color:limegreen;';
  readonly linen = 'stroke-color:linen;';
  readonly magenta = 'stroke-color:magenta;';
  readonly maroon = 'stroke-color:maroon;';
  readonly mediumaquamarine = 'stroke-color:mediumaquamarine;';
  readonly mediumblue = 'stroke-color:mediumblue;';
  readonly mediumorchid = 'stroke-color:mediumorchid;';
  readonly mediumpurple = 'stroke-color:mediumpurple;';
  readonly mediumseagreen = 'stroke-color:mediumseagreen;';
  readonly mediumslateblue = 'stroke-color:mediumslateblue;';
  readonly mediumspringgreen = 'stroke-color:mediumspringgreen;';
  readonly mediumturquoise = 'stroke-color:mediumturquoise;';
  readonly mediumvioletred = 'stroke-color:mediumvioletred;';
  readonly midnightblue = 'stroke-color:midnightblue;';
  readonly mintcream = 'stroke-color:mintcream;';
  readonly mistyrose = 'stroke-color:mistyrose;';
  readonly moccasin = 'stroke-color:moccasin;';
  readonly navajowhite = 'stroke-color:navajowhite;';
  readonly navy = 'stroke-color:navy;';
  readonly oldlace = 'stroke-color:oldlace;';
  readonly olive = 'stroke-color:olive;';
  readonly olivedrab = 'stroke-color:olivedrab;';
  readonly orange = 'stroke-color:orange;';
  readonly orangered = 'stroke-color:orangered;';
  readonly orchid = 'stroke-color:orchid;';
  readonly palegoldenrod = 'stroke-color:palegoldenrod;';
  readonly palegreen = 'stroke-color:palegreen;';
  readonly paleturquoise = 'stroke-color:paleturquoise;';
  readonly palevioletred = 'stroke-color:palevioletred;';
  readonly papayawhip = 'stroke-color:papayawhip;';
  readonly peachpuff = 'stroke-color:peachpuff;';
  readonly peru = 'stroke-color:peru;';
  readonly pink = 'stroke-color:pink;';
  readonly plum = 'stroke-color:plum;';
  readonly powderblue = 'stroke-color:powderblue;';
  readonly purple = 'stroke-color:purple;';
  readonly rebeccapurple = 'stroke-color:rebeccapurple;';
  readonly red = 'stroke-color:red;';
  readonly revert = 'stroke-color:revert;';
  readonly revertLayer = 'stroke-color:revert-layer;';
  readonly rosybrown = 'stroke-color:rosybrown;';
  readonly royalblue = 'stroke-color:royalblue;';
  readonly saddlebrown = 'stroke-color:saddlebrown;';
  readonly salmon = 'stroke-color:salmon;';
  readonly sandybrown = 'stroke-color:sandybrown;';
  readonly seagreen = 'stroke-color:seagreen;';
  readonly seashell = 'stroke-color:seashell;';
  readonly sienna = 'stroke-color:sienna;';
  readonly silver = 'stroke-color:silver;';
  readonly skyblue = 'stroke-color:skyblue;';
  readonly slateblue = 'stroke-color:slateblue;';
  readonly slategray = 'stroke-color:slategray;';
  readonly slategrey = 'stroke-color:slategrey;';
  readonly snow = 'stroke-color:snow;';
  readonly springgreen = 'stroke-color:springgreen;';
  readonly steelblue = 'stroke-color:steelblue;';
  readonly tan = 'stroke-color:tan;';
  readonly teal = 'stroke-color:teal;';
  readonly thistle = 'stroke-color:thistle;';
  readonly tomato = 'stroke-color:tomato;';
  readonly transparent = 'stroke-color:transparent;';
  readonly turquoise = 'stroke-color:turquoise;';
  readonly unset = 'stroke-color:unset;';
  readonly violet = 'stroke-color:violet;';
  readonly wheat = 'stroke-color:wheat;';
  readonly white = 'stroke-color:white;';
  readonly whitesmoke = 'stroke-color:whitesmoke;';
  readonly yellow = 'stroke-color:yellow;';
  readonly yellowgreen = 'stroke-color:yellowgreen;';
  constructor() {
    super('stroke-color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 stroke-dasharray；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
 */
export class StrokeDasharrayCss extends LengthCssProperty<Property.StrokeDasharray> {
  readonly inherit = 'stroke-dasharray:inherit;';
  readonly initial = 'stroke-dasharray:initial;';
  readonly none = 'stroke-dasharray:none;';
  readonly revert = 'stroke-dasharray:revert;';
  readonly revertLayer = 'stroke-dasharray:revert-layer;';
  readonly unset = 'stroke-dasharray:unset;';
  constructor() {
    super('stroke-dasharray');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.StrokeDasharray, number> | (string & {}),
    ...others: (Extract<Property.StrokeDasharray, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.StrokeDasharray, number> | (string & {}),
    ...others: (Extract<Property.StrokeDasharray, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.StrokeDasharray, number> | (string & {}),
    preferred: Extract<Property.StrokeDasharray, number> | (string & {}),
    maximum: Extract<Property.StrokeDasharray, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 stroke-dashoffset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
 */
export class StrokeDashoffsetCss extends LengthCssProperty<Property.StrokeDashoffset> {
  readonly inherit = 'stroke-dashoffset:inherit;';
  readonly initial = 'stroke-dashoffset:initial;';
  readonly revert = 'stroke-dashoffset:revert;';
  readonly revertLayer = 'stroke-dashoffset:revert-layer;';
  readonly unset = 'stroke-dashoffset:unset;';
  constructor() {
    super('stroke-dashoffset');
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
    value: Extract<Property.StrokeDashoffset, number> | (string & {}),
    ...others: (Extract<Property.StrokeDashoffset, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.StrokeDashoffset, number> | (string & {}),
    ...others: (Extract<Property.StrokeDashoffset, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.StrokeDashoffset, number> | (string & {}),
    preferred: Extract<Property.StrokeDashoffset, number> | (string & {}),
    maximum: Extract<Property.StrokeDashoffset, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 stroke-linecap；初始值 butt。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
 */
export class StrokeLinecapCss extends CssProperty<Property.StrokeLinecap> {
  readonly butt = 'stroke-linecap:butt;';
  readonly inherit = 'stroke-linecap:inherit;';
  readonly initial = 'stroke-linecap:initial;';
  readonly revert = 'stroke-linecap:revert;';
  readonly revertLayer = 'stroke-linecap:revert-layer;';
  readonly round = 'stroke-linecap:round;';
  readonly square = 'stroke-linecap:square;';
  readonly unset = 'stroke-linecap:unset;';
  constructor() {
    super('stroke-linecap');
  }
}

/** CSS 属性 stroke-linejoin；初始值 miter。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
 */
export class StrokeLinejoinCss extends CssProperty<Property.StrokeLinejoin> {
  readonly arcs = 'stroke-linejoin:arcs;';
  readonly bevel = 'stroke-linejoin:bevel;';
  readonly inherit = 'stroke-linejoin:inherit;';
  readonly initial = 'stroke-linejoin:initial;';
  readonly miter = 'stroke-linejoin:miter;';
  readonly miterClip = 'stroke-linejoin:miter-clip;';
  readonly revert = 'stroke-linejoin:revert;';
  readonly revertLayer = 'stroke-linejoin:revert-layer;';
  readonly round = 'stroke-linejoin:round;';
  readonly unset = 'stroke-linejoin:unset;';
  constructor() {
    super('stroke-linejoin');
  }
}

/** CSS 属性 stroke-miterlimit；初始值 4。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
 */
export class StrokeMiterlimitCss extends CssProperty<Property.StrokeMiterlimit> {
  readonly inherit = 'stroke-miterlimit:inherit;';
  readonly initial = 'stroke-miterlimit:initial;';
  readonly revert = 'stroke-miterlimit:revert;';
  readonly revertLayer = 'stroke-miterlimit:revert-layer;';
  readonly unset = 'stroke-miterlimit:unset;';
  constructor() {
    super('stroke-miterlimit');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.StrokeMiterlimit, number> | (string & {}),
    ...others: (Extract<Property.StrokeMiterlimit, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.StrokeMiterlimit, number> | (string & {}),
    ...others: (Extract<Property.StrokeMiterlimit, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.StrokeMiterlimit, number> | (string & {}),
    preferred: Extract<Property.StrokeMiterlimit, number> | (string & {}),
    maximum: Extract<Property.StrokeMiterlimit, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 stroke-opacity；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
 */
export class StrokeOpacityCss extends CssProperty<Property.StrokeOpacity> {
  readonly inherit = 'stroke-opacity:inherit;';
  readonly initial = 'stroke-opacity:initial;';
  readonly revert = 'stroke-opacity:revert;';
  readonly revertLayer = 'stroke-opacity:revert-layer;';
  readonly unset = 'stroke-opacity:unset;';
  constructor() {
    super('stroke-opacity');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.StrokeOpacity, number> | (string & {}),
    ...others: (Extract<Property.StrokeOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.StrokeOpacity, number> | (string & {}),
    ...others: (Extract<Property.StrokeOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.StrokeOpacity, number> | (string & {}),
    preferred: Extract<Property.StrokeOpacity, number> | (string & {}),
    maximum: Extract<Property.StrokeOpacity, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 stroke-width；初始值 1px。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
 */
export class StrokeWidthCss extends LengthCssProperty<Property.StrokeWidth> {
  readonly inherit = 'stroke-width:inherit;';
  readonly initial = 'stroke-width:initial;';
  readonly revert = 'stroke-width:revert;';
  readonly revertLayer = 'stroke-width:revert-layer;';
  readonly unset = 'stroke-width:unset;';
  constructor() {
    super('stroke-width');
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
    value: Extract<Property.StrokeWidth, number> | (string & {}),
    ...others: (Extract<Property.StrokeWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.StrokeWidth, number> | (string & {}),
    ...others: (Extract<Property.StrokeWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.StrokeWidth, number> | (string & {}),
    preferred: Extract<Property.StrokeWidth, number> | (string & {}),
    maximum: Extract<Property.StrokeWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 tab-size；初始值 8。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
 */
export class TabSizeCss extends LengthCssProperty<Property.TabSize> {
  readonly inherit = 'tab-size:inherit;';
  readonly initial = 'tab-size:initial;';
  readonly revert = 'tab-size:revert;';
  readonly revertLayer = 'tab-size:revert-layer;';
  readonly unset = 'tab-size:unset;';
  constructor() {
    super('tab-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.TabSize, number> | (string & {}),
    ...others: (Extract<Property.TabSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TabSize, number> | (string & {}),
    ...others: (Extract<Property.TabSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TabSize, number> | (string & {}),
    preferred: Extract<Property.TabSize, number> | (string & {}),
    maximum: Extract<Property.TabSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 table-layout；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
 */
export class TableLayoutCss extends CssProperty<Property.TableLayout> {
  readonly auto = 'table-layout:auto;';
  readonly fixed = 'table-layout:fixed;';
  readonly inherit = 'table-layout:inherit;';
  readonly initial = 'table-layout:initial;';
  readonly revert = 'table-layout:revert;';
  readonly revertLayer = 'table-layout:revert-layer;';
  readonly unset = 'table-layout:unset;';
  constructor() {
    super('table-layout');
  }
}

/** CSS 属性 text-align；初始值 start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
 */
export class TextAlignCss extends CssProperty<Property.TextAlign> {
  readonly KhtmlCenter = 'text-align:-khtml-center;';
  readonly KhtmlLeft = 'text-align:-khtml-left;';
  readonly KhtmlRight = 'text-align:-khtml-right;';
  readonly center = 'text-align:center;';
  readonly end = 'text-align:end;';
  readonly inherit = 'text-align:inherit;';
  readonly initial = 'text-align:initial;';
  readonly justify = 'text-align:justify;';
  readonly left = 'text-align:left;';
  readonly matchParent = 'text-align:match-parent;';
  readonly revert = 'text-align:revert;';
  readonly revertLayer = 'text-align:revert-layer;';
  readonly right = 'text-align:right;';
  readonly start = 'text-align:start;';
  readonly unset = 'text-align:unset;';
  constructor() {
    super('text-align');
  }
}

/** CSS 属性 text-align-last；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
 */
export class TextAlignLastCss extends CssProperty<Property.TextAlignLast> {
  readonly auto = 'text-align-last:auto;';
  readonly center = 'text-align-last:center;';
  readonly end = 'text-align-last:end;';
  readonly inherit = 'text-align-last:inherit;';
  readonly initial = 'text-align-last:initial;';
  readonly justify = 'text-align-last:justify;';
  readonly left = 'text-align-last:left;';
  readonly revert = 'text-align-last:revert;';
  readonly revertLayer = 'text-align-last:revert-layer;';
  readonly right = 'text-align-last:right;';
  readonly start = 'text-align-last:start;';
  readonly unset = 'text-align-last:unset;';
  constructor() {
    super('text-align-last');
  }
}

/** CSS 属性 text-anchor；初始值 start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
 */
export class TextAnchorCss extends CssProperty<Property.TextAnchor> {
  readonly end = 'text-anchor:end;';
  readonly inherit = 'text-anchor:inherit;';
  readonly initial = 'text-anchor:initial;';
  readonly middle = 'text-anchor:middle;';
  readonly revert = 'text-anchor:revert;';
  readonly revertLayer = 'text-anchor:revert-layer;';
  readonly start = 'text-anchor:start;';
  readonly unset = 'text-anchor:unset;';
  constructor() {
    super('text-anchor');
  }
}

/** CSS 属性 text-autospace；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
 */
export class TextAutospaceCss extends CssProperty<Property.TextAutospace> {
  readonly auto = 'text-autospace:auto;';
  readonly ideographAlpha = 'text-autospace:ideograph-alpha;';
  readonly ideographNumeric = 'text-autospace:ideograph-numeric;';
  readonly inherit = 'text-autospace:inherit;';
  readonly initial = 'text-autospace:initial;';
  readonly insert = 'text-autospace:insert;';
  readonly noAutospace = 'text-autospace:no-autospace;';
  readonly normal = 'text-autospace:normal;';
  readonly punctuation = 'text-autospace:punctuation;';
  readonly replace = 'text-autospace:replace;';
  readonly revert = 'text-autospace:revert;';
  readonly revertLayer = 'text-autospace:revert-layer;';
  readonly unset = 'text-autospace:unset;';
  constructor() {
    super('text-autospace');
  }
}

/** CSS 属性 text-box；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
 */
export class TextBoxCss extends CssProperty<Property.TextBox> {
  readonly auto = 'text-box:auto;';
  readonly cap = 'text-box:cap;';
  readonly ex = 'text-box:ex;';
  readonly ideographic = 'text-box:ideographic;';
  readonly ideographicInk = 'text-box:ideographic-ink;';
  readonly inherit = 'text-box:inherit;';
  readonly initial = 'text-box:initial;';
  readonly none = 'text-box:none;';
  readonly normal = 'text-box:normal;';
  readonly revert = 'text-box:revert;';
  readonly revertLayer = 'text-box:revert-layer;';
  readonly text = 'text-box:text;';
  readonly trimBoth = 'text-box:trim-both;';
  readonly trimEnd = 'text-box:trim-end;';
  readonly trimStart = 'text-box:trim-start;';
  readonly unset = 'text-box:unset;';
  constructor() {
    super('text-box');
  }
}

/** CSS 属性 text-box-edge；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
 */
export class TextBoxEdgeCss extends CssProperty<Property.TextBoxEdge> {
  readonly auto = 'text-box-edge:auto;';
  readonly cap = 'text-box-edge:cap;';
  readonly ex = 'text-box-edge:ex;';
  readonly ideographic = 'text-box-edge:ideographic;';
  readonly ideographicInk = 'text-box-edge:ideographic-ink;';
  readonly inherit = 'text-box-edge:inherit;';
  readonly initial = 'text-box-edge:initial;';
  readonly revert = 'text-box-edge:revert;';
  readonly revertLayer = 'text-box-edge:revert-layer;';
  readonly text = 'text-box-edge:text;';
  readonly unset = 'text-box-edge:unset;';
  constructor() {
    super('text-box-edge');
  }
}

/** CSS 属性 text-box-trim；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
 */
export class TextBoxTrimCss extends CssProperty<Property.TextBoxTrim> {
  readonly inherit = 'text-box-trim:inherit;';
  readonly initial = 'text-box-trim:initial;';
  readonly none = 'text-box-trim:none;';
  readonly revert = 'text-box-trim:revert;';
  readonly revertLayer = 'text-box-trim:revert-layer;';
  readonly trimBoth = 'text-box-trim:trim-both;';
  readonly trimEnd = 'text-box-trim:trim-end;';
  readonly trimStart = 'text-box-trim:trim-start;';
  readonly unset = 'text-box-trim:unset;';
  constructor() {
    super('text-box-trim');
  }
}

/** CSS 属性 text-combine-upright；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
 */
export class TextCombineUprightCss extends CssProperty<Property.TextCombineUpright> {
  readonly all = 'text-combine-upright:all;';
  readonly digits = 'text-combine-upright:digits;';
  readonly inherit = 'text-combine-upright:inherit;';
  readonly initial = 'text-combine-upright:initial;';
  readonly none = 'text-combine-upright:none;';
  readonly revert = 'text-combine-upright:revert;';
  readonly revertLayer = 'text-combine-upright:revert-layer;';
  readonly unset = 'text-combine-upright:unset;';
  constructor() {
    super('text-combine-upright');
  }
}

/** CSS 属性 text-decoration。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
 */
export class TextDecorationCss extends LengthCssProperty<Property.TextDecoration> {
  readonly AccentColor = 'text-decoration:AccentColor;';
  readonly AccentColorText = 'text-decoration:AccentColorText;';
  readonly ActiveBorder = 'text-decoration:ActiveBorder;';
  readonly ActiveCaption = 'text-decoration:ActiveCaption;';
  readonly ActiveText = 'text-decoration:ActiveText;';
  readonly AppWorkspace = 'text-decoration:AppWorkspace;';
  readonly Background = 'text-decoration:Background;';
  readonly ButtonBorder = 'text-decoration:ButtonBorder;';
  readonly ButtonFace = 'text-decoration:ButtonFace;';
  readonly ButtonHighlight = 'text-decoration:ButtonHighlight;';
  readonly ButtonShadow = 'text-decoration:ButtonShadow;';
  readonly ButtonText = 'text-decoration:ButtonText;';
  readonly Canvas = 'text-decoration:Canvas;';
  readonly CanvasText = 'text-decoration:CanvasText;';
  readonly CaptionText = 'text-decoration:CaptionText;';
  readonly Field = 'text-decoration:Field;';
  readonly FieldText = 'text-decoration:FieldText;';
  readonly GrayText = 'text-decoration:GrayText;';
  readonly Highlight = 'text-decoration:Highlight;';
  readonly HighlightText = 'text-decoration:HighlightText;';
  readonly InactiveBorder = 'text-decoration:InactiveBorder;';
  readonly InactiveCaption = 'text-decoration:InactiveCaption;';
  readonly InactiveCaptionText = 'text-decoration:InactiveCaptionText;';
  readonly InfoBackground = 'text-decoration:InfoBackground;';
  readonly InfoText = 'text-decoration:InfoText;';
  readonly LinkText = 'text-decoration:LinkText;';
  readonly Mark = 'text-decoration:Mark;';
  readonly MarkText = 'text-decoration:MarkText;';
  readonly Menu = 'text-decoration:Menu;';
  readonly MenuText = 'text-decoration:MenuText;';
  readonly Scrollbar = 'text-decoration:Scrollbar;';
  readonly SelectedItem = 'text-decoration:SelectedItem;';
  readonly SelectedItemText = 'text-decoration:SelectedItemText;';
  readonly ThreeDDarkShadow = 'text-decoration:ThreeDDarkShadow;';
  readonly ThreeDFace = 'text-decoration:ThreeDFace;';
  readonly ThreeDHighlight = 'text-decoration:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'text-decoration:ThreeDLightShadow;';
  readonly ThreeDShadow = 'text-decoration:ThreeDShadow;';
  readonly VisitedText = 'text-decoration:VisitedText;';
  readonly Window = 'text-decoration:Window;';
  readonly WindowFrame = 'text-decoration:WindowFrame;';
  readonly WindowText = 'text-decoration:WindowText;';
  readonly aliceblue = 'text-decoration:aliceblue;';
  readonly antiquewhite = 'text-decoration:antiquewhite;';
  readonly aqua = 'text-decoration:aqua;';
  readonly aquamarine = 'text-decoration:aquamarine;';
  readonly auto = 'text-decoration:auto;';
  readonly azure = 'text-decoration:azure;';
  readonly beige = 'text-decoration:beige;';
  readonly bisque = 'text-decoration:bisque;';
  readonly black = 'text-decoration:black;';
  readonly blanchedalmond = 'text-decoration:blanchedalmond;';
  readonly blink = 'text-decoration:blink;';
  readonly blue = 'text-decoration:blue;';
  readonly blueviolet = 'text-decoration:blueviolet;';
  readonly brown = 'text-decoration:brown;';
  readonly burlywood = 'text-decoration:burlywood;';
  readonly cadetblue = 'text-decoration:cadetblue;';
  readonly chartreuse = 'text-decoration:chartreuse;';
  readonly chocolate = 'text-decoration:chocolate;';
  readonly coral = 'text-decoration:coral;';
  readonly cornflowerblue = 'text-decoration:cornflowerblue;';
  readonly cornsilk = 'text-decoration:cornsilk;';
  readonly crimson = 'text-decoration:crimson;';
  readonly currentColor = 'text-decoration:currentColor;';
  readonly cyan = 'text-decoration:cyan;';
  readonly darkblue = 'text-decoration:darkblue;';
  readonly darkcyan = 'text-decoration:darkcyan;';
  readonly darkgoldenrod = 'text-decoration:darkgoldenrod;';
  readonly darkgray = 'text-decoration:darkgray;';
  readonly darkgreen = 'text-decoration:darkgreen;';
  readonly darkgrey = 'text-decoration:darkgrey;';
  readonly darkkhaki = 'text-decoration:darkkhaki;';
  readonly darkmagenta = 'text-decoration:darkmagenta;';
  readonly darkolivegreen = 'text-decoration:darkolivegreen;';
  readonly darkorange = 'text-decoration:darkorange;';
  readonly darkorchid = 'text-decoration:darkorchid;';
  readonly darkred = 'text-decoration:darkred;';
  readonly darksalmon = 'text-decoration:darksalmon;';
  readonly darkseagreen = 'text-decoration:darkseagreen;';
  readonly darkslateblue = 'text-decoration:darkslateblue;';
  readonly darkslategray = 'text-decoration:darkslategray;';
  readonly darkslategrey = 'text-decoration:darkslategrey;';
  readonly darkturquoise = 'text-decoration:darkturquoise;';
  readonly darkviolet = 'text-decoration:darkviolet;';
  readonly dashed = 'text-decoration:dashed;';
  readonly deeppink = 'text-decoration:deeppink;';
  readonly deepskyblue = 'text-decoration:deepskyblue;';
  readonly dimgray = 'text-decoration:dimgray;';
  readonly dimgrey = 'text-decoration:dimgrey;';
  readonly dodgerblue = 'text-decoration:dodgerblue;';
  readonly dotted = 'text-decoration:dotted;';
  readonly double = 'text-decoration:double;';
  readonly firebrick = 'text-decoration:firebrick;';
  readonly floralwhite = 'text-decoration:floralwhite;';
  readonly forestgreen = 'text-decoration:forestgreen;';
  readonly fromFont = 'text-decoration:from-font;';
  readonly fuchsia = 'text-decoration:fuchsia;';
  readonly gainsboro = 'text-decoration:gainsboro;';
  readonly ghostwhite = 'text-decoration:ghostwhite;';
  readonly gold = 'text-decoration:gold;';
  readonly goldenrod = 'text-decoration:goldenrod;';
  readonly grammarError = 'text-decoration:grammar-error;';
  readonly gray = 'text-decoration:gray;';
  readonly green = 'text-decoration:green;';
  readonly greenyellow = 'text-decoration:greenyellow;';
  readonly grey = 'text-decoration:grey;';
  readonly honeydew = 'text-decoration:honeydew;';
  readonly hotpink = 'text-decoration:hotpink;';
  readonly indianred = 'text-decoration:indianred;';
  readonly indigo = 'text-decoration:indigo;';
  readonly inherit = 'text-decoration:inherit;';
  readonly initial = 'text-decoration:initial;';
  readonly ivory = 'text-decoration:ivory;';
  readonly khaki = 'text-decoration:khaki;';
  readonly lavender = 'text-decoration:lavender;';
  readonly lavenderblush = 'text-decoration:lavenderblush;';
  readonly lawngreen = 'text-decoration:lawngreen;';
  readonly lemonchiffon = 'text-decoration:lemonchiffon;';
  readonly lightblue = 'text-decoration:lightblue;';
  readonly lightcoral = 'text-decoration:lightcoral;';
  readonly lightcyan = 'text-decoration:lightcyan;';
  readonly lightgoldenrodyellow = 'text-decoration:lightgoldenrodyellow;';
  readonly lightgray = 'text-decoration:lightgray;';
  readonly lightgreen = 'text-decoration:lightgreen;';
  readonly lightgrey = 'text-decoration:lightgrey;';
  readonly lightpink = 'text-decoration:lightpink;';
  readonly lightsalmon = 'text-decoration:lightsalmon;';
  readonly lightseagreen = 'text-decoration:lightseagreen;';
  readonly lightskyblue = 'text-decoration:lightskyblue;';
  readonly lightslategray = 'text-decoration:lightslategray;';
  readonly lightslategrey = 'text-decoration:lightslategrey;';
  readonly lightsteelblue = 'text-decoration:lightsteelblue;';
  readonly lightyellow = 'text-decoration:lightyellow;';
  readonly lime = 'text-decoration:lime;';
  readonly limegreen = 'text-decoration:limegreen;';
  readonly lineThrough = 'text-decoration:line-through;';
  readonly linen = 'text-decoration:linen;';
  readonly magenta = 'text-decoration:magenta;';
  readonly maroon = 'text-decoration:maroon;';
  readonly mediumaquamarine = 'text-decoration:mediumaquamarine;';
  readonly mediumblue = 'text-decoration:mediumblue;';
  readonly mediumorchid = 'text-decoration:mediumorchid;';
  readonly mediumpurple = 'text-decoration:mediumpurple;';
  readonly mediumseagreen = 'text-decoration:mediumseagreen;';
  readonly mediumslateblue = 'text-decoration:mediumslateblue;';
  readonly mediumspringgreen = 'text-decoration:mediumspringgreen;';
  readonly mediumturquoise = 'text-decoration:mediumturquoise;';
  readonly mediumvioletred = 'text-decoration:mediumvioletred;';
  readonly midnightblue = 'text-decoration:midnightblue;';
  readonly mintcream = 'text-decoration:mintcream;';
  readonly mistyrose = 'text-decoration:mistyrose;';
  readonly moccasin = 'text-decoration:moccasin;';
  readonly navajowhite = 'text-decoration:navajowhite;';
  readonly navy = 'text-decoration:navy;';
  readonly none = 'text-decoration:none;';
  readonly oldlace = 'text-decoration:oldlace;';
  readonly olive = 'text-decoration:olive;';
  readonly olivedrab = 'text-decoration:olivedrab;';
  readonly orange = 'text-decoration:orange;';
  readonly orangered = 'text-decoration:orangered;';
  readonly orchid = 'text-decoration:orchid;';
  readonly overline = 'text-decoration:overline;';
  readonly palegoldenrod = 'text-decoration:palegoldenrod;';
  readonly palegreen = 'text-decoration:palegreen;';
  readonly paleturquoise = 'text-decoration:paleturquoise;';
  readonly palevioletred = 'text-decoration:palevioletred;';
  readonly papayawhip = 'text-decoration:papayawhip;';
  readonly peachpuff = 'text-decoration:peachpuff;';
  readonly peru = 'text-decoration:peru;';
  readonly pink = 'text-decoration:pink;';
  readonly plum = 'text-decoration:plum;';
  readonly powderblue = 'text-decoration:powderblue;';
  readonly purple = 'text-decoration:purple;';
  readonly rebeccapurple = 'text-decoration:rebeccapurple;';
  readonly red = 'text-decoration:red;';
  readonly revert = 'text-decoration:revert;';
  readonly revertLayer = 'text-decoration:revert-layer;';
  readonly rosybrown = 'text-decoration:rosybrown;';
  readonly royalblue = 'text-decoration:royalblue;';
  readonly saddlebrown = 'text-decoration:saddlebrown;';
  readonly salmon = 'text-decoration:salmon;';
  readonly sandybrown = 'text-decoration:sandybrown;';
  readonly seagreen = 'text-decoration:seagreen;';
  readonly seashell = 'text-decoration:seashell;';
  readonly sienna = 'text-decoration:sienna;';
  readonly silver = 'text-decoration:silver;';
  readonly skyblue = 'text-decoration:skyblue;';
  readonly slateblue = 'text-decoration:slateblue;';
  readonly slategray = 'text-decoration:slategray;';
  readonly slategrey = 'text-decoration:slategrey;';
  readonly snow = 'text-decoration:snow;';
  readonly solid = 'text-decoration:solid;';
  readonly spellingError = 'text-decoration:spelling-error;';
  readonly springgreen = 'text-decoration:springgreen;';
  readonly steelblue = 'text-decoration:steelblue;';
  readonly tan = 'text-decoration:tan;';
  readonly teal = 'text-decoration:teal;';
  readonly thistle = 'text-decoration:thistle;';
  readonly tomato = 'text-decoration:tomato;';
  readonly transparent = 'text-decoration:transparent;';
  readonly turquoise = 'text-decoration:turquoise;';
  readonly underline = 'text-decoration:underline;';
  readonly unset = 'text-decoration:unset;';
  readonly violet = 'text-decoration:violet;';
  readonly wavy = 'text-decoration:wavy;';
  readonly wheat = 'text-decoration:wheat;';
  readonly white = 'text-decoration:white;';
  readonly whitesmoke = 'text-decoration:whitesmoke;';
  readonly yellow = 'text-decoration:yellow;';
  readonly yellowgreen = 'text-decoration:yellowgreen;';
  constructor() {
    super('text-decoration');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.TextDecoration, number> | (string & {}),
    ...others: (Extract<Property.TextDecoration, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TextDecoration, number> | (string & {}),
    ...others: (Extract<Property.TextDecoration, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TextDecoration, number> | (string & {}),
    preferred: Extract<Property.TextDecoration, number> | (string & {}),
    maximum: Extract<Property.TextDecoration, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 text-decoration-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
 */
export class TextDecorationColorCss extends CssProperty<Property.TextDecorationColor> {
  readonly AccentColor = 'text-decoration-color:AccentColor;';
  readonly AccentColorText = 'text-decoration-color:AccentColorText;';
  readonly ActiveBorder = 'text-decoration-color:ActiveBorder;';
  readonly ActiveCaption = 'text-decoration-color:ActiveCaption;';
  readonly ActiveText = 'text-decoration-color:ActiveText;';
  readonly AppWorkspace = 'text-decoration-color:AppWorkspace;';
  readonly Background = 'text-decoration-color:Background;';
  readonly ButtonBorder = 'text-decoration-color:ButtonBorder;';
  readonly ButtonFace = 'text-decoration-color:ButtonFace;';
  readonly ButtonHighlight = 'text-decoration-color:ButtonHighlight;';
  readonly ButtonShadow = 'text-decoration-color:ButtonShadow;';
  readonly ButtonText = 'text-decoration-color:ButtonText;';
  readonly Canvas = 'text-decoration-color:Canvas;';
  readonly CanvasText = 'text-decoration-color:CanvasText;';
  readonly CaptionText = 'text-decoration-color:CaptionText;';
  readonly Field = 'text-decoration-color:Field;';
  readonly FieldText = 'text-decoration-color:FieldText;';
  readonly GrayText = 'text-decoration-color:GrayText;';
  readonly Highlight = 'text-decoration-color:Highlight;';
  readonly HighlightText = 'text-decoration-color:HighlightText;';
  readonly InactiveBorder = 'text-decoration-color:InactiveBorder;';
  readonly InactiveCaption = 'text-decoration-color:InactiveCaption;';
  readonly InactiveCaptionText = 'text-decoration-color:InactiveCaptionText;';
  readonly InfoBackground = 'text-decoration-color:InfoBackground;';
  readonly InfoText = 'text-decoration-color:InfoText;';
  readonly LinkText = 'text-decoration-color:LinkText;';
  readonly Mark = 'text-decoration-color:Mark;';
  readonly MarkText = 'text-decoration-color:MarkText;';
  readonly Menu = 'text-decoration-color:Menu;';
  readonly MenuText = 'text-decoration-color:MenuText;';
  readonly Scrollbar = 'text-decoration-color:Scrollbar;';
  readonly SelectedItem = 'text-decoration-color:SelectedItem;';
  readonly SelectedItemText = 'text-decoration-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'text-decoration-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'text-decoration-color:ThreeDFace;';
  readonly ThreeDHighlight = 'text-decoration-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'text-decoration-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'text-decoration-color:ThreeDShadow;';
  readonly VisitedText = 'text-decoration-color:VisitedText;';
  readonly Window = 'text-decoration-color:Window;';
  readonly WindowFrame = 'text-decoration-color:WindowFrame;';
  readonly WindowText = 'text-decoration-color:WindowText;';
  readonly aliceblue = 'text-decoration-color:aliceblue;';
  readonly antiquewhite = 'text-decoration-color:antiquewhite;';
  readonly aqua = 'text-decoration-color:aqua;';
  readonly aquamarine = 'text-decoration-color:aquamarine;';
  readonly azure = 'text-decoration-color:azure;';
  readonly beige = 'text-decoration-color:beige;';
  readonly bisque = 'text-decoration-color:bisque;';
  readonly black = 'text-decoration-color:black;';
  readonly blanchedalmond = 'text-decoration-color:blanchedalmond;';
  readonly blue = 'text-decoration-color:blue;';
  readonly blueviolet = 'text-decoration-color:blueviolet;';
  readonly brown = 'text-decoration-color:brown;';
  readonly burlywood = 'text-decoration-color:burlywood;';
  readonly cadetblue = 'text-decoration-color:cadetblue;';
  readonly chartreuse = 'text-decoration-color:chartreuse;';
  readonly chocolate = 'text-decoration-color:chocolate;';
  readonly coral = 'text-decoration-color:coral;';
  readonly cornflowerblue = 'text-decoration-color:cornflowerblue;';
  readonly cornsilk = 'text-decoration-color:cornsilk;';
  readonly crimson = 'text-decoration-color:crimson;';
  readonly currentColor = 'text-decoration-color:currentColor;';
  readonly cyan = 'text-decoration-color:cyan;';
  readonly darkblue = 'text-decoration-color:darkblue;';
  readonly darkcyan = 'text-decoration-color:darkcyan;';
  readonly darkgoldenrod = 'text-decoration-color:darkgoldenrod;';
  readonly darkgray = 'text-decoration-color:darkgray;';
  readonly darkgreen = 'text-decoration-color:darkgreen;';
  readonly darkgrey = 'text-decoration-color:darkgrey;';
  readonly darkkhaki = 'text-decoration-color:darkkhaki;';
  readonly darkmagenta = 'text-decoration-color:darkmagenta;';
  readonly darkolivegreen = 'text-decoration-color:darkolivegreen;';
  readonly darkorange = 'text-decoration-color:darkorange;';
  readonly darkorchid = 'text-decoration-color:darkorchid;';
  readonly darkred = 'text-decoration-color:darkred;';
  readonly darksalmon = 'text-decoration-color:darksalmon;';
  readonly darkseagreen = 'text-decoration-color:darkseagreen;';
  readonly darkslateblue = 'text-decoration-color:darkslateblue;';
  readonly darkslategray = 'text-decoration-color:darkslategray;';
  readonly darkslategrey = 'text-decoration-color:darkslategrey;';
  readonly darkturquoise = 'text-decoration-color:darkturquoise;';
  readonly darkviolet = 'text-decoration-color:darkviolet;';
  readonly deeppink = 'text-decoration-color:deeppink;';
  readonly deepskyblue = 'text-decoration-color:deepskyblue;';
  readonly dimgray = 'text-decoration-color:dimgray;';
  readonly dimgrey = 'text-decoration-color:dimgrey;';
  readonly dodgerblue = 'text-decoration-color:dodgerblue;';
  readonly firebrick = 'text-decoration-color:firebrick;';
  readonly floralwhite = 'text-decoration-color:floralwhite;';
  readonly forestgreen = 'text-decoration-color:forestgreen;';
  readonly fuchsia = 'text-decoration-color:fuchsia;';
  readonly gainsboro = 'text-decoration-color:gainsboro;';
  readonly ghostwhite = 'text-decoration-color:ghostwhite;';
  readonly gold = 'text-decoration-color:gold;';
  readonly goldenrod = 'text-decoration-color:goldenrod;';
  readonly gray = 'text-decoration-color:gray;';
  readonly green = 'text-decoration-color:green;';
  readonly greenyellow = 'text-decoration-color:greenyellow;';
  readonly grey = 'text-decoration-color:grey;';
  readonly honeydew = 'text-decoration-color:honeydew;';
  readonly hotpink = 'text-decoration-color:hotpink;';
  readonly indianred = 'text-decoration-color:indianred;';
  readonly indigo = 'text-decoration-color:indigo;';
  readonly inherit = 'text-decoration-color:inherit;';
  readonly initial = 'text-decoration-color:initial;';
  readonly ivory = 'text-decoration-color:ivory;';
  readonly khaki = 'text-decoration-color:khaki;';
  readonly lavender = 'text-decoration-color:lavender;';
  readonly lavenderblush = 'text-decoration-color:lavenderblush;';
  readonly lawngreen = 'text-decoration-color:lawngreen;';
  readonly lemonchiffon = 'text-decoration-color:lemonchiffon;';
  readonly lightblue = 'text-decoration-color:lightblue;';
  readonly lightcoral = 'text-decoration-color:lightcoral;';
  readonly lightcyan = 'text-decoration-color:lightcyan;';
  readonly lightgoldenrodyellow = 'text-decoration-color:lightgoldenrodyellow;';
  readonly lightgray = 'text-decoration-color:lightgray;';
  readonly lightgreen = 'text-decoration-color:lightgreen;';
  readonly lightgrey = 'text-decoration-color:lightgrey;';
  readonly lightpink = 'text-decoration-color:lightpink;';
  readonly lightsalmon = 'text-decoration-color:lightsalmon;';
  readonly lightseagreen = 'text-decoration-color:lightseagreen;';
  readonly lightskyblue = 'text-decoration-color:lightskyblue;';
  readonly lightslategray = 'text-decoration-color:lightslategray;';
  readonly lightslategrey = 'text-decoration-color:lightslategrey;';
  readonly lightsteelblue = 'text-decoration-color:lightsteelblue;';
  readonly lightyellow = 'text-decoration-color:lightyellow;';
  readonly lime = 'text-decoration-color:lime;';
  readonly limegreen = 'text-decoration-color:limegreen;';
  readonly linen = 'text-decoration-color:linen;';
  readonly magenta = 'text-decoration-color:magenta;';
  readonly maroon = 'text-decoration-color:maroon;';
  readonly mediumaquamarine = 'text-decoration-color:mediumaquamarine;';
  readonly mediumblue = 'text-decoration-color:mediumblue;';
  readonly mediumorchid = 'text-decoration-color:mediumorchid;';
  readonly mediumpurple = 'text-decoration-color:mediumpurple;';
  readonly mediumseagreen = 'text-decoration-color:mediumseagreen;';
  readonly mediumslateblue = 'text-decoration-color:mediumslateblue;';
  readonly mediumspringgreen = 'text-decoration-color:mediumspringgreen;';
  readonly mediumturquoise = 'text-decoration-color:mediumturquoise;';
  readonly mediumvioletred = 'text-decoration-color:mediumvioletred;';
  readonly midnightblue = 'text-decoration-color:midnightblue;';
  readonly mintcream = 'text-decoration-color:mintcream;';
  readonly mistyrose = 'text-decoration-color:mistyrose;';
  readonly moccasin = 'text-decoration-color:moccasin;';
  readonly navajowhite = 'text-decoration-color:navajowhite;';
  readonly navy = 'text-decoration-color:navy;';
  readonly oldlace = 'text-decoration-color:oldlace;';
  readonly olive = 'text-decoration-color:olive;';
  readonly olivedrab = 'text-decoration-color:olivedrab;';
  readonly orange = 'text-decoration-color:orange;';
  readonly orangered = 'text-decoration-color:orangered;';
  readonly orchid = 'text-decoration-color:orchid;';
  readonly palegoldenrod = 'text-decoration-color:palegoldenrod;';
  readonly palegreen = 'text-decoration-color:palegreen;';
  readonly paleturquoise = 'text-decoration-color:paleturquoise;';
  readonly palevioletred = 'text-decoration-color:palevioletred;';
  readonly papayawhip = 'text-decoration-color:papayawhip;';
  readonly peachpuff = 'text-decoration-color:peachpuff;';
  readonly peru = 'text-decoration-color:peru;';
  readonly pink = 'text-decoration-color:pink;';
  readonly plum = 'text-decoration-color:plum;';
  readonly powderblue = 'text-decoration-color:powderblue;';
  readonly purple = 'text-decoration-color:purple;';
  readonly rebeccapurple = 'text-decoration-color:rebeccapurple;';
  readonly red = 'text-decoration-color:red;';
  readonly revert = 'text-decoration-color:revert;';
  readonly revertLayer = 'text-decoration-color:revert-layer;';
  readonly rosybrown = 'text-decoration-color:rosybrown;';
  readonly royalblue = 'text-decoration-color:royalblue;';
  readonly saddlebrown = 'text-decoration-color:saddlebrown;';
  readonly salmon = 'text-decoration-color:salmon;';
  readonly sandybrown = 'text-decoration-color:sandybrown;';
  readonly seagreen = 'text-decoration-color:seagreen;';
  readonly seashell = 'text-decoration-color:seashell;';
  readonly sienna = 'text-decoration-color:sienna;';
  readonly silver = 'text-decoration-color:silver;';
  readonly skyblue = 'text-decoration-color:skyblue;';
  readonly slateblue = 'text-decoration-color:slateblue;';
  readonly slategray = 'text-decoration-color:slategray;';
  readonly slategrey = 'text-decoration-color:slategrey;';
  readonly snow = 'text-decoration-color:snow;';
  readonly springgreen = 'text-decoration-color:springgreen;';
  readonly steelblue = 'text-decoration-color:steelblue;';
  readonly tan = 'text-decoration-color:tan;';
  readonly teal = 'text-decoration-color:teal;';
  readonly thistle = 'text-decoration-color:thistle;';
  readonly tomato = 'text-decoration-color:tomato;';
  readonly transparent = 'text-decoration-color:transparent;';
  readonly turquoise = 'text-decoration-color:turquoise;';
  readonly unset = 'text-decoration-color:unset;';
  readonly violet = 'text-decoration-color:violet;';
  readonly wheat = 'text-decoration-color:wheat;';
  readonly white = 'text-decoration-color:white;';
  readonly whitesmoke = 'text-decoration-color:whitesmoke;';
  readonly yellow = 'text-decoration-color:yellow;';
  readonly yellowgreen = 'text-decoration-color:yellowgreen;';
  constructor() {
    super('text-decoration-color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 text-decoration-line；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
 */
export class TextDecorationLineCss extends CssProperty<Property.TextDecorationLine> {
  readonly blink = 'text-decoration-line:blink;';
  readonly grammarError = 'text-decoration-line:grammar-error;';
  readonly inherit = 'text-decoration-line:inherit;';
  readonly initial = 'text-decoration-line:initial;';
  readonly lineThrough = 'text-decoration-line:line-through;';
  readonly none = 'text-decoration-line:none;';
  readonly overline = 'text-decoration-line:overline;';
  readonly revert = 'text-decoration-line:revert;';
  readonly revertLayer = 'text-decoration-line:revert-layer;';
  readonly spellingError = 'text-decoration-line:spelling-error;';
  readonly underline = 'text-decoration-line:underline;';
  readonly unset = 'text-decoration-line:unset;';
  constructor() {
    super('text-decoration-line');
  }
}

/** CSS 属性 text-decoration-skip；初始值 objects。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
 */
export class TextDecorationSkipCss extends CssProperty<Property.TextDecorationSkip> {
  readonly boxDecoration = 'text-decoration-skip:box-decoration;';
  readonly edges = 'text-decoration-skip:edges;';
  readonly inherit = 'text-decoration-skip:inherit;';
  readonly initial = 'text-decoration-skip:initial;';
  readonly leadingSpaces = 'text-decoration-skip:leading-spaces;';
  readonly none = 'text-decoration-skip:none;';
  readonly objects = 'text-decoration-skip:objects;';
  readonly revert = 'text-decoration-skip:revert;';
  readonly revertLayer = 'text-decoration-skip:revert-layer;';
  readonly spaces = 'text-decoration-skip:spaces;';
  readonly trailingSpaces = 'text-decoration-skip:trailing-spaces;';
  readonly unset = 'text-decoration-skip:unset;';
  constructor() {
    super('text-decoration-skip');
  }
}

/** CSS 属性 text-decoration-skip-ink；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
 */
export class TextDecorationSkipInkCss extends CssProperty<Property.TextDecorationSkipInk> {
  readonly all = 'text-decoration-skip-ink:all;';
  readonly auto = 'text-decoration-skip-ink:auto;';
  readonly inherit = 'text-decoration-skip-ink:inherit;';
  readonly initial = 'text-decoration-skip-ink:initial;';
  readonly none = 'text-decoration-skip-ink:none;';
  readonly revert = 'text-decoration-skip-ink:revert;';
  readonly revertLayer = 'text-decoration-skip-ink:revert-layer;';
  readonly unset = 'text-decoration-skip-ink:unset;';
  constructor() {
    super('text-decoration-skip-ink');
  }
}

/** CSS 属性 text-decoration-style；初始值 solid。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
 */
export class TextDecorationStyleCss extends CssProperty<Property.TextDecorationStyle> {
  readonly dashed = 'text-decoration-style:dashed;';
  readonly dotted = 'text-decoration-style:dotted;';
  readonly double = 'text-decoration-style:double;';
  readonly inherit = 'text-decoration-style:inherit;';
  readonly initial = 'text-decoration-style:initial;';
  readonly revert = 'text-decoration-style:revert;';
  readonly revertLayer = 'text-decoration-style:revert-layer;';
  readonly solid = 'text-decoration-style:solid;';
  readonly unset = 'text-decoration-style:unset;';
  readonly wavy = 'text-decoration-style:wavy;';
  constructor() {
    super('text-decoration-style');
  }
}

/** CSS 属性 text-decoration-thickness；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
 */
export class TextDecorationThicknessCss extends LengthCssProperty<Property.TextDecorationThickness> {
  readonly auto = 'text-decoration-thickness:auto;';
  readonly fromFont = 'text-decoration-thickness:from-font;';
  readonly inherit = 'text-decoration-thickness:inherit;';
  readonly initial = 'text-decoration-thickness:initial;';
  readonly revert = 'text-decoration-thickness:revert;';
  readonly revertLayer = 'text-decoration-thickness:revert-layer;';
  readonly unset = 'text-decoration-thickness:unset;';
  constructor() {
    super('text-decoration-thickness');
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
    value: Extract<Property.TextDecorationThickness, number> | (string & {}),
    ...others: (Extract<Property.TextDecorationThickness, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TextDecorationThickness, number> | (string & {}),
    ...others: (Extract<Property.TextDecorationThickness, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TextDecorationThickness, number> | (string & {}),
    preferred: Extract<Property.TextDecorationThickness, number> | (string & {}),
    maximum: Extract<Property.TextDecorationThickness, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 text-emphasis。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
 */
export class TextEmphasisCss extends CssProperty<Property.TextEmphasis> {
  readonly AccentColor = 'text-emphasis:AccentColor;';
  readonly AccentColorText = 'text-emphasis:AccentColorText;';
  readonly ActiveBorder = 'text-emphasis:ActiveBorder;';
  readonly ActiveCaption = 'text-emphasis:ActiveCaption;';
  readonly ActiveText = 'text-emphasis:ActiveText;';
  readonly AppWorkspace = 'text-emphasis:AppWorkspace;';
  readonly Background = 'text-emphasis:Background;';
  readonly ButtonBorder = 'text-emphasis:ButtonBorder;';
  readonly ButtonFace = 'text-emphasis:ButtonFace;';
  readonly ButtonHighlight = 'text-emphasis:ButtonHighlight;';
  readonly ButtonShadow = 'text-emphasis:ButtonShadow;';
  readonly ButtonText = 'text-emphasis:ButtonText;';
  readonly Canvas = 'text-emphasis:Canvas;';
  readonly CanvasText = 'text-emphasis:CanvasText;';
  readonly CaptionText = 'text-emphasis:CaptionText;';
  readonly Field = 'text-emphasis:Field;';
  readonly FieldText = 'text-emphasis:FieldText;';
  readonly GrayText = 'text-emphasis:GrayText;';
  readonly Highlight = 'text-emphasis:Highlight;';
  readonly HighlightText = 'text-emphasis:HighlightText;';
  readonly InactiveBorder = 'text-emphasis:InactiveBorder;';
  readonly InactiveCaption = 'text-emphasis:InactiveCaption;';
  readonly InactiveCaptionText = 'text-emphasis:InactiveCaptionText;';
  readonly InfoBackground = 'text-emphasis:InfoBackground;';
  readonly InfoText = 'text-emphasis:InfoText;';
  readonly LinkText = 'text-emphasis:LinkText;';
  readonly Mark = 'text-emphasis:Mark;';
  readonly MarkText = 'text-emphasis:MarkText;';
  readonly Menu = 'text-emphasis:Menu;';
  readonly MenuText = 'text-emphasis:MenuText;';
  readonly Scrollbar = 'text-emphasis:Scrollbar;';
  readonly SelectedItem = 'text-emphasis:SelectedItem;';
  readonly SelectedItemText = 'text-emphasis:SelectedItemText;';
  readonly ThreeDDarkShadow = 'text-emphasis:ThreeDDarkShadow;';
  readonly ThreeDFace = 'text-emphasis:ThreeDFace;';
  readonly ThreeDHighlight = 'text-emphasis:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'text-emphasis:ThreeDLightShadow;';
  readonly ThreeDShadow = 'text-emphasis:ThreeDShadow;';
  readonly VisitedText = 'text-emphasis:VisitedText;';
  readonly Window = 'text-emphasis:Window;';
  readonly WindowFrame = 'text-emphasis:WindowFrame;';
  readonly WindowText = 'text-emphasis:WindowText;';
  readonly aliceblue = 'text-emphasis:aliceblue;';
  readonly antiquewhite = 'text-emphasis:antiquewhite;';
  readonly aqua = 'text-emphasis:aqua;';
  readonly aquamarine = 'text-emphasis:aquamarine;';
  readonly azure = 'text-emphasis:azure;';
  readonly beige = 'text-emphasis:beige;';
  readonly bisque = 'text-emphasis:bisque;';
  readonly black = 'text-emphasis:black;';
  readonly blanchedalmond = 'text-emphasis:blanchedalmond;';
  readonly blue = 'text-emphasis:blue;';
  readonly blueviolet = 'text-emphasis:blueviolet;';
  readonly brown = 'text-emphasis:brown;';
  readonly burlywood = 'text-emphasis:burlywood;';
  readonly cadetblue = 'text-emphasis:cadetblue;';
  readonly chartreuse = 'text-emphasis:chartreuse;';
  readonly chocolate = 'text-emphasis:chocolate;';
  readonly circle = 'text-emphasis:circle;';
  readonly coral = 'text-emphasis:coral;';
  readonly cornflowerblue = 'text-emphasis:cornflowerblue;';
  readonly cornsilk = 'text-emphasis:cornsilk;';
  readonly crimson = 'text-emphasis:crimson;';
  readonly currentColor = 'text-emphasis:currentColor;';
  readonly cyan = 'text-emphasis:cyan;';
  readonly darkblue = 'text-emphasis:darkblue;';
  readonly darkcyan = 'text-emphasis:darkcyan;';
  readonly darkgoldenrod = 'text-emphasis:darkgoldenrod;';
  readonly darkgray = 'text-emphasis:darkgray;';
  readonly darkgreen = 'text-emphasis:darkgreen;';
  readonly darkgrey = 'text-emphasis:darkgrey;';
  readonly darkkhaki = 'text-emphasis:darkkhaki;';
  readonly darkmagenta = 'text-emphasis:darkmagenta;';
  readonly darkolivegreen = 'text-emphasis:darkolivegreen;';
  readonly darkorange = 'text-emphasis:darkorange;';
  readonly darkorchid = 'text-emphasis:darkorchid;';
  readonly darkred = 'text-emphasis:darkred;';
  readonly darksalmon = 'text-emphasis:darksalmon;';
  readonly darkseagreen = 'text-emphasis:darkseagreen;';
  readonly darkslateblue = 'text-emphasis:darkslateblue;';
  readonly darkslategray = 'text-emphasis:darkslategray;';
  readonly darkslategrey = 'text-emphasis:darkslategrey;';
  readonly darkturquoise = 'text-emphasis:darkturquoise;';
  readonly darkviolet = 'text-emphasis:darkviolet;';
  readonly deeppink = 'text-emphasis:deeppink;';
  readonly deepskyblue = 'text-emphasis:deepskyblue;';
  readonly dimgray = 'text-emphasis:dimgray;';
  readonly dimgrey = 'text-emphasis:dimgrey;';
  readonly dodgerblue = 'text-emphasis:dodgerblue;';
  readonly dot = 'text-emphasis:dot;';
  readonly doubleCircle = 'text-emphasis:double-circle;';
  readonly filled = 'text-emphasis:filled;';
  readonly firebrick = 'text-emphasis:firebrick;';
  readonly floralwhite = 'text-emphasis:floralwhite;';
  readonly forestgreen = 'text-emphasis:forestgreen;';
  readonly fuchsia = 'text-emphasis:fuchsia;';
  readonly gainsboro = 'text-emphasis:gainsboro;';
  readonly ghostwhite = 'text-emphasis:ghostwhite;';
  readonly gold = 'text-emphasis:gold;';
  readonly goldenrod = 'text-emphasis:goldenrod;';
  readonly gray = 'text-emphasis:gray;';
  readonly green = 'text-emphasis:green;';
  readonly greenyellow = 'text-emphasis:greenyellow;';
  readonly grey = 'text-emphasis:grey;';
  readonly honeydew = 'text-emphasis:honeydew;';
  readonly hotpink = 'text-emphasis:hotpink;';
  readonly indianred = 'text-emphasis:indianred;';
  readonly indigo = 'text-emphasis:indigo;';
  readonly inherit = 'text-emphasis:inherit;';
  readonly initial = 'text-emphasis:initial;';
  readonly ivory = 'text-emphasis:ivory;';
  readonly khaki = 'text-emphasis:khaki;';
  readonly lavender = 'text-emphasis:lavender;';
  readonly lavenderblush = 'text-emphasis:lavenderblush;';
  readonly lawngreen = 'text-emphasis:lawngreen;';
  readonly lemonchiffon = 'text-emphasis:lemonchiffon;';
  readonly lightblue = 'text-emphasis:lightblue;';
  readonly lightcoral = 'text-emphasis:lightcoral;';
  readonly lightcyan = 'text-emphasis:lightcyan;';
  readonly lightgoldenrodyellow = 'text-emphasis:lightgoldenrodyellow;';
  readonly lightgray = 'text-emphasis:lightgray;';
  readonly lightgreen = 'text-emphasis:lightgreen;';
  readonly lightgrey = 'text-emphasis:lightgrey;';
  readonly lightpink = 'text-emphasis:lightpink;';
  readonly lightsalmon = 'text-emphasis:lightsalmon;';
  readonly lightseagreen = 'text-emphasis:lightseagreen;';
  readonly lightskyblue = 'text-emphasis:lightskyblue;';
  readonly lightslategray = 'text-emphasis:lightslategray;';
  readonly lightslategrey = 'text-emphasis:lightslategrey;';
  readonly lightsteelblue = 'text-emphasis:lightsteelblue;';
  readonly lightyellow = 'text-emphasis:lightyellow;';
  readonly lime = 'text-emphasis:lime;';
  readonly limegreen = 'text-emphasis:limegreen;';
  readonly linen = 'text-emphasis:linen;';
  readonly magenta = 'text-emphasis:magenta;';
  readonly maroon = 'text-emphasis:maroon;';
  readonly mediumaquamarine = 'text-emphasis:mediumaquamarine;';
  readonly mediumblue = 'text-emphasis:mediumblue;';
  readonly mediumorchid = 'text-emphasis:mediumorchid;';
  readonly mediumpurple = 'text-emphasis:mediumpurple;';
  readonly mediumseagreen = 'text-emphasis:mediumseagreen;';
  readonly mediumslateblue = 'text-emphasis:mediumslateblue;';
  readonly mediumspringgreen = 'text-emphasis:mediumspringgreen;';
  readonly mediumturquoise = 'text-emphasis:mediumturquoise;';
  readonly mediumvioletred = 'text-emphasis:mediumvioletred;';
  readonly midnightblue = 'text-emphasis:midnightblue;';
  readonly mintcream = 'text-emphasis:mintcream;';
  readonly mistyrose = 'text-emphasis:mistyrose;';
  readonly moccasin = 'text-emphasis:moccasin;';
  readonly navajowhite = 'text-emphasis:navajowhite;';
  readonly navy = 'text-emphasis:navy;';
  readonly none = 'text-emphasis:none;';
  readonly oldlace = 'text-emphasis:oldlace;';
  readonly olive = 'text-emphasis:olive;';
  readonly olivedrab = 'text-emphasis:olivedrab;';
  readonly open = 'text-emphasis:open;';
  readonly orange = 'text-emphasis:orange;';
  readonly orangered = 'text-emphasis:orangered;';
  readonly orchid = 'text-emphasis:orchid;';
  readonly palegoldenrod = 'text-emphasis:palegoldenrod;';
  readonly palegreen = 'text-emphasis:palegreen;';
  readonly paleturquoise = 'text-emphasis:paleturquoise;';
  readonly palevioletred = 'text-emphasis:palevioletred;';
  readonly papayawhip = 'text-emphasis:papayawhip;';
  readonly peachpuff = 'text-emphasis:peachpuff;';
  readonly peru = 'text-emphasis:peru;';
  readonly pink = 'text-emphasis:pink;';
  readonly plum = 'text-emphasis:plum;';
  readonly powderblue = 'text-emphasis:powderblue;';
  readonly purple = 'text-emphasis:purple;';
  readonly rebeccapurple = 'text-emphasis:rebeccapurple;';
  readonly red = 'text-emphasis:red;';
  readonly revert = 'text-emphasis:revert;';
  readonly revertLayer = 'text-emphasis:revert-layer;';
  readonly rosybrown = 'text-emphasis:rosybrown;';
  readonly royalblue = 'text-emphasis:royalblue;';
  readonly saddlebrown = 'text-emphasis:saddlebrown;';
  readonly salmon = 'text-emphasis:salmon;';
  readonly sandybrown = 'text-emphasis:sandybrown;';
  readonly seagreen = 'text-emphasis:seagreen;';
  readonly seashell = 'text-emphasis:seashell;';
  readonly sesame = 'text-emphasis:sesame;';
  readonly sienna = 'text-emphasis:sienna;';
  readonly silver = 'text-emphasis:silver;';
  readonly skyblue = 'text-emphasis:skyblue;';
  readonly slateblue = 'text-emphasis:slateblue;';
  readonly slategray = 'text-emphasis:slategray;';
  readonly slategrey = 'text-emphasis:slategrey;';
  readonly snow = 'text-emphasis:snow;';
  readonly springgreen = 'text-emphasis:springgreen;';
  readonly steelblue = 'text-emphasis:steelblue;';
  readonly tan = 'text-emphasis:tan;';
  readonly teal = 'text-emphasis:teal;';
  readonly thistle = 'text-emphasis:thistle;';
  readonly tomato = 'text-emphasis:tomato;';
  readonly transparent = 'text-emphasis:transparent;';
  readonly triangle = 'text-emphasis:triangle;';
  readonly turquoise = 'text-emphasis:turquoise;';
  readonly unset = 'text-emphasis:unset;';
  readonly violet = 'text-emphasis:violet;';
  readonly wheat = 'text-emphasis:wheat;';
  readonly white = 'text-emphasis:white;';
  readonly whitesmoke = 'text-emphasis:whitesmoke;';
  readonly yellow = 'text-emphasis:yellow;';
  readonly yellowgreen = 'text-emphasis:yellowgreen;';
  constructor() {
    super('text-emphasis');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 text-emphasis-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
 */
export class TextEmphasisColorCss extends CssProperty<Property.TextEmphasisColor> {
  readonly AccentColor = 'text-emphasis-color:AccentColor;';
  readonly AccentColorText = 'text-emphasis-color:AccentColorText;';
  readonly ActiveBorder = 'text-emphasis-color:ActiveBorder;';
  readonly ActiveCaption = 'text-emphasis-color:ActiveCaption;';
  readonly ActiveText = 'text-emphasis-color:ActiveText;';
  readonly AppWorkspace = 'text-emphasis-color:AppWorkspace;';
  readonly Background = 'text-emphasis-color:Background;';
  readonly ButtonBorder = 'text-emphasis-color:ButtonBorder;';
  readonly ButtonFace = 'text-emphasis-color:ButtonFace;';
  readonly ButtonHighlight = 'text-emphasis-color:ButtonHighlight;';
  readonly ButtonShadow = 'text-emphasis-color:ButtonShadow;';
  readonly ButtonText = 'text-emphasis-color:ButtonText;';
  readonly Canvas = 'text-emphasis-color:Canvas;';
  readonly CanvasText = 'text-emphasis-color:CanvasText;';
  readonly CaptionText = 'text-emphasis-color:CaptionText;';
  readonly Field = 'text-emphasis-color:Field;';
  readonly FieldText = 'text-emphasis-color:FieldText;';
  readonly GrayText = 'text-emphasis-color:GrayText;';
  readonly Highlight = 'text-emphasis-color:Highlight;';
  readonly HighlightText = 'text-emphasis-color:HighlightText;';
  readonly InactiveBorder = 'text-emphasis-color:InactiveBorder;';
  readonly InactiveCaption = 'text-emphasis-color:InactiveCaption;';
  readonly InactiveCaptionText = 'text-emphasis-color:InactiveCaptionText;';
  readonly InfoBackground = 'text-emphasis-color:InfoBackground;';
  readonly InfoText = 'text-emphasis-color:InfoText;';
  readonly LinkText = 'text-emphasis-color:LinkText;';
  readonly Mark = 'text-emphasis-color:Mark;';
  readonly MarkText = 'text-emphasis-color:MarkText;';
  readonly Menu = 'text-emphasis-color:Menu;';
  readonly MenuText = 'text-emphasis-color:MenuText;';
  readonly Scrollbar = 'text-emphasis-color:Scrollbar;';
  readonly SelectedItem = 'text-emphasis-color:SelectedItem;';
  readonly SelectedItemText = 'text-emphasis-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'text-emphasis-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'text-emphasis-color:ThreeDFace;';
  readonly ThreeDHighlight = 'text-emphasis-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'text-emphasis-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'text-emphasis-color:ThreeDShadow;';
  readonly VisitedText = 'text-emphasis-color:VisitedText;';
  readonly Window = 'text-emphasis-color:Window;';
  readonly WindowFrame = 'text-emphasis-color:WindowFrame;';
  readonly WindowText = 'text-emphasis-color:WindowText;';
  readonly aliceblue = 'text-emphasis-color:aliceblue;';
  readonly antiquewhite = 'text-emphasis-color:antiquewhite;';
  readonly aqua = 'text-emphasis-color:aqua;';
  readonly aquamarine = 'text-emphasis-color:aquamarine;';
  readonly azure = 'text-emphasis-color:azure;';
  readonly beige = 'text-emphasis-color:beige;';
  readonly bisque = 'text-emphasis-color:bisque;';
  readonly black = 'text-emphasis-color:black;';
  readonly blanchedalmond = 'text-emphasis-color:blanchedalmond;';
  readonly blue = 'text-emphasis-color:blue;';
  readonly blueviolet = 'text-emphasis-color:blueviolet;';
  readonly brown = 'text-emphasis-color:brown;';
  readonly burlywood = 'text-emphasis-color:burlywood;';
  readonly cadetblue = 'text-emphasis-color:cadetblue;';
  readonly chartreuse = 'text-emphasis-color:chartreuse;';
  readonly chocolate = 'text-emphasis-color:chocolate;';
  readonly coral = 'text-emphasis-color:coral;';
  readonly cornflowerblue = 'text-emphasis-color:cornflowerblue;';
  readonly cornsilk = 'text-emphasis-color:cornsilk;';
  readonly crimson = 'text-emphasis-color:crimson;';
  readonly currentColor = 'text-emphasis-color:currentColor;';
  readonly cyan = 'text-emphasis-color:cyan;';
  readonly darkblue = 'text-emphasis-color:darkblue;';
  readonly darkcyan = 'text-emphasis-color:darkcyan;';
  readonly darkgoldenrod = 'text-emphasis-color:darkgoldenrod;';
  readonly darkgray = 'text-emphasis-color:darkgray;';
  readonly darkgreen = 'text-emphasis-color:darkgreen;';
  readonly darkgrey = 'text-emphasis-color:darkgrey;';
  readonly darkkhaki = 'text-emphasis-color:darkkhaki;';
  readonly darkmagenta = 'text-emphasis-color:darkmagenta;';
  readonly darkolivegreen = 'text-emphasis-color:darkolivegreen;';
  readonly darkorange = 'text-emphasis-color:darkorange;';
  readonly darkorchid = 'text-emphasis-color:darkorchid;';
  readonly darkred = 'text-emphasis-color:darkred;';
  readonly darksalmon = 'text-emphasis-color:darksalmon;';
  readonly darkseagreen = 'text-emphasis-color:darkseagreen;';
  readonly darkslateblue = 'text-emphasis-color:darkslateblue;';
  readonly darkslategray = 'text-emphasis-color:darkslategray;';
  readonly darkslategrey = 'text-emphasis-color:darkslategrey;';
  readonly darkturquoise = 'text-emphasis-color:darkturquoise;';
  readonly darkviolet = 'text-emphasis-color:darkviolet;';
  readonly deeppink = 'text-emphasis-color:deeppink;';
  readonly deepskyblue = 'text-emphasis-color:deepskyblue;';
  readonly dimgray = 'text-emphasis-color:dimgray;';
  readonly dimgrey = 'text-emphasis-color:dimgrey;';
  readonly dodgerblue = 'text-emphasis-color:dodgerblue;';
  readonly firebrick = 'text-emphasis-color:firebrick;';
  readonly floralwhite = 'text-emphasis-color:floralwhite;';
  readonly forestgreen = 'text-emphasis-color:forestgreen;';
  readonly fuchsia = 'text-emphasis-color:fuchsia;';
  readonly gainsboro = 'text-emphasis-color:gainsboro;';
  readonly ghostwhite = 'text-emphasis-color:ghostwhite;';
  readonly gold = 'text-emphasis-color:gold;';
  readonly goldenrod = 'text-emphasis-color:goldenrod;';
  readonly gray = 'text-emphasis-color:gray;';
  readonly green = 'text-emphasis-color:green;';
  readonly greenyellow = 'text-emphasis-color:greenyellow;';
  readonly grey = 'text-emphasis-color:grey;';
  readonly honeydew = 'text-emphasis-color:honeydew;';
  readonly hotpink = 'text-emphasis-color:hotpink;';
  readonly indianred = 'text-emphasis-color:indianred;';
  readonly indigo = 'text-emphasis-color:indigo;';
  readonly inherit = 'text-emphasis-color:inherit;';
  readonly initial = 'text-emphasis-color:initial;';
  readonly ivory = 'text-emphasis-color:ivory;';
  readonly khaki = 'text-emphasis-color:khaki;';
  readonly lavender = 'text-emphasis-color:lavender;';
  readonly lavenderblush = 'text-emphasis-color:lavenderblush;';
  readonly lawngreen = 'text-emphasis-color:lawngreen;';
  readonly lemonchiffon = 'text-emphasis-color:lemonchiffon;';
  readonly lightblue = 'text-emphasis-color:lightblue;';
  readonly lightcoral = 'text-emphasis-color:lightcoral;';
  readonly lightcyan = 'text-emphasis-color:lightcyan;';
  readonly lightgoldenrodyellow = 'text-emphasis-color:lightgoldenrodyellow;';
  readonly lightgray = 'text-emphasis-color:lightgray;';
  readonly lightgreen = 'text-emphasis-color:lightgreen;';
  readonly lightgrey = 'text-emphasis-color:lightgrey;';
  readonly lightpink = 'text-emphasis-color:lightpink;';
  readonly lightsalmon = 'text-emphasis-color:lightsalmon;';
  readonly lightseagreen = 'text-emphasis-color:lightseagreen;';
  readonly lightskyblue = 'text-emphasis-color:lightskyblue;';
  readonly lightslategray = 'text-emphasis-color:lightslategray;';
  readonly lightslategrey = 'text-emphasis-color:lightslategrey;';
  readonly lightsteelblue = 'text-emphasis-color:lightsteelblue;';
  readonly lightyellow = 'text-emphasis-color:lightyellow;';
  readonly lime = 'text-emphasis-color:lime;';
  readonly limegreen = 'text-emphasis-color:limegreen;';
  readonly linen = 'text-emphasis-color:linen;';
  readonly magenta = 'text-emphasis-color:magenta;';
  readonly maroon = 'text-emphasis-color:maroon;';
  readonly mediumaquamarine = 'text-emphasis-color:mediumaquamarine;';
  readonly mediumblue = 'text-emphasis-color:mediumblue;';
  readonly mediumorchid = 'text-emphasis-color:mediumorchid;';
  readonly mediumpurple = 'text-emphasis-color:mediumpurple;';
  readonly mediumseagreen = 'text-emphasis-color:mediumseagreen;';
  readonly mediumslateblue = 'text-emphasis-color:mediumslateblue;';
  readonly mediumspringgreen = 'text-emphasis-color:mediumspringgreen;';
  readonly mediumturquoise = 'text-emphasis-color:mediumturquoise;';
  readonly mediumvioletred = 'text-emphasis-color:mediumvioletred;';
  readonly midnightblue = 'text-emphasis-color:midnightblue;';
  readonly mintcream = 'text-emphasis-color:mintcream;';
  readonly mistyrose = 'text-emphasis-color:mistyrose;';
  readonly moccasin = 'text-emphasis-color:moccasin;';
  readonly navajowhite = 'text-emphasis-color:navajowhite;';
  readonly navy = 'text-emphasis-color:navy;';
  readonly oldlace = 'text-emphasis-color:oldlace;';
  readonly olive = 'text-emphasis-color:olive;';
  readonly olivedrab = 'text-emphasis-color:olivedrab;';
  readonly orange = 'text-emphasis-color:orange;';
  readonly orangered = 'text-emphasis-color:orangered;';
  readonly orchid = 'text-emphasis-color:orchid;';
  readonly palegoldenrod = 'text-emphasis-color:palegoldenrod;';
  readonly palegreen = 'text-emphasis-color:palegreen;';
  readonly paleturquoise = 'text-emphasis-color:paleturquoise;';
  readonly palevioletred = 'text-emphasis-color:palevioletred;';
  readonly papayawhip = 'text-emphasis-color:papayawhip;';
  readonly peachpuff = 'text-emphasis-color:peachpuff;';
  readonly peru = 'text-emphasis-color:peru;';
  readonly pink = 'text-emphasis-color:pink;';
  readonly plum = 'text-emphasis-color:plum;';
  readonly powderblue = 'text-emphasis-color:powderblue;';
  readonly purple = 'text-emphasis-color:purple;';
  readonly rebeccapurple = 'text-emphasis-color:rebeccapurple;';
  readonly red = 'text-emphasis-color:red;';
  readonly revert = 'text-emphasis-color:revert;';
  readonly revertLayer = 'text-emphasis-color:revert-layer;';
  readonly rosybrown = 'text-emphasis-color:rosybrown;';
  readonly royalblue = 'text-emphasis-color:royalblue;';
  readonly saddlebrown = 'text-emphasis-color:saddlebrown;';
  readonly salmon = 'text-emphasis-color:salmon;';
  readonly sandybrown = 'text-emphasis-color:sandybrown;';
  readonly seagreen = 'text-emphasis-color:seagreen;';
  readonly seashell = 'text-emphasis-color:seashell;';
  readonly sienna = 'text-emphasis-color:sienna;';
  readonly silver = 'text-emphasis-color:silver;';
  readonly skyblue = 'text-emphasis-color:skyblue;';
  readonly slateblue = 'text-emphasis-color:slateblue;';
  readonly slategray = 'text-emphasis-color:slategray;';
  readonly slategrey = 'text-emphasis-color:slategrey;';
  readonly snow = 'text-emphasis-color:snow;';
  readonly springgreen = 'text-emphasis-color:springgreen;';
  readonly steelblue = 'text-emphasis-color:steelblue;';
  readonly tan = 'text-emphasis-color:tan;';
  readonly teal = 'text-emphasis-color:teal;';
  readonly thistle = 'text-emphasis-color:thistle;';
  readonly tomato = 'text-emphasis-color:tomato;';
  readonly transparent = 'text-emphasis-color:transparent;';
  readonly turquoise = 'text-emphasis-color:turquoise;';
  readonly unset = 'text-emphasis-color:unset;';
  readonly violet = 'text-emphasis-color:violet;';
  readonly wheat = 'text-emphasis-color:wheat;';
  readonly white = 'text-emphasis-color:white;';
  readonly whitesmoke = 'text-emphasis-color:whitesmoke;';
  readonly yellow = 'text-emphasis-color:yellow;';
  readonly yellowgreen = 'text-emphasis-color:yellowgreen;';
  constructor() {
    super('text-emphasis-color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 text-emphasis-position；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
 */
export class TextEmphasisPositionCss extends CssProperty<Property.TextEmphasisPosition> {
  readonly auto = 'text-emphasis-position:auto;';
  readonly inherit = 'text-emphasis-position:inherit;';
  readonly initial = 'text-emphasis-position:initial;';
  readonly over = 'text-emphasis-position:over;';
  readonly revert = 'text-emphasis-position:revert;';
  readonly revertLayer = 'text-emphasis-position:revert-layer;';
  readonly under = 'text-emphasis-position:under;';
  readonly unset = 'text-emphasis-position:unset;';
  constructor() {
    super('text-emphasis-position');
  }
}

/** CSS 属性 text-emphasis-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
 */
export class TextEmphasisStyleCss extends CssProperty<Property.TextEmphasisStyle> {
  readonly circle = 'text-emphasis-style:circle;';
  readonly dot = 'text-emphasis-style:dot;';
  readonly doubleCircle = 'text-emphasis-style:double-circle;';
  readonly filled = 'text-emphasis-style:filled;';
  readonly inherit = 'text-emphasis-style:inherit;';
  readonly initial = 'text-emphasis-style:initial;';
  readonly none = 'text-emphasis-style:none;';
  readonly open = 'text-emphasis-style:open;';
  readonly revert = 'text-emphasis-style:revert;';
  readonly revertLayer = 'text-emphasis-style:revert-layer;';
  readonly sesame = 'text-emphasis-style:sesame;';
  readonly triangle = 'text-emphasis-style:triangle;';
  readonly unset = 'text-emphasis-style:unset;';
  constructor() {
    super('text-emphasis-style');
  }
}

/** CSS 属性 text-indent；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
 */
export class TextIndentCss extends LengthCssProperty<Property.TextIndent> {
  readonly inherit = 'text-indent:inherit;';
  readonly initial = 'text-indent:initial;';
  readonly revert = 'text-indent:revert;';
  readonly revertLayer = 'text-indent:revert-layer;';
  readonly unset = 'text-indent:unset;';
  constructor() {
    super('text-indent');
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
    value: Extract<Property.TextIndent, number> | (string & {}),
    ...others: (Extract<Property.TextIndent, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TextIndent, number> | (string & {}),
    ...others: (Extract<Property.TextIndent, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TextIndent, number> | (string & {}),
    preferred: Extract<Property.TextIndent, number> | (string & {}),
    maximum: Extract<Property.TextIndent, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 text-justify；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
 */
export class TextJustifyCss extends CssProperty<Property.TextJustify> {
  readonly auto = 'text-justify:auto;';
  readonly distribute = 'text-justify:distribute;';
  readonly inherit = 'text-justify:inherit;';
  readonly initial = 'text-justify:initial;';
  readonly interCharacter = 'text-justify:inter-character;';
  readonly interWord = 'text-justify:inter-word;';
  readonly none = 'text-justify:none;';
  readonly revert = 'text-justify:revert;';
  readonly revertLayer = 'text-justify:revert-layer;';
  readonly unset = 'text-justify:unset;';
  constructor() {
    super('text-justify');
  }
}

/** CSS 属性 text-orientation；初始值 mixed。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
 */
export class TextOrientationCss extends CssProperty<Property.TextOrientation> {
  readonly inherit = 'text-orientation:inherit;';
  readonly initial = 'text-orientation:initial;';
  readonly mixed = 'text-orientation:mixed;';
  readonly revert = 'text-orientation:revert;';
  readonly revertLayer = 'text-orientation:revert-layer;';
  readonly sideways = 'text-orientation:sideways;';
  readonly sidewaysRight = 'text-orientation:sideways-right;';
  readonly unset = 'text-orientation:unset;';
  readonly upright = 'text-orientation:upright;';
  constructor() {
    super('text-orientation');
  }
}

/** CSS 属性 text-overflow；初始值 clip。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
 */
export class TextOverflowCss extends CssProperty<Property.TextOverflow> {
  readonly clip = 'text-overflow:clip;';
  readonly ellipsis = 'text-overflow:ellipsis;';
  readonly inherit = 'text-overflow:inherit;';
  readonly initial = 'text-overflow:initial;';
  readonly revert = 'text-overflow:revert;';
  readonly revertLayer = 'text-overflow:revert-layer;';
  readonly unset = 'text-overflow:unset;';
  constructor() {
    super('text-overflow');
  }
}

/** CSS 属性 text-rendering；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
 */
export class TextRenderingCss extends CssProperty<Property.TextRendering> {
  readonly auto = 'text-rendering:auto;';
  readonly geometricPrecision = 'text-rendering:geometricPrecision;';
  readonly inherit = 'text-rendering:inherit;';
  readonly initial = 'text-rendering:initial;';
  readonly optimizeLegibility = 'text-rendering:optimizeLegibility;';
  readonly optimizeSpeed = 'text-rendering:optimizeSpeed;';
  readonly revert = 'text-rendering:revert;';
  readonly revertLayer = 'text-rendering:revert-layer;';
  readonly unset = 'text-rendering:unset;';
  constructor() {
    super('text-rendering');
  }
}

/** CSS 属性 text-shadow；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
 */
export class TextShadowCss extends CssProperty<Property.TextShadow> {
  readonly inherit = 'text-shadow:inherit;';
  readonly initial = 'text-shadow:initial;';
  readonly none = 'text-shadow:none;';
  readonly revert = 'text-shadow:revert;';
  readonly revertLayer = 'text-shadow:revert-layer;';
  readonly unset = 'text-shadow:unset;';
  constructor() {
    super('text-shadow');
  }
}

/** CSS 属性 text-size-adjust；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
 */
export class TextSizeAdjustCss extends CssProperty<Property.TextSizeAdjust> {
  readonly auto = 'text-size-adjust:auto;';
  readonly inherit = 'text-size-adjust:inherit;';
  readonly initial = 'text-size-adjust:initial;';
  readonly none = 'text-size-adjust:none;';
  readonly revert = 'text-size-adjust:revert;';
  readonly revertLayer = 'text-size-adjust:revert-layer;';
  readonly unset = 'text-size-adjust:unset;';
  constructor() {
    super('text-size-adjust');
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
    value: Extract<Property.TextSizeAdjust, number> | (string & {}),
    ...others: (Extract<Property.TextSizeAdjust, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TextSizeAdjust, number> | (string & {}),
    ...others: (Extract<Property.TextSizeAdjust, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TextSizeAdjust, number> | (string & {}),
    preferred: Extract<Property.TextSizeAdjust, number> | (string & {}),
    maximum: Extract<Property.TextSizeAdjust, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 text-spacing-trim；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
 */
export class TextSpacingTrimCss extends CssProperty<Property.TextSpacingTrim> {
  readonly inherit = 'text-spacing-trim:inherit;';
  readonly initial = 'text-spacing-trim:initial;';
  readonly normal = 'text-spacing-trim:normal;';
  readonly revert = 'text-spacing-trim:revert;';
  readonly revertLayer = 'text-spacing-trim:revert-layer;';
  readonly spaceAll = 'text-spacing-trim:space-all;';
  readonly spaceFirst = 'text-spacing-trim:space-first;';
  readonly trimStart = 'text-spacing-trim:trim-start;';
  readonly unset = 'text-spacing-trim:unset;';
  constructor() {
    super('text-spacing-trim');
  }
}

/** CSS 属性 text-transform；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
 */
export class TextTransformCss extends CssProperty<Property.TextTransform> {
  readonly capitalize = 'text-transform:capitalize;';
  readonly fullSizeKana = 'text-transform:full-size-kana;';
  readonly fullWidth = 'text-transform:full-width;';
  readonly inherit = 'text-transform:inherit;';
  readonly initial = 'text-transform:initial;';
  readonly lowercase = 'text-transform:lowercase;';
  readonly mathAuto = 'text-transform:math-auto;';
  readonly none = 'text-transform:none;';
  readonly revert = 'text-transform:revert;';
  readonly revertLayer = 'text-transform:revert-layer;';
  readonly unset = 'text-transform:unset;';
  readonly uppercase = 'text-transform:uppercase;';
  constructor() {
    super('text-transform');
  }
}

/** CSS 属性 text-underline-offset；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
 */
export class TextUnderlineOffsetCss extends LengthCssProperty<Property.TextUnderlineOffset> {
  readonly auto = 'text-underline-offset:auto;';
  readonly inherit = 'text-underline-offset:inherit;';
  readonly initial = 'text-underline-offset:initial;';
  readonly revert = 'text-underline-offset:revert;';
  readonly revertLayer = 'text-underline-offset:revert-layer;';
  readonly unset = 'text-underline-offset:unset;';
  constructor() {
    super('text-underline-offset');
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
    value: Extract<Property.TextUnderlineOffset, number> | (string & {}),
    ...others: (Extract<Property.TextUnderlineOffset, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TextUnderlineOffset, number> | (string & {}),
    ...others: (Extract<Property.TextUnderlineOffset, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TextUnderlineOffset, number> | (string & {}),
    preferred: Extract<Property.TextUnderlineOffset, number> | (string & {}),
    maximum: Extract<Property.TextUnderlineOffset, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 text-underline-position；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
 */
export class TextUnderlinePositionCss extends CssProperty<Property.TextUnderlinePosition> {
  readonly auto = 'text-underline-position:auto;';
  readonly fromFont = 'text-underline-position:from-font;';
  readonly inherit = 'text-underline-position:inherit;';
  readonly initial = 'text-underline-position:initial;';
  readonly left = 'text-underline-position:left;';
  readonly revert = 'text-underline-position:revert;';
  readonly revertLayer = 'text-underline-position:revert-layer;';
  readonly right = 'text-underline-position:right;';
  readonly under = 'text-underline-position:under;';
  readonly unset = 'text-underline-position:unset;';
  constructor() {
    super('text-underline-position');
  }
}

/** CSS 属性 text-wrap；初始值 wrap。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
 */
export class TextWrapCss extends CssProperty<Property.TextWrap> {
  readonly auto = 'text-wrap:auto;';
  readonly balance = 'text-wrap:balance;';
  readonly inherit = 'text-wrap:inherit;';
  readonly initial = 'text-wrap:initial;';
  readonly nowrap = 'text-wrap:nowrap;';
  readonly pretty = 'text-wrap:pretty;';
  readonly revert = 'text-wrap:revert;';
  readonly revertLayer = 'text-wrap:revert-layer;';
  readonly stable = 'text-wrap:stable;';
  readonly unset = 'text-wrap:unset;';
  readonly wrap = 'text-wrap:wrap;';
  constructor() {
    super('text-wrap');
  }
}

/** CSS 属性 text-wrap-mode；初始值 wrap。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
 */
export class TextWrapModeCss extends CssProperty<Property.TextWrapMode> {
  readonly inherit = 'text-wrap-mode:inherit;';
  readonly initial = 'text-wrap-mode:initial;';
  readonly nowrap = 'text-wrap-mode:nowrap;';
  readonly revert = 'text-wrap-mode:revert;';
  readonly revertLayer = 'text-wrap-mode:revert-layer;';
  readonly unset = 'text-wrap-mode:unset;';
  readonly wrap = 'text-wrap-mode:wrap;';
  constructor() {
    super('text-wrap-mode');
  }
}

/** CSS 属性 text-wrap-style；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
 */
export class TextWrapStyleCss extends CssProperty<Property.TextWrapStyle> {
  readonly auto = 'text-wrap-style:auto;';
  readonly balance = 'text-wrap-style:balance;';
  readonly inherit = 'text-wrap-style:inherit;';
  readonly initial = 'text-wrap-style:initial;';
  readonly pretty = 'text-wrap-style:pretty;';
  readonly revert = 'text-wrap-style:revert;';
  readonly revertLayer = 'text-wrap-style:revert-layer;';
  readonly stable = 'text-wrap-style:stable;';
  readonly unset = 'text-wrap-style:unset;';
  constructor() {
    super('text-wrap-style');
  }
}

/** CSS 属性 timeline-scope；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
 */
export class TimelineScopeCss extends CssProperty<Property.TimelineScope> {
  readonly inherit = 'timeline-scope:inherit;';
  readonly initial = 'timeline-scope:initial;';
  readonly none = 'timeline-scope:none;';
  readonly revert = 'timeline-scope:revert;';
  readonly revertLayer = 'timeline-scope:revert-layer;';
  readonly unset = 'timeline-scope:unset;';
  constructor() {
    super('timeline-scope');
  }
}

/** CSS 属性 top；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
 */
export class TopCss extends LengthCssProperty<Property.Top> {
  readonly auto = 'top:auto;';
  readonly inherit = 'top:inherit;';
  readonly initial = 'top:initial;';
  readonly revert = 'top:revert;';
  readonly revertLayer = 'top:revert-layer;';
  readonly unset = 'top:unset;';
  constructor() {
    super('top');
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
    value: Extract<Property.Top, number> | (string & {}),
    ...others: (Extract<Property.Top, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Top, number> | (string & {}),
    ...others: (Extract<Property.Top, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Top, number> | (string & {}),
    preferred: Extract<Property.Top, number> | (string & {}),
    maximum: Extract<Property.Top, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 touch-action；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
 */
export class TouchActionCss extends CssProperty<Property.TouchAction> {
  readonly auto = 'touch-action:auto;';
  readonly inherit = 'touch-action:inherit;';
  readonly initial = 'touch-action:initial;';
  readonly manipulation = 'touch-action:manipulation;';
  readonly none = 'touch-action:none;';
  readonly panDown = 'touch-action:pan-down;';
  readonly panLeft = 'touch-action:pan-left;';
  readonly panRight = 'touch-action:pan-right;';
  readonly panUp = 'touch-action:pan-up;';
  readonly panX = 'touch-action:pan-x;';
  readonly panY = 'touch-action:pan-y;';
  readonly pinchZoom = 'touch-action:pinch-zoom;';
  readonly revert = 'touch-action:revert;';
  readonly revertLayer = 'touch-action:revert-layer;';
  readonly unset = 'touch-action:unset;';
  constructor() {
    super('touch-action');
  }
}

/** CSS 属性 transform；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
 */
export class TransformCss extends CssProperty<Property.Transform> {
  readonly inherit = 'transform:inherit;';
  readonly initial = 'transform:initial;';
  readonly none = 'transform:none;';
  readonly revert = 'transform:revert;';
  readonly revertLayer = 'transform:revert-layer;';
  readonly unset = 'transform:unset;';
  constructor() {
    super('transform');
  }
}

/** CSS 属性 transform-box；初始值 view-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
 */
export class TransformBoxCss extends CssProperty<Property.TransformBox> {
  readonly borderBox = 'transform-box:border-box;';
  readonly contentBox = 'transform-box:content-box;';
  readonly fillBox = 'transform-box:fill-box;';
  readonly inherit = 'transform-box:inherit;';
  readonly initial = 'transform-box:initial;';
  readonly revert = 'transform-box:revert;';
  readonly revertLayer = 'transform-box:revert-layer;';
  readonly strokeBox = 'transform-box:stroke-box;';
  readonly unset = 'transform-box:unset;';
  readonly viewBox = 'transform-box:view-box;';
  constructor() {
    super('transform-box');
  }
}

/** CSS 属性 transform-origin；初始值 50% 50% 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
 */
export class TransformOriginCss extends LengthCssProperty<Property.TransformOrigin> {
  readonly bottom = 'transform-origin:bottom;';
  readonly center = 'transform-origin:center;';
  readonly inherit = 'transform-origin:inherit;';
  readonly initial = 'transform-origin:initial;';
  readonly left = 'transform-origin:left;';
  readonly revert = 'transform-origin:revert;';
  readonly revertLayer = 'transform-origin:revert-layer;';
  readonly right = 'transform-origin:right;';
  readonly top = 'transform-origin:top;';
  readonly unset = 'transform-origin:unset;';
  constructor() {
    super('transform-origin');
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
    value: Extract<Property.TransformOrigin, number> | (string & {}),
    ...others: (Extract<Property.TransformOrigin, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TransformOrigin, number> | (string & {}),
    ...others: (Extract<Property.TransformOrigin, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TransformOrigin, number> | (string & {}),
    preferred: Extract<Property.TransformOrigin, number> | (string & {}),
    maximum: Extract<Property.TransformOrigin, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 transform-style；初始值 flat。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
 */
export class TransformStyleCss extends CssProperty<Property.TransformStyle> {
  readonly flat = 'transform-style:flat;';
  readonly inherit = 'transform-style:inherit;';
  readonly initial = 'transform-style:initial;';
  readonly revert = 'transform-style:revert;';
  readonly revertLayer = 'transform-style:revert-layer;';
  readonly unset = 'transform-style:unset;';
  constructor() {
    super('transform-style');
  }
}

/** CSS 属性 transition。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
 */
export class TransitionCss extends CssProperty<Property.Transition> {
  readonly all = 'transition:all;';
  readonly allowDiscrete = 'transition:allow-discrete;';
  readonly ease = 'transition:ease;';
  readonly easeIn = 'transition:ease-in;';
  readonly easeInOut = 'transition:ease-in-out;';
  readonly easeOut = 'transition:ease-out;';
  readonly inherit = 'transition:inherit;';
  readonly initial = 'transition:initial;';
  readonly linear = 'transition:linear;';
  readonly none = 'transition:none;';
  readonly normal = 'transition:normal;';
  readonly revert = 'transition:revert;';
  readonly revertLayer = 'transition:revert-layer;';
  readonly stepEnd = 'transition:step-end;';
  readonly stepStart = 'transition:step-start;';
  readonly unset = 'transition:unset;';
  constructor() {
    super('transition');
  }
  /** 使用 ms 单位生成声明；数值合法性由浏览器处理。 */
  ms(value: number): string {
    return `${this.name}:${value}ms;`;
  }
  /** 使用 s 单位生成声明；数值合法性由浏览器处理。 */
  s(value: number): string {
    return `${this.name}:${value}s;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Transition, number> | (string & {}),
    ...others: (Extract<Property.Transition, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Transition, number> | (string & {}),
    ...others: (Extract<Property.Transition, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Transition, number> | (string & {}),
    preferred: Extract<Property.Transition, number> | (string & {}),
    maximum: Extract<Property.Transition, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 transition-behavior；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
 */
export class TransitionBehaviorCss extends CssProperty<Property.TransitionBehavior> {
  readonly allowDiscrete = 'transition-behavior:allow-discrete;';
  readonly inherit = 'transition-behavior:inherit;';
  readonly initial = 'transition-behavior:initial;';
  readonly normal = 'transition-behavior:normal;';
  readonly revert = 'transition-behavior:revert;';
  readonly revertLayer = 'transition-behavior:revert-layer;';
  readonly unset = 'transition-behavior:unset;';
  constructor() {
    super('transition-behavior');
  }
}

/** CSS 属性 transition-delay；初始值 0s。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
 */
export class TransitionDelayCss extends CssProperty<Property.TransitionDelay> {
  readonly inherit = 'transition-delay:inherit;';
  readonly initial = 'transition-delay:initial;';
  readonly revert = 'transition-delay:revert;';
  readonly revertLayer = 'transition-delay:revert-layer;';
  readonly unset = 'transition-delay:unset;';
  constructor() {
    super('transition-delay');
  }
  /** 使用 ms 单位生成声明；数值合法性由浏览器处理。 */
  ms(value: number): string {
    return `${this.name}:${value}ms;`;
  }
  /** 使用 s 单位生成声明；数值合法性由浏览器处理。 */
  s(value: number): string {
    return `${this.name}:${value}s;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.TransitionDelay, number> | (string & {}),
    ...others: (Extract<Property.TransitionDelay, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TransitionDelay, number> | (string & {}),
    ...others: (Extract<Property.TransitionDelay, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TransitionDelay, number> | (string & {}),
    preferred: Extract<Property.TransitionDelay, number> | (string & {}),
    maximum: Extract<Property.TransitionDelay, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 transition-duration；初始值 0s。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
 */
export class TransitionDurationCss extends CssProperty<Property.TransitionDuration> {
  readonly inherit = 'transition-duration:inherit;';
  readonly initial = 'transition-duration:initial;';
  readonly revert = 'transition-duration:revert;';
  readonly revertLayer = 'transition-duration:revert-layer;';
  readonly unset = 'transition-duration:unset;';
  constructor() {
    super('transition-duration');
  }
  /** 使用 ms 单位生成声明；数值合法性由浏览器处理。 */
  ms(value: number): string {
    return `${this.name}:${value}ms;`;
  }
  /** 使用 s 单位生成声明；数值合法性由浏览器处理。 */
  s(value: number): string {
    return `${this.name}:${value}s;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.TransitionDuration, number> | (string & {}),
    ...others: (Extract<Property.TransitionDuration, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.TransitionDuration, number> | (string & {}),
    ...others: (Extract<Property.TransitionDuration, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.TransitionDuration, number> | (string & {}),
    preferred: Extract<Property.TransitionDuration, number> | (string & {}),
    maximum: Extract<Property.TransitionDuration, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 transition-property。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
 */
export class TransitionPropertyCss extends CssProperty<Property.TransitionProperty> {
  readonly all = 'transition-property:all;';
  readonly inherit = 'transition-property:inherit;';
  readonly initial = 'transition-property:initial;';
  readonly none = 'transition-property:none;';
  readonly revert = 'transition-property:revert;';
  readonly revertLayer = 'transition-property:revert-layer;';
  readonly unset = 'transition-property:unset;';
  constructor() {
    super('transition-property');
  }
}

/** CSS 属性 transition-timing-function；初始值 ease。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
 */
export class TransitionTimingFunctionCss extends CssProperty<Property.TransitionTimingFunction> {
  readonly ease = 'transition-timing-function:ease;';
  readonly easeIn = 'transition-timing-function:ease-in;';
  readonly easeInOut = 'transition-timing-function:ease-in-out;';
  readonly easeOut = 'transition-timing-function:ease-out;';
  readonly inherit = 'transition-timing-function:inherit;';
  readonly initial = 'transition-timing-function:initial;';
  readonly linear = 'transition-timing-function:linear;';
  readonly revert = 'transition-timing-function:revert;';
  readonly revertLayer = 'transition-timing-function:revert-layer;';
  readonly stepEnd = 'transition-timing-function:step-end;';
  readonly stepStart = 'transition-timing-function:step-start;';
  readonly unset = 'transition-timing-function:unset;';
  constructor() {
    super('transition-timing-function');
  }
}

/** CSS 属性 translate；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
 */
export class TranslateCss extends LengthCssProperty<Property.Translate> {
  readonly inherit = 'translate:inherit;';
  readonly initial = 'translate:initial;';
  readonly none = 'translate:none;';
  readonly revert = 'translate:revert;';
  readonly revertLayer = 'translate:revert-layer;';
  readonly unset = 'translate:unset;';
  constructor() {
    super('translate');
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
    value: Extract<Property.Translate, number> | (string & {}),
    ...others: (Extract<Property.Translate, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Translate, number> | (string & {}),
    ...others: (Extract<Property.Translate, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Translate, number> | (string & {}),
    preferred: Extract<Property.Translate, number> | (string & {}),
    maximum: Extract<Property.Translate, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}
