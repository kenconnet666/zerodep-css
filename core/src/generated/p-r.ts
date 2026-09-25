// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

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
