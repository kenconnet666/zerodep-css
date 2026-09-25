// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** CSS 属性 unicode-bidi；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
 */
export class UnicodeBidiCss extends CssProperty<Property.UnicodeBidi> {
  readonly bidiOverride = 'unicode-bidi:bidi-override;';
  readonly embed = 'unicode-bidi:embed;';
  readonly inherit = 'unicode-bidi:inherit;';
  readonly initial = 'unicode-bidi:initial;';
  readonly isolate = 'unicode-bidi:isolate;';
  readonly isolateOverride = 'unicode-bidi:isolate-override;';
  readonly normal = 'unicode-bidi:normal;';
  readonly plaintext = 'unicode-bidi:plaintext;';
  readonly revert = 'unicode-bidi:revert;';
  readonly revertLayer = 'unicode-bidi:revert-layer;';
  readonly unset = 'unicode-bidi:unset;';
  constructor() {
    super('unicode-bidi');
  }
}

/** CSS 属性 user-select；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
 */
export class UserSelectCss extends CssProperty<Property.UserSelect> {
  readonly all = 'user-select:all;';
  readonly auto = 'user-select:auto;';
  readonly inherit = 'user-select:inherit;';
  readonly initial = 'user-select:initial;';
  readonly none = 'user-select:none;';
  readonly revert = 'user-select:revert;';
  readonly revertLayer = 'user-select:revert-layer;';
  readonly text = 'user-select:text;';
  readonly unset = 'user-select:unset;';
  constructor() {
    super('user-select');
  }
}

/** CSS 属性 vector-effect；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
 */
export class VectorEffectCss extends CssProperty<Property.VectorEffect> {
  readonly fixedPosition = 'vector-effect:fixed-position;';
  readonly inherit = 'vector-effect:inherit;';
  readonly initial = 'vector-effect:initial;';
  readonly nonRotation = 'vector-effect:non-rotation;';
  readonly nonScalingSize = 'vector-effect:non-scaling-size;';
  readonly nonScalingStroke = 'vector-effect:non-scaling-stroke;';
  readonly none = 'vector-effect:none;';
  readonly revert = 'vector-effect:revert;';
  readonly revertLayer = 'vector-effect:revert-layer;';
  readonly unset = 'vector-effect:unset;';
  constructor() {
    super('vector-effect');
  }
}

/** CSS 属性 vertical-align；初始值 baseline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
 */
export class VerticalAlignCss extends LengthCssProperty<Property.VerticalAlign> {
  readonly baseline = 'vertical-align:baseline;';
  readonly bottom = 'vertical-align:bottom;';
  readonly inherit = 'vertical-align:inherit;';
  readonly initial = 'vertical-align:initial;';
  readonly middle = 'vertical-align:middle;';
  readonly revert = 'vertical-align:revert;';
  readonly revertLayer = 'vertical-align:revert-layer;';
  readonly sub = 'vertical-align:sub;';
  readonly super = 'vertical-align:super;';
  readonly textBottom = 'vertical-align:text-bottom;';
  readonly textTop = 'vertical-align:text-top;';
  readonly top = 'vertical-align:top;';
  readonly unset = 'vertical-align:unset;';
  constructor() {
    super('vertical-align');
  }
}

/** CSS 属性 view-timeline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
 */
export class ViewTimelineCss extends CssProperty<Property.ViewTimeline> {
  readonly inherit = 'view-timeline:inherit;';
  readonly initial = 'view-timeline:initial;';
  readonly none = 'view-timeline:none;';
  readonly revert = 'view-timeline:revert;';
  readonly revertLayer = 'view-timeline:revert-layer;';
  readonly unset = 'view-timeline:unset;';
  constructor() {
    super('view-timeline');
  }
}

/** CSS 属性 view-timeline-axis；初始值 block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
 */
export class ViewTimelineAxisCss extends CssProperty<Property.ViewTimelineAxis> {
  readonly block = 'view-timeline-axis:block;';
  readonly inherit = 'view-timeline-axis:inherit;';
  readonly initial = 'view-timeline-axis:initial;';
  readonly inline = 'view-timeline-axis:inline;';
  readonly revert = 'view-timeline-axis:revert;';
  readonly revertLayer = 'view-timeline-axis:revert-layer;';
  readonly unset = 'view-timeline-axis:unset;';
  readonly x = 'view-timeline-axis:x;';
  readonly y = 'view-timeline-axis:y;';
  constructor() {
    super('view-timeline-axis');
  }
}

/** CSS 属性 view-timeline-inset；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
 */
export class ViewTimelineInsetCss extends LengthCssProperty<Property.ViewTimelineInset> {
  readonly auto = 'view-timeline-inset:auto;';
  readonly inherit = 'view-timeline-inset:inherit;';
  readonly initial = 'view-timeline-inset:initial;';
  readonly revert = 'view-timeline-inset:revert;';
  readonly revertLayer = 'view-timeline-inset:revert-layer;';
  readonly unset = 'view-timeline-inset:unset;';
  constructor() {
    super('view-timeline-inset');
  }
}

