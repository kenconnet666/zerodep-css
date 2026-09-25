// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

function accentColorKeywords() {
  return {
    AccentColor: 'accent-color:AccentColor;',
    AccentColorText: 'accent-color:AccentColorText;',
    ActiveBorder: 'accent-color:ActiveBorder;',
    ActiveCaption: 'accent-color:ActiveCaption;',
    ActiveText: 'accent-color:ActiveText;',
    AppWorkspace: 'accent-color:AppWorkspace;',
    Background: 'accent-color:Background;',
    ButtonBorder: 'accent-color:ButtonBorder;',
    ButtonFace: 'accent-color:ButtonFace;',
    ButtonHighlight: 'accent-color:ButtonHighlight;',
    ButtonShadow: 'accent-color:ButtonShadow;',
    ButtonText: 'accent-color:ButtonText;',
    Canvas: 'accent-color:Canvas;',
    CanvasText: 'accent-color:CanvasText;',
    CaptionText: 'accent-color:CaptionText;',
    Field: 'accent-color:Field;',
    FieldText: 'accent-color:FieldText;',
    GrayText: 'accent-color:GrayText;',
    Highlight: 'accent-color:Highlight;',
    HighlightText: 'accent-color:HighlightText;',
    InactiveBorder: 'accent-color:InactiveBorder;',
    InactiveCaption: 'accent-color:InactiveCaption;',
    InactiveCaptionText: 'accent-color:InactiveCaptionText;',
    InfoBackground: 'accent-color:InfoBackground;',
    InfoText: 'accent-color:InfoText;',
    LinkText: 'accent-color:LinkText;',
    Mark: 'accent-color:Mark;',
    MarkText: 'accent-color:MarkText;',
    Menu: 'accent-color:Menu;',
    MenuText: 'accent-color:MenuText;',
    Scrollbar: 'accent-color:Scrollbar;',
    SelectedItem: 'accent-color:SelectedItem;',
    SelectedItemText: 'accent-color:SelectedItemText;',
    ThreeDDarkShadow: 'accent-color:ThreeDDarkShadow;',
    ThreeDFace: 'accent-color:ThreeDFace;',
    ThreeDHighlight: 'accent-color:ThreeDHighlight;',
    ThreeDLightShadow: 'accent-color:ThreeDLightShadow;',
    ThreeDShadow: 'accent-color:ThreeDShadow;',
    VisitedText: 'accent-color:VisitedText;',
    Window: 'accent-color:Window;',
    WindowFrame: 'accent-color:WindowFrame;',
    WindowText: 'accent-color:WindowText;',
    aliceblue: 'accent-color:aliceblue;',
    antiquewhite: 'accent-color:antiquewhite;',
    aqua: 'accent-color:aqua;',
    aquamarine: 'accent-color:aquamarine;',
    auto: 'accent-color:auto;',
    azure: 'accent-color:azure;',
    beige: 'accent-color:beige;',
    bisque: 'accent-color:bisque;',
    black: 'accent-color:black;',
    blanchedalmond: 'accent-color:blanchedalmond;',
    blue: 'accent-color:blue;',
    blueviolet: 'accent-color:blueviolet;',
    brown: 'accent-color:brown;',
    burlywood: 'accent-color:burlywood;',
    cadetblue: 'accent-color:cadetblue;',
    chartreuse: 'accent-color:chartreuse;',
    chocolate: 'accent-color:chocolate;',
    coral: 'accent-color:coral;',
    cornflowerblue: 'accent-color:cornflowerblue;',
    cornsilk: 'accent-color:cornsilk;',
    crimson: 'accent-color:crimson;',
    currentColor: 'accent-color:currentColor;',
    cyan: 'accent-color:cyan;',
    darkblue: 'accent-color:darkblue;',
    darkcyan: 'accent-color:darkcyan;',
    darkgoldenrod: 'accent-color:darkgoldenrod;',
    darkgray: 'accent-color:darkgray;',
    darkgreen: 'accent-color:darkgreen;',
    darkgrey: 'accent-color:darkgrey;',
    darkkhaki: 'accent-color:darkkhaki;',
    darkmagenta: 'accent-color:darkmagenta;',
    darkolivegreen: 'accent-color:darkolivegreen;',
    darkorange: 'accent-color:darkorange;',
    darkorchid: 'accent-color:darkorchid;',
    darkred: 'accent-color:darkred;',
    darksalmon: 'accent-color:darksalmon;',
    darkseagreen: 'accent-color:darkseagreen;',
    darkslateblue: 'accent-color:darkslateblue;',
    darkslategray: 'accent-color:darkslategray;',
    darkslategrey: 'accent-color:darkslategrey;',
    darkturquoise: 'accent-color:darkturquoise;',
    darkviolet: 'accent-color:darkviolet;',
    deeppink: 'accent-color:deeppink;',
    deepskyblue: 'accent-color:deepskyblue;',
    dimgray: 'accent-color:dimgray;',
    dimgrey: 'accent-color:dimgrey;',
    dodgerblue: 'accent-color:dodgerblue;',
    firebrick: 'accent-color:firebrick;',
    floralwhite: 'accent-color:floralwhite;',
    forestgreen: 'accent-color:forestgreen;',
    fuchsia: 'accent-color:fuchsia;',
    gainsboro: 'accent-color:gainsboro;',
    ghostwhite: 'accent-color:ghostwhite;',
    gold: 'accent-color:gold;',
    goldenrod: 'accent-color:goldenrod;',
    gray: 'accent-color:gray;',
    green: 'accent-color:green;',
    greenyellow: 'accent-color:greenyellow;',
    grey: 'accent-color:grey;',
    honeydew: 'accent-color:honeydew;',
    hotpink: 'accent-color:hotpink;',
    indianred: 'accent-color:indianred;',
    indigo: 'accent-color:indigo;',
    inherit: 'accent-color:inherit;',
    initial: 'accent-color:initial;',
    ivory: 'accent-color:ivory;',
    khaki: 'accent-color:khaki;',
    lavender: 'accent-color:lavender;',
    lavenderblush: 'accent-color:lavenderblush;',
    lawngreen: 'accent-color:lawngreen;',
    lemonchiffon: 'accent-color:lemonchiffon;',
    lightblue: 'accent-color:lightblue;',
    lightcoral: 'accent-color:lightcoral;',
    lightcyan: 'accent-color:lightcyan;',
    lightgoldenrodyellow: 'accent-color:lightgoldenrodyellow;',
    lightgray: 'accent-color:lightgray;',
    lightgreen: 'accent-color:lightgreen;',
    lightgrey: 'accent-color:lightgrey;',
    lightpink: 'accent-color:lightpink;',
    lightsalmon: 'accent-color:lightsalmon;',
    lightseagreen: 'accent-color:lightseagreen;',
    lightskyblue: 'accent-color:lightskyblue;',
    lightslategray: 'accent-color:lightslategray;',
    lightslategrey: 'accent-color:lightslategrey;',
    lightsteelblue: 'accent-color:lightsteelblue;',
    lightyellow: 'accent-color:lightyellow;',
    lime: 'accent-color:lime;',
    limegreen: 'accent-color:limegreen;',
    linen: 'accent-color:linen;',
    magenta: 'accent-color:magenta;',
    maroon: 'accent-color:maroon;',
    mediumaquamarine: 'accent-color:mediumaquamarine;',
    mediumblue: 'accent-color:mediumblue;',
    mediumorchid: 'accent-color:mediumorchid;',
    mediumpurple: 'accent-color:mediumpurple;',
    mediumseagreen: 'accent-color:mediumseagreen;',
    mediumslateblue: 'accent-color:mediumslateblue;',
    mediumspringgreen: 'accent-color:mediumspringgreen;',
    mediumturquoise: 'accent-color:mediumturquoise;',
    mediumvioletred: 'accent-color:mediumvioletred;',
    midnightblue: 'accent-color:midnightblue;',
    mintcream: 'accent-color:mintcream;',
    mistyrose: 'accent-color:mistyrose;',
    moccasin: 'accent-color:moccasin;',
    navajowhite: 'accent-color:navajowhite;',
    navy: 'accent-color:navy;',
    oldlace: 'accent-color:oldlace;',
    olive: 'accent-color:olive;',
    olivedrab: 'accent-color:olivedrab;',
    orange: 'accent-color:orange;',
    orangered: 'accent-color:orangered;',
    orchid: 'accent-color:orchid;',
    palegoldenrod: 'accent-color:palegoldenrod;',
    palegreen: 'accent-color:palegreen;',
    paleturquoise: 'accent-color:paleturquoise;',
    palevioletred: 'accent-color:palevioletred;',
    papayawhip: 'accent-color:papayawhip;',
    peachpuff: 'accent-color:peachpuff;',
    peru: 'accent-color:peru;',
    pink: 'accent-color:pink;',
    plum: 'accent-color:plum;',
    powderblue: 'accent-color:powderblue;',
    purple: 'accent-color:purple;',
    rebeccapurple: 'accent-color:rebeccapurple;',
    red: 'accent-color:red;',
    revert: 'accent-color:revert;',
    revertLayer: 'accent-color:revert-layer;',
    rosybrown: 'accent-color:rosybrown;',
    royalblue: 'accent-color:royalblue;',
    saddlebrown: 'accent-color:saddlebrown;',
    salmon: 'accent-color:salmon;',
    sandybrown: 'accent-color:sandybrown;',
    seagreen: 'accent-color:seagreen;',
    seashell: 'accent-color:seashell;',
    sienna: 'accent-color:sienna;',
    silver: 'accent-color:silver;',
    skyblue: 'accent-color:skyblue;',
    slateblue: 'accent-color:slateblue;',
    slategray: 'accent-color:slategray;',
    slategrey: 'accent-color:slategrey;',
    snow: 'accent-color:snow;',
    springgreen: 'accent-color:springgreen;',
    steelblue: 'accent-color:steelblue;',
    tan: 'accent-color:tan;',
    teal: 'accent-color:teal;',
    thistle: 'accent-color:thistle;',
    tomato: 'accent-color:tomato;',
    transparent: 'accent-color:transparent;',
    turquoise: 'accent-color:turquoise;',
    unset: 'accent-color:unset;',
    violet: 'accent-color:violet;',
    wheat: 'accent-color:wheat;',
    white: 'accent-color:white;',
    whitesmoke: 'accent-color:whitesmoke;',
    yellow: 'accent-color:yellow;',
    yellowgreen: 'accent-color:yellowgreen;',
  } as const;
}

