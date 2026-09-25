// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

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
