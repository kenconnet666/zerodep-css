// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** 行列间距（CSS gap）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
 */
export class GapCss extends LengthCssProperty {
  readonly inherit = 'gap:inherit;';
  readonly initial = 'gap:initial;';
  readonly normal = 'gap:normal;';
  readonly revert = 'gap:revert;';
  readonly revertLayer = 'gap:revert-layer;';
  readonly unset = 'gap:unset;';
  constructor() {
    super('gap');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Gap | CssString): string {
    return this.declaration(value);
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}%`).join(' '));
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Gap | CssString, ...others: (Property.Gap | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Gap | CssString, ...others: (Property.Gap | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Gap | CssString,
    preferred: Property.Gap | CssString,
    maximum: Property.Gap | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 glyph-orientation-vertical。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
 */
export class GlyphOrientationVerticalCss extends CssProperty {
  readonly auto = 'glyph-orientation-vertical:auto;';
  readonly inherit = 'glyph-orientation-vertical:inherit;';
  readonly initial = 'glyph-orientation-vertical:initial;';
  readonly revert = 'glyph-orientation-vertical:revert;';
  readonly revertLayer = 'glyph-orientation-vertical:revert-layer;';
  readonly unset = 'glyph-orientation-vertical:unset;';
  constructor() {
    super('glyph-orientation-vertical');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GlyphOrientationVertical | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GlyphOrientationVertical | CssString,
    ...others: (Property.GlyphOrientationVertical | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GlyphOrientationVertical | CssString,
    ...others: (Property.GlyphOrientationVertical | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GlyphOrientationVertical | CssString,
    preferred: Property.GlyphOrientationVertical | CssString,
    maximum: Property.GlyphOrientationVertical | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
 */
export class GridCss extends CssProperty {
  readonly inherit = 'grid:inherit;';
  readonly initial = 'grid:initial;';
  readonly none = 'grid:none;';
  readonly revert = 'grid:revert;';
  readonly revertLayer = 'grid:revert-layer;';
  readonly unset = 'grid:unset;';
  constructor() {
    super('grid');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Grid | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 grid-area。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
 */
export class GridAreaCss extends CssProperty {
  readonly auto = 'grid-area:auto;';
  readonly inherit = 'grid-area:inherit;';
  readonly initial = 'grid-area:initial;';
  readonly revert = 'grid-area:revert;';
  readonly revertLayer = 'grid-area:revert-layer;';
  readonly unset = 'grid-area:unset;';
  constructor() {
    super('grid-area');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridArea | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.GridArea | CssString, ...others: (Property.GridArea | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.GridArea | CssString, ...others: (Property.GridArea | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridArea | CssString,
    preferred: Property.GridArea | CssString,
    maximum: Property.GridArea | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-auto-columns；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
 */
export class GridAutoColumnsCss extends LengthCssProperty {
  readonly auto = 'grid-auto-columns:auto;';
  readonly inherit = 'grid-auto-columns:inherit;';
  readonly initial = 'grid-auto-columns:initial;';
  readonly maxContent = 'grid-auto-columns:max-content;';
  readonly minContent = 'grid-auto-columns:min-content;';
  readonly revert = 'grid-auto-columns:revert;';
  readonly revertLayer = 'grid-auto-columns:revert-layer;';
  readonly unset = 'grid-auto-columns:unset;';
  constructor() {
    super('grid-auto-columns');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridAutoColumns | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridAutoColumns | CssString,
    ...others: (Property.GridAutoColumns | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridAutoColumns | CssString,
    ...others: (Property.GridAutoColumns | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridAutoColumns | CssString,
    preferred: Property.GridAutoColumns | CssString,
    maximum: Property.GridAutoColumns | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-auto-flow；初始值 row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
 */
export class GridAutoFlowCss extends CssProperty {
  readonly column = 'grid-auto-flow:column;';
  readonly dense = 'grid-auto-flow:dense;';
  readonly inherit = 'grid-auto-flow:inherit;';
  readonly initial = 'grid-auto-flow:initial;';
  readonly revert = 'grid-auto-flow:revert;';
  readonly revertLayer = 'grid-auto-flow:revert-layer;';
  readonly row = 'grid-auto-flow:row;';
  readonly unset = 'grid-auto-flow:unset;';
  constructor() {
    super('grid-auto-flow');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridAutoFlow | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 grid-auto-rows；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
 */
export class GridAutoRowsCss extends LengthCssProperty {
  readonly auto = 'grid-auto-rows:auto;';
  readonly inherit = 'grid-auto-rows:inherit;';
  readonly initial = 'grid-auto-rows:initial;';
  readonly maxContent = 'grid-auto-rows:max-content;';
  readonly minContent = 'grid-auto-rows:min-content;';
  readonly revert = 'grid-auto-rows:revert;';
  readonly revertLayer = 'grid-auto-rows:revert-layer;';
  readonly unset = 'grid-auto-rows:unset;';
  constructor() {
    super('grid-auto-rows');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridAutoRows | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridAutoRows | CssString,
    ...others: (Property.GridAutoRows | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridAutoRows | CssString,
    ...others: (Property.GridAutoRows | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridAutoRows | CssString,
    preferred: Property.GridAutoRows | CssString,
    maximum: Property.GridAutoRows | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-column。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
 */
export class GridColumnCss extends CssProperty {
  readonly auto = 'grid-column:auto;';
  readonly inherit = 'grid-column:inherit;';
  readonly initial = 'grid-column:initial;';
  readonly revert = 'grid-column:revert;';
  readonly revertLayer = 'grid-column:revert-layer;';
  readonly unset = 'grid-column:unset;';
  constructor() {
    super('grid-column');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridColumn | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridColumn | CssString,
    ...others: (Property.GridColumn | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridColumn | CssString,
    ...others: (Property.GridColumn | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridColumn | CssString,
    preferred: Property.GridColumn | CssString,
    maximum: Property.GridColumn | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-column-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
 */
export class GridColumnEndCss extends CssProperty {
  readonly auto = 'grid-column-end:auto;';
  readonly inherit = 'grid-column-end:inherit;';
  readonly initial = 'grid-column-end:initial;';
  readonly revert = 'grid-column-end:revert;';
  readonly revertLayer = 'grid-column-end:revert-layer;';
  readonly unset = 'grid-column-end:unset;';
  constructor() {
    super('grid-column-end');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridColumnEnd | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridColumnEnd | CssString,
    ...others: (Property.GridColumnEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridColumnEnd | CssString,
    ...others: (Property.GridColumnEnd | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridColumnEnd | CssString,
    preferred: Property.GridColumnEnd | CssString,
    maximum: Property.GridColumnEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-column-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
 */
export class GridColumnStartCss extends CssProperty {
  readonly auto = 'grid-column-start:auto;';
  readonly inherit = 'grid-column-start:inherit;';
  readonly initial = 'grid-column-start:initial;';
  readonly revert = 'grid-column-start:revert;';
  readonly revertLayer = 'grid-column-start:revert-layer;';
  readonly unset = 'grid-column-start:unset;';
  constructor() {
    super('grid-column-start');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridColumnStart | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridColumnStart | CssString,
    ...others: (Property.GridColumnStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridColumnStart | CssString,
    ...others: (Property.GridColumnStart | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridColumnStart | CssString,
    preferred: Property.GridColumnStart | CssString,
    maximum: Property.GridColumnStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
 */
export class GridRowCss extends CssProperty {
  readonly auto = 'grid-row:auto;';
  readonly inherit = 'grid-row:inherit;';
  readonly initial = 'grid-row:initial;';
  readonly revert = 'grid-row:revert;';
  readonly revertLayer = 'grid-row:revert-layer;';
  readonly unset = 'grid-row:unset;';
  constructor() {
    super('grid-row');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridRow | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.GridRow | CssString, ...others: (Property.GridRow | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.GridRow | CssString, ...others: (Property.GridRow | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridRow | CssString,
    preferred: Property.GridRow | CssString,
    maximum: Property.GridRow | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-row-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
 */
export class GridRowEndCss extends CssProperty {
  readonly auto = 'grid-row-end:auto;';
  readonly inherit = 'grid-row-end:inherit;';
  readonly initial = 'grid-row-end:initial;';
  readonly revert = 'grid-row-end:revert;';
  readonly revertLayer = 'grid-row-end:revert-layer;';
  readonly unset = 'grid-row-end:unset;';
  constructor() {
    super('grid-row-end');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridRowEnd | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridRowEnd | CssString,
    ...others: (Property.GridRowEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridRowEnd | CssString,
    ...others: (Property.GridRowEnd | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridRowEnd | CssString,
    preferred: Property.GridRowEnd | CssString,
    maximum: Property.GridRowEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-row-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
 */
export class GridRowStartCss extends CssProperty {
  readonly auto = 'grid-row-start:auto;';
  readonly inherit = 'grid-row-start:inherit;';
  readonly initial = 'grid-row-start:initial;';
  readonly revert = 'grid-row-start:revert;';
  readonly revertLayer = 'grid-row-start:revert-layer;';
  readonly unset = 'grid-row-start:unset;';
  constructor() {
    super('grid-row-start');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridRowStart | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridRowStart | CssString,
    ...others: (Property.GridRowStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridRowStart | CssString,
    ...others: (Property.GridRowStart | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridRowStart | CssString,
    preferred: Property.GridRowStart | CssString,
    maximum: Property.GridRowStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-template。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
 */
export class GridTemplateCss extends CssProperty {
  readonly inherit = 'grid-template:inherit;';
  readonly initial = 'grid-template:initial;';
  readonly none = 'grid-template:none;';
  readonly revert = 'grid-template:revert;';
  readonly revertLayer = 'grid-template:revert-layer;';
  readonly unset = 'grid-template:unset;';
  constructor() {
    super('grid-template');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridTemplate | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 grid-template-areas；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
 */
export class GridTemplateAreasCss extends CssProperty {
  readonly inherit = 'grid-template-areas:inherit;';
  readonly initial = 'grid-template-areas:initial;';
  readonly none = 'grid-template-areas:none;';
  readonly revert = 'grid-template-areas:revert;';
  readonly revertLayer = 'grid-template-areas:revert-layer;';
  readonly unset = 'grid-template-areas:unset;';
  constructor() {
    super('grid-template-areas');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridTemplateAreas | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 grid-template-columns；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
 */
export class GridTemplateColumnsCss extends LengthCssProperty {
  readonly auto = 'grid-template-columns:auto;';
  readonly inherit = 'grid-template-columns:inherit;';
  readonly initial = 'grid-template-columns:initial;';
  readonly maxContent = 'grid-template-columns:max-content;';
  readonly minContent = 'grid-template-columns:min-content;';
  readonly none = 'grid-template-columns:none;';
  readonly revert = 'grid-template-columns:revert;';
  readonly revertLayer = 'grid-template-columns:revert-layer;';
  readonly subgrid = 'grid-template-columns:subgrid;';
  readonly unset = 'grid-template-columns:unset;';
  constructor() {
    super('grid-template-columns');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridTemplateColumns | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridTemplateColumns | CssString,
    ...others: (Property.GridTemplateColumns | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridTemplateColumns | CssString,
    ...others: (Property.GridTemplateColumns | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridTemplateColumns | CssString,
    preferred: Property.GridTemplateColumns | CssString,
    maximum: Property.GridTemplateColumns | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 grid-template-rows；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
 */
export class GridTemplateRowsCss extends LengthCssProperty {
  readonly auto = 'grid-template-rows:auto;';
  readonly inherit = 'grid-template-rows:inherit;';
  readonly initial = 'grid-template-rows:initial;';
  readonly maxContent = 'grid-template-rows:max-content;';
  readonly minContent = 'grid-template-rows:min-content;';
  readonly none = 'grid-template-rows:none;';
  readonly revert = 'grid-template-rows:revert;';
  readonly revertLayer = 'grid-template-rows:revert-layer;';
  readonly subgrid = 'grid-template-rows:subgrid;';
  readonly unset = 'grid-template-rows:unset;';
  constructor() {
    super('grid-template-rows');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.GridTemplateRows | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.GridTemplateRows | CssString,
    ...others: (Property.GridTemplateRows | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.GridTemplateRows | CssString,
    ...others: (Property.GridTemplateRows | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.GridTemplateRows | CssString,
    preferred: Property.GridTemplateRows | CssString,
    maximum: Property.GridTemplateRows | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 hanging-punctuation；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
 */
export class HangingPunctuationCss extends CssProperty {
  readonly allowEnd = 'hanging-punctuation:allow-end;';
  readonly first = 'hanging-punctuation:first;';
  readonly forceEnd = 'hanging-punctuation:force-end;';
  readonly inherit = 'hanging-punctuation:inherit;';
  readonly initial = 'hanging-punctuation:initial;';
  readonly last = 'hanging-punctuation:last;';
  readonly none = 'hanging-punctuation:none;';
  readonly revert = 'hanging-punctuation:revert;';
  readonly revertLayer = 'hanging-punctuation:revert-layer;';
  readonly unset = 'hanging-punctuation:unset;';
  constructor() {
    super('hanging-punctuation');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.HangingPunctuation | CssString): string {
    return this.declaration(value);
  }
}

/** 高度（CSS height）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
 */
export class HeightCss extends LengthCssProperty {
  readonly auto = 'height:auto;';
  readonly fitContent = 'height:fit-content;';
  readonly inherit = 'height:inherit;';
  readonly initial = 'height:initial;';
  readonly maxContent = 'height:max-content;';
  readonly minContent = 'height:min-content;';
  readonly revert = 'height:revert;';
  readonly revertLayer = 'height:revert-layer;';
  readonly unset = 'height:unset;';
  constructor() {
    super('height');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Height | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Height | CssString, ...others: (Property.Height | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Height | CssString, ...others: (Property.Height | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Height | CssString,
    preferred: Property.Height | CssString,
    maximum: Property.Height | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 hyphenate-character；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
 */
export class HyphenateCharacterCss extends CssProperty {
  readonly auto = 'hyphenate-character:auto;';
  readonly inherit = 'hyphenate-character:inherit;';
  readonly initial = 'hyphenate-character:initial;';
  readonly revert = 'hyphenate-character:revert;';
  readonly revertLayer = 'hyphenate-character:revert-layer;';
  readonly unset = 'hyphenate-character:unset;';
  constructor() {
    super('hyphenate-character');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.HyphenateCharacter | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 hyphenate-limit-chars；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
 */
export class HyphenateLimitCharsCss extends CssProperty {
  readonly auto = 'hyphenate-limit-chars:auto;';
  readonly inherit = 'hyphenate-limit-chars:inherit;';
  readonly initial = 'hyphenate-limit-chars:initial;';
  readonly revert = 'hyphenate-limit-chars:revert;';
  readonly revertLayer = 'hyphenate-limit-chars:revert-layer;';
  readonly unset = 'hyphenate-limit-chars:unset;';
  constructor() {
    super('hyphenate-limit-chars');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.HyphenateLimitChars | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.HyphenateLimitChars | CssString,
    ...others: (Property.HyphenateLimitChars | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.HyphenateLimitChars | CssString,
    ...others: (Property.HyphenateLimitChars | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.HyphenateLimitChars | CssString,
    preferred: Property.HyphenateLimitChars | CssString,
    maximum: Property.HyphenateLimitChars | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 hyphens；初始值 manual。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
 */
export class HyphensCss extends CssProperty {
  readonly auto = 'hyphens:auto;';
  readonly inherit = 'hyphens:inherit;';
  readonly initial = 'hyphens:initial;';
  readonly manual = 'hyphens:manual;';
  readonly none = 'hyphens:none;';
  readonly revert = 'hyphens:revert;';
  readonly revertLayer = 'hyphens:revert-layer;';
  readonly unset = 'hyphens:unset;';
  constructor() {
    super('hyphens');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Hyphens | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 image-orientation；初始值 from-image。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
 */
export class ImageOrientationCss extends CssProperty {
  readonly flip = 'image-orientation:flip;';
  readonly fromImage = 'image-orientation:from-image;';
  readonly inherit = 'image-orientation:inherit;';
  readonly initial = 'image-orientation:initial;';
  readonly revert = 'image-orientation:revert;';
  readonly revertLayer = 'image-orientation:revert-layer;';
  readonly unset = 'image-orientation:unset;';
  constructor() {
    super('image-orientation');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ImageOrientation | CssString): string {
    return this.declaration(value);
  }
  /** 使用 deg 单位生成声明；数值合法性由浏览器处理。 */
  deg(value: number): string {
    return this.declaration(`${value}deg`);
  }
  /** 使用 grad 单位生成声明；数值合法性由浏览器处理。 */
  grad(value: number): string {
    return this.declaration(`${value}grad`);
  }
  /** 使用 rad 单位生成声明；数值合法性由浏览器处理。 */
  rad(value: number): string {
    return this.declaration(`${value}rad`);
  }
  /** 使用 turn 单位生成声明；数值合法性由浏览器处理。 */
  turn(value: number): string {
    return this.declaration(`${value}turn`);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.ImageOrientation | CssString,
    ...others: (Property.ImageOrientation | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.ImageOrientation | CssString,
    ...others: (Property.ImageOrientation | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.ImageOrientation | CssString,
    preferred: Property.ImageOrientation | CssString,
    maximum: Property.ImageOrientation | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 image-rendering；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
 */
export class ImageRenderingCss extends CssProperty {
  readonly auto = 'image-rendering:auto;';
  readonly crispEdges = 'image-rendering:crisp-edges;';
  readonly inherit = 'image-rendering:inherit;';
  readonly initial = 'image-rendering:initial;';
  readonly pixelated = 'image-rendering:pixelated;';
  readonly revert = 'image-rendering:revert;';
  readonly revertLayer = 'image-rendering:revert-layer;';
  readonly smooth = 'image-rendering:smooth;';
  readonly unset = 'image-rendering:unset;';
  constructor() {
    super('image-rendering');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ImageRendering | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 image-resolution；初始值 1dppx。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
 */
export class ImageResolutionCss extends CssProperty {
  readonly fromImage = 'image-resolution:from-image;';
  readonly inherit = 'image-resolution:inherit;';
  readonly initial = 'image-resolution:initial;';
  readonly revert = 'image-resolution:revert;';
  readonly revertLayer = 'image-resolution:revert-layer;';
  readonly unset = 'image-resolution:unset;';
  constructor() {
    super('image-resolution');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ImageResolution | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 initial-letter；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
 */
export class InitialLetterCss extends CssProperty {
  readonly inherit = 'initial-letter:inherit;';
  readonly initial = 'initial-letter:initial;';
  readonly normal = 'initial-letter:normal;';
  readonly revert = 'initial-letter:revert;';
  readonly revertLayer = 'initial-letter:revert-layer;';
  readonly unset = 'initial-letter:unset;';
  constructor() {
    super('initial-letter');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InitialLetter | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InitialLetter | CssString,
    ...others: (Property.InitialLetter | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InitialLetter | CssString,
    ...others: (Property.InitialLetter | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InitialLetter | CssString,
    preferred: Property.InitialLetter | CssString,
    maximum: Property.InitialLetter | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 initial-letter-align；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
 */
export class InitialLetterAlignCss extends CssProperty {
  readonly alphabetic = 'initial-letter-align:alphabetic;';
  readonly auto = 'initial-letter-align:auto;';
  readonly hanging = 'initial-letter-align:hanging;';
  readonly ideographic = 'initial-letter-align:ideographic;';
  readonly inherit = 'initial-letter-align:inherit;';
  readonly initial = 'initial-letter-align:initial;';
  readonly revert = 'initial-letter-align:revert;';
  readonly revertLayer = 'initial-letter-align:revert-layer;';
  readonly unset = 'initial-letter-align:unset;';
  constructor() {
    super('initial-letter-align');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InitialLetterAlign | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 inline-size；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
 */
export class InlineSizeCss extends LengthCssProperty {
  readonly auto = 'inline-size:auto;';
  readonly fitContent = 'inline-size:fit-content;';
  readonly inherit = 'inline-size:inherit;';
  readonly initial = 'inline-size:initial;';
  readonly maxContent = 'inline-size:max-content;';
  readonly minContent = 'inline-size:min-content;';
  readonly revert = 'inline-size:revert;';
  readonly revertLayer = 'inline-size:revert-layer;';
  readonly unset = 'inline-size:unset;';
  constructor() {
    super('inline-size');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InlineSize | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InlineSize | CssString,
    ...others: (Property.InlineSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InlineSize | CssString,
    ...others: (Property.InlineSize | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InlineSize | CssString,
    preferred: Property.InlineSize | CssString,
    maximum: Property.InlineSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 inset。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
 */
export class InsetCss extends LengthCssProperty {
  readonly auto = 'inset:auto;';
  readonly inherit = 'inset:inherit;';
  readonly initial = 'inset:initial;';
  readonly revert = 'inset:revert;';
  readonly revertLayer = 'inset:revert-layer;';
  readonly unset = 'inset:unset;';
  constructor() {
    super('inset');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Inset | CssString): string {
    return this.declaration(value);
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Inset | CssString, ...others: (Property.Inset | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Inset | CssString, ...others: (Property.Inset | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Inset | CssString,
    preferred: Property.Inset | CssString,
    maximum: Property.Inset | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 inset-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
 */
export class InsetBlockCss extends LengthCssProperty {
  readonly auto = 'inset-block:auto;';
  readonly inherit = 'inset-block:inherit;';
  readonly initial = 'inset-block:initial;';
  readonly revert = 'inset-block:revert;';
  readonly revertLayer = 'inset-block:revert-layer;';
  readonly unset = 'inset-block:unset;';
  constructor() {
    super('inset-block');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InsetBlock | CssString): string {
    return this.declaration(value);
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InsetBlock | CssString,
    ...others: (Property.InsetBlock | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InsetBlock | CssString,
    ...others: (Property.InsetBlock | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InsetBlock | CssString,
    preferred: Property.InsetBlock | CssString,
    maximum: Property.InsetBlock | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 inset-block-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
 */
export class InsetBlockEndCss extends LengthCssProperty {
  readonly auto = 'inset-block-end:auto;';
  readonly inherit = 'inset-block-end:inherit;';
  readonly initial = 'inset-block-end:initial;';
  readonly revert = 'inset-block-end:revert;';
  readonly revertLayer = 'inset-block-end:revert-layer;';
  readonly unset = 'inset-block-end:unset;';
  constructor() {
    super('inset-block-end');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InsetBlockEnd | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InsetBlockEnd | CssString,
    ...others: (Property.InsetBlockEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InsetBlockEnd | CssString,
    ...others: (Property.InsetBlockEnd | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InsetBlockEnd | CssString,
    preferred: Property.InsetBlockEnd | CssString,
    maximum: Property.InsetBlockEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 inset-block-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
 */
export class InsetBlockStartCss extends LengthCssProperty {
  readonly auto = 'inset-block-start:auto;';
  readonly inherit = 'inset-block-start:inherit;';
  readonly initial = 'inset-block-start:initial;';
  readonly revert = 'inset-block-start:revert;';
  readonly revertLayer = 'inset-block-start:revert-layer;';
  readonly unset = 'inset-block-start:unset;';
  constructor() {
    super('inset-block-start');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InsetBlockStart | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InsetBlockStart | CssString,
    ...others: (Property.InsetBlockStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InsetBlockStart | CssString,
    ...others: (Property.InsetBlockStart | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InsetBlockStart | CssString,
    preferred: Property.InsetBlockStart | CssString,
    maximum: Property.InsetBlockStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 inset-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
 */
export class InsetInlineCss extends LengthCssProperty {
  readonly auto = 'inset-inline:auto;';
  readonly inherit = 'inset-inline:inherit;';
  readonly initial = 'inset-inline:initial;';
  readonly revert = 'inset-inline:revert;';
  readonly revertLayer = 'inset-inline:revert-layer;';
  readonly unset = 'inset-inline:unset;';
  constructor() {
    super('inset-inline');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InsetInline | CssString): string {
    return this.declaration(value);
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InsetInline | CssString,
    ...others: (Property.InsetInline | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InsetInline | CssString,
    ...others: (Property.InsetInline | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InsetInline | CssString,
    preferred: Property.InsetInline | CssString,
    maximum: Property.InsetInline | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 inset-inline-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
 */
export class InsetInlineEndCss extends LengthCssProperty {
  readonly auto = 'inset-inline-end:auto;';
  readonly inherit = 'inset-inline-end:inherit;';
  readonly initial = 'inset-inline-end:initial;';
  readonly revert = 'inset-inline-end:revert;';
  readonly revertLayer = 'inset-inline-end:revert-layer;';
  readonly unset = 'inset-inline-end:unset;';
  constructor() {
    super('inset-inline-end');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InsetInlineEnd | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InsetInlineEnd | CssString,
    ...others: (Property.InsetInlineEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InsetInlineEnd | CssString,
    ...others: (Property.InsetInlineEnd | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InsetInlineEnd | CssString,
    preferred: Property.InsetInlineEnd | CssString,
    maximum: Property.InsetInlineEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 inset-inline-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
 */
export class InsetInlineStartCss extends LengthCssProperty {
  readonly auto = 'inset-inline-start:auto;';
  readonly inherit = 'inset-inline-start:inherit;';
  readonly initial = 'inset-inline-start:initial;';
  readonly revert = 'inset-inline-start:revert;';
  readonly revertLayer = 'inset-inline-start:revert-layer;';
  readonly unset = 'inset-inline-start:unset;';
  constructor() {
    super('inset-inline-start');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InsetInlineStart | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.InsetInlineStart | CssString,
    ...others: (Property.InsetInlineStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.InsetInlineStart | CssString,
    ...others: (Property.InsetInlineStart | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.InsetInlineStart | CssString,
    preferred: Property.InsetInlineStart | CssString,
    maximum: Property.InsetInlineStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 interpolate-size；初始值 numeric-only。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
 */
export class InterpolateSizeCss extends CssProperty {
  readonly allowKeywords = 'interpolate-size:allow-keywords;';
  readonly inherit = 'interpolate-size:inherit;';
  readonly initial = 'interpolate-size:initial;';
  readonly numericOnly = 'interpolate-size:numeric-only;';
  readonly revert = 'interpolate-size:revert;';
  readonly revertLayer = 'interpolate-size:revert-layer;';
  readonly unset = 'interpolate-size:unset;';
  constructor() {
    super('interpolate-size');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.InterpolateSize | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 isolation；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
 */
export class IsolationCss extends CssProperty {
  readonly auto = 'isolation:auto;';
  readonly inherit = 'isolation:inherit;';
  readonly initial = 'isolation:initial;';
  readonly isolate = 'isolation:isolate;';
  readonly revert = 'isolation:revert;';
  readonly revertLayer = 'isolation:revert-layer;';
  readonly unset = 'isolation:unset;';
  constructor() {
    super('isolation');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Isolation | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 justify-content；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
 */
export class JustifyContentCss extends CssProperty {
  readonly center = 'justify-content:center;';
  readonly end = 'justify-content:end;';
  readonly flexEnd = 'justify-content:flex-end;';
  readonly flexStart = 'justify-content:flex-start;';
  readonly inherit = 'justify-content:inherit;';
  readonly initial = 'justify-content:initial;';
  readonly left = 'justify-content:left;';
  readonly normal = 'justify-content:normal;';
  readonly revert = 'justify-content:revert;';
  readonly revertLayer = 'justify-content:revert-layer;';
  readonly right = 'justify-content:right;';
  readonly spaceAround = 'justify-content:space-around;';
  readonly spaceBetween = 'justify-content:space-between;';
  readonly spaceEvenly = 'justify-content:space-evenly;';
  readonly start = 'justify-content:start;';
  readonly stretch = 'justify-content:stretch;';
  readonly unset = 'justify-content:unset;';
  constructor() {
    super('justify-content');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.JustifyContent | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 justify-items；初始值 legacy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
 */
export class JustifyItemsCss extends CssProperty {
  readonly anchorCenter = 'justify-items:anchor-center;';
  readonly baseline = 'justify-items:baseline;';
  readonly center = 'justify-items:center;';
  readonly end = 'justify-items:end;';
  readonly flexEnd = 'justify-items:flex-end;';
  readonly flexStart = 'justify-items:flex-start;';
  readonly inherit = 'justify-items:inherit;';
  readonly initial = 'justify-items:initial;';
  readonly left = 'justify-items:left;';
  readonly legacy = 'justify-items:legacy;';
  readonly normal = 'justify-items:normal;';
  readonly revert = 'justify-items:revert;';
  readonly revertLayer = 'justify-items:revert-layer;';
  readonly right = 'justify-items:right;';
  readonly selfEnd = 'justify-items:self-end;';
  readonly selfStart = 'justify-items:self-start;';
  readonly start = 'justify-items:start;';
  readonly stretch = 'justify-items:stretch;';
  readonly unset = 'justify-items:unset;';
  constructor() {
    super('justify-items');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.JustifyItems | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 justify-self；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
 */
export class JustifySelfCss extends CssProperty {
  readonly anchorCenter = 'justify-self:anchor-center;';
  readonly auto = 'justify-self:auto;';
  readonly baseline = 'justify-self:baseline;';
  readonly center = 'justify-self:center;';
  readonly end = 'justify-self:end;';
  readonly flexEnd = 'justify-self:flex-end;';
  readonly flexStart = 'justify-self:flex-start;';
  readonly inherit = 'justify-self:inherit;';
  readonly initial = 'justify-self:initial;';
  readonly left = 'justify-self:left;';
  readonly normal = 'justify-self:normal;';
  readonly revert = 'justify-self:revert;';
  readonly revertLayer = 'justify-self:revert-layer;';
  readonly right = 'justify-self:right;';
  readonly selfEnd = 'justify-self:self-end;';
  readonly selfStart = 'justify-self:self-start;';
  readonly start = 'justify-self:start;';
  readonly stretch = 'justify-self:stretch;';
  readonly unset = 'justify-self:unset;';
  constructor() {
    super('justify-self');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.JustifySelf | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 justify-tracks；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
 */
export class JustifyTracksCss extends CssProperty {
  readonly center = 'justify-tracks:center;';
  readonly end = 'justify-tracks:end;';
  readonly flexEnd = 'justify-tracks:flex-end;';
  readonly flexStart = 'justify-tracks:flex-start;';
  readonly inherit = 'justify-tracks:inherit;';
  readonly initial = 'justify-tracks:initial;';
  readonly left = 'justify-tracks:left;';
  readonly normal = 'justify-tracks:normal;';
  readonly revert = 'justify-tracks:revert;';
  readonly revertLayer = 'justify-tracks:revert-layer;';
  readonly right = 'justify-tracks:right;';
  readonly spaceAround = 'justify-tracks:space-around;';
  readonly spaceBetween = 'justify-tracks:space-between;';
  readonly spaceEvenly = 'justify-tracks:space-evenly;';
  readonly start = 'justify-tracks:start;';
  readonly stretch = 'justify-tracks:stretch;';
  readonly unset = 'justify-tracks:unset;';
  constructor() {
    super('justify-tracks');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.JustifyTracks | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 left；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
 */
export class LeftCss extends LengthCssProperty {
  readonly auto = 'left:auto;';
  readonly inherit = 'left:inherit;';
  readonly initial = 'left:initial;';
  readonly revert = 'left:revert;';
  readonly revertLayer = 'left:revert-layer;';
  readonly unset = 'left:unset;';
  constructor() {
    super('left');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.Left | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(value: Property.Left | CssString, ...others: (Property.Left | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(value: Property.Left | CssString, ...others: (Property.Left | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.Left | CssString,
    preferred: Property.Left | CssString,
    maximum: Property.Left | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 letter-spacing；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
 */
export class LetterSpacingCss extends LengthCssProperty {
  readonly inherit = 'letter-spacing:inherit;';
  readonly initial = 'letter-spacing:initial;';
  readonly normal = 'letter-spacing:normal;';
  readonly revert = 'letter-spacing:revert;';
  readonly revertLayer = 'letter-spacing:revert-layer;';
  readonly unset = 'letter-spacing:unset;';
  constructor() {
    super('letter-spacing');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.LetterSpacing | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.LetterSpacing | CssString,
    ...others: (Property.LetterSpacing | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.LetterSpacing | CssString,
    ...others: (Property.LetterSpacing | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.LetterSpacing | CssString,
    preferred: Property.LetterSpacing | CssString,
    maximum: Property.LetterSpacing | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 lighting-color；初始值 white。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
 */
export class LightingColorCss extends CssProperty {
  readonly AccentColor = 'lighting-color:AccentColor;';
  readonly AccentColorText = 'lighting-color:AccentColorText;';
  readonly ActiveBorder = 'lighting-color:ActiveBorder;';
  readonly ActiveCaption = 'lighting-color:ActiveCaption;';
  readonly ActiveText = 'lighting-color:ActiveText;';
  readonly AppWorkspace = 'lighting-color:AppWorkspace;';
  readonly Background = 'lighting-color:Background;';
  readonly ButtonBorder = 'lighting-color:ButtonBorder;';
  readonly ButtonFace = 'lighting-color:ButtonFace;';
  readonly ButtonHighlight = 'lighting-color:ButtonHighlight;';
  readonly ButtonShadow = 'lighting-color:ButtonShadow;';
  readonly ButtonText = 'lighting-color:ButtonText;';
  readonly Canvas = 'lighting-color:Canvas;';
  readonly CanvasText = 'lighting-color:CanvasText;';
  readonly CaptionText = 'lighting-color:CaptionText;';
  readonly Field = 'lighting-color:Field;';
  readonly FieldText = 'lighting-color:FieldText;';
  readonly GrayText = 'lighting-color:GrayText;';
  readonly Highlight = 'lighting-color:Highlight;';
  readonly HighlightText = 'lighting-color:HighlightText;';
  readonly InactiveBorder = 'lighting-color:InactiveBorder;';
  readonly InactiveCaption = 'lighting-color:InactiveCaption;';
  readonly InactiveCaptionText = 'lighting-color:InactiveCaptionText;';
  readonly InfoBackground = 'lighting-color:InfoBackground;';
  readonly InfoText = 'lighting-color:InfoText;';
  readonly LinkText = 'lighting-color:LinkText;';
  readonly Mark = 'lighting-color:Mark;';
  readonly MarkText = 'lighting-color:MarkText;';
  readonly Menu = 'lighting-color:Menu;';
  readonly MenuText = 'lighting-color:MenuText;';
  readonly Scrollbar = 'lighting-color:Scrollbar;';
  readonly SelectedItem = 'lighting-color:SelectedItem;';
  readonly SelectedItemText = 'lighting-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'lighting-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'lighting-color:ThreeDFace;';
  readonly ThreeDHighlight = 'lighting-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'lighting-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'lighting-color:ThreeDShadow;';
  readonly VisitedText = 'lighting-color:VisitedText;';
  readonly Window = 'lighting-color:Window;';
  readonly WindowFrame = 'lighting-color:WindowFrame;';
  readonly WindowText = 'lighting-color:WindowText;';
  readonly aliceblue = 'lighting-color:aliceblue;';
  readonly antiquewhite = 'lighting-color:antiquewhite;';
  readonly aqua = 'lighting-color:aqua;';
  readonly aquamarine = 'lighting-color:aquamarine;';
  readonly azure = 'lighting-color:azure;';
  readonly beige = 'lighting-color:beige;';
  readonly bisque = 'lighting-color:bisque;';
  readonly black = 'lighting-color:black;';
  readonly blanchedalmond = 'lighting-color:blanchedalmond;';
  readonly blue = 'lighting-color:blue;';
  readonly blueviolet = 'lighting-color:blueviolet;';
  readonly brown = 'lighting-color:brown;';
  readonly burlywood = 'lighting-color:burlywood;';
  readonly cadetblue = 'lighting-color:cadetblue;';
  readonly chartreuse = 'lighting-color:chartreuse;';
  readonly chocolate = 'lighting-color:chocolate;';
  readonly coral = 'lighting-color:coral;';
  readonly cornflowerblue = 'lighting-color:cornflowerblue;';
  readonly cornsilk = 'lighting-color:cornsilk;';
  readonly crimson = 'lighting-color:crimson;';
  readonly currentColor = 'lighting-color:currentColor;';
  readonly cyan = 'lighting-color:cyan;';
  readonly darkblue = 'lighting-color:darkblue;';
  readonly darkcyan = 'lighting-color:darkcyan;';
  readonly darkgoldenrod = 'lighting-color:darkgoldenrod;';
  readonly darkgray = 'lighting-color:darkgray;';
  readonly darkgreen = 'lighting-color:darkgreen;';
  readonly darkgrey = 'lighting-color:darkgrey;';
  readonly darkkhaki = 'lighting-color:darkkhaki;';
  readonly darkmagenta = 'lighting-color:darkmagenta;';
  readonly darkolivegreen = 'lighting-color:darkolivegreen;';
  readonly darkorange = 'lighting-color:darkorange;';
  readonly darkorchid = 'lighting-color:darkorchid;';
  readonly darkred = 'lighting-color:darkred;';
  readonly darksalmon = 'lighting-color:darksalmon;';
  readonly darkseagreen = 'lighting-color:darkseagreen;';
  readonly darkslateblue = 'lighting-color:darkslateblue;';
  readonly darkslategray = 'lighting-color:darkslategray;';
  readonly darkslategrey = 'lighting-color:darkslategrey;';
  readonly darkturquoise = 'lighting-color:darkturquoise;';
  readonly darkviolet = 'lighting-color:darkviolet;';
  readonly deeppink = 'lighting-color:deeppink;';
  readonly deepskyblue = 'lighting-color:deepskyblue;';
  readonly dimgray = 'lighting-color:dimgray;';
  readonly dimgrey = 'lighting-color:dimgrey;';
  readonly dodgerblue = 'lighting-color:dodgerblue;';
  readonly firebrick = 'lighting-color:firebrick;';
  readonly floralwhite = 'lighting-color:floralwhite;';
  readonly forestgreen = 'lighting-color:forestgreen;';
  readonly fuchsia = 'lighting-color:fuchsia;';
  readonly gainsboro = 'lighting-color:gainsboro;';
  readonly ghostwhite = 'lighting-color:ghostwhite;';
  readonly gold = 'lighting-color:gold;';
  readonly goldenrod = 'lighting-color:goldenrod;';
  readonly gray = 'lighting-color:gray;';
  readonly green = 'lighting-color:green;';
  readonly greenyellow = 'lighting-color:greenyellow;';
  readonly grey = 'lighting-color:grey;';
  readonly honeydew = 'lighting-color:honeydew;';
  readonly hotpink = 'lighting-color:hotpink;';
  readonly indianred = 'lighting-color:indianred;';
  readonly indigo = 'lighting-color:indigo;';
  readonly inherit = 'lighting-color:inherit;';
  readonly initial = 'lighting-color:initial;';
  readonly ivory = 'lighting-color:ivory;';
  readonly khaki = 'lighting-color:khaki;';
  readonly lavender = 'lighting-color:lavender;';
  readonly lavenderblush = 'lighting-color:lavenderblush;';
  readonly lawngreen = 'lighting-color:lawngreen;';
  readonly lemonchiffon = 'lighting-color:lemonchiffon;';
  readonly lightblue = 'lighting-color:lightblue;';
  readonly lightcoral = 'lighting-color:lightcoral;';
  readonly lightcyan = 'lighting-color:lightcyan;';
  readonly lightgoldenrodyellow = 'lighting-color:lightgoldenrodyellow;';
  readonly lightgray = 'lighting-color:lightgray;';
  readonly lightgreen = 'lighting-color:lightgreen;';
  readonly lightgrey = 'lighting-color:lightgrey;';
  readonly lightpink = 'lighting-color:lightpink;';
  readonly lightsalmon = 'lighting-color:lightsalmon;';
  readonly lightseagreen = 'lighting-color:lightseagreen;';
  readonly lightskyblue = 'lighting-color:lightskyblue;';
  readonly lightslategray = 'lighting-color:lightslategray;';
  readonly lightslategrey = 'lighting-color:lightslategrey;';
  readonly lightsteelblue = 'lighting-color:lightsteelblue;';
  readonly lightyellow = 'lighting-color:lightyellow;';
  readonly lime = 'lighting-color:lime;';
  readonly limegreen = 'lighting-color:limegreen;';
  readonly linen = 'lighting-color:linen;';
  readonly magenta = 'lighting-color:magenta;';
  readonly maroon = 'lighting-color:maroon;';
  readonly mediumaquamarine = 'lighting-color:mediumaquamarine;';
  readonly mediumblue = 'lighting-color:mediumblue;';
  readonly mediumorchid = 'lighting-color:mediumorchid;';
  readonly mediumpurple = 'lighting-color:mediumpurple;';
  readonly mediumseagreen = 'lighting-color:mediumseagreen;';
  readonly mediumslateblue = 'lighting-color:mediumslateblue;';
  readonly mediumspringgreen = 'lighting-color:mediumspringgreen;';
  readonly mediumturquoise = 'lighting-color:mediumturquoise;';
  readonly mediumvioletred = 'lighting-color:mediumvioletred;';
  readonly midnightblue = 'lighting-color:midnightblue;';
  readonly mintcream = 'lighting-color:mintcream;';
  readonly mistyrose = 'lighting-color:mistyrose;';
  readonly moccasin = 'lighting-color:moccasin;';
  readonly navajowhite = 'lighting-color:navajowhite;';
  readonly navy = 'lighting-color:navy;';
  readonly oldlace = 'lighting-color:oldlace;';
  readonly olive = 'lighting-color:olive;';
  readonly olivedrab = 'lighting-color:olivedrab;';
  readonly orange = 'lighting-color:orange;';
  readonly orangered = 'lighting-color:orangered;';
  readonly orchid = 'lighting-color:orchid;';
  readonly palegoldenrod = 'lighting-color:palegoldenrod;';
  readonly palegreen = 'lighting-color:palegreen;';
  readonly paleturquoise = 'lighting-color:paleturquoise;';
  readonly palevioletred = 'lighting-color:palevioletred;';
  readonly papayawhip = 'lighting-color:papayawhip;';
  readonly peachpuff = 'lighting-color:peachpuff;';
  readonly peru = 'lighting-color:peru;';
  readonly pink = 'lighting-color:pink;';
  readonly plum = 'lighting-color:plum;';
  readonly powderblue = 'lighting-color:powderblue;';
  readonly purple = 'lighting-color:purple;';
  readonly rebeccapurple = 'lighting-color:rebeccapurple;';
  readonly red = 'lighting-color:red;';
  readonly revert = 'lighting-color:revert;';
  readonly revertLayer = 'lighting-color:revert-layer;';
  readonly rosybrown = 'lighting-color:rosybrown;';
  readonly royalblue = 'lighting-color:royalblue;';
  readonly saddlebrown = 'lighting-color:saddlebrown;';
  readonly salmon = 'lighting-color:salmon;';
  readonly sandybrown = 'lighting-color:sandybrown;';
  readonly seagreen = 'lighting-color:seagreen;';
  readonly seashell = 'lighting-color:seashell;';
  readonly sienna = 'lighting-color:sienna;';
  readonly silver = 'lighting-color:silver;';
  readonly skyblue = 'lighting-color:skyblue;';
  readonly slateblue = 'lighting-color:slateblue;';
  readonly slategray = 'lighting-color:slategray;';
  readonly slategrey = 'lighting-color:slategrey;';
  readonly snow = 'lighting-color:snow;';
  readonly springgreen = 'lighting-color:springgreen;';
  readonly steelblue = 'lighting-color:steelblue;';
  readonly tan = 'lighting-color:tan;';
  readonly teal = 'lighting-color:teal;';
  readonly thistle = 'lighting-color:thistle;';
  readonly tomato = 'lighting-color:tomato;';
  readonly transparent = 'lighting-color:transparent;';
  readonly turquoise = 'lighting-color:turquoise;';
  readonly unset = 'lighting-color:unset;';
  readonly violet = 'lighting-color:violet;';
  readonly wheat = 'lighting-color:wheat;';
  readonly white = 'lighting-color:white;';
  readonly whitesmoke = 'lighting-color:whitesmoke;';
  readonly yellow = 'lighting-color:yellow;';
  readonly yellowgreen = 'lighting-color:yellowgreen;';
  constructor() {
    super('lighting-color');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.LightingColor | CssString): string {
    return this.declaration(value);
  }
  /** RGB 通道与可选 alpha；字符串（含 bx 返回值）原样输出，不截断数值。 */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 数值色相用度数、饱和度和明度用百分数；字符串保留自己的单位。 */
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
  /** 原生 oklch() 通道；数值和 CSS 字符串直接输出。 */
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
  /** 原生 oklab() 通道；数值和 CSS 字符串直接输出。 */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/** CSS 属性 line-break；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
 */
export class LineBreakCss extends CssProperty {
  readonly anywhere = 'line-break:anywhere;';
  readonly auto = 'line-break:auto;';
  readonly inherit = 'line-break:inherit;';
  readonly initial = 'line-break:initial;';
  readonly loose = 'line-break:loose;';
  readonly normal = 'line-break:normal;';
  readonly revert = 'line-break:revert;';
  readonly revertLayer = 'line-break:revert-layer;';
  readonly strict = 'line-break:strict;';
  readonly unset = 'line-break:unset;';
  constructor() {
    super('line-break');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.LineBreak | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 line-clamp；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
 */
export class LineClampCss extends CssProperty {
  readonly inherit = 'line-clamp:inherit;';
  readonly initial = 'line-clamp:initial;';
  readonly none = 'line-clamp:none;';
  readonly revert = 'line-clamp:revert;';
  readonly revertLayer = 'line-clamp:revert-layer;';
  readonly unset = 'line-clamp:unset;';
  constructor() {
    super('line-clamp');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.LineClamp | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.LineClamp | CssString,
    ...others: (Property.LineClamp | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.LineClamp | CssString,
    ...others: (Property.LineClamp | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.LineClamp | CssString,
    preferred: Property.LineClamp | CssString,
    maximum: Property.LineClamp | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 line-height；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
 */
export class LineHeightCss extends LengthCssProperty {
  readonly inherit = 'line-height:inherit;';
  readonly initial = 'line-height:initial;';
  readonly normal = 'line-height:normal;';
  readonly revert = 'line-height:revert;';
  readonly revertLayer = 'line-height:revert-layer;';
  readonly unset = 'line-height:unset;';
  constructor() {
    super('line-height');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.LineHeight | CssString): string {
    return this.declaration(value);
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.LineHeight | CssString,
    ...others: (Property.LineHeight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.LineHeight | CssString,
    ...others: (Property.LineHeight | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.LineHeight | CssString,
    preferred: Property.LineHeight | CssString,
    maximum: Property.LineHeight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 line-height-step；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
 */
export class LineHeightStepCss extends LengthCssProperty {
  readonly inherit = 'line-height-step:inherit;';
  readonly initial = 'line-height-step:initial;';
  readonly revert = 'line-height-step:revert;';
  readonly revertLayer = 'line-height-step:revert-layer;';
  readonly unset = 'line-height-step:unset;';
  constructor() {
    super('line-height-step');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.LineHeightStep | CssString): string {
    return this.declaration(value);
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Property.LineHeightStep | CssString,
    ...others: (Property.LineHeightStep | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Property.LineHeightStep | CssString,
    ...others: (Property.LineHeightStep | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Property.LineHeightStep | CssString,
    preferred: Property.LineHeightStep | CssString,
    maximum: Property.LineHeightStep | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/** CSS 属性 list-style。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
 */
export class ListStyleCss extends CssProperty {
  readonly inherit = 'list-style:inherit;';
  readonly initial = 'list-style:initial;';
  readonly inside = 'list-style:inside;';
  readonly none = 'list-style:none;';
  readonly outside = 'list-style:outside;';
  readonly revert = 'list-style:revert;';
  readonly revertLayer = 'list-style:revert-layer;';
  readonly unset = 'list-style:unset;';
  constructor() {
    super('list-style');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ListStyle | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 list-style-image；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
 */
export class ListStyleImageCss extends CssProperty {
  readonly inherit = 'list-style-image:inherit;';
  readonly initial = 'list-style-image:initial;';
  readonly none = 'list-style-image:none;';
  readonly revert = 'list-style-image:revert;';
  readonly revertLayer = 'list-style-image:revert-layer;';
  readonly unset = 'list-style-image:unset;';
  constructor() {
    super('list-style-image');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ListStyleImage | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 list-style-position；初始值 outside。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
 */
export class ListStylePositionCss extends CssProperty {
  readonly inherit = 'list-style-position:inherit;';
  readonly initial = 'list-style-position:initial;';
  readonly inside = 'list-style-position:inside;';
  readonly outside = 'list-style-position:outside;';
  readonly revert = 'list-style-position:revert;';
  readonly revertLayer = 'list-style-position:revert-layer;';
  readonly unset = 'list-style-position:unset;';
  constructor() {
    super('list-style-position');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ListStylePosition | CssString): string {
    return this.declaration(value);
  }
}

/** CSS 属性 list-style-type；初始值 disc。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
 */
export class ListStyleTypeCss extends CssProperty {
  readonly inherit = 'list-style-type:inherit;';
  readonly initial = 'list-style-type:initial;';
  readonly none = 'list-style-type:none;';
  readonly revert = 'list-style-type:revert;';
  readonly revertLayer = 'list-style-type:revert-layer;';
  readonly unset = 'list-style-type:unset;';
  constructor() {
    super('list-style-type');
  }
  /** 原样生成声明；提供关键字补全，也允许自定义 CSS 字符串。 */
  raw(value: Property.ListStyleType | CssString): string {
    return this.declaration(value);
  }
}