type AccentColorCssKeywords = Readonly<ReturnType<typeof accentColorKeywords>>;
export interface AccentColorCss extends AccentColorCssKeywords {}
/** CSS 属性 accent-color；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
 */
export class AccentColorCss extends CssProperty<Property.AccentColor> {
  constructor() {
    super('accent-color');
    initializeAccentColorCss();
  }
}
let accentColorReady = false;
function initializeAccentColorCss(): void {
  if (accentColorReady) return;
  Object.assign(AccentColorCss.prototype, accentColorKeywords());
  Object.freeze(AccentColorCss.prototype);
  accentColorReady = true;
}

function alignContentKeywords() {
  return {
    baseline: 'align-content:baseline;',
    center: 'align-content:center;',
    end: 'align-content:end;',
    flexEnd: 'align-content:flex-end;',
    flexStart: 'align-content:flex-start;',
    inherit: 'align-content:inherit;',
    initial: 'align-content:initial;',
    normal: 'align-content:normal;',
    revert: 'align-content:revert;',
    revertLayer: 'align-content:revert-layer;',
    spaceAround: 'align-content:space-around;',
    spaceBetween: 'align-content:space-between;',
    spaceEvenly: 'align-content:space-evenly;',
    start: 'align-content:start;',
    stretch: 'align-content:stretch;',
    unset: 'align-content:unset;',
  } as const;
}

