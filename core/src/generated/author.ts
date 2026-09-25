// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';

class CssProperty<T> {
  protected readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  raw(value: T | (string & {})): string {
    return `${this.name}:${value};`;
  }
}
class LengthCssProperty<T> extends CssProperty<T> {
  px(value: number): string {
    return `${this.name}:${value}px;`;
  }
}
// 系统关键字在模块装载时共享，主题用子类增加自己的成员。

const backgroundColorKeywords = {
  AccentColor: 'background-color:AccentColor;',
  AccentColorText: 'background-color:AccentColorText;',
  ActiveBorder: 'background-color:ActiveBorder;',
  ActiveCaption: 'background-color:ActiveCaption;',
  ActiveText: 'background-color:ActiveText;',
  AppWorkspace: 'background-color:AppWorkspace;',
  Background: 'background-color:Background;',
  ButtonBorder: 'background-color:ButtonBorder;',
  ButtonFace: 'background-color:ButtonFace;',
  ButtonHighlight: 'background-color:ButtonHighlight;',
  ButtonShadow: 'background-color:ButtonShadow;',
  ButtonText: 'background-color:ButtonText;',
  Canvas: 'background-color:Canvas;',
  CanvasText: 'background-color:CanvasText;',
  CaptionText: 'background-color:CaptionText;',
  Field: 'background-color:Field;',
  FieldText: 'background-color:FieldText;',
  GrayText: 'background-color:GrayText;',
  Highlight: 'background-color:Highlight;',
  HighlightText: 'background-color:HighlightText;',
  InactiveBorder: 'background-color:InactiveBorder;',
  InactiveCaption: 'background-color:InactiveCaption;',
  InactiveCaptionText: 'background-color:InactiveCaptionText;',
  InfoBackground: 'background-color:InfoBackground;',
  InfoText: 'background-color:InfoText;',
  LinkText: 'background-color:LinkText;',
  Mark: 'background-color:Mark;',
  MarkText: 'background-color:MarkText;',
  Menu: 'background-color:Menu;',
  MenuText: 'background-color:MenuText;',
  Scrollbar: 'background-color:Scrollbar;',
  SelectedItem: 'background-color:SelectedItem;',
  SelectedItemText: 'background-color:SelectedItemText;',
  ThreeDDarkShadow: 'background-color:ThreeDDarkShadow;',
  ThreeDFace: 'background-color:ThreeDFace;',
  ThreeDHighlight: 'background-color:ThreeDHighlight;',
  ThreeDLightShadow: 'background-color:ThreeDLightShadow;',
  ThreeDShadow: 'background-color:ThreeDShadow;',
  VisitedText: 'background-color:VisitedText;',
  Window: 'background-color:Window;',
  WindowFrame: 'background-color:WindowFrame;',
  WindowText: 'background-color:WindowText;',
  aliceblue: 'background-color:aliceblue;',
  antiquewhite: 'background-color:antiquewhite;',
  aqua: 'background-color:aqua;',
  aquamarine: 'background-color:aquamarine;',
  azure: 'background-color:azure;',
  beige: 'background-color:beige;',
  bisque: 'background-color:bisque;',
  black: 'background-color:black;',
  blanchedalmond: 'background-color:blanchedalmond;',
  blue: 'background-color:blue;',
  blueviolet: 'background-color:blueviolet;',
  brown: 'background-color:brown;',
  burlywood: 'background-color:burlywood;',
  cadetblue: 'background-color:cadetblue;',
  chartreuse: 'background-color:chartreuse;',
  chocolate: 'background-color:chocolate;',
  coral: 'background-color:coral;',
  cornflowerblue: 'background-color:cornflowerblue;',
  cornsilk: 'background-color:cornsilk;',
  crimson: 'background-color:crimson;',
  currentColor: 'background-color:currentColor;',
  cyan: 'background-color:cyan;',
  darkblue: 'background-color:darkblue;',
  darkcyan: 'background-color:darkcyan;',
  darkgoldenrod: 'background-color:darkgoldenrod;',
  darkgray: 'background-color:darkgray;',
  darkgreen: 'background-color:darkgreen;',
  darkgrey: 'background-color:darkgrey;',
  darkkhaki: 'background-color:darkkhaki;',
  darkmagenta: 'background-color:darkmagenta;',
  darkolivegreen: 'background-color:darkolivegreen;',
  darkorange: 'background-color:darkorange;',
  darkorchid: 'background-color:darkorchid;',
  darkred: 'background-color:darkred;',
  darksalmon: 'background-color:darksalmon;',
  darkseagreen: 'background-color:darkseagreen;',
  darkslateblue: 'background-color:darkslateblue;',
  darkslategray: 'background-color:darkslategray;',
  darkslategrey: 'background-color:darkslategrey;',
  darkturquoise: 'background-color:darkturquoise;',
  darkviolet: 'background-color:darkviolet;',
  deeppink: 'background-color:deeppink;',
  deepskyblue: 'background-color:deepskyblue;',
  dimgray: 'background-color:dimgray;',
  dimgrey: 'background-color:dimgrey;',
  dodgerblue: 'background-color:dodgerblue;',
  firebrick: 'background-color:firebrick;',
  floralwhite: 'background-color:floralwhite;',
  forestgreen: 'background-color:forestgreen;',
  fuchsia: 'background-color:fuchsia;',
  gainsboro: 'background-color:gainsboro;',
  ghostwhite: 'background-color:ghostwhite;',
  gold: 'background-color:gold;',
  goldenrod: 'background-color:goldenrod;',
  gray: 'background-color:gray;',
  green: 'background-color:green;',
  greenyellow: 'background-color:greenyellow;',
  grey: 'background-color:grey;',
  honeydew: 'background-color:honeydew;',
  hotpink: 'background-color:hotpink;',
  indianred: 'background-color:indianred;',
  indigo: 'background-color:indigo;',
  inherit: 'background-color:inherit;',
  initial: 'background-color:initial;',
  ivory: 'background-color:ivory;',
  khaki: 'background-color:khaki;',
  lavender: 'background-color:lavender;',
  lavenderblush: 'background-color:lavenderblush;',
  lawngreen: 'background-color:lawngreen;',
  lemonchiffon: 'background-color:lemonchiffon;',
  lightblue: 'background-color:lightblue;',
  lightcoral: 'background-color:lightcoral;',
  lightcyan: 'background-color:lightcyan;',
  lightgoldenrodyellow: 'background-color:lightgoldenrodyellow;',
  lightgray: 'background-color:lightgray;',
  lightgreen: 'background-color:lightgreen;',
  lightgrey: 'background-color:lightgrey;',
  lightpink: 'background-color:lightpink;',
  lightsalmon: 'background-color:lightsalmon;',
  lightseagreen: 'background-color:lightseagreen;',
  lightskyblue: 'background-color:lightskyblue;',
  lightslategray: 'background-color:lightslategray;',
  lightslategrey: 'background-color:lightslategrey;',
  lightsteelblue: 'background-color:lightsteelblue;',
  lightyellow: 'background-color:lightyellow;',
  lime: 'background-color:lime;',
  limegreen: 'background-color:limegreen;',
  linen: 'background-color:linen;',
  magenta: 'background-color:magenta;',
  maroon: 'background-color:maroon;',
  mediumaquamarine: 'background-color:mediumaquamarine;',
  mediumblue: 'background-color:mediumblue;',
  mediumorchid: 'background-color:mediumorchid;',
  mediumpurple: 'background-color:mediumpurple;',
  mediumseagreen: 'background-color:mediumseagreen;',
  mediumslateblue: 'background-color:mediumslateblue;',
  mediumspringgreen: 'background-color:mediumspringgreen;',
  mediumturquoise: 'background-color:mediumturquoise;',
  mediumvioletred: 'background-color:mediumvioletred;',
  midnightblue: 'background-color:midnightblue;',
  mintcream: 'background-color:mintcream;',
  mistyrose: 'background-color:mistyrose;',
  moccasin: 'background-color:moccasin;',
  navajowhite: 'background-color:navajowhite;',
  navy: 'background-color:navy;',
  oldlace: 'background-color:oldlace;',
  olive: 'background-color:olive;',
  olivedrab: 'background-color:olivedrab;',
  orange: 'background-color:orange;',
  orangered: 'background-color:orangered;',
  orchid: 'background-color:orchid;',
  palegoldenrod: 'background-color:palegoldenrod;',
  palegreen: 'background-color:palegreen;',
  paleturquoise: 'background-color:paleturquoise;',
  palevioletred: 'background-color:palevioletred;',
  papayawhip: 'background-color:papayawhip;',
  peachpuff: 'background-color:peachpuff;',
  peru: 'background-color:peru;',
  pink: 'background-color:pink;',
  plum: 'background-color:plum;',
  powderblue: 'background-color:powderblue;',
  purple: 'background-color:purple;',
  rebeccapurple: 'background-color:rebeccapurple;',
  red: 'background-color:red;',
  revert: 'background-color:revert;',
  revertLayer: 'background-color:revert-layer;',
  rosybrown: 'background-color:rosybrown;',
  royalblue: 'background-color:royalblue;',
  saddlebrown: 'background-color:saddlebrown;',
  salmon: 'background-color:salmon;',
  sandybrown: 'background-color:sandybrown;',
  seagreen: 'background-color:seagreen;',
  seashell: 'background-color:seashell;',
  sienna: 'background-color:sienna;',
  silver: 'background-color:silver;',
  skyblue: 'background-color:skyblue;',
  slateblue: 'background-color:slateblue;',
  slategray: 'background-color:slategray;',
  slategrey: 'background-color:slategrey;',
  snow: 'background-color:snow;',
  springgreen: 'background-color:springgreen;',
  steelblue: 'background-color:steelblue;',
  tan: 'background-color:tan;',
  teal: 'background-color:teal;',
  thistle: 'background-color:thistle;',
  tomato: 'background-color:tomato;',
  transparent: 'background-color:transparent;',
  turquoise: 'background-color:turquoise;',
  unset: 'background-color:unset;',
  violet: 'background-color:violet;',
  wheat: 'background-color:wheat;',
  white: 'background-color:white;',
  whitesmoke: 'background-color:whitesmoke;',
  yellow: 'background-color:yellow;',
  yellowgreen: 'background-color:yellowgreen;',
} as const;

