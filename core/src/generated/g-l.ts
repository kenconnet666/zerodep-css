// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** 行列间距（CSS gap）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
 */
export class GapCss extends LengthCssProperty<Property.Gap> {
  readonly inherit = 'gap:inherit;';
  readonly initial = 'gap:initial;';
  readonly normal = 'gap:normal;';
  readonly revert = 'gap:revert;';
  readonly revertLayer = 'gap:revert-layer;';
  readonly unset = 'gap:unset;';
  constructor() {
    super('gap');
  }
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
}

/** CSS 属性 glyph-orientation-vertical。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
 */
export class GlyphOrientationVerticalCss extends CssProperty<Property.GlyphOrientationVertical> {
  readonly auto = 'glyph-orientation-vertical:auto;';
  readonly inherit = 'glyph-orientation-vertical:inherit;';
  readonly initial = 'glyph-orientation-vertical:initial;';
  readonly revert = 'glyph-orientation-vertical:revert;';
  readonly revertLayer = 'glyph-orientation-vertical:revert-layer;';
  readonly unset = 'glyph-orientation-vertical:unset;';
  constructor() {
    super('glyph-orientation-vertical');
  }
}

/** CSS 属性 grid。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
 */
export class GridCss extends CssProperty<Property.Grid> {
  readonly inherit = 'grid:inherit;';
  readonly initial = 'grid:initial;';
  readonly none = 'grid:none;';
  readonly revert = 'grid:revert;';
  readonly revertLayer = 'grid:revert-layer;';
  readonly unset = 'grid:unset;';
  constructor() {
    super('grid');
  }
}

/** CSS 属性 grid-area。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
 */
export class GridAreaCss extends CssProperty<Property.GridArea> {
  readonly auto = 'grid-area:auto;';
  readonly inherit = 'grid-area:inherit;';
  readonly initial = 'grid-area:initial;';
  readonly revert = 'grid-area:revert;';
  readonly revertLayer = 'grid-area:revert-layer;';
  readonly unset = 'grid-area:unset;';
  constructor() {
    super('grid-area');
  }
}

/** CSS 属性 grid-auto-columns；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
 */
export class GridAutoColumnsCss extends LengthCssProperty<Property.GridAutoColumns> {
  readonly auto = 'grid-auto-columns:auto;';
  readonly inherit = 'grid-auto-columns:inherit;';
  readonly initial = 'grid-auto-columns:initial;';
  readonly maxContent = 'grid-auto-columns:max-content;';
  readonly minContent = 'grid-auto-columns:min-content;';
  readonly revert = 'grid-auto-columns:revert;';
  readonly revertLayer = 'grid-auto-columns:revert-layer;';
  readonly unset = 'grid-auto-columns:unset;';
  constructor() {
    super('grid-auto-columns');
  }
}

/** CSS 属性 grid-auto-flow；初始值 row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
 */
export class GridAutoFlowCss extends CssProperty<Property.GridAutoFlow> {
  readonly column = 'grid-auto-flow:column;';
  readonly dense = 'grid-auto-flow:dense;';
  readonly inherit = 'grid-auto-flow:inherit;';
  readonly initial = 'grid-auto-flow:initial;';
  readonly revert = 'grid-auto-flow:revert;';
  readonly revertLayer = 'grid-auto-flow:revert-layer;';
  readonly row = 'grid-auto-flow:row;';
  readonly unset = 'grid-auto-flow:unset;';
  constructor() {
    super('grid-auto-flow');
  }
}

/** CSS 属性 grid-auto-rows；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
 */
export class GridAutoRowsCss extends LengthCssProperty<Property.GridAutoRows> {
  readonly auto = 'grid-auto-rows:auto;';
  readonly inherit = 'grid-auto-rows:inherit;';
  readonly initial = 'grid-auto-rows:initial;';
  readonly maxContent = 'grid-auto-rows:max-content;';
  readonly minContent = 'grid-auto-rows:min-content;';
  readonly revert = 'grid-auto-rows:revert;';
  readonly revertLayer = 'grid-auto-rows:revert-layer;';
  readonly unset = 'grid-auto-rows:unset;';
  constructor() {
    super('grid-auto-rows');
  }
}

/** CSS 属性 grid-column。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
 */
export class GridColumnCss extends CssProperty<Property.GridColumn> {
  readonly auto = 'grid-column:auto;';
  readonly inherit = 'grid-column:inherit;';
  readonly initial = 'grid-column:initial;';
  readonly revert = 'grid-column:revert;';
  readonly revertLayer = 'grid-column:revert-layer;';
  readonly unset = 'grid-column:unset;';
  constructor() {
    super('grid-column');
  }
}

/** CSS 属性 grid-column-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
 */
export class GridColumnEndCss extends CssProperty<Property.GridColumnEnd> {
  readonly auto = 'grid-column-end:auto;';
  readonly inherit = 'grid-column-end:inherit;';
  readonly initial = 'grid-column-end:initial;';
  readonly revert = 'grid-column-end:revert;';
  readonly revertLayer = 'grid-column-end:revert-layer;';
  readonly unset = 'grid-column-end:unset;';
  constructor() {
    super('grid-column-end');
  }
}

/** CSS 属性 grid-column-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
 */