type AlignContentCssKeywords = Readonly<ReturnType<typeof alignContentKeywords>>;
export interface AlignContentCss extends AlignContentCssKeywords {}
/** CSS 属性 align-content；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
 */
export class AlignContentCss extends CssProperty<Property.AlignContent> {
  constructor() {
    super('align-content');
    initializeAlignContentCss();
  }
}
let alignContentReady = false;
function initializeAlignContentCss(): void {
  if (alignContentReady) return;
  Object.assign(AlignContentCss.prototype, alignContentKeywords());
  Object.freeze(AlignContentCss.prototype);
  alignContentReady = true;
}

function alignItemsKeywords() {
  return {
    anchorCenter: 'align-items:anchor-center;',
    baseline: 'align-items:baseline;',
    center: 'align-items:center;',
    end: 'align-items:end;',
    flexEnd: 'align-items:flex-end;',
    flexStart: 'align-items:flex-start;',
    inherit: 'align-items:inherit;',
    initial: 'align-items:initial;',
    normal: 'align-items:normal;',
    revert: 'align-items:revert;',
    revertLayer: 'align-items:revert-layer;',
    selfEnd: 'align-items:self-end;',
    selfStart: 'align-items:self-start;',
    start: 'align-items:start;',
    stretch: 'align-items:stretch;',
    unset: 'align-items:unset;',
  } as const;
}

type AlignItemsCssKeywords = Readonly<ReturnType<typeof alignItemsKeywords>>;
export interface AlignItemsCss extends AlignItemsCssKeywords {}
/** CSS 属性 align-items；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
 */
export class AlignItemsCss extends CssProperty<Property.AlignItems> {
  constructor() {
    super('align-items');
    initializeAlignItemsCss();
  }
}
let alignItemsReady = false;
function initializeAlignItemsCss(): void {
  if (alignItemsReady) return;
  Object.assign(AlignItemsCss.prototype, alignItemsKeywords());
  Object.freeze(AlignItemsCss.prototype);
  alignItemsReady = true;
}

function alignSelfKeywords() {
  return {
    anchorCenter: 'align-self:anchor-center;',
    auto: 'align-self:auto;',
    baseline: 'align-self:baseline;',
    center: 'align-self:center;',
    end: 'align-self:end;',
    flexEnd: 'align-self:flex-end;',
    flexStart: 'align-self:flex-start;',
    inherit: 'align-self:inherit;',
    initial: 'align-self:initial;',
    normal: 'align-self:normal;',
    revert: 'align-self:revert;',
    revertLayer: 'align-self:revert-layer;',
    selfEnd: 'align-self:self-end;',
    selfStart: 'align-self:self-start;',
    start: 'align-self:start;',
    stretch: 'align-self:stretch;',
    unset: 'align-self:unset;',
  } as const;
}

type AlignSelfCssKeywords = Readonly<ReturnType<typeof alignSelfKeywords>>;
export interface AlignSelfCss extends AlignSelfCssKeywords {}
/** CSS 属性 align-self；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
 */
export class AlignSelfCss extends CssProperty<Property.AlignSelf> {
  constructor() {
    super('align-self');
    initializeAlignSelfCss();
  }
}
let alignSelfReady = false;
function initializeAlignSelfCss(): void {
  if (alignSelfReady) return;
  Object.assign(AlignSelfCss.prototype, alignSelfKeywords());
  Object.freeze(AlignSelfCss.prototype);
  alignSelfReady = true;
}