type BackgroundColorCssKeywords = Readonly<typeof backgroundColorKeywords>;
export interface BackgroundColorCss extends BackgroundColorCssKeywords {}
/** 背景颜色（CSS background-color）；初始值 transparent。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
 */
export class BackgroundColorCss extends CssProperty<Property.BackgroundColor> {
  constructor() {
    super('background-color');
  }
}
Object.assign(BackgroundColorCss.prototype, backgroundColorKeywords);
Object.freeze(BackgroundColorCss.prototype);
const systemBackgroundColor = Object.freeze(new BackgroundColorCss());

const borderKeywords = {
  AccentColor: 'border:AccentColor;',
  AccentColorText: 'border:AccentColorText;',
  ActiveBorder: 'border:ActiveBorder;',
  ActiveCaption: 'border:ActiveCaption;',
  ActiveText: 'border:ActiveText;',
  AppWorkspace: 'border:AppWorkspace;',
  Background: 'border:Background;',
  ButtonBorder: 'border:ButtonBorder;',
  ButtonFace: 'border:ButtonFace;',
  ButtonHighlight: 'border:ButtonHighlight;',
  ButtonShadow: 'border:ButtonShadow;',
  ButtonText: 'border:ButtonText;',
  Canvas: 'border:Canvas;',
  CanvasText: 'border:CanvasText;',
  CaptionText: 'border:CaptionText;',
  Field: 'border:Field;',
  FieldText: 'border:FieldText;',
  GrayText: 'border:GrayText;',
  Highlight: 'border:Highlight;',
  HighlightText: 'border:HighlightText;',
  InactiveBorder: 'border:InactiveBorder;',
  InactiveCaption: 'border:InactiveCaption;',
  InactiveCaptionText: 'border:InactiveCaptionText;',
  InfoBackground: 'border:InfoBackground;',
  InfoText: 'border:InfoText;',
  LinkText: 'border:LinkText;',
  Mark: 'border:Mark;',
  MarkText: 'border:MarkText;',
  Menu: 'border:Menu;',
  MenuText: 'border:MenuText;',
  Scrollbar: 'border:Scrollbar;',
  SelectedItem: 'border:SelectedItem;',
  SelectedItemText: 'border:SelectedItemText;',
  ThreeDDarkShadow: 'border:ThreeDDarkShadow;',
  ThreeDFace: 'border:ThreeDFace;',
  ThreeDHighlight: 'border:ThreeDHighlight;',
  ThreeDLightShadow: 'border:ThreeDLightShadow;',
  ThreeDShadow: 'border:ThreeDShadow;',
  VisitedText: 'border:VisitedText;',
  Window: 'border:Window;',
  WindowFrame: 'border:WindowFrame;',
  WindowText: 'border:WindowText;',
  aliceblue: 'border:aliceblue;',
  antiquewhite: 'border:antiquewhite;',
  aqua: 'border:aqua;',
  aquamarine: 'border:aquamarine;',
  azure: 'border:azure;',
  beige: 'border:beige;',
  bisque: 'border:bisque;',
  black: 'border:black;',
  blanchedalmond: 'border:blanchedalmond;',
  blue: 'border:blue;',
  blueviolet: 'border:blueviolet;',
  brown: 'border:brown;',
  burlywood: 'border:burlywood;',
  cadetblue: 'border:cadetblue;',
  chartreuse: 'border:chartreuse;',
  chocolate: 'border:chocolate;',
  coral: 'border:coral;',
  cornflowerblue: 'border:cornflowerblue;',
  cornsilk: 'border:cornsilk;',
  crimson: 'border:crimson;',
  currentColor: 'border:currentColor;',
  cyan: 'border:cyan;',
  darkblue: 'border:darkblue;',
  darkcyan: 'border:darkcyan;',
  darkgoldenrod: 'border:darkgoldenrod;',
  darkgray: 'border:darkgray;',
  darkgreen: 'border:darkgreen;',
  darkgrey: 'border:darkgrey;',
  darkkhaki: 'border:darkkhaki;',
  darkmagenta: 'border:darkmagenta;',
  darkolivegreen: 'border:darkolivegreen;',
  darkorange: 'border:darkorange;',
  darkorchid: 'border:darkorchid;',
  darkred: 'border:darkred;',
  darksalmon: 'border:darksalmon;',
  darkseagreen: 'border:darkseagreen;',
  darkslateblue: 'border:darkslateblue;',
  darkslategray: 'border:darkslategray;',
  darkslategrey: 'border:darkslategrey;',
  darkturquoise: 'border:darkturquoise;',
  darkviolet: 'border:darkviolet;',
  dashed: 'border:dashed;',
  deeppink: 'border:deeppink;',
  deepskyblue: 'border:deepskyblue;',
  dimgray: 'border:dimgray;',
  dimgrey: 'border:dimgrey;',
  dodgerblue: 'border:dodgerblue;',
  dotted: 'border:dotted;',
  double: 'border:double;',
  firebrick: 'border:firebrick;',
  floralwhite: 'border:floralwhite;',
  forestgreen: 'border:forestgreen;',
  fuchsia: 'border:fuchsia;',
  gainsboro: 'border:gainsboro;',
  ghostwhite: 'border:ghostwhite;',
  gold: 'border:gold;',
  goldenrod: 'border:goldenrod;',
  gray: 'border:gray;',
  green: 'border:green;',
  greenyellow: 'border:greenyellow;',
  grey: 'border:grey;',
  groove: 'border:groove;',
  hidden: 'border:hidden;',
  honeydew: 'border:honeydew;',
  hotpink: 'border:hotpink;',
  indianred: 'border:indianred;',
  indigo: 'border:indigo;',
  inherit: 'border:inherit;',
  initial: 'border:initial;',
  inset: 'border:inset;',
  ivory: 'border:ivory;',
  khaki: 'border:khaki;',
  lavender: 'border:lavender;',
  lavenderblush: 'border:lavenderblush;',
  lawngreen: 'border:lawngreen;',
  lemonchiffon: 'border:lemonchiffon;',
  lightblue: 'border:lightblue;',
  lightcoral: 'border:lightcoral;',
  lightcyan: 'border:lightcyan;',
  lightgoldenrodyellow: 'border:lightgoldenrodyellow;',
  lightgray: 'border:lightgray;',
  lightgreen: 'border:lightgreen;',
  lightgrey: 'border:lightgrey;',
  lightpink: 'border:lightpink;',
  lightsalmon: 'border:lightsalmon;',
  lightseagreen: 'border:lightseagreen;',
  lightskyblue: 'border:lightskyblue;',
  lightslategray: 'border:lightslategray;',
  lightslategrey: 'border:lightslategrey;',
  lightsteelblue: 'border:lightsteelblue;',
  lightyellow: 'border:lightyellow;',
  lime: 'border:lime;',
  limegreen: 'border:limegreen;',
  linen: 'border:linen;',
  magenta: 'border:magenta;',
  maroon: 'border:maroon;',
  medium: 'border:medium;',
  mediumaquamarine: 'border:mediumaquamarine;',
  mediumblue: 'border:mediumblue;',
  mediumorchid: 'border:mediumorchid;',
  mediumpurple: 'border:mediumpurple;',
  mediumseagreen: 'border:mediumseagreen;',
  mediumslateblue: 'border:mediumslateblue;',
  mediumspringgreen: 'border:mediumspringgreen;',
  mediumturquoise: 'border:mediumturquoise;',
  mediumvioletred: 'border:mediumvioletred;',
  midnightblue: 'border:midnightblue;',
  mintcream: 'border:mintcream;',
  mistyrose: 'border:mistyrose;',
  moccasin: 'border:moccasin;',
  navajowhite: 'border:navajowhite;',
  navy: 'border:navy;',
  none: 'border:none;',
  oldlace: 'border:oldlace;',
  olive: 'border:olive;',
  olivedrab: 'border:olivedrab;',
  orange: 'border:orange;',
  orangered: 'border:orangered;',
  orchid: 'border:orchid;',
  outset: 'border:outset;',
  palegoldenrod: 'border:palegoldenrod;',
  palegreen: 'border:palegreen;',
  paleturquoise: 'border:paleturquoise;',
  palevioletred: 'border:palevioletred;',
  papayawhip: 'border:papayawhip;',
  peachpuff: 'border:peachpuff;',
  peru: 'border:peru;',
  pink: 'border:pink;',
  plum: 'border:plum;',
  powderblue: 'border:powderblue;',
  purple: 'border:purple;',
  rebeccapurple: 'border:rebeccapurple;',
  red: 'border:red;',
  revert: 'border:revert;',
  revertLayer: 'border:revert-layer;',
  ridge: 'border:ridge;',
  rosybrown: 'border:rosybrown;',
  royalblue: 'border:royalblue;',
  saddlebrown: 'border:saddlebrown;',
  salmon: 'border:salmon;',
  sandybrown: 'border:sandybrown;',
  seagreen: 'border:seagreen;',
  seashell: 'border:seashell;',
  sienna: 'border:sienna;',
  silver: 'border:silver;',
  skyblue: 'border:skyblue;',
  slateblue: 'border:slateblue;',
  slategray: 'border:slategray;',
  slategrey: 'border:slategrey;',
  snow: 'border:snow;',
  solid: 'border:solid;',
  springgreen: 'border:springgreen;',
  steelblue: 'border:steelblue;',
  tan: 'border:tan;',
  teal: 'border:teal;',
  thick: 'border:thick;',
  thin: 'border:thin;',
  thistle: 'border:thistle;',
  tomato: 'border:tomato;',
  transparent: 'border:transparent;',
  turquoise: 'border:turquoise;',
  unset: 'border:unset;',
  violet: 'border:violet;',
  wheat: 'border:wheat;',
  white: 'border:white;',
  whitesmoke: 'border:whitesmoke;',
  yellow: 'border:yellow;',
  yellowgreen: 'border:yellowgreen;',
} as const;

