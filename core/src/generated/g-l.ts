// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 每条属性链只在首次使用时建立系统关键字；主题仍可继承增加成员。

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
