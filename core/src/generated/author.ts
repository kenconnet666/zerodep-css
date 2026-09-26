// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import * as group0 from './a.js';
import * as group1 from './b.js';
import * as group2 from './c-f.js';
import * as group3 from './g-l.js';
import * as group4 from './m-o.js';
import * as group5 from './p-r.js';
import * as group6 from './s-t.js';
import * as group7 from './u-z.js';
export * from './a.js';
export * from './b.js';
export * from './c-f.js';
export * from './g-l.js';
export * from './m-o.js';
export * from './p-r.js';
export * from './s-t.js';
export * from './u-z.js';
import { selectorRule, type CssSelector } from '../selectors.js';
import type { CssInput } from '../registry.js';

// 仅在首次构造作者实例时注册，避免未使用的属性链阻止按需打包。
let systemPropertiesReady = false;
/** 系统属性链；项目可通过类继承扩展关键字。 */
export class Css {
  constructor() {
    initializeSystemProperties();
  }
  /** 原生选择器 / @ 规则 / 动画帧；展开声明数组并省略条件空项。 */
  _selector(selector: CssSelector, ...parts: CssInput[]): string {
    return selectorRule(selector, parts);
  }
  /** 生成 &:hover 嵌套规则；返回声明片段，不登记样式。 */
  _hover(...parts: CssInput[]): string {
    return this._selector('&:hover', ...parts);
  }
  /** 生成 &:active 嵌套规则；返回声明片段，不登记样式。 */
  _active(...parts: CssInput[]): string {
    return this._selector('&:active', ...parts);
  }
  /** 生成 &:focus 嵌套规则；返回声明片段，不登记样式。 */
  _focus(...parts: CssInput[]): string {
    return this._selector('&:focus', ...parts);
  }
  /** 生成 &:focus-visible 嵌套规则；返回声明片段，不登记样式。 */
  _focusVisible(...parts: CssInput[]): string {
    return this._selector('&:focus-visible', ...parts);
  }
  /** 生成 &:focus-within 嵌套规则；返回声明片段，不登记样式。 */
  _focusWithin(...parts: CssInput[]): string {
    return this._selector('&:focus-within', ...parts);
  }
  /** 生成 &:disabled 嵌套规则；返回声明片段，不登记样式。 */
  _disabled(...parts: CssInput[]): string {
    return this._selector('&:disabled', ...parts);
  }
  /** 生成 &:checked 嵌套规则；返回声明片段，不登记样式。 */
  _checked(...parts: CssInput[]): string {
    return this._selector('&:checked', ...parts);
  }
  /** 生成 &::before 嵌套规则；返回声明片段，不登记样式。 */
  _before(...parts: CssInput[]): string {
    return this._selector('&::before', ...parts);
  }
  /** 生成 &::after 嵌套规则；返回声明片段，不登记样式。 */
  _after(...parts: CssInput[]): string {
    return this._selector('&::after', ...parts);
  }
  /** CSS 属性 accent-color；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  declare readonly accentColor: group0.AccentColorCss;
  /** CSS 属性 align-content；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  declare readonly alignContent: group0.AlignContentCss;
  /** CSS 属性 align-items；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  declare readonly alignItems: group0.AlignItemsCss;
  /** CSS 属性 align-self；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  declare readonly alignSelf: group0.AlignSelfCss;
  /** CSS 属性 align-tracks；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  declare readonly alignTracks: group0.AlignTracksCss;
  /** CSS 属性 alignment-baseline；初始值 baseline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  declare readonly alignmentBaseline: group0.AlignmentBaselineCss;
  /** CSS 属性 all。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  declare readonly all: group0.AllCss;
  /** CSS 属性 anchor-name；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  declare readonly anchorName: group0.AnchorNameCss;
  /** CSS 属性 anchor-scope；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  declare readonly anchorScope: group0.AnchorScopeCss;
  /** CSS 属性 animation。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  declare readonly animation: group0.AnimationCss;
  /** CSS 属性 animation-composition；初始值 replace。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  declare readonly animationComposition: group0.AnimationCompositionCss;
  /** CSS 属性 animation-delay；初始值 0s。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  declare readonly animationDelay: group0.AnimationDelayCss;
  /** CSS 属性 animation-direction；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  declare readonly animationDirection: group0.AnimationDirectionCss;
  /** CSS 属性 animation-duration；初始值 0s。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  declare readonly animationDuration: group0.AnimationDurationCss;
  /** CSS 属性 animation-fill-mode；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  declare readonly animationFillMode: group0.AnimationFillModeCss;
  /** CSS 属性 animation-iteration-count；初始值 1。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  declare readonly animationIterationCount: group0.AnimationIterationCountCss;
  /** CSS 属性 animation-name；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  declare readonly animationName: group0.AnimationNameCss;
  /** CSS 属性 animation-play-state；初始值 running。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  declare readonly animationPlayState: group0.AnimationPlayStateCss;
  /** CSS 属性 animation-range。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  declare readonly animationRange: group0.AnimationRangeCss;
  /** CSS 属性 animation-range-end；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  declare readonly animationRangeEnd: group0.AnimationRangeEndCss;
  /** CSS 属性 animation-range-start；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  declare readonly animationRangeStart: group0.AnimationRangeStartCss;
  /** CSS 属性 animation-timeline；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  declare readonly animationTimeline: group0.AnimationTimelineCss;
  /** CSS 属性 animation-timing-function；初始值 ease。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  declare readonly animationTimingFunction: group0.AnimationTimingFunctionCss;
  /** CSS 属性 appearance；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  declare readonly appearance: group0.AppearanceCss;
  /** CSS 属性 aspect-ratio；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  declare readonly aspectRatio: group0.AspectRatioCss;
  /** CSS 属性 backdrop-filter；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  declare readonly backdropFilter: group1.BackdropFilterCss;
  /** CSS 属性 backface-visibility；初始值 visible。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  declare readonly backfaceVisibility: group1.BackfaceVisibilityCss;
  /** CSS 属性 background。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  declare readonly background: group1.BackgroundCss;
  /** CSS 属性 background-attachment；初始值 scroll。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  declare readonly backgroundAttachment: group1.BackgroundAttachmentCss;
  /** CSS 属性 background-blend-mode；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  declare readonly backgroundBlendMode: group1.BackgroundBlendModeCss;
  /** CSS 属性 background-clip；初始值 border-box。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  declare readonly backgroundClip: group1.BackgroundClipCss;
  /** 背景颜色（CSS background-color）；初始值 transparent。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  declare readonly backgroundColor: group1.BackgroundColorCss;
  /** CSS 属性 background-image；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  declare readonly backgroundImage: group1.BackgroundImageCss;
  /** CSS 属性 background-origin；初始值 padding-box。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  declare readonly backgroundOrigin: group1.BackgroundOriginCss;
  /** CSS 属性 background-position；初始值 0% 0%。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  declare readonly backgroundPosition: group1.BackgroundPositionCss;
  /** CSS 属性 background-position-x；初始值 0%。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  declare readonly backgroundPositionX: group1.BackgroundPositionXCss;
  /** CSS 属性 background-position-y；初始值 0%。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  declare readonly backgroundPositionY: group1.BackgroundPositionYCss;
  /** CSS 属性 background-repeat；初始值 repeat。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  declare readonly backgroundRepeat: group1.BackgroundRepeatCss;
  /** CSS 属性 background-size；初始值 auto auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  declare readonly backgroundSize: group1.BackgroundSizeCss;
  /** CSS 属性 baseline-shift；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  declare readonly baselineShift: group1.BaselineShiftCss;
  /** CSS 属性 block-size；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  declare readonly blockSize: group1.BlockSizeCss;
  /** 边框简写（CSS border）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  declare readonly border: group1.BorderCss;
  /** CSS 属性 border-block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  declare readonly borderBlock: group1.BorderBlockCss;
  /** CSS 属性 border-block-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  declare readonly borderBlockColor: group1.BorderBlockColorCss;
  /** CSS 属性 border-block-end。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  declare readonly borderBlockEnd: group1.BorderBlockEndCss;
  /** CSS 属性 border-block-end-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  declare readonly borderBlockEndColor: group1.BorderBlockEndColorCss;
  /** CSS 属性 border-block-end-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  declare readonly borderBlockEndStyle: group1.BorderBlockEndStyleCss;
  /** CSS 属性 border-block-end-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  declare readonly borderBlockEndWidth: group1.BorderBlockEndWidthCss;
  /** CSS 属性 border-block-start。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  declare readonly borderBlockStart: group1.BorderBlockStartCss;
  /** CSS 属性 border-block-start-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  declare readonly borderBlockStartColor: group1.BorderBlockStartColorCss;
  /** CSS 属性 border-block-start-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  declare readonly borderBlockStartStyle: group1.BorderBlockStartStyleCss;
  /** CSS 属性 border-block-start-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  declare readonly borderBlockStartWidth: group1.BorderBlockStartWidthCss;
  /** CSS 属性 border-block-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  declare readonly borderBlockStyle: group1.BorderBlockStyleCss;
  /** CSS 属性 border-block-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  declare readonly borderBlockWidth: group1.BorderBlockWidthCss;
  /** CSS 属性 border-bottom。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  declare readonly borderBottom: group1.BorderBottomCss;
  /** CSS 属性 border-bottom-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  declare readonly borderBottomColor: group1.BorderBottomColorCss;
  /** CSS 属性 border-bottom-left-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  declare readonly borderBottomLeftRadius: group1.BorderBottomLeftRadiusCss;
  /** CSS 属性 border-bottom-right-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  declare readonly borderBottomRightRadius: group1.BorderBottomRightRadiusCss;
  /** CSS 属性 border-bottom-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  declare readonly borderBottomStyle: group1.BorderBottomStyleCss;
  /** CSS 属性 border-bottom-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  declare readonly borderBottomWidth: group1.BorderBottomWidthCss;
  /** CSS 属性 border-collapse；初始值 separate。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  declare readonly borderCollapse: group1.BorderCollapseCss;
  /** CSS 属性 border-color。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  declare readonly borderColor: group1.BorderColorCss;
  /** CSS 属性 border-end-end-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  declare readonly borderEndEndRadius: group1.BorderEndEndRadiusCss;
  /** CSS 属性 border-end-start-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  declare readonly borderEndStartRadius: group1.BorderEndStartRadiusCss;
  /** CSS 属性 border-image。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  declare readonly borderImage: group1.BorderImageCss;
  /** CSS 属性 border-image-outset；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  declare readonly borderImageOutset: group1.BorderImageOutsetCss;
  /** CSS 属性 border-image-repeat；初始值 stretch。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  declare readonly borderImageRepeat: group1.BorderImageRepeatCss;
  /** CSS 属性 border-image-slice；初始值 100%。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  declare readonly borderImageSlice: group1.BorderImageSliceCss;
  /** CSS 属性 border-image-source；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  declare readonly borderImageSource: group1.BorderImageSourceCss;
  /** CSS 属性 border-image-width；初始值 1。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  declare readonly borderImageWidth: group1.BorderImageWidthCss;
  /** CSS 属性 border-inline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  declare readonly borderInline: group1.BorderInlineCss;
  /** CSS 属性 border-inline-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  declare readonly borderInlineColor: group1.BorderInlineColorCss;
  /** CSS 属性 border-inline-end。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  declare readonly borderInlineEnd: group1.BorderInlineEndCss;
  /** CSS 属性 border-inline-end-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  declare readonly borderInlineEndColor: group1.BorderInlineEndColorCss;
  /** CSS 属性 border-inline-end-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  declare readonly borderInlineEndStyle: group1.BorderInlineEndStyleCss;
  /** CSS 属性 border-inline-end-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  declare readonly borderInlineEndWidth: group1.BorderInlineEndWidthCss;
  /** CSS 属性 border-inline-start。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  declare readonly borderInlineStart: group1.BorderInlineStartCss;
  /** CSS 属性 border-inline-start-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  declare readonly borderInlineStartColor: group1.BorderInlineStartColorCss;
  /** CSS 属性 border-inline-start-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  declare readonly borderInlineStartStyle: group1.BorderInlineStartStyleCss;
  /** CSS 属性 border-inline-start-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  declare readonly borderInlineStartWidth: group1.BorderInlineStartWidthCss;
  /** CSS 属性 border-inline-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  declare readonly borderInlineStyle: group1.BorderInlineStyleCss;
  /** CSS 属性 border-inline-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  declare readonly borderInlineWidth: group1.BorderInlineWidthCss;
  /** CSS 属性 border-left。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  declare readonly borderLeft: group1.BorderLeftCss;
  /** CSS 属性 border-left-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  declare readonly borderLeftColor: group1.BorderLeftColorCss;
  /** CSS 属性 border-left-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  declare readonly borderLeftStyle: group1.BorderLeftStyleCss;
  /** CSS 属性 border-left-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  declare readonly borderLeftWidth: group1.BorderLeftWidthCss;
  /** CSS 属性 border-radius。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  declare readonly borderRadius: group1.BorderRadiusCss;
  /** CSS 属性 border-right。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  declare readonly borderRight: group1.BorderRightCss;
  /** CSS 属性 border-right-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  declare readonly borderRightColor: group1.BorderRightColorCss;
  /** CSS 属性 border-right-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  declare readonly borderRightStyle: group1.BorderRightStyleCss;
  /** CSS 属性 border-right-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  declare readonly borderRightWidth: group1.BorderRightWidthCss;
  /** CSS 属性 border-spacing；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  declare readonly borderSpacing: group1.BorderSpacingCss;
  /** CSS 属性 border-start-end-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  declare readonly borderStartEndRadius: group1.BorderStartEndRadiusCss;
  /** CSS 属性 border-start-start-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  declare readonly borderStartStartRadius: group1.BorderStartStartRadiusCss;
  /** CSS 属性 border-style。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  declare readonly borderStyle: group1.BorderStyleCss;
  /** CSS 属性 border-top。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  declare readonly borderTop: group1.BorderTopCss;
  /** CSS 属性 border-top-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  declare readonly borderTopColor: group1.BorderTopColorCss;
  /** CSS 属性 border-top-left-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  declare readonly borderTopLeftRadius: group1.BorderTopLeftRadiusCss;
  /** CSS 属性 border-top-right-radius；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  declare readonly borderTopRightRadius: group1.BorderTopRightRadiusCss;
  /** CSS 属性 border-top-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  declare readonly borderTopStyle: group1.BorderTopStyleCss;
  /** CSS 属性 border-top-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  declare readonly borderTopWidth: group1.BorderTopWidthCss;
  /** CSS 属性 border-width。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  declare readonly borderWidth: group1.BorderWidthCss;
  /** CSS 属性 bottom；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  declare readonly bottom: group1.BottomCss;
  /** CSS 属性 box-decoration-break；初始值 slice。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  declare readonly boxDecorationBreak: group1.BoxDecorationBreakCss;
  /** CSS 属性 box-shadow；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  declare readonly boxShadow: group1.BoxShadowCss;
  /** CSS 属性 box-sizing；初始值 content-box。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  declare readonly boxSizing: group1.BoxSizingCss;
  /** CSS 属性 break-after；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  declare readonly breakAfter: group1.BreakAfterCss;
  /** CSS 属性 break-before；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  declare readonly breakBefore: group1.BreakBeforeCss;
  /** CSS 属性 break-inside；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  declare readonly breakInside: group1.BreakInsideCss;
  /** CSS 属性 caption-side；初始值 top。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  declare readonly captionSide: group2.CaptionSideCss;
  /** CSS 属性 caret。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  declare readonly caret: group2.CaretCss;
  /** CSS 属性 caret-color；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  declare readonly caretColor: group2.CaretColorCss;
  /** CSS 属性 caret-shape；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  declare readonly caretShape: group2.CaretShapeCss;
  /** CSS 属性 clear；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  declare readonly clear: group2.ClearCss;
  /** CSS 属性 clip。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  declare readonly clip: group2.ClipCss;
  /** CSS 属性 clip-path；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  declare readonly clipPath: group2.ClipPathCss;
  /** CSS 属性 clip-rule；初始值 nonzero。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  declare readonly clipRule: group2.ClipRuleCss;
  /** 文本前景色（CSS color）；初始值 canvastext。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  declare readonly color: group2.ColorCss;
  /** CSS 属性 color-adjust；初始值 economy。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  declare readonly colorAdjust: group2.ColorAdjustCss;
  /** CSS 属性 color-interpolation。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  declare readonly colorInterpolation: group2.ColorInterpolationCss;
  /** CSS 属性 color-interpolation-filters；初始值 linearRGB。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  declare readonly colorInterpolationFilters: group2.ColorInterpolationFiltersCss;
  /** CSS 属性 color-rendering。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  declare readonly colorRendering: group2.ColorRenderingCss;
  /** CSS 属性 color-scheme；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  declare readonly colorScheme: group2.ColorSchemeCss;
  /** CSS 属性 column-count；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  declare readonly columnCount: group2.ColumnCountCss;
  /** CSS 属性 column-fill；初始值 balance。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  declare readonly columnFill: group2.ColumnFillCss;
  /** CSS 属性 column-gap；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  declare readonly columnGap: group2.ColumnGapCss;
  /** CSS 属性 column-rule。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  declare readonly columnRule: group2.ColumnRuleCss;
  /** CSS 属性 column-rule-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  declare readonly columnRuleColor: group2.ColumnRuleColorCss;
  /** CSS 属性 column-rule-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  declare readonly columnRuleStyle: group2.ColumnRuleStyleCss;
  /** CSS 属性 column-rule-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  declare readonly columnRuleWidth: group2.ColumnRuleWidthCss;
  /** CSS 属性 column-span；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  declare readonly columnSpan: group2.ColumnSpanCss;
  /** CSS 属性 column-width；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  declare readonly columnWidth: group2.ColumnWidthCss;
  /** CSS 属性 columns。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  declare readonly columns: group2.ColumnsCss;
  /** CSS 属性 contain；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  declare readonly contain: group2.ContainCss;
  /** CSS 属性 contain-intrinsic-block-size；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  declare readonly containIntrinsicBlockSize: group2.ContainIntrinsicBlockSizeCss;
  /** CSS 属性 contain-intrinsic-height；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  declare readonly containIntrinsicHeight: group2.ContainIntrinsicHeightCss;
  /** CSS 属性 contain-intrinsic-inline-size；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  declare readonly containIntrinsicInlineSize: group2.ContainIntrinsicInlineSizeCss;
  /** CSS 属性 contain-intrinsic-size。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  declare readonly containIntrinsicSize: group2.ContainIntrinsicSizeCss;
  /** CSS 属性 contain-intrinsic-width；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  declare readonly containIntrinsicWidth: group2.ContainIntrinsicWidthCss;
  /** CSS 属性 container。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  declare readonly container: group2.ContainerCss;
  /** CSS 属性 container-name；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  declare readonly containerName: group2.ContainerNameCss;
  /** CSS 属性 container-type；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  declare readonly containerType: group2.ContainerTypeCss;
  /** CSS 属性 content；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  declare readonly content: group2.ContentCss;
  /** CSS 属性 content-visibility；初始值 visible。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  declare readonly contentVisibility: group2.ContentVisibilityCss;
  /** CSS 属性 counter-increment；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  declare readonly counterIncrement: group2.CounterIncrementCss;
  /** CSS 属性 counter-reset；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  declare readonly counterReset: group2.CounterResetCss;
  /** CSS 属性 counter-set；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  declare readonly counterSet: group2.CounterSetCss;
  /** CSS 属性 cursor；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  declare readonly cursor: group2.CursorCss;
  /** CSS 属性 cx；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  declare readonly cx: group2.CxCss;
  /** CSS 属性 cy；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  declare readonly cy: group2.CyCss;
  /** CSS 属性 d；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  declare readonly d: group2.DCss;
  /** CSS 属性 direction；初始值 ltr。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  declare readonly direction: group2.DirectionCss;
  /** 显示类型（CSS display）；初始值 inline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  declare readonly display: group2.DisplayCss;
  /** CSS 属性 dominant-baseline；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  declare readonly dominantBaseline: group2.DominantBaselineCss;
  /** CSS 属性 empty-cells；初始值 show。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  declare readonly emptyCells: group2.EmptyCellsCss;
  /** CSS 属性 field-sizing；初始值 fixed。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  declare readonly fieldSizing: group2.FieldSizingCss;
  /** CSS 属性 fill；初始值 black。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  declare readonly fill: group2.FillCss;
  /** CSS 属性 fill-opacity；初始值 1。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  declare readonly fillOpacity: group2.FillOpacityCss;
  /** CSS 属性 fill-rule；初始值 nonzero。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  declare readonly fillRule: group2.FillRuleCss;
  /** CSS 属性 filter；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  declare readonly filter: group2.FilterCss;
  /** CSS 属性 flex。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  declare readonly flex: group2.FlexCss;
  /** CSS 属性 flex-basis；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  declare readonly flexBasis: group2.FlexBasisCss;
  /** CSS 属性 flex-direction；初始值 row。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  declare readonly flexDirection: group2.FlexDirectionCss;
  /** CSS 属性 flex-flow。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  declare readonly flexFlow: group2.FlexFlowCss;
  /** CSS 属性 flex-grow；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  declare readonly flexGrow: group2.FlexGrowCss;
  /** CSS 属性 flex-shrink；初始值 1。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  declare readonly flexShrink: group2.FlexShrinkCss;
  /** CSS 属性 flex-wrap；初始值 nowrap。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  declare readonly flexWrap: group2.FlexWrapCss;
  /** CSS 属性 float；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  declare readonly float: group2.FloatCss;
  /** CSS 属性 flood-color；初始值 black。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  declare readonly floodColor: group2.FloodColorCss;
  /** CSS 属性 flood-opacity；初始值 black。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  declare readonly floodOpacity: group2.FloodOpacityCss;
  /** CSS 属性 font。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  declare readonly font: group2.FontCss;
  /** CSS 属性 font-family。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  declare readonly fontFamily: group2.FontFamilyCss;
  /** CSS 属性 font-feature-settings；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  declare readonly fontFeatureSettings: group2.FontFeatureSettingsCss;
  /** CSS 属性 font-kerning；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  declare readonly fontKerning: group2.FontKerningCss;
  /** CSS 属性 font-language-override；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  declare readonly fontLanguageOverride: group2.FontLanguageOverrideCss;
  /** CSS 属性 font-optical-sizing；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  declare readonly fontOpticalSizing: group2.FontOpticalSizingCss;
  /** CSS 属性 font-palette；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  declare readonly fontPalette: group2.FontPaletteCss;
  /** CSS 属性 font-size；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  declare readonly fontSize: group2.FontSizeCss;
  /** CSS 属性 font-size-adjust；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  declare readonly fontSizeAdjust: group2.FontSizeAdjustCss;
  /** CSS 属性 font-smooth；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  declare readonly fontSmooth: group2.FontSmoothCss;
  /** CSS 属性 font-stretch。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  declare readonly fontStretch: group2.FontStretchCss;
  /** CSS 属性 font-style；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  declare readonly fontStyle: group2.FontStyleCss;
  /** CSS 属性 font-synthesis；初始值 weight style small-caps position 。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  declare readonly fontSynthesis: group2.FontSynthesisCss;
  /** CSS 属性 font-synthesis-position；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  declare readonly fontSynthesisPosition: group2.FontSynthesisPositionCss;
  /** CSS 属性 font-synthesis-small-caps；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  declare readonly fontSynthesisSmallCaps: group2.FontSynthesisSmallCapsCss;
  /** CSS 属性 font-synthesis-style；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  declare readonly fontSynthesisStyle: group2.FontSynthesisStyleCss;
  /** CSS 属性 font-synthesis-weight；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  declare readonly fontSynthesisWeight: group2.FontSynthesisWeightCss;
  /** CSS 属性 font-variant；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  declare readonly fontVariant: group2.FontVariantCss;
  /** CSS 属性 font-variant-alternates；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  declare readonly fontVariantAlternates: group2.FontVariantAlternatesCss;
  /** CSS 属性 font-variant-caps；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  declare readonly fontVariantCaps: group2.FontVariantCapsCss;
  /** CSS 属性 font-variant-east-asian；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  declare readonly fontVariantEastAsian: group2.FontVariantEastAsianCss;
  /** CSS 属性 font-variant-emoji；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  declare readonly fontVariantEmoji: group2.FontVariantEmojiCss;
  /** CSS 属性 font-variant-ligatures；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  declare readonly fontVariantLigatures: group2.FontVariantLigaturesCss;
  /** CSS 属性 font-variant-numeric；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  declare readonly fontVariantNumeric: group2.FontVariantNumericCss;
  /** CSS 属性 font-variant-position；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  declare readonly fontVariantPosition: group2.FontVariantPositionCss;
  /** CSS 属性 font-variation-settings；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  declare readonly fontVariationSettings: group2.FontVariationSettingsCss;
  /** CSS 属性 font-weight；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  declare readonly fontWeight: group2.FontWeightCss;
  /** CSS 属性 font-width；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  declare readonly fontWidth: group2.FontWidthCss;
  /** CSS 属性 forced-color-adjust；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  declare readonly forcedColorAdjust: group2.ForcedColorAdjustCss;
  /** 行列间距（CSS gap）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  declare readonly gap: group3.GapCss;
  /** CSS 属性 glyph-orientation-vertical。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  declare readonly glyphOrientationVertical: group3.GlyphOrientationVerticalCss;
  /** CSS 属性 grid。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  declare readonly grid: group3.GridCss;
  /** CSS 属性 grid-area。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  declare readonly gridArea: group3.GridAreaCss;
  /** CSS 属性 grid-auto-columns；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  declare readonly gridAutoColumns: group3.GridAutoColumnsCss;
  /** CSS 属性 grid-auto-flow；初始值 row。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  declare readonly gridAutoFlow: group3.GridAutoFlowCss;
  /** CSS 属性 grid-auto-rows；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  declare readonly gridAutoRows: group3.GridAutoRowsCss;
  /** CSS 属性 grid-column。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  declare readonly gridColumn: group3.GridColumnCss;
  /** CSS 属性 grid-column-end；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  declare readonly gridColumnEnd: group3.GridColumnEndCss;
  /** CSS 属性 grid-column-start；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  declare readonly gridColumnStart: group3.GridColumnStartCss;
  /** CSS 属性 grid-row。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  declare readonly gridRow: group3.GridRowCss;
  /** CSS 属性 grid-row-end；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  declare readonly gridRowEnd: group3.GridRowEndCss;
  /** CSS 属性 grid-row-start；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  declare readonly gridRowStart: group3.GridRowStartCss;
  /** CSS 属性 grid-template。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  declare readonly gridTemplate: group3.GridTemplateCss;
  /** CSS 属性 grid-template-areas；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  declare readonly gridTemplateAreas: group3.GridTemplateAreasCss;
  /** CSS 属性 grid-template-columns；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  declare readonly gridTemplateColumns: group3.GridTemplateColumnsCss;
  /** CSS 属性 grid-template-rows；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  declare readonly gridTemplateRows: group3.GridTemplateRowsCss;
  /** CSS 属性 hanging-punctuation；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  declare readonly hangingPunctuation: group3.HangingPunctuationCss;
  /** 高度（CSS height）；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  declare readonly height: group3.HeightCss;
  /** CSS 属性 hyphenate-character；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  declare readonly hyphenateCharacter: group3.HyphenateCharacterCss;
  /** CSS 属性 hyphenate-limit-chars；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  declare readonly hyphenateLimitChars: group3.HyphenateLimitCharsCss;
  /** CSS 属性 hyphens；初始值 manual。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  declare readonly hyphens: group3.HyphensCss;
  /** CSS 属性 image-orientation；初始值 from-image。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  declare readonly imageOrientation: group3.ImageOrientationCss;
  /** CSS 属性 image-rendering；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  declare readonly imageRendering: group3.ImageRenderingCss;
  /** CSS 属性 image-resolution；初始值 1dppx。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  declare readonly imageResolution: group3.ImageResolutionCss;
  /** CSS 属性 initial-letter；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  declare readonly initialLetter: group3.InitialLetterCss;
  /** CSS 属性 initial-letter-align；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  declare readonly initialLetterAlign: group3.InitialLetterAlignCss;
  /** CSS 属性 inline-size；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  declare readonly inlineSize: group3.InlineSizeCss;
  /** CSS 属性 inset。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  declare readonly inset: group3.InsetCss;
  /** CSS 属性 inset-block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  declare readonly insetBlock: group3.InsetBlockCss;
  /** CSS 属性 inset-block-end；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  declare readonly insetBlockEnd: group3.InsetBlockEndCss;
  /** CSS 属性 inset-block-start；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  declare readonly insetBlockStart: group3.InsetBlockStartCss;
  /** CSS 属性 inset-inline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  declare readonly insetInline: group3.InsetInlineCss;
  /** CSS 属性 inset-inline-end；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  declare readonly insetInlineEnd: group3.InsetInlineEndCss;
  /** CSS 属性 inset-inline-start；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  declare readonly insetInlineStart: group3.InsetInlineStartCss;
  /** CSS 属性 interpolate-size；初始值 numeric-only。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  declare readonly interpolateSize: group3.InterpolateSizeCss;
  /** CSS 属性 isolation；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  declare readonly isolation: group3.IsolationCss;
  /** CSS 属性 justify-content；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  declare readonly justifyContent: group3.JustifyContentCss;
  /** CSS 属性 justify-items；初始值 legacy。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  declare readonly justifyItems: group3.JustifyItemsCss;
  /** CSS 属性 justify-self；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  declare readonly justifySelf: group3.JustifySelfCss;
  /** CSS 属性 justify-tracks；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  declare readonly justifyTracks: group3.JustifyTracksCss;
  /** CSS 属性 left；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  declare readonly left: group3.LeftCss;
  /** CSS 属性 letter-spacing；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  declare readonly letterSpacing: group3.LetterSpacingCss;
  /** CSS 属性 lighting-color；初始值 white。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  declare readonly lightingColor: group3.LightingColorCss;
  /** CSS 属性 line-break；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  declare readonly lineBreak: group3.LineBreakCss;
  /** CSS 属性 line-clamp；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  declare readonly lineClamp: group3.LineClampCss;
  /** CSS 属性 line-height；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  declare readonly lineHeight: group3.LineHeightCss;
  /** CSS 属性 line-height-step；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  declare readonly lineHeightStep: group3.LineHeightStepCss;
  /** CSS 属性 list-style。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  declare readonly listStyle: group3.ListStyleCss;
  /** CSS 属性 list-style-image；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  declare readonly listStyleImage: group3.ListStyleImageCss;
  /** CSS 属性 list-style-position；初始值 outside。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  declare readonly listStylePosition: group3.ListStylePositionCss;
  /** CSS 属性 list-style-type；初始值 disc。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  declare readonly listStyleType: group3.ListStyleTypeCss;
  /** 外边距（CSS margin）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  declare readonly margin: group4.MarginCss;
  /** CSS 属性 margin-block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  declare readonly marginBlock: group4.MarginBlockCss;
  /** CSS 属性 margin-block-end；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  declare readonly marginBlockEnd: group4.MarginBlockEndCss;
  /** CSS 属性 margin-block-start；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  declare readonly marginBlockStart: group4.MarginBlockStartCss;
  /** CSS 属性 margin-bottom；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  declare readonly marginBottom: group4.MarginBottomCss;
  /** CSS 属性 margin-inline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  declare readonly marginInline: group4.MarginInlineCss;
  /** CSS 属性 margin-inline-end；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  declare readonly marginInlineEnd: group4.MarginInlineEndCss;
  /** CSS 属性 margin-inline-start；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  declare readonly marginInlineStart: group4.MarginInlineStartCss;
  /** CSS 属性 margin-left；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  declare readonly marginLeft: group4.MarginLeftCss;
  /** CSS 属性 margin-right；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  declare readonly marginRight: group4.MarginRightCss;
  /** CSS 属性 margin-top；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  declare readonly marginTop: group4.MarginTopCss;
  /** CSS 属性 margin-trim；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  declare readonly marginTrim: group4.MarginTrimCss;
  /** CSS 属性 marker。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  declare readonly marker: group4.MarkerCss;
  /** CSS 属性 marker-end；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  declare readonly markerEnd: group4.MarkerEndCss;
  /** CSS 属性 marker-mid；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  declare readonly markerMid: group4.MarkerMidCss;
  /** CSS 属性 marker-start；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  declare readonly markerStart: group4.MarkerStartCss;
  /** CSS 属性 mask。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  declare readonly mask: group4.MaskCss;
  /** CSS 属性 mask-border。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  declare readonly maskBorder: group4.MaskBorderCss;
  /** CSS 属性 mask-border-mode；初始值 alpha。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  declare readonly maskBorderMode: group4.MaskBorderModeCss;
  /** CSS 属性 mask-border-outset；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  declare readonly maskBorderOutset: group4.MaskBorderOutsetCss;
  /** CSS 属性 mask-border-repeat；初始值 stretch。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  declare readonly maskBorderRepeat: group4.MaskBorderRepeatCss;
  /** CSS 属性 mask-border-slice；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  declare readonly maskBorderSlice: group4.MaskBorderSliceCss;
  /** CSS 属性 mask-border-source；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  declare readonly maskBorderSource: group4.MaskBorderSourceCss;
  /** CSS 属性 mask-border-width；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  declare readonly maskBorderWidth: group4.MaskBorderWidthCss;
  /** CSS 属性 mask-clip；初始值 border-box。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  declare readonly maskClip: group4.MaskClipCss;
  /** CSS 属性 mask-composite；初始值 add。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  declare readonly maskComposite: group4.MaskCompositeCss;
  /** CSS 属性 mask-image；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  declare readonly maskImage: group4.MaskImageCss;
  /** CSS 属性 mask-mode；初始值 match-source。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  declare readonly maskMode: group4.MaskModeCss;
  /** CSS 属性 mask-origin；初始值 border-box。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  declare readonly maskOrigin: group4.MaskOriginCss;
  /** CSS 属性 mask-position；初始值 0% 0%。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  declare readonly maskPosition: group4.MaskPositionCss;
  /** CSS 属性 mask-repeat；初始值 repeat。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  declare readonly maskRepeat: group4.MaskRepeatCss;
  /** CSS 属性 mask-size；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  declare readonly maskSize: group4.MaskSizeCss;
  /** CSS 属性 mask-type；初始值 luminance。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  declare readonly maskType: group4.MaskTypeCss;
  /** CSS 属性 masonry-auto-flow；初始值 pack。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  declare readonly masonryAutoFlow: group4.MasonryAutoFlowCss;
  /** CSS 属性 math-depth；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  declare readonly mathDepth: group4.MathDepthCss;
  /** CSS 属性 math-shift；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  declare readonly mathShift: group4.MathShiftCss;
  /** CSS 属性 math-style；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  declare readonly mathStyle: group4.MathStyleCss;
  /** CSS 属性 max-block-size；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  declare readonly maxBlockSize: group4.MaxBlockSizeCss;
  /** CSS 属性 max-height；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  declare readonly maxHeight: group4.MaxHeightCss;
  /** CSS 属性 max-inline-size；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  declare readonly maxInlineSize: group4.MaxInlineSizeCss;
  /** CSS 属性 max-lines；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  declare readonly maxLines: group4.MaxLinesCss;
  /** CSS 属性 max-width；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  declare readonly maxWidth: group4.MaxWidthCss;
  /** CSS 属性 min-block-size；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  declare readonly minBlockSize: group4.MinBlockSizeCss;
  /** CSS 属性 min-height；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  declare readonly minHeight: group4.MinHeightCss;
  /** CSS 属性 min-inline-size；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  declare readonly minInlineSize: group4.MinInlineSizeCss;
  /** CSS 属性 min-width；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  declare readonly minWidth: group4.MinWidthCss;
  /** CSS 属性 mix-blend-mode；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  declare readonly mixBlendMode: group4.MixBlendModeCss;
  /** CSS 属性 motion。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  declare readonly motion: group4.MotionCss;
  /** CSS 属性 motion-distance；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  declare readonly motionDistance: group4.MotionDistanceCss;
  /** CSS 属性 motion-path；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  declare readonly motionPath: group4.MotionPathCss;
  /** CSS 属性 motion-rotation；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  declare readonly motionRotation: group4.MotionRotationCss;
  /** CSS 属性 object-fit；初始值 fill。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  declare readonly objectFit: group4.ObjectFitCss;
  /** CSS 属性 object-position；初始值 50% 50%。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  declare readonly objectPosition: group4.ObjectPositionCss;
  /** CSS 属性 object-view-box；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  declare readonly objectViewBox: group4.ObjectViewBoxCss;
  /** CSS 属性 offset。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  declare readonly offset: group4.OffsetCss;
  /** CSS 属性 offset-anchor；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  declare readonly offsetAnchor: group4.OffsetAnchorCss;
  /** CSS 属性 offset-distance；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  declare readonly offsetDistance: group4.OffsetDistanceCss;
  /** CSS 属性 offset-path；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  declare readonly offsetPath: group4.OffsetPathCss;
  /** CSS 属性 offset-position；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  declare readonly offsetPosition: group4.OffsetPositionCss;
  /** CSS 属性 offset-rotate；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  declare readonly offsetRotate: group4.OffsetRotateCss;
  /** CSS 属性 offset-rotation；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  declare readonly offsetRotation: group4.OffsetRotationCss;
  /** 不透明度（CSS opacity）；初始值 1。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  declare readonly opacity: group4.OpacityCss;
  /** CSS 属性 order；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  declare readonly order: group4.OrderCss;
  /** CSS 属性 orphans；初始值 2。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  declare readonly orphans: group4.OrphansCss;
  /** CSS 属性 outline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  declare readonly outline: group4.OutlineCss;
  /** CSS 属性 outline-color；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  declare readonly outlineColor: group4.OutlineColorCss;
  /** CSS 属性 outline-offset；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  declare readonly outlineOffset: group4.OutlineOffsetCss;
  /** CSS 属性 outline-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  declare readonly outlineStyle: group4.OutlineStyleCss;
  /** CSS 属性 outline-width；初始值 medium。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  declare readonly outlineWidth: group4.OutlineWidthCss;
  /** CSS 属性 overflow；初始值 visible。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  declare readonly overflow: group4.OverflowCss;
  /** CSS 属性 overflow-anchor；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  declare readonly overflowAnchor: group4.OverflowAnchorCss;
  /** CSS 属性 overflow-block；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  declare readonly overflowBlock: group4.OverflowBlockCss;
  /** CSS 属性 overflow-clip-box；初始值 padding-box。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  declare readonly overflowClipBox: group4.OverflowClipBoxCss;
  /** CSS 属性 overflow-clip-margin；初始值 0px。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  declare readonly overflowClipMargin: group4.OverflowClipMarginCss;
  /** CSS 属性 overflow-inline；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  declare readonly overflowInline: group4.OverflowInlineCss;
  /** CSS 属性 overflow-wrap；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  declare readonly overflowWrap: group4.OverflowWrapCss;
  /** CSS 属性 overflow-x；初始值 visible。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  declare readonly overflowX: group4.OverflowXCss;
  /** CSS 属性 overflow-y；初始值 visible。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  declare readonly overflowY: group4.OverflowYCss;
  /** CSS 属性 overlay；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  declare readonly overlay: group4.OverlayCss;
  /** CSS 属性 overscroll-behavior；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  declare readonly overscrollBehavior: group4.OverscrollBehaviorCss;
  /** CSS 属性 overscroll-behavior-block；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  declare readonly overscrollBehaviorBlock: group4.OverscrollBehaviorBlockCss;
  /** CSS 属性 overscroll-behavior-inline；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  declare readonly overscrollBehaviorInline: group4.OverscrollBehaviorInlineCss;
  /** CSS 属性 overscroll-behavior-x；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  declare readonly overscrollBehaviorX: group4.OverscrollBehaviorXCss;
  /** CSS 属性 overscroll-behavior-y；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  declare readonly overscrollBehaviorY: group4.OverscrollBehaviorYCss;
  /** 内边距（CSS padding）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  declare readonly padding: group5.PaddingCss;
  /** CSS 属性 padding-block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  declare readonly paddingBlock: group5.PaddingBlockCss;
  /** CSS 属性 padding-block-end；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  declare readonly paddingBlockEnd: group5.PaddingBlockEndCss;
  /** CSS 属性 padding-block-start；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  declare readonly paddingBlockStart: group5.PaddingBlockStartCss;
  /** CSS 属性 padding-bottom；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  declare readonly paddingBottom: group5.PaddingBottomCss;
  /** CSS 属性 padding-inline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  declare readonly paddingInline: group5.PaddingInlineCss;
  /** CSS 属性 padding-inline-end；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  declare readonly paddingInlineEnd: group5.PaddingInlineEndCss;
  /** CSS 属性 padding-inline-start；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  declare readonly paddingInlineStart: group5.PaddingInlineStartCss;
  /** CSS 属性 padding-left；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  declare readonly paddingLeft: group5.PaddingLeftCss;
  /** CSS 属性 padding-right；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  declare readonly paddingRight: group5.PaddingRightCss;
  /** CSS 属性 padding-top；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  declare readonly paddingTop: group5.PaddingTopCss;
  /** CSS 属性 page；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  declare readonly page: group5.PageCss;
  /** CSS 属性 paint-order；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  declare readonly paintOrder: group5.PaintOrderCss;
  /** CSS 属性 perspective；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  declare readonly perspective: group5.PerspectiveCss;
  /** CSS 属性 perspective-origin；初始值 50% 50%。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  declare readonly perspectiveOrigin: group5.PerspectiveOriginCss;
  /** CSS 属性 place-content。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  declare readonly placeContent: group5.PlaceContentCss;
  /** CSS 属性 place-items。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  declare readonly placeItems: group5.PlaceItemsCss;
  /** CSS 属性 place-self。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  declare readonly placeSelf: group5.PlaceSelfCss;
  /** CSS 属性 pointer-events；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  declare readonly pointerEvents: group5.PointerEventsCss;
  /** CSS 属性 position；初始值 static。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  declare readonly position: group5.PositionCss;
  /** CSS 属性 position-anchor；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  declare readonly positionAnchor: group5.PositionAnchorCss;
  /** CSS 属性 position-area；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  declare readonly positionArea: group5.PositionAreaCss;
  /** CSS 属性 position-try。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  declare readonly positionTry: group5.PositionTryCss;
  /** CSS 属性 position-try-fallbacks；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  declare readonly positionTryFallbacks: group5.PositionTryFallbacksCss;
  /** CSS 属性 position-try-order；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  declare readonly positionTryOrder: group5.PositionTryOrderCss;
  /** CSS 属性 position-visibility；初始值 anchors-visible。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  declare readonly positionVisibility: group5.PositionVisibilityCss;
  /** CSS 属性 print-color-adjust；初始值 economy。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  declare readonly printColorAdjust: group5.PrintColorAdjustCss;
  /** CSS 属性 quotes。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  declare readonly quotes: group5.QuotesCss;
  /** CSS 属性 r；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  declare readonly r: group5.RCss;
  /** CSS 属性 resize；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  declare readonly resize: group5.ResizeCss;
  /** CSS 属性 right；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  declare readonly right: group5.RightCss;
  /** CSS 属性 rotate；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  declare readonly rotate: group5.RotateCss;
  /** CSS 属性 row-gap；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  declare readonly rowGap: group5.RowGapCss;
  /** CSS 属性 ruby-align；初始值 space-around。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  declare readonly rubyAlign: group5.RubyAlignCss;
  /** CSS 属性 ruby-merge；初始值 separate。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  declare readonly rubyMerge: group5.RubyMergeCss;
  /** CSS 属性 ruby-overhang；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  declare readonly rubyOverhang: group5.RubyOverhangCss;
  /** CSS 属性 ruby-position；初始值 alternate。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  declare readonly rubyPosition: group5.RubyPositionCss;
  /** CSS 属性 rx；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  declare readonly rx: group5.RxCss;
  /** CSS 属性 ry；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  declare readonly ry: group5.RyCss;
  /** CSS 属性 scale；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  declare readonly scale: group6.ScaleCss;
  /** CSS 属性 scroll-behavior；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  declare readonly scrollBehavior: group6.ScrollBehaviorCss;
  /** CSS 属性 scroll-initial-target；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  declare readonly scrollInitialTarget: group6.ScrollInitialTargetCss;
  /** CSS 属性 scroll-margin。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  declare readonly scrollMargin: group6.ScrollMarginCss;
  /** CSS 属性 scroll-margin-block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  declare readonly scrollMarginBlock: group6.ScrollMarginBlockCss;
  /** CSS 属性 scroll-margin-block-end；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  declare readonly scrollMarginBlockEnd: group6.ScrollMarginBlockEndCss;
  /** CSS 属性 scroll-margin-block-start；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  declare readonly scrollMarginBlockStart: group6.ScrollMarginBlockStartCss;
  /** CSS 属性 scroll-margin-bottom；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  declare readonly scrollMarginBottom: group6.ScrollMarginBottomCss;
  /** CSS 属性 scroll-margin-inline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  declare readonly scrollMarginInline: group6.ScrollMarginInlineCss;
  /** CSS 属性 scroll-margin-inline-end；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  declare readonly scrollMarginInlineEnd: group6.ScrollMarginInlineEndCss;
  /** CSS 属性 scroll-margin-inline-start；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  declare readonly scrollMarginInlineStart: group6.ScrollMarginInlineStartCss;
  /** CSS 属性 scroll-margin-left；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  declare readonly scrollMarginLeft: group6.ScrollMarginLeftCss;
  /** CSS 属性 scroll-margin-right；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  declare readonly scrollMarginRight: group6.ScrollMarginRightCss;
  /** CSS 属性 scroll-margin-top；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  declare readonly scrollMarginTop: group6.ScrollMarginTopCss;
  /** CSS 属性 scroll-padding。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  declare readonly scrollPadding: group6.ScrollPaddingCss;
  /** CSS 属性 scroll-padding-block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  declare readonly scrollPaddingBlock: group6.ScrollPaddingBlockCss;
  /** CSS 属性 scroll-padding-block-end；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  declare readonly scrollPaddingBlockEnd: group6.ScrollPaddingBlockEndCss;
  /** CSS 属性 scroll-padding-block-start；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  declare readonly scrollPaddingBlockStart: group6.ScrollPaddingBlockStartCss;
  /** CSS 属性 scroll-padding-bottom；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  declare readonly scrollPaddingBottom: group6.ScrollPaddingBottomCss;
  /** CSS 属性 scroll-padding-inline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  declare readonly scrollPaddingInline: group6.ScrollPaddingInlineCss;
  /** CSS 属性 scroll-padding-inline-end；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  declare readonly scrollPaddingInlineEnd: group6.ScrollPaddingInlineEndCss;
  /** CSS 属性 scroll-padding-inline-start；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  declare readonly scrollPaddingInlineStart: group6.ScrollPaddingInlineStartCss;
  /** CSS 属性 scroll-padding-left；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  declare readonly scrollPaddingLeft: group6.ScrollPaddingLeftCss;
  /** CSS 属性 scroll-padding-right；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  declare readonly scrollPaddingRight: group6.ScrollPaddingRightCss;
  /** CSS 属性 scroll-padding-top；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  declare readonly scrollPaddingTop: group6.ScrollPaddingTopCss;
  /** CSS 属性 scroll-snap-align；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  declare readonly scrollSnapAlign: group6.ScrollSnapAlignCss;
  /** CSS 属性 scroll-snap-margin。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  declare readonly scrollSnapMargin: group6.ScrollSnapMarginCss;
  /** CSS 属性 scroll-snap-margin-bottom；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  declare readonly scrollSnapMarginBottom: group6.ScrollSnapMarginBottomCss;
  /** CSS 属性 scroll-snap-margin-left；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  declare readonly scrollSnapMarginLeft: group6.ScrollSnapMarginLeftCss;
  /** CSS 属性 scroll-snap-margin-right；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  declare readonly scrollSnapMarginRight: group6.ScrollSnapMarginRightCss;
  /** CSS 属性 scroll-snap-margin-top；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  declare readonly scrollSnapMarginTop: group6.ScrollSnapMarginTopCss;
  /** CSS 属性 scroll-snap-stop；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  declare readonly scrollSnapStop: group6.ScrollSnapStopCss;
  /** CSS 属性 scroll-snap-type；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  declare readonly scrollSnapType: group6.ScrollSnapTypeCss;
  /** CSS 属性 scroll-timeline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  declare readonly scrollTimeline: group6.ScrollTimelineCss;
  /** CSS 属性 scroll-timeline-axis；初始值 block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  declare readonly scrollTimelineAxis: group6.ScrollTimelineAxisCss;
  /** CSS 属性 scroll-timeline-name；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  declare readonly scrollTimelineName: group6.ScrollTimelineNameCss;
  /** CSS 属性 scrollbar-color；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  declare readonly scrollbarColor: group6.ScrollbarColorCss;
  /** CSS 属性 scrollbar-gutter；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  declare readonly scrollbarGutter: group6.ScrollbarGutterCss;
  /** CSS 属性 scrollbar-width；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  declare readonly scrollbarWidth: group6.ScrollbarWidthCss;
  /** CSS 属性 shape-image-threshold；初始值 0.0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  declare readonly shapeImageThreshold: group6.ShapeImageThresholdCss;
  /** CSS 属性 shape-margin；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  declare readonly shapeMargin: group6.ShapeMarginCss;
  /** CSS 属性 shape-outside；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  declare readonly shapeOutside: group6.ShapeOutsideCss;
  /** CSS 属性 shape-rendering；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  declare readonly shapeRendering: group6.ShapeRenderingCss;
  /** CSS 属性 speak-as；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  declare readonly speakAs: group6.SpeakAsCss;
  /** CSS 属性 stop-color；初始值 black。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  declare readonly stopColor: group6.StopColorCss;
  /** CSS 属性 stop-opacity；初始值 black。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  declare readonly stopOpacity: group6.StopOpacityCss;
  /** CSS 属性 stroke。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  declare readonly stroke: group6.StrokeCss;
  /** CSS 属性 stroke-color；初始值 transparent。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  declare readonly strokeColor: group6.StrokeColorCss;
  /** CSS 属性 stroke-dasharray；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  declare readonly strokeDasharray: group6.StrokeDasharrayCss;
  /** CSS 属性 stroke-dashoffset；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  declare readonly strokeDashoffset: group6.StrokeDashoffsetCss;
  /** CSS 属性 stroke-linecap；初始值 butt。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  declare readonly strokeLinecap: group6.StrokeLinecapCss;
  /** CSS 属性 stroke-linejoin；初始值 miter。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  declare readonly strokeLinejoin: group6.StrokeLinejoinCss;
  /** CSS 属性 stroke-miterlimit；初始值 4。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  declare readonly strokeMiterlimit: group6.StrokeMiterlimitCss;
  /** CSS 属性 stroke-opacity；初始值 1。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  declare readonly strokeOpacity: group6.StrokeOpacityCss;
  /** CSS 属性 stroke-width；初始值 1px。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  declare readonly strokeWidth: group6.StrokeWidthCss;
  /** CSS 属性 tab-size；初始值 8。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  declare readonly tabSize: group6.TabSizeCss;
  /** CSS 属性 table-layout；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  declare readonly tableLayout: group6.TableLayoutCss;
  /** CSS 属性 text-align；初始值 start。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  declare readonly textAlign: group6.TextAlignCss;
  /** CSS 属性 text-align-last；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  declare readonly textAlignLast: group6.TextAlignLastCss;
  /** CSS 属性 text-anchor；初始值 start。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  declare readonly textAnchor: group6.TextAnchorCss;
  /** CSS 属性 text-autospace；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  declare readonly textAutospace: group6.TextAutospaceCss;
  /** CSS 属性 text-box；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  declare readonly textBox: group6.TextBoxCss;
  /** CSS 属性 text-box-edge；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  declare readonly textBoxEdge: group6.TextBoxEdgeCss;
  /** CSS 属性 text-box-trim；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  declare readonly textBoxTrim: group6.TextBoxTrimCss;
  /** CSS 属性 text-combine-upright；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  declare readonly textCombineUpright: group6.TextCombineUprightCss;
  /** CSS 属性 text-decoration。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  declare readonly textDecoration: group6.TextDecorationCss;
  /** CSS 属性 text-decoration-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  declare readonly textDecorationColor: group6.TextDecorationColorCss;
  /** CSS 属性 text-decoration-line；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  declare readonly textDecorationLine: group6.TextDecorationLineCss;
  /** CSS 属性 text-decoration-skip；初始值 objects。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  declare readonly textDecorationSkip: group6.TextDecorationSkipCss;
  /** CSS 属性 text-decoration-skip-ink；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  declare readonly textDecorationSkipInk: group6.TextDecorationSkipInkCss;
  /** CSS 属性 text-decoration-style；初始值 solid。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  declare readonly textDecorationStyle: group6.TextDecorationStyleCss;
  /** CSS 属性 text-decoration-thickness；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  declare readonly textDecorationThickness: group6.TextDecorationThicknessCss;
  /** CSS 属性 text-emphasis。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  declare readonly textEmphasis: group6.TextEmphasisCss;
  /** CSS 属性 text-emphasis-color；初始值 currentcolor。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  declare readonly textEmphasisColor: group6.TextEmphasisColorCss;
  /** CSS 属性 text-emphasis-position；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  declare readonly textEmphasisPosition: group6.TextEmphasisPositionCss;
  /** CSS 属性 text-emphasis-style；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  declare readonly textEmphasisStyle: group6.TextEmphasisStyleCss;
  /** CSS 属性 text-indent；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  declare readonly textIndent: group6.TextIndentCss;
  /** CSS 属性 text-justify；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  declare readonly textJustify: group6.TextJustifyCss;
  /** CSS 属性 text-orientation；初始值 mixed。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  declare readonly textOrientation: group6.TextOrientationCss;
  /** CSS 属性 text-overflow；初始值 clip。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  declare readonly textOverflow: group6.TextOverflowCss;
  /** CSS 属性 text-rendering；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  declare readonly textRendering: group6.TextRenderingCss;
  /** CSS 属性 text-shadow；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  declare readonly textShadow: group6.TextShadowCss;
  /** CSS 属性 text-size-adjust；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  declare readonly textSizeAdjust: group6.TextSizeAdjustCss;
  /** CSS 属性 text-spacing-trim；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  declare readonly textSpacingTrim: group6.TextSpacingTrimCss;
  /** CSS 属性 text-transform；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  declare readonly textTransform: group6.TextTransformCss;
  /** CSS 属性 text-underline-offset；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  declare readonly textUnderlineOffset: group6.TextUnderlineOffsetCss;
  /** CSS 属性 text-underline-position；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  declare readonly textUnderlinePosition: group6.TextUnderlinePositionCss;
  /** CSS 属性 text-wrap；初始值 wrap。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  declare readonly textWrap: group6.TextWrapCss;
  /** CSS 属性 text-wrap-mode；初始值 wrap。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  declare readonly textWrapMode: group6.TextWrapModeCss;
  /** CSS 属性 text-wrap-style；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  declare readonly textWrapStyle: group6.TextWrapStyleCss;
  /** CSS 属性 timeline-scope；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  declare readonly timelineScope: group6.TimelineScopeCss;
  /** CSS 属性 top；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  declare readonly top: group6.TopCss;
  /** CSS 属性 touch-action；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  declare readonly touchAction: group6.TouchActionCss;
  /** CSS 属性 transform；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  declare readonly transform: group6.TransformCss;
  /** CSS 属性 transform-box；初始值 view-box。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  declare readonly transformBox: group6.TransformBoxCss;
  /** CSS 属性 transform-origin；初始值 50% 50% 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  declare readonly transformOrigin: group6.TransformOriginCss;
  /** CSS 属性 transform-style；初始值 flat。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  declare readonly transformStyle: group6.TransformStyleCss;
  /** CSS 属性 transition。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  declare readonly transition: group6.TransitionCss;
  /** CSS 属性 transition-behavior；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  declare readonly transitionBehavior: group6.TransitionBehaviorCss;
  /** CSS 属性 transition-delay；初始值 0s。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  declare readonly transitionDelay: group6.TransitionDelayCss;
  /** CSS 属性 transition-duration；初始值 0s。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  declare readonly transitionDuration: group6.TransitionDurationCss;
  /** CSS 属性 transition-property。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  declare readonly transitionProperty: group6.TransitionPropertyCss;
  /** CSS 属性 transition-timing-function；初始值 ease。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  declare readonly transitionTimingFunction: group6.TransitionTimingFunctionCss;
  /** CSS 属性 translate；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  declare readonly translate: group6.TranslateCss;
  /** CSS 属性 unicode-bidi；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  declare readonly unicodeBidi: group7.UnicodeBidiCss;
  /** CSS 属性 user-select；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  declare readonly userSelect: group7.UserSelectCss;
  /** CSS 属性 vector-effect；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  declare readonly vectorEffect: group7.VectorEffectCss;
  /** CSS 属性 vertical-align；初始值 baseline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  declare readonly verticalAlign: group7.VerticalAlignCss;
  /** CSS 属性 view-timeline。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  declare readonly viewTimeline: group7.ViewTimelineCss;
  /** CSS 属性 view-timeline-axis；初始值 block。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  declare readonly viewTimelineAxis: group7.ViewTimelineAxisCss;
  /** CSS 属性 view-timeline-inset；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  declare readonly viewTimelineInset: group7.ViewTimelineInsetCss;
  /** CSS 属性 view-timeline-name；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  declare readonly viewTimelineName: group7.ViewTimelineNameCss;
  /** CSS 属性 view-transition-class；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  declare readonly viewTransitionClass: group7.ViewTransitionClassCss;
  /** CSS 属性 view-transition-name；初始值 none。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  declare readonly viewTransitionName: group7.ViewTransitionNameCss;
  /** CSS 属性 visibility；初始值 visible。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  declare readonly visibility: group7.VisibilityCss;
  /** CSS 属性 white-space；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  declare readonly whiteSpace: group7.WhiteSpaceCss;
  /** CSS 属性 white-space-collapse；初始值 collapse。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  declare readonly whiteSpaceCollapse: group7.WhiteSpaceCollapseCss;
  /** CSS 属性 widows；初始值 2。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  declare readonly widows: group7.WidowsCss;
  /** 宽度（CSS width）；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  declare readonly width: group7.WidthCss;
  /** CSS 属性 will-change；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  declare readonly willChange: group7.WillChangeCss;
  /** CSS 属性 word-break；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  declare readonly wordBreak: group7.WordBreakCss;
  /** CSS 属性 word-spacing；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  declare readonly wordSpacing: group7.WordSpacingCss;
  /** CSS 属性 word-wrap；初始值 normal。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  declare readonly wordWrap: group7.WordWrapCss;
  /** CSS 属性 writing-mode；初始值 horizontal-tb。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  declare readonly writingMode: group7.WritingModeCss;
  /** CSS 属性 x；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  declare readonly x: group7.XCss;
  /** CSS 属性 y；初始值 0。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  declare readonly y: group7.YCss;
  /** CSS 属性 z-index；初始值 auto。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  declare readonly zIndex: group7.ZIndexCss;
  /** CSS 属性 zoom；初始值 1。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  declare readonly zoom: group7.ZoomCss;
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
function initializeSystemProperties(): void {
  if (systemPropertiesReady) return;
  defineSystemProperty('accentColor', () => new group0.AccentColorCss());
  defineSystemProperty('alignContent', () => new group0.AlignContentCss());
  defineSystemProperty('alignItems', () => new group0.AlignItemsCss());
  defineSystemProperty('alignSelf', () => new group0.AlignSelfCss());
  defineSystemProperty('alignTracks', () => new group0.AlignTracksCss());
  defineSystemProperty('alignmentBaseline', () => new group0.AlignmentBaselineCss());
  defineSystemProperty('all', () => new group0.AllCss());
  defineSystemProperty('anchorName', () => new group0.AnchorNameCss());
  defineSystemProperty('anchorScope', () => new group0.AnchorScopeCss());
  defineSystemProperty('animation', () => new group0.AnimationCss());
  defineSystemProperty('animationComposition', () => new group0.AnimationCompositionCss());
  defineSystemProperty('animationDelay', () => new group0.AnimationDelayCss());
  defineSystemProperty('animationDirection', () => new group0.AnimationDirectionCss());
  defineSystemProperty('animationDuration', () => new group0.AnimationDurationCss());
  defineSystemProperty('animationFillMode', () => new group0.AnimationFillModeCss());
  defineSystemProperty('animationIterationCount', () => new group0.AnimationIterationCountCss());
  defineSystemProperty('animationName', () => new group0.AnimationNameCss());
  defineSystemProperty('animationPlayState', () => new group0.AnimationPlayStateCss());
  defineSystemProperty('animationRange', () => new group0.AnimationRangeCss());
  defineSystemProperty('animationRangeEnd', () => new group0.AnimationRangeEndCss());
  defineSystemProperty('animationRangeStart', () => new group0.AnimationRangeStartCss());
  defineSystemProperty('animationTimeline', () => new group0.AnimationTimelineCss());
  defineSystemProperty('animationTimingFunction', () => new group0.AnimationTimingFunctionCss());
  defineSystemProperty('appearance', () => new group0.AppearanceCss());
  defineSystemProperty('aspectRatio', () => new group0.AspectRatioCss());
  defineSystemProperty('backdropFilter', () => new group1.BackdropFilterCss());
  defineSystemProperty('backfaceVisibility', () => new group1.BackfaceVisibilityCss());
  defineSystemProperty('background', () => new group1.BackgroundCss());
  defineSystemProperty('backgroundAttachment', () => new group1.BackgroundAttachmentCss());
  defineSystemProperty('backgroundBlendMode', () => new group1.BackgroundBlendModeCss());
  defineSystemProperty('backgroundClip', () => new group1.BackgroundClipCss());
  defineSystemProperty('backgroundColor', () => new group1.BackgroundColorCss());
  defineSystemProperty('backgroundImage', () => new group1.BackgroundImageCss());
  defineSystemProperty('backgroundOrigin', () => new group1.BackgroundOriginCss());
  defineSystemProperty('backgroundPosition', () => new group1.BackgroundPositionCss());
  defineSystemProperty('backgroundPositionX', () => new group1.BackgroundPositionXCss());
  defineSystemProperty('backgroundPositionY', () => new group1.BackgroundPositionYCss());
  defineSystemProperty('backgroundRepeat', () => new group1.BackgroundRepeatCss());
  defineSystemProperty('backgroundSize', () => new group1.BackgroundSizeCss());
  defineSystemProperty('baselineShift', () => new group1.BaselineShiftCss());
  defineSystemProperty('blockSize', () => new group1.BlockSizeCss());
  defineSystemProperty('border', () => new group1.BorderCss());
  defineSystemProperty('borderBlock', () => new group1.BorderBlockCss());
  defineSystemProperty('borderBlockColor', () => new group1.BorderBlockColorCss());
  defineSystemProperty('borderBlockEnd', () => new group1.BorderBlockEndCss());
  defineSystemProperty('borderBlockEndColor', () => new group1.BorderBlockEndColorCss());
  defineSystemProperty('borderBlockEndStyle', () => new group1.BorderBlockEndStyleCss());
  defineSystemProperty('borderBlockEndWidth', () => new group1.BorderBlockEndWidthCss());
  defineSystemProperty('borderBlockStart', () => new group1.BorderBlockStartCss());
  defineSystemProperty('borderBlockStartColor', () => new group1.BorderBlockStartColorCss());
  defineSystemProperty('borderBlockStartStyle', () => new group1.BorderBlockStartStyleCss());
  defineSystemProperty('borderBlockStartWidth', () => new group1.BorderBlockStartWidthCss());
  defineSystemProperty('borderBlockStyle', () => new group1.BorderBlockStyleCss());
  defineSystemProperty('borderBlockWidth', () => new group1.BorderBlockWidthCss());
  defineSystemProperty('borderBottom', () => new group1.BorderBottomCss());
  defineSystemProperty('borderBottomColor', () => new group1.BorderBottomColorCss());
  defineSystemProperty('borderBottomLeftRadius', () => new group1.BorderBottomLeftRadiusCss());
  defineSystemProperty('borderBottomRightRadius', () => new group1.BorderBottomRightRadiusCss());
  defineSystemProperty('borderBottomStyle', () => new group1.BorderBottomStyleCss());
  defineSystemProperty('borderBottomWidth', () => new group1.BorderBottomWidthCss());
  defineSystemProperty('borderCollapse', () => new group1.BorderCollapseCss());
  defineSystemProperty('borderColor', () => new group1.BorderColorCss());
  defineSystemProperty('borderEndEndRadius', () => new group1.BorderEndEndRadiusCss());
  defineSystemProperty('borderEndStartRadius', () => new group1.BorderEndStartRadiusCss());
  defineSystemProperty('borderImage', () => new group1.BorderImageCss());
  defineSystemProperty('borderImageOutset', () => new group1.BorderImageOutsetCss());
  defineSystemProperty('borderImageRepeat', () => new group1.BorderImageRepeatCss());
  defineSystemProperty('borderImageSlice', () => new group1.BorderImageSliceCss());
  defineSystemProperty('borderImageSource', () => new group1.BorderImageSourceCss());
  defineSystemProperty('borderImageWidth', () => new group1.BorderImageWidthCss());
  defineSystemProperty('borderInline', () => new group1.BorderInlineCss());
  defineSystemProperty('borderInlineColor', () => new group1.BorderInlineColorCss());
  defineSystemProperty('borderInlineEnd', () => new group1.BorderInlineEndCss());
  defineSystemProperty('borderInlineEndColor', () => new group1.BorderInlineEndColorCss());
  defineSystemProperty('borderInlineEndStyle', () => new group1.BorderInlineEndStyleCss());
  defineSystemProperty('borderInlineEndWidth', () => new group1.BorderInlineEndWidthCss());
  defineSystemProperty('borderInlineStart', () => new group1.BorderInlineStartCss());
  defineSystemProperty('borderInlineStartColor', () => new group1.BorderInlineStartColorCss());
  defineSystemProperty('borderInlineStartStyle', () => new group1.BorderInlineStartStyleCss());
  defineSystemProperty('borderInlineStartWidth', () => new group1.BorderInlineStartWidthCss());
  defineSystemProperty('borderInlineStyle', () => new group1.BorderInlineStyleCss());
  defineSystemProperty('borderInlineWidth', () => new group1.BorderInlineWidthCss());
  defineSystemProperty('borderLeft', () => new group1.BorderLeftCss());
  defineSystemProperty('borderLeftColor', () => new group1.BorderLeftColorCss());
  defineSystemProperty('borderLeftStyle', () => new group1.BorderLeftStyleCss());
  defineSystemProperty('borderLeftWidth', () => new group1.BorderLeftWidthCss());
  defineSystemProperty('borderRadius', () => new group1.BorderRadiusCss());
  defineSystemProperty('borderRight', () => new group1.BorderRightCss());
  defineSystemProperty('borderRightColor', () => new group1.BorderRightColorCss());
  defineSystemProperty('borderRightStyle', () => new group1.BorderRightStyleCss());
  defineSystemProperty('borderRightWidth', () => new group1.BorderRightWidthCss());
  defineSystemProperty('borderSpacing', () => new group1.BorderSpacingCss());
  defineSystemProperty('borderStartEndRadius', () => new group1.BorderStartEndRadiusCss());
  defineSystemProperty('borderStartStartRadius', () => new group1.BorderStartStartRadiusCss());
  defineSystemProperty('borderStyle', () => new group1.BorderStyleCss());
  defineSystemProperty('borderTop', () => new group1.BorderTopCss());
  defineSystemProperty('borderTopColor', () => new group1.BorderTopColorCss());
  defineSystemProperty('borderTopLeftRadius', () => new group1.BorderTopLeftRadiusCss());
  defineSystemProperty('borderTopRightRadius', () => new group1.BorderTopRightRadiusCss());
  defineSystemProperty('borderTopStyle', () => new group1.BorderTopStyleCss());
  defineSystemProperty('borderTopWidth', () => new group1.BorderTopWidthCss());
  defineSystemProperty('borderWidth', () => new group1.BorderWidthCss());
  defineSystemProperty('bottom', () => new group1.BottomCss());
  defineSystemProperty('boxDecorationBreak', () => new group1.BoxDecorationBreakCss());
  defineSystemProperty('boxShadow', () => new group1.BoxShadowCss());
  defineSystemProperty('boxSizing', () => new group1.BoxSizingCss());
  defineSystemProperty('breakAfter', () => new group1.BreakAfterCss());
  defineSystemProperty('breakBefore', () => new group1.BreakBeforeCss());
  defineSystemProperty('breakInside', () => new group1.BreakInsideCss());
  defineSystemProperty('captionSide', () => new group2.CaptionSideCss());
  defineSystemProperty('caret', () => new group2.CaretCss());
  defineSystemProperty('caretColor', () => new group2.CaretColorCss());
  defineSystemProperty('caretShape', () => new group2.CaretShapeCss());
  defineSystemProperty('clear', () => new group2.ClearCss());
  defineSystemProperty('clip', () => new group2.ClipCss());
  defineSystemProperty('clipPath', () => new group2.ClipPathCss());
  defineSystemProperty('clipRule', () => new group2.ClipRuleCss());
  defineSystemProperty('color', () => new group2.ColorCss());
  defineSystemProperty('colorAdjust', () => new group2.ColorAdjustCss());
  defineSystemProperty('colorInterpolation', () => new group2.ColorInterpolationCss());
  defineSystemProperty(
    'colorInterpolationFilters',
    () => new group2.ColorInterpolationFiltersCss(),
  );
  defineSystemProperty('colorRendering', () => new group2.ColorRenderingCss());
  defineSystemProperty('colorScheme', () => new group2.ColorSchemeCss());
  defineSystemProperty('columnCount', () => new group2.ColumnCountCss());
  defineSystemProperty('columnFill', () => new group2.ColumnFillCss());
  defineSystemProperty('columnGap', () => new group2.ColumnGapCss());
  defineSystemProperty('columnRule', () => new group2.ColumnRuleCss());
  defineSystemProperty('columnRuleColor', () => new group2.ColumnRuleColorCss());
  defineSystemProperty('columnRuleStyle', () => new group2.ColumnRuleStyleCss());
  defineSystemProperty('columnRuleWidth', () => new group2.ColumnRuleWidthCss());
  defineSystemProperty('columnSpan', () => new group2.ColumnSpanCss());
  defineSystemProperty('columnWidth', () => new group2.ColumnWidthCss());
  defineSystemProperty('columns', () => new group2.ColumnsCss());
  defineSystemProperty('contain', () => new group2.ContainCss());
  defineSystemProperty(
    'containIntrinsicBlockSize',
    () => new group2.ContainIntrinsicBlockSizeCss(),
  );
  defineSystemProperty('containIntrinsicHeight', () => new group2.ContainIntrinsicHeightCss());
  defineSystemProperty(
    'containIntrinsicInlineSize',
    () => new group2.ContainIntrinsicInlineSizeCss(),
  );
  defineSystemProperty('containIntrinsicSize', () => new group2.ContainIntrinsicSizeCss());
  defineSystemProperty('containIntrinsicWidth', () => new group2.ContainIntrinsicWidthCss());
  defineSystemProperty('container', () => new group2.ContainerCss());
  defineSystemProperty('containerName', () => new group2.ContainerNameCss());
  defineSystemProperty('containerType', () => new group2.ContainerTypeCss());
  defineSystemProperty('content', () => new group2.ContentCss());
  defineSystemProperty('contentVisibility', () => new group2.ContentVisibilityCss());
  defineSystemProperty('counterIncrement', () => new group2.CounterIncrementCss());
  defineSystemProperty('counterReset', () => new group2.CounterResetCss());
  defineSystemProperty('counterSet', () => new group2.CounterSetCss());
  defineSystemProperty('cursor', () => new group2.CursorCss());
  defineSystemProperty('cx', () => new group2.CxCss());
  defineSystemProperty('cy', () => new group2.CyCss());
  defineSystemProperty('d', () => new group2.DCss());
  defineSystemProperty('direction', () => new group2.DirectionCss());
  defineSystemProperty('display', () => new group2.DisplayCss());
  defineSystemProperty('dominantBaseline', () => new group2.DominantBaselineCss());
  defineSystemProperty('emptyCells', () => new group2.EmptyCellsCss());
  defineSystemProperty('fieldSizing', () => new group2.FieldSizingCss());
  defineSystemProperty('fill', () => new group2.FillCss());
  defineSystemProperty('fillOpacity', () => new group2.FillOpacityCss());
  defineSystemProperty('fillRule', () => new group2.FillRuleCss());
  defineSystemProperty('filter', () => new group2.FilterCss());
  defineSystemProperty('flex', () => new group2.FlexCss());
  defineSystemProperty('flexBasis', () => new group2.FlexBasisCss());
  defineSystemProperty('flexDirection', () => new group2.FlexDirectionCss());
  defineSystemProperty('flexFlow', () => new group2.FlexFlowCss());
  defineSystemProperty('flexGrow', () => new group2.FlexGrowCss());
  defineSystemProperty('flexShrink', () => new group2.FlexShrinkCss());
  defineSystemProperty('flexWrap', () => new group2.FlexWrapCss());
  defineSystemProperty('float', () => new group2.FloatCss());
  defineSystemProperty('floodColor', () => new group2.FloodColorCss());
  defineSystemProperty('floodOpacity', () => new group2.FloodOpacityCss());
  defineSystemProperty('font', () => new group2.FontCss());
  defineSystemProperty('fontFamily', () => new group2.FontFamilyCss());
  defineSystemProperty('fontFeatureSettings', () => new group2.FontFeatureSettingsCss());
  defineSystemProperty('fontKerning', () => new group2.FontKerningCss());
  defineSystemProperty('fontLanguageOverride', () => new group2.FontLanguageOverrideCss());
  defineSystemProperty('fontOpticalSizing', () => new group2.FontOpticalSizingCss());
  defineSystemProperty('fontPalette', () => new group2.FontPaletteCss());
  defineSystemProperty('fontSize', () => new group2.FontSizeCss());
  defineSystemProperty('fontSizeAdjust', () => new group2.FontSizeAdjustCss());
  defineSystemProperty('fontSmooth', () => new group2.FontSmoothCss());
  defineSystemProperty('fontStretch', () => new group2.FontStretchCss());
  defineSystemProperty('fontStyle', () => new group2.FontStyleCss());
  defineSystemProperty('fontSynthesis', () => new group2.FontSynthesisCss());
  defineSystemProperty('fontSynthesisPosition', () => new group2.FontSynthesisPositionCss());
  defineSystemProperty('fontSynthesisSmallCaps', () => new group2.FontSynthesisSmallCapsCss());
  defineSystemProperty('fontSynthesisStyle', () => new group2.FontSynthesisStyleCss());
  defineSystemProperty('fontSynthesisWeight', () => new group2.FontSynthesisWeightCss());
  defineSystemProperty('fontVariant', () => new group2.FontVariantCss());
  defineSystemProperty('fontVariantAlternates', () => new group2.FontVariantAlternatesCss());
  defineSystemProperty('fontVariantCaps', () => new group2.FontVariantCapsCss());
  defineSystemProperty('fontVariantEastAsian', () => new group2.FontVariantEastAsianCss());
  defineSystemProperty('fontVariantEmoji', () => new group2.FontVariantEmojiCss());
  defineSystemProperty('fontVariantLigatures', () => new group2.FontVariantLigaturesCss());
  defineSystemProperty('fontVariantNumeric', () => new group2.FontVariantNumericCss());
  defineSystemProperty('fontVariantPosition', () => new group2.FontVariantPositionCss());
  defineSystemProperty('fontVariationSettings', () => new group2.FontVariationSettingsCss());
  defineSystemProperty('fontWeight', () => new group2.FontWeightCss());
  defineSystemProperty('fontWidth', () => new group2.FontWidthCss());
  defineSystemProperty('forcedColorAdjust', () => new group2.ForcedColorAdjustCss());
  defineSystemProperty('gap', () => new group3.GapCss());
  defineSystemProperty('glyphOrientationVertical', () => new group3.GlyphOrientationVerticalCss());
  defineSystemProperty('grid', () => new group3.GridCss());
  defineSystemProperty('gridArea', () => new group3.GridAreaCss());
  defineSystemProperty('gridAutoColumns', () => new group3.GridAutoColumnsCss());
  defineSystemProperty('gridAutoFlow', () => new group3.GridAutoFlowCss());
  defineSystemProperty('gridAutoRows', () => new group3.GridAutoRowsCss());
  defineSystemProperty('gridColumn', () => new group3.GridColumnCss());
  defineSystemProperty('gridColumnEnd', () => new group3.GridColumnEndCss());
  defineSystemProperty('gridColumnStart', () => new group3.GridColumnStartCss());
  defineSystemProperty('gridRow', () => new group3.GridRowCss());
  defineSystemProperty('gridRowEnd', () => new group3.GridRowEndCss());
  defineSystemProperty('gridRowStart', () => new group3.GridRowStartCss());
  defineSystemProperty('gridTemplate', () => new group3.GridTemplateCss());
  defineSystemProperty('gridTemplateAreas', () => new group3.GridTemplateAreasCss());
  defineSystemProperty('gridTemplateColumns', () => new group3.GridTemplateColumnsCss());
  defineSystemProperty('gridTemplateRows', () => new group3.GridTemplateRowsCss());
  defineSystemProperty('hangingPunctuation', () => new group3.HangingPunctuationCss());
  defineSystemProperty('height', () => new group3.HeightCss());
  defineSystemProperty('hyphenateCharacter', () => new group3.HyphenateCharacterCss());
  defineSystemProperty('hyphenateLimitChars', () => new group3.HyphenateLimitCharsCss());
  defineSystemProperty('hyphens', () => new group3.HyphensCss());
  defineSystemProperty('imageOrientation', () => new group3.ImageOrientationCss());
  defineSystemProperty('imageRendering', () => new group3.ImageRenderingCss());
  defineSystemProperty('imageResolution', () => new group3.ImageResolutionCss());
  defineSystemProperty('initialLetter', () => new group3.InitialLetterCss());
  defineSystemProperty('initialLetterAlign', () => new group3.InitialLetterAlignCss());
  defineSystemProperty('inlineSize', () => new group3.InlineSizeCss());
  defineSystemProperty('inset', () => new group3.InsetCss());
  defineSystemProperty('insetBlock', () => new group3.InsetBlockCss());
  defineSystemProperty('insetBlockEnd', () => new group3.InsetBlockEndCss());
  defineSystemProperty('insetBlockStart', () => new group3.InsetBlockStartCss());
  defineSystemProperty('insetInline', () => new group3.InsetInlineCss());
  defineSystemProperty('insetInlineEnd', () => new group3.InsetInlineEndCss());
  defineSystemProperty('insetInlineStart', () => new group3.InsetInlineStartCss());
  defineSystemProperty('interpolateSize', () => new group3.InterpolateSizeCss());
  defineSystemProperty('isolation', () => new group3.IsolationCss());
  defineSystemProperty('justifyContent', () => new group3.JustifyContentCss());
  defineSystemProperty('justifyItems', () => new group3.JustifyItemsCss());
  defineSystemProperty('justifySelf', () => new group3.JustifySelfCss());
  defineSystemProperty('justifyTracks', () => new group3.JustifyTracksCss());
  defineSystemProperty('left', () => new group3.LeftCss());
  defineSystemProperty('letterSpacing', () => new group3.LetterSpacingCss());
  defineSystemProperty('lightingColor', () => new group3.LightingColorCss());
  defineSystemProperty('lineBreak', () => new group3.LineBreakCss());
  defineSystemProperty('lineClamp', () => new group3.LineClampCss());
  defineSystemProperty('lineHeight', () => new group3.LineHeightCss());
  defineSystemProperty('lineHeightStep', () => new group3.LineHeightStepCss());
  defineSystemProperty('listStyle', () => new group3.ListStyleCss());
  defineSystemProperty('listStyleImage', () => new group3.ListStyleImageCss());
  defineSystemProperty('listStylePosition', () => new group3.ListStylePositionCss());
  defineSystemProperty('listStyleType', () => new group3.ListStyleTypeCss());
  defineSystemProperty('margin', () => new group4.MarginCss());
  defineSystemProperty('marginBlock', () => new group4.MarginBlockCss());
  defineSystemProperty('marginBlockEnd', () => new group4.MarginBlockEndCss());
  defineSystemProperty('marginBlockStart', () => new group4.MarginBlockStartCss());
  defineSystemProperty('marginBottom', () => new group4.MarginBottomCss());
  defineSystemProperty('marginInline', () => new group4.MarginInlineCss());
  defineSystemProperty('marginInlineEnd', () => new group4.MarginInlineEndCss());
  defineSystemProperty('marginInlineStart', () => new group4.MarginInlineStartCss());
  defineSystemProperty('marginLeft', () => new group4.MarginLeftCss());
  defineSystemProperty('marginRight', () => new group4.MarginRightCss());
  defineSystemProperty('marginTop', () => new group4.MarginTopCss());
  defineSystemProperty('marginTrim', () => new group4.MarginTrimCss());
  defineSystemProperty('marker', () => new group4.MarkerCss());
  defineSystemProperty('markerEnd', () => new group4.MarkerEndCss());
  defineSystemProperty('markerMid', () => new group4.MarkerMidCss());
  defineSystemProperty('markerStart', () => new group4.MarkerStartCss());
  defineSystemProperty('mask', () => new group4.MaskCss());
  defineSystemProperty('maskBorder', () => new group4.MaskBorderCss());
  defineSystemProperty('maskBorderMode', () => new group4.MaskBorderModeCss());
  defineSystemProperty('maskBorderOutset', () => new group4.MaskBorderOutsetCss());
  defineSystemProperty('maskBorderRepeat', () => new group4.MaskBorderRepeatCss());
  defineSystemProperty('maskBorderSlice', () => new group4.MaskBorderSliceCss());
  defineSystemProperty('maskBorderSource', () => new group4.MaskBorderSourceCss());
  defineSystemProperty('maskBorderWidth', () => new group4.MaskBorderWidthCss());
  defineSystemProperty('maskClip', () => new group4.MaskClipCss());
  defineSystemProperty('maskComposite', () => new group4.MaskCompositeCss());
  defineSystemProperty('maskImage', () => new group4.MaskImageCss());
  defineSystemProperty('maskMode', () => new group4.MaskModeCss());
  defineSystemProperty('maskOrigin', () => new group4.MaskOriginCss());
  defineSystemProperty('maskPosition', () => new group4.MaskPositionCss());
  defineSystemProperty('maskRepeat', () => new group4.MaskRepeatCss());
  defineSystemProperty('maskSize', () => new group4.MaskSizeCss());
  defineSystemProperty('maskType', () => new group4.MaskTypeCss());
  defineSystemProperty('masonryAutoFlow', () => new group4.MasonryAutoFlowCss());
  defineSystemProperty('mathDepth', () => new group4.MathDepthCss());
  defineSystemProperty('mathShift', () => new group4.MathShiftCss());
  defineSystemProperty('mathStyle', () => new group4.MathStyleCss());
  defineSystemProperty('maxBlockSize', () => new group4.MaxBlockSizeCss());
  defineSystemProperty('maxHeight', () => new group4.MaxHeightCss());
  defineSystemProperty('maxInlineSize', () => new group4.MaxInlineSizeCss());
  defineSystemProperty('maxLines', () => new group4.MaxLinesCss());
  defineSystemProperty('maxWidth', () => new group4.MaxWidthCss());
  defineSystemProperty('minBlockSize', () => new group4.MinBlockSizeCss());
  defineSystemProperty('minHeight', () => new group4.MinHeightCss());
  defineSystemProperty('minInlineSize', () => new group4.MinInlineSizeCss());
  defineSystemProperty('minWidth', () => new group4.MinWidthCss());
  defineSystemProperty('mixBlendMode', () => new group4.MixBlendModeCss());
  defineSystemProperty('motion', () => new group4.MotionCss());
  defineSystemProperty('motionDistance', () => new group4.MotionDistanceCss());
  defineSystemProperty('motionPath', () => new group4.MotionPathCss());
  defineSystemProperty('motionRotation', () => new group4.MotionRotationCss());
  defineSystemProperty('objectFit', () => new group4.ObjectFitCss());
  defineSystemProperty('objectPosition', () => new group4.ObjectPositionCss());
  defineSystemProperty('objectViewBox', () => new group4.ObjectViewBoxCss());
  defineSystemProperty('offset', () => new group4.OffsetCss());
  defineSystemProperty('offsetAnchor', () => new group4.OffsetAnchorCss());
  defineSystemProperty('offsetDistance', () => new group4.OffsetDistanceCss());
  defineSystemProperty('offsetPath', () => new group4.OffsetPathCss());
  defineSystemProperty('offsetPosition', () => new group4.OffsetPositionCss());
  defineSystemProperty('offsetRotate', () => new group4.OffsetRotateCss());
  defineSystemProperty('offsetRotation', () => new group4.OffsetRotationCss());
  defineSystemProperty('opacity', () => new group4.OpacityCss());
  defineSystemProperty('order', () => new group4.OrderCss());
  defineSystemProperty('orphans', () => new group4.OrphansCss());
  defineSystemProperty('outline', () => new group4.OutlineCss());
  defineSystemProperty('outlineColor', () => new group4.OutlineColorCss());
  defineSystemProperty('outlineOffset', () => new group4.OutlineOffsetCss());
  defineSystemProperty('outlineStyle', () => new group4.OutlineStyleCss());
  defineSystemProperty('outlineWidth', () => new group4.OutlineWidthCss());
  defineSystemProperty('overflow', () => new group4.OverflowCss());
  defineSystemProperty('overflowAnchor', () => new group4.OverflowAnchorCss());
  defineSystemProperty('overflowBlock', () => new group4.OverflowBlockCss());
  defineSystemProperty('overflowClipBox', () => new group4.OverflowClipBoxCss());
  defineSystemProperty('overflowClipMargin', () => new group4.OverflowClipMarginCss());
  defineSystemProperty('overflowInline', () => new group4.OverflowInlineCss());
  defineSystemProperty('overflowWrap', () => new group4.OverflowWrapCss());
  defineSystemProperty('overflowX', () => new group4.OverflowXCss());
  defineSystemProperty('overflowY', () => new group4.OverflowYCss());
  defineSystemProperty('overlay', () => new group4.OverlayCss());
  defineSystemProperty('overscrollBehavior', () => new group4.OverscrollBehaviorCss());
  defineSystemProperty('overscrollBehaviorBlock', () => new group4.OverscrollBehaviorBlockCss());
  defineSystemProperty('overscrollBehaviorInline', () => new group4.OverscrollBehaviorInlineCss());
  defineSystemProperty('overscrollBehaviorX', () => new group4.OverscrollBehaviorXCss());
  defineSystemProperty('overscrollBehaviorY', () => new group4.OverscrollBehaviorYCss());
  defineSystemProperty('padding', () => new group5.PaddingCss());
  defineSystemProperty('paddingBlock', () => new group5.PaddingBlockCss());
  defineSystemProperty('paddingBlockEnd', () => new group5.PaddingBlockEndCss());
  defineSystemProperty('paddingBlockStart', () => new group5.PaddingBlockStartCss());
  defineSystemProperty('paddingBottom', () => new group5.PaddingBottomCss());
  defineSystemProperty('paddingInline', () => new group5.PaddingInlineCss());
  defineSystemProperty('paddingInlineEnd', () => new group5.PaddingInlineEndCss());
  defineSystemProperty('paddingInlineStart', () => new group5.PaddingInlineStartCss());
  defineSystemProperty('paddingLeft', () => new group5.PaddingLeftCss());
  defineSystemProperty('paddingRight', () => new group5.PaddingRightCss());
  defineSystemProperty('paddingTop', () => new group5.PaddingTopCss());
  defineSystemProperty('page', () => new group5.PageCss());
  defineSystemProperty('paintOrder', () => new group5.PaintOrderCss());
  defineSystemProperty('perspective', () => new group5.PerspectiveCss());
  defineSystemProperty('perspectiveOrigin', () => new group5.PerspectiveOriginCss());
  defineSystemProperty('placeContent', () => new group5.PlaceContentCss());
  defineSystemProperty('placeItems', () => new group5.PlaceItemsCss());
  defineSystemProperty('placeSelf', () => new group5.PlaceSelfCss());
  defineSystemProperty('pointerEvents', () => new group5.PointerEventsCss());
  defineSystemProperty('position', () => new group5.PositionCss());
  defineSystemProperty('positionAnchor', () => new group5.PositionAnchorCss());
  defineSystemProperty('positionArea', () => new group5.PositionAreaCss());
  defineSystemProperty('positionTry', () => new group5.PositionTryCss());
  defineSystemProperty('positionTryFallbacks', () => new group5.PositionTryFallbacksCss());
  defineSystemProperty('positionTryOrder', () => new group5.PositionTryOrderCss());
  defineSystemProperty('positionVisibility', () => new group5.PositionVisibilityCss());
  defineSystemProperty('printColorAdjust', () => new group5.PrintColorAdjustCss());
  defineSystemProperty('quotes', () => new group5.QuotesCss());
  defineSystemProperty('r', () => new group5.RCss());
  defineSystemProperty('resize', () => new group5.ResizeCss());
  defineSystemProperty('right', () => new group5.RightCss());
  defineSystemProperty('rotate', () => new group5.RotateCss());
  defineSystemProperty('rowGap', () => new group5.RowGapCss());
  defineSystemProperty('rubyAlign', () => new group5.RubyAlignCss());
  defineSystemProperty('rubyMerge', () => new group5.RubyMergeCss());
  defineSystemProperty('rubyOverhang', () => new group5.RubyOverhangCss());
  defineSystemProperty('rubyPosition', () => new group5.RubyPositionCss());
  defineSystemProperty('rx', () => new group5.RxCss());
  defineSystemProperty('ry', () => new group5.RyCss());
  defineSystemProperty('scale', () => new group6.ScaleCss());
  defineSystemProperty('scrollBehavior', () => new group6.ScrollBehaviorCss());
  defineSystemProperty('scrollInitialTarget', () => new group6.ScrollInitialTargetCss());
  defineSystemProperty('scrollMargin', () => new group6.ScrollMarginCss());
  defineSystemProperty('scrollMarginBlock', () => new group6.ScrollMarginBlockCss());
  defineSystemProperty('scrollMarginBlockEnd', () => new group6.ScrollMarginBlockEndCss());
  defineSystemProperty('scrollMarginBlockStart', () => new group6.ScrollMarginBlockStartCss());
  defineSystemProperty('scrollMarginBottom', () => new group6.ScrollMarginBottomCss());
  defineSystemProperty('scrollMarginInline', () => new group6.ScrollMarginInlineCss());
  defineSystemProperty('scrollMarginInlineEnd', () => new group6.ScrollMarginInlineEndCss());
  defineSystemProperty('scrollMarginInlineStart', () => new group6.ScrollMarginInlineStartCss());
  defineSystemProperty('scrollMarginLeft', () => new group6.ScrollMarginLeftCss());
  defineSystemProperty('scrollMarginRight', () => new group6.ScrollMarginRightCss());
  defineSystemProperty('scrollMarginTop', () => new group6.ScrollMarginTopCss());
  defineSystemProperty('scrollPadding', () => new group6.ScrollPaddingCss());
  defineSystemProperty('scrollPaddingBlock', () => new group6.ScrollPaddingBlockCss());
  defineSystemProperty('scrollPaddingBlockEnd', () => new group6.ScrollPaddingBlockEndCss());
  defineSystemProperty('scrollPaddingBlockStart', () => new group6.ScrollPaddingBlockStartCss());
  defineSystemProperty('scrollPaddingBottom', () => new group6.ScrollPaddingBottomCss());
  defineSystemProperty('scrollPaddingInline', () => new group6.ScrollPaddingInlineCss());
  defineSystemProperty('scrollPaddingInlineEnd', () => new group6.ScrollPaddingInlineEndCss());
  defineSystemProperty('scrollPaddingInlineStart', () => new group6.ScrollPaddingInlineStartCss());
  defineSystemProperty('scrollPaddingLeft', () => new group6.ScrollPaddingLeftCss());
  defineSystemProperty('scrollPaddingRight', () => new group6.ScrollPaddingRightCss());
  defineSystemProperty('scrollPaddingTop', () => new group6.ScrollPaddingTopCss());
  defineSystemProperty('scrollSnapAlign', () => new group6.ScrollSnapAlignCss());
  defineSystemProperty('scrollSnapMargin', () => new group6.ScrollSnapMarginCss());
  defineSystemProperty('scrollSnapMarginBottom', () => new group6.ScrollSnapMarginBottomCss());
  defineSystemProperty('scrollSnapMarginLeft', () => new group6.ScrollSnapMarginLeftCss());
  defineSystemProperty('scrollSnapMarginRight', () => new group6.ScrollSnapMarginRightCss());
  defineSystemProperty('scrollSnapMarginTop', () => new group6.ScrollSnapMarginTopCss());
  defineSystemProperty('scrollSnapStop', () => new group6.ScrollSnapStopCss());
  defineSystemProperty('scrollSnapType', () => new group6.ScrollSnapTypeCss());
  defineSystemProperty('scrollTimeline', () => new group6.ScrollTimelineCss());
  defineSystemProperty('scrollTimelineAxis', () => new group6.ScrollTimelineAxisCss());
  defineSystemProperty('scrollTimelineName', () => new group6.ScrollTimelineNameCss());
  defineSystemProperty('scrollbarColor', () => new group6.ScrollbarColorCss());
  defineSystemProperty('scrollbarGutter', () => new group6.ScrollbarGutterCss());
  defineSystemProperty('scrollbarWidth', () => new group6.ScrollbarWidthCss());
  defineSystemProperty('shapeImageThreshold', () => new group6.ShapeImageThresholdCss());
  defineSystemProperty('shapeMargin', () => new group6.ShapeMarginCss());
  defineSystemProperty('shapeOutside', () => new group6.ShapeOutsideCss());
  defineSystemProperty('shapeRendering', () => new group6.ShapeRenderingCss());
  defineSystemProperty('speakAs', () => new group6.SpeakAsCss());
  defineSystemProperty('stopColor', () => new group6.StopColorCss());
  defineSystemProperty('stopOpacity', () => new group6.StopOpacityCss());
  defineSystemProperty('stroke', () => new group6.StrokeCss());
  defineSystemProperty('strokeColor', () => new group6.StrokeColorCss());
  defineSystemProperty('strokeDasharray', () => new group6.StrokeDasharrayCss());
  defineSystemProperty('strokeDashoffset', () => new group6.StrokeDashoffsetCss());
  defineSystemProperty('strokeLinecap', () => new group6.StrokeLinecapCss());
  defineSystemProperty('strokeLinejoin', () => new group6.StrokeLinejoinCss());
  defineSystemProperty('strokeMiterlimit', () => new group6.StrokeMiterlimitCss());
  defineSystemProperty('strokeOpacity', () => new group6.StrokeOpacityCss());
  defineSystemProperty('strokeWidth', () => new group6.StrokeWidthCss());
  defineSystemProperty('tabSize', () => new group6.TabSizeCss());
  defineSystemProperty('tableLayout', () => new group6.TableLayoutCss());
  defineSystemProperty('textAlign', () => new group6.TextAlignCss());
  defineSystemProperty('textAlignLast', () => new group6.TextAlignLastCss());
  defineSystemProperty('textAnchor', () => new group6.TextAnchorCss());
  defineSystemProperty('textAutospace', () => new group6.TextAutospaceCss());
  defineSystemProperty('textBox', () => new group6.TextBoxCss());
  defineSystemProperty('textBoxEdge', () => new group6.TextBoxEdgeCss());
  defineSystemProperty('textBoxTrim', () => new group6.TextBoxTrimCss());
  defineSystemProperty('textCombineUpright', () => new group6.TextCombineUprightCss());
  defineSystemProperty('textDecoration', () => new group6.TextDecorationCss());
  defineSystemProperty('textDecorationColor', () => new group6.TextDecorationColorCss());
  defineSystemProperty('textDecorationLine', () => new group6.TextDecorationLineCss());
  defineSystemProperty('textDecorationSkip', () => new group6.TextDecorationSkipCss());
  defineSystemProperty('textDecorationSkipInk', () => new group6.TextDecorationSkipInkCss());
  defineSystemProperty('textDecorationStyle', () => new group6.TextDecorationStyleCss());
  defineSystemProperty('textDecorationThickness', () => new group6.TextDecorationThicknessCss());
  defineSystemProperty('textEmphasis', () => new group6.TextEmphasisCss());
  defineSystemProperty('textEmphasisColor', () => new group6.TextEmphasisColorCss());
  defineSystemProperty('textEmphasisPosition', () => new group6.TextEmphasisPositionCss());
  defineSystemProperty('textEmphasisStyle', () => new group6.TextEmphasisStyleCss());
  defineSystemProperty('textIndent', () => new group6.TextIndentCss());
  defineSystemProperty('textJustify', () => new group6.TextJustifyCss());
  defineSystemProperty('textOrientation', () => new group6.TextOrientationCss());
  defineSystemProperty('textOverflow', () => new group6.TextOverflowCss());
  defineSystemProperty('textRendering', () => new group6.TextRenderingCss());
  defineSystemProperty('textShadow', () => new group6.TextShadowCss());
  defineSystemProperty('textSizeAdjust', () => new group6.TextSizeAdjustCss());
  defineSystemProperty('textSpacingTrim', () => new group6.TextSpacingTrimCss());
  defineSystemProperty('textTransform', () => new group6.TextTransformCss());
  defineSystemProperty('textUnderlineOffset', () => new group6.TextUnderlineOffsetCss());
  defineSystemProperty('textUnderlinePosition', () => new group6.TextUnderlinePositionCss());
  defineSystemProperty('textWrap', () => new group6.TextWrapCss());
  defineSystemProperty('textWrapMode', () => new group6.TextWrapModeCss());
  defineSystemProperty('textWrapStyle', () => new group6.TextWrapStyleCss());
  defineSystemProperty('timelineScope', () => new group6.TimelineScopeCss());
  defineSystemProperty('top', () => new group6.TopCss());
  defineSystemProperty('touchAction', () => new group6.TouchActionCss());
  defineSystemProperty('transform', () => new group6.TransformCss());
  defineSystemProperty('transformBox', () => new group6.TransformBoxCss());
  defineSystemProperty('transformOrigin', () => new group6.TransformOriginCss());
  defineSystemProperty('transformStyle', () => new group6.TransformStyleCss());
  defineSystemProperty('transition', () => new group6.TransitionCss());
  defineSystemProperty('transitionBehavior', () => new group6.TransitionBehaviorCss());
  defineSystemProperty('transitionDelay', () => new group6.TransitionDelayCss());
  defineSystemProperty('transitionDuration', () => new group6.TransitionDurationCss());
  defineSystemProperty('transitionProperty', () => new group6.TransitionPropertyCss());
  defineSystemProperty('transitionTimingFunction', () => new group6.TransitionTimingFunctionCss());
  defineSystemProperty('translate', () => new group6.TranslateCss());
  defineSystemProperty('unicodeBidi', () => new group7.UnicodeBidiCss());
  defineSystemProperty('userSelect', () => new group7.UserSelectCss());
  defineSystemProperty('vectorEffect', () => new group7.VectorEffectCss());
  defineSystemProperty('verticalAlign', () => new group7.VerticalAlignCss());
  defineSystemProperty('viewTimeline', () => new group7.ViewTimelineCss());
  defineSystemProperty('viewTimelineAxis', () => new group7.ViewTimelineAxisCss());
  defineSystemProperty('viewTimelineInset', () => new group7.ViewTimelineInsetCss());
  defineSystemProperty('viewTimelineName', () => new group7.ViewTimelineNameCss());
  defineSystemProperty('viewTransitionClass', () => new group7.ViewTransitionClassCss());
  defineSystemProperty('viewTransitionName', () => new group7.ViewTransitionNameCss());
  defineSystemProperty('visibility', () => new group7.VisibilityCss());
  defineSystemProperty('whiteSpace', () => new group7.WhiteSpaceCss());
  defineSystemProperty('whiteSpaceCollapse', () => new group7.WhiteSpaceCollapseCss());
  defineSystemProperty('widows', () => new group7.WidowsCss());
  defineSystemProperty('width', () => new group7.WidthCss());
  defineSystemProperty('willChange', () => new group7.WillChangeCss());
  defineSystemProperty('wordBreak', () => new group7.WordBreakCss());
  defineSystemProperty('wordSpacing', () => new group7.WordSpacingCss());
  defineSystemProperty('wordWrap', () => new group7.WordWrapCss());
  defineSystemProperty('writingMode', () => new group7.WritingModeCss());
  defineSystemProperty('x', () => new group7.XCss());
  defineSystemProperty('y', () => new group7.YCss());
  defineSystemProperty('zIndex', () => new group7.ZIndexCss());
  defineSystemProperty('zoom', () => new group7.ZoomCss());
  systemPropertiesReady = true;
}