function alignTracksKeywords() {
  return {
    baseline: 'align-tracks:baseline;',
    center: 'align-tracks:center;',
    end: 'align-tracks:end;',
    flexEnd: 'align-tracks:flex-end;',
    flexStart: 'align-tracks:flex-start;',
    inherit: 'align-tracks:inherit;',
    initial: 'align-tracks:initial;',
    normal: 'align-tracks:normal;',
    revert: 'align-tracks:revert;',
    revertLayer: 'align-tracks:revert-layer;',
    spaceAround: 'align-tracks:space-around;',
    spaceBetween: 'align-tracks:space-between;',
    spaceEvenly: 'align-tracks:space-evenly;',
    start: 'align-tracks:start;',
    stretch: 'align-tracks:stretch;',
    unset: 'align-tracks:unset;',
  } as const;
}

type AlignTracksCssKeywords = Readonly<ReturnType<typeof alignTracksKeywords>>;
export interface AlignTracksCss extends AlignTracksCssKeywords {}
/** CSS 属性 align-tracks；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
 */
export class AlignTracksCss extends CssProperty<Property.AlignTracks> {
  constructor() {
    super('align-tracks');
    initializeAlignTracksCss();
  }
}
let alignTracksReady = false;
function initializeAlignTracksCss(): void {
  if (alignTracksReady) return;
  Object.assign(AlignTracksCss.prototype, alignTracksKeywords());
  Object.freeze(AlignTracksCss.prototype);
  alignTracksReady = true;
}

function alignmentBaselineKeywords() {
  return {
    alphabetic: 'alignment-baseline:alphabetic;',
    baseline: 'alignment-baseline:baseline;',
    central: 'alignment-baseline:central;',
    ideographic: 'alignment-baseline:ideographic;',
    inherit: 'alignment-baseline:inherit;',
    initial: 'alignment-baseline:initial;',
    mathematical: 'alignment-baseline:mathematical;',
    middle: 'alignment-baseline:middle;',
    revert: 'alignment-baseline:revert;',
    revertLayer: 'alignment-baseline:revert-layer;',
    textAfterEdge: 'alignment-baseline:text-after-edge;',
    textBeforeEdge: 'alignment-baseline:text-before-edge;',
    unset: 'alignment-baseline:unset;',
  } as const;
}

type AlignmentBaselineCssKeywords = Readonly<ReturnType<typeof alignmentBaselineKeywords>>;
export interface AlignmentBaselineCss extends AlignmentBaselineCssKeywords {}
/** CSS 属性 alignment-baseline；初始值 baseline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
 */
export class AlignmentBaselineCss extends CssProperty<Property.AlignmentBaseline> {
  constructor() {
    super('alignment-baseline');
    initializeAlignmentBaselineCss();
  }
}
let alignmentBaselineReady = false;
function initializeAlignmentBaselineCss(): void {
  if (alignmentBaselineReady) return;
  Object.assign(AlignmentBaselineCss.prototype, alignmentBaselineKeywords());
  Object.freeze(AlignmentBaselineCss.prototype);
  alignmentBaselineReady = true;
}

function allKeywords() {
  return {
    inherit: 'all:inherit;',
    initial: 'all:initial;',
    revert: 'all:revert;',
    revertLayer: 'all:revert-layer;',
    unset: 'all:unset;',
  } as const;
}

type AllCssKeywords = Readonly<ReturnType<typeof allKeywords>>;
export interface AllCss extends AllCssKeywords {}
/** CSS 属性 all。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
 */
export class AllCss extends CssProperty<Property.All> {
  constructor() {
    super('all');
    initializeAllCss();
  }
}
let allReady = false;
function initializeAllCss(): void {
  if (allReady) return;
  Object.assign(AllCss.prototype, allKeywords());
  Object.freeze(AllCss.prototype);
  allReady = true;
}

function anchorNameKeywords() {
  return {
    inherit: 'anchor-name:inherit;',
    initial: 'anchor-name:initial;',
    none: 'anchor-name:none;',
    revert: 'anchor-name:revert;',
    revertLayer: 'anchor-name:revert-layer;',
    unset: 'anchor-name:unset;',
  } as const;
}

type AnchorNameCssKeywords = Readonly<ReturnType<typeof anchorNameKeywords>>;
export interface AnchorNameCss extends AnchorNameCssKeywords {}
/** CSS 属性 anchor-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
 */
export class AnchorNameCss extends CssProperty<Property.AnchorName> {
  constructor() {
    super('anchor-name');
    initializeAnchorNameCss();
  }
}
let anchorNameReady = false;
function initializeAnchorNameCss(): void {
  if (anchorNameReady) return;
  Object.assign(AnchorNameCss.prototype, anchorNameKeywords());
  Object.freeze(AnchorNameCss.prototype);
  anchorNameReady = true;
}

function anchorScopeKeywords() {
  return {
    all: 'anchor-scope:all;',
    inherit: 'anchor-scope:inherit;',
    initial: 'anchor-scope:initial;',
    none: 'anchor-scope:none;',
    revert: 'anchor-scope:revert;',
    revertLayer: 'anchor-scope:revert-layer;',
    unset: 'anchor-scope:unset;',
  } as const;
}

