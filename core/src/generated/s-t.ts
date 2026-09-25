// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

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