export class GridColumnStartCss extends CssProperty<Property.GridColumnStart> {
  readonly auto = 'grid-column-start:auto;';
  readonly inherit = 'grid-column-start:inherit;';
  readonly initial = 'grid-column-start:initial;';
  readonly revert = 'grid-column-start:revert;';
  readonly revertLayer = 'grid-column-start:revert-layer;';
  readonly unset = 'grid-column-start:unset;';
  constructor() {
    super('grid-column-start');
  }
}

/** CSS 属性 grid-row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
 */
export class GridRowCss extends CssProperty<Property.GridRow> {
  readonly auto = 'grid-row:auto;';
  readonly inherit = 'grid-row:inherit;';
  readonly initial = 'grid-row:initial;';
  readonly revert = 'grid-row:revert;';
  readonly revertLayer = 'grid-row:revert-layer;';
  readonly unset = 'grid-row:unset;';
  constructor() {
    super('grid-row');
  }
}

/** CSS 属性 grid-row-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
 */
export class GridRowEndCss extends CssProperty<Property.GridRowEnd> {
  readonly auto = 'grid-row-end:auto;';
  readonly inherit = 'grid-row-end:inherit;';
  readonly initial = 'grid-row-end:initial;';
  readonly revert = 'grid-row-end:revert;';
  readonly revertLayer = 'grid-row-end:revert-layer;';
  readonly unset = 'grid-row-end:unset;';
  constructor() {
    super('grid-row-end');
  }
}

/** CSS 属性 grid-row-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
 */
export class GridRowStartCss extends CssProperty<Property.GridRowStart> {
  readonly auto = 'grid-row-start:auto;';
  readonly inherit = 'grid-row-start:inherit;';
  readonly initial = 'grid-row-start:initial;';
  readonly revert = 'grid-row-start:revert;';
  readonly revertLayer = 'grid-row-start:revert-layer;';
  readonly unset = 'grid-row-start:unset;';
  constructor() {
    super('grid-row-start');
  }
}

/** CSS 属性 grid-template。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
 */
export class GridTemplateCss extends CssProperty<Property.GridTemplate> {
  readonly inherit = 'grid-template:inherit;';
  readonly initial = 'grid-template:initial;';
  readonly none = 'grid-template:none;';
  readonly revert = 'grid-template:revert;';
  readonly revertLayer = 'grid-template:revert-layer;';
  readonly unset = 'grid-template:unset;';
  constructor() {
    super('grid-template');
  }
}

/** CSS 属性 grid-template-areas；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
 */
export class GridTemplateAreasCss extends CssProperty<Property.GridTemplateAreas> {
  readonly inherit = 'grid-template-areas:inherit;';
  readonly initial = 'grid-template-areas:initial;';
  readonly none = 'grid-template-areas:none;';
  readonly revert = 'grid-template-areas:revert;';
  readonly revertLayer = 'grid-template-areas:revert-layer;';
  readonly unset = 'grid-template-areas:unset;';
  constructor() {
    super('grid-template-areas');
  }
}

/** CSS 属性 grid-template-columns；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
 */
export class GridTemplateColumnsCss extends LengthCssProperty<Property.GridTemplateColumns> {
  readonly auto = 'grid-template-columns:auto;';
  readonly inherit = 'grid-template-columns:inherit;';
  readonly initial = 'grid-template-columns:initial;';
  readonly maxContent = 'grid-template-columns:max-content;';
  readonly minContent = 'grid-template-columns:min-content;';
  readonly none = 'grid-template-columns:none;';
  readonly revert = 'grid-template-columns:revert;';
  readonly revertLayer = 'grid-template-columns:revert-layer;';
  readonly subgrid = 'grid-template-columns:subgrid;';
  readonly unset = 'grid-template-columns:unset;';
  constructor() {
    super('grid-template-columns');
  }
}

/** CSS 属性 grid-template-rows；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
 */
export class GridTemplateRowsCss extends LengthCssProperty<Property.GridTemplateRows> {
  readonly auto = 'grid-template-rows:auto;';
  readonly inherit = 'grid-template-rows:inherit;';
  readonly initial = 'grid-template-rows:initial;';
  readonly maxContent = 'grid-template-rows:max-content;';
  readonly minContent = 'grid-template-rows:min-content;';
  readonly none = 'grid-template-rows:none;';
  readonly revert = 'grid-template-rows:revert;';
  readonly revertLayer = 'grid-template-rows:revert-layer;';
  readonly subgrid = 'grid-template-rows:subgrid;';
  readonly unset = 'grid-template-rows:unset;';
  constructor() {
    super('grid-template-rows');
  }
}

/** CSS 属性 hanging-punctuation；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
 */
export class HangingPunctuationCss extends CssProperty<Property.HangingPunctuation> {
  readonly allowEnd = 'hanging-punctuation:allow-end;';
  readonly first = 'hanging-punctuation:first;';
  readonly forceEnd = 'hanging-punctuation:force-end;';
  readonly inherit = 'hanging-punctuation:inherit;';
  readonly initial = 'hanging-punctuation:initial;';
  readonly last = 'hanging-punctuation:last;';
  readonly none = 'hanging-punctuation:none;';
  readonly revert = 'hanging-punctuation:revert;';
  readonly revertLayer = 'hanging-punctuation:revert-layer;';
  readonly unset = 'hanging-punctuation:unset;';
  constructor() {
    super('hanging-punctuation');
  }
}

/** 高度（CSS height）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
 */
