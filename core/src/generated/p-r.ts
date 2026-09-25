// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** 内边距（CSS padding）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
 */
export class PaddingCss extends LengthCssProperty<Property.Padding> {
  readonly inherit = 'padding:inherit;';
  readonly initial = 'padding:initial;';
  readonly revert = 'padding:revert;';
  readonly revertLayer = 'padding:revert-layer;';
  readonly unset = 'padding:unset;';
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

/** CSS 属性 padding-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
 */
export class PaddingBlockCss extends LengthCssProperty<Property.PaddingBlock> {
  readonly inherit = 'padding-block:inherit;';
  readonly initial = 'padding-block:initial;';
  readonly revert = 'padding-block:revert;';
  readonly revertLayer = 'padding-block:revert-layer;';
  readonly unset = 'padding-block:unset;';
  constructor() {
    super('padding-block');
  }
}

/** CSS 属性 padding-block-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
 */
export class PaddingBlockEndCss extends LengthCssProperty<Property.PaddingBlockEnd> {
  readonly inherit = 'padding-block-end:inherit;';
  readonly initial = 'padding-block-end:initial;';
  readonly revert = 'padding-block-end:revert;';
  readonly revertLayer = 'padding-block-end:revert-layer;';
  readonly unset = 'padding-block-end:unset;';
  constructor() {
    super('padding-block-end');
  }
}

/** CSS 属性 padding-block-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
 */
export class PaddingBlockStartCss extends LengthCssProperty<Property.PaddingBlockStart> {
  readonly inherit = 'padding-block-start:inherit;';
  readonly initial = 'padding-block-start:initial;';
  readonly revert = 'padding-block-start:revert;';
  readonly revertLayer = 'padding-block-start:revert-layer;';
  readonly unset = 'padding-block-start:unset;';
  constructor() {
    super('padding-block-start');
  }
}

/** CSS 属性 padding-bottom；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
 */
export class PaddingBottomCss extends LengthCssProperty<Property.PaddingBottom> {
  readonly inherit = 'padding-bottom:inherit;';
  readonly initial = 'padding-bottom:initial;';
  readonly revert = 'padding-bottom:revert;';
  readonly revertLayer = 'padding-bottom:revert-layer;';
  readonly unset = 'padding-bottom:unset;';
  constructor() {
    super('padding-bottom');
  }
}

/** CSS 属性 padding-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
 */
export class PaddingInlineCss extends LengthCssProperty<Property.PaddingInline> {
  readonly inherit = 'padding-inline:inherit;';
  readonly initial = 'padding-inline:initial;';
  readonly revert = 'padding-inline:revert;';
  readonly revertLayer = 'padding-inline:revert-layer;';
  readonly unset = 'padding-inline:unset;';
  constructor() {
    super('padding-inline');
  }
}

/** CSS 属性 padding-inline-end；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
 */
export class PaddingInlineEndCss extends LengthCssProperty<Property.PaddingInlineEnd> {
  readonly inherit = 'padding-inline-end:inherit;';
  readonly initial = 'padding-inline-end:initial;';
  readonly revert = 'padding-inline-end:revert;';
  readonly revertLayer = 'padding-inline-end:revert-layer;';
  readonly unset = 'padding-inline-end:unset;';
  constructor() {
    super('padding-inline-end');
  }
}

/** CSS 属性 padding-inline-start；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
 */
export class PaddingInlineStartCss extends LengthCssProperty<Property.PaddingInlineStart> {
  readonly inherit = 'padding-inline-start:inherit;';
  readonly initial = 'padding-inline-start:initial;';
  readonly revert = 'padding-inline-start:revert;';
  readonly revertLayer = 'padding-inline-start:revert-layer;';
  readonly unset = 'padding-inline-start:unset;';
  constructor() {
    super('padding-inline-start');
  }
}

/** CSS 属性 padding-left；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
 */
export class PaddingLeftCss extends LengthCssProperty<Property.PaddingLeft> {
  readonly inherit = 'padding-left:inherit;';
  readonly initial = 'padding-left:initial;';
  readonly revert = 'padding-left:revert;';
  readonly revertLayer = 'padding-left:revert-layer;';
  readonly unset = 'padding-left:unset;';
  constructor() {
    super('padding-left');
  }
}

/** CSS 属性 padding-right；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
 */
export class PaddingRightCss extends LengthCssProperty<Property.PaddingRight> {
  readonly inherit = 'padding-right:inherit;';
  readonly initial = 'padding-right:initial;';
  readonly revert = 'padding-right:revert;';
  readonly revertLayer = 'padding-right:revert-layer;';
  readonly unset = 'padding-right:unset;';
  constructor() {
    super('padding-right');
  }
}

/** CSS 属性 padding-top；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
 */
export class PaddingTopCss extends LengthCssProperty<Property.PaddingTop> {
  readonly inherit = 'padding-top:inherit;';
  readonly initial = 'padding-top:initial;';
  readonly revert = 'padding-top:revert;';
  readonly revertLayer = 'padding-top:revert-layer;';
  readonly unset = 'padding-top:unset;';
  constructor() {
    super('padding-top');
  }
}

/** CSS 属性 page；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
 */
export class PageCss extends CssProperty<Property.Page> {
  readonly auto = 'page:auto;';
  readonly inherit = 'page:inherit;';
  readonly initial = 'page:initial;';
  readonly revert = 'page:revert;';
  readonly revertLayer = 'page:revert-layer;';
  readonly unset = 'page:unset;';
  constructor() {
    super('page');
  }
}

/** CSS 属性 paint-order；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
 */
export class PaintOrderCss extends CssProperty<Property.PaintOrder> {
  readonly fill = 'paint-order:fill;';
  readonly inherit = 'paint-order:inherit;';
  readonly initial = 'paint-order:initial;';
  readonly markers = 'paint-order:markers;';
  readonly normal = 'paint-order:normal;';
  readonly revert = 'paint-order:revert;';
  readonly revertLayer = 'paint-order:revert-layer;';
  readonly stroke = 'paint-order:stroke;';
  readonly unset = 'paint-order:unset;';
  constructor() {
    super('paint-order');
  }
}

/** CSS 属性 perspective；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
 */
export class PerspectiveCss extends LengthCssProperty<Property.Perspective> {
  readonly inherit = 'perspective:inherit;';
  readonly initial = 'perspective:initial;';
  readonly none = 'perspective:none;';
  readonly revert = 'perspective:revert;';
  readonly revertLayer = 'perspective:revert-layer;';
  readonly unset = 'perspective:unset;';
  constructor() {
    super('perspective');
  }
}

/** CSS 属性 perspective-origin；初始值 50% 50%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
 */
export class PerspectiveOriginCss extends LengthCssProperty<Property.PerspectiveOrigin> {
  readonly bottom = 'perspective-origin:bottom;';
  readonly center = 'perspective-origin:center;';
  readonly inherit = 'perspective-origin:inherit;';
  readonly initial = 'perspective-origin:initial;';
  readonly left = 'perspective-origin:left;';
  readonly revert = 'perspective-origin:revert;';
  readonly revertLayer = 'perspective-origin:revert-layer;';
  readonly right = 'perspective-origin:right;';
  readonly top = 'perspective-origin:top;';
  readonly unset = 'perspective-origin:unset;';
  constructor() {
    super('perspective-origin');
  }
}

/** CSS 属性 place-content。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
 */
export class PlaceContentCss extends CssProperty<Property.PlaceContent> {
  readonly baseline = 'place-content:baseline;';
  readonly center = 'place-content:center;';
  readonly end = 'place-content:end;';
  readonly flexEnd = 'place-content:flex-end;';
  readonly flexStart = 'place-content:flex-start;';
  readonly inherit = 'place-content:inherit;';
  readonly initial = 'place-content:initial;';
  readonly normal = 'place-content:normal;';
  readonly revert = 'place-content:revert;';
  readonly revertLayer = 'place-content:revert-layer;';
  readonly spaceAround = 'place-content:space-around;';
  readonly spaceBetween = 'place-content:space-between;';
  readonly spaceEvenly = 'place-content:space-evenly;';
  readonly start = 'place-content:start;';
  readonly stretch = 'place-content:stretch;';
  readonly unset = 'place-content:unset;';
  constructor() {
    super('place-content');
  }
}

/** CSS 属性 place-items。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
 */
export class PlaceItemsCss extends CssProperty<Property.PlaceItems> {
  readonly anchorCenter = 'place-items:anchor-center;';
  readonly baseline = 'place-items:baseline;';
  readonly center = 'place-items:center;';
  readonly end = 'place-items:end;';
  readonly flexEnd = 'place-items:flex-end;';
  readonly flexStart = 'place-items:flex-start;';
  readonly inherit = 'place-items:inherit;';
  readonly initial = 'place-items:initial;';
  readonly normal = 'place-items:normal;';
  readonly revert = 'place-items:revert;';
  readonly revertLayer = 'place-items:revert-layer;';
  readonly selfEnd = 'place-items:self-end;';
  readonly selfStart = 'place-items:self-start;';
  readonly start = 'place-items:start;';
  readonly stretch = 'place-items:stretch;';
  readonly unset = 'place-items:unset;';
  constructor() {
    super('place-items');
  }
}

/** CSS 属性 place-self。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
 */
export class PlaceSelfCss extends CssProperty<Property.PlaceSelf> {
  readonly anchorCenter = 'place-self:anchor-center;';
  readonly auto = 'place-self:auto;';
  readonly baseline = 'place-self:baseline;';
  readonly center = 'place-self:center;';
  readonly end = 'place-self:end;';
  readonly flexEnd = 'place-self:flex-end;';
  readonly flexStart = 'place-self:flex-start;';
  readonly inherit = 'place-self:inherit;';
  readonly initial = 'place-self:initial;';
  readonly normal = 'place-self:normal;';
  readonly revert = 'place-self:revert;';
  readonly revertLayer = 'place-self:revert-layer;';
  readonly selfEnd = 'place-self:self-end;';
  readonly selfStart = 'place-self:self-start;';
  readonly start = 'place-self:start;';
  readonly stretch = 'place-self:stretch;';
  readonly unset = 'place-self:unset;';
  constructor() {
    super('place-self');
  }
}

/** CSS 属性 pointer-events；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
 */
export class PointerEventsCss extends CssProperty<Property.PointerEvents> {
  readonly all = 'pointer-events:all;';
  readonly auto = 'pointer-events:auto;';
  readonly fill = 'pointer-events:fill;';
  readonly inherit = 'pointer-events:inherit;';
  readonly initial = 'pointer-events:initial;';
  readonly none = 'pointer-events:none;';
  readonly painted = 'pointer-events:painted;';
  readonly revert = 'pointer-events:revert;';
  readonly revertLayer = 'pointer-events:revert-layer;';
  readonly stroke = 'pointer-events:stroke;';
  readonly unset = 'pointer-events:unset;';
  readonly visible = 'pointer-events:visible;';
  readonly visibleFill = 'pointer-events:visibleFill;';
  readonly visiblePainted = 'pointer-events:visiblePainted;';
  readonly visibleStroke = 'pointer-events:visibleStroke;';
  constructor() {
    super('pointer-events');
  }
}

/** CSS 属性 position；初始值 static。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
 */
export class PositionCss extends CssProperty<Property.Position> {
  readonly absolute = 'position:absolute;';
  readonly fixed = 'position:fixed;';
  readonly inherit = 'position:inherit;';
  readonly initial = 'position:initial;';
  readonly relative = 'position:relative;';
  readonly revert = 'position:revert;';
  readonly revertLayer = 'position:revert-layer;';
  readonly static = 'position:static;';
  readonly sticky = 'position:sticky;';
  readonly unset = 'position:unset;';
  constructor() {
    super('position');
  }
}

/** CSS 属性 position-anchor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
 */
export class PositionAnchorCss extends CssProperty<Property.PositionAnchor> {
  readonly auto = 'position-anchor:auto;';
  readonly inherit = 'position-anchor:inherit;';
  readonly initial = 'position-anchor:initial;';
  readonly revert = 'position-anchor:revert;';
  readonly revertLayer = 'position-anchor:revert-layer;';
  readonly unset = 'position-anchor:unset;';
  constructor() {
    super('position-anchor');
  }
}

/** CSS 属性 position-area；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
 */
export class PositionAreaCss extends CssProperty<Property.PositionArea> {
  readonly blockEnd = 'position-area:block-end;';
  readonly blockStart = 'position-area:block-start;';
  readonly bottom = 'position-area:bottom;';
  readonly center = 'position-area:center;';
  readonly end = 'position-area:end;';
  readonly inherit = 'position-area:inherit;';
  readonly initial = 'position-area:initial;';
  readonly inlineEnd = 'position-area:inline-end;';
  readonly inlineStart = 'position-area:inline-start;';
  readonly left = 'position-area:left;';
  readonly none = 'position-area:none;';
  readonly revert = 'position-area:revert;';
  readonly revertLayer = 'position-area:revert-layer;';
  readonly right = 'position-area:right;';
  readonly selfBlockEnd = 'position-area:self-block-end;';
  readonly selfBlockStart = 'position-area:self-block-start;';
  readonly selfEnd = 'position-area:self-end;';
  readonly selfInlineEnd = 'position-area:self-inline-end;';
  readonly selfInlineStart = 'position-area:self-inline-start;';
  readonly selfStart = 'position-area:self-start;';
  readonly spanAll = 'position-area:span-all;';
  readonly spanBlockEnd = 'position-area:span-block-end;';
  readonly spanBlockStart = 'position-area:span-block-start;';
  readonly spanBottom = 'position-area:span-bottom;';
  readonly spanEnd = 'position-area:span-end;';
  readonly spanInlineEnd = 'position-area:span-inline-end;';
  readonly spanInlineStart = 'position-area:span-inline-start;';
  readonly spanLeft = 'position-area:span-left;';
  readonly spanRight = 'position-area:span-right;';
  readonly spanSelfBlockEnd = 'position-area:span-self-block-end;';
  readonly spanSelfBlockStart = 'position-area:span-self-block-start;';
  readonly spanSelfEnd = 'position-area:span-self-end;';
  readonly spanSelfInlineEnd = 'position-area:span-self-inline-end;';
  readonly spanSelfInlineStart = 'position-area:span-self-inline-start;';
  readonly spanSelfStart = 'position-area:span-self-start;';
  readonly spanStart = 'position-area:span-start;';
  readonly spanTop = 'position-area:span-top;';
  readonly spanXEnd = 'position-area:span-x-end;';
  readonly spanXSelfEnd = 'position-area:span-x-self-end;';
  readonly spanXSelfStart = 'position-area:span-x-self-start;';
  readonly spanXStart = 'position-area:span-x-start;';
  readonly spanYEnd = 'position-area:span-y-end;';
  readonly spanYSelfEnd = 'position-area:span-y-self-end;';
  readonly spanYSelfStart = 'position-area:span-y-self-start;';
  readonly spanYStart = 'position-area:span-y-start;';
  readonly start = 'position-area:start;';
  readonly top = 'position-area:top;';
  readonly unset = 'position-area:unset;';
  readonly xEnd = 'position-area:x-end;';
  readonly xSelfEnd = 'position-area:x-self-end;';
  readonly xSelfStart = 'position-area:x-self-start;';
  readonly xStart = 'position-area:x-start;';
  readonly yEnd = 'position-area:y-end;';
  readonly ySelfEnd = 'position-area:y-self-end;';
  readonly ySelfStart = 'position-area:y-self-start;';
  readonly yStart = 'position-area:y-start;';
  constructor() {
    super('position-area');
  }
}

/** CSS 属性 position-try。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
 */
export class PositionTryCss extends CssProperty<Property.PositionTry> {
  readonly blockEnd = 'position-try:block-end;';
  readonly blockStart = 'position-try:block-start;';
  readonly bottom = 'position-try:bottom;';
  readonly center = 'position-try:center;';
  readonly end = 'position-try:end;';
  readonly flipBlock = 'position-try:flip-block;';
  readonly flipInline = 'position-try:flip-inline;';
  readonly flipStart = 'position-try:flip-start;';
  readonly inherit = 'position-try:inherit;';
  readonly initial = 'position-try:initial;';
  readonly inlineEnd = 'position-try:inline-end;';
  readonly inlineStart = 'position-try:inline-start;';
  readonly left = 'position-try:left;';
  readonly none = 'position-try:none;';
  readonly revert = 'position-try:revert;';
  readonly revertLayer = 'position-try:revert-layer;';
  readonly right = 'position-try:right;';
  readonly selfBlockEnd = 'position-try:self-block-end;';
  readonly selfBlockStart = 'position-try:self-block-start;';
  readonly selfEnd = 'position-try:self-end;';
  readonly selfInlineEnd = 'position-try:self-inline-end;';
  readonly selfInlineStart = 'position-try:self-inline-start;';
  readonly selfStart = 'position-try:self-start;';
  readonly spanAll = 'position-try:span-all;';
  readonly spanBlockEnd = 'position-try:span-block-end;';
  readonly spanBlockStart = 'position-try:span-block-start;';
  readonly spanBottom = 'position-try:span-bottom;';
  readonly spanEnd = 'position-try:span-end;';
  readonly spanInlineEnd = 'position-try:span-inline-end;';
  readonly spanInlineStart = 'position-try:span-inline-start;';
  readonly spanLeft = 'position-try:span-left;';
  readonly spanRight = 'position-try:span-right;';
  readonly spanSelfBlockEnd = 'position-try:span-self-block-end;';
  readonly spanSelfBlockStart = 'position-try:span-self-block-start;';
  readonly spanSelfEnd = 'position-try:span-self-end;';
  readonly spanSelfInlineEnd = 'position-try:span-self-inline-end;';
  readonly spanSelfInlineStart = 'position-try:span-self-inline-start;';
  readonly spanSelfStart = 'position-try:span-self-start;';
  readonly spanStart = 'position-try:span-start;';
  readonly spanTop = 'position-try:span-top;';
  readonly spanXEnd = 'position-try:span-x-end;';
  readonly spanXSelfEnd = 'position-try:span-x-self-end;';
  readonly spanXSelfStart = 'position-try:span-x-self-start;';
  readonly spanXStart = 'position-try:span-x-start;';
  readonly spanYEnd = 'position-try:span-y-end;';
  readonly spanYSelfEnd = 'position-try:span-y-self-end;';
  readonly spanYSelfStart = 'position-try:span-y-self-start;';
  readonly spanYStart = 'position-try:span-y-start;';
  readonly start = 'position-try:start;';
  readonly top = 'position-try:top;';
  readonly unset = 'position-try:unset;';
  readonly xEnd = 'position-try:x-end;';
  readonly xSelfEnd = 'position-try:x-self-end;';
  readonly xSelfStart = 'position-try:x-self-start;';
  readonly xStart = 'position-try:x-start;';
  readonly yEnd = 'position-try:y-end;';
  readonly ySelfEnd = 'position-try:y-self-end;';
  readonly ySelfStart = 'position-try:y-self-start;';
  readonly yStart = 'position-try:y-start;';
  constructor() {
    super('position-try');
  }
}

/** CSS 属性 position-try-fallbacks；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
 */
export class PositionTryFallbacksCss extends CssProperty<Property.PositionTryFallbacks> {
  readonly blockEnd = 'position-try-fallbacks:block-end;';
  readonly blockStart = 'position-try-fallbacks:block-start;';
  readonly bottom = 'position-try-fallbacks:bottom;';
  readonly center = 'position-try-fallbacks:center;';
  readonly end = 'position-try-fallbacks:end;';
  readonly flipBlock = 'position-try-fallbacks:flip-block;';
  readonly flipInline = 'position-try-fallbacks:flip-inline;';
  readonly flipStart = 'position-try-fallbacks:flip-start;';
  readonly inherit = 'position-try-fallbacks:inherit;';
  readonly initial = 'position-try-fallbacks:initial;';
  readonly inlineEnd = 'position-try-fallbacks:inline-end;';
  readonly inlineStart = 'position-try-fallbacks:inline-start;';
  readonly left = 'position-try-fallbacks:left;';
  readonly none = 'position-try-fallbacks:none;';
  readonly revert = 'position-try-fallbacks:revert;';
  readonly revertLayer = 'position-try-fallbacks:revert-layer;';
  readonly right = 'position-try-fallbacks:right;';
  readonly selfBlockEnd = 'position-try-fallbacks:self-block-end;';
  readonly selfBlockStart = 'position-try-fallbacks:self-block-start;';
  readonly selfEnd = 'position-try-fallbacks:self-end;';
  readonly selfInlineEnd = 'position-try-fallbacks:self-inline-end;';
  readonly selfInlineStart = 'position-try-fallbacks:self-inline-start;';
  readonly selfStart = 'position-try-fallbacks:self-start;';
  readonly spanAll = 'position-try-fallbacks:span-all;';
  readonly spanBlockEnd = 'position-try-fallbacks:span-block-end;';
  readonly spanBlockStart = 'position-try-fallbacks:span-block-start;';
  readonly spanBottom = 'position-try-fallbacks:span-bottom;';
  readonly spanEnd = 'position-try-fallbacks:span-end;';
  readonly spanInlineEnd = 'position-try-fallbacks:span-inline-end;';
  readonly spanInlineStart = 'position-try-fallbacks:span-inline-start;';
  readonly spanLeft = 'position-try-fallbacks:span-left;';
  readonly spanRight = 'position-try-fallbacks:span-right;';
  readonly spanSelfBlockEnd = 'position-try-fallbacks:span-self-block-end;';
  readonly spanSelfBlockStart = 'position-try-fallbacks:span-self-block-start;';
  readonly spanSelfEnd = 'position-try-fallbacks:span-self-end;';
  readonly spanSelfInlineEnd = 'position-try-fallbacks:span-self-inline-end;';
  readonly spanSelfInlineStart = 'position-try-fallbacks:span-self-inline-start;';
  readonly spanSelfStart = 'position-try-fallbacks:span-self-start;';
  readonly spanStart = 'position-try-fallbacks:span-start;';
  readonly spanTop = 'position-try-fallbacks:span-top;';
  readonly spanXEnd = 'position-try-fallbacks:span-x-end;';
  readonly spanXSelfEnd = 'position-try-fallbacks:span-x-self-end;';
  readonly spanXSelfStart = 'position-try-fallbacks:span-x-self-start;';
  readonly spanXStart = 'position-try-fallbacks:span-x-start;';
  readonly spanYEnd = 'position-try-fallbacks:span-y-end;';
  readonly spanYSelfEnd = 'position-try-fallbacks:span-y-self-end;';
  readonly spanYSelfStart = 'position-try-fallbacks:span-y-self-start;';
  readonly spanYStart = 'position-try-fallbacks:span-y-start;';
  readonly start = 'position-try-fallbacks:start;';
  readonly top = 'position-try-fallbacks:top;';
  readonly unset = 'position-try-fallbacks:unset;';
  readonly xEnd = 'position-try-fallbacks:x-end;';
  readonly xSelfEnd = 'position-try-fallbacks:x-self-end;';
  readonly xSelfStart = 'position-try-fallbacks:x-self-start;';
  readonly xStart = 'position-try-fallbacks:x-start;';
  readonly yEnd = 'position-try-fallbacks:y-end;';
  readonly ySelfEnd = 'position-try-fallbacks:y-self-end;';
  readonly ySelfStart = 'position-try-fallbacks:y-self-start;';
  readonly yStart = 'position-try-fallbacks:y-start;';
  constructor() {
    super('position-try-fallbacks');
  }
}

/** CSS 属性 position-try-order；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
 */
export class PositionTryOrderCss extends CssProperty<Property.PositionTryOrder> {
  readonly inherit = 'position-try-order:inherit;';
  readonly initial = 'position-try-order:initial;';
  readonly mostBlockSize = 'position-try-order:most-block-size;';
  readonly mostHeight = 'position-try-order:most-height;';
  readonly mostInlineSize = 'position-try-order:most-inline-size;';
  readonly mostWidth = 'position-try-order:most-width;';
  readonly normal = 'position-try-order:normal;';
  readonly revert = 'position-try-order:revert;';
  readonly revertLayer = 'position-try-order:revert-layer;';
  readonly unset = 'position-try-order:unset;';
  constructor() {
    super('position-try-order');
  }
}

/** CSS 属性 position-visibility；初始值 anchors-visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
 */
export class PositionVisibilityCss extends CssProperty<Property.PositionVisibility> {
  readonly always = 'position-visibility:always;';
  readonly anchorsValid = 'position-visibility:anchors-valid;';
  readonly anchorsVisible = 'position-visibility:anchors-visible;';
  readonly inherit = 'position-visibility:inherit;';
  readonly initial = 'position-visibility:initial;';
  readonly noOverflow = 'position-visibility:no-overflow;';
  readonly revert = 'position-visibility:revert;';
  readonly revertLayer = 'position-visibility:revert-layer;';
  readonly unset = 'position-visibility:unset;';
  constructor() {
    super('position-visibility');
  }
}

/** CSS 属性 print-color-adjust；初始值 economy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class PrintColorAdjustCss extends CssProperty<Property.PrintColorAdjust> {
  readonly economy = 'print-color-adjust:economy;';
  readonly exact = 'print-color-adjust:exact;';
  readonly inherit = 'print-color-adjust:inherit;';
  readonly initial = 'print-color-adjust:initial;';
  readonly revert = 'print-color-adjust:revert;';
  readonly revertLayer = 'print-color-adjust:revert-layer;';
  readonly unset = 'print-color-adjust:unset;';
  constructor() {
    super('print-color-adjust');
  }
}

/** CSS 属性 quotes。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
 */
export class QuotesCss extends CssProperty<Property.Quotes> {
  readonly auto = 'quotes:auto;';
  readonly inherit = 'quotes:inherit;';
  readonly initial = 'quotes:initial;';
  readonly none = 'quotes:none;';
  readonly revert = 'quotes:revert;';
  readonly revertLayer = 'quotes:revert-layer;';
  readonly unset = 'quotes:unset;';
  constructor() {
    super('quotes');
  }
}

/** CSS 属性 r；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
 */
export class RCss extends LengthCssProperty<Property.R> {
  readonly inherit = 'r:inherit;';
  readonly initial = 'r:initial;';
  readonly revert = 'r:revert;';
  readonly revertLayer = 'r:revert-layer;';
  readonly unset = 'r:unset;';
  constructor() {
    super('r');
  }
}

/** CSS 属性 resize；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
 */
export class ResizeCss extends CssProperty<Property.Resize> {
  readonly block = 'resize:block;';
  readonly both = 'resize:both;';
  readonly horizontal = 'resize:horizontal;';
  readonly inherit = 'resize:inherit;';
  readonly initial = 'resize:initial;';
  readonly inline = 'resize:inline;';
  readonly none = 'resize:none;';
  readonly revert = 'resize:revert;';
  readonly revertLayer = 'resize:revert-layer;';
  readonly unset = 'resize:unset;';
  readonly vertical = 'resize:vertical;';
  constructor() {
    super('resize');
  }
}

/** CSS 属性 right；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
 */
export class RightCss extends LengthCssProperty<Property.Right> {
  readonly auto = 'right:auto;';
  readonly inherit = 'right:inherit;';
  readonly initial = 'right:initial;';
  readonly revert = 'right:revert;';
  readonly revertLayer = 'right:revert-layer;';
  readonly unset = 'right:unset;';
  constructor() {
    super('right');
  }
}

/** CSS 属性 rotate；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
 */
export class RotateCss extends CssProperty<Property.Rotate> {
  readonly inherit = 'rotate:inherit;';
  readonly initial = 'rotate:initial;';
  readonly none = 'rotate:none;';
  readonly revert = 'rotate:revert;';
  readonly revertLayer = 'rotate:revert-layer;';
  readonly unset = 'rotate:unset;';
  constructor() {
    super('rotate');
  }
}

/** CSS 属性 row-gap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
 */
export class RowGapCss extends LengthCssProperty<Property.RowGap> {
  readonly inherit = 'row-gap:inherit;';
  readonly initial = 'row-gap:initial;';
  readonly normal = 'row-gap:normal;';
  readonly revert = 'row-gap:revert;';
  readonly revertLayer = 'row-gap:revert-layer;';
  readonly unset = 'row-gap:unset;';
  constructor() {
    super('row-gap');
  }
}

/** CSS 属性 ruby-align；初始值 space-around。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
 */
export class RubyAlignCss extends CssProperty<Property.RubyAlign> {
  readonly center = 'ruby-align:center;';
  readonly inherit = 'ruby-align:inherit;';
  readonly initial = 'ruby-align:initial;';
  readonly revert = 'ruby-align:revert;';
  readonly revertLayer = 'ruby-align:revert-layer;';
  readonly spaceAround = 'ruby-align:space-around;';
  readonly spaceBetween = 'ruby-align:space-between;';
  readonly start = 'ruby-align:start;';
  readonly unset = 'ruby-align:unset;';
  constructor() {
    super('ruby-align');
  }
}

/** CSS 属性 ruby-merge；初始值 separate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
 */
export class RubyMergeCss extends CssProperty<Property.RubyMerge> {
  readonly auto = 'ruby-merge:auto;';
  readonly collapse = 'ruby-merge:collapse;';
  readonly inherit = 'ruby-merge:inherit;';
  readonly initial = 'ruby-merge:initial;';
  readonly revert = 'ruby-merge:revert;';
  readonly revertLayer = 'ruby-merge:revert-layer;';
  readonly separate = 'ruby-merge:separate;';
  readonly unset = 'ruby-merge:unset;';
  constructor() {
    super('ruby-merge');
  }
}

/** CSS 属性 ruby-overhang；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
 */
export class RubyOverhangCss extends CssProperty<Property.RubyOverhang> {
  readonly auto = 'ruby-overhang:auto;';
  readonly inherit = 'ruby-overhang:inherit;';
  readonly initial = 'ruby-overhang:initial;';
  readonly none = 'ruby-overhang:none;';
  readonly revert = 'ruby-overhang:revert;';
  readonly revertLayer = 'ruby-overhang:revert-layer;';
  readonly unset = 'ruby-overhang:unset;';
  constructor() {
    super('ruby-overhang');
  }
}

/** CSS 属性 ruby-position；初始值 alternate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
 */
export class RubyPositionCss extends CssProperty<Property.RubyPosition> {
  readonly alternate = 'ruby-position:alternate;';
  readonly inherit = 'ruby-position:inherit;';
  readonly initial = 'ruby-position:initial;';
  readonly interCharacter = 'ruby-position:inter-character;';
  readonly over = 'ruby-position:over;';
  readonly revert = 'ruby-position:revert;';
  readonly revertLayer = 'ruby-position:revert-layer;';
  readonly under = 'ruby-position:under;';
  readonly unset = 'ruby-position:unset;';
  constructor() {
    super('ruby-position');
  }
}

/** CSS 属性 rx；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
 */
export class RxCss extends LengthCssProperty<Property.Rx> {
  readonly inherit = 'rx:inherit;';
  readonly initial = 'rx:initial;';
  readonly revert = 'rx:revert;';
  readonly revertLayer = 'rx:revert-layer;';
  readonly unset = 'rx:unset;';
  constructor() {
    super('rx');
  }
}

/** CSS 属性 ry；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
 */
export class RyCss extends LengthCssProperty<Property.Ry> {
  readonly inherit = 'ry:inherit;';
  readonly initial = 'ry:initial;';
  readonly revert = 'ry:revert;';
  readonly revertLayer = 'ry:revert-layer;';
  readonly unset = 'ry:unset;';
  constructor() {
    super('ry');
  }
}