type BorderCssKeywords = Readonly<typeof borderKeywords>;
export interface BorderCss extends BorderCssKeywords {}
/** 边框简写（CSS border）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
 */
export class BorderCss extends LengthCssProperty<Property.Border> {
  constructor() {
    super('border');
  }
}
Object.assign(BorderCss.prototype, borderKeywords);
Object.freeze(BorderCss.prototype);
const systemBorder = Object.freeze(new BorderCss());

const colorKeywords = {
  AccentColor: 'color:AccentColor;',
  AccentColorText: 'color:AccentColorText;',
  ActiveBorder: 'color:ActiveBorder;',
  ActiveCaption: 'color:ActiveCaption;',
  ActiveText: 'color:ActiveText;',
  AppWorkspace: 'color:AppWorkspace;',
  Background: 'color:Background;',
  ButtonBorder: 'color:ButtonBorder;',
  ButtonFace: 'color:ButtonFace;',
  ButtonHighlight: 'color:ButtonHighlight;',
  ButtonShadow: 'color:ButtonShadow;',
  ButtonText: 'color:ButtonText;',
  Canvas: 'color:Canvas;',
  CanvasText: 'color:CanvasText;',
  CaptionText: 'color:CaptionText;',
  Field: 'color:Field;',
  FieldText: 'color:FieldText;',
  GrayText: 'color:GrayText;',
  Highlight: 'color:Highlight;',
  HighlightText: 'color:HighlightText;',
  InactiveBorder: 'color:InactiveBorder;',
  InactiveCaption: 'color:InactiveCaption;',
  InactiveCaptionText: 'color:InactiveCaptionText;',
  InfoBackground: 'color:InfoBackground;',
  InfoText: 'color:InfoText;',
  LinkText: 'color:LinkText;',
  Mark: 'color:Mark;',
  MarkText: 'color:MarkText;',
  Menu: 'color:Menu;',
  MenuText: 'color:MenuText;',
  Scrollbar: 'color:Scrollbar;',
  SelectedItem: 'color:SelectedItem;',
  SelectedItemText: 'color:SelectedItemText;',
  ThreeDDarkShadow: 'color:ThreeDDarkShadow;',
  ThreeDFace: 'color:ThreeDFace;',
  ThreeDHighlight: 'color:ThreeDHighlight;',
  ThreeDLightShadow: 'color:ThreeDLightShadow;',
  ThreeDShadow: 'color:ThreeDShadow;',
  VisitedText: 'color:VisitedText;',
  Window: 'color:Window;',
  WindowFrame: 'color:WindowFrame;',
  WindowText: 'color:WindowText;',
  aliceblue: 'color:aliceblue;',
  antiquewhite: 'color:antiquewhite;',
  aqua: 'color:aqua;',
  aquamarine: 'color:aquamarine;',
  azure: 'color:azure;',
  beige: 'color:beige;',
  bisque: 'color:bisque;',
  black: 'color:black;',
  blanchedalmond: 'color:blanchedalmond;',
  blue: 'color:blue;',
  blueviolet: 'color:blueviolet;',
  brown: 'color:brown;',
  burlywood: 'color:burlywood;',
  cadetblue: 'color:cadetblue;',
  chartreuse: 'color:chartreuse;',
  chocolate: 'color:chocolate;',
  coral: 'color:coral;',
  cornflowerblue: 'color:cornflowerblue;',
  cornsilk: 'color:cornsilk;',
  crimson: 'color:crimson;',
  currentColor: 'color:currentColor;',
  cyan: 'color:cyan;',
  darkblue: 'color:darkblue;',
  darkcyan: 'color:darkcyan;',
  darkgoldenrod: 'color:darkgoldenrod;',
  darkgray: 'color:darkgray;',
  darkgreen: 'color:darkgreen;',
  darkgrey: 'color:darkgrey;',
  darkkhaki: 'color:darkkhaki;',
  darkmagenta: 'color:darkmagenta;',
  darkolivegreen: 'color:darkolivegreen;',
  darkorange: 'color:darkorange;',
  darkorchid: 'color:darkorchid;',
  darkred: 'color:darkred;',
  darksalmon: 'color:darksalmon;',
  darkseagreen: 'color:darkseagreen;',
  darkslateblue: 'color:darkslateblue;',
  darkslategray: 'color:darkslategray;',
  darkslategrey: 'color:darkslategrey;',
  darkturquoise: 'color:darkturquoise;',
  darkviolet: 'color:darkviolet;',
  deeppink: 'color:deeppink;',
  deepskyblue: 'color:deepskyblue;',
  dimgray: 'color:dimgray;',
  dimgrey: 'color:dimgrey;',
  dodgerblue: 'color:dodgerblue;',
  firebrick: 'color:firebrick;',
  floralwhite: 'color:floralwhite;',
  forestgreen: 'color:forestgreen;',
  fuchsia: 'color:fuchsia;',
  gainsboro: 'color:gainsboro;',
  ghostwhite: 'color:ghostwhite;',
  gold: 'color:gold;',
  goldenrod: 'color:goldenrod;',
  gray: 'color:gray;',
  green: 'color:green;',
  greenyellow: 'color:greenyellow;',
  grey: 'color:grey;',
  honeydew: 'color:honeydew;',
  hotpink: 'color:hotpink;',
  indianred: 'color:indianred;',
  indigo: 'color:indigo;',
  inherit: 'color:inherit;',
  initial: 'color:initial;',
  ivory: 'color:ivory;',
  khaki: 'color:khaki;',
  lavender: 'color:lavender;',
  lavenderblush: 'color:lavenderblush;',
  lawngreen: 'color:lawngreen;',
  lemonchiffon: 'color:lemonchiffon;',
  lightblue: 'color:lightblue;',
  lightcoral: 'color:lightcoral;',
  lightcyan: 'color:lightcyan;',
  lightgoldenrodyellow: 'color:lightgoldenrodyellow;',
  lightgray: 'color:lightgray;',
  lightgreen: 'color:lightgreen;',
  lightgrey: 'color:lightgrey;',
  lightpink: 'color:lightpink;',
  lightsalmon: 'color:lightsalmon;',
  lightseagreen: 'color:lightseagreen;',
  lightskyblue: 'color:lightskyblue;',
  lightslategray: 'color:lightslategray;',
  lightslategrey: 'color:lightslategrey;',
  lightsteelblue: 'color:lightsteelblue;',
  lightyellow: 'color:lightyellow;',
  lime: 'color:lime;',
  limegreen: 'color:limegreen;',
  linen: 'color:linen;',
  magenta: 'color:magenta;',
  maroon: 'color:maroon;',
  mediumaquamarine: 'color:mediumaquamarine;',
  mediumblue: 'color:mediumblue;',
  mediumorchid: 'color:mediumorchid;',
  mediumpurple: 'color:mediumpurple;',
  mediumseagreen: 'color:mediumseagreen;',
  mediumslateblue: 'color:mediumslateblue;',
  mediumspringgreen: 'color:mediumspringgreen;',
  mediumturquoise: 'color:mediumturquoise;',
  mediumvioletred: 'color:mediumvioletred;',
  midnightblue: 'color:midnightblue;',
  mintcream: 'color:mintcream;',
  mistyrose: 'color:mistyrose;',
  moccasin: 'color:moccasin;',
  navajowhite: 'color:navajowhite;',
  navy: 'color:navy;',
  oldlace: 'color:oldlace;',
  olive: 'color:olive;',
  olivedrab: 'color:olivedrab;',
  orange: 'color:orange;',
  orangered: 'color:orangered;',
  orchid: 'color:orchid;',
  palegoldenrod: 'color:palegoldenrod;',
  palegreen: 'color:palegreen;',
  paleturquoise: 'color:paleturquoise;',
  palevioletred: 'color:palevioletred;',
  papayawhip: 'color:papayawhip;',
  peachpuff: 'color:peachpuff;',
  peru: 'color:peru;',
  pink: 'color:pink;',
  plum: 'color:plum;',
  powderblue: 'color:powderblue;',
  purple: 'color:purple;',
  rebeccapurple: 'color:rebeccapurple;',
  red: 'color:red;',
  revert: 'color:revert;',
  revertLayer: 'color:revert-layer;',
  rosybrown: 'color:rosybrown;',
  royalblue: 'color:royalblue;',
  saddlebrown: 'color:saddlebrown;',
  salmon: 'color:salmon;',
  sandybrown: 'color:sandybrown;',
  seagreen: 'color:seagreen;',
  seashell: 'color:seashell;',
  sienna: 'color:sienna;',
  silver: 'color:silver;',
  skyblue: 'color:skyblue;',
  slateblue: 'color:slateblue;',
  slategray: 'color:slategray;',
  slategrey: 'color:slategrey;',
  snow: 'color:snow;',
  springgreen: 'color:springgreen;',
  steelblue: 'color:steelblue;',
  tan: 'color:tan;',
  teal: 'color:teal;',
  thistle: 'color:thistle;',
  tomato: 'color:tomato;',
  transparent: 'color:transparent;',
  turquoise: 'color:turquoise;',
  unset: 'color:unset;',
  violet: 'color:violet;',
  wheat: 'color:wheat;',
  white: 'color:white;',
  whitesmoke: 'color:whitesmoke;',
  yellow: 'color:yellow;',
  yellowgreen: 'color:yellowgreen;',
} as const;

