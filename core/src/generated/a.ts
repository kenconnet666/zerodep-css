// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty, type CssString } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/**
 * 设置复选框、单选框等原生控件的强调色；具体使用部位由浏览器决定。（accent-color）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
 */
export class AccentColorCss extends CssProperty {
  /** CSS 声明：`accent-color:AccentColor;`。 */
  readonly AccentColor = 'accent-color:AccentColor;';
  /** CSS 声明：`accent-color:AccentColorText;`。 */
  readonly AccentColorText = 'accent-color:AccentColorText;';
  /** CSS 声明：`accent-color:ActiveBorder;`。 */
  readonly ActiveBorder = 'accent-color:ActiveBorder;';
  /** CSS 声明：`accent-color:ActiveCaption;`。 */
  readonly ActiveCaption = 'accent-color:ActiveCaption;';
  /** CSS 声明：`accent-color:ActiveText;`。 */
  readonly ActiveText = 'accent-color:ActiveText;';
  /** CSS 声明：`accent-color:AppWorkspace;`。 */
  readonly AppWorkspace = 'accent-color:AppWorkspace;';
  /** CSS 声明：`accent-color:Background;`。 */
  readonly Background = 'accent-color:Background;';
  /** CSS 声明：`accent-color:ButtonBorder;`。 */
  readonly ButtonBorder = 'accent-color:ButtonBorder;';
  /** CSS 声明：`accent-color:ButtonFace;`。 */
  readonly ButtonFace = 'accent-color:ButtonFace;';
  /** CSS 声明：`accent-color:ButtonHighlight;`。 */
  readonly ButtonHighlight = 'accent-color:ButtonHighlight;';
  /** CSS 声明：`accent-color:ButtonShadow;`。 */
  readonly ButtonShadow = 'accent-color:ButtonShadow;';
  /** CSS 声明：`accent-color:ButtonText;`。 */
  readonly ButtonText = 'accent-color:ButtonText;';
  /** CSS 声明：`accent-color:Canvas;`。 */
  readonly Canvas = 'accent-color:Canvas;';
  /** CSS 声明：`accent-color:CanvasText;`。 */
  readonly CanvasText = 'accent-color:CanvasText;';
  /** CSS 声明：`accent-color:CaptionText;`。 */
  readonly CaptionText = 'accent-color:CaptionText;';
  /** CSS 声明：`accent-color:Field;`。 */
  readonly Field = 'accent-color:Field;';
  /** CSS 声明：`accent-color:FieldText;`。 */
  readonly FieldText = 'accent-color:FieldText;';
  /** CSS 声明：`accent-color:GrayText;`。 */
  readonly GrayText = 'accent-color:GrayText;';
  /** CSS 声明：`accent-color:Highlight;`。 */
  readonly Highlight = 'accent-color:Highlight;';
  /** CSS 声明：`accent-color:HighlightText;`。 */
  readonly HighlightText = 'accent-color:HighlightText;';
  /** CSS 声明：`accent-color:InactiveBorder;`。 */
  readonly InactiveBorder = 'accent-color:InactiveBorder;';
  /** CSS 声明：`accent-color:InactiveCaption;`。 */
  readonly InactiveCaption = 'accent-color:InactiveCaption;';
  /** CSS 声明：`accent-color:InactiveCaptionText;`。 */
  readonly InactiveCaptionText = 'accent-color:InactiveCaptionText;';
  /** CSS 声明：`accent-color:InfoBackground;`。 */
  readonly InfoBackground = 'accent-color:InfoBackground;';
  /** CSS 声明：`accent-color:InfoText;`。 */
  readonly InfoText = 'accent-color:InfoText;';
  /** CSS 声明：`accent-color:LinkText;`。 */
  readonly LinkText = 'accent-color:LinkText;';
  /** CSS 声明：`accent-color:Mark;`。 */
  readonly Mark = 'accent-color:Mark;';
  /** CSS 声明：`accent-color:MarkText;`。 */
  readonly MarkText = 'accent-color:MarkText;';
  /** CSS 声明：`accent-color:Menu;`。 */
  readonly Menu = 'accent-color:Menu;';
  /** CSS 声明：`accent-color:MenuText;`。 */
  readonly MenuText = 'accent-color:MenuText;';
  /** CSS 声明：`accent-color:Scrollbar;`。 */
  readonly Scrollbar = 'accent-color:Scrollbar;';
  /** CSS 声明：`accent-color:SelectedItem;`。 */
  readonly SelectedItem = 'accent-color:SelectedItem;';
  /** CSS 声明：`accent-color:SelectedItemText;`。 */
  readonly SelectedItemText = 'accent-color:SelectedItemText;';
  /** CSS 声明：`accent-color:ThreeDDarkShadow;`。 */
  readonly ThreeDDarkShadow = 'accent-color:ThreeDDarkShadow;';
  /** CSS 声明：`accent-color:ThreeDFace;`。 */
  readonly ThreeDFace = 'accent-color:ThreeDFace;';
  /** CSS 声明：`accent-color:ThreeDHighlight;`。 */
  readonly ThreeDHighlight = 'accent-color:ThreeDHighlight;';
  /** CSS 声明：`accent-color:ThreeDLightShadow;`。 */
  readonly ThreeDLightShadow = 'accent-color:ThreeDLightShadow;';
  /** CSS 声明：`accent-color:ThreeDShadow;`。 */
  readonly ThreeDShadow = 'accent-color:ThreeDShadow;';
  /** CSS 声明：`accent-color:VisitedText;`。 */
  readonly VisitedText = 'accent-color:VisitedText;';
  /** CSS 声明：`accent-color:Window;`。 */
  readonly Window = 'accent-color:Window;';
  /** CSS 声明：`accent-color:WindowFrame;`。 */
  readonly WindowFrame = 'accent-color:WindowFrame;';
  /** CSS 声明：`accent-color:WindowText;`。 */
  readonly WindowText = 'accent-color:WindowText;';
  /** CSS 声明：`accent-color:aliceblue;`。 */
  readonly aliceblue = 'accent-color:aliceblue;';
  /** CSS 声明：`accent-color:antiquewhite;`。 */
  readonly antiquewhite = 'accent-color:antiquewhite;';
  /** CSS 声明：`accent-color:aqua;`。 */
  readonly aqua = 'accent-color:aqua;';
  /** CSS 声明：`accent-color:aquamarine;`。 */
  readonly aquamarine = 'accent-color:aquamarine;';
  /** CSS 声明：`accent-color:auto;`。 */
  readonly auto = 'accent-color:auto;';
  /** CSS 声明：`accent-color:azure;`。 */
  readonly azure = 'accent-color:azure;';
  /** CSS 声明：`accent-color:beige;`。 */
  readonly beige = 'accent-color:beige;';
  /** CSS 声明：`accent-color:bisque;`。 */
  readonly bisque = 'accent-color:bisque;';
  /** CSS 声明：`accent-color:black;`。 */
  readonly black = 'accent-color:black;';
  /** CSS 声明：`accent-color:blanchedalmond;`。 */
  readonly blanchedalmond = 'accent-color:blanchedalmond;';
  /** CSS 声明：`accent-color:blue;`。 */
  readonly blue = 'accent-color:blue;';
  /** CSS 声明：`accent-color:blueviolet;`。 */
  readonly blueviolet = 'accent-color:blueviolet;';
  /** CSS 声明：`accent-color:brown;`。 */
  readonly brown = 'accent-color:brown;';
  /** CSS 声明：`accent-color:burlywood;`。 */
  readonly burlywood = 'accent-color:burlywood;';
  /** CSS 声明：`accent-color:cadetblue;`。 */
  readonly cadetblue = 'accent-color:cadetblue;';
  /** CSS 声明：`accent-color:chartreuse;`。 */
  readonly chartreuse = 'accent-color:chartreuse;';
  /** CSS 声明：`accent-color:chocolate;`。 */
  readonly chocolate = 'accent-color:chocolate;';
  /** CSS 声明：`accent-color:coral;`。 */
  readonly coral = 'accent-color:coral;';
  /** CSS 声明：`accent-color:cornflowerblue;`。 */
  readonly cornflowerblue = 'accent-color:cornflowerblue;';
  /** CSS 声明：`accent-color:cornsilk;`。 */
  readonly cornsilk = 'accent-color:cornsilk;';
  /** CSS 声明：`accent-color:crimson;`。 */
  readonly crimson = 'accent-color:crimson;';
  /**
   * 引用当前 color 的计算值；用于 color 自身时按继承的颜色解析。
   *
   * CSS 声明：`accent-color:currentColor;`。
   */
  readonly currentColor = 'accent-color:currentColor;';
  /** CSS 声明：`accent-color:cyan;`。 */
  readonly cyan = 'accent-color:cyan;';
  /** CSS 声明：`accent-color:darkblue;`。 */
  readonly darkblue = 'accent-color:darkblue;';
  /** CSS 声明：`accent-color:darkcyan;`。 */
  readonly darkcyan = 'accent-color:darkcyan;';
  /** CSS 声明：`accent-color:darkgoldenrod;`。 */
  readonly darkgoldenrod = 'accent-color:darkgoldenrod;';
  /** CSS 声明：`accent-color:darkgray;`。 */
  readonly darkgray = 'accent-color:darkgray;';
  /** CSS 声明：`accent-color:darkgreen;`。 */
  readonly darkgreen = 'accent-color:darkgreen;';
  /** CSS 声明：`accent-color:darkgrey;`。 */
  readonly darkgrey = 'accent-color:darkgrey;';
  /** CSS 声明：`accent-color:darkkhaki;`。 */
  readonly darkkhaki = 'accent-color:darkkhaki;';
  /** CSS 声明：`accent-color:darkmagenta;`。 */
  readonly darkmagenta = 'accent-color:darkmagenta;';
  /** CSS 声明：`accent-color:darkolivegreen;`。 */
  readonly darkolivegreen = 'accent-color:darkolivegreen;';
  /** CSS 声明：`accent-color:darkorange;`。 */
  readonly darkorange = 'accent-color:darkorange;';
  /** CSS 声明：`accent-color:darkorchid;`。 */
  readonly darkorchid = 'accent-color:darkorchid;';
  /** CSS 声明：`accent-color:darkred;`。 */
  readonly darkred = 'accent-color:darkred;';
  /** CSS 声明：`accent-color:darksalmon;`。 */
  readonly darksalmon = 'accent-color:darksalmon;';
  /** CSS 声明：`accent-color:darkseagreen;`。 */
  readonly darkseagreen = 'accent-color:darkseagreen;';
  /** CSS 声明：`accent-color:darkslateblue;`。 */
  readonly darkslateblue = 'accent-color:darkslateblue;';
  /** CSS 声明：`accent-color:darkslategray;`。 */
  readonly darkslategray = 'accent-color:darkslategray;';
  /** CSS 声明：`accent-color:darkslategrey;`。 */
  readonly darkslategrey = 'accent-color:darkslategrey;';
  /** CSS 声明：`accent-color:darkturquoise;`。 */
  readonly darkturquoise = 'accent-color:darkturquoise;';
  /** CSS 声明：`accent-color:darkviolet;`。 */
  readonly darkviolet = 'accent-color:darkviolet;';
  /** CSS 声明：`accent-color:deeppink;`。 */
  readonly deeppink = 'accent-color:deeppink;';
  /** CSS 声明：`accent-color:deepskyblue;`。 */
  readonly deepskyblue = 'accent-color:deepskyblue;';
  /** CSS 声明：`accent-color:dimgray;`。 */
  readonly dimgray = 'accent-color:dimgray;';
  /** CSS 声明：`accent-color:dimgrey;`。 */
  readonly dimgrey = 'accent-color:dimgrey;';
  /** CSS 声明：`accent-color:dodgerblue;`。 */
  readonly dodgerblue = 'accent-color:dodgerblue;';
  /** CSS 声明：`accent-color:firebrick;`。 */
  readonly firebrick = 'accent-color:firebrick;';
  /** CSS 声明：`accent-color:floralwhite;`。 */
  readonly floralwhite = 'accent-color:floralwhite;';
  /** CSS 声明：`accent-color:forestgreen;`。 */
  readonly forestgreen = 'accent-color:forestgreen;';
  /** CSS 声明：`accent-color:fuchsia;`。 */
  readonly fuchsia = 'accent-color:fuchsia;';
  /** CSS 声明：`accent-color:gainsboro;`。 */
  readonly gainsboro = 'accent-color:gainsboro;';
  /** CSS 声明：`accent-color:ghostwhite;`。 */
  readonly ghostwhite = 'accent-color:ghostwhite;';
  /** CSS 声明：`accent-color:gold;`。 */
  readonly gold = 'accent-color:gold;';
  /** CSS 声明：`accent-color:goldenrod;`。 */
  readonly goldenrod = 'accent-color:goldenrod;';
  /** CSS 声明：`accent-color:gray;`。 */
  readonly gray = 'accent-color:gray;';
  /** CSS 声明：`accent-color:green;`。 */
  readonly green = 'accent-color:green;';
  /** CSS 声明：`accent-color:greenyellow;`。 */
  readonly greenyellow = 'accent-color:greenyellow;';
  /** CSS 声明：`accent-color:grey;`。 */
  readonly grey = 'accent-color:grey;';
  /** CSS 声明：`accent-color:honeydew;`。 */
  readonly honeydew = 'accent-color:honeydew;';
  /** CSS 声明：`accent-color:hotpink;`。 */
  readonly hotpink = 'accent-color:hotpink;';
  /** CSS 声明：`accent-color:indianred;`。 */
  readonly indianred = 'accent-color:indianred;';
  /** CSS 声明：`accent-color:indigo;`。 */
  readonly indigo = 'accent-color:indigo;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`accent-color:inherit;`。
   */
  readonly inherit = 'accent-color:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`accent-color:initial;`。
   */
  readonly initial = 'accent-color:initial;';
  /** CSS 声明：`accent-color:ivory;`。 */
  readonly ivory = 'accent-color:ivory;';
  /** CSS 声明：`accent-color:khaki;`。 */
  readonly khaki = 'accent-color:khaki;';
  /** CSS 声明：`accent-color:lavender;`。 */
  readonly lavender = 'accent-color:lavender;';
  /** CSS 声明：`accent-color:lavenderblush;`。 */
  readonly lavenderblush = 'accent-color:lavenderblush;';
  /** CSS 声明：`accent-color:lawngreen;`。 */
  readonly lawngreen = 'accent-color:lawngreen;';
  /** CSS 声明：`accent-color:lemonchiffon;`。 */
  readonly lemonchiffon = 'accent-color:lemonchiffon;';
  /** CSS 声明：`accent-color:lightblue;`。 */
  readonly lightblue = 'accent-color:lightblue;';
  /** CSS 声明：`accent-color:lightcoral;`。 */
  readonly lightcoral = 'accent-color:lightcoral;';
  /** CSS 声明：`accent-color:lightcyan;`。 */
  readonly lightcyan = 'accent-color:lightcyan;';
  /** CSS 声明：`accent-color:lightgoldenrodyellow;`。 */
  readonly lightgoldenrodyellow = 'accent-color:lightgoldenrodyellow;';
  /** CSS 声明：`accent-color:lightgray;`。 */
  readonly lightgray = 'accent-color:lightgray;';
  /** CSS 声明：`accent-color:lightgreen;`。 */
  readonly lightgreen = 'accent-color:lightgreen;';
  /** CSS 声明：`accent-color:lightgrey;`。 */
  readonly lightgrey = 'accent-color:lightgrey;';
  /** CSS 声明：`accent-color:lightpink;`。 */
  readonly lightpink = 'accent-color:lightpink;';
  /** CSS 声明：`accent-color:lightsalmon;`。 */
  readonly lightsalmon = 'accent-color:lightsalmon;';
  /** CSS 声明：`accent-color:lightseagreen;`。 */
  readonly lightseagreen = 'accent-color:lightseagreen;';
  /** CSS 声明：`accent-color:lightskyblue;`。 */
  readonly lightskyblue = 'accent-color:lightskyblue;';
  /** CSS 声明：`accent-color:lightslategray;`。 */
  readonly lightslategray = 'accent-color:lightslategray;';
  /** CSS 声明：`accent-color:lightslategrey;`。 */
  readonly lightslategrey = 'accent-color:lightslategrey;';
  /** CSS 声明：`accent-color:lightsteelblue;`。 */
  readonly lightsteelblue = 'accent-color:lightsteelblue;';
  /** CSS 声明：`accent-color:lightyellow;`。 */
  readonly lightyellow = 'accent-color:lightyellow;';
  /** CSS 声明：`accent-color:lime;`。 */
  readonly lime = 'accent-color:lime;';
  /** CSS 声明：`accent-color:limegreen;`。 */
  readonly limegreen = 'accent-color:limegreen;';
  /** CSS 声明：`accent-color:linen;`。 */
  readonly linen = 'accent-color:linen;';
  /** CSS 声明：`accent-color:magenta;`。 */
  readonly magenta = 'accent-color:magenta;';
  /** CSS 声明：`accent-color:maroon;`。 */
  readonly maroon = 'accent-color:maroon;';
  /** CSS 声明：`accent-color:mediumaquamarine;`。 */
  readonly mediumaquamarine = 'accent-color:mediumaquamarine;';
  /** CSS 声明：`accent-color:mediumblue;`。 */
  readonly mediumblue = 'accent-color:mediumblue;';
  /** CSS 声明：`accent-color:mediumorchid;`。 */
  readonly mediumorchid = 'accent-color:mediumorchid;';
  /** CSS 声明：`accent-color:mediumpurple;`。 */
  readonly mediumpurple = 'accent-color:mediumpurple;';
  /** CSS 声明：`accent-color:mediumseagreen;`。 */
  readonly mediumseagreen = 'accent-color:mediumseagreen;';
  /** CSS 声明：`accent-color:mediumslateblue;`。 */
  readonly mediumslateblue = 'accent-color:mediumslateblue;';
  /** CSS 声明：`accent-color:mediumspringgreen;`。 */
  readonly mediumspringgreen = 'accent-color:mediumspringgreen;';
  /** CSS 声明：`accent-color:mediumturquoise;`。 */
  readonly mediumturquoise = 'accent-color:mediumturquoise;';
  /** CSS 声明：`accent-color:mediumvioletred;`。 */
  readonly mediumvioletred = 'accent-color:mediumvioletred;';
  /** CSS 声明：`accent-color:midnightblue;`。 */
  readonly midnightblue = 'accent-color:midnightblue;';
  /** CSS 声明：`accent-color:mintcream;`。 */
  readonly mintcream = 'accent-color:mintcream;';
  /** CSS 声明：`accent-color:mistyrose;`。 */
  readonly mistyrose = 'accent-color:mistyrose;';
  /** CSS 声明：`accent-color:moccasin;`。 */
  readonly moccasin = 'accent-color:moccasin;';
  /** CSS 声明：`accent-color:navajowhite;`。 */
  readonly navajowhite = 'accent-color:navajowhite;';
  /** CSS 声明：`accent-color:navy;`。 */
  readonly navy = 'accent-color:navy;';
  /** CSS 声明：`accent-color:oldlace;`。 */
  readonly oldlace = 'accent-color:oldlace;';
  /** CSS 声明：`accent-color:olive;`。 */
  readonly olive = 'accent-color:olive;';
  /** CSS 声明：`accent-color:olivedrab;`。 */
  readonly olivedrab = 'accent-color:olivedrab;';
  /** CSS 声明：`accent-color:orange;`。 */
  readonly orange = 'accent-color:orange;';
  /** CSS 声明：`accent-color:orangered;`。 */
  readonly orangered = 'accent-color:orangered;';
  /** CSS 声明：`accent-color:orchid;`。 */
  readonly orchid = 'accent-color:orchid;';
  /** CSS 声明：`accent-color:palegoldenrod;`。 */
  readonly palegoldenrod = 'accent-color:palegoldenrod;';
  /** CSS 声明：`accent-color:palegreen;`。 */
  readonly palegreen = 'accent-color:palegreen;';
  /** CSS 声明：`accent-color:paleturquoise;`。 */
  readonly paleturquoise = 'accent-color:paleturquoise;';
  /** CSS 声明：`accent-color:palevioletred;`。 */
  readonly palevioletred = 'accent-color:palevioletred;';
  /** CSS 声明：`accent-color:papayawhip;`。 */
  readonly papayawhip = 'accent-color:papayawhip;';
  /** CSS 声明：`accent-color:peachpuff;`。 */
  readonly peachpuff = 'accent-color:peachpuff;';
  /** CSS 声明：`accent-color:peru;`。 */
  readonly peru = 'accent-color:peru;';
  /** CSS 声明：`accent-color:pink;`。 */
  readonly pink = 'accent-color:pink;';
  /** CSS 声明：`accent-color:plum;`。 */
  readonly plum = 'accent-color:plum;';
  /** CSS 声明：`accent-color:powderblue;`。 */
  readonly powderblue = 'accent-color:powderblue;';
  /** CSS 声明：`accent-color:purple;`。 */
  readonly purple = 'accent-color:purple;';
  /** CSS 声明：`accent-color:rebeccapurple;`。 */
  readonly rebeccapurple = 'accent-color:rebeccapurple;';
  /** CSS 声明：`accent-color:red;`。 */
  readonly red = 'accent-color:red;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`accent-color:revert;`。
   */
  readonly revert = 'accent-color:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`accent-color:revert-layer;`。
   */
  readonly revertLayer = 'accent-color:revert-layer;';
  /** CSS 声明：`accent-color:rosybrown;`。 */
  readonly rosybrown = 'accent-color:rosybrown;';
  /** CSS 声明：`accent-color:royalblue;`。 */
  readonly royalblue = 'accent-color:royalblue;';
  /** CSS 声明：`accent-color:saddlebrown;`。 */
  readonly saddlebrown = 'accent-color:saddlebrown;';
  /** CSS 声明：`accent-color:salmon;`。 */
  readonly salmon = 'accent-color:salmon;';
  /** CSS 声明：`accent-color:sandybrown;`。 */
  readonly sandybrown = 'accent-color:sandybrown;';
  /** CSS 声明：`accent-color:seagreen;`。 */
  readonly seagreen = 'accent-color:seagreen;';
  /** CSS 声明：`accent-color:seashell;`。 */
  readonly seashell = 'accent-color:seashell;';
  /** CSS 声明：`accent-color:sienna;`。 */
  readonly sienna = 'accent-color:sienna;';
  /** CSS 声明：`accent-color:silver;`。 */
  readonly silver = 'accent-color:silver;';
  /** CSS 声明：`accent-color:skyblue;`。 */
  readonly skyblue = 'accent-color:skyblue;';
  /** CSS 声明：`accent-color:slateblue;`。 */
  readonly slateblue = 'accent-color:slateblue;';
  /** CSS 声明：`accent-color:slategray;`。 */
  readonly slategray = 'accent-color:slategray;';
  /** CSS 声明：`accent-color:slategrey;`。 */
  readonly slategrey = 'accent-color:slategrey;';
  /** CSS 声明：`accent-color:snow;`。 */
  readonly snow = 'accent-color:snow;';
  /** CSS 声明：`accent-color:springgreen;`。 */
  readonly springgreen = 'accent-color:springgreen;';
  /** CSS 声明：`accent-color:steelblue;`。 */
  readonly steelblue = 'accent-color:steelblue;';
  /** CSS 声明：`accent-color:tan;`。 */
  readonly tan = 'accent-color:tan;';
  /** CSS 声明：`accent-color:teal;`。 */
  readonly teal = 'accent-color:teal;';
  /** CSS 声明：`accent-color:thistle;`。 */
  readonly thistle = 'accent-color:thistle;';
  /** CSS 声明：`accent-color:tomato;`。 */
  readonly tomato = 'accent-color:tomato;';
  /**
   * 完全透明的颜色值；不会隐藏元素、取消布局或阻止交互。
   *
   * CSS 声明：`accent-color:transparent;`。
   */
  readonly transparent = 'accent-color:transparent;';
  /** CSS 声明：`accent-color:turquoise;`。 */
  readonly turquoise = 'accent-color:turquoise;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`accent-color:unset;`。
   */
  readonly unset = 'accent-color:unset;';
  /** CSS 声明：`accent-color:violet;`。 */
  readonly violet = 'accent-color:violet;';
  /** CSS 声明：`accent-color:wheat;`。 */
  readonly wheat = 'accent-color:wheat;';
  /** CSS 声明：`accent-color:white;`。 */
  readonly white = 'accent-color:white;';
  /** CSS 声明：`accent-color:whitesmoke;`。 */
  readonly whitesmoke = 'accent-color:whitesmoke;';
  /** CSS 声明：`accent-color:yellow;`。 */
  readonly yellow = 'accent-color:yellow;';
  /** CSS 声明：`accent-color:yellowgreen;`。 */
  readonly yellowgreen = 'accent-color:yellowgreen;';
  /**
   * 创建 accent-color 属性作者；普通使用通过 s.accentColor 取得共享实例。
   * @example
   * class CustomAccentColorCss extends AccentColorCss {}
   */
  constructor() {
    super('accent-color');
  }
  /**
   * 原样生成 accent-color 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 accent-color:value;。
   * @example
   * s.accentColor.raw('inherit') // accent-color:inherit;
   */
  raw(value: Property.AccentColor | CssString): string {
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
   * s.accentColor.rgb(255, 0, 0, 0.5)
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
   * s.accentColor.hsl(210, 50, 40, 0.8)
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
   * s.accentColor.oklch(0.7, 0.15, 250)
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
   * s.accentColor.oklab(0.7, 0.1, -0.1)
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
 * 分配布局容器交叉轴或块轴上的剩余空间，控制内容整体的对齐。（align-content）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
 */
export class AlignContentCss extends CssProperty {
  /** CSS 声明：`align-content:baseline;`。 */
  readonly baseline = 'align-content:baseline;';
  /** CSS 声明：`align-content:center;`。 */
  readonly center = 'align-content:center;';
  /** CSS 声明：`align-content:end;`。 */
  readonly end = 'align-content:end;';
  /** CSS 声明：`align-content:flex-end;`。 */
  readonly flexEnd = 'align-content:flex-end;';
  /** CSS 声明：`align-content:flex-start;`。 */
  readonly flexStart = 'align-content:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`align-content:inherit;`。
   */
  readonly inherit = 'align-content:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`align-content:initial;`。
   */
  readonly initial = 'align-content:initial;';
  /** CSS 声明：`align-content:normal;`。 */
  readonly normal = 'align-content:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`align-content:revert;`。
   */
  readonly revert = 'align-content:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`align-content:revert-layer;`。
   */
  readonly revertLayer = 'align-content:revert-layer;';
  /** CSS 声明：`align-content:space-around;`。 */
  readonly spaceAround = 'align-content:space-around;';
  /** CSS 声明：`align-content:space-between;`。 */
  readonly spaceBetween = 'align-content:space-between;';
  /** CSS 声明：`align-content:space-evenly;`。 */
  readonly spaceEvenly = 'align-content:space-evenly;';
  /** CSS 声明：`align-content:start;`。 */
  readonly start = 'align-content:start;';
  /** CSS 声明：`align-content:stretch;`。 */
  readonly stretch = 'align-content:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`align-content:unset;`。
   */
  readonly unset = 'align-content:unset;';
  /**
   * 创建 align-content 属性作者；普通使用通过 s.alignContent 取得共享实例。
   * @example
   * class CustomAlignContentCss extends AlignContentCss {}
   */
  constructor() {
    super('align-content');
  }
  /**
   * 原样生成 align-content 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 align-content:value;。
   * @example
   * s.alignContent.raw('inherit') // align-content:inherit;
   */
  raw(value: Property.AlignContent | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置容器内项目在交叉轴或块轴上的默认对齐方式。（align-items）
 *
 * Flex 中沿交叉轴对齐；Grid 中通常沿块轴对齐。单个项目可以用 align-self 覆盖。
 *
 * 常用值：
 * - `stretch`：在自动尺寸及最小/最大约束允许时拉伸项目，不强制覆盖显式尺寸。
 * - `center`：将各项目在交叉轴或块轴的对齐区域中居中。
 * - `baseline`：按项目的对齐基线对齐，不等同于底边对齐。
 * - `start`：按对齐轴的逻辑起始侧对齐。
 * - `end`：按对齐轴的逻辑结束侧对齐。
 *
 * 适用场景：图标与文字居中、表单控件基线对齐或项目拉伸。
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @example
 * css(s.display.flex, s.alignItems.center)
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
 */
export class AlignItemsCss extends CssProperty {
  /** CSS 声明：`align-items:anchor-center;`。 */
  readonly anchorCenter = 'align-items:anchor-center;';
  /**
   * 按项目的对齐基线对齐，不等同于底边对齐。
   *
   * CSS 声明：`align-items:baseline;`。
   */
  readonly baseline = 'align-items:baseline;';
  /**
   * 将各项目在交叉轴或块轴的对齐区域中居中。
   *
   * 区别：justify-content 控制 Flex 主轴上的内容分布；align-items 控制交叉轴。
   *
   * 适用场景：横向图标和文字的垂直对齐。
   *
   * CSS 声明：`align-items:center;`。
   * @example
   * css(s.display.inlineFlex, s.alignItems.center)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  readonly center = 'align-items:center;';
  /**
   * 按对齐轴的逻辑结束侧对齐。
   *
   * CSS 声明：`align-items:end;`。
   */
  readonly end = 'align-items:end;';
  /**
   * 在 Flex 中按交叉轴结束侧对齐。
   *
   * CSS 声明：`align-items:flex-end;`。
   */
  readonly flexEnd = 'align-items:flex-end;';
  /**
   * 在 Flex 中按交叉轴起始侧对齐；交叉轴方向受换行方式影响。
   *
   * CSS 声明：`align-items:flex-start;`。
   */
  readonly flexStart = 'align-items:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`align-items:inherit;`。
   */
  readonly inherit = 'align-items:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`align-items:initial;`。
   */
  readonly initial = 'align-items:initial;';
  /**
   * 由布局模式决定行为，许多场景类似 stretch，但存在内部尺寸等例外。
   *
   * CSS 声明：`align-items:normal;`。
   */
  readonly normal = 'align-items:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`align-items:revert;`。
   */
  readonly revert = 'align-items:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`align-items:revert-layer;`。
   */
  readonly revertLayer = 'align-items:revert-layer;';
  /** CSS 声明：`align-items:self-end;`。 */
  readonly selfEnd = 'align-items:self-end;';
  /** CSS 声明：`align-items:self-start;`。 */
  readonly selfStart = 'align-items:self-start;';
  /**
   * 按对齐轴的逻辑起始侧对齐。
   *
   * CSS 声明：`align-items:start;`。
   */
  readonly start = 'align-items:start;';
  /**
   * 在自动尺寸及最小/最大约束允许时拉伸项目，不强制覆盖显式尺寸。
   *
   * 区别：center 保持项目尺寸并居中；stretch 尝试扩大自动尺寸。
   *
   * 注意：项目在对齐轴有显式尺寸或受最小/最大尺寸约束时，不一定填满可用区域。
   *
   * CSS 声明：`align-items:stretch;`。
   * @example
   * css(s.display.flex, s.alignItems.stretch)
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  readonly stretch = 'align-items:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`align-items:unset;`。
   */
  readonly unset = 'align-items:unset;';
  /**
   * 创建 align-items 属性作者；普通使用通过 s.alignItems 取得共享实例。
   * @example
   * class CustomAlignItemsCss extends AlignItemsCss {}
   */
  constructor() {
    super('align-items');
  }
  /**
   * 原样生成 align-items 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 align-items:value;。
   * @example
   * s.alignItems.raw('inherit') // align-items:inherit;
   */
  raw(value: Property.AlignItems | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 单独覆盖一个项目的交叉轴或块轴对齐方式。（align-self）
 *
 * 常用值：
 * - `auto`：使用父容器的 align-items 对齐方式。
 * - `stretch`：在自动尺寸和最小/最大约束允许时拉伸当前项目。
 * - `baseline`：让当前项目参与基线对齐，不等同于底边对齐。
 *
 * 适用场景：只改变某一个项目的交叉轴或块轴对齐，不改变同组其他项目。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * s.alignSelf.center
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
 */
export class AlignSelfCss extends CssProperty {
  /** CSS 声明：`align-self:anchor-center;`。 */
  readonly anchorCenter = 'align-self:anchor-center;';
  /**
   * 使用父容器的 align-items 对齐方式。
   *
   * CSS 声明：`align-self:auto;`。
   */
  readonly auto = 'align-self:auto;';
  /**
   * 让当前项目参与基线对齐，不等同于底边对齐。
   *
   * CSS 声明：`align-self:baseline;`。
   */
  readonly baseline = 'align-self:baseline;';
  /** CSS 声明：`align-self:center;`。 */
  readonly center = 'align-self:center;';
  /** CSS 声明：`align-self:end;`。 */
  readonly end = 'align-self:end;';
  /** CSS 声明：`align-self:flex-end;`。 */
  readonly flexEnd = 'align-self:flex-end;';
  /** CSS 声明：`align-self:flex-start;`。 */
  readonly flexStart = 'align-self:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`align-self:inherit;`。
   */
  readonly inherit = 'align-self:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`align-self:initial;`。
   */
  readonly initial = 'align-self:initial;';
  /** CSS 声明：`align-self:normal;`。 */
  readonly normal = 'align-self:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`align-self:revert;`。
   */
  readonly revert = 'align-self:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`align-self:revert-layer;`。
   */
  readonly revertLayer = 'align-self:revert-layer;';
  /** CSS 声明：`align-self:self-end;`。 */
  readonly selfEnd = 'align-self:self-end;';
  /** CSS 声明：`align-self:self-start;`。 */
  readonly selfStart = 'align-self:self-start;';
  /** CSS 声明：`align-self:start;`。 */
  readonly start = 'align-self:start;';
  /**
   * 在自动尺寸和最小/最大约束允许时拉伸当前项目。
   *
   * CSS 声明：`align-self:stretch;`。
   */
  readonly stretch = 'align-self:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`align-self:unset;`。
   */
  readonly unset = 'align-self:unset;';
  /**
   * 创建 align-self 属性作者；普通使用通过 s.alignSelf 取得共享实例。
   * @example
   * class CustomAlignSelfCss extends AlignSelfCss {}
   */
  constructor() {
    super('align-self');
  }
  /**
   * 原样生成 align-self 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 align-self:value;。
   * @example
   * s.alignSelf.raw('inherit') // align-self:inherit;
   */
  raw(value: Property.AlignSelf | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 旧版瀑布流布局提案中沿块轴对齐轨道的属性；使用前核对实现与规范版本。（align-tracks）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-tracks
 */
export class AlignTracksCss extends CssProperty {
  /** CSS 声明：`align-tracks:baseline;`。 */
  readonly baseline = 'align-tracks:baseline;';
  /** CSS 声明：`align-tracks:center;`。 */
  readonly center = 'align-tracks:center;';
  /** CSS 声明：`align-tracks:end;`。 */
  readonly end = 'align-tracks:end;';
  /** CSS 声明：`align-tracks:flex-end;`。 */
  readonly flexEnd = 'align-tracks:flex-end;';
  /** CSS 声明：`align-tracks:flex-start;`。 */
  readonly flexStart = 'align-tracks:flex-start;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`align-tracks:inherit;`。
   */
  readonly inherit = 'align-tracks:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`align-tracks:initial;`。
   */
  readonly initial = 'align-tracks:initial;';
  /** CSS 声明：`align-tracks:normal;`。 */
  readonly normal = 'align-tracks:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`align-tracks:revert;`。
   */
  readonly revert = 'align-tracks:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`align-tracks:revert-layer;`。
   */
  readonly revertLayer = 'align-tracks:revert-layer;';
  /** CSS 声明：`align-tracks:space-around;`。 */
  readonly spaceAround = 'align-tracks:space-around;';
  /** CSS 声明：`align-tracks:space-between;`。 */
  readonly spaceBetween = 'align-tracks:space-between;';
  /** CSS 声明：`align-tracks:space-evenly;`。 */
  readonly spaceEvenly = 'align-tracks:space-evenly;';
  /** CSS 声明：`align-tracks:start;`。 */
  readonly start = 'align-tracks:start;';
  /** CSS 声明：`align-tracks:stretch;`。 */
  readonly stretch = 'align-tracks:stretch;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`align-tracks:unset;`。
   */
  readonly unset = 'align-tracks:unset;';
  /**
   * 创建 align-tracks 属性作者；普通使用通过 s.alignTracks 取得共享实例。
   * @example
   * class CustomAlignTracksCss extends AlignTracksCss {}
   */
  constructor() {
    super('align-tracks');
  }
  /**
   * 原样生成 align-tracks 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 align-tracks:value;。
   * @example
   * s.alignTracks.raw('inherit') // align-tracks:inherit;
   */
  raw(value: Property.AlignTracks | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 选择行内或 SVG 文本参与对齐时使用的基线。（alignment-baseline）
 *
 * CSS 初始值：`baseline`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
 */
export class AlignmentBaselineCss extends CssProperty {
  /** CSS 声明：`alignment-baseline:alphabetic;`。 */
  readonly alphabetic = 'alignment-baseline:alphabetic;';
  /** CSS 声明：`alignment-baseline:baseline;`。 */
  readonly baseline = 'alignment-baseline:baseline;';
  /** CSS 声明：`alignment-baseline:central;`。 */
  readonly central = 'alignment-baseline:central;';
  /** CSS 声明：`alignment-baseline:ideographic;`。 */
  readonly ideographic = 'alignment-baseline:ideographic;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`alignment-baseline:inherit;`。
   */
  readonly inherit = 'alignment-baseline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`alignment-baseline:initial;`。
   */
  readonly initial = 'alignment-baseline:initial;';
  /** CSS 声明：`alignment-baseline:mathematical;`。 */
  readonly mathematical = 'alignment-baseline:mathematical;';
  /** CSS 声明：`alignment-baseline:middle;`。 */
  readonly middle = 'alignment-baseline:middle;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`alignment-baseline:revert;`。
   */
  readonly revert = 'alignment-baseline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`alignment-baseline:revert-layer;`。
   */
  readonly revertLayer = 'alignment-baseline:revert-layer;';
  /** CSS 声明：`alignment-baseline:text-after-edge;`。 */
  readonly textAfterEdge = 'alignment-baseline:text-after-edge;';
  /** CSS 声明：`alignment-baseline:text-before-edge;`。 */
  readonly textBeforeEdge = 'alignment-baseline:text-before-edge;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`alignment-baseline:unset;`。
   */
  readonly unset = 'alignment-baseline:unset;';
  /**
   * 创建 alignment-baseline 属性作者；普通使用通过 s.alignmentBaseline 取得共享实例。
   * @example
   * class CustomAlignmentBaselineCss extends AlignmentBaselineCss {}
   */
  constructor() {
    super('alignment-baseline');
  }
  /**
   * 原样生成 alignment-baseline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 alignment-baseline:value;。
   * @example
   * s.alignmentBaseline.raw('inherit') // alignment-baseline:inherit;
   */
  raw(value: Property.AlignmentBaseline | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 批量重置 CSS 属性；不重置 direction、unicode-bidi 和自定义属性。（all）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
 */
export class AllCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`all:inherit;`。
   */
  readonly inherit = 'all:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`all:initial;`。
   */
  readonly initial = 'all:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`all:revert;`。
   */
  readonly revert = 'all:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`all:revert-layer;`。
   */
  readonly revertLayer = 'all:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`all:unset;`。
   */
  readonly unset = 'all:unset;';
  /**
   * 创建 all 属性作者；普通使用通过 s.all 取得共享实例。
   * @example
   * class CustomAllCss extends AllCss {}
   */
  constructor() {
    super('all');
  }
  /**
   * 原样生成 all 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 all:value;。
   * @example
   * s.all.raw('inherit') // all:inherit;
   */
  raw(value: Property.All | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 为元素声明锚点名称，供锚点定位的元素引用。（anchor-name）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
 */
export class AnchorNameCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`anchor-name:inherit;`。
   */
  readonly inherit = 'anchor-name:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`anchor-name:initial;`。
   */
  readonly initial = 'anchor-name:initial;';
  /** CSS 声明：`anchor-name:none;`。 */
  readonly none = 'anchor-name:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`anchor-name:revert;`。
   */
  readonly revert = 'anchor-name:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`anchor-name:revert-layer;`。
   */
  readonly revertLayer = 'anchor-name:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`anchor-name:unset;`。
   */
  readonly unset = 'anchor-name:unset;';
  /**
   * 创建 anchor-name 属性作者；普通使用通过 s.anchorName 取得共享实例。
   * @example
   * class CustomAnchorNameCss extends AnchorNameCss {}
   */
  constructor() {
    super('anchor-name');
  }
  /**
   * 原样生成 anchor-name 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 anchor-name:value;。
   * @example
   * s.anchorName.raw('inherit') // anchor-name:inherit;
   */
  raw(value: Property.AnchorName | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 限制锚点名称的可见范围，避免同名锚点跨组件互相影响。（anchor-scope）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-scope
 */
export class AnchorScopeCss extends CssProperty {
  /** CSS 声明：`anchor-scope:all;`。 */
  readonly all = 'anchor-scope:all;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`anchor-scope:inherit;`。
   */
  readonly inherit = 'anchor-scope:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`anchor-scope:initial;`。
   */
  readonly initial = 'anchor-scope:initial;';
  /** CSS 声明：`anchor-scope:none;`。 */
  readonly none = 'anchor-scope:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`anchor-scope:revert;`。
   */
  readonly revert = 'anchor-scope:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`anchor-scope:revert-layer;`。
   */
  readonly revertLayer = 'anchor-scope:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`anchor-scope:unset;`。
   */
  readonly unset = 'anchor-scope:unset;';
  /**
   * 创建 anchor-scope 属性作者；普通使用通过 s.anchorScope 取得共享实例。
   * @example
   * class CustomAnchorScopeCss extends AnchorScopeCss {}
   */
  constructor() {
    super('anchor-scope');
  }
  /**
   * 原样生成 anchor-scope 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 anchor-scope:value;。
   * @example
   * s.anchorScope.raw('inherit') // anchor-scope:inherit;
   */
  raw(value: Property.AnchorScope | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 集中设置关键帧动画的名称、时长、缓动、延迟、次数及播放行为。（animation）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
 */
export class AnimationCss extends CssProperty {
  /** CSS 声明：`animation:alternate;`。 */
  readonly alternate = 'animation:alternate;';
  /** CSS 声明：`animation:alternate-reverse;`。 */
  readonly alternateReverse = 'animation:alternate-reverse;';
  /** CSS 声明：`animation:auto;`。 */
  readonly auto = 'animation:auto;';
  /** CSS 声明：`animation:backwards;`。 */
  readonly backwards = 'animation:backwards;';
  /** CSS 声明：`animation:both;`。 */
  readonly both = 'animation:both;';
  /** CSS 声明：`animation:ease;`。 */
  readonly ease = 'animation:ease;';
  /** CSS 声明：`animation:ease-in;`。 */
  readonly easeIn = 'animation:ease-in;';
  /** CSS 声明：`animation:ease-in-out;`。 */
  readonly easeInOut = 'animation:ease-in-out;';
  /** CSS 声明：`animation:ease-out;`。 */
  readonly easeOut = 'animation:ease-out;';
  /** CSS 声明：`animation:forwards;`。 */
  readonly forwards = 'animation:forwards;';
  /** CSS 声明：`animation:infinite;`。 */
  readonly infinite = 'animation:infinite;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation:inherit;`。
   */
  readonly inherit = 'animation:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation:initial;`。
   */
  readonly initial = 'animation:initial;';
  /** CSS 声明：`animation:linear;`。 */
  readonly linear = 'animation:linear;';
  /** CSS 声明：`animation:none;`。 */
  readonly none = 'animation:none;';
  /** CSS 声明：`animation:normal;`。 */
  readonly normal = 'animation:normal;';
  /** CSS 声明：`animation:paused;`。 */
  readonly paused = 'animation:paused;';
  /** CSS 声明：`animation:reverse;`。 */
  readonly reverse = 'animation:reverse;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation:revert;`。
   */
  readonly revert = 'animation:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation:revert-layer;`。
   */
  readonly revertLayer = 'animation:revert-layer;';
  /** CSS 声明：`animation:running;`。 */
  readonly running = 'animation:running;';
  /** CSS 声明：`animation:step-end;`。 */
  readonly stepEnd = 'animation:step-end;';
  /** CSS 声明：`animation:step-start;`。 */
  readonly stepStart = 'animation:step-start;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation:unset;`。
   */
  readonly unset = 'animation:unset;';
  /**
   * 创建 animation 属性作者；普通使用通过 s.animation 取得共享实例。
   * @example
   * class CustomAnimationCss extends AnimationCss {}
   */
  constructor() {
    super('animation');
  }
  /**
   * 原样生成 animation 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation:value;。
   * @example
   * s.animation.raw('inherit') // animation:inherit;
   */
  raw(value: Property.Animation | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 ms 单位生成完整属性声明。毫秒，1000ms 等于 1s。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 ms。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animation.ms(1)
   */
  ms(value: number): string {
    return this.declaration(`${value}ms`);
  }
  /**
   * 使用 s 单位生成完整属性声明。秒，1s 等于 1000ms。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 s。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animation.s(1)
   */
  s(value: number): string {
    return this.declaration(`${value}s`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.animation.calc('var(--value) * 2')
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
   * s.animation.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.Animation | CssString,
    ...others: (Property.Animation | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.animation.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.Animation | CssString,
    ...others: (Property.Animation | CssString)[]
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
   * s.animation.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.Animation | CssString,
    preferred: Property.Animation | CssString,
    maximum: Property.Animation | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置动画效果与底层属性值的替换、叠加或累积方式。（animation-composition）
 *
 * CSS 初始值：`replace`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
 */
export class AnimationCompositionCss extends CssProperty {
  /** CSS 声明：`animation-composition:accumulate;`。 */
  readonly accumulate = 'animation-composition:accumulate;';
  /** CSS 声明：`animation-composition:add;`。 */
  readonly add = 'animation-composition:add;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-composition:inherit;`。
   */
  readonly inherit = 'animation-composition:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-composition:initial;`。
   */
  readonly initial = 'animation-composition:initial;';
  /** CSS 声明：`animation-composition:replace;`。 */
  readonly replace = 'animation-composition:replace;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-composition:revert;`。
   */
  readonly revert = 'animation-composition:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-composition:revert-layer;`。
   */
  readonly revertLayer = 'animation-composition:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-composition:unset;`。
   */
  readonly unset = 'animation-composition:unset;';
  /**
   * 创建 animation-composition 属性作者；普通使用通过 s.animationComposition 取得共享实例。
   * @example
   * class CustomAnimationCompositionCss extends AnimationCompositionCss {}
   */
  constructor() {
    super('animation-composition');
  }
  /**
   * 原样生成 animation-composition 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-composition:value;。
   * @example
   * s.animationComposition.raw('inherit') // animation-composition:inherit;
   */
  raw(value: Property.AnimationComposition | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置动画开始前的延迟；负值表示从动画中途开始播放。（animation-delay）
 *
 * CSS 初始值：`0s`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
 */
export class AnimationDelayCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-delay:inherit;`。
   */
  readonly inherit = 'animation-delay:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-delay:initial;`。
   */
  readonly initial = 'animation-delay:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-delay:revert;`。
   */
  readonly revert = 'animation-delay:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-delay:revert-layer;`。
   */
  readonly revertLayer = 'animation-delay:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-delay:unset;`。
   */
  readonly unset = 'animation-delay:unset;';
  /**
   * 创建 animation-delay 属性作者；普通使用通过 s.animationDelay 取得共享实例。
   * @example
   * class CustomAnimationDelayCss extends AnimationDelayCss {}
   */
  constructor() {
    super('animation-delay');
  }
  /**
   * 原样生成 animation-delay 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-delay:value;。
   * @example
   * s.animationDelay.raw('inherit') // animation-delay:inherit;
   */
  raw(value: Property.AnimationDelay | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 ms 单位生成完整属性声明。毫秒，1000ms 等于 1s。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 ms。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animationDelay.ms(1)
   */
  ms(value: number): string {
    return this.declaration(`${value}ms`);
  }
  /**
   * 使用 s 单位生成完整属性声明。秒，1s 等于 1000ms。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 s。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animationDelay.s(1)
   */
  s(value: number): string {
    return this.declaration(`${value}s`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.animationDelay.calc('var(--value) * 2')
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
   * s.animationDelay.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.AnimationDelay | CssString,
    ...others: (Property.AnimationDelay | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.animationDelay.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.AnimationDelay | CssString,
    ...others: (Property.AnimationDelay | CssString)[]
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
   * s.animationDelay.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.AnimationDelay | CssString,
    preferred: Property.AnimationDelay | CssString,
    maximum: Property.AnimationDelay | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置动画按正向、反向或交替方向播放。（animation-direction）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
 */
export class AnimationDirectionCss extends CssProperty {
  /** CSS 声明：`animation-direction:alternate;`。 */
  readonly alternate = 'animation-direction:alternate;';
  /** CSS 声明：`animation-direction:alternate-reverse;`。 */
  readonly alternateReverse = 'animation-direction:alternate-reverse;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-direction:inherit;`。
   */
  readonly inherit = 'animation-direction:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-direction:initial;`。
   */
  readonly initial = 'animation-direction:initial;';
  /** CSS 声明：`animation-direction:normal;`。 */
  readonly normal = 'animation-direction:normal;';
  /** CSS 声明：`animation-direction:reverse;`。 */
  readonly reverse = 'animation-direction:reverse;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-direction:revert;`。
   */
  readonly revert = 'animation-direction:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-direction:revert-layer;`。
   */
  readonly revertLayer = 'animation-direction:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-direction:unset;`。
   */
  readonly unset = 'animation-direction:unset;';
  /**
   * 创建 animation-direction 属性作者；普通使用通过 s.animationDirection 取得共享实例。
   * @example
   * class CustomAnimationDirectionCss extends AnimationDirectionCss {}
   */
  constructor() {
    super('animation-direction');
  }
  /**
   * 原样生成 animation-direction 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-direction:value;。
   * @example
   * s.animationDirection.raw('inherit') // animation-direction:inherit;
   */
  raw(value: Property.AnimationDirection | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置动画完成一次循环的时长。（animation-duration）
 *
 * CSS 初始值：`0s`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
 */
export class AnimationDurationCss extends CssProperty {
  /** CSS 声明：`animation-duration:auto;`。 */
  readonly auto = 'animation-duration:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-duration:inherit;`。
   */
  readonly inherit = 'animation-duration:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-duration:initial;`。
   */
  readonly initial = 'animation-duration:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-duration:revert;`。
   */
  readonly revert = 'animation-duration:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-duration:revert-layer;`。
   */
  readonly revertLayer = 'animation-duration:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-duration:unset;`。
   */
  readonly unset = 'animation-duration:unset;';
  /**
   * 创建 animation-duration 属性作者；普通使用通过 s.animationDuration 取得共享实例。
   * @example
   * class CustomAnimationDurationCss extends AnimationDurationCss {}
   */
  constructor() {
    super('animation-duration');
  }
  /**
   * 原样生成 animation-duration 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-duration:value;。
   * @example
   * s.animationDuration.raw('inherit') // animation-duration:inherit;
   */
  raw(value: Property.AnimationDuration | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 ms 单位生成完整属性声明。毫秒，1000ms 等于 1s。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 ms。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animationDuration.ms(1)
   */
  ms(value: number): string {
    return this.declaration(`${value}ms`);
  }
  /**
   * 使用 s 单位生成完整属性声明。秒，1s 等于 1000ms。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 s。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animationDuration.s(1)
   */
  s(value: number): string {
    return this.declaration(`${value}s`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.animationDuration.calc('var(--value) * 2')
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
   * s.animationDuration.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.AnimationDuration | CssString,
    ...others: (Property.AnimationDuration | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.animationDuration.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.AnimationDuration | CssString,
    ...others: (Property.AnimationDuration | CssString)[]
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
   * s.animationDuration.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.AnimationDuration | CssString,
    preferred: Property.AnimationDuration | CssString,
    maximum: Property.AnimationDuration | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置动画在有效播放区间之外是否应用关键帧样式。（animation-fill-mode）
 *
 * 控制动画有效播放区间之外的样式，不会把最终值写回普通 CSS 声明。
 *
 * 常用值：
 * - `none`：动画有效区间之外不应用动画关键帧值。
 * - `forwards`：播放结束后保留最后生效关键帧的效果；最后帧取决于方向和循环次数。
 * - `backwards`：延迟阶段应用最先生效关键帧的效果，具体帧取决于播放方向。
 * - `both`：同时应用 backwards 和 forwards 的区间外效果。
 *
 * 适用场景：控制延迟阶段和播放结束后的动画呈现。
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @example
 * s.animationFillMode.forwards
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
 */
export class AnimationFillModeCss extends CssProperty {
  /**
   * 延迟阶段应用最先生效关键帧的效果，具体帧取决于播放方向。
   *
   * CSS 声明：`animation-fill-mode:backwards;`。
   */
  readonly backwards = 'animation-fill-mode:backwards;';
  /**
   * 同时应用 backwards 和 forwards 的区间外效果。
   *
   * CSS 声明：`animation-fill-mode:both;`。
   */
  readonly both = 'animation-fill-mode:both;';
  /**
   * 播放结束后保留最后生效关键帧的效果；最后帧取决于方向和循环次数。
   *
   * CSS 声明：`animation-fill-mode:forwards;`。
   */
  readonly forwards = 'animation-fill-mode:forwards;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-fill-mode:inherit;`。
   */
  readonly inherit = 'animation-fill-mode:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-fill-mode:initial;`。
   */
  readonly initial = 'animation-fill-mode:initial;';
  /**
   * 动画有效区间之外不应用动画关键帧值。
   *
   * CSS 声明：`animation-fill-mode:none;`。
   */
  readonly none = 'animation-fill-mode:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-fill-mode:revert;`。
   */
  readonly revert = 'animation-fill-mode:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-fill-mode:revert-layer;`。
   */
  readonly revertLayer = 'animation-fill-mode:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-fill-mode:unset;`。
   */
  readonly unset = 'animation-fill-mode:unset;';
  /**
   * 创建 animation-fill-mode 属性作者；普通使用通过 s.animationFillMode 取得共享实例。
   * @example
   * class CustomAnimationFillModeCss extends AnimationFillModeCss {}
   */
  constructor() {
    super('animation-fill-mode');
  }
  /**
   * 原样生成 animation-fill-mode 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-fill-mode:value;。
   * @example
   * s.animationFillMode.raw('inherit') // animation-fill-mode:inherit;
   */
  raw(value: Property.AnimationFillMode | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置动画循环次数，或无限循环。（animation-iteration-count）
 *
 * CSS 初始值：`1`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
 */
export class AnimationIterationCountCss extends CssProperty {
  /** CSS 声明：`animation-iteration-count:infinite;`。 */
  readonly infinite = 'animation-iteration-count:infinite;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-iteration-count:inherit;`。
   */
  readonly inherit = 'animation-iteration-count:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-iteration-count:initial;`。
   */
  readonly initial = 'animation-iteration-count:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-iteration-count:revert;`。
   */
  readonly revert = 'animation-iteration-count:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-iteration-count:revert-layer;`。
   */
  readonly revertLayer = 'animation-iteration-count:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-iteration-count:unset;`。
   */
  readonly unset = 'animation-iteration-count:unset;';
  /**
   * 创建 animation-iteration-count 属性作者；普通使用通过 s.animationIterationCount 取得共享实例。
   * @example
   * class CustomAnimationIterationCountCss extends AnimationIterationCountCss {}
   */
  constructor() {
    super('animation-iteration-count');
  }
  /**
   * 原样生成 animation-iteration-count 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-iteration-count:value;。
   * @example
   * s.animationIterationCount.raw('inherit') // animation-iteration-count:inherit;
   */
  raw(value: Property.AnimationIterationCount | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.animationIterationCount.calc('var(--value) * 2')
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
   * s.animationIterationCount.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.AnimationIterationCount | CssString,
    ...others: (Property.AnimationIterationCount | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.animationIterationCount.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.AnimationIterationCount | CssString,
    ...others: (Property.AnimationIterationCount | CssString)[]
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
   * s.animationIterationCount.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.AnimationIterationCount | CssString,
    preferred: Property.AnimationIterationCount | CssString,
    maximum: Property.AnimationIterationCount | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 选择要播放的 @keyframes 动画名称。（animation-name）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
 */
export class AnimationNameCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-name:inherit;`。
   */
  readonly inherit = 'animation-name:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-name:initial;`。
   */
  readonly initial = 'animation-name:initial;';
  /** CSS 声明：`animation-name:none;`。 */
  readonly none = 'animation-name:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-name:revert;`。
   */
  readonly revert = 'animation-name:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-name:revert-layer;`。
   */
  readonly revertLayer = 'animation-name:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-name:unset;`。
   */
  readonly unset = 'animation-name:unset;';
  /**
   * 创建 animation-name 属性作者；普通使用通过 s.animationName 取得共享实例。
   * @example
   * class CustomAnimationNameCss extends AnimationNameCss {}
   */
  constructor() {
    super('animation-name');
  }
  /**
   * 原样生成 animation-name 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-name:value;。
   * @example
   * s.animationName.raw('inherit') // animation-name:inherit;
   */
  raw(value: Property.AnimationName | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 控制动画运行或暂停，暂停后可从原位置继续。（animation-play-state）
 *
 * CSS 初始值：`running`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
 */
export class AnimationPlayStateCss extends CssProperty {
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-play-state:inherit;`。
   */
  readonly inherit = 'animation-play-state:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-play-state:initial;`。
   */
  readonly initial = 'animation-play-state:initial;';
  /** CSS 声明：`animation-play-state:paused;`。 */
  readonly paused = 'animation-play-state:paused;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-play-state:revert;`。
   */
  readonly revert = 'animation-play-state:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-play-state:revert-layer;`。
   */
  readonly revertLayer = 'animation-play-state:revert-layer;';
  /** CSS 声明：`animation-play-state:running;`。 */
  readonly running = 'animation-play-state:running;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-play-state:unset;`。
   */
  readonly unset = 'animation-play-state:unset;';
  /**
   * 创建 animation-play-state 属性作者；普通使用通过 s.animationPlayState 取得共享实例。
   * @example
   * class CustomAnimationPlayStateCss extends AnimationPlayStateCss {}
   */
  constructor() {
    super('animation-play-state');
  }
  /**
   * 原样生成 animation-play-state 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-play-state:value;。
   * @example
   * s.animationPlayState.raw('inherit') // animation-play-state:inherit;
   */
  raw(value: Property.AnimationPlayState | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置动画附着到时间线的起止范围。（animation-range）
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
 */
export class AnimationRangeCss extends LengthCssProperty {
  /** CSS 声明：`animation-range:contain;`。 */
  readonly contain = 'animation-range:contain;';
  /** CSS 声明：`animation-range:cover;`。 */
  readonly cover = 'animation-range:cover;';
  /** CSS 声明：`animation-range:entry;`。 */
  readonly entry = 'animation-range:entry;';
  /** CSS 声明：`animation-range:entry-crossing;`。 */
  readonly entryCrossing = 'animation-range:entry-crossing;';
  /** CSS 声明：`animation-range:exit;`。 */
  readonly exit = 'animation-range:exit;';
  /** CSS 声明：`animation-range:exit-crossing;`。 */
  readonly exitCrossing = 'animation-range:exit-crossing;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-range:inherit;`。
   */
  readonly inherit = 'animation-range:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-range:initial;`。
   */
  readonly initial = 'animation-range:initial;';
  /** CSS 声明：`animation-range:normal;`。 */
  readonly normal = 'animation-range:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-range:revert;`。
   */
  readonly revert = 'animation-range:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-range:revert-layer;`。
   */
  readonly revertLayer = 'animation-range:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-range:unset;`。
   */
  readonly unset = 'animation-range:unset;';
  /**
   * 创建 animation-range 属性作者；普通使用通过 s.animationRange 取得共享实例。
   * @example
   * class CustomAnimationRangeCss extends AnimationRangeCss {}
   */
  constructor() {
    super('animation-range');
  }
  /**
   * 原样生成 animation-range 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-range:value;。
   * @example
   * s.animationRange.raw('inherit') // animation-range:inherit;
   */
  raw(value: Property.AnimationRange | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.animationRange.calc('var(--value) * 2')
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
   * s.animationRange.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.AnimationRange | CssString,
    ...others: (Property.AnimationRange | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.animationRange.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.AnimationRange | CssString,
    ...others: (Property.AnimationRange | CssString)[]
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
   * s.animationRange.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.AnimationRange | CssString,
    preferred: Property.AnimationRange | CssString,
    maximum: Property.AnimationRange | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置动画在时间线上的附着范围终点。（animation-range-end）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
 */
export class AnimationRangeEndCss extends LengthCssProperty {
  /** CSS 声明：`animation-range-end:contain;`。 */
  readonly contain = 'animation-range-end:contain;';
  /** CSS 声明：`animation-range-end:cover;`。 */
  readonly cover = 'animation-range-end:cover;';
  /** CSS 声明：`animation-range-end:entry;`。 */
  readonly entry = 'animation-range-end:entry;';
  /** CSS 声明：`animation-range-end:entry-crossing;`。 */
  readonly entryCrossing = 'animation-range-end:entry-crossing;';
  /** CSS 声明：`animation-range-end:exit;`。 */
  readonly exit = 'animation-range-end:exit;';
  /** CSS 声明：`animation-range-end:exit-crossing;`。 */
  readonly exitCrossing = 'animation-range-end:exit-crossing;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-range-end:inherit;`。
   */
  readonly inherit = 'animation-range-end:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-range-end:initial;`。
   */
  readonly initial = 'animation-range-end:initial;';
  /** CSS 声明：`animation-range-end:normal;`。 */
  readonly normal = 'animation-range-end:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-range-end:revert;`。
   */
  readonly revert = 'animation-range-end:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-range-end:revert-layer;`。
   */
  readonly revertLayer = 'animation-range-end:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-range-end:unset;`。
   */
  readonly unset = 'animation-range-end:unset;';
  /**
   * 创建 animation-range-end 属性作者；普通使用通过 s.animationRangeEnd 取得共享实例。
   * @example
   * class CustomAnimationRangeEndCss extends AnimationRangeEndCss {}
   */
  constructor() {
    super('animation-range-end');
  }
  /**
   * 原样生成 animation-range-end 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-range-end:value;。
   * @example
   * s.animationRangeEnd.raw('inherit') // animation-range-end:inherit;
   */
  raw(value: Property.AnimationRangeEnd | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animationRangeEnd.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.animationRangeEnd.calc('var(--value) * 2')
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
   * s.animationRangeEnd.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.AnimationRangeEnd | CssString,
    ...others: (Property.AnimationRangeEnd | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.animationRangeEnd.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.AnimationRangeEnd | CssString,
    ...others: (Property.AnimationRangeEnd | CssString)[]
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
   * s.animationRangeEnd.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.AnimationRangeEnd | CssString,
    preferred: Property.AnimationRangeEnd | CssString,
    maximum: Property.AnimationRangeEnd | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 设置动画在时间线上的附着范围起点。（animation-range-start）
 *
 * CSS 初始值：`normal`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
 */
export class AnimationRangeStartCss extends LengthCssProperty {
  /** CSS 声明：`animation-range-start:contain;`。 */
  readonly contain = 'animation-range-start:contain;';
  /** CSS 声明：`animation-range-start:cover;`。 */
  readonly cover = 'animation-range-start:cover;';
  /** CSS 声明：`animation-range-start:entry;`。 */
  readonly entry = 'animation-range-start:entry;';
  /** CSS 声明：`animation-range-start:entry-crossing;`。 */
  readonly entryCrossing = 'animation-range-start:entry-crossing;';
  /** CSS 声明：`animation-range-start:exit;`。 */
  readonly exit = 'animation-range-start:exit;';
  /** CSS 声明：`animation-range-start:exit-crossing;`。 */
  readonly exitCrossing = 'animation-range-start:exit-crossing;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-range-start:inherit;`。
   */
  readonly inherit = 'animation-range-start:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-range-start:initial;`。
   */
  readonly initial = 'animation-range-start:initial;';
  /** CSS 声明：`animation-range-start:normal;`。 */
  readonly normal = 'animation-range-start:normal;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-range-start:revert;`。
   */
  readonly revert = 'animation-range-start:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-range-start:revert-layer;`。
   */
  readonly revertLayer = 'animation-range-start:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-range-start:unset;`。
   */
  readonly unset = 'animation-range-start:unset;';
  /**
   * 创建 animation-range-start 属性作者；普通使用通过 s.animationRangeStart 取得共享实例。
   * @example
   * class CustomAnimationRangeStartCss extends AnimationRangeStartCss {}
   */
  constructor() {
    super('animation-range-start');
  }
  /**
   * 原样生成 animation-range-start 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-range-start:value;。
   * @example
   * s.animationRangeStart.raw('inherit') // animation-range-start:inherit;
   */
  raw(value: Property.AnimationRangeStart | CssString): string {
    return this.declaration(value);
  }
  /**
   * 使用 % 单位生成完整属性声明。百分比，100 表示 100%；参照对象由具体属性决定。
   *
   * 不做数值范围或 CSS 语法校验；负值、百分比及维度是否合法由具体属性和浏览器决定。
   * @param value 属性值的数值，自动附加 %。
   * @returns 当前属性的完整声明字符串，不是可传入其他方法的裸 CSS 值。
   * @example
   * s.animationRangeStart.percent(1)
   */
  percent(value: number): string {
    return this.declaration(`${value}%`);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.animationRangeStart.calc('var(--value) * 2')
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
   * s.animationRangeStart.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.AnimationRangeStart | CssString,
    ...others: (Property.AnimationRangeStart | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.animationRangeStart.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.AnimationRangeStart | CssString,
    ...others: (Property.AnimationRangeStart | CssString)[]
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
   * s.animationRangeStart.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.AnimationRangeStart | CssString,
    preferred: Property.AnimationRangeStart | CssString,
    maximum: Property.AnimationRangeStart | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}

/**
 * 选择驱动动画的时间线，例如文档时间或滚动进度。（animation-timeline）
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
 */
export class AnimationTimelineCss extends CssProperty {
  /** CSS 声明：`animation-timeline:auto;`。 */
  readonly auto = 'animation-timeline:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-timeline:inherit;`。
   */
  readonly inherit = 'animation-timeline:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-timeline:initial;`。
   */
  readonly initial = 'animation-timeline:initial;';
  /** CSS 声明：`animation-timeline:none;`。 */
  readonly none = 'animation-timeline:none;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-timeline:revert;`。
   */
  readonly revert = 'animation-timeline:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-timeline:revert-layer;`。
   */
  readonly revertLayer = 'animation-timeline:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-timeline:unset;`。
   */
  readonly unset = 'animation-timeline:unset;';
  /**
   * 创建 animation-timeline 属性作者；普通使用通过 s.animationTimeline 取得共享实例。
   * @example
   * class CustomAnimationTimelineCss extends AnimationTimelineCss {}
   */
  constructor() {
    super('animation-timeline');
  }
  /**
   * 原样生成 animation-timeline 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-timeline:value;。
   * @example
   * s.animationTimeline.raw('inherit') // animation-timeline:inherit;
   */
  raw(value: Property.AnimationTimeline | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置动画每个关键帧区间内进度变化的缓动函数。（animation-timing-function）
 *
 * CSS 初始值：`ease`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
 */
export class AnimationTimingFunctionCss extends CssProperty {
  /** CSS 声明：`animation-timing-function:ease;`。 */
  readonly ease = 'animation-timing-function:ease;';
  /** CSS 声明：`animation-timing-function:ease-in;`。 */
  readonly easeIn = 'animation-timing-function:ease-in;';
  /** CSS 声明：`animation-timing-function:ease-in-out;`。 */
  readonly easeInOut = 'animation-timing-function:ease-in-out;';
  /** CSS 声明：`animation-timing-function:ease-out;`。 */
  readonly easeOut = 'animation-timing-function:ease-out;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`animation-timing-function:inherit;`。
   */
  readonly inherit = 'animation-timing-function:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`animation-timing-function:initial;`。
   */
  readonly initial = 'animation-timing-function:initial;';
  /** CSS 声明：`animation-timing-function:linear;`。 */
  readonly linear = 'animation-timing-function:linear;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`animation-timing-function:revert;`。
   */
  readonly revert = 'animation-timing-function:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`animation-timing-function:revert-layer;`。
   */
  readonly revertLayer = 'animation-timing-function:revert-layer;';
  /** CSS 声明：`animation-timing-function:step-end;`。 */
  readonly stepEnd = 'animation-timing-function:step-end;';
  /** CSS 声明：`animation-timing-function:step-start;`。 */
  readonly stepStart = 'animation-timing-function:step-start;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`animation-timing-function:unset;`。
   */
  readonly unset = 'animation-timing-function:unset;';
  /**
   * 创建 animation-timing-function 属性作者；普通使用通过 s.animationTimingFunction 取得共享实例。
   * @example
   * class CustomAnimationTimingFunctionCss extends AnimationTimingFunctionCss {}
   */
  constructor() {
    super('animation-timing-function');
  }
  /**
   * 原样生成 animation-timing-function 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 animation-timing-function:value;。
   * @example
   * s.animationTimingFunction.raw('inherit') // animation-timing-function:inherit;
   */
  raw(value: Property.AnimationTimingFunction | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 控制元素是否采用平台原生控件外观。（appearance）
 *
 * CSS 初始值：`none`（不同于浏览器默认样式表）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
 */
export class AppearanceCss extends CssProperty {
  /** CSS 声明：`appearance:auto;`。 */
  readonly auto = 'appearance:auto;';
  /** CSS 声明：`appearance:button;`。 */
  readonly button = 'appearance:button;';
  /** CSS 声明：`appearance:checkbox;`。 */
  readonly checkbox = 'appearance:checkbox;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`appearance:inherit;`。
   */
  readonly inherit = 'appearance:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`appearance:initial;`。
   */
  readonly initial = 'appearance:initial;';
  /** CSS 声明：`appearance:listbox;`。 */
  readonly listbox = 'appearance:listbox;';
  /** CSS 声明：`appearance:menulist;`。 */
  readonly menulist = 'appearance:menulist;';
  /** CSS 声明：`appearance:menulist-button;`。 */
  readonly menulistButton = 'appearance:menulist-button;';
  /** CSS 声明：`appearance:meter;`。 */
  readonly meter = 'appearance:meter;';
  /** CSS 声明：`appearance:none;`。 */
  readonly none = 'appearance:none;';
  /** CSS 声明：`appearance:progress-bar;`。 */
  readonly progressBar = 'appearance:progress-bar;';
  /** CSS 声明：`appearance:radio;`。 */
  readonly radio = 'appearance:radio;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`appearance:revert;`。
   */
  readonly revert = 'appearance:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`appearance:revert-layer;`。
   */
  readonly revertLayer = 'appearance:revert-layer;';
  /** CSS 声明：`appearance:searchfield;`。 */
  readonly searchfield = 'appearance:searchfield;';
  /** CSS 声明：`appearance:textarea;`。 */
  readonly textarea = 'appearance:textarea;';
  /** CSS 声明：`appearance:textfield;`。 */
  readonly textfield = 'appearance:textfield;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`appearance:unset;`。
   */
  readonly unset = 'appearance:unset;';
  /**
   * 创建 appearance 属性作者；普通使用通过 s.appearance 取得共享实例。
   * @example
   * class CustomAppearanceCss extends AppearanceCss {}
   */
  constructor() {
    super('appearance');
  }
  /**
   * 原样生成 appearance 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 appearance:value;。
   * @example
   * s.appearance.raw('inherit') // appearance:inherit;
   */
  raw(value: Property.Appearance | CssString): string {
    return this.declaration(value);
  }
}

/**
 * 设置盒子的首选宽高比，参与自动尺寸计算。（aspect-ratio）
 *
 * 通常需要至少一个轴为自动尺寸才参与尺寸计算；两个轴都被明确尺寸约束时，不会强行保持比例。
 *
 * 适用场景：图片占位、视频和卡片封面区域。
 *
 * CSS 初始值：`auto`（不同于浏览器默认样式表）。
 * @example
 * css(s.aspectRatio.raw('16 / 9'), s.width.percent(100))
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
 */
export class AspectRatioCss extends CssProperty {
  /** CSS 声明：`aspect-ratio:auto;`。 */
  readonly auto = 'aspect-ratio:auto;';
  /**
   * 使用父元素该属性的计算值，即使这个属性默认不继承。
   *
   * CSS 声明：`aspect-ratio:inherit;`。
   */
  readonly inherit = 'aspect-ratio:inherit;';
  /**
   * 使用 CSS 规范定义的初始值，不是浏览器默认样式表给元素设置的值。
   *
   * CSS 声明：`aspect-ratio:initial;`。
   */
  readonly initial = 'aspect-ratio:initial;';
  /**
   * 按层叠来源回退该属性，可能恢复用户或浏览器样式；不等同于 initial。
   *
   * CSS 声明：`aspect-ratio:revert;`。
   */
  readonly revert = 'aspect-ratio:revert;';
  /**
   * 回退当前层叠层对该属性的贡献，让较早层的声明参与决定结果。
   *
   * CSS 声明：`aspect-ratio:revert-layer;`。
   */
  readonly revertLayer = 'aspect-ratio:revert-layer;';
  /**
   * 继承型属性按 inherit 处理，非继承型属性按 initial 处理。
   *
   * CSS 声明：`aspect-ratio:unset;`。
   */
  readonly unset = 'aspect-ratio:unset;';
  /**
   * 创建 aspect-ratio 属性作者；普通使用通过 s.aspectRatio 取得共享实例。
   * @example
   * class CustomAspectRatioCss extends AspectRatioCss {}
   */
  constructor() {
    super('aspect-ratio');
  }
  /**
   * 原样生成 aspect-ratio 声明，保留关键字补全并接受自定义 CSS 值。
   *
   * 不做 CSS 语法校验或转义。多个值、函数或变量可写在同一个字符串中。
   * @param value 裸 CSS 属性值；不包含属性名或末尾分号。数字不自动添加单位。
   * @returns 完整声明字符串，形如 aspect-ratio:value;。
   * @example
   * s.aspectRatio.raw('inherit') // aspect-ratio:inherit;
   */
  raw(value: Property.AspectRatio | CssString): string {
    return this.declaration(value);
  }
  /**
   * 将数学表达式放入 CSS calc()，由浏览器计算。
   * @param expression 不含外层 calc() 的表达式；非零长度须带单位，加减号两侧保留空格。
   * @returns 包含 calc(...) 的完整属性声明，不会在 JavaScript 中求值。
   * @example
   * s.aspectRatio.calc('var(--value) * 2')
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
   * s.aspectRatio.min('var(--first)', 'var(--second)')
   */
  min(
    value: Property.AspectRatio | CssString,
    ...others: (Property.AspectRatio | CssString)[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  /**
   * 生成 CSS max()，从同维度的候选值中选择最大值。
   * @param value 第一个 CSS 值；长度应带单位，不能传完整属性声明。
   * @param others 其余同维度的 CSS 值；变量必须解析为当前属性允许的值。
   * @returns 包含 max(...) 的完整属性声明。
   * @example
   * s.aspectRatio.max('var(--first)', 'var(--second)')
   */
  max(
    value: Property.AspectRatio | CssString,
    ...others: (Property.AspectRatio | CssString)[]
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
   * s.aspectRatio.clamp('var(--minimum)', 'var(--preferred)', 'var(--maximum)')
   */
  clamp(
    minimum: Property.AspectRatio | CssString,
    preferred: Property.AspectRatio | CssString,
    maximum: Property.AspectRatio | CssString,
  ): string {
    return this.raw(`clamp(${[minimum, preferred, maximum].join(', ')})`);
  }
}
