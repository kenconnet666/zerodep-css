// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/**
 * 设置表格标题相对于表格的放置侧。（caption-side）
 *
 * CSS 语法：`top | bottom`。
 *
 * CSS 初始值：`top`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
 */
export class CaptionSideCss extends CssProperty {
  /** CSS 声明：`caption-side:bottom;`。 */
  readonly bottom = 'caption-side:bottom;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caption-side:inherit;`。
   */
  readonly inherit = 'caption-side:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caption-side:initial;`。
   */
  readonly initial = 'caption-side:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caption-side:revert;`。
   */
  readonly revert = 'caption-side:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caption-side:revert-layer;`。
   */
  readonly revertLayer = 'caption-side:revert-layer;';
  /** CSS 声明：`caption-side:top;`。 */
  readonly top = 'caption-side:top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caption-side:unset;`。
   */
  readonly unset = 'caption-side:unset;';
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
 * 集中设置文本插入光标的颜色和形状。（caret）
 *
 * CSS 语法：`<'caret-color'> || <'caret-shape'>`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
 */
export class CaretCss extends CssProperty {
  /** CSS 声明：`caret:AccentColor;`。 */
  readonly AccentColor = 'caret:AccentColor;';
  /** CSS 声明：`caret:AccentColorText;`。 */
  readonly AccentColorText = 'caret:AccentColorText;';
  /** CSS 声明：`caret:ActiveBorder;`。 */
  readonly ActiveBorder = 'caret:ActiveBorder;';
  /** CSS 声明：`caret:ActiveCaption;`。 */
  readonly ActiveCaption = 'caret:ActiveCaption;';
  /** CSS 声明：`caret:ActiveText;`。 */
  readonly ActiveText = 'caret:ActiveText;';
  /** CSS 声明：`caret:AppWorkspace;`。 */
  readonly AppWorkspace = 'caret:AppWorkspace;';
  /** CSS 声明：`caret:Background;`。 */
  readonly Background = 'caret:Background;';
  /** CSS 声明：`caret:ButtonBorder;`。 */
  readonly ButtonBorder = 'caret:ButtonBorder;';
  /** CSS 声明：`caret:ButtonFace;`。 */
  readonly ButtonFace = 'caret:ButtonFace;';
  /** CSS 声明：`caret:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'caret:ButtonHighlight;';
  /** CSS 声明：`caret:ButtonShadow;`。 */
  readonly ButtonShadow = 'caret:ButtonShadow;';
  /** CSS 声明：`caret:ButtonText;`。 */
  readonly ButtonText = 'caret:ButtonText;';
  /** CSS 声明：`caret:Canvas;`。 */
  readonly Canvas = 'caret:Canvas;';
  /** CSS 声明：`caret:CanvasText;`。 */
  readonly CanvasText = 'caret:CanvasText;';
  /** CSS 声明：`caret:CaptionText;`。 */
  readonly CaptionText = 'caret:CaptionText;';
  /** CSS 声明：`caret:Field;`。 */
  readonly Field = 'caret:Field;';
  /** CSS 声明：`caret:FieldText;`。 */
  readonly FieldText = 'caret:FieldText;';
  /** CSS 声明：`caret:GrayText;`。 */
  readonly GrayText = 'caret:GrayText;';
  /** CSS 声明：`caret:Highlight;`。 */
  readonly Highlight = 'caret:Highlight;';
  /** CSS 声明：`caret:HighlightText;`。 */
  readonly HighlightText = 'caret:HighlightText;';
  /** CSS 声明：`caret:InactiveBorder;`。 */
  readonly InactiveBorder = 'caret:InactiveBorder;';
  /** CSS 声明：`caret:InactiveCaption;`。 */
  readonly InactiveCaption = 'caret:InactiveCaption;';
  /** CSS 声明：`caret:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'caret:InactiveCaptionText;';
  /** CSS 声明：`caret:InfoBackground;`。 */
  readonly InfoBackground = 'caret:InfoBackground;';
  /** CSS 声明：`caret:InfoText;`。 */
  readonly InfoText = 'caret:InfoText;';
  /** CSS 声明：`caret:LinkText;`。 */
  readonly LinkText = 'caret:LinkText;';
  /** CSS 声明：`caret:Mark;`。 */
  readonly Mark = 'caret:Mark;';
  /** CSS 声明：`caret:MarkText;`。 */
  readonly MarkText = 'caret:MarkText;';
  /** CSS 声明：`caret:Menu;`。 */
  readonly Menu = 'caret:Menu;';
  /** CSS 声明：`caret:MenuText;`。 */
  readonly MenuText = 'caret:MenuText;';
  /** CSS 声明：`caret:Scrollbar;`。 */
  readonly Scrollbar = 'caret:Scrollbar;';
  /** CSS 声明：`caret:SelectedItem;`。 */
  readonly SelectedItem = 'caret:SelectedItem;';
  /** CSS 声明：`caret:SelectedItemText;`。 */
  readonly SelectedItemText = 'caret:SelectedItemText;';
  /** CSS 声明：`caret:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'caret:ThreeDDarkShadow;';
  /** CSS 声明：`caret:ThreeDFace;`。 */
  readonly ThreeDFace = 'caret:ThreeDFace;';
  /** CSS 声明：`caret:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'caret:ThreeDHighlight;';
  /** CSS 声明：`caret:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'caret:ThreeDLightShadow;';
  /** CSS 声明：`caret:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'caret:ThreeDShadow;';
  /** CSS 声明：`caret:VisitedText;`。 */
  readonly VisitedText = 'caret:VisitedText;';
  /** CSS 声明：`caret:Window;`。 */
  readonly Window = 'caret:Window;';
  /** CSS 声明：`caret:WindowFrame;`。 */
  readonly WindowFrame = 'caret:WindowFrame;';
  /** CSS 声明：`caret:WindowText;`。 */
  readonly WindowText = 'caret:WindowText;';
  /** CSS 声明：`caret:aliceblue;`。 */
  readonly aliceblue = 'caret:aliceblue;';
  /** CSS 声明：`caret:antiquewhite;`。 */
  readonly antiquewhite = 'caret:antiquewhite;';
  /** CSS 声明：`caret:aqua;`。 */
  readonly aqua = 'caret:aqua;';
  /** CSS 声明：`caret:aquamarine;`。 */
  readonly aquamarine = 'caret:aquamarine;';
  /** CSS 声明：`caret:auto;`。 */
  readonly auto = 'caret:auto;';
  /** CSS 声明：`caret:azure;`。 */
  readonly azure = 'caret:azure;';
  /** CSS 声明：`caret:bar;`。 */
  readonly bar = 'caret:bar;';
  /** CSS 声明：`caret:beige;`。 */
  readonly beige = 'caret:beige;';
  /** CSS 声明：`caret:bisque;`。 */
  readonly bisque = 'caret:bisque;';
  /** CSS 声明：`caret:black;`。 */
  readonly black = 'caret:black;';
  /** CSS 声明：`caret:blanchedalmond;`。 */
  readonly blanchedalmond = 'caret:blanchedalmond;';
  /** CSS 声明：`caret:block;`。 */
  readonly block = 'caret:block;';
  /** CSS 声明：`caret:blue;`。 */
  readonly blue = 'caret:blue;';
  /** CSS 声明：`caret:blueviolet;`。 */
  readonly blueviolet = 'caret:blueviolet;';
  /** CSS 声明：`caret:brown;`。 */
  readonly brown = 'caret:brown;';
  /** CSS 声明：`caret:burlywood;`。 */
  readonly burlywood = 'caret:burlywood;';
  /** CSS 声明：`caret:cadetblue;`。 */
  readonly cadetblue = 'caret:cadetblue;';
  /** CSS 声明：`caret:chartreuse;`。 */
  readonly chartreuse = 'caret:chartreuse;';
  /** CSS 声明：`caret:chocolate;`。 */
  readonly chocolate = 'caret:chocolate;';
  /** CSS 声明：`caret:coral;`。 */
  readonly coral = 'caret:coral;';
  /** CSS 声明：`caret:cornflowerblue;`。 */
  readonly cornflowerblue = 'caret:cornflowerblue;';
  /** CSS 声明：`caret:cornsilk;`。 */
  readonly cornsilk = 'caret:cornsilk;';
  /** CSS 声明：`caret:crimson;`。 */
  readonly crimson = 'caret:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`caret:currentColor;`。
   */
  readonly currentColor = 'caret:currentColor;';
  /** CSS 声明：`caret:cyan;`。 */
  readonly cyan = 'caret:cyan;';
  /** CSS 声明：`caret:darkblue;`。 */
  readonly darkblue = 'caret:darkblue;';
  /** CSS 声明：`caret:darkcyan;`。 */
  readonly darkcyan = 'caret:darkcyan;';
  /** CSS 声明：`caret:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'caret:darkgoldenrod;';
  /** CSS 声明：`caret:darkgray;`。 */
  readonly darkgray = 'caret:darkgray;';
  /** CSS 声明：`caret:darkgreen;`。 */
  readonly darkgreen = 'caret:darkgreen;';
  /** CSS 声明：`caret:darkgrey;`。 */
  readonly darkgrey = 'caret:darkgrey;';
  /** CSS 声明：`caret:darkkhaki;`。 */
  readonly darkkhaki = 'caret:darkkhaki;';
  /** CSS 声明：`caret:darkmagenta;`。 */
  readonly darkmagenta = 'caret:darkmagenta;';
  /** CSS 声明：`caret:darkolivegreen;`。 */
  readonly darkolivegreen = 'caret:darkolivegreen;';
  /** CSS 声明：`caret:darkorange;`。 */
  readonly darkorange = 'caret:darkorange;';
  /** CSS 声明：`caret:darkorchid;`。 */
  readonly darkorchid = 'caret:darkorchid;';
  /** CSS 声明：`caret:darkred;`。 */
  readonly darkred = 'caret:darkred;';
  /** CSS 声明：`caret:darksalmon;`。 */
  readonly darksalmon = 'caret:darksalmon;';
  /** CSS 声明：`caret:darkseagreen;`。 */
  readonly darkseagreen = 'caret:darkseagreen;';
  /** CSS 声明：`caret:darkslateblue;`。 */
  readonly darkslateblue = 'caret:darkslateblue;';
  /** CSS 声明：`caret:darkslategray;`。 */
  readonly darkslategray = 'caret:darkslategray;';
  /** CSS 声明：`caret:darkslategrey;`。 */
  readonly darkslategrey = 'caret:darkslategrey;';
  /** CSS 声明：`caret:darkturquoise;`。 */
  readonly darkturquoise = 'caret:darkturquoise;';
  /** CSS 声明：`caret:darkviolet;`。 */
  readonly darkviolet = 'caret:darkviolet;';
  /** CSS 声明：`caret:deeppink;`。 */
  readonly deeppink = 'caret:deeppink;';
  /** CSS 声明：`caret:deepskyblue;`。 */
  readonly deepskyblue = 'caret:deepskyblue;';
  /** CSS 声明：`caret:dimgray;`。 */
  readonly dimgray = 'caret:dimgray;';
  /** CSS 声明：`caret:dimgrey;`。 */
  readonly dimgrey = 'caret:dimgrey;';
  /** CSS 声明：`caret:dodgerblue;`。 */
  readonly dodgerblue = 'caret:dodgerblue;';
  /** CSS 声明：`caret:firebrick;`。 */
  readonly firebrick = 'caret:firebrick;';
  /** CSS 声明：`caret:floralwhite;`。 */
  readonly floralwhite = 'caret:floralwhite;';
  /** CSS 声明：`caret:forestgreen;`。 */
  readonly forestgreen = 'caret:forestgreen;';
  /** CSS 声明：`caret:fuchsia;`。 */
  readonly fuchsia = 'caret:fuchsia;';
  /** CSS 声明：`caret:gainsboro;`。 */
  readonly gainsboro = 'caret:gainsboro;';
  /** CSS 声明：`caret:ghostwhite;`。 */
  readonly ghostwhite = 'caret:ghostwhite;';
  /** CSS 声明：`caret:gold;`。 */
  readonly gold = 'caret:gold;';
  /** CSS 声明：`caret:goldenrod;`。 */
  readonly goldenrod = 'caret:goldenrod;';
  /** CSS 声明：`caret:gray;`。 */
  readonly gray = 'caret:gray;';
  /** CSS 声明：`caret:green;`。 */
  readonly green = 'caret:green;';
  /** CSS 声明：`caret:greenyellow;`。 */
  readonly greenyellow = 'caret:greenyellow;';
  /** CSS 声明：`caret:grey;`。 */
  readonly grey = 'caret:grey;';
  /** CSS 声明：`caret:honeydew;`。 */
  readonly honeydew = 'caret:honeydew;';
  /** CSS 声明：`caret:hotpink;`。 */
  readonly hotpink = 'caret:hotpink;';
  /** CSS 声明：`caret:indianred;`。 */
  readonly indianred = 'caret:indianred;';
  /** CSS 声明：`caret:indigo;`。 */
  readonly indigo = 'caret:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret:inherit;`。
   */
  readonly inherit = 'caret:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret:initial;`。
   */
  readonly initial = 'caret:initial;';
  /** CSS 声明：`caret:ivory;`。 */
  readonly ivory = 'caret:ivory;';
  /** CSS 声明：`caret:khaki;`。 */
  readonly khaki = 'caret:khaki;';
  /** CSS 声明：`caret:lavender;`。 */
  readonly lavender = 'caret:lavender;';
  /** CSS 声明：`caret:lavenderblush;`。 */
  readonly lavenderblush = 'caret:lavenderblush;';
  /** CSS 声明：`caret:lawngreen;`。 */
  readonly lawngreen = 'caret:lawngreen;';
  /** CSS 声明：`caret:lemonchiffon;`。 */
  readonly lemonchiffon = 'caret:lemonchiffon;';
  /** CSS 声明：`caret:lightblue;`。 */
  readonly lightblue = 'caret:lightblue;';
  /** CSS 声明：`caret:lightcoral;`。 */
  readonly lightcoral = 'caret:lightcoral;';
  /** CSS 声明：`caret:lightcyan;`。 */
  readonly lightcyan = 'caret:lightcyan;';
  /** CSS 声明：`caret:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'caret:lightgoldenrodyellow;';
  /** CSS 声明：`caret:lightgray;`。 */
  readonly lightgray = 'caret:lightgray;';
  /** CSS 声明：`caret:lightgreen;`。 */
  readonly lightgreen = 'caret:lightgreen;';
  /** CSS 声明：`caret:lightgrey;`。 */
  readonly lightgrey = 'caret:lightgrey;';
  /** CSS 声明：`caret:lightpink;`。 */
  readonly lightpink = 'caret:lightpink;';
  /** CSS 声明：`caret:lightsalmon;`。 */
  readonly lightsalmon = 'caret:lightsalmon;';
  /** CSS 声明：`caret:lightseagreen;`。 */
  readonly lightseagreen = 'caret:lightseagreen;';
  /** CSS 声明：`caret:lightskyblue;`。 */
  readonly lightskyblue = 'caret:lightskyblue;';
  /** CSS 声明：`caret:lightslategray;`。 */
  readonly lightslategray = 'caret:lightslategray;';
  /** CSS 声明：`caret:lightslategrey;`。 */
  readonly lightslategrey = 'caret:lightslategrey;';
  /** CSS 声明：`caret:lightsteelblue;`。 */
  readonly lightsteelblue = 'caret:lightsteelblue;';
  /** CSS 声明：`caret:lightyellow;`。 */
  readonly lightyellow = 'caret:lightyellow;';
  /** CSS 声明：`caret:lime;`。 */
  readonly lime = 'caret:lime;';
  /** CSS 声明：`caret:limegreen;`。 */
  readonly limegreen = 'caret:limegreen;';
  /** CSS 声明：`caret:linen;`。 */
  readonly linen = 'caret:linen;';
  /** CSS 声明：`caret:magenta;`。 */
  readonly magenta = 'caret:magenta;';
  /** CSS 声明：`caret:maroon;`。 */
  readonly maroon = 'caret:maroon;';
  /** CSS 声明：`caret:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'caret:mediumaquamarine;';
  /** CSS 声明：`caret:mediumblue;`。 */
  readonly mediumblue = 'caret:mediumblue;';
  /** CSS 声明：`caret:mediumorchid;`。 */
  readonly mediumorchid = 'caret:mediumorchid;';
  /** CSS 声明：`caret:mediumpurple;`。 */
  readonly mediumpurple = 'caret:mediumpurple;';
  /** CSS 声明：`caret:mediumseagreen;`。 */
  readonly mediumseagreen = 'caret:mediumseagreen;';
  /** CSS 声明：`caret:mediumslateblue;`。 */
  readonly mediumslateblue = 'caret:mediumslateblue;';
  /** CSS 声明：`caret:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'caret:mediumspringgreen;';
  /** CSS 声明：`caret:mediumturquoise;`。 */
  readonly mediumturquoise = 'caret:mediumturquoise;';
  /** CSS 声明：`caret:mediumvioletred;`。 */
  readonly mediumvioletred = 'caret:mediumvioletred;';
  /** CSS 声明：`caret:midnightblue;`。 */
  readonly midnightblue = 'caret:midnightblue;';
  /** CSS 声明：`caret:mintcream;`。 */
  readonly mintcream = 'caret:mintcream;';
  /** CSS 声明：`caret:mistyrose;`。 */
  readonly mistyrose = 'caret:mistyrose;';
  /** CSS 声明：`caret:moccasin;`。 */
  readonly moccasin = 'caret:moccasin;';
  /** CSS 声明：`caret:navajowhite;`。 */
  readonly navajowhite = 'caret:navajowhite;';
  /** CSS 声明：`caret:navy;`。 */
  readonly navy = 'caret:navy;';
  /** CSS 声明：`caret:oldlace;`。 */
  readonly oldlace = 'caret:oldlace;';
  /** CSS 声明：`caret:olive;`。 */
  readonly olive = 'caret:olive;';
  /** CSS 声明：`caret:olivedrab;`。 */
  readonly olivedrab = 'caret:olivedrab;';
  /** CSS 声明：`caret:orange;`。 */
  readonly orange = 'caret:orange;';
  /** CSS 声明：`caret:orangered;`。 */
  readonly orangered = 'caret:orangered;';
  /** CSS 声明：`caret:orchid;`。 */
  readonly orchid = 'caret:orchid;';
  /** CSS 声明：`caret:palegoldenrod;`。 */
  readonly palegoldenrod = 'caret:palegoldenrod;';
  /** CSS 声明：`caret:palegreen;`。 */
  readonly palegreen = 'caret:palegreen;';
  /** CSS 声明：`caret:paleturquoise;`。 */
  readonly paleturquoise = 'caret:paleturquoise;';
  /** CSS 声明：`caret:palevioletred;`。 */
  readonly palevioletred = 'caret:palevioletred;';
  /** CSS 声明：`caret:papayawhip;`。 */
  readonly papayawhip = 'caret:papayawhip;';
  /** CSS 声明：`caret:peachpuff;`。 */
  readonly peachpuff = 'caret:peachpuff;';
  /** CSS 声明：`caret:peru;`。 */
  readonly peru = 'caret:peru;';
  /** CSS 声明：`caret:pink;`。 */
  readonly pink = 'caret:pink;';
  /** CSS 声明：`caret:plum;`。 */
  readonly plum = 'caret:plum;';
  /** CSS 声明：`caret:powderblue;`。 */
  readonly powderblue = 'caret:powderblue;';
  /** CSS 声明：`caret:purple;`。 */
  readonly purple = 'caret:purple;';
  /** CSS 声明：`caret:rebeccapurple;`。 */
  readonly rebeccapurple = 'caret:rebeccapurple;';
  /** CSS 声明：`caret:red;`。 */
  readonly red = 'caret:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret:revert;`。
   */
  readonly revert = 'caret:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret:revert-layer;`。
   */
  readonly revertLayer = 'caret:revert-layer;';
  /** CSS 声明：`caret:rosybrown;`。 */
  readonly rosybrown = 'caret:rosybrown;';
  /** CSS 声明：`caret:royalblue;`。 */
  readonly royalblue = 'caret:royalblue;';
  /** CSS 声明：`caret:saddlebrown;`。 */
  readonly saddlebrown = 'caret:saddlebrown;';
  /** CSS 声明：`caret:salmon;`。 */
  readonly salmon = 'caret:salmon;';
  /** CSS 声明：`caret:sandybrown;`。 */
  readonly sandybrown = 'caret:sandybrown;';
  /** CSS 声明：`caret:seagreen;`。 */
  readonly seagreen = 'caret:seagreen;';
  /** CSS 声明：`caret:seashell;`。 */
  readonly seashell = 'caret:seashell;';
  /** CSS 声明：`caret:sienna;`。 */
  readonly sienna = 'caret:sienna;';
  /** CSS 声明：`caret:silver;`。 */
  readonly silver = 'caret:silver;';
  /** CSS 声明：`caret:skyblue;`。 */
  readonly skyblue = 'caret:skyblue;';
  /** CSS 声明：`caret:slateblue;`。 */
  readonly slateblue = 'caret:slateblue;';
  /** CSS 声明：`caret:slategray;`。 */
  readonly slategray = 'caret:slategray;';
  /** CSS 声明：`caret:slategrey;`。 */
  readonly slategrey = 'caret:slategrey;';
  /** CSS 声明：`caret:snow;`。 */
  readonly snow = 'caret:snow;';
  /** CSS 声明：`caret:springgreen;`。 */
  readonly springgreen = 'caret:springgreen;';
  /** CSS 声明：`caret:steelblue;`。 */
  readonly steelblue = 'caret:steelblue;';
  /** CSS 声明：`caret:tan;`。 */
  readonly tan = 'caret:tan;';
  /** CSS 声明：`caret:teal;`。 */
  readonly teal = 'caret:teal;';
  /** CSS 声明：`caret:thistle;`。 */
  readonly thistle = 'caret:thistle;';
  /** CSS 声明：`caret:tomato;`。 */
  readonly tomato = 'caret:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`caret:transparent;`。
   */
  readonly transparent = 'caret:transparent;';
  /** CSS 声明：`caret:turquoise;`。 */
  readonly turquoise = 'caret:turquoise;';
  /** CSS 声明：`caret:underscore;`。 */
  readonly underscore = 'caret:underscore;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret:unset;`。
   */
  readonly unset = 'caret:unset;';
  /** CSS 声明：`caret:violet;`。 */
  readonly violet = 'caret:violet;';
  /** CSS 声明：`caret:wheat;`。 */
  readonly wheat = 'caret:wheat;';
  /** CSS 声明：`caret:white;`。 */
  readonly white = 'caret:white;';
  /** CSS 声明：`caret:whitesmoke;`。 */
  readonly whitesmoke = 'caret:whitesmoke;';
  /** CSS 声明：`caret:yellow;`。 */
  readonly yellow = 'caret:yellow;';
  /** CSS 声明：`caret:yellowgreen;`。 */
  readonly yellowgreen = 'caret:yellowgreen;';
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
 * 设置可编辑内容中的文本插入光标颜色。（caret-color）
 *
 * CSS 语法：`auto | <color>`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
 */
export class CaretColorCss extends CssProperty {
  /** CSS 声明：`caret-color:AccentColor;`。 */
  readonly AccentColor = 'caret-color:AccentColor;';
  /** CSS 声明：`caret-color:AccentColorText;`。 */
  readonly AccentColorText = 'caret-color:AccentColorText;';
  /** CSS 声明：`caret-color:ActiveBorder;`。 */
  readonly ActiveBorder = 'caret-color:ActiveBorder;';
  /** CSS 声明：`caret-color:ActiveCaption;`。 */
  readonly ActiveCaption = 'caret-color:ActiveCaption;';
  /** CSS 声明：`caret-color:ActiveText;`。 */
  readonly ActiveText = 'caret-color:ActiveText;';
  /** CSS 声明：`caret-color:AppWorkspace;`。 */
  readonly AppWorkspace = 'caret-color:AppWorkspace;';
  /** CSS 声明：`caret-color:Background;`。 */
  readonly Background = 'caret-color:Background;';
  /** CSS 声明：`caret-color:ButtonBorder;`。 */
  readonly ButtonBorder = 'caret-color:ButtonBorder;';
  /** CSS 声明：`caret-color:ButtonFace;`。 */
  readonly ButtonFace = 'caret-color:ButtonFace;';
  /** CSS 声明：`caret-color:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'caret-color:ButtonHighlight;';
  /** CSS 声明：`caret-color:ButtonShadow;`。 */
  readonly ButtonShadow = 'caret-color:ButtonShadow;';
  /** CSS 声明：`caret-color:ButtonText;`。 */
  readonly ButtonText = 'caret-color:ButtonText;';
  /** CSS 声明：`caret-color:Canvas;`。 */
  readonly Canvas = 'caret-color:Canvas;';
  /** CSS 声明：`caret-color:CanvasText;`。 */
  readonly CanvasText = 'caret-color:CanvasText;';
  /** CSS 声明：`caret-color:CaptionText;`。 */
  readonly CaptionText = 'caret-color:CaptionText;';
  /** CSS 声明：`caret-color:Field;`。 */
  readonly Field = 'caret-color:Field;';
  /** CSS 声明：`caret-color:FieldText;`。 */
  readonly FieldText = 'caret-color:FieldText;';
  /** CSS 声明：`caret-color:GrayText;`。 */
  readonly GrayText = 'caret-color:GrayText;';
  /** CSS 声明：`caret-color:Highlight;`。 */
  readonly Highlight = 'caret-color:Highlight;';
  /** CSS 声明：`caret-color:HighlightText;`。 */
  readonly HighlightText = 'caret-color:HighlightText;';
  /** CSS 声明：`caret-color:InactiveBorder;`。 */
  readonly InactiveBorder = 'caret-color:InactiveBorder;';
  /** CSS 声明：`caret-color:InactiveCaption;`。 */
  readonly InactiveCaption = 'caret-color:InactiveCaption;';
  /** CSS 声明：`caret-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'caret-color:InactiveCaptionText;';
  /** CSS 声明：`caret-color:InfoBackground;`。 */
  readonly InfoBackground = 'caret-color:InfoBackground;';
  /** CSS 声明：`caret-color:InfoText;`。 */
  readonly InfoText = 'caret-color:InfoText;';
  /** CSS 声明：`caret-color:LinkText;`。 */
  readonly LinkText = 'caret-color:LinkText;';
  /** CSS 声明：`caret-color:Mark;`。 */
  readonly Mark = 'caret-color:Mark;';
  /** CSS 声明：`caret-color:MarkText;`。 */
  readonly MarkText = 'caret-color:MarkText;';
  /** CSS 声明：`caret-color:Menu;`。 */
  readonly Menu = 'caret-color:Menu;';
  /** CSS 声明：`caret-color:MenuText;`。 */
  readonly MenuText = 'caret-color:MenuText;';
  /** CSS 声明：`caret-color:Scrollbar;`。 */
  readonly Scrollbar = 'caret-color:Scrollbar;';
  /** CSS 声明：`caret-color:SelectedItem;`。 */
  readonly SelectedItem = 'caret-color:SelectedItem;';
  /** CSS 声明：`caret-color:SelectedItemText;`。 */
  readonly SelectedItemText = 'caret-color:SelectedItemText;';
  /** CSS 声明：`caret-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'caret-color:ThreeDDarkShadow;';
  /** CSS 声明：`caret-color:ThreeDFace;`。 */
  readonly ThreeDFace = 'caret-color:ThreeDFace;';
  /** CSS 声明：`caret-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'caret-color:ThreeDHighlight;';
  /** CSS 声明：`caret-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'caret-color:ThreeDLightShadow;';
  /** CSS 声明：`caret-color:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'caret-color:ThreeDShadow;';
  /** CSS 声明：`caret-color:VisitedText;`。 */
  readonly VisitedText = 'caret-color:VisitedText;';
  /** CSS 声明：`caret-color:Window;`。 */
  readonly Window = 'caret-color:Window;';
  /** CSS 声明：`caret-color:WindowFrame;`。 */
  readonly WindowFrame = 'caret-color:WindowFrame;';
  /** CSS 声明：`caret-color:WindowText;`。 */
  readonly WindowText = 'caret-color:WindowText;';
  /** CSS 声明：`caret-color:aliceblue;`。 */
  readonly aliceblue = 'caret-color:aliceblue;';
  /** CSS 声明：`caret-color:antiquewhite;`。 */
  readonly antiquewhite = 'caret-color:antiquewhite;';
  /** CSS 声明：`caret-color:aqua;`。 */
  readonly aqua = 'caret-color:aqua;';
  /** CSS 声明：`caret-color:aquamarine;`。 */
  readonly aquamarine = 'caret-color:aquamarine;';
  /** CSS 声明：`caret-color:auto;`。 */
  readonly auto = 'caret-color:auto;';
  /** CSS 声明：`caret-color:azure;`。 */
  readonly azure = 'caret-color:azure;';
  /** CSS 声明：`caret-color:beige;`。 */
  readonly beige = 'caret-color:beige;';
  /** CSS 声明：`caret-color:bisque;`。 */
  readonly bisque = 'caret-color:bisque;';
  /** CSS 声明：`caret-color:black;`。 */
  readonly black = 'caret-color:black;';
  /** CSS 声明：`caret-color:blanchedalmond;`。 */
  readonly blanchedalmond = 'caret-color:blanchedalmond;';
  /** CSS 声明：`caret-color:blue;`。 */
  readonly blue = 'caret-color:blue;';
  /** CSS 声明：`caret-color:blueviolet;`。 */
  readonly blueviolet = 'caret-color:blueviolet;';
  /** CSS 声明：`caret-color:brown;`。 */
  readonly brown = 'caret-color:brown;';
  /** CSS 声明：`caret-color:burlywood;`。 */
  readonly burlywood = 'caret-color:burlywood;';
  /** CSS 声明：`caret-color:cadetblue;`。 */
  readonly cadetblue = 'caret-color:cadetblue;';
  /** CSS 声明：`caret-color:chartreuse;`。 */
  readonly chartreuse = 'caret-color:chartreuse;';
  /** CSS 声明：`caret-color:chocolate;`。 */
  readonly chocolate = 'caret-color:chocolate;';
  /** CSS 声明：`caret-color:coral;`。 */
  readonly coral = 'caret-color:coral;';
  /** CSS 声明：`caret-color:cornflowerblue;`。 */
  readonly cornflowerblue = 'caret-color:cornflowerblue;';
  /** CSS 声明：`caret-color:cornsilk;`。 */
  readonly cornsilk = 'caret-color:cornsilk;';
  /** CSS 声明：`caret-color:crimson;`。 */
  readonly crimson = 'caret-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`caret-color:currentColor;`。
   */
  readonly currentColor = 'caret-color:currentColor;';
  /** CSS 声明：`caret-color:cyan;`。 */
  readonly cyan = 'caret-color:cyan;';
  /** CSS 声明：`caret-color:darkblue;`。 */
  readonly darkblue = 'caret-color:darkblue;';
  /** CSS 声明：`caret-color:darkcyan;`。 */
  readonly darkcyan = 'caret-color:darkcyan;';
  /** CSS 声明：`caret-color:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'caret-color:darkgoldenrod;';
  /** CSS 声明：`caret-color:darkgray;`。 */
  readonly darkgray = 'caret-color:darkgray;';
  /** CSS 声明：`caret-color:darkgreen;`。 */
  readonly darkgreen = 'caret-color:darkgreen;';
  /** CSS 声明：`caret-color:darkgrey;`。 */
  readonly darkgrey = 'caret-color:darkgrey;';
  /** CSS 声明：`caret-color:darkkhaki;`。 */
  readonly darkkhaki = 'caret-color:darkkhaki;';
  /** CSS 声明：`caret-color:darkmagenta;`。 */
  readonly darkmagenta = 'caret-color:darkmagenta;';
  /** CSS 声明：`caret-color:darkolivegreen;`。 */
  readonly darkolivegreen = 'caret-color:darkolivegreen;';
  /** CSS 声明：`caret-color:darkorange;`。 */
  readonly darkorange = 'caret-color:darkorange;';
  /** CSS 声明：`caret-color:darkorchid;`。 */
  readonly darkorchid = 'caret-color:darkorchid;';
  /** CSS 声明：`caret-color:darkred;`。 */
  readonly darkred = 'caret-color:darkred;';
  /** CSS 声明：`caret-color:darksalmon;`。 */
  readonly darksalmon = 'caret-color:darksalmon;';
  /** CSS 声明：`caret-color:darkseagreen;`。 */
  readonly darkseagreen = 'caret-color:darkseagreen;';
  /** CSS 声明：`caret-color:darkslateblue;`。 */
  readonly darkslateblue = 'caret-color:darkslateblue;';
  /** CSS 声明：`caret-color:darkslategray;`。 */
  readonly darkslategray = 'caret-color:darkslategray;';
  /** CSS 声明：`caret-color:darkslategrey;`。 */
  readonly darkslategrey = 'caret-color:darkslategrey;';
  /** CSS 声明：`caret-color:darkturquoise;`。 */
  readonly darkturquoise = 'caret-color:darkturquoise;';
  /** CSS 声明：`caret-color:darkviolet;`。 */
  readonly darkviolet = 'caret-color:darkviolet;';
  /** CSS 声明：`caret-color:deeppink;`。 */
  readonly deeppink = 'caret-color:deeppink;';
  /** CSS 声明：`caret-color:deepskyblue;`。 */
  readonly deepskyblue = 'caret-color:deepskyblue;';
  /** CSS 声明：`caret-color:dimgray;`。 */
  readonly dimgray = 'caret-color:dimgray;';
  /** CSS 声明：`caret-color:dimgrey;`。 */
  readonly dimgrey = 'caret-color:dimgrey;';
  /** CSS 声明：`caret-color:dodgerblue;`。 */
  readonly dodgerblue = 'caret-color:dodgerblue;';
  /** CSS 声明：`caret-color:firebrick;`。 */
  readonly firebrick = 'caret-color:firebrick;';
  /** CSS 声明：`caret-color:floralwhite;`。 */
  readonly floralwhite = 'caret-color:floralwhite;';
  /** CSS 声明：`caret-color:forestgreen;`。 */
  readonly forestgreen = 'caret-color:forestgreen;';
  /** CSS 声明：`caret-color:fuchsia;`。 */
  readonly fuchsia = 'caret-color:fuchsia;';
  /** CSS 声明：`caret-color:gainsboro;`。 */
  readonly gainsboro = 'caret-color:gainsboro;';
  /** CSS 声明：`caret-color:ghostwhite;`。 */
  readonly ghostwhite = 'caret-color:ghostwhite;';
  /** CSS 声明：`caret-color:gold;`。 */
  readonly gold = 'caret-color:gold;';
  /** CSS 声明：`caret-color:goldenrod;`。 */
  readonly goldenrod = 'caret-color:goldenrod;';
  /** CSS 声明：`caret-color:gray;`。 */
  readonly gray = 'caret-color:gray;';
  /** CSS 声明：`caret-color:green;`。 */
  readonly green = 'caret-color:green;';
  /** CSS 声明：`caret-color:greenyellow;`。 */
  readonly greenyellow = 'caret-color:greenyellow;';
  /** CSS 声明：`caret-color:grey;`。 */
  readonly grey = 'caret-color:grey;';
  /** CSS 声明：`caret-color:honeydew;`。 */
  readonly honeydew = 'caret-color:honeydew;';
  /** CSS 声明：`caret-color:hotpink;`。 */
  readonly hotpink = 'caret-color:hotpink;';
  /** CSS 声明：`caret-color:indianred;`。 */
  readonly indianred = 'caret-color:indianred;';
  /** CSS 声明：`caret-color:indigo;`。 */
  readonly indigo = 'caret-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret-color:inherit;`。
   */
  readonly inherit = 'caret-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret-color:initial;`。
   */
  readonly initial = 'caret-color:initial;';
  /** CSS 声明：`caret-color:ivory;`。 */
  readonly ivory = 'caret-color:ivory;';
  /** CSS 声明：`caret-color:khaki;`。 */
  readonly khaki = 'caret-color:khaki;';
  /** CSS 声明：`caret-color:lavender;`。 */
  readonly lavender = 'caret-color:lavender;';
  /** CSS 声明：`caret-color:lavenderblush;`。 */
  readonly lavenderblush = 'caret-color:lavenderblush;';
  /** CSS 声明：`caret-color:lawngreen;`。 */
  readonly lawngreen = 'caret-color:lawngreen;';
  /** CSS 声明：`caret-color:lemonchiffon;`。 */
  readonly lemonchiffon = 'caret-color:lemonchiffon;';
  /** CSS 声明：`caret-color:lightblue;`。 */
  readonly lightblue = 'caret-color:lightblue;';
  /** CSS 声明：`caret-color:lightcoral;`。 */
  readonly lightcoral = 'caret-color:lightcoral;';
  /** CSS 声明：`caret-color:lightcyan;`。 */
  readonly lightcyan = 'caret-color:lightcyan;';
  /** CSS 声明：`caret-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'caret-color:lightgoldenrodyellow;';
  /** CSS 声明：`caret-color:lightgray;`。 */
  readonly lightgray = 'caret-color:lightgray;';
  /** CSS 声明：`caret-color:lightgreen;`。 */
  readonly lightgreen = 'caret-color:lightgreen;';
  /** CSS 声明：`caret-color:lightgrey;`。 */
  readonly lightgrey = 'caret-color:lightgrey;';
  /** CSS 声明：`caret-color:lightpink;`。 */
  readonly lightpink = 'caret-color:lightpink;';
  /** CSS 声明：`caret-color:lightsalmon;`。 */
  readonly lightsalmon = 'caret-color:lightsalmon;';
  /** CSS 声明：`caret-color:lightseagreen;`。 */
  readonly lightseagreen = 'caret-color:lightseagreen;';
  /** CSS 声明：`caret-color:lightskyblue;`。 */
  readonly lightskyblue = 'caret-color:lightskyblue;';
  /** CSS 声明：`caret-color:lightslategray;`。 */
  readonly lightslategray = 'caret-color:lightslategray;';
  /** CSS 声明：`caret-color:lightslategrey;`。 */
  readonly lightslategrey = 'caret-color:lightslategrey;';
  /** CSS 声明：`caret-color:lightsteelblue;`。 */
  readonly lightsteelblue = 'caret-color:lightsteelblue;';
  /** CSS 声明：`caret-color:lightyellow;`。 */
  readonly lightyellow = 'caret-color:lightyellow;';
  /** CSS 声明：`caret-color:lime;`。 */
  readonly lime = 'caret-color:lime;';
  /** CSS 声明：`caret-color:limegreen;`。 */
  readonly limegreen = 'caret-color:limegreen;';
  /** CSS 声明：`caret-color:linen;`。 */
  readonly linen = 'caret-color:linen;';
  /** CSS 声明：`caret-color:magenta;`。 */
  readonly magenta = 'caret-color:magenta;';
  /** CSS 声明：`caret-color:maroon;`。 */
  readonly maroon = 'caret-color:maroon;';
  /** CSS 声明：`caret-color:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'caret-color:mediumaquamarine;';
  /** CSS 声明：`caret-color:mediumblue;`。 */
  readonly mediumblue = 'caret-color:mediumblue;';
  /** CSS 声明：`caret-color:mediumorchid;`。 */
  readonly mediumorchid = 'caret-color:mediumorchid;';
  /** CSS 声明：`caret-color:mediumpurple;`。 */
  readonly mediumpurple = 'caret-color:mediumpurple;';
  /** CSS 声明：`caret-color:mediumseagreen;`。 */
  readonly mediumseagreen = 'caret-color:mediumseagreen;';
  /** CSS 声明：`caret-color:mediumslateblue;`。 */
  readonly mediumslateblue = 'caret-color:mediumslateblue;';
  /** CSS 声明：`caret-color:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'caret-color:mediumspringgreen;';
  /** CSS 声明：`caret-color:mediumturquoise;`。 */
  readonly mediumturquoise = 'caret-color:mediumturquoise;';
  /** CSS 声明：`caret-color:mediumvioletred;`。 */
  readonly mediumvioletred = 'caret-color:mediumvioletred;';
  /** CSS 声明：`caret-color:midnightblue;`。 */
  readonly midnightblue = 'caret-color:midnightblue;';
  /** CSS 声明：`caret-color:mintcream;`。 */
  readonly mintcream = 'caret-color:mintcream;';
  /** CSS 声明：`caret-color:mistyrose;`。 */
  readonly mistyrose = 'caret-color:mistyrose;';
  /** CSS 声明：`caret-color:moccasin;`。 */
  readonly moccasin = 'caret-color:moccasin;';
  /** CSS 声明：`caret-color:navajowhite;`。 */
  readonly navajowhite = 'caret-color:navajowhite;';
  /** CSS 声明：`caret-color:navy;`。 */
  readonly navy = 'caret-color:navy;';
  /** CSS 声明：`caret-color:oldlace;`。 */
  readonly oldlace = 'caret-color:oldlace;';
  /** CSS 声明：`caret-color:olive;`。 */
  readonly olive = 'caret-color:olive;';
  /** CSS 声明：`caret-color:olivedrab;`。 */
  readonly olivedrab = 'caret-color:olivedrab;';
  /** CSS 声明：`caret-color:orange;`。 */
  readonly orange = 'caret-color:orange;';
  /** CSS 声明：`caret-color:orangered;`。 */
  readonly orangered = 'caret-color:orangered;';
  /** CSS 声明：`caret-color:orchid;`。 */
  readonly orchid = 'caret-color:orchid;';
  /** CSS 声明：`caret-color:palegoldenrod;`。 */
  readonly palegoldenrod = 'caret-color:palegoldenrod;';
  /** CSS 声明：`caret-color:palegreen;`。 */
  readonly palegreen = 'caret-color:palegreen;';
  /** CSS 声明：`caret-color:paleturquoise;`。 */
  readonly paleturquoise = 'caret-color:paleturquoise;';
  /** CSS 声明：`caret-color:palevioletred;`。 */
  readonly palevioletred = 'caret-color:palevioletred;';
  /** CSS 声明：`caret-color:papayawhip;`。 */
  readonly papayawhip = 'caret-color:papayawhip;';
  /** CSS 声明：`caret-color:peachpuff;`。 */
  readonly peachpuff = 'caret-color:peachpuff;';
  /** CSS 声明：`caret-color:peru;`。 */
  readonly peru = 'caret-color:peru;';
  /** CSS 声明：`caret-color:pink;`。 */
  readonly pink = 'caret-color:pink;';
  /** CSS 声明：`caret-color:plum;`。 */
  readonly plum = 'caret-color:plum;';
  /** CSS 声明：`caret-color:powderblue;`。 */
  readonly powderblue = 'caret-color:powderblue;';
  /** CSS 声明：`caret-color:purple;`。 */
  readonly purple = 'caret-color:purple;';
  /** CSS 声明：`caret-color:rebeccapurple;`。 */
  readonly rebeccapurple = 'caret-color:rebeccapurple;';
  /** CSS 声明：`caret-color:red;`。 */
  readonly red = 'caret-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret-color:revert;`。
   */
  readonly revert = 'caret-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret-color:revert-layer;`。
   */
  readonly revertLayer = 'caret-color:revert-layer;';
  /** CSS 声明：`caret-color:rosybrown;`。 */
  readonly rosybrown = 'caret-color:rosybrown;';
  /** CSS 声明：`caret-color:royalblue;`。 */
  readonly royalblue = 'caret-color:royalblue;';
  /** CSS 声明：`caret-color:saddlebrown;`。 */
  readonly saddlebrown = 'caret-color:saddlebrown;';
  /** CSS 声明：`caret-color:salmon;`。 */
  readonly salmon = 'caret-color:salmon;';
  /** CSS 声明：`caret-color:sandybrown;`。 */
  readonly sandybrown = 'caret-color:sandybrown;';
  /** CSS 声明：`caret-color:seagreen;`。 */
  readonly seagreen = 'caret-color:seagreen;';
  /** CSS 声明：`caret-color:seashell;`。 */
  readonly seashell = 'caret-color:seashell;';
  /** CSS 声明：`caret-color:sienna;`。 */
  readonly sienna = 'caret-color:sienna;';
  /** CSS 声明：`caret-color:silver;`。 */
  readonly silver = 'caret-color:silver;';
  /** CSS 声明：`caret-color:skyblue;`。 */
  readonly skyblue = 'caret-color:skyblue;';
  /** CSS 声明：`caret-color:slateblue;`。 */
  readonly slateblue = 'caret-color:slateblue;';
  /** CSS 声明：`caret-color:slategray;`。 */
  readonly slategray = 'caret-color:slategray;';
  /** CSS 声明：`caret-color:slategrey;`。 */
  readonly slategrey = 'caret-color:slategrey;';
  /** CSS 声明：`caret-color:snow;`。 */
  readonly snow = 'caret-color:snow;';
  /** CSS 声明：`caret-color:springgreen;`。 */
  readonly springgreen = 'caret-color:springgreen;';
  /** CSS 声明：`caret-color:steelblue;`。 */
  readonly steelblue = 'caret-color:steelblue;';
  /** CSS 声明：`caret-color:tan;`。 */
  readonly tan = 'caret-color:tan;';
  /** CSS 声明：`caret-color:teal;`。 */
  readonly teal = 'caret-color:teal;';
  /** CSS 声明：`caret-color:thistle;`。 */
  readonly thistle = 'caret-color:thistle;';
  /** CSS 声明：`caret-color:tomato;`。 */
  readonly tomato = 'caret-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`caret-color:transparent;`。
   */
  readonly transparent = 'caret-color:transparent;';
  /** CSS 声明：`caret-color:turquoise;`。 */
  readonly turquoise = 'caret-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret-color:unset;`。
   */
  readonly unset = 'caret-color:unset;';
  /** CSS 声明：`caret-color:violet;`。 */
  readonly violet = 'caret-color:violet;';
  /** CSS 声明：`caret-color:wheat;`。 */
  readonly wheat = 'caret-color:wheat;';
  /** CSS 声明：`caret-color:white;`。 */
  readonly white = 'caret-color:white;';
  /** CSS 声明：`caret-color:whitesmoke;`。 */
  readonly whitesmoke = 'caret-color:whitesmoke;';
  /** CSS 声明：`caret-color:yellow;`。 */
  readonly yellow = 'caret-color:yellow;';
  /** CSS 声明：`caret-color:yellowgreen;`。 */
  readonly yellowgreen = 'caret-color:yellowgreen;';
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
 * 设置文本插入光标的形状。（caret-shape）
 *
 * CSS 语法：`auto | bar | block | underscore`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
 */
export class CaretShapeCss extends CssProperty {
  /** CSS 声明：`caret-shape:auto;`。 */
  readonly auto = 'caret-shape:auto;';
  /** CSS 声明：`caret-shape:bar;`。 */
  readonly bar = 'caret-shape:bar;';
  /** CSS 声明：`caret-shape:block;`。 */
  readonly block = 'caret-shape:block;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`caret-shape:inherit;`。
   */
  readonly inherit = 'caret-shape:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`caret-shape:initial;`。
   */
  readonly initial = 'caret-shape:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`caret-shape:revert;`。
   */
  readonly revert = 'caret-shape:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`caret-shape:revert-layer;`。
   */
  readonly revertLayer = 'caret-shape:revert-layer;';
  /** CSS 声明：`caret-shape:underscore;`。 */
  readonly underscore = 'caret-shape:underscore;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`caret-shape:unset;`。
   */
  readonly unset = 'caret-shape:unset;';
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
 * 要求元素避让指定侧的前置浮动元素。（clear）
 *
 * CSS 语法：`none | left | right | both | inline-start | inline-end`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
 */
export class ClearCss extends CssProperty {
  /** CSS 声明：`clear:both;`。 */
  readonly both = 'clear:both;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clear:inherit;`。
   */
  readonly inherit = 'clear:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clear:initial;`。
   */
  readonly initial = 'clear:initial;';
  /** CSS 声明：`clear:inline-end;`。 */
  readonly inlineEnd = 'clear:inline-end;';
  /** CSS 声明：`clear:inline-start;`。 */
  readonly inlineStart = 'clear:inline-start;';
  /** CSS 声明：`clear:left;`。 */
  readonly left = 'clear:left;';
  /** CSS 声明：`clear:none;`。 */
  readonly none = 'clear:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clear:revert;`。
   */
  readonly revert = 'clear:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clear:revert-layer;`。
   */
  readonly revertLayer = 'clear:revert-layer;';
  /** CSS 声明：`clear:right;`。 */
  readonly right = 'clear:right;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clear:unset;`。
   */
  readonly unset = 'clear:unset;';
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
 * 使用旧式矩形裁剪绝对定位元素；新代码优先考虑 clip-path。（clip）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
 */
export class ClipCss extends CssProperty {
  /** CSS 声明：`clip:auto;`。 */
  readonly auto = 'clip:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip:inherit;`。
   */
  readonly inherit = 'clip:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip:initial;`。
   */
  readonly initial = 'clip:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip:revert;`。
   */
  readonly revert = 'clip:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip:revert-layer;`。
   */
  readonly revertLayer = 'clip:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip:unset;`。
   */
  readonly unset = 'clip:unset;';
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
 * 通过基本形状、路径或引用裁剪元素的可见区域。（clip-path）
 *
 * CSS 语法：`<clip-source> | [ <basic-shape> || <geometry-box> ] | none`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
 */
export class ClipPathCss extends CssProperty {
  /** CSS 声明：`clip-path:border-box;`。 */
  readonly borderBox = 'clip-path:border-box;';
  /** CSS 声明：`clip-path:content-box;`。 */
  readonly contentBox = 'clip-path:content-box;';
  /** CSS 声明：`clip-path:fill-box;`。 */
  readonly fillBox = 'clip-path:fill-box;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip-path:inherit;`。
   */
  readonly inherit = 'clip-path:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip-path:initial;`。
   */
  readonly initial = 'clip-path:initial;';
  /** CSS 声明：`clip-path:margin-box;`。 */
  readonly marginBox = 'clip-path:margin-box;';
  /** CSS 声明：`clip-path:none;`。 */
  readonly none = 'clip-path:none;';
  /** CSS 声明：`clip-path:padding-box;`。 */
  readonly paddingBox = 'clip-path:padding-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip-path:revert;`。
   */
  readonly revert = 'clip-path:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip-path:revert-layer;`。
   */
  readonly revertLayer = 'clip-path:revert-layer;';
  /** CSS 声明：`clip-path:stroke-box;`。 */
  readonly strokeBox = 'clip-path:stroke-box;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip-path:unset;`。
   */
  readonly unset = 'clip-path:unset;';
  /** CSS 声明：`clip-path:view-box;`。 */
  readonly viewBox = 'clip-path:view-box;';
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
 * 设置 SVG 裁剪路径判断内部区域所用的填充规则。（clip-rule）
 *
 * CSS 语法：`nonzero | evenodd`。
 *
 * CSS 初始值：`nonzero`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
 */
export class ClipRuleCss extends CssProperty {
  /** CSS 声明：`clip-rule:evenodd;`。 */
  readonly evenodd = 'clip-rule:evenodd;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`clip-rule:inherit;`。
   */
  readonly inherit = 'clip-rule:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`clip-rule:initial;`。
   */
  readonly initial = 'clip-rule:initial;';
  /** CSS 声明：`clip-rule:nonzero;`。 */
  readonly nonzero = 'clip-rule:nonzero;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`clip-rule:revert;`。
   */
  readonly revert = 'clip-rule:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`clip-rule:revert-layer;`。
   */
  readonly revertLayer = 'clip-rule:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`clip-rule:unset;`。
   */
  readonly unset = 'clip-rule:unset;';
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
export class ColorCss extends CssProperty {
  /** CSS 声明：`color:AccentColor;`。 */
  readonly AccentColor = 'color:AccentColor;';
  /** CSS 声明：`color:AccentColorText;`。 */
  readonly AccentColorText = 'color:AccentColorText;';
  /** CSS 声明：`color:ActiveBorder;`。 */
  readonly ActiveBorder = 'color:ActiveBorder;';
  /** CSS 声明：`color:ActiveCaption;`。 */
  readonly ActiveCaption = 'color:ActiveCaption;';
  /** CSS 声明：`color:ActiveText;`。 */
  readonly ActiveText = 'color:ActiveText;';
  /** CSS 声明：`color:AppWorkspace;`。 */
  readonly AppWorkspace = 'color:AppWorkspace;';
  /** CSS 声明：`color:Background;`。 */
  readonly Background = 'color:Background;';
  /** CSS 声明：`color:ButtonBorder;`。 */
  readonly ButtonBorder = 'color:ButtonBorder;';
  /** CSS 声明：`color:ButtonFace;`。 */
  readonly ButtonFace = 'color:ButtonFace;';
  /** CSS 声明：`color:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'color:ButtonHighlight;';
  /** CSS 声明：`color:ButtonShadow;`。 */
  readonly ButtonShadow = 'color:ButtonShadow;';
  /** CSS 声明：`color:ButtonText;`。 */
  readonly ButtonText = 'color:ButtonText;';
  /** CSS 声明：`color:Canvas;`。 */
  readonly Canvas = 'color:Canvas;';
  /** CSS 声明：`color:CanvasText;`。 */
  readonly CanvasText = 'color:CanvasText;';
  /** CSS 声明：`color:CaptionText;`。 */
  readonly CaptionText = 'color:CaptionText;';
  /** CSS 声明：`color:Field;`。 */
  readonly Field = 'color:Field;';
  /** CSS 声明：`color:FieldText;`。 */
  readonly FieldText = 'color:FieldText;';
  /** CSS 声明：`color:GrayText;`。 */
  readonly GrayText = 'color:GrayText;';
  /** CSS 声明：`color:Highlight;`。 */
  readonly Highlight = 'color:Highlight;';
  /** CSS 声明：`color:HighlightText;`。 */
  readonly HighlightText = 'color:HighlightText;';
  /** CSS 声明：`color:InactiveBorder;`。 */
  readonly InactiveBorder = 'color:InactiveBorder;';
  /** CSS 声明：`color:InactiveCaption;`。 */
  readonly InactiveCaption = 'color:InactiveCaption;';
  /** CSS 声明：`color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'color:InactiveCaptionText;';
  /** CSS 声明：`color:InfoBackground;`。 */
  readonly InfoBackground = 'color:InfoBackground;';
  /** CSS 声明：`color:InfoText;`。 */
  readonly InfoText = 'color:InfoText;';
  /** CSS 声明：`color:LinkText;`。 */
  readonly LinkText = 'color:LinkText;';
  /** CSS 声明：`color:Mark;`。 */
  readonly Mark = 'color:Mark;';
  /** CSS 声明：`color:MarkText;`。 */
  readonly MarkText = 'color:MarkText;';
  /** CSS 声明：`color:Menu;`。 */
  readonly Menu = 'color:Menu;';
  /** CSS 声明：`color:MenuText;`。 */
  readonly MenuText = 'color:MenuText;';
  /** CSS 声明：`color:Scrollbar;`。 */
  readonly Scrollbar = 'color:Scrollbar;';
  /** CSS 声明：`color:SelectedItem;`。 */
  readonly SelectedItem = 'color:SelectedItem;';
  /** CSS 声明：`color:SelectedItemText;`。 */
  readonly SelectedItemText = 'color:SelectedItemText;';
  /** CSS 声明：`color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'color:ThreeDDarkShadow;';
  /** CSS 声明：`color:ThreeDFace;`。 */
  readonly ThreeDFace = 'color:ThreeDFace;';
  /** CSS 声明：`color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'color:ThreeDHighlight;';
  /** CSS 声明：`color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'color:ThreeDLightShadow;';
  /** CSS 声明：`color:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'color:ThreeDShadow;';
  /** CSS 声明：`color:VisitedText;`。 */
  readonly VisitedText = 'color:VisitedText;';
  /** CSS 声明：`color:Window;`。 */
  readonly Window = 'color:Window;';
  /** CSS 声明：`color:WindowFrame;`。 */
  readonly WindowFrame = 'color:WindowFrame;';
  /** CSS 声明：`color:WindowText;`。 */
  readonly WindowText = 'color:WindowText;';
  /** CSS 声明：`color:aliceblue;`。 */
  readonly aliceblue = 'color:aliceblue;';
  /** CSS 声明：`color:antiquewhite;`。 */
  readonly antiquewhite = 'color:antiquewhite;';
  /** CSS 声明：`color:aqua;`。 */
  readonly aqua = 'color:aqua;';
  /** CSS 声明：`color:aquamarine;`。 */
  readonly aquamarine = 'color:aquamarine;';
  /** CSS 声明：`color:azure;`。 */
  readonly azure = 'color:azure;';
  /** CSS 声明：`color:beige;`。 */
  readonly beige = 'color:beige;';
  /** CSS 声明：`color:bisque;`。 */
  readonly bisque = 'color:bisque;';
  /** CSS 声明：`color:black;`。 */
  readonly black = 'color:black;';
  /** CSS 声明：`color:blanchedalmond;`。 */
  readonly blanchedalmond = 'color:blanchedalmond;';
  /** CSS 声明：`color:blue;`。 */
  readonly blue = 'color:blue;';
  /** CSS 声明：`color:blueviolet;`。 */
  readonly blueviolet = 'color:blueviolet;';
  /** CSS 声明：`color:brown;`。 */
  readonly brown = 'color:brown;';
  /** CSS 声明：`color:burlywood;`。 */
  readonly burlywood = 'color:burlywood;';
  /** CSS 声明：`color:cadetblue;`。 */
  readonly cadetblue = 'color:cadetblue;';
  /** CSS 声明：`color:chartreuse;`。 */
  readonly chartreuse = 'color:chartreuse;';
  /** CSS 声明：`color:chocolate;`。 */
  readonly chocolate = 'color:chocolate;';
  /** CSS 声明：`color:coral;`。 */
  readonly coral = 'color:coral;';
  /** CSS 声明：`color:cornflowerblue;`。 */
  readonly cornflowerblue = 'color:cornflowerblue;';
  /** CSS 声明：`color:cornsilk;`。 */
  readonly cornsilk = 'color:cornsilk;';
  /** CSS 声明：`color:crimson;`。 */
  readonly crimson = 'color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`color:currentColor;`。
   */
  readonly currentColor = 'color:currentColor;';
  /** CSS 声明：`color:cyan;`。 */
  readonly cyan = 'color:cyan;';
  /** CSS 声明：`color:darkblue;`。 */
  readonly darkblue = 'color:darkblue;';
  /** CSS 声明：`color:darkcyan;`。 */
  readonly darkcyan = 'color:darkcyan;';
  /** CSS 声明：`color:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'color:darkgoldenrod;';
  /** CSS 声明：`color:darkgray;`。 */
  readonly darkgray = 'color:darkgray;';
  /** CSS 声明：`color:darkgreen;`。 */
  readonly darkgreen = 'color:darkgreen;';
  /** CSS 声明：`color:darkgrey;`。 */
  readonly darkgrey = 'color:darkgrey;';
  /** CSS 声明：`color:darkkhaki;`。 */
  readonly darkkhaki = 'color:darkkhaki;';
  /** CSS 声明：`color:darkmagenta;`。 */
  readonly darkmagenta = 'color:darkmagenta;';
  /** CSS 声明：`color:darkolivegreen;`。 */
  readonly darkolivegreen = 'color:darkolivegreen;';
  /** CSS 声明：`color:darkorange;`。 */
  readonly darkorange = 'color:darkorange;';
  /** CSS 声明：`color:darkorchid;`。 */
  readonly darkorchid = 'color:darkorchid;';
  /** CSS 声明：`color:darkred;`。 */
  readonly darkred = 'color:darkred;';
  /** CSS 声明：`color:darksalmon;`。 */
  readonly darksalmon = 'color:darksalmon;';
  /** CSS 声明：`color:darkseagreen;`。 */
  readonly darkseagreen = 'color:darkseagreen;';
  /** CSS 声明：`color:darkslateblue;`。 */
  readonly darkslateblue = 'color:darkslateblue;';
  /** CSS 声明：`color:darkslategray;`。 */
  readonly darkslategray = 'color:darkslategray;';
  /** CSS 声明：`color:darkslategrey;`。 */
  readonly darkslategrey = 'color:darkslategrey;';
  /** CSS 声明：`color:darkturquoise;`。 */
  readonly darkturquoise = 'color:darkturquoise;';
  /** CSS 声明：`color:darkviolet;`。 */
  readonly darkviolet = 'color:darkviolet;';
  /** CSS 声明：`color:deeppink;`。 */
  readonly deeppink = 'color:deeppink;';
  /** CSS 声明：`color:deepskyblue;`。 */
  readonly deepskyblue = 'color:deepskyblue;';
  /** CSS 声明：`color:dimgray;`。 */
  readonly dimgray = 'color:dimgray;';
  /** CSS 声明：`color:dimgrey;`。 */
  readonly dimgrey = 'color:dimgrey;';
  /** CSS 声明：`color:dodgerblue;`。 */
  readonly dodgerblue = 'color:dodgerblue;';
  /** CSS 声明：`color:firebrick;`。 */
  readonly firebrick = 'color:firebrick;';
  /** CSS 声明：`color:floralwhite;`。 */
  readonly floralwhite = 'color:floralwhite;';
  /** CSS 声明：`color:forestgreen;`。 */
  readonly forestgreen = 'color:forestgreen;';
  /** CSS 声明：`color:fuchsia;`。 */
  readonly fuchsia = 'color:fuchsia;';
  /** CSS 声明：`color:gainsboro;`。 */
  readonly gainsboro = 'color:gainsboro;';
  /** CSS 声明：`color:ghostwhite;`。 */
  readonly ghostwhite = 'color:ghostwhite;';
  /** CSS 声明：`color:gold;`。 */
  readonly gold = 'color:gold;';
  /** CSS 声明：`color:goldenrod;`。 */
  readonly goldenrod = 'color:goldenrod;';
  /** CSS 声明：`color:gray;`。 */
  readonly gray = 'color:gray;';
  /** CSS 声明：`color:green;`。 */
  readonly green = 'color:green;';
  /** CSS 声明：`color:greenyellow;`。 */
  readonly greenyellow = 'color:greenyellow;';
  /** CSS 声明：`color:grey;`。 */
  readonly grey = 'color:grey;';
  /** CSS 声明：`color:honeydew;`。 */
  readonly honeydew = 'color:honeydew;';
  /** CSS 声明：`color:hotpink;`。 */
  readonly hotpink = 'color:hotpink;';
  /** CSS 声明：`color:indianred;`。 */
  readonly indianred = 'color:indianred;';
  /** CSS 声明：`color:indigo;`。 */
  readonly indigo = 'color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color:inherit;`。
   */
  readonly inherit = 'color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color:initial;`。
   */
  readonly initial = 'color:initial;';
  /** CSS 声明：`color:ivory;`。 */
  readonly ivory = 'color:ivory;';
  /** CSS 声明：`color:khaki;`。 */
  readonly khaki = 'color:khaki;';
  /** CSS 声明：`color:lavender;`。 */
  readonly lavender = 'color:lavender;';
  /** CSS 声明：`color:lavenderblush;`。 */
  readonly lavenderblush = 'color:lavenderblush;';
  /** CSS 声明：`color:lawngreen;`。 */
  readonly lawngreen = 'color:lawngreen;';
  /** CSS 声明：`color:lemonchiffon;`。 */
  readonly lemonchiffon = 'color:lemonchiffon;';
  /** CSS 声明：`color:lightblue;`。 */
  readonly lightblue = 'color:lightblue;';
  /** CSS 声明：`color:lightcoral;`。 */
  readonly lightcoral = 'color:lightcoral;';
  /** CSS 声明：`color:lightcyan;`。 */
  readonly lightcyan = 'color:lightcyan;';
  /** CSS 声明：`color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'color:lightgoldenrodyellow;';
  /** CSS 声明：`color:lightgray;`。 */
  readonly lightgray = 'color:lightgray;';
  /** CSS 声明：`color:lightgreen;`。 */
  readonly lightgreen = 'color:lightgreen;';
  /** CSS 声明：`color:lightgrey;`。 */
  readonly lightgrey = 'color:lightgrey;';
  /** CSS 声明：`color:lightpink;`。 */
  readonly lightpink = 'color:lightpink;';
  /** CSS 声明：`color:lightsalmon;`。 */
  readonly lightsalmon = 'color:lightsalmon;';
  /** CSS 声明：`color:lightseagreen;`。 */
  readonly lightseagreen = 'color:lightseagreen;';
  /** CSS 声明：`color:lightskyblue;`。 */
  readonly lightskyblue = 'color:lightskyblue;';
  /** CSS 声明：`color:lightslategray;`。 */
  readonly lightslategray = 'color:lightslategray;';
  /** CSS 声明：`color:lightslategrey;`。 */
  readonly lightslategrey = 'color:lightslategrey;';
  /** CSS 声明：`color:lightsteelblue;`。 */
  readonly lightsteelblue = 'color:lightsteelblue;';
  /** CSS 声明：`color:lightyellow;`。 */
  readonly lightyellow = 'color:lightyellow;';
  /** CSS 声明：`color:lime;`。 */
  readonly lime = 'color:lime;';
  /** CSS 声明：`color:limegreen;`。 */
  readonly limegreen = 'color:limegreen;';
  /** CSS 声明：`color:linen;`。 */
  readonly linen = 'color:linen;';
  /** CSS 声明：`color:magenta;`。 */
  readonly magenta = 'color:magenta;';
  /** CSS 声明：`color:maroon;`。 */
  readonly maroon = 'color:maroon;';
  /** CSS 声明：`color:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'color:mediumaquamarine;';
  /** CSS 声明：`color:mediumblue;`。 */
  readonly mediumblue = 'color:mediumblue;';
  /** CSS 声明：`color:mediumorchid;`。 */
  readonly mediumorchid = 'color:mediumorchid;';
  /** CSS 声明：`color:mediumpurple;`。 */
  readonly mediumpurple = 'color:mediumpurple;';
  /** CSS 声明：`color:mediumseagreen;`。 */
  readonly mediumseagreen = 'color:mediumseagreen;';
  /** CSS 声明：`color:mediumslateblue;`。 */
  readonly mediumslateblue = 'color:mediumslateblue;';
  /** CSS 声明：`color:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'color:mediumspringgreen;';
  /** CSS 声明：`color:mediumturquoise;`。 */
  readonly mediumturquoise = 'color:mediumturquoise;';
  /** CSS 声明：`color:mediumvioletred;`。 */
  readonly mediumvioletred = 'color:mediumvioletred;';
  /** CSS 声明：`color:midnightblue;`。 */
  readonly midnightblue = 'color:midnightblue;';
  /** CSS 声明：`color:mintcream;`。 */
  readonly mintcream = 'color:mintcream;';
  /** CSS 声明：`color:mistyrose;`。 */
  readonly mistyrose = 'color:mistyrose;';
  /** CSS 声明：`color:moccasin;`。 */
  readonly moccasin = 'color:moccasin;';
  /** CSS 声明：`color:navajowhite;`。 */
  readonly navajowhite = 'color:navajowhite;';
  /** CSS 声明：`color:navy;`。 */
  readonly navy = 'color:navy;';
  /** CSS 声明：`color:oldlace;`。 */
  readonly oldlace = 'color:oldlace;';
  /** CSS 声明：`color:olive;`。 */
  readonly olive = 'color:olive;';
  /** CSS 声明：`color:olivedrab;`。 */
  readonly olivedrab = 'color:olivedrab;';
  /** CSS 声明：`color:orange;`。 */
  readonly orange = 'color:orange;';
  /** CSS 声明：`color:orangered;`。 */
  readonly orangered = 'color:orangered;';
  /** CSS 声明：`color:orchid;`。 */
  readonly orchid = 'color:orchid;';
  /** CSS 声明：`color:palegoldenrod;`。 */
  readonly palegoldenrod = 'color:palegoldenrod;';
  /** CSS 声明：`color:palegreen;`。 */
  readonly palegreen = 'color:palegreen;';
  /** CSS 声明：`color:paleturquoise;`。 */
  readonly paleturquoise = 'color:paleturquoise;';
  /** CSS 声明：`color:palevioletred;`。 */
  readonly palevioletred = 'color:palevioletred;';
  /** CSS 声明：`color:papayawhip;`。 */
  readonly papayawhip = 'color:papayawhip;';
  /** CSS 声明：`color:peachpuff;`。 */
  readonly peachpuff = 'color:peachpuff;';
  /** CSS 声明：`color:peru;`。 */
  readonly peru = 'color:peru;';
  /** CSS 声明：`color:pink;`。 */
  readonly pink = 'color:pink;';
  /** CSS 声明：`color:plum;`。 */
  readonly plum = 'color:plum;';
  /** CSS 声明：`color:powderblue;`。 */
  readonly powderblue = 'color:powderblue;';
  /** CSS 声明：`color:purple;`。 */
  readonly purple = 'color:purple;';
  /** CSS 声明：`color:rebeccapurple;`。 */
  readonly rebeccapurple = 'color:rebeccapurple;';
  /** CSS 声明：`color:red;`。 */
  readonly red = 'color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color:revert;`。
   */
  readonly revert = 'color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color:revert-layer;`。
   */
  readonly revertLayer = 'color:revert-layer;';
  /** CSS 声明：`color:rosybrown;`。 */
  readonly rosybrown = 'color:rosybrown;';
  /** CSS 声明：`color:royalblue;`。 */
  readonly royalblue = 'color:royalblue;';
  /** CSS 声明：`color:saddlebrown;`。 */
  readonly saddlebrown = 'color:saddlebrown;';
  /** CSS 声明：`color:salmon;`。 */
  readonly salmon = 'color:salmon;';
  /** CSS 声明：`color:sandybrown;`。 */
  readonly sandybrown = 'color:sandybrown;';
  /** CSS 声明：`color:seagreen;`。 */
  readonly seagreen = 'color:seagreen;';
  /** CSS 声明：`color:seashell;`。 */
  readonly seashell = 'color:seashell;';
  /** CSS 声明：`color:sienna;`。 */
  readonly sienna = 'color:sienna;';
  /** CSS 声明：`color:silver;`。 */
  readonly silver = 'color:silver;';
  /** CSS 声明：`color:skyblue;`。 */
  readonly skyblue = 'color:skyblue;';
  /** CSS 声明：`color:slateblue;`。 */
  readonly slateblue = 'color:slateblue;';
  /** CSS 声明：`color:slategray;`。 */
  readonly slategray = 'color:slategray;';
  /** CSS 声明：`color:slategrey;`。 */
  readonly slategrey = 'color:slategrey;';
  /** CSS 声明：`color:snow;`。 */
  readonly snow = 'color:snow;';
  /** CSS 声明：`color:springgreen;`。 */
  readonly springgreen = 'color:springgreen;';
  /** CSS 声明：`color:steelblue;`。 */
  readonly steelblue = 'color:steelblue;';
  /** CSS 声明：`color:tan;`。 */
  readonly tan = 'color:tan;';
  /** CSS 声明：`color:teal;`。 */
  readonly teal = 'color:teal;';
  /** CSS 声明：`color:thistle;`。 */
  readonly thistle = 'color:thistle;';
  /** CSS 声明：`color:tomato;`。 */
  readonly tomato = 'color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`color:transparent;`。
   */
  readonly transparent = 'color:transparent;';
  /** CSS 声明：`color:turquoise;`。 */
  readonly turquoise = 'color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color:unset;`。
   */
  readonly unset = 'color:unset;';
  /** CSS 声明：`color:violet;`。 */
  readonly violet = 'color:violet;';
  /** CSS 声明：`color:wheat;`。 */
  readonly wheat = 'color:wheat;';
  /** CSS 声明：`color:white;`。 */
  readonly white = 'color:white;';
  /** CSS 声明：`color:whitesmoke;`。 */
  readonly whitesmoke = 'color:whitesmoke;';
  /** CSS 声明：`color:yellow;`。 */
  readonly yellow = 'color:yellow;';
  /** CSS 声明：`color:yellowgreen;`。 */
  readonly yellowgreen = 'color:yellowgreen;';
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
 * 控制输出设备对颜色的自动调整；这是 print-color-adjust 的旧名称。（color-adjust）
 *
 * CSS 语法：`economy | exact`。
 *
 * CSS 初始值：`economy`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class ColorAdjustCss extends CssProperty {
  /** CSS 声明：`color-adjust:economy;`。 */
  readonly economy = 'color-adjust:economy;';
  /** CSS 声明：`color-adjust:exact;`。 */
  readonly exact = 'color-adjust:exact;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-adjust:inherit;`。
   */
  readonly inherit = 'color-adjust:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-adjust:initial;`。
   */
  readonly initial = 'color-adjust:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-adjust:revert;`。
   */
  readonly revert = 'color-adjust:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-adjust:revert-layer;`。
   */
  readonly revertLayer = 'color-adjust:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-adjust:unset;`。
   */
  readonly unset = 'color-adjust:unset;';
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
 * 设置 SVG 图形颜色插值所用的色彩空间。（color-interpolation）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
 */
export class ColorInterpolationCss extends CssProperty {
  /** CSS 声明：`color-interpolation:auto;`。 */
  readonly auto = 'color-interpolation:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-interpolation:inherit;`。
   */
  readonly inherit = 'color-interpolation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-interpolation:initial;`。
   */
  readonly initial = 'color-interpolation:initial;';
  /** CSS 声明：`color-interpolation:linearRGB;`。 */
  readonly linearRGB = 'color-interpolation:linearRGB;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-interpolation:revert;`。
   */
  readonly revert = 'color-interpolation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-interpolation:revert-layer;`。
   */
  readonly revertLayer = 'color-interpolation:revert-layer;';
  /** CSS 声明：`color-interpolation:sRGB;`。 */
  readonly sRGB = 'color-interpolation:sRGB;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-interpolation:unset;`。
   */
  readonly unset = 'color-interpolation:unset;';
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
 * 设置 SVG 滤镜效果进行颜色计算时所用的色彩空间。（color-interpolation-filters）
 *
 * CSS 语法：`auto | sRGB | linearRGB`。
 *
 * CSS 初始值：`linearRGB`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
 */
export class ColorInterpolationFiltersCss extends CssProperty {
  /** CSS 声明：`color-interpolation-filters:auto;`。 */
  readonly auto = 'color-interpolation-filters:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-interpolation-filters:inherit;`。
   */
  readonly inherit = 'color-interpolation-filters:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-interpolation-filters:initial;`。
   */
  readonly initial = 'color-interpolation-filters:initial;';
  /** CSS 声明：`color-interpolation-filters:linearRGB;`。 */
  readonly linearRGB = 'color-interpolation-filters:linearRGB;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-interpolation-filters:revert;`。
   */
  readonly revert = 'color-interpolation-filters:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-interpolation-filters:revert-layer;`。
   */
  readonly revertLayer = 'color-interpolation-filters:revert-layer;';
  /** CSS 声明：`color-interpolation-filters:sRGB;`。 */
  readonly sRGB = 'color-interpolation-filters:sRGB;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-interpolation-filters:unset;`。
   */
  readonly unset = 'color-interpolation-filters:unset;';
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
 * 向 SVG 渲染器提供颜色绘制质量与速度之间的偏好。（color-rendering）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
 */
export class ColorRenderingCss extends CssProperty {
  /** CSS 声明：`color-rendering:auto;`。 */
  readonly auto = 'color-rendering:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-rendering:inherit;`。
   */
  readonly inherit = 'color-rendering:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-rendering:initial;`。
   */
  readonly initial = 'color-rendering:initial;';
  /** CSS 声明：`color-rendering:optimizeQuality;`。 */
  readonly optimizeQuality = 'color-rendering:optimizeQuality;';
  /** CSS 声明：`color-rendering:optimizeSpeed;`。 */
  readonly optimizeSpeed = 'color-rendering:optimizeSpeed;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-rendering:revert;`。
   */
  readonly revert = 'color-rendering:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-rendering:revert-layer;`。
   */
  readonly revertLayer = 'color-rendering:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-rendering:unset;`。
   */
  readonly unset = 'color-rendering:unset;';
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
 * 声明元素支持的配色方案，影响原生控件、滚动条等浏览器绘制内容。（color-scheme）
 *
 * 声明支持的方案不等于为应用生成主题颜色；文字、背景和业务 token 仍需自行定义。
 *
 * CSS 语法：`normal | [ light | dark | <custom-ident> ]+ && only?`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
 */
export class ColorSchemeCss extends CssProperty {
  /** CSS 声明：`color-scheme:dark;`。 */
  readonly dark = 'color-scheme:dark;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`color-scheme:inherit;`。
   */
  readonly inherit = 'color-scheme:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`color-scheme:initial;`。
   */
  readonly initial = 'color-scheme:initial;';
  /** CSS 声明：`color-scheme:light;`。 */
  readonly light = 'color-scheme:light;';
  /** CSS 声明：`color-scheme:normal;`。 */
  readonly normal = 'color-scheme:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`color-scheme:revert;`。
   */
  readonly revert = 'color-scheme:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`color-scheme:revert-layer;`。
   */
  readonly revertLayer = 'color-scheme:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`color-scheme:unset;`。
   */
  readonly unset = 'color-scheme:unset;';
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
 * 设置多栏布局的目标栏数。（column-count）
 *
 * CSS 语法：`<integer> | auto`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
 */
export class ColumnCountCss extends CssProperty {
  /** CSS 声明：`column-count:auto;`。 */
  readonly auto = 'column-count:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-count:inherit;`。
   */
  readonly inherit = 'column-count:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-count:initial;`。
   */
  readonly initial = 'column-count:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-count:revert;`。
   */
  readonly revert = 'column-count:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-count:revert-layer;`。
   */
  readonly revertLayer = 'column-count:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-count:unset;`。
   */
  readonly unset = 'column-count:unset;';
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
 * 设置多栏内容顺序填充还是尽量均衡栏高。（column-fill）
 *
 * CSS 语法：`auto | balance`。
 *
 * CSS 初始值：`balance`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
 */
export class ColumnFillCss extends CssProperty {
  /** CSS 声明：`column-fill:auto;`。 */
  readonly auto = 'column-fill:auto;';
  /** CSS 声明：`column-fill:balance;`。 */
  readonly balance = 'column-fill:balance;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-fill:inherit;`。
   */
  readonly inherit = 'column-fill:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-fill:initial;`。
   */
  readonly initial = 'column-fill:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-fill:revert;`。
   */
  readonly revert = 'column-fill:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-fill:revert-layer;`。
   */
  readonly revertLayer = 'column-fill:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-fill:unset;`。
   */
  readonly unset = 'column-fill:unset;';
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
 * 设置布局中相邻列之间的间距。（column-gap）
 *
 * CSS 语法：`normal | <length-percentage>`。
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
  readonly inherit = 'column-gap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-gap:initial;`。
   */
  readonly initial = 'column-gap:initial;';
  /** CSS 声明：`column-gap:normal;`。 */
  readonly normal = 'column-gap:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-gap:revert;`。
   */
  readonly revert = 'column-gap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-gap:revert-layer;`。
   */
  readonly revertLayer = 'column-gap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-gap:unset;`。
   */
  readonly unset = 'column-gap:unset;';
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
 * 设置多栏之间分隔线的宽度、线型和颜色。（column-rule）
 *
 * CSS 语法：`<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
 */
export class ColumnRuleCss extends LengthCssProperty {
  /** CSS 声明：`column-rule:AccentColor;`。 */
  readonly AccentColor = 'column-rule:AccentColor;';
  /** CSS 声明：`column-rule:AccentColorText;`。 */
  readonly AccentColorText = 'column-rule:AccentColorText;';
  /** CSS 声明：`column-rule:ActiveBorder;`。 */
  readonly ActiveBorder = 'column-rule:ActiveBorder;';
  /** CSS 声明：`column-rule:ActiveCaption;`。 */
  readonly ActiveCaption = 'column-rule:ActiveCaption;';
  /** CSS 声明：`column-rule:ActiveText;`。 */
  readonly ActiveText = 'column-rule:ActiveText;';
  /** CSS 声明：`column-rule:AppWorkspace;`。 */
  readonly AppWorkspace = 'column-rule:AppWorkspace;';
  /** CSS 声明：`column-rule:Background;`。 */
  readonly Background = 'column-rule:Background;';
  /** CSS 声明：`column-rule:ButtonBorder;`。 */
  readonly ButtonBorder = 'column-rule:ButtonBorder;';
  /** CSS 声明：`column-rule:ButtonFace;`。 */
  readonly ButtonFace = 'column-rule:ButtonFace;';
  /** CSS 声明：`column-rule:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'column-rule:ButtonHighlight;';
  /** CSS 声明：`column-rule:ButtonShadow;`。 */
  readonly ButtonShadow = 'column-rule:ButtonShadow;';
  /** CSS 声明：`column-rule:ButtonText;`。 */
  readonly ButtonText = 'column-rule:ButtonText;';
  /** CSS 声明：`column-rule:Canvas;`。 */
  readonly Canvas = 'column-rule:Canvas;';
  /** CSS 声明：`column-rule:CanvasText;`。 */
  readonly CanvasText = 'column-rule:CanvasText;';
  /** CSS 声明：`column-rule:CaptionText;`。 */
  readonly CaptionText = 'column-rule:CaptionText;';
  /** CSS 声明：`column-rule:Field;`。 */
  readonly Field = 'column-rule:Field;';
  /** CSS 声明：`column-rule:FieldText;`。 */
  readonly FieldText = 'column-rule:FieldText;';
  /** CSS 声明：`column-rule:GrayText;`。 */
  readonly GrayText = 'column-rule:GrayText;';
  /** CSS 声明：`column-rule:Highlight;`。 */
  readonly Highlight = 'column-rule:Highlight;';
  /** CSS 声明：`column-rule:HighlightText;`。 */
  readonly HighlightText = 'column-rule:HighlightText;';
  /** CSS 声明：`column-rule:InactiveBorder;`。 */
  readonly InactiveBorder = 'column-rule:InactiveBorder;';
  /** CSS 声明：`column-rule:InactiveCaption;`。 */
  readonly InactiveCaption = 'column-rule:InactiveCaption;';
  /** CSS 声明：`column-rule:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'column-rule:InactiveCaptionText;';
  /** CSS 声明：`column-rule:InfoBackground;`。 */
  readonly InfoBackground = 'column-rule:InfoBackground;';
  /** CSS 声明：`column-rule:InfoText;`。 */
  readonly InfoText = 'column-rule:InfoText;';
  /** CSS 声明：`column-rule:LinkText;`。 */
  readonly LinkText = 'column-rule:LinkText;';
  /** CSS 声明：`column-rule:Mark;`。 */
  readonly Mark = 'column-rule:Mark;';
  /** CSS 声明：`column-rule:MarkText;`。 */
  readonly MarkText = 'column-rule:MarkText;';
  /** CSS 声明：`column-rule:Menu;`。 */
  readonly Menu = 'column-rule:Menu;';
  /** CSS 声明：`column-rule:MenuText;`。 */
  readonly MenuText = 'column-rule:MenuText;';
  /** CSS 声明：`column-rule:Scrollbar;`。 */
  readonly Scrollbar = 'column-rule:Scrollbar;';
  /** CSS 声明：`column-rule:SelectedItem;`。 */
  readonly SelectedItem = 'column-rule:SelectedItem;';
  /** CSS 声明：`column-rule:SelectedItemText;`。 */
  readonly SelectedItemText = 'column-rule:SelectedItemText;';
  /** CSS 声明：`column-rule:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'column-rule:ThreeDDarkShadow;';
  /** CSS 声明：`column-rule:ThreeDFace;`。 */
  readonly ThreeDFace = 'column-rule:ThreeDFace;';
  /** CSS 声明：`column-rule:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'column-rule:ThreeDHighlight;';
  /** CSS 声明：`column-rule:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'column-rule:ThreeDLightShadow;';
  /** CSS 声明：`column-rule:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'column-rule:ThreeDShadow;';
  /** CSS 声明：`column-rule:VisitedText;`。 */
  readonly VisitedText = 'column-rule:VisitedText;';
  /** CSS 声明：`column-rule:Window;`。 */
  readonly Window = 'column-rule:Window;';
  /** CSS 声明：`column-rule:WindowFrame;`。 */
  readonly WindowFrame = 'column-rule:WindowFrame;';
  /** CSS 声明：`column-rule:WindowText;`。 */
  readonly WindowText = 'column-rule:WindowText;';
  /** CSS 声明：`column-rule:aliceblue;`。 */
  readonly aliceblue = 'column-rule:aliceblue;';
  /** CSS 声明：`column-rule:antiquewhite;`。 */
  readonly antiquewhite = 'column-rule:antiquewhite;';
  /** CSS 声明：`column-rule:aqua;`。 */
  readonly aqua = 'column-rule:aqua;';
  /** CSS 声明：`column-rule:aquamarine;`。 */
  readonly aquamarine = 'column-rule:aquamarine;';
  /** CSS 声明：`column-rule:azure;`。 */
  readonly azure = 'column-rule:azure;';
  /** CSS 声明：`column-rule:beige;`。 */
  readonly beige = 'column-rule:beige;';
  /** CSS 声明：`column-rule:bisque;`。 */
  readonly bisque = 'column-rule:bisque;';
  /** CSS 声明：`column-rule:black;`。 */
  readonly black = 'column-rule:black;';
  /** CSS 声明：`column-rule:blanchedalmond;`。 */
  readonly blanchedalmond = 'column-rule:blanchedalmond;';
  /** CSS 声明：`column-rule:blue;`。 */
  readonly blue = 'column-rule:blue;';
  /** CSS 声明：`column-rule:blueviolet;`。 */
  readonly blueviolet = 'column-rule:blueviolet;';
  /** CSS 声明：`column-rule:brown;`。 */
  readonly brown = 'column-rule:brown;';
  /** CSS 声明：`column-rule:burlywood;`。 */
  readonly burlywood = 'column-rule:burlywood;';
  /** CSS 声明：`column-rule:cadetblue;`。 */
  readonly cadetblue = 'column-rule:cadetblue;';
  /** CSS 声明：`column-rule:chartreuse;`。 */
  readonly chartreuse = 'column-rule:chartreuse;';
  /** CSS 声明：`column-rule:chocolate;`。 */
  readonly chocolate = 'column-rule:chocolate;';
  /** CSS 声明：`column-rule:coral;`。 */
  readonly coral = 'column-rule:coral;';
  /** CSS 声明：`column-rule:cornflowerblue;`。 */
  readonly cornflowerblue = 'column-rule:cornflowerblue;';
  /** CSS 声明：`column-rule:cornsilk;`。 */
  readonly cornsilk = 'column-rule:cornsilk;';
  /** CSS 声明：`column-rule:crimson;`。 */
  readonly crimson = 'column-rule:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`column-rule:currentColor;`。
   */
  readonly currentColor = 'column-rule:currentColor;';
  /** CSS 声明：`column-rule:cyan;`。 */
  readonly cyan = 'column-rule:cyan;';
  /** CSS 声明：`column-rule:darkblue;`。 */
  readonly darkblue = 'column-rule:darkblue;';
  /** CSS 声明：`column-rule:darkcyan;`。 */
  readonly darkcyan = 'column-rule:darkcyan;';
  /** CSS 声明：`column-rule:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'column-rule:darkgoldenrod;';
  /** CSS 声明：`column-rule:darkgray;`。 */
  readonly darkgray = 'column-rule:darkgray;';
  /** CSS 声明：`column-rule:darkgreen;`。 */
  readonly darkgreen = 'column-rule:darkgreen;';
  /** CSS 声明：`column-rule:darkgrey;`。 */
  readonly darkgrey = 'column-rule:darkgrey;';
  /** CSS 声明：`column-rule:darkkhaki;`。 */
  readonly darkkhaki = 'column-rule:darkkhaki;';
  /** CSS 声明：`column-rule:darkmagenta;`。 */
  readonly darkmagenta = 'column-rule:darkmagenta;';
  /** CSS 声明：`column-rule:darkolivegreen;`。 */
  readonly darkolivegreen = 'column-rule:darkolivegreen;';
  /** CSS 声明：`column-rule:darkorange;`。 */
  readonly darkorange = 'column-rule:darkorange;';
  /** CSS 声明：`column-rule:darkorchid;`。 */
  readonly darkorchid = 'column-rule:darkorchid;';
  /** CSS 声明：`column-rule:darkred;`。 */
  readonly darkred = 'column-rule:darkred;';
  /** CSS 声明：`column-rule:darksalmon;`。 */
  readonly darksalmon = 'column-rule:darksalmon;';
  /** CSS 声明：`column-rule:darkseagreen;`。 */
  readonly darkseagreen = 'column-rule:darkseagreen;';
  /** CSS 声明：`column-rule:darkslateblue;`。 */
  readonly darkslateblue = 'column-rule:darkslateblue;';
  /** CSS 声明：`column-rule:darkslategray;`。 */
  readonly darkslategray = 'column-rule:darkslategray;';
  /** CSS 声明：`column-rule:darkslategrey;`。 */
  readonly darkslategrey = 'column-rule:darkslategrey;';
  /** CSS 声明：`column-rule:darkturquoise;`。 */
  readonly darkturquoise = 'column-rule:darkturquoise;';
  /** CSS 声明：`column-rule:darkviolet;`。 */
  readonly darkviolet = 'column-rule:darkviolet;';
  /** CSS 声明：`column-rule:dashed;`。 */
  readonly dashed = 'column-rule:dashed;';
  /** CSS 声明：`column-rule:deeppink;`。 */
  readonly deeppink = 'column-rule:deeppink;';
  /** CSS 声明：`column-rule:deepskyblue;`。 */
  readonly deepskyblue = 'column-rule:deepskyblue;';
  /** CSS 声明：`column-rule:dimgray;`。 */
  readonly dimgray = 'column-rule:dimgray;';
  /** CSS 声明：`column-rule:dimgrey;`。 */
  readonly dimgrey = 'column-rule:dimgrey;';
  /** CSS 声明：`column-rule:dodgerblue;`。 */
  readonly dodgerblue = 'column-rule:dodgerblue;';
  /** CSS 声明：`column-rule:dotted;`。 */
  readonly dotted = 'column-rule:dotted;';
  /** CSS 声明：`column-rule:double;`。 */
  readonly double = 'column-rule:double;';
  /** CSS 声明：`column-rule:firebrick;`。 */
  readonly firebrick = 'column-rule:firebrick;';
  /** CSS 声明：`column-rule:floralwhite;`。 */
  readonly floralwhite = 'column-rule:floralwhite;';
  /** CSS 声明：`column-rule:forestgreen;`。 */
  readonly forestgreen = 'column-rule:forestgreen;';
  /** CSS 声明：`column-rule:fuchsia;`。 */
  readonly fuchsia = 'column-rule:fuchsia;';
  /** CSS 声明：`column-rule:gainsboro;`。 */
  readonly gainsboro = 'column-rule:gainsboro;';
  /** CSS 声明：`column-rule:ghostwhite;`。 */
  readonly ghostwhite = 'column-rule:ghostwhite;';
  /** CSS 声明：`column-rule:gold;`。 */
  readonly gold = 'column-rule:gold;';
  /** CSS 声明：`column-rule:goldenrod;`。 */
  readonly goldenrod = 'column-rule:goldenrod;';
  /** CSS 声明：`column-rule:gray;`。 */
  readonly gray = 'column-rule:gray;';
  /** CSS 声明：`column-rule:green;`。 */
  readonly green = 'column-rule:green;';
  /** CSS 声明：`column-rule:greenyellow;`。 */
  readonly greenyellow = 'column-rule:greenyellow;';
  /** CSS 声明：`column-rule:grey;`。 */
  readonly grey = 'column-rule:grey;';
  /** CSS 声明：`column-rule:groove;`。 */
  readonly groove = 'column-rule:groove;';
  /** CSS 声明：`column-rule:hidden;`。 */
  readonly hidden = 'column-rule:hidden;';
  /** CSS 声明：`column-rule:honeydew;`。 */
  readonly honeydew = 'column-rule:honeydew;';
  /** CSS 声明：`column-rule:hotpink;`。 */
  readonly hotpink = 'column-rule:hotpink;';
  /** CSS 声明：`column-rule:indianred;`。 */
  readonly indianred = 'column-rule:indianred;';
  /** CSS 声明：`column-rule:indigo;`。 */
  readonly indigo = 'column-rule:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule:inherit;`。
   */
  readonly inherit = 'column-rule:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule:initial;`。
   */
  readonly initial = 'column-rule:initial;';
  /** CSS 声明：`column-rule:inset;`。 */
  readonly inset = 'column-rule:inset;';
  /** CSS 声明：`column-rule:ivory;`。 */
  readonly ivory = 'column-rule:ivory;';
  /** CSS 声明：`column-rule:khaki;`。 */
  readonly khaki = 'column-rule:khaki;';
  /** CSS 声明：`column-rule:lavender;`。 */
  readonly lavender = 'column-rule:lavender;';
  /** CSS 声明：`column-rule:lavenderblush;`。 */
  readonly lavenderblush = 'column-rule:lavenderblush;';
  /** CSS 声明：`column-rule:lawngreen;`。 */
  readonly lawngreen = 'column-rule:lawngreen;';
  /** CSS 声明：`column-rule:lemonchiffon;`。 */
  readonly lemonchiffon = 'column-rule:lemonchiffon;';
  /** CSS 声明：`column-rule:lightblue;`。 */
  readonly lightblue = 'column-rule:lightblue;';
  /** CSS 声明：`column-rule:lightcoral;`。 */
  readonly lightcoral = 'column-rule:lightcoral;';
  /** CSS 声明：`column-rule:lightcyan;`。 */
  readonly lightcyan = 'column-rule:lightcyan;';
  /** CSS 声明：`column-rule:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'column-rule:lightgoldenrodyellow;';
  /** CSS 声明：`column-rule:lightgray;`。 */
  readonly lightgray = 'column-rule:lightgray;';
  /** CSS 声明：`column-rule:lightgreen;`。 */
  readonly lightgreen = 'column-rule:lightgreen;';
  /** CSS 声明：`column-rule:lightgrey;`。 */
  readonly lightgrey = 'column-rule:lightgrey;';
  /** CSS 声明：`column-rule:lightpink;`。 */
  readonly lightpink = 'column-rule:lightpink;';
  /** CSS 声明：`column-rule:lightsalmon;`。 */
  readonly lightsalmon = 'column-rule:lightsalmon;';
  /** CSS 声明：`column-rule:lightseagreen;`。 */
  readonly lightseagreen = 'column-rule:lightseagreen;';
  /** CSS 声明：`column-rule:lightskyblue;`。 */
  readonly lightskyblue = 'column-rule:lightskyblue;';
  /** CSS 声明：`column-rule:lightslategray;`。 */
  readonly lightslategray = 'column-rule:lightslategray;';
  /** CSS 声明：`column-rule:lightslategrey;`。 */
  readonly lightslategrey = 'column-rule:lightslategrey;';
  /** CSS 声明：`column-rule:lightsteelblue;`。 */
  readonly lightsteelblue = 'column-rule:lightsteelblue;';
  /** CSS 声明：`column-rule:lightyellow;`。 */
  readonly lightyellow = 'column-rule:lightyellow;';
  /** CSS 声明：`column-rule:lime;`。 */
  readonly lime = 'column-rule:lime;';
  /** CSS 声明：`column-rule:limegreen;`。 */
  readonly limegreen = 'column-rule:limegreen;';
  /** CSS 声明：`column-rule:linen;`。 */
  readonly linen = 'column-rule:linen;';
  /** CSS 声明：`column-rule:magenta;`。 */
  readonly magenta = 'column-rule:magenta;';
  /** CSS 声明：`column-rule:maroon;`。 */
  readonly maroon = 'column-rule:maroon;';
  /** CSS 声明：`column-rule:medium;`。 */
  readonly medium = 'column-rule:medium;';
  /** CSS 声明：`column-rule:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'column-rule:mediumaquamarine;';
  /** CSS 声明：`column-rule:mediumblue;`。 */
  readonly mediumblue = 'column-rule:mediumblue;';
  /** CSS 声明：`column-rule:mediumorchid;`。 */
  readonly mediumorchid = 'column-rule:mediumorchid;';
  /** CSS 声明：`column-rule:mediumpurple;`。 */
  readonly mediumpurple = 'column-rule:mediumpurple;';
  /** CSS 声明：`column-rule:mediumseagreen;`。 */
  readonly mediumseagreen = 'column-rule:mediumseagreen;';
  /** CSS 声明：`column-rule:mediumslateblue;`。 */
  readonly mediumslateblue = 'column-rule:mediumslateblue;';
  /** CSS 声明：`column-rule:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'column-rule:mediumspringgreen;';
  /** CSS 声明：`column-rule:mediumturquoise;`。 */
  readonly mediumturquoise = 'column-rule:mediumturquoise;';
  /** CSS 声明：`column-rule:mediumvioletred;`。 */
  readonly mediumvioletred = 'column-rule:mediumvioletred;';
  /** CSS 声明：`column-rule:midnightblue;`。 */
  readonly midnightblue = 'column-rule:midnightblue;';
  /** CSS 声明：`column-rule:mintcream;`。 */
  readonly mintcream = 'column-rule:mintcream;';
  /** CSS 声明：`column-rule:mistyrose;`。 */
  readonly mistyrose = 'column-rule:mistyrose;';
  /** CSS 声明：`column-rule:moccasin;`。 */
  readonly moccasin = 'column-rule:moccasin;';
  /** CSS 声明：`column-rule:navajowhite;`。 */
  readonly navajowhite = 'column-rule:navajowhite;';
  /** CSS 声明：`column-rule:navy;`。 */
  readonly navy = 'column-rule:navy;';
  /** CSS 声明：`column-rule:none;`。 */
  readonly none = 'column-rule:none;';
  /** CSS 声明：`column-rule:oldlace;`。 */
  readonly oldlace = 'column-rule:oldlace;';
  /** CSS 声明：`column-rule:olive;`。 */
  readonly olive = 'column-rule:olive;';
  /** CSS 声明：`column-rule:olivedrab;`。 */
  readonly olivedrab = 'column-rule:olivedrab;';
  /** CSS 声明：`column-rule:orange;`。 */
  readonly orange = 'column-rule:orange;';
  /** CSS 声明：`column-rule:orangered;`。 */
  readonly orangered = 'column-rule:orangered;';
  /** CSS 声明：`column-rule:orchid;`。 */
  readonly orchid = 'column-rule:orchid;';
  /** CSS 声明：`column-rule:outset;`。 */
  readonly outset = 'column-rule:outset;';
  /** CSS 声明：`column-rule:palegoldenrod;`。 */
  readonly palegoldenrod = 'column-rule:palegoldenrod;';
  /** CSS 声明：`column-rule:palegreen;`。 */
  readonly palegreen = 'column-rule:palegreen;';
  /** CSS 声明：`column-rule:paleturquoise;`。 */
  readonly paleturquoise = 'column-rule:paleturquoise;';
  /** CSS 声明：`column-rule:palevioletred;`。 */
  readonly palevioletred = 'column-rule:palevioletred;';
  /** CSS 声明：`column-rule:papayawhip;`。 */
  readonly papayawhip = 'column-rule:papayawhip;';
  /** CSS 声明：`column-rule:peachpuff;`。 */
  readonly peachpuff = 'column-rule:peachpuff;';
  /** CSS 声明：`column-rule:peru;`。 */
  readonly peru = 'column-rule:peru;';
  /** CSS 声明：`column-rule:pink;`。 */
  readonly pink = 'column-rule:pink;';
  /** CSS 声明：`column-rule:plum;`。 */
  readonly plum = 'column-rule:plum;';
  /** CSS 声明：`column-rule:powderblue;`。 */
  readonly powderblue = 'column-rule:powderblue;';
  /** CSS 声明：`column-rule:purple;`。 */
  readonly purple = 'column-rule:purple;';
  /** CSS 声明：`column-rule:rebeccapurple;`。 */
  readonly rebeccapurple = 'column-rule:rebeccapurple;';
  /** CSS 声明：`column-rule:red;`。 */
  readonly red = 'column-rule:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule:revert;`。
   */
  readonly revert = 'column-rule:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule:revert-layer;`。
   */
  readonly revertLayer = 'column-rule:revert-layer;';
  /** CSS 声明：`column-rule:ridge;`。 */
  readonly ridge = 'column-rule:ridge;';
  /** CSS 声明：`column-rule:rosybrown;`。 */
  readonly rosybrown = 'column-rule:rosybrown;';
  /** CSS 声明：`column-rule:royalblue;`。 */
  readonly royalblue = 'column-rule:royalblue;';
  /** CSS 声明：`column-rule:saddlebrown;`。 */
  readonly saddlebrown = 'column-rule:saddlebrown;';
  /** CSS 声明：`column-rule:salmon;`。 */
  readonly salmon = 'column-rule:salmon;';
  /** CSS 声明：`column-rule:sandybrown;`。 */
  readonly sandybrown = 'column-rule:sandybrown;';
  /** CSS 声明：`column-rule:seagreen;`。 */
  readonly seagreen = 'column-rule:seagreen;';
  /** CSS 声明：`column-rule:seashell;`。 */
  readonly seashell = 'column-rule:seashell;';
  /** CSS 声明：`column-rule:sienna;`。 */
  readonly sienna = 'column-rule:sienna;';
  /** CSS 声明：`column-rule:silver;`。 */
  readonly silver = 'column-rule:silver;';
  /** CSS 声明：`column-rule:skyblue;`。 */
  readonly skyblue = 'column-rule:skyblue;';
  /** CSS 声明：`column-rule:slateblue;`。 */
  readonly slateblue = 'column-rule:slateblue;';
  /** CSS 声明：`column-rule:slategray;`。 */
  readonly slategray = 'column-rule:slategray;';
  /** CSS 声明：`column-rule:slategrey;`。 */
  readonly slategrey = 'column-rule:slategrey;';
  /** CSS 声明：`column-rule:snow;`。 */
  readonly snow = 'column-rule:snow;';
  /** CSS 声明：`column-rule:solid;`。 */
  readonly solid = 'column-rule:solid;';
  /** CSS 声明：`column-rule:springgreen;`。 */
  readonly springgreen = 'column-rule:springgreen;';
  /** CSS 声明：`column-rule:steelblue;`。 */
  readonly steelblue = 'column-rule:steelblue;';
  /** CSS 声明：`column-rule:tan;`。 */
  readonly tan = 'column-rule:tan;';
  /** CSS 声明：`column-rule:teal;`。 */
  readonly teal = 'column-rule:teal;';
  /** CSS 声明：`column-rule:thick;`。 */
  readonly thick = 'column-rule:thick;';
  /** CSS 声明：`column-rule:thin;`。 */
  readonly thin = 'column-rule:thin;';
  /** CSS 声明：`column-rule:thistle;`。 */
  readonly thistle = 'column-rule:thistle;';
  /** CSS 声明：`column-rule:tomato;`。 */
  readonly tomato = 'column-rule:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`column-rule:transparent;`。
   */
  readonly transparent = 'column-rule:transparent;';
  /** CSS 声明：`column-rule:turquoise;`。 */
  readonly turquoise = 'column-rule:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule:unset;`。
   */
  readonly unset = 'column-rule:unset;';
  /** CSS 声明：`column-rule:violet;`。 */
  readonly violet = 'column-rule:violet;';
  /** CSS 声明：`column-rule:wheat;`。 */
  readonly wheat = 'column-rule:wheat;';
  /** CSS 声明：`column-rule:white;`。 */
  readonly white = 'column-rule:white;';
  /** CSS 声明：`column-rule:whitesmoke;`。 */
  readonly whitesmoke = 'column-rule:whitesmoke;';
  /** CSS 声明：`column-rule:yellow;`。 */
  readonly yellow = 'column-rule:yellow;';
  /** CSS 声明：`column-rule:yellowgreen;`。 */
  readonly yellowgreen = 'column-rule:yellowgreen;';
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
 * 设置多栏分隔线的颜色。（column-rule-color）
 *
 * CSS 语法：`<color>`。
 *
 * CSS 初始值：`currentcolor`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
 */
export class ColumnRuleColorCss extends CssProperty {
  /** CSS 声明：`column-rule-color:AccentColor;`。 */
  readonly AccentColor = 'column-rule-color:AccentColor;';
  /** CSS 声明：`column-rule-color:AccentColorText;`。 */
  readonly AccentColorText = 'column-rule-color:AccentColorText;';
  /** CSS 声明：`column-rule-color:ActiveBorder;`。 */
  readonly ActiveBorder = 'column-rule-color:ActiveBorder;';
  /** CSS 声明：`column-rule-color:ActiveCaption;`。 */
  readonly ActiveCaption = 'column-rule-color:ActiveCaption;';
  /** CSS 声明：`column-rule-color:ActiveText;`。 */
  readonly ActiveText = 'column-rule-color:ActiveText;';
  /** CSS 声明：`column-rule-color:AppWorkspace;`。 */
  readonly AppWorkspace = 'column-rule-color:AppWorkspace;';
  /** CSS 声明：`column-rule-color:Background;`。 */
  readonly Background = 'column-rule-color:Background;';
  /** CSS 声明：`column-rule-color:ButtonBorder;`。 */
  readonly ButtonBorder = 'column-rule-color:ButtonBorder;';
  /** CSS 声明：`column-rule-color:ButtonFace;`。 */
  readonly ButtonFace = 'column-rule-color:ButtonFace;';
  /** CSS 声明：`column-rule-color:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'column-rule-color:ButtonHighlight;';
  /** CSS 声明：`column-rule-color:ButtonShadow;`。 */
  readonly ButtonShadow = 'column-rule-color:ButtonShadow;';
  /** CSS 声明：`column-rule-color:ButtonText;`。 */
  readonly ButtonText = 'column-rule-color:ButtonText;';
  /** CSS 声明：`column-rule-color:Canvas;`。 */
  readonly Canvas = 'column-rule-color:Canvas;';
  /** CSS 声明：`column-rule-color:CanvasText;`。 */
  readonly CanvasText = 'column-rule-color:CanvasText;';
  /** CSS 声明：`column-rule-color:CaptionText;`。 */
  readonly CaptionText = 'column-rule-color:CaptionText;';
  /** CSS 声明：`column-rule-color:Field;`。 */
  readonly Field = 'column-rule-color:Field;';
  /** CSS 声明：`column-rule-color:FieldText;`。 */
  readonly FieldText = 'column-rule-color:FieldText;';
  /** CSS 声明：`column-rule-color:GrayText;`。 */
  readonly GrayText = 'column-rule-color:GrayText;';
  /** CSS 声明：`column-rule-color:Highlight;`。 */
  readonly Highlight = 'column-rule-color:Highlight;';
  /** CSS 声明：`column-rule-color:HighlightText;`。 */
  readonly HighlightText = 'column-rule-color:HighlightText;';
  /** CSS 声明：`column-rule-color:InactiveBorder;`。 */
  readonly InactiveBorder = 'column-rule-color:InactiveBorder;';
  /** CSS 声明：`column-rule-color:InactiveCaption;`。 */
  readonly InactiveCaption = 'column-rule-color:InactiveCaption;';
  /** CSS 声明：`column-rule-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'column-rule-color:InactiveCaptionText;';
  /** CSS 声明：`column-rule-color:InfoBackground;`。 */
  readonly InfoBackground = 'column-rule-color:InfoBackground;';
  /** CSS 声明：`column-rule-color:InfoText;`。 */
  readonly InfoText = 'column-rule-color:InfoText;';
  /** CSS 声明：`column-rule-color:LinkText;`。 */
  readonly LinkText = 'column-rule-color:LinkText;';
  /** CSS 声明：`column-rule-color:Mark;`。 */
  readonly Mark = 'column-rule-color:Mark;';
  /** CSS 声明：`column-rule-color:MarkText;`。 */
  readonly MarkText = 'column-rule-color:MarkText;';
  /** CSS 声明：`column-rule-color:Menu;`。 */
  readonly Menu = 'column-rule-color:Menu;';
  /** CSS 声明：`column-rule-color:MenuText;`。 */
  readonly MenuText = 'column-rule-color:MenuText;';
  /** CSS 声明：`column-rule-color:Scrollbar;`。 */
  readonly Scrollbar = 'column-rule-color:Scrollbar;';
  /** CSS 声明：`column-rule-color:SelectedItem;`。 */
  readonly SelectedItem = 'column-rule-color:SelectedItem;';
  /** CSS 声明：`column-rule-color:SelectedItemText;`。 */
  readonly SelectedItemText = 'column-rule-color:SelectedItemText;';
  /** CSS 声明：`column-rule-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'column-rule-color:ThreeDDarkShadow;';
  /** CSS 声明：`column-rule-color:ThreeDFace;`。 */
  readonly ThreeDFace = 'column-rule-color:ThreeDFace;';
  /** CSS 声明：`column-rule-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'column-rule-color:ThreeDHighlight;';
  /** CSS 声明：`column-rule-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'column-rule-color:ThreeDLightShadow;';
  /** CSS 声明：`column-rule-color:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'column-rule-color:ThreeDShadow;';
  /** CSS 声明：`column-rule-color:VisitedText;`。 */
  readonly VisitedText = 'column-rule-color:VisitedText;';
  /** CSS 声明：`column-rule-color:Window;`。 */
  readonly Window = 'column-rule-color:Window;';
  /** CSS 声明：`column-rule-color:WindowFrame;`。 */
  readonly WindowFrame = 'column-rule-color:WindowFrame;';
  /** CSS 声明：`column-rule-color:WindowText;`。 */
  readonly WindowText = 'column-rule-color:WindowText;';
  /** CSS 声明：`column-rule-color:aliceblue;`。 */
  readonly aliceblue = 'column-rule-color:aliceblue;';
  /** CSS 声明：`column-rule-color:antiquewhite;`。 */
  readonly antiquewhite = 'column-rule-color:antiquewhite;';
  /** CSS 声明：`column-rule-color:aqua;`。 */
  readonly aqua = 'column-rule-color:aqua;';
  /** CSS 声明：`column-rule-color:aquamarine;`。 */
  readonly aquamarine = 'column-rule-color:aquamarine;';
  /** CSS 声明：`column-rule-color:azure;`。 */
  readonly azure = 'column-rule-color:azure;';
  /** CSS 声明：`column-rule-color:beige;`。 */
  readonly beige = 'column-rule-color:beige;';
  /** CSS 声明：`column-rule-color:bisque;`。 */
  readonly bisque = 'column-rule-color:bisque;';
  /** CSS 声明：`column-rule-color:black;`。 */
  readonly black = 'column-rule-color:black;';
  /** CSS 声明：`column-rule-color:blanchedalmond;`。 */
  readonly blanchedalmond = 'column-rule-color:blanchedalmond;';
  /** CSS 声明：`column-rule-color:blue;`。 */
  readonly blue = 'column-rule-color:blue;';
  /** CSS 声明：`column-rule-color:blueviolet;`。 */
  readonly blueviolet = 'column-rule-color:blueviolet;';
  /** CSS 声明：`column-rule-color:brown;`。 */
  readonly brown = 'column-rule-color:brown;';
  /** CSS 声明：`column-rule-color:burlywood;`。 */
  readonly burlywood = 'column-rule-color:burlywood;';
  /** CSS 声明：`column-rule-color:cadetblue;`。 */
  readonly cadetblue = 'column-rule-color:cadetblue;';
  /** CSS 声明：`column-rule-color:chartreuse;`。 */
  readonly chartreuse = 'column-rule-color:chartreuse;';
  /** CSS 声明：`column-rule-color:chocolate;`。 */
  readonly chocolate = 'column-rule-color:chocolate;';
  /** CSS 声明：`column-rule-color:coral;`。 */
  readonly coral = 'column-rule-color:coral;';
  /** CSS 声明：`column-rule-color:cornflowerblue;`。 */
  readonly cornflowerblue = 'column-rule-color:cornflowerblue;';
  /** CSS 声明：`column-rule-color:cornsilk;`。 */
  readonly cornsilk = 'column-rule-color:cornsilk;';
  /** CSS 声明：`column-rule-color:crimson;`。 */
  readonly crimson = 'column-rule-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`column-rule-color:currentColor;`。
   */
  readonly currentColor = 'column-rule-color:currentColor;';
  /** CSS 声明：`column-rule-color:cyan;`。 */
  readonly cyan = 'column-rule-color:cyan;';
  /** CSS 声明：`column-rule-color:darkblue;`。 */
  readonly darkblue = 'column-rule-color:darkblue;';
  /** CSS 声明：`column-rule-color:darkcyan;`。 */
  readonly darkcyan = 'column-rule-color:darkcyan;';
  /** CSS 声明：`column-rule-color:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'column-rule-color:darkgoldenrod;';
  /** CSS 声明：`column-rule-color:darkgray;`。 */
  readonly darkgray = 'column-rule-color:darkgray;';
  /** CSS 声明：`column-rule-color:darkgreen;`。 */
  readonly darkgreen = 'column-rule-color:darkgreen;';
  /** CSS 声明：`column-rule-color:darkgrey;`。 */
  readonly darkgrey = 'column-rule-color:darkgrey;';
  /** CSS 声明：`column-rule-color:darkkhaki;`。 */
  readonly darkkhaki = 'column-rule-color:darkkhaki;';
  /** CSS 声明：`column-rule-color:darkmagenta;`。 */
  readonly darkmagenta = 'column-rule-color:darkmagenta;';
  /** CSS 声明：`column-rule-color:darkolivegreen;`。 */
  readonly darkolivegreen = 'column-rule-color:darkolivegreen;';
  /** CSS 声明：`column-rule-color:darkorange;`。 */
  readonly darkorange = 'column-rule-color:darkorange;';
  /** CSS 声明：`column-rule-color:darkorchid;`。 */
  readonly darkorchid = 'column-rule-color:darkorchid;';
  /** CSS 声明：`column-rule-color:darkred;`。 */
  readonly darkred = 'column-rule-color:darkred;';
  /** CSS 声明：`column-rule-color:darksalmon;`。 */
  readonly darksalmon = 'column-rule-color:darksalmon;';
  /** CSS 声明：`column-rule-color:darkseagreen;`。 */
  readonly darkseagreen = 'column-rule-color:darkseagreen;';
  /** CSS 声明：`column-rule-color:darkslateblue;`。 */
  readonly darkslateblue = 'column-rule-color:darkslateblue;';
  /** CSS 声明：`column-rule-color:darkslategray;`。 */
  readonly darkslategray = 'column-rule-color:darkslategray;';
  /** CSS 声明：`column-rule-color:darkslategrey;`。 */
  readonly darkslategrey = 'column-rule-color:darkslategrey;';
  /** CSS 声明：`column-rule-color:darkturquoise;`。 */
  readonly darkturquoise = 'column-rule-color:darkturquoise;';
  /** CSS 声明：`column-rule-color:darkviolet;`。 */
  readonly darkviolet = 'column-rule-color:darkviolet;';
  /** CSS 声明：`column-rule-color:deeppink;`。 */
  readonly deeppink = 'column-rule-color:deeppink;';
  /** CSS 声明：`column-rule-color:deepskyblue;`。 */
  readonly deepskyblue = 'column-rule-color:deepskyblue;';
  /** CSS 声明：`column-rule-color:dimgray;`。 */
  readonly dimgray = 'column-rule-color:dimgray;';
  /** CSS 声明：`column-rule-color:dimgrey;`。 */
  readonly dimgrey = 'column-rule-color:dimgrey;';
  /** CSS 声明：`column-rule-color:dodgerblue;`。 */
  readonly dodgerblue = 'column-rule-color:dodgerblue;';
  /** CSS 声明：`column-rule-color:firebrick;`。 */
  readonly firebrick = 'column-rule-color:firebrick;';
  /** CSS 声明：`column-rule-color:floralwhite;`。 */
  readonly floralwhite = 'column-rule-color:floralwhite;';
  /** CSS 声明：`column-rule-color:forestgreen;`。 */
  readonly forestgreen = 'column-rule-color:forestgreen;';
  /** CSS 声明：`column-rule-color:fuchsia;`。 */
  readonly fuchsia = 'column-rule-color:fuchsia;';
  /** CSS 声明：`column-rule-color:gainsboro;`。 */
  readonly gainsboro = 'column-rule-color:gainsboro;';
  /** CSS 声明：`column-rule-color:ghostwhite;`。 */
  readonly ghostwhite = 'column-rule-color:ghostwhite;';
  /** CSS 声明：`column-rule-color:gold;`。 */
  readonly gold = 'column-rule-color:gold;';
  /** CSS 声明：`column-rule-color:goldenrod;`。 */
  readonly goldenrod = 'column-rule-color:goldenrod;';
  /** CSS 声明：`column-rule-color:gray;`。 */
  readonly gray = 'column-rule-color:gray;';
  /** CSS 声明：`column-rule-color:green;`。 */
  readonly green = 'column-rule-color:green;';
  /** CSS 声明：`column-rule-color:greenyellow;`。 */
  readonly greenyellow = 'column-rule-color:greenyellow;';
  /** CSS 声明：`column-rule-color:grey;`。 */
  readonly grey = 'column-rule-color:grey;';
  /** CSS 声明：`column-rule-color:honeydew;`。 */
  readonly honeydew = 'column-rule-color:honeydew;';
  /** CSS 声明：`column-rule-color:hotpink;`。 */
  readonly hotpink = 'column-rule-color:hotpink;';
  /** CSS 声明：`column-rule-color:indianred;`。 */
  readonly indianred = 'column-rule-color:indianred;';
  /** CSS 声明：`column-rule-color:indigo;`。 */
  readonly indigo = 'column-rule-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-color:inherit;`。
   */
  readonly inherit = 'column-rule-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-color:initial;`。
   */
  readonly initial = 'column-rule-color:initial;';
  /** CSS 声明：`column-rule-color:ivory;`。 */
  readonly ivory = 'column-rule-color:ivory;';
  /** CSS 声明：`column-rule-color:khaki;`。 */
  readonly khaki = 'column-rule-color:khaki;';
  /** CSS 声明：`column-rule-color:lavender;`。 */
  readonly lavender = 'column-rule-color:lavender;';
  /** CSS 声明：`column-rule-color:lavenderblush;`。 */
  readonly lavenderblush = 'column-rule-color:lavenderblush;';
  /** CSS 声明：`column-rule-color:lawngreen;`。 */
  readonly lawngreen = 'column-rule-color:lawngreen;';
  /** CSS 声明：`column-rule-color:lemonchiffon;`。 */
  readonly lemonchiffon = 'column-rule-color:lemonchiffon;';
  /** CSS 声明：`column-rule-color:lightblue;`。 */
  readonly lightblue = 'column-rule-color:lightblue;';
  /** CSS 声明：`column-rule-color:lightcoral;`。 */
  readonly lightcoral = 'column-rule-color:lightcoral;';
  /** CSS 声明：`column-rule-color:lightcyan;`。 */
  readonly lightcyan = 'column-rule-color:lightcyan;';
  /** CSS 声明：`column-rule-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'column-rule-color:lightgoldenrodyellow;';
  /** CSS 声明：`column-rule-color:lightgray;`。 */
  readonly lightgray = 'column-rule-color:lightgray;';
  /** CSS 声明：`column-rule-color:lightgreen;`。 */
  readonly lightgreen = 'column-rule-color:lightgreen;';
  /** CSS 声明：`column-rule-color:lightgrey;`。 */
  readonly lightgrey = 'column-rule-color:lightgrey;';
  /** CSS 声明：`column-rule-color:lightpink;`。 */
  readonly lightpink = 'column-rule-color:lightpink;';
  /** CSS 声明：`column-rule-color:lightsalmon;`。 */
  readonly lightsalmon = 'column-rule-color:lightsalmon;';
  /** CSS 声明：`column-rule-color:lightseagreen;`。 */
  readonly lightseagreen = 'column-rule-color:lightseagreen;';
  /** CSS 声明：`column-rule-color:lightskyblue;`。 */
  readonly lightskyblue = 'column-rule-color:lightskyblue;';
  /** CSS 声明：`column-rule-color:lightslategray;`。 */
  readonly lightslategray = 'column-rule-color:lightslategray;';
  /** CSS 声明：`column-rule-color:lightslategrey;`。 */
  readonly lightslategrey = 'column-rule-color:lightslategrey;';
  /** CSS 声明：`column-rule-color:lightsteelblue;`。 */
  readonly lightsteelblue = 'column-rule-color:lightsteelblue;';
  /** CSS 声明：`column-rule-color:lightyellow;`。 */
  readonly lightyellow = 'column-rule-color:lightyellow;';
  /** CSS 声明：`column-rule-color:lime;`。 */
  readonly lime = 'column-rule-color:lime;';
  /** CSS 声明：`column-rule-color:limegreen;`。 */
  readonly limegreen = 'column-rule-color:limegreen;';
  /** CSS 声明：`column-rule-color:linen;`。 */
  readonly linen = 'column-rule-color:linen;';
  /** CSS 声明：`column-rule-color:magenta;`。 */
  readonly magenta = 'column-rule-color:magenta;';
  /** CSS 声明：`column-rule-color:maroon;`。 */
  readonly maroon = 'column-rule-color:maroon;';
  /** CSS 声明：`column-rule-color:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'column-rule-color:mediumaquamarine;';
  /** CSS 声明：`column-rule-color:mediumblue;`。 */
  readonly mediumblue = 'column-rule-color:mediumblue;';
  /** CSS 声明：`column-rule-color:mediumorchid;`。 */
  readonly mediumorchid = 'column-rule-color:mediumorchid;';
  /** CSS 声明：`column-rule-color:mediumpurple;`。 */
  readonly mediumpurple = 'column-rule-color:mediumpurple;';
  /** CSS 声明：`column-rule-color:mediumseagreen;`。 */
  readonly mediumseagreen = 'column-rule-color:mediumseagreen;';
  /** CSS 声明：`column-rule-color:mediumslateblue;`。 */
  readonly mediumslateblue = 'column-rule-color:mediumslateblue;';
  /** CSS 声明：`column-rule-color:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'column-rule-color:mediumspringgreen;';
  /** CSS 声明：`column-rule-color:mediumturquoise;`。 */
  readonly mediumturquoise = 'column-rule-color:mediumturquoise;';
  /** CSS 声明：`column-rule-color:mediumvioletred;`。 */
  readonly mediumvioletred = 'column-rule-color:mediumvioletred;';
  /** CSS 声明：`column-rule-color:midnightblue;`。 */
  readonly midnightblue = 'column-rule-color:midnightblue;';
  /** CSS 声明：`column-rule-color:mintcream;`。 */
  readonly mintcream = 'column-rule-color:mintcream;';
  /** CSS 声明：`column-rule-color:mistyrose;`。 */
  readonly mistyrose = 'column-rule-color:mistyrose;';
  /** CSS 声明：`column-rule-color:moccasin;`。 */
  readonly moccasin = 'column-rule-color:moccasin;';
  /** CSS 声明：`column-rule-color:navajowhite;`。 */
  readonly navajowhite = 'column-rule-color:navajowhite;';
  /** CSS 声明：`column-rule-color:navy;`。 */
  readonly navy = 'column-rule-color:navy;';
  /** CSS 声明：`column-rule-color:oldlace;`。 */
  readonly oldlace = 'column-rule-color:oldlace;';
  /** CSS 声明：`column-rule-color:olive;`。 */
  readonly olive = 'column-rule-color:olive;';
  /** CSS 声明：`column-rule-color:olivedrab;`。 */
  readonly olivedrab = 'column-rule-color:olivedrab;';
  /** CSS 声明：`column-rule-color:orange;`。 */
  readonly orange = 'column-rule-color:orange;';
  /** CSS 声明：`column-rule-color:orangered;`。 */
  readonly orangered = 'column-rule-color:orangered;';
  /** CSS 声明：`column-rule-color:orchid;`。 */
  readonly orchid = 'column-rule-color:orchid;';
  /** CSS 声明：`column-rule-color:palegoldenrod;`。 */
  readonly palegoldenrod = 'column-rule-color:palegoldenrod;';
  /** CSS 声明：`column-rule-color:palegreen;`。 */
  readonly palegreen = 'column-rule-color:palegreen;';
  /** CSS 声明：`column-rule-color:paleturquoise;`。 */
  readonly paleturquoise = 'column-rule-color:paleturquoise;';
  /** CSS 声明：`column-rule-color:palevioletred;`。 */
  readonly palevioletred = 'column-rule-color:palevioletred;';
  /** CSS 声明：`column-rule-color:papayawhip;`。 */
  readonly papayawhip = 'column-rule-color:papayawhip;';
  /** CSS 声明：`column-rule-color:peachpuff;`。 */
  readonly peachpuff = 'column-rule-color:peachpuff;';
  /** CSS 声明：`column-rule-color:peru;`。 */
  readonly peru = 'column-rule-color:peru;';
  /** CSS 声明：`column-rule-color:pink;`。 */
  readonly pink = 'column-rule-color:pink;';
  /** CSS 声明：`column-rule-color:plum;`。 */
  readonly plum = 'column-rule-color:plum;';
  /** CSS 声明：`column-rule-color:powderblue;`。 */
  readonly powderblue = 'column-rule-color:powderblue;';
  /** CSS 声明：`column-rule-color:purple;`。 */
  readonly purple = 'column-rule-color:purple;';
  /** CSS 声明：`column-rule-color:rebeccapurple;`。 */
  readonly rebeccapurple = 'column-rule-color:rebeccapurple;';
  /** CSS 声明：`column-rule-color:red;`。 */
  readonly red = 'column-rule-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-color:revert;`。
   */
  readonly revert = 'column-rule-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-color:revert-layer;`。
   */
  readonly revertLayer = 'column-rule-color:revert-layer;';
  /** CSS 声明：`column-rule-color:rosybrown;`。 */
  readonly rosybrown = 'column-rule-color:rosybrown;';
  /** CSS 声明：`column-rule-color:royalblue;`。 */
  readonly royalblue = 'column-rule-color:royalblue;';
  /** CSS 声明：`column-rule-color:saddlebrown;`。 */
  readonly saddlebrown = 'column-rule-color:saddlebrown;';
  /** CSS 声明：`column-rule-color:salmon;`。 */
  readonly salmon = 'column-rule-color:salmon;';
  /** CSS 声明：`column-rule-color:sandybrown;`。 */
  readonly sandybrown = 'column-rule-color:sandybrown;';
  /** CSS 声明：`column-rule-color:seagreen;`。 */
  readonly seagreen = 'column-rule-color:seagreen;';
  /** CSS 声明：`column-rule-color:seashell;`。 */
  readonly seashell = 'column-rule-color:seashell;';
  /** CSS 声明：`column-rule-color:sienna;`。 */
  readonly sienna = 'column-rule-color:sienna;';
  /** CSS 声明：`column-rule-color:silver;`。 */
  readonly silver = 'column-rule-color:silver;';
  /** CSS 声明：`column-rule-color:skyblue;`。 */
  readonly skyblue = 'column-rule-color:skyblue;';
  /** CSS 声明：`column-rule-color:slateblue;`。 */
  readonly slateblue = 'column-rule-color:slateblue;';
  /** CSS 声明：`column-rule-color:slategray;`。 */
  readonly slategray = 'column-rule-color:slategray;';
  /** CSS 声明：`column-rule-color:slategrey;`。 */
  readonly slategrey = 'column-rule-color:slategrey;';
  /** CSS 声明：`column-rule-color:snow;`。 */
  readonly snow = 'column-rule-color:snow;';
  /** CSS 声明：`column-rule-color:springgreen;`。 */
  readonly springgreen = 'column-rule-color:springgreen;';
  /** CSS 声明：`column-rule-color:steelblue;`。 */
  readonly steelblue = 'column-rule-color:steelblue;';
  /** CSS 声明：`column-rule-color:tan;`。 */
  readonly tan = 'column-rule-color:tan;';
  /** CSS 声明：`column-rule-color:teal;`。 */
  readonly teal = 'column-rule-color:teal;';
  /** CSS 声明：`column-rule-color:thistle;`。 */
  readonly thistle = 'column-rule-color:thistle;';
  /** CSS 声明：`column-rule-color:tomato;`。 */
  readonly tomato = 'column-rule-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`column-rule-color:transparent;`。
   */
  readonly transparent = 'column-rule-color:transparent;';
  /** CSS 声明：`column-rule-color:turquoise;`。 */
  readonly turquoise = 'column-rule-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-color:unset;`。
   */
  readonly unset = 'column-rule-color:unset;';
  /** CSS 声明：`column-rule-color:violet;`。 */
  readonly violet = 'column-rule-color:violet;';
  /** CSS 声明：`column-rule-color:wheat;`。 */
  readonly wheat = 'column-rule-color:wheat;';
  /** CSS 声明：`column-rule-color:white;`。 */
  readonly white = 'column-rule-color:white;';
  /** CSS 声明：`column-rule-color:whitesmoke;`。 */
  readonly whitesmoke = 'column-rule-color:whitesmoke;';
  /** CSS 声明：`column-rule-color:yellow;`。 */
  readonly yellow = 'column-rule-color:yellow;';
  /** CSS 声明：`column-rule-color:yellowgreen;`。 */
  readonly yellowgreen = 'column-rule-color:yellowgreen;';
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
 * 设置多栏分隔线的线型。（column-rule-style）
 *
 * CSS 语法：`<'border-style'>`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
 */
export class ColumnRuleStyleCss extends CssProperty {
  /** CSS 声明：`column-rule-style:dashed;`。 */
  readonly dashed = 'column-rule-style:dashed;';
  /** CSS 声明：`column-rule-style:dotted;`。 */
  readonly dotted = 'column-rule-style:dotted;';
  /** CSS 声明：`column-rule-style:double;`。 */
  readonly double = 'column-rule-style:double;';
  /** CSS 声明：`column-rule-style:groove;`。 */
  readonly groove = 'column-rule-style:groove;';
  /** CSS 声明：`column-rule-style:hidden;`。 */
  readonly hidden = 'column-rule-style:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-rule-style:inherit;`。
   */
  readonly inherit = 'column-rule-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-style:initial;`。
   */
  readonly initial = 'column-rule-style:initial;';
  /** CSS 声明：`column-rule-style:inset;`。 */
  readonly inset = 'column-rule-style:inset;';
  /** CSS 声明：`column-rule-style:none;`。 */
  readonly none = 'column-rule-style:none;';
  /** CSS 声明：`column-rule-style:outset;`。 */
  readonly outset = 'column-rule-style:outset;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-style:revert;`。
   */
  readonly revert = 'column-rule-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-style:revert-layer;`。
   */
  readonly revertLayer = 'column-rule-style:revert-layer;';
  /** CSS 声明：`column-rule-style:ridge;`。 */
  readonly ridge = 'column-rule-style:ridge;';
  /** CSS 声明：`column-rule-style:solid;`。 */
  readonly solid = 'column-rule-style:solid;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-style:unset;`。
   */
  readonly unset = 'column-rule-style:unset;';
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
 * 设置多栏分隔线的宽度。（column-rule-width）
 *
 * CSS 语法：`<'border-width'>`。
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
  readonly inherit = 'column-rule-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-rule-width:initial;`。
   */
  readonly initial = 'column-rule-width:initial;';
  /** CSS 声明：`column-rule-width:medium;`。 */
  readonly medium = 'column-rule-width:medium;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-rule-width:revert;`。
   */
  readonly revert = 'column-rule-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-rule-width:revert-layer;`。
   */
  readonly revertLayer = 'column-rule-width:revert-layer;';
  /** CSS 声明：`column-rule-width:thick;`。 */
  readonly thick = 'column-rule-width:thick;';
  /** CSS 声明：`column-rule-width:thin;`。 */
  readonly thin = 'column-rule-width:thin;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-rule-width:unset;`。
   */
  readonly unset = 'column-rule-width:unset;';
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
 * 设置多栏布局中的元素是否跨越所有栏。（column-span）
 *
 * CSS 语法：`none | all`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
 */
export class ColumnSpanCss extends CssProperty {
  /** CSS 声明：`column-span:all;`。 */
  readonly all = 'column-span:all;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-span:inherit;`。
   */
  readonly inherit = 'column-span:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-span:initial;`。
   */
  readonly initial = 'column-span:initial;';
  /** CSS 声明：`column-span:none;`。 */
  readonly none = 'column-span:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-span:revert;`。
   */
  readonly revert = 'column-span:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-span:revert-layer;`。
   */
  readonly revertLayer = 'column-span:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-span:unset;`。
   */
  readonly unset = 'column-span:unset;';
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
 * 设置多栏布局的首选栏宽，实际栏宽由容器空间决定。（column-width）
 *
 * CSS 语法：`<length> | auto`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
 */
export class ColumnWidthCss extends LengthCssProperty {
  /** CSS 声明：`column-width:auto;`。 */
  readonly auto = 'column-width:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`column-width:inherit;`。
   */
  readonly inherit = 'column-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`column-width:initial;`。
   */
  readonly initial = 'column-width:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`column-width:revert;`。
   */
  readonly revert = 'column-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`column-width:revert-layer;`。
   */
  readonly revertLayer = 'column-width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`column-width:unset;`。
   */
  readonly unset = 'column-width:unset;';
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
 * 同时设置多栏布局的首选栏宽和目标栏数。（columns）
 *
 * CSS 语法：`<'column-width'> || <'column-count'>`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
 */
export class ColumnsCss extends LengthCssProperty {
  /** CSS 声明：`columns:auto;`。 */
  readonly auto = 'columns:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`columns:inherit;`。
   */
  readonly inherit = 'columns:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`columns:initial;`。
   */
  readonly initial = 'columns:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`columns:revert;`。
   */
  readonly revert = 'columns:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`columns:revert-layer;`。
   */
  readonly revertLayer = 'columns:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`columns:unset;`。
   */
  readonly unset = 'columns:unset;';
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
 * 声明尺寸、布局、绘制或样式隔离，限制子树对外部的影响。（contain）
 *
 * CSS 语法：`none | strict | content | [ [ size || inline-size ] || layout || style || paint ]`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
 */
export class ContainCss extends CssProperty {
  /**
   * 组合 layout、style 和 paint 隔离，不包含 size 隔离。
   *
   * CSS 声明：`contain:content;`。
   */
  readonly content = 'contain:content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain:inherit;`。
   */
  readonly inherit = 'contain:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain:initial;`。
   */
  readonly initial = 'contain:initial;';
  /** CSS 声明：`contain:inline-size;`。 */
  readonly inlineSize = 'contain:inline-size;';
  /** CSS 声明：`contain:layout;`。 */
  readonly layout = 'contain:layout;';
  /** CSS 声明：`contain:none;`。 */
  readonly none = 'contain:none;';
  /**
   * 将后代绘制限制在隔离边界内。
   *
   * CSS 声明：`contain:paint;`。
   */
  readonly paint = 'contain:paint;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain:revert;`。
   */
  readonly revert = 'contain:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain:revert-layer;`。
   */
  readonly revertLayer = 'contain:revert-layer;';
  /**
   * 计算盒子尺寸时不依赖后代内容，通常需要显式或替代内部尺寸。
   *
   * CSS 声明：`contain:size;`。
   */
  readonly size = 'contain:size;';
  /**
   * 组合 size、layout、style 和 paint 隔离；尺寸隔离可能影响自动尺寸。
   *
   * CSS 声明：`contain:strict;`。
   */
  readonly strict = 'contain:strict;';
  /**
   * 隔离计数器等特定样式副作用，不会阻止普通 CSS 继承或选择器匹配。
   *
   * CSS 声明：`contain:style;`。
   */
  readonly style = 'contain:style;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain:unset;`。
   */
  readonly unset = 'contain:unset;';
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
 * 设置块轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。（contain-intrinsic-block-size）
 *
 * CSS 语法：`auto? [ none | <length> ]`。
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
  readonly inherit = 'contain-intrinsic-block-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-block-size:initial;`。
   */
  readonly initial = 'contain-intrinsic-block-size:initial;';
  /** CSS 声明：`contain-intrinsic-block-size:none;`。 */
  readonly none = 'contain-intrinsic-block-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-block-size:revert;`。
   */
  readonly revert = 'contain-intrinsic-block-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-block-size:revert-layer;`。
   */
  readonly revertLayer = 'contain-intrinsic-block-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-block-size:unset;`。
   */
  readonly unset = 'contain-intrinsic-block-size:unset;';
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
 * 设置高度隔离或跳过内容渲染时使用的替代内部高度。（contain-intrinsic-height）
 *
 * CSS 语法：`auto? [ none | <length> ]`。
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
  readonly inherit = 'contain-intrinsic-height:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-height:initial;`。
   */
  readonly initial = 'contain-intrinsic-height:initial;';
  /** CSS 声明：`contain-intrinsic-height:none;`。 */
  readonly none = 'contain-intrinsic-height:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-height:revert;`。
   */
  readonly revert = 'contain-intrinsic-height:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-height:revert-layer;`。
   */
  readonly revertLayer = 'contain-intrinsic-height:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-height:unset;`。
   */
  readonly unset = 'contain-intrinsic-height:unset;';
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
 * 设置行内轴尺寸隔离或跳过内容渲染时使用的替代内部尺寸。（contain-intrinsic-inline-size）
 *
 * CSS 语法：`auto? [ none | <length> ]`。
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
  readonly inherit = 'contain-intrinsic-inline-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-inline-size:initial;`。
   */
  readonly initial = 'contain-intrinsic-inline-size:initial;';
  /** CSS 声明：`contain-intrinsic-inline-size:none;`。 */
  readonly none = 'contain-intrinsic-inline-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-inline-size:revert;`。
   */
  readonly revert = 'contain-intrinsic-inline-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-inline-size:revert-layer;`。
   */
  readonly revertLayer = 'contain-intrinsic-inline-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-inline-size:unset;`。
   */
  readonly unset = 'contain-intrinsic-inline-size:unset;';
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
 * 集中设置尺寸隔离时使用的替代内部宽高。（contain-intrinsic-size）
 *
 * CSS 语法：`[ auto? [ none | <length> ] ]{1,2}`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
 */
export class ContainIntrinsicSizeCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`contain-intrinsic-size:inherit;`。
   */
  readonly inherit = 'contain-intrinsic-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-size:initial;`。
   */
  readonly initial = 'contain-intrinsic-size:initial;';
  /** CSS 声明：`contain-intrinsic-size:none;`。 */
  readonly none = 'contain-intrinsic-size:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-size:revert;`。
   */
  readonly revert = 'contain-intrinsic-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-size:revert-layer;`。
   */
  readonly revertLayer = 'contain-intrinsic-size:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-size:unset;`。
   */
  readonly unset = 'contain-intrinsic-size:unset;';
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
 * 设置宽度隔离或跳过内容渲染时使用的替代内部宽度。（contain-intrinsic-width）
 *
 * CSS 语法：`auto? [ none | <length> ]`。
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
  readonly inherit = 'contain-intrinsic-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`contain-intrinsic-width:initial;`。
   */
  readonly initial = 'contain-intrinsic-width:initial;';
  /** CSS 声明：`contain-intrinsic-width:none;`。 */
  readonly none = 'contain-intrinsic-width:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`contain-intrinsic-width:revert;`。
   */
  readonly revert = 'contain-intrinsic-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`contain-intrinsic-width:revert-layer;`。
   */
  readonly revertLayer = 'contain-intrinsic-width:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`contain-intrinsic-width:unset;`。
   */
  readonly unset = 'contain-intrinsic-width:unset;';
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
 * 同时声明查询容器的名称和类型。（container）
 *
 * CSS 语法：`<'container-name'> [ / <'container-type'> ]?`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
 */
export class ContainerCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container:inherit;`。
   */
  readonly inherit = 'container:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container:initial;`。
   */
  readonly initial = 'container:initial;';
  /** CSS 声明：`container:none;`。 */
  readonly none = 'container:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container:revert;`。
   */
  readonly revert = 'container:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container:revert-layer;`。
   */
  readonly revertLayer = 'container:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container:unset;`。
   */
  readonly unset = 'container:unset;';
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
 * 为查询容器命名，供 @container 条件规则选择。（container-name）
 *
 * CSS 语法：`none | <custom-ident>+`。
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
  readonly inherit = 'container-name:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container-name:initial;`。
   */
  readonly initial = 'container-name:initial;';
  /** CSS 声明：`container-name:none;`。 */
  readonly none = 'container-name:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container-name:revert;`。
   */
  readonly revert = 'container-name:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container-name:revert-layer;`。
   */
  readonly revertLayer = 'container-name:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container-name:unset;`。
   */
  readonly unset = 'container-name:unset;';
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
 * 建立指定类型的查询容器，并施加所需的隔离行为。（container-type）
 *
 * CSS 语法：`normal | [ [ size | inline-size ] || scroll-state ]`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
 */
export class ContainerTypeCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`container-type:inherit;`。
   */
  readonly inherit = 'container-type:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`container-type:initial;`。
   */
  readonly initial = 'container-type:initial;';
  /**
   * 建立行内轴尺寸查询容器，不同时隔离块轴尺寸。
   *
   * CSS 声明：`container-type:inline-size;`。
   */
  readonly inlineSize = 'container-type:inline-size;';
  /**
   * 不建立尺寸查询容器；仍可用于支持的样式查询。
   *
   * CSS 声明：`container-type:normal;`。
   */
  readonly normal = 'container-type:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`container-type:revert;`。
   */
  readonly revert = 'container-type:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`container-type:revert-layer;`。
   */
  readonly revertLayer = 'container-type:revert-layer;';
  /** CSS 声明：`container-type:scroll-state;`。 */
  readonly scrollState = 'container-type:scroll-state;';
  /**
   * 建立两个轴的尺寸查询容器，内容不再直接决定其隔离尺寸。
   *
   * CSS 声明：`container-type:size;`。
   */
  readonly size = 'container-type:size;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`container-type:unset;`。
   */
  readonly unset = 'container-type:unset;';
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
 * 设置生成内容、替换内容或伪元素的内容。（content）
 *
 * CSS 语法：`normal | none | [ <content-replacement> | <content-list> ] [ / [ <string> | <counter> | <attr()> ]+ ]?`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
 */
export class ContentCss extends CssProperty {
  /** CSS 声明：`content:close-quote;`。 */
  readonly closeQuote = 'content:close-quote;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`content:inherit;`。
   */
  readonly inherit = 'content:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`content:initial;`。
   */
  readonly initial = 'content:initial;';
  /** CSS 声明：`content:no-close-quote;`。 */
  readonly noCloseQuote = 'content:no-close-quote;';
  /** CSS 声明：`content:no-open-quote;`。 */
  readonly noOpenQuote = 'content:no-open-quote;';
  /** CSS 声明：`content:none;`。 */
  readonly none = 'content:none;';
  /** CSS 声明：`content:normal;`。 */
  readonly normal = 'content:normal;';
  /** CSS 声明：`content:open-quote;`。 */
  readonly openQuote = 'content:open-quote;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`content:revert;`。
   */
  readonly revert = 'content:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`content:revert-layer;`。
   */
  readonly revertLayer = 'content:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`content:unset;`。
   */
  readonly unset = 'content:unset;';
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
 * 控制是否渲染元素内容，并允许浏览器跳过暂时不可见的子树。（content-visibility）
 *
 * CSS 语法：`visible | auto | hidden`。
 *
 * CSS 初始值：`visible`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
 */
export class ContentVisibilityCss extends CssProperty {
  /**
   * 允许浏览器跳过与用户暂不相关的内容渲染，仍需维护布局和可访问性语义。
   *
   * CSS 声明：`content-visibility:auto;`。
   */
  readonly auto = 'content-visibility:auto;';
  /**
   * 跳过内容渲染，行为不同于只隐藏绘制的 visibility:hidden。
   *
   * CSS 声明：`content-visibility:hidden;`。
   */
  readonly hidden = 'content-visibility:hidden;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`content-visibility:inherit;`。
   */
  readonly inherit = 'content-visibility:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`content-visibility:initial;`。
   */
  readonly initial = 'content-visibility:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`content-visibility:revert;`。
   */
  readonly revert = 'content-visibility:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`content-visibility:revert-layer;`。
   */
  readonly revertLayer = 'content-visibility:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`content-visibility:unset;`。
   */
  readonly unset = 'content-visibility:unset;';
  /**
   * 正常渲染内容，不由此属性跳过子树。
   *
   * CSS 声明：`content-visibility:visible;`。
   */
  readonly visible = 'content-visibility:visible;';
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
 * 增加或减少指定 CSS 计数器的值。（counter-increment）
 *
 * CSS 语法：`[ <counter-name> <integer>? ]+ | none`。
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
  readonly inherit = 'counter-increment:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-increment:initial;`。
   */
  readonly initial = 'counter-increment:initial;';
  /** CSS 声明：`counter-increment:none;`。 */
  readonly none = 'counter-increment:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-increment:revert;`。
   */
  readonly revert = 'counter-increment:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-increment:revert-layer;`。
   */
  readonly revertLayer = 'counter-increment:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-increment:unset;`。
   */
  readonly unset = 'counter-increment:unset;';
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
 * 创建或重置 CSS 计数器。（counter-reset）
 *
 * CSS 语法：`[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`。
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
  readonly inherit = 'counter-reset:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-reset:initial;`。
   */
  readonly initial = 'counter-reset:initial;';
  /** CSS 声明：`counter-reset:none;`。 */
  readonly none = 'counter-reset:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-reset:revert;`。
   */
  readonly revert = 'counter-reset:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-reset:revert-layer;`。
   */
  readonly revertLayer = 'counter-reset:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-reset:unset;`。
   */
  readonly unset = 'counter-reset:unset;';
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
 * 设置已有 CSS 计数器的值，必要时创建计数器。（counter-set）
 *
 * CSS 语法：`[ <counter-name> <integer>? ]+ | none`。
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
  readonly inherit = 'counter-set:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`counter-set:initial;`。
   */
  readonly initial = 'counter-set:initial;';
  /** CSS 声明：`counter-set:none;`。 */
  readonly none = 'counter-set:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`counter-set:revert;`。
   */
  readonly revert = 'counter-set:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`counter-set:revert-layer;`。
   */
  readonly revertLayer = 'counter-set:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`counter-set:unset;`。
   */
  readonly unset = 'counter-set:unset;';
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
 * 设置指针位于元素上方时显示的光标。（cursor）
 *
 * CSS 语法：`[ [ <url> [ <x> <y> ]? , ]* <cursor-predefined> ]`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
 */
export class CursorCss extends CssProperty {
  /** CSS 声明：`cursor:alias;`。 */
  readonly alias = 'cursor:alias;';
  /** CSS 声明：`cursor:all-scroll;`。 */
  readonly allScroll = 'cursor:all-scroll;';
  /** CSS 声明：`cursor:auto;`。 */
  readonly auto = 'cursor:auto;';
  /** CSS 声明：`cursor:cell;`。 */
  readonly cell = 'cursor:cell;';
  /** CSS 声明：`cursor:col-resize;`。 */
  readonly colResize = 'cursor:col-resize;';
  /** CSS 声明：`cursor:context-menu;`。 */
  readonly contextMenu = 'cursor:context-menu;';
  /** CSS 声明：`cursor:copy;`。 */
  readonly copy = 'cursor:copy;';
  /** CSS 声明：`cursor:crosshair;`。 */
  readonly crosshair = 'cursor:crosshair;';
  /** CSS 声明：`cursor:default;`。 */
  readonly default = 'cursor:default;';
  /** CSS 声明：`cursor:e-resize;`。 */
  readonly eResize = 'cursor:e-resize;';
  /** CSS 声明：`cursor:ew-resize;`。 */
  readonly ewResize = 'cursor:ew-resize;';
  /** CSS 声明：`cursor:grab;`。 */
  readonly grab = 'cursor:grab;';
  /** CSS 声明：`cursor:grabbing;`。 */
  readonly grabbing = 'cursor:grabbing;';
  /** CSS 声明：`cursor:help;`。 */
  readonly help = 'cursor:help;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`cursor:inherit;`。
   */
  readonly inherit = 'cursor:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cursor:initial;`。
   */
  readonly initial = 'cursor:initial;';
  /** CSS 声明：`cursor:move;`。 */
  readonly move = 'cursor:move;';
  /** CSS 声明：`cursor:n-resize;`。 */
  readonly nResize = 'cursor:n-resize;';
  /** CSS 声明：`cursor:ne-resize;`。 */
  readonly neResize = 'cursor:ne-resize;';
  /** CSS 声明：`cursor:nesw-resize;`。 */
  readonly neswResize = 'cursor:nesw-resize;';
  /** CSS 声明：`cursor:no-drop;`。 */
  readonly noDrop = 'cursor:no-drop;';
  /** CSS 声明：`cursor:none;`。 */
  readonly none = 'cursor:none;';
  /** CSS 声明：`cursor:not-allowed;`。 */
  readonly notAllowed = 'cursor:not-allowed;';
  /** CSS 声明：`cursor:ns-resize;`。 */
  readonly nsResize = 'cursor:ns-resize;';
  /** CSS 声明：`cursor:nw-resize;`。 */
  readonly nwResize = 'cursor:nw-resize;';
  /** CSS 声明：`cursor:nwse-resize;`。 */
  readonly nwseResize = 'cursor:nwse-resize;';
  /** CSS 声明：`cursor:pointer;`。 */
  readonly pointer = 'cursor:pointer;';
  /** CSS 声明：`cursor:progress;`。 */
  readonly progress = 'cursor:progress;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cursor:revert;`。
   */
  readonly revert = 'cursor:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cursor:revert-layer;`。
   */
  readonly revertLayer = 'cursor:revert-layer;';
  /** CSS 声明：`cursor:row-resize;`。 */
  readonly rowResize = 'cursor:row-resize;';
  /** CSS 声明：`cursor:s-resize;`。 */
  readonly sResize = 'cursor:s-resize;';
  /** CSS 声明：`cursor:se-resize;`。 */
  readonly seResize = 'cursor:se-resize;';
  /** CSS 声明：`cursor:sw-resize;`。 */
  readonly swResize = 'cursor:sw-resize;';
  /** CSS 声明：`cursor:text;`。 */
  readonly text = 'cursor:text;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cursor:unset;`。
   */
  readonly unset = 'cursor:unset;';
  /** CSS 声明：`cursor:vertical-text;`。 */
  readonly verticalText = 'cursor:vertical-text;';
  /** CSS 声明：`cursor:w-resize;`。 */
  readonly wResize = 'cursor:w-resize;';
  /** CSS 声明：`cursor:wait;`。 */
  readonly wait = 'cursor:wait;';
  /** CSS 声明：`cursor:zoom-in;`。 */
  readonly zoomIn = 'cursor:zoom-in;';
  /** CSS 声明：`cursor:zoom-out;`。 */
  readonly zoomOut = 'cursor:zoom-out;';
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
 * 设置 SVG 圆或椭圆中心的横坐标。（cx）
 *
 * CSS 语法：`<length> | <percentage>`。
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
  readonly inherit = 'cx:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cx:initial;`。
   */
  readonly initial = 'cx:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cx:revert;`。
   */
  readonly revert = 'cx:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cx:revert-layer;`。
   */
  readonly revertLayer = 'cx:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cx:unset;`。
   */
  readonly unset = 'cx:unset;';
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
 * 设置 SVG 圆或椭圆中心的纵坐标。（cy）
 *
 * CSS 语法：`<length> | <percentage>`。
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
  readonly inherit = 'cy:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`cy:initial;`。
   */
  readonly initial = 'cy:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`cy:revert;`。
   */
  readonly revert = 'cy:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`cy:revert-layer;`。
   */
  readonly revertLayer = 'cy:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`cy:unset;`。
   */
  readonly unset = 'cy:unset;';
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
 * 设置 SVG path 元素的路径数据。（d）
 *
 * CSS 语法：`none | path(<string>)`。
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
  readonly inherit = 'd:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`d:initial;`。
   */
  readonly initial = 'd:initial;';
  /** CSS 声明：`d:none;`。 */
  readonly none = 'd:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`d:revert;`。
   */
  readonly revert = 'd:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`d:revert-layer;`。
   */
  readonly revertLayer = 'd:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`d:unset;`。
   */
  readonly unset = 'd:unset;';
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
 * 设置文本基本方向，参与双向文本及部分布局计算。（direction）
 *
 * CSS 语法：`ltr | rtl`。
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
  readonly inherit = 'direction:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`direction:initial;`。
   */
  readonly initial = 'direction:initial;';
  /** CSS 声明：`direction:ltr;`。 */
  readonly ltr = 'direction:ltr;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`direction:revert;`。
   */
  readonly revert = 'direction:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`direction:revert-layer;`。
   */
  readonly revertLayer = 'direction:revert-layer;';
  /** CSS 声明：`direction:rtl;`。 */
  readonly rtl = 'direction:rtl;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`direction:unset;`。
   */
  readonly unset = 'direction:unset;';
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
export class DisplayCss extends CssProperty {
  /**
   * 生成块级盒子，内部默认采用普通流布局。
   *
   * CSS 声明：`display:block;`。
   */
  readonly block = 'display:block;';
  /**
   * 通常不生成元素自身的主盒子，让子盒子参与外层布局；背景、边框等失去承载盒，应核对可访问性行为。
   *
   * CSS 声明：`display:contents;`。
   */
  readonly contents = 'display:contents;';
  /**
   * 生成块级弹性容器，直接子元素参与 Flex 布局。
   *
   * CSS 声明：`display:flex;`。
   */
  readonly flex = 'display:flex;';
  /** CSS 声明：`display:flow;`。 */
  readonly flow = 'display:flow;';
  /**
   * 建立独立块格式化上下文，可包住内部浮动并隔离部分外边距折叠。
   *
   * CSS 声明：`display:flow-root;`。
   */
  readonly flowRoot = 'display:flow-root;';
  /**
   * 生成块级网格容器，直接子元素参与 Grid 布局。
   *
   * CSS 声明：`display:grid;`。
   */
  readonly grid = 'display:grid;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`display:inherit;`。
   */
  readonly inherit = 'display:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`display:initial;`。
   */
  readonly initial = 'display:initial;';
  /**
   * 生成行内盒子，参与行内排版；普通非替换行内盒子的宽高不按块盒规则应用。
   *
   * CSS 声明：`display:inline;`。
   */
  readonly inline = 'display:inline;';
  /**
   * 外部参与行内排版，内部建立独立格式化上下文，可设置宽高。
   *
   * CSS 声明：`display:inline-block;`。
   */
  readonly inlineBlock = 'display:inline-block;';
  /**
   * 生成行内级弹性容器，内部仍使用 Flex 布局。
   *
   * CSS 声明：`display:inline-flex;`。
   */
  readonly inlineFlex = 'display:inline-flex;';
  /**
   * 生成行内级网格容器，内部仍使用 Grid 布局。
   *
   * CSS 声明：`display:inline-grid;`。
   */
  readonly inlineGrid = 'display:inline-grid;';
  /** CSS 声明：`display:inline-list-item;`。 */
  readonly inlineListItem = 'display:inline-list-item;';
  /** CSS 声明：`display:inline-table;`。 */
  readonly inlineTable = 'display:inline-table;';
  /**
   * 生成带列表标记的主盒子，标记由 list-style 等属性控制。
   *
   * CSS 声明：`display:list-item;`。
   */
  readonly listItem = 'display:list-item;';
  /**
   * 不生成元素及其后代的布局盒子，通常也从可访问性树中移除。
   *
   * CSS 声明：`display:none;`。
   */
  readonly none = 'display:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`display:revert;`。
   */
  readonly revert = 'display:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`display:revert-layer;`。
   */
  readonly revertLayer = 'display:revert-layer;';
  /** CSS 声明：`display:ruby;`。 */
  readonly ruby = 'display:ruby;';
  /** CSS 声明：`display:ruby-base;`。 */
  readonly rubyBase = 'display:ruby-base;';
  /** CSS 声明：`display:ruby-base-container;`。 */
  readonly rubyBaseContainer = 'display:ruby-base-container;';
  /** CSS 声明：`display:ruby-text;`。 */
  readonly rubyText = 'display:ruby-text;';
  /** CSS 声明：`display:ruby-text-container;`。 */
  readonly rubyTextContainer = 'display:ruby-text-container;';
  /** CSS 声明：`display:run-in;`。 */
  readonly runIn = 'display:run-in;';
  /** CSS 声明：`display:table;`。 */
  readonly table = 'display:table;';
  /** CSS 声明：`display:table-caption;`。 */
  readonly tableCaption = 'display:table-caption;';
  /** CSS 声明：`display:table-cell;`。 */
  readonly tableCell = 'display:table-cell;';
  /** CSS 声明：`display:table-column;`。 */
  readonly tableColumn = 'display:table-column;';
  /** CSS 声明：`display:table-column-group;`。 */
  readonly tableColumnGroup = 'display:table-column-group;';
  /** CSS 声明：`display:table-footer-group;`。 */
  readonly tableFooterGroup = 'display:table-footer-group;';
  /** CSS 声明：`display:table-header-group;`。 */
  readonly tableHeaderGroup = 'display:table-header-group;';
  /** CSS 声明：`display:table-row;`。 */
  readonly tableRow = 'display:table-row;';
  /** CSS 声明：`display:table-row-group;`。 */
  readonly tableRowGroup = 'display:table-row-group;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`display:unset;`。
   */
  readonly unset = 'display:unset;';
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
 * 选择 SVG 文本布局的主导基线及基线表。（dominant-baseline）
 *
 * CSS 语法：`auto | text-bottom | alphabetic | ideographic | middle | central | mathematical | hanging | text-top`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
 */
export class DominantBaselineCss extends CssProperty {
  /** CSS 声明：`dominant-baseline:alphabetic;`。 */
  readonly alphabetic = 'dominant-baseline:alphabetic;';
  /** CSS 声明：`dominant-baseline:auto;`。 */
  readonly auto = 'dominant-baseline:auto;';
  /** CSS 声明：`dominant-baseline:central;`。 */
  readonly central = 'dominant-baseline:central;';
  /** CSS 声明：`dominant-baseline:hanging;`。 */
  readonly hanging = 'dominant-baseline:hanging;';
  /** CSS 声明：`dominant-baseline:ideographic;`。 */
  readonly ideographic = 'dominant-baseline:ideographic;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`dominant-baseline:inherit;`。
   */
  readonly inherit = 'dominant-baseline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`dominant-baseline:initial;`。
   */
  readonly initial = 'dominant-baseline:initial;';
  /** CSS 声明：`dominant-baseline:mathematical;`。 */
  readonly mathematical = 'dominant-baseline:mathematical;';
  /** CSS 声明：`dominant-baseline:middle;`。 */
  readonly middle = 'dominant-baseline:middle;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`dominant-baseline:revert;`。
   */
  readonly revert = 'dominant-baseline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`dominant-baseline:revert-layer;`。
   */
  readonly revertLayer = 'dominant-baseline:revert-layer;';
  /** CSS 声明：`dominant-baseline:text-bottom;`。 */
  readonly textBottom = 'dominant-baseline:text-bottom;';
  /** CSS 声明：`dominant-baseline:text-top;`。 */
  readonly textTop = 'dominant-baseline:text-top;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`dominant-baseline:unset;`。
   */
  readonly unset = 'dominant-baseline:unset;';
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
 * 控制分离边框表格中空单元格的边框和背景是否绘制。（empty-cells）
 *
 * CSS 语法：`show | hide`。
 *
 * CSS 初始值：`show`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
 */
export class EmptyCellsCss extends CssProperty {
  /** CSS 声明：`empty-cells:hide;`。 */
  readonly hide = 'empty-cells:hide;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`empty-cells:inherit;`。
   */
  readonly inherit = 'empty-cells:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`empty-cells:initial;`。
   */
  readonly initial = 'empty-cells:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`empty-cells:revert;`。
   */
  readonly revert = 'empty-cells:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`empty-cells:revert-layer;`。
   */
  readonly revertLayer = 'empty-cells:revert-layer;';
  /** CSS 声明：`empty-cells:show;`。 */
  readonly show = 'empty-cells:show;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`empty-cells:unset;`。
   */
  readonly unset = 'empty-cells:unset;';
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
 * 控制表单控件采用固定默认尺寸还是根据内容调整尺寸。（field-sizing）
 *
 * CSS 语法：`content | fixed`。
 *
 * CSS 初始值：`fixed`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
 */
export class FieldSizingCss extends CssProperty {
  /** CSS 声明：`field-sizing:content;`。 */
  readonly content = 'field-sizing:content;';
  /** CSS 声明：`field-sizing:fixed;`。 */
  readonly fixed = 'field-sizing:fixed;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`field-sizing:inherit;`。
   */
  readonly inherit = 'field-sizing:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`field-sizing:initial;`。
   */
  readonly initial = 'field-sizing:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`field-sizing:revert;`。
   */
  readonly revert = 'field-sizing:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`field-sizing:revert-layer;`。
   */
  readonly revertLayer = 'field-sizing:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`field-sizing:unset;`。
   */
  readonly unset = 'field-sizing:unset;';
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
 * 设置 SVG 图形内部的填充绘制方式。（fill）
 *
 * CSS 语法：`<paint>`。
 *
 * CSS 初始值：`black`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
 */
export class FillCss extends CssProperty {
  /** CSS 声明：`fill:AccentColor;`。 */
  readonly AccentColor = 'fill:AccentColor;';
  /** CSS 声明：`fill:AccentColorText;`。 */
  readonly AccentColorText = 'fill:AccentColorText;';
  /** CSS 声明：`fill:ActiveBorder;`。 */
  readonly ActiveBorder = 'fill:ActiveBorder;';
  /** CSS 声明：`fill:ActiveCaption;`。 */
  readonly ActiveCaption = 'fill:ActiveCaption;';
  /** CSS 声明：`fill:ActiveText;`。 */
  readonly ActiveText = 'fill:ActiveText;';
  /** CSS 声明：`fill:AppWorkspace;`。 */
  readonly AppWorkspace = 'fill:AppWorkspace;';
  /** CSS 声明：`fill:Background;`。 */
  readonly Background = 'fill:Background;';
  /** CSS 声明：`fill:ButtonBorder;`。 */
  readonly ButtonBorder = 'fill:ButtonBorder;';
  /** CSS 声明：`fill:ButtonFace;`。 */
  readonly ButtonFace = 'fill:ButtonFace;';
  /** CSS 声明：`fill:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'fill:ButtonHighlight;';
  /** CSS 声明：`fill:ButtonShadow;`。 */
  readonly ButtonShadow = 'fill:ButtonShadow;';
  /** CSS 声明：`fill:ButtonText;`。 */
  readonly ButtonText = 'fill:ButtonText;';
  /** CSS 声明：`fill:Canvas;`。 */
  readonly Canvas = 'fill:Canvas;';
  /** CSS 声明：`fill:CanvasText;`。 */
  readonly CanvasText = 'fill:CanvasText;';
  /** CSS 声明：`fill:CaptionText;`。 */
  readonly CaptionText = 'fill:CaptionText;';
  /** CSS 声明：`fill:Field;`。 */
  readonly Field = 'fill:Field;';
  /** CSS 声明：`fill:FieldText;`。 */
  readonly FieldText = 'fill:FieldText;';
  /** CSS 声明：`fill:GrayText;`。 */
  readonly GrayText = 'fill:GrayText;';
  /** CSS 声明：`fill:Highlight;`。 */
  readonly Highlight = 'fill:Highlight;';
  /** CSS 声明：`fill:HighlightText;`。 */
  readonly HighlightText = 'fill:HighlightText;';
  /** CSS 声明：`fill:InactiveBorder;`。 */
  readonly InactiveBorder = 'fill:InactiveBorder;';
  /** CSS 声明：`fill:InactiveCaption;`。 */
  readonly InactiveCaption = 'fill:InactiveCaption;';
  /** CSS 声明：`fill:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'fill:InactiveCaptionText;';
  /** CSS 声明：`fill:InfoBackground;`。 */
  readonly InfoBackground = 'fill:InfoBackground;';
  /** CSS 声明：`fill:InfoText;`。 */
  readonly InfoText = 'fill:InfoText;';
  /** CSS 声明：`fill:LinkText;`。 */
  readonly LinkText = 'fill:LinkText;';
  /** CSS 声明：`fill:Mark;`。 */
  readonly Mark = 'fill:Mark;';
  /** CSS 声明：`fill:MarkText;`。 */
  readonly MarkText = 'fill:MarkText;';
  /** CSS 声明：`fill:Menu;`。 */
  readonly Menu = 'fill:Menu;';
  /** CSS 声明：`fill:MenuText;`。 */
  readonly MenuText = 'fill:MenuText;';
  /** CSS 声明：`fill:Scrollbar;`。 */
  readonly Scrollbar = 'fill:Scrollbar;';
  /** CSS 声明：`fill:SelectedItem;`。 */
  readonly SelectedItem = 'fill:SelectedItem;';
  /** CSS 声明：`fill:SelectedItemText;`。 */
  readonly SelectedItemText = 'fill:SelectedItemText;';
  /** CSS 声明：`fill:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'fill:ThreeDDarkShadow;';
  /** CSS 声明：`fill:ThreeDFace;`。 */
  readonly ThreeDFace = 'fill:ThreeDFace;';
  /** CSS 声明：`fill:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'fill:ThreeDHighlight;';
  /** CSS 声明：`fill:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'fill:ThreeDLightShadow;';
  /** CSS 声明：`fill:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'fill:ThreeDShadow;';
  /** CSS 声明：`fill:VisitedText;`。 */
  readonly VisitedText = 'fill:VisitedText;';
  /** CSS 声明：`fill:Window;`。 */
  readonly Window = 'fill:Window;';
  /** CSS 声明：`fill:WindowFrame;`。 */
  readonly WindowFrame = 'fill:WindowFrame;';
  /** CSS 声明：`fill:WindowText;`。 */
  readonly WindowText = 'fill:WindowText;';
  /** CSS 声明：`fill:aliceblue;`。 */
  readonly aliceblue = 'fill:aliceblue;';
  /** CSS 声明：`fill:antiquewhite;`。 */
  readonly antiquewhite = 'fill:antiquewhite;';
  /** CSS 声明：`fill:aqua;`。 */
  readonly aqua = 'fill:aqua;';
  /** CSS 声明：`fill:aquamarine;`。 */
  readonly aquamarine = 'fill:aquamarine;';
  /** CSS 声明：`fill:azure;`。 */
  readonly azure = 'fill:azure;';
  /** CSS 声明：`fill:beige;`。 */
  readonly beige = 'fill:beige;';
  /** CSS 声明：`fill:bisque;`。 */
  readonly bisque = 'fill:bisque;';
  /** CSS 声明：`fill:black;`。 */
  readonly black = 'fill:black;';
  /** CSS 声明：`fill:blanchedalmond;`。 */
  readonly blanchedalmond = 'fill:blanchedalmond;';
  /** CSS 声明：`fill:blue;`。 */
  readonly blue = 'fill:blue;';
  /** CSS 声明：`fill:blueviolet;`。 */
  readonly blueviolet = 'fill:blueviolet;';
  /** CSS 声明：`fill:brown;`。 */
  readonly brown = 'fill:brown;';
  /** CSS 声明：`fill:burlywood;`。 */
  readonly burlywood = 'fill:burlywood;';
  /** CSS 声明：`fill:cadetblue;`。 */
  readonly cadetblue = 'fill:cadetblue;';
  /** CSS 声明：`fill:chartreuse;`。 */
  readonly chartreuse = 'fill:chartreuse;';
  /** CSS 声明：`fill:chocolate;`。 */
  readonly chocolate = 'fill:chocolate;';
  /** CSS 声明：`fill:context-fill;`。 */
  readonly contextFill = 'fill:context-fill;';
  /** CSS 声明：`fill:context-stroke;`。 */
  readonly contextStroke = 'fill:context-stroke;';
  /** CSS 声明：`fill:coral;`。 */
  readonly coral = 'fill:coral;';
  /** CSS 声明：`fill:cornflowerblue;`。 */
  readonly cornflowerblue = 'fill:cornflowerblue;';
  /** CSS 声明：`fill:cornsilk;`。 */
  readonly cornsilk = 'fill:cornsilk;';
  /** CSS 声明：`fill:crimson;`。 */
  readonly crimson = 'fill:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`fill:currentColor;`。
   */
  readonly currentColor = 'fill:currentColor;';
  /** CSS 声明：`fill:cyan;`。 */
  readonly cyan = 'fill:cyan;';
  /** CSS 声明：`fill:darkblue;`。 */
  readonly darkblue = 'fill:darkblue;';
  /** CSS 声明：`fill:darkcyan;`。 */
  readonly darkcyan = 'fill:darkcyan;';
  /** CSS 声明：`fill:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'fill:darkgoldenrod;';
  /** CSS 声明：`fill:darkgray;`。 */
  readonly darkgray = 'fill:darkgray;';
  /** CSS 声明：`fill:darkgreen;`。 */
  readonly darkgreen = 'fill:darkgreen;';
  /** CSS 声明：`fill:darkgrey;`。 */
  readonly darkgrey = 'fill:darkgrey;';
  /** CSS 声明：`fill:darkkhaki;`。 */
  readonly darkkhaki = 'fill:darkkhaki;';
  /** CSS 声明：`fill:darkmagenta;`。 */
  readonly darkmagenta = 'fill:darkmagenta;';
  /** CSS 声明：`fill:darkolivegreen;`。 */
  readonly darkolivegreen = 'fill:darkolivegreen;';
  /** CSS 声明：`fill:darkorange;`。 */
  readonly darkorange = 'fill:darkorange;';
  /** CSS 声明：`fill:darkorchid;`。 */
  readonly darkorchid = 'fill:darkorchid;';
  /** CSS 声明：`fill:darkred;`。 */
  readonly darkred = 'fill:darkred;';
  /** CSS 声明：`fill:darksalmon;`。 */
  readonly darksalmon = 'fill:darksalmon;';
  /** CSS 声明：`fill:darkseagreen;`。 */
  readonly darkseagreen = 'fill:darkseagreen;';
  /** CSS 声明：`fill:darkslateblue;`。 */
  readonly darkslateblue = 'fill:darkslateblue;';
  /** CSS 声明：`fill:darkslategray;`。 */
  readonly darkslategray = 'fill:darkslategray;';
  /** CSS 声明：`fill:darkslategrey;`。 */
  readonly darkslategrey = 'fill:darkslategrey;';
  /** CSS 声明：`fill:darkturquoise;`。 */
  readonly darkturquoise = 'fill:darkturquoise;';
  /** CSS 声明：`fill:darkviolet;`。 */
  readonly darkviolet = 'fill:darkviolet;';
  /** CSS 声明：`fill:deeppink;`。 */
  readonly deeppink = 'fill:deeppink;';
  /** CSS 声明：`fill:deepskyblue;`。 */
  readonly deepskyblue = 'fill:deepskyblue;';
  /** CSS 声明：`fill:dimgray;`。 */
  readonly dimgray = 'fill:dimgray;';
  /** CSS 声明：`fill:dimgrey;`。 */
  readonly dimgrey = 'fill:dimgrey;';
  /** CSS 声明：`fill:dodgerblue;`。 */
  readonly dodgerblue = 'fill:dodgerblue;';
  /** CSS 声明：`fill:firebrick;`。 */
  readonly firebrick = 'fill:firebrick;';
  /** CSS 声明：`fill:floralwhite;`。 */
  readonly floralwhite = 'fill:floralwhite;';
  /** CSS 声明：`fill:forestgreen;`。 */
  readonly forestgreen = 'fill:forestgreen;';
  /** CSS 声明：`fill:fuchsia;`。 */
  readonly fuchsia = 'fill:fuchsia;';
  /** CSS 声明：`fill:gainsboro;`。 */
  readonly gainsboro = 'fill:gainsboro;';
  /** CSS 声明：`fill:ghostwhite;`。 */
  readonly ghostwhite = 'fill:ghostwhite;';
  /** CSS 声明：`fill:gold;`。 */
  readonly gold = 'fill:gold;';
  /** CSS 声明：`fill:goldenrod;`。 */
  readonly goldenrod = 'fill:goldenrod;';
  /** CSS 声明：`fill:gray;`。 */
  readonly gray = 'fill:gray;';
  /** CSS 声明：`fill:green;`。 */
  readonly green = 'fill:green;';
  /** CSS 声明：`fill:greenyellow;`。 */
  readonly greenyellow = 'fill:greenyellow;';
  /** CSS 声明：`fill:grey;`。 */
  readonly grey = 'fill:grey;';
  /** CSS 声明：`fill:honeydew;`。 */
  readonly honeydew = 'fill:honeydew;';
  /** CSS 声明：`fill:hotpink;`。 */
  readonly hotpink = 'fill:hotpink;';
  /** CSS 声明：`fill:indianred;`。 */
  readonly indianred = 'fill:indianred;';
  /** CSS 声明：`fill:indigo;`。 */
  readonly indigo = 'fill:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill:inherit;`。
   */
  readonly inherit = 'fill:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill:initial;`。
   */
  readonly initial = 'fill:initial;';
  /** CSS 声明：`fill:ivory;`。 */
  readonly ivory = 'fill:ivory;';
  /** CSS 声明：`fill:khaki;`。 */
  readonly khaki = 'fill:khaki;';
  /** CSS 声明：`fill:lavender;`。 */
  readonly lavender = 'fill:lavender;';
  /** CSS 声明：`fill:lavenderblush;`。 */
  readonly lavenderblush = 'fill:lavenderblush;';
  /** CSS 声明：`fill:lawngreen;`。 */
  readonly lawngreen = 'fill:lawngreen;';
  /** CSS 声明：`fill:lemonchiffon;`。 */
  readonly lemonchiffon = 'fill:lemonchiffon;';
  /** CSS 声明：`fill:lightblue;`。 */
  readonly lightblue = 'fill:lightblue;';
  /** CSS 声明：`fill:lightcoral;`。 */
  readonly lightcoral = 'fill:lightcoral;';
  /** CSS 声明：`fill:lightcyan;`。 */
  readonly lightcyan = 'fill:lightcyan;';
  /** CSS 声明：`fill:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'fill:lightgoldenrodyellow;';
  /** CSS 声明：`fill:lightgray;`。 */
  readonly lightgray = 'fill:lightgray;';
  /** CSS 声明：`fill:lightgreen;`。 */
  readonly lightgreen = 'fill:lightgreen;';
  /** CSS 声明：`fill:lightgrey;`。 */
  readonly lightgrey = 'fill:lightgrey;';
  /** CSS 声明：`fill:lightpink;`。 */
  readonly lightpink = 'fill:lightpink;';
  /** CSS 声明：`fill:lightsalmon;`。 */
  readonly lightsalmon = 'fill:lightsalmon;';
  /** CSS 声明：`fill:lightseagreen;`。 */
  readonly lightseagreen = 'fill:lightseagreen;';
  /** CSS 声明：`fill:lightskyblue;`。 */
  readonly lightskyblue = 'fill:lightskyblue;';
  /** CSS 声明：`fill:lightslategray;`。 */
  readonly lightslategray = 'fill:lightslategray;';
  /** CSS 声明：`fill:lightslategrey;`。 */
  readonly lightslategrey = 'fill:lightslategrey;';
  /** CSS 声明：`fill:lightsteelblue;`。 */
  readonly lightsteelblue = 'fill:lightsteelblue;';
  /** CSS 声明：`fill:lightyellow;`。 */
  readonly lightyellow = 'fill:lightyellow;';
  /** CSS 声明：`fill:lime;`。 */
  readonly lime = 'fill:lime;';
  /** CSS 声明：`fill:limegreen;`。 */
  readonly limegreen = 'fill:limegreen;';
  /** CSS 声明：`fill:linen;`。 */
  readonly linen = 'fill:linen;';
  /** CSS 声明：`fill:magenta;`。 */
  readonly magenta = 'fill:magenta;';
  /** CSS 声明：`fill:maroon;`。 */
  readonly maroon = 'fill:maroon;';
  /** CSS 声明：`fill:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'fill:mediumaquamarine;';
  /** CSS 声明：`fill:mediumblue;`。 */
  readonly mediumblue = 'fill:mediumblue;';
  /** CSS 声明：`fill:mediumorchid;`。 */
  readonly mediumorchid = 'fill:mediumorchid;';
  /** CSS 声明：`fill:mediumpurple;`。 */
  readonly mediumpurple = 'fill:mediumpurple;';
  /** CSS 声明：`fill:mediumseagreen;`。 */
  readonly mediumseagreen = 'fill:mediumseagreen;';
  /** CSS 声明：`fill:mediumslateblue;`。 */
  readonly mediumslateblue = 'fill:mediumslateblue;';
  /** CSS 声明：`fill:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'fill:mediumspringgreen;';
  /** CSS 声明：`fill:mediumturquoise;`。 */
  readonly mediumturquoise = 'fill:mediumturquoise;';
  /** CSS 声明：`fill:mediumvioletred;`。 */
  readonly mediumvioletred = 'fill:mediumvioletred;';
  /** CSS 声明：`fill:midnightblue;`。 */
  readonly midnightblue = 'fill:midnightblue;';
  /** CSS 声明：`fill:mintcream;`。 */
  readonly mintcream = 'fill:mintcream;';
  /** CSS 声明：`fill:mistyrose;`。 */
  readonly mistyrose = 'fill:mistyrose;';
  /** CSS 声明：`fill:moccasin;`。 */
  readonly moccasin = 'fill:moccasin;';
  /** CSS 声明：`fill:navajowhite;`。 */
  readonly navajowhite = 'fill:navajowhite;';
  /** CSS 声明：`fill:navy;`。 */
  readonly navy = 'fill:navy;';
  /** CSS 声明：`fill:none;`。 */
  readonly none = 'fill:none;';
  /** CSS 声明：`fill:oldlace;`。 */
  readonly oldlace = 'fill:oldlace;';
  /** CSS 声明：`fill:olive;`。 */
  readonly olive = 'fill:olive;';
  /** CSS 声明：`fill:olivedrab;`。 */
  readonly olivedrab = 'fill:olivedrab;';
  /** CSS 声明：`fill:orange;`。 */
  readonly orange = 'fill:orange;';
  /** CSS 声明：`fill:orangered;`。 */
  readonly orangered = 'fill:orangered;';
  /** CSS 声明：`fill:orchid;`。 */
  readonly orchid = 'fill:orchid;';
  /** CSS 声明：`fill:palegoldenrod;`。 */
  readonly palegoldenrod = 'fill:palegoldenrod;';
  /** CSS 声明：`fill:palegreen;`。 */
  readonly palegreen = 'fill:palegreen;';
  /** CSS 声明：`fill:paleturquoise;`。 */
  readonly paleturquoise = 'fill:paleturquoise;';
  /** CSS 声明：`fill:palevioletred;`。 */
  readonly palevioletred = 'fill:palevioletred;';
  /** CSS 声明：`fill:papayawhip;`。 */
  readonly papayawhip = 'fill:papayawhip;';
  /** CSS 声明：`fill:peachpuff;`。 */
  readonly peachpuff = 'fill:peachpuff;';
  /** CSS 声明：`fill:peru;`。 */
  readonly peru = 'fill:peru;';
  /** CSS 声明：`fill:pink;`。 */
  readonly pink = 'fill:pink;';
  /** CSS 声明：`fill:plum;`。 */
  readonly plum = 'fill:plum;';
  /** CSS 声明：`fill:powderblue;`。 */
  readonly powderblue = 'fill:powderblue;';
  /** CSS 声明：`fill:purple;`。 */
  readonly purple = 'fill:purple;';
  /** CSS 声明：`fill:rebeccapurple;`。 */
  readonly rebeccapurple = 'fill:rebeccapurple;';
  /** CSS 声明：`fill:red;`。 */
  readonly red = 'fill:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill:revert;`。
   */
  readonly revert = 'fill:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill:revert-layer;`。
   */
  readonly revertLayer = 'fill:revert-layer;';
  /** CSS 声明：`fill:rosybrown;`。 */
  readonly rosybrown = 'fill:rosybrown;';
  /** CSS 声明：`fill:royalblue;`。 */
  readonly royalblue = 'fill:royalblue;';
  /** CSS 声明：`fill:saddlebrown;`。 */
  readonly saddlebrown = 'fill:saddlebrown;';
  /** CSS 声明：`fill:salmon;`。 */
  readonly salmon = 'fill:salmon;';
  /** CSS 声明：`fill:sandybrown;`。 */
  readonly sandybrown = 'fill:sandybrown;';
  /** CSS 声明：`fill:seagreen;`。 */
  readonly seagreen = 'fill:seagreen;';
  /** CSS 声明：`fill:seashell;`。 */
  readonly seashell = 'fill:seashell;';
  /** CSS 声明：`fill:sienna;`。 */
  readonly sienna = 'fill:sienna;';
  /** CSS 声明：`fill:silver;`。 */
  readonly silver = 'fill:silver;';
  /** CSS 声明：`fill:skyblue;`。 */
  readonly skyblue = 'fill:skyblue;';
  /** CSS 声明：`fill:slateblue;`。 */
  readonly slateblue = 'fill:slateblue;';
  /** CSS 声明：`fill:slategray;`。 */
  readonly slategray = 'fill:slategray;';
  /** CSS 声明：`fill:slategrey;`。 */
  readonly slategrey = 'fill:slategrey;';
  /** CSS 声明：`fill:snow;`。 */
  readonly snow = 'fill:snow;';
  /** CSS 声明：`fill:springgreen;`。 */
  readonly springgreen = 'fill:springgreen;';
  /** CSS 声明：`fill:steelblue;`。 */
  readonly steelblue = 'fill:steelblue;';
  /** CSS 声明：`fill:tan;`。 */
  readonly tan = 'fill:tan;';
  /** CSS 声明：`fill:teal;`。 */
  readonly teal = 'fill:teal;';
  /** CSS 声明：`fill:thistle;`。 */
  readonly thistle = 'fill:thistle;';
  /** CSS 声明：`fill:tomato;`。 */
  readonly tomato = 'fill:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`fill:transparent;`。
   */
  readonly transparent = 'fill:transparent;';
  /** CSS 声明：`fill:turquoise;`。 */
  readonly turquoise = 'fill:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill:unset;`。
   */
  readonly unset = 'fill:unset;';
  /** CSS 声明：`fill:violet;`。 */
  readonly violet = 'fill:violet;';
  /** CSS 声明：`fill:wheat;`。 */
  readonly wheat = 'fill:wheat;';
  /** CSS 声明：`fill:white;`。 */
  readonly white = 'fill:white;';
  /** CSS 声明：`fill:whitesmoke;`。 */
  readonly whitesmoke = 'fill:whitesmoke;';
  /** CSS 声明：`fill:yellow;`。 */
  readonly yellow = 'fill:yellow;';
  /** CSS 声明：`fill:yellowgreen;`。 */
  readonly yellowgreen = 'fill:yellowgreen;';
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
 * 设置 SVG 填充的不透明度，不影响描边。（fill-opacity）
 *
 * CSS 语法：`<'opacity'>`。
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
  readonly inherit = 'fill-opacity:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill-opacity:initial;`。
   */
  readonly initial = 'fill-opacity:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill-opacity:revert;`。
   */
  readonly revert = 'fill-opacity:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill-opacity:revert-layer;`。
   */
  readonly revertLayer = 'fill-opacity:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill-opacity:unset;`。
   */
  readonly unset = 'fill-opacity:unset;';
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
 * 设置复杂 SVG 路径的内部区域判定规则。（fill-rule）
 *
 * CSS 语法：`nonzero | evenodd`。
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
  readonly evenodd = 'fill-rule:evenodd;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`fill-rule:inherit;`。
   */
  readonly inherit = 'fill-rule:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`fill-rule:initial;`。
   */
  readonly initial = 'fill-rule:initial;';
  /**
   * 按有方向的绕数判断路径内部，子路径方向会影响结果。
   *
   * CSS 声明：`fill-rule:nonzero;`。
   */
  readonly nonzero = 'fill-rule:nonzero;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`fill-rule:revert;`。
   */
  readonly revert = 'fill-rule:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`fill-rule:revert-layer;`。
   */
  readonly revertLayer = 'fill-rule:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`fill-rule:unset;`。
   */
  readonly unset = 'fill-rule:unset;';
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
 * 对元素的最终图像应用模糊、亮度等滤镜。（filter）
 *
 * CSS 语法：`none | <filter-value-list>`。
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
  readonly inherit = 'filter:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`filter:initial;`。
   */
  readonly initial = 'filter:initial;';
  /** CSS 声明：`filter:none;`。 */
  readonly none = 'filter:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`filter:revert;`。
   */
  readonly revert = 'filter:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`filter:revert-layer;`。
   */
  readonly revertLayer = 'filter:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`filter:unset;`。
   */
  readonly unset = 'filter:unset;';
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
 * 集中设置弹性项目的增长系数、收缩系数和基础尺寸。（flex）
 *
 * CSS 语法：`none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
 */
export class FlexCss extends LengthCssProperty {
  /**
   * 等价于 1 1 auto：可增长、可收缩，基础尺寸由主尺寸属性或内容决定。
   *
   * CSS 声明：`flex:auto;`。
   */
  readonly auto = 'flex:auto;';
  /** CSS 声明：`flex:content;`。 */
  readonly content = 'flex:content;';
  /** CSS 声明：`flex:fit-content;`。 */
  readonly fitContent = 'flex:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex:inherit;`。
   */
  readonly inherit = 'flex:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex:initial;`。
   */
  readonly initial = 'flex:initial;';
  /** CSS 声明：`flex:max-content;`。 */
  readonly maxContent = 'flex:max-content;';
  /** CSS 声明：`flex:min-content;`。 */
  readonly minContent = 'flex:min-content;';
  /**
   * 等价于 0 0 auto：不增长也不收缩，保留自动基础尺寸。
   *
   * CSS 声明：`flex:none;`。
   */
  readonly none = 'flex:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex:revert;`。
   */
  readonly revert = 'flex:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex:revert-layer;`。
   */
  readonly revertLayer = 'flex:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex:unset;`。
   */
  readonly unset = 'flex:unset;';
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
 * 设置弹性项目分配剩余空间之前的主轴基础尺寸。（flex-basis）
 *
 * CSS 语法：`content | <'width'>`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
 */
export class FlexBasisCss extends LengthCssProperty {
  /**
   * 先参考主轴对应的 width 或 height；该值也为 auto 时由内容决定。
   *
   * CSS 声明：`flex-basis:auto;`。
   */
  readonly auto = 'flex-basis:auto;';
  /**
   * 按内容确定基础尺寸，而不直接使用 width 或 height 作为基础尺寸。
   *
   * CSS 声明：`flex-basis:content;`。
   */
  readonly content = 'flex-basis:content;';
  /** CSS 声明：`flex-basis:fit-content;`。 */
  readonly fitContent = 'flex-basis:fit-content;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-basis:inherit;`。
   */
  readonly inherit = 'flex-basis:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-basis:initial;`。
   */
  readonly initial = 'flex-basis:initial;';
  /** CSS 声明：`flex-basis:max-content;`。 */
  readonly maxContent = 'flex-basis:max-content;';
  /** CSS 声明：`flex-basis:min-content;`。 */
  readonly minContent = 'flex-basis:min-content;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-basis:revert;`。
   */
  readonly revert = 'flex-basis:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-basis:revert-layer;`。
   */
  readonly revertLayer = 'flex-basis:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-basis:unset;`。
   */
  readonly unset = 'flex-basis:unset;';
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
 * 设置弹性容器的主轴方向及项目排列方向。（flex-direction）
 *
 * CSS 语法：`row | row-reverse | column | column-reverse`。
 *
 * CSS 初始值：`row`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
 */
export class FlexDirectionCss extends CssProperty {
  /**
   * 主轴沿块方向排列；水平书写时通常从上到下。
   *
   * CSS 声明：`flex-direction:column;`。
   */
  readonly column = 'flex-direction:column;';
  /**
   * 反转块方向的视觉排列，不改变 DOM 顺序。
   *
   * CSS 声明：`flex-direction:column-reverse;`。
   */
  readonly columnReverse = 'flex-direction:column-reverse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-direction:inherit;`。
   */
  readonly inherit = 'flex-direction:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-direction:initial;`。
   */
  readonly initial = 'flex-direction:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-direction:revert;`。
   */
  readonly revert = 'flex-direction:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-direction:revert-layer;`。
   */
  readonly revertLayer = 'flex-direction:revert-layer;';
  /**
   * 主轴沿行内方向排列；不一定是从左到右，取决于书写方向。
   *
   * CSS 声明：`flex-direction:row;`。
   */
  readonly row = 'flex-direction:row;';
  /**
   * 反转行内方向的视觉排列，不改变 DOM 顺序。
   *
   * CSS 声明：`flex-direction:row-reverse;`。
   */
  readonly rowReverse = 'flex-direction:row-reverse;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-direction:unset;`。
   */
  readonly unset = 'flex-direction:unset;';
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
 * 同时设置弹性布局的主轴方向和换行方式。（flex-flow）
 *
 * CSS 语法：`<'flex-direction'> || <'flex-wrap'>`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
 */
export class FlexFlowCss extends CssProperty {
  /** CSS 声明：`flex-flow:column;`。 */
  readonly column = 'flex-flow:column;';
  /** CSS 声明：`flex-flow:column-reverse;`。 */
  readonly columnReverse = 'flex-flow:column-reverse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-flow:inherit;`。
   */
  readonly inherit = 'flex-flow:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-flow:initial;`。
   */
  readonly initial = 'flex-flow:initial;';
  /** CSS 声明：`flex-flow:nowrap;`。 */
  readonly nowrap = 'flex-flow:nowrap;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-flow:revert;`。
   */
  readonly revert = 'flex-flow:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-flow:revert-layer;`。
   */
  readonly revertLayer = 'flex-flow:revert-layer;';
  /** CSS 声明：`flex-flow:row;`。 */
  readonly row = 'flex-flow:row;';
  /** CSS 声明：`flex-flow:row-reverse;`。 */
  readonly rowReverse = 'flex-flow:row-reverse;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-flow:unset;`。
   */
  readonly unset = 'flex-flow:unset;';
  /** CSS 声明：`flex-flow:wrap;`。 */
  readonly wrap = 'flex-flow:wrap;';
  /** CSS 声明：`flex-flow:wrap-reverse;`。 */
  readonly wrapReverse = 'flex-flow:wrap-reverse;';
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
 * 设置弹性项目分配正剩余空间时的增长系数。（flex-grow）
 *
 * CSS 语法：`<number>`。
 *
 * CSS 初始值：`0`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
 */
export class FlexGrowCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-grow:inherit;`。
   */
  readonly inherit = 'flex-grow:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-grow:initial;`。
   */
  readonly initial = 'flex-grow:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-grow:revert;`。
   */
  readonly revert = 'flex-grow:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-grow:revert-layer;`。
   */
  readonly revertLayer = 'flex-grow:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-grow:unset;`。
   */
  readonly unset = 'flex-grow:unset;';
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
 * 设置弹性项目空间不足时的收缩系数。（flex-shrink）
 *
 * 实际收缩还与 flex-basis 成比例；自动最小尺寸可能阻止项目继续缩小。
 *
 * CSS 语法：`<number>`。
 *
 * CSS 初始值：`1`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
 */
export class FlexShrinkCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-shrink:inherit;`。
   */
  readonly inherit = 'flex-shrink:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-shrink:initial;`。
   */
  readonly initial = 'flex-shrink:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-shrink:revert;`。
   */
  readonly revert = 'flex-shrink:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-shrink:revert-layer;`。
   */
  readonly revertLayer = 'flex-shrink:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-shrink:unset;`。
   */
  readonly unset = 'flex-shrink:unset;';
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
 * 设置弹性项目是否换行，以及多行的排列方向。（flex-wrap）
 *
 * CSS 语法：`nowrap | wrap | wrap-reverse`。
 *
 * CSS 初始值：`nowrap`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
 */
export class FlexWrapCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flex-wrap:inherit;`。
   */
  readonly inherit = 'flex-wrap:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flex-wrap:initial;`。
   */
  readonly initial = 'flex-wrap:initial;';
  /**
   * 保持单行；项目仍可能收缩或溢出。
   *
   * CSS 声明：`flex-wrap:nowrap;`。
   */
  readonly nowrap = 'flex-wrap:nowrap;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flex-wrap:revert;`。
   */
  readonly revert = 'flex-wrap:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flex-wrap:revert-layer;`。
   */
  readonly revertLayer = 'flex-wrap:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flex-wrap:unset;`。
   */
  readonly unset = 'flex-wrap:unset;';
  /**
   * 空间不足时形成多行，沿交叉轴正常方向排列。
   *
   * CSS 声明：`flex-wrap:wrap;`。
   */
  readonly wrap = 'flex-wrap:wrap;';
  /**
   * 允许换行并反转交叉轴上各行的排列方向。
   *
   * CSS 声明：`flex-wrap:wrap-reverse;`。
   */
  readonly wrapReverse = 'flex-wrap:wrap-reverse;';
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
 * 将元素浮动到指定侧，使相邻行内内容围绕它排列。（float）
 *
 * CSS 语法：`left | right | none | inline-start | inline-end`。
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
  readonly inherit = 'float:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`float:initial;`。
   */
  readonly initial = 'float:initial;';
  /** CSS 声明：`float:inline-end;`。 */
  readonly inlineEnd = 'float:inline-end;';
  /** CSS 声明：`float:inline-start;`。 */
  readonly inlineStart = 'float:inline-start;';
  /** CSS 声明：`float:left;`。 */
  readonly left = 'float:left;';
  /** CSS 声明：`float:none;`。 */
  readonly none = 'float:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`float:revert;`。
   */
  readonly revert = 'float:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`float:revert-layer;`。
   */
  readonly revertLayer = 'float:revert-layer;';
  /** CSS 声明：`float:right;`。 */
  readonly right = 'float:right;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`float:unset;`。
   */
  readonly unset = 'float:unset;';
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
 * 设置 SVG feFlood 或相关滤镜的洪泛颜色。（flood-color）
 *
 * CSS 语法：`<color>`。
 *
 * CSS 初始值：`black`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
 */
export class FloodColorCss extends CssProperty {
  /** CSS 声明：`flood-color:AccentColor;`。 */
  readonly AccentColor = 'flood-color:AccentColor;';
  /** CSS 声明：`flood-color:AccentColorText;`。 */
  readonly AccentColorText = 'flood-color:AccentColorText;';
  /** CSS 声明：`flood-color:ActiveBorder;`。 */
  readonly ActiveBorder = 'flood-color:ActiveBorder;';
  /** CSS 声明：`flood-color:ActiveCaption;`。 */
  readonly ActiveCaption = 'flood-color:ActiveCaption;';
  /** CSS 声明：`flood-color:ActiveText;`。 */
  readonly ActiveText = 'flood-color:ActiveText;';
  /** CSS 声明：`flood-color:AppWorkspace;`。 */
  readonly AppWorkspace = 'flood-color:AppWorkspace;';
  /** CSS 声明：`flood-color:Background;`。 */
  readonly Background = 'flood-color:Background;';
  /** CSS 声明：`flood-color:ButtonBorder;`。 */
  readonly ButtonBorder = 'flood-color:ButtonBorder;';
  /** CSS 声明：`flood-color:ButtonFace;`。 */
  readonly ButtonFace = 'flood-color:ButtonFace;';
  /** CSS 声明：`flood-color:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'flood-color:ButtonHighlight;';
  /** CSS 声明：`flood-color:ButtonShadow;`。 */
  readonly ButtonShadow = 'flood-color:ButtonShadow;';
  /** CSS 声明：`flood-color:ButtonText;`。 */
  readonly ButtonText = 'flood-color:ButtonText;';
  /** CSS 声明：`flood-color:Canvas;`。 */
  readonly Canvas = 'flood-color:Canvas;';
  /** CSS 声明：`flood-color:CanvasText;`。 */
  readonly CanvasText = 'flood-color:CanvasText;';
  /** CSS 声明：`flood-color:CaptionText;`。 */
  readonly CaptionText = 'flood-color:CaptionText;';
  /** CSS 声明：`flood-color:Field;`。 */
  readonly Field = 'flood-color:Field;';
  /** CSS 声明：`flood-color:FieldText;`。 */
  readonly FieldText = 'flood-color:FieldText;';
  /** CSS 声明：`flood-color:GrayText;`。 */
  readonly GrayText = 'flood-color:GrayText;';
  /** CSS 声明：`flood-color:Highlight;`。 */
  readonly Highlight = 'flood-color:Highlight;';
  /** CSS 声明：`flood-color:HighlightText;`。 */
  readonly HighlightText = 'flood-color:HighlightText;';
  /** CSS 声明：`flood-color:InactiveBorder;`。 */
  readonly InactiveBorder = 'flood-color:InactiveBorder;';
  /** CSS 声明：`flood-color:InactiveCaption;`。 */
  readonly InactiveCaption = 'flood-color:InactiveCaption;';
  /** CSS 声明：`flood-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'flood-color:InactiveCaptionText;';
  /** CSS 声明：`flood-color:InfoBackground;`。 */
  readonly InfoBackground = 'flood-color:InfoBackground;';
  /** CSS 声明：`flood-color:InfoText;`。 */
  readonly InfoText = 'flood-color:InfoText;';
  /** CSS 声明：`flood-color:LinkText;`。 */
  readonly LinkText = 'flood-color:LinkText;';
  /** CSS 声明：`flood-color:Mark;`。 */
  readonly Mark = 'flood-color:Mark;';
  /** CSS 声明：`flood-color:MarkText;`。 */
  readonly MarkText = 'flood-color:MarkText;';
  /** CSS 声明：`flood-color:Menu;`。 */
  readonly Menu = 'flood-color:Menu;';
  /** CSS 声明：`flood-color:MenuText;`。 */
  readonly MenuText = 'flood-color:MenuText;';
  /** CSS 声明：`flood-color:Scrollbar;`。 */
  readonly Scrollbar = 'flood-color:Scrollbar;';
  /** CSS 声明：`flood-color:SelectedItem;`。 */
  readonly SelectedItem = 'flood-color:SelectedItem;';
  /** CSS 声明：`flood-color:SelectedItemText;`。 */
  readonly SelectedItemText = 'flood-color:SelectedItemText;';
  /** CSS 声明：`flood-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'flood-color:ThreeDDarkShadow;';
  /** CSS 声明：`flood-color:ThreeDFace;`。 */
  readonly ThreeDFace = 'flood-color:ThreeDFace;';
  /** CSS 声明：`flood-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'flood-color:ThreeDHighlight;';
  /** CSS 声明：`flood-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'flood-color:ThreeDLightShadow;';
  /** CSS 声明：`flood-color:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'flood-color:ThreeDShadow;';
  /** CSS 声明：`flood-color:VisitedText;`。 */
  readonly VisitedText = 'flood-color:VisitedText;';
  /** CSS 声明：`flood-color:Window;`。 */
  readonly Window = 'flood-color:Window;';
  /** CSS 声明：`flood-color:WindowFrame;`。 */
  readonly WindowFrame = 'flood-color:WindowFrame;';
  /** CSS 声明：`flood-color:WindowText;`。 */
  readonly WindowText = 'flood-color:WindowText;';
  /** CSS 声明：`flood-color:aliceblue;`。 */
  readonly aliceblue = 'flood-color:aliceblue;';
  /** CSS 声明：`flood-color:antiquewhite;`。 */
  readonly antiquewhite = 'flood-color:antiquewhite;';
  /** CSS 声明：`flood-color:aqua;`。 */
  readonly aqua = 'flood-color:aqua;';
  /** CSS 声明：`flood-color:aquamarine;`。 */
  readonly aquamarine = 'flood-color:aquamarine;';
  /** CSS 声明：`flood-color:azure;`。 */
  readonly azure = 'flood-color:azure;';
  /** CSS 声明：`flood-color:beige;`。 */
  readonly beige = 'flood-color:beige;';
  /** CSS 声明：`flood-color:bisque;`。 */
  readonly bisque = 'flood-color:bisque;';
  /** CSS 声明：`flood-color:black;`。 */
  readonly black = 'flood-color:black;';
  /** CSS 声明：`flood-color:blanchedalmond;`。 */
  readonly blanchedalmond = 'flood-color:blanchedalmond;';
  /** CSS 声明：`flood-color:blue;`。 */
  readonly blue = 'flood-color:blue;';
  /** CSS 声明：`flood-color:blueviolet;`。 */
  readonly blueviolet = 'flood-color:blueviolet;';
  /** CSS 声明：`flood-color:brown;`。 */
  readonly brown = 'flood-color:brown;';
  /** CSS 声明：`flood-color:burlywood;`。 */
  readonly burlywood = 'flood-color:burlywood;';
  /** CSS 声明：`flood-color:cadetblue;`。 */
  readonly cadetblue = 'flood-color:cadetblue;';
  /** CSS 声明：`flood-color:chartreuse;`。 */
  readonly chartreuse = 'flood-color:chartreuse;';
  /** CSS 声明：`flood-color:chocolate;`。 */
  readonly chocolate = 'flood-color:chocolate;';
  /** CSS 声明：`flood-color:coral;`。 */
  readonly coral = 'flood-color:coral;';
  /** CSS 声明：`flood-color:cornflowerblue;`。 */
  readonly cornflowerblue = 'flood-color:cornflowerblue;';
  /** CSS 声明：`flood-color:cornsilk;`。 */
  readonly cornsilk = 'flood-color:cornsilk;';
  /** CSS 声明：`flood-color:crimson;`。 */
  readonly crimson = 'flood-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`flood-color:currentColor;`。
   */
  readonly currentColor = 'flood-color:currentColor;';
  /** CSS 声明：`flood-color:cyan;`。 */
  readonly cyan = 'flood-color:cyan;';
  /** CSS 声明：`flood-color:darkblue;`。 */
  readonly darkblue = 'flood-color:darkblue;';
  /** CSS 声明：`flood-color:darkcyan;`。 */
  readonly darkcyan = 'flood-color:darkcyan;';
  /** CSS 声明：`flood-color:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'flood-color:darkgoldenrod;';
  /** CSS 声明：`flood-color:darkgray;`。 */
  readonly darkgray = 'flood-color:darkgray;';
  /** CSS 声明：`flood-color:darkgreen;`。 */
  readonly darkgreen = 'flood-color:darkgreen;';
  /** CSS 声明：`flood-color:darkgrey;`。 */
  readonly darkgrey = 'flood-color:darkgrey;';
  /** CSS 声明：`flood-color:darkkhaki;`。 */
  readonly darkkhaki = 'flood-color:darkkhaki;';
  /** CSS 声明：`flood-color:darkmagenta;`。 */
  readonly darkmagenta = 'flood-color:darkmagenta;';
  /** CSS 声明：`flood-color:darkolivegreen;`。 */
  readonly darkolivegreen = 'flood-color:darkolivegreen;';
  /** CSS 声明：`flood-color:darkorange;`。 */
  readonly darkorange = 'flood-color:darkorange;';
  /** CSS 声明：`flood-color:darkorchid;`。 */
  readonly darkorchid = 'flood-color:darkorchid;';
  /** CSS 声明：`flood-color:darkred;`。 */
  readonly darkred = 'flood-color:darkred;';
  /** CSS 声明：`flood-color:darksalmon;`。 */
  readonly darksalmon = 'flood-color:darksalmon;';
  /** CSS 声明：`flood-color:darkseagreen;`。 */
  readonly darkseagreen = 'flood-color:darkseagreen;';
  /** CSS 声明：`flood-color:darkslateblue;`。 */
  readonly darkslateblue = 'flood-color:darkslateblue;';
  /** CSS 声明：`flood-color:darkslategray;`。 */
  readonly darkslategray = 'flood-color:darkslategray;';
  /** CSS 声明：`flood-color:darkslategrey;`。 */
  readonly darkslategrey = 'flood-color:darkslategrey;';
  /** CSS 声明：`flood-color:darkturquoise;`。 */
  readonly darkturquoise = 'flood-color:darkturquoise;';
  /** CSS 声明：`flood-color:darkviolet;`。 */
  readonly darkviolet = 'flood-color:darkviolet;';
  /** CSS 声明：`flood-color:deeppink;`。 */
  readonly deeppink = 'flood-color:deeppink;';
  /** CSS 声明：`flood-color:deepskyblue;`。 */
  readonly deepskyblue = 'flood-color:deepskyblue;';
  /** CSS 声明：`flood-color:dimgray;`。 */
  readonly dimgray = 'flood-color:dimgray;';
  /** CSS 声明：`flood-color:dimgrey;`。 */
  readonly dimgrey = 'flood-color:dimgrey;';
  /** CSS 声明：`flood-color:dodgerblue;`。 */
  readonly dodgerblue = 'flood-color:dodgerblue;';
  /** CSS 声明：`flood-color:firebrick;`。 */
  readonly firebrick = 'flood-color:firebrick;';
  /** CSS 声明：`flood-color:floralwhite;`。 */
  readonly floralwhite = 'flood-color:floralwhite;';
  /** CSS 声明：`flood-color:forestgreen;`。 */
  readonly forestgreen = 'flood-color:forestgreen;';
  /** CSS 声明：`flood-color:fuchsia;`。 */
  readonly fuchsia = 'flood-color:fuchsia;';
  /** CSS 声明：`flood-color:gainsboro;`。 */
  readonly gainsboro = 'flood-color:gainsboro;';
  /** CSS 声明：`flood-color:ghostwhite;`。 */
  readonly ghostwhite = 'flood-color:ghostwhite;';
  /** CSS 声明：`flood-color:gold;`。 */
  readonly gold = 'flood-color:gold;';
  /** CSS 声明：`flood-color:goldenrod;`。 */
  readonly goldenrod = 'flood-color:goldenrod;';
  /** CSS 声明：`flood-color:gray;`。 */
  readonly gray = 'flood-color:gray;';
  /** CSS 声明：`flood-color:green;`。 */
  readonly green = 'flood-color:green;';
  /** CSS 声明：`flood-color:greenyellow;`。 */
  readonly greenyellow = 'flood-color:greenyellow;';
  /** CSS 声明：`flood-color:grey;`。 */
  readonly grey = 'flood-color:grey;';
  /** CSS 声明：`flood-color:honeydew;`。 */
  readonly honeydew = 'flood-color:honeydew;';
  /** CSS 声明：`flood-color:hotpink;`。 */
  readonly hotpink = 'flood-color:hotpink;';
  /** CSS 声明：`flood-color:indianred;`。 */
  readonly indianred = 'flood-color:indianred;';
  /** CSS 声明：`flood-color:indigo;`。 */
  readonly indigo = 'flood-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`flood-color:inherit;`。
   */
  readonly inherit = 'flood-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flood-color:initial;`。
   */
  readonly initial = 'flood-color:initial;';
  /** CSS 声明：`flood-color:ivory;`。 */
  readonly ivory = 'flood-color:ivory;';
  /** CSS 声明：`flood-color:khaki;`。 */
  readonly khaki = 'flood-color:khaki;';
  /** CSS 声明：`flood-color:lavender;`。 */
  readonly lavender = 'flood-color:lavender;';
  /** CSS 声明：`flood-color:lavenderblush;`。 */
  readonly lavenderblush = 'flood-color:lavenderblush;';
  /** CSS 声明：`flood-color:lawngreen;`。 */
  readonly lawngreen = 'flood-color:lawngreen;';
  /** CSS 声明：`flood-color:lemonchiffon;`。 */
  readonly lemonchiffon = 'flood-color:lemonchiffon;';
  /** CSS 声明：`flood-color:lightblue;`。 */
  readonly lightblue = 'flood-color:lightblue;';
  /** CSS 声明：`flood-color:lightcoral;`。 */
  readonly lightcoral = 'flood-color:lightcoral;';
  /** CSS 声明：`flood-color:lightcyan;`。 */
  readonly lightcyan = 'flood-color:lightcyan;';
  /** CSS 声明：`flood-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'flood-color:lightgoldenrodyellow;';
  /** CSS 声明：`flood-color:lightgray;`。 */
  readonly lightgray = 'flood-color:lightgray;';
  /** CSS 声明：`flood-color:lightgreen;`。 */
  readonly lightgreen = 'flood-color:lightgreen;';
  /** CSS 声明：`flood-color:lightgrey;`。 */
  readonly lightgrey = 'flood-color:lightgrey;';
  /** CSS 声明：`flood-color:lightpink;`。 */
  readonly lightpink = 'flood-color:lightpink;';
  /** CSS 声明：`flood-color:lightsalmon;`。 */
  readonly lightsalmon = 'flood-color:lightsalmon;';
  /** CSS 声明：`flood-color:lightseagreen;`。 */
  readonly lightseagreen = 'flood-color:lightseagreen;';
  /** CSS 声明：`flood-color:lightskyblue;`。 */
  readonly lightskyblue = 'flood-color:lightskyblue;';
  /** CSS 声明：`flood-color:lightslategray;`。 */
  readonly lightslategray = 'flood-color:lightslategray;';
  /** CSS 声明：`flood-color:lightslategrey;`。 */
  readonly lightslategrey = 'flood-color:lightslategrey;';
  /** CSS 声明：`flood-color:lightsteelblue;`。 */
  readonly lightsteelblue = 'flood-color:lightsteelblue;';
  /** CSS 声明：`flood-color:lightyellow;`。 */
  readonly lightyellow = 'flood-color:lightyellow;';
  /** CSS 声明：`flood-color:lime;`。 */
  readonly lime = 'flood-color:lime;';
  /** CSS 声明：`flood-color:limegreen;`。 */
  readonly limegreen = 'flood-color:limegreen;';
  /** CSS 声明：`flood-color:linen;`。 */
  readonly linen = 'flood-color:linen;';
  /** CSS 声明：`flood-color:magenta;`。 */
  readonly magenta = 'flood-color:magenta;';
  /** CSS 声明：`flood-color:maroon;`。 */
  readonly maroon = 'flood-color:maroon;';
  /** CSS 声明：`flood-color:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'flood-color:mediumaquamarine;';
  /** CSS 声明：`flood-color:mediumblue;`。 */
  readonly mediumblue = 'flood-color:mediumblue;';
  /** CSS 声明：`flood-color:mediumorchid;`。 */
  readonly mediumorchid = 'flood-color:mediumorchid;';
  /** CSS 声明：`flood-color:mediumpurple;`。 */
  readonly mediumpurple = 'flood-color:mediumpurple;';
  /** CSS 声明：`flood-color:mediumseagreen;`。 */
  readonly mediumseagreen = 'flood-color:mediumseagreen;';
  /** CSS 声明：`flood-color:mediumslateblue;`。 */
  readonly mediumslateblue = 'flood-color:mediumslateblue;';
  /** CSS 声明：`flood-color:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'flood-color:mediumspringgreen;';
  /** CSS 声明：`flood-color:mediumturquoise;`。 */
  readonly mediumturquoise = 'flood-color:mediumturquoise;';
  /** CSS 声明：`flood-color:mediumvioletred;`。 */
  readonly mediumvioletred = 'flood-color:mediumvioletred;';
  /** CSS 声明：`flood-color:midnightblue;`。 */
  readonly midnightblue = 'flood-color:midnightblue;';
  /** CSS 声明：`flood-color:mintcream;`。 */
  readonly mintcream = 'flood-color:mintcream;';
  /** CSS 声明：`flood-color:mistyrose;`。 */
  readonly mistyrose = 'flood-color:mistyrose;';
  /** CSS 声明：`flood-color:moccasin;`。 */
  readonly moccasin = 'flood-color:moccasin;';
  /** CSS 声明：`flood-color:navajowhite;`。 */
  readonly navajowhite = 'flood-color:navajowhite;';
  /** CSS 声明：`flood-color:navy;`。 */
  readonly navy = 'flood-color:navy;';
  /** CSS 声明：`flood-color:oldlace;`。 */
  readonly oldlace = 'flood-color:oldlace;';
  /** CSS 声明：`flood-color:olive;`。 */
  readonly olive = 'flood-color:olive;';
  /** CSS 声明：`flood-color:olivedrab;`。 */
  readonly olivedrab = 'flood-color:olivedrab;';
  /** CSS 声明：`flood-color:orange;`。 */
  readonly orange = 'flood-color:orange;';
  /** CSS 声明：`flood-color:orangered;`。 */
  readonly orangered = 'flood-color:orangered;';
  /** CSS 声明：`flood-color:orchid;`。 */
  readonly orchid = 'flood-color:orchid;';
  /** CSS 声明：`flood-color:palegoldenrod;`。 */
  readonly palegoldenrod = 'flood-color:palegoldenrod;';
  /** CSS 声明：`flood-color:palegreen;`。 */
  readonly palegreen = 'flood-color:palegreen;';
  /** CSS 声明：`flood-color:paleturquoise;`。 */
  readonly paleturquoise = 'flood-color:paleturquoise;';
  /** CSS 声明：`flood-color:palevioletred;`。 */
  readonly palevioletred = 'flood-color:palevioletred;';
  /** CSS 声明：`flood-color:papayawhip;`。 */
  readonly papayawhip = 'flood-color:papayawhip;';
  /** CSS 声明：`flood-color:peachpuff;`。 */
  readonly peachpuff = 'flood-color:peachpuff;';
  /** CSS 声明：`flood-color:peru;`。 */
  readonly peru = 'flood-color:peru;';
  /** CSS 声明：`flood-color:pink;`。 */
  readonly pink = 'flood-color:pink;';
  /** CSS 声明：`flood-color:plum;`。 */
  readonly plum = 'flood-color:plum;';
  /** CSS 声明：`flood-color:powderblue;`。 */
  readonly powderblue = 'flood-color:powderblue;';
  /** CSS 声明：`flood-color:purple;`。 */
  readonly purple = 'flood-color:purple;';
  /** CSS 声明：`flood-color:rebeccapurple;`。 */
  readonly rebeccapurple = 'flood-color:rebeccapurple;';
  /** CSS 声明：`flood-color:red;`。 */
  readonly red = 'flood-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flood-color:revert;`。
   */
  readonly revert = 'flood-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flood-color:revert-layer;`。
   */
  readonly revertLayer = 'flood-color:revert-layer;';
  /** CSS 声明：`flood-color:rosybrown;`。 */
  readonly rosybrown = 'flood-color:rosybrown;';
  /** CSS 声明：`flood-color:royalblue;`。 */
  readonly royalblue = 'flood-color:royalblue;';
  /** CSS 声明：`flood-color:saddlebrown;`。 */
  readonly saddlebrown = 'flood-color:saddlebrown;';
  /** CSS 声明：`flood-color:salmon;`。 */
  readonly salmon = 'flood-color:salmon;';
  /** CSS 声明：`flood-color:sandybrown;`。 */
  readonly sandybrown = 'flood-color:sandybrown;';
  /** CSS 声明：`flood-color:seagreen;`。 */
  readonly seagreen = 'flood-color:seagreen;';
  /** CSS 声明：`flood-color:seashell;`。 */
  readonly seashell = 'flood-color:seashell;';
  /** CSS 声明：`flood-color:sienna;`。 */
  readonly sienna = 'flood-color:sienna;';
  /** CSS 声明：`flood-color:silver;`。 */
  readonly silver = 'flood-color:silver;';
  /** CSS 声明：`flood-color:skyblue;`。 */
  readonly skyblue = 'flood-color:skyblue;';
  /** CSS 声明：`flood-color:slateblue;`。 */
  readonly slateblue = 'flood-color:slateblue;';
  /** CSS 声明：`flood-color:slategray;`。 */
  readonly slategray = 'flood-color:slategray;';
  /** CSS 声明：`flood-color:slategrey;`。 */
  readonly slategrey = 'flood-color:slategrey;';
  /** CSS 声明：`flood-color:snow;`。 */
  readonly snow = 'flood-color:snow;';
  /** CSS 声明：`flood-color:springgreen;`。 */
  readonly springgreen = 'flood-color:springgreen;';
  /** CSS 声明：`flood-color:steelblue;`。 */
  readonly steelblue = 'flood-color:steelblue;';
  /** CSS 声明：`flood-color:tan;`。 */
  readonly tan = 'flood-color:tan;';
  /** CSS 声明：`flood-color:teal;`。 */
  readonly teal = 'flood-color:teal;';
  /** CSS 声明：`flood-color:thistle;`。 */
  readonly thistle = 'flood-color:thistle;';
  /** CSS 声明：`flood-color:tomato;`。 */
  readonly tomato = 'flood-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`flood-color:transparent;`。
   */
  readonly transparent = 'flood-color:transparent;';
  /** CSS 声明：`flood-color:turquoise;`。 */
  readonly turquoise = 'flood-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flood-color:unset;`。
   */
  readonly unset = 'flood-color:unset;';
  /** CSS 声明：`flood-color:violet;`。 */
  readonly violet = 'flood-color:violet;';
  /** CSS 声明：`flood-color:wheat;`。 */
  readonly wheat = 'flood-color:wheat;';
  /** CSS 声明：`flood-color:white;`。 */
  readonly white = 'flood-color:white;';
  /** CSS 声明：`flood-color:whitesmoke;`。 */
  readonly whitesmoke = 'flood-color:whitesmoke;';
  /** CSS 声明：`flood-color:yellow;`。 */
  readonly yellow = 'flood-color:yellow;';
  /** CSS 声明：`flood-color:yellowgreen;`。 */
  readonly yellowgreen = 'flood-color:yellowgreen;';
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
 * 设置 SVG 洪泛滤镜颜色的不透明度。（flood-opacity）
 *
 * CSS 语法：`<'opacity'>`。
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
  readonly inherit = 'flood-opacity:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`flood-opacity:initial;`。
   */
  readonly initial = 'flood-opacity:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`flood-opacity:revert;`。
   */
  readonly revert = 'flood-opacity:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`flood-opacity:revert-layer;`。
   */
  readonly revertLayer = 'flood-opacity:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`flood-opacity:unset;`。
   */
  readonly unset = 'flood-opacity:unset;';
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
 * 集中设置字体样式、粗细、大小、行高和字体族等信息。（font）
 *
 * CSS 语法：`[ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name>`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
 */
export class FontCss extends CssProperty {
  /** CSS 声明：`font:caption;`。 */
  readonly caption = 'font:caption;';
  /** CSS 声明：`font:icon;`。 */
  readonly icon = 'font:icon;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font:inherit;`。
   */
  readonly inherit = 'font:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font:initial;`。
   */
  readonly initial = 'font:initial;';
  /** CSS 声明：`font:menu;`。 */
  readonly menu = 'font:menu;';
  /** CSS 声明：`font:message-box;`。 */
  readonly messageBox = 'font:message-box;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font:revert;`。
   */
  readonly revert = 'font:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font:revert-layer;`。
   */
  readonly revertLayer = 'font:revert-layer;';
  /** CSS 声明：`font:small-caption;`。 */
  readonly smallCaption = 'font:small-caption;';
  /** CSS 声明：`font:status-bar;`。 */
  readonly statusBar = 'font:status-bar;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font:unset;`。
   */
  readonly unset = 'font:unset;';
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
 * 设置按优先级排列的字体族及通用字体回退。（font-family）
 *
 * CSS 语法：`[ <family-name> | <generic-family> ]#`。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
 */
export class FontFamilyCss extends CssProperty {
  /** CSS 声明：`font-family:-apple-system;`。 */
  readonly AppleSystem = 'font-family:-apple-system;';
  /** CSS 声明：`font-family:cursive;`。 */
  readonly cursive = 'font-family:cursive;';
  /** CSS 声明：`font-family:emoji;`。 */
  readonly emoji = 'font-family:emoji;';
  /** CSS 声明：`font-family:fangsong;`。 */
  readonly fangsong = 'font-family:fangsong;';
  /** CSS 声明：`font-family:fantasy;`。 */
  readonly fantasy = 'font-family:fantasy;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-family:inherit;`。
   */
  readonly inherit = 'font-family:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-family:initial;`。
   */
  readonly initial = 'font-family:initial;';
  /** CSS 声明：`font-family:math;`。 */
  readonly math = 'font-family:math;';
  /** CSS 声明：`font-family:monospace;`。 */
  readonly monospace = 'font-family:monospace;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-family:revert;`。
   */
  readonly revert = 'font-family:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-family:revert-layer;`。
   */
  readonly revertLayer = 'font-family:revert-layer;';
  /** CSS 声明：`font-family:sans-serif;`。 */
  readonly sansSerif = 'font-family:sans-serif;';
  /** CSS 声明：`font-family:serif;`。 */
  readonly serif = 'font-family:serif;';
  /** CSS 声明：`font-family:system-ui;`。 */
  readonly systemUi = 'font-family:system-ui;';
  /** CSS 声明：`font-family:ui-monospace;`。 */
  readonly uiMonospace = 'font-family:ui-monospace;';
  /** CSS 声明：`font-family:ui-rounded;`。 */
  readonly uiRounded = 'font-family:ui-rounded;';
  /** CSS 声明：`font-family:ui-sans-serif;`。 */
  readonly uiSansSerif = 'font-family:ui-sans-serif;';
  /** CSS 声明：`font-family:ui-serif;`。 */
  readonly uiSerif = 'font-family:ui-serif;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-family:unset;`。
   */
  readonly unset = 'font-family:unset;';
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
 * 通过 OpenType 特性标签控制字体的底层排版功能。（font-feature-settings）
 *
 * CSS 语法：`normal | <feature-tag-value>#`。
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
  readonly inherit = 'font-feature-settings:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-feature-settings:initial;`。
   */
  readonly initial = 'font-feature-settings:initial;';
  /** CSS 声明：`font-feature-settings:normal;`。 */
  readonly normal = 'font-feature-settings:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-feature-settings:revert;`。
   */
  readonly revert = 'font-feature-settings:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-feature-settings:revert-layer;`。
   */
  readonly revertLayer = 'font-feature-settings:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-feature-settings:unset;`。
   */
  readonly unset = 'font-feature-settings:unset;';
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
 * 设置是否应用字体提供的字偶间距调整。（font-kerning）
 *
 * CSS 语法：`auto | normal | none`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
 */
export class FontKerningCss extends CssProperty {
  /** CSS 声明：`font-kerning:auto;`。 */
  readonly auto = 'font-kerning:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-kerning:inherit;`。
   */
  readonly inherit = 'font-kerning:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-kerning:initial;`。
   */
  readonly initial = 'font-kerning:initial;';
  /** CSS 声明：`font-kerning:none;`。 */
  readonly none = 'font-kerning:none;';
  /** CSS 声明：`font-kerning:normal;`。 */
  readonly normal = 'font-kerning:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-kerning:revert;`。
   */
  readonly revert = 'font-kerning:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-kerning:revert-layer;`。
   */
  readonly revertLayer = 'font-kerning:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-kerning:unset;`。
   */
  readonly unset = 'font-kerning:unset;';
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
 * 覆盖字体排版使用的语言系统标签，不改变文本实际语言。（font-language-override）
 *
 * CSS 语法：`normal | <string>`。
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
  readonly inherit = 'font-language-override:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-language-override:initial;`。
   */
  readonly initial = 'font-language-override:initial;';
  /** CSS 声明：`font-language-override:normal;`。 */
  readonly normal = 'font-language-override:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-language-override:revert;`。
   */
  readonly revert = 'font-language-override:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-language-override:revert-layer;`。
   */
  readonly revertLayer = 'font-language-override:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-language-override:unset;`。
   */
  readonly unset = 'font-language-override:unset;';
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
 * 控制支持光学尺寸轴的字体是否按字号优化字形。（font-optical-sizing）
 *
 * CSS 语法：`auto | none`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
 */
export class FontOpticalSizingCss extends CssProperty {
  /** CSS 声明：`font-optical-sizing:auto;`。 */
  readonly auto = 'font-optical-sizing:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-optical-sizing:inherit;`。
   */
  readonly inherit = 'font-optical-sizing:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-optical-sizing:initial;`。
   */
  readonly initial = 'font-optical-sizing:initial;';
  /** CSS 声明：`font-optical-sizing:none;`。 */
  readonly none = 'font-optical-sizing:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-optical-sizing:revert;`。
   */
  readonly revert = 'font-optical-sizing:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-optical-sizing:revert-layer;`。
   */
  readonly revertLayer = 'font-optical-sizing:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-optical-sizing:unset;`。
   */
  readonly unset = 'font-optical-sizing:unset;';
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
 * 选择或覆盖彩色字体使用的调色板。（font-palette）
 *
 * CSS 语法：`normal | light | dark | <palette-identifier> | <palette-mix()>`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
 */
export class FontPaletteCss extends CssProperty {
  /** CSS 声明：`font-palette:dark;`。 */
  readonly dark = 'font-palette:dark;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-palette:inherit;`。
   */
  readonly inherit = 'font-palette:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-palette:initial;`。
   */
  readonly initial = 'font-palette:initial;';
  /** CSS 声明：`font-palette:light;`。 */
  readonly light = 'font-palette:light;';
  /** CSS 声明：`font-palette:normal;`。 */
  readonly normal = 'font-palette:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-palette:revert;`。
   */
  readonly revert = 'font-palette:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-palette:revert-layer;`。
   */
  readonly revertLayer = 'font-palette:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-palette:unset;`。
   */
  readonly unset = 'font-palette:unset;';
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
 * 设置字体大小，也影响 em 等相对单位的计算。（font-size）
 *
 * CSS 语法：`<absolute-size> | <relative-size> | <length-percentage [0,∞]> | math`。
 *
 * CSS 初始值：`medium`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
 */
export class FontSizeCss extends LengthCssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-size:inherit;`。
   */
  readonly inherit = 'font-size:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-size:initial;`。
   */
  readonly initial = 'font-size:initial;';
  /** CSS 声明：`font-size:large;`。 */
  readonly large = 'font-size:large;';
  /** CSS 声明：`font-size:larger;`。 */
  readonly larger = 'font-size:larger;';
  /** CSS 声明：`font-size:math;`。 */
  readonly math = 'font-size:math;';
  /** CSS 声明：`font-size:medium;`。 */
  readonly medium = 'font-size:medium;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-size:revert;`。
   */
  readonly revert = 'font-size:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-size:revert-layer;`。
   */
  readonly revertLayer = 'font-size:revert-layer;';
  /** CSS 声明：`font-size:small;`。 */
  readonly small = 'font-size:small;';
  /** CSS 声明：`font-size:smaller;`。 */
  readonly smaller = 'font-size:smaller;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-size:unset;`。
   */
  readonly unset = 'font-size:unset;';
  /** CSS 声明：`font-size:x-large;`。 */
  readonly xLarge = 'font-size:x-large;';
  /** CSS 声明：`font-size:x-small;`。 */
  readonly xSmall = 'font-size:x-small;';
  /** CSS 声明：`font-size:xx-large;`。 */
  readonly xxLarge = 'font-size:xx-large;';
  /** CSS 声明：`font-size:xx-small;`。 */
  readonly xxSmall = 'font-size:xx-small;';
  /** CSS 声明：`font-size:xxx-large;`。 */
  readonly xxxLarge = 'font-size:xxx-large;';
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
 * 按字体特征尺寸调整字号，减少字体回退造成的视觉变化。（font-size-adjust）
 *
 * CSS 语法：`none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
 */
export class FontSizeAdjustCss extends CssProperty {
  /** CSS 声明：`font-size-adjust:from-font;`。 */
  readonly fromFont = 'font-size-adjust:from-font;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-size-adjust:inherit;`。
   */
  readonly inherit = 'font-size-adjust:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-size-adjust:initial;`。
   */
  readonly initial = 'font-size-adjust:initial;';
  /** CSS 声明：`font-size-adjust:none;`。 */
  readonly none = 'font-size-adjust:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-size-adjust:revert;`。
   */
  readonly revert = 'font-size-adjust:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-size-adjust:revert-layer;`。
   */
  readonly revertLayer = 'font-size-adjust:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-size-adjust:unset;`。
   */
  readonly unset = 'font-size-adjust:unset;';
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
 * 控制字体平滑的非标准属性；使用前核对目标浏览器。（font-smooth）
 *
 * CSS 语法：`auto | never | always | <absolute-size> | <length>`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
 */
export class FontSmoothCss extends LengthCssProperty {
  /** CSS 声明：`font-smooth:always;`。 */
  readonly always = 'font-smooth:always;';
  /** CSS 声明：`font-smooth:auto;`。 */
  readonly auto = 'font-smooth:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-smooth:inherit;`。
   */
  readonly inherit = 'font-smooth:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-smooth:initial;`。
   */
  readonly initial = 'font-smooth:initial;';
  /** CSS 声明：`font-smooth:large;`。 */
  readonly large = 'font-smooth:large;';
  /** CSS 声明：`font-smooth:medium;`。 */
  readonly medium = 'font-smooth:medium;';
  /** CSS 声明：`font-smooth:never;`。 */
  readonly never = 'font-smooth:never;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-smooth:revert;`。
   */
  readonly revert = 'font-smooth:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-smooth:revert-layer;`。
   */
  readonly revertLayer = 'font-smooth:revert-layer;';
  /** CSS 声明：`font-smooth:small;`。 */
  readonly small = 'font-smooth:small;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-smooth:unset;`。
   */
  readonly unset = 'font-smooth:unset;';
  /** CSS 声明：`font-smooth:x-large;`。 */
  readonly xLarge = 'font-smooth:x-large;';
  /** CSS 声明：`font-smooth:x-small;`。 */
  readonly xSmall = 'font-smooth:x-small;';
  /** CSS 声明：`font-smooth:xx-large;`。 */
  readonly xxLarge = 'font-smooth:xx-large;';
  /** CSS 声明：`font-smooth:xx-small;`。 */
  readonly xxSmall = 'font-smooth:xx-small;';
  /** CSS 声明：`font-smooth:xxx-large;`。 */
  readonly xxxLarge = 'font-smooth:xxx-large;';
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
 * 选择字体的宽窄字面；font-width 是其较新的名称。（font-stretch）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
 */
export class FontStretchCss extends CssProperty {
  /** CSS 声明：`font-stretch:condensed;`。 */
  readonly condensed = 'font-stretch:condensed;';
  /** CSS 声明：`font-stretch:expanded;`。 */
  readonly expanded = 'font-stretch:expanded;';
  /** CSS 声明：`font-stretch:extra-condensed;`。 */
  readonly extraCondensed = 'font-stretch:extra-condensed;';
  /** CSS 声明：`font-stretch:extra-expanded;`。 */
  readonly extraExpanded = 'font-stretch:extra-expanded;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-stretch:inherit;`。
   */
  readonly inherit = 'font-stretch:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-stretch:initial;`。
   */
  readonly initial = 'font-stretch:initial;';
  /** CSS 声明：`font-stretch:normal;`。 */
  readonly normal = 'font-stretch:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-stretch:revert;`。
   */
  readonly revert = 'font-stretch:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-stretch:revert-layer;`。
   */
  readonly revertLayer = 'font-stretch:revert-layer;';
  /** CSS 声明：`font-stretch:semi-condensed;`。 */
  readonly semiCondensed = 'font-stretch:semi-condensed;';
  /** CSS 声明：`font-stretch:semi-expanded;`。 */
  readonly semiExpanded = 'font-stretch:semi-expanded;';
  /** CSS 声明：`font-stretch:ultra-condensed;`。 */
  readonly ultraCondensed = 'font-stretch:ultra-condensed;';
  /** CSS 声明：`font-stretch:ultra-expanded;`。 */
  readonly ultraExpanded = 'font-stretch:ultra-expanded;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-stretch:unset;`。
   */
  readonly unset = 'font-stretch:unset;';
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
 * 选择正常、斜体或倾斜字体样式。（font-style）
 *
 * CSS 语法：`normal | italic | oblique <angle>?`。
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
  readonly inherit = 'font-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-style:initial;`。
   */
  readonly initial = 'font-style:initial;';
  /** CSS 声明：`font-style:italic;`。 */
  readonly italic = 'font-style:italic;';
  /** CSS 声明：`font-style:normal;`。 */
  readonly normal = 'font-style:normal;';
  /** CSS 声明：`font-style:oblique;`。 */
  readonly oblique = 'font-style:oblique;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-style:revert;`。
   */
  readonly revert = 'font-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-style:revert-layer;`。
   */
  readonly revertLayer = 'font-style:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-style:unset;`。
   */
  readonly unset = 'font-style:unset;';
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
 * 控制缺少真实字体字形时浏览器可否合成粗体、斜体等样式。（font-synthesis）
 *
 * CSS 语法：`none | [ weight || style || small-caps || position]`。
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
  readonly inherit = 'font-synthesis:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis:initial;`。
   */
  readonly initial = 'font-synthesis:initial;';
  /** CSS 声明：`font-synthesis:none;`。 */
  readonly none = 'font-synthesis:none;';
  /** CSS 声明：`font-synthesis:position;`。 */
  readonly position = 'font-synthesis:position;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis:revert;`。
   */
  readonly revert = 'font-synthesis:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis:revert-layer;`。
   */
  readonly revertLayer = 'font-synthesis:revert-layer;';
  /** CSS 声明：`font-synthesis:small-caps;`。 */
  readonly smallCaps = 'font-synthesis:small-caps;';
  /** CSS 声明：`font-synthesis:style;`。 */
  readonly style = 'font-synthesis:style;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis:unset;`。
   */
  readonly unset = 'font-synthesis:unset;';
  /** CSS 声明：`font-synthesis:weight;`。 */
  readonly weight = 'font-synthesis:weight;';
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
 * 控制浏览器是否可以合成上标和下标字形。（font-synthesis-position）
 *
 * CSS 语法：`auto | none`。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
 */
export class FontSynthesisPositionCss extends CssProperty {
  /** CSS 声明：`font-synthesis-position:auto;`。 */
  readonly auto = 'font-synthesis-position:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-position:inherit;`。
   */
  readonly inherit = 'font-synthesis-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-position:initial;`。
   */
  readonly initial = 'font-synthesis-position:initial;';
  /** CSS 声明：`font-synthesis-position:none;`。 */
  readonly none = 'font-synthesis-position:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-position:revert;`。
   */
  readonly revert = 'font-synthesis-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-position:revert-layer;`。
   */
  readonly revertLayer = 'font-synthesis-position:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-position:unset;`。
   */
  readonly unset = 'font-synthesis-position:unset;';
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
 * 控制浏览器是否可以合成小型大写字形。（font-synthesis-small-caps）
 *
 * CSS 语法：`auto | none`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
 */
export class FontSynthesisSmallCapsCss extends CssProperty {
  /** CSS 声明：`font-synthesis-small-caps:auto;`。 */
  readonly auto = 'font-synthesis-small-caps:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-small-caps:inherit;`。
   */
  readonly inherit = 'font-synthesis-small-caps:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-small-caps:initial;`。
   */
  readonly initial = 'font-synthesis-small-caps:initial;';
  /** CSS 声明：`font-synthesis-small-caps:none;`。 */
  readonly none = 'font-synthesis-small-caps:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-small-caps:revert;`。
   */
  readonly revert = 'font-synthesis-small-caps:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-small-caps:revert-layer;`。
   */
  readonly revertLayer = 'font-synthesis-small-caps:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-small-caps:unset;`。
   */
  readonly unset = 'font-synthesis-small-caps:unset;';
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
 * 控制浏览器是否可以合成倾斜字体。（font-synthesis-style）
 *
 * CSS 语法：`auto | none`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
 */
export class FontSynthesisStyleCss extends CssProperty {
  /** CSS 声明：`font-synthesis-style:auto;`。 */
  readonly auto = 'font-synthesis-style:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-style:inherit;`。
   */
  readonly inherit = 'font-synthesis-style:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-style:initial;`。
   */
  readonly initial = 'font-synthesis-style:initial;';
  /** CSS 声明：`font-synthesis-style:none;`。 */
  readonly none = 'font-synthesis-style:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-style:revert;`。
   */
  readonly revert = 'font-synthesis-style:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-style:revert-layer;`。
   */
  readonly revertLayer = 'font-synthesis-style:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-style:unset;`。
   */
  readonly unset = 'font-synthesis-style:unset;';
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
 * 控制浏览器是否可以合成加粗字体。（font-synthesis-weight）
 *
 * CSS 语法：`auto | none`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
 */
export class FontSynthesisWeightCss extends CssProperty {
  /** CSS 声明：`font-synthesis-weight:auto;`。 */
  readonly auto = 'font-synthesis-weight:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-synthesis-weight:inherit;`。
   */
  readonly inherit = 'font-synthesis-weight:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-synthesis-weight:initial;`。
   */
  readonly initial = 'font-synthesis-weight:initial;';
  /** CSS 声明：`font-synthesis-weight:none;`。 */
  readonly none = 'font-synthesis-weight:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-synthesis-weight:revert;`。
   */
  readonly revert = 'font-synthesis-weight:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-synthesis-weight:revert-layer;`。
   */
  readonly revertLayer = 'font-synthesis-weight:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-synthesis-weight:unset;`。
   */
  readonly unset = 'font-synthesis-weight:unset;';
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
 * 集中设置字体的连字、大小写、数字及其他变体。（font-variant）
 *
 * CSS 语法：`normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
 */
export class FontVariantCss extends CssProperty {
  /** CSS 声明：`font-variant:all-petite-caps;`。 */
  readonly allPetiteCaps = 'font-variant:all-petite-caps;';
  /** CSS 声明：`font-variant:all-small-caps;`。 */
  readonly allSmallCaps = 'font-variant:all-small-caps;';
  /** CSS 声明：`font-variant:common-ligatures;`。 */
  readonly commonLigatures = 'font-variant:common-ligatures;';
  /** CSS 声明：`font-variant:contextual;`。 */
  readonly contextual = 'font-variant:contextual;';
  /** CSS 声明：`font-variant:diagonal-fractions;`。 */
  readonly diagonalFractions = 'font-variant:diagonal-fractions;';
  /** CSS 声明：`font-variant:discretionary-ligatures;`。 */
  readonly discretionaryLigatures = 'font-variant:discretionary-ligatures;';
  /** CSS 声明：`font-variant:full-width;`。 */
  readonly fullWidth = 'font-variant:full-width;';
  /** CSS 声明：`font-variant:historical-forms;`。 */
  readonly historicalForms = 'font-variant:historical-forms;';
  /** CSS 声明：`font-variant:historical-ligatures;`。 */
  readonly historicalLigatures = 'font-variant:historical-ligatures;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant:inherit;`。
   */
  readonly inherit = 'font-variant:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant:initial;`。
   */
  readonly initial = 'font-variant:initial;';
  /** CSS 声明：`font-variant:jis04;`。 */
  readonly jis04 = 'font-variant:jis04;';
  /** CSS 声明：`font-variant:jis78;`。 */
  readonly jis78 = 'font-variant:jis78;';
  /** CSS 声明：`font-variant:jis83;`。 */
  readonly jis83 = 'font-variant:jis83;';
  /** CSS 声明：`font-variant:jis90;`。 */
  readonly jis90 = 'font-variant:jis90;';
  /** CSS 声明：`font-variant:lining-nums;`。 */
  readonly liningNums = 'font-variant:lining-nums;';
  /** CSS 声明：`font-variant:no-common-ligatures;`。 */
  readonly noCommonLigatures = 'font-variant:no-common-ligatures;';
  /** CSS 声明：`font-variant:no-contextual;`。 */
  readonly noContextual = 'font-variant:no-contextual;';
  /** CSS 声明：`font-variant:no-discretionary-ligatures;`。 */
  readonly noDiscretionaryLigatures = 'font-variant:no-discretionary-ligatures;';
  /** CSS 声明：`font-variant:no-historical-ligatures;`。 */
  readonly noHistoricalLigatures = 'font-variant:no-historical-ligatures;';
  /** CSS 声明：`font-variant:none;`。 */
  readonly none = 'font-variant:none;';
  /** CSS 声明：`font-variant:normal;`。 */
  readonly normal = 'font-variant:normal;';
  /** CSS 声明：`font-variant:oldstyle-nums;`。 */
  readonly oldstyleNums = 'font-variant:oldstyle-nums;';
  /** CSS 声明：`font-variant:ordinal;`。 */
  readonly ordinal = 'font-variant:ordinal;';
  /** CSS 声明：`font-variant:petite-caps;`。 */
  readonly petiteCaps = 'font-variant:petite-caps;';
  /** CSS 声明：`font-variant:proportional-nums;`。 */
  readonly proportionalNums = 'font-variant:proportional-nums;';
  /** CSS 声明：`font-variant:proportional-width;`。 */
  readonly proportionalWidth = 'font-variant:proportional-width;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant:revert;`。
   */
  readonly revert = 'font-variant:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant:revert-layer;`。
   */
  readonly revertLayer = 'font-variant:revert-layer;';
  /** CSS 声明：`font-variant:ruby;`。 */
  readonly ruby = 'font-variant:ruby;';
  /** CSS 声明：`font-variant:simplified;`。 */
  readonly simplified = 'font-variant:simplified;';
  /** CSS 声明：`font-variant:slashed-zero;`。 */
  readonly slashedZero = 'font-variant:slashed-zero;';
  /** CSS 声明：`font-variant:small-caps;`。 */
  readonly smallCaps = 'font-variant:small-caps;';
  /** CSS 声明：`font-variant:stacked-fractions;`。 */
  readonly stackedFractions = 'font-variant:stacked-fractions;';
  /** CSS 声明：`font-variant:tabular-nums;`。 */
  readonly tabularNums = 'font-variant:tabular-nums;';
  /** CSS 声明：`font-variant:titling-caps;`。 */
  readonly titlingCaps = 'font-variant:titling-caps;';
  /** CSS 声明：`font-variant:traditional;`。 */
  readonly traditional = 'font-variant:traditional;';
  /** CSS 声明：`font-variant:unicase;`。 */
  readonly unicase = 'font-variant:unicase;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant:unset;`。
   */
  readonly unset = 'font-variant:unset;';
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
 * 选择字体提供的替代字形。（font-variant-alternates）
 *
 * CSS 语法：`normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
 */
export class FontVariantAlternatesCss extends CssProperty {
  /** CSS 声明：`font-variant-alternates:historical-forms;`。 */
  readonly historicalForms = 'font-variant-alternates:historical-forms;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-alternates:inherit;`。
   */
  readonly inherit = 'font-variant-alternates:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-alternates:initial;`。
   */
  readonly initial = 'font-variant-alternates:initial;';
  /** CSS 声明：`font-variant-alternates:normal;`。 */
  readonly normal = 'font-variant-alternates:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-alternates:revert;`。
   */
  readonly revert = 'font-variant-alternates:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-alternates:revert-layer;`。
   */
  readonly revertLayer = 'font-variant-alternates:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-alternates:unset;`。
   */
  readonly unset = 'font-variant-alternates:unset;';
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
 * 设置小型大写等大小写字形变体。（font-variant-caps）
 *
 * CSS 语法：`normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
 */
export class FontVariantCapsCss extends CssProperty {
  /** CSS 声明：`font-variant-caps:all-petite-caps;`。 */
  readonly allPetiteCaps = 'font-variant-caps:all-petite-caps;';
  /** CSS 声明：`font-variant-caps:all-small-caps;`。 */
  readonly allSmallCaps = 'font-variant-caps:all-small-caps;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-caps:inherit;`。
   */
  readonly inherit = 'font-variant-caps:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-caps:initial;`。
   */
  readonly initial = 'font-variant-caps:initial;';
  /** CSS 声明：`font-variant-caps:normal;`。 */
  readonly normal = 'font-variant-caps:normal;';
  /** CSS 声明：`font-variant-caps:petite-caps;`。 */
  readonly petiteCaps = 'font-variant-caps:petite-caps;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-caps:revert;`。
   */
  readonly revert = 'font-variant-caps:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-caps:revert-layer;`。
   */
  readonly revertLayer = 'font-variant-caps:revert-layer;';
  /** CSS 声明：`font-variant-caps:small-caps;`。 */
  readonly smallCaps = 'font-variant-caps:small-caps;';
  /** CSS 声明：`font-variant-caps:titling-caps;`。 */
  readonly titlingCaps = 'font-variant-caps:titling-caps;';
  /** CSS 声明：`font-variant-caps:unicase;`。 */
  readonly unicase = 'font-variant-caps:unicase;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-caps:unset;`。
   */
  readonly unset = 'font-variant-caps:unset;';
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
 * 设置东亚文字字形及宽度变体。（font-variant-east-asian）
 *
 * CSS 语法：`normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
 */
export class FontVariantEastAsianCss extends CssProperty {
  /** CSS 声明：`font-variant-east-asian:full-width;`。 */
  readonly fullWidth = 'font-variant-east-asian:full-width;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-east-asian:inherit;`。
   */
  readonly inherit = 'font-variant-east-asian:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-east-asian:initial;`。
   */
  readonly initial = 'font-variant-east-asian:initial;';
  /** CSS 声明：`font-variant-east-asian:jis04;`。 */
  readonly jis04 = 'font-variant-east-asian:jis04;';
  /** CSS 声明：`font-variant-east-asian:jis78;`。 */
  readonly jis78 = 'font-variant-east-asian:jis78;';
  /** CSS 声明：`font-variant-east-asian:jis83;`。 */
  readonly jis83 = 'font-variant-east-asian:jis83;';
  /** CSS 声明：`font-variant-east-asian:jis90;`。 */
  readonly jis90 = 'font-variant-east-asian:jis90;';
  /** CSS 声明：`font-variant-east-asian:normal;`。 */
  readonly normal = 'font-variant-east-asian:normal;';
  /** CSS 声明：`font-variant-east-asian:proportional-width;`。 */
  readonly proportionalWidth = 'font-variant-east-asian:proportional-width;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-east-asian:revert;`。
   */
  readonly revert = 'font-variant-east-asian:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-east-asian:revert-layer;`。
   */
  readonly revertLayer = 'font-variant-east-asian:revert-layer;';
  /** CSS 声明：`font-variant-east-asian:ruby;`。 */
  readonly ruby = 'font-variant-east-asian:ruby;';
  /** CSS 声明：`font-variant-east-asian:simplified;`。 */
  readonly simplified = 'font-variant-east-asian:simplified;';
  /** CSS 声明：`font-variant-east-asian:traditional;`。 */
  readonly traditional = 'font-variant-east-asian:traditional;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-east-asian:unset;`。
   */
  readonly unset = 'font-variant-east-asian:unset;';
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
 * 设置字符优先采用文本字形还是 emoji 字形。（font-variant-emoji）
 *
 * CSS 语法：`normal | text | emoji | unicode`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
 */
export class FontVariantEmojiCss extends CssProperty {
  /** CSS 声明：`font-variant-emoji:emoji;`。 */
  readonly emoji = 'font-variant-emoji:emoji;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-emoji:inherit;`。
   */
  readonly inherit = 'font-variant-emoji:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-emoji:initial;`。
   */
  readonly initial = 'font-variant-emoji:initial;';
  /** CSS 声明：`font-variant-emoji:normal;`。 */
  readonly normal = 'font-variant-emoji:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-emoji:revert;`。
   */
  readonly revert = 'font-variant-emoji:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-emoji:revert-layer;`。
   */
  readonly revertLayer = 'font-variant-emoji:revert-layer;';
  /** CSS 声明：`font-variant-emoji:text;`。 */
  readonly text = 'font-variant-emoji:text;';
  /** CSS 声明：`font-variant-emoji:unicode;`。 */
  readonly unicode = 'font-variant-emoji:unicode;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-emoji:unset;`。
   */
  readonly unset = 'font-variant-emoji:unset;';
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
 * 设置字体连字的启用方式。（font-variant-ligatures）
 *
 * CSS 语法：`normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
 */
export class FontVariantLigaturesCss extends CssProperty {
  /** CSS 声明：`font-variant-ligatures:common-ligatures;`。 */
  readonly commonLigatures = 'font-variant-ligatures:common-ligatures;';
  /** CSS 声明：`font-variant-ligatures:contextual;`。 */
  readonly contextual = 'font-variant-ligatures:contextual;';
  /** CSS 声明：`font-variant-ligatures:discretionary-ligatures;`。 */
  readonly discretionaryLigatures = 'font-variant-ligatures:discretionary-ligatures;';
  /** CSS 声明：`font-variant-ligatures:historical-ligatures;`。 */
  readonly historicalLigatures = 'font-variant-ligatures:historical-ligatures;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-ligatures:inherit;`。
   */
  readonly inherit = 'font-variant-ligatures:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-ligatures:initial;`。
   */
  readonly initial = 'font-variant-ligatures:initial;';
  /** CSS 声明：`font-variant-ligatures:no-common-ligatures;`。 */
  readonly noCommonLigatures = 'font-variant-ligatures:no-common-ligatures;';
  /** CSS 声明：`font-variant-ligatures:no-contextual;`。 */
  readonly noContextual = 'font-variant-ligatures:no-contextual;';
  /** CSS 声明：`font-variant-ligatures:no-discretionary-ligatures;`。 */
  readonly noDiscretionaryLigatures = 'font-variant-ligatures:no-discretionary-ligatures;';
  /** CSS 声明：`font-variant-ligatures:no-historical-ligatures;`。 */
  readonly noHistoricalLigatures = 'font-variant-ligatures:no-historical-ligatures;';
  /** CSS 声明：`font-variant-ligatures:none;`。 */
  readonly none = 'font-variant-ligatures:none;';
  /** CSS 声明：`font-variant-ligatures:normal;`。 */
  readonly normal = 'font-variant-ligatures:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-ligatures:revert;`。
   */
  readonly revert = 'font-variant-ligatures:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-ligatures:revert-layer;`。
   */
  readonly revertLayer = 'font-variant-ligatures:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-ligatures:unset;`。
   */
  readonly unset = 'font-variant-ligatures:unset;';
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
 * 设置数字的等宽、比例、分数及其他排版变体。（font-variant-numeric）
 *
 * CSS 语法：`normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
 */
export class FontVariantNumericCss extends CssProperty {
  /** CSS 声明：`font-variant-numeric:diagonal-fractions;`。 */
  readonly diagonalFractions = 'font-variant-numeric:diagonal-fractions;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-variant-numeric:inherit;`。
   */
  readonly inherit = 'font-variant-numeric:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-numeric:initial;`。
   */
  readonly initial = 'font-variant-numeric:initial;';
  /** CSS 声明：`font-variant-numeric:lining-nums;`。 */
  readonly liningNums = 'font-variant-numeric:lining-nums;';
  /** CSS 声明：`font-variant-numeric:normal;`。 */
  readonly normal = 'font-variant-numeric:normal;';
  /** CSS 声明：`font-variant-numeric:oldstyle-nums;`。 */
  readonly oldstyleNums = 'font-variant-numeric:oldstyle-nums;';
  /** CSS 声明：`font-variant-numeric:ordinal;`。 */
  readonly ordinal = 'font-variant-numeric:ordinal;';
  /** CSS 声明：`font-variant-numeric:proportional-nums;`。 */
  readonly proportionalNums = 'font-variant-numeric:proportional-nums;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-numeric:revert;`。
   */
  readonly revert = 'font-variant-numeric:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-numeric:revert-layer;`。
   */
  readonly revertLayer = 'font-variant-numeric:revert-layer;';
  /** CSS 声明：`font-variant-numeric:slashed-zero;`。 */
  readonly slashedZero = 'font-variant-numeric:slashed-zero;';
  /** CSS 声明：`font-variant-numeric:stacked-fractions;`。 */
  readonly stackedFractions = 'font-variant-numeric:stacked-fractions;';
  /** CSS 声明：`font-variant-numeric:tabular-nums;`。 */
  readonly tabularNums = 'font-variant-numeric:tabular-nums;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-numeric:unset;`。
   */
  readonly unset = 'font-variant-numeric:unset;';
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
 * 选择字体提供的上标或下标字形。（font-variant-position）
 *
 * CSS 语法：`normal | sub | super`。
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
  readonly inherit = 'font-variant-position:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variant-position:initial;`。
   */
  readonly initial = 'font-variant-position:initial;';
  /** CSS 声明：`font-variant-position:normal;`。 */
  readonly normal = 'font-variant-position:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variant-position:revert;`。
   */
  readonly revert = 'font-variant-position:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variant-position:revert-layer;`。
   */
  readonly revertLayer = 'font-variant-position:revert-layer;';
  /** CSS 声明：`font-variant-position:sub;`。 */
  readonly sub = 'font-variant-position:sub;';
  /** CSS 声明：`font-variant-position:super;`。 */
  readonly super = 'font-variant-position:super;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variant-position:unset;`。
   */
  readonly unset = 'font-variant-position:unset;';
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
 * 直接设置可变字体各个轴的数值。（font-variation-settings）
 *
 * CSS 语法：`normal | [ <string> <number> ]#`。
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
  readonly inherit = 'font-variation-settings:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-variation-settings:initial;`。
   */
  readonly initial = 'font-variation-settings:initial;';
  /** CSS 声明：`font-variation-settings:normal;`。 */
  readonly normal = 'font-variation-settings:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-variation-settings:revert;`。
   */
  readonly revert = 'font-variation-settings:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-variation-settings:revert-layer;`。
   */
  readonly revertLayer = 'font-variation-settings:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-variation-settings:unset;`。
   */
  readonly unset = 'font-variation-settings:unset;';
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
 * 设置字体粗细，实际可用字重取决于字体。（font-weight）
 *
 * CSS 语法：`<font-weight-absolute> | bolder | lighter`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
 */
export class FontWeightCss extends CssProperty {
  /**
   * 粗体字重，等价于数值 700。
   *
   * CSS 声明：`font-weight:bold;`。
   */
  readonly bold = 'font-weight:bold;';
  /**
   * 相对于继承字重选择更粗的字重，不是简单加一个固定数值。
   *
   * CSS 声明：`font-weight:bolder;`。
   */
  readonly bolder = 'font-weight:bolder;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-weight:inherit;`。
   */
  readonly inherit = 'font-weight:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-weight:initial;`。
   */
  readonly initial = 'font-weight:initial;';
  /**
   * 相对于继承字重选择更细的字重，不是简单减一个固定数值。
   *
   * CSS 声明：`font-weight:lighter;`。
   */
  readonly lighter = 'font-weight:lighter;';
  /**
   * 正常字重，等价于数值 400。
   *
   * CSS 声明：`font-weight:normal;`。
   */
  readonly normal = 'font-weight:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-weight:revert;`。
   */
  readonly revert = 'font-weight:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-weight:revert-layer;`。
   */
  readonly revertLayer = 'font-weight:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-weight:unset;`。
   */
  readonly unset = 'font-weight:unset;';
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
 * 选择字体的宽窄字面，不是通过变换拉伸元素。（font-width）
 *
 * CSS 语法：`normal | <percentage [0,∞]> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded`。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
 */
export class FontWidthCss extends CssProperty {
  /** CSS 声明：`font-width:condensed;`。 */
  readonly condensed = 'font-width:condensed;';
  /** CSS 声明：`font-width:expanded;`。 */
  readonly expanded = 'font-width:expanded;';
  /** CSS 声明：`font-width:extra-condensed;`。 */
  readonly extraCondensed = 'font-width:extra-condensed;';
  /** CSS 声明：`font-width:extra-expanded;`。 */
  readonly extraExpanded = 'font-width:extra-expanded;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`font-width:inherit;`。
   */
  readonly inherit = 'font-width:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`font-width:initial;`。
   */
  readonly initial = 'font-width:initial;';
  /** CSS 声明：`font-width:normal;`。 */
  readonly normal = 'font-width:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`font-width:revert;`。
   */
  readonly revert = 'font-width:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`font-width:revert-layer;`。
   */
  readonly revertLayer = 'font-width:revert-layer;';
  /** CSS 声明：`font-width:semi-condensed;`。 */
  readonly semiCondensed = 'font-width:semi-condensed;';
  /** CSS 声明：`font-width:semi-expanded;`。 */
  readonly semiExpanded = 'font-width:semi-expanded;';
  /** CSS 声明：`font-width:ultra-condensed;`。 */
  readonly ultraCondensed = 'font-width:ultra-condensed;';
  /** CSS 声明：`font-width:ultra-expanded;`。 */
  readonly ultraExpanded = 'font-width:ultra-expanded;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`font-width:unset;`。
   */
  readonly unset = 'font-width:unset;';
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
 * 控制元素是否参与系统强制颜色模式的自动替换。（forced-color-adjust）
 *
 * CSS 语法：`auto | none | preserve-parent-color`。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
 */
export class ForcedColorAdjustCss extends CssProperty {
  /** CSS 声明：`forced-color-adjust:auto;`。 */
  readonly auto = 'forced-color-adjust:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`forced-color-adjust:inherit;`。
   */
  readonly inherit = 'forced-color-adjust:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`forced-color-adjust:initial;`。
   */
  readonly initial = 'forced-color-adjust:initial;';
  /** CSS 声明：`forced-color-adjust:none;`。 */
  readonly none = 'forced-color-adjust:none;';
  /** CSS 声明：`forced-color-adjust:preserve-parent-color;`。 */
  readonly preserveParentColor = 'forced-color-adjust:preserve-parent-color;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`forced-color-adjust:revert;`。
   */
  readonly revert = 'forced-color-adjust:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`forced-color-adjust:revert-layer;`。
   */
  readonly revertLayer = 'forced-color-adjust:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`forced-color-adjust:unset;`。
   */
  readonly unset = 'forced-color-adjust:unset;';
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