type ColorCssKeywords = Readonly<typeof colorKeywords>;
export interface ColorCss extends ColorCssKeywords {}
/** 文本前景色（CSS color）；初始值 canvastext。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
 */
export class ColorCss extends CssProperty<Property.Color> {
  constructor() {
    super('color');
  }
}
Object.assign(ColorCss.prototype, colorKeywords);
Object.freeze(ColorCss.prototype);
const systemColor = Object.freeze(new ColorCss());

const displayKeywords = {
  block: 'display:block;',
  contents: 'display:contents;',
  flex: 'display:flex;',
  flow: 'display:flow;',
  flowRoot: 'display:flow-root;',
  grid: 'display:grid;',
  inherit: 'display:inherit;',
  initial: 'display:initial;',
  inline: 'display:inline;',
  inlineBlock: 'display:inline-block;',
  inlineFlex: 'display:inline-flex;',
  inlineGrid: 'display:inline-grid;',
  inlineListItem: 'display:inline-list-item;',
  inlineTable: 'display:inline-table;',
  listItem: 'display:list-item;',
  none: 'display:none;',
  revert: 'display:revert;',
  revertLayer: 'display:revert-layer;',
  ruby: 'display:ruby;',
  rubyBase: 'display:ruby-base;',
  rubyBaseContainer: 'display:ruby-base-container;',
  rubyText: 'display:ruby-text;',
  rubyTextContainer: 'display:ruby-text-container;',
  runIn: 'display:run-in;',
  table: 'display:table;',
  tableCaption: 'display:table-caption;',
  tableCell: 'display:table-cell;',
  tableColumn: 'display:table-column;',
  tableColumnGroup: 'display:table-column-group;',
  tableFooterGroup: 'display:table-footer-group;',
  tableHeaderGroup: 'display:table-header-group;',
  tableRow: 'display:table-row;',
  tableRowGroup: 'display:table-row-group;',
  unset: 'display:unset;',
} as const;

