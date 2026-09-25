// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

function captionSideKeywords() {
  return {
    bottom: 'caption-side:bottom;',
    inherit: 'caption-side:inherit;',
    initial: 'caption-side:initial;',
    revert: 'caption-side:revert;',
    revertLayer: 'caption-side:revert-layer;',
    top: 'caption-side:top;',
    unset: 'caption-side:unset;',
  } as const;
}

type CaptionSideCssKeywords = Readonly<ReturnType<typeof captionSideKeywords>>;
export interface CaptionSideCss extends CaptionSideCssKeywords {}
/** CSS 属性 caption-side；初始值 top。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
 */
export class CaptionSideCss extends CssProperty<Property.CaptionSide> {
  constructor() {
    super('caption-side');
    initializeCaptionSideCss();
  }
}
let captionSideReady = false;
function initializeCaptionSideCss(): void {
  if (captionSideReady) return;
  Object.assign(CaptionSideCss.prototype, captionSideKeywords());
  Object.freeze(CaptionSideCss.prototype);
  captionSideReady = true;
}

function caretKeywords() {
  return {
    AccentColor: 'caret:AccentColor;',
    AccentColorText: 'caret:AccentColorText;',
    ActiveBorder: 'caret:ActiveBorder;',
    ActiveCaption: 'caret:ActiveCaption;',
    ActiveText: 'caret:ActiveText;',
    AppWorkspace: 'caret:AppWorkspace;',
    Background: 'caret:Background;',
    ButtonBorder: 'caret:ButtonBorder;',
    ButtonFace: 'caret:ButtonFace;',
    ButtonHighlight: 'caret:ButtonHighlight;',
    ButtonShadow: 'caret:ButtonShadow;',
    ButtonText: 'caret:ButtonText;',
    Canvas: 'caret:Canvas;',
    CanvasText: 'caret:CanvasText;',
    CaptionText: 'caret:CaptionText;',
    Field: 'caret:Field;',
    FieldText: 'caret:FieldText;',
    GrayText: 'caret:GrayText;',
    Highlight: 'caret:Highlight;',
    HighlightText: 'caret:HighlightText;',
    InactiveBorder: 'caret:InactiveBorder;',
    InactiveCaption: 'caret:InactiveCaption;',
    InactiveCaptionText: 'caret:InactiveCaptionText;',
    InfoBackground: 'caret:InfoBackground;',
    InfoText: 'caret:InfoText;',
    LinkText: 'caret:LinkText;',
    Mark: 'caret:Mark;',
    MarkText: 'caret:MarkText;',
    Menu: 'caret:Menu;',
    MenuText: 'caret:MenuText;',
    Scrollbar: 'caret:Scrollbar;',
    SelectedItem: 'caret:SelectedItem;',
    SelectedItemText: 'caret:SelectedItemText;',
    ThreeDDarkShadow: 'caret:ThreeDDarkShadow;',
    ThreeDFace: 'caret:ThreeDFace;',
    ThreeDHighlight: 'caret:ThreeDHighlight;',
    ThreeDLightShadow: 'caret:ThreeDLightShadow;',
    ThreeDShadow: 'caret:ThreeDShadow;',
    VisitedText: 'caret:VisitedText;',
    Window: 'caret:Window;',
    WindowFrame: 'caret:WindowFrame;',
    WindowText: 'caret:WindowText;',
    aliceblue: 'caret:aliceblue;',
    antiquewhite: 'caret:antiquewhite;',
    aqua: 'caret:aqua;',
    aquamarine: 'caret:aquamarine;',
    auto: 'caret:auto;',
    azure: 'caret:azure;',
    bar: 'caret:bar;',
    beige: 'caret:beige;',
    bisque: 'caret:bisque;',
    black: 'caret:black;',
    blanchedalmond: 'caret:blanchedalmond;',
    block: 'caret:block;',
    blue: 'caret:blue;',
    blueviolet: 'caret:blueviolet;',
    brown: 'caret:brown;',
    burlywood: 'caret:burlywood;',
    cadetblue: 'caret:cadetblue;',
    chartreuse: 'caret:chartreuse;',
    chocolate: 'caret:chocolate;',
    coral: 'caret:coral;',
    cornflowerblue: 'caret:cornflowerblue;',
    cornsilk: 'caret:cornsilk;',
    crimson: 'caret:crimson;',
    currentColor: 'caret:currentColor;',
    cyan: 'caret:cyan;',
    darkblue: 'caret:darkblue;',
    darkcyan: 'caret:darkcyan;',
    darkgoldenrod: 'caret:darkgoldenrod;',
    darkgray: 'caret:darkgray;',
    darkgreen: 'caret:darkgreen;',
    darkgrey: 'caret:darkgrey;',
    darkkhaki: 'caret:darkkhaki;',
    darkmagenta: 'caret:darkmagenta;',
    darkolivegreen: 'caret:darkolivegreen;',
    darkorange: 'caret:darkorange;',
    darkorchid: 'caret:darkorchid;',
    darkred: 'caret:darkred;',
    darksalmon: 'caret:darksalmon;',
    darkseagreen: 'caret:darkseagreen;',
    darkslateblue: 'caret:darkslateblue;',
    darkslategray: 'caret:darkslategray;',
    darkslategrey: 'caret:darkslategrey;',
    darkturquoise: 'caret:darkturquoise;',
    darkviolet: 'caret:darkviolet;',
    deeppink: 'caret:deeppink;',
    deepskyblue: 'caret:deepskyblue;',
    dimgray: 'caret:dimgray;',
    dimgrey: 'caret:dimgrey;',
    dodgerblue: 'caret:dodgerblue;',
    firebrick: 'caret:firebrick;',
    floralwhite: 'caret:floralwhite;',
    forestgreen: 'caret:forestgreen;',
    fuchsia: 'caret:fuchsia;',
    gainsboro: 'caret:gainsboro;',
    ghostwhite: 'caret:ghostwhite;',
    gold: 'caret:gold;',
    goldenrod: 'caret:goldenrod;',
    gray: 'caret:gray;',
    green: 'caret:green;',
    greenyellow: 'caret:greenyellow;',
    grey: 'caret:grey;',
    honeydew: 'caret:honeydew;',
    hotpink: 'caret:hotpink;',
    indianred: 'caret:indianred;',
    indigo: 'caret:indigo;',
    inherit: 'caret:inherit;',
    initial: 'caret:initial;',
    ivory: 'caret:ivory;',
    khaki: 'caret:khaki;',
    lavender: 'caret:lavender;',
    lavenderblush: 'caret:lavenderblush;',
    lawngreen: 'caret:lawngreen;',
    lemonchiffon: 'caret:lemonchiffon;',
    lightblue: 'caret:lightblue;',
    lightcoral: 'caret:lightcoral;',
    lightcyan: 'caret:lightcyan;',
    lightgoldenrodyellow: 'caret:lightgoldenrodyellow;',
    lightgray: 'caret:lightgray;',
    lightgreen: 'caret:lightgreen;',
    lightgrey: 'caret:lightgrey;',
    lightpink: 'caret:lightpink;',
    lightsalmon: 'caret:lightsalmon;',
    lightseagreen: 'caret:lightseagreen;',
    lightskyblue: 'caret:lightskyblue;',
    lightslategray: 'caret:lightslategray;',
    lightslategrey: 'caret:lightslategrey;',
    lightsteelblue: 'caret:lightsteelblue;',
    lightyellow: 'caret:lightyellow;',
    lime: 'caret:lime;',
    limegreen: 'caret:limegreen;',
    linen: 'caret:linen;',
    magenta: 'caret:magenta;',
    maroon: 'caret:maroon;',
    mediumaquamarine: 'caret:mediumaquamarine;',
    mediumblue: 'caret:mediumblue;',
    mediumorchid: 'caret:mediumorchid;',
    mediumpurple: 'caret:mediumpurple;',
    mediumseagreen: 'caret:mediumseagreen;',
    mediumslateblue: 'caret:mediumslateblue;',
    mediumspringgreen: 'caret:mediumspringgreen;',
    mediumturquoise: 'caret:mediumturquoise;',
    mediumvioletred: 'caret:mediumvioletred;',
    midnightblue: 'caret:midnightblue;',
    mintcream: 'caret:mintcream;',
    mistyrose: 'caret:mistyrose;',
    moccasin: 'caret:moccasin;',
    navajowhite: 'caret:navajowhite;',
    navy: 'caret:navy;',
    oldlace: 'caret:oldlace;',
    olive: 'caret:olive;',
    olivedrab: 'caret:olivedrab;',
    orange: 'caret:orange;',
    orangered: 'caret:orangered;',
    orchid: 'caret:orchid;',
    palegoldenrod: 'caret:palegoldenrod;',
    palegreen: 'caret:palegreen;',
    paleturquoise: 'caret:paleturquoise;',
    palevioletred: 'caret:palevioletred;',
    papayawhip: 'caret:papayawhip;',
    peachpuff: 'caret:peachpuff;',
    peru: 'caret:peru;',
    pink: 'caret:pink;',
    plum: 'caret:plum;',
    powderblue: 'caret:powderblue;',
    purple: 'caret:purple;',
    rebeccapurple: 'caret:rebeccapurple;',
    red: 'caret:red;',
    revert: 'caret:revert;',
    revertLayer: 'caret:revert-layer;',
    rosybrown: 'caret:rosybrown;',
    royalblue: 'caret:royalblue;',
    saddlebrown: 'caret:saddlebrown;',
    salmon: 'caret:salmon;',
    sandybrown: 'caret:sandybrown;',
    seagreen: 'caret:seagreen;',
    seashell: 'caret:seashell;',
    sienna: 'caret:sienna;',
    silver: 'caret:silver;',
    skyblue: 'caret:skyblue;',
    slateblue: 'caret:slateblue;',
    slategray: 'caret:slategray;',
    slategrey: 'caret:slategrey;',
    snow: 'caret:snow;',
    springgreen: 'caret:springgreen;',
    steelblue: 'caret:steelblue;',
    tan: 'caret:tan;',
    teal: 'caret:teal;',
    thistle: 'caret:thistle;',
    tomato: 'caret:tomato;',
    transparent: 'caret:transparent;',
    turquoise: 'caret:turquoise;',
    underscore: 'caret:underscore;',
    unset: 'caret:unset;',
    violet: 'caret:violet;',
    wheat: 'caret:wheat;',
    white: 'caret:white;',
    whitesmoke: 'caret:whitesmoke;',
    yellow: 'caret:yellow;',
    yellowgreen: 'caret:yellowgreen;',
  } as const;
}

type CaretCssKeywords = Readonly<ReturnType<typeof caretKeywords>>;
export interface CaretCss extends CaretCssKeywords {}
/** CSS 属性 caret。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
 */
export class CaretCss extends CssProperty<Property.Caret> {
  constructor() {
    super('caret');
    initializeCaretCss();
  }
}
let caretReady = false;
function initializeCaretCss(): void {
  if (caretReady) return;
  Object.assign(CaretCss.prototype, caretKeywords());
  Object.freeze(CaretCss.prototype);
  caretReady = true;
}

function caretColorKeywords() {
  return {
    AccentColor: 'caret-color:AccentColor;',
    AccentColorText: 'caret-color:AccentColorText;',
    ActiveBorder: 'caret-color:ActiveBorder;',
    ActiveCaption: 'caret-color:ActiveCaption;',
    ActiveText: 'caret-color:ActiveText;',
    AppWorkspace: 'caret-color:AppWorkspace;',
    Background: 'caret-color:Background;',
    ButtonBorder: 'caret-color:ButtonBorder;',
    ButtonFace: 'caret-color:ButtonFace;',
    ButtonHighlight: 'caret-color:ButtonHighlight;',
    ButtonShadow: 'caret-color:ButtonShadow;',
    ButtonText: 'caret-color:ButtonText;',
    Canvas: 'caret-color:Canvas;',
    CanvasText: 'caret-color:CanvasText;',
    CaptionText: 'caret-color:CaptionText;',
    Field: 'caret-color:Field;',
    FieldText: 'caret-color:FieldText;',
    GrayText: 'caret-color:GrayText;',
    Highlight: 'caret-color:Highlight;',
    HighlightText: 'caret-color:HighlightText;',
    InactiveBorder: 'caret-color:InactiveBorder;',
    InactiveCaption: 'caret-color:InactiveCaption;',
    InactiveCaptionText: 'caret-color:InactiveCaptionText;',
    InfoBackground: 'caret-color:InfoBackground;',
    InfoText: 'caret-color:InfoText;',
    LinkText: 'caret-color:LinkText;',
    Mark: 'caret-color:Mark;',
    MarkText: 'caret-color:MarkText;',
    Menu: 'caret-color:Menu;',
    MenuText: 'caret-color:MenuText;',
    Scrollbar: 'caret-color:Scrollbar;',
    SelectedItem: 'caret-color:SelectedItem;',
    SelectedItemText: 'caret-color:SelectedItemText;',
    ThreeDDarkShadow: 'caret-color:ThreeDDarkShadow;',
    ThreeDFace: 'caret-color:ThreeDFace;',
    ThreeDHighlight: 'caret-color:ThreeDHighlight;',
    ThreeDLightShadow: 'caret-color:ThreeDLightShadow;',
    ThreeDShadow: 'caret-color:ThreeDShadow;',
    VisitedText: 'caret-color:VisitedText;',
    Window: 'caret-color:Window;',
    WindowFrame: 'caret-color:WindowFrame;',
    WindowText: 'caret-color:WindowText;',
    aliceblue: 'caret-color:aliceblue;',
    antiquewhite: 'caret-color:antiquewhite;',
    aqua: 'caret-color:aqua;',
    aquamarine: 'caret-color:aquamarine;',
    auto: 'caret-color:auto;',
    azure: 'caret-color:azure;',
    beige: 'caret-color:beige;',
    bisque: 'caret-color:bisque;',
    black: 'caret-color:black;',
    blanchedalmond: 'caret-color:blanchedalmond;',
    blue: 'caret-color:blue;',
    blueviolet: 'caret-color:blueviolet;',
    brown: 'caret-color:brown;',
    burlywood: 'caret-color:burlywood;',
    cadetblue: 'caret-color:cadetblue;',
    chartreuse: 'caret-color:chartreuse;',
    chocolate: 'caret-color:chocolate;',
    coral: 'caret-color:coral;',
    cornflowerblue: 'caret-color:cornflowerblue;',
    cornsilk: 'caret-color:cornsilk;',
    crimson: 'caret-color:crimson;',
    currentColor: 'caret-color:currentColor;',
    cyan: 'caret-color:cyan;',
    darkblue: 'caret-color:darkblue;',
    darkcyan: 'caret-color:darkcyan;',
    darkgoldenrod: 'caret-color:darkgoldenrod;',
    darkgray: 'caret-color:darkgray;',
    darkgreen: 'caret-color:darkgreen;',
    darkgrey: 'caret-color:darkgrey;',
    darkkhaki: 'caret-color:darkkhaki;',
    darkmagenta: 'caret-color:darkmagenta;',
    darkolivegreen: 'caret-color:darkolivegreen;',
    darkorange: 'caret-color:darkorange;',
    darkorchid: 'caret-color:darkorchid;',
    darkred: 'caret-color:darkred;',
    darksalmon: 'caret-color:darksalmon;',
    darkseagreen: 'caret-color:darkseagreen;',
    darkslateblue: 'caret-color:darkslateblue;',
    darkslategray: 'caret-color:darkslategray;',
    darkslategrey: 'caret-color:darkslategrey;',
    darkturquoise: 'caret-color:darkturquoise;',
    darkviolet: 'caret-color:darkviolet;',
    deeppink: 'caret-color:deeppink;',
    deepskyblue: 'caret-color:deepskyblue;',
    dimgray: 'caret-color:dimgray;',
    dimgrey: 'caret-color:dimgrey;',
    dodgerblue: 'caret-color:dodgerblue;',
    firebrick: 'caret-color:firebrick;',
    floralwhite: 'caret-color:floralwhite;',
    forestgreen: 'caret-color:forestgreen;',
    fuchsia: 'caret-color:fuchsia;',
    gainsboro: 'caret-color:gainsboro;',
    ghostwhite: 'caret-color:ghostwhite;',
    gold: 'caret-color:gold;',
    goldenrod: 'caret-color:goldenrod;',
    gray: 'caret-color:gray;',
    green: 'caret-color:green;',
    greenyellow: 'caret-color:greenyellow;',
    grey: 'caret-color:grey;',
    honeydew: 'caret-color:honeydew;',
    hotpink: 'caret-color:hotpink;',
    indianred: 'caret-color:indianred;',
    indigo: 'caret-color:indigo;',
    inherit: 'caret-color:inherit;',
    initial: 'caret-color:initial;',
    ivory: 'caret-color:ivory;',
    khaki: 'caret-color:khaki;',
    lavender: 'caret-color:lavender;',
    lavenderblush: 'caret-color:lavenderblush;',
    lawngreen: 'caret-color:lawngreen;',
    lemonchiffon: 'caret-color:lemonchiffon;',
    lightblue: 'caret-color:lightblue;',
    lightcoral: 'caret-color:lightcoral;',
    lightcyan: 'caret-color:lightcyan;',
    lightgoldenrodyellow: 'caret-color:lightgoldenrodyellow;',
    lightgray: 'caret-color:lightgray;',
    lightgreen: 'caret-color:lightgreen;',
    lightgrey: 'caret-color:lightgrey;',
    lightpink: 'caret-color:lightpink;',
    lightsalmon: 'caret-color:lightsalmon;',
    lightseagreen: 'caret-color:lightseagreen;',
    lightskyblue: 'caret-color:lightskyblue;',
    lightslategray: 'caret-color:lightslategray;',
    lightslategrey: 'caret-color:lightslategrey;',
    lightsteelblue: 'caret-color:lightsteelblue;',
    lightyellow: 'caret-color:lightyellow;',
    lime: 'caret-color:lime;',
    limegreen: 'caret-color:limegreen;',
    linen: 'caret-color:linen;',
    magenta: 'caret-color:magenta;',
    maroon: 'caret-color:maroon;',
    mediumaquamarine: 'caret-color:mediumaquamarine;',
    mediumblue: 'caret-color:mediumblue;',
    mediumorchid: 'caret-color:mediumorchid;',
    mediumpurple: 'caret-color:mediumpurple;',
    mediumseagreen: 'caret-color:mediumseagreen;',
    mediumslateblue: 'caret-color:mediumslateblue;',
    mediumspringgreen: 'caret-color:mediumspringgreen;',
    mediumturquoise: 'caret-color:mediumturquoise;',
    mediumvioletred: 'caret-color:mediumvioletred;',
    midnightblue: 'caret-color:midnightblue;',
    mintcream: 'caret-color:mintcream;',
    mistyrose: 'caret-color:mistyrose;',
    moccasin: 'caret-color:moccasin;',
    navajowhite: 'caret-color:navajowhite;',
    navy: 'caret-color:navy;',
    oldlace: 'caret-color:oldlace;',
    olive: 'caret-color:olive;',
    olivedrab: 'caret-color:olivedrab;',
    orange: 'caret-color:orange;',
    orangered: 'caret-color:orangered;',
    orchid: 'caret-color:orchid;',
    palegoldenrod: 'caret-color:palegoldenrod;',
    palegreen: 'caret-color:palegreen;',
    paleturquoise: 'caret-color:paleturquoise;',
    palevioletred: 'caret-color:palevioletred;',
    papayawhip: 'caret-color:papayawhip;',
    peachpuff: 'caret-color:peachpuff;',
    peru: 'caret-color:peru;',
    pink: 'caret-color:pink;',
    plum: 'caret-color:plum;',
    powderblue: 'caret-color:powderblue;',
    purple: 'caret-color:purple;',
    rebeccapurple: 'caret-color:rebeccapurple;',
    red: 'caret-color:red;',
    revert: 'caret-color:revert;',
    revertLayer: 'caret-color:revert-layer;',
    rosybrown: 'caret-color:rosybrown;',
    royalblue: 'caret-color:royalblue;',
    saddlebrown: 'caret-color:saddlebrown;',
    salmon: 'caret-color:salmon;',
    sandybrown: 'caret-color:sandybrown;',
    seagreen: 'caret-color:seagreen;',
    seashell: 'caret-color:seashell;',
    sienna: 'caret-color:sienna;',
    silver: 'caret-color:silver;',
    skyblue: 'caret-color:skyblue;',
    slateblue: 'caret-color:slateblue;',
    slategray: 'caret-color:slategray;',
    slategrey: 'caret-color:slategrey;',
    snow: 'caret-color:snow;',
    springgreen: 'caret-color:springgreen;',
    steelblue: 'caret-color:steelblue;',
    tan: 'caret-color:tan;',
    teal: 'caret-color:teal;',
    thistle: 'caret-color:thistle;',
    tomato: 'caret-color:tomato;',
    transparent: 'caret-color:transparent;',
    turquoise: 'caret-color:turquoise;',
    unset: 'caret-color:unset;',
    violet: 'caret-color:violet;',
    wheat: 'caret-color:wheat;',
    white: 'caret-color:white;',
    whitesmoke: 'caret-color:whitesmoke;',
    yellow: 'caret-color:yellow;',
    yellowgreen: 'caret-color:yellowgreen;',
  } as const;
}

