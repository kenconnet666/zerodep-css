// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

function backdropFilterKeywords() {
  return {
    inherit: 'backdrop-filter:inherit;',
    initial: 'backdrop-filter:initial;',
    none: 'backdrop-filter:none;',
    revert: 'backdrop-filter:revert;',
    revertLayer: 'backdrop-filter:revert-layer;',
    unset: 'backdrop-filter:unset;',
  } as const;
}

type BackdropFilterCssKeywords = Readonly<ReturnType<typeof backdropFilterKeywords>>;
export interface BackdropFilterCss extends BackdropFilterCssKeywords {}
/** CSS 属性 backdrop-filter；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
 */
export class BackdropFilterCss extends CssProperty<Property.BackdropFilter> {
  constructor() {
    super('backdrop-filter');
    initializeBackdropFilterCss();
  }
}
let backdropFilterReady = false;
function initializeBackdropFilterCss(): void {
  if (backdropFilterReady) return;
  Object.assign(BackdropFilterCss.prototype, backdropFilterKeywords());
  Object.freeze(BackdropFilterCss.prototype);
  backdropFilterReady = true;
}

function backfaceVisibilityKeywords() {
  return {
    hidden: 'backface-visibility:hidden;',
    inherit: 'backface-visibility:inherit;',
    initial: 'backface-visibility:initial;',
    revert: 'backface-visibility:revert;',
    revertLayer: 'backface-visibility:revert-layer;',
    unset: 'backface-visibility:unset;',
    visible: 'backface-visibility:visible;',
  } as const;
}

type BackfaceVisibilityCssKeywords = Readonly<ReturnType<typeof backfaceVisibilityKeywords>>;
export interface BackfaceVisibilityCss extends BackfaceVisibilityCssKeywords {}
/** CSS 属性 backface-visibility；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
 */
export class BackfaceVisibilityCss extends CssProperty<Property.BackfaceVisibility> {
  constructor() {
    super('backface-visibility');
    initializeBackfaceVisibilityCss();
  }
}
let backfaceVisibilityReady = false;
function initializeBackfaceVisibilityCss(): void {
  if (backfaceVisibilityReady) return;
  Object.assign(BackfaceVisibilityCss.prototype, backfaceVisibilityKeywords());
  Object.freeze(BackfaceVisibilityCss.prototype);
  backfaceVisibilityReady = true;
}

function backgroundKeywords() {
  return {
    AccentColor: 'background:AccentColor;',
    AccentColorText: 'background:AccentColorText;',
    ActiveBorder: 'background:ActiveBorder;',
    ActiveCaption: 'background:ActiveCaption;',
    ActiveText: 'background:ActiveText;',
    AppWorkspace: 'background:AppWorkspace;',
    Background: 'background:Background;',
    ButtonBorder: 'background:ButtonBorder;',
    ButtonFace: 'background:ButtonFace;',
    ButtonHighlight: 'background:ButtonHighlight;',
    ButtonShadow: 'background:ButtonShadow;',
    ButtonText: 'background:ButtonText;',
    Canvas: 'background:Canvas;',
    CanvasText: 'background:CanvasText;',
    CaptionText: 'background:CaptionText;',
    Field: 'background:Field;',
    FieldText: 'background:FieldText;',
    GrayText: 'background:GrayText;',
    Highlight: 'background:Highlight;',
    HighlightText: 'background:HighlightText;',
    InactiveBorder: 'background:InactiveBorder;',
    InactiveCaption: 'background:InactiveCaption;',
    InactiveCaptionText: 'background:InactiveCaptionText;',
    InfoBackground: 'background:InfoBackground;',
    InfoText: 'background:InfoText;',
    LinkText: 'background:LinkText;',
    Mark: 'background:Mark;',
    MarkText: 'background:MarkText;',
    Menu: 'background:Menu;',
    MenuText: 'background:MenuText;',
    Scrollbar: 'background:Scrollbar;',
    SelectedItem: 'background:SelectedItem;',
    SelectedItemText: 'background:SelectedItemText;',
    ThreeDDarkShadow: 'background:ThreeDDarkShadow;',
    ThreeDFace: 'background:ThreeDFace;',
    ThreeDHighlight: 'background:ThreeDHighlight;',
    ThreeDLightShadow: 'background:ThreeDLightShadow;',
    ThreeDShadow: 'background:ThreeDShadow;',
    VisitedText: 'background:VisitedText;',
    Window: 'background:Window;',
    WindowFrame: 'background:WindowFrame;',
    WindowText: 'background:WindowText;',
    aliceblue: 'background:aliceblue;',
    antiquewhite: 'background:antiquewhite;',
    aqua: 'background:aqua;',
    aquamarine: 'background:aquamarine;',
    azure: 'background:azure;',
    beige: 'background:beige;',
    bisque: 'background:bisque;',
    black: 'background:black;',
    blanchedalmond: 'background:blanchedalmond;',
    blue: 'background:blue;',
    blueviolet: 'background:blueviolet;',
    borderBox: 'background:border-box;',
    bottom: 'background:bottom;',
    brown: 'background:brown;',
    burlywood: 'background:burlywood;',
    cadetblue: 'background:cadetblue;',
    center: 'background:center;',
    chartreuse: 'background:chartreuse;',
    chocolate: 'background:chocolate;',
    contentBox: 'background:content-box;',
    coral: 'background:coral;',
    cornflowerblue: 'background:cornflowerblue;',
    cornsilk: 'background:cornsilk;',
    crimson: 'background:crimson;',
    currentColor: 'background:currentColor;',
    cyan: 'background:cyan;',
    darkblue: 'background:darkblue;',
    darkcyan: 'background:darkcyan;',
    darkgoldenrod: 'background:darkgoldenrod;',
    darkgray: 'background:darkgray;',
    darkgreen: 'background:darkgreen;',
    darkgrey: 'background:darkgrey;',
    darkkhaki: 'background:darkkhaki;',
    darkmagenta: 'background:darkmagenta;',
    darkolivegreen: 'background:darkolivegreen;',
    darkorange: 'background:darkorange;',
    darkorchid: 'background:darkorchid;',
    darkred: 'background:darkred;',
    darksalmon: 'background:darksalmon;',
    darkseagreen: 'background:darkseagreen;',
    darkslateblue: 'background:darkslateblue;',
    darkslategray: 'background:darkslategray;',
    darkslategrey: 'background:darkslategrey;',
    darkturquoise: 'background:darkturquoise;',
    darkviolet: 'background:darkviolet;',
    deeppink: 'background:deeppink;',
    deepskyblue: 'background:deepskyblue;',
    dimgray: 'background:dimgray;',
    dimgrey: 'background:dimgrey;',
    dodgerblue: 'background:dodgerblue;',
    firebrick: 'background:firebrick;',
    fixed: 'background:fixed;',
    floralwhite: 'background:floralwhite;',
    forestgreen: 'background:forestgreen;',
    fuchsia: 'background:fuchsia;',
    gainsboro: 'background:gainsboro;',
    ghostwhite: 'background:ghostwhite;',
    gold: 'background:gold;',
    goldenrod: 'background:goldenrod;',
    gray: 'background:gray;',
    green: 'background:green;',
    greenyellow: 'background:greenyellow;',
    grey: 'background:grey;',
    honeydew: 'background:honeydew;',
    hotpink: 'background:hotpink;',
    indianred: 'background:indianred;',
    indigo: 'background:indigo;',
    inherit: 'background:inherit;',
    initial: 'background:initial;',
    ivory: 'background:ivory;',
    khaki: 'background:khaki;',
    lavender: 'background:lavender;',
    lavenderblush: 'background:lavenderblush;',
    lawngreen: 'background:lawngreen;',
    left: 'background:left;',
    lemonchiffon: 'background:lemonchiffon;',
    lightblue: 'background:lightblue;',
    lightcoral: 'background:lightcoral;',
    lightcyan: 'background:lightcyan;',
    lightgoldenrodyellow: 'background:lightgoldenrodyellow;',
    lightgray: 'background:lightgray;',
    lightgreen: 'background:lightgreen;',
    lightgrey: 'background:lightgrey;',
    lightpink: 'background:lightpink;',
    lightsalmon: 'background:lightsalmon;',
    lightseagreen: 'background:lightseagreen;',
    lightskyblue: 'background:lightskyblue;',
    lightslategray: 'background:lightslategray;',
    lightslategrey: 'background:lightslategrey;',
    lightsteelblue: 'background:lightsteelblue;',
    lightyellow: 'background:lightyellow;',
    lime: 'background:lime;',
    limegreen: 'background:limegreen;',
    linen: 'background:linen;',
    local: 'background:local;',
    magenta: 'background:magenta;',
    maroon: 'background:maroon;',
    mediumaquamarine: 'background:mediumaquamarine;',
    mediumblue: 'background:mediumblue;',
    mediumorchid: 'background:mediumorchid;',
    mediumpurple: 'background:mediumpurple;',
    mediumseagreen: 'background:mediumseagreen;',
    mediumslateblue: 'background:mediumslateblue;',
    mediumspringgreen: 'background:mediumspringgreen;',
    mediumturquoise: 'background:mediumturquoise;',
    mediumvioletred: 'background:mediumvioletred;',
    midnightblue: 'background:midnightblue;',
    mintcream: 'background:mintcream;',
    mistyrose: 'background:mistyrose;',
    moccasin: 'background:moccasin;',
    navajowhite: 'background:navajowhite;',
    navy: 'background:navy;',
    noRepeat: 'background:no-repeat;',
    none: 'background:none;',
    oldlace: 'background:oldlace;',
    olive: 'background:olive;',
    olivedrab: 'background:olivedrab;',
    orange: 'background:orange;',
    orangered: 'background:orangered;',
    orchid: 'background:orchid;',
    paddingBox: 'background:padding-box;',
    palegoldenrod: 'background:palegoldenrod;',
    palegreen: 'background:palegreen;',
    paleturquoise: 'background:paleturquoise;',
    palevioletred: 'background:palevioletred;',
    papayawhip: 'background:papayawhip;',
    peachpuff: 'background:peachpuff;',
    peru: 'background:peru;',
    pink: 'background:pink;',
    plum: 'background:plum;',
    powderblue: 'background:powderblue;',
    purple: 'background:purple;',
    rebeccapurple: 'background:rebeccapurple;',
    red: 'background:red;',
    repeat: 'background:repeat;',
    repeatX: 'background:repeat-x;',
    repeatY: 'background:repeat-y;',
    revert: 'background:revert;',
    revertLayer: 'background:revert-layer;',
    right: 'background:right;',
    rosybrown: 'background:rosybrown;',
    round: 'background:round;',
    royalblue: 'background:royalblue;',
    saddlebrown: 'background:saddlebrown;',
    salmon: 'background:salmon;',
    sandybrown: 'background:sandybrown;',
    scroll: 'background:scroll;',
    seagreen: 'background:seagreen;',
    seashell: 'background:seashell;',
    sienna: 'background:sienna;',
    silver: 'background:silver;',
    skyblue: 'background:skyblue;',
    slateblue: 'background:slateblue;',
    slategray: 'background:slategray;',
    slategrey: 'background:slategrey;',
    snow: 'background:snow;',
    space: 'background:space;',
    springgreen: 'background:springgreen;',
    steelblue: 'background:steelblue;',
    tan: 'background:tan;',
    teal: 'background:teal;',
    thistle: 'background:thistle;',
    tomato: 'background:tomato;',
    top: 'background:top;',
    transparent: 'background:transparent;',
    turquoise: 'background:turquoise;',
    unset: 'background:unset;',
    violet: 'background:violet;',
    wheat: 'background:wheat;',
    white: 'background:white;',
    whitesmoke: 'background:whitesmoke;',
    yellow: 'background:yellow;',
    yellowgreen: 'background:yellowgreen;',
  } as const;
}

type BackgroundCssKeywords = Readonly<ReturnType<typeof backgroundKeywords>>;
export interface BackgroundCss extends BackgroundCssKeywords {}
/** CSS 属性 background。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
 */
export class BackgroundCss extends LengthCssProperty<Property.Background> {
  constructor() {
    super('background');
    initializeBackgroundCss();
  }
}
let backgroundReady = false;
function initializeBackgroundCss(): void {
  if (backgroundReady) return;
  Object.assign(BackgroundCss.prototype, backgroundKeywords());
  Object.freeze(BackgroundCss.prototype);
  backgroundReady = true;
}

function backgroundAttachmentKeywords() {
  return {
    fixed: 'background-attachment:fixed;',
    inherit: 'background-attachment:inherit;',
    initial: 'background-attachment:initial;',
    local: 'background-attachment:local;',
    revert: 'background-attachment:revert;',
    revertLayer: 'background-attachment:revert-layer;',
    scroll: 'background-attachment:scroll;',
    unset: 'background-attachment:unset;',
  } as const;
}

type BackgroundAttachmentCssKeywords = Readonly<ReturnType<typeof backgroundAttachmentKeywords>>;
export interface BackgroundAttachmentCss extends BackgroundAttachmentCssKeywords {}
/** CSS 属性 background-attachment；初始值 scroll。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
 */
export class BackgroundAttachmentCss extends CssProperty<Property.BackgroundAttachment> {
  constructor() {
    super('background-attachment');
    initializeBackgroundAttachmentCss();
  }
}
let backgroundAttachmentReady = false;
function initializeBackgroundAttachmentCss(): void {
  if (backgroundAttachmentReady) return;
  Object.assign(BackgroundAttachmentCss.prototype, backgroundAttachmentKeywords());
  Object.freeze(BackgroundAttachmentCss.prototype);
  backgroundAttachmentReady = true;
}

function backgroundBlendModeKeywords() {
  return {
    color: 'background-blend-mode:color;',
    colorBurn: 'background-blend-mode:color-burn;',
    colorDodge: 'background-blend-mode:color-dodge;',
    darken: 'background-blend-mode:darken;',
    difference: 'background-blend-mode:difference;',
    exclusion: 'background-blend-mode:exclusion;',
    hardLight: 'background-blend-mode:hard-light;',
    hue: 'background-blend-mode:hue;',
    inherit: 'background-blend-mode:inherit;',
    initial: 'background-blend-mode:initial;',
    lighten: 'background-blend-mode:lighten;',
    luminosity: 'background-blend-mode:luminosity;',
    multiply: 'background-blend-mode:multiply;',
    normal: 'background-blend-mode:normal;',
    overlay: 'background-blend-mode:overlay;',
    revert: 'background-blend-mode:revert;',
    revertLayer: 'background-blend-mode:revert-layer;',
    saturation: 'background-blend-mode:saturation;',
    screen: 'background-blend-mode:screen;',
    softLight: 'background-blend-mode:soft-light;',
    unset: 'background-blend-mode:unset;',
  } as const;
}

type BackgroundBlendModeCssKeywords = Readonly<ReturnType<typeof backgroundBlendModeKeywords>>;
export interface BackgroundBlendModeCss extends BackgroundBlendModeCssKeywords {}
/** CSS 属性 background-blend-mode；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
 */
export class BackgroundBlendModeCss extends CssProperty<Property.BackgroundBlendMode> {
  constructor() {
    super('background-blend-mode');
    initializeBackgroundBlendModeCss();
  }
}
let backgroundBlendModeReady = false;
function initializeBackgroundBlendModeCss(): void {
  if (backgroundBlendModeReady) return;
  Object.assign(BackgroundBlendModeCss.prototype, backgroundBlendModeKeywords());
  Object.freeze(BackgroundBlendModeCss.prototype);
  backgroundBlendModeReady = true;
}

function backgroundClipKeywords() {
  return {
    borderArea: 'background-clip:border-area;',
    borderBox: 'background-clip:border-box;',
    contentBox: 'background-clip:content-box;',
    inherit: 'background-clip:inherit;',
    initial: 'background-clip:initial;',
    paddingBox: 'background-clip:padding-box;',
    revert: 'background-clip:revert;',
    revertLayer: 'background-clip:revert-layer;',
    text: 'background-clip:text;',
    unset: 'background-clip:unset;',
  } as const;
}

type BackgroundClipCssKeywords = Readonly<ReturnType<typeof backgroundClipKeywords>>;
export interface BackgroundClipCss extends BackgroundClipCssKeywords {}
/** CSS 属性 background-clip；初始值 border-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
 */
export class BackgroundClipCss extends CssProperty<Property.BackgroundClip> {
  constructor() {
    super('background-clip');
    initializeBackgroundClipCss();
  }
}
let backgroundClipReady = false;
function initializeBackgroundClipCss(): void {
  if (backgroundClipReady) return;
  Object.assign(BackgroundClipCss.prototype, backgroundClipKeywords());
  Object.freeze(BackgroundClipCss.prototype);
  backgroundClipReady = true;
}

function backgroundColorKeywords() {
  return {
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
}

type BackgroundColorCssKeywords = Readonly<ReturnType<typeof backgroundColorKeywords>>;
export interface BackgroundColorCss extends BackgroundColorCssKeywords {}
/** 背景颜色（CSS background-color）；初始值 transparent。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
 */
export class BackgroundColorCss extends CssProperty<Property.BackgroundColor> {
  constructor() {
    super('background-color');
    initializeBackgroundColorCss();
  }
}
let backgroundColorReady = false;
function initializeBackgroundColorCss(): void {
  if (backgroundColorReady) return;
  Object.assign(BackgroundColorCss.prototype, backgroundColorKeywords());
  Object.freeze(BackgroundColorCss.prototype);
  backgroundColorReady = true;
}

function backgroundImageKeywords() {
  return {
    inherit: 'background-image:inherit;',
    initial: 'background-image:initial;',
    none: 'background-image:none;',
    revert: 'background-image:revert;',
    revertLayer: 'background-image:revert-layer;',
    unset: 'background-image:unset;',
  } as const;
}

type BackgroundImageCssKeywords = Readonly<ReturnType<typeof backgroundImageKeywords>>;
export interface BackgroundImageCss extends BackgroundImageCssKeywords {}
/** CSS 属性 background-image；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
 */
export class BackgroundImageCss extends CssProperty<Property.BackgroundImage> {
  constructor() {
    super('background-image');
    initializeBackgroundImageCss();
  }
}
let backgroundImageReady = false;
function initializeBackgroundImageCss(): void {
  if (backgroundImageReady) return;
  Object.assign(BackgroundImageCss.prototype, backgroundImageKeywords());
  Object.freeze(BackgroundImageCss.prototype);
  backgroundImageReady = true;
}

function backgroundOriginKeywords() {
  return {
    borderBox: 'background-origin:border-box;',
    contentBox: 'background-origin:content-box;',
    inherit: 'background-origin:inherit;',
    initial: 'background-origin:initial;',
    paddingBox: 'background-origin:padding-box;',
    revert: 'background-origin:revert;',
    revertLayer: 'background-origin:revert-layer;',
    unset: 'background-origin:unset;',
  } as const;
}

type BackgroundOriginCssKeywords = Readonly<ReturnType<typeof backgroundOriginKeywords>>;
export interface BackgroundOriginCss extends BackgroundOriginCssKeywords {}
/** CSS 属性 background-origin；初始值 padding-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
 */
export class BackgroundOriginCss extends CssProperty<Property.BackgroundOrigin> {
  constructor() {
    super('background-origin');
    initializeBackgroundOriginCss();
  }
}
let backgroundOriginReady = false;
function initializeBackgroundOriginCss(): void {
  if (backgroundOriginReady) return;
  Object.assign(BackgroundOriginCss.prototype, backgroundOriginKeywords());
  Object.freeze(BackgroundOriginCss.prototype);
  backgroundOriginReady = true;
}

function backgroundPositionKeywords() {
  return {
    bottom: 'background-position:bottom;',
    center: 'background-position:center;',
    inherit: 'background-position:inherit;',
    initial: 'background-position:initial;',
    left: 'background-position:left;',
    revert: 'background-position:revert;',
    revertLayer: 'background-position:revert-layer;',
    right: 'background-position:right;',
    top: 'background-position:top;',
    unset: 'background-position:unset;',
  } as const;
}

type BackgroundPositionCssKeywords = Readonly<ReturnType<typeof backgroundPositionKeywords>>;
export interface BackgroundPositionCss extends BackgroundPositionCssKeywords {}
/** CSS 属性 background-position；初始值 0% 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
 */
export class BackgroundPositionCss extends LengthCssProperty<Property.BackgroundPosition> {
  constructor() {
    super('background-position');
    initializeBackgroundPositionCss();
  }
}
let backgroundPositionReady = false;
function initializeBackgroundPositionCss(): void {
  if (backgroundPositionReady) return;
  Object.assign(BackgroundPositionCss.prototype, backgroundPositionKeywords());
  Object.freeze(BackgroundPositionCss.prototype);
  backgroundPositionReady = true;
}

function backgroundPositionXKeywords() {
  return {
    center: 'background-position-x:center;',
    inherit: 'background-position-x:inherit;',
    initial: 'background-position-x:initial;',
    left: 'background-position-x:left;',
    revert: 'background-position-x:revert;',
    revertLayer: 'background-position-x:revert-layer;',
    right: 'background-position-x:right;',
    unset: 'background-position-x:unset;',
    xEnd: 'background-position-x:x-end;',
    xStart: 'background-position-x:x-start;',
  } as const;
}

type BackgroundPositionXCssKeywords = Readonly<ReturnType<typeof backgroundPositionXKeywords>>;
export interface BackgroundPositionXCss extends BackgroundPositionXCssKeywords {}
/** CSS 属性 background-position-x；初始值 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
 */
export class BackgroundPositionXCss extends LengthCssProperty<Property.BackgroundPositionX> {
  constructor() {
    super('background-position-x');
    initializeBackgroundPositionXCss();
  }
}
let backgroundPositionXReady = false;
function initializeBackgroundPositionXCss(): void {
  if (backgroundPositionXReady) return;
  Object.assign(BackgroundPositionXCss.prototype, backgroundPositionXKeywords());
  Object.freeze(BackgroundPositionXCss.prototype);
  backgroundPositionXReady = true;
}

function backgroundPositionYKeywords() {
  return {
    bottom: 'background-position-y:bottom;',
    center: 'background-position-y:center;',
    inherit: 'background-position-y:inherit;',
    initial: 'background-position-y:initial;',
    revert: 'background-position-y:revert;',
    revertLayer: 'background-position-y:revert-layer;',
    top: 'background-position-y:top;',
    unset: 'background-position-y:unset;',
    yEnd: 'background-position-y:y-end;',
    yStart: 'background-position-y:y-start;',
  } as const;
}

type BackgroundPositionYCssKeywords = Readonly<ReturnType<typeof backgroundPositionYKeywords>>;
export interface BackgroundPositionYCss extends BackgroundPositionYCssKeywords {}
/** CSS 属性 background-position-y；初始值 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
 */
export class BackgroundPositionYCss extends LengthCssProperty<Property.BackgroundPositionY> {
  constructor() {
    super('background-position-y');
    initializeBackgroundPositionYCss();
  }
}
let backgroundPositionYReady = false;
function initializeBackgroundPositionYCss(): void {
  if (backgroundPositionYReady) return;
  Object.assign(BackgroundPositionYCss.prototype, backgroundPositionYKeywords());
  Object.freeze(BackgroundPositionYCss.prototype);
  backgroundPositionYReady = true;
}

function backgroundRepeatKeywords() {
  return {
    inherit: 'background-repeat:inherit;',
    initial: 'background-repeat:initial;',
    noRepeat: 'background-repeat:no-repeat;',
    repeat: 'background-repeat:repeat;',
    repeatX: 'background-repeat:repeat-x;',
    repeatY: 'background-repeat:repeat-y;',
    revert: 'background-repeat:revert;',
    revertLayer: 'background-repeat:revert-layer;',
    round: 'background-repeat:round;',
    space: 'background-repeat:space;',
    unset: 'background-repeat:unset;',
  } as const;
}

type BackgroundRepeatCssKeywords = Readonly<ReturnType<typeof backgroundRepeatKeywords>>;
export interface BackgroundRepeatCss extends BackgroundRepeatCssKeywords {}
/** CSS 属性 background-repeat；初始值 repeat。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
 */
export class BackgroundRepeatCss extends CssProperty<Property.BackgroundRepeat> {
  constructor() {
    super('background-repeat');
    initializeBackgroundRepeatCss();
  }
}
let backgroundRepeatReady = false;
function initializeBackgroundRepeatCss(): void {
  if (backgroundRepeatReady) return;
  Object.assign(BackgroundRepeatCss.prototype, backgroundRepeatKeywords());
  Object.freeze(BackgroundRepeatCss.prototype);
  backgroundRepeatReady = true;
}

function backgroundSizeKeywords() {
  return {
    auto: 'background-size:auto;',
    contain: 'background-size:contain;',
    cover: 'background-size:cover;',
    inherit: 'background-size:inherit;',
    initial: 'background-size:initial;',
    revert: 'background-size:revert;',
    revertLayer: 'background-size:revert-layer;',
    unset: 'background-size:unset;',
  } as const;
}

type BackgroundSizeCssKeywords = Readonly<ReturnType<typeof backgroundSizeKeywords>>;
export interface BackgroundSizeCss extends BackgroundSizeCssKeywords {}
/** CSS 属性 background-size；初始值 auto auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
 */
export class BackgroundSizeCss extends LengthCssProperty<Property.BackgroundSize> {
  constructor() {
    super('background-size');
    initializeBackgroundSizeCss();
  }
}
let backgroundSizeReady = false;
function initializeBackgroundSizeCss(): void {
  if (backgroundSizeReady) return;
  Object.assign(BackgroundSizeCss.prototype, backgroundSizeKeywords());
  Object.freeze(BackgroundSizeCss.prototype);
  backgroundSizeReady = true;
}

function baselineShiftKeywords() {
  return {
    baseline: 'baseline-shift:baseline;',
    inherit: 'baseline-shift:inherit;',
    initial: 'baseline-shift:initial;',
    revert: 'baseline-shift:revert;',
    revertLayer: 'baseline-shift:revert-layer;',
    sub: 'baseline-shift:sub;',
    super: 'baseline-shift:super;',
    unset: 'baseline-shift:unset;',
  } as const;
}

type BaselineShiftCssKeywords = Readonly<ReturnType<typeof baselineShiftKeywords>>;
export interface BaselineShiftCss extends BaselineShiftCssKeywords {}
/** CSS 属性 baseline-shift；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
 */
export class BaselineShiftCss extends LengthCssProperty<Property.BaselineShift> {
  constructor() {
    super('baseline-shift');
    initializeBaselineShiftCss();
  }
}
let baselineShiftReady = false;
function initializeBaselineShiftCss(): void {
  if (baselineShiftReady) return;
  Object.assign(BaselineShiftCss.prototype, baselineShiftKeywords());
  Object.freeze(BaselineShiftCss.prototype);
  baselineShiftReady = true;
}

function blockSizeKeywords() {
  return {
    auto: 'block-size:auto;',
    fitContent: 'block-size:fit-content;',
    inherit: 'block-size:inherit;',
    initial: 'block-size:initial;',
    maxContent: 'block-size:max-content;',
    minContent: 'block-size:min-content;',
    revert: 'block-size:revert;',
    revertLayer: 'block-size:revert-layer;',
    unset: 'block-size:unset;',
  } as const;
}

type BlockSizeCssKeywords = Readonly<ReturnType<typeof blockSizeKeywords>>;
export interface BlockSizeCss extends BlockSizeCssKeywords {}
/** CSS 属性 block-size；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
 */
export class BlockSizeCss extends LengthCssProperty<Property.BlockSize> {
  constructor() {
    super('block-size');
    initializeBlockSizeCss();
  }
}
let blockSizeReady = false;
function initializeBlockSizeCss(): void {
  if (blockSizeReady) return;
  Object.assign(BlockSizeCss.prototype, blockSizeKeywords());
  Object.freeze(BlockSizeCss.prototype);
  blockSizeReady = true;
}

function borderKeywords() {
  return {
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
}

type BorderCssKeywords = Readonly<ReturnType<typeof borderKeywords>>;
export interface BorderCss extends BorderCssKeywords {}
/** 边框简写（CSS border）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
 */
export class BorderCss extends LengthCssProperty<Property.Border> {
  constructor() {
    super('border');
    initializeBorderCss();
  }
}
let borderReady = false;
function initializeBorderCss(): void {
  if (borderReady) return;
  Object.assign(BorderCss.prototype, borderKeywords());
  Object.freeze(BorderCss.prototype);
  borderReady = true;
}

function borderBlockKeywords() {
  return {
    AccentColor: 'border-block:AccentColor;',
    AccentColorText: 'border-block:AccentColorText;',
    ActiveBorder: 'border-block:ActiveBorder;',
    ActiveCaption: 'border-block:ActiveCaption;',
    ActiveText: 'border-block:ActiveText;',
    AppWorkspace: 'border-block:AppWorkspace;',
    Background: 'border-block:Background;',
    ButtonBorder: 'border-block:ButtonBorder;',
    ButtonFace: 'border-block:ButtonFace;',
    ButtonHighlight: 'border-block:ButtonHighlight;',
    ButtonShadow: 'border-block:ButtonShadow;',
    ButtonText: 'border-block:ButtonText;',
    Canvas: 'border-block:Canvas;',
    CanvasText: 'border-block:CanvasText;',
    CaptionText: 'border-block:CaptionText;',
    Field: 'border-block:Field;',
    FieldText: 'border-block:FieldText;',
    GrayText: 'border-block:GrayText;',
    Highlight: 'border-block:Highlight;',
    HighlightText: 'border-block:HighlightText;',
    InactiveBorder: 'border-block:InactiveBorder;',
    InactiveCaption: 'border-block:InactiveCaption;',
    InactiveCaptionText: 'border-block:InactiveCaptionText;',
    InfoBackground: 'border-block:InfoBackground;',
    InfoText: 'border-block:InfoText;',
    LinkText: 'border-block:LinkText;',
    Mark: 'border-block:Mark;',
    MarkText: 'border-block:MarkText;',
    Menu: 'border-block:Menu;',
    MenuText: 'border-block:MenuText;',
    Scrollbar: 'border-block:Scrollbar;',
    SelectedItem: 'border-block:SelectedItem;',
    SelectedItemText: 'border-block:SelectedItemText;',
    ThreeDDarkShadow: 'border-block:ThreeDDarkShadow;',
    ThreeDFace: 'border-block:ThreeDFace;',
    ThreeDHighlight: 'border-block:ThreeDHighlight;',
    ThreeDLightShadow: 'border-block:ThreeDLightShadow;',
    ThreeDShadow: 'border-block:ThreeDShadow;',
    VisitedText: 'border-block:VisitedText;',
    Window: 'border-block:Window;',
    WindowFrame: 'border-block:WindowFrame;',
    WindowText: 'border-block:WindowText;',
    aliceblue: 'border-block:aliceblue;',
    antiquewhite: 'border-block:antiquewhite;',
    aqua: 'border-block:aqua;',
    aquamarine: 'border-block:aquamarine;',
    azure: 'border-block:azure;',
    beige: 'border-block:beige;',
    bisque: 'border-block:bisque;',
    black: 'border-block:black;',
    blanchedalmond: 'border-block:blanchedalmond;',
    blue: 'border-block:blue;',
    blueviolet: 'border-block:blueviolet;',
    brown: 'border-block:brown;',
    burlywood: 'border-block:burlywood;',
    cadetblue: 'border-block:cadetblue;',
    chartreuse: 'border-block:chartreuse;',
    chocolate: 'border-block:chocolate;',
    coral: 'border-block:coral;',
    cornflowerblue: 'border-block:cornflowerblue;',
    cornsilk: 'border-block:cornsilk;',
    crimson: 'border-block:crimson;',
    currentColor: 'border-block:currentColor;',
    cyan: 'border-block:cyan;',
    darkblue: 'border-block:darkblue;',
    darkcyan: 'border-block:darkcyan;',
    darkgoldenrod: 'border-block:darkgoldenrod;',
    darkgray: 'border-block:darkgray;',
    darkgreen: 'border-block:darkgreen;',
    darkgrey: 'border-block:darkgrey;',
    darkkhaki: 'border-block:darkkhaki;',
    darkmagenta: 'border-block:darkmagenta;',
    darkolivegreen: 'border-block:darkolivegreen;',
    darkorange: 'border-block:darkorange;',
    darkorchid: 'border-block:darkorchid;',
    darkred: 'border-block:darkred;',
    darksalmon: 'border-block:darksalmon;',
    darkseagreen: 'border-block:darkseagreen;',
    darkslateblue: 'border-block:darkslateblue;',
    darkslategray: 'border-block:darkslategray;',
    darkslategrey: 'border-block:darkslategrey;',
    darkturquoise: 'border-block:darkturquoise;',
    darkviolet: 'border-block:darkviolet;',
    dashed: 'border-block:dashed;',
    deeppink: 'border-block:deeppink;',
    deepskyblue: 'border-block:deepskyblue;',
    dimgray: 'border-block:dimgray;',
    dimgrey: 'border-block:dimgrey;',
    dodgerblue: 'border-block:dodgerblue;',
    dotted: 'border-block:dotted;',
    double: 'border-block:double;',
    firebrick: 'border-block:firebrick;',
    floralwhite: 'border-block:floralwhite;',
    forestgreen: 'border-block:forestgreen;',
    fuchsia: 'border-block:fuchsia;',
    gainsboro: 'border-block:gainsboro;',
    ghostwhite: 'border-block:ghostwhite;',
    gold: 'border-block:gold;',
    goldenrod: 'border-block:goldenrod;',
    gray: 'border-block:gray;',
    green: 'border-block:green;',
    greenyellow: 'border-block:greenyellow;',
    grey: 'border-block:grey;',
    groove: 'border-block:groove;',
    hidden: 'border-block:hidden;',
    honeydew: 'border-block:honeydew;',
    hotpink: 'border-block:hotpink;',
    indianred: 'border-block:indianred;',
    indigo: 'border-block:indigo;',
    inherit: 'border-block:inherit;',
    initial: 'border-block:initial;',
    inset: 'border-block:inset;',
    ivory: 'border-block:ivory;',
    khaki: 'border-block:khaki;',
    lavender: 'border-block:lavender;',
    lavenderblush: 'border-block:lavenderblush;',
    lawngreen: 'border-block:lawngreen;',
    lemonchiffon: 'border-block:lemonchiffon;',
    lightblue: 'border-block:lightblue;',
    lightcoral: 'border-block:lightcoral;',
    lightcyan: 'border-block:lightcyan;',
    lightgoldenrodyellow: 'border-block:lightgoldenrodyellow;',
    lightgray: 'border-block:lightgray;',
    lightgreen: 'border-block:lightgreen;',
    lightgrey: 'border-block:lightgrey;',
    lightpink: 'border-block:lightpink;',
    lightsalmon: 'border-block:lightsalmon;',
    lightseagreen: 'border-block:lightseagreen;',
    lightskyblue: 'border-block:lightskyblue;',
    lightslategray: 'border-block:lightslategray;',
    lightslategrey: 'border-block:lightslategrey;',
    lightsteelblue: 'border-block:lightsteelblue;',
    lightyellow: 'border-block:lightyellow;',
    lime: 'border-block:lime;',
    limegreen: 'border-block:limegreen;',
    linen: 'border-block:linen;',
    magenta: 'border-block:magenta;',
    maroon: 'border-block:maroon;',
    medium: 'border-block:medium;',
    mediumaquamarine: 'border-block:mediumaquamarine;',
    mediumblue: 'border-block:mediumblue;',
    mediumorchid: 'border-block:mediumorchid;',
    mediumpurple: 'border-block:mediumpurple;',
    mediumseagreen: 'border-block:mediumseagreen;',
    mediumslateblue: 'border-block:mediumslateblue;',
    mediumspringgreen: 'border-block:mediumspringgreen;',
    mediumturquoise: 'border-block:mediumturquoise;',
    mediumvioletred: 'border-block:mediumvioletred;',
    midnightblue: 'border-block:midnightblue;',
    mintcream: 'border-block:mintcream;',
    mistyrose: 'border-block:mistyrose;',
    moccasin: 'border-block:moccasin;',
    navajowhite: 'border-block:navajowhite;',
    navy: 'border-block:navy;',
    none: 'border-block:none;',
    oldlace: 'border-block:oldlace;',
    olive: 'border-block:olive;',
    olivedrab: 'border-block:olivedrab;',
    orange: 'border-block:orange;',
    orangered: 'border-block:orangered;',
    orchid: 'border-block:orchid;',
    outset: 'border-block:outset;',
    palegoldenrod: 'border-block:palegoldenrod;',
    palegreen: 'border-block:palegreen;',
    paleturquoise: 'border-block:paleturquoise;',
    palevioletred: 'border-block:palevioletred;',
    papayawhip: 'border-block:papayawhip;',
    peachpuff: 'border-block:peachpuff;',
    peru: 'border-block:peru;',
    pink: 'border-block:pink;',
    plum: 'border-block:plum;',
    powderblue: 'border-block:powderblue;',
    purple: 'border-block:purple;',
    rebeccapurple: 'border-block:rebeccapurple;',
    red: 'border-block:red;',
    revert: 'border-block:revert;',
    revertLayer: 'border-block:revert-layer;',
    ridge: 'border-block:ridge;',
    rosybrown: 'border-block:rosybrown;',
    royalblue: 'border-block:royalblue;',
    saddlebrown: 'border-block:saddlebrown;',
    salmon: 'border-block:salmon;',
    sandybrown: 'border-block:sandybrown;',
    seagreen: 'border-block:seagreen;',
    seashell: 'border-block:seashell;',
    sienna: 'border-block:sienna;',
    silver: 'border-block:silver;',
    skyblue: 'border-block:skyblue;',
    slateblue: 'border-block:slateblue;',
    slategray: 'border-block:slategray;',
    slategrey: 'border-block:slategrey;',
    snow: 'border-block:snow;',
    solid: 'border-block:solid;',
    springgreen: 'border-block:springgreen;',
    steelblue: 'border-block:steelblue;',
    tan: 'border-block:tan;',
    teal: 'border-block:teal;',
    thick: 'border-block:thick;',
    thin: 'border-block:thin;',
    thistle: 'border-block:thistle;',
    tomato: 'border-block:tomato;',
    transparent: 'border-block:transparent;',
    turquoise: 'border-block:turquoise;',
    unset: 'border-block:unset;',
    violet: 'border-block:violet;',
    wheat: 'border-block:wheat;',
    white: 'border-block:white;',
    whitesmoke: 'border-block:whitesmoke;',
    yellow: 'border-block:yellow;',
    yellowgreen: 'border-block:yellowgreen;',
  } as const;
}

type BorderBlockCssKeywords = Readonly<ReturnType<typeof borderBlockKeywords>>;
export interface BorderBlockCss extends BorderBlockCssKeywords {}
/** CSS 属性 border-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
 */
export class BorderBlockCss extends LengthCssProperty<Property.BorderBlock> {
  constructor() {
    super('border-block');
    initializeBorderBlockCss();
  }
}
let borderBlockReady = false;
function initializeBorderBlockCss(): void {
  if (borderBlockReady) return;
  Object.assign(BorderBlockCss.prototype, borderBlockKeywords());
  Object.freeze(BorderBlockCss.prototype);
  borderBlockReady = true;
}

function borderBlockColorKeywords() {
  return {
    AccentColor: 'border-block-color:AccentColor;',
    AccentColorText: 'border-block-color:AccentColorText;',
    ActiveBorder: 'border-block-color:ActiveBorder;',
    ActiveCaption: 'border-block-color:ActiveCaption;',
    ActiveText: 'border-block-color:ActiveText;',
    AppWorkspace: 'border-block-color:AppWorkspace;',
    Background: 'border-block-color:Background;',
    ButtonBorder: 'border-block-color:ButtonBorder;',
    ButtonFace: 'border-block-color:ButtonFace;',
    ButtonHighlight: 'border-block-color:ButtonHighlight;',
    ButtonShadow: 'border-block-color:ButtonShadow;',
    ButtonText: 'border-block-color:ButtonText;',
    Canvas: 'border-block-color:Canvas;',
    CanvasText: 'border-block-color:CanvasText;',
    CaptionText: 'border-block-color:CaptionText;',
    Field: 'border-block-color:Field;',
    FieldText: 'border-block-color:FieldText;',
    GrayText: 'border-block-color:GrayText;',
    Highlight: 'border-block-color:Highlight;',
    HighlightText: 'border-block-color:HighlightText;',
    InactiveBorder: 'border-block-color:InactiveBorder;',
    InactiveCaption: 'border-block-color:InactiveCaption;',
    InactiveCaptionText: 'border-block-color:InactiveCaptionText;',
    InfoBackground: 'border-block-color:InfoBackground;',
    InfoText: 'border-block-color:InfoText;',
    LinkText: 'border-block-color:LinkText;',
    Mark: 'border-block-color:Mark;',
    MarkText: 'border-block-color:MarkText;',
    Menu: 'border-block-color:Menu;',
    MenuText: 'border-block-color:MenuText;',
    Scrollbar: 'border-block-color:Scrollbar;',
    SelectedItem: 'border-block-color:SelectedItem;',
    SelectedItemText: 'border-block-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-block-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-block-color:ThreeDFace;',
    ThreeDHighlight: 'border-block-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-block-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-block-color:ThreeDShadow;',
    VisitedText: 'border-block-color:VisitedText;',
    Window: 'border-block-color:Window;',
    WindowFrame: 'border-block-color:WindowFrame;',
    WindowText: 'border-block-color:WindowText;',
    aliceblue: 'border-block-color:aliceblue;',
    antiquewhite: 'border-block-color:antiquewhite;',
    aqua: 'border-block-color:aqua;',
    aquamarine: 'border-block-color:aquamarine;',
    azure: 'border-block-color:azure;',
    beige: 'border-block-color:beige;',
    bisque: 'border-block-color:bisque;',
    black: 'border-block-color:black;',
    blanchedalmond: 'border-block-color:blanchedalmond;',
    blue: 'border-block-color:blue;',
    blueviolet: 'border-block-color:blueviolet;',
    brown: 'border-block-color:brown;',
    burlywood: 'border-block-color:burlywood;',
    cadetblue: 'border-block-color:cadetblue;',
    chartreuse: 'border-block-color:chartreuse;',
    chocolate: 'border-block-color:chocolate;',
    coral: 'border-block-color:coral;',
    cornflowerblue: 'border-block-color:cornflowerblue;',
    cornsilk: 'border-block-color:cornsilk;',
    crimson: 'border-block-color:crimson;',
    currentColor: 'border-block-color:currentColor;',
    cyan: 'border-block-color:cyan;',
    darkblue: 'border-block-color:darkblue;',
    darkcyan: 'border-block-color:darkcyan;',
    darkgoldenrod: 'border-block-color:darkgoldenrod;',
    darkgray: 'border-block-color:darkgray;',
    darkgreen: 'border-block-color:darkgreen;',
    darkgrey: 'border-block-color:darkgrey;',
    darkkhaki: 'border-block-color:darkkhaki;',
    darkmagenta: 'border-block-color:darkmagenta;',
    darkolivegreen: 'border-block-color:darkolivegreen;',
    darkorange: 'border-block-color:darkorange;',
    darkorchid: 'border-block-color:darkorchid;',
    darkred: 'border-block-color:darkred;',
    darksalmon: 'border-block-color:darksalmon;',
    darkseagreen: 'border-block-color:darkseagreen;',
    darkslateblue: 'border-block-color:darkslateblue;',
    darkslategray: 'border-block-color:darkslategray;',
    darkslategrey: 'border-block-color:darkslategrey;',
    darkturquoise: 'border-block-color:darkturquoise;',
    darkviolet: 'border-block-color:darkviolet;',
    deeppink: 'border-block-color:deeppink;',
    deepskyblue: 'border-block-color:deepskyblue;',
    dimgray: 'border-block-color:dimgray;',
    dimgrey: 'border-block-color:dimgrey;',
    dodgerblue: 'border-block-color:dodgerblue;',
    firebrick: 'border-block-color:firebrick;',
    floralwhite: 'border-block-color:floralwhite;',
    forestgreen: 'border-block-color:forestgreen;',
    fuchsia: 'border-block-color:fuchsia;',
    gainsboro: 'border-block-color:gainsboro;',
    ghostwhite: 'border-block-color:ghostwhite;',
    gold: 'border-block-color:gold;',
    goldenrod: 'border-block-color:goldenrod;',
    gray: 'border-block-color:gray;',
    green: 'border-block-color:green;',
    greenyellow: 'border-block-color:greenyellow;',
    grey: 'border-block-color:grey;',
    honeydew: 'border-block-color:honeydew;',
    hotpink: 'border-block-color:hotpink;',
    indianred: 'border-block-color:indianred;',
    indigo: 'border-block-color:indigo;',
    inherit: 'border-block-color:inherit;',
    initial: 'border-block-color:initial;',
    ivory: 'border-block-color:ivory;',
    khaki: 'border-block-color:khaki;',
    lavender: 'border-block-color:lavender;',
    lavenderblush: 'border-block-color:lavenderblush;',
    lawngreen: 'border-block-color:lawngreen;',
    lemonchiffon: 'border-block-color:lemonchiffon;',
    lightblue: 'border-block-color:lightblue;',
    lightcoral: 'border-block-color:lightcoral;',
    lightcyan: 'border-block-color:lightcyan;',
    lightgoldenrodyellow: 'border-block-color:lightgoldenrodyellow;',
    lightgray: 'border-block-color:lightgray;',
    lightgreen: 'border-block-color:lightgreen;',
    lightgrey: 'border-block-color:lightgrey;',
    lightpink: 'border-block-color:lightpink;',
    lightsalmon: 'border-block-color:lightsalmon;',
    lightseagreen: 'border-block-color:lightseagreen;',
    lightskyblue: 'border-block-color:lightskyblue;',
    lightslategray: 'border-block-color:lightslategray;',
    lightslategrey: 'border-block-color:lightslategrey;',
    lightsteelblue: 'border-block-color:lightsteelblue;',
    lightyellow: 'border-block-color:lightyellow;',
    lime: 'border-block-color:lime;',
    limegreen: 'border-block-color:limegreen;',
    linen: 'border-block-color:linen;',
    magenta: 'border-block-color:magenta;',
    maroon: 'border-block-color:maroon;',
    mediumaquamarine: 'border-block-color:mediumaquamarine;',
    mediumblue: 'border-block-color:mediumblue;',
    mediumorchid: 'border-block-color:mediumorchid;',
    mediumpurple: 'border-block-color:mediumpurple;',
    mediumseagreen: 'border-block-color:mediumseagreen;',
    mediumslateblue: 'border-block-color:mediumslateblue;',
    mediumspringgreen: 'border-block-color:mediumspringgreen;',
    mediumturquoise: 'border-block-color:mediumturquoise;',
    mediumvioletred: 'border-block-color:mediumvioletred;',
    midnightblue: 'border-block-color:midnightblue;',
    mintcream: 'border-block-color:mintcream;',
    mistyrose: 'border-block-color:mistyrose;',
    moccasin: 'border-block-color:moccasin;',
    navajowhite: 'border-block-color:navajowhite;',
    navy: 'border-block-color:navy;',
    oldlace: 'border-block-color:oldlace;',
    olive: 'border-block-color:olive;',
    olivedrab: 'border-block-color:olivedrab;',
    orange: 'border-block-color:orange;',
    orangered: 'border-block-color:orangered;',
    orchid: 'border-block-color:orchid;',
    palegoldenrod: 'border-block-color:palegoldenrod;',
    palegreen: 'border-block-color:palegreen;',
    paleturquoise: 'border-block-color:paleturquoise;',
    palevioletred: 'border-block-color:palevioletred;',
    papayawhip: 'border-block-color:papayawhip;',
    peachpuff: 'border-block-color:peachpuff;',
    peru: 'border-block-color:peru;',
    pink: 'border-block-color:pink;',
    plum: 'border-block-color:plum;',
    powderblue: 'border-block-color:powderblue;',
    purple: 'border-block-color:purple;',
    rebeccapurple: 'border-block-color:rebeccapurple;',
    red: 'border-block-color:red;',
    revert: 'border-block-color:revert;',
    revertLayer: 'border-block-color:revert-layer;',
    rosybrown: 'border-block-color:rosybrown;',
    royalblue: 'border-block-color:royalblue;',
    saddlebrown: 'border-block-color:saddlebrown;',
    salmon: 'border-block-color:salmon;',
    sandybrown: 'border-block-color:sandybrown;',
    seagreen: 'border-block-color:seagreen;',
    seashell: 'border-block-color:seashell;',
    sienna: 'border-block-color:sienna;',
    silver: 'border-block-color:silver;',
    skyblue: 'border-block-color:skyblue;',
    slateblue: 'border-block-color:slateblue;',
    slategray: 'border-block-color:slategray;',
    slategrey: 'border-block-color:slategrey;',
    snow: 'border-block-color:snow;',
    springgreen: 'border-block-color:springgreen;',
    steelblue: 'border-block-color:steelblue;',
    tan: 'border-block-color:tan;',
    teal: 'border-block-color:teal;',
    thistle: 'border-block-color:thistle;',
    tomato: 'border-block-color:tomato;',
    transparent: 'border-block-color:transparent;',
    turquoise: 'border-block-color:turquoise;',
    unset: 'border-block-color:unset;',
    violet: 'border-block-color:violet;',
    wheat: 'border-block-color:wheat;',
    white: 'border-block-color:white;',
    whitesmoke: 'border-block-color:whitesmoke;',
    yellow: 'border-block-color:yellow;',
    yellowgreen: 'border-block-color:yellowgreen;',
  } as const;
}

type BorderBlockColorCssKeywords = Readonly<ReturnType<typeof borderBlockColorKeywords>>;
export interface BorderBlockColorCss extends BorderBlockColorCssKeywords {}
/** CSS 属性 border-block-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
 */
export class BorderBlockColorCss extends CssProperty<Property.BorderBlockColor> {
  constructor() {
    super('border-block-color');
    initializeBorderBlockColorCss();
  }
}
let borderBlockColorReady = false;
function initializeBorderBlockColorCss(): void {
  if (borderBlockColorReady) return;
  Object.assign(BorderBlockColorCss.prototype, borderBlockColorKeywords());
  Object.freeze(BorderBlockColorCss.prototype);
  borderBlockColorReady = true;
}

function borderBlockEndKeywords() {
  return {
    AccentColor: 'border-block-end:AccentColor;',
    AccentColorText: 'border-block-end:AccentColorText;',
    ActiveBorder: 'border-block-end:ActiveBorder;',
    ActiveCaption: 'border-block-end:ActiveCaption;',
    ActiveText: 'border-block-end:ActiveText;',
    AppWorkspace: 'border-block-end:AppWorkspace;',
    Background: 'border-block-end:Background;',
    ButtonBorder: 'border-block-end:ButtonBorder;',
    ButtonFace: 'border-block-end:ButtonFace;',
    ButtonHighlight: 'border-block-end:ButtonHighlight;',
    ButtonShadow: 'border-block-end:ButtonShadow;',
    ButtonText: 'border-block-end:ButtonText;',
    Canvas: 'border-block-end:Canvas;',
    CanvasText: 'border-block-end:CanvasText;',
    CaptionText: 'border-block-end:CaptionText;',
    Field: 'border-block-end:Field;',
    FieldText: 'border-block-end:FieldText;',
    GrayText: 'border-block-end:GrayText;',
    Highlight: 'border-block-end:Highlight;',
    HighlightText: 'border-block-end:HighlightText;',
    InactiveBorder: 'border-block-end:InactiveBorder;',
    InactiveCaption: 'border-block-end:InactiveCaption;',
    InactiveCaptionText: 'border-block-end:InactiveCaptionText;',
    InfoBackground: 'border-block-end:InfoBackground;',
    InfoText: 'border-block-end:InfoText;',
    LinkText: 'border-block-end:LinkText;',
    Mark: 'border-block-end:Mark;',
    MarkText: 'border-block-end:MarkText;',
    Menu: 'border-block-end:Menu;',
    MenuText: 'border-block-end:MenuText;',
    Scrollbar: 'border-block-end:Scrollbar;',
    SelectedItem: 'border-block-end:SelectedItem;',
    SelectedItemText: 'border-block-end:SelectedItemText;',
    ThreeDDarkShadow: 'border-block-end:ThreeDDarkShadow;',
    ThreeDFace: 'border-block-end:ThreeDFace;',
    ThreeDHighlight: 'border-block-end:ThreeDHighlight;',
    ThreeDLightShadow: 'border-block-end:ThreeDLightShadow;',
    ThreeDShadow: 'border-block-end:ThreeDShadow;',
    VisitedText: 'border-block-end:VisitedText;',
    Window: 'border-block-end:Window;',
    WindowFrame: 'border-block-end:WindowFrame;',
    WindowText: 'border-block-end:WindowText;',
    aliceblue: 'border-block-end:aliceblue;',
    antiquewhite: 'border-block-end:antiquewhite;',
    aqua: 'border-block-end:aqua;',
    aquamarine: 'border-block-end:aquamarine;',
    azure: 'border-block-end:azure;',
    beige: 'border-block-end:beige;',
    bisque: 'border-block-end:bisque;',
    black: 'border-block-end:black;',
    blanchedalmond: 'border-block-end:blanchedalmond;',
    blue: 'border-block-end:blue;',
    blueviolet: 'border-block-end:blueviolet;',
    brown: 'border-block-end:brown;',
    burlywood: 'border-block-end:burlywood;',
    cadetblue: 'border-block-end:cadetblue;',
    chartreuse: 'border-block-end:chartreuse;',
    chocolate: 'border-block-end:chocolate;',
    coral: 'border-block-end:coral;',
    cornflowerblue: 'border-block-end:cornflowerblue;',
    cornsilk: 'border-block-end:cornsilk;',
    crimson: 'border-block-end:crimson;',
    currentColor: 'border-block-end:currentColor;',
    cyan: 'border-block-end:cyan;',
    darkblue: 'border-block-end:darkblue;',
    darkcyan: 'border-block-end:darkcyan;',
    darkgoldenrod: 'border-block-end:darkgoldenrod;',
    darkgray: 'border-block-end:darkgray;',
    darkgreen: 'border-block-end:darkgreen;',
    darkgrey: 'border-block-end:darkgrey;',
    darkkhaki: 'border-block-end:darkkhaki;',
    darkmagenta: 'border-block-end:darkmagenta;',
    darkolivegreen: 'border-block-end:darkolivegreen;',
    darkorange: 'border-block-end:darkorange;',
    darkorchid: 'border-block-end:darkorchid;',
    darkred: 'border-block-end:darkred;',
    darksalmon: 'border-block-end:darksalmon;',
    darkseagreen: 'border-block-end:darkseagreen;',
    darkslateblue: 'border-block-end:darkslateblue;',
    darkslategray: 'border-block-end:darkslategray;',
    darkslategrey: 'border-block-end:darkslategrey;',
    darkturquoise: 'border-block-end:darkturquoise;',
    darkviolet: 'border-block-end:darkviolet;',
    dashed: 'border-block-end:dashed;',
    deeppink: 'border-block-end:deeppink;',
    deepskyblue: 'border-block-end:deepskyblue;',
    dimgray: 'border-block-end:dimgray;',
    dimgrey: 'border-block-end:dimgrey;',
    dodgerblue: 'border-block-end:dodgerblue;',
    dotted: 'border-block-end:dotted;',
    double: 'border-block-end:double;',
    firebrick: 'border-block-end:firebrick;',
    floralwhite: 'border-block-end:floralwhite;',
    forestgreen: 'border-block-end:forestgreen;',
    fuchsia: 'border-block-end:fuchsia;',
    gainsboro: 'border-block-end:gainsboro;',
    ghostwhite: 'border-block-end:ghostwhite;',
    gold: 'border-block-end:gold;',
    goldenrod: 'border-block-end:goldenrod;',
    gray: 'border-block-end:gray;',
    green: 'border-block-end:green;',
    greenyellow: 'border-block-end:greenyellow;',
    grey: 'border-block-end:grey;',
    groove: 'border-block-end:groove;',
    hidden: 'border-block-end:hidden;',
    honeydew: 'border-block-end:honeydew;',
    hotpink: 'border-block-end:hotpink;',
    indianred: 'border-block-end:indianred;',
    indigo: 'border-block-end:indigo;',
    inherit: 'border-block-end:inherit;',
    initial: 'border-block-end:initial;',
    inset: 'border-block-end:inset;',
    ivory: 'border-block-end:ivory;',
    khaki: 'border-block-end:khaki;',
    lavender: 'border-block-end:lavender;',
    lavenderblush: 'border-block-end:lavenderblush;',
    lawngreen: 'border-block-end:lawngreen;',
    lemonchiffon: 'border-block-end:lemonchiffon;',
    lightblue: 'border-block-end:lightblue;',
    lightcoral: 'border-block-end:lightcoral;',
    lightcyan: 'border-block-end:lightcyan;',
    lightgoldenrodyellow: 'border-block-end:lightgoldenrodyellow;',
    lightgray: 'border-block-end:lightgray;',
    lightgreen: 'border-block-end:lightgreen;',
    lightgrey: 'border-block-end:lightgrey;',
    lightpink: 'border-block-end:lightpink;',
    lightsalmon: 'border-block-end:lightsalmon;',
    lightseagreen: 'border-block-end:lightseagreen;',
    lightskyblue: 'border-block-end:lightskyblue;',
    lightslategray: 'border-block-end:lightslategray;',
    lightslategrey: 'border-block-end:lightslategrey;',
    lightsteelblue: 'border-block-end:lightsteelblue;',
    lightyellow: 'border-block-end:lightyellow;',
    lime: 'border-block-end:lime;',
    limegreen: 'border-block-end:limegreen;',
    linen: 'border-block-end:linen;',
    magenta: 'border-block-end:magenta;',
    maroon: 'border-block-end:maroon;',
    medium: 'border-block-end:medium;',
    mediumaquamarine: 'border-block-end:mediumaquamarine;',
    mediumblue: 'border-block-end:mediumblue;',
    mediumorchid: 'border-block-end:mediumorchid;',
    mediumpurple: 'border-block-end:mediumpurple;',
    mediumseagreen: 'border-block-end:mediumseagreen;',
    mediumslateblue: 'border-block-end:mediumslateblue;',
    mediumspringgreen: 'border-block-end:mediumspringgreen;',
    mediumturquoise: 'border-block-end:mediumturquoise;',
    mediumvioletred: 'border-block-end:mediumvioletred;',
    midnightblue: 'border-block-end:midnightblue;',
    mintcream: 'border-block-end:mintcream;',
    mistyrose: 'border-block-end:mistyrose;',
    moccasin: 'border-block-end:moccasin;',
    navajowhite: 'border-block-end:navajowhite;',
    navy: 'border-block-end:navy;',
    none: 'border-block-end:none;',
    oldlace: 'border-block-end:oldlace;',
    olive: 'border-block-end:olive;',
    olivedrab: 'border-block-end:olivedrab;',
    orange: 'border-block-end:orange;',
    orangered: 'border-block-end:orangered;',
    orchid: 'border-block-end:orchid;',
    outset: 'border-block-end:outset;',
    palegoldenrod: 'border-block-end:palegoldenrod;',
    palegreen: 'border-block-end:palegreen;',
    paleturquoise: 'border-block-end:paleturquoise;',
    palevioletred: 'border-block-end:palevioletred;',
    papayawhip: 'border-block-end:papayawhip;',
    peachpuff: 'border-block-end:peachpuff;',
    peru: 'border-block-end:peru;',
    pink: 'border-block-end:pink;',
    plum: 'border-block-end:plum;',
    powderblue: 'border-block-end:powderblue;',
    purple: 'border-block-end:purple;',
    rebeccapurple: 'border-block-end:rebeccapurple;',
    red: 'border-block-end:red;',
    revert: 'border-block-end:revert;',
    revertLayer: 'border-block-end:revert-layer;',
    ridge: 'border-block-end:ridge;',
    rosybrown: 'border-block-end:rosybrown;',
    royalblue: 'border-block-end:royalblue;',
    saddlebrown: 'border-block-end:saddlebrown;',
    salmon: 'border-block-end:salmon;',
    sandybrown: 'border-block-end:sandybrown;',
    seagreen: 'border-block-end:seagreen;',
    seashell: 'border-block-end:seashell;',
    sienna: 'border-block-end:sienna;',
    silver: 'border-block-end:silver;',
    skyblue: 'border-block-end:skyblue;',
    slateblue: 'border-block-end:slateblue;',
    slategray: 'border-block-end:slategray;',
    slategrey: 'border-block-end:slategrey;',
    snow: 'border-block-end:snow;',
    solid: 'border-block-end:solid;',
    springgreen: 'border-block-end:springgreen;',
    steelblue: 'border-block-end:steelblue;',
    tan: 'border-block-end:tan;',
    teal: 'border-block-end:teal;',
    thick: 'border-block-end:thick;',
    thin: 'border-block-end:thin;',
    thistle: 'border-block-end:thistle;',
    tomato: 'border-block-end:tomato;',
    transparent: 'border-block-end:transparent;',
    turquoise: 'border-block-end:turquoise;',
    unset: 'border-block-end:unset;',
    violet: 'border-block-end:violet;',
    wheat: 'border-block-end:wheat;',
    white: 'border-block-end:white;',
    whitesmoke: 'border-block-end:whitesmoke;',
    yellow: 'border-block-end:yellow;',
    yellowgreen: 'border-block-end:yellowgreen;',
  } as const;
}

type BorderBlockEndCssKeywords = Readonly<ReturnType<typeof borderBlockEndKeywords>>;
export interface BorderBlockEndCss extends BorderBlockEndCssKeywords {}
/** CSS 属性 border-block-end。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
 */
export class BorderBlockEndCss extends LengthCssProperty<Property.BorderBlockEnd> {
  constructor() {
    super('border-block-end');
    initializeBorderBlockEndCss();
  }
}
let borderBlockEndReady = false;
function initializeBorderBlockEndCss(): void {
  if (borderBlockEndReady) return;
  Object.assign(BorderBlockEndCss.prototype, borderBlockEndKeywords());
  Object.freeze(BorderBlockEndCss.prototype);
  borderBlockEndReady = true;
}

function borderBlockEndColorKeywords() {
  return {
    AccentColor: 'border-block-end-color:AccentColor;',
    AccentColorText: 'border-block-end-color:AccentColorText;',
    ActiveBorder: 'border-block-end-color:ActiveBorder;',
    ActiveCaption: 'border-block-end-color:ActiveCaption;',
    ActiveText: 'border-block-end-color:ActiveText;',
    AppWorkspace: 'border-block-end-color:AppWorkspace;',
    Background: 'border-block-end-color:Background;',
    ButtonBorder: 'border-block-end-color:ButtonBorder;',
    ButtonFace: 'border-block-end-color:ButtonFace;',
    ButtonHighlight: 'border-block-end-color:ButtonHighlight;',
    ButtonShadow: 'border-block-end-color:ButtonShadow;',
    ButtonText: 'border-block-end-color:ButtonText;',
    Canvas: 'border-block-end-color:Canvas;',
    CanvasText: 'border-block-end-color:CanvasText;',
    CaptionText: 'border-block-end-color:CaptionText;',
    Field: 'border-block-end-color:Field;',
    FieldText: 'border-block-end-color:FieldText;',
    GrayText: 'border-block-end-color:GrayText;',
    Highlight: 'border-block-end-color:Highlight;',
    HighlightText: 'border-block-end-color:HighlightText;',
    InactiveBorder: 'border-block-end-color:InactiveBorder;',
    InactiveCaption: 'border-block-end-color:InactiveCaption;',
    InactiveCaptionText: 'border-block-end-color:InactiveCaptionText;',
    InfoBackground: 'border-block-end-color:InfoBackground;',
    InfoText: 'border-block-end-color:InfoText;',
    LinkText: 'border-block-end-color:LinkText;',
    Mark: 'border-block-end-color:Mark;',
    MarkText: 'border-block-end-color:MarkText;',
    Menu: 'border-block-end-color:Menu;',
    MenuText: 'border-block-end-color:MenuText;',
    Scrollbar: 'border-block-end-color:Scrollbar;',
    SelectedItem: 'border-block-end-color:SelectedItem;',
    SelectedItemText: 'border-block-end-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-block-end-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-block-end-color:ThreeDFace;',
    ThreeDHighlight: 'border-block-end-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-block-end-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-block-end-color:ThreeDShadow;',
    VisitedText: 'border-block-end-color:VisitedText;',
    Window: 'border-block-end-color:Window;',
    WindowFrame: 'border-block-end-color:WindowFrame;',
    WindowText: 'border-block-end-color:WindowText;',
    aliceblue: 'border-block-end-color:aliceblue;',
    antiquewhite: 'border-block-end-color:antiquewhite;',
    aqua: 'border-block-end-color:aqua;',
    aquamarine: 'border-block-end-color:aquamarine;',
    azure: 'border-block-end-color:azure;',
    beige: 'border-block-end-color:beige;',
    bisque: 'border-block-end-color:bisque;',
    black: 'border-block-end-color:black;',
    blanchedalmond: 'border-block-end-color:blanchedalmond;',
    blue: 'border-block-end-color:blue;',
    blueviolet: 'border-block-end-color:blueviolet;',
    brown: 'border-block-end-color:brown;',
    burlywood: 'border-block-end-color:burlywood;',
    cadetblue: 'border-block-end-color:cadetblue;',
    chartreuse: 'border-block-end-color:chartreuse;',
    chocolate: 'border-block-end-color:chocolate;',
    coral: 'border-block-end-color:coral;',
    cornflowerblue: 'border-block-end-color:cornflowerblue;',
    cornsilk: 'border-block-end-color:cornsilk;',
    crimson: 'border-block-end-color:crimson;',
    currentColor: 'border-block-end-color:currentColor;',
    cyan: 'border-block-end-color:cyan;',
    darkblue: 'border-block-end-color:darkblue;',
    darkcyan: 'border-block-end-color:darkcyan;',
    darkgoldenrod: 'border-block-end-color:darkgoldenrod;',
    darkgray: 'border-block-end-color:darkgray;',
    darkgreen: 'border-block-end-color:darkgreen;',
    darkgrey: 'border-block-end-color:darkgrey;',
    darkkhaki: 'border-block-end-color:darkkhaki;',
    darkmagenta: 'border-block-end-color:darkmagenta;',
    darkolivegreen: 'border-block-end-color:darkolivegreen;',
    darkorange: 'border-block-end-color:darkorange;',
    darkorchid: 'border-block-end-color:darkorchid;',
    darkred: 'border-block-end-color:darkred;',
    darksalmon: 'border-block-end-color:darksalmon;',
    darkseagreen: 'border-block-end-color:darkseagreen;',
    darkslateblue: 'border-block-end-color:darkslateblue;',
    darkslategray: 'border-block-end-color:darkslategray;',
    darkslategrey: 'border-block-end-color:darkslategrey;',
    darkturquoise: 'border-block-end-color:darkturquoise;',
    darkviolet: 'border-block-end-color:darkviolet;',
    deeppink: 'border-block-end-color:deeppink;',
    deepskyblue: 'border-block-end-color:deepskyblue;',
    dimgray: 'border-block-end-color:dimgray;',
    dimgrey: 'border-block-end-color:dimgrey;',
    dodgerblue: 'border-block-end-color:dodgerblue;',
    firebrick: 'border-block-end-color:firebrick;',
    floralwhite: 'border-block-end-color:floralwhite;',
    forestgreen: 'border-block-end-color:forestgreen;',
    fuchsia: 'border-block-end-color:fuchsia;',
    gainsboro: 'border-block-end-color:gainsboro;',
    ghostwhite: 'border-block-end-color:ghostwhite;',
    gold: 'border-block-end-color:gold;',
    goldenrod: 'border-block-end-color:goldenrod;',
    gray: 'border-block-end-color:gray;',
    green: 'border-block-end-color:green;',
    greenyellow: 'border-block-end-color:greenyellow;',
    grey: 'border-block-end-color:grey;',
    honeydew: 'border-block-end-color:honeydew;',
    hotpink: 'border-block-end-color:hotpink;',
    indianred: 'border-block-end-color:indianred;',
    indigo: 'border-block-end-color:indigo;',
    inherit: 'border-block-end-color:inherit;',
    initial: 'border-block-end-color:initial;',
    ivory: 'border-block-end-color:ivory;',
    khaki: 'border-block-end-color:khaki;',
    lavender: 'border-block-end-color:lavender;',
    lavenderblush: 'border-block-end-color:lavenderblush;',
    lawngreen: 'border-block-end-color:lawngreen;',
    lemonchiffon: 'border-block-end-color:lemonchiffon;',
    lightblue: 'border-block-end-color:lightblue;',
    lightcoral: 'border-block-end-color:lightcoral;',
    lightcyan: 'border-block-end-color:lightcyan;',
    lightgoldenrodyellow: 'border-block-end-color:lightgoldenrodyellow;',
    lightgray: 'border-block-end-color:lightgray;',
    lightgreen: 'border-block-end-color:lightgreen;',
    lightgrey: 'border-block-end-color:lightgrey;',
    lightpink: 'border-block-end-color:lightpink;',
    lightsalmon: 'border-block-end-color:lightsalmon;',
    lightseagreen: 'border-block-end-color:lightseagreen;',
    lightskyblue: 'border-block-end-color:lightskyblue;',
    lightslategray: 'border-block-end-color:lightslategray;',
    lightslategrey: 'border-block-end-color:lightslategrey;',
    lightsteelblue: 'border-block-end-color:lightsteelblue;',
    lightyellow: 'border-block-end-color:lightyellow;',
    lime: 'border-block-end-color:lime;',
    limegreen: 'border-block-end-color:limegreen;',
    linen: 'border-block-end-color:linen;',
    magenta: 'border-block-end-color:magenta;',
    maroon: 'border-block-end-color:maroon;',
    mediumaquamarine: 'border-block-end-color:mediumaquamarine;',
    mediumblue: 'border-block-end-color:mediumblue;',
    mediumorchid: 'border-block-end-color:mediumorchid;',
    mediumpurple: 'border-block-end-color:mediumpurple;',
    mediumseagreen: 'border-block-end-color:mediumseagreen;',
    mediumslateblue: 'border-block-end-color:mediumslateblue;',
    mediumspringgreen: 'border-block-end-color:mediumspringgreen;',
    mediumturquoise: 'border-block-end-color:mediumturquoise;',
    mediumvioletred: 'border-block-end-color:mediumvioletred;',
    midnightblue: 'border-block-end-color:midnightblue;',
    mintcream: 'border-block-end-color:mintcream;',
    mistyrose: 'border-block-end-color:mistyrose;',
    moccasin: 'border-block-end-color:moccasin;',
    navajowhite: 'border-block-end-color:navajowhite;',
    navy: 'border-block-end-color:navy;',
    oldlace: 'border-block-end-color:oldlace;',
    olive: 'border-block-end-color:olive;',
    olivedrab: 'border-block-end-color:olivedrab;',
    orange: 'border-block-end-color:orange;',
    orangered: 'border-block-end-color:orangered;',
    orchid: 'border-block-end-color:orchid;',
    palegoldenrod: 'border-block-end-color:palegoldenrod;',
    palegreen: 'border-block-end-color:palegreen;',
    paleturquoise: 'border-block-end-color:paleturquoise;',
    palevioletred: 'border-block-end-color:palevioletred;',
    papayawhip: 'border-block-end-color:papayawhip;',
    peachpuff: 'border-block-end-color:peachpuff;',
    peru: 'border-block-end-color:peru;',
    pink: 'border-block-end-color:pink;',
    plum: 'border-block-end-color:plum;',
    powderblue: 'border-block-end-color:powderblue;',
    purple: 'border-block-end-color:purple;',
    rebeccapurple: 'border-block-end-color:rebeccapurple;',
    red: 'border-block-end-color:red;',
    revert: 'border-block-end-color:revert;',
    revertLayer: 'border-block-end-color:revert-layer;',
    rosybrown: 'border-block-end-color:rosybrown;',
    royalblue: 'border-block-end-color:royalblue;',
    saddlebrown: 'border-block-end-color:saddlebrown;',
    salmon: 'border-block-end-color:salmon;',
    sandybrown: 'border-block-end-color:sandybrown;',
    seagreen: 'border-block-end-color:seagreen;',
    seashell: 'border-block-end-color:seashell;',
    sienna: 'border-block-end-color:sienna;',
    silver: 'border-block-end-color:silver;',
    skyblue: 'border-block-end-color:skyblue;',
    slateblue: 'border-block-end-color:slateblue;',
    slategray: 'border-block-end-color:slategray;',
    slategrey: 'border-block-end-color:slategrey;',
    snow: 'border-block-end-color:snow;',
    springgreen: 'border-block-end-color:springgreen;',
    steelblue: 'border-block-end-color:steelblue;',
    tan: 'border-block-end-color:tan;',
    teal: 'border-block-end-color:teal;',
    thistle: 'border-block-end-color:thistle;',
    tomato: 'border-block-end-color:tomato;',
    transparent: 'border-block-end-color:transparent;',
    turquoise: 'border-block-end-color:turquoise;',
    unset: 'border-block-end-color:unset;',
    violet: 'border-block-end-color:violet;',
    wheat: 'border-block-end-color:wheat;',
    white: 'border-block-end-color:white;',
    whitesmoke: 'border-block-end-color:whitesmoke;',
    yellow: 'border-block-end-color:yellow;',
    yellowgreen: 'border-block-end-color:yellowgreen;',
  } as const;
}

type BorderBlockEndColorCssKeywords = Readonly<ReturnType<typeof borderBlockEndColorKeywords>>;
export interface BorderBlockEndColorCss extends BorderBlockEndColorCssKeywords {}
/** CSS 属性 border-block-end-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
 */
export class BorderBlockEndColorCss extends CssProperty<Property.BorderBlockEndColor> {
  constructor() {
    super('border-block-end-color');
    initializeBorderBlockEndColorCss();
  }
}
let borderBlockEndColorReady = false;
function initializeBorderBlockEndColorCss(): void {
  if (borderBlockEndColorReady) return;
  Object.assign(BorderBlockEndColorCss.prototype, borderBlockEndColorKeywords());
  Object.freeze(BorderBlockEndColorCss.prototype);
  borderBlockEndColorReady = true;
}

function borderBlockEndStyleKeywords() {
  return {
    dashed: 'border-block-end-style:dashed;',
    dotted: 'border-block-end-style:dotted;',
    double: 'border-block-end-style:double;',
    groove: 'border-block-end-style:groove;',
    hidden: 'border-block-end-style:hidden;',
    inherit: 'border-block-end-style:inherit;',
    initial: 'border-block-end-style:initial;',
    inset: 'border-block-end-style:inset;',
    none: 'border-block-end-style:none;',
    outset: 'border-block-end-style:outset;',
    revert: 'border-block-end-style:revert;',
    revertLayer: 'border-block-end-style:revert-layer;',
    ridge: 'border-block-end-style:ridge;',
    solid: 'border-block-end-style:solid;',
    unset: 'border-block-end-style:unset;',
  } as const;
}

type BorderBlockEndStyleCssKeywords = Readonly<ReturnType<typeof borderBlockEndStyleKeywords>>;
export interface BorderBlockEndStyleCss extends BorderBlockEndStyleCssKeywords {}
/** CSS 属性 border-block-end-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
 */
export class BorderBlockEndStyleCss extends CssProperty<Property.BorderBlockEndStyle> {
  constructor() {
    super('border-block-end-style');
    initializeBorderBlockEndStyleCss();
  }
}
let borderBlockEndStyleReady = false;
function initializeBorderBlockEndStyleCss(): void {
  if (borderBlockEndStyleReady) return;
  Object.assign(BorderBlockEndStyleCss.prototype, borderBlockEndStyleKeywords());
  Object.freeze(BorderBlockEndStyleCss.prototype);
  borderBlockEndStyleReady = true;
}

function borderBlockEndWidthKeywords() {
  return {
    inherit: 'border-block-end-width:inherit;',
    initial: 'border-block-end-width:initial;',
    medium: 'border-block-end-width:medium;',
    revert: 'border-block-end-width:revert;',
    revertLayer: 'border-block-end-width:revert-layer;',
    thick: 'border-block-end-width:thick;',
    thin: 'border-block-end-width:thin;',
    unset: 'border-block-end-width:unset;',
  } as const;
}

type BorderBlockEndWidthCssKeywords = Readonly<ReturnType<typeof borderBlockEndWidthKeywords>>;
export interface BorderBlockEndWidthCss extends BorderBlockEndWidthCssKeywords {}
/** CSS 属性 border-block-end-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
 */
export class BorderBlockEndWidthCss extends LengthCssProperty<Property.BorderBlockEndWidth> {
  constructor() {
    super('border-block-end-width');
    initializeBorderBlockEndWidthCss();
  }
}
let borderBlockEndWidthReady = false;
function initializeBorderBlockEndWidthCss(): void {
  if (borderBlockEndWidthReady) return;
  Object.assign(BorderBlockEndWidthCss.prototype, borderBlockEndWidthKeywords());
  Object.freeze(BorderBlockEndWidthCss.prototype);
  borderBlockEndWidthReady = true;
}

function borderBlockStartKeywords() {
  return {
    AccentColor: 'border-block-start:AccentColor;',
    AccentColorText: 'border-block-start:AccentColorText;',
    ActiveBorder: 'border-block-start:ActiveBorder;',
    ActiveCaption: 'border-block-start:ActiveCaption;',
    ActiveText: 'border-block-start:ActiveText;',
    AppWorkspace: 'border-block-start:AppWorkspace;',
    Background: 'border-block-start:Background;',
    ButtonBorder: 'border-block-start:ButtonBorder;',
    ButtonFace: 'border-block-start:ButtonFace;',
    ButtonHighlight: 'border-block-start:ButtonHighlight;',
    ButtonShadow: 'border-block-start:ButtonShadow;',
    ButtonText: 'border-block-start:ButtonText;',
    Canvas: 'border-block-start:Canvas;',
    CanvasText: 'border-block-start:CanvasText;',
    CaptionText: 'border-block-start:CaptionText;',
    Field: 'border-block-start:Field;',
    FieldText: 'border-block-start:FieldText;',
    GrayText: 'border-block-start:GrayText;',
    Highlight: 'border-block-start:Highlight;',
    HighlightText: 'border-block-start:HighlightText;',
    InactiveBorder: 'border-block-start:InactiveBorder;',
    InactiveCaption: 'border-block-start:InactiveCaption;',
    InactiveCaptionText: 'border-block-start:InactiveCaptionText;',
    InfoBackground: 'border-block-start:InfoBackground;',
    InfoText: 'border-block-start:InfoText;',
    LinkText: 'border-block-start:LinkText;',
    Mark: 'border-block-start:Mark;',
    MarkText: 'border-block-start:MarkText;',
    Menu: 'border-block-start:Menu;',
    MenuText: 'border-block-start:MenuText;',
    Scrollbar: 'border-block-start:Scrollbar;',
    SelectedItem: 'border-block-start:SelectedItem;',
    SelectedItemText: 'border-block-start:SelectedItemText;',
    ThreeDDarkShadow: 'border-block-start:ThreeDDarkShadow;',
    ThreeDFace: 'border-block-start:ThreeDFace;',
    ThreeDHighlight: 'border-block-start:ThreeDHighlight;',
    ThreeDLightShadow: 'border-block-start:ThreeDLightShadow;',
    ThreeDShadow: 'border-block-start:ThreeDShadow;',
    VisitedText: 'border-block-start:VisitedText;',
    Window: 'border-block-start:Window;',
    WindowFrame: 'border-block-start:WindowFrame;',
    WindowText: 'border-block-start:WindowText;',
    aliceblue: 'border-block-start:aliceblue;',
    antiquewhite: 'border-block-start:antiquewhite;',
    aqua: 'border-block-start:aqua;',
    aquamarine: 'border-block-start:aquamarine;',
    azure: 'border-block-start:azure;',
    beige: 'border-block-start:beige;',
    bisque: 'border-block-start:bisque;',
    black: 'border-block-start:black;',
    blanchedalmond: 'border-block-start:blanchedalmond;',
    blue: 'border-block-start:blue;',
    blueviolet: 'border-block-start:blueviolet;',
    brown: 'border-block-start:brown;',
    burlywood: 'border-block-start:burlywood;',
    cadetblue: 'border-block-start:cadetblue;',
    chartreuse: 'border-block-start:chartreuse;',
    chocolate: 'border-block-start:chocolate;',
    coral: 'border-block-start:coral;',
    cornflowerblue: 'border-block-start:cornflowerblue;',
    cornsilk: 'border-block-start:cornsilk;',
    crimson: 'border-block-start:crimson;',
    currentColor: 'border-block-start:currentColor;',
    cyan: 'border-block-start:cyan;',
    darkblue: 'border-block-start:darkblue;',
    darkcyan: 'border-block-start:darkcyan;',
    darkgoldenrod: 'border-block-start:darkgoldenrod;',
    darkgray: 'border-block-start:darkgray;',
    darkgreen: 'border-block-start:darkgreen;',
    darkgrey: 'border-block-start:darkgrey;',
    darkkhaki: 'border-block-start:darkkhaki;',
    darkmagenta: 'border-block-start:darkmagenta;',
    darkolivegreen: 'border-block-start:darkolivegreen;',
    darkorange: 'border-block-start:darkorange;',
    darkorchid: 'border-block-start:darkorchid;',
    darkred: 'border-block-start:darkred;',
    darksalmon: 'border-block-start:darksalmon;',
    darkseagreen: 'border-block-start:darkseagreen;',
    darkslateblue: 'border-block-start:darkslateblue;',
    darkslategray: 'border-block-start:darkslategray;',
    darkslategrey: 'border-block-start:darkslategrey;',
    darkturquoise: 'border-block-start:darkturquoise;',
    darkviolet: 'border-block-start:darkviolet;',
    dashed: 'border-block-start:dashed;',
    deeppink: 'border-block-start:deeppink;',
    deepskyblue: 'border-block-start:deepskyblue;',
    dimgray: 'border-block-start:dimgray;',
    dimgrey: 'border-block-start:dimgrey;',
    dodgerblue: 'border-block-start:dodgerblue;',
    dotted: 'border-block-start:dotted;',
    double: 'border-block-start:double;',
    firebrick: 'border-block-start:firebrick;',
    floralwhite: 'border-block-start:floralwhite;',
    forestgreen: 'border-block-start:forestgreen;',
    fuchsia: 'border-block-start:fuchsia;',
    gainsboro: 'border-block-start:gainsboro;',
    ghostwhite: 'border-block-start:ghostwhite;',
    gold: 'border-block-start:gold;',
    goldenrod: 'border-block-start:goldenrod;',
    gray: 'border-block-start:gray;',
    green: 'border-block-start:green;',
    greenyellow: 'border-block-start:greenyellow;',
    grey: 'border-block-start:grey;',
    groove: 'border-block-start:groove;',
    hidden: 'border-block-start:hidden;',
    honeydew: 'border-block-start:honeydew;',
    hotpink: 'border-block-start:hotpink;',
    indianred: 'border-block-start:indianred;',
    indigo: 'border-block-start:indigo;',
    inherit: 'border-block-start:inherit;',
    initial: 'border-block-start:initial;',
    inset: 'border-block-start:inset;',
    ivory: 'border-block-start:ivory;',
    khaki: 'border-block-start:khaki;',
    lavender: 'border-block-start:lavender;',
    lavenderblush: 'border-block-start:lavenderblush;',
    lawngreen: 'border-block-start:lawngreen;',
    lemonchiffon: 'border-block-start:lemonchiffon;',
    lightblue: 'border-block-start:lightblue;',
    lightcoral: 'border-block-start:lightcoral;',
    lightcyan: 'border-block-start:lightcyan;',
    lightgoldenrodyellow: 'border-block-start:lightgoldenrodyellow;',
    lightgray: 'border-block-start:lightgray;',
    lightgreen: 'border-block-start:lightgreen;',
    lightgrey: 'border-block-start:lightgrey;',
    lightpink: 'border-block-start:lightpink;',
    lightsalmon: 'border-block-start:lightsalmon;',
    lightseagreen: 'border-block-start:lightseagreen;',
    lightskyblue: 'border-block-start:lightskyblue;',
    lightslategray: 'border-block-start:lightslategray;',
    lightslategrey: 'border-block-start:lightslategrey;',
    lightsteelblue: 'border-block-start:lightsteelblue;',
    lightyellow: 'border-block-start:lightyellow;',
    lime: 'border-block-start:lime;',
    limegreen: 'border-block-start:limegreen;',
    linen: 'border-block-start:linen;',
    magenta: 'border-block-start:magenta;',
    maroon: 'border-block-start:maroon;',
    medium: 'border-block-start:medium;',
    mediumaquamarine: 'border-block-start:mediumaquamarine;',
    mediumblue: 'border-block-start:mediumblue;',
    mediumorchid: 'border-block-start:mediumorchid;',
    mediumpurple: 'border-block-start:mediumpurple;',
    mediumseagreen: 'border-block-start:mediumseagreen;',
    mediumslateblue: 'border-block-start:mediumslateblue;',
    mediumspringgreen: 'border-block-start:mediumspringgreen;',
    mediumturquoise: 'border-block-start:mediumturquoise;',
    mediumvioletred: 'border-block-start:mediumvioletred;',
    midnightblue: 'border-block-start:midnightblue;',
    mintcream: 'border-block-start:mintcream;',
    mistyrose: 'border-block-start:mistyrose;',
    moccasin: 'border-block-start:moccasin;',
    navajowhite: 'border-block-start:navajowhite;',
    navy: 'border-block-start:navy;',
    none: 'border-block-start:none;',
    oldlace: 'border-block-start:oldlace;',
    olive: 'border-block-start:olive;',
    olivedrab: 'border-block-start:olivedrab;',
    orange: 'border-block-start:orange;',
    orangered: 'border-block-start:orangered;',
    orchid: 'border-block-start:orchid;',
    outset: 'border-block-start:outset;',
    palegoldenrod: 'border-block-start:palegoldenrod;',
    palegreen: 'border-block-start:palegreen;',
    paleturquoise: 'border-block-start:paleturquoise;',
    palevioletred: 'border-block-start:palevioletred;',
    papayawhip: 'border-block-start:papayawhip;',
    peachpuff: 'border-block-start:peachpuff;',
    peru: 'border-block-start:peru;',
    pink: 'border-block-start:pink;',
    plum: 'border-block-start:plum;',
    powderblue: 'border-block-start:powderblue;',
    purple: 'border-block-start:purple;',
    rebeccapurple: 'border-block-start:rebeccapurple;',
    red: 'border-block-start:red;',
    revert: 'border-block-start:revert;',
    revertLayer: 'border-block-start:revert-layer;',
    ridge: 'border-block-start:ridge;',
    rosybrown: 'border-block-start:rosybrown;',
    royalblue: 'border-block-start:royalblue;',
    saddlebrown: 'border-block-start:saddlebrown;',
    salmon: 'border-block-start:salmon;',
    sandybrown: 'border-block-start:sandybrown;',
    seagreen: 'border-block-start:seagreen;',
    seashell: 'border-block-start:seashell;',
    sienna: 'border-block-start:sienna;',
    silver: 'border-block-start:silver;',
    skyblue: 'border-block-start:skyblue;',
    slateblue: 'border-block-start:slateblue;',
    slategray: 'border-block-start:slategray;',
    slategrey: 'border-block-start:slategrey;',
    snow: 'border-block-start:snow;',
    solid: 'border-block-start:solid;',
    springgreen: 'border-block-start:springgreen;',
    steelblue: 'border-block-start:steelblue;',
    tan: 'border-block-start:tan;',
    teal: 'border-block-start:teal;',
    thick: 'border-block-start:thick;',
    thin: 'border-block-start:thin;',
    thistle: 'border-block-start:thistle;',
    tomato: 'border-block-start:tomato;',
    transparent: 'border-block-start:transparent;',
    turquoise: 'border-block-start:turquoise;',
    unset: 'border-block-start:unset;',
    violet: 'border-block-start:violet;',
    wheat: 'border-block-start:wheat;',
    white: 'border-block-start:white;',
    whitesmoke: 'border-block-start:whitesmoke;',
    yellow: 'border-block-start:yellow;',
    yellowgreen: 'border-block-start:yellowgreen;',
  } as const;
}

type BorderBlockStartCssKeywords = Readonly<ReturnType<typeof borderBlockStartKeywords>>;
export interface BorderBlockStartCss extends BorderBlockStartCssKeywords {}
/** CSS 属性 border-block-start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
 */
export class BorderBlockStartCss extends LengthCssProperty<Property.BorderBlockStart> {
  constructor() {
    super('border-block-start');
    initializeBorderBlockStartCss();
  }
}
let borderBlockStartReady = false;
function initializeBorderBlockStartCss(): void {
  if (borderBlockStartReady) return;
  Object.assign(BorderBlockStartCss.prototype, borderBlockStartKeywords());
  Object.freeze(BorderBlockStartCss.prototype);
  borderBlockStartReady = true;
}

function borderBlockStartColorKeywords() {
  return {
    AccentColor: 'border-block-start-color:AccentColor;',
    AccentColorText: 'border-block-start-color:AccentColorText;',
    ActiveBorder: 'border-block-start-color:ActiveBorder;',
    ActiveCaption: 'border-block-start-color:ActiveCaption;',
    ActiveText: 'border-block-start-color:ActiveText;',
    AppWorkspace: 'border-block-start-color:AppWorkspace;',
    Background: 'border-block-start-color:Background;',
    ButtonBorder: 'border-block-start-color:ButtonBorder;',
    ButtonFace: 'border-block-start-color:ButtonFace;',
    ButtonHighlight: 'border-block-start-color:ButtonHighlight;',
    ButtonShadow: 'border-block-start-color:ButtonShadow;',
    ButtonText: 'border-block-start-color:ButtonText;',
    Canvas: 'border-block-start-color:Canvas;',
    CanvasText: 'border-block-start-color:CanvasText;',
    CaptionText: 'border-block-start-color:CaptionText;',
    Field: 'border-block-start-color:Field;',
    FieldText: 'border-block-start-color:FieldText;',
    GrayText: 'border-block-start-color:GrayText;',
    Highlight: 'border-block-start-color:Highlight;',
    HighlightText: 'border-block-start-color:HighlightText;',
    InactiveBorder: 'border-block-start-color:InactiveBorder;',
    InactiveCaption: 'border-block-start-color:InactiveCaption;',
    InactiveCaptionText: 'border-block-start-color:InactiveCaptionText;',
    InfoBackground: 'border-block-start-color:InfoBackground;',
    InfoText: 'border-block-start-color:InfoText;',
    LinkText: 'border-block-start-color:LinkText;',
    Mark: 'border-block-start-color:Mark;',
    MarkText: 'border-block-start-color:MarkText;',
    Menu: 'border-block-start-color:Menu;',
    MenuText: 'border-block-start-color:MenuText;',
    Scrollbar: 'border-block-start-color:Scrollbar;',
    SelectedItem: 'border-block-start-color:SelectedItem;',
    SelectedItemText: 'border-block-start-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-block-start-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-block-start-color:ThreeDFace;',
    ThreeDHighlight: 'border-block-start-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-block-start-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-block-start-color:ThreeDShadow;',
    VisitedText: 'border-block-start-color:VisitedText;',
    Window: 'border-block-start-color:Window;',
    WindowFrame: 'border-block-start-color:WindowFrame;',
    WindowText: 'border-block-start-color:WindowText;',
    aliceblue: 'border-block-start-color:aliceblue;',
    antiquewhite: 'border-block-start-color:antiquewhite;',
    aqua: 'border-block-start-color:aqua;',
    aquamarine: 'border-block-start-color:aquamarine;',
    azure: 'border-block-start-color:azure;',
    beige: 'border-block-start-color:beige;',
    bisque: 'border-block-start-color:bisque;',
    black: 'border-block-start-color:black;',
    blanchedalmond: 'border-block-start-color:blanchedalmond;',
    blue: 'border-block-start-color:blue;',
    blueviolet: 'border-block-start-color:blueviolet;',
    brown: 'border-block-start-color:brown;',
    burlywood: 'border-block-start-color:burlywood;',
    cadetblue: 'border-block-start-color:cadetblue;',
    chartreuse: 'border-block-start-color:chartreuse;',
    chocolate: 'border-block-start-color:chocolate;',
    coral: 'border-block-start-color:coral;',
    cornflowerblue: 'border-block-start-color:cornflowerblue;',
    cornsilk: 'border-block-start-color:cornsilk;',
    crimson: 'border-block-start-color:crimson;',
    currentColor: 'border-block-start-color:currentColor;',
    cyan: 'border-block-start-color:cyan;',
    darkblue: 'border-block-start-color:darkblue;',
    darkcyan: 'border-block-start-color:darkcyan;',
    darkgoldenrod: 'border-block-start-color:darkgoldenrod;',
    darkgray: 'border-block-start-color:darkgray;',
    darkgreen: 'border-block-start-color:darkgreen;',
    darkgrey: 'border-block-start-color:darkgrey;',
    darkkhaki: 'border-block-start-color:darkkhaki;',
    darkmagenta: 'border-block-start-color:darkmagenta;',
    darkolivegreen: 'border-block-start-color:darkolivegreen;',
    darkorange: 'border-block-start-color:darkorange;',
    darkorchid: 'border-block-start-color:darkorchid;',
    darkred: 'border-block-start-color:darkred;',
    darksalmon: 'border-block-start-color:darksalmon;',
    darkseagreen: 'border-block-start-color:darkseagreen;',
    darkslateblue: 'border-block-start-color:darkslateblue;',
    darkslategray: 'border-block-start-color:darkslategray;',
    darkslategrey: 'border-block-start-color:darkslategrey;',
    darkturquoise: 'border-block-start-color:darkturquoise;',
    darkviolet: 'border-block-start-color:darkviolet;',
    deeppink: 'border-block-start-color:deeppink;',
    deepskyblue: 'border-block-start-color:deepskyblue;',
    dimgray: 'border-block-start-color:dimgray;',
    dimgrey: 'border-block-start-color:dimgrey;',
    dodgerblue: 'border-block-start-color:dodgerblue;',
    firebrick: 'border-block-start-color:firebrick;',
    floralwhite: 'border-block-start-color:floralwhite;',
    forestgreen: 'border-block-start-color:forestgreen;',
    fuchsia: 'border-block-start-color:fuchsia;',
    gainsboro: 'border-block-start-color:gainsboro;',
    ghostwhite: 'border-block-start-color:ghostwhite;',
    gold: 'border-block-start-color:gold;',
    goldenrod: 'border-block-start-color:goldenrod;',
    gray: 'border-block-start-color:gray;',
    green: 'border-block-start-color:green;',
    greenyellow: 'border-block-start-color:greenyellow;',
    grey: 'border-block-start-color:grey;',
    honeydew: 'border-block-start-color:honeydew;',
    hotpink: 'border-block-start-color:hotpink;',
    indianred: 'border-block-start-color:indianred;',
    indigo: 'border-block-start-color:indigo;',
    inherit: 'border-block-start-color:inherit;',
    initial: 'border-block-start-color:initial;',
    ivory: 'border-block-start-color:ivory;',
    khaki: 'border-block-start-color:khaki;',
    lavender: 'border-block-start-color:lavender;',
    lavenderblush: 'border-block-start-color:lavenderblush;',
    lawngreen: 'border-block-start-color:lawngreen;',
    lemonchiffon: 'border-block-start-color:lemonchiffon;',
    lightblue: 'border-block-start-color:lightblue;',
    lightcoral: 'border-block-start-color:lightcoral;',
    lightcyan: 'border-block-start-color:lightcyan;',
    lightgoldenrodyellow: 'border-block-start-color:lightgoldenrodyellow;',
    lightgray: 'border-block-start-color:lightgray;',
    lightgreen: 'border-block-start-color:lightgreen;',
    lightgrey: 'border-block-start-color:lightgrey;',
    lightpink: 'border-block-start-color:lightpink;',
    lightsalmon: 'border-block-start-color:lightsalmon;',
    lightseagreen: 'border-block-start-color:lightseagreen;',
    lightskyblue: 'border-block-start-color:lightskyblue;',
    lightslategray: 'border-block-start-color:lightslategray;',
    lightslategrey: 'border-block-start-color:lightslategrey;',
    lightsteelblue: 'border-block-start-color:lightsteelblue;',
    lightyellow: 'border-block-start-color:lightyellow;',
    lime: 'border-block-start-color:lime;',
    limegreen: 'border-block-start-color:limegreen;',
    linen: 'border-block-start-color:linen;',
    magenta: 'border-block-start-color:magenta;',
    maroon: 'border-block-start-color:maroon;',
    mediumaquamarine: 'border-block-start-color:mediumaquamarine;',
    mediumblue: 'border-block-start-color:mediumblue;',
    mediumorchid: 'border-block-start-color:mediumorchid;',
    mediumpurple: 'border-block-start-color:mediumpurple;',
    mediumseagreen: 'border-block-start-color:mediumseagreen;',
    mediumslateblue: 'border-block-start-color:mediumslateblue;',
    mediumspringgreen: 'border-block-start-color:mediumspringgreen;',
    mediumturquoise: 'border-block-start-color:mediumturquoise;',
    mediumvioletred: 'border-block-start-color:mediumvioletred;',
    midnightblue: 'border-block-start-color:midnightblue;',
    mintcream: 'border-block-start-color:mintcream;',
    mistyrose: 'border-block-start-color:mistyrose;',
    moccasin: 'border-block-start-color:moccasin;',
    navajowhite: 'border-block-start-color:navajowhite;',
    navy: 'border-block-start-color:navy;',
    oldlace: 'border-block-start-color:oldlace;',
    olive: 'border-block-start-color:olive;',
    olivedrab: 'border-block-start-color:olivedrab;',
    orange: 'border-block-start-color:orange;',
    orangered: 'border-block-start-color:orangered;',
    orchid: 'border-block-start-color:orchid;',
    palegoldenrod: 'border-block-start-color:palegoldenrod;',
    palegreen: 'border-block-start-color:palegreen;',
    paleturquoise: 'border-block-start-color:paleturquoise;',
    palevioletred: 'border-block-start-color:palevioletred;',
    papayawhip: 'border-block-start-color:papayawhip;',
    peachpuff: 'border-block-start-color:peachpuff;',
    peru: 'border-block-start-color:peru;',
    pink: 'border-block-start-color:pink;',
    plum: 'border-block-start-color:plum;',
    powderblue: 'border-block-start-color:powderblue;',
    purple: 'border-block-start-color:purple;',
    rebeccapurple: 'border-block-start-color:rebeccapurple;',
    red: 'border-block-start-color:red;',
    revert: 'border-block-start-color:revert;',
    revertLayer: 'border-block-start-color:revert-layer;',
    rosybrown: 'border-block-start-color:rosybrown;',
    royalblue: 'border-block-start-color:royalblue;',
    saddlebrown: 'border-block-start-color:saddlebrown;',
    salmon: 'border-block-start-color:salmon;',
    sandybrown: 'border-block-start-color:sandybrown;',
    seagreen: 'border-block-start-color:seagreen;',
    seashell: 'border-block-start-color:seashell;',
    sienna: 'border-block-start-color:sienna;',
    silver: 'border-block-start-color:silver;',
    skyblue: 'border-block-start-color:skyblue;',
    slateblue: 'border-block-start-color:slateblue;',
    slategray: 'border-block-start-color:slategray;',
    slategrey: 'border-block-start-color:slategrey;',
    snow: 'border-block-start-color:snow;',
    springgreen: 'border-block-start-color:springgreen;',
    steelblue: 'border-block-start-color:steelblue;',
    tan: 'border-block-start-color:tan;',
    teal: 'border-block-start-color:teal;',
    thistle: 'border-block-start-color:thistle;',
    tomato: 'border-block-start-color:tomato;',
    transparent: 'border-block-start-color:transparent;',
    turquoise: 'border-block-start-color:turquoise;',
    unset: 'border-block-start-color:unset;',
    violet: 'border-block-start-color:violet;',
    wheat: 'border-block-start-color:wheat;',
    white: 'border-block-start-color:white;',
    whitesmoke: 'border-block-start-color:whitesmoke;',
    yellow: 'border-block-start-color:yellow;',
    yellowgreen: 'border-block-start-color:yellowgreen;',
  } as const;
}

type BorderBlockStartColorCssKeywords = Readonly<ReturnType<typeof borderBlockStartColorKeywords>>;
export interface BorderBlockStartColorCss extends BorderBlockStartColorCssKeywords {}
/** CSS 属性 border-block-start-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
 */
export class BorderBlockStartColorCss extends CssProperty<Property.BorderBlockStartColor> {
  constructor() {
    super('border-block-start-color');
    initializeBorderBlockStartColorCss();
  }
}
let borderBlockStartColorReady = false;
function initializeBorderBlockStartColorCss(): void {
  if (borderBlockStartColorReady) return;
  Object.assign(BorderBlockStartColorCss.prototype, borderBlockStartColorKeywords());
  Object.freeze(BorderBlockStartColorCss.prototype);
  borderBlockStartColorReady = true;
}

function borderBlockStartStyleKeywords() {
  return {
    dashed: 'border-block-start-style:dashed;',
    dotted: 'border-block-start-style:dotted;',
    double: 'border-block-start-style:double;',
    groove: 'border-block-start-style:groove;',
    hidden: 'border-block-start-style:hidden;',
    inherit: 'border-block-start-style:inherit;',
    initial: 'border-block-start-style:initial;',
    inset: 'border-block-start-style:inset;',
    none: 'border-block-start-style:none;',
    outset: 'border-block-start-style:outset;',
    revert: 'border-block-start-style:revert;',
    revertLayer: 'border-block-start-style:revert-layer;',
    ridge: 'border-block-start-style:ridge;',
    solid: 'border-block-start-style:solid;',
    unset: 'border-block-start-style:unset;',
  } as const;
}

type BorderBlockStartStyleCssKeywords = Readonly<ReturnType<typeof borderBlockStartStyleKeywords>>;
export interface BorderBlockStartStyleCss extends BorderBlockStartStyleCssKeywords {}
/** CSS 属性 border-block-start-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
 */
export class BorderBlockStartStyleCss extends CssProperty<Property.BorderBlockStartStyle> {
  constructor() {
    super('border-block-start-style');
    initializeBorderBlockStartStyleCss();
  }
}
let borderBlockStartStyleReady = false;
function initializeBorderBlockStartStyleCss(): void {
  if (borderBlockStartStyleReady) return;
  Object.assign(BorderBlockStartStyleCss.prototype, borderBlockStartStyleKeywords());
  Object.freeze(BorderBlockStartStyleCss.prototype);
  borderBlockStartStyleReady = true;
}

function borderBlockStartWidthKeywords() {
  return {
    inherit: 'border-block-start-width:inherit;',
    initial: 'border-block-start-width:initial;',
    medium: 'border-block-start-width:medium;',
    revert: 'border-block-start-width:revert;',
    revertLayer: 'border-block-start-width:revert-layer;',
    thick: 'border-block-start-width:thick;',
    thin: 'border-block-start-width:thin;',
    unset: 'border-block-start-width:unset;',
  } as const;
}

type BorderBlockStartWidthCssKeywords = Readonly<ReturnType<typeof borderBlockStartWidthKeywords>>;
export interface BorderBlockStartWidthCss extends BorderBlockStartWidthCssKeywords {}
/** CSS 属性 border-block-start-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
 */
export class BorderBlockStartWidthCss extends LengthCssProperty<Property.BorderBlockStartWidth> {
  constructor() {
    super('border-block-start-width');
    initializeBorderBlockStartWidthCss();
  }
}
let borderBlockStartWidthReady = false;
function initializeBorderBlockStartWidthCss(): void {
  if (borderBlockStartWidthReady) return;
  Object.assign(BorderBlockStartWidthCss.prototype, borderBlockStartWidthKeywords());
  Object.freeze(BorderBlockStartWidthCss.prototype);
  borderBlockStartWidthReady = true;
}

function borderBlockStyleKeywords() {
  return {
    dashed: 'border-block-style:dashed;',
    dotted: 'border-block-style:dotted;',
    double: 'border-block-style:double;',
    groove: 'border-block-style:groove;',
    hidden: 'border-block-style:hidden;',
    inherit: 'border-block-style:inherit;',
    initial: 'border-block-style:initial;',
    inset: 'border-block-style:inset;',
    none: 'border-block-style:none;',
    outset: 'border-block-style:outset;',
    revert: 'border-block-style:revert;',
    revertLayer: 'border-block-style:revert-layer;',
    ridge: 'border-block-style:ridge;',
    solid: 'border-block-style:solid;',
    unset: 'border-block-style:unset;',
  } as const;
}

type BorderBlockStyleCssKeywords = Readonly<ReturnType<typeof borderBlockStyleKeywords>>;
export interface BorderBlockStyleCss extends BorderBlockStyleCssKeywords {}
/** CSS 属性 border-block-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
 */
export class BorderBlockStyleCss extends CssProperty<Property.BorderBlockStyle> {
  constructor() {
    super('border-block-style');
    initializeBorderBlockStyleCss();
  }
}
let borderBlockStyleReady = false;
function initializeBorderBlockStyleCss(): void {
  if (borderBlockStyleReady) return;
  Object.assign(BorderBlockStyleCss.prototype, borderBlockStyleKeywords());
  Object.freeze(BorderBlockStyleCss.prototype);
  borderBlockStyleReady = true;
}

function borderBlockWidthKeywords() {
  return {
    inherit: 'border-block-width:inherit;',
    initial: 'border-block-width:initial;',
    medium: 'border-block-width:medium;',
    revert: 'border-block-width:revert;',
    revertLayer: 'border-block-width:revert-layer;',
    thick: 'border-block-width:thick;',
    thin: 'border-block-width:thin;',
    unset: 'border-block-width:unset;',
  } as const;
}

type BorderBlockWidthCssKeywords = Readonly<ReturnType<typeof borderBlockWidthKeywords>>;
export interface BorderBlockWidthCss extends BorderBlockWidthCssKeywords {}
/** CSS 属性 border-block-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
 */
export class BorderBlockWidthCss extends LengthCssProperty<Property.BorderBlockWidth> {
  constructor() {
    super('border-block-width');
    initializeBorderBlockWidthCss();
  }
}
let borderBlockWidthReady = false;
function initializeBorderBlockWidthCss(): void {
  if (borderBlockWidthReady) return;
  Object.assign(BorderBlockWidthCss.prototype, borderBlockWidthKeywords());
  Object.freeze(BorderBlockWidthCss.prototype);
  borderBlockWidthReady = true;
}

function borderBottomKeywords() {
  return {
    AccentColor: 'border-bottom:AccentColor;',
    AccentColorText: 'border-bottom:AccentColorText;',
    ActiveBorder: 'border-bottom:ActiveBorder;',
    ActiveCaption: 'border-bottom:ActiveCaption;',
    ActiveText: 'border-bottom:ActiveText;',
    AppWorkspace: 'border-bottom:AppWorkspace;',
    Background: 'border-bottom:Background;',
    ButtonBorder: 'border-bottom:ButtonBorder;',
    ButtonFace: 'border-bottom:ButtonFace;',
    ButtonHighlight: 'border-bottom:ButtonHighlight;',
    ButtonShadow: 'border-bottom:ButtonShadow;',
    ButtonText: 'border-bottom:ButtonText;',
    Canvas: 'border-bottom:Canvas;',
    CanvasText: 'border-bottom:CanvasText;',
    CaptionText: 'border-bottom:CaptionText;',
    Field: 'border-bottom:Field;',
    FieldText: 'border-bottom:FieldText;',
    GrayText: 'border-bottom:GrayText;',
    Highlight: 'border-bottom:Highlight;',
    HighlightText: 'border-bottom:HighlightText;',
    InactiveBorder: 'border-bottom:InactiveBorder;',
    InactiveCaption: 'border-bottom:InactiveCaption;',
    InactiveCaptionText: 'border-bottom:InactiveCaptionText;',
    InfoBackground: 'border-bottom:InfoBackground;',
    InfoText: 'border-bottom:InfoText;',
    LinkText: 'border-bottom:LinkText;',
    Mark: 'border-bottom:Mark;',
    MarkText: 'border-bottom:MarkText;',
    Menu: 'border-bottom:Menu;',
    MenuText: 'border-bottom:MenuText;',
    Scrollbar: 'border-bottom:Scrollbar;',
    SelectedItem: 'border-bottom:SelectedItem;',
    SelectedItemText: 'border-bottom:SelectedItemText;',
    ThreeDDarkShadow: 'border-bottom:ThreeDDarkShadow;',
    ThreeDFace: 'border-bottom:ThreeDFace;',
    ThreeDHighlight: 'border-bottom:ThreeDHighlight;',
    ThreeDLightShadow: 'border-bottom:ThreeDLightShadow;',
    ThreeDShadow: 'border-bottom:ThreeDShadow;',
    VisitedText: 'border-bottom:VisitedText;',
    Window: 'border-bottom:Window;',
    WindowFrame: 'border-bottom:WindowFrame;',
    WindowText: 'border-bottom:WindowText;',
    aliceblue: 'border-bottom:aliceblue;',
    antiquewhite: 'border-bottom:antiquewhite;',
    aqua: 'border-bottom:aqua;',
    aquamarine: 'border-bottom:aquamarine;',
    azure: 'border-bottom:azure;',
    beige: 'border-bottom:beige;',
    bisque: 'border-bottom:bisque;',
    black: 'border-bottom:black;',
    blanchedalmond: 'border-bottom:blanchedalmond;',
    blue: 'border-bottom:blue;',
    blueviolet: 'border-bottom:blueviolet;',
    brown: 'border-bottom:brown;',
    burlywood: 'border-bottom:burlywood;',
    cadetblue: 'border-bottom:cadetblue;',
    chartreuse: 'border-bottom:chartreuse;',
    chocolate: 'border-bottom:chocolate;',
    coral: 'border-bottom:coral;',
    cornflowerblue: 'border-bottom:cornflowerblue;',
    cornsilk: 'border-bottom:cornsilk;',
    crimson: 'border-bottom:crimson;',
    currentColor: 'border-bottom:currentColor;',
    cyan: 'border-bottom:cyan;',
    darkblue: 'border-bottom:darkblue;',
    darkcyan: 'border-bottom:darkcyan;',
    darkgoldenrod: 'border-bottom:darkgoldenrod;',
    darkgray: 'border-bottom:darkgray;',
    darkgreen: 'border-bottom:darkgreen;',
    darkgrey: 'border-bottom:darkgrey;',
    darkkhaki: 'border-bottom:darkkhaki;',
    darkmagenta: 'border-bottom:darkmagenta;',
    darkolivegreen: 'border-bottom:darkolivegreen;',
    darkorange: 'border-bottom:darkorange;',
    darkorchid: 'border-bottom:darkorchid;',
    darkred: 'border-bottom:darkred;',
    darksalmon: 'border-bottom:darksalmon;',
    darkseagreen: 'border-bottom:darkseagreen;',
    darkslateblue: 'border-bottom:darkslateblue;',
    darkslategray: 'border-bottom:darkslategray;',
    darkslategrey: 'border-bottom:darkslategrey;',
    darkturquoise: 'border-bottom:darkturquoise;',
    darkviolet: 'border-bottom:darkviolet;',
    dashed: 'border-bottom:dashed;',
    deeppink: 'border-bottom:deeppink;',
    deepskyblue: 'border-bottom:deepskyblue;',
    dimgray: 'border-bottom:dimgray;',
    dimgrey: 'border-bottom:dimgrey;',
    dodgerblue: 'border-bottom:dodgerblue;',
    dotted: 'border-bottom:dotted;',
    double: 'border-bottom:double;',
    firebrick: 'border-bottom:firebrick;',
    floralwhite: 'border-bottom:floralwhite;',
    forestgreen: 'border-bottom:forestgreen;',
    fuchsia: 'border-bottom:fuchsia;',
    gainsboro: 'border-bottom:gainsboro;',
    ghostwhite: 'border-bottom:ghostwhite;',
    gold: 'border-bottom:gold;',
    goldenrod: 'border-bottom:goldenrod;',
    gray: 'border-bottom:gray;',
    green: 'border-bottom:green;',
    greenyellow: 'border-bottom:greenyellow;',
    grey: 'border-bottom:grey;',
    groove: 'border-bottom:groove;',
    hidden: 'border-bottom:hidden;',
    honeydew: 'border-bottom:honeydew;',
    hotpink: 'border-bottom:hotpink;',
    indianred: 'border-bottom:indianred;',
    indigo: 'border-bottom:indigo;',
    inherit: 'border-bottom:inherit;',
    initial: 'border-bottom:initial;',
    inset: 'border-bottom:inset;',
    ivory: 'border-bottom:ivory;',
    khaki: 'border-bottom:khaki;',
    lavender: 'border-bottom:lavender;',
    lavenderblush: 'border-bottom:lavenderblush;',
    lawngreen: 'border-bottom:lawngreen;',
    lemonchiffon: 'border-bottom:lemonchiffon;',
    lightblue: 'border-bottom:lightblue;',
    lightcoral: 'border-bottom:lightcoral;',
    lightcyan: 'border-bottom:lightcyan;',
    lightgoldenrodyellow: 'border-bottom:lightgoldenrodyellow;',
    lightgray: 'border-bottom:lightgray;',
    lightgreen: 'border-bottom:lightgreen;',
    lightgrey: 'border-bottom:lightgrey;',
    lightpink: 'border-bottom:lightpink;',
    lightsalmon: 'border-bottom:lightsalmon;',
    lightseagreen: 'border-bottom:lightseagreen;',
    lightskyblue: 'border-bottom:lightskyblue;',
    lightslategray: 'border-bottom:lightslategray;',
    lightslategrey: 'border-bottom:lightslategrey;',
    lightsteelblue: 'border-bottom:lightsteelblue;',
    lightyellow: 'border-bottom:lightyellow;',
    lime: 'border-bottom:lime;',
    limegreen: 'border-bottom:limegreen;',
    linen: 'border-bottom:linen;',
    magenta: 'border-bottom:magenta;',
    maroon: 'border-bottom:maroon;',
    medium: 'border-bottom:medium;',
    mediumaquamarine: 'border-bottom:mediumaquamarine;',
    mediumblue: 'border-bottom:mediumblue;',
    mediumorchid: 'border-bottom:mediumorchid;',
    mediumpurple: 'border-bottom:mediumpurple;',
    mediumseagreen: 'border-bottom:mediumseagreen;',
    mediumslateblue: 'border-bottom:mediumslateblue;',
    mediumspringgreen: 'border-bottom:mediumspringgreen;',
    mediumturquoise: 'border-bottom:mediumturquoise;',
    mediumvioletred: 'border-bottom:mediumvioletred;',
    midnightblue: 'border-bottom:midnightblue;',
    mintcream: 'border-bottom:mintcream;',
    mistyrose: 'border-bottom:mistyrose;',
    moccasin: 'border-bottom:moccasin;',
    navajowhite: 'border-bottom:navajowhite;',
    navy: 'border-bottom:navy;',
    none: 'border-bottom:none;',
    oldlace: 'border-bottom:oldlace;',
    olive: 'border-bottom:olive;',
    olivedrab: 'border-bottom:olivedrab;',
    orange: 'border-bottom:orange;',
    orangered: 'border-bottom:orangered;',
    orchid: 'border-bottom:orchid;',
    outset: 'border-bottom:outset;',
    palegoldenrod: 'border-bottom:palegoldenrod;',
    palegreen: 'border-bottom:palegreen;',
    paleturquoise: 'border-bottom:paleturquoise;',
    palevioletred: 'border-bottom:palevioletred;',
    papayawhip: 'border-bottom:papayawhip;',
    peachpuff: 'border-bottom:peachpuff;',
    peru: 'border-bottom:peru;',
    pink: 'border-bottom:pink;',
    plum: 'border-bottom:plum;',
    powderblue: 'border-bottom:powderblue;',
    purple: 'border-bottom:purple;',
    rebeccapurple: 'border-bottom:rebeccapurple;',
    red: 'border-bottom:red;',
    revert: 'border-bottom:revert;',
    revertLayer: 'border-bottom:revert-layer;',
    ridge: 'border-bottom:ridge;',
    rosybrown: 'border-bottom:rosybrown;',
    royalblue: 'border-bottom:royalblue;',
    saddlebrown: 'border-bottom:saddlebrown;',
    salmon: 'border-bottom:salmon;',
    sandybrown: 'border-bottom:sandybrown;',
    seagreen: 'border-bottom:seagreen;',
    seashell: 'border-bottom:seashell;',
    sienna: 'border-bottom:sienna;',
    silver: 'border-bottom:silver;',
    skyblue: 'border-bottom:skyblue;',
    slateblue: 'border-bottom:slateblue;',
    slategray: 'border-bottom:slategray;',
    slategrey: 'border-bottom:slategrey;',
    snow: 'border-bottom:snow;',
    solid: 'border-bottom:solid;',
    springgreen: 'border-bottom:springgreen;',
    steelblue: 'border-bottom:steelblue;',
    tan: 'border-bottom:tan;',
    teal: 'border-bottom:teal;',
    thick: 'border-bottom:thick;',
    thin: 'border-bottom:thin;',
    thistle: 'border-bottom:thistle;',
    tomato: 'border-bottom:tomato;',
    transparent: 'border-bottom:transparent;',
    turquoise: 'border-bottom:turquoise;',
    unset: 'border-bottom:unset;',
    violet: 'border-bottom:violet;',
    wheat: 'border-bottom:wheat;',
    white: 'border-bottom:white;',
    whitesmoke: 'border-bottom:whitesmoke;',
    yellow: 'border-bottom:yellow;',
    yellowgreen: 'border-bottom:yellowgreen;',
  } as const;
}

type BorderBottomCssKeywords = Readonly<ReturnType<typeof borderBottomKeywords>>;
export interface BorderBottomCss extends BorderBottomCssKeywords {}
/** CSS 属性 border-bottom。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
 */
export class BorderBottomCss extends LengthCssProperty<Property.BorderBottom> {
  constructor() {
    super('border-bottom');
    initializeBorderBottomCss();
  }
}
let borderBottomReady = false;
function initializeBorderBottomCss(): void {
  if (borderBottomReady) return;
  Object.assign(BorderBottomCss.prototype, borderBottomKeywords());
  Object.freeze(BorderBottomCss.prototype);
  borderBottomReady = true;
}

function borderBottomColorKeywords() {
  return {
    AccentColor: 'border-bottom-color:AccentColor;',
    AccentColorText: 'border-bottom-color:AccentColorText;',
    ActiveBorder: 'border-bottom-color:ActiveBorder;',
    ActiveCaption: 'border-bottom-color:ActiveCaption;',
    ActiveText: 'border-bottom-color:ActiveText;',
    AppWorkspace: 'border-bottom-color:AppWorkspace;',
    Background: 'border-bottom-color:Background;',
    ButtonBorder: 'border-bottom-color:ButtonBorder;',
    ButtonFace: 'border-bottom-color:ButtonFace;',
    ButtonHighlight: 'border-bottom-color:ButtonHighlight;',
    ButtonShadow: 'border-bottom-color:ButtonShadow;',
    ButtonText: 'border-bottom-color:ButtonText;',
    Canvas: 'border-bottom-color:Canvas;',
    CanvasText: 'border-bottom-color:CanvasText;',
    CaptionText: 'border-bottom-color:CaptionText;',
    Field: 'border-bottom-color:Field;',
    FieldText: 'border-bottom-color:FieldText;',
    GrayText: 'border-bottom-color:GrayText;',
    Highlight: 'border-bottom-color:Highlight;',
    HighlightText: 'border-bottom-color:HighlightText;',
    InactiveBorder: 'border-bottom-color:InactiveBorder;',
    InactiveCaption: 'border-bottom-color:InactiveCaption;',
    InactiveCaptionText: 'border-bottom-color:InactiveCaptionText;',
    InfoBackground: 'border-bottom-color:InfoBackground;',
    InfoText: 'border-bottom-color:InfoText;',
    LinkText: 'border-bottom-color:LinkText;',
    Mark: 'border-bottom-color:Mark;',
    MarkText: 'border-bottom-color:MarkText;',
    Menu: 'border-bottom-color:Menu;',
    MenuText: 'border-bottom-color:MenuText;',
    Scrollbar: 'border-bottom-color:Scrollbar;',
    SelectedItem: 'border-bottom-color:SelectedItem;',
    SelectedItemText: 'border-bottom-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-bottom-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-bottom-color:ThreeDFace;',
    ThreeDHighlight: 'border-bottom-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-bottom-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-bottom-color:ThreeDShadow;',
    VisitedText: 'border-bottom-color:VisitedText;',
    Window: 'border-bottom-color:Window;',
    WindowFrame: 'border-bottom-color:WindowFrame;',
    WindowText: 'border-bottom-color:WindowText;',
    aliceblue: 'border-bottom-color:aliceblue;',
    antiquewhite: 'border-bottom-color:antiquewhite;',
    aqua: 'border-bottom-color:aqua;',
    aquamarine: 'border-bottom-color:aquamarine;',
    azure: 'border-bottom-color:azure;',
    beige: 'border-bottom-color:beige;',
    bisque: 'border-bottom-color:bisque;',
    black: 'border-bottom-color:black;',
    blanchedalmond: 'border-bottom-color:blanchedalmond;',
    blue: 'border-bottom-color:blue;',
    blueviolet: 'border-bottom-color:blueviolet;',
    brown: 'border-bottom-color:brown;',
    burlywood: 'border-bottom-color:burlywood;',
    cadetblue: 'border-bottom-color:cadetblue;',
    chartreuse: 'border-bottom-color:chartreuse;',
    chocolate: 'border-bottom-color:chocolate;',
    coral: 'border-bottom-color:coral;',
    cornflowerblue: 'border-bottom-color:cornflowerblue;',
    cornsilk: 'border-bottom-color:cornsilk;',
    crimson: 'border-bottom-color:crimson;',
    currentColor: 'border-bottom-color:currentColor;',
    cyan: 'border-bottom-color:cyan;',
    darkblue: 'border-bottom-color:darkblue;',
    darkcyan: 'border-bottom-color:darkcyan;',
    darkgoldenrod: 'border-bottom-color:darkgoldenrod;',
    darkgray: 'border-bottom-color:darkgray;',
    darkgreen: 'border-bottom-color:darkgreen;',
    darkgrey: 'border-bottom-color:darkgrey;',
    darkkhaki: 'border-bottom-color:darkkhaki;',
    darkmagenta: 'border-bottom-color:darkmagenta;',
    darkolivegreen: 'border-bottom-color:darkolivegreen;',
    darkorange: 'border-bottom-color:darkorange;',
    darkorchid: 'border-bottom-color:darkorchid;',
    darkred: 'border-bottom-color:darkred;',
    darksalmon: 'border-bottom-color:darksalmon;',
    darkseagreen: 'border-bottom-color:darkseagreen;',
    darkslateblue: 'border-bottom-color:darkslateblue;',
    darkslategray: 'border-bottom-color:darkslategray;',
    darkslategrey: 'border-bottom-color:darkslategrey;',
    darkturquoise: 'border-bottom-color:darkturquoise;',
    darkviolet: 'border-bottom-color:darkviolet;',
    deeppink: 'border-bottom-color:deeppink;',
    deepskyblue: 'border-bottom-color:deepskyblue;',
    dimgray: 'border-bottom-color:dimgray;',
    dimgrey: 'border-bottom-color:dimgrey;',
    dodgerblue: 'border-bottom-color:dodgerblue;',
    firebrick: 'border-bottom-color:firebrick;',
    floralwhite: 'border-bottom-color:floralwhite;',
    forestgreen: 'border-bottom-color:forestgreen;',
    fuchsia: 'border-bottom-color:fuchsia;',
    gainsboro: 'border-bottom-color:gainsboro;',
    ghostwhite: 'border-bottom-color:ghostwhite;',
    gold: 'border-bottom-color:gold;',
    goldenrod: 'border-bottom-color:goldenrod;',
    gray: 'border-bottom-color:gray;',
    green: 'border-bottom-color:green;',
    greenyellow: 'border-bottom-color:greenyellow;',
    grey: 'border-bottom-color:grey;',
    honeydew: 'border-bottom-color:honeydew;',
    hotpink: 'border-bottom-color:hotpink;',
    indianred: 'border-bottom-color:indianred;',
    indigo: 'border-bottom-color:indigo;',
    inherit: 'border-bottom-color:inherit;',
    initial: 'border-bottom-color:initial;',
    ivory: 'border-bottom-color:ivory;',
    khaki: 'border-bottom-color:khaki;',
    lavender: 'border-bottom-color:lavender;',
    lavenderblush: 'border-bottom-color:lavenderblush;',
    lawngreen: 'border-bottom-color:lawngreen;',
    lemonchiffon: 'border-bottom-color:lemonchiffon;',
    lightblue: 'border-bottom-color:lightblue;',
    lightcoral: 'border-bottom-color:lightcoral;',
    lightcyan: 'border-bottom-color:lightcyan;',
    lightgoldenrodyellow: 'border-bottom-color:lightgoldenrodyellow;',
    lightgray: 'border-bottom-color:lightgray;',
    lightgreen: 'border-bottom-color:lightgreen;',
    lightgrey: 'border-bottom-color:lightgrey;',
    lightpink: 'border-bottom-color:lightpink;',
    lightsalmon: 'border-bottom-color:lightsalmon;',
    lightseagreen: 'border-bottom-color:lightseagreen;',
    lightskyblue: 'border-bottom-color:lightskyblue;',
    lightslategray: 'border-bottom-color:lightslategray;',
    lightslategrey: 'border-bottom-color:lightslategrey;',
    lightsteelblue: 'border-bottom-color:lightsteelblue;',
    lightyellow: 'border-bottom-color:lightyellow;',
    lime: 'border-bottom-color:lime;',
    limegreen: 'border-bottom-color:limegreen;',
    linen: 'border-bottom-color:linen;',
    magenta: 'border-bottom-color:magenta;',
    maroon: 'border-bottom-color:maroon;',
    mediumaquamarine: 'border-bottom-color:mediumaquamarine;',
    mediumblue: 'border-bottom-color:mediumblue;',
    mediumorchid: 'border-bottom-color:mediumorchid;',
    mediumpurple: 'border-bottom-color:mediumpurple;',
    mediumseagreen: 'border-bottom-color:mediumseagreen;',
    mediumslateblue: 'border-bottom-color:mediumslateblue;',
    mediumspringgreen: 'border-bottom-color:mediumspringgreen;',
    mediumturquoise: 'border-bottom-color:mediumturquoise;',
    mediumvioletred: 'border-bottom-color:mediumvioletred;',
    midnightblue: 'border-bottom-color:midnightblue;',
    mintcream: 'border-bottom-color:mintcream;',
    mistyrose: 'border-bottom-color:mistyrose;',
    moccasin: 'border-bottom-color:moccasin;',
    navajowhite: 'border-bottom-color:navajowhite;',
    navy: 'border-bottom-color:navy;',
    oldlace: 'border-bottom-color:oldlace;',
    olive: 'border-bottom-color:olive;',
    olivedrab: 'border-bottom-color:olivedrab;',
    orange: 'border-bottom-color:orange;',
    orangered: 'border-bottom-color:orangered;',
    orchid: 'border-bottom-color:orchid;',
    palegoldenrod: 'border-bottom-color:palegoldenrod;',
    palegreen: 'border-bottom-color:palegreen;',
    paleturquoise: 'border-bottom-color:paleturquoise;',
    palevioletred: 'border-bottom-color:palevioletred;',
    papayawhip: 'border-bottom-color:papayawhip;',
    peachpuff: 'border-bottom-color:peachpuff;',
    peru: 'border-bottom-color:peru;',
    pink: 'border-bottom-color:pink;',
    plum: 'border-bottom-color:plum;',
    powderblue: 'border-bottom-color:powderblue;',
    purple: 'border-bottom-color:purple;',
    rebeccapurple: 'border-bottom-color:rebeccapurple;',
    red: 'border-bottom-color:red;',
    revert: 'border-bottom-color:revert;',
    revertLayer: 'border-bottom-color:revert-layer;',
    rosybrown: 'border-bottom-color:rosybrown;',
    royalblue: 'border-bottom-color:royalblue;',
    saddlebrown: 'border-bottom-color:saddlebrown;',
    salmon: 'border-bottom-color:salmon;',
    sandybrown: 'border-bottom-color:sandybrown;',
    seagreen: 'border-bottom-color:seagreen;',
    seashell: 'border-bottom-color:seashell;',
    sienna: 'border-bottom-color:sienna;',
    silver: 'border-bottom-color:silver;',
    skyblue: 'border-bottom-color:skyblue;',
    slateblue: 'border-bottom-color:slateblue;',
    slategray: 'border-bottom-color:slategray;',
    slategrey: 'border-bottom-color:slategrey;',
    snow: 'border-bottom-color:snow;',
    springgreen: 'border-bottom-color:springgreen;',
    steelblue: 'border-bottom-color:steelblue;',
    tan: 'border-bottom-color:tan;',
    teal: 'border-bottom-color:teal;',
    thistle: 'border-bottom-color:thistle;',
    tomato: 'border-bottom-color:tomato;',
    transparent: 'border-bottom-color:transparent;',
    turquoise: 'border-bottom-color:turquoise;',
    unset: 'border-bottom-color:unset;',
    violet: 'border-bottom-color:violet;',
    wheat: 'border-bottom-color:wheat;',
    white: 'border-bottom-color:white;',
    whitesmoke: 'border-bottom-color:whitesmoke;',
    yellow: 'border-bottom-color:yellow;',
    yellowgreen: 'border-bottom-color:yellowgreen;',
  } as const;
}

type BorderBottomColorCssKeywords = Readonly<ReturnType<typeof borderBottomColorKeywords>>;
export interface BorderBottomColorCss extends BorderBottomColorCssKeywords {}
/** CSS 属性 border-bottom-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
 */
export class BorderBottomColorCss extends CssProperty<Property.BorderBottomColor> {
  constructor() {
    super('border-bottom-color');
    initializeBorderBottomColorCss();
  }
}
let borderBottomColorReady = false;
function initializeBorderBottomColorCss(): void {
  if (borderBottomColorReady) return;
  Object.assign(BorderBottomColorCss.prototype, borderBottomColorKeywords());
  Object.freeze(BorderBottomColorCss.prototype);
  borderBottomColorReady = true;
}

function borderBottomLeftRadiusKeywords() {
  return {
    inherit: 'border-bottom-left-radius:inherit;',
    initial: 'border-bottom-left-radius:initial;',
    revert: 'border-bottom-left-radius:revert;',
    revertLayer: 'border-bottom-left-radius:revert-layer;',
    unset: 'border-bottom-left-radius:unset;',
  } as const;
}

type BorderBottomLeftRadiusCssKeywords = Readonly<
  ReturnType<typeof borderBottomLeftRadiusKeywords>
>;
export interface BorderBottomLeftRadiusCss extends BorderBottomLeftRadiusCssKeywords {}
/** CSS 属性 border-bottom-left-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
 */
export class BorderBottomLeftRadiusCss extends LengthCssProperty<Property.BorderBottomLeftRadius> {
  constructor() {
    super('border-bottom-left-radius');
    initializeBorderBottomLeftRadiusCss();
  }
}
let borderBottomLeftRadiusReady = false;
function initializeBorderBottomLeftRadiusCss(): void {
  if (borderBottomLeftRadiusReady) return;
  Object.assign(BorderBottomLeftRadiusCss.prototype, borderBottomLeftRadiusKeywords());
  Object.freeze(BorderBottomLeftRadiusCss.prototype);
  borderBottomLeftRadiusReady = true;
}

function borderBottomRightRadiusKeywords() {
  return {
    inherit: 'border-bottom-right-radius:inherit;',
    initial: 'border-bottom-right-radius:initial;',
    revert: 'border-bottom-right-radius:revert;',
    revertLayer: 'border-bottom-right-radius:revert-layer;',
    unset: 'border-bottom-right-radius:unset;',
  } as const;
}

type BorderBottomRightRadiusCssKeywords = Readonly<
  ReturnType<typeof borderBottomRightRadiusKeywords>
>;
export interface BorderBottomRightRadiusCss extends BorderBottomRightRadiusCssKeywords {}
/** CSS 属性 border-bottom-right-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
 */
export class BorderBottomRightRadiusCss extends LengthCssProperty<Property.BorderBottomRightRadius> {
  constructor() {
    super('border-bottom-right-radius');
    initializeBorderBottomRightRadiusCss();
  }
}
let borderBottomRightRadiusReady = false;
function initializeBorderBottomRightRadiusCss(): void {
  if (borderBottomRightRadiusReady) return;
  Object.assign(BorderBottomRightRadiusCss.prototype, borderBottomRightRadiusKeywords());
  Object.freeze(BorderBottomRightRadiusCss.prototype);
  borderBottomRightRadiusReady = true;
}

function borderBottomStyleKeywords() {
  return {
    dashed: 'border-bottom-style:dashed;',
    dotted: 'border-bottom-style:dotted;',
    double: 'border-bottom-style:double;',
    groove: 'border-bottom-style:groove;',
    hidden: 'border-bottom-style:hidden;',
    inherit: 'border-bottom-style:inherit;',
    initial: 'border-bottom-style:initial;',
    inset: 'border-bottom-style:inset;',
    none: 'border-bottom-style:none;',
    outset: 'border-bottom-style:outset;',
    revert: 'border-bottom-style:revert;',
    revertLayer: 'border-bottom-style:revert-layer;',
    ridge: 'border-bottom-style:ridge;',
    solid: 'border-bottom-style:solid;',
    unset: 'border-bottom-style:unset;',
  } as const;
}

type BorderBottomStyleCssKeywords = Readonly<ReturnType<typeof borderBottomStyleKeywords>>;
export interface BorderBottomStyleCss extends BorderBottomStyleCssKeywords {}
/** CSS 属性 border-bottom-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
 */
export class BorderBottomStyleCss extends CssProperty<Property.BorderBottomStyle> {
  constructor() {
    super('border-bottom-style');
    initializeBorderBottomStyleCss();
  }
}
let borderBottomStyleReady = false;
function initializeBorderBottomStyleCss(): void {
  if (borderBottomStyleReady) return;
  Object.assign(BorderBottomStyleCss.prototype, borderBottomStyleKeywords());
  Object.freeze(BorderBottomStyleCss.prototype);
  borderBottomStyleReady = true;
}

function borderBottomWidthKeywords() {
  return {
    inherit: 'border-bottom-width:inherit;',
    initial: 'border-bottom-width:initial;',
    medium: 'border-bottom-width:medium;',
    revert: 'border-bottom-width:revert;',
    revertLayer: 'border-bottom-width:revert-layer;',
    thick: 'border-bottom-width:thick;',
    thin: 'border-bottom-width:thin;',
    unset: 'border-bottom-width:unset;',
  } as const;
}

type BorderBottomWidthCssKeywords = Readonly<ReturnType<typeof borderBottomWidthKeywords>>;
export interface BorderBottomWidthCss extends BorderBottomWidthCssKeywords {}
/** CSS 属性 border-bottom-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
 */
export class BorderBottomWidthCss extends LengthCssProperty<Property.BorderBottomWidth> {
  constructor() {
    super('border-bottom-width');
    initializeBorderBottomWidthCss();
  }
}
let borderBottomWidthReady = false;
function initializeBorderBottomWidthCss(): void {
  if (borderBottomWidthReady) return;
  Object.assign(BorderBottomWidthCss.prototype, borderBottomWidthKeywords());
  Object.freeze(BorderBottomWidthCss.prototype);
  borderBottomWidthReady = true;
}

function borderCollapseKeywords() {
  return {
    collapse: 'border-collapse:collapse;',
    inherit: 'border-collapse:inherit;',
    initial: 'border-collapse:initial;',
    revert: 'border-collapse:revert;',
    revertLayer: 'border-collapse:revert-layer;',
    separate: 'border-collapse:separate;',
    unset: 'border-collapse:unset;',
  } as const;
}

type BorderCollapseCssKeywords = Readonly<ReturnType<typeof borderCollapseKeywords>>;
export interface BorderCollapseCss extends BorderCollapseCssKeywords {}
/** CSS 属性 border-collapse；初始值 separate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
 */
export class BorderCollapseCss extends CssProperty<Property.BorderCollapse> {
  constructor() {
    super('border-collapse');
    initializeBorderCollapseCss();
  }
}
let borderCollapseReady = false;
function initializeBorderCollapseCss(): void {
  if (borderCollapseReady) return;
  Object.assign(BorderCollapseCss.prototype, borderCollapseKeywords());
  Object.freeze(BorderCollapseCss.prototype);
  borderCollapseReady = true;
}

function borderColorKeywords() {
  return {
    AccentColor: 'border-color:AccentColor;',
    AccentColorText: 'border-color:AccentColorText;',
    ActiveBorder: 'border-color:ActiveBorder;',
    ActiveCaption: 'border-color:ActiveCaption;',
    ActiveText: 'border-color:ActiveText;',
    AppWorkspace: 'border-color:AppWorkspace;',
    Background: 'border-color:Background;',
    ButtonBorder: 'border-color:ButtonBorder;',
    ButtonFace: 'border-color:ButtonFace;',
    ButtonHighlight: 'border-color:ButtonHighlight;',
    ButtonShadow: 'border-color:ButtonShadow;',
    ButtonText: 'border-color:ButtonText;',
    Canvas: 'border-color:Canvas;',
    CanvasText: 'border-color:CanvasText;',
    CaptionText: 'border-color:CaptionText;',
    Field: 'border-color:Field;',
    FieldText: 'border-color:FieldText;',
    GrayText: 'border-color:GrayText;',
    Highlight: 'border-color:Highlight;',
    HighlightText: 'border-color:HighlightText;',
    InactiveBorder: 'border-color:InactiveBorder;',
    InactiveCaption: 'border-color:InactiveCaption;',
    InactiveCaptionText: 'border-color:InactiveCaptionText;',
    InfoBackground: 'border-color:InfoBackground;',
    InfoText: 'border-color:InfoText;',
    LinkText: 'border-color:LinkText;',
    Mark: 'border-color:Mark;',
    MarkText: 'border-color:MarkText;',
    Menu: 'border-color:Menu;',
    MenuText: 'border-color:MenuText;',
    Scrollbar: 'border-color:Scrollbar;',
    SelectedItem: 'border-color:SelectedItem;',
    SelectedItemText: 'border-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-color:ThreeDFace;',
    ThreeDHighlight: 'border-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-color:ThreeDShadow;',
    VisitedText: 'border-color:VisitedText;',
    Window: 'border-color:Window;',
    WindowFrame: 'border-color:WindowFrame;',
    WindowText: 'border-color:WindowText;',
    aliceblue: 'border-color:aliceblue;',
    antiquewhite: 'border-color:antiquewhite;',
    aqua: 'border-color:aqua;',
    aquamarine: 'border-color:aquamarine;',
    azure: 'border-color:azure;',
    beige: 'border-color:beige;',
    bisque: 'border-color:bisque;',
    black: 'border-color:black;',
    blanchedalmond: 'border-color:blanchedalmond;',
    blue: 'border-color:blue;',
    blueviolet: 'border-color:blueviolet;',
    brown: 'border-color:brown;',
    burlywood: 'border-color:burlywood;',
    cadetblue: 'border-color:cadetblue;',
    chartreuse: 'border-color:chartreuse;',
    chocolate: 'border-color:chocolate;',
    coral: 'border-color:coral;',
    cornflowerblue: 'border-color:cornflowerblue;',
    cornsilk: 'border-color:cornsilk;',
    crimson: 'border-color:crimson;',
    currentColor: 'border-color:currentColor;',
    cyan: 'border-color:cyan;',
    darkblue: 'border-color:darkblue;',
    darkcyan: 'border-color:darkcyan;',
    darkgoldenrod: 'border-color:darkgoldenrod;',
    darkgray: 'border-color:darkgray;',
    darkgreen: 'border-color:darkgreen;',
    darkgrey: 'border-color:darkgrey;',
    darkkhaki: 'border-color:darkkhaki;',
    darkmagenta: 'border-color:darkmagenta;',
    darkolivegreen: 'border-color:darkolivegreen;',
    darkorange: 'border-color:darkorange;',
    darkorchid: 'border-color:darkorchid;',
    darkred: 'border-color:darkred;',
    darksalmon: 'border-color:darksalmon;',
    darkseagreen: 'border-color:darkseagreen;',
    darkslateblue: 'border-color:darkslateblue;',
    darkslategray: 'border-color:darkslategray;',
    darkslategrey: 'border-color:darkslategrey;',
    darkturquoise: 'border-color:darkturquoise;',
    darkviolet: 'border-color:darkviolet;',
    deeppink: 'border-color:deeppink;',
    deepskyblue: 'border-color:deepskyblue;',
    dimgray: 'border-color:dimgray;',
    dimgrey: 'border-color:dimgrey;',
    dodgerblue: 'border-color:dodgerblue;',
    firebrick: 'border-color:firebrick;',
    floralwhite: 'border-color:floralwhite;',
    forestgreen: 'border-color:forestgreen;',
    fuchsia: 'border-color:fuchsia;',
    gainsboro: 'border-color:gainsboro;',
    ghostwhite: 'border-color:ghostwhite;',
    gold: 'border-color:gold;',
    goldenrod: 'border-color:goldenrod;',
    gray: 'border-color:gray;',
    green: 'border-color:green;',
    greenyellow: 'border-color:greenyellow;',
    grey: 'border-color:grey;',
    honeydew: 'border-color:honeydew;',
    hotpink: 'border-color:hotpink;',
    indianred: 'border-color:indianred;',
    indigo: 'border-color:indigo;',
    inherit: 'border-color:inherit;',
    initial: 'border-color:initial;',
    ivory: 'border-color:ivory;',
    khaki: 'border-color:khaki;',
    lavender: 'border-color:lavender;',
    lavenderblush: 'border-color:lavenderblush;',
    lawngreen: 'border-color:lawngreen;',
    lemonchiffon: 'border-color:lemonchiffon;',
    lightblue: 'border-color:lightblue;',
    lightcoral: 'border-color:lightcoral;',
    lightcyan: 'border-color:lightcyan;',
    lightgoldenrodyellow: 'border-color:lightgoldenrodyellow;',
    lightgray: 'border-color:lightgray;',
    lightgreen: 'border-color:lightgreen;',
    lightgrey: 'border-color:lightgrey;',
    lightpink: 'border-color:lightpink;',
    lightsalmon: 'border-color:lightsalmon;',
    lightseagreen: 'border-color:lightseagreen;',
    lightskyblue: 'border-color:lightskyblue;',
    lightslategray: 'border-color:lightslategray;',
    lightslategrey: 'border-color:lightslategrey;',
    lightsteelblue: 'border-color:lightsteelblue;',
    lightyellow: 'border-color:lightyellow;',
    lime: 'border-color:lime;',
    limegreen: 'border-color:limegreen;',
    linen: 'border-color:linen;',
    magenta: 'border-color:magenta;',
    maroon: 'border-color:maroon;',
    mediumaquamarine: 'border-color:mediumaquamarine;',
    mediumblue: 'border-color:mediumblue;',
    mediumorchid: 'border-color:mediumorchid;',
    mediumpurple: 'border-color:mediumpurple;',
    mediumseagreen: 'border-color:mediumseagreen;',
    mediumslateblue: 'border-color:mediumslateblue;',
    mediumspringgreen: 'border-color:mediumspringgreen;',
    mediumturquoise: 'border-color:mediumturquoise;',
    mediumvioletred: 'border-color:mediumvioletred;',
    midnightblue: 'border-color:midnightblue;',
    mintcream: 'border-color:mintcream;',
    mistyrose: 'border-color:mistyrose;',
    moccasin: 'border-color:moccasin;',
    navajowhite: 'border-color:navajowhite;',
    navy: 'border-color:navy;',
    oldlace: 'border-color:oldlace;',
    olive: 'border-color:olive;',
    olivedrab: 'border-color:olivedrab;',
    orange: 'border-color:orange;',
    orangered: 'border-color:orangered;',
    orchid: 'border-color:orchid;',
    palegoldenrod: 'border-color:palegoldenrod;',
    palegreen: 'border-color:palegreen;',
    paleturquoise: 'border-color:paleturquoise;',
    palevioletred: 'border-color:palevioletred;',
    papayawhip: 'border-color:papayawhip;',
    peachpuff: 'border-color:peachpuff;',
    peru: 'border-color:peru;',
    pink: 'border-color:pink;',
    plum: 'border-color:plum;',
    powderblue: 'border-color:powderblue;',
    purple: 'border-color:purple;',
    rebeccapurple: 'border-color:rebeccapurple;',
    red: 'border-color:red;',
    revert: 'border-color:revert;',
    revertLayer: 'border-color:revert-layer;',
    rosybrown: 'border-color:rosybrown;',
    royalblue: 'border-color:royalblue;',
    saddlebrown: 'border-color:saddlebrown;',
    salmon: 'border-color:salmon;',
    sandybrown: 'border-color:sandybrown;',
    seagreen: 'border-color:seagreen;',
    seashell: 'border-color:seashell;',
    sienna: 'border-color:sienna;',
    silver: 'border-color:silver;',
    skyblue: 'border-color:skyblue;',
    slateblue: 'border-color:slateblue;',
    slategray: 'border-color:slategray;',
    slategrey: 'border-color:slategrey;',
    snow: 'border-color:snow;',
    springgreen: 'border-color:springgreen;',
    steelblue: 'border-color:steelblue;',
    tan: 'border-color:tan;',
    teal: 'border-color:teal;',
    thistle: 'border-color:thistle;',
    tomato: 'border-color:tomato;',
    transparent: 'border-color:transparent;',
    turquoise: 'border-color:turquoise;',
    unset: 'border-color:unset;',
    violet: 'border-color:violet;',
    wheat: 'border-color:wheat;',
    white: 'border-color:white;',
    whitesmoke: 'border-color:whitesmoke;',
    yellow: 'border-color:yellow;',
    yellowgreen: 'border-color:yellowgreen;',
  } as const;
}

type BorderColorCssKeywords = Readonly<ReturnType<typeof borderColorKeywords>>;
export interface BorderColorCss extends BorderColorCssKeywords {}
/** CSS 属性 border-color。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
 */
export class BorderColorCss extends CssProperty<Property.BorderColor> {
  constructor() {
    super('border-color');
    initializeBorderColorCss();
  }
}
let borderColorReady = false;
function initializeBorderColorCss(): void {
  if (borderColorReady) return;
  Object.assign(BorderColorCss.prototype, borderColorKeywords());
  Object.freeze(BorderColorCss.prototype);
  borderColorReady = true;
}

function borderEndEndRadiusKeywords() {
  return {
    inherit: 'border-end-end-radius:inherit;',
    initial: 'border-end-end-radius:initial;',
    revert: 'border-end-end-radius:revert;',
    revertLayer: 'border-end-end-radius:revert-layer;',
    unset: 'border-end-end-radius:unset;',
  } as const;
}

type BorderEndEndRadiusCssKeywords = Readonly<ReturnType<typeof borderEndEndRadiusKeywords>>;
export interface BorderEndEndRadiusCss extends BorderEndEndRadiusCssKeywords {}
/** CSS 属性 border-end-end-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
 */
export class BorderEndEndRadiusCss extends LengthCssProperty<Property.BorderEndEndRadius> {
  constructor() {
    super('border-end-end-radius');
    initializeBorderEndEndRadiusCss();
  }
}
let borderEndEndRadiusReady = false;
function initializeBorderEndEndRadiusCss(): void {
  if (borderEndEndRadiusReady) return;
  Object.assign(BorderEndEndRadiusCss.prototype, borderEndEndRadiusKeywords());
  Object.freeze(BorderEndEndRadiusCss.prototype);
  borderEndEndRadiusReady = true;
}

function borderEndStartRadiusKeywords() {
  return {
    inherit: 'border-end-start-radius:inherit;',
    initial: 'border-end-start-radius:initial;',
    revert: 'border-end-start-radius:revert;',
    revertLayer: 'border-end-start-radius:revert-layer;',
    unset: 'border-end-start-radius:unset;',
  } as const;
}

type BorderEndStartRadiusCssKeywords = Readonly<ReturnType<typeof borderEndStartRadiusKeywords>>;
export interface BorderEndStartRadiusCss extends BorderEndStartRadiusCssKeywords {}
/** CSS 属性 border-end-start-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
 */
export class BorderEndStartRadiusCss extends LengthCssProperty<Property.BorderEndStartRadius> {
  constructor() {
    super('border-end-start-radius');
    initializeBorderEndStartRadiusCss();
  }
}
let borderEndStartRadiusReady = false;
function initializeBorderEndStartRadiusCss(): void {
  if (borderEndStartRadiusReady) return;
  Object.assign(BorderEndStartRadiusCss.prototype, borderEndStartRadiusKeywords());
  Object.freeze(BorderEndStartRadiusCss.prototype);
  borderEndStartRadiusReady = true;
}

function borderImageKeywords() {
  return {
    inherit: 'border-image:inherit;',
    initial: 'border-image:initial;',
    none: 'border-image:none;',
    repeat: 'border-image:repeat;',
    revert: 'border-image:revert;',
    revertLayer: 'border-image:revert-layer;',
    round: 'border-image:round;',
    space: 'border-image:space;',
    stretch: 'border-image:stretch;',
    unset: 'border-image:unset;',
  } as const;
}

type BorderImageCssKeywords = Readonly<ReturnType<typeof borderImageKeywords>>;
export interface BorderImageCss extends BorderImageCssKeywords {}
/** CSS 属性 border-image。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
 */
export class BorderImageCss extends CssProperty<Property.BorderImage> {
  constructor() {
    super('border-image');
    initializeBorderImageCss();
  }
}
let borderImageReady = false;
function initializeBorderImageCss(): void {
  if (borderImageReady) return;
  Object.assign(BorderImageCss.prototype, borderImageKeywords());
  Object.freeze(BorderImageCss.prototype);
  borderImageReady = true;
}

function borderImageOutsetKeywords() {
  return {
    inherit: 'border-image-outset:inherit;',
    initial: 'border-image-outset:initial;',
    revert: 'border-image-outset:revert;',
    revertLayer: 'border-image-outset:revert-layer;',
    unset: 'border-image-outset:unset;',
  } as const;
}

type BorderImageOutsetCssKeywords = Readonly<ReturnType<typeof borderImageOutsetKeywords>>;
export interface BorderImageOutsetCss extends BorderImageOutsetCssKeywords {}
/** CSS 属性 border-image-outset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
 */
export class BorderImageOutsetCss extends LengthCssProperty<Property.BorderImageOutset> {
  constructor() {
    super('border-image-outset');
    initializeBorderImageOutsetCss();
  }
}
let borderImageOutsetReady = false;
function initializeBorderImageOutsetCss(): void {
  if (borderImageOutsetReady) return;
  Object.assign(BorderImageOutsetCss.prototype, borderImageOutsetKeywords());
  Object.freeze(BorderImageOutsetCss.prototype);
  borderImageOutsetReady = true;
}

function borderImageRepeatKeywords() {
  return {
    inherit: 'border-image-repeat:inherit;',
    initial: 'border-image-repeat:initial;',
    repeat: 'border-image-repeat:repeat;',
    revert: 'border-image-repeat:revert;',
    revertLayer: 'border-image-repeat:revert-layer;',
    round: 'border-image-repeat:round;',
    space: 'border-image-repeat:space;',
    stretch: 'border-image-repeat:stretch;',
    unset: 'border-image-repeat:unset;',
  } as const;
}

type BorderImageRepeatCssKeywords = Readonly<ReturnType<typeof borderImageRepeatKeywords>>;
export interface BorderImageRepeatCss extends BorderImageRepeatCssKeywords {}
/** CSS 属性 border-image-repeat；初始值 stretch。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
 */
export class BorderImageRepeatCss extends CssProperty<Property.BorderImageRepeat> {
  constructor() {
    super('border-image-repeat');
    initializeBorderImageRepeatCss();
  }
}
let borderImageRepeatReady = false;
function initializeBorderImageRepeatCss(): void {
  if (borderImageRepeatReady) return;
  Object.assign(BorderImageRepeatCss.prototype, borderImageRepeatKeywords());
  Object.freeze(BorderImageRepeatCss.prototype);
  borderImageRepeatReady = true;
}

function borderImageSliceKeywords() {
  return {
    inherit: 'border-image-slice:inherit;',
    initial: 'border-image-slice:initial;',
    revert: 'border-image-slice:revert;',
    revertLayer: 'border-image-slice:revert-layer;',
    unset: 'border-image-slice:unset;',
  } as const;
}

type BorderImageSliceCssKeywords = Readonly<ReturnType<typeof borderImageSliceKeywords>>;
export interface BorderImageSliceCss extends BorderImageSliceCssKeywords {}
/** CSS 属性 border-image-slice；初始值 100%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
 */
export class BorderImageSliceCss extends CssProperty<Property.BorderImageSlice> {
  constructor() {
    super('border-image-slice');
    initializeBorderImageSliceCss();
  }
}
let borderImageSliceReady = false;
function initializeBorderImageSliceCss(): void {
  if (borderImageSliceReady) return;
  Object.assign(BorderImageSliceCss.prototype, borderImageSliceKeywords());
  Object.freeze(BorderImageSliceCss.prototype);
  borderImageSliceReady = true;
}

function borderImageSourceKeywords() {
  return {
    inherit: 'border-image-source:inherit;',
    initial: 'border-image-source:initial;',
    none: 'border-image-source:none;',
    revert: 'border-image-source:revert;',
    revertLayer: 'border-image-source:revert-layer;',
    unset: 'border-image-source:unset;',
  } as const;
}

type BorderImageSourceCssKeywords = Readonly<ReturnType<typeof borderImageSourceKeywords>>;
export interface BorderImageSourceCss extends BorderImageSourceCssKeywords {}
/** CSS 属性 border-image-source；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
 */
export class BorderImageSourceCss extends CssProperty<Property.BorderImageSource> {
  constructor() {
    super('border-image-source');
    initializeBorderImageSourceCss();
  }
}
let borderImageSourceReady = false;
function initializeBorderImageSourceCss(): void {
  if (borderImageSourceReady) return;
  Object.assign(BorderImageSourceCss.prototype, borderImageSourceKeywords());
  Object.freeze(BorderImageSourceCss.prototype);
  borderImageSourceReady = true;
}

function borderImageWidthKeywords() {
  return {
    auto: 'border-image-width:auto;',
    inherit: 'border-image-width:inherit;',
    initial: 'border-image-width:initial;',
    revert: 'border-image-width:revert;',
    revertLayer: 'border-image-width:revert-layer;',
    unset: 'border-image-width:unset;',
  } as const;
}

type BorderImageWidthCssKeywords = Readonly<ReturnType<typeof borderImageWidthKeywords>>;
export interface BorderImageWidthCss extends BorderImageWidthCssKeywords {}
/** CSS 属性 border-image-width；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
 */
export class BorderImageWidthCss extends LengthCssProperty<Property.BorderImageWidth> {
  constructor() {
    super('border-image-width');
    initializeBorderImageWidthCss();
  }
}
let borderImageWidthReady = false;
function initializeBorderImageWidthCss(): void {
  if (borderImageWidthReady) return;
  Object.assign(BorderImageWidthCss.prototype, borderImageWidthKeywords());
  Object.freeze(BorderImageWidthCss.prototype);
  borderImageWidthReady = true;
}

function borderInlineKeywords() {
  return {
    AccentColor: 'border-inline:AccentColor;',
    AccentColorText: 'border-inline:AccentColorText;',
    ActiveBorder: 'border-inline:ActiveBorder;',
    ActiveCaption: 'border-inline:ActiveCaption;',
    ActiveText: 'border-inline:ActiveText;',
    AppWorkspace: 'border-inline:AppWorkspace;',
    Background: 'border-inline:Background;',
    ButtonBorder: 'border-inline:ButtonBorder;',
    ButtonFace: 'border-inline:ButtonFace;',
    ButtonHighlight: 'border-inline:ButtonHighlight;',
    ButtonShadow: 'border-inline:ButtonShadow;',
    ButtonText: 'border-inline:ButtonText;',
    Canvas: 'border-inline:Canvas;',
    CanvasText: 'border-inline:CanvasText;',
    CaptionText: 'border-inline:CaptionText;',
    Field: 'border-inline:Field;',
    FieldText: 'border-inline:FieldText;',
    GrayText: 'border-inline:GrayText;',
    Highlight: 'border-inline:Highlight;',
    HighlightText: 'border-inline:HighlightText;',
    InactiveBorder: 'border-inline:InactiveBorder;',
    InactiveCaption: 'border-inline:InactiveCaption;',
    InactiveCaptionText: 'border-inline:InactiveCaptionText;',
    InfoBackground: 'border-inline:InfoBackground;',
    InfoText: 'border-inline:InfoText;',
    LinkText: 'border-inline:LinkText;',
    Mark: 'border-inline:Mark;',
    MarkText: 'border-inline:MarkText;',
    Menu: 'border-inline:Menu;',
    MenuText: 'border-inline:MenuText;',
    Scrollbar: 'border-inline:Scrollbar;',
    SelectedItem: 'border-inline:SelectedItem;',
    SelectedItemText: 'border-inline:SelectedItemText;',
    ThreeDDarkShadow: 'border-inline:ThreeDDarkShadow;',
    ThreeDFace: 'border-inline:ThreeDFace;',
    ThreeDHighlight: 'border-inline:ThreeDHighlight;',
    ThreeDLightShadow: 'border-inline:ThreeDLightShadow;',
    ThreeDShadow: 'border-inline:ThreeDShadow;',
    VisitedText: 'border-inline:VisitedText;',
    Window: 'border-inline:Window;',
    WindowFrame: 'border-inline:WindowFrame;',
    WindowText: 'border-inline:WindowText;',
    aliceblue: 'border-inline:aliceblue;',
    antiquewhite: 'border-inline:antiquewhite;',
    aqua: 'border-inline:aqua;',
    aquamarine: 'border-inline:aquamarine;',
    azure: 'border-inline:azure;',
    beige: 'border-inline:beige;',
    bisque: 'border-inline:bisque;',
    black: 'border-inline:black;',
    blanchedalmond: 'border-inline:blanchedalmond;',
    blue: 'border-inline:blue;',
    blueviolet: 'border-inline:blueviolet;',
    brown: 'border-inline:brown;',
    burlywood: 'border-inline:burlywood;',
    cadetblue: 'border-inline:cadetblue;',
    chartreuse: 'border-inline:chartreuse;',
    chocolate: 'border-inline:chocolate;',
    coral: 'border-inline:coral;',
    cornflowerblue: 'border-inline:cornflowerblue;',
    cornsilk: 'border-inline:cornsilk;',
    crimson: 'border-inline:crimson;',
    currentColor: 'border-inline:currentColor;',
    cyan: 'border-inline:cyan;',
    darkblue: 'border-inline:darkblue;',
    darkcyan: 'border-inline:darkcyan;',
    darkgoldenrod: 'border-inline:darkgoldenrod;',
    darkgray: 'border-inline:darkgray;',
    darkgreen: 'border-inline:darkgreen;',
    darkgrey: 'border-inline:darkgrey;',
    darkkhaki: 'border-inline:darkkhaki;',
    darkmagenta: 'border-inline:darkmagenta;',
    darkolivegreen: 'border-inline:darkolivegreen;',
    darkorange: 'border-inline:darkorange;',
    darkorchid: 'border-inline:darkorchid;',
    darkred: 'border-inline:darkred;',
    darksalmon: 'border-inline:darksalmon;',
    darkseagreen: 'border-inline:darkseagreen;',
    darkslateblue: 'border-inline:darkslateblue;',
    darkslategray: 'border-inline:darkslategray;',
    darkslategrey: 'border-inline:darkslategrey;',
    darkturquoise: 'border-inline:darkturquoise;',
    darkviolet: 'border-inline:darkviolet;',
    dashed: 'border-inline:dashed;',
    deeppink: 'border-inline:deeppink;',
    deepskyblue: 'border-inline:deepskyblue;',
    dimgray: 'border-inline:dimgray;',
    dimgrey: 'border-inline:dimgrey;',
    dodgerblue: 'border-inline:dodgerblue;',
    dotted: 'border-inline:dotted;',
    double: 'border-inline:double;',
    firebrick: 'border-inline:firebrick;',
    floralwhite: 'border-inline:floralwhite;',
    forestgreen: 'border-inline:forestgreen;',
    fuchsia: 'border-inline:fuchsia;',
    gainsboro: 'border-inline:gainsboro;',
    ghostwhite: 'border-inline:ghostwhite;',
    gold: 'border-inline:gold;',
    goldenrod: 'border-inline:goldenrod;',
    gray: 'border-inline:gray;',
    green: 'border-inline:green;',
    greenyellow: 'border-inline:greenyellow;',
    grey: 'border-inline:grey;',
    groove: 'border-inline:groove;',
    hidden: 'border-inline:hidden;',
    honeydew: 'border-inline:honeydew;',
    hotpink: 'border-inline:hotpink;',
    indianred: 'border-inline:indianred;',
    indigo: 'border-inline:indigo;',
    inherit: 'border-inline:inherit;',
    initial: 'border-inline:initial;',
    inset: 'border-inline:inset;',
    ivory: 'border-inline:ivory;',
    khaki: 'border-inline:khaki;',
    lavender: 'border-inline:lavender;',
    lavenderblush: 'border-inline:lavenderblush;',
    lawngreen: 'border-inline:lawngreen;',
    lemonchiffon: 'border-inline:lemonchiffon;',
    lightblue: 'border-inline:lightblue;',
    lightcoral: 'border-inline:lightcoral;',
    lightcyan: 'border-inline:lightcyan;',
    lightgoldenrodyellow: 'border-inline:lightgoldenrodyellow;',
    lightgray: 'border-inline:lightgray;',
    lightgreen: 'border-inline:lightgreen;',
    lightgrey: 'border-inline:lightgrey;',
    lightpink: 'border-inline:lightpink;',
    lightsalmon: 'border-inline:lightsalmon;',
    lightseagreen: 'border-inline:lightseagreen;',
    lightskyblue: 'border-inline:lightskyblue;',
    lightslategray: 'border-inline:lightslategray;',
    lightslategrey: 'border-inline:lightslategrey;',
    lightsteelblue: 'border-inline:lightsteelblue;',
    lightyellow: 'border-inline:lightyellow;',
    lime: 'border-inline:lime;',
    limegreen: 'border-inline:limegreen;',
    linen: 'border-inline:linen;',
    magenta: 'border-inline:magenta;',
    maroon: 'border-inline:maroon;',
    medium: 'border-inline:medium;',
    mediumaquamarine: 'border-inline:mediumaquamarine;',
    mediumblue: 'border-inline:mediumblue;',
    mediumorchid: 'border-inline:mediumorchid;',
    mediumpurple: 'border-inline:mediumpurple;',
    mediumseagreen: 'border-inline:mediumseagreen;',
    mediumslateblue: 'border-inline:mediumslateblue;',
    mediumspringgreen: 'border-inline:mediumspringgreen;',
    mediumturquoise: 'border-inline:mediumturquoise;',
    mediumvioletred: 'border-inline:mediumvioletred;',
    midnightblue: 'border-inline:midnightblue;',
    mintcream: 'border-inline:mintcream;',
    mistyrose: 'border-inline:mistyrose;',
    moccasin: 'border-inline:moccasin;',
    navajowhite: 'border-inline:navajowhite;',
    navy: 'border-inline:navy;',
    none: 'border-inline:none;',
    oldlace: 'border-inline:oldlace;',
    olive: 'border-inline:olive;',
    olivedrab: 'border-inline:olivedrab;',
    orange: 'border-inline:orange;',
    orangered: 'border-inline:orangered;',
    orchid: 'border-inline:orchid;',
    outset: 'border-inline:outset;',
    palegoldenrod: 'border-inline:palegoldenrod;',
    palegreen: 'border-inline:palegreen;',
    paleturquoise: 'border-inline:paleturquoise;',
    palevioletred: 'border-inline:palevioletred;',
    papayawhip: 'border-inline:papayawhip;',
    peachpuff: 'border-inline:peachpuff;',
    peru: 'border-inline:peru;',
    pink: 'border-inline:pink;',
    plum: 'border-inline:plum;',
    powderblue: 'border-inline:powderblue;',
    purple: 'border-inline:purple;',
    rebeccapurple: 'border-inline:rebeccapurple;',
    red: 'border-inline:red;',
    revert: 'border-inline:revert;',
    revertLayer: 'border-inline:revert-layer;',
    ridge: 'border-inline:ridge;',
    rosybrown: 'border-inline:rosybrown;',
    royalblue: 'border-inline:royalblue;',
    saddlebrown: 'border-inline:saddlebrown;',
    salmon: 'border-inline:salmon;',
    sandybrown: 'border-inline:sandybrown;',
    seagreen: 'border-inline:seagreen;',
    seashell: 'border-inline:seashell;',
    sienna: 'border-inline:sienna;',
    silver: 'border-inline:silver;',
    skyblue: 'border-inline:skyblue;',
    slateblue: 'border-inline:slateblue;',
    slategray: 'border-inline:slategray;',
    slategrey: 'border-inline:slategrey;',
    snow: 'border-inline:snow;',
    solid: 'border-inline:solid;',
    springgreen: 'border-inline:springgreen;',
    steelblue: 'border-inline:steelblue;',
    tan: 'border-inline:tan;',
    teal: 'border-inline:teal;',
    thick: 'border-inline:thick;',
    thin: 'border-inline:thin;',
    thistle: 'border-inline:thistle;',
    tomato: 'border-inline:tomato;',
    transparent: 'border-inline:transparent;',
    turquoise: 'border-inline:turquoise;',
    unset: 'border-inline:unset;',
    violet: 'border-inline:violet;',
    wheat: 'border-inline:wheat;',
    white: 'border-inline:white;',
    whitesmoke: 'border-inline:whitesmoke;',
    yellow: 'border-inline:yellow;',
    yellowgreen: 'border-inline:yellowgreen;',
  } as const;
}

type BorderInlineCssKeywords = Readonly<ReturnType<typeof borderInlineKeywords>>;
export interface BorderInlineCss extends BorderInlineCssKeywords {}
/** CSS 属性 border-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
 */
export class BorderInlineCss extends LengthCssProperty<Property.BorderInline> {
  constructor() {
    super('border-inline');
    initializeBorderInlineCss();
  }
}
let borderInlineReady = false;
function initializeBorderInlineCss(): void {
  if (borderInlineReady) return;
  Object.assign(BorderInlineCss.prototype, borderInlineKeywords());
  Object.freeze(BorderInlineCss.prototype);
  borderInlineReady = true;
}

function borderInlineColorKeywords() {
  return {
    AccentColor: 'border-inline-color:AccentColor;',
    AccentColorText: 'border-inline-color:AccentColorText;',
    ActiveBorder: 'border-inline-color:ActiveBorder;',
    ActiveCaption: 'border-inline-color:ActiveCaption;',
    ActiveText: 'border-inline-color:ActiveText;',
    AppWorkspace: 'border-inline-color:AppWorkspace;',
    Background: 'border-inline-color:Background;',
    ButtonBorder: 'border-inline-color:ButtonBorder;',
    ButtonFace: 'border-inline-color:ButtonFace;',
    ButtonHighlight: 'border-inline-color:ButtonHighlight;',
    ButtonShadow: 'border-inline-color:ButtonShadow;',
    ButtonText: 'border-inline-color:ButtonText;',
    Canvas: 'border-inline-color:Canvas;',
    CanvasText: 'border-inline-color:CanvasText;',
    CaptionText: 'border-inline-color:CaptionText;',
    Field: 'border-inline-color:Field;',
    FieldText: 'border-inline-color:FieldText;',
    GrayText: 'border-inline-color:GrayText;',
    Highlight: 'border-inline-color:Highlight;',
    HighlightText: 'border-inline-color:HighlightText;',
    InactiveBorder: 'border-inline-color:InactiveBorder;',
    InactiveCaption: 'border-inline-color:InactiveCaption;',
    InactiveCaptionText: 'border-inline-color:InactiveCaptionText;',
    InfoBackground: 'border-inline-color:InfoBackground;',
    InfoText: 'border-inline-color:InfoText;',
    LinkText: 'border-inline-color:LinkText;',
    Mark: 'border-inline-color:Mark;',
    MarkText: 'border-inline-color:MarkText;',
    Menu: 'border-inline-color:Menu;',
    MenuText: 'border-inline-color:MenuText;',
    Scrollbar: 'border-inline-color:Scrollbar;',
    SelectedItem: 'border-inline-color:SelectedItem;',
    SelectedItemText: 'border-inline-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-inline-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-inline-color:ThreeDFace;',
    ThreeDHighlight: 'border-inline-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-inline-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-inline-color:ThreeDShadow;',
    VisitedText: 'border-inline-color:VisitedText;',
    Window: 'border-inline-color:Window;',
    WindowFrame: 'border-inline-color:WindowFrame;',
    WindowText: 'border-inline-color:WindowText;',
    aliceblue: 'border-inline-color:aliceblue;',
    antiquewhite: 'border-inline-color:antiquewhite;',
    aqua: 'border-inline-color:aqua;',
    aquamarine: 'border-inline-color:aquamarine;',
    azure: 'border-inline-color:azure;',
    beige: 'border-inline-color:beige;',
    bisque: 'border-inline-color:bisque;',
    black: 'border-inline-color:black;',
    blanchedalmond: 'border-inline-color:blanchedalmond;',
    blue: 'border-inline-color:blue;',
    blueviolet: 'border-inline-color:blueviolet;',
    brown: 'border-inline-color:brown;',
    burlywood: 'border-inline-color:burlywood;',
    cadetblue: 'border-inline-color:cadetblue;',
    chartreuse: 'border-inline-color:chartreuse;',
    chocolate: 'border-inline-color:chocolate;',
    coral: 'border-inline-color:coral;',
    cornflowerblue: 'border-inline-color:cornflowerblue;',
    cornsilk: 'border-inline-color:cornsilk;',
    crimson: 'border-inline-color:crimson;',
    currentColor: 'border-inline-color:currentColor;',
    cyan: 'border-inline-color:cyan;',
    darkblue: 'border-inline-color:darkblue;',
    darkcyan: 'border-inline-color:darkcyan;',
    darkgoldenrod: 'border-inline-color:darkgoldenrod;',
    darkgray: 'border-inline-color:darkgray;',
    darkgreen: 'border-inline-color:darkgreen;',
    darkgrey: 'border-inline-color:darkgrey;',
    darkkhaki: 'border-inline-color:darkkhaki;',
    darkmagenta: 'border-inline-color:darkmagenta;',
    darkolivegreen: 'border-inline-color:darkolivegreen;',
    darkorange: 'border-inline-color:darkorange;',
    darkorchid: 'border-inline-color:darkorchid;',
    darkred: 'border-inline-color:darkred;',
    darksalmon: 'border-inline-color:darksalmon;',
    darkseagreen: 'border-inline-color:darkseagreen;',
    darkslateblue: 'border-inline-color:darkslateblue;',
    darkslategray: 'border-inline-color:darkslategray;',
    darkslategrey: 'border-inline-color:darkslategrey;',
    darkturquoise: 'border-inline-color:darkturquoise;',
    darkviolet: 'border-inline-color:darkviolet;',
    deeppink: 'border-inline-color:deeppink;',
    deepskyblue: 'border-inline-color:deepskyblue;',
    dimgray: 'border-inline-color:dimgray;',
    dimgrey: 'border-inline-color:dimgrey;',
    dodgerblue: 'border-inline-color:dodgerblue;',
    firebrick: 'border-inline-color:firebrick;',
    floralwhite: 'border-inline-color:floralwhite;',
    forestgreen: 'border-inline-color:forestgreen;',
    fuchsia: 'border-inline-color:fuchsia;',
    gainsboro: 'border-inline-color:gainsboro;',
    ghostwhite: 'border-inline-color:ghostwhite;',
    gold: 'border-inline-color:gold;',
    goldenrod: 'border-inline-color:goldenrod;',
    gray: 'border-inline-color:gray;',
    green: 'border-inline-color:green;',
    greenyellow: 'border-inline-color:greenyellow;',
    grey: 'border-inline-color:grey;',
    honeydew: 'border-inline-color:honeydew;',
    hotpink: 'border-inline-color:hotpink;',
    indianred: 'border-inline-color:indianred;',
    indigo: 'border-inline-color:indigo;',
    inherit: 'border-inline-color:inherit;',
    initial: 'border-inline-color:initial;',
    ivory: 'border-inline-color:ivory;',
    khaki: 'border-inline-color:khaki;',
    lavender: 'border-inline-color:lavender;',
    lavenderblush: 'border-inline-color:lavenderblush;',
    lawngreen: 'border-inline-color:lawngreen;',
    lemonchiffon: 'border-inline-color:lemonchiffon;',
    lightblue: 'border-inline-color:lightblue;',
    lightcoral: 'border-inline-color:lightcoral;',
    lightcyan: 'border-inline-color:lightcyan;',
    lightgoldenrodyellow: 'border-inline-color:lightgoldenrodyellow;',
    lightgray: 'border-inline-color:lightgray;',
    lightgreen: 'border-inline-color:lightgreen;',
    lightgrey: 'border-inline-color:lightgrey;',
    lightpink: 'border-inline-color:lightpink;',
    lightsalmon: 'border-inline-color:lightsalmon;',
    lightseagreen: 'border-inline-color:lightseagreen;',
    lightskyblue: 'border-inline-color:lightskyblue;',
    lightslategray: 'border-inline-color:lightslategray;',
    lightslategrey: 'border-inline-color:lightslategrey;',
    lightsteelblue: 'border-inline-color:lightsteelblue;',
    lightyellow: 'border-inline-color:lightyellow;',
    lime: 'border-inline-color:lime;',
    limegreen: 'border-inline-color:limegreen;',
    linen: 'border-inline-color:linen;',
    magenta: 'border-inline-color:magenta;',
    maroon: 'border-inline-color:maroon;',
    mediumaquamarine: 'border-inline-color:mediumaquamarine;',
    mediumblue: 'border-inline-color:mediumblue;',
    mediumorchid: 'border-inline-color:mediumorchid;',
    mediumpurple: 'border-inline-color:mediumpurple;',
    mediumseagreen: 'border-inline-color:mediumseagreen;',
    mediumslateblue: 'border-inline-color:mediumslateblue;',
    mediumspringgreen: 'border-inline-color:mediumspringgreen;',
    mediumturquoise: 'border-inline-color:mediumturquoise;',
    mediumvioletred: 'border-inline-color:mediumvioletred;',
    midnightblue: 'border-inline-color:midnightblue;',
    mintcream: 'border-inline-color:mintcream;',
    mistyrose: 'border-inline-color:mistyrose;',
    moccasin: 'border-inline-color:moccasin;',
    navajowhite: 'border-inline-color:navajowhite;',
    navy: 'border-inline-color:navy;',
    oldlace: 'border-inline-color:oldlace;',
    olive: 'border-inline-color:olive;',
    olivedrab: 'border-inline-color:olivedrab;',
    orange: 'border-inline-color:orange;',
    orangered: 'border-inline-color:orangered;',
    orchid: 'border-inline-color:orchid;',
    palegoldenrod: 'border-inline-color:palegoldenrod;',
    palegreen: 'border-inline-color:palegreen;',
    paleturquoise: 'border-inline-color:paleturquoise;',
    palevioletred: 'border-inline-color:palevioletred;',
    papayawhip: 'border-inline-color:papayawhip;',
    peachpuff: 'border-inline-color:peachpuff;',
    peru: 'border-inline-color:peru;',
    pink: 'border-inline-color:pink;',
    plum: 'border-inline-color:plum;',
    powderblue: 'border-inline-color:powderblue;',
    purple: 'border-inline-color:purple;',
    rebeccapurple: 'border-inline-color:rebeccapurple;',
    red: 'border-inline-color:red;',
    revert: 'border-inline-color:revert;',
    revertLayer: 'border-inline-color:revert-layer;',
    rosybrown: 'border-inline-color:rosybrown;',
    royalblue: 'border-inline-color:royalblue;',
    saddlebrown: 'border-inline-color:saddlebrown;',
    salmon: 'border-inline-color:salmon;',
    sandybrown: 'border-inline-color:sandybrown;',
    seagreen: 'border-inline-color:seagreen;',
    seashell: 'border-inline-color:seashell;',
    sienna: 'border-inline-color:sienna;',
    silver: 'border-inline-color:silver;',
    skyblue: 'border-inline-color:skyblue;',
    slateblue: 'border-inline-color:slateblue;',
    slategray: 'border-inline-color:slategray;',
    slategrey: 'border-inline-color:slategrey;',
    snow: 'border-inline-color:snow;',
    springgreen: 'border-inline-color:springgreen;',
    steelblue: 'border-inline-color:steelblue;',
    tan: 'border-inline-color:tan;',
    teal: 'border-inline-color:teal;',
    thistle: 'border-inline-color:thistle;',
    tomato: 'border-inline-color:tomato;',
    transparent: 'border-inline-color:transparent;',
    turquoise: 'border-inline-color:turquoise;',
    unset: 'border-inline-color:unset;',
    violet: 'border-inline-color:violet;',
    wheat: 'border-inline-color:wheat;',
    white: 'border-inline-color:white;',
    whitesmoke: 'border-inline-color:whitesmoke;',
    yellow: 'border-inline-color:yellow;',
    yellowgreen: 'border-inline-color:yellowgreen;',
  } as const;
}

type BorderInlineColorCssKeywords = Readonly<ReturnType<typeof borderInlineColorKeywords>>;
export interface BorderInlineColorCss extends BorderInlineColorCssKeywords {}
/** CSS 属性 border-inline-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
 */
export class BorderInlineColorCss extends CssProperty<Property.BorderInlineColor> {
  constructor() {
    super('border-inline-color');
    initializeBorderInlineColorCss();
  }
}
let borderInlineColorReady = false;
function initializeBorderInlineColorCss(): void {
  if (borderInlineColorReady) return;
  Object.assign(BorderInlineColorCss.prototype, borderInlineColorKeywords());
  Object.freeze(BorderInlineColorCss.prototype);
  borderInlineColorReady = true;
}

function borderInlineEndKeywords() {
  return {
    AccentColor: 'border-inline-end:AccentColor;',
    AccentColorText: 'border-inline-end:AccentColorText;',
    ActiveBorder: 'border-inline-end:ActiveBorder;',
    ActiveCaption: 'border-inline-end:ActiveCaption;',
    ActiveText: 'border-inline-end:ActiveText;',
    AppWorkspace: 'border-inline-end:AppWorkspace;',
    Background: 'border-inline-end:Background;',
    ButtonBorder: 'border-inline-end:ButtonBorder;',
    ButtonFace: 'border-inline-end:ButtonFace;',
    ButtonHighlight: 'border-inline-end:ButtonHighlight;',
    ButtonShadow: 'border-inline-end:ButtonShadow;',
    ButtonText: 'border-inline-end:ButtonText;',
    Canvas: 'border-inline-end:Canvas;',
    CanvasText: 'border-inline-end:CanvasText;',
    CaptionText: 'border-inline-end:CaptionText;',
    Field: 'border-inline-end:Field;',
    FieldText: 'border-inline-end:FieldText;',
    GrayText: 'border-inline-end:GrayText;',
    Highlight: 'border-inline-end:Highlight;',
    HighlightText: 'border-inline-end:HighlightText;',
    InactiveBorder: 'border-inline-end:InactiveBorder;',
    InactiveCaption: 'border-inline-end:InactiveCaption;',
    InactiveCaptionText: 'border-inline-end:InactiveCaptionText;',
    InfoBackground: 'border-inline-end:InfoBackground;',
    InfoText: 'border-inline-end:InfoText;',
    LinkText: 'border-inline-end:LinkText;',
    Mark: 'border-inline-end:Mark;',
    MarkText: 'border-inline-end:MarkText;',
    Menu: 'border-inline-end:Menu;',
    MenuText: 'border-inline-end:MenuText;',
    Scrollbar: 'border-inline-end:Scrollbar;',
    SelectedItem: 'border-inline-end:SelectedItem;',
    SelectedItemText: 'border-inline-end:SelectedItemText;',
    ThreeDDarkShadow: 'border-inline-end:ThreeDDarkShadow;',
    ThreeDFace: 'border-inline-end:ThreeDFace;',
    ThreeDHighlight: 'border-inline-end:ThreeDHighlight;',
    ThreeDLightShadow: 'border-inline-end:ThreeDLightShadow;',
    ThreeDShadow: 'border-inline-end:ThreeDShadow;',
    VisitedText: 'border-inline-end:VisitedText;',
    Window: 'border-inline-end:Window;',
    WindowFrame: 'border-inline-end:WindowFrame;',
    WindowText: 'border-inline-end:WindowText;',
    aliceblue: 'border-inline-end:aliceblue;',
    antiquewhite: 'border-inline-end:antiquewhite;',
    aqua: 'border-inline-end:aqua;',
    aquamarine: 'border-inline-end:aquamarine;',
    azure: 'border-inline-end:azure;',
    beige: 'border-inline-end:beige;',
    bisque: 'border-inline-end:bisque;',
    black: 'border-inline-end:black;',
    blanchedalmond: 'border-inline-end:blanchedalmond;',
    blue: 'border-inline-end:blue;',
    blueviolet: 'border-inline-end:blueviolet;',
    brown: 'border-inline-end:brown;',
    burlywood: 'border-inline-end:burlywood;',
    cadetblue: 'border-inline-end:cadetblue;',
    chartreuse: 'border-inline-end:chartreuse;',
    chocolate: 'border-inline-end:chocolate;',
    coral: 'border-inline-end:coral;',
    cornflowerblue: 'border-inline-end:cornflowerblue;',
    cornsilk: 'border-inline-end:cornsilk;',
    crimson: 'border-inline-end:crimson;',
    currentColor: 'border-inline-end:currentColor;',
    cyan: 'border-inline-end:cyan;',
    darkblue: 'border-inline-end:darkblue;',
    darkcyan: 'border-inline-end:darkcyan;',
    darkgoldenrod: 'border-inline-end:darkgoldenrod;',
    darkgray: 'border-inline-end:darkgray;',
    darkgreen: 'border-inline-end:darkgreen;',
    darkgrey: 'border-inline-end:darkgrey;',
    darkkhaki: 'border-inline-end:darkkhaki;',
    darkmagenta: 'border-inline-end:darkmagenta;',
    darkolivegreen: 'border-inline-end:darkolivegreen;',
    darkorange: 'border-inline-end:darkorange;',
    darkorchid: 'border-inline-end:darkorchid;',
    darkred: 'border-inline-end:darkred;',
    darksalmon: 'border-inline-end:darksalmon;',
    darkseagreen: 'border-inline-end:darkseagreen;',
    darkslateblue: 'border-inline-end:darkslateblue;',
    darkslategray: 'border-inline-end:darkslategray;',
    darkslategrey: 'border-inline-end:darkslategrey;',
    darkturquoise: 'border-inline-end:darkturquoise;',
    darkviolet: 'border-inline-end:darkviolet;',
    dashed: 'border-inline-end:dashed;',
    deeppink: 'border-inline-end:deeppink;',
    deepskyblue: 'border-inline-end:deepskyblue;',
    dimgray: 'border-inline-end:dimgray;',
    dimgrey: 'border-inline-end:dimgrey;',
    dodgerblue: 'border-inline-end:dodgerblue;',
    dotted: 'border-inline-end:dotted;',
    double: 'border-inline-end:double;',
    firebrick: 'border-inline-end:firebrick;',
    floralwhite: 'border-inline-end:floralwhite;',
    forestgreen: 'border-inline-end:forestgreen;',
    fuchsia: 'border-inline-end:fuchsia;',
    gainsboro: 'border-inline-end:gainsboro;',
    ghostwhite: 'border-inline-end:ghostwhite;',
    gold: 'border-inline-end:gold;',
    goldenrod: 'border-inline-end:goldenrod;',
    gray: 'border-inline-end:gray;',
    green: 'border-inline-end:green;',
    greenyellow: 'border-inline-end:greenyellow;',
    grey: 'border-inline-end:grey;',
    groove: 'border-inline-end:groove;',
    hidden: 'border-inline-end:hidden;',
    honeydew: 'border-inline-end:honeydew;',
    hotpink: 'border-inline-end:hotpink;',
    indianred: 'border-inline-end:indianred;',
    indigo: 'border-inline-end:indigo;',
    inherit: 'border-inline-end:inherit;',
    initial: 'border-inline-end:initial;',
    inset: 'border-inline-end:inset;',
    ivory: 'border-inline-end:ivory;',
    khaki: 'border-inline-end:khaki;',
    lavender: 'border-inline-end:lavender;',
    lavenderblush: 'border-inline-end:lavenderblush;',
    lawngreen: 'border-inline-end:lawngreen;',
    lemonchiffon: 'border-inline-end:lemonchiffon;',
    lightblue: 'border-inline-end:lightblue;',
    lightcoral: 'border-inline-end:lightcoral;',
    lightcyan: 'border-inline-end:lightcyan;',
    lightgoldenrodyellow: 'border-inline-end:lightgoldenrodyellow;',
    lightgray: 'border-inline-end:lightgray;',
    lightgreen: 'border-inline-end:lightgreen;',
    lightgrey: 'border-inline-end:lightgrey;',
    lightpink: 'border-inline-end:lightpink;',
    lightsalmon: 'border-inline-end:lightsalmon;',
    lightseagreen: 'border-inline-end:lightseagreen;',
    lightskyblue: 'border-inline-end:lightskyblue;',
    lightslategray: 'border-inline-end:lightslategray;',
    lightslategrey: 'border-inline-end:lightslategrey;',
    lightsteelblue: 'border-inline-end:lightsteelblue;',
    lightyellow: 'border-inline-end:lightyellow;',
    lime: 'border-inline-end:lime;',
    limegreen: 'border-inline-end:limegreen;',
    linen: 'border-inline-end:linen;',
    magenta: 'border-inline-end:magenta;',
    maroon: 'border-inline-end:maroon;',
    medium: 'border-inline-end:medium;',
    mediumaquamarine: 'border-inline-end:mediumaquamarine;',
    mediumblue: 'border-inline-end:mediumblue;',
    mediumorchid: 'border-inline-end:mediumorchid;',
    mediumpurple: 'border-inline-end:mediumpurple;',
    mediumseagreen: 'border-inline-end:mediumseagreen;',
    mediumslateblue: 'border-inline-end:mediumslateblue;',
    mediumspringgreen: 'border-inline-end:mediumspringgreen;',
    mediumturquoise: 'border-inline-end:mediumturquoise;',
    mediumvioletred: 'border-inline-end:mediumvioletred;',
    midnightblue: 'border-inline-end:midnightblue;',
    mintcream: 'border-inline-end:mintcream;',
    mistyrose: 'border-inline-end:mistyrose;',
    moccasin: 'border-inline-end:moccasin;',
    navajowhite: 'border-inline-end:navajowhite;',
    navy: 'border-inline-end:navy;',
    none: 'border-inline-end:none;',
    oldlace: 'border-inline-end:oldlace;',
    olive: 'border-inline-end:olive;',
    olivedrab: 'border-inline-end:olivedrab;',
    orange: 'border-inline-end:orange;',
    orangered: 'border-inline-end:orangered;',
    orchid: 'border-inline-end:orchid;',
    outset: 'border-inline-end:outset;',
    palegoldenrod: 'border-inline-end:palegoldenrod;',
    palegreen: 'border-inline-end:palegreen;',
    paleturquoise: 'border-inline-end:paleturquoise;',
    palevioletred: 'border-inline-end:palevioletred;',
    papayawhip: 'border-inline-end:papayawhip;',
    peachpuff: 'border-inline-end:peachpuff;',
    peru: 'border-inline-end:peru;',
    pink: 'border-inline-end:pink;',
    plum: 'border-inline-end:plum;',
    powderblue: 'border-inline-end:powderblue;',
    purple: 'border-inline-end:purple;',
    rebeccapurple: 'border-inline-end:rebeccapurple;',
    red: 'border-inline-end:red;',
    revert: 'border-inline-end:revert;',
    revertLayer: 'border-inline-end:revert-layer;',
    ridge: 'border-inline-end:ridge;',
    rosybrown: 'border-inline-end:rosybrown;',
    royalblue: 'border-inline-end:royalblue;',
    saddlebrown: 'border-inline-end:saddlebrown;',
    salmon: 'border-inline-end:salmon;',
    sandybrown: 'border-inline-end:sandybrown;',
    seagreen: 'border-inline-end:seagreen;',
    seashell: 'border-inline-end:seashell;',
    sienna: 'border-inline-end:sienna;',
    silver: 'border-inline-end:silver;',
    skyblue: 'border-inline-end:skyblue;',
    slateblue: 'border-inline-end:slateblue;',
    slategray: 'border-inline-end:slategray;',
    slategrey: 'border-inline-end:slategrey;',
    snow: 'border-inline-end:snow;',
    solid: 'border-inline-end:solid;',
    springgreen: 'border-inline-end:springgreen;',
    steelblue: 'border-inline-end:steelblue;',
    tan: 'border-inline-end:tan;',
    teal: 'border-inline-end:teal;',
    thick: 'border-inline-end:thick;',
    thin: 'border-inline-end:thin;',
    thistle: 'border-inline-end:thistle;',
    tomato: 'border-inline-end:tomato;',
    transparent: 'border-inline-end:transparent;',
    turquoise: 'border-inline-end:turquoise;',
    unset: 'border-inline-end:unset;',
    violet: 'border-inline-end:violet;',
    wheat: 'border-inline-end:wheat;',
    white: 'border-inline-end:white;',
    whitesmoke: 'border-inline-end:whitesmoke;',
    yellow: 'border-inline-end:yellow;',
    yellowgreen: 'border-inline-end:yellowgreen;',
  } as const;
}

type BorderInlineEndCssKeywords = Readonly<ReturnType<typeof borderInlineEndKeywords>>;
export interface BorderInlineEndCss extends BorderInlineEndCssKeywords {}
/** CSS 属性 border-inline-end。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
 */
export class BorderInlineEndCss extends LengthCssProperty<Property.BorderInlineEnd> {
  constructor() {
    super('border-inline-end');
    initializeBorderInlineEndCss();
  }
}
let borderInlineEndReady = false;
function initializeBorderInlineEndCss(): void {
  if (borderInlineEndReady) return;
  Object.assign(BorderInlineEndCss.prototype, borderInlineEndKeywords());
  Object.freeze(BorderInlineEndCss.prototype);
  borderInlineEndReady = true;
}

function borderInlineEndColorKeywords() {
  return {
    AccentColor: 'border-inline-end-color:AccentColor;',
    AccentColorText: 'border-inline-end-color:AccentColorText;',
    ActiveBorder: 'border-inline-end-color:ActiveBorder;',
    ActiveCaption: 'border-inline-end-color:ActiveCaption;',
    ActiveText: 'border-inline-end-color:ActiveText;',
    AppWorkspace: 'border-inline-end-color:AppWorkspace;',
    Background: 'border-inline-end-color:Background;',
    ButtonBorder: 'border-inline-end-color:ButtonBorder;',
    ButtonFace: 'border-inline-end-color:ButtonFace;',
    ButtonHighlight: 'border-inline-end-color:ButtonHighlight;',
    ButtonShadow: 'border-inline-end-color:ButtonShadow;',
    ButtonText: 'border-inline-end-color:ButtonText;',
    Canvas: 'border-inline-end-color:Canvas;',
    CanvasText: 'border-inline-end-color:CanvasText;',
    CaptionText: 'border-inline-end-color:CaptionText;',
    Field: 'border-inline-end-color:Field;',
    FieldText: 'border-inline-end-color:FieldText;',
    GrayText: 'border-inline-end-color:GrayText;',
    Highlight: 'border-inline-end-color:Highlight;',
    HighlightText: 'border-inline-end-color:HighlightText;',
    InactiveBorder: 'border-inline-end-color:InactiveBorder;',
    InactiveCaption: 'border-inline-end-color:InactiveCaption;',
    InactiveCaptionText: 'border-inline-end-color:InactiveCaptionText;',
    InfoBackground: 'border-inline-end-color:InfoBackground;',
    InfoText: 'border-inline-end-color:InfoText;',
    LinkText: 'border-inline-end-color:LinkText;',
    Mark: 'border-inline-end-color:Mark;',
    MarkText: 'border-inline-end-color:MarkText;',
    Menu: 'border-inline-end-color:Menu;',
    MenuText: 'border-inline-end-color:MenuText;',
    Scrollbar: 'border-inline-end-color:Scrollbar;',
    SelectedItem: 'border-inline-end-color:SelectedItem;',
    SelectedItemText: 'border-inline-end-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-inline-end-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-inline-end-color:ThreeDFace;',
    ThreeDHighlight: 'border-inline-end-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-inline-end-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-inline-end-color:ThreeDShadow;',
    VisitedText: 'border-inline-end-color:VisitedText;',
    Window: 'border-inline-end-color:Window;',
    WindowFrame: 'border-inline-end-color:WindowFrame;',
    WindowText: 'border-inline-end-color:WindowText;',
    aliceblue: 'border-inline-end-color:aliceblue;',
    antiquewhite: 'border-inline-end-color:antiquewhite;',
    aqua: 'border-inline-end-color:aqua;',
    aquamarine: 'border-inline-end-color:aquamarine;',
    azure: 'border-inline-end-color:azure;',
    beige: 'border-inline-end-color:beige;',
    bisque: 'border-inline-end-color:bisque;',
    black: 'border-inline-end-color:black;',
    blanchedalmond: 'border-inline-end-color:blanchedalmond;',
    blue: 'border-inline-end-color:blue;',
    blueviolet: 'border-inline-end-color:blueviolet;',
    brown: 'border-inline-end-color:brown;',
    burlywood: 'border-inline-end-color:burlywood;',
    cadetblue: 'border-inline-end-color:cadetblue;',
    chartreuse: 'border-inline-end-color:chartreuse;',
    chocolate: 'border-inline-end-color:chocolate;',
    coral: 'border-inline-end-color:coral;',
    cornflowerblue: 'border-inline-end-color:cornflowerblue;',
    cornsilk: 'border-inline-end-color:cornsilk;',
    crimson: 'border-inline-end-color:crimson;',
    currentColor: 'border-inline-end-color:currentColor;',
    cyan: 'border-inline-end-color:cyan;',
    darkblue: 'border-inline-end-color:darkblue;',
    darkcyan: 'border-inline-end-color:darkcyan;',
    darkgoldenrod: 'border-inline-end-color:darkgoldenrod;',
    darkgray: 'border-inline-end-color:darkgray;',
    darkgreen: 'border-inline-end-color:darkgreen;',
    darkgrey: 'border-inline-end-color:darkgrey;',
    darkkhaki: 'border-inline-end-color:darkkhaki;',
    darkmagenta: 'border-inline-end-color:darkmagenta;',
    darkolivegreen: 'border-inline-end-color:darkolivegreen;',
    darkorange: 'border-inline-end-color:darkorange;',
    darkorchid: 'border-inline-end-color:darkorchid;',
    darkred: 'border-inline-end-color:darkred;',
    darksalmon: 'border-inline-end-color:darksalmon;',
    darkseagreen: 'border-inline-end-color:darkseagreen;',
    darkslateblue: 'border-inline-end-color:darkslateblue;',
    darkslategray: 'border-inline-end-color:darkslategray;',
    darkslategrey: 'border-inline-end-color:darkslategrey;',
    darkturquoise: 'border-inline-end-color:darkturquoise;',
    darkviolet: 'border-inline-end-color:darkviolet;',
    deeppink: 'border-inline-end-color:deeppink;',
    deepskyblue: 'border-inline-end-color:deepskyblue;',
    dimgray: 'border-inline-end-color:dimgray;',
    dimgrey: 'border-inline-end-color:dimgrey;',
    dodgerblue: 'border-inline-end-color:dodgerblue;',
    firebrick: 'border-inline-end-color:firebrick;',
    floralwhite: 'border-inline-end-color:floralwhite;',
    forestgreen: 'border-inline-end-color:forestgreen;',
    fuchsia: 'border-inline-end-color:fuchsia;',
    gainsboro: 'border-inline-end-color:gainsboro;',
    ghostwhite: 'border-inline-end-color:ghostwhite;',
    gold: 'border-inline-end-color:gold;',
    goldenrod: 'border-inline-end-color:goldenrod;',
    gray: 'border-inline-end-color:gray;',
    green: 'border-inline-end-color:green;',
    greenyellow: 'border-inline-end-color:greenyellow;',
    grey: 'border-inline-end-color:grey;',
    honeydew: 'border-inline-end-color:honeydew;',
    hotpink: 'border-inline-end-color:hotpink;',
    indianred: 'border-inline-end-color:indianred;',
    indigo: 'border-inline-end-color:indigo;',
    inherit: 'border-inline-end-color:inherit;',
    initial: 'border-inline-end-color:initial;',
    ivory: 'border-inline-end-color:ivory;',
    khaki: 'border-inline-end-color:khaki;',
    lavender: 'border-inline-end-color:lavender;',
    lavenderblush: 'border-inline-end-color:lavenderblush;',
    lawngreen: 'border-inline-end-color:lawngreen;',
    lemonchiffon: 'border-inline-end-color:lemonchiffon;',
    lightblue: 'border-inline-end-color:lightblue;',
    lightcoral: 'border-inline-end-color:lightcoral;',
    lightcyan: 'border-inline-end-color:lightcyan;',
    lightgoldenrodyellow: 'border-inline-end-color:lightgoldenrodyellow;',
    lightgray: 'border-inline-end-color:lightgray;',
    lightgreen: 'border-inline-end-color:lightgreen;',
    lightgrey: 'border-inline-end-color:lightgrey;',
    lightpink: 'border-inline-end-color:lightpink;',
    lightsalmon: 'border-inline-end-color:lightsalmon;',
    lightseagreen: 'border-inline-end-color:lightseagreen;',
    lightskyblue: 'border-inline-end-color:lightskyblue;',
    lightslategray: 'border-inline-end-color:lightslategray;',
    lightslategrey: 'border-inline-end-color:lightslategrey;',
    lightsteelblue: 'border-inline-end-color:lightsteelblue;',
    lightyellow: 'border-inline-end-color:lightyellow;',
    lime: 'border-inline-end-color:lime;',
    limegreen: 'border-inline-end-color:limegreen;',
    linen: 'border-inline-end-color:linen;',
    magenta: 'border-inline-end-color:magenta;',
    maroon: 'border-inline-end-color:maroon;',
    mediumaquamarine: 'border-inline-end-color:mediumaquamarine;',
    mediumblue: 'border-inline-end-color:mediumblue;',
    mediumorchid: 'border-inline-end-color:mediumorchid;',
    mediumpurple: 'border-inline-end-color:mediumpurple;',
    mediumseagreen: 'border-inline-end-color:mediumseagreen;',
    mediumslateblue: 'border-inline-end-color:mediumslateblue;',
    mediumspringgreen: 'border-inline-end-color:mediumspringgreen;',
    mediumturquoise: 'border-inline-end-color:mediumturquoise;',
    mediumvioletred: 'border-inline-end-color:mediumvioletred;',
    midnightblue: 'border-inline-end-color:midnightblue;',
    mintcream: 'border-inline-end-color:mintcream;',
    mistyrose: 'border-inline-end-color:mistyrose;',
    moccasin: 'border-inline-end-color:moccasin;',
    navajowhite: 'border-inline-end-color:navajowhite;',
    navy: 'border-inline-end-color:navy;',
    oldlace: 'border-inline-end-color:oldlace;',
    olive: 'border-inline-end-color:olive;',
    olivedrab: 'border-inline-end-color:olivedrab;',
    orange: 'border-inline-end-color:orange;',
    orangered: 'border-inline-end-color:orangered;',
    orchid: 'border-inline-end-color:orchid;',
    palegoldenrod: 'border-inline-end-color:palegoldenrod;',
    palegreen: 'border-inline-end-color:palegreen;',
    paleturquoise: 'border-inline-end-color:paleturquoise;',
    palevioletred: 'border-inline-end-color:palevioletred;',
    papayawhip: 'border-inline-end-color:papayawhip;',
    peachpuff: 'border-inline-end-color:peachpuff;',
    peru: 'border-inline-end-color:peru;',
    pink: 'border-inline-end-color:pink;',
    plum: 'border-inline-end-color:plum;',
    powderblue: 'border-inline-end-color:powderblue;',
    purple: 'border-inline-end-color:purple;',
    rebeccapurple: 'border-inline-end-color:rebeccapurple;',
    red: 'border-inline-end-color:red;',
    revert: 'border-inline-end-color:revert;',
    revertLayer: 'border-inline-end-color:revert-layer;',
    rosybrown: 'border-inline-end-color:rosybrown;',
    royalblue: 'border-inline-end-color:royalblue;',
    saddlebrown: 'border-inline-end-color:saddlebrown;',
    salmon: 'border-inline-end-color:salmon;',
    sandybrown: 'border-inline-end-color:sandybrown;',
    seagreen: 'border-inline-end-color:seagreen;',
    seashell: 'border-inline-end-color:seashell;',
    sienna: 'border-inline-end-color:sienna;',
    silver: 'border-inline-end-color:silver;',
    skyblue: 'border-inline-end-color:skyblue;',
    slateblue: 'border-inline-end-color:slateblue;',
    slategray: 'border-inline-end-color:slategray;',
    slategrey: 'border-inline-end-color:slategrey;',
    snow: 'border-inline-end-color:snow;',
    springgreen: 'border-inline-end-color:springgreen;',
    steelblue: 'border-inline-end-color:steelblue;',
    tan: 'border-inline-end-color:tan;',
    teal: 'border-inline-end-color:teal;',
    thistle: 'border-inline-end-color:thistle;',
    tomato: 'border-inline-end-color:tomato;',
    transparent: 'border-inline-end-color:transparent;',
    turquoise: 'border-inline-end-color:turquoise;',
    unset: 'border-inline-end-color:unset;',
    violet: 'border-inline-end-color:violet;',
    wheat: 'border-inline-end-color:wheat;',
    white: 'border-inline-end-color:white;',
    whitesmoke: 'border-inline-end-color:whitesmoke;',
    yellow: 'border-inline-end-color:yellow;',
    yellowgreen: 'border-inline-end-color:yellowgreen;',
  } as const;
}

type BorderInlineEndColorCssKeywords = Readonly<ReturnType<typeof borderInlineEndColorKeywords>>;
export interface BorderInlineEndColorCss extends BorderInlineEndColorCssKeywords {}
/** CSS 属性 border-inline-end-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
 */
export class BorderInlineEndColorCss extends CssProperty<Property.BorderInlineEndColor> {
  constructor() {
    super('border-inline-end-color');
    initializeBorderInlineEndColorCss();
  }
}
let borderInlineEndColorReady = false;
function initializeBorderInlineEndColorCss(): void {
  if (borderInlineEndColorReady) return;
  Object.assign(BorderInlineEndColorCss.prototype, borderInlineEndColorKeywords());
  Object.freeze(BorderInlineEndColorCss.prototype);
  borderInlineEndColorReady = true;
}

function borderInlineEndStyleKeywords() {
  return {
    dashed: 'border-inline-end-style:dashed;',
    dotted: 'border-inline-end-style:dotted;',
    double: 'border-inline-end-style:double;',
    groove: 'border-inline-end-style:groove;',
    hidden: 'border-inline-end-style:hidden;',
    inherit: 'border-inline-end-style:inherit;',
    initial: 'border-inline-end-style:initial;',
    inset: 'border-inline-end-style:inset;',
    none: 'border-inline-end-style:none;',
    outset: 'border-inline-end-style:outset;',
    revert: 'border-inline-end-style:revert;',
    revertLayer: 'border-inline-end-style:revert-layer;',
    ridge: 'border-inline-end-style:ridge;',
    solid: 'border-inline-end-style:solid;',
    unset: 'border-inline-end-style:unset;',
  } as const;
}

type BorderInlineEndStyleCssKeywords = Readonly<ReturnType<typeof borderInlineEndStyleKeywords>>;
export interface BorderInlineEndStyleCss extends BorderInlineEndStyleCssKeywords {}
/** CSS 属性 border-inline-end-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
 */
export class BorderInlineEndStyleCss extends CssProperty<Property.BorderInlineEndStyle> {
  constructor() {
    super('border-inline-end-style');
    initializeBorderInlineEndStyleCss();
  }
}
let borderInlineEndStyleReady = false;
function initializeBorderInlineEndStyleCss(): void {
  if (borderInlineEndStyleReady) return;
  Object.assign(BorderInlineEndStyleCss.prototype, borderInlineEndStyleKeywords());
  Object.freeze(BorderInlineEndStyleCss.prototype);
  borderInlineEndStyleReady = true;
}

function borderInlineEndWidthKeywords() {
  return {
    inherit: 'border-inline-end-width:inherit;',
    initial: 'border-inline-end-width:initial;',
    medium: 'border-inline-end-width:medium;',
    revert: 'border-inline-end-width:revert;',
    revertLayer: 'border-inline-end-width:revert-layer;',
    thick: 'border-inline-end-width:thick;',
    thin: 'border-inline-end-width:thin;',
    unset: 'border-inline-end-width:unset;',
  } as const;
}

type BorderInlineEndWidthCssKeywords = Readonly<ReturnType<typeof borderInlineEndWidthKeywords>>;
export interface BorderInlineEndWidthCss extends BorderInlineEndWidthCssKeywords {}
/** CSS 属性 border-inline-end-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
 */
export class BorderInlineEndWidthCss extends LengthCssProperty<Property.BorderInlineEndWidth> {
  constructor() {
    super('border-inline-end-width');
    initializeBorderInlineEndWidthCss();
  }
}
let borderInlineEndWidthReady = false;
function initializeBorderInlineEndWidthCss(): void {
  if (borderInlineEndWidthReady) return;
  Object.assign(BorderInlineEndWidthCss.prototype, borderInlineEndWidthKeywords());
  Object.freeze(BorderInlineEndWidthCss.prototype);
  borderInlineEndWidthReady = true;
}

function borderInlineStartKeywords() {
  return {
    AccentColor: 'border-inline-start:AccentColor;',
    AccentColorText: 'border-inline-start:AccentColorText;',
    ActiveBorder: 'border-inline-start:ActiveBorder;',
    ActiveCaption: 'border-inline-start:ActiveCaption;',
    ActiveText: 'border-inline-start:ActiveText;',
    AppWorkspace: 'border-inline-start:AppWorkspace;',
    Background: 'border-inline-start:Background;',
    ButtonBorder: 'border-inline-start:ButtonBorder;',
    ButtonFace: 'border-inline-start:ButtonFace;',
    ButtonHighlight: 'border-inline-start:ButtonHighlight;',
    ButtonShadow: 'border-inline-start:ButtonShadow;',
    ButtonText: 'border-inline-start:ButtonText;',
    Canvas: 'border-inline-start:Canvas;',
    CanvasText: 'border-inline-start:CanvasText;',
    CaptionText: 'border-inline-start:CaptionText;',
    Field: 'border-inline-start:Field;',
    FieldText: 'border-inline-start:FieldText;',
    GrayText: 'border-inline-start:GrayText;',
    Highlight: 'border-inline-start:Highlight;',
    HighlightText: 'border-inline-start:HighlightText;',
    InactiveBorder: 'border-inline-start:InactiveBorder;',
    InactiveCaption: 'border-inline-start:InactiveCaption;',
    InactiveCaptionText: 'border-inline-start:InactiveCaptionText;',
    InfoBackground: 'border-inline-start:InfoBackground;',
    InfoText: 'border-inline-start:InfoText;',
    LinkText: 'border-inline-start:LinkText;',
    Mark: 'border-inline-start:Mark;',
    MarkText: 'border-inline-start:MarkText;',
    Menu: 'border-inline-start:Menu;',
    MenuText: 'border-inline-start:MenuText;',
    Scrollbar: 'border-inline-start:Scrollbar;',
    SelectedItem: 'border-inline-start:SelectedItem;',
    SelectedItemText: 'border-inline-start:SelectedItemText;',
    ThreeDDarkShadow: 'border-inline-start:ThreeDDarkShadow;',
    ThreeDFace: 'border-inline-start:ThreeDFace;',
    ThreeDHighlight: 'border-inline-start:ThreeDHighlight;',
    ThreeDLightShadow: 'border-inline-start:ThreeDLightShadow;',
    ThreeDShadow: 'border-inline-start:ThreeDShadow;',
    VisitedText: 'border-inline-start:VisitedText;',
    Window: 'border-inline-start:Window;',
    WindowFrame: 'border-inline-start:WindowFrame;',
    WindowText: 'border-inline-start:WindowText;',
    aliceblue: 'border-inline-start:aliceblue;',
    antiquewhite: 'border-inline-start:antiquewhite;',
    aqua: 'border-inline-start:aqua;',
    aquamarine: 'border-inline-start:aquamarine;',
    azure: 'border-inline-start:azure;',
    beige: 'border-inline-start:beige;',
    bisque: 'border-inline-start:bisque;',
    black: 'border-inline-start:black;',
    blanchedalmond: 'border-inline-start:blanchedalmond;',
    blue: 'border-inline-start:blue;',
    blueviolet: 'border-inline-start:blueviolet;',
    brown: 'border-inline-start:brown;',
    burlywood: 'border-inline-start:burlywood;',
    cadetblue: 'border-inline-start:cadetblue;',
    chartreuse: 'border-inline-start:chartreuse;',
    chocolate: 'border-inline-start:chocolate;',
    coral: 'border-inline-start:coral;',
    cornflowerblue: 'border-inline-start:cornflowerblue;',
    cornsilk: 'border-inline-start:cornsilk;',
    crimson: 'border-inline-start:crimson;',
    currentColor: 'border-inline-start:currentColor;',
    cyan: 'border-inline-start:cyan;',
    darkblue: 'border-inline-start:darkblue;',
    darkcyan: 'border-inline-start:darkcyan;',
    darkgoldenrod: 'border-inline-start:darkgoldenrod;',
    darkgray: 'border-inline-start:darkgray;',
    darkgreen: 'border-inline-start:darkgreen;',
    darkgrey: 'border-inline-start:darkgrey;',
    darkkhaki: 'border-inline-start:darkkhaki;',
    darkmagenta: 'border-inline-start:darkmagenta;',
    darkolivegreen: 'border-inline-start:darkolivegreen;',
    darkorange: 'border-inline-start:darkorange;',
    darkorchid: 'border-inline-start:darkorchid;',
    darkred: 'border-inline-start:darkred;',
    darksalmon: 'border-inline-start:darksalmon;',
    darkseagreen: 'border-inline-start:darkseagreen;',
    darkslateblue: 'border-inline-start:darkslateblue;',
    darkslategray: 'border-inline-start:darkslategray;',
    darkslategrey: 'border-inline-start:darkslategrey;',
    darkturquoise: 'border-inline-start:darkturquoise;',
    darkviolet: 'border-inline-start:darkviolet;',
    dashed: 'border-inline-start:dashed;',
    deeppink: 'border-inline-start:deeppink;',
    deepskyblue: 'border-inline-start:deepskyblue;',
    dimgray: 'border-inline-start:dimgray;',
    dimgrey: 'border-inline-start:dimgrey;',
    dodgerblue: 'border-inline-start:dodgerblue;',
    dotted: 'border-inline-start:dotted;',
    double: 'border-inline-start:double;',
    firebrick: 'border-inline-start:firebrick;',
    floralwhite: 'border-inline-start:floralwhite;',
    forestgreen: 'border-inline-start:forestgreen;',
    fuchsia: 'border-inline-start:fuchsia;',
    gainsboro: 'border-inline-start:gainsboro;',
    ghostwhite: 'border-inline-start:ghostwhite;',
    gold: 'border-inline-start:gold;',
    goldenrod: 'border-inline-start:goldenrod;',
    gray: 'border-inline-start:gray;',
    green: 'border-inline-start:green;',
    greenyellow: 'border-inline-start:greenyellow;',
    grey: 'border-inline-start:grey;',
    groove: 'border-inline-start:groove;',
    hidden: 'border-inline-start:hidden;',
    honeydew: 'border-inline-start:honeydew;',
    hotpink: 'border-inline-start:hotpink;',
    indianred: 'border-inline-start:indianred;',
    indigo: 'border-inline-start:indigo;',
    inherit: 'border-inline-start:inherit;',
    initial: 'border-inline-start:initial;',
    inset: 'border-inline-start:inset;',
    ivory: 'border-inline-start:ivory;',
    khaki: 'border-inline-start:khaki;',
    lavender: 'border-inline-start:lavender;',
    lavenderblush: 'border-inline-start:lavenderblush;',
    lawngreen: 'border-inline-start:lawngreen;',
    lemonchiffon: 'border-inline-start:lemonchiffon;',
    lightblue: 'border-inline-start:lightblue;',
    lightcoral: 'border-inline-start:lightcoral;',
    lightcyan: 'border-inline-start:lightcyan;',
    lightgoldenrodyellow: 'border-inline-start:lightgoldenrodyellow;',
    lightgray: 'border-inline-start:lightgray;',
    lightgreen: 'border-inline-start:lightgreen;',
    lightgrey: 'border-inline-start:lightgrey;',
    lightpink: 'border-inline-start:lightpink;',
    lightsalmon: 'border-inline-start:lightsalmon;',
    lightseagreen: 'border-inline-start:lightseagreen;',
    lightskyblue: 'border-inline-start:lightskyblue;',
    lightslategray: 'border-inline-start:lightslategray;',
    lightslategrey: 'border-inline-start:lightslategrey;',
    lightsteelblue: 'border-inline-start:lightsteelblue;',
    lightyellow: 'border-inline-start:lightyellow;',
    lime: 'border-inline-start:lime;',
    limegreen: 'border-inline-start:limegreen;',
    linen: 'border-inline-start:linen;',
    magenta: 'border-inline-start:magenta;',
    maroon: 'border-inline-start:maroon;',
    medium: 'border-inline-start:medium;',
    mediumaquamarine: 'border-inline-start:mediumaquamarine;',
    mediumblue: 'border-inline-start:mediumblue;',
    mediumorchid: 'border-inline-start:mediumorchid;',
    mediumpurple: 'border-inline-start:mediumpurple;',
    mediumseagreen: 'border-inline-start:mediumseagreen;',
    mediumslateblue: 'border-inline-start:mediumslateblue;',
    mediumspringgreen: 'border-inline-start:mediumspringgreen;',
    mediumturquoise: 'border-inline-start:mediumturquoise;',
    mediumvioletred: 'border-inline-start:mediumvioletred;',
    midnightblue: 'border-inline-start:midnightblue;',
    mintcream: 'border-inline-start:mintcream;',
    mistyrose: 'border-inline-start:mistyrose;',
    moccasin: 'border-inline-start:moccasin;',
    navajowhite: 'border-inline-start:navajowhite;',
    navy: 'border-inline-start:navy;',
    none: 'border-inline-start:none;',
    oldlace: 'border-inline-start:oldlace;',
    olive: 'border-inline-start:olive;',
    olivedrab: 'border-inline-start:olivedrab;',
    orange: 'border-inline-start:orange;',
    orangered: 'border-inline-start:orangered;',
    orchid: 'border-inline-start:orchid;',
    outset: 'border-inline-start:outset;',
    palegoldenrod: 'border-inline-start:palegoldenrod;',
    palegreen: 'border-inline-start:palegreen;',
    paleturquoise: 'border-inline-start:paleturquoise;',
    palevioletred: 'border-inline-start:palevioletred;',
    papayawhip: 'border-inline-start:papayawhip;',
    peachpuff: 'border-inline-start:peachpuff;',
    peru: 'border-inline-start:peru;',
    pink: 'border-inline-start:pink;',
    plum: 'border-inline-start:plum;',
    powderblue: 'border-inline-start:powderblue;',
    purple: 'border-inline-start:purple;',
    rebeccapurple: 'border-inline-start:rebeccapurple;',
    red: 'border-inline-start:red;',
    revert: 'border-inline-start:revert;',
    revertLayer: 'border-inline-start:revert-layer;',
    ridge: 'border-inline-start:ridge;',
    rosybrown: 'border-inline-start:rosybrown;',
    royalblue: 'border-inline-start:royalblue;',
    saddlebrown: 'border-inline-start:saddlebrown;',
    salmon: 'border-inline-start:salmon;',
    sandybrown: 'border-inline-start:sandybrown;',
    seagreen: 'border-inline-start:seagreen;',
    seashell: 'border-inline-start:seashell;',
    sienna: 'border-inline-start:sienna;',
    silver: 'border-inline-start:silver;',
    skyblue: 'border-inline-start:skyblue;',
    slateblue: 'border-inline-start:slateblue;',
    slategray: 'border-inline-start:slategray;',
    slategrey: 'border-inline-start:slategrey;',
    snow: 'border-inline-start:snow;',
    solid: 'border-inline-start:solid;',
    springgreen: 'border-inline-start:springgreen;',
    steelblue: 'border-inline-start:steelblue;',
    tan: 'border-inline-start:tan;',
    teal: 'border-inline-start:teal;',
    thick: 'border-inline-start:thick;',
    thin: 'border-inline-start:thin;',
    thistle: 'border-inline-start:thistle;',
    tomato: 'border-inline-start:tomato;',
    transparent: 'border-inline-start:transparent;',
    turquoise: 'border-inline-start:turquoise;',
    unset: 'border-inline-start:unset;',
    violet: 'border-inline-start:violet;',
    wheat: 'border-inline-start:wheat;',
    white: 'border-inline-start:white;',
    whitesmoke: 'border-inline-start:whitesmoke;',
    yellow: 'border-inline-start:yellow;',
    yellowgreen: 'border-inline-start:yellowgreen;',
  } as const;
}

type BorderInlineStartCssKeywords = Readonly<ReturnType<typeof borderInlineStartKeywords>>;
export interface BorderInlineStartCss extends BorderInlineStartCssKeywords {}
/** CSS 属性 border-inline-start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
 */
export class BorderInlineStartCss extends LengthCssProperty<Property.BorderInlineStart> {
  constructor() {
    super('border-inline-start');
    initializeBorderInlineStartCss();
  }
}
let borderInlineStartReady = false;
function initializeBorderInlineStartCss(): void {
  if (borderInlineStartReady) return;
  Object.assign(BorderInlineStartCss.prototype, borderInlineStartKeywords());
  Object.freeze(BorderInlineStartCss.prototype);
  borderInlineStartReady = true;
}

function borderInlineStartColorKeywords() {
  return {
    AccentColor: 'border-inline-start-color:AccentColor;',
    AccentColorText: 'border-inline-start-color:AccentColorText;',
    ActiveBorder: 'border-inline-start-color:ActiveBorder;',
    ActiveCaption: 'border-inline-start-color:ActiveCaption;',
    ActiveText: 'border-inline-start-color:ActiveText;',
    AppWorkspace: 'border-inline-start-color:AppWorkspace;',
    Background: 'border-inline-start-color:Background;',
    ButtonBorder: 'border-inline-start-color:ButtonBorder;',
    ButtonFace: 'border-inline-start-color:ButtonFace;',
    ButtonHighlight: 'border-inline-start-color:ButtonHighlight;',
    ButtonShadow: 'border-inline-start-color:ButtonShadow;',
    ButtonText: 'border-inline-start-color:ButtonText;',
    Canvas: 'border-inline-start-color:Canvas;',
    CanvasText: 'border-inline-start-color:CanvasText;',
    CaptionText: 'border-inline-start-color:CaptionText;',
    Field: 'border-inline-start-color:Field;',
    FieldText: 'border-inline-start-color:FieldText;',
    GrayText: 'border-inline-start-color:GrayText;',
    Highlight: 'border-inline-start-color:Highlight;',
    HighlightText: 'border-inline-start-color:HighlightText;',
    InactiveBorder: 'border-inline-start-color:InactiveBorder;',
    InactiveCaption: 'border-inline-start-color:InactiveCaption;',
    InactiveCaptionText: 'border-inline-start-color:InactiveCaptionText;',
    InfoBackground: 'border-inline-start-color:InfoBackground;',
    InfoText: 'border-inline-start-color:InfoText;',
    LinkText: 'border-inline-start-color:LinkText;',
    Mark: 'border-inline-start-color:Mark;',
    MarkText: 'border-inline-start-color:MarkText;',
    Menu: 'border-inline-start-color:Menu;',
    MenuText: 'border-inline-start-color:MenuText;',
    Scrollbar: 'border-inline-start-color:Scrollbar;',
    SelectedItem: 'border-inline-start-color:SelectedItem;',
    SelectedItemText: 'border-inline-start-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-inline-start-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-inline-start-color:ThreeDFace;',
    ThreeDHighlight: 'border-inline-start-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-inline-start-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-inline-start-color:ThreeDShadow;',
    VisitedText: 'border-inline-start-color:VisitedText;',
    Window: 'border-inline-start-color:Window;',
    WindowFrame: 'border-inline-start-color:WindowFrame;',
    WindowText: 'border-inline-start-color:WindowText;',
    aliceblue: 'border-inline-start-color:aliceblue;',
    antiquewhite: 'border-inline-start-color:antiquewhite;',
    aqua: 'border-inline-start-color:aqua;',
    aquamarine: 'border-inline-start-color:aquamarine;',
    azure: 'border-inline-start-color:azure;',
    beige: 'border-inline-start-color:beige;',
    bisque: 'border-inline-start-color:bisque;',
    black: 'border-inline-start-color:black;',
    blanchedalmond: 'border-inline-start-color:blanchedalmond;',
    blue: 'border-inline-start-color:blue;',
    blueviolet: 'border-inline-start-color:blueviolet;',
    brown: 'border-inline-start-color:brown;',
    burlywood: 'border-inline-start-color:burlywood;',
    cadetblue: 'border-inline-start-color:cadetblue;',
    chartreuse: 'border-inline-start-color:chartreuse;',
    chocolate: 'border-inline-start-color:chocolate;',
    coral: 'border-inline-start-color:coral;',
    cornflowerblue: 'border-inline-start-color:cornflowerblue;',
    cornsilk: 'border-inline-start-color:cornsilk;',
    crimson: 'border-inline-start-color:crimson;',
    currentColor: 'border-inline-start-color:currentColor;',
    cyan: 'border-inline-start-color:cyan;',
    darkblue: 'border-inline-start-color:darkblue;',
    darkcyan: 'border-inline-start-color:darkcyan;',
    darkgoldenrod: 'border-inline-start-color:darkgoldenrod;',
    darkgray: 'border-inline-start-color:darkgray;',
    darkgreen: 'border-inline-start-color:darkgreen;',
    darkgrey: 'border-inline-start-color:darkgrey;',
    darkkhaki: 'border-inline-start-color:darkkhaki;',
    darkmagenta: 'border-inline-start-color:darkmagenta;',
    darkolivegreen: 'border-inline-start-color:darkolivegreen;',
    darkorange: 'border-inline-start-color:darkorange;',
    darkorchid: 'border-inline-start-color:darkorchid;',
    darkred: 'border-inline-start-color:darkred;',
    darksalmon: 'border-inline-start-color:darksalmon;',
    darkseagreen: 'border-inline-start-color:darkseagreen;',
    darkslateblue: 'border-inline-start-color:darkslateblue;',
    darkslategray: 'border-inline-start-color:darkslategray;',
    darkslategrey: 'border-inline-start-color:darkslategrey;',
    darkturquoise: 'border-inline-start-color:darkturquoise;',
    darkviolet: 'border-inline-start-color:darkviolet;',
    deeppink: 'border-inline-start-color:deeppink;',
    deepskyblue: 'border-inline-start-color:deepskyblue;',
    dimgray: 'border-inline-start-color:dimgray;',
    dimgrey: 'border-inline-start-color:dimgrey;',
    dodgerblue: 'border-inline-start-color:dodgerblue;',
    firebrick: 'border-inline-start-color:firebrick;',
    floralwhite: 'border-inline-start-color:floralwhite;',
    forestgreen: 'border-inline-start-color:forestgreen;',
    fuchsia: 'border-inline-start-color:fuchsia;',
    gainsboro: 'border-inline-start-color:gainsboro;',
    ghostwhite: 'border-inline-start-color:ghostwhite;',
    gold: 'border-inline-start-color:gold;',
    goldenrod: 'border-inline-start-color:goldenrod;',
    gray: 'border-inline-start-color:gray;',
    green: 'border-inline-start-color:green;',
    greenyellow: 'border-inline-start-color:greenyellow;',
    grey: 'border-inline-start-color:grey;',
    honeydew: 'border-inline-start-color:honeydew;',
    hotpink: 'border-inline-start-color:hotpink;',
    indianred: 'border-inline-start-color:indianred;',
    indigo: 'border-inline-start-color:indigo;',
    inherit: 'border-inline-start-color:inherit;',
    initial: 'border-inline-start-color:initial;',
    ivory: 'border-inline-start-color:ivory;',
    khaki: 'border-inline-start-color:khaki;',
    lavender: 'border-inline-start-color:lavender;',
    lavenderblush: 'border-inline-start-color:lavenderblush;',
    lawngreen: 'border-inline-start-color:lawngreen;',
    lemonchiffon: 'border-inline-start-color:lemonchiffon;',
    lightblue: 'border-inline-start-color:lightblue;',
    lightcoral: 'border-inline-start-color:lightcoral;',
    lightcyan: 'border-inline-start-color:lightcyan;',
    lightgoldenrodyellow: 'border-inline-start-color:lightgoldenrodyellow;',
    lightgray: 'border-inline-start-color:lightgray;',
    lightgreen: 'border-inline-start-color:lightgreen;',
    lightgrey: 'border-inline-start-color:lightgrey;',
    lightpink: 'border-inline-start-color:lightpink;',
    lightsalmon: 'border-inline-start-color:lightsalmon;',
    lightseagreen: 'border-inline-start-color:lightseagreen;',
    lightskyblue: 'border-inline-start-color:lightskyblue;',
    lightslategray: 'border-inline-start-color:lightslategray;',
    lightslategrey: 'border-inline-start-color:lightslategrey;',
    lightsteelblue: 'border-inline-start-color:lightsteelblue;',
    lightyellow: 'border-inline-start-color:lightyellow;',
    lime: 'border-inline-start-color:lime;',
    limegreen: 'border-inline-start-color:limegreen;',
    linen: 'border-inline-start-color:linen;',
    magenta: 'border-inline-start-color:magenta;',
    maroon: 'border-inline-start-color:maroon;',
    mediumaquamarine: 'border-inline-start-color:mediumaquamarine;',
    mediumblue: 'border-inline-start-color:mediumblue;',
    mediumorchid: 'border-inline-start-color:mediumorchid;',
    mediumpurple: 'border-inline-start-color:mediumpurple;',
    mediumseagreen: 'border-inline-start-color:mediumseagreen;',
    mediumslateblue: 'border-inline-start-color:mediumslateblue;',
    mediumspringgreen: 'border-inline-start-color:mediumspringgreen;',
    mediumturquoise: 'border-inline-start-color:mediumturquoise;',
    mediumvioletred: 'border-inline-start-color:mediumvioletred;',
    midnightblue: 'border-inline-start-color:midnightblue;',
    mintcream: 'border-inline-start-color:mintcream;',
    mistyrose: 'border-inline-start-color:mistyrose;',
    moccasin: 'border-inline-start-color:moccasin;',
    navajowhite: 'border-inline-start-color:navajowhite;',
    navy: 'border-inline-start-color:navy;',
    oldlace: 'border-inline-start-color:oldlace;',
    olive: 'border-inline-start-color:olive;',
    olivedrab: 'border-inline-start-color:olivedrab;',
    orange: 'border-inline-start-color:orange;',
    orangered: 'border-inline-start-color:orangered;',
    orchid: 'border-inline-start-color:orchid;',
    palegoldenrod: 'border-inline-start-color:palegoldenrod;',
    palegreen: 'border-inline-start-color:palegreen;',
    paleturquoise: 'border-inline-start-color:paleturquoise;',
    palevioletred: 'border-inline-start-color:palevioletred;',
    papayawhip: 'border-inline-start-color:papayawhip;',
    peachpuff: 'border-inline-start-color:peachpuff;',
    peru: 'border-inline-start-color:peru;',
    pink: 'border-inline-start-color:pink;',
    plum: 'border-inline-start-color:plum;',
    powderblue: 'border-inline-start-color:powderblue;',
    purple: 'border-inline-start-color:purple;',
    rebeccapurple: 'border-inline-start-color:rebeccapurple;',
    red: 'border-inline-start-color:red;',
    revert: 'border-inline-start-color:revert;',
    revertLayer: 'border-inline-start-color:revert-layer;',
    rosybrown: 'border-inline-start-color:rosybrown;',
    royalblue: 'border-inline-start-color:royalblue;',
    saddlebrown: 'border-inline-start-color:saddlebrown;',
    salmon: 'border-inline-start-color:salmon;',
    sandybrown: 'border-inline-start-color:sandybrown;',
    seagreen: 'border-inline-start-color:seagreen;',
    seashell: 'border-inline-start-color:seashell;',
    sienna: 'border-inline-start-color:sienna;',
    silver: 'border-inline-start-color:silver;',
    skyblue: 'border-inline-start-color:skyblue;',
    slateblue: 'border-inline-start-color:slateblue;',
    slategray: 'border-inline-start-color:slategray;',
    slategrey: 'border-inline-start-color:slategrey;',
    snow: 'border-inline-start-color:snow;',
    springgreen: 'border-inline-start-color:springgreen;',
    steelblue: 'border-inline-start-color:steelblue;',
    tan: 'border-inline-start-color:tan;',
    teal: 'border-inline-start-color:teal;',
    thistle: 'border-inline-start-color:thistle;',
    tomato: 'border-inline-start-color:tomato;',
    transparent: 'border-inline-start-color:transparent;',
    turquoise: 'border-inline-start-color:turquoise;',
    unset: 'border-inline-start-color:unset;',
    violet: 'border-inline-start-color:violet;',
    wheat: 'border-inline-start-color:wheat;',
    white: 'border-inline-start-color:white;',
    whitesmoke: 'border-inline-start-color:whitesmoke;',
    yellow: 'border-inline-start-color:yellow;',
    yellowgreen: 'border-inline-start-color:yellowgreen;',
  } as const;
}

type BorderInlineStartColorCssKeywords = Readonly<
  ReturnType<typeof borderInlineStartColorKeywords>
>;
export interface BorderInlineStartColorCss extends BorderInlineStartColorCssKeywords {}
/** CSS 属性 border-inline-start-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
 */
export class BorderInlineStartColorCss extends CssProperty<Property.BorderInlineStartColor> {
  constructor() {
    super('border-inline-start-color');
    initializeBorderInlineStartColorCss();
  }
}
let borderInlineStartColorReady = false;
function initializeBorderInlineStartColorCss(): void {
  if (borderInlineStartColorReady) return;
  Object.assign(BorderInlineStartColorCss.prototype, borderInlineStartColorKeywords());
  Object.freeze(BorderInlineStartColorCss.prototype);
  borderInlineStartColorReady = true;
}

function borderInlineStartStyleKeywords() {
  return {
    dashed: 'border-inline-start-style:dashed;',
    dotted: 'border-inline-start-style:dotted;',
    double: 'border-inline-start-style:double;',
    groove: 'border-inline-start-style:groove;',
    hidden: 'border-inline-start-style:hidden;',
    inherit: 'border-inline-start-style:inherit;',
    initial: 'border-inline-start-style:initial;',
    inset: 'border-inline-start-style:inset;',
    none: 'border-inline-start-style:none;',
    outset: 'border-inline-start-style:outset;',
    revert: 'border-inline-start-style:revert;',
    revertLayer: 'border-inline-start-style:revert-layer;',
    ridge: 'border-inline-start-style:ridge;',
    solid: 'border-inline-start-style:solid;',
    unset: 'border-inline-start-style:unset;',
  } as const;
}

type BorderInlineStartStyleCssKeywords = Readonly<
  ReturnType<typeof borderInlineStartStyleKeywords>
>;
export interface BorderInlineStartStyleCss extends BorderInlineStartStyleCssKeywords {}
/** CSS 属性 border-inline-start-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
 */
export class BorderInlineStartStyleCss extends CssProperty<Property.BorderInlineStartStyle> {
  constructor() {
    super('border-inline-start-style');
    initializeBorderInlineStartStyleCss();
  }
}
let borderInlineStartStyleReady = false;
function initializeBorderInlineStartStyleCss(): void {
  if (borderInlineStartStyleReady) return;
  Object.assign(BorderInlineStartStyleCss.prototype, borderInlineStartStyleKeywords());
  Object.freeze(BorderInlineStartStyleCss.prototype);
  borderInlineStartStyleReady = true;
}

function borderInlineStartWidthKeywords() {
  return {
    inherit: 'border-inline-start-width:inherit;',
    initial: 'border-inline-start-width:initial;',
    medium: 'border-inline-start-width:medium;',
    revert: 'border-inline-start-width:revert;',
    revertLayer: 'border-inline-start-width:revert-layer;',
    thick: 'border-inline-start-width:thick;',
    thin: 'border-inline-start-width:thin;',
    unset: 'border-inline-start-width:unset;',
  } as const;
}

type BorderInlineStartWidthCssKeywords = Readonly<
  ReturnType<typeof borderInlineStartWidthKeywords>
>;
export interface BorderInlineStartWidthCss extends BorderInlineStartWidthCssKeywords {}
/** CSS 属性 border-inline-start-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
 */
export class BorderInlineStartWidthCss extends LengthCssProperty<Property.BorderInlineStartWidth> {
  constructor() {
    super('border-inline-start-width');
    initializeBorderInlineStartWidthCss();
  }
}
let borderInlineStartWidthReady = false;
function initializeBorderInlineStartWidthCss(): void {
  if (borderInlineStartWidthReady) return;
  Object.assign(BorderInlineStartWidthCss.prototype, borderInlineStartWidthKeywords());
  Object.freeze(BorderInlineStartWidthCss.prototype);
  borderInlineStartWidthReady = true;
}

function borderInlineStyleKeywords() {
  return {
    dashed: 'border-inline-style:dashed;',
    dotted: 'border-inline-style:dotted;',
    double: 'border-inline-style:double;',
    groove: 'border-inline-style:groove;',
    hidden: 'border-inline-style:hidden;',
    inherit: 'border-inline-style:inherit;',
    initial: 'border-inline-style:initial;',
    inset: 'border-inline-style:inset;',
    none: 'border-inline-style:none;',
    outset: 'border-inline-style:outset;',
    revert: 'border-inline-style:revert;',
    revertLayer: 'border-inline-style:revert-layer;',
    ridge: 'border-inline-style:ridge;',
    solid: 'border-inline-style:solid;',
    unset: 'border-inline-style:unset;',
  } as const;
}

type BorderInlineStyleCssKeywords = Readonly<ReturnType<typeof borderInlineStyleKeywords>>;
export interface BorderInlineStyleCss extends BorderInlineStyleCssKeywords {}
/** CSS 属性 border-inline-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
 */
export class BorderInlineStyleCss extends CssProperty<Property.BorderInlineStyle> {
  constructor() {
    super('border-inline-style');
    initializeBorderInlineStyleCss();
  }
}
let borderInlineStyleReady = false;
function initializeBorderInlineStyleCss(): void {
  if (borderInlineStyleReady) return;
  Object.assign(BorderInlineStyleCss.prototype, borderInlineStyleKeywords());
  Object.freeze(BorderInlineStyleCss.prototype);
  borderInlineStyleReady = true;
}

function borderInlineWidthKeywords() {
  return {
    inherit: 'border-inline-width:inherit;',
    initial: 'border-inline-width:initial;',
    medium: 'border-inline-width:medium;',
    revert: 'border-inline-width:revert;',
    revertLayer: 'border-inline-width:revert-layer;',
    thick: 'border-inline-width:thick;',
    thin: 'border-inline-width:thin;',
    unset: 'border-inline-width:unset;',
  } as const;
}

type BorderInlineWidthCssKeywords = Readonly<ReturnType<typeof borderInlineWidthKeywords>>;
export interface BorderInlineWidthCss extends BorderInlineWidthCssKeywords {}
/** CSS 属性 border-inline-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
 */
export class BorderInlineWidthCss extends LengthCssProperty<Property.BorderInlineWidth> {
  constructor() {
    super('border-inline-width');
    initializeBorderInlineWidthCss();
  }
}
let borderInlineWidthReady = false;
function initializeBorderInlineWidthCss(): void {
  if (borderInlineWidthReady) return;
  Object.assign(BorderInlineWidthCss.prototype, borderInlineWidthKeywords());
  Object.freeze(BorderInlineWidthCss.prototype);
  borderInlineWidthReady = true;
}

function borderLeftKeywords() {
  return {
    AccentColor: 'border-left:AccentColor;',
    AccentColorText: 'border-left:AccentColorText;',
    ActiveBorder: 'border-left:ActiveBorder;',
    ActiveCaption: 'border-left:ActiveCaption;',
    ActiveText: 'border-left:ActiveText;',
    AppWorkspace: 'border-left:AppWorkspace;',
    Background: 'border-left:Background;',
    ButtonBorder: 'border-left:ButtonBorder;',
    ButtonFace: 'border-left:ButtonFace;',
    ButtonHighlight: 'border-left:ButtonHighlight;',
    ButtonShadow: 'border-left:ButtonShadow;',
    ButtonText: 'border-left:ButtonText;',
    Canvas: 'border-left:Canvas;',
    CanvasText: 'border-left:CanvasText;',
    CaptionText: 'border-left:CaptionText;',
    Field: 'border-left:Field;',
    FieldText: 'border-left:FieldText;',
    GrayText: 'border-left:GrayText;',
    Highlight: 'border-left:Highlight;',
    HighlightText: 'border-left:HighlightText;',
    InactiveBorder: 'border-left:InactiveBorder;',
    InactiveCaption: 'border-left:InactiveCaption;',
    InactiveCaptionText: 'border-left:InactiveCaptionText;',
    InfoBackground: 'border-left:InfoBackground;',
    InfoText: 'border-left:InfoText;',
    LinkText: 'border-left:LinkText;',
    Mark: 'border-left:Mark;',
    MarkText: 'border-left:MarkText;',
    Menu: 'border-left:Menu;',
    MenuText: 'border-left:MenuText;',
    Scrollbar: 'border-left:Scrollbar;',
    SelectedItem: 'border-left:SelectedItem;',
    SelectedItemText: 'border-left:SelectedItemText;',
    ThreeDDarkShadow: 'border-left:ThreeDDarkShadow;',
    ThreeDFace: 'border-left:ThreeDFace;',
    ThreeDHighlight: 'border-left:ThreeDHighlight;',
    ThreeDLightShadow: 'border-left:ThreeDLightShadow;',
    ThreeDShadow: 'border-left:ThreeDShadow;',
    VisitedText: 'border-left:VisitedText;',
    Window: 'border-left:Window;',
    WindowFrame: 'border-left:WindowFrame;',
    WindowText: 'border-left:WindowText;',
    aliceblue: 'border-left:aliceblue;',
    antiquewhite: 'border-left:antiquewhite;',
    aqua: 'border-left:aqua;',
    aquamarine: 'border-left:aquamarine;',
    azure: 'border-left:azure;',
    beige: 'border-left:beige;',
    bisque: 'border-left:bisque;',
    black: 'border-left:black;',
    blanchedalmond: 'border-left:blanchedalmond;',
    blue: 'border-left:blue;',
    blueviolet: 'border-left:blueviolet;',
    brown: 'border-left:brown;',
    burlywood: 'border-left:burlywood;',
    cadetblue: 'border-left:cadetblue;',
    chartreuse: 'border-left:chartreuse;',
    chocolate: 'border-left:chocolate;',
    coral: 'border-left:coral;',
    cornflowerblue: 'border-left:cornflowerblue;',
    cornsilk: 'border-left:cornsilk;',
    crimson: 'border-left:crimson;',
    currentColor: 'border-left:currentColor;',
    cyan: 'border-left:cyan;',
    darkblue: 'border-left:darkblue;',
    darkcyan: 'border-left:darkcyan;',
    darkgoldenrod: 'border-left:darkgoldenrod;',
    darkgray: 'border-left:darkgray;',
    darkgreen: 'border-left:darkgreen;',
    darkgrey: 'border-left:darkgrey;',
    darkkhaki: 'border-left:darkkhaki;',
    darkmagenta: 'border-left:darkmagenta;',
    darkolivegreen: 'border-left:darkolivegreen;',
    darkorange: 'border-left:darkorange;',
    darkorchid: 'border-left:darkorchid;',
    darkred: 'border-left:darkred;',
    darksalmon: 'border-left:darksalmon;',
    darkseagreen: 'border-left:darkseagreen;',
    darkslateblue: 'border-left:darkslateblue;',
    darkslategray: 'border-left:darkslategray;',
    darkslategrey: 'border-left:darkslategrey;',
    darkturquoise: 'border-left:darkturquoise;',
    darkviolet: 'border-left:darkviolet;',
    dashed: 'border-left:dashed;',
    deeppink: 'border-left:deeppink;',
    deepskyblue: 'border-left:deepskyblue;',
    dimgray: 'border-left:dimgray;',
    dimgrey: 'border-left:dimgrey;',
    dodgerblue: 'border-left:dodgerblue;',
    dotted: 'border-left:dotted;',
    double: 'border-left:double;',
    firebrick: 'border-left:firebrick;',
    floralwhite: 'border-left:floralwhite;',
    forestgreen: 'border-left:forestgreen;',
    fuchsia: 'border-left:fuchsia;',
    gainsboro: 'border-left:gainsboro;',
    ghostwhite: 'border-left:ghostwhite;',
    gold: 'border-left:gold;',
    goldenrod: 'border-left:goldenrod;',
    gray: 'border-left:gray;',
    green: 'border-left:green;',
    greenyellow: 'border-left:greenyellow;',
    grey: 'border-left:grey;',
    groove: 'border-left:groove;',
    hidden: 'border-left:hidden;',
    honeydew: 'border-left:honeydew;',
    hotpink: 'border-left:hotpink;',
    indianred: 'border-left:indianred;',
    indigo: 'border-left:indigo;',
    inherit: 'border-left:inherit;',
    initial: 'border-left:initial;',
    inset: 'border-left:inset;',
    ivory: 'border-left:ivory;',
    khaki: 'border-left:khaki;',
    lavender: 'border-left:lavender;',
    lavenderblush: 'border-left:lavenderblush;',
    lawngreen: 'border-left:lawngreen;',
    lemonchiffon: 'border-left:lemonchiffon;',
    lightblue: 'border-left:lightblue;',
    lightcoral: 'border-left:lightcoral;',
    lightcyan: 'border-left:lightcyan;',
    lightgoldenrodyellow: 'border-left:lightgoldenrodyellow;',
    lightgray: 'border-left:lightgray;',
    lightgreen: 'border-left:lightgreen;',
    lightgrey: 'border-left:lightgrey;',
    lightpink: 'border-left:lightpink;',
    lightsalmon: 'border-left:lightsalmon;',
    lightseagreen: 'border-left:lightseagreen;',
    lightskyblue: 'border-left:lightskyblue;',
    lightslategray: 'border-left:lightslategray;',
    lightslategrey: 'border-left:lightslategrey;',
    lightsteelblue: 'border-left:lightsteelblue;',
    lightyellow: 'border-left:lightyellow;',
    lime: 'border-left:lime;',
    limegreen: 'border-left:limegreen;',
    linen: 'border-left:linen;',
    magenta: 'border-left:magenta;',
    maroon: 'border-left:maroon;',
    medium: 'border-left:medium;',
    mediumaquamarine: 'border-left:mediumaquamarine;',
    mediumblue: 'border-left:mediumblue;',
    mediumorchid: 'border-left:mediumorchid;',
    mediumpurple: 'border-left:mediumpurple;',
    mediumseagreen: 'border-left:mediumseagreen;',
    mediumslateblue: 'border-left:mediumslateblue;',
    mediumspringgreen: 'border-left:mediumspringgreen;',
    mediumturquoise: 'border-left:mediumturquoise;',
    mediumvioletred: 'border-left:mediumvioletred;',
    midnightblue: 'border-left:midnightblue;',
    mintcream: 'border-left:mintcream;',
    mistyrose: 'border-left:mistyrose;',
    moccasin: 'border-left:moccasin;',
    navajowhite: 'border-left:navajowhite;',
    navy: 'border-left:navy;',
    none: 'border-left:none;',
    oldlace: 'border-left:oldlace;',
    olive: 'border-left:olive;',
    olivedrab: 'border-left:olivedrab;',
    orange: 'border-left:orange;',
    orangered: 'border-left:orangered;',
    orchid: 'border-left:orchid;',
    outset: 'border-left:outset;',
    palegoldenrod: 'border-left:palegoldenrod;',
    palegreen: 'border-left:palegreen;',
    paleturquoise: 'border-left:paleturquoise;',
    palevioletred: 'border-left:palevioletred;',
    papayawhip: 'border-left:papayawhip;',
    peachpuff: 'border-left:peachpuff;',
    peru: 'border-left:peru;',
    pink: 'border-left:pink;',
    plum: 'border-left:plum;',
    powderblue: 'border-left:powderblue;',
    purple: 'border-left:purple;',
    rebeccapurple: 'border-left:rebeccapurple;',
    red: 'border-left:red;',
    revert: 'border-left:revert;',
    revertLayer: 'border-left:revert-layer;',
    ridge: 'border-left:ridge;',
    rosybrown: 'border-left:rosybrown;',
    royalblue: 'border-left:royalblue;',
    saddlebrown: 'border-left:saddlebrown;',
    salmon: 'border-left:salmon;',
    sandybrown: 'border-left:sandybrown;',
    seagreen: 'border-left:seagreen;',
    seashell: 'border-left:seashell;',
    sienna: 'border-left:sienna;',
    silver: 'border-left:silver;',
    skyblue: 'border-left:skyblue;',
    slateblue: 'border-left:slateblue;',
    slategray: 'border-left:slategray;',
    slategrey: 'border-left:slategrey;',
    snow: 'border-left:snow;',
    solid: 'border-left:solid;',
    springgreen: 'border-left:springgreen;',
    steelblue: 'border-left:steelblue;',
    tan: 'border-left:tan;',
    teal: 'border-left:teal;',
    thick: 'border-left:thick;',
    thin: 'border-left:thin;',
    thistle: 'border-left:thistle;',
    tomato: 'border-left:tomato;',
    transparent: 'border-left:transparent;',
    turquoise: 'border-left:turquoise;',
    unset: 'border-left:unset;',
    violet: 'border-left:violet;',
    wheat: 'border-left:wheat;',
    white: 'border-left:white;',
    whitesmoke: 'border-left:whitesmoke;',
    yellow: 'border-left:yellow;',
    yellowgreen: 'border-left:yellowgreen;',
  } as const;
}

type BorderLeftCssKeywords = Readonly<ReturnType<typeof borderLeftKeywords>>;
export interface BorderLeftCss extends BorderLeftCssKeywords {}
/** CSS 属性 border-left。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
 */
export class BorderLeftCss extends LengthCssProperty<Property.BorderLeft> {
  constructor() {
    super('border-left');
    initializeBorderLeftCss();
  }
}
let borderLeftReady = false;
function initializeBorderLeftCss(): void {
  if (borderLeftReady) return;
  Object.assign(BorderLeftCss.prototype, borderLeftKeywords());
  Object.freeze(BorderLeftCss.prototype);
  borderLeftReady = true;
}

function borderLeftColorKeywords() {
  return {
    AccentColor: 'border-left-color:AccentColor;',
    AccentColorText: 'border-left-color:AccentColorText;',
    ActiveBorder: 'border-left-color:ActiveBorder;',
    ActiveCaption: 'border-left-color:ActiveCaption;',
    ActiveText: 'border-left-color:ActiveText;',
    AppWorkspace: 'border-left-color:AppWorkspace;',
    Background: 'border-left-color:Background;',
    ButtonBorder: 'border-left-color:ButtonBorder;',
    ButtonFace: 'border-left-color:ButtonFace;',
    ButtonHighlight: 'border-left-color:ButtonHighlight;',
    ButtonShadow: 'border-left-color:ButtonShadow;',
    ButtonText: 'border-left-color:ButtonText;',
    Canvas: 'border-left-color:Canvas;',
    CanvasText: 'border-left-color:CanvasText;',
    CaptionText: 'border-left-color:CaptionText;',
    Field: 'border-left-color:Field;',
    FieldText: 'border-left-color:FieldText;',
    GrayText: 'border-left-color:GrayText;',
    Highlight: 'border-left-color:Highlight;',
    HighlightText: 'border-left-color:HighlightText;',
    InactiveBorder: 'border-left-color:InactiveBorder;',
    InactiveCaption: 'border-left-color:InactiveCaption;',
    InactiveCaptionText: 'border-left-color:InactiveCaptionText;',
    InfoBackground: 'border-left-color:InfoBackground;',
    InfoText: 'border-left-color:InfoText;',
    LinkText: 'border-left-color:LinkText;',
    Mark: 'border-left-color:Mark;',
    MarkText: 'border-left-color:MarkText;',
    Menu: 'border-left-color:Menu;',
    MenuText: 'border-left-color:MenuText;',
    Scrollbar: 'border-left-color:Scrollbar;',
    SelectedItem: 'border-left-color:SelectedItem;',
    SelectedItemText: 'border-left-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-left-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-left-color:ThreeDFace;',
    ThreeDHighlight: 'border-left-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-left-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-left-color:ThreeDShadow;',
    VisitedText: 'border-left-color:VisitedText;',
    Window: 'border-left-color:Window;',
    WindowFrame: 'border-left-color:WindowFrame;',
    WindowText: 'border-left-color:WindowText;',
    aliceblue: 'border-left-color:aliceblue;',
    antiquewhite: 'border-left-color:antiquewhite;',
    aqua: 'border-left-color:aqua;',
    aquamarine: 'border-left-color:aquamarine;',
    azure: 'border-left-color:azure;',
    beige: 'border-left-color:beige;',
    bisque: 'border-left-color:bisque;',
    black: 'border-left-color:black;',
    blanchedalmond: 'border-left-color:blanchedalmond;',
    blue: 'border-left-color:blue;',
    blueviolet: 'border-left-color:blueviolet;',
    brown: 'border-left-color:brown;',
    burlywood: 'border-left-color:burlywood;',
    cadetblue: 'border-left-color:cadetblue;',
    chartreuse: 'border-left-color:chartreuse;',
    chocolate: 'border-left-color:chocolate;',
    coral: 'border-left-color:coral;',
    cornflowerblue: 'border-left-color:cornflowerblue;',
    cornsilk: 'border-left-color:cornsilk;',
    crimson: 'border-left-color:crimson;',
    currentColor: 'border-left-color:currentColor;',
    cyan: 'border-left-color:cyan;',
    darkblue: 'border-left-color:darkblue;',
    darkcyan: 'border-left-color:darkcyan;',
    darkgoldenrod: 'border-left-color:darkgoldenrod;',
    darkgray: 'border-left-color:darkgray;',
    darkgreen: 'border-left-color:darkgreen;',
    darkgrey: 'border-left-color:darkgrey;',
    darkkhaki: 'border-left-color:darkkhaki;',
    darkmagenta: 'border-left-color:darkmagenta;',
    darkolivegreen: 'border-left-color:darkolivegreen;',
    darkorange: 'border-left-color:darkorange;',
    darkorchid: 'border-left-color:darkorchid;',
    darkred: 'border-left-color:darkred;',
    darksalmon: 'border-left-color:darksalmon;',
    darkseagreen: 'border-left-color:darkseagreen;',
    darkslateblue: 'border-left-color:darkslateblue;',
    darkslategray: 'border-left-color:darkslategray;',
    darkslategrey: 'border-left-color:darkslategrey;',
    darkturquoise: 'border-left-color:darkturquoise;',
    darkviolet: 'border-left-color:darkviolet;',
    deeppink: 'border-left-color:deeppink;',
    deepskyblue: 'border-left-color:deepskyblue;',
    dimgray: 'border-left-color:dimgray;',
    dimgrey: 'border-left-color:dimgrey;',
    dodgerblue: 'border-left-color:dodgerblue;',
    firebrick: 'border-left-color:firebrick;',
    floralwhite: 'border-left-color:floralwhite;',
    forestgreen: 'border-left-color:forestgreen;',
    fuchsia: 'border-left-color:fuchsia;',
    gainsboro: 'border-left-color:gainsboro;',
    ghostwhite: 'border-left-color:ghostwhite;',
    gold: 'border-left-color:gold;',
    goldenrod: 'border-left-color:goldenrod;',
    gray: 'border-left-color:gray;',
    green: 'border-left-color:green;',
    greenyellow: 'border-left-color:greenyellow;',
    grey: 'border-left-color:grey;',
    honeydew: 'border-left-color:honeydew;',
    hotpink: 'border-left-color:hotpink;',
    indianred: 'border-left-color:indianred;',
    indigo: 'border-left-color:indigo;',
    inherit: 'border-left-color:inherit;',
    initial: 'border-left-color:initial;',
    ivory: 'border-left-color:ivory;',
    khaki: 'border-left-color:khaki;',
    lavender: 'border-left-color:lavender;',
    lavenderblush: 'border-left-color:lavenderblush;',
    lawngreen: 'border-left-color:lawngreen;',
    lemonchiffon: 'border-left-color:lemonchiffon;',
    lightblue: 'border-left-color:lightblue;',
    lightcoral: 'border-left-color:lightcoral;',
    lightcyan: 'border-left-color:lightcyan;',
    lightgoldenrodyellow: 'border-left-color:lightgoldenrodyellow;',
    lightgray: 'border-left-color:lightgray;',
    lightgreen: 'border-left-color:lightgreen;',
    lightgrey: 'border-left-color:lightgrey;',
    lightpink: 'border-left-color:lightpink;',
    lightsalmon: 'border-left-color:lightsalmon;',
    lightseagreen: 'border-left-color:lightseagreen;',
    lightskyblue: 'border-left-color:lightskyblue;',
    lightslategray: 'border-left-color:lightslategray;',
    lightslategrey: 'border-left-color:lightslategrey;',
    lightsteelblue: 'border-left-color:lightsteelblue;',
    lightyellow: 'border-left-color:lightyellow;',
    lime: 'border-left-color:lime;',
    limegreen: 'border-left-color:limegreen;',
    linen: 'border-left-color:linen;',
    magenta: 'border-left-color:magenta;',
    maroon: 'border-left-color:maroon;',
    mediumaquamarine: 'border-left-color:mediumaquamarine;',
    mediumblue: 'border-left-color:mediumblue;',
    mediumorchid: 'border-left-color:mediumorchid;',
    mediumpurple: 'border-left-color:mediumpurple;',
    mediumseagreen: 'border-left-color:mediumseagreen;',
    mediumslateblue: 'border-left-color:mediumslateblue;',
    mediumspringgreen: 'border-left-color:mediumspringgreen;',
    mediumturquoise: 'border-left-color:mediumturquoise;',
    mediumvioletred: 'border-left-color:mediumvioletred;',
    midnightblue: 'border-left-color:midnightblue;',
    mintcream: 'border-left-color:mintcream;',
    mistyrose: 'border-left-color:mistyrose;',
    moccasin: 'border-left-color:moccasin;',
    navajowhite: 'border-left-color:navajowhite;',
    navy: 'border-left-color:navy;',
    oldlace: 'border-left-color:oldlace;',
    olive: 'border-left-color:olive;',
    olivedrab: 'border-left-color:olivedrab;',
    orange: 'border-left-color:orange;',
    orangered: 'border-left-color:orangered;',
    orchid: 'border-left-color:orchid;',
    palegoldenrod: 'border-left-color:palegoldenrod;',
    palegreen: 'border-left-color:palegreen;',
    paleturquoise: 'border-left-color:paleturquoise;',
    palevioletred: 'border-left-color:palevioletred;',
    papayawhip: 'border-left-color:papayawhip;',
    peachpuff: 'border-left-color:peachpuff;',
    peru: 'border-left-color:peru;',
    pink: 'border-left-color:pink;',
    plum: 'border-left-color:plum;',
    powderblue: 'border-left-color:powderblue;',
    purple: 'border-left-color:purple;',
    rebeccapurple: 'border-left-color:rebeccapurple;',
    red: 'border-left-color:red;',
    revert: 'border-left-color:revert;',
    revertLayer: 'border-left-color:revert-layer;',
    rosybrown: 'border-left-color:rosybrown;',
    royalblue: 'border-left-color:royalblue;',
    saddlebrown: 'border-left-color:saddlebrown;',
    salmon: 'border-left-color:salmon;',
    sandybrown: 'border-left-color:sandybrown;',
    seagreen: 'border-left-color:seagreen;',
    seashell: 'border-left-color:seashell;',
    sienna: 'border-left-color:sienna;',
    silver: 'border-left-color:silver;',
    skyblue: 'border-left-color:skyblue;',
    slateblue: 'border-left-color:slateblue;',
    slategray: 'border-left-color:slategray;',
    slategrey: 'border-left-color:slategrey;',
    snow: 'border-left-color:snow;',
    springgreen: 'border-left-color:springgreen;',
    steelblue: 'border-left-color:steelblue;',
    tan: 'border-left-color:tan;',
    teal: 'border-left-color:teal;',
    thistle: 'border-left-color:thistle;',
    tomato: 'border-left-color:tomato;',
    transparent: 'border-left-color:transparent;',
    turquoise: 'border-left-color:turquoise;',
    unset: 'border-left-color:unset;',
    violet: 'border-left-color:violet;',
    wheat: 'border-left-color:wheat;',
    white: 'border-left-color:white;',
    whitesmoke: 'border-left-color:whitesmoke;',
    yellow: 'border-left-color:yellow;',
    yellowgreen: 'border-left-color:yellowgreen;',
  } as const;
}

type BorderLeftColorCssKeywords = Readonly<ReturnType<typeof borderLeftColorKeywords>>;
export interface BorderLeftColorCss extends BorderLeftColorCssKeywords {}
/** CSS 属性 border-left-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
 */
export class BorderLeftColorCss extends CssProperty<Property.BorderLeftColor> {
  constructor() {
    super('border-left-color');
    initializeBorderLeftColorCss();
  }
}
let borderLeftColorReady = false;
function initializeBorderLeftColorCss(): void {
  if (borderLeftColorReady) return;
  Object.assign(BorderLeftColorCss.prototype, borderLeftColorKeywords());
  Object.freeze(BorderLeftColorCss.prototype);
  borderLeftColorReady = true;
}

function borderLeftStyleKeywords() {
  return {
    dashed: 'border-left-style:dashed;',
    dotted: 'border-left-style:dotted;',
    double: 'border-left-style:double;',
    groove: 'border-left-style:groove;',
    hidden: 'border-left-style:hidden;',
    inherit: 'border-left-style:inherit;',
    initial: 'border-left-style:initial;',
    inset: 'border-left-style:inset;',
    none: 'border-left-style:none;',
    outset: 'border-left-style:outset;',
    revert: 'border-left-style:revert;',
    revertLayer: 'border-left-style:revert-layer;',
    ridge: 'border-left-style:ridge;',
    solid: 'border-left-style:solid;',
    unset: 'border-left-style:unset;',
  } as const;
}

type BorderLeftStyleCssKeywords = Readonly<ReturnType<typeof borderLeftStyleKeywords>>;
export interface BorderLeftStyleCss extends BorderLeftStyleCssKeywords {}
/** CSS 属性 border-left-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
 */
export class BorderLeftStyleCss extends CssProperty<Property.BorderLeftStyle> {
  constructor() {
    super('border-left-style');
    initializeBorderLeftStyleCss();
  }
}
let borderLeftStyleReady = false;
function initializeBorderLeftStyleCss(): void {
  if (borderLeftStyleReady) return;
  Object.assign(BorderLeftStyleCss.prototype, borderLeftStyleKeywords());
  Object.freeze(BorderLeftStyleCss.prototype);
  borderLeftStyleReady = true;
}

function borderLeftWidthKeywords() {
  return {
    inherit: 'border-left-width:inherit;',
    initial: 'border-left-width:initial;',
    medium: 'border-left-width:medium;',
    revert: 'border-left-width:revert;',
    revertLayer: 'border-left-width:revert-layer;',
    thick: 'border-left-width:thick;',
    thin: 'border-left-width:thin;',
    unset: 'border-left-width:unset;',
  } as const;
}

type BorderLeftWidthCssKeywords = Readonly<ReturnType<typeof borderLeftWidthKeywords>>;
export interface BorderLeftWidthCss extends BorderLeftWidthCssKeywords {}
/** CSS 属性 border-left-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
 */
export class BorderLeftWidthCss extends LengthCssProperty<Property.BorderLeftWidth> {
  constructor() {
    super('border-left-width');
    initializeBorderLeftWidthCss();
  }
}
let borderLeftWidthReady = false;
function initializeBorderLeftWidthCss(): void {
  if (borderLeftWidthReady) return;
  Object.assign(BorderLeftWidthCss.prototype, borderLeftWidthKeywords());
  Object.freeze(BorderLeftWidthCss.prototype);
  borderLeftWidthReady = true;
}

function borderRadiusKeywords() {
  return {
    inherit: 'border-radius:inherit;',
    initial: 'border-radius:initial;',
    revert: 'border-radius:revert;',
    revertLayer: 'border-radius:revert-layer;',
    unset: 'border-radius:unset;',
  } as const;
}

type BorderRadiusCssKeywords = Readonly<ReturnType<typeof borderRadiusKeywords>>;
export interface BorderRadiusCss extends BorderRadiusCssKeywords {}
/** CSS 属性 border-radius。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
 */
export class BorderRadiusCss extends LengthCssProperty<Property.BorderRadius> {
  constructor() {
    super('border-radius');
    initializeBorderRadiusCss();
  }
}
let borderRadiusReady = false;
function initializeBorderRadiusCss(): void {
  if (borderRadiusReady) return;
  Object.assign(BorderRadiusCss.prototype, borderRadiusKeywords());
  Object.freeze(BorderRadiusCss.prototype);
  borderRadiusReady = true;
}

function borderRightKeywords() {
  return {
    AccentColor: 'border-right:AccentColor;',
    AccentColorText: 'border-right:AccentColorText;',
    ActiveBorder: 'border-right:ActiveBorder;',
    ActiveCaption: 'border-right:ActiveCaption;',
    ActiveText: 'border-right:ActiveText;',
    AppWorkspace: 'border-right:AppWorkspace;',
    Background: 'border-right:Background;',
    ButtonBorder: 'border-right:ButtonBorder;',
    ButtonFace: 'border-right:ButtonFace;',
    ButtonHighlight: 'border-right:ButtonHighlight;',
    ButtonShadow: 'border-right:ButtonShadow;',
    ButtonText: 'border-right:ButtonText;',
    Canvas: 'border-right:Canvas;',
    CanvasText: 'border-right:CanvasText;',
    CaptionText: 'border-right:CaptionText;',
    Field: 'border-right:Field;',
    FieldText: 'border-right:FieldText;',
    GrayText: 'border-right:GrayText;',
    Highlight: 'border-right:Highlight;',
    HighlightText: 'border-right:HighlightText;',
    InactiveBorder: 'border-right:InactiveBorder;',
    InactiveCaption: 'border-right:InactiveCaption;',
    InactiveCaptionText: 'border-right:InactiveCaptionText;',
    InfoBackground: 'border-right:InfoBackground;',
    InfoText: 'border-right:InfoText;',
    LinkText: 'border-right:LinkText;',
    Mark: 'border-right:Mark;',
    MarkText: 'border-right:MarkText;',
    Menu: 'border-right:Menu;',
    MenuText: 'border-right:MenuText;',
    Scrollbar: 'border-right:Scrollbar;',
    SelectedItem: 'border-right:SelectedItem;',
    SelectedItemText: 'border-right:SelectedItemText;',
    ThreeDDarkShadow: 'border-right:ThreeDDarkShadow;',
    ThreeDFace: 'border-right:ThreeDFace;',
    ThreeDHighlight: 'border-right:ThreeDHighlight;',
    ThreeDLightShadow: 'border-right:ThreeDLightShadow;',
    ThreeDShadow: 'border-right:ThreeDShadow;',
    VisitedText: 'border-right:VisitedText;',
    Window: 'border-right:Window;',
    WindowFrame: 'border-right:WindowFrame;',
    WindowText: 'border-right:WindowText;',
    aliceblue: 'border-right:aliceblue;',
    antiquewhite: 'border-right:antiquewhite;',
    aqua: 'border-right:aqua;',
    aquamarine: 'border-right:aquamarine;',
    azure: 'border-right:azure;',
    beige: 'border-right:beige;',
    bisque: 'border-right:bisque;',
    black: 'border-right:black;',
    blanchedalmond: 'border-right:blanchedalmond;',
    blue: 'border-right:blue;',
    blueviolet: 'border-right:blueviolet;',
    brown: 'border-right:brown;',
    burlywood: 'border-right:burlywood;',
    cadetblue: 'border-right:cadetblue;',
    chartreuse: 'border-right:chartreuse;',
    chocolate: 'border-right:chocolate;',
    coral: 'border-right:coral;',
    cornflowerblue: 'border-right:cornflowerblue;',
    cornsilk: 'border-right:cornsilk;',
    crimson: 'border-right:crimson;',
    currentColor: 'border-right:currentColor;',
    cyan: 'border-right:cyan;',
    darkblue: 'border-right:darkblue;',
    darkcyan: 'border-right:darkcyan;',
    darkgoldenrod: 'border-right:darkgoldenrod;',
    darkgray: 'border-right:darkgray;',
    darkgreen: 'border-right:darkgreen;',
    darkgrey: 'border-right:darkgrey;',
    darkkhaki: 'border-right:darkkhaki;',
    darkmagenta: 'border-right:darkmagenta;',
    darkolivegreen: 'border-right:darkolivegreen;',
    darkorange: 'border-right:darkorange;',
    darkorchid: 'border-right:darkorchid;',
    darkred: 'border-right:darkred;',
    darksalmon: 'border-right:darksalmon;',
    darkseagreen: 'border-right:darkseagreen;',
    darkslateblue: 'border-right:darkslateblue;',
    darkslategray: 'border-right:darkslategray;',
    darkslategrey: 'border-right:darkslategrey;',
    darkturquoise: 'border-right:darkturquoise;',
    darkviolet: 'border-right:darkviolet;',
    dashed: 'border-right:dashed;',
    deeppink: 'border-right:deeppink;',
    deepskyblue: 'border-right:deepskyblue;',
    dimgray: 'border-right:dimgray;',
    dimgrey: 'border-right:dimgrey;',
    dodgerblue: 'border-right:dodgerblue;',
    dotted: 'border-right:dotted;',
    double: 'border-right:double;',
    firebrick: 'border-right:firebrick;',
    floralwhite: 'border-right:floralwhite;',
    forestgreen: 'border-right:forestgreen;',
    fuchsia: 'border-right:fuchsia;',
    gainsboro: 'border-right:gainsboro;',
    ghostwhite: 'border-right:ghostwhite;',
    gold: 'border-right:gold;',
    goldenrod: 'border-right:goldenrod;',
    gray: 'border-right:gray;',
    green: 'border-right:green;',
    greenyellow: 'border-right:greenyellow;',
    grey: 'border-right:grey;',
    groove: 'border-right:groove;',
    hidden: 'border-right:hidden;',
    honeydew: 'border-right:honeydew;',
    hotpink: 'border-right:hotpink;',
    indianred: 'border-right:indianred;',
    indigo: 'border-right:indigo;',
    inherit: 'border-right:inherit;',
    initial: 'border-right:initial;',
    inset: 'border-right:inset;',
    ivory: 'border-right:ivory;',
    khaki: 'border-right:khaki;',
    lavender: 'border-right:lavender;',
    lavenderblush: 'border-right:lavenderblush;',
    lawngreen: 'border-right:lawngreen;',
    lemonchiffon: 'border-right:lemonchiffon;',
    lightblue: 'border-right:lightblue;',
    lightcoral: 'border-right:lightcoral;',
    lightcyan: 'border-right:lightcyan;',
    lightgoldenrodyellow: 'border-right:lightgoldenrodyellow;',
    lightgray: 'border-right:lightgray;',
    lightgreen: 'border-right:lightgreen;',
    lightgrey: 'border-right:lightgrey;',
    lightpink: 'border-right:lightpink;',
    lightsalmon: 'border-right:lightsalmon;',
    lightseagreen: 'border-right:lightseagreen;',
    lightskyblue: 'border-right:lightskyblue;',
    lightslategray: 'border-right:lightslategray;',
    lightslategrey: 'border-right:lightslategrey;',
    lightsteelblue: 'border-right:lightsteelblue;',
    lightyellow: 'border-right:lightyellow;',
    lime: 'border-right:lime;',
    limegreen: 'border-right:limegreen;',
    linen: 'border-right:linen;',
    magenta: 'border-right:magenta;',
    maroon: 'border-right:maroon;',
    medium: 'border-right:medium;',
    mediumaquamarine: 'border-right:mediumaquamarine;',
    mediumblue: 'border-right:mediumblue;',
    mediumorchid: 'border-right:mediumorchid;',
    mediumpurple: 'border-right:mediumpurple;',
    mediumseagreen: 'border-right:mediumseagreen;',
    mediumslateblue: 'border-right:mediumslateblue;',
    mediumspringgreen: 'border-right:mediumspringgreen;',
    mediumturquoise: 'border-right:mediumturquoise;',
    mediumvioletred: 'border-right:mediumvioletred;',
    midnightblue: 'border-right:midnightblue;',
    mintcream: 'border-right:mintcream;',
    mistyrose: 'border-right:mistyrose;',
    moccasin: 'border-right:moccasin;',
    navajowhite: 'border-right:navajowhite;',
    navy: 'border-right:navy;',
    none: 'border-right:none;',
    oldlace: 'border-right:oldlace;',
    olive: 'border-right:olive;',
    olivedrab: 'border-right:olivedrab;',
    orange: 'border-right:orange;',
    orangered: 'border-right:orangered;',
    orchid: 'border-right:orchid;',
    outset: 'border-right:outset;',
    palegoldenrod: 'border-right:palegoldenrod;',
    palegreen: 'border-right:palegreen;',
    paleturquoise: 'border-right:paleturquoise;',
    palevioletred: 'border-right:palevioletred;',
    papayawhip: 'border-right:papayawhip;',
    peachpuff: 'border-right:peachpuff;',
    peru: 'border-right:peru;',
    pink: 'border-right:pink;',
    plum: 'border-right:plum;',
    powderblue: 'border-right:powderblue;',
    purple: 'border-right:purple;',
    rebeccapurple: 'border-right:rebeccapurple;',
    red: 'border-right:red;',
    revert: 'border-right:revert;',
    revertLayer: 'border-right:revert-layer;',
    ridge: 'border-right:ridge;',
    rosybrown: 'border-right:rosybrown;',
    royalblue: 'border-right:royalblue;',
    saddlebrown: 'border-right:saddlebrown;',
    salmon: 'border-right:salmon;',
    sandybrown: 'border-right:sandybrown;',
    seagreen: 'border-right:seagreen;',
    seashell: 'border-right:seashell;',
    sienna: 'border-right:sienna;',
    silver: 'border-right:silver;',
    skyblue: 'border-right:skyblue;',
    slateblue: 'border-right:slateblue;',
    slategray: 'border-right:slategray;',
    slategrey: 'border-right:slategrey;',
    snow: 'border-right:snow;',
    solid: 'border-right:solid;',
    springgreen: 'border-right:springgreen;',
    steelblue: 'border-right:steelblue;',
    tan: 'border-right:tan;',
    teal: 'border-right:teal;',
    thick: 'border-right:thick;',
    thin: 'border-right:thin;',
    thistle: 'border-right:thistle;',
    tomato: 'border-right:tomato;',
    transparent: 'border-right:transparent;',
    turquoise: 'border-right:turquoise;',
    unset: 'border-right:unset;',
    violet: 'border-right:violet;',
    wheat: 'border-right:wheat;',
    white: 'border-right:white;',
    whitesmoke: 'border-right:whitesmoke;',
    yellow: 'border-right:yellow;',
    yellowgreen: 'border-right:yellowgreen;',
  } as const;
}

type BorderRightCssKeywords = Readonly<ReturnType<typeof borderRightKeywords>>;
export interface BorderRightCss extends BorderRightCssKeywords {}
/** CSS 属性 border-right。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
 */
export class BorderRightCss extends LengthCssProperty<Property.BorderRight> {
  constructor() {
    super('border-right');
    initializeBorderRightCss();
  }
}
let borderRightReady = false;
function initializeBorderRightCss(): void {
  if (borderRightReady) return;
  Object.assign(BorderRightCss.prototype, borderRightKeywords());
  Object.freeze(BorderRightCss.prototype);
  borderRightReady = true;
}

function borderRightColorKeywords() {
  return {
    AccentColor: 'border-right-color:AccentColor;',
    AccentColorText: 'border-right-color:AccentColorText;',
    ActiveBorder: 'border-right-color:ActiveBorder;',
    ActiveCaption: 'border-right-color:ActiveCaption;',
    ActiveText: 'border-right-color:ActiveText;',
    AppWorkspace: 'border-right-color:AppWorkspace;',
    Background: 'border-right-color:Background;',
    ButtonBorder: 'border-right-color:ButtonBorder;',
    ButtonFace: 'border-right-color:ButtonFace;',
    ButtonHighlight: 'border-right-color:ButtonHighlight;',
    ButtonShadow: 'border-right-color:ButtonShadow;',
    ButtonText: 'border-right-color:ButtonText;',
    Canvas: 'border-right-color:Canvas;',
    CanvasText: 'border-right-color:CanvasText;',
    CaptionText: 'border-right-color:CaptionText;',
    Field: 'border-right-color:Field;',
    FieldText: 'border-right-color:FieldText;',
    GrayText: 'border-right-color:GrayText;',
    Highlight: 'border-right-color:Highlight;',
    HighlightText: 'border-right-color:HighlightText;',
    InactiveBorder: 'border-right-color:InactiveBorder;',
    InactiveCaption: 'border-right-color:InactiveCaption;',
    InactiveCaptionText: 'border-right-color:InactiveCaptionText;',
    InfoBackground: 'border-right-color:InfoBackground;',
    InfoText: 'border-right-color:InfoText;',
    LinkText: 'border-right-color:LinkText;',
    Mark: 'border-right-color:Mark;',
    MarkText: 'border-right-color:MarkText;',
    Menu: 'border-right-color:Menu;',
    MenuText: 'border-right-color:MenuText;',
    Scrollbar: 'border-right-color:Scrollbar;',
    SelectedItem: 'border-right-color:SelectedItem;',
    SelectedItemText: 'border-right-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-right-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-right-color:ThreeDFace;',
    ThreeDHighlight: 'border-right-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-right-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-right-color:ThreeDShadow;',
    VisitedText: 'border-right-color:VisitedText;',
    Window: 'border-right-color:Window;',
    WindowFrame: 'border-right-color:WindowFrame;',
    WindowText: 'border-right-color:WindowText;',
    aliceblue: 'border-right-color:aliceblue;',
    antiquewhite: 'border-right-color:antiquewhite;',
    aqua: 'border-right-color:aqua;',
    aquamarine: 'border-right-color:aquamarine;',
    azure: 'border-right-color:azure;',
    beige: 'border-right-color:beige;',
    bisque: 'border-right-color:bisque;',
    black: 'border-right-color:black;',
    blanchedalmond: 'border-right-color:blanchedalmond;',
    blue: 'border-right-color:blue;',
    blueviolet: 'border-right-color:blueviolet;',
    brown: 'border-right-color:brown;',
    burlywood: 'border-right-color:burlywood;',
    cadetblue: 'border-right-color:cadetblue;',
    chartreuse: 'border-right-color:chartreuse;',
    chocolate: 'border-right-color:chocolate;',
    coral: 'border-right-color:coral;',
    cornflowerblue: 'border-right-color:cornflowerblue;',
    cornsilk: 'border-right-color:cornsilk;',
    crimson: 'border-right-color:crimson;',
    currentColor: 'border-right-color:currentColor;',
    cyan: 'border-right-color:cyan;',
    darkblue: 'border-right-color:darkblue;',
    darkcyan: 'border-right-color:darkcyan;',
    darkgoldenrod: 'border-right-color:darkgoldenrod;',
    darkgray: 'border-right-color:darkgray;',
    darkgreen: 'border-right-color:darkgreen;',
    darkgrey: 'border-right-color:darkgrey;',
    darkkhaki: 'border-right-color:darkkhaki;',
    darkmagenta: 'border-right-color:darkmagenta;',
    darkolivegreen: 'border-right-color:darkolivegreen;',
    darkorange: 'border-right-color:darkorange;',
    darkorchid: 'border-right-color:darkorchid;',
    darkred: 'border-right-color:darkred;',
    darksalmon: 'border-right-color:darksalmon;',
    darkseagreen: 'border-right-color:darkseagreen;',
    darkslateblue: 'border-right-color:darkslateblue;',
    darkslategray: 'border-right-color:darkslategray;',
    darkslategrey: 'border-right-color:darkslategrey;',
    darkturquoise: 'border-right-color:darkturquoise;',
    darkviolet: 'border-right-color:darkviolet;',
    deeppink: 'border-right-color:deeppink;',
    deepskyblue: 'border-right-color:deepskyblue;',
    dimgray: 'border-right-color:dimgray;',
    dimgrey: 'border-right-color:dimgrey;',
    dodgerblue: 'border-right-color:dodgerblue;',
    firebrick: 'border-right-color:firebrick;',
    floralwhite: 'border-right-color:floralwhite;',
    forestgreen: 'border-right-color:forestgreen;',
    fuchsia: 'border-right-color:fuchsia;',
    gainsboro: 'border-right-color:gainsboro;',
    ghostwhite: 'border-right-color:ghostwhite;',
    gold: 'border-right-color:gold;',
    goldenrod: 'border-right-color:goldenrod;',
    gray: 'border-right-color:gray;',
    green: 'border-right-color:green;',
    greenyellow: 'border-right-color:greenyellow;',
    grey: 'border-right-color:grey;',
    honeydew: 'border-right-color:honeydew;',
    hotpink: 'border-right-color:hotpink;',
    indianred: 'border-right-color:indianred;',
    indigo: 'border-right-color:indigo;',
    inherit: 'border-right-color:inherit;',
    initial: 'border-right-color:initial;',
    ivory: 'border-right-color:ivory;',
    khaki: 'border-right-color:khaki;',
    lavender: 'border-right-color:lavender;',
    lavenderblush: 'border-right-color:lavenderblush;',
    lawngreen: 'border-right-color:lawngreen;',
    lemonchiffon: 'border-right-color:lemonchiffon;',
    lightblue: 'border-right-color:lightblue;',
    lightcoral: 'border-right-color:lightcoral;',
    lightcyan: 'border-right-color:lightcyan;',
    lightgoldenrodyellow: 'border-right-color:lightgoldenrodyellow;',
    lightgray: 'border-right-color:lightgray;',
    lightgreen: 'border-right-color:lightgreen;',
    lightgrey: 'border-right-color:lightgrey;',
    lightpink: 'border-right-color:lightpink;',
    lightsalmon: 'border-right-color:lightsalmon;',
    lightseagreen: 'border-right-color:lightseagreen;',
    lightskyblue: 'border-right-color:lightskyblue;',
    lightslategray: 'border-right-color:lightslategray;',
    lightslategrey: 'border-right-color:lightslategrey;',
    lightsteelblue: 'border-right-color:lightsteelblue;',
    lightyellow: 'border-right-color:lightyellow;',
    lime: 'border-right-color:lime;',
    limegreen: 'border-right-color:limegreen;',
    linen: 'border-right-color:linen;',
    magenta: 'border-right-color:magenta;',
    maroon: 'border-right-color:maroon;',
    mediumaquamarine: 'border-right-color:mediumaquamarine;',
    mediumblue: 'border-right-color:mediumblue;',
    mediumorchid: 'border-right-color:mediumorchid;',
    mediumpurple: 'border-right-color:mediumpurple;',
    mediumseagreen: 'border-right-color:mediumseagreen;',
    mediumslateblue: 'border-right-color:mediumslateblue;',
    mediumspringgreen: 'border-right-color:mediumspringgreen;',
    mediumturquoise: 'border-right-color:mediumturquoise;',
    mediumvioletred: 'border-right-color:mediumvioletred;',
    midnightblue: 'border-right-color:midnightblue;',
    mintcream: 'border-right-color:mintcream;',
    mistyrose: 'border-right-color:mistyrose;',
    moccasin: 'border-right-color:moccasin;',
    navajowhite: 'border-right-color:navajowhite;',
    navy: 'border-right-color:navy;',
    oldlace: 'border-right-color:oldlace;',
    olive: 'border-right-color:olive;',
    olivedrab: 'border-right-color:olivedrab;',
    orange: 'border-right-color:orange;',
    orangered: 'border-right-color:orangered;',
    orchid: 'border-right-color:orchid;',
    palegoldenrod: 'border-right-color:palegoldenrod;',
    palegreen: 'border-right-color:palegreen;',
    paleturquoise: 'border-right-color:paleturquoise;',
    palevioletred: 'border-right-color:palevioletred;',
    papayawhip: 'border-right-color:papayawhip;',
    peachpuff: 'border-right-color:peachpuff;',
    peru: 'border-right-color:peru;',
    pink: 'border-right-color:pink;',
    plum: 'border-right-color:plum;',
    powderblue: 'border-right-color:powderblue;',
    purple: 'border-right-color:purple;',
    rebeccapurple: 'border-right-color:rebeccapurple;',
    red: 'border-right-color:red;',
    revert: 'border-right-color:revert;',
    revertLayer: 'border-right-color:revert-layer;',
    rosybrown: 'border-right-color:rosybrown;',
    royalblue: 'border-right-color:royalblue;',
    saddlebrown: 'border-right-color:saddlebrown;',
    salmon: 'border-right-color:salmon;',
    sandybrown: 'border-right-color:sandybrown;',
    seagreen: 'border-right-color:seagreen;',
    seashell: 'border-right-color:seashell;',
    sienna: 'border-right-color:sienna;',
    silver: 'border-right-color:silver;',
    skyblue: 'border-right-color:skyblue;',
    slateblue: 'border-right-color:slateblue;',
    slategray: 'border-right-color:slategray;',
    slategrey: 'border-right-color:slategrey;',
    snow: 'border-right-color:snow;',
    springgreen: 'border-right-color:springgreen;',
    steelblue: 'border-right-color:steelblue;',
    tan: 'border-right-color:tan;',
    teal: 'border-right-color:teal;',
    thistle: 'border-right-color:thistle;',
    tomato: 'border-right-color:tomato;',
    transparent: 'border-right-color:transparent;',
    turquoise: 'border-right-color:turquoise;',
    unset: 'border-right-color:unset;',
    violet: 'border-right-color:violet;',
    wheat: 'border-right-color:wheat;',
    white: 'border-right-color:white;',
    whitesmoke: 'border-right-color:whitesmoke;',
    yellow: 'border-right-color:yellow;',
    yellowgreen: 'border-right-color:yellowgreen;',
  } as const;
}

type BorderRightColorCssKeywords = Readonly<ReturnType<typeof borderRightColorKeywords>>;
export interface BorderRightColorCss extends BorderRightColorCssKeywords {}
/** CSS 属性 border-right-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
 */
export class BorderRightColorCss extends CssProperty<Property.BorderRightColor> {
  constructor() {
    super('border-right-color');
    initializeBorderRightColorCss();
  }
}
let borderRightColorReady = false;
function initializeBorderRightColorCss(): void {
  if (borderRightColorReady) return;
  Object.assign(BorderRightColorCss.prototype, borderRightColorKeywords());
  Object.freeze(BorderRightColorCss.prototype);
  borderRightColorReady = true;
}

function borderRightStyleKeywords() {
  return {
    dashed: 'border-right-style:dashed;',
    dotted: 'border-right-style:dotted;',
    double: 'border-right-style:double;',
    groove: 'border-right-style:groove;',
    hidden: 'border-right-style:hidden;',
    inherit: 'border-right-style:inherit;',
    initial: 'border-right-style:initial;',
    inset: 'border-right-style:inset;',
    none: 'border-right-style:none;',
    outset: 'border-right-style:outset;',
    revert: 'border-right-style:revert;',
    revertLayer: 'border-right-style:revert-layer;',
    ridge: 'border-right-style:ridge;',
    solid: 'border-right-style:solid;',
    unset: 'border-right-style:unset;',
  } as const;
}

type BorderRightStyleCssKeywords = Readonly<ReturnType<typeof borderRightStyleKeywords>>;
export interface BorderRightStyleCss extends BorderRightStyleCssKeywords {}
/** CSS 属性 border-right-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
 */
export class BorderRightStyleCss extends CssProperty<Property.BorderRightStyle> {
  constructor() {
    super('border-right-style');
    initializeBorderRightStyleCss();
  }
}
let borderRightStyleReady = false;
function initializeBorderRightStyleCss(): void {
  if (borderRightStyleReady) return;
  Object.assign(BorderRightStyleCss.prototype, borderRightStyleKeywords());
  Object.freeze(BorderRightStyleCss.prototype);
  borderRightStyleReady = true;
}

function borderRightWidthKeywords() {
  return {
    inherit: 'border-right-width:inherit;',
    initial: 'border-right-width:initial;',
    medium: 'border-right-width:medium;',
    revert: 'border-right-width:revert;',
    revertLayer: 'border-right-width:revert-layer;',
    thick: 'border-right-width:thick;',
    thin: 'border-right-width:thin;',
    unset: 'border-right-width:unset;',
  } as const;
}

type BorderRightWidthCssKeywords = Readonly<ReturnType<typeof borderRightWidthKeywords>>;
export interface BorderRightWidthCss extends BorderRightWidthCssKeywords {}
/** CSS 属性 border-right-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
 */
export class BorderRightWidthCss extends LengthCssProperty<Property.BorderRightWidth> {
  constructor() {
    super('border-right-width');
    initializeBorderRightWidthCss();
  }
}
let borderRightWidthReady = false;
function initializeBorderRightWidthCss(): void {
  if (borderRightWidthReady) return;
  Object.assign(BorderRightWidthCss.prototype, borderRightWidthKeywords());
  Object.freeze(BorderRightWidthCss.prototype);
  borderRightWidthReady = true;
}

function borderSpacingKeywords() {
  return {
    inherit: 'border-spacing:inherit;',
    initial: 'border-spacing:initial;',
    revert: 'border-spacing:revert;',
    revertLayer: 'border-spacing:revert-layer;',
    unset: 'border-spacing:unset;',
  } as const;
}

type BorderSpacingCssKeywords = Readonly<ReturnType<typeof borderSpacingKeywords>>;
export interface BorderSpacingCss extends BorderSpacingCssKeywords {}
/** CSS 属性 border-spacing；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
 */
export class BorderSpacingCss extends LengthCssProperty<Property.BorderSpacing> {
  constructor() {
    super('border-spacing');
    initializeBorderSpacingCss();
  }
}
let borderSpacingReady = false;
function initializeBorderSpacingCss(): void {
  if (borderSpacingReady) return;
  Object.assign(BorderSpacingCss.prototype, borderSpacingKeywords());
  Object.freeze(BorderSpacingCss.prototype);
  borderSpacingReady = true;
}

function borderStartEndRadiusKeywords() {
  return {
    inherit: 'border-start-end-radius:inherit;',
    initial: 'border-start-end-radius:initial;',
    revert: 'border-start-end-radius:revert;',
    revertLayer: 'border-start-end-radius:revert-layer;',
    unset: 'border-start-end-radius:unset;',
  } as const;
}

type BorderStartEndRadiusCssKeywords = Readonly<ReturnType<typeof borderStartEndRadiusKeywords>>;
export interface BorderStartEndRadiusCss extends BorderStartEndRadiusCssKeywords {}
/** CSS 属性 border-start-end-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
 */
export class BorderStartEndRadiusCss extends LengthCssProperty<Property.BorderStartEndRadius> {
  constructor() {
    super('border-start-end-radius');
    initializeBorderStartEndRadiusCss();
  }
}
let borderStartEndRadiusReady = false;
function initializeBorderStartEndRadiusCss(): void {
  if (borderStartEndRadiusReady) return;
  Object.assign(BorderStartEndRadiusCss.prototype, borderStartEndRadiusKeywords());
  Object.freeze(BorderStartEndRadiusCss.prototype);
  borderStartEndRadiusReady = true;
}

function borderStartStartRadiusKeywords() {
  return {
    inherit: 'border-start-start-radius:inherit;',
    initial: 'border-start-start-radius:initial;',
    revert: 'border-start-start-radius:revert;',
    revertLayer: 'border-start-start-radius:revert-layer;',
    unset: 'border-start-start-radius:unset;',
  } as const;
}

type BorderStartStartRadiusCssKeywords = Readonly<
  ReturnType<typeof borderStartStartRadiusKeywords>
>;
export interface BorderStartStartRadiusCss extends BorderStartStartRadiusCssKeywords {}
/** CSS 属性 border-start-start-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
 */
export class BorderStartStartRadiusCss extends LengthCssProperty<Property.BorderStartStartRadius> {
  constructor() {
    super('border-start-start-radius');
    initializeBorderStartStartRadiusCss();
  }
}
let borderStartStartRadiusReady = false;
function initializeBorderStartStartRadiusCss(): void {
  if (borderStartStartRadiusReady) return;
  Object.assign(BorderStartStartRadiusCss.prototype, borderStartStartRadiusKeywords());
  Object.freeze(BorderStartStartRadiusCss.prototype);
  borderStartStartRadiusReady = true;
}

function borderStyleKeywords() {
  return {
    dashed: 'border-style:dashed;',
    dotted: 'border-style:dotted;',
    double: 'border-style:double;',
    groove: 'border-style:groove;',
    hidden: 'border-style:hidden;',
    inherit: 'border-style:inherit;',
    initial: 'border-style:initial;',
    inset: 'border-style:inset;',
    none: 'border-style:none;',
    outset: 'border-style:outset;',
    revert: 'border-style:revert;',
    revertLayer: 'border-style:revert-layer;',
    ridge: 'border-style:ridge;',
    solid: 'border-style:solid;',
    unset: 'border-style:unset;',
  } as const;
}

type BorderStyleCssKeywords = Readonly<ReturnType<typeof borderStyleKeywords>>;
export interface BorderStyleCss extends BorderStyleCssKeywords {}
/** CSS 属性 border-style。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
 */
export class BorderStyleCss extends CssProperty<Property.BorderStyle> {
  constructor() {
    super('border-style');
    initializeBorderStyleCss();
  }
}
let borderStyleReady = false;
function initializeBorderStyleCss(): void {
  if (borderStyleReady) return;
  Object.assign(BorderStyleCss.prototype, borderStyleKeywords());
  Object.freeze(BorderStyleCss.prototype);
  borderStyleReady = true;
}

function borderTopKeywords() {
  return {
    AccentColor: 'border-top:AccentColor;',
    AccentColorText: 'border-top:AccentColorText;',
    ActiveBorder: 'border-top:ActiveBorder;',
    ActiveCaption: 'border-top:ActiveCaption;',
    ActiveText: 'border-top:ActiveText;',
    AppWorkspace: 'border-top:AppWorkspace;',
    Background: 'border-top:Background;',
    ButtonBorder: 'border-top:ButtonBorder;',
    ButtonFace: 'border-top:ButtonFace;',
    ButtonHighlight: 'border-top:ButtonHighlight;',
    ButtonShadow: 'border-top:ButtonShadow;',
    ButtonText: 'border-top:ButtonText;',
    Canvas: 'border-top:Canvas;',
    CanvasText: 'border-top:CanvasText;',
    CaptionText: 'border-top:CaptionText;',
    Field: 'border-top:Field;',
    FieldText: 'border-top:FieldText;',
    GrayText: 'border-top:GrayText;',
    Highlight: 'border-top:Highlight;',
    HighlightText: 'border-top:HighlightText;',
    InactiveBorder: 'border-top:InactiveBorder;',
    InactiveCaption: 'border-top:InactiveCaption;',
    InactiveCaptionText: 'border-top:InactiveCaptionText;',
    InfoBackground: 'border-top:InfoBackground;',
    InfoText: 'border-top:InfoText;',
    LinkText: 'border-top:LinkText;',
    Mark: 'border-top:Mark;',
    MarkText: 'border-top:MarkText;',
    Menu: 'border-top:Menu;',
    MenuText: 'border-top:MenuText;',
    Scrollbar: 'border-top:Scrollbar;',
    SelectedItem: 'border-top:SelectedItem;',
    SelectedItemText: 'border-top:SelectedItemText;',
    ThreeDDarkShadow: 'border-top:ThreeDDarkShadow;',
    ThreeDFace: 'border-top:ThreeDFace;',
    ThreeDHighlight: 'border-top:ThreeDHighlight;',
    ThreeDLightShadow: 'border-top:ThreeDLightShadow;',
    ThreeDShadow: 'border-top:ThreeDShadow;',
    VisitedText: 'border-top:VisitedText;',
    Window: 'border-top:Window;',
    WindowFrame: 'border-top:WindowFrame;',
    WindowText: 'border-top:WindowText;',
    aliceblue: 'border-top:aliceblue;',
    antiquewhite: 'border-top:antiquewhite;',
    aqua: 'border-top:aqua;',
    aquamarine: 'border-top:aquamarine;',
    azure: 'border-top:azure;',
    beige: 'border-top:beige;',
    bisque: 'border-top:bisque;',
    black: 'border-top:black;',
    blanchedalmond: 'border-top:blanchedalmond;',
    blue: 'border-top:blue;',
    blueviolet: 'border-top:blueviolet;',
    brown: 'border-top:brown;',
    burlywood: 'border-top:burlywood;',
    cadetblue: 'border-top:cadetblue;',
    chartreuse: 'border-top:chartreuse;',
    chocolate: 'border-top:chocolate;',
    coral: 'border-top:coral;',
    cornflowerblue: 'border-top:cornflowerblue;',
    cornsilk: 'border-top:cornsilk;',
    crimson: 'border-top:crimson;',
    currentColor: 'border-top:currentColor;',
    cyan: 'border-top:cyan;',
    darkblue: 'border-top:darkblue;',
    darkcyan: 'border-top:darkcyan;',
    darkgoldenrod: 'border-top:darkgoldenrod;',
    darkgray: 'border-top:darkgray;',
    darkgreen: 'border-top:darkgreen;',
    darkgrey: 'border-top:darkgrey;',
    darkkhaki: 'border-top:darkkhaki;',
    darkmagenta: 'border-top:darkmagenta;',
    darkolivegreen: 'border-top:darkolivegreen;',
    darkorange: 'border-top:darkorange;',
    darkorchid: 'border-top:darkorchid;',
    darkred: 'border-top:darkred;',
    darksalmon: 'border-top:darksalmon;',
    darkseagreen: 'border-top:darkseagreen;',
    darkslateblue: 'border-top:darkslateblue;',
    darkslategray: 'border-top:darkslategray;',
    darkslategrey: 'border-top:darkslategrey;',
    darkturquoise: 'border-top:darkturquoise;',
    darkviolet: 'border-top:darkviolet;',
    dashed: 'border-top:dashed;',
    deeppink: 'border-top:deeppink;',
    deepskyblue: 'border-top:deepskyblue;',
    dimgray: 'border-top:dimgray;',
    dimgrey: 'border-top:dimgrey;',
    dodgerblue: 'border-top:dodgerblue;',
    dotted: 'border-top:dotted;',
    double: 'border-top:double;',
    firebrick: 'border-top:firebrick;',
    floralwhite: 'border-top:floralwhite;',
    forestgreen: 'border-top:forestgreen;',
    fuchsia: 'border-top:fuchsia;',
    gainsboro: 'border-top:gainsboro;',
    ghostwhite: 'border-top:ghostwhite;',
    gold: 'border-top:gold;',
    goldenrod: 'border-top:goldenrod;',
    gray: 'border-top:gray;',
    green: 'border-top:green;',
    greenyellow: 'border-top:greenyellow;',
    grey: 'border-top:grey;',
    groove: 'border-top:groove;',
    hidden: 'border-top:hidden;',
    honeydew: 'border-top:honeydew;',
    hotpink: 'border-top:hotpink;',
    indianred: 'border-top:indianred;',
    indigo: 'border-top:indigo;',
    inherit: 'border-top:inherit;',
    initial: 'border-top:initial;',
    inset: 'border-top:inset;',
    ivory: 'border-top:ivory;',
    khaki: 'border-top:khaki;',
    lavender: 'border-top:lavender;',
    lavenderblush: 'border-top:lavenderblush;',
    lawngreen: 'border-top:lawngreen;',
    lemonchiffon: 'border-top:lemonchiffon;',
    lightblue: 'border-top:lightblue;',
    lightcoral: 'border-top:lightcoral;',
    lightcyan: 'border-top:lightcyan;',
    lightgoldenrodyellow: 'border-top:lightgoldenrodyellow;',
    lightgray: 'border-top:lightgray;',
    lightgreen: 'border-top:lightgreen;',
    lightgrey: 'border-top:lightgrey;',
    lightpink: 'border-top:lightpink;',
    lightsalmon: 'border-top:lightsalmon;',
    lightseagreen: 'border-top:lightseagreen;',
    lightskyblue: 'border-top:lightskyblue;',
    lightslategray: 'border-top:lightslategray;',
    lightslategrey: 'border-top:lightslategrey;',
    lightsteelblue: 'border-top:lightsteelblue;',
    lightyellow: 'border-top:lightyellow;',
    lime: 'border-top:lime;',
    limegreen: 'border-top:limegreen;',
    linen: 'border-top:linen;',
    magenta: 'border-top:magenta;',
    maroon: 'border-top:maroon;',
    medium: 'border-top:medium;',
    mediumaquamarine: 'border-top:mediumaquamarine;',
    mediumblue: 'border-top:mediumblue;',
    mediumorchid: 'border-top:mediumorchid;',
    mediumpurple: 'border-top:mediumpurple;',
    mediumseagreen: 'border-top:mediumseagreen;',
    mediumslateblue: 'border-top:mediumslateblue;',
    mediumspringgreen: 'border-top:mediumspringgreen;',
    mediumturquoise: 'border-top:mediumturquoise;',
    mediumvioletred: 'border-top:mediumvioletred;',
    midnightblue: 'border-top:midnightblue;',
    mintcream: 'border-top:mintcream;',
    mistyrose: 'border-top:mistyrose;',
    moccasin: 'border-top:moccasin;',
    navajowhite: 'border-top:navajowhite;',
    navy: 'border-top:navy;',
    none: 'border-top:none;',
    oldlace: 'border-top:oldlace;',
    olive: 'border-top:olive;',
    olivedrab: 'border-top:olivedrab;',
    orange: 'border-top:orange;',
    orangered: 'border-top:orangered;',
    orchid: 'border-top:orchid;',
    outset: 'border-top:outset;',
    palegoldenrod: 'border-top:palegoldenrod;',
    palegreen: 'border-top:palegreen;',
    paleturquoise: 'border-top:paleturquoise;',
    palevioletred: 'border-top:palevioletred;',
    papayawhip: 'border-top:papayawhip;',
    peachpuff: 'border-top:peachpuff;',
    peru: 'border-top:peru;',
    pink: 'border-top:pink;',
    plum: 'border-top:plum;',
    powderblue: 'border-top:powderblue;',
    purple: 'border-top:purple;',
    rebeccapurple: 'border-top:rebeccapurple;',
    red: 'border-top:red;',
    revert: 'border-top:revert;',
    revertLayer: 'border-top:revert-layer;',
    ridge: 'border-top:ridge;',
    rosybrown: 'border-top:rosybrown;',
    royalblue: 'border-top:royalblue;',
    saddlebrown: 'border-top:saddlebrown;',
    salmon: 'border-top:salmon;',
    sandybrown: 'border-top:sandybrown;',
    seagreen: 'border-top:seagreen;',
    seashell: 'border-top:seashell;',
    sienna: 'border-top:sienna;',
    silver: 'border-top:silver;',
    skyblue: 'border-top:skyblue;',
    slateblue: 'border-top:slateblue;',
    slategray: 'border-top:slategray;',
    slategrey: 'border-top:slategrey;',
    snow: 'border-top:snow;',
    solid: 'border-top:solid;',
    springgreen: 'border-top:springgreen;',
    steelblue: 'border-top:steelblue;',
    tan: 'border-top:tan;',
    teal: 'border-top:teal;',
    thick: 'border-top:thick;',
    thin: 'border-top:thin;',
    thistle: 'border-top:thistle;',
    tomato: 'border-top:tomato;',
    transparent: 'border-top:transparent;',
    turquoise: 'border-top:turquoise;',
    unset: 'border-top:unset;',
    violet: 'border-top:violet;',
    wheat: 'border-top:wheat;',
    white: 'border-top:white;',
    whitesmoke: 'border-top:whitesmoke;',
    yellow: 'border-top:yellow;',
    yellowgreen: 'border-top:yellowgreen;',
  } as const;
}

type BorderTopCssKeywords = Readonly<ReturnType<typeof borderTopKeywords>>;
export interface BorderTopCss extends BorderTopCssKeywords {}
/** CSS 属性 border-top。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
 */
export class BorderTopCss extends LengthCssProperty<Property.BorderTop> {
  constructor() {
    super('border-top');
    initializeBorderTopCss();
  }
}
let borderTopReady = false;
function initializeBorderTopCss(): void {
  if (borderTopReady) return;
  Object.assign(BorderTopCss.prototype, borderTopKeywords());
  Object.freeze(BorderTopCss.prototype);
  borderTopReady = true;
}

function borderTopColorKeywords() {
  return {
    AccentColor: 'border-top-color:AccentColor;',
    AccentColorText: 'border-top-color:AccentColorText;',
    ActiveBorder: 'border-top-color:ActiveBorder;',
    ActiveCaption: 'border-top-color:ActiveCaption;',
    ActiveText: 'border-top-color:ActiveText;',
    AppWorkspace: 'border-top-color:AppWorkspace;',
    Background: 'border-top-color:Background;',
    ButtonBorder: 'border-top-color:ButtonBorder;',
    ButtonFace: 'border-top-color:ButtonFace;',
    ButtonHighlight: 'border-top-color:ButtonHighlight;',
    ButtonShadow: 'border-top-color:ButtonShadow;',
    ButtonText: 'border-top-color:ButtonText;',
    Canvas: 'border-top-color:Canvas;',
    CanvasText: 'border-top-color:CanvasText;',
    CaptionText: 'border-top-color:CaptionText;',
    Field: 'border-top-color:Field;',
    FieldText: 'border-top-color:FieldText;',
    GrayText: 'border-top-color:GrayText;',
    Highlight: 'border-top-color:Highlight;',
    HighlightText: 'border-top-color:HighlightText;',
    InactiveBorder: 'border-top-color:InactiveBorder;',
    InactiveCaption: 'border-top-color:InactiveCaption;',
    InactiveCaptionText: 'border-top-color:InactiveCaptionText;',
    InfoBackground: 'border-top-color:InfoBackground;',
    InfoText: 'border-top-color:InfoText;',
    LinkText: 'border-top-color:LinkText;',
    Mark: 'border-top-color:Mark;',
    MarkText: 'border-top-color:MarkText;',
    Menu: 'border-top-color:Menu;',
    MenuText: 'border-top-color:MenuText;',
    Scrollbar: 'border-top-color:Scrollbar;',
    SelectedItem: 'border-top-color:SelectedItem;',
    SelectedItemText: 'border-top-color:SelectedItemText;',
    ThreeDDarkShadow: 'border-top-color:ThreeDDarkShadow;',
    ThreeDFace: 'border-top-color:ThreeDFace;',
    ThreeDHighlight: 'border-top-color:ThreeDHighlight;',
    ThreeDLightShadow: 'border-top-color:ThreeDLightShadow;',
    ThreeDShadow: 'border-top-color:ThreeDShadow;',
    VisitedText: 'border-top-color:VisitedText;',
    Window: 'border-top-color:Window;',
    WindowFrame: 'border-top-color:WindowFrame;',
    WindowText: 'border-top-color:WindowText;',
    aliceblue: 'border-top-color:aliceblue;',
    antiquewhite: 'border-top-color:antiquewhite;',
    aqua: 'border-top-color:aqua;',
    aquamarine: 'border-top-color:aquamarine;',
    azure: 'border-top-color:azure;',
    beige: 'border-top-color:beige;',
    bisque: 'border-top-color:bisque;',
    black: 'border-top-color:black;',
    blanchedalmond: 'border-top-color:blanchedalmond;',
    blue: 'border-top-color:blue;',
    blueviolet: 'border-top-color:blueviolet;',
    brown: 'border-top-color:brown;',
    burlywood: 'border-top-color:burlywood;',
    cadetblue: 'border-top-color:cadetblue;',
    chartreuse: 'border-top-color:chartreuse;',
    chocolate: 'border-top-color:chocolate;',
    coral: 'border-top-color:coral;',
    cornflowerblue: 'border-top-color:cornflowerblue;',
    cornsilk: 'border-top-color:cornsilk;',
    crimson: 'border-top-color:crimson;',
    currentColor: 'border-top-color:currentColor;',
    cyan: 'border-top-color:cyan;',
    darkblue: 'border-top-color:darkblue;',
    darkcyan: 'border-top-color:darkcyan;',
    darkgoldenrod: 'border-top-color:darkgoldenrod;',
    darkgray: 'border-top-color:darkgray;',
    darkgreen: 'border-top-color:darkgreen;',
    darkgrey: 'border-top-color:darkgrey;',
    darkkhaki: 'border-top-color:darkkhaki;',
    darkmagenta: 'border-top-color:darkmagenta;',
    darkolivegreen: 'border-top-color:darkolivegreen;',
    darkorange: 'border-top-color:darkorange;',
    darkorchid: 'border-top-color:darkorchid;',
    darkred: 'border-top-color:darkred;',
    darksalmon: 'border-top-color:darksalmon;',
    darkseagreen: 'border-top-color:darkseagreen;',
    darkslateblue: 'border-top-color:darkslateblue;',
    darkslategray: 'border-top-color:darkslategray;',
    darkslategrey: 'border-top-color:darkslategrey;',
    darkturquoise: 'border-top-color:darkturquoise;',
    darkviolet: 'border-top-color:darkviolet;',
    deeppink: 'border-top-color:deeppink;',
    deepskyblue: 'border-top-color:deepskyblue;',
    dimgray: 'border-top-color:dimgray;',
    dimgrey: 'border-top-color:dimgrey;',
    dodgerblue: 'border-top-color:dodgerblue;',
    firebrick: 'border-top-color:firebrick;',
    floralwhite: 'border-top-color:floralwhite;',
    forestgreen: 'border-top-color:forestgreen;',
    fuchsia: 'border-top-color:fuchsia;',
    gainsboro: 'border-top-color:gainsboro;',
    ghostwhite: 'border-top-color:ghostwhite;',
    gold: 'border-top-color:gold;',
    goldenrod: 'border-top-color:goldenrod;',
    gray: 'border-top-color:gray;',
    green: 'border-top-color:green;',
    greenyellow: 'border-top-color:greenyellow;',
    grey: 'border-top-color:grey;',
    honeydew: 'border-top-color:honeydew;',
    hotpink: 'border-top-color:hotpink;',
    indianred: 'border-top-color:indianred;',
    indigo: 'border-top-color:indigo;',
    inherit: 'border-top-color:inherit;',
    initial: 'border-top-color:initial;',
    ivory: 'border-top-color:ivory;',
    khaki: 'border-top-color:khaki;',
    lavender: 'border-top-color:lavender;',
    lavenderblush: 'border-top-color:lavenderblush;',
    lawngreen: 'border-top-color:lawngreen;',
    lemonchiffon: 'border-top-color:lemonchiffon;',
    lightblue: 'border-top-color:lightblue;',
    lightcoral: 'border-top-color:lightcoral;',
    lightcyan: 'border-top-color:lightcyan;',
    lightgoldenrodyellow: 'border-top-color:lightgoldenrodyellow;',
    lightgray: 'border-top-color:lightgray;',
    lightgreen: 'border-top-color:lightgreen;',
    lightgrey: 'border-top-color:lightgrey;',
    lightpink: 'border-top-color:lightpink;',
    lightsalmon: 'border-top-color:lightsalmon;',
    lightseagreen: 'border-top-color:lightseagreen;',
    lightskyblue: 'border-top-color:lightskyblue;',
    lightslategray: 'border-top-color:lightslategray;',
    lightslategrey: 'border-top-color:lightslategrey;',
    lightsteelblue: 'border-top-color:lightsteelblue;',
    lightyellow: 'border-top-color:lightyellow;',
    lime: 'border-top-color:lime;',
    limegreen: 'border-top-color:limegreen;',
    linen: 'border-top-color:linen;',
    magenta: 'border-top-color:magenta;',
    maroon: 'border-top-color:maroon;',
    mediumaquamarine: 'border-top-color:mediumaquamarine;',
    mediumblue: 'border-top-color:mediumblue;',
    mediumorchid: 'border-top-color:mediumorchid;',
    mediumpurple: 'border-top-color:mediumpurple;',
    mediumseagreen: 'border-top-color:mediumseagreen;',
    mediumslateblue: 'border-top-color:mediumslateblue;',
    mediumspringgreen: 'border-top-color:mediumspringgreen;',
    mediumturquoise: 'border-top-color:mediumturquoise;',
    mediumvioletred: 'border-top-color:mediumvioletred;',
    midnightblue: 'border-top-color:midnightblue;',
    mintcream: 'border-top-color:mintcream;',
    mistyrose: 'border-top-color:mistyrose;',
    moccasin: 'border-top-color:moccasin;',
    navajowhite: 'border-top-color:navajowhite;',
    navy: 'border-top-color:navy;',
    oldlace: 'border-top-color:oldlace;',
    olive: 'border-top-color:olive;',
    olivedrab: 'border-top-color:olivedrab;',
    orange: 'border-top-color:orange;',
    orangered: 'border-top-color:orangered;',
    orchid: 'border-top-color:orchid;',
    palegoldenrod: 'border-top-color:palegoldenrod;',
    palegreen: 'border-top-color:palegreen;',
    paleturquoise: 'border-top-color:paleturquoise;',
    palevioletred: 'border-top-color:palevioletred;',
    papayawhip: 'border-top-color:papayawhip;',
    peachpuff: 'border-top-color:peachpuff;',
    peru: 'border-top-color:peru;',
    pink: 'border-top-color:pink;',
    plum: 'border-top-color:plum;',
    powderblue: 'border-top-color:powderblue;',
    purple: 'border-top-color:purple;',
    rebeccapurple: 'border-top-color:rebeccapurple;',
    red: 'border-top-color:red;',
    revert: 'border-top-color:revert;',
    revertLayer: 'border-top-color:revert-layer;',
    rosybrown: 'border-top-color:rosybrown;',
    royalblue: 'border-top-color:royalblue;',
    saddlebrown: 'border-top-color:saddlebrown;',
    salmon: 'border-top-color:salmon;',
    sandybrown: 'border-top-color:sandybrown;',
    seagreen: 'border-top-color:seagreen;',
    seashell: 'border-top-color:seashell;',
    sienna: 'border-top-color:sienna;',
    silver: 'border-top-color:silver;',
    skyblue: 'border-top-color:skyblue;',
    slateblue: 'border-top-color:slateblue;',
    slategray: 'border-top-color:slategray;',
    slategrey: 'border-top-color:slategrey;',
    snow: 'border-top-color:snow;',
    springgreen: 'border-top-color:springgreen;',
    steelblue: 'border-top-color:steelblue;',
    tan: 'border-top-color:tan;',
    teal: 'border-top-color:teal;',
    thistle: 'border-top-color:thistle;',
    tomato: 'border-top-color:tomato;',
    transparent: 'border-top-color:transparent;',
    turquoise: 'border-top-color:turquoise;',
    unset: 'border-top-color:unset;',
    violet: 'border-top-color:violet;',
    wheat: 'border-top-color:wheat;',
    white: 'border-top-color:white;',
    whitesmoke: 'border-top-color:whitesmoke;',
    yellow: 'border-top-color:yellow;',
    yellowgreen: 'border-top-color:yellowgreen;',
  } as const;
}

type BorderTopColorCssKeywords = Readonly<ReturnType<typeof borderTopColorKeywords>>;
export interface BorderTopColorCss extends BorderTopColorCssKeywords {}
/** CSS 属性 border-top-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
 */
export class BorderTopColorCss extends CssProperty<Property.BorderTopColor> {
  constructor() {
    super('border-top-color');
    initializeBorderTopColorCss();
  }
}
let borderTopColorReady = false;
function initializeBorderTopColorCss(): void {
  if (borderTopColorReady) return;
  Object.assign(BorderTopColorCss.prototype, borderTopColorKeywords());
  Object.freeze(BorderTopColorCss.prototype);
  borderTopColorReady = true;
}

function borderTopLeftRadiusKeywords() {
  return {
    inherit: 'border-top-left-radius:inherit;',
    initial: 'border-top-left-radius:initial;',
    revert: 'border-top-left-radius:revert;',
    revertLayer: 'border-top-left-radius:revert-layer;',
    unset: 'border-top-left-radius:unset;',
  } as const;
}

type BorderTopLeftRadiusCssKeywords = Readonly<ReturnType<typeof borderTopLeftRadiusKeywords>>;
export interface BorderTopLeftRadiusCss extends BorderTopLeftRadiusCssKeywords {}
/** CSS 属性 border-top-left-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
 */
export class BorderTopLeftRadiusCss extends LengthCssProperty<Property.BorderTopLeftRadius> {
  constructor() {
    super('border-top-left-radius');
    initializeBorderTopLeftRadiusCss();
  }
}
let borderTopLeftRadiusReady = false;
function initializeBorderTopLeftRadiusCss(): void {
  if (borderTopLeftRadiusReady) return;
  Object.assign(BorderTopLeftRadiusCss.prototype, borderTopLeftRadiusKeywords());
  Object.freeze(BorderTopLeftRadiusCss.prototype);
  borderTopLeftRadiusReady = true;
}

function borderTopRightRadiusKeywords() {
  return {
    inherit: 'border-top-right-radius:inherit;',
    initial: 'border-top-right-radius:initial;',
    revert: 'border-top-right-radius:revert;',
    revertLayer: 'border-top-right-radius:revert-layer;',
    unset: 'border-top-right-radius:unset;',
  } as const;
}

type BorderTopRightRadiusCssKeywords = Readonly<ReturnType<typeof borderTopRightRadiusKeywords>>;
export interface BorderTopRightRadiusCss extends BorderTopRightRadiusCssKeywords {}
/** CSS 属性 border-top-right-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
 */
export class BorderTopRightRadiusCss extends LengthCssProperty<Property.BorderTopRightRadius> {
  constructor() {
    super('border-top-right-radius');
    initializeBorderTopRightRadiusCss();
  }
}
let borderTopRightRadiusReady = false;
function initializeBorderTopRightRadiusCss(): void {
  if (borderTopRightRadiusReady) return;
  Object.assign(BorderTopRightRadiusCss.prototype, borderTopRightRadiusKeywords());
  Object.freeze(BorderTopRightRadiusCss.prototype);
  borderTopRightRadiusReady = true;
}

function borderTopStyleKeywords() {
  return {
    dashed: 'border-top-style:dashed;',
    dotted: 'border-top-style:dotted;',
    double: 'border-top-style:double;',
    groove: 'border-top-style:groove;',
    hidden: 'border-top-style:hidden;',
    inherit: 'border-top-style:inherit;',
    initial: 'border-top-style:initial;',
    inset: 'border-top-style:inset;',
    none: 'border-top-style:none;',
    outset: 'border-top-style:outset;',
    revert: 'border-top-style:revert;',
    revertLayer: 'border-top-style:revert-layer;',
    ridge: 'border-top-style:ridge;',
    solid: 'border-top-style:solid;',
    unset: 'border-top-style:unset;',
  } as const;
}

type BorderTopStyleCssKeywords = Readonly<ReturnType<typeof borderTopStyleKeywords>>;
export interface BorderTopStyleCss extends BorderTopStyleCssKeywords {}
/** CSS 属性 border-top-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
 */
export class BorderTopStyleCss extends CssProperty<Property.BorderTopStyle> {
  constructor() {
    super('border-top-style');
    initializeBorderTopStyleCss();
  }
}
let borderTopStyleReady = false;
function initializeBorderTopStyleCss(): void {
  if (borderTopStyleReady) return;
  Object.assign(BorderTopStyleCss.prototype, borderTopStyleKeywords());
  Object.freeze(BorderTopStyleCss.prototype);
  borderTopStyleReady = true;
}

function borderTopWidthKeywords() {
  return {
    inherit: 'border-top-width:inherit;',
    initial: 'border-top-width:initial;',
    medium: 'border-top-width:medium;',
    revert: 'border-top-width:revert;',
    revertLayer: 'border-top-width:revert-layer;',
    thick: 'border-top-width:thick;',
    thin: 'border-top-width:thin;',
    unset: 'border-top-width:unset;',
  } as const;
}

type BorderTopWidthCssKeywords = Readonly<ReturnType<typeof borderTopWidthKeywords>>;
export interface BorderTopWidthCss extends BorderTopWidthCssKeywords {}
/** CSS 属性 border-top-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
 */
export class BorderTopWidthCss extends LengthCssProperty<Property.BorderTopWidth> {
  constructor() {
    super('border-top-width');
    initializeBorderTopWidthCss();
  }
}
let borderTopWidthReady = false;
function initializeBorderTopWidthCss(): void {
  if (borderTopWidthReady) return;
  Object.assign(BorderTopWidthCss.prototype, borderTopWidthKeywords());
  Object.freeze(BorderTopWidthCss.prototype);
  borderTopWidthReady = true;
}

function borderWidthKeywords() {
  return {
    inherit: 'border-width:inherit;',
    initial: 'border-width:initial;',
    medium: 'border-width:medium;',
    revert: 'border-width:revert;',
    revertLayer: 'border-width:revert-layer;',
    thick: 'border-width:thick;',
    thin: 'border-width:thin;',
    unset: 'border-width:unset;',
  } as const;
}

type BorderWidthCssKeywords = Readonly<ReturnType<typeof borderWidthKeywords>>;
export interface BorderWidthCss extends BorderWidthCssKeywords {}
/** CSS 属性 border-width。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
 */
export class BorderWidthCss extends LengthCssProperty<Property.BorderWidth> {
  constructor() {
    super('border-width');
    initializeBorderWidthCss();
  }
}
let borderWidthReady = false;
function initializeBorderWidthCss(): void {
  if (borderWidthReady) return;
  Object.assign(BorderWidthCss.prototype, borderWidthKeywords());
  Object.freeze(BorderWidthCss.prototype);
  borderWidthReady = true;
}

function bottomKeywords() {
  return {
    auto: 'bottom:auto;',
    inherit: 'bottom:inherit;',
    initial: 'bottom:initial;',
    revert: 'bottom:revert;',
    revertLayer: 'bottom:revert-layer;',
    unset: 'bottom:unset;',
  } as const;
}

type BottomCssKeywords = Readonly<ReturnType<typeof bottomKeywords>>;
export interface BottomCss extends BottomCssKeywords {}
/** CSS 属性 bottom；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
 */
export class BottomCss extends LengthCssProperty<Property.Bottom> {
  constructor() {
    super('bottom');
    initializeBottomCss();
  }
}
let bottomReady = false;
function initializeBottomCss(): void {
  if (bottomReady) return;
  Object.assign(BottomCss.prototype, bottomKeywords());
  Object.freeze(BottomCss.prototype);
  bottomReady = true;
}

function boxDecorationBreakKeywords() {
  return {
    clone: 'box-decoration-break:clone;',
    inherit: 'box-decoration-break:inherit;',
    initial: 'box-decoration-break:initial;',
    revert: 'box-decoration-break:revert;',
    revertLayer: 'box-decoration-break:revert-layer;',
    slice: 'box-decoration-break:slice;',
    unset: 'box-decoration-break:unset;',
  } as const;
}

type BoxDecorationBreakCssKeywords = Readonly<ReturnType<typeof boxDecorationBreakKeywords>>;
export interface BoxDecorationBreakCss extends BoxDecorationBreakCssKeywords {}
/** CSS 属性 box-decoration-break；初始值 slice。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
 */
export class BoxDecorationBreakCss extends CssProperty<Property.BoxDecorationBreak> {
  constructor() {
    super('box-decoration-break');
    initializeBoxDecorationBreakCss();
  }
}
let boxDecorationBreakReady = false;
function initializeBoxDecorationBreakCss(): void {
  if (boxDecorationBreakReady) return;
  Object.assign(BoxDecorationBreakCss.prototype, boxDecorationBreakKeywords());
  Object.freeze(BoxDecorationBreakCss.prototype);
  boxDecorationBreakReady = true;
}

function boxShadowKeywords() {
  return {
    inherit: 'box-shadow:inherit;',
    initial: 'box-shadow:initial;',
    none: 'box-shadow:none;',
    revert: 'box-shadow:revert;',
    revertLayer: 'box-shadow:revert-layer;',
    unset: 'box-shadow:unset;',
  } as const;
}

type BoxShadowCssKeywords = Readonly<ReturnType<typeof boxShadowKeywords>>;
export interface BoxShadowCss extends BoxShadowCssKeywords {}
/** CSS 属性 box-shadow；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
 */
export class BoxShadowCss extends CssProperty<Property.BoxShadow> {
  constructor() {
    super('box-shadow');
    initializeBoxShadowCss();
  }
}
let boxShadowReady = false;
function initializeBoxShadowCss(): void {
  if (boxShadowReady) return;
  Object.assign(BoxShadowCss.prototype, boxShadowKeywords());
  Object.freeze(BoxShadowCss.prototype);
  boxShadowReady = true;
}

function boxSizingKeywords() {
  return {
    borderBox: 'box-sizing:border-box;',
    contentBox: 'box-sizing:content-box;',
    inherit: 'box-sizing:inherit;',
    initial: 'box-sizing:initial;',
    revert: 'box-sizing:revert;',
    revertLayer: 'box-sizing:revert-layer;',
    unset: 'box-sizing:unset;',
  } as const;
}

type BoxSizingCssKeywords = Readonly<ReturnType<typeof boxSizingKeywords>>;
export interface BoxSizingCss extends BoxSizingCssKeywords {}
/** CSS 属性 box-sizing；初始值 content-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
 */
export class BoxSizingCss extends CssProperty<Property.BoxSizing> {
  constructor() {
    super('box-sizing');
    initializeBoxSizingCss();
  }
}
let boxSizingReady = false;
function initializeBoxSizingCss(): void {
  if (boxSizingReady) return;
  Object.assign(BoxSizingCss.prototype, boxSizingKeywords());
  Object.freeze(BoxSizingCss.prototype);
  boxSizingReady = true;
}

function breakAfterKeywords() {
  return {
    all: 'break-after:all;',
    always: 'break-after:always;',
    auto: 'break-after:auto;',
    avoid: 'break-after:avoid;',
    avoidColumn: 'break-after:avoid-column;',
    avoidPage: 'break-after:avoid-page;',
    avoidRegion: 'break-after:avoid-region;',
    column: 'break-after:column;',
    inherit: 'break-after:inherit;',
    initial: 'break-after:initial;',
    left: 'break-after:left;',
    page: 'break-after:page;',
    recto: 'break-after:recto;',
    region: 'break-after:region;',
    revert: 'break-after:revert;',
    revertLayer: 'break-after:revert-layer;',
    right: 'break-after:right;',
    unset: 'break-after:unset;',
    verso: 'break-after:verso;',
  } as const;
}

type BreakAfterCssKeywords = Readonly<ReturnType<typeof breakAfterKeywords>>;
export interface BreakAfterCss extends BreakAfterCssKeywords {}
/** CSS 属性 break-after；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
 */
export class BreakAfterCss extends CssProperty<Property.BreakAfter> {
  constructor() {
    super('break-after');
    initializeBreakAfterCss();
  }
}
let breakAfterReady = false;
function initializeBreakAfterCss(): void {
  if (breakAfterReady) return;
  Object.assign(BreakAfterCss.prototype, breakAfterKeywords());
  Object.freeze(BreakAfterCss.prototype);
  breakAfterReady = true;
}

function breakBeforeKeywords() {
  return {
    all: 'break-before:all;',
    always: 'break-before:always;',
    auto: 'break-before:auto;',
    avoid: 'break-before:avoid;',
    avoidColumn: 'break-before:avoid-column;',
    avoidPage: 'break-before:avoid-page;',
    avoidRegion: 'break-before:avoid-region;',
    column: 'break-before:column;',
    inherit: 'break-before:inherit;',
    initial: 'break-before:initial;',
    left: 'break-before:left;',
    page: 'break-before:page;',
    recto: 'break-before:recto;',
    region: 'break-before:region;',
    revert: 'break-before:revert;',
    revertLayer: 'break-before:revert-layer;',
    right: 'break-before:right;',
    unset: 'break-before:unset;',
    verso: 'break-before:verso;',
  } as const;
}

type BreakBeforeCssKeywords = Readonly<ReturnType<typeof breakBeforeKeywords>>;
export interface BreakBeforeCss extends BreakBeforeCssKeywords {}
/** CSS 属性 break-before；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
 */
export class BreakBeforeCss extends CssProperty<Property.BreakBefore> {
  constructor() {
    super('break-before');
    initializeBreakBeforeCss();
  }
}
let breakBeforeReady = false;
function initializeBreakBeforeCss(): void {
  if (breakBeforeReady) return;
  Object.assign(BreakBeforeCss.prototype, breakBeforeKeywords());
  Object.freeze(BreakBeforeCss.prototype);
  breakBeforeReady = true;
}

function breakInsideKeywords() {
  return {
    auto: 'break-inside:auto;',
    avoid: 'break-inside:avoid;',
    avoidColumn: 'break-inside:avoid-column;',
    avoidPage: 'break-inside:avoid-page;',
    avoidRegion: 'break-inside:avoid-region;',
    inherit: 'break-inside:inherit;',
    initial: 'break-inside:initial;',
    revert: 'break-inside:revert;',
    revertLayer: 'break-inside:revert-layer;',
    unset: 'break-inside:unset;',
  } as const;
}

type BreakInsideCssKeywords = Readonly<ReturnType<typeof breakInsideKeywords>>;
export interface BreakInsideCss extends BreakInsideCssKeywords {}
/** CSS 属性 break-inside；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
 */
export class BreakInsideCss extends CssProperty<Property.BreakInside> {
  constructor() {
    super('break-inside');
    initializeBreakInsideCss();
  }
}
let breakInsideReady = false;
function initializeBreakInsideCss(): void {
  if (breakInsideReady) return;
  Object.assign(BreakInsideCss.prototype, breakInsideKeywords());
  Object.freeze(BreakInsideCss.prototype);
  breakInsideReady = true;
}