type DisplayCssKeywords = Readonly<typeof displayKeywords>;
export interface DisplayCss extends DisplayCssKeywords {}
/** 显示类型（CSS display）；初始值 inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
 */
export class DisplayCss extends CssProperty<Property.Display> {
  constructor() {
    super('display');
  }
}
Object.assign(DisplayCss.prototype, displayKeywords);
Object.freeze(DisplayCss.prototype);
const systemDisplay = Object.freeze(new DisplayCss());

const gapKeywords = {
  inherit: 'gap:inherit;',
  initial: 'gap:initial;',
  normal: 'gap:normal;',
  revert: 'gap:revert;',
  revertLayer: 'gap:revert-layer;',
  unset: 'gap:unset;',
} as const;

type GapCssKeywords = Readonly<typeof gapKeywords>;
export interface GapCss extends GapCssKeywords {}
/** 行列间距（CSS gap）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
 */
export class GapCss extends LengthCssProperty<Property.Gap> {
  constructor() {
    super('gap');
  }
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
}
Object.assign(GapCss.prototype, gapKeywords);
Object.freeze(GapCss.prototype);
const systemGap = Object.freeze(new GapCss());

const heightKeywords = {
  auto: 'height:auto;',
  fitContent: 'height:fit-content;',
  inherit: 'height:inherit;',
  initial: 'height:initial;',
  maxContent: 'height:max-content;',
  minContent: 'height:min-content;',
  revert: 'height:revert;',
  revertLayer: 'height:revert-layer;',
  unset: 'height:unset;',
} as const;

