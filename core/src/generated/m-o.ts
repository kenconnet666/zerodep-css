// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** 外边距（CSS margin）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
 */
export class MarginCss extends LengthCssProperty<Property.Margin> {
  readonly auto = 'margin:auto;';
  readonly inherit = 'margin:inherit;';
  readonly initial = 'margin:initial;';
  readonly revert = 'margin:revert;';
  readonly revertLayer = 'margin:revert-layer;';
  readonly unset = 'margin:unset;';
  constructor() {
    super('margin');
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
    value: Extract<Property.Margin, number> | (string & {}),
    ...others: (Extract<Property.Margin, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Margin, number> | (string & {}),
    ...others: (Extract<Property.Margin, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Margin, number> | (string & {}),
    preferred: Extract<Property.Margin, number> | (string & {}),
    maximum: Extract<Property.Margin, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
 */
export class MarginBlockCss extends LengthCssProperty<Property.MarginBlock> {
  readonly auto = 'margin-block:auto;';
  readonly inherit = 'margin-block:inherit;';
  readonly initial = 'margin-block:initial;';
  readonly revert = 'margin-block:revert;';
  readonly revertLayer = 'margin-block:revert-layer;';
  readonly unset = 'margin-block:unset;';
  constructor() {
    super('margin-block');
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
    value: Extract<Property.MarginBlock, number> | (string & {}),
    ...others: (Extract<Property.MarginBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginBlock, number> | (string & {}),
    ...others: (Extract<Property.MarginBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginBlock, number> | (string & {}),
    preferred: Extract<Property.MarginBlock, number> | (string & {}),
    maximum: Extract<Property.MarginBlock, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-block-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
 */
export class MarginBlockEndCss extends LengthCssProperty<Property.MarginBlockEnd> {
  readonly auto = 'margin-block-end:auto;';
  readonly inherit = 'margin-block-end:inherit;';
  readonly initial = 'margin-block-end:initial;';
  readonly revert = 'margin-block-end:revert;';
  readonly revertLayer = 'margin-block-end:revert-layer;';
  readonly unset = 'margin-block-end:unset;';
  constructor() {
    super('margin-block-end');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MarginBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.MarginBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.MarginBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginBlockEnd, number> | (string & {}),
    preferred: Extract<Property.MarginBlockEnd, number> | (string & {}),
    maximum: Extract<Property.MarginBlockEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-block-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
 */
export class MarginBlockStartCss extends LengthCssProperty<Property.MarginBlockStart> {
  readonly auto = 'margin-block-start:auto;';
  readonly inherit = 'margin-block-start:inherit;';
  readonly initial = 'margin-block-start:initial;';
  readonly revert = 'margin-block-start:revert;';
  readonly revertLayer = 'margin-block-start:revert-layer;';
  readonly unset = 'margin-block-start:unset;';
  constructor() {
    super('margin-block-start');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MarginBlockStart, number> | (string & {}),
    ...others: (Extract<Property.MarginBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginBlockStart, number> | (string & {}),
    ...others: (Extract<Property.MarginBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginBlockStart, number> | (string & {}),
    preferred: Extract<Property.MarginBlockStart, number> | (string & {}),
    maximum: Extract<Property.MarginBlockStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
 */
export class MarginBottomCss extends LengthCssProperty<Property.MarginBottom> {
  readonly auto = 'margin-bottom:auto;';
  readonly inherit = 'margin-bottom:inherit;';
  readonly initial = 'margin-bottom:initial;';
  readonly revert = 'margin-bottom:revert;';
  readonly revertLayer = 'margin-bottom:revert-layer;';
  readonly unset = 'margin-bottom:unset;';
  constructor() {
    super('margin-bottom');
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
    value: Extract<Property.MarginBottom, number> | (string & {}),
    ...others: (Extract<Property.MarginBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginBottom, number> | (string & {}),
    ...others: (Extract<Property.MarginBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginBottom, number> | (string & {}),
    preferred: Extract<Property.MarginBottom, number> | (string & {}),
    maximum: Extract<Property.MarginBottom, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
 */
export class MarginInlineCss extends LengthCssProperty<Property.MarginInline> {
  readonly auto = 'margin-inline:auto;';
  readonly inherit = 'margin-inline:inherit;';
  readonly initial = 'margin-inline:initial;';
  readonly revert = 'margin-inline:revert;';
  readonly revertLayer = 'margin-inline:revert-layer;';
  readonly unset = 'margin-inline:unset;';
  constructor() {
    super('margin-inline');
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
    value: Extract<Property.MarginInline, number> | (string & {}),
    ...others: (Extract<Property.MarginInline, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginInline, number> | (string & {}),
    ...others: (Extract<Property.MarginInline, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginInline, number> | (string & {}),
    preferred: Extract<Property.MarginInline, number> | (string & {}),
    maximum: Extract<Property.MarginInline, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-inline-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
 */
export class MarginInlineEndCss extends LengthCssProperty<Property.MarginInlineEnd> {
  readonly auto = 'margin-inline-end:auto;';
  readonly inherit = 'margin-inline-end:inherit;';
  readonly initial = 'margin-inline-end:initial;';
  readonly revert = 'margin-inline-end:revert;';
  readonly revertLayer = 'margin-inline-end:revert-layer;';
  readonly unset = 'margin-inline-end:unset;';
  constructor() {
    super('margin-inline-end');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MarginInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.MarginInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.MarginInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginInlineEnd, number> | (string & {}),
    preferred: Extract<Property.MarginInlineEnd, number> | (string & {}),
    maximum: Extract<Property.MarginInlineEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-inline-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
 */
export class MarginInlineStartCss extends LengthCssProperty<Property.MarginInlineStart> {
  readonly auto = 'margin-inline-start:auto;';
  readonly inherit = 'margin-inline-start:inherit;';
  readonly initial = 'margin-inline-start:initial;';
  readonly revert = 'margin-inline-start:revert;';
  readonly revertLayer = 'margin-inline-start:revert-layer;';
  readonly unset = 'margin-inline-start:unset;';
  constructor() {
    super('margin-inline-start');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MarginInlineStart, number> | (string & {}),
    ...others: (Extract<Property.MarginInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginInlineStart, number> | (string & {}),
    ...others: (Extract<Property.MarginInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginInlineStart, number> | (string & {}),
    preferred: Extract<Property.MarginInlineStart, number> | (string & {}),
    maximum: Extract<Property.MarginInlineStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
 */
export class MarginLeftCss extends LengthCssProperty<Property.MarginLeft> {
  readonly auto = 'margin-left:auto;';
  readonly inherit = 'margin-left:inherit;';
  readonly initial = 'margin-left:initial;';
  readonly revert = 'margin-left:revert;';
  readonly revertLayer = 'margin-left:revert-layer;';
  readonly unset = 'margin-left:unset;';
  constructor() {
    super('margin-left');
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
    value: Extract<Property.MarginLeft, number> | (string & {}),
    ...others: (Extract<Property.MarginLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginLeft, number> | (string & {}),
    ...others: (Extract<Property.MarginLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginLeft, number> | (string & {}),
    preferred: Extract<Property.MarginLeft, number> | (string & {}),
    maximum: Extract<Property.MarginLeft, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
 */
export class MarginRightCss extends LengthCssProperty<Property.MarginRight> {
  readonly auto = 'margin-right:auto;';
  readonly inherit = 'margin-right:inherit;';
  readonly initial = 'margin-right:initial;';
  readonly revert = 'margin-right:revert;';
  readonly revertLayer = 'margin-right:revert-layer;';
  readonly unset = 'margin-right:unset;';
  constructor() {
    super('margin-right');
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
    value: Extract<Property.MarginRight, number> | (string & {}),
    ...others: (Extract<Property.MarginRight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginRight, number> | (string & {}),
    ...others: (Extract<Property.MarginRight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginRight, number> | (string & {}),
    preferred: Extract<Property.MarginRight, number> | (string & {}),
    maximum: Extract<Property.MarginRight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
 */
export class MarginTopCss extends LengthCssProperty<Property.MarginTop> {
  readonly auto = 'margin-top:auto;';
  readonly inherit = 'margin-top:inherit;';
  readonly initial = 'margin-top:initial;';
  readonly revert = 'margin-top:revert;';
  readonly revertLayer = 'margin-top:revert-layer;';
  readonly unset = 'margin-top:unset;';
  constructor() {
    super('margin-top');
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
    value: Extract<Property.MarginTop, number> | (string & {}),
    ...others: (Extract<Property.MarginTop, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MarginTop, number> | (string & {}),
    ...others: (Extract<Property.MarginTop, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MarginTop, number> | (string & {}),
    preferred: Extract<Property.MarginTop, number> | (string & {}),
    maximum: Extract<Property.MarginTop, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 margin-trim；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
 */
export class MarginTrimCss extends CssProperty<Property.MarginTrim> {
  readonly all = 'margin-trim:all;';
  readonly inFlow = 'margin-trim:in-flow;';
  readonly inherit = 'margin-trim:inherit;';
  readonly initial = 'margin-trim:initial;';
  readonly none = 'margin-trim:none;';
  readonly revert = 'margin-trim:revert;';
  readonly revertLayer = 'margin-trim:revert-layer;';
  readonly unset = 'margin-trim:unset;';
  constructor() {
    super('margin-trim');
  }
}

/** CSS 属性 marker。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
 */
export class MarkerCss extends CssProperty<Property.Marker> {
  readonly inherit = 'marker:inherit;';
  readonly initial = 'marker:initial;';
  readonly none = 'marker:none;';
  readonly revert = 'marker:revert;';
  readonly revertLayer = 'marker:revert-layer;';
  readonly unset = 'marker:unset;';
  constructor() {
    super('marker');
  }
}

/** CSS 属性 marker-end；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
 */
export class MarkerEndCss extends CssProperty<Property.MarkerEnd> {
  readonly inherit = 'marker-end:inherit;';
  readonly initial = 'marker-end:initial;';
  readonly none = 'marker-end:none;';
  readonly revert = 'marker-end:revert;';
  readonly revertLayer = 'marker-end:revert-layer;';
  readonly unset = 'marker-end:unset;';
  constructor() {
    super('marker-end');
  }
}

/** CSS 属性 marker-mid；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
 */
export class MarkerMidCss extends CssProperty<Property.MarkerMid> {
  readonly inherit = 'marker-mid:inherit;';
  readonly initial = 'marker-mid:initial;';
  readonly none = 'marker-mid:none;';
  readonly revert = 'marker-mid:revert;';
  readonly revertLayer = 'marker-mid:revert-layer;';
  readonly unset = 'marker-mid:unset;';
  constructor() {
    super('marker-mid');
  }
}

/** CSS 属性 marker-start；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
 */
export class MarkerStartCss extends CssProperty<Property.MarkerStart> {
  readonly inherit = 'marker-start:inherit;';
  readonly initial = 'marker-start:initial;';
  readonly none = 'marker-start:none;';
  readonly revert = 'marker-start:revert;';
  readonly revertLayer = 'marker-start:revert-layer;';
  readonly unset = 'marker-start:unset;';
  constructor() {
    super('marker-start');
  }
}

/** CSS 属性 mask。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
 */
export class MaskCss extends LengthCssProperty<Property.Mask> {
  readonly add = 'mask:add;';
  readonly alpha = 'mask:alpha;';
  readonly borderBox = 'mask:border-box;';
  readonly bottom = 'mask:bottom;';
  readonly center = 'mask:center;';
  readonly contentBox = 'mask:content-box;';
  readonly exclude = 'mask:exclude;';
  readonly fillBox = 'mask:fill-box;';
  readonly inherit = 'mask:inherit;';
  readonly initial = 'mask:initial;';
  readonly intersect = 'mask:intersect;';
  readonly left = 'mask:left;';
  readonly luminance = 'mask:luminance;';
  readonly marginBox = 'mask:margin-box;';
  readonly matchSource = 'mask:match-source;';
  readonly noClip = 'mask:no-clip;';
  readonly noRepeat = 'mask:no-repeat;';
  readonly none = 'mask:none;';
  readonly paddingBox = 'mask:padding-box;';
  readonly repeat = 'mask:repeat;';
  readonly repeatX = 'mask:repeat-x;';
  readonly repeatY = 'mask:repeat-y;';
  readonly revert = 'mask:revert;';
  readonly revertLayer = 'mask:revert-layer;';
  readonly right = 'mask:right;';
  readonly round = 'mask:round;';
  readonly space = 'mask:space;';
  readonly strokeBox = 'mask:stroke-box;';
  readonly subtract = 'mask:subtract;';
  readonly top = 'mask:top;';
  readonly unset = 'mask:unset;';
  readonly viewBox = 'mask:view-box;';
  constructor() {
    super('mask');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Mask, number> | (string & {}),
    ...others: (Extract<Property.Mask, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Mask, number> | (string & {}),
    ...others: (Extract<Property.Mask, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Mask, number> | (string & {}),
    preferred: Extract<Property.Mask, number> | (string & {}),
    maximum: Extract<Property.Mask, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mask-border。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
 */
export class MaskBorderCss extends CssProperty<Property.MaskBorder> {
  readonly alpha = 'mask-border:alpha;';
  readonly inherit = 'mask-border:inherit;';
  readonly initial = 'mask-border:initial;';
  readonly luminance = 'mask-border:luminance;';
  readonly none = 'mask-border:none;';
  readonly repeat = 'mask-border:repeat;';
  readonly revert = 'mask-border:revert;';
  readonly revertLayer = 'mask-border:revert-layer;';
  readonly round = 'mask-border:round;';
  readonly space = 'mask-border:space;';
  readonly stretch = 'mask-border:stretch;';
  readonly unset = 'mask-border:unset;';
  constructor() {
    super('mask-border');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MaskBorder, number> | (string & {}),
    ...others: (Extract<Property.MaskBorder, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaskBorder, number> | (string & {}),
    ...others: (Extract<Property.MaskBorder, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaskBorder, number> | (string & {}),
    preferred: Extract<Property.MaskBorder, number> | (string & {}),
    maximum: Extract<Property.MaskBorder, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mask-border-mode；初始值 alpha。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
 */
export class MaskBorderModeCss extends CssProperty<Property.MaskBorderMode> {
  readonly alpha = 'mask-border-mode:alpha;';
  readonly inherit = 'mask-border-mode:inherit;';
  readonly initial = 'mask-border-mode:initial;';
  readonly luminance = 'mask-border-mode:luminance;';
  readonly revert = 'mask-border-mode:revert;';
  readonly revertLayer = 'mask-border-mode:revert-layer;';
  readonly unset = 'mask-border-mode:unset;';
  constructor() {
    super('mask-border-mode');
  }
}

/** CSS 属性 mask-border-outset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
 */
export class MaskBorderOutsetCss extends LengthCssProperty<Property.MaskBorderOutset> {
  readonly inherit = 'mask-border-outset:inherit;';
  readonly initial = 'mask-border-outset:initial;';
  readonly revert = 'mask-border-outset:revert;';
  readonly revertLayer = 'mask-border-outset:revert-layer;';
  readonly unset = 'mask-border-outset:unset;';
  constructor() {
    super('mask-border-outset');
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
    value: Extract<Property.MaskBorderOutset, number> | (string & {}),
    ...others: (Extract<Property.MaskBorderOutset, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaskBorderOutset, number> | (string & {}),
    ...others: (Extract<Property.MaskBorderOutset, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaskBorderOutset, number> | (string & {}),
    preferred: Extract<Property.MaskBorderOutset, number> | (string & {}),
    maximum: Extract<Property.MaskBorderOutset, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mask-border-repeat；初始值 stretch。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
 */
export class MaskBorderRepeatCss extends CssProperty<Property.MaskBorderRepeat> {
  readonly inherit = 'mask-border-repeat:inherit;';
  readonly initial = 'mask-border-repeat:initial;';
  readonly repeat = 'mask-border-repeat:repeat;';
  readonly revert = 'mask-border-repeat:revert;';
  readonly revertLayer = 'mask-border-repeat:revert-layer;';
  readonly round = 'mask-border-repeat:round;';
  readonly space = 'mask-border-repeat:space;';
  readonly stretch = 'mask-border-repeat:stretch;';
  readonly unset = 'mask-border-repeat:unset;';
  constructor() {
    super('mask-border-repeat');
  }
}

/** CSS 属性 mask-border-slice；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
 */
export class MaskBorderSliceCss extends CssProperty<Property.MaskBorderSlice> {
  readonly inherit = 'mask-border-slice:inherit;';
  readonly initial = 'mask-border-slice:initial;';
  readonly revert = 'mask-border-slice:revert;';
  readonly revertLayer = 'mask-border-slice:revert-layer;';
  readonly unset = 'mask-border-slice:unset;';
  constructor() {
    super('mask-border-slice');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MaskBorderSlice, number> | (string & {}),
    ...others: (Extract<Property.MaskBorderSlice, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaskBorderSlice, number> | (string & {}),
    ...others: (Extract<Property.MaskBorderSlice, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaskBorderSlice, number> | (string & {}),
    preferred: Extract<Property.MaskBorderSlice, number> | (string & {}),
    maximum: Extract<Property.MaskBorderSlice, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mask-border-source；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
 */
export class MaskBorderSourceCss extends CssProperty<Property.MaskBorderSource> {
  readonly inherit = 'mask-border-source:inherit;';
  readonly initial = 'mask-border-source:initial;';
  readonly none = 'mask-border-source:none;';
  readonly revert = 'mask-border-source:revert;';
  readonly revertLayer = 'mask-border-source:revert-layer;';
  readonly unset = 'mask-border-source:unset;';
  constructor() {
    super('mask-border-source');
  }
}

/** CSS 属性 mask-border-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
 */
export class MaskBorderWidthCss extends LengthCssProperty<Property.MaskBorderWidth> {
  readonly auto = 'mask-border-width:auto;';
  readonly inherit = 'mask-border-width:inherit;';
  readonly initial = 'mask-border-width:initial;';
  readonly revert = 'mask-border-width:revert;';
  readonly revertLayer = 'mask-border-width:revert-layer;';
  readonly unset = 'mask-border-width:unset;';
  constructor() {
    super('mask-border-width');
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
    value: Extract<Property.MaskBorderWidth, number> | (string & {}),
    ...others: (Extract<Property.MaskBorderWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaskBorderWidth, number> | (string & {}),
    ...others: (Extract<Property.MaskBorderWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaskBorderWidth, number> | (string & {}),
    preferred: Extract<Property.MaskBorderWidth, number> | (string & {}),
    maximum: Extract<Property.MaskBorderWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mask-clip；初始值 border-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
 */
export class MaskClipCss extends CssProperty<Property.MaskClip> {
  readonly borderBox = 'mask-clip:border-box;';
  readonly contentBox = 'mask-clip:content-box;';
  readonly fillBox = 'mask-clip:fill-box;';
  readonly inherit = 'mask-clip:inherit;';
  readonly initial = 'mask-clip:initial;';
  readonly noClip = 'mask-clip:no-clip;';
  readonly paddingBox = 'mask-clip:padding-box;';
  readonly revert = 'mask-clip:revert;';
  readonly revertLayer = 'mask-clip:revert-layer;';
  readonly strokeBox = 'mask-clip:stroke-box;';
  readonly unset = 'mask-clip:unset;';
  readonly viewBox = 'mask-clip:view-box;';
  constructor() {
    super('mask-clip');
  }
}

/** CSS 属性 mask-composite；初始值 add。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
 */
export class MaskCompositeCss extends CssProperty<Property.MaskComposite> {
  readonly add = 'mask-composite:add;';
  readonly exclude = 'mask-composite:exclude;';
  readonly inherit = 'mask-composite:inherit;';
  readonly initial = 'mask-composite:initial;';
  readonly intersect = 'mask-composite:intersect;';
  readonly revert = 'mask-composite:revert;';
  readonly revertLayer = 'mask-composite:revert-layer;';
  readonly subtract = 'mask-composite:subtract;';
  readonly unset = 'mask-composite:unset;';
  constructor() {
    super('mask-composite');
  }
}

/** CSS 属性 mask-image；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
 */
export class MaskImageCss extends CssProperty<Property.MaskImage> {
  readonly inherit = 'mask-image:inherit;';
  readonly initial = 'mask-image:initial;';
  readonly none = 'mask-image:none;';
  readonly revert = 'mask-image:revert;';
  readonly revertLayer = 'mask-image:revert-layer;';
  readonly unset = 'mask-image:unset;';
  constructor() {
    super('mask-image');
  }
}

/** CSS 属性 mask-mode；初始值 match-source。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
 */
export class MaskModeCss extends CssProperty<Property.MaskMode> {
  readonly alpha = 'mask-mode:alpha;';
  readonly inherit = 'mask-mode:inherit;';
  readonly initial = 'mask-mode:initial;';
  readonly luminance = 'mask-mode:luminance;';
  readonly matchSource = 'mask-mode:match-source;';
  readonly revert = 'mask-mode:revert;';
  readonly revertLayer = 'mask-mode:revert-layer;';
  readonly unset = 'mask-mode:unset;';
  constructor() {
    super('mask-mode');
  }
}

/** CSS 属性 mask-origin；初始值 border-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
 */
export class MaskOriginCss extends CssProperty<Property.MaskOrigin> {
  readonly borderBox = 'mask-origin:border-box;';
  readonly contentBox = 'mask-origin:content-box;';
  readonly fillBox = 'mask-origin:fill-box;';
  readonly inherit = 'mask-origin:inherit;';
  readonly initial = 'mask-origin:initial;';
  readonly paddingBox = 'mask-origin:padding-box;';
  readonly revert = 'mask-origin:revert;';
  readonly revertLayer = 'mask-origin:revert-layer;';
  readonly strokeBox = 'mask-origin:stroke-box;';
  readonly unset = 'mask-origin:unset;';
  readonly viewBox = 'mask-origin:view-box;';
  constructor() {
    super('mask-origin');
  }
}

/** CSS 属性 mask-position；初始值 0% 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
 */
export class MaskPositionCss extends LengthCssProperty<Property.MaskPosition> {
  readonly bottom = 'mask-position:bottom;';
  readonly center = 'mask-position:center;';
  readonly inherit = 'mask-position:inherit;';
  readonly initial = 'mask-position:initial;';
  readonly left = 'mask-position:left;';
  readonly revert = 'mask-position:revert;';
  readonly revertLayer = 'mask-position:revert-layer;';
  readonly right = 'mask-position:right;';
  readonly top = 'mask-position:top;';
  readonly unset = 'mask-position:unset;';
  constructor() {
    super('mask-position');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MaskPosition, number> | (string & {}),
    ...others: (Extract<Property.MaskPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaskPosition, number> | (string & {}),
    ...others: (Extract<Property.MaskPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaskPosition, number> | (string & {}),
    preferred: Extract<Property.MaskPosition, number> | (string & {}),
    maximum: Extract<Property.MaskPosition, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mask-repeat；初始值 repeat。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
 */
export class MaskRepeatCss extends CssProperty<Property.MaskRepeat> {
  readonly inherit = 'mask-repeat:inherit;';
  readonly initial = 'mask-repeat:initial;';
  readonly noRepeat = 'mask-repeat:no-repeat;';
  readonly repeat = 'mask-repeat:repeat;';
  readonly repeatX = 'mask-repeat:repeat-x;';
  readonly repeatY = 'mask-repeat:repeat-y;';
  readonly revert = 'mask-repeat:revert;';
  readonly revertLayer = 'mask-repeat:revert-layer;';
  readonly round = 'mask-repeat:round;';
  readonly space = 'mask-repeat:space;';
  readonly unset = 'mask-repeat:unset;';
  constructor() {
    super('mask-repeat');
  }
}

/** CSS 属性 mask-size；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
 */
export class MaskSizeCss extends LengthCssProperty<Property.MaskSize> {
  readonly auto = 'mask-size:auto;';
  readonly contain = 'mask-size:contain;';
  readonly cover = 'mask-size:cover;';
  readonly inherit = 'mask-size:inherit;';
  readonly initial = 'mask-size:initial;';
  readonly revert = 'mask-size:revert;';
  readonly revertLayer = 'mask-size:revert-layer;';
  readonly unset = 'mask-size:unset;';
  constructor() {
    super('mask-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MaskSize, number> | (string & {}),
    ...others: (Extract<Property.MaskSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaskSize, number> | (string & {}),
    ...others: (Extract<Property.MaskSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaskSize, number> | (string & {}),
    preferred: Extract<Property.MaskSize, number> | (string & {}),
    maximum: Extract<Property.MaskSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mask-type；初始值 luminance。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
 */
export class MaskTypeCss extends CssProperty<Property.MaskType> {
  readonly alpha = 'mask-type:alpha;';
  readonly inherit = 'mask-type:inherit;';
  readonly initial = 'mask-type:initial;';
  readonly luminance = 'mask-type:luminance;';
  readonly revert = 'mask-type:revert;';
  readonly revertLayer = 'mask-type:revert-layer;';
  readonly unset = 'mask-type:unset;';
  constructor() {
    super('mask-type');
  }
}

/** CSS 属性 masonry-auto-flow；初始值 pack。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
 */
export class MasonryAutoFlowCss extends CssProperty<Property.MasonryAutoFlow> {
  readonly definiteFirst = 'masonry-auto-flow:definite-first;';
  readonly inherit = 'masonry-auto-flow:inherit;';
  readonly initial = 'masonry-auto-flow:initial;';
  readonly next = 'masonry-auto-flow:next;';
  readonly ordered = 'masonry-auto-flow:ordered;';
  readonly pack = 'masonry-auto-flow:pack;';
  readonly revert = 'masonry-auto-flow:revert;';
  readonly revertLayer = 'masonry-auto-flow:revert-layer;';
  readonly unset = 'masonry-auto-flow:unset;';
  constructor() {
    super('masonry-auto-flow');
  }
}

/** CSS 属性 math-depth；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
 */
export class MathDepthCss extends CssProperty<Property.MathDepth> {
  readonly autoAdd = 'math-depth:auto-add;';
  readonly inherit = 'math-depth:inherit;';
  readonly initial = 'math-depth:initial;';
  readonly revert = 'math-depth:revert;';
  readonly revertLayer = 'math-depth:revert-layer;';
  readonly unset = 'math-depth:unset;';
  constructor() {
    super('math-depth');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MathDepth, number> | (string & {}),
    ...others: (Extract<Property.MathDepth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MathDepth, number> | (string & {}),
    ...others: (Extract<Property.MathDepth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MathDepth, number> | (string & {}),
    preferred: Extract<Property.MathDepth, number> | (string & {}),
    maximum: Extract<Property.MathDepth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 math-shift；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
 */
export class MathShiftCss extends CssProperty<Property.MathShift> {
  readonly compact = 'math-shift:compact;';
  readonly inherit = 'math-shift:inherit;';
  readonly initial = 'math-shift:initial;';
  readonly normal = 'math-shift:normal;';
  readonly revert = 'math-shift:revert;';
  readonly revertLayer = 'math-shift:revert-layer;';
  readonly unset = 'math-shift:unset;';
  constructor() {
    super('math-shift');
  }
}

/** CSS 属性 math-style；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
 */
export class MathStyleCss extends CssProperty<Property.MathStyle> {
  readonly compact = 'math-style:compact;';
  readonly inherit = 'math-style:inherit;';
  readonly initial = 'math-style:initial;';
  readonly normal = 'math-style:normal;';
  readonly revert = 'math-style:revert;';
  readonly revertLayer = 'math-style:revert-layer;';
  readonly unset = 'math-style:unset;';
  constructor() {
    super('math-style');
  }
}

/** CSS 属性 max-block-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
 */
export class MaxBlockSizeCss extends LengthCssProperty<Property.MaxBlockSize> {
  readonly fitContent = 'max-block-size:fit-content;';
  readonly inherit = 'max-block-size:inherit;';
  readonly initial = 'max-block-size:initial;';
  readonly maxContent = 'max-block-size:max-content;';
  readonly minContent = 'max-block-size:min-content;';
  readonly none = 'max-block-size:none;';
  readonly revert = 'max-block-size:revert;';
  readonly revertLayer = 'max-block-size:revert-layer;';
  readonly unset = 'max-block-size:unset;';
  constructor() {
    super('max-block-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MaxBlockSize, number> | (string & {}),
    ...others: (Extract<Property.MaxBlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaxBlockSize, number> | (string & {}),
    ...others: (Extract<Property.MaxBlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaxBlockSize, number> | (string & {}),
    preferred: Extract<Property.MaxBlockSize, number> | (string & {}),
    maximum: Extract<Property.MaxBlockSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 max-height；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
 */
export class MaxHeightCss extends LengthCssProperty<Property.MaxHeight> {
  readonly fitContent = 'max-height:fit-content;';
  readonly inherit = 'max-height:inherit;';
  readonly initial = 'max-height:initial;';
  readonly intrinsic = 'max-height:intrinsic;';
  readonly maxContent = 'max-height:max-content;';
  readonly minContent = 'max-height:min-content;';
  readonly none = 'max-height:none;';
  readonly revert = 'max-height:revert;';
  readonly revertLayer = 'max-height:revert-layer;';
  readonly unset = 'max-height:unset;';
  constructor() {
    super('max-height');
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
    value: Extract<Property.MaxHeight, number> | (string & {}),
    ...others: (Extract<Property.MaxHeight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaxHeight, number> | (string & {}),
    ...others: (Extract<Property.MaxHeight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaxHeight, number> | (string & {}),
    preferred: Extract<Property.MaxHeight, number> | (string & {}),
    maximum: Extract<Property.MaxHeight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 max-inline-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
 */
export class MaxInlineSizeCss extends LengthCssProperty<Property.MaxInlineSize> {
  readonly fitContent = 'max-inline-size:fit-content;';
  readonly inherit = 'max-inline-size:inherit;';
  readonly initial = 'max-inline-size:initial;';
  readonly maxContent = 'max-inline-size:max-content;';
  readonly minContent = 'max-inline-size:min-content;';
  readonly none = 'max-inline-size:none;';
  readonly revert = 'max-inline-size:revert;';
  readonly revertLayer = 'max-inline-size:revert-layer;';
  readonly unset = 'max-inline-size:unset;';
  constructor() {
    super('max-inline-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MaxInlineSize, number> | (string & {}),
    ...others: (Extract<Property.MaxInlineSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaxInlineSize, number> | (string & {}),
    ...others: (Extract<Property.MaxInlineSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaxInlineSize, number> | (string & {}),
    preferred: Extract<Property.MaxInlineSize, number> | (string & {}),
    maximum: Extract<Property.MaxInlineSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 max-lines；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
 */
export class MaxLinesCss extends CssProperty<Property.MaxLines> {
  readonly inherit = 'max-lines:inherit;';
  readonly initial = 'max-lines:initial;';
  readonly none = 'max-lines:none;';
  readonly revert = 'max-lines:revert;';
  readonly revertLayer = 'max-lines:revert-layer;';
  readonly unset = 'max-lines:unset;';
  constructor() {
    super('max-lines');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MaxLines, number> | (string & {}),
    ...others: (Extract<Property.MaxLines, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaxLines, number> | (string & {}),
    ...others: (Extract<Property.MaxLines, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaxLines, number> | (string & {}),
    preferred: Extract<Property.MaxLines, number> | (string & {}),
    maximum: Extract<Property.MaxLines, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 max-width；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
 */
export class MaxWidthCss extends LengthCssProperty<Property.MaxWidth> {
  readonly fitContent = 'max-width:fit-content;';
  readonly inherit = 'max-width:inherit;';
  readonly initial = 'max-width:initial;';
  readonly intrinsic = 'max-width:intrinsic;';
  readonly maxContent = 'max-width:max-content;';
  readonly minContent = 'max-width:min-content;';
  readonly none = 'max-width:none;';
  readonly revert = 'max-width:revert;';
  readonly revertLayer = 'max-width:revert-layer;';
  readonly unset = 'max-width:unset;';
  constructor() {
    super('max-width');
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
    value: Extract<Property.MaxWidth, number> | (string & {}),
    ...others: (Extract<Property.MaxWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MaxWidth, number> | (string & {}),
    ...others: (Extract<Property.MaxWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MaxWidth, number> | (string & {}),
    preferred: Extract<Property.MaxWidth, number> | (string & {}),
    maximum: Extract<Property.MaxWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 min-block-size；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
 */
export class MinBlockSizeCss extends LengthCssProperty<Property.MinBlockSize> {
  readonly auto = 'min-block-size:auto;';
  readonly fitContent = 'min-block-size:fit-content;';
  readonly inherit = 'min-block-size:inherit;';
  readonly initial = 'min-block-size:initial;';
  readonly maxContent = 'min-block-size:max-content;';
  readonly minContent = 'min-block-size:min-content;';
  readonly revert = 'min-block-size:revert;';
  readonly revertLayer = 'min-block-size:revert-layer;';
  readonly unset = 'min-block-size:unset;';
  constructor() {
    super('min-block-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MinBlockSize, number> | (string & {}),
    ...others: (Extract<Property.MinBlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MinBlockSize, number> | (string & {}),
    ...others: (Extract<Property.MinBlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MinBlockSize, number> | (string & {}),
    preferred: Extract<Property.MinBlockSize, number> | (string & {}),
    maximum: Extract<Property.MinBlockSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 min-height；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
 */
export class MinHeightCss extends LengthCssProperty<Property.MinHeight> {
  readonly auto = 'min-height:auto;';
  readonly fitContent = 'min-height:fit-content;';
  readonly inherit = 'min-height:inherit;';
  readonly initial = 'min-height:initial;';
  readonly intrinsic = 'min-height:intrinsic;';
  readonly maxContent = 'min-height:max-content;';
  readonly minContent = 'min-height:min-content;';
  readonly revert = 'min-height:revert;';
  readonly revertLayer = 'min-height:revert-layer;';
  readonly unset = 'min-height:unset;';
  constructor() {
    super('min-height');
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
    value: Extract<Property.MinHeight, number> | (string & {}),
    ...others: (Extract<Property.MinHeight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MinHeight, number> | (string & {}),
    ...others: (Extract<Property.MinHeight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MinHeight, number> | (string & {}),
    preferred: Extract<Property.MinHeight, number> | (string & {}),
    maximum: Extract<Property.MinHeight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 min-inline-size；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
 */
export class MinInlineSizeCss extends LengthCssProperty<Property.MinInlineSize> {
  readonly auto = 'min-inline-size:auto;';
  readonly fitContent = 'min-inline-size:fit-content;';
  readonly inherit = 'min-inline-size:inherit;';
  readonly initial = 'min-inline-size:initial;';
  readonly maxContent = 'min-inline-size:max-content;';
  readonly minContent = 'min-inline-size:min-content;';
  readonly revert = 'min-inline-size:revert;';
  readonly revertLayer = 'min-inline-size:revert-layer;';
  readonly unset = 'min-inline-size:unset;';
  constructor() {
    super('min-inline-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.MinInlineSize, number> | (string & {}),
    ...others: (Extract<Property.MinInlineSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MinInlineSize, number> | (string & {}),
    ...others: (Extract<Property.MinInlineSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MinInlineSize, number> | (string & {}),
    preferred: Extract<Property.MinInlineSize, number> | (string & {}),
    maximum: Extract<Property.MinInlineSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 min-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
 */
export class MinWidthCss extends LengthCssProperty<Property.MinWidth> {
  readonly auto = 'min-width:auto;';
  readonly fitContent = 'min-width:fit-content;';
  readonly inherit = 'min-width:inherit;';
  readonly initial = 'min-width:initial;';
  readonly intrinsic = 'min-width:intrinsic;';
  readonly maxContent = 'min-width:max-content;';
  readonly minContent = 'min-width:min-content;';
  readonly minIntrinsic = 'min-width:min-intrinsic;';
  readonly revert = 'min-width:revert;';
  readonly revertLayer = 'min-width:revert-layer;';
  readonly unset = 'min-width:unset;';
  constructor() {
    super('min-width');
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
    value: Extract<Property.MinWidth, number> | (string & {}),
    ...others: (Extract<Property.MinWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.MinWidth, number> | (string & {}),
    ...others: (Extract<Property.MinWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.MinWidth, number> | (string & {}),
    preferred: Extract<Property.MinWidth, number> | (string & {}),
    maximum: Extract<Property.MinWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 mix-blend-mode；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
 */
export class MixBlendModeCss extends CssProperty<Property.MixBlendMode> {
  readonly color = 'mix-blend-mode:color;';
  readonly colorBurn = 'mix-blend-mode:color-burn;';
  readonly colorDodge = 'mix-blend-mode:color-dodge;';
  readonly darken = 'mix-blend-mode:darken;';
  readonly difference = 'mix-blend-mode:difference;';
  readonly exclusion = 'mix-blend-mode:exclusion;';
  readonly hardLight = 'mix-blend-mode:hard-light;';
  readonly hue = 'mix-blend-mode:hue;';
  readonly inherit = 'mix-blend-mode:inherit;';
  readonly initial = 'mix-blend-mode:initial;';
  readonly lighten = 'mix-blend-mode:lighten;';
  readonly luminosity = 'mix-blend-mode:luminosity;';
  readonly multiply = 'mix-blend-mode:multiply;';
  readonly normal = 'mix-blend-mode:normal;';
  readonly overlay = 'mix-blend-mode:overlay;';
  readonly plusDarker = 'mix-blend-mode:plus-darker;';
  readonly plusLighter = 'mix-blend-mode:plus-lighter;';
  readonly revert = 'mix-blend-mode:revert;';
  readonly revertLayer = 'mix-blend-mode:revert-layer;';
  readonly saturation = 'mix-blend-mode:saturation;';
  readonly screen = 'mix-blend-mode:screen;';
  readonly softLight = 'mix-blend-mode:soft-light;';
  readonly unset = 'mix-blend-mode:unset;';
  constructor() {
    super('mix-blend-mode');
  }
}

/** CSS 属性 motion。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
 */
export class MotionCss extends LengthCssProperty<Property.Offset> {
  readonly auto = 'motion:auto;';
  readonly borderBox = 'motion:border-box;';
  readonly bottom = 'motion:bottom;';
  readonly center = 'motion:center;';
  readonly contentBox = 'motion:content-box;';
  readonly fillBox = 'motion:fill-box;';
  readonly inherit = 'motion:inherit;';
  readonly initial = 'motion:initial;';
  readonly left = 'motion:left;';
  readonly none = 'motion:none;';
  readonly normal = 'motion:normal;';
  readonly paddingBox = 'motion:padding-box;';
  readonly revert = 'motion:revert;';
  readonly revertLayer = 'motion:revert-layer;';
  readonly right = 'motion:right;';
  readonly strokeBox = 'motion:stroke-box;';
  readonly top = 'motion:top;';
  readonly unset = 'motion:unset;';
  readonly viewBox = 'motion:view-box;';
  constructor() {
    super('motion');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Offset, number> | (string & {}),
    ...others: (Extract<Property.Offset, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Offset, number> | (string & {}),
    ...others: (Extract<Property.Offset, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Offset, number> | (string & {}),
    preferred: Extract<Property.Offset, number> | (string & {}),
    maximum: Extract<Property.Offset, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 motion-distance；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
 */
export class MotionDistanceCss extends LengthCssProperty<Property.OffsetDistance> {
  readonly inherit = 'motion-distance:inherit;';
  readonly initial = 'motion-distance:initial;';
  readonly revert = 'motion-distance:revert;';
  readonly revertLayer = 'motion-distance:revert-layer;';
  readonly unset = 'motion-distance:unset;';
  constructor() {
    super('motion-distance');
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
    value: Extract<Property.OffsetDistance, number> | (string & {}),
    ...others: (Extract<Property.OffsetDistance, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OffsetDistance, number> | (string & {}),
    ...others: (Extract<Property.OffsetDistance, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OffsetDistance, number> | (string & {}),
    preferred: Extract<Property.OffsetDistance, number> | (string & {}),
    maximum: Extract<Property.OffsetDistance, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 motion-path；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
 */
export class MotionPathCss extends CssProperty<Property.OffsetPath> {
  readonly borderBox = 'motion-path:border-box;';
  readonly contentBox = 'motion-path:content-box;';
  readonly fillBox = 'motion-path:fill-box;';
  readonly inherit = 'motion-path:inherit;';
  readonly initial = 'motion-path:initial;';
  readonly none = 'motion-path:none;';
  readonly paddingBox = 'motion-path:padding-box;';
  readonly revert = 'motion-path:revert;';
  readonly revertLayer = 'motion-path:revert-layer;';
  readonly strokeBox = 'motion-path:stroke-box;';
  readonly unset = 'motion-path:unset;';
  readonly viewBox = 'motion-path:view-box;';
  constructor() {
    super('motion-path');
  }
}

/** CSS 属性 motion-rotation；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class MotionRotationCss extends CssProperty<Property.OffsetRotate> {
  readonly auto = 'motion-rotation:auto;';
  readonly inherit = 'motion-rotation:inherit;';
  readonly initial = 'motion-rotation:initial;';
  readonly reverse = 'motion-rotation:reverse;';
  readonly revert = 'motion-rotation:revert;';
  readonly revertLayer = 'motion-rotation:revert-layer;';
  readonly unset = 'motion-rotation:unset;';
  constructor() {
    super('motion-rotation');
  }
  /** 使用 deg 单位生成声明；数值合法性由浏览器处理。 */
  deg(value: number): string {
    return `${this.name}:${value}deg;`;
  }
  /** 使用 grad 单位生成声明；数值合法性由浏览器处理。 */
  grad(value: number): string {
    return `${this.name}:${value}grad;`;
  }
  /** 使用 rad 单位生成声明；数值合法性由浏览器处理。 */
  rad(value: number): string {
    return `${this.name}:${value}rad;`;
  }
  /** 使用 turn 单位生成声明；数值合法性由浏览器处理。 */
  turn(value: number): string {
    return `${this.name}:${value}turn;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OffsetRotate, number> | (string & {}),
    ...others: (Extract<Property.OffsetRotate, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OffsetRotate, number> | (string & {}),
    ...others: (Extract<Property.OffsetRotate, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OffsetRotate, number> | (string & {}),
    preferred: Extract<Property.OffsetRotate, number> | (string & {}),
    maximum: Extract<Property.OffsetRotate, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 object-fit；初始值 fill。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
 */
export class ObjectFitCss extends CssProperty<Property.ObjectFit> {
  readonly contain = 'object-fit:contain;';
  readonly cover = 'object-fit:cover;';
  readonly fill = 'object-fit:fill;';
  readonly inherit = 'object-fit:inherit;';
  readonly initial = 'object-fit:initial;';
  readonly none = 'object-fit:none;';
  readonly revert = 'object-fit:revert;';
  readonly revertLayer = 'object-fit:revert-layer;';
  readonly scaleDown = 'object-fit:scale-down;';
  readonly unset = 'object-fit:unset;';
  constructor() {
    super('object-fit');
  }
}

/** CSS 属性 object-position；初始值 50% 50%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
 */
export class ObjectPositionCss extends LengthCssProperty<Property.ObjectPosition> {
  readonly bottom = 'object-position:bottom;';
  readonly center = 'object-position:center;';
  readonly inherit = 'object-position:inherit;';
  readonly initial = 'object-position:initial;';
  readonly left = 'object-position:left;';
  readonly revert = 'object-position:revert;';
  readonly revertLayer = 'object-position:revert-layer;';
  readonly right = 'object-position:right;';
  readonly top = 'object-position:top;';
  readonly unset = 'object-position:unset;';
  constructor() {
    super('object-position');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ObjectPosition, number> | (string & {}),
    ...others: (Extract<Property.ObjectPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ObjectPosition, number> | (string & {}),
    ...others: (Extract<Property.ObjectPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ObjectPosition, number> | (string & {}),
    preferred: Extract<Property.ObjectPosition, number> | (string & {}),
    maximum: Extract<Property.ObjectPosition, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 object-view-box；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
 */
export class ObjectViewBoxCss extends CssProperty<Property.ObjectViewBox> {
  readonly inherit = 'object-view-box:inherit;';
  readonly initial = 'object-view-box:initial;';
  readonly none = 'object-view-box:none;';
  readonly revert = 'object-view-box:revert;';
  readonly revertLayer = 'object-view-box:revert-layer;';
  readonly unset = 'object-view-box:unset;';
  constructor() {
    super('object-view-box');
  }
}

/** CSS 属性 offset。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
 */
export class OffsetCss extends LengthCssProperty<Property.Offset> {
  readonly auto = 'offset:auto;';
  readonly borderBox = 'offset:border-box;';
  readonly bottom = 'offset:bottom;';
  readonly center = 'offset:center;';
  readonly contentBox = 'offset:content-box;';
  readonly fillBox = 'offset:fill-box;';
  readonly inherit = 'offset:inherit;';
  readonly initial = 'offset:initial;';
  readonly left = 'offset:left;';
  readonly none = 'offset:none;';
  readonly normal = 'offset:normal;';
  readonly paddingBox = 'offset:padding-box;';
  readonly revert = 'offset:revert;';
  readonly revertLayer = 'offset:revert-layer;';
  readonly right = 'offset:right;';
  readonly strokeBox = 'offset:stroke-box;';
  readonly top = 'offset:top;';
  readonly unset = 'offset:unset;';
  readonly viewBox = 'offset:view-box;';
  constructor() {
    super('offset');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Offset, number> | (string & {}),
    ...others: (Extract<Property.Offset, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Offset, number> | (string & {}),
    ...others: (Extract<Property.Offset, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Offset, number> | (string & {}),
    preferred: Extract<Property.Offset, number> | (string & {}),
    maximum: Extract<Property.Offset, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 offset-anchor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
 */
export class OffsetAnchorCss extends LengthCssProperty<Property.OffsetAnchor> {
  readonly auto = 'offset-anchor:auto;';
  readonly bottom = 'offset-anchor:bottom;';
  readonly center = 'offset-anchor:center;';
  readonly inherit = 'offset-anchor:inherit;';
  readonly initial = 'offset-anchor:initial;';
  readonly left = 'offset-anchor:left;';
  readonly revert = 'offset-anchor:revert;';
  readonly revertLayer = 'offset-anchor:revert-layer;';
  readonly right = 'offset-anchor:right;';
  readonly top = 'offset-anchor:top;';
  readonly unset = 'offset-anchor:unset;';
  constructor() {
    super('offset-anchor');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OffsetAnchor, number> | (string & {}),
    ...others: (Extract<Property.OffsetAnchor, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OffsetAnchor, number> | (string & {}),
    ...others: (Extract<Property.OffsetAnchor, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OffsetAnchor, number> | (string & {}),
    preferred: Extract<Property.OffsetAnchor, number> | (string & {}),
    maximum: Extract<Property.OffsetAnchor, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 offset-distance；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
 */
export class OffsetDistanceCss extends LengthCssProperty<Property.OffsetDistance> {
  readonly inherit = 'offset-distance:inherit;';
  readonly initial = 'offset-distance:initial;';
  readonly revert = 'offset-distance:revert;';
  readonly revertLayer = 'offset-distance:revert-layer;';
  readonly unset = 'offset-distance:unset;';
  constructor() {
    super('offset-distance');
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
    value: Extract<Property.OffsetDistance, number> | (string & {}),
    ...others: (Extract<Property.OffsetDistance, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OffsetDistance, number> | (string & {}),
    ...others: (Extract<Property.OffsetDistance, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OffsetDistance, number> | (string & {}),
    preferred: Extract<Property.OffsetDistance, number> | (string & {}),
    maximum: Extract<Property.OffsetDistance, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 offset-path；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
 */
export class OffsetPathCss extends CssProperty<Property.OffsetPath> {
  readonly borderBox = 'offset-path:border-box;';
  readonly contentBox = 'offset-path:content-box;';
  readonly fillBox = 'offset-path:fill-box;';
  readonly inherit = 'offset-path:inherit;';
  readonly initial = 'offset-path:initial;';
  readonly none = 'offset-path:none;';
  readonly paddingBox = 'offset-path:padding-box;';
  readonly revert = 'offset-path:revert;';
  readonly revertLayer = 'offset-path:revert-layer;';
  readonly strokeBox = 'offset-path:stroke-box;';
  readonly unset = 'offset-path:unset;';
  readonly viewBox = 'offset-path:view-box;';
  constructor() {
    super('offset-path');
  }
}

/** CSS 属性 offset-position；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
 */
export class OffsetPositionCss extends LengthCssProperty<Property.OffsetPosition> {
  readonly auto = 'offset-position:auto;';
  readonly bottom = 'offset-position:bottom;';
  readonly center = 'offset-position:center;';
  readonly inherit = 'offset-position:inherit;';
  readonly initial = 'offset-position:initial;';
  readonly left = 'offset-position:left;';
  readonly normal = 'offset-position:normal;';
  readonly revert = 'offset-position:revert;';
  readonly revertLayer = 'offset-position:revert-layer;';
  readonly right = 'offset-position:right;';
  readonly top = 'offset-position:top;';
  readonly unset = 'offset-position:unset;';
  constructor() {
    super('offset-position');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OffsetPosition, number> | (string & {}),
    ...others: (Extract<Property.OffsetPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OffsetPosition, number> | (string & {}),
    ...others: (Extract<Property.OffsetPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OffsetPosition, number> | (string & {}),
    preferred: Extract<Property.OffsetPosition, number> | (string & {}),
    maximum: Extract<Property.OffsetPosition, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 offset-rotate；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class OffsetRotateCss extends CssProperty<Property.OffsetRotate> {
  readonly auto = 'offset-rotate:auto;';
  readonly inherit = 'offset-rotate:inherit;';
  readonly initial = 'offset-rotate:initial;';
  readonly reverse = 'offset-rotate:reverse;';
  readonly revert = 'offset-rotate:revert;';
  readonly revertLayer = 'offset-rotate:revert-layer;';
  readonly unset = 'offset-rotate:unset;';
  constructor() {
    super('offset-rotate');
  }
  /** 使用 deg 单位生成声明；数值合法性由浏览器处理。 */
  deg(value: number): string {
    return `${this.name}:${value}deg;`;
  }
  /** 使用 grad 单位生成声明；数值合法性由浏览器处理。 */
  grad(value: number): string {
    return `${this.name}:${value}grad;`;
  }
  /** 使用 rad 单位生成声明；数值合法性由浏览器处理。 */
  rad(value: number): string {
    return `${this.name}:${value}rad;`;
  }
  /** 使用 turn 单位生成声明；数值合法性由浏览器处理。 */
  turn(value: number): string {
    return `${this.name}:${value}turn;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OffsetRotate, number> | (string & {}),
    ...others: (Extract<Property.OffsetRotate, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OffsetRotate, number> | (string & {}),
    ...others: (Extract<Property.OffsetRotate, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OffsetRotate, number> | (string & {}),
    preferred: Extract<Property.OffsetRotate, number> | (string & {}),
    maximum: Extract<Property.OffsetRotate, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 offset-rotation；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class OffsetRotationCss extends CssProperty<Property.OffsetRotate> {
  readonly auto = 'offset-rotation:auto;';
  readonly inherit = 'offset-rotation:inherit;';
  readonly initial = 'offset-rotation:initial;';
  readonly reverse = 'offset-rotation:reverse;';
  readonly revert = 'offset-rotation:revert;';
  readonly revertLayer = 'offset-rotation:revert-layer;';
  readonly unset = 'offset-rotation:unset;';
  constructor() {
    super('offset-rotation');
  }
  /** 使用 deg 单位生成声明；数值合法性由浏览器处理。 */
  deg(value: number): string {
    return `${this.name}:${value}deg;`;
  }
  /** 使用 grad 单位生成声明；数值合法性由浏览器处理。 */
  grad(value: number): string {
    return `${this.name}:${value}grad;`;
  }
  /** 使用 rad 单位生成声明；数值合法性由浏览器处理。 */
  rad(value: number): string {
    return `${this.name}:${value}rad;`;
  }
  /** 使用 turn 单位生成声明；数值合法性由浏览器处理。 */
  turn(value: number): string {
    return `${this.name}:${value}turn;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OffsetRotate, number> | (string & {}),
    ...others: (Extract<Property.OffsetRotate, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OffsetRotate, number> | (string & {}),
    ...others: (Extract<Property.OffsetRotate, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OffsetRotate, number> | (string & {}),
    preferred: Extract<Property.OffsetRotate, number> | (string & {}),
    maximum: Extract<Property.OffsetRotate, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** 不透明度（CSS opacity）；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
 */
export class OpacityCss extends CssProperty<Property.Opacity> {
  readonly inherit = 'opacity:inherit;';
  readonly initial = 'opacity:initial;';
  readonly revert = 'opacity:revert;';
  readonly revertLayer = 'opacity:revert-layer;';
  readonly unset = 'opacity:unset;';
  constructor() {
    super('opacity');
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
    value: Extract<Property.Opacity, number> | (string & {}),
    ...others: (Extract<Property.Opacity, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Opacity, number> | (string & {}),
    ...others: (Extract<Property.Opacity, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Opacity, number> | (string & {}),
    preferred: Extract<Property.Opacity, number> | (string & {}),
    maximum: Extract<Property.Opacity, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 order；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
 */
export class OrderCss extends CssProperty<Property.Order> {
  readonly inherit = 'order:inherit;';
  readonly initial = 'order:initial;';
  readonly revert = 'order:revert;';
  readonly revertLayer = 'order:revert-layer;';
  readonly unset = 'order:unset;';
  constructor() {
    super('order');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Order, number> | (string & {}),
    ...others: (Extract<Property.Order, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Order, number> | (string & {}),
    ...others: (Extract<Property.Order, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Order, number> | (string & {}),
    preferred: Extract<Property.Order, number> | (string & {}),
    maximum: Extract<Property.Order, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 orphans；初始值 2。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
 */
export class OrphansCss extends CssProperty<Property.Orphans> {
  readonly inherit = 'orphans:inherit;';
  readonly initial = 'orphans:initial;';
  readonly revert = 'orphans:revert;';
  readonly revertLayer = 'orphans:revert-layer;';
  readonly unset = 'orphans:unset;';
  constructor() {
    super('orphans');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Orphans, number> | (string & {}),
    ...others: (Extract<Property.Orphans, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Orphans, number> | (string & {}),
    ...others: (Extract<Property.Orphans, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Orphans, number> | (string & {}),
    preferred: Extract<Property.Orphans, number> | (string & {}),
    maximum: Extract<Property.Orphans, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 outline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
 */
export class OutlineCss extends LengthCssProperty<Property.Outline> {
  readonly AccentColor = 'outline:AccentColor;';
  readonly AccentColorText = 'outline:AccentColorText;';
  readonly ActiveBorder = 'outline:ActiveBorder;';
  readonly ActiveCaption = 'outline:ActiveCaption;';
  readonly ActiveText = 'outline:ActiveText;';
  readonly AppWorkspace = 'outline:AppWorkspace;';
  readonly Background = 'outline:Background;';
  readonly ButtonBorder = 'outline:ButtonBorder;';
  readonly ButtonFace = 'outline:ButtonFace;';
  readonly ButtonHighlight = 'outline:ButtonHighlight;';
  readonly ButtonShadow = 'outline:ButtonShadow;';
  readonly ButtonText = 'outline:ButtonText;';
  readonly Canvas = 'outline:Canvas;';
  readonly CanvasText = 'outline:CanvasText;';
  readonly CaptionText = 'outline:CaptionText;';
  readonly Field = 'outline:Field;';
  readonly FieldText = 'outline:FieldText;';
  readonly GrayText = 'outline:GrayText;';
  readonly Highlight = 'outline:Highlight;';
  readonly HighlightText = 'outline:HighlightText;';
  readonly InactiveBorder = 'outline:InactiveBorder;';
  readonly InactiveCaption = 'outline:InactiveCaption;';
  readonly InactiveCaptionText = 'outline:InactiveCaptionText;';
  readonly InfoBackground = 'outline:InfoBackground;';
  readonly InfoText = 'outline:InfoText;';
  readonly LinkText = 'outline:LinkText;';
  readonly Mark = 'outline:Mark;';
  readonly MarkText = 'outline:MarkText;';
  readonly Menu = 'outline:Menu;';
  readonly MenuText = 'outline:MenuText;';
  readonly Scrollbar = 'outline:Scrollbar;';
  readonly SelectedItem = 'outline:SelectedItem;';
  readonly SelectedItemText = 'outline:SelectedItemText;';
  readonly ThreeDDarkShadow = 'outline:ThreeDDarkShadow;';
  readonly ThreeDFace = 'outline:ThreeDFace;';
  readonly ThreeDHighlight = 'outline:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'outline:ThreeDLightShadow;';
  readonly ThreeDShadow = 'outline:ThreeDShadow;';
  readonly VisitedText = 'outline:VisitedText;';
  readonly Window = 'outline:Window;';
  readonly WindowFrame = 'outline:WindowFrame;';
  readonly WindowText = 'outline:WindowText;';
  readonly aliceblue = 'outline:aliceblue;';
  readonly antiquewhite = 'outline:antiquewhite;';
  readonly aqua = 'outline:aqua;';
  readonly aquamarine = 'outline:aquamarine;';
  readonly auto = 'outline:auto;';
  readonly azure = 'outline:azure;';
  readonly beige = 'outline:beige;';
  readonly bisque = 'outline:bisque;';
  readonly black = 'outline:black;';
  readonly blanchedalmond = 'outline:blanchedalmond;';
  readonly blue = 'outline:blue;';
  readonly blueviolet = 'outline:blueviolet;';
  readonly brown = 'outline:brown;';
  readonly burlywood = 'outline:burlywood;';
  readonly cadetblue = 'outline:cadetblue;';
  readonly chartreuse = 'outline:chartreuse;';
  readonly chocolate = 'outline:chocolate;';
  readonly coral = 'outline:coral;';
  readonly cornflowerblue = 'outline:cornflowerblue;';
  readonly cornsilk = 'outline:cornsilk;';
  readonly crimson = 'outline:crimson;';
  readonly currentColor = 'outline:currentColor;';
  readonly cyan = 'outline:cyan;';
  readonly darkblue = 'outline:darkblue;';
  readonly darkcyan = 'outline:darkcyan;';
  readonly darkgoldenrod = 'outline:darkgoldenrod;';
  readonly darkgray = 'outline:darkgray;';
  readonly darkgreen = 'outline:darkgreen;';
  readonly darkgrey = 'outline:darkgrey;';
  readonly darkkhaki = 'outline:darkkhaki;';
  readonly darkmagenta = 'outline:darkmagenta;';
  readonly darkolivegreen = 'outline:darkolivegreen;';
  readonly darkorange = 'outline:darkorange;';
  readonly darkorchid = 'outline:darkorchid;';
  readonly darkred = 'outline:darkred;';
  readonly darksalmon = 'outline:darksalmon;';
  readonly darkseagreen = 'outline:darkseagreen;';
  readonly darkslateblue = 'outline:darkslateblue;';
  readonly darkslategray = 'outline:darkslategray;';
  readonly darkslategrey = 'outline:darkslategrey;';
  readonly darkturquoise = 'outline:darkturquoise;';
  readonly darkviolet = 'outline:darkviolet;';
  readonly dashed = 'outline:dashed;';
  readonly deeppink = 'outline:deeppink;';
  readonly deepskyblue = 'outline:deepskyblue;';
  readonly dimgray = 'outline:dimgray;';
  readonly dimgrey = 'outline:dimgrey;';
  readonly dodgerblue = 'outline:dodgerblue;';
  readonly dotted = 'outline:dotted;';
  readonly double = 'outline:double;';
  readonly firebrick = 'outline:firebrick;';
  readonly floralwhite = 'outline:floralwhite;';
  readonly forestgreen = 'outline:forestgreen;';
  readonly fuchsia = 'outline:fuchsia;';
  readonly gainsboro = 'outline:gainsboro;';
  readonly ghostwhite = 'outline:ghostwhite;';
  readonly gold = 'outline:gold;';
  readonly goldenrod = 'outline:goldenrod;';
  readonly gray = 'outline:gray;';
  readonly green = 'outline:green;';
  readonly greenyellow = 'outline:greenyellow;';
  readonly grey = 'outline:grey;';
  readonly groove = 'outline:groove;';
  readonly honeydew = 'outline:honeydew;';
  readonly hotpink = 'outline:hotpink;';
  readonly indianred = 'outline:indianred;';
  readonly indigo = 'outline:indigo;';
  readonly inherit = 'outline:inherit;';
  readonly initial = 'outline:initial;';
  readonly inset = 'outline:inset;';
  readonly ivory = 'outline:ivory;';
  readonly khaki = 'outline:khaki;';
  readonly lavender = 'outline:lavender;';
  readonly lavenderblush = 'outline:lavenderblush;';
  readonly lawngreen = 'outline:lawngreen;';
  readonly lemonchiffon = 'outline:lemonchiffon;';
  readonly lightblue = 'outline:lightblue;';
  readonly lightcoral = 'outline:lightcoral;';
  readonly lightcyan = 'outline:lightcyan;';
  readonly lightgoldenrodyellow = 'outline:lightgoldenrodyellow;';
  readonly lightgray = 'outline:lightgray;';
  readonly lightgreen = 'outline:lightgreen;';
  readonly lightgrey = 'outline:lightgrey;';
  readonly lightpink = 'outline:lightpink;';
  readonly lightsalmon = 'outline:lightsalmon;';
  readonly lightseagreen = 'outline:lightseagreen;';
  readonly lightskyblue = 'outline:lightskyblue;';
  readonly lightslategray = 'outline:lightslategray;';
  readonly lightslategrey = 'outline:lightslategrey;';
  readonly lightsteelblue = 'outline:lightsteelblue;';
  readonly lightyellow = 'outline:lightyellow;';
  readonly lime = 'outline:lime;';
  readonly limegreen = 'outline:limegreen;';
  readonly linen = 'outline:linen;';
  readonly magenta = 'outline:magenta;';
  readonly maroon = 'outline:maroon;';
  readonly medium = 'outline:medium;';
  readonly mediumaquamarine = 'outline:mediumaquamarine;';
  readonly mediumblue = 'outline:mediumblue;';
  readonly mediumorchid = 'outline:mediumorchid;';
  readonly mediumpurple = 'outline:mediumpurple;';
  readonly mediumseagreen = 'outline:mediumseagreen;';
  readonly mediumslateblue = 'outline:mediumslateblue;';
  readonly mediumspringgreen = 'outline:mediumspringgreen;';
  readonly mediumturquoise = 'outline:mediumturquoise;';
  readonly mediumvioletred = 'outline:mediumvioletred;';
  readonly midnightblue = 'outline:midnightblue;';
  readonly mintcream = 'outline:mintcream;';
  readonly mistyrose = 'outline:mistyrose;';
  readonly moccasin = 'outline:moccasin;';
  readonly navajowhite = 'outline:navajowhite;';
  readonly navy = 'outline:navy;';
  readonly none = 'outline:none;';
  readonly oldlace = 'outline:oldlace;';
  readonly olive = 'outline:olive;';
  readonly olivedrab = 'outline:olivedrab;';
  readonly orange = 'outline:orange;';
  readonly orangered = 'outline:orangered;';
  readonly orchid = 'outline:orchid;';
  readonly outset = 'outline:outset;';
  readonly palegoldenrod = 'outline:palegoldenrod;';
  readonly palegreen = 'outline:palegreen;';
  readonly paleturquoise = 'outline:paleturquoise;';
  readonly palevioletred = 'outline:palevioletred;';
  readonly papayawhip = 'outline:papayawhip;';
  readonly peachpuff = 'outline:peachpuff;';
  readonly peru = 'outline:peru;';
  readonly pink = 'outline:pink;';
  readonly plum = 'outline:plum;';
  readonly powderblue = 'outline:powderblue;';
  readonly purple = 'outline:purple;';
  readonly rebeccapurple = 'outline:rebeccapurple;';
  readonly red = 'outline:red;';
  readonly revert = 'outline:revert;';
  readonly revertLayer = 'outline:revert-layer;';
  readonly ridge = 'outline:ridge;';
  readonly rosybrown = 'outline:rosybrown;';
  readonly royalblue = 'outline:royalblue;';
  readonly saddlebrown = 'outline:saddlebrown;';
  readonly salmon = 'outline:salmon;';
  readonly sandybrown = 'outline:sandybrown;';
  readonly seagreen = 'outline:seagreen;';
  readonly seashell = 'outline:seashell;';
  readonly sienna = 'outline:sienna;';
  readonly silver = 'outline:silver;';
  readonly skyblue = 'outline:skyblue;';
  readonly slateblue = 'outline:slateblue;';
  readonly slategray = 'outline:slategray;';
  readonly slategrey = 'outline:slategrey;';
  readonly snow = 'outline:snow;';
  readonly solid = 'outline:solid;';
  readonly springgreen = 'outline:springgreen;';
  readonly steelblue = 'outline:steelblue;';
  readonly tan = 'outline:tan;';
  readonly teal = 'outline:teal;';
  readonly thick = 'outline:thick;';
  readonly thin = 'outline:thin;';
  readonly thistle = 'outline:thistle;';
  readonly tomato = 'outline:tomato;';
  readonly transparent = 'outline:transparent;';
  readonly turquoise = 'outline:turquoise;';
  readonly unset = 'outline:unset;';
  readonly violet = 'outline:violet;';
  readonly wheat = 'outline:wheat;';
  readonly white = 'outline:white;';
  readonly whitesmoke = 'outline:whitesmoke;';
  readonly yellow = 'outline:yellow;';
  readonly yellowgreen = 'outline:yellowgreen;';
  constructor() {
    super('outline');
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
    value: Extract<Property.Outline, number> | (string & {}),
    ...others: (Extract<Property.Outline, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Outline, number> | (string & {}),
    ...others: (Extract<Property.Outline, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Outline, number> | (string & {}),
    preferred: Extract<Property.Outline, number> | (string & {}),
    maximum: Extract<Property.Outline, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 outline-color；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
 */
export class OutlineColorCss extends CssProperty<Property.OutlineColor> {
  readonly AccentColor = 'outline-color:AccentColor;';
  readonly AccentColorText = 'outline-color:AccentColorText;';
  readonly ActiveBorder = 'outline-color:ActiveBorder;';
  readonly ActiveCaption = 'outline-color:ActiveCaption;';
  readonly ActiveText = 'outline-color:ActiveText;';
  readonly AppWorkspace = 'outline-color:AppWorkspace;';
  readonly Background = 'outline-color:Background;';
  readonly ButtonBorder = 'outline-color:ButtonBorder;';
  readonly ButtonFace = 'outline-color:ButtonFace;';
  readonly ButtonHighlight = 'outline-color:ButtonHighlight;';
  readonly ButtonShadow = 'outline-color:ButtonShadow;';
  readonly ButtonText = 'outline-color:ButtonText;';
  readonly Canvas = 'outline-color:Canvas;';
  readonly CanvasText = 'outline-color:CanvasText;';
  readonly CaptionText = 'outline-color:CaptionText;';
  readonly Field = 'outline-color:Field;';
  readonly FieldText = 'outline-color:FieldText;';
  readonly GrayText = 'outline-color:GrayText;';
  readonly Highlight = 'outline-color:Highlight;';
  readonly HighlightText = 'outline-color:HighlightText;';
  readonly InactiveBorder = 'outline-color:InactiveBorder;';
  readonly InactiveCaption = 'outline-color:InactiveCaption;';
  readonly InactiveCaptionText = 'outline-color:InactiveCaptionText;';
  readonly InfoBackground = 'outline-color:InfoBackground;';
  readonly InfoText = 'outline-color:InfoText;';
  readonly LinkText = 'outline-color:LinkText;';
  readonly Mark = 'outline-color:Mark;';
  readonly MarkText = 'outline-color:MarkText;';
  readonly Menu = 'outline-color:Menu;';
  readonly MenuText = 'outline-color:MenuText;';
  readonly Scrollbar = 'outline-color:Scrollbar;';
  readonly SelectedItem = 'outline-color:SelectedItem;';
  readonly SelectedItemText = 'outline-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'outline-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'outline-color:ThreeDFace;';
  readonly ThreeDHighlight = 'outline-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'outline-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'outline-color:ThreeDShadow;';
  readonly VisitedText = 'outline-color:VisitedText;';
  readonly Window = 'outline-color:Window;';
  readonly WindowFrame = 'outline-color:WindowFrame;';
  readonly WindowText = 'outline-color:WindowText;';
  readonly aliceblue = 'outline-color:aliceblue;';
  readonly antiquewhite = 'outline-color:antiquewhite;';
  readonly aqua = 'outline-color:aqua;';
  readonly aquamarine = 'outline-color:aquamarine;';
  readonly auto = 'outline-color:auto;';
  readonly azure = 'outline-color:azure;';
  readonly beige = 'outline-color:beige;';
  readonly bisque = 'outline-color:bisque;';
  readonly black = 'outline-color:black;';
  readonly blanchedalmond = 'outline-color:blanchedalmond;';
  readonly blue = 'outline-color:blue;';
  readonly blueviolet = 'outline-color:blueviolet;';
  readonly brown = 'outline-color:brown;';
  readonly burlywood = 'outline-color:burlywood;';
  readonly cadetblue = 'outline-color:cadetblue;';
  readonly chartreuse = 'outline-color:chartreuse;';
  readonly chocolate = 'outline-color:chocolate;';
  readonly coral = 'outline-color:coral;';
  readonly cornflowerblue = 'outline-color:cornflowerblue;';
  readonly cornsilk = 'outline-color:cornsilk;';
  readonly crimson = 'outline-color:crimson;';
  readonly currentColor = 'outline-color:currentColor;';
  readonly cyan = 'outline-color:cyan;';
  readonly darkblue = 'outline-color:darkblue;';
  readonly darkcyan = 'outline-color:darkcyan;';
  readonly darkgoldenrod = 'outline-color:darkgoldenrod;';
  readonly darkgray = 'outline-color:darkgray;';
  readonly darkgreen = 'outline-color:darkgreen;';
  readonly darkgrey = 'outline-color:darkgrey;';
  readonly darkkhaki = 'outline-color:darkkhaki;';
  readonly darkmagenta = 'outline-color:darkmagenta;';
  readonly darkolivegreen = 'outline-color:darkolivegreen;';
  readonly darkorange = 'outline-color:darkorange;';
  readonly darkorchid = 'outline-color:darkorchid;';
  readonly darkred = 'outline-color:darkred;';
  readonly darksalmon = 'outline-color:darksalmon;';
  readonly darkseagreen = 'outline-color:darkseagreen;';
  readonly darkslateblue = 'outline-color:darkslateblue;';
  readonly darkslategray = 'outline-color:darkslategray;';
  readonly darkslategrey = 'outline-color:darkslategrey;';
  readonly darkturquoise = 'outline-color:darkturquoise;';
  readonly darkviolet = 'outline-color:darkviolet;';
  readonly deeppink = 'outline-color:deeppink;';
  readonly deepskyblue = 'outline-color:deepskyblue;';
  readonly dimgray = 'outline-color:dimgray;';
  readonly dimgrey = 'outline-color:dimgrey;';
  readonly dodgerblue = 'outline-color:dodgerblue;';
  readonly firebrick = 'outline-color:firebrick;';
  readonly floralwhite = 'outline-color:floralwhite;';
  readonly forestgreen = 'outline-color:forestgreen;';
  readonly fuchsia = 'outline-color:fuchsia;';
  readonly gainsboro = 'outline-color:gainsboro;';
  readonly ghostwhite = 'outline-color:ghostwhite;';
  readonly gold = 'outline-color:gold;';
  readonly goldenrod = 'outline-color:goldenrod;';
  readonly gray = 'outline-color:gray;';
  readonly green = 'outline-color:green;';
  readonly greenyellow = 'outline-color:greenyellow;';
  readonly grey = 'outline-color:grey;';
  readonly honeydew = 'outline-color:honeydew;';
  readonly hotpink = 'outline-color:hotpink;';
  readonly indianred = 'outline-color:indianred;';
  readonly indigo = 'outline-color:indigo;';
  readonly inherit = 'outline-color:inherit;';
  readonly initial = 'outline-color:initial;';
  readonly ivory = 'outline-color:ivory;';
  readonly khaki = 'outline-color:khaki;';
  readonly lavender = 'outline-color:lavender;';
  readonly lavenderblush = 'outline-color:lavenderblush;';
  readonly lawngreen = 'outline-color:lawngreen;';
  readonly lemonchiffon = 'outline-color:lemonchiffon;';
  readonly lightblue = 'outline-color:lightblue;';
  readonly lightcoral = 'outline-color:lightcoral;';
  readonly lightcyan = 'outline-color:lightcyan;';
  readonly lightgoldenrodyellow = 'outline-color:lightgoldenrodyellow;';
  readonly lightgray = 'outline-color:lightgray;';
  readonly lightgreen = 'outline-color:lightgreen;';
  readonly lightgrey = 'outline-color:lightgrey;';
  readonly lightpink = 'outline-color:lightpink;';
  readonly lightsalmon = 'outline-color:lightsalmon;';
  readonly lightseagreen = 'outline-color:lightseagreen;';
  readonly lightskyblue = 'outline-color:lightskyblue;';
  readonly lightslategray = 'outline-color:lightslategray;';
  readonly lightslategrey = 'outline-color:lightslategrey;';
  readonly lightsteelblue = 'outline-color:lightsteelblue;';
  readonly lightyellow = 'outline-color:lightyellow;';
  readonly lime = 'outline-color:lime;';
  readonly limegreen = 'outline-color:limegreen;';
  readonly linen = 'outline-color:linen;';
  readonly magenta = 'outline-color:magenta;';
  readonly maroon = 'outline-color:maroon;';
  readonly mediumaquamarine = 'outline-color:mediumaquamarine;';
  readonly mediumblue = 'outline-color:mediumblue;';
  readonly mediumorchid = 'outline-color:mediumorchid;';
  readonly mediumpurple = 'outline-color:mediumpurple;';
  readonly mediumseagreen = 'outline-color:mediumseagreen;';
  readonly mediumslateblue = 'outline-color:mediumslateblue;';
  readonly mediumspringgreen = 'outline-color:mediumspringgreen;';
  readonly mediumturquoise = 'outline-color:mediumturquoise;';
  readonly mediumvioletred = 'outline-color:mediumvioletred;';
  readonly midnightblue = 'outline-color:midnightblue;';
  readonly mintcream = 'outline-color:mintcream;';
  readonly mistyrose = 'outline-color:mistyrose;';
  readonly moccasin = 'outline-color:moccasin;';
  readonly navajowhite = 'outline-color:navajowhite;';
  readonly navy = 'outline-color:navy;';
  readonly oldlace = 'outline-color:oldlace;';
  readonly olive = 'outline-color:olive;';
  readonly olivedrab = 'outline-color:olivedrab;';
  readonly orange = 'outline-color:orange;';
  readonly orangered = 'outline-color:orangered;';
  readonly orchid = 'outline-color:orchid;';
  readonly palegoldenrod = 'outline-color:palegoldenrod;';
  readonly palegreen = 'outline-color:palegreen;';
  readonly paleturquoise = 'outline-color:paleturquoise;';
  readonly palevioletred = 'outline-color:palevioletred;';
  readonly papayawhip = 'outline-color:papayawhip;';
  readonly peachpuff = 'outline-color:peachpuff;';
  readonly peru = 'outline-color:peru;';
  readonly pink = 'outline-color:pink;';
  readonly plum = 'outline-color:plum;';
  readonly powderblue = 'outline-color:powderblue;';
  readonly purple = 'outline-color:purple;';
  readonly rebeccapurple = 'outline-color:rebeccapurple;';
  readonly red = 'outline-color:red;';
  readonly revert = 'outline-color:revert;';
  readonly revertLayer = 'outline-color:revert-layer;';
  readonly rosybrown = 'outline-color:rosybrown;';
  readonly royalblue = 'outline-color:royalblue;';
  readonly saddlebrown = 'outline-color:saddlebrown;';
  readonly salmon = 'outline-color:salmon;';
  readonly sandybrown = 'outline-color:sandybrown;';
  readonly seagreen = 'outline-color:seagreen;';
  readonly seashell = 'outline-color:seashell;';
  readonly sienna = 'outline-color:sienna;';
  readonly silver = 'outline-color:silver;';
  readonly skyblue = 'outline-color:skyblue;';
  readonly slateblue = 'outline-color:slateblue;';
  readonly slategray = 'outline-color:slategray;';
  readonly slategrey = 'outline-color:slategrey;';
  readonly snow = 'outline-color:snow;';
  readonly springgreen = 'outline-color:springgreen;';
  readonly steelblue = 'outline-color:steelblue;';
  readonly tan = 'outline-color:tan;';
  readonly teal = 'outline-color:teal;';
  readonly thistle = 'outline-color:thistle;';
  readonly tomato = 'outline-color:tomato;';
  readonly transparent = 'outline-color:transparent;';
  readonly turquoise = 'outline-color:turquoise;';
  readonly unset = 'outline-color:unset;';
  readonly violet = 'outline-color:violet;';
  readonly wheat = 'outline-color:wheat;';
  readonly white = 'outline-color:white;';
  readonly whitesmoke = 'outline-color:whitesmoke;';
  readonly yellow = 'outline-color:yellow;';
  readonly yellowgreen = 'outline-color:yellowgreen;';
  constructor() {
    super('outline-color');
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

/** CSS 属性 outline-offset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
 */
export class OutlineOffsetCss extends LengthCssProperty<Property.OutlineOffset> {
  readonly inherit = 'outline-offset:inherit;';
  readonly initial = 'outline-offset:initial;';
  readonly revert = 'outline-offset:revert;';
  readonly revertLayer = 'outline-offset:revert-layer;';
  readonly unset = 'outline-offset:unset;';
  constructor() {
    super('outline-offset');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OutlineOffset, number> | (string & {}),
    ...others: (Extract<Property.OutlineOffset, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OutlineOffset, number> | (string & {}),
    ...others: (Extract<Property.OutlineOffset, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OutlineOffset, number> | (string & {}),
    preferred: Extract<Property.OutlineOffset, number> | (string & {}),
    maximum: Extract<Property.OutlineOffset, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 outline-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
 */
export class OutlineStyleCss extends CssProperty<Property.OutlineStyle> {
  readonly auto = 'outline-style:auto;';
  readonly dashed = 'outline-style:dashed;';
  readonly dotted = 'outline-style:dotted;';
  readonly double = 'outline-style:double;';
  readonly groove = 'outline-style:groove;';
  readonly inherit = 'outline-style:inherit;';
  readonly initial = 'outline-style:initial;';
  readonly inset = 'outline-style:inset;';
  readonly none = 'outline-style:none;';
  readonly outset = 'outline-style:outset;';
  readonly revert = 'outline-style:revert;';
  readonly revertLayer = 'outline-style:revert-layer;';
  readonly ridge = 'outline-style:ridge;';
  readonly solid = 'outline-style:solid;';
  readonly unset = 'outline-style:unset;';
  constructor() {
    super('outline-style');
  }
}

/** CSS 属性 outline-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
 */
export class OutlineWidthCss extends LengthCssProperty<Property.OutlineWidth> {
  readonly inherit = 'outline-width:inherit;';
  readonly initial = 'outline-width:initial;';
  readonly medium = 'outline-width:medium;';
  readonly revert = 'outline-width:revert;';
  readonly revertLayer = 'outline-width:revert-layer;';
  readonly thick = 'outline-width:thick;';
  readonly thin = 'outline-width:thin;';
  readonly unset = 'outline-width:unset;';
  constructor() {
    super('outline-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OutlineWidth, number> | (string & {}),
    ...others: (Extract<Property.OutlineWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OutlineWidth, number> | (string & {}),
    ...others: (Extract<Property.OutlineWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OutlineWidth, number> | (string & {}),
    preferred: Extract<Property.OutlineWidth, number> | (string & {}),
    maximum: Extract<Property.OutlineWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 overflow；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
 */
export class OverflowCss extends CssProperty<Property.Overflow> {
  readonly auto = 'overflow:auto;';
  readonly clip = 'overflow:clip;';
  readonly hidden = 'overflow:hidden;';
  readonly inherit = 'overflow:inherit;';
  readonly initial = 'overflow:initial;';
  readonly overlay = 'overflow:overlay;';
  readonly revert = 'overflow:revert;';
  readonly revertLayer = 'overflow:revert-layer;';
  readonly scroll = 'overflow:scroll;';
  readonly unset = 'overflow:unset;';
  readonly visible = 'overflow:visible;';
  constructor() {
    super('overflow');
  }
}

/** CSS 属性 overflow-anchor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
 */
export class OverflowAnchorCss extends CssProperty<Property.OverflowAnchor> {
  readonly auto = 'overflow-anchor:auto;';
  readonly inherit = 'overflow-anchor:inherit;';
  readonly initial = 'overflow-anchor:initial;';
  readonly none = 'overflow-anchor:none;';
  readonly revert = 'overflow-anchor:revert;';
  readonly revertLayer = 'overflow-anchor:revert-layer;';
  readonly unset = 'overflow-anchor:unset;';
  constructor() {
    super('overflow-anchor');
  }
}

/** CSS 属性 overflow-block；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
 */
export class OverflowBlockCss extends CssProperty<Property.OverflowBlock> {
  readonly auto = 'overflow-block:auto;';
  readonly clip = 'overflow-block:clip;';
  readonly hidden = 'overflow-block:hidden;';
  readonly inherit = 'overflow-block:inherit;';
  readonly initial = 'overflow-block:initial;';
  readonly revert = 'overflow-block:revert;';
  readonly revertLayer = 'overflow-block:revert-layer;';
  readonly scroll = 'overflow-block:scroll;';
  readonly unset = 'overflow-block:unset;';
  readonly visible = 'overflow-block:visible;';
  constructor() {
    super('overflow-block');
  }
}

/** CSS 属性 overflow-clip-box；初始值 padding-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
 */
export class OverflowClipBoxCss extends CssProperty<Property.OverflowClipBox> {
  readonly contentBox = 'overflow-clip-box:content-box;';
  readonly inherit = 'overflow-clip-box:inherit;';
  readonly initial = 'overflow-clip-box:initial;';
  readonly paddingBox = 'overflow-clip-box:padding-box;';
  readonly revert = 'overflow-clip-box:revert;';
  readonly revertLayer = 'overflow-clip-box:revert-layer;';
  readonly unset = 'overflow-clip-box:unset;';
  constructor() {
    super('overflow-clip-box');
  }
}

/** CSS 属性 overflow-clip-margin；初始值 0px。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
 */
export class OverflowClipMarginCss extends LengthCssProperty<Property.OverflowClipMargin> {
  readonly borderBox = 'overflow-clip-margin:border-box;';
  readonly contentBox = 'overflow-clip-margin:content-box;';
  readonly inherit = 'overflow-clip-margin:inherit;';
  readonly initial = 'overflow-clip-margin:initial;';
  readonly paddingBox = 'overflow-clip-margin:padding-box;';
  readonly revert = 'overflow-clip-margin:revert;';
  readonly revertLayer = 'overflow-clip-margin:revert-layer;';
  readonly unset = 'overflow-clip-margin:unset;';
  constructor() {
    super('overflow-clip-margin');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.OverflowClipMargin, number> | (string & {}),
    ...others: (Extract<Property.OverflowClipMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.OverflowClipMargin, number> | (string & {}),
    ...others: (Extract<Property.OverflowClipMargin, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.OverflowClipMargin, number> | (string & {}),
    preferred: Extract<Property.OverflowClipMargin, number> | (string & {}),
    maximum: Extract<Property.OverflowClipMargin, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 overflow-inline；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
 */
export class OverflowInlineCss extends CssProperty<Property.OverflowInline> {
  readonly auto = 'overflow-inline:auto;';
  readonly clip = 'overflow-inline:clip;';
  readonly hidden = 'overflow-inline:hidden;';
  readonly inherit = 'overflow-inline:inherit;';
  readonly initial = 'overflow-inline:initial;';
  readonly revert = 'overflow-inline:revert;';
  readonly revertLayer = 'overflow-inline:revert-layer;';
  readonly scroll = 'overflow-inline:scroll;';
  readonly unset = 'overflow-inline:unset;';
  readonly visible = 'overflow-inline:visible;';
  constructor() {
    super('overflow-inline');
  }
}

/** CSS 属性 overflow-wrap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
 */
export class OverflowWrapCss extends CssProperty<Property.OverflowWrap> {
  readonly anywhere = 'overflow-wrap:anywhere;';
  readonly breakWord = 'overflow-wrap:break-word;';
  readonly inherit = 'overflow-wrap:inherit;';
  readonly initial = 'overflow-wrap:initial;';
  readonly normal = 'overflow-wrap:normal;';
  readonly revert = 'overflow-wrap:revert;';
  readonly revertLayer = 'overflow-wrap:revert-layer;';
  readonly unset = 'overflow-wrap:unset;';
  constructor() {
    super('overflow-wrap');
  }
}

/** CSS 属性 overflow-x；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
 */
export class OverflowXCss extends CssProperty<Property.OverflowX> {
  readonly auto = 'overflow-x:auto;';
  readonly clip = 'overflow-x:clip;';
  readonly hidden = 'overflow-x:hidden;';
  readonly inherit = 'overflow-x:inherit;';
  readonly initial = 'overflow-x:initial;';
  readonly overlay = 'overflow-x:overlay;';
  readonly revert = 'overflow-x:revert;';
  readonly revertLayer = 'overflow-x:revert-layer;';
  readonly scroll = 'overflow-x:scroll;';
  readonly unset = 'overflow-x:unset;';
  readonly visible = 'overflow-x:visible;';
  constructor() {
    super('overflow-x');
  }
}

/** CSS 属性 overflow-y；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
 */
export class OverflowYCss extends CssProperty<Property.OverflowY> {
  readonly auto = 'overflow-y:auto;';
  readonly clip = 'overflow-y:clip;';
  readonly hidden = 'overflow-y:hidden;';
  readonly inherit = 'overflow-y:inherit;';
  readonly initial = 'overflow-y:initial;';
  readonly overlay = 'overflow-y:overlay;';
  readonly revert = 'overflow-y:revert;';
  readonly revertLayer = 'overflow-y:revert-layer;';
  readonly scroll = 'overflow-y:scroll;';
  readonly unset = 'overflow-y:unset;';
  readonly visible = 'overflow-y:visible;';
  constructor() {
    super('overflow-y');
  }
}

/** CSS 属性 overlay；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
 */
export class OverlayCss extends CssProperty<Property.Overlay> {
  readonly auto = 'overlay:auto;';
  readonly inherit = 'overlay:inherit;';
  readonly initial = 'overlay:initial;';
  readonly none = 'overlay:none;';
  readonly revert = 'overlay:revert;';
  readonly revertLayer = 'overlay:revert-layer;';
  readonly unset = 'overlay:unset;';
  constructor() {
    super('overlay');
  }
}

/** CSS 属性 overscroll-behavior；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
 */
export class OverscrollBehaviorCss extends CssProperty<Property.OverscrollBehavior> {
  readonly auto = 'overscroll-behavior:auto;';
  readonly contain = 'overscroll-behavior:contain;';
  readonly inherit = 'overscroll-behavior:inherit;';
  readonly initial = 'overscroll-behavior:initial;';
  readonly none = 'overscroll-behavior:none;';
  readonly revert = 'overscroll-behavior:revert;';
  readonly revertLayer = 'overscroll-behavior:revert-layer;';
  readonly unset = 'overscroll-behavior:unset;';
  constructor() {
    super('overscroll-behavior');
  }
}

/** CSS 属性 overscroll-behavior-block；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
 */
export class OverscrollBehaviorBlockCss extends CssProperty<Property.OverscrollBehaviorBlock> {
  readonly auto = 'overscroll-behavior-block:auto;';
  readonly contain = 'overscroll-behavior-block:contain;';
  readonly inherit = 'overscroll-behavior-block:inherit;';
  readonly initial = 'overscroll-behavior-block:initial;';
  readonly none = 'overscroll-behavior-block:none;';
  readonly revert = 'overscroll-behavior-block:revert;';
  readonly revertLayer = 'overscroll-behavior-block:revert-layer;';
  readonly unset = 'overscroll-behavior-block:unset;';
  constructor() {
    super('overscroll-behavior-block');
  }
}

/** CSS 属性 overscroll-behavior-inline；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
 */
export class OverscrollBehaviorInlineCss extends CssProperty<Property.OverscrollBehaviorInline> {
  readonly auto = 'overscroll-behavior-inline:auto;';
  readonly contain = 'overscroll-behavior-inline:contain;';
  readonly inherit = 'overscroll-behavior-inline:inherit;';
  readonly initial = 'overscroll-behavior-inline:initial;';
  readonly none = 'overscroll-behavior-inline:none;';
  readonly revert = 'overscroll-behavior-inline:revert;';
  readonly revertLayer = 'overscroll-behavior-inline:revert-layer;';
  readonly unset = 'overscroll-behavior-inline:unset;';
  constructor() {
    super('overscroll-behavior-inline');
  }
}

/** CSS 属性 overscroll-behavior-x；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
 */
export class OverscrollBehaviorXCss extends CssProperty<Property.OverscrollBehaviorX> {
  readonly auto = 'overscroll-behavior-x:auto;';
  readonly contain = 'overscroll-behavior-x:contain;';
  readonly inherit = 'overscroll-behavior-x:inherit;';
  readonly initial = 'overscroll-behavior-x:initial;';
  readonly none = 'overscroll-behavior-x:none;';
  readonly revert = 'overscroll-behavior-x:revert;';
  readonly revertLayer = 'overscroll-behavior-x:revert-layer;';
  readonly unset = 'overscroll-behavior-x:unset;';
  constructor() {
    super('overscroll-behavior-x');
  }
}

/** CSS 属性 overscroll-behavior-y；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
 */
export class OverscrollBehaviorYCss extends CssProperty<Property.OverscrollBehaviorY> {
  readonly auto = 'overscroll-behavior-y:auto;';
  readonly contain = 'overscroll-behavior-y:contain;';
  readonly inherit = 'overscroll-behavior-y:inherit;';
  readonly initial = 'overscroll-behavior-y:initial;';
  readonly none = 'overscroll-behavior-y:none;';
  readonly revert = 'overscroll-behavior-y:revert;';
  readonly revertLayer = 'overscroll-behavior-y:revert-layer;';
  readonly unset = 'overscroll-behavior-y:unset;';
  constructor() {
    super('overscroll-behavior-y');
  }
}