type CaretColorCssKeywords = Readonly<ReturnType<typeof caretColorKeywords>>;
export interface CaretColorCss extends CaretColorCssKeywords {}
/** CSS 属性 caret-color；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
 */
export class CaretColorCss extends CssProperty<Property.CaretColor> {
  constructor() {
    super('caret-color');
    initializeCaretColorCss();
  }
}
let caretColorReady = false;
function initializeCaretColorCss(): void {
  if (caretColorReady) return;
  Object.assign(CaretColorCss.prototype, caretColorKeywords());
  Object.freeze(CaretColorCss.prototype);
  caretColorReady = true;
}

function caretShapeKeywords() {
  return {
    auto: 'caret-shape:auto;',
    bar: 'caret-shape:bar;',
    block: 'caret-shape:block;',
    inherit: 'caret-shape:inherit;',
    initial: 'caret-shape:initial;',
    revert: 'caret-shape:revert;',
    revertLayer: 'caret-shape:revert-layer;',
    underscore: 'caret-shape:underscore;',
    unset: 'caret-shape:unset;',
  } as const;
}

type CaretShapeCssKeywords = Readonly<ReturnType<typeof caretShapeKeywords>>;
export interface CaretShapeCss extends CaretShapeCssKeywords {}
/** CSS 属性 caret-shape；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
 */
export class CaretShapeCss extends CssProperty<Property.CaretShape> {
  constructor() {
    super('caret-shape');
    initializeCaretShapeCss();
  }
}
let caretShapeReady = false;
function initializeCaretShapeCss(): void {
  if (caretShapeReady) return;
  Object.assign(CaretShapeCss.prototype, caretShapeKeywords());
  Object.freeze(CaretShapeCss.prototype);
  caretShapeReady = true;
}

function clearKeywords() {
  return {
    both: 'clear:both;',
    inherit: 'clear:inherit;',
    initial: 'clear:initial;',
    inlineEnd: 'clear:inline-end;',
    inlineStart: 'clear:inline-start;',
    left: 'clear:left;',
    none: 'clear:none;',
    revert: 'clear:revert;',
    revertLayer: 'clear:revert-layer;',
    right: 'clear:right;',
    unset: 'clear:unset;',
  } as const;
}

type ClearCssKeywords = Readonly<ReturnType<typeof clearKeywords>>;
export interface ClearCss extends ClearCssKeywords {}
/** CSS 属性 clear；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
 */
export class ClearCss extends CssProperty<Property.Clear> {
  constructor() {
    super('clear');
    initializeClearCss();
  }
}
let clearReady = false;
function initializeClearCss(): void {
  if (clearReady) return;
  Object.assign(ClearCss.prototype, clearKeywords());
  Object.freeze(ClearCss.prototype);
  clearReady = true;
}

function clipKeywords() {
  return {
    auto: 'clip:auto;',
    inherit: 'clip:inherit;',
    initial: 'clip:initial;',
    revert: 'clip:revert;',
    revertLayer: 'clip:revert-layer;',
    unset: 'clip:unset;',
  } as const;
}

type ClipCssKeywords = Readonly<ReturnType<typeof clipKeywords>>;
export interface ClipCss extends ClipCssKeywords {}
/** CSS 属性 clip。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
 */
export class ClipCss extends CssProperty<Property.Clip> {
  constructor() {
    super('clip');
    initializeClipCss();
  }
}
let clipReady = false;
function initializeClipCss(): void {
  if (clipReady) return;
  Object.assign(ClipCss.prototype, clipKeywords());
  Object.freeze(ClipCss.prototype);
  clipReady = true;
}

function clipPathKeywords() {
  return {
    borderBox: 'clip-path:border-box;',
    contentBox: 'clip-path:content-box;',
    fillBox: 'clip-path:fill-box;',
    inherit: 'clip-path:inherit;',
    initial: 'clip-path:initial;',
    marginBox: 'clip-path:margin-box;',
    none: 'clip-path:none;',
    paddingBox: 'clip-path:padding-box;',
    revert: 'clip-path:revert;',
    revertLayer: 'clip-path:revert-layer;',
    strokeBox: 'clip-path:stroke-box;',
    unset: 'clip-path:unset;',
    viewBox: 'clip-path:view-box;',
  } as const;
}

type ClipPathCssKeywords = Readonly<ReturnType<typeof clipPathKeywords>>;
export interface ClipPathCss extends ClipPathCssKeywords {}
/** CSS 属性 clip-path；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
 */
export class ClipPathCss extends CssProperty<Property.ClipPath> {
  constructor() {
    super('clip-path');
    initializeClipPathCss();
  }
}
let clipPathReady = false;
function initializeClipPathCss(): void {
  if (clipPathReady) return;
  Object.assign(ClipPathCss.prototype, clipPathKeywords());
  Object.freeze(ClipPathCss.prototype);
  clipPathReady = true;
}

function clipRuleKeywords() {
  return {
    evenodd: 'clip-rule:evenodd;',
    inherit: 'clip-rule:inherit;',
    initial: 'clip-rule:initial;',
    nonzero: 'clip-rule:nonzero;',
    revert: 'clip-rule:revert;',
    revertLayer: 'clip-rule:revert-layer;',
    unset: 'clip-rule:unset;',
  } as const;
}

type ClipRuleCssKeywords = Readonly<ReturnType<typeof clipRuleKeywords>>;
export interface ClipRuleCss extends ClipRuleCssKeywords {}
/** CSS 属性 clip-rule；初始值 nonzero。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
 */
export class ClipRuleCss extends CssProperty<Property.ClipRule> {
  constructor() {
    super('clip-rule');
    initializeClipRuleCss();
  }
}
let clipRuleReady = false;
function initializeClipRuleCss(): void {
  if (clipRuleReady) return;
  Object.assign(ClipRuleCss.prototype, clipRuleKeywords());
  Object.freeze(ClipRuleCss.prototype);
  clipRuleReady = true;
}