type AnchorScopeCssKeywords = Readonly<ReturnType<typeof anchorScopeKeywords>>;
export interface AnchorScopeCss extends AnchorScopeCssKeywords {}
/** CSS 属性 anchor-scope；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
 */
export class AnchorScopeCss extends CssProperty<Property.AnchorScope> {
  constructor() {
    super('anchor-scope');
    initializeAnchorScopeCss();
  }
}
let anchorScopeReady = false;
function initializeAnchorScopeCss(): void {
  if (anchorScopeReady) return;
  Object.assign(AnchorScopeCss.prototype, anchorScopeKeywords());
  Object.freeze(AnchorScopeCss.prototype);
  anchorScopeReady = true;
}

function animationKeywords() {
  return {
    alternate: 'animation:alternate;',
    alternateReverse: 'animation:alternate-reverse;',
    auto: 'animation:auto;',
    backwards: 'animation:backwards;',
    both: 'animation:both;',
    ease: 'animation:ease;',
    easeIn: 'animation:ease-in;',
    easeInOut: 'animation:ease-in-out;',
    easeOut: 'animation:ease-out;',
    forwards: 'animation:forwards;',
    infinite: 'animation:infinite;',
    inherit: 'animation:inherit;',
    initial: 'animation:initial;',
    linear: 'animation:linear;',
    none: 'animation:none;',
    normal: 'animation:normal;',
    paused: 'animation:paused;',
    reverse: 'animation:reverse;',
    revert: 'animation:revert;',
    revertLayer: 'animation:revert-layer;',
    running: 'animation:running;',
    stepEnd: 'animation:step-end;',
    stepStart: 'animation:step-start;',
    unset: 'animation:unset;',
  } as const;
}

type AnimationCssKeywords = Readonly<ReturnType<typeof animationKeywords>>;
export interface AnimationCss extends AnimationCssKeywords {}
/** CSS 属性 animation。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
 */
export class AnimationCss extends CssProperty<Property.Animation> {
  constructor() {
    super('animation');
    initializeAnimationCss();
  }
}
let animationReady = false;
function initializeAnimationCss(): void {
  if (animationReady) return;
  Object.assign(AnimationCss.prototype, animationKeywords());
  Object.freeze(AnimationCss.prototype);
  animationReady = true;
}

function animationCompositionKeywords() {
  return {
    accumulate: 'animation-composition:accumulate;',
    add: 'animation-composition:add;',
    inherit: 'animation-composition:inherit;',
    initial: 'animation-composition:initial;',
    replace: 'animation-composition:replace;',
    revert: 'animation-composition:revert;',
    revertLayer: 'animation-composition:revert-layer;',
    unset: 'animation-composition:unset;',
  } as const;
}

type AnimationCompositionCssKeywords = Readonly<ReturnType<typeof animationCompositionKeywords>>;
export interface AnimationCompositionCss extends AnimationCompositionCssKeywords {}
/** CSS 属性 animation-composition；初始值 replace。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
 */
export class AnimationCompositionCss extends CssProperty<Property.AnimationComposition> {
  constructor() {
    super('animation-composition');
    initializeAnimationCompositionCss();
  }
}
let animationCompositionReady = false;
function initializeAnimationCompositionCss(): void {
  if (animationCompositionReady) return;
  Object.assign(AnimationCompositionCss.prototype, animationCompositionKeywords());
  Object.freeze(AnimationCompositionCss.prototype);
  animationCompositionReady = true;
}

function animationDelayKeywords() {
  return {
    inherit: 'animation-delay:inherit;',
    initial: 'animation-delay:initial;',
    revert: 'animation-delay:revert;',
    revertLayer: 'animation-delay:revert-layer;',
    unset: 'animation-delay:unset;',
  } as const;
}

type AnimationDelayCssKeywords = Readonly<ReturnType<typeof animationDelayKeywords>>;
export interface AnimationDelayCss extends AnimationDelayCssKeywords {}
/** CSS 属性 animation-delay；初始值 0s。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
 */
export class AnimationDelayCss extends CssProperty<Property.AnimationDelay> {
  constructor() {
    super('animation-delay');
    initializeAnimationDelayCss();
  }
}
let animationDelayReady = false;
function initializeAnimationDelayCss(): void {
  if (animationDelayReady) return;
  Object.assign(AnimationDelayCss.prototype, animationDelayKeywords());
  Object.freeze(AnimationDelayCss.prototype);
  animationDelayReady = true;
}

function animationDirectionKeywords() {
  return {
    alternate: 'animation-direction:alternate;',
    alternateReverse: 'animation-direction:alternate-reverse;',
    inherit: 'animation-direction:inherit;',
    initial: 'animation-direction:initial;',
    normal: 'animation-direction:normal;',
    reverse: 'animation-direction:reverse;',
    revert: 'animation-direction:revert;',
    revertLayer: 'animation-direction:revert-layer;',
    unset: 'animation-direction:unset;',
  } as const;
}

type AnimationDirectionCssKeywords = Readonly<ReturnType<typeof animationDirectionKeywords>>;
export interface AnimationDirectionCss extends AnimationDirectionCssKeywords {}
/** CSS 属性 animation-direction；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
 */
