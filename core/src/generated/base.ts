// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。

export class CssProperty<T> {
  protected readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  raw(value: T | (string & {})): string {
    return `${this.name}:${value};`;
  }
}
export class LengthCssProperty<T> extends CssProperty<T> {
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value: number): string {
    return `${this.name}:${value}px;`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value: number): string {
    return `${this.name}:${value}cm;`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value: number): string {
    return `${this.name}:${value}mm;`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value: number): string {
    return `${this.name}:${value}q;`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value: number): string {
    return `${this.name}:${value}in;`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value: number): string {
    return `${this.name}:${value}pt;`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value: number): string {
    return `${this.name}:${value}pc;`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value: number): string {
    return `${this.name}:${value}em;`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value: number): string {
    return `${this.name}:${value}rem;`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value: number): string {
    return `${this.name}:${value}ex;`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value: number): string {
    return `${this.name}:${value}rex;`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value: number): string {
    return `${this.name}:${value}ch;`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value: number): string {
    return `${this.name}:${value}rch;`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value: number): string {
    return `${this.name}:${value}cap;`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value: number): string {
    return `${this.name}:${value}rcap;`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value: number): string {
    return `${this.name}:${value}ic;`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value: number): string {
    return `${this.name}:${value}ric;`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value: number): string {
    return `${this.name}:${value}lh;`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value: number): string {
    return `${this.name}:${value}rlh;`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value: number): string {
    return `${this.name}:${value}vw;`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value: number): string {
    return `${this.name}:${value}vh;`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value: number): string {
    return `${this.name}:${value}vi;`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value: number): string {
    return `${this.name}:${value}vb;`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value: number): string {
    return `${this.name}:${value}vmin;`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value: number): string {
    return `${this.name}:${value}vmax;`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value: number): string {
    return `${this.name}:${value}svw;`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value: number): string {
    return `${this.name}:${value}svh;`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value: number): string {
    return `${this.name}:${value}svi;`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value: number): string {
    return `${this.name}:${value}svb;`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value: number): string {
    return `${this.name}:${value}svmin;`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value: number): string {
    return `${this.name}:${value}svmax;`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value: number): string {
    return `${this.name}:${value}lvw;`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value: number): string {
    return `${this.name}:${value}lvh;`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value: number): string {
    return `${this.name}:${value}lvi;`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value: number): string {
    return `${this.name}:${value}lvb;`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value: number): string {
    return `${this.name}:${value}lvmin;`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value: number): string {
    return `${this.name}:${value}lvmax;`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value: number): string {
    return `${this.name}:${value}dvw;`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value: number): string {
    return `${this.name}:${value}dvh;`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value: number): string {
    return `${this.name}:${value}dvi;`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value: number): string {
    return `${this.name}:${value}dvb;`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value: number): string {
    return `${this.name}:${value}dvmin;`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value: number): string {
    return `${this.name}:${value}dvmax;`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value: number): string {
    return `${this.name}:${value}cqw;`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value: number): string {
    return `${this.name}:${value}cqh;`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value: number): string {
    return `${this.name}:${value}cqi;`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value: number): string {
    return `${this.name}:${value}cqb;`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value: number): string {
    return `${this.name}:${value}cqmin;`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value: number): string {
    return `${this.name}:${value}cqmax;`;
  }
}
export const unitSuffix: Readonly<Record<string, string>> = {
  px: 'px',
  cm: 'cm',
  mm: 'mm',
  q: 'q',
  in: 'in',
  pt: 'pt',
  pc: 'pc',
  em: 'em',
  rem: 'rem',
  ex: 'ex',
  rex: 'rex',
  ch: 'ch',
  rch: 'rch',
  cap: 'cap',
  rcap: 'rcap',
  ic: 'ic',
  ric: 'ric',
  lh: 'lh',
  rlh: 'rlh',
  vw: 'vw',
  vh: 'vh',
  vi: 'vi',
  vb: 'vb',
  vmin: 'vmin',
  vmax: 'vmax',
  svw: 'svw',
  svh: 'svh',
  svi: 'svi',
  svb: 'svb',
  svmin: 'svmin',
  svmax: 'svmax',
  lvw: 'lvw',
  lvh: 'lvh',
  lvi: 'lvi',
  lvb: 'lvb',
  lvmin: 'lvmin',
  lvmax: 'lvmax',
  dvw: 'dvw',
  dvh: 'dvh',
  dvi: 'dvi',
  dvb: 'dvb',
  dvmin: 'dvmin',
  dvmax: 'dvmax',
  cqw: 'cqw',
  cqh: 'cqh',
  cqi: 'cqi',
  cqb: 'cqb',
  cqmin: 'cqmin',
  cqmax: 'cqmax',
  percent: '%',
  ms: 'ms',
  s: 's',
  deg: 'deg',
  grad: 'grad',
  rad: 'rad',
  turn: 'turn',
};