export class HeightCss extends LengthCssProperty<Property.Height> {
  readonly auto = 'height:auto;';
  readonly fitContent = 'height:fit-content;';
  readonly inherit = 'height:inherit;';
  readonly initial = 'height:initial;';
  readonly maxContent = 'height:max-content;';
  readonly minContent = 'height:min-content;';
  readonly revert = 'height:revert;';
  readonly revertLayer = 'height:revert-layer;';
  readonly unset = 'height:unset;';
  constructor() {
    super('height');
  }
}

/** CSS 属性 hyphenate-character；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
 */
export class HyphenateCharacterCss extends CssProperty<Property.HyphenateCharacter> {
  readonly auto = 'hyphenate-character:auto;';
  readonly inherit = 'hyphenate-character:inherit;';
  readonly initial = 'hyphenate-character:initial;';
  readonly revert = 'hyphenate-character:revert;';
  readonly revertLayer = 'hyphenate-character:revert-layer;';
  readonly unset = 'hyphenate-character:unset;';
  constructor() {
    super('hyphenate-character');
  }
}

/** CSS 属性 hyphenate-limit-chars；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
 */
export class HyphenateLimitCharsCss extends CssProperty<Property.HyphenateLimitChars> {
  readonly auto = 'hyphenate-limit-chars:auto;';
  readonly inherit = 'hyphenate-limit-chars:inherit;';
  readonly initial = 'hyphenate-limit-chars:initial;';
  readonly revert = 'hyphenate-limit-chars:revert;';
  readonly revertLayer = 'hyphenate-limit-chars:revert-layer;';
  readonly unset = 'hyphenate-limit-chars:unset;';
  constructor() {
    super('hyphenate-limit-chars');
  }
}

/** CSS 属性 hyphens；初始值 manual。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
 */
export class HyphensCss extends CssProperty<Property.Hyphens> {
  readonly auto = 'hyphens:auto;';
  readonly inherit = 'hyphens:inherit;';
  readonly initial = 'hyphens:initial;';
  readonly manual = 'hyphens:manual;';
  readonly none = 'hyphens:none;';
  readonly revert = 'hyphens:revert;';
  readonly revertLayer = 'hyphens:revert-layer;';
  readonly unset = 'hyphens:unset;';
  constructor() {
    super('hyphens');
  }
}

/** CSS 属性 image-orientation；初始值 from-image。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
 */
export class ImageOrientationCss extends CssProperty<Property.ImageOrientation> {
  readonly flip = 'image-orientation:flip;';
  readonly fromImage = 'image-orientation:from-image;';
  readonly inherit = 'image-orientation:inherit;';
  readonly initial = 'image-orientation:initial;';
  readonly revert = 'image-orientation:revert;';
  readonly revertLayer = 'image-orientation:revert-layer;';
  readonly unset = 'image-orientation:unset;';
  constructor() {
    super('image-orientation');
  }
}

/** CSS 属性 image-rendering；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
 */
export class ImageRenderingCss extends CssProperty<Property.ImageRendering> {
  readonly auto = 'image-rendering:auto;';
  readonly crispEdges = 'image-rendering:crisp-edges;';
  readonly inherit = 'image-rendering:inherit;';
  readonly initial = 'image-rendering:initial;';
  readonly pixelated = 'image-rendering:pixelated;';
  readonly revert = 'image-rendering:revert;';
  readonly revertLayer = 'image-rendering:revert-layer;';
  readonly smooth = 'image-rendering:smooth;';
  readonly unset = 'image-rendering:unset;';
  constructor() {
    super('image-rendering');
  }
}

/** CSS 属性 image-resolution；初始值 1dppx。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
 */
export class ImageResolutionCss extends CssProperty<Property.ImageResolution> {
  readonly fromImage = 'image-resolution:from-image;';
  readonly inherit = 'image-resolution:inherit;';
  readonly initial = 'image-resolution:initial;';
  readonly revert = 'image-resolution:revert;';
  readonly revertLayer = 'image-resolution:revert-layer;';
  readonly unset = 'image-resolution:unset;';
  constructor() {
    super('image-resolution');
  }
}

/** CSS 属性 initial-letter；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
 */
export class InitialLetterCss extends CssProperty<Property.InitialLetter> {
  readonly inherit = 'initial-letter:inherit;';
  readonly initial = 'initial-letter:initial;';
  readonly normal = 'initial-letter:normal;';
  readonly revert = 'initial-letter:revert;';
  readonly revertLayer = 'initial-letter:revert-layer;';
  readonly unset = 'initial-letter:unset;';
  constructor() {
    super('initial-letter');
  }
}

/** CSS 属性 initial-letter-align；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
 */
export class InitialLetterAlignCss extends CssProperty<Property.InitialLetterAlign> {
  readonly alphabetic = 'initial-letter-align:alphabetic;';
  readonly auto = 'initial-letter-align:auto;';
  readonly hanging = 'initial-letter-align:hanging;';
  readonly ideographic = 'initial-letter-align:ideographic;';
  readonly inherit = 'initial-letter-align:inherit;';
  readonly initial = 'initial-letter-align:initial;';
  readonly revert = 'initial-letter-align:revert;';
  readonly revertLayer = 'initial-letter-align:revert-layer;';
  readonly unset = 'initial-letter-align:unset;';
  constructor() {
    super('initial-letter-align');
  }
}

/** CSS 属性 inline-size；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
 */