type HeightCssKeywords = Readonly<typeof heightKeywords>;
export interface HeightCss extends HeightCssKeywords {}
/** 高度（CSS height）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
 */
export class HeightCss extends LengthCssProperty<Property.Height> {
  constructor() {
    super('height');
  }
}
Object.assign(HeightCss.prototype, heightKeywords);
Object.freeze(HeightCss.prototype);
const systemHeight = Object.freeze(new HeightCss());

const marginKeywords = {
  auto: 'margin:auto;',
  inherit: 'margin:inherit;',
  initial: 'margin:initial;',
  revert: 'margin:revert;',
  revertLayer: 'margin:revert-layer;',
  unset: 'margin:unset;',
} as const;

type MarginCssKeywords = Readonly<typeof marginKeywords>;
export interface MarginCss extends MarginCssKeywords {}
/** 外边距（CSS margin）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
 */
export class MarginCss extends LengthCssProperty<Property.Margin> {
  constructor() {
    super('margin');
  }
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
}
Object.assign(MarginCss.prototype, marginKeywords);
Object.freeze(MarginCss.prototype);
const systemMargin = Object.freeze(new MarginCss());

const opacityKeywords = {
  inherit: 'opacity:inherit;',
  initial: 'opacity:initial;',
  revert: 'opacity:revert;',
  revertLayer: 'opacity:revert-layer;',
  unset: 'opacity:unset;',
} as const;