export class AnimationDirectionCss extends CssProperty<Property.AnimationDirection> {
  constructor() {
    super('animation-direction');
    initializeAnimationDirectionCss();
  }
}
let animationDirectionReady = false;
function initializeAnimationDirectionCss(): void {
  if (animationDirectionReady) return;
  Object.assign(AnimationDirectionCss.prototype, animationDirectionKeywords());
  Object.freeze(AnimationDirectionCss.prototype);
  animationDirectionReady = true;
}

function animationDurationKeywords() {
  return {
    auto: 'animation-duration:auto;',
    inherit: 'animation-duration:inherit;',
    initial: 'animation-duration:initial;',
    revert: 'animation-duration:revert;',
    revertLayer: 'animation-duration:revert-layer;',
    unset: 'animation-duration:unset;',
  } as const;
}

type AnimationDurationCssKeywords = Readonly<ReturnType<typeof animationDurationKeywords>>;
export interface AnimationDurationCss extends AnimationDurationCssKeywords {}
/** CSS 属性 animation-duration；初始值 0s。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
 */
export class AnimationDurationCss extends CssProperty<Property.AnimationDuration> {
  constructor() {
    super('animation-duration');
    initializeAnimationDurationCss();
  }
}
let animationDurationReady = false;
function initializeAnimationDurationCss(): void {
  if (animationDurationReady) return;
  Object.assign(AnimationDurationCss.prototype, animationDurationKeywords());
  Object.freeze(AnimationDurationCss.prototype);
  animationDurationReady = true;
}

function animationFillModeKeywords() {
  return {
    backwards: 'animation-fill-mode:backwards;',
    both: 'animation-fill-mode:both;',
    forwards: 'animation-fill-mode:forwards;',
    inherit: 'animation-fill-mode:inherit;',
    initial: 'animation-fill-mode:initial;',
    none: 'animation-fill-mode:none;',
    revert: 'animation-fill-mode:revert;',
    revertLayer: 'animation-fill-mode:revert-layer;',
    unset: 'animation-fill-mode:unset;',
  } as const;
}

type AnimationFillModeCssKeywords = Readonly<ReturnType<typeof animationFillModeKeywords>>;
export interface AnimationFillModeCss extends AnimationFillModeCssKeywords {}
/** CSS 属性 animation-fill-mode；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
 */
export class AnimationFillModeCss extends CssProperty<Property.AnimationFillMode> {
  constructor() {
    super('animation-fill-mode');
    initializeAnimationFillModeCss();
  }
}
let animationFillModeReady = false;
function initializeAnimationFillModeCss(): void {
  if (animationFillModeReady) return;
  Object.assign(AnimationFillModeCss.prototype, animationFillModeKeywords());
  Object.freeze(AnimationFillModeCss.prototype);
  animationFillModeReady = true;
}

function animationIterationCountKeywords() {
  return {
    infinite: 'animation-iteration-count:infinite;',
    inherit: 'animation-iteration-count:inherit;',
    initial: 'animation-iteration-count:initial;',
    revert: 'animation-iteration-count:revert;',
    revertLayer: 'animation-iteration-count:revert-layer;',
    unset: 'animation-iteration-count:unset;',
  } as const;
}

type AnimationIterationCountCssKeywords = Readonly<
  ReturnType<typeof animationIterationCountKeywords>
>;
export interface AnimationIterationCountCss extends AnimationIterationCountCssKeywords {}
/** CSS 属性 animation-iteration-count；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
 */
export class AnimationIterationCountCss extends CssProperty<Property.AnimationIterationCount> {
  constructor() {
    super('animation-iteration-count');
    initializeAnimationIterationCountCss();
  }
}
let animationIterationCountReady = false;
function initializeAnimationIterationCountCss(): void {
  if (animationIterationCountReady) return;
  Object.assign(AnimationIterationCountCss.prototype, animationIterationCountKeywords());
  Object.freeze(AnimationIterationCountCss.prototype);
  animationIterationCountReady = true;
}

function animationNameKeywords() {
  return {
    inherit: 'animation-name:inherit;',
    initial: 'animation-name:initial;',
    none: 'animation-name:none;',
    revert: 'animation-name:revert;',
    revertLayer: 'animation-name:revert-layer;',
    unset: 'animation-name:unset;',
  } as const;
}

type AnimationNameCssKeywords = Readonly<ReturnType<typeof animationNameKeywords>>;
export interface AnimationNameCss extends AnimationNameCssKeywords {}
/** CSS 属性 animation-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
 */
export class AnimationNameCss extends CssProperty<Property.AnimationName> {
  constructor() {
    super('animation-name');
    initializeAnimationNameCss();
  }
}
let animationNameReady = false;
function initializeAnimationNameCss(): void {
  if (animationNameReady) return;
  Object.assign(AnimationNameCss.prototype, animationNameKeywords());
  Object.freeze(AnimationNameCss.prototype);
  animationNameReady = true;
}

function animationPlayStateKeywords() {
  return {
    inherit: 'animation-play-state:inherit;',
    initial: 'animation-play-state:initial;',
    paused: 'animation-play-state:paused;',
    revert: 'animation-play-state:revert;',
    revertLayer: 'animation-play-state:revert-layer;',
    running: 'animation-play-state:running;',
    unset: 'animation-play-state:unset;',
  } as const;
}