export class InlineSizeCss extends LengthCssProperty<Property.InlineSize> {
  readonly auto = 'inline-size:auto;';
  readonly fitContent = 'inline-size:fit-content;';
  readonly inherit = 'inline-size:inherit;';
  readonly initial = 'inline-size:initial;';
  readonly maxContent = 'inline-size:max-content;';
  readonly minContent = 'inline-size:min-content;';
  readonly revert = 'inline-size:revert;';
  readonly revertLayer = 'inline-size:revert-layer;';
  readonly unset = 'inline-size:unset;';
  constructor() {
    super('inline-size');
  }
}

/** CSS 属性 inset。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
 */
export class InsetCss extends LengthCssProperty<Property.Inset> {
  readonly auto = 'inset:auto;';
  readonly inherit = 'inset:inherit;';
  readonly initial = 'inset:initial;';
  readonly revert = 'inset:revert;';
  readonly revertLayer = 'inset:revert-layer;';
  readonly unset = 'inset:unset;';
  constructor() {
    super('inset');
  }
}

/** CSS 属性 inset-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
 */
export class InsetBlockCss extends LengthCssProperty<Property.InsetBlock> {
  readonly auto = 'inset-block:auto;';
  readonly inherit = 'inset-block:inherit;';
  readonly initial = 'inset-block:initial;';
  readonly revert = 'inset-block:revert;';
  readonly revertLayer = 'inset-block:revert-layer;';
  readonly unset = 'inset-block:unset;';
  constructor() {
    super('inset-block');
  }
}

/** CSS 属性 inset-block-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
 */
export class InsetBlockEndCss extends LengthCssProperty<Property.InsetBlockEnd> {
  readonly auto = 'inset-block-end:auto;';
  readonly inherit = 'inset-block-end:inherit;';
  readonly initial = 'inset-block-end:initial;';
  readonly revert = 'inset-block-end:revert;';
  readonly revertLayer = 'inset-block-end:revert-layer;';
  readonly unset = 'inset-block-end:unset;';
  constructor() {
    super('inset-block-end');
  }
}

/** CSS 属性 inset-block-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
 */
export class InsetBlockStartCss extends LengthCssProperty<Property.InsetBlockStart> {
  readonly auto = 'inset-block-start:auto;';
  readonly inherit = 'inset-block-start:inherit;';
  readonly initial = 'inset-block-start:initial;';
  readonly revert = 'inset-block-start:revert;';
  readonly revertLayer = 'inset-block-start:revert-layer;';
  readonly unset = 'inset-block-start:unset;';
  constructor() {
    super('inset-block-start');
  }
}

/** CSS 属性 inset-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
 */
export class InsetInlineCss extends LengthCssProperty<Property.InsetInline> {
  readonly auto = 'inset-inline:auto;';
  readonly inherit = 'inset-inline:inherit;';
  readonly initial = 'inset-inline:initial;';
  readonly revert = 'inset-inline:revert;';
  readonly revertLayer = 'inset-inline:revert-layer;';
  readonly unset = 'inset-inline:unset;';
  constructor() {
    super('inset-inline');
  }
}

/** CSS 属性 inset-inline-end；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
 */
export class InsetInlineEndCss extends LengthCssProperty<Property.InsetInlineEnd> {
  readonly auto = 'inset-inline-end:auto;';
  readonly inherit = 'inset-inline-end:inherit;';
  readonly initial = 'inset-inline-end:initial;';
  readonly revert = 'inset-inline-end:revert;';
  readonly revertLayer = 'inset-inline-end:revert-layer;';
  readonly unset = 'inset-inline-end:unset;';
  constructor() {
    super('inset-inline-end');
  }
}

/** CSS 属性 inset-inline-start；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
 */
export class InsetInlineStartCss extends LengthCssProperty<Property.InsetInlineStart> {
  readonly auto = 'inset-inline-start:auto;';
  readonly inherit = 'inset-inline-start:inherit;';
  readonly initial = 'inset-inline-start:initial;';
  readonly revert = 'inset-inline-start:revert;';
  readonly revertLayer = 'inset-inline-start:revert-layer;';
  readonly unset = 'inset-inline-start:unset;';
  constructor() {
    super('inset-inline-start');
  }
}

/** CSS 属性 interpolate-size；初始值 numeric-only。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
 */
export class InterpolateSizeCss extends CssProperty<Property.InterpolateSize> {
  readonly allowKeywords = 'interpolate-size:allow-keywords;';
  readonly inherit = 'interpolate-size:inherit;';
  readonly initial = 'interpolate-size:initial;';
  readonly numericOnly = 'interpolate-size:numeric-only;';
  readonly revert = 'interpolate-size:revert;';
  readonly revertLayer = 'interpolate-size:revert-layer;';
  readonly unset = 'interpolate-size:unset;';
  constructor() {
    super('interpolate-size');
  }
}

/** CSS 属性 isolation；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
 */
export class IsolationCss extends CssProperty<Property.Isolation> {
  readonly auto = 'isolation:auto;';
  readonly inherit = 'isolation:inherit;';
  readonly initial = 'isolation:initial;';
  readonly isolate = 'isolation:isolate;';
  readonly revert = 'isolation:revert;';
  readonly revertLayer = 'isolation:revert-layer;';
  readonly unset = 'isolation:unset;';
  constructor() {
    super('isolation');
  }
}

/** CSS 属性 justify-content；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
 */
