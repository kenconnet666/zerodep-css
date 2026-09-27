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
  /**
   * 创建作者入口；系统属性链按首次访问惰性创建并共享。
   *
   * 系统属性实例只读。扩展语义成员时继承属性类，并在作者子类中覆盖对应字段。
   * @example
   * const s = new Css();
   * @example
   * s.display.flex // display:flex;
   */
  constructor() {
    initializeSystemProperties();
  }
  /**
   * 构造原生选择器、@ 规则或动画帧的嵌套声明片段。
   * @param selector 选择器、逗号分隔的选择器列表或 @ 规则字符串；& 代表当前规则。
   * @param parts 属性声明、嵌套片段、数组或条件空项；展开数组并省略条件空项。
   * @returns 嵌套声明片段；交给 css(...) 后才登记样式。
   * @example
   * s._selector('& > span', s.color.red)
   * @example
   * s._selector('@media (min-width: 48rem)', s.display.grid)
   */
  _selector(selector: CssSelector, ...parts: CssInput[]): string {
    return selectorRule(selector, parts);
  }
  /**
   * 指针悬停时应用；触屏环境可能没有持续悬停状态。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &:hover 嵌套规则片段，不立即登记样式。
   * @example
   * s._hover(s.color.red)
   */
  _hover(...parts: CssInput[]): string {
    return this._selector('&:hover', ...parts);
  }
  /**
   * 用户正在激活元素时应用，例如按住鼠标按钮期间。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &:active 嵌套规则片段，不立即登记样式。
   * @example
   * s._active(s.color.red)
   */
  _active(...parts: CssInput[]): string {
    return this._selector('&:active', ...parts);
  }
  /**
   * 元素自身获得焦点时应用。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &:focus 嵌套规则片段，不立即登记样式。
   * @example
   * s._focus(s.color.red)
   */
  _focus(...parts: CssInput[]): string {
    return this._selector('&:focus', ...parts);
  }
  /**
   * 元素获得焦点且浏览器判断应显示焦点指示时应用。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &:focus-visible 嵌套规则片段，不立即登记样式。
   * @example
   * s._focusVisible(s.color.red)
   */
  _focusVisible(...parts: CssInput[]): string {
    return this._selector('&:focus-visible', ...parts);
  }
  /**
   * 元素自身或其后代获得焦点时应用。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &:focus-within 嵌套规则片段，不立即登记样式。
   * @example
   * s._focusWithin(s.color.red)
   */
  _focusWithin(...parts: CssInput[]): string {
    return this._selector('&:focus-within', ...parts);
  }
  /**
   * 匹配原生禁用状态；仅设置 aria-disabled 不会匹配。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &:disabled 嵌套规则片段，不立即登记样式。
   * @example
   * s._disabled(s.color.red)
   */
  _disabled(...parts: CssInput[]): string {
    return this._selector('&:disabled', ...parts);
  }
  /**
   * 匹配原生选中状态，例如复选框或单选框被选中。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &:checked 嵌套规则片段，不立即登记样式。
   * @example
   * s._checked(s.color.red)
   */
  _checked(...parts: CssInput[]): string {
    return this._selector('&:checked', ...parts);
  }
  /**
   * 设置元素前置伪元素；通常还需要 content 才会生成盒子。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &::before 嵌套规则片段，不立即登记样式。
   * @example
   * s._before(s.color.red)
   */
  _before(...parts: CssInput[]): string {
    return this._selector('&::before', ...parts);
  }
  /**
   * 设置元素后置伪元素；通常还需要 content 才会生成盒子。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &::after 嵌套规则片段，不立即登记样式。
   * @example
   * s._after(s.color.red)
   */
  _after(...parts: CssInput[]): string {
    return this._selector('&::after', ...parts);
  }
  /**
   * 设置输入控件占位文字的样式，允许的属性受伪元素规则限制。
   * @param parts 属性声明或嵌套片段；允许数组及条件空项。
   * @returns &::placeholder 嵌套规则片段，不立即登记样式。
   * @example
   * s._placeholder(s.color.red)
   */
  _placeholder(...parts: CssInput[]): string {
    return this._selector('&::placeholder', ...parts);
  }
  /**
   * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。（accent-color）
   *
   * CSS 语法：`auto | <color>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  declare readonly accentColor: group0.AccentColorCss;
  /**
   * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。（align-content）
   *
   * CSS 语法：`normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  declare readonly alignContent: group0.AlignContentCss;
  /**
   * 设置容器内项目在交叉轴或块轴上的默认对齐方式。（align-items）
   *
   * CSS 语法：`normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ] | anchor-center`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  declare readonly alignItems: group0.AlignItemsCss;
  /**
   * 单独覆盖一个项目的交叉轴或块轴对齐方式。（align-self）
   *
   * CSS 语法：`auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  declare readonly alignSelf: group0.AlignSelfCss;
  /**
   * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。（align-tracks）
   *
   * CSS 语法：`[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
   */
  declare readonly alignTracks: group0.AlignTracksCss;
  /**
   * 选择行内或 SVG 文本参与对齐时使用的基线。（alignment-baseline）
   *
   * CSS 语法：`baseline | alphabetic | ideographic | middle | central | mathematical | text-before-edge | text-after-edge`。
   *
   * CSS 初始值：`baseline`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  declare readonly alignmentBaseline: group0.AlignmentBaselineCss;
  /**
   * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。（all）
   *
   * CSS 语法：`initial | inherit | unset | revert | revert-layer`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  declare readonly all: group0.AllCss;
  /**
   * 为元素声明锚点名称，供锚点定位的元素引用。（anchor-name）
   *
   * CSS 语法：`none | <dashed-ident>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  declare readonly anchorName: group0.AnchorNameCss;
  /**
   * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。（anchor-scope）
   *
   * CSS 语法：`none | all | <dashed-ident>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
   */
  declare readonly anchorScope: group0.AnchorScopeCss;
  /**
   * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。（animation）
   *
   * CSS 语法：`<single-animation>#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  declare readonly animation: group0.AnimationCss;
  /**
   * 设置动画效果与底层属性值的替换、叠加或累积方式。（animation-composition）
   *
   * CSS 语法：`<single-animation-composition>#`。
   *
   * CSS 初始值：`replace`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  declare readonly animationComposition: group0.AnimationCompositionCss;
  /**
   * 设置动画开始前的延迟；负值表示从动画中途开始播放。（animation-delay）
   *
   * CSS 语法：`<time>#`。
   *
   * CSS 初始值：`0s`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  declare readonly animationDelay: group0.AnimationDelayCss;
  /**
   * 设置动画按正向、反向或交替方向播放。（animation-direction）
   *
   * CSS 语法：`<single-animation-direction>#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  declare readonly animationDirection: group0.AnimationDirectionCss;
  /**
   * 设置动画完成一次循环的时长。（animation-duration）
   *
   * CSS 语法：`[ auto | <time [0s,∞]> ]#`。
   *
   * CSS 初始值：`0s`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  declare readonly animationDuration: group0.AnimationDurationCss;
  /**
   * 设置动画在有效播放区间之外是否应用关键帧样式。（animation-fill-mode）
   *
   * CSS 语法：`<single-animation-fill-mode>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  declare readonly animationFillMode: group0.AnimationFillModeCss;
  /**
   * 设置动画循环次数，或无限循环。（animation-iteration-count）
   *
   * CSS 语法：`<single-animation-iteration-count>#`。
   *
   * CSS 初始值：`1`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  declare readonly animationIterationCount: group0.AnimationIterationCountCss;
  /**
   * 选择要播放的 @keyframes 动画名称。（animation-name）
   *
   * CSS 语法：`[ none | <keyframes-name> ]#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  declare readonly animationName: group0.AnimationNameCss;
  /**
   * 控制动画运行或暂停，暂停后可从原位置继续。（animation-play-state）
   *
   * CSS 语法：`<single-animation-play-state>#`。
   *
   * CSS 初始值：`running`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  declare readonly animationPlayState: group0.AnimationPlayStateCss;
  /**
   * 设置动画附着到时间线的起止范围。（animation-range）
   *
   * CSS 语法：`[ <'animation-range-start'> <'animation-range-end'>? ]#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  declare readonly animationRange: group0.AnimationRangeCss;
  /**
   * 设置动画在时间线上的附着范围终点。（animation-range-end）
   *
   * CSS 语法：`[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  declare readonly animationRangeEnd: group0.AnimationRangeEndCss;
  /**
   * 设置动画在时间线上的附着范围起点。（animation-range-start）
   *
   * CSS 语法：`[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  declare readonly animationRangeStart: group0.AnimationRangeStartCss;
  /**
   * 选择驱动动画的时间线，例如文档时间或滚动进度。（animation-timeline）
   *
   * CSS 语法：`<single-animation-timeline>#`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  declare readonly animationTimeline: group0.AnimationTimelineCss;
  /**
   * 设置动画每个关键帧区间内进度变化的缓动函数。（animation-timing-function）
   *
   * CSS 语法：`<easing-function>#`。
   *
   * CSS 初始值：`ease`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  declare readonly animationTimingFunction: group0.AnimationTimingFunctionCss;
  /**
   * 控制元素是否采用平台原生控件外观。（appearance）
   *
   * CSS 语法：`none | auto | <compat-auto> | <compat-special>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  declare readonly appearance: group0.AppearanceCss;
  /**
   * 设置盒子的首选宽高比，参与自动尺寸计算。（aspect-ratio）
   *
   * CSS 语法：`auto || <ratio>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  declare readonly aspectRatio: group0.AspectRatioCss;
  /**
   * 对元素背后的图像区域应用模糊等滤镜，通常需要透明或半透明背景。（backdrop-filter）
   *
   * CSS 语法：`none | <filter-value-list>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  declare readonly backdropFilter: group1.BackdropFilterCss;
  /**
   * 控制经过三维变换后背向观察者的元素背面是否可见。（backface-visibility）
   *
   * CSS 语法：`visible | hidden`。
   *
   * CSS 初始值：`visible`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  declare readonly backfaceVisibility: group1.BackfaceVisibilityCss;
  /**
   * 集中设置背景颜色、图像、位置、尺寸、重复及绘制区域。（background）
   *
   * CSS 语法：`<bg-layer>#? , <final-bg-layer>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  declare readonly background: group1.BackgroundCss;
  /**
   * 设置背景图像相对于视口、元素或局部滚动内容的固定方式。（background-attachment）
   *
   * CSS 语法：`<attachment>#`。
   *
   * CSS 初始值：`scroll`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  declare readonly backgroundAttachment: group1.BackgroundAttachmentCss;
  /**
   * 设置背景图层彼此之间以及与背景色之间的混合模式。（background-blend-mode）
   *
   * CSS 语法：`<blend-mode>#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  declare readonly backgroundBlendMode: group1.BackgroundBlendModeCss;
  /**
   * 设置背景允许绘制到的边界区域。（background-clip）
   *
   * CSS 语法：`<bg-clip>#`。
   *
   * CSS 初始值：`border-box`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  declare readonly backgroundClip: group1.BackgroundClipCss;
  /**
   * 设置元素背景颜色，位于背景图像下方。（background-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`transparent`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  declare readonly backgroundColor: group1.BackgroundColorCss;
  /**
   * 设置一个或多个背景图像或渐变图层。（background-image）
   *
   * CSS 语法：`<bg-image>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  declare readonly backgroundImage: group1.BackgroundImageCss;
  /**
   * 设置背景图像定位所依据的盒子区域。（background-origin）
   *
   * CSS 语法：`<visual-box>#`。
   *
   * CSS 初始值：`padding-box`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  declare readonly backgroundOrigin: group1.BackgroundOriginCss;
  /**
   * 设置背景图像在定位区域内的位置。（background-position）
   *
   * CSS 语法：`<bg-position>#`。
   *
   * CSS 初始值：`0% 0%`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  declare readonly backgroundPosition: group1.BackgroundPositionCss;
  /**
   * 设置背景图像的水平位置。（background-position-x）
   *
   * CSS 语法：`[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`。
   *
   * CSS 初始值：`0%`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  declare readonly backgroundPositionX: group1.BackgroundPositionXCss;
  /**
   * 设置背景图像的垂直位置。（background-position-y）
   *
   * CSS 语法：`[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`。
   *
   * CSS 初始值：`0%`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  declare readonly backgroundPositionY: group1.BackgroundPositionYCss;
  /**
   * 设置背景图像在水平和垂直方向上的重复方式。（background-repeat）
   *
   * CSS 语法：`<repeat-style>#`。
   *
   * CSS 初始值：`repeat`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  declare readonly backgroundRepeat: group1.BackgroundRepeatCss;
  /**
   * 设置背景图像尺寸，以及覆盖或完整容纳图像的缩放方式。（background-size）
   *
   * CSS 语法：`<bg-size>#`。
   *
   * CSS 初始值：`auto auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  declare readonly backgroundSize: group1.BackgroundSizeCss;
  /**
   * 使 SVG 文本基线相对于其基准位置偏移。（baseline-shift）
   *
   * CSS 语法：`<length-percentage> | sub | super | baseline`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
   */
  declare readonly baselineShift: group1.BaselineShiftCss;
  /**
   * 设置逻辑块轴尺寸；水平书写时通常对应高度。（block-size）
   *
   * CSS 语法：`<'width'>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  declare readonly blockSize: group1.BlockSizeCss;
  /**
   * 同时设置四边边框的宽度、线型和颜色。（border）
   *
   * CSS 语法：`<line-width> || <line-style> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  declare readonly border: group1.BorderCss;
  /**
   * 设置逻辑块轴起始侧和结束侧的边框。（border-block）
   *
   * CSS 语法：`<'border-block-start'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  declare readonly borderBlock: group1.BorderBlockCss;
  /**
   * 设置逻辑块轴两侧边框颜色。（border-block-color）
   *
   * CSS 语法：`<'border-top-color'>{1,2}`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  declare readonly borderBlockColor: group1.BorderBlockColorCss;
  /**
   * 设置逻辑块轴结束侧边框的宽度、线型和颜色。（border-block-end）
   *
   * CSS 语法：`<'border-top-width'> || <'border-top-style'> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  declare readonly borderBlockEnd: group1.BorderBlockEndCss;
  /**
   * 设置逻辑块轴结束侧的边框颜色。（border-block-end-color）
   *
   * CSS 语法：`<'border-top-color'>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  declare readonly borderBlockEndColor: group1.BorderBlockEndColorCss;
  /**
   * 设置逻辑块轴结束侧的边框线型。（border-block-end-style）
   *
   * CSS 语法：`<'border-top-style'>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  declare readonly borderBlockEndStyle: group1.BorderBlockEndStyleCss;
  /**
   * 设置逻辑块轴结束侧的边框宽度。（border-block-end-width）
   *
   * CSS 语法：`<'border-top-width'>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  declare readonly borderBlockEndWidth: group1.BorderBlockEndWidthCss;
  /**
   * 设置逻辑块轴起始侧边框的宽度、线型和颜色。（border-block-start）
   *
   * CSS 语法：`<'border-top-width'> || <'border-top-style'> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  declare readonly borderBlockStart: group1.BorderBlockStartCss;
  /**
   * 设置逻辑块轴起始侧的边框颜色。（border-block-start-color）
   *
   * CSS 语法：`<'border-top-color'>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  declare readonly borderBlockStartColor: group1.BorderBlockStartColorCss;
  /**
   * 设置逻辑块轴起始侧的边框线型。（border-block-start-style）
   *
   * CSS 语法：`<'border-top-style'>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  declare readonly borderBlockStartStyle: group1.BorderBlockStartStyleCss;
  /**
   * 设置逻辑块轴起始侧的边框宽度。（border-block-start-width）
   *
   * CSS 语法：`<'border-top-width'>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  declare readonly borderBlockStartWidth: group1.BorderBlockStartWidthCss;
  /**
   * 设置逻辑块轴两侧的边框线型。（border-block-style）
   *
   * CSS 语法：`<'border-top-style'>{1,2}`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  declare readonly borderBlockStyle: group1.BorderBlockStyleCss;
  /**
   * 设置逻辑块轴两侧的边框宽度。（border-block-width）
   *
   * CSS 语法：`<'border-top-width'>{1,2}`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  declare readonly borderBlockWidth: group1.BorderBlockWidthCss;
  /**
   * 设置下边框的宽度、线型和颜色。（border-bottom）
   *
   * CSS 语法：`<line-width> || <line-style> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  declare readonly borderBottom: group1.BorderBottomCss;
  /**
   * 设置下边框颜色。（border-bottom-color）
   *
   * CSS 语法：`<'border-top-color'>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  declare readonly borderBottomColor: group1.BorderBottomColorCss;
  /**
   * 设置左下角边框的圆角半径。（border-bottom-left-radius）
   *
   * CSS 语法：`<length-percentage [0,∞]>{1,2}`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  declare readonly borderBottomLeftRadius: group1.BorderBottomLeftRadiusCss;
  /**
   * 设置右下角边框的圆角半径。（border-bottom-right-radius）
   *
   * CSS 语法：`<length-percentage [0,∞]>{1,2}`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  declare readonly borderBottomRightRadius: group1.BorderBottomRightRadiusCss;
  /**
   * 设置下边框线型。（border-bottom-style）
   *
   * CSS 语法：`<line-style>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  declare readonly borderBottomStyle: group1.BorderBottomStyleCss;
  /**
   * 设置下边框宽度。（border-bottom-width）
   *
   * CSS 语法：`<line-width>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  declare readonly borderBottomWidth: group1.BorderBottomWidthCss;
  /**
   * 设置表格相邻单元格边框合并还是分离。（border-collapse）
   *
   * CSS 语法：`separate | collapse`。
   *
   * CSS 初始值：`separate`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  declare readonly borderCollapse: group1.BorderCollapseCss;
  /**
   * 设置四边边框颜色，支持按上、右、下、左顺序简写。（border-color）
   *
   * CSS 语法：`<color>{1,4}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  declare readonly borderColor: group1.BorderColorCss;
  /**
   * 设置逻辑块轴结束侧与行内轴结束侧相交角的圆角。（border-end-end-radius）
   *
   * CSS 语法：`<'border-top-left-radius'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  declare readonly borderEndEndRadius: group1.BorderEndEndRadiusCss;
  /**
   * 设置逻辑块轴结束侧与行内轴起始侧相交角的圆角。（border-end-start-radius）
   *
   * CSS 语法：`<'border-top-left-radius'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  declare readonly borderEndStartRadius: group1.BorderEndStartRadiusCss;
  /**
   * 设置用作边框的图像及其切片、宽度、外扩和重复方式。（border-image）
   *
   * CSS 语法：`<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  declare readonly borderImage: group1.BorderImageCss;
  /**
   * 设置边框图像超出边框盒的距离。（border-image-outset）
   *
   * CSS 语法：`[ <length [0,∞]> | <number [0,∞]> ]{1,4}  `。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  declare readonly borderImageOutset: group1.BorderImageOutsetCss;
  /**
   * 设置边框图像切片沿边框的重复或拉伸方式。（border-image-repeat）
   *
   * CSS 语法：`[ stretch | repeat | round | space ]{1,2}`。
   *
   * CSS 初始值：`stretch`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  declare readonly borderImageRepeat: group1.BorderImageRepeatCss;
  /**
   * 设置边框图像的切片位置及是否填充中间区域。（border-image-slice）
   *
   * CSS 语法：`[ <number [0,∞]> | <percentage [0,∞]> ]{1,4}  && fill?`。
   *
   * CSS 初始值：`100%`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  declare readonly borderImageSlice: group1.BorderImageSliceCss;
  /**
   * 指定边框使用的图像或渐变。（border-image-source）
   *
   * CSS 语法：`none | <image>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  declare readonly borderImageSource: group1.BorderImageSourceCss;
  /**
   * 设置边框图像各边的绘制宽度。（border-image-width）
   *
   * CSS 语法：`[ <length-percentage [0,∞]> | <number [0,∞]> | auto ]{1,4}`。
   *
   * CSS 初始值：`1`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  declare readonly borderImageWidth: group1.BorderImageWidthCss;
  /**
   * 设置逻辑行内轴起始侧和结束侧的边框。（border-inline）
   *
   * CSS 语法：`<'border-block-start'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  declare readonly borderInline: group1.BorderInlineCss;
  /**
   * 设置逻辑行内轴两侧边框颜色。（border-inline-color）
   *
   * CSS 语法：`<'border-top-color'>{1,2}`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  declare readonly borderInlineColor: group1.BorderInlineColorCss;
  /**
   * 设置逻辑行内轴结束侧边框的宽度、线型和颜色。（border-inline-end）
   *
   * CSS 语法：`<'border-top-width'> || <'border-top-style'> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  declare readonly borderInlineEnd: group1.BorderInlineEndCss;
  /**
   * 设置逻辑行内轴结束侧边框颜色。（border-inline-end-color）
   *
   * CSS 语法：`<'border-top-color'>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  declare readonly borderInlineEndColor: group1.BorderInlineEndColorCss;
  /**
   * 设置逻辑行内轴结束侧边框线型。（border-inline-end-style）
   *
   * CSS 语法：`<'border-top-style'>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  declare readonly borderInlineEndStyle: group1.BorderInlineEndStyleCss;
  /**
   * 设置逻辑行内轴结束侧边框宽度。（border-inline-end-width）
   *
   * CSS 语法：`<'border-top-width'>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  declare readonly borderInlineEndWidth: group1.BorderInlineEndWidthCss;
  /**
   * 设置逻辑行内轴起始侧边框的宽度、线型和颜色。（border-inline-start）
   *
   * CSS 语法：`<'border-top-width'> || <'border-top-style'> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  declare readonly borderInlineStart: group1.BorderInlineStartCss;
  /**
   * 设置逻辑行内轴起始侧边框颜色。（border-inline-start-color）
   *
   * CSS 语法：`<'border-top-color'>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  declare readonly borderInlineStartColor: group1.BorderInlineStartColorCss;
  /**
   * 设置逻辑行内轴起始侧边框线型。（border-inline-start-style）
   *
   * CSS 语法：`<'border-top-style'>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  declare readonly borderInlineStartStyle: group1.BorderInlineStartStyleCss;
  /**
   * 设置逻辑行内轴起始侧边框宽度。（border-inline-start-width）
   *
   * CSS 语法：`<'border-top-width'>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  declare readonly borderInlineStartWidth: group1.BorderInlineStartWidthCss;
  /**
   * 设置逻辑行内轴两侧边框线型。（border-inline-style）
   *
   * CSS 语法：`<'border-top-style'>{1,2}`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  declare readonly borderInlineStyle: group1.BorderInlineStyleCss;
  /**
   * 设置逻辑行内轴两侧边框宽度。（border-inline-width）
   *
   * CSS 语法：`<'border-top-width'>{1,2}`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  declare readonly borderInlineWidth: group1.BorderInlineWidthCss;
  /**
   * 设置左边框的宽度、线型和颜色。（border-left）
   *
   * CSS 语法：`<line-width> || <line-style> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  declare readonly borderLeft: group1.BorderLeftCss;
  /**
   * 设置左边框颜色。（border-left-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  declare readonly borderLeftColor: group1.BorderLeftColorCss;
  /**
   * 设置左边框线型。（border-left-style）
   *
   * CSS 语法：`<line-style>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  declare readonly borderLeftStyle: group1.BorderLeftStyleCss;
  /**
   * 设置左边框宽度。（border-left-width）
   *
   * CSS 语法：`<line-width>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  declare readonly borderLeftWidth: group1.BorderLeftWidthCss;
  /**
   * 设置四个角的圆角半径；斜杠语法可分别指定水平和垂直半径。（border-radius）
   *
   * CSS 语法：`<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  declare readonly borderRadius: group1.BorderRadiusCss;
  /**
   * 设置右边框的宽度、线型和颜色。（border-right）
   *
   * CSS 语法：`<line-width> || <line-style> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  declare readonly borderRight: group1.BorderRightCss;
  /**
   * 设置右边框颜色。（border-right-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  declare readonly borderRightColor: group1.BorderRightColorCss;
  /**
   * 设置右边框线型。（border-right-style）
   *
   * CSS 语法：`<line-style>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  declare readonly borderRightStyle: group1.BorderRightStyleCss;
  /**
   * 设置右边框宽度。（border-right-width）
   *
   * CSS 语法：`<line-width>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  declare readonly borderRightWidth: group1.BorderRightWidthCss;
  /**
   * 设置分离边框模型下表格单元格之间的水平和垂直间距。（border-spacing）
   *
   * CSS 语法：`<length>{1,2}`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  declare readonly borderSpacing: group1.BorderSpacingCss;
  /**
   * 设置逻辑块轴起始侧与行内轴结束侧相交角的圆角。（border-start-end-radius）
   *
   * CSS 语法：`<'border-top-left-radius'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  declare readonly borderStartEndRadius: group1.BorderStartEndRadiusCss;
  /**
   * 设置逻辑块轴起始侧与行内轴起始侧相交角的圆角。（border-start-start-radius）
   *
   * CSS 语法：`<'border-top-left-radius'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  declare readonly borderStartStartRadius: group1.BorderStartStartRadiusCss;
  /**
   * 设置四边边框线型。（border-style）
   *
   * CSS 语法：`<line-style>{1,4}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  declare readonly borderStyle: group1.BorderStyleCss;
  /**
   * 设置上边框的宽度、线型和颜色。（border-top）
   *
   * CSS 语法：`<line-width> || <line-style> || <color>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  declare readonly borderTop: group1.BorderTopCss;
  /**
   * 设置上边框颜色。（border-top-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  declare readonly borderTopColor: group1.BorderTopColorCss;
  /**
   * 设置左上角边框的圆角半径。（border-top-left-radius）
   *
   * CSS 语法：`<length-percentage [0,∞]>{1,2}`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  declare readonly borderTopLeftRadius: group1.BorderTopLeftRadiusCss;
  /**
   * 设置右上角边框的圆角半径。（border-top-right-radius）
   *
   * CSS 语法：`<length-percentage [0,∞]>{1,2}`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  declare readonly borderTopRightRadius: group1.BorderTopRightRadiusCss;
  /**
   * 设置上边框线型。（border-top-style）
   *
   * CSS 语法：`<line-style>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  declare readonly borderTopStyle: group1.BorderTopStyleCss;
  /**
   * 设置上边框宽度。（border-top-width）
   *
   * CSS 语法：`<line-width>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  declare readonly borderTopWidth: group1.BorderTopWidthCss;
  /**
   * 设置四边边框宽度；可见边框通常还需要非 none 的线型。（border-width）
   *
   * CSS 语法：`<line-width>{1,4}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  declare readonly borderWidth: group1.BorderWidthCss;
  /**
   * 设置定位元素相对于其定位参照的下侧偏移。（bottom）
   *
   * CSS 语法：`auto | <length-percentage> | <anchor()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  declare readonly bottom: group1.BottomCss;
  /**
   * 设置盒子被分成多行、多栏或多页时装饰如何绘制。（box-decoration-break）
   *
   * CSS 语法：`slice | clone`。
   *
   * CSS 初始值：`slice`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  declare readonly boxDecorationBreak: group1.BoxDecorationBreakCss;
  /**
   * 设置盒子的外部或内部阴影，可叠加多层。（box-shadow）
   *
   * CSS 语法：`none | <shadow>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  declare readonly boxShadow: group1.BoxShadowCss;
  /**
   * 决定 width、height 等尺寸是否包含内边距和边框。（box-sizing）
   *
   * CSS 语法：`content-box | border-box`。
   *
   * CSS 初始值：`content-box`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  declare readonly boxSizing: group1.BoxSizingCss;
  /**
   * 设置元素之后的分页、分栏或区域分片行为。（break-after）
   *
   * CSS 语法：`auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  declare readonly breakAfter: group1.BreakAfterCss;
  /**
   * 设置元素之前的分页、分栏或区域分片行为。（break-before）
   *
   * CSS 语法：`auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  declare readonly breakBefore: group1.BreakBeforeCss;
  /**
   * 设置元素内部是否允许分页、分栏或区域分片。（break-inside）
   *
   * CSS 语法：`auto | avoid | avoid-page | avoid-column | avoid-region`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  declare readonly breakInside: group1.BreakInsideCss;
  /**
   * 设置表格标题相对于表格的放置侧。（caption-side）
   *
   * CSS 语法：`top | bottom`。
   *
   * CSS 初始值：`top`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  declare readonly captionSide: group2.CaptionSideCss;
  /**
   * 集中设置文本插入光标的颜色和形状。（caret）
   *
   * CSS 语法：`<'caret-color'> || <'caret-shape'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
   */
  declare readonly caret: group2.CaretCss;
  /**
   * 设置可编辑内容中的文本插入光标颜色。（caret-color）
   *
   * CSS 语法：`auto | <color>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  declare readonly caretColor: group2.CaretColorCss;
  /**
   * 设置文本插入光标的形状。（caret-shape）
   *
   * CSS 语法：`auto | bar | block | underscore`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  declare readonly caretShape: group2.CaretShapeCss;
  /**
   * 要求元素避让指定侧的前置浮动元素。（clear）
   *
   * CSS 语法：`none | left | right | both | inline-start | inline-end`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  declare readonly clear: group2.ClearCss;
  /**
   * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。（clip）
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
   */
  declare readonly clip: group2.ClipCss;
  /**
   * 通过基本形状、路径或引用裁剪元素的可见区域。（clip-path）
   *
   * CSS 语法：`<clip-source> | [ <basic-shape> || <geometry-box> ] | none`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  declare readonly clipPath: group2.ClipPathCss;
  /**
   * 设置 SVG 裁剪路径判断内部区域所用的填充规则。（clip-rule）
   *
   * CSS 语法：`nonzero | evenodd`。
   *
   * CSS 初始值：`nonzero`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  declare readonly clipRule: group2.ClipRuleCss;
  /**
   * 设置文字前景色，同时作为 currentColor 的来源。（color）
   *
   * 改变文字和 currentColor 的来源，不会自动改变背景。颜色函数方法返回完整 color 声明。
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`canvastext`（不同于浏览器默认样式表）。
   * @example
   * s.color.rgb(255, 0, 0, 0.5) // color:rgb(255 0 0 / 0.5);
   * @example
   * s.color.oklch(0.7, 0.15, 250) // color:oklch(0.7 0.15 250);
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  declare readonly color: group2.ColorCss;
  /**
   * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。（color-adjust）
   *
   * CSS 语法：`economy | exact`。
   *
   * CSS 初始值：`economy`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  declare readonly colorAdjust: group2.ColorAdjustCss;
  /**
   * 设置 SVG 图形颜色插值所用的色彩空间。（color-interpolation）
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
   */
  declare readonly colorInterpolation: group2.ColorInterpolationCss;
  /**
   * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。（color-interpolation-filters）
   *
   * CSS 语法：`auto | sRGB | linearRGB`。
   *
   * CSS 初始值：`linearRGB`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  declare readonly colorInterpolationFilters: group2.ColorInterpolationFiltersCss;
  /**
   * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。（color-rendering）
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
   */
  declare readonly colorRendering: group2.ColorRenderingCss;
  /**
   * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。（color-scheme）
   *
   * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
   *
   * CSS 语法：`normal | [ light | dark | <custom-ident> ]+ && only?`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  declare readonly colorScheme: group2.ColorSchemeCss;
  /**
   * 设置多栏布局的目标栏数。（column-count）
   *
   * CSS 语法：`<integer> | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  declare readonly columnCount: group2.ColumnCountCss;
  /**
   * 设置多栏内容顺序填充还是尽量均衡栏高。（column-fill）
   *
   * CSS 语法：`auto | balance`。
   *
   * CSS 初始值：`balance`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  declare readonly columnFill: group2.ColumnFillCss;
  /**
   * 设置布局中相邻列之间的间距。（column-gap）
   *
   * CSS 语法：`normal | <length-percentage>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  declare readonly columnGap: group2.ColumnGapCss;
  /**
   * 设置多栏之间分隔线的宽度、线型和颜色。（column-rule）
   *
   * CSS 语法：`<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  declare readonly columnRule: group2.ColumnRuleCss;
  /**
   * 设置多栏分隔线的颜色。（column-rule-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  declare readonly columnRuleColor: group2.ColumnRuleColorCss;
  /**
   * 设置多栏分隔线的线型。（column-rule-style）
   *
   * CSS 语法：`<'border-style'>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  declare readonly columnRuleStyle: group2.ColumnRuleStyleCss;
  /**
   * 设置多栏分隔线的宽度。（column-rule-width）
   *
   * CSS 语法：`<'border-width'>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  declare readonly columnRuleWidth: group2.ColumnRuleWidthCss;
  /**
   * 设置多栏布局中的元素是否跨越所有栏。（column-span）
   *
   * CSS 语法：`none | all`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  declare readonly columnSpan: group2.ColumnSpanCss;
  /**
   * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。（column-width）
   *
   * CSS 语法：`<length> | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  declare readonly columnWidth: group2.ColumnWidthCss;
  /**
   * 同时设置多栏布局的首选栏宽和目标栏数。（columns）
   *
   * CSS 语法：`<'column-width'> || <'column-count'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  declare readonly columns: group2.ColumnsCss;
  /**
   * 声明尺寸、布局、绘制或样式隔离，限制子树对外部的影响。（contain）
   *
   * CSS 语法：`none | strict | content | [ [ size || inline-size ] || layout || style || paint ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  declare readonly contain: group2.ContainCss;
  /**
   * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。（contain-intrinsic-block-size）
   *
   * CSS 语法：`auto? [ none | <length> ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  declare readonly containIntrinsicBlockSize: group2.ContainIntrinsicBlockSizeCss;
  /**
   * 设置高度隔离或跳过内容渲染时使用的替代内部高度。（contain-intrinsic-height）
   *
   * CSS 语法：`auto? [ none | <length> ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  declare readonly containIntrinsicHeight: group2.ContainIntrinsicHeightCss;
  /**
   * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。（contain-intrinsic-inline-size）
   *
   * CSS 语法：`auto? [ none | <length> ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  declare readonly containIntrinsicInlineSize: group2.ContainIntrinsicInlineSizeCss;
  /**
   * 集中设置尺寸隔离时使用的替代内部宽高。（contain-intrinsic-size）
   *
   * CSS 语法：`[ auto? [ none | <length> ] ]{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  declare readonly containIntrinsicSize: group2.ContainIntrinsicSizeCss;
  /**
   * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。（contain-intrinsic-width）
   *
   * CSS 语法：`auto? [ none | <length> ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  declare readonly containIntrinsicWidth: group2.ContainIntrinsicWidthCss;
  /**
   * 同时声明查询容器的名称和类型。（container）
   *
   * CSS 语法：`<'container-name'> [ / <'container-type'> ]?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  declare readonly container: group2.ContainerCss;
  /**
   * 为查询容器命名，供 @container 条件规则选择。（container-name）
   *
   * CSS 语法：`none | <custom-ident>+`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  declare readonly containerName: group2.ContainerNameCss;
  /**
   * 建立指定类型的查询容器，并施加所需的隔离行为。（container-type）
   *
   * CSS 语法：`normal | [ [ size | inline-size ] || scroll-state ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  declare readonly containerType: group2.ContainerTypeCss;
  /**
   * 设置生成内容、替换内容或伪元素的内容。（content）
   *
   * CSS 语法：`normal | none | [ <content-replacement> | <content-list> ] [ / [ <string> | <counter> | <attr()> ]+ ]?`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  declare readonly content: group2.ContentCss;
  /**
   * 控制是否渲染元素内容，并允许浏览器跳过暂时不可见的子树。（content-visibility）
   *
   * CSS 语法：`visible | auto | hidden`。
   *
   * CSS 初始值：`visible`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  declare readonly contentVisibility: group2.ContentVisibilityCss;
  /**
   * 增加或减少指定 CSS 计数器的值。（counter-increment）
   *
   * CSS 语法：`[ <counter-name> <integer>? ]+ | none`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  declare readonly counterIncrement: group2.CounterIncrementCss;
  /**
   * 创建或重置 CSS 计数器。（counter-reset）
   *
   * CSS 语法：`[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  declare readonly counterReset: group2.CounterResetCss;
  /**
   * 设置已有 CSS 计数器的值，必要时创建计数器。（counter-set）
   *
   * CSS 语法：`[ <counter-name> <integer>? ]+ | none`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  declare readonly counterSet: group2.CounterSetCss;
  /**
   * 设置指针位于元素上方时显示的光标。（cursor）
   *
   * CSS 语法：`[ [ <url> [ <x> <y> ]? , ]* <cursor-predefined> ]`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  declare readonly cursor: group2.CursorCss;
  /**
   * 设置 SVG 圆或椭圆中心的横坐标。（cx）
   *
   * CSS 语法：`<length> | <percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  declare readonly cx: group2.CxCss;
  /**
   * 设置 SVG 圆或椭圆中心的纵坐标。（cy）
   *
   * CSS 语法：`<length> | <percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  declare readonly cy: group2.CyCss;
  /**
   * 设置 SVG path 元素的路径数据。（d）
   *
   * CSS 语法：`none | path(<string>)`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  declare readonly d: group2.DCss;
  /**
   * 设置文本基本方向，参与双向文本及部分布局计算。（direction）
   *
   * CSS 语法：`ltr | rtl`。
   *
   * CSS 初始值：`ltr`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  declare readonly direction: group2.DirectionCss;
  /**
   * 设置元素的外部显示类型，以及子元素使用的内部布局方式。（display）
   *
   * 外部显示类型决定元素如何参与父级布局，内部显示类型决定如何排列子元素。
   *
   * CSS 语法：`[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`。
   *
   * CSS 初始值：`inline`（不同于浏览器默认样式表）。
   * @example
   * css(s.display.flex, s.alignItems.center, s.gap.rem(0.5))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  declare readonly display: group2.DisplayCss;
  /**
   * 选择 SVG 文本布局的主导基线及基线表。（dominant-baseline）
   *
   * CSS 语法：`auto | text-bottom | alphabetic | ideographic | middle | central | mathematical | hanging | text-top`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  declare readonly dominantBaseline: group2.DominantBaselineCss;
  /**
   * 控制分离边框表格中空单元格的边框和背景是否绘制。（empty-cells）
   *
   * CSS 语法：`show | hide`。
   *
   * CSS 初始值：`show`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  declare readonly emptyCells: group2.EmptyCellsCss;
  /**
   * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。（field-sizing）
   *
   * CSS 语法：`content | fixed`。
   *
   * CSS 初始值：`fixed`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  declare readonly fieldSizing: group2.FieldSizingCss;
  /**
   * 设置 SVG 图形内部的填充绘制方式。（fill）
   *
   * CSS 语法：`<paint>`。
   *
   * CSS 初始值：`black`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  declare readonly fill: group2.FillCss;
  /**
   * 设置 SVG 填充的不透明度，不影响描边。（fill-opacity）
   *
   * CSS 语法：`<'opacity'>`。
   *
   * CSS 初始值：`1`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  declare readonly fillOpacity: group2.FillOpacityCss;
  /**
   * 设置复杂 SVG 路径的内部区域判定规则。（fill-rule）
   *
   * CSS 语法：`nonzero | evenodd`。
   *
   * CSS 初始值：`nonzero`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  declare readonly fillRule: group2.FillRuleCss;
  /**
   * 对元素的最终图像应用模糊、亮度等滤镜。（filter）
   *
   * CSS 语法：`none | <filter-value-list>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  declare readonly filter: group2.FilterCss;
  /**
   * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。（flex）
   *
   * CSS 语法：`none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  declare readonly flex: group2.FlexCss;
  /**
   * 设置弹性项目分配剩余空间之前的主轴基础尺寸。（flex-basis）
   *
   * CSS 语法：`content | <'width'>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  declare readonly flexBasis: group2.FlexBasisCss;
  /**
   * 设置弹性容器的主轴方向及项目排列方向。（flex-direction）
   *
   * CSS 语法：`row | row-reverse | column | column-reverse`。
   *
   * CSS 初始值：`row`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  declare readonly flexDirection: group2.FlexDirectionCss;
  /**
   * 同时设置弹性布局的主轴方向和换行方式。（flex-flow）
   *
   * CSS 语法：`<'flex-direction'> || <'flex-wrap'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  declare readonly flexFlow: group2.FlexFlowCss;
  /**
   * 设置弹性项目分配正剩余空间时的增长系数。（flex-grow）
   *
   * CSS 语法：`<number>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  declare readonly flexGrow: group2.FlexGrowCss;
  /**
   * 设置弹性项目空间不足时的收缩系数。（flex-shrink）
   *
   * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
   *
   * CSS 语法：`<number>`。
   *
   * CSS 初始值：`1`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  declare readonly flexShrink: group2.FlexShrinkCss;
  /**
   * 设置弹性项目是否换行，以及多行的排列方向。（flex-wrap）
   *
   * CSS 语法：`nowrap | wrap | wrap-reverse`。
   *
   * CSS 初始值：`nowrap`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  declare readonly flexWrap: group2.FlexWrapCss;
  /**
   * 将元素浮动到指定侧，使相邻行内内容围绕它排列。（float）
   *
   * CSS 语法：`left | right | none | inline-start | inline-end`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  declare readonly float: group2.FloatCss;
  /**
   * 设置 SVG feFlood 或相关滤镜的洪泛颜色。（flood-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`black`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  declare readonly floodColor: group2.FloodColorCss;
  /**
   * 设置 SVG 洪泛滤镜颜色的不透明度。（flood-opacity）
   *
   * CSS 语法：`<'opacity'>`。
   *
   * CSS 初始值：`black`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  declare readonly floodOpacity: group2.FloodOpacityCss;
  /**
   * 集中设置字体样式、粗细、大小、行高和字体族等信息。（font）
   *
   * CSS 语法：`[ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  declare readonly font: group2.FontCss;
  /**
   * 设置按优先级排列的字体族及通用字体回退。（font-family）
   *
   * CSS 语法：`[ <family-name> | <generic-family> ]#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  declare readonly fontFamily: group2.FontFamilyCss;
  /**
   * 通过 OpenType 特性标签控制字体的底层排版功能。（font-feature-settings）
   *
   * CSS 语法：`normal | <feature-tag-value>#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  declare readonly fontFeatureSettings: group2.FontFeatureSettingsCss;
  /**
   * 设置是否应用字体提供的字偶间距调整。（font-kerning）
   *
   * CSS 语法：`auto | normal | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  declare readonly fontKerning: group2.FontKerningCss;
  /**
   * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。（font-language-override）
   *
   * CSS 语法：`normal | <string>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  declare readonly fontLanguageOverride: group2.FontLanguageOverrideCss;
  /**
   * 控制支持光学尺寸轴的字体是否按字号优化字形。（font-optical-sizing）
   *
   * CSS 语法：`auto | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  declare readonly fontOpticalSizing: group2.FontOpticalSizingCss;
  /**
   * 选择或覆盖彩色字体使用的调色板。（font-palette）
   *
   * CSS 语法：`normal | light | dark | <palette-identifier> | <palette-mix()>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  declare readonly fontPalette: group2.FontPaletteCss;
  /**
   * 设置字体大小，也影响 em 等相对单位的计算。（font-size）
   *
   * CSS 语法：`<absolute-size> | <relative-size> | <length-percentage [0,∞]> | math`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  declare readonly fontSize: group2.FontSizeCss;
  /**
   * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。（font-size-adjust）
   *
   * CSS 语法：`none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  declare readonly fontSizeAdjust: group2.FontSizeAdjustCss;
  /**
   * 控制字体平滑的非标准属性；使用前核对目标浏览器。（font-smooth）
   *
   * CSS 语法：`auto | never | always | <absolute-size> | <length>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  declare readonly fontSmooth: group2.FontSmoothCss;
  /**
   * 选择字体的宽窄字面；font-width 是其较新的名称。（font-stretch）
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
   */
  declare readonly fontStretch: group2.FontStretchCss;
  /**
   * 选择正常、斜体或倾斜字体样式。（font-style）
   *
   * CSS 语法：`normal | italic | oblique <angle>?`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  declare readonly fontStyle: group2.FontStyleCss;
  /**
   * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。（font-synthesis）
   *
   * CSS 语法：`none | [ weight || style || small-caps || position]`。
   *
   * CSS 初始值：`weight style small-caps position `（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  declare readonly fontSynthesis: group2.FontSynthesisCss;
  /**
   * 控制浏览器是否可以合成上标和下标字形。（font-synthesis-position）
   *
   * CSS 语法：`auto | none`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  declare readonly fontSynthesisPosition: group2.FontSynthesisPositionCss;
  /**
   * 控制浏览器是否可以合成小型大写字形。（font-synthesis-small-caps）
   *
   * CSS 语法：`auto | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  declare readonly fontSynthesisSmallCaps: group2.FontSynthesisSmallCapsCss;
  /**
   * 控制浏览器是否可以合成倾斜字体。（font-synthesis-style）
   *
   * CSS 语法：`auto | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  declare readonly fontSynthesisStyle: group2.FontSynthesisStyleCss;
  /**
   * 控制浏览器是否可以合成加粗字体。（font-synthesis-weight）
   *
   * CSS 语法：`auto | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  declare readonly fontSynthesisWeight: group2.FontSynthesisWeightCss;
  /**
   * 集中设置字体的连字、大小写、数字及其他变体。（font-variant）
   *
   * CSS 语法：`normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  declare readonly fontVariant: group2.FontVariantCss;
  /**
   * 选择字体提供的替代字形。（font-variant-alternates）
   *
   * CSS 语法：`normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  declare readonly fontVariantAlternates: group2.FontVariantAlternatesCss;
  /**
   * 设置小型大写等大小写字形变体。（font-variant-caps）
   *
   * CSS 语法：`normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  declare readonly fontVariantCaps: group2.FontVariantCapsCss;
  /**
   * 设置东亚文字字形及宽度变体。（font-variant-east-asian）
   *
   * CSS 语法：`normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  declare readonly fontVariantEastAsian: group2.FontVariantEastAsianCss;
  /**
   * 设置字符优先采用文本字形还是 emoji 字形。（font-variant-emoji）
   *
   * CSS 语法：`normal | text | emoji | unicode`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  declare readonly fontVariantEmoji: group2.FontVariantEmojiCss;
  /**
   * 设置字体连字的启用方式。（font-variant-ligatures）
   *
   * CSS 语法：`normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  declare readonly fontVariantLigatures: group2.FontVariantLigaturesCss;
  /**
   * 设置数字的等宽、比例、分数及其他排版变体。（font-variant-numeric）
   *
   * CSS 语法：`normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  declare readonly fontVariantNumeric: group2.FontVariantNumericCss;
  /**
   * 选择字体提供的上标或下标字形。（font-variant-position）
   *
   * CSS 语法：`normal | sub | super`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  declare readonly fontVariantPosition: group2.FontVariantPositionCss;
  /**
   * 直接设置可变字体各个轴的数值。（font-variation-settings）
   *
   * CSS 语法：`normal | [ <string> <number> ]#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  declare readonly fontVariationSettings: group2.FontVariationSettingsCss;
  /**
   * 设置字体粗细，实际可用字重取决于字体。（font-weight）
   *
   * CSS 语法：`<font-weight-absolute> | bolder | lighter`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  declare readonly fontWeight: group2.FontWeightCss;
  /**
   * 选择字体的宽窄字面，不是通过变换拉伸元素。（font-width）
   *
   * CSS 语法：`normal | <percentage [0,∞]> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
   */
  declare readonly fontWidth: group2.FontWidthCss;
  /**
   * 控制元素是否参与系统强制颜色模式的自动替换。（forced-color-adjust）
   *
   * CSS 语法：`auto | none | preserve-parent-color`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  declare readonly forcedColorAdjust: group2.ForcedColorAdjustCss;
  /**
   * 设置行与列之间的间距，用于 Grid、Flex 和多栏等布局。（gap）
   *
   * 两个值依次为 row-gap 和 column-gap；在 Flex 中对应项目还是行间距取决于 flex-direction。它不增加容器外缘的间距。
   *
   * CSS 语法：`<'row-gap'> <'column-gap'>?`。
   * @example
   * s.gap.px(8, 16) // gap:8px 16px;
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  declare readonly gap: group3.GapCss;
  /**
   * 设置竖排 SVG 字形方向的旧属性；新代码优先考虑 text-orientation。（glyph-orientation-vertical）
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/glyph-orientation-vertical
   */
  declare readonly glyphOrientationVertical: group3.GlyphOrientationVerticalCss;
  /**
   * 集中设置显式和隐式网格的轨道、区域及自动放置方式。（grid）
   *
   * CSS 语法：`<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  declare readonly grid: group3.GridCss;
  /**
   * 设置网格项目的区域名，或行起点、列起点、行终点、列终点。（grid-area）
   *
   * CSS 语法：`<grid-line> [ / <grid-line> ]{0,3}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  declare readonly gridArea: group3.GridAreaCss;
  /**
   * 设置隐式生成的网格列尺寸。（grid-auto-columns）
   *
   * CSS 语法：`<track-size>+`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  declare readonly gridAutoColumns: group3.GridAutoColumnsCss;
  /**
   * 设置网格自动放置算法的行列方向及是否密集填洞。（grid-auto-flow）
   *
   * dense 可能改变视觉顺序，但不改变 DOM 和键盘导航顺序。
   *
   * CSS 语法：`[ row | column ] || dense`。
   *
   * CSS 初始值：`row`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  declare readonly gridAutoFlow: group3.GridAutoFlowCss;
  /**
   * 设置隐式生成的网格行尺寸。（grid-auto-rows）
   *
   * CSS 语法：`<track-size>+`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  declare readonly gridAutoRows: group3.GridAutoRowsCss;
  /**
   * 设置网格项目的列起点和列终点。（grid-column）
   *
   * CSS 语法：`<grid-line> [ / <grid-line> ]?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  declare readonly gridColumn: group3.GridColumnCss;
  /**
   * 设置网格项目的列终止线或跨越范围。（grid-column-end）
   *
   * CSS 语法：`<grid-line>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  declare readonly gridColumnEnd: group3.GridColumnEndCss;
  /**
   * 设置网格项目的列起始线或跨越范围。（grid-column-start）
   *
   * CSS 语法：`<grid-line>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  declare readonly gridColumnStart: group3.GridColumnStartCss;
  /**
   * 设置网格项目的行起点和行终点。（grid-row）
   *
   * CSS 语法：`<grid-line> [ / <grid-line> ]?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  declare readonly gridRow: group3.GridRowCss;
  /**
   * 设置网格项目的行终止线或跨越范围。（grid-row-end）
   *
   * CSS 语法：`<grid-line>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  declare readonly gridRowEnd: group3.GridRowEndCss;
  /**
   * 设置网格项目的行起始线或跨越范围。（grid-row-start）
   *
   * CSS 语法：`<grid-line>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  declare readonly gridRowStart: group3.GridRowStartCss;
  /**
   * 集中设置显式网格的行、列和命名区域。（grid-template）
   *
   * CSS 语法：`none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  declare readonly gridTemplate: group3.GridTemplateCss;
  /**
   * 用区域名称矩阵定义网格布局区域。（grid-template-areas）
   *
   * CSS 语法：`none | <string>+`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  declare readonly gridTemplateAreas: group3.GridTemplateAreasCss;
  /**
   * 定义显式网格的列轨道尺寸及网格线名称。（grid-template-columns）
   *
   * CSS 语法：`none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @example
   * s.gridTemplateColumns.repeat(3, 'minmax(0, 1fr)') // grid-template-columns:repeat(3, minmax(0, 1fr));
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  declare readonly gridTemplateColumns: group3.GridTemplateColumnsCss;
  /**
   * 定义显式网格的行轨道尺寸及网格线名称。（grid-template-rows）
   *
   * CSS 语法：`none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  declare readonly gridTemplateRows: group3.GridTemplateRowsCss;
  /**
   * 控制标点是否可以悬挂在行盒边缘之外。（hanging-punctuation）
   *
   * CSS 语法：`none | [ first || [ force-end | allow-end ] || last ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  declare readonly hangingPunctuation: group3.HangingPunctuationCss;
  /**
   * 设置元素的物理高度，盒子范围受 box-sizing 影响。（height）
   *
   * 百分比高度能否解析取决于包含块的尺寸确定方式；设置 100% 不自动等于视口高度。
   *
   * CSS 语法：`auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  declare readonly height: group3.HeightCss;
  /**
   * 设置自动断词时插入的断字符号。（hyphenate-character）
   *
   * CSS 语法：`auto | <string>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  declare readonly hyphenateCharacter: group3.HyphenateCharacterCss;
  /**
   * 限制可断词的最小单词长度以及断点两侧的最少字符数。（hyphenate-limit-chars）
   *
   * CSS 语法：`[ auto | <integer> ]{1,3}`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  declare readonly hyphenateLimitChars: group3.HyphenateLimitCharsCss;
  /**
   * 设置文字断词和连字符插入的方式；自动断词依赖语言和词典。（hyphens）
   *
   * CSS 语法：`none | manual | auto`。
   *
   * CSS 初始值：`manual`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  declare readonly hyphens: group3.HyphensCss;
  /**
   * 设置图像是否按元数据等信息调整方向。（image-orientation）
   *
   * CSS 语法：`from-image | <angle> | [ <angle>? flip ]`。
   *
   * CSS 初始值：`from-image`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  declare readonly imageOrientation: group3.ImageOrientationCss;
  /**
   * 向浏览器指定图像缩放时的插值与清晰度偏好。（image-rendering）
   *
   * CSS 语法：`auto | crisp-edges | pixelated | smooth`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  declare readonly imageRendering: group3.ImageRenderingCss;
  /**
   * 设置图像的分辨率解释方式；使用前核对目标浏览器支持。（image-resolution）
   *
   * CSS 语法：`[ from-image || <resolution> ] && snap?`。
   *
   * CSS 初始值：`1dppx`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-resolution
   */
  declare readonly imageResolution: group3.ImageResolutionCss;
  /**
   * 设置段落首字下沉或抬升时占用的行数与对齐位置。（initial-letter）
   *
   * CSS 语法：`normal | [ <number> <integer>? ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  declare readonly initialLetter: group3.InitialLetterCss;
  /**
   * 设置首字下沉时字形与正文使用的对齐基线。（initial-letter-align）
   *
   * CSS 语法：`[ auto | alphabetic | hanging | ideographic ]`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter-align
   */
  declare readonly initialLetterAlign: group3.InitialLetterAlignCss;
  /**
   * 设置逻辑行内轴尺寸；水平书写时通常对应宽度。（inline-size）
   *
   * CSS 语法：`<'width'>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  declare readonly inlineSize: group3.InlineSizeCss;
  /**
   * 同时设置定位元素的上、右、下、左偏移。（inset）
   *
   * CSS 语法：`<'top'>{1,4}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  declare readonly inset: group3.InsetCss;
  /**
   * 设置定位元素沿逻辑块轴的起始和结束偏移。（inset-block）
   *
   * CSS 语法：`<'top'>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  declare readonly insetBlock: group3.InsetBlockCss;
  /**
   * 设置定位元素在逻辑块轴结束侧的偏移。（inset-block-end）
   *
   * CSS 语法：`<'top'>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  declare readonly insetBlockEnd: group3.InsetBlockEndCss;
  /**
   * 设置定位元素在逻辑块轴起始侧的偏移。（inset-block-start）
   *
   * CSS 语法：`<'top'>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  declare readonly insetBlockStart: group3.InsetBlockStartCss;
  /**
   * 设置定位元素沿逻辑行内轴的起始和结束偏移。（inset-inline）
   *
   * CSS 语法：`<'top'>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  declare readonly insetInline: group3.InsetInlineCss;
  /**
   * 设置定位元素在逻辑行内轴结束侧的偏移。（inset-inline-end）
   *
   * CSS 语法：`<'top'>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  declare readonly insetInlineEnd: group3.InsetInlineEndCss;
  /**
   * 设置定位元素在逻辑行内轴起始侧的偏移。（inset-inline-start）
   *
   * CSS 语法：`<'top'>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  declare readonly insetInlineStart: group3.InsetInlineStartCss;
  /**
   * 控制动画是否允许在数值尺寸与内部尺寸关键字之间插值。（interpolate-size）
   *
   * CSS 语法：`numeric-only | allow-keywords`。
   *
   * CSS 初始值：`numeric-only`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  declare readonly interpolateSize: group3.InterpolateSizeCss;
  /**
   * 控制元素是否建立独立的层叠上下文，隔离混合效果。（isolation）
   *
   * CSS 语法：`auto | isolate`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  declare readonly isolation: group3.IsolationCss;
  /**
   * 分配布局主轴或行内轴的剩余空间，控制内容整体对齐。（justify-content）
   *
   * CSS 语法：`normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  declare readonly justifyContent: group3.JustifyContentCss;
  /**
   * 设置容器内项目在行内轴上的默认对齐方式；不控制 Flex 项目的主轴对齐。（justify-items）
   *
   * CSS 语法：`normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ] | anchor-center`。
   *
   * CSS 初始值：`legacy`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  declare readonly justifyItems: group3.JustifyItemsCss;
  /**
   * 单独设置项目在其布局区域内的行内轴对齐方式。（justify-self）
   *
   * CSS 语法：`auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | anchor-center`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  declare readonly justifySelf: group3.JustifySelfCss;
  /**
   * 旧版瀑布流布局提案中沿行内轴对齐轨道的属性；使用前核对实现与规范版本。（justify-tracks）
   *
   * CSS 语法：`[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-tracks
   */
  declare readonly justifyTracks: group3.JustifyTracksCss;
  /**
   * 设置定位元素相对于其定位参照的左侧偏移。（left）
   *
   * CSS 语法：`auto | <length-percentage> | <anchor()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  declare readonly left: group3.LeftCss;
  /**
   * 设置字符之间额外增加或减少的间距。（letter-spacing）
   *
   * CSS 语法：`normal | <length>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  declare readonly letterSpacing: group3.LetterSpacingCss;
  /**
   * 设置 SVG 光照滤镜使用的光源颜色。（lighting-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`white`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  declare readonly lightingColor: group3.LightingColorCss;
  /**
   * 设置东亚文字标点等字符的换行严格程度。（line-break）
   *
   * CSS 语法：`auto | loose | normal | strict | anywhere`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  declare readonly lineBreak: group3.LineBreakCss;
  /**
   * 限制块容器显示的行数及截断行为；使用前核对所需语法的支持情况。（line-clamp）
   *
   * CSS 语法：`none | <integer>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  declare readonly lineClamp: group3.LineClampCss;
  /**
   * 设置行盒高度；无单位数值按元素自身字号计算。（line-height）
   *
   * 无单位数字作为倍数继承；长度值按长度继承。单独设置行高不会自动实现多行文本垂直居中。
   *
   * CSS 语法：`normal | <number> | <length> | <percentage>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @example
   * s.lineHeight.raw(1.5) // line-height:1.5;
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  declare readonly lineHeight: group3.LineHeightCss;
  /**
   * 设置行盒高度向上取整使用的步长。（line-height-step）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height-step
   */
  declare readonly lineHeightStep: group3.LineHeightStepCss;
  /**
   * 集中设置列表标记的类型、图像和位置。（list-style）
   *
   * CSS 语法：`<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  declare readonly listStyle: group3.ListStyleCss;
  /**
   * 设置用作列表标记的图像。（list-style-image）
   *
   * CSS 语法：`<image> | none`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  declare readonly listStyleImage: group3.ListStyleImageCss;
  /**
   * 设置列表标记位于主块盒内部还是外部。（list-style-position）
   *
   * CSS 语法：`inside | outside`。
   *
   * CSS 初始值：`outside`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  declare readonly listStylePosition: group3.ListStylePositionCss;
  /**
   * 设置列表标记或计数器的样式。（list-style-type）
   *
   * CSS 语法：`<counter-style> | <string> | none`。
   *
   * CSS 初始值：`disc`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  declare readonly listStyleType: group3.ListStyleTypeCss;
  /**
   * 设置盒子四周的外边距，可使用负值或自动外边距。（margin）
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。块布局中的垂直外边距可能折叠。
   *
   * CSS 语法：`<'margin-top'>{1,4}`。
   * @example
   * s.margin.px(8, 16) // margin:8px 16px;
   * @example
   * s.margin.raw('0 auto') // margin:0 auto;
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  declare readonly margin: group4.MarginCss;
  /**
   * 设置逻辑块轴起始侧和结束侧的外边距。（margin-block）
   *
   * CSS 语法：`<'margin-top'>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  declare readonly marginBlock: group4.MarginBlockCss;
  /**
   * 设置逻辑块轴结束侧的外边距。（margin-block-end）
   *
   * CSS 语法：`<'margin-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  declare readonly marginBlockEnd: group4.MarginBlockEndCss;
  /**
   * 设置逻辑块轴起始侧的外边距。（margin-block-start）
   *
   * CSS 语法：`<'margin-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  declare readonly marginBlockStart: group4.MarginBlockStartCss;
  /**
   * 设置下外边距。（margin-bottom）
   *
   * CSS 语法：`<length-percentage> | auto | <anchor-size()>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  declare readonly marginBottom: group4.MarginBottomCss;
  /**
   * 设置逻辑行内轴起始侧和结束侧的外边距。（margin-inline）
   *
   * CSS 语法：`<'margin-top'>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  declare readonly marginInline: group4.MarginInlineCss;
  /**
   * 设置逻辑行内轴结束侧的外边距。（margin-inline-end）
   *
   * CSS 语法：`<'margin-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  declare readonly marginInlineEnd: group4.MarginInlineEndCss;
  /**
   * 设置逻辑行内轴起始侧的外边距。（margin-inline-start）
   *
   * CSS 语法：`<'margin-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  declare readonly marginInlineStart: group4.MarginInlineStartCss;
  /**
   * 设置左外边距。（margin-left）
   *
   * CSS 语法：`<length-percentage> | auto | <anchor-size()>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  declare readonly marginLeft: group4.MarginLeftCss;
  /**
   * 设置右外边距。（margin-right）
   *
   * CSS 语法：`<length-percentage> | auto | <anchor-size()>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  declare readonly marginRight: group4.MarginRightCss;
  /**
   * 设置上外边距。（margin-top）
   *
   * CSS 语法：`<length-percentage> | auto | <anchor-size()>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  declare readonly marginTop: group4.MarginTopCss;
  /**
   * 控制容器边缘处子元素外边距的裁减。（margin-trim）
   *
   * CSS 语法：`none | in-flow | all`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  declare readonly marginTrim: group4.MarginTrimCss;
  /**
   * 同时设置 SVG 路径起点、中间顶点和终点的标记图形。（marker）
   *
   * CSS 语法：`none | <url>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  declare readonly marker: group4.MarkerCss;
  /**
   * 设置 SVG 路径终点的标记图形。（marker-end）
   *
   * CSS 语法：`none | <url>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  declare readonly markerEnd: group4.MarkerEndCss;
  /**
   * 设置 SVG 路径中间顶点的标记图形。（marker-mid）
   *
   * CSS 语法：`none | <url>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  declare readonly markerMid: group4.MarkerMidCss;
  /**
   * 设置 SVG 路径起点的标记图形。（marker-start）
   *
   * CSS 语法：`none | <url>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  declare readonly markerStart: group4.MarkerStartCss;
  /**
   * 集中设置遮罩图层的图像、位置、尺寸、重复及合成方式。（mask）
   *
   * CSS 语法：`<mask-layer>#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  declare readonly mask: group4.MaskCss;
  /**
   * 设置基于九宫格图像切片的边框遮罩。（mask-border）
   *
   * CSS 语法：`<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  declare readonly maskBorder: group4.MaskBorderCss;
  /**
   * 设置边框遮罩使用 alpha 还是亮度信息。（mask-border-mode）
   *
   * CSS 语法：`luminance | alpha`。
   *
   * CSS 初始值：`alpha`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-mode
   */
  declare readonly maskBorderMode: group4.MaskBorderModeCss;
  /**
   * 设置边框遮罩超出边框盒的距离。（mask-border-outset）
   *
   * CSS 语法：`[ <length> | <number> ]{1,4}`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  declare readonly maskBorderOutset: group4.MaskBorderOutsetCss;
  /**
   * 设置边框遮罩切片的重复或拉伸方式。（mask-border-repeat）
   *
   * CSS 语法：`[ stretch | repeat | round | space ]{1,2}`。
   *
   * CSS 初始值：`stretch`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  declare readonly maskBorderRepeat: group4.MaskBorderRepeatCss;
  /**
   * 设置边框遮罩图像的切片位置。（mask-border-slice）
   *
   * CSS 语法：`<number-percentage>{1,4} fill?`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  declare readonly maskBorderSlice: group4.MaskBorderSliceCss;
  /**
   * 设置边框遮罩的源图像。（mask-border-source）
   *
   * CSS 语法：`none | <image>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  declare readonly maskBorderSource: group4.MaskBorderSourceCss;
  /**
   * 设置边框遮罩各边的宽度。（mask-border-width）
   *
   * CSS 语法：`[ <length-percentage> | <number> | auto ]{1,4}`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  declare readonly maskBorderWidth: group4.MaskBorderWidthCss;
  /**
   * 设置遮罩效果允许作用的裁剪区域。（mask-clip）
   *
   * CSS 语法：`[ <coord-box> | no-clip ]#`。
   *
   * CSS 初始值：`border-box`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  declare readonly maskClip: group4.MaskClipCss;
  /**
   * 设置多个遮罩图层之间的合成运算。（mask-composite）
   *
   * CSS 语法：`<compositing-operator>#`。
   *
   * CSS 初始值：`add`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  declare readonly maskComposite: group4.MaskCompositeCss;
  /**
   * 设置遮罩使用的图像、渐变或 SVG 遮罩引用。（mask-image）
   *
   * CSS 语法：`<mask-reference>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  declare readonly maskImage: group4.MaskImageCss;
  /**
   * 设置遮罩按 alpha、亮度或源类型解释。（mask-mode）
   *
   * CSS 语法：`<masking-mode>#`。
   *
   * CSS 初始值：`match-source`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  declare readonly maskMode: group4.MaskModeCss;
  /**
   * 设置遮罩图像定位所依据的盒子。（mask-origin）
   *
   * CSS 语法：`<coord-box>#`。
   *
   * CSS 初始值：`border-box`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  declare readonly maskOrigin: group4.MaskOriginCss;
  /**
   * 设置遮罩图像在定位区域中的位置。（mask-position）
   *
   * CSS 语法：`<position>#`。
   *
   * CSS 初始值：`0% 0%`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  declare readonly maskPosition: group4.MaskPositionCss;
  /**
   * 设置遮罩图像的重复方式。（mask-repeat）
   *
   * CSS 语法：`<repeat-style>#`。
   *
   * CSS 初始值：`repeat`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  declare readonly maskRepeat: group4.MaskRepeatCss;
  /**
   * 设置遮罩图像的尺寸。（mask-size）
   *
   * CSS 语法：`<bg-size>#`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  declare readonly maskSize: group4.MaskSizeCss;
  /**
   * 设置 SVG mask 元素使用亮度还是 alpha 作为遮罩。（mask-type）
   *
   * CSS 语法：`luminance | alpha`。
   *
   * CSS 初始值：`luminance`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  declare readonly maskType: group4.MaskTypeCss;
  /**
   * 旧版瀑布流布局提案中的自动放置策略；使用前核对实现与规范版本。（masonry-auto-flow）
   *
   * CSS 语法：`[ pack | next ] || [ definite-first | ordered ]`。
   *
   * CSS 初始值：`pack`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/masonry-auto-flow
   */
  declare readonly masonryAutoFlow: group4.MasonryAutoFlowCss;
  /**
   * 设置数学公式的嵌套深度，用于数学字号等排版计算。（math-depth）
   *
   * CSS 语法：`auto-add | add(<integer>) | <integer>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  declare readonly mathDepth: group4.MathDepthCss;
  /**
   * 控制数学上标采用正常还是压缩的垂直偏移。（math-shift）
   *
   * CSS 语法：`normal | compact`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  declare readonly mathShift: group4.MathShiftCss;
  /**
   * 设置数学公式采用正常还是紧凑排版。（math-style）
   *
   * CSS 语法：`normal | compact`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  declare readonly mathStyle: group4.MathStyleCss;
  /**
   * 限制元素逻辑块轴的最大尺寸。（max-block-size）
   *
   * CSS 语法：`<'max-width'>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  declare readonly maxBlockSize: group4.MaxBlockSizeCss;
  /**
   * 限制元素的最大物理高度。（max-height）
   *
   * CSS 语法：`none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  declare readonly maxHeight: group4.MaxHeightCss;
  /**
   * 限制元素逻辑行内轴的最大尺寸。（max-inline-size）
   *
   * CSS 语法：`<'max-width'>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  declare readonly maxInlineSize: group4.MaxInlineSizeCss;
  /**
   * 限制分片上下文中的最大行数；属于需核对支持情况的截行能力。（max-lines）
   *
   * CSS 语法：`none | <integer>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-lines
   */
  declare readonly maxLines: group4.MaxLinesCss;
  /**
   * 限制元素的最大物理宽度。（max-width）
   *
   * CSS 语法：`none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  declare readonly maxWidth: group4.MaxWidthCss;
  /**
   * 设置元素逻辑块轴的最小尺寸。（min-block-size）
   *
   * CSS 语法：`<'min-width'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  declare readonly minBlockSize: group4.MinBlockSizeCss;
  /**
   * 设置元素的最小物理高度。（min-height）
   *
   * CSS 语法：`auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  declare readonly minHeight: group4.MinHeightCss;
  /**
   * 设置元素逻辑行内轴的最小尺寸。（min-inline-size）
   *
   * CSS 语法：`<'min-width'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  declare readonly minInlineSize: group4.MinInlineSizeCss;
  /**
   * 设置元素的最小物理宽度。（min-width）
   *
   * Flex/Grid 项目的 auto 最小尺寸可能由内容决定。需要允许其收缩时，可以按布局目的设置 min-width:0。
   *
   * CSS 语法：`auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  declare readonly minWidth: group4.MinWidthCss;
  /**
   * 设置元素整体与其背后内容的颜色混合方式。（mix-blend-mode）
   *
   * CSS 语法：`<blend-mode> | plus-darker | plus-lighter`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  declare readonly mixBlendMode: group4.MixBlendModeCss;
  /**
   * 设置运动路径的旧式简写；对应现代 offset 属性族。（motion）
   *
   * CSS 语法：`[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  declare readonly motion: group4.MotionCss;
  /**
   * 设置沿运动路径行进距离的旧属性；对应 offset-distance。（motion-distance）
   *
   * CSS 语法：`<length-percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  declare readonly motionDistance: group4.MotionDistanceCss;
  /**
   * 设置运动路径的旧属性；对应 offset-path。（motion-path）
   *
   * CSS 语法：`none | <offset-path> || <coord-box>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  declare readonly motionPath: group4.MotionPathCss;
  /**
   * 设置运动路径旋转方式的旧属性；对应 offset-rotate。（motion-rotation）
   *
   * CSS 语法：`[ auto | reverse ] || <angle>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  declare readonly motionRotation: group4.MotionRotationCss;
  /**
   * 设置替换元素的内容如何适应其内容盒，例如图像的裁切和缩放。（object-fit）
   *
   * CSS 语法：`fill | contain | cover | none | scale-down`。
   *
   * CSS 初始值：`fill`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  declare readonly objectFit: group4.ObjectFitCss;
  /**
   * 设置替换元素内容在内容盒内的对齐位置。（object-position）
   *
   * CSS 语法：`<position>`。
   *
   * CSS 初始值：`50% 50%`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  declare readonly objectPosition: group4.ObjectPositionCss;
  /**
   * 设置替换元素内容的可视区域，控制用于呈现的图像范围。（object-view-box）
   *
   * CSS 语法：`none | <basic-shape-rect>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  declare readonly objectViewBox: group4.ObjectViewBoxCss;
  /**
   * 集中设置运动路径、起始位置、距离、方向和锚点。（offset）
   *
   * CSS 语法：`[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  declare readonly offset: group4.OffsetCss;
  /**
   * 设置元素沿运动路径移动时与路径相接的内部锚点。（offset-anchor）
   *
   * CSS 语法：`auto | <position>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  declare readonly offsetAnchor: group4.OffsetAnchorCss;
  /**
   * 设置元素沿运动路径行进的距离。（offset-distance）
   *
   * CSS 语法：`<length-percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  declare readonly offsetDistance: group4.OffsetDistanceCss;
  /**
   * 设置元素运动所沿用的路径。（offset-path）
   *
   * CSS 语法：`none | <offset-path> || <coord-box>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  declare readonly offsetPath: group4.OffsetPathCss;
  /**
   * 设置运动路径的初始位置。（offset-position）
   *
   * CSS 语法：`normal | auto | <position>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  declare readonly offsetPosition: group4.OffsetPositionCss;
  /**
   * 设置元素沿运动路径移动时的方向和附加旋转。（offset-rotate）
   *
   * CSS 语法：`[ auto | reverse ] || <angle>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  declare readonly offsetRotate: group4.OffsetRotateCss;
  /**
   * 设置路径旋转的旧名称；新代码使用 offset-rotate。（offset-rotation）
   *
   * CSS 语法：`[ auto | reverse ] || <angle>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  declare readonly offsetRotation: group4.OffsetRotationCss;
  /**
   * 设置元素及其子树合成后的整体不透明度。（opacity）
   *
   * 0 完全透明，1 完全不透明；作用于整个子树的合成结果。透明元素仍可能接受点击和键盘焦点。
   *
   * CSS 语法：`<opacity-value>`。
   *
   * CSS 初始值：`1`（不同于浏览器默认样式表）。
   * @example
   * s.opacity.raw(0.5) // opacity:0.5;
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  declare readonly opacity: group4.OpacityCss;
  /**
   * 设置 Flex 或 Grid 项目的视觉排列顺序，不改变 DOM 顺序。（order）
   *
   * 不改变源代码、朗读及通常的 Tab 顺序，避免用视觉重排破坏阅读顺序。
   *
   * CSS 语法：`<integer>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  declare readonly order: group4.OrderCss;
  /**
   * 设置分页或分栏断点前需保留的最少行数。（orphans）
   *
   * CSS 语法：`<integer>`。
   *
   * CSS 初始值：`2`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  declare readonly orphans: group4.OrphansCss;
  /**
   * 设置盒子外围轮廓线的宽度、线型和颜色，不占布局空间。（outline）
   *
   * CSS 语法：`<'outline-width'> || <'outline-style'> || <'outline-color'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  declare readonly outline: group4.OutlineCss;
  /**
   * 设置轮廓线颜色。（outline-color）
   *
   * CSS 语法：`auto | <color>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  declare readonly outlineColor: group4.OutlineColorCss;
  /**
   * 设置轮廓线与边框边缘之间的距离。（outline-offset）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  declare readonly outlineOffset: group4.OutlineOffsetCss;
  /**
   * 设置轮廓线线型。（outline-style）
   *
   * CSS 语法：`auto | <outline-line-style>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  declare readonly outlineStyle: group4.OutlineStyleCss;
  /**
   * 设置轮廓线宽度。（outline-width）
   *
   * CSS 语法：`<line-width>`。
   *
   * CSS 初始值：`medium`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  declare readonly outlineWidth: group4.OutlineWidthCss;
  /**
   * 设置内容超出盒子时的裁剪和滚动行为。（overflow）
   *
   * CSS 语法：`[ visible | hidden | clip | scroll | auto ]{1,2}`。
   *
   * CSS 初始值：`visible`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  declare readonly overflow: group4.OverflowCss;
  /**
   * 控制元素是否参与滚动锚定，以减少内容变化造成的视口跳动。（overflow-anchor）
   *
   * CSS 语法：`auto | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  declare readonly overflowAnchor: group4.OverflowAnchorCss;
  /**
   * 设置逻辑块轴上的溢出行为。（overflow-block）
   *
   * CSS 语法：`visible | hidden | clip | scroll | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  declare readonly overflowBlock: group4.OverflowBlockCss;
  /**
   * 设置溢出裁剪参照盒的非标准属性；使用前核对目标浏览器。（overflow-clip-box）
   *
   * CSS 语法：`padding-box | content-box`。
   *
   * CSS 初始值：`padding-box`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-box
   */
  declare readonly overflowClipBox: group4.OverflowClipBoxCss;
  /**
   * 设置 overflow:clip 的裁剪边界允许向外扩展的距离。（overflow-clip-margin）
   *
   * CSS 语法：`<visual-box> || <length [0,∞]>`。
   *
   * CSS 初始值：`0px`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  declare readonly overflowClipMargin: group4.OverflowClipMarginCss;
  /**
   * 设置逻辑行内轴上的溢出行为。（overflow-inline）
   *
   * CSS 语法：`visible | hidden | clip | scroll | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  declare readonly overflowInline: group4.OverflowInlineCss;
  /**
   * 设置不可正常断开的长文本是否允许额外换行。（overflow-wrap）
   *
   * CSS 语法：`normal | break-word | anywhere`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  declare readonly overflowWrap: group4.OverflowWrapCss;
  /**
   * 设置水平方向的溢出行为。（overflow-x）
   *
   * CSS 语法：`visible | hidden | clip | scroll | auto`。
   *
   * CSS 初始值：`visible`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  declare readonly overflowX: group4.OverflowXCss;
  /**
   * 设置垂直方向的溢出行为。（overflow-y）
   *
   * CSS 语法：`visible | hidden | clip | scroll | auto`。
   *
   * CSS 初始值：`visible`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  declare readonly overflowY: group4.OverflowYCss;
  /**
   * 反映元素是否位于顶层，主要用于顶层退出过渡；通常由浏览器管理。（overlay）
   *
   * CSS 语法：`none | auto`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  declare readonly overlay: group4.OverlayCss;
  /**
   * 控制滚动到边界后的滚动链和越界反馈行为。（overscroll-behavior）
   *
   * CSS 语法：`[ contain | none | auto ]{1,2}`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  declare readonly overscrollBehavior: group4.OverscrollBehaviorCss;
  /**
   * 控制逻辑块轴上到达滚动边界后的行为。（overscroll-behavior-block）
   *
   * CSS 语法：`contain | none | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  declare readonly overscrollBehaviorBlock: group4.OverscrollBehaviorBlockCss;
  /**
   * 控制逻辑行内轴上到达滚动边界后的行为。（overscroll-behavior-inline）
   *
   * CSS 语法：`contain | none | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  declare readonly overscrollBehaviorInline: group4.OverscrollBehaviorInlineCss;
  /**
   * 控制水平方向到达滚动边界后的行为。（overscroll-behavior-x）
   *
   * CSS 语法：`contain | none | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  declare readonly overscrollBehaviorX: group4.OverscrollBehaviorXCss;
  /**
   * 控制垂直方向到达滚动边界后的行为。（overscroll-behavior-y）
   *
   * CSS 语法：`contain | none | auto`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  declare readonly overscrollBehaviorY: group4.OverscrollBehaviorYCss;
  /**
   * 设置内容与边框之间的四边内边距，不接受负值。（padding）
   *
   * 1/2/3/4 个值依次表示：四边；上下/左右；上/左右/下；上/右/下/左。不能使用负值或 auto。
   *
   * CSS 语法：`<'padding-top'>{1,4}`。
   * @example
   * s.padding.rem(0.5, 1) // padding:0.5rem 1rem;
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  declare readonly padding: group5.PaddingCss;
  /**
   * 设置逻辑块轴起始侧和结束侧的内边距。（padding-block）
   *
   * CSS 语法：`<'padding-top'>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  declare readonly paddingBlock: group5.PaddingBlockCss;
  /**
   * 设置逻辑块轴结束侧的内边距。（padding-block-end）
   *
   * CSS 语法：`<'padding-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  declare readonly paddingBlockEnd: group5.PaddingBlockEndCss;
  /**
   * 设置逻辑块轴起始侧的内边距。（padding-block-start）
   *
   * CSS 语法：`<'padding-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  declare readonly paddingBlockStart: group5.PaddingBlockStartCss;
  /**
   * 设置下内边距。（padding-bottom）
   *
   * CSS 语法：`<length-percentage [0,∞]>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  declare readonly paddingBottom: group5.PaddingBottomCss;
  /**
   * 设置逻辑行内轴起始侧和结束侧的内边距。（padding-inline）
   *
   * CSS 语法：`<'padding-top'>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  declare readonly paddingInline: group5.PaddingInlineCss;
  /**
   * 设置逻辑行内轴结束侧的内边距。（padding-inline-end）
   *
   * CSS 语法：`<'padding-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  declare readonly paddingInlineEnd: group5.PaddingInlineEndCss;
  /**
   * 设置逻辑行内轴起始侧的内边距。（padding-inline-start）
   *
   * CSS 语法：`<'padding-top'>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  declare readonly paddingInlineStart: group5.PaddingInlineStartCss;
  /**
   * 设置左内边距。（padding-left）
   *
   * CSS 语法：`<length-percentage [0,∞]>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  declare readonly paddingLeft: group5.PaddingLeftCss;
  /**
   * 设置右内边距。（padding-right）
   *
   * CSS 语法：`<length-percentage [0,∞]>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  declare readonly paddingRight: group5.PaddingRightCss;
  /**
   * 设置上内边距。（padding-top）
   *
   * CSS 语法：`<length-percentage [0,∞]>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  declare readonly paddingTop: group5.PaddingTopCss;
  /**
   * 选择分页媒体中使用的命名页面类型。（page）
   *
   * CSS 语法：`auto | <custom-ident>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  declare readonly page: group5.PageCss;
  /**
   * 设置 SVG 填充、描边和标记的绘制先后顺序。（paint-order）
   *
   * CSS 语法：`normal | [ fill || stroke || markers ]`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  declare readonly paintOrder: group5.PaintOrderCss;
  /**
   * 设置观察子元素三维变换时的透视距离。（perspective）
   *
   * CSS 语法：`none | <length>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  declare readonly perspective: group5.PerspectiveCss;
  /**
   * 设置三维透视的观察原点。（perspective-origin）
   *
   * CSS 语法：`<position>`。
   *
   * CSS 初始值：`50% 50%`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  declare readonly perspectiveOrigin: group5.PerspectiveOriginCss;
  /**
   * 同时设置 align-content 与 justify-content。（place-content）
   *
   * CSS 语法：`<'align-content'> <'justify-content'>?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  declare readonly placeContent: group5.PlaceContentCss;
  /**
   * 同时设置 align-items 与 justify-items。（place-items）
   *
   * CSS 语法：`<'align-items'> <'justify-items'>?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  declare readonly placeItems: group5.PlaceItemsCss;
  /**
   * 同时设置 align-self 与 justify-self。（place-self）
   *
   * CSS 语法：`<'align-self'> <'justify-self'>?`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  declare readonly placeSelf: group5.PlaceSelfCss;
  /**
   * 设置元素何时可以成为指针命中目标；SVG 还支持按填充和描边命中。（pointer-events）
   *
   * CSS 语法：`auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  declare readonly pointerEvents: group5.PointerEventsCss;
  /**
   * 设置元素的定位方式，并决定偏移属性如何参与布局。（position）
   *
   * 偏移通常通过 top/right/bottom/left 或逻辑 inset 属性设置。fixed 和 absolute 的包含块也可能由 transform 等属性建立。
   *
   * CSS 语法：`static | relative | absolute | sticky | fixed`。
   *
   * CSS 初始值：`static`（不同于浏览器默认样式表）。
   * @example
   * css(s.position.sticky, s.top.px(0))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  declare readonly position: group5.PositionCss;
  /**
   * 选择绝对定位元素使用的默认锚点。（position-anchor）
   *
   * CSS 语法：`auto | <anchor-name>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  declare readonly positionAnchor: group5.PositionAnchorCss;
  /**
   * 选择相对于锚点的定位区域。（position-area）
   *
   * CSS 语法：`none | <position-area>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  declare readonly positionArea: group5.PositionAreaCss;
  /**
   * 同时设置锚点定位的候选回退方式及尝试顺序。（position-try）
   *
   * CSS 语法：`<'position-try-order'>? <'position-try-fallbacks'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  declare readonly positionTry: group5.PositionTryCss;
  /**
   * 设置锚点定位溢出时尝试的替代位置。（position-try-fallbacks）
   *
   * CSS 语法：`none | [ [<dashed-ident> || <try-tactic>] | <'position-area'> ]#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  declare readonly positionTryFallbacks: group5.PositionTryFallbacksCss;
  /**
   * 设置锚点定位候选方案的尝试顺序。（position-try-order）
   *
   * CSS 语法：`normal | <try-size>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  declare readonly positionTryOrder: group5.PositionTryOrderCss;
  /**
   * 设置锚点定位元素根据锚点可见性和溢出情况是否显示。（position-visibility）
   *
   * CSS 语法：`always | [ anchors-valid || anchors-visible || no-overflow ]`。
   *
   * CSS 初始值：`anchors-visible`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  declare readonly positionVisibility: group5.PositionVisibilityCss;
  /**
   * 设置打印时浏览器是否可以为节墨或可读性调整颜色。（print-color-adjust）
   *
   * CSS 语法：`economy | exact`。
   *
   * CSS 初始值：`economy`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  declare readonly printColorAdjust: group5.PrintColorAdjustCss;
  /**
   * 设置生成引号所用的开闭字符对。（quotes）
   *
   * CSS 语法：`none | auto | [ <string> <string> ]+`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  declare readonly quotes: group5.QuotesCss;
  /**
   * 设置 SVG 圆的半径。（r）
   *
   * CSS 语法：`<length> | <percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  declare readonly r: group5.RCss;
  /**
   * 设置用户是否能调整元素尺寸以及可调整的方向。（resize）
   *
   * CSS 语法：`none | both | horizontal | vertical | block | inline`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  declare readonly resize: group5.ResizeCss;
  /**
   * 设置定位元素相对于其定位参照的右侧偏移。（right）
   *
   * CSS 语法：`auto | <length-percentage> | <anchor()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  declare readonly right: group5.RightCss;
  /**
   * 独立设置元素旋转，不必重写 transform 中的其他变换。（rotate）
   *
   * CSS 语法：`none | <angle> | [ x | y | z | <number>{3} ] && <angle>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  declare readonly rotate: group5.RotateCss;
  /**
   * 设置布局中相邻行之间的间距。（row-gap）
   *
   * CSS 语法：`normal | <length-percentage>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  declare readonly rowGap: group5.RowGapCss;
  /**
   * 设置注音文字与基底文字之间剩余空间的分配方式。（ruby-align）
   *
   * CSS 语法：`start | center | space-between | space-around`。
   *
   * CSS 初始值：`space-around`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  declare readonly rubyAlign: group5.RubyAlignCss;
  /**
   * 设置相邻注音容器的合并方式；使用前核对目标浏览器。（ruby-merge）
   *
   * CSS 语法：`separate | collapse | auto`。
   *
   * CSS 初始值：`separate`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-merge
   */
  declare readonly rubyMerge: group5.RubyMergeCss;
  /**
   * 控制注音文字是否可以悬伸到相邻文本上方。（ruby-overhang）
   *
   * CSS 语法：`auto | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  declare readonly rubyOverhang: group5.RubyOverhangCss;
  /**
   * 设置注音文字相对于基底文字的位置。（ruby-position）
   *
   * CSS 语法：`[ alternate || [ over | under ] ] | inter-character`。
   *
   * CSS 初始值：`alternate`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  declare readonly rubyPosition: group5.RubyPositionCss;
  /**
   * 设置 SVG 椭圆的水平半径，或矩形的水平圆角半径。（rx）
   *
   * CSS 语法：`<length> | <percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  declare readonly rx: group5.RxCss;
  /**
   * 设置 SVG 椭圆的垂直半径，或矩形的垂直圆角半径。（ry）
   *
   * CSS 语法：`<length> | <percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  declare readonly ry: group5.RyCss;
  /**
   * 独立设置元素的缩放比例。（scale）
   *
   * CSS 语法：`none | [ <number> | <percentage> ]{1,3}`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  declare readonly scale: group6.ScaleCss;
  /**
   * 设置由导航或滚动 API 触发的滚动采用即时还是平滑方式。（scroll-behavior）
   *
   * CSS 语法：`auto | smooth`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  declare readonly scrollBehavior: group6.ScrollBehaviorCss;
  /**
   * 将元素声明为祖先滚动容器首次呈现时的候选滚动吸附目标。（scroll-initial-target）
   *
   * CSS 语法：`none | nearest`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-initial-target
   */
  declare readonly scrollInitialTarget: group6.ScrollInitialTargetCss;
  /**
   * 设置元素滚动目标区域的四边外扩距离，不改变普通布局外边距。（scroll-margin）
   *
   * CSS 语法：`<length>{1,4}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  declare readonly scrollMargin: group6.ScrollMarginCss;
  /**
   * 设置滚动目标区域在逻辑块轴两侧的外扩距离。（scroll-margin-block）
   *
   * CSS 语法：`<length>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  declare readonly scrollMarginBlock: group6.ScrollMarginBlockCss;
  /**
   * 设置滚动目标区域在逻辑块轴结束侧的外扩距离。（scroll-margin-block-end）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  declare readonly scrollMarginBlockEnd: group6.ScrollMarginBlockEndCss;
  /**
   * 设置滚动目标区域在逻辑块轴起始侧的外扩距离。（scroll-margin-block-start）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  declare readonly scrollMarginBlockStart: group6.ScrollMarginBlockStartCss;
  /**
   * 设置滚动目标区域下侧的外扩距离。（scroll-margin-bottom）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  declare readonly scrollMarginBottom: group6.ScrollMarginBottomCss;
  /**
   * 设置滚动目标区域在逻辑行内轴两侧的外扩距离。（scroll-margin-inline）
   *
   * CSS 语法：`<length>{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  declare readonly scrollMarginInline: group6.ScrollMarginInlineCss;
  /**
   * 设置滚动目标区域在逻辑行内轴结束侧的外扩距离。（scroll-margin-inline-end）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  declare readonly scrollMarginInlineEnd: group6.ScrollMarginInlineEndCss;
  /**
   * 设置滚动目标区域在逻辑行内轴起始侧的外扩距离。（scroll-margin-inline-start）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  declare readonly scrollMarginInlineStart: group6.ScrollMarginInlineStartCss;
  /**
   * 设置滚动目标区域左侧的外扩距离。（scroll-margin-left）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  declare readonly scrollMarginLeft: group6.ScrollMarginLeftCss;
  /**
   * 设置滚动目标区域右侧的外扩距离。（scroll-margin-right）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  declare readonly scrollMarginRight: group6.ScrollMarginRightCss;
  /**
   * 设置滚动目标区域上侧的外扩距离。（scroll-margin-top）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  declare readonly scrollMarginTop: group6.ScrollMarginTopCss;
  /**
   * 设置滚动容器最佳可视区域的四边内缩距离。（scroll-padding）
   *
   * CSS 语法：`[ auto | <length-percentage> ]{1,4}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  declare readonly scrollPadding: group6.ScrollPaddingCss;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴两侧的内缩距离。（scroll-padding-block）
   *
   * CSS 语法：`[ auto | <length-percentage> ]{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  declare readonly scrollPaddingBlock: group6.ScrollPaddingBlockCss;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴结束侧的内缩距离。（scroll-padding-block-end）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  declare readonly scrollPaddingBlockEnd: group6.ScrollPaddingBlockEndCss;
  /**
   * 设置滚动容器最佳可视区域在逻辑块轴起始侧的内缩距离。（scroll-padding-block-start）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  declare readonly scrollPaddingBlockStart: group6.ScrollPaddingBlockStartCss;
  /**
   * 设置滚动容器最佳可视区域下侧的内缩距离。（scroll-padding-bottom）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  declare readonly scrollPaddingBottom: group6.ScrollPaddingBottomCss;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴两侧的内缩距离。（scroll-padding-inline）
   *
   * CSS 语法：`[ auto | <length-percentage> ]{1,2}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  declare readonly scrollPaddingInline: group6.ScrollPaddingInlineCss;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴结束侧的内缩距离。（scroll-padding-inline-end）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  declare readonly scrollPaddingInlineEnd: group6.ScrollPaddingInlineEndCss;
  /**
   * 设置滚动容器最佳可视区域在逻辑行内轴起始侧的内缩距离。（scroll-padding-inline-start）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  declare readonly scrollPaddingInlineStart: group6.ScrollPaddingInlineStartCss;
  /**
   * 设置滚动容器最佳可视区域左侧的内缩距离。（scroll-padding-left）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  declare readonly scrollPaddingLeft: group6.ScrollPaddingLeftCss;
  /**
   * 设置滚动容器最佳可视区域右侧的内缩距离。（scroll-padding-right）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  declare readonly scrollPaddingRight: group6.ScrollPaddingRightCss;
  /**
   * 设置滚动容器最佳可视区域上侧的内缩距离。（scroll-padding-top）
   *
   * CSS 语法：`auto | <length-percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  declare readonly scrollPaddingTop: group6.ScrollPaddingTopCss;
  /**
   * 设置元素作为滚动吸附目标时在块轴和行内轴上的对齐位置。（scroll-snap-align）
   *
   * CSS 语法：`[ none | start | end | center ]{1,2}`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  declare readonly scrollSnapAlign: group6.ScrollSnapAlignCss;
  /**
   * 设置滚动吸附区域外扩的旧名称；新代码使用 scroll-margin。（scroll-snap-margin）
   *
   * CSS 语法：`<length>{1,4}`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  declare readonly scrollSnapMargin: group6.ScrollSnapMarginCss;
  /**
   * 设置滚动吸附区域下侧外扩的旧名称；新代码使用 scroll-margin-bottom。（scroll-snap-margin-bottom）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  declare readonly scrollSnapMarginBottom: group6.ScrollSnapMarginBottomCss;
  /**
   * 设置滚动吸附区域左侧外扩的旧名称；新代码使用 scroll-margin-left。（scroll-snap-margin-left）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  declare readonly scrollSnapMarginLeft: group6.ScrollSnapMarginLeftCss;
  /**
   * 设置滚动吸附区域右侧外扩的旧名称；新代码使用 scroll-margin-right。（scroll-snap-margin-right）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  declare readonly scrollSnapMarginRight: group6.ScrollSnapMarginRightCss;
  /**
   * 设置滚动吸附区域上侧外扩的旧名称；新代码使用 scroll-margin-top。（scroll-snap-margin-top）
   *
   * CSS 语法：`<length>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  declare readonly scrollSnapMarginTop: group6.ScrollSnapMarginTopCss;
  /**
   * 设置滚动时是否允许越过该元素的吸附位置。（scroll-snap-stop）
   *
   * CSS 语法：`normal | always`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  declare readonly scrollSnapStop: group6.ScrollSnapStopCss;
  /**
   * 设置滚动容器的吸附轴和吸附强度。（scroll-snap-type）
   *
   * 轴和吸附强度的组合通过 raw 写入，例如 x mandatory；单独声明轴时省略的强度按 CSS 规则处理。
   *
   * CSS 语法：`none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @example
   * s.scrollSnapType.raw('x mandatory') // scroll-snap-type:x mandatory;
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  declare readonly scrollSnapType: group6.ScrollSnapTypeCss;
  /**
   * 同时声明滚动进度时间线的名称和轴。（scroll-timeline）
   *
   * CSS 语法：`[ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  declare readonly scrollTimeline: group6.ScrollTimelineCss;
  /**
   * 设置滚动进度时间线所观察的滚动轴。（scroll-timeline-axis）
   *
   * CSS 语法：`[ block | inline | x | y ]#`。
   *
   * CSS 初始值：`block`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  declare readonly scrollTimelineAxis: group6.ScrollTimelineAxisCss;
  /**
   * 声明基于当前容器滚动进度的时间线名称。（scroll-timeline-name）
   *
   * CSS 语法：`[ none | <dashed-ident> ]#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  declare readonly scrollTimelineName: group6.ScrollTimelineNameCss;
  /**
   * 设置滚动条滑块和轨道的颜色。（scrollbar-color）
   *
   * CSS 语法：`auto | <color>{2}`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  declare readonly scrollbarColor: group6.ScrollbarColorCss;
  /**
   * 设置是否预留滚动条槽位，以减少滚动条出现时的布局变化。（scrollbar-gutter）
   *
   * CSS 语法：`auto | stable && both-edges?`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  declare readonly scrollbarGutter: group6.ScrollbarGutterCss;
  /**
   * 设置滚动条采用正常、较细或隐藏的外观。（scrollbar-width）
   *
   * CSS 语法：`auto | thin | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  declare readonly scrollbarWidth: group6.ScrollbarWidthCss;
  /**
   * 设置从图像 alpha 信息提取环绕形状时的阈值。（shape-image-threshold）
   *
   * CSS 语法：`<opacity-value>`。
   *
   * CSS 初始值：`0.0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  declare readonly shapeImageThreshold: group6.ShapeImageThresholdCss;
  /**
   * 设置文字环绕形状之外的额外间距。（shape-margin）
   *
   * CSS 语法：`<length-percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  declare readonly shapeMargin: group6.ShapeMarginCss;
  /**
   * 设置浮动元素周围行内内容所环绕的形状。（shape-outside）
   *
   * CSS 语法：`none | [ <shape-box> || <basic-shape> ] | <image>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  declare readonly shapeOutside: group6.ShapeOutsideCss;
  /**
   * 向 SVG 渲染器提供图形绘制精度与速度的偏好。（shape-rendering）
   *
   * CSS 语法：`auto | optimizeSpeed | crispEdges | geometricPrecision`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  declare readonly shapeRendering: group6.ShapeRenderingCss;
  /**
   * 设置语音呈现时文字、数字和标点的朗读方式；使用前核对语音媒体支持。（speak-as）
   *
   * CSS 语法：`normal | spell-out || digits || [ literal-punctuation | no-punctuation ]`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  declare readonly speakAs: group6.SpeakAsCss;
  /**
   * 设置 SVG 渐变 stop 节点的颜色。（stop-color）
   *
   * CSS 语法：`<'color'>`。
   *
   * CSS 初始值：`black`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  declare readonly stopColor: group6.StopColorCss;
  /**
   * 设置 SVG 渐变 stop 节点的不透明度。（stop-opacity）
   *
   * CSS 语法：`<'opacity'>`。
   *
   * CSS 初始值：`black`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  declare readonly stopOpacity: group6.StopOpacityCss;
  /**
   * 设置 SVG 图形轮廓的描边绘制方式。（stroke）
   *
   * CSS 语法：`<paint>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  declare readonly stroke: group6.StrokeCss;
  /**
   * 设置描边颜色的扩展属性；常规 SVG 优先使用 stroke 并核对支持情况。（stroke-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`transparent`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-color
   */
  declare readonly strokeColor: group6.StrokeColorCss;
  /**
   * 设置 SVG 描边虚线中线段与空隙的长度序列。（stroke-dasharray）
   *
   * CSS 语法：`none | <dasharray>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  declare readonly strokeDasharray: group6.StrokeDasharrayCss;
  /**
   * 设置 SVG 虚线描边相对于路径起点的偏移。（stroke-dashoffset）
   *
   * CSS 语法：`<length-percentage> | <number>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  declare readonly strokeDashoffset: group6.StrokeDashoffsetCss;
  /**
   * 设置开放 SVG 子路径端点的描边形状。（stroke-linecap）
   *
   * CSS 语法：`butt | round | square`。
   *
   * CSS 初始值：`butt`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  declare readonly strokeLinecap: group6.StrokeLinecapCss;
  /**
   * 设置 SVG 路径转角处描边的连接形状。（stroke-linejoin）
   *
   * CSS 语法：`miter | miter-clip | round | bevel | arcs`。
   *
   * CSS 初始值：`miter`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  declare readonly strokeLinejoin: group6.StrokeLinejoinCss;
  /**
   * 限制尖角连接的延伸比例，超过阈值时改变连接形状。（stroke-miterlimit）
   *
   * CSS 语法：`<number>`。
   *
   * CSS 初始值：`4`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  declare readonly strokeMiterlimit: group6.StrokeMiterlimitCss;
  /**
   * 设置 SVG 描边的不透明度，不影响填充。（stroke-opacity）
   *
   * CSS 语法：`<'opacity'>`。
   *
   * CSS 初始值：`1`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  declare readonly strokeOpacity: group6.StrokeOpacityCss;
  /**
   * 设置 SVG 描边宽度。（stroke-width）
   *
   * CSS 语法：`<length-percentage> | <number>`。
   *
   * CSS 初始值：`1px`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  declare readonly strokeWidth: group6.StrokeWidthCss;
  /**
   * 设置保留制表符时每个制表位的宽度。（tab-size）
   *
   * CSS 语法：`<integer> | <length>`。
   *
   * CSS 初始值：`8`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  declare readonly tabSize: group6.TabSizeCss;
  /**
   * 设置表格列宽采用自动还是固定布局算法。（table-layout）
   *
   * CSS 语法：`auto | fixed`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  declare readonly tableLayout: group6.TableLayoutCss;
  /**
   * 设置块容器中行内内容的水平或逻辑方向对齐。（text-align）
   *
   * CSS 语法：`start | end | left | right | center | justify | match-parent`。
   *
   * CSS 初始值：`start`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  declare readonly textAlign: group6.TextAlignCss;
  /**
   * 设置段落最后一行或强制换行前一行的对齐方式。（text-align-last）
   *
   * CSS 语法：`auto | start | end | left | right | center | justify`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  declare readonly textAlignLast: group6.TextAlignLastCss;
  /**
   * 设置 SVG 文本片段相对于定位点的锚定方式。（text-anchor）
   *
   * CSS 语法：`start | middle | end`。
   *
   * CSS 初始值：`start`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  declare readonly textAnchor: group6.TextAnchorCss;
  /**
   * 设置中西文、数字等不同文字系统之间的自动间距。（text-autospace）
   *
   * CSS 语法：`normal | <autospace> | auto`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  declare readonly textAutospace: group6.TextAutospaceCss;
  /**
   * 同时设置文本盒边缘参照及首尾空白裁减。（text-box）
   *
   * CSS 语法：`normal | <'text-box-trim'> || <'text-box-edge'>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  declare readonly textBox: group6.TextBoxCss;
  /**
   * 选择文本盒裁减或对齐使用的字体边缘度量。（text-box-edge）
   *
   * CSS 语法：`auto | <text-edge>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  declare readonly textBoxEdge: group6.TextBoxEdgeCss;
  /**
   * 裁减文本块开头或结尾的额外行高空白。（text-box-trim）
   *
   * CSS 语法：`none | trim-start | trim-end | trim-both`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  declare readonly textBoxTrim: group6.TextBoxTrimCss;
  /**
   * 设置竖排文字中多个字符是否合成为一个横排字形单元。（text-combine-upright）
   *
   * CSS 语法：`none | all | [ digits <integer>? ]`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  declare readonly textCombineUpright: group6.TextCombineUprightCss;
  /**
   * 集中设置文本装饰线的位置、线型、颜色及粗细。（text-decoration）
   *
   * CSS 语法：`<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  declare readonly textDecoration: group6.TextDecorationCss;
  /**
   * 设置文本装饰线颜色。（text-decoration-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  declare readonly textDecorationColor: group6.TextDecorationColorCss;
  /**
   * 设置下划线、上划线或删除线等装饰线位置。（text-decoration-line）
   *
   * CSS 语法：`none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  declare readonly textDecorationLine: group6.TextDecorationLineCss;
  /**
   * 设置文本装饰线跳过哪些内容；具体语法需核对支持情况。（text-decoration-skip）
   *
   * CSS 语法：`none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`。
   *
   * CSS 初始值：`objects`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  declare readonly textDecorationSkip: group6.TextDecorationSkipCss;
  /**
   * 设置装饰线是否避让字形的笔画。（text-decoration-skip-ink）
   *
   * CSS 语法：`auto | all | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  declare readonly textDecorationSkipInk: group6.TextDecorationSkipInkCss;
  /**
   * 设置文本装饰线的实线、波浪线等线型。（text-decoration-style）
   *
   * CSS 语法：`solid | double | dotted | dashed | wavy`。
   *
   * CSS 初始值：`solid`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  declare readonly textDecorationStyle: group6.TextDecorationStyleCss;
  /**
   * 设置文本装饰线粗细。（text-decoration-thickness）
   *
   * CSS 语法：`auto | from-font | <length> | <percentage> `。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  declare readonly textDecorationThickness: group6.TextDecorationThicknessCss;
  /**
   * 同时设置文字着重号的样式和颜色。（text-emphasis）
   *
   * CSS 语法：`<'text-emphasis-style'> || <'text-emphasis-color'>`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  declare readonly textEmphasis: group6.TextEmphasisCss;
  /**
   * 设置文字着重号颜色。（text-emphasis-color）
   *
   * CSS 语法：`<color>`。
   *
   * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  declare readonly textEmphasisColor: group6.TextEmphasisColorCss;
  /**
   * 设置文字着重号位于文字的哪一侧。（text-emphasis-position）
   *
   * CSS 语法：`auto | [ over | under ] && [ right | left ]?`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  declare readonly textEmphasisPosition: group6.TextEmphasisPositionCss;
  /**
   * 设置文字着重号的形状和填充方式。（text-emphasis-style）
   *
   * CSS 语法：`none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  declare readonly textEmphasisStyle: group6.TextEmphasisStyleCss;
  /**
   * 设置文本行的缩进距离。（text-indent）
   *
   * CSS 语法：`<length-percentage> && hanging? && each-line?`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  declare readonly textIndent: group6.TextIndentCss;
  /**
   * 设置两端对齐时增加间距的算法。（text-justify）
   *
   * CSS 语法：`auto | inter-character | inter-word | none`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  declare readonly textJustify: group6.TextJustifyCss;
  /**
   * 设置竖排模式下字符的方向。（text-orientation）
   *
   * CSS 语法：`mixed | upright | sideways`。
   *
   * CSS 初始值：`mixed`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  declare readonly textOrientation: group6.TextOrientationCss;
  /**
   * 设置被裁剪的行内溢出文本如何提示，例如显示省略号。（text-overflow）
   *
   * 本属性不自行制造溢出。单行省略通常还需要受限宽度、overflow:hidden 和 white-space:nowrap。
   *
   * CSS 语法：`[ clip | ellipsis | <string> ]{1,2}`。
   *
   * CSS 初始值：`clip`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  declare readonly textOverflow: group6.TextOverflowCss;
  /**
   * 向渲染器提供文本速度、可读性或几何精度的偏好。（text-rendering）
   *
   * CSS 语法：`auto | optimizeSpeed | optimizeLegibility | geometricPrecision`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  declare readonly textRendering: group6.TextRenderingCss;
  /**
   * 设置文字及其装饰的阴影，可叠加多层。（text-shadow）
   *
   * CSS 语法：`none | <shadow-t>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  declare readonly textShadow: group6.TextShadowCss;
  /**
   * 控制移动浏览器为提升可读性而进行的文字自动放大。（text-size-adjust）
   *
   * CSS 语法：`none | auto | <percentage>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  declare readonly textSizeAdjust: group6.TextSizeAdjustCss;
  /**
   * 设置东亚文字标点等字符周围空白的裁减。（text-spacing-trim）
   *
   * CSS 语法：`space-all | normal | space-first | trim-start`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  declare readonly textSpacingTrim: group6.TextSpacingTrimCss;
  /**
   * 设置文字显示时的大小写、全角或其他字形转换。（text-transform）
   *
   * CSS 语法：`none | [ capitalize | uppercase | lowercase ] || full-width || full-size-kana | math-auto`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  declare readonly textTransform: group6.TextTransformCss;
  /**
   * 设置下划线相对于默认位置的偏移。（text-underline-offset）
   *
   * CSS 语法：`auto | <length> | <percentage> `。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  declare readonly textUnderlineOffset: group6.TextUnderlineOffsetCss;
  /**
   * 设置下划线相对于文字基线或竖排文字的放置方式。（text-underline-position）
   *
   * CSS 语法：`auto | from-font | [ under || [ left | right ] ]`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  declare readonly textUnderlinePosition: group6.TextUnderlinePositionCss;
  /**
   * 同时设置文本是否换行及换行策略。（text-wrap）
   *
   * CSS 语法：`<'text-wrap-mode'> || <'text-wrap-style'>`。
   *
   * CSS 初始值：`wrap`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  declare readonly textWrap: group6.TextWrapCss;
  /**
   * 设置文本是否允许软换行。（text-wrap-mode）
   *
   * CSS 语法：`wrap | nowrap`。
   *
   * CSS 初始值：`wrap`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  declare readonly textWrapMode: group6.TextWrapModeCss;
  /**
   * 设置文本换行的排版策略，例如平衡各行长度。（text-wrap-style）
   *
   * CSS 语法：`auto | balance | stable | pretty`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  declare readonly textWrapStyle: group6.TextWrapStyleCss;
  /**
   * 扩大命名动画时间线的可引用作用域。（timeline-scope）
   *
   * CSS 语法：`none | <dashed-ident>#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  declare readonly timelineScope: group6.TimelineScopeCss;
  /**
   * 设置定位元素相对于其定位参照的上侧偏移。（top）
   *
   * CSS 语法：`auto | <length-percentage> | <anchor()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  declare readonly top: group6.TopCss;
  /**
   * 声明浏览器可以处理的触摸平移与缩放手势。（touch-action）
   *
   * CSS 语法：`auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  declare readonly touchAction: group6.TouchActionCss;
  /**
   * 按顺序组合平移、旋转、缩放等二维或三维变换。（transform）
   *
   * 多个变换的顺序会影响结果。变换通常不改变元素在普通文档流中预留的尺寸。
   *
   * CSS 语法：`none | <transform-list>`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  declare readonly transform: group6.TransformCss;
  /**
   * 设置变换及其原点所依据的参照盒。（transform-box）
   *
   * CSS 语法：`content-box | border-box | fill-box | stroke-box | view-box`。
   *
   * CSS 初始值：`view-box`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  declare readonly transformBox: group6.TransformBoxCss;
  /**
   * 设置元素变换的原点。（transform-origin）
   *
   * CSS 语法：`[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`。
   *
   * CSS 初始值：`50% 50% 0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  declare readonly transformOrigin: group6.TransformOriginCss;
  /**
   * 控制子元素的三维位置保留在三维空间还是展平。（transform-style）
   *
   * CSS 语法：`flat | preserve-3d`。
   *
   * CSS 初始值：`flat`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  declare readonly transformStyle: group6.TransformStyleCss;
  /**
   * 集中设置属性变化过渡的目标、时长、缓动、延迟和行为。（transition）
   *
   * CSS 语法：`<single-transition>#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  declare readonly transition: group6.TransitionCss;
  /**
   * 控制离散属性是否可以启动 CSS 过渡。（transition-behavior）
   *
   * CSS 语法：`<transition-behavior-value>#`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  declare readonly transitionBehavior: group6.TransitionBehaviorCss;
  /**
   * 设置属性变化后开始过渡的延迟。（transition-delay）
   *
   * CSS 语法：`<time>#`。
   *
   * CSS 初始值：`0s`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  declare readonly transitionDelay: group6.TransitionDelayCss;
  /**
   * 设置过渡从开始到完成的时长。（transition-duration）
   *
   * CSS 语法：`<time>#`。
   *
   * CSS 初始值：`0s`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  declare readonly transitionDuration: group6.TransitionDurationCss;
  /**
   * 指定发生变化时需要过渡的 CSS 属性。（transition-property）
   *
   * CSS 语法：`none | <single-transition-property>#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  declare readonly transitionProperty: group6.TransitionPropertyCss;
  /**
   * 设置过渡进度变化的缓动函数。（transition-timing-function）
   *
   * CSS 语法：`<easing-function>#`。
   *
   * CSS 初始值：`ease`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  declare readonly transitionTimingFunction: group6.TransitionTimingFunctionCss;
  /**
   * 独立设置元素在二维或三维空间中的平移。（translate）
   *
   * CSS 语法：`none | <length-percentage> [ <length-percentage> <length>? ]?`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  declare readonly translate: group6.TranslateCss;
  /**
   * 设置元素如何参与 Unicode 双向文本算法，通常与 direction 配合。（unicode-bidi）
   *
   * CSS 语法：`normal | embed | isolate | bidi-override | isolate-override | plaintext`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  declare readonly unicodeBidi: group7.UnicodeBidiCss;
  /**
   * 设置用户是否可以选取元素中的文本。（user-select）
   *
   * CSS 语法：`auto | text | none | all`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  declare readonly userSelect: group7.UserSelectCss;
  /**
   * 设置 SVG 图形变换时对描边等矢量效果的处理。（vector-effect）
   *
   * CSS 语法：`none | non-scaling-stroke | non-scaling-size | non-rotation | fixed-position`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  declare readonly vectorEffect: group7.VectorEffectCss;
  /**
   * 设置行内级盒子或表格单元格的垂直对齐，不用于普通块盒居中。（vertical-align）
   *
   * CSS 语法：`baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`。
   *
   * CSS 初始值：`baseline`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  declare readonly verticalAlign: group7.VerticalAlignCss;
  /**
   * 同时声明基于元素可见进度的时间线名称与轴。（view-timeline）
   *
   * CSS 语法：`[ <'view-timeline-name'> [ <'view-timeline-axis'> || <'view-timeline-inset'> ]? ]#`。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  declare readonly viewTimeline: group7.ViewTimelineCss;
  /**
   * 设置可见进度时间线所观察的滚动轴。（view-timeline-axis）
   *
   * CSS 语法：`[ block | inline | x | y ]#`。
   *
   * CSS 初始值：`block`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  declare readonly viewTimelineAxis: group7.ViewTimelineAxisCss;
  /**
   * 设置可见进度时间线使用的滚动视口内缩范围。（view-timeline-inset）
   *
   * CSS 语法：`[ [ auto | <length-percentage> ]{1,2} ]#`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  declare readonly viewTimelineInset: group7.ViewTimelineInsetCss;
  /**
   * 声明基于元素进入和离开滚动视口的时间线名称。（view-timeline-name）
   *
   * CSS 语法：`[ none | <dashed-ident> ]#`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  declare readonly viewTimelineName: group7.ViewTimelineNameCss;
  /**
   * 为视图过渡的快照伪元素分组，以便共用样式。（view-transition-class）
   *
   * CSS 语法：`none | <custom-ident>+`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  declare readonly viewTransitionClass: group7.ViewTransitionClassCss;
  /**
   * 为视图过渡中的元素命名，以匹配前后状态的快照。（view-transition-name）
   *
   * CSS 语法：`none | <custom-ident> | match-element`。
   *
   * CSS 初始值：`none`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  declare readonly viewTransitionName: group7.ViewTransitionNameCss;
  /**
   * 设置元素是否可见；隐藏通常保留布局空间。（visibility）
   *
   * CSS 语法：`visible | hidden | collapse`。
   *
   * CSS 初始值：`visible`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  declare readonly visibility: group7.VisibilityCss;
  /**
   * 设置空白折叠和换行处理方式。（white-space）
   *
   * CSS 语法：`normal | pre | pre-wrap | pre-line | <'white-space-collapse'> || <'text-wrap-mode'>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  declare readonly whiteSpace: group7.WhiteSpaceCss;
  /**
   * 设置空格、制表符和换行符如何折叠或保留。（white-space-collapse）
   *
   * CSS 语法：`collapse | preserve | preserve-breaks | preserve-spaces | break-spaces`。
   *
   * CSS 初始值：`collapse`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  declare readonly whiteSpaceCollapse: group7.WhiteSpaceCollapseCss;
  /**
   * 设置分页或分栏断点后需保留的最少行数。（widows）
   *
   * CSS 语法：`<integer>`。
   *
   * CSS 初始值：`2`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  declare readonly widows: group7.WidowsCss;
  /**
   * 设置元素的物理宽度，盒子范围受 box-sizing 影响。（width）
   *
   * 百分比依据包含块解析；auto、内部尺寸和最小/最大约束共同决定最终使用尺寸。
   *
   * CSS 语法：`auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @example
   * s.width.rem(20) // width:20rem;
   * @example
   * s.width.clamp('12rem', '50vw', '40rem') // width:clamp(12rem, 50vw, 40rem);
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  declare readonly width: group7.WidthCss;
  /**
   * 提前告知浏览器可能发生变化的属性，便于准备优化资源。（will-change）
   *
   * 仅对即将发生的变化短期使用；长期或大量声明可能占用额外资源，并提前改变层叠上下文。
   *
   * CSS 语法：`auto | <animateable-feature>#`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  declare readonly willChange: group7.WillChangeCss;
  /**
   * 设置单词内部或文字之间的断行规则。（word-break）
   *
   * CSS 语法：`normal | break-all | keep-all | break-word | auto-phrase`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  declare readonly wordBreak: group7.WordBreakCss;
  /**
   * 设置单词或词间分隔符的额外间距。（word-spacing）
   *
   * CSS 语法：`normal | <length>`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  declare readonly wordSpacing: group7.WordSpacingCss;
  /**
   * 设置长文本的额外换行行为；是 overflow-wrap 的兼容名称。（word-wrap）
   *
   * CSS 语法：`normal | break-word`。
   *
   * CSS 初始值：`normal`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-wrap
   */
  declare readonly wordWrap: group7.WordWrapCss;
  /**
   * 设置水平或竖直书写模式，以及行和块的推进方向。（writing-mode）
   *
   * CSS 语法：`horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`。
   *
   * CSS 初始值：`horizontal-tb`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  declare readonly writingMode: group7.WritingModeCss;
  /**
   * 设置适用 SVG 元素的水平几何坐标。（x）
   *
   * CSS 语法：`<length> | <percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  declare readonly x: group7.XCss;
  /**
   * 设置适用 SVG 元素的垂直几何坐标。（y）
   *
   * CSS 语法：`<length> | <percentage>`。
   *
   * CSS 初始值：`0`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  declare readonly y: group7.YCss;
  /**
   * 设置元素在所属层叠上下文中的层叠级别。（z-index）
   *
   * 数值只在所属层叠上下文内比较；更大的数值不保证盖过其他层叠上下文。Flex/Grid 项目也可以使用 z-index。
   *
   * CSS 语法：`auto | <integer>`。
   *
   * CSS 初始值：`auto`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  declare readonly zIndex: group7.ZIndexCss;
  /**
   * 设置元素及其布局的缩放比例，与 transform:scale 的布局行为不同。（zoom）
   *
   * CSS 语法：`normal | reset | <number [0,∞]> || <percentage [0,∞]>`。
   *
   * CSS 初始值：`1`（不同于浏览器默认样式表）。
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  declare readonly zoom: group7.ZoomCss;
}
function defineSystemProperty(name: string, create: () => object): void {
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