function colorKeywords() {
  return {
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
}

type ColorCssKeywords = Readonly<ReturnType<typeof colorKeywords>>;
export interface ColorCss extends ColorCssKeywords {}
/** 文本前景色（CSS color）；初始值 canvastext。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
 */
export class ColorCss extends CssProperty<Property.Color> {
  constructor() {
    super('color');
    initializeColorCss();
  }
}
let colorReady = false;
function initializeColorCss(): void {
  if (colorReady) return;
  Object.assign(ColorCss.prototype, colorKeywords());
  Object.freeze(ColorCss.prototype);
  colorReady = true;
}

function colorAdjustKeywords() {
  return {
    economy: 'color-adjust:economy;',
    exact: 'color-adjust:exact;',
    inherit: 'color-adjust:inherit;',
    initial: 'color-adjust:initial;',
    revert: 'color-adjust:revert;',
    revertLayer: 'color-adjust:revert-layer;',
    unset: 'color-adjust:unset;',
  } as const;
}

type ColorAdjustCssKeywords = Readonly<ReturnType<typeof colorAdjustKeywords>>;
export interface ColorAdjustCss extends ColorAdjustCssKeywords {}
/** CSS 属性 color-adjust；初始值 economy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class ColorAdjustCss extends CssProperty<Property.PrintColorAdjust> {
  constructor() {
    super('color-adjust');
    initializeColorAdjustCss();
  }
}
let colorAdjustReady = false;
function initializeColorAdjustCss(): void {
  if (colorAdjustReady) return;
  Object.assign(ColorAdjustCss.prototype, colorAdjustKeywords());
  Object.freeze(ColorAdjustCss.prototype);
  colorAdjustReady = true;
}

function colorInterpolationKeywords() {
  return {
    auto: 'color-interpolation:auto;',
    inherit: 'color-interpolation:inherit;',
    initial: 'color-interpolation:initial;',
    linearRGB: 'color-interpolation:linearRGB;',
    revert: 'color-interpolation:revert;',
    revertLayer: 'color-interpolation:revert-layer;',
    sRGB: 'color-interpolation:sRGB;',
    unset: 'color-interpolation:unset;',
  } as const;
}

type ColorInterpolationCssKeywords = Readonly<ReturnType<typeof colorInterpolationKeywords>>;
export interface ColorInterpolationCss extends ColorInterpolationCssKeywords {}
/** CSS 属性 color-interpolation。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
 */
export class ColorInterpolationCss extends CssProperty<Property.ColorInterpolation> {
  constructor() {
    super('color-interpolation');
    initializeColorInterpolationCss();
  }
}
let colorInterpolationReady = false;
function initializeColorInterpolationCss(): void {
  if (colorInterpolationReady) return;
  Object.assign(ColorInterpolationCss.prototype, colorInterpolationKeywords());
  Object.freeze(ColorInterpolationCss.prototype);
  colorInterpolationReady = true;
}

function colorInterpolationFiltersKeywords() {
  return {
    auto: 'color-interpolation-filters:auto;',
    inherit: 'color-interpolation-filters:inherit;',
    initial: 'color-interpolation-filters:initial;',
    linearRGB: 'color-interpolation-filters:linearRGB;',
    revert: 'color-interpolation-filters:revert;',
    revertLayer: 'color-interpolation-filters:revert-layer;',
    sRGB: 'color-interpolation-filters:sRGB;',
    unset: 'color-interpolation-filters:unset;',
  } as const;
}

type ColorInterpolationFiltersCssKeywords = Readonly<
  ReturnType<typeof colorInterpolationFiltersKeywords>
>;
export interface ColorInterpolationFiltersCss extends ColorInterpolationFiltersCssKeywords {}
/** CSS 属性 color-interpolation-filters；初始值 linearRGB。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
 */
export class ColorInterpolationFiltersCss extends CssProperty<Property.ColorInterpolationFilters> {
  constructor() {
    super('color-interpolation-filters');
    initializeColorInterpolationFiltersCss();
  }
}
let colorInterpolationFiltersReady = false;
function initializeColorInterpolationFiltersCss(): void {
  if (colorInterpolationFiltersReady) return;
  Object.assign(ColorInterpolationFiltersCss.prototype, colorInterpolationFiltersKeywords());
  Object.freeze(ColorInterpolationFiltersCss.prototype);
  colorInterpolationFiltersReady = true;
}

function colorRenderingKeywords() {
  return {
    auto: 'color-rendering:auto;',
    inherit: 'color-rendering:inherit;',
    initial: 'color-rendering:initial;',
    optimizeQuality: 'color-rendering:optimizeQuality;',
    optimizeSpeed: 'color-rendering:optimizeSpeed;',
    revert: 'color-rendering:revert;',
    revertLayer: 'color-rendering:revert-layer;',
    unset: 'color-rendering:unset;',
  } as const;
}

type ColorRenderingCssKeywords = Readonly<ReturnType<typeof colorRenderingKeywords>>;
export interface ColorRenderingCss extends ColorRenderingCssKeywords {}
/** CSS 属性 color-rendering。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
 */
export class ColorRenderingCss extends CssProperty<Property.ColorRendering> {
  constructor() {
    super('color-rendering');
    initializeColorRenderingCss();
  }
}
let colorRenderingReady = false;
function initializeColorRenderingCss(): void {
  if (colorRenderingReady) return;
  Object.assign(ColorRenderingCss.prototype, colorRenderingKeywords());
  Object.freeze(ColorRenderingCss.prototype);
  colorRenderingReady = true;
}

function colorSchemeKeywords() {
  return {
    dark: 'color-scheme:dark;',
    inherit: 'color-scheme:inherit;',
    initial: 'color-scheme:initial;',
    light: 'color-scheme:light;',
    normal: 'color-scheme:normal;',
    revert: 'color-scheme:revert;',
    revertLayer: 'color-scheme:revert-layer;',
    unset: 'color-scheme:unset;',
  } as const;
}

type ColorSchemeCssKeywords = Readonly<ReturnType<typeof colorSchemeKeywords>>;
export interface ColorSchemeCss extends ColorSchemeCssKeywords {}
/** CSS 属性 color-scheme；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
 */
export class ColorSchemeCss extends CssProperty<Property.ColorScheme> {
  constructor() {
    super('color-scheme');
    initializeColorSchemeCss();
  }
}
let colorSchemeReady = false;
function initializeColorSchemeCss(): void {
  if (colorSchemeReady) return;
  Object.assign(ColorSchemeCss.prototype, colorSchemeKeywords());
  Object.freeze(ColorSchemeCss.prototype);
  colorSchemeReady = true;
}

function columnCountKeywords() {
  return {
    auto: 'column-count:auto;',
    inherit: 'column-count:inherit;',
    initial: 'column-count:initial;',
    revert: 'column-count:revert;',
    revertLayer: 'column-count:revert-layer;',
    unset: 'column-count:unset;',
  } as const;
}

type ColumnCountCssKeywords = Readonly<ReturnType<typeof columnCountKeywords>>;
export interface ColumnCountCss extends ColumnCountCssKeywords {}
/** CSS 属性 column-count；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
 */
export class ColumnCountCss extends CssProperty<Property.ColumnCount> {
  constructor() {
    super('column-count');
    initializeColumnCountCss();
  }
}
let columnCountReady = false;
function initializeColumnCountCss(): void {
  if (columnCountReady) return;
  Object.assign(ColumnCountCss.prototype, columnCountKeywords());
  Object.freeze(ColumnCountCss.prototype);
  columnCountReady = true;
}

function columnFillKeywords() {
  return {
    auto: 'column-fill:auto;',
    balance: 'column-fill:balance;',
    inherit: 'column-fill:inherit;',
    initial: 'column-fill:initial;',
    revert: 'column-fill:revert;',
    revertLayer: 'column-fill:revert-layer;',
    unset: 'column-fill:unset;',
  } as const;
}

type ColumnFillCssKeywords = Readonly<ReturnType<typeof columnFillKeywords>>;
export interface ColumnFillCss extends ColumnFillCssKeywords {}
/** CSS 属性 column-fill；初始值 balance。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
 */
export class ColumnFillCss extends CssProperty<Property.ColumnFill> {
  constructor() {
    super('column-fill');
    initializeColumnFillCss();
  }
}
let columnFillReady = false;
function initializeColumnFillCss(): void {
  if (columnFillReady) return;
  Object.assign(ColumnFillCss.prototype, columnFillKeywords());
  Object.freeze(ColumnFillCss.prototype);
  columnFillReady = true;
}

function columnGapKeywords() {
  return {
    inherit: 'column-gap:inherit;',
    initial: 'column-gap:initial;',
    normal: 'column-gap:normal;',
    revert: 'column-gap:revert;',
    revertLayer: 'column-gap:revert-layer;',
    unset: 'column-gap:unset;',
  } as const;
}

type ColumnGapCssKeywords = Readonly<ReturnType<typeof columnGapKeywords>>;
export interface ColumnGapCss extends ColumnGapCssKeywords {}
/** CSS 属性 column-gap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
 */
export class ColumnGapCss extends LengthCssProperty<Property.ColumnGap> {
  constructor() {
    super('column-gap');
    initializeColumnGapCss();
  }
}
let columnGapReady = false;
function initializeColumnGapCss(): void {
  if (columnGapReady) return;
  Object.assign(ColumnGapCss.prototype, columnGapKeywords());
  Object.freeze(ColumnGapCss.prototype);
  columnGapReady = true;
}

function columnRuleKeywords() {
  return {
    AccentColor: 'column-rule:AccentColor;',
    AccentColorText: 'column-rule:AccentColorText;',
    ActiveBorder: 'column-rule:ActiveBorder;',
    ActiveCaption: 'column-rule:ActiveCaption;',
    ActiveText: 'column-rule:ActiveText;',
    AppWorkspace: 'column-rule:AppWorkspace;',
    Background: 'column-rule:Background;',
    ButtonBorder: 'column-rule:ButtonBorder;',
    ButtonFace: 'column-rule:ButtonFace;',
    ButtonHighlight: 'column-rule:ButtonHighlight;',
    ButtonShadow: 'column-rule:ButtonShadow;',
    ButtonText: 'column-rule:ButtonText;',
    Canvas: 'column-rule:Canvas;',
    CanvasText: 'column-rule:CanvasText;',
    CaptionText: 'column-rule:CaptionText;',
    Field: 'column-rule:Field;',
    FieldText: 'column-rule:FieldText;',
    GrayText: 'column-rule:GrayText;',
    Highlight: 'column-rule:Highlight;',
    HighlightText: 'column-rule:HighlightText;',
    InactiveBorder: 'column-rule:InactiveBorder;',
    InactiveCaption: 'column-rule:InactiveCaption;',
    InactiveCaptionText: 'column-rule:InactiveCaptionText;',
    InfoBackground: 'column-rule:InfoBackground;',
    InfoText: 'column-rule:InfoText;',
    LinkText: 'column-rule:LinkText;',
    Mark: 'column-rule:Mark;',
    MarkText: 'column-rule:MarkText;',
    Menu: 'column-rule:Menu;',
    MenuText: 'column-rule:MenuText;',
    Scrollbar: 'column-rule:Scrollbar;',
    SelectedItem: 'column-rule:SelectedItem;',
    SelectedItemText: 'column-rule:SelectedItemText;',
    ThreeDDarkShadow: 'column-rule:ThreeDDarkShadow;',
    ThreeDFace: 'column-rule:ThreeDFace;',
    ThreeDHighlight: 'column-rule:ThreeDHighlight;',
    ThreeDLightShadow: 'column-rule:ThreeDLightShadow;',
    ThreeDShadow: 'column-rule:ThreeDShadow;',
    VisitedText: 'column-rule:VisitedText;',
    Window: 'column-rule:Window;',
    WindowFrame: 'column-rule:WindowFrame;',
    WindowText: 'column-rule:WindowText;',
    aliceblue: 'column-rule:aliceblue;',
    antiquewhite: 'column-rule:antiquewhite;',
    aqua: 'column-rule:aqua;',
    aquamarine: 'column-rule:aquamarine;',
    azure: 'column-rule:azure;',
    beige: 'column-rule:beige;',
    bisque: 'column-rule:bisque;',
    black: 'column-rule:black;',
    blanchedalmond: 'column-rule:blanchedalmond;',
    blue: 'column-rule:blue;',
    blueviolet: 'column-rule:blueviolet;',
    brown: 'column-rule:brown;',
    burlywood: 'column-rule:burlywood;',
    cadetblue: 'column-rule:cadetblue;',
    chartreuse: 'column-rule:chartreuse;',
    chocolate: 'column-rule:chocolate;',
    coral: 'column-rule:coral;',
    cornflowerblue: 'column-rule:cornflowerblue;',
    cornsilk: 'column-rule:cornsilk;',
    crimson: 'column-rule:crimson;',
    currentColor: 'column-rule:currentColor;',
    cyan: 'column-rule:cyan;',
    darkblue: 'column-rule:darkblue;',
    darkcyan: 'column-rule:darkcyan;',
    darkgoldenrod: 'column-rule:darkgoldenrod;',
    darkgray: 'column-rule:darkgray;',
    darkgreen: 'column-rule:darkgreen;',
    darkgrey: 'column-rule:darkgrey;',
    darkkhaki: 'column-rule:darkkhaki;',
    darkmagenta: 'column-rule:darkmagenta;',
    darkolivegreen: 'column-rule:darkolivegreen;',
    darkorange: 'column-rule:darkorange;',
    darkorchid: 'column-rule:darkorchid;',
    darkred: 'column-rule:darkred;',
    darksalmon: 'column-rule:darksalmon;',
    darkseagreen: 'column-rule:darkseagreen;',
    darkslateblue: 'column-rule:darkslateblue;',
    darkslategray: 'column-rule:darkslategray;',
    darkslategrey: 'column-rule:darkslategrey;',
    darkturquoise: 'column-rule:darkturquoise;',
    darkviolet: 'column-rule:darkviolet;',
    dashed: 'column-rule:dashed;',
    deeppink: 'column-rule:deeppink;',
    deepskyblue: 'column-rule:deepskyblue;',
    dimgray: 'column-rule:dimgray;',
    dimgrey: 'column-rule:dimgrey;',
    dodgerblue: 'column-rule:dodgerblue;',
    dotted: 'column-rule:dotted;',
    double: 'column-rule:double;',
    firebrick: 'column-rule:firebrick;',
    floralwhite: 'column-rule:floralwhite;',
    forestgreen: 'column-rule:forestgreen;',
    fuchsia: 'column-rule:fuchsia;',
    gainsboro: 'column-rule:gainsboro;',
    ghostwhite: 'column-rule:ghostwhite;',
    gold: 'column-rule:gold;',
    goldenrod: 'column-rule:goldenrod;',
    gray: 'column-rule:gray;',
    green: 'column-rule:green;',
    greenyellow: 'column-rule:greenyellow;',
    grey: 'column-rule:grey;',
    groove: 'column-rule:groove;',
    hidden: 'column-rule:hidden;',
    honeydew: 'column-rule:honeydew;',
    hotpink: 'column-rule:hotpink;',
    indianred: 'column-rule:indianred;',
    indigo: 'column-rule:indigo;',
    inherit: 'column-rule:inherit;',
    initial: 'column-rule:initial;',
    inset: 'column-rule:inset;',
    ivory: 'column-rule:ivory;',
    khaki: 'column-rule:khaki;',
    lavender: 'column-rule:lavender;',
    lavenderblush: 'column-rule:lavenderblush;',
    lawngreen: 'column-rule:lawngreen;',
    lemonchiffon: 'column-rule:lemonchiffon;',
    lightblue: 'column-rule:lightblue;',
    lightcoral: 'column-rule:lightcoral;',
    lightcyan: 'column-rule:lightcyan;',
    lightgoldenrodyellow: 'column-rule:lightgoldenrodyellow;',
    lightgray: 'column-rule:lightgray;',
    lightgreen: 'column-rule:lightgreen;',
    lightgrey: 'column-rule:lightgrey;',
    lightpink: 'column-rule:lightpink;',
    lightsalmon: 'column-rule:lightsalmon;',
    lightseagreen: 'column-rule:lightseagreen;',
    lightskyblue: 'column-rule:lightskyblue;',
    lightslategray: 'column-rule:lightslategray;',
    lightslategrey: 'column-rule:lightslategrey;',
    lightsteelblue: 'column-rule:lightsteelblue;',
    lightyellow: 'column-rule:lightyellow;',
    lime: 'column-rule:lime;',
    limegreen: 'column-rule:limegreen;',
    linen: 'column-rule:linen;',
    magenta: 'column-rule:magenta;',
    maroon: 'column-rule:maroon;',
    medium: 'column-rule:medium;',
    mediumaquamarine: 'column-rule:mediumaquamarine;',
    mediumblue: 'column-rule:mediumblue;',
    mediumorchid: 'column-rule:mediumorchid;',
    mediumpurple: 'column-rule:mediumpurple;',
    mediumseagreen: 'column-rule:mediumseagreen;',
    mediumslateblue: 'column-rule:mediumslateblue;',
    mediumspringgreen: 'column-rule:mediumspringgreen;',
    mediumturquoise: 'column-rule:mediumturquoise;',
    mediumvioletred: 'column-rule:mediumvioletred;',
    midnightblue: 'column-rule:midnightblue;',
    mintcream: 'column-rule:mintcream;',
    mistyrose: 'column-rule:mistyrose;',
    moccasin: 'column-rule:moccasin;',
    navajowhite: 'column-rule:navajowhite;',
    navy: 'column-rule:navy;',
    none: 'column-rule:none;',
    oldlace: 'column-rule:oldlace;',
    olive: 'column-rule:olive;',
    olivedrab: 'column-rule:olivedrab;',
    orange: 'column-rule:orange;',
    orangered: 'column-rule:orangered;',
    orchid: 'column-rule:orchid;',
    outset: 'column-rule:outset;',
    palegoldenrod: 'column-rule:palegoldenrod;',
    palegreen: 'column-rule:palegreen;',
    paleturquoise: 'column-rule:paleturquoise;',
    palevioletred: 'column-rule:palevioletred;',
    papayawhip: 'column-rule:papayawhip;',
    peachpuff: 'column-rule:peachpuff;',
    peru: 'column-rule:peru;',
    pink: 'column-rule:pink;',
    plum: 'column-rule:plum;',
    powderblue: 'column-rule:powderblue;',
    purple: 'column-rule:purple;',
    rebeccapurple: 'column-rule:rebeccapurple;',
    red: 'column-rule:red;',
    revert: 'column-rule:revert;',
    revertLayer: 'column-rule:revert-layer;',
    ridge: 'column-rule:ridge;',
    rosybrown: 'column-rule:rosybrown;',
    royalblue: 'column-rule:royalblue;',
    saddlebrown: 'column-rule:saddlebrown;',
    salmon: 'column-rule:salmon;',
    sandybrown: 'column-rule:sandybrown;',
    seagreen: 'column-rule:seagreen;',
    seashell: 'column-rule:seashell;',
    sienna: 'column-rule:sienna;',
    silver: 'column-rule:silver;',
    skyblue: 'column-rule:skyblue;',
    slateblue: 'column-rule:slateblue;',
    slategray: 'column-rule:slategray;',
    slategrey: 'column-rule:slategrey;',
    snow: 'column-rule:snow;',
    solid: 'column-rule:solid;',
    springgreen: 'column-rule:springgreen;',
    steelblue: 'column-rule:steelblue;',
    tan: 'column-rule:tan;',
    teal: 'column-rule:teal;',
    thick: 'column-rule:thick;',
    thin: 'column-rule:thin;',
    thistle: 'column-rule:thistle;',
    tomato: 'column-rule:tomato;',
    transparent: 'column-rule:transparent;',
    turquoise: 'column-rule:turquoise;',
    unset: 'column-rule:unset;',
    violet: 'column-rule:violet;',
    wheat: 'column-rule:wheat;',
    white: 'column-rule:white;',
    whitesmoke: 'column-rule:whitesmoke;',
    yellow: 'column-rule:yellow;',
    yellowgreen: 'column-rule:yellowgreen;',
  } as const;
}

type ColumnRuleCssKeywords = Readonly<ReturnType<typeof columnRuleKeywords>>;
export interface ColumnRuleCss extends ColumnRuleCssKeywords {}
/** CSS 属性 column-rule。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
 */
export class ColumnRuleCss extends LengthCssProperty<Property.ColumnRule> {
  constructor() {
    super('column-rule');
    initializeColumnRuleCss();
  }
}
let columnRuleReady = false;
function initializeColumnRuleCss(): void {
  if (columnRuleReady) return;
  Object.assign(ColumnRuleCss.prototype, columnRuleKeywords());
  Object.freeze(ColumnRuleCss.prototype);
  columnRuleReady = true;
}

function columnRuleColorKeywords() {
  return {
    AccentColor: 'column-rule-color:AccentColor;',
    AccentColorText: 'column-rule-color:AccentColorText;',
    ActiveBorder: 'column-rule-color:ActiveBorder;',
    ActiveCaption: 'column-rule-color:ActiveCaption;',
    ActiveText: 'column-rule-color:ActiveText;',
    AppWorkspace: 'column-rule-color:AppWorkspace;',
    Background: 'column-rule-color:Background;',
    ButtonBorder: 'column-rule-color:ButtonBorder;',
    ButtonFace: 'column-rule-color:ButtonFace;',
    ButtonHighlight: 'column-rule-color:ButtonHighlight;',
    ButtonShadow: 'column-rule-color:ButtonShadow;',
    ButtonText: 'column-rule-color:ButtonText;',
    Canvas: 'column-rule-color:Canvas;',
    CanvasText: 'column-rule-color:CanvasText;',
    CaptionText: 'column-rule-color:CaptionText;',
    Field: 'column-rule-color:Field;',
    FieldText: 'column-rule-color:FieldText;',
    GrayText: 'column-rule-color:GrayText;',
    Highlight: 'column-rule-color:Highlight;',
    HighlightText: 'column-rule-color:HighlightText;',
    InactiveBorder: 'column-rule-color:InactiveBorder;',
    InactiveCaption: 'column-rule-color:InactiveCaption;',
    InactiveCaptionText: 'column-rule-color:InactiveCaptionText;',
    InfoBackground: 'column-rule-color:InfoBackground;',
    InfoText: 'column-rule-color:InfoText;',
    LinkText: 'column-rule-color:LinkText;',
    Mark: 'column-rule-color:Mark;',
    MarkText: 'column-rule-color:MarkText;',
    Menu: 'column-rule-color:Menu;',
    MenuText: 'column-rule-color:MenuText;',
    Scrollbar: 'column-rule-color:Scrollbar;',
    SelectedItem: 'column-rule-color:SelectedItem;',
    SelectedItemText: 'column-rule-color:SelectedItemText;',
    ThreeDDarkShadow: 'column-rule-color:ThreeDDarkShadow;',
    ThreeDFace: 'column-rule-color:ThreeDFace;',
    ThreeDHighlight: 'column-rule-color:ThreeDHighlight;',
    ThreeDLightShadow: 'column-rule-color:ThreeDLightShadow;',
    ThreeDShadow: 'column-rule-color:ThreeDShadow;',
    VisitedText: 'column-rule-color:VisitedText;',
    Window: 'column-rule-color:Window;',
    WindowFrame: 'column-rule-color:WindowFrame;',
    WindowText: 'column-rule-color:WindowText;',
    aliceblue: 'column-rule-color:aliceblue;',
    antiquewhite: 'column-rule-color:antiquewhite;',
    aqua: 'column-rule-color:aqua;',
    aquamarine: 'column-rule-color:aquamarine;',
    azure: 'column-rule-color:azure;',
    beige: 'column-rule-color:beige;',
    bisque: 'column-rule-color:bisque;',
    black: 'column-rule-color:black;',
    blanchedalmond: 'column-rule-color:blanchedalmond;',
    blue: 'column-rule-color:blue;',
    blueviolet: 'column-rule-color:blueviolet;',
    brown: 'column-rule-color:brown;',
    burlywood: 'column-rule-color:burlywood;',
    cadetblue: 'column-rule-color:cadetblue;',
    chartreuse: 'column-rule-color:chartreuse;',
    chocolate: 'column-rule-color:chocolate;',
    coral: 'column-rule-color:coral;',
    cornflowerblue: 'column-rule-color:cornflowerblue;',
    cornsilk: 'column-rule-color:cornsilk;',
    crimson: 'column-rule-color:crimson;',
    currentColor: 'column-rule-color:currentColor;',
    cyan: 'column-rule-color:cyan;',
    darkblue: 'column-rule-color:darkblue;',
    darkcyan: 'column-rule-color:darkcyan;',
    darkgoldenrod: 'column-rule-color:darkgoldenrod;',
    darkgray: 'column-rule-color:darkgray;',
    darkgreen: 'column-rule-color:darkgreen;',
    darkgrey: 'column-rule-color:darkgrey;',
    darkkhaki: 'column-rule-color:darkkhaki;',
    darkmagenta: 'column-rule-color:darkmagenta;',
    darkolivegreen: 'column-rule-color:darkolivegreen;',
    darkorange: 'column-rule-color:darkorange;',
    darkorchid: 'column-rule-color:darkorchid;',
    darkred: 'column-rule-color:darkred;',
    darksalmon: 'column-rule-color:darksalmon;',
    darkseagreen: 'column-rule-color:darkseagreen;',
    darkslateblue: 'column-rule-color:darkslateblue;',
    darkslategray: 'column-rule-color:darkslategray;',
    darkslategrey: 'column-rule-color:darkslategrey;',
    darkturquoise: 'column-rule-color:darkturquoise;',
    darkviolet: 'column-rule-color:darkviolet;',
    deeppink: 'column-rule-color:deeppink;',
    deepskyblue: 'column-rule-color:deepskyblue;',
    dimgray: 'column-rule-color:dimgray;',
    dimgrey: 'column-rule-color:dimgrey;',
    dodgerblue: 'column-rule-color:dodgerblue;',
    firebrick: 'column-rule-color:firebrick;',
    floralwhite: 'column-rule-color:floralwhite;',
    forestgreen: 'column-rule-color:forestgreen;',
    fuchsia: 'column-rule-color:fuchsia;',
    gainsboro: 'column-rule-color:gainsboro;',
    ghostwhite: 'column-rule-color:ghostwhite;',
    gold: 'column-rule-color:gold;',
    goldenrod: 'column-rule-color:goldenrod;',
    gray: 'column-rule-color:gray;',
    green: 'column-rule-color:green;',
    greenyellow: 'column-rule-color:greenyellow;',
    grey: 'column-rule-color:grey;',
    honeydew: 'column-rule-color:honeydew;',
    hotpink: 'column-rule-color:hotpink;',
    indianred: 'column-rule-color:indianred;',
    indigo: 'column-rule-color:indigo;',
    inherit: 'column-rule-color:inherit;',
    initial: 'column-rule-color:initial;',
    ivory: 'column-rule-color:ivory;',
    khaki: 'column-rule-color:khaki;',
    lavender: 'column-rule-color:lavender;',
    lavenderblush: 'column-rule-color:lavenderblush;',
    lawngreen: 'column-rule-color:lawngreen;',
    lemonchiffon: 'column-rule-color:lemonchiffon;',
    lightblue: 'column-rule-color:lightblue;',
    lightcoral: 'column-rule-color:lightcoral;',
    lightcyan: 'column-rule-color:lightcyan;',
    lightgoldenrodyellow: 'column-rule-color:lightgoldenrodyellow;',
    lightgray: 'column-rule-color:lightgray;',
    lightgreen: 'column-rule-color:lightgreen;',
    lightgrey: 'column-rule-color:lightgrey;',
    lightpink: 'column-rule-color:lightpink;',
    lightsalmon: 'column-rule-color:lightsalmon;',
    lightseagreen: 'column-rule-color:lightseagreen;',
    lightskyblue: 'column-rule-color:lightskyblue;',
    lightslategray: 'column-rule-color:lightslategray;',
    lightslategrey: 'column-rule-color:lightslategrey;',
    lightsteelblue: 'column-rule-color:lightsteelblue;',
    lightyellow: 'column-rule-color:lightyellow;',
    lime: 'column-rule-color:lime;',
    limegreen: 'column-rule-color:limegreen;',
    linen: 'column-rule-color:linen;',
    magenta: 'column-rule-color:magenta;',
    maroon: 'column-rule-color:maroon;',
    mediumaquamarine: 'column-rule-color:mediumaquamarine;',
    mediumblue: 'column-rule-color:mediumblue;',
    mediumorchid: 'column-rule-color:mediumorchid;',
    mediumpurple: 'column-rule-color:mediumpurple;',
    mediumseagreen: 'column-rule-color:mediumseagreen;',
    mediumslateblue: 'column-rule-color:mediumslateblue;',
    mediumspringgreen: 'column-rule-color:mediumspringgreen;',
    mediumturquoise: 'column-rule-color:mediumturquoise;',
    mediumvioletred: 'column-rule-color:mediumvioletred;',
    midnightblue: 'column-rule-color:midnightblue;',
    mintcream: 'column-rule-color:mintcream;',
    mistyrose: 'column-rule-color:mistyrose;',
    moccasin: 'column-rule-color:moccasin;',
    navajowhite: 'column-rule-color:navajowhite;',
    navy: 'column-rule-color:navy;',
    oldlace: 'column-rule-color:oldlace;',
    olive: 'column-rule-color:olive;',
    olivedrab: 'column-rule-color:olivedrab;',
    orange: 'column-rule-color:orange;',
    orangered: 'column-rule-color:orangered;',
    orchid: 'column-rule-color:orchid;',
    palegoldenrod: 'column-rule-color:palegoldenrod;',
    palegreen: 'column-rule-color:palegreen;',
    paleturquoise: 'column-rule-color:paleturquoise;',
    palevioletred: 'column-rule-color:palevioletred;',
    papayawhip: 'column-rule-color:papayawhip;',
    peachpuff: 'column-rule-color:peachpuff;',
    peru: 'column-rule-color:peru;',
    pink: 'column-rule-color:pink;',
    plum: 'column-rule-color:plum;',
    powderblue: 'column-rule-color:powderblue;',
    purple: 'column-rule-color:purple;',
    rebeccapurple: 'column-rule-color:rebeccapurple;',
    red: 'column-rule-color:red;',
    revert: 'column-rule-color:revert;',
    revertLayer: 'column-rule-color:revert-layer;',
    rosybrown: 'column-rule-color:rosybrown;',
    royalblue: 'column-rule-color:royalblue;',
    saddlebrown: 'column-rule-color:saddlebrown;',
    salmon: 'column-rule-color:salmon;',
    sandybrown: 'column-rule-color:sandybrown;',
    seagreen: 'column-rule-color:seagreen;',
    seashell: 'column-rule-color:seashell;',
    sienna: 'column-rule-color:sienna;',
    silver: 'column-rule-color:silver;',
    skyblue: 'column-rule-color:skyblue;',
    slateblue: 'column-rule-color:slateblue;',
    slategray: 'column-rule-color:slategray;',
    slategrey: 'column-rule-color:slategrey;',
    snow: 'column-rule-color:snow;',
    springgreen: 'column-rule-color:springgreen;',
    steelblue: 'column-rule-color:steelblue;',
    tan: 'column-rule-color:tan;',
    teal: 'column-rule-color:teal;',
    thistle: 'column-rule-color:thistle;',
    tomato: 'column-rule-color:tomato;',
    transparent: 'column-rule-color:transparent;',
    turquoise: 'column-rule-color:turquoise;',
    unset: 'column-rule-color:unset;',
    violet: 'column-rule-color:violet;',
    wheat: 'column-rule-color:wheat;',
    white: 'column-rule-color:white;',
    whitesmoke: 'column-rule-color:whitesmoke;',
    yellow: 'column-rule-color:yellow;',
    yellowgreen: 'column-rule-color:yellowgreen;',
  } as const;
}

type ColumnRuleColorCssKeywords = Readonly<ReturnType<typeof columnRuleColorKeywords>>;
export interface ColumnRuleColorCss extends ColumnRuleColorCssKeywords {}
/** CSS 属性 column-rule-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
 */
export class ColumnRuleColorCss extends CssProperty<Property.ColumnRuleColor> {
  constructor() {
    super('column-rule-color');
    initializeColumnRuleColorCss();
  }
}
let columnRuleColorReady = false;
function initializeColumnRuleColorCss(): void {
  if (columnRuleColorReady) return;
  Object.assign(ColumnRuleColorCss.prototype, columnRuleColorKeywords());
  Object.freeze(ColumnRuleColorCss.prototype);
  columnRuleColorReady = true;
}

function columnRuleStyleKeywords() {
  return {
    dashed: 'column-rule-style:dashed;',
    dotted: 'column-rule-style:dotted;',
    double: 'column-rule-style:double;',
    groove: 'column-rule-style:groove;',
    hidden: 'column-rule-style:hidden;',
    inherit: 'column-rule-style:inherit;',
    initial: 'column-rule-style:initial;',
    inset: 'column-rule-style:inset;',
    none: 'column-rule-style:none;',
    outset: 'column-rule-style:outset;',
    revert: 'column-rule-style:revert;',
    revertLayer: 'column-rule-style:revert-layer;',
    ridge: 'column-rule-style:ridge;',
    solid: 'column-rule-style:solid;',
    unset: 'column-rule-style:unset;',
  } as const;
}

type ColumnRuleStyleCssKeywords = Readonly<ReturnType<typeof columnRuleStyleKeywords>>;
export interface ColumnRuleStyleCss extends ColumnRuleStyleCssKeywords {}
/** CSS 属性 column-rule-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
 */
export class ColumnRuleStyleCss extends CssProperty<Property.ColumnRuleStyle> {
  constructor() {
    super('column-rule-style');
    initializeColumnRuleStyleCss();
  }
}
let columnRuleStyleReady = false;
function initializeColumnRuleStyleCss(): void {
  if (columnRuleStyleReady) return;
  Object.assign(ColumnRuleStyleCss.prototype, columnRuleStyleKeywords());
  Object.freeze(ColumnRuleStyleCss.prototype);
  columnRuleStyleReady = true;
}

function columnRuleWidthKeywords() {
  return {
    inherit: 'column-rule-width:inherit;',
    initial: 'column-rule-width:initial;',
    medium: 'column-rule-width:medium;',
    revert: 'column-rule-width:revert;',
    revertLayer: 'column-rule-width:revert-layer;',
    thick: 'column-rule-width:thick;',
    thin: 'column-rule-width:thin;',
    unset: 'column-rule-width:unset;',
  } as const;
}

type ColumnRuleWidthCssKeywords = Readonly<ReturnType<typeof columnRuleWidthKeywords>>;
export interface ColumnRuleWidthCss extends ColumnRuleWidthCssKeywords {}
/** CSS 属性 column-rule-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
 */
export class ColumnRuleWidthCss extends LengthCssProperty<Property.ColumnRuleWidth> {
  constructor() {
    super('column-rule-width');
    initializeColumnRuleWidthCss();
  }
}
let columnRuleWidthReady = false;
function initializeColumnRuleWidthCss(): void {
  if (columnRuleWidthReady) return;
  Object.assign(ColumnRuleWidthCss.prototype, columnRuleWidthKeywords());
  Object.freeze(ColumnRuleWidthCss.prototype);
  columnRuleWidthReady = true;
}

function columnSpanKeywords() {
  return {
    all: 'column-span:all;',
    inherit: 'column-span:inherit;',
    initial: 'column-span:initial;',
    none: 'column-span:none;',
    revert: 'column-span:revert;',
    revertLayer: 'column-span:revert-layer;',
    unset: 'column-span:unset;',
  } as const;
}

type ColumnSpanCssKeywords = Readonly<ReturnType<typeof columnSpanKeywords>>;
export interface ColumnSpanCss extends ColumnSpanCssKeywords {}
/** CSS 属性 column-span；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
 */
export class ColumnSpanCss extends CssProperty<Property.ColumnSpan> {
  constructor() {
    super('column-span');
    initializeColumnSpanCss();
  }
}
let columnSpanReady = false;
function initializeColumnSpanCss(): void {
  if (columnSpanReady) return;
  Object.assign(ColumnSpanCss.prototype, columnSpanKeywords());
  Object.freeze(ColumnSpanCss.prototype);
  columnSpanReady = true;
}

function columnWidthKeywords() {
  return {
    auto: 'column-width:auto;',
    inherit: 'column-width:inherit;',
    initial: 'column-width:initial;',
    revert: 'column-width:revert;',
    revertLayer: 'column-width:revert-layer;',
    unset: 'column-width:unset;',
  } as const;
}

type ColumnWidthCssKeywords = Readonly<ReturnType<typeof columnWidthKeywords>>;
export interface ColumnWidthCss extends ColumnWidthCssKeywords {}
/** CSS 属性 column-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
 */
export class ColumnWidthCss extends LengthCssProperty<Property.ColumnWidth> {
  constructor() {
    super('column-width');
    initializeColumnWidthCss();
  }
}
let columnWidthReady = false;
function initializeColumnWidthCss(): void {
  if (columnWidthReady) return;
  Object.assign(ColumnWidthCss.prototype, columnWidthKeywords());
  Object.freeze(ColumnWidthCss.prototype);
  columnWidthReady = true;
}

function columnsKeywords() {
  return {
    auto: 'columns:auto;',
    inherit: 'columns:inherit;',
    initial: 'columns:initial;',
    revert: 'columns:revert;',
    revertLayer: 'columns:revert-layer;',
    unset: 'columns:unset;',
  } as const;
}

type ColumnsCssKeywords = Readonly<ReturnType<typeof columnsKeywords>>;
export interface ColumnsCss extends ColumnsCssKeywords {}
/** CSS 属性 columns。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
 */
export class ColumnsCss extends LengthCssProperty<Property.Columns> {
  constructor() {
    super('columns');
    initializeColumnsCss();
  }
}
let columnsReady = false;
function initializeColumnsCss(): void {
  if (columnsReady) return;
  Object.assign(ColumnsCss.prototype, columnsKeywords());
  Object.freeze(ColumnsCss.prototype);
  columnsReady = true;
}

function containKeywords() {
  return {
    content: 'contain:content;',
    inherit: 'contain:inherit;',
    initial: 'contain:initial;',
    inlineSize: 'contain:inline-size;',
    layout: 'contain:layout;',
    none: 'contain:none;',
    paint: 'contain:paint;',
    revert: 'contain:revert;',
    revertLayer: 'contain:revert-layer;',
    size: 'contain:size;',
    strict: 'contain:strict;',
    style: 'contain:style;',
    unset: 'contain:unset;',
  } as const;
}

type ContainCssKeywords = Readonly<ReturnType<typeof containKeywords>>;
export interface ContainCss extends ContainCssKeywords {}
/** CSS 属性 contain；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
 */
export class ContainCss extends CssProperty<Property.Contain> {
  constructor() {
    super('contain');
    initializeContainCss();
  }
}
let containReady = false;
function initializeContainCss(): void {
  if (containReady) return;
  Object.assign(ContainCss.prototype, containKeywords());
  Object.freeze(ContainCss.prototype);
  containReady = true;
}

function containIntrinsicBlockSizeKeywords() {
  return {
    inherit: 'contain-intrinsic-block-size:inherit;',
    initial: 'contain-intrinsic-block-size:initial;',
    none: 'contain-intrinsic-block-size:none;',
    revert: 'contain-intrinsic-block-size:revert;',
    revertLayer: 'contain-intrinsic-block-size:revert-layer;',
    unset: 'contain-intrinsic-block-size:unset;',
  } as const;
}

type ContainIntrinsicBlockSizeCssKeywords = Readonly<
  ReturnType<typeof containIntrinsicBlockSizeKeywords>
>;
export interface ContainIntrinsicBlockSizeCss extends ContainIntrinsicBlockSizeCssKeywords {}
/** CSS 属性 contain-intrinsic-block-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
 */
export class ContainIntrinsicBlockSizeCss extends LengthCssProperty<Property.ContainIntrinsicBlockSize> {
  constructor() {
    super('contain-intrinsic-block-size');
    initializeContainIntrinsicBlockSizeCss();
  }
}
let containIntrinsicBlockSizeReady = false;
function initializeContainIntrinsicBlockSizeCss(): void {
  if (containIntrinsicBlockSizeReady) return;
  Object.assign(ContainIntrinsicBlockSizeCss.prototype, containIntrinsicBlockSizeKeywords());
  Object.freeze(ContainIntrinsicBlockSizeCss.prototype);
  containIntrinsicBlockSizeReady = true;
}

function containIntrinsicHeightKeywords() {
  return {
    inherit: 'contain-intrinsic-height:inherit;',
    initial: 'contain-intrinsic-height:initial;',
    none: 'contain-intrinsic-height:none;',
    revert: 'contain-intrinsic-height:revert;',
    revertLayer: 'contain-intrinsic-height:revert-layer;',
    unset: 'contain-intrinsic-height:unset;',
  } as const;
}

type ContainIntrinsicHeightCssKeywords = Readonly<
  ReturnType<typeof containIntrinsicHeightKeywords>
>;
export interface ContainIntrinsicHeightCss extends ContainIntrinsicHeightCssKeywords {}
/** CSS 属性 contain-intrinsic-height；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
 */
export class ContainIntrinsicHeightCss extends LengthCssProperty<Property.ContainIntrinsicHeight> {
  constructor() {
    super('contain-intrinsic-height');
    initializeContainIntrinsicHeightCss();
  }
}
let containIntrinsicHeightReady = false;
function initializeContainIntrinsicHeightCss(): void {
  if (containIntrinsicHeightReady) return;
  Object.assign(ContainIntrinsicHeightCss.prototype, containIntrinsicHeightKeywords());
  Object.freeze(ContainIntrinsicHeightCss.prototype);
  containIntrinsicHeightReady = true;
}

function containIntrinsicInlineSizeKeywords() {
  return {
    inherit: 'contain-intrinsic-inline-size:inherit;',
    initial: 'contain-intrinsic-inline-size:initial;',
    none: 'contain-intrinsic-inline-size:none;',
    revert: 'contain-intrinsic-inline-size:revert;',
    revertLayer: 'contain-intrinsic-inline-size:revert-layer;',
    unset: 'contain-intrinsic-inline-size:unset;',
  } as const;
}

type ContainIntrinsicInlineSizeCssKeywords = Readonly<
  ReturnType<typeof containIntrinsicInlineSizeKeywords>
>;
export interface ContainIntrinsicInlineSizeCss extends ContainIntrinsicInlineSizeCssKeywords {}
/** CSS 属性 contain-intrinsic-inline-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
 */
export class ContainIntrinsicInlineSizeCss extends LengthCssProperty<Property.ContainIntrinsicInlineSize> {
  constructor() {
    super('contain-intrinsic-inline-size');
    initializeContainIntrinsicInlineSizeCss();
  }
}
let containIntrinsicInlineSizeReady = false;
function initializeContainIntrinsicInlineSizeCss(): void {
  if (containIntrinsicInlineSizeReady) return;
  Object.assign(ContainIntrinsicInlineSizeCss.prototype, containIntrinsicInlineSizeKeywords());
  Object.freeze(ContainIntrinsicInlineSizeCss.prototype);
  containIntrinsicInlineSizeReady = true;
}

function containIntrinsicSizeKeywords() {
  return {
    inherit: 'contain-intrinsic-size:inherit;',
    initial: 'contain-intrinsic-size:initial;',
    none: 'contain-intrinsic-size:none;',
    revert: 'contain-intrinsic-size:revert;',
    revertLayer: 'contain-intrinsic-size:revert-layer;',
    unset: 'contain-intrinsic-size:unset;',
  } as const;
}

type ContainIntrinsicSizeCssKeywords = Readonly<ReturnType<typeof containIntrinsicSizeKeywords>>;
export interface ContainIntrinsicSizeCss extends ContainIntrinsicSizeCssKeywords {}
/** CSS 属性 contain-intrinsic-size。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
 */
export class ContainIntrinsicSizeCss extends LengthCssProperty<Property.ContainIntrinsicSize> {
  constructor() {
    super('contain-intrinsic-size');
    initializeContainIntrinsicSizeCss();
  }
}
let containIntrinsicSizeReady = false;
function initializeContainIntrinsicSizeCss(): void {
  if (containIntrinsicSizeReady) return;
  Object.assign(ContainIntrinsicSizeCss.prototype, containIntrinsicSizeKeywords());
  Object.freeze(ContainIntrinsicSizeCss.prototype);
  containIntrinsicSizeReady = true;
}

function containIntrinsicWidthKeywords() {
  return {
    inherit: 'contain-intrinsic-width:inherit;',
    initial: 'contain-intrinsic-width:initial;',
    none: 'contain-intrinsic-width:none;',
    revert: 'contain-intrinsic-width:revert;',
    revertLayer: 'contain-intrinsic-width:revert-layer;',
    unset: 'contain-intrinsic-width:unset;',
  } as const;
}

type ContainIntrinsicWidthCssKeywords = Readonly<ReturnType<typeof containIntrinsicWidthKeywords>>;
export interface ContainIntrinsicWidthCss extends ContainIntrinsicWidthCssKeywords {}
/** CSS 属性 contain-intrinsic-width；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
 */
export class ContainIntrinsicWidthCss extends LengthCssProperty<Property.ContainIntrinsicWidth> {
  constructor() {
    super('contain-intrinsic-width');
    initializeContainIntrinsicWidthCss();
  }
}
let containIntrinsicWidthReady = false;
function initializeContainIntrinsicWidthCss(): void {
  if (containIntrinsicWidthReady) return;
  Object.assign(ContainIntrinsicWidthCss.prototype, containIntrinsicWidthKeywords());
  Object.freeze(ContainIntrinsicWidthCss.prototype);
  containIntrinsicWidthReady = true;
}

function containerKeywords() {
  return {
    inherit: 'container:inherit;',
    initial: 'container:initial;',
    none: 'container:none;',
    revert: 'container:revert;',
    revertLayer: 'container:revert-layer;',
    unset: 'container:unset;',
  } as const;
}

type ContainerCssKeywords = Readonly<ReturnType<typeof containerKeywords>>;
export interface ContainerCss extends ContainerCssKeywords {}
/** CSS 属性 container。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
 */
export class ContainerCss extends CssProperty<Property.Container> {
  constructor() {
    super('container');
    initializeContainerCss();
  }
}
let containerReady = false;
function initializeContainerCss(): void {
  if (containerReady) return;
  Object.assign(ContainerCss.prototype, containerKeywords());
  Object.freeze(ContainerCss.prototype);
  containerReady = true;
}

function containerNameKeywords() {
  return {
    inherit: 'container-name:inherit;',
    initial: 'container-name:initial;',
    none: 'container-name:none;',
    revert: 'container-name:revert;',
    revertLayer: 'container-name:revert-layer;',
    unset: 'container-name:unset;',
  } as const;
}

type ContainerNameCssKeywords = Readonly<ReturnType<typeof containerNameKeywords>>;
export interface ContainerNameCss extends ContainerNameCssKeywords {}
/** CSS 属性 container-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
 */
export class ContainerNameCss extends CssProperty<Property.ContainerName> {
  constructor() {
    super('container-name');
    initializeContainerNameCss();
  }
}
let containerNameReady = false;
function initializeContainerNameCss(): void {
  if (containerNameReady) return;
  Object.assign(ContainerNameCss.prototype, containerNameKeywords());
  Object.freeze(ContainerNameCss.prototype);
  containerNameReady = true;
}

function containerTypeKeywords() {
  return {
    inherit: 'container-type:inherit;',
    initial: 'container-type:initial;',
    inlineSize: 'container-type:inline-size;',
    normal: 'container-type:normal;',
    revert: 'container-type:revert;',
    revertLayer: 'container-type:revert-layer;',
    scrollState: 'container-type:scroll-state;',
    size: 'container-type:size;',
    unset: 'container-type:unset;',
  } as const;
}

type ContainerTypeCssKeywords = Readonly<ReturnType<typeof containerTypeKeywords>>;
export interface ContainerTypeCss extends ContainerTypeCssKeywords {}
/** CSS 属性 container-type；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
 */
export class ContainerTypeCss extends CssProperty<Property.ContainerType> {
  constructor() {
    super('container-type');
    initializeContainerTypeCss();
  }
}
let containerTypeReady = false;
function initializeContainerTypeCss(): void {
  if (containerTypeReady) return;
  Object.assign(ContainerTypeCss.prototype, containerTypeKeywords());
  Object.freeze(ContainerTypeCss.prototype);
  containerTypeReady = true;
}

function contentKeywords() {
  return {
    closeQuote: 'content:close-quote;',
    inherit: 'content:inherit;',
    initial: 'content:initial;',
    noCloseQuote: 'content:no-close-quote;',
    noOpenQuote: 'content:no-open-quote;',
    none: 'content:none;',
    normal: 'content:normal;',
    openQuote: 'content:open-quote;',
    revert: 'content:revert;',
    revertLayer: 'content:revert-layer;',
    unset: 'content:unset;',
  } as const;
}

type ContentCssKeywords = Readonly<ReturnType<typeof contentKeywords>>;
export interface ContentCss extends ContentCssKeywords {}
/** CSS 属性 content；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
 */
export class ContentCss extends CssProperty<Property.Content> {
  constructor() {
    super('content');
    initializeContentCss();
  }
}
let contentReady = false;
function initializeContentCss(): void {
  if (contentReady) return;
  Object.assign(ContentCss.prototype, contentKeywords());
  Object.freeze(ContentCss.prototype);
  contentReady = true;
}

function contentVisibilityKeywords() {
  return {
    auto: 'content-visibility:auto;',
    hidden: 'content-visibility:hidden;',
    inherit: 'content-visibility:inherit;',
    initial: 'content-visibility:initial;',
    revert: 'content-visibility:revert;',
    revertLayer: 'content-visibility:revert-layer;',
    unset: 'content-visibility:unset;',
    visible: 'content-visibility:visible;',
  } as const;
}

type ContentVisibilityCssKeywords = Readonly<ReturnType<typeof contentVisibilityKeywords>>;
export interface ContentVisibilityCss extends ContentVisibilityCssKeywords {}
/** CSS 属性 content-visibility；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
 */
export class ContentVisibilityCss extends CssProperty<Property.ContentVisibility> {
  constructor() {
    super('content-visibility');
    initializeContentVisibilityCss();
  }
}
let contentVisibilityReady = false;
function initializeContentVisibilityCss(): void {
  if (contentVisibilityReady) return;
  Object.assign(ContentVisibilityCss.prototype, contentVisibilityKeywords());
  Object.freeze(ContentVisibilityCss.prototype);
  contentVisibilityReady = true;
}

function counterIncrementKeywords() {
  return {
    inherit: 'counter-increment:inherit;',
    initial: 'counter-increment:initial;',
    none: 'counter-increment:none;',
    revert: 'counter-increment:revert;',
    revertLayer: 'counter-increment:revert-layer;',
    unset: 'counter-increment:unset;',
  } as const;
}

type CounterIncrementCssKeywords = Readonly<ReturnType<typeof counterIncrementKeywords>>;
export interface CounterIncrementCss extends CounterIncrementCssKeywords {}
/** CSS 属性 counter-increment；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
 */
export class CounterIncrementCss extends CssProperty<Property.CounterIncrement> {
  constructor() {
    super('counter-increment');
    initializeCounterIncrementCss();
  }
}
let counterIncrementReady = false;
function initializeCounterIncrementCss(): void {
  if (counterIncrementReady) return;
  Object.assign(CounterIncrementCss.prototype, counterIncrementKeywords());
  Object.freeze(CounterIncrementCss.prototype);
  counterIncrementReady = true;
}

function counterResetKeywords() {
  return {
    inherit: 'counter-reset:inherit;',
    initial: 'counter-reset:initial;',
    none: 'counter-reset:none;',
    revert: 'counter-reset:revert;',
    revertLayer: 'counter-reset:revert-layer;',
    unset: 'counter-reset:unset;',
  } as const;
}

type CounterResetCssKeywords = Readonly<ReturnType<typeof counterResetKeywords>>;
export interface CounterResetCss extends CounterResetCssKeywords {}
/** CSS 属性 counter-reset；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
 */
export class CounterResetCss extends CssProperty<Property.CounterReset> {
  constructor() {
    super('counter-reset');
    initializeCounterResetCss();
  }
}
let counterResetReady = false;
function initializeCounterResetCss(): void {
  if (counterResetReady) return;
  Object.assign(CounterResetCss.prototype, counterResetKeywords());
  Object.freeze(CounterResetCss.prototype);
  counterResetReady = true;
}

function counterSetKeywords() {
  return {
    inherit: 'counter-set:inherit;',
    initial: 'counter-set:initial;',
    none: 'counter-set:none;',
    revert: 'counter-set:revert;',
    revertLayer: 'counter-set:revert-layer;',
    unset: 'counter-set:unset;',
  } as const;
}

type CounterSetCssKeywords = Readonly<ReturnType<typeof counterSetKeywords>>;
export interface CounterSetCss extends CounterSetCssKeywords {}
/** CSS 属性 counter-set；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
 */
export class CounterSetCss extends CssProperty<Property.CounterSet> {
  constructor() {
    super('counter-set');
    initializeCounterSetCss();
  }
}
let counterSetReady = false;
function initializeCounterSetCss(): void {
  if (counterSetReady) return;
  Object.assign(CounterSetCss.prototype, counterSetKeywords());
  Object.freeze(CounterSetCss.prototype);
  counterSetReady = true;
}

function cursorKeywords() {
  return {
    alias: 'cursor:alias;',
    allScroll: 'cursor:all-scroll;',
    auto: 'cursor:auto;',
    cell: 'cursor:cell;',
    colResize: 'cursor:col-resize;',
    contextMenu: 'cursor:context-menu;',
    copy: 'cursor:copy;',
    crosshair: 'cursor:crosshair;',
    default: 'cursor:default;',
    eResize: 'cursor:e-resize;',
    ewResize: 'cursor:ew-resize;',
    grab: 'cursor:grab;',
    grabbing: 'cursor:grabbing;',
    help: 'cursor:help;',
    inherit: 'cursor:inherit;',
    initial: 'cursor:initial;',
    move: 'cursor:move;',
    nResize: 'cursor:n-resize;',
    neResize: 'cursor:ne-resize;',
    neswResize: 'cursor:nesw-resize;',
    noDrop: 'cursor:no-drop;',
    none: 'cursor:none;',
    notAllowed: 'cursor:not-allowed;',
    nsResize: 'cursor:ns-resize;',
    nwResize: 'cursor:nw-resize;',
    nwseResize: 'cursor:nwse-resize;',
    pointer: 'cursor:pointer;',
    progress: 'cursor:progress;',
    revert: 'cursor:revert;',
    revertLayer: 'cursor:revert-layer;',
    rowResize: 'cursor:row-resize;',
    sResize: 'cursor:s-resize;',
    seResize: 'cursor:se-resize;',
    swResize: 'cursor:sw-resize;',
    text: 'cursor:text;',
    unset: 'cursor:unset;',
    verticalText: 'cursor:vertical-text;',
    wResize: 'cursor:w-resize;',
    wait: 'cursor:wait;',
    zoomIn: 'cursor:zoom-in;',
    zoomOut: 'cursor:zoom-out;',
  } as const;
}

type CursorCssKeywords = Readonly<ReturnType<typeof cursorKeywords>>;
export interface CursorCss extends CursorCssKeywords {}
/** CSS 属性 cursor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
 */
export class CursorCss extends CssProperty<Property.Cursor> {
  constructor() {
    super('cursor');
    initializeCursorCss();
  }
}
let cursorReady = false;
function initializeCursorCss(): void {
  if (cursorReady) return;
  Object.assign(CursorCss.prototype, cursorKeywords());
  Object.freeze(CursorCss.prototype);
  cursorReady = true;
}

function cxKeywords() {
  return {
    inherit: 'cx:inherit;',
    initial: 'cx:initial;',
    revert: 'cx:revert;',
    revertLayer: 'cx:revert-layer;',
    unset: 'cx:unset;',
  } as const;
}

type CxCssKeywords = Readonly<ReturnType<typeof cxKeywords>>;
export interface CxCss extends CxCssKeywords {}
/** CSS 属性 cx；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
 */
export class CxCss extends LengthCssProperty<Property.Cx> {
  constructor() {
    super('cx');
    initializeCxCss();
  }
}
let cxReady = false;
function initializeCxCss(): void {
  if (cxReady) return;
  Object.assign(CxCss.prototype, cxKeywords());
  Object.freeze(CxCss.prototype);
  cxReady = true;
}

function cyKeywords() {
  return {
    inherit: 'cy:inherit;',
    initial: 'cy:initial;',
    revert: 'cy:revert;',
    revertLayer: 'cy:revert-layer;',
    unset: 'cy:unset;',
  } as const;
}

type CyCssKeywords = Readonly<ReturnType<typeof cyKeywords>>;
export interface CyCss extends CyCssKeywords {}
/** CSS 属性 cy；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
 */
export class CyCss extends LengthCssProperty<Property.Cy> {
  constructor() {
    super('cy');
    initializeCyCss();
  }
}
let cyReady = false;
function initializeCyCss(): void {
  if (cyReady) return;
  Object.assign(CyCss.prototype, cyKeywords());
  Object.freeze(CyCss.prototype);
  cyReady = true;
}

function dKeywords() {
  return {
    inherit: 'd:inherit;',
    initial: 'd:initial;',
    none: 'd:none;',
    revert: 'd:revert;',
    revertLayer: 'd:revert-layer;',
    unset: 'd:unset;',
  } as const;
}

type DCssKeywords = Readonly<ReturnType<typeof dKeywords>>;
export interface DCss extends DCssKeywords {}
/** CSS 属性 d；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
 */
export class DCss extends CssProperty<Property.D> {
  constructor() {
    super('d');
    initializeDCss();
  }
}
let dReady = false;
function initializeDCss(): void {
  if (dReady) return;
  Object.assign(DCss.prototype, dKeywords());
  Object.freeze(DCss.prototype);
  dReady = true;
}

function directionKeywords() {
  return {
    inherit: 'direction:inherit;',
    initial: 'direction:initial;',
    ltr: 'direction:ltr;',
    revert: 'direction:revert;',
    revertLayer: 'direction:revert-layer;',
    rtl: 'direction:rtl;',
    unset: 'direction:unset;',
  } as const;
}

type DirectionCssKeywords = Readonly<ReturnType<typeof directionKeywords>>;
export interface DirectionCss extends DirectionCssKeywords {}
/** CSS 属性 direction；初始值 ltr。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
 */
export class DirectionCss extends CssProperty<Property.Direction> {
  constructor() {
    super('direction');
    initializeDirectionCss();
  }
}
let directionReady = false;
function initializeDirectionCss(): void {
  if (directionReady) return;
  Object.assign(DirectionCss.prototype, directionKeywords());
  Object.freeze(DirectionCss.prototype);
  directionReady = true;
}

function displayKeywords() {
  return {
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
}

type DisplayCssKeywords = Readonly<ReturnType<typeof displayKeywords>>;
export interface DisplayCss extends DisplayCssKeywords {}
/** 显示类型（CSS display）；初始值 inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
 */
export class DisplayCss extends CssProperty<Property.Display> {
  constructor() {
    super('display');
    initializeDisplayCss();
  }
}
let displayReady = false;
function initializeDisplayCss(): void {
  if (displayReady) return;
  Object.assign(DisplayCss.prototype, displayKeywords());
  Object.freeze(DisplayCss.prototype);
  displayReady = true;
}

function dominantBaselineKeywords() {
  return {
    alphabetic: 'dominant-baseline:alphabetic;',
    auto: 'dominant-baseline:auto;',
    central: 'dominant-baseline:central;',
    hanging: 'dominant-baseline:hanging;',
    ideographic: 'dominant-baseline:ideographic;',
    inherit: 'dominant-baseline:inherit;',
    initial: 'dominant-baseline:initial;',
    mathematical: 'dominant-baseline:mathematical;',
    middle: 'dominant-baseline:middle;',
    revert: 'dominant-baseline:revert;',
    revertLayer: 'dominant-baseline:revert-layer;',
    textBottom: 'dominant-baseline:text-bottom;',
    textTop: 'dominant-baseline:text-top;',
    unset: 'dominant-baseline:unset;',
  } as const;
}

type DominantBaselineCssKeywords = Readonly<ReturnType<typeof dominantBaselineKeywords>>;
export interface DominantBaselineCss extends DominantBaselineCssKeywords {}
/** CSS 属性 dominant-baseline；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
 */
export class DominantBaselineCss extends CssProperty<Property.DominantBaseline> {
  constructor() {
    super('dominant-baseline');
    initializeDominantBaselineCss();
  }
}
let dominantBaselineReady = false;
function initializeDominantBaselineCss(): void {
  if (dominantBaselineReady) return;
  Object.assign(DominantBaselineCss.prototype, dominantBaselineKeywords());
  Object.freeze(DominantBaselineCss.prototype);
  dominantBaselineReady = true;
}

function emptyCellsKeywords() {
  return {
    hide: 'empty-cells:hide;',
    inherit: 'empty-cells:inherit;',
    initial: 'empty-cells:initial;',
    revert: 'empty-cells:revert;',
    revertLayer: 'empty-cells:revert-layer;',
    show: 'empty-cells:show;',
    unset: 'empty-cells:unset;',
  } as const;
}

type EmptyCellsCssKeywords = Readonly<ReturnType<typeof emptyCellsKeywords>>;
export interface EmptyCellsCss extends EmptyCellsCssKeywords {}
/** CSS 属性 empty-cells；初始值 show。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
 */
export class EmptyCellsCss extends CssProperty<Property.EmptyCells> {
  constructor() {
    super('empty-cells');
    initializeEmptyCellsCss();
  }
}
let emptyCellsReady = false;
function initializeEmptyCellsCss(): void {
  if (emptyCellsReady) return;
  Object.assign(EmptyCellsCss.prototype, emptyCellsKeywords());
  Object.freeze(EmptyCellsCss.prototype);
  emptyCellsReady = true;
}

function fieldSizingKeywords() {
  return {
    content: 'field-sizing:content;',
    fixed: 'field-sizing:fixed;',
    inherit: 'field-sizing:inherit;',
    initial: 'field-sizing:initial;',
    revert: 'field-sizing:revert;',
    revertLayer: 'field-sizing:revert-layer;',
    unset: 'field-sizing:unset;',
  } as const;
}

type FieldSizingCssKeywords = Readonly<ReturnType<typeof fieldSizingKeywords>>;
export interface FieldSizingCss extends FieldSizingCssKeywords {}
/** CSS 属性 field-sizing；初始值 fixed。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
 */
export class FieldSizingCss extends CssProperty<Property.FieldSizing> {
  constructor() {
    super('field-sizing');
    initializeFieldSizingCss();
  }
}
let fieldSizingReady = false;
function initializeFieldSizingCss(): void {
  if (fieldSizingReady) return;
  Object.assign(FieldSizingCss.prototype, fieldSizingKeywords());
  Object.freeze(FieldSizingCss.prototype);
  fieldSizingReady = true;
}

function fillKeywords() {
  return {
    AccentColor: 'fill:AccentColor;',
    AccentColorText: 'fill:AccentColorText;',
    ActiveBorder: 'fill:ActiveBorder;',
    ActiveCaption: 'fill:ActiveCaption;',
    ActiveText: 'fill:ActiveText;',
    AppWorkspace: 'fill:AppWorkspace;',
    Background: 'fill:Background;',
    ButtonBorder: 'fill:ButtonBorder;',
    ButtonFace: 'fill:ButtonFace;',
    ButtonHighlight: 'fill:ButtonHighlight;',
    ButtonShadow: 'fill:ButtonShadow;',
    ButtonText: 'fill:ButtonText;',
    Canvas: 'fill:Canvas;',
    CanvasText: 'fill:CanvasText;',
    CaptionText: 'fill:CaptionText;',
    Field: 'fill:Field;',
    FieldText: 'fill:FieldText;',
    GrayText: 'fill:GrayText;',
    Highlight: 'fill:Highlight;',
    HighlightText: 'fill:HighlightText;',
    InactiveBorder: 'fill:InactiveBorder;',
    InactiveCaption: 'fill:InactiveCaption;',
    InactiveCaptionText: 'fill:InactiveCaptionText;',
    InfoBackground: 'fill:InfoBackground;',
    InfoText: 'fill:InfoText;',
    LinkText: 'fill:LinkText;',
    Mark: 'fill:Mark;',
    MarkText: 'fill:MarkText;',
    Menu: 'fill:Menu;',
    MenuText: 'fill:MenuText;',
    Scrollbar: 'fill:Scrollbar;',
    SelectedItem: 'fill:SelectedItem;',
    SelectedItemText: 'fill:SelectedItemText;',
    ThreeDDarkShadow: 'fill:ThreeDDarkShadow;',
    ThreeDFace: 'fill:ThreeDFace;',
    ThreeDHighlight: 'fill:ThreeDHighlight;',
    ThreeDLightShadow: 'fill:ThreeDLightShadow;',
    ThreeDShadow: 'fill:ThreeDShadow;',
    VisitedText: 'fill:VisitedText;',
    Window: 'fill:Window;',
    WindowFrame: 'fill:WindowFrame;',
    WindowText: 'fill:WindowText;',
    aliceblue: 'fill:aliceblue;',
    antiquewhite: 'fill:antiquewhite;',
    aqua: 'fill:aqua;',
    aquamarine: 'fill:aquamarine;',
    azure: 'fill:azure;',
    beige: 'fill:beige;',
    bisque: 'fill:bisque;',
    black: 'fill:black;',
    blanchedalmond: 'fill:blanchedalmond;',
    blue: 'fill:blue;',
    blueviolet: 'fill:blueviolet;',
    brown: 'fill:brown;',
    burlywood: 'fill:burlywood;',
    cadetblue: 'fill:cadetblue;',
    chartreuse: 'fill:chartreuse;',
    chocolate: 'fill:chocolate;',
    contextFill: 'fill:context-fill;',
    contextStroke: 'fill:context-stroke;',
    coral: 'fill:coral;',
    cornflowerblue: 'fill:cornflowerblue;',
    cornsilk: 'fill:cornsilk;',
    crimson: 'fill:crimson;',
    currentColor: 'fill:currentColor;',
    cyan: 'fill:cyan;',
    darkblue: 'fill:darkblue;',
    darkcyan: 'fill:darkcyan;',
    darkgoldenrod: 'fill:darkgoldenrod;',
    darkgray: 'fill:darkgray;',
    darkgreen: 'fill:darkgreen;',
    darkgrey: 'fill:darkgrey;',
    darkkhaki: 'fill:darkkhaki;',
    darkmagenta: 'fill:darkmagenta;',
    darkolivegreen: 'fill:darkolivegreen;',
    darkorange: 'fill:darkorange;',
    darkorchid: 'fill:darkorchid;',
    darkred: 'fill:darkred;',
    darksalmon: 'fill:darksalmon;',
    darkseagreen: 'fill:darkseagreen;',
    darkslateblue: 'fill:darkslateblue;',
    darkslategray: 'fill:darkslategray;',
    darkslategrey: 'fill:darkslategrey;',
    darkturquoise: 'fill:darkturquoise;',
    darkviolet: 'fill:darkviolet;',
    deeppink: 'fill:deeppink;',
    deepskyblue: 'fill:deepskyblue;',
    dimgray: 'fill:dimgray;',
    dimgrey: 'fill:dimgrey;',
    dodgerblue: 'fill:dodgerblue;',
    firebrick: 'fill:firebrick;',
    floralwhite: 'fill:floralwhite;',
    forestgreen: 'fill:forestgreen;',
    fuchsia: 'fill:fuchsia;',
    gainsboro: 'fill:gainsboro;',
    ghostwhite: 'fill:ghostwhite;',
    gold: 'fill:gold;',
    goldenrod: 'fill:goldenrod;',
    gray: 'fill:gray;',
    green: 'fill:green;',
    greenyellow: 'fill:greenyellow;',
    grey: 'fill:grey;',
    honeydew: 'fill:honeydew;',
    hotpink: 'fill:hotpink;',
    indianred: 'fill:indianred;',
    indigo: 'fill:indigo;',
    inherit: 'fill:inherit;',
    initial: 'fill:initial;',
    ivory: 'fill:ivory;',
    khaki: 'fill:khaki;',
    lavender: 'fill:lavender;',
    lavenderblush: 'fill:lavenderblush;',
    lawngreen: 'fill:lawngreen;',
    lemonchiffon: 'fill:lemonchiffon;',
    lightblue: 'fill:lightblue;',
    lightcoral: 'fill:lightcoral;',
    lightcyan: 'fill:lightcyan;',
    lightgoldenrodyellow: 'fill:lightgoldenrodyellow;',
    lightgray: 'fill:lightgray;',
    lightgreen: 'fill:lightgreen;',
    lightgrey: 'fill:lightgrey;',
    lightpink: 'fill:lightpink;',
    lightsalmon: 'fill:lightsalmon;',
    lightseagreen: 'fill:lightseagreen;',
    lightskyblue: 'fill:lightskyblue;',
    lightslategray: 'fill:lightslategray;',
    lightslategrey: 'fill:lightslategrey;',
    lightsteelblue: 'fill:lightsteelblue;',
    lightyellow: 'fill:lightyellow;',
    lime: 'fill:lime;',
    limegreen: 'fill:limegreen;',
    linen: 'fill:linen;',
    magenta: 'fill:magenta;',
    maroon: 'fill:maroon;',
    mediumaquamarine: 'fill:mediumaquamarine;',
    mediumblue: 'fill:mediumblue;',
    mediumorchid: 'fill:mediumorchid;',
    mediumpurple: 'fill:mediumpurple;',
    mediumseagreen: 'fill:mediumseagreen;',
    mediumslateblue: 'fill:mediumslateblue;',
    mediumspringgreen: 'fill:mediumspringgreen;',
    mediumturquoise: 'fill:mediumturquoise;',
    mediumvioletred: 'fill:mediumvioletred;',
    midnightblue: 'fill:midnightblue;',
    mintcream: 'fill:mintcream;',
    mistyrose: 'fill:mistyrose;',
    moccasin: 'fill:moccasin;',
    navajowhite: 'fill:navajowhite;',
    navy: 'fill:navy;',
    none: 'fill:none;',
    oldlace: 'fill:oldlace;',
    olive: 'fill:olive;',
    olivedrab: 'fill:olivedrab;',
    orange: 'fill:orange;',
    orangered: 'fill:orangered;',
    orchid: 'fill:orchid;',
    palegoldenrod: 'fill:palegoldenrod;',
    palegreen: 'fill:palegreen;',
    paleturquoise: 'fill:paleturquoise;',
    palevioletred: 'fill:palevioletred;',
    papayawhip: 'fill:papayawhip;',
    peachpuff: 'fill:peachpuff;',
    peru: 'fill:peru;',
    pink: 'fill:pink;',
    plum: 'fill:plum;',
    powderblue: 'fill:powderblue;',
    purple: 'fill:purple;',
    rebeccapurple: 'fill:rebeccapurple;',
    red: 'fill:red;',
    revert: 'fill:revert;',
    revertLayer: 'fill:revert-layer;',
    rosybrown: 'fill:rosybrown;',
    royalblue: 'fill:royalblue;',
    saddlebrown: 'fill:saddlebrown;',
    salmon: 'fill:salmon;',
    sandybrown: 'fill:sandybrown;',
    seagreen: 'fill:seagreen;',
    seashell: 'fill:seashell;',
    sienna: 'fill:sienna;',
    silver: 'fill:silver;',
    skyblue: 'fill:skyblue;',
    slateblue: 'fill:slateblue;',
    slategray: 'fill:slategray;',
    slategrey: 'fill:slategrey;',
    snow: 'fill:snow;',
    springgreen: 'fill:springgreen;',
    steelblue: 'fill:steelblue;',
    tan: 'fill:tan;',
    teal: 'fill:teal;',
    thistle: 'fill:thistle;',
    tomato: 'fill:tomato;',
    transparent: 'fill:transparent;',
    turquoise: 'fill:turquoise;',
    unset: 'fill:unset;',
    violet: 'fill:violet;',
    wheat: 'fill:wheat;',
    white: 'fill:white;',
    whitesmoke: 'fill:whitesmoke;',
    yellow: 'fill:yellow;',
    yellowgreen: 'fill:yellowgreen;',
  } as const;
}

type FillCssKeywords = Readonly<ReturnType<typeof fillKeywords>>;
export interface FillCss extends FillCssKeywords {}
/** CSS 属性 fill；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
 */
export class FillCss extends CssProperty<Property.Fill> {
  constructor() {
    super('fill');
    initializeFillCss();
  }
}
let fillReady = false;
function initializeFillCss(): void {
  if (fillReady) return;
  Object.assign(FillCss.prototype, fillKeywords());
  Object.freeze(FillCss.prototype);
  fillReady = true;
}

function fillOpacityKeywords() {
  return {
    inherit: 'fill-opacity:inherit;',
    initial: 'fill-opacity:initial;',
    revert: 'fill-opacity:revert;',
    revertLayer: 'fill-opacity:revert-layer;',
    unset: 'fill-opacity:unset;',
  } as const;
}

type FillOpacityCssKeywords = Readonly<ReturnType<typeof fillOpacityKeywords>>;
export interface FillOpacityCss extends FillOpacityCssKeywords {}
/** CSS 属性 fill-opacity；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
 */
export class FillOpacityCss extends CssProperty<Property.FillOpacity> {
  constructor() {
    super('fill-opacity');
    initializeFillOpacityCss();
  }
}
let fillOpacityReady = false;
function initializeFillOpacityCss(): void {
  if (fillOpacityReady) return;
  Object.assign(FillOpacityCss.prototype, fillOpacityKeywords());
  Object.freeze(FillOpacityCss.prototype);
  fillOpacityReady = true;
}

function fillRuleKeywords() {
  return {
    evenodd: 'fill-rule:evenodd;',
    inherit: 'fill-rule:inherit;',
    initial: 'fill-rule:initial;',
    nonzero: 'fill-rule:nonzero;',
    revert: 'fill-rule:revert;',
    revertLayer: 'fill-rule:revert-layer;',
    unset: 'fill-rule:unset;',
  } as const;
}

type FillRuleCssKeywords = Readonly<ReturnType<typeof fillRuleKeywords>>;
export interface FillRuleCss extends FillRuleCssKeywords {}
/** CSS 属性 fill-rule；初始值 nonzero。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
 */
export class FillRuleCss extends CssProperty<Property.FillRule> {
  constructor() {
    super('fill-rule');
    initializeFillRuleCss();
  }
}
let fillRuleReady = false;
function initializeFillRuleCss(): void {
  if (fillRuleReady) return;
  Object.assign(FillRuleCss.prototype, fillRuleKeywords());
  Object.freeze(FillRuleCss.prototype);
  fillRuleReady = true;
}

function filterKeywords() {
  return {
    inherit: 'filter:inherit;',
    initial: 'filter:initial;',
    none: 'filter:none;',
    revert: 'filter:revert;',
    revertLayer: 'filter:revert-layer;',
    unset: 'filter:unset;',
  } as const;
}

type FilterCssKeywords = Readonly<ReturnType<typeof filterKeywords>>;
export interface FilterCss extends FilterCssKeywords {}
/** CSS 属性 filter；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
 */
export class FilterCss extends CssProperty<Property.Filter> {
  constructor() {
    super('filter');
    initializeFilterCss();
  }
}
let filterReady = false;
function initializeFilterCss(): void {
  if (filterReady) return;
  Object.assign(FilterCss.prototype, filterKeywords());
  Object.freeze(FilterCss.prototype);
  filterReady = true;
}

function flexKeywords() {
  return {
    auto: 'flex:auto;',
    content: 'flex:content;',
    fitContent: 'flex:fit-content;',
    inherit: 'flex:inherit;',
    initial: 'flex:initial;',
    maxContent: 'flex:max-content;',
    minContent: 'flex:min-content;',
    none: 'flex:none;',
    revert: 'flex:revert;',
    revertLayer: 'flex:revert-layer;',
    unset: 'flex:unset;',
  } as const;
}

type FlexCssKeywords = Readonly<ReturnType<typeof flexKeywords>>;
export interface FlexCss extends FlexCssKeywords {}
/** CSS 属性 flex。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
 */
export class FlexCss extends LengthCssProperty<Property.Flex> {
  constructor() {
    super('flex');
    initializeFlexCss();
  }
}
let flexReady = false;
function initializeFlexCss(): void {
  if (flexReady) return;
  Object.assign(FlexCss.prototype, flexKeywords());
  Object.freeze(FlexCss.prototype);
  flexReady = true;
}

function flexBasisKeywords() {
  return {
    auto: 'flex-basis:auto;',
    content: 'flex-basis:content;',
    fitContent: 'flex-basis:fit-content;',
    inherit: 'flex-basis:inherit;',
    initial: 'flex-basis:initial;',
    maxContent: 'flex-basis:max-content;',
    minContent: 'flex-basis:min-content;',
    revert: 'flex-basis:revert;',
    revertLayer: 'flex-basis:revert-layer;',
    unset: 'flex-basis:unset;',
  } as const;
}

type FlexBasisCssKeywords = Readonly<ReturnType<typeof flexBasisKeywords>>;
export interface FlexBasisCss extends FlexBasisCssKeywords {}
/** CSS 属性 flex-basis；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
 */
export class FlexBasisCss extends LengthCssProperty<Property.FlexBasis> {
  constructor() {
    super('flex-basis');
    initializeFlexBasisCss();
  }
}
let flexBasisReady = false;
function initializeFlexBasisCss(): void {
  if (flexBasisReady) return;
  Object.assign(FlexBasisCss.prototype, flexBasisKeywords());
  Object.freeze(FlexBasisCss.prototype);
  flexBasisReady = true;
}

function flexDirectionKeywords() {
  return {
    column: 'flex-direction:column;',
    columnReverse: 'flex-direction:column-reverse;',
    inherit: 'flex-direction:inherit;',
    initial: 'flex-direction:initial;',
    revert: 'flex-direction:revert;',
    revertLayer: 'flex-direction:revert-layer;',
    row: 'flex-direction:row;',
    rowReverse: 'flex-direction:row-reverse;',
    unset: 'flex-direction:unset;',
  } as const;
}

type FlexDirectionCssKeywords = Readonly<ReturnType<typeof flexDirectionKeywords>>;
export interface FlexDirectionCss extends FlexDirectionCssKeywords {}
/** CSS 属性 flex-direction；初始值 row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
 */
export class FlexDirectionCss extends CssProperty<Property.FlexDirection> {
  constructor() {
    super('flex-direction');
    initializeFlexDirectionCss();
  }
}
let flexDirectionReady = false;
function initializeFlexDirectionCss(): void {
  if (flexDirectionReady) return;
  Object.assign(FlexDirectionCss.prototype, flexDirectionKeywords());
  Object.freeze(FlexDirectionCss.prototype);
  flexDirectionReady = true;
}

function flexFlowKeywords() {
  return {
    column: 'flex-flow:column;',
    columnReverse: 'flex-flow:column-reverse;',
    inherit: 'flex-flow:inherit;',
    initial: 'flex-flow:initial;',
    nowrap: 'flex-flow:nowrap;',
    revert: 'flex-flow:revert;',
    revertLayer: 'flex-flow:revert-layer;',
    row: 'flex-flow:row;',
    rowReverse: 'flex-flow:row-reverse;',
    unset: 'flex-flow:unset;',
    wrap: 'flex-flow:wrap;',
    wrapReverse: 'flex-flow:wrap-reverse;',
  } as const;
}

type FlexFlowCssKeywords = Readonly<ReturnType<typeof flexFlowKeywords>>;
export interface FlexFlowCss extends FlexFlowCssKeywords {}
/** CSS 属性 flex-flow。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
 */
export class FlexFlowCss extends CssProperty<Property.FlexFlow> {
  constructor() {
    super('flex-flow');
    initializeFlexFlowCss();
  }
}
let flexFlowReady = false;
function initializeFlexFlowCss(): void {
  if (flexFlowReady) return;
  Object.assign(FlexFlowCss.prototype, flexFlowKeywords());
  Object.freeze(FlexFlowCss.prototype);
  flexFlowReady = true;
}

function flexGrowKeywords() {
  return {
    inherit: 'flex-grow:inherit;',
    initial: 'flex-grow:initial;',
    revert: 'flex-grow:revert;',
    revertLayer: 'flex-grow:revert-layer;',
    unset: 'flex-grow:unset;',
  } as const;
}

type FlexGrowCssKeywords = Readonly<ReturnType<typeof flexGrowKeywords>>;
export interface FlexGrowCss extends FlexGrowCssKeywords {}
/** CSS 属性 flex-grow；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
 */
export class FlexGrowCss extends CssProperty<Property.FlexGrow> {
  constructor() {
    super('flex-grow');
    initializeFlexGrowCss();
  }
}
let flexGrowReady = false;
function initializeFlexGrowCss(): void {
  if (flexGrowReady) return;
  Object.assign(FlexGrowCss.prototype, flexGrowKeywords());
  Object.freeze(FlexGrowCss.prototype);
  flexGrowReady = true;
}

function flexShrinkKeywords() {
  return {
    inherit: 'flex-shrink:inherit;',
    initial: 'flex-shrink:initial;',
    revert: 'flex-shrink:revert;',
    revertLayer: 'flex-shrink:revert-layer;',
    unset: 'flex-shrink:unset;',
  } as const;
}

type FlexShrinkCssKeywords = Readonly<ReturnType<typeof flexShrinkKeywords>>;
export interface FlexShrinkCss extends FlexShrinkCssKeywords {}
/** CSS 属性 flex-shrink；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
 */
export class FlexShrinkCss extends CssProperty<Property.FlexShrink> {
  constructor() {
    super('flex-shrink');
    initializeFlexShrinkCss();
  }
}
let flexShrinkReady = false;
function initializeFlexShrinkCss(): void {
  if (flexShrinkReady) return;
  Object.assign(FlexShrinkCss.prototype, flexShrinkKeywords());
  Object.freeze(FlexShrinkCss.prototype);
  flexShrinkReady = true;
}

function flexWrapKeywords() {
  return {
    inherit: 'flex-wrap:inherit;',
    initial: 'flex-wrap:initial;',
    nowrap: 'flex-wrap:nowrap;',
    revert: 'flex-wrap:revert;',
    revertLayer: 'flex-wrap:revert-layer;',
    unset: 'flex-wrap:unset;',
    wrap: 'flex-wrap:wrap;',
    wrapReverse: 'flex-wrap:wrap-reverse;',
  } as const;
}

type FlexWrapCssKeywords = Readonly<ReturnType<typeof flexWrapKeywords>>;
export interface FlexWrapCss extends FlexWrapCssKeywords {}
/** CSS 属性 flex-wrap；初始值 nowrap。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
 */
export class FlexWrapCss extends CssProperty<Property.FlexWrap> {
  constructor() {
    super('flex-wrap');
    initializeFlexWrapCss();
  }
}
let flexWrapReady = false;
function initializeFlexWrapCss(): void {
  if (flexWrapReady) return;
  Object.assign(FlexWrapCss.prototype, flexWrapKeywords());
  Object.freeze(FlexWrapCss.prototype);
  flexWrapReady = true;
}

function floatKeywords() {
  return {
    inherit: 'float:inherit;',
    initial: 'float:initial;',
    inlineEnd: 'float:inline-end;',
    inlineStart: 'float:inline-start;',
    left: 'float:left;',
    none: 'float:none;',
    revert: 'float:revert;',
    revertLayer: 'float:revert-layer;',
    right: 'float:right;',
    unset: 'float:unset;',
  } as const;
}

type FloatCssKeywords = Readonly<ReturnType<typeof floatKeywords>>;
export interface FloatCss extends FloatCssKeywords {}
/** CSS 属性 float；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
 */
export class FloatCss extends CssProperty<Property.Float> {
  constructor() {
    super('float');
    initializeFloatCss();
  }
}
let floatReady = false;
function initializeFloatCss(): void {
  if (floatReady) return;
  Object.assign(FloatCss.prototype, floatKeywords());
  Object.freeze(FloatCss.prototype);
  floatReady = true;
}

function floodColorKeywords() {
  return {
    AccentColor: 'flood-color:AccentColor;',
    AccentColorText: 'flood-color:AccentColorText;',
    ActiveBorder: 'flood-color:ActiveBorder;',
    ActiveCaption: 'flood-color:ActiveCaption;',
    ActiveText: 'flood-color:ActiveText;',
    AppWorkspace: 'flood-color:AppWorkspace;',
    Background: 'flood-color:Background;',
    ButtonBorder: 'flood-color:ButtonBorder;',
    ButtonFace: 'flood-color:ButtonFace;',
    ButtonHighlight: 'flood-color:ButtonHighlight;',
    ButtonShadow: 'flood-color:ButtonShadow;',
    ButtonText: 'flood-color:ButtonText;',
    Canvas: 'flood-color:Canvas;',
    CanvasText: 'flood-color:CanvasText;',
    CaptionText: 'flood-color:CaptionText;',
    Field: 'flood-color:Field;',
    FieldText: 'flood-color:FieldText;',
    GrayText: 'flood-color:GrayText;',
    Highlight: 'flood-color:Highlight;',
    HighlightText: 'flood-color:HighlightText;',
    InactiveBorder: 'flood-color:InactiveBorder;',
    InactiveCaption: 'flood-color:InactiveCaption;',
    InactiveCaptionText: 'flood-color:InactiveCaptionText;',
    InfoBackground: 'flood-color:InfoBackground;',
    InfoText: 'flood-color:InfoText;',
    LinkText: 'flood-color:LinkText;',
    Mark: 'flood-color:Mark;',
    MarkText: 'flood-color:MarkText;',
    Menu: 'flood-color:Menu;',
    MenuText: 'flood-color:MenuText;',
    Scrollbar: 'flood-color:Scrollbar;',
    SelectedItem: 'flood-color:SelectedItem;',
    SelectedItemText: 'flood-color:SelectedItemText;',
    ThreeDDarkShadow: 'flood-color:ThreeDDarkShadow;',
    ThreeDFace: 'flood-color:ThreeDFace;',
    ThreeDHighlight: 'flood-color:ThreeDHighlight;',
    ThreeDLightShadow: 'flood-color:ThreeDLightShadow;',
    ThreeDShadow: 'flood-color:ThreeDShadow;',
    VisitedText: 'flood-color:VisitedText;',
    Window: 'flood-color:Window;',
    WindowFrame: 'flood-color:WindowFrame;',
    WindowText: 'flood-color:WindowText;',
    aliceblue: 'flood-color:aliceblue;',
    antiquewhite: 'flood-color:antiquewhite;',
    aqua: 'flood-color:aqua;',
    aquamarine: 'flood-color:aquamarine;',
    azure: 'flood-color:azure;',
    beige: 'flood-color:beige;',
    bisque: 'flood-color:bisque;',
    black: 'flood-color:black;',
    blanchedalmond: 'flood-color:blanchedalmond;',
    blue: 'flood-color:blue;',
    blueviolet: 'flood-color:blueviolet;',
    brown: 'flood-color:brown;',
    burlywood: 'flood-color:burlywood;',
    cadetblue: 'flood-color:cadetblue;',
    chartreuse: 'flood-color:chartreuse;',
    chocolate: 'flood-color:chocolate;',
    coral: 'flood-color:coral;',
    cornflowerblue: 'flood-color:cornflowerblue;',
    cornsilk: 'flood-color:cornsilk;',
    crimson: 'flood-color:crimson;',
    currentColor: 'flood-color:currentColor;',
    cyan: 'flood-color:cyan;',
    darkblue: 'flood-color:darkblue;',
    darkcyan: 'flood-color:darkcyan;',
    darkgoldenrod: 'flood-color:darkgoldenrod;',
    darkgray: 'flood-color:darkgray;',
    darkgreen: 'flood-color:darkgreen;',
    darkgrey: 'flood-color:darkgrey;',
    darkkhaki: 'flood-color:darkkhaki;',
    darkmagenta: 'flood-color:darkmagenta;',
    darkolivegreen: 'flood-color:darkolivegreen;',
    darkorange: 'flood-color:darkorange;',
    darkorchid: 'flood-color:darkorchid;',
    darkred: 'flood-color:darkred;',
    darksalmon: 'flood-color:darksalmon;',
    darkseagreen: 'flood-color:darkseagreen;',
    darkslateblue: 'flood-color:darkslateblue;',
    darkslategray: 'flood-color:darkslategray;',
    darkslategrey: 'flood-color:darkslategrey;',
    darkturquoise: 'flood-color:darkturquoise;',
    darkviolet: 'flood-color:darkviolet;',
    deeppink: 'flood-color:deeppink;',
    deepskyblue: 'flood-color:deepskyblue;',
    dimgray: 'flood-color:dimgray;',
    dimgrey: 'flood-color:dimgrey;',
    dodgerblue: 'flood-color:dodgerblue;',
    firebrick: 'flood-color:firebrick;',
    floralwhite: 'flood-color:floralwhite;',
    forestgreen: 'flood-color:forestgreen;',
    fuchsia: 'flood-color:fuchsia;',
    gainsboro: 'flood-color:gainsboro;',
    ghostwhite: 'flood-color:ghostwhite;',
    gold: 'flood-color:gold;',
    goldenrod: 'flood-color:goldenrod;',
    gray: 'flood-color:gray;',
    green: 'flood-color:green;',
    greenyellow: 'flood-color:greenyellow;',
    grey: 'flood-color:grey;',
    honeydew: 'flood-color:honeydew;',
    hotpink: 'flood-color:hotpink;',
    indianred: 'flood-color:indianred;',
    indigo: 'flood-color:indigo;',
    inherit: 'flood-color:inherit;',
    initial: 'flood-color:initial;',
    ivory: 'flood-color:ivory;',
    khaki: 'flood-color:khaki;',
    lavender: 'flood-color:lavender;',
    lavenderblush: 'flood-color:lavenderblush;',
    lawngreen: 'flood-color:lawngreen;',
    lemonchiffon: 'flood-color:lemonchiffon;',
    lightblue: 'flood-color:lightblue;',
    lightcoral: 'flood-color:lightcoral;',
    lightcyan: 'flood-color:lightcyan;',
    lightgoldenrodyellow: 'flood-color:lightgoldenrodyellow;',
    lightgray: 'flood-color:lightgray;',
    lightgreen: 'flood-color:lightgreen;',
    lightgrey: 'flood-color:lightgrey;',
    lightpink: 'flood-color:lightpink;',
    lightsalmon: 'flood-color:lightsalmon;',
    lightseagreen: 'flood-color:lightseagreen;',
    lightskyblue: 'flood-color:lightskyblue;',
    lightslategray: 'flood-color:lightslategray;',
    lightslategrey: 'flood-color:lightslategrey;',
    lightsteelblue: 'flood-color:lightsteelblue;',
    lightyellow: 'flood-color:lightyellow;',
    lime: 'flood-color:lime;',
    limegreen: 'flood-color:limegreen;',
    linen: 'flood-color:linen;',
    magenta: 'flood-color:magenta;',
    maroon: 'flood-color:maroon;',
    mediumaquamarine: 'flood-color:mediumaquamarine;',
    mediumblue: 'flood-color:mediumblue;',
    mediumorchid: 'flood-color:mediumorchid;',
    mediumpurple: 'flood-color:mediumpurple;',
    mediumseagreen: 'flood-color:mediumseagreen;',
    mediumslateblue: 'flood-color:mediumslateblue;',
    mediumspringgreen: 'flood-color:mediumspringgreen;',
    mediumturquoise: 'flood-color:mediumturquoise;',
    mediumvioletred: 'flood-color:mediumvioletred;',
    midnightblue: 'flood-color:midnightblue;',
    mintcream: 'flood-color:mintcream;',
    mistyrose: 'flood-color:mistyrose;',
    moccasin: 'flood-color:moccasin;',
    navajowhite: 'flood-color:navajowhite;',
    navy: 'flood-color:navy;',
    oldlace: 'flood-color:oldlace;',
    olive: 'flood-color:olive;',
    olivedrab: 'flood-color:olivedrab;',
    orange: 'flood-color:orange;',
    orangered: 'flood-color:orangered;',
    orchid: 'flood-color:orchid;',
    palegoldenrod: 'flood-color:palegoldenrod;',
    palegreen: 'flood-color:palegreen;',
    paleturquoise: 'flood-color:paleturquoise;',
    palevioletred: 'flood-color:palevioletred;',
    papayawhip: 'flood-color:papayawhip;',
    peachpuff: 'flood-color:peachpuff;',
    peru: 'flood-color:peru;',
    pink: 'flood-color:pink;',
    plum: 'flood-color:plum;',
    powderblue: 'flood-color:powderblue;',
    purple: 'flood-color:purple;',
    rebeccapurple: 'flood-color:rebeccapurple;',
    red: 'flood-color:red;',
    revert: 'flood-color:revert;',
    revertLayer: 'flood-color:revert-layer;',
    rosybrown: 'flood-color:rosybrown;',
    royalblue: 'flood-color:royalblue;',
    saddlebrown: 'flood-color:saddlebrown;',
    salmon: 'flood-color:salmon;',
    sandybrown: 'flood-color:sandybrown;',
    seagreen: 'flood-color:seagreen;',
    seashell: 'flood-color:seashell;',
    sienna: 'flood-color:sienna;',
    silver: 'flood-color:silver;',
    skyblue: 'flood-color:skyblue;',
    slateblue: 'flood-color:slateblue;',
    slategray: 'flood-color:slategray;',
    slategrey: 'flood-color:slategrey;',
    snow: 'flood-color:snow;',
    springgreen: 'flood-color:springgreen;',
    steelblue: 'flood-color:steelblue;',
    tan: 'flood-color:tan;',
    teal: 'flood-color:teal;',
    thistle: 'flood-color:thistle;',
    tomato: 'flood-color:tomato;',
    transparent: 'flood-color:transparent;',
    turquoise: 'flood-color:turquoise;',
    unset: 'flood-color:unset;',
    violet: 'flood-color:violet;',
    wheat: 'flood-color:wheat;',
    white: 'flood-color:white;',
    whitesmoke: 'flood-color:whitesmoke;',
    yellow: 'flood-color:yellow;',
    yellowgreen: 'flood-color:yellowgreen;',
  } as const;
}

type FloodColorCssKeywords = Readonly<ReturnType<typeof floodColorKeywords>>;
export interface FloodColorCss extends FloodColorCssKeywords {}
/** CSS 属性 flood-color；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
 */
export class FloodColorCss extends CssProperty<Property.FloodColor> {
  constructor() {
    super('flood-color');
    initializeFloodColorCss();
  }
}
let floodColorReady = false;
function initializeFloodColorCss(): void {
  if (floodColorReady) return;
  Object.assign(FloodColorCss.prototype, floodColorKeywords());
  Object.freeze(FloodColorCss.prototype);
  floodColorReady = true;
}

function floodOpacityKeywords() {
  return {
    inherit: 'flood-opacity:inherit;',
    initial: 'flood-opacity:initial;',
    revert: 'flood-opacity:revert;',
    revertLayer: 'flood-opacity:revert-layer;',
    unset: 'flood-opacity:unset;',
  } as const;
}

type FloodOpacityCssKeywords = Readonly<ReturnType<typeof floodOpacityKeywords>>;
export interface FloodOpacityCss extends FloodOpacityCssKeywords {}
/** CSS 属性 flood-opacity；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
 */
export class FloodOpacityCss extends CssProperty<Property.FloodOpacity> {
  constructor() {
    super('flood-opacity');
    initializeFloodOpacityCss();
  }
}
let floodOpacityReady = false;
function initializeFloodOpacityCss(): void {
  if (floodOpacityReady) return;
  Object.assign(FloodOpacityCss.prototype, floodOpacityKeywords());
  Object.freeze(FloodOpacityCss.prototype);
  floodOpacityReady = true;
}

function fontKeywords() {
  return {
    caption: 'font:caption;',
    icon: 'font:icon;',
    inherit: 'font:inherit;',
    initial: 'font:initial;',
    menu: 'font:menu;',
    messageBox: 'font:message-box;',
    revert: 'font:revert;',
    revertLayer: 'font:revert-layer;',
    smallCaption: 'font:small-caption;',
    statusBar: 'font:status-bar;',
    unset: 'font:unset;',
  } as const;
}

type FontCssKeywords = Readonly<ReturnType<typeof fontKeywords>>;
export interface FontCss extends FontCssKeywords {}
/** CSS 属性 font。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
 */
export class FontCss extends CssProperty<Property.Font> {
  constructor() {
    super('font');
    initializeFontCss();
  }
}
let fontReady = false;
function initializeFontCss(): void {
  if (fontReady) return;
  Object.assign(FontCss.prototype, fontKeywords());
  Object.freeze(FontCss.prototype);
  fontReady = true;
}

function fontFamilyKeywords() {
  return {
    AppleSystem: 'font-family:-apple-system;',
    cursive: 'font-family:cursive;',
    emoji: 'font-family:emoji;',
    fangsong: 'font-family:fangsong;',
    fantasy: 'font-family:fantasy;',
    inherit: 'font-family:inherit;',
    initial: 'font-family:initial;',
    math: 'font-family:math;',
    monospace: 'font-family:monospace;',
    revert: 'font-family:revert;',
    revertLayer: 'font-family:revert-layer;',
    sansSerif: 'font-family:sans-serif;',
    serif: 'font-family:serif;',
    systemUi: 'font-family:system-ui;',
    uiMonospace: 'font-family:ui-monospace;',
    uiRounded: 'font-family:ui-rounded;',
    uiSansSerif: 'font-family:ui-sans-serif;',
    uiSerif: 'font-family:ui-serif;',
    unset: 'font-family:unset;',
  } as const;
}

type FontFamilyCssKeywords = Readonly<ReturnType<typeof fontFamilyKeywords>>;
export interface FontFamilyCss extends FontFamilyCssKeywords {}
/** CSS 属性 font-family。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
 */
export class FontFamilyCss extends CssProperty<Property.FontFamily> {
  constructor() {
    super('font-family');
    initializeFontFamilyCss();
  }
}
let fontFamilyReady = false;
function initializeFontFamilyCss(): void {
  if (fontFamilyReady) return;
  Object.assign(FontFamilyCss.prototype, fontFamilyKeywords());
  Object.freeze(FontFamilyCss.prototype);
  fontFamilyReady = true;
}

function fontFeatureSettingsKeywords() {
  return {
    inherit: 'font-feature-settings:inherit;',
    initial: 'font-feature-settings:initial;',
    normal: 'font-feature-settings:normal;',
    revert: 'font-feature-settings:revert;',
    revertLayer: 'font-feature-settings:revert-layer;',
    unset: 'font-feature-settings:unset;',
  } as const;
}

type FontFeatureSettingsCssKeywords = Readonly<ReturnType<typeof fontFeatureSettingsKeywords>>;
export interface FontFeatureSettingsCss extends FontFeatureSettingsCssKeywords {}
/** CSS 属性 font-feature-settings；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
 */
export class FontFeatureSettingsCss extends CssProperty<Property.FontFeatureSettings> {
  constructor() {
    super('font-feature-settings');
    initializeFontFeatureSettingsCss();
  }
}
let fontFeatureSettingsReady = false;
function initializeFontFeatureSettingsCss(): void {
  if (fontFeatureSettingsReady) return;
  Object.assign(FontFeatureSettingsCss.prototype, fontFeatureSettingsKeywords());
  Object.freeze(FontFeatureSettingsCss.prototype);
  fontFeatureSettingsReady = true;
}

function fontKerningKeywords() {
  return {
    auto: 'font-kerning:auto;',
    inherit: 'font-kerning:inherit;',
    initial: 'font-kerning:initial;',
    none: 'font-kerning:none;',
    normal: 'font-kerning:normal;',
    revert: 'font-kerning:revert;',
    revertLayer: 'font-kerning:revert-layer;',
    unset: 'font-kerning:unset;',
  } as const;
}

type FontKerningCssKeywords = Readonly<ReturnType<typeof fontKerningKeywords>>;
export interface FontKerningCss extends FontKerningCssKeywords {}
/** CSS 属性 font-kerning；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
 */
export class FontKerningCss extends CssProperty<Property.FontKerning> {
  constructor() {
    super('font-kerning');
    initializeFontKerningCss();
  }
}
let fontKerningReady = false;
function initializeFontKerningCss(): void {
  if (fontKerningReady) return;
  Object.assign(FontKerningCss.prototype, fontKerningKeywords());
  Object.freeze(FontKerningCss.prototype);
  fontKerningReady = true;
}

function fontLanguageOverrideKeywords() {
  return {
    inherit: 'font-language-override:inherit;',
    initial: 'font-language-override:initial;',
    normal: 'font-language-override:normal;',
    revert: 'font-language-override:revert;',
    revertLayer: 'font-language-override:revert-layer;',
    unset: 'font-language-override:unset;',
  } as const;
}

type FontLanguageOverrideCssKeywords = Readonly<ReturnType<typeof fontLanguageOverrideKeywords>>;
export interface FontLanguageOverrideCss extends FontLanguageOverrideCssKeywords {}
/** CSS 属性 font-language-override；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
 */
export class FontLanguageOverrideCss extends CssProperty<Property.FontLanguageOverride> {
  constructor() {
    super('font-language-override');
    initializeFontLanguageOverrideCss();
  }
}
let fontLanguageOverrideReady = false;
function initializeFontLanguageOverrideCss(): void {
  if (fontLanguageOverrideReady) return;
  Object.assign(FontLanguageOverrideCss.prototype, fontLanguageOverrideKeywords());
  Object.freeze(FontLanguageOverrideCss.prototype);
  fontLanguageOverrideReady = true;
}

function fontOpticalSizingKeywords() {
  return {
    auto: 'font-optical-sizing:auto;',
    inherit: 'font-optical-sizing:inherit;',
    initial: 'font-optical-sizing:initial;',
    none: 'font-optical-sizing:none;',
    revert: 'font-optical-sizing:revert;',
    revertLayer: 'font-optical-sizing:revert-layer;',
    unset: 'font-optical-sizing:unset;',
  } as const;
}

type FontOpticalSizingCssKeywords = Readonly<ReturnType<typeof fontOpticalSizingKeywords>>;
export interface FontOpticalSizingCss extends FontOpticalSizingCssKeywords {}
/** CSS 属性 font-optical-sizing；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
 */
export class FontOpticalSizingCss extends CssProperty<Property.FontOpticalSizing> {
  constructor() {
    super('font-optical-sizing');
    initializeFontOpticalSizingCss();
  }
}
let fontOpticalSizingReady = false;
function initializeFontOpticalSizingCss(): void {
  if (fontOpticalSizingReady) return;
  Object.assign(FontOpticalSizingCss.prototype, fontOpticalSizingKeywords());
  Object.freeze(FontOpticalSizingCss.prototype);
  fontOpticalSizingReady = true;
}

function fontPaletteKeywords() {
  return {
    dark: 'font-palette:dark;',
    inherit: 'font-palette:inherit;',
    initial: 'font-palette:initial;',
    light: 'font-palette:light;',
    normal: 'font-palette:normal;',
    revert: 'font-palette:revert;',
    revertLayer: 'font-palette:revert-layer;',
    unset: 'font-palette:unset;',
  } as const;
}

type FontPaletteCssKeywords = Readonly<ReturnType<typeof fontPaletteKeywords>>;
export interface FontPaletteCss extends FontPaletteCssKeywords {}
/** CSS 属性 font-palette；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
 */
export class FontPaletteCss extends CssProperty<Property.FontPalette> {
  constructor() {
    super('font-palette');
    initializeFontPaletteCss();
  }
}
let fontPaletteReady = false;
function initializeFontPaletteCss(): void {
  if (fontPaletteReady) return;
  Object.assign(FontPaletteCss.prototype, fontPaletteKeywords());
  Object.freeze(FontPaletteCss.prototype);
  fontPaletteReady = true;
}

function fontSizeKeywords() {
  return {
    inherit: 'font-size:inherit;',
    initial: 'font-size:initial;',
    large: 'font-size:large;',
    larger: 'font-size:larger;',
    math: 'font-size:math;',
    medium: 'font-size:medium;',
    revert: 'font-size:revert;',
    revertLayer: 'font-size:revert-layer;',
    small: 'font-size:small;',
    smaller: 'font-size:smaller;',
    unset: 'font-size:unset;',
    xLarge: 'font-size:x-large;',
    xSmall: 'font-size:x-small;',
    xxLarge: 'font-size:xx-large;',
    xxSmall: 'font-size:xx-small;',
    xxxLarge: 'font-size:xxx-large;',
  } as const;
}

type FontSizeCssKeywords = Readonly<ReturnType<typeof fontSizeKeywords>>;
export interface FontSizeCss extends FontSizeCssKeywords {}
/** CSS 属性 font-size；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
 */
export class FontSizeCss extends LengthCssProperty<Property.FontSize> {
  constructor() {
    super('font-size');
    initializeFontSizeCss();
  }
}
let fontSizeReady = false;
function initializeFontSizeCss(): void {
  if (fontSizeReady) return;
  Object.assign(FontSizeCss.prototype, fontSizeKeywords());
  Object.freeze(FontSizeCss.prototype);
  fontSizeReady = true;
}

function fontSizeAdjustKeywords() {
  return {
    fromFont: 'font-size-adjust:from-font;',
    inherit: 'font-size-adjust:inherit;',
    initial: 'font-size-adjust:initial;',
    none: 'font-size-adjust:none;',
    revert: 'font-size-adjust:revert;',
    revertLayer: 'font-size-adjust:revert-layer;',
    unset: 'font-size-adjust:unset;',
  } as const;
}

type FontSizeAdjustCssKeywords = Readonly<ReturnType<typeof fontSizeAdjustKeywords>>;
export interface FontSizeAdjustCss extends FontSizeAdjustCssKeywords {}
/** CSS 属性 font-size-adjust；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
 */
export class FontSizeAdjustCss extends CssProperty<Property.FontSizeAdjust> {
  constructor() {
    super('font-size-adjust');
    initializeFontSizeAdjustCss();
  }
}
let fontSizeAdjustReady = false;
function initializeFontSizeAdjustCss(): void {
  if (fontSizeAdjustReady) return;
  Object.assign(FontSizeAdjustCss.prototype, fontSizeAdjustKeywords());
  Object.freeze(FontSizeAdjustCss.prototype);
  fontSizeAdjustReady = true;
}

function fontSmoothKeywords() {
  return {
    always: 'font-smooth:always;',
    auto: 'font-smooth:auto;',
    inherit: 'font-smooth:inherit;',
    initial: 'font-smooth:initial;',
    large: 'font-smooth:large;',
    medium: 'font-smooth:medium;',
    never: 'font-smooth:never;',
    revert: 'font-smooth:revert;',
    revertLayer: 'font-smooth:revert-layer;',
    small: 'font-smooth:small;',
    unset: 'font-smooth:unset;',
    xLarge: 'font-smooth:x-large;',
    xSmall: 'font-smooth:x-small;',
    xxLarge: 'font-smooth:xx-large;',
    xxSmall: 'font-smooth:xx-small;',
    xxxLarge: 'font-smooth:xxx-large;',
  } as const;
}

type FontSmoothCssKeywords = Readonly<ReturnType<typeof fontSmoothKeywords>>;
export interface FontSmoothCss extends FontSmoothCssKeywords {}
/** CSS 属性 font-smooth；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
 */
export class FontSmoothCss extends LengthCssProperty<Property.FontSmooth> {
  constructor() {
    super('font-smooth');
    initializeFontSmoothCss();
  }
}
let fontSmoothReady = false;
function initializeFontSmoothCss(): void {
  if (fontSmoothReady) return;
  Object.assign(FontSmoothCss.prototype, fontSmoothKeywords());
  Object.freeze(FontSmoothCss.prototype);
  fontSmoothReady = true;
}

function fontStretchKeywords() {
  return {
    condensed: 'font-stretch:condensed;',
    expanded: 'font-stretch:expanded;',
    extraCondensed: 'font-stretch:extra-condensed;',
    extraExpanded: 'font-stretch:extra-expanded;',
    inherit: 'font-stretch:inherit;',
    initial: 'font-stretch:initial;',
    normal: 'font-stretch:normal;',
    revert: 'font-stretch:revert;',
    revertLayer: 'font-stretch:revert-layer;',
    semiCondensed: 'font-stretch:semi-condensed;',
    semiExpanded: 'font-stretch:semi-expanded;',
    ultraCondensed: 'font-stretch:ultra-condensed;',
    ultraExpanded: 'font-stretch:ultra-expanded;',
    unset: 'font-stretch:unset;',
  } as const;
}

type FontStretchCssKeywords = Readonly<ReturnType<typeof fontStretchKeywords>>;
export interface FontStretchCss extends FontStretchCssKeywords {}
/** CSS 属性 font-stretch。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
 */
export class FontStretchCss extends CssProperty<Property.FontStretch> {
  constructor() {
    super('font-stretch');
    initializeFontStretchCss();
  }
}
let fontStretchReady = false;
function initializeFontStretchCss(): void {
  if (fontStretchReady) return;
  Object.assign(FontStretchCss.prototype, fontStretchKeywords());
  Object.freeze(FontStretchCss.prototype);
  fontStretchReady = true;
}

function fontStyleKeywords() {
  return {
    inherit: 'font-style:inherit;',
    initial: 'font-style:initial;',
    italic: 'font-style:italic;',
    normal: 'font-style:normal;',
    oblique: 'font-style:oblique;',
    revert: 'font-style:revert;',
    revertLayer: 'font-style:revert-layer;',
    unset: 'font-style:unset;',
  } as const;
}

type FontStyleCssKeywords = Readonly<ReturnType<typeof fontStyleKeywords>>;
export interface FontStyleCss extends FontStyleCssKeywords {}
/** CSS 属性 font-style；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
 */
export class FontStyleCss extends CssProperty<Property.FontStyle> {
  constructor() {
    super('font-style');
    initializeFontStyleCss();
  }
}
let fontStyleReady = false;
function initializeFontStyleCss(): void {
  if (fontStyleReady) return;
  Object.assign(FontStyleCss.prototype, fontStyleKeywords());
  Object.freeze(FontStyleCss.prototype);
  fontStyleReady = true;
}

function fontSynthesisKeywords() {
  return {
    inherit: 'font-synthesis:inherit;',
    initial: 'font-synthesis:initial;',
    none: 'font-synthesis:none;',
    position: 'font-synthesis:position;',
    revert: 'font-synthesis:revert;',
    revertLayer: 'font-synthesis:revert-layer;',
    smallCaps: 'font-synthesis:small-caps;',
    style: 'font-synthesis:style;',
    unset: 'font-synthesis:unset;',
    weight: 'font-synthesis:weight;',
  } as const;
}

type FontSynthesisCssKeywords = Readonly<ReturnType<typeof fontSynthesisKeywords>>;
export interface FontSynthesisCss extends FontSynthesisCssKeywords {}
/** CSS 属性 font-synthesis；初始值 weight style small-caps position 。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
 */
export class FontSynthesisCss extends CssProperty<Property.FontSynthesis> {
  constructor() {
    super('font-synthesis');
    initializeFontSynthesisCss();
  }
}
let fontSynthesisReady = false;
function initializeFontSynthesisCss(): void {
  if (fontSynthesisReady) return;
  Object.assign(FontSynthesisCss.prototype, fontSynthesisKeywords());
  Object.freeze(FontSynthesisCss.prototype);
  fontSynthesisReady = true;
}

function fontSynthesisPositionKeywords() {
  return {
    auto: 'font-synthesis-position:auto;',
    inherit: 'font-synthesis-position:inherit;',
    initial: 'font-synthesis-position:initial;',
    none: 'font-synthesis-position:none;',
    revert: 'font-synthesis-position:revert;',
    revertLayer: 'font-synthesis-position:revert-layer;',
    unset: 'font-synthesis-position:unset;',
  } as const;
}

type FontSynthesisPositionCssKeywords = Readonly<ReturnType<typeof fontSynthesisPositionKeywords>>;
export interface FontSynthesisPositionCss extends FontSynthesisPositionCssKeywords {}
/** CSS 属性 font-synthesis-position；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
 */
export class FontSynthesisPositionCss extends CssProperty<Property.FontSynthesisPosition> {
  constructor() {
    super('font-synthesis-position');
    initializeFontSynthesisPositionCss();
  }
}
let fontSynthesisPositionReady = false;
function initializeFontSynthesisPositionCss(): void {
  if (fontSynthesisPositionReady) return;
  Object.assign(FontSynthesisPositionCss.prototype, fontSynthesisPositionKeywords());
  Object.freeze(FontSynthesisPositionCss.prototype);
  fontSynthesisPositionReady = true;
}

function fontSynthesisSmallCapsKeywords() {
  return {
    auto: 'font-synthesis-small-caps:auto;',
    inherit: 'font-synthesis-small-caps:inherit;',
    initial: 'font-synthesis-small-caps:initial;',
    none: 'font-synthesis-small-caps:none;',
    revert: 'font-synthesis-small-caps:revert;',
    revertLayer: 'font-synthesis-small-caps:revert-layer;',
    unset: 'font-synthesis-small-caps:unset;',
  } as const;
}

type FontSynthesisSmallCapsCssKeywords = Readonly<
  ReturnType<typeof fontSynthesisSmallCapsKeywords>
>;
export interface FontSynthesisSmallCapsCss extends FontSynthesisSmallCapsCssKeywords {}
/** CSS 属性 font-synthesis-small-caps；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
 */
export class FontSynthesisSmallCapsCss extends CssProperty<Property.FontSynthesisSmallCaps> {
  constructor() {
    super('font-synthesis-small-caps');
    initializeFontSynthesisSmallCapsCss();
  }
}
let fontSynthesisSmallCapsReady = false;
function initializeFontSynthesisSmallCapsCss(): void {
  if (fontSynthesisSmallCapsReady) return;
  Object.assign(FontSynthesisSmallCapsCss.prototype, fontSynthesisSmallCapsKeywords());
  Object.freeze(FontSynthesisSmallCapsCss.prototype);
  fontSynthesisSmallCapsReady = true;
}

function fontSynthesisStyleKeywords() {
  return {
    auto: 'font-synthesis-style:auto;',
    inherit: 'font-synthesis-style:inherit;',
    initial: 'font-synthesis-style:initial;',
    none: 'font-synthesis-style:none;',
    revert: 'font-synthesis-style:revert;',
    revertLayer: 'font-synthesis-style:revert-layer;',
    unset: 'font-synthesis-style:unset;',
  } as const;
}

type FontSynthesisStyleCssKeywords = Readonly<ReturnType<typeof fontSynthesisStyleKeywords>>;
export interface FontSynthesisStyleCss extends FontSynthesisStyleCssKeywords {}
/** CSS 属性 font-synthesis-style；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
 */
export class FontSynthesisStyleCss extends CssProperty<Property.FontSynthesisStyle> {
  constructor() {
    super('font-synthesis-style');
    initializeFontSynthesisStyleCss();
  }
}
let fontSynthesisStyleReady = false;
function initializeFontSynthesisStyleCss(): void {
  if (fontSynthesisStyleReady) return;
  Object.assign(FontSynthesisStyleCss.prototype, fontSynthesisStyleKeywords());
  Object.freeze(FontSynthesisStyleCss.prototype);
  fontSynthesisStyleReady = true;
}

function fontSynthesisWeightKeywords() {
  return {
    auto: 'font-synthesis-weight:auto;',
    inherit: 'font-synthesis-weight:inherit;',
    initial: 'font-synthesis-weight:initial;',
    none: 'font-synthesis-weight:none;',
    revert: 'font-synthesis-weight:revert;',
    revertLayer: 'font-synthesis-weight:revert-layer;',
    unset: 'font-synthesis-weight:unset;',
  } as const;
}

type FontSynthesisWeightCssKeywords = Readonly<ReturnType<typeof fontSynthesisWeightKeywords>>;
export interface FontSynthesisWeightCss extends FontSynthesisWeightCssKeywords {}
/** CSS 属性 font-synthesis-weight；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
 */
export class FontSynthesisWeightCss extends CssProperty<Property.FontSynthesisWeight> {
  constructor() {
    super('font-synthesis-weight');
    initializeFontSynthesisWeightCss();
  }
}
let fontSynthesisWeightReady = false;
function initializeFontSynthesisWeightCss(): void {
  if (fontSynthesisWeightReady) return;
  Object.assign(FontSynthesisWeightCss.prototype, fontSynthesisWeightKeywords());
  Object.freeze(FontSynthesisWeightCss.prototype);
  fontSynthesisWeightReady = true;
}

function fontVariantKeywords() {
  return {
    allPetiteCaps: 'font-variant:all-petite-caps;',
    allSmallCaps: 'font-variant:all-small-caps;',
    commonLigatures: 'font-variant:common-ligatures;',
    contextual: 'font-variant:contextual;',
    diagonalFractions: 'font-variant:diagonal-fractions;',
    discretionaryLigatures: 'font-variant:discretionary-ligatures;',
    fullWidth: 'font-variant:full-width;',
    historicalForms: 'font-variant:historical-forms;',
    historicalLigatures: 'font-variant:historical-ligatures;',
    inherit: 'font-variant:inherit;',
    initial: 'font-variant:initial;',
    jis04: 'font-variant:jis04;',
    jis78: 'font-variant:jis78;',
    jis83: 'font-variant:jis83;',
    jis90: 'font-variant:jis90;',
    liningNums: 'font-variant:lining-nums;',
    noCommonLigatures: 'font-variant:no-common-ligatures;',
    noContextual: 'font-variant:no-contextual;',
    noDiscretionaryLigatures: 'font-variant:no-discretionary-ligatures;',
    noHistoricalLigatures: 'font-variant:no-historical-ligatures;',
    none: 'font-variant:none;',
    normal: 'font-variant:normal;',
    oldstyleNums: 'font-variant:oldstyle-nums;',
    ordinal: 'font-variant:ordinal;',
    petiteCaps: 'font-variant:petite-caps;',
    proportionalNums: 'font-variant:proportional-nums;',
    proportionalWidth: 'font-variant:proportional-width;',
    revert: 'font-variant:revert;',
    revertLayer: 'font-variant:revert-layer;',
    ruby: 'font-variant:ruby;',
    simplified: 'font-variant:simplified;',
    slashedZero: 'font-variant:slashed-zero;',
    smallCaps: 'font-variant:small-caps;',
    stackedFractions: 'font-variant:stacked-fractions;',
    tabularNums: 'font-variant:tabular-nums;',
    titlingCaps: 'font-variant:titling-caps;',
    traditional: 'font-variant:traditional;',
    unicase: 'font-variant:unicase;',
    unset: 'font-variant:unset;',
  } as const;
}

type FontVariantCssKeywords = Readonly<ReturnType<typeof fontVariantKeywords>>;
export interface FontVariantCss extends FontVariantCssKeywords {}
/** CSS 属性 font-variant；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
 */
export class FontVariantCss extends CssProperty<Property.FontVariant> {
  constructor() {
    super('font-variant');
    initializeFontVariantCss();
  }
}
let fontVariantReady = false;
function initializeFontVariantCss(): void {
  if (fontVariantReady) return;
  Object.assign(FontVariantCss.prototype, fontVariantKeywords());
  Object.freeze(FontVariantCss.prototype);
  fontVariantReady = true;
}

function fontVariantAlternatesKeywords() {
  return {
    historicalForms: 'font-variant-alternates:historical-forms;',
    inherit: 'font-variant-alternates:inherit;',
    initial: 'font-variant-alternates:initial;',
    normal: 'font-variant-alternates:normal;',
    revert: 'font-variant-alternates:revert;',
    revertLayer: 'font-variant-alternates:revert-layer;',
    unset: 'font-variant-alternates:unset;',
  } as const;
}

type FontVariantAlternatesCssKeywords = Readonly<ReturnType<typeof fontVariantAlternatesKeywords>>;
export interface FontVariantAlternatesCss extends FontVariantAlternatesCssKeywords {}
/** CSS 属性 font-variant-alternates；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
 */
export class FontVariantAlternatesCss extends CssProperty<Property.FontVariantAlternates> {
  constructor() {
    super('font-variant-alternates');
    initializeFontVariantAlternatesCss();
  }
}
let fontVariantAlternatesReady = false;
function initializeFontVariantAlternatesCss(): void {
  if (fontVariantAlternatesReady) return;
  Object.assign(FontVariantAlternatesCss.prototype, fontVariantAlternatesKeywords());
  Object.freeze(FontVariantAlternatesCss.prototype);
  fontVariantAlternatesReady = true;
}

function fontVariantCapsKeywords() {
  return {
    allPetiteCaps: 'font-variant-caps:all-petite-caps;',
    allSmallCaps: 'font-variant-caps:all-small-caps;',
    inherit: 'font-variant-caps:inherit;',
    initial: 'font-variant-caps:initial;',
    normal: 'font-variant-caps:normal;',
    petiteCaps: 'font-variant-caps:petite-caps;',
    revert: 'font-variant-caps:revert;',
    revertLayer: 'font-variant-caps:revert-layer;',
    smallCaps: 'font-variant-caps:small-caps;',
    titlingCaps: 'font-variant-caps:titling-caps;',
    unicase: 'font-variant-caps:unicase;',
    unset: 'font-variant-caps:unset;',
  } as const;
}

type FontVariantCapsCssKeywords = Readonly<ReturnType<typeof fontVariantCapsKeywords>>;
export interface FontVariantCapsCss extends FontVariantCapsCssKeywords {}
/** CSS 属性 font-variant-caps；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
 */
export class FontVariantCapsCss extends CssProperty<Property.FontVariantCaps> {
  constructor() {
    super('font-variant-caps');
    initializeFontVariantCapsCss();
  }
}
let fontVariantCapsReady = false;
function initializeFontVariantCapsCss(): void {
  if (fontVariantCapsReady) return;
  Object.assign(FontVariantCapsCss.prototype, fontVariantCapsKeywords());
  Object.freeze(FontVariantCapsCss.prototype);
  fontVariantCapsReady = true;
}

function fontVariantEastAsianKeywords() {
  return {
    fullWidth: 'font-variant-east-asian:full-width;',
    inherit: 'font-variant-east-asian:inherit;',
    initial: 'font-variant-east-asian:initial;',
    jis04: 'font-variant-east-asian:jis04;',
    jis78: 'font-variant-east-asian:jis78;',
    jis83: 'font-variant-east-asian:jis83;',
    jis90: 'font-variant-east-asian:jis90;',
    normal: 'font-variant-east-asian:normal;',
    proportionalWidth: 'font-variant-east-asian:proportional-width;',
    revert: 'font-variant-east-asian:revert;',
    revertLayer: 'font-variant-east-asian:revert-layer;',
    ruby: 'font-variant-east-asian:ruby;',
    simplified: 'font-variant-east-asian:simplified;',
    traditional: 'font-variant-east-asian:traditional;',
    unset: 'font-variant-east-asian:unset;',
  } as const;
}

type FontVariantEastAsianCssKeywords = Readonly<ReturnType<typeof fontVariantEastAsianKeywords>>;
export interface FontVariantEastAsianCss extends FontVariantEastAsianCssKeywords {}
/** CSS 属性 font-variant-east-asian；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
 */
export class FontVariantEastAsianCss extends CssProperty<Property.FontVariantEastAsian> {
  constructor() {
    super('font-variant-east-asian');
    initializeFontVariantEastAsianCss();
  }
}
let fontVariantEastAsianReady = false;
function initializeFontVariantEastAsianCss(): void {
  if (fontVariantEastAsianReady) return;
  Object.assign(FontVariantEastAsianCss.prototype, fontVariantEastAsianKeywords());
  Object.freeze(FontVariantEastAsianCss.prototype);
  fontVariantEastAsianReady = true;
}

function fontVariantEmojiKeywords() {
  return {
    emoji: 'font-variant-emoji:emoji;',
    inherit: 'font-variant-emoji:inherit;',
    initial: 'font-variant-emoji:initial;',
    normal: 'font-variant-emoji:normal;',
    revert: 'font-variant-emoji:revert;',
    revertLayer: 'font-variant-emoji:revert-layer;',
    text: 'font-variant-emoji:text;',
    unicode: 'font-variant-emoji:unicode;',
    unset: 'font-variant-emoji:unset;',
  } as const;
}

type FontVariantEmojiCssKeywords = Readonly<ReturnType<typeof fontVariantEmojiKeywords>>;
export interface FontVariantEmojiCss extends FontVariantEmojiCssKeywords {}
/** CSS 属性 font-variant-emoji；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
 */
export class FontVariantEmojiCss extends CssProperty<Property.FontVariantEmoji> {
  constructor() {
    super('font-variant-emoji');
    initializeFontVariantEmojiCss();
  }
}
let fontVariantEmojiReady = false;
function initializeFontVariantEmojiCss(): void {
  if (fontVariantEmojiReady) return;
  Object.assign(FontVariantEmojiCss.prototype, fontVariantEmojiKeywords());
  Object.freeze(FontVariantEmojiCss.prototype);
  fontVariantEmojiReady = true;
}

function fontVariantLigaturesKeywords() {
  return {
    commonLigatures: 'font-variant-ligatures:common-ligatures;',
    contextual: 'font-variant-ligatures:contextual;',
    discretionaryLigatures: 'font-variant-ligatures:discretionary-ligatures;',
    historicalLigatures: 'font-variant-ligatures:historical-ligatures;',
    inherit: 'font-variant-ligatures:inherit;',
    initial: 'font-variant-ligatures:initial;',
    noCommonLigatures: 'font-variant-ligatures:no-common-ligatures;',
    noContextual: 'font-variant-ligatures:no-contextual;',
    noDiscretionaryLigatures: 'font-variant-ligatures:no-discretionary-ligatures;',
    noHistoricalLigatures: 'font-variant-ligatures:no-historical-ligatures;',
    none: 'font-variant-ligatures:none;',
    normal: 'font-variant-ligatures:normal;',
    revert: 'font-variant-ligatures:revert;',
    revertLayer: 'font-variant-ligatures:revert-layer;',
    unset: 'font-variant-ligatures:unset;',
  } as const;
}

type FontVariantLigaturesCssKeywords = Readonly<ReturnType<typeof fontVariantLigaturesKeywords>>;
export interface FontVariantLigaturesCss extends FontVariantLigaturesCssKeywords {}
/** CSS 属性 font-variant-ligatures；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
 */
export class FontVariantLigaturesCss extends CssProperty<Property.FontVariantLigatures> {
  constructor() {
    super('font-variant-ligatures');
    initializeFontVariantLigaturesCss();
  }
}
let fontVariantLigaturesReady = false;
function initializeFontVariantLigaturesCss(): void {
  if (fontVariantLigaturesReady) return;
  Object.assign(FontVariantLigaturesCss.prototype, fontVariantLigaturesKeywords());
  Object.freeze(FontVariantLigaturesCss.prototype);
  fontVariantLigaturesReady = true;
}

function fontVariantNumericKeywords() {
  return {
    diagonalFractions: 'font-variant-numeric:diagonal-fractions;',
    inherit: 'font-variant-numeric:inherit;',
    initial: 'font-variant-numeric:initial;',
    liningNums: 'font-variant-numeric:lining-nums;',
    normal: 'font-variant-numeric:normal;',
    oldstyleNums: 'font-variant-numeric:oldstyle-nums;',
    ordinal: 'font-variant-numeric:ordinal;',
    proportionalNums: 'font-variant-numeric:proportional-nums;',
    revert: 'font-variant-numeric:revert;',
    revertLayer: 'font-variant-numeric:revert-layer;',
    slashedZero: 'font-variant-numeric:slashed-zero;',
    stackedFractions: 'font-variant-numeric:stacked-fractions;',
    tabularNums: 'font-variant-numeric:tabular-nums;',
    unset: 'font-variant-numeric:unset;',
  } as const;
}

type FontVariantNumericCssKeywords = Readonly<ReturnType<typeof fontVariantNumericKeywords>>;
export interface FontVariantNumericCss extends FontVariantNumericCssKeywords {}
/** CSS 属性 font-variant-numeric；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
 */
export class FontVariantNumericCss extends CssProperty<Property.FontVariantNumeric> {
  constructor() {
    super('font-variant-numeric');
    initializeFontVariantNumericCss();
  }
}
let fontVariantNumericReady = false;
function initializeFontVariantNumericCss(): void {
  if (fontVariantNumericReady) return;
  Object.assign(FontVariantNumericCss.prototype, fontVariantNumericKeywords());
  Object.freeze(FontVariantNumericCss.prototype);
  fontVariantNumericReady = true;
}

function fontVariantPositionKeywords() {
  return {
    inherit: 'font-variant-position:inherit;',
    initial: 'font-variant-position:initial;',
    normal: 'font-variant-position:normal;',
    revert: 'font-variant-position:revert;',
    revertLayer: 'font-variant-position:revert-layer;',
    sub: 'font-variant-position:sub;',
    super: 'font-variant-position:super;',
    unset: 'font-variant-position:unset;',
  } as const;
}

type FontVariantPositionCssKeywords = Readonly<ReturnType<typeof fontVariantPositionKeywords>>;
export interface FontVariantPositionCss extends FontVariantPositionCssKeywords {}
/** CSS 属性 font-variant-position；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
 */
export class FontVariantPositionCss extends CssProperty<Property.FontVariantPosition> {
  constructor() {
    super('font-variant-position');
    initializeFontVariantPositionCss();
  }
}
let fontVariantPositionReady = false;
function initializeFontVariantPositionCss(): void {
  if (fontVariantPositionReady) return;
  Object.assign(FontVariantPositionCss.prototype, fontVariantPositionKeywords());
  Object.freeze(FontVariantPositionCss.prototype);
  fontVariantPositionReady = true;
}

function fontVariationSettingsKeywords() {
  return {
    inherit: 'font-variation-settings:inherit;',
    initial: 'font-variation-settings:initial;',
    normal: 'font-variation-settings:normal;',
    revert: 'font-variation-settings:revert;',
    revertLayer: 'font-variation-settings:revert-layer;',
    unset: 'font-variation-settings:unset;',
  } as const;
}

type FontVariationSettingsCssKeywords = Readonly<ReturnType<typeof fontVariationSettingsKeywords>>;
export interface FontVariationSettingsCss extends FontVariationSettingsCssKeywords {}
/** CSS 属性 font-variation-settings；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
 */
export class FontVariationSettingsCss extends CssProperty<Property.FontVariationSettings> {
  constructor() {
    super('font-variation-settings');
    initializeFontVariationSettingsCss();
  }
}
let fontVariationSettingsReady = false;
function initializeFontVariationSettingsCss(): void {
  if (fontVariationSettingsReady) return;
  Object.assign(FontVariationSettingsCss.prototype, fontVariationSettingsKeywords());
  Object.freeze(FontVariationSettingsCss.prototype);
  fontVariationSettingsReady = true;
}

function fontWeightKeywords() {
  return {
    bold: 'font-weight:bold;',
    bolder: 'font-weight:bolder;',
    inherit: 'font-weight:inherit;',
    initial: 'font-weight:initial;',
    lighter: 'font-weight:lighter;',
    normal: 'font-weight:normal;',
    revert: 'font-weight:revert;',
    revertLayer: 'font-weight:revert-layer;',
    unset: 'font-weight:unset;',
  } as const;
}

type FontWeightCssKeywords = Readonly<ReturnType<typeof fontWeightKeywords>>;
export interface FontWeightCss extends FontWeightCssKeywords {}
/** CSS 属性 font-weight；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
 */
export class FontWeightCss extends CssProperty<Property.FontWeight> {
  constructor() {
    super('font-weight');
    initializeFontWeightCss();
  }
}
let fontWeightReady = false;
function initializeFontWeightCss(): void {
  if (fontWeightReady) return;
  Object.assign(FontWeightCss.prototype, fontWeightKeywords());
  Object.freeze(FontWeightCss.prototype);
  fontWeightReady = true;
}

function fontWidthKeywords() {
  return {
    condensed: 'font-width:condensed;',
    expanded: 'font-width:expanded;',
    extraCondensed: 'font-width:extra-condensed;',
    extraExpanded: 'font-width:extra-expanded;',
    inherit: 'font-width:inherit;',
    initial: 'font-width:initial;',
    normal: 'font-width:normal;',
    revert: 'font-width:revert;',
    revertLayer: 'font-width:revert-layer;',
    semiCondensed: 'font-width:semi-condensed;',
    semiExpanded: 'font-width:semi-expanded;',
    ultraCondensed: 'font-width:ultra-condensed;',
    ultraExpanded: 'font-width:ultra-expanded;',
    unset: 'font-width:unset;',
  } as const;
}

type FontWidthCssKeywords = Readonly<ReturnType<typeof fontWidthKeywords>>;
export interface FontWidthCss extends FontWidthCssKeywords {}
/** CSS 属性 font-width；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
 */
export class FontWidthCss extends CssProperty<Property.FontWidth> {
  constructor() {
    super('font-width');
    initializeFontWidthCss();
  }
}
let fontWidthReady = false;
function initializeFontWidthCss(): void {
  if (fontWidthReady) return;
  Object.assign(FontWidthCss.prototype, fontWidthKeywords());
  Object.freeze(FontWidthCss.prototype);
  fontWidthReady = true;
}

function forcedColorAdjustKeywords() {
  return {
    auto: 'forced-color-adjust:auto;',
    inherit: 'forced-color-adjust:inherit;',
    initial: 'forced-color-adjust:initial;',
    none: 'forced-color-adjust:none;',
    preserveParentColor: 'forced-color-adjust:preserve-parent-color;',
    revert: 'forced-color-adjust:revert;',
    revertLayer: 'forced-color-adjust:revert-layer;',
    unset: 'forced-color-adjust:unset;',
  } as const;
}

type ForcedColorAdjustCssKeywords = Readonly<ReturnType<typeof forcedColorAdjustKeywords>>;
export interface ForcedColorAdjustCss extends ForcedColorAdjustCssKeywords {}
/** CSS 属性 forced-color-adjust；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
 */
export class ForcedColorAdjustCss extends CssProperty<Property.ForcedColorAdjust> {
  constructor() {
    super('forced-color-adjust');
    initializeForcedColorAdjustCss();
  }
}
let forcedColorAdjustReady = false;
function initializeForcedColorAdjustCss(): void {
  if (forcedColorAdjustReady) return;
  Object.assign(ForcedColorAdjustCss.prototype, forcedColorAdjustKeywords());
  Object.freeze(ForcedColorAdjustCss.prototype);
  forcedColorAdjustReady = true;
}