export class JustifyContentCss extends CssProperty<Property.JustifyContent> {
  readonly center = 'justify-content:center;';
  readonly end = 'justify-content:end;';
  readonly flexEnd = 'justify-content:flex-end;';
  readonly flexStart = 'justify-content:flex-start;';
  readonly inherit = 'justify-content:inherit;';
  readonly initial = 'justify-content:initial;';
  readonly left = 'justify-content:left;';
  readonly normal = 'justify-content:normal;';
  readonly revert = 'justify-content:revert;';
  readonly revertLayer = 'justify-content:revert-layer;';
  readonly right = 'justify-content:right;';
  readonly spaceAround = 'justify-content:space-around;';
  readonly spaceBetween = 'justify-content:space-between;';
  readonly spaceEvenly = 'justify-content:space-evenly;';
  readonly start = 'justify-content:start;';
  readonly stretch = 'justify-content:stretch;';
  readonly unset = 'justify-content:unset;';
  constructor() {
    super('justify-content');
  }
}

/** CSS 属性 justify-items；初始值 legacy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
 */
export class JustifyItemsCss extends CssProperty<Property.JustifyItems> {
  readonly anchorCenter = 'justify-items:anchor-center;';
  readonly baseline = 'justify-items:baseline;';
  readonly center = 'justify-items:center;';
  readonly end = 'justify-items:end;';
  readonly flexEnd = 'justify-items:flex-end;';
  readonly flexStart = 'justify-items:flex-start;';
  readonly inherit = 'justify-items:inherit;';
  readonly initial = 'justify-items:initial;';
  readonly left = 'justify-items:left;';
  readonly legacy = 'justify-items:legacy;';
  readonly normal = 'justify-items:normal;';
  readonly revert = 'justify-items:revert;';
  readonly revertLayer = 'justify-items:revert-layer;';
  readonly right = 'justify-items:right;';
  readonly selfEnd = 'justify-items:self-end;';
  readonly selfStart = 'justify-items:self-start;';
  readonly start = 'justify-items:start;';
  readonly stretch = 'justify-items:stretch;';
  readonly unset = 'justify-items:unset;';
  constructor() {
    super('justify-items');
  }
}

/** CSS 属性 justify-self；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
 */
export class JustifySelfCss extends CssProperty<Property.JustifySelf> {
  readonly anchorCenter = 'justify-self:anchor-center;';
  readonly auto = 'justify-self:auto;';
  readonly baseline = 'justify-self:baseline;';
  readonly center = 'justify-self:center;';
  readonly end = 'justify-self:end;';
  readonly flexEnd = 'justify-self:flex-end;';
  readonly flexStart = 'justify-self:flex-start;';
  readonly inherit = 'justify-self:inherit;';
  readonly initial = 'justify-self:initial;';
  readonly left = 'justify-self:left;';
  readonly normal = 'justify-self:normal;';
  readonly revert = 'justify-self:revert;';
  readonly revertLayer = 'justify-self:revert-layer;';
  readonly right = 'justify-self:right;';
  readonly selfEnd = 'justify-self:self-end;';
  readonly selfStart = 'justify-self:self-start;';
  readonly start = 'justify-self:start;';
  readonly stretch = 'justify-self:stretch;';
  readonly unset = 'justify-self:unset;';
  constructor() {
    super('justify-self');
  }
}

/** CSS 属性 justify-tracks；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
 */
export class JustifyTracksCss extends CssProperty<Property.JustifyTracks> {
  readonly center = 'justify-tracks:center;';
  readonly end = 'justify-tracks:end;';
  readonly flexEnd = 'justify-tracks:flex-end;';
  readonly flexStart = 'justify-tracks:flex-start;';
  readonly inherit = 'justify-tracks:inherit;';
  readonly initial = 'justify-tracks:initial;';
  readonly left = 'justify-tracks:left;';
  readonly normal = 'justify-tracks:normal;';
  readonly revert = 'justify-tracks:revert;';
  readonly revertLayer = 'justify-tracks:revert-layer;';
  readonly right = 'justify-tracks:right;';
  readonly spaceAround = 'justify-tracks:space-around;';
  readonly spaceBetween = 'justify-tracks:space-between;';
  readonly spaceEvenly = 'justify-tracks:space-evenly;';
  readonly start = 'justify-tracks:start;';
  readonly stretch = 'justify-tracks:stretch;';
  readonly unset = 'justify-tracks:unset;';
  constructor() {
    super('justify-tracks');
  }
}

/** CSS 属性 left；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
 */
export class LeftCss extends LengthCssProperty<Property.Left> {
  readonly auto = 'left:auto;';
  readonly inherit = 'left:inherit;';
  readonly initial = 'left:initial;';
  readonly revert = 'left:revert;';
  readonly revertLayer = 'left:revert-layer;';
  readonly unset = 'left:unset;';
  constructor() {
    super('left');
  }
}

/** CSS 属性 letter-spacing；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
 */
export class LetterSpacingCss extends LengthCssProperty<Property.LetterSpacing> {
  readonly inherit = 'letter-spacing:inherit;';
  readonly initial = 'letter-spacing:initial;';
  readonly normal = 'letter-spacing:normal;';
  readonly revert = 'letter-spacing:revert;';
  readonly revertLayer = 'letter-spacing:revert-layer;';
  readonly unset = 'letter-spacing:unset;';
  constructor() {
    super('letter-spacing');
  }
}

/** CSS 属性 lighting-color；初始值 white。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
 */
