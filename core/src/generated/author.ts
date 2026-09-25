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

function gapKeywords() {
  return {
    inherit: 'gap:inherit;',
    initial: 'gap:initial;',
    normal: 'gap:normal;',
    revert: 'gap:revert;',
    revertLayer: 'gap:revert-layer;',
    unset: 'gap:unset;',
  } as const;
}

type GapCssKeywords = Readonly<ReturnType<typeof gapKeywords>>;
export interface GapCss extends GapCssKeywords {}
/** 行列间距（CSS gap）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
 */
export class GapCss extends LengthCssProperty<Property.Gap> {
  constructor() {
    super('gap');
    initializeGapCss();
  }
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
}
let gapReady = false;
function initializeGapCss(): void {
  if (gapReady) return;
  Object.assign(GapCss.prototype, gapKeywords());
  Object.freeze(GapCss.prototype);
  gapReady = true;
}

function glyphOrientationVerticalKeywords() {
  return {
    auto: 'glyph-orientation-vertical:auto;',
    inherit: 'glyph-orientation-vertical:inherit;',
    initial: 'glyph-orientation-vertical:initial;',
    revert: 'glyph-orientation-vertical:revert;',
    revertLayer: 'glyph-orientation-vertical:revert-layer;',
    unset: 'glyph-orientation-vertical:unset;',
  } as const;
}

type GlyphOrientationVerticalCssKeywords = Readonly<
  ReturnType<typeof glyphOrientationVerticalKeywords>
>;
export interface GlyphOrientationVerticalCss extends GlyphOrientationVerticalCssKeywords {}
/** CSS 属性 glyph-orientation-vertical。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
 */
export class GlyphOrientationVerticalCss extends CssProperty<Property.GlyphOrientationVertical> {
  constructor() {
    super('glyph-orientation-vertical');
    initializeGlyphOrientationVerticalCss();
  }
}
let glyphOrientationVerticalReady = false;
function initializeGlyphOrientationVerticalCss(): void {
  if (glyphOrientationVerticalReady) return;
  Object.assign(GlyphOrientationVerticalCss.prototype, glyphOrientationVerticalKeywords());
  Object.freeze(GlyphOrientationVerticalCss.prototype);
  glyphOrientationVerticalReady = true;
}

function gridKeywords() {
  return {
    inherit: 'grid:inherit;',
    initial: 'grid:initial;',
    none: 'grid:none;',
    revert: 'grid:revert;',
    revertLayer: 'grid:revert-layer;',
    unset: 'grid:unset;',
  } as const;
}

type GridCssKeywords = Readonly<ReturnType<typeof gridKeywords>>;
export interface GridCss extends GridCssKeywords {}
/** CSS 属性 grid。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
 */
export class GridCss extends CssProperty<Property.Grid> {
  constructor() {
    super('grid');
    initializeGridCss();
  }
}
let gridReady = false;
function initializeGridCss(): void {
  if (gridReady) return;
  Object.assign(GridCss.prototype, gridKeywords());
  Object.freeze(GridCss.prototype);
  gridReady = true;
}

function gridAreaKeywords() {
  return {
    auto: 'grid-area:auto;',
    inherit: 'grid-area:inherit;',
    initial: 'grid-area:initial;',
    revert: 'grid-area:revert;',
    revertLayer: 'grid-area:revert-layer;',
    unset: 'grid-area:unset;',
  } as const;
}

type GridAreaCssKeywords = Readonly<ReturnType<typeof gridAreaKeywords>>;
export interface GridAreaCss extends GridAreaCssKeywords {}
/** CSS 属性 grid-area。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
 */
export class GridAreaCss extends CssProperty<Property.GridArea> {
  constructor() {
    super('grid-area');
    initializeGridAreaCss();
  }
}
let gridAreaReady = false;
function initializeGridAreaCss(): void {
  if (gridAreaReady) return;
  Object.assign(GridAreaCss.prototype, gridAreaKeywords());
  Object.freeze(GridAreaCss.prototype);
  gridAreaReady = true;
}

function gridAutoColumnsKeywords() {
  return {
    auto: 'grid-auto-columns:auto;',
    inherit: 'grid-auto-columns:inherit;',
    initial: 'grid-auto-columns:initial;',
    maxContent: 'grid-auto-columns:max-content;',
    minContent: 'grid-auto-columns:min-content;',
    revert: 'grid-auto-columns:revert;',
    revertLayer: 'grid-auto-columns:revert-layer;',
    unset: 'grid-auto-columns:unset;',
  } as const;
}

type GridAutoColumnsCssKeywords = Readonly<ReturnType<typeof gridAutoColumnsKeywords>>;
export interface GridAutoColumnsCss extends GridAutoColumnsCssKeywords {}
/** CSS 属性 grid-auto-columns；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
 */
export class GridAutoColumnsCss extends LengthCssProperty<Property.GridAutoColumns> {
  constructor() {
    super('grid-auto-columns');
    initializeGridAutoColumnsCss();
  }
}
let gridAutoColumnsReady = false;
function initializeGridAutoColumnsCss(): void {
  if (gridAutoColumnsReady) return;
  Object.assign(GridAutoColumnsCss.prototype, gridAutoColumnsKeywords());
  Object.freeze(GridAutoColumnsCss.prototype);
  gridAutoColumnsReady = true;
}

function gridAutoFlowKeywords() {
  return {
    column: 'grid-auto-flow:column;',
    dense: 'grid-auto-flow:dense;',
    inherit: 'grid-auto-flow:inherit;',
    initial: 'grid-auto-flow:initial;',
    revert: 'grid-auto-flow:revert;',
    revertLayer: 'grid-auto-flow:revert-layer;',
    row: 'grid-auto-flow:row;',
    unset: 'grid-auto-flow:unset;',
  } as const;
}

type GridAutoFlowCssKeywords = Readonly<ReturnType<typeof gridAutoFlowKeywords>>;
export interface GridAutoFlowCss extends GridAutoFlowCssKeywords {}
/** CSS 属性 grid-auto-flow；初始值 row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
 */
export class GridAutoFlowCss extends CssProperty<Property.GridAutoFlow> {
  constructor() {
    super('grid-auto-flow');
    initializeGridAutoFlowCss();
  }
}
let gridAutoFlowReady = false;
function initializeGridAutoFlowCss(): void {
  if (gridAutoFlowReady) return;
  Object.assign(GridAutoFlowCss.prototype, gridAutoFlowKeywords());
  Object.freeze(GridAutoFlowCss.prototype);
  gridAutoFlowReady = true;
}

function gridAutoRowsKeywords() {
  return {
    auto: 'grid-auto-rows:auto;',
    inherit: 'grid-auto-rows:inherit;',
    initial: 'grid-auto-rows:initial;',
    maxContent: 'grid-auto-rows:max-content;',
    minContent: 'grid-auto-rows:min-content;',
    revert: 'grid-auto-rows:revert;',
    revertLayer: 'grid-auto-rows:revert-layer;',
    unset: 'grid-auto-rows:unset;',
  } as const;
}

type GridAutoRowsCssKeywords = Readonly<ReturnType<typeof gridAutoRowsKeywords>>;
export interface GridAutoRowsCss extends GridAutoRowsCssKeywords {}
/** CSS 属性 grid-auto-rows；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
 */
export class GridAutoRowsCss extends LengthCssProperty<Property.GridAutoRows> {
  constructor() {
    super('grid-auto-rows');
    initializeGridAutoRowsCss();
  }
}
let gridAutoRowsReady = false;
function initializeGridAutoRowsCss(): void {
  if (gridAutoRowsReady) return;
  Object.assign(GridAutoRowsCss.prototype, gridAutoRowsKeywords());
  Object.freeze(GridAutoRowsCss.prototype);
  gridAutoRowsReady = true;
}

function gridColumnKeywords() {
  return {
    auto: 'grid-column:auto;',
    inherit: 'grid-column:inherit;',
    initial: 'grid-column:initial;',
    revert: 'grid-column:revert;',
    revertLayer: 'grid-column:revert-layer;',
    unset: 'grid-column:unset;',
  } as const;
}

type GridColumnCssKeywords = Readonly<ReturnType<typeof gridColumnKeywords>>;
export interface GridColumnCss extends GridColumnCssKeywords {}
/** CSS 属性 grid-column。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
 */
export class GridColumnCss extends CssProperty<Property.GridColumn> {
  constructor() {
    super('grid-column');
    initializeGridColumnCss();
  }
}
let gridColumnReady = false;
function initializeGridColumnCss(): void {
  if (gridColumnReady) return;
  Object.assign(GridColumnCss.prototype, gridColumnKeywords());
  Object.freeze(GridColumnCss.prototype);
  gridColumnReady = true;
}

function gridColumnEndKeywords() {
  return {
    auto: 'grid-column-end:auto;',
    inherit: 'grid-column-end:inherit;',
    initial: 'grid-column-end:initial;',
    revert: 'grid-column-end:revert;',
    revertLayer: 'grid-column-end:revert-layer;',
    unset: 'grid-column-end:unset;',
  } as const;
}

type GridColumnEndCssKeywords = Readonly<ReturnType<typeof gridColumnEndKeywords>>;
export interface GridColumnEndCss extends GridColumnEndCssKeywords {}
/** CSS 属性 grid-column-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
 */
export class GridColumnEndCss extends CssProperty<Property.GridColumnEnd> {
  constructor() {
    super('grid-column-end');
    initializeGridColumnEndCss();
  }
}
let gridColumnEndReady = false;
function initializeGridColumnEndCss(): void {
  if (gridColumnEndReady) return;
  Object.assign(GridColumnEndCss.prototype, gridColumnEndKeywords());
  Object.freeze(GridColumnEndCss.prototype);
  gridColumnEndReady = true;
}

function gridColumnStartKeywords() {
  return {
    auto: 'grid-column-start:auto;',
    inherit: 'grid-column-start:inherit;',
    initial: 'grid-column-start:initial;',
    revert: 'grid-column-start:revert;',
    revertLayer: 'grid-column-start:revert-layer;',
    unset: 'grid-column-start:unset;',
  } as const;
}

type GridColumnStartCssKeywords = Readonly<ReturnType<typeof gridColumnStartKeywords>>;
export interface GridColumnStartCss extends GridColumnStartCssKeywords {}
/** CSS 属性 grid-column-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
 */
export class GridColumnStartCss extends CssProperty<Property.GridColumnStart> {
  constructor() {
    super('grid-column-start');
    initializeGridColumnStartCss();
  }
}
let gridColumnStartReady = false;
function initializeGridColumnStartCss(): void {
  if (gridColumnStartReady) return;
  Object.assign(GridColumnStartCss.prototype, gridColumnStartKeywords());
  Object.freeze(GridColumnStartCss.prototype);
  gridColumnStartReady = true;
}

function gridRowKeywords() {
  return {
    auto: 'grid-row:auto;',
    inherit: 'grid-row:inherit;',
    initial: 'grid-row:initial;',
    revert: 'grid-row:revert;',
    revertLayer: 'grid-row:revert-layer;',
    unset: 'grid-row:unset;',
  } as const;
}

type GridRowCssKeywords = Readonly<ReturnType<typeof gridRowKeywords>>;
export interface GridRowCss extends GridRowCssKeywords {}
/** CSS 属性 grid-row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
 */
export class GridRowCss extends CssProperty<Property.GridRow> {
  constructor() {
    super('grid-row');
    initializeGridRowCss();
  }
}
let gridRowReady = false;
function initializeGridRowCss(): void {
  if (gridRowReady) return;
  Object.assign(GridRowCss.prototype, gridRowKeywords());
  Object.freeze(GridRowCss.prototype);
  gridRowReady = true;
}

function gridRowEndKeywords() {
  return {
    auto: 'grid-row-end:auto;',
    inherit: 'grid-row-end:inherit;',
    initial: 'grid-row-end:initial;',
    revert: 'grid-row-end:revert;',
    revertLayer: 'grid-row-end:revert-layer;',
    unset: 'grid-row-end:unset;',
  } as const;
}

type GridRowEndCssKeywords = Readonly<ReturnType<typeof gridRowEndKeywords>>;
export interface GridRowEndCss extends GridRowEndCssKeywords {}
/** CSS 属性 grid-row-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
 */
export class GridRowEndCss extends CssProperty<Property.GridRowEnd> {
  constructor() {
    super('grid-row-end');
    initializeGridRowEndCss();
  }
}
let gridRowEndReady = false;
function initializeGridRowEndCss(): void {
  if (gridRowEndReady) return;
  Object.assign(GridRowEndCss.prototype, gridRowEndKeywords());
  Object.freeze(GridRowEndCss.prototype);
  gridRowEndReady = true;
}

function gridRowStartKeywords() {
  return {
    auto: 'grid-row-start:auto;',
    inherit: 'grid-row-start:inherit;',
    initial: 'grid-row-start:initial;',
    revert: 'grid-row-start:revert;',
    revertLayer: 'grid-row-start:revert-layer;',
    unset: 'grid-row-start:unset;',
  } as const;
}

type GridRowStartCssKeywords = Readonly<ReturnType<typeof gridRowStartKeywords>>;
export interface GridRowStartCss extends GridRowStartCssKeywords {}
/** CSS 属性 grid-row-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
 */
export class GridRowStartCss extends CssProperty<Property.GridRowStart> {
  constructor() {
    super('grid-row-start');
    initializeGridRowStartCss();
  }
}
let gridRowStartReady = false;
function initializeGridRowStartCss(): void {
  if (gridRowStartReady) return;
  Object.assign(GridRowStartCss.prototype, gridRowStartKeywords());
  Object.freeze(GridRowStartCss.prototype);
  gridRowStartReady = true;
}

function gridTemplateKeywords() {
  return {
    inherit: 'grid-template:inherit;',
    initial: 'grid-template:initial;',
    none: 'grid-template:none;',
    revert: 'grid-template:revert;',
    revertLayer: 'grid-template:revert-layer;',
    unset: 'grid-template:unset;',
  } as const;
}

type GridTemplateCssKeywords = Readonly<ReturnType<typeof gridTemplateKeywords>>;
export interface GridTemplateCss extends GridTemplateCssKeywords {}
/** CSS 属性 grid-template。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
 */
export class GridTemplateCss extends CssProperty<Property.GridTemplate> {
  constructor() {
    super('grid-template');
    initializeGridTemplateCss();
  }
}
let gridTemplateReady = false;
function initializeGridTemplateCss(): void {
  if (gridTemplateReady) return;
  Object.assign(GridTemplateCss.prototype, gridTemplateKeywords());
  Object.freeze(GridTemplateCss.prototype);
  gridTemplateReady = true;
}

function gridTemplateAreasKeywords() {
  return {
    inherit: 'grid-template-areas:inherit;',
    initial: 'grid-template-areas:initial;',
    none: 'grid-template-areas:none;',
    revert: 'grid-template-areas:revert;',
    revertLayer: 'grid-template-areas:revert-layer;',
    unset: 'grid-template-areas:unset;',
  } as const;
}

type GridTemplateAreasCssKeywords = Readonly<ReturnType<typeof gridTemplateAreasKeywords>>;
export interface GridTemplateAreasCss extends GridTemplateAreasCssKeywords {}
/** CSS 属性 grid-template-areas；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
 */
export class GridTemplateAreasCss extends CssProperty<Property.GridTemplateAreas> {
  constructor() {
    super('grid-template-areas');
    initializeGridTemplateAreasCss();
  }
}
let gridTemplateAreasReady = false;
function initializeGridTemplateAreasCss(): void {
  if (gridTemplateAreasReady) return;
  Object.assign(GridTemplateAreasCss.prototype, gridTemplateAreasKeywords());
  Object.freeze(GridTemplateAreasCss.prototype);
  gridTemplateAreasReady = true;
}

function gridTemplateColumnsKeywords() {
  return {
    auto: 'grid-template-columns:auto;',
    inherit: 'grid-template-columns:inherit;',
    initial: 'grid-template-columns:initial;',
    maxContent: 'grid-template-columns:max-content;',
    minContent: 'grid-template-columns:min-content;',
    none: 'grid-template-columns:none;',
    revert: 'grid-template-columns:revert;',
    revertLayer: 'grid-template-columns:revert-layer;',
    subgrid: 'grid-template-columns:subgrid;',
    unset: 'grid-template-columns:unset;',
  } as const;
}

type GridTemplateColumnsCssKeywords = Readonly<ReturnType<typeof gridTemplateColumnsKeywords>>;
export interface GridTemplateColumnsCss extends GridTemplateColumnsCssKeywords {}
/** CSS 属性 grid-template-columns；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
 */
export class GridTemplateColumnsCss extends LengthCssProperty<Property.GridTemplateColumns> {
  constructor() {
    super('grid-template-columns');
    initializeGridTemplateColumnsCss();
  }
}
let gridTemplateColumnsReady = false;
function initializeGridTemplateColumnsCss(): void {
  if (gridTemplateColumnsReady) return;
  Object.assign(GridTemplateColumnsCss.prototype, gridTemplateColumnsKeywords());
  Object.freeze(GridTemplateColumnsCss.prototype);
  gridTemplateColumnsReady = true;
}

function gridTemplateRowsKeywords() {
  return {
    auto: 'grid-template-rows:auto;',
    inherit: 'grid-template-rows:inherit;',
    initial: 'grid-template-rows:initial;',
    maxContent: 'grid-template-rows:max-content;',
    minContent: 'grid-template-rows:min-content;',
    none: 'grid-template-rows:none;',
    revert: 'grid-template-rows:revert;',
    revertLayer: 'grid-template-rows:revert-layer;',
    subgrid: 'grid-template-rows:subgrid;',
    unset: 'grid-template-rows:unset;',
  } as const;
}

type GridTemplateRowsCssKeywords = Readonly<ReturnType<typeof gridTemplateRowsKeywords>>;
export interface GridTemplateRowsCss extends GridTemplateRowsCssKeywords {}
/** CSS 属性 grid-template-rows；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
 */
export class GridTemplateRowsCss extends LengthCssProperty<Property.GridTemplateRows> {
  constructor() {
    super('grid-template-rows');
    initializeGridTemplateRowsCss();
  }
}
let gridTemplateRowsReady = false;
function initializeGridTemplateRowsCss(): void {
  if (gridTemplateRowsReady) return;
  Object.assign(GridTemplateRowsCss.prototype, gridTemplateRowsKeywords());
  Object.freeze(GridTemplateRowsCss.prototype);
  gridTemplateRowsReady = true;
}

function hangingPunctuationKeywords() {
  return {
    allowEnd: 'hanging-punctuation:allow-end;',
    first: 'hanging-punctuation:first;',
    forceEnd: 'hanging-punctuation:force-end;',
    inherit: 'hanging-punctuation:inherit;',
    initial: 'hanging-punctuation:initial;',
    last: 'hanging-punctuation:last;',
    none: 'hanging-punctuation:none;',
    revert: 'hanging-punctuation:revert;',
    revertLayer: 'hanging-punctuation:revert-layer;',
    unset: 'hanging-punctuation:unset;',
  } as const;
}

type HangingPunctuationCssKeywords = Readonly<ReturnType<typeof hangingPunctuationKeywords>>;
export interface HangingPunctuationCss extends HangingPunctuationCssKeywords {}
/** CSS 属性 hanging-punctuation；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
 */
export class HangingPunctuationCss extends CssProperty<Property.HangingPunctuation> {
  constructor() {
    super('hanging-punctuation');
    initializeHangingPunctuationCss();
  }
}
let hangingPunctuationReady = false;
function initializeHangingPunctuationCss(): void {
  if (hangingPunctuationReady) return;
  Object.assign(HangingPunctuationCss.prototype, hangingPunctuationKeywords());
  Object.freeze(HangingPunctuationCss.prototype);
  hangingPunctuationReady = true;
}

function heightKeywords() {
  return {
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
}

type HeightCssKeywords = Readonly<ReturnType<typeof heightKeywords>>;
export interface HeightCss extends HeightCssKeywords {}
/** 高度（CSS height）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
 */
export class HeightCss extends LengthCssProperty<Property.Height> {
  constructor() {
    super('height');
    initializeHeightCss();
  }
}
let heightReady = false;
function initializeHeightCss(): void {
  if (heightReady) return;
  Object.assign(HeightCss.prototype, heightKeywords());
  Object.freeze(HeightCss.prototype);
  heightReady = true;
}

function hyphenateCharacterKeywords() {
  return {
    auto: 'hyphenate-character:auto;',
    inherit: 'hyphenate-character:inherit;',
    initial: 'hyphenate-character:initial;',
    revert: 'hyphenate-character:revert;',
    revertLayer: 'hyphenate-character:revert-layer;',
    unset: 'hyphenate-character:unset;',
  } as const;
}

type HyphenateCharacterCssKeywords = Readonly<ReturnType<typeof hyphenateCharacterKeywords>>;
export interface HyphenateCharacterCss extends HyphenateCharacterCssKeywords {}
/** CSS 属性 hyphenate-character；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
 */
export class HyphenateCharacterCss extends CssProperty<Property.HyphenateCharacter> {
  constructor() {
    super('hyphenate-character');
    initializeHyphenateCharacterCss();
  }
}
let hyphenateCharacterReady = false;
function initializeHyphenateCharacterCss(): void {
  if (hyphenateCharacterReady) return;
  Object.assign(HyphenateCharacterCss.prototype, hyphenateCharacterKeywords());
  Object.freeze(HyphenateCharacterCss.prototype);
  hyphenateCharacterReady = true;
}

function hyphenateLimitCharsKeywords() {
  return {
    auto: 'hyphenate-limit-chars:auto;',
    inherit: 'hyphenate-limit-chars:inherit;',
    initial: 'hyphenate-limit-chars:initial;',
    revert: 'hyphenate-limit-chars:revert;',
    revertLayer: 'hyphenate-limit-chars:revert-layer;',
    unset: 'hyphenate-limit-chars:unset;',
  } as const;
}

type HyphenateLimitCharsCssKeywords = Readonly<ReturnType<typeof hyphenateLimitCharsKeywords>>;
export interface HyphenateLimitCharsCss extends HyphenateLimitCharsCssKeywords {}
/** CSS 属性 hyphenate-limit-chars；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
 */
export class HyphenateLimitCharsCss extends CssProperty<Property.HyphenateLimitChars> {
  constructor() {
    super('hyphenate-limit-chars');
    initializeHyphenateLimitCharsCss();
  }
}
let hyphenateLimitCharsReady = false;
function initializeHyphenateLimitCharsCss(): void {
  if (hyphenateLimitCharsReady) return;
  Object.assign(HyphenateLimitCharsCss.prototype, hyphenateLimitCharsKeywords());
  Object.freeze(HyphenateLimitCharsCss.prototype);
  hyphenateLimitCharsReady = true;
}

function hyphensKeywords() {
  return {
    auto: 'hyphens:auto;',
    inherit: 'hyphens:inherit;',
    initial: 'hyphens:initial;',
    manual: 'hyphens:manual;',
    none: 'hyphens:none;',
    revert: 'hyphens:revert;',
    revertLayer: 'hyphens:revert-layer;',
    unset: 'hyphens:unset;',
  } as const;
}

type HyphensCssKeywords = Readonly<ReturnType<typeof hyphensKeywords>>;
export interface HyphensCss extends HyphensCssKeywords {}
/** CSS 属性 hyphens；初始值 manual。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
 */
export class HyphensCss extends CssProperty<Property.Hyphens> {
  constructor() {
    super('hyphens');
    initializeHyphensCss();
  }
}
let hyphensReady = false;
function initializeHyphensCss(): void {
  if (hyphensReady) return;
  Object.assign(HyphensCss.prototype, hyphensKeywords());
  Object.freeze(HyphensCss.prototype);
  hyphensReady = true;
}

function imageOrientationKeywords() {
  return {
    flip: 'image-orientation:flip;',
    fromImage: 'image-orientation:from-image;',
    inherit: 'image-orientation:inherit;',
    initial: 'image-orientation:initial;',
    revert: 'image-orientation:revert;',
    revertLayer: 'image-orientation:revert-layer;',
    unset: 'image-orientation:unset;',
  } as const;
}

type ImageOrientationCssKeywords = Readonly<ReturnType<typeof imageOrientationKeywords>>;
export interface ImageOrientationCss extends ImageOrientationCssKeywords {}
/** CSS 属性 image-orientation；初始值 from-image。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
 */
export class ImageOrientationCss extends CssProperty<Property.ImageOrientation> {
  constructor() {
    super('image-orientation');
    initializeImageOrientationCss();
  }
}
let imageOrientationReady = false;
function initializeImageOrientationCss(): void {
  if (imageOrientationReady) return;
  Object.assign(ImageOrientationCss.prototype, imageOrientationKeywords());
  Object.freeze(ImageOrientationCss.prototype);
  imageOrientationReady = true;
}

function imageRenderingKeywords() {
  return {
    auto: 'image-rendering:auto;',
    crispEdges: 'image-rendering:crisp-edges;',
    inherit: 'image-rendering:inherit;',
    initial: 'image-rendering:initial;',
    pixelated: 'image-rendering:pixelated;',
    revert: 'image-rendering:revert;',
    revertLayer: 'image-rendering:revert-layer;',
    smooth: 'image-rendering:smooth;',
    unset: 'image-rendering:unset;',
  } as const;
}

type ImageRenderingCssKeywords = Readonly<ReturnType<typeof imageRenderingKeywords>>;
export interface ImageRenderingCss extends ImageRenderingCssKeywords {}
/** CSS 属性 image-rendering；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
 */
export class ImageRenderingCss extends CssProperty<Property.ImageRendering> {
  constructor() {
    super('image-rendering');
    initializeImageRenderingCss();
  }
}
let imageRenderingReady = false;
function initializeImageRenderingCss(): void {
  if (imageRenderingReady) return;
  Object.assign(ImageRenderingCss.prototype, imageRenderingKeywords());
  Object.freeze(ImageRenderingCss.prototype);
  imageRenderingReady = true;
}

function imageResolutionKeywords() {
  return {
    fromImage: 'image-resolution:from-image;',
    inherit: 'image-resolution:inherit;',
    initial: 'image-resolution:initial;',
    revert: 'image-resolution:revert;',
    revertLayer: 'image-resolution:revert-layer;',
    unset: 'image-resolution:unset;',
  } as const;
}

type ImageResolutionCssKeywords = Readonly<ReturnType<typeof imageResolutionKeywords>>;
export interface ImageResolutionCss extends ImageResolutionCssKeywords {}
/** CSS 属性 image-resolution；初始值 1dppx。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
 */
export class ImageResolutionCss extends CssProperty<Property.ImageResolution> {
  constructor() {
    super('image-resolution');
    initializeImageResolutionCss();
  }
}
let imageResolutionReady = false;
function initializeImageResolutionCss(): void {
  if (imageResolutionReady) return;
  Object.assign(ImageResolutionCss.prototype, imageResolutionKeywords());
  Object.freeze(ImageResolutionCss.prototype);
  imageResolutionReady = true;
}

function initialLetterKeywords() {
  return {
    inherit: 'initial-letter:inherit;',
    initial: 'initial-letter:initial;',
    normal: 'initial-letter:normal;',
    revert: 'initial-letter:revert;',
    revertLayer: 'initial-letter:revert-layer;',
    unset: 'initial-letter:unset;',
  } as const;
}

type InitialLetterCssKeywords = Readonly<ReturnType<typeof initialLetterKeywords>>;
export interface InitialLetterCss extends InitialLetterCssKeywords {}
/** CSS 属性 initial-letter；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
 */
export class InitialLetterCss extends CssProperty<Property.InitialLetter> {
  constructor() {
    super('initial-letter');
    initializeInitialLetterCss();
  }
}
let initialLetterReady = false;
function initializeInitialLetterCss(): void {
  if (initialLetterReady) return;
  Object.assign(InitialLetterCss.prototype, initialLetterKeywords());
  Object.freeze(InitialLetterCss.prototype);
  initialLetterReady = true;
}

function initialLetterAlignKeywords() {
  return {
    alphabetic: 'initial-letter-align:alphabetic;',
    auto: 'initial-letter-align:auto;',
    hanging: 'initial-letter-align:hanging;',
    ideographic: 'initial-letter-align:ideographic;',
    inherit: 'initial-letter-align:inherit;',
    initial: 'initial-letter-align:initial;',
    revert: 'initial-letter-align:revert;',
    revertLayer: 'initial-letter-align:revert-layer;',
    unset: 'initial-letter-align:unset;',
  } as const;
}

type InitialLetterAlignCssKeywords = Readonly<ReturnType<typeof initialLetterAlignKeywords>>;
export interface InitialLetterAlignCss extends InitialLetterAlignCssKeywords {}
/** CSS 属性 initial-letter-align；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
 */
export class InitialLetterAlignCss extends CssProperty<Property.InitialLetterAlign> {
  constructor() {
    super('initial-letter-align');
    initializeInitialLetterAlignCss();
  }
}
let initialLetterAlignReady = false;
function initializeInitialLetterAlignCss(): void {
  if (initialLetterAlignReady) return;
  Object.assign(InitialLetterAlignCss.prototype, initialLetterAlignKeywords());
  Object.freeze(InitialLetterAlignCss.prototype);
  initialLetterAlignReady = true;
}

function inlineSizeKeywords() {
  return {
    auto: 'inline-size:auto;',
    fitContent: 'inline-size:fit-content;',
    inherit: 'inline-size:inherit;',
    initial: 'inline-size:initial;',
    maxContent: 'inline-size:max-content;',
    minContent: 'inline-size:min-content;',
    revert: 'inline-size:revert;',
    revertLayer: 'inline-size:revert-layer;',
    unset: 'inline-size:unset;',
  } as const;
}

type InlineSizeCssKeywords = Readonly<ReturnType<typeof inlineSizeKeywords>>;
export interface InlineSizeCss extends InlineSizeCssKeywords {}
/** CSS 属性 inline-size；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
 */
export class InlineSizeCss extends LengthCssProperty<Property.InlineSize> {
  constructor() {
    super('inline-size');
    initializeInlineSizeCss();
  }
}
let inlineSizeReady = false;
function initializeInlineSizeCss(): void {
  if (inlineSizeReady) return;
  Object.assign(InlineSizeCss.prototype, inlineSizeKeywords());
  Object.freeze(InlineSizeCss.prototype);
  inlineSizeReady = true;
}

function insetKeywords() {
  return {
    auto: 'inset:auto;',
    inherit: 'inset:inherit;',
    initial: 'inset:initial;',
    revert: 'inset:revert;',
    revertLayer: 'inset:revert-layer;',
    unset: 'inset:unset;',
  } as const;
}

type InsetCssKeywords = Readonly<ReturnType<typeof insetKeywords>>;
export interface InsetCss extends InsetCssKeywords {}
/** CSS 属性 inset。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
 */
export class InsetCss extends LengthCssProperty<Property.Inset> {
  constructor() {
    super('inset');
    initializeInsetCss();
  }
}
let insetReady = false;
function initializeInsetCss(): void {
  if (insetReady) return;
  Object.assign(InsetCss.prototype, insetKeywords());
  Object.freeze(InsetCss.prototype);
  insetReady = true;
}

function insetBlockKeywords() {
  return {
    auto: 'inset-block:auto;',
    inherit: 'inset-block:inherit;',
    initial: 'inset-block:initial;',
    revert: 'inset-block:revert;',
    revertLayer: 'inset-block:revert-layer;',
    unset: 'inset-block:unset;',
  } as const;
}

type InsetBlockCssKeywords = Readonly<ReturnType<typeof insetBlockKeywords>>;
export interface InsetBlockCss extends InsetBlockCssKeywords {}
/** CSS 属性 inset-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
 */
export class InsetBlockCss extends LengthCssProperty<Property.InsetBlock> {
  constructor() {
    super('inset-block');
    initializeInsetBlockCss();
  }
}
let insetBlockReady = false;
function initializeInsetBlockCss(): void {
  if (insetBlockReady) return;
  Object.assign(InsetBlockCss.prototype, insetBlockKeywords());
  Object.freeze(InsetBlockCss.prototype);
  insetBlockReady = true;
}

function insetBlockEndKeywords() {
  return {
    auto: 'inset-block-end:auto;',
    inherit: 'inset-block-end:inherit;',
    initial: 'inset-block-end:initial;',
    revert: 'inset-block-end:revert;',
    revertLayer: 'inset-block-end:revert-layer;',
    unset: 'inset-block-end:unset;',
  } as const;
}

type InsetBlockEndCssKeywords = Readonly<ReturnType<typeof insetBlockEndKeywords>>;
export interface InsetBlockEndCss extends InsetBlockEndCssKeywords {}
/** CSS 属性 inset-block-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
 */
export class InsetBlockEndCss extends LengthCssProperty<Property.InsetBlockEnd> {
  constructor() {
    super('inset-block-end');
    initializeInsetBlockEndCss();
  }
}
let insetBlockEndReady = false;
function initializeInsetBlockEndCss(): void {
  if (insetBlockEndReady) return;
  Object.assign(InsetBlockEndCss.prototype, insetBlockEndKeywords());
  Object.freeze(InsetBlockEndCss.prototype);
  insetBlockEndReady = true;
}

function insetBlockStartKeywords() {
  return {
    auto: 'inset-block-start:auto;',
    inherit: 'inset-block-start:inherit;',
    initial: 'inset-block-start:initial;',
    revert: 'inset-block-start:revert;',
    revertLayer: 'inset-block-start:revert-layer;',
    unset: 'inset-block-start:unset;',
  } as const;
}

type InsetBlockStartCssKeywords = Readonly<ReturnType<typeof insetBlockStartKeywords>>;
export interface InsetBlockStartCss extends InsetBlockStartCssKeywords {}
/** CSS 属性 inset-block-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
 */
export class InsetBlockStartCss extends LengthCssProperty<Property.InsetBlockStart> {
  constructor() {
    super('inset-block-start');
    initializeInsetBlockStartCss();
  }
}
let insetBlockStartReady = false;
function initializeInsetBlockStartCss(): void {
  if (insetBlockStartReady) return;
  Object.assign(InsetBlockStartCss.prototype, insetBlockStartKeywords());
  Object.freeze(InsetBlockStartCss.prototype);
  insetBlockStartReady = true;
}

function insetInlineKeywords() {
  return {
    auto: 'inset-inline:auto;',
    inherit: 'inset-inline:inherit;',
    initial: 'inset-inline:initial;',
    revert: 'inset-inline:revert;',
    revertLayer: 'inset-inline:revert-layer;',
    unset: 'inset-inline:unset;',
  } as const;
}

type InsetInlineCssKeywords = Readonly<ReturnType<typeof insetInlineKeywords>>;
export interface InsetInlineCss extends InsetInlineCssKeywords {}
/** CSS 属性 inset-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
 */
export class InsetInlineCss extends LengthCssProperty<Property.InsetInline> {
  constructor() {
    super('inset-inline');
    initializeInsetInlineCss();
  }
}
let insetInlineReady = false;
function initializeInsetInlineCss(): void {
  if (insetInlineReady) return;
  Object.assign(InsetInlineCss.prototype, insetInlineKeywords());
  Object.freeze(InsetInlineCss.prototype);
  insetInlineReady = true;
}

function insetInlineEndKeywords() {
  return {
    auto: 'inset-inline-end:auto;',
    inherit: 'inset-inline-end:inherit;',
    initial: 'inset-inline-end:initial;',
    revert: 'inset-inline-end:revert;',
    revertLayer: 'inset-inline-end:revert-layer;',
    unset: 'inset-inline-end:unset;',
  } as const;
}

type InsetInlineEndCssKeywords = Readonly<ReturnType<typeof insetInlineEndKeywords>>;
export interface InsetInlineEndCss extends InsetInlineEndCssKeywords {}
/** CSS 属性 inset-inline-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
 */
export class InsetInlineEndCss extends LengthCssProperty<Property.InsetInlineEnd> {
  constructor() {
    super('inset-inline-end');
    initializeInsetInlineEndCss();
  }
}
let insetInlineEndReady = false;
function initializeInsetInlineEndCss(): void {
  if (insetInlineEndReady) return;
  Object.assign(InsetInlineEndCss.prototype, insetInlineEndKeywords());
  Object.freeze(InsetInlineEndCss.prototype);
  insetInlineEndReady = true;
}

function insetInlineStartKeywords() {
  return {
    auto: 'inset-inline-start:auto;',
    inherit: 'inset-inline-start:inherit;',
    initial: 'inset-inline-start:initial;',
    revert: 'inset-inline-start:revert;',
    revertLayer: 'inset-inline-start:revert-layer;',
    unset: 'inset-inline-start:unset;',
  } as const;
}

type InsetInlineStartCssKeywords = Readonly<ReturnType<typeof insetInlineStartKeywords>>;
export interface InsetInlineStartCss extends InsetInlineStartCssKeywords {}
/** CSS 属性 inset-inline-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
 */
export class InsetInlineStartCss extends LengthCssProperty<Property.InsetInlineStart> {
  constructor() {
    super('inset-inline-start');
    initializeInsetInlineStartCss();
  }
}
let insetInlineStartReady = false;
function initializeInsetInlineStartCss(): void {
  if (insetInlineStartReady) return;
  Object.assign(InsetInlineStartCss.prototype, insetInlineStartKeywords());
  Object.freeze(InsetInlineStartCss.prototype);
  insetInlineStartReady = true;
}

function interpolateSizeKeywords() {
  return {
    allowKeywords: 'interpolate-size:allow-keywords;',
    inherit: 'interpolate-size:inherit;',
    initial: 'interpolate-size:initial;',
    numericOnly: 'interpolate-size:numeric-only;',
    revert: 'interpolate-size:revert;',
    revertLayer: 'interpolate-size:revert-layer;',
    unset: 'interpolate-size:unset;',
  } as const;
}

type InterpolateSizeCssKeywords = Readonly<ReturnType<typeof interpolateSizeKeywords>>;
export interface InterpolateSizeCss extends InterpolateSizeCssKeywords {}
/** CSS 属性 interpolate-size；初始值 numeric-only。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
 */
export class InterpolateSizeCss extends CssProperty<Property.InterpolateSize> {
  constructor() {
    super('interpolate-size');
    initializeInterpolateSizeCss();
  }
}
let interpolateSizeReady = false;
function initializeInterpolateSizeCss(): void {
  if (interpolateSizeReady) return;
  Object.assign(InterpolateSizeCss.prototype, interpolateSizeKeywords());
  Object.freeze(InterpolateSizeCss.prototype);
  interpolateSizeReady = true;
}

function isolationKeywords() {
  return {
    auto: 'isolation:auto;',
    inherit: 'isolation:inherit;',
    initial: 'isolation:initial;',
    isolate: 'isolation:isolate;',
    revert: 'isolation:revert;',
    revertLayer: 'isolation:revert-layer;',
    unset: 'isolation:unset;',
  } as const;
}

type IsolationCssKeywords = Readonly<ReturnType<typeof isolationKeywords>>;
export interface IsolationCss extends IsolationCssKeywords {}
/** CSS 属性 isolation；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
 */
export class IsolationCss extends CssProperty<Property.Isolation> {
  constructor() {
    super('isolation');
    initializeIsolationCss();
  }
}
let isolationReady = false;
function initializeIsolationCss(): void {
  if (isolationReady) return;
  Object.assign(IsolationCss.prototype, isolationKeywords());
  Object.freeze(IsolationCss.prototype);
  isolationReady = true;
}

function justifyContentKeywords() {
  return {
    center: 'justify-content:center;',
    end: 'justify-content:end;',
    flexEnd: 'justify-content:flex-end;',
    flexStart: 'justify-content:flex-start;',
    inherit: 'justify-content:inherit;',
    initial: 'justify-content:initial;',
    left: 'justify-content:left;',
    normal: 'justify-content:normal;',
    revert: 'justify-content:revert;',
    revertLayer: 'justify-content:revert-layer;',
    right: 'justify-content:right;',
    spaceAround: 'justify-content:space-around;',
    spaceBetween: 'justify-content:space-between;',
    spaceEvenly: 'justify-content:space-evenly;',
    start: 'justify-content:start;',
    stretch: 'justify-content:stretch;',
    unset: 'justify-content:unset;',
  } as const;
}

type JustifyContentCssKeywords = Readonly<ReturnType<typeof justifyContentKeywords>>;
export interface JustifyContentCss extends JustifyContentCssKeywords {}
/** CSS 属性 justify-content；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
 */
export class JustifyContentCss extends CssProperty<Property.JustifyContent> {
  constructor() {
    super('justify-content');
    initializeJustifyContentCss();
  }
}
let justifyContentReady = false;
function initializeJustifyContentCss(): void {
  if (justifyContentReady) return;
  Object.assign(JustifyContentCss.prototype, justifyContentKeywords());
  Object.freeze(JustifyContentCss.prototype);
  justifyContentReady = true;
}

function justifyItemsKeywords() {
  return {
    anchorCenter: 'justify-items:anchor-center;',
    baseline: 'justify-items:baseline;',
    center: 'justify-items:center;',
    end: 'justify-items:end;',
    flexEnd: 'justify-items:flex-end;',
    flexStart: 'justify-items:flex-start;',
    inherit: 'justify-items:inherit;',
    initial: 'justify-items:initial;',
    left: 'justify-items:left;',
    legacy: 'justify-items:legacy;',
    normal: 'justify-items:normal;',
    revert: 'justify-items:revert;',
    revertLayer: 'justify-items:revert-layer;',
    right: 'justify-items:right;',
    selfEnd: 'justify-items:self-end;',
    selfStart: 'justify-items:self-start;',
    start: 'justify-items:start;',
    stretch: 'justify-items:stretch;',
    unset: 'justify-items:unset;',
  } as const;
}

type JustifyItemsCssKeywords = Readonly<ReturnType<typeof justifyItemsKeywords>>;
export interface JustifyItemsCss extends JustifyItemsCssKeywords {}
/** CSS 属性 justify-items；初始值 legacy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
 */
export class JustifyItemsCss extends CssProperty<Property.JustifyItems> {
  constructor() {
    super('justify-items');
    initializeJustifyItemsCss();
  }
}
let justifyItemsReady = false;
function initializeJustifyItemsCss(): void {
  if (justifyItemsReady) return;
  Object.assign(JustifyItemsCss.prototype, justifyItemsKeywords());
  Object.freeze(JustifyItemsCss.prototype);
  justifyItemsReady = true;
}

function justifySelfKeywords() {
  return {
    anchorCenter: 'justify-self:anchor-center;',
    auto: 'justify-self:auto;',
    baseline: 'justify-self:baseline;',
    center: 'justify-self:center;',
    end: 'justify-self:end;',
    flexEnd: 'justify-self:flex-end;',
    flexStart: 'justify-self:flex-start;',
    inherit: 'justify-self:inherit;',
    initial: 'justify-self:initial;',
    left: 'justify-self:left;',
    normal: 'justify-self:normal;',
    revert: 'justify-self:revert;',
    revertLayer: 'justify-self:revert-layer;',
    right: 'justify-self:right;',
    selfEnd: 'justify-self:self-end;',
    selfStart: 'justify-self:self-start;',
    start: 'justify-self:start;',
    stretch: 'justify-self:stretch;',
    unset: 'justify-self:unset;',
  } as const;
}

type JustifySelfCssKeywords = Readonly<ReturnType<typeof justifySelfKeywords>>;
export interface JustifySelfCss extends JustifySelfCssKeywords {}
/** CSS 属性 justify-self；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
 */
export class JustifySelfCss extends CssProperty<Property.JustifySelf> {
  constructor() {
    super('justify-self');
    initializeJustifySelfCss();
  }
}
let justifySelfReady = false;
function initializeJustifySelfCss(): void {
  if (justifySelfReady) return;
  Object.assign(JustifySelfCss.prototype, justifySelfKeywords());
  Object.freeze(JustifySelfCss.prototype);
  justifySelfReady = true;
}

function justifyTracksKeywords() {
  return {
    center: 'justify-tracks:center;',
    end: 'justify-tracks:end;',
    flexEnd: 'justify-tracks:flex-end;',
    flexStart: 'justify-tracks:flex-start;',
    inherit: 'justify-tracks:inherit;',
    initial: 'justify-tracks:initial;',
    left: 'justify-tracks:left;',
    normal: 'justify-tracks:normal;',
    revert: 'justify-tracks:revert;',
    revertLayer: 'justify-tracks:revert-layer;',
    right: 'justify-tracks:right;',
    spaceAround: 'justify-tracks:space-around;',
    spaceBetween: 'justify-tracks:space-between;',
    spaceEvenly: 'justify-tracks:space-evenly;',
    start: 'justify-tracks:start;',
    stretch: 'justify-tracks:stretch;',
    unset: 'justify-tracks:unset;',
  } as const;
}

type JustifyTracksCssKeywords = Readonly<ReturnType<typeof justifyTracksKeywords>>;
export interface JustifyTracksCss extends JustifyTracksCssKeywords {}
/** CSS 属性 justify-tracks；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
 */
export class JustifyTracksCss extends CssProperty<Property.JustifyTracks> {
  constructor() {
    super('justify-tracks');
    initializeJustifyTracksCss();
  }
}
let justifyTracksReady = false;
function initializeJustifyTracksCss(): void {
  if (justifyTracksReady) return;
  Object.assign(JustifyTracksCss.prototype, justifyTracksKeywords());
  Object.freeze(JustifyTracksCss.prototype);
  justifyTracksReady = true;
}

function leftKeywords() {
  return {
    auto: 'left:auto;',
    inherit: 'left:inherit;',
    initial: 'left:initial;',
    revert: 'left:revert;',
    revertLayer: 'left:revert-layer;',
    unset: 'left:unset;',
  } as const;
}

type LeftCssKeywords = Readonly<ReturnType<typeof leftKeywords>>;
export interface LeftCss extends LeftCssKeywords {}
/** CSS 属性 left；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
 */
export class LeftCss extends LengthCssProperty<Property.Left> {
  constructor() {
    super('left');
    initializeLeftCss();
  }
}
let leftReady = false;
function initializeLeftCss(): void {
  if (leftReady) return;
  Object.assign(LeftCss.prototype, leftKeywords());
  Object.freeze(LeftCss.prototype);
  leftReady = true;
}

function letterSpacingKeywords() {
  return {
    inherit: 'letter-spacing:inherit;',
    initial: 'letter-spacing:initial;',
    normal: 'letter-spacing:normal;',
    revert: 'letter-spacing:revert;',
    revertLayer: 'letter-spacing:revert-layer;',
    unset: 'letter-spacing:unset;',
  } as const;
}

type LetterSpacingCssKeywords = Readonly<ReturnType<typeof letterSpacingKeywords>>;
export interface LetterSpacingCss extends LetterSpacingCssKeywords {}
/** CSS 属性 letter-spacing；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
 */
export class LetterSpacingCss extends LengthCssProperty<Property.LetterSpacing> {
  constructor() {
    super('letter-spacing');
    initializeLetterSpacingCss();
  }
}
let letterSpacingReady = false;
function initializeLetterSpacingCss(): void {
  if (letterSpacingReady) return;
  Object.assign(LetterSpacingCss.prototype, letterSpacingKeywords());
  Object.freeze(LetterSpacingCss.prototype);
  letterSpacingReady = true;
}

function lightingColorKeywords() {
  return {
    AccentColor: 'lighting-color:AccentColor;',
    AccentColorText: 'lighting-color:AccentColorText;',
    ActiveBorder: 'lighting-color:ActiveBorder;',
    ActiveCaption: 'lighting-color:ActiveCaption;',
    ActiveText: 'lighting-color:ActiveText;',
    AppWorkspace: 'lighting-color:AppWorkspace;',
    Background: 'lighting-color:Background;',
    ButtonBorder: 'lighting-color:ButtonBorder;',
    ButtonFace: 'lighting-color:ButtonFace;',
    ButtonHighlight: 'lighting-color:ButtonHighlight;',
    ButtonShadow: 'lighting-color:ButtonShadow;',
    ButtonText: 'lighting-color:ButtonText;',
    Canvas: 'lighting-color:Canvas;',
    CanvasText: 'lighting-color:CanvasText;',
    CaptionText: 'lighting-color:CaptionText;',
    Field: 'lighting-color:Field;',
    FieldText: 'lighting-color:FieldText;',
    GrayText: 'lighting-color:GrayText;',
    Highlight: 'lighting-color:Highlight;',
    HighlightText: 'lighting-color:HighlightText;',
    InactiveBorder: 'lighting-color:InactiveBorder;',
    InactiveCaption: 'lighting-color:InactiveCaption;',
    InactiveCaptionText: 'lighting-color:InactiveCaptionText;',
    InfoBackground: 'lighting-color:InfoBackground;',
    InfoText: 'lighting-color:InfoText;',
    LinkText: 'lighting-color:LinkText;',
    Mark: 'lighting-color:Mark;',
    MarkText: 'lighting-color:MarkText;',
    Menu: 'lighting-color:Menu;',
    MenuText: 'lighting-color:MenuText;',
    Scrollbar: 'lighting-color:Scrollbar;',
    SelectedItem: 'lighting-color:SelectedItem;',
    SelectedItemText: 'lighting-color:SelectedItemText;',
    ThreeDDarkShadow: 'lighting-color:ThreeDDarkShadow;',
    ThreeDFace: 'lighting-color:ThreeDFace;',
    ThreeDHighlight: 'lighting-color:ThreeDHighlight;',
    ThreeDLightShadow: 'lighting-color:ThreeDLightShadow;',
    ThreeDShadow: 'lighting-color:ThreeDShadow;',
    VisitedText: 'lighting-color:VisitedText;',
    Window: 'lighting-color:Window;',
    WindowFrame: 'lighting-color:WindowFrame;',
    WindowText: 'lighting-color:WindowText;',
    aliceblue: 'lighting-color:aliceblue;',
    antiquewhite: 'lighting-color:antiquewhite;',
    aqua: 'lighting-color:aqua;',
    aquamarine: 'lighting-color:aquamarine;',
    azure: 'lighting-color:azure;',
    beige: 'lighting-color:beige;',
    bisque: 'lighting-color:bisque;',
    black: 'lighting-color:black;',
    blanchedalmond: 'lighting-color:blanchedalmond;',
    blue: 'lighting-color:blue;',
    blueviolet: 'lighting-color:blueviolet;',
    brown: 'lighting-color:brown;',
    burlywood: 'lighting-color:burlywood;',
    cadetblue: 'lighting-color:cadetblue;',
    chartreuse: 'lighting-color:chartreuse;',
    chocolate: 'lighting-color:chocolate;',
    coral: 'lighting-color:coral;',
    cornflowerblue: 'lighting-color:cornflowerblue;',
    cornsilk: 'lighting-color:cornsilk;',
    crimson: 'lighting-color:crimson;',
    currentColor: 'lighting-color:currentColor;',
    cyan: 'lighting-color:cyan;',
    darkblue: 'lighting-color:darkblue;',
    darkcyan: 'lighting-color:darkcyan;',
    darkgoldenrod: 'lighting-color:darkgoldenrod;',
    darkgray: 'lighting-color:darkgray;',
    darkgreen: 'lighting-color:darkgreen;',
    darkgrey: 'lighting-color:darkgrey;',
    darkkhaki: 'lighting-color:darkkhaki;',
    darkmagenta: 'lighting-color:darkmagenta;',
    darkolivegreen: 'lighting-color:darkolivegreen;',
    darkorange: 'lighting-color:darkorange;',
    darkorchid: 'lighting-color:darkorchid;',
    darkred: 'lighting-color:darkred;',
    darksalmon: 'lighting-color:darksalmon;',
    darkseagreen: 'lighting-color:darkseagreen;',
    darkslateblue: 'lighting-color:darkslateblue;',
    darkslategray: 'lighting-color:darkslategray;',
    darkslategrey: 'lighting-color:darkslategrey;',
    darkturquoise: 'lighting-color:darkturquoise;',
    darkviolet: 'lighting-color:darkviolet;',
    deeppink: 'lighting-color:deeppink;',
    deepskyblue: 'lighting-color:deepskyblue;',
    dimgray: 'lighting-color:dimgray;',
    dimgrey: 'lighting-color:dimgrey;',
    dodgerblue: 'lighting-color:dodgerblue;',
    firebrick: 'lighting-color:firebrick;',
    floralwhite: 'lighting-color:floralwhite;',
    forestgreen: 'lighting-color:forestgreen;',
    fuchsia: 'lighting-color:fuchsia;',
    gainsboro: 'lighting-color:gainsboro;',
    ghostwhite: 'lighting-color:ghostwhite;',
    gold: 'lighting-color:gold;',
    goldenrod: 'lighting-color:goldenrod;',
    gray: 'lighting-color:gray;',
    green: 'lighting-color:green;',
    greenyellow: 'lighting-color:greenyellow;',
    grey: 'lighting-color:grey;',
    honeydew: 'lighting-color:honeydew;',
    hotpink: 'lighting-color:hotpink;',
    indianred: 'lighting-color:indianred;',
    indigo: 'lighting-color:indigo;',
    inherit: 'lighting-color:inherit;',
    initial: 'lighting-color:initial;',
    ivory: 'lighting-color:ivory;',
    khaki: 'lighting-color:khaki;',
    lavender: 'lighting-color:lavender;',
    lavenderblush: 'lighting-color:lavenderblush;',
    lawngreen: 'lighting-color:lawngreen;',
    lemonchiffon: 'lighting-color:lemonchiffon;',
    lightblue: 'lighting-color:lightblue;',
    lightcoral: 'lighting-color:lightcoral;',
    lightcyan: 'lighting-color:lightcyan;',
    lightgoldenrodyellow: 'lighting-color:lightgoldenrodyellow;',
    lightgray: 'lighting-color:lightgray;',
    lightgreen: 'lighting-color:lightgreen;',
    lightgrey: 'lighting-color:lightgrey;',
    lightpink: 'lighting-color:lightpink;',
    lightsalmon: 'lighting-color:lightsalmon;',
    lightseagreen: 'lighting-color:lightseagreen;',
    lightskyblue: 'lighting-color:lightskyblue;',
    lightslategray: 'lighting-color:lightslategray;',
    lightslategrey: 'lighting-color:lightslategrey;',
    lightsteelblue: 'lighting-color:lightsteelblue;',
    lightyellow: 'lighting-color:lightyellow;',
    lime: 'lighting-color:lime;',
    limegreen: 'lighting-color:limegreen;',
    linen: 'lighting-color:linen;',
    magenta: 'lighting-color:magenta;',
    maroon: 'lighting-color:maroon;',
    mediumaquamarine: 'lighting-color:mediumaquamarine;',
    mediumblue: 'lighting-color:mediumblue;',
    mediumorchid: 'lighting-color:mediumorchid;',
    mediumpurple: 'lighting-color:mediumpurple;',
    mediumseagreen: 'lighting-color:mediumseagreen;',
    mediumslateblue: 'lighting-color:mediumslateblue;',
    mediumspringgreen: 'lighting-color:mediumspringgreen;',
    mediumturquoise: 'lighting-color:mediumturquoise;',
    mediumvioletred: 'lighting-color:mediumvioletred;',
    midnightblue: 'lighting-color:midnightblue;',
    mintcream: 'lighting-color:mintcream;',
    mistyrose: 'lighting-color:mistyrose;',
    moccasin: 'lighting-color:moccasin;',
    navajowhite: 'lighting-color:navajowhite;',
    navy: 'lighting-color:navy;',
    oldlace: 'lighting-color:oldlace;',
    olive: 'lighting-color:olive;',
    olivedrab: 'lighting-color:olivedrab;',
    orange: 'lighting-color:orange;',
    orangered: 'lighting-color:orangered;',
    orchid: 'lighting-color:orchid;',
    palegoldenrod: 'lighting-color:palegoldenrod;',
    palegreen: 'lighting-color:palegreen;',
    paleturquoise: 'lighting-color:paleturquoise;',
    palevioletred: 'lighting-color:palevioletred;',
    papayawhip: 'lighting-color:papayawhip;',
    peachpuff: 'lighting-color:peachpuff;',
    peru: 'lighting-color:peru;',
    pink: 'lighting-color:pink;',
    plum: 'lighting-color:plum;',
    powderblue: 'lighting-color:powderblue;',
    purple: 'lighting-color:purple;',
    rebeccapurple: 'lighting-color:rebeccapurple;',
    red: 'lighting-color:red;',
    revert: 'lighting-color:revert;',
    revertLayer: 'lighting-color:revert-layer;',
    rosybrown: 'lighting-color:rosybrown;',
    royalblue: 'lighting-color:royalblue;',
    saddlebrown: 'lighting-color:saddlebrown;',
    salmon: 'lighting-color:salmon;',
    sandybrown: 'lighting-color:sandybrown;',
    seagreen: 'lighting-color:seagreen;',
    seashell: 'lighting-color:seashell;',
    sienna: 'lighting-color:sienna;',
    silver: 'lighting-color:silver;',
    skyblue: 'lighting-color:skyblue;',
    slateblue: 'lighting-color:slateblue;',
    slategray: 'lighting-color:slategray;',
    slategrey: 'lighting-color:slategrey;',
    snow: 'lighting-color:snow;',
    springgreen: 'lighting-color:springgreen;',
    steelblue: 'lighting-color:steelblue;',
    tan: 'lighting-color:tan;',
    teal: 'lighting-color:teal;',
    thistle: 'lighting-color:thistle;',
    tomato: 'lighting-color:tomato;',
    transparent: 'lighting-color:transparent;',
    turquoise: 'lighting-color:turquoise;',
    unset: 'lighting-color:unset;',
    violet: 'lighting-color:violet;',
    wheat: 'lighting-color:wheat;',
    white: 'lighting-color:white;',
    whitesmoke: 'lighting-color:whitesmoke;',
    yellow: 'lighting-color:yellow;',
    yellowgreen: 'lighting-color:yellowgreen;',
  } as const;
}

type LightingColorCssKeywords = Readonly<ReturnType<typeof lightingColorKeywords>>;
export interface LightingColorCss extends LightingColorCssKeywords {}
/** CSS 属性 lighting-color；初始值 white。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
 */
export class LightingColorCss extends CssProperty<Property.LightingColor> {
  constructor() {
    super('lighting-color');
    initializeLightingColorCss();
  }
}
let lightingColorReady = false;
function initializeLightingColorCss(): void {
  if (lightingColorReady) return;
  Object.assign(LightingColorCss.prototype, lightingColorKeywords());
  Object.freeze(LightingColorCss.prototype);
  lightingColorReady = true;
}

function lineBreakKeywords() {
  return {
    anywhere: 'line-break:anywhere;',
    auto: 'line-break:auto;',
    inherit: 'line-break:inherit;',
    initial: 'line-break:initial;',
    loose: 'line-break:loose;',
    normal: 'line-break:normal;',
    revert: 'line-break:revert;',
    revertLayer: 'line-break:revert-layer;',
    strict: 'line-break:strict;',
    unset: 'line-break:unset;',
  } as const;
}

type LineBreakCssKeywords = Readonly<ReturnType<typeof lineBreakKeywords>>;
export interface LineBreakCss extends LineBreakCssKeywords {}
/** CSS 属性 line-break；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
 */
export class LineBreakCss extends CssProperty<Property.LineBreak> {
  constructor() {
    super('line-break');
    initializeLineBreakCss();
  }
}
let lineBreakReady = false;
function initializeLineBreakCss(): void {
  if (lineBreakReady) return;
  Object.assign(LineBreakCss.prototype, lineBreakKeywords());
  Object.freeze(LineBreakCss.prototype);
  lineBreakReady = true;
}

function lineClampKeywords() {
  return {
    inherit: 'line-clamp:inherit;',
    initial: 'line-clamp:initial;',
    none: 'line-clamp:none;',
    revert: 'line-clamp:revert;',
    revertLayer: 'line-clamp:revert-layer;',
    unset: 'line-clamp:unset;',
  } as const;
}

type LineClampCssKeywords = Readonly<ReturnType<typeof lineClampKeywords>>;
export interface LineClampCss extends LineClampCssKeywords {}
/** CSS 属性 line-clamp；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
 */
export class LineClampCss extends CssProperty<Property.LineClamp> {
  constructor() {
    super('line-clamp');
    initializeLineClampCss();
  }
}
let lineClampReady = false;
function initializeLineClampCss(): void {
  if (lineClampReady) return;
  Object.assign(LineClampCss.prototype, lineClampKeywords());
  Object.freeze(LineClampCss.prototype);
  lineClampReady = true;
}

function lineHeightKeywords() {
  return {
    inherit: 'line-height:inherit;',
    initial: 'line-height:initial;',
    normal: 'line-height:normal;',
    revert: 'line-height:revert;',
    revertLayer: 'line-height:revert-layer;',
    unset: 'line-height:unset;',
  } as const;
}

type LineHeightCssKeywords = Readonly<ReturnType<typeof lineHeightKeywords>>;
export interface LineHeightCss extends LineHeightCssKeywords {}
/** CSS 属性 line-height；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
 */
export class LineHeightCss extends LengthCssProperty<Property.LineHeight> {
  constructor() {
    super('line-height');
    initializeLineHeightCss();
  }
}
let lineHeightReady = false;
function initializeLineHeightCss(): void {
  if (lineHeightReady) return;
  Object.assign(LineHeightCss.prototype, lineHeightKeywords());
  Object.freeze(LineHeightCss.prototype);
  lineHeightReady = true;
}

function lineHeightStepKeywords() {
  return {
    inherit: 'line-height-step:inherit;',
    initial: 'line-height-step:initial;',
    revert: 'line-height-step:revert;',
    revertLayer: 'line-height-step:revert-layer;',
    unset: 'line-height-step:unset;',
  } as const;
}

type LineHeightStepCssKeywords = Readonly<ReturnType<typeof lineHeightStepKeywords>>;
export interface LineHeightStepCss extends LineHeightStepCssKeywords {}
/** CSS 属性 line-height-step；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
 */
export class LineHeightStepCss extends LengthCssProperty<Property.LineHeightStep> {
  constructor() {
    super('line-height-step');
    initializeLineHeightStepCss();
  }
}
let lineHeightStepReady = false;
function initializeLineHeightStepCss(): void {
  if (lineHeightStepReady) return;
  Object.assign(LineHeightStepCss.prototype, lineHeightStepKeywords());
  Object.freeze(LineHeightStepCss.prototype);
  lineHeightStepReady = true;
}

function listStyleKeywords() {
  return {
    inherit: 'list-style:inherit;',
    initial: 'list-style:initial;',
    inside: 'list-style:inside;',
    none: 'list-style:none;',
    outside: 'list-style:outside;',
    revert: 'list-style:revert;',
    revertLayer: 'list-style:revert-layer;',
    unset: 'list-style:unset;',
  } as const;
}

type ListStyleCssKeywords = Readonly<ReturnType<typeof listStyleKeywords>>;
export interface ListStyleCss extends ListStyleCssKeywords {}
/** CSS 属性 list-style。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
 */
export class ListStyleCss extends CssProperty<Property.ListStyle> {
  constructor() {
    super('list-style');
    initializeListStyleCss();
  }
}
let listStyleReady = false;
function initializeListStyleCss(): void {
  if (listStyleReady) return;
  Object.assign(ListStyleCss.prototype, listStyleKeywords());
  Object.freeze(ListStyleCss.prototype);
  listStyleReady = true;
}

function listStyleImageKeywords() {
  return {
    inherit: 'list-style-image:inherit;',
    initial: 'list-style-image:initial;',
    none: 'list-style-image:none;',
    revert: 'list-style-image:revert;',
    revertLayer: 'list-style-image:revert-layer;',
    unset: 'list-style-image:unset;',
  } as const;
}

type ListStyleImageCssKeywords = Readonly<ReturnType<typeof listStyleImageKeywords>>;
export interface ListStyleImageCss extends ListStyleImageCssKeywords {}
/** CSS 属性 list-style-image；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
 */
export class ListStyleImageCss extends CssProperty<Property.ListStyleImage> {
  constructor() {
    super('list-style-image');
    initializeListStyleImageCss();
  }
}
let listStyleImageReady = false;
function initializeListStyleImageCss(): void {
  if (listStyleImageReady) return;
  Object.assign(ListStyleImageCss.prototype, listStyleImageKeywords());
  Object.freeze(ListStyleImageCss.prototype);
  listStyleImageReady = true;
}

function listStylePositionKeywords() {
  return {
    inherit: 'list-style-position:inherit;',
    initial: 'list-style-position:initial;',
    inside: 'list-style-position:inside;',
    outside: 'list-style-position:outside;',
    revert: 'list-style-position:revert;',
    revertLayer: 'list-style-position:revert-layer;',
    unset: 'list-style-position:unset;',
  } as const;
}

type ListStylePositionCssKeywords = Readonly<ReturnType<typeof listStylePositionKeywords>>;
export interface ListStylePositionCss extends ListStylePositionCssKeywords {}
/** CSS 属性 list-style-position；初始值 outside。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
 */
export class ListStylePositionCss extends CssProperty<Property.ListStylePosition> {
  constructor() {
    super('list-style-position');
    initializeListStylePositionCss();
  }
}
let listStylePositionReady = false;
function initializeListStylePositionCss(): void {
  if (listStylePositionReady) return;
  Object.assign(ListStylePositionCss.prototype, listStylePositionKeywords());
  Object.freeze(ListStylePositionCss.prototype);
  listStylePositionReady = true;
}

function listStyleTypeKeywords() {
  return {
    inherit: 'list-style-type:inherit;',
    initial: 'list-style-type:initial;',
    none: 'list-style-type:none;',
    revert: 'list-style-type:revert;',
    revertLayer: 'list-style-type:revert-layer;',
    unset: 'list-style-type:unset;',
  } as const;
}

type ListStyleTypeCssKeywords = Readonly<ReturnType<typeof listStyleTypeKeywords>>;
export interface ListStyleTypeCss extends ListStyleTypeCssKeywords {}
/** CSS 属性 list-style-type；初始值 disc。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
 */
export class ListStyleTypeCss extends CssProperty<Property.ListStyleType> {
  constructor() {
    super('list-style-type');
    initializeListStyleTypeCss();
  }
}
let listStyleTypeReady = false;
function initializeListStyleTypeCss(): void {
  if (listStyleTypeReady) return;
  Object.assign(ListStyleTypeCss.prototype, listStyleTypeKeywords());
  Object.freeze(ListStyleTypeCss.prototype);
  listStyleTypeReady = true;
}

function marginKeywords() {
  return {
    auto: 'margin:auto;',
    inherit: 'margin:inherit;',
    initial: 'margin:initial;',
    revert: 'margin:revert;',
    revertLayer: 'margin:revert-layer;',
    unset: 'margin:unset;',
  } as const;
}

type MarginCssKeywords = Readonly<ReturnType<typeof marginKeywords>>;
export interface MarginCss extends MarginCssKeywords {}
/** 外边距（CSS margin）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
 */
export class MarginCss extends LengthCssProperty<Property.Margin> {
  constructor() {
    super('margin');
    initializeMarginCss();
  }
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
}
let marginReady = false;
function initializeMarginCss(): void {
  if (marginReady) return;
  Object.assign(MarginCss.prototype, marginKeywords());
  Object.freeze(MarginCss.prototype);
  marginReady = true;
}

function marginBlockKeywords() {
  return {
    auto: 'margin-block:auto;',
    inherit: 'margin-block:inherit;',
    initial: 'margin-block:initial;',
    revert: 'margin-block:revert;',
    revertLayer: 'margin-block:revert-layer;',
    unset: 'margin-block:unset;',
  } as const;
}

type MarginBlockCssKeywords = Readonly<ReturnType<typeof marginBlockKeywords>>;
export interface MarginBlockCss extends MarginBlockCssKeywords {}
/** CSS 属性 margin-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
 */
export class MarginBlockCss extends LengthCssProperty<Property.MarginBlock> {
  constructor() {
    super('margin-block');
    initializeMarginBlockCss();
  }
}
let marginBlockReady = false;
function initializeMarginBlockCss(): void {
  if (marginBlockReady) return;
  Object.assign(MarginBlockCss.prototype, marginBlockKeywords());
  Object.freeze(MarginBlockCss.prototype);
  marginBlockReady = true;
}

function marginBlockEndKeywords() {
  return {
    auto: 'margin-block-end:auto;',
    inherit: 'margin-block-end:inherit;',
    initial: 'margin-block-end:initial;',
    revert: 'margin-block-end:revert;',
    revertLayer: 'margin-block-end:revert-layer;',
    unset: 'margin-block-end:unset;',
  } as const;
}

type MarginBlockEndCssKeywords = Readonly<ReturnType<typeof marginBlockEndKeywords>>;
export interface MarginBlockEndCss extends MarginBlockEndCssKeywords {}
/** CSS 属性 margin-block-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
 */
export class MarginBlockEndCss extends LengthCssProperty<Property.MarginBlockEnd> {
  constructor() {
    super('margin-block-end');
    initializeMarginBlockEndCss();
  }
}
let marginBlockEndReady = false;
function initializeMarginBlockEndCss(): void {
  if (marginBlockEndReady) return;
  Object.assign(MarginBlockEndCss.prototype, marginBlockEndKeywords());
  Object.freeze(MarginBlockEndCss.prototype);
  marginBlockEndReady = true;
}

function marginBlockStartKeywords() {
  return {
    auto: 'margin-block-start:auto;',
    inherit: 'margin-block-start:inherit;',
    initial: 'margin-block-start:initial;',
    revert: 'margin-block-start:revert;',
    revertLayer: 'margin-block-start:revert-layer;',
    unset: 'margin-block-start:unset;',
  } as const;
}

type MarginBlockStartCssKeywords = Readonly<ReturnType<typeof marginBlockStartKeywords>>;
export interface MarginBlockStartCss extends MarginBlockStartCssKeywords {}
/** CSS 属性 margin-block-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
 */
export class MarginBlockStartCss extends LengthCssProperty<Property.MarginBlockStart> {
  constructor() {
    super('margin-block-start');
    initializeMarginBlockStartCss();
  }
}
let marginBlockStartReady = false;
function initializeMarginBlockStartCss(): void {
  if (marginBlockStartReady) return;
  Object.assign(MarginBlockStartCss.prototype, marginBlockStartKeywords());
  Object.freeze(MarginBlockStartCss.prototype);
  marginBlockStartReady = true;
}

function marginBottomKeywords() {
  return {
    auto: 'margin-bottom:auto;',
    inherit: 'margin-bottom:inherit;',
    initial: 'margin-bottom:initial;',
    revert: 'margin-bottom:revert;',
    revertLayer: 'margin-bottom:revert-layer;',
    unset: 'margin-bottom:unset;',
  } as const;
}

type MarginBottomCssKeywords = Readonly<ReturnType<typeof marginBottomKeywords>>;
export interface MarginBottomCss extends MarginBottomCssKeywords {}
/** CSS 属性 margin-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
 */
export class MarginBottomCss extends LengthCssProperty<Property.MarginBottom> {
  constructor() {
    super('margin-bottom');
    initializeMarginBottomCss();
  }
}
let marginBottomReady = false;
function initializeMarginBottomCss(): void {
  if (marginBottomReady) return;
  Object.assign(MarginBottomCss.prototype, marginBottomKeywords());
  Object.freeze(MarginBottomCss.prototype);
  marginBottomReady = true;
}

function marginInlineKeywords() {
  return {
    auto: 'margin-inline:auto;',
    inherit: 'margin-inline:inherit;',
    initial: 'margin-inline:initial;',
    revert: 'margin-inline:revert;',
    revertLayer: 'margin-inline:revert-layer;',
    unset: 'margin-inline:unset;',
  } as const;
}

type MarginInlineCssKeywords = Readonly<ReturnType<typeof marginInlineKeywords>>;
export interface MarginInlineCss extends MarginInlineCssKeywords {}
/** CSS 属性 margin-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
 */
export class MarginInlineCss extends LengthCssProperty<Property.MarginInline> {
  constructor() {
    super('margin-inline');
    initializeMarginInlineCss();
  }
}
let marginInlineReady = false;
function initializeMarginInlineCss(): void {
  if (marginInlineReady) return;
  Object.assign(MarginInlineCss.prototype, marginInlineKeywords());
  Object.freeze(MarginInlineCss.prototype);
  marginInlineReady = true;
}

function marginInlineEndKeywords() {
  return {
    auto: 'margin-inline-end:auto;',
    inherit: 'margin-inline-end:inherit;',
    initial: 'margin-inline-end:initial;',
    revert: 'margin-inline-end:revert;',
    revertLayer: 'margin-inline-end:revert-layer;',
    unset: 'margin-inline-end:unset;',
  } as const;
}

type MarginInlineEndCssKeywords = Readonly<ReturnType<typeof marginInlineEndKeywords>>;
export interface MarginInlineEndCss extends MarginInlineEndCssKeywords {}
/** CSS 属性 margin-inline-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
 */
export class MarginInlineEndCss extends LengthCssProperty<Property.MarginInlineEnd> {
  constructor() {
    super('margin-inline-end');
    initializeMarginInlineEndCss();
  }
}
let marginInlineEndReady = false;
function initializeMarginInlineEndCss(): void {
  if (marginInlineEndReady) return;
  Object.assign(MarginInlineEndCss.prototype, marginInlineEndKeywords());
  Object.freeze(MarginInlineEndCss.prototype);
  marginInlineEndReady = true;
}

function marginInlineStartKeywords() {
  return {
    auto: 'margin-inline-start:auto;',
    inherit: 'margin-inline-start:inherit;',
    initial: 'margin-inline-start:initial;',
    revert: 'margin-inline-start:revert;',
    revertLayer: 'margin-inline-start:revert-layer;',
    unset: 'margin-inline-start:unset;',
  } as const;
}

type MarginInlineStartCssKeywords = Readonly<ReturnType<typeof marginInlineStartKeywords>>;
export interface MarginInlineStartCss extends MarginInlineStartCssKeywords {}
/** CSS 属性 margin-inline-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
 */
export class MarginInlineStartCss extends LengthCssProperty<Property.MarginInlineStart> {
  constructor() {
    super('margin-inline-start');
    initializeMarginInlineStartCss();
  }
}
let marginInlineStartReady = false;
function initializeMarginInlineStartCss(): void {
  if (marginInlineStartReady) return;
  Object.assign(MarginInlineStartCss.prototype, marginInlineStartKeywords());
  Object.freeze(MarginInlineStartCss.prototype);
  marginInlineStartReady = true;
}

function marginLeftKeywords() {
  return {
    auto: 'margin-left:auto;',
    inherit: 'margin-left:inherit;',
    initial: 'margin-left:initial;',
    revert: 'margin-left:revert;',
    revertLayer: 'margin-left:revert-layer;',
    unset: 'margin-left:unset;',
  } as const;
}

type MarginLeftCssKeywords = Readonly<ReturnType<typeof marginLeftKeywords>>;
export interface MarginLeftCss extends MarginLeftCssKeywords {}
/** CSS 属性 margin-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
 */
export class MarginLeftCss extends LengthCssProperty<Property.MarginLeft> {
  constructor() {
    super('margin-left');
    initializeMarginLeftCss();
  }
}
let marginLeftReady = false;
function initializeMarginLeftCss(): void {
  if (marginLeftReady) return;
  Object.assign(MarginLeftCss.prototype, marginLeftKeywords());
  Object.freeze(MarginLeftCss.prototype);
  marginLeftReady = true;
}

function marginRightKeywords() {
  return {
    auto: 'margin-right:auto;',
    inherit: 'margin-right:inherit;',
    initial: 'margin-right:initial;',
    revert: 'margin-right:revert;',
    revertLayer: 'margin-right:revert-layer;',
    unset: 'margin-right:unset;',
  } as const;
}

type MarginRightCssKeywords = Readonly<ReturnType<typeof marginRightKeywords>>;
export interface MarginRightCss extends MarginRightCssKeywords {}
/** CSS 属性 margin-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
 */
export class MarginRightCss extends LengthCssProperty<Property.MarginRight> {
  constructor() {
    super('margin-right');
    initializeMarginRightCss();
  }
}
let marginRightReady = false;
function initializeMarginRightCss(): void {
  if (marginRightReady) return;
  Object.assign(MarginRightCss.prototype, marginRightKeywords());
  Object.freeze(MarginRightCss.prototype);
  marginRightReady = true;
}

function marginTopKeywords() {
  return {
    auto: 'margin-top:auto;',
    inherit: 'margin-top:inherit;',
    initial: 'margin-top:initial;',
    revert: 'margin-top:revert;',
    revertLayer: 'margin-top:revert-layer;',
    unset: 'margin-top:unset;',
  } as const;
}

type MarginTopCssKeywords = Readonly<ReturnType<typeof marginTopKeywords>>;
export interface MarginTopCss extends MarginTopCssKeywords {}
/** CSS 属性 margin-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
 */
export class MarginTopCss extends LengthCssProperty<Property.MarginTop> {
  constructor() {
    super('margin-top');
    initializeMarginTopCss();
  }
}
let marginTopReady = false;
function initializeMarginTopCss(): void {
  if (marginTopReady) return;
  Object.assign(MarginTopCss.prototype, marginTopKeywords());
  Object.freeze(MarginTopCss.prototype);
  marginTopReady = true;
}

function marginTrimKeywords() {
  return {
    all: 'margin-trim:all;',
    inFlow: 'margin-trim:in-flow;',
    inherit: 'margin-trim:inherit;',
    initial: 'margin-trim:initial;',
    none: 'margin-trim:none;',
    revert: 'margin-trim:revert;',
    revertLayer: 'margin-trim:revert-layer;',
    unset: 'margin-trim:unset;',
  } as const;
}

type MarginTrimCssKeywords = Readonly<ReturnType<typeof marginTrimKeywords>>;
export interface MarginTrimCss extends MarginTrimCssKeywords {}
/** CSS 属性 margin-trim；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
 */
export class MarginTrimCss extends CssProperty<Property.MarginTrim> {
  constructor() {
    super('margin-trim');
    initializeMarginTrimCss();
  }
}
let marginTrimReady = false;
function initializeMarginTrimCss(): void {
  if (marginTrimReady) return;
  Object.assign(MarginTrimCss.prototype, marginTrimKeywords());
  Object.freeze(MarginTrimCss.prototype);
  marginTrimReady = true;
}

function markerKeywords() {
  return {
    inherit: 'marker:inherit;',
    initial: 'marker:initial;',
    none: 'marker:none;',
    revert: 'marker:revert;',
    revertLayer: 'marker:revert-layer;',
    unset: 'marker:unset;',
  } as const;
}

type MarkerCssKeywords = Readonly<ReturnType<typeof markerKeywords>>;
export interface MarkerCss extends MarkerCssKeywords {}
/** CSS 属性 marker。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
 */
export class MarkerCss extends CssProperty<Property.Marker> {
  constructor() {
    super('marker');
    initializeMarkerCss();
  }
}
let markerReady = false;
function initializeMarkerCss(): void {
  if (markerReady) return;
  Object.assign(MarkerCss.prototype, markerKeywords());
  Object.freeze(MarkerCss.prototype);
  markerReady = true;
}

function markerEndKeywords() {
  return {
    inherit: 'marker-end:inherit;',
    initial: 'marker-end:initial;',
    none: 'marker-end:none;',
    revert: 'marker-end:revert;',
    revertLayer: 'marker-end:revert-layer;',
    unset: 'marker-end:unset;',
  } as const;
}

type MarkerEndCssKeywords = Readonly<ReturnType<typeof markerEndKeywords>>;
export interface MarkerEndCss extends MarkerEndCssKeywords {}
/** CSS 属性 marker-end；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
 */
export class MarkerEndCss extends CssProperty<Property.MarkerEnd> {
  constructor() {
    super('marker-end');
    initializeMarkerEndCss();
  }
}
let markerEndReady = false;
function initializeMarkerEndCss(): void {
  if (markerEndReady) return;
  Object.assign(MarkerEndCss.prototype, markerEndKeywords());
  Object.freeze(MarkerEndCss.prototype);
  markerEndReady = true;
}

function markerMidKeywords() {
  return {
    inherit: 'marker-mid:inherit;',
    initial: 'marker-mid:initial;',
    none: 'marker-mid:none;',
    revert: 'marker-mid:revert;',
    revertLayer: 'marker-mid:revert-layer;',
    unset: 'marker-mid:unset;',
  } as const;
}

type MarkerMidCssKeywords = Readonly<ReturnType<typeof markerMidKeywords>>;
export interface MarkerMidCss extends MarkerMidCssKeywords {}
/** CSS 属性 marker-mid；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
 */
export class MarkerMidCss extends CssProperty<Property.MarkerMid> {
  constructor() {
    super('marker-mid');
    initializeMarkerMidCss();
  }
}
let markerMidReady = false;
function initializeMarkerMidCss(): void {
  if (markerMidReady) return;
  Object.assign(MarkerMidCss.prototype, markerMidKeywords());
  Object.freeze(MarkerMidCss.prototype);
  markerMidReady = true;
}

function markerStartKeywords() {
  return {
    inherit: 'marker-start:inherit;',
    initial: 'marker-start:initial;',
    none: 'marker-start:none;',
    revert: 'marker-start:revert;',
    revertLayer: 'marker-start:revert-layer;',
    unset: 'marker-start:unset;',
  } as const;
}

type MarkerStartCssKeywords = Readonly<ReturnType<typeof markerStartKeywords>>;
export interface MarkerStartCss extends MarkerStartCssKeywords {}
/** CSS 属性 marker-start；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
 */
export class MarkerStartCss extends CssProperty<Property.MarkerStart> {
  constructor() {
    super('marker-start');
    initializeMarkerStartCss();
  }
}
let markerStartReady = false;
function initializeMarkerStartCss(): void {
  if (markerStartReady) return;
  Object.assign(MarkerStartCss.prototype, markerStartKeywords());
  Object.freeze(MarkerStartCss.prototype);
  markerStartReady = true;
}

function maskKeywords() {
  return {
    add: 'mask:add;',
    alpha: 'mask:alpha;',
    borderBox: 'mask:border-box;',
    bottom: 'mask:bottom;',
    center: 'mask:center;',
    contentBox: 'mask:content-box;',
    exclude: 'mask:exclude;',
    fillBox: 'mask:fill-box;',
    inherit: 'mask:inherit;',
    initial: 'mask:initial;',
    intersect: 'mask:intersect;',
    left: 'mask:left;',
    luminance: 'mask:luminance;',
    marginBox: 'mask:margin-box;',
    matchSource: 'mask:match-source;',
    noClip: 'mask:no-clip;',
    noRepeat: 'mask:no-repeat;',
    none: 'mask:none;',
    paddingBox: 'mask:padding-box;',
    repeat: 'mask:repeat;',
    repeatX: 'mask:repeat-x;',
    repeatY: 'mask:repeat-y;',
    revert: 'mask:revert;',
    revertLayer: 'mask:revert-layer;',
    right: 'mask:right;',
    round: 'mask:round;',
    space: 'mask:space;',
    strokeBox: 'mask:stroke-box;',
    subtract: 'mask:subtract;',
    top: 'mask:top;',
    unset: 'mask:unset;',
    viewBox: 'mask:view-box;',
  } as const;
}

type MaskCssKeywords = Readonly<ReturnType<typeof maskKeywords>>;
export interface MaskCss extends MaskCssKeywords {}
/** CSS 属性 mask。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
 */
export class MaskCss extends LengthCssProperty<Property.Mask> {
  constructor() {
    super('mask');
    initializeMaskCss();
  }
}
let maskReady = false;
function initializeMaskCss(): void {
  if (maskReady) return;
  Object.assign(MaskCss.prototype, maskKeywords());
  Object.freeze(MaskCss.prototype);
  maskReady = true;
}

function maskBorderKeywords() {
  return {
    alpha: 'mask-border:alpha;',
    inherit: 'mask-border:inherit;',
    initial: 'mask-border:initial;',
    luminance: 'mask-border:luminance;',
    none: 'mask-border:none;',
    repeat: 'mask-border:repeat;',
    revert: 'mask-border:revert;',
    revertLayer: 'mask-border:revert-layer;',
    round: 'mask-border:round;',
    space: 'mask-border:space;',
    stretch: 'mask-border:stretch;',
    unset: 'mask-border:unset;',
  } as const;
}

type MaskBorderCssKeywords = Readonly<ReturnType<typeof maskBorderKeywords>>;
export interface MaskBorderCss extends MaskBorderCssKeywords {}
/** CSS 属性 mask-border。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
 */
export class MaskBorderCss extends CssProperty<Property.MaskBorder> {
  constructor() {
    super('mask-border');
    initializeMaskBorderCss();
  }
}
let maskBorderReady = false;
function initializeMaskBorderCss(): void {
  if (maskBorderReady) return;
  Object.assign(MaskBorderCss.prototype, maskBorderKeywords());
  Object.freeze(MaskBorderCss.prototype);
  maskBorderReady = true;
}

function maskBorderModeKeywords() {
  return {
    alpha: 'mask-border-mode:alpha;',
    inherit: 'mask-border-mode:inherit;',
    initial: 'mask-border-mode:initial;',
    luminance: 'mask-border-mode:luminance;',
    revert: 'mask-border-mode:revert;',
    revertLayer: 'mask-border-mode:revert-layer;',
    unset: 'mask-border-mode:unset;',
  } as const;
}

type MaskBorderModeCssKeywords = Readonly<ReturnType<typeof maskBorderModeKeywords>>;
export interface MaskBorderModeCss extends MaskBorderModeCssKeywords {}
/** CSS 属性 mask-border-mode；初始值 alpha。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
 */
export class MaskBorderModeCss extends CssProperty<Property.MaskBorderMode> {
  constructor() {
    super('mask-border-mode');
    initializeMaskBorderModeCss();
  }
}
let maskBorderModeReady = false;
function initializeMaskBorderModeCss(): void {
  if (maskBorderModeReady) return;
  Object.assign(MaskBorderModeCss.prototype, maskBorderModeKeywords());
  Object.freeze(MaskBorderModeCss.prototype);
  maskBorderModeReady = true;
}

function maskBorderOutsetKeywords() {
  return {
    inherit: 'mask-border-outset:inherit;',
    initial: 'mask-border-outset:initial;',
    revert: 'mask-border-outset:revert;',
    revertLayer: 'mask-border-outset:revert-layer;',
    unset: 'mask-border-outset:unset;',
  } as const;
}

type MaskBorderOutsetCssKeywords = Readonly<ReturnType<typeof maskBorderOutsetKeywords>>;
export interface MaskBorderOutsetCss extends MaskBorderOutsetCssKeywords {}
/** CSS 属性 mask-border-outset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
 */
export class MaskBorderOutsetCss extends LengthCssProperty<Property.MaskBorderOutset> {
  constructor() {
    super('mask-border-outset');
    initializeMaskBorderOutsetCss();
  }
}
let maskBorderOutsetReady = false;
function initializeMaskBorderOutsetCss(): void {
  if (maskBorderOutsetReady) return;
  Object.assign(MaskBorderOutsetCss.prototype, maskBorderOutsetKeywords());
  Object.freeze(MaskBorderOutsetCss.prototype);
  maskBorderOutsetReady = true;
}

function maskBorderRepeatKeywords() {
  return {
    inherit: 'mask-border-repeat:inherit;',
    initial: 'mask-border-repeat:initial;',
    repeat: 'mask-border-repeat:repeat;',
    revert: 'mask-border-repeat:revert;',
    revertLayer: 'mask-border-repeat:revert-layer;',
    round: 'mask-border-repeat:round;',
    space: 'mask-border-repeat:space;',
    stretch: 'mask-border-repeat:stretch;',
    unset: 'mask-border-repeat:unset;',
  } as const;
}

type MaskBorderRepeatCssKeywords = Readonly<ReturnType<typeof maskBorderRepeatKeywords>>;
export interface MaskBorderRepeatCss extends MaskBorderRepeatCssKeywords {}
/** CSS 属性 mask-border-repeat；初始值 stretch。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
 */
export class MaskBorderRepeatCss extends CssProperty<Property.MaskBorderRepeat> {
  constructor() {
    super('mask-border-repeat');
    initializeMaskBorderRepeatCss();
  }
}
let maskBorderRepeatReady = false;
function initializeMaskBorderRepeatCss(): void {
  if (maskBorderRepeatReady) return;
  Object.assign(MaskBorderRepeatCss.prototype, maskBorderRepeatKeywords());
  Object.freeze(MaskBorderRepeatCss.prototype);
  maskBorderRepeatReady = true;
}

function maskBorderSliceKeywords() {
  return {
    inherit: 'mask-border-slice:inherit;',
    initial: 'mask-border-slice:initial;',
    revert: 'mask-border-slice:revert;',
    revertLayer: 'mask-border-slice:revert-layer;',
    unset: 'mask-border-slice:unset;',
  } as const;
}

type MaskBorderSliceCssKeywords = Readonly<ReturnType<typeof maskBorderSliceKeywords>>;
export interface MaskBorderSliceCss extends MaskBorderSliceCssKeywords {}
/** CSS 属性 mask-border-slice；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
 */
export class MaskBorderSliceCss extends CssProperty<Property.MaskBorderSlice> {
  constructor() {
    super('mask-border-slice');
    initializeMaskBorderSliceCss();
  }
}
let maskBorderSliceReady = false;
function initializeMaskBorderSliceCss(): void {
  if (maskBorderSliceReady) return;
  Object.assign(MaskBorderSliceCss.prototype, maskBorderSliceKeywords());
  Object.freeze(MaskBorderSliceCss.prototype);
  maskBorderSliceReady = true;
}

function maskBorderSourceKeywords() {
  return {
    inherit: 'mask-border-source:inherit;',
    initial: 'mask-border-source:initial;',
    none: 'mask-border-source:none;',
    revert: 'mask-border-source:revert;',
    revertLayer: 'mask-border-source:revert-layer;',
    unset: 'mask-border-source:unset;',
  } as const;
}

type MaskBorderSourceCssKeywords = Readonly<ReturnType<typeof maskBorderSourceKeywords>>;
export interface MaskBorderSourceCss extends MaskBorderSourceCssKeywords {}
/** CSS 属性 mask-border-source；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
 */
export class MaskBorderSourceCss extends CssProperty<Property.MaskBorderSource> {
  constructor() {
    super('mask-border-source');
    initializeMaskBorderSourceCss();
  }
}
let maskBorderSourceReady = false;
function initializeMaskBorderSourceCss(): void {
  if (maskBorderSourceReady) return;
  Object.assign(MaskBorderSourceCss.prototype, maskBorderSourceKeywords());
  Object.freeze(MaskBorderSourceCss.prototype);
  maskBorderSourceReady = true;
}

function maskBorderWidthKeywords() {
  return {
    auto: 'mask-border-width:auto;',
    inherit: 'mask-border-width:inherit;',
    initial: 'mask-border-width:initial;',
    revert: 'mask-border-width:revert;',
    revertLayer: 'mask-border-width:revert-layer;',
    unset: 'mask-border-width:unset;',
  } as const;
}

type MaskBorderWidthCssKeywords = Readonly<ReturnType<typeof maskBorderWidthKeywords>>;
export interface MaskBorderWidthCss extends MaskBorderWidthCssKeywords {}
/** CSS 属性 mask-border-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
 */
export class MaskBorderWidthCss extends LengthCssProperty<Property.MaskBorderWidth> {
  constructor() {
    super('mask-border-width');
    initializeMaskBorderWidthCss();
  }
}
let maskBorderWidthReady = false;
function initializeMaskBorderWidthCss(): void {
  if (maskBorderWidthReady) return;
  Object.assign(MaskBorderWidthCss.prototype, maskBorderWidthKeywords());
  Object.freeze(MaskBorderWidthCss.prototype);
  maskBorderWidthReady = true;
}

function maskClipKeywords() {
  return {
    borderBox: 'mask-clip:border-box;',
    contentBox: 'mask-clip:content-box;',
    fillBox: 'mask-clip:fill-box;',
    inherit: 'mask-clip:inherit;',
    initial: 'mask-clip:initial;',
    noClip: 'mask-clip:no-clip;',
    paddingBox: 'mask-clip:padding-box;',
    revert: 'mask-clip:revert;',
    revertLayer: 'mask-clip:revert-layer;',
    strokeBox: 'mask-clip:stroke-box;',
    unset: 'mask-clip:unset;',
    viewBox: 'mask-clip:view-box;',
  } as const;
}

type MaskClipCssKeywords = Readonly<ReturnType<typeof maskClipKeywords>>;
export interface MaskClipCss extends MaskClipCssKeywords {}
/** CSS 属性 mask-clip；初始值 border-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
 */
export class MaskClipCss extends CssProperty<Property.MaskClip> {
  constructor() {
    super('mask-clip');
    initializeMaskClipCss();
  }
}
let maskClipReady = false;
function initializeMaskClipCss(): void {
  if (maskClipReady) return;
  Object.assign(MaskClipCss.prototype, maskClipKeywords());
  Object.freeze(MaskClipCss.prototype);
  maskClipReady = true;
}

function maskCompositeKeywords() {
  return {
    add: 'mask-composite:add;',
    exclude: 'mask-composite:exclude;',
    inherit: 'mask-composite:inherit;',
    initial: 'mask-composite:initial;',
    intersect: 'mask-composite:intersect;',
    revert: 'mask-composite:revert;',
    revertLayer: 'mask-composite:revert-layer;',
    subtract: 'mask-composite:subtract;',
    unset: 'mask-composite:unset;',
  } as const;
}

type MaskCompositeCssKeywords = Readonly<ReturnType<typeof maskCompositeKeywords>>;
export interface MaskCompositeCss extends MaskCompositeCssKeywords {}
/** CSS 属性 mask-composite；初始值 add。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
 */
export class MaskCompositeCss extends CssProperty<Property.MaskComposite> {
  constructor() {
    super('mask-composite');
    initializeMaskCompositeCss();
  }
}
let maskCompositeReady = false;
function initializeMaskCompositeCss(): void {
  if (maskCompositeReady) return;
  Object.assign(MaskCompositeCss.prototype, maskCompositeKeywords());
  Object.freeze(MaskCompositeCss.prototype);
  maskCompositeReady = true;
}

function maskImageKeywords() {
  return {
    inherit: 'mask-image:inherit;',
    initial: 'mask-image:initial;',
    none: 'mask-image:none;',
    revert: 'mask-image:revert;',
    revertLayer: 'mask-image:revert-layer;',
    unset: 'mask-image:unset;',
  } as const;
}

type MaskImageCssKeywords = Readonly<ReturnType<typeof maskImageKeywords>>;
export interface MaskImageCss extends MaskImageCssKeywords {}
/** CSS 属性 mask-image；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
 */
export class MaskImageCss extends CssProperty<Property.MaskImage> {
  constructor() {
    super('mask-image');
    initializeMaskImageCss();
  }
}
let maskImageReady = false;
function initializeMaskImageCss(): void {
  if (maskImageReady) return;
  Object.assign(MaskImageCss.prototype, maskImageKeywords());
  Object.freeze(MaskImageCss.prototype);
  maskImageReady = true;
}

function maskModeKeywords() {
  return {
    alpha: 'mask-mode:alpha;',
    inherit: 'mask-mode:inherit;',
    initial: 'mask-mode:initial;',
    luminance: 'mask-mode:luminance;',
    matchSource: 'mask-mode:match-source;',
    revert: 'mask-mode:revert;',
    revertLayer: 'mask-mode:revert-layer;',
    unset: 'mask-mode:unset;',
  } as const;
}

type MaskModeCssKeywords = Readonly<ReturnType<typeof maskModeKeywords>>;
export interface MaskModeCss extends MaskModeCssKeywords {}
/** CSS 属性 mask-mode；初始值 match-source。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
 */
export class MaskModeCss extends CssProperty<Property.MaskMode> {
  constructor() {
    super('mask-mode');
    initializeMaskModeCss();
  }
}
let maskModeReady = false;
function initializeMaskModeCss(): void {
  if (maskModeReady) return;
  Object.assign(MaskModeCss.prototype, maskModeKeywords());
  Object.freeze(MaskModeCss.prototype);
  maskModeReady = true;
}

function maskOriginKeywords() {
  return {
    borderBox: 'mask-origin:border-box;',
    contentBox: 'mask-origin:content-box;',
    fillBox: 'mask-origin:fill-box;',
    inherit: 'mask-origin:inherit;',
    initial: 'mask-origin:initial;',
    paddingBox: 'mask-origin:padding-box;',
    revert: 'mask-origin:revert;',
    revertLayer: 'mask-origin:revert-layer;',
    strokeBox: 'mask-origin:stroke-box;',
    unset: 'mask-origin:unset;',
    viewBox: 'mask-origin:view-box;',
  } as const;
}

type MaskOriginCssKeywords = Readonly<ReturnType<typeof maskOriginKeywords>>;
export interface MaskOriginCss extends MaskOriginCssKeywords {}
/** CSS 属性 mask-origin；初始值 border-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
 */
export class MaskOriginCss extends CssProperty<Property.MaskOrigin> {
  constructor() {
    super('mask-origin');
    initializeMaskOriginCss();
  }
}
let maskOriginReady = false;
function initializeMaskOriginCss(): void {
  if (maskOriginReady) return;
  Object.assign(MaskOriginCss.prototype, maskOriginKeywords());
  Object.freeze(MaskOriginCss.prototype);
  maskOriginReady = true;
}

function maskPositionKeywords() {
  return {
    bottom: 'mask-position:bottom;',
    center: 'mask-position:center;',
    inherit: 'mask-position:inherit;',
    initial: 'mask-position:initial;',
    left: 'mask-position:left;',
    revert: 'mask-position:revert;',
    revertLayer: 'mask-position:revert-layer;',
    right: 'mask-position:right;',
    top: 'mask-position:top;',
    unset: 'mask-position:unset;',
  } as const;
}

type MaskPositionCssKeywords = Readonly<ReturnType<typeof maskPositionKeywords>>;
export interface MaskPositionCss extends MaskPositionCssKeywords {}
/** CSS 属性 mask-position；初始值 0% 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
 */
export class MaskPositionCss extends LengthCssProperty<Property.MaskPosition> {
  constructor() {
    super('mask-position');
    initializeMaskPositionCss();
  }
}
let maskPositionReady = false;
function initializeMaskPositionCss(): void {
  if (maskPositionReady) return;
  Object.assign(MaskPositionCss.prototype, maskPositionKeywords());
  Object.freeze(MaskPositionCss.prototype);
  maskPositionReady = true;
}

function maskRepeatKeywords() {
  return {
    inherit: 'mask-repeat:inherit;',
    initial: 'mask-repeat:initial;',
    noRepeat: 'mask-repeat:no-repeat;',
    repeat: 'mask-repeat:repeat;',
    repeatX: 'mask-repeat:repeat-x;',
    repeatY: 'mask-repeat:repeat-y;',
    revert: 'mask-repeat:revert;',
    revertLayer: 'mask-repeat:revert-layer;',
    round: 'mask-repeat:round;',
    space: 'mask-repeat:space;',
    unset: 'mask-repeat:unset;',
  } as const;
}

type MaskRepeatCssKeywords = Readonly<ReturnType<typeof maskRepeatKeywords>>;
export interface MaskRepeatCss extends MaskRepeatCssKeywords {}
/** CSS 属性 mask-repeat；初始值 repeat。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
 */
export class MaskRepeatCss extends CssProperty<Property.MaskRepeat> {
  constructor() {
    super('mask-repeat');
    initializeMaskRepeatCss();
  }
}
let maskRepeatReady = false;
function initializeMaskRepeatCss(): void {
  if (maskRepeatReady) return;
  Object.assign(MaskRepeatCss.prototype, maskRepeatKeywords());
  Object.freeze(MaskRepeatCss.prototype);
  maskRepeatReady = true;
}

function maskSizeKeywords() {
  return {
    auto: 'mask-size:auto;',
    contain: 'mask-size:contain;',
    cover: 'mask-size:cover;',
    inherit: 'mask-size:inherit;',
    initial: 'mask-size:initial;',
    revert: 'mask-size:revert;',
    revertLayer: 'mask-size:revert-layer;',
    unset: 'mask-size:unset;',
  } as const;
}

type MaskSizeCssKeywords = Readonly<ReturnType<typeof maskSizeKeywords>>;
export interface MaskSizeCss extends MaskSizeCssKeywords {}
/** CSS 属性 mask-size；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
 */
export class MaskSizeCss extends LengthCssProperty<Property.MaskSize> {
  constructor() {
    super('mask-size');
    initializeMaskSizeCss();
  }
}
let maskSizeReady = false;
function initializeMaskSizeCss(): void {
  if (maskSizeReady) return;
  Object.assign(MaskSizeCss.prototype, maskSizeKeywords());
  Object.freeze(MaskSizeCss.prototype);
  maskSizeReady = true;
}

function maskTypeKeywords() {
  return {
    alpha: 'mask-type:alpha;',
    inherit: 'mask-type:inherit;',
    initial: 'mask-type:initial;',
    luminance: 'mask-type:luminance;',
    revert: 'mask-type:revert;',
    revertLayer: 'mask-type:revert-layer;',
    unset: 'mask-type:unset;',
  } as const;
}

type MaskTypeCssKeywords = Readonly<ReturnType<typeof maskTypeKeywords>>;
export interface MaskTypeCss extends MaskTypeCssKeywords {}
/** CSS 属性 mask-type；初始值 luminance。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
 */
export class MaskTypeCss extends CssProperty<Property.MaskType> {
  constructor() {
    super('mask-type');
    initializeMaskTypeCss();
  }
}
let maskTypeReady = false;
function initializeMaskTypeCss(): void {
  if (maskTypeReady) return;
  Object.assign(MaskTypeCss.prototype, maskTypeKeywords());
  Object.freeze(MaskTypeCss.prototype);
  maskTypeReady = true;
}

function masonryAutoFlowKeywords() {
  return {
    definiteFirst: 'masonry-auto-flow:definite-first;',
    inherit: 'masonry-auto-flow:inherit;',
    initial: 'masonry-auto-flow:initial;',
    next: 'masonry-auto-flow:next;',
    ordered: 'masonry-auto-flow:ordered;',
    pack: 'masonry-auto-flow:pack;',
    revert: 'masonry-auto-flow:revert;',
    revertLayer: 'masonry-auto-flow:revert-layer;',
    unset: 'masonry-auto-flow:unset;',
  } as const;
}

type MasonryAutoFlowCssKeywords = Readonly<ReturnType<typeof masonryAutoFlowKeywords>>;
export interface MasonryAutoFlowCss extends MasonryAutoFlowCssKeywords {}
/** CSS 属性 masonry-auto-flow；初始值 pack。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
 */
export class MasonryAutoFlowCss extends CssProperty<Property.MasonryAutoFlow> {
  constructor() {
    super('masonry-auto-flow');
    initializeMasonryAutoFlowCss();
  }
}
let masonryAutoFlowReady = false;
function initializeMasonryAutoFlowCss(): void {
  if (masonryAutoFlowReady) return;
  Object.assign(MasonryAutoFlowCss.prototype, masonryAutoFlowKeywords());
  Object.freeze(MasonryAutoFlowCss.prototype);
  masonryAutoFlowReady = true;
}

function mathDepthKeywords() {
  return {
    autoAdd: 'math-depth:auto-add;',
    inherit: 'math-depth:inherit;',
    initial: 'math-depth:initial;',
    revert: 'math-depth:revert;',
    revertLayer: 'math-depth:revert-layer;',
    unset: 'math-depth:unset;',
  } as const;
}

type MathDepthCssKeywords = Readonly<ReturnType<typeof mathDepthKeywords>>;
export interface MathDepthCss extends MathDepthCssKeywords {}
/** CSS 属性 math-depth；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
 */
export class MathDepthCss extends CssProperty<Property.MathDepth> {
  constructor() {
    super('math-depth');
    initializeMathDepthCss();
  }
}
let mathDepthReady = false;
function initializeMathDepthCss(): void {
  if (mathDepthReady) return;
  Object.assign(MathDepthCss.prototype, mathDepthKeywords());
  Object.freeze(MathDepthCss.prototype);
  mathDepthReady = true;
}

function mathShiftKeywords() {
  return {
    compact: 'math-shift:compact;',
    inherit: 'math-shift:inherit;',
    initial: 'math-shift:initial;',
    normal: 'math-shift:normal;',
    revert: 'math-shift:revert;',
    revertLayer: 'math-shift:revert-layer;',
    unset: 'math-shift:unset;',
  } as const;
}

type MathShiftCssKeywords = Readonly<ReturnType<typeof mathShiftKeywords>>;
export interface MathShiftCss extends MathShiftCssKeywords {}
/** CSS 属性 math-shift；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
 */
export class MathShiftCss extends CssProperty<Property.MathShift> {
  constructor() {
    super('math-shift');
    initializeMathShiftCss();
  }
}
let mathShiftReady = false;
function initializeMathShiftCss(): void {
  if (mathShiftReady) return;
  Object.assign(MathShiftCss.prototype, mathShiftKeywords());
  Object.freeze(MathShiftCss.prototype);
  mathShiftReady = true;
}

function mathStyleKeywords() {
  return {
    compact: 'math-style:compact;',
    inherit: 'math-style:inherit;',
    initial: 'math-style:initial;',
    normal: 'math-style:normal;',
    revert: 'math-style:revert;',
    revertLayer: 'math-style:revert-layer;',
    unset: 'math-style:unset;',
  } as const;
}

type MathStyleCssKeywords = Readonly<ReturnType<typeof mathStyleKeywords>>;
export interface MathStyleCss extends MathStyleCssKeywords {}
/** CSS 属性 math-style；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
 */
export class MathStyleCss extends CssProperty<Property.MathStyle> {
  constructor() {
    super('math-style');
    initializeMathStyleCss();
  }
}
let mathStyleReady = false;
function initializeMathStyleCss(): void {
  if (mathStyleReady) return;
  Object.assign(MathStyleCss.prototype, mathStyleKeywords());
  Object.freeze(MathStyleCss.prototype);
  mathStyleReady = true;
}

function maxBlockSizeKeywords() {
  return {
    fitContent: 'max-block-size:fit-content;',
    inherit: 'max-block-size:inherit;',
    initial: 'max-block-size:initial;',
    maxContent: 'max-block-size:max-content;',
    minContent: 'max-block-size:min-content;',
    none: 'max-block-size:none;',
    revert: 'max-block-size:revert;',
    revertLayer: 'max-block-size:revert-layer;',
    unset: 'max-block-size:unset;',
  } as const;
}

type MaxBlockSizeCssKeywords = Readonly<ReturnType<typeof maxBlockSizeKeywords>>;
export interface MaxBlockSizeCss extends MaxBlockSizeCssKeywords {}
/** CSS 属性 max-block-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
 */
export class MaxBlockSizeCss extends LengthCssProperty<Property.MaxBlockSize> {
  constructor() {
    super('max-block-size');
    initializeMaxBlockSizeCss();
  }
}
let maxBlockSizeReady = false;
function initializeMaxBlockSizeCss(): void {
  if (maxBlockSizeReady) return;
  Object.assign(MaxBlockSizeCss.prototype, maxBlockSizeKeywords());
  Object.freeze(MaxBlockSizeCss.prototype);
  maxBlockSizeReady = true;
}

function maxHeightKeywords() {
  return {
    fitContent: 'max-height:fit-content;',
    inherit: 'max-height:inherit;',
    initial: 'max-height:initial;',
    intrinsic: 'max-height:intrinsic;',
    maxContent: 'max-height:max-content;',
    minContent: 'max-height:min-content;',
    none: 'max-height:none;',
    revert: 'max-height:revert;',
    revertLayer: 'max-height:revert-layer;',
    unset: 'max-height:unset;',
  } as const;
}

type MaxHeightCssKeywords = Readonly<ReturnType<typeof maxHeightKeywords>>;
export interface MaxHeightCss extends MaxHeightCssKeywords {}
/** CSS 属性 max-height；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
 */
export class MaxHeightCss extends LengthCssProperty<Property.MaxHeight> {
  constructor() {
    super('max-height');
    initializeMaxHeightCss();
  }
}
let maxHeightReady = false;
function initializeMaxHeightCss(): void {
  if (maxHeightReady) return;
  Object.assign(MaxHeightCss.prototype, maxHeightKeywords());
  Object.freeze(MaxHeightCss.prototype);
  maxHeightReady = true;
}

function maxInlineSizeKeywords() {
  return {
    fitContent: 'max-inline-size:fit-content;',
    inherit: 'max-inline-size:inherit;',
    initial: 'max-inline-size:initial;',
    maxContent: 'max-inline-size:max-content;',
    minContent: 'max-inline-size:min-content;',
    none: 'max-inline-size:none;',
    revert: 'max-inline-size:revert;',
    revertLayer: 'max-inline-size:revert-layer;',
    unset: 'max-inline-size:unset;',
  } as const;
}

type MaxInlineSizeCssKeywords = Readonly<ReturnType<typeof maxInlineSizeKeywords>>;
export interface MaxInlineSizeCss extends MaxInlineSizeCssKeywords {}
/** CSS 属性 max-inline-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
 */
export class MaxInlineSizeCss extends LengthCssProperty<Property.MaxInlineSize> {
  constructor() {
    super('max-inline-size');
    initializeMaxInlineSizeCss();
  }
}
let maxInlineSizeReady = false;
function initializeMaxInlineSizeCss(): void {
  if (maxInlineSizeReady) return;
  Object.assign(MaxInlineSizeCss.prototype, maxInlineSizeKeywords());
  Object.freeze(MaxInlineSizeCss.prototype);
  maxInlineSizeReady = true;
}

function maxLinesKeywords() {
  return {
    inherit: 'max-lines:inherit;',
    initial: 'max-lines:initial;',
    none: 'max-lines:none;',
    revert: 'max-lines:revert;',
    revertLayer: 'max-lines:revert-layer;',
    unset: 'max-lines:unset;',
  } as const;
}

type MaxLinesCssKeywords = Readonly<ReturnType<typeof maxLinesKeywords>>;
export interface MaxLinesCss extends MaxLinesCssKeywords {}
/** CSS 属性 max-lines；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
 */
export class MaxLinesCss extends CssProperty<Property.MaxLines> {
  constructor() {
    super('max-lines');
    initializeMaxLinesCss();
  }
}
let maxLinesReady = false;
function initializeMaxLinesCss(): void {
  if (maxLinesReady) return;
  Object.assign(MaxLinesCss.prototype, maxLinesKeywords());
  Object.freeze(MaxLinesCss.prototype);
  maxLinesReady = true;
}

function maxWidthKeywords() {
  return {
    fitContent: 'max-width:fit-content;',
    inherit: 'max-width:inherit;',
    initial: 'max-width:initial;',
    intrinsic: 'max-width:intrinsic;',
    maxContent: 'max-width:max-content;',
    minContent: 'max-width:min-content;',
    none: 'max-width:none;',
    revert: 'max-width:revert;',
    revertLayer: 'max-width:revert-layer;',
    unset: 'max-width:unset;',
  } as const;
}

type MaxWidthCssKeywords = Readonly<ReturnType<typeof maxWidthKeywords>>;
export interface MaxWidthCss extends MaxWidthCssKeywords {}
/** CSS 属性 max-width；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
 */
export class MaxWidthCss extends LengthCssProperty<Property.MaxWidth> {
  constructor() {
    super('max-width');
    initializeMaxWidthCss();
  }
}
let maxWidthReady = false;
function initializeMaxWidthCss(): void {
  if (maxWidthReady) return;
  Object.assign(MaxWidthCss.prototype, maxWidthKeywords());
  Object.freeze(MaxWidthCss.prototype);
  maxWidthReady = true;
}

function minBlockSizeKeywords() {
  return {
    auto: 'min-block-size:auto;',
    fitContent: 'min-block-size:fit-content;',
    inherit: 'min-block-size:inherit;',
    initial: 'min-block-size:initial;',
    maxContent: 'min-block-size:max-content;',
    minContent: 'min-block-size:min-content;',
    revert: 'min-block-size:revert;',
    revertLayer: 'min-block-size:revert-layer;',
    unset: 'min-block-size:unset;',
  } as const;
}

type MinBlockSizeCssKeywords = Readonly<ReturnType<typeof minBlockSizeKeywords>>;
export interface MinBlockSizeCss extends MinBlockSizeCssKeywords {}
/** CSS 属性 min-block-size；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
 */
export class MinBlockSizeCss extends LengthCssProperty<Property.MinBlockSize> {
  constructor() {
    super('min-block-size');
    initializeMinBlockSizeCss();
  }
}
let minBlockSizeReady = false;
function initializeMinBlockSizeCss(): void {
  if (minBlockSizeReady) return;
  Object.assign(MinBlockSizeCss.prototype, minBlockSizeKeywords());
  Object.freeze(MinBlockSizeCss.prototype);
  minBlockSizeReady = true;
}

function minHeightKeywords() {
  return {
    auto: 'min-height:auto;',
    fitContent: 'min-height:fit-content;',
    inherit: 'min-height:inherit;',
    initial: 'min-height:initial;',
    intrinsic: 'min-height:intrinsic;',
    maxContent: 'min-height:max-content;',
    minContent: 'min-height:min-content;',
    revert: 'min-height:revert;',
    revertLayer: 'min-height:revert-layer;',
    unset: 'min-height:unset;',
  } as const;
}

type MinHeightCssKeywords = Readonly<ReturnType<typeof minHeightKeywords>>;
export interface MinHeightCss extends MinHeightCssKeywords {}
/** CSS 属性 min-height；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
 */
export class MinHeightCss extends LengthCssProperty<Property.MinHeight> {
  constructor() {
    super('min-height');
    initializeMinHeightCss();
  }
}
let minHeightReady = false;
function initializeMinHeightCss(): void {
  if (minHeightReady) return;
  Object.assign(MinHeightCss.prototype, minHeightKeywords());
  Object.freeze(MinHeightCss.prototype);
  minHeightReady = true;
}

function minInlineSizeKeywords() {
  return {
    auto: 'min-inline-size:auto;',
    fitContent: 'min-inline-size:fit-content;',
    inherit: 'min-inline-size:inherit;',
    initial: 'min-inline-size:initial;',
    maxContent: 'min-inline-size:max-content;',
    minContent: 'min-inline-size:min-content;',
    revert: 'min-inline-size:revert;',
    revertLayer: 'min-inline-size:revert-layer;',
    unset: 'min-inline-size:unset;',
  } as const;
}

type MinInlineSizeCssKeywords = Readonly<ReturnType<typeof minInlineSizeKeywords>>;
export interface MinInlineSizeCss extends MinInlineSizeCssKeywords {}
/** CSS 属性 min-inline-size；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
 */
export class MinInlineSizeCss extends LengthCssProperty<Property.MinInlineSize> {
  constructor() {
    super('min-inline-size');
    initializeMinInlineSizeCss();
  }
}
let minInlineSizeReady = false;
function initializeMinInlineSizeCss(): void {
  if (minInlineSizeReady) return;
  Object.assign(MinInlineSizeCss.prototype, minInlineSizeKeywords());
  Object.freeze(MinInlineSizeCss.prototype);
  minInlineSizeReady = true;
}

function minWidthKeywords() {
  return {
    auto: 'min-width:auto;',
    fitContent: 'min-width:fit-content;',
    inherit: 'min-width:inherit;',
    initial: 'min-width:initial;',
    intrinsic: 'min-width:intrinsic;',
    maxContent: 'min-width:max-content;',
    minContent: 'min-width:min-content;',
    minIntrinsic: 'min-width:min-intrinsic;',
    revert: 'min-width:revert;',
    revertLayer: 'min-width:revert-layer;',
    unset: 'min-width:unset;',
  } as const;
}

type MinWidthCssKeywords = Readonly<ReturnType<typeof minWidthKeywords>>;
export interface MinWidthCss extends MinWidthCssKeywords {}
/** CSS 属性 min-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
 */
export class MinWidthCss extends LengthCssProperty<Property.MinWidth> {
  constructor() {
    super('min-width');
    initializeMinWidthCss();
  }
}
let minWidthReady = false;
function initializeMinWidthCss(): void {
  if (minWidthReady) return;
  Object.assign(MinWidthCss.prototype, minWidthKeywords());
  Object.freeze(MinWidthCss.prototype);
  minWidthReady = true;
}

function mixBlendModeKeywords() {
  return {
    color: 'mix-blend-mode:color;',
    colorBurn: 'mix-blend-mode:color-burn;',
    colorDodge: 'mix-blend-mode:color-dodge;',
    darken: 'mix-blend-mode:darken;',
    difference: 'mix-blend-mode:difference;',
    exclusion: 'mix-blend-mode:exclusion;',
    hardLight: 'mix-blend-mode:hard-light;',
    hue: 'mix-blend-mode:hue;',
    inherit: 'mix-blend-mode:inherit;',
    initial: 'mix-blend-mode:initial;',
    lighten: 'mix-blend-mode:lighten;',
    luminosity: 'mix-blend-mode:luminosity;',
    multiply: 'mix-blend-mode:multiply;',
    normal: 'mix-blend-mode:normal;',
    overlay: 'mix-blend-mode:overlay;',
    plusDarker: 'mix-blend-mode:plus-darker;',
    plusLighter: 'mix-blend-mode:plus-lighter;',
    revert: 'mix-blend-mode:revert;',
    revertLayer: 'mix-blend-mode:revert-layer;',
    saturation: 'mix-blend-mode:saturation;',
    screen: 'mix-blend-mode:screen;',
    softLight: 'mix-blend-mode:soft-light;',
    unset: 'mix-blend-mode:unset;',
  } as const;
}

type MixBlendModeCssKeywords = Readonly<ReturnType<typeof mixBlendModeKeywords>>;
export interface MixBlendModeCss extends MixBlendModeCssKeywords {}
/** CSS 属性 mix-blend-mode；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
 */
export class MixBlendModeCss extends CssProperty<Property.MixBlendMode> {
  constructor() {
    super('mix-blend-mode');
    initializeMixBlendModeCss();
  }
}
let mixBlendModeReady = false;
function initializeMixBlendModeCss(): void {
  if (mixBlendModeReady) return;
  Object.assign(MixBlendModeCss.prototype, mixBlendModeKeywords());
  Object.freeze(MixBlendModeCss.prototype);
  mixBlendModeReady = true;
}

function motionKeywords() {
  return {
    auto: 'motion:auto;',
    borderBox: 'motion:border-box;',
    bottom: 'motion:bottom;',
    center: 'motion:center;',
    contentBox: 'motion:content-box;',
    fillBox: 'motion:fill-box;',
    inherit: 'motion:inherit;',
    initial: 'motion:initial;',
    left: 'motion:left;',
    none: 'motion:none;',
    normal: 'motion:normal;',
    paddingBox: 'motion:padding-box;',
    revert: 'motion:revert;',
    revertLayer: 'motion:revert-layer;',
    right: 'motion:right;',
    strokeBox: 'motion:stroke-box;',
    top: 'motion:top;',
    unset: 'motion:unset;',
    viewBox: 'motion:view-box;',
  } as const;
}

type MotionCssKeywords = Readonly<ReturnType<typeof motionKeywords>>;
export interface MotionCss extends MotionCssKeywords {}
/** CSS 属性 motion。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
 */
export class MotionCss extends LengthCssProperty<Property.Offset> {
  constructor() {
    super('motion');
    initializeMotionCss();
  }
}
let motionReady = false;
function initializeMotionCss(): void {
  if (motionReady) return;
  Object.assign(MotionCss.prototype, motionKeywords());
  Object.freeze(MotionCss.prototype);
  motionReady = true;
}

function motionDistanceKeywords() {
  return {
    inherit: 'motion-distance:inherit;',
    initial: 'motion-distance:initial;',
    revert: 'motion-distance:revert;',
    revertLayer: 'motion-distance:revert-layer;',
    unset: 'motion-distance:unset;',
  } as const;
}

type MotionDistanceCssKeywords = Readonly<ReturnType<typeof motionDistanceKeywords>>;
export interface MotionDistanceCss extends MotionDistanceCssKeywords {}
/** CSS 属性 motion-distance；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
 */
export class MotionDistanceCss extends LengthCssProperty<Property.OffsetDistance> {
  constructor() {
    super('motion-distance');
    initializeMotionDistanceCss();
  }
}
let motionDistanceReady = false;
function initializeMotionDistanceCss(): void {
  if (motionDistanceReady) return;
  Object.assign(MotionDistanceCss.prototype, motionDistanceKeywords());
  Object.freeze(MotionDistanceCss.prototype);
  motionDistanceReady = true;
}

function motionPathKeywords() {
  return {
    borderBox: 'motion-path:border-box;',
    contentBox: 'motion-path:content-box;',
    fillBox: 'motion-path:fill-box;',
    inherit: 'motion-path:inherit;',
    initial: 'motion-path:initial;',
    none: 'motion-path:none;',
    paddingBox: 'motion-path:padding-box;',
    revert: 'motion-path:revert;',
    revertLayer: 'motion-path:revert-layer;',
    strokeBox: 'motion-path:stroke-box;',
    unset: 'motion-path:unset;',
    viewBox: 'motion-path:view-box;',
  } as const;
}

type MotionPathCssKeywords = Readonly<ReturnType<typeof motionPathKeywords>>;
export interface MotionPathCss extends MotionPathCssKeywords {}
/** CSS 属性 motion-path；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
 */
export class MotionPathCss extends CssProperty<Property.OffsetPath> {
  constructor() {
    super('motion-path');
    initializeMotionPathCss();
  }
}
let motionPathReady = false;
function initializeMotionPathCss(): void {
  if (motionPathReady) return;
  Object.assign(MotionPathCss.prototype, motionPathKeywords());
  Object.freeze(MotionPathCss.prototype);
  motionPathReady = true;
}

function motionRotationKeywords() {
  return {
    auto: 'motion-rotation:auto;',
    inherit: 'motion-rotation:inherit;',
    initial: 'motion-rotation:initial;',
    reverse: 'motion-rotation:reverse;',
    revert: 'motion-rotation:revert;',
    revertLayer: 'motion-rotation:revert-layer;',
    unset: 'motion-rotation:unset;',
  } as const;
}

type MotionRotationCssKeywords = Readonly<ReturnType<typeof motionRotationKeywords>>;
export interface MotionRotationCss extends MotionRotationCssKeywords {}
/** CSS 属性 motion-rotation；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class MotionRotationCss extends CssProperty<Property.OffsetRotate> {
  constructor() {
    super('motion-rotation');
    initializeMotionRotationCss();
  }
}
let motionRotationReady = false;
function initializeMotionRotationCss(): void {
  if (motionRotationReady) return;
  Object.assign(MotionRotationCss.prototype, motionRotationKeywords());
  Object.freeze(MotionRotationCss.prototype);
  motionRotationReady = true;
}

function objectFitKeywords() {
  return {
    contain: 'object-fit:contain;',
    cover: 'object-fit:cover;',
    fill: 'object-fit:fill;',
    inherit: 'object-fit:inherit;',
    initial: 'object-fit:initial;',
    none: 'object-fit:none;',
    revert: 'object-fit:revert;',
    revertLayer: 'object-fit:revert-layer;',
    scaleDown: 'object-fit:scale-down;',
    unset: 'object-fit:unset;',
  } as const;
}

type ObjectFitCssKeywords = Readonly<ReturnType<typeof objectFitKeywords>>;
export interface ObjectFitCss extends ObjectFitCssKeywords {}
/** CSS 属性 object-fit；初始值 fill。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
 */
export class ObjectFitCss extends CssProperty<Property.ObjectFit> {
  constructor() {
    super('object-fit');
    initializeObjectFitCss();
  }
}
let objectFitReady = false;
function initializeObjectFitCss(): void {
  if (objectFitReady) return;
  Object.assign(ObjectFitCss.prototype, objectFitKeywords());
  Object.freeze(ObjectFitCss.prototype);
  objectFitReady = true;
}

function objectPositionKeywords() {
  return {
    bottom: 'object-position:bottom;',
    center: 'object-position:center;',
    inherit: 'object-position:inherit;',
    initial: 'object-position:initial;',
    left: 'object-position:left;',
    revert: 'object-position:revert;',
    revertLayer: 'object-position:revert-layer;',
    right: 'object-position:right;',
    top: 'object-position:top;',
    unset: 'object-position:unset;',
  } as const;
}

type ObjectPositionCssKeywords = Readonly<ReturnType<typeof objectPositionKeywords>>;
export interface ObjectPositionCss extends ObjectPositionCssKeywords {}
/** CSS 属性 object-position；初始值 50% 50%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
 */
export class ObjectPositionCss extends LengthCssProperty<Property.ObjectPosition> {
  constructor() {
    super('object-position');
    initializeObjectPositionCss();
  }
}
let objectPositionReady = false;
function initializeObjectPositionCss(): void {
  if (objectPositionReady) return;
  Object.assign(ObjectPositionCss.prototype, objectPositionKeywords());
  Object.freeze(ObjectPositionCss.prototype);
  objectPositionReady = true;
}

function objectViewBoxKeywords() {
  return {
    inherit: 'object-view-box:inherit;',
    initial: 'object-view-box:initial;',
    none: 'object-view-box:none;',
    revert: 'object-view-box:revert;',
    revertLayer: 'object-view-box:revert-layer;',
    unset: 'object-view-box:unset;',
  } as const;
}

type ObjectViewBoxCssKeywords = Readonly<ReturnType<typeof objectViewBoxKeywords>>;
export interface ObjectViewBoxCss extends ObjectViewBoxCssKeywords {}
/** CSS 属性 object-view-box；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
 */
export class ObjectViewBoxCss extends CssProperty<Property.ObjectViewBox> {
  constructor() {
    super('object-view-box');
    initializeObjectViewBoxCss();
  }
}
let objectViewBoxReady = false;
function initializeObjectViewBoxCss(): void {
  if (objectViewBoxReady) return;
  Object.assign(ObjectViewBoxCss.prototype, objectViewBoxKeywords());
  Object.freeze(ObjectViewBoxCss.prototype);
  objectViewBoxReady = true;
}

function offsetKeywords() {
  return {
    auto: 'offset:auto;',
    borderBox: 'offset:border-box;',
    bottom: 'offset:bottom;',
    center: 'offset:center;',
    contentBox: 'offset:content-box;',
    fillBox: 'offset:fill-box;',
    inherit: 'offset:inherit;',
    initial: 'offset:initial;',
    left: 'offset:left;',
    none: 'offset:none;',
    normal: 'offset:normal;',
    paddingBox: 'offset:padding-box;',
    revert: 'offset:revert;',
    revertLayer: 'offset:revert-layer;',
    right: 'offset:right;',
    strokeBox: 'offset:stroke-box;',
    top: 'offset:top;',
    unset: 'offset:unset;',
    viewBox: 'offset:view-box;',
  } as const;
}

type OffsetCssKeywords = Readonly<ReturnType<typeof offsetKeywords>>;
export interface OffsetCss extends OffsetCssKeywords {}
/** CSS 属性 offset。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
 */
export class OffsetCss extends LengthCssProperty<Property.Offset> {
  constructor() {
    super('offset');
    initializeOffsetCss();
  }
}
let offsetReady = false;
function initializeOffsetCss(): void {
  if (offsetReady) return;
  Object.assign(OffsetCss.prototype, offsetKeywords());
  Object.freeze(OffsetCss.prototype);
  offsetReady = true;
}

function offsetAnchorKeywords() {
  return {
    auto: 'offset-anchor:auto;',
    bottom: 'offset-anchor:bottom;',
    center: 'offset-anchor:center;',
    inherit: 'offset-anchor:inherit;',
    initial: 'offset-anchor:initial;',
    left: 'offset-anchor:left;',
    revert: 'offset-anchor:revert;',
    revertLayer: 'offset-anchor:revert-layer;',
    right: 'offset-anchor:right;',
    top: 'offset-anchor:top;',
    unset: 'offset-anchor:unset;',
  } as const;
}

type OffsetAnchorCssKeywords = Readonly<ReturnType<typeof offsetAnchorKeywords>>;
export interface OffsetAnchorCss extends OffsetAnchorCssKeywords {}
/** CSS 属性 offset-anchor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
 */
export class OffsetAnchorCss extends LengthCssProperty<Property.OffsetAnchor> {
  constructor() {
    super('offset-anchor');
    initializeOffsetAnchorCss();
  }
}
let offsetAnchorReady = false;
function initializeOffsetAnchorCss(): void {
  if (offsetAnchorReady) return;
  Object.assign(OffsetAnchorCss.prototype, offsetAnchorKeywords());
  Object.freeze(OffsetAnchorCss.prototype);
  offsetAnchorReady = true;
}

function offsetDistanceKeywords() {
  return {
    inherit: 'offset-distance:inherit;',
    initial: 'offset-distance:initial;',
    revert: 'offset-distance:revert;',
    revertLayer: 'offset-distance:revert-layer;',
    unset: 'offset-distance:unset;',
  } as const;
}

type OffsetDistanceCssKeywords = Readonly<ReturnType<typeof offsetDistanceKeywords>>;
export interface OffsetDistanceCss extends OffsetDistanceCssKeywords {}
/** CSS 属性 offset-distance；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
 */
export class OffsetDistanceCss extends LengthCssProperty<Property.OffsetDistance> {
  constructor() {
    super('offset-distance');
    initializeOffsetDistanceCss();
  }
}
let offsetDistanceReady = false;
function initializeOffsetDistanceCss(): void {
  if (offsetDistanceReady) return;
  Object.assign(OffsetDistanceCss.prototype, offsetDistanceKeywords());
  Object.freeze(OffsetDistanceCss.prototype);
  offsetDistanceReady = true;
}

function offsetPathKeywords() {
  return {
    borderBox: 'offset-path:border-box;',
    contentBox: 'offset-path:content-box;',
    fillBox: 'offset-path:fill-box;',
    inherit: 'offset-path:inherit;',
    initial: 'offset-path:initial;',
    none: 'offset-path:none;',
    paddingBox: 'offset-path:padding-box;',
    revert: 'offset-path:revert;',
    revertLayer: 'offset-path:revert-layer;',
    strokeBox: 'offset-path:stroke-box;',
    unset: 'offset-path:unset;',
    viewBox: 'offset-path:view-box;',
  } as const;
}

type OffsetPathCssKeywords = Readonly<ReturnType<typeof offsetPathKeywords>>;
export interface OffsetPathCss extends OffsetPathCssKeywords {}
/** CSS 属性 offset-path；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
 */
export class OffsetPathCss extends CssProperty<Property.OffsetPath> {
  constructor() {
    super('offset-path');
    initializeOffsetPathCss();
  }
}
let offsetPathReady = false;
function initializeOffsetPathCss(): void {
  if (offsetPathReady) return;
  Object.assign(OffsetPathCss.prototype, offsetPathKeywords());
  Object.freeze(OffsetPathCss.prototype);
  offsetPathReady = true;
}

function offsetPositionKeywords() {
  return {
    auto: 'offset-position:auto;',
    bottom: 'offset-position:bottom;',
    center: 'offset-position:center;',
    inherit: 'offset-position:inherit;',
    initial: 'offset-position:initial;',
    left: 'offset-position:left;',
    normal: 'offset-position:normal;',
    revert: 'offset-position:revert;',
    revertLayer: 'offset-position:revert-layer;',
    right: 'offset-position:right;',
    top: 'offset-position:top;',
    unset: 'offset-position:unset;',
  } as const;
}

type OffsetPositionCssKeywords = Readonly<ReturnType<typeof offsetPositionKeywords>>;
export interface OffsetPositionCss extends OffsetPositionCssKeywords {}
/** CSS 属性 offset-position；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
 */
export class OffsetPositionCss extends LengthCssProperty<Property.OffsetPosition> {
  constructor() {
    super('offset-position');
    initializeOffsetPositionCss();
  }
}
let offsetPositionReady = false;
function initializeOffsetPositionCss(): void {
  if (offsetPositionReady) return;
  Object.assign(OffsetPositionCss.prototype, offsetPositionKeywords());
  Object.freeze(OffsetPositionCss.prototype);
  offsetPositionReady = true;
}

function offsetRotateKeywords() {
  return {
    auto: 'offset-rotate:auto;',
    inherit: 'offset-rotate:inherit;',
    initial: 'offset-rotate:initial;',
    reverse: 'offset-rotate:reverse;',
    revert: 'offset-rotate:revert;',
    revertLayer: 'offset-rotate:revert-layer;',
    unset: 'offset-rotate:unset;',
  } as const;
}

type OffsetRotateCssKeywords = Readonly<ReturnType<typeof offsetRotateKeywords>>;
export interface OffsetRotateCss extends OffsetRotateCssKeywords {}
/** CSS 属性 offset-rotate；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class OffsetRotateCss extends CssProperty<Property.OffsetRotate> {
  constructor() {
    super('offset-rotate');
    initializeOffsetRotateCss();
  }
}
let offsetRotateReady = false;
function initializeOffsetRotateCss(): void {
  if (offsetRotateReady) return;
  Object.assign(OffsetRotateCss.prototype, offsetRotateKeywords());
  Object.freeze(OffsetRotateCss.prototype);
  offsetRotateReady = true;
}

function offsetRotationKeywords() {
  return {
    auto: 'offset-rotation:auto;',
    inherit: 'offset-rotation:inherit;',
    initial: 'offset-rotation:initial;',
    reverse: 'offset-rotation:reverse;',
    revert: 'offset-rotation:revert;',
    revertLayer: 'offset-rotation:revert-layer;',
    unset: 'offset-rotation:unset;',
  } as const;
}

type OffsetRotationCssKeywords = Readonly<ReturnType<typeof offsetRotationKeywords>>;
export interface OffsetRotationCss extends OffsetRotationCssKeywords {}
/** CSS 属性 offset-rotation；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
 */
export class OffsetRotationCss extends CssProperty<Property.OffsetRotate> {
  constructor() {
    super('offset-rotation');
    initializeOffsetRotationCss();
  }
}
let offsetRotationReady = false;
function initializeOffsetRotationCss(): void {
  if (offsetRotationReady) return;
  Object.assign(OffsetRotationCss.prototype, offsetRotationKeywords());
  Object.freeze(OffsetRotationCss.prototype);
  offsetRotationReady = true;
}

function opacityKeywords() {
  return {
    inherit: 'opacity:inherit;',
    initial: 'opacity:initial;',
    revert: 'opacity:revert;',
    revertLayer: 'opacity:revert-layer;',
    unset: 'opacity:unset;',
  } as const;
}

type OpacityCssKeywords = Readonly<ReturnType<typeof opacityKeywords>>;
export interface OpacityCss extends OpacityCssKeywords {}
/** 不透明度（CSS opacity）；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
 */
export class OpacityCss extends CssProperty<Property.Opacity> {
  constructor() {
    super('opacity');
    initializeOpacityCss();
  }
}
let opacityReady = false;
function initializeOpacityCss(): void {
  if (opacityReady) return;
  Object.assign(OpacityCss.prototype, opacityKeywords());
  Object.freeze(OpacityCss.prototype);
  opacityReady = true;
}

function orderKeywords() {
  return {
    inherit: 'order:inherit;',
    initial: 'order:initial;',
    revert: 'order:revert;',
    revertLayer: 'order:revert-layer;',
    unset: 'order:unset;',
  } as const;
}

type OrderCssKeywords = Readonly<ReturnType<typeof orderKeywords>>;
export interface OrderCss extends OrderCssKeywords {}
/** CSS 属性 order；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
 */
export class OrderCss extends CssProperty<Property.Order> {
  constructor() {
    super('order');
    initializeOrderCss();
  }
}
let orderReady = false;
function initializeOrderCss(): void {
  if (orderReady) return;
  Object.assign(OrderCss.prototype, orderKeywords());
  Object.freeze(OrderCss.prototype);
  orderReady = true;
}

function orphansKeywords() {
  return {
    inherit: 'orphans:inherit;',
    initial: 'orphans:initial;',
    revert: 'orphans:revert;',
    revertLayer: 'orphans:revert-layer;',
    unset: 'orphans:unset;',
  } as const;
}

type OrphansCssKeywords = Readonly<ReturnType<typeof orphansKeywords>>;
export interface OrphansCss extends OrphansCssKeywords {}
/** CSS 属性 orphans；初始值 2。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
 */
export class OrphansCss extends CssProperty<Property.Orphans> {
  constructor() {
    super('orphans');
    initializeOrphansCss();
  }
}
let orphansReady = false;
function initializeOrphansCss(): void {
  if (orphansReady) return;
  Object.assign(OrphansCss.prototype, orphansKeywords());
  Object.freeze(OrphansCss.prototype);
  orphansReady = true;
}

function outlineKeywords() {
  return {
    AccentColor: 'outline:AccentColor;',
    AccentColorText: 'outline:AccentColorText;',
    ActiveBorder: 'outline:ActiveBorder;',
    ActiveCaption: 'outline:ActiveCaption;',
    ActiveText: 'outline:ActiveText;',
    AppWorkspace: 'outline:AppWorkspace;',
    Background: 'outline:Background;',
    ButtonBorder: 'outline:ButtonBorder;',
    ButtonFace: 'outline:ButtonFace;',
    ButtonHighlight: 'outline:ButtonHighlight;',
    ButtonShadow: 'outline:ButtonShadow;',
    ButtonText: 'outline:ButtonText;',
    Canvas: 'outline:Canvas;',
    CanvasText: 'outline:CanvasText;',
    CaptionText: 'outline:CaptionText;',
    Field: 'outline:Field;',
    FieldText: 'outline:FieldText;',
    GrayText: 'outline:GrayText;',
    Highlight: 'outline:Highlight;',
    HighlightText: 'outline:HighlightText;',
    InactiveBorder: 'outline:InactiveBorder;',
    InactiveCaption: 'outline:InactiveCaption;',
    InactiveCaptionText: 'outline:InactiveCaptionText;',
    InfoBackground: 'outline:InfoBackground;',
    InfoText: 'outline:InfoText;',
    LinkText: 'outline:LinkText;',
    Mark: 'outline:Mark;',
    MarkText: 'outline:MarkText;',
    Menu: 'outline:Menu;',
    MenuText: 'outline:MenuText;',
    Scrollbar: 'outline:Scrollbar;',
    SelectedItem: 'outline:SelectedItem;',
    SelectedItemText: 'outline:SelectedItemText;',
    ThreeDDarkShadow: 'outline:ThreeDDarkShadow;',
    ThreeDFace: 'outline:ThreeDFace;',
    ThreeDHighlight: 'outline:ThreeDHighlight;',
    ThreeDLightShadow: 'outline:ThreeDLightShadow;',
    ThreeDShadow: 'outline:ThreeDShadow;',
    VisitedText: 'outline:VisitedText;',
    Window: 'outline:Window;',
    WindowFrame: 'outline:WindowFrame;',
    WindowText: 'outline:WindowText;',
    aliceblue: 'outline:aliceblue;',
    antiquewhite: 'outline:antiquewhite;',
    aqua: 'outline:aqua;',
    aquamarine: 'outline:aquamarine;',
    auto: 'outline:auto;',
    azure: 'outline:azure;',
    beige: 'outline:beige;',
    bisque: 'outline:bisque;',
    black: 'outline:black;',
    blanchedalmond: 'outline:blanchedalmond;',
    blue: 'outline:blue;',
    blueviolet: 'outline:blueviolet;',
    brown: 'outline:brown;',
    burlywood: 'outline:burlywood;',
    cadetblue: 'outline:cadetblue;',
    chartreuse: 'outline:chartreuse;',
    chocolate: 'outline:chocolate;',
    coral: 'outline:coral;',
    cornflowerblue: 'outline:cornflowerblue;',
    cornsilk: 'outline:cornsilk;',
    crimson: 'outline:crimson;',
    currentColor: 'outline:currentColor;',
    cyan: 'outline:cyan;',
    darkblue: 'outline:darkblue;',
    darkcyan: 'outline:darkcyan;',
    darkgoldenrod: 'outline:darkgoldenrod;',
    darkgray: 'outline:darkgray;',
    darkgreen: 'outline:darkgreen;',
    darkgrey: 'outline:darkgrey;',
    darkkhaki: 'outline:darkkhaki;',
    darkmagenta: 'outline:darkmagenta;',
    darkolivegreen: 'outline:darkolivegreen;',
    darkorange: 'outline:darkorange;',
    darkorchid: 'outline:darkorchid;',
    darkred: 'outline:darkred;',
    darksalmon: 'outline:darksalmon;',
    darkseagreen: 'outline:darkseagreen;',
    darkslateblue: 'outline:darkslateblue;',
    darkslategray: 'outline:darkslategray;',
    darkslategrey: 'outline:darkslategrey;',
    darkturquoise: 'outline:darkturquoise;',
    darkviolet: 'outline:darkviolet;',
    dashed: 'outline:dashed;',
    deeppink: 'outline:deeppink;',
    deepskyblue: 'outline:deepskyblue;',
    dimgray: 'outline:dimgray;',
    dimgrey: 'outline:dimgrey;',
    dodgerblue: 'outline:dodgerblue;',
    dotted: 'outline:dotted;',
    double: 'outline:double;',
    firebrick: 'outline:firebrick;',
    floralwhite: 'outline:floralwhite;',
    forestgreen: 'outline:forestgreen;',
    fuchsia: 'outline:fuchsia;',
    gainsboro: 'outline:gainsboro;',
    ghostwhite: 'outline:ghostwhite;',
    gold: 'outline:gold;',
    goldenrod: 'outline:goldenrod;',
    gray: 'outline:gray;',
    green: 'outline:green;',
    greenyellow: 'outline:greenyellow;',
    grey: 'outline:grey;',
    groove: 'outline:groove;',
    honeydew: 'outline:honeydew;',
    hotpink: 'outline:hotpink;',
    indianred: 'outline:indianred;',
    indigo: 'outline:indigo;',
    inherit: 'outline:inherit;',
    initial: 'outline:initial;',
    inset: 'outline:inset;',
    ivory: 'outline:ivory;',
    khaki: 'outline:khaki;',
    lavender: 'outline:lavender;',
    lavenderblush: 'outline:lavenderblush;',
    lawngreen: 'outline:lawngreen;',
    lemonchiffon: 'outline:lemonchiffon;',
    lightblue: 'outline:lightblue;',
    lightcoral: 'outline:lightcoral;',
    lightcyan: 'outline:lightcyan;',
    lightgoldenrodyellow: 'outline:lightgoldenrodyellow;',
    lightgray: 'outline:lightgray;',
    lightgreen: 'outline:lightgreen;',
    lightgrey: 'outline:lightgrey;',
    lightpink: 'outline:lightpink;',
    lightsalmon: 'outline:lightsalmon;',
    lightseagreen: 'outline:lightseagreen;',
    lightskyblue: 'outline:lightskyblue;',
    lightslategray: 'outline:lightslategray;',
    lightslategrey: 'outline:lightslategrey;',
    lightsteelblue: 'outline:lightsteelblue;',
    lightyellow: 'outline:lightyellow;',
    lime: 'outline:lime;',
    limegreen: 'outline:limegreen;',
    linen: 'outline:linen;',
    magenta: 'outline:magenta;',
    maroon: 'outline:maroon;',
    medium: 'outline:medium;',
    mediumaquamarine: 'outline:mediumaquamarine;',
    mediumblue: 'outline:mediumblue;',
    mediumorchid: 'outline:mediumorchid;',
    mediumpurple: 'outline:mediumpurple;',
    mediumseagreen: 'outline:mediumseagreen;',
    mediumslateblue: 'outline:mediumslateblue;',
    mediumspringgreen: 'outline:mediumspringgreen;',
    mediumturquoise: 'outline:mediumturquoise;',
    mediumvioletred: 'outline:mediumvioletred;',
    midnightblue: 'outline:midnightblue;',
    mintcream: 'outline:mintcream;',
    mistyrose: 'outline:mistyrose;',
    moccasin: 'outline:moccasin;',
    navajowhite: 'outline:navajowhite;',
    navy: 'outline:navy;',
    none: 'outline:none;',
    oldlace: 'outline:oldlace;',
    olive: 'outline:olive;',
    olivedrab: 'outline:olivedrab;',
    orange: 'outline:orange;',
    orangered: 'outline:orangered;',
    orchid: 'outline:orchid;',
    outset: 'outline:outset;',
    palegoldenrod: 'outline:palegoldenrod;',
    palegreen: 'outline:palegreen;',
    paleturquoise: 'outline:paleturquoise;',
    palevioletred: 'outline:palevioletred;',
    papayawhip: 'outline:papayawhip;',
    peachpuff: 'outline:peachpuff;',
    peru: 'outline:peru;',
    pink: 'outline:pink;',
    plum: 'outline:plum;',
    powderblue: 'outline:powderblue;',
    purple: 'outline:purple;',
    rebeccapurple: 'outline:rebeccapurple;',
    red: 'outline:red;',
    revert: 'outline:revert;',
    revertLayer: 'outline:revert-layer;',
    ridge: 'outline:ridge;',
    rosybrown: 'outline:rosybrown;',
    royalblue: 'outline:royalblue;',
    saddlebrown: 'outline:saddlebrown;',
    salmon: 'outline:salmon;',
    sandybrown: 'outline:sandybrown;',
    seagreen: 'outline:seagreen;',
    seashell: 'outline:seashell;',
    sienna: 'outline:sienna;',
    silver: 'outline:silver;',
    skyblue: 'outline:skyblue;',
    slateblue: 'outline:slateblue;',
    slategray: 'outline:slategray;',
    slategrey: 'outline:slategrey;',
    snow: 'outline:snow;',
    solid: 'outline:solid;',
    springgreen: 'outline:springgreen;',
    steelblue: 'outline:steelblue;',
    tan: 'outline:tan;',
    teal: 'outline:teal;',
    thick: 'outline:thick;',
    thin: 'outline:thin;',
    thistle: 'outline:thistle;',
    tomato: 'outline:tomato;',
    transparent: 'outline:transparent;',
    turquoise: 'outline:turquoise;',
    unset: 'outline:unset;',
    violet: 'outline:violet;',
    wheat: 'outline:wheat;',
    white: 'outline:white;',
    whitesmoke: 'outline:whitesmoke;',
    yellow: 'outline:yellow;',
    yellowgreen: 'outline:yellowgreen;',
  } as const;
}

type OutlineCssKeywords = Readonly<ReturnType<typeof outlineKeywords>>;
export interface OutlineCss extends OutlineCssKeywords {}
/** CSS 属性 outline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
 */
export class OutlineCss extends LengthCssProperty<Property.Outline> {
  constructor() {
    super('outline');
    initializeOutlineCss();
  }
}
let outlineReady = false;
function initializeOutlineCss(): void {
  if (outlineReady) return;
  Object.assign(OutlineCss.prototype, outlineKeywords());
  Object.freeze(OutlineCss.prototype);
  outlineReady = true;
}

function outlineColorKeywords() {
  return {
    AccentColor: 'outline-color:AccentColor;',
    AccentColorText: 'outline-color:AccentColorText;',
    ActiveBorder: 'outline-color:ActiveBorder;',
    ActiveCaption: 'outline-color:ActiveCaption;',
    ActiveText: 'outline-color:ActiveText;',
    AppWorkspace: 'outline-color:AppWorkspace;',
    Background: 'outline-color:Background;',
    ButtonBorder: 'outline-color:ButtonBorder;',
    ButtonFace: 'outline-color:ButtonFace;',
    ButtonHighlight: 'outline-color:ButtonHighlight;',
    ButtonShadow: 'outline-color:ButtonShadow;',
    ButtonText: 'outline-color:ButtonText;',
    Canvas: 'outline-color:Canvas;',
    CanvasText: 'outline-color:CanvasText;',
    CaptionText: 'outline-color:CaptionText;',
    Field: 'outline-color:Field;',
    FieldText: 'outline-color:FieldText;',
    GrayText: 'outline-color:GrayText;',
    Highlight: 'outline-color:Highlight;',
    HighlightText: 'outline-color:HighlightText;',
    InactiveBorder: 'outline-color:InactiveBorder;',
    InactiveCaption: 'outline-color:InactiveCaption;',
    InactiveCaptionText: 'outline-color:InactiveCaptionText;',
    InfoBackground: 'outline-color:InfoBackground;',
    InfoText: 'outline-color:InfoText;',
    LinkText: 'outline-color:LinkText;',
    Mark: 'outline-color:Mark;',
    MarkText: 'outline-color:MarkText;',
    Menu: 'outline-color:Menu;',
    MenuText: 'outline-color:MenuText;',
    Scrollbar: 'outline-color:Scrollbar;',
    SelectedItem: 'outline-color:SelectedItem;',
    SelectedItemText: 'outline-color:SelectedItemText;',
    ThreeDDarkShadow: 'outline-color:ThreeDDarkShadow;',
    ThreeDFace: 'outline-color:ThreeDFace;',
    ThreeDHighlight: 'outline-color:ThreeDHighlight;',
    ThreeDLightShadow: 'outline-color:ThreeDLightShadow;',
    ThreeDShadow: 'outline-color:ThreeDShadow;',
    VisitedText: 'outline-color:VisitedText;',
    Window: 'outline-color:Window;',
    WindowFrame: 'outline-color:WindowFrame;',
    WindowText: 'outline-color:WindowText;',
    aliceblue: 'outline-color:aliceblue;',
    antiquewhite: 'outline-color:antiquewhite;',
    aqua: 'outline-color:aqua;',
    aquamarine: 'outline-color:aquamarine;',
    auto: 'outline-color:auto;',
    azure: 'outline-color:azure;',
    beige: 'outline-color:beige;',
    bisque: 'outline-color:bisque;',
    black: 'outline-color:black;',
    blanchedalmond: 'outline-color:blanchedalmond;',
    blue: 'outline-color:blue;',
    blueviolet: 'outline-color:blueviolet;',
    brown: 'outline-color:brown;',
    burlywood: 'outline-color:burlywood;',
    cadetblue: 'outline-color:cadetblue;',
    chartreuse: 'outline-color:chartreuse;',
    chocolate: 'outline-color:chocolate;',
    coral: 'outline-color:coral;',
    cornflowerblue: 'outline-color:cornflowerblue;',
    cornsilk: 'outline-color:cornsilk;',
    crimson: 'outline-color:crimson;',
    currentColor: 'outline-color:currentColor;',
    cyan: 'outline-color:cyan;',
    darkblue: 'outline-color:darkblue;',
    darkcyan: 'outline-color:darkcyan;',
    darkgoldenrod: 'outline-color:darkgoldenrod;',
    darkgray: 'outline-color:darkgray;',
    darkgreen: 'outline-color:darkgreen;',
    darkgrey: 'outline-color:darkgrey;',
    darkkhaki: 'outline-color:darkkhaki;',
    darkmagenta: 'outline-color:darkmagenta;',
    darkolivegreen: 'outline-color:darkolivegreen;',
    darkorange: 'outline-color:darkorange;',
    darkorchid: 'outline-color:darkorchid;',
    darkred: 'outline-color:darkred;',
    darksalmon: 'outline-color:darksalmon;',
    darkseagreen: 'outline-color:darkseagreen;',
    darkslateblue: 'outline-color:darkslateblue;',
    darkslategray: 'outline-color:darkslategray;',
    darkslategrey: 'outline-color:darkslategrey;',
    darkturquoise: 'outline-color:darkturquoise;',
    darkviolet: 'outline-color:darkviolet;',
    deeppink: 'outline-color:deeppink;',
    deepskyblue: 'outline-color:deepskyblue;',
    dimgray: 'outline-color:dimgray;',
    dimgrey: 'outline-color:dimgrey;',
    dodgerblue: 'outline-color:dodgerblue;',
    firebrick: 'outline-color:firebrick;',
    floralwhite: 'outline-color:floralwhite;',
    forestgreen: 'outline-color:forestgreen;',
    fuchsia: 'outline-color:fuchsia;',
    gainsboro: 'outline-color:gainsboro;',
    ghostwhite: 'outline-color:ghostwhite;',
    gold: 'outline-color:gold;',
    goldenrod: 'outline-color:goldenrod;',
    gray: 'outline-color:gray;',
    green: 'outline-color:green;',
    greenyellow: 'outline-color:greenyellow;',
    grey: 'outline-color:grey;',
    honeydew: 'outline-color:honeydew;',
    hotpink: 'outline-color:hotpink;',
    indianred: 'outline-color:indianred;',
    indigo: 'outline-color:indigo;',
    inherit: 'outline-color:inherit;',
    initial: 'outline-color:initial;',
    ivory: 'outline-color:ivory;',
    khaki: 'outline-color:khaki;',
    lavender: 'outline-color:lavender;',
    lavenderblush: 'outline-color:lavenderblush;',
    lawngreen: 'outline-color:lawngreen;',
    lemonchiffon: 'outline-color:lemonchiffon;',
    lightblue: 'outline-color:lightblue;',
    lightcoral: 'outline-color:lightcoral;',
    lightcyan: 'outline-color:lightcyan;',
    lightgoldenrodyellow: 'outline-color:lightgoldenrodyellow;',
    lightgray: 'outline-color:lightgray;',
    lightgreen: 'outline-color:lightgreen;',
    lightgrey: 'outline-color:lightgrey;',
    lightpink: 'outline-color:lightpink;',
    lightsalmon: 'outline-color:lightsalmon;',
    lightseagreen: 'outline-color:lightseagreen;',
    lightskyblue: 'outline-color:lightskyblue;',
    lightslategray: 'outline-color:lightslategray;',
    lightslategrey: 'outline-color:lightslategrey;',
    lightsteelblue: 'outline-color:lightsteelblue;',
    lightyellow: 'outline-color:lightyellow;',
    lime: 'outline-color:lime;',
    limegreen: 'outline-color:limegreen;',
    linen: 'outline-color:linen;',
    magenta: 'outline-color:magenta;',
    maroon: 'outline-color:maroon;',
    mediumaquamarine: 'outline-color:mediumaquamarine;',
    mediumblue: 'outline-color:mediumblue;',
    mediumorchid: 'outline-color:mediumorchid;',
    mediumpurple: 'outline-color:mediumpurple;',
    mediumseagreen: 'outline-color:mediumseagreen;',
    mediumslateblue: 'outline-color:mediumslateblue;',
    mediumspringgreen: 'outline-color:mediumspringgreen;',
    mediumturquoise: 'outline-color:mediumturquoise;',
    mediumvioletred: 'outline-color:mediumvioletred;',
    midnightblue: 'outline-color:midnightblue;',
    mintcream: 'outline-color:mintcream;',
    mistyrose: 'outline-color:mistyrose;',
    moccasin: 'outline-color:moccasin;',
    navajowhite: 'outline-color:navajowhite;',
    navy: 'outline-color:navy;',
    oldlace: 'outline-color:oldlace;',
    olive: 'outline-color:olive;',
    olivedrab: 'outline-color:olivedrab;',
    orange: 'outline-color:orange;',
    orangered: 'outline-color:orangered;',
    orchid: 'outline-color:orchid;',
    palegoldenrod: 'outline-color:palegoldenrod;',
    palegreen: 'outline-color:palegreen;',
    paleturquoise: 'outline-color:paleturquoise;',
    palevioletred: 'outline-color:palevioletred;',
    papayawhip: 'outline-color:papayawhip;',
    peachpuff: 'outline-color:peachpuff;',
    peru: 'outline-color:peru;',
    pink: 'outline-color:pink;',
    plum: 'outline-color:plum;',
    powderblue: 'outline-color:powderblue;',
    purple: 'outline-color:purple;',
    rebeccapurple: 'outline-color:rebeccapurple;',
    red: 'outline-color:red;',
    revert: 'outline-color:revert;',
    revertLayer: 'outline-color:revert-layer;',
    rosybrown: 'outline-color:rosybrown;',
    royalblue: 'outline-color:royalblue;',
    saddlebrown: 'outline-color:saddlebrown;',
    salmon: 'outline-color:salmon;',
    sandybrown: 'outline-color:sandybrown;',
    seagreen: 'outline-color:seagreen;',
    seashell: 'outline-color:seashell;',
    sienna: 'outline-color:sienna;',
    silver: 'outline-color:silver;',
    skyblue: 'outline-color:skyblue;',
    slateblue: 'outline-color:slateblue;',
    slategray: 'outline-color:slategray;',
    slategrey: 'outline-color:slategrey;',
    snow: 'outline-color:snow;',
    springgreen: 'outline-color:springgreen;',
    steelblue: 'outline-color:steelblue;',
    tan: 'outline-color:tan;',
    teal: 'outline-color:teal;',
    thistle: 'outline-color:thistle;',
    tomato: 'outline-color:tomato;',
    transparent: 'outline-color:transparent;',
    turquoise: 'outline-color:turquoise;',
    unset: 'outline-color:unset;',
    violet: 'outline-color:violet;',
    wheat: 'outline-color:wheat;',
    white: 'outline-color:white;',
    whitesmoke: 'outline-color:whitesmoke;',
    yellow: 'outline-color:yellow;',
    yellowgreen: 'outline-color:yellowgreen;',
  } as const;
}

type OutlineColorCssKeywords = Readonly<ReturnType<typeof outlineColorKeywords>>;
export interface OutlineColorCss extends OutlineColorCssKeywords {}
/** CSS 属性 outline-color；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
 */
export class OutlineColorCss extends CssProperty<Property.OutlineColor> {
  constructor() {
    super('outline-color');
    initializeOutlineColorCss();
  }
}
let outlineColorReady = false;
function initializeOutlineColorCss(): void {
  if (outlineColorReady) return;
  Object.assign(OutlineColorCss.prototype, outlineColorKeywords());
  Object.freeze(OutlineColorCss.prototype);
  outlineColorReady = true;
}

function outlineOffsetKeywords() {
  return {
    inherit: 'outline-offset:inherit;',
    initial: 'outline-offset:initial;',
    revert: 'outline-offset:revert;',
    revertLayer: 'outline-offset:revert-layer;',
    unset: 'outline-offset:unset;',
  } as const;
}

type OutlineOffsetCssKeywords = Readonly<ReturnType<typeof outlineOffsetKeywords>>;
export interface OutlineOffsetCss extends OutlineOffsetCssKeywords {}
/** CSS 属性 outline-offset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
 */
export class OutlineOffsetCss extends LengthCssProperty<Property.OutlineOffset> {
  constructor() {
    super('outline-offset');
    initializeOutlineOffsetCss();
  }
}
let outlineOffsetReady = false;
function initializeOutlineOffsetCss(): void {
  if (outlineOffsetReady) return;
  Object.assign(OutlineOffsetCss.prototype, outlineOffsetKeywords());
  Object.freeze(OutlineOffsetCss.prototype);
  outlineOffsetReady = true;
}

function outlineStyleKeywords() {
  return {
    auto: 'outline-style:auto;',
    dashed: 'outline-style:dashed;',
    dotted: 'outline-style:dotted;',
    double: 'outline-style:double;',
    groove: 'outline-style:groove;',
    inherit: 'outline-style:inherit;',
    initial: 'outline-style:initial;',
    inset: 'outline-style:inset;',
    none: 'outline-style:none;',
    outset: 'outline-style:outset;',
    revert: 'outline-style:revert;',
    revertLayer: 'outline-style:revert-layer;',
    ridge: 'outline-style:ridge;',
    solid: 'outline-style:solid;',
    unset: 'outline-style:unset;',
  } as const;
}

type OutlineStyleCssKeywords = Readonly<ReturnType<typeof outlineStyleKeywords>>;
export interface OutlineStyleCss extends OutlineStyleCssKeywords {}
/** CSS 属性 outline-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
 */
export class OutlineStyleCss extends CssProperty<Property.OutlineStyle> {
  constructor() {
    super('outline-style');
    initializeOutlineStyleCss();
  }
}
let outlineStyleReady = false;
function initializeOutlineStyleCss(): void {
  if (outlineStyleReady) return;
  Object.assign(OutlineStyleCss.prototype, outlineStyleKeywords());
  Object.freeze(OutlineStyleCss.prototype);
  outlineStyleReady = true;
}

function outlineWidthKeywords() {
  return {
    inherit: 'outline-width:inherit;',
    initial: 'outline-width:initial;',
    medium: 'outline-width:medium;',
    revert: 'outline-width:revert;',
    revertLayer: 'outline-width:revert-layer;',
    thick: 'outline-width:thick;',
    thin: 'outline-width:thin;',
    unset: 'outline-width:unset;',
  } as const;
}

type OutlineWidthCssKeywords = Readonly<ReturnType<typeof outlineWidthKeywords>>;
export interface OutlineWidthCss extends OutlineWidthCssKeywords {}
/** CSS 属性 outline-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
 */
export class OutlineWidthCss extends LengthCssProperty<Property.OutlineWidth> {
  constructor() {
    super('outline-width');
    initializeOutlineWidthCss();
  }
}
let outlineWidthReady = false;
function initializeOutlineWidthCss(): void {
  if (outlineWidthReady) return;
  Object.assign(OutlineWidthCss.prototype, outlineWidthKeywords());
  Object.freeze(OutlineWidthCss.prototype);
  outlineWidthReady = true;
}

function overflowKeywords() {
  return {
    auto: 'overflow:auto;',
    clip: 'overflow:clip;',
    hidden: 'overflow:hidden;',
    inherit: 'overflow:inherit;',
    initial: 'overflow:initial;',
    overlay: 'overflow:overlay;',
    revert: 'overflow:revert;',
    revertLayer: 'overflow:revert-layer;',
    scroll: 'overflow:scroll;',
    unset: 'overflow:unset;',
    visible: 'overflow:visible;',
  } as const;
}

type OverflowCssKeywords = Readonly<ReturnType<typeof overflowKeywords>>;
export interface OverflowCss extends OverflowCssKeywords {}
/** CSS 属性 overflow；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
 */
export class OverflowCss extends CssProperty<Property.Overflow> {
  constructor() {
    super('overflow');
    initializeOverflowCss();
  }
}
let overflowReady = false;
function initializeOverflowCss(): void {
  if (overflowReady) return;
  Object.assign(OverflowCss.prototype, overflowKeywords());
  Object.freeze(OverflowCss.prototype);
  overflowReady = true;
}

function overflowAnchorKeywords() {
  return {
    auto: 'overflow-anchor:auto;',
    inherit: 'overflow-anchor:inherit;',
    initial: 'overflow-anchor:initial;',
    none: 'overflow-anchor:none;',
    revert: 'overflow-anchor:revert;',
    revertLayer: 'overflow-anchor:revert-layer;',
    unset: 'overflow-anchor:unset;',
  } as const;
}

type OverflowAnchorCssKeywords = Readonly<ReturnType<typeof overflowAnchorKeywords>>;
export interface OverflowAnchorCss extends OverflowAnchorCssKeywords {}
/** CSS 属性 overflow-anchor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
 */
export class OverflowAnchorCss extends CssProperty<Property.OverflowAnchor> {
  constructor() {
    super('overflow-anchor');
    initializeOverflowAnchorCss();
  }
}
let overflowAnchorReady = false;
function initializeOverflowAnchorCss(): void {
  if (overflowAnchorReady) return;
  Object.assign(OverflowAnchorCss.prototype, overflowAnchorKeywords());
  Object.freeze(OverflowAnchorCss.prototype);
  overflowAnchorReady = true;
}

function overflowBlockKeywords() {
  return {
    auto: 'overflow-block:auto;',
    clip: 'overflow-block:clip;',
    hidden: 'overflow-block:hidden;',
    inherit: 'overflow-block:inherit;',
    initial: 'overflow-block:initial;',
    revert: 'overflow-block:revert;',
    revertLayer: 'overflow-block:revert-layer;',
    scroll: 'overflow-block:scroll;',
    unset: 'overflow-block:unset;',
    visible: 'overflow-block:visible;',
  } as const;
}

type OverflowBlockCssKeywords = Readonly<ReturnType<typeof overflowBlockKeywords>>;
export interface OverflowBlockCss extends OverflowBlockCssKeywords {}
/** CSS 属性 overflow-block；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
 */
export class OverflowBlockCss extends CssProperty<Property.OverflowBlock> {
  constructor() {
    super('overflow-block');
    initializeOverflowBlockCss();
  }
}
let overflowBlockReady = false;
function initializeOverflowBlockCss(): void {
  if (overflowBlockReady) return;
  Object.assign(OverflowBlockCss.prototype, overflowBlockKeywords());
  Object.freeze(OverflowBlockCss.prototype);
  overflowBlockReady = true;
}

function overflowClipBoxKeywords() {
  return {
    contentBox: 'overflow-clip-box:content-box;',
    inherit: 'overflow-clip-box:inherit;',
    initial: 'overflow-clip-box:initial;',
    paddingBox: 'overflow-clip-box:padding-box;',
    revert: 'overflow-clip-box:revert;',
    revertLayer: 'overflow-clip-box:revert-layer;',
    unset: 'overflow-clip-box:unset;',
  } as const;
}

type OverflowClipBoxCssKeywords = Readonly<ReturnType<typeof overflowClipBoxKeywords>>;
export interface OverflowClipBoxCss extends OverflowClipBoxCssKeywords {}
/** CSS 属性 overflow-clip-box；初始值 padding-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
 */
export class OverflowClipBoxCss extends CssProperty<Property.OverflowClipBox> {
  constructor() {
    super('overflow-clip-box');
    initializeOverflowClipBoxCss();
  }
}
let overflowClipBoxReady = false;
function initializeOverflowClipBoxCss(): void {
  if (overflowClipBoxReady) return;
  Object.assign(OverflowClipBoxCss.prototype, overflowClipBoxKeywords());
  Object.freeze(OverflowClipBoxCss.prototype);
  overflowClipBoxReady = true;
}

function overflowClipMarginKeywords() {
  return {
    borderBox: 'overflow-clip-margin:border-box;',
    contentBox: 'overflow-clip-margin:content-box;',
    inherit: 'overflow-clip-margin:inherit;',
    initial: 'overflow-clip-margin:initial;',
    paddingBox: 'overflow-clip-margin:padding-box;',
    revert: 'overflow-clip-margin:revert;',
    revertLayer: 'overflow-clip-margin:revert-layer;',
    unset: 'overflow-clip-margin:unset;',
  } as const;
}

type OverflowClipMarginCssKeywords = Readonly<ReturnType<typeof overflowClipMarginKeywords>>;
export interface OverflowClipMarginCss extends OverflowClipMarginCssKeywords {}
/** CSS 属性 overflow-clip-margin；初始值 0px。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
 */
export class OverflowClipMarginCss extends LengthCssProperty<Property.OverflowClipMargin> {
  constructor() {
    super('overflow-clip-margin');
    initializeOverflowClipMarginCss();
  }
}
let overflowClipMarginReady = false;
function initializeOverflowClipMarginCss(): void {
  if (overflowClipMarginReady) return;
  Object.assign(OverflowClipMarginCss.prototype, overflowClipMarginKeywords());
  Object.freeze(OverflowClipMarginCss.prototype);
  overflowClipMarginReady = true;
}

function overflowInlineKeywords() {
  return {
    auto: 'overflow-inline:auto;',
    clip: 'overflow-inline:clip;',
    hidden: 'overflow-inline:hidden;',
    inherit: 'overflow-inline:inherit;',
    initial: 'overflow-inline:initial;',
    revert: 'overflow-inline:revert;',
    revertLayer: 'overflow-inline:revert-layer;',
    scroll: 'overflow-inline:scroll;',
    unset: 'overflow-inline:unset;',
    visible: 'overflow-inline:visible;',
  } as const;
}

type OverflowInlineCssKeywords = Readonly<ReturnType<typeof overflowInlineKeywords>>;
export interface OverflowInlineCss extends OverflowInlineCssKeywords {}
/** CSS 属性 overflow-inline；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
 */
export class OverflowInlineCss extends CssProperty<Property.OverflowInline> {
  constructor() {
    super('overflow-inline');
    initializeOverflowInlineCss();
  }
}
let overflowInlineReady = false;
function initializeOverflowInlineCss(): void {
  if (overflowInlineReady) return;
  Object.assign(OverflowInlineCss.prototype, overflowInlineKeywords());
  Object.freeze(OverflowInlineCss.prototype);
  overflowInlineReady = true;
}

function overflowWrapKeywords() {
  return {
    anywhere: 'overflow-wrap:anywhere;',
    breakWord: 'overflow-wrap:break-word;',
    inherit: 'overflow-wrap:inherit;',
    initial: 'overflow-wrap:initial;',
    normal: 'overflow-wrap:normal;',
    revert: 'overflow-wrap:revert;',
    revertLayer: 'overflow-wrap:revert-layer;',
    unset: 'overflow-wrap:unset;',
  } as const;
}

type OverflowWrapCssKeywords = Readonly<ReturnType<typeof overflowWrapKeywords>>;
export interface OverflowWrapCss extends OverflowWrapCssKeywords {}
/** CSS 属性 overflow-wrap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
 */
export class OverflowWrapCss extends CssProperty<Property.OverflowWrap> {
  constructor() {
    super('overflow-wrap');
    initializeOverflowWrapCss();
  }
}
let overflowWrapReady = false;
function initializeOverflowWrapCss(): void {
  if (overflowWrapReady) return;
  Object.assign(OverflowWrapCss.prototype, overflowWrapKeywords());
  Object.freeze(OverflowWrapCss.prototype);
  overflowWrapReady = true;
}

function overflowXKeywords() {
  return {
    auto: 'overflow-x:auto;',
    clip: 'overflow-x:clip;',
    hidden: 'overflow-x:hidden;',
    inherit: 'overflow-x:inherit;',
    initial: 'overflow-x:initial;',
    overlay: 'overflow-x:overlay;',
    revert: 'overflow-x:revert;',
    revertLayer: 'overflow-x:revert-layer;',
    scroll: 'overflow-x:scroll;',
    unset: 'overflow-x:unset;',
    visible: 'overflow-x:visible;',
  } as const;
}

type OverflowXCssKeywords = Readonly<ReturnType<typeof overflowXKeywords>>;
export interface OverflowXCss extends OverflowXCssKeywords {}
/** CSS 属性 overflow-x；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
 */
export class OverflowXCss extends CssProperty<Property.OverflowX> {
  constructor() {
    super('overflow-x');
    initializeOverflowXCss();
  }
}
let overflowXReady = false;
function initializeOverflowXCss(): void {
  if (overflowXReady) return;
  Object.assign(OverflowXCss.prototype, overflowXKeywords());
  Object.freeze(OverflowXCss.prototype);
  overflowXReady = true;
}

function overflowYKeywords() {
  return {
    auto: 'overflow-y:auto;',
    clip: 'overflow-y:clip;',
    hidden: 'overflow-y:hidden;',
    inherit: 'overflow-y:inherit;',
    initial: 'overflow-y:initial;',
    overlay: 'overflow-y:overlay;',
    revert: 'overflow-y:revert;',
    revertLayer: 'overflow-y:revert-layer;',
    scroll: 'overflow-y:scroll;',
    unset: 'overflow-y:unset;',
    visible: 'overflow-y:visible;',
  } as const;
}

type OverflowYCssKeywords = Readonly<ReturnType<typeof overflowYKeywords>>;
export interface OverflowYCss extends OverflowYCssKeywords {}
/** CSS 属性 overflow-y；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
 */
export class OverflowYCss extends CssProperty<Property.OverflowY> {
  constructor() {
    super('overflow-y');
    initializeOverflowYCss();
  }
}
let overflowYReady = false;
function initializeOverflowYCss(): void {
  if (overflowYReady) return;
  Object.assign(OverflowYCss.prototype, overflowYKeywords());
  Object.freeze(OverflowYCss.prototype);
  overflowYReady = true;
}

function overlayKeywords() {
  return {
    auto: 'overlay:auto;',
    inherit: 'overlay:inherit;',
    initial: 'overlay:initial;',
    none: 'overlay:none;',
    revert: 'overlay:revert;',
    revertLayer: 'overlay:revert-layer;',
    unset: 'overlay:unset;',
  } as const;
}

type OverlayCssKeywords = Readonly<ReturnType<typeof overlayKeywords>>;
export interface OverlayCss extends OverlayCssKeywords {}
/** CSS 属性 overlay；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
 */
export class OverlayCss extends CssProperty<Property.Overlay> {
  constructor() {
    super('overlay');
    initializeOverlayCss();
  }
}
let overlayReady = false;
function initializeOverlayCss(): void {
  if (overlayReady) return;
  Object.assign(OverlayCss.prototype, overlayKeywords());
  Object.freeze(OverlayCss.prototype);
  overlayReady = true;
}

function overscrollBehaviorKeywords() {
  return {
    auto: 'overscroll-behavior:auto;',
    contain: 'overscroll-behavior:contain;',
    inherit: 'overscroll-behavior:inherit;',
    initial: 'overscroll-behavior:initial;',
    none: 'overscroll-behavior:none;',
    revert: 'overscroll-behavior:revert;',
    revertLayer: 'overscroll-behavior:revert-layer;',
    unset: 'overscroll-behavior:unset;',
  } as const;
}

type OverscrollBehaviorCssKeywords = Readonly<ReturnType<typeof overscrollBehaviorKeywords>>;
export interface OverscrollBehaviorCss extends OverscrollBehaviorCssKeywords {}
/** CSS 属性 overscroll-behavior；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
 */
export class OverscrollBehaviorCss extends CssProperty<Property.OverscrollBehavior> {
  constructor() {
    super('overscroll-behavior');
    initializeOverscrollBehaviorCss();
  }
}
let overscrollBehaviorReady = false;
function initializeOverscrollBehaviorCss(): void {
  if (overscrollBehaviorReady) return;
  Object.assign(OverscrollBehaviorCss.prototype, overscrollBehaviorKeywords());
  Object.freeze(OverscrollBehaviorCss.prototype);
  overscrollBehaviorReady = true;
}

function overscrollBehaviorBlockKeywords() {
  return {
    auto: 'overscroll-behavior-block:auto;',
    contain: 'overscroll-behavior-block:contain;',
    inherit: 'overscroll-behavior-block:inherit;',
    initial: 'overscroll-behavior-block:initial;',
    none: 'overscroll-behavior-block:none;',
    revert: 'overscroll-behavior-block:revert;',
    revertLayer: 'overscroll-behavior-block:revert-layer;',
    unset: 'overscroll-behavior-block:unset;',
  } as const;
}

type OverscrollBehaviorBlockCssKeywords = Readonly<
  ReturnType<typeof overscrollBehaviorBlockKeywords>
>;
export interface OverscrollBehaviorBlockCss extends OverscrollBehaviorBlockCssKeywords {}
/** CSS 属性 overscroll-behavior-block；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
 */
export class OverscrollBehaviorBlockCss extends CssProperty<Property.OverscrollBehaviorBlock> {
  constructor() {
    super('overscroll-behavior-block');
    initializeOverscrollBehaviorBlockCss();
  }
}
let overscrollBehaviorBlockReady = false;
function initializeOverscrollBehaviorBlockCss(): void {
  if (overscrollBehaviorBlockReady) return;
  Object.assign(OverscrollBehaviorBlockCss.prototype, overscrollBehaviorBlockKeywords());
  Object.freeze(OverscrollBehaviorBlockCss.prototype);
  overscrollBehaviorBlockReady = true;
}

function overscrollBehaviorInlineKeywords() {
  return {
    auto: 'overscroll-behavior-inline:auto;',
    contain: 'overscroll-behavior-inline:contain;',
    inherit: 'overscroll-behavior-inline:inherit;',
    initial: 'overscroll-behavior-inline:initial;',
    none: 'overscroll-behavior-inline:none;',
    revert: 'overscroll-behavior-inline:revert;',
    revertLayer: 'overscroll-behavior-inline:revert-layer;',
    unset: 'overscroll-behavior-inline:unset;',
  } as const;
}

type OverscrollBehaviorInlineCssKeywords = Readonly<
  ReturnType<typeof overscrollBehaviorInlineKeywords>
>;
export interface OverscrollBehaviorInlineCss extends OverscrollBehaviorInlineCssKeywords {}
/** CSS 属性 overscroll-behavior-inline；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
 */
export class OverscrollBehaviorInlineCss extends CssProperty<Property.OverscrollBehaviorInline> {
  constructor() {
    super('overscroll-behavior-inline');
    initializeOverscrollBehaviorInlineCss();
  }
}
let overscrollBehaviorInlineReady = false;
function initializeOverscrollBehaviorInlineCss(): void {
  if (overscrollBehaviorInlineReady) return;
  Object.assign(OverscrollBehaviorInlineCss.prototype, overscrollBehaviorInlineKeywords());
  Object.freeze(OverscrollBehaviorInlineCss.prototype);
  overscrollBehaviorInlineReady = true;
}

function overscrollBehaviorXKeywords() {
  return {
    auto: 'overscroll-behavior-x:auto;',
    contain: 'overscroll-behavior-x:contain;',
    inherit: 'overscroll-behavior-x:inherit;',
    initial: 'overscroll-behavior-x:initial;',
    none: 'overscroll-behavior-x:none;',
    revert: 'overscroll-behavior-x:revert;',
    revertLayer: 'overscroll-behavior-x:revert-layer;',
    unset: 'overscroll-behavior-x:unset;',
  } as const;
}

type OverscrollBehaviorXCssKeywords = Readonly<ReturnType<typeof overscrollBehaviorXKeywords>>;
export interface OverscrollBehaviorXCss extends OverscrollBehaviorXCssKeywords {}
/** CSS 属性 overscroll-behavior-x；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
 */
export class OverscrollBehaviorXCss extends CssProperty<Property.OverscrollBehaviorX> {
  constructor() {
    super('overscroll-behavior-x');
    initializeOverscrollBehaviorXCss();
  }
}
let overscrollBehaviorXReady = false;
function initializeOverscrollBehaviorXCss(): void {
  if (overscrollBehaviorXReady) return;
  Object.assign(OverscrollBehaviorXCss.prototype, overscrollBehaviorXKeywords());
  Object.freeze(OverscrollBehaviorXCss.prototype);
  overscrollBehaviorXReady = true;
}

function overscrollBehaviorYKeywords() {
  return {
    auto: 'overscroll-behavior-y:auto;',
    contain: 'overscroll-behavior-y:contain;',
    inherit: 'overscroll-behavior-y:inherit;',
    initial: 'overscroll-behavior-y:initial;',
    none: 'overscroll-behavior-y:none;',
    revert: 'overscroll-behavior-y:revert;',
    revertLayer: 'overscroll-behavior-y:revert-layer;',
    unset: 'overscroll-behavior-y:unset;',
  } as const;
}

type OverscrollBehaviorYCssKeywords = Readonly<ReturnType<typeof overscrollBehaviorYKeywords>>;
export interface OverscrollBehaviorYCss extends OverscrollBehaviorYCssKeywords {}
/** CSS 属性 overscroll-behavior-y；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
 */
export class OverscrollBehaviorYCss extends CssProperty<Property.OverscrollBehaviorY> {
  constructor() {
    super('overscroll-behavior-y');
    initializeOverscrollBehaviorYCss();
  }
}
let overscrollBehaviorYReady = false;
function initializeOverscrollBehaviorYCss(): void {
  if (overscrollBehaviorYReady) return;
  Object.assign(OverscrollBehaviorYCss.prototype, overscrollBehaviorYKeywords());
  Object.freeze(OverscrollBehaviorYCss.prototype);
  overscrollBehaviorYReady = true;
}

function paddingKeywords() {
  return {
    inherit: 'padding:inherit;',
    initial: 'padding:initial;',
    revert: 'padding:revert;',
    revertLayer: 'padding:revert-layer;',
    unset: 'padding:unset;',
  } as const;
}

type PaddingCssKeywords = Readonly<ReturnType<typeof paddingKeywords>>;
export interface PaddingCss extends PaddingCssKeywords {}
/** 内边距（CSS padding）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
 */
export class PaddingCss extends LengthCssProperty<Property.Padding> {
  constructor() {
    super('padding');
    initializePaddingCss();
  }
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
}
let paddingReady = false;
function initializePaddingCss(): void {
  if (paddingReady) return;
  Object.assign(PaddingCss.prototype, paddingKeywords());
  Object.freeze(PaddingCss.prototype);
  paddingReady = true;
}

function paddingBlockKeywords() {
  return {
    inherit: 'padding-block:inherit;',
    initial: 'padding-block:initial;',
    revert: 'padding-block:revert;',
    revertLayer: 'padding-block:revert-layer;',
    unset: 'padding-block:unset;',
  } as const;
}

type PaddingBlockCssKeywords = Readonly<ReturnType<typeof paddingBlockKeywords>>;
export interface PaddingBlockCss extends PaddingBlockCssKeywords {}
/** CSS 属性 padding-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
 */
export class PaddingBlockCss extends LengthCssProperty<Property.PaddingBlock> {
  constructor() {
    super('padding-block');
    initializePaddingBlockCss();
  }
}
let paddingBlockReady = false;
function initializePaddingBlockCss(): void {
  if (paddingBlockReady) return;
  Object.assign(PaddingBlockCss.prototype, paddingBlockKeywords());
  Object.freeze(PaddingBlockCss.prototype);
  paddingBlockReady = true;
}

function paddingBlockEndKeywords() {
  return {
    inherit: 'padding-block-end:inherit;',
    initial: 'padding-block-end:initial;',
    revert: 'padding-block-end:revert;',
    revertLayer: 'padding-block-end:revert-layer;',
    unset: 'padding-block-end:unset;',
  } as const;
}

type PaddingBlockEndCssKeywords = Readonly<ReturnType<typeof paddingBlockEndKeywords>>;
export interface PaddingBlockEndCss extends PaddingBlockEndCssKeywords {}
/** CSS 属性 padding-block-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
 */
export class PaddingBlockEndCss extends LengthCssProperty<Property.PaddingBlockEnd> {
  constructor() {
    super('padding-block-end');
    initializePaddingBlockEndCss();
  }
}
let paddingBlockEndReady = false;
function initializePaddingBlockEndCss(): void {
  if (paddingBlockEndReady) return;
  Object.assign(PaddingBlockEndCss.prototype, paddingBlockEndKeywords());
  Object.freeze(PaddingBlockEndCss.prototype);
  paddingBlockEndReady = true;
}

function paddingBlockStartKeywords() {
  return {
    inherit: 'padding-block-start:inherit;',
    initial: 'padding-block-start:initial;',
    revert: 'padding-block-start:revert;',
    revertLayer: 'padding-block-start:revert-layer;',
    unset: 'padding-block-start:unset;',
  } as const;
}

type PaddingBlockStartCssKeywords = Readonly<ReturnType<typeof paddingBlockStartKeywords>>;
export interface PaddingBlockStartCss extends PaddingBlockStartCssKeywords {}
/** CSS 属性 padding-block-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
 */
export class PaddingBlockStartCss extends LengthCssProperty<Property.PaddingBlockStart> {
  constructor() {
    super('padding-block-start');
    initializePaddingBlockStartCss();
  }
}
let paddingBlockStartReady = false;
function initializePaddingBlockStartCss(): void {
  if (paddingBlockStartReady) return;
  Object.assign(PaddingBlockStartCss.prototype, paddingBlockStartKeywords());
  Object.freeze(PaddingBlockStartCss.prototype);
  paddingBlockStartReady = true;
}

function paddingBottomKeywords() {
  return {
    inherit: 'padding-bottom:inherit;',
    initial: 'padding-bottom:initial;',
    revert: 'padding-bottom:revert;',
    revertLayer: 'padding-bottom:revert-layer;',
    unset: 'padding-bottom:unset;',
  } as const;
}

type PaddingBottomCssKeywords = Readonly<ReturnType<typeof paddingBottomKeywords>>;
export interface PaddingBottomCss extends PaddingBottomCssKeywords {}
/** CSS 属性 padding-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
 */
export class PaddingBottomCss extends LengthCssProperty<Property.PaddingBottom> {
  constructor() {
    super('padding-bottom');
    initializePaddingBottomCss();
  }
}
let paddingBottomReady = false;
function initializePaddingBottomCss(): void {
  if (paddingBottomReady) return;
  Object.assign(PaddingBottomCss.prototype, paddingBottomKeywords());
  Object.freeze(PaddingBottomCss.prototype);
  paddingBottomReady = true;
}

function paddingInlineKeywords() {
  return {
    inherit: 'padding-inline:inherit;',
    initial: 'padding-inline:initial;',
    revert: 'padding-inline:revert;',
    revertLayer: 'padding-inline:revert-layer;',
    unset: 'padding-inline:unset;',
  } as const;
}

type PaddingInlineCssKeywords = Readonly<ReturnType<typeof paddingInlineKeywords>>;
export interface PaddingInlineCss extends PaddingInlineCssKeywords {}
/** CSS 属性 padding-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
 */
export class PaddingInlineCss extends LengthCssProperty<Property.PaddingInline> {
  constructor() {
    super('padding-inline');
    initializePaddingInlineCss();
  }
}
let paddingInlineReady = false;
function initializePaddingInlineCss(): void {
  if (paddingInlineReady) return;
  Object.assign(PaddingInlineCss.prototype, paddingInlineKeywords());
  Object.freeze(PaddingInlineCss.prototype);
  paddingInlineReady = true;
}

function paddingInlineEndKeywords() {
  return {
    inherit: 'padding-inline-end:inherit;',
    initial: 'padding-inline-end:initial;',
    revert: 'padding-inline-end:revert;',
    revertLayer: 'padding-inline-end:revert-layer;',
    unset: 'padding-inline-end:unset;',
  } as const;
}

type PaddingInlineEndCssKeywords = Readonly<ReturnType<typeof paddingInlineEndKeywords>>;
export interface PaddingInlineEndCss extends PaddingInlineEndCssKeywords {}
/** CSS 属性 padding-inline-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
 */
export class PaddingInlineEndCss extends LengthCssProperty<Property.PaddingInlineEnd> {
  constructor() {
    super('padding-inline-end');
    initializePaddingInlineEndCss();
  }
}
let paddingInlineEndReady = false;
function initializePaddingInlineEndCss(): void {
  if (paddingInlineEndReady) return;
  Object.assign(PaddingInlineEndCss.prototype, paddingInlineEndKeywords());
  Object.freeze(PaddingInlineEndCss.prototype);
  paddingInlineEndReady = true;
}

function paddingInlineStartKeywords() {
  return {
    inherit: 'padding-inline-start:inherit;',
    initial: 'padding-inline-start:initial;',
    revert: 'padding-inline-start:revert;',
    revertLayer: 'padding-inline-start:revert-layer;',
    unset: 'padding-inline-start:unset;',
  } as const;
}

type PaddingInlineStartCssKeywords = Readonly<ReturnType<typeof paddingInlineStartKeywords>>;
export interface PaddingInlineStartCss extends PaddingInlineStartCssKeywords {}
/** CSS 属性 padding-inline-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
 */
export class PaddingInlineStartCss extends LengthCssProperty<Property.PaddingInlineStart> {
  constructor() {
    super('padding-inline-start');
    initializePaddingInlineStartCss();
  }
}
let paddingInlineStartReady = false;
function initializePaddingInlineStartCss(): void {
  if (paddingInlineStartReady) return;
  Object.assign(PaddingInlineStartCss.prototype, paddingInlineStartKeywords());
  Object.freeze(PaddingInlineStartCss.prototype);
  paddingInlineStartReady = true;
}

function paddingLeftKeywords() {
  return {
    inherit: 'padding-left:inherit;',
    initial: 'padding-left:initial;',
    revert: 'padding-left:revert;',
    revertLayer: 'padding-left:revert-layer;',
    unset: 'padding-left:unset;',
  } as const;
}

type PaddingLeftCssKeywords = Readonly<ReturnType<typeof paddingLeftKeywords>>;
export interface PaddingLeftCss extends PaddingLeftCssKeywords {}
/** CSS 属性 padding-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
 */
export class PaddingLeftCss extends LengthCssProperty<Property.PaddingLeft> {
  constructor() {
    super('padding-left');
    initializePaddingLeftCss();
  }
}
let paddingLeftReady = false;
function initializePaddingLeftCss(): void {
  if (paddingLeftReady) return;
  Object.assign(PaddingLeftCss.prototype, paddingLeftKeywords());
  Object.freeze(PaddingLeftCss.prototype);
  paddingLeftReady = true;
}

function paddingRightKeywords() {
  return {
    inherit: 'padding-right:inherit;',
    initial: 'padding-right:initial;',
    revert: 'padding-right:revert;',
    revertLayer: 'padding-right:revert-layer;',
    unset: 'padding-right:unset;',
  } as const;
}

type PaddingRightCssKeywords = Readonly<ReturnType<typeof paddingRightKeywords>>;
export interface PaddingRightCss extends PaddingRightCssKeywords {}
/** CSS 属性 padding-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
 */
export class PaddingRightCss extends LengthCssProperty<Property.PaddingRight> {
  constructor() {
    super('padding-right');
    initializePaddingRightCss();
  }
}
let paddingRightReady = false;
function initializePaddingRightCss(): void {
  if (paddingRightReady) return;
  Object.assign(PaddingRightCss.prototype, paddingRightKeywords());
  Object.freeze(PaddingRightCss.prototype);
  paddingRightReady = true;
}

function paddingTopKeywords() {
  return {
    inherit: 'padding-top:inherit;',
    initial: 'padding-top:initial;',
    revert: 'padding-top:revert;',
    revertLayer: 'padding-top:revert-layer;',
    unset: 'padding-top:unset;',
  } as const;
}

type PaddingTopCssKeywords = Readonly<ReturnType<typeof paddingTopKeywords>>;
export interface PaddingTopCss extends PaddingTopCssKeywords {}
/** CSS 属性 padding-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
 */
export class PaddingTopCss extends LengthCssProperty<Property.PaddingTop> {
  constructor() {
    super('padding-top');
    initializePaddingTopCss();
  }
}
let paddingTopReady = false;
function initializePaddingTopCss(): void {
  if (paddingTopReady) return;
  Object.assign(PaddingTopCss.prototype, paddingTopKeywords());
  Object.freeze(PaddingTopCss.prototype);
  paddingTopReady = true;
}

function pageKeywords() {
  return {
    auto: 'page:auto;',
    inherit: 'page:inherit;',
    initial: 'page:initial;',
    revert: 'page:revert;',
    revertLayer: 'page:revert-layer;',
    unset: 'page:unset;',
  } as const;
}

type PageCssKeywords = Readonly<ReturnType<typeof pageKeywords>>;
export interface PageCss extends PageCssKeywords {}
/** CSS 属性 page；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
 */
export class PageCss extends CssProperty<Property.Page> {
  constructor() {
    super('page');
    initializePageCss();
  }
}
let pageReady = false;
function initializePageCss(): void {
  if (pageReady) return;
  Object.assign(PageCss.prototype, pageKeywords());
  Object.freeze(PageCss.prototype);
  pageReady = true;
}

function paintOrderKeywords() {
  return {
    fill: 'paint-order:fill;',
    inherit: 'paint-order:inherit;',
    initial: 'paint-order:initial;',
    markers: 'paint-order:markers;',
    normal: 'paint-order:normal;',
    revert: 'paint-order:revert;',
    revertLayer: 'paint-order:revert-layer;',
    stroke: 'paint-order:stroke;',
    unset: 'paint-order:unset;',
  } as const;
}

type PaintOrderCssKeywords = Readonly<ReturnType<typeof paintOrderKeywords>>;
export interface PaintOrderCss extends PaintOrderCssKeywords {}
/** CSS 属性 paint-order；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
 */
export class PaintOrderCss extends CssProperty<Property.PaintOrder> {
  constructor() {
    super('paint-order');
    initializePaintOrderCss();
  }
}
let paintOrderReady = false;
function initializePaintOrderCss(): void {
  if (paintOrderReady) return;
  Object.assign(PaintOrderCss.prototype, paintOrderKeywords());
  Object.freeze(PaintOrderCss.prototype);
  paintOrderReady = true;
}

function perspectiveKeywords() {
  return {
    inherit: 'perspective:inherit;',
    initial: 'perspective:initial;',
    none: 'perspective:none;',
    revert: 'perspective:revert;',
    revertLayer: 'perspective:revert-layer;',
    unset: 'perspective:unset;',
  } as const;
}

type PerspectiveCssKeywords = Readonly<ReturnType<typeof perspectiveKeywords>>;
export interface PerspectiveCss extends PerspectiveCssKeywords {}
/** CSS 属性 perspective；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
 */
export class PerspectiveCss extends LengthCssProperty<Property.Perspective> {
  constructor() {
    super('perspective');
    initializePerspectiveCss();
  }
}
let perspectiveReady = false;
function initializePerspectiveCss(): void {
  if (perspectiveReady) return;
  Object.assign(PerspectiveCss.prototype, perspectiveKeywords());
  Object.freeze(PerspectiveCss.prototype);
  perspectiveReady = true;
}

function perspectiveOriginKeywords() {
  return {
    bottom: 'perspective-origin:bottom;',
    center: 'perspective-origin:center;',
    inherit: 'perspective-origin:inherit;',
    initial: 'perspective-origin:initial;',
    left: 'perspective-origin:left;',
    revert: 'perspective-origin:revert;',
    revertLayer: 'perspective-origin:revert-layer;',
    right: 'perspective-origin:right;',
    top: 'perspective-origin:top;',
    unset: 'perspective-origin:unset;',
  } as const;
}

type PerspectiveOriginCssKeywords = Readonly<ReturnType<typeof perspectiveOriginKeywords>>;
export interface PerspectiveOriginCss extends PerspectiveOriginCssKeywords {}
/** CSS 属性 perspective-origin；初始值 50% 50%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
 */
export class PerspectiveOriginCss extends LengthCssProperty<Property.PerspectiveOrigin> {
  constructor() {
    super('perspective-origin');
    initializePerspectiveOriginCss();
  }
}
let perspectiveOriginReady = false;
function initializePerspectiveOriginCss(): void {
  if (perspectiveOriginReady) return;
  Object.assign(PerspectiveOriginCss.prototype, perspectiveOriginKeywords());
  Object.freeze(PerspectiveOriginCss.prototype);
  perspectiveOriginReady = true;
}

function placeContentKeywords() {
  return {
    baseline: 'place-content:baseline;',
    center: 'place-content:center;',
    end: 'place-content:end;',
    flexEnd: 'place-content:flex-end;',
    flexStart: 'place-content:flex-start;',
    inherit: 'place-content:inherit;',
    initial: 'place-content:initial;',
    normal: 'place-content:normal;',
    revert: 'place-content:revert;',
    revertLayer: 'place-content:revert-layer;',
    spaceAround: 'place-content:space-around;',
    spaceBetween: 'place-content:space-between;',
    spaceEvenly: 'place-content:space-evenly;',
    start: 'place-content:start;',
    stretch: 'place-content:stretch;',
    unset: 'place-content:unset;',
  } as const;
}

type PlaceContentCssKeywords = Readonly<ReturnType<typeof placeContentKeywords>>;
export interface PlaceContentCss extends PlaceContentCssKeywords {}
/** CSS 属性 place-content。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
 */
export class PlaceContentCss extends CssProperty<Property.PlaceContent> {
  constructor() {
    super('place-content');
    initializePlaceContentCss();
  }
}
let placeContentReady = false;
function initializePlaceContentCss(): void {
  if (placeContentReady) return;
  Object.assign(PlaceContentCss.prototype, placeContentKeywords());
  Object.freeze(PlaceContentCss.prototype);
  placeContentReady = true;
}

function placeItemsKeywords() {
  return {
    anchorCenter: 'place-items:anchor-center;',
    baseline: 'place-items:baseline;',
    center: 'place-items:center;',
    end: 'place-items:end;',
    flexEnd: 'place-items:flex-end;',
    flexStart: 'place-items:flex-start;',
    inherit: 'place-items:inherit;',
    initial: 'place-items:initial;',
    normal: 'place-items:normal;',
    revert: 'place-items:revert;',
    revertLayer: 'place-items:revert-layer;',
    selfEnd: 'place-items:self-end;',
    selfStart: 'place-items:self-start;',
    start: 'place-items:start;',
    stretch: 'place-items:stretch;',
    unset: 'place-items:unset;',
  } as const;
}

type PlaceItemsCssKeywords = Readonly<ReturnType<typeof placeItemsKeywords>>;
export interface PlaceItemsCss extends PlaceItemsCssKeywords {}
/** CSS 属性 place-items。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
 */
export class PlaceItemsCss extends CssProperty<Property.PlaceItems> {
  constructor() {
    super('place-items');
    initializePlaceItemsCss();
  }
}
let placeItemsReady = false;
function initializePlaceItemsCss(): void {
  if (placeItemsReady) return;
  Object.assign(PlaceItemsCss.prototype, placeItemsKeywords());
  Object.freeze(PlaceItemsCss.prototype);
  placeItemsReady = true;
}

function placeSelfKeywords() {
  return {
    anchorCenter: 'place-self:anchor-center;',
    auto: 'place-self:auto;',
    baseline: 'place-self:baseline;',
    center: 'place-self:center;',
    end: 'place-self:end;',
    flexEnd: 'place-self:flex-end;',
    flexStart: 'place-self:flex-start;',
    inherit: 'place-self:inherit;',
    initial: 'place-self:initial;',
    normal: 'place-self:normal;',
    revert: 'place-self:revert;',
    revertLayer: 'place-self:revert-layer;',
    selfEnd: 'place-self:self-end;',
    selfStart: 'place-self:self-start;',
    start: 'place-self:start;',
    stretch: 'place-self:stretch;',
    unset: 'place-self:unset;',
  } as const;
}

type PlaceSelfCssKeywords = Readonly<ReturnType<typeof placeSelfKeywords>>;
export interface PlaceSelfCss extends PlaceSelfCssKeywords {}
/** CSS 属性 place-self。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
 */
export class PlaceSelfCss extends CssProperty<Property.PlaceSelf> {
  constructor() {
    super('place-self');
    initializePlaceSelfCss();
  }
}
let placeSelfReady = false;
function initializePlaceSelfCss(): void {
  if (placeSelfReady) return;
  Object.assign(PlaceSelfCss.prototype, placeSelfKeywords());
  Object.freeze(PlaceSelfCss.prototype);
  placeSelfReady = true;
}

function pointerEventsKeywords() {
  return {
    all: 'pointer-events:all;',
    auto: 'pointer-events:auto;',
    fill: 'pointer-events:fill;',
    inherit: 'pointer-events:inherit;',
    initial: 'pointer-events:initial;',
    none: 'pointer-events:none;',
    painted: 'pointer-events:painted;',
    revert: 'pointer-events:revert;',
    revertLayer: 'pointer-events:revert-layer;',
    stroke: 'pointer-events:stroke;',
    unset: 'pointer-events:unset;',
    visible: 'pointer-events:visible;',
    visibleFill: 'pointer-events:visibleFill;',
    visiblePainted: 'pointer-events:visiblePainted;',
    visibleStroke: 'pointer-events:visibleStroke;',
  } as const;
}

type PointerEventsCssKeywords = Readonly<ReturnType<typeof pointerEventsKeywords>>;
export interface PointerEventsCss extends PointerEventsCssKeywords {}
/** CSS 属性 pointer-events；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
 */
export class PointerEventsCss extends CssProperty<Property.PointerEvents> {
  constructor() {
    super('pointer-events');
    initializePointerEventsCss();
  }
}
let pointerEventsReady = false;
function initializePointerEventsCss(): void {
  if (pointerEventsReady) return;
  Object.assign(PointerEventsCss.prototype, pointerEventsKeywords());
  Object.freeze(PointerEventsCss.prototype);
  pointerEventsReady = true;
}

function positionKeywords() {
  return {
    absolute: 'position:absolute;',
    fixed: 'position:fixed;',
    inherit: 'position:inherit;',
    initial: 'position:initial;',
    relative: 'position:relative;',
    revert: 'position:revert;',
    revertLayer: 'position:revert-layer;',
    static: 'position:static;',
    sticky: 'position:sticky;',
    unset: 'position:unset;',
  } as const;
}

type PositionCssKeywords = Readonly<ReturnType<typeof positionKeywords>>;
export interface PositionCss extends PositionCssKeywords {}
/** CSS 属性 position；初始值 static。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
 */
export class PositionCss extends CssProperty<Property.Position> {
  constructor() {
    super('position');
    initializePositionCss();
  }
}
let positionReady = false;
function initializePositionCss(): void {
  if (positionReady) return;
  Object.assign(PositionCss.prototype, positionKeywords());
  Object.freeze(PositionCss.prototype);
  positionReady = true;
}

function positionAnchorKeywords() {
  return {
    auto: 'position-anchor:auto;',
    inherit: 'position-anchor:inherit;',
    initial: 'position-anchor:initial;',
    revert: 'position-anchor:revert;',
    revertLayer: 'position-anchor:revert-layer;',
    unset: 'position-anchor:unset;',
  } as const;
}

type PositionAnchorCssKeywords = Readonly<ReturnType<typeof positionAnchorKeywords>>;
export interface PositionAnchorCss extends PositionAnchorCssKeywords {}
/** CSS 属性 position-anchor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
 */
export class PositionAnchorCss extends CssProperty<Property.PositionAnchor> {
  constructor() {
    super('position-anchor');
    initializePositionAnchorCss();
  }
}
let positionAnchorReady = false;
function initializePositionAnchorCss(): void {
  if (positionAnchorReady) return;
  Object.assign(PositionAnchorCss.prototype, positionAnchorKeywords());
  Object.freeze(PositionAnchorCss.prototype);
  positionAnchorReady = true;
}

function positionAreaKeywords() {
  return {
    blockEnd: 'position-area:block-end;',
    blockStart: 'position-area:block-start;',
    bottom: 'position-area:bottom;',
    center: 'position-area:center;',
    end: 'position-area:end;',
    inherit: 'position-area:inherit;',
    initial: 'position-area:initial;',
    inlineEnd: 'position-area:inline-end;',
    inlineStart: 'position-area:inline-start;',
    left: 'position-area:left;',
    none: 'position-area:none;',
    revert: 'position-area:revert;',
    revertLayer: 'position-area:revert-layer;',
    right: 'position-area:right;',
    selfBlockEnd: 'position-area:self-block-end;',
    selfBlockStart: 'position-area:self-block-start;',
    selfEnd: 'position-area:self-end;',
    selfInlineEnd: 'position-area:self-inline-end;',
    selfInlineStart: 'position-area:self-inline-start;',
    selfStart: 'position-area:self-start;',
    spanAll: 'position-area:span-all;',
    spanBlockEnd: 'position-area:span-block-end;',
    spanBlockStart: 'position-area:span-block-start;',
    spanBottom: 'position-area:span-bottom;',
    spanEnd: 'position-area:span-end;',
    spanInlineEnd: 'position-area:span-inline-end;',
    spanInlineStart: 'position-area:span-inline-start;',
    spanLeft: 'position-area:span-left;',
    spanRight: 'position-area:span-right;',
    spanSelfBlockEnd: 'position-area:span-self-block-end;',
    spanSelfBlockStart: 'position-area:span-self-block-start;',
    spanSelfEnd: 'position-area:span-self-end;',
    spanSelfInlineEnd: 'position-area:span-self-inline-end;',
    spanSelfInlineStart: 'position-area:span-self-inline-start;',
    spanSelfStart: 'position-area:span-self-start;',
    spanStart: 'position-area:span-start;',
    spanTop: 'position-area:span-top;',
    spanXEnd: 'position-area:span-x-end;',
    spanXSelfEnd: 'position-area:span-x-self-end;',
    spanXSelfStart: 'position-area:span-x-self-start;',
    spanXStart: 'position-area:span-x-start;',
    spanYEnd: 'position-area:span-y-end;',
    spanYSelfEnd: 'position-area:span-y-self-end;',
    spanYSelfStart: 'position-area:span-y-self-start;',
    spanYStart: 'position-area:span-y-start;',
    start: 'position-area:start;',
    top: 'position-area:top;',
    unset: 'position-area:unset;',
    xEnd: 'position-area:x-end;',
    xSelfEnd: 'position-area:x-self-end;',
    xSelfStart: 'position-area:x-self-start;',
    xStart: 'position-area:x-start;',
    yEnd: 'position-area:y-end;',
    ySelfEnd: 'position-area:y-self-end;',
    ySelfStart: 'position-area:y-self-start;',
    yStart: 'position-area:y-start;',
  } as const;
}

type PositionAreaCssKeywords = Readonly<ReturnType<typeof positionAreaKeywords>>;
export interface PositionAreaCss extends PositionAreaCssKeywords {}
/** CSS 属性 position-area；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
 */
export class PositionAreaCss extends CssProperty<Property.PositionArea> {
  constructor() {
    super('position-area');
    initializePositionAreaCss();
  }
}
let positionAreaReady = false;
function initializePositionAreaCss(): void {
  if (positionAreaReady) return;
  Object.assign(PositionAreaCss.prototype, positionAreaKeywords());
  Object.freeze(PositionAreaCss.prototype);
  positionAreaReady = true;
}

function positionTryKeywords() {
  return {
    blockEnd: 'position-try:block-end;',
    blockStart: 'position-try:block-start;',
    bottom: 'position-try:bottom;',
    center: 'position-try:center;',
    end: 'position-try:end;',
    flipBlock: 'position-try:flip-block;',
    flipInline: 'position-try:flip-inline;',
    flipStart: 'position-try:flip-start;',
    inherit: 'position-try:inherit;',
    initial: 'position-try:initial;',
    inlineEnd: 'position-try:inline-end;',
    inlineStart: 'position-try:inline-start;',
    left: 'position-try:left;',
    none: 'position-try:none;',
    revert: 'position-try:revert;',
    revertLayer: 'position-try:revert-layer;',
    right: 'position-try:right;',
    selfBlockEnd: 'position-try:self-block-end;',
    selfBlockStart: 'position-try:self-block-start;',
    selfEnd: 'position-try:self-end;',
    selfInlineEnd: 'position-try:self-inline-end;',
    selfInlineStart: 'position-try:self-inline-start;',
    selfStart: 'position-try:self-start;',
    spanAll: 'position-try:span-all;',
    spanBlockEnd: 'position-try:span-block-end;',
    spanBlockStart: 'position-try:span-block-start;',
    spanBottom: 'position-try:span-bottom;',
    spanEnd: 'position-try:span-end;',
    spanInlineEnd: 'position-try:span-inline-end;',
    spanInlineStart: 'position-try:span-inline-start;',
    spanLeft: 'position-try:span-left;',
    spanRight: 'position-try:span-right;',
    spanSelfBlockEnd: 'position-try:span-self-block-end;',
    spanSelfBlockStart: 'position-try:span-self-block-start;',
    spanSelfEnd: 'position-try:span-self-end;',
    spanSelfInlineEnd: 'position-try:span-self-inline-end;',
    spanSelfInlineStart: 'position-try:span-self-inline-start;',
    spanSelfStart: 'position-try:span-self-start;',
    spanStart: 'position-try:span-start;',
    spanTop: 'position-try:span-top;',
    spanXEnd: 'position-try:span-x-end;',
    spanXSelfEnd: 'position-try:span-x-self-end;',
    spanXSelfStart: 'position-try:span-x-self-start;',
    spanXStart: 'position-try:span-x-start;',
    spanYEnd: 'position-try:span-y-end;',
    spanYSelfEnd: 'position-try:span-y-self-end;',
    spanYSelfStart: 'position-try:span-y-self-start;',
    spanYStart: 'position-try:span-y-start;',
    start: 'position-try:start;',
    top: 'position-try:top;',
    unset: 'position-try:unset;',
    xEnd: 'position-try:x-end;',
    xSelfEnd: 'position-try:x-self-end;',
    xSelfStart: 'position-try:x-self-start;',
    xStart: 'position-try:x-start;',
    yEnd: 'position-try:y-end;',
    ySelfEnd: 'position-try:y-self-end;',
    ySelfStart: 'position-try:y-self-start;',
    yStart: 'position-try:y-start;',
  } as const;
}

type PositionTryCssKeywords = Readonly<ReturnType<typeof positionTryKeywords>>;
export interface PositionTryCss extends PositionTryCssKeywords {}
/** CSS 属性 position-try。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
 */
export class PositionTryCss extends CssProperty<Property.PositionTry> {
  constructor() {
    super('position-try');
    initializePositionTryCss();
  }
}
let positionTryReady = false;
function initializePositionTryCss(): void {
  if (positionTryReady) return;
  Object.assign(PositionTryCss.prototype, positionTryKeywords());
  Object.freeze(PositionTryCss.prototype);
  positionTryReady = true;
}

function positionTryFallbacksKeywords() {
  return {
    blockEnd: 'position-try-fallbacks:block-end;',
    blockStart: 'position-try-fallbacks:block-start;',
    bottom: 'position-try-fallbacks:bottom;',
    center: 'position-try-fallbacks:center;',
    end: 'position-try-fallbacks:end;',
    flipBlock: 'position-try-fallbacks:flip-block;',
    flipInline: 'position-try-fallbacks:flip-inline;',
    flipStart: 'position-try-fallbacks:flip-start;',
    inherit: 'position-try-fallbacks:inherit;',
    initial: 'position-try-fallbacks:initial;',
    inlineEnd: 'position-try-fallbacks:inline-end;',
    inlineStart: 'position-try-fallbacks:inline-start;',
    left: 'position-try-fallbacks:left;',
    none: 'position-try-fallbacks:none;',
    revert: 'position-try-fallbacks:revert;',
    revertLayer: 'position-try-fallbacks:revert-layer;',
    right: 'position-try-fallbacks:right;',
    selfBlockEnd: 'position-try-fallbacks:self-block-end;',
    selfBlockStart: 'position-try-fallbacks:self-block-start;',
    selfEnd: 'position-try-fallbacks:self-end;',
    selfInlineEnd: 'position-try-fallbacks:self-inline-end;',
    selfInlineStart: 'position-try-fallbacks:self-inline-start;',
    selfStart: 'position-try-fallbacks:self-start;',
    spanAll: 'position-try-fallbacks:span-all;',
    spanBlockEnd: 'position-try-fallbacks:span-block-end;',
    spanBlockStart: 'position-try-fallbacks:span-block-start;',
    spanBottom: 'position-try-fallbacks:span-bottom;',
    spanEnd: 'position-try-fallbacks:span-end;',
    spanInlineEnd: 'position-try-fallbacks:span-inline-end;',
    spanInlineStart: 'position-try-fallbacks:span-inline-start;',
    spanLeft: 'position-try-fallbacks:span-left;',
    spanRight: 'position-try-fallbacks:span-right;',
    spanSelfBlockEnd: 'position-try-fallbacks:span-self-block-end;',
    spanSelfBlockStart: 'position-try-fallbacks:span-self-block-start;',
    spanSelfEnd: 'position-try-fallbacks:span-self-end;',
    spanSelfInlineEnd: 'position-try-fallbacks:span-self-inline-end;',
    spanSelfInlineStart: 'position-try-fallbacks:span-self-inline-start;',
    spanSelfStart: 'position-try-fallbacks:span-self-start;',
    spanStart: 'position-try-fallbacks:span-start;',
    spanTop: 'position-try-fallbacks:span-top;',
    spanXEnd: 'position-try-fallbacks:span-x-end;',
    spanXSelfEnd: 'position-try-fallbacks:span-x-self-end;',
    spanXSelfStart: 'position-try-fallbacks:span-x-self-start;',
    spanXStart: 'position-try-fallbacks:span-x-start;',
    spanYEnd: 'position-try-fallbacks:span-y-end;',
    spanYSelfEnd: 'position-try-fallbacks:span-y-self-end;',
    spanYSelfStart: 'position-try-fallbacks:span-y-self-start;',
    spanYStart: 'position-try-fallbacks:span-y-start;',
    start: 'position-try-fallbacks:start;',
    top: 'position-try-fallbacks:top;',
    unset: 'position-try-fallbacks:unset;',
    xEnd: 'position-try-fallbacks:x-end;',
    xSelfEnd: 'position-try-fallbacks:x-self-end;',
    xSelfStart: 'position-try-fallbacks:x-self-start;',
    xStart: 'position-try-fallbacks:x-start;',
    yEnd: 'position-try-fallbacks:y-end;',
    ySelfEnd: 'position-try-fallbacks:y-self-end;',
    ySelfStart: 'position-try-fallbacks:y-self-start;',
    yStart: 'position-try-fallbacks:y-start;',
  } as const;
}

type PositionTryFallbacksCssKeywords = Readonly<ReturnType<typeof positionTryFallbacksKeywords>>;
export interface PositionTryFallbacksCss extends PositionTryFallbacksCssKeywords {}
/** CSS 属性 position-try-fallbacks；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
 */
export class PositionTryFallbacksCss extends CssProperty<Property.PositionTryFallbacks> {
  constructor() {
    super('position-try-fallbacks');
    initializePositionTryFallbacksCss();
  }
}
let positionTryFallbacksReady = false;
function initializePositionTryFallbacksCss(): void {
  if (positionTryFallbacksReady) return;
  Object.assign(PositionTryFallbacksCss.prototype, positionTryFallbacksKeywords());
  Object.freeze(PositionTryFallbacksCss.prototype);
  positionTryFallbacksReady = true;
}

function positionTryOrderKeywords() {
  return {
    inherit: 'position-try-order:inherit;',
    initial: 'position-try-order:initial;',
    mostBlockSize: 'position-try-order:most-block-size;',
    mostHeight: 'position-try-order:most-height;',
    mostInlineSize: 'position-try-order:most-inline-size;',
    mostWidth: 'position-try-order:most-width;',
    normal: 'position-try-order:normal;',
    revert: 'position-try-order:revert;',
    revertLayer: 'position-try-order:revert-layer;',
    unset: 'position-try-order:unset;',
  } as const;
}

type PositionTryOrderCssKeywords = Readonly<ReturnType<typeof positionTryOrderKeywords>>;
export interface PositionTryOrderCss extends PositionTryOrderCssKeywords {}
/** CSS 属性 position-try-order；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
 */
export class PositionTryOrderCss extends CssProperty<Property.PositionTryOrder> {
  constructor() {
    super('position-try-order');
    initializePositionTryOrderCss();
  }
}
let positionTryOrderReady = false;
function initializePositionTryOrderCss(): void {
  if (positionTryOrderReady) return;
  Object.assign(PositionTryOrderCss.prototype, positionTryOrderKeywords());
  Object.freeze(PositionTryOrderCss.prototype);
  positionTryOrderReady = true;
}

function positionVisibilityKeywords() {
  return {
    always: 'position-visibility:always;',
    anchorsValid: 'position-visibility:anchors-valid;',
    anchorsVisible: 'position-visibility:anchors-visible;',
    inherit: 'position-visibility:inherit;',
    initial: 'position-visibility:initial;',
    noOverflow: 'position-visibility:no-overflow;',
    revert: 'position-visibility:revert;',
    revertLayer: 'position-visibility:revert-layer;',
    unset: 'position-visibility:unset;',
  } as const;
}

type PositionVisibilityCssKeywords = Readonly<ReturnType<typeof positionVisibilityKeywords>>;
export interface PositionVisibilityCss extends PositionVisibilityCssKeywords {}
/** CSS 属性 position-visibility；初始值 anchors-visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
 */
export class PositionVisibilityCss extends CssProperty<Property.PositionVisibility> {
  constructor() {
    super('position-visibility');
    initializePositionVisibilityCss();
  }
}
let positionVisibilityReady = false;
function initializePositionVisibilityCss(): void {
  if (positionVisibilityReady) return;
  Object.assign(PositionVisibilityCss.prototype, positionVisibilityKeywords());
  Object.freeze(PositionVisibilityCss.prototype);
  positionVisibilityReady = true;
}

function printColorAdjustKeywords() {
  return {
    economy: 'print-color-adjust:economy;',
    exact: 'print-color-adjust:exact;',
    inherit: 'print-color-adjust:inherit;',
    initial: 'print-color-adjust:initial;',
    revert: 'print-color-adjust:revert;',
    revertLayer: 'print-color-adjust:revert-layer;',
    unset: 'print-color-adjust:unset;',
  } as const;
}

type PrintColorAdjustCssKeywords = Readonly<ReturnType<typeof printColorAdjustKeywords>>;
export interface PrintColorAdjustCss extends PrintColorAdjustCssKeywords {}
/** CSS 属性 print-color-adjust；初始值 economy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class PrintColorAdjustCss extends CssProperty<Property.PrintColorAdjust> {
  constructor() {
    super('print-color-adjust');
    initializePrintColorAdjustCss();
  }
}
let printColorAdjustReady = false;
function initializePrintColorAdjustCss(): void {
  if (printColorAdjustReady) return;
  Object.assign(PrintColorAdjustCss.prototype, printColorAdjustKeywords());
  Object.freeze(PrintColorAdjustCss.prototype);
  printColorAdjustReady = true;
}

function quotesKeywords() {
  return {
    auto: 'quotes:auto;',
    inherit: 'quotes:inherit;',
    initial: 'quotes:initial;',
    none: 'quotes:none;',
    revert: 'quotes:revert;',
    revertLayer: 'quotes:revert-layer;',
    unset: 'quotes:unset;',
  } as const;
}

type QuotesCssKeywords = Readonly<ReturnType<typeof quotesKeywords>>;
export interface QuotesCss extends QuotesCssKeywords {}
/** CSS 属性 quotes。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
 */
export class QuotesCss extends CssProperty<Property.Quotes> {
  constructor() {
    super('quotes');
    initializeQuotesCss();
  }
}
let quotesReady = false;
function initializeQuotesCss(): void {
  if (quotesReady) return;
  Object.assign(QuotesCss.prototype, quotesKeywords());
  Object.freeze(QuotesCss.prototype);
  quotesReady = true;
}

function rKeywords() {
  return {
    inherit: 'r:inherit;',
    initial: 'r:initial;',
    revert: 'r:revert;',
    revertLayer: 'r:revert-layer;',
    unset: 'r:unset;',
  } as const;
}

type RCssKeywords = Readonly<ReturnType<typeof rKeywords>>;
export interface RCss extends RCssKeywords {}
/** CSS 属性 r；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
 */
export class RCss extends LengthCssProperty<Property.R> {
  constructor() {
    super('r');
    initializeRCss();
  }
}
let rReady = false;
function initializeRCss(): void {
  if (rReady) return;
  Object.assign(RCss.prototype, rKeywords());
  Object.freeze(RCss.prototype);
  rReady = true;
}

function resizeKeywords() {
  return {
    block: 'resize:block;',
    both: 'resize:both;',
    horizontal: 'resize:horizontal;',
    inherit: 'resize:inherit;',
    initial: 'resize:initial;',
    inline: 'resize:inline;',
    none: 'resize:none;',
    revert: 'resize:revert;',
    revertLayer: 'resize:revert-layer;',
    unset: 'resize:unset;',
    vertical: 'resize:vertical;',
  } as const;
}

type ResizeCssKeywords = Readonly<ReturnType<typeof resizeKeywords>>;
export interface ResizeCss extends ResizeCssKeywords {}
/** CSS 属性 resize；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
 */
export class ResizeCss extends CssProperty<Property.Resize> {
  constructor() {
    super('resize');
    initializeResizeCss();
  }
}
let resizeReady = false;
function initializeResizeCss(): void {
  if (resizeReady) return;
  Object.assign(ResizeCss.prototype, resizeKeywords());
  Object.freeze(ResizeCss.prototype);
  resizeReady = true;
}

function rightKeywords() {
  return {
    auto: 'right:auto;',
    inherit: 'right:inherit;',
    initial: 'right:initial;',
    revert: 'right:revert;',
    revertLayer: 'right:revert-layer;',
    unset: 'right:unset;',
  } as const;
}

type RightCssKeywords = Readonly<ReturnType<typeof rightKeywords>>;
export interface RightCss extends RightCssKeywords {}
/** CSS 属性 right；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
 */
export class RightCss extends LengthCssProperty<Property.Right> {
  constructor() {
    super('right');
    initializeRightCss();
  }
}
let rightReady = false;
function initializeRightCss(): void {
  if (rightReady) return;
  Object.assign(RightCss.prototype, rightKeywords());
  Object.freeze(RightCss.prototype);
  rightReady = true;
}

function rotateKeywords() {
  return {
    inherit: 'rotate:inherit;',
    initial: 'rotate:initial;',
    none: 'rotate:none;',
    revert: 'rotate:revert;',
    revertLayer: 'rotate:revert-layer;',
    unset: 'rotate:unset;',
  } as const;
}

type RotateCssKeywords = Readonly<ReturnType<typeof rotateKeywords>>;
export interface RotateCss extends RotateCssKeywords {}
/** CSS 属性 rotate；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
 */
export class RotateCss extends CssProperty<Property.Rotate> {
  constructor() {
    super('rotate');
    initializeRotateCss();
  }
}
let rotateReady = false;
function initializeRotateCss(): void {
  if (rotateReady) return;
  Object.assign(RotateCss.prototype, rotateKeywords());
  Object.freeze(RotateCss.prototype);
  rotateReady = true;
}

function rowGapKeywords() {
  return {
    inherit: 'row-gap:inherit;',
    initial: 'row-gap:initial;',
    normal: 'row-gap:normal;',
    revert: 'row-gap:revert;',
    revertLayer: 'row-gap:revert-layer;',
    unset: 'row-gap:unset;',
  } as const;
}

type RowGapCssKeywords = Readonly<ReturnType<typeof rowGapKeywords>>;
export interface RowGapCss extends RowGapCssKeywords {}
/** CSS 属性 row-gap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
 */
export class RowGapCss extends LengthCssProperty<Property.RowGap> {
  constructor() {
    super('row-gap');
    initializeRowGapCss();
  }
}
let rowGapReady = false;
function initializeRowGapCss(): void {
  if (rowGapReady) return;
  Object.assign(RowGapCss.prototype, rowGapKeywords());
  Object.freeze(RowGapCss.prototype);
  rowGapReady = true;
}

function rubyAlignKeywords() {
  return {
    center: 'ruby-align:center;',
    inherit: 'ruby-align:inherit;',
    initial: 'ruby-align:initial;',
    revert: 'ruby-align:revert;',
    revertLayer: 'ruby-align:revert-layer;',
    spaceAround: 'ruby-align:space-around;',
    spaceBetween: 'ruby-align:space-between;',
    start: 'ruby-align:start;',
    unset: 'ruby-align:unset;',
  } as const;
}

type RubyAlignCssKeywords = Readonly<ReturnType<typeof rubyAlignKeywords>>;
export interface RubyAlignCss extends RubyAlignCssKeywords {}
/** CSS 属性 ruby-align；初始值 space-around。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
 */
export class RubyAlignCss extends CssProperty<Property.RubyAlign> {
  constructor() {
    super('ruby-align');
    initializeRubyAlignCss();
  }
}
let rubyAlignReady = false;
function initializeRubyAlignCss(): void {
  if (rubyAlignReady) return;
  Object.assign(RubyAlignCss.prototype, rubyAlignKeywords());
  Object.freeze(RubyAlignCss.prototype);
  rubyAlignReady = true;
}

function rubyMergeKeywords() {
  return {
    auto: 'ruby-merge:auto;',
    collapse: 'ruby-merge:collapse;',
    inherit: 'ruby-merge:inherit;',
    initial: 'ruby-merge:initial;',
    revert: 'ruby-merge:revert;',
    revertLayer: 'ruby-merge:revert-layer;',
    separate: 'ruby-merge:separate;',
    unset: 'ruby-merge:unset;',
  } as const;
}

type RubyMergeCssKeywords = Readonly<ReturnType<typeof rubyMergeKeywords>>;
export interface RubyMergeCss extends RubyMergeCssKeywords {}
/** CSS 属性 ruby-merge；初始值 separate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
 */
export class RubyMergeCss extends CssProperty<Property.RubyMerge> {
  constructor() {
    super('ruby-merge');
    initializeRubyMergeCss();
  }
}
let rubyMergeReady = false;
function initializeRubyMergeCss(): void {
  if (rubyMergeReady) return;
  Object.assign(RubyMergeCss.prototype, rubyMergeKeywords());
  Object.freeze(RubyMergeCss.prototype);
  rubyMergeReady = true;
}

function rubyOverhangKeywords() {
  return {
    auto: 'ruby-overhang:auto;',
    inherit: 'ruby-overhang:inherit;',
    initial: 'ruby-overhang:initial;',
    none: 'ruby-overhang:none;',
    revert: 'ruby-overhang:revert;',
    revertLayer: 'ruby-overhang:revert-layer;',
    unset: 'ruby-overhang:unset;',
  } as const;
}

type RubyOverhangCssKeywords = Readonly<ReturnType<typeof rubyOverhangKeywords>>;
export interface RubyOverhangCss extends RubyOverhangCssKeywords {}
/** CSS 属性 ruby-overhang；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
 */
export class RubyOverhangCss extends CssProperty<Property.RubyOverhang> {
  constructor() {
    super('ruby-overhang');
    initializeRubyOverhangCss();
  }
}
let rubyOverhangReady = false;
function initializeRubyOverhangCss(): void {
  if (rubyOverhangReady) return;
  Object.assign(RubyOverhangCss.prototype, rubyOverhangKeywords());
  Object.freeze(RubyOverhangCss.prototype);
  rubyOverhangReady = true;
}

function rubyPositionKeywords() {
  return {
    alternate: 'ruby-position:alternate;',
    inherit: 'ruby-position:inherit;',
    initial: 'ruby-position:initial;',
    interCharacter: 'ruby-position:inter-character;',
    over: 'ruby-position:over;',
    revert: 'ruby-position:revert;',
    revertLayer: 'ruby-position:revert-layer;',
    under: 'ruby-position:under;',
    unset: 'ruby-position:unset;',
  } as const;
}

type RubyPositionCssKeywords = Readonly<ReturnType<typeof rubyPositionKeywords>>;
export interface RubyPositionCss extends RubyPositionCssKeywords {}
/** CSS 属性 ruby-position；初始值 alternate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
 */
export class RubyPositionCss extends CssProperty<Property.RubyPosition> {
  constructor() {
    super('ruby-position');
    initializeRubyPositionCss();
  }
}
let rubyPositionReady = false;
function initializeRubyPositionCss(): void {
  if (rubyPositionReady) return;
  Object.assign(RubyPositionCss.prototype, rubyPositionKeywords());
  Object.freeze(RubyPositionCss.prototype);
  rubyPositionReady = true;
}

function rxKeywords() {
  return {
    inherit: 'rx:inherit;',
    initial: 'rx:initial;',
    revert: 'rx:revert;',
    revertLayer: 'rx:revert-layer;',
    unset: 'rx:unset;',
  } as const;
}

type RxCssKeywords = Readonly<ReturnType<typeof rxKeywords>>;
export interface RxCss extends RxCssKeywords {}
/** CSS 属性 rx；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
 */
export class RxCss extends LengthCssProperty<Property.Rx> {
  constructor() {
    super('rx');
    initializeRxCss();
  }
}
let rxReady = false;
function initializeRxCss(): void {
  if (rxReady) return;
  Object.assign(RxCss.prototype, rxKeywords());
  Object.freeze(RxCss.prototype);
  rxReady = true;
}

function ryKeywords() {
  return {
    inherit: 'ry:inherit;',
    initial: 'ry:initial;',
    revert: 'ry:revert;',
    revertLayer: 'ry:revert-layer;',
    unset: 'ry:unset;',
  } as const;
}

type RyCssKeywords = Readonly<ReturnType<typeof ryKeywords>>;
export interface RyCss extends RyCssKeywords {}
/** CSS 属性 ry；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
 */
export class RyCss extends LengthCssProperty<Property.Ry> {
  constructor() {
    super('ry');
    initializeRyCss();
  }
}
let ryReady = false;
function initializeRyCss(): void {
  if (ryReady) return;
  Object.assign(RyCss.prototype, ryKeywords());
  Object.freeze(RyCss.prototype);
  ryReady = true;
}

function scaleKeywords() {
  return {
    inherit: 'scale:inherit;',
    initial: 'scale:initial;',
    none: 'scale:none;',
    revert: 'scale:revert;',
    revertLayer: 'scale:revert-layer;',
    unset: 'scale:unset;',
  } as const;
}

type ScaleCssKeywords = Readonly<ReturnType<typeof scaleKeywords>>;
export interface ScaleCss extends ScaleCssKeywords {}
/** CSS 属性 scale；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
 */
export class ScaleCss extends CssProperty<Property.Scale> {
  constructor() {
    super('scale');
    initializeScaleCss();
  }
}
let scaleReady = false;
function initializeScaleCss(): void {
  if (scaleReady) return;
  Object.assign(ScaleCss.prototype, scaleKeywords());
  Object.freeze(ScaleCss.prototype);
  scaleReady = true;
}

function scrollBehaviorKeywords() {
  return {
    auto: 'scroll-behavior:auto;',
    inherit: 'scroll-behavior:inherit;',
    initial: 'scroll-behavior:initial;',
    revert: 'scroll-behavior:revert;',
    revertLayer: 'scroll-behavior:revert-layer;',
    smooth: 'scroll-behavior:smooth;',
    unset: 'scroll-behavior:unset;',
  } as const;
}

type ScrollBehaviorCssKeywords = Readonly<ReturnType<typeof scrollBehaviorKeywords>>;
export interface ScrollBehaviorCss extends ScrollBehaviorCssKeywords {}
/** CSS 属性 scroll-behavior；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
 */
export class ScrollBehaviorCss extends CssProperty<Property.ScrollBehavior> {
  constructor() {
    super('scroll-behavior');
    initializeScrollBehaviorCss();
  }
}
let scrollBehaviorReady = false;
function initializeScrollBehaviorCss(): void {
  if (scrollBehaviorReady) return;
  Object.assign(ScrollBehaviorCss.prototype, scrollBehaviorKeywords());
  Object.freeze(ScrollBehaviorCss.prototype);
  scrollBehaviorReady = true;
}

function scrollInitialTargetKeywords() {
  return {
    inherit: 'scroll-initial-target:inherit;',
    initial: 'scroll-initial-target:initial;',
    nearest: 'scroll-initial-target:nearest;',
    none: 'scroll-initial-target:none;',
    revert: 'scroll-initial-target:revert;',
    revertLayer: 'scroll-initial-target:revert-layer;',
    unset: 'scroll-initial-target:unset;',
  } as const;
}

type ScrollInitialTargetCssKeywords = Readonly<ReturnType<typeof scrollInitialTargetKeywords>>;
export interface ScrollInitialTargetCss extends ScrollInitialTargetCssKeywords {}
/** CSS 属性 scroll-initial-target；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
 */
export class ScrollInitialTargetCss extends CssProperty<Property.ScrollInitialTarget> {
  constructor() {
    super('scroll-initial-target');
    initializeScrollInitialTargetCss();
  }
}
let scrollInitialTargetReady = false;
function initializeScrollInitialTargetCss(): void {
  if (scrollInitialTargetReady) return;
  Object.assign(ScrollInitialTargetCss.prototype, scrollInitialTargetKeywords());
  Object.freeze(ScrollInitialTargetCss.prototype);
  scrollInitialTargetReady = true;
}

function scrollMarginKeywords() {
  return {
    inherit: 'scroll-margin:inherit;',
    initial: 'scroll-margin:initial;',
    revert: 'scroll-margin:revert;',
    revertLayer: 'scroll-margin:revert-layer;',
    unset: 'scroll-margin:unset;',
  } as const;
}

type ScrollMarginCssKeywords = Readonly<ReturnType<typeof scrollMarginKeywords>>;
export interface ScrollMarginCss extends ScrollMarginCssKeywords {}
/** CSS 属性 scroll-margin。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
 */
export class ScrollMarginCss extends LengthCssProperty<Property.ScrollMargin> {
  constructor() {
    super('scroll-margin');
    initializeScrollMarginCss();
  }
}
let scrollMarginReady = false;
function initializeScrollMarginCss(): void {
  if (scrollMarginReady) return;
  Object.assign(ScrollMarginCss.prototype, scrollMarginKeywords());
  Object.freeze(ScrollMarginCss.prototype);
  scrollMarginReady = true;
}

function scrollMarginBlockKeywords() {
  return {
    inherit: 'scroll-margin-block:inherit;',
    initial: 'scroll-margin-block:initial;',
    revert: 'scroll-margin-block:revert;',
    revertLayer: 'scroll-margin-block:revert-layer;',
    unset: 'scroll-margin-block:unset;',
  } as const;
}

type ScrollMarginBlockCssKeywords = Readonly<ReturnType<typeof scrollMarginBlockKeywords>>;
export interface ScrollMarginBlockCss extends ScrollMarginBlockCssKeywords {}
/** CSS 属性 scroll-margin-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
 */
export class ScrollMarginBlockCss extends LengthCssProperty<Property.ScrollMarginBlock> {
  constructor() {
    super('scroll-margin-block');
    initializeScrollMarginBlockCss();
  }
}
let scrollMarginBlockReady = false;
function initializeScrollMarginBlockCss(): void {
  if (scrollMarginBlockReady) return;
  Object.assign(ScrollMarginBlockCss.prototype, scrollMarginBlockKeywords());
  Object.freeze(ScrollMarginBlockCss.prototype);
  scrollMarginBlockReady = true;
}

function scrollMarginBlockEndKeywords() {
  return {
    inherit: 'scroll-margin-block-end:inherit;',
    initial: 'scroll-margin-block-end:initial;',
    revert: 'scroll-margin-block-end:revert;',
    revertLayer: 'scroll-margin-block-end:revert-layer;',
    unset: 'scroll-margin-block-end:unset;',
  } as const;
}

type ScrollMarginBlockEndCssKeywords = Readonly<ReturnType<typeof scrollMarginBlockEndKeywords>>;
export interface ScrollMarginBlockEndCss extends ScrollMarginBlockEndCssKeywords {}
/** CSS 属性 scroll-margin-block-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
 */
export class ScrollMarginBlockEndCss extends LengthCssProperty<Property.ScrollMarginBlockEnd> {
  constructor() {
    super('scroll-margin-block-end');
    initializeScrollMarginBlockEndCss();
  }
}
let scrollMarginBlockEndReady = false;
function initializeScrollMarginBlockEndCss(): void {
  if (scrollMarginBlockEndReady) return;
  Object.assign(ScrollMarginBlockEndCss.prototype, scrollMarginBlockEndKeywords());
  Object.freeze(ScrollMarginBlockEndCss.prototype);
  scrollMarginBlockEndReady = true;
}

function scrollMarginBlockStartKeywords() {
  return {
    inherit: 'scroll-margin-block-start:inherit;',
    initial: 'scroll-margin-block-start:initial;',
    revert: 'scroll-margin-block-start:revert;',
    revertLayer: 'scroll-margin-block-start:revert-layer;',
    unset: 'scroll-margin-block-start:unset;',
  } as const;
}

type ScrollMarginBlockStartCssKeywords = Readonly<
  ReturnType<typeof scrollMarginBlockStartKeywords>
>;
export interface ScrollMarginBlockStartCss extends ScrollMarginBlockStartCssKeywords {}
/** CSS 属性 scroll-margin-block-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
 */
export class ScrollMarginBlockStartCss extends LengthCssProperty<Property.ScrollMarginBlockStart> {
  constructor() {
    super('scroll-margin-block-start');
    initializeScrollMarginBlockStartCss();
  }
}
let scrollMarginBlockStartReady = false;
function initializeScrollMarginBlockStartCss(): void {
  if (scrollMarginBlockStartReady) return;
  Object.assign(ScrollMarginBlockStartCss.prototype, scrollMarginBlockStartKeywords());
  Object.freeze(ScrollMarginBlockStartCss.prototype);
  scrollMarginBlockStartReady = true;
}

function scrollMarginBottomKeywords() {
  return {
    inherit: 'scroll-margin-bottom:inherit;',
    initial: 'scroll-margin-bottom:initial;',
    revert: 'scroll-margin-bottom:revert;',
    revertLayer: 'scroll-margin-bottom:revert-layer;',
    unset: 'scroll-margin-bottom:unset;',
  } as const;
}

type ScrollMarginBottomCssKeywords = Readonly<ReturnType<typeof scrollMarginBottomKeywords>>;
export interface ScrollMarginBottomCss extends ScrollMarginBottomCssKeywords {}
/** CSS 属性 scroll-margin-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
 */
export class ScrollMarginBottomCss extends LengthCssProperty<Property.ScrollMarginBottom> {
  constructor() {
    super('scroll-margin-bottom');
    initializeScrollMarginBottomCss();
  }
}
let scrollMarginBottomReady = false;
function initializeScrollMarginBottomCss(): void {
  if (scrollMarginBottomReady) return;
  Object.assign(ScrollMarginBottomCss.prototype, scrollMarginBottomKeywords());
  Object.freeze(ScrollMarginBottomCss.prototype);
  scrollMarginBottomReady = true;
}

function scrollMarginInlineKeywords() {
  return {
    inherit: 'scroll-margin-inline:inherit;',
    initial: 'scroll-margin-inline:initial;',
    revert: 'scroll-margin-inline:revert;',
    revertLayer: 'scroll-margin-inline:revert-layer;',
    unset: 'scroll-margin-inline:unset;',
  } as const;
}

type ScrollMarginInlineCssKeywords = Readonly<ReturnType<typeof scrollMarginInlineKeywords>>;
export interface ScrollMarginInlineCss extends ScrollMarginInlineCssKeywords {}
/** CSS 属性 scroll-margin-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
 */
export class ScrollMarginInlineCss extends LengthCssProperty<Property.ScrollMarginInline> {
  constructor() {
    super('scroll-margin-inline');
    initializeScrollMarginInlineCss();
  }
}
let scrollMarginInlineReady = false;
function initializeScrollMarginInlineCss(): void {
  if (scrollMarginInlineReady) return;
  Object.assign(ScrollMarginInlineCss.prototype, scrollMarginInlineKeywords());
  Object.freeze(ScrollMarginInlineCss.prototype);
  scrollMarginInlineReady = true;
}

function scrollMarginInlineEndKeywords() {
  return {
    inherit: 'scroll-margin-inline-end:inherit;',
    initial: 'scroll-margin-inline-end:initial;',
    revert: 'scroll-margin-inline-end:revert;',
    revertLayer: 'scroll-margin-inline-end:revert-layer;',
    unset: 'scroll-margin-inline-end:unset;',
  } as const;
}

type ScrollMarginInlineEndCssKeywords = Readonly<ReturnType<typeof scrollMarginInlineEndKeywords>>;
export interface ScrollMarginInlineEndCss extends ScrollMarginInlineEndCssKeywords {}
/** CSS 属性 scroll-margin-inline-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
 */
export class ScrollMarginInlineEndCss extends LengthCssProperty<Property.ScrollMarginInlineEnd> {
  constructor() {
    super('scroll-margin-inline-end');
    initializeScrollMarginInlineEndCss();
  }
}
let scrollMarginInlineEndReady = false;
function initializeScrollMarginInlineEndCss(): void {
  if (scrollMarginInlineEndReady) return;
  Object.assign(ScrollMarginInlineEndCss.prototype, scrollMarginInlineEndKeywords());
  Object.freeze(ScrollMarginInlineEndCss.prototype);
  scrollMarginInlineEndReady = true;
}

function scrollMarginInlineStartKeywords() {
  return {
    inherit: 'scroll-margin-inline-start:inherit;',
    initial: 'scroll-margin-inline-start:initial;',
    revert: 'scroll-margin-inline-start:revert;',
    revertLayer: 'scroll-margin-inline-start:revert-layer;',
    unset: 'scroll-margin-inline-start:unset;',
  } as const;
}

type ScrollMarginInlineStartCssKeywords = Readonly<
  ReturnType<typeof scrollMarginInlineStartKeywords>
>;
export interface ScrollMarginInlineStartCss extends ScrollMarginInlineStartCssKeywords {}
/** CSS 属性 scroll-margin-inline-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
 */
export class ScrollMarginInlineStartCss extends LengthCssProperty<Property.ScrollMarginInlineStart> {
  constructor() {
    super('scroll-margin-inline-start');
    initializeScrollMarginInlineStartCss();
  }
}
let scrollMarginInlineStartReady = false;
function initializeScrollMarginInlineStartCss(): void {
  if (scrollMarginInlineStartReady) return;
  Object.assign(ScrollMarginInlineStartCss.prototype, scrollMarginInlineStartKeywords());
  Object.freeze(ScrollMarginInlineStartCss.prototype);
  scrollMarginInlineStartReady = true;
}

function scrollMarginLeftKeywords() {
  return {
    inherit: 'scroll-margin-left:inherit;',
    initial: 'scroll-margin-left:initial;',
    revert: 'scroll-margin-left:revert;',
    revertLayer: 'scroll-margin-left:revert-layer;',
    unset: 'scroll-margin-left:unset;',
  } as const;
}

type ScrollMarginLeftCssKeywords = Readonly<ReturnType<typeof scrollMarginLeftKeywords>>;
export interface ScrollMarginLeftCss extends ScrollMarginLeftCssKeywords {}
/** CSS 属性 scroll-margin-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
 */
export class ScrollMarginLeftCss extends LengthCssProperty<Property.ScrollMarginLeft> {
  constructor() {
    super('scroll-margin-left');
    initializeScrollMarginLeftCss();
  }
}
let scrollMarginLeftReady = false;
function initializeScrollMarginLeftCss(): void {
  if (scrollMarginLeftReady) return;
  Object.assign(ScrollMarginLeftCss.prototype, scrollMarginLeftKeywords());
  Object.freeze(ScrollMarginLeftCss.prototype);
  scrollMarginLeftReady = true;
}

function scrollMarginRightKeywords() {
  return {
    inherit: 'scroll-margin-right:inherit;',
    initial: 'scroll-margin-right:initial;',
    revert: 'scroll-margin-right:revert;',
    revertLayer: 'scroll-margin-right:revert-layer;',
    unset: 'scroll-margin-right:unset;',
  } as const;
}

type ScrollMarginRightCssKeywords = Readonly<ReturnType<typeof scrollMarginRightKeywords>>;
export interface ScrollMarginRightCss extends ScrollMarginRightCssKeywords {}
/** CSS 属性 scroll-margin-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
 */
export class ScrollMarginRightCss extends LengthCssProperty<Property.ScrollMarginRight> {
  constructor() {
    super('scroll-margin-right');
    initializeScrollMarginRightCss();
  }
}
let scrollMarginRightReady = false;
function initializeScrollMarginRightCss(): void {
  if (scrollMarginRightReady) return;
  Object.assign(ScrollMarginRightCss.prototype, scrollMarginRightKeywords());
  Object.freeze(ScrollMarginRightCss.prototype);
  scrollMarginRightReady = true;
}

function scrollMarginTopKeywords() {
  return {
    inherit: 'scroll-margin-top:inherit;',
    initial: 'scroll-margin-top:initial;',
    revert: 'scroll-margin-top:revert;',
    revertLayer: 'scroll-margin-top:revert-layer;',
    unset: 'scroll-margin-top:unset;',
  } as const;
}

type ScrollMarginTopCssKeywords = Readonly<ReturnType<typeof scrollMarginTopKeywords>>;
export interface ScrollMarginTopCss extends ScrollMarginTopCssKeywords {}
/** CSS 属性 scroll-margin-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
 */
export class ScrollMarginTopCss extends LengthCssProperty<Property.ScrollMarginTop> {
  constructor() {
    super('scroll-margin-top');
    initializeScrollMarginTopCss();
  }
}
let scrollMarginTopReady = false;
function initializeScrollMarginTopCss(): void {
  if (scrollMarginTopReady) return;
  Object.assign(ScrollMarginTopCss.prototype, scrollMarginTopKeywords());
  Object.freeze(ScrollMarginTopCss.prototype);
  scrollMarginTopReady = true;
}

function scrollPaddingKeywords() {
  return {
    auto: 'scroll-padding:auto;',
    inherit: 'scroll-padding:inherit;',
    initial: 'scroll-padding:initial;',
    revert: 'scroll-padding:revert;',
    revertLayer: 'scroll-padding:revert-layer;',
    unset: 'scroll-padding:unset;',
  } as const;
}

type ScrollPaddingCssKeywords = Readonly<ReturnType<typeof scrollPaddingKeywords>>;
export interface ScrollPaddingCss extends ScrollPaddingCssKeywords {}
/** CSS 属性 scroll-padding。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
 */
export class ScrollPaddingCss extends LengthCssProperty<Property.ScrollPadding> {
  constructor() {
    super('scroll-padding');
    initializeScrollPaddingCss();
  }
}
let scrollPaddingReady = false;
function initializeScrollPaddingCss(): void {
  if (scrollPaddingReady) return;
  Object.assign(ScrollPaddingCss.prototype, scrollPaddingKeywords());
  Object.freeze(ScrollPaddingCss.prototype);
  scrollPaddingReady = true;
}

function scrollPaddingBlockKeywords() {
  return {
    auto: 'scroll-padding-block:auto;',
    inherit: 'scroll-padding-block:inherit;',
    initial: 'scroll-padding-block:initial;',
    revert: 'scroll-padding-block:revert;',
    revertLayer: 'scroll-padding-block:revert-layer;',
    unset: 'scroll-padding-block:unset;',
  } as const;
}

type ScrollPaddingBlockCssKeywords = Readonly<ReturnType<typeof scrollPaddingBlockKeywords>>;
export interface ScrollPaddingBlockCss extends ScrollPaddingBlockCssKeywords {}
/** CSS 属性 scroll-padding-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
 */
export class ScrollPaddingBlockCss extends LengthCssProperty<Property.ScrollPaddingBlock> {
  constructor() {
    super('scroll-padding-block');
    initializeScrollPaddingBlockCss();
  }
}
let scrollPaddingBlockReady = false;
function initializeScrollPaddingBlockCss(): void {
  if (scrollPaddingBlockReady) return;
  Object.assign(ScrollPaddingBlockCss.prototype, scrollPaddingBlockKeywords());
  Object.freeze(ScrollPaddingBlockCss.prototype);
  scrollPaddingBlockReady = true;
}

function scrollPaddingBlockEndKeywords() {
  return {
    auto: 'scroll-padding-block-end:auto;',
    inherit: 'scroll-padding-block-end:inherit;',
    initial: 'scroll-padding-block-end:initial;',
    revert: 'scroll-padding-block-end:revert;',
    revertLayer: 'scroll-padding-block-end:revert-layer;',
    unset: 'scroll-padding-block-end:unset;',
  } as const;
}

type ScrollPaddingBlockEndCssKeywords = Readonly<ReturnType<typeof scrollPaddingBlockEndKeywords>>;
export interface ScrollPaddingBlockEndCss extends ScrollPaddingBlockEndCssKeywords {}
/** CSS 属性 scroll-padding-block-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
 */
export class ScrollPaddingBlockEndCss extends LengthCssProperty<Property.ScrollPaddingBlockEnd> {
  constructor() {
    super('scroll-padding-block-end');
    initializeScrollPaddingBlockEndCss();
  }
}
let scrollPaddingBlockEndReady = false;
function initializeScrollPaddingBlockEndCss(): void {
  if (scrollPaddingBlockEndReady) return;
  Object.assign(ScrollPaddingBlockEndCss.prototype, scrollPaddingBlockEndKeywords());
  Object.freeze(ScrollPaddingBlockEndCss.prototype);
  scrollPaddingBlockEndReady = true;
}

function scrollPaddingBlockStartKeywords() {
  return {
    auto: 'scroll-padding-block-start:auto;',
    inherit: 'scroll-padding-block-start:inherit;',
    initial: 'scroll-padding-block-start:initial;',
    revert: 'scroll-padding-block-start:revert;',
    revertLayer: 'scroll-padding-block-start:revert-layer;',
    unset: 'scroll-padding-block-start:unset;',
  } as const;
}

type ScrollPaddingBlockStartCssKeywords = Readonly<
  ReturnType<typeof scrollPaddingBlockStartKeywords>
>;
export interface ScrollPaddingBlockStartCss extends ScrollPaddingBlockStartCssKeywords {}
/** CSS 属性 scroll-padding-block-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
 */
export class ScrollPaddingBlockStartCss extends LengthCssProperty<Property.ScrollPaddingBlockStart> {
  constructor() {
    super('scroll-padding-block-start');
    initializeScrollPaddingBlockStartCss();
  }
}
let scrollPaddingBlockStartReady = false;
function initializeScrollPaddingBlockStartCss(): void {
  if (scrollPaddingBlockStartReady) return;
  Object.assign(ScrollPaddingBlockStartCss.prototype, scrollPaddingBlockStartKeywords());
  Object.freeze(ScrollPaddingBlockStartCss.prototype);
  scrollPaddingBlockStartReady = true;
}

function scrollPaddingBottomKeywords() {
  return {
    auto: 'scroll-padding-bottom:auto;',
    inherit: 'scroll-padding-bottom:inherit;',
    initial: 'scroll-padding-bottom:initial;',
    revert: 'scroll-padding-bottom:revert;',
    revertLayer: 'scroll-padding-bottom:revert-layer;',
    unset: 'scroll-padding-bottom:unset;',
  } as const;
}

type ScrollPaddingBottomCssKeywords = Readonly<ReturnType<typeof scrollPaddingBottomKeywords>>;
export interface ScrollPaddingBottomCss extends ScrollPaddingBottomCssKeywords {}
/** CSS 属性 scroll-padding-bottom；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
 */
export class ScrollPaddingBottomCss extends LengthCssProperty<Property.ScrollPaddingBottom> {
  constructor() {
    super('scroll-padding-bottom');
    initializeScrollPaddingBottomCss();
  }
}
let scrollPaddingBottomReady = false;
function initializeScrollPaddingBottomCss(): void {
  if (scrollPaddingBottomReady) return;
  Object.assign(ScrollPaddingBottomCss.prototype, scrollPaddingBottomKeywords());
  Object.freeze(ScrollPaddingBottomCss.prototype);
  scrollPaddingBottomReady = true;
}

function scrollPaddingInlineKeywords() {
  return {
    auto: 'scroll-padding-inline:auto;',
    inherit: 'scroll-padding-inline:inherit;',
    initial: 'scroll-padding-inline:initial;',
    revert: 'scroll-padding-inline:revert;',
    revertLayer: 'scroll-padding-inline:revert-layer;',
    unset: 'scroll-padding-inline:unset;',
  } as const;
}

type ScrollPaddingInlineCssKeywords = Readonly<ReturnType<typeof scrollPaddingInlineKeywords>>;
export interface ScrollPaddingInlineCss extends ScrollPaddingInlineCssKeywords {}
/** CSS 属性 scroll-padding-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
 */
export class ScrollPaddingInlineCss extends LengthCssProperty<Property.ScrollPaddingInline> {
  constructor() {
    super('scroll-padding-inline');
    initializeScrollPaddingInlineCss();
  }
}
let scrollPaddingInlineReady = false;
function initializeScrollPaddingInlineCss(): void {
  if (scrollPaddingInlineReady) return;
  Object.assign(ScrollPaddingInlineCss.prototype, scrollPaddingInlineKeywords());
  Object.freeze(ScrollPaddingInlineCss.prototype);
  scrollPaddingInlineReady = true;
}

function scrollPaddingInlineEndKeywords() {
  return {
    auto: 'scroll-padding-inline-end:auto;',
    inherit: 'scroll-padding-inline-end:inherit;',
    initial: 'scroll-padding-inline-end:initial;',
    revert: 'scroll-padding-inline-end:revert;',
    revertLayer: 'scroll-padding-inline-end:revert-layer;',
    unset: 'scroll-padding-inline-end:unset;',
  } as const;
}

type ScrollPaddingInlineEndCssKeywords = Readonly<
  ReturnType<typeof scrollPaddingInlineEndKeywords>
>;
export interface ScrollPaddingInlineEndCss extends ScrollPaddingInlineEndCssKeywords {}
/** CSS 属性 scroll-padding-inline-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
 */
export class ScrollPaddingInlineEndCss extends LengthCssProperty<Property.ScrollPaddingInlineEnd> {
  constructor() {
    super('scroll-padding-inline-end');
    initializeScrollPaddingInlineEndCss();
  }
}
let scrollPaddingInlineEndReady = false;
function initializeScrollPaddingInlineEndCss(): void {
  if (scrollPaddingInlineEndReady) return;
  Object.assign(ScrollPaddingInlineEndCss.prototype, scrollPaddingInlineEndKeywords());
  Object.freeze(ScrollPaddingInlineEndCss.prototype);
  scrollPaddingInlineEndReady = true;
}

function scrollPaddingInlineStartKeywords() {
  return {
    auto: 'scroll-padding-inline-start:auto;',
    inherit: 'scroll-padding-inline-start:inherit;',
    initial: 'scroll-padding-inline-start:initial;',
    revert: 'scroll-padding-inline-start:revert;',
    revertLayer: 'scroll-padding-inline-start:revert-layer;',
    unset: 'scroll-padding-inline-start:unset;',
  } as const;
}

type ScrollPaddingInlineStartCssKeywords = Readonly<
  ReturnType<typeof scrollPaddingInlineStartKeywords>
>;
export interface ScrollPaddingInlineStartCss extends ScrollPaddingInlineStartCssKeywords {}
/** CSS 属性 scroll-padding-inline-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
 */
export class ScrollPaddingInlineStartCss extends LengthCssProperty<Property.ScrollPaddingInlineStart> {
  constructor() {
    super('scroll-padding-inline-start');
    initializeScrollPaddingInlineStartCss();
  }
}
let scrollPaddingInlineStartReady = false;
function initializeScrollPaddingInlineStartCss(): void {
  if (scrollPaddingInlineStartReady) return;
  Object.assign(ScrollPaddingInlineStartCss.prototype, scrollPaddingInlineStartKeywords());
  Object.freeze(ScrollPaddingInlineStartCss.prototype);
  scrollPaddingInlineStartReady = true;
}

function scrollPaddingLeftKeywords() {
  return {
    auto: 'scroll-padding-left:auto;',
    inherit: 'scroll-padding-left:inherit;',
    initial: 'scroll-padding-left:initial;',
    revert: 'scroll-padding-left:revert;',
    revertLayer: 'scroll-padding-left:revert-layer;',
    unset: 'scroll-padding-left:unset;',
  } as const;
}

type ScrollPaddingLeftCssKeywords = Readonly<ReturnType<typeof scrollPaddingLeftKeywords>>;
export interface ScrollPaddingLeftCss extends ScrollPaddingLeftCssKeywords {}
/** CSS 属性 scroll-padding-left；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
 */
export class ScrollPaddingLeftCss extends LengthCssProperty<Property.ScrollPaddingLeft> {
  constructor() {
    super('scroll-padding-left');
    initializeScrollPaddingLeftCss();
  }
}
let scrollPaddingLeftReady = false;
function initializeScrollPaddingLeftCss(): void {
  if (scrollPaddingLeftReady) return;
  Object.assign(ScrollPaddingLeftCss.prototype, scrollPaddingLeftKeywords());
  Object.freeze(ScrollPaddingLeftCss.prototype);
  scrollPaddingLeftReady = true;
}

function scrollPaddingRightKeywords() {
  return {
    auto: 'scroll-padding-right:auto;',
    inherit: 'scroll-padding-right:inherit;',
    initial: 'scroll-padding-right:initial;',
    revert: 'scroll-padding-right:revert;',
    revertLayer: 'scroll-padding-right:revert-layer;',
    unset: 'scroll-padding-right:unset;',
  } as const;
}

type ScrollPaddingRightCssKeywords = Readonly<ReturnType<typeof scrollPaddingRightKeywords>>;
export interface ScrollPaddingRightCss extends ScrollPaddingRightCssKeywords {}
/** CSS 属性 scroll-padding-right；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
 */
export class ScrollPaddingRightCss extends LengthCssProperty<Property.ScrollPaddingRight> {
  constructor() {
    super('scroll-padding-right');
    initializeScrollPaddingRightCss();
  }
}
let scrollPaddingRightReady = false;
function initializeScrollPaddingRightCss(): void {
  if (scrollPaddingRightReady) return;
  Object.assign(ScrollPaddingRightCss.prototype, scrollPaddingRightKeywords());
  Object.freeze(ScrollPaddingRightCss.prototype);
  scrollPaddingRightReady = true;
}

function scrollPaddingTopKeywords() {
  return {
    auto: 'scroll-padding-top:auto;',
    inherit: 'scroll-padding-top:inherit;',
    initial: 'scroll-padding-top:initial;',
    revert: 'scroll-padding-top:revert;',
    revertLayer: 'scroll-padding-top:revert-layer;',
    unset: 'scroll-padding-top:unset;',
  } as const;
}

type ScrollPaddingTopCssKeywords = Readonly<ReturnType<typeof scrollPaddingTopKeywords>>;
export interface ScrollPaddingTopCss extends ScrollPaddingTopCssKeywords {}
/** CSS 属性 scroll-padding-top；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
 */
export class ScrollPaddingTopCss extends LengthCssProperty<Property.ScrollPaddingTop> {
  constructor() {
    super('scroll-padding-top');
    initializeScrollPaddingTopCss();
  }
}
let scrollPaddingTopReady = false;
function initializeScrollPaddingTopCss(): void {
  if (scrollPaddingTopReady) return;
  Object.assign(ScrollPaddingTopCss.prototype, scrollPaddingTopKeywords());
  Object.freeze(ScrollPaddingTopCss.prototype);
  scrollPaddingTopReady = true;
}

function scrollSnapAlignKeywords() {
  return {
    center: 'scroll-snap-align:center;',
    end: 'scroll-snap-align:end;',
    inherit: 'scroll-snap-align:inherit;',
    initial: 'scroll-snap-align:initial;',
    none: 'scroll-snap-align:none;',
    revert: 'scroll-snap-align:revert;',
    revertLayer: 'scroll-snap-align:revert-layer;',
    start: 'scroll-snap-align:start;',
    unset: 'scroll-snap-align:unset;',
  } as const;
}

type ScrollSnapAlignCssKeywords = Readonly<ReturnType<typeof scrollSnapAlignKeywords>>;
export interface ScrollSnapAlignCss extends ScrollSnapAlignCssKeywords {}
/** CSS 属性 scroll-snap-align；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
 */
export class ScrollSnapAlignCss extends CssProperty<Property.ScrollSnapAlign> {
  constructor() {
    super('scroll-snap-align');
    initializeScrollSnapAlignCss();
  }
}
let scrollSnapAlignReady = false;
function initializeScrollSnapAlignCss(): void {
  if (scrollSnapAlignReady) return;
  Object.assign(ScrollSnapAlignCss.prototype, scrollSnapAlignKeywords());
  Object.freeze(ScrollSnapAlignCss.prototype);
  scrollSnapAlignReady = true;
}

function scrollSnapMarginKeywords() {
  return {
    inherit: 'scroll-snap-margin:inherit;',
    initial: 'scroll-snap-margin:initial;',
    revert: 'scroll-snap-margin:revert;',
    revertLayer: 'scroll-snap-margin:revert-layer;',
    unset: 'scroll-snap-margin:unset;',
  } as const;
}

type ScrollSnapMarginCssKeywords = Readonly<ReturnType<typeof scrollSnapMarginKeywords>>;
export interface ScrollSnapMarginCss extends ScrollSnapMarginCssKeywords {}
/** CSS 属性 scroll-snap-margin。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
 */
export class ScrollSnapMarginCss extends LengthCssProperty<Property.ScrollMargin> {
  constructor() {
    super('scroll-snap-margin');
    initializeScrollSnapMarginCss();
  }
}
let scrollSnapMarginReady = false;
function initializeScrollSnapMarginCss(): void {
  if (scrollSnapMarginReady) return;
  Object.assign(ScrollSnapMarginCss.prototype, scrollSnapMarginKeywords());
  Object.freeze(ScrollSnapMarginCss.prototype);
  scrollSnapMarginReady = true;
}

function scrollSnapMarginBottomKeywords() {
  return {
    inherit: 'scroll-snap-margin-bottom:inherit;',
    initial: 'scroll-snap-margin-bottom:initial;',
    revert: 'scroll-snap-margin-bottom:revert;',
    revertLayer: 'scroll-snap-margin-bottom:revert-layer;',
    unset: 'scroll-snap-margin-bottom:unset;',
  } as const;
}

type ScrollSnapMarginBottomCssKeywords = Readonly<
  ReturnType<typeof scrollSnapMarginBottomKeywords>
>;
export interface ScrollSnapMarginBottomCss extends ScrollSnapMarginBottomCssKeywords {}
/** CSS 属性 scroll-snap-margin-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
 */
export class ScrollSnapMarginBottomCss extends LengthCssProperty<Property.ScrollMarginBottom> {
  constructor() {
    super('scroll-snap-margin-bottom');
    initializeScrollSnapMarginBottomCss();
  }
}
let scrollSnapMarginBottomReady = false;
function initializeScrollSnapMarginBottomCss(): void {
  if (scrollSnapMarginBottomReady) return;
  Object.assign(ScrollSnapMarginBottomCss.prototype, scrollSnapMarginBottomKeywords());
  Object.freeze(ScrollSnapMarginBottomCss.prototype);
  scrollSnapMarginBottomReady = true;
}

function scrollSnapMarginLeftKeywords() {
  return {
    inherit: 'scroll-snap-margin-left:inherit;',
    initial: 'scroll-snap-margin-left:initial;',
    revert: 'scroll-snap-margin-left:revert;',
    revertLayer: 'scroll-snap-margin-left:revert-layer;',
    unset: 'scroll-snap-margin-left:unset;',
  } as const;
}

type ScrollSnapMarginLeftCssKeywords = Readonly<ReturnType<typeof scrollSnapMarginLeftKeywords>>;
export interface ScrollSnapMarginLeftCss extends ScrollSnapMarginLeftCssKeywords {}
/** CSS 属性 scroll-snap-margin-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
 */
export class ScrollSnapMarginLeftCss extends LengthCssProperty<Property.ScrollMarginLeft> {
  constructor() {
    super('scroll-snap-margin-left');
    initializeScrollSnapMarginLeftCss();
  }
}
let scrollSnapMarginLeftReady = false;
function initializeScrollSnapMarginLeftCss(): void {
  if (scrollSnapMarginLeftReady) return;
  Object.assign(ScrollSnapMarginLeftCss.prototype, scrollSnapMarginLeftKeywords());
  Object.freeze(ScrollSnapMarginLeftCss.prototype);
  scrollSnapMarginLeftReady = true;
}

function scrollSnapMarginRightKeywords() {
  return {
    inherit: 'scroll-snap-margin-right:inherit;',
    initial: 'scroll-snap-margin-right:initial;',
    revert: 'scroll-snap-margin-right:revert;',
    revertLayer: 'scroll-snap-margin-right:revert-layer;',
    unset: 'scroll-snap-margin-right:unset;',
  } as const;
}

type ScrollSnapMarginRightCssKeywords = Readonly<ReturnType<typeof scrollSnapMarginRightKeywords>>;
export interface ScrollSnapMarginRightCss extends ScrollSnapMarginRightCssKeywords {}
/** CSS 属性 scroll-snap-margin-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
 */
export class ScrollSnapMarginRightCss extends LengthCssProperty<Property.ScrollMarginRight> {
  constructor() {
    super('scroll-snap-margin-right');
    initializeScrollSnapMarginRightCss();
  }
}
let scrollSnapMarginRightReady = false;
function initializeScrollSnapMarginRightCss(): void {
  if (scrollSnapMarginRightReady) return;
  Object.assign(ScrollSnapMarginRightCss.prototype, scrollSnapMarginRightKeywords());
  Object.freeze(ScrollSnapMarginRightCss.prototype);
  scrollSnapMarginRightReady = true;
}

function scrollSnapMarginTopKeywords() {
  return {
    inherit: 'scroll-snap-margin-top:inherit;',
    initial: 'scroll-snap-margin-top:initial;',
    revert: 'scroll-snap-margin-top:revert;',
    revertLayer: 'scroll-snap-margin-top:revert-layer;',
    unset: 'scroll-snap-margin-top:unset;',
  } as const;
}

type ScrollSnapMarginTopCssKeywords = Readonly<ReturnType<typeof scrollSnapMarginTopKeywords>>;
export interface ScrollSnapMarginTopCss extends ScrollSnapMarginTopCssKeywords {}
/** CSS 属性 scroll-snap-margin-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
 */
export class ScrollSnapMarginTopCss extends LengthCssProperty<Property.ScrollMarginTop> {
  constructor() {
    super('scroll-snap-margin-top');
    initializeScrollSnapMarginTopCss();
  }
}
let scrollSnapMarginTopReady = false;
function initializeScrollSnapMarginTopCss(): void {
  if (scrollSnapMarginTopReady) return;
  Object.assign(ScrollSnapMarginTopCss.prototype, scrollSnapMarginTopKeywords());
  Object.freeze(ScrollSnapMarginTopCss.prototype);
  scrollSnapMarginTopReady = true;
}

function scrollSnapStopKeywords() {
  return {
    always: 'scroll-snap-stop:always;',
    inherit: 'scroll-snap-stop:inherit;',
    initial: 'scroll-snap-stop:initial;',
    normal: 'scroll-snap-stop:normal;',
    revert: 'scroll-snap-stop:revert;',
    revertLayer: 'scroll-snap-stop:revert-layer;',
    unset: 'scroll-snap-stop:unset;',
  } as const;
}

type ScrollSnapStopCssKeywords = Readonly<ReturnType<typeof scrollSnapStopKeywords>>;
export interface ScrollSnapStopCss extends ScrollSnapStopCssKeywords {}
/** CSS 属性 scroll-snap-stop；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
 */
export class ScrollSnapStopCss extends CssProperty<Property.ScrollSnapStop> {
  constructor() {
    super('scroll-snap-stop');
    initializeScrollSnapStopCss();
  }
}
let scrollSnapStopReady = false;
function initializeScrollSnapStopCss(): void {
  if (scrollSnapStopReady) return;
  Object.assign(ScrollSnapStopCss.prototype, scrollSnapStopKeywords());
  Object.freeze(ScrollSnapStopCss.prototype);
  scrollSnapStopReady = true;
}

function scrollSnapTypeKeywords() {
  return {
    block: 'scroll-snap-type:block;',
    both: 'scroll-snap-type:both;',
    inherit: 'scroll-snap-type:inherit;',
    initial: 'scroll-snap-type:initial;',
    inline: 'scroll-snap-type:inline;',
    none: 'scroll-snap-type:none;',
    revert: 'scroll-snap-type:revert;',
    revertLayer: 'scroll-snap-type:revert-layer;',
    unset: 'scroll-snap-type:unset;',
    x: 'scroll-snap-type:x;',
    y: 'scroll-snap-type:y;',
  } as const;
}

type ScrollSnapTypeCssKeywords = Readonly<ReturnType<typeof scrollSnapTypeKeywords>>;
export interface ScrollSnapTypeCss extends ScrollSnapTypeCssKeywords {}
/** CSS 属性 scroll-snap-type；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
 */
export class ScrollSnapTypeCss extends CssProperty<Property.ScrollSnapType> {
  constructor() {
    super('scroll-snap-type');
    initializeScrollSnapTypeCss();
  }
}
let scrollSnapTypeReady = false;
function initializeScrollSnapTypeCss(): void {
  if (scrollSnapTypeReady) return;
  Object.assign(ScrollSnapTypeCss.prototype, scrollSnapTypeKeywords());
  Object.freeze(ScrollSnapTypeCss.prototype);
  scrollSnapTypeReady = true;
}

function scrollTimelineKeywords() {
  return {
    inherit: 'scroll-timeline:inherit;',
    initial: 'scroll-timeline:initial;',
    none: 'scroll-timeline:none;',
    revert: 'scroll-timeline:revert;',
    revertLayer: 'scroll-timeline:revert-layer;',
    unset: 'scroll-timeline:unset;',
  } as const;
}

type ScrollTimelineCssKeywords = Readonly<ReturnType<typeof scrollTimelineKeywords>>;
export interface ScrollTimelineCss extends ScrollTimelineCssKeywords {}
/** CSS 属性 scroll-timeline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
 */
export class ScrollTimelineCss extends CssProperty<Property.ScrollTimeline> {
  constructor() {
    super('scroll-timeline');
    initializeScrollTimelineCss();
  }
}
let scrollTimelineReady = false;
function initializeScrollTimelineCss(): void {
  if (scrollTimelineReady) return;
  Object.assign(ScrollTimelineCss.prototype, scrollTimelineKeywords());
  Object.freeze(ScrollTimelineCss.prototype);
  scrollTimelineReady = true;
}

function scrollTimelineAxisKeywords() {
  return {
    block: 'scroll-timeline-axis:block;',
    inherit: 'scroll-timeline-axis:inherit;',
    initial: 'scroll-timeline-axis:initial;',
    inline: 'scroll-timeline-axis:inline;',
    revert: 'scroll-timeline-axis:revert;',
    revertLayer: 'scroll-timeline-axis:revert-layer;',
    unset: 'scroll-timeline-axis:unset;',
    x: 'scroll-timeline-axis:x;',
    y: 'scroll-timeline-axis:y;',
  } as const;
}

type ScrollTimelineAxisCssKeywords = Readonly<ReturnType<typeof scrollTimelineAxisKeywords>>;
export interface ScrollTimelineAxisCss extends ScrollTimelineAxisCssKeywords {}
/** CSS 属性 scroll-timeline-axis；初始值 block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
 */
export class ScrollTimelineAxisCss extends CssProperty<Property.ScrollTimelineAxis> {
  constructor() {
    super('scroll-timeline-axis');
    initializeScrollTimelineAxisCss();
  }
}
let scrollTimelineAxisReady = false;
function initializeScrollTimelineAxisCss(): void {
  if (scrollTimelineAxisReady) return;
  Object.assign(ScrollTimelineAxisCss.prototype, scrollTimelineAxisKeywords());
  Object.freeze(ScrollTimelineAxisCss.prototype);
  scrollTimelineAxisReady = true;
}

function scrollTimelineNameKeywords() {
  return {
    inherit: 'scroll-timeline-name:inherit;',
    initial: 'scroll-timeline-name:initial;',
    none: 'scroll-timeline-name:none;',
    revert: 'scroll-timeline-name:revert;',
    revertLayer: 'scroll-timeline-name:revert-layer;',
    unset: 'scroll-timeline-name:unset;',
  } as const;
}

type ScrollTimelineNameCssKeywords = Readonly<ReturnType<typeof scrollTimelineNameKeywords>>;
export interface ScrollTimelineNameCss extends ScrollTimelineNameCssKeywords {}
/** CSS 属性 scroll-timeline-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
 */
export class ScrollTimelineNameCss extends CssProperty<Property.ScrollTimelineName> {
  constructor() {
    super('scroll-timeline-name');
    initializeScrollTimelineNameCss();
  }
}
let scrollTimelineNameReady = false;
function initializeScrollTimelineNameCss(): void {
  if (scrollTimelineNameReady) return;
  Object.assign(ScrollTimelineNameCss.prototype, scrollTimelineNameKeywords());
  Object.freeze(ScrollTimelineNameCss.prototype);
  scrollTimelineNameReady = true;
}

function scrollbarColorKeywords() {
  return {
    auto: 'scrollbar-color:auto;',
    inherit: 'scrollbar-color:inherit;',
    initial: 'scrollbar-color:initial;',
    revert: 'scrollbar-color:revert;',
    revertLayer: 'scrollbar-color:revert-layer;',
    unset: 'scrollbar-color:unset;',
  } as const;
}

type ScrollbarColorCssKeywords = Readonly<ReturnType<typeof scrollbarColorKeywords>>;
export interface ScrollbarColorCss extends ScrollbarColorCssKeywords {}
/** CSS 属性 scrollbar-color；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
 */
export class ScrollbarColorCss extends CssProperty<Property.ScrollbarColor> {
  constructor() {
    super('scrollbar-color');
    initializeScrollbarColorCss();
  }
}
let scrollbarColorReady = false;
function initializeScrollbarColorCss(): void {
  if (scrollbarColorReady) return;
  Object.assign(ScrollbarColorCss.prototype, scrollbarColorKeywords());
  Object.freeze(ScrollbarColorCss.prototype);
  scrollbarColorReady = true;
}

function scrollbarGutterKeywords() {
  return {
    auto: 'scrollbar-gutter:auto;',
    inherit: 'scrollbar-gutter:inherit;',
    initial: 'scrollbar-gutter:initial;',
    revert: 'scrollbar-gutter:revert;',
    revertLayer: 'scrollbar-gutter:revert-layer;',
    stable: 'scrollbar-gutter:stable;',
    unset: 'scrollbar-gutter:unset;',
  } as const;
}

type ScrollbarGutterCssKeywords = Readonly<ReturnType<typeof scrollbarGutterKeywords>>;
export interface ScrollbarGutterCss extends ScrollbarGutterCssKeywords {}
/** CSS 属性 scrollbar-gutter；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
 */
export class ScrollbarGutterCss extends CssProperty<Property.ScrollbarGutter> {
  constructor() {
    super('scrollbar-gutter');
    initializeScrollbarGutterCss();
  }
}
let scrollbarGutterReady = false;
function initializeScrollbarGutterCss(): void {
  if (scrollbarGutterReady) return;
  Object.assign(ScrollbarGutterCss.prototype, scrollbarGutterKeywords());
  Object.freeze(ScrollbarGutterCss.prototype);
  scrollbarGutterReady = true;
}

function scrollbarWidthKeywords() {
  return {
    auto: 'scrollbar-width:auto;',
    inherit: 'scrollbar-width:inherit;',
    initial: 'scrollbar-width:initial;',
    none: 'scrollbar-width:none;',
    revert: 'scrollbar-width:revert;',
    revertLayer: 'scrollbar-width:revert-layer;',
    thin: 'scrollbar-width:thin;',
    unset: 'scrollbar-width:unset;',
  } as const;
}

type ScrollbarWidthCssKeywords = Readonly<ReturnType<typeof scrollbarWidthKeywords>>;
export interface ScrollbarWidthCss extends ScrollbarWidthCssKeywords {}
/** CSS 属性 scrollbar-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
 */
export class ScrollbarWidthCss extends CssProperty<Property.ScrollbarWidth> {
  constructor() {
    super('scrollbar-width');
    initializeScrollbarWidthCss();
  }
}
let scrollbarWidthReady = false;
function initializeScrollbarWidthCss(): void {
  if (scrollbarWidthReady) return;
  Object.assign(ScrollbarWidthCss.prototype, scrollbarWidthKeywords());
  Object.freeze(ScrollbarWidthCss.prototype);
  scrollbarWidthReady = true;
}

function shapeImageThresholdKeywords() {
  return {
    inherit: 'shape-image-threshold:inherit;',
    initial: 'shape-image-threshold:initial;',
    revert: 'shape-image-threshold:revert;',
    revertLayer: 'shape-image-threshold:revert-layer;',
    unset: 'shape-image-threshold:unset;',
  } as const;
}

type ShapeImageThresholdCssKeywords = Readonly<ReturnType<typeof shapeImageThresholdKeywords>>;
export interface ShapeImageThresholdCss extends ShapeImageThresholdCssKeywords {}
/** CSS 属性 shape-image-threshold；初始值 0.0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
 */
export class ShapeImageThresholdCss extends CssProperty<Property.ShapeImageThreshold> {
  constructor() {
    super('shape-image-threshold');
    initializeShapeImageThresholdCss();
  }
}
let shapeImageThresholdReady = false;
function initializeShapeImageThresholdCss(): void {
  if (shapeImageThresholdReady) return;
  Object.assign(ShapeImageThresholdCss.prototype, shapeImageThresholdKeywords());
  Object.freeze(ShapeImageThresholdCss.prototype);
  shapeImageThresholdReady = true;
}

function shapeMarginKeywords() {
  return {
    inherit: 'shape-margin:inherit;',
    initial: 'shape-margin:initial;',
    revert: 'shape-margin:revert;',
    revertLayer: 'shape-margin:revert-layer;',
    unset: 'shape-margin:unset;',
  } as const;
}

type ShapeMarginCssKeywords = Readonly<ReturnType<typeof shapeMarginKeywords>>;
export interface ShapeMarginCss extends ShapeMarginCssKeywords {}
/** CSS 属性 shape-margin；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
 */
export class ShapeMarginCss extends LengthCssProperty<Property.ShapeMargin> {
  constructor() {
    super('shape-margin');
    initializeShapeMarginCss();
  }
}
let shapeMarginReady = false;
function initializeShapeMarginCss(): void {
  if (shapeMarginReady) return;
  Object.assign(ShapeMarginCss.prototype, shapeMarginKeywords());
  Object.freeze(ShapeMarginCss.prototype);
  shapeMarginReady = true;
}

function shapeOutsideKeywords() {
  return {
    borderBox: 'shape-outside:border-box;',
    contentBox: 'shape-outside:content-box;',
    inherit: 'shape-outside:inherit;',
    initial: 'shape-outside:initial;',
    marginBox: 'shape-outside:margin-box;',
    none: 'shape-outside:none;',
    paddingBox: 'shape-outside:padding-box;',
    revert: 'shape-outside:revert;',
    revertLayer: 'shape-outside:revert-layer;',
    unset: 'shape-outside:unset;',
  } as const;
}

type ShapeOutsideCssKeywords = Readonly<ReturnType<typeof shapeOutsideKeywords>>;
export interface ShapeOutsideCss extends ShapeOutsideCssKeywords {}
/** CSS 属性 shape-outside；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
 */
export class ShapeOutsideCss extends CssProperty<Property.ShapeOutside> {
  constructor() {
    super('shape-outside');
    initializeShapeOutsideCss();
  }
}
let shapeOutsideReady = false;
function initializeShapeOutsideCss(): void {
  if (shapeOutsideReady) return;
  Object.assign(ShapeOutsideCss.prototype, shapeOutsideKeywords());
  Object.freeze(ShapeOutsideCss.prototype);
  shapeOutsideReady = true;
}

function shapeRenderingKeywords() {
  return {
    auto: 'shape-rendering:auto;',
    crispEdges: 'shape-rendering:crispEdges;',
    geometricPrecision: 'shape-rendering:geometricPrecision;',
    inherit: 'shape-rendering:inherit;',
    initial: 'shape-rendering:initial;',
    optimizeSpeed: 'shape-rendering:optimizeSpeed;',
    revert: 'shape-rendering:revert;',
    revertLayer: 'shape-rendering:revert-layer;',
    unset: 'shape-rendering:unset;',
  } as const;
}

type ShapeRenderingCssKeywords = Readonly<ReturnType<typeof shapeRenderingKeywords>>;
export interface ShapeRenderingCss extends ShapeRenderingCssKeywords {}
/** CSS 属性 shape-rendering；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
 */
export class ShapeRenderingCss extends CssProperty<Property.ShapeRendering> {
  constructor() {
    super('shape-rendering');
    initializeShapeRenderingCss();
  }
}
let shapeRenderingReady = false;
function initializeShapeRenderingCss(): void {
  if (shapeRenderingReady) return;
  Object.assign(ShapeRenderingCss.prototype, shapeRenderingKeywords());
  Object.freeze(ShapeRenderingCss.prototype);
  shapeRenderingReady = true;
}

function speakAsKeywords() {
  return {
    digits: 'speak-as:digits;',
    inherit: 'speak-as:inherit;',
    initial: 'speak-as:initial;',
    literalPunctuation: 'speak-as:literal-punctuation;',
    noPunctuation: 'speak-as:no-punctuation;',
    normal: 'speak-as:normal;',
    revert: 'speak-as:revert;',
    revertLayer: 'speak-as:revert-layer;',
    spellOut: 'speak-as:spell-out;',
    unset: 'speak-as:unset;',
  } as const;
}

type SpeakAsCssKeywords = Readonly<ReturnType<typeof speakAsKeywords>>;
export interface SpeakAsCss extends SpeakAsCssKeywords {}
/** CSS 属性 speak-as；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
 */
export class SpeakAsCss extends CssProperty<Property.SpeakAs> {
  constructor() {
    super('speak-as');
    initializeSpeakAsCss();
  }
}
let speakAsReady = false;
function initializeSpeakAsCss(): void {
  if (speakAsReady) return;
  Object.assign(SpeakAsCss.prototype, speakAsKeywords());
  Object.freeze(SpeakAsCss.prototype);
  speakAsReady = true;
}

function stopColorKeywords() {
  return {
    AccentColor: 'stop-color:AccentColor;',
    AccentColorText: 'stop-color:AccentColorText;',
    ActiveBorder: 'stop-color:ActiveBorder;',
    ActiveCaption: 'stop-color:ActiveCaption;',
    ActiveText: 'stop-color:ActiveText;',
    AppWorkspace: 'stop-color:AppWorkspace;',
    Background: 'stop-color:Background;',
    ButtonBorder: 'stop-color:ButtonBorder;',
    ButtonFace: 'stop-color:ButtonFace;',
    ButtonHighlight: 'stop-color:ButtonHighlight;',
    ButtonShadow: 'stop-color:ButtonShadow;',
    ButtonText: 'stop-color:ButtonText;',
    Canvas: 'stop-color:Canvas;',
    CanvasText: 'stop-color:CanvasText;',
    CaptionText: 'stop-color:CaptionText;',
    Field: 'stop-color:Field;',
    FieldText: 'stop-color:FieldText;',
    GrayText: 'stop-color:GrayText;',
    Highlight: 'stop-color:Highlight;',
    HighlightText: 'stop-color:HighlightText;',
    InactiveBorder: 'stop-color:InactiveBorder;',
    InactiveCaption: 'stop-color:InactiveCaption;',
    InactiveCaptionText: 'stop-color:InactiveCaptionText;',
    InfoBackground: 'stop-color:InfoBackground;',
    InfoText: 'stop-color:InfoText;',
    LinkText: 'stop-color:LinkText;',
    Mark: 'stop-color:Mark;',
    MarkText: 'stop-color:MarkText;',
    Menu: 'stop-color:Menu;',
    MenuText: 'stop-color:MenuText;',
    Scrollbar: 'stop-color:Scrollbar;',
    SelectedItem: 'stop-color:SelectedItem;',
    SelectedItemText: 'stop-color:SelectedItemText;',
    ThreeDDarkShadow: 'stop-color:ThreeDDarkShadow;',
    ThreeDFace: 'stop-color:ThreeDFace;',
    ThreeDHighlight: 'stop-color:ThreeDHighlight;',
    ThreeDLightShadow: 'stop-color:ThreeDLightShadow;',
    ThreeDShadow: 'stop-color:ThreeDShadow;',
    VisitedText: 'stop-color:VisitedText;',
    Window: 'stop-color:Window;',
    WindowFrame: 'stop-color:WindowFrame;',
    WindowText: 'stop-color:WindowText;',
    aliceblue: 'stop-color:aliceblue;',
    antiquewhite: 'stop-color:antiquewhite;',
    aqua: 'stop-color:aqua;',
    aquamarine: 'stop-color:aquamarine;',
    azure: 'stop-color:azure;',
    beige: 'stop-color:beige;',
    bisque: 'stop-color:bisque;',
    black: 'stop-color:black;',
    blanchedalmond: 'stop-color:blanchedalmond;',
    blue: 'stop-color:blue;',
    blueviolet: 'stop-color:blueviolet;',
    brown: 'stop-color:brown;',
    burlywood: 'stop-color:burlywood;',
    cadetblue: 'stop-color:cadetblue;',
    chartreuse: 'stop-color:chartreuse;',
    chocolate: 'stop-color:chocolate;',
    coral: 'stop-color:coral;',
    cornflowerblue: 'stop-color:cornflowerblue;',
    cornsilk: 'stop-color:cornsilk;',
    crimson: 'stop-color:crimson;',
    currentColor: 'stop-color:currentColor;',
    cyan: 'stop-color:cyan;',
    darkblue: 'stop-color:darkblue;',
    darkcyan: 'stop-color:darkcyan;',
    darkgoldenrod: 'stop-color:darkgoldenrod;',
    darkgray: 'stop-color:darkgray;',
    darkgreen: 'stop-color:darkgreen;',
    darkgrey: 'stop-color:darkgrey;',
    darkkhaki: 'stop-color:darkkhaki;',
    darkmagenta: 'stop-color:darkmagenta;',
    darkolivegreen: 'stop-color:darkolivegreen;',
    darkorange: 'stop-color:darkorange;',
    darkorchid: 'stop-color:darkorchid;',
    darkred: 'stop-color:darkred;',
    darksalmon: 'stop-color:darksalmon;',
    darkseagreen: 'stop-color:darkseagreen;',
    darkslateblue: 'stop-color:darkslateblue;',
    darkslategray: 'stop-color:darkslategray;',
    darkslategrey: 'stop-color:darkslategrey;',
    darkturquoise: 'stop-color:darkturquoise;',
    darkviolet: 'stop-color:darkviolet;',
    deeppink: 'stop-color:deeppink;',
    deepskyblue: 'stop-color:deepskyblue;',
    dimgray: 'stop-color:dimgray;',
    dimgrey: 'stop-color:dimgrey;',
    dodgerblue: 'stop-color:dodgerblue;',
    firebrick: 'stop-color:firebrick;',
    floralwhite: 'stop-color:floralwhite;',
    forestgreen: 'stop-color:forestgreen;',
    fuchsia: 'stop-color:fuchsia;',
    gainsboro: 'stop-color:gainsboro;',
    ghostwhite: 'stop-color:ghostwhite;',
    gold: 'stop-color:gold;',
    goldenrod: 'stop-color:goldenrod;',
    gray: 'stop-color:gray;',
    green: 'stop-color:green;',
    greenyellow: 'stop-color:greenyellow;',
    grey: 'stop-color:grey;',
    honeydew: 'stop-color:honeydew;',
    hotpink: 'stop-color:hotpink;',
    indianred: 'stop-color:indianred;',
    indigo: 'stop-color:indigo;',
    inherit: 'stop-color:inherit;',
    initial: 'stop-color:initial;',
    ivory: 'stop-color:ivory;',
    khaki: 'stop-color:khaki;',
    lavender: 'stop-color:lavender;',
    lavenderblush: 'stop-color:lavenderblush;',
    lawngreen: 'stop-color:lawngreen;',
    lemonchiffon: 'stop-color:lemonchiffon;',
    lightblue: 'stop-color:lightblue;',
    lightcoral: 'stop-color:lightcoral;',
    lightcyan: 'stop-color:lightcyan;',
    lightgoldenrodyellow: 'stop-color:lightgoldenrodyellow;',
    lightgray: 'stop-color:lightgray;',
    lightgreen: 'stop-color:lightgreen;',
    lightgrey: 'stop-color:lightgrey;',
    lightpink: 'stop-color:lightpink;',
    lightsalmon: 'stop-color:lightsalmon;',
    lightseagreen: 'stop-color:lightseagreen;',
    lightskyblue: 'stop-color:lightskyblue;',
    lightslategray: 'stop-color:lightslategray;',
    lightslategrey: 'stop-color:lightslategrey;',
    lightsteelblue: 'stop-color:lightsteelblue;',
    lightyellow: 'stop-color:lightyellow;',
    lime: 'stop-color:lime;',
    limegreen: 'stop-color:limegreen;',
    linen: 'stop-color:linen;',
    magenta: 'stop-color:magenta;',
    maroon: 'stop-color:maroon;',
    mediumaquamarine: 'stop-color:mediumaquamarine;',
    mediumblue: 'stop-color:mediumblue;',
    mediumorchid: 'stop-color:mediumorchid;',
    mediumpurple: 'stop-color:mediumpurple;',
    mediumseagreen: 'stop-color:mediumseagreen;',
    mediumslateblue: 'stop-color:mediumslateblue;',
    mediumspringgreen: 'stop-color:mediumspringgreen;',
    mediumturquoise: 'stop-color:mediumturquoise;',
    mediumvioletred: 'stop-color:mediumvioletred;',
    midnightblue: 'stop-color:midnightblue;',
    mintcream: 'stop-color:mintcream;',
    mistyrose: 'stop-color:mistyrose;',
    moccasin: 'stop-color:moccasin;',
    navajowhite: 'stop-color:navajowhite;',
    navy: 'stop-color:navy;',
    oldlace: 'stop-color:oldlace;',
    olive: 'stop-color:olive;',
    olivedrab: 'stop-color:olivedrab;',
    orange: 'stop-color:orange;',
    orangered: 'stop-color:orangered;',
    orchid: 'stop-color:orchid;',
    palegoldenrod: 'stop-color:palegoldenrod;',
    palegreen: 'stop-color:palegreen;',
    paleturquoise: 'stop-color:paleturquoise;',
    palevioletred: 'stop-color:palevioletred;',
    papayawhip: 'stop-color:papayawhip;',
    peachpuff: 'stop-color:peachpuff;',
    peru: 'stop-color:peru;',
    pink: 'stop-color:pink;',
    plum: 'stop-color:plum;',
    powderblue: 'stop-color:powderblue;',
    purple: 'stop-color:purple;',
    rebeccapurple: 'stop-color:rebeccapurple;',
    red: 'stop-color:red;',
    revert: 'stop-color:revert;',
    revertLayer: 'stop-color:revert-layer;',
    rosybrown: 'stop-color:rosybrown;',
    royalblue: 'stop-color:royalblue;',
    saddlebrown: 'stop-color:saddlebrown;',
    salmon: 'stop-color:salmon;',
    sandybrown: 'stop-color:sandybrown;',
    seagreen: 'stop-color:seagreen;',
    seashell: 'stop-color:seashell;',
    sienna: 'stop-color:sienna;',
    silver: 'stop-color:silver;',
    skyblue: 'stop-color:skyblue;',
    slateblue: 'stop-color:slateblue;',
    slategray: 'stop-color:slategray;',
    slategrey: 'stop-color:slategrey;',
    snow: 'stop-color:snow;',
    springgreen: 'stop-color:springgreen;',
    steelblue: 'stop-color:steelblue;',
    tan: 'stop-color:tan;',
    teal: 'stop-color:teal;',
    thistle: 'stop-color:thistle;',
    tomato: 'stop-color:tomato;',
    transparent: 'stop-color:transparent;',
    turquoise: 'stop-color:turquoise;',
    unset: 'stop-color:unset;',
    violet: 'stop-color:violet;',
    wheat: 'stop-color:wheat;',
    white: 'stop-color:white;',
    whitesmoke: 'stop-color:whitesmoke;',
    yellow: 'stop-color:yellow;',
    yellowgreen: 'stop-color:yellowgreen;',
  } as const;
}

type StopColorCssKeywords = Readonly<ReturnType<typeof stopColorKeywords>>;
export interface StopColorCss extends StopColorCssKeywords {}
/** CSS 属性 stop-color；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
 */
export class StopColorCss extends CssProperty<Property.StopColor> {
  constructor() {
    super('stop-color');
    initializeStopColorCss();
  }
}
let stopColorReady = false;
function initializeStopColorCss(): void {
  if (stopColorReady) return;
  Object.assign(StopColorCss.prototype, stopColorKeywords());
  Object.freeze(StopColorCss.prototype);
  stopColorReady = true;
}

function stopOpacityKeywords() {
  return {
    inherit: 'stop-opacity:inherit;',
    initial: 'stop-opacity:initial;',
    revert: 'stop-opacity:revert;',
    revertLayer: 'stop-opacity:revert-layer;',
    unset: 'stop-opacity:unset;',
  } as const;
}

type StopOpacityCssKeywords = Readonly<ReturnType<typeof stopOpacityKeywords>>;
export interface StopOpacityCss extends StopOpacityCssKeywords {}
/** CSS 属性 stop-opacity；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
 */
export class StopOpacityCss extends CssProperty<Property.StopOpacity> {
  constructor() {
    super('stop-opacity');
    initializeStopOpacityCss();
  }
}
let stopOpacityReady = false;
function initializeStopOpacityCss(): void {
  if (stopOpacityReady) return;
  Object.assign(StopOpacityCss.prototype, stopOpacityKeywords());
  Object.freeze(StopOpacityCss.prototype);
  stopOpacityReady = true;
}

function strokeKeywords() {
  return {
    AccentColor: 'stroke:AccentColor;',
    AccentColorText: 'stroke:AccentColorText;',
    ActiveBorder: 'stroke:ActiveBorder;',
    ActiveCaption: 'stroke:ActiveCaption;',
    ActiveText: 'stroke:ActiveText;',
    AppWorkspace: 'stroke:AppWorkspace;',
    Background: 'stroke:Background;',
    ButtonBorder: 'stroke:ButtonBorder;',
    ButtonFace: 'stroke:ButtonFace;',
    ButtonHighlight: 'stroke:ButtonHighlight;',
    ButtonShadow: 'stroke:ButtonShadow;',
    ButtonText: 'stroke:ButtonText;',
    Canvas: 'stroke:Canvas;',
    CanvasText: 'stroke:CanvasText;',
    CaptionText: 'stroke:CaptionText;',
    Field: 'stroke:Field;',
    FieldText: 'stroke:FieldText;',
    GrayText: 'stroke:GrayText;',
    Highlight: 'stroke:Highlight;',
    HighlightText: 'stroke:HighlightText;',
    InactiveBorder: 'stroke:InactiveBorder;',
    InactiveCaption: 'stroke:InactiveCaption;',
    InactiveCaptionText: 'stroke:InactiveCaptionText;',
    InfoBackground: 'stroke:InfoBackground;',
    InfoText: 'stroke:InfoText;',
    LinkText: 'stroke:LinkText;',
    Mark: 'stroke:Mark;',
    MarkText: 'stroke:MarkText;',
    Menu: 'stroke:Menu;',
    MenuText: 'stroke:MenuText;',
    Scrollbar: 'stroke:Scrollbar;',
    SelectedItem: 'stroke:SelectedItem;',
    SelectedItemText: 'stroke:SelectedItemText;',
    ThreeDDarkShadow: 'stroke:ThreeDDarkShadow;',
    ThreeDFace: 'stroke:ThreeDFace;',
    ThreeDHighlight: 'stroke:ThreeDHighlight;',
    ThreeDLightShadow: 'stroke:ThreeDLightShadow;',
    ThreeDShadow: 'stroke:ThreeDShadow;',
    VisitedText: 'stroke:VisitedText;',
    Window: 'stroke:Window;',
    WindowFrame: 'stroke:WindowFrame;',
    WindowText: 'stroke:WindowText;',
    aliceblue: 'stroke:aliceblue;',
    antiquewhite: 'stroke:antiquewhite;',
    aqua: 'stroke:aqua;',
    aquamarine: 'stroke:aquamarine;',
    azure: 'stroke:azure;',
    beige: 'stroke:beige;',
    bisque: 'stroke:bisque;',
    black: 'stroke:black;',
    blanchedalmond: 'stroke:blanchedalmond;',
    blue: 'stroke:blue;',
    blueviolet: 'stroke:blueviolet;',
    brown: 'stroke:brown;',
    burlywood: 'stroke:burlywood;',
    cadetblue: 'stroke:cadetblue;',
    chartreuse: 'stroke:chartreuse;',
    chocolate: 'stroke:chocolate;',
    contextFill: 'stroke:context-fill;',
    contextStroke: 'stroke:context-stroke;',
    coral: 'stroke:coral;',
    cornflowerblue: 'stroke:cornflowerblue;',
    cornsilk: 'stroke:cornsilk;',
    crimson: 'stroke:crimson;',
    currentColor: 'stroke:currentColor;',
    cyan: 'stroke:cyan;',
    darkblue: 'stroke:darkblue;',
    darkcyan: 'stroke:darkcyan;',
    darkgoldenrod: 'stroke:darkgoldenrod;',
    darkgray: 'stroke:darkgray;',
    darkgreen: 'stroke:darkgreen;',
    darkgrey: 'stroke:darkgrey;',
    darkkhaki: 'stroke:darkkhaki;',
    darkmagenta: 'stroke:darkmagenta;',
    darkolivegreen: 'stroke:darkolivegreen;',
    darkorange: 'stroke:darkorange;',
    darkorchid: 'stroke:darkorchid;',
    darkred: 'stroke:darkred;',
    darksalmon: 'stroke:darksalmon;',
    darkseagreen: 'stroke:darkseagreen;',
    darkslateblue: 'stroke:darkslateblue;',
    darkslategray: 'stroke:darkslategray;',
    darkslategrey: 'stroke:darkslategrey;',
    darkturquoise: 'stroke:darkturquoise;',
    darkviolet: 'stroke:darkviolet;',
    deeppink: 'stroke:deeppink;',
    deepskyblue: 'stroke:deepskyblue;',
    dimgray: 'stroke:dimgray;',
    dimgrey: 'stroke:dimgrey;',
    dodgerblue: 'stroke:dodgerblue;',
    firebrick: 'stroke:firebrick;',
    floralwhite: 'stroke:floralwhite;',
    forestgreen: 'stroke:forestgreen;',
    fuchsia: 'stroke:fuchsia;',
    gainsboro: 'stroke:gainsboro;',
    ghostwhite: 'stroke:ghostwhite;',
    gold: 'stroke:gold;',
    goldenrod: 'stroke:goldenrod;',
    gray: 'stroke:gray;',
    green: 'stroke:green;',
    greenyellow: 'stroke:greenyellow;',
    grey: 'stroke:grey;',
    honeydew: 'stroke:honeydew;',
    hotpink: 'stroke:hotpink;',
    indianred: 'stroke:indianred;',
    indigo: 'stroke:indigo;',
    inherit: 'stroke:inherit;',
    initial: 'stroke:initial;',
    ivory: 'stroke:ivory;',
    khaki: 'stroke:khaki;',
    lavender: 'stroke:lavender;',
    lavenderblush: 'stroke:lavenderblush;',
    lawngreen: 'stroke:lawngreen;',
    lemonchiffon: 'stroke:lemonchiffon;',
    lightblue: 'stroke:lightblue;',
    lightcoral: 'stroke:lightcoral;',
    lightcyan: 'stroke:lightcyan;',
    lightgoldenrodyellow: 'stroke:lightgoldenrodyellow;',
    lightgray: 'stroke:lightgray;',
    lightgreen: 'stroke:lightgreen;',
    lightgrey: 'stroke:lightgrey;',
    lightpink: 'stroke:lightpink;',
    lightsalmon: 'stroke:lightsalmon;',
    lightseagreen: 'stroke:lightseagreen;',
    lightskyblue: 'stroke:lightskyblue;',
    lightslategray: 'stroke:lightslategray;',
    lightslategrey: 'stroke:lightslategrey;',
    lightsteelblue: 'stroke:lightsteelblue;',
    lightyellow: 'stroke:lightyellow;',
    lime: 'stroke:lime;',
    limegreen: 'stroke:limegreen;',
    linen: 'stroke:linen;',
    magenta: 'stroke:magenta;',
    maroon: 'stroke:maroon;',
    mediumaquamarine: 'stroke:mediumaquamarine;',
    mediumblue: 'stroke:mediumblue;',
    mediumorchid: 'stroke:mediumorchid;',
    mediumpurple: 'stroke:mediumpurple;',
    mediumseagreen: 'stroke:mediumseagreen;',
    mediumslateblue: 'stroke:mediumslateblue;',
    mediumspringgreen: 'stroke:mediumspringgreen;',
    mediumturquoise: 'stroke:mediumturquoise;',
    mediumvioletred: 'stroke:mediumvioletred;',
    midnightblue: 'stroke:midnightblue;',
    mintcream: 'stroke:mintcream;',
    mistyrose: 'stroke:mistyrose;',
    moccasin: 'stroke:moccasin;',
    navajowhite: 'stroke:navajowhite;',
    navy: 'stroke:navy;',
    none: 'stroke:none;',
    oldlace: 'stroke:oldlace;',
    olive: 'stroke:olive;',
    olivedrab: 'stroke:olivedrab;',
    orange: 'stroke:orange;',
    orangered: 'stroke:orangered;',
    orchid: 'stroke:orchid;',
    palegoldenrod: 'stroke:palegoldenrod;',
    palegreen: 'stroke:palegreen;',
    paleturquoise: 'stroke:paleturquoise;',
    palevioletred: 'stroke:palevioletred;',
    papayawhip: 'stroke:papayawhip;',
    peachpuff: 'stroke:peachpuff;',
    peru: 'stroke:peru;',
    pink: 'stroke:pink;',
    plum: 'stroke:plum;',
    powderblue: 'stroke:powderblue;',
    purple: 'stroke:purple;',
    rebeccapurple: 'stroke:rebeccapurple;',
    red: 'stroke:red;',
    revert: 'stroke:revert;',
    revertLayer: 'stroke:revert-layer;',
    rosybrown: 'stroke:rosybrown;',
    royalblue: 'stroke:royalblue;',
    saddlebrown: 'stroke:saddlebrown;',
    salmon: 'stroke:salmon;',
    sandybrown: 'stroke:sandybrown;',
    seagreen: 'stroke:seagreen;',
    seashell: 'stroke:seashell;',
    sienna: 'stroke:sienna;',
    silver: 'stroke:silver;',
    skyblue: 'stroke:skyblue;',
    slateblue: 'stroke:slateblue;',
    slategray: 'stroke:slategray;',
    slategrey: 'stroke:slategrey;',
    snow: 'stroke:snow;',
    springgreen: 'stroke:springgreen;',
    steelblue: 'stroke:steelblue;',
    tan: 'stroke:tan;',
    teal: 'stroke:teal;',
    thistle: 'stroke:thistle;',
    tomato: 'stroke:tomato;',
    transparent: 'stroke:transparent;',
    turquoise: 'stroke:turquoise;',
    unset: 'stroke:unset;',
    violet: 'stroke:violet;',
    wheat: 'stroke:wheat;',
    white: 'stroke:white;',
    whitesmoke: 'stroke:whitesmoke;',
    yellow: 'stroke:yellow;',
    yellowgreen: 'stroke:yellowgreen;',
  } as const;
}

type StrokeCssKeywords = Readonly<ReturnType<typeof strokeKeywords>>;
export interface StrokeCss extends StrokeCssKeywords {}
/** CSS 属性 stroke。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
 */
export class StrokeCss extends CssProperty<Property.Stroke> {
  constructor() {
    super('stroke');
    initializeStrokeCss();
  }
}
let strokeReady = false;
function initializeStrokeCss(): void {
  if (strokeReady) return;
  Object.assign(StrokeCss.prototype, strokeKeywords());
  Object.freeze(StrokeCss.prototype);
  strokeReady = true;
}

function strokeColorKeywords() {
  return {
    AccentColor: 'stroke-color:AccentColor;',
    AccentColorText: 'stroke-color:AccentColorText;',
    ActiveBorder: 'stroke-color:ActiveBorder;',
    ActiveCaption: 'stroke-color:ActiveCaption;',
    ActiveText: 'stroke-color:ActiveText;',
    AppWorkspace: 'stroke-color:AppWorkspace;',
    Background: 'stroke-color:Background;',
    ButtonBorder: 'stroke-color:ButtonBorder;',
    ButtonFace: 'stroke-color:ButtonFace;',
    ButtonHighlight: 'stroke-color:ButtonHighlight;',
    ButtonShadow: 'stroke-color:ButtonShadow;',
    ButtonText: 'stroke-color:ButtonText;',
    Canvas: 'stroke-color:Canvas;',
    CanvasText: 'stroke-color:CanvasText;',
    CaptionText: 'stroke-color:CaptionText;',
    Field: 'stroke-color:Field;',
    FieldText: 'stroke-color:FieldText;',
    GrayText: 'stroke-color:GrayText;',
    Highlight: 'stroke-color:Highlight;',
    HighlightText: 'stroke-color:HighlightText;',
    InactiveBorder: 'stroke-color:InactiveBorder;',
    InactiveCaption: 'stroke-color:InactiveCaption;',
    InactiveCaptionText: 'stroke-color:InactiveCaptionText;',
    InfoBackground: 'stroke-color:InfoBackground;',
    InfoText: 'stroke-color:InfoText;',
    LinkText: 'stroke-color:LinkText;',
    Mark: 'stroke-color:Mark;',
    MarkText: 'stroke-color:MarkText;',
    Menu: 'stroke-color:Menu;',
    MenuText: 'stroke-color:MenuText;',
    Scrollbar: 'stroke-color:Scrollbar;',
    SelectedItem: 'stroke-color:SelectedItem;',
    SelectedItemText: 'stroke-color:SelectedItemText;',
    ThreeDDarkShadow: 'stroke-color:ThreeDDarkShadow;',
    ThreeDFace: 'stroke-color:ThreeDFace;',
    ThreeDHighlight: 'stroke-color:ThreeDHighlight;',
    ThreeDLightShadow: 'stroke-color:ThreeDLightShadow;',
    ThreeDShadow: 'stroke-color:ThreeDShadow;',
    VisitedText: 'stroke-color:VisitedText;',
    Window: 'stroke-color:Window;',
    WindowFrame: 'stroke-color:WindowFrame;',
    WindowText: 'stroke-color:WindowText;',
    aliceblue: 'stroke-color:aliceblue;',
    antiquewhite: 'stroke-color:antiquewhite;',
    aqua: 'stroke-color:aqua;',
    aquamarine: 'stroke-color:aquamarine;',
    azure: 'stroke-color:azure;',
    beige: 'stroke-color:beige;',
    bisque: 'stroke-color:bisque;',
    black: 'stroke-color:black;',
    blanchedalmond: 'stroke-color:blanchedalmond;',
    blue: 'stroke-color:blue;',
    blueviolet: 'stroke-color:blueviolet;',
    brown: 'stroke-color:brown;',
    burlywood: 'stroke-color:burlywood;',
    cadetblue: 'stroke-color:cadetblue;',
    chartreuse: 'stroke-color:chartreuse;',
    chocolate: 'stroke-color:chocolate;',
    coral: 'stroke-color:coral;',
    cornflowerblue: 'stroke-color:cornflowerblue;',
    cornsilk: 'stroke-color:cornsilk;',
    crimson: 'stroke-color:crimson;',
    currentColor: 'stroke-color:currentColor;',
    cyan: 'stroke-color:cyan;',
    darkblue: 'stroke-color:darkblue;',
    darkcyan: 'stroke-color:darkcyan;',
    darkgoldenrod: 'stroke-color:darkgoldenrod;',
    darkgray: 'stroke-color:darkgray;',
    darkgreen: 'stroke-color:darkgreen;',
    darkgrey: 'stroke-color:darkgrey;',
    darkkhaki: 'stroke-color:darkkhaki;',
    darkmagenta: 'stroke-color:darkmagenta;',
    darkolivegreen: 'stroke-color:darkolivegreen;',
    darkorange: 'stroke-color:darkorange;',
    darkorchid: 'stroke-color:darkorchid;',
    darkred: 'stroke-color:darkred;',
    darksalmon: 'stroke-color:darksalmon;',
    darkseagreen: 'stroke-color:darkseagreen;',
    darkslateblue: 'stroke-color:darkslateblue;',
    darkslategray: 'stroke-color:darkslategray;',
    darkslategrey: 'stroke-color:darkslategrey;',
    darkturquoise: 'stroke-color:darkturquoise;',
    darkviolet: 'stroke-color:darkviolet;',
    deeppink: 'stroke-color:deeppink;',
    deepskyblue: 'stroke-color:deepskyblue;',
    dimgray: 'stroke-color:dimgray;',
    dimgrey: 'stroke-color:dimgrey;',
    dodgerblue: 'stroke-color:dodgerblue;',
    firebrick: 'stroke-color:firebrick;',
    floralwhite: 'stroke-color:floralwhite;',
    forestgreen: 'stroke-color:forestgreen;',
    fuchsia: 'stroke-color:fuchsia;',
    gainsboro: 'stroke-color:gainsboro;',
    ghostwhite: 'stroke-color:ghostwhite;',
    gold: 'stroke-color:gold;',
    goldenrod: 'stroke-color:goldenrod;',
    gray: 'stroke-color:gray;',
    green: 'stroke-color:green;',
    greenyellow: 'stroke-color:greenyellow;',
    grey: 'stroke-color:grey;',
    honeydew: 'stroke-color:honeydew;',
    hotpink: 'stroke-color:hotpink;',
    indianred: 'stroke-color:indianred;',
    indigo: 'stroke-color:indigo;',
    inherit: 'stroke-color:inherit;',
    initial: 'stroke-color:initial;',
    ivory: 'stroke-color:ivory;',
    khaki: 'stroke-color:khaki;',
    lavender: 'stroke-color:lavender;',
    lavenderblush: 'stroke-color:lavenderblush;',
    lawngreen: 'stroke-color:lawngreen;',
    lemonchiffon: 'stroke-color:lemonchiffon;',
    lightblue: 'stroke-color:lightblue;',
    lightcoral: 'stroke-color:lightcoral;',
    lightcyan: 'stroke-color:lightcyan;',
    lightgoldenrodyellow: 'stroke-color:lightgoldenrodyellow;',
    lightgray: 'stroke-color:lightgray;',
    lightgreen: 'stroke-color:lightgreen;',
    lightgrey: 'stroke-color:lightgrey;',
    lightpink: 'stroke-color:lightpink;',
    lightsalmon: 'stroke-color:lightsalmon;',
    lightseagreen: 'stroke-color:lightseagreen;',
    lightskyblue: 'stroke-color:lightskyblue;',
    lightslategray: 'stroke-color:lightslategray;',
    lightslategrey: 'stroke-color:lightslategrey;',
    lightsteelblue: 'stroke-color:lightsteelblue;',
    lightyellow: 'stroke-color:lightyellow;',
    lime: 'stroke-color:lime;',
    limegreen: 'stroke-color:limegreen;',
    linen: 'stroke-color:linen;',
    magenta: 'stroke-color:magenta;',
    maroon: 'stroke-color:maroon;',
    mediumaquamarine: 'stroke-color:mediumaquamarine;',
    mediumblue: 'stroke-color:mediumblue;',
    mediumorchid: 'stroke-color:mediumorchid;',
    mediumpurple: 'stroke-color:mediumpurple;',
    mediumseagreen: 'stroke-color:mediumseagreen;',
    mediumslateblue: 'stroke-color:mediumslateblue;',
    mediumspringgreen: 'stroke-color:mediumspringgreen;',
    mediumturquoise: 'stroke-color:mediumturquoise;',
    mediumvioletred: 'stroke-color:mediumvioletred;',
    midnightblue: 'stroke-color:midnightblue;',
    mintcream: 'stroke-color:mintcream;',
    mistyrose: 'stroke-color:mistyrose;',
    moccasin: 'stroke-color:moccasin;',
    navajowhite: 'stroke-color:navajowhite;',
    navy: 'stroke-color:navy;',
    oldlace: 'stroke-color:oldlace;',
    olive: 'stroke-color:olive;',
    olivedrab: 'stroke-color:olivedrab;',
    orange: 'stroke-color:orange;',
    orangered: 'stroke-color:orangered;',
    orchid: 'stroke-color:orchid;',
    palegoldenrod: 'stroke-color:palegoldenrod;',
    palegreen: 'stroke-color:palegreen;',
    paleturquoise: 'stroke-color:paleturquoise;',
    palevioletred: 'stroke-color:palevioletred;',
    papayawhip: 'stroke-color:papayawhip;',
    peachpuff: 'stroke-color:peachpuff;',
    peru: 'stroke-color:peru;',
    pink: 'stroke-color:pink;',
    plum: 'stroke-color:plum;',
    powderblue: 'stroke-color:powderblue;',
    purple: 'stroke-color:purple;',
    rebeccapurple: 'stroke-color:rebeccapurple;',
    red: 'stroke-color:red;',
    revert: 'stroke-color:revert;',
    revertLayer: 'stroke-color:revert-layer;',
    rosybrown: 'stroke-color:rosybrown;',
    royalblue: 'stroke-color:royalblue;',
    saddlebrown: 'stroke-color:saddlebrown;',
    salmon: 'stroke-color:salmon;',
    sandybrown: 'stroke-color:sandybrown;',
    seagreen: 'stroke-color:seagreen;',
    seashell: 'stroke-color:seashell;',
    sienna: 'stroke-color:sienna;',
    silver: 'stroke-color:silver;',
    skyblue: 'stroke-color:skyblue;',
    slateblue: 'stroke-color:slateblue;',
    slategray: 'stroke-color:slategray;',
    slategrey: 'stroke-color:slategrey;',
    snow: 'stroke-color:snow;',
    springgreen: 'stroke-color:springgreen;',
    steelblue: 'stroke-color:steelblue;',
    tan: 'stroke-color:tan;',
    teal: 'stroke-color:teal;',
    thistle: 'stroke-color:thistle;',
    tomato: 'stroke-color:tomato;',
    transparent: 'stroke-color:transparent;',
    turquoise: 'stroke-color:turquoise;',
    unset: 'stroke-color:unset;',
    violet: 'stroke-color:violet;',
    wheat: 'stroke-color:wheat;',
    white: 'stroke-color:white;',
    whitesmoke: 'stroke-color:whitesmoke;',
    yellow: 'stroke-color:yellow;',
    yellowgreen: 'stroke-color:yellowgreen;',
  } as const;
}

type StrokeColorCssKeywords = Readonly<ReturnType<typeof strokeColorKeywords>>;
export interface StrokeColorCss extends StrokeColorCssKeywords {}
/** CSS 属性 stroke-color；初始值 transparent。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
 */
export class StrokeColorCss extends CssProperty<Property.StrokeColor> {
  constructor() {
    super('stroke-color');
    initializeStrokeColorCss();
  }
}
let strokeColorReady = false;
function initializeStrokeColorCss(): void {
  if (strokeColorReady) return;
  Object.assign(StrokeColorCss.prototype, strokeColorKeywords());
  Object.freeze(StrokeColorCss.prototype);
  strokeColorReady = true;
}

function strokeDasharrayKeywords() {
  return {
    inherit: 'stroke-dasharray:inherit;',
    initial: 'stroke-dasharray:initial;',
    none: 'stroke-dasharray:none;',
    revert: 'stroke-dasharray:revert;',
    revertLayer: 'stroke-dasharray:revert-layer;',
    unset: 'stroke-dasharray:unset;',
  } as const;
}

type StrokeDasharrayCssKeywords = Readonly<ReturnType<typeof strokeDasharrayKeywords>>;
export interface StrokeDasharrayCss extends StrokeDasharrayCssKeywords {}
/** CSS 属性 stroke-dasharray；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
 */
export class StrokeDasharrayCss extends LengthCssProperty<Property.StrokeDasharray> {
  constructor() {
    super('stroke-dasharray');
    initializeStrokeDasharrayCss();
  }
}
let strokeDasharrayReady = false;
function initializeStrokeDasharrayCss(): void {
  if (strokeDasharrayReady) return;
  Object.assign(StrokeDasharrayCss.prototype, strokeDasharrayKeywords());
  Object.freeze(StrokeDasharrayCss.prototype);
  strokeDasharrayReady = true;
}

function strokeDashoffsetKeywords() {
  return {
    inherit: 'stroke-dashoffset:inherit;',
    initial: 'stroke-dashoffset:initial;',
    revert: 'stroke-dashoffset:revert;',
    revertLayer: 'stroke-dashoffset:revert-layer;',
    unset: 'stroke-dashoffset:unset;',
  } as const;
}

type StrokeDashoffsetCssKeywords = Readonly<ReturnType<typeof strokeDashoffsetKeywords>>;
export interface StrokeDashoffsetCss extends StrokeDashoffsetCssKeywords {}
/** CSS 属性 stroke-dashoffset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
 */
export class StrokeDashoffsetCss extends LengthCssProperty<Property.StrokeDashoffset> {
  constructor() {
    super('stroke-dashoffset');
    initializeStrokeDashoffsetCss();
  }
}
let strokeDashoffsetReady = false;
function initializeStrokeDashoffsetCss(): void {
  if (strokeDashoffsetReady) return;
  Object.assign(StrokeDashoffsetCss.prototype, strokeDashoffsetKeywords());
  Object.freeze(StrokeDashoffsetCss.prototype);
  strokeDashoffsetReady = true;
}

function strokeLinecapKeywords() {
  return {
    butt: 'stroke-linecap:butt;',
    inherit: 'stroke-linecap:inherit;',
    initial: 'stroke-linecap:initial;',
    revert: 'stroke-linecap:revert;',
    revertLayer: 'stroke-linecap:revert-layer;',
    round: 'stroke-linecap:round;',
    square: 'stroke-linecap:square;',
    unset: 'stroke-linecap:unset;',
  } as const;
}

type StrokeLinecapCssKeywords = Readonly<ReturnType<typeof strokeLinecapKeywords>>;
export interface StrokeLinecapCss extends StrokeLinecapCssKeywords {}
/** CSS 属性 stroke-linecap；初始值 butt。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
 */
export class StrokeLinecapCss extends CssProperty<Property.StrokeLinecap> {
  constructor() {
    super('stroke-linecap');
    initializeStrokeLinecapCss();
  }
}
let strokeLinecapReady = false;
function initializeStrokeLinecapCss(): void {
  if (strokeLinecapReady) return;
  Object.assign(StrokeLinecapCss.prototype, strokeLinecapKeywords());
  Object.freeze(StrokeLinecapCss.prototype);
  strokeLinecapReady = true;
}

function strokeLinejoinKeywords() {
  return {
    arcs: 'stroke-linejoin:arcs;',
    bevel: 'stroke-linejoin:bevel;',
    inherit: 'stroke-linejoin:inherit;',
    initial: 'stroke-linejoin:initial;',
    miter: 'stroke-linejoin:miter;',
    miterClip: 'stroke-linejoin:miter-clip;',
    revert: 'stroke-linejoin:revert;',
    revertLayer: 'stroke-linejoin:revert-layer;',
    round: 'stroke-linejoin:round;',
    unset: 'stroke-linejoin:unset;',
  } as const;
}

type StrokeLinejoinCssKeywords = Readonly<ReturnType<typeof strokeLinejoinKeywords>>;
export interface StrokeLinejoinCss extends StrokeLinejoinCssKeywords {}
/** CSS 属性 stroke-linejoin；初始值 miter。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
 */
export class StrokeLinejoinCss extends CssProperty<Property.StrokeLinejoin> {
  constructor() {
    super('stroke-linejoin');
    initializeStrokeLinejoinCss();
  }
}
let strokeLinejoinReady = false;
function initializeStrokeLinejoinCss(): void {
  if (strokeLinejoinReady) return;
  Object.assign(StrokeLinejoinCss.prototype, strokeLinejoinKeywords());
  Object.freeze(StrokeLinejoinCss.prototype);
  strokeLinejoinReady = true;
}

function strokeMiterlimitKeywords() {
  return {
    inherit: 'stroke-miterlimit:inherit;',
    initial: 'stroke-miterlimit:initial;',
    revert: 'stroke-miterlimit:revert;',
    revertLayer: 'stroke-miterlimit:revert-layer;',
    unset: 'stroke-miterlimit:unset;',
  } as const;
}

type StrokeMiterlimitCssKeywords = Readonly<ReturnType<typeof strokeMiterlimitKeywords>>;
export interface StrokeMiterlimitCss extends StrokeMiterlimitCssKeywords {}
/** CSS 属性 stroke-miterlimit；初始值 4。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
 */
export class StrokeMiterlimitCss extends CssProperty<Property.StrokeMiterlimit> {
  constructor() {
    super('stroke-miterlimit');
    initializeStrokeMiterlimitCss();
  }
}
let strokeMiterlimitReady = false;
function initializeStrokeMiterlimitCss(): void {
  if (strokeMiterlimitReady) return;
  Object.assign(StrokeMiterlimitCss.prototype, strokeMiterlimitKeywords());
  Object.freeze(StrokeMiterlimitCss.prototype);
  strokeMiterlimitReady = true;
}

function strokeOpacityKeywords() {
  return {
    inherit: 'stroke-opacity:inherit;',
    initial: 'stroke-opacity:initial;',
    revert: 'stroke-opacity:revert;',
    revertLayer: 'stroke-opacity:revert-layer;',
    unset: 'stroke-opacity:unset;',
  } as const;
}

type StrokeOpacityCssKeywords = Readonly<ReturnType<typeof strokeOpacityKeywords>>;
export interface StrokeOpacityCss extends StrokeOpacityCssKeywords {}
/** CSS 属性 stroke-opacity；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
 */
export class StrokeOpacityCss extends CssProperty<Property.StrokeOpacity> {
  constructor() {
    super('stroke-opacity');
    initializeStrokeOpacityCss();
  }
}
let strokeOpacityReady = false;
function initializeStrokeOpacityCss(): void {
  if (strokeOpacityReady) return;
  Object.assign(StrokeOpacityCss.prototype, strokeOpacityKeywords());
  Object.freeze(StrokeOpacityCss.prototype);
  strokeOpacityReady = true;
}

function strokeWidthKeywords() {
  return {
    inherit: 'stroke-width:inherit;',
    initial: 'stroke-width:initial;',
    revert: 'stroke-width:revert;',
    revertLayer: 'stroke-width:revert-layer;',
    unset: 'stroke-width:unset;',
  } as const;
}

type StrokeWidthCssKeywords = Readonly<ReturnType<typeof strokeWidthKeywords>>;
export interface StrokeWidthCss extends StrokeWidthCssKeywords {}
/** CSS 属性 stroke-width；初始值 1px。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
 */
export class StrokeWidthCss extends LengthCssProperty<Property.StrokeWidth> {
  constructor() {
    super('stroke-width');
    initializeStrokeWidthCss();
  }
}
let strokeWidthReady = false;
function initializeStrokeWidthCss(): void {
  if (strokeWidthReady) return;
  Object.assign(StrokeWidthCss.prototype, strokeWidthKeywords());
  Object.freeze(StrokeWidthCss.prototype);
  strokeWidthReady = true;
}

function tabSizeKeywords() {
  return {
    inherit: 'tab-size:inherit;',
    initial: 'tab-size:initial;',
    revert: 'tab-size:revert;',
    revertLayer: 'tab-size:revert-layer;',
    unset: 'tab-size:unset;',
  } as const;
}

type TabSizeCssKeywords = Readonly<ReturnType<typeof tabSizeKeywords>>;
export interface TabSizeCss extends TabSizeCssKeywords {}
/** CSS 属性 tab-size；初始值 8。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
 */
export class TabSizeCss extends LengthCssProperty<Property.TabSize> {
  constructor() {
    super('tab-size');
    initializeTabSizeCss();
  }
}
let tabSizeReady = false;
function initializeTabSizeCss(): void {
  if (tabSizeReady) return;
  Object.assign(TabSizeCss.prototype, tabSizeKeywords());
  Object.freeze(TabSizeCss.prototype);
  tabSizeReady = true;
}

function tableLayoutKeywords() {
  return {
    auto: 'table-layout:auto;',
    fixed: 'table-layout:fixed;',
    inherit: 'table-layout:inherit;',
    initial: 'table-layout:initial;',
    revert: 'table-layout:revert;',
    revertLayer: 'table-layout:revert-layer;',
    unset: 'table-layout:unset;',
  } as const;
}

type TableLayoutCssKeywords = Readonly<ReturnType<typeof tableLayoutKeywords>>;
export interface TableLayoutCss extends TableLayoutCssKeywords {}
/** CSS 属性 table-layout；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
 */
export class TableLayoutCss extends CssProperty<Property.TableLayout> {
  constructor() {
    super('table-layout');
    initializeTableLayoutCss();
  }
}
let tableLayoutReady = false;
function initializeTableLayoutCss(): void {
  if (tableLayoutReady) return;
  Object.assign(TableLayoutCss.prototype, tableLayoutKeywords());
  Object.freeze(TableLayoutCss.prototype);
  tableLayoutReady = true;
}

function textAlignKeywords() {
  return {
    KhtmlCenter: 'text-align:-khtml-center;',
    KhtmlLeft: 'text-align:-khtml-left;',
    KhtmlRight: 'text-align:-khtml-right;',
    center: 'text-align:center;',
    end: 'text-align:end;',
    inherit: 'text-align:inherit;',
    initial: 'text-align:initial;',
    justify: 'text-align:justify;',
    left: 'text-align:left;',
    matchParent: 'text-align:match-parent;',
    revert: 'text-align:revert;',
    revertLayer: 'text-align:revert-layer;',
    right: 'text-align:right;',
    start: 'text-align:start;',
    unset: 'text-align:unset;',
  } as const;
}

type TextAlignCssKeywords = Readonly<ReturnType<typeof textAlignKeywords>>;
export interface TextAlignCss extends TextAlignCssKeywords {}
/** CSS 属性 text-align；初始值 start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
 */
export class TextAlignCss extends CssProperty<Property.TextAlign> {
  constructor() {
    super('text-align');
    initializeTextAlignCss();
  }
}
let textAlignReady = false;
function initializeTextAlignCss(): void {
  if (textAlignReady) return;
  Object.assign(TextAlignCss.prototype, textAlignKeywords());
  Object.freeze(TextAlignCss.prototype);
  textAlignReady = true;
}

function textAlignLastKeywords() {
  return {
    auto: 'text-align-last:auto;',
    center: 'text-align-last:center;',
    end: 'text-align-last:end;',
    inherit: 'text-align-last:inherit;',
    initial: 'text-align-last:initial;',
    justify: 'text-align-last:justify;',
    left: 'text-align-last:left;',
    revert: 'text-align-last:revert;',
    revertLayer: 'text-align-last:revert-layer;',
    right: 'text-align-last:right;',
    start: 'text-align-last:start;',
    unset: 'text-align-last:unset;',
  } as const;
}

type TextAlignLastCssKeywords = Readonly<ReturnType<typeof textAlignLastKeywords>>;
export interface TextAlignLastCss extends TextAlignLastCssKeywords {}
/** CSS 属性 text-align-last；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
 */
export class TextAlignLastCss extends CssProperty<Property.TextAlignLast> {
  constructor() {
    super('text-align-last');
    initializeTextAlignLastCss();
  }
}
let textAlignLastReady = false;
function initializeTextAlignLastCss(): void {
  if (textAlignLastReady) return;
  Object.assign(TextAlignLastCss.prototype, textAlignLastKeywords());
  Object.freeze(TextAlignLastCss.prototype);
  textAlignLastReady = true;
}

function textAnchorKeywords() {
  return {
    end: 'text-anchor:end;',
    inherit: 'text-anchor:inherit;',
    initial: 'text-anchor:initial;',
    middle: 'text-anchor:middle;',
    revert: 'text-anchor:revert;',
    revertLayer: 'text-anchor:revert-layer;',
    start: 'text-anchor:start;',
    unset: 'text-anchor:unset;',
  } as const;
}

type TextAnchorCssKeywords = Readonly<ReturnType<typeof textAnchorKeywords>>;
export interface TextAnchorCss extends TextAnchorCssKeywords {}
/** CSS 属性 text-anchor；初始值 start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
 */
export class TextAnchorCss extends CssProperty<Property.TextAnchor> {
  constructor() {
    super('text-anchor');
    initializeTextAnchorCss();
  }
}
let textAnchorReady = false;
function initializeTextAnchorCss(): void {
  if (textAnchorReady) return;
  Object.assign(TextAnchorCss.prototype, textAnchorKeywords());
  Object.freeze(TextAnchorCss.prototype);
  textAnchorReady = true;
}

function textAutospaceKeywords() {
  return {
    auto: 'text-autospace:auto;',
    ideographAlpha: 'text-autospace:ideograph-alpha;',
    ideographNumeric: 'text-autospace:ideograph-numeric;',
    inherit: 'text-autospace:inherit;',
    initial: 'text-autospace:initial;',
    insert: 'text-autospace:insert;',
    noAutospace: 'text-autospace:no-autospace;',
    normal: 'text-autospace:normal;',
    punctuation: 'text-autospace:punctuation;',
    replace: 'text-autospace:replace;',
    revert: 'text-autospace:revert;',
    revertLayer: 'text-autospace:revert-layer;',
    unset: 'text-autospace:unset;',
  } as const;
}

type TextAutospaceCssKeywords = Readonly<ReturnType<typeof textAutospaceKeywords>>;
export interface TextAutospaceCss extends TextAutospaceCssKeywords {}
/** CSS 属性 text-autospace；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
 */
export class TextAutospaceCss extends CssProperty<Property.TextAutospace> {
  constructor() {
    super('text-autospace');
    initializeTextAutospaceCss();
  }
}
let textAutospaceReady = false;
function initializeTextAutospaceCss(): void {
  if (textAutospaceReady) return;
  Object.assign(TextAutospaceCss.prototype, textAutospaceKeywords());
  Object.freeze(TextAutospaceCss.prototype);
  textAutospaceReady = true;
}

function textBoxKeywords() {
  return {
    auto: 'text-box:auto;',
    cap: 'text-box:cap;',
    ex: 'text-box:ex;',
    ideographic: 'text-box:ideographic;',
    ideographicInk: 'text-box:ideographic-ink;',
    inherit: 'text-box:inherit;',
    initial: 'text-box:initial;',
    none: 'text-box:none;',
    normal: 'text-box:normal;',
    revert: 'text-box:revert;',
    revertLayer: 'text-box:revert-layer;',
    text: 'text-box:text;',
    trimBoth: 'text-box:trim-both;',
    trimEnd: 'text-box:trim-end;',
    trimStart: 'text-box:trim-start;',
    unset: 'text-box:unset;',
  } as const;
}

type TextBoxCssKeywords = Readonly<ReturnType<typeof textBoxKeywords>>;
export interface TextBoxCss extends TextBoxCssKeywords {}
/** CSS 属性 text-box；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
 */
export class TextBoxCss extends CssProperty<Property.TextBox> {
  constructor() {
    super('text-box');
    initializeTextBoxCss();
  }
}
let textBoxReady = false;
function initializeTextBoxCss(): void {
  if (textBoxReady) return;
  Object.assign(TextBoxCss.prototype, textBoxKeywords());
  Object.freeze(TextBoxCss.prototype);
  textBoxReady = true;
}

function textBoxEdgeKeywords() {
  return {
    auto: 'text-box-edge:auto;',
    cap: 'text-box-edge:cap;',
    ex: 'text-box-edge:ex;',
    ideographic: 'text-box-edge:ideographic;',
    ideographicInk: 'text-box-edge:ideographic-ink;',
    inherit: 'text-box-edge:inherit;',
    initial: 'text-box-edge:initial;',
    revert: 'text-box-edge:revert;',
    revertLayer: 'text-box-edge:revert-layer;',
    text: 'text-box-edge:text;',
    unset: 'text-box-edge:unset;',
  } as const;
}

type TextBoxEdgeCssKeywords = Readonly<ReturnType<typeof textBoxEdgeKeywords>>;
export interface TextBoxEdgeCss extends TextBoxEdgeCssKeywords {}
/** CSS 属性 text-box-edge；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
 */
export class TextBoxEdgeCss extends CssProperty<Property.TextBoxEdge> {
  constructor() {
    super('text-box-edge');
    initializeTextBoxEdgeCss();
  }
}
let textBoxEdgeReady = false;
function initializeTextBoxEdgeCss(): void {
  if (textBoxEdgeReady) return;
  Object.assign(TextBoxEdgeCss.prototype, textBoxEdgeKeywords());
  Object.freeze(TextBoxEdgeCss.prototype);
  textBoxEdgeReady = true;
}

function textBoxTrimKeywords() {
  return {
    inherit: 'text-box-trim:inherit;',
    initial: 'text-box-trim:initial;',
    none: 'text-box-trim:none;',
    revert: 'text-box-trim:revert;',
    revertLayer: 'text-box-trim:revert-layer;',
    trimBoth: 'text-box-trim:trim-both;',
    trimEnd: 'text-box-trim:trim-end;',
    trimStart: 'text-box-trim:trim-start;',
    unset: 'text-box-trim:unset;',
  } as const;
}

type TextBoxTrimCssKeywords = Readonly<ReturnType<typeof textBoxTrimKeywords>>;
export interface TextBoxTrimCss extends TextBoxTrimCssKeywords {}
/** CSS 属性 text-box-trim；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
 */
export class TextBoxTrimCss extends CssProperty<Property.TextBoxTrim> {
  constructor() {
    super('text-box-trim');
    initializeTextBoxTrimCss();
  }
}
let textBoxTrimReady = false;
function initializeTextBoxTrimCss(): void {
  if (textBoxTrimReady) return;
  Object.assign(TextBoxTrimCss.prototype, textBoxTrimKeywords());
  Object.freeze(TextBoxTrimCss.prototype);
  textBoxTrimReady = true;
}

function textCombineUprightKeywords() {
  return {
    all: 'text-combine-upright:all;',
    digits: 'text-combine-upright:digits;',
    inherit: 'text-combine-upright:inherit;',
    initial: 'text-combine-upright:initial;',
    none: 'text-combine-upright:none;',
    revert: 'text-combine-upright:revert;',
    revertLayer: 'text-combine-upright:revert-layer;',
    unset: 'text-combine-upright:unset;',
  } as const;
}

type TextCombineUprightCssKeywords = Readonly<ReturnType<typeof textCombineUprightKeywords>>;
export interface TextCombineUprightCss extends TextCombineUprightCssKeywords {}
/** CSS 属性 text-combine-upright；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
 */
export class TextCombineUprightCss extends CssProperty<Property.TextCombineUpright> {
  constructor() {
    super('text-combine-upright');
    initializeTextCombineUprightCss();
  }
}
let textCombineUprightReady = false;
function initializeTextCombineUprightCss(): void {
  if (textCombineUprightReady) return;
  Object.assign(TextCombineUprightCss.prototype, textCombineUprightKeywords());
  Object.freeze(TextCombineUprightCss.prototype);
  textCombineUprightReady = true;
}

function textDecorationKeywords() {
  return {
    AccentColor: 'text-decoration:AccentColor;',
    AccentColorText: 'text-decoration:AccentColorText;',
    ActiveBorder: 'text-decoration:ActiveBorder;',
    ActiveCaption: 'text-decoration:ActiveCaption;',
    ActiveText: 'text-decoration:ActiveText;',
    AppWorkspace: 'text-decoration:AppWorkspace;',
    Background: 'text-decoration:Background;',
    ButtonBorder: 'text-decoration:ButtonBorder;',
    ButtonFace: 'text-decoration:ButtonFace;',
    ButtonHighlight: 'text-decoration:ButtonHighlight;',
    ButtonShadow: 'text-decoration:ButtonShadow;',
    ButtonText: 'text-decoration:ButtonText;',
    Canvas: 'text-decoration:Canvas;',
    CanvasText: 'text-decoration:CanvasText;',
    CaptionText: 'text-decoration:CaptionText;',
    Field: 'text-decoration:Field;',
    FieldText: 'text-decoration:FieldText;',
    GrayText: 'text-decoration:GrayText;',
    Highlight: 'text-decoration:Highlight;',
    HighlightText: 'text-decoration:HighlightText;',
    InactiveBorder: 'text-decoration:InactiveBorder;',
    InactiveCaption: 'text-decoration:InactiveCaption;',
    InactiveCaptionText: 'text-decoration:InactiveCaptionText;',
    InfoBackground: 'text-decoration:InfoBackground;',
    InfoText: 'text-decoration:InfoText;',
    LinkText: 'text-decoration:LinkText;',
    Mark: 'text-decoration:Mark;',
    MarkText: 'text-decoration:MarkText;',
    Menu: 'text-decoration:Menu;',
    MenuText: 'text-decoration:MenuText;',
    Scrollbar: 'text-decoration:Scrollbar;',
    SelectedItem: 'text-decoration:SelectedItem;',
    SelectedItemText: 'text-decoration:SelectedItemText;',
    ThreeDDarkShadow: 'text-decoration:ThreeDDarkShadow;',
    ThreeDFace: 'text-decoration:ThreeDFace;',
    ThreeDHighlight: 'text-decoration:ThreeDHighlight;',
    ThreeDLightShadow: 'text-decoration:ThreeDLightShadow;',
    ThreeDShadow: 'text-decoration:ThreeDShadow;',
    VisitedText: 'text-decoration:VisitedText;',
    Window: 'text-decoration:Window;',
    WindowFrame: 'text-decoration:WindowFrame;',
    WindowText: 'text-decoration:WindowText;',
    aliceblue: 'text-decoration:aliceblue;',
    antiquewhite: 'text-decoration:antiquewhite;',
    aqua: 'text-decoration:aqua;',
    aquamarine: 'text-decoration:aquamarine;',
    auto: 'text-decoration:auto;',
    azure: 'text-decoration:azure;',
    beige: 'text-decoration:beige;',
    bisque: 'text-decoration:bisque;',
    black: 'text-decoration:black;',
    blanchedalmond: 'text-decoration:blanchedalmond;',
    blink: 'text-decoration:blink;',
    blue: 'text-decoration:blue;',
    blueviolet: 'text-decoration:blueviolet;',
    brown: 'text-decoration:brown;',
    burlywood: 'text-decoration:burlywood;',
    cadetblue: 'text-decoration:cadetblue;',
    chartreuse: 'text-decoration:chartreuse;',
    chocolate: 'text-decoration:chocolate;',
    coral: 'text-decoration:coral;',
    cornflowerblue: 'text-decoration:cornflowerblue;',
    cornsilk: 'text-decoration:cornsilk;',
    crimson: 'text-decoration:crimson;',
    currentColor: 'text-decoration:currentColor;',
    cyan: 'text-decoration:cyan;',
    darkblue: 'text-decoration:darkblue;',
    darkcyan: 'text-decoration:darkcyan;',
    darkgoldenrod: 'text-decoration:darkgoldenrod;',
    darkgray: 'text-decoration:darkgray;',
    darkgreen: 'text-decoration:darkgreen;',
    darkgrey: 'text-decoration:darkgrey;',
    darkkhaki: 'text-decoration:darkkhaki;',
    darkmagenta: 'text-decoration:darkmagenta;',
    darkolivegreen: 'text-decoration:darkolivegreen;',
    darkorange: 'text-decoration:darkorange;',
    darkorchid: 'text-decoration:darkorchid;',
    darkred: 'text-decoration:darkred;',
    darksalmon: 'text-decoration:darksalmon;',
    darkseagreen: 'text-decoration:darkseagreen;',
    darkslateblue: 'text-decoration:darkslateblue;',
    darkslategray: 'text-decoration:darkslategray;',
    darkslategrey: 'text-decoration:darkslategrey;',
    darkturquoise: 'text-decoration:darkturquoise;',
    darkviolet: 'text-decoration:darkviolet;',
    dashed: 'text-decoration:dashed;',
    deeppink: 'text-decoration:deeppink;',
    deepskyblue: 'text-decoration:deepskyblue;',
    dimgray: 'text-decoration:dimgray;',
    dimgrey: 'text-decoration:dimgrey;',
    dodgerblue: 'text-decoration:dodgerblue;',
    dotted: 'text-decoration:dotted;',
    double: 'text-decoration:double;',
    firebrick: 'text-decoration:firebrick;',
    floralwhite: 'text-decoration:floralwhite;',
    forestgreen: 'text-decoration:forestgreen;',
    fromFont: 'text-decoration:from-font;',
    fuchsia: 'text-decoration:fuchsia;',
    gainsboro: 'text-decoration:gainsboro;',
    ghostwhite: 'text-decoration:ghostwhite;',
    gold: 'text-decoration:gold;',
    goldenrod: 'text-decoration:goldenrod;',
    grammarError: 'text-decoration:grammar-error;',
    gray: 'text-decoration:gray;',
    green: 'text-decoration:green;',
    greenyellow: 'text-decoration:greenyellow;',
    grey: 'text-decoration:grey;',
    honeydew: 'text-decoration:honeydew;',
    hotpink: 'text-decoration:hotpink;',
    indianred: 'text-decoration:indianred;',
    indigo: 'text-decoration:indigo;',
    inherit: 'text-decoration:inherit;',
    initial: 'text-decoration:initial;',
    ivory: 'text-decoration:ivory;',
    khaki: 'text-decoration:khaki;',
    lavender: 'text-decoration:lavender;',
    lavenderblush: 'text-decoration:lavenderblush;',
    lawngreen: 'text-decoration:lawngreen;',
    lemonchiffon: 'text-decoration:lemonchiffon;',
    lightblue: 'text-decoration:lightblue;',
    lightcoral: 'text-decoration:lightcoral;',
    lightcyan: 'text-decoration:lightcyan;',
    lightgoldenrodyellow: 'text-decoration:lightgoldenrodyellow;',
    lightgray: 'text-decoration:lightgray;',
    lightgreen: 'text-decoration:lightgreen;',
    lightgrey: 'text-decoration:lightgrey;',
    lightpink: 'text-decoration:lightpink;',
    lightsalmon: 'text-decoration:lightsalmon;',
    lightseagreen: 'text-decoration:lightseagreen;',
    lightskyblue: 'text-decoration:lightskyblue;',
    lightslategray: 'text-decoration:lightslategray;',
    lightslategrey: 'text-decoration:lightslategrey;',
    lightsteelblue: 'text-decoration:lightsteelblue;',
    lightyellow: 'text-decoration:lightyellow;',
    lime: 'text-decoration:lime;',
    limegreen: 'text-decoration:limegreen;',
    lineThrough: 'text-decoration:line-through;',
    linen: 'text-decoration:linen;',
    magenta: 'text-decoration:magenta;',
    maroon: 'text-decoration:maroon;',
    mediumaquamarine: 'text-decoration:mediumaquamarine;',
    mediumblue: 'text-decoration:mediumblue;',
    mediumorchid: 'text-decoration:mediumorchid;',
    mediumpurple: 'text-decoration:mediumpurple;',
    mediumseagreen: 'text-decoration:mediumseagreen;',
    mediumslateblue: 'text-decoration:mediumslateblue;',
    mediumspringgreen: 'text-decoration:mediumspringgreen;',
    mediumturquoise: 'text-decoration:mediumturquoise;',
    mediumvioletred: 'text-decoration:mediumvioletred;',
    midnightblue: 'text-decoration:midnightblue;',
    mintcream: 'text-decoration:mintcream;',
    mistyrose: 'text-decoration:mistyrose;',
    moccasin: 'text-decoration:moccasin;',
    navajowhite: 'text-decoration:navajowhite;',
    navy: 'text-decoration:navy;',
    none: 'text-decoration:none;',
    oldlace: 'text-decoration:oldlace;',
    olive: 'text-decoration:olive;',
    olivedrab: 'text-decoration:olivedrab;',
    orange: 'text-decoration:orange;',
    orangered: 'text-decoration:orangered;',
    orchid: 'text-decoration:orchid;',
    overline: 'text-decoration:overline;',
    palegoldenrod: 'text-decoration:palegoldenrod;',
    palegreen: 'text-decoration:palegreen;',
    paleturquoise: 'text-decoration:paleturquoise;',
    palevioletred: 'text-decoration:palevioletred;',
    papayawhip: 'text-decoration:papayawhip;',
    peachpuff: 'text-decoration:peachpuff;',
    peru: 'text-decoration:peru;',
    pink: 'text-decoration:pink;',
    plum: 'text-decoration:plum;',
    powderblue: 'text-decoration:powderblue;',
    purple: 'text-decoration:purple;',
    rebeccapurple: 'text-decoration:rebeccapurple;',
    red: 'text-decoration:red;',
    revert: 'text-decoration:revert;',
    revertLayer: 'text-decoration:revert-layer;',
    rosybrown: 'text-decoration:rosybrown;',
    royalblue: 'text-decoration:royalblue;',
    saddlebrown: 'text-decoration:saddlebrown;',
    salmon: 'text-decoration:salmon;',
    sandybrown: 'text-decoration:sandybrown;',
    seagreen: 'text-decoration:seagreen;',
    seashell: 'text-decoration:seashell;',
    sienna: 'text-decoration:sienna;',
    silver: 'text-decoration:silver;',
    skyblue: 'text-decoration:skyblue;',
    slateblue: 'text-decoration:slateblue;',
    slategray: 'text-decoration:slategray;',
    slategrey: 'text-decoration:slategrey;',
    snow: 'text-decoration:snow;',
    solid: 'text-decoration:solid;',
    spellingError: 'text-decoration:spelling-error;',
    springgreen: 'text-decoration:springgreen;',
    steelblue: 'text-decoration:steelblue;',
    tan: 'text-decoration:tan;',
    teal: 'text-decoration:teal;',
    thistle: 'text-decoration:thistle;',
    tomato: 'text-decoration:tomato;',
    transparent: 'text-decoration:transparent;',
    turquoise: 'text-decoration:turquoise;',
    underline: 'text-decoration:underline;',
    unset: 'text-decoration:unset;',
    violet: 'text-decoration:violet;',
    wavy: 'text-decoration:wavy;',
    wheat: 'text-decoration:wheat;',
    white: 'text-decoration:white;',
    whitesmoke: 'text-decoration:whitesmoke;',
    yellow: 'text-decoration:yellow;',
    yellowgreen: 'text-decoration:yellowgreen;',
  } as const;
}

type TextDecorationCssKeywords = Readonly<ReturnType<typeof textDecorationKeywords>>;
export interface TextDecorationCss extends TextDecorationCssKeywords {}
/** CSS 属性 text-decoration。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
 */
export class TextDecorationCss extends LengthCssProperty<Property.TextDecoration> {
  constructor() {
    super('text-decoration');
    initializeTextDecorationCss();
  }
}
let textDecorationReady = false;
function initializeTextDecorationCss(): void {
  if (textDecorationReady) return;
  Object.assign(TextDecorationCss.prototype, textDecorationKeywords());
  Object.freeze(TextDecorationCss.prototype);
  textDecorationReady = true;
}

function textDecorationColorKeywords() {
  return {
    AccentColor: 'text-decoration-color:AccentColor;',
    AccentColorText: 'text-decoration-color:AccentColorText;',
    ActiveBorder: 'text-decoration-color:ActiveBorder;',
    ActiveCaption: 'text-decoration-color:ActiveCaption;',
    ActiveText: 'text-decoration-color:ActiveText;',
    AppWorkspace: 'text-decoration-color:AppWorkspace;',
    Background: 'text-decoration-color:Background;',
    ButtonBorder: 'text-decoration-color:ButtonBorder;',
    ButtonFace: 'text-decoration-color:ButtonFace;',
    ButtonHighlight: 'text-decoration-color:ButtonHighlight;',
    ButtonShadow: 'text-decoration-color:ButtonShadow;',
    ButtonText: 'text-decoration-color:ButtonText;',
    Canvas: 'text-decoration-color:Canvas;',
    CanvasText: 'text-decoration-color:CanvasText;',
    CaptionText: 'text-decoration-color:CaptionText;',
    Field: 'text-decoration-color:Field;',
    FieldText: 'text-decoration-color:FieldText;',
    GrayText: 'text-decoration-color:GrayText;',
    Highlight: 'text-decoration-color:Highlight;',
    HighlightText: 'text-decoration-color:HighlightText;',
    InactiveBorder: 'text-decoration-color:InactiveBorder;',
    InactiveCaption: 'text-decoration-color:InactiveCaption;',
    InactiveCaptionText: 'text-decoration-color:InactiveCaptionText;',
    InfoBackground: 'text-decoration-color:InfoBackground;',
    InfoText: 'text-decoration-color:InfoText;',
    LinkText: 'text-decoration-color:LinkText;',
    Mark: 'text-decoration-color:Mark;',
    MarkText: 'text-decoration-color:MarkText;',
    Menu: 'text-decoration-color:Menu;',
    MenuText: 'text-decoration-color:MenuText;',
    Scrollbar: 'text-decoration-color:Scrollbar;',
    SelectedItem: 'text-decoration-color:SelectedItem;',
    SelectedItemText: 'text-decoration-color:SelectedItemText;',
    ThreeDDarkShadow: 'text-decoration-color:ThreeDDarkShadow;',
    ThreeDFace: 'text-decoration-color:ThreeDFace;',
    ThreeDHighlight: 'text-decoration-color:ThreeDHighlight;',
    ThreeDLightShadow: 'text-decoration-color:ThreeDLightShadow;',
    ThreeDShadow: 'text-decoration-color:ThreeDShadow;',
    VisitedText: 'text-decoration-color:VisitedText;',
    Window: 'text-decoration-color:Window;',
    WindowFrame: 'text-decoration-color:WindowFrame;',
    WindowText: 'text-decoration-color:WindowText;',
    aliceblue: 'text-decoration-color:aliceblue;',
    antiquewhite: 'text-decoration-color:antiquewhite;',
    aqua: 'text-decoration-color:aqua;',
    aquamarine: 'text-decoration-color:aquamarine;',
    azure: 'text-decoration-color:azure;',
    beige: 'text-decoration-color:beige;',
    bisque: 'text-decoration-color:bisque;',
    black: 'text-decoration-color:black;',
    blanchedalmond: 'text-decoration-color:blanchedalmond;',
    blue: 'text-decoration-color:blue;',
    blueviolet: 'text-decoration-color:blueviolet;',
    brown: 'text-decoration-color:brown;',
    burlywood: 'text-decoration-color:burlywood;',
    cadetblue: 'text-decoration-color:cadetblue;',
    chartreuse: 'text-decoration-color:chartreuse;',
    chocolate: 'text-decoration-color:chocolate;',
    coral: 'text-decoration-color:coral;',
    cornflowerblue: 'text-decoration-color:cornflowerblue;',
    cornsilk: 'text-decoration-color:cornsilk;',
    crimson: 'text-decoration-color:crimson;',
    currentColor: 'text-decoration-color:currentColor;',
    cyan: 'text-decoration-color:cyan;',
    darkblue: 'text-decoration-color:darkblue;',
    darkcyan: 'text-decoration-color:darkcyan;',
    darkgoldenrod: 'text-decoration-color:darkgoldenrod;',
    darkgray: 'text-decoration-color:darkgray;',
    darkgreen: 'text-decoration-color:darkgreen;',
    darkgrey: 'text-decoration-color:darkgrey;',
    darkkhaki: 'text-decoration-color:darkkhaki;',
    darkmagenta: 'text-decoration-color:darkmagenta;',
    darkolivegreen: 'text-decoration-color:darkolivegreen;',
    darkorange: 'text-decoration-color:darkorange;',
    darkorchid: 'text-decoration-color:darkorchid;',
    darkred: 'text-decoration-color:darkred;',
    darksalmon: 'text-decoration-color:darksalmon;',
    darkseagreen: 'text-decoration-color:darkseagreen;',
    darkslateblue: 'text-decoration-color:darkslateblue;',
    darkslategray: 'text-decoration-color:darkslategray;',
    darkslategrey: 'text-decoration-color:darkslategrey;',
    darkturquoise: 'text-decoration-color:darkturquoise;',
    darkviolet: 'text-decoration-color:darkviolet;',
    deeppink: 'text-decoration-color:deeppink;',
    deepskyblue: 'text-decoration-color:deepskyblue;',
    dimgray: 'text-decoration-color:dimgray;',
    dimgrey: 'text-decoration-color:dimgrey;',
    dodgerblue: 'text-decoration-color:dodgerblue;',
    firebrick: 'text-decoration-color:firebrick;',
    floralwhite: 'text-decoration-color:floralwhite;',
    forestgreen: 'text-decoration-color:forestgreen;',
    fuchsia: 'text-decoration-color:fuchsia;',
    gainsboro: 'text-decoration-color:gainsboro;',
    ghostwhite: 'text-decoration-color:ghostwhite;',
    gold: 'text-decoration-color:gold;',
    goldenrod: 'text-decoration-color:goldenrod;',
    gray: 'text-decoration-color:gray;',
    green: 'text-decoration-color:green;',
    greenyellow: 'text-decoration-color:greenyellow;',
    grey: 'text-decoration-color:grey;',
    honeydew: 'text-decoration-color:honeydew;',
    hotpink: 'text-decoration-color:hotpink;',
    indianred: 'text-decoration-color:indianred;',
    indigo: 'text-decoration-color:indigo;',
    inherit: 'text-decoration-color:inherit;',
    initial: 'text-decoration-color:initial;',
    ivory: 'text-decoration-color:ivory;',
    khaki: 'text-decoration-color:khaki;',
    lavender: 'text-decoration-color:lavender;',
    lavenderblush: 'text-decoration-color:lavenderblush;',
    lawngreen: 'text-decoration-color:lawngreen;',
    lemonchiffon: 'text-decoration-color:lemonchiffon;',
    lightblue: 'text-decoration-color:lightblue;',
    lightcoral: 'text-decoration-color:lightcoral;',
    lightcyan: 'text-decoration-color:lightcyan;',
    lightgoldenrodyellow: 'text-decoration-color:lightgoldenrodyellow;',
    lightgray: 'text-decoration-color:lightgray;',
    lightgreen: 'text-decoration-color:lightgreen;',
    lightgrey: 'text-decoration-color:lightgrey;',
    lightpink: 'text-decoration-color:lightpink;',
    lightsalmon: 'text-decoration-color:lightsalmon;',
    lightseagreen: 'text-decoration-color:lightseagreen;',
    lightskyblue: 'text-decoration-color:lightskyblue;',
    lightslategray: 'text-decoration-color:lightslategray;',
    lightslategrey: 'text-decoration-color:lightslategrey;',
    lightsteelblue: 'text-decoration-color:lightsteelblue;',
    lightyellow: 'text-decoration-color:lightyellow;',
    lime: 'text-decoration-color:lime;',
    limegreen: 'text-decoration-color:limegreen;',
    linen: 'text-decoration-color:linen;',
    magenta: 'text-decoration-color:magenta;',
    maroon: 'text-decoration-color:maroon;',
    mediumaquamarine: 'text-decoration-color:mediumaquamarine;',
    mediumblue: 'text-decoration-color:mediumblue;',
    mediumorchid: 'text-decoration-color:mediumorchid;',
    mediumpurple: 'text-decoration-color:mediumpurple;',
    mediumseagreen: 'text-decoration-color:mediumseagreen;',
    mediumslateblue: 'text-decoration-color:mediumslateblue;',
    mediumspringgreen: 'text-decoration-color:mediumspringgreen;',
    mediumturquoise: 'text-decoration-color:mediumturquoise;',
    mediumvioletred: 'text-decoration-color:mediumvioletred;',
    midnightblue: 'text-decoration-color:midnightblue;',
    mintcream: 'text-decoration-color:mintcream;',
    mistyrose: 'text-decoration-color:mistyrose;',
    moccasin: 'text-decoration-color:moccasin;',
    navajowhite: 'text-decoration-color:navajowhite;',
    navy: 'text-decoration-color:navy;',
    oldlace: 'text-decoration-color:oldlace;',
    olive: 'text-decoration-color:olive;',
    olivedrab: 'text-decoration-color:olivedrab;',
    orange: 'text-decoration-color:orange;',
    orangered: 'text-decoration-color:orangered;',
    orchid: 'text-decoration-color:orchid;',
    palegoldenrod: 'text-decoration-color:palegoldenrod;',
    palegreen: 'text-decoration-color:palegreen;',
    paleturquoise: 'text-decoration-color:paleturquoise;',
    palevioletred: 'text-decoration-color:palevioletred;',
    papayawhip: 'text-decoration-color:papayawhip;',
    peachpuff: 'text-decoration-color:peachpuff;',
    peru: 'text-decoration-color:peru;',
    pink: 'text-decoration-color:pink;',
    plum: 'text-decoration-color:plum;',
    powderblue: 'text-decoration-color:powderblue;',
    purple: 'text-decoration-color:purple;',
    rebeccapurple: 'text-decoration-color:rebeccapurple;',
    red: 'text-decoration-color:red;',
    revert: 'text-decoration-color:revert;',
    revertLayer: 'text-decoration-color:revert-layer;',
    rosybrown: 'text-decoration-color:rosybrown;',
    royalblue: 'text-decoration-color:royalblue;',
    saddlebrown: 'text-decoration-color:saddlebrown;',
    salmon: 'text-decoration-color:salmon;',
    sandybrown: 'text-decoration-color:sandybrown;',
    seagreen: 'text-decoration-color:seagreen;',
    seashell: 'text-decoration-color:seashell;',
    sienna: 'text-decoration-color:sienna;',
    silver: 'text-decoration-color:silver;',
    skyblue: 'text-decoration-color:skyblue;',
    slateblue: 'text-decoration-color:slateblue;',
    slategray: 'text-decoration-color:slategray;',
    slategrey: 'text-decoration-color:slategrey;',
    snow: 'text-decoration-color:snow;',
    springgreen: 'text-decoration-color:springgreen;',
    steelblue: 'text-decoration-color:steelblue;',
    tan: 'text-decoration-color:tan;',
    teal: 'text-decoration-color:teal;',
    thistle: 'text-decoration-color:thistle;',
    tomato: 'text-decoration-color:tomato;',
    transparent: 'text-decoration-color:transparent;',
    turquoise: 'text-decoration-color:turquoise;',
    unset: 'text-decoration-color:unset;',
    violet: 'text-decoration-color:violet;',
    wheat: 'text-decoration-color:wheat;',
    white: 'text-decoration-color:white;',
    whitesmoke: 'text-decoration-color:whitesmoke;',
    yellow: 'text-decoration-color:yellow;',
    yellowgreen: 'text-decoration-color:yellowgreen;',
  } as const;
}

type TextDecorationColorCssKeywords = Readonly<ReturnType<typeof textDecorationColorKeywords>>;
export interface TextDecorationColorCss extends TextDecorationColorCssKeywords {}
/** CSS 属性 text-decoration-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
 */
export class TextDecorationColorCss extends CssProperty<Property.TextDecorationColor> {
  constructor() {
    super('text-decoration-color');
    initializeTextDecorationColorCss();
  }
}
let textDecorationColorReady = false;
function initializeTextDecorationColorCss(): void {
  if (textDecorationColorReady) return;
  Object.assign(TextDecorationColorCss.prototype, textDecorationColorKeywords());
  Object.freeze(TextDecorationColorCss.prototype);
  textDecorationColorReady = true;
}

function textDecorationLineKeywords() {
  return {
    blink: 'text-decoration-line:blink;',
    grammarError: 'text-decoration-line:grammar-error;',
    inherit: 'text-decoration-line:inherit;',
    initial: 'text-decoration-line:initial;',
    lineThrough: 'text-decoration-line:line-through;',
    none: 'text-decoration-line:none;',
    overline: 'text-decoration-line:overline;',
    revert: 'text-decoration-line:revert;',
    revertLayer: 'text-decoration-line:revert-layer;',
    spellingError: 'text-decoration-line:spelling-error;',
    underline: 'text-decoration-line:underline;',
    unset: 'text-decoration-line:unset;',
  } as const;
}

type TextDecorationLineCssKeywords = Readonly<ReturnType<typeof textDecorationLineKeywords>>;
export interface TextDecorationLineCss extends TextDecorationLineCssKeywords {}
/** CSS 属性 text-decoration-line；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
 */
export class TextDecorationLineCss extends CssProperty<Property.TextDecorationLine> {
  constructor() {
    super('text-decoration-line');
    initializeTextDecorationLineCss();
  }
}
let textDecorationLineReady = false;
function initializeTextDecorationLineCss(): void {
  if (textDecorationLineReady) return;
  Object.assign(TextDecorationLineCss.prototype, textDecorationLineKeywords());
  Object.freeze(TextDecorationLineCss.prototype);
  textDecorationLineReady = true;
}

function textDecorationSkipKeywords() {
  return {
    boxDecoration: 'text-decoration-skip:box-decoration;',
    edges: 'text-decoration-skip:edges;',
    inherit: 'text-decoration-skip:inherit;',
    initial: 'text-decoration-skip:initial;',
    leadingSpaces: 'text-decoration-skip:leading-spaces;',
    none: 'text-decoration-skip:none;',
    objects: 'text-decoration-skip:objects;',
    revert: 'text-decoration-skip:revert;',
    revertLayer: 'text-decoration-skip:revert-layer;',
    spaces: 'text-decoration-skip:spaces;',
    trailingSpaces: 'text-decoration-skip:trailing-spaces;',
    unset: 'text-decoration-skip:unset;',
  } as const;
}

type TextDecorationSkipCssKeywords = Readonly<ReturnType<typeof textDecorationSkipKeywords>>;
export interface TextDecorationSkipCss extends TextDecorationSkipCssKeywords {}
/** CSS 属性 text-decoration-skip；初始值 objects。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
 */
export class TextDecorationSkipCss extends CssProperty<Property.TextDecorationSkip> {
  constructor() {
    super('text-decoration-skip');
    initializeTextDecorationSkipCss();
  }
}
let textDecorationSkipReady = false;
function initializeTextDecorationSkipCss(): void {
  if (textDecorationSkipReady) return;
  Object.assign(TextDecorationSkipCss.prototype, textDecorationSkipKeywords());
  Object.freeze(TextDecorationSkipCss.prototype);
  textDecorationSkipReady = true;
}

function textDecorationSkipInkKeywords() {
  return {
    all: 'text-decoration-skip-ink:all;',
    auto: 'text-decoration-skip-ink:auto;',
    inherit: 'text-decoration-skip-ink:inherit;',
    initial: 'text-decoration-skip-ink:initial;',
    none: 'text-decoration-skip-ink:none;',
    revert: 'text-decoration-skip-ink:revert;',
    revertLayer: 'text-decoration-skip-ink:revert-layer;',
    unset: 'text-decoration-skip-ink:unset;',
  } as const;
}

type TextDecorationSkipInkCssKeywords = Readonly<ReturnType<typeof textDecorationSkipInkKeywords>>;
export interface TextDecorationSkipInkCss extends TextDecorationSkipInkCssKeywords {}
/** CSS 属性 text-decoration-skip-ink；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
 */
export class TextDecorationSkipInkCss extends CssProperty<Property.TextDecorationSkipInk> {
  constructor() {
    super('text-decoration-skip-ink');
    initializeTextDecorationSkipInkCss();
  }
}
let textDecorationSkipInkReady = false;
function initializeTextDecorationSkipInkCss(): void {
  if (textDecorationSkipInkReady) return;
  Object.assign(TextDecorationSkipInkCss.prototype, textDecorationSkipInkKeywords());
  Object.freeze(TextDecorationSkipInkCss.prototype);
  textDecorationSkipInkReady = true;
}

function textDecorationStyleKeywords() {
  return {
    dashed: 'text-decoration-style:dashed;',
    dotted: 'text-decoration-style:dotted;',
    double: 'text-decoration-style:double;',
    inherit: 'text-decoration-style:inherit;',
    initial: 'text-decoration-style:initial;',
    revert: 'text-decoration-style:revert;',
    revertLayer: 'text-decoration-style:revert-layer;',
    solid: 'text-decoration-style:solid;',
    unset: 'text-decoration-style:unset;',
    wavy: 'text-decoration-style:wavy;',
  } as const;
}

type TextDecorationStyleCssKeywords = Readonly<ReturnType<typeof textDecorationStyleKeywords>>;
export interface TextDecorationStyleCss extends TextDecorationStyleCssKeywords {}
/** CSS 属性 text-decoration-style；初始值 solid。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
 */
export class TextDecorationStyleCss extends CssProperty<Property.TextDecorationStyle> {
  constructor() {
    super('text-decoration-style');
    initializeTextDecorationStyleCss();
  }
}
let textDecorationStyleReady = false;
function initializeTextDecorationStyleCss(): void {
  if (textDecorationStyleReady) return;
  Object.assign(TextDecorationStyleCss.prototype, textDecorationStyleKeywords());
  Object.freeze(TextDecorationStyleCss.prototype);
  textDecorationStyleReady = true;
}

function textDecorationThicknessKeywords() {
  return {
    auto: 'text-decoration-thickness:auto;',
    fromFont: 'text-decoration-thickness:from-font;',
    inherit: 'text-decoration-thickness:inherit;',
    initial: 'text-decoration-thickness:initial;',
    revert: 'text-decoration-thickness:revert;',
    revertLayer: 'text-decoration-thickness:revert-layer;',
    unset: 'text-decoration-thickness:unset;',
  } as const;
}

type TextDecorationThicknessCssKeywords = Readonly<
  ReturnType<typeof textDecorationThicknessKeywords>
>;
export interface TextDecorationThicknessCss extends TextDecorationThicknessCssKeywords {}
/** CSS 属性 text-decoration-thickness；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
 */
export class TextDecorationThicknessCss extends LengthCssProperty<Property.TextDecorationThickness> {
  constructor() {
    super('text-decoration-thickness');
    initializeTextDecorationThicknessCss();
  }
}
let textDecorationThicknessReady = false;
function initializeTextDecorationThicknessCss(): void {
  if (textDecorationThicknessReady) return;
  Object.assign(TextDecorationThicknessCss.prototype, textDecorationThicknessKeywords());
  Object.freeze(TextDecorationThicknessCss.prototype);
  textDecorationThicknessReady = true;
}

function textEmphasisKeywords() {
  return {
    AccentColor: 'text-emphasis:AccentColor;',
    AccentColorText: 'text-emphasis:AccentColorText;',
    ActiveBorder: 'text-emphasis:ActiveBorder;',
    ActiveCaption: 'text-emphasis:ActiveCaption;',
    ActiveText: 'text-emphasis:ActiveText;',
    AppWorkspace: 'text-emphasis:AppWorkspace;',
    Background: 'text-emphasis:Background;',
    ButtonBorder: 'text-emphasis:ButtonBorder;',
    ButtonFace: 'text-emphasis:ButtonFace;',
    ButtonHighlight: 'text-emphasis:ButtonHighlight;',
    ButtonShadow: 'text-emphasis:ButtonShadow;',
    ButtonText: 'text-emphasis:ButtonText;',
    Canvas: 'text-emphasis:Canvas;',
    CanvasText: 'text-emphasis:CanvasText;',
    CaptionText: 'text-emphasis:CaptionText;',
    Field: 'text-emphasis:Field;',
    FieldText: 'text-emphasis:FieldText;',
    GrayText: 'text-emphasis:GrayText;',
    Highlight: 'text-emphasis:Highlight;',
    HighlightText: 'text-emphasis:HighlightText;',
    InactiveBorder: 'text-emphasis:InactiveBorder;',
    InactiveCaption: 'text-emphasis:InactiveCaption;',
    InactiveCaptionText: 'text-emphasis:InactiveCaptionText;',
    InfoBackground: 'text-emphasis:InfoBackground;',
    InfoText: 'text-emphasis:InfoText;',
    LinkText: 'text-emphasis:LinkText;',
    Mark: 'text-emphasis:Mark;',
    MarkText: 'text-emphasis:MarkText;',
    Menu: 'text-emphasis:Menu;',
    MenuText: 'text-emphasis:MenuText;',
    Scrollbar: 'text-emphasis:Scrollbar;',
    SelectedItem: 'text-emphasis:SelectedItem;',
    SelectedItemText: 'text-emphasis:SelectedItemText;',
    ThreeDDarkShadow: 'text-emphasis:ThreeDDarkShadow;',
    ThreeDFace: 'text-emphasis:ThreeDFace;',
    ThreeDHighlight: 'text-emphasis:ThreeDHighlight;',
    ThreeDLightShadow: 'text-emphasis:ThreeDLightShadow;',
    ThreeDShadow: 'text-emphasis:ThreeDShadow;',
    VisitedText: 'text-emphasis:VisitedText;',
    Window: 'text-emphasis:Window;',
    WindowFrame: 'text-emphasis:WindowFrame;',
    WindowText: 'text-emphasis:WindowText;',
    aliceblue: 'text-emphasis:aliceblue;',
    antiquewhite: 'text-emphasis:antiquewhite;',
    aqua: 'text-emphasis:aqua;',
    aquamarine: 'text-emphasis:aquamarine;',
    azure: 'text-emphasis:azure;',
    beige: 'text-emphasis:beige;',
    bisque: 'text-emphasis:bisque;',
    black: 'text-emphasis:black;',
    blanchedalmond: 'text-emphasis:blanchedalmond;',
    blue: 'text-emphasis:blue;',
    blueviolet: 'text-emphasis:blueviolet;',
    brown: 'text-emphasis:brown;',
    burlywood: 'text-emphasis:burlywood;',
    cadetblue: 'text-emphasis:cadetblue;',
    chartreuse: 'text-emphasis:chartreuse;',
    chocolate: 'text-emphasis:chocolate;',
    circle: 'text-emphasis:circle;',
    coral: 'text-emphasis:coral;',
    cornflowerblue: 'text-emphasis:cornflowerblue;',
    cornsilk: 'text-emphasis:cornsilk;',
    crimson: 'text-emphasis:crimson;',
    currentColor: 'text-emphasis:currentColor;',
    cyan: 'text-emphasis:cyan;',
    darkblue: 'text-emphasis:darkblue;',
    darkcyan: 'text-emphasis:darkcyan;',
    darkgoldenrod: 'text-emphasis:darkgoldenrod;',
    darkgray: 'text-emphasis:darkgray;',
    darkgreen: 'text-emphasis:darkgreen;',
    darkgrey: 'text-emphasis:darkgrey;',
    darkkhaki: 'text-emphasis:darkkhaki;',
    darkmagenta: 'text-emphasis:darkmagenta;',
    darkolivegreen: 'text-emphasis:darkolivegreen;',
    darkorange: 'text-emphasis:darkorange;',
    darkorchid: 'text-emphasis:darkorchid;',
    darkred: 'text-emphasis:darkred;',
    darksalmon: 'text-emphasis:darksalmon;',
    darkseagreen: 'text-emphasis:darkseagreen;',
    darkslateblue: 'text-emphasis:darkslateblue;',
    darkslategray: 'text-emphasis:darkslategray;',
    darkslategrey: 'text-emphasis:darkslategrey;',
    darkturquoise: 'text-emphasis:darkturquoise;',
    darkviolet: 'text-emphasis:darkviolet;',
    deeppink: 'text-emphasis:deeppink;',
    deepskyblue: 'text-emphasis:deepskyblue;',
    dimgray: 'text-emphasis:dimgray;',
    dimgrey: 'text-emphasis:dimgrey;',
    dodgerblue: 'text-emphasis:dodgerblue;',
    dot: 'text-emphasis:dot;',
    doubleCircle: 'text-emphasis:double-circle;',
    filled: 'text-emphasis:filled;',
    firebrick: 'text-emphasis:firebrick;',
    floralwhite: 'text-emphasis:floralwhite;',
    forestgreen: 'text-emphasis:forestgreen;',
    fuchsia: 'text-emphasis:fuchsia;',
    gainsboro: 'text-emphasis:gainsboro;',
    ghostwhite: 'text-emphasis:ghostwhite;',
    gold: 'text-emphasis:gold;',
    goldenrod: 'text-emphasis:goldenrod;',
    gray: 'text-emphasis:gray;',
    green: 'text-emphasis:green;',
    greenyellow: 'text-emphasis:greenyellow;',
    grey: 'text-emphasis:grey;',
    honeydew: 'text-emphasis:honeydew;',
    hotpink: 'text-emphasis:hotpink;',
    indianred: 'text-emphasis:indianred;',
    indigo: 'text-emphasis:indigo;',
    inherit: 'text-emphasis:inherit;',
    initial: 'text-emphasis:initial;',
    ivory: 'text-emphasis:ivory;',
    khaki: 'text-emphasis:khaki;',
    lavender: 'text-emphasis:lavender;',
    lavenderblush: 'text-emphasis:lavenderblush;',
    lawngreen: 'text-emphasis:lawngreen;',
    lemonchiffon: 'text-emphasis:lemonchiffon;',
    lightblue: 'text-emphasis:lightblue;',
    lightcoral: 'text-emphasis:lightcoral;',
    lightcyan: 'text-emphasis:lightcyan;',
    lightgoldenrodyellow: 'text-emphasis:lightgoldenrodyellow;',
    lightgray: 'text-emphasis:lightgray;',
    lightgreen: 'text-emphasis:lightgreen;',
    lightgrey: 'text-emphasis:lightgrey;',
    lightpink: 'text-emphasis:lightpink;',
    lightsalmon: 'text-emphasis:lightsalmon;',
    lightseagreen: 'text-emphasis:lightseagreen;',
    lightskyblue: 'text-emphasis:lightskyblue;',
    lightslategray: 'text-emphasis:lightslategray;',
    lightslategrey: 'text-emphasis:lightslategrey;',
    lightsteelblue: 'text-emphasis:lightsteelblue;',
    lightyellow: 'text-emphasis:lightyellow;',
    lime: 'text-emphasis:lime;',
    limegreen: 'text-emphasis:limegreen;',
    linen: 'text-emphasis:linen;',
    magenta: 'text-emphasis:magenta;',
    maroon: 'text-emphasis:maroon;',
    mediumaquamarine: 'text-emphasis:mediumaquamarine;',
    mediumblue: 'text-emphasis:mediumblue;',
    mediumorchid: 'text-emphasis:mediumorchid;',
    mediumpurple: 'text-emphasis:mediumpurple;',
    mediumseagreen: 'text-emphasis:mediumseagreen;',
    mediumslateblue: 'text-emphasis:mediumslateblue;',
    mediumspringgreen: 'text-emphasis:mediumspringgreen;',
    mediumturquoise: 'text-emphasis:mediumturquoise;',
    mediumvioletred: 'text-emphasis:mediumvioletred;',
    midnightblue: 'text-emphasis:midnightblue;',
    mintcream: 'text-emphasis:mintcream;',
    mistyrose: 'text-emphasis:mistyrose;',
    moccasin: 'text-emphasis:moccasin;',
    navajowhite: 'text-emphasis:navajowhite;',
    navy: 'text-emphasis:navy;',
    none: 'text-emphasis:none;',
    oldlace: 'text-emphasis:oldlace;',
    olive: 'text-emphasis:olive;',
    olivedrab: 'text-emphasis:olivedrab;',
    open: 'text-emphasis:open;',
    orange: 'text-emphasis:orange;',
    orangered: 'text-emphasis:orangered;',
    orchid: 'text-emphasis:orchid;',
    palegoldenrod: 'text-emphasis:palegoldenrod;',
    palegreen: 'text-emphasis:palegreen;',
    paleturquoise: 'text-emphasis:paleturquoise;',
    palevioletred: 'text-emphasis:palevioletred;',
    papayawhip: 'text-emphasis:papayawhip;',
    peachpuff: 'text-emphasis:peachpuff;',
    peru: 'text-emphasis:peru;',
    pink: 'text-emphasis:pink;',
    plum: 'text-emphasis:plum;',
    powderblue: 'text-emphasis:powderblue;',
    purple: 'text-emphasis:purple;',
    rebeccapurple: 'text-emphasis:rebeccapurple;',
    red: 'text-emphasis:red;',
    revert: 'text-emphasis:revert;',
    revertLayer: 'text-emphasis:revert-layer;',
    rosybrown: 'text-emphasis:rosybrown;',
    royalblue: 'text-emphasis:royalblue;',
    saddlebrown: 'text-emphasis:saddlebrown;',
    salmon: 'text-emphasis:salmon;',
    sandybrown: 'text-emphasis:sandybrown;',
    seagreen: 'text-emphasis:seagreen;',
    seashell: 'text-emphasis:seashell;',
    sesame: 'text-emphasis:sesame;',
    sienna: 'text-emphasis:sienna;',
    silver: 'text-emphasis:silver;',
    skyblue: 'text-emphasis:skyblue;',
    slateblue: 'text-emphasis:slateblue;',
    slategray: 'text-emphasis:slategray;',
    slategrey: 'text-emphasis:slategrey;',
    snow: 'text-emphasis:snow;',
    springgreen: 'text-emphasis:springgreen;',
    steelblue: 'text-emphasis:steelblue;',
    tan: 'text-emphasis:tan;',
    teal: 'text-emphasis:teal;',
    thistle: 'text-emphasis:thistle;',
    tomato: 'text-emphasis:tomato;',
    transparent: 'text-emphasis:transparent;',
    triangle: 'text-emphasis:triangle;',
    turquoise: 'text-emphasis:turquoise;',
    unset: 'text-emphasis:unset;',
    violet: 'text-emphasis:violet;',
    wheat: 'text-emphasis:wheat;',
    white: 'text-emphasis:white;',
    whitesmoke: 'text-emphasis:whitesmoke;',
    yellow: 'text-emphasis:yellow;',
    yellowgreen: 'text-emphasis:yellowgreen;',
  } as const;
}

type TextEmphasisCssKeywords = Readonly<ReturnType<typeof textEmphasisKeywords>>;
export interface TextEmphasisCss extends TextEmphasisCssKeywords {}
/** CSS 属性 text-emphasis。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
 */
export class TextEmphasisCss extends CssProperty<Property.TextEmphasis> {
  constructor() {
    super('text-emphasis');
    initializeTextEmphasisCss();
  }
}
let textEmphasisReady = false;
function initializeTextEmphasisCss(): void {
  if (textEmphasisReady) return;
  Object.assign(TextEmphasisCss.prototype, textEmphasisKeywords());
  Object.freeze(TextEmphasisCss.prototype);
  textEmphasisReady = true;
}

function textEmphasisColorKeywords() {
  return {
    AccentColor: 'text-emphasis-color:AccentColor;',
    AccentColorText: 'text-emphasis-color:AccentColorText;',
    ActiveBorder: 'text-emphasis-color:ActiveBorder;',
    ActiveCaption: 'text-emphasis-color:ActiveCaption;',
    ActiveText: 'text-emphasis-color:ActiveText;',
    AppWorkspace: 'text-emphasis-color:AppWorkspace;',
    Background: 'text-emphasis-color:Background;',
    ButtonBorder: 'text-emphasis-color:ButtonBorder;',
    ButtonFace: 'text-emphasis-color:ButtonFace;',
    ButtonHighlight: 'text-emphasis-color:ButtonHighlight;',
    ButtonShadow: 'text-emphasis-color:ButtonShadow;',
    ButtonText: 'text-emphasis-color:ButtonText;',
    Canvas: 'text-emphasis-color:Canvas;',
    CanvasText: 'text-emphasis-color:CanvasText;',
    CaptionText: 'text-emphasis-color:CaptionText;',
    Field: 'text-emphasis-color:Field;',
    FieldText: 'text-emphasis-color:FieldText;',
    GrayText: 'text-emphasis-color:GrayText;',
    Highlight: 'text-emphasis-color:Highlight;',
    HighlightText: 'text-emphasis-color:HighlightText;',
    InactiveBorder: 'text-emphasis-color:InactiveBorder;',
    InactiveCaption: 'text-emphasis-color:InactiveCaption;',
    InactiveCaptionText: 'text-emphasis-color:InactiveCaptionText;',
    InfoBackground: 'text-emphasis-color:InfoBackground;',
    InfoText: 'text-emphasis-color:InfoText;',
    LinkText: 'text-emphasis-color:LinkText;',
    Mark: 'text-emphasis-color:Mark;',
    MarkText: 'text-emphasis-color:MarkText;',
    Menu: 'text-emphasis-color:Menu;',
    MenuText: 'text-emphasis-color:MenuText;',
    Scrollbar: 'text-emphasis-color:Scrollbar;',
    SelectedItem: 'text-emphasis-color:SelectedItem;',
    SelectedItemText: 'text-emphasis-color:SelectedItemText;',
    ThreeDDarkShadow: 'text-emphasis-color:ThreeDDarkShadow;',
    ThreeDFace: 'text-emphasis-color:ThreeDFace;',
    ThreeDHighlight: 'text-emphasis-color:ThreeDHighlight;',
    ThreeDLightShadow: 'text-emphasis-color:ThreeDLightShadow;',
    ThreeDShadow: 'text-emphasis-color:ThreeDShadow;',
    VisitedText: 'text-emphasis-color:VisitedText;',
    Window: 'text-emphasis-color:Window;',
    WindowFrame: 'text-emphasis-color:WindowFrame;',
    WindowText: 'text-emphasis-color:WindowText;',
    aliceblue: 'text-emphasis-color:aliceblue;',
    antiquewhite: 'text-emphasis-color:antiquewhite;',
    aqua: 'text-emphasis-color:aqua;',
    aquamarine: 'text-emphasis-color:aquamarine;',
    azure: 'text-emphasis-color:azure;',
    beige: 'text-emphasis-color:beige;',
    bisque: 'text-emphasis-color:bisque;',
    black: 'text-emphasis-color:black;',
    blanchedalmond: 'text-emphasis-color:blanchedalmond;',
    blue: 'text-emphasis-color:blue;',
    blueviolet: 'text-emphasis-color:blueviolet;',
    brown: 'text-emphasis-color:brown;',
    burlywood: 'text-emphasis-color:burlywood;',
    cadetblue: 'text-emphasis-color:cadetblue;',
    chartreuse: 'text-emphasis-color:chartreuse;',
    chocolate: 'text-emphasis-color:chocolate;',
    coral: 'text-emphasis-color:coral;',
    cornflowerblue: 'text-emphasis-color:cornflowerblue;',
    cornsilk: 'text-emphasis-color:cornsilk;',
    crimson: 'text-emphasis-color:crimson;',
    currentColor: 'text-emphasis-color:currentColor;',
    cyan: 'text-emphasis-color:cyan;',
    darkblue: 'text-emphasis-color:darkblue;',
    darkcyan: 'text-emphasis-color:darkcyan;',
    darkgoldenrod: 'text-emphasis-color:darkgoldenrod;',
    darkgray: 'text-emphasis-color:darkgray;',
    darkgreen: 'text-emphasis-color:darkgreen;',
    darkgrey: 'text-emphasis-color:darkgrey;',
    darkkhaki: 'text-emphasis-color:darkkhaki;',
    darkmagenta: 'text-emphasis-color:darkmagenta;',
    darkolivegreen: 'text-emphasis-color:darkolivegreen;',
    darkorange: 'text-emphasis-color:darkorange;',
    darkorchid: 'text-emphasis-color:darkorchid;',
    darkred: 'text-emphasis-color:darkred;',
    darksalmon: 'text-emphasis-color:darksalmon;',
    darkseagreen: 'text-emphasis-color:darkseagreen;',
    darkslateblue: 'text-emphasis-color:darkslateblue;',
    darkslategray: 'text-emphasis-color:darkslategray;',
    darkslategrey: 'text-emphasis-color:darkslategrey;',
    darkturquoise: 'text-emphasis-color:darkturquoise;',
    darkviolet: 'text-emphasis-color:darkviolet;',
    deeppink: 'text-emphasis-color:deeppink;',
    deepskyblue: 'text-emphasis-color:deepskyblue;',
    dimgray: 'text-emphasis-color:dimgray;',
    dimgrey: 'text-emphasis-color:dimgrey;',
    dodgerblue: 'text-emphasis-color:dodgerblue;',
    firebrick: 'text-emphasis-color:firebrick;',
    floralwhite: 'text-emphasis-color:floralwhite;',
    forestgreen: 'text-emphasis-color:forestgreen;',
    fuchsia: 'text-emphasis-color:fuchsia;',
    gainsboro: 'text-emphasis-color:gainsboro;',
    ghostwhite: 'text-emphasis-color:ghostwhite;',
    gold: 'text-emphasis-color:gold;',
    goldenrod: 'text-emphasis-color:goldenrod;',
    gray: 'text-emphasis-color:gray;',
    green: 'text-emphasis-color:green;',
    greenyellow: 'text-emphasis-color:greenyellow;',
    grey: 'text-emphasis-color:grey;',
    honeydew: 'text-emphasis-color:honeydew;',
    hotpink: 'text-emphasis-color:hotpink;',
    indianred: 'text-emphasis-color:indianred;',
    indigo: 'text-emphasis-color:indigo;',
    inherit: 'text-emphasis-color:inherit;',
    initial: 'text-emphasis-color:initial;',
    ivory: 'text-emphasis-color:ivory;',
    khaki: 'text-emphasis-color:khaki;',
    lavender: 'text-emphasis-color:lavender;',
    lavenderblush: 'text-emphasis-color:lavenderblush;',
    lawngreen: 'text-emphasis-color:lawngreen;',
    lemonchiffon: 'text-emphasis-color:lemonchiffon;',
    lightblue: 'text-emphasis-color:lightblue;',
    lightcoral: 'text-emphasis-color:lightcoral;',
    lightcyan: 'text-emphasis-color:lightcyan;',
    lightgoldenrodyellow: 'text-emphasis-color:lightgoldenrodyellow;',
    lightgray: 'text-emphasis-color:lightgray;',
    lightgreen: 'text-emphasis-color:lightgreen;',
    lightgrey: 'text-emphasis-color:lightgrey;',
    lightpink: 'text-emphasis-color:lightpink;',
    lightsalmon: 'text-emphasis-color:lightsalmon;',
    lightseagreen: 'text-emphasis-color:lightseagreen;',
    lightskyblue: 'text-emphasis-color:lightskyblue;',
    lightslategray: 'text-emphasis-color:lightslategray;',
    lightslategrey: 'text-emphasis-color:lightslategrey;',
    lightsteelblue: 'text-emphasis-color:lightsteelblue;',
    lightyellow: 'text-emphasis-color:lightyellow;',
    lime: 'text-emphasis-color:lime;',
    limegreen: 'text-emphasis-color:limegreen;',
    linen: 'text-emphasis-color:linen;',
    magenta: 'text-emphasis-color:magenta;',
    maroon: 'text-emphasis-color:maroon;',
    mediumaquamarine: 'text-emphasis-color:mediumaquamarine;',
    mediumblue: 'text-emphasis-color:mediumblue;',
    mediumorchid: 'text-emphasis-color:mediumorchid;',
    mediumpurple: 'text-emphasis-color:mediumpurple;',
    mediumseagreen: 'text-emphasis-color:mediumseagreen;',
    mediumslateblue: 'text-emphasis-color:mediumslateblue;',
    mediumspringgreen: 'text-emphasis-color:mediumspringgreen;',
    mediumturquoise: 'text-emphasis-color:mediumturquoise;',
    mediumvioletred: 'text-emphasis-color:mediumvioletred;',
    midnightblue: 'text-emphasis-color:midnightblue;',
    mintcream: 'text-emphasis-color:mintcream;',
    mistyrose: 'text-emphasis-color:mistyrose;',
    moccasin: 'text-emphasis-color:moccasin;',
    navajowhite: 'text-emphasis-color:navajowhite;',
    navy: 'text-emphasis-color:navy;',
    oldlace: 'text-emphasis-color:oldlace;',
    olive: 'text-emphasis-color:olive;',
    olivedrab: 'text-emphasis-color:olivedrab;',
    orange: 'text-emphasis-color:orange;',
    orangered: 'text-emphasis-color:orangered;',
    orchid: 'text-emphasis-color:orchid;',
    palegoldenrod: 'text-emphasis-color:palegoldenrod;',
    palegreen: 'text-emphasis-color:palegreen;',
    paleturquoise: 'text-emphasis-color:paleturquoise;',
    palevioletred: 'text-emphasis-color:palevioletred;',
    papayawhip: 'text-emphasis-color:papayawhip;',
    peachpuff: 'text-emphasis-color:peachpuff;',
    peru: 'text-emphasis-color:peru;',
    pink: 'text-emphasis-color:pink;',
    plum: 'text-emphasis-color:plum;',
    powderblue: 'text-emphasis-color:powderblue;',
    purple: 'text-emphasis-color:purple;',
    rebeccapurple: 'text-emphasis-color:rebeccapurple;',
    red: 'text-emphasis-color:red;',
    revert: 'text-emphasis-color:revert;',
    revertLayer: 'text-emphasis-color:revert-layer;',
    rosybrown: 'text-emphasis-color:rosybrown;',
    royalblue: 'text-emphasis-color:royalblue;',
    saddlebrown: 'text-emphasis-color:saddlebrown;',
    salmon: 'text-emphasis-color:salmon;',
    sandybrown: 'text-emphasis-color:sandybrown;',
    seagreen: 'text-emphasis-color:seagreen;',
    seashell: 'text-emphasis-color:seashell;',
    sienna: 'text-emphasis-color:sienna;',
    silver: 'text-emphasis-color:silver;',
    skyblue: 'text-emphasis-color:skyblue;',
    slateblue: 'text-emphasis-color:slateblue;',
    slategray: 'text-emphasis-color:slategray;',
    slategrey: 'text-emphasis-color:slategrey;',
    snow: 'text-emphasis-color:snow;',
    springgreen: 'text-emphasis-color:springgreen;',
    steelblue: 'text-emphasis-color:steelblue;',
    tan: 'text-emphasis-color:tan;',
    teal: 'text-emphasis-color:teal;',
    thistle: 'text-emphasis-color:thistle;',
    tomato: 'text-emphasis-color:tomato;',
    transparent: 'text-emphasis-color:transparent;',
    turquoise: 'text-emphasis-color:turquoise;',
    unset: 'text-emphasis-color:unset;',
    violet: 'text-emphasis-color:violet;',
    wheat: 'text-emphasis-color:wheat;',
    white: 'text-emphasis-color:white;',
    whitesmoke: 'text-emphasis-color:whitesmoke;',
    yellow: 'text-emphasis-color:yellow;',
    yellowgreen: 'text-emphasis-color:yellowgreen;',
  } as const;
}

type TextEmphasisColorCssKeywords = Readonly<ReturnType<typeof textEmphasisColorKeywords>>;
export interface TextEmphasisColorCss extends TextEmphasisColorCssKeywords {}
/** CSS 属性 text-emphasis-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
 */
export class TextEmphasisColorCss extends CssProperty<Property.TextEmphasisColor> {
  constructor() {
    super('text-emphasis-color');
    initializeTextEmphasisColorCss();
  }
}
let textEmphasisColorReady = false;
function initializeTextEmphasisColorCss(): void {
  if (textEmphasisColorReady) return;
  Object.assign(TextEmphasisColorCss.prototype, textEmphasisColorKeywords());
  Object.freeze(TextEmphasisColorCss.prototype);
  textEmphasisColorReady = true;
}

function textEmphasisPositionKeywords() {
  return {
    auto: 'text-emphasis-position:auto;',
    inherit: 'text-emphasis-position:inherit;',
    initial: 'text-emphasis-position:initial;',
    over: 'text-emphasis-position:over;',
    revert: 'text-emphasis-position:revert;',
    revertLayer: 'text-emphasis-position:revert-layer;',
    under: 'text-emphasis-position:under;',
    unset: 'text-emphasis-position:unset;',
  } as const;
}

type TextEmphasisPositionCssKeywords = Readonly<ReturnType<typeof textEmphasisPositionKeywords>>;
export interface TextEmphasisPositionCss extends TextEmphasisPositionCssKeywords {}
/** CSS 属性 text-emphasis-position；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
 */
export class TextEmphasisPositionCss extends CssProperty<Property.TextEmphasisPosition> {
  constructor() {
    super('text-emphasis-position');
    initializeTextEmphasisPositionCss();
  }
}
let textEmphasisPositionReady = false;
function initializeTextEmphasisPositionCss(): void {
  if (textEmphasisPositionReady) return;
  Object.assign(TextEmphasisPositionCss.prototype, textEmphasisPositionKeywords());
  Object.freeze(TextEmphasisPositionCss.prototype);
  textEmphasisPositionReady = true;
}

function textEmphasisStyleKeywords() {
  return {
    circle: 'text-emphasis-style:circle;',
    dot: 'text-emphasis-style:dot;',
    doubleCircle: 'text-emphasis-style:double-circle;',
    filled: 'text-emphasis-style:filled;',
    inherit: 'text-emphasis-style:inherit;',
    initial: 'text-emphasis-style:initial;',
    none: 'text-emphasis-style:none;',
    open: 'text-emphasis-style:open;',
    revert: 'text-emphasis-style:revert;',
    revertLayer: 'text-emphasis-style:revert-layer;',
    sesame: 'text-emphasis-style:sesame;',
    triangle: 'text-emphasis-style:triangle;',
    unset: 'text-emphasis-style:unset;',
  } as const;
}

type TextEmphasisStyleCssKeywords = Readonly<ReturnType<typeof textEmphasisStyleKeywords>>;
export interface TextEmphasisStyleCss extends TextEmphasisStyleCssKeywords {}
/** CSS 属性 text-emphasis-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
 */
export class TextEmphasisStyleCss extends CssProperty<Property.TextEmphasisStyle> {
  constructor() {
    super('text-emphasis-style');
    initializeTextEmphasisStyleCss();
  }
}
let textEmphasisStyleReady = false;
function initializeTextEmphasisStyleCss(): void {
  if (textEmphasisStyleReady) return;
  Object.assign(TextEmphasisStyleCss.prototype, textEmphasisStyleKeywords());
  Object.freeze(TextEmphasisStyleCss.prototype);
  textEmphasisStyleReady = true;
}

function textIndentKeywords() {
  return {
    inherit: 'text-indent:inherit;',
    initial: 'text-indent:initial;',
    revert: 'text-indent:revert;',
    revertLayer: 'text-indent:revert-layer;',
    unset: 'text-indent:unset;',
  } as const;
}

type TextIndentCssKeywords = Readonly<ReturnType<typeof textIndentKeywords>>;
export interface TextIndentCss extends TextIndentCssKeywords {}
/** CSS 属性 text-indent；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
 */
export class TextIndentCss extends LengthCssProperty<Property.TextIndent> {
  constructor() {
    super('text-indent');
    initializeTextIndentCss();
  }
}
let textIndentReady = false;
function initializeTextIndentCss(): void {
  if (textIndentReady) return;
  Object.assign(TextIndentCss.prototype, textIndentKeywords());
  Object.freeze(TextIndentCss.prototype);
  textIndentReady = true;
}

function textJustifyKeywords() {
  return {
    auto: 'text-justify:auto;',
    distribute: 'text-justify:distribute;',
    inherit: 'text-justify:inherit;',
    initial: 'text-justify:initial;',
    interCharacter: 'text-justify:inter-character;',
    interWord: 'text-justify:inter-word;',
    none: 'text-justify:none;',
    revert: 'text-justify:revert;',
    revertLayer: 'text-justify:revert-layer;',
    unset: 'text-justify:unset;',
  } as const;
}

type TextJustifyCssKeywords = Readonly<ReturnType<typeof textJustifyKeywords>>;
export interface TextJustifyCss extends TextJustifyCssKeywords {}
/** CSS 属性 text-justify；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
 */
export class TextJustifyCss extends CssProperty<Property.TextJustify> {
  constructor() {
    super('text-justify');
    initializeTextJustifyCss();
  }
}
let textJustifyReady = false;
function initializeTextJustifyCss(): void {
  if (textJustifyReady) return;
  Object.assign(TextJustifyCss.prototype, textJustifyKeywords());
  Object.freeze(TextJustifyCss.prototype);
  textJustifyReady = true;
}

function textOrientationKeywords() {
  return {
    inherit: 'text-orientation:inherit;',
    initial: 'text-orientation:initial;',
    mixed: 'text-orientation:mixed;',
    revert: 'text-orientation:revert;',
    revertLayer: 'text-orientation:revert-layer;',
    sideways: 'text-orientation:sideways;',
    sidewaysRight: 'text-orientation:sideways-right;',
    unset: 'text-orientation:unset;',
    upright: 'text-orientation:upright;',
  } as const;
}

type TextOrientationCssKeywords = Readonly<ReturnType<typeof textOrientationKeywords>>;
export interface TextOrientationCss extends TextOrientationCssKeywords {}
/** CSS 属性 text-orientation；初始值 mixed。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
 */
export class TextOrientationCss extends CssProperty<Property.TextOrientation> {
  constructor() {
    super('text-orientation');
    initializeTextOrientationCss();
  }
}
let textOrientationReady = false;
function initializeTextOrientationCss(): void {
  if (textOrientationReady) return;
  Object.assign(TextOrientationCss.prototype, textOrientationKeywords());
  Object.freeze(TextOrientationCss.prototype);
  textOrientationReady = true;
}

function textOverflowKeywords() {
  return {
    clip: 'text-overflow:clip;',
    ellipsis: 'text-overflow:ellipsis;',
    inherit: 'text-overflow:inherit;',
    initial: 'text-overflow:initial;',
    revert: 'text-overflow:revert;',
    revertLayer: 'text-overflow:revert-layer;',
    unset: 'text-overflow:unset;',
  } as const;
}

type TextOverflowCssKeywords = Readonly<ReturnType<typeof textOverflowKeywords>>;
export interface TextOverflowCss extends TextOverflowCssKeywords {}
/** CSS 属性 text-overflow；初始值 clip。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
 */
export class TextOverflowCss extends CssProperty<Property.TextOverflow> {
  constructor() {
    super('text-overflow');
    initializeTextOverflowCss();
  }
}
let textOverflowReady = false;
function initializeTextOverflowCss(): void {
  if (textOverflowReady) return;
  Object.assign(TextOverflowCss.prototype, textOverflowKeywords());
  Object.freeze(TextOverflowCss.prototype);
  textOverflowReady = true;
}

function textRenderingKeywords() {
  return {
    auto: 'text-rendering:auto;',
    geometricPrecision: 'text-rendering:geometricPrecision;',
    inherit: 'text-rendering:inherit;',
    initial: 'text-rendering:initial;',
    optimizeLegibility: 'text-rendering:optimizeLegibility;',
    optimizeSpeed: 'text-rendering:optimizeSpeed;',
    revert: 'text-rendering:revert;',
    revertLayer: 'text-rendering:revert-layer;',
    unset: 'text-rendering:unset;',
  } as const;
}

type TextRenderingCssKeywords = Readonly<ReturnType<typeof textRenderingKeywords>>;
export interface TextRenderingCss extends TextRenderingCssKeywords {}
/** CSS 属性 text-rendering；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
 */
export class TextRenderingCss extends CssProperty<Property.TextRendering> {
  constructor() {
    super('text-rendering');
    initializeTextRenderingCss();
  }
}
let textRenderingReady = false;
function initializeTextRenderingCss(): void {
  if (textRenderingReady) return;
  Object.assign(TextRenderingCss.prototype, textRenderingKeywords());
  Object.freeze(TextRenderingCss.prototype);
  textRenderingReady = true;
}

function textShadowKeywords() {
  return {
    inherit: 'text-shadow:inherit;',
    initial: 'text-shadow:initial;',
    none: 'text-shadow:none;',
    revert: 'text-shadow:revert;',
    revertLayer: 'text-shadow:revert-layer;',
    unset: 'text-shadow:unset;',
  } as const;
}

type TextShadowCssKeywords = Readonly<ReturnType<typeof textShadowKeywords>>;
export interface TextShadowCss extends TextShadowCssKeywords {}
/** CSS 属性 text-shadow；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
 */
export class TextShadowCss extends CssProperty<Property.TextShadow> {
  constructor() {
    super('text-shadow');
    initializeTextShadowCss();
  }
}
let textShadowReady = false;
function initializeTextShadowCss(): void {
  if (textShadowReady) return;
  Object.assign(TextShadowCss.prototype, textShadowKeywords());
  Object.freeze(TextShadowCss.prototype);
  textShadowReady = true;
}

function textSizeAdjustKeywords() {
  return {
    auto: 'text-size-adjust:auto;',
    inherit: 'text-size-adjust:inherit;',
    initial: 'text-size-adjust:initial;',
    none: 'text-size-adjust:none;',
    revert: 'text-size-adjust:revert;',
    revertLayer: 'text-size-adjust:revert-layer;',
    unset: 'text-size-adjust:unset;',
  } as const;
}

type TextSizeAdjustCssKeywords = Readonly<ReturnType<typeof textSizeAdjustKeywords>>;
export interface TextSizeAdjustCss extends TextSizeAdjustCssKeywords {}
/** CSS 属性 text-size-adjust；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
 */
export class TextSizeAdjustCss extends CssProperty<Property.TextSizeAdjust> {
  constructor() {
    super('text-size-adjust');
    initializeTextSizeAdjustCss();
  }
}
let textSizeAdjustReady = false;
function initializeTextSizeAdjustCss(): void {
  if (textSizeAdjustReady) return;
  Object.assign(TextSizeAdjustCss.prototype, textSizeAdjustKeywords());
  Object.freeze(TextSizeAdjustCss.prototype);
  textSizeAdjustReady = true;
}

function textSpacingTrimKeywords() {
  return {
    inherit: 'text-spacing-trim:inherit;',
    initial: 'text-spacing-trim:initial;',
    normal: 'text-spacing-trim:normal;',
    revert: 'text-spacing-trim:revert;',
    revertLayer: 'text-spacing-trim:revert-layer;',
    spaceAll: 'text-spacing-trim:space-all;',
    spaceFirst: 'text-spacing-trim:space-first;',
    trimStart: 'text-spacing-trim:trim-start;',
    unset: 'text-spacing-trim:unset;',
  } as const;
}

type TextSpacingTrimCssKeywords = Readonly<ReturnType<typeof textSpacingTrimKeywords>>;
export interface TextSpacingTrimCss extends TextSpacingTrimCssKeywords {}
/** CSS 属性 text-spacing-trim；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
 */
export class TextSpacingTrimCss extends CssProperty<Property.TextSpacingTrim> {
  constructor() {
    super('text-spacing-trim');
    initializeTextSpacingTrimCss();
  }
}
let textSpacingTrimReady = false;
function initializeTextSpacingTrimCss(): void {
  if (textSpacingTrimReady) return;
  Object.assign(TextSpacingTrimCss.prototype, textSpacingTrimKeywords());
  Object.freeze(TextSpacingTrimCss.prototype);
  textSpacingTrimReady = true;
}

function textTransformKeywords() {
  return {
    capitalize: 'text-transform:capitalize;',
    fullSizeKana: 'text-transform:full-size-kana;',
    fullWidth: 'text-transform:full-width;',
    inherit: 'text-transform:inherit;',
    initial: 'text-transform:initial;',
    lowercase: 'text-transform:lowercase;',
    mathAuto: 'text-transform:math-auto;',
    none: 'text-transform:none;',
    revert: 'text-transform:revert;',
    revertLayer: 'text-transform:revert-layer;',
    unset: 'text-transform:unset;',
    uppercase: 'text-transform:uppercase;',
  } as const;
}

type TextTransformCssKeywords = Readonly<ReturnType<typeof textTransformKeywords>>;
export interface TextTransformCss extends TextTransformCssKeywords {}
/** CSS 属性 text-transform；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
 */
export class TextTransformCss extends CssProperty<Property.TextTransform> {
  constructor() {
    super('text-transform');
    initializeTextTransformCss();
  }
}
let textTransformReady = false;
function initializeTextTransformCss(): void {
  if (textTransformReady) return;
  Object.assign(TextTransformCss.prototype, textTransformKeywords());
  Object.freeze(TextTransformCss.prototype);
  textTransformReady = true;
}

function textUnderlineOffsetKeywords() {
  return {
    auto: 'text-underline-offset:auto;',
    inherit: 'text-underline-offset:inherit;',
    initial: 'text-underline-offset:initial;',
    revert: 'text-underline-offset:revert;',
    revertLayer: 'text-underline-offset:revert-layer;',
    unset: 'text-underline-offset:unset;',
  } as const;
}

type TextUnderlineOffsetCssKeywords = Readonly<ReturnType<typeof textUnderlineOffsetKeywords>>;
export interface TextUnderlineOffsetCss extends TextUnderlineOffsetCssKeywords {}
/** CSS 属性 text-underline-offset；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
 */
export class TextUnderlineOffsetCss extends LengthCssProperty<Property.TextUnderlineOffset> {
  constructor() {
    super('text-underline-offset');
    initializeTextUnderlineOffsetCss();
  }
}
let textUnderlineOffsetReady = false;
function initializeTextUnderlineOffsetCss(): void {
  if (textUnderlineOffsetReady) return;
  Object.assign(TextUnderlineOffsetCss.prototype, textUnderlineOffsetKeywords());
  Object.freeze(TextUnderlineOffsetCss.prototype);
  textUnderlineOffsetReady = true;
}

function textUnderlinePositionKeywords() {
  return {
    auto: 'text-underline-position:auto;',
    fromFont: 'text-underline-position:from-font;',
    inherit: 'text-underline-position:inherit;',
    initial: 'text-underline-position:initial;',
    left: 'text-underline-position:left;',
    revert: 'text-underline-position:revert;',
    revertLayer: 'text-underline-position:revert-layer;',
    right: 'text-underline-position:right;',
    under: 'text-underline-position:under;',
    unset: 'text-underline-position:unset;',
  } as const;
}

type TextUnderlinePositionCssKeywords = Readonly<ReturnType<typeof textUnderlinePositionKeywords>>;
export interface TextUnderlinePositionCss extends TextUnderlinePositionCssKeywords {}
/** CSS 属性 text-underline-position；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
 */
export class TextUnderlinePositionCss extends CssProperty<Property.TextUnderlinePosition> {
  constructor() {
    super('text-underline-position');
    initializeTextUnderlinePositionCss();
  }
}
let textUnderlinePositionReady = false;
function initializeTextUnderlinePositionCss(): void {
  if (textUnderlinePositionReady) return;
  Object.assign(TextUnderlinePositionCss.prototype, textUnderlinePositionKeywords());
  Object.freeze(TextUnderlinePositionCss.prototype);
  textUnderlinePositionReady = true;
}

function textWrapKeywords() {
  return {
    auto: 'text-wrap:auto;',
    balance: 'text-wrap:balance;',
    inherit: 'text-wrap:inherit;',
    initial: 'text-wrap:initial;',
    nowrap: 'text-wrap:nowrap;',
    pretty: 'text-wrap:pretty;',
    revert: 'text-wrap:revert;',
    revertLayer: 'text-wrap:revert-layer;',
    stable: 'text-wrap:stable;',
    unset: 'text-wrap:unset;',
    wrap: 'text-wrap:wrap;',
  } as const;
}

type TextWrapCssKeywords = Readonly<ReturnType<typeof textWrapKeywords>>;
export interface TextWrapCss extends TextWrapCssKeywords {}
/** CSS 属性 text-wrap；初始值 wrap。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
 */
export class TextWrapCss extends CssProperty<Property.TextWrap> {
  constructor() {
    super('text-wrap');
    initializeTextWrapCss();
  }
}
let textWrapReady = false;
function initializeTextWrapCss(): void {
  if (textWrapReady) return;
  Object.assign(TextWrapCss.prototype, textWrapKeywords());
  Object.freeze(TextWrapCss.prototype);
  textWrapReady = true;
}

function textWrapModeKeywords() {
  return {
    inherit: 'text-wrap-mode:inherit;',
    initial: 'text-wrap-mode:initial;',
    nowrap: 'text-wrap-mode:nowrap;',
    revert: 'text-wrap-mode:revert;',
    revertLayer: 'text-wrap-mode:revert-layer;',
    unset: 'text-wrap-mode:unset;',
    wrap: 'text-wrap-mode:wrap;',
  } as const;
}

type TextWrapModeCssKeywords = Readonly<ReturnType<typeof textWrapModeKeywords>>;
export interface TextWrapModeCss extends TextWrapModeCssKeywords {}
/** CSS 属性 text-wrap-mode；初始值 wrap。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
 */
export class TextWrapModeCss extends CssProperty<Property.TextWrapMode> {
  constructor() {
    super('text-wrap-mode');
    initializeTextWrapModeCss();
  }
}
let textWrapModeReady = false;
function initializeTextWrapModeCss(): void {
  if (textWrapModeReady) return;
  Object.assign(TextWrapModeCss.prototype, textWrapModeKeywords());
  Object.freeze(TextWrapModeCss.prototype);
  textWrapModeReady = true;
}

function textWrapStyleKeywords() {
  return {
    auto: 'text-wrap-style:auto;',
    balance: 'text-wrap-style:balance;',
    inherit: 'text-wrap-style:inherit;',
    initial: 'text-wrap-style:initial;',
    pretty: 'text-wrap-style:pretty;',
    revert: 'text-wrap-style:revert;',
    revertLayer: 'text-wrap-style:revert-layer;',
    stable: 'text-wrap-style:stable;',
    unset: 'text-wrap-style:unset;',
  } as const;
}

type TextWrapStyleCssKeywords = Readonly<ReturnType<typeof textWrapStyleKeywords>>;
export interface TextWrapStyleCss extends TextWrapStyleCssKeywords {}
/** CSS 属性 text-wrap-style；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
 */
export class TextWrapStyleCss extends CssProperty<Property.TextWrapStyle> {
  constructor() {
    super('text-wrap-style');
    initializeTextWrapStyleCss();
  }
}
let textWrapStyleReady = false;
function initializeTextWrapStyleCss(): void {
  if (textWrapStyleReady) return;
  Object.assign(TextWrapStyleCss.prototype, textWrapStyleKeywords());
  Object.freeze(TextWrapStyleCss.prototype);
  textWrapStyleReady = true;
}

function timelineScopeKeywords() {
  return {
    inherit: 'timeline-scope:inherit;',
    initial: 'timeline-scope:initial;',
    none: 'timeline-scope:none;',
    revert: 'timeline-scope:revert;',
    revertLayer: 'timeline-scope:revert-layer;',
    unset: 'timeline-scope:unset;',
  } as const;
}

type TimelineScopeCssKeywords = Readonly<ReturnType<typeof timelineScopeKeywords>>;
export interface TimelineScopeCss extends TimelineScopeCssKeywords {}
/** CSS 属性 timeline-scope；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
 */
export class TimelineScopeCss extends CssProperty<Property.TimelineScope> {
  constructor() {
    super('timeline-scope');
    initializeTimelineScopeCss();
  }
}
let timelineScopeReady = false;
function initializeTimelineScopeCss(): void {
  if (timelineScopeReady) return;
  Object.assign(TimelineScopeCss.prototype, timelineScopeKeywords());
  Object.freeze(TimelineScopeCss.prototype);
  timelineScopeReady = true;
}

function topKeywords() {
  return {
    auto: 'top:auto;',
    inherit: 'top:inherit;',
    initial: 'top:initial;',
    revert: 'top:revert;',
    revertLayer: 'top:revert-layer;',
    unset: 'top:unset;',
  } as const;
}

type TopCssKeywords = Readonly<ReturnType<typeof topKeywords>>;
export interface TopCss extends TopCssKeywords {}
/** CSS 属性 top；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
 */
export class TopCss extends LengthCssProperty<Property.Top> {
  constructor() {
    super('top');
    initializeTopCss();
  }
}
let topReady = false;
function initializeTopCss(): void {
  if (topReady) return;
  Object.assign(TopCss.prototype, topKeywords());
  Object.freeze(TopCss.prototype);
  topReady = true;
}

function touchActionKeywords() {
  return {
    auto: 'touch-action:auto;',
    inherit: 'touch-action:inherit;',
    initial: 'touch-action:initial;',
    manipulation: 'touch-action:manipulation;',
    none: 'touch-action:none;',
    panDown: 'touch-action:pan-down;',
    panLeft: 'touch-action:pan-left;',
    panRight: 'touch-action:pan-right;',
    panUp: 'touch-action:pan-up;',
    panX: 'touch-action:pan-x;',
    panY: 'touch-action:pan-y;',
    pinchZoom: 'touch-action:pinch-zoom;',
    revert: 'touch-action:revert;',
    revertLayer: 'touch-action:revert-layer;',
    unset: 'touch-action:unset;',
  } as const;
}

type TouchActionCssKeywords = Readonly<ReturnType<typeof touchActionKeywords>>;
export interface TouchActionCss extends TouchActionCssKeywords {}
/** CSS 属性 touch-action；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
 */
export class TouchActionCss extends CssProperty<Property.TouchAction> {
  constructor() {
    super('touch-action');
    initializeTouchActionCss();
  }
}
let touchActionReady = false;
function initializeTouchActionCss(): void {
  if (touchActionReady) return;
  Object.assign(TouchActionCss.prototype, touchActionKeywords());
  Object.freeze(TouchActionCss.prototype);
  touchActionReady = true;
}

function transformKeywords() {
  return {
    inherit: 'transform:inherit;',
    initial: 'transform:initial;',
    none: 'transform:none;',
    revert: 'transform:revert;',
    revertLayer: 'transform:revert-layer;',
    unset: 'transform:unset;',
  } as const;
}

type TransformCssKeywords = Readonly<ReturnType<typeof transformKeywords>>;
export interface TransformCss extends TransformCssKeywords {}
/** CSS 属性 transform；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
 */
export class TransformCss extends CssProperty<Property.Transform> {
  constructor() {
    super('transform');
    initializeTransformCss();
  }
}
let transformReady = false;
function initializeTransformCss(): void {
  if (transformReady) return;
  Object.assign(TransformCss.prototype, transformKeywords());
  Object.freeze(TransformCss.prototype);
  transformReady = true;
}

function transformBoxKeywords() {
  return {
    borderBox: 'transform-box:border-box;',
    contentBox: 'transform-box:content-box;',
    fillBox: 'transform-box:fill-box;',
    inherit: 'transform-box:inherit;',
    initial: 'transform-box:initial;',
    revert: 'transform-box:revert;',
    revertLayer: 'transform-box:revert-layer;',
    strokeBox: 'transform-box:stroke-box;',
    unset: 'transform-box:unset;',
    viewBox: 'transform-box:view-box;',
  } as const;
}

type TransformBoxCssKeywords = Readonly<ReturnType<typeof transformBoxKeywords>>;
export interface TransformBoxCss extends TransformBoxCssKeywords {}
/** CSS 属性 transform-box；初始值 view-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
 */
export class TransformBoxCss extends CssProperty<Property.TransformBox> {
  constructor() {
    super('transform-box');
    initializeTransformBoxCss();
  }
}
let transformBoxReady = false;
function initializeTransformBoxCss(): void {
  if (transformBoxReady) return;
  Object.assign(TransformBoxCss.prototype, transformBoxKeywords());
  Object.freeze(TransformBoxCss.prototype);
  transformBoxReady = true;
}

function transformOriginKeywords() {
  return {
    bottom: 'transform-origin:bottom;',
    center: 'transform-origin:center;',
    inherit: 'transform-origin:inherit;',
    initial: 'transform-origin:initial;',
    left: 'transform-origin:left;',
    revert: 'transform-origin:revert;',
    revertLayer: 'transform-origin:revert-layer;',
    right: 'transform-origin:right;',
    top: 'transform-origin:top;',
    unset: 'transform-origin:unset;',
  } as const;
}

type TransformOriginCssKeywords = Readonly<ReturnType<typeof transformOriginKeywords>>;
export interface TransformOriginCss extends TransformOriginCssKeywords {}
/** CSS 属性 transform-origin；初始值 50% 50% 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
 */
export class TransformOriginCss extends LengthCssProperty<Property.TransformOrigin> {
  constructor() {
    super('transform-origin');
    initializeTransformOriginCss();
  }
}
let transformOriginReady = false;
function initializeTransformOriginCss(): void {
  if (transformOriginReady) return;
  Object.assign(TransformOriginCss.prototype, transformOriginKeywords());
  Object.freeze(TransformOriginCss.prototype);
  transformOriginReady = true;
}

function transformStyleKeywords() {
  return {
    flat: 'transform-style:flat;',
    inherit: 'transform-style:inherit;',
    initial: 'transform-style:initial;',
    revert: 'transform-style:revert;',
    revertLayer: 'transform-style:revert-layer;',
    unset: 'transform-style:unset;',
  } as const;
}

type TransformStyleCssKeywords = Readonly<ReturnType<typeof transformStyleKeywords>>;
export interface TransformStyleCss extends TransformStyleCssKeywords {}
/** CSS 属性 transform-style；初始值 flat。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
 */
export class TransformStyleCss extends CssProperty<Property.TransformStyle> {
  constructor() {
    super('transform-style');
    initializeTransformStyleCss();
  }
}
let transformStyleReady = false;
function initializeTransformStyleCss(): void {
  if (transformStyleReady) return;
  Object.assign(TransformStyleCss.prototype, transformStyleKeywords());
  Object.freeze(TransformStyleCss.prototype);
  transformStyleReady = true;
}

function transitionKeywords() {
  return {
    all: 'transition:all;',
    allowDiscrete: 'transition:allow-discrete;',
    ease: 'transition:ease;',
    easeIn: 'transition:ease-in;',
    easeInOut: 'transition:ease-in-out;',
    easeOut: 'transition:ease-out;',
    inherit: 'transition:inherit;',
    initial: 'transition:initial;',
    linear: 'transition:linear;',
    none: 'transition:none;',
    normal: 'transition:normal;',
    revert: 'transition:revert;',
    revertLayer: 'transition:revert-layer;',
    stepEnd: 'transition:step-end;',
    stepStart: 'transition:step-start;',
    unset: 'transition:unset;',
  } as const;
}

type TransitionCssKeywords = Readonly<ReturnType<typeof transitionKeywords>>;
export interface TransitionCss extends TransitionCssKeywords {}
/** CSS 属性 transition。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
 */
export class TransitionCss extends CssProperty<Property.Transition> {
  constructor() {
    super('transition');
    initializeTransitionCss();
  }
}
let transitionReady = false;
function initializeTransitionCss(): void {
  if (transitionReady) return;
  Object.assign(TransitionCss.prototype, transitionKeywords());
  Object.freeze(TransitionCss.prototype);
  transitionReady = true;
}

function transitionBehaviorKeywords() {
  return {
    allowDiscrete: 'transition-behavior:allow-discrete;',
    inherit: 'transition-behavior:inherit;',
    initial: 'transition-behavior:initial;',
    normal: 'transition-behavior:normal;',
    revert: 'transition-behavior:revert;',
    revertLayer: 'transition-behavior:revert-layer;',
    unset: 'transition-behavior:unset;',
  } as const;
}

type TransitionBehaviorCssKeywords = Readonly<ReturnType<typeof transitionBehaviorKeywords>>;
export interface TransitionBehaviorCss extends TransitionBehaviorCssKeywords {}
/** CSS 属性 transition-behavior；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
 */
export class TransitionBehaviorCss extends CssProperty<Property.TransitionBehavior> {
  constructor() {
    super('transition-behavior');
    initializeTransitionBehaviorCss();
  }
}
let transitionBehaviorReady = false;
function initializeTransitionBehaviorCss(): void {
  if (transitionBehaviorReady) return;
  Object.assign(TransitionBehaviorCss.prototype, transitionBehaviorKeywords());
  Object.freeze(TransitionBehaviorCss.prototype);
  transitionBehaviorReady = true;
}

function transitionDelayKeywords() {
  return {
    inherit: 'transition-delay:inherit;',
    initial: 'transition-delay:initial;',
    revert: 'transition-delay:revert;',
    revertLayer: 'transition-delay:revert-layer;',
    unset: 'transition-delay:unset;',
  } as const;
}

type TransitionDelayCssKeywords = Readonly<ReturnType<typeof transitionDelayKeywords>>;
export interface TransitionDelayCss extends TransitionDelayCssKeywords {}
/** CSS 属性 transition-delay；初始值 0s。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
 */
export class TransitionDelayCss extends CssProperty<Property.TransitionDelay> {
  constructor() {
    super('transition-delay');
    initializeTransitionDelayCss();
  }
}
let transitionDelayReady = false;
function initializeTransitionDelayCss(): void {
  if (transitionDelayReady) return;
  Object.assign(TransitionDelayCss.prototype, transitionDelayKeywords());
  Object.freeze(TransitionDelayCss.prototype);
  transitionDelayReady = true;
}

function transitionDurationKeywords() {
  return {
    inherit: 'transition-duration:inherit;',
    initial: 'transition-duration:initial;',
    revert: 'transition-duration:revert;',
    revertLayer: 'transition-duration:revert-layer;',
    unset: 'transition-duration:unset;',
  } as const;
}

type TransitionDurationCssKeywords = Readonly<ReturnType<typeof transitionDurationKeywords>>;
export interface TransitionDurationCss extends TransitionDurationCssKeywords {}
/** CSS 属性 transition-duration；初始值 0s。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
 */
export class TransitionDurationCss extends CssProperty<Property.TransitionDuration> {
  constructor() {
    super('transition-duration');
    initializeTransitionDurationCss();
  }
}
let transitionDurationReady = false;
function initializeTransitionDurationCss(): void {
  if (transitionDurationReady) return;
  Object.assign(TransitionDurationCss.prototype, transitionDurationKeywords());
  Object.freeze(TransitionDurationCss.prototype);
  transitionDurationReady = true;
}

function transitionPropertyKeywords() {
  return {
    all: 'transition-property:all;',
    inherit: 'transition-property:inherit;',
    initial: 'transition-property:initial;',
    none: 'transition-property:none;',
    revert: 'transition-property:revert;',
    revertLayer: 'transition-property:revert-layer;',
    unset: 'transition-property:unset;',
  } as const;
}

type TransitionPropertyCssKeywords = Readonly<ReturnType<typeof transitionPropertyKeywords>>;
export interface TransitionPropertyCss extends TransitionPropertyCssKeywords {}
/** CSS 属性 transition-property。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
 */
export class TransitionPropertyCss extends CssProperty<Property.TransitionProperty> {
  constructor() {
    super('transition-property');
    initializeTransitionPropertyCss();
  }
}
let transitionPropertyReady = false;
function initializeTransitionPropertyCss(): void {
  if (transitionPropertyReady) return;
  Object.assign(TransitionPropertyCss.prototype, transitionPropertyKeywords());
  Object.freeze(TransitionPropertyCss.prototype);
  transitionPropertyReady = true;
}

function transitionTimingFunctionKeywords() {
  return {
    ease: 'transition-timing-function:ease;',
    easeIn: 'transition-timing-function:ease-in;',
    easeInOut: 'transition-timing-function:ease-in-out;',
    easeOut: 'transition-timing-function:ease-out;',
    inherit: 'transition-timing-function:inherit;',
    initial: 'transition-timing-function:initial;',
    linear: 'transition-timing-function:linear;',
    revert: 'transition-timing-function:revert;',
    revertLayer: 'transition-timing-function:revert-layer;',
    stepEnd: 'transition-timing-function:step-end;',
    stepStart: 'transition-timing-function:step-start;',
    unset: 'transition-timing-function:unset;',
  } as const;
}

type TransitionTimingFunctionCssKeywords = Readonly<
  ReturnType<typeof transitionTimingFunctionKeywords>
>;
export interface TransitionTimingFunctionCss extends TransitionTimingFunctionCssKeywords {}
/** CSS 属性 transition-timing-function；初始值 ease。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
 */
export class TransitionTimingFunctionCss extends CssProperty<Property.TransitionTimingFunction> {
  constructor() {
    super('transition-timing-function');
    initializeTransitionTimingFunctionCss();
  }
}
let transitionTimingFunctionReady = false;
function initializeTransitionTimingFunctionCss(): void {
  if (transitionTimingFunctionReady) return;
  Object.assign(TransitionTimingFunctionCss.prototype, transitionTimingFunctionKeywords());
  Object.freeze(TransitionTimingFunctionCss.prototype);
  transitionTimingFunctionReady = true;
}

function translateKeywords() {
  return {
    inherit: 'translate:inherit;',
    initial: 'translate:initial;',
    none: 'translate:none;',
    revert: 'translate:revert;',
    revertLayer: 'translate:revert-layer;',
    unset: 'translate:unset;',
  } as const;
}

type TranslateCssKeywords = Readonly<ReturnType<typeof translateKeywords>>;
export interface TranslateCss extends TranslateCssKeywords {}
/** CSS 属性 translate；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
 */
export class TranslateCss extends LengthCssProperty<Property.Translate> {
  constructor() {
    super('translate');
    initializeTranslateCss();
  }
}
let translateReady = false;
function initializeTranslateCss(): void {
  if (translateReady) return;
  Object.assign(TranslateCss.prototype, translateKeywords());
  Object.freeze(TranslateCss.prototype);
  translateReady = true;
}

function unicodeBidiKeywords() {
  return {
    bidiOverride: 'unicode-bidi:bidi-override;',
    embed: 'unicode-bidi:embed;',
    inherit: 'unicode-bidi:inherit;',
    initial: 'unicode-bidi:initial;',
    isolate: 'unicode-bidi:isolate;',
    isolateOverride: 'unicode-bidi:isolate-override;',
    normal: 'unicode-bidi:normal;',
    plaintext: 'unicode-bidi:plaintext;',
    revert: 'unicode-bidi:revert;',
    revertLayer: 'unicode-bidi:revert-layer;',
    unset: 'unicode-bidi:unset;',
  } as const;
}

type UnicodeBidiCssKeywords = Readonly<ReturnType<typeof unicodeBidiKeywords>>;
export interface UnicodeBidiCss extends UnicodeBidiCssKeywords {}
/** CSS 属性 unicode-bidi；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
 */
export class UnicodeBidiCss extends CssProperty<Property.UnicodeBidi> {
  constructor() {
    super('unicode-bidi');
    initializeUnicodeBidiCss();
  }
}
let unicodeBidiReady = false;
function initializeUnicodeBidiCss(): void {
  if (unicodeBidiReady) return;
  Object.assign(UnicodeBidiCss.prototype, unicodeBidiKeywords());
  Object.freeze(UnicodeBidiCss.prototype);
  unicodeBidiReady = true;
}

function userSelectKeywords() {
  return {
    all: 'user-select:all;',
    auto: 'user-select:auto;',
    inherit: 'user-select:inherit;',
    initial: 'user-select:initial;',
    none: 'user-select:none;',
    revert: 'user-select:revert;',
    revertLayer: 'user-select:revert-layer;',
    text: 'user-select:text;',
    unset: 'user-select:unset;',
  } as const;
}

type UserSelectCssKeywords = Readonly<ReturnType<typeof userSelectKeywords>>;
export interface UserSelectCss extends UserSelectCssKeywords {}
/** CSS 属性 user-select；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
 */
export class UserSelectCss extends CssProperty<Property.UserSelect> {
  constructor() {
    super('user-select');
    initializeUserSelectCss();
  }
}
let userSelectReady = false;
function initializeUserSelectCss(): void {
  if (userSelectReady) return;
  Object.assign(UserSelectCss.prototype, userSelectKeywords());
  Object.freeze(UserSelectCss.prototype);
  userSelectReady = true;
}

function vectorEffectKeywords() {
  return {
    fixedPosition: 'vector-effect:fixed-position;',
    inherit: 'vector-effect:inherit;',
    initial: 'vector-effect:initial;',
    nonRotation: 'vector-effect:non-rotation;',
    nonScalingSize: 'vector-effect:non-scaling-size;',
    nonScalingStroke: 'vector-effect:non-scaling-stroke;',
    none: 'vector-effect:none;',
    revert: 'vector-effect:revert;',
    revertLayer: 'vector-effect:revert-layer;',
    unset: 'vector-effect:unset;',
  } as const;
}

type VectorEffectCssKeywords = Readonly<ReturnType<typeof vectorEffectKeywords>>;
export interface VectorEffectCss extends VectorEffectCssKeywords {}
/** CSS 属性 vector-effect；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
 */
export class VectorEffectCss extends CssProperty<Property.VectorEffect> {
  constructor() {
    super('vector-effect');
    initializeVectorEffectCss();
  }
}
let vectorEffectReady = false;
function initializeVectorEffectCss(): void {
  if (vectorEffectReady) return;
  Object.assign(VectorEffectCss.prototype, vectorEffectKeywords());
  Object.freeze(VectorEffectCss.prototype);
  vectorEffectReady = true;
}

function verticalAlignKeywords() {
  return {
    baseline: 'vertical-align:baseline;',
    bottom: 'vertical-align:bottom;',
    inherit: 'vertical-align:inherit;',
    initial: 'vertical-align:initial;',
    middle: 'vertical-align:middle;',
    revert: 'vertical-align:revert;',
    revertLayer: 'vertical-align:revert-layer;',
    sub: 'vertical-align:sub;',
    super: 'vertical-align:super;',
    textBottom: 'vertical-align:text-bottom;',
    textTop: 'vertical-align:text-top;',
    top: 'vertical-align:top;',
    unset: 'vertical-align:unset;',
  } as const;
}

type VerticalAlignCssKeywords = Readonly<ReturnType<typeof verticalAlignKeywords>>;
export interface VerticalAlignCss extends VerticalAlignCssKeywords {}
/** CSS 属性 vertical-align；初始值 baseline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
 */
export class VerticalAlignCss extends LengthCssProperty<Property.VerticalAlign> {
  constructor() {
    super('vertical-align');
    initializeVerticalAlignCss();
  }
}
let verticalAlignReady = false;
function initializeVerticalAlignCss(): void {
  if (verticalAlignReady) return;
  Object.assign(VerticalAlignCss.prototype, verticalAlignKeywords());
  Object.freeze(VerticalAlignCss.prototype);
  verticalAlignReady = true;
}

function viewTimelineKeywords() {
  return {
    inherit: 'view-timeline:inherit;',
    initial: 'view-timeline:initial;',
    none: 'view-timeline:none;',
    revert: 'view-timeline:revert;',
    revertLayer: 'view-timeline:revert-layer;',
    unset: 'view-timeline:unset;',
  } as const;
}

type ViewTimelineCssKeywords = Readonly<ReturnType<typeof viewTimelineKeywords>>;
export interface ViewTimelineCss extends ViewTimelineCssKeywords {}
/** CSS 属性 view-timeline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
 */
export class ViewTimelineCss extends CssProperty<Property.ViewTimeline> {
  constructor() {
    super('view-timeline');
    initializeViewTimelineCss();
  }
}
let viewTimelineReady = false;
function initializeViewTimelineCss(): void {
  if (viewTimelineReady) return;
  Object.assign(ViewTimelineCss.prototype, viewTimelineKeywords());
  Object.freeze(ViewTimelineCss.prototype);
  viewTimelineReady = true;
}

function viewTimelineAxisKeywords() {
  return {
    block: 'view-timeline-axis:block;',
    inherit: 'view-timeline-axis:inherit;',
    initial: 'view-timeline-axis:initial;',
    inline: 'view-timeline-axis:inline;',
    revert: 'view-timeline-axis:revert;',
    revertLayer: 'view-timeline-axis:revert-layer;',
    unset: 'view-timeline-axis:unset;',
    x: 'view-timeline-axis:x;',
    y: 'view-timeline-axis:y;',
  } as const;
}

type ViewTimelineAxisCssKeywords = Readonly<ReturnType<typeof viewTimelineAxisKeywords>>;
export interface ViewTimelineAxisCss extends ViewTimelineAxisCssKeywords {}
/** CSS 属性 view-timeline-axis；初始值 block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
 */
export class ViewTimelineAxisCss extends CssProperty<Property.ViewTimelineAxis> {
  constructor() {
    super('view-timeline-axis');
    initializeViewTimelineAxisCss();
  }
}
let viewTimelineAxisReady = false;
function initializeViewTimelineAxisCss(): void {
  if (viewTimelineAxisReady) return;
  Object.assign(ViewTimelineAxisCss.prototype, viewTimelineAxisKeywords());
  Object.freeze(ViewTimelineAxisCss.prototype);
  viewTimelineAxisReady = true;
}

function viewTimelineInsetKeywords() {
  return {
    auto: 'view-timeline-inset:auto;',
    inherit: 'view-timeline-inset:inherit;',
    initial: 'view-timeline-inset:initial;',
    revert: 'view-timeline-inset:revert;',
    revertLayer: 'view-timeline-inset:revert-layer;',
    unset: 'view-timeline-inset:unset;',
  } as const;
}

type ViewTimelineInsetCssKeywords = Readonly<ReturnType<typeof viewTimelineInsetKeywords>>;
export interface ViewTimelineInsetCss extends ViewTimelineInsetCssKeywords {}
/** CSS 属性 view-timeline-inset；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
 */
export class ViewTimelineInsetCss extends LengthCssProperty<Property.ViewTimelineInset> {
  constructor() {
    super('view-timeline-inset');
    initializeViewTimelineInsetCss();
  }
}
let viewTimelineInsetReady = false;
function initializeViewTimelineInsetCss(): void {
  if (viewTimelineInsetReady) return;
  Object.assign(ViewTimelineInsetCss.prototype, viewTimelineInsetKeywords());
  Object.freeze(ViewTimelineInsetCss.prototype);
  viewTimelineInsetReady = true;
}

function viewTimelineNameKeywords() {
  return {
    inherit: 'view-timeline-name:inherit;',
    initial: 'view-timeline-name:initial;',
    none: 'view-timeline-name:none;',
    revert: 'view-timeline-name:revert;',
    revertLayer: 'view-timeline-name:revert-layer;',
    unset: 'view-timeline-name:unset;',
  } as const;
}

type ViewTimelineNameCssKeywords = Readonly<ReturnType<typeof viewTimelineNameKeywords>>;
export interface ViewTimelineNameCss extends ViewTimelineNameCssKeywords {}
/** CSS 属性 view-timeline-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
 */
export class ViewTimelineNameCss extends CssProperty<Property.ViewTimelineName> {
  constructor() {
    super('view-timeline-name');
    initializeViewTimelineNameCss();
  }
}
let viewTimelineNameReady = false;
function initializeViewTimelineNameCss(): void {
  if (viewTimelineNameReady) return;
  Object.assign(ViewTimelineNameCss.prototype, viewTimelineNameKeywords());
  Object.freeze(ViewTimelineNameCss.prototype);
  viewTimelineNameReady = true;
}

function viewTransitionClassKeywords() {
  return {
    inherit: 'view-transition-class:inherit;',
    initial: 'view-transition-class:initial;',
    none: 'view-transition-class:none;',
    revert: 'view-transition-class:revert;',
    revertLayer: 'view-transition-class:revert-layer;',
    unset: 'view-transition-class:unset;',
  } as const;
}

type ViewTransitionClassCssKeywords = Readonly<ReturnType<typeof viewTransitionClassKeywords>>;
export interface ViewTransitionClassCss extends ViewTransitionClassCssKeywords {}
/** CSS 属性 view-transition-class；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
 */
export class ViewTransitionClassCss extends CssProperty<Property.ViewTransitionClass> {
  constructor() {
    super('view-transition-class');
    initializeViewTransitionClassCss();
  }
}
let viewTransitionClassReady = false;
function initializeViewTransitionClassCss(): void {
  if (viewTransitionClassReady) return;
  Object.assign(ViewTransitionClassCss.prototype, viewTransitionClassKeywords());
  Object.freeze(ViewTransitionClassCss.prototype);
  viewTransitionClassReady = true;
}

function viewTransitionNameKeywords() {
  return {
    inherit: 'view-transition-name:inherit;',
    initial: 'view-transition-name:initial;',
    matchElement: 'view-transition-name:match-element;',
    none: 'view-transition-name:none;',
    revert: 'view-transition-name:revert;',
    revertLayer: 'view-transition-name:revert-layer;',
    unset: 'view-transition-name:unset;',
  } as const;
}

type ViewTransitionNameCssKeywords = Readonly<ReturnType<typeof viewTransitionNameKeywords>>;
export interface ViewTransitionNameCss extends ViewTransitionNameCssKeywords {}
/** CSS 属性 view-transition-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
 */
export class ViewTransitionNameCss extends CssProperty<Property.ViewTransitionName> {
  constructor() {
    super('view-transition-name');
    initializeViewTransitionNameCss();
  }
}
let viewTransitionNameReady = false;
function initializeViewTransitionNameCss(): void {
  if (viewTransitionNameReady) return;
  Object.assign(ViewTransitionNameCss.prototype, viewTransitionNameKeywords());
  Object.freeze(ViewTransitionNameCss.prototype);
  viewTransitionNameReady = true;
}

function visibilityKeywords() {
  return {
    collapse: 'visibility:collapse;',
    hidden: 'visibility:hidden;',
    inherit: 'visibility:inherit;',
    initial: 'visibility:initial;',
    revert: 'visibility:revert;',
    revertLayer: 'visibility:revert-layer;',
    unset: 'visibility:unset;',
    visible: 'visibility:visible;',
  } as const;
}

type VisibilityCssKeywords = Readonly<ReturnType<typeof visibilityKeywords>>;
export interface VisibilityCss extends VisibilityCssKeywords {}
/** CSS 属性 visibility；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
 */
export class VisibilityCss extends CssProperty<Property.Visibility> {
  constructor() {
    super('visibility');
    initializeVisibilityCss();
  }
}
let visibilityReady = false;
function initializeVisibilityCss(): void {
  if (visibilityReady) return;
  Object.assign(VisibilityCss.prototype, visibilityKeywords());
  Object.freeze(VisibilityCss.prototype);
  visibilityReady = true;
}

function whiteSpaceKeywords() {
  return {
    breakSpaces: 'white-space:break-spaces;',
    collapse: 'white-space:collapse;',
    inherit: 'white-space:inherit;',
    initial: 'white-space:initial;',
    normal: 'white-space:normal;',
    nowrap: 'white-space:nowrap;',
    pre: 'white-space:pre;',
    preLine: 'white-space:pre-line;',
    preWrap: 'white-space:pre-wrap;',
    preserve: 'white-space:preserve;',
    preserveBreaks: 'white-space:preserve-breaks;',
    preserveSpaces: 'white-space:preserve-spaces;',
    revert: 'white-space:revert;',
    revertLayer: 'white-space:revert-layer;',
    unset: 'white-space:unset;',
    wrap: 'white-space:wrap;',
  } as const;
}

type WhiteSpaceCssKeywords = Readonly<ReturnType<typeof whiteSpaceKeywords>>;
export interface WhiteSpaceCss extends WhiteSpaceCssKeywords {}
/** CSS 属性 white-space；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
 */
export class WhiteSpaceCss extends CssProperty<Property.WhiteSpace> {
  constructor() {
    super('white-space');
    initializeWhiteSpaceCss();
  }
}
let whiteSpaceReady = false;
function initializeWhiteSpaceCss(): void {
  if (whiteSpaceReady) return;
  Object.assign(WhiteSpaceCss.prototype, whiteSpaceKeywords());
  Object.freeze(WhiteSpaceCss.prototype);
  whiteSpaceReady = true;
}

function whiteSpaceCollapseKeywords() {
  return {
    breakSpaces: 'white-space-collapse:break-spaces;',
    collapse: 'white-space-collapse:collapse;',
    inherit: 'white-space-collapse:inherit;',
    initial: 'white-space-collapse:initial;',
    preserve: 'white-space-collapse:preserve;',
    preserveBreaks: 'white-space-collapse:preserve-breaks;',
    preserveSpaces: 'white-space-collapse:preserve-spaces;',
    revert: 'white-space-collapse:revert;',
    revertLayer: 'white-space-collapse:revert-layer;',
    unset: 'white-space-collapse:unset;',
  } as const;
}

type WhiteSpaceCollapseCssKeywords = Readonly<ReturnType<typeof whiteSpaceCollapseKeywords>>;
export interface WhiteSpaceCollapseCss extends WhiteSpaceCollapseCssKeywords {}
/** CSS 属性 white-space-collapse；初始值 collapse。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
 */
export class WhiteSpaceCollapseCss extends CssProperty<Property.WhiteSpaceCollapse> {
  constructor() {
    super('white-space-collapse');
    initializeWhiteSpaceCollapseCss();
  }
}
let whiteSpaceCollapseReady = false;
function initializeWhiteSpaceCollapseCss(): void {
  if (whiteSpaceCollapseReady) return;
  Object.assign(WhiteSpaceCollapseCss.prototype, whiteSpaceCollapseKeywords());
  Object.freeze(WhiteSpaceCollapseCss.prototype);
  whiteSpaceCollapseReady = true;
}

function widowsKeywords() {
  return {
    inherit: 'widows:inherit;',
    initial: 'widows:initial;',
    revert: 'widows:revert;',
    revertLayer: 'widows:revert-layer;',
    unset: 'widows:unset;',
  } as const;
}

type WidowsCssKeywords = Readonly<ReturnType<typeof widowsKeywords>>;
export interface WidowsCss extends WidowsCssKeywords {}
/** CSS 属性 widows；初始值 2。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
 */
export class WidowsCss extends CssProperty<Property.Widows> {
  constructor() {
    super('widows');
    initializeWidowsCss();
  }
}
let widowsReady = false;
function initializeWidowsCss(): void {
  if (widowsReady) return;
  Object.assign(WidowsCss.prototype, widowsKeywords());
  Object.freeze(WidowsCss.prototype);
  widowsReady = true;
}

function widthKeywords() {
  return {
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
}

type WidthCssKeywords = Readonly<ReturnType<typeof widthKeywords>>;
export interface WidthCss extends WidthCssKeywords {}
/** 宽度（CSS width）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
 */
export class WidthCss extends LengthCssProperty<Property.Width> {
  constructor() {
    super('width');
    initializeWidthCss();
  }
}
let widthReady = false;
function initializeWidthCss(): void {
  if (widthReady) return;
  Object.assign(WidthCss.prototype, widthKeywords());
  Object.freeze(WidthCss.prototype);
  widthReady = true;
}

function willChangeKeywords() {
  return {
    auto: 'will-change:auto;',
    contents: 'will-change:contents;',
    inherit: 'will-change:inherit;',
    initial: 'will-change:initial;',
    revert: 'will-change:revert;',
    revertLayer: 'will-change:revert-layer;',
    scrollPosition: 'will-change:scroll-position;',
    unset: 'will-change:unset;',
  } as const;
}

type WillChangeCssKeywords = Readonly<ReturnType<typeof willChangeKeywords>>;
export interface WillChangeCss extends WillChangeCssKeywords {}
/** CSS 属性 will-change；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
 */
export class WillChangeCss extends CssProperty<Property.WillChange> {
  constructor() {
    super('will-change');
    initializeWillChangeCss();
  }
}
let willChangeReady = false;
function initializeWillChangeCss(): void {
  if (willChangeReady) return;
  Object.assign(WillChangeCss.prototype, willChangeKeywords());
  Object.freeze(WillChangeCss.prototype);
  willChangeReady = true;
}

function wordBreakKeywords() {
  return {
    autoPhrase: 'word-break:auto-phrase;',
    breakAll: 'word-break:break-all;',
    breakWord: 'word-break:break-word;',
    inherit: 'word-break:inherit;',
    initial: 'word-break:initial;',
    keepAll: 'word-break:keep-all;',
    normal: 'word-break:normal;',
    revert: 'word-break:revert;',
    revertLayer: 'word-break:revert-layer;',
    unset: 'word-break:unset;',
  } as const;
}

type WordBreakCssKeywords = Readonly<ReturnType<typeof wordBreakKeywords>>;
export interface WordBreakCss extends WordBreakCssKeywords {}
/** CSS 属性 word-break；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
 */
export class WordBreakCss extends CssProperty<Property.WordBreak> {
  constructor() {
    super('word-break');
    initializeWordBreakCss();
  }
}
let wordBreakReady = false;
function initializeWordBreakCss(): void {
  if (wordBreakReady) return;
  Object.assign(WordBreakCss.prototype, wordBreakKeywords());
  Object.freeze(WordBreakCss.prototype);
  wordBreakReady = true;
}

function wordSpacingKeywords() {
  return {
    inherit: 'word-spacing:inherit;',
    initial: 'word-spacing:initial;',
    normal: 'word-spacing:normal;',
    revert: 'word-spacing:revert;',
    revertLayer: 'word-spacing:revert-layer;',
    unset: 'word-spacing:unset;',
  } as const;
}

type WordSpacingCssKeywords = Readonly<ReturnType<typeof wordSpacingKeywords>>;
export interface WordSpacingCss extends WordSpacingCssKeywords {}
/** CSS 属性 word-spacing；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
 */
export class WordSpacingCss extends LengthCssProperty<Property.WordSpacing> {
  constructor() {
    super('word-spacing');
    initializeWordSpacingCss();
  }
}
let wordSpacingReady = false;
function initializeWordSpacingCss(): void {
  if (wordSpacingReady) return;
  Object.assign(WordSpacingCss.prototype, wordSpacingKeywords());
  Object.freeze(WordSpacingCss.prototype);
  wordSpacingReady = true;
}

function wordWrapKeywords() {
  return {
    breakWord: 'word-wrap:break-word;',
    inherit: 'word-wrap:inherit;',
    initial: 'word-wrap:initial;',
    normal: 'word-wrap:normal;',
    revert: 'word-wrap:revert;',
    revertLayer: 'word-wrap:revert-layer;',
    unset: 'word-wrap:unset;',
  } as const;
}

type WordWrapCssKeywords = Readonly<ReturnType<typeof wordWrapKeywords>>;
export interface WordWrapCss extends WordWrapCssKeywords {}
/** CSS 属性 word-wrap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
 */
export class WordWrapCss extends CssProperty<Property.WordWrap> {
  constructor() {
    super('word-wrap');
    initializeWordWrapCss();
  }
}
let wordWrapReady = false;
function initializeWordWrapCss(): void {
  if (wordWrapReady) return;
  Object.assign(WordWrapCss.prototype, wordWrapKeywords());
  Object.freeze(WordWrapCss.prototype);
  wordWrapReady = true;
}

function writingModeKeywords() {
  return {
    horizontalTb: 'writing-mode:horizontal-tb;',
    inherit: 'writing-mode:inherit;',
    initial: 'writing-mode:initial;',
    revert: 'writing-mode:revert;',
    revertLayer: 'writing-mode:revert-layer;',
    sidewaysLr: 'writing-mode:sideways-lr;',
    sidewaysRl: 'writing-mode:sideways-rl;',
    unset: 'writing-mode:unset;',
    verticalLr: 'writing-mode:vertical-lr;',
    verticalRl: 'writing-mode:vertical-rl;',
  } as const;
}

type WritingModeCssKeywords = Readonly<ReturnType<typeof writingModeKeywords>>;
export interface WritingModeCss extends WritingModeCssKeywords {}
/** CSS 属性 writing-mode；初始值 horizontal-tb。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
 */
export class WritingModeCss extends CssProperty<Property.WritingMode> {
  constructor() {
    super('writing-mode');
    initializeWritingModeCss();
  }
}
let writingModeReady = false;
function initializeWritingModeCss(): void {
  if (writingModeReady) return;
  Object.assign(WritingModeCss.prototype, writingModeKeywords());
  Object.freeze(WritingModeCss.prototype);
  writingModeReady = true;
}

function xKeywords() {
  return {
    inherit: 'x:inherit;',
    initial: 'x:initial;',
    revert: 'x:revert;',
    revertLayer: 'x:revert-layer;',
    unset: 'x:unset;',
  } as const;
}

type XCssKeywords = Readonly<ReturnType<typeof xKeywords>>;
export interface XCss extends XCssKeywords {}
/** CSS 属性 x；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
 */
export class XCss extends LengthCssProperty<Property.X> {
  constructor() {
    super('x');
    initializeXCss();
  }
}
let xReady = false;
function initializeXCss(): void {
  if (xReady) return;
  Object.assign(XCss.prototype, xKeywords());
  Object.freeze(XCss.prototype);
  xReady = true;
}

function yKeywords() {
  return {
    inherit: 'y:inherit;',
    initial: 'y:initial;',
    revert: 'y:revert;',
    revertLayer: 'y:revert-layer;',
    unset: 'y:unset;',
  } as const;
}

type YCssKeywords = Readonly<ReturnType<typeof yKeywords>>;
export interface YCss extends YCssKeywords {}
/** CSS 属性 y；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
 */
export class YCss extends LengthCssProperty<Property.Y> {
  constructor() {
    super('y');
    initializeYCss();
  }
}
let yReady = false;
function initializeYCss(): void {
  if (yReady) return;
  Object.assign(YCss.prototype, yKeywords());
  Object.freeze(YCss.prototype);
  yReady = true;
}

function zIndexKeywords() {
  return {
    auto: 'z-index:auto;',
    inherit: 'z-index:inherit;',
    initial: 'z-index:initial;',
    revert: 'z-index:revert;',
    revertLayer: 'z-index:revert-layer;',
    unset: 'z-index:unset;',
  } as const;
}

type ZIndexCssKeywords = Readonly<ReturnType<typeof zIndexKeywords>>;
export interface ZIndexCss extends ZIndexCssKeywords {}
/** CSS 属性 z-index；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
 */
export class ZIndexCss extends CssProperty<Property.ZIndex> {
  constructor() {
    super('z-index');
    initializeZIndexCss();
  }
}
let zIndexReady = false;
function initializeZIndexCss(): void {
  if (zIndexReady) return;
  Object.assign(ZIndexCss.prototype, zIndexKeywords());
  Object.freeze(ZIndexCss.prototype);
  zIndexReady = true;
}

function zoomKeywords() {
  return {
    inherit: 'zoom:inherit;',
    initial: 'zoom:initial;',
    normal: 'zoom:normal;',
    reset: 'zoom:reset;',
    revert: 'zoom:revert;',
    revertLayer: 'zoom:revert-layer;',
    unset: 'zoom:unset;',
  } as const;
}

type ZoomCssKeywords = Readonly<ReturnType<typeof zoomKeywords>>;
export interface ZoomCss extends ZoomCssKeywords {}
/** CSS 属性 zoom；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
 */
export class ZoomCss extends CssProperty<Property.Zoom> {
  constructor() {
    super('zoom');
    initializeZoomCss();
  }
}
let zoomReady = false;
function initializeZoomCss(): void {
  if (zoomReady) return;
  Object.assign(ZoomCss.prototype, zoomKeywords());
  Object.freeze(ZoomCss.prototype);
  zoomReady = true;
}

/** 系统属性链；项目可通过类继承扩展关键字。 */
export class Css {
  declare readonly accentColor: AccentColorCss;
  declare readonly alignContent: AlignContentCss;
  declare readonly alignItems: AlignItemsCss;
  declare readonly alignSelf: AlignSelfCss;
  declare readonly alignTracks: AlignTracksCss;
  declare readonly alignmentBaseline: AlignmentBaselineCss;
  declare readonly all: AllCss;
  declare readonly anchorName: AnchorNameCss;
  declare readonly anchorScope: AnchorScopeCss;
  declare readonly animation: AnimationCss;
  declare readonly animationComposition: AnimationCompositionCss;
  declare readonly animationDelay: AnimationDelayCss;
  declare readonly animationDirection: AnimationDirectionCss;
  declare readonly animationDuration: AnimationDurationCss;
  declare readonly animationFillMode: AnimationFillModeCss;
  declare readonly animationIterationCount: AnimationIterationCountCss;
  declare readonly animationName: AnimationNameCss;
  declare readonly animationPlayState: AnimationPlayStateCss;
  declare readonly animationRange: AnimationRangeCss;
  declare readonly animationRangeEnd: AnimationRangeEndCss;
  declare readonly animationRangeStart: AnimationRangeStartCss;
  declare readonly animationTimeline: AnimationTimelineCss;
  declare readonly animationTimingFunction: AnimationTimingFunctionCss;
  declare readonly appearance: AppearanceCss;
  declare readonly aspectRatio: AspectRatioCss;
  declare readonly backdropFilter: BackdropFilterCss;
  declare readonly backfaceVisibility: BackfaceVisibilityCss;
  declare readonly background: BackgroundCss;
  declare readonly backgroundAttachment: BackgroundAttachmentCss;
  declare readonly backgroundBlendMode: BackgroundBlendModeCss;
  declare readonly backgroundClip: BackgroundClipCss;
  declare readonly backgroundColor: BackgroundColorCss;
  declare readonly backgroundImage: BackgroundImageCss;
  declare readonly backgroundOrigin: BackgroundOriginCss;
  declare readonly backgroundPosition: BackgroundPositionCss;
  declare readonly backgroundPositionX: BackgroundPositionXCss;
  declare readonly backgroundPositionY: BackgroundPositionYCss;
  declare readonly backgroundRepeat: BackgroundRepeatCss;
  declare readonly backgroundSize: BackgroundSizeCss;
  declare readonly baselineShift: BaselineShiftCss;
  declare readonly blockSize: BlockSizeCss;
  declare readonly border: BorderCss;
  declare readonly borderBlock: BorderBlockCss;
  declare readonly borderBlockColor: BorderBlockColorCss;
  declare readonly borderBlockEnd: BorderBlockEndCss;
  declare readonly borderBlockEndColor: BorderBlockEndColorCss;
  declare readonly borderBlockEndStyle: BorderBlockEndStyleCss;
  declare readonly borderBlockEndWidth: BorderBlockEndWidthCss;
  declare readonly borderBlockStart: BorderBlockStartCss;
  declare readonly borderBlockStartColor: BorderBlockStartColorCss;
  declare readonly borderBlockStartStyle: BorderBlockStartStyleCss;
  declare readonly borderBlockStartWidth: BorderBlockStartWidthCss;
  declare readonly borderBlockStyle: BorderBlockStyleCss;
  declare readonly borderBlockWidth: BorderBlockWidthCss;
  declare readonly borderBottom: BorderBottomCss;
  declare readonly borderBottomColor: BorderBottomColorCss;
  declare readonly borderBottomLeftRadius: BorderBottomLeftRadiusCss;
  declare readonly borderBottomRightRadius: BorderBottomRightRadiusCss;
  declare readonly borderBottomStyle: BorderBottomStyleCss;
  declare readonly borderBottomWidth: BorderBottomWidthCss;
  declare readonly borderCollapse: BorderCollapseCss;
  declare readonly borderColor: BorderColorCss;
  declare readonly borderEndEndRadius: BorderEndEndRadiusCss;
  declare readonly borderEndStartRadius: BorderEndStartRadiusCss;
  declare readonly borderImage: BorderImageCss;
  declare readonly borderImageOutset: BorderImageOutsetCss;
  declare readonly borderImageRepeat: BorderImageRepeatCss;
  declare readonly borderImageSlice: BorderImageSliceCss;
  declare readonly borderImageSource: BorderImageSourceCss;
  declare readonly borderImageWidth: BorderImageWidthCss;
  declare readonly borderInline: BorderInlineCss;
  declare readonly borderInlineColor: BorderInlineColorCss;
  declare readonly borderInlineEnd: BorderInlineEndCss;
  declare readonly borderInlineEndColor: BorderInlineEndColorCss;
  declare readonly borderInlineEndStyle: BorderInlineEndStyleCss;
  declare readonly borderInlineEndWidth: BorderInlineEndWidthCss;
  declare readonly borderInlineStart: BorderInlineStartCss;
  declare readonly borderInlineStartColor: BorderInlineStartColorCss;
  declare readonly borderInlineStartStyle: BorderInlineStartStyleCss;
  declare readonly borderInlineStartWidth: BorderInlineStartWidthCss;
  declare readonly borderInlineStyle: BorderInlineStyleCss;
  declare readonly borderInlineWidth: BorderInlineWidthCss;
  declare readonly borderLeft: BorderLeftCss;
  declare readonly borderLeftColor: BorderLeftColorCss;
  declare readonly borderLeftStyle: BorderLeftStyleCss;
  declare readonly borderLeftWidth: BorderLeftWidthCss;
  declare readonly borderRadius: BorderRadiusCss;
  declare readonly borderRight: BorderRightCss;
  declare readonly borderRightColor: BorderRightColorCss;
  declare readonly borderRightStyle: BorderRightStyleCss;
  declare readonly borderRightWidth: BorderRightWidthCss;
  declare readonly borderSpacing: BorderSpacingCss;
  declare readonly borderStartEndRadius: BorderStartEndRadiusCss;
  declare readonly borderStartStartRadius: BorderStartStartRadiusCss;
  declare readonly borderStyle: BorderStyleCss;
  declare readonly borderTop: BorderTopCss;
  declare readonly borderTopColor: BorderTopColorCss;
  declare readonly borderTopLeftRadius: BorderTopLeftRadiusCss;
  declare readonly borderTopRightRadius: BorderTopRightRadiusCss;
  declare readonly borderTopStyle: BorderTopStyleCss;
  declare readonly borderTopWidth: BorderTopWidthCss;
  declare readonly borderWidth: BorderWidthCss;
  declare readonly bottom: BottomCss;
  declare readonly boxDecorationBreak: BoxDecorationBreakCss;
  declare readonly boxShadow: BoxShadowCss;
  declare readonly boxSizing: BoxSizingCss;
  declare readonly breakAfter: BreakAfterCss;
  declare readonly breakBefore: BreakBeforeCss;
  declare readonly breakInside: BreakInsideCss;
  declare readonly captionSide: CaptionSideCss;
  declare readonly caret: CaretCss;
  declare readonly caretColor: CaretColorCss;
  declare readonly caretShape: CaretShapeCss;
  declare readonly clear: ClearCss;
  declare readonly clip: ClipCss;
  declare readonly clipPath: ClipPathCss;
  declare readonly clipRule: ClipRuleCss;
  declare readonly color: ColorCss;
  declare readonly colorAdjust: ColorAdjustCss;
  declare readonly colorInterpolation: ColorInterpolationCss;
  declare readonly colorInterpolationFilters: ColorInterpolationFiltersCss;
  declare readonly colorRendering: ColorRenderingCss;
  declare readonly colorScheme: ColorSchemeCss;
  declare readonly columnCount: ColumnCountCss;
  declare readonly columnFill: ColumnFillCss;
  declare readonly columnGap: ColumnGapCss;
  declare readonly columnRule: ColumnRuleCss;
  declare readonly columnRuleColor: ColumnRuleColorCss;
  declare readonly columnRuleStyle: ColumnRuleStyleCss;
  declare readonly columnRuleWidth: ColumnRuleWidthCss;
  declare readonly columnSpan: ColumnSpanCss;
  declare readonly columnWidth: ColumnWidthCss;
  declare readonly columns: ColumnsCss;
  declare readonly contain: ContainCss;
  declare readonly containIntrinsicBlockSize: ContainIntrinsicBlockSizeCss;
  declare readonly containIntrinsicHeight: ContainIntrinsicHeightCss;
  declare readonly containIntrinsicInlineSize: ContainIntrinsicInlineSizeCss;
  declare readonly containIntrinsicSize: ContainIntrinsicSizeCss;
  declare readonly containIntrinsicWidth: ContainIntrinsicWidthCss;
  declare readonly container: ContainerCss;
  declare readonly containerName: ContainerNameCss;
  declare readonly containerType: ContainerTypeCss;
  declare readonly content: ContentCss;
  declare readonly contentVisibility: ContentVisibilityCss;
  declare readonly counterIncrement: CounterIncrementCss;
  declare readonly counterReset: CounterResetCss;
  declare readonly counterSet: CounterSetCss;
  declare readonly cursor: CursorCss;
  declare readonly cx: CxCss;
  declare readonly cy: CyCss;
  declare readonly d: DCss;
  declare readonly direction: DirectionCss;
  declare readonly display: DisplayCss;
  declare readonly dominantBaseline: DominantBaselineCss;
  declare readonly emptyCells: EmptyCellsCss;
  declare readonly fieldSizing: FieldSizingCss;
  declare readonly fill: FillCss;
  declare readonly fillOpacity: FillOpacityCss;
  declare readonly fillRule: FillRuleCss;
  declare readonly filter: FilterCss;
  declare readonly flex: FlexCss;
  declare readonly flexBasis: FlexBasisCss;
  declare readonly flexDirection: FlexDirectionCss;
  declare readonly flexFlow: FlexFlowCss;
  declare readonly flexGrow: FlexGrowCss;
  declare readonly flexShrink: FlexShrinkCss;
  declare readonly flexWrap: FlexWrapCss;
  declare readonly float: FloatCss;
  declare readonly floodColor: FloodColorCss;
  declare readonly floodOpacity: FloodOpacityCss;
  declare readonly font: FontCss;
  declare readonly fontFamily: FontFamilyCss;
  declare readonly fontFeatureSettings: FontFeatureSettingsCss;
  declare readonly fontKerning: FontKerningCss;
  declare readonly fontLanguageOverride: FontLanguageOverrideCss;
  declare readonly fontOpticalSizing: FontOpticalSizingCss;
  declare readonly fontPalette: FontPaletteCss;
  declare readonly fontSize: FontSizeCss;
  declare readonly fontSizeAdjust: FontSizeAdjustCss;
  declare readonly fontSmooth: FontSmoothCss;
  declare readonly fontStretch: FontStretchCss;
  declare readonly fontStyle: FontStyleCss;
  declare readonly fontSynthesis: FontSynthesisCss;
  declare readonly fontSynthesisPosition: FontSynthesisPositionCss;
  declare readonly fontSynthesisSmallCaps: FontSynthesisSmallCapsCss;
  declare readonly fontSynthesisStyle: FontSynthesisStyleCss;
  declare readonly fontSynthesisWeight: FontSynthesisWeightCss;
  declare readonly fontVariant: FontVariantCss;
  declare readonly fontVariantAlternates: FontVariantAlternatesCss;
  declare readonly fontVariantCaps: FontVariantCapsCss;
  declare readonly fontVariantEastAsian: FontVariantEastAsianCss;
  declare readonly fontVariantEmoji: FontVariantEmojiCss;
  declare readonly fontVariantLigatures: FontVariantLigaturesCss;
  declare readonly fontVariantNumeric: FontVariantNumericCss;
  declare readonly fontVariantPosition: FontVariantPositionCss;
  declare readonly fontVariationSettings: FontVariationSettingsCss;
  declare readonly fontWeight: FontWeightCss;
  declare readonly fontWidth: FontWidthCss;
  declare readonly forcedColorAdjust: ForcedColorAdjustCss;
  declare readonly gap: GapCss;
  declare readonly glyphOrientationVertical: GlyphOrientationVerticalCss;
  declare readonly grid: GridCss;
  declare readonly gridArea: GridAreaCss;
  declare readonly gridAutoColumns: GridAutoColumnsCss;
  declare readonly gridAutoFlow: GridAutoFlowCss;
  declare readonly gridAutoRows: GridAutoRowsCss;
  declare readonly gridColumn: GridColumnCss;
  declare readonly gridColumnEnd: GridColumnEndCss;
  declare readonly gridColumnStart: GridColumnStartCss;
  declare readonly gridRow: GridRowCss;
  declare readonly gridRowEnd: GridRowEndCss;
  declare readonly gridRowStart: GridRowStartCss;
  declare readonly gridTemplate: GridTemplateCss;
  declare readonly gridTemplateAreas: GridTemplateAreasCss;
  declare readonly gridTemplateColumns: GridTemplateColumnsCss;
  declare readonly gridTemplateRows: GridTemplateRowsCss;
  declare readonly hangingPunctuation: HangingPunctuationCss;
  declare readonly height: HeightCss;
  declare readonly hyphenateCharacter: HyphenateCharacterCss;
  declare readonly hyphenateLimitChars: HyphenateLimitCharsCss;
  declare readonly hyphens: HyphensCss;
  declare readonly imageOrientation: ImageOrientationCss;
  declare readonly imageRendering: ImageRenderingCss;
  declare readonly imageResolution: ImageResolutionCss;
  declare readonly initialLetter: InitialLetterCss;
  declare readonly initialLetterAlign: InitialLetterAlignCss;
  declare readonly inlineSize: InlineSizeCss;
  declare readonly inset: InsetCss;
  declare readonly insetBlock: InsetBlockCss;
  declare readonly insetBlockEnd: InsetBlockEndCss;
  declare readonly insetBlockStart: InsetBlockStartCss;
  declare readonly insetInline: InsetInlineCss;
  declare readonly insetInlineEnd: InsetInlineEndCss;
  declare readonly insetInlineStart: InsetInlineStartCss;
  declare readonly interpolateSize: InterpolateSizeCss;
  declare readonly isolation: IsolationCss;
  declare readonly justifyContent: JustifyContentCss;
  declare readonly justifyItems: JustifyItemsCss;
  declare readonly justifySelf: JustifySelfCss;
  declare readonly justifyTracks: JustifyTracksCss;
  declare readonly left: LeftCss;
  declare readonly letterSpacing: LetterSpacingCss;
  declare readonly lightingColor: LightingColorCss;
  declare readonly lineBreak: LineBreakCss;
  declare readonly lineClamp: LineClampCss;
  declare readonly lineHeight: LineHeightCss;
  declare readonly lineHeightStep: LineHeightStepCss;
  declare readonly listStyle: ListStyleCss;
  declare readonly listStyleImage: ListStyleImageCss;
  declare readonly listStylePosition: ListStylePositionCss;
  declare readonly listStyleType: ListStyleTypeCss;
  declare readonly margin: MarginCss;
  declare readonly marginBlock: MarginBlockCss;
  declare readonly marginBlockEnd: MarginBlockEndCss;
  declare readonly marginBlockStart: MarginBlockStartCss;
  declare readonly marginBottom: MarginBottomCss;
  declare readonly marginInline: MarginInlineCss;
  declare readonly marginInlineEnd: MarginInlineEndCss;
  declare readonly marginInlineStart: MarginInlineStartCss;
  declare readonly marginLeft: MarginLeftCss;
  declare readonly marginRight: MarginRightCss;
  declare readonly marginTop: MarginTopCss;
  declare readonly marginTrim: MarginTrimCss;
  declare readonly marker: MarkerCss;
  declare readonly markerEnd: MarkerEndCss;
  declare readonly markerMid: MarkerMidCss;
  declare readonly markerStart: MarkerStartCss;
  declare readonly mask: MaskCss;
  declare readonly maskBorder: MaskBorderCss;
  declare readonly maskBorderMode: MaskBorderModeCss;
  declare readonly maskBorderOutset: MaskBorderOutsetCss;
  declare readonly maskBorderRepeat: MaskBorderRepeatCss;
  declare readonly maskBorderSlice: MaskBorderSliceCss;
  declare readonly maskBorderSource: MaskBorderSourceCss;
  declare readonly maskBorderWidth: MaskBorderWidthCss;
  declare readonly maskClip: MaskClipCss;
  declare readonly maskComposite: MaskCompositeCss;
  declare readonly maskImage: MaskImageCss;
  declare readonly maskMode: MaskModeCss;
  declare readonly maskOrigin: MaskOriginCss;
  declare readonly maskPosition: MaskPositionCss;
  declare readonly maskRepeat: MaskRepeatCss;
  declare readonly maskSize: MaskSizeCss;
  declare readonly maskType: MaskTypeCss;
  declare readonly masonryAutoFlow: MasonryAutoFlowCss;
  declare readonly mathDepth: MathDepthCss;
  declare readonly mathShift: MathShiftCss;
  declare readonly mathStyle: MathStyleCss;
  declare readonly maxBlockSize: MaxBlockSizeCss;
  declare readonly maxHeight: MaxHeightCss;
  declare readonly maxInlineSize: MaxInlineSizeCss;
  declare readonly maxLines: MaxLinesCss;
  declare readonly maxWidth: MaxWidthCss;
  declare readonly minBlockSize: MinBlockSizeCss;
  declare readonly minHeight: MinHeightCss;
  declare readonly minInlineSize: MinInlineSizeCss;
  declare readonly minWidth: MinWidthCss;
  declare readonly mixBlendMode: MixBlendModeCss;
  declare readonly motion: MotionCss;
  declare readonly motionDistance: MotionDistanceCss;
  declare readonly motionPath: MotionPathCss;
  declare readonly motionRotation: MotionRotationCss;
  declare readonly objectFit: ObjectFitCss;
  declare readonly objectPosition: ObjectPositionCss;
  declare readonly objectViewBox: ObjectViewBoxCss;
  declare readonly offset: OffsetCss;
  declare readonly offsetAnchor: OffsetAnchorCss;
  declare readonly offsetDistance: OffsetDistanceCss;
  declare readonly offsetPath: OffsetPathCss;
  declare readonly offsetPosition: OffsetPositionCss;
  declare readonly offsetRotate: OffsetRotateCss;
  declare readonly offsetRotation: OffsetRotationCss;
  declare readonly opacity: OpacityCss;
  declare readonly order: OrderCss;
  declare readonly orphans: OrphansCss;
  declare readonly outline: OutlineCss;
  declare readonly outlineColor: OutlineColorCss;
  declare readonly outlineOffset: OutlineOffsetCss;
  declare readonly outlineStyle: OutlineStyleCss;
  declare readonly outlineWidth: OutlineWidthCss;
  declare readonly overflow: OverflowCss;
  declare readonly overflowAnchor: OverflowAnchorCss;
  declare readonly overflowBlock: OverflowBlockCss;
  declare readonly overflowClipBox: OverflowClipBoxCss;
  declare readonly overflowClipMargin: OverflowClipMarginCss;
  declare readonly overflowInline: OverflowInlineCss;
  declare readonly overflowWrap: OverflowWrapCss;
  declare readonly overflowX: OverflowXCss;
  declare readonly overflowY: OverflowYCss;
  declare readonly overlay: OverlayCss;
  declare readonly overscrollBehavior: OverscrollBehaviorCss;
  declare readonly overscrollBehaviorBlock: OverscrollBehaviorBlockCss;
  declare readonly overscrollBehaviorInline: OverscrollBehaviorInlineCss;
  declare readonly overscrollBehaviorX: OverscrollBehaviorXCss;
  declare readonly overscrollBehaviorY: OverscrollBehaviorYCss;
  declare readonly padding: PaddingCss;
  declare readonly paddingBlock: PaddingBlockCss;
  declare readonly paddingBlockEnd: PaddingBlockEndCss;
  declare readonly paddingBlockStart: PaddingBlockStartCss;
  declare readonly paddingBottom: PaddingBottomCss;
  declare readonly paddingInline: PaddingInlineCss;
  declare readonly paddingInlineEnd: PaddingInlineEndCss;
  declare readonly paddingInlineStart: PaddingInlineStartCss;
  declare readonly paddingLeft: PaddingLeftCss;
  declare readonly paddingRight: PaddingRightCss;
  declare readonly paddingTop: PaddingTopCss;
  declare readonly page: PageCss;
  declare readonly paintOrder: PaintOrderCss;
  declare readonly perspective: PerspectiveCss;
  declare readonly perspectiveOrigin: PerspectiveOriginCss;
  declare readonly placeContent: PlaceContentCss;
  declare readonly placeItems: PlaceItemsCss;
  declare readonly placeSelf: PlaceSelfCss;
  declare readonly pointerEvents: PointerEventsCss;
  declare readonly position: PositionCss;
  declare readonly positionAnchor: PositionAnchorCss;
  declare readonly positionArea: PositionAreaCss;
  declare readonly positionTry: PositionTryCss;
  declare readonly positionTryFallbacks: PositionTryFallbacksCss;
  declare readonly positionTryOrder: PositionTryOrderCss;
  declare readonly positionVisibility: PositionVisibilityCss;
  declare readonly printColorAdjust: PrintColorAdjustCss;
  declare readonly quotes: QuotesCss;
  declare readonly r: RCss;
  declare readonly resize: ResizeCss;
  declare readonly right: RightCss;
  declare readonly rotate: RotateCss;
  declare readonly rowGap: RowGapCss;
  declare readonly rubyAlign: RubyAlignCss;
  declare readonly rubyMerge: RubyMergeCss;
  declare readonly rubyOverhang: RubyOverhangCss;
  declare readonly rubyPosition: RubyPositionCss;
  declare readonly rx: RxCss;
  declare readonly ry: RyCss;
  declare readonly scale: ScaleCss;
  declare readonly scrollBehavior: ScrollBehaviorCss;
  declare readonly scrollInitialTarget: ScrollInitialTargetCss;
  declare readonly scrollMargin: ScrollMarginCss;
  declare readonly scrollMarginBlock: ScrollMarginBlockCss;
  declare readonly scrollMarginBlockEnd: ScrollMarginBlockEndCss;
  declare readonly scrollMarginBlockStart: ScrollMarginBlockStartCss;
  declare readonly scrollMarginBottom: ScrollMarginBottomCss;
  declare readonly scrollMarginInline: ScrollMarginInlineCss;
  declare readonly scrollMarginInlineEnd: ScrollMarginInlineEndCss;
  declare readonly scrollMarginInlineStart: ScrollMarginInlineStartCss;
  declare readonly scrollMarginLeft: ScrollMarginLeftCss;
  declare readonly scrollMarginRight: ScrollMarginRightCss;
  declare readonly scrollMarginTop: ScrollMarginTopCss;
  declare readonly scrollPadding: ScrollPaddingCss;
  declare readonly scrollPaddingBlock: ScrollPaddingBlockCss;
  declare readonly scrollPaddingBlockEnd: ScrollPaddingBlockEndCss;
  declare readonly scrollPaddingBlockStart: ScrollPaddingBlockStartCss;
  declare readonly scrollPaddingBottom: ScrollPaddingBottomCss;
  declare readonly scrollPaddingInline: ScrollPaddingInlineCss;
  declare readonly scrollPaddingInlineEnd: ScrollPaddingInlineEndCss;
  declare readonly scrollPaddingInlineStart: ScrollPaddingInlineStartCss;
  declare readonly scrollPaddingLeft: ScrollPaddingLeftCss;
  declare readonly scrollPaddingRight: ScrollPaddingRightCss;
  declare readonly scrollPaddingTop: ScrollPaddingTopCss;
  declare readonly scrollSnapAlign: ScrollSnapAlignCss;
  declare readonly scrollSnapMargin: ScrollSnapMarginCss;
  declare readonly scrollSnapMarginBottom: ScrollSnapMarginBottomCss;
  declare readonly scrollSnapMarginLeft: ScrollSnapMarginLeftCss;
  declare readonly scrollSnapMarginRight: ScrollSnapMarginRightCss;
  declare readonly scrollSnapMarginTop: ScrollSnapMarginTopCss;
  declare readonly scrollSnapStop: ScrollSnapStopCss;
  declare readonly scrollSnapType: ScrollSnapTypeCss;
  declare readonly scrollTimeline: ScrollTimelineCss;
  declare readonly scrollTimelineAxis: ScrollTimelineAxisCss;
  declare readonly scrollTimelineName: ScrollTimelineNameCss;
  declare readonly scrollbarColor: ScrollbarColorCss;
  declare readonly scrollbarGutter: ScrollbarGutterCss;
  declare readonly scrollbarWidth: ScrollbarWidthCss;
  declare readonly shapeImageThreshold: ShapeImageThresholdCss;
  declare readonly shapeMargin: ShapeMarginCss;
  declare readonly shapeOutside: ShapeOutsideCss;
  declare readonly shapeRendering: ShapeRenderingCss;
  declare readonly speakAs: SpeakAsCss;
  declare readonly stopColor: StopColorCss;
  declare readonly stopOpacity: StopOpacityCss;
  declare readonly stroke: StrokeCss;
  declare readonly strokeColor: StrokeColorCss;
  declare readonly strokeDasharray: StrokeDasharrayCss;
  declare readonly strokeDashoffset: StrokeDashoffsetCss;
  declare readonly strokeLinecap: StrokeLinecapCss;
  declare readonly strokeLinejoin: StrokeLinejoinCss;
  declare readonly strokeMiterlimit: StrokeMiterlimitCss;
  declare readonly strokeOpacity: StrokeOpacityCss;
  declare readonly strokeWidth: StrokeWidthCss;
  declare readonly tabSize: TabSizeCss;
  declare readonly tableLayout: TableLayoutCss;
  declare readonly textAlign: TextAlignCss;
  declare readonly textAlignLast: TextAlignLastCss;
  declare readonly textAnchor: TextAnchorCss;
  declare readonly textAutospace: TextAutospaceCss;
  declare readonly textBox: TextBoxCss;
  declare readonly textBoxEdge: TextBoxEdgeCss;
  declare readonly textBoxTrim: TextBoxTrimCss;
  declare readonly textCombineUpright: TextCombineUprightCss;
  declare readonly textDecoration: TextDecorationCss;
  declare readonly textDecorationColor: TextDecorationColorCss;
  declare readonly textDecorationLine: TextDecorationLineCss;
  declare readonly textDecorationSkip: TextDecorationSkipCss;
  declare readonly textDecorationSkipInk: TextDecorationSkipInkCss;
  declare readonly textDecorationStyle: TextDecorationStyleCss;
  declare readonly textDecorationThickness: TextDecorationThicknessCss;
  declare readonly textEmphasis: TextEmphasisCss;
  declare readonly textEmphasisColor: TextEmphasisColorCss;
  declare readonly textEmphasisPosition: TextEmphasisPositionCss;
  declare readonly textEmphasisStyle: TextEmphasisStyleCss;
  declare readonly textIndent: TextIndentCss;
  declare readonly textJustify: TextJustifyCss;
  declare readonly textOrientation: TextOrientationCss;
  declare readonly textOverflow: TextOverflowCss;
  declare readonly textRendering: TextRenderingCss;
  declare readonly textShadow: TextShadowCss;
  declare readonly textSizeAdjust: TextSizeAdjustCss;
  declare readonly textSpacingTrim: TextSpacingTrimCss;
  declare readonly textTransform: TextTransformCss;
  declare readonly textUnderlineOffset: TextUnderlineOffsetCss;
  declare readonly textUnderlinePosition: TextUnderlinePositionCss;
  declare readonly textWrap: TextWrapCss;
  declare readonly textWrapMode: TextWrapModeCss;
  declare readonly textWrapStyle: TextWrapStyleCss;
  declare readonly timelineScope: TimelineScopeCss;
  declare readonly top: TopCss;
  declare readonly touchAction: TouchActionCss;
  declare readonly transform: TransformCss;
  declare readonly transformBox: TransformBoxCss;
  declare readonly transformOrigin: TransformOriginCss;
  declare readonly transformStyle: TransformStyleCss;
  declare readonly transition: TransitionCss;
  declare readonly transitionBehavior: TransitionBehaviorCss;
  declare readonly transitionDelay: TransitionDelayCss;
  declare readonly transitionDuration: TransitionDurationCss;
  declare readonly transitionProperty: TransitionPropertyCss;
  declare readonly transitionTimingFunction: TransitionTimingFunctionCss;
  declare readonly translate: TranslateCss;
  declare readonly unicodeBidi: UnicodeBidiCss;
  declare readonly userSelect: UserSelectCss;
  declare readonly vectorEffect: VectorEffectCss;
  declare readonly verticalAlign: VerticalAlignCss;
  declare readonly viewTimeline: ViewTimelineCss;
  declare readonly viewTimelineAxis: ViewTimelineAxisCss;
  declare readonly viewTimelineInset: ViewTimelineInsetCss;
  declare readonly viewTimelineName: ViewTimelineNameCss;
  declare readonly viewTransitionClass: ViewTransitionClassCss;
  declare readonly viewTransitionName: ViewTransitionNameCss;
  declare readonly visibility: VisibilityCss;
  declare readonly whiteSpace: WhiteSpaceCss;
  declare readonly whiteSpaceCollapse: WhiteSpaceCollapseCss;
  declare readonly widows: WidowsCss;
  declare readonly width: WidthCss;
  declare readonly willChange: WillChangeCss;
  declare readonly wordBreak: WordBreakCss;
  declare readonly wordSpacing: WordSpacingCss;
  declare readonly wordWrap: WordWrapCss;
  declare readonly writingMode: WritingModeCss;
  declare readonly x: XCss;
  declare readonly y: YCss;
  declare readonly zIndex: ZIndexCss;
  declare readonly zoom: ZoomCss;
}
function defineSystemProperty<T>(name: string, create: () => T): void {
  Object.defineProperty(Css.prototype, name, {
    configurable: true,
    get() {
      const value = Object.freeze(create());
      Object.defineProperty(Css.prototype, name, { value, enumerable: true });
      return value;
    },
  });
}
defineSystemProperty('accentColor', () => new AccentColorCss());
defineSystemProperty('alignContent', () => new AlignContentCss());
defineSystemProperty('alignItems', () => new AlignItemsCss());
defineSystemProperty('alignSelf', () => new AlignSelfCss());
defineSystemProperty('alignTracks', () => new AlignTracksCss());
defineSystemProperty('alignmentBaseline', () => new AlignmentBaselineCss());
defineSystemProperty('all', () => new AllCss());
defineSystemProperty('anchorName', () => new AnchorNameCss());
defineSystemProperty('anchorScope', () => new AnchorScopeCss());
defineSystemProperty('animation', () => new AnimationCss());
defineSystemProperty('animationComposition', () => new AnimationCompositionCss());
defineSystemProperty('animationDelay', () => new AnimationDelayCss());
defineSystemProperty('animationDirection', () => new AnimationDirectionCss());
defineSystemProperty('animationDuration', () => new AnimationDurationCss());
defineSystemProperty('animationFillMode', () => new AnimationFillModeCss());
defineSystemProperty('animationIterationCount', () => new AnimationIterationCountCss());
defineSystemProperty('animationName', () => new AnimationNameCss());
defineSystemProperty('animationPlayState', () => new AnimationPlayStateCss());
defineSystemProperty('animationRange', () => new AnimationRangeCss());
defineSystemProperty('animationRangeEnd', () => new AnimationRangeEndCss());
defineSystemProperty('animationRangeStart', () => new AnimationRangeStartCss());
defineSystemProperty('animationTimeline', () => new AnimationTimelineCss());
defineSystemProperty('animationTimingFunction', () => new AnimationTimingFunctionCss());
defineSystemProperty('appearance', () => new AppearanceCss());
defineSystemProperty('aspectRatio', () => new AspectRatioCss());
defineSystemProperty('backdropFilter', () => new BackdropFilterCss());
defineSystemProperty('backfaceVisibility', () => new BackfaceVisibilityCss());
defineSystemProperty('background', () => new BackgroundCss());
defineSystemProperty('backgroundAttachment', () => new BackgroundAttachmentCss());
defineSystemProperty('backgroundBlendMode', () => new BackgroundBlendModeCss());
defineSystemProperty('backgroundClip', () => new BackgroundClipCss());
defineSystemProperty('backgroundColor', () => new BackgroundColorCss());
defineSystemProperty('backgroundImage', () => new BackgroundImageCss());
defineSystemProperty('backgroundOrigin', () => new BackgroundOriginCss());
defineSystemProperty('backgroundPosition', () => new BackgroundPositionCss());
defineSystemProperty('backgroundPositionX', () => new BackgroundPositionXCss());
defineSystemProperty('backgroundPositionY', () => new BackgroundPositionYCss());
defineSystemProperty('backgroundRepeat', () => new BackgroundRepeatCss());
defineSystemProperty('backgroundSize', () => new BackgroundSizeCss());
defineSystemProperty('baselineShift', () => new BaselineShiftCss());
defineSystemProperty('blockSize', () => new BlockSizeCss());
defineSystemProperty('border', () => new BorderCss());
defineSystemProperty('borderBlock', () => new BorderBlockCss());
defineSystemProperty('borderBlockColor', () => new BorderBlockColorCss());
defineSystemProperty('borderBlockEnd', () => new BorderBlockEndCss());
defineSystemProperty('borderBlockEndColor', () => new BorderBlockEndColorCss());
defineSystemProperty('borderBlockEndStyle', () => new BorderBlockEndStyleCss());
defineSystemProperty('borderBlockEndWidth', () => new BorderBlockEndWidthCss());
defineSystemProperty('borderBlockStart', () => new BorderBlockStartCss());
defineSystemProperty('borderBlockStartColor', () => new BorderBlockStartColorCss());
defineSystemProperty('borderBlockStartStyle', () => new BorderBlockStartStyleCss());
defineSystemProperty('borderBlockStartWidth', () => new BorderBlockStartWidthCss());
defineSystemProperty('borderBlockStyle', () => new BorderBlockStyleCss());
defineSystemProperty('borderBlockWidth', () => new BorderBlockWidthCss());
defineSystemProperty('borderBottom', () => new BorderBottomCss());
defineSystemProperty('borderBottomColor', () => new BorderBottomColorCss());
defineSystemProperty('borderBottomLeftRadius', () => new BorderBottomLeftRadiusCss());
defineSystemProperty('borderBottomRightRadius', () => new BorderBottomRightRadiusCss());
defineSystemProperty('borderBottomStyle', () => new BorderBottomStyleCss());
defineSystemProperty('borderBottomWidth', () => new BorderBottomWidthCss());
defineSystemProperty('borderCollapse', () => new BorderCollapseCss());
defineSystemProperty('borderColor', () => new BorderColorCss());
defineSystemProperty('borderEndEndRadius', () => new BorderEndEndRadiusCss());
defineSystemProperty('borderEndStartRadius', () => new BorderEndStartRadiusCss());
defineSystemProperty('borderImage', () => new BorderImageCss());
defineSystemProperty('borderImageOutset', () => new BorderImageOutsetCss());
defineSystemProperty('borderImageRepeat', () => new BorderImageRepeatCss());
defineSystemProperty('borderImageSlice', () => new BorderImageSliceCss());
defineSystemProperty('borderImageSource', () => new BorderImageSourceCss());
defineSystemProperty('borderImageWidth', () => new BorderImageWidthCss());
defineSystemProperty('borderInline', () => new BorderInlineCss());
defineSystemProperty('borderInlineColor', () => new BorderInlineColorCss());
defineSystemProperty('borderInlineEnd', () => new BorderInlineEndCss());
defineSystemProperty('borderInlineEndColor', () => new BorderInlineEndColorCss());
defineSystemProperty('borderInlineEndStyle', () => new BorderInlineEndStyleCss());
defineSystemProperty('borderInlineEndWidth', () => new BorderInlineEndWidthCss());
defineSystemProperty('borderInlineStart', () => new BorderInlineStartCss());
defineSystemProperty('borderInlineStartColor', () => new BorderInlineStartColorCss());
defineSystemProperty('borderInlineStartStyle', () => new BorderInlineStartStyleCss());
defineSystemProperty('borderInlineStartWidth', () => new BorderInlineStartWidthCss());
defineSystemProperty('borderInlineStyle', () => new BorderInlineStyleCss());
defineSystemProperty('borderInlineWidth', () => new BorderInlineWidthCss());
defineSystemProperty('borderLeft', () => new BorderLeftCss());
defineSystemProperty('borderLeftColor', () => new BorderLeftColorCss());
defineSystemProperty('borderLeftStyle', () => new BorderLeftStyleCss());
defineSystemProperty('borderLeftWidth', () => new BorderLeftWidthCss());
defineSystemProperty('borderRadius', () => new BorderRadiusCss());
defineSystemProperty('borderRight', () => new BorderRightCss());
defineSystemProperty('borderRightColor', () => new BorderRightColorCss());
defineSystemProperty('borderRightStyle', () => new BorderRightStyleCss());
defineSystemProperty('borderRightWidth', () => new BorderRightWidthCss());
defineSystemProperty('borderSpacing', () => new BorderSpacingCss());
defineSystemProperty('borderStartEndRadius', () => new BorderStartEndRadiusCss());
defineSystemProperty('borderStartStartRadius', () => new BorderStartStartRadiusCss());
defineSystemProperty('borderStyle', () => new BorderStyleCss());
defineSystemProperty('borderTop', () => new BorderTopCss());
defineSystemProperty('borderTopColor', () => new BorderTopColorCss());
defineSystemProperty('borderTopLeftRadius', () => new BorderTopLeftRadiusCss());
defineSystemProperty('borderTopRightRadius', () => new BorderTopRightRadiusCss());
defineSystemProperty('borderTopStyle', () => new BorderTopStyleCss());
defineSystemProperty('borderTopWidth', () => new BorderTopWidthCss());
defineSystemProperty('borderWidth', () => new BorderWidthCss());
defineSystemProperty('bottom', () => new BottomCss());
defineSystemProperty('boxDecorationBreak', () => new BoxDecorationBreakCss());
defineSystemProperty('boxShadow', () => new BoxShadowCss());
defineSystemProperty('boxSizing', () => new BoxSizingCss());
defineSystemProperty('breakAfter', () => new BreakAfterCss());
defineSystemProperty('breakBefore', () => new BreakBeforeCss());
defineSystemProperty('breakInside', () => new BreakInsideCss());
defineSystemProperty('captionSide', () => new CaptionSideCss());
defineSystemProperty('caret', () => new CaretCss());
defineSystemProperty('caretColor', () => new CaretColorCss());
defineSystemProperty('caretShape', () => new CaretShapeCss());
defineSystemProperty('clear', () => new ClearCss());
defineSystemProperty('clip', () => new ClipCss());
defineSystemProperty('clipPath', () => new ClipPathCss());
defineSystemProperty('clipRule', () => new ClipRuleCss());
defineSystemProperty('color', () => new ColorCss());
defineSystemProperty('colorAdjust', () => new ColorAdjustCss());
defineSystemProperty('colorInterpolation', () => new ColorInterpolationCss());
defineSystemProperty('colorInterpolationFilters', () => new ColorInterpolationFiltersCss());
defineSystemProperty('colorRendering', () => new ColorRenderingCss());
defineSystemProperty('colorScheme', () => new ColorSchemeCss());
defineSystemProperty('columnCount', () => new ColumnCountCss());
defineSystemProperty('columnFill', () => new ColumnFillCss());
defineSystemProperty('columnGap', () => new ColumnGapCss());
defineSystemProperty('columnRule', () => new ColumnRuleCss());
defineSystemProperty('columnRuleColor', () => new ColumnRuleColorCss());
defineSystemProperty('columnRuleStyle', () => new ColumnRuleStyleCss());
defineSystemProperty('columnRuleWidth', () => new ColumnRuleWidthCss());
defineSystemProperty('columnSpan', () => new ColumnSpanCss());
defineSystemProperty('columnWidth', () => new ColumnWidthCss());
defineSystemProperty('columns', () => new ColumnsCss());
defineSystemProperty('contain', () => new ContainCss());
defineSystemProperty('containIntrinsicBlockSize', () => new ContainIntrinsicBlockSizeCss());
defineSystemProperty('containIntrinsicHeight', () => new ContainIntrinsicHeightCss());
defineSystemProperty('containIntrinsicInlineSize', () => new ContainIntrinsicInlineSizeCss());
defineSystemProperty('containIntrinsicSize', () => new ContainIntrinsicSizeCss());
defineSystemProperty('containIntrinsicWidth', () => new ContainIntrinsicWidthCss());
defineSystemProperty('container', () => new ContainerCss());
defineSystemProperty('containerName', () => new ContainerNameCss());
defineSystemProperty('containerType', () => new ContainerTypeCss());
defineSystemProperty('content', () => new ContentCss());
defineSystemProperty('contentVisibility', () => new ContentVisibilityCss());
defineSystemProperty('counterIncrement', () => new CounterIncrementCss());
defineSystemProperty('counterReset', () => new CounterResetCss());
defineSystemProperty('counterSet', () => new CounterSetCss());
defineSystemProperty('cursor', () => new CursorCss());
defineSystemProperty('cx', () => new CxCss());
defineSystemProperty('cy', () => new CyCss());
defineSystemProperty('d', () => new DCss());
defineSystemProperty('direction', () => new DirectionCss());
defineSystemProperty('display', () => new DisplayCss());
defineSystemProperty('dominantBaseline', () => new DominantBaselineCss());
defineSystemProperty('emptyCells', () => new EmptyCellsCss());
defineSystemProperty('fieldSizing', () => new FieldSizingCss());
defineSystemProperty('fill', () => new FillCss());
defineSystemProperty('fillOpacity', () => new FillOpacityCss());
defineSystemProperty('fillRule', () => new FillRuleCss());
defineSystemProperty('filter', () => new FilterCss());
defineSystemProperty('flex', () => new FlexCss());
defineSystemProperty('flexBasis', () => new FlexBasisCss());
defineSystemProperty('flexDirection', () => new FlexDirectionCss());
defineSystemProperty('flexFlow', () => new FlexFlowCss());
defineSystemProperty('flexGrow', () => new FlexGrowCss());
defineSystemProperty('flexShrink', () => new FlexShrinkCss());
defineSystemProperty('flexWrap', () => new FlexWrapCss());
defineSystemProperty('float', () => new FloatCss());
defineSystemProperty('floodColor', () => new FloodColorCss());
defineSystemProperty('floodOpacity', () => new FloodOpacityCss());
defineSystemProperty('font', () => new FontCss());
defineSystemProperty('fontFamily', () => new FontFamilyCss());
defineSystemProperty('fontFeatureSettings', () => new FontFeatureSettingsCss());
defineSystemProperty('fontKerning', () => new FontKerningCss());
defineSystemProperty('fontLanguageOverride', () => new FontLanguageOverrideCss());
defineSystemProperty('fontOpticalSizing', () => new FontOpticalSizingCss());
defineSystemProperty('fontPalette', () => new FontPaletteCss());
defineSystemProperty('fontSize', () => new FontSizeCss());
defineSystemProperty('fontSizeAdjust', () => new FontSizeAdjustCss());
defineSystemProperty('fontSmooth', () => new FontSmoothCss());
defineSystemProperty('fontStretch', () => new FontStretchCss());
defineSystemProperty('fontStyle', () => new FontStyleCss());
defineSystemProperty('fontSynthesis', () => new FontSynthesisCss());
defineSystemProperty('fontSynthesisPosition', () => new FontSynthesisPositionCss());
defineSystemProperty('fontSynthesisSmallCaps', () => new FontSynthesisSmallCapsCss());
defineSystemProperty('fontSynthesisStyle', () => new FontSynthesisStyleCss());
defineSystemProperty('fontSynthesisWeight', () => new FontSynthesisWeightCss());
defineSystemProperty('fontVariant', () => new FontVariantCss());
defineSystemProperty('fontVariantAlternates', () => new FontVariantAlternatesCss());
defineSystemProperty('fontVariantCaps', () => new FontVariantCapsCss());
defineSystemProperty('fontVariantEastAsian', () => new FontVariantEastAsianCss());
defineSystemProperty('fontVariantEmoji', () => new FontVariantEmojiCss());
defineSystemProperty('fontVariantLigatures', () => new FontVariantLigaturesCss());
defineSystemProperty('fontVariantNumeric', () => new FontVariantNumericCss());
defineSystemProperty('fontVariantPosition', () => new FontVariantPositionCss());
defineSystemProperty('fontVariationSettings', () => new FontVariationSettingsCss());
defineSystemProperty('fontWeight', () => new FontWeightCss());
defineSystemProperty('fontWidth', () => new FontWidthCss());
defineSystemProperty('forcedColorAdjust', () => new ForcedColorAdjustCss());
defineSystemProperty('gap', () => new GapCss());
defineSystemProperty('glyphOrientationVertical', () => new GlyphOrientationVerticalCss());
defineSystemProperty('grid', () => new GridCss());
defineSystemProperty('gridArea', () => new GridAreaCss());
defineSystemProperty('gridAutoColumns', () => new GridAutoColumnsCss());
defineSystemProperty('gridAutoFlow', () => new GridAutoFlowCss());
defineSystemProperty('gridAutoRows', () => new GridAutoRowsCss());
defineSystemProperty('gridColumn', () => new GridColumnCss());
defineSystemProperty('gridColumnEnd', () => new GridColumnEndCss());
defineSystemProperty('gridColumnStart', () => new GridColumnStartCss());
defineSystemProperty('gridRow', () => new GridRowCss());
defineSystemProperty('gridRowEnd', () => new GridRowEndCss());
defineSystemProperty('gridRowStart', () => new GridRowStartCss());
defineSystemProperty('gridTemplate', () => new GridTemplateCss());
defineSystemProperty('gridTemplateAreas', () => new GridTemplateAreasCss());
defineSystemProperty('gridTemplateColumns', () => new GridTemplateColumnsCss());
defineSystemProperty('gridTemplateRows', () => new GridTemplateRowsCss());
defineSystemProperty('hangingPunctuation', () => new HangingPunctuationCss());
defineSystemProperty('height', () => new HeightCss());
defineSystemProperty('hyphenateCharacter', () => new HyphenateCharacterCss());
defineSystemProperty('hyphenateLimitChars', () => new HyphenateLimitCharsCss());
defineSystemProperty('hyphens', () => new HyphensCss());
defineSystemProperty('imageOrientation', () => new ImageOrientationCss());
defineSystemProperty('imageRendering', () => new ImageRenderingCss());
defineSystemProperty('imageResolution', () => new ImageResolutionCss());
defineSystemProperty('initialLetter', () => new InitialLetterCss());
defineSystemProperty('initialLetterAlign', () => new InitialLetterAlignCss());
defineSystemProperty('inlineSize', () => new InlineSizeCss());
defineSystemProperty('inset', () => new InsetCss());
defineSystemProperty('insetBlock', () => new InsetBlockCss());
defineSystemProperty('insetBlockEnd', () => new InsetBlockEndCss());
defineSystemProperty('insetBlockStart', () => new InsetBlockStartCss());
defineSystemProperty('insetInline', () => new InsetInlineCss());
defineSystemProperty('insetInlineEnd', () => new InsetInlineEndCss());
defineSystemProperty('insetInlineStart', () => new InsetInlineStartCss());
defineSystemProperty('interpolateSize', () => new InterpolateSizeCss());
defineSystemProperty('isolation', () => new IsolationCss());
defineSystemProperty('justifyContent', () => new JustifyContentCss());
defineSystemProperty('justifyItems', () => new JustifyItemsCss());
defineSystemProperty('justifySelf', () => new JustifySelfCss());
defineSystemProperty('justifyTracks', () => new JustifyTracksCss());
defineSystemProperty('left', () => new LeftCss());
defineSystemProperty('letterSpacing', () => new LetterSpacingCss());
defineSystemProperty('lightingColor', () => new LightingColorCss());
defineSystemProperty('lineBreak', () => new LineBreakCss());
defineSystemProperty('lineClamp', () => new LineClampCss());
defineSystemProperty('lineHeight', () => new LineHeightCss());
defineSystemProperty('lineHeightStep', () => new LineHeightStepCss());
defineSystemProperty('listStyle', () => new ListStyleCss());
defineSystemProperty('listStyleImage', () => new ListStyleImageCss());
defineSystemProperty('listStylePosition', () => new ListStylePositionCss());
defineSystemProperty('listStyleType', () => new ListStyleTypeCss());
defineSystemProperty('margin', () => new MarginCss());
defineSystemProperty('marginBlock', () => new MarginBlockCss());
defineSystemProperty('marginBlockEnd', () => new MarginBlockEndCss());
defineSystemProperty('marginBlockStart', () => new MarginBlockStartCss());
defineSystemProperty('marginBottom', () => new MarginBottomCss());
defineSystemProperty('marginInline', () => new MarginInlineCss());
defineSystemProperty('marginInlineEnd', () => new MarginInlineEndCss());
defineSystemProperty('marginInlineStart', () => new MarginInlineStartCss());
defineSystemProperty('marginLeft', () => new MarginLeftCss());
defineSystemProperty('marginRight', () => new MarginRightCss());
defineSystemProperty('marginTop', () => new MarginTopCss());
defineSystemProperty('marginTrim', () => new MarginTrimCss());
defineSystemProperty('marker', () => new MarkerCss());
defineSystemProperty('markerEnd', () => new MarkerEndCss());
defineSystemProperty('markerMid', () => new MarkerMidCss());
defineSystemProperty('markerStart', () => new MarkerStartCss());
defineSystemProperty('mask', () => new MaskCss());
defineSystemProperty('maskBorder', () => new MaskBorderCss());
defineSystemProperty('maskBorderMode', () => new MaskBorderModeCss());
defineSystemProperty('maskBorderOutset', () => new MaskBorderOutsetCss());
defineSystemProperty('maskBorderRepeat', () => new MaskBorderRepeatCss());
defineSystemProperty('maskBorderSlice', () => new MaskBorderSliceCss());
defineSystemProperty('maskBorderSource', () => new MaskBorderSourceCss());
defineSystemProperty('maskBorderWidth', () => new MaskBorderWidthCss());
defineSystemProperty('maskClip', () => new MaskClipCss());
defineSystemProperty('maskComposite', () => new MaskCompositeCss());
defineSystemProperty('maskImage', () => new MaskImageCss());
defineSystemProperty('maskMode', () => new MaskModeCss());
defineSystemProperty('maskOrigin', () => new MaskOriginCss());
defineSystemProperty('maskPosition', () => new MaskPositionCss());
defineSystemProperty('maskRepeat', () => new MaskRepeatCss());
defineSystemProperty('maskSize', () => new MaskSizeCss());
defineSystemProperty('maskType', () => new MaskTypeCss());
defineSystemProperty('masonryAutoFlow', () => new MasonryAutoFlowCss());
defineSystemProperty('mathDepth', () => new MathDepthCss());
defineSystemProperty('mathShift', () => new MathShiftCss());
defineSystemProperty('mathStyle', () => new MathStyleCss());
defineSystemProperty('maxBlockSize', () => new MaxBlockSizeCss());
defineSystemProperty('maxHeight', () => new MaxHeightCss());
defineSystemProperty('maxInlineSize', () => new MaxInlineSizeCss());
defineSystemProperty('maxLines', () => new MaxLinesCss());
defineSystemProperty('maxWidth', () => new MaxWidthCss());
defineSystemProperty('minBlockSize', () => new MinBlockSizeCss());
defineSystemProperty('minHeight', () => new MinHeightCss());
defineSystemProperty('minInlineSize', () => new MinInlineSizeCss());
defineSystemProperty('minWidth', () => new MinWidthCss());
defineSystemProperty('mixBlendMode', () => new MixBlendModeCss());
defineSystemProperty('motion', () => new MotionCss());
defineSystemProperty('motionDistance', () => new MotionDistanceCss());
defineSystemProperty('motionPath', () => new MotionPathCss());
defineSystemProperty('motionRotation', () => new MotionRotationCss());
defineSystemProperty('objectFit', () => new ObjectFitCss());
defineSystemProperty('objectPosition', () => new ObjectPositionCss());
defineSystemProperty('objectViewBox', () => new ObjectViewBoxCss());
defineSystemProperty('offset', () => new OffsetCss());
defineSystemProperty('offsetAnchor', () => new OffsetAnchorCss());
defineSystemProperty('offsetDistance', () => new OffsetDistanceCss());
defineSystemProperty('offsetPath', () => new OffsetPathCss());
defineSystemProperty('offsetPosition', () => new OffsetPositionCss());
defineSystemProperty('offsetRotate', () => new OffsetRotateCss());
defineSystemProperty('offsetRotation', () => new OffsetRotationCss());
defineSystemProperty('opacity', () => new OpacityCss());
defineSystemProperty('order', () => new OrderCss());
defineSystemProperty('orphans', () => new OrphansCss());
defineSystemProperty('outline', () => new OutlineCss());
defineSystemProperty('outlineColor', () => new OutlineColorCss());
defineSystemProperty('outlineOffset', () => new OutlineOffsetCss());
defineSystemProperty('outlineStyle', () => new OutlineStyleCss());
defineSystemProperty('outlineWidth', () => new OutlineWidthCss());
defineSystemProperty('overflow', () => new OverflowCss());
defineSystemProperty('overflowAnchor', () => new OverflowAnchorCss());
defineSystemProperty('overflowBlock', () => new OverflowBlockCss());
defineSystemProperty('overflowClipBox', () => new OverflowClipBoxCss());
defineSystemProperty('overflowClipMargin', () => new OverflowClipMarginCss());
defineSystemProperty('overflowInline', () => new OverflowInlineCss());
defineSystemProperty('overflowWrap', () => new OverflowWrapCss());
defineSystemProperty('overflowX', () => new OverflowXCss());
defineSystemProperty('overflowY', () => new OverflowYCss());
defineSystemProperty('overlay', () => new OverlayCss());
defineSystemProperty('overscrollBehavior', () => new OverscrollBehaviorCss());
defineSystemProperty('overscrollBehaviorBlock', () => new OverscrollBehaviorBlockCss());
defineSystemProperty('overscrollBehaviorInline', () => new OverscrollBehaviorInlineCss());
defineSystemProperty('overscrollBehaviorX', () => new OverscrollBehaviorXCss());
defineSystemProperty('overscrollBehaviorY', () => new OverscrollBehaviorYCss());
defineSystemProperty('padding', () => new PaddingCss());
defineSystemProperty('paddingBlock', () => new PaddingBlockCss());
defineSystemProperty('paddingBlockEnd', () => new PaddingBlockEndCss());
defineSystemProperty('paddingBlockStart', () => new PaddingBlockStartCss());
defineSystemProperty('paddingBottom', () => new PaddingBottomCss());
defineSystemProperty('paddingInline', () => new PaddingInlineCss());
defineSystemProperty('paddingInlineEnd', () => new PaddingInlineEndCss());
defineSystemProperty('paddingInlineStart', () => new PaddingInlineStartCss());
defineSystemProperty('paddingLeft', () => new PaddingLeftCss());
defineSystemProperty('paddingRight', () => new PaddingRightCss());
defineSystemProperty('paddingTop', () => new PaddingTopCss());
defineSystemProperty('page', () => new PageCss());
defineSystemProperty('paintOrder', () => new PaintOrderCss());
defineSystemProperty('perspective', () => new PerspectiveCss());
defineSystemProperty('perspectiveOrigin', () => new PerspectiveOriginCss());
defineSystemProperty('placeContent', () => new PlaceContentCss());
defineSystemProperty('placeItems', () => new PlaceItemsCss());
defineSystemProperty('placeSelf', () => new PlaceSelfCss());
defineSystemProperty('pointerEvents', () => new PointerEventsCss());
defineSystemProperty('position', () => new PositionCss());
defineSystemProperty('positionAnchor', () => new PositionAnchorCss());
defineSystemProperty('positionArea', () => new PositionAreaCss());
defineSystemProperty('positionTry', () => new PositionTryCss());
defineSystemProperty('positionTryFallbacks', () => new PositionTryFallbacksCss());
defineSystemProperty('positionTryOrder', () => new PositionTryOrderCss());
defineSystemProperty('positionVisibility', () => new PositionVisibilityCss());
defineSystemProperty('printColorAdjust', () => new PrintColorAdjustCss());
defineSystemProperty('quotes', () => new QuotesCss());
defineSystemProperty('r', () => new RCss());
defineSystemProperty('resize', () => new ResizeCss());
defineSystemProperty('right', () => new RightCss());
defineSystemProperty('rotate', () => new RotateCss());
defineSystemProperty('rowGap', () => new RowGapCss());
defineSystemProperty('rubyAlign', () => new RubyAlignCss());
defineSystemProperty('rubyMerge', () => new RubyMergeCss());
defineSystemProperty('rubyOverhang', () => new RubyOverhangCss());
defineSystemProperty('rubyPosition', () => new RubyPositionCss());
defineSystemProperty('rx', () => new RxCss());
defineSystemProperty('ry', () => new RyCss());
defineSystemProperty('scale', () => new ScaleCss());
defineSystemProperty('scrollBehavior', () => new ScrollBehaviorCss());
defineSystemProperty('scrollInitialTarget', () => new ScrollInitialTargetCss());
defineSystemProperty('scrollMargin', () => new ScrollMarginCss());
defineSystemProperty('scrollMarginBlock', () => new ScrollMarginBlockCss());
defineSystemProperty('scrollMarginBlockEnd', () => new ScrollMarginBlockEndCss());
defineSystemProperty('scrollMarginBlockStart', () => new ScrollMarginBlockStartCss());
defineSystemProperty('scrollMarginBottom', () => new ScrollMarginBottomCss());
defineSystemProperty('scrollMarginInline', () => new ScrollMarginInlineCss());
defineSystemProperty('scrollMarginInlineEnd', () => new ScrollMarginInlineEndCss());
defineSystemProperty('scrollMarginInlineStart', () => new ScrollMarginInlineStartCss());
defineSystemProperty('scrollMarginLeft', () => new ScrollMarginLeftCss());
defineSystemProperty('scrollMarginRight', () => new ScrollMarginRightCss());
defineSystemProperty('scrollMarginTop', () => new ScrollMarginTopCss());
defineSystemProperty('scrollPadding', () => new ScrollPaddingCss());
defineSystemProperty('scrollPaddingBlock', () => new ScrollPaddingBlockCss());
defineSystemProperty('scrollPaddingBlockEnd', () => new ScrollPaddingBlockEndCss());
defineSystemProperty('scrollPaddingBlockStart', () => new ScrollPaddingBlockStartCss());
defineSystemProperty('scrollPaddingBottom', () => new ScrollPaddingBottomCss());
defineSystemProperty('scrollPaddingInline', () => new ScrollPaddingInlineCss());
defineSystemProperty('scrollPaddingInlineEnd', () => new ScrollPaddingInlineEndCss());
defineSystemProperty('scrollPaddingInlineStart', () => new ScrollPaddingInlineStartCss());
defineSystemProperty('scrollPaddingLeft', () => new ScrollPaddingLeftCss());
defineSystemProperty('scrollPaddingRight', () => new ScrollPaddingRightCss());
defineSystemProperty('scrollPaddingTop', () => new ScrollPaddingTopCss());
defineSystemProperty('scrollSnapAlign', () => new ScrollSnapAlignCss());
defineSystemProperty('scrollSnapMargin', () => new ScrollSnapMarginCss());
defineSystemProperty('scrollSnapMarginBottom', () => new ScrollSnapMarginBottomCss());
defineSystemProperty('scrollSnapMarginLeft', () => new ScrollSnapMarginLeftCss());
defineSystemProperty('scrollSnapMarginRight', () => new ScrollSnapMarginRightCss());
defineSystemProperty('scrollSnapMarginTop', () => new ScrollSnapMarginTopCss());
defineSystemProperty('scrollSnapStop', () => new ScrollSnapStopCss());
defineSystemProperty('scrollSnapType', () => new ScrollSnapTypeCss());
defineSystemProperty('scrollTimeline', () => new ScrollTimelineCss());
defineSystemProperty('scrollTimelineAxis', () => new ScrollTimelineAxisCss());
defineSystemProperty('scrollTimelineName', () => new ScrollTimelineNameCss());
defineSystemProperty('scrollbarColor', () => new ScrollbarColorCss());
defineSystemProperty('scrollbarGutter', () => new ScrollbarGutterCss());
defineSystemProperty('scrollbarWidth', () => new ScrollbarWidthCss());
defineSystemProperty('shapeImageThreshold', () => new ShapeImageThresholdCss());
defineSystemProperty('shapeMargin', () => new ShapeMarginCss());
defineSystemProperty('shapeOutside', () => new ShapeOutsideCss());
defineSystemProperty('shapeRendering', () => new ShapeRenderingCss());
defineSystemProperty('speakAs', () => new SpeakAsCss());
defineSystemProperty('stopColor', () => new StopColorCss());
defineSystemProperty('stopOpacity', () => new StopOpacityCss());
defineSystemProperty('stroke', () => new StrokeCss());
defineSystemProperty('strokeColor', () => new StrokeColorCss());
defineSystemProperty('strokeDasharray', () => new StrokeDasharrayCss());
defineSystemProperty('strokeDashoffset', () => new StrokeDashoffsetCss());
defineSystemProperty('strokeLinecap', () => new StrokeLinecapCss());
defineSystemProperty('strokeLinejoin', () => new StrokeLinejoinCss());
defineSystemProperty('strokeMiterlimit', () => new StrokeMiterlimitCss());
defineSystemProperty('strokeOpacity', () => new StrokeOpacityCss());
defineSystemProperty('strokeWidth', () => new StrokeWidthCss());
defineSystemProperty('tabSize', () => new TabSizeCss());
defineSystemProperty('tableLayout', () => new TableLayoutCss());
defineSystemProperty('textAlign', () => new TextAlignCss());
defineSystemProperty('textAlignLast', () => new TextAlignLastCss());
defineSystemProperty('textAnchor', () => new TextAnchorCss());
defineSystemProperty('textAutospace', () => new TextAutospaceCss());
defineSystemProperty('textBox', () => new TextBoxCss());
defineSystemProperty('textBoxEdge', () => new TextBoxEdgeCss());
defineSystemProperty('textBoxTrim', () => new TextBoxTrimCss());
defineSystemProperty('textCombineUpright', () => new TextCombineUprightCss());
defineSystemProperty('textDecoration', () => new TextDecorationCss());
defineSystemProperty('textDecorationColor', () => new TextDecorationColorCss());
defineSystemProperty('textDecorationLine', () => new TextDecorationLineCss());
defineSystemProperty('textDecorationSkip', () => new TextDecorationSkipCss());
defineSystemProperty('textDecorationSkipInk', () => new TextDecorationSkipInkCss());
defineSystemProperty('textDecorationStyle', () => new TextDecorationStyleCss());
defineSystemProperty('textDecorationThickness', () => new TextDecorationThicknessCss());
defineSystemProperty('textEmphasis', () => new TextEmphasisCss());
defineSystemProperty('textEmphasisColor', () => new TextEmphasisColorCss());
defineSystemProperty('textEmphasisPosition', () => new TextEmphasisPositionCss());
defineSystemProperty('textEmphasisStyle', () => new TextEmphasisStyleCss());
defineSystemProperty('textIndent', () => new TextIndentCss());
defineSystemProperty('textJustify', () => new TextJustifyCss());
defineSystemProperty('textOrientation', () => new TextOrientationCss());
defineSystemProperty('textOverflow', () => new TextOverflowCss());
defineSystemProperty('textRendering', () => new TextRenderingCss());
defineSystemProperty('textShadow', () => new TextShadowCss());
defineSystemProperty('textSizeAdjust', () => new TextSizeAdjustCss());
defineSystemProperty('textSpacingTrim', () => new TextSpacingTrimCss());
defineSystemProperty('textTransform', () => new TextTransformCss());
defineSystemProperty('textUnderlineOffset', () => new TextUnderlineOffsetCss());
defineSystemProperty('textUnderlinePosition', () => new TextUnderlinePositionCss());
defineSystemProperty('textWrap', () => new TextWrapCss());
defineSystemProperty('textWrapMode', () => new TextWrapModeCss());
defineSystemProperty('textWrapStyle', () => new TextWrapStyleCss());
defineSystemProperty('timelineScope', () => new TimelineScopeCss());
defineSystemProperty('top', () => new TopCss());
defineSystemProperty('touchAction', () => new TouchActionCss());
defineSystemProperty('transform', () => new TransformCss());
defineSystemProperty('transformBox', () => new TransformBoxCss());
defineSystemProperty('transformOrigin', () => new TransformOriginCss());
defineSystemProperty('transformStyle', () => new TransformStyleCss());
defineSystemProperty('transition', () => new TransitionCss());
defineSystemProperty('transitionBehavior', () => new TransitionBehaviorCss());
defineSystemProperty('transitionDelay', () => new TransitionDelayCss());
defineSystemProperty('transitionDuration', () => new TransitionDurationCss());
defineSystemProperty('transitionProperty', () => new TransitionPropertyCss());
defineSystemProperty('transitionTimingFunction', () => new TransitionTimingFunctionCss());
defineSystemProperty('translate', () => new TranslateCss());
defineSystemProperty('unicodeBidi', () => new UnicodeBidiCss());
defineSystemProperty('userSelect', () => new UserSelectCss());
defineSystemProperty('vectorEffect', () => new VectorEffectCss());
defineSystemProperty('verticalAlign', () => new VerticalAlignCss());
defineSystemProperty('viewTimeline', () => new ViewTimelineCss());
defineSystemProperty('viewTimelineAxis', () => new ViewTimelineAxisCss());
defineSystemProperty('viewTimelineInset', () => new ViewTimelineInsetCss());
defineSystemProperty('viewTimelineName', () => new ViewTimelineNameCss());
defineSystemProperty('viewTransitionClass', () => new ViewTransitionClassCss());
defineSystemProperty('viewTransitionName', () => new ViewTransitionNameCss());
defineSystemProperty('visibility', () => new VisibilityCss());
defineSystemProperty('whiteSpace', () => new WhiteSpaceCss());
defineSystemProperty('whiteSpaceCollapse', () => new WhiteSpaceCollapseCss());
defineSystemProperty('widows', () => new WidowsCss());
defineSystemProperty('width', () => new WidthCss());
defineSystemProperty('willChange', () => new WillChangeCss());
defineSystemProperty('wordBreak', () => new WordBreakCss());
defineSystemProperty('wordSpacing', () => new WordSpacingCss());
defineSystemProperty('wordWrap', () => new WordWrapCss());
defineSystemProperty('writingMode', () => new WritingModeCss());
defineSystemProperty('x', () => new XCss());
defineSystemProperty('y', () => new YCss());
defineSystemProperty('zIndex', () => new ZIndexCss());
defineSystemProperty('zoom', () => new ZoomCss());