/** CSS 属性 view-timeline-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
 */
export class ViewTimelineNameCss extends CssProperty<Property.ViewTimelineName> {
  readonly inherit = 'view-timeline-name:inherit;';
  readonly initial = 'view-timeline-name:initial;';
  readonly none = 'view-timeline-name:none;';
  readonly revert = 'view-timeline-name:revert;';
  readonly revertLayer = 'view-timeline-name:revert-layer;';
  readonly unset = 'view-timeline-name:unset;';
  constructor() {
    super('view-timeline-name');
  }
}

/** CSS 属性 view-transition-class；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
 */
export class ViewTransitionClassCss extends CssProperty<Property.ViewTransitionClass> {
  readonly inherit = 'view-transition-class:inherit;';
  readonly initial = 'view-transition-class:initial;';
  readonly none = 'view-transition-class:none;';
  readonly revert = 'view-transition-class:revert;';
  readonly revertLayer = 'view-transition-class:revert-layer;';
  readonly unset = 'view-transition-class:unset;';
  constructor() {
    super('view-transition-class');
  }
}

/** CSS 属性 view-transition-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
 */
export class ViewTransitionNameCss extends CssProperty<Property.ViewTransitionName> {
  readonly inherit = 'view-transition-name:inherit;';
  readonly initial = 'view-transition-name:initial;';
  readonly matchElement = 'view-transition-name:match-element;';
  readonly none = 'view-transition-name:none;';
  readonly revert = 'view-transition-name:revert;';
  readonly revertLayer = 'view-transition-name:revert-layer;';
  readonly unset = 'view-transition-name:unset;';
  constructor() {
    super('view-transition-name');
  }
}

/** CSS 属性 visibility；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
 */
export class VisibilityCss extends CssProperty<Property.Visibility> {
  readonly collapse = 'visibility:collapse;';
  readonly hidden = 'visibility:hidden;';
  readonly inherit = 'visibility:inherit;';
  readonly initial = 'visibility:initial;';
  readonly revert = 'visibility:revert;';
  readonly revertLayer = 'visibility:revert-layer;';
  readonly unset = 'visibility:unset;';
  readonly visible = 'visibility:visible;';
  constructor() {
    super('visibility');
  }
}

/** CSS 属性 white-space；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
 */
export class WhiteSpaceCss extends CssProperty<Property.WhiteSpace> {
  readonly breakSpaces = 'white-space:break-spaces;';
  readonly collapse = 'white-space:collapse;';
  readonly inherit = 'white-space:inherit;';
  readonly initial = 'white-space:initial;';
  readonly normal = 'white-space:normal;';
  readonly nowrap = 'white-space:nowrap;';
  readonly pre = 'white-space:pre;';
  readonly preLine = 'white-space:pre-line;';
  readonly preWrap = 'white-space:pre-wrap;';
  readonly preserve = 'white-space:preserve;';
  readonly preserveBreaks = 'white-space:preserve-breaks;';
  readonly preserveSpaces = 'white-space:preserve-spaces;';
  readonly revert = 'white-space:revert;';
  readonly revertLayer = 'white-space:revert-layer;';
  readonly unset = 'white-space:unset;';
  readonly wrap = 'white-space:wrap;';
  constructor() {
    super('white-space');
  }
}

/** CSS 属性 white-space-collapse；初始值 collapse。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
 */
export class WhiteSpaceCollapseCss extends CssProperty<Property.WhiteSpaceCollapse> {
  readonly breakSpaces = 'white-space-collapse:break-spaces;';
  readonly collapse = 'white-space-collapse:collapse;';
  readonly inherit = 'white-space-collapse:inherit;';
  readonly initial = 'white-space-collapse:initial;';
  readonly preserve = 'white-space-collapse:preserve;';
  readonly preserveBreaks = 'white-space-collapse:preserve-breaks;';
  readonly preserveSpaces = 'white-space-collapse:preserve-spaces;';
  readonly revert = 'white-space-collapse:revert;';
  readonly revertLayer = 'white-space-collapse:revert-layer;';
  readonly unset = 'white-space-collapse:unset;';
  constructor() {
    super('white-space-collapse');
  }
}

/** CSS 属性 widows；初始值 2。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
 */
export class WidowsCss extends CssProperty<Property.Widows> {
  readonly inherit = 'widows:inherit;';
  readonly initial = 'widows:initial;';
  readonly revert = 'widows:revert;';
  readonly revertLayer = 'widows:revert-layer;';
  readonly unset = 'widows:unset;';
  constructor() {
    super('widows');
  }
}

/** 宽度（CSS width）；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
 */
export class WidthCss extends LengthCssProperty<Property.Width> {
  readonly auto = 'width:auto;';
  readonly fitContent = 'width:fit-content;';
  readonly inherit = 'width:inherit;';
  readonly initial = 'width:initial;';
  readonly intrinsic = 'width:intrinsic;';
  readonly maxContent = 'width:max-content;';
  readonly minContent = 'width:min-content;';
  readonly minIntrinsic = 'width:min-intrinsic;';
  readonly revert = 'width:revert;';
  readonly revertLayer = 'width:revert-layer;';
  readonly unset = 'width:unset;';
  constructor() {
    super('width');
  }
}