export class LightingColorCss extends CssProperty<Property.LightingColor> {
  readonly AccentColor = 'lighting-color:AccentColor;';
  readonly AccentColorText = 'lighting-color:AccentColorText;';
  readonly ActiveBorder = 'lighting-color:ActiveBorder;';
  readonly ActiveCaption = 'lighting-color:ActiveCaption;';
  readonly ActiveText = 'lighting-color:ActiveText;';
  readonly AppWorkspace = 'lighting-color:AppWorkspace;';
  readonly Background = 'lighting-color:Background;';
  readonly ButtonBorder = 'lighting-color:ButtonBorder;';
  readonly ButtonFace = 'lighting-color:ButtonFace;';
  readonly ButtonHighlight = 'lighting-color:ButtonHighlight;';
  readonly ButtonShadow = 'lighting-color:ButtonShadow;';
  readonly ButtonText = 'lighting-color:ButtonText;';
  readonly Canvas = 'lighting-color:Canvas;';
  readonly CanvasText = 'lighting-color:CanvasText;';
  readonly CaptionText = 'lighting-color:CaptionText;';
  readonly Field = 'lighting-color:Field;';
  readonly FieldText = 'lighting-color:FieldText;';
  readonly GrayText = 'lighting-color:GrayText;';
  readonly Highlight = 'lighting-color:Highlight;';
  readonly HighlightText = 'lighting-color:HighlightText;';
  readonly InactiveBorder = 'lighting-color:InactiveBorder;';
  readonly InactiveCaption = 'lighting-color:InactiveCaption;';
  readonly InactiveCaptionText = 'lighting-color:InactiveCaptionText;';
  readonly InfoBackground = 'lighting-color:InfoBackground;';
  readonly InfoText = 'lighting-color:InfoText;';
  readonly LinkText = 'lighting-color:LinkText;';
  readonly Mark = 'lighting-color:Mark;';
  readonly MarkText = 'lighting-color:MarkText;';
  readonly Menu = 'lighting-color:Menu;';
  readonly MenuText = 'lighting-color:MenuText;';
  readonly Scrollbar = 'lighting-color:Scrollbar;';
  readonly SelectedItem = 'lighting-color:SelectedItem;';
  readonly SelectedItemText = 'lighting-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'lighting-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'lighting-color:ThreeDFace;';
  readonly ThreeDHighlight = 'lighting-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'lighting-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'lighting-color:ThreeDShadow;';
  readonly VisitedText = 'lighting-color:VisitedText;';
  readonly Window = 'lighting-color:Window;';
  readonly WindowFrame = 'lighting-color:WindowFrame;';
  readonly WindowText = 'lighting-color:WindowText;';
  readonly aliceblue = 'lighting-color:aliceblue;';
  readonly antiquewhite = 'lighting-color:antiquewhite;';
  readonly aqua = 'lighting-color:aqua;';
  readonly aquamarine = 'lighting-color:aquamarine;';
  readonly azure = 'lighting-color:azure;';
  readonly beige = 'lighting-color:beige;';
  readonly bisque = 'lighting-color:bisque;';
  readonly black = 'lighting-color:black;';
  readonly blanchedalmond = 'lighting-color:blanchedalmond;';
  readonly blue = 'lighting-color:blue;';
  readonly blueviolet = 'lighting-color:blueviolet;';
  readonly brown = 'lighting-color:brown;';
  readonly burlywood = 'lighting-color:burlywood;';
  readonly cadetblue = 'lighting-color:cadetblue;';
  readonly chartreuse = 'lighting-color:chartreuse;';
  readonly chocolate = 'lighting-color:chocolate;';
  readonly coral = 'lighting-color:coral;';
  readonly cornflowerblue = 'lighting-color:cornflowerblue;';
  readonly cornsilk = 'lighting-color:cornsilk;';
  readonly crimson = 'lighting-color:crimson;';
  readonly currentColor = 'lighting-color:currentColor;';
  readonly cyan = 'lighting-color:cyan;';
  readonly darkblue = 'lighting-color:darkblue;';
  readonly darkcyan = 'lighting-color:darkcyan;';
  readonly darkgoldenrod = 'lighting-color:darkgoldenrod;';
  readonly darkgray = 'lighting-color:darkgray;';
  readonly darkgreen = 'lighting-color:darkgreen;';
  readonly darkgrey = 'lighting-color:darkgrey;';
  readonly darkkhaki = 'lighting-color:darkkhaki;';
  readonly darkmagenta = 'lighting-color:darkmagenta;';
  readonly darkolivegreen = 'lighting-color:darkolivegreen;';
  readonly darkorange = 'lighting-color:darkorange;';
  readonly darkorchid = 'lighting-color:darkorchid;';
  readonly darkred = 'lighting-color:darkred;';
  readonly darksalmon = 'lighting-color:darksalmon;';
  readonly darkseagreen = 'lighting-color:darkseagreen;';
  readonly darkslateblue = 'lighting-color:darkslateblue;';
  readonly darkslategray = 'lighting-color:darkslategray;';
  readonly darkslategrey = 'lighting-color:darkslategrey;';
  readonly darkturquoise = 'lighting-color:darkturquoise;';
  readonly darkviolet = 'lighting-color:darkviolet;';
  readonly deeppink = 'lighting-color:deeppink;';
  readonly deepskyblue = 'lighting-color:deepskyblue;';
  readonly dimgray = 'lighting-color:dimgray;';
  readonly dimgrey = 'lighting-color:dimgrey;';
  readonly dodgerblue = 'lighting-color:dodgerblue;';
  readonly firebrick = 'lighting-color:firebrick;';
  readonly floralwhite = 'lighting-color:floralwhite;';
  readonly forestgreen = 'lighting-color:forestgreen;';
  readonly fuchsia = 'lighting-color:fuchsia;';
  readonly gainsboro = 'lighting-color:gainsboro;';
  readonly ghostwhite = 'lighting-color:ghostwhite;';
  readonly gold = 'lighting-color:gold;';
  readonly goldenrod = 'lighting-color:goldenrod;';
  readonly gray = 'lighting-color:gray;';
  readonly green = 'lighting-color:green;';
  readonly greenyellow = 'lighting-color:greenyellow;';
  readonly grey = 'lighting-color:grey;';
  readonly honeydew = 'lighting-color:honeydew;';
  readonly hotpink = 'lighting-color:hotpink;';
  readonly indianred = 'lighting-color:indianred;';
  readonly indigo = 'lighting-color:indigo;';
  readonly inherit = 'lighting-color:inherit;';
  readonly initial = 'lighting-color:initial;';
  readonly ivory = 'lighting-color:ivory;';
  readonly khaki = 'lighting-color:khaki;';
  readonly lavender = 'lighting-color:lavender;';
  readonly lavenderblush = 'lighting-color:lavenderblush;';
  readonly lawngreen = 'lighting-color:lawngreen;';
  readonly lemonchiffon = 'lighting-color:lemonchiffon;';
  readonly lightblue = 'lighting-color:lightblue;';
  readonly lightcoral = 'lighting-color:lightcoral;';
  readonly lightcyan = 'lighting-color:lightcyan;';
  readonly lightgoldenrodyellow = 'lighting-color:lightgoldenrodyellow;';
  readonly lightgray = 'lighting-color:lightgray;';
  readonly lightgreen = 'lighting-color:lightgreen;';
  readonly lightgrey = 'lighting-color:lightgrey;';
  readonly lightpink = 'lighting-color:lightpink;';
  readonly lightsalmon = 'lighting-color:lightsalmon;';
  readonly lightseagreen = 'lighting-color:lightseagreen;';
  readonly lightskyblue = 'lighting-color:lightskyblue;';
  readonly lightslategray = 'lighting-color:lightslategray;';
  readonly lightslategrey = 'lighting-color:lightslategrey;';
  readonly lightsteelblue = 'lighting-color:lightsteelblue;';
  readonly lightyellow = 'lighting-color:lightyellow;';
  readonly lime = 'lighting-color:lime;';
  readonly limegreen = 'lighting-color:limegreen;';
  readonly linen = 'lighting-color:linen;';
  readonly magenta = 'lighting-color:magenta;';
  readonly maroon = 'lighting-color:maroon;';
  readonly mediumaquamarine = 'lighting-color:mediumaquamarine;';
  readonly mediumblue = 'lighting-color:mediumblue;';
  readonly mediumorchid = 'lighting-color:mediumorchid;';
  readonly mediumpurple = 'lighting-color:mediumpurple;';
  readonly mediumseagreen = 'lighting-color:mediumseagreen;';
  readonly mediumslateblue = 'lighting-color:mediumslateblue;';
  readonly mediumspringgreen = 'lighting-color:mediumspringgreen;';
  readonly mediumturquoise = 'lighting-color:mediumturquoise;';
  readonly mediumvioletred = 'lighting-color:mediumvioletred;';
  readonly midnightblue = 'lighting-color:midnightblue;';
  readonly mintcream = 'lighting-color:mintcream;';
  readonly mistyrose = 'lighting-color:mistyrose;';
  readonly moccasin = 'lighting-color:moccasin;';
  readonly navajowhite = 'lighting-color:navajowhite;';
  readonly navy = 'lighting-color:navy;';
  readonly oldlace = 'lighting-color:oldlace;';
  readonly olive = 'lighting-color:olive;';
  readonly olivedrab = 'lighting-color:olivedrab;';
  readonly orange = 'lighting-color:orange;';
  readonly orangered = 'lighting-color:orangered;';
  readonly orchid = 'lighting-color:orchid;';
  readonly palegoldenrod = 'lighting-color:palegoldenrod;';
  readonly palegreen = 'lighting-color:palegreen;';
  readonly paleturquoise = 'lighting-color:paleturquoise;';
  readonly palevioletred = 'lighting-color:palevioletred;';
  readonly papayawhip = 'lighting-color:papayawhip;';
  readonly peachpuff = 'lighting-color:peachpuff;';
  readonly peru = 'lighting-color:peru;';
  readonly pink = 'lighting-color:pink;';
  readonly plum = 'lighting-color:plum;';
  readonly powderblue = 'lighting-color:powderblue;';
  readonly purple = 'lighting-color:purple;';
  readonly rebeccapurple = 'lighting-color:rebeccapurple;';
  readonly red = 'lighting-color:red;';
  readonly revert = 'lighting-color:revert;';
  readonly revertLayer = 'lighting-color:revert-layer;';
  readonly rosybrown = 'lighting-color:rosybrown;';
  readonly royalblue = 'lighting-color:royalblue;';
  readonly saddlebrown = 'lighting-color:saddlebrown;';
  readonly salmon = 'lighting-color:salmon;';
  readonly sandybrown = 'lighting-color:sandybrown;';
  readonly seagreen = 'lighting-color:seagreen;';
  readonly seashell = 'lighting-color:seashell;';
  readonly sienna = 'lighting-color:sienna;';
  readonly silver = 'lighting-color:silver;';
  readonly skyblue = 'lighting-color:skyblue;';
  readonly slateblue = 'lighting-color:slateblue;';
  readonly slategray = 'lighting-color:slategray;';
  readonly slategrey = 'lighting-color:slategrey;';
  readonly snow = 'lighting-color:snow;';
  readonly springgreen = 'lighting-color:springgreen;';
  readonly steelblue = 'lighting-color:steelblue;';
  readonly tan = 'lighting-color:tan;';
  readonly teal = 'lighting-color:teal;';
  readonly thistle = 'lighting-color:thistle;';
  readonly tomato = 'lighting-color:tomato;';
  readonly transparent = 'lighting-color:transparent;';
  readonly turquoise = 'lighting-color:turquoise;';
  readonly unset = 'lighting-color:unset;';
  readonly violet = 'lighting-color:violet;';
  readonly wheat = 'lighting-color:wheat;';
  readonly white = 'lighting-color:white;';
  readonly whitesmoke = 'lighting-color:whitesmoke;';
  readonly yellow = 'lighting-color:yellow;';
  readonly yellowgreen = 'lighting-color:yellowgreen;';
  constructor() {
    super('lighting-color');
  }
}

