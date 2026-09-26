// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** 内边距（CSS padding）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
 */
export class PaddingCss extends LengthCssProperty {
  readonly inherit = 'padding:inherit;';
  readonly initial = 'padding:initial;';
  readonly revert = 'padding:revert;';
  readonly revertLayer = 'padding:revert-layer;';
  readonly unset = 'padding:unset;';
  constructor() {
    super('padding');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Padding | CssString): string {
    return this.declaration(value);
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
  min(value: Property.Padding | CssString, ...others: (Property.Padding | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Padding | CssString, ...others: (Property.Padding | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Padding | CssString,
    preferred: Property.Padding | CssString,
    maximum: Property.Padding | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
 */
export class PaddingBlockCss extends LengthCssProperty {
  readonly inherit = 'padding-block:inherit;';
  readonly initial = 'padding-block:initial;';
  readonly revert = 'padding-block:revert;';
  readonly revertLayer = 'padding-block:revert-layer;';
  readonly unset = 'padding-block:unset;';
  constructor() {
    super('padding-block');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingBlock | CssString): string {
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
    value: Property.PaddingBlock | CssString,
    ...others: (Property.PaddingBlock | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingBlock | CssString,
    ...others: (Property.PaddingBlock | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingBlock | CssString,
    preferred: Property.PaddingBlock | CssString,
    maximum: Property.PaddingBlock | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-block-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
 */
export class PaddingBlockEndCss extends LengthCssProperty {
  readonly inherit = 'padding-block-end:inherit;';
  readonly initial = 'padding-block-end:initial;';
  readonly revert = 'padding-block-end:revert;';
  readonly revertLayer = 'padding-block-end:revert-layer;';
  readonly unset = 'padding-block-end:unset;';
  constructor() {
    super('padding-block-end');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingBlockEnd | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.PaddingBlockEnd | CssString,
    ...others: (Property.PaddingBlockEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingBlockEnd | CssString,
    ...others: (Property.PaddingBlockEnd | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingBlockEnd | CssString,
    preferred: Property.PaddingBlockEnd | CssString,
    maximum: Property.PaddingBlockEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-block-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
 */
export class PaddingBlockStartCss extends LengthCssProperty {
  readonly inherit = 'padding-block-start:inherit;';
  readonly initial = 'padding-block-start:initial;';
  readonly revert = 'padding-block-start:revert;';
  readonly revertLayer = 'padding-block-start:revert-layer;';
  readonly unset = 'padding-block-start:unset;';
  constructor() {
    super('padding-block-start');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingBlockStart | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.PaddingBlockStart | CssString,
    ...others: (Property.PaddingBlockStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingBlockStart | CssString,
    ...others: (Property.PaddingBlockStart | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingBlockStart | CssString,
    preferred: Property.PaddingBlockStart | CssString,
    maximum: Property.PaddingBlockStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
 */
export class PaddingBottomCss extends LengthCssProperty {
  readonly inherit = 'padding-bottom:inherit;';
  readonly initial = 'padding-bottom:initial;';
  readonly revert = 'padding-bottom:revert;';
  readonly revertLayer = 'padding-bottom:revert-layer;';
  readonly unset = 'padding-bottom:unset;';
  constructor() {
    super('padding-bottom');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingBottom | CssString): string {
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
    value: Property.PaddingBottom | CssString,
    ...others: (Property.PaddingBottom | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingBottom | CssString,
    ...others: (Property.PaddingBottom | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingBottom | CssString,
    preferred: Property.PaddingBottom | CssString,
    maximum: Property.PaddingBottom | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
 */
export class PaddingInlineCss extends LengthCssProperty {
  readonly inherit = 'padding-inline:inherit;';
  readonly initial = 'padding-inline:initial;';
  readonly revert = 'padding-inline:revert;';
  readonly revertLayer = 'padding-inline:revert-layer;';
  readonly unset = 'padding-inline:unset;';
  constructor() {
    super('padding-inline');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingInline | CssString): string {
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
    value: Property.PaddingInline | CssString,
    ...others: (Property.PaddingInline | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingInline | CssString,
    ...others: (Property.PaddingInline | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingInline | CssString,
    preferred: Property.PaddingInline | CssString,
    maximum: Property.PaddingInline | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-inline-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
 */
export class PaddingInlineEndCss extends LengthCssProperty {
  readonly inherit = 'padding-inline-end:inherit;';
  readonly initial = 'padding-inline-end:initial;';
  readonly revert = 'padding-inline-end:revert;';
  readonly revertLayer = 'padding-inline-end:revert-layer;';
  readonly unset = 'padding-inline-end:unset;';
  constructor() {
    super('padding-inline-end');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingInlineEnd | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.PaddingInlineEnd | CssString,
    ...others: (Property.PaddingInlineEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingInlineEnd | CssString,
    ...others: (Property.PaddingInlineEnd | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingInlineEnd | CssString,
    preferred: Property.PaddingInlineEnd | CssString,
    maximum: Property.PaddingInlineEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-inline-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
 */
export class PaddingInlineStartCss extends LengthCssProperty {
  readonly inherit = 'padding-inline-start:inherit;';
  readonly initial = 'padding-inline-start:initial;';
  readonly revert = 'padding-inline-start:revert;';
  readonly revertLayer = 'padding-inline-start:revert-layer;';
  readonly unset = 'padding-inline-start:unset;';
  constructor() {
    super('padding-inline-start');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingInlineStart | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.PaddingInlineStart | CssString,
    ...others: (Property.PaddingInlineStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingInlineStart | CssString,
    ...others: (Property.PaddingInlineStart | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingInlineStart | CssString,
    preferred: Property.PaddingInlineStart | CssString,
    maximum: Property.PaddingInlineStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
 */
export class PaddingLeftCss extends LengthCssProperty {
  readonly inherit = 'padding-left:inherit;';
  readonly initial = 'padding-left:initial;';
  readonly revert = 'padding-left:revert;';
  readonly revertLayer = 'padding-left:revert-layer;';
  readonly unset = 'padding-left:unset;';
  constructor() {
    super('padding-left');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingLeft | CssString): string {
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
    value: Property.PaddingLeft | CssString,
    ...others: (Property.PaddingLeft | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingLeft | CssString,
    ...others: (Property.PaddingLeft | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingLeft | CssString,
    preferred: Property.PaddingLeft | CssString,
    maximum: Property.PaddingLeft | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
 */
export class PaddingRightCss extends LengthCssProperty {
  readonly inherit = 'padding-right:inherit;';
  readonly initial = 'padding-right:initial;';
  readonly revert = 'padding-right:revert;';
  readonly revertLayer = 'padding-right:revert-layer;';
  readonly unset = 'padding-right:unset;';
  constructor() {
    super('padding-right');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingRight | CssString): string {
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
    value: Property.PaddingRight | CssString,
    ...others: (Property.PaddingRight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingRight | CssString,
    ...others: (Property.PaddingRight | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingRight | CssString,
    preferred: Property.PaddingRight | CssString,
    maximum: Property.PaddingRight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 padding-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
 */
export class PaddingTopCss extends LengthCssProperty {
  readonly inherit = 'padding-top:inherit;';
  readonly initial = 'padding-top:initial;';
  readonly revert = 'padding-top:revert;';
  readonly revertLayer = 'padding-top:revert-layer;';
  readonly unset = 'padding-top:unset;';
  constructor() {
    super('padding-top');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaddingTop | CssString): string {
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
    value: Property.PaddingTop | CssString,
    ...others: (Property.PaddingTop | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PaddingTop | CssString,
    ...others: (Property.PaddingTop | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PaddingTop | CssString,
    preferred: Property.PaddingTop | CssString,
    maximum: Property.PaddingTop | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 page；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
 */
export class PageCss extends CssProperty {
  readonly auto = 'page:auto;';
  readonly inherit = 'page:inherit;';
  readonly initial = 'page:initial;';
  readonly revert = 'page:revert;';
  readonly revertLayer = 'page:revert-layer;';
  readonly unset = 'page:unset;';
  constructor() {
    super('page');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Page | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 paint-order；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
 */
export class PaintOrderCss extends CssProperty {
  readonly fill = 'paint-order:fill;';
  readonly inherit = 'paint-order:inherit;';
  readonly initial = 'paint-order:initial;';
  readonly markers = 'paint-order:markers;';
  readonly normal = 'paint-order:normal;';
  readonly revert = 'paint-order:revert;';
  readonly revertLayer = 'paint-order:revert-layer;';
  readonly stroke = 'paint-order:stroke;';
  readonly unset = 'paint-order:unset;';
  constructor() {
    super('paint-order');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PaintOrder | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 perspective；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
 */
export class PerspectiveCss extends LengthCssProperty {
  readonly inherit = 'perspective:inherit;';
  readonly initial = 'perspective:initial;';
  readonly none = 'perspective:none;';
  readonly revert = 'perspective:revert;';
  readonly revertLayer = 'perspective:revert-layer;';
  readonly unset = 'perspective:unset;';
  constructor() {
    super('perspective');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Perspective | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.Perspective | CssString,
    ...others: (Property.Perspective | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.Perspective | CssString,
    ...others: (Property.Perspective | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Perspective | CssString,
    preferred: Property.Perspective | CssString,
    maximum: Property.Perspective | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 perspective-origin；初始值 50% 50%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
 */
export class PerspectiveOriginCss extends LengthCssProperty {
  readonly bottom = 'perspective-origin:bottom;';
  readonly center = 'perspective-origin:center;';
  readonly inherit = 'perspective-origin:inherit;';
  readonly initial = 'perspective-origin:initial;';
  readonly left = 'perspective-origin:left;';
  readonly revert = 'perspective-origin:revert;';
  readonly revertLayer = 'perspective-origin:revert-layer;';
  readonly right = 'perspective-origin:right;';
  readonly top = 'perspective-origin:top;';
  readonly unset = 'perspective-origin:unset;';
  constructor() {
    super('perspective-origin');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PerspectiveOrigin | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.PerspectiveOrigin | CssString,
    ...others: (Property.PerspectiveOrigin | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.PerspectiveOrigin | CssString,
    ...others: (Property.PerspectiveOrigin | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.PerspectiveOrigin | CssString,
    preferred: Property.PerspectiveOrigin | CssString,
    maximum: Property.PerspectiveOrigin | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 place-content。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
 */
export class PlaceContentCss extends CssProperty {
  readonly baseline = 'place-content:baseline;';
  readonly center = 'place-content:center;';
  readonly end = 'place-content:end;';
  readonly flexEnd = 'place-content:flex-end;';
  readonly flexStart = 'place-content:flex-start;';
  readonly inherit = 'place-content:inherit;';
  readonly initial = 'place-content:initial;';
  readonly normal = 'place-content:normal;';
  readonly revert = 'place-content:revert;';
  readonly revertLayer = 'place-content:revert-layer;';
  readonly spaceAround = 'place-content:space-around;';
  readonly spaceBetween = 'place-content:space-between;';
  readonly spaceEvenly = 'place-content:space-evenly;';
  readonly start = 'place-content:start;';
  readonly stretch = 'place-content:stretch;';
  readonly unset = 'place-content:unset;';
  constructor() {
    super('place-content');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PlaceContent | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 place-items。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
 */
export class PlaceItemsCss extends CssProperty {
  readonly anchorCenter = 'place-items:anchor-center;';
  readonly baseline = 'place-items:baseline;';
  readonly center = 'place-items:center;';
  readonly end = 'place-items:end;';
  readonly flexEnd = 'place-items:flex-end;';
  readonly flexStart = 'place-items:flex-start;';
  readonly inherit = 'place-items:inherit;';
  readonly initial = 'place-items:initial;';
  readonly normal = 'place-items:normal;';
  readonly revert = 'place-items:revert;';
  readonly revertLayer = 'place-items:revert-layer;';
  readonly selfEnd = 'place-items:self-end;';
  readonly selfStart = 'place-items:self-start;';
  readonly start = 'place-items:start;';
  readonly stretch = 'place-items:stretch;';
  readonly unset = 'place-items:unset;';
  constructor() {
    super('place-items');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PlaceItems | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 place-self。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
 */
export class PlaceSelfCss extends CssProperty {
  readonly anchorCenter = 'place-self:anchor-center;';
  readonly auto = 'place-self:auto;';
  readonly baseline = 'place-self:baseline;';
  readonly center = 'place-self:center;';
  readonly end = 'place-self:end;';
  readonly flexEnd = 'place-self:flex-end;';
  readonly flexStart = 'place-self:flex-start;';
  readonly inherit = 'place-self:inherit;';
  readonly initial = 'place-self:initial;';
  readonly normal = 'place-self:normal;';
  readonly revert = 'place-self:revert;';
  readonly revertLayer = 'place-self:revert-layer;';
  readonly selfEnd = 'place-self:self-end;';
  readonly selfStart = 'place-self:self-start;';
  readonly start = 'place-self:start;';
  readonly stretch = 'place-self:stretch;';
  readonly unset = 'place-self:unset;';
  constructor() {
    super('place-self');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PlaceSelf | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 pointer-events；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
 */
export class PointerEventsCss extends CssProperty {
  readonly all = 'pointer-events:all;';
  readonly auto = 'pointer-events:auto;';
  readonly fill = 'pointer-events:fill;';
  readonly inherit = 'pointer-events:inherit;';
  readonly initial = 'pointer-events:initial;';
  readonly none = 'pointer-events:none;';
  readonly painted = 'pointer-events:painted;';
  readonly revert = 'pointer-events:revert;';
  readonly revertLayer = 'pointer-events:revert-layer;';
  readonly stroke = 'pointer-events:stroke;';
  readonly unset = 'pointer-events:unset;';
  readonly visible = 'pointer-events:visible;';
  readonly visibleFill = 'pointer-events:visibleFill;';
  readonly visiblePainted = 'pointer-events:visiblePainted;';
  readonly visibleStroke = 'pointer-events:visibleStroke;';
  constructor() {
    super('pointer-events');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PointerEvents | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 position；初始值 static。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
 */
export class PositionCss extends CssProperty {
  readonly absolute = 'position:absolute;';
  readonly fixed = 'position:fixed;';
  readonly inherit = 'position:inherit;';
  readonly initial = 'position:initial;';
  readonly relative = 'position:relative;';
  readonly revert = 'position:revert;';
  readonly revertLayer = 'position:revert-layer;';
  readonly static = 'position:static;';
  readonly sticky = 'position:sticky;';
  readonly unset = 'position:unset;';
  constructor() {
    super('position');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Position | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 position-anchor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
 */
export class PositionAnchorCss extends CssProperty {
  readonly auto = 'position-anchor:auto;';
  readonly inherit = 'position-anchor:inherit;';
  readonly initial = 'position-anchor:initial;';
  readonly revert = 'position-anchor:revert;';
  readonly revertLayer = 'position-anchor:revert-layer;';
  readonly unset = 'position-anchor:unset;';
  constructor() {
    super('position-anchor');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PositionAnchor | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 position-area；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
 */
export class PositionAreaCss extends CssProperty {
  readonly blockEnd = 'position-area:block-end;';
  readonly blockStart = 'position-area:block-start;';
  readonly bottom = 'position-area:bottom;';
  readonly center = 'position-area:center;';
  readonly end = 'position-area:end;';
  readonly inherit = 'position-area:inherit;';
  readonly initial = 'position-area:initial;';
  readonly inlineEnd = 'position-area:inline-end;';
  readonly inlineStart = 'position-area:inline-start;';
  readonly left = 'position-area:left;';
  readonly none = 'position-area:none;';
  readonly revert = 'position-area:revert;';
  readonly revertLayer = 'position-area:revert-layer;';
  readonly right = 'position-area:right;';
  readonly selfBlockEnd = 'position-area:self-block-end;';
  readonly selfBlockStart = 'position-area:self-block-start;';
  readonly selfEnd = 'position-area:self-end;';
  readonly selfInlineEnd = 'position-area:self-inline-end;';
  readonly selfInlineStart = 'position-area:self-inline-start;';
  readonly selfStart = 'position-area:self-start;';
  readonly spanAll = 'position-area:span-all;';
  readonly spanBlockEnd = 'position-area:span-block-end;';
  readonly spanBlockStart = 'position-area:span-block-start;';
  readonly spanBottom = 'position-area:span-bottom;';
  readonly spanEnd = 'position-area:span-end;';
  readonly spanInlineEnd = 'position-area:span-inline-end;';
  readonly spanInlineStart = 'position-area:span-inline-start;';
  readonly spanLeft = 'position-area:span-left;';
  readonly spanRight = 'position-area:span-right;';
  readonly spanSelfBlockEnd = 'position-area:span-self-block-end;';
  readonly spanSelfBlockStart = 'position-area:span-self-block-start;';
  readonly spanSelfEnd = 'position-area:span-self-end;';
  readonly spanSelfInlineEnd = 'position-area:span-self-inline-end;';
  readonly spanSelfInlineStart = 'position-area:span-self-inline-start;';
  readonly spanSelfStart = 'position-area:span-self-start;';
  readonly spanStart = 'position-area:span-start;';
  readonly spanTop = 'position-area:span-top;';
  readonly spanXEnd = 'position-area:span-x-end;';
  readonly spanXSelfEnd = 'position-area:span-x-self-end;';
  readonly spanXSelfStart = 'position-area:span-x-self-start;';
  readonly spanXStart = 'position-area:span-x-start;';
  readonly spanYEnd = 'position-area:span-y-end;';
  readonly spanYSelfEnd = 'position-area:span-y-self-end;';
  readonly spanYSelfStart = 'position-area:span-y-self-start;';
  readonly spanYStart = 'position-area:span-y-start;';
  readonly start = 'position-area:start;';
  readonly top = 'position-area:top;';
  readonly unset = 'position-area:unset;';
  readonly xEnd = 'position-area:x-end;';
  readonly xSelfEnd = 'position-area:x-self-end;';
  readonly xSelfStart = 'position-area:x-self-start;';
  readonly xStart = 'position-area:x-start;';
  readonly yEnd = 'position-area:y-end;';
  readonly ySelfEnd = 'position-area:y-self-end;';
  readonly ySelfStart = 'position-area:y-self-start;';
  readonly yStart = 'position-area:y-start;';
  constructor() {
    super('position-area');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PositionArea | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 position-try。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
 */
export class PositionTryCss extends CssProperty {
  readonly blockEnd = 'position-try:block-end;';
  readonly blockStart = 'position-try:block-start;';
  readonly bottom = 'position-try:bottom;';
  readonly center = 'position-try:center;';
  readonly end = 'position-try:end;';
  readonly flipBlock = 'position-try:flip-block;';
  readonly flipInline = 'position-try:flip-inline;';
  readonly flipStart = 'position-try:flip-start;';
  readonly inherit = 'position-try:inherit;';
  readonly initial = 'position-try:initial;';
  readonly inlineEnd = 'position-try:inline-end;';
  readonly inlineStart = 'position-try:inline-start;';
  readonly left = 'position-try:left;';
  readonly none = 'position-try:none;';
  readonly revert = 'position-try:revert;';
  readonly revertLayer = 'position-try:revert-layer;';
  readonly right = 'position-try:right;';
  readonly selfBlockEnd = 'position-try:self-block-end;';
  readonly selfBlockStart = 'position-try:self-block-start;';
  readonly selfEnd = 'position-try:self-end;';
  readonly selfInlineEnd = 'position-try:self-inline-end;';
  readonly selfInlineStart = 'position-try:self-inline-start;';
  readonly selfStart = 'position-try:self-start;';
  readonly spanAll = 'position-try:span-all;';
  readonly spanBlockEnd = 'position-try:span-block-end;';
  readonly spanBlockStart = 'position-try:span-block-start;';
  readonly spanBottom = 'position-try:span-bottom;';
  readonly spanEnd = 'position-try:span-end;';
  readonly spanInlineEnd = 'position-try:span-inline-end;';
  readonly spanInlineStart = 'position-try:span-inline-start;';
  readonly spanLeft = 'position-try:span-left;';
  readonly spanRight = 'position-try:span-right;';
  readonly spanSelfBlockEnd = 'position-try:span-self-block-end;';
  readonly spanSelfBlockStart = 'position-try:span-self-block-start;';
  readonly spanSelfEnd = 'position-try:span-self-end;';
  readonly spanSelfInlineEnd = 'position-try:span-self-inline-end;';
  readonly spanSelfInlineStart = 'position-try:span-self-inline-start;';
  readonly spanSelfStart = 'position-try:span-self-start;';
  readonly spanStart = 'position-try:span-start;';
  readonly spanTop = 'position-try:span-top;';
  readonly spanXEnd = 'position-try:span-x-end;';
  readonly spanXSelfEnd = 'position-try:span-x-self-end;';
  readonly spanXSelfStart = 'position-try:span-x-self-start;';
  readonly spanXStart = 'position-try:span-x-start;';
  readonly spanYEnd = 'position-try:span-y-end;';
  readonly spanYSelfEnd = 'position-try:span-y-self-end;';
  readonly spanYSelfStart = 'position-try:span-y-self-start;';
  readonly spanYStart = 'position-try:span-y-start;';
  readonly start = 'position-try:start;';
  readonly top = 'position-try:top;';
  readonly unset = 'position-try:unset;';
  readonly xEnd = 'position-try:x-end;';
  readonly xSelfEnd = 'position-try:x-self-end;';
  readonly xSelfStart = 'position-try:x-self-start;';
  readonly xStart = 'position-try:x-start;';
  readonly yEnd = 'position-try:y-end;';
  readonly ySelfEnd = 'position-try:y-self-end;';
  readonly ySelfStart = 'position-try:y-self-start;';
  readonly yStart = 'position-try:y-start;';
  constructor() {
    super('position-try');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PositionTry | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 position-try-fallbacks；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
 */
export class PositionTryFallbacksCss extends CssProperty {
  readonly blockEnd = 'position-try-fallbacks:block-end;';
  readonly blockStart = 'position-try-fallbacks:block-start;';
  readonly bottom = 'position-try-fallbacks:bottom;';
  readonly center = 'position-try-fallbacks:center;';
  readonly end = 'position-try-fallbacks:end;';
  readonly flipBlock = 'position-try-fallbacks:flip-block;';
  readonly flipInline = 'position-try-fallbacks:flip-inline;';
  readonly flipStart = 'position-try-fallbacks:flip-start;';
  readonly inherit = 'position-try-fallbacks:inherit;';
  readonly initial = 'position-try-fallbacks:initial;';
  readonly inlineEnd = 'position-try-fallbacks:inline-end;';
  readonly inlineStart = 'position-try-fallbacks:inline-start;';
  readonly left = 'position-try-fallbacks:left;';
  readonly none = 'position-try-fallbacks:none;';
  readonly revert = 'position-try-fallbacks:revert;';
  readonly revertLayer = 'position-try-fallbacks:revert-layer;';
  readonly right = 'position-try-fallbacks:right;';
  readonly selfBlockEnd = 'position-try-fallbacks:self-block-end;';
  readonly selfBlockStart = 'position-try-fallbacks:self-block-start;';
  readonly selfEnd = 'position-try-fallbacks:self-end;';
  readonly selfInlineEnd = 'position-try-fallbacks:self-inline-end;';
  readonly selfInlineStart = 'position-try-fallbacks:self-inline-start;';
  readonly selfStart = 'position-try-fallbacks:self-start;';
  readonly spanAll = 'position-try-fallbacks:span-all;';
  readonly spanBlockEnd = 'position-try-fallbacks:span-block-end;';
  readonly spanBlockStart = 'position-try-fallbacks:span-block-start;';
  readonly spanBottom = 'position-try-fallbacks:span-bottom;';
  readonly spanEnd = 'position-try-fallbacks:span-end;';
  readonly spanInlineEnd = 'position-try-fallbacks:span-inline-end;';
  readonly spanInlineStart = 'position-try-fallbacks:span-inline-start;';
  readonly spanLeft = 'position-try-fallbacks:span-left;';
  readonly spanRight = 'position-try-fallbacks:span-right;';
  readonly spanSelfBlockEnd = 'position-try-fallbacks:span-self-block-end;';
  readonly spanSelfBlockStart = 'position-try-fallbacks:span-self-block-start;';
  readonly spanSelfEnd = 'position-try-fallbacks:span-self-end;';
  readonly spanSelfInlineEnd = 'position-try-fallbacks:span-self-inline-end;';
  readonly spanSelfInlineStart = 'position-try-fallbacks:span-self-inline-start;';
  readonly spanSelfStart = 'position-try-fallbacks:span-self-start;';
  readonly spanStart = 'position-try-fallbacks:span-start;';
  readonly spanTop = 'position-try-fallbacks:span-top;';
  readonly spanXEnd = 'position-try-fallbacks:span-x-end;';
  readonly spanXSelfEnd = 'position-try-fallbacks:span-x-self-end;';
  readonly spanXSelfStart = 'position-try-fallbacks:span-x-self-start;';
  readonly spanXStart = 'position-try-fallbacks:span-x-start;';
  readonly spanYEnd = 'position-try-fallbacks:span-y-end;';
  readonly spanYSelfEnd = 'position-try-fallbacks:span-y-self-end;';
  readonly spanYSelfStart = 'position-try-fallbacks:span-y-self-start;';
  readonly spanYStart = 'position-try-fallbacks:span-y-start;';
  readonly start = 'position-try-fallbacks:start;';
  readonly top = 'position-try-fallbacks:top;';
  readonly unset = 'position-try-fallbacks:unset;';
  readonly xEnd = 'position-try-fallbacks:x-end;';
  readonly xSelfEnd = 'position-try-fallbacks:x-self-end;';
  readonly xSelfStart = 'position-try-fallbacks:x-self-start;';
  readonly xStart = 'position-try-fallbacks:x-start;';
  readonly yEnd = 'position-try-fallbacks:y-end;';
  readonly ySelfEnd = 'position-try-fallbacks:y-self-end;';
  readonly ySelfStart = 'position-try-fallbacks:y-self-start;';
  readonly yStart = 'position-try-fallbacks:y-start;';
  constructor() {
    super('position-try-fallbacks');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PositionTryFallbacks | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 position-try-order；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
 */
export class PositionTryOrderCss extends CssProperty {
  readonly inherit = 'position-try-order:inherit;';
  readonly initial = 'position-try-order:initial;';
  readonly mostBlockSize = 'position-try-order:most-block-size;';
  readonly mostHeight = 'position-try-order:most-height;';
  readonly mostInlineSize = 'position-try-order:most-inline-size;';
  readonly mostWidth = 'position-try-order:most-width;';
  readonly normal = 'position-try-order:normal;';
  readonly revert = 'position-try-order:revert;';
  readonly revertLayer = 'position-try-order:revert-layer;';
  readonly unset = 'position-try-order:unset;';
  constructor() {
    super('position-try-order');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PositionTryOrder | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 position-visibility；初始值 anchors-visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
 */
export class PositionVisibilityCss extends CssProperty {
  readonly always = 'position-visibility:always;';
  readonly anchorsValid = 'position-visibility:anchors-valid;';
  readonly anchorsVisible = 'position-visibility:anchors-visible;';
  readonly inherit = 'position-visibility:inherit;';
  readonly initial = 'position-visibility:initial;';
  readonly noOverflow = 'position-visibility:no-overflow;';
  readonly revert = 'position-visibility:revert;';
  readonly revertLayer = 'position-visibility:revert-layer;';
  readonly unset = 'position-visibility:unset;';
  constructor() {
    super('position-visibility');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PositionVisibility | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 print-color-adjust；初始值 economy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class PrintColorAdjustCss extends CssProperty {
  readonly economy = 'print-color-adjust:economy;';
  readonly exact = 'print-color-adjust:exact;';
  readonly inherit = 'print-color-adjust:inherit;';
  readonly initial = 'print-color-adjust:initial;';
  readonly revert = 'print-color-adjust:revert;';
  readonly revertLayer = 'print-color-adjust:revert-layer;';
  readonly unset = 'print-color-adjust:unset;';
  constructor() {
    super('print-color-adjust');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.PrintColorAdjust | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 quotes。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
 */
export class QuotesCss extends CssProperty {
  readonly auto = 'quotes:auto;';
  readonly inherit = 'quotes:inherit;';
  readonly initial = 'quotes:initial;';
  readonly none = 'quotes:none;';
  readonly revert = 'quotes:revert;';
  readonly revertLayer = 'quotes:revert-layer;';
  readonly unset = 'quotes:unset;';
  constructor() {
    super('quotes');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Quotes | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 r；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
 */
export class RCss extends LengthCssProperty {
  readonly inherit = 'r:inherit;';
  readonly initial = 'r:initial;';
  readonly revert = 'r:revert;';
  readonly revertLayer = 'r:revert-layer;';
  readonly unset = 'r:unset;';
  constructor() {
    super('r');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.R | CssString): string {
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
  min(value: Property.R | CssString, ...others: (Property.R | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.R | CssString, ...others: (Property.R | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.R | CssString,
    preferred: Property.R | CssString,
    maximum: Property.R | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 resize；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
 */
export class ResizeCss extends CssProperty {
  readonly block = 'resize:block;';
  readonly both = 'resize:both;';
  readonly horizontal = 'resize:horizontal;';
  readonly inherit = 'resize:inherit;';
  readonly initial = 'resize:initial;';
  readonly inline = 'resize:inline;';
  readonly none = 'resize:none;';
  readonly revert = 'resize:revert;';
  readonly revertLayer = 'resize:revert-layer;';
  readonly unset = 'resize:unset;';
  readonly vertical = 'resize:vertical;';
  constructor() {
    super('resize');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Resize | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 right；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
 */
export class RightCss extends LengthCssProperty {
  readonly auto = 'right:auto;';
  readonly inherit = 'right:inherit;';
  readonly initial = 'right:initial;';
  readonly revert = 'right:revert;';
  readonly revertLayer = 'right:revert-layer;';
  readonly unset = 'right:unset;';
  constructor() {
    super('right');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Right | CssString): string {
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
  min(value: Property.Right | CssString, ...others: (Property.Right | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Right | CssString, ...others: (Property.Right | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Right | CssString,
    preferred: Property.Right | CssString,
    maximum: Property.Right | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 rotate；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
 */
export class RotateCss extends CssProperty {
  readonly inherit = 'rotate:inherit;';
  readonly initial = 'rotate:initial;';
  readonly none = 'rotate:none;';
  readonly revert = 'rotate:revert;';
  readonly revertLayer = 'rotate:revert-layer;';
  readonly unset = 'rotate:unset;';
  constructor() {
    super('rotate');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Rotate | CssString): string {
    return this.declaration(value);
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
  min(value: Property.Rotate | CssString, ...others: (Property.Rotate | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Rotate | CssString, ...others: (Property.Rotate | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Rotate | CssString,
    preferred: Property.Rotate | CssString,
    maximum: Property.Rotate | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 row-gap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
 */
export class RowGapCss extends LengthCssProperty {
  readonly inherit = 'row-gap:inherit;';
  readonly initial = 'row-gap:initial;';
  readonly normal = 'row-gap:normal;';
  readonly revert = 'row-gap:revert;';
  readonly revertLayer = 'row-gap:revert-layer;';
  readonly unset = 'row-gap:unset;';
  constructor() {
    super('row-gap');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.RowGap | CssString): string {
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
  min(value: Property.RowGap | CssString, ...others: (Property.RowGap | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.RowGap | CssString, ...others: (Property.RowGap | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.RowGap | CssString,
    preferred: Property.RowGap | CssString,
    maximum: Property.RowGap | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 ruby-align；初始值 space-around。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
 */
export class RubyAlignCss extends CssProperty {
  readonly center = 'ruby-align:center;';
  readonly inherit = 'ruby-align:inherit;';
  readonly initial = 'ruby-align:initial;';
  readonly revert = 'ruby-align:revert;';
  readonly revertLayer = 'ruby-align:revert-layer;';
  readonly spaceAround = 'ruby-align:space-around;';
  readonly spaceBetween = 'ruby-align:space-between;';
  readonly start = 'ruby-align:start;';
  readonly unset = 'ruby-align:unset;';
  constructor() {
    super('ruby-align');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.RubyAlign | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 ruby-merge；初始值 separate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
 */
export class RubyMergeCss extends CssProperty {
  readonly auto = 'ruby-merge:auto;';
  readonly collapse = 'ruby-merge:collapse;';
  readonly inherit = 'ruby-merge:inherit;';
  readonly initial = 'ruby-merge:initial;';
  readonly revert = 'ruby-merge:revert;';
  readonly revertLayer = 'ruby-merge:revert-layer;';
  readonly separate = 'ruby-merge:separate;';
  readonly unset = 'ruby-merge:unset;';
  constructor() {
    super('ruby-merge');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.RubyMerge | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 ruby-overhang；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
 */
export class RubyOverhangCss extends CssProperty {
  readonly auto = 'ruby-overhang:auto;';
  readonly inherit = 'ruby-overhang:inherit;';
  readonly initial = 'ruby-overhang:initial;';
  readonly none = 'ruby-overhang:none;';
  readonly revert = 'ruby-overhang:revert;';
  readonly revertLayer = 'ruby-overhang:revert-layer;';
  readonly unset = 'ruby-overhang:unset;';
  constructor() {
    super('ruby-overhang');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.RubyOverhang | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 ruby-position；初始值 alternate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
 */
export class RubyPositionCss extends CssProperty {
  readonly alternate = 'ruby-position:alternate;';
  readonly inherit = 'ruby-position:inherit;';
  readonly initial = 'ruby-position:initial;';
  readonly interCharacter = 'ruby-position:inter-character;';
  readonly over = 'ruby-position:over;';
  readonly revert = 'ruby-position:revert;';
  readonly revertLayer = 'ruby-position:revert-layer;';
  readonly under = 'ruby-position:under;';
  readonly unset = 'ruby-position:unset;';
  constructor() {
    super('ruby-position');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.RubyPosition | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 rx；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
 */
export class RxCss extends LengthCssProperty {
  readonly inherit = 'rx:inherit;';
  readonly initial = 'rx:initial;';
  readonly revert = 'rx:revert;';
  readonly revertLayer = 'rx:revert-layer;';
  readonly unset = 'rx:unset;';
  constructor() {
    super('rx');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Rx | CssString): string {
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
  min(value: Property.Rx | CssString, ...others: (Property.Rx | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Rx | CssString, ...others: (Property.Rx | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Rx | CssString,
    preferred: Property.Rx | CssString,
    maximum: Property.Rx | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 ry；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
 */
export class RyCss extends LengthCssProperty {
  readonly inherit = 'ry:inherit;';
  readonly initial = 'ry:initial;';
  readonly revert = 'ry:revert;';
  readonly revertLayer = 'ry:revert-layer;';
  readonly unset = 'ry:unset;';
  constructor() {
    super('ry');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Ry | CssString): string {
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
  min(value: Property.Ry | CssString, ...others: (Property.Ry | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Ry | CssString, ...others: (Property.Ry | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Ry | CssString,
    preferred: Property.Ry | CssString,
    maximum: Property.Ry | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}