/** CSS 属性 will-change；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
 */
export class WillChangeCss extends CssProperty<Property.WillChange> {
  readonly auto = 'will-change:auto;';
  readonly contents = 'will-change:contents;';
  readonly inherit = 'will-change:inherit;';
  readonly initial = 'will-change:initial;';
  readonly revert = 'will-change:revert;';
  readonly revertLayer = 'will-change:revert-layer;';
  readonly scrollPosition = 'will-change:scroll-position;';
  readonly unset = 'will-change:unset;';
  constructor() {
    super('will-change');
  }
}

/** CSS 属性 word-break；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
 */
export class WordBreakCss extends CssProperty<Property.WordBreak> {
  readonly autoPhrase = 'word-break:auto-phrase;';
  readonly breakAll = 'word-break:break-all;';
  readonly breakWord = 'word-break:break-word;';
  readonly inherit = 'word-break:inherit;';
  readonly initial = 'word-break:initial;';
  readonly keepAll = 'word-break:keep-all;';
  readonly normal = 'word-break:normal;';
  readonly revert = 'word-break:revert;';
  readonly revertLayer = 'word-break:revert-layer;';
  readonly unset = 'word-break:unset;';
  constructor() {
    super('word-break');
  }
}

/** CSS 属性 word-spacing；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
 */
export class WordSpacingCss extends LengthCssProperty<Property.WordSpacing> {
  readonly inherit = 'word-spacing:inherit;';
  readonly initial = 'word-spacing:initial;';
  readonly normal = 'word-spacing:normal;';
  readonly revert = 'word-spacing:revert;';
  readonly revertLayer = 'word-spacing:revert-layer;';
  readonly unset = 'word-spacing:unset;';
  constructor() {
    super('word-spacing');
  }
}

/** CSS 属性 word-wrap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
 */
export class WordWrapCss extends CssProperty<Property.WordWrap> {
  readonly breakWord = 'word-wrap:break-word;';
  readonly inherit = 'word-wrap:inherit;';
  readonly initial = 'word-wrap:initial;';
  readonly normal = 'word-wrap:normal;';
  readonly revert = 'word-wrap:revert;';
  readonly revertLayer = 'word-wrap:revert-layer;';
  readonly unset = 'word-wrap:unset;';
  constructor() {
    super('word-wrap');
  }
}

/** CSS 属性 writing-mode；初始值 horizontal-tb。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
 */
export class WritingModeCss extends CssProperty<Property.WritingMode> {
  readonly horizontalTb = 'writing-mode:horizontal-tb;';
  readonly inherit = 'writing-mode:inherit;';
  readonly initial = 'writing-mode:initial;';
  readonly revert = 'writing-mode:revert;';
  readonly revertLayer = 'writing-mode:revert-layer;';
  readonly sidewaysLr = 'writing-mode:sideways-lr;';
  readonly sidewaysRl = 'writing-mode:sideways-rl;';
  readonly unset = 'writing-mode:unset;';
  readonly verticalLr = 'writing-mode:vertical-lr;';
  readonly verticalRl = 'writing-mode:vertical-rl;';
  constructor() {
    super('writing-mode');
  }
}

/** CSS 属性 x；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
 */
export class XCss extends LengthCssProperty<Property.X> {
  readonly inherit = 'x:inherit;';
  readonly initial = 'x:initial;';
  readonly revert = 'x:revert;';
  readonly revertLayer = 'x:revert-layer;';
  readonly unset = 'x:unset;';
  constructor() {
    super('x');
  }
}

/** CSS 属性 y；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
 */
export class YCss extends LengthCssProperty<Property.Y> {
  readonly inherit = 'y:inherit;';
  readonly initial = 'y:initial;';
  readonly revert = 'y:revert;';
  readonly revertLayer = 'y:revert-layer;';
  readonly unset = 'y:unset;';
  constructor() {
    super('y');
  }
}

/** CSS 属性 z-index；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
 */
export class ZIndexCss extends CssProperty<Property.ZIndex> {
  readonly auto = 'z-index:auto;';
  readonly inherit = 'z-index:inherit;';
  readonly initial = 'z-index:initial;';
  readonly revert = 'z-index:revert;';
  readonly revertLayer = 'z-index:revert-layer;';
  readonly unset = 'z-index:unset;';
  constructor() {
    super('z-index');
  }
}

/** CSS 属性 zoom；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
 */
export class ZoomCss extends CssProperty<Property.Zoom> {
  readonly inherit = 'zoom:inherit;';
  readonly initial = 'zoom:initial;';
  readonly normal = 'zoom:normal;';
  readonly reset = 'zoom:reset;';
  readonly revert = 'zoom:revert;';
  readonly revertLayer = 'zoom:revert-layer;';
  readonly unset = 'zoom:unset;';
  constructor() {
    super('zoom');
  }
}