/** CSS 属性 line-break；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
 */
export class LineBreakCss extends CssProperty<Property.LineBreak> {
  readonly anywhere = 'line-break:anywhere;';
  readonly auto = 'line-break:auto;';
  readonly inherit = 'line-break:inherit;';
  readonly initial = 'line-break:initial;';
  readonly loose = 'line-break:loose;';
  readonly normal = 'line-break:normal;';
  readonly revert = 'line-break:revert;';
  readonly revertLayer = 'line-break:revert-layer;';
  readonly strict = 'line-break:strict;';
  readonly unset = 'line-break:unset;';
  constructor() {
    super('line-break');
  }
}

/** CSS 属性 line-clamp；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
 */
export class LineClampCss extends CssProperty<Property.LineClamp> {
  readonly inherit = 'line-clamp:inherit;';
  readonly initial = 'line-clamp:initial;';
  readonly none = 'line-clamp:none;';
  readonly revert = 'line-clamp:revert;';
  readonly revertLayer = 'line-clamp:revert-layer;';
  readonly unset = 'line-clamp:unset;';
  constructor() {
    super('line-clamp');
  }
}

/** CSS 属性 line-height；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
 */
export class LineHeightCss extends LengthCssProperty<Property.LineHeight> {
  readonly inherit = 'line-height:inherit;';
  readonly initial = 'line-height:initial;';
  readonly normal = 'line-height:normal;';
  readonly revert = 'line-height:revert;';
  readonly revertLayer = 'line-height:revert-layer;';
  readonly unset = 'line-height:unset;';
  constructor() {
    super('line-height');
  }
}