type AnimationPlayStateCssKeywords = Readonly<ReturnType<typeof animationPlayStateKeywords>>;
export interface AnimationPlayStateCss extends AnimationPlayStateCssKeywords {}
/** CSS 属性 animation-play-state；初始值 running。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
 */
export class AnimationPlayStateCss extends CssProperty<Property.AnimationPlayState> {
  constructor() {
    super('animation-play-state');
    initializeAnimationPlayStateCss();
  }
}
let animationPlayStateReady = false;
function initializeAnimationPlayStateCss(): void {
  if (animationPlayStateReady) return;
  Object.assign(AnimationPlayStateCss.prototype, animationPlayStateKeywords());
  Object.freeze(AnimationPlayStateCss.prototype);
  animationPlayStateReady = true;
}

function animationRangeKeywords() {
  return {
    contain: 'animation-range:contain;',
    cover: 'animation-range:cover;',
    entry: 'animation-range:entry;',
    entryCrossing: 'animation-range:entry-crossing;',
    exit: 'animation-range:exit;',
    exitCrossing: 'animation-range:exit-crossing;',
    inherit: 'animation-range:inherit;',
    initial: 'animation-range:initial;',
    normal: 'animation-range:normal;',
    revert: 'animation-range:revert;',
    revertLayer: 'animation-range:revert-layer;',
    unset: 'animation-range:unset;',
  } as const;
}

type AnimationRangeCssKeywords = Readonly<ReturnType<typeof animationRangeKeywords>>;
export interface AnimationRangeCss extends AnimationRangeCssKeywords {}
/** CSS 属性 animation-range。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
 */
export class AnimationRangeCss extends LengthCssProperty<Property.AnimationRange> {
  constructor() {
    super('animation-range');
    initializeAnimationRangeCss();
  }
}
let animationRangeReady = false;
function initializeAnimationRangeCss(): void {
  if (animationRangeReady) return;
  Object.assign(AnimationRangeCss.prototype, animationRangeKeywords());
  Object.freeze(AnimationRangeCss.prototype);
  animationRangeReady = true;
}

function animationRangeEndKeywords() {
  return {
    contain: 'animation-range-end:contain;',
    cover: 'animation-range-end:cover;',
    entry: 'animation-range-end:entry;',
    entryCrossing: 'animation-range-end:entry-crossing;',
    exit: 'animation-range-end:exit;',
    exitCrossing: 'animation-range-end:exit-crossing;',
    inherit: 'animation-range-end:inherit;',
    initial: 'animation-range-end:initial;',
    normal: 'animation-range-end:normal;',
    revert: 'animation-range-end:revert;',
    revertLayer: 'animation-range-end:revert-layer;',
    unset: 'animation-range-end:unset;',
  } as const;
}

type AnimationRangeEndCssKeywords = Readonly<ReturnType<typeof animationRangeEndKeywords>>;
export interface AnimationRangeEndCss extends AnimationRangeEndCssKeywords {}
/** CSS 属性 animation-range-end；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
 */
export class AnimationRangeEndCss extends LengthCssProperty<Property.AnimationRangeEnd> {
  constructor() {
    super('animation-range-end');
    initializeAnimationRangeEndCss();
  }
}
let animationRangeEndReady = false;
function initializeAnimationRangeEndCss(): void {
  if (animationRangeEndReady) return;
  Object.assign(AnimationRangeEndCss.prototype, animationRangeEndKeywords());
  Object.freeze(AnimationRangeEndCss.prototype);
  animationRangeEndReady = true;
}

function animationRangeStartKeywords() {
  return {
    contain: 'animation-range-start:contain;',
    cover: 'animation-range-start:cover;',
    entry: 'animation-range-start:entry;',
    entryCrossing: 'animation-range-start:entry-crossing;',
    exit: 'animation-range-start:exit;',
    exitCrossing: 'animation-range-start:exit-crossing;',
    inherit: 'animation-range-start:inherit;',
    initial: 'animation-range-start:initial;',
    normal: 'animation-range-start:normal;',
    revert: 'animation-range-start:revert;',
    revertLayer: 'animation-range-start:revert-layer;',
    unset: 'animation-range-start:unset;',
  } as const;
}

type AnimationRangeStartCssKeywords = Readonly<ReturnType<typeof animationRangeStartKeywords>>;
export interface AnimationRangeStartCss extends AnimationRangeStartCssKeywords {}
/** CSS 属性 animation-range-start；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
 */
export class AnimationRangeStartCss extends LengthCssProperty<Property.AnimationRangeStart> {
  constructor() {
    super('animation-range-start');
    initializeAnimationRangeStartCss();
  }
}
let animationRangeStartReady = false;
function initializeAnimationRangeStartCss(): void {
  if (animationRangeStartReady) return;
  Object.assign(AnimationRangeStartCss.prototype, animationRangeStartKeywords());
  Object.freeze(AnimationRangeStartCss.prototype);
  animationRangeStartReady = true;
}