type OpacityCssKeywords = Readonly<typeof opacityKeywords>;
export interface OpacityCss extends OpacityCssKeywords {}
/** 不透明度（CSS opacity）；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
 */
export class OpacityCss extends CssProperty<Property.Opacity> {
  constructor() {
    super('opacity');
  }
}
Object.assign(OpacityCss.prototype, opacityKeywords);
Object.freeze(OpacityCss.prototype);
const systemOpacity = Object.freeze(new OpacityCss());

const paddingKeywords = {
  inherit: 'padding:inherit;',
  initial: 'padding:initial;',
  revert: 'padding:revert;',
  revertLayer: 'padding:revert-layer;',
  unset: 'padding:unset;',
} as const;

type PaddingCssKeywords = Readonly<typeof paddingKeywords>;
export interface PaddingCss extends PaddingCssKeywords {}
/** 内边距（CSS padding）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
 */
export class PaddingCss extends LengthCssProperty<Property.Padding> {
  constructor() {
    super('padding');
  }
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
}
Object.assign(PaddingCss.prototype, paddingKeywords);
Object.freeze(PaddingCss.prototype);
const systemPadding = Object.freeze(new PaddingCss());

const widthKeywords = {
  auto: 'width:auto;',
  fitContent: 'width:fit-content;',
  inherit: 'width:inherit;',
  initial: 'width:initial;',
  intrinsic: 'width:intrinsic;',
  maxContent: 'width:max-content;',
  minContent: 'width:min-content;',
  minIntrinsic: 'width:min-intrinsic;',
  revert: 'width:revert;',
  revertLayer: 'width:revert-layer;',
  unset: 'width:unset;',
} as const;

type WidthCssKeywords = Readonly<typeof widthKeywords>;
export interface WidthCss extends WidthCssKeywords {}
/** 宽度（CSS width）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
 */
export class WidthCss extends LengthCssProperty<Property.Width> {
  constructor() {
    super('width');
  }
}
Object.assign(WidthCss.prototype, widthKeywords);
Object.freeze(WidthCss.prototype);
const systemWidth = Object.freeze(new WidthCss());

/** 系统属性链；项目可通过类继承扩展关键字。 */
export class Css {
  readonly backgroundColor = systemBackgroundColor;
  readonly border = systemBorder;
  readonly color = systemColor;
  readonly display = systemDisplay;
  readonly gap = systemGap;
  readonly height = systemHeight;
  readonly margin = systemMargin;
  readonly opacity = systemOpacity;
  readonly padding = systemPadding;
  readonly width = systemWidth;
}
