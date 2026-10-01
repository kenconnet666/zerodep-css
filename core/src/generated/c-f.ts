// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/**
 * caption-side 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CaptionSideKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caption-side:bottom;`。 */
  readonly bottom: Property.CaptionSide | CssString = 'bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caption-side:inherit;`。
   */
  readonly inherit: Property.CaptionSide | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caption-side:initial;`。
   */
  readonly initial: Property.CaptionSide | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caption-side:revert;`。
   */
  readonly revert: Property.CaptionSide | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caption-side:revert-layer;`。
   */
  readonly revertLayer: Property.CaptionSide | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caption-side:top;`。 */
  readonly top: Property.CaptionSide | CssString = 'top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caption-side:unset;`。
   */
  readonly unset: Property.CaptionSide | CssString = 'unset';
}

/**
 * 设置表格标题相对于表格的放置侧。（caption-side）
 *
 * CSS 初始值：`top`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
 */
export class CaptionSideCss extends CssProperty {
  /** CSS 声明：`caption-side:bottom;`。 */
  readonly bottom: string = 'caption-side:bottom;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caption-side:inherit;`。
   */
  readonly inherit: string = 'caption-side:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caption-side:initial;`。
   */
  readonly initial: string = 'caption-side:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caption-side:revert;`。
   */
  readonly revert: string = 'caption-side:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caption-side:revert-layer;`。
   */
  readonly revertLayer: string = 'caption-side:revert-layer;';
  /** CSS 声明：`caption-side:top;`。 */
  readonly top: string = 'caption-side:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caption-side:unset;`。
   */
  readonly unset: string = 'caption-side:unset;';
  /**
   * 创建 caption-side 属性作者；普通使用通过 s.captionSide 取得共享实例。
   * @example
   * class CustomCaptionSideCss extends CaptionSideCss {}
   */
  constructor() {
    super('caption-side');
  }
  /**
   * 原样生成 caption-side 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 caption-side:value;。
   * @example
   * s.captionSide.raw('inherit') // caption-side:inherit;
   */
  raw(value: Property.CaptionSide | CssString): string {
    return this.declaration(value);
  }
}

/**
 * caret 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CaretKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:AccentColor;`。 */
  readonly AccentColor: Property.Caret | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:AccentColorText;`。 */
  readonly AccentColorText: Property.Caret | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ActiveBorder;`。 */
  readonly ActiveBorder: Property.Caret | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ActiveCaption;`。 */
  readonly ActiveCaption: Property.Caret | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ActiveText;`。 */
  readonly ActiveText: Property.Caret | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:AppWorkspace;`。 */
  readonly AppWorkspace: Property.Caret | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Background;`。 */
  readonly Background: Property.Caret | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ButtonBorder;`。 */
  readonly ButtonBorder: Property.Caret | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ButtonFace;`。 */
  readonly ButtonFace: Property.Caret | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.Caret | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ButtonShadow;`。 */
  readonly ButtonShadow: Property.Caret | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ButtonText;`。 */
  readonly ButtonText: Property.Caret | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Canvas;`。 */
  readonly Canvas: Property.Caret | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:CanvasText;`。 */
  readonly CanvasText: Property.Caret | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:CaptionText;`。 */
  readonly CaptionText: Property.Caret | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Field;`。 */
  readonly Field: Property.Caret | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:FieldText;`。 */
  readonly FieldText: Property.Caret | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:GrayText;`。 */
  readonly GrayText: Property.Caret | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Highlight;`。 */
  readonly Highlight: Property.Caret | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:HighlightText;`。 */
  readonly HighlightText: Property.Caret | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:InactiveBorder;`。 */
  readonly InactiveBorder: Property.Caret | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:InactiveCaption;`。 */
  readonly InactiveCaption: Property.Caret | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.Caret | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:InfoBackground;`。 */
  readonly InfoBackground: Property.Caret | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:InfoText;`。 */
  readonly InfoText: Property.Caret | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:LinkText;`。 */
  readonly LinkText: Property.Caret | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Mark;`。 */
  readonly Mark: Property.Caret | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:MarkText;`。 */
  readonly MarkText: Property.Caret | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Menu;`。 */
  readonly Menu: Property.Caret | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:MenuText;`。 */
  readonly MenuText: Property.Caret | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Scrollbar;`。 */
  readonly Scrollbar: Property.Caret | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:SelectedItem;`。 */
  readonly SelectedItem: Property.Caret | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:SelectedItemText;`。 */
  readonly SelectedItemText: Property.Caret | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.Caret | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ThreeDFace;`。 */
  readonly ThreeDFace: Property.Caret | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.Caret | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.Caret | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.Caret | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:VisitedText;`。 */
  readonly VisitedText: Property.Caret | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:Window;`。 */
  readonly Window: Property.Caret | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:WindowFrame;`。 */
  readonly WindowFrame: Property.Caret | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:WindowText;`。 */
  readonly WindowText: Property.Caret | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:aliceblue;`。 */
  readonly aliceblue: Property.Caret | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:antiquewhite;`。 */
  readonly antiquewhite: Property.Caret | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:aqua;`。 */
  readonly aqua: Property.Caret | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:aquamarine;`。 */
  readonly aquamarine: Property.Caret | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:auto;`。 */
  readonly auto: Property.Caret | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:azure;`。 */
  readonly azure: Property.Caret | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:bar;`。 */
  readonly bar: Property.Caret | CssString = 'bar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:beige;`。 */
  readonly beige: Property.Caret | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:bisque;`。 */
  readonly bisque: Property.Caret | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:black;`。 */
  readonly black: Property.Caret | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:blanchedalmond;`。 */
  readonly blanchedalmond: Property.Caret | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:block;`。 */
  readonly block: Property.Caret | CssString = 'block';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:blue;`。 */
  readonly blue: Property.Caret | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:blueviolet;`。 */
  readonly blueviolet: Property.Caret | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:brown;`。 */
  readonly brown: Property.Caret | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:burlywood;`。 */
  readonly burlywood: Property.Caret | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:cadetblue;`。 */
  readonly cadetblue: Property.Caret | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:chartreuse;`。 */
  readonly chartreuse: Property.Caret | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:chocolate;`。 */
  readonly chocolate: Property.Caret | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:coral;`。 */
  readonly coral: Property.Caret | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:cornflowerblue;`。 */
  readonly cornflowerblue: Property.Caret | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:cornsilk;`。 */
  readonly cornsilk: Property.Caret | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:crimson;`。 */
  readonly crimson: Property.Caret | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`caret:currentColor;`。
   */
  readonly currentColor: Property.Caret | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:cyan;`。 */
  readonly cyan: Property.Caret | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkblue;`。 */
  readonly darkblue: Property.Caret | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkcyan;`。 */
  readonly darkcyan: Property.Caret | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.Caret | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkgray;`。 */
  readonly darkgray: Property.Caret | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkgreen;`。 */
  readonly darkgreen: Property.Caret | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkgrey;`。 */
  readonly darkgrey: Property.Caret | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkkhaki;`。 */
  readonly darkkhaki: Property.Caret | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkmagenta;`。 */
  readonly darkmagenta: Property.Caret | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkolivegreen;`。 */
  readonly darkolivegreen: Property.Caret | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkorange;`。 */
  readonly darkorange: Property.Caret | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkorchid;`。 */
  readonly darkorchid: Property.Caret | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkred;`。 */
  readonly darkred: Property.Caret | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darksalmon;`。 */
  readonly darksalmon: Property.Caret | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkseagreen;`。 */
  readonly darkseagreen: Property.Caret | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkslateblue;`。 */
  readonly darkslateblue: Property.Caret | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkslategray;`。 */
  readonly darkslategray: Property.Caret | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkslategrey;`。 */
  readonly darkslategrey: Property.Caret | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkturquoise;`。 */
  readonly darkturquoise: Property.Caret | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:darkviolet;`。 */
  readonly darkviolet: Property.Caret | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:deeppink;`。 */
  readonly deeppink: Property.Caret | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:deepskyblue;`。 */
  readonly deepskyblue: Property.Caret | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:dimgray;`。 */
  readonly dimgray: Property.Caret | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:dimgrey;`。 */
  readonly dimgrey: Property.Caret | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:dodgerblue;`。 */
  readonly dodgerblue: Property.Caret | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:firebrick;`。 */
  readonly firebrick: Property.Caret | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:floralwhite;`。 */
  readonly floralwhite: Property.Caret | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:forestgreen;`。 */
  readonly forestgreen: Property.Caret | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:fuchsia;`。 */
  readonly fuchsia: Property.Caret | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:gainsboro;`。 */
  readonly gainsboro: Property.Caret | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ghostwhite;`。 */
  readonly ghostwhite: Property.Caret | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:gold;`。 */
  readonly gold: Property.Caret | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:goldenrod;`。 */
  readonly goldenrod: Property.Caret | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:gray;`。 */
  readonly gray: Property.Caret | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:green;`。 */
  readonly green: Property.Caret | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:greenyellow;`。 */
  readonly greenyellow: Property.Caret | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:grey;`。 */
  readonly grey: Property.Caret | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:honeydew;`。 */
  readonly honeydew: Property.Caret | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:hotpink;`。 */
  readonly hotpink: Property.Caret | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:indianred;`。 */
  readonly indianred: Property.Caret | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:indigo;`。 */
  readonly indigo: Property.Caret | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret:inherit;`。
   */
  readonly inherit: Property.Caret | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret:initial;`。
   */
  readonly initial: Property.Caret | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:ivory;`。 */
  readonly ivory: Property.Caret | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:khaki;`。 */
  readonly khaki: Property.Caret | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lavender;`。 */
  readonly lavender: Property.Caret | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lavenderblush;`。 */
  readonly lavenderblush: Property.Caret | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lawngreen;`。 */
  readonly lawngreen: Property.Caret | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lemonchiffon;`。 */
  readonly lemonchiffon: Property.Caret | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightblue;`。 */
  readonly lightblue: Property.Caret | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightcoral;`。 */
  readonly lightcoral: Property.Caret | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightcyan;`。 */
  readonly lightcyan: Property.Caret | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.Caret | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightgray;`。 */
  readonly lightgray: Property.Caret | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightgreen;`。 */
  readonly lightgreen: Property.Caret | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightgrey;`。 */
  readonly lightgrey: Property.Caret | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightpink;`。 */
  readonly lightpink: Property.Caret | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightsalmon;`。 */
  readonly lightsalmon: Property.Caret | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightseagreen;`。 */
  readonly lightseagreen: Property.Caret | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightskyblue;`。 */
  readonly lightskyblue: Property.Caret | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightslategray;`。 */
  readonly lightslategray: Property.Caret | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightslategrey;`。 */
  readonly lightslategrey: Property.Caret | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightsteelblue;`。 */
  readonly lightsteelblue: Property.Caret | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lightyellow;`。 */
  readonly lightyellow: Property.Caret | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:lime;`。 */
  readonly lime: Property.Caret | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:limegreen;`。 */
  readonly limegreen: Property.Caret | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:linen;`。 */
  readonly linen: Property.Caret | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:magenta;`。 */
  readonly magenta: Property.Caret | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:maroon;`。 */
  readonly maroon: Property.Caret | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.Caret | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumblue;`。 */
  readonly mediumblue: Property.Caret | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumorchid;`。 */
  readonly mediumorchid: Property.Caret | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumpurple;`。 */
  readonly mediumpurple: Property.Caret | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumseagreen;`。 */
  readonly mediumseagreen: Property.Caret | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumslateblue;`。 */
  readonly mediumslateblue: Property.Caret | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.Caret | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumturquoise;`。 */
  readonly mediumturquoise: Property.Caret | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mediumvioletred;`。 */
  readonly mediumvioletred: Property.Caret | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:midnightblue;`。 */
  readonly midnightblue: Property.Caret | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mintcream;`。 */
  readonly mintcream: Property.Caret | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:mistyrose;`。 */
  readonly mistyrose: Property.Caret | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:moccasin;`。 */
  readonly moccasin: Property.Caret | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:navajowhite;`。 */
  readonly navajowhite: Property.Caret | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:navy;`。 */
  readonly navy: Property.Caret | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:oldlace;`。 */
  readonly oldlace: Property.Caret | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:olive;`。 */
  readonly olive: Property.Caret | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:olivedrab;`。 */
  readonly olivedrab: Property.Caret | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:orange;`。 */
  readonly orange: Property.Caret | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:orangered;`。 */
  readonly orangered: Property.Caret | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:orchid;`。 */
  readonly orchid: Property.Caret | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:palegoldenrod;`。 */
  readonly palegoldenrod: Property.Caret | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:palegreen;`。 */
  readonly palegreen: Property.Caret | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:paleturquoise;`。 */
  readonly paleturquoise: Property.Caret | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:palevioletred;`。 */
  readonly palevioletred: Property.Caret | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:papayawhip;`。 */
  readonly papayawhip: Property.Caret | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:peachpuff;`。 */
  readonly peachpuff: Property.Caret | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:peru;`。 */
  readonly peru: Property.Caret | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:pink;`。 */
  readonly pink: Property.Caret | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:plum;`。 */
  readonly plum: Property.Caret | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:powderblue;`。 */
  readonly powderblue: Property.Caret | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:purple;`。 */
  readonly purple: Property.Caret | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:rebeccapurple;`。 */
  readonly rebeccapurple: Property.Caret | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:red;`。 */
  readonly red: Property.Caret | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret:revert;`。
   */
  readonly revert: Property.Caret | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret:revert-layer;`。
   */
  readonly revertLayer: Property.Caret | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:rosybrown;`。 */
  readonly rosybrown: Property.Caret | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:royalblue;`。 */
  readonly royalblue: Property.Caret | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:saddlebrown;`。 */
  readonly saddlebrown: Property.Caret | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:salmon;`。 */
  readonly salmon: Property.Caret | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:sandybrown;`。 */
  readonly sandybrown: Property.Caret | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:seagreen;`。 */
  readonly seagreen: Property.Caret | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:seashell;`。 */
  readonly seashell: Property.Caret | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:sienna;`。 */
  readonly sienna: Property.Caret | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:silver;`。 */
  readonly silver: Property.Caret | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:skyblue;`。 */
  readonly skyblue: Property.Caret | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:slateblue;`。 */
  readonly slateblue: Property.Caret | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:slategray;`。 */
  readonly slategray: Property.Caret | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:slategrey;`。 */
  readonly slategrey: Property.Caret | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:snow;`。 */
  readonly snow: Property.Caret | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:springgreen;`。 */
  readonly springgreen: Property.Caret | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:steelblue;`。 */
  readonly steelblue: Property.Caret | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:tan;`。 */
  readonly tan: Property.Caret | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:teal;`。 */
  readonly teal: Property.Caret | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:thistle;`。 */
  readonly thistle: Property.Caret | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:tomato;`。 */
  readonly tomato: Property.Caret | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`caret:transparent;`。
   */
  readonly transparent: Property.Caret | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:turquoise;`。 */
  readonly turquoise: Property.Caret | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:underscore;`。 */
  readonly underscore: Property.Caret | CssString = 'underscore';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret:unset;`。
   */
  readonly unset: Property.Caret | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:violet;`。 */
  readonly violet: Property.Caret | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:wheat;`。 */
  readonly wheat: Property.Caret | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:white;`。 */
  readonly white: Property.Caret | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:whitesmoke;`。 */
  readonly whitesmoke: Property.Caret | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:yellow;`。 */
  readonly yellow: Property.Caret | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret:yellowgreen;`。 */
  readonly yellowgreen: Property.Caret | CssString = 'yellowgreen';
}

/**
 * 集中设置文本插入光标的颜色和形状。（caret）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
 */
export class CaretCss extends CssProperty {
  /** CSS 声明：`caret:AccentColor;`。 */
  readonly AccentColor: string = 'caret:AccentColor;';
  /** CSS 声明：`caret:AccentColorText;`。 */
  readonly AccentColorText: string = 'caret:AccentColorText;';
  /** CSS 声明：`caret:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'caret:ActiveBorder;';
  /** CSS 声明：`caret:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'caret:ActiveCaption;';
  /** CSS 声明：`caret:ActiveText;`。 */
  readonly ActiveText: string = 'caret:ActiveText;';
  /** CSS 声明：`caret:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'caret:AppWorkspace;';
  /** CSS 声明：`caret:Background;`。 */
  readonly Background: string = 'caret:Background;';
  /** CSS 声明：`caret:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'caret:ButtonBorder;';
  /** CSS 声明：`caret:ButtonFace;`。 */
  readonly ButtonFace: string = 'caret:ButtonFace;';
  /** CSS 声明：`caret:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'caret:ButtonHighlight;';
  /** CSS 声明：`caret:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'caret:ButtonShadow;';
  /** CSS 声明：`caret:ButtonText;`。 */
  readonly ButtonText: string = 'caret:ButtonText;';
  /** CSS 声明：`caret:Canvas;`。 */
  readonly Canvas: string = 'caret:Canvas;';
  /** CSS 声明：`caret:CanvasText;`。 */
  readonly CanvasText: string = 'caret:CanvasText;';
  /** CSS 声明：`caret:CaptionText;`。 */
  readonly CaptionText: string = 'caret:CaptionText;';
  /** CSS 声明：`caret:Field;`。 */
  readonly Field: string = 'caret:Field;';
  /** CSS 声明：`caret:FieldText;`。 */
  readonly FieldText: string = 'caret:FieldText;';
  /** CSS 声明：`caret:GrayText;`。 */
  readonly GrayText: string = 'caret:GrayText;';
  /** CSS 声明：`caret:Highlight;`。 */
  readonly Highlight: string = 'caret:Highlight;';
  /** CSS 声明：`caret:HighlightText;`。 */
  readonly HighlightText: string = 'caret:HighlightText;';
  /** CSS 声明：`caret:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'caret:InactiveBorder;';
  /** CSS 声明：`caret:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'caret:InactiveCaption;';
  /** CSS 声明：`caret:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'caret:InactiveCaptionText;';
  /** CSS 声明：`caret:InfoBackground;`。 */
  readonly InfoBackground: string = 'caret:InfoBackground;';
  /** CSS 声明：`caret:InfoText;`。 */
  readonly InfoText: string = 'caret:InfoText;';
  /** CSS 声明：`caret:LinkText;`。 */
  readonly LinkText: string = 'caret:LinkText;';
  /** CSS 声明：`caret:Mark;`。 */
  readonly Mark: string = 'caret:Mark;';
  /** CSS 声明：`caret:MarkText;`。 */
  readonly MarkText: string = 'caret:MarkText;';
  /** CSS 声明：`caret:Menu;`。 */
  readonly Menu: string = 'caret:Menu;';
  /** CSS 声明：`caret:MenuText;`。 */
  readonly MenuText: string = 'caret:MenuText;';
  /** CSS 声明：`caret:Scrollbar;`。 */
  readonly Scrollbar: string = 'caret:Scrollbar;';
  /** CSS 声明：`caret:SelectedItem;`。 */
  readonly SelectedItem: string = 'caret:SelectedItem;';
  /** CSS 声明：`caret:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'caret:SelectedItemText;';
  /** CSS 声明：`caret:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'caret:ThreeDDarkShadow;';
  /** CSS 声明：`caret:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'caret:ThreeDFace;';
  /** CSS 声明：`caret:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'caret:ThreeDHighlight;';
  /** CSS 声明：`caret:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'caret:ThreeDLightShadow;';
  /** CSS 声明：`caret:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'caret:ThreeDShadow;';
  /** CSS 声明：`caret:VisitedText;`。 */
  readonly VisitedText: string = 'caret:VisitedText;';
  /** CSS 声明：`caret:Window;`。 */
  readonly Window: string = 'caret:Window;';
  /** CSS 声明：`caret:WindowFrame;`。 */
  readonly WindowFrame: string = 'caret:WindowFrame;';
  /** CSS 声明：`caret:WindowText;`。 */
  readonly WindowText: string = 'caret:WindowText;';
  /** CSS 声明：`caret:aliceblue;`。 */
  readonly aliceblue: string = 'caret:aliceblue;';
  /** CSS 声明：`caret:antiquewhite;`。 */
  readonly antiquewhite: string = 'caret:antiquewhite;';
  /** CSS 声明：`caret:aqua;`。 */
  readonly aqua: string = 'caret:aqua;';
  /** CSS 声明：`caret:aquamarine;`。 */
  readonly aquamarine: string = 'caret:aquamarine;';
  /** CSS 声明：`caret:auto;`。 */
  readonly auto: string = 'caret:auto;';
  /** CSS 声明：`caret:azure;`。 */
  readonly azure: string = 'caret:azure;';
  /** CSS 声明：`caret:bar;`。 */
  readonly bar: string = 'caret:bar;';
  /** CSS 声明：`caret:beige;`。 */
  readonly beige: string = 'caret:beige;';
  /** CSS 声明：`caret:bisque;`。 */
  readonly bisque: string = 'caret:bisque;';
  /** CSS 声明：`caret:black;`。 */
  readonly black: string = 'caret:black;';
  /** CSS 声明：`caret:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'caret:blanchedalmond;';
  /** CSS 声明：`caret:block;`。 */
  readonly block: string = 'caret:block;';
  /** CSS 声明：`caret:blue;`。 */
  readonly blue: string = 'caret:blue;';
  /** CSS 声明：`caret:blueviolet;`。 */
  readonly blueviolet: string = 'caret:blueviolet;';
  /** CSS 声明：`caret:brown;`。 */
  readonly brown: string = 'caret:brown;';
  /** CSS 声明：`caret:burlywood;`。 */
  readonly burlywood: string = 'caret:burlywood;';
  /** CSS 声明：`caret:cadetblue;`。 */
  readonly cadetblue: string = 'caret:cadetblue;';
  /** CSS 声明：`caret:chartreuse;`。 */
  readonly chartreuse: string = 'caret:chartreuse;';
  /** CSS 声明：`caret:chocolate;`。 */
  readonly chocolate: string = 'caret:chocolate;';
  /** CSS 声明：`caret:coral;`。 */
  readonly coral: string = 'caret:coral;';
  /** CSS 声明：`caret:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'caret:cornflowerblue;';
  /** CSS 声明：`caret:cornsilk;`。 */
  readonly cornsilk: string = 'caret:cornsilk;';
  /** CSS 声明：`caret:crimson;`。 */
  readonly crimson: string = 'caret:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`caret:currentColor;`。
   */
  readonly currentColor: string = 'caret:currentColor;';
  /** CSS 声明：`caret:cyan;`。 */
  readonly cyan: string = 'caret:cyan;';
  /** CSS 声明：`caret:darkblue;`。 */
  readonly darkblue: string = 'caret:darkblue;';
  /** CSS 声明：`caret:darkcyan;`。 */
  readonly darkcyan: string = 'caret:darkcyan;';
  /** CSS 声明：`caret:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'caret:darkgoldenrod;';
  /** CSS 声明：`caret:darkgray;`。 */
  readonly darkgray: string = 'caret:darkgray;';
  /** CSS 声明：`caret:darkgreen;`。 */
  readonly darkgreen: string = 'caret:darkgreen;';
  /** CSS 声明：`caret:darkgrey;`。 */
  readonly darkgrey: string = 'caret:darkgrey;';
  /** CSS 声明：`caret:darkkhaki;`。 */
  readonly darkkhaki: string = 'caret:darkkhaki;';
  /** CSS 声明：`caret:darkmagenta;`。 */
  readonly darkmagenta: string = 'caret:darkmagenta;';
  /** CSS 声明：`caret:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'caret:darkolivegreen;';
  /** CSS 声明：`caret:darkorange;`。 */
  readonly darkorange: string = 'caret:darkorange;';
  /** CSS 声明：`caret:darkorchid;`。 */
  readonly darkorchid: string = 'caret:darkorchid;';
  /** CSS 声明：`caret:darkred;`。 */
  readonly darkred: string = 'caret:darkred;';
  /** CSS 声明：`caret:darksalmon;`。 */
  readonly darksalmon: string = 'caret:darksalmon;';
  /** CSS 声明：`caret:darkseagreen;`。 */
  readonly darkseagreen: string = 'caret:darkseagreen;';
  /** CSS 声明：`caret:darkslateblue;`。 */
  readonly darkslateblue: string = 'caret:darkslateblue;';
  /** CSS 声明：`caret:darkslategray;`。 */
  readonly darkslategray: string = 'caret:darkslategray;';
  /** CSS 声明：`caret:darkslategrey;`。 */
  readonly darkslategrey: string = 'caret:darkslategrey;';
  /** CSS 声明：`caret:darkturquoise;`。 */
  readonly darkturquoise: string = 'caret:darkturquoise;';
  /** CSS 声明：`caret:darkviolet;`。 */
  readonly darkviolet: string = 'caret:darkviolet;';
  /** CSS 声明：`caret:deeppink;`。 */
  readonly deeppink: string = 'caret:deeppink;';
  /** CSS 声明：`caret:deepskyblue;`。 */
  readonly deepskyblue: string = 'caret:deepskyblue;';
  /** CSS 声明：`caret:dimgray;`。 */
  readonly dimgray: string = 'caret:dimgray;';
  /** CSS 声明：`caret:dimgrey;`。 */
  readonly dimgrey: string = 'caret:dimgrey;';
  /** CSS 声明：`caret:dodgerblue;`。 */
  readonly dodgerblue: string = 'caret:dodgerblue;';
  /** CSS 声明：`caret:firebrick;`。 */
  readonly firebrick: string = 'caret:firebrick;';
  /** CSS 声明：`caret:floralwhite;`。 */
  readonly floralwhite: string = 'caret:floralwhite;';
  /** CSS 声明：`caret:forestgreen;`。 */
  readonly forestgreen: string = 'caret:forestgreen;';
  /** CSS 声明：`caret:fuchsia;`。 */
  readonly fuchsia: string = 'caret:fuchsia;';
  /** CSS 声明：`caret:gainsboro;`。 */
  readonly gainsboro: string = 'caret:gainsboro;';
  /** CSS 声明：`caret:ghostwhite;`。 */
  readonly ghostwhite: string = 'caret:ghostwhite;';
  /** CSS 声明：`caret:gold;`。 */
  readonly gold: string = 'caret:gold;';
  /** CSS 声明：`caret:goldenrod;`。 */
  readonly goldenrod: string = 'caret:goldenrod;';
  /** CSS 声明：`caret:gray;`。 */
  readonly gray: string = 'caret:gray;';
  /** CSS 声明：`caret:green;`。 */
  readonly green: string = 'caret:green;';
  /** CSS 声明：`caret:greenyellow;`。 */
  readonly greenyellow: string = 'caret:greenyellow;';
  /** CSS 声明：`caret:grey;`。 */
  readonly grey: string = 'caret:grey;';
  /** CSS 声明：`caret:honeydew;`。 */
  readonly honeydew: string = 'caret:honeydew;';
  /** CSS 声明：`caret:hotpink;`。 */
  readonly hotpink: string = 'caret:hotpink;';
  /** CSS 声明：`caret:indianred;`。 */
  readonly indianred: string = 'caret:indianred;';
  /** CSS 声明：`caret:indigo;`。 */
  readonly indigo: string = 'caret:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret:inherit;`。
   */
  readonly inherit: string = 'caret:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret:initial;`。
   */
  readonly initial: string = 'caret:initial;';
  /** CSS 声明：`caret:ivory;`。 */
  readonly ivory: string = 'caret:ivory;';
  /** CSS 声明：`caret:khaki;`。 */
  readonly khaki: string = 'caret:khaki;';
  /** CSS 声明：`caret:lavender;`。 */
  readonly lavender: string = 'caret:lavender;';
  /** CSS 声明：`caret:lavenderblush;`。 */
  readonly lavenderblush: string = 'caret:lavenderblush;';
  /** CSS 声明：`caret:lawngreen;`。 */
  readonly lawngreen: string = 'caret:lawngreen;';
  /** CSS 声明：`caret:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'caret:lemonchiffon;';
  /** CSS 声明：`caret:lightblue;`。 */
  readonly lightblue: string = 'caret:lightblue;';
  /** CSS 声明：`caret:lightcoral;`。 */
  readonly lightcoral: string = 'caret:lightcoral;';
  /** CSS 声明：`caret:lightcyan;`。 */
  readonly lightcyan: string = 'caret:lightcyan;';
  /** CSS 声明：`caret:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'caret:lightgoldenrodyellow;';
  /** CSS 声明：`caret:lightgray;`。 */
  readonly lightgray: string = 'caret:lightgray;';
  /** CSS 声明：`caret:lightgreen;`。 */
  readonly lightgreen: string = 'caret:lightgreen;';
  /** CSS 声明：`caret:lightgrey;`。 */
  readonly lightgrey: string = 'caret:lightgrey;';
  /** CSS 声明：`caret:lightpink;`。 */
  readonly lightpink: string = 'caret:lightpink;';
  /** CSS 声明：`caret:lightsalmon;`。 */
  readonly lightsalmon: string = 'caret:lightsalmon;';
  /** CSS 声明：`caret:lightseagreen;`。 */
  readonly lightseagreen: string = 'caret:lightseagreen;';
  /** CSS 声明：`caret:lightskyblue;`。 */
  readonly lightskyblue: string = 'caret:lightskyblue;';
  /** CSS 声明：`caret:lightslategray;`。 */
  readonly lightslategray: string = 'caret:lightslategray;';
  /** CSS 声明：`caret:lightslategrey;`。 */
  readonly lightslategrey: string = 'caret:lightslategrey;';
  /** CSS 声明：`caret:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'caret:lightsteelblue;';
  /** CSS 声明：`caret:lightyellow;`。 */
  readonly lightyellow: string = 'caret:lightyellow;';
  /** CSS 声明：`caret:lime;`。 */
  readonly lime: string = 'caret:lime;';
  /** CSS 声明：`caret:limegreen;`。 */
  readonly limegreen: string = 'caret:limegreen;';
  /** CSS 声明：`caret:linen;`。 */
  readonly linen: string = 'caret:linen;';
  /** CSS 声明：`caret:magenta;`。 */
  readonly magenta: string = 'caret:magenta;';
  /** CSS 声明：`caret:maroon;`。 */
  readonly maroon: string = 'caret:maroon;';
  /** CSS 声明：`caret:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'caret:mediumaquamarine;';
  /** CSS 声明：`caret:mediumblue;`。 */
  readonly mediumblue: string = 'caret:mediumblue;';
  /** CSS 声明：`caret:mediumorchid;`。 */
  readonly mediumorchid: string = 'caret:mediumorchid;';
  /** CSS 声明：`caret:mediumpurple;`。 */
  readonly mediumpurple: string = 'caret:mediumpurple;';
  /** CSS 声明：`caret:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'caret:mediumseagreen;';
  /** CSS 声明：`caret:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'caret:mediumslateblue;';
  /** CSS 声明：`caret:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'caret:mediumspringgreen;';
  /** CSS 声明：`caret:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'caret:mediumturquoise;';
  /** CSS 声明：`caret:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'caret:mediumvioletred;';
  /** CSS 声明：`caret:midnightblue;`。 */
  readonly midnightblue: string = 'caret:midnightblue;';
  /** CSS 声明：`caret:mintcream;`。 */
  readonly mintcream: string = 'caret:mintcream;';
  /** CSS 声明：`caret:mistyrose;`。 */
  readonly mistyrose: string = 'caret:mistyrose;';
  /** CSS 声明：`caret:moccasin;`。 */
  readonly moccasin: string = 'caret:moccasin;';
  /** CSS 声明：`caret:navajowhite;`。 */
  readonly navajowhite: string = 'caret:navajowhite;';
  /** CSS 声明：`caret:navy;`。 */
  readonly navy: string = 'caret:navy;';
  /** CSS 声明：`caret:oldlace;`。 */
  readonly oldlace: string = 'caret:oldlace;';
  /** CSS 声明：`caret:olive;`。 */
  readonly olive: string = 'caret:olive;';
  /** CSS 声明：`caret:olivedrab;`。 */
  readonly olivedrab: string = 'caret:olivedrab;';
  /** CSS 声明：`caret:orange;`。 */
  readonly orange: string = 'caret:orange;';
  /** CSS 声明：`caret:orangered;`。 */
  readonly orangered: string = 'caret:orangered;';
  /** CSS 声明：`caret:orchid;`。 */
  readonly orchid: string = 'caret:orchid;';
  /** CSS 声明：`caret:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'caret:palegoldenrod;';
  /** CSS 声明：`caret:palegreen;`。 */
  readonly palegreen: string = 'caret:palegreen;';
  /** CSS 声明：`caret:paleturquoise;`。 */
  readonly paleturquoise: string = 'caret:paleturquoise;';
  /** CSS 声明：`caret:palevioletred;`。 */
  readonly palevioletred: string = 'caret:palevioletred;';
  /** CSS 声明：`caret:papayawhip;`。 */
  readonly papayawhip: string = 'caret:papayawhip;';
  /** CSS 声明：`caret:peachpuff;`。 */
  readonly peachpuff: string = 'caret:peachpuff;';
  /** CSS 声明：`caret:peru;`。 */
  readonly peru: string = 'caret:peru;';
  /** CSS 声明：`caret:pink;`。 */
  readonly pink: string = 'caret:pink;';
  /** CSS 声明：`caret:plum;`。 */
  readonly plum: string = 'caret:plum;';
  /** CSS 声明：`caret:powderblue;`。 */
  readonly powderblue: string = 'caret:powderblue;';
  /** CSS 声明：`caret:purple;`。 */
  readonly purple: string = 'caret:purple;';
  /** CSS 声明：`caret:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'caret:rebeccapurple;';
  /** CSS 声明：`caret:red;`。 */
  readonly red: string = 'caret:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret:revert;`。
   */
  readonly revert: string = 'caret:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret:revert-layer;`。
   */
  readonly revertLayer: string = 'caret:revert-layer;';
  /** CSS 声明：`caret:rosybrown;`。 */
  readonly rosybrown: string = 'caret:rosybrown;';
  /** CSS 声明：`caret:royalblue;`。 */
  readonly royalblue: string = 'caret:royalblue;';
  /** CSS 声明：`caret:saddlebrown;`。 */
  readonly saddlebrown: string = 'caret:saddlebrown;';
  /** CSS 声明：`caret:salmon;`。 */
  readonly salmon: string = 'caret:salmon;';
  /** CSS 声明：`caret:sandybrown;`。 */
  readonly sandybrown: string = 'caret:sandybrown;';
  /** CSS 声明：`caret:seagreen;`。 */
  readonly seagreen: string = 'caret:seagreen;';
  /** CSS 声明：`caret:seashell;`。 */
  readonly seashell: string = 'caret:seashell;';
  /** CSS 声明：`caret:sienna;`。 */
  readonly sienna: string = 'caret:sienna;';
  /** CSS 声明：`caret:silver;`。 */
  readonly silver: string = 'caret:silver;';
  /** CSS 声明：`caret:skyblue;`。 */
  readonly skyblue: string = 'caret:skyblue;';
  /** CSS 声明：`caret:slateblue;`。 */
  readonly slateblue: string = 'caret:slateblue;';
  /** CSS 声明：`caret:slategray;`。 */
  readonly slategray: string = 'caret:slategray;';
  /** CSS 声明：`caret:slategrey;`。 */
  readonly slategrey: string = 'caret:slategrey;';
  /** CSS 声明：`caret:snow;`。 */
  readonly snow: string = 'caret:snow;';
  /** CSS 声明：`caret:springgreen;`。 */
  readonly springgreen: string = 'caret:springgreen;';
  /** CSS 声明：`caret:steelblue;`。 */
  readonly steelblue: string = 'caret:steelblue;';
  /** CSS 声明：`caret:tan;`。 */
  readonly tan: string = 'caret:tan;';
  /** CSS 声明：`caret:teal;`。 */
  readonly teal: string = 'caret:teal;';
  /** CSS 声明：`caret:thistle;`。 */
  readonly thistle: string = 'caret:thistle;';
  /** CSS 声明：`caret:tomato;`。 */
  readonly tomato: string = 'caret:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`caret:transparent;`。
   */
  readonly transparent: string = 'caret:transparent;';
  /** CSS 声明：`caret:turquoise;`。 */
  readonly turquoise: string = 'caret:turquoise;';
  /** CSS 声明：`caret:underscore;`。 */
  readonly underscore: string = 'caret:underscore;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret:unset;`。
   */
  readonly unset: string = 'caret:unset;';
  /** CSS 声明：`caret:violet;`。 */
  readonly violet: string = 'caret:violet;';
  /** CSS 声明：`caret:wheat;`。 */
  readonly wheat: string = 'caret:wheat;';
  /** CSS 声明：`caret:white;`。 */
  readonly white: string = 'caret:white;';
  /** CSS 声明：`caret:whitesmoke;`。 */
  readonly whitesmoke: string = 'caret:whitesmoke;';
  /** CSS 声明：`caret:yellow;`。 */
  readonly yellow: string = 'caret:yellow;';
  /** CSS 声明：`caret:yellowgreen;`。 */
  readonly yellowgreen: string = 'caret:yellowgreen;';
  /**
   * 创建 caret 属性作者；普通使用通过 s.caret 取得共享实例。
   * @example
   * class CustomCaretCss extends CaretCss {}
   */
  constructor() {
    super('caret');
  }
  /**
   * 原样生成 caret 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 caret:value;。
   * @example
   * s.caret.raw('inherit') // caret:inherit;
   */
  raw(value: Property.Caret | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.caret.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.caret.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.caret.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.caret.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/**
 * caret-color 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CaretColorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:AccentColor;`。 */
  readonly AccentColor: Property.CaretColor | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:AccentColorText;`。 */
  readonly AccentColorText: Property.CaretColor | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ActiveBorder;`。 */
  readonly ActiveBorder: Property.CaretColor | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ActiveCaption;`。 */
  readonly ActiveCaption: Property.CaretColor | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ActiveText;`。 */
  readonly ActiveText: Property.CaretColor | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:AppWorkspace;`。 */
  readonly AppWorkspace: Property.CaretColor | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Background;`。 */
  readonly Background: Property.CaretColor | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ButtonBorder;`。 */
  readonly ButtonBorder: Property.CaretColor | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ButtonFace;`。 */
  readonly ButtonFace: Property.CaretColor | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.CaretColor | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ButtonShadow;`。 */
  readonly ButtonShadow: Property.CaretColor | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ButtonText;`。 */
  readonly ButtonText: Property.CaretColor | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Canvas;`。 */
  readonly Canvas: Property.CaretColor | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:CanvasText;`。 */
  readonly CanvasText: Property.CaretColor | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:CaptionText;`。 */
  readonly CaptionText: Property.CaretColor | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Field;`。 */
  readonly Field: Property.CaretColor | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:FieldText;`。 */
  readonly FieldText: Property.CaretColor | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:GrayText;`。 */
  readonly GrayText: Property.CaretColor | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Highlight;`。 */
  readonly Highlight: Property.CaretColor | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:HighlightText;`。 */
  readonly HighlightText: Property.CaretColor | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:InactiveBorder;`。 */
  readonly InactiveBorder: Property.CaretColor | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:InactiveCaption;`。 */
  readonly InactiveCaption: Property.CaretColor | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.CaretColor | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:InfoBackground;`。 */
  readonly InfoBackground: Property.CaretColor | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:InfoText;`。 */
  readonly InfoText: Property.CaretColor | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:LinkText;`。 */
  readonly LinkText: Property.CaretColor | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Mark;`。 */
  readonly Mark: Property.CaretColor | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:MarkText;`。 */
  readonly MarkText: Property.CaretColor | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Menu;`。 */
  readonly Menu: Property.CaretColor | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:MenuText;`。 */
  readonly MenuText: Property.CaretColor | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Scrollbar;`。 */
  readonly Scrollbar: Property.CaretColor | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:SelectedItem;`。 */
  readonly SelectedItem: Property.CaretColor | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:SelectedItemText;`。 */
  readonly SelectedItemText: Property.CaretColor | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.CaretColor | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ThreeDFace;`。 */
  readonly ThreeDFace: Property.CaretColor | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.CaretColor | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.CaretColor | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.CaretColor | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:VisitedText;`。 */
  readonly VisitedText: Property.CaretColor | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:Window;`。 */
  readonly Window: Property.CaretColor | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:WindowFrame;`。 */
  readonly WindowFrame: Property.CaretColor | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:WindowText;`。 */
  readonly WindowText: Property.CaretColor | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:aliceblue;`。 */
  readonly aliceblue: Property.CaretColor | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:antiquewhite;`。 */
  readonly antiquewhite: Property.CaretColor | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:aqua;`。 */
  readonly aqua: Property.CaretColor | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:aquamarine;`。 */
  readonly aquamarine: Property.CaretColor | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:auto;`。 */
  readonly auto: Property.CaretColor | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:azure;`。 */
  readonly azure: Property.CaretColor | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:beige;`。 */
  readonly beige: Property.CaretColor | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:bisque;`。 */
  readonly bisque: Property.CaretColor | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:black;`。 */
  readonly black: Property.CaretColor | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:blanchedalmond;`。 */
  readonly blanchedalmond: Property.CaretColor | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:blue;`。 */
  readonly blue: Property.CaretColor | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:blueviolet;`。 */
  readonly blueviolet: Property.CaretColor | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:brown;`。 */
  readonly brown: Property.CaretColor | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:burlywood;`。 */
  readonly burlywood: Property.CaretColor | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:cadetblue;`。 */
  readonly cadetblue: Property.CaretColor | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:chartreuse;`。 */
  readonly chartreuse: Property.CaretColor | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:chocolate;`。 */
  readonly chocolate: Property.CaretColor | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:coral;`。 */
  readonly coral: Property.CaretColor | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:cornflowerblue;`。 */
  readonly cornflowerblue: Property.CaretColor | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:cornsilk;`。 */
  readonly cornsilk: Property.CaretColor | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:crimson;`。 */
  readonly crimson: Property.CaretColor | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`caret-color:currentColor;`。
   */
  readonly currentColor: Property.CaretColor | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:cyan;`。 */
  readonly cyan: Property.CaretColor | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkblue;`。 */
  readonly darkblue: Property.CaretColor | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkcyan;`。 */
  readonly darkcyan: Property.CaretColor | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.CaretColor | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkgray;`。 */
  readonly darkgray: Property.CaretColor | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkgreen;`。 */
  readonly darkgreen: Property.CaretColor | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkgrey;`。 */
  readonly darkgrey: Property.CaretColor | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkkhaki;`。 */
  readonly darkkhaki: Property.CaretColor | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkmagenta;`。 */
  readonly darkmagenta: Property.CaretColor | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkolivegreen;`。 */
  readonly darkolivegreen: Property.CaretColor | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkorange;`。 */
  readonly darkorange: Property.CaretColor | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkorchid;`。 */
  readonly darkorchid: Property.CaretColor | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkred;`。 */
  readonly darkred: Property.CaretColor | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darksalmon;`。 */
  readonly darksalmon: Property.CaretColor | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkseagreen;`。 */
  readonly darkseagreen: Property.CaretColor | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkslateblue;`。 */
  readonly darkslateblue: Property.CaretColor | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkslategray;`。 */
  readonly darkslategray: Property.CaretColor | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkslategrey;`。 */
  readonly darkslategrey: Property.CaretColor | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkturquoise;`。 */
  readonly darkturquoise: Property.CaretColor | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:darkviolet;`。 */
  readonly darkviolet: Property.CaretColor | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:deeppink;`。 */
  readonly deeppink: Property.CaretColor | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:deepskyblue;`。 */
  readonly deepskyblue: Property.CaretColor | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:dimgray;`。 */
  readonly dimgray: Property.CaretColor | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:dimgrey;`。 */
  readonly dimgrey: Property.CaretColor | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:dodgerblue;`。 */
  readonly dodgerblue: Property.CaretColor | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:firebrick;`。 */
  readonly firebrick: Property.CaretColor | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:floralwhite;`。 */
  readonly floralwhite: Property.CaretColor | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:forestgreen;`。 */
  readonly forestgreen: Property.CaretColor | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:fuchsia;`。 */
  readonly fuchsia: Property.CaretColor | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:gainsboro;`。 */
  readonly gainsboro: Property.CaretColor | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ghostwhite;`。 */
  readonly ghostwhite: Property.CaretColor | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:gold;`。 */
  readonly gold: Property.CaretColor | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:goldenrod;`。 */
  readonly goldenrod: Property.CaretColor | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:gray;`。 */
  readonly gray: Property.CaretColor | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:green;`。 */
  readonly green: Property.CaretColor | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:greenyellow;`。 */
  readonly greenyellow: Property.CaretColor | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:grey;`。 */
  readonly grey: Property.CaretColor | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:honeydew;`。 */
  readonly honeydew: Property.CaretColor | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:hotpink;`。 */
  readonly hotpink: Property.CaretColor | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:indianred;`。 */
  readonly indianred: Property.CaretColor | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:indigo;`。 */
  readonly indigo: Property.CaretColor | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret-color:inherit;`。
   */
  readonly inherit: Property.CaretColor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret-color:initial;`。
   */
  readonly initial: Property.CaretColor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:ivory;`。 */
  readonly ivory: Property.CaretColor | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:khaki;`。 */
  readonly khaki: Property.CaretColor | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lavender;`。 */
  readonly lavender: Property.CaretColor | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lavenderblush;`。 */
  readonly lavenderblush: Property.CaretColor | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lawngreen;`。 */
  readonly lawngreen: Property.CaretColor | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lemonchiffon;`。 */
  readonly lemonchiffon: Property.CaretColor | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightblue;`。 */
  readonly lightblue: Property.CaretColor | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightcoral;`。 */
  readonly lightcoral: Property.CaretColor | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightcyan;`。 */
  readonly lightcyan: Property.CaretColor | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.CaretColor | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightgray;`。 */
  readonly lightgray: Property.CaretColor | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightgreen;`。 */
  readonly lightgreen: Property.CaretColor | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightgrey;`。 */
  readonly lightgrey: Property.CaretColor | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightpink;`。 */
  readonly lightpink: Property.CaretColor | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightsalmon;`。 */
  readonly lightsalmon: Property.CaretColor | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightseagreen;`。 */
  readonly lightseagreen: Property.CaretColor | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightskyblue;`。 */
  readonly lightskyblue: Property.CaretColor | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightslategray;`。 */
  readonly lightslategray: Property.CaretColor | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightslategrey;`。 */
  readonly lightslategrey: Property.CaretColor | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightsteelblue;`。 */
  readonly lightsteelblue: Property.CaretColor | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lightyellow;`。 */
  readonly lightyellow: Property.CaretColor | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:lime;`。 */
  readonly lime: Property.CaretColor | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:limegreen;`。 */
  readonly limegreen: Property.CaretColor | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:linen;`。 */
  readonly linen: Property.CaretColor | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:magenta;`。 */
  readonly magenta: Property.CaretColor | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:maroon;`。 */
  readonly maroon: Property.CaretColor | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.CaretColor | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumblue;`。 */
  readonly mediumblue: Property.CaretColor | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumorchid;`。 */
  readonly mediumorchid: Property.CaretColor | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumpurple;`。 */
  readonly mediumpurple: Property.CaretColor | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumseagreen;`。 */
  readonly mediumseagreen: Property.CaretColor | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumslateblue;`。 */
  readonly mediumslateblue: Property.CaretColor | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.CaretColor | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumturquoise;`。 */
  readonly mediumturquoise: Property.CaretColor | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mediumvioletred;`。 */
  readonly mediumvioletred: Property.CaretColor | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:midnightblue;`。 */
  readonly midnightblue: Property.CaretColor | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mintcream;`。 */
  readonly mintcream: Property.CaretColor | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:mistyrose;`。 */
  readonly mistyrose: Property.CaretColor | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:moccasin;`。 */
  readonly moccasin: Property.CaretColor | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:navajowhite;`。 */
  readonly navajowhite: Property.CaretColor | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:navy;`。 */
  readonly navy: Property.CaretColor | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:oldlace;`。 */
  readonly oldlace: Property.CaretColor | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:olive;`。 */
  readonly olive: Property.CaretColor | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:olivedrab;`。 */
  readonly olivedrab: Property.CaretColor | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:orange;`。 */
  readonly orange: Property.CaretColor | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:orangered;`。 */
  readonly orangered: Property.CaretColor | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:orchid;`。 */
  readonly orchid: Property.CaretColor | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:palegoldenrod;`。 */
  readonly palegoldenrod: Property.CaretColor | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:palegreen;`。 */
  readonly palegreen: Property.CaretColor | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:paleturquoise;`。 */
  readonly paleturquoise: Property.CaretColor | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:palevioletred;`。 */
  readonly palevioletred: Property.CaretColor | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:papayawhip;`。 */
  readonly papayawhip: Property.CaretColor | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:peachpuff;`。 */
  readonly peachpuff: Property.CaretColor | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:peru;`。 */
  readonly peru: Property.CaretColor | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:pink;`。 */
  readonly pink: Property.CaretColor | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:plum;`。 */
  readonly plum: Property.CaretColor | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:powderblue;`。 */
  readonly powderblue: Property.CaretColor | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:purple;`。 */
  readonly purple: Property.CaretColor | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:rebeccapurple;`。 */
  readonly rebeccapurple: Property.CaretColor | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:red;`。 */
  readonly red: Property.CaretColor | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret-color:revert;`。
   */
  readonly revert: Property.CaretColor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret-color:revert-layer;`。
   */
  readonly revertLayer: Property.CaretColor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:rosybrown;`。 */
  readonly rosybrown: Property.CaretColor | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:royalblue;`。 */
  readonly royalblue: Property.CaretColor | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:saddlebrown;`。 */
  readonly saddlebrown: Property.CaretColor | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:salmon;`。 */
  readonly salmon: Property.CaretColor | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:sandybrown;`。 */
  readonly sandybrown: Property.CaretColor | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:seagreen;`。 */
  readonly seagreen: Property.CaretColor | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:seashell;`。 */
  readonly seashell: Property.CaretColor | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:sienna;`。 */
  readonly sienna: Property.CaretColor | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:silver;`。 */
  readonly silver: Property.CaretColor | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:skyblue;`。 */
  readonly skyblue: Property.CaretColor | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:slateblue;`。 */
  readonly slateblue: Property.CaretColor | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:slategray;`。 */
  readonly slategray: Property.CaretColor | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:slategrey;`。 */
  readonly slategrey: Property.CaretColor | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:snow;`。 */
  readonly snow: Property.CaretColor | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:springgreen;`。 */
  readonly springgreen: Property.CaretColor | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:steelblue;`。 */
  readonly steelblue: Property.CaretColor | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:tan;`。 */
  readonly tan: Property.CaretColor | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:teal;`。 */
  readonly teal: Property.CaretColor | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:thistle;`。 */
  readonly thistle: Property.CaretColor | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:tomato;`。 */
  readonly tomato: Property.CaretColor | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`caret-color:transparent;`。
   */
  readonly transparent: Property.CaretColor | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:turquoise;`。 */
  readonly turquoise: Property.CaretColor | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret-color:unset;`。
   */
  readonly unset: Property.CaretColor | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:violet;`。 */
  readonly violet: Property.CaretColor | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:wheat;`。 */
  readonly wheat: Property.CaretColor | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:white;`。 */
  readonly white: Property.CaretColor | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:whitesmoke;`。 */
  readonly whitesmoke: Property.CaretColor | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:yellow;`。 */
  readonly yellow: Property.CaretColor | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-color:yellowgreen;`。 */
  readonly yellowgreen: Property.CaretColor | CssString = 'yellowgreen';
}

/**
 * 设置可编辑内容中的文本插入光标颜色。（caret-color）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
 */
export class CaretColorCss extends CssProperty {
  /** CSS 声明：`caret-color:AccentColor;`。 */
  readonly AccentColor: string = 'caret-color:AccentColor;';
  /** CSS 声明：`caret-color:AccentColorText;`。 */
  readonly AccentColorText: string = 'caret-color:AccentColorText;';
  /** CSS 声明：`caret-color:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'caret-color:ActiveBorder;';
  /** CSS 声明：`caret-color:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'caret-color:ActiveCaption;';
  /** CSS 声明：`caret-color:ActiveText;`。 */
  readonly ActiveText: string = 'caret-color:ActiveText;';
  /** CSS 声明：`caret-color:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'caret-color:AppWorkspace;';
  /** CSS 声明：`caret-color:Background;`。 */
  readonly Background: string = 'caret-color:Background;';
  /** CSS 声明：`caret-color:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'caret-color:ButtonBorder;';
  /** CSS 声明：`caret-color:ButtonFace;`。 */
  readonly ButtonFace: string = 'caret-color:ButtonFace;';
  /** CSS 声明：`caret-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'caret-color:ButtonHighlight;';
  /** CSS 声明：`caret-color:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'caret-color:ButtonShadow;';
  /** CSS 声明：`caret-color:ButtonText;`。 */
  readonly ButtonText: string = 'caret-color:ButtonText;';
  /** CSS 声明：`caret-color:Canvas;`。 */
  readonly Canvas: string = 'caret-color:Canvas;';
  /** CSS 声明：`caret-color:CanvasText;`。 */
  readonly CanvasText: string = 'caret-color:CanvasText;';
  /** CSS 声明：`caret-color:CaptionText;`。 */
  readonly CaptionText: string = 'caret-color:CaptionText;';
  /** CSS 声明：`caret-color:Field;`。 */
  readonly Field: string = 'caret-color:Field;';
  /** CSS 声明：`caret-color:FieldText;`。 */
  readonly FieldText: string = 'caret-color:FieldText;';
  /** CSS 声明：`caret-color:GrayText;`。 */
  readonly GrayText: string = 'caret-color:GrayText;';
  /** CSS 声明：`caret-color:Highlight;`。 */
  readonly Highlight: string = 'caret-color:Highlight;';
  /** CSS 声明：`caret-color:HighlightText;`。 */
  readonly HighlightText: string = 'caret-color:HighlightText;';
  /** CSS 声明：`caret-color:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'caret-color:InactiveBorder;';
  /** CSS 声明：`caret-color:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'caret-color:InactiveCaption;';
  /** CSS 声明：`caret-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'caret-color:InactiveCaptionText;';
  /** CSS 声明：`caret-color:InfoBackground;`。 */
  readonly InfoBackground: string = 'caret-color:InfoBackground;';
  /** CSS 声明：`caret-color:InfoText;`。 */
  readonly InfoText: string = 'caret-color:InfoText;';
  /** CSS 声明：`caret-color:LinkText;`。 */
  readonly LinkText: string = 'caret-color:LinkText;';
  /** CSS 声明：`caret-color:Mark;`。 */
  readonly Mark: string = 'caret-color:Mark;';
  /** CSS 声明：`caret-color:MarkText;`。 */
  readonly MarkText: string = 'caret-color:MarkText;';
  /** CSS 声明：`caret-color:Menu;`。 */
  readonly Menu: string = 'caret-color:Menu;';
  /** CSS 声明：`caret-color:MenuText;`。 */
  readonly MenuText: string = 'caret-color:MenuText;';
  /** CSS 声明：`caret-color:Scrollbar;`。 */
  readonly Scrollbar: string = 'caret-color:Scrollbar;';
  /** CSS 声明：`caret-color:SelectedItem;`。 */
  readonly SelectedItem: string = 'caret-color:SelectedItem;';
  /** CSS 声明：`caret-color:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'caret-color:SelectedItemText;';
  /** CSS 声明：`caret-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'caret-color:ThreeDDarkShadow;';
  /** CSS 声明：`caret-color:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'caret-color:ThreeDFace;';
  /** CSS 声明：`caret-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'caret-color:ThreeDHighlight;';
  /** CSS 声明：`caret-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'caret-color:ThreeDLightShadow;';
  /** CSS 声明：`caret-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'caret-color:ThreeDShadow;';
  /** CSS 声明：`caret-color:VisitedText;`。 */
  readonly VisitedText: string = 'caret-color:VisitedText;';
  /** CSS 声明：`caret-color:Window;`。 */
  readonly Window: string = 'caret-color:Window;';
  /** CSS 声明：`caret-color:WindowFrame;`。 */
  readonly WindowFrame: string = 'caret-color:WindowFrame;';
  /** CSS 声明：`caret-color:WindowText;`。 */
  readonly WindowText: string = 'caret-color:WindowText;';
  /** CSS 声明：`caret-color:aliceblue;`。 */
  readonly aliceblue: string = 'caret-color:aliceblue;';
  /** CSS 声明：`caret-color:antiquewhite;`。 */
  readonly antiquewhite: string = 'caret-color:antiquewhite;';
  /** CSS 声明：`caret-color:aqua;`。 */
  readonly aqua: string = 'caret-color:aqua;';
  /** CSS 声明：`caret-color:aquamarine;`。 */
  readonly aquamarine: string = 'caret-color:aquamarine;';
  /** CSS 声明：`caret-color:auto;`。 */
  readonly auto: string = 'caret-color:auto;';
  /** CSS 声明：`caret-color:azure;`。 */
  readonly azure: string = 'caret-color:azure;';
  /** CSS 声明：`caret-color:beige;`。 */
  readonly beige: string = 'caret-color:beige;';
  /** CSS 声明：`caret-color:bisque;`。 */
  readonly bisque: string = 'caret-color:bisque;';
  /** CSS 声明：`caret-color:black;`。 */
  readonly black: string = 'caret-color:black;';
  /** CSS 声明：`caret-color:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'caret-color:blanchedalmond;';
  /** CSS 声明：`caret-color:blue;`。 */
  readonly blue: string = 'caret-color:blue;';
  /** CSS 声明：`caret-color:blueviolet;`。 */
  readonly blueviolet: string = 'caret-color:blueviolet;';
  /** CSS 声明：`caret-color:brown;`。 */
  readonly brown: string = 'caret-color:brown;';
  /** CSS 声明：`caret-color:burlywood;`。 */
  readonly burlywood: string = 'caret-color:burlywood;';
  /** CSS 声明：`caret-color:cadetblue;`。 */
  readonly cadetblue: string = 'caret-color:cadetblue;';
  /** CSS 声明：`caret-color:chartreuse;`。 */
  readonly chartreuse: string = 'caret-color:chartreuse;';
  /** CSS 声明：`caret-color:chocolate;`。 */
  readonly chocolate: string = 'caret-color:chocolate;';
  /** CSS 声明：`caret-color:coral;`。 */
  readonly coral: string = 'caret-color:coral;';
  /** CSS 声明：`caret-color:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'caret-color:cornflowerblue;';
  /** CSS 声明：`caret-color:cornsilk;`。 */
  readonly cornsilk: string = 'caret-color:cornsilk;';
  /** CSS 声明：`caret-color:crimson;`。 */
  readonly crimson: string = 'caret-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`caret-color:currentColor;`。
   */
  readonly currentColor: string = 'caret-color:currentColor;';
  /** CSS 声明：`caret-color:cyan;`。 */
  readonly cyan: string = 'caret-color:cyan;';
  /** CSS 声明：`caret-color:darkblue;`。 */
  readonly darkblue: string = 'caret-color:darkblue;';
  /** CSS 声明：`caret-color:darkcyan;`。 */
  readonly darkcyan: string = 'caret-color:darkcyan;';
  /** CSS 声明：`caret-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'caret-color:darkgoldenrod;';
  /** CSS 声明：`caret-color:darkgray;`。 */
  readonly darkgray: string = 'caret-color:darkgray;';
  /** CSS 声明：`caret-color:darkgreen;`。 */
  readonly darkgreen: string = 'caret-color:darkgreen;';
  /** CSS 声明：`caret-color:darkgrey;`。 */
  readonly darkgrey: string = 'caret-color:darkgrey;';
  /** CSS 声明：`caret-color:darkkhaki;`。 */
  readonly darkkhaki: string = 'caret-color:darkkhaki;';
  /** CSS 声明：`caret-color:darkmagenta;`。 */
  readonly darkmagenta: string = 'caret-color:darkmagenta;';
  /** CSS 声明：`caret-color:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'caret-color:darkolivegreen;';
  /** CSS 声明：`caret-color:darkorange;`。 */
  readonly darkorange: string = 'caret-color:darkorange;';
  /** CSS 声明：`caret-color:darkorchid;`。 */
  readonly darkorchid: string = 'caret-color:darkorchid;';
  /** CSS 声明：`caret-color:darkred;`。 */
  readonly darkred: string = 'caret-color:darkred;';
  /** CSS 声明：`caret-color:darksalmon;`。 */
  readonly darksalmon: string = 'caret-color:darksalmon;';
  /** CSS 声明：`caret-color:darkseagreen;`。 */
  readonly darkseagreen: string = 'caret-color:darkseagreen;';
  /** CSS 声明：`caret-color:darkslateblue;`。 */
  readonly darkslateblue: string = 'caret-color:darkslateblue;';
  /** CSS 声明：`caret-color:darkslategray;`。 */
  readonly darkslategray: string = 'caret-color:darkslategray;';
  /** CSS 声明：`caret-color:darkslategrey;`。 */
  readonly darkslategrey: string = 'caret-color:darkslategrey;';
  /** CSS 声明：`caret-color:darkturquoise;`。 */
  readonly darkturquoise: string = 'caret-color:darkturquoise;';
  /** CSS 声明：`caret-color:darkviolet;`。 */
  readonly darkviolet: string = 'caret-color:darkviolet;';
  /** CSS 声明：`caret-color:deeppink;`。 */
  readonly deeppink: string = 'caret-color:deeppink;';
  /** CSS 声明：`caret-color:deepskyblue;`。 */
  readonly deepskyblue: string = 'caret-color:deepskyblue;';
  /** CSS 声明：`caret-color:dimgray;`。 */
  readonly dimgray: string = 'caret-color:dimgray;';
  /** CSS 声明：`caret-color:dimgrey;`。 */
  readonly dimgrey: string = 'caret-color:dimgrey;';
  /** CSS 声明：`caret-color:dodgerblue;`。 */
  readonly dodgerblue: string = 'caret-color:dodgerblue;';
  /** CSS 声明：`caret-color:firebrick;`。 */
  readonly firebrick: string = 'caret-color:firebrick;';
  /** CSS 声明：`caret-color:floralwhite;`。 */
  readonly floralwhite: string = 'caret-color:floralwhite;';
  /** CSS 声明：`caret-color:forestgreen;`。 */
  readonly forestgreen: string = 'caret-color:forestgreen;';
  /** CSS 声明：`caret-color:fuchsia;`。 */
  readonly fuchsia: string = 'caret-color:fuchsia;';
  /** CSS 声明：`caret-color:gainsboro;`。 */
  readonly gainsboro: string = 'caret-color:gainsboro;';
  /** CSS 声明：`caret-color:ghostwhite;`。 */
  readonly ghostwhite: string = 'caret-color:ghostwhite;';
  /** CSS 声明：`caret-color:gold;`。 */
  readonly gold: string = 'caret-color:gold;';
  /** CSS 声明：`caret-color:goldenrod;`。 */
  readonly goldenrod: string = 'caret-color:goldenrod;';
  /** CSS 声明：`caret-color:gray;`。 */
  readonly gray: string = 'caret-color:gray;';
  /** CSS 声明：`caret-color:green;`。 */
  readonly green: string = 'caret-color:green;';
  /** CSS 声明：`caret-color:greenyellow;`。 */
  readonly greenyellow: string = 'caret-color:greenyellow;';
  /** CSS 声明：`caret-color:grey;`。 */
  readonly grey: string = 'caret-color:grey;';
  /** CSS 声明：`caret-color:honeydew;`。 */
  readonly honeydew: string = 'caret-color:honeydew;';
  /** CSS 声明：`caret-color:hotpink;`。 */
  readonly hotpink: string = 'caret-color:hotpink;';
  /** CSS 声明：`caret-color:indianred;`。 */
  readonly indianred: string = 'caret-color:indianred;';
  /** CSS 声明：`caret-color:indigo;`。 */
  readonly indigo: string = 'caret-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret-color:inherit;`。
   */
  readonly inherit: string = 'caret-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret-color:initial;`。
   */
  readonly initial: string = 'caret-color:initial;';
  /** CSS 声明：`caret-color:ivory;`。 */
  readonly ivory: string = 'caret-color:ivory;';
  /** CSS 声明：`caret-color:khaki;`。 */
  readonly khaki: string = 'caret-color:khaki;';
  /** CSS 声明：`caret-color:lavender;`。 */
  readonly lavender: string = 'caret-color:lavender;';
  /** CSS 声明：`caret-color:lavenderblush;`。 */
  readonly lavenderblush: string = 'caret-color:lavenderblush;';
  /** CSS 声明：`caret-color:lawngreen;`。 */
  readonly lawngreen: string = 'caret-color:lawngreen;';
  /** CSS 声明：`caret-color:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'caret-color:lemonchiffon;';
  /** CSS 声明：`caret-color:lightblue;`。 */
  readonly lightblue: string = 'caret-color:lightblue;';
  /** CSS 声明：`caret-color:lightcoral;`。 */
  readonly lightcoral: string = 'caret-color:lightcoral;';
  /** CSS 声明：`caret-color:lightcyan;`。 */
  readonly lightcyan: string = 'caret-color:lightcyan;';
  /** CSS 声明：`caret-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'caret-color:lightgoldenrodyellow;';
  /** CSS 声明：`caret-color:lightgray;`。 */
  readonly lightgray: string = 'caret-color:lightgray;';
  /** CSS 声明：`caret-color:lightgreen;`。 */
  readonly lightgreen: string = 'caret-color:lightgreen;';
  /** CSS 声明：`caret-color:lightgrey;`。 */
  readonly lightgrey: string = 'caret-color:lightgrey;';
  /** CSS 声明：`caret-color:lightpink;`。 */
  readonly lightpink: string = 'caret-color:lightpink;';
  /** CSS 声明：`caret-color:lightsalmon;`。 */
  readonly lightsalmon: string = 'caret-color:lightsalmon;';
  /** CSS 声明：`caret-color:lightseagreen;`。 */
  readonly lightseagreen: string = 'caret-color:lightseagreen;';
  /** CSS 声明：`caret-color:lightskyblue;`。 */
  readonly lightskyblue: string = 'caret-color:lightskyblue;';
  /** CSS 声明：`caret-color:lightslategray;`。 */
  readonly lightslategray: string = 'caret-color:lightslategray;';
  /** CSS 声明：`caret-color:lightslategrey;`。 */
  readonly lightslategrey: string = 'caret-color:lightslategrey;';
  /** CSS 声明：`caret-color:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'caret-color:lightsteelblue;';
  /** CSS 声明：`caret-color:lightyellow;`。 */
  readonly lightyellow: string = 'caret-color:lightyellow;';
  /** CSS 声明：`caret-color:lime;`。 */
  readonly lime: string = 'caret-color:lime;';
  /** CSS 声明：`caret-color:limegreen;`。 */
  readonly limegreen: string = 'caret-color:limegreen;';
  /** CSS 声明：`caret-color:linen;`。 */
  readonly linen: string = 'caret-color:linen;';
  /** CSS 声明：`caret-color:magenta;`。 */
  readonly magenta: string = 'caret-color:magenta;';
  /** CSS 声明：`caret-color:maroon;`。 */
  readonly maroon: string = 'caret-color:maroon;';
  /** CSS 声明：`caret-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'caret-color:mediumaquamarine;';
  /** CSS 声明：`caret-color:mediumblue;`。 */
  readonly mediumblue: string = 'caret-color:mediumblue;';
  /** CSS 声明：`caret-color:mediumorchid;`。 */
  readonly mediumorchid: string = 'caret-color:mediumorchid;';
  /** CSS 声明：`caret-color:mediumpurple;`。 */
  readonly mediumpurple: string = 'caret-color:mediumpurple;';
  /** CSS 声明：`caret-color:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'caret-color:mediumseagreen;';
  /** CSS 声明：`caret-color:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'caret-color:mediumslateblue;';
  /** CSS 声明：`caret-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'caret-color:mediumspringgreen;';
  /** CSS 声明：`caret-color:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'caret-color:mediumturquoise;';
  /** CSS 声明：`caret-color:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'caret-color:mediumvioletred;';
  /** CSS 声明：`caret-color:midnightblue;`。 */
  readonly midnightblue: string = 'caret-color:midnightblue;';
  /** CSS 声明：`caret-color:mintcream;`。 */
  readonly mintcream: string = 'caret-color:mintcream;';
  /** CSS 声明：`caret-color:mistyrose;`。 */
  readonly mistyrose: string = 'caret-color:mistyrose;';
  /** CSS 声明：`caret-color:moccasin;`。 */
  readonly moccasin: string = 'caret-color:moccasin;';
  /** CSS 声明：`caret-color:navajowhite;`。 */
  readonly navajowhite: string = 'caret-color:navajowhite;';
  /** CSS 声明：`caret-color:navy;`。 */
  readonly navy: string = 'caret-color:navy;';
  /** CSS 声明：`caret-color:oldlace;`。 */
  readonly oldlace: string = 'caret-color:oldlace;';
  /** CSS 声明：`caret-color:olive;`。 */
  readonly olive: string = 'caret-color:olive;';
  /** CSS 声明：`caret-color:olivedrab;`。 */
  readonly olivedrab: string = 'caret-color:olivedrab;';
  /** CSS 声明：`caret-color:orange;`。 */
  readonly orange: string = 'caret-color:orange;';
  /** CSS 声明：`caret-color:orangered;`。 */
  readonly orangered: string = 'caret-color:orangered;';
  /** CSS 声明：`caret-color:orchid;`。 */
  readonly orchid: string = 'caret-color:orchid;';
  /** CSS 声明：`caret-color:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'caret-color:palegoldenrod;';
  /** CSS 声明：`caret-color:palegreen;`。 */
  readonly palegreen: string = 'caret-color:palegreen;';
  /** CSS 声明：`caret-color:paleturquoise;`。 */
  readonly paleturquoise: string = 'caret-color:paleturquoise;';
  /** CSS 声明：`caret-color:palevioletred;`。 */
  readonly palevioletred: string = 'caret-color:palevioletred;';
  /** CSS 声明：`caret-color:papayawhip;`。 */
  readonly papayawhip: string = 'caret-color:papayawhip;';
  /** CSS 声明：`caret-color:peachpuff;`。 */
  readonly peachpuff: string = 'caret-color:peachpuff;';
  /** CSS 声明：`caret-color:peru;`。 */
  readonly peru: string = 'caret-color:peru;';
  /** CSS 声明：`caret-color:pink;`。 */
  readonly pink: string = 'caret-color:pink;';
  /** CSS 声明：`caret-color:plum;`。 */
  readonly plum: string = 'caret-color:plum;';
  /** CSS 声明：`caret-color:powderblue;`。 */
  readonly powderblue: string = 'caret-color:powderblue;';
  /** CSS 声明：`caret-color:purple;`。 */
  readonly purple: string = 'caret-color:purple;';
  /** CSS 声明：`caret-color:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'caret-color:rebeccapurple;';
  /** CSS 声明：`caret-color:red;`。 */
  readonly red: string = 'caret-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret-color:revert;`。
   */
  readonly revert: string = 'caret-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret-color:revert-layer;`。
   */
  readonly revertLayer: string = 'caret-color:revert-layer;';
  /** CSS 声明：`caret-color:rosybrown;`。 */
  readonly rosybrown: string = 'caret-color:rosybrown;';
  /** CSS 声明：`caret-color:royalblue;`。 */
  readonly royalblue: string = 'caret-color:royalblue;';
  /** CSS 声明：`caret-color:saddlebrown;`。 */
  readonly saddlebrown: string = 'caret-color:saddlebrown;';
  /** CSS 声明：`caret-color:salmon;`。 */
  readonly salmon: string = 'caret-color:salmon;';
  /** CSS 声明：`caret-color:sandybrown;`。 */
  readonly sandybrown: string = 'caret-color:sandybrown;';
  /** CSS 声明：`caret-color:seagreen;`。 */
  readonly seagreen: string = 'caret-color:seagreen;';
  /** CSS 声明：`caret-color:seashell;`。 */
  readonly seashell: string = 'caret-color:seashell;';
  /** CSS 声明：`caret-color:sienna;`。 */
  readonly sienna: string = 'caret-color:sienna;';
  /** CSS 声明：`caret-color:silver;`。 */
  readonly silver: string = 'caret-color:silver;';
  /** CSS 声明：`caret-color:skyblue;`。 */
  readonly skyblue: string = 'caret-color:skyblue;';
  /** CSS 声明：`caret-color:slateblue;`。 */
  readonly slateblue: string = 'caret-color:slateblue;';
  /** CSS 声明：`caret-color:slategray;`。 */
  readonly slategray: string = 'caret-color:slategray;';
  /** CSS 声明：`caret-color:slategrey;`。 */
  readonly slategrey: string = 'caret-color:slategrey;';
  /** CSS 声明：`caret-color:snow;`。 */
  readonly snow: string = 'caret-color:snow;';
  /** CSS 声明：`caret-color:springgreen;`。 */
  readonly springgreen: string = 'caret-color:springgreen;';
  /** CSS 声明：`caret-color:steelblue;`。 */
  readonly steelblue: string = 'caret-color:steelblue;';
  /** CSS 声明：`caret-color:tan;`。 */
  readonly tan: string = 'caret-color:tan;';
  /** CSS 声明：`caret-color:teal;`。 */
  readonly teal: string = 'caret-color:teal;';
  /** CSS 声明：`caret-color:thistle;`。 */
  readonly thistle: string = 'caret-color:thistle;';
  /** CSS 声明：`caret-color:tomato;`。 */
  readonly tomato: string = 'caret-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`caret-color:transparent;`。
   */
  readonly transparent: string = 'caret-color:transparent;';
  /** CSS 声明：`caret-color:turquoise;`。 */
  readonly turquoise: string = 'caret-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret-color:unset;`。
   */
  readonly unset: string = 'caret-color:unset;';
  /** CSS 声明：`caret-color:violet;`。 */
  readonly violet: string = 'caret-color:violet;';
  /** CSS 声明：`caret-color:wheat;`。 */
  readonly wheat: string = 'caret-color:wheat;';
  /** CSS 声明：`caret-color:white;`。 */
  readonly white: string = 'caret-color:white;';
  /** CSS 声明：`caret-color:whitesmoke;`。 */
  readonly whitesmoke: string = 'caret-color:whitesmoke;';
  /** CSS 声明：`caret-color:yellow;`。 */
  readonly yellow: string = 'caret-color:yellow;';
  /** CSS 声明：`caret-color:yellowgreen;`。 */
  readonly yellowgreen: string = 'caret-color:yellowgreen;';
  /**
   * 创建 caret-color 属性作者；普通使用通过 s.caretColor 取得共享实例。
   * @example
   * class CustomCaretColorCss extends CaretColorCss {}
   */
  constructor() {
    super('caret-color');
  }
  /**
   * 原样生成 caret-color 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 caret-color:value;。
   * @example
   * s.caretColor.raw('inherit') // caret-color:inherit;
   */
  raw(value: Property.CaretColor | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.caretColor.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.caretColor.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.caretColor.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.caretColor.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/**
 * caret-shape 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CaretShapeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-shape:auto;`。 */
  readonly auto: Property.CaretShape | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-shape:bar;`。 */
  readonly bar: Property.CaretShape | CssString = 'bar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-shape:block;`。 */
  readonly block: Property.CaretShape | CssString = 'block';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret-shape:inherit;`。
   */
  readonly inherit: Property.CaretShape | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret-shape:initial;`。
   */
  readonly initial: Property.CaretShape | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret-shape:revert;`。
   */
  readonly revert: Property.CaretShape | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret-shape:revert-layer;`。
   */
  readonly revertLayer: Property.CaretShape | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`caret-shape:underscore;`。 */
  readonly underscore: Property.CaretShape | CssString = 'underscore';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret-shape:unset;`。
   */
  readonly unset: Property.CaretShape | CssString = 'unset';
}

/**
 * 设置文本插入光标的形状。（caret-shape）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
 */
export class CaretShapeCss extends CssProperty {
  /** CSS 声明：`caret-shape:auto;`。 */
  readonly auto: string = 'caret-shape:auto;';
  /** CSS 声明：`caret-shape:bar;`。 */
  readonly bar: string = 'caret-shape:bar;';
  /** CSS 声明：`caret-shape:block;`。 */
  readonly block: string = 'caret-shape:block;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret-shape:inherit;`。
   */
  readonly inherit: string = 'caret-shape:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret-shape:initial;`。
   */
  readonly initial: string = 'caret-shape:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret-shape:revert;`。
   */
  readonly revert: string = 'caret-shape:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret-shape:revert-layer;`。
   */
  readonly revertLayer: string = 'caret-shape:revert-layer;';
  /** CSS 声明：`caret-shape:underscore;`。 */
  readonly underscore: string = 'caret-shape:underscore;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret-shape:unset;`。
   */
  readonly unset: string = 'caret-shape:unset;';
  /**
   * 创建 caret-shape 属性作者；普通使用通过 s.caretShape 取得共享实例。
   * @example
   * class CustomCaretShapeCss extends CaretShapeCss {}
   */
  constructor() {
    super('caret-shape');
  }
  /**
   * 原样生成 caret-shape 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 caret-shape:value;。
   * @example
   * s.caretShape.raw('inherit') // caret-shape:inherit;
   */
  raw(value: Property.CaretShape | CssString): string {
    return this.declaration(value);
  }
}

/**
 * clear 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ClearKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clear:both;`。 */
  readonly both: Property.Clear | CssString = 'both';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clear:inherit;`。
   */
  readonly inherit: Property.Clear | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clear:initial;`。
   */
  readonly initial: Property.Clear | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clear:inline-end;`。 */
  readonly inlineEnd: Property.Clear | CssString = 'inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clear:inline-start;`。 */
  readonly inlineStart: Property.Clear | CssString = 'inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clear:left;`。 */
  readonly left: Property.Clear | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clear:none;`。 */
  readonly none: Property.Clear | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clear:revert;`。
   */
  readonly revert: Property.Clear | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clear:revert-layer;`。
   */
  readonly revertLayer: Property.Clear | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clear:right;`。 */
  readonly right: Property.Clear | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clear:unset;`。
   */
  readonly unset: Property.Clear | CssString = 'unset';
}

/**
 * 要求元素避让指定侧的前置浮动元素。（clear）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
 */
export class ClearCss extends CssProperty {
  /** CSS 声明：`clear:both;`。 */
  readonly both: string = 'clear:both;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clear:inherit;`。
   */
  readonly inherit: string = 'clear:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clear:initial;`。
   */
  readonly initial: string = 'clear:initial;';
  /** CSS 声明：`clear:inline-end;`。 */
  readonly inlineEnd: string = 'clear:inline-end;';
  /** CSS 声明：`clear:inline-start;`。 */
  readonly inlineStart: string = 'clear:inline-start;';
  /** CSS 声明：`clear:left;`。 */
  readonly left: string = 'clear:left;';
  /** CSS 声明：`clear:none;`。 */
  readonly none: string = 'clear:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clear:revert;`。
   */
  readonly revert: string = 'clear:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clear:revert-layer;`。
   */
  readonly revertLayer: string = 'clear:revert-layer;';
  /** CSS 声明：`clear:right;`。 */
  readonly right: string = 'clear:right;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clear:unset;`。
   */
  readonly unset: string = 'clear:unset;';
  /**
   * 创建 clear 属性作者；普通使用通过 s.clear 取得共享实例。
   * @example
   * class CustomClearCss extends ClearCss {}
   */
  constructor() {
    super('clear');
  }
  /**
   * 原样生成 clear 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 clear:value;。
   * @example
   * s.clear.raw('inherit') // clear:inherit;
   */
  raw(value: Property.Clear | CssString): string {
    return this.declaration(value);
  }
}

/**
 * clip 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ClipKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip:auto;`。 */
  readonly auto: Property.Clip | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip:inherit;`。
   */
  readonly inherit: Property.Clip | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip:initial;`。
   */
  readonly initial: Property.Clip | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip:revert;`。
   */
  readonly revert: Property.Clip | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip:revert-layer;`。
   */
  readonly revertLayer: Property.Clip | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip:unset;`。
   */
  readonly unset: Property.Clip | CssString = 'unset';
}

/**
 * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。（clip）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
 */
export class ClipCss extends CssProperty {
  /** CSS 声明：`clip:auto;`。 */
  readonly auto: string = 'clip:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip:inherit;`。
   */
  readonly inherit: string = 'clip:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip:initial;`。
   */
  readonly initial: string = 'clip:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip:revert;`。
   */
  readonly revert: string = 'clip:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip:revert-layer;`。
   */
  readonly revertLayer: string = 'clip:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip:unset;`。
   */
  readonly unset: string = 'clip:unset;';
  /**
   * 创建 clip 属性作者；普通使用通过 s.clip 取得共享实例。
   * @example
   * class CustomClipCss extends ClipCss {}
   */
  constructor() {
    super('clip');
  }
  /**
   * 原样生成 clip 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 clip:value;。
   * @example
   * s.clip.raw('inherit') // clip:inherit;
   */
  raw(value: Property.Clip | CssString): string {
    return this.declaration(value);
  }
}

/**
 * clip-path 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ClipPathKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:border-box;`。 */
  readonly borderBox: Property.ClipPath | CssString = 'border-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:content-box;`。 */
  readonly contentBox: Property.ClipPath | CssString = 'content-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:fill-box;`。 */
  readonly fillBox: Property.ClipPath | CssString = 'fill-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip-path:inherit;`。
   */
  readonly inherit: Property.ClipPath | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip-path:initial;`。
   */
  readonly initial: Property.ClipPath | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:margin-box;`。 */
  readonly marginBox: Property.ClipPath | CssString = 'margin-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:none;`。 */
  readonly none: Property.ClipPath | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:padding-box;`。 */
  readonly paddingBox: Property.ClipPath | CssString = 'padding-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip-path:revert;`。
   */
  readonly revert: Property.ClipPath | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip-path:revert-layer;`。
   */
  readonly revertLayer: Property.ClipPath | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:stroke-box;`。 */
  readonly strokeBox: Property.ClipPath | CssString = 'stroke-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip-path:unset;`。
   */
  readonly unset: Property.ClipPath | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-path:view-box;`。 */
  readonly viewBox: Property.ClipPath | CssString = 'view-box';
}

/**
 * 通过基本形状、路径或引用裁剪元素的可见区域。（clip-path）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
 */
export class ClipPathCss extends CssProperty {
  /** CSS 声明：`clip-path:border-box;`。 */
  readonly borderBox: string = 'clip-path:border-box;';
  /** CSS 声明：`clip-path:content-box;`。 */
  readonly contentBox: string = 'clip-path:content-box;';
  /** CSS 声明：`clip-path:fill-box;`。 */
  readonly fillBox: string = 'clip-path:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip-path:inherit;`。
   */
  readonly inherit: string = 'clip-path:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip-path:initial;`。
   */
  readonly initial: string = 'clip-path:initial;';
  /** CSS 声明：`clip-path:margin-box;`。 */
  readonly marginBox: string = 'clip-path:margin-box;';
  /** CSS 声明：`clip-path:none;`。 */
  readonly none: string = 'clip-path:none;';
  /** CSS 声明：`clip-path:padding-box;`。 */
  readonly paddingBox: string = 'clip-path:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip-path:revert;`。
   */
  readonly revert: string = 'clip-path:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip-path:revert-layer;`。
   */
  readonly revertLayer: string = 'clip-path:revert-layer;';
  /** CSS 声明：`clip-path:stroke-box;`。 */
  readonly strokeBox: string = 'clip-path:stroke-box;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip-path:unset;`。
   */
  readonly unset: string = 'clip-path:unset;';
  /** CSS 声明：`clip-path:view-box;`。 */
  readonly viewBox: string = 'clip-path:view-box;';
  /**
   * 创建 clip-path 属性作者；普通使用通过 s.clipPath 取得共享实例。
   * @example
   * class CustomClipPathCss extends ClipPathCss {}
   */
  constructor() {
    super('clip-path');
  }
  /**
   * 原样生成 clip-path 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 clip-path:value;。
   * @example
   * s.clipPath.raw('inherit') // clip-path:inherit;
   */
  raw(value: Property.ClipPath | CssString): string {
    return this.declaration(value);
  }
}

/**
 * clip-rule 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ClipRuleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-rule:evenodd;`。 */
  readonly evenodd: Property.ClipRule | CssString = 'evenodd';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip-rule:inherit;`。
   */
  readonly inherit: Property.ClipRule | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip-rule:initial;`。
   */
  readonly initial: Property.ClipRule | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`clip-rule:nonzero;`。 */
  readonly nonzero: Property.ClipRule | CssString = 'nonzero';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip-rule:revert;`。
   */
  readonly revert: Property.ClipRule | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip-rule:revert-layer;`。
   */
  readonly revertLayer: Property.ClipRule | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip-rule:unset;`。
   */
  readonly unset: Property.ClipRule | CssString = 'unset';
}

/**
 * 设置 SVG 裁剪路径判断内部区域所用的填充规则。（clip-rule）
 *
 * CSS 初始值：`nonzero`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
 */
export class ClipRuleCss extends CssProperty {
  /** CSS 声明：`clip-rule:evenodd;`。 */
  readonly evenodd: string = 'clip-rule:evenodd;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip-rule:inherit;`。
   */
  readonly inherit: string = 'clip-rule:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip-rule:initial;`。
   */
  readonly initial: string = 'clip-rule:initial;';
  /** CSS 声明：`clip-rule:nonzero;`。 */
  readonly nonzero: string = 'clip-rule:nonzero;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip-rule:revert;`。
   */
  readonly revert: string = 'clip-rule:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip-rule:revert-layer;`。
   */
  readonly revertLayer: string = 'clip-rule:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip-rule:unset;`。
   */
  readonly unset: string = 'clip-rule:unset;';
  /**
   * 创建 clip-rule 属性作者；普通使用通过 s.clipRule 取得共享实例。
   * @example
   * class CustomClipRuleCss extends ClipRuleCss {}
   */
  constructor() {
    super('clip-rule');
  }
  /**
   * 原样生成 clip-rule 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 clip-rule:value;。
   * @example
   * s.clipRule.raw('inherit') // clip-rule:inherit;
   */
  raw(value: Property.ClipRule | CssString): string {
    return this.declaration(value);
  }
}

/**
 * color 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:AccentColor;`。 */
  readonly AccentColor: Property.Color | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:AccentColorText;`。 */
  readonly AccentColorText: Property.Color | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ActiveBorder;`。 */
  readonly ActiveBorder: Property.Color | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ActiveCaption;`。 */
  readonly ActiveCaption: Property.Color | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ActiveText;`。 */
  readonly ActiveText: Property.Color | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:AppWorkspace;`。 */
  readonly AppWorkspace: Property.Color | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Background;`。 */
  readonly Background: Property.Color | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ButtonBorder;`。 */
  readonly ButtonBorder: Property.Color | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ButtonFace;`。 */
  readonly ButtonFace: Property.Color | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.Color | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ButtonShadow;`。 */
  readonly ButtonShadow: Property.Color | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ButtonText;`。 */
  readonly ButtonText: Property.Color | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Canvas;`。 */
  readonly Canvas: Property.Color | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:CanvasText;`。 */
  readonly CanvasText: Property.Color | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:CaptionText;`。 */
  readonly CaptionText: Property.Color | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Field;`。 */
  readonly Field: Property.Color | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:FieldText;`。 */
  readonly FieldText: Property.Color | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:GrayText;`。 */
  readonly GrayText: Property.Color | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Highlight;`。 */
  readonly Highlight: Property.Color | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:HighlightText;`。 */
  readonly HighlightText: Property.Color | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:InactiveBorder;`。 */
  readonly InactiveBorder: Property.Color | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:InactiveCaption;`。 */
  readonly InactiveCaption: Property.Color | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.Color | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:InfoBackground;`。 */
  readonly InfoBackground: Property.Color | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:InfoText;`。 */
  readonly InfoText: Property.Color | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:LinkText;`。 */
  readonly LinkText: Property.Color | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Mark;`。 */
  readonly Mark: Property.Color | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:MarkText;`。 */
  readonly MarkText: Property.Color | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Menu;`。 */
  readonly Menu: Property.Color | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:MenuText;`。 */
  readonly MenuText: Property.Color | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Scrollbar;`。 */
  readonly Scrollbar: Property.Color | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:SelectedItem;`。 */
  readonly SelectedItem: Property.Color | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:SelectedItemText;`。 */
  readonly SelectedItemText: Property.Color | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.Color | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ThreeDFace;`。 */
  readonly ThreeDFace: Property.Color | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.Color | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.Color | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.Color | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:VisitedText;`。 */
  readonly VisitedText: Property.Color | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:Window;`。 */
  readonly Window: Property.Color | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:WindowFrame;`。 */
  readonly WindowFrame: Property.Color | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:WindowText;`。 */
  readonly WindowText: Property.Color | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:aliceblue;`。 */
  readonly aliceblue: Property.Color | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:antiquewhite;`。 */
  readonly antiquewhite: Property.Color | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:aqua;`。 */
  readonly aqua: Property.Color | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:aquamarine;`。 */
  readonly aquamarine: Property.Color | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:azure;`。 */
  readonly azure: Property.Color | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:beige;`。 */
  readonly beige: Property.Color | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:bisque;`。 */
  readonly bisque: Property.Color | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:black;`。 */
  readonly black: Property.Color | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:blanchedalmond;`。 */
  readonly blanchedalmond: Property.Color | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:blue;`。 */
  readonly blue: Property.Color | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:blueviolet;`。 */
  readonly blueviolet: Property.Color | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:brown;`。 */
  readonly brown: Property.Color | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:burlywood;`。 */
  readonly burlywood: Property.Color | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:cadetblue;`。 */
  readonly cadetblue: Property.Color | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:chartreuse;`。 */
  readonly chartreuse: Property.Color | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:chocolate;`。 */
  readonly chocolate: Property.Color | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:coral;`。 */
  readonly coral: Property.Color | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:cornflowerblue;`。 */
  readonly cornflowerblue: Property.Color | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:cornsilk;`。 */
  readonly cornsilk: Property.Color | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:crimson;`。 */
  readonly crimson: Property.Color | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`color:currentColor;`。
   */
  readonly currentColor: Property.Color | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:cyan;`。 */
  readonly cyan: Property.Color | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkblue;`。 */
  readonly darkblue: Property.Color | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkcyan;`。 */
  readonly darkcyan: Property.Color | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.Color | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkgray;`。 */
  readonly darkgray: Property.Color | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkgreen;`。 */
  readonly darkgreen: Property.Color | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkgrey;`。 */
  readonly darkgrey: Property.Color | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkkhaki;`。 */
  readonly darkkhaki: Property.Color | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkmagenta;`。 */
  readonly darkmagenta: Property.Color | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkolivegreen;`。 */
  readonly darkolivegreen: Property.Color | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkorange;`。 */
  readonly darkorange: Property.Color | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkorchid;`。 */
  readonly darkorchid: Property.Color | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkred;`。 */
  readonly darkred: Property.Color | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darksalmon;`。 */
  readonly darksalmon: Property.Color | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkseagreen;`。 */
  readonly darkseagreen: Property.Color | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkslateblue;`。 */
  readonly darkslateblue: Property.Color | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkslategray;`。 */
  readonly darkslategray: Property.Color | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkslategrey;`。 */
  readonly darkslategrey: Property.Color | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkturquoise;`。 */
  readonly darkturquoise: Property.Color | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:darkviolet;`。 */
  readonly darkviolet: Property.Color | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:deeppink;`。 */
  readonly deeppink: Property.Color | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:deepskyblue;`。 */
  readonly deepskyblue: Property.Color | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:dimgray;`。 */
  readonly dimgray: Property.Color | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:dimgrey;`。 */
  readonly dimgrey: Property.Color | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:dodgerblue;`。 */
  readonly dodgerblue: Property.Color | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:firebrick;`。 */
  readonly firebrick: Property.Color | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:floralwhite;`。 */
  readonly floralwhite: Property.Color | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:forestgreen;`。 */
  readonly forestgreen: Property.Color | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:fuchsia;`。 */
  readonly fuchsia: Property.Color | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:gainsboro;`。 */
  readonly gainsboro: Property.Color | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ghostwhite;`。 */
  readonly ghostwhite: Property.Color | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:gold;`。 */
  readonly gold: Property.Color | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:goldenrod;`。 */
  readonly goldenrod: Property.Color | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:gray;`。 */
  readonly gray: Property.Color | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:green;`。 */
  readonly green: Property.Color | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:greenyellow;`。 */
  readonly greenyellow: Property.Color | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:grey;`。 */
  readonly grey: Property.Color | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:honeydew;`。 */
  readonly honeydew: Property.Color | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:hotpink;`。 */
  readonly hotpink: Property.Color | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:indianred;`。 */
  readonly indianred: Property.Color | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:indigo;`。 */
  readonly indigo: Property.Color | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color:inherit;`。
   */
  readonly inherit: Property.Color | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color:initial;`。
   */
  readonly initial: Property.Color | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:ivory;`。 */
  readonly ivory: Property.Color | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:khaki;`。 */
  readonly khaki: Property.Color | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lavender;`。 */
  readonly lavender: Property.Color | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lavenderblush;`。 */
  readonly lavenderblush: Property.Color | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lawngreen;`。 */
  readonly lawngreen: Property.Color | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lemonchiffon;`。 */
  readonly lemonchiffon: Property.Color | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightblue;`。 */
  readonly lightblue: Property.Color | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightcoral;`。 */
  readonly lightcoral: Property.Color | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightcyan;`。 */
  readonly lightcyan: Property.Color | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.Color | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightgray;`。 */
  readonly lightgray: Property.Color | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightgreen;`。 */
  readonly lightgreen: Property.Color | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightgrey;`。 */
  readonly lightgrey: Property.Color | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightpink;`。 */
  readonly lightpink: Property.Color | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightsalmon;`。 */
  readonly lightsalmon: Property.Color | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightseagreen;`。 */
  readonly lightseagreen: Property.Color | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightskyblue;`。 */
  readonly lightskyblue: Property.Color | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightslategray;`。 */
  readonly lightslategray: Property.Color | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightslategrey;`。 */
  readonly lightslategrey: Property.Color | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightsteelblue;`。 */
  readonly lightsteelblue: Property.Color | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lightyellow;`。 */
  readonly lightyellow: Property.Color | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:lime;`。 */
  readonly lime: Property.Color | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:limegreen;`。 */
  readonly limegreen: Property.Color | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:linen;`。 */
  readonly linen: Property.Color | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:magenta;`。 */
  readonly magenta: Property.Color | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:maroon;`。 */
  readonly maroon: Property.Color | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.Color | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumblue;`。 */
  readonly mediumblue: Property.Color | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumorchid;`。 */
  readonly mediumorchid: Property.Color | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumpurple;`。 */
  readonly mediumpurple: Property.Color | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumseagreen;`。 */
  readonly mediumseagreen: Property.Color | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumslateblue;`。 */
  readonly mediumslateblue: Property.Color | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.Color | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumturquoise;`。 */
  readonly mediumturquoise: Property.Color | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mediumvioletred;`。 */
  readonly mediumvioletred: Property.Color | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:midnightblue;`。 */
  readonly midnightblue: Property.Color | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mintcream;`。 */
  readonly mintcream: Property.Color | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:mistyrose;`。 */
  readonly mistyrose: Property.Color | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:moccasin;`。 */
  readonly moccasin: Property.Color | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:navajowhite;`。 */
  readonly navajowhite: Property.Color | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:navy;`。 */
  readonly navy: Property.Color | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:oldlace;`。 */
  readonly oldlace: Property.Color | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:olive;`。 */
  readonly olive: Property.Color | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:olivedrab;`。 */
  readonly olivedrab: Property.Color | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:orange;`。 */
  readonly orange: Property.Color | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:orangered;`。 */
  readonly orangered: Property.Color | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:orchid;`。 */
  readonly orchid: Property.Color | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:palegoldenrod;`。 */
  readonly palegoldenrod: Property.Color | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:palegreen;`。 */
  readonly palegreen: Property.Color | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:paleturquoise;`。 */
  readonly paleturquoise: Property.Color | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:palevioletred;`。 */
  readonly palevioletred: Property.Color | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:papayawhip;`。 */
  readonly papayawhip: Property.Color | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:peachpuff;`。 */
  readonly peachpuff: Property.Color | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:peru;`。 */
  readonly peru: Property.Color | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:pink;`。 */
  readonly pink: Property.Color | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:plum;`。 */
  readonly plum: Property.Color | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:powderblue;`。 */
  readonly powderblue: Property.Color | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:purple;`。 */
  readonly purple: Property.Color | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:rebeccapurple;`。 */
  readonly rebeccapurple: Property.Color | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:red;`。 */
  readonly red: Property.Color | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color:revert;`。
   */
  readonly revert: Property.Color | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color:revert-layer;`。
   */
  readonly revertLayer: Property.Color | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:rosybrown;`。 */
  readonly rosybrown: Property.Color | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:royalblue;`。 */
  readonly royalblue: Property.Color | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:saddlebrown;`。 */
  readonly saddlebrown: Property.Color | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:salmon;`。 */
  readonly salmon: Property.Color | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:sandybrown;`。 */
  readonly sandybrown: Property.Color | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:seagreen;`。 */
  readonly seagreen: Property.Color | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:seashell;`。 */
  readonly seashell: Property.Color | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:sienna;`。 */
  readonly sienna: Property.Color | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:silver;`。 */
  readonly silver: Property.Color | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:skyblue;`。 */
  readonly skyblue: Property.Color | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:slateblue;`。 */
  readonly slateblue: Property.Color | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:slategray;`。 */
  readonly slategray: Property.Color | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:slategrey;`。 */
  readonly slategrey: Property.Color | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:snow;`。 */
  readonly snow: Property.Color | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:springgreen;`。 */
  readonly springgreen: Property.Color | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:steelblue;`。 */
  readonly steelblue: Property.Color | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:tan;`。 */
  readonly tan: Property.Color | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:teal;`。 */
  readonly teal: Property.Color | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:thistle;`。 */
  readonly thistle: Property.Color | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:tomato;`。 */
  readonly tomato: Property.Color | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`color:transparent;`。
   */
  readonly transparent: Property.Color | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:turquoise;`。 */
  readonly turquoise: Property.Color | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color:unset;`。
   */
  readonly unset: Property.Color | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:violet;`。 */
  readonly violet: Property.Color | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:wheat;`。 */
  readonly wheat: Property.Color | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:white;`。 */
  readonly white: Property.Color | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:whitesmoke;`。 */
  readonly whitesmoke: Property.Color | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:yellow;`。 */
  readonly yellow: Property.Color | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color:yellowgreen;`。 */
  readonly yellowgreen: Property.Color | CssString = 'yellowgreen';
}

/**
 * 设置文字前景色，同时作为 currentColor 的来源。（color）
 *
 * 改变文字和 currentColor 的来源，不会自动改变背景。颜色函数方法返回完整 color 声明。
 *
 * CSS 初始值：`canvastext`（不同于浏览器默认样式表）。
 * @example
 * s.color.rgb(255, 0, 0, 0.5) // color:rgb(255 0 0 / 0.5);
 * @example
 * s.color.oklch(0.7, 0.15, 250) // color:oklch(0.7 0.15 250);
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
 */
export class ColorCss extends CssProperty {
  /** CSS 声明：`color:AccentColor;`。 */
  readonly AccentColor: string = 'color:AccentColor;';
  /** CSS 声明：`color:AccentColorText;`。 */
  readonly AccentColorText: string = 'color:AccentColorText;';
  /** CSS 声明：`color:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'color:ActiveBorder;';
  /** CSS 声明：`color:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'color:ActiveCaption;';
  /** CSS 声明：`color:ActiveText;`。 */
  readonly ActiveText: string = 'color:ActiveText;';
  /** CSS 声明：`color:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'color:AppWorkspace;';
  /** CSS 声明：`color:Background;`。 */
  readonly Background: string = 'color:Background;';
  /** CSS 声明：`color:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'color:ButtonBorder;';
  /** CSS 声明：`color:ButtonFace;`。 */
  readonly ButtonFace: string = 'color:ButtonFace;';
  /** CSS 声明：`color:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'color:ButtonHighlight;';
  /** CSS 声明：`color:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'color:ButtonShadow;';
  /** CSS 声明：`color:ButtonText;`。 */
  readonly ButtonText: string = 'color:ButtonText;';
  /** CSS 声明：`color:Canvas;`。 */
  readonly Canvas: string = 'color:Canvas;';
  /** CSS 声明：`color:CanvasText;`。 */
  readonly CanvasText: string = 'color:CanvasText;';
  /** CSS 声明：`color:CaptionText;`。 */
  readonly CaptionText: string = 'color:CaptionText;';
  /** CSS 声明：`color:Field;`。 */
  readonly Field: string = 'color:Field;';
  /** CSS 声明：`color:FieldText;`。 */
  readonly FieldText: string = 'color:FieldText;';
  /** CSS 声明：`color:GrayText;`。 */
  readonly GrayText: string = 'color:GrayText;';
  /** CSS 声明：`color:Highlight;`。 */
  readonly Highlight: string = 'color:Highlight;';
  /** CSS 声明：`color:HighlightText;`。 */
  readonly HighlightText: string = 'color:HighlightText;';
  /** CSS 声明：`color:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'color:InactiveBorder;';
  /** CSS 声明：`color:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'color:InactiveCaption;';
  /** CSS 声明：`color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'color:InactiveCaptionText;';
  /** CSS 声明：`color:InfoBackground;`。 */
  readonly InfoBackground: string = 'color:InfoBackground;';
  /** CSS 声明：`color:InfoText;`。 */
  readonly InfoText: string = 'color:InfoText;';
  /** CSS 声明：`color:LinkText;`。 */
  readonly LinkText: string = 'color:LinkText;';
  /** CSS 声明：`color:Mark;`。 */
  readonly Mark: string = 'color:Mark;';
  /** CSS 声明：`color:MarkText;`。 */
  readonly MarkText: string = 'color:MarkText;';
  /** CSS 声明：`color:Menu;`。 */
  readonly Menu: string = 'color:Menu;';
  /** CSS 声明：`color:MenuText;`。 */
  readonly MenuText: string = 'color:MenuText;';
  /** CSS 声明：`color:Scrollbar;`。 */
  readonly Scrollbar: string = 'color:Scrollbar;';
  /** CSS 声明：`color:SelectedItem;`。 */
  readonly SelectedItem: string = 'color:SelectedItem;';
  /** CSS 声明：`color:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'color:SelectedItemText;';
  /** CSS 声明：`color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'color:ThreeDDarkShadow;';
  /** CSS 声明：`color:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'color:ThreeDFace;';
  /** CSS 声明：`color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'color:ThreeDHighlight;';
  /** CSS 声明：`color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'color:ThreeDLightShadow;';
  /** CSS 声明：`color:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'color:ThreeDShadow;';
  /** CSS 声明：`color:VisitedText;`。 */
  readonly VisitedText: string = 'color:VisitedText;';
  /** CSS 声明：`color:Window;`。 */
  readonly Window: string = 'color:Window;';
  /** CSS 声明：`color:WindowFrame;`。 */
  readonly WindowFrame: string = 'color:WindowFrame;';
  /** CSS 声明：`color:WindowText;`。 */
  readonly WindowText: string = 'color:WindowText;';
  /** CSS 声明：`color:aliceblue;`。 */
  readonly aliceblue: string = 'color:aliceblue;';
  /** CSS 声明：`color:antiquewhite;`。 */
  readonly antiquewhite: string = 'color:antiquewhite;';
  /** CSS 声明：`color:aqua;`。 */
  readonly aqua: string = 'color:aqua;';
  /** CSS 声明：`color:aquamarine;`。 */
  readonly aquamarine: string = 'color:aquamarine;';
  /** CSS 声明：`color:azure;`。 */
  readonly azure: string = 'color:azure;';
  /** CSS 声明：`color:beige;`。 */
  readonly beige: string = 'color:beige;';
  /** CSS 声明：`color:bisque;`。 */
  readonly bisque: string = 'color:bisque;';
  /** CSS 声明：`color:black;`。 */
  readonly black: string = 'color:black;';
  /** CSS 声明：`color:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'color:blanchedalmond;';
  /** CSS 声明：`color:blue;`。 */
  readonly blue: string = 'color:blue;';
  /** CSS 声明：`color:blueviolet;`。 */
  readonly blueviolet: string = 'color:blueviolet;';
  /** CSS 声明：`color:brown;`。 */
  readonly brown: string = 'color:brown;';
  /** CSS 声明：`color:burlywood;`。 */
  readonly burlywood: string = 'color:burlywood;';
  /** CSS 声明：`color:cadetblue;`。 */
  readonly cadetblue: string = 'color:cadetblue;';
  /** CSS 声明：`color:chartreuse;`。 */
  readonly chartreuse: string = 'color:chartreuse;';
  /** CSS 声明：`color:chocolate;`。 */
  readonly chocolate: string = 'color:chocolate;';
  /** CSS 声明：`color:coral;`。 */
  readonly coral: string = 'color:coral;';
  /** CSS 声明：`color:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'color:cornflowerblue;';
  /** CSS 声明：`color:cornsilk;`。 */
  readonly cornsilk: string = 'color:cornsilk;';
  /** CSS 声明：`color:crimson;`。 */
  readonly crimson: string = 'color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`color:currentColor;`。
   */
  readonly currentColor: string = 'color:currentColor;';
  /** CSS 声明：`color:cyan;`。 */
  readonly cyan: string = 'color:cyan;';
  /** CSS 声明：`color:darkblue;`。 */
  readonly darkblue: string = 'color:darkblue;';
  /** CSS 声明：`color:darkcyan;`。 */
  readonly darkcyan: string = 'color:darkcyan;';
  /** CSS 声明：`color:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'color:darkgoldenrod;';
  /** CSS 声明：`color:darkgray;`。 */
  readonly darkgray: string = 'color:darkgray;';
  /** CSS 声明：`color:darkgreen;`。 */
  readonly darkgreen: string = 'color:darkgreen;';
  /** CSS 声明：`color:darkgrey;`。 */
  readonly darkgrey: string = 'color:darkgrey;';
  /** CSS 声明：`color:darkkhaki;`。 */
  readonly darkkhaki: string = 'color:darkkhaki;';
  /** CSS 声明：`color:darkmagenta;`。 */
  readonly darkmagenta: string = 'color:darkmagenta;';
  /** CSS 声明：`color:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'color:darkolivegreen;';
  /** CSS 声明：`color:darkorange;`。 */
  readonly darkorange: string = 'color:darkorange;';
  /** CSS 声明：`color:darkorchid;`。 */
  readonly darkorchid: string = 'color:darkorchid;';
  /** CSS 声明：`color:darkred;`。 */
  readonly darkred: string = 'color:darkred;';
  /** CSS 声明：`color:darksalmon;`。 */
  readonly darksalmon: string = 'color:darksalmon;';
  /** CSS 声明：`color:darkseagreen;`。 */
  readonly darkseagreen: string = 'color:darkseagreen;';
  /** CSS 声明：`color:darkslateblue;`。 */
  readonly darkslateblue: string = 'color:darkslateblue;';
  /** CSS 声明：`color:darkslategray;`。 */
  readonly darkslategray: string = 'color:darkslategray;';
  /** CSS 声明：`color:darkslategrey;`。 */
  readonly darkslategrey: string = 'color:darkslategrey;';
  /** CSS 声明：`color:darkturquoise;`。 */
  readonly darkturquoise: string = 'color:darkturquoise;';
  /** CSS 声明：`color:darkviolet;`。 */
  readonly darkviolet: string = 'color:darkviolet;';
  /** CSS 声明：`color:deeppink;`。 */
  readonly deeppink: string = 'color:deeppink;';
  /** CSS 声明：`color:deepskyblue;`。 */
  readonly deepskyblue: string = 'color:deepskyblue;';
  /** CSS 声明：`color:dimgray;`。 */
  readonly dimgray: string = 'color:dimgray;';
  /** CSS 声明：`color:dimgrey;`。 */
  readonly dimgrey: string = 'color:dimgrey;';
  /** CSS 声明：`color:dodgerblue;`。 */
  readonly dodgerblue: string = 'color:dodgerblue;';
  /** CSS 声明：`color:firebrick;`。 */
  readonly firebrick: string = 'color:firebrick;';
  /** CSS 声明：`color:floralwhite;`。 */
  readonly floralwhite: string = 'color:floralwhite;';
  /** CSS 声明：`color:forestgreen;`。 */
  readonly forestgreen: string = 'color:forestgreen;';
  /** CSS 声明：`color:fuchsia;`。 */
  readonly fuchsia: string = 'color:fuchsia;';
  /** CSS 声明：`color:gainsboro;`。 */
  readonly gainsboro: string = 'color:gainsboro;';
  /** CSS 声明：`color:ghostwhite;`。 */
  readonly ghostwhite: string = 'color:ghostwhite;';
  /** CSS 声明：`color:gold;`。 */
  readonly gold: string = 'color:gold;';
  /** CSS 声明：`color:goldenrod;`。 */
  readonly goldenrod: string = 'color:goldenrod;';
  /** CSS 声明：`color:gray;`。 */
  readonly gray: string = 'color:gray;';
  /** CSS 声明：`color:green;`。 */
  readonly green: string = 'color:green;';
  /** CSS 声明：`color:greenyellow;`。 */
  readonly greenyellow: string = 'color:greenyellow;';
  /** CSS 声明：`color:grey;`。 */
  readonly grey: string = 'color:grey;';
  /** CSS 声明：`color:honeydew;`。 */
  readonly honeydew: string = 'color:honeydew;';
  /** CSS 声明：`color:hotpink;`。 */
  readonly hotpink: string = 'color:hotpink;';
  /** CSS 声明：`color:indianred;`。 */
  readonly indianred: string = 'color:indianred;';
  /** CSS 声明：`color:indigo;`。 */
  readonly indigo: string = 'color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color:inherit;`。
   */
  readonly inherit: string = 'color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color:initial;`。
   */
  readonly initial: string = 'color:initial;';
  /** CSS 声明：`color:ivory;`。 */
  readonly ivory: string = 'color:ivory;';
  /** CSS 声明：`color:khaki;`。 */
  readonly khaki: string = 'color:khaki;';
  /** CSS 声明：`color:lavender;`。 */
  readonly lavender: string = 'color:lavender;';
  /** CSS 声明：`color:lavenderblush;`。 */
  readonly lavenderblush: string = 'color:lavenderblush;';
  /** CSS 声明：`color:lawngreen;`。 */
  readonly lawngreen: string = 'color:lawngreen;';
  /** CSS 声明：`color:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'color:lemonchiffon;';
  /** CSS 声明：`color:lightblue;`。 */
  readonly lightblue: string = 'color:lightblue;';
  /** CSS 声明：`color:lightcoral;`。 */
  readonly lightcoral: string = 'color:lightcoral;';
  /** CSS 声明：`color:lightcyan;`。 */
  readonly lightcyan: string = 'color:lightcyan;';
  /** CSS 声明：`color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'color:lightgoldenrodyellow;';
  /** CSS 声明：`color:lightgray;`。 */
  readonly lightgray: string = 'color:lightgray;';
  /** CSS 声明：`color:lightgreen;`。 */
  readonly lightgreen: string = 'color:lightgreen;';
  /** CSS 声明：`color:lightgrey;`。 */
  readonly lightgrey: string = 'color:lightgrey;';
  /** CSS 声明：`color:lightpink;`。 */
  readonly lightpink: string = 'color:lightpink;';
  /** CSS 声明：`color:lightsalmon;`。 */
  readonly lightsalmon: string = 'color:lightsalmon;';
  /** CSS 声明：`color:lightseagreen;`。 */
  readonly lightseagreen: string = 'color:lightseagreen;';
  /** CSS 声明：`color:lightskyblue;`。 */
  readonly lightskyblue: string = 'color:lightskyblue;';
  /** CSS 声明：`color:lightslategray;`。 */
  readonly lightslategray: string = 'color:lightslategray;';
  /** CSS 声明：`color:lightslategrey;`。 */
  readonly lightslategrey: string = 'color:lightslategrey;';
  /** CSS 声明：`color:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'color:lightsteelblue;';
  /** CSS 声明：`color:lightyellow;`。 */
  readonly lightyellow: string = 'color:lightyellow;';
  /** CSS 声明：`color:lime;`。 */
  readonly lime: string = 'color:lime;';
  /** CSS 声明：`color:limegreen;`。 */
  readonly limegreen: string = 'color:limegreen;';
  /** CSS 声明：`color:linen;`。 */
  readonly linen: string = 'color:linen;';
  /** CSS 声明：`color:magenta;`。 */
  readonly magenta: string = 'color:magenta;';
  /** CSS 声明：`color:maroon;`。 */
  readonly maroon: string = 'color:maroon;';
  /** CSS 声明：`color:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'color:mediumaquamarine;';
  /** CSS 声明：`color:mediumblue;`。 */
  readonly mediumblue: string = 'color:mediumblue;';
  /** CSS 声明：`color:mediumorchid;`。 */
  readonly mediumorchid: string = 'color:mediumorchid;';
  /** CSS 声明：`color:mediumpurple;`。 */
  readonly mediumpurple: string = 'color:mediumpurple;';
  /** CSS 声明：`color:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'color:mediumseagreen;';
  /** CSS 声明：`color:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'color:mediumslateblue;';
  /** CSS 声明：`color:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'color:mediumspringgreen;';
  /** CSS 声明：`color:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'color:mediumturquoise;';
  /** CSS 声明：`color:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'color:mediumvioletred;';
  /** CSS 声明：`color:midnightblue;`。 */
  readonly midnightblue: string = 'color:midnightblue;';
  /** CSS 声明：`color:mintcream;`。 */
  readonly mintcream: string = 'color:mintcream;';
  /** CSS 声明：`color:mistyrose;`。 */
  readonly mistyrose: string = 'color:mistyrose;';
  /** CSS 声明：`color:moccasin;`。 */
  readonly moccasin: string = 'color:moccasin;';
  /** CSS 声明：`color:navajowhite;`。 */
  readonly navajowhite: string = 'color:navajowhite;';
  /** CSS 声明：`color:navy;`。 */
  readonly navy: string = 'color:navy;';
  /** CSS 声明：`color:oldlace;`。 */
  readonly oldlace: string = 'color:oldlace;';
  /** CSS 声明：`color:olive;`。 */
  readonly olive: string = 'color:olive;';
  /** CSS 声明：`color:olivedrab;`。 */
  readonly olivedrab: string = 'color:olivedrab;';
  /** CSS 声明：`color:orange;`。 */
  readonly orange: string = 'color:orange;';
  /** CSS 声明：`color:orangered;`。 */
  readonly orangered: string = 'color:orangered;';
  /** CSS 声明：`color:orchid;`。 */
  readonly orchid: string = 'color:orchid;';
  /** CSS 声明：`color:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'color:palegoldenrod;';
  /** CSS 声明：`color:palegreen;`。 */
  readonly palegreen: string = 'color:palegreen;';
  /** CSS 声明：`color:paleturquoise;`。 */
  readonly paleturquoise: string = 'color:paleturquoise;';
  /** CSS 声明：`color:palevioletred;`。 */
  readonly palevioletred: string = 'color:palevioletred;';
  /** CSS 声明：`color:papayawhip;`。 */
  readonly papayawhip: string = 'color:papayawhip;';
  /** CSS 声明：`color:peachpuff;`。 */
  readonly peachpuff: string = 'color:peachpuff;';
  /** CSS 声明：`color:peru;`。 */
  readonly peru: string = 'color:peru;';
  /** CSS 声明：`color:pink;`。 */
  readonly pink: string = 'color:pink;';
  /** CSS 声明：`color:plum;`。 */
  readonly plum: string = 'color:plum;';
  /** CSS 声明：`color:powderblue;`。 */
  readonly powderblue: string = 'color:powderblue;';
  /** CSS 声明：`color:purple;`。 */
  readonly purple: string = 'color:purple;';
  /** CSS 声明：`color:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'color:rebeccapurple;';
  /** CSS 声明：`color:red;`。 */
  readonly red: string = 'color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color:revert;`。
   */
  readonly revert: string = 'color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color:revert-layer;`。
   */
  readonly revertLayer: string = 'color:revert-layer;';
  /** CSS 声明：`color:rosybrown;`。 */
  readonly rosybrown: string = 'color:rosybrown;';
  /** CSS 声明：`color:royalblue;`。 */
  readonly royalblue: string = 'color:royalblue;';
  /** CSS 声明：`color:saddlebrown;`。 */
  readonly saddlebrown: string = 'color:saddlebrown;';
  /** CSS 声明：`color:salmon;`。 */
  readonly salmon: string = 'color:salmon;';
  /** CSS 声明：`color:sandybrown;`。 */
  readonly sandybrown: string = 'color:sandybrown;';
  /** CSS 声明：`color:seagreen;`。 */
  readonly seagreen: string = 'color:seagreen;';
  /** CSS 声明：`color:seashell;`。 */
  readonly seashell: string = 'color:seashell;';
  /** CSS 声明：`color:sienna;`。 */
  readonly sienna: string = 'color:sienna;';
  /** CSS 声明：`color:silver;`。 */
  readonly silver: string = 'color:silver;';
  /** CSS 声明：`color:skyblue;`。 */
  readonly skyblue: string = 'color:skyblue;';
  /** CSS 声明：`color:slateblue;`。 */
  readonly slateblue: string = 'color:slateblue;';
  /** CSS 声明：`color:slategray;`。 */
  readonly slategray: string = 'color:slategray;';
  /** CSS 声明：`color:slategrey;`。 */
  readonly slategrey: string = 'color:slategrey;';
  /** CSS 声明：`color:snow;`。 */
  readonly snow: string = 'color:snow;';
  /** CSS 声明：`color:springgreen;`。 */
  readonly springgreen: string = 'color:springgreen;';
  /** CSS 声明：`color:steelblue;`。 */
  readonly steelblue: string = 'color:steelblue;';
  /** CSS 声明：`color:tan;`。 */
  readonly tan: string = 'color:tan;';
  /** CSS 声明：`color:teal;`。 */
  readonly teal: string = 'color:teal;';
  /** CSS 声明：`color:thistle;`。 */
  readonly thistle: string = 'color:thistle;';
  /** CSS 声明：`color:tomato;`。 */
  readonly tomato: string = 'color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`color:transparent;`。
   */
  readonly transparent: string = 'color:transparent;';
  /** CSS 声明：`color:turquoise;`。 */
  readonly turquoise: string = 'color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color:unset;`。
   */
  readonly unset: string = 'color:unset;';
  /** CSS 声明：`color:violet;`。 */
  readonly violet: string = 'color:violet;';
  /** CSS 声明：`color:wheat;`。 */
  readonly wheat: string = 'color:wheat;';
  /** CSS 声明：`color:white;`。 */
  readonly white: string = 'color:white;';
  /** CSS 声明：`color:whitesmoke;`。 */
  readonly whitesmoke: string = 'color:whitesmoke;';
  /** CSS 声明：`color:yellow;`。 */
  readonly yellow: string = 'color:yellow;';
  /** CSS 声明：`color:yellowgreen;`。 */
  readonly yellowgreen: string = 'color:yellowgreen;';
  /**
   * 创建 color 属性作者；普通使用通过 s.color 取得共享实例。
   * @example
   * class CustomColorCss extends ColorCss {}
   */
  constructor() {
    super('color');
  }
  /**
   * 原样生成 color 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 color:value;。
   * @example
   * s.color.raw('inherit') // color:inherit;
   */
  raw(value: Property.Color | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.color.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.color.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.color.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.color.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/**
 * color-adjust 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColorAdjustKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-adjust:economy;`。 */
  readonly economy: Property.PrintColorAdjust | CssString = 'economy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-adjust:exact;`。 */
  readonly exact: Property.PrintColorAdjust | CssString = 'exact';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-adjust:inherit;`。
   */
  readonly inherit: Property.PrintColorAdjust | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-adjust:initial;`。
   */
  readonly initial: Property.PrintColorAdjust | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-adjust:revert;`。
   */
  readonly revert: Property.PrintColorAdjust | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-adjust:revert-layer;`。
   */
  readonly revertLayer: Property.PrintColorAdjust | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-adjust:unset;`。
   */
  readonly unset: Property.PrintColorAdjust | CssString = 'unset';
}

/**
 * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。（color-adjust）
 *
 * CSS 初始值：`economy`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class ColorAdjustCss extends CssProperty {
  /** CSS 声明：`color-adjust:economy;`。 */
  readonly economy: string = 'color-adjust:economy;';
  /** CSS 声明：`color-adjust:exact;`。 */
  readonly exact: string = 'color-adjust:exact;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-adjust:inherit;`。
   */
  readonly inherit: string = 'color-adjust:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-adjust:initial;`。
   */
  readonly initial: string = 'color-adjust:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-adjust:revert;`。
   */
  readonly revert: string = 'color-adjust:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-adjust:revert-layer;`。
   */
  readonly revertLayer: string = 'color-adjust:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-adjust:unset;`。
   */
  readonly unset: string = 'color-adjust:unset;';
  /**
   * 创建 color-adjust 属性作者；普通使用通过 s.colorAdjust 取得共享实例。
   * @example
   * class CustomColorAdjustCss extends ColorAdjustCss {}
   */
  constructor() {
    super('color-adjust');
  }
  /**
   * 原样生成 color-adjust 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 color-adjust:value;。
   * @example
   * s.colorAdjust.raw('inherit') // color-adjust:inherit;
   */
  raw(value: Property.PrintColorAdjust | CssString): string {
    return this.declaration(value);
  }
}

/**
 * color-interpolation 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColorInterpolationKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-interpolation:auto;`。 */
  readonly auto: Property.ColorInterpolation | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-interpolation:inherit;`。
   */
  readonly inherit: Property.ColorInterpolation | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-interpolation:initial;`。
   */
  readonly initial: Property.ColorInterpolation | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-interpolation:linearRGB;`。 */
  readonly linearRGB: Property.ColorInterpolation | CssString = 'linearRGB';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-interpolation:revert;`。
   */
  readonly revert: Property.ColorInterpolation | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-interpolation:revert-layer;`。
   */
  readonly revertLayer: Property.ColorInterpolation | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-interpolation:sRGB;`。 */
  readonly sRGB: Property.ColorInterpolation | CssString = 'sRGB';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-interpolation:unset;`。
   */
  readonly unset: Property.ColorInterpolation | CssString = 'unset';
}

/**
 * 设置 SVG 图形颜色插值所用的色彩空间。（color-interpolation）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
 */
export class ColorInterpolationCss extends CssProperty {
  /** CSS 声明：`color-interpolation:auto;`。 */
  readonly auto: string = 'color-interpolation:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-interpolation:inherit;`。
   */
  readonly inherit: string = 'color-interpolation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-interpolation:initial;`。
   */
  readonly initial: string = 'color-interpolation:initial;';
  /** CSS 声明：`color-interpolation:linearRGB;`。 */
  readonly linearRGB: string = 'color-interpolation:linearRGB;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-interpolation:revert;`。
   */
  readonly revert: string = 'color-interpolation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-interpolation:revert-layer;`。
   */
  readonly revertLayer: string = 'color-interpolation:revert-layer;';
  /** CSS 声明：`color-interpolation:sRGB;`。 */
  readonly sRGB: string = 'color-interpolation:sRGB;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-interpolation:unset;`。
   */
  readonly unset: string = 'color-interpolation:unset;';
  /**
   * 创建 color-interpolation 属性作者；普通使用通过 s.colorInterpolation 取得共享实例。
   * @example
   * class CustomColorInterpolationCss extends ColorInterpolationCss {}
   */
  constructor() {
    super('color-interpolation');
  }
  /**
   * 原样生成 color-interpolation 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 color-interpolation:value;。
   * @example
   * s.colorInterpolation.raw('inherit') // color-interpolation:inherit;
   */
  raw(value: Property.ColorInterpolation | CssString): string {
    return this.declaration(value);
  }
}

/**
 * color-interpolation-filters 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColorInterpolationFiltersKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-interpolation-filters:auto;`。 */
  readonly auto: Property.ColorInterpolationFilters | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-interpolation-filters:inherit;`。
   */
  readonly inherit: Property.ColorInterpolationFilters | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-interpolation-filters:initial;`。
   */
  readonly initial: Property.ColorInterpolationFilters | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-interpolation-filters:linearRGB;`。 */
  readonly linearRGB: Property.ColorInterpolationFilters | CssString = 'linearRGB';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-interpolation-filters:revert;`。
   */
  readonly revert: Property.ColorInterpolationFilters | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-interpolation-filters:revert-layer;`。
   */
  readonly revertLayer: Property.ColorInterpolationFilters | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-interpolation-filters:sRGB;`。 */
  readonly sRGB: Property.ColorInterpolationFilters | CssString = 'sRGB';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-interpolation-filters:unset;`。
   */
  readonly unset: Property.ColorInterpolationFilters | CssString = 'unset';
}

/**
 * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。（color-interpolation-filters）
 *
 * CSS 初始值：`linearRGB`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
 */
export class ColorInterpolationFiltersCss extends CssProperty {
  /** CSS 声明：`color-interpolation-filters:auto;`。 */
  readonly auto: string = 'color-interpolation-filters:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-interpolation-filters:inherit;`。
   */
  readonly inherit: string = 'color-interpolation-filters:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-interpolation-filters:initial;`。
   */
  readonly initial: string = 'color-interpolation-filters:initial;';
  /** CSS 声明：`color-interpolation-filters:linearRGB;`。 */
  readonly linearRGB: string = 'color-interpolation-filters:linearRGB;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-interpolation-filters:revert;`。
   */
  readonly revert: string = 'color-interpolation-filters:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-interpolation-filters:revert-layer;`。
   */
  readonly revertLayer: string = 'color-interpolation-filters:revert-layer;';
  /** CSS 声明：`color-interpolation-filters:sRGB;`。 */
  readonly sRGB: string = 'color-interpolation-filters:sRGB;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-interpolation-filters:unset;`。
   */
  readonly unset: string = 'color-interpolation-filters:unset;';
  /**
   * 创建 color-interpolation-filters 属性作者；普通使用通过 s.colorInterpolationFilters 取得共享实例。
   * @example
   * class CustomColorInterpolationFiltersCss extends ColorInterpolationFiltersCss {}
   */
  constructor() {
    super('color-interpolation-filters');
  }
  /**
   * 原样生成 color-interpolation-filters 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 color-interpolation-filters:value;。
   * @example
   * s.colorInterpolationFilters.raw('inherit') // color-interpolation-filters:inherit;
   */
  raw(value: Property.ColorInterpolationFilters | CssString): string {
    return this.declaration(value);
  }
}

/**
 * color-rendering 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColorRenderingKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-rendering:auto;`。 */
  readonly auto: Property.ColorRendering | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-rendering:inherit;`。
   */
  readonly inherit: Property.ColorRendering | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-rendering:initial;`。
   */
  readonly initial: Property.ColorRendering | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-rendering:optimizeQuality;`。 */
  readonly optimizeQuality: Property.ColorRendering | CssString = 'optimizeQuality';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-rendering:optimizeSpeed;`。 */
  readonly optimizeSpeed: Property.ColorRendering | CssString = 'optimizeSpeed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-rendering:revert;`。
   */
  readonly revert: Property.ColorRendering | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-rendering:revert-layer;`。
   */
  readonly revertLayer: Property.ColorRendering | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-rendering:unset;`。
   */
  readonly unset: Property.ColorRendering | CssString = 'unset';
}

/**
 * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。（color-rendering）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
 */
export class ColorRenderingCss extends CssProperty {
  /** CSS 声明：`color-rendering:auto;`。 */
  readonly auto: string = 'color-rendering:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-rendering:inherit;`。
   */
  readonly inherit: string = 'color-rendering:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-rendering:initial;`。
   */
  readonly initial: string = 'color-rendering:initial;';
  /** CSS 声明：`color-rendering:optimizeQuality;`。 */
  readonly optimizeQuality: string = 'color-rendering:optimizeQuality;';
  /** CSS 声明：`color-rendering:optimizeSpeed;`。 */
  readonly optimizeSpeed: string = 'color-rendering:optimizeSpeed;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-rendering:revert;`。
   */
  readonly revert: string = 'color-rendering:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-rendering:revert-layer;`。
   */
  readonly revertLayer: string = 'color-rendering:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-rendering:unset;`。
   */
  readonly unset: string = 'color-rendering:unset;';
  /**
   * 创建 color-rendering 属性作者；普通使用通过 s.colorRendering 取得共享实例。
   * @example
   * class CustomColorRenderingCss extends ColorRenderingCss {}
   */
  constructor() {
    super('color-rendering');
  }
  /**
   * 原样生成 color-rendering 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 color-rendering:value;。
   * @example
   * s.colorRendering.raw('inherit') // color-rendering:inherit;
   */
  raw(value: Property.ColorRendering | CssString): string {
    return this.declaration(value);
  }
}

/**
 * color-scheme 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColorSchemeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-scheme:dark;`。 */
  readonly dark: Property.ColorScheme | CssString = 'dark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-scheme:inherit;`。
   */
  readonly inherit: Property.ColorScheme | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-scheme:initial;`。
   */
  readonly initial: Property.ColorScheme | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-scheme:light;`。 */
  readonly light: Property.ColorScheme | CssString = 'light';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`color-scheme:normal;`。 */
  readonly normal: Property.ColorScheme | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-scheme:revert;`。
   */
  readonly revert: Property.ColorScheme | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-scheme:revert-layer;`。
   */
  readonly revertLayer: Property.ColorScheme | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-scheme:unset;`。
   */
  readonly unset: Property.ColorScheme | CssString = 'unset';
}

/**
 * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。（color-scheme）
 *
 * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
 */
export class ColorSchemeCss extends CssProperty {
  /** CSS 声明：`color-scheme:dark;`。 */
  readonly dark: string = 'color-scheme:dark;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-scheme:inherit;`。
   */
  readonly inherit: string = 'color-scheme:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-scheme:initial;`。
   */
  readonly initial: string = 'color-scheme:initial;';
  /** CSS 声明：`color-scheme:light;`。 */
  readonly light: string = 'color-scheme:light;';
  /** CSS 声明：`color-scheme:normal;`。 */
  readonly normal: string = 'color-scheme:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-scheme:revert;`。
   */
  readonly revert: string = 'color-scheme:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-scheme:revert-layer;`。
   */
  readonly revertLayer: string = 'color-scheme:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-scheme:unset;`。
   */
  readonly unset: string = 'color-scheme:unset;';
  /**
   * 创建 color-scheme 属性作者；普通使用通过 s.colorScheme 取得共享实例。
   * @example
   * class CustomColorSchemeCss extends ColorSchemeCss {}
   */
  constructor() {
    super('color-scheme');
  }
  /**
   * 原样生成 color-scheme 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 color-scheme:value;。
   * @example
   * s.colorScheme.raw('inherit') // color-scheme:inherit;
   */
  raw(value: Property.ColorScheme | CssString): string {
    return this.declaration(value);
  }
}

/**
 * column-count 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnCountKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-count:auto;`。 */
  readonly auto: Property.ColumnCount | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-count:inherit;`。
   */
  readonly inherit: Property.ColumnCount | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-count:initial;`。
   */
  readonly initial: Property.ColumnCount | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-count:revert;`。
   */
  readonly revert: Property.ColumnCount | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-count:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnCount | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-count:unset;`。
   */
  readonly unset: Property.ColumnCount | CssString = 'unset';
}

/**
 * 设置多栏布局的目标栏数。（column-count）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
 */
export class ColumnCountCss extends CssProperty {
  /** CSS 声明：`column-count:auto;`。 */
  readonly auto: string = 'column-count:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-count:inherit;`。
   */
  readonly inherit: string = 'column-count:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-count:initial;`。
   */
  readonly initial: string = 'column-count:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-count:revert;`。
   */
  readonly revert: string = 'column-count:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-count:revert-layer;`。
   */
  readonly revertLayer: string = 'column-count:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-count:unset;`。
   */
  readonly unset: string = 'column-count:unset;';
  /**
   * 创建 column-count 属性作者；普通使用通过 s.columnCount 取得共享实例。
   * @example
   * class CustomColumnCountCss extends ColumnCountCss {}
   */
  constructor() {
    super('column-count');
  }
  /**
   * 原样生成 column-count 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-count:value;。
   * @example
   * s.columnCount.raw('inherit') // column-count:inherit;
   */
  raw(value: Property.ColumnCount | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.columnCount.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.columnCount.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ColumnCount | CssString,
    ...others: (Property.ColumnCount | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.columnCount.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ColumnCount | CssString,
    ...others: (Property.ColumnCount | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.columnCount.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ColumnCount | CssString,
    preferred: Property.ColumnCount | CssString,
    maximum: Property.ColumnCount | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * column-fill 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnFillKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-fill:auto;`。 */
  readonly auto: Property.ColumnFill | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-fill:balance;`。 */
  readonly balance: Property.ColumnFill | CssString = 'balance';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-fill:inherit;`。
   */
  readonly inherit: Property.ColumnFill | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-fill:initial;`。
   */
  readonly initial: Property.ColumnFill | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-fill:revert;`。
   */
  readonly revert: Property.ColumnFill | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-fill:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnFill | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-fill:unset;`。
   */
  readonly unset: Property.ColumnFill | CssString = 'unset';
}

/**
 * 设置多栏内容顺序填充还是尽量均衡栏高。（column-fill）
 *
 * CSS 初始值：`balance`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
 */
export class ColumnFillCss extends CssProperty {
  /** CSS 声明：`column-fill:auto;`。 */
  readonly auto: string = 'column-fill:auto;';
  /** CSS 声明：`column-fill:balance;`。 */
  readonly balance: string = 'column-fill:balance;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-fill:inherit;`。
   */
  readonly inherit: string = 'column-fill:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-fill:initial;`。
   */
  readonly initial: string = 'column-fill:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-fill:revert;`。
   */
  readonly revert: string = 'column-fill:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-fill:revert-layer;`。
   */
  readonly revertLayer: string = 'column-fill:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-fill:unset;`。
   */
  readonly unset: string = 'column-fill:unset;';
  /**
   * 创建 column-fill 属性作者；普通使用通过 s.columnFill 取得共享实例。
   * @example
   * class CustomColumnFillCss extends ColumnFillCss {}
   */
  constructor() {
    super('column-fill');
  }
  /**
   * 原样生成 column-fill 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-fill:value;。
   * @example
   * s.columnFill.raw('inherit') // column-fill:inherit;
   */
  raw(value: Property.ColumnFill | CssString): string {
    return this.declaration(value);
  }
}

/**
 * column-gap 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnGapKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-gap:inherit;`。
   */
  readonly inherit: Property.ColumnGap | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-gap:initial;`。
   */
  readonly initial: Property.ColumnGap | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-gap:normal;`。 */
  readonly normal: Property.ColumnGap | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-gap:revert;`。
   */
  readonly revert: Property.ColumnGap | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-gap:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnGap | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-gap:unset;`。
   */
  readonly unset: Property.ColumnGap | CssString = 'unset';
}

/**
 * 设置布局中相邻列之间的间距。（column-gap）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
 */
export class ColumnGapCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-gap:inherit;`。
   */
  readonly inherit: string = 'column-gap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-gap:initial;`。
   */
  readonly initial: string = 'column-gap:initial;';
  /** CSS 声明：`column-gap:normal;`。 */
  readonly normal: string = 'column-gap:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-gap:revert;`。
   */
  readonly revert: string = 'column-gap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-gap:revert-layer;`。
   */
  readonly revertLayer: string = 'column-gap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-gap:unset;`。
   */
  readonly unset: string = 'column-gap:unset;';
  /**
   * 创建 column-gap 属性作者；普通使用通过 s.columnGap 取得共享实例。
   * @example
   * class CustomColumnGapCss extends ColumnGapCss {}
   */
  constructor() {
    super('column-gap');
  }
  /**
   * 原样生成 column-gap 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-gap:value;。
   * @example
   * s.columnGap.raw('inherit') // column-gap:inherit;
   */
  raw(value: Property.ColumnGap | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.columnGap.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.columnGap.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.columnGap.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ColumnGap | CssString,
    ...others: (Property.ColumnGap | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.columnGap.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ColumnGap | CssString,
    ...others: (Property.ColumnGap | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.columnGap.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ColumnGap | CssString,
    preferred: Property.ColumnGap | CssString,
    maximum: Property.ColumnGap | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * column-rule 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnRuleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:AccentColor;`。 */
  readonly AccentColor: Property.ColumnRule | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:AccentColorText;`。 */
  readonly AccentColorText: Property.ColumnRule | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ActiveBorder;`。 */
  readonly ActiveBorder: Property.ColumnRule | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ActiveCaption;`。 */
  readonly ActiveCaption: Property.ColumnRule | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ActiveText;`。 */
  readonly ActiveText: Property.ColumnRule | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:AppWorkspace;`。 */
  readonly AppWorkspace: Property.ColumnRule | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Background;`。 */
  readonly Background: Property.ColumnRule | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ButtonBorder;`。 */
  readonly ButtonBorder: Property.ColumnRule | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ButtonFace;`。 */
  readonly ButtonFace: Property.ColumnRule | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.ColumnRule | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ButtonShadow;`。 */
  readonly ButtonShadow: Property.ColumnRule | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ButtonText;`。 */
  readonly ButtonText: Property.ColumnRule | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Canvas;`。 */
  readonly Canvas: Property.ColumnRule | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:CanvasText;`。 */
  readonly CanvasText: Property.ColumnRule | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:CaptionText;`。 */
  readonly CaptionText: Property.ColumnRule | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Field;`。 */
  readonly Field: Property.ColumnRule | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:FieldText;`。 */
  readonly FieldText: Property.ColumnRule | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:GrayText;`。 */
  readonly GrayText: Property.ColumnRule | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Highlight;`。 */
  readonly Highlight: Property.ColumnRule | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:HighlightText;`。 */
  readonly HighlightText: Property.ColumnRule | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:InactiveBorder;`。 */
  readonly InactiveBorder: Property.ColumnRule | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:InactiveCaption;`。 */
  readonly InactiveCaption: Property.ColumnRule | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.ColumnRule | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:InfoBackground;`。 */
  readonly InfoBackground: Property.ColumnRule | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:InfoText;`。 */
  readonly InfoText: Property.ColumnRule | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:LinkText;`。 */
  readonly LinkText: Property.ColumnRule | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Mark;`。 */
  readonly Mark: Property.ColumnRule | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:MarkText;`。 */
  readonly MarkText: Property.ColumnRule | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Menu;`。 */
  readonly Menu: Property.ColumnRule | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:MenuText;`。 */
  readonly MenuText: Property.ColumnRule | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Scrollbar;`。 */
  readonly Scrollbar: Property.ColumnRule | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:SelectedItem;`。 */
  readonly SelectedItem: Property.ColumnRule | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:SelectedItemText;`。 */
  readonly SelectedItemText: Property.ColumnRule | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.ColumnRule | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ThreeDFace;`。 */
  readonly ThreeDFace: Property.ColumnRule | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.ColumnRule | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.ColumnRule | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.ColumnRule | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:VisitedText;`。 */
  readonly VisitedText: Property.ColumnRule | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:Window;`。 */
  readonly Window: Property.ColumnRule | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:WindowFrame;`。 */
  readonly WindowFrame: Property.ColumnRule | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:WindowText;`。 */
  readonly WindowText: Property.ColumnRule | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:aliceblue;`。 */
  readonly aliceblue: Property.ColumnRule | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:antiquewhite;`。 */
  readonly antiquewhite: Property.ColumnRule | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:aqua;`。 */
  readonly aqua: Property.ColumnRule | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:aquamarine;`。 */
  readonly aquamarine: Property.ColumnRule | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:azure;`。 */
  readonly azure: Property.ColumnRule | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:beige;`。 */
  readonly beige: Property.ColumnRule | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:bisque;`。 */
  readonly bisque: Property.ColumnRule | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:black;`。 */
  readonly black: Property.ColumnRule | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:blanchedalmond;`。 */
  readonly blanchedalmond: Property.ColumnRule | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:blue;`。 */
  readonly blue: Property.ColumnRule | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:blueviolet;`。 */
  readonly blueviolet: Property.ColumnRule | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:brown;`。 */
  readonly brown: Property.ColumnRule | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:burlywood;`。 */
  readonly burlywood: Property.ColumnRule | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:cadetblue;`。 */
  readonly cadetblue: Property.ColumnRule | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:chartreuse;`。 */
  readonly chartreuse: Property.ColumnRule | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:chocolate;`。 */
  readonly chocolate: Property.ColumnRule | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:coral;`。 */
  readonly coral: Property.ColumnRule | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:cornflowerblue;`。 */
  readonly cornflowerblue: Property.ColumnRule | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:cornsilk;`。 */
  readonly cornsilk: Property.ColumnRule | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:crimson;`。 */
  readonly crimson: Property.ColumnRule | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`column-rule:currentColor;`。
   */
  readonly currentColor: Property.ColumnRule | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:cyan;`。 */
  readonly cyan: Property.ColumnRule | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkblue;`。 */
  readonly darkblue: Property.ColumnRule | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkcyan;`。 */
  readonly darkcyan: Property.ColumnRule | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.ColumnRule | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkgray;`。 */
  readonly darkgray: Property.ColumnRule | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkgreen;`。 */
  readonly darkgreen: Property.ColumnRule | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkgrey;`。 */
  readonly darkgrey: Property.ColumnRule | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkkhaki;`。 */
  readonly darkkhaki: Property.ColumnRule | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkmagenta;`。 */
  readonly darkmagenta: Property.ColumnRule | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkolivegreen;`。 */
  readonly darkolivegreen: Property.ColumnRule | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkorange;`。 */
  readonly darkorange: Property.ColumnRule | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkorchid;`。 */
  readonly darkorchid: Property.ColumnRule | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkred;`。 */
  readonly darkred: Property.ColumnRule | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darksalmon;`。 */
  readonly darksalmon: Property.ColumnRule | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkseagreen;`。 */
  readonly darkseagreen: Property.ColumnRule | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkslateblue;`。 */
  readonly darkslateblue: Property.ColumnRule | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkslategray;`。 */
  readonly darkslategray: Property.ColumnRule | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkslategrey;`。 */
  readonly darkslategrey: Property.ColumnRule | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkturquoise;`。 */
  readonly darkturquoise: Property.ColumnRule | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:darkviolet;`。 */
  readonly darkviolet: Property.ColumnRule | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:dashed;`。 */
  readonly dashed: Property.ColumnRule | CssString = 'dashed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:deeppink;`。 */
  readonly deeppink: Property.ColumnRule | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:deepskyblue;`。 */
  readonly deepskyblue: Property.ColumnRule | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:dimgray;`。 */
  readonly dimgray: Property.ColumnRule | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:dimgrey;`。 */
  readonly dimgrey: Property.ColumnRule | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:dodgerblue;`。 */
  readonly dodgerblue: Property.ColumnRule | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:dotted;`。 */
  readonly dotted: Property.ColumnRule | CssString = 'dotted';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:double;`。 */
  readonly double: Property.ColumnRule | CssString = 'double';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:firebrick;`。 */
  readonly firebrick: Property.ColumnRule | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:floralwhite;`。 */
  readonly floralwhite: Property.ColumnRule | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:forestgreen;`。 */
  readonly forestgreen: Property.ColumnRule | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:fuchsia;`。 */
  readonly fuchsia: Property.ColumnRule | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:gainsboro;`。 */
  readonly gainsboro: Property.ColumnRule | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ghostwhite;`。 */
  readonly ghostwhite: Property.ColumnRule | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:gold;`。 */
  readonly gold: Property.ColumnRule | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:goldenrod;`。 */
  readonly goldenrod: Property.ColumnRule | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:gray;`。 */
  readonly gray: Property.ColumnRule | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:green;`。 */
  readonly green: Property.ColumnRule | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:greenyellow;`。 */
  readonly greenyellow: Property.ColumnRule | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:grey;`。 */
  readonly grey: Property.ColumnRule | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:groove;`。 */
  readonly groove: Property.ColumnRule | CssString = 'groove';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:hidden;`。 */
  readonly hidden: Property.ColumnRule | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:honeydew;`。 */
  readonly honeydew: Property.ColumnRule | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:hotpink;`。 */
  readonly hotpink: Property.ColumnRule | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:indianred;`。 */
  readonly indianred: Property.ColumnRule | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:indigo;`。 */
  readonly indigo: Property.ColumnRule | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule:inherit;`。
   */
  readonly inherit: Property.ColumnRule | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule:initial;`。
   */
  readonly initial: Property.ColumnRule | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:inset;`。 */
  readonly inset: Property.ColumnRule | CssString = 'inset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ivory;`。 */
  readonly ivory: Property.ColumnRule | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:khaki;`。 */
  readonly khaki: Property.ColumnRule | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lavender;`。 */
  readonly lavender: Property.ColumnRule | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lavenderblush;`。 */
  readonly lavenderblush: Property.ColumnRule | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lawngreen;`。 */
  readonly lawngreen: Property.ColumnRule | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lemonchiffon;`。 */
  readonly lemonchiffon: Property.ColumnRule | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightblue;`。 */
  readonly lightblue: Property.ColumnRule | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightcoral;`。 */
  readonly lightcoral: Property.ColumnRule | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightcyan;`。 */
  readonly lightcyan: Property.ColumnRule | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.ColumnRule | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightgray;`。 */
  readonly lightgray: Property.ColumnRule | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightgreen;`。 */
  readonly lightgreen: Property.ColumnRule | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightgrey;`。 */
  readonly lightgrey: Property.ColumnRule | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightpink;`。 */
  readonly lightpink: Property.ColumnRule | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightsalmon;`。 */
  readonly lightsalmon: Property.ColumnRule | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightseagreen;`。 */
  readonly lightseagreen: Property.ColumnRule | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightskyblue;`。 */
  readonly lightskyblue: Property.ColumnRule | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightslategray;`。 */
  readonly lightslategray: Property.ColumnRule | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightslategrey;`。 */
  readonly lightslategrey: Property.ColumnRule | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightsteelblue;`。 */
  readonly lightsteelblue: Property.ColumnRule | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lightyellow;`。 */
  readonly lightyellow: Property.ColumnRule | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:lime;`。 */
  readonly lime: Property.ColumnRule | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:limegreen;`。 */
  readonly limegreen: Property.ColumnRule | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:linen;`。 */
  readonly linen: Property.ColumnRule | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:magenta;`。 */
  readonly magenta: Property.ColumnRule | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:maroon;`。 */
  readonly maroon: Property.ColumnRule | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:medium;`。 */
  readonly medium: Property.ColumnRule | CssString = 'medium';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.ColumnRule | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumblue;`。 */
  readonly mediumblue: Property.ColumnRule | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumorchid;`。 */
  readonly mediumorchid: Property.ColumnRule | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumpurple;`。 */
  readonly mediumpurple: Property.ColumnRule | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumseagreen;`。 */
  readonly mediumseagreen: Property.ColumnRule | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumslateblue;`。 */
  readonly mediumslateblue: Property.ColumnRule | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.ColumnRule | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumturquoise;`。 */
  readonly mediumturquoise: Property.ColumnRule | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mediumvioletred;`。 */
  readonly mediumvioletred: Property.ColumnRule | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:midnightblue;`。 */
  readonly midnightblue: Property.ColumnRule | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mintcream;`。 */
  readonly mintcream: Property.ColumnRule | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:mistyrose;`。 */
  readonly mistyrose: Property.ColumnRule | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:moccasin;`。 */
  readonly moccasin: Property.ColumnRule | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:navajowhite;`。 */
  readonly navajowhite: Property.ColumnRule | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:navy;`。 */
  readonly navy: Property.ColumnRule | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:none;`。 */
  readonly none: Property.ColumnRule | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:oldlace;`。 */
  readonly oldlace: Property.ColumnRule | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:olive;`。 */
  readonly olive: Property.ColumnRule | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:olivedrab;`。 */
  readonly olivedrab: Property.ColumnRule | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:orange;`。 */
  readonly orange: Property.ColumnRule | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:orangered;`。 */
  readonly orangered: Property.ColumnRule | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:orchid;`。 */
  readonly orchid: Property.ColumnRule | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:outset;`。 */
  readonly outset: Property.ColumnRule | CssString = 'outset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:palegoldenrod;`。 */
  readonly palegoldenrod: Property.ColumnRule | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:palegreen;`。 */
  readonly palegreen: Property.ColumnRule | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:paleturquoise;`。 */
  readonly paleturquoise: Property.ColumnRule | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:palevioletred;`。 */
  readonly palevioletred: Property.ColumnRule | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:papayawhip;`。 */
  readonly papayawhip: Property.ColumnRule | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:peachpuff;`。 */
  readonly peachpuff: Property.ColumnRule | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:peru;`。 */
  readonly peru: Property.ColumnRule | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:pink;`。 */
  readonly pink: Property.ColumnRule | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:plum;`。 */
  readonly plum: Property.ColumnRule | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:powderblue;`。 */
  readonly powderblue: Property.ColumnRule | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:purple;`。 */
  readonly purple: Property.ColumnRule | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:rebeccapurple;`。 */
  readonly rebeccapurple: Property.ColumnRule | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:red;`。 */
  readonly red: Property.ColumnRule | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule:revert;`。
   */
  readonly revert: Property.ColumnRule | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnRule | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:ridge;`。 */
  readonly ridge: Property.ColumnRule | CssString = 'ridge';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:rosybrown;`。 */
  readonly rosybrown: Property.ColumnRule | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:royalblue;`。 */
  readonly royalblue: Property.ColumnRule | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:saddlebrown;`。 */
  readonly saddlebrown: Property.ColumnRule | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:salmon;`。 */
  readonly salmon: Property.ColumnRule | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:sandybrown;`。 */
  readonly sandybrown: Property.ColumnRule | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:seagreen;`。 */
  readonly seagreen: Property.ColumnRule | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:seashell;`。 */
  readonly seashell: Property.ColumnRule | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:sienna;`。 */
  readonly sienna: Property.ColumnRule | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:silver;`。 */
  readonly silver: Property.ColumnRule | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:skyblue;`。 */
  readonly skyblue: Property.ColumnRule | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:slateblue;`。 */
  readonly slateblue: Property.ColumnRule | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:slategray;`。 */
  readonly slategray: Property.ColumnRule | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:slategrey;`。 */
  readonly slategrey: Property.ColumnRule | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:snow;`。 */
  readonly snow: Property.ColumnRule | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:solid;`。 */
  readonly solid: Property.ColumnRule | CssString = 'solid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:springgreen;`。 */
  readonly springgreen: Property.ColumnRule | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:steelblue;`。 */
  readonly steelblue: Property.ColumnRule | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:tan;`。 */
  readonly tan: Property.ColumnRule | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:teal;`。 */
  readonly teal: Property.ColumnRule | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:thick;`。 */
  readonly thick: Property.ColumnRule | CssString = 'thick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:thin;`。 */
  readonly thin: Property.ColumnRule | CssString = 'thin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:thistle;`。 */
  readonly thistle: Property.ColumnRule | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:tomato;`。 */
  readonly tomato: Property.ColumnRule | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`column-rule:transparent;`。
   */
  readonly transparent: Property.ColumnRule | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:turquoise;`。 */
  readonly turquoise: Property.ColumnRule | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule:unset;`。
   */
  readonly unset: Property.ColumnRule | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:violet;`。 */
  readonly violet: Property.ColumnRule | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:wheat;`。 */
  readonly wheat: Property.ColumnRule | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:white;`。 */
  readonly white: Property.ColumnRule | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:whitesmoke;`。 */
  readonly whitesmoke: Property.ColumnRule | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:yellow;`。 */
  readonly yellow: Property.ColumnRule | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule:yellowgreen;`。 */
  readonly yellowgreen: Property.ColumnRule | CssString = 'yellowgreen';
}

/**
 * 设置多栏之间分隔线的宽度、线型和颜色。（column-rule）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
 */
export class ColumnRuleCss extends LengthCssProperty {
  /** CSS 声明：`column-rule:AccentColor;`。 */
  readonly AccentColor: string = 'column-rule:AccentColor;';
  /** CSS 声明：`column-rule:AccentColorText;`。 */
  readonly AccentColorText: string = 'column-rule:AccentColorText;';
  /** CSS 声明：`column-rule:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'column-rule:ActiveBorder;';
  /** CSS 声明：`column-rule:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'column-rule:ActiveCaption;';
  /** CSS 声明：`column-rule:ActiveText;`。 */
  readonly ActiveText: string = 'column-rule:ActiveText;';
  /** CSS 声明：`column-rule:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'column-rule:AppWorkspace;';
  /** CSS 声明：`column-rule:Background;`。 */
  readonly Background: string = 'column-rule:Background;';
  /** CSS 声明：`column-rule:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'column-rule:ButtonBorder;';
  /** CSS 声明：`column-rule:ButtonFace;`。 */
  readonly ButtonFace: string = 'column-rule:ButtonFace;';
  /** CSS 声明：`column-rule:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'column-rule:ButtonHighlight;';
  /** CSS 声明：`column-rule:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'column-rule:ButtonShadow;';
  /** CSS 声明：`column-rule:ButtonText;`。 */
  readonly ButtonText: string = 'column-rule:ButtonText;';
  /** CSS 声明：`column-rule:Canvas;`。 */
  readonly Canvas: string = 'column-rule:Canvas;';
  /** CSS 声明：`column-rule:CanvasText;`。 */
  readonly CanvasText: string = 'column-rule:CanvasText;';
  /** CSS 声明：`column-rule:CaptionText;`。 */
  readonly CaptionText: string = 'column-rule:CaptionText;';
  /** CSS 声明：`column-rule:Field;`。 */
  readonly Field: string = 'column-rule:Field;';
  /** CSS 声明：`column-rule:FieldText;`。 */
  readonly FieldText: string = 'column-rule:FieldText;';
  /** CSS 声明：`column-rule:GrayText;`。 */
  readonly GrayText: string = 'column-rule:GrayText;';
  /** CSS 声明：`column-rule:Highlight;`。 */
  readonly Highlight: string = 'column-rule:Highlight;';
  /** CSS 声明：`column-rule:HighlightText;`。 */
  readonly HighlightText: string = 'column-rule:HighlightText;';
  /** CSS 声明：`column-rule:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'column-rule:InactiveBorder;';
  /** CSS 声明：`column-rule:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'column-rule:InactiveCaption;';
  /** CSS 声明：`column-rule:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'column-rule:InactiveCaptionText;';
  /** CSS 声明：`column-rule:InfoBackground;`。 */
  readonly InfoBackground: string = 'column-rule:InfoBackground;';
  /** CSS 声明：`column-rule:InfoText;`。 */
  readonly InfoText: string = 'column-rule:InfoText;';
  /** CSS 声明：`column-rule:LinkText;`。 */
  readonly LinkText: string = 'column-rule:LinkText;';
  /** CSS 声明：`column-rule:Mark;`。 */
  readonly Mark: string = 'column-rule:Mark;';
  /** CSS 声明：`column-rule:MarkText;`。 */
  readonly MarkText: string = 'column-rule:MarkText;';
  /** CSS 声明：`column-rule:Menu;`。 */
  readonly Menu: string = 'column-rule:Menu;';
  /** CSS 声明：`column-rule:MenuText;`。 */
  readonly MenuText: string = 'column-rule:MenuText;';
  /** CSS 声明：`column-rule:Scrollbar;`。 */
  readonly Scrollbar: string = 'column-rule:Scrollbar;';
  /** CSS 声明：`column-rule:SelectedItem;`。 */
  readonly SelectedItem: string = 'column-rule:SelectedItem;';
  /** CSS 声明：`column-rule:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'column-rule:SelectedItemText;';
  /** CSS 声明：`column-rule:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'column-rule:ThreeDDarkShadow;';
  /** CSS 声明：`column-rule:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'column-rule:ThreeDFace;';
  /** CSS 声明：`column-rule:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'column-rule:ThreeDHighlight;';
  /** CSS 声明：`column-rule:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'column-rule:ThreeDLightShadow;';
  /** CSS 声明：`column-rule:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'column-rule:ThreeDShadow;';
  /** CSS 声明：`column-rule:VisitedText;`。 */
  readonly VisitedText: string = 'column-rule:VisitedText;';
  /** CSS 声明：`column-rule:Window;`。 */
  readonly Window: string = 'column-rule:Window;';
  /** CSS 声明：`column-rule:WindowFrame;`。 */
  readonly WindowFrame: string = 'column-rule:WindowFrame;';
  /** CSS 声明：`column-rule:WindowText;`。 */
  readonly WindowText: string = 'column-rule:WindowText;';
  /** CSS 声明：`column-rule:aliceblue;`。 */
  readonly aliceblue: string = 'column-rule:aliceblue;';
  /** CSS 声明：`column-rule:antiquewhite;`。 */
  readonly antiquewhite: string = 'column-rule:antiquewhite;';
  /** CSS 声明：`column-rule:aqua;`。 */
  readonly aqua: string = 'column-rule:aqua;';
  /** CSS 声明：`column-rule:aquamarine;`。 */
  readonly aquamarine: string = 'column-rule:aquamarine;';
  /** CSS 声明：`column-rule:azure;`。 */
  readonly azure: string = 'column-rule:azure;';
  /** CSS 声明：`column-rule:beige;`。 */
  readonly beige: string = 'column-rule:beige;';
  /** CSS 声明：`column-rule:bisque;`。 */
  readonly bisque: string = 'column-rule:bisque;';
  /** CSS 声明：`column-rule:black;`。 */
  readonly black: string = 'column-rule:black;';
  /** CSS 声明：`column-rule:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'column-rule:blanchedalmond;';
  /** CSS 声明：`column-rule:blue;`。 */
  readonly blue: string = 'column-rule:blue;';
  /** CSS 声明：`column-rule:blueviolet;`。 */
  readonly blueviolet: string = 'column-rule:blueviolet;';
  /** CSS 声明：`column-rule:brown;`。 */
  readonly brown: string = 'column-rule:brown;';
  /** CSS 声明：`column-rule:burlywood;`。 */
  readonly burlywood: string = 'column-rule:burlywood;';
  /** CSS 声明：`column-rule:cadetblue;`。 */
  readonly cadetblue: string = 'column-rule:cadetblue;';
  /** CSS 声明：`column-rule:chartreuse;`。 */
  readonly chartreuse: string = 'column-rule:chartreuse;';
  /** CSS 声明：`column-rule:chocolate;`。 */
  readonly chocolate: string = 'column-rule:chocolate;';
  /** CSS 声明：`column-rule:coral;`。 */
  readonly coral: string = 'column-rule:coral;';
  /** CSS 声明：`column-rule:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'column-rule:cornflowerblue;';
  /** CSS 声明：`column-rule:cornsilk;`。 */
  readonly cornsilk: string = 'column-rule:cornsilk;';
  /** CSS 声明：`column-rule:crimson;`。 */
  readonly crimson: string = 'column-rule:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`column-rule:currentColor;`。
   */
  readonly currentColor: string = 'column-rule:currentColor;';
  /** CSS 声明：`column-rule:cyan;`。 */
  readonly cyan: string = 'column-rule:cyan;';
  /** CSS 声明：`column-rule:darkblue;`。 */
  readonly darkblue: string = 'column-rule:darkblue;';
  /** CSS 声明：`column-rule:darkcyan;`。 */
  readonly darkcyan: string = 'column-rule:darkcyan;';
  /** CSS 声明：`column-rule:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'column-rule:darkgoldenrod;';
  /** CSS 声明：`column-rule:darkgray;`。 */
  readonly darkgray: string = 'column-rule:darkgray;';
  /** CSS 声明：`column-rule:darkgreen;`。 */
  readonly darkgreen: string = 'column-rule:darkgreen;';
  /** CSS 声明：`column-rule:darkgrey;`。 */
  readonly darkgrey: string = 'column-rule:darkgrey;';
  /** CSS 声明：`column-rule:darkkhaki;`。 */
  readonly darkkhaki: string = 'column-rule:darkkhaki;';
  /** CSS 声明：`column-rule:darkmagenta;`。 */
  readonly darkmagenta: string = 'column-rule:darkmagenta;';
  /** CSS 声明：`column-rule:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'column-rule:darkolivegreen;';
  /** CSS 声明：`column-rule:darkorange;`。 */
  readonly darkorange: string = 'column-rule:darkorange;';
  /** CSS 声明：`column-rule:darkorchid;`。 */
  readonly darkorchid: string = 'column-rule:darkorchid;';
  /** CSS 声明：`column-rule:darkred;`。 */
  readonly darkred: string = 'column-rule:darkred;';
  /** CSS 声明：`column-rule:darksalmon;`。 */
  readonly darksalmon: string = 'column-rule:darksalmon;';
  /** CSS 声明：`column-rule:darkseagreen;`。 */
  readonly darkseagreen: string = 'column-rule:darkseagreen;';
  /** CSS 声明：`column-rule:darkslateblue;`。 */
  readonly darkslateblue: string = 'column-rule:darkslateblue;';
  /** CSS 声明：`column-rule:darkslategray;`。 */
  readonly darkslategray: string = 'column-rule:darkslategray;';
  /** CSS 声明：`column-rule:darkslategrey;`。 */
  readonly darkslategrey: string = 'column-rule:darkslategrey;';
  /** CSS 声明：`column-rule:darkturquoise;`。 */
  readonly darkturquoise: string = 'column-rule:darkturquoise;';
  /** CSS 声明：`column-rule:darkviolet;`。 */
  readonly darkviolet: string = 'column-rule:darkviolet;';
  /** CSS 声明：`column-rule:dashed;`。 */
  readonly dashed: string = 'column-rule:dashed;';
  /** CSS 声明：`column-rule:deeppink;`。 */
  readonly deeppink: string = 'column-rule:deeppink;';
  /** CSS 声明：`column-rule:deepskyblue;`。 */
  readonly deepskyblue: string = 'column-rule:deepskyblue;';
  /** CSS 声明：`column-rule:dimgray;`。 */
  readonly dimgray: string = 'column-rule:dimgray;';
  /** CSS 声明：`column-rule:dimgrey;`。 */
  readonly dimgrey: string = 'column-rule:dimgrey;';
  /** CSS 声明：`column-rule:dodgerblue;`。 */
  readonly dodgerblue: string = 'column-rule:dodgerblue;';
  /** CSS 声明：`column-rule:dotted;`。 */
  readonly dotted: string = 'column-rule:dotted;';
  /** CSS 声明：`column-rule:double;`。 */
  readonly double: string = 'column-rule:double;';
  /** CSS 声明：`column-rule:firebrick;`。 */
  readonly firebrick: string = 'column-rule:firebrick;';
  /** CSS 声明：`column-rule:floralwhite;`。 */
  readonly floralwhite: string = 'column-rule:floralwhite;';
  /** CSS 声明：`column-rule:forestgreen;`。 */
  readonly forestgreen: string = 'column-rule:forestgreen;';
  /** CSS 声明：`column-rule:fuchsia;`。 */
  readonly fuchsia: string = 'column-rule:fuchsia;';
  /** CSS 声明：`column-rule:gainsboro;`。 */
  readonly gainsboro: string = 'column-rule:gainsboro;';
  /** CSS 声明：`column-rule:ghostwhite;`。 */
  readonly ghostwhite: string = 'column-rule:ghostwhite;';
  /** CSS 声明：`column-rule:gold;`。 */
  readonly gold: string = 'column-rule:gold;';
  /** CSS 声明：`column-rule:goldenrod;`。 */
  readonly goldenrod: string = 'column-rule:goldenrod;';
  /** CSS 声明：`column-rule:gray;`。 */
  readonly gray: string = 'column-rule:gray;';
  /** CSS 声明：`column-rule:green;`。 */
  readonly green: string = 'column-rule:green;';
  /** CSS 声明：`column-rule:greenyellow;`。 */
  readonly greenyellow: string = 'column-rule:greenyellow;';
  /** CSS 声明：`column-rule:grey;`。 */
  readonly grey: string = 'column-rule:grey;';
  /** CSS 声明：`column-rule:groove;`。 */
  readonly groove: string = 'column-rule:groove;';
  /** CSS 声明：`column-rule:hidden;`。 */
  readonly hidden: string = 'column-rule:hidden;';
  /** CSS 声明：`column-rule:honeydew;`。 */
  readonly honeydew: string = 'column-rule:honeydew;';
  /** CSS 声明：`column-rule:hotpink;`。 */
  readonly hotpink: string = 'column-rule:hotpink;';
  /** CSS 声明：`column-rule:indianred;`。 */
  readonly indianred: string = 'column-rule:indianred;';
  /** CSS 声明：`column-rule:indigo;`。 */
  readonly indigo: string = 'column-rule:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule:inherit;`。
   */
  readonly inherit: string = 'column-rule:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule:initial;`。
   */
  readonly initial: string = 'column-rule:initial;';
  /** CSS 声明：`column-rule:inset;`。 */
  readonly inset: string = 'column-rule:inset;';
  /** CSS 声明：`column-rule:ivory;`。 */
  readonly ivory: string = 'column-rule:ivory;';
  /** CSS 声明：`column-rule:khaki;`。 */
  readonly khaki: string = 'column-rule:khaki;';
  /** CSS 声明：`column-rule:lavender;`。 */
  readonly lavender: string = 'column-rule:lavender;';
  /** CSS 声明：`column-rule:lavenderblush;`。 */
  readonly lavenderblush: string = 'column-rule:lavenderblush;';
  /** CSS 声明：`column-rule:lawngreen;`。 */
  readonly lawngreen: string = 'column-rule:lawngreen;';
  /** CSS 声明：`column-rule:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'column-rule:lemonchiffon;';
  /** CSS 声明：`column-rule:lightblue;`。 */
  readonly lightblue: string = 'column-rule:lightblue;';
  /** CSS 声明：`column-rule:lightcoral;`。 */
  readonly lightcoral: string = 'column-rule:lightcoral;';
  /** CSS 声明：`column-rule:lightcyan;`。 */
  readonly lightcyan: string = 'column-rule:lightcyan;';
  /** CSS 声明：`column-rule:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'column-rule:lightgoldenrodyellow;';
  /** CSS 声明：`column-rule:lightgray;`。 */
  readonly lightgray: string = 'column-rule:lightgray;';
  /** CSS 声明：`column-rule:lightgreen;`。 */
  readonly lightgreen: string = 'column-rule:lightgreen;';
  /** CSS 声明：`column-rule:lightgrey;`。 */
  readonly lightgrey: string = 'column-rule:lightgrey;';
  /** CSS 声明：`column-rule:lightpink;`。 */
  readonly lightpink: string = 'column-rule:lightpink;';
  /** CSS 声明：`column-rule:lightsalmon;`。 */
  readonly lightsalmon: string = 'column-rule:lightsalmon;';
  /** CSS 声明：`column-rule:lightseagreen;`。 */
  readonly lightseagreen: string = 'column-rule:lightseagreen;';
  /** CSS 声明：`column-rule:lightskyblue;`。 */
  readonly lightskyblue: string = 'column-rule:lightskyblue;';
  /** CSS 声明：`column-rule:lightslategray;`。 */
  readonly lightslategray: string = 'column-rule:lightslategray;';
  /** CSS 声明：`column-rule:lightslategrey;`。 */
  readonly lightslategrey: string = 'column-rule:lightslategrey;';
  /** CSS 声明：`column-rule:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'column-rule:lightsteelblue;';
  /** CSS 声明：`column-rule:lightyellow;`。 */
  readonly lightyellow: string = 'column-rule:lightyellow;';
  /** CSS 声明：`column-rule:lime;`。 */
  readonly lime: string = 'column-rule:lime;';
  /** CSS 声明：`column-rule:limegreen;`。 */
  readonly limegreen: string = 'column-rule:limegreen;';
  /** CSS 声明：`column-rule:linen;`。 */
  readonly linen: string = 'column-rule:linen;';
  /** CSS 声明：`column-rule:magenta;`。 */
  readonly magenta: string = 'column-rule:magenta;';
  /** CSS 声明：`column-rule:maroon;`。 */
  readonly maroon: string = 'column-rule:maroon;';
  /** CSS 声明：`column-rule:medium;`。 */
  readonly medium: string = 'column-rule:medium;';
  /** CSS 声明：`column-rule:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'column-rule:mediumaquamarine;';
  /** CSS 声明：`column-rule:mediumblue;`。 */
  readonly mediumblue: string = 'column-rule:mediumblue;';
  /** CSS 声明：`column-rule:mediumorchid;`。 */
  readonly mediumorchid: string = 'column-rule:mediumorchid;';
  /** CSS 声明：`column-rule:mediumpurple;`。 */
  readonly mediumpurple: string = 'column-rule:mediumpurple;';
  /** CSS 声明：`column-rule:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'column-rule:mediumseagreen;';
  /** CSS 声明：`column-rule:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'column-rule:mediumslateblue;';
  /** CSS 声明：`column-rule:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'column-rule:mediumspringgreen;';
  /** CSS 声明：`column-rule:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'column-rule:mediumturquoise;';
  /** CSS 声明：`column-rule:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'column-rule:mediumvioletred;';
  /** CSS 声明：`column-rule:midnightblue;`。 */
  readonly midnightblue: string = 'column-rule:midnightblue;';
  /** CSS 声明：`column-rule:mintcream;`。 */
  readonly mintcream: string = 'column-rule:mintcream;';
  /** CSS 声明：`column-rule:mistyrose;`。 */
  readonly mistyrose: string = 'column-rule:mistyrose;';
  /** CSS 声明：`column-rule:moccasin;`。 */
  readonly moccasin: string = 'column-rule:moccasin;';
  /** CSS 声明：`column-rule:navajowhite;`。 */
  readonly navajowhite: string = 'column-rule:navajowhite;';
  /** CSS 声明：`column-rule:navy;`。 */
  readonly navy: string = 'column-rule:navy;';
  /** CSS 声明：`column-rule:none;`。 */
  readonly none: string = 'column-rule:none;';
  /** CSS 声明：`column-rule:oldlace;`。 */
  readonly oldlace: string = 'column-rule:oldlace;';
  /** CSS 声明：`column-rule:olive;`。 */
  readonly olive: string = 'column-rule:olive;';
  /** CSS 声明：`column-rule:olivedrab;`。 */
  readonly olivedrab: string = 'column-rule:olivedrab;';
  /** CSS 声明：`column-rule:orange;`。 */
  readonly orange: string = 'column-rule:orange;';
  /** CSS 声明：`column-rule:orangered;`。 */
  readonly orangered: string = 'column-rule:orangered;';
  /** CSS 声明：`column-rule:orchid;`。 */
  readonly orchid: string = 'column-rule:orchid;';
  /** CSS 声明：`column-rule:outset;`。 */
  readonly outset: string = 'column-rule:outset;';
  /** CSS 声明：`column-rule:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'column-rule:palegoldenrod;';
  /** CSS 声明：`column-rule:palegreen;`。 */
  readonly palegreen: string = 'column-rule:palegreen;';
  /** CSS 声明：`column-rule:paleturquoise;`。 */
  readonly paleturquoise: string = 'column-rule:paleturquoise;';
  /** CSS 声明：`column-rule:palevioletred;`。 */
  readonly palevioletred: string = 'column-rule:palevioletred;';
  /** CSS 声明：`column-rule:papayawhip;`。 */
  readonly papayawhip: string = 'column-rule:papayawhip;';
  /** CSS 声明：`column-rule:peachpuff;`。 */
  readonly peachpuff: string = 'column-rule:peachpuff;';
  /** CSS 声明：`column-rule:peru;`。 */
  readonly peru: string = 'column-rule:peru;';
  /** CSS 声明：`column-rule:pink;`。 */
  readonly pink: string = 'column-rule:pink;';
  /** CSS 声明：`column-rule:plum;`。 */
  readonly plum: string = 'column-rule:plum;';
  /** CSS 声明：`column-rule:powderblue;`。 */
  readonly powderblue: string = 'column-rule:powderblue;';
  /** CSS 声明：`column-rule:purple;`。 */
  readonly purple: string = 'column-rule:purple;';
  /** CSS 声明：`column-rule:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'column-rule:rebeccapurple;';
  /** CSS 声明：`column-rule:red;`。 */
  readonly red: string = 'column-rule:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule:revert;`。
   */
  readonly revert: string = 'column-rule:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule:revert-layer;`。
   */
  readonly revertLayer: string = 'column-rule:revert-layer;';
  /** CSS 声明：`column-rule:ridge;`。 */
  readonly ridge: string = 'column-rule:ridge;';
  /** CSS 声明：`column-rule:rosybrown;`。 */
  readonly rosybrown: string = 'column-rule:rosybrown;';
  /** CSS 声明：`column-rule:royalblue;`。 */
  readonly royalblue: string = 'column-rule:royalblue;';
  /** CSS 声明：`column-rule:saddlebrown;`。 */
  readonly saddlebrown: string = 'column-rule:saddlebrown;';
  /** CSS 声明：`column-rule:salmon;`。 */
  readonly salmon: string = 'column-rule:salmon;';
  /** CSS 声明：`column-rule:sandybrown;`。 */
  readonly sandybrown: string = 'column-rule:sandybrown;';
  /** CSS 声明：`column-rule:seagreen;`。 */
  readonly seagreen: string = 'column-rule:seagreen;';
  /** CSS 声明：`column-rule:seashell;`。 */
  readonly seashell: string = 'column-rule:seashell;';
  /** CSS 声明：`column-rule:sienna;`。 */
  readonly sienna: string = 'column-rule:sienna;';
  /** CSS 声明：`column-rule:silver;`。 */
  readonly silver: string = 'column-rule:silver;';
  /** CSS 声明：`column-rule:skyblue;`。 */
  readonly skyblue: string = 'column-rule:skyblue;';
  /** CSS 声明：`column-rule:slateblue;`。 */
  readonly slateblue: string = 'column-rule:slateblue;';
  /** CSS 声明：`column-rule:slategray;`。 */
  readonly slategray: string = 'column-rule:slategray;';
  /** CSS 声明：`column-rule:slategrey;`。 */
  readonly slategrey: string = 'column-rule:slategrey;';
  /** CSS 声明：`column-rule:snow;`。 */
  readonly snow: string = 'column-rule:snow;';
  /** CSS 声明：`column-rule:solid;`。 */
  readonly solid: string = 'column-rule:solid;';
  /** CSS 声明：`column-rule:springgreen;`。 */
  readonly springgreen: string = 'column-rule:springgreen;';
  /** CSS 声明：`column-rule:steelblue;`。 */
  readonly steelblue: string = 'column-rule:steelblue;';
  /** CSS 声明：`column-rule:tan;`。 */
  readonly tan: string = 'column-rule:tan;';
  /** CSS 声明：`column-rule:teal;`。 */
  readonly teal: string = 'column-rule:teal;';
  /** CSS 声明：`column-rule:thick;`。 */
  readonly thick: string = 'column-rule:thick;';
  /** CSS 声明：`column-rule:thin;`。 */
  readonly thin: string = 'column-rule:thin;';
  /** CSS 声明：`column-rule:thistle;`。 */
  readonly thistle: string = 'column-rule:thistle;';
  /** CSS 声明：`column-rule:tomato;`。 */
  readonly tomato: string = 'column-rule:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`column-rule:transparent;`。
   */
  readonly transparent: string = 'column-rule:transparent;';
  /** CSS 声明：`column-rule:turquoise;`。 */
  readonly turquoise: string = 'column-rule:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule:unset;`。
   */
  readonly unset: string = 'column-rule:unset;';
  /** CSS 声明：`column-rule:violet;`。 */
  readonly violet: string = 'column-rule:violet;';
  /** CSS 声明：`column-rule:wheat;`。 */
  readonly wheat: string = 'column-rule:wheat;';
  /** CSS 声明：`column-rule:white;`。 */
  readonly white: string = 'column-rule:white;';
  /** CSS 声明：`column-rule:whitesmoke;`。 */
  readonly whitesmoke: string = 'column-rule:whitesmoke;';
  /** CSS 声明：`column-rule:yellow;`。 */
  readonly yellow: string = 'column-rule:yellow;';
  /** CSS 声明：`column-rule:yellowgreen;`。 */
  readonly yellowgreen: string = 'column-rule:yellowgreen;';
  /**
   * 创建 column-rule 属性作者；普通使用通过 s.columnRule 取得共享实例。
   * @example
   * class CustomColumnRuleCss extends ColumnRuleCss {}
   */
  constructor() {
    super('column-rule');
  }
  /**
   * 原样生成 column-rule 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-rule:value;。
   * @example
   * s.columnRule.raw('inherit') // column-rule:inherit;
   */
  raw(value: Property.ColumnRule | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.columnRule.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.columnRule.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.columnRule.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.columnRule.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.columnRule.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.columnRule.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ColumnRule | CssString,
    ...others: (Property.ColumnRule | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.columnRule.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ColumnRule | CssString,
    ...others: (Property.ColumnRule | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.columnRule.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ColumnRule | CssString,
    preferred: Property.ColumnRule | CssString,
    maximum: Property.ColumnRule | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * column-rule-color 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnRuleColorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:AccentColor;`。 */
  readonly AccentColor: Property.ColumnRuleColor | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:AccentColorText;`。 */
  readonly AccentColorText: Property.ColumnRuleColor | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ActiveBorder;`。 */
  readonly ActiveBorder: Property.ColumnRuleColor | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ActiveCaption;`。 */
  readonly ActiveCaption: Property.ColumnRuleColor | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ActiveText;`。 */
  readonly ActiveText: Property.ColumnRuleColor | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:AppWorkspace;`。 */
  readonly AppWorkspace: Property.ColumnRuleColor | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Background;`。 */
  readonly Background: Property.ColumnRuleColor | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ButtonBorder;`。 */
  readonly ButtonBorder: Property.ColumnRuleColor | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ButtonFace;`。 */
  readonly ButtonFace: Property.ColumnRuleColor | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.ColumnRuleColor | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ButtonShadow;`。 */
  readonly ButtonShadow: Property.ColumnRuleColor | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ButtonText;`。 */
  readonly ButtonText: Property.ColumnRuleColor | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Canvas;`。 */
  readonly Canvas: Property.ColumnRuleColor | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:CanvasText;`。 */
  readonly CanvasText: Property.ColumnRuleColor | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:CaptionText;`。 */
  readonly CaptionText: Property.ColumnRuleColor | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Field;`。 */
  readonly Field: Property.ColumnRuleColor | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:FieldText;`。 */
  readonly FieldText: Property.ColumnRuleColor | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:GrayText;`。 */
  readonly GrayText: Property.ColumnRuleColor | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Highlight;`。 */
  readonly Highlight: Property.ColumnRuleColor | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:HighlightText;`。 */
  readonly HighlightText: Property.ColumnRuleColor | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:InactiveBorder;`。 */
  readonly InactiveBorder: Property.ColumnRuleColor | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:InactiveCaption;`。 */
  readonly InactiveCaption: Property.ColumnRuleColor | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.ColumnRuleColor | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:InfoBackground;`。 */
  readonly InfoBackground: Property.ColumnRuleColor | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:InfoText;`。 */
  readonly InfoText: Property.ColumnRuleColor | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:LinkText;`。 */
  readonly LinkText: Property.ColumnRuleColor | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Mark;`。 */
  readonly Mark: Property.ColumnRuleColor | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:MarkText;`。 */
  readonly MarkText: Property.ColumnRuleColor | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Menu;`。 */
  readonly Menu: Property.ColumnRuleColor | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:MenuText;`。 */
  readonly MenuText: Property.ColumnRuleColor | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Scrollbar;`。 */
  readonly Scrollbar: Property.ColumnRuleColor | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:SelectedItem;`。 */
  readonly SelectedItem: Property.ColumnRuleColor | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:SelectedItemText;`。 */
  readonly SelectedItemText: Property.ColumnRuleColor | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.ColumnRuleColor | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ThreeDFace;`。 */
  readonly ThreeDFace: Property.ColumnRuleColor | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.ColumnRuleColor | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.ColumnRuleColor | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.ColumnRuleColor | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:VisitedText;`。 */
  readonly VisitedText: Property.ColumnRuleColor | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:Window;`。 */
  readonly Window: Property.ColumnRuleColor | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:WindowFrame;`。 */
  readonly WindowFrame: Property.ColumnRuleColor | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:WindowText;`。 */
  readonly WindowText: Property.ColumnRuleColor | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:aliceblue;`。 */
  readonly aliceblue: Property.ColumnRuleColor | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:antiquewhite;`。 */
  readonly antiquewhite: Property.ColumnRuleColor | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:aqua;`。 */
  readonly aqua: Property.ColumnRuleColor | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:aquamarine;`。 */
  readonly aquamarine: Property.ColumnRuleColor | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:azure;`。 */
  readonly azure: Property.ColumnRuleColor | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:beige;`。 */
  readonly beige: Property.ColumnRuleColor | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:bisque;`。 */
  readonly bisque: Property.ColumnRuleColor | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:black;`。 */
  readonly black: Property.ColumnRuleColor | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:blanchedalmond;`。 */
  readonly blanchedalmond: Property.ColumnRuleColor | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:blue;`。 */
  readonly blue: Property.ColumnRuleColor | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:blueviolet;`。 */
  readonly blueviolet: Property.ColumnRuleColor | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:brown;`。 */
  readonly brown: Property.ColumnRuleColor | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:burlywood;`。 */
  readonly burlywood: Property.ColumnRuleColor | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:cadetblue;`。 */
  readonly cadetblue: Property.ColumnRuleColor | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:chartreuse;`。 */
  readonly chartreuse: Property.ColumnRuleColor | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:chocolate;`。 */
  readonly chocolate: Property.ColumnRuleColor | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:coral;`。 */
  readonly coral: Property.ColumnRuleColor | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:cornflowerblue;`。 */
  readonly cornflowerblue: Property.ColumnRuleColor | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:cornsilk;`。 */
  readonly cornsilk: Property.ColumnRuleColor | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:crimson;`。 */
  readonly crimson: Property.ColumnRuleColor | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`column-rule-color:currentColor;`。
   */
  readonly currentColor: Property.ColumnRuleColor | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:cyan;`。 */
  readonly cyan: Property.ColumnRuleColor | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkblue;`。 */
  readonly darkblue: Property.ColumnRuleColor | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkcyan;`。 */
  readonly darkcyan: Property.ColumnRuleColor | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.ColumnRuleColor | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkgray;`。 */
  readonly darkgray: Property.ColumnRuleColor | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkgreen;`。 */
  readonly darkgreen: Property.ColumnRuleColor | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkgrey;`。 */
  readonly darkgrey: Property.ColumnRuleColor | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkkhaki;`。 */
  readonly darkkhaki: Property.ColumnRuleColor | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkmagenta;`。 */
  readonly darkmagenta: Property.ColumnRuleColor | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkolivegreen;`。 */
  readonly darkolivegreen: Property.ColumnRuleColor | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkorange;`。 */
  readonly darkorange: Property.ColumnRuleColor | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkorchid;`。 */
  readonly darkorchid: Property.ColumnRuleColor | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkred;`。 */
  readonly darkred: Property.ColumnRuleColor | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darksalmon;`。 */
  readonly darksalmon: Property.ColumnRuleColor | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkseagreen;`。 */
  readonly darkseagreen: Property.ColumnRuleColor | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkslateblue;`。 */
  readonly darkslateblue: Property.ColumnRuleColor | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkslategray;`。 */
  readonly darkslategray: Property.ColumnRuleColor | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkslategrey;`。 */
  readonly darkslategrey: Property.ColumnRuleColor | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkturquoise;`。 */
  readonly darkturquoise: Property.ColumnRuleColor | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:darkviolet;`。 */
  readonly darkviolet: Property.ColumnRuleColor | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:deeppink;`。 */
  readonly deeppink: Property.ColumnRuleColor | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:deepskyblue;`。 */
  readonly deepskyblue: Property.ColumnRuleColor | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:dimgray;`。 */
  readonly dimgray: Property.ColumnRuleColor | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:dimgrey;`。 */
  readonly dimgrey: Property.ColumnRuleColor | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:dodgerblue;`。 */
  readonly dodgerblue: Property.ColumnRuleColor | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:firebrick;`。 */
  readonly firebrick: Property.ColumnRuleColor | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:floralwhite;`。 */
  readonly floralwhite: Property.ColumnRuleColor | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:forestgreen;`。 */
  readonly forestgreen: Property.ColumnRuleColor | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:fuchsia;`。 */
  readonly fuchsia: Property.ColumnRuleColor | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:gainsboro;`。 */
  readonly gainsboro: Property.ColumnRuleColor | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ghostwhite;`。 */
  readonly ghostwhite: Property.ColumnRuleColor | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:gold;`。 */
  readonly gold: Property.ColumnRuleColor | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:goldenrod;`。 */
  readonly goldenrod: Property.ColumnRuleColor | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:gray;`。 */
  readonly gray: Property.ColumnRuleColor | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:green;`。 */
  readonly green: Property.ColumnRuleColor | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:greenyellow;`。 */
  readonly greenyellow: Property.ColumnRuleColor | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:grey;`。 */
  readonly grey: Property.ColumnRuleColor | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:honeydew;`。 */
  readonly honeydew: Property.ColumnRuleColor | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:hotpink;`。 */
  readonly hotpink: Property.ColumnRuleColor | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:indianred;`。 */
  readonly indianred: Property.ColumnRuleColor | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:indigo;`。 */
  readonly indigo: Property.ColumnRuleColor | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-color:inherit;`。
   */
  readonly inherit: Property.ColumnRuleColor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-color:initial;`。
   */
  readonly initial: Property.ColumnRuleColor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:ivory;`。 */
  readonly ivory: Property.ColumnRuleColor | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:khaki;`。 */
  readonly khaki: Property.ColumnRuleColor | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lavender;`。 */
  readonly lavender: Property.ColumnRuleColor | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lavenderblush;`。 */
  readonly lavenderblush: Property.ColumnRuleColor | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lawngreen;`。 */
  readonly lawngreen: Property.ColumnRuleColor | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lemonchiffon;`。 */
  readonly lemonchiffon: Property.ColumnRuleColor | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightblue;`。 */
  readonly lightblue: Property.ColumnRuleColor | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightcoral;`。 */
  readonly lightcoral: Property.ColumnRuleColor | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightcyan;`。 */
  readonly lightcyan: Property.ColumnRuleColor | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.ColumnRuleColor | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightgray;`。 */
  readonly lightgray: Property.ColumnRuleColor | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightgreen;`。 */
  readonly lightgreen: Property.ColumnRuleColor | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightgrey;`。 */
  readonly lightgrey: Property.ColumnRuleColor | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightpink;`。 */
  readonly lightpink: Property.ColumnRuleColor | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightsalmon;`。 */
  readonly lightsalmon: Property.ColumnRuleColor | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightseagreen;`。 */
  readonly lightseagreen: Property.ColumnRuleColor | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightskyblue;`。 */
  readonly lightskyblue: Property.ColumnRuleColor | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightslategray;`。 */
  readonly lightslategray: Property.ColumnRuleColor | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightslategrey;`。 */
  readonly lightslategrey: Property.ColumnRuleColor | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightsteelblue;`。 */
  readonly lightsteelblue: Property.ColumnRuleColor | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lightyellow;`。 */
  readonly lightyellow: Property.ColumnRuleColor | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:lime;`。 */
  readonly lime: Property.ColumnRuleColor | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:limegreen;`。 */
  readonly limegreen: Property.ColumnRuleColor | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:linen;`。 */
  readonly linen: Property.ColumnRuleColor | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:magenta;`。 */
  readonly magenta: Property.ColumnRuleColor | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:maroon;`。 */
  readonly maroon: Property.ColumnRuleColor | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.ColumnRuleColor | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumblue;`。 */
  readonly mediumblue: Property.ColumnRuleColor | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumorchid;`。 */
  readonly mediumorchid: Property.ColumnRuleColor | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumpurple;`。 */
  readonly mediumpurple: Property.ColumnRuleColor | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumseagreen;`。 */
  readonly mediumseagreen: Property.ColumnRuleColor | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumslateblue;`。 */
  readonly mediumslateblue: Property.ColumnRuleColor | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.ColumnRuleColor | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumturquoise;`。 */
  readonly mediumturquoise: Property.ColumnRuleColor | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mediumvioletred;`。 */
  readonly mediumvioletred: Property.ColumnRuleColor | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:midnightblue;`。 */
  readonly midnightblue: Property.ColumnRuleColor | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mintcream;`。 */
  readonly mintcream: Property.ColumnRuleColor | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:mistyrose;`。 */
  readonly mistyrose: Property.ColumnRuleColor | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:moccasin;`。 */
  readonly moccasin: Property.ColumnRuleColor | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:navajowhite;`。 */
  readonly navajowhite: Property.ColumnRuleColor | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:navy;`。 */
  readonly navy: Property.ColumnRuleColor | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:oldlace;`。 */
  readonly oldlace: Property.ColumnRuleColor | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:olive;`。 */
  readonly olive: Property.ColumnRuleColor | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:olivedrab;`。 */
  readonly olivedrab: Property.ColumnRuleColor | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:orange;`。 */
  readonly orange: Property.ColumnRuleColor | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:orangered;`。 */
  readonly orangered: Property.ColumnRuleColor | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:orchid;`。 */
  readonly orchid: Property.ColumnRuleColor | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:palegoldenrod;`。 */
  readonly palegoldenrod: Property.ColumnRuleColor | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:palegreen;`。 */
  readonly palegreen: Property.ColumnRuleColor | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:paleturquoise;`。 */
  readonly paleturquoise: Property.ColumnRuleColor | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:palevioletred;`。 */
  readonly palevioletred: Property.ColumnRuleColor | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:papayawhip;`。 */
  readonly papayawhip: Property.ColumnRuleColor | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:peachpuff;`。 */
  readonly peachpuff: Property.ColumnRuleColor | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:peru;`。 */
  readonly peru: Property.ColumnRuleColor | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:pink;`。 */
  readonly pink: Property.ColumnRuleColor | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:plum;`。 */
  readonly plum: Property.ColumnRuleColor | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:powderblue;`。 */
  readonly powderblue: Property.ColumnRuleColor | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:purple;`。 */
  readonly purple: Property.ColumnRuleColor | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:rebeccapurple;`。 */
  readonly rebeccapurple: Property.ColumnRuleColor | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:red;`。 */
  readonly red: Property.ColumnRuleColor | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-color:revert;`。
   */
  readonly revert: Property.ColumnRuleColor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-color:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnRuleColor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:rosybrown;`。 */
  readonly rosybrown: Property.ColumnRuleColor | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:royalblue;`。 */
  readonly royalblue: Property.ColumnRuleColor | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:saddlebrown;`。 */
  readonly saddlebrown: Property.ColumnRuleColor | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:salmon;`。 */
  readonly salmon: Property.ColumnRuleColor | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:sandybrown;`。 */
  readonly sandybrown: Property.ColumnRuleColor | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:seagreen;`。 */
  readonly seagreen: Property.ColumnRuleColor | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:seashell;`。 */
  readonly seashell: Property.ColumnRuleColor | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:sienna;`。 */
  readonly sienna: Property.ColumnRuleColor | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:silver;`。 */
  readonly silver: Property.ColumnRuleColor | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:skyblue;`。 */
  readonly skyblue: Property.ColumnRuleColor | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:slateblue;`。 */
  readonly slateblue: Property.ColumnRuleColor | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:slategray;`。 */
  readonly slategray: Property.ColumnRuleColor | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:slategrey;`。 */
  readonly slategrey: Property.ColumnRuleColor | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:snow;`。 */
  readonly snow: Property.ColumnRuleColor | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:springgreen;`。 */
  readonly springgreen: Property.ColumnRuleColor | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:steelblue;`。 */
  readonly steelblue: Property.ColumnRuleColor | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:tan;`。 */
  readonly tan: Property.ColumnRuleColor | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:teal;`。 */
  readonly teal: Property.ColumnRuleColor | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:thistle;`。 */
  readonly thistle: Property.ColumnRuleColor | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:tomato;`。 */
  readonly tomato: Property.ColumnRuleColor | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`column-rule-color:transparent;`。
   */
  readonly transparent: Property.ColumnRuleColor | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:turquoise;`。 */
  readonly turquoise: Property.ColumnRuleColor | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-color:unset;`。
   */
  readonly unset: Property.ColumnRuleColor | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:violet;`。 */
  readonly violet: Property.ColumnRuleColor | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:wheat;`。 */
  readonly wheat: Property.ColumnRuleColor | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:white;`。 */
  readonly white: Property.ColumnRuleColor | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:whitesmoke;`。 */
  readonly whitesmoke: Property.ColumnRuleColor | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:yellow;`。 */
  readonly yellow: Property.ColumnRuleColor | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-color:yellowgreen;`。 */
  readonly yellowgreen: Property.ColumnRuleColor | CssString = 'yellowgreen';
}

/**
 * 设置多栏分隔线的颜色。（column-rule-color）
 *
 * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
 */
export class ColumnRuleColorCss extends CssProperty {
  /** CSS 声明：`column-rule-color:AccentColor;`。 */
  readonly AccentColor: string = 'column-rule-color:AccentColor;';
  /** CSS 声明：`column-rule-color:AccentColorText;`。 */
  readonly AccentColorText: string = 'column-rule-color:AccentColorText;';
  /** CSS 声明：`column-rule-color:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'column-rule-color:ActiveBorder;';
  /** CSS 声明：`column-rule-color:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'column-rule-color:ActiveCaption;';
  /** CSS 声明：`column-rule-color:ActiveText;`。 */
  readonly ActiveText: string = 'column-rule-color:ActiveText;';
  /** CSS 声明：`column-rule-color:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'column-rule-color:AppWorkspace;';
  /** CSS 声明：`column-rule-color:Background;`。 */
  readonly Background: string = 'column-rule-color:Background;';
  /** CSS 声明：`column-rule-color:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'column-rule-color:ButtonBorder;';
  /** CSS 声明：`column-rule-color:ButtonFace;`。 */
  readonly ButtonFace: string = 'column-rule-color:ButtonFace;';
  /** CSS 声明：`column-rule-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'column-rule-color:ButtonHighlight;';
  /** CSS 声明：`column-rule-color:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'column-rule-color:ButtonShadow;';
  /** CSS 声明：`column-rule-color:ButtonText;`。 */
  readonly ButtonText: string = 'column-rule-color:ButtonText;';
  /** CSS 声明：`column-rule-color:Canvas;`。 */
  readonly Canvas: string = 'column-rule-color:Canvas;';
  /** CSS 声明：`column-rule-color:CanvasText;`。 */
  readonly CanvasText: string = 'column-rule-color:CanvasText;';
  /** CSS 声明：`column-rule-color:CaptionText;`。 */
  readonly CaptionText: string = 'column-rule-color:CaptionText;';
  /** CSS 声明：`column-rule-color:Field;`。 */
  readonly Field: string = 'column-rule-color:Field;';
  /** CSS 声明：`column-rule-color:FieldText;`。 */
  readonly FieldText: string = 'column-rule-color:FieldText;';
  /** CSS 声明：`column-rule-color:GrayText;`。 */
  readonly GrayText: string = 'column-rule-color:GrayText;';
  /** CSS 声明：`column-rule-color:Highlight;`。 */
  readonly Highlight: string = 'column-rule-color:Highlight;';
  /** CSS 声明：`column-rule-color:HighlightText;`。 */
  readonly HighlightText: string = 'column-rule-color:HighlightText;';
  /** CSS 声明：`column-rule-color:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'column-rule-color:InactiveBorder;';
  /** CSS 声明：`column-rule-color:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'column-rule-color:InactiveCaption;';
  /** CSS 声明：`column-rule-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'column-rule-color:InactiveCaptionText;';
  /** CSS 声明：`column-rule-color:InfoBackground;`。 */
  readonly InfoBackground: string = 'column-rule-color:InfoBackground;';
  /** CSS 声明：`column-rule-color:InfoText;`。 */
  readonly InfoText: string = 'column-rule-color:InfoText;';
  /** CSS 声明：`column-rule-color:LinkText;`。 */
  readonly LinkText: string = 'column-rule-color:LinkText;';
  /** CSS 声明：`column-rule-color:Mark;`。 */
  readonly Mark: string = 'column-rule-color:Mark;';
  /** CSS 声明：`column-rule-color:MarkText;`。 */
  readonly MarkText: string = 'column-rule-color:MarkText;';
  /** CSS 声明：`column-rule-color:Menu;`。 */
  readonly Menu: string = 'column-rule-color:Menu;';
  /** CSS 声明：`column-rule-color:MenuText;`。 */
  readonly MenuText: string = 'column-rule-color:MenuText;';
  /** CSS 声明：`column-rule-color:Scrollbar;`。 */
  readonly Scrollbar: string = 'column-rule-color:Scrollbar;';
  /** CSS 声明：`column-rule-color:SelectedItem;`。 */
  readonly SelectedItem: string = 'column-rule-color:SelectedItem;';
  /** CSS 声明：`column-rule-color:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'column-rule-color:SelectedItemText;';
  /** CSS 声明：`column-rule-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'column-rule-color:ThreeDDarkShadow;';
  /** CSS 声明：`column-rule-color:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'column-rule-color:ThreeDFace;';
  /** CSS 声明：`column-rule-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'column-rule-color:ThreeDHighlight;';
  /** CSS 声明：`column-rule-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'column-rule-color:ThreeDLightShadow;';
  /** CSS 声明：`column-rule-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'column-rule-color:ThreeDShadow;';
  /** CSS 声明：`column-rule-color:VisitedText;`。 */
  readonly VisitedText: string = 'column-rule-color:VisitedText;';
  /** CSS 声明：`column-rule-color:Window;`。 */
  readonly Window: string = 'column-rule-color:Window;';
  /** CSS 声明：`column-rule-color:WindowFrame;`。 */
  readonly WindowFrame: string = 'column-rule-color:WindowFrame;';
  /** CSS 声明：`column-rule-color:WindowText;`。 */
  readonly WindowText: string = 'column-rule-color:WindowText;';
  /** CSS 声明：`column-rule-color:aliceblue;`。 */
  readonly aliceblue: string = 'column-rule-color:aliceblue;';
  /** CSS 声明：`column-rule-color:antiquewhite;`。 */
  readonly antiquewhite: string = 'column-rule-color:antiquewhite;';
  /** CSS 声明：`column-rule-color:aqua;`。 */
  readonly aqua: string = 'column-rule-color:aqua;';
  /** CSS 声明：`column-rule-color:aquamarine;`。 */
  readonly aquamarine: string = 'column-rule-color:aquamarine;';
  /** CSS 声明：`column-rule-color:azure;`。 */
  readonly azure: string = 'column-rule-color:azure;';
  /** CSS 声明：`column-rule-color:beige;`。 */
  readonly beige: string = 'column-rule-color:beige;';
  /** CSS 声明：`column-rule-color:bisque;`。 */
  readonly bisque: string = 'column-rule-color:bisque;';
  /** CSS 声明：`column-rule-color:black;`。 */
  readonly black: string = 'column-rule-color:black;';
  /** CSS 声明：`column-rule-color:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'column-rule-color:blanchedalmond;';
  /** CSS 声明：`column-rule-color:blue;`。 */
  readonly blue: string = 'column-rule-color:blue;';
  /** CSS 声明：`column-rule-color:blueviolet;`。 */
  readonly blueviolet: string = 'column-rule-color:blueviolet;';
  /** CSS 声明：`column-rule-color:brown;`。 */
  readonly brown: string = 'column-rule-color:brown;';
  /** CSS 声明：`column-rule-color:burlywood;`。 */
  readonly burlywood: string = 'column-rule-color:burlywood;';
  /** CSS 声明：`column-rule-color:cadetblue;`。 */
  readonly cadetblue: string = 'column-rule-color:cadetblue;';
  /** CSS 声明：`column-rule-color:chartreuse;`。 */
  readonly chartreuse: string = 'column-rule-color:chartreuse;';
  /** CSS 声明：`column-rule-color:chocolate;`。 */
  readonly chocolate: string = 'column-rule-color:chocolate;';
  /** CSS 声明：`column-rule-color:coral;`。 */
  readonly coral: string = 'column-rule-color:coral;';
  /** CSS 声明：`column-rule-color:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'column-rule-color:cornflowerblue;';
  /** CSS 声明：`column-rule-color:cornsilk;`。 */
  readonly cornsilk: string = 'column-rule-color:cornsilk;';
  /** CSS 声明：`column-rule-color:crimson;`。 */
  readonly crimson: string = 'column-rule-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`column-rule-color:currentColor;`。
   */
  readonly currentColor: string = 'column-rule-color:currentColor;';
  /** CSS 声明：`column-rule-color:cyan;`。 */
  readonly cyan: string = 'column-rule-color:cyan;';
  /** CSS 声明：`column-rule-color:darkblue;`。 */
  readonly darkblue: string = 'column-rule-color:darkblue;';
  /** CSS 声明：`column-rule-color:darkcyan;`。 */
  readonly darkcyan: string = 'column-rule-color:darkcyan;';
  /** CSS 声明：`column-rule-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'column-rule-color:darkgoldenrod;';
  /** CSS 声明：`column-rule-color:darkgray;`。 */
  readonly darkgray: string = 'column-rule-color:darkgray;';
  /** CSS 声明：`column-rule-color:darkgreen;`。 */
  readonly darkgreen: string = 'column-rule-color:darkgreen;';
  /** CSS 声明：`column-rule-color:darkgrey;`。 */
  readonly darkgrey: string = 'column-rule-color:darkgrey;';
  /** CSS 声明：`column-rule-color:darkkhaki;`。 */
  readonly darkkhaki: string = 'column-rule-color:darkkhaki;';
  /** CSS 声明：`column-rule-color:darkmagenta;`。 */
  readonly darkmagenta: string = 'column-rule-color:darkmagenta;';
  /** CSS 声明：`column-rule-color:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'column-rule-color:darkolivegreen;';
  /** CSS 声明：`column-rule-color:darkorange;`。 */
  readonly darkorange: string = 'column-rule-color:darkorange;';
  /** CSS 声明：`column-rule-color:darkorchid;`。 */
  readonly darkorchid: string = 'column-rule-color:darkorchid;';
  /** CSS 声明：`column-rule-color:darkred;`。 */
  readonly darkred: string = 'column-rule-color:darkred;';
  /** CSS 声明：`column-rule-color:darksalmon;`。 */
  readonly darksalmon: string = 'column-rule-color:darksalmon;';
  /** CSS 声明：`column-rule-color:darkseagreen;`。 */
  readonly darkseagreen: string = 'column-rule-color:darkseagreen;';
  /** CSS 声明：`column-rule-color:darkslateblue;`。 */
  readonly darkslateblue: string = 'column-rule-color:darkslateblue;';
  /** CSS 声明：`column-rule-color:darkslategray;`。 */
  readonly darkslategray: string = 'column-rule-color:darkslategray;';
  /** CSS 声明：`column-rule-color:darkslategrey;`。 */
  readonly darkslategrey: string = 'column-rule-color:darkslategrey;';
  /** CSS 声明：`column-rule-color:darkturquoise;`。 */
  readonly darkturquoise: string = 'column-rule-color:darkturquoise;';
  /** CSS 声明：`column-rule-color:darkviolet;`。 */
  readonly darkviolet: string = 'column-rule-color:darkviolet;';
  /** CSS 声明：`column-rule-color:deeppink;`。 */
  readonly deeppink: string = 'column-rule-color:deeppink;';
  /** CSS 声明：`column-rule-color:deepskyblue;`。 */
  readonly deepskyblue: string = 'column-rule-color:deepskyblue;';
  /** CSS 声明：`column-rule-color:dimgray;`。 */
  readonly dimgray: string = 'column-rule-color:dimgray;';
  /** CSS 声明：`column-rule-color:dimgrey;`。 */
  readonly dimgrey: string = 'column-rule-color:dimgrey;';
  /** CSS 声明：`column-rule-color:dodgerblue;`。 */
  readonly dodgerblue: string = 'column-rule-color:dodgerblue;';
  /** CSS 声明：`column-rule-color:firebrick;`。 */
  readonly firebrick: string = 'column-rule-color:firebrick;';
  /** CSS 声明：`column-rule-color:floralwhite;`。 */
  readonly floralwhite: string = 'column-rule-color:floralwhite;';
  /** CSS 声明：`column-rule-color:forestgreen;`。 */
  readonly forestgreen: string = 'column-rule-color:forestgreen;';
  /** CSS 声明：`column-rule-color:fuchsia;`。 */
  readonly fuchsia: string = 'column-rule-color:fuchsia;';
  /** CSS 声明：`column-rule-color:gainsboro;`。 */
  readonly gainsboro: string = 'column-rule-color:gainsboro;';
  /** CSS 声明：`column-rule-color:ghostwhite;`。 */
  readonly ghostwhite: string = 'column-rule-color:ghostwhite;';
  /** CSS 声明：`column-rule-color:gold;`。 */
  readonly gold: string = 'column-rule-color:gold;';
  /** CSS 声明：`column-rule-color:goldenrod;`。 */
  readonly goldenrod: string = 'column-rule-color:goldenrod;';
  /** CSS 声明：`column-rule-color:gray;`。 */
  readonly gray: string = 'column-rule-color:gray;';
  /** CSS 声明：`column-rule-color:green;`。 */
  readonly green: string = 'column-rule-color:green;';
  /** CSS 声明：`column-rule-color:greenyellow;`。 */
  readonly greenyellow: string = 'column-rule-color:greenyellow;';
  /** CSS 声明：`column-rule-color:grey;`。 */
  readonly grey: string = 'column-rule-color:grey;';
  /** CSS 声明：`column-rule-color:honeydew;`。 */
  readonly honeydew: string = 'column-rule-color:honeydew;';
  /** CSS 声明：`column-rule-color:hotpink;`。 */
  readonly hotpink: string = 'column-rule-color:hotpink;';
  /** CSS 声明：`column-rule-color:indianred;`。 */
  readonly indianred: string = 'column-rule-color:indianred;';
  /** CSS 声明：`column-rule-color:indigo;`。 */
  readonly indigo: string = 'column-rule-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-color:inherit;`。
   */
  readonly inherit: string = 'column-rule-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-color:initial;`。
   */
  readonly initial: string = 'column-rule-color:initial;';
  /** CSS 声明：`column-rule-color:ivory;`。 */
  readonly ivory: string = 'column-rule-color:ivory;';
  /** CSS 声明：`column-rule-color:khaki;`。 */
  readonly khaki: string = 'column-rule-color:khaki;';
  /** CSS 声明：`column-rule-color:lavender;`。 */
  readonly lavender: string = 'column-rule-color:lavender;';
  /** CSS 声明：`column-rule-color:lavenderblush;`。 */
  readonly lavenderblush: string = 'column-rule-color:lavenderblush;';
  /** CSS 声明：`column-rule-color:lawngreen;`。 */
  readonly lawngreen: string = 'column-rule-color:lawngreen;';
  /** CSS 声明：`column-rule-color:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'column-rule-color:lemonchiffon;';
  /** CSS 声明：`column-rule-color:lightblue;`。 */
  readonly lightblue: string = 'column-rule-color:lightblue;';
  /** CSS 声明：`column-rule-color:lightcoral;`。 */
  readonly lightcoral: string = 'column-rule-color:lightcoral;';
  /** CSS 声明：`column-rule-color:lightcyan;`。 */
  readonly lightcyan: string = 'column-rule-color:lightcyan;';
  /** CSS 声明：`column-rule-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'column-rule-color:lightgoldenrodyellow;';
  /** CSS 声明：`column-rule-color:lightgray;`。 */
  readonly lightgray: string = 'column-rule-color:lightgray;';
  /** CSS 声明：`column-rule-color:lightgreen;`。 */
  readonly lightgreen: string = 'column-rule-color:lightgreen;';
  /** CSS 声明：`column-rule-color:lightgrey;`。 */
  readonly lightgrey: string = 'column-rule-color:lightgrey;';
  /** CSS 声明：`column-rule-color:lightpink;`。 */
  readonly lightpink: string = 'column-rule-color:lightpink;';
  /** CSS 声明：`column-rule-color:lightsalmon;`。 */
  readonly lightsalmon: string = 'column-rule-color:lightsalmon;';
  /** CSS 声明：`column-rule-color:lightseagreen;`。 */
  readonly lightseagreen: string = 'column-rule-color:lightseagreen;';
  /** CSS 声明：`column-rule-color:lightskyblue;`。 */
  readonly lightskyblue: string = 'column-rule-color:lightskyblue;';
  /** CSS 声明：`column-rule-color:lightslategray;`。 */
  readonly lightslategray: string = 'column-rule-color:lightslategray;';
  /** CSS 声明：`column-rule-color:lightslategrey;`。 */
  readonly lightslategrey: string = 'column-rule-color:lightslategrey;';
  /** CSS 声明：`column-rule-color:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'column-rule-color:lightsteelblue;';
  /** CSS 声明：`column-rule-color:lightyellow;`。 */
  readonly lightyellow: string = 'column-rule-color:lightyellow;';
  /** CSS 声明：`column-rule-color:lime;`。 */
  readonly lime: string = 'column-rule-color:lime;';
  /** CSS 声明：`column-rule-color:limegreen;`。 */
  readonly limegreen: string = 'column-rule-color:limegreen;';
  /** CSS 声明：`column-rule-color:linen;`。 */
  readonly linen: string = 'column-rule-color:linen;';
  /** CSS 声明：`column-rule-color:magenta;`。 */
  readonly magenta: string = 'column-rule-color:magenta;';
  /** CSS 声明：`column-rule-color:maroon;`。 */
  readonly maroon: string = 'column-rule-color:maroon;';
  /** CSS 声明：`column-rule-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'column-rule-color:mediumaquamarine;';
  /** CSS 声明：`column-rule-color:mediumblue;`。 */
  readonly mediumblue: string = 'column-rule-color:mediumblue;';
  /** CSS 声明：`column-rule-color:mediumorchid;`。 */
  readonly mediumorchid: string = 'column-rule-color:mediumorchid;';
  /** CSS 声明：`column-rule-color:mediumpurple;`。 */
  readonly mediumpurple: string = 'column-rule-color:mediumpurple;';
  /** CSS 声明：`column-rule-color:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'column-rule-color:mediumseagreen;';
  /** CSS 声明：`column-rule-color:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'column-rule-color:mediumslateblue;';
  /** CSS 声明：`column-rule-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'column-rule-color:mediumspringgreen;';
  /** CSS 声明：`column-rule-color:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'column-rule-color:mediumturquoise;';
  /** CSS 声明：`column-rule-color:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'column-rule-color:mediumvioletred;';
  /** CSS 声明：`column-rule-color:midnightblue;`。 */
  readonly midnightblue: string = 'column-rule-color:midnightblue;';
  /** CSS 声明：`column-rule-color:mintcream;`。 */
  readonly mintcream: string = 'column-rule-color:mintcream;';
  /** CSS 声明：`column-rule-color:mistyrose;`。 */
  readonly mistyrose: string = 'column-rule-color:mistyrose;';
  /** CSS 声明：`column-rule-color:moccasin;`。 */
  readonly moccasin: string = 'column-rule-color:moccasin;';
  /** CSS 声明：`column-rule-color:navajowhite;`。 */
  readonly navajowhite: string = 'column-rule-color:navajowhite;';
  /** CSS 声明：`column-rule-color:navy;`。 */
  readonly navy: string = 'column-rule-color:navy;';
  /** CSS 声明：`column-rule-color:oldlace;`。 */
  readonly oldlace: string = 'column-rule-color:oldlace;';
  /** CSS 声明：`column-rule-color:olive;`。 */
  readonly olive: string = 'column-rule-color:olive;';
  /** CSS 声明：`column-rule-color:olivedrab;`。 */
  readonly olivedrab: string = 'column-rule-color:olivedrab;';
  /** CSS 声明：`column-rule-color:orange;`。 */
  readonly orange: string = 'column-rule-color:orange;';
  /** CSS 声明：`column-rule-color:orangered;`。 */
  readonly orangered: string = 'column-rule-color:orangered;';
  /** CSS 声明：`column-rule-color:orchid;`。 */
  readonly orchid: string = 'column-rule-color:orchid;';
  /** CSS 声明：`column-rule-color:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'column-rule-color:palegoldenrod;';
  /** CSS 声明：`column-rule-color:palegreen;`。 */
  readonly palegreen: string = 'column-rule-color:palegreen;';
  /** CSS 声明：`column-rule-color:paleturquoise;`。 */
  readonly paleturquoise: string = 'column-rule-color:paleturquoise;';
  /** CSS 声明：`column-rule-color:palevioletred;`。 */
  readonly palevioletred: string = 'column-rule-color:palevioletred;';
  /** CSS 声明：`column-rule-color:papayawhip;`。 */
  readonly papayawhip: string = 'column-rule-color:papayawhip;';
  /** CSS 声明：`column-rule-color:peachpuff;`。 */
  readonly peachpuff: string = 'column-rule-color:peachpuff;';
  /** CSS 声明：`column-rule-color:peru;`。 */
  readonly peru: string = 'column-rule-color:peru;';
  /** CSS 声明：`column-rule-color:pink;`。 */
  readonly pink: string = 'column-rule-color:pink;';
  /** CSS 声明：`column-rule-color:plum;`。 */
  readonly plum: string = 'column-rule-color:plum;';
  /** CSS 声明：`column-rule-color:powderblue;`。 */
  readonly powderblue: string = 'column-rule-color:powderblue;';
  /** CSS 声明：`column-rule-color:purple;`。 */
  readonly purple: string = 'column-rule-color:purple;';
  /** CSS 声明：`column-rule-color:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'column-rule-color:rebeccapurple;';
  /** CSS 声明：`column-rule-color:red;`。 */
  readonly red: string = 'column-rule-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-color:revert;`。
   */
  readonly revert: string = 'column-rule-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-color:revert-layer;`。
   */
  readonly revertLayer: string = 'column-rule-color:revert-layer;';
  /** CSS 声明：`column-rule-color:rosybrown;`。 */
  readonly rosybrown: string = 'column-rule-color:rosybrown;';
  /** CSS 声明：`column-rule-color:royalblue;`。 */
  readonly royalblue: string = 'column-rule-color:royalblue;';
  /** CSS 声明：`column-rule-color:saddlebrown;`。 */
  readonly saddlebrown: string = 'column-rule-color:saddlebrown;';
  /** CSS 声明：`column-rule-color:salmon;`。 */
  readonly salmon: string = 'column-rule-color:salmon;';
  /** CSS 声明：`column-rule-color:sandybrown;`。 */
  readonly sandybrown: string = 'column-rule-color:sandybrown;';
  /** CSS 声明：`column-rule-color:seagreen;`。 */
  readonly seagreen: string = 'column-rule-color:seagreen;';
  /** CSS 声明：`column-rule-color:seashell;`。 */
  readonly seashell: string = 'column-rule-color:seashell;';
  /** CSS 声明：`column-rule-color:sienna;`。 */
  readonly sienna: string = 'column-rule-color:sienna;';
  /** CSS 声明：`column-rule-color:silver;`。 */
  readonly silver: string = 'column-rule-color:silver;';
  /** CSS 声明：`column-rule-color:skyblue;`。 */
  readonly skyblue: string = 'column-rule-color:skyblue;';
  /** CSS 声明：`column-rule-color:slateblue;`。 */
  readonly slateblue: string = 'column-rule-color:slateblue;';
  /** CSS 声明：`column-rule-color:slategray;`。 */
  readonly slategray: string = 'column-rule-color:slategray;';
  /** CSS 声明：`column-rule-color:slategrey;`。 */
  readonly slategrey: string = 'column-rule-color:slategrey;';
  /** CSS 声明：`column-rule-color:snow;`。 */
  readonly snow: string = 'column-rule-color:snow;';
  /** CSS 声明：`column-rule-color:springgreen;`。 */
  readonly springgreen: string = 'column-rule-color:springgreen;';
  /** CSS 声明：`column-rule-color:steelblue;`。 */
  readonly steelblue: string = 'column-rule-color:steelblue;';
  /** CSS 声明：`column-rule-color:tan;`。 */
  readonly tan: string = 'column-rule-color:tan;';
  /** CSS 声明：`column-rule-color:teal;`。 */
  readonly teal: string = 'column-rule-color:teal;';
  /** CSS 声明：`column-rule-color:thistle;`。 */
  readonly thistle: string = 'column-rule-color:thistle;';
  /** CSS 声明：`column-rule-color:tomato;`。 */
  readonly tomato: string = 'column-rule-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`column-rule-color:transparent;`。
   */
  readonly transparent: string = 'column-rule-color:transparent;';
  /** CSS 声明：`column-rule-color:turquoise;`。 */
  readonly turquoise: string = 'column-rule-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-color:unset;`。
   */
  readonly unset: string = 'column-rule-color:unset;';
  /** CSS 声明：`column-rule-color:violet;`。 */
  readonly violet: string = 'column-rule-color:violet;';
  /** CSS 声明：`column-rule-color:wheat;`。 */
  readonly wheat: string = 'column-rule-color:wheat;';
  /** CSS 声明：`column-rule-color:white;`。 */
  readonly white: string = 'column-rule-color:white;';
  /** CSS 声明：`column-rule-color:whitesmoke;`。 */
  readonly whitesmoke: string = 'column-rule-color:whitesmoke;';
  /** CSS 声明：`column-rule-color:yellow;`。 */
  readonly yellow: string = 'column-rule-color:yellow;';
  /** CSS 声明：`column-rule-color:yellowgreen;`。 */
  readonly yellowgreen: string = 'column-rule-color:yellowgreen;';
  /**
   * 创建 column-rule-color 属性作者；普通使用通过 s.columnRuleColor 取得共享实例。
   * @example
   * class CustomColumnRuleColorCss extends ColumnRuleColorCss {}
   */
  constructor() {
    super('column-rule-color');
  }
  /**
   * 原样生成 column-rule-color 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-rule-color:value;。
   * @example
   * s.columnRuleColor.raw('inherit') // column-rule-color:inherit;
   */
  raw(value: Property.ColumnRuleColor | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.columnRuleColor.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.columnRuleColor.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.columnRuleColor.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.columnRuleColor.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/**
 * column-rule-style 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnRuleStyleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:dashed;`。 */
  readonly dashed: Property.ColumnRuleStyle | CssString = 'dashed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:dotted;`。 */
  readonly dotted: Property.ColumnRuleStyle | CssString = 'dotted';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:double;`。 */
  readonly double: Property.ColumnRuleStyle | CssString = 'double';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:groove;`。 */
  readonly groove: Property.ColumnRuleStyle | CssString = 'groove';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:hidden;`。 */
  readonly hidden: Property.ColumnRuleStyle | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-style:inherit;`。
   */
  readonly inherit: Property.ColumnRuleStyle | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-style:initial;`。
   */
  readonly initial: Property.ColumnRuleStyle | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:inset;`。 */
  readonly inset: Property.ColumnRuleStyle | CssString = 'inset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:none;`。 */
  readonly none: Property.ColumnRuleStyle | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:outset;`。 */
  readonly outset: Property.ColumnRuleStyle | CssString = 'outset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-style:revert;`。
   */
  readonly revert: Property.ColumnRuleStyle | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-style:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnRuleStyle | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:ridge;`。 */
  readonly ridge: Property.ColumnRuleStyle | CssString = 'ridge';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-style:solid;`。 */
  readonly solid: Property.ColumnRuleStyle | CssString = 'solid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-style:unset;`。
   */
  readonly unset: Property.ColumnRuleStyle | CssString = 'unset';
}

/**
 * 设置多栏分隔线的线型。（column-rule-style）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
 */
export class ColumnRuleStyleCss extends CssProperty {
  /** CSS 声明：`column-rule-style:dashed;`。 */
  readonly dashed: string = 'column-rule-style:dashed;';
  /** CSS 声明：`column-rule-style:dotted;`。 */
  readonly dotted: string = 'column-rule-style:dotted;';
  /** CSS 声明：`column-rule-style:double;`。 */
  readonly double: string = 'column-rule-style:double;';
  /** CSS 声明：`column-rule-style:groove;`。 */
  readonly groove: string = 'column-rule-style:groove;';
  /** CSS 声明：`column-rule-style:hidden;`。 */
  readonly hidden: string = 'column-rule-style:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-style:inherit;`。
   */
  readonly inherit: string = 'column-rule-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-style:initial;`。
   */
  readonly initial: string = 'column-rule-style:initial;';
  /** CSS 声明：`column-rule-style:inset;`。 */
  readonly inset: string = 'column-rule-style:inset;';
  /** CSS 声明：`column-rule-style:none;`。 */
  readonly none: string = 'column-rule-style:none;';
  /** CSS 声明：`column-rule-style:outset;`。 */
  readonly outset: string = 'column-rule-style:outset;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-style:revert;`。
   */
  readonly revert: string = 'column-rule-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-style:revert-layer;`。
   */
  readonly revertLayer: string = 'column-rule-style:revert-layer;';
  /** CSS 声明：`column-rule-style:ridge;`。 */
  readonly ridge: string = 'column-rule-style:ridge;';
  /** CSS 声明：`column-rule-style:solid;`。 */
  readonly solid: string = 'column-rule-style:solid;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-style:unset;`。
   */
  readonly unset: string = 'column-rule-style:unset;';
  /**
   * 创建 column-rule-style 属性作者；普通使用通过 s.columnRuleStyle 取得共享实例。
   * @example
   * class CustomColumnRuleStyleCss extends ColumnRuleStyleCss {}
   */
  constructor() {
    super('column-rule-style');
  }
  /**
   * 原样生成 column-rule-style 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-rule-style:value;。
   * @example
   * s.columnRuleStyle.raw('inherit') // column-rule-style:inherit;
   */
  raw(value: Property.ColumnRuleStyle | CssString): string {
    return this.declaration(value);
  }
}

/**
 * column-rule-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnRuleWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-width:inherit;`。
   */
  readonly inherit: Property.ColumnRuleWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-width:initial;`。
   */
  readonly initial: Property.ColumnRuleWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-width:medium;`。 */
  readonly medium: Property.ColumnRuleWidth | CssString = 'medium';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-width:revert;`。
   */
  readonly revert: Property.ColumnRuleWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-width:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnRuleWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-width:thick;`。 */
  readonly thick: Property.ColumnRuleWidth | CssString = 'thick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-rule-width:thin;`。 */
  readonly thin: Property.ColumnRuleWidth | CssString = 'thin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-width:unset;`。
   */
  readonly unset: Property.ColumnRuleWidth | CssString = 'unset';
}

/**
 * 设置多栏分隔线的宽度。（column-rule-width）
 *
 * CSS 初始值：`medium`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
 */
export class ColumnRuleWidthCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-width:inherit;`。
   */
  readonly inherit: string = 'column-rule-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-width:initial;`。
   */
  readonly initial: string = 'column-rule-width:initial;';
  /** CSS 声明：`column-rule-width:medium;`。 */
  readonly medium: string = 'column-rule-width:medium;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-width:revert;`。
   */
  readonly revert: string = 'column-rule-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-width:revert-layer;`。
   */
  readonly revertLayer: string = 'column-rule-width:revert-layer;';
  /** CSS 声明：`column-rule-width:thick;`。 */
  readonly thick: string = 'column-rule-width:thick;';
  /** CSS 声明：`column-rule-width:thin;`。 */
  readonly thin: string = 'column-rule-width:thin;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-width:unset;`。
   */
  readonly unset: string = 'column-rule-width:unset;';
  /**
   * 创建 column-rule-width 属性作者；普通使用通过 s.columnRuleWidth 取得共享实例。
   * @example
   * class CustomColumnRuleWidthCss extends ColumnRuleWidthCss {}
   */
  constructor() {
    super('column-rule-width');
  }
  /**
   * 原样生成 column-rule-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-rule-width:value;。
   * @example
   * s.columnRuleWidth.raw('inherit') // column-rule-width:inherit;
   */
  raw(value: Property.ColumnRuleWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.columnRuleWidth.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.columnRuleWidth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ColumnRuleWidth | CssString,
    ...others: (Property.ColumnRuleWidth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.columnRuleWidth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ColumnRuleWidth | CssString,
    ...others: (Property.ColumnRuleWidth | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.columnRuleWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ColumnRuleWidth | CssString,
    preferred: Property.ColumnRuleWidth | CssString,
    maximum: Property.ColumnRuleWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * column-span 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnSpanKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-span:all;`。 */
  readonly all: Property.ColumnSpan | CssString = 'all';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-span:inherit;`。
   */
  readonly inherit: Property.ColumnSpan | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-span:initial;`。
   */
  readonly initial: Property.ColumnSpan | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-span:none;`。 */
  readonly none: Property.ColumnSpan | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-span:revert;`。
   */
  readonly revert: Property.ColumnSpan | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-span:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnSpan | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-span:unset;`。
   */
  readonly unset: Property.ColumnSpan | CssString = 'unset';
}

/**
 * 设置多栏布局中的元素是否跨越所有栏。（column-span）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
 */
export class ColumnSpanCss extends CssProperty {
  /** CSS 声明：`column-span:all;`。 */
  readonly all: string = 'column-span:all;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-span:inherit;`。
   */
  readonly inherit: string = 'column-span:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-span:initial;`。
   */
  readonly initial: string = 'column-span:initial;';
  /** CSS 声明：`column-span:none;`。 */
  readonly none: string = 'column-span:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-span:revert;`。
   */
  readonly revert: string = 'column-span:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-span:revert-layer;`。
   */
  readonly revertLayer: string = 'column-span:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-span:unset;`。
   */
  readonly unset: string = 'column-span:unset;';
  /**
   * 创建 column-span 属性作者；普通使用通过 s.columnSpan 取得共享实例。
   * @example
   * class CustomColumnSpanCss extends ColumnSpanCss {}
   */
  constructor() {
    super('column-span');
  }
  /**
   * 原样生成 column-span 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-span:value;。
   * @example
   * s.columnSpan.raw('inherit') // column-span:inherit;
   */
  raw(value: Property.ColumnSpan | CssString): string {
    return this.declaration(value);
  }
}

/**
 * column-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`column-width:auto;`。 */
  readonly auto: Property.ColumnWidth | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-width:inherit;`。
   */
  readonly inherit: Property.ColumnWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-width:initial;`。
   */
  readonly initial: Property.ColumnWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-width:revert;`。
   */
  readonly revert: Property.ColumnWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-width:revert-layer;`。
   */
  readonly revertLayer: Property.ColumnWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-width:unset;`。
   */
  readonly unset: Property.ColumnWidth | CssString = 'unset';
}

/**
 * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。（column-width）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
 */
export class ColumnWidthCss extends LengthCssProperty {
  /** CSS 声明：`column-width:auto;`。 */
  readonly auto: string = 'column-width:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-width:inherit;`。
   */
  readonly inherit: string = 'column-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-width:initial;`。
   */
  readonly initial: string = 'column-width:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-width:revert;`。
   */
  readonly revert: string = 'column-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-width:revert-layer;`。
   */
  readonly revertLayer: string = 'column-width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-width:unset;`。
   */
  readonly unset: string = 'column-width:unset;';
  /**
   * 创建 column-width 属性作者；普通使用通过 s.columnWidth 取得共享实例。
   * @example
   * class CustomColumnWidthCss extends ColumnWidthCss {}
   */
  constructor() {
    super('column-width');
  }
  /**
   * 原样生成 column-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 column-width:value;。
   * @example
   * s.columnWidth.raw('inherit') // column-width:inherit;
   */
  raw(value: Property.ColumnWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.columnWidth.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.columnWidth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ColumnWidth | CssString,
    ...others: (Property.ColumnWidth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.columnWidth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ColumnWidth | CssString,
    ...others: (Property.ColumnWidth | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.columnWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ColumnWidth | CssString,
    preferred: Property.ColumnWidth | CssString,
    maximum: Property.ColumnWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * columns 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ColumnsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`columns:auto;`。 */
  readonly auto: Property.Columns | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`columns:inherit;`。
   */
  readonly inherit: Property.Columns | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`columns:initial;`。
   */
  readonly initial: Property.Columns | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`columns:revert;`。
   */
  readonly revert: Property.Columns | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`columns:revert-layer;`。
   */
  readonly revertLayer: Property.Columns | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`columns:unset;`。
   */
  readonly unset: Property.Columns | CssString = 'unset';
}

/**
 * 同时设置多栏布局的首选栏宽和目标栏数。（columns）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
 */
export class ColumnsCss extends LengthCssProperty {
  /** CSS 声明：`columns:auto;`。 */
  readonly auto: string = 'columns:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`columns:inherit;`。
   */
  readonly inherit: string = 'columns:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`columns:initial;`。
   */
  readonly initial: string = 'columns:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`columns:revert;`。
   */
  readonly revert: string = 'columns:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`columns:revert-layer;`。
   */
  readonly revertLayer: string = 'columns:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`columns:unset;`。
   */
  readonly unset: string = 'columns:unset;';
  /**
   * 创建 columns 属性作者；普通使用通过 s.columns 取得共享实例。
   * @example
   * class CustomColumnsCss extends ColumnsCss {}
   */
  constructor() {
    super('columns');
  }
  /**
   * 原样生成 columns 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 columns:value;。
   * @example
   * s.columns.raw('inherit') // columns:inherit;
   */
  raw(value: Property.Columns | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.columns.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.columns.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Columns | CssString, ...others: (Property.Columns | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.columns.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Columns | CssString, ...others: (Property.Columns | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.columns.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Columns | CssString,
    preferred: Property.Columns | CssString,
    maximum: Property.Columns | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * contain 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 组合 layout、style 和 paint 隔离，不包含 size 隔离。
   *
   * CSS 声明：`contain:content;`。
   */
  readonly content: Property.Contain | CssString = 'content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain:inherit;`。
   */
  readonly inherit: Property.Contain | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain:initial;`。
   */
  readonly initial: Property.Contain | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain:inline-size;`。 */
  readonly inlineSize: Property.Contain | CssString = 'inline-size';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain:layout;`。 */
  readonly layout: Property.Contain | CssString = 'layout';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain:none;`。 */
  readonly none: Property.Contain | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 将后代绘制限制在隔离边界内。
   *
   * CSS 声明：`contain:paint;`。
   */
  readonly paint: Property.Contain | CssString = 'paint';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain:revert;`。
   */
  readonly revert: Property.Contain | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain:revert-layer;`。
   */
  readonly revertLayer: Property.Contain | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 计算盒子尺寸时不依赖后代内容，通常需要显式或替代内部尺寸。
   *
   * CSS 声明：`contain:size;`。
   */
  readonly size: Property.Contain | CssString = 'size';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 组合 size、layout、style 和 paint 隔离；尺寸隔离可能影响自动尺寸。
   *
   * CSS 声明：`contain:strict;`。
   */
  readonly strict: Property.Contain | CssString = 'strict';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 隔离计数器等特定样式副作用，不会阻止普通 CSS 继承或选择器匹配。
   *
   * CSS 声明：`contain:style;`。
   */
  readonly style: Property.Contain | CssString = 'style';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain:unset;`。
   */
  readonly unset: Property.Contain | CssString = 'unset';
}

/**
 * 声明尺寸、布局、绘制或样式隔离，限制子树对外部的影响。（contain）
 *
 * 不同隔离类型会改变布局和绘制语义，不能仅当作无副作用的性能开关。
 *
 * 常用值：
 * - `content`：组合 layout、style 和 paint 隔离，不包含 size 隔离。
 * - `strict`：组合 size、layout、style 和 paint 隔离；尺寸隔离可能影响自动尺寸。
 * - `size`：计算盒子尺寸时不依赖后代内容，通常需要显式或替代内部尺寸。
 * - `paint`：将后代绘制限制在隔离边界内。
 * - `style`：隔离计数器等特定样式副作用，不会阻止普通 CSS 继承或选择器匹配。
 *
 * 适用场景：边界明确且尺寸、溢出行为经过验证的独立区域。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @example
 * s.contain.content
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
 */
export class ContainCss extends CssProperty {
  /**
   * 组合 layout、style 和 paint 隔离，不包含 size 隔离。
   *
   * CSS 声明：`contain:content;`。
   */
  readonly content: string = 'contain:content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain:inherit;`。
   */
  readonly inherit: string = 'contain:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain:initial;`。
   */
  readonly initial: string = 'contain:initial;';
  /** CSS 声明：`contain:inline-size;`。 */
  readonly inlineSize: string = 'contain:inline-size;';
  /** CSS 声明：`contain:layout;`。 */
  readonly layout: string = 'contain:layout;';
  /** CSS 声明：`contain:none;`。 */
  readonly none: string = 'contain:none;';
  /**
   * 将后代绘制限制在隔离边界内。
   *
   * CSS 声明：`contain:paint;`。
   */
  readonly paint: string = 'contain:paint;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain:revert;`。
   */
  readonly revert: string = 'contain:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain:revert-layer;`。
   */
  readonly revertLayer: string = 'contain:revert-layer;';
  /**
   * 计算盒子尺寸时不依赖后代内容，通常需要显式或替代内部尺寸。
   *
   * CSS 声明：`contain:size;`。
   */
  readonly size: string = 'contain:size;';
  /**
   * 组合 size、layout、style 和 paint 隔离；尺寸隔离可能影响自动尺寸。
   *
   * CSS 声明：`contain:strict;`。
   */
  readonly strict: string = 'contain:strict;';
  /**
   * 隔离计数器等特定样式副作用，不会阻止普通 CSS 继承或选择器匹配。
   *
   * CSS 声明：`contain:style;`。
   */
  readonly style: string = 'contain:style;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain:unset;`。
   */
  readonly unset: string = 'contain:unset;';
  /**
   * 创建 contain 属性作者；普通使用通过 s.contain 取得共享实例。
   * @example
   * class CustomContainCss extends ContainCss {}
   */
  constructor() {
    super('contain');
  }
  /**
   * 原样生成 contain 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 contain:value;。
   * @example
   * s.contain.raw('inherit') // contain:inherit;
   */
  raw(value: Property.Contain | CssString): string {
    return this.declaration(value);
  }
}

/**
 * contain-intrinsic-block-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainIntrinsicBlockSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-block-size:inherit;`。
   */
  readonly inherit: Property.ContainIntrinsicBlockSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-block-size:initial;`。
   */
  readonly initial: Property.ContainIntrinsicBlockSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain-intrinsic-block-size:none;`。 */
  readonly none: Property.ContainIntrinsicBlockSize | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-block-size:revert;`。
   */
  readonly revert: Property.ContainIntrinsicBlockSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-block-size:revert-layer;`。
   */
  readonly revertLayer: Property.ContainIntrinsicBlockSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-block-size:unset;`。
   */
  readonly unset: Property.ContainIntrinsicBlockSize | CssString = 'unset';
}

/**
 * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。（contain-intrinsic-block-size）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
 */
export class ContainIntrinsicBlockSizeCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-block-size:inherit;`。
   */
  readonly inherit: string = 'contain-intrinsic-block-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-block-size:initial;`。
   */
  readonly initial: string = 'contain-intrinsic-block-size:initial;';
  /** CSS 声明：`contain-intrinsic-block-size:none;`。 */
  readonly none: string = 'contain-intrinsic-block-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-block-size:revert;`。
   */
  readonly revert: string = 'contain-intrinsic-block-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-block-size:revert-layer;`。
   */
  readonly revertLayer: string = 'contain-intrinsic-block-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-block-size:unset;`。
   */
  readonly unset: string = 'contain-intrinsic-block-size:unset;';
  /**
   * 创建 contain-intrinsic-block-size 属性作者；普通使用通过 s.containIntrinsicBlockSize 取得共享实例。
   * @example
   * class CustomContainIntrinsicBlockSizeCss extends ContainIntrinsicBlockSizeCss {}
   */
  constructor() {
    super('contain-intrinsic-block-size');
  }
  /**
   * 原样生成 contain-intrinsic-block-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 contain-intrinsic-block-size:value;。
   * @example
   * s.containIntrinsicBlockSize.raw('inherit') // contain-intrinsic-block-size:inherit;
   */
  raw(value: Property.ContainIntrinsicBlockSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.containIntrinsicBlockSize.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.containIntrinsicBlockSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ContainIntrinsicBlockSize | CssString,
    ...others: (Property.ContainIntrinsicBlockSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.containIntrinsicBlockSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ContainIntrinsicBlockSize | CssString,
    ...others: (Property.ContainIntrinsicBlockSize | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.containIntrinsicBlockSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ContainIntrinsicBlockSize | CssString,
    preferred: Property.ContainIntrinsicBlockSize | CssString,
    maximum: Property.ContainIntrinsicBlockSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * contain-intrinsic-height 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainIntrinsicHeightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-height:inherit;`。
   */
  readonly inherit: Property.ContainIntrinsicHeight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-height:initial;`。
   */
  readonly initial: Property.ContainIntrinsicHeight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain-intrinsic-height:none;`。 */
  readonly none: Property.ContainIntrinsicHeight | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-height:revert;`。
   */
  readonly revert: Property.ContainIntrinsicHeight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-height:revert-layer;`。
   */
  readonly revertLayer: Property.ContainIntrinsicHeight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-height:unset;`。
   */
  readonly unset: Property.ContainIntrinsicHeight | CssString = 'unset';
}

/**
 * 设置高度隔离或跳过内容渲染时使用的替代内部高度。（contain-intrinsic-height）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
 */
export class ContainIntrinsicHeightCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-height:inherit;`。
   */
  readonly inherit: string = 'contain-intrinsic-height:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-height:initial;`。
   */
  readonly initial: string = 'contain-intrinsic-height:initial;';
  /** CSS 声明：`contain-intrinsic-height:none;`。 */
  readonly none: string = 'contain-intrinsic-height:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-height:revert;`。
   */
  readonly revert: string = 'contain-intrinsic-height:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-height:revert-layer;`。
   */
  readonly revertLayer: string = 'contain-intrinsic-height:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-height:unset;`。
   */
  readonly unset: string = 'contain-intrinsic-height:unset;';
  /**
   * 创建 contain-intrinsic-height 属性作者；普通使用通过 s.containIntrinsicHeight 取得共享实例。
   * @example
   * class CustomContainIntrinsicHeightCss extends ContainIntrinsicHeightCss {}
   */
  constructor() {
    super('contain-intrinsic-height');
  }
  /**
   * 原样生成 contain-intrinsic-height 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 contain-intrinsic-height:value;。
   * @example
   * s.containIntrinsicHeight.raw('inherit') // contain-intrinsic-height:inherit;
   */
  raw(value: Property.ContainIntrinsicHeight | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.containIntrinsicHeight.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.containIntrinsicHeight.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ContainIntrinsicHeight | CssString,
    ...others: (Property.ContainIntrinsicHeight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.containIntrinsicHeight.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ContainIntrinsicHeight | CssString,
    ...others: (Property.ContainIntrinsicHeight | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.containIntrinsicHeight.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ContainIntrinsicHeight | CssString,
    preferred: Property.ContainIntrinsicHeight | CssString,
    maximum: Property.ContainIntrinsicHeight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * contain-intrinsic-inline-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainIntrinsicInlineSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-inline-size:inherit;`。
   */
  readonly inherit: Property.ContainIntrinsicInlineSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-inline-size:initial;`。
   */
  readonly initial: Property.ContainIntrinsicInlineSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain-intrinsic-inline-size:none;`。 */
  readonly none: Property.ContainIntrinsicInlineSize | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-inline-size:revert;`。
   */
  readonly revert: Property.ContainIntrinsicInlineSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-inline-size:revert-layer;`。
   */
  readonly revertLayer: Property.ContainIntrinsicInlineSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-inline-size:unset;`。
   */
  readonly unset: Property.ContainIntrinsicInlineSize | CssString = 'unset';
}

/**
 * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。（contain-intrinsic-inline-size）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
 */
export class ContainIntrinsicInlineSizeCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-inline-size:inherit;`。
   */
  readonly inherit: string = 'contain-intrinsic-inline-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-inline-size:initial;`。
   */
  readonly initial: string = 'contain-intrinsic-inline-size:initial;';
  /** CSS 声明：`contain-intrinsic-inline-size:none;`。 */
  readonly none: string = 'contain-intrinsic-inline-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-inline-size:revert;`。
   */
  readonly revert: string = 'contain-intrinsic-inline-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-inline-size:revert-layer;`。
   */
  readonly revertLayer: string = 'contain-intrinsic-inline-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-inline-size:unset;`。
   */
  readonly unset: string = 'contain-intrinsic-inline-size:unset;';
  /**
   * 创建 contain-intrinsic-inline-size 属性作者；普通使用通过 s.containIntrinsicInlineSize 取得共享实例。
   * @example
   * class CustomContainIntrinsicInlineSizeCss extends ContainIntrinsicInlineSizeCss {}
   */
  constructor() {
    super('contain-intrinsic-inline-size');
  }
  /**
   * 原样生成 contain-intrinsic-inline-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 contain-intrinsic-inline-size:value;。
   * @example
   * s.containIntrinsicInlineSize.raw('inherit') // contain-intrinsic-inline-size:inherit;
   */
  raw(value: Property.ContainIntrinsicInlineSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.containIntrinsicInlineSize.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.containIntrinsicInlineSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ContainIntrinsicInlineSize | CssString,
    ...others: (Property.ContainIntrinsicInlineSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.containIntrinsicInlineSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ContainIntrinsicInlineSize | CssString,
    ...others: (Property.ContainIntrinsicInlineSize | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.containIntrinsicInlineSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ContainIntrinsicInlineSize | CssString,
    preferred: Property.ContainIntrinsicInlineSize | CssString,
    maximum: Property.ContainIntrinsicInlineSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * contain-intrinsic-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainIntrinsicSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-size:inherit;`。
   */
  readonly inherit: Property.ContainIntrinsicSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-size:initial;`。
   */
  readonly initial: Property.ContainIntrinsicSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain-intrinsic-size:none;`。 */
  readonly none: Property.ContainIntrinsicSize | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-size:revert;`。
   */
  readonly revert: Property.ContainIntrinsicSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-size:revert-layer;`。
   */
  readonly revertLayer: Property.ContainIntrinsicSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-size:unset;`。
   */
  readonly unset: Property.ContainIntrinsicSize | CssString = 'unset';
}

/**
 * 集中设置尺寸隔离时使用的替代内部宽高。（contain-intrinsic-size）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
 */
export class ContainIntrinsicSizeCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-size:inherit;`。
   */
  readonly inherit: string = 'contain-intrinsic-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-size:initial;`。
   */
  readonly initial: string = 'contain-intrinsic-size:initial;';
  /** CSS 声明：`contain-intrinsic-size:none;`。 */
  readonly none: string = 'contain-intrinsic-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-size:revert;`。
   */
  readonly revert: string = 'contain-intrinsic-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-size:revert-layer;`。
   */
  readonly revertLayer: string = 'contain-intrinsic-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-size:unset;`。
   */
  readonly unset: string = 'contain-intrinsic-size:unset;';
  /**
   * 创建 contain-intrinsic-size 属性作者；普通使用通过 s.containIntrinsicSize 取得共享实例。
   * @example
   * class CustomContainIntrinsicSizeCss extends ContainIntrinsicSizeCss {}
   */
  constructor() {
    super('contain-intrinsic-size');
  }
  /**
   * 原样生成 contain-intrinsic-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 contain-intrinsic-size:value;。
   * @example
   * s.containIntrinsicSize.raw('inherit') // contain-intrinsic-size:inherit;
   */
  raw(value: Property.ContainIntrinsicSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.px(1)
   */
  px(value1: number): string;
  /**
   * 使用 px 单位生成完整属性声明。CSS 像素，不等同于设备物理像素。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 px。
   * @param value2 替代内部高度的数值，自动附加 px。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.px(1, 2)
   */
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}px`).join(' '));
  }
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cm(1)
   */
  cm(value1: number): string;
  /**
   * 使用 cm 单位生成完整属性声明。厘米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cm。
   * @param value2 替代内部高度的数值，自动附加 cm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cm(1, 2)
   */
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cm`).join(' '));
  }
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.mm(1)
   */
  mm(value1: number): string;
  /**
   * 使用 mm 单位生成完整属性声明。毫米；CSS 绝对单位按固定比例换算。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 mm。
   * @param value2 替代内部高度的数值，自动附加 mm。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.mm(1, 2)
   */
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}mm`).join(' '));
  }
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.q(1)
   */
  q(value1: number): string;
  /**
   * 使用 q 单位生成完整属性声明。四分之一毫米。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 q。
   * @param value2 替代内部高度的数值，自动附加 q。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.q(1, 2)
   */
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}q`).join(' '));
  }
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.in(1)
   */
  in(value1: number): string;
  /**
   * 使用 in 单位生成完整属性声明。英寸，1in 等于 96 CSS px。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 in。
   * @param value2 替代内部高度的数值，自动附加 in。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.in(1, 2)
   */
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}in`).join(' '));
  }
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.pt(1)
   */
  pt(value1: number): string;
  /**
   * 使用 pt 单位生成完整属性声明。点，1pt 等于 1/72in。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 pt。
   * @param value2 替代内部高度的数值，自动附加 pt。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.pt(1, 2)
   */
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pt`).join(' '));
  }
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.pc(1)
   */
  pc(value1: number): string;
  /**
   * 使用 pc 单位生成完整属性声明。派卡，1pc 等于 12pt。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 pc。
   * @param value2 替代内部高度的数值，自动附加 pc。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.pc(1, 2)
   */
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}pc`).join(' '));
  }
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.em(1)
   */
  em(value1: number): string;
  /**
   * 使用 em 单位生成完整属性声明。通常相对于当前元素字号；用于 font-size 时相对于继承字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 em。
   * @param value2 替代内部高度的数值，自动附加 em。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.em(1, 2)
   */
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}em`).join(' '));
  }
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rem(1)
   */
  rem(value1: number): string;
  /**
   * 使用 rem 单位生成完整属性声明。相对于根元素字号；用于根元素 font-size 时依据初始字号。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 rem。
   * @param value2 替代内部高度的数值，自动附加 rem。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rem(1, 2)
   */
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rem`).join(' '));
  }
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ex(1)
   */
  ex(value1: number): string;
  /**
   * 使用 ex 单位生成完整属性声明。相对于当前字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 ex。
   * @param value2 替代内部高度的数值，自动附加 ex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ex(1, 2)
   */
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ex`).join(' '));
  }
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rex(1)
   */
  rex(value1: number): string;
  /**
   * 使用 rex 单位生成完整属性声明。相对于根元素字体的小写 x 高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 rex。
   * @param value2 替代内部高度的数值，自动附加 rex。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rex(1, 2)
   */
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rex`).join(' '));
  }
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ch(1)
   */
  ch(value1: number): string;
  /**
   * 使用 ch 单位生成完整属性声明。相对于当前字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 ch。
   * @param value2 替代内部高度的数值，自动附加 ch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ch(1, 2)
   */
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ch`).join(' '));
  }
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rch(1)
   */
  rch(value1: number): string;
  /**
   * 使用 rch 单位生成完整属性声明。相对于根元素字体数字 0 的字形前进宽度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 rch。
   * @param value2 替代内部高度的数值，自动附加 rch。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rch(1, 2)
   */
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rch`).join(' '));
  }
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cap(1)
   */
  cap(value1: number): string;
  /**
   * 使用 cap 单位生成完整属性声明。相对于当前字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cap。
   * @param value2 替代内部高度的数值，自动附加 cap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cap(1, 2)
   */
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cap`).join(' '));
  }
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rcap(1)
   */
  rcap(value1: number): string;
  /**
   * 使用 rcap 单位生成完整属性声明。相对于根元素字体的大写字母高度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 rcap。
   * @param value2 替代内部高度的数值，自动附加 rcap。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rcap(1, 2)
   */
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rcap`).join(' '));
  }
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ic(1)
   */
  ic(value1: number): string;
  /**
   * 使用 ic 单位生成完整属性声明。相对于当前字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 ic。
   * @param value2 替代内部高度的数值，自动附加 ic。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ic(1, 2)
   */
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ic`).join(' '));
  }
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ric(1)
   */
  ric(value1: number): string;
  /**
   * 使用 ric 单位生成完整属性声明。相对于根元素字体水字形的前进尺度。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 ric。
   * @param value2 替代内部高度的数值，自动附加 ric。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.ric(1, 2)
   */
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}ric`).join(' '));
  }
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lh(1)
   */
  lh(value1: number): string;
  /**
   * 使用 lh 单位生成完整属性声明。相对于当前元素的行高；用于行高自身等场景按 CSS 规则解析。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 lh。
   * @param value2 替代内部高度的数值，自动附加 lh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lh(1, 2)
   */
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lh`).join(' '));
  }
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rlh(1)
   */
  rlh(value1: number): string;
  /**
   * 使用 rlh 单位生成完整属性声明。相对于根元素的行高。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 rlh。
   * @param value2 替代内部高度的数值，自动附加 rlh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.rlh(1, 2)
   */
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}rlh`).join(' '));
  }
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vw(1)
   */
  vw(value1: number): string;
  /**
   * 使用 vw 单位生成完整属性声明。大视口（默认视口单位）宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 vw。
   * @param value2 替代内部高度的数值，自动附加 vw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vw(1, 2)
   */
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vw`).join(' '));
  }
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vh(1)
   */
  vh(value1: number): string;
  /**
   * 使用 vh 单位生成完整属性声明。大视口（默认视口单位）高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 vh。
   * @param value2 替代内部高度的数值，自动附加 vh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vh(1, 2)
   */
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vh`).join(' '));
  }
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vi(1)
   */
  vi(value1: number): string;
  /**
   * 使用 vi 单位生成完整属性声明。大视口（默认视口单位）行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 vi。
   * @param value2 替代内部高度的数值，自动附加 vi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vi(1, 2)
   */
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vi`).join(' '));
  }
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vb(1)
   */
  vb(value1: number): string;
  /**
   * 使用 vb 单位生成完整属性声明。大视口（默认视口单位）块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 vb。
   * @param value2 替代内部高度的数值，自动附加 vb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vb(1, 2)
   */
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vb`).join(' '));
  }
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vmin(1)
   */
  vmin(value1: number): string;
  /**
   * 使用 vmin 单位生成完整属性声明。大视口（默认视口单位）宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 vmin。
   * @param value2 替代内部高度的数值，自动附加 vmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vmin(1, 2)
   */
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmin`).join(' '));
  }
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vmax(1)
   */
  vmax(value1: number): string;
  /**
   * 使用 vmax 单位生成完整属性声明。大视口（默认视口单位）宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 vmax。
   * @param value2 替代内部高度的数值，自动附加 vmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.vmax(1, 2)
   */
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}vmax`).join(' '));
  }
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svw(1)
   */
  svw(value1: number): string;
  /**
   * 使用 svw 单位生成完整属性声明。小视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 svw。
   * @param value2 替代内部高度的数值，自动附加 svw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svw(1, 2)
   */
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svw`).join(' '));
  }
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svh(1)
   */
  svh(value1: number): string;
  /**
   * 使用 svh 单位生成完整属性声明。小视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 svh。
   * @param value2 替代内部高度的数值，自动附加 svh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svh(1, 2)
   */
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svh`).join(' '));
  }
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svi(1)
   */
  svi(value1: number): string;
  /**
   * 使用 svi 单位生成完整属性声明。小视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 svi。
   * @param value2 替代内部高度的数值，自动附加 svi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svi(1, 2)
   */
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svi`).join(' '));
  }
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svb(1)
   */
  svb(value1: number): string;
  /**
   * 使用 svb 单位生成完整属性声明。小视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 svb。
   * @param value2 替代内部高度的数值，自动附加 svb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svb(1, 2)
   */
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svb`).join(' '));
  }
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svmin(1)
   */
  svmin(value1: number): string;
  /**
   * 使用 svmin 单位生成完整属性声明。小视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 svmin。
   * @param value2 替代内部高度的数值，自动附加 svmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svmin(1, 2)
   */
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmin`).join(' '));
  }
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svmax(1)
   */
  svmax(value1: number): string;
  /**
   * 使用 svmax 单位生成完整属性声明。小视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 svmax。
   * @param value2 替代内部高度的数值，自动附加 svmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.svmax(1, 2)
   */
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}svmax`).join(' '));
  }
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvw(1)
   */
  lvw(value1: number): string;
  /**
   * 使用 lvw 单位生成完整属性声明。大视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 lvw。
   * @param value2 替代内部高度的数值，自动附加 lvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvw(1, 2)
   */
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvw`).join(' '));
  }
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvh(1)
   */
  lvh(value1: number): string;
  /**
   * 使用 lvh 单位生成完整属性声明。大视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 lvh。
   * @param value2 替代内部高度的数值，自动附加 lvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvh(1, 2)
   */
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvh`).join(' '));
  }
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvi(1)
   */
  lvi(value1: number): string;
  /**
   * 使用 lvi 单位生成完整属性声明。大视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 lvi。
   * @param value2 替代内部高度的数值，自动附加 lvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvi(1, 2)
   */
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvi`).join(' '));
  }
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvb(1)
   */
  lvb(value1: number): string;
  /**
   * 使用 lvb 单位生成完整属性声明。大视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 lvb。
   * @param value2 替代内部高度的数值，自动附加 lvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvb(1, 2)
   */
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvb`).join(' '));
  }
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvmin(1)
   */
  lvmin(value1: number): string;
  /**
   * 使用 lvmin 单位生成完整属性声明。大视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 lvmin。
   * @param value2 替代内部高度的数值，自动附加 lvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvmin(1, 2)
   */
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmin`).join(' '));
  }
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvmax(1)
   */
  lvmax(value1: number): string;
  /**
   * 使用 lvmax 单位生成完整属性声明。大视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 lvmax。
   * @param value2 替代内部高度的数值，自动附加 lvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.lvmax(1, 2)
   */
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}lvmax`).join(' '));
  }
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvw(1)
   */
  dvw(value1: number): string;
  /**
   * 使用 dvw 单位生成完整属性声明。动态视口宽度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 dvw。
   * @param value2 替代内部高度的数值，自动附加 dvw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvw(1, 2)
   */
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvw`).join(' '));
  }
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvh(1)
   */
  dvh(value1: number): string;
  /**
   * 使用 dvh 单位生成完整属性声明。动态视口高度的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 dvh。
   * @param value2 替代内部高度的数值，自动附加 dvh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvh(1, 2)
   */
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvh`).join(' '));
  }
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvi(1)
   */
  dvi(value1: number): string;
  /**
   * 使用 dvi 单位生成完整属性声明。动态视口行内轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 dvi。
   * @param value2 替代内部高度的数值，自动附加 dvi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvi(1, 2)
   */
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvi`).join(' '));
  }
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvb(1)
   */
  dvb(value1: number): string;
  /**
   * 使用 dvb 单位生成完整属性声明。动态视口块轴尺寸的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 dvb。
   * @param value2 替代内部高度的数值，自动附加 dvb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvb(1, 2)
   */
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvb`).join(' '));
  }
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvmin(1)
   */
  dvmin(value1: number): string;
  /**
   * 使用 dvmin 单位生成完整属性声明。动态视口宽高中的较小值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 dvmin。
   * @param value2 替代内部高度的数值，自动附加 dvmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvmin(1, 2)
   */
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmin`).join(' '));
  }
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvmax(1)
   */
  dvmax(value1: number): string;
  /**
   * 使用 dvmax 单位生成完整属性声明。动态视口宽高中的较大值的 1%。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 dvmax。
   * @param value2 替代内部高度的数值，自动附加 dvmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.dvmax(1, 2)
   */
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}dvmax`).join(' '));
  }
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqw(1)
   */
  cqw(value1: number): string;
  /**
   * 使用 cqw 单位生成完整属性声明。符合条件的查询容器宽度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cqw。
   * @param value2 替代内部高度的数值，自动附加 cqw。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqw(1, 2)
   */
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqw`).join(' '));
  }
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqh(1)
   */
  cqh(value1: number): string;
  /**
   * 使用 cqh 单位生成完整属性声明。符合条件的查询容器高度的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cqh。
   * @param value2 替代内部高度的数值，自动附加 cqh。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqh(1, 2)
   */
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqh`).join(' '));
  }
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqi(1)
   */
  cqi(value1: number): string;
  /**
   * 使用 cqi 单位生成完整属性声明。符合条件的查询容器行内轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cqi。
   * @param value2 替代内部高度的数值，自动附加 cqi。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqi(1, 2)
   */
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqi`).join(' '));
  }
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqb(1)
   */
  cqb(value1: number): string;
  /**
   * 使用 cqb 单位生成完整属性声明。符合条件的查询容器块轴尺寸的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cqb。
   * @param value2 替代内部高度的数值，自动附加 cqb。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqb(1, 2)
   */
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqb`).join(' '));
  }
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqmin(1)
   */
  cqmin(value1: number): string;
  /**
   * 使用 cqmin 单位生成完整属性声明。符合条件的查询容器宽高中的较小值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cqmin。
   * @param value2 替代内部高度的数值，自动附加 cqmin。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqmin(1, 2)
   */
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmin`).join(' '));
  }
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度与替代内部高度的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqmax(1)
   */
  cqmax(value1: number): string;
  /**
   * 使用 cqmax 单位生成完整属性声明。符合条件的查询容器宽高中的较大值的 1%；无合适容器时按小视口规则回退。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value1 替代内部宽度的数值，自动附加 cqmax。
   * @param value2 替代内部高度的数值，自动附加 cqmax。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.containIntrinsicSize.cqmax(1, 2)
   */
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return this.declaration(values.map((value) => `${value}cqmax`).join(' '));
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.containIntrinsicSize.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.containIntrinsicSize.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ContainIntrinsicSize | CssString,
    ...others: (Property.ContainIntrinsicSize | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.containIntrinsicSize.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ContainIntrinsicSize | CssString,
    ...others: (Property.ContainIntrinsicSize | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.containIntrinsicSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ContainIntrinsicSize | CssString,
    preferred: Property.ContainIntrinsicSize | CssString,
    maximum: Property.ContainIntrinsicSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * contain-intrinsic-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainIntrinsicWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-width:inherit;`。
   */
  readonly inherit: Property.ContainIntrinsicWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-width:initial;`。
   */
  readonly initial: Property.ContainIntrinsicWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`contain-intrinsic-width:none;`。 */
  readonly none: Property.ContainIntrinsicWidth | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-width:revert;`。
   */
  readonly revert: Property.ContainIntrinsicWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-width:revert-layer;`。
   */
  readonly revertLayer: Property.ContainIntrinsicWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-width:unset;`。
   */
  readonly unset: Property.ContainIntrinsicWidth | CssString = 'unset';
}

/**
 * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。（contain-intrinsic-width）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
 */
export class ContainIntrinsicWidthCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-width:inherit;`。
   */
  readonly inherit: string = 'contain-intrinsic-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-width:initial;`。
   */
  readonly initial: string = 'contain-intrinsic-width:initial;';
  /** CSS 声明：`contain-intrinsic-width:none;`。 */
  readonly none: string = 'contain-intrinsic-width:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-width:revert;`。
   */
  readonly revert: string = 'contain-intrinsic-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-width:revert-layer;`。
   */
  readonly revertLayer: string = 'contain-intrinsic-width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-width:unset;`。
   */
  readonly unset: string = 'contain-intrinsic-width:unset;';
  /**
   * 创建 contain-intrinsic-width 属性作者；普通使用通过 s.containIntrinsicWidth 取得共享实例。
   * @example
   * class CustomContainIntrinsicWidthCss extends ContainIntrinsicWidthCss {}
   */
  constructor() {
    super('contain-intrinsic-width');
  }
  /**
   * 原样生成 contain-intrinsic-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 contain-intrinsic-width:value;。
   * @example
   * s.containIntrinsicWidth.raw('inherit') // contain-intrinsic-width:inherit;
   */
  raw(value: Property.ContainIntrinsicWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.containIntrinsicWidth.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.containIntrinsicWidth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.ContainIntrinsicWidth | CssString,
    ...others: (Property.ContainIntrinsicWidth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.containIntrinsicWidth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.ContainIntrinsicWidth | CssString,
    ...others: (Property.ContainIntrinsicWidth | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.containIntrinsicWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.ContainIntrinsicWidth | CssString,
    preferred: Property.ContainIntrinsicWidth | CssString,
    maximum: Property.ContainIntrinsicWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * container 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainerKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container:inherit;`。
   */
  readonly inherit: Property.Container | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container:initial;`。
   */
  readonly initial: Property.Container | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`container:none;`。 */
  readonly none: Property.Container | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container:revert;`。
   */
  readonly revert: Property.Container | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container:revert-layer;`。
   */
  readonly revertLayer: Property.Container | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container:unset;`。
   */
  readonly unset: Property.Container | CssString = 'unset';
}

/**
 * 同时声明查询容器的名称和类型。（container）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
 */
export class ContainerCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container:inherit;`。
   */
  readonly inherit: string = 'container:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container:initial;`。
   */
  readonly initial: string = 'container:initial;';
  /** CSS 声明：`container:none;`。 */
  readonly none: string = 'container:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container:revert;`。
   */
  readonly revert: string = 'container:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container:revert-layer;`。
   */
  readonly revertLayer: string = 'container:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container:unset;`。
   */
  readonly unset: string = 'container:unset;';
  /**
   * 创建 container 属性作者；普通使用通过 s.container 取得共享实例。
   * @example
   * class CustomContainerCss extends ContainerCss {}
   */
  constructor() {
    super('container');
  }
  /**
   * 原样生成 container 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 container:value;。
   * @example
   * s.container.raw('inherit') // container:inherit;
   */
  raw(value: Property.Container | CssString): string {
    return this.declaration(value);
  }
}

/**
 * container-name 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainerNameKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container-name:inherit;`。
   */
  readonly inherit: Property.ContainerName | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container-name:initial;`。
   */
  readonly initial: Property.ContainerName | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`container-name:none;`。 */
  readonly none: Property.ContainerName | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container-name:revert;`。
   */
  readonly revert: Property.ContainerName | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container-name:revert-layer;`。
   */
  readonly revertLayer: Property.ContainerName | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container-name:unset;`。
   */
  readonly unset: Property.ContainerName | CssString = 'unset';
}

/**
 * 为查询容器命名，供 @container 条件规则选择。（container-name）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
 */
export class ContainerNameCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container-name:inherit;`。
   */
  readonly inherit: string = 'container-name:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container-name:initial;`。
   */
  readonly initial: string = 'container-name:initial;';
  /** CSS 声明：`container-name:none;`。 */
  readonly none: string = 'container-name:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container-name:revert;`。
   */
  readonly revert: string = 'container-name:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container-name:revert-layer;`。
   */
  readonly revertLayer: string = 'container-name:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container-name:unset;`。
   */
  readonly unset: string = 'container-name:unset;';
  /**
   * 创建 container-name 属性作者；普通使用通过 s.containerName 取得共享实例。
   * @example
   * class CustomContainerNameCss extends ContainerNameCss {}
   */
  constructor() {
    super('container-name');
  }
  /**
   * 原样生成 container-name 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 container-name:value;。
   * @example
   * s.containerName.raw('inherit') // container-name:inherit;
   */
  raw(value: Property.ContainerName | CssString): string {
    return this.declaration(value);
  }
}

/**
 * container-type 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContainerTypeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container-type:inherit;`。
   */
  readonly inherit: Property.ContainerType | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container-type:initial;`。
   */
  readonly initial: Property.ContainerType | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立行内轴尺寸查询容器，不同时隔离块轴尺寸。
   *
   * CSS 声明：`container-type:inline-size;`。
   */
  readonly inlineSize: Property.ContainerType | CssString = 'inline-size';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 不建立尺寸查询容器；仍可用于支持的样式查询。
   *
   * CSS 声明：`container-type:normal;`。
   */
  readonly normal: Property.ContainerType | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container-type:revert;`。
   */
  readonly revert: Property.ContainerType | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container-type:revert-layer;`。
   */
  readonly revertLayer: Property.ContainerType | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`container-type:scroll-state;`。 */
  readonly scrollState: Property.ContainerType | CssString = 'scroll-state';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立两个轴的尺寸查询容器，内容不再直接决定其隔离尺寸。
   *
   * CSS 声明：`container-type:size;`。
   */
  readonly size: Property.ContainerType | CssString = 'size';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container-type:unset;`。
   */
  readonly unset: Property.ContainerType | CssString = 'unset';
}

/**
 * 建立指定类型的查询容器，并施加所需的隔离行为。（container-type）
 *
 * 建立尺寸查询容器会同时引入必要的隔离语义；容器本身的样式通常由祖先查询容器决定。
 *
 * 常用值：
 * - `normal`：不建立尺寸查询容器；仍可用于支持的样式查询。
 * - `inline-size`：建立行内轴尺寸查询容器，不同时隔离块轴尺寸。
 * - `size`：建立两个轴的尺寸查询容器，内容不再直接决定其隔离尺寸。
 *
 * 适用场景：让组件按所在容器尺寸响应，而不是只按视口响应。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @example
 * s.containerType.inlineSize
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
 */
export class ContainerTypeCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container-type:inherit;`。
   */
  readonly inherit: string = 'container-type:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container-type:initial;`。
   */
  readonly initial: string = 'container-type:initial;';
  /**
   * 建立行内轴尺寸查询容器，不同时隔离块轴尺寸。
   *
   * CSS 声明：`container-type:inline-size;`。
   */
  readonly inlineSize: string = 'container-type:inline-size;';
  /**
   * 不建立尺寸查询容器；仍可用于支持的样式查询。
   *
   * CSS 声明：`container-type:normal;`。
   */
  readonly normal: string = 'container-type:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container-type:revert;`。
   */
  readonly revert: string = 'container-type:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container-type:revert-layer;`。
   */
  readonly revertLayer: string = 'container-type:revert-layer;';
  /** CSS 声明：`container-type:scroll-state;`。 */
  readonly scrollState: string = 'container-type:scroll-state;';
  /**
   * 建立两个轴的尺寸查询容器，内容不再直接决定其隔离尺寸。
   *
   * CSS 声明：`container-type:size;`。
   */
  readonly size: string = 'container-type:size;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container-type:unset;`。
   */
  readonly unset: string = 'container-type:unset;';
  /**
   * 创建 container-type 属性作者；普通使用通过 s.containerType 取得共享实例。
   * @example
   * class CustomContainerTypeCss extends ContainerTypeCss {}
   */
  constructor() {
    super('container-type');
  }
  /**
   * 原样生成 container-type 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 container-type:value;。
   * @example
   * s.containerType.raw('inherit') // container-type:inherit;
   */
  raw(value: Property.ContainerType | CssString): string {
    return this.declaration(value);
  }
}

/**
 * content 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContentKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`content:close-quote;`。 */
  readonly closeQuote: Property.Content | CssString = 'close-quote';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`content:inherit;`。
   */
  readonly inherit: Property.Content | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`content:initial;`。
   */
  readonly initial: Property.Content | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`content:no-close-quote;`。 */
  readonly noCloseQuote: Property.Content | CssString = 'no-close-quote';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`content:no-open-quote;`。 */
  readonly noOpenQuote: Property.Content | CssString = 'no-open-quote';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`content:none;`。 */
  readonly none: Property.Content | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`content:normal;`。 */
  readonly normal: Property.Content | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`content:open-quote;`。 */
  readonly openQuote: Property.Content | CssString = 'open-quote';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`content:revert;`。
   */
  readonly revert: Property.Content | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`content:revert-layer;`。
   */
  readonly revertLayer: Property.Content | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`content:unset;`。
   */
  readonly unset: Property.Content | CssString = 'unset';
}

/**
 * 设置生成内容、替换内容或伪元素的内容。（content）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
 */
export class ContentCss extends CssProperty {
  /** CSS 声明：`content:close-quote;`。 */
  readonly closeQuote: string = 'content:close-quote;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`content:inherit;`。
   */
  readonly inherit: string = 'content:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`content:initial;`。
   */
  readonly initial: string = 'content:initial;';
  /** CSS 声明：`content:no-close-quote;`。 */
  readonly noCloseQuote: string = 'content:no-close-quote;';
  /** CSS 声明：`content:no-open-quote;`。 */
  readonly noOpenQuote: string = 'content:no-open-quote;';
  /** CSS 声明：`content:none;`。 */
  readonly none: string = 'content:none;';
  /** CSS 声明：`content:normal;`。 */
  readonly normal: string = 'content:normal;';
  /** CSS 声明：`content:open-quote;`。 */
  readonly openQuote: string = 'content:open-quote;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`content:revert;`。
   */
  readonly revert: string = 'content:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`content:revert-layer;`。
   */
  readonly revertLayer: string = 'content:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`content:unset;`。
   */
  readonly unset: string = 'content:unset;';
  /**
   * 创建 content 属性作者；普通使用通过 s.content 取得共享实例。
   * @example
   * class CustomContentCss extends ContentCss {}
   */
  constructor() {
    super('content');
  }
  /**
   * 原样生成 content 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 content:value;。
   * @example
   * s.content.raw('inherit') // content:inherit;
   */
  raw(value: Property.Content | CssString): string {
    return this.declaration(value);
  }
}

/**
 * content-visibility 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ContentVisibilityKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许浏览器跳过与用户暂不相关的内容渲染，仍需维护布局和可访问性语义。
   *
   * CSS 声明：`content-visibility:auto;`。
   */
  readonly auto: Property.ContentVisibility | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 跳过内容渲染，行为不同于只隐藏绘制的 visibility:hidden。
   *
   * CSS 声明：`content-visibility:hidden;`。
   */
  readonly hidden: Property.ContentVisibility | CssString = 'hidden';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`content-visibility:inherit;`。
   */
  readonly inherit: Property.ContentVisibility | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`content-visibility:initial;`。
   */
  readonly initial: Property.ContentVisibility | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`content-visibility:revert;`。
   */
  readonly revert: Property.ContentVisibility | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`content-visibility:revert-layer;`。
   */
  readonly revertLayer: Property.ContentVisibility | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`content-visibility:unset;`。
   */
  readonly unset: Property.ContentVisibility | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 正常渲染内容，不由此属性跳过子树。
   *
   * CSS 声明：`content-visibility:visible;`。
   */
  readonly visible: Property.ContentVisibility | CssString = 'visible';
}

/**
 * 控制是否渲染元素内容，并允许浏览器跳过暂时不可见的子树。（content-visibility）
 *
 * 允许跳过子树渲染；跳过时的占位尺寸可由 contain-intrinsic-size 提供。
 *
 * 常用值：
 * - `visible`：正常渲染内容，不由此属性跳过子树。
 * - `auto`：允许浏览器跳过与用户暂不相关的内容渲染，仍需维护布局和可访问性语义。
 * - `hidden`：跳过内容渲染，行为不同于只隐藏绘制的 visibility:hidden。
 *
 * 适用场景：页面中较长、暂时位于视口外的独立内容区域。
 *
 * CSS 初始值：`visible`（不同于浏览器默认样式表）。
 * @example
 * s.contentVisibility.auto
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
 */
export class ContentVisibilityCss extends CssProperty {
  /**
   * 允许浏览器跳过与用户暂不相关的内容渲染，仍需维护布局和可访问性语义。
   *
   * CSS 声明：`content-visibility:auto;`。
   */
  readonly auto: string = 'content-visibility:auto;';
  /**
   * 跳过内容渲染，行为不同于只隐藏绘制的 visibility:hidden。
   *
   * CSS 声明：`content-visibility:hidden;`。
   */
  readonly hidden: string = 'content-visibility:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`content-visibility:inherit;`。
   */
  readonly inherit: string = 'content-visibility:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`content-visibility:initial;`。
   */
  readonly initial: string = 'content-visibility:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`content-visibility:revert;`。
   */
  readonly revert: string = 'content-visibility:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`content-visibility:revert-layer;`。
   */
  readonly revertLayer: string = 'content-visibility:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`content-visibility:unset;`。
   */
  readonly unset: string = 'content-visibility:unset;';
  /**
   * 正常渲染内容，不由此属性跳过子树。
   *
   * CSS 声明：`content-visibility:visible;`。
   */
  readonly visible: string = 'content-visibility:visible;';
  /**
   * 创建 content-visibility 属性作者；普通使用通过 s.contentVisibility 取得共享实例。
   * @example
   * class CustomContentVisibilityCss extends ContentVisibilityCss {}
   */
  constructor() {
    super('content-visibility');
  }
  /**
   * 原样生成 content-visibility 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 content-visibility:value;。
   * @example
   * s.contentVisibility.raw('inherit') // content-visibility:inherit;
   */
  raw(value: Property.ContentVisibility | CssString): string {
    return this.declaration(value);
  }
}

/**
 * counter-increment 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CounterIncrementKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`counter-increment:inherit;`。
   */
  readonly inherit: Property.CounterIncrement | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-increment:initial;`。
   */
  readonly initial: Property.CounterIncrement | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`counter-increment:none;`。 */
  readonly none: Property.CounterIncrement | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-increment:revert;`。
   */
  readonly revert: Property.CounterIncrement | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-increment:revert-layer;`。
   */
  readonly revertLayer: Property.CounterIncrement | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-increment:unset;`。
   */
  readonly unset: Property.CounterIncrement | CssString = 'unset';
}

/**
 * 增加或减少指定 CSS 计数器的值。（counter-increment）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
 */
export class CounterIncrementCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`counter-increment:inherit;`。
   */
  readonly inherit: string = 'counter-increment:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-increment:initial;`。
   */
  readonly initial: string = 'counter-increment:initial;';
  /** CSS 声明：`counter-increment:none;`。 */
  readonly none: string = 'counter-increment:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-increment:revert;`。
   */
  readonly revert: string = 'counter-increment:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-increment:revert-layer;`。
   */
  readonly revertLayer: string = 'counter-increment:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-increment:unset;`。
   */
  readonly unset: string = 'counter-increment:unset;';
  /**
   * 创建 counter-increment 属性作者；普通使用通过 s.counterIncrement 取得共享实例。
   * @example
   * class CustomCounterIncrementCss extends CounterIncrementCss {}
   */
  constructor() {
    super('counter-increment');
  }
  /**
   * 原样生成 counter-increment 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 counter-increment:value;。
   * @example
   * s.counterIncrement.raw('inherit') // counter-increment:inherit;
   */
  raw(value: Property.CounterIncrement | CssString): string {
    return this.declaration(value);
  }
}

/**
 * counter-reset 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CounterResetKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`counter-reset:inherit;`。
   */
  readonly inherit: Property.CounterReset | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-reset:initial;`。
   */
  readonly initial: Property.CounterReset | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`counter-reset:none;`。 */
  readonly none: Property.CounterReset | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-reset:revert;`。
   */
  readonly revert: Property.CounterReset | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-reset:revert-layer;`。
   */
  readonly revertLayer: Property.CounterReset | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-reset:unset;`。
   */
  readonly unset: Property.CounterReset | CssString = 'unset';
}

/**
 * 创建或重置 CSS 计数器。（counter-reset）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
 */
export class CounterResetCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`counter-reset:inherit;`。
   */
  readonly inherit: string = 'counter-reset:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-reset:initial;`。
   */
  readonly initial: string = 'counter-reset:initial;';
  /** CSS 声明：`counter-reset:none;`。 */
  readonly none: string = 'counter-reset:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-reset:revert;`。
   */
  readonly revert: string = 'counter-reset:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-reset:revert-layer;`。
   */
  readonly revertLayer: string = 'counter-reset:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-reset:unset;`。
   */
  readonly unset: string = 'counter-reset:unset;';
  /**
   * 创建 counter-reset 属性作者；普通使用通过 s.counterReset 取得共享实例。
   * @example
   * class CustomCounterResetCss extends CounterResetCss {}
   */
  constructor() {
    super('counter-reset');
  }
  /**
   * 原样生成 counter-reset 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 counter-reset:value;。
   * @example
   * s.counterReset.raw('inherit') // counter-reset:inherit;
   */
  raw(value: Property.CounterReset | CssString): string {
    return this.declaration(value);
  }
}

/**
 * counter-set 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CounterSetKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`counter-set:inherit;`。
   */
  readonly inherit: Property.CounterSet | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-set:initial;`。
   */
  readonly initial: Property.CounterSet | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`counter-set:none;`。 */
  readonly none: Property.CounterSet | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-set:revert;`。
   */
  readonly revert: Property.CounterSet | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-set:revert-layer;`。
   */
  readonly revertLayer: Property.CounterSet | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-set:unset;`。
   */
  readonly unset: Property.CounterSet | CssString = 'unset';
}

/**
 * 设置已有 CSS 计数器的值，必要时创建计数器。（counter-set）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
 */
export class CounterSetCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`counter-set:inherit;`。
   */
  readonly inherit: string = 'counter-set:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-set:initial;`。
   */
  readonly initial: string = 'counter-set:initial;';
  /** CSS 声明：`counter-set:none;`。 */
  readonly none: string = 'counter-set:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-set:revert;`。
   */
  readonly revert: string = 'counter-set:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-set:revert-layer;`。
   */
  readonly revertLayer: string = 'counter-set:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-set:unset;`。
   */
  readonly unset: string = 'counter-set:unset;';
  /**
   * 创建 counter-set 属性作者；普通使用通过 s.counterSet 取得共享实例。
   * @example
   * class CustomCounterSetCss extends CounterSetCss {}
   */
  constructor() {
    super('counter-set');
  }
  /**
   * 原样生成 counter-set 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 counter-set:value;。
   * @example
   * s.counterSet.raw('inherit') // counter-set:inherit;
   */
  raw(value: Property.CounterSet | CssString): string {
    return this.declaration(value);
  }
}

/**
 * cursor 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CursorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:alias;`。 */
  readonly alias: Property.Cursor | CssString = 'alias';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:all-scroll;`。 */
  readonly allScroll: Property.Cursor | CssString = 'all-scroll';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:auto;`。 */
  readonly auto: Property.Cursor | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:cell;`。 */
  readonly cell: Property.Cursor | CssString = 'cell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:col-resize;`。 */
  readonly colResize: Property.Cursor | CssString = 'col-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:context-menu;`。 */
  readonly contextMenu: Property.Cursor | CssString = 'context-menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:copy;`。 */
  readonly copy: Property.Cursor | CssString = 'copy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:crosshair;`。 */
  readonly crosshair: Property.Cursor | CssString = 'crosshair';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:default;`。 */
  readonly default: Property.Cursor | CssString = 'default';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:e-resize;`。 */
  readonly eResize: Property.Cursor | CssString = 'e-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:ew-resize;`。 */
  readonly ewResize: Property.Cursor | CssString = 'ew-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:grab;`。 */
  readonly grab: Property.Cursor | CssString = 'grab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:grabbing;`。 */
  readonly grabbing: Property.Cursor | CssString = 'grabbing';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:help;`。 */
  readonly help: Property.Cursor | CssString = 'help';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`cursor:inherit;`。
   */
  readonly inherit: Property.Cursor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cursor:initial;`。
   */
  readonly initial: Property.Cursor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:move;`。 */
  readonly move: Property.Cursor | CssString = 'move';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:n-resize;`。 */
  readonly nResize: Property.Cursor | CssString = 'n-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:ne-resize;`。 */
  readonly neResize: Property.Cursor | CssString = 'ne-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:nesw-resize;`。 */
  readonly neswResize: Property.Cursor | CssString = 'nesw-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:no-drop;`。 */
  readonly noDrop: Property.Cursor | CssString = 'no-drop';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:none;`。 */
  readonly none: Property.Cursor | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:not-allowed;`。 */
  readonly notAllowed: Property.Cursor | CssString = 'not-allowed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:ns-resize;`。 */
  readonly nsResize: Property.Cursor | CssString = 'ns-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:nw-resize;`。 */
  readonly nwResize: Property.Cursor | CssString = 'nw-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:nwse-resize;`。 */
  readonly nwseResize: Property.Cursor | CssString = 'nwse-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:pointer;`。 */
  readonly pointer: Property.Cursor | CssString = 'pointer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:progress;`。 */
  readonly progress: Property.Cursor | CssString = 'progress';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cursor:revert;`。
   */
  readonly revert: Property.Cursor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cursor:revert-layer;`。
   */
  readonly revertLayer: Property.Cursor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:row-resize;`。 */
  readonly rowResize: Property.Cursor | CssString = 'row-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:s-resize;`。 */
  readonly sResize: Property.Cursor | CssString = 's-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:se-resize;`。 */
  readonly seResize: Property.Cursor | CssString = 'se-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:sw-resize;`。 */
  readonly swResize: Property.Cursor | CssString = 'sw-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:text;`。 */
  readonly text: Property.Cursor | CssString = 'text';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cursor:unset;`。
   */
  readonly unset: Property.Cursor | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:vertical-text;`。 */
  readonly verticalText: Property.Cursor | CssString = 'vertical-text';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:w-resize;`。 */
  readonly wResize: Property.Cursor | CssString = 'w-resize';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:wait;`。 */
  readonly wait: Property.Cursor | CssString = 'wait';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:zoom-in;`。 */
  readonly zoomIn: Property.Cursor | CssString = 'zoom-in';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`cursor:zoom-out;`。 */
  readonly zoomOut: Property.Cursor | CssString = 'zoom-out';
}

/**
 * 设置指针位于元素上方时显示的光标。（cursor）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
 */
export class CursorCss extends CssProperty {
  /** CSS 声明：`cursor:alias;`。 */
  readonly alias: string = 'cursor:alias;';
  /** CSS 声明：`cursor:all-scroll;`。 */
  readonly allScroll: string = 'cursor:all-scroll;';
  /** CSS 声明：`cursor:auto;`。 */
  readonly auto: string = 'cursor:auto;';
  /** CSS 声明：`cursor:cell;`。 */
  readonly cell: string = 'cursor:cell;';
  /** CSS 声明：`cursor:col-resize;`。 */
  readonly colResize: string = 'cursor:col-resize;';
  /** CSS 声明：`cursor:context-menu;`。 */
  readonly contextMenu: string = 'cursor:context-menu;';
  /** CSS 声明：`cursor:copy;`。 */
  readonly copy: string = 'cursor:copy;';
  /** CSS 声明：`cursor:crosshair;`。 */
  readonly crosshair: string = 'cursor:crosshair;';
  /** CSS 声明：`cursor:default;`。 */
  readonly default: string = 'cursor:default;';
  /** CSS 声明：`cursor:e-resize;`。 */
  readonly eResize: string = 'cursor:e-resize;';
  /** CSS 声明：`cursor:ew-resize;`。 */
  readonly ewResize: string = 'cursor:ew-resize;';
  /** CSS 声明：`cursor:grab;`。 */
  readonly grab: string = 'cursor:grab;';
  /** CSS 声明：`cursor:grabbing;`。 */
  readonly grabbing: string = 'cursor:grabbing;';
  /** CSS 声明：`cursor:help;`。 */
  readonly help: string = 'cursor:help;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`cursor:inherit;`。
   */
  readonly inherit: string = 'cursor:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cursor:initial;`。
   */
  readonly initial: string = 'cursor:initial;';
  /** CSS 声明：`cursor:move;`。 */
  readonly move: string = 'cursor:move;';
  /** CSS 声明：`cursor:n-resize;`。 */
  readonly nResize: string = 'cursor:n-resize;';
  /** CSS 声明：`cursor:ne-resize;`。 */
  readonly neResize: string = 'cursor:ne-resize;';
  /** CSS 声明：`cursor:nesw-resize;`。 */
  readonly neswResize: string = 'cursor:nesw-resize;';
  /** CSS 声明：`cursor:no-drop;`。 */
  readonly noDrop: string = 'cursor:no-drop;';
  /** CSS 声明：`cursor:none;`。 */
  readonly none: string = 'cursor:none;';
  /** CSS 声明：`cursor:not-allowed;`。 */
  readonly notAllowed: string = 'cursor:not-allowed;';
  /** CSS 声明：`cursor:ns-resize;`。 */
  readonly nsResize: string = 'cursor:ns-resize;';
  /** CSS 声明：`cursor:nw-resize;`。 */
  readonly nwResize: string = 'cursor:nw-resize;';
  /** CSS 声明：`cursor:nwse-resize;`。 */
  readonly nwseResize: string = 'cursor:nwse-resize;';
  /** CSS 声明：`cursor:pointer;`。 */
  readonly pointer: string = 'cursor:pointer;';
  /** CSS 声明：`cursor:progress;`。 */
  readonly progress: string = 'cursor:progress;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cursor:revert;`。
   */
  readonly revert: string = 'cursor:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cursor:revert-layer;`。
   */
  readonly revertLayer: string = 'cursor:revert-layer;';
  /** CSS 声明：`cursor:row-resize;`。 */
  readonly rowResize: string = 'cursor:row-resize;';
  /** CSS 声明：`cursor:s-resize;`。 */
  readonly sResize: string = 'cursor:s-resize;';
  /** CSS 声明：`cursor:se-resize;`。 */
  readonly seResize: string = 'cursor:se-resize;';
  /** CSS 声明：`cursor:sw-resize;`。 */
  readonly swResize: string = 'cursor:sw-resize;';
  /** CSS 声明：`cursor:text;`。 */
  readonly text: string = 'cursor:text;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cursor:unset;`。
   */
  readonly unset: string = 'cursor:unset;';
  /** CSS 声明：`cursor:vertical-text;`。 */
  readonly verticalText: string = 'cursor:vertical-text;';
  /** CSS 声明：`cursor:w-resize;`。 */
  readonly wResize: string = 'cursor:w-resize;';
  /** CSS 声明：`cursor:wait;`。 */
  readonly wait: string = 'cursor:wait;';
  /** CSS 声明：`cursor:zoom-in;`。 */
  readonly zoomIn: string = 'cursor:zoom-in;';
  /** CSS 声明：`cursor:zoom-out;`。 */
  readonly zoomOut: string = 'cursor:zoom-out;';
  /**
   * 创建 cursor 属性作者；普通使用通过 s.cursor 取得共享实例。
   * @example
   * class CustomCursorCss extends CursorCss {}
   */
  constructor() {
    super('cursor');
  }
  /**
   * 原样生成 cursor 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 cursor:value;。
   * @example
   * s.cursor.raw('inherit') // cursor:inherit;
   */
  raw(value: Property.Cursor | CssString): string {
    return this.declaration(value);
  }
}

/**
 * cx 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CxKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`cx:inherit;`。
   */
  readonly inherit: Property.Cx | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cx:initial;`。
   */
  readonly initial: Property.Cx | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cx:revert;`。
   */
  readonly revert: Property.Cx | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cx:revert-layer;`。
   */
  readonly revertLayer: Property.Cx | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cx:unset;`。
   */
  readonly unset: Property.Cx | CssString = 'unset';
}

/**
 * 设置 SVG 圆或椭圆中心的横坐标。（cx）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
 */
export class CxCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`cx:inherit;`。
   */
  readonly inherit: string = 'cx:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cx:initial;`。
   */
  readonly initial: string = 'cx:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cx:revert;`。
   */
  readonly revert: string = 'cx:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cx:revert-layer;`。
   */
  readonly revertLayer: string = 'cx:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cx:unset;`。
   */
  readonly unset: string = 'cx:unset;';
  /**
   * 创建 cx 属性作者；普通使用通过 s.cx 取得共享实例。
   * @example
   * class CustomCxCss extends CxCss {}
   */
  constructor() {
    super('cx');
  }
  /**
   * 原样生成 cx 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 cx:value;。
   * @example
   * s.cx.raw('inherit') // cx:inherit;
   */
  raw(value: Property.Cx | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.cx.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.cx.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.cx.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Cx | CssString, ...others: (Property.Cx | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.cx.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Cx | CssString, ...others: (Property.Cx | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.cx.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Cx | CssString,
    preferred: Property.Cx | CssString,
    maximum: Property.Cx | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * cy 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class CyKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`cy:inherit;`。
   */
  readonly inherit: Property.Cy | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cy:initial;`。
   */
  readonly initial: Property.Cy | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cy:revert;`。
   */
  readonly revert: Property.Cy | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cy:revert-layer;`。
   */
  readonly revertLayer: Property.Cy | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cy:unset;`。
   */
  readonly unset: Property.Cy | CssString = 'unset';
}

/**
 * 设置 SVG 圆或椭圆中心的纵坐标。（cy）
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
 */
export class CyCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`cy:inherit;`。
   */
  readonly inherit: string = 'cy:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cy:initial;`。
   */
  readonly initial: string = 'cy:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cy:revert;`。
   */
  readonly revert: string = 'cy:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cy:revert-layer;`。
   */
  readonly revertLayer: string = 'cy:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cy:unset;`。
   */
  readonly unset: string = 'cy:unset;';
  /**
   * 创建 cy 属性作者；普通使用通过 s.cy 取得共享实例。
   * @example
   * class CustomCyCss extends CyCss {}
   */
  constructor() {
    super('cy');
  }
  /**
   * 原样生成 cy 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 cy:value;。
   * @example
   * s.cy.raw('inherit') // cy:inherit;
   */
  raw(value: Property.Cy | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.cy.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.cy.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.cy.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Cy | CssString, ...others: (Property.Cy | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.cy.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Cy | CssString, ...others: (Property.Cy | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.cy.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Cy | CssString,
    preferred: Property.Cy | CssString,
    maximum: Property.Cy | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * d 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class DKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`d:inherit;`。
   */
  readonly inherit: Property.D | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`d:initial;`。
   */
  readonly initial: Property.D | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`d:none;`。 */
  readonly none: Property.D | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`d:revert;`。
   */
  readonly revert: Property.D | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`d:revert-layer;`。
   */
  readonly revertLayer: Property.D | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`d:unset;`。
   */
  readonly unset: Property.D | CssString = 'unset';
}

/**
 * 设置 SVG path 元素的路径数据。（d）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
 */
export class DCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`d:inherit;`。
   */
  readonly inherit: string = 'd:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`d:initial;`。
   */
  readonly initial: string = 'd:initial;';
  /** CSS 声明：`d:none;`。 */
  readonly none: string = 'd:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`d:revert;`。
   */
  readonly revert: string = 'd:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`d:revert-layer;`。
   */
  readonly revertLayer: string = 'd:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`d:unset;`。
   */
  readonly unset: string = 'd:unset;';
  /**
   * 创建 d 属性作者；普通使用通过 s.d 取得共享实例。
   * @example
   * class CustomDCss extends DCss {}
   */
  constructor() {
    super('d');
  }
  /**
   * 原样生成 d 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 d:value;。
   * @example
   * s.d.raw('inherit') // d:inherit;
   */
  raw(value: Property.D | CssString): string {
    return this.declaration(value);
  }
}

/**
 * direction 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class DirectionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`direction:inherit;`。
   */
  readonly inherit: Property.Direction | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`direction:initial;`。
   */
  readonly initial: Property.Direction | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`direction:ltr;`。 */
  readonly ltr: Property.Direction | CssString = 'ltr';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`direction:revert;`。
   */
  readonly revert: Property.Direction | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`direction:revert-layer;`。
   */
  readonly revertLayer: Property.Direction | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`direction:rtl;`。 */
  readonly rtl: Property.Direction | CssString = 'rtl';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`direction:unset;`。
   */
  readonly unset: Property.Direction | CssString = 'unset';
}

/**
 * 设置文本基本方向，参与双向文本及部分布局计算。（direction）
 *
 * CSS 初始值：`ltr`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
 */
export class DirectionCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`direction:inherit;`。
   */
  readonly inherit: string = 'direction:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`direction:initial;`。
   */
  readonly initial: string = 'direction:initial;';
  /** CSS 声明：`direction:ltr;`。 */
  readonly ltr: string = 'direction:ltr;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`direction:revert;`。
   */
  readonly revert: string = 'direction:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`direction:revert-layer;`。
   */
  readonly revertLayer: string = 'direction:revert-layer;';
  /** CSS 声明：`direction:rtl;`。 */
  readonly rtl: string = 'direction:rtl;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`direction:unset;`。
   */
  readonly unset: string = 'direction:unset;';
  /**
   * 创建 direction 属性作者；普通使用通过 s.direction 取得共享实例。
   * @example
   * class CustomDirectionCss extends DirectionCss {}
   */
  constructor() {
    super('direction');
  }
  /**
   * 原样生成 direction 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 direction:value;。
   * @example
   * s.direction.raw('inherit') // direction:inherit;
   */
  raw(value: Property.Direction | CssString): string {
    return this.declaration(value);
  }
}

/**
 * display 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class DisplayKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 生成块级盒子，内部默认采用普通流布局。
   *
   * CSS 声明：`display:block;`。
   */
  readonly block: Property.Display | CssString = 'block';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 通常不生成元素自身的主盒子，让子盒子参与外层布局；背景、边框等失去承载盒，应核对可访问性行为。
   *
   * 普通元素自身不再提供主盒子，子盒子可参与外层 Flex/Grid 等布局。
   *
   * 适用场景：保留 DOM 包装节点，同时让内部项目进入外层布局。
   *
   * 注意：替换元素等存在特殊规则；应检查语义和可访问性，不要把它当作无条件删除包装盒的替代。
   *
   * CSS 声明：`display:contents;`。
   * @example
   * s.display.contents
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly contents: Property.Display | CssString = 'contents';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 生成块级弹性容器，直接子元素参与 Flex 布局。
   *
   * 容器自身以块级方式参与普通流，直接子元素成为弹性项目；可分配剩余空间、对齐和换行。
   *
   * 区别：inline-flex 使用相同的内部布局，但容器对外按行内级盒子排列。
   *
   * 适用场景：工具栏、横向导航、纵向堆叠和一维内容排列。
   *
   * 注意：默认主轴为 row，默认不换行；主轴方向还受书写方向影响。
   *
   * CSS 声明：`display:flex;`。
   * @example
   * css(s.display.flex, s.alignItems.center, s.justifyContent.spaceBetween)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly flex: Property.Display | CssString = 'flex';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:flow;`。 */
  readonly flow: Property.Display | CssString = 'flow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 建立独立块格式化上下文，可包住内部浮动并隔离部分外边距折叠。
   *
   * 区别：与普通 block 相比，显式建立独立块格式化上下文；无需借助 overflow:hidden，也不会因此裁剪溢出。
   *
   * 适用场景：让容器包住内部浮动，或隔离内外的部分外边距折叠。
   *
   * CSS 声明：`display:flow-root;`。
   * @example
   * css(s.display.flowRoot, s.padding.rem(1))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly flowRoot: Property.Display | CssString = 'flow-root';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 生成块级网格容器，直接子元素参与 Grid 布局。
   *
   * 直接子元素进入网格，行列轨道和命名区域共同决定项目位置与尺寸。
   *
   * 区别：Flex 更侧重单个主轴；Grid 可以同时控制行和列。inline-grid 则改变容器对外的显示类型。
   *
   * 适用场景：卡片网格、表单对齐和二维页面区域布局。
   *
   * CSS 声明：`display:grid;`。
   * @example
   * css(s.display.grid, s.gridTemplateColumns.repeat(3, 'minmax(0, 1fr)'), s.gap.rem(1))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly grid: Property.Display | CssString = 'grid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`display:inherit;`。
   */
  readonly inherit: Property.Display | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`display:initial;`。
   */
  readonly initial: Property.Display | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 生成行内盒子，参与行内排版；普通非替换行内盒子的宽高不按块盒规则应用。
   *
   * CSS 声明：`display:inline;`。
   */
  readonly inline: Property.Display | CssString = 'inline';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 外部参与行内排版，内部建立独立格式化上下文，可设置宽高。
   *
   * 区别：与 inline 相比可设置宽高，内部建立独立格式化上下文；与 inline-flex 相比，内部使用普通流而非 Flex。
   *
   * 适用场景：需要宽高、内边距且随文本同行排列的小盒子。
   *
   * 注意：相邻行内级盒子之间的文本空白仍可能形成间距，vertical-align 会影响它在行内的位置。
   *
   * CSS 声明：`display:inline-block;`。
   * @example
   * css(s.display.inlineBlock, s.width.rem(2), s.height.rem(2), s.verticalAlign.middle)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly inlineBlock: Property.Display | CssString = 'inline-block';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 创建行内级的 Flex 容器。
   *
   * 对外：在普通文档流中作为一个整体参与行内排版，可以与文字或其他行内内容位于同一行。
   * 对内：直接子元素使用 Flex 布局，可通过 alignItems、justifyContent、gap 等控制对齐和间距。
   *
   * 区别：与 flex 的区别是容器自身的外部排版方式，内部弹性布局机制相同；inline-flex 对应双关键字写法 inline flex。
   *
   * 适用场景：图标与文字组合、标签等需要内部弹性对齐，同时以行内方式排列的内容。
   *
   * 注意：子项换行由 flex-wrap 控制。当容器自身是 Flex/Grid 项目时，其外部排版还受父布局控制。
   *
   * CSS 声明：`display:inline-flex;`。
   * @example
   * css(s.display.inlineFlex, s.alignItems.center, s.gap.rem(0.375))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly inlineFlex: Property.Display | CssString = 'inline-flex';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 生成行内级网格容器，内部仍使用 Grid 布局。
   *
   * 区别：与 grid 的内部网格布局相同，但容器在普通流中按行内级盒子排列。
   *
   * 适用场景：需要行列对齐并与周围文字同行的小型内容组。
   *
   * CSS 声明：`display:inline-grid;`。
   * @example
   * css(s.display.inlineGrid, s.gridTemplateColumns.repeat(2, 'auto'), s.gap.rem(0.25))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly inlineGrid: Property.Display | CssString = 'inline-grid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:inline-list-item;`。 */
  readonly inlineListItem: Property.Display | CssString = 'inline-list-item';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:inline-table;`。 */
  readonly inlineTable: Property.Display | CssString = 'inline-table';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 生成带列表标记的主盒子，标记由 list-style 等属性控制。
   *
   * CSS 声明：`display:list-item;`。
   */
  readonly listItem: Property.Display | CssString = 'list-item';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 不生成元素及其后代的布局盒子，通常也从可访问性树中移除。
   *
   * 区别：visibility:hidden 通常保留布局空间；opacity:0 只改变透明度，通常仍能交互。
   *
   * 适用场景：从当前布局中隐藏一段内容。
   *
   * 注意：不能靠它保留可聚焦交互；重新显示时需按组件需求管理焦点。
   *
   * CSS 声明：`display:none;`。
   * @example
   * s.display.none
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly none: Property.Display | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`display:revert;`。
   */
  readonly revert: Property.Display | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`display:revert-layer;`。
   */
  readonly revertLayer: Property.Display | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:ruby;`。 */
  readonly ruby: Property.Display | CssString = 'ruby';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:ruby-base;`。 */
  readonly rubyBase: Property.Display | CssString = 'ruby-base';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:ruby-base-container;`。 */
  readonly rubyBaseContainer: Property.Display | CssString = 'ruby-base-container';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:ruby-text;`。 */
  readonly rubyText: Property.Display | CssString = 'ruby-text';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:ruby-text-container;`。 */
  readonly rubyTextContainer: Property.Display | CssString = 'ruby-text-container';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:run-in;`。 */
  readonly runIn: Property.Display | CssString = 'run-in';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table;`。 */
  readonly table: Property.Display | CssString = 'table';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-caption;`。 */
  readonly tableCaption: Property.Display | CssString = 'table-caption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-cell;`。 */
  readonly tableCell: Property.Display | CssString = 'table-cell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-column;`。 */
  readonly tableColumn: Property.Display | CssString = 'table-column';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-column-group;`。 */
  readonly tableColumnGroup: Property.Display | CssString = 'table-column-group';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-footer-group;`。 */
  readonly tableFooterGroup: Property.Display | CssString = 'table-footer-group';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-header-group;`。 */
  readonly tableHeaderGroup: Property.Display | CssString = 'table-header-group';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-row;`。 */
  readonly tableRow: Property.Display | CssString = 'table-row';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`display:table-row-group;`。 */
  readonly tableRowGroup: Property.Display | CssString = 'table-row-group';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`display:unset;`。
   */
  readonly unset: Property.Display | CssString = 'unset';
}

/**
 * 决定元素是否生成布局盒子，以及元素自身和内部内容如何排版。（display）
 *
 * 外部显示类型决定元素自身以块级还是行内级方式参与周围布局；内部布局方式决定内容使用普通流、Flex 或 Grid 等布局。此属性不继承；例如 div 通常由浏览器默认样式设置为 block。
 *
 * 常用值：
 * - `block`：生成块级盒子，内部默认采用普通流布局。
 * - `inline`：生成行内盒子，参与行内排版；普通非替换行内盒子的宽高不按块盒规则应用。
 * - `flex`：生成块级弹性容器，直接子元素参与 Flex 布局。
 * - `inline-flex`：创建行内级的 Flex 容器。
 * - `grid`：生成块级网格容器，直接子元素参与 Grid 布局。
 * - `none`：不生成元素及其后代的布局盒子，通常也从可访问性树中移除。
 *
 * 适用场景：选择容器的布局方式；具体对齐、间距和换行由对应布局属性控制。
 *
 * CSS 初始值：`inline`（不同于浏览器默认样式表）。
 * @example
 * css(s.display.flex, s.alignItems.center, s.gap.rem(0.5))
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/display
 */
export class DisplayCss extends CssProperty {
  /**
   * 生成块级盒子，内部默认采用普通流布局。
   *
   * CSS 声明：`display:block;`。
   */
  readonly block: string = 'display:block;';
  /**
   * 通常不生成元素自身的主盒子，让子盒子参与外层布局；背景、边框等失去承载盒，应核对可访问性行为。
   *
   * 普通元素自身不再提供主盒子，子盒子可参与外层 Flex/Grid 等布局。
   *
   * 适用场景：保留 DOM 包装节点，同时让内部项目进入外层布局。
   *
   * 注意：替换元素等存在特殊规则；应检查语义和可访问性，不要把它当作无条件删除包装盒的替代。
   *
   * CSS 声明：`display:contents;`。
   * @example
   * s.display.contents
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly contents: string = 'display:contents;';
  /**
   * 生成块级弹性容器，直接子元素参与 Flex 布局。
   *
   * 容器自身以块级方式参与普通流，直接子元素成为弹性项目；可分配剩余空间、对齐和换行。
   *
   * 区别：inline-flex 使用相同的内部布局，但容器对外按行内级盒子排列。
   *
   * 适用场景：工具栏、横向导航、纵向堆叠和一维内容排列。
   *
   * 注意：默认主轴为 row，默认不换行；主轴方向还受书写方向影响。
   *
   * CSS 声明：`display:flex;`。
   * @example
   * css(s.display.flex, s.alignItems.center, s.justifyContent.spaceBetween)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly flex: string = 'display:flex;';
  /** CSS 声明：`display:flow;`。 */
  readonly flow: string = 'display:flow;';
  /**
   * 建立独立块格式化上下文，可包住内部浮动并隔离部分外边距折叠。
   *
   * 区别：与普通 block 相比，显式建立独立块格式化上下文；无需借助 overflow:hidden，也不会因此裁剪溢出。
   *
   * 适用场景：让容器包住内部浮动，或隔离内外的部分外边距折叠。
   *
   * CSS 声明：`display:flow-root;`。
   * @example
   * css(s.display.flowRoot, s.padding.rem(1))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly flowRoot: string = 'display:flow-root;';
  /**
   * 生成块级网格容器，直接子元素参与 Grid 布局。
   *
   * 直接子元素进入网格，行列轨道和命名区域共同决定项目位置与尺寸。
   *
   * 区别：Flex 更侧重单个主轴；Grid 可以同时控制行和列。inline-grid 则改变容器对外的显示类型。
   *
   * 适用场景：卡片网格、表单对齐和二维页面区域布局。
   *
   * CSS 声明：`display:grid;`。
   * @example
   * css(s.display.grid, s.gridTemplateColumns.repeat(3, 'minmax(0, 1fr)'), s.gap.rem(1))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly grid: string = 'display:grid;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`display:inherit;`。
   */
  readonly inherit: string = 'display:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`display:initial;`。
   */
  readonly initial: string = 'display:initial;';
  /**
   * 生成行内盒子，参与行内排版；普通非替换行内盒子的宽高不按块盒规则应用。
   *
   * CSS 声明：`display:inline;`。
   */
  readonly inline: string = 'display:inline;';
  /**
   * 外部参与行内排版，内部建立独立格式化上下文，可设置宽高。
   *
   * 区别：与 inline 相比可设置宽高，内部建立独立格式化上下文；与 inline-flex 相比，内部使用普通流而非 Flex。
   *
   * 适用场景：需要宽高、内边距且随文本同行排列的小盒子。
   *
   * 注意：相邻行内级盒子之间的文本空白仍可能形成间距，vertical-align 会影响它在行内的位置。
   *
   * CSS 声明：`display:inline-block;`。
   * @example
   * css(s.display.inlineBlock, s.width.rem(2), s.height.rem(2), s.verticalAlign.middle)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly inlineBlock: string = 'display:inline-block;';
  /**
   * 创建行内级的 Flex 容器。
   *
   * 对外：在普通文档流中作为一个整体参与行内排版，可以与文字或其他行内内容位于同一行。
   * 对内：直接子元素使用 Flex 布局，可通过 alignItems、justifyContent、gap 等控制对齐和间距。
   *
   * 区别：与 flex 的区别是容器自身的外部排版方式，内部弹性布局机制相同；inline-flex 对应双关键字写法 inline flex。
   *
   * 适用场景：图标与文字组合、标签等需要内部弹性对齐，同时以行内方式排列的内容。
   *
   * 注意：子项换行由 flex-wrap 控制。当容器自身是 Flex/Grid 项目时，其外部排版还受父布局控制。
   *
   * CSS 声明：`display:inline-flex;`。
   * @example
   * css(s.display.inlineFlex, s.alignItems.center, s.gap.rem(0.375))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly inlineFlex: string = 'display:inline-flex;';
  /**
   * 生成行内级网格容器，内部仍使用 Grid 布局。
   *
   * 区别：与 grid 的内部网格布局相同，但容器在普通流中按行内级盒子排列。
   *
   * 适用场景：需要行列对齐并与周围文字同行的小型内容组。
   *
   * CSS 声明：`display:inline-grid;`。
   * @example
   * css(s.display.inlineGrid, s.gridTemplateColumns.repeat(2, 'auto'), s.gap.rem(0.25))
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly inlineGrid: string = 'display:inline-grid;';
  /** CSS 声明：`display:inline-list-item;`。 */
  readonly inlineListItem: string = 'display:inline-list-item;';
  /** CSS 声明：`display:inline-table;`。 */
  readonly inlineTable: string = 'display:inline-table;';
  /**
   * 生成带列表标记的主盒子，标记由 list-style 等属性控制。
   *
   * CSS 声明：`display:list-item;`。
   */
  readonly listItem: string = 'display:list-item;';
  /**
   * 不生成元素及其后代的布局盒子，通常也从可访问性树中移除。
   *
   * 区别：visibility:hidden 通常保留布局空间；opacity:0 只改变透明度，通常仍能交互。
   *
   * 适用场景：从当前布局中隐藏一段内容。
   *
   * 注意：不能靠它保留可聚焦交互；重新显示时需按组件需求管理焦点。
   *
   * CSS 声明：`display:none;`。
   * @example
   * s.display.none
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  readonly none: string = 'display:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`display:revert;`。
   */
  readonly revert: string = 'display:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`display:revert-layer;`。
   */
  readonly revertLayer: string = 'display:revert-layer;';
  /** CSS 声明：`display:ruby;`。 */
  readonly ruby: string = 'display:ruby;';
  /** CSS 声明：`display:ruby-base;`。 */
  readonly rubyBase: string = 'display:ruby-base;';
  /** CSS 声明：`display:ruby-base-container;`。 */
  readonly rubyBaseContainer: string = 'display:ruby-base-container;';
  /** CSS 声明：`display:ruby-text;`。 */
  readonly rubyText: string = 'display:ruby-text;';
  /** CSS 声明：`display:ruby-text-container;`。 */
  readonly rubyTextContainer: string = 'display:ruby-text-container;';
  /** CSS 声明：`display:run-in;`。 */
  readonly runIn: string = 'display:run-in;';
  /** CSS 声明：`display:table;`。 */
  readonly table: string = 'display:table;';
  /** CSS 声明：`display:table-caption;`。 */
  readonly tableCaption: string = 'display:table-caption;';
  /** CSS 声明：`display:table-cell;`。 */
  readonly tableCell: string = 'display:table-cell;';
  /** CSS 声明：`display:table-column;`。 */
  readonly tableColumn: string = 'display:table-column;';
  /** CSS 声明：`display:table-column-group;`。 */
  readonly tableColumnGroup: string = 'display:table-column-group;';
  /** CSS 声明：`display:table-footer-group;`。 */
  readonly tableFooterGroup: string = 'display:table-footer-group;';
  /** CSS 声明：`display:table-header-group;`。 */
  readonly tableHeaderGroup: string = 'display:table-header-group;';
  /** CSS 声明：`display:table-row;`。 */
  readonly tableRow: string = 'display:table-row;';
  /** CSS 声明：`display:table-row-group;`。 */
  readonly tableRowGroup: string = 'display:table-row-group;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`display:unset;`。
   */
  readonly unset: string = 'display:unset;';
  /**
   * 创建 display 属性作者；普通使用通过 s.display 取得共享实例。
   * @example
   * class CustomDisplayCss extends DisplayCss {}
   */
  constructor() {
    super('display');
  }
  /**
   * 原样生成 display 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 display:value;。
   * @example
   * s.display.raw('inherit') // display:inherit;
   */
  raw(value: Property.Display | CssString): string {
    return this.declaration(value);
  }
}

/**
 * dominant-baseline 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class DominantBaselineKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:alphabetic;`。 */
  readonly alphabetic: Property.DominantBaseline | CssString = 'alphabetic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:auto;`。 */
  readonly auto: Property.DominantBaseline | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:central;`。 */
  readonly central: Property.DominantBaseline | CssString = 'central';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:hanging;`。 */
  readonly hanging: Property.DominantBaseline | CssString = 'hanging';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:ideographic;`。 */
  readonly ideographic: Property.DominantBaseline | CssString = 'ideographic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`dominant-baseline:inherit;`。
   */
  readonly inherit: Property.DominantBaseline | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`dominant-baseline:initial;`。
   */
  readonly initial: Property.DominantBaseline | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:mathematical;`。 */
  readonly mathematical: Property.DominantBaseline | CssString = 'mathematical';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:middle;`。 */
  readonly middle: Property.DominantBaseline | CssString = 'middle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`dominant-baseline:revert;`。
   */
  readonly revert: Property.DominantBaseline | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`dominant-baseline:revert-layer;`。
   */
  readonly revertLayer: Property.DominantBaseline | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:text-bottom;`。 */
  readonly textBottom: Property.DominantBaseline | CssString = 'text-bottom';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`dominant-baseline:text-top;`。 */
  readonly textTop: Property.DominantBaseline | CssString = 'text-top';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`dominant-baseline:unset;`。
   */
  readonly unset: Property.DominantBaseline | CssString = 'unset';
}

/**
 * 选择 SVG 文本布局的主导基线及基线表。（dominant-baseline）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
 */
export class DominantBaselineCss extends CssProperty {
  /** CSS 声明：`dominant-baseline:alphabetic;`。 */
  readonly alphabetic: string = 'dominant-baseline:alphabetic;';
  /** CSS 声明：`dominant-baseline:auto;`。 */
  readonly auto: string = 'dominant-baseline:auto;';
  /** CSS 声明：`dominant-baseline:central;`。 */
  readonly central: string = 'dominant-baseline:central;';
  /** CSS 声明：`dominant-baseline:hanging;`。 */
  readonly hanging: string = 'dominant-baseline:hanging;';
  /** CSS 声明：`dominant-baseline:ideographic;`。 */
  readonly ideographic: string = 'dominant-baseline:ideographic;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`dominant-baseline:inherit;`。
   */
  readonly inherit: string = 'dominant-baseline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`dominant-baseline:initial;`。
   */
  readonly initial: string = 'dominant-baseline:initial;';
  /** CSS 声明：`dominant-baseline:mathematical;`。 */
  readonly mathematical: string = 'dominant-baseline:mathematical;';
  /** CSS 声明：`dominant-baseline:middle;`。 */
  readonly middle: string = 'dominant-baseline:middle;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`dominant-baseline:revert;`。
   */
  readonly revert: string = 'dominant-baseline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`dominant-baseline:revert-layer;`。
   */
  readonly revertLayer: string = 'dominant-baseline:revert-layer;';
  /** CSS 声明：`dominant-baseline:text-bottom;`。 */
  readonly textBottom: string = 'dominant-baseline:text-bottom;';
  /** CSS 声明：`dominant-baseline:text-top;`。 */
  readonly textTop: string = 'dominant-baseline:text-top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`dominant-baseline:unset;`。
   */
  readonly unset: string = 'dominant-baseline:unset;';
  /**
   * 创建 dominant-baseline 属性作者；普通使用通过 s.dominantBaseline 取得共享实例。
   * @example
   * class CustomDominantBaselineCss extends DominantBaselineCss {}
   */
  constructor() {
    super('dominant-baseline');
  }
  /**
   * 原样生成 dominant-baseline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 dominant-baseline:value;。
   * @example
   * s.dominantBaseline.raw('inherit') // dominant-baseline:inherit;
   */
  raw(value: Property.DominantBaseline | CssString): string {
    return this.declaration(value);
  }
}

/**
 * empty-cells 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class EmptyCellsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`empty-cells:hide;`。 */
  readonly hide: Property.EmptyCells | CssString = 'hide';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`empty-cells:inherit;`。
   */
  readonly inherit: Property.EmptyCells | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`empty-cells:initial;`。
   */
  readonly initial: Property.EmptyCells | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`empty-cells:revert;`。
   */
  readonly revert: Property.EmptyCells | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`empty-cells:revert-layer;`。
   */
  readonly revertLayer: Property.EmptyCells | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`empty-cells:show;`。 */
  readonly show: Property.EmptyCells | CssString = 'show';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`empty-cells:unset;`。
   */
  readonly unset: Property.EmptyCells | CssString = 'unset';
}

/**
 * 控制分离边框表格中空单元格的边框和背景是否绘制。（empty-cells）
 *
 * CSS 初始值：`show`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
 */
export class EmptyCellsCss extends CssProperty {
  /** CSS 声明：`empty-cells:hide;`。 */
  readonly hide: string = 'empty-cells:hide;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`empty-cells:inherit;`。
   */
  readonly inherit: string = 'empty-cells:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`empty-cells:initial;`。
   */
  readonly initial: string = 'empty-cells:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`empty-cells:revert;`。
   */
  readonly revert: string = 'empty-cells:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`empty-cells:revert-layer;`。
   */
  readonly revertLayer: string = 'empty-cells:revert-layer;';
  /** CSS 声明：`empty-cells:show;`。 */
  readonly show: string = 'empty-cells:show;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`empty-cells:unset;`。
   */
  readonly unset: string = 'empty-cells:unset;';
  /**
   * 创建 empty-cells 属性作者；普通使用通过 s.emptyCells 取得共享实例。
   * @example
   * class CustomEmptyCellsCss extends EmptyCellsCss {}
   */
  constructor() {
    super('empty-cells');
  }
  /**
   * 原样生成 empty-cells 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 empty-cells:value;。
   * @example
   * s.emptyCells.raw('inherit') // empty-cells:inherit;
   */
  raw(value: Property.EmptyCells | CssString): string {
    return this.declaration(value);
  }
}

/**
 * field-sizing 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FieldSizingKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`field-sizing:content;`。 */
  readonly content: Property.FieldSizing | CssString = 'content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`field-sizing:fixed;`。 */
  readonly fixed: Property.FieldSizing | CssString = 'fixed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`field-sizing:inherit;`。
   */
  readonly inherit: Property.FieldSizing | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`field-sizing:initial;`。
   */
  readonly initial: Property.FieldSizing | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`field-sizing:revert;`。
   */
  readonly revert: Property.FieldSizing | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`field-sizing:revert-layer;`。
   */
  readonly revertLayer: Property.FieldSizing | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`field-sizing:unset;`。
   */
  readonly unset: Property.FieldSizing | CssString = 'unset';
}

/**
 * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。（field-sizing）
 *
 * CSS 初始值：`fixed`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
 */
export class FieldSizingCss extends CssProperty {
  /** CSS 声明：`field-sizing:content;`。 */
  readonly content: string = 'field-sizing:content;';
  /** CSS 声明：`field-sizing:fixed;`。 */
  readonly fixed: string = 'field-sizing:fixed;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`field-sizing:inherit;`。
   */
  readonly inherit: string = 'field-sizing:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`field-sizing:initial;`。
   */
  readonly initial: string = 'field-sizing:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`field-sizing:revert;`。
   */
  readonly revert: string = 'field-sizing:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`field-sizing:revert-layer;`。
   */
  readonly revertLayer: string = 'field-sizing:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`field-sizing:unset;`。
   */
  readonly unset: string = 'field-sizing:unset;';
  /**
   * 创建 field-sizing 属性作者；普通使用通过 s.fieldSizing 取得共享实例。
   * @example
   * class CustomFieldSizingCss extends FieldSizingCss {}
   */
  constructor() {
    super('field-sizing');
  }
  /**
   * 原样生成 field-sizing 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 field-sizing:value;。
   * @example
   * s.fieldSizing.raw('inherit') // field-sizing:inherit;
   */
  raw(value: Property.FieldSizing | CssString): string {
    return this.declaration(value);
  }
}

/**
 * fill 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FillKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:AccentColor;`。 */
  readonly AccentColor: Property.Fill | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:AccentColorText;`。 */
  readonly AccentColorText: Property.Fill | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ActiveBorder;`。 */
  readonly ActiveBorder: Property.Fill | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ActiveCaption;`。 */
  readonly ActiveCaption: Property.Fill | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ActiveText;`。 */
  readonly ActiveText: Property.Fill | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:AppWorkspace;`。 */
  readonly AppWorkspace: Property.Fill | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Background;`。 */
  readonly Background: Property.Fill | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ButtonBorder;`。 */
  readonly ButtonBorder: Property.Fill | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ButtonFace;`。 */
  readonly ButtonFace: Property.Fill | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.Fill | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ButtonShadow;`。 */
  readonly ButtonShadow: Property.Fill | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ButtonText;`。 */
  readonly ButtonText: Property.Fill | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Canvas;`。 */
  readonly Canvas: Property.Fill | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:CanvasText;`。 */
  readonly CanvasText: Property.Fill | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:CaptionText;`。 */
  readonly CaptionText: Property.Fill | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Field;`。 */
  readonly Field: Property.Fill | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:FieldText;`。 */
  readonly FieldText: Property.Fill | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:GrayText;`。 */
  readonly GrayText: Property.Fill | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Highlight;`。 */
  readonly Highlight: Property.Fill | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:HighlightText;`。 */
  readonly HighlightText: Property.Fill | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:InactiveBorder;`。 */
  readonly InactiveBorder: Property.Fill | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:InactiveCaption;`。 */
  readonly InactiveCaption: Property.Fill | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.Fill | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:InfoBackground;`。 */
  readonly InfoBackground: Property.Fill | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:InfoText;`。 */
  readonly InfoText: Property.Fill | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:LinkText;`。 */
  readonly LinkText: Property.Fill | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Mark;`。 */
  readonly Mark: Property.Fill | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:MarkText;`。 */
  readonly MarkText: Property.Fill | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Menu;`。 */
  readonly Menu: Property.Fill | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:MenuText;`。 */
  readonly MenuText: Property.Fill | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Scrollbar;`。 */
  readonly Scrollbar: Property.Fill | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:SelectedItem;`。 */
  readonly SelectedItem: Property.Fill | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:SelectedItemText;`。 */
  readonly SelectedItemText: Property.Fill | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.Fill | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ThreeDFace;`。 */
  readonly ThreeDFace: Property.Fill | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.Fill | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.Fill | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.Fill | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:VisitedText;`。 */
  readonly VisitedText: Property.Fill | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:Window;`。 */
  readonly Window: Property.Fill | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:WindowFrame;`。 */
  readonly WindowFrame: Property.Fill | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:WindowText;`。 */
  readonly WindowText: Property.Fill | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:aliceblue;`。 */
  readonly aliceblue: Property.Fill | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:antiquewhite;`。 */
  readonly antiquewhite: Property.Fill | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:aqua;`。 */
  readonly aqua: Property.Fill | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:aquamarine;`。 */
  readonly aquamarine: Property.Fill | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:azure;`。 */
  readonly azure: Property.Fill | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:beige;`。 */
  readonly beige: Property.Fill | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:bisque;`。 */
  readonly bisque: Property.Fill | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:black;`。 */
  readonly black: Property.Fill | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:blanchedalmond;`。 */
  readonly blanchedalmond: Property.Fill | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:blue;`。 */
  readonly blue: Property.Fill | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:blueviolet;`。 */
  readonly blueviolet: Property.Fill | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:brown;`。 */
  readonly brown: Property.Fill | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:burlywood;`。 */
  readonly burlywood: Property.Fill | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:cadetblue;`。 */
  readonly cadetblue: Property.Fill | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:chartreuse;`。 */
  readonly chartreuse: Property.Fill | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:chocolate;`。 */
  readonly chocolate: Property.Fill | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:context-fill;`。 */
  readonly contextFill: Property.Fill | CssString = 'context-fill';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:context-stroke;`。 */
  readonly contextStroke: Property.Fill | CssString = 'context-stroke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:coral;`。 */
  readonly coral: Property.Fill | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:cornflowerblue;`。 */
  readonly cornflowerblue: Property.Fill | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:cornsilk;`。 */
  readonly cornsilk: Property.Fill | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:crimson;`。 */
  readonly crimson: Property.Fill | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`fill:currentColor;`。
   */
  readonly currentColor: Property.Fill | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:cyan;`。 */
  readonly cyan: Property.Fill | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkblue;`。 */
  readonly darkblue: Property.Fill | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkcyan;`。 */
  readonly darkcyan: Property.Fill | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.Fill | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkgray;`。 */
  readonly darkgray: Property.Fill | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkgreen;`。 */
  readonly darkgreen: Property.Fill | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkgrey;`。 */
  readonly darkgrey: Property.Fill | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkkhaki;`。 */
  readonly darkkhaki: Property.Fill | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkmagenta;`。 */
  readonly darkmagenta: Property.Fill | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkolivegreen;`。 */
  readonly darkolivegreen: Property.Fill | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkorange;`。 */
  readonly darkorange: Property.Fill | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkorchid;`。 */
  readonly darkorchid: Property.Fill | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkred;`。 */
  readonly darkred: Property.Fill | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darksalmon;`。 */
  readonly darksalmon: Property.Fill | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkseagreen;`。 */
  readonly darkseagreen: Property.Fill | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkslateblue;`。 */
  readonly darkslateblue: Property.Fill | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkslategray;`。 */
  readonly darkslategray: Property.Fill | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkslategrey;`。 */
  readonly darkslategrey: Property.Fill | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkturquoise;`。 */
  readonly darkturquoise: Property.Fill | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:darkviolet;`。 */
  readonly darkviolet: Property.Fill | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:deeppink;`。 */
  readonly deeppink: Property.Fill | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:deepskyblue;`。 */
  readonly deepskyblue: Property.Fill | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:dimgray;`。 */
  readonly dimgray: Property.Fill | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:dimgrey;`。 */
  readonly dimgrey: Property.Fill | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:dodgerblue;`。 */
  readonly dodgerblue: Property.Fill | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:firebrick;`。 */
  readonly firebrick: Property.Fill | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:floralwhite;`。 */
  readonly floralwhite: Property.Fill | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:forestgreen;`。 */
  readonly forestgreen: Property.Fill | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:fuchsia;`。 */
  readonly fuchsia: Property.Fill | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:gainsboro;`。 */
  readonly gainsboro: Property.Fill | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ghostwhite;`。 */
  readonly ghostwhite: Property.Fill | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:gold;`。 */
  readonly gold: Property.Fill | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:goldenrod;`。 */
  readonly goldenrod: Property.Fill | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:gray;`。 */
  readonly gray: Property.Fill | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:green;`。 */
  readonly green: Property.Fill | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:greenyellow;`。 */
  readonly greenyellow: Property.Fill | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:grey;`。 */
  readonly grey: Property.Fill | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:honeydew;`。 */
  readonly honeydew: Property.Fill | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:hotpink;`。 */
  readonly hotpink: Property.Fill | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:indianred;`。 */
  readonly indianred: Property.Fill | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:indigo;`。 */
  readonly indigo: Property.Fill | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill:inherit;`。
   */
  readonly inherit: Property.Fill | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill:initial;`。
   */
  readonly initial: Property.Fill | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:ivory;`。 */
  readonly ivory: Property.Fill | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:khaki;`。 */
  readonly khaki: Property.Fill | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lavender;`。 */
  readonly lavender: Property.Fill | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lavenderblush;`。 */
  readonly lavenderblush: Property.Fill | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lawngreen;`。 */
  readonly lawngreen: Property.Fill | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lemonchiffon;`。 */
  readonly lemonchiffon: Property.Fill | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightblue;`。 */
  readonly lightblue: Property.Fill | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightcoral;`。 */
  readonly lightcoral: Property.Fill | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightcyan;`。 */
  readonly lightcyan: Property.Fill | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.Fill | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightgray;`。 */
  readonly lightgray: Property.Fill | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightgreen;`。 */
  readonly lightgreen: Property.Fill | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightgrey;`。 */
  readonly lightgrey: Property.Fill | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightpink;`。 */
  readonly lightpink: Property.Fill | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightsalmon;`。 */
  readonly lightsalmon: Property.Fill | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightseagreen;`。 */
  readonly lightseagreen: Property.Fill | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightskyblue;`。 */
  readonly lightskyblue: Property.Fill | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightslategray;`。 */
  readonly lightslategray: Property.Fill | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightslategrey;`。 */
  readonly lightslategrey: Property.Fill | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightsteelblue;`。 */
  readonly lightsteelblue: Property.Fill | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lightyellow;`。 */
  readonly lightyellow: Property.Fill | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:lime;`。 */
  readonly lime: Property.Fill | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:limegreen;`。 */
  readonly limegreen: Property.Fill | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:linen;`。 */
  readonly linen: Property.Fill | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:magenta;`。 */
  readonly magenta: Property.Fill | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:maroon;`。 */
  readonly maroon: Property.Fill | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.Fill | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumblue;`。 */
  readonly mediumblue: Property.Fill | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumorchid;`。 */
  readonly mediumorchid: Property.Fill | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumpurple;`。 */
  readonly mediumpurple: Property.Fill | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumseagreen;`。 */
  readonly mediumseagreen: Property.Fill | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumslateblue;`。 */
  readonly mediumslateblue: Property.Fill | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.Fill | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumturquoise;`。 */
  readonly mediumturquoise: Property.Fill | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mediumvioletred;`。 */
  readonly mediumvioletred: Property.Fill | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:midnightblue;`。 */
  readonly midnightblue: Property.Fill | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mintcream;`。 */
  readonly mintcream: Property.Fill | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:mistyrose;`。 */
  readonly mistyrose: Property.Fill | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:moccasin;`。 */
  readonly moccasin: Property.Fill | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:navajowhite;`。 */
  readonly navajowhite: Property.Fill | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:navy;`。 */
  readonly navy: Property.Fill | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:none;`。 */
  readonly none: Property.Fill | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:oldlace;`。 */
  readonly oldlace: Property.Fill | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:olive;`。 */
  readonly olive: Property.Fill | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:olivedrab;`。 */
  readonly olivedrab: Property.Fill | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:orange;`。 */
  readonly orange: Property.Fill | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:orangered;`。 */
  readonly orangered: Property.Fill | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:orchid;`。 */
  readonly orchid: Property.Fill | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:palegoldenrod;`。 */
  readonly palegoldenrod: Property.Fill | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:palegreen;`。 */
  readonly palegreen: Property.Fill | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:paleturquoise;`。 */
  readonly paleturquoise: Property.Fill | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:palevioletred;`。 */
  readonly palevioletred: Property.Fill | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:papayawhip;`。 */
  readonly papayawhip: Property.Fill | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:peachpuff;`。 */
  readonly peachpuff: Property.Fill | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:peru;`。 */
  readonly peru: Property.Fill | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:pink;`。 */
  readonly pink: Property.Fill | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:plum;`。 */
  readonly plum: Property.Fill | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:powderblue;`。 */
  readonly powderblue: Property.Fill | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:purple;`。 */
  readonly purple: Property.Fill | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:rebeccapurple;`。 */
  readonly rebeccapurple: Property.Fill | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:red;`。 */
  readonly red: Property.Fill | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill:revert;`。
   */
  readonly revert: Property.Fill | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill:revert-layer;`。
   */
  readonly revertLayer: Property.Fill | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:rosybrown;`。 */
  readonly rosybrown: Property.Fill | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:royalblue;`。 */
  readonly royalblue: Property.Fill | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:saddlebrown;`。 */
  readonly saddlebrown: Property.Fill | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:salmon;`。 */
  readonly salmon: Property.Fill | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:sandybrown;`。 */
  readonly sandybrown: Property.Fill | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:seagreen;`。 */
  readonly seagreen: Property.Fill | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:seashell;`。 */
  readonly seashell: Property.Fill | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:sienna;`。 */
  readonly sienna: Property.Fill | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:silver;`。 */
  readonly silver: Property.Fill | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:skyblue;`。 */
  readonly skyblue: Property.Fill | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:slateblue;`。 */
  readonly slateblue: Property.Fill | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:slategray;`。 */
  readonly slategray: Property.Fill | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:slategrey;`。 */
  readonly slategrey: Property.Fill | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:snow;`。 */
  readonly snow: Property.Fill | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:springgreen;`。 */
  readonly springgreen: Property.Fill | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:steelblue;`。 */
  readonly steelblue: Property.Fill | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:tan;`。 */
  readonly tan: Property.Fill | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:teal;`。 */
  readonly teal: Property.Fill | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:thistle;`。 */
  readonly thistle: Property.Fill | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:tomato;`。 */
  readonly tomato: Property.Fill | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`fill:transparent;`。
   */
  readonly transparent: Property.Fill | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:turquoise;`。 */
  readonly turquoise: Property.Fill | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill:unset;`。
   */
  readonly unset: Property.Fill | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:violet;`。 */
  readonly violet: Property.Fill | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:wheat;`。 */
  readonly wheat: Property.Fill | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:white;`。 */
  readonly white: Property.Fill | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:whitesmoke;`。 */
  readonly whitesmoke: Property.Fill | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:yellow;`。 */
  readonly yellow: Property.Fill | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`fill:yellowgreen;`。 */
  readonly yellowgreen: Property.Fill | CssString = 'yellowgreen';
}

/**
 * 设置 SVG 图形内部的填充绘制方式。（fill）
 *
 * CSS 初始值：`black`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
 */
export class FillCss extends CssProperty {
  /** CSS 声明：`fill:AccentColor;`。 */
  readonly AccentColor: string = 'fill:AccentColor;';
  /** CSS 声明：`fill:AccentColorText;`。 */
  readonly AccentColorText: string = 'fill:AccentColorText;';
  /** CSS 声明：`fill:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'fill:ActiveBorder;';
  /** CSS 声明：`fill:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'fill:ActiveCaption;';
  /** CSS 声明：`fill:ActiveText;`。 */
  readonly ActiveText: string = 'fill:ActiveText;';
  /** CSS 声明：`fill:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'fill:AppWorkspace;';
  /** CSS 声明：`fill:Background;`。 */
  readonly Background: string = 'fill:Background;';
  /** CSS 声明：`fill:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'fill:ButtonBorder;';
  /** CSS 声明：`fill:ButtonFace;`。 */
  readonly ButtonFace: string = 'fill:ButtonFace;';
  /** CSS 声明：`fill:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'fill:ButtonHighlight;';
  /** CSS 声明：`fill:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'fill:ButtonShadow;';
  /** CSS 声明：`fill:ButtonText;`。 */
  readonly ButtonText: string = 'fill:ButtonText;';
  /** CSS 声明：`fill:Canvas;`。 */
  readonly Canvas: string = 'fill:Canvas;';
  /** CSS 声明：`fill:CanvasText;`。 */
  readonly CanvasText: string = 'fill:CanvasText;';
  /** CSS 声明：`fill:CaptionText;`。 */
  readonly CaptionText: string = 'fill:CaptionText;';
  /** CSS 声明：`fill:Field;`。 */
  readonly Field: string = 'fill:Field;';
  /** CSS 声明：`fill:FieldText;`。 */
  readonly FieldText: string = 'fill:FieldText;';
  /** CSS 声明：`fill:GrayText;`。 */
  readonly GrayText: string = 'fill:GrayText;';
  /** CSS 声明：`fill:Highlight;`。 */
  readonly Highlight: string = 'fill:Highlight;';
  /** CSS 声明：`fill:HighlightText;`。 */
  readonly HighlightText: string = 'fill:HighlightText;';
  /** CSS 声明：`fill:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'fill:InactiveBorder;';
  /** CSS 声明：`fill:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'fill:InactiveCaption;';
  /** CSS 声明：`fill:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'fill:InactiveCaptionText;';
  /** CSS 声明：`fill:InfoBackground;`。 */
  readonly InfoBackground: string = 'fill:InfoBackground;';
  /** CSS 声明：`fill:InfoText;`。 */
  readonly InfoText: string = 'fill:InfoText;';
  /** CSS 声明：`fill:LinkText;`。 */
  readonly LinkText: string = 'fill:LinkText;';
  /** CSS 声明：`fill:Mark;`。 */
  readonly Mark: string = 'fill:Mark;';
  /** CSS 声明：`fill:MarkText;`。 */
  readonly MarkText: string = 'fill:MarkText;';
  /** CSS 声明：`fill:Menu;`。 */
  readonly Menu: string = 'fill:Menu;';
  /** CSS 声明：`fill:MenuText;`。 */
  readonly MenuText: string = 'fill:MenuText;';
  /** CSS 声明：`fill:Scrollbar;`。 */
  readonly Scrollbar: string = 'fill:Scrollbar;';
  /** CSS 声明：`fill:SelectedItem;`。 */
  readonly SelectedItem: string = 'fill:SelectedItem;';
  /** CSS 声明：`fill:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'fill:SelectedItemText;';
  /** CSS 声明：`fill:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'fill:ThreeDDarkShadow;';
  /** CSS 声明：`fill:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'fill:ThreeDFace;';
  /** CSS 声明：`fill:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'fill:ThreeDHighlight;';
  /** CSS 声明：`fill:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'fill:ThreeDLightShadow;';
  /** CSS 声明：`fill:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'fill:ThreeDShadow;';
  /** CSS 声明：`fill:VisitedText;`。 */
  readonly VisitedText: string = 'fill:VisitedText;';
  /** CSS 声明：`fill:Window;`。 */
  readonly Window: string = 'fill:Window;';
  /** CSS 声明：`fill:WindowFrame;`。 */
  readonly WindowFrame: string = 'fill:WindowFrame;';
  /** CSS 声明：`fill:WindowText;`。 */
  readonly WindowText: string = 'fill:WindowText;';
  /** CSS 声明：`fill:aliceblue;`。 */
  readonly aliceblue: string = 'fill:aliceblue;';
  /** CSS 声明：`fill:antiquewhite;`。 */
  readonly antiquewhite: string = 'fill:antiquewhite;';
  /** CSS 声明：`fill:aqua;`。 */
  readonly aqua: string = 'fill:aqua;';
  /** CSS 声明：`fill:aquamarine;`。 */
  readonly aquamarine: string = 'fill:aquamarine;';
  /** CSS 声明：`fill:azure;`。 */
  readonly azure: string = 'fill:azure;';
  /** CSS 声明：`fill:beige;`。 */
  readonly beige: string = 'fill:beige;';
  /** CSS 声明：`fill:bisque;`。 */
  readonly bisque: string = 'fill:bisque;';
  /** CSS 声明：`fill:black;`。 */
  readonly black: string = 'fill:black;';
  /** CSS 声明：`fill:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'fill:blanchedalmond;';
  /** CSS 声明：`fill:blue;`。 */
  readonly blue: string = 'fill:blue;';
  /** CSS 声明：`fill:blueviolet;`。 */
  readonly blueviolet: string = 'fill:blueviolet;';
  /** CSS 声明：`fill:brown;`。 */
  readonly brown: string = 'fill:brown;';
  /** CSS 声明：`fill:burlywood;`。 */
  readonly burlywood: string = 'fill:burlywood;';
  /** CSS 声明：`fill:cadetblue;`。 */
  readonly cadetblue: string = 'fill:cadetblue;';
  /** CSS 声明：`fill:chartreuse;`。 */
  readonly chartreuse: string = 'fill:chartreuse;';
  /** CSS 声明：`fill:chocolate;`。 */
  readonly chocolate: string = 'fill:chocolate;';
  /** CSS 声明：`fill:context-fill;`。 */
  readonly contextFill: string = 'fill:context-fill;';
  /** CSS 声明：`fill:context-stroke;`。 */
  readonly contextStroke: string = 'fill:context-stroke;';
  /** CSS 声明：`fill:coral;`。 */
  readonly coral: string = 'fill:coral;';
  /** CSS 声明：`fill:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'fill:cornflowerblue;';
  /** CSS 声明：`fill:cornsilk;`。 */
  readonly cornsilk: string = 'fill:cornsilk;';
  /** CSS 声明：`fill:crimson;`。 */
  readonly crimson: string = 'fill:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`fill:currentColor;`。
   */
  readonly currentColor: string = 'fill:currentColor;';
  /** CSS 声明：`fill:cyan;`。 */
  readonly cyan: string = 'fill:cyan;';
  /** CSS 声明：`fill:darkblue;`。 */
  readonly darkblue: string = 'fill:darkblue;';
  /** CSS 声明：`fill:darkcyan;`。 */
  readonly darkcyan: string = 'fill:darkcyan;';
  /** CSS 声明：`fill:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'fill:darkgoldenrod;';
  /** CSS 声明：`fill:darkgray;`。 */
  readonly darkgray: string = 'fill:darkgray;';
  /** CSS 声明：`fill:darkgreen;`。 */
  readonly darkgreen: string = 'fill:darkgreen;';
  /** CSS 声明：`fill:darkgrey;`。 */
  readonly darkgrey: string = 'fill:darkgrey;';
  /** CSS 声明：`fill:darkkhaki;`。 */
  readonly darkkhaki: string = 'fill:darkkhaki;';
  /** CSS 声明：`fill:darkmagenta;`。 */
  readonly darkmagenta: string = 'fill:darkmagenta;';
  /** CSS 声明：`fill:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'fill:darkolivegreen;';
  /** CSS 声明：`fill:darkorange;`。 */
  readonly darkorange: string = 'fill:darkorange;';
  /** CSS 声明：`fill:darkorchid;`。 */
  readonly darkorchid: string = 'fill:darkorchid;';
  /** CSS 声明：`fill:darkred;`。 */
  readonly darkred: string = 'fill:darkred;';
  /** CSS 声明：`fill:darksalmon;`。 */
  readonly darksalmon: string = 'fill:darksalmon;';
  /** CSS 声明：`fill:darkseagreen;`。 */
  readonly darkseagreen: string = 'fill:darkseagreen;';
  /** CSS 声明：`fill:darkslateblue;`。 */
  readonly darkslateblue: string = 'fill:darkslateblue;';
  /** CSS 声明：`fill:darkslategray;`。 */
  readonly darkslategray: string = 'fill:darkslategray;';
  /** CSS 声明：`fill:darkslategrey;`。 */
  readonly darkslategrey: string = 'fill:darkslategrey;';
  /** CSS 声明：`fill:darkturquoise;`。 */
  readonly darkturquoise: string = 'fill:darkturquoise;';
  /** CSS 声明：`fill:darkviolet;`。 */
  readonly darkviolet: string = 'fill:darkviolet;';
  /** CSS 声明：`fill:deeppink;`。 */
  readonly deeppink: string = 'fill:deeppink;';
  /** CSS 声明：`fill:deepskyblue;`。 */
  readonly deepskyblue: string = 'fill:deepskyblue;';
  /** CSS 声明：`fill:dimgray;`。 */
  readonly dimgray: string = 'fill:dimgray;';
  /** CSS 声明：`fill:dimgrey;`。 */
  readonly dimgrey: string = 'fill:dimgrey;';
  /** CSS 声明：`fill:dodgerblue;`。 */
  readonly dodgerblue: string = 'fill:dodgerblue;';
  /** CSS 声明：`fill:firebrick;`。 */
  readonly firebrick: string = 'fill:firebrick;';
  /** CSS 声明：`fill:floralwhite;`。 */
  readonly floralwhite: string = 'fill:floralwhite;';
  /** CSS 声明：`fill:forestgreen;`。 */
  readonly forestgreen: string = 'fill:forestgreen;';
  /** CSS 声明：`fill:fuchsia;`。 */
  readonly fuchsia: string = 'fill:fuchsia;';
  /** CSS 声明：`fill:gainsboro;`。 */
  readonly gainsboro: string = 'fill:gainsboro;';
  /** CSS 声明：`fill:ghostwhite;`。 */
  readonly ghostwhite: string = 'fill:ghostwhite;';
  /** CSS 声明：`fill:gold;`。 */
  readonly gold: string = 'fill:gold;';
  /** CSS 声明：`fill:goldenrod;`。 */
  readonly goldenrod: string = 'fill:goldenrod;';
  /** CSS 声明：`fill:gray;`。 */
  readonly gray: string = 'fill:gray;';
  /** CSS 声明：`fill:green;`。 */
  readonly green: string = 'fill:green;';
  /** CSS 声明：`fill:greenyellow;`。 */
  readonly greenyellow: string = 'fill:greenyellow;';
  /** CSS 声明：`fill:grey;`。 */
  readonly grey: string = 'fill:grey;';
  /** CSS 声明：`fill:honeydew;`。 */
  readonly honeydew: string = 'fill:honeydew;';
  /** CSS 声明：`fill:hotpink;`。 */
  readonly hotpink: string = 'fill:hotpink;';
  /** CSS 声明：`fill:indianred;`。 */
  readonly indianred: string = 'fill:indianred;';
  /** CSS 声明：`fill:indigo;`。 */
  readonly indigo: string = 'fill:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill:inherit;`。
   */
  readonly inherit: string = 'fill:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill:initial;`。
   */
  readonly initial: string = 'fill:initial;';
  /** CSS 声明：`fill:ivory;`。 */
  readonly ivory: string = 'fill:ivory;';
  /** CSS 声明：`fill:khaki;`。 */
  readonly khaki: string = 'fill:khaki;';
  /** CSS 声明：`fill:lavender;`。 */
  readonly lavender: string = 'fill:lavender;';
  /** CSS 声明：`fill:lavenderblush;`。 */
  readonly lavenderblush: string = 'fill:lavenderblush;';
  /** CSS 声明：`fill:lawngreen;`。 */
  readonly lawngreen: string = 'fill:lawngreen;';
  /** CSS 声明：`fill:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'fill:lemonchiffon;';
  /** CSS 声明：`fill:lightblue;`。 */
  readonly lightblue: string = 'fill:lightblue;';
  /** CSS 声明：`fill:lightcoral;`。 */
  readonly lightcoral: string = 'fill:lightcoral;';
  /** CSS 声明：`fill:lightcyan;`。 */
  readonly lightcyan: string = 'fill:lightcyan;';
  /** CSS 声明：`fill:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'fill:lightgoldenrodyellow;';
  /** CSS 声明：`fill:lightgray;`。 */
  readonly lightgray: string = 'fill:lightgray;';
  /** CSS 声明：`fill:lightgreen;`。 */
  readonly lightgreen: string = 'fill:lightgreen;';
  /** CSS 声明：`fill:lightgrey;`。 */
  readonly lightgrey: string = 'fill:lightgrey;';
  /** CSS 声明：`fill:lightpink;`。 */
  readonly lightpink: string = 'fill:lightpink;';
  /** CSS 声明：`fill:lightsalmon;`。 */
  readonly lightsalmon: string = 'fill:lightsalmon;';
  /** CSS 声明：`fill:lightseagreen;`。 */
  readonly lightseagreen: string = 'fill:lightseagreen;';
  /** CSS 声明：`fill:lightskyblue;`。 */
  readonly lightskyblue: string = 'fill:lightskyblue;';
  /** CSS 声明：`fill:lightslategray;`。 */
  readonly lightslategray: string = 'fill:lightslategray;';
  /** CSS 声明：`fill:lightslategrey;`。 */
  readonly lightslategrey: string = 'fill:lightslategrey;';
  /** CSS 声明：`fill:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'fill:lightsteelblue;';
  /** CSS 声明：`fill:lightyellow;`。 */
  readonly lightyellow: string = 'fill:lightyellow;';
  /** CSS 声明：`fill:lime;`。 */
  readonly lime: string = 'fill:lime;';
  /** CSS 声明：`fill:limegreen;`。 */
  readonly limegreen: string = 'fill:limegreen;';
  /** CSS 声明：`fill:linen;`。 */
  readonly linen: string = 'fill:linen;';
  /** CSS 声明：`fill:magenta;`。 */
  readonly magenta: string = 'fill:magenta;';
  /** CSS 声明：`fill:maroon;`。 */
  readonly maroon: string = 'fill:maroon;';
  /** CSS 声明：`fill:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'fill:mediumaquamarine;';
  /** CSS 声明：`fill:mediumblue;`。 */
  readonly mediumblue: string = 'fill:mediumblue;';
  /** CSS 声明：`fill:mediumorchid;`。 */
  readonly mediumorchid: string = 'fill:mediumorchid;';
  /** CSS 声明：`fill:mediumpurple;`。 */
  readonly mediumpurple: string = 'fill:mediumpurple;';
  /** CSS 声明：`fill:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'fill:mediumseagreen;';
  /** CSS 声明：`fill:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'fill:mediumslateblue;';
  /** CSS 声明：`fill:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'fill:mediumspringgreen;';
  /** CSS 声明：`fill:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'fill:mediumturquoise;';
  /** CSS 声明：`fill:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'fill:mediumvioletred;';
  /** CSS 声明：`fill:midnightblue;`。 */
  readonly midnightblue: string = 'fill:midnightblue;';
  /** CSS 声明：`fill:mintcream;`。 */
  readonly mintcream: string = 'fill:mintcream;';
  /** CSS 声明：`fill:mistyrose;`。 */
  readonly mistyrose: string = 'fill:mistyrose;';
  /** CSS 声明：`fill:moccasin;`。 */
  readonly moccasin: string = 'fill:moccasin;';
  /** CSS 声明：`fill:navajowhite;`。 */
  readonly navajowhite: string = 'fill:navajowhite;';
  /** CSS 声明：`fill:navy;`。 */
  readonly navy: string = 'fill:navy;';
  /** CSS 声明：`fill:none;`。 */
  readonly none: string = 'fill:none;';
  /** CSS 声明：`fill:oldlace;`。 */
  readonly oldlace: string = 'fill:oldlace;';
  /** CSS 声明：`fill:olive;`。 */
  readonly olive: string = 'fill:olive;';
  /** CSS 声明：`fill:olivedrab;`。 */
  readonly olivedrab: string = 'fill:olivedrab;';
  /** CSS 声明：`fill:orange;`。 */
  readonly orange: string = 'fill:orange;';
  /** CSS 声明：`fill:orangered;`。 */
  readonly orangered: string = 'fill:orangered;';
  /** CSS 声明：`fill:orchid;`。 */
  readonly orchid: string = 'fill:orchid;';
  /** CSS 声明：`fill:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'fill:palegoldenrod;';
  /** CSS 声明：`fill:palegreen;`。 */
  readonly palegreen: string = 'fill:palegreen;';
  /** CSS 声明：`fill:paleturquoise;`。 */
  readonly paleturquoise: string = 'fill:paleturquoise;';
  /** CSS 声明：`fill:palevioletred;`。 */
  readonly palevioletred: string = 'fill:palevioletred;';
  /** CSS 声明：`fill:papayawhip;`。 */
  readonly papayawhip: string = 'fill:papayawhip;';
  /** CSS 声明：`fill:peachpuff;`。 */
  readonly peachpuff: string = 'fill:peachpuff;';
  /** CSS 声明：`fill:peru;`。 */
  readonly peru: string = 'fill:peru;';
  /** CSS 声明：`fill:pink;`。 */
  readonly pink: string = 'fill:pink;';
  /** CSS 声明：`fill:plum;`。 */
  readonly plum: string = 'fill:plum;';
  /** CSS 声明：`fill:powderblue;`。 */
  readonly powderblue: string = 'fill:powderblue;';
  /** CSS 声明：`fill:purple;`。 */
  readonly purple: string = 'fill:purple;';
  /** CSS 声明：`fill:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'fill:rebeccapurple;';
  /** CSS 声明：`fill:red;`。 */
  readonly red: string = 'fill:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill:revert;`。
   */
  readonly revert: string = 'fill:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill:revert-layer;`。
   */
  readonly revertLayer: string = 'fill:revert-layer;';
  /** CSS 声明：`fill:rosybrown;`。 */
  readonly rosybrown: string = 'fill:rosybrown;';
  /** CSS 声明：`fill:royalblue;`。 */
  readonly royalblue: string = 'fill:royalblue;';
  /** CSS 声明：`fill:saddlebrown;`。 */
  readonly saddlebrown: string = 'fill:saddlebrown;';
  /** CSS 声明：`fill:salmon;`。 */
  readonly salmon: string = 'fill:salmon;';
  /** CSS 声明：`fill:sandybrown;`。 */
  readonly sandybrown: string = 'fill:sandybrown;';
  /** CSS 声明：`fill:seagreen;`。 */
  readonly seagreen: string = 'fill:seagreen;';
  /** CSS 声明：`fill:seashell;`。 */
  readonly seashell: string = 'fill:seashell;';
  /** CSS 声明：`fill:sienna;`。 */
  readonly sienna: string = 'fill:sienna;';
  /** CSS 声明：`fill:silver;`。 */
  readonly silver: string = 'fill:silver;';
  /** CSS 声明：`fill:skyblue;`。 */
  readonly skyblue: string = 'fill:skyblue;';
  /** CSS 声明：`fill:slateblue;`。 */
  readonly slateblue: string = 'fill:slateblue;';
  /** CSS 声明：`fill:slategray;`。 */
  readonly slategray: string = 'fill:slategray;';
  /** CSS 声明：`fill:slategrey;`。 */
  readonly slategrey: string = 'fill:slategrey;';
  /** CSS 声明：`fill:snow;`。 */
  readonly snow: string = 'fill:snow;';
  /** CSS 声明：`fill:springgreen;`。 */
  readonly springgreen: string = 'fill:springgreen;';
  /** CSS 声明：`fill:steelblue;`。 */
  readonly steelblue: string = 'fill:steelblue;';
  /** CSS 声明：`fill:tan;`。 */
  readonly tan: string = 'fill:tan;';
  /** CSS 声明：`fill:teal;`。 */
  readonly teal: string = 'fill:teal;';
  /** CSS 声明：`fill:thistle;`。 */
  readonly thistle: string = 'fill:thistle;';
  /** CSS 声明：`fill:tomato;`。 */
  readonly tomato: string = 'fill:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`fill:transparent;`。
   */
  readonly transparent: string = 'fill:transparent;';
  /** CSS 声明：`fill:turquoise;`。 */
  readonly turquoise: string = 'fill:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill:unset;`。
   */
  readonly unset: string = 'fill:unset;';
  /** CSS 声明：`fill:violet;`。 */
  readonly violet: string = 'fill:violet;';
  /** CSS 声明：`fill:wheat;`。 */
  readonly wheat: string = 'fill:wheat;';
  /** CSS 声明：`fill:white;`。 */
  readonly white: string = 'fill:white;';
  /** CSS 声明：`fill:whitesmoke;`。 */
  readonly whitesmoke: string = 'fill:whitesmoke;';
  /** CSS 声明：`fill:yellow;`。 */
  readonly yellow: string = 'fill:yellow;';
  /** CSS 声明：`fill:yellowgreen;`。 */
  readonly yellowgreen: string = 'fill:yellowgreen;';
  /**
   * 创建 fill 属性作者；普通使用通过 s.fill 取得共享实例。
   * @example
   * class CustomFillCss extends FillCss {}
   */
  constructor() {
    super('fill');
  }
  /**
   * 原样生成 fill 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 fill:value;。
   * @example
   * s.fill.raw('inherit') // fill:inherit;
   */
  raw(value: Property.Fill | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.fill.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.fill.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.fill.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.fill.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/**
 * fill-opacity 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FillOpacityKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill-opacity:inherit;`。
   */
  readonly inherit: Property.FillOpacity | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill-opacity:initial;`。
   */
  readonly initial: Property.FillOpacity | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill-opacity:revert;`。
   */
  readonly revert: Property.FillOpacity | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill-opacity:revert-layer;`。
   */
  readonly revertLayer: Property.FillOpacity | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill-opacity:unset;`。
   */
  readonly unset: Property.FillOpacity | CssString = 'unset';
}

/**
 * 设置 SVG 填充的不透明度，不影响描边。（fill-opacity）
 *
 * CSS 初始值：`1`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
 */
export class FillOpacityCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill-opacity:inherit;`。
   */
  readonly inherit: string = 'fill-opacity:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill-opacity:initial;`。
   */
  readonly initial: string = 'fill-opacity:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill-opacity:revert;`。
   */
  readonly revert: string = 'fill-opacity:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill-opacity:revert-layer;`。
   */
  readonly revertLayer: string = 'fill-opacity:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill-opacity:unset;`。
   */
  readonly unset: string = 'fill-opacity:unset;';
  /**
   * 创建 fill-opacity 属性作者；普通使用通过 s.fillOpacity 取得共享实例。
   * @example
   * class CustomFillOpacityCss extends FillOpacityCss {}
   */
  constructor() {
    super('fill-opacity');
  }
  /**
   * 原样生成 fill-opacity 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 fill-opacity:value;。
   * @example
   * s.fillOpacity.raw('inherit') // fill-opacity:inherit;
   */
  raw(value: Property.FillOpacity | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.fillOpacity.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.fillOpacity.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FillOpacity | CssString,
    ...others: (Property.FillOpacity | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.fillOpacity.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FillOpacity | CssString,
    ...others: (Property.FillOpacity | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.fillOpacity.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FillOpacity | CssString,
    preferred: Property.FillOpacity | CssString,
    maximum: Property.FillOpacity | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * fill-rule 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FillRuleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按射线穿过路径次数的奇偶性判断内部，适合交叠或有孔路径。
   *
   * CSS 声明：`fill-rule:evenodd;`。
   */
  readonly evenodd: Property.FillRule | CssString = 'evenodd';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill-rule:inherit;`。
   */
  readonly inherit: Property.FillRule | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill-rule:initial;`。
   */
  readonly initial: Property.FillRule | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按有方向的绕数判断路径内部，子路径方向会影响结果。
   *
   * CSS 声明：`fill-rule:nonzero;`。
   */
  readonly nonzero: Property.FillRule | CssString = 'nonzero';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill-rule:revert;`。
   */
  readonly revert: Property.FillRule | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill-rule:revert-layer;`。
   */
  readonly revertLayer: Property.FillRule | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill-rule:unset;`。
   */
  readonly unset: Property.FillRule | CssString = 'unset';
}

/**
 * 设置复杂 SVG 路径的内部区域判定规则。（fill-rule）
 *
 * CSS 初始值：`nonzero`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
 */
export class FillRuleCss extends CssProperty {
  /**
   * 按射线穿过路径次数的奇偶性判断内部，适合交叠或有孔路径。
   *
   * CSS 声明：`fill-rule:evenodd;`。
   */
  readonly evenodd: string = 'fill-rule:evenodd;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill-rule:inherit;`。
   */
  readonly inherit: string = 'fill-rule:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill-rule:initial;`。
   */
  readonly initial: string = 'fill-rule:initial;';
  /**
   * 按有方向的绕数判断路径内部，子路径方向会影响结果。
   *
   * CSS 声明：`fill-rule:nonzero;`。
   */
  readonly nonzero: string = 'fill-rule:nonzero;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill-rule:revert;`。
   */
  readonly revert: string = 'fill-rule:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill-rule:revert-layer;`。
   */
  readonly revertLayer: string = 'fill-rule:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill-rule:unset;`。
   */
  readonly unset: string = 'fill-rule:unset;';
  /**
   * 创建 fill-rule 属性作者；普通使用通过 s.fillRule 取得共享实例。
   * @example
   * class CustomFillRuleCss extends FillRuleCss {}
   */
  constructor() {
    super('fill-rule');
  }
  /**
   * 原样生成 fill-rule 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 fill-rule:value;。
   * @example
   * s.fillRule.raw('inherit') // fill-rule:inherit;
   */
  raw(value: Property.FillRule | CssString): string {
    return this.declaration(value);
  }
}

/**
 * filter 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FilterKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`filter:inherit;`。
   */
  readonly inherit: Property.Filter | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`filter:initial;`。
   */
  readonly initial: Property.Filter | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`filter:none;`。 */
  readonly none: Property.Filter | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`filter:revert;`。
   */
  readonly revert: Property.Filter | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`filter:revert-layer;`。
   */
  readonly revertLayer: Property.Filter | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`filter:unset;`。
   */
  readonly unset: Property.Filter | CssString = 'unset';
}

/**
 * 对元素的最终图像应用模糊、亮度等滤镜。（filter）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
 */
export class FilterCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`filter:inherit;`。
   */
  readonly inherit: string = 'filter:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`filter:initial;`。
   */
  readonly initial: string = 'filter:initial;';
  /** CSS 声明：`filter:none;`。 */
  readonly none: string = 'filter:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`filter:revert;`。
   */
  readonly revert: string = 'filter:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`filter:revert-layer;`。
   */
  readonly revertLayer: string = 'filter:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`filter:unset;`。
   */
  readonly unset: string = 'filter:unset;';
  /**
   * 创建 filter 属性作者；普通使用通过 s.filter 取得共享实例。
   * @example
   * class CustomFilterCss extends FilterCss {}
   */
  constructor() {
    super('filter');
  }
  /**
   * 原样生成 filter 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 filter:value;。
   * @example
   * s.filter.raw('inherit') // filter:inherit;
   */
  raw(value: Property.Filter | CssString): string {
    return this.declaration(value);
  }
}

/**
 * flex 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FlexKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 等价于 1 1 auto：可增长、可收缩，基础尺寸由主尺寸属性或内容决定。
   *
   * 区别：1 1 0% 以零百分比为基础分配，auto 的基础尺寸通常受内容或主尺寸属性影响。
   *
   * 适用场景：让项目以自身尺寸为基础参与剩余空间分配。
   *
   * 注意：最终比例还受最小/最大尺寸约束，不保证所有项目等宽。
   *
   * CSS 声明：`flex:auto;`。
   * @example
   * s.flex.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly auto: Property.Flex | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex:content;`。 */
  readonly content: Property.Flex | CssString = 'content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex:fit-content;`。 */
  readonly fitContent: Property.Flex | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex:inherit;`。
   */
  readonly inherit: Property.Flex | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex:initial;`。
   */
  readonly initial: Property.Flex | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex:max-content;`。 */
  readonly maxContent: Property.Flex | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex:min-content;`。 */
  readonly minContent: Property.Flex | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 等价于 0 0 auto：不增长也不收缩，保留自动基础尺寸。
   *
   * 区别：auto 会增长和收缩；none 两者都不参与。
   *
   * 适用场景：防止工具栏中的图标或固定控件被压缩。
   *
   * CSS 声明：`flex:none;`。
   * @example
   * s.flex.none
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly none: Property.Flex | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex:revert;`。
   */
  readonly revert: Property.Flex | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex:revert-layer;`。
   */
  readonly revertLayer: Property.Flex | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex:unset;`。
   */
  readonly unset: Property.Flex | CssString = 'unset';
}

/**
 * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。（flex）
 *
 * 依次对应 flex-grow、flex-shrink、flex-basis。作用于弹性项目，应先由父容器建立 Flex 布局。
 *
 * 常用值：
 * - `auto`：等价于 1 1 auto：可增长、可收缩，基础尺寸由主尺寸属性或内容决定。
 * - `none`：等价于 0 0 auto：不增长也不收缩，保留自动基础尺寸。
 *
 * 适用场景：分配弹性布局中的剩余空间，或让项目保持自身尺寸。
 * @example
 * s.flex.raw('1 1 0%')
 * @example
 * s.flex.none
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
 */
export class FlexCss extends LengthCssProperty {
  /**
   * 等价于 1 1 auto：可增长、可收缩，基础尺寸由主尺寸属性或内容决定。
   *
   * 区别：1 1 0% 以零百分比为基础分配，auto 的基础尺寸通常受内容或主尺寸属性影响。
   *
   * 适用场景：让项目以自身尺寸为基础参与剩余空间分配。
   *
   * 注意：最终比例还受最小/最大尺寸约束，不保证所有项目等宽。
   *
   * CSS 声明：`flex:auto;`。
   * @example
   * s.flex.auto
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly auto: string = 'flex:auto;';
  /** CSS 声明：`flex:content;`。 */
  readonly content: string = 'flex:content;';
  /** CSS 声明：`flex:fit-content;`。 */
  readonly fitContent: string = 'flex:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex:inherit;`。
   */
  readonly inherit: string = 'flex:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex:initial;`。
   */
  readonly initial: string = 'flex:initial;';
  /** CSS 声明：`flex:max-content;`。 */
  readonly maxContent: string = 'flex:max-content;';
  /** CSS 声明：`flex:min-content;`。 */
  readonly minContent: string = 'flex:min-content;';
  /**
   * 等价于 0 0 auto：不增长也不收缩，保留自动基础尺寸。
   *
   * 区别：auto 会增长和收缩；none 两者都不参与。
   *
   * 适用场景：防止工具栏中的图标或固定控件被压缩。
   *
   * CSS 声明：`flex:none;`。
   * @example
   * s.flex.none
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  readonly none: string = 'flex:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex:revert;`。
   */
  readonly revert: string = 'flex:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex:revert-layer;`。
   */
  readonly revertLayer: string = 'flex:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex:unset;`。
   */
  readonly unset: string = 'flex:unset;';
  /**
   * 创建 flex 属性作者；普通使用通过 s.flex 取得共享实例。
   * @example
   * class CustomFlexCss extends FlexCss {}
   */
  constructor() {
    super('flex');
  }
  /**
   * 原样生成 flex 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flex:value;。
   * @example
   * s.flex.raw('inherit') // flex:inherit;
   */
  raw(value: Property.Flex | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.flex.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.flex.min('var(--first)', 'var(--second)')
   */
  min(value: Property.Flex | CssString, ...others: (Property.Flex | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.flex.max('var(--first)', 'var(--second)')
   */
  max(value: Property.Flex | CssString, ...others: (Property.Flex | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.flex.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Flex | CssString,
    preferred: Property.Flex | CssString,
    maximum: Property.Flex | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * flex-basis 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FlexBasisKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 先参考主轴对应的 width 或 height；该值也为 auto 时由内容决定。
   *
   * CSS 声明：`flex-basis:auto;`。
   */
  readonly auto: Property.FlexBasis | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按内容确定基础尺寸，而不直接使用 width 或 height 作为基础尺寸。
   *
   * CSS 声明：`flex-basis:content;`。
   */
  readonly content: Property.FlexBasis | CssString = 'content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-basis:fit-content;`。 */
  readonly fitContent: Property.FlexBasis | CssString = 'fit-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-basis:inherit;`。
   */
  readonly inherit: Property.FlexBasis | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-basis:initial;`。
   */
  readonly initial: Property.FlexBasis | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-basis:max-content;`。 */
  readonly maxContent: Property.FlexBasis | CssString = 'max-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-basis:min-content;`。 */
  readonly minContent: Property.FlexBasis | CssString = 'min-content';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-basis:revert;`。
   */
  readonly revert: Property.FlexBasis | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-basis:revert-layer;`。
   */
  readonly revertLayer: Property.FlexBasis | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-basis:unset;`。
   */
  readonly unset: Property.FlexBasis | CssString = 'unset';
}

/**
 * 设置弹性项目分配剩余空间之前的主轴基础尺寸。（flex-basis）
 *
 * 在剩余空间分配前确定项目的主轴基础尺寸；设置为 auto 时先参考对应的 width/height。
 *
 * 常用值：
 * - `auto`：先参考主轴对应的 width 或 height；该值也为 auto 时由内容决定。
 * - `content`：按内容确定基础尺寸，而不直接使用 width 或 height 作为基础尺寸。
 *
 * 适用场景：为侧栏、内容区或重复项目指定弹性分配的起始尺寸。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * s.flexBasis.rem(16)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
 */
export class FlexBasisCss extends LengthCssProperty {
  /**
   * 先参考主轴对应的 width 或 height；该值也为 auto 时由内容决定。
   *
   * CSS 声明：`flex-basis:auto;`。
   */
  readonly auto: string = 'flex-basis:auto;';
  /**
   * 按内容确定基础尺寸，而不直接使用 width 或 height 作为基础尺寸。
   *
   * CSS 声明：`flex-basis:content;`。
   */
  readonly content: string = 'flex-basis:content;';
  /** CSS 声明：`flex-basis:fit-content;`。 */
  readonly fitContent: string = 'flex-basis:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-basis:inherit;`。
   */
  readonly inherit: string = 'flex-basis:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-basis:initial;`。
   */
  readonly initial: string = 'flex-basis:initial;';
  /** CSS 声明：`flex-basis:max-content;`。 */
  readonly maxContent: string = 'flex-basis:max-content;';
  /** CSS 声明：`flex-basis:min-content;`。 */
  readonly minContent: string = 'flex-basis:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-basis:revert;`。
   */
  readonly revert: string = 'flex-basis:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-basis:revert-layer;`。
   */
  readonly revertLayer: string = 'flex-basis:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-basis:unset;`。
   */
  readonly unset: string = 'flex-basis:unset;';
  /**
   * 创建 flex-basis 属性作者；普通使用通过 s.flexBasis 取得共享实例。
   * @example
   * class CustomFlexBasisCss extends FlexBasisCss {}
   */
  constructor() {
    super('flex-basis');
  }
  /**
   * 原样生成 flex-basis 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flex-basis:value;。
   * @example
   * s.flexBasis.raw('inherit') // flex-basis:inherit;
   */
  raw(value: Property.FlexBasis | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.flexBasis.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.flexBasis.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FlexBasis | CssString,
    ...others: (Property.FlexBasis | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.flexBasis.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FlexBasis | CssString,
    ...others: (Property.FlexBasis | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.flexBasis.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FlexBasis | CssString,
    preferred: Property.FlexBasis | CssString,
    maximum: Property.FlexBasis | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * flex-direction 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FlexDirectionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 主轴沿块方向排列；水平书写时通常从上到下。
   *
   * CSS 声明：`flex-direction:column;`。
   */
  readonly column: Property.FlexDirection | CssString = 'column';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   *
   * CSS 声明：`flex-direction:column-reverse;`。
   */
  readonly columnReverse: Property.FlexDirection | CssString = 'column-reverse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-direction:inherit;`。
   */
  readonly inherit: Property.FlexDirection | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-direction:initial;`。
   */
  readonly initial: Property.FlexDirection | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-direction:revert;`。
   */
  readonly revert: Property.FlexDirection | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-direction:revert-layer;`。
   */
  readonly revertLayer: Property.FlexDirection | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 主轴沿行内方向排列；不一定是从左到右，取决于书写方向。
   *
   * CSS 声明：`flex-direction:row;`。
   */
  readonly row: Property.FlexDirection | CssString = 'row';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   *
   * CSS 声明：`flex-direction:row-reverse;`。
   */
  readonly rowReverse: Property.FlexDirection | CssString = 'row-reverse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-direction:unset;`。
   */
  readonly unset: Property.FlexDirection | CssString = 'unset';
}

/**
 * 设置弹性容器的主轴方向及项目排列方向。（flex-direction）
 *
 * row 沿行内轴，column 沿块轴；不能始终按“水平/垂直”理解。反转只改变视觉排列，不改变 DOM 顺序。
 *
 * 常用值：
 * - `row`：主轴沿行内方向排列；不一定是从左到右，取决于书写方向。
 * - `column`：主轴沿块方向排列；水平书写时通常从上到下。
 * - `row-reverse`：反转行内方向的视觉排列，不改变 DOM 顺序。
 * - `column-reverse`：反转块方向的视觉排列，不改变 DOM 顺序。
 *
 * CSS 初始值：`row`（不同于浏览器默认样式表）。
 * @example
 * css(s.display.flex, s.flexDirection.column, s.gap.rem(1))
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
 */
export class FlexDirectionCss extends CssProperty {
  /**
   * 主轴沿块方向排列；水平书写时通常从上到下。
   *
   * CSS 声明：`flex-direction:column;`。
   */
  readonly column: string = 'flex-direction:column;';
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   *
   * CSS 声明：`flex-direction:column-reverse;`。
   */
  readonly columnReverse: string = 'flex-direction:column-reverse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-direction:inherit;`。
   */
  readonly inherit: string = 'flex-direction:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-direction:initial;`。
   */
  readonly initial: string = 'flex-direction:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-direction:revert;`。
   */
  readonly revert: string = 'flex-direction:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-direction:revert-layer;`。
   */
  readonly revertLayer: string = 'flex-direction:revert-layer;';
  /**
   * 主轴沿行内方向排列；不一定是从左到右，取决于书写方向。
   *
   * CSS 声明：`flex-direction:row;`。
   */
  readonly row: string = 'flex-direction:row;';
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   *
   * CSS 声明：`flex-direction:row-reverse;`。
   */
  readonly rowReverse: string = 'flex-direction:row-reverse;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-direction:unset;`。
   */
  readonly unset: string = 'flex-direction:unset;';
  /**
   * 创建 flex-direction 属性作者；普通使用通过 s.flexDirection 取得共享实例。
   * @example
   * class CustomFlexDirectionCss extends FlexDirectionCss {}
   */
  constructor() {
    super('flex-direction');
  }
  /**
   * 原样生成 flex-direction 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flex-direction:value;。
   * @example
   * s.flexDirection.raw('inherit') // flex-direction:inherit;
   */
  raw(value: Property.FlexDirection | CssString): string {
    return this.declaration(value);
  }
}

/**
 * flex-flow 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FlexFlowKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-flow:column;`。 */
  readonly column: Property.FlexFlow | CssString = 'column';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-flow:column-reverse;`。 */
  readonly columnReverse: Property.FlexFlow | CssString = 'column-reverse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-flow:inherit;`。
   */
  readonly inherit: Property.FlexFlow | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-flow:initial;`。
   */
  readonly initial: Property.FlexFlow | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-flow:nowrap;`。 */
  readonly nowrap: Property.FlexFlow | CssString = 'nowrap';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-flow:revert;`。
   */
  readonly revert: Property.FlexFlow | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-flow:revert-layer;`。
   */
  readonly revertLayer: Property.FlexFlow | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-flow:row;`。 */
  readonly row: Property.FlexFlow | CssString = 'row';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-flow:row-reverse;`。 */
  readonly rowReverse: Property.FlexFlow | CssString = 'row-reverse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-flow:unset;`。
   */
  readonly unset: Property.FlexFlow | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-flow:wrap;`。 */
  readonly wrap: Property.FlexFlow | CssString = 'wrap';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flex-flow:wrap-reverse;`。 */
  readonly wrapReverse: Property.FlexFlow | CssString = 'wrap-reverse';
}

/**
 * 同时设置弹性布局的主轴方向和换行方式。（flex-flow）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
 */
export class FlexFlowCss extends CssProperty {
  /** CSS 声明：`flex-flow:column;`。 */
  readonly column: string = 'flex-flow:column;';
  /** CSS 声明：`flex-flow:column-reverse;`。 */
  readonly columnReverse: string = 'flex-flow:column-reverse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-flow:inherit;`。
   */
  readonly inherit: string = 'flex-flow:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-flow:initial;`。
   */
  readonly initial: string = 'flex-flow:initial;';
  /** CSS 声明：`flex-flow:nowrap;`。 */
  readonly nowrap: string = 'flex-flow:nowrap;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-flow:revert;`。
   */
  readonly revert: string = 'flex-flow:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-flow:revert-layer;`。
   */
  readonly revertLayer: string = 'flex-flow:revert-layer;';
  /** CSS 声明：`flex-flow:row;`。 */
  readonly row: string = 'flex-flow:row;';
  /** CSS 声明：`flex-flow:row-reverse;`。 */
  readonly rowReverse: string = 'flex-flow:row-reverse;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-flow:unset;`。
   */
  readonly unset: string = 'flex-flow:unset;';
  /** CSS 声明：`flex-flow:wrap;`。 */
  readonly wrap: string = 'flex-flow:wrap;';
  /** CSS 声明：`flex-flow:wrap-reverse;`。 */
  readonly wrapReverse: string = 'flex-flow:wrap-reverse;';
  /**
   * 创建 flex-flow 属性作者；普通使用通过 s.flexFlow 取得共享实例。
   * @example
   * class CustomFlexFlowCss extends FlexFlowCss {}
   */
  constructor() {
    super('flex-flow');
  }
  /**
   * 原样生成 flex-flow 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flex-flow:value;。
   * @example
   * s.flexFlow.raw('inherit') // flex-flow:inherit;
   */
  raw(value: Property.FlexFlow | CssString): string {
    return this.declaration(value);
  }
}

/**
 * flex-grow 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FlexGrowKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-grow:inherit;`。
   */
  readonly inherit: Property.FlexGrow | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-grow:initial;`。
   */
  readonly initial: Property.FlexGrow | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-grow:revert;`。
   */
  readonly revert: Property.FlexGrow | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-grow:revert-layer;`。
   */
  readonly revertLayer: Property.FlexGrow | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-grow:unset;`。
   */
  readonly unset: Property.FlexGrow | CssString = 'unset';
}

/**
 * 设置弹性项目分配正剩余空间时的增长系数。（flex-grow）
 *
 * 数值是分配正剩余空间的相对权重，不是最终宽度百分比。只有容器存在剩余空间时才发挥作用。
 *
 * 适用场景：让主内容区填充工具栏或行布局的剩余空间。
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @example
 * s.flexGrow.raw(1)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
 */
export class FlexGrowCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-grow:inherit;`。
   */
  readonly inherit: string = 'flex-grow:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-grow:initial;`。
   */
  readonly initial: string = 'flex-grow:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-grow:revert;`。
   */
  readonly revert: string = 'flex-grow:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-grow:revert-layer;`。
   */
  readonly revertLayer: string = 'flex-grow:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-grow:unset;`。
   */
  readonly unset: string = 'flex-grow:unset;';
  /**
   * 创建 flex-grow 属性作者；普通使用通过 s.flexGrow 取得共享实例。
   * @example
   * class CustomFlexGrowCss extends FlexGrowCss {}
   */
  constructor() {
    super('flex-grow');
  }
  /**
   * 原样生成 flex-grow 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flex-grow:value;。
   * @example
   * s.flexGrow.raw('inherit') // flex-grow:inherit;
   */
  raw(value: Property.FlexGrow | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.flexGrow.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.flexGrow.min('var(--first)', 'var(--second)')
   */
  min(value: Property.FlexGrow | CssString, ...others: (Property.FlexGrow | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.flexGrow.max('var(--first)', 'var(--second)')
   */
  max(value: Property.FlexGrow | CssString, ...others: (Property.FlexGrow | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.flexGrow.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FlexGrow | CssString,
    preferred: Property.FlexGrow | CssString,
    maximum: Property.FlexGrow | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * flex-shrink 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FlexShrinkKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-shrink:inherit;`。
   */
  readonly inherit: Property.FlexShrink | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-shrink:initial;`。
   */
  readonly initial: Property.FlexShrink | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-shrink:revert;`。
   */
  readonly revert: Property.FlexShrink | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-shrink:revert-layer;`。
   */
  readonly revertLayer: Property.FlexShrink | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-shrink:unset;`。
   */
  readonly unset: Property.FlexShrink | CssString = 'unset';
}

/**
 * 设置弹性项目空间不足时的收缩系数。（flex-shrink）
 *
 * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
 *
 * 适用场景：控制空间不足时是否允许缩小；设置为 0 可避免图标或固定控件收缩。
 *
 * CSS 初始值：`1`（不同于浏览器默认样式表）。
 * @example
 * s.flexShrink.raw(0)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
 */
export class FlexShrinkCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-shrink:inherit;`。
   */
  readonly inherit: string = 'flex-shrink:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-shrink:initial;`。
   */
  readonly initial: string = 'flex-shrink:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-shrink:revert;`。
   */
  readonly revert: string = 'flex-shrink:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-shrink:revert-layer;`。
   */
  readonly revertLayer: string = 'flex-shrink:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-shrink:unset;`。
   */
  readonly unset: string = 'flex-shrink:unset;';
  /**
   * 创建 flex-shrink 属性作者；普通使用通过 s.flexShrink 取得共享实例。
   * @example
   * class CustomFlexShrinkCss extends FlexShrinkCss {}
   */
  constructor() {
    super('flex-shrink');
  }
  /**
   * 原样生成 flex-shrink 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flex-shrink:value;。
   * @example
   * s.flexShrink.raw('inherit') // flex-shrink:inherit;
   */
  raw(value: Property.FlexShrink | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.flexShrink.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.flexShrink.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FlexShrink | CssString,
    ...others: (Property.FlexShrink | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.flexShrink.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FlexShrink | CssString,
    ...others: (Property.FlexShrink | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.flexShrink.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FlexShrink | CssString,
    preferred: Property.FlexShrink | CssString,
    maximum: Property.FlexShrink | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * flex-wrap 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FlexWrapKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-wrap:inherit;`。
   */
  readonly inherit: Property.FlexWrap | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-wrap:initial;`。
   */
  readonly initial: Property.FlexWrap | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 保持单行；项目仍可能收缩或溢出。
   *
   * CSS 声明：`flex-wrap:nowrap;`。
   */
  readonly nowrap: Property.FlexWrap | CssString = 'nowrap';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-wrap:revert;`。
   */
  readonly revert: Property.FlexWrap | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-wrap:revert-layer;`。
   */
  readonly revertLayer: Property.FlexWrap | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-wrap:unset;`。
   */
  readonly unset: Property.FlexWrap | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 空间不足时形成多行，沿交叉轴正常方向排列。
   *
   * 区别：nowrap 保持单行；wrap-reverse 反转交叉轴上各行的排列方向。
   *
   * 注意：换行不会自动均分每行项目宽度，尺寸仍由各项目的 flex 配置决定。
   *
   * CSS 声明：`flex-wrap:wrap;`。
   * @example
   * css(s.display.flex, s.flexWrap.wrap)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  readonly wrap: Property.FlexWrap | CssString = 'wrap';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 允许换行并反转交叉轴上各行的排列方向。
   *
   * CSS 声明：`flex-wrap:wrap-reverse;`。
   */
  readonly wrapReverse: Property.FlexWrap | CssString = 'wrap-reverse';
}

/**
 * 设置弹性项目是否换行，以及多行的排列方向。（flex-wrap）
 *
 * 常用值：
 * - `nowrap`：保持单行；项目仍可能收缩或溢出。
 * - `wrap`：空间不足时形成多行，沿交叉轴正常方向排列。
 * - `wrap-reverse`：允许换行并反转交叉轴上各行的排列方向。
 *
 * 适用场景：标签、按钮等项目不足一行时允许分行。
 *
 * CSS 初始值：`nowrap`（不同于浏览器默认样式表）。
 * @example
 * css(s.display.flex, s.flexWrap.wrap, s.gap.rem(0.5))
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
 */
export class FlexWrapCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-wrap:inherit;`。
   */
  readonly inherit: string = 'flex-wrap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-wrap:initial;`。
   */
  readonly initial: string = 'flex-wrap:initial;';
  /**
   * 保持单行；项目仍可能收缩或溢出。
   *
   * CSS 声明：`flex-wrap:nowrap;`。
   */
  readonly nowrap: string = 'flex-wrap:nowrap;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-wrap:revert;`。
   */
  readonly revert: string = 'flex-wrap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-wrap:revert-layer;`。
   */
  readonly revertLayer: string = 'flex-wrap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-wrap:unset;`。
   */
  readonly unset: string = 'flex-wrap:unset;';
  /**
   * 空间不足时形成多行，沿交叉轴正常方向排列。
   *
   * 区别：nowrap 保持单行；wrap-reverse 反转交叉轴上各行的排列方向。
   *
   * 注意：换行不会自动均分每行项目宽度，尺寸仍由各项目的 flex 配置决定。
   *
   * CSS 声明：`flex-wrap:wrap;`。
   * @example
   * css(s.display.flex, s.flexWrap.wrap)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  readonly wrap: string = 'flex-wrap:wrap;';
  /**
   * 允许换行并反转交叉轴上各行的排列方向。
   *
   * CSS 声明：`flex-wrap:wrap-reverse;`。
   */
  readonly wrapReverse: string = 'flex-wrap:wrap-reverse;';
  /**
   * 创建 flex-wrap 属性作者；普通使用通过 s.flexWrap 取得共享实例。
   * @example
   * class CustomFlexWrapCss extends FlexWrapCss {}
   */
  constructor() {
    super('flex-wrap');
  }
  /**
   * 原样生成 flex-wrap 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flex-wrap:value;。
   * @example
   * s.flexWrap.raw('inherit') // flex-wrap:inherit;
   */
  raw(value: Property.FlexWrap | CssString): string {
    return this.declaration(value);
  }
}

/**
 * float 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FloatKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`float:inherit;`。
   */
  readonly inherit: Property.Float | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`float:initial;`。
   */
  readonly initial: Property.Float | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`float:inline-end;`。 */
  readonly inlineEnd: Property.Float | CssString = 'inline-end';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`float:inline-start;`。 */
  readonly inlineStart: Property.Float | CssString = 'inline-start';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`float:left;`。 */
  readonly left: Property.Float | CssString = 'left';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`float:none;`。 */
  readonly none: Property.Float | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`float:revert;`。
   */
  readonly revert: Property.Float | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`float:revert-layer;`。
   */
  readonly revertLayer: Property.Float | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`float:right;`。 */
  readonly right: Property.Float | CssString = 'right';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`float:unset;`。
   */
  readonly unset: Property.Float | CssString = 'unset';
}

/**
 * 将元素浮动到指定侧，使相邻行内内容围绕它排列。（float）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
 */
export class FloatCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`float:inherit;`。
   */
  readonly inherit: string = 'float:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`float:initial;`。
   */
  readonly initial: string = 'float:initial;';
  /** CSS 声明：`float:inline-end;`。 */
  readonly inlineEnd: string = 'float:inline-end;';
  /** CSS 声明：`float:inline-start;`。 */
  readonly inlineStart: string = 'float:inline-start;';
  /** CSS 声明：`float:left;`。 */
  readonly left: string = 'float:left;';
  /** CSS 声明：`float:none;`。 */
  readonly none: string = 'float:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`float:revert;`。
   */
  readonly revert: string = 'float:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`float:revert-layer;`。
   */
  readonly revertLayer: string = 'float:revert-layer;';
  /** CSS 声明：`float:right;`。 */
  readonly right: string = 'float:right;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`float:unset;`。
   */
  readonly unset: string = 'float:unset;';
  /**
   * 创建 float 属性作者；普通使用通过 s.float 取得共享实例。
   * @example
   * class CustomFloatCss extends FloatCss {}
   */
  constructor() {
    super('float');
  }
  /**
   * 原样生成 float 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 float:value;。
   * @example
   * s.float.raw('inherit') // float:inherit;
   */
  raw(value: Property.Float | CssString): string {
    return this.declaration(value);
  }
}

/**
 * flood-color 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FloodColorKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:AccentColor;`。 */
  readonly AccentColor: Property.FloodColor | CssString = 'AccentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:AccentColorText;`。 */
  readonly AccentColorText: Property.FloodColor | CssString = 'AccentColorText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ActiveBorder;`。 */
  readonly ActiveBorder: Property.FloodColor | CssString = 'ActiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ActiveCaption;`。 */
  readonly ActiveCaption: Property.FloodColor | CssString = 'ActiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ActiveText;`。 */
  readonly ActiveText: Property.FloodColor | CssString = 'ActiveText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:AppWorkspace;`。 */
  readonly AppWorkspace: Property.FloodColor | CssString = 'AppWorkspace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Background;`。 */
  readonly Background: Property.FloodColor | CssString = 'Background';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ButtonBorder;`。 */
  readonly ButtonBorder: Property.FloodColor | CssString = 'ButtonBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ButtonFace;`。 */
  readonly ButtonFace: Property.FloodColor | CssString = 'ButtonFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: Property.FloodColor | CssString = 'ButtonHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ButtonShadow;`。 */
  readonly ButtonShadow: Property.FloodColor | CssString = 'ButtonShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ButtonText;`。 */
  readonly ButtonText: Property.FloodColor | CssString = 'ButtonText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Canvas;`。 */
  readonly Canvas: Property.FloodColor | CssString = 'Canvas';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:CanvasText;`。 */
  readonly CanvasText: Property.FloodColor | CssString = 'CanvasText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:CaptionText;`。 */
  readonly CaptionText: Property.FloodColor | CssString = 'CaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Field;`。 */
  readonly Field: Property.FloodColor | CssString = 'Field';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:FieldText;`。 */
  readonly FieldText: Property.FloodColor | CssString = 'FieldText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:GrayText;`。 */
  readonly GrayText: Property.FloodColor | CssString = 'GrayText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Highlight;`。 */
  readonly Highlight: Property.FloodColor | CssString = 'Highlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:HighlightText;`。 */
  readonly HighlightText: Property.FloodColor | CssString = 'HighlightText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:InactiveBorder;`。 */
  readonly InactiveBorder: Property.FloodColor | CssString = 'InactiveBorder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:InactiveCaption;`。 */
  readonly InactiveCaption: Property.FloodColor | CssString = 'InactiveCaption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: Property.FloodColor | CssString = 'InactiveCaptionText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:InfoBackground;`。 */
  readonly InfoBackground: Property.FloodColor | CssString = 'InfoBackground';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:InfoText;`。 */
  readonly InfoText: Property.FloodColor | CssString = 'InfoText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:LinkText;`。 */
  readonly LinkText: Property.FloodColor | CssString = 'LinkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Mark;`。 */
  readonly Mark: Property.FloodColor | CssString = 'Mark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:MarkText;`。 */
  readonly MarkText: Property.FloodColor | CssString = 'MarkText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Menu;`。 */
  readonly Menu: Property.FloodColor | CssString = 'Menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:MenuText;`。 */
  readonly MenuText: Property.FloodColor | CssString = 'MenuText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Scrollbar;`。 */
  readonly Scrollbar: Property.FloodColor | CssString = 'Scrollbar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:SelectedItem;`。 */
  readonly SelectedItem: Property.FloodColor | CssString = 'SelectedItem';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:SelectedItemText;`。 */
  readonly SelectedItemText: Property.FloodColor | CssString = 'SelectedItemText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: Property.FloodColor | CssString = 'ThreeDDarkShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ThreeDFace;`。 */
  readonly ThreeDFace: Property.FloodColor | CssString = 'ThreeDFace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: Property.FloodColor | CssString = 'ThreeDHighlight';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: Property.FloodColor | CssString = 'ThreeDLightShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: Property.FloodColor | CssString = 'ThreeDShadow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:VisitedText;`。 */
  readonly VisitedText: Property.FloodColor | CssString = 'VisitedText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:Window;`。 */
  readonly Window: Property.FloodColor | CssString = 'Window';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:WindowFrame;`。 */
  readonly WindowFrame: Property.FloodColor | CssString = 'WindowFrame';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:WindowText;`。 */
  readonly WindowText: Property.FloodColor | CssString = 'WindowText';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:aliceblue;`。 */
  readonly aliceblue: Property.FloodColor | CssString = 'aliceblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:antiquewhite;`。 */
  readonly antiquewhite: Property.FloodColor | CssString = 'antiquewhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:aqua;`。 */
  readonly aqua: Property.FloodColor | CssString = 'aqua';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:aquamarine;`。 */
  readonly aquamarine: Property.FloodColor | CssString = 'aquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:azure;`。 */
  readonly azure: Property.FloodColor | CssString = 'azure';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:beige;`。 */
  readonly beige: Property.FloodColor | CssString = 'beige';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:bisque;`。 */
  readonly bisque: Property.FloodColor | CssString = 'bisque';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:black;`。 */
  readonly black: Property.FloodColor | CssString = 'black';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:blanchedalmond;`。 */
  readonly blanchedalmond: Property.FloodColor | CssString = 'blanchedalmond';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:blue;`。 */
  readonly blue: Property.FloodColor | CssString = 'blue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:blueviolet;`。 */
  readonly blueviolet: Property.FloodColor | CssString = 'blueviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:brown;`。 */
  readonly brown: Property.FloodColor | CssString = 'brown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:burlywood;`。 */
  readonly burlywood: Property.FloodColor | CssString = 'burlywood';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:cadetblue;`。 */
  readonly cadetblue: Property.FloodColor | CssString = 'cadetblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:chartreuse;`。 */
  readonly chartreuse: Property.FloodColor | CssString = 'chartreuse';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:chocolate;`。 */
  readonly chocolate: Property.FloodColor | CssString = 'chocolate';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:coral;`。 */
  readonly coral: Property.FloodColor | CssString = 'coral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:cornflowerblue;`。 */
  readonly cornflowerblue: Property.FloodColor | CssString = 'cornflowerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:cornsilk;`。 */
  readonly cornsilk: Property.FloodColor | CssString = 'cornsilk';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:crimson;`。 */
  readonly crimson: Property.FloodColor | CssString = 'crimson';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`flood-color:currentColor;`。
   */
  readonly currentColor: Property.FloodColor | CssString = 'currentColor';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:cyan;`。 */
  readonly cyan: Property.FloodColor | CssString = 'cyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkblue;`。 */
  readonly darkblue: Property.FloodColor | CssString = 'darkblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkcyan;`。 */
  readonly darkcyan: Property.FloodColor | CssString = 'darkcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: Property.FloodColor | CssString = 'darkgoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkgray;`。 */
  readonly darkgray: Property.FloodColor | CssString = 'darkgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkgreen;`。 */
  readonly darkgreen: Property.FloodColor | CssString = 'darkgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkgrey;`。 */
  readonly darkgrey: Property.FloodColor | CssString = 'darkgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkkhaki;`。 */
  readonly darkkhaki: Property.FloodColor | CssString = 'darkkhaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkmagenta;`。 */
  readonly darkmagenta: Property.FloodColor | CssString = 'darkmagenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkolivegreen;`。 */
  readonly darkolivegreen: Property.FloodColor | CssString = 'darkolivegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkorange;`。 */
  readonly darkorange: Property.FloodColor | CssString = 'darkorange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkorchid;`。 */
  readonly darkorchid: Property.FloodColor | CssString = 'darkorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkred;`。 */
  readonly darkred: Property.FloodColor | CssString = 'darkred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darksalmon;`。 */
  readonly darksalmon: Property.FloodColor | CssString = 'darksalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkseagreen;`。 */
  readonly darkseagreen: Property.FloodColor | CssString = 'darkseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkslateblue;`。 */
  readonly darkslateblue: Property.FloodColor | CssString = 'darkslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkslategray;`。 */
  readonly darkslategray: Property.FloodColor | CssString = 'darkslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkslategrey;`。 */
  readonly darkslategrey: Property.FloodColor | CssString = 'darkslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkturquoise;`。 */
  readonly darkturquoise: Property.FloodColor | CssString = 'darkturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:darkviolet;`。 */
  readonly darkviolet: Property.FloodColor | CssString = 'darkviolet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:deeppink;`。 */
  readonly deeppink: Property.FloodColor | CssString = 'deeppink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:deepskyblue;`。 */
  readonly deepskyblue: Property.FloodColor | CssString = 'deepskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:dimgray;`。 */
  readonly dimgray: Property.FloodColor | CssString = 'dimgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:dimgrey;`。 */
  readonly dimgrey: Property.FloodColor | CssString = 'dimgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:dodgerblue;`。 */
  readonly dodgerblue: Property.FloodColor | CssString = 'dodgerblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:firebrick;`。 */
  readonly firebrick: Property.FloodColor | CssString = 'firebrick';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:floralwhite;`。 */
  readonly floralwhite: Property.FloodColor | CssString = 'floralwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:forestgreen;`。 */
  readonly forestgreen: Property.FloodColor | CssString = 'forestgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:fuchsia;`。 */
  readonly fuchsia: Property.FloodColor | CssString = 'fuchsia';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:gainsboro;`。 */
  readonly gainsboro: Property.FloodColor | CssString = 'gainsboro';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ghostwhite;`。 */
  readonly ghostwhite: Property.FloodColor | CssString = 'ghostwhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:gold;`。 */
  readonly gold: Property.FloodColor | CssString = 'gold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:goldenrod;`。 */
  readonly goldenrod: Property.FloodColor | CssString = 'goldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:gray;`。 */
  readonly gray: Property.FloodColor | CssString = 'gray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:green;`。 */
  readonly green: Property.FloodColor | CssString = 'green';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:greenyellow;`。 */
  readonly greenyellow: Property.FloodColor | CssString = 'greenyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:grey;`。 */
  readonly grey: Property.FloodColor | CssString = 'grey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:honeydew;`。 */
  readonly honeydew: Property.FloodColor | CssString = 'honeydew';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:hotpink;`。 */
  readonly hotpink: Property.FloodColor | CssString = 'hotpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:indianred;`。 */
  readonly indianred: Property.FloodColor | CssString = 'indianred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:indigo;`。 */
  readonly indigo: Property.FloodColor | CssString = 'indigo';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flood-color:inherit;`。
   */
  readonly inherit: Property.FloodColor | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flood-color:initial;`。
   */
  readonly initial: Property.FloodColor | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:ivory;`。 */
  readonly ivory: Property.FloodColor | CssString = 'ivory';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:khaki;`。 */
  readonly khaki: Property.FloodColor | CssString = 'khaki';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lavender;`。 */
  readonly lavender: Property.FloodColor | CssString = 'lavender';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lavenderblush;`。 */
  readonly lavenderblush: Property.FloodColor | CssString = 'lavenderblush';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lawngreen;`。 */
  readonly lawngreen: Property.FloodColor | CssString = 'lawngreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lemonchiffon;`。 */
  readonly lemonchiffon: Property.FloodColor | CssString = 'lemonchiffon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightblue;`。 */
  readonly lightblue: Property.FloodColor | CssString = 'lightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightcoral;`。 */
  readonly lightcoral: Property.FloodColor | CssString = 'lightcoral';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightcyan;`。 */
  readonly lightcyan: Property.FloodColor | CssString = 'lightcyan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: Property.FloodColor | CssString = 'lightgoldenrodyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightgray;`。 */
  readonly lightgray: Property.FloodColor | CssString = 'lightgray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightgreen;`。 */
  readonly lightgreen: Property.FloodColor | CssString = 'lightgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightgrey;`。 */
  readonly lightgrey: Property.FloodColor | CssString = 'lightgrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightpink;`。 */
  readonly lightpink: Property.FloodColor | CssString = 'lightpink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightsalmon;`。 */
  readonly lightsalmon: Property.FloodColor | CssString = 'lightsalmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightseagreen;`。 */
  readonly lightseagreen: Property.FloodColor | CssString = 'lightseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightskyblue;`。 */
  readonly lightskyblue: Property.FloodColor | CssString = 'lightskyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightslategray;`。 */
  readonly lightslategray: Property.FloodColor | CssString = 'lightslategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightslategrey;`。 */
  readonly lightslategrey: Property.FloodColor | CssString = 'lightslategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightsteelblue;`。 */
  readonly lightsteelblue: Property.FloodColor | CssString = 'lightsteelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lightyellow;`。 */
  readonly lightyellow: Property.FloodColor | CssString = 'lightyellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:lime;`。 */
  readonly lime: Property.FloodColor | CssString = 'lime';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:limegreen;`。 */
  readonly limegreen: Property.FloodColor | CssString = 'limegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:linen;`。 */
  readonly linen: Property.FloodColor | CssString = 'linen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:magenta;`。 */
  readonly magenta: Property.FloodColor | CssString = 'magenta';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:maroon;`。 */
  readonly maroon: Property.FloodColor | CssString = 'maroon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: Property.FloodColor | CssString = 'mediumaquamarine';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumblue;`。 */
  readonly mediumblue: Property.FloodColor | CssString = 'mediumblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumorchid;`。 */
  readonly mediumorchid: Property.FloodColor | CssString = 'mediumorchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumpurple;`。 */
  readonly mediumpurple: Property.FloodColor | CssString = 'mediumpurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumseagreen;`。 */
  readonly mediumseagreen: Property.FloodColor | CssString = 'mediumseagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumslateblue;`。 */
  readonly mediumslateblue: Property.FloodColor | CssString = 'mediumslateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: Property.FloodColor | CssString = 'mediumspringgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumturquoise;`。 */
  readonly mediumturquoise: Property.FloodColor | CssString = 'mediumturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mediumvioletred;`。 */
  readonly mediumvioletred: Property.FloodColor | CssString = 'mediumvioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:midnightblue;`。 */
  readonly midnightblue: Property.FloodColor | CssString = 'midnightblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mintcream;`。 */
  readonly mintcream: Property.FloodColor | CssString = 'mintcream';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:mistyrose;`。 */
  readonly mistyrose: Property.FloodColor | CssString = 'mistyrose';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:moccasin;`。 */
  readonly moccasin: Property.FloodColor | CssString = 'moccasin';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:navajowhite;`。 */
  readonly navajowhite: Property.FloodColor | CssString = 'navajowhite';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:navy;`。 */
  readonly navy: Property.FloodColor | CssString = 'navy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:oldlace;`。 */
  readonly oldlace: Property.FloodColor | CssString = 'oldlace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:olive;`。 */
  readonly olive: Property.FloodColor | CssString = 'olive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:olivedrab;`。 */
  readonly olivedrab: Property.FloodColor | CssString = 'olivedrab';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:orange;`。 */
  readonly orange: Property.FloodColor | CssString = 'orange';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:orangered;`。 */
  readonly orangered: Property.FloodColor | CssString = 'orangered';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:orchid;`。 */
  readonly orchid: Property.FloodColor | CssString = 'orchid';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:palegoldenrod;`。 */
  readonly palegoldenrod: Property.FloodColor | CssString = 'palegoldenrod';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:palegreen;`。 */
  readonly palegreen: Property.FloodColor | CssString = 'palegreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:paleturquoise;`。 */
  readonly paleturquoise: Property.FloodColor | CssString = 'paleturquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:palevioletred;`。 */
  readonly palevioletred: Property.FloodColor | CssString = 'palevioletred';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:papayawhip;`。 */
  readonly papayawhip: Property.FloodColor | CssString = 'papayawhip';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:peachpuff;`。 */
  readonly peachpuff: Property.FloodColor | CssString = 'peachpuff';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:peru;`。 */
  readonly peru: Property.FloodColor | CssString = 'peru';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:pink;`。 */
  readonly pink: Property.FloodColor | CssString = 'pink';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:plum;`。 */
  readonly plum: Property.FloodColor | CssString = 'plum';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:powderblue;`。 */
  readonly powderblue: Property.FloodColor | CssString = 'powderblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:purple;`。 */
  readonly purple: Property.FloodColor | CssString = 'purple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:rebeccapurple;`。 */
  readonly rebeccapurple: Property.FloodColor | CssString = 'rebeccapurple';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:red;`。 */
  readonly red: Property.FloodColor | CssString = 'red';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flood-color:revert;`。
   */
  readonly revert: Property.FloodColor | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flood-color:revert-layer;`。
   */
  readonly revertLayer: Property.FloodColor | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:rosybrown;`。 */
  readonly rosybrown: Property.FloodColor | CssString = 'rosybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:royalblue;`。 */
  readonly royalblue: Property.FloodColor | CssString = 'royalblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:saddlebrown;`。 */
  readonly saddlebrown: Property.FloodColor | CssString = 'saddlebrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:salmon;`。 */
  readonly salmon: Property.FloodColor | CssString = 'salmon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:sandybrown;`。 */
  readonly sandybrown: Property.FloodColor | CssString = 'sandybrown';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:seagreen;`。 */
  readonly seagreen: Property.FloodColor | CssString = 'seagreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:seashell;`。 */
  readonly seashell: Property.FloodColor | CssString = 'seashell';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:sienna;`。 */
  readonly sienna: Property.FloodColor | CssString = 'sienna';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:silver;`。 */
  readonly silver: Property.FloodColor | CssString = 'silver';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:skyblue;`。 */
  readonly skyblue: Property.FloodColor | CssString = 'skyblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:slateblue;`。 */
  readonly slateblue: Property.FloodColor | CssString = 'slateblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:slategray;`。 */
  readonly slategray: Property.FloodColor | CssString = 'slategray';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:slategrey;`。 */
  readonly slategrey: Property.FloodColor | CssString = 'slategrey';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:snow;`。 */
  readonly snow: Property.FloodColor | CssString = 'snow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:springgreen;`。 */
  readonly springgreen: Property.FloodColor | CssString = 'springgreen';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:steelblue;`。 */
  readonly steelblue: Property.FloodColor | CssString = 'steelblue';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:tan;`。 */
  readonly tan: Property.FloodColor | CssString = 'tan';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:teal;`。 */
  readonly teal: Property.FloodColor | CssString = 'teal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:thistle;`。 */
  readonly thistle: Property.FloodColor | CssString = 'thistle';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:tomato;`。 */
  readonly tomato: Property.FloodColor | CssString = 'tomato';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`flood-color:transparent;`。
   */
  readonly transparent: Property.FloodColor | CssString = 'transparent';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:turquoise;`。 */
  readonly turquoise: Property.FloodColor | CssString = 'turquoise';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flood-color:unset;`。
   */
  readonly unset: Property.FloodColor | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:violet;`。 */
  readonly violet: Property.FloodColor | CssString = 'violet';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:wheat;`。 */
  readonly wheat: Property.FloodColor | CssString = 'wheat';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:white;`。 */
  readonly white: Property.FloodColor | CssString = 'white';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:whitesmoke;`。 */
  readonly whitesmoke: Property.FloodColor | CssString = 'whitesmoke';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:yellow;`。 */
  readonly yellow: Property.FloodColor | CssString = 'yellow';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`flood-color:yellowgreen;`。 */
  readonly yellowgreen: Property.FloodColor | CssString = 'yellowgreen';
}

/**
 * 设置 SVG feFlood 或相关滤镜的洪泛颜色。（flood-color）
 *
 * CSS 初始值：`black`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
 */
export class FloodColorCss extends CssProperty {
  /** CSS 声明：`flood-color:AccentColor;`。 */
  readonly AccentColor: string = 'flood-color:AccentColor;';
  /** CSS 声明：`flood-color:AccentColorText;`。 */
  readonly AccentColorText: string = 'flood-color:AccentColorText;';
  /** CSS 声明：`flood-color:ActiveBorder;`。 */
  readonly ActiveBorder: string = 'flood-color:ActiveBorder;';
  /** CSS 声明：`flood-color:ActiveCaption;`。 */
  readonly ActiveCaption: string = 'flood-color:ActiveCaption;';
  /** CSS 声明：`flood-color:ActiveText;`。 */
  readonly ActiveText: string = 'flood-color:ActiveText;';
  /** CSS 声明：`flood-color:AppWorkspace;`。 */
  readonly AppWorkspace: string = 'flood-color:AppWorkspace;';
  /** CSS 声明：`flood-color:Background;`。 */
  readonly Background: string = 'flood-color:Background;';
  /** CSS 声明：`flood-color:ButtonBorder;`。 */
  readonly ButtonBorder: string = 'flood-color:ButtonBorder;';
  /** CSS 声明：`flood-color:ButtonFace;`。 */
  readonly ButtonFace: string = 'flood-color:ButtonFace;';
  /** CSS 声明：`flood-color:ButtonHighlight;`。 */
  readonly ButtonHighlight: string = 'flood-color:ButtonHighlight;';
  /** CSS 声明：`flood-color:ButtonShadow;`。 */
  readonly ButtonShadow: string = 'flood-color:ButtonShadow;';
  /** CSS 声明：`flood-color:ButtonText;`。 */
  readonly ButtonText: string = 'flood-color:ButtonText;';
  /** CSS 声明：`flood-color:Canvas;`。 */
  readonly Canvas: string = 'flood-color:Canvas;';
  /** CSS 声明：`flood-color:CanvasText;`。 */
  readonly CanvasText: string = 'flood-color:CanvasText;';
  /** CSS 声明：`flood-color:CaptionText;`。 */
  readonly CaptionText: string = 'flood-color:CaptionText;';
  /** CSS 声明：`flood-color:Field;`。 */
  readonly Field: string = 'flood-color:Field;';
  /** CSS 声明：`flood-color:FieldText;`。 */
  readonly FieldText: string = 'flood-color:FieldText;';
  /** CSS 声明：`flood-color:GrayText;`。 */
  readonly GrayText: string = 'flood-color:GrayText;';
  /** CSS 声明：`flood-color:Highlight;`。 */
  readonly Highlight: string = 'flood-color:Highlight;';
  /** CSS 声明：`flood-color:HighlightText;`。 */
  readonly HighlightText: string = 'flood-color:HighlightText;';
  /** CSS 声明：`flood-color:InactiveBorder;`。 */
  readonly InactiveBorder: string = 'flood-color:InactiveBorder;';
  /** CSS 声明：`flood-color:InactiveCaption;`。 */
  readonly InactiveCaption: string = 'flood-color:InactiveCaption;';
  /** CSS 声明：`flood-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText: string = 'flood-color:InactiveCaptionText;';
  /** CSS 声明：`flood-color:InfoBackground;`。 */
  readonly InfoBackground: string = 'flood-color:InfoBackground;';
  /** CSS 声明：`flood-color:InfoText;`。 */
  readonly InfoText: string = 'flood-color:InfoText;';
  /** CSS 声明：`flood-color:LinkText;`。 */
  readonly LinkText: string = 'flood-color:LinkText;';
  /** CSS 声明：`flood-color:Mark;`。 */
  readonly Mark: string = 'flood-color:Mark;';
  /** CSS 声明：`flood-color:MarkText;`。 */
  readonly MarkText: string = 'flood-color:MarkText;';
  /** CSS 声明：`flood-color:Menu;`。 */
  readonly Menu: string = 'flood-color:Menu;';
  /** CSS 声明：`flood-color:MenuText;`。 */
  readonly MenuText: string = 'flood-color:MenuText;';
  /** CSS 声明：`flood-color:Scrollbar;`。 */
  readonly Scrollbar: string = 'flood-color:Scrollbar;';
  /** CSS 声明：`flood-color:SelectedItem;`。 */
  readonly SelectedItem: string = 'flood-color:SelectedItem;';
  /** CSS 声明：`flood-color:SelectedItemText;`。 */
  readonly SelectedItemText: string = 'flood-color:SelectedItemText;';
  /** CSS 声明：`flood-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow: string = 'flood-color:ThreeDDarkShadow;';
  /** CSS 声明：`flood-color:ThreeDFace;`。 */
  readonly ThreeDFace: string = 'flood-color:ThreeDFace;';
  /** CSS 声明：`flood-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight: string = 'flood-color:ThreeDHighlight;';
  /** CSS 声明：`flood-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow: string = 'flood-color:ThreeDLightShadow;';
  /** CSS 声明：`flood-color:ThreeDShadow;`。 */
  readonly ThreeDShadow: string = 'flood-color:ThreeDShadow;';
  /** CSS 声明：`flood-color:VisitedText;`。 */
  readonly VisitedText: string = 'flood-color:VisitedText;';
  /** CSS 声明：`flood-color:Window;`。 */
  readonly Window: string = 'flood-color:Window;';
  /** CSS 声明：`flood-color:WindowFrame;`。 */
  readonly WindowFrame: string = 'flood-color:WindowFrame;';
  /** CSS 声明：`flood-color:WindowText;`。 */
  readonly WindowText: string = 'flood-color:WindowText;';
  /** CSS 声明：`flood-color:aliceblue;`。 */
  readonly aliceblue: string = 'flood-color:aliceblue;';
  /** CSS 声明：`flood-color:antiquewhite;`。 */
  readonly antiquewhite: string = 'flood-color:antiquewhite;';
  /** CSS 声明：`flood-color:aqua;`。 */
  readonly aqua: string = 'flood-color:aqua;';
  /** CSS 声明：`flood-color:aquamarine;`。 */
  readonly aquamarine: string = 'flood-color:aquamarine;';
  /** CSS 声明：`flood-color:azure;`。 */
  readonly azure: string = 'flood-color:azure;';
  /** CSS 声明：`flood-color:beige;`。 */
  readonly beige: string = 'flood-color:beige;';
  /** CSS 声明：`flood-color:bisque;`。 */
  readonly bisque: string = 'flood-color:bisque;';
  /** CSS 声明：`flood-color:black;`。 */
  readonly black: string = 'flood-color:black;';
  /** CSS 声明：`flood-color:blanchedalmond;`。 */
  readonly blanchedalmond: string = 'flood-color:blanchedalmond;';
  /** CSS 声明：`flood-color:blue;`。 */
  readonly blue: string = 'flood-color:blue;';
  /** CSS 声明：`flood-color:blueviolet;`。 */
  readonly blueviolet: string = 'flood-color:blueviolet;';
  /** CSS 声明：`flood-color:brown;`。 */
  readonly brown: string = 'flood-color:brown;';
  /** CSS 声明：`flood-color:burlywood;`。 */
  readonly burlywood: string = 'flood-color:burlywood;';
  /** CSS 声明：`flood-color:cadetblue;`。 */
  readonly cadetblue: string = 'flood-color:cadetblue;';
  /** CSS 声明：`flood-color:chartreuse;`。 */
  readonly chartreuse: string = 'flood-color:chartreuse;';
  /** CSS 声明：`flood-color:chocolate;`。 */
  readonly chocolate: string = 'flood-color:chocolate;';
  /** CSS 声明：`flood-color:coral;`。 */
  readonly coral: string = 'flood-color:coral;';
  /** CSS 声明：`flood-color:cornflowerblue;`。 */
  readonly cornflowerblue: string = 'flood-color:cornflowerblue;';
  /** CSS 声明：`flood-color:cornsilk;`。 */
  readonly cornsilk: string = 'flood-color:cornsilk;';
  /** CSS 声明：`flood-color:crimson;`。 */
  readonly crimson: string = 'flood-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`flood-color:currentColor;`。
   */
  readonly currentColor: string = 'flood-color:currentColor;';
  /** CSS 声明：`flood-color:cyan;`。 */
  readonly cyan: string = 'flood-color:cyan;';
  /** CSS 声明：`flood-color:darkblue;`。 */
  readonly darkblue: string = 'flood-color:darkblue;';
  /** CSS 声明：`flood-color:darkcyan;`。 */
  readonly darkcyan: string = 'flood-color:darkcyan;';
  /** CSS 声明：`flood-color:darkgoldenrod;`。 */
  readonly darkgoldenrod: string = 'flood-color:darkgoldenrod;';
  /** CSS 声明：`flood-color:darkgray;`。 */
  readonly darkgray: string = 'flood-color:darkgray;';
  /** CSS 声明：`flood-color:darkgreen;`。 */
  readonly darkgreen: string = 'flood-color:darkgreen;';
  /** CSS 声明：`flood-color:darkgrey;`。 */
  readonly darkgrey: string = 'flood-color:darkgrey;';
  /** CSS 声明：`flood-color:darkkhaki;`。 */
  readonly darkkhaki: string = 'flood-color:darkkhaki;';
  /** CSS 声明：`flood-color:darkmagenta;`。 */
  readonly darkmagenta: string = 'flood-color:darkmagenta;';
  /** CSS 声明：`flood-color:darkolivegreen;`。 */
  readonly darkolivegreen: string = 'flood-color:darkolivegreen;';
  /** CSS 声明：`flood-color:darkorange;`。 */
  readonly darkorange: string = 'flood-color:darkorange;';
  /** CSS 声明：`flood-color:darkorchid;`。 */
  readonly darkorchid: string = 'flood-color:darkorchid;';
  /** CSS 声明：`flood-color:darkred;`。 */
  readonly darkred: string = 'flood-color:darkred;';
  /** CSS 声明：`flood-color:darksalmon;`。 */
  readonly darksalmon: string = 'flood-color:darksalmon;';
  /** CSS 声明：`flood-color:darkseagreen;`。 */
  readonly darkseagreen: string = 'flood-color:darkseagreen;';
  /** CSS 声明：`flood-color:darkslateblue;`。 */
  readonly darkslateblue: string = 'flood-color:darkslateblue;';
  /** CSS 声明：`flood-color:darkslategray;`。 */
  readonly darkslategray: string = 'flood-color:darkslategray;';
  /** CSS 声明：`flood-color:darkslategrey;`。 */
  readonly darkslategrey: string = 'flood-color:darkslategrey;';
  /** CSS 声明：`flood-color:darkturquoise;`。 */
  readonly darkturquoise: string = 'flood-color:darkturquoise;';
  /** CSS 声明：`flood-color:darkviolet;`。 */
  readonly darkviolet: string = 'flood-color:darkviolet;';
  /** CSS 声明：`flood-color:deeppink;`。 */
  readonly deeppink: string = 'flood-color:deeppink;';
  /** CSS 声明：`flood-color:deepskyblue;`。 */
  readonly deepskyblue: string = 'flood-color:deepskyblue;';
  /** CSS 声明：`flood-color:dimgray;`。 */
  readonly dimgray: string = 'flood-color:dimgray;';
  /** CSS 声明：`flood-color:dimgrey;`。 */
  readonly dimgrey: string = 'flood-color:dimgrey;';
  /** CSS 声明：`flood-color:dodgerblue;`。 */
  readonly dodgerblue: string = 'flood-color:dodgerblue;';
  /** CSS 声明：`flood-color:firebrick;`。 */
  readonly firebrick: string = 'flood-color:firebrick;';
  /** CSS 声明：`flood-color:floralwhite;`。 */
  readonly floralwhite: string = 'flood-color:floralwhite;';
  /** CSS 声明：`flood-color:forestgreen;`。 */
  readonly forestgreen: string = 'flood-color:forestgreen;';
  /** CSS 声明：`flood-color:fuchsia;`。 */
  readonly fuchsia: string = 'flood-color:fuchsia;';
  /** CSS 声明：`flood-color:gainsboro;`。 */
  readonly gainsboro: string = 'flood-color:gainsboro;';
  /** CSS 声明：`flood-color:ghostwhite;`。 */
  readonly ghostwhite: string = 'flood-color:ghostwhite;';
  /** CSS 声明：`flood-color:gold;`。 */
  readonly gold: string = 'flood-color:gold;';
  /** CSS 声明：`flood-color:goldenrod;`。 */
  readonly goldenrod: string = 'flood-color:goldenrod;';
  /** CSS 声明：`flood-color:gray;`。 */
  readonly gray: string = 'flood-color:gray;';
  /** CSS 声明：`flood-color:green;`。 */
  readonly green: string = 'flood-color:green;';
  /** CSS 声明：`flood-color:greenyellow;`。 */
  readonly greenyellow: string = 'flood-color:greenyellow;';
  /** CSS 声明：`flood-color:grey;`。 */
  readonly grey: string = 'flood-color:grey;';
  /** CSS 声明：`flood-color:honeydew;`。 */
  readonly honeydew: string = 'flood-color:honeydew;';
  /** CSS 声明：`flood-color:hotpink;`。 */
  readonly hotpink: string = 'flood-color:hotpink;';
  /** CSS 声明：`flood-color:indianred;`。 */
  readonly indianred: string = 'flood-color:indianred;';
  /** CSS 声明：`flood-color:indigo;`。 */
  readonly indigo: string = 'flood-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flood-color:inherit;`。
   */
  readonly inherit: string = 'flood-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flood-color:initial;`。
   */
  readonly initial: string = 'flood-color:initial;';
  /** CSS 声明：`flood-color:ivory;`。 */
  readonly ivory: string = 'flood-color:ivory;';
  /** CSS 声明：`flood-color:khaki;`。 */
  readonly khaki: string = 'flood-color:khaki;';
  /** CSS 声明：`flood-color:lavender;`。 */
  readonly lavender: string = 'flood-color:lavender;';
  /** CSS 声明：`flood-color:lavenderblush;`。 */
  readonly lavenderblush: string = 'flood-color:lavenderblush;';
  /** CSS 声明：`flood-color:lawngreen;`。 */
  readonly lawngreen: string = 'flood-color:lawngreen;';
  /** CSS 声明：`flood-color:lemonchiffon;`。 */
  readonly lemonchiffon: string = 'flood-color:lemonchiffon;';
  /** CSS 声明：`flood-color:lightblue;`。 */
  readonly lightblue: string = 'flood-color:lightblue;';
  /** CSS 声明：`flood-color:lightcoral;`。 */
  readonly lightcoral: string = 'flood-color:lightcoral;';
  /** CSS 声明：`flood-color:lightcyan;`。 */
  readonly lightcyan: string = 'flood-color:lightcyan;';
  /** CSS 声明：`flood-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow: string = 'flood-color:lightgoldenrodyellow;';
  /** CSS 声明：`flood-color:lightgray;`。 */
  readonly lightgray: string = 'flood-color:lightgray;';
  /** CSS 声明：`flood-color:lightgreen;`。 */
  readonly lightgreen: string = 'flood-color:lightgreen;';
  /** CSS 声明：`flood-color:lightgrey;`。 */
  readonly lightgrey: string = 'flood-color:lightgrey;';
  /** CSS 声明：`flood-color:lightpink;`。 */
  readonly lightpink: string = 'flood-color:lightpink;';
  /** CSS 声明：`flood-color:lightsalmon;`。 */
  readonly lightsalmon: string = 'flood-color:lightsalmon;';
  /** CSS 声明：`flood-color:lightseagreen;`。 */
  readonly lightseagreen: string = 'flood-color:lightseagreen;';
  /** CSS 声明：`flood-color:lightskyblue;`。 */
  readonly lightskyblue: string = 'flood-color:lightskyblue;';
  /** CSS 声明：`flood-color:lightslategray;`。 */
  readonly lightslategray: string = 'flood-color:lightslategray;';
  /** CSS 声明：`flood-color:lightslategrey;`。 */
  readonly lightslategrey: string = 'flood-color:lightslategrey;';
  /** CSS 声明：`flood-color:lightsteelblue;`。 */
  readonly lightsteelblue: string = 'flood-color:lightsteelblue;';
  /** CSS 声明：`flood-color:lightyellow;`。 */
  readonly lightyellow: string = 'flood-color:lightyellow;';
  /** CSS 声明：`flood-color:lime;`。 */
  readonly lime: string = 'flood-color:lime;';
  /** CSS 声明：`flood-color:limegreen;`。 */
  readonly limegreen: string = 'flood-color:limegreen;';
  /** CSS 声明：`flood-color:linen;`。 */
  readonly linen: string = 'flood-color:linen;';
  /** CSS 声明：`flood-color:magenta;`。 */
  readonly magenta: string = 'flood-color:magenta;';
  /** CSS 声明：`flood-color:maroon;`。 */
  readonly maroon: string = 'flood-color:maroon;';
  /** CSS 声明：`flood-color:mediumaquamarine;`。 */
  readonly mediumaquamarine: string = 'flood-color:mediumaquamarine;';
  /** CSS 声明：`flood-color:mediumblue;`。 */
  readonly mediumblue: string = 'flood-color:mediumblue;';
  /** CSS 声明：`flood-color:mediumorchid;`。 */
  readonly mediumorchid: string = 'flood-color:mediumorchid;';
  /** CSS 声明：`flood-color:mediumpurple;`。 */
  readonly mediumpurple: string = 'flood-color:mediumpurple;';
  /** CSS 声明：`flood-color:mediumseagreen;`。 */
  readonly mediumseagreen: string = 'flood-color:mediumseagreen;';
  /** CSS 声明：`flood-color:mediumslateblue;`。 */
  readonly mediumslateblue: string = 'flood-color:mediumslateblue;';
  /** CSS 声明：`flood-color:mediumspringgreen;`。 */
  readonly mediumspringgreen: string = 'flood-color:mediumspringgreen;';
  /** CSS 声明：`flood-color:mediumturquoise;`。 */
  readonly mediumturquoise: string = 'flood-color:mediumturquoise;';
  /** CSS 声明：`flood-color:mediumvioletred;`。 */
  readonly mediumvioletred: string = 'flood-color:mediumvioletred;';
  /** CSS 声明：`flood-color:midnightblue;`。 */
  readonly midnightblue: string = 'flood-color:midnightblue;';
  /** CSS 声明：`flood-color:mintcream;`。 */
  readonly mintcream: string = 'flood-color:mintcream;';
  /** CSS 声明：`flood-color:mistyrose;`。 */
  readonly mistyrose: string = 'flood-color:mistyrose;';
  /** CSS 声明：`flood-color:moccasin;`。 */
  readonly moccasin: string = 'flood-color:moccasin;';
  /** CSS 声明：`flood-color:navajowhite;`。 */
  readonly navajowhite: string = 'flood-color:navajowhite;';
  /** CSS 声明：`flood-color:navy;`。 */
  readonly navy: string = 'flood-color:navy;';
  /** CSS 声明：`flood-color:oldlace;`。 */
  readonly oldlace: string = 'flood-color:oldlace;';
  /** CSS 声明：`flood-color:olive;`。 */
  readonly olive: string = 'flood-color:olive;';
  /** CSS 声明：`flood-color:olivedrab;`。 */
  readonly olivedrab: string = 'flood-color:olivedrab;';
  /** CSS 声明：`flood-color:orange;`。 */
  readonly orange: string = 'flood-color:orange;';
  /** CSS 声明：`flood-color:orangered;`。 */
  readonly orangered: string = 'flood-color:orangered;';
  /** CSS 声明：`flood-color:orchid;`。 */
  readonly orchid: string = 'flood-color:orchid;';
  /** CSS 声明：`flood-color:palegoldenrod;`。 */
  readonly palegoldenrod: string = 'flood-color:palegoldenrod;';
  /** CSS 声明：`flood-color:palegreen;`。 */
  readonly palegreen: string = 'flood-color:palegreen;';
  /** CSS 声明：`flood-color:paleturquoise;`。 */
  readonly paleturquoise: string = 'flood-color:paleturquoise;';
  /** CSS 声明：`flood-color:palevioletred;`。 */
  readonly palevioletred: string = 'flood-color:palevioletred;';
  /** CSS 声明：`flood-color:papayawhip;`。 */
  readonly papayawhip: string = 'flood-color:papayawhip;';
  /** CSS 声明：`flood-color:peachpuff;`。 */
  readonly peachpuff: string = 'flood-color:peachpuff;';
  /** CSS 声明：`flood-color:peru;`。 */
  readonly peru: string = 'flood-color:peru;';
  /** CSS 声明：`flood-color:pink;`。 */
  readonly pink: string = 'flood-color:pink;';
  /** CSS 声明：`flood-color:plum;`。 */
  readonly plum: string = 'flood-color:plum;';
  /** CSS 声明：`flood-color:powderblue;`。 */
  readonly powderblue: string = 'flood-color:powderblue;';
  /** CSS 声明：`flood-color:purple;`。 */
  readonly purple: string = 'flood-color:purple;';
  /** CSS 声明：`flood-color:rebeccapurple;`。 */
  readonly rebeccapurple: string = 'flood-color:rebeccapurple;';
  /** CSS 声明：`flood-color:red;`。 */
  readonly red: string = 'flood-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flood-color:revert;`。
   */
  readonly revert: string = 'flood-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flood-color:revert-layer;`。
   */
  readonly revertLayer: string = 'flood-color:revert-layer;';
  /** CSS 声明：`flood-color:rosybrown;`。 */
  readonly rosybrown: string = 'flood-color:rosybrown;';
  /** CSS 声明：`flood-color:royalblue;`。 */
  readonly royalblue: string = 'flood-color:royalblue;';
  /** CSS 声明：`flood-color:saddlebrown;`。 */
  readonly saddlebrown: string = 'flood-color:saddlebrown;';
  /** CSS 声明：`flood-color:salmon;`。 */
  readonly salmon: string = 'flood-color:salmon;';
  /** CSS 声明：`flood-color:sandybrown;`。 */
  readonly sandybrown: string = 'flood-color:sandybrown;';
  /** CSS 声明：`flood-color:seagreen;`。 */
  readonly seagreen: string = 'flood-color:seagreen;';
  /** CSS 声明：`flood-color:seashell;`。 */
  readonly seashell: string = 'flood-color:seashell;';
  /** CSS 声明：`flood-color:sienna;`。 */
  readonly sienna: string = 'flood-color:sienna;';
  /** CSS 声明：`flood-color:silver;`。 */
  readonly silver: string = 'flood-color:silver;';
  /** CSS 声明：`flood-color:skyblue;`。 */
  readonly skyblue: string = 'flood-color:skyblue;';
  /** CSS 声明：`flood-color:slateblue;`。 */
  readonly slateblue: string = 'flood-color:slateblue;';
  /** CSS 声明：`flood-color:slategray;`。 */
  readonly slategray: string = 'flood-color:slategray;';
  /** CSS 声明：`flood-color:slategrey;`。 */
  readonly slategrey: string = 'flood-color:slategrey;';
  /** CSS 声明：`flood-color:snow;`。 */
  readonly snow: string = 'flood-color:snow;';
  /** CSS 声明：`flood-color:springgreen;`。 */
  readonly springgreen: string = 'flood-color:springgreen;';
  /** CSS 声明：`flood-color:steelblue;`。 */
  readonly steelblue: string = 'flood-color:steelblue;';
  /** CSS 声明：`flood-color:tan;`。 */
  readonly tan: string = 'flood-color:tan;';
  /** CSS 声明：`flood-color:teal;`。 */
  readonly teal: string = 'flood-color:teal;';
  /** CSS 声明：`flood-color:thistle;`。 */
  readonly thistle: string = 'flood-color:thistle;';
  /** CSS 声明：`flood-color:tomato;`。 */
  readonly tomato: string = 'flood-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`flood-color:transparent;`。
   */
  readonly transparent: string = 'flood-color:transparent;';
  /** CSS 声明：`flood-color:turquoise;`。 */
  readonly turquoise: string = 'flood-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flood-color:unset;`。
   */
  readonly unset: string = 'flood-color:unset;';
  /** CSS 声明：`flood-color:violet;`。 */
  readonly violet: string = 'flood-color:violet;';
  /** CSS 声明：`flood-color:wheat;`。 */
  readonly wheat: string = 'flood-color:wheat;';
  /** CSS 声明：`flood-color:white;`。 */
  readonly white: string = 'flood-color:white;';
  /** CSS 声明：`flood-color:whitesmoke;`。 */
  readonly whitesmoke: string = 'flood-color:whitesmoke;';
  /** CSS 声明：`flood-color:yellow;`。 */
  readonly yellow: string = 'flood-color:yellow;';
  /** CSS 声明：`flood-color:yellowgreen;`。 */
  readonly yellowgreen: string = 'flood-color:yellowgreen;';
  /**
   * 创建 flood-color 属性作者；普通使用通过 s.floodColor 取得共享实例。
   * @example
   * class CustomFloodColorCss extends FloodColorCss {}
   */
  constructor() {
    super('flood-color');
  }
  /**
   * 原样生成 flood-color 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flood-color:value;。
   * @example
   * s.floodColor.raw('inherit') // flood-color:inherit;
   */
  raw(value: Property.FloodColor | CssString): string {
    return this.declaration(value);
  }
  /**
   * 用现代空格分隔语法生成 RGB 颜色声明。
   *
   * 字符串（含 bx 返回值）原样输出；库不截断通道或校验 CSS。
   * @param red 红通道，数值通常为 0–255，或带百分比/变量的 CSS 字符串。
   * @param green 绿通道，数值通常为 0–255，或 CSS 字符串。
   * @param blue 蓝通道，数值通常为 0–255，或 CSS 字符串。
   * @param alpha 可选透明度，数值通常为 0–1，或百分比/变量字符串；0 不会被省略。
   * @returns 当前属性的完整声明，不是可嵌套的颜色值。
   * @example
   * s.floodColor.rgb(255, 0, 0, 0.5)
   */
  rgb(
    red: number | CssString,
    green: number | CssString,
    blue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /**
   * 生成 HSL 颜色声明，数值饱和度和明度自动添加百分号。
   * @param hue 色相；无单位数值按度解释，也可传带角度单位的字符串。
   * @param saturation 饱和度，数值 100 表示 100%；字符串保留原单位。
   * @param lightness 明度，数值 50 表示 50%；字符串保留原单位。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；数值不做截断。
   * @example
   * s.floodColor.hsl(210, 50, 40, 0.8)
   */
  hsl(
    hue: number | CssString,
    saturation: number | CssString,
    lightness: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `hsl(${hue} ${typeof saturation === 'number' ? saturation + '%' : saturation} ${typeof lightness === 'number' ? lightness + '%' : lightness}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLCH 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param chroma 色度，0 表示无彩色；可呈现范围随明度、色相和设备变化。
   * @param hue 色相，数值按度解释，也可传角度或变量字符串。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不自动添加百分号或裁切色域。
   * @example
   * s.floodColor.oklch(0.7, 0.15, 250)
   */
  oklch(
    lightness: number | CssString,
    chroma: number | CssString,
    hue: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(
      `oklch(${lightness} ${chroma} ${hue}${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /**
   * 生成 OKLab 颜色声明，通道按原生 CSS 语法输出。
   * @param lightness 感知明度，数值通常为 0–1；也可传百分比字符串。
   * @param a 绿到红的色轴，负值偏绿、正值偏红。
   * @param b 蓝到黄的色轴，负值偏蓝、正值偏黄。
   * @param alpha 可选透明度，通常为 0–1 或 CSS 百分比/变量字符串。
   * @returns 当前属性的完整声明；不截断通道数值。
   * @example
   * s.floodColor.oklab(0.7, 0.1, -0.1)
   */
  oklab(
    lightness: number | CssString,
    a: number | CssString,
    b: number | CssString,
    alpha?: number | CssString,
  ): string {
    return this.raw(`oklab(${lightness} ${a} ${b}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
}

/**
 * flood-opacity 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FloodOpacityKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flood-opacity:inherit;`。
   */
  readonly inherit: Property.FloodOpacity | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flood-opacity:initial;`。
   */
  readonly initial: Property.FloodOpacity | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flood-opacity:revert;`。
   */
  readonly revert: Property.FloodOpacity | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flood-opacity:revert-layer;`。
   */
  readonly revertLayer: Property.FloodOpacity | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flood-opacity:unset;`。
   */
  readonly unset: Property.FloodOpacity | CssString = 'unset';
}

/**
 * 设置 SVG 洪泛滤镜颜色的不透明度。（flood-opacity）
 *
 * CSS 初始值：`black`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
 */
export class FloodOpacityCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flood-opacity:inherit;`。
   */
  readonly inherit: string = 'flood-opacity:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flood-opacity:initial;`。
   */
  readonly initial: string = 'flood-opacity:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flood-opacity:revert;`。
   */
  readonly revert: string = 'flood-opacity:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flood-opacity:revert-layer;`。
   */
  readonly revertLayer: string = 'flood-opacity:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flood-opacity:unset;`。
   */
  readonly unset: string = 'flood-opacity:unset;';
  /**
   * 创建 flood-opacity 属性作者；普通使用通过 s.floodOpacity 取得共享实例。
   * @example
   * class CustomFloodOpacityCss extends FloodOpacityCss {}
   */
  constructor() {
    super('flood-opacity');
  }
  /**
   * 原样生成 flood-opacity 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 flood-opacity:value;。
   * @example
   * s.floodOpacity.raw('inherit') // flood-opacity:inherit;
   */
  raw(value: Property.FloodOpacity | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.floodOpacity.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.floodOpacity.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FloodOpacity | CssString,
    ...others: (Property.FloodOpacity | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.floodOpacity.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FloodOpacity | CssString,
    ...others: (Property.FloodOpacity | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.floodOpacity.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FloodOpacity | CssString,
    preferred: Property.FloodOpacity | CssString,
    maximum: Property.FloodOpacity | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * font 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font:caption;`。 */
  readonly caption: Property.Font | CssString = 'caption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font:icon;`。 */
  readonly icon: Property.Font | CssString = 'icon';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font:inherit;`。
   */
  readonly inherit: Property.Font | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font:initial;`。
   */
  readonly initial: Property.Font | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font:menu;`。 */
  readonly menu: Property.Font | CssString = 'menu';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font:message-box;`。 */
  readonly messageBox: Property.Font | CssString = 'message-box';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font:revert;`。
   */
  readonly revert: Property.Font | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font:revert-layer;`。
   */
  readonly revertLayer: Property.Font | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font:small-caption;`。 */
  readonly smallCaption: Property.Font | CssString = 'small-caption';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font:status-bar;`。 */
  readonly statusBar: Property.Font | CssString = 'status-bar';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font:unset;`。
   */
  readonly unset: Property.Font | CssString = 'unset';
}

/**
 * 集中设置字体样式、粗细、大小、行高和字体族等信息。（font）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
 */
export class FontCss extends CssProperty {
  /** CSS 声明：`font:caption;`。 */
  readonly caption: string = 'font:caption;';
  /** CSS 声明：`font:icon;`。 */
  readonly icon: string = 'font:icon;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font:inherit;`。
   */
  readonly inherit: string = 'font:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font:initial;`。
   */
  readonly initial: string = 'font:initial;';
  /** CSS 声明：`font:menu;`。 */
  readonly menu: string = 'font:menu;';
  /** CSS 声明：`font:message-box;`。 */
  readonly messageBox: string = 'font:message-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font:revert;`。
   */
  readonly revert: string = 'font:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font:revert-layer;`。
   */
  readonly revertLayer: string = 'font:revert-layer;';
  /** CSS 声明：`font:small-caption;`。 */
  readonly smallCaption: string = 'font:small-caption;';
  /** CSS 声明：`font:status-bar;`。 */
  readonly statusBar: string = 'font:status-bar;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font:unset;`。
   */
  readonly unset: string = 'font:unset;';
  /**
   * 创建 font 属性作者；普通使用通过 s.font 取得共享实例。
   * @example
   * class CustomFontCss extends FontCss {}
   */
  constructor() {
    super('font');
  }
  /**
   * 原样生成 font 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font:value;。
   * @example
   * s.font.raw('inherit') // font:inherit;
   */
  raw(value: Property.Font | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-family 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontFamilyKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:-apple-system;`。 */
  readonly AppleSystem: Property.FontFamily | CssString = '-apple-system';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:cursive;`。 */
  readonly cursive: Property.FontFamily | CssString = 'cursive';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:emoji;`。 */
  readonly emoji: Property.FontFamily | CssString = 'emoji';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:fangsong;`。 */
  readonly fangsong: Property.FontFamily | CssString = 'fangsong';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:fantasy;`。 */
  readonly fantasy: Property.FontFamily | CssString = 'fantasy';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-family:inherit;`。
   */
  readonly inherit: Property.FontFamily | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-family:initial;`。
   */
  readonly initial: Property.FontFamily | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:math;`。 */
  readonly math: Property.FontFamily | CssString = 'math';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:monospace;`。 */
  readonly monospace: Property.FontFamily | CssString = 'monospace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-family:revert;`。
   */
  readonly revert: Property.FontFamily | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-family:revert-layer;`。
   */
  readonly revertLayer: Property.FontFamily | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:sans-serif;`。 */
  readonly sansSerif: Property.FontFamily | CssString = 'sans-serif';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:serif;`。 */
  readonly serif: Property.FontFamily | CssString = 'serif';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:system-ui;`。 */
  readonly systemUi: Property.FontFamily | CssString = 'system-ui';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:ui-monospace;`。 */
  readonly uiMonospace: Property.FontFamily | CssString = 'ui-monospace';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:ui-rounded;`。 */
  readonly uiRounded: Property.FontFamily | CssString = 'ui-rounded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:ui-sans-serif;`。 */
  readonly uiSansSerif: Property.FontFamily | CssString = 'ui-sans-serif';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-family:ui-serif;`。 */
  readonly uiSerif: Property.FontFamily | CssString = 'ui-serif';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-family:unset;`。
   */
  readonly unset: Property.FontFamily | CssString = 'unset';
}

/**
 * 设置按优先级排列的字体族及通用字体回退。（font-family）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
 */
export class FontFamilyCss extends CssProperty {
  /** CSS 声明：`font-family:-apple-system;`。 */
  readonly AppleSystem: string = 'font-family:-apple-system;';
  /** CSS 声明：`font-family:cursive;`。 */
  readonly cursive: string = 'font-family:cursive;';
  /** CSS 声明：`font-family:emoji;`。 */
  readonly emoji: string = 'font-family:emoji;';
  /** CSS 声明：`font-family:fangsong;`。 */
  readonly fangsong: string = 'font-family:fangsong;';
  /** CSS 声明：`font-family:fantasy;`。 */
  readonly fantasy: string = 'font-family:fantasy;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-family:inherit;`。
   */
  readonly inherit: string = 'font-family:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-family:initial;`。
   */
  readonly initial: string = 'font-family:initial;';
  /** CSS 声明：`font-family:math;`。 */
  readonly math: string = 'font-family:math;';
  /** CSS 声明：`font-family:monospace;`。 */
  readonly monospace: string = 'font-family:monospace;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-family:revert;`。
   */
  readonly revert: string = 'font-family:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-family:revert-layer;`。
   */
  readonly revertLayer: string = 'font-family:revert-layer;';
  /** CSS 声明：`font-family:sans-serif;`。 */
  readonly sansSerif: string = 'font-family:sans-serif;';
  /** CSS 声明：`font-family:serif;`。 */
  readonly serif: string = 'font-family:serif;';
  /** CSS 声明：`font-family:system-ui;`。 */
  readonly systemUi: string = 'font-family:system-ui;';
  /** CSS 声明：`font-family:ui-monospace;`。 */
  readonly uiMonospace: string = 'font-family:ui-monospace;';
  /** CSS 声明：`font-family:ui-rounded;`。 */
  readonly uiRounded: string = 'font-family:ui-rounded;';
  /** CSS 声明：`font-family:ui-sans-serif;`。 */
  readonly uiSansSerif: string = 'font-family:ui-sans-serif;';
  /** CSS 声明：`font-family:ui-serif;`。 */
  readonly uiSerif: string = 'font-family:ui-serif;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-family:unset;`。
   */
  readonly unset: string = 'font-family:unset;';
  /**
   * 创建 font-family 属性作者；普通使用通过 s.fontFamily 取得共享实例。
   * @example
   * class CustomFontFamilyCss extends FontFamilyCss {}
   */
  constructor() {
    super('font-family');
  }
  /**
   * 原样生成 font-family 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-family:value;。
   * @example
   * s.fontFamily.raw('inherit') // font-family:inherit;
   */
  raw(value: Property.FontFamily | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-feature-settings 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontFeatureSettingsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-feature-settings:inherit;`。
   */
  readonly inherit: Property.FontFeatureSettings | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-feature-settings:initial;`。
   */
  readonly initial: Property.FontFeatureSettings | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-feature-settings:normal;`。 */
  readonly normal: Property.FontFeatureSettings | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-feature-settings:revert;`。
   */
  readonly revert: Property.FontFeatureSettings | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-feature-settings:revert-layer;`。
   */
  readonly revertLayer: Property.FontFeatureSettings | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-feature-settings:unset;`。
   */
  readonly unset: Property.FontFeatureSettings | CssString = 'unset';
}

/**
 * 通过 OpenType 特性标签控制字体的底层排版功能。（font-feature-settings）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
 */
export class FontFeatureSettingsCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-feature-settings:inherit;`。
   */
  readonly inherit: string = 'font-feature-settings:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-feature-settings:initial;`。
   */
  readonly initial: string = 'font-feature-settings:initial;';
  /** CSS 声明：`font-feature-settings:normal;`。 */
  readonly normal: string = 'font-feature-settings:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-feature-settings:revert;`。
   */
  readonly revert: string = 'font-feature-settings:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-feature-settings:revert-layer;`。
   */
  readonly revertLayer: string = 'font-feature-settings:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-feature-settings:unset;`。
   */
  readonly unset: string = 'font-feature-settings:unset;';
  /**
   * 创建 font-feature-settings 属性作者；普通使用通过 s.fontFeatureSettings 取得共享实例。
   * @example
   * class CustomFontFeatureSettingsCss extends FontFeatureSettingsCss {}
   */
  constructor() {
    super('font-feature-settings');
  }
  /**
   * 原样生成 font-feature-settings 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-feature-settings:value;。
   * @example
   * s.fontFeatureSettings.raw('inherit') // font-feature-settings:inherit;
   */
  raw(value: Property.FontFeatureSettings | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-kerning 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontKerningKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-kerning:auto;`。 */
  readonly auto: Property.FontKerning | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-kerning:inherit;`。
   */
  readonly inherit: Property.FontKerning | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-kerning:initial;`。
   */
  readonly initial: Property.FontKerning | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-kerning:none;`。 */
  readonly none: Property.FontKerning | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-kerning:normal;`。 */
  readonly normal: Property.FontKerning | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-kerning:revert;`。
   */
  readonly revert: Property.FontKerning | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-kerning:revert-layer;`。
   */
  readonly revertLayer: Property.FontKerning | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-kerning:unset;`。
   */
  readonly unset: Property.FontKerning | CssString = 'unset';
}

/**
 * 设置是否应用字体提供的字偶间距调整。（font-kerning）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
 */
export class FontKerningCss extends CssProperty {
  /** CSS 声明：`font-kerning:auto;`。 */
  readonly auto: string = 'font-kerning:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-kerning:inherit;`。
   */
  readonly inherit: string = 'font-kerning:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-kerning:initial;`。
   */
  readonly initial: string = 'font-kerning:initial;';
  /** CSS 声明：`font-kerning:none;`。 */
  readonly none: string = 'font-kerning:none;';
  /** CSS 声明：`font-kerning:normal;`。 */
  readonly normal: string = 'font-kerning:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-kerning:revert;`。
   */
  readonly revert: string = 'font-kerning:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-kerning:revert-layer;`。
   */
  readonly revertLayer: string = 'font-kerning:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-kerning:unset;`。
   */
  readonly unset: string = 'font-kerning:unset;';
  /**
   * 创建 font-kerning 属性作者；普通使用通过 s.fontKerning 取得共享实例。
   * @example
   * class CustomFontKerningCss extends FontKerningCss {}
   */
  constructor() {
    super('font-kerning');
  }
  /**
   * 原样生成 font-kerning 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-kerning:value;。
   * @example
   * s.fontKerning.raw('inherit') // font-kerning:inherit;
   */
  raw(value: Property.FontKerning | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-language-override 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontLanguageOverrideKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-language-override:inherit;`。
   */
  readonly inherit: Property.FontLanguageOverride | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-language-override:initial;`。
   */
  readonly initial: Property.FontLanguageOverride | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-language-override:normal;`。 */
  readonly normal: Property.FontLanguageOverride | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-language-override:revert;`。
   */
  readonly revert: Property.FontLanguageOverride | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-language-override:revert-layer;`。
   */
  readonly revertLayer: Property.FontLanguageOverride | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-language-override:unset;`。
   */
  readonly unset: Property.FontLanguageOverride | CssString = 'unset';
}

/**
 * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。（font-language-override）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
 */
export class FontLanguageOverrideCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-language-override:inherit;`。
   */
  readonly inherit: string = 'font-language-override:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-language-override:initial;`。
   */
  readonly initial: string = 'font-language-override:initial;';
  /** CSS 声明：`font-language-override:normal;`。 */
  readonly normal: string = 'font-language-override:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-language-override:revert;`。
   */
  readonly revert: string = 'font-language-override:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-language-override:revert-layer;`。
   */
  readonly revertLayer: string = 'font-language-override:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-language-override:unset;`。
   */
  readonly unset: string = 'font-language-override:unset;';
  /**
   * 创建 font-language-override 属性作者；普通使用通过 s.fontLanguageOverride 取得共享实例。
   * @example
   * class CustomFontLanguageOverrideCss extends FontLanguageOverrideCss {}
   */
  constructor() {
    super('font-language-override');
  }
  /**
   * 原样生成 font-language-override 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-language-override:value;。
   * @example
   * s.fontLanguageOverride.raw('inherit') // font-language-override:inherit;
   */
  raw(value: Property.FontLanguageOverride | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-optical-sizing 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontOpticalSizingKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-optical-sizing:auto;`。 */
  readonly auto: Property.FontOpticalSizing | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-optical-sizing:inherit;`。
   */
  readonly inherit: Property.FontOpticalSizing | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-optical-sizing:initial;`。
   */
  readonly initial: Property.FontOpticalSizing | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-optical-sizing:none;`。 */
  readonly none: Property.FontOpticalSizing | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-optical-sizing:revert;`。
   */
  readonly revert: Property.FontOpticalSizing | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-optical-sizing:revert-layer;`。
   */
  readonly revertLayer: Property.FontOpticalSizing | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-optical-sizing:unset;`。
   */
  readonly unset: Property.FontOpticalSizing | CssString = 'unset';
}

/**
 * 控制支持光学尺寸轴的字体是否按字号优化字形。（font-optical-sizing）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
 */
export class FontOpticalSizingCss extends CssProperty {
  /** CSS 声明：`font-optical-sizing:auto;`。 */
  readonly auto: string = 'font-optical-sizing:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-optical-sizing:inherit;`。
   */
  readonly inherit: string = 'font-optical-sizing:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-optical-sizing:initial;`。
   */
  readonly initial: string = 'font-optical-sizing:initial;';
  /** CSS 声明：`font-optical-sizing:none;`。 */
  readonly none: string = 'font-optical-sizing:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-optical-sizing:revert;`。
   */
  readonly revert: string = 'font-optical-sizing:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-optical-sizing:revert-layer;`。
   */
  readonly revertLayer: string = 'font-optical-sizing:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-optical-sizing:unset;`。
   */
  readonly unset: string = 'font-optical-sizing:unset;';
  /**
   * 创建 font-optical-sizing 属性作者；普通使用通过 s.fontOpticalSizing 取得共享实例。
   * @example
   * class CustomFontOpticalSizingCss extends FontOpticalSizingCss {}
   */
  constructor() {
    super('font-optical-sizing');
  }
  /**
   * 原样生成 font-optical-sizing 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-optical-sizing:value;。
   * @example
   * s.fontOpticalSizing.raw('inherit') // font-optical-sizing:inherit;
   */
  raw(value: Property.FontOpticalSizing | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-palette 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontPaletteKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-palette:dark;`。 */
  readonly dark: Property.FontPalette | CssString = 'dark';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-palette:inherit;`。
   */
  readonly inherit: Property.FontPalette | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-palette:initial;`。
   */
  readonly initial: Property.FontPalette | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-palette:light;`。 */
  readonly light: Property.FontPalette | CssString = 'light';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-palette:normal;`。 */
  readonly normal: Property.FontPalette | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-palette:revert;`。
   */
  readonly revert: Property.FontPalette | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-palette:revert-layer;`。
   */
  readonly revertLayer: Property.FontPalette | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-palette:unset;`。
   */
  readonly unset: Property.FontPalette | CssString = 'unset';
}

/**
 * 选择或覆盖彩色字体使用的调色板。（font-palette）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
 */
export class FontPaletteCss extends CssProperty {
  /** CSS 声明：`font-palette:dark;`。 */
  readonly dark: string = 'font-palette:dark;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-palette:inherit;`。
   */
  readonly inherit: string = 'font-palette:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-palette:initial;`。
   */
  readonly initial: string = 'font-palette:initial;';
  /** CSS 声明：`font-palette:light;`。 */
  readonly light: string = 'font-palette:light;';
  /** CSS 声明：`font-palette:normal;`。 */
  readonly normal: string = 'font-palette:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-palette:revert;`。
   */
  readonly revert: string = 'font-palette:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-palette:revert-layer;`。
   */
  readonly revertLayer: string = 'font-palette:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-palette:unset;`。
   */
  readonly unset: string = 'font-palette:unset;';
  /**
   * 创建 font-palette 属性作者；普通使用通过 s.fontPalette 取得共享实例。
   * @example
   * class CustomFontPaletteCss extends FontPaletteCss {}
   */
  constructor() {
    super('font-palette');
  }
  /**
   * 原样生成 font-palette 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-palette:value;。
   * @example
   * s.fontPalette.raw('inherit') // font-palette:inherit;
   */
  raw(value: Property.FontPalette | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-size 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSizeKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-size:inherit;`。
   */
  readonly inherit: Property.FontSize | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-size:initial;`。
   */
  readonly initial: Property.FontSize | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:large;`。 */
  readonly large: Property.FontSize | CssString = 'large';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:larger;`。 */
  readonly larger: Property.FontSize | CssString = 'larger';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:math;`。 */
  readonly math: Property.FontSize | CssString = 'math';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:medium;`。 */
  readonly medium: Property.FontSize | CssString = 'medium';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-size:revert;`。
   */
  readonly revert: Property.FontSize | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-size:revert-layer;`。
   */
  readonly revertLayer: Property.FontSize | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:small;`。 */
  readonly small: Property.FontSize | CssString = 'small';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:smaller;`。 */
  readonly smaller: Property.FontSize | CssString = 'smaller';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-size:unset;`。
   */
  readonly unset: Property.FontSize | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:x-large;`。 */
  readonly xLarge: Property.FontSize | CssString = 'x-large';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:x-small;`。 */
  readonly xSmall: Property.FontSize | CssString = 'x-small';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:xx-large;`。 */
  readonly xxLarge: Property.FontSize | CssString = 'xx-large';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:xx-small;`。 */
  readonly xxSmall: Property.FontSize | CssString = 'xx-small';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size:xxx-large;`。 */
  readonly xxxLarge: Property.FontSize | CssString = 'xxx-large';
}

/**
 * 设置字体大小，也影响 em 等相对单位的计算。（font-size）
 *
 * 改变字形大小，并影响 em 等相对长度；行盒高度还由 line-height 决定。
 *
 * 适用场景：建立文字层级，根字号相对尺寸可用 rem 表达。
 *
 * CSS 初始值：`medium`（不同于浏览器默认样式表）。
 * @example
 * css(s.fontSize.rem(1), s.lineHeight.raw(1.5))
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
 */
export class FontSizeCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-size:inherit;`。
   */
  readonly inherit: string = 'font-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-size:initial;`。
   */
  readonly initial: string = 'font-size:initial;';
  /** CSS 声明：`font-size:large;`。 */
  readonly large: string = 'font-size:large;';
  /** CSS 声明：`font-size:larger;`。 */
  readonly larger: string = 'font-size:larger;';
  /** CSS 声明：`font-size:math;`。 */
  readonly math: string = 'font-size:math;';
  /** CSS 声明：`font-size:medium;`。 */
  readonly medium: string = 'font-size:medium;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-size:revert;`。
   */
  readonly revert: string = 'font-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-size:revert-layer;`。
   */
  readonly revertLayer: string = 'font-size:revert-layer;';
  /** CSS 声明：`font-size:small;`。 */
  readonly small: string = 'font-size:small;';
  /** CSS 声明：`font-size:smaller;`。 */
  readonly smaller: string = 'font-size:smaller;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-size:unset;`。
   */
  readonly unset: string = 'font-size:unset;';
  /** CSS 声明：`font-size:x-large;`。 */
  readonly xLarge: string = 'font-size:x-large;';
  /** CSS 声明：`font-size:x-small;`。 */
  readonly xSmall: string = 'font-size:x-small;';
  /** CSS 声明：`font-size:xx-large;`。 */
  readonly xxLarge: string = 'font-size:xx-large;';
  /** CSS 声明：`font-size:xx-small;`。 */
  readonly xxSmall: string = 'font-size:xx-small;';
  /** CSS 声明：`font-size:xxx-large;`。 */
  readonly xxxLarge: string = 'font-size:xxx-large;';
  /**
   * 创建 font-size 属性作者；普通使用通过 s.fontSize 取得共享实例。
   * @example
   * class CustomFontSizeCss extends FontSizeCss {}
   */
  constructor() {
    super('font-size');
  }
  /**
   * 原样生成 font-size 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-size:value;。
   * @example
   * s.fontSize.raw('inherit') // font-size:inherit;
   */
  raw(value: Property.FontSize | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.fontSize.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.fontSize.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.fontSize.min('var(--first)', 'var(--second)')
   */
  min(value: Property.FontSize | CssString, ...others: (Property.FontSize | CssString)[]): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.fontSize.max('var(--first)', 'var(--second)')
   */
  max(value: Property.FontSize | CssString, ...others: (Property.FontSize | CssString)[]): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.fontSize.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FontSize | CssString,
    preferred: Property.FontSize | CssString,
    maximum: Property.FontSize | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * font-size-adjust 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSizeAdjustKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size-adjust:from-font;`。 */
  readonly fromFont: Property.FontSizeAdjust | CssString = 'from-font';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-size-adjust:inherit;`。
   */
  readonly inherit: Property.FontSizeAdjust | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-size-adjust:initial;`。
   */
  readonly initial: Property.FontSizeAdjust | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-size-adjust:none;`。 */
  readonly none: Property.FontSizeAdjust | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-size-adjust:revert;`。
   */
  readonly revert: Property.FontSizeAdjust | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-size-adjust:revert-layer;`。
   */
  readonly revertLayer: Property.FontSizeAdjust | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-size-adjust:unset;`。
   */
  readonly unset: Property.FontSizeAdjust | CssString = 'unset';
}

/**
 * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。（font-size-adjust）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
 */
export class FontSizeAdjustCss extends CssProperty {
  /** CSS 声明：`font-size-adjust:from-font;`。 */
  readonly fromFont: string = 'font-size-adjust:from-font;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-size-adjust:inherit;`。
   */
  readonly inherit: string = 'font-size-adjust:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-size-adjust:initial;`。
   */
  readonly initial: string = 'font-size-adjust:initial;';
  /** CSS 声明：`font-size-adjust:none;`。 */
  readonly none: string = 'font-size-adjust:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-size-adjust:revert;`。
   */
  readonly revert: string = 'font-size-adjust:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-size-adjust:revert-layer;`。
   */
  readonly revertLayer: string = 'font-size-adjust:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-size-adjust:unset;`。
   */
  readonly unset: string = 'font-size-adjust:unset;';
  /**
   * 创建 font-size-adjust 属性作者；普通使用通过 s.fontSizeAdjust 取得共享实例。
   * @example
   * class CustomFontSizeAdjustCss extends FontSizeAdjustCss {}
   */
  constructor() {
    super('font-size-adjust');
  }
  /**
   * 原样生成 font-size-adjust 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-size-adjust:value;。
   * @example
   * s.fontSizeAdjust.raw('inherit') // font-size-adjust:inherit;
   */
  raw(value: Property.FontSizeAdjust | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.fontSizeAdjust.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.fontSizeAdjust.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FontSizeAdjust | CssString,
    ...others: (Property.FontSizeAdjust | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.fontSizeAdjust.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FontSizeAdjust | CssString,
    ...others: (Property.FontSizeAdjust | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.fontSizeAdjust.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FontSizeAdjust | CssString,
    preferred: Property.FontSizeAdjust | CssString,
    maximum: Property.FontSizeAdjust | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * font-smooth 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSmoothKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:always;`。 */
  readonly always: Property.FontSmooth | CssString = 'always';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:auto;`。 */
  readonly auto: Property.FontSmooth | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-smooth:inherit;`。
   */
  readonly inherit: Property.FontSmooth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-smooth:initial;`。
   */
  readonly initial: Property.FontSmooth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:large;`。 */
  readonly large: Property.FontSmooth | CssString = 'large';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:medium;`。 */
  readonly medium: Property.FontSmooth | CssString = 'medium';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:never;`。 */
  readonly never: Property.FontSmooth | CssString = 'never';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-smooth:revert;`。
   */
  readonly revert: Property.FontSmooth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-smooth:revert-layer;`。
   */
  readonly revertLayer: Property.FontSmooth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:small;`。 */
  readonly small: Property.FontSmooth | CssString = 'small';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-smooth:unset;`。
   */
  readonly unset: Property.FontSmooth | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:x-large;`。 */
  readonly xLarge: Property.FontSmooth | CssString = 'x-large';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:x-small;`。 */
  readonly xSmall: Property.FontSmooth | CssString = 'x-small';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:xx-large;`。 */
  readonly xxLarge: Property.FontSmooth | CssString = 'xx-large';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:xx-small;`。 */
  readonly xxSmall: Property.FontSmooth | CssString = 'xx-small';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-smooth:xxx-large;`。 */
  readonly xxxLarge: Property.FontSmooth | CssString = 'xxx-large';
}

/**
 * 控制字体平滑的非标准属性；使用前核对目标浏览器。（font-smooth）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
 */
export class FontSmoothCss extends LengthCssProperty {
  /** CSS 声明：`font-smooth:always;`。 */
  readonly always: string = 'font-smooth:always;';
  /** CSS 声明：`font-smooth:auto;`。 */
  readonly auto: string = 'font-smooth:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-smooth:inherit;`。
   */
  readonly inherit: string = 'font-smooth:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-smooth:initial;`。
   */
  readonly initial: string = 'font-smooth:initial;';
  /** CSS 声明：`font-smooth:large;`。 */
  readonly large: string = 'font-smooth:large;';
  /** CSS 声明：`font-smooth:medium;`。 */
  readonly medium: string = 'font-smooth:medium;';
  /** CSS 声明：`font-smooth:never;`。 */
  readonly never: string = 'font-smooth:never;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-smooth:revert;`。
   */
  readonly revert: string = 'font-smooth:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-smooth:revert-layer;`。
   */
  readonly revertLayer: string = 'font-smooth:revert-layer;';
  /** CSS 声明：`font-smooth:small;`。 */
  readonly small: string = 'font-smooth:small;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-smooth:unset;`。
   */
  readonly unset: string = 'font-smooth:unset;';
  /** CSS 声明：`font-smooth:x-large;`。 */
  readonly xLarge: string = 'font-smooth:x-large;';
  /** CSS 声明：`font-smooth:x-small;`。 */
  readonly xSmall: string = 'font-smooth:x-small;';
  /** CSS 声明：`font-smooth:xx-large;`。 */
  readonly xxLarge: string = 'font-smooth:xx-large;';
  /** CSS 声明：`font-smooth:xx-small;`。 */
  readonly xxSmall: string = 'font-smooth:xx-small;';
  /** CSS 声明：`font-smooth:xxx-large;`。 */
  readonly xxxLarge: string = 'font-smooth:xxx-large;';
  /**
   * 创建 font-smooth 属性作者；普通使用通过 s.fontSmooth 取得共享实例。
   * @example
   * class CustomFontSmoothCss extends FontSmoothCss {}
   */
  constructor() {
    super('font-smooth');
  }
  /**
   * 原样生成 font-smooth 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-smooth:value;。
   * @example
   * s.fontSmooth.raw('inherit') // font-smooth:inherit;
   */
  raw(value: Property.FontSmooth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.fontSmooth.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.fontSmooth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FontSmooth | CssString,
    ...others: (Property.FontSmooth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.fontSmooth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FontSmooth | CssString,
    ...others: (Property.FontSmooth | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.fontSmooth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FontSmooth | CssString,
    preferred: Property.FontSmooth | CssString,
    maximum: Property.FontSmooth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * font-stretch 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontStretchKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:condensed;`。 */
  readonly condensed: Property.FontStretch | CssString = 'condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:expanded;`。 */
  readonly expanded: Property.FontStretch | CssString = 'expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:extra-condensed;`。 */
  readonly extraCondensed: Property.FontStretch | CssString = 'extra-condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:extra-expanded;`。 */
  readonly extraExpanded: Property.FontStretch | CssString = 'extra-expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-stretch:inherit;`。
   */
  readonly inherit: Property.FontStretch | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-stretch:initial;`。
   */
  readonly initial: Property.FontStretch | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:normal;`。 */
  readonly normal: Property.FontStretch | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-stretch:revert;`。
   */
  readonly revert: Property.FontStretch | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-stretch:revert-layer;`。
   */
  readonly revertLayer: Property.FontStretch | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:semi-condensed;`。 */
  readonly semiCondensed: Property.FontStretch | CssString = 'semi-condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:semi-expanded;`。 */
  readonly semiExpanded: Property.FontStretch | CssString = 'semi-expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:ultra-condensed;`。 */
  readonly ultraCondensed: Property.FontStretch | CssString = 'ultra-condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-stretch:ultra-expanded;`。 */
  readonly ultraExpanded: Property.FontStretch | CssString = 'ultra-expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-stretch:unset;`。
   */
  readonly unset: Property.FontStretch | CssString = 'unset';
}

/**
 * 选择字体的宽窄字面；font-width 是其较新的名称。（font-stretch）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
 */
export class FontStretchCss extends CssProperty {
  /** CSS 声明：`font-stretch:condensed;`。 */
  readonly condensed: string = 'font-stretch:condensed;';
  /** CSS 声明：`font-stretch:expanded;`。 */
  readonly expanded: string = 'font-stretch:expanded;';
  /** CSS 声明：`font-stretch:extra-condensed;`。 */
  readonly extraCondensed: string = 'font-stretch:extra-condensed;';
  /** CSS 声明：`font-stretch:extra-expanded;`。 */
  readonly extraExpanded: string = 'font-stretch:extra-expanded;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-stretch:inherit;`。
   */
  readonly inherit: string = 'font-stretch:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-stretch:initial;`。
   */
  readonly initial: string = 'font-stretch:initial;';
  /** CSS 声明：`font-stretch:normal;`。 */
  readonly normal: string = 'font-stretch:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-stretch:revert;`。
   */
  readonly revert: string = 'font-stretch:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-stretch:revert-layer;`。
   */
  readonly revertLayer: string = 'font-stretch:revert-layer;';
  /** CSS 声明：`font-stretch:semi-condensed;`。 */
  readonly semiCondensed: string = 'font-stretch:semi-condensed;';
  /** CSS 声明：`font-stretch:semi-expanded;`。 */
  readonly semiExpanded: string = 'font-stretch:semi-expanded;';
  /** CSS 声明：`font-stretch:ultra-condensed;`。 */
  readonly ultraCondensed: string = 'font-stretch:ultra-condensed;';
  /** CSS 声明：`font-stretch:ultra-expanded;`。 */
  readonly ultraExpanded: string = 'font-stretch:ultra-expanded;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-stretch:unset;`。
   */
  readonly unset: string = 'font-stretch:unset;';
  /**
   * 创建 font-stretch 属性作者；普通使用通过 s.fontStretch 取得共享实例。
   * @example
   * class CustomFontStretchCss extends FontStretchCss {}
   */
  constructor() {
    super('font-stretch');
  }
  /**
   * 原样生成 font-stretch 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-stretch:value;。
   * @example
   * s.fontStretch.raw('inherit') // font-stretch:inherit;
   */
  raw(value: Property.FontStretch | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-style 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontStyleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-style:inherit;`。
   */
  readonly inherit: Property.FontStyle | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-style:initial;`。
   */
  readonly initial: Property.FontStyle | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-style:italic;`。 */
  readonly italic: Property.FontStyle | CssString = 'italic';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-style:normal;`。 */
  readonly normal: Property.FontStyle | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-style:oblique;`。 */
  readonly oblique: Property.FontStyle | CssString = 'oblique';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-style:revert;`。
   */
  readonly revert: Property.FontStyle | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-style:revert-layer;`。
   */
  readonly revertLayer: Property.FontStyle | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-style:unset;`。
   */
  readonly unset: Property.FontStyle | CssString = 'unset';
}

/**
 * 选择正常、斜体或倾斜字体样式。（font-style）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
 */
export class FontStyleCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-style:inherit;`。
   */
  readonly inherit: string = 'font-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-style:initial;`。
   */
  readonly initial: string = 'font-style:initial;';
  /** CSS 声明：`font-style:italic;`。 */
  readonly italic: string = 'font-style:italic;';
  /** CSS 声明：`font-style:normal;`。 */
  readonly normal: string = 'font-style:normal;';
  /** CSS 声明：`font-style:oblique;`。 */
  readonly oblique: string = 'font-style:oblique;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-style:revert;`。
   */
  readonly revert: string = 'font-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-style:revert-layer;`。
   */
  readonly revertLayer: string = 'font-style:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-style:unset;`。
   */
  readonly unset: string = 'font-style:unset;';
  /**
   * 创建 font-style 属性作者；普通使用通过 s.fontStyle 取得共享实例。
   * @example
   * class CustomFontStyleCss extends FontStyleCss {}
   */
  constructor() {
    super('font-style');
  }
  /**
   * 原样生成 font-style 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-style:value;。
   * @example
   * s.fontStyle.raw('inherit') // font-style:inherit;
   */
  raw(value: Property.FontStyle | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 deg 单位生成完整属性声明。角度，360deg 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 deg。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.fontStyle.deg(1)
   */
  deg(value: number): string {
    return this.declaration(`${value}deg`);
  }
  /**
   * 使用 grad 单位生成完整属性声明。百分度，400grad 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 grad。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.fontStyle.grad(1)
   */
  grad(value: number): string {
    return this.declaration(`${value}grad`);
  }
  /**
   * 使用 rad 单位生成完整属性声明。弧度，2πrad 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 rad。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.fontStyle.rad(1)
   */
  rad(value: number): string {
    return this.declaration(`${value}rad`);
  }
  /**
   * 使用 turn 单位生成完整属性声明。周数，1turn 为一周。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 turn。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.fontStyle.turn(1)
   */
  turn(value: number): string {
    return this.declaration(`${value}turn`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.fontStyle.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.fontStyle.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FontStyle | CssString,
    ...others: (Property.FontStyle | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.fontStyle.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FontStyle | CssString,
    ...others: (Property.FontStyle | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.fontStyle.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FontStyle | CssString,
    preferred: Property.FontStyle | CssString,
    maximum: Property.FontStyle | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * font-synthesis 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSynthesisKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis:inherit;`。
   */
  readonly inherit: Property.FontSynthesis | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis:initial;`。
   */
  readonly initial: Property.FontSynthesis | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis:none;`。 */
  readonly none: Property.FontSynthesis | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis:position;`。 */
  readonly position: Property.FontSynthesis | CssString = 'position';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis:revert;`。
   */
  readonly revert: Property.FontSynthesis | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis:revert-layer;`。
   */
  readonly revertLayer: Property.FontSynthesis | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis:small-caps;`。 */
  readonly smallCaps: Property.FontSynthesis | CssString = 'small-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis:style;`。 */
  readonly style: Property.FontSynthesis | CssString = 'style';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis:unset;`。
   */
  readonly unset: Property.FontSynthesis | CssString = 'unset';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis:weight;`。 */
  readonly weight: Property.FontSynthesis | CssString = 'weight';
}

/**
 * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。（font-synthesis）
 *
 * CSS 初始值：`weight style small-caps position `（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
 */
export class FontSynthesisCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis:inherit;`。
   */
  readonly inherit: string = 'font-synthesis:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis:initial;`。
   */
  readonly initial: string = 'font-synthesis:initial;';
  /** CSS 声明：`font-synthesis:none;`。 */
  readonly none: string = 'font-synthesis:none;';
  /** CSS 声明：`font-synthesis:position;`。 */
  readonly position: string = 'font-synthesis:position;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis:revert;`。
   */
  readonly revert: string = 'font-synthesis:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis:revert-layer;`。
   */
  readonly revertLayer: string = 'font-synthesis:revert-layer;';
  /** CSS 声明：`font-synthesis:small-caps;`。 */
  readonly smallCaps: string = 'font-synthesis:small-caps;';
  /** CSS 声明：`font-synthesis:style;`。 */
  readonly style: string = 'font-synthesis:style;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis:unset;`。
   */
  readonly unset: string = 'font-synthesis:unset;';
  /** CSS 声明：`font-synthesis:weight;`。 */
  readonly weight: string = 'font-synthesis:weight;';
  /**
   * 创建 font-synthesis 属性作者；普通使用通过 s.fontSynthesis 取得共享实例。
   * @example
   * class CustomFontSynthesisCss extends FontSynthesisCss {}
   */
  constructor() {
    super('font-synthesis');
  }
  /**
   * 原样生成 font-synthesis 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-synthesis:value;。
   * @example
   * s.fontSynthesis.raw('inherit') // font-synthesis:inherit;
   */
  raw(value: Property.FontSynthesis | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-synthesis-position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSynthesisPositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-position:auto;`。 */
  readonly auto: Property.FontSynthesisPosition | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-position:inherit;`。
   */
  readonly inherit: Property.FontSynthesisPosition | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-position:initial;`。
   */
  readonly initial: Property.FontSynthesisPosition | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-position:none;`。 */
  readonly none: Property.FontSynthesisPosition | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-position:revert;`。
   */
  readonly revert: Property.FontSynthesisPosition | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-position:revert-layer;`。
   */
  readonly revertLayer: Property.FontSynthesisPosition | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-position:unset;`。
   */
  readonly unset: Property.FontSynthesisPosition | CssString = 'unset';
}

/**
 * 控制浏览器是否可以合成上标和下标字形。（font-synthesis-position）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
 */
export class FontSynthesisPositionCss extends CssProperty {
  /** CSS 声明：`font-synthesis-position:auto;`。 */
  readonly auto: string = 'font-synthesis-position:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-position:inherit;`。
   */
  readonly inherit: string = 'font-synthesis-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-position:initial;`。
   */
  readonly initial: string = 'font-synthesis-position:initial;';
  /** CSS 声明：`font-synthesis-position:none;`。 */
  readonly none: string = 'font-synthesis-position:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-position:revert;`。
   */
  readonly revert: string = 'font-synthesis-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-position:revert-layer;`。
   */
  readonly revertLayer: string = 'font-synthesis-position:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-position:unset;`。
   */
  readonly unset: string = 'font-synthesis-position:unset;';
  /**
   * 创建 font-synthesis-position 属性作者；普通使用通过 s.fontSynthesisPosition 取得共享实例。
   * @example
   * class CustomFontSynthesisPositionCss extends FontSynthesisPositionCss {}
   */
  constructor() {
    super('font-synthesis-position');
  }
  /**
   * 原样生成 font-synthesis-position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-synthesis-position:value;。
   * @example
   * s.fontSynthesisPosition.raw('inherit') // font-synthesis-position:inherit;
   */
  raw(value: Property.FontSynthesisPosition | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-synthesis-small-caps 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSynthesisSmallCapsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-small-caps:auto;`。 */
  readonly auto: Property.FontSynthesisSmallCaps | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-small-caps:inherit;`。
   */
  readonly inherit: Property.FontSynthesisSmallCaps | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-small-caps:initial;`。
   */
  readonly initial: Property.FontSynthesisSmallCaps | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-small-caps:none;`。 */
  readonly none: Property.FontSynthesisSmallCaps | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-small-caps:revert;`。
   */
  readonly revert: Property.FontSynthesisSmallCaps | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-small-caps:revert-layer;`。
   */
  readonly revertLayer: Property.FontSynthesisSmallCaps | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-small-caps:unset;`。
   */
  readonly unset: Property.FontSynthesisSmallCaps | CssString = 'unset';
}

/**
 * 控制浏览器是否可以合成小型大写字形。（font-synthesis-small-caps）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
 */
export class FontSynthesisSmallCapsCss extends CssProperty {
  /** CSS 声明：`font-synthesis-small-caps:auto;`。 */
  readonly auto: string = 'font-synthesis-small-caps:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-small-caps:inherit;`。
   */
  readonly inherit: string = 'font-synthesis-small-caps:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-small-caps:initial;`。
   */
  readonly initial: string = 'font-synthesis-small-caps:initial;';
  /** CSS 声明：`font-synthesis-small-caps:none;`。 */
  readonly none: string = 'font-synthesis-small-caps:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-small-caps:revert;`。
   */
  readonly revert: string = 'font-synthesis-small-caps:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-small-caps:revert-layer;`。
   */
  readonly revertLayer: string = 'font-synthesis-small-caps:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-small-caps:unset;`。
   */
  readonly unset: string = 'font-synthesis-small-caps:unset;';
  /**
   * 创建 font-synthesis-small-caps 属性作者；普通使用通过 s.fontSynthesisSmallCaps 取得共享实例。
   * @example
   * class CustomFontSynthesisSmallCapsCss extends FontSynthesisSmallCapsCss {}
   */
  constructor() {
    super('font-synthesis-small-caps');
  }
  /**
   * 原样生成 font-synthesis-small-caps 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-synthesis-small-caps:value;。
   * @example
   * s.fontSynthesisSmallCaps.raw('inherit') // font-synthesis-small-caps:inherit;
   */
  raw(value: Property.FontSynthesisSmallCaps | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-synthesis-style 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSynthesisStyleKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-style:auto;`。 */
  readonly auto: Property.FontSynthesisStyle | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-style:inherit;`。
   */
  readonly inherit: Property.FontSynthesisStyle | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-style:initial;`。
   */
  readonly initial: Property.FontSynthesisStyle | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-style:none;`。 */
  readonly none: Property.FontSynthesisStyle | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-style:revert;`。
   */
  readonly revert: Property.FontSynthesisStyle | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-style:revert-layer;`。
   */
  readonly revertLayer: Property.FontSynthesisStyle | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-style:unset;`。
   */
  readonly unset: Property.FontSynthesisStyle | CssString = 'unset';
}

/**
 * 控制浏览器是否可以合成倾斜字体。（font-synthesis-style）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
 */
export class FontSynthesisStyleCss extends CssProperty {
  /** CSS 声明：`font-synthesis-style:auto;`。 */
  readonly auto: string = 'font-synthesis-style:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-style:inherit;`。
   */
  readonly inherit: string = 'font-synthesis-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-style:initial;`。
   */
  readonly initial: string = 'font-synthesis-style:initial;';
  /** CSS 声明：`font-synthesis-style:none;`。 */
  readonly none: string = 'font-synthesis-style:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-style:revert;`。
   */
  readonly revert: string = 'font-synthesis-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-style:revert-layer;`。
   */
  readonly revertLayer: string = 'font-synthesis-style:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-style:unset;`。
   */
  readonly unset: string = 'font-synthesis-style:unset;';
  /**
   * 创建 font-synthesis-style 属性作者；普通使用通过 s.fontSynthesisStyle 取得共享实例。
   * @example
   * class CustomFontSynthesisStyleCss extends FontSynthesisStyleCss {}
   */
  constructor() {
    super('font-synthesis-style');
  }
  /**
   * 原样生成 font-synthesis-style 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-synthesis-style:value;。
   * @example
   * s.fontSynthesisStyle.raw('inherit') // font-synthesis-style:inherit;
   */
  raw(value: Property.FontSynthesisStyle | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-synthesis-weight 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontSynthesisWeightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-weight:auto;`。 */
  readonly auto: Property.FontSynthesisWeight | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-weight:inherit;`。
   */
  readonly inherit: Property.FontSynthesisWeight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-weight:initial;`。
   */
  readonly initial: Property.FontSynthesisWeight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-synthesis-weight:none;`。 */
  readonly none: Property.FontSynthesisWeight | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-weight:revert;`。
   */
  readonly revert: Property.FontSynthesisWeight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-weight:revert-layer;`。
   */
  readonly revertLayer: Property.FontSynthesisWeight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-weight:unset;`。
   */
  readonly unset: Property.FontSynthesisWeight | CssString = 'unset';
}

/**
 * 控制浏览器是否可以合成加粗字体。（font-synthesis-weight）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
 */
export class FontSynthesisWeightCss extends CssProperty {
  /** CSS 声明：`font-synthesis-weight:auto;`。 */
  readonly auto: string = 'font-synthesis-weight:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-weight:inherit;`。
   */
  readonly inherit: string = 'font-synthesis-weight:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-weight:initial;`。
   */
  readonly initial: string = 'font-synthesis-weight:initial;';
  /** CSS 声明：`font-synthesis-weight:none;`。 */
  readonly none: string = 'font-synthesis-weight:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-weight:revert;`。
   */
  readonly revert: string = 'font-synthesis-weight:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-weight:revert-layer;`。
   */
  readonly revertLayer: string = 'font-synthesis-weight:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-weight:unset;`。
   */
  readonly unset: string = 'font-synthesis-weight:unset;';
  /**
   * 创建 font-synthesis-weight 属性作者；普通使用通过 s.fontSynthesisWeight 取得共享实例。
   * @example
   * class CustomFontSynthesisWeightCss extends FontSynthesisWeightCss {}
   */
  constructor() {
    super('font-synthesis-weight');
  }
  /**
   * 原样生成 font-synthesis-weight 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-synthesis-weight:value;。
   * @example
   * s.fontSynthesisWeight.raw('inherit') // font-synthesis-weight:inherit;
   */
  raw(value: Property.FontSynthesisWeight | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:all-petite-caps;`。 */
  readonly allPetiteCaps: Property.FontVariant | CssString = 'all-petite-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:all-small-caps;`。 */
  readonly allSmallCaps: Property.FontVariant | CssString = 'all-small-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:common-ligatures;`。 */
  readonly commonLigatures: Property.FontVariant | CssString = 'common-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:contextual;`。 */
  readonly contextual: Property.FontVariant | CssString = 'contextual';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:diagonal-fractions;`。 */
  readonly diagonalFractions: Property.FontVariant | CssString = 'diagonal-fractions';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:discretionary-ligatures;`。 */
  readonly discretionaryLigatures: Property.FontVariant | CssString = 'discretionary-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:full-width;`。 */
  readonly fullWidth: Property.FontVariant | CssString = 'full-width';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:historical-forms;`。 */
  readonly historicalForms: Property.FontVariant | CssString = 'historical-forms';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:historical-ligatures;`。 */
  readonly historicalLigatures: Property.FontVariant | CssString = 'historical-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant:inherit;`。
   */
  readonly inherit: Property.FontVariant | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant:initial;`。
   */
  readonly initial: Property.FontVariant | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:jis04;`。 */
  readonly jis04: Property.FontVariant | CssString = 'jis04';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:jis78;`。 */
  readonly jis78: Property.FontVariant | CssString = 'jis78';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:jis83;`。 */
  readonly jis83: Property.FontVariant | CssString = 'jis83';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:jis90;`。 */
  readonly jis90: Property.FontVariant | CssString = 'jis90';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:lining-nums;`。 */
  readonly liningNums: Property.FontVariant | CssString = 'lining-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:no-common-ligatures;`。 */
  readonly noCommonLigatures: Property.FontVariant | CssString = 'no-common-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:no-contextual;`。 */
  readonly noContextual: Property.FontVariant | CssString = 'no-contextual';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:no-discretionary-ligatures;`。 */
  readonly noDiscretionaryLigatures: Property.FontVariant | CssString =
    'no-discretionary-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:no-historical-ligatures;`。 */
  readonly noHistoricalLigatures: Property.FontVariant | CssString = 'no-historical-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:none;`。 */
  readonly none: Property.FontVariant | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:normal;`。 */
  readonly normal: Property.FontVariant | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:oldstyle-nums;`。 */
  readonly oldstyleNums: Property.FontVariant | CssString = 'oldstyle-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:ordinal;`。 */
  readonly ordinal: Property.FontVariant | CssString = 'ordinal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:petite-caps;`。 */
  readonly petiteCaps: Property.FontVariant | CssString = 'petite-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:proportional-nums;`。 */
  readonly proportionalNums: Property.FontVariant | CssString = 'proportional-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:proportional-width;`。 */
  readonly proportionalWidth: Property.FontVariant | CssString = 'proportional-width';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant:revert;`。
   */
  readonly revert: Property.FontVariant | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariant | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:ruby;`。 */
  readonly ruby: Property.FontVariant | CssString = 'ruby';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:simplified;`。 */
  readonly simplified: Property.FontVariant | CssString = 'simplified';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:slashed-zero;`。 */
  readonly slashedZero: Property.FontVariant | CssString = 'slashed-zero';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:small-caps;`。 */
  readonly smallCaps: Property.FontVariant | CssString = 'small-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:stacked-fractions;`。 */
  readonly stackedFractions: Property.FontVariant | CssString = 'stacked-fractions';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:tabular-nums;`。 */
  readonly tabularNums: Property.FontVariant | CssString = 'tabular-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:titling-caps;`。 */
  readonly titlingCaps: Property.FontVariant | CssString = 'titling-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:traditional;`。 */
  readonly traditional: Property.FontVariant | CssString = 'traditional';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant:unicase;`。 */
  readonly unicase: Property.FontVariant | CssString = 'unicase';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant:unset;`。
   */
  readonly unset: Property.FontVariant | CssString = 'unset';
}

/**
 * 集中设置字体的连字、大小写、数字及其他变体。（font-variant）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
 */
export class FontVariantCss extends CssProperty {
  /** CSS 声明：`font-variant:all-petite-caps;`。 */
  readonly allPetiteCaps: string = 'font-variant:all-petite-caps;';
  /** CSS 声明：`font-variant:all-small-caps;`。 */
  readonly allSmallCaps: string = 'font-variant:all-small-caps;';
  /** CSS 声明：`font-variant:common-ligatures;`。 */
  readonly commonLigatures: string = 'font-variant:common-ligatures;';
  /** CSS 声明：`font-variant:contextual;`。 */
  readonly contextual: string = 'font-variant:contextual;';
  /** CSS 声明：`font-variant:diagonal-fractions;`。 */
  readonly diagonalFractions: string = 'font-variant:diagonal-fractions;';
  /** CSS 声明：`font-variant:discretionary-ligatures;`。 */
  readonly discretionaryLigatures: string = 'font-variant:discretionary-ligatures;';
  /** CSS 声明：`font-variant:full-width;`。 */
  readonly fullWidth: string = 'font-variant:full-width;';
  /** CSS 声明：`font-variant:historical-forms;`。 */
  readonly historicalForms: string = 'font-variant:historical-forms;';
  /** CSS 声明：`font-variant:historical-ligatures;`。 */
  readonly historicalLigatures: string = 'font-variant:historical-ligatures;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant:inherit;`。
   */
  readonly inherit: string = 'font-variant:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant:initial;`。
   */
  readonly initial: string = 'font-variant:initial;';
  /** CSS 声明：`font-variant:jis04;`。 */
  readonly jis04: string = 'font-variant:jis04;';
  /** CSS 声明：`font-variant:jis78;`。 */
  readonly jis78: string = 'font-variant:jis78;';
  /** CSS 声明：`font-variant:jis83;`。 */
  readonly jis83: string = 'font-variant:jis83;';
  /** CSS 声明：`font-variant:jis90;`。 */
  readonly jis90: string = 'font-variant:jis90;';
  /** CSS 声明：`font-variant:lining-nums;`。 */
  readonly liningNums: string = 'font-variant:lining-nums;';
  /** CSS 声明：`font-variant:no-common-ligatures;`。 */
  readonly noCommonLigatures: string = 'font-variant:no-common-ligatures;';
  /** CSS 声明：`font-variant:no-contextual;`。 */
  readonly noContextual: string = 'font-variant:no-contextual;';
  /** CSS 声明：`font-variant:no-discretionary-ligatures;`。 */
  readonly noDiscretionaryLigatures: string = 'font-variant:no-discretionary-ligatures;';
  /** CSS 声明：`font-variant:no-historical-ligatures;`。 */
  readonly noHistoricalLigatures: string = 'font-variant:no-historical-ligatures;';
  /** CSS 声明：`font-variant:none;`。 */
  readonly none: string = 'font-variant:none;';
  /** CSS 声明：`font-variant:normal;`。 */
  readonly normal: string = 'font-variant:normal;';
  /** CSS 声明：`font-variant:oldstyle-nums;`。 */
  readonly oldstyleNums: string = 'font-variant:oldstyle-nums;';
  /** CSS 声明：`font-variant:ordinal;`。 */
  readonly ordinal: string = 'font-variant:ordinal;';
  /** CSS 声明：`font-variant:petite-caps;`。 */
  readonly petiteCaps: string = 'font-variant:petite-caps;';
  /** CSS 声明：`font-variant:proportional-nums;`。 */
  readonly proportionalNums: string = 'font-variant:proportional-nums;';
  /** CSS 声明：`font-variant:proportional-width;`。 */
  readonly proportionalWidth: string = 'font-variant:proportional-width;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant:revert;`。
   */
  readonly revert: string = 'font-variant:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant:revert-layer;';
  /** CSS 声明：`font-variant:ruby;`。 */
  readonly ruby: string = 'font-variant:ruby;';
  /** CSS 声明：`font-variant:simplified;`。 */
  readonly simplified: string = 'font-variant:simplified;';
  /** CSS 声明：`font-variant:slashed-zero;`。 */
  readonly slashedZero: string = 'font-variant:slashed-zero;';
  /** CSS 声明：`font-variant:small-caps;`。 */
  readonly smallCaps: string = 'font-variant:small-caps;';
  /** CSS 声明：`font-variant:stacked-fractions;`。 */
  readonly stackedFractions: string = 'font-variant:stacked-fractions;';
  /** CSS 声明：`font-variant:tabular-nums;`。 */
  readonly tabularNums: string = 'font-variant:tabular-nums;';
  /** CSS 声明：`font-variant:titling-caps;`。 */
  readonly titlingCaps: string = 'font-variant:titling-caps;';
  /** CSS 声明：`font-variant:traditional;`。 */
  readonly traditional: string = 'font-variant:traditional;';
  /** CSS 声明：`font-variant:unicase;`。 */
  readonly unicase: string = 'font-variant:unicase;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant:unset;`。
   */
  readonly unset: string = 'font-variant:unset;';
  /**
   * 创建 font-variant 属性作者；普通使用通过 s.fontVariant 取得共享实例。
   * @example
   * class CustomFontVariantCss extends FontVariantCss {}
   */
  constructor() {
    super('font-variant');
  }
  /**
   * 原样生成 font-variant 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant:value;。
   * @example
   * s.fontVariant.raw('inherit') // font-variant:inherit;
   */
  raw(value: Property.FontVariant | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant-alternates 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantAlternatesKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-alternates:historical-forms;`。 */
  readonly historicalForms: Property.FontVariantAlternates | CssString = 'historical-forms';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-alternates:inherit;`。
   */
  readonly inherit: Property.FontVariantAlternates | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-alternates:initial;`。
   */
  readonly initial: Property.FontVariantAlternates | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-alternates:normal;`。 */
  readonly normal: Property.FontVariantAlternates | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-alternates:revert;`。
   */
  readonly revert: Property.FontVariantAlternates | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-alternates:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariantAlternates | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-alternates:unset;`。
   */
  readonly unset: Property.FontVariantAlternates | CssString = 'unset';
}

/**
 * 选择字体提供的替代字形。（font-variant-alternates）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
 */
export class FontVariantAlternatesCss extends CssProperty {
  /** CSS 声明：`font-variant-alternates:historical-forms;`。 */
  readonly historicalForms: string = 'font-variant-alternates:historical-forms;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-alternates:inherit;`。
   */
  readonly inherit: string = 'font-variant-alternates:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-alternates:initial;`。
   */
  readonly initial: string = 'font-variant-alternates:initial;';
  /** CSS 声明：`font-variant-alternates:normal;`。 */
  readonly normal: string = 'font-variant-alternates:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-alternates:revert;`。
   */
  readonly revert: string = 'font-variant-alternates:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-alternates:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant-alternates:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-alternates:unset;`。
   */
  readonly unset: string = 'font-variant-alternates:unset;';
  /**
   * 创建 font-variant-alternates 属性作者；普通使用通过 s.fontVariantAlternates 取得共享实例。
   * @example
   * class CustomFontVariantAlternatesCss extends FontVariantAlternatesCss {}
   */
  constructor() {
    super('font-variant-alternates');
  }
  /**
   * 原样生成 font-variant-alternates 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant-alternates:value;。
   * @example
   * s.fontVariantAlternates.raw('inherit') // font-variant-alternates:inherit;
   */
  raw(value: Property.FontVariantAlternates | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant-caps 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantCapsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-caps:all-petite-caps;`。 */
  readonly allPetiteCaps: Property.FontVariantCaps | CssString = 'all-petite-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-caps:all-small-caps;`。 */
  readonly allSmallCaps: Property.FontVariantCaps | CssString = 'all-small-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-caps:inherit;`。
   */
  readonly inherit: Property.FontVariantCaps | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-caps:initial;`。
   */
  readonly initial: Property.FontVariantCaps | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-caps:normal;`。 */
  readonly normal: Property.FontVariantCaps | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-caps:petite-caps;`。 */
  readonly petiteCaps: Property.FontVariantCaps | CssString = 'petite-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-caps:revert;`。
   */
  readonly revert: Property.FontVariantCaps | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-caps:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariantCaps | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-caps:small-caps;`。 */
  readonly smallCaps: Property.FontVariantCaps | CssString = 'small-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-caps:titling-caps;`。 */
  readonly titlingCaps: Property.FontVariantCaps | CssString = 'titling-caps';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-caps:unicase;`。 */
  readonly unicase: Property.FontVariantCaps | CssString = 'unicase';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-caps:unset;`。
   */
  readonly unset: Property.FontVariantCaps | CssString = 'unset';
}

/**
 * 设置小型大写等大小写字形变体。（font-variant-caps）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
 */
export class FontVariantCapsCss extends CssProperty {
  /** CSS 声明：`font-variant-caps:all-petite-caps;`。 */
  readonly allPetiteCaps: string = 'font-variant-caps:all-petite-caps;';
  /** CSS 声明：`font-variant-caps:all-small-caps;`。 */
  readonly allSmallCaps: string = 'font-variant-caps:all-small-caps;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-caps:inherit;`。
   */
  readonly inherit: string = 'font-variant-caps:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-caps:initial;`。
   */
  readonly initial: string = 'font-variant-caps:initial;';
  /** CSS 声明：`font-variant-caps:normal;`。 */
  readonly normal: string = 'font-variant-caps:normal;';
  /** CSS 声明：`font-variant-caps:petite-caps;`。 */
  readonly petiteCaps: string = 'font-variant-caps:petite-caps;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-caps:revert;`。
   */
  readonly revert: string = 'font-variant-caps:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-caps:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant-caps:revert-layer;';
  /** CSS 声明：`font-variant-caps:small-caps;`。 */
  readonly smallCaps: string = 'font-variant-caps:small-caps;';
  /** CSS 声明：`font-variant-caps:titling-caps;`。 */
  readonly titlingCaps: string = 'font-variant-caps:titling-caps;';
  /** CSS 声明：`font-variant-caps:unicase;`。 */
  readonly unicase: string = 'font-variant-caps:unicase;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-caps:unset;`。
   */
  readonly unset: string = 'font-variant-caps:unset;';
  /**
   * 创建 font-variant-caps 属性作者；普通使用通过 s.fontVariantCaps 取得共享实例。
   * @example
   * class CustomFontVariantCapsCss extends FontVariantCapsCss {}
   */
  constructor() {
    super('font-variant-caps');
  }
  /**
   * 原样生成 font-variant-caps 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant-caps:value;。
   * @example
   * s.fontVariantCaps.raw('inherit') // font-variant-caps:inherit;
   */
  raw(value: Property.FontVariantCaps | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant-east-asian 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantEastAsianKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:full-width;`。 */
  readonly fullWidth: Property.FontVariantEastAsian | CssString = 'full-width';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-east-asian:inherit;`。
   */
  readonly inherit: Property.FontVariantEastAsian | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-east-asian:initial;`。
   */
  readonly initial: Property.FontVariantEastAsian | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:jis04;`。 */
  readonly jis04: Property.FontVariantEastAsian | CssString = 'jis04';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:jis78;`。 */
  readonly jis78: Property.FontVariantEastAsian | CssString = 'jis78';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:jis83;`。 */
  readonly jis83: Property.FontVariantEastAsian | CssString = 'jis83';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:jis90;`。 */
  readonly jis90: Property.FontVariantEastAsian | CssString = 'jis90';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:normal;`。 */
  readonly normal: Property.FontVariantEastAsian | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:proportional-width;`。 */
  readonly proportionalWidth: Property.FontVariantEastAsian | CssString = 'proportional-width';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-east-asian:revert;`。
   */
  readonly revert: Property.FontVariantEastAsian | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-east-asian:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariantEastAsian | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:ruby;`。 */
  readonly ruby: Property.FontVariantEastAsian | CssString = 'ruby';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:simplified;`。 */
  readonly simplified: Property.FontVariantEastAsian | CssString = 'simplified';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-east-asian:traditional;`。 */
  readonly traditional: Property.FontVariantEastAsian | CssString = 'traditional';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-east-asian:unset;`。
   */
  readonly unset: Property.FontVariantEastAsian | CssString = 'unset';
}

/**
 * 设置东亚文字字形及宽度变体。（font-variant-east-asian）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
 */
export class FontVariantEastAsianCss extends CssProperty {
  /** CSS 声明：`font-variant-east-asian:full-width;`。 */
  readonly fullWidth: string = 'font-variant-east-asian:full-width;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-east-asian:inherit;`。
   */
  readonly inherit: string = 'font-variant-east-asian:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-east-asian:initial;`。
   */
  readonly initial: string = 'font-variant-east-asian:initial;';
  /** CSS 声明：`font-variant-east-asian:jis04;`。 */
  readonly jis04: string = 'font-variant-east-asian:jis04;';
  /** CSS 声明：`font-variant-east-asian:jis78;`。 */
  readonly jis78: string = 'font-variant-east-asian:jis78;';
  /** CSS 声明：`font-variant-east-asian:jis83;`。 */
  readonly jis83: string = 'font-variant-east-asian:jis83;';
  /** CSS 声明：`font-variant-east-asian:jis90;`。 */
  readonly jis90: string = 'font-variant-east-asian:jis90;';
  /** CSS 声明：`font-variant-east-asian:normal;`。 */
  readonly normal: string = 'font-variant-east-asian:normal;';
  /** CSS 声明：`font-variant-east-asian:proportional-width;`。 */
  readonly proportionalWidth: string = 'font-variant-east-asian:proportional-width;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-east-asian:revert;`。
   */
  readonly revert: string = 'font-variant-east-asian:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-east-asian:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant-east-asian:revert-layer;';
  /** CSS 声明：`font-variant-east-asian:ruby;`。 */
  readonly ruby: string = 'font-variant-east-asian:ruby;';
  /** CSS 声明：`font-variant-east-asian:simplified;`。 */
  readonly simplified: string = 'font-variant-east-asian:simplified;';
  /** CSS 声明：`font-variant-east-asian:traditional;`。 */
  readonly traditional: string = 'font-variant-east-asian:traditional;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-east-asian:unset;`。
   */
  readonly unset: string = 'font-variant-east-asian:unset;';
  /**
   * 创建 font-variant-east-asian 属性作者；普通使用通过 s.fontVariantEastAsian 取得共享实例。
   * @example
   * class CustomFontVariantEastAsianCss extends FontVariantEastAsianCss {}
   */
  constructor() {
    super('font-variant-east-asian');
  }
  /**
   * 原样生成 font-variant-east-asian 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant-east-asian:value;。
   * @example
   * s.fontVariantEastAsian.raw('inherit') // font-variant-east-asian:inherit;
   */
  raw(value: Property.FontVariantEastAsian | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant-emoji 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantEmojiKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-emoji:emoji;`。 */
  readonly emoji: Property.FontVariantEmoji | CssString = 'emoji';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-emoji:inherit;`。
   */
  readonly inherit: Property.FontVariantEmoji | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-emoji:initial;`。
   */
  readonly initial: Property.FontVariantEmoji | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-emoji:normal;`。 */
  readonly normal: Property.FontVariantEmoji | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-emoji:revert;`。
   */
  readonly revert: Property.FontVariantEmoji | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-emoji:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariantEmoji | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-emoji:text;`。 */
  readonly text: Property.FontVariantEmoji | CssString = 'text';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-emoji:unicode;`。 */
  readonly unicode: Property.FontVariantEmoji | CssString = 'unicode';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-emoji:unset;`。
   */
  readonly unset: Property.FontVariantEmoji | CssString = 'unset';
}

/**
 * 设置字符优先采用文本字形还是 emoji 字形。（font-variant-emoji）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
 */
export class FontVariantEmojiCss extends CssProperty {
  /** CSS 声明：`font-variant-emoji:emoji;`。 */
  readonly emoji: string = 'font-variant-emoji:emoji;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-emoji:inherit;`。
   */
  readonly inherit: string = 'font-variant-emoji:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-emoji:initial;`。
   */
  readonly initial: string = 'font-variant-emoji:initial;';
  /** CSS 声明：`font-variant-emoji:normal;`。 */
  readonly normal: string = 'font-variant-emoji:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-emoji:revert;`。
   */
  readonly revert: string = 'font-variant-emoji:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-emoji:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant-emoji:revert-layer;';
  /** CSS 声明：`font-variant-emoji:text;`。 */
  readonly text: string = 'font-variant-emoji:text;';
  /** CSS 声明：`font-variant-emoji:unicode;`。 */
  readonly unicode: string = 'font-variant-emoji:unicode;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-emoji:unset;`。
   */
  readonly unset: string = 'font-variant-emoji:unset;';
  /**
   * 创建 font-variant-emoji 属性作者；普通使用通过 s.fontVariantEmoji 取得共享实例。
   * @example
   * class CustomFontVariantEmojiCss extends FontVariantEmojiCss {}
   */
  constructor() {
    super('font-variant-emoji');
  }
  /**
   * 原样生成 font-variant-emoji 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant-emoji:value;。
   * @example
   * s.fontVariantEmoji.raw('inherit') // font-variant-emoji:inherit;
   */
  raw(value: Property.FontVariantEmoji | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant-ligatures 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantLigaturesKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:common-ligatures;`。 */
  readonly commonLigatures: Property.FontVariantLigatures | CssString = 'common-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:contextual;`。 */
  readonly contextual: Property.FontVariantLigatures | CssString = 'contextual';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:discretionary-ligatures;`。 */
  readonly discretionaryLigatures: Property.FontVariantLigatures | CssString =
    'discretionary-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:historical-ligatures;`。 */
  readonly historicalLigatures: Property.FontVariantLigatures | CssString = 'historical-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-ligatures:inherit;`。
   */
  readonly inherit: Property.FontVariantLigatures | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-ligatures:initial;`。
   */
  readonly initial: Property.FontVariantLigatures | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:no-common-ligatures;`。 */
  readonly noCommonLigatures: Property.FontVariantLigatures | CssString = 'no-common-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:no-contextual;`。 */
  readonly noContextual: Property.FontVariantLigatures | CssString = 'no-contextual';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:no-discretionary-ligatures;`。 */
  readonly noDiscretionaryLigatures: Property.FontVariantLigatures | CssString =
    'no-discretionary-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:no-historical-ligatures;`。 */
  readonly noHistoricalLigatures: Property.FontVariantLigatures | CssString =
    'no-historical-ligatures';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:none;`。 */
  readonly none: Property.FontVariantLigatures | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-ligatures:normal;`。 */
  readonly normal: Property.FontVariantLigatures | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-ligatures:revert;`。
   */
  readonly revert: Property.FontVariantLigatures | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-ligatures:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariantLigatures | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-ligatures:unset;`。
   */
  readonly unset: Property.FontVariantLigatures | CssString = 'unset';
}

/**
 * 设置字体连字的启用方式。（font-variant-ligatures）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
 */
export class FontVariantLigaturesCss extends CssProperty {
  /** CSS 声明：`font-variant-ligatures:common-ligatures;`。 */
  readonly commonLigatures: string = 'font-variant-ligatures:common-ligatures;';
  /** CSS 声明：`font-variant-ligatures:contextual;`。 */
  readonly contextual: string = 'font-variant-ligatures:contextual;';
  /** CSS 声明：`font-variant-ligatures:discretionary-ligatures;`。 */
  readonly discretionaryLigatures: string = 'font-variant-ligatures:discretionary-ligatures;';
  /** CSS 声明：`font-variant-ligatures:historical-ligatures;`。 */
  readonly historicalLigatures: string = 'font-variant-ligatures:historical-ligatures;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-ligatures:inherit;`。
   */
  readonly inherit: string = 'font-variant-ligatures:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-ligatures:initial;`。
   */
  readonly initial: string = 'font-variant-ligatures:initial;';
  /** CSS 声明：`font-variant-ligatures:no-common-ligatures;`。 */
  readonly noCommonLigatures: string = 'font-variant-ligatures:no-common-ligatures;';
  /** CSS 声明：`font-variant-ligatures:no-contextual;`。 */
  readonly noContextual: string = 'font-variant-ligatures:no-contextual;';
  /** CSS 声明：`font-variant-ligatures:no-discretionary-ligatures;`。 */
  readonly noDiscretionaryLigatures: string = 'font-variant-ligatures:no-discretionary-ligatures;';
  /** CSS 声明：`font-variant-ligatures:no-historical-ligatures;`。 */
  readonly noHistoricalLigatures: string = 'font-variant-ligatures:no-historical-ligatures;';
  /** CSS 声明：`font-variant-ligatures:none;`。 */
  readonly none: string = 'font-variant-ligatures:none;';
  /** CSS 声明：`font-variant-ligatures:normal;`。 */
  readonly normal: string = 'font-variant-ligatures:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-ligatures:revert;`。
   */
  readonly revert: string = 'font-variant-ligatures:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-ligatures:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant-ligatures:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-ligatures:unset;`。
   */
  readonly unset: string = 'font-variant-ligatures:unset;';
  /**
   * 创建 font-variant-ligatures 属性作者；普通使用通过 s.fontVariantLigatures 取得共享实例。
   * @example
   * class CustomFontVariantLigaturesCss extends FontVariantLigaturesCss {}
   */
  constructor() {
    super('font-variant-ligatures');
  }
  /**
   * 原样生成 font-variant-ligatures 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant-ligatures:value;。
   * @example
   * s.fontVariantLigatures.raw('inherit') // font-variant-ligatures:inherit;
   */
  raw(value: Property.FontVariantLigatures | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant-numeric 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantNumericKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:diagonal-fractions;`。 */
  readonly diagonalFractions: Property.FontVariantNumeric | CssString = 'diagonal-fractions';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-numeric:inherit;`。
   */
  readonly inherit: Property.FontVariantNumeric | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-numeric:initial;`。
   */
  readonly initial: Property.FontVariantNumeric | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:lining-nums;`。 */
  readonly liningNums: Property.FontVariantNumeric | CssString = 'lining-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:normal;`。 */
  readonly normal: Property.FontVariantNumeric | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:oldstyle-nums;`。 */
  readonly oldstyleNums: Property.FontVariantNumeric | CssString = 'oldstyle-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:ordinal;`。 */
  readonly ordinal: Property.FontVariantNumeric | CssString = 'ordinal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:proportional-nums;`。 */
  readonly proportionalNums: Property.FontVariantNumeric | CssString = 'proportional-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-numeric:revert;`。
   */
  readonly revert: Property.FontVariantNumeric | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-numeric:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariantNumeric | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:slashed-zero;`。 */
  readonly slashedZero: Property.FontVariantNumeric | CssString = 'slashed-zero';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:stacked-fractions;`。 */
  readonly stackedFractions: Property.FontVariantNumeric | CssString = 'stacked-fractions';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-numeric:tabular-nums;`。 */
  readonly tabularNums: Property.FontVariantNumeric | CssString = 'tabular-nums';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-numeric:unset;`。
   */
  readonly unset: Property.FontVariantNumeric | CssString = 'unset';
}

/**
 * 设置数字的等宽、比例、分数及其他排版变体。（font-variant-numeric）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
 */
export class FontVariantNumericCss extends CssProperty {
  /** CSS 声明：`font-variant-numeric:diagonal-fractions;`。 */
  readonly diagonalFractions: string = 'font-variant-numeric:diagonal-fractions;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-numeric:inherit;`。
   */
  readonly inherit: string = 'font-variant-numeric:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-numeric:initial;`。
   */
  readonly initial: string = 'font-variant-numeric:initial;';
  /** CSS 声明：`font-variant-numeric:lining-nums;`。 */
  readonly liningNums: string = 'font-variant-numeric:lining-nums;';
  /** CSS 声明：`font-variant-numeric:normal;`。 */
  readonly normal: string = 'font-variant-numeric:normal;';
  /** CSS 声明：`font-variant-numeric:oldstyle-nums;`。 */
  readonly oldstyleNums: string = 'font-variant-numeric:oldstyle-nums;';
  /** CSS 声明：`font-variant-numeric:ordinal;`。 */
  readonly ordinal: string = 'font-variant-numeric:ordinal;';
  /** CSS 声明：`font-variant-numeric:proportional-nums;`。 */
  readonly proportionalNums: string = 'font-variant-numeric:proportional-nums;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-numeric:revert;`。
   */
  readonly revert: string = 'font-variant-numeric:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-numeric:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant-numeric:revert-layer;';
  /** CSS 声明：`font-variant-numeric:slashed-zero;`。 */
  readonly slashedZero: string = 'font-variant-numeric:slashed-zero;';
  /** CSS 声明：`font-variant-numeric:stacked-fractions;`。 */
  readonly stackedFractions: string = 'font-variant-numeric:stacked-fractions;';
  /** CSS 声明：`font-variant-numeric:tabular-nums;`。 */
  readonly tabularNums: string = 'font-variant-numeric:tabular-nums;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-numeric:unset;`。
   */
  readonly unset: string = 'font-variant-numeric:unset;';
  /**
   * 创建 font-variant-numeric 属性作者；普通使用通过 s.fontVariantNumeric 取得共享实例。
   * @example
   * class CustomFontVariantNumericCss extends FontVariantNumericCss {}
   */
  constructor() {
    super('font-variant-numeric');
  }
  /**
   * 原样生成 font-variant-numeric 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant-numeric:value;。
   * @example
   * s.fontVariantNumeric.raw('inherit') // font-variant-numeric:inherit;
   */
  raw(value: Property.FontVariantNumeric | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variant-position 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariantPositionKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-position:inherit;`。
   */
  readonly inherit: Property.FontVariantPosition | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-position:initial;`。
   */
  readonly initial: Property.FontVariantPosition | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-position:normal;`。 */
  readonly normal: Property.FontVariantPosition | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-position:revert;`。
   */
  readonly revert: Property.FontVariantPosition | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-position:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariantPosition | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-position:sub;`。 */
  readonly sub: Property.FontVariantPosition | CssString = 'sub';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variant-position:super;`。 */
  readonly super: Property.FontVariantPosition | CssString = 'super';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-position:unset;`。
   */
  readonly unset: Property.FontVariantPosition | CssString = 'unset';
}

/**
 * 选择字体提供的上标或下标字形。（font-variant-position）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
 */
export class FontVariantPositionCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-position:inherit;`。
   */
  readonly inherit: string = 'font-variant-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-position:initial;`。
   */
  readonly initial: string = 'font-variant-position:initial;';
  /** CSS 声明：`font-variant-position:normal;`。 */
  readonly normal: string = 'font-variant-position:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-position:revert;`。
   */
  readonly revert: string = 'font-variant-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-position:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variant-position:revert-layer;';
  /** CSS 声明：`font-variant-position:sub;`。 */
  readonly sub: string = 'font-variant-position:sub;';
  /** CSS 声明：`font-variant-position:super;`。 */
  readonly super: string = 'font-variant-position:super;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-position:unset;`。
   */
  readonly unset: string = 'font-variant-position:unset;';
  /**
   * 创建 font-variant-position 属性作者；普通使用通过 s.fontVariantPosition 取得共享实例。
   * @example
   * class CustomFontVariantPositionCss extends FontVariantPositionCss {}
   */
  constructor() {
    super('font-variant-position');
  }
  /**
   * 原样生成 font-variant-position 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variant-position:value;。
   * @example
   * s.fontVariantPosition.raw('inherit') // font-variant-position:inherit;
   */
  raw(value: Property.FontVariantPosition | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-variation-settings 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontVariationSettingsKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variation-settings:inherit;`。
   */
  readonly inherit: Property.FontVariationSettings | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variation-settings:initial;`。
   */
  readonly initial: Property.FontVariationSettings | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-variation-settings:normal;`。 */
  readonly normal: Property.FontVariationSettings | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variation-settings:revert;`。
   */
  readonly revert: Property.FontVariationSettings | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variation-settings:revert-layer;`。
   */
  readonly revertLayer: Property.FontVariationSettings | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variation-settings:unset;`。
   */
  readonly unset: Property.FontVariationSettings | CssString = 'unset';
}

/**
 * 直接设置可变字体各个轴的数值。（font-variation-settings）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
 */
export class FontVariationSettingsCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variation-settings:inherit;`。
   */
  readonly inherit: string = 'font-variation-settings:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variation-settings:initial;`。
   */
  readonly initial: string = 'font-variation-settings:initial;';
  /** CSS 声明：`font-variation-settings:normal;`。 */
  readonly normal: string = 'font-variation-settings:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variation-settings:revert;`。
   */
  readonly revert: string = 'font-variation-settings:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variation-settings:revert-layer;`。
   */
  readonly revertLayer: string = 'font-variation-settings:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variation-settings:unset;`。
   */
  readonly unset: string = 'font-variation-settings:unset;';
  /**
   * 创建 font-variation-settings 属性作者；普通使用通过 s.fontVariationSettings 取得共享实例。
   * @example
   * class CustomFontVariationSettingsCss extends FontVariationSettingsCss {}
   */
  constructor() {
    super('font-variation-settings');
  }
  /**
   * 原样生成 font-variation-settings 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-variation-settings:value;。
   * @example
   * s.fontVariationSettings.raw('inherit') // font-variation-settings:inherit;
   */
  raw(value: Property.FontVariationSettings | CssString): string {
    return this.declaration(value);
  }
}

/**
 * font-weight 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontWeightKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 粗体字重，等价于数值 700。
   *
   * CSS 声明：`font-weight:bold;`。
   */
  readonly bold: Property.FontWeight | CssString = 'bold';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 相对于继承字重选择更粗的字重，不是简单加一个固定数值。
   *
   * CSS 声明：`font-weight:bolder;`。
   */
  readonly bolder: Property.FontWeight | CssString = 'bolder';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-weight:inherit;`。
   */
  readonly inherit: Property.FontWeight | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-weight:initial;`。
   */
  readonly initial: Property.FontWeight | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 相对于继承字重选择更细的字重，不是简单减一个固定数值。
   *
   * CSS 声明：`font-weight:lighter;`。
   */
  readonly lighter: Property.FontWeight | CssString = 'lighter';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 正常字重，等价于数值 400。
   *
   * CSS 声明：`font-weight:normal;`。
   */
  readonly normal: Property.FontWeight | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-weight:revert;`。
   */
  readonly revert: Property.FontWeight | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-weight:revert-layer;`。
   */
  readonly revertLayer: Property.FontWeight | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-weight:unset;`。
   */
  readonly unset: Property.FontWeight | CssString = 'unset';
}

/**
 * 设置字体粗细，实际可用字重取决于字体。（font-weight）
 *
 * 最终字形取决于已加载字体和可用字重；变量字体可支持连续的字重范围。
 *
 * 常用值：
 * - `normal`：正常字重，等价于数值 400。
 * - `bold`：粗体字重，等价于数值 700。
 * - `bolder`：相对于继承字重选择更粗的字重，不是简单加一个固定数值。
 * - `lighter`：相对于继承字重选择更细的字重，不是简单减一个固定数值。
 *
 * 适用场景：正文、强调文字和标题的视觉层级。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @example
 * s.fontWeight.raw(600)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
 */
export class FontWeightCss extends CssProperty {
  /**
   * 粗体字重，等价于数值 700。
   *
   * CSS 声明：`font-weight:bold;`。
   */
  readonly bold: string = 'font-weight:bold;';
  /**
   * 相对于继承字重选择更粗的字重，不是简单加一个固定数值。
   *
   * CSS 声明：`font-weight:bolder;`。
   */
  readonly bolder: string = 'font-weight:bolder;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-weight:inherit;`。
   */
  readonly inherit: string = 'font-weight:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-weight:initial;`。
   */
  readonly initial: string = 'font-weight:initial;';
  /**
   * 相对于继承字重选择更细的字重，不是简单减一个固定数值。
   *
   * CSS 声明：`font-weight:lighter;`。
   */
  readonly lighter: string = 'font-weight:lighter;';
  /**
   * 正常字重，等价于数值 400。
   *
   * CSS 声明：`font-weight:normal;`。
   */
  readonly normal: string = 'font-weight:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-weight:revert;`。
   */
  readonly revert: string = 'font-weight:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-weight:revert-layer;`。
   */
  readonly revertLayer: string = 'font-weight:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-weight:unset;`。
   */
  readonly unset: string = 'font-weight:unset;';
  /**
   * 创建 font-weight 属性作者；普通使用通过 s.fontWeight 取得共享实例。
   * @example
   * class CustomFontWeightCss extends FontWeightCss {}
   */
  constructor() {
    super('font-weight');
  }
  /**
   * 原样生成 font-weight 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-weight:value;。
   * @example
   * s.fontWeight.raw('inherit') // font-weight:inherit;
   */
  raw(value: Property.FontWeight | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.fontWeight.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.fontWeight.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FontWeight | CssString,
    ...others: (Property.FontWeight | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.fontWeight.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FontWeight | CssString,
    ...others: (Property.FontWeight | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.fontWeight.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FontWeight | CssString,
    preferred: Property.FontWeight | CssString,
    maximum: Property.FontWeight | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * font-width 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class FontWidthKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:condensed;`。 */
  readonly condensed: Property.FontWidth | CssString = 'condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:expanded;`。 */
  readonly expanded: Property.FontWidth | CssString = 'expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:extra-condensed;`。 */
  readonly extraCondensed: Property.FontWidth | CssString = 'extra-condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:extra-expanded;`。 */
  readonly extraExpanded: Property.FontWidth | CssString = 'extra-expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-width:inherit;`。
   */
  readonly inherit: Property.FontWidth | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-width:initial;`。
   */
  readonly initial: Property.FontWidth | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:normal;`。 */
  readonly normal: Property.FontWidth | CssString = 'normal';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-width:revert;`。
   */
  readonly revert: Property.FontWidth | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-width:revert-layer;`。
   */
  readonly revertLayer: Property.FontWidth | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:semi-condensed;`。 */
  readonly semiCondensed: Property.FontWidth | CssString = 'semi-condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:semi-expanded;`。 */
  readonly semiExpanded: Property.FontWidth | CssString = 'semi-expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:ultra-condensed;`。 */
  readonly ultraCondensed: Property.FontWidth | CssString = 'ultra-condensed';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`font-width:ultra-expanded;`。 */
  readonly ultraExpanded: Property.FontWidth | CssString = 'ultra-expanded';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-width:unset;`。
   */
  readonly unset: Property.FontWidth | CssString = 'unset';
}

/**
 * 选择字体的宽窄字面，不是通过变换拉伸元素。（font-width）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
 */
export class FontWidthCss extends CssProperty {
  /** CSS 声明：`font-width:condensed;`。 */
  readonly condensed: string = 'font-width:condensed;';
  /** CSS 声明：`font-width:expanded;`。 */
  readonly expanded: string = 'font-width:expanded;';
  /** CSS 声明：`font-width:extra-condensed;`。 */
  readonly extraCondensed: string = 'font-width:extra-condensed;';
  /** CSS 声明：`font-width:extra-expanded;`。 */
  readonly extraExpanded: string = 'font-width:extra-expanded;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-width:inherit;`。
   */
  readonly inherit: string = 'font-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-width:initial;`。
   */
  readonly initial: string = 'font-width:initial;';
  /** CSS 声明：`font-width:normal;`。 */
  readonly normal: string = 'font-width:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-width:revert;`。
   */
  readonly revert: string = 'font-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-width:revert-layer;`。
   */
  readonly revertLayer: string = 'font-width:revert-layer;';
  /** CSS 声明：`font-width:semi-condensed;`。 */
  readonly semiCondensed: string = 'font-width:semi-condensed;';
  /** CSS 声明：`font-width:semi-expanded;`。 */
  readonly semiExpanded: string = 'font-width:semi-expanded;';
  /** CSS 声明：`font-width:ultra-condensed;`。 */
  readonly ultraCondensed: string = 'font-width:ultra-condensed;';
  /** CSS 声明：`font-width:ultra-expanded;`。 */
  readonly ultraExpanded: string = 'font-width:ultra-expanded;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-width:unset;`。
   */
  readonly unset: string = 'font-width:unset;';
  /**
   * 创建 font-width 属性作者；普通使用通过 s.fontWidth 取得共享实例。
   * @example
   * class CustomFontWidthCss extends FontWidthCss {}
   */
  constructor() {
    super('font-width');
  }
  /**
   * 原样生成 font-width 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 font-width:value;。
   * @example
   * s.fontWidth.raw('inherit') // font-width:inherit;
   */
  raw(value: Property.FontWidth | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.fontWidth.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.fontWidth.calc('var(--value) * 2')
   */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  /**
   * 生成 CSS min()，从同维度的候选值中选择最小值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 min(...) 的完整属性声明。
   * @example
   * s.fontWidth.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.FontWidth | CssString,
    ...others: (Property.FontWidth | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.fontWidth.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.FontWidth | CssString,
    ...others: (Property.FontWidth | CssString)[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS clamp()，将首选值约束在下限和上限之间。
   *
   * 参数是裸 CSS 值，不是 s.width.px(...) 等方法返回的完整声明。变量的值和维度由浏览器验证。
   * @param minimum 下限 CSS 值；下限大于上限时以下限为准。
   * @param preferred 首选 CSS 值，常用响应式长度或表达式。
   * @param maximum 上限 CSS 值，须与其他参数维度兼容。
   * @returns 包含 clamp(...) 的完整属性声明。
   * @example
   * s.fontWidth.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.FontWidth | CssString,
    preferred: Property.FontWidth | CssString,
    maximum: Property.FontWidth | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * forced-color-adjust 的系统关键字值；主题可继承或展开后覆盖，值不包含属性名与分号。
 */
export class ForcedColorAdjustKeywords {
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`forced-color-adjust:auto;`。 */
  readonly auto: Property.ForcedColorAdjust | CssString = 'auto';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`forced-color-adjust:inherit;`。
   */
  readonly inherit: Property.ForcedColorAdjust | CssString = 'inherit';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`forced-color-adjust:initial;`。
   */
  readonly initial: Property.ForcedColorAdjust | CssString = 'initial';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`forced-color-adjust:none;`。 */
  readonly none: Property.ForcedColorAdjust | CssString = 'none';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   * CSS 声明：`forced-color-adjust:preserve-parent-color;`。 */
  readonly preserveParentColor: Property.ForcedColorAdjust | CssString = 'preserve-parent-color';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`forced-color-adjust:revert;`。
   */
  readonly revert: Property.ForcedColorAdjust | CssString = 'revert';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`forced-color-adjust:revert-layer;`。
   */
  readonly revertLayer: Property.ForcedColorAdjust | CssString = 'revert-layer';
  /**
   * 原始 CSS 值（不含属性名和分号），主题可提供同类型的其他值。
   *
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`forced-color-adjust:unset;`。
   */
  readonly unset: Property.ForcedColorAdjust | CssString = 'unset';
}

/**
 * 控制元素是否参与系统强制颜色模式的自动替换。（forced-color-adjust）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
 */
export class ForcedColorAdjustCss extends CssProperty {
  /** CSS 声明：`forced-color-adjust:auto;`。 */
  readonly auto: string = 'forced-color-adjust:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`forced-color-adjust:inherit;`。
   */
  readonly inherit: string = 'forced-color-adjust:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`forced-color-adjust:initial;`。
   */
  readonly initial: string = 'forced-color-adjust:initial;';
  /** CSS 声明：`forced-color-adjust:none;`。 */
  readonly none: string = 'forced-color-adjust:none;';
  /** CSS 声明：`forced-color-adjust:preserve-parent-color;`。 */
  readonly preserveParentColor: string = 'forced-color-adjust:preserve-parent-color;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`forced-color-adjust:revert;`。
   */
  readonly revert: string = 'forced-color-adjust:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`forced-color-adjust:revert-layer;`。
   */
  readonly revertLayer: string = 'forced-color-adjust:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`forced-color-adjust:unset;`。
   */
  readonly unset: string = 'forced-color-adjust:unset;';
  /**
   * 创建 forced-color-adjust 属性作者；普通使用通过 s.forcedColorAdjust 取得共享实例。
   * @example
   * class CustomForcedColorAdjustCss extends ForcedColorAdjustCss {}
   */
  constructor() {
    super('forced-color-adjust');
  }
  /**
   * 原样生成 forced-color-adjust 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 forced-color-adjust:value;。
   * @example
   * s.forcedColorAdjust.raw('inherit') // forced-color-adjust:inherit;
   */
  raw(value: Property.ForcedColorAdjust | CssString): string {
    return this.declaration(value);
  }
}