function animationTimelineKeywords() {
  return {
    auto: 'animation-timeline:auto;',
    inherit: 'animation-timeline:inherit;',
    initial: 'animation-timeline:initial;',
    none: 'animation-timeline:none;',
    revert: 'animation-timeline:revert;',
    revertLayer: 'animation-timeline:revert-layer;',
    unset: 'animation-timeline:unset;',
  } as const;
}

type AnimationTimelineCssKeywords = Readonly<ReturnType<typeof animationTimelineKeywords>>;
export interface AnimationTimelineCss extends AnimationTimelineCssKeywords {}
/** CSS 属性 animation-timeline；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
 */
export class AnimationTimelineCss extends CssProperty<Property.AnimationTimeline> {
  constructor() {
    super('animation-timeline');
    initializeAnimationTimelineCss();
  }
}
let animationTimelineReady = false;
function initializeAnimationTimelineCss(): void {
  if (animationTimelineReady) return;
  Object.assign(AnimationTimelineCss.prototype, animationTimelineKeywords());
  Object.freeze(AnimationTimelineCss.prototype);
  animationTimelineReady = true;
}

function animationTimingFunctionKeywords() {
  return {
    ease: 'animation-timing-function:ease;',
    easeIn: 'animation-timing-function:ease-in;',
    easeInOut: 'animation-timing-function:ease-in-out;',
    easeOut: 'animation-timing-function:ease-out;',
    inherit: 'animation-timing-function:inherit;',
    initial: 'animation-timing-function:initial;',
    linear: 'animation-timing-function:linear;',
    revert: 'animation-timing-function:revert;',
    revertLayer: 'animation-timing-function:revert-layer;',
    stepEnd: 'animation-timing-function:step-end;',
    stepStart: 'animation-timing-function:step-start;',
    unset: 'animation-timing-function:unset;',
  } as const;
}

type AnimationTimingFunctionCssKeywords = Readonly<
  ReturnType<typeof animationTimingFunctionKeywords>
>;
export interface AnimationTimingFunctionCss extends AnimationTimingFunctionCssKeywords {}
/** CSS 属性 animation-timing-function；初始值 ease。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
 */
export class AnimationTimingFunctionCss extends CssProperty<Property.AnimationTimingFunction> {
  constructor() {
    super('animation-timing-function');
    initializeAnimationTimingFunctionCss();
  }
}
let animationTimingFunctionReady = false;
function initializeAnimationTimingFunctionCss(): void {
  if (animationTimingFunctionReady) return;
  Object.assign(AnimationTimingFunctionCss.prototype, animationTimingFunctionKeywords());
  Object.freeze(AnimationTimingFunctionCss.prototype);
  animationTimingFunctionReady = true;
}

function appearanceKeywords() {
  return {
    auto: 'appearance:auto;',
    button: 'appearance:button;',
    checkbox: 'appearance:checkbox;',
    inherit: 'appearance:inherit;',
    initial: 'appearance:initial;',
    listbox: 'appearance:listbox;',
    menulist: 'appearance:menulist;',
    menulistButton: 'appearance:menulist-button;',
    meter: 'appearance:meter;',
    none: 'appearance:none;',
    progressBar: 'appearance:progress-bar;',
    radio: 'appearance:radio;',
    revert: 'appearance:revert;',
    revertLayer: 'appearance:revert-layer;',
    searchfield: 'appearance:searchfield;',
    textarea: 'appearance:textarea;',
    textfield: 'appearance:textfield;',
    unset: 'appearance:unset;',
  } as const;
}

type AppearanceCssKeywords = Readonly<ReturnType<typeof appearanceKeywords>>;
export interface AppearanceCss extends AppearanceCssKeywords {}
/** CSS 属性 appearance；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
 */
export class AppearanceCss extends CssProperty<Property.Appearance> {
  constructor() {
    super('appearance');
    initializeAppearanceCss();
  }
}
let appearanceReady = false;
function initializeAppearanceCss(): void {
  if (appearanceReady) return;
  Object.assign(AppearanceCss.prototype, appearanceKeywords());
  Object.freeze(AppearanceCss.prototype);
  appearanceReady = true;
}

function aspectRatioKeywords() {
  return {
    auto: 'aspect-ratio:auto;',
    inherit: 'aspect-ratio:inherit;',
    initial: 'aspect-ratio:initial;',
    revert: 'aspect-ratio:revert;',
    revertLayer: 'aspect-ratio:revert-layer;',
    unset: 'aspect-ratio:unset;',
  } as const;
}

type AspectRatioCssKeywords = Readonly<ReturnType<typeof aspectRatioKeywords>>;
export interface AspectRatioCss extends AspectRatioCssKeywords {}
/** CSS 属性 aspect-ratio；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
 */
export class AspectRatioCss extends CssProperty<Property.AspectRatio> {
  constructor() {
    super('aspect-ratio');
    initializeAspectRatioCss();
  }
}
let aspectRatioReady = false;
function initializeAspectRatioCss(): void {
  if (aspectRatioReady) return;
  Object.assign(AspectRatioCss.prototype, aspectRatioKeywords());
  Object.freeze(AspectRatioCss.prototype);
  aspectRatioReady = true;
}
