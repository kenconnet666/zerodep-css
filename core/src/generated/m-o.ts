// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

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