/** CSS 属性 line-height-step；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
 */
export class LineHeightStepCss extends LengthCssProperty<Property.LineHeightStep> {
  readonly inherit = 'line-height-step:inherit;';
  readonly initial = 'line-height-step:initial;';
  readonly revert = 'line-height-step:revert;';
  readonly revertLayer = 'line-height-step:revert-layer;';
  readonly unset = 'line-height-step:unset;';
  constructor() {
    super('line-height-step');
  }
}

/** CSS 属性 list-style。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
 */
export class ListStyleCss extends CssProperty<Property.ListStyle> {
  readonly inherit = 'list-style:inherit;';
  readonly initial = 'list-style:initial;';
  readonly inside = 'list-style:inside;';
  readonly none = 'list-style:none;';
  readonly outside = 'list-style:outside;';
  readonly revert = 'list-style:revert;';
  readonly revertLayer = 'list-style:revert-layer;';
  readonly unset = 'list-style:unset;';
  constructor() {
    super('list-style');
  }
}

/** CSS 属性 list-style-image；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
 */
export class ListStyleImageCss extends CssProperty<Property.ListStyleImage> {
  readonly inherit = 'list-style-image:inherit;';
  readonly initial = 'list-style-image:initial;';
  readonly none = 'list-style-image:none;';
  readonly revert = 'list-style-image:revert;';
  readonly revertLayer = 'list-style-image:revert-layer;';
  readonly unset = 'list-style-image:unset;';
  constructor() {
    super('list-style-image');
  }
}

/** CSS 属性 list-style-position；初始值 outside。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
 */
export class ListStylePositionCss extends CssProperty<Property.ListStylePosition> {
  readonly inherit = 'list-style-position:inherit;';
  readonly initial = 'list-style-position:initial;';
  readonly inside = 'list-style-position:inside;';
  readonly outside = 'list-style-position:outside;';
  readonly revert = 'list-style-position:revert;';
  readonly revertLayer = 'list-style-position:revert-layer;';
  readonly unset = 'list-style-position:unset;';
  constructor() {
    super('list-style-position');
  }
}

/** CSS 属性 list-style-type；初始值 disc。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
 */
export class ListStyleTypeCss extends CssProperty<Property.ListStyleType> {
  readonly inherit = 'list-style-type:inherit;';
  readonly initial = 'list-style-type:initial;';
  readonly none = 'list-style-type:none;';
  readonly revert = 'list-style-type:revert;';
  readonly revertLayer = 'list-style-type:revert-layer;';
  readonly unset = 'list-style-type:unset;';
  constructor() {
    super('list-style-type');
  }
}
