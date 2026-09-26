// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** CSS 属性 caption-side；初始值 top。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
 */
export class CaptionSideCss extends CssProperty<Property.CaptionSide> {
  readonly bottom = 'caption-side:bottom;';
  readonly inherit = 'caption-side:inherit;';
  readonly initial = 'caption-side:initial;';
  readonly revert = 'caption-side:revert;';
  readonly revertLayer = 'caption-side:revert-layer;';
  readonly top = 'caption-side:top;';
  readonly unset = 'caption-side:unset;';
  constructor() {
    super('caption-side');
  }
}

/** CSS 属性 caret。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret
 */
export class CaretCss extends CssProperty<Property.Caret> {
  readonly AccentColor = 'caret:AccentColor;';
  readonly AccentColorText = 'caret:AccentColorText;';
  readonly ActiveBorder = 'caret:ActiveBorder;';
  readonly ActiveCaption = 'caret:ActiveCaption;';
  readonly ActiveText = 'caret:ActiveText;';
  readonly AppWorkspace = 'caret:AppWorkspace;';
  readonly Background = 'caret:Background;';
  readonly ButtonBorder = 'caret:ButtonBorder;';
  readonly ButtonFace = 'caret:ButtonFace;';
  readonly ButtonHighlight = 'caret:ButtonHighlight;';
  readonly ButtonShadow = 'caret:ButtonShadow;';
  readonly ButtonText = 'caret:ButtonText;';
  readonly Canvas = 'caret:Canvas;';
  readonly CanvasText = 'caret:CanvasText;';
  readonly CaptionText = 'caret:CaptionText;';
  readonly Field = 'caret:Field;';
  readonly FieldText = 'caret:FieldText;';
  readonly GrayText = 'caret:GrayText;';
  readonly Highlight = 'caret:Highlight;';
  readonly HighlightText = 'caret:HighlightText;';
  readonly InactiveBorder = 'caret:InactiveBorder;';
  readonly InactiveCaption = 'caret:InactiveCaption;';
  readonly InactiveCaptionText = 'caret:InactiveCaptionText;';
  readonly InfoBackground = 'caret:InfoBackground;';
  readonly InfoText = 'caret:InfoText;';
  readonly LinkText = 'caret:LinkText;';
  readonly Mark = 'caret:Mark;';
  readonly MarkText = 'caret:MarkText;';
  readonly Menu = 'caret:Menu;';
  readonly MenuText = 'caret:MenuText;';
  readonly Scrollbar = 'caret:Scrollbar;';
  readonly SelectedItem = 'caret:SelectedItem;';
  readonly SelectedItemText = 'caret:SelectedItemText;';
  readonly ThreeDDarkShadow = 'caret:ThreeDDarkShadow;';
  readonly ThreeDFace = 'caret:ThreeDFace;';
  readonly ThreeDHighlight = 'caret:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'caret:ThreeDLightShadow;';
  readonly ThreeDShadow = 'caret:ThreeDShadow;';
  readonly VisitedText = 'caret:VisitedText;';
  readonly Window = 'caret:Window;';
  readonly WindowFrame = 'caret:WindowFrame;';
  readonly WindowText = 'caret:WindowText;';
  readonly aliceblue = 'caret:aliceblue;';
  readonly antiquewhite = 'caret:antiquewhite;';
  readonly aqua = 'caret:aqua;';
  readonly aquamarine = 'caret:aquamarine;';
  readonly auto = 'caret:auto;';
  readonly azure = 'caret:azure;';
  readonly bar = 'caret:bar;';
  readonly beige = 'caret:beige;';
  readonly bisque = 'caret:bisque;';
  readonly black = 'caret:black;';
  readonly blanchedalmond = 'caret:blanchedalmond;';
  readonly block = 'caret:block;';
  readonly blue = 'caret:blue;';
  readonly blueviolet = 'caret:blueviolet;';
  readonly brown = 'caret:brown;';
  readonly burlywood = 'caret:burlywood;';
  readonly cadetblue = 'caret:cadetblue;';
  readonly chartreuse = 'caret:chartreuse;';
  readonly chocolate = 'caret:chocolate;';
  readonly coral = 'caret:coral;';
  readonly cornflowerblue = 'caret:cornflowerblue;';
  readonly cornsilk = 'caret:cornsilk;';
  readonly crimson = 'caret:crimson;';
  readonly currentColor = 'caret:currentColor;';
  readonly cyan = 'caret:cyan;';
  readonly darkblue = 'caret:darkblue;';
  readonly darkcyan = 'caret:darkcyan;';
  readonly darkgoldenrod = 'caret:darkgoldenrod;';
  readonly darkgray = 'caret:darkgray;';
  readonly darkgreen = 'caret:darkgreen;';
  readonly darkgrey = 'caret:darkgrey;';
  readonly darkkhaki = 'caret:darkkhaki;';
  readonly darkmagenta = 'caret:darkmagenta;';
  readonly darkolivegreen = 'caret:darkolivegreen;';
  readonly darkorange = 'caret:darkorange;';
  readonly darkorchid = 'caret:darkorchid;';
  readonly darkred = 'caret:darkred;';
  readonly darksalmon = 'caret:darksalmon;';
  readonly darkseagreen = 'caret:darkseagreen;';
  readonly darkslateblue = 'caret:darkslateblue;';
  readonly darkslategray = 'caret:darkslategray;';
  readonly darkslategrey = 'caret:darkslategrey;';
  readonly darkturquoise = 'caret:darkturquoise;';
  readonly darkviolet = 'caret:darkviolet;';
  readonly deeppink = 'caret:deeppink;';
  readonly deepskyblue = 'caret:deepskyblue;';
  readonly dimgray = 'caret:dimgray;';
  readonly dimgrey = 'caret:dimgrey;';
  readonly dodgerblue = 'caret:dodgerblue;';
  readonly firebrick = 'caret:firebrick;';
  readonly floralwhite = 'caret:floralwhite;';
  readonly forestgreen = 'caret:forestgreen;';
  readonly fuchsia = 'caret:fuchsia;';
  readonly gainsboro = 'caret:gainsboro;';
  readonly ghostwhite = 'caret:ghostwhite;';
  readonly gold = 'caret:gold;';
  readonly goldenrod = 'caret:goldenrod;';
  readonly gray = 'caret:gray;';
  readonly green = 'caret:green;';
  readonly greenyellow = 'caret:greenyellow;';
  readonly grey = 'caret:grey;';
  readonly honeydew = 'caret:honeydew;';
  readonly hotpink = 'caret:hotpink;';
  readonly indianred = 'caret:indianred;';
  readonly indigo = 'caret:indigo;';
  readonly inherit = 'caret:inherit;';
  readonly initial = 'caret:initial;';
  readonly ivory = 'caret:ivory;';
  readonly khaki = 'caret:khaki;';
  readonly lavender = 'caret:lavender;';
  readonly lavenderblush = 'caret:lavenderblush;';
  readonly lawngreen = 'caret:lawngreen;';
  readonly lemonchiffon = 'caret:lemonchiffon;';
  readonly lightblue = 'caret:lightblue;';
  readonly lightcoral = 'caret:lightcoral;';
  readonly lightcyan = 'caret:lightcyan;';
  readonly lightgoldenrodyellow = 'caret:lightgoldenrodyellow;';
  readonly lightgray = 'caret:lightgray;';
  readonly lightgreen = 'caret:lightgreen;';
  readonly lightgrey = 'caret:lightgrey;';
  readonly lightpink = 'caret:lightpink;';
  readonly lightsalmon = 'caret:lightsalmon;';
  readonly lightseagreen = 'caret:lightseagreen;';
  readonly lightskyblue = 'caret:lightskyblue;';
  readonly lightslategray = 'caret:lightslategray;';
  readonly lightslategrey = 'caret:lightslategrey;';
  readonly lightsteelblue = 'caret:lightsteelblue;';
  readonly lightyellow = 'caret:lightyellow;';
  readonly lime = 'caret:lime;';
  readonly limegreen = 'caret:limegreen;';
  readonly linen = 'caret:linen;';
  readonly magenta = 'caret:magenta;';
  readonly maroon = 'caret:maroon;';
  readonly mediumaquamarine = 'caret:mediumaquamarine;';
  readonly mediumblue = 'caret:mediumblue;';
  readonly mediumorchid = 'caret:mediumorchid;';
  readonly mediumpurple = 'caret:mediumpurple;';
  readonly mediumseagreen = 'caret:mediumseagreen;';
  readonly mediumslateblue = 'caret:mediumslateblue;';
  readonly mediumspringgreen = 'caret:mediumspringgreen;';
  readonly mediumturquoise = 'caret:mediumturquoise;';
  readonly mediumvioletred = 'caret:mediumvioletred;';
  readonly midnightblue = 'caret:midnightblue;';
  readonly mintcream = 'caret:mintcream;';
  readonly mistyrose = 'caret:mistyrose;';
  readonly moccasin = 'caret:moccasin;';
  readonly navajowhite = 'caret:navajowhite;';
  readonly navy = 'caret:navy;';
  readonly oldlace = 'caret:oldlace;';
  readonly olive = 'caret:olive;';
  readonly olivedrab = 'caret:olivedrab;';
  readonly orange = 'caret:orange;';
  readonly orangered = 'caret:orangered;';
  readonly orchid = 'caret:orchid;';
  readonly palegoldenrod = 'caret:palegoldenrod;';
  readonly palegreen = 'caret:palegreen;';
  readonly paleturquoise = 'caret:paleturquoise;';
  readonly palevioletred = 'caret:palevioletred;';
  readonly papayawhip = 'caret:papayawhip;';
  readonly peachpuff = 'caret:peachpuff;';
  readonly peru = 'caret:peru;';
  readonly pink = 'caret:pink;';
  readonly plum = 'caret:plum;';
  readonly powderblue = 'caret:powderblue;';
  readonly purple = 'caret:purple;';
  readonly rebeccapurple = 'caret:rebeccapurple;';
  readonly red = 'caret:red;';
  readonly revert = 'caret:revert;';
  readonly revertLayer = 'caret:revert-layer;';
  readonly rosybrown = 'caret:rosybrown;';
  readonly royalblue = 'caret:royalblue;';
  readonly saddlebrown = 'caret:saddlebrown;';
  readonly salmon = 'caret:salmon;';
  readonly sandybrown = 'caret:sandybrown;';
  readonly seagreen = 'caret:seagreen;';
  readonly seashell = 'caret:seashell;';
  readonly sienna = 'caret:sienna;';
  readonly silver = 'caret:silver;';
  readonly skyblue = 'caret:skyblue;';
  readonly slateblue = 'caret:slateblue;';
  readonly slategray = 'caret:slategray;';
  readonly slategrey = 'caret:slategrey;';
  readonly snow = 'caret:snow;';
  readonly springgreen = 'caret:springgreen;';
  readonly steelblue = 'caret:steelblue;';
  readonly tan = 'caret:tan;';
  readonly teal = 'caret:teal;';
  readonly thistle = 'caret:thistle;';
  readonly tomato = 'caret:tomato;';
  readonly transparent = 'caret:transparent;';
  readonly turquoise = 'caret:turquoise;';
  readonly underscore = 'caret:underscore;';
  readonly unset = 'caret:unset;';
  readonly violet = 'caret:violet;';
  readonly wheat = 'caret:wheat;';
  readonly white = 'caret:white;';
  readonly whitesmoke = 'caret:whitesmoke;';
  readonly yellow = 'caret:yellow;';
  readonly yellowgreen = 'caret:yellowgreen;';
  constructor() {
    super('caret');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 caret-color；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
 */
export class CaretColorCss extends CssProperty<Property.CaretColor> {
  readonly AccentColor = 'caret-color:AccentColor;';
  readonly AccentColorText = 'caret-color:AccentColorText;';
  readonly ActiveBorder = 'caret-color:ActiveBorder;';
  readonly ActiveCaption = 'caret-color:ActiveCaption;';
  readonly ActiveText = 'caret-color:ActiveText;';
  readonly AppWorkspace = 'caret-color:AppWorkspace;';
  readonly Background = 'caret-color:Background;';
  readonly ButtonBorder = 'caret-color:ButtonBorder;';
  readonly ButtonFace = 'caret-color:ButtonFace;';
  readonly ButtonHighlight = 'caret-color:ButtonHighlight;';
  readonly ButtonShadow = 'caret-color:ButtonShadow;';
  readonly ButtonText = 'caret-color:ButtonText;';
  readonly Canvas = 'caret-color:Canvas;';
  readonly CanvasText = 'caret-color:CanvasText;';
  readonly CaptionText = 'caret-color:CaptionText;';
  readonly Field = 'caret-color:Field;';
  readonly FieldText = 'caret-color:FieldText;';
  readonly GrayText = 'caret-color:GrayText;';
  readonly Highlight = 'caret-color:Highlight;';
  readonly HighlightText = 'caret-color:HighlightText;';
  readonly InactiveBorder = 'caret-color:InactiveBorder;';
  readonly InactiveCaption = 'caret-color:InactiveCaption;';
  readonly InactiveCaptionText = 'caret-color:InactiveCaptionText;';
  readonly InfoBackground = 'caret-color:InfoBackground;';
  readonly InfoText = 'caret-color:InfoText;';
  readonly LinkText = 'caret-color:LinkText;';
  readonly Mark = 'caret-color:Mark;';
  readonly MarkText = 'caret-color:MarkText;';
  readonly Menu = 'caret-color:Menu;';
  readonly MenuText = 'caret-color:MenuText;';
  readonly Scrollbar = 'caret-color:Scrollbar;';
  readonly SelectedItem = 'caret-color:SelectedItem;';
  readonly SelectedItemText = 'caret-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'caret-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'caret-color:ThreeDFace;';
  readonly ThreeDHighlight = 'caret-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'caret-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'caret-color:ThreeDShadow;';
  readonly VisitedText = 'caret-color:VisitedText;';
  readonly Window = 'caret-color:Window;';
  readonly WindowFrame = 'caret-color:WindowFrame;';
  readonly WindowText = 'caret-color:WindowText;';
  readonly aliceblue = 'caret-color:aliceblue;';
  readonly antiquewhite = 'caret-color:antiquewhite;';
  readonly aqua = 'caret-color:aqua;';
  readonly aquamarine = 'caret-color:aquamarine;';
  readonly auto = 'caret-color:auto;';
  readonly azure = 'caret-color:azure;';
  readonly beige = 'caret-color:beige;';
  readonly bisque = 'caret-color:bisque;';
  readonly black = 'caret-color:black;';
  readonly blanchedalmond = 'caret-color:blanchedalmond;';
  readonly blue = 'caret-color:blue;';
  readonly blueviolet = 'caret-color:blueviolet;';
  readonly brown = 'caret-color:brown;';
  readonly burlywood = 'caret-color:burlywood;';
  readonly cadetblue = 'caret-color:cadetblue;';
  readonly chartreuse = 'caret-color:chartreuse;';
  readonly chocolate = 'caret-color:chocolate;';
  readonly coral = 'caret-color:coral;';
  readonly cornflowerblue = 'caret-color:cornflowerblue;';
  readonly cornsilk = 'caret-color:cornsilk;';
  readonly crimson = 'caret-color:crimson;';
  readonly currentColor = 'caret-color:currentColor;';
  readonly cyan = 'caret-color:cyan;';
  readonly darkblue = 'caret-color:darkblue;';
  readonly darkcyan = 'caret-color:darkcyan;';
  readonly darkgoldenrod = 'caret-color:darkgoldenrod;';
  readonly darkgray = 'caret-color:darkgray;';
  readonly darkgreen = 'caret-color:darkgreen;';
  readonly darkgrey = 'caret-color:darkgrey;';
  readonly darkkhaki = 'caret-color:darkkhaki;';
  readonly darkmagenta = 'caret-color:darkmagenta;';
  readonly darkolivegreen = 'caret-color:darkolivegreen;';
  readonly darkorange = 'caret-color:darkorange;';
  readonly darkorchid = 'caret-color:darkorchid;';
  readonly darkred = 'caret-color:darkred;';
  readonly darksalmon = 'caret-color:darksalmon;';
  readonly darkseagreen = 'caret-color:darkseagreen;';
  readonly darkslateblue = 'caret-color:darkslateblue;';
  readonly darkslategray = 'caret-color:darkslategray;';
  readonly darkslategrey = 'caret-color:darkslategrey;';
  readonly darkturquoise = 'caret-color:darkturquoise;';
  readonly darkviolet = 'caret-color:darkviolet;';
  readonly deeppink = 'caret-color:deeppink;';
  readonly deepskyblue = 'caret-color:deepskyblue;';
  readonly dimgray = 'caret-color:dimgray;';
  readonly dimgrey = 'caret-color:dimgrey;';
  readonly dodgerblue = 'caret-color:dodgerblue;';
  readonly firebrick = 'caret-color:firebrick;';
  readonly floralwhite = 'caret-color:floralwhite;';
  readonly forestgreen = 'caret-color:forestgreen;';
  readonly fuchsia = 'caret-color:fuchsia;';
  readonly gainsboro = 'caret-color:gainsboro;';
  readonly ghostwhite = 'caret-color:ghostwhite;';
  readonly gold = 'caret-color:gold;';
  readonly goldenrod = 'caret-color:goldenrod;';
  readonly gray = 'caret-color:gray;';
  readonly green = 'caret-color:green;';
  readonly greenyellow = 'caret-color:greenyellow;';
  readonly grey = 'caret-color:grey;';
  readonly honeydew = 'caret-color:honeydew;';
  readonly hotpink = 'caret-color:hotpink;';
  readonly indianred = 'caret-color:indianred;';
  readonly indigo = 'caret-color:indigo;';
  readonly inherit = 'caret-color:inherit;';
  readonly initial = 'caret-color:initial;';
  readonly ivory = 'caret-color:ivory;';
  readonly khaki = 'caret-color:khaki;';
  readonly lavender = 'caret-color:lavender;';
  readonly lavenderblush = 'caret-color:lavenderblush;';
  readonly lawngreen = 'caret-color:lawngreen;';
  readonly lemonchiffon = 'caret-color:lemonchiffon;';
  readonly lightblue = 'caret-color:lightblue;';
  readonly lightcoral = 'caret-color:lightcoral;';
  readonly lightcyan = 'caret-color:lightcyan;';
  readonly lightgoldenrodyellow = 'caret-color:lightgoldenrodyellow;';
  readonly lightgray = 'caret-color:lightgray;';
  readonly lightgreen = 'caret-color:lightgreen;';
  readonly lightgrey = 'caret-color:lightgrey;';
  readonly lightpink = 'caret-color:lightpink;';
  readonly lightsalmon = 'caret-color:lightsalmon;';
  readonly lightseagreen = 'caret-color:lightseagreen;';
  readonly lightskyblue = 'caret-color:lightskyblue;';
  readonly lightslategray = 'caret-color:lightslategray;';
  readonly lightslategrey = 'caret-color:lightslategrey;';
  readonly lightsteelblue = 'caret-color:lightsteelblue;';
  readonly lightyellow = 'caret-color:lightyellow;';
  readonly lime = 'caret-color:lime;';
  readonly limegreen = 'caret-color:limegreen;';
  readonly linen = 'caret-color:linen;';
  readonly magenta = 'caret-color:magenta;';
  readonly maroon = 'caret-color:maroon;';
  readonly mediumaquamarine = 'caret-color:mediumaquamarine;';
  readonly mediumblue = 'caret-color:mediumblue;';
  readonly mediumorchid = 'caret-color:mediumorchid;';
  readonly mediumpurple = 'caret-color:mediumpurple;';
  readonly mediumseagreen = 'caret-color:mediumseagreen;';
  readonly mediumslateblue = 'caret-color:mediumslateblue;';
  readonly mediumspringgreen = 'caret-color:mediumspringgreen;';
  readonly mediumturquoise = 'caret-color:mediumturquoise;';
  readonly mediumvioletred = 'caret-color:mediumvioletred;';
  readonly midnightblue = 'caret-color:midnightblue;';
  readonly mintcream = 'caret-color:mintcream;';
  readonly mistyrose = 'caret-color:mistyrose;';
  readonly moccasin = 'caret-color:moccasin;';
  readonly navajowhite = 'caret-color:navajowhite;';
  readonly navy = 'caret-color:navy;';
  readonly oldlace = 'caret-color:oldlace;';
  readonly olive = 'caret-color:olive;';
  readonly olivedrab = 'caret-color:olivedrab;';
  readonly orange = 'caret-color:orange;';
  readonly orangered = 'caret-color:orangered;';
  readonly orchid = 'caret-color:orchid;';
  readonly palegoldenrod = 'caret-color:palegoldenrod;';
  readonly palegreen = 'caret-color:palegreen;';
  readonly paleturquoise = 'caret-color:paleturquoise;';
  readonly palevioletred = 'caret-color:palevioletred;';
  readonly papayawhip = 'caret-color:papayawhip;';
  readonly peachpuff = 'caret-color:peachpuff;';
  readonly peru = 'caret-color:peru;';
  readonly pink = 'caret-color:pink;';
  readonly plum = 'caret-color:plum;';
  readonly powderblue = 'caret-color:powderblue;';
  readonly purple = 'caret-color:purple;';
  readonly rebeccapurple = 'caret-color:rebeccapurple;';
  readonly red = 'caret-color:red;';
  readonly revert = 'caret-color:revert;';
  readonly revertLayer = 'caret-color:revert-layer;';
  readonly rosybrown = 'caret-color:rosybrown;';
  readonly royalblue = 'caret-color:royalblue;';
  readonly saddlebrown = 'caret-color:saddlebrown;';
  readonly salmon = 'caret-color:salmon;';
  readonly sandybrown = 'caret-color:sandybrown;';
  readonly seagreen = 'caret-color:seagreen;';
  readonly seashell = 'caret-color:seashell;';
  readonly sienna = 'caret-color:sienna;';
  readonly silver = 'caret-color:silver;';
  readonly skyblue = 'caret-color:skyblue;';
  readonly slateblue = 'caret-color:slateblue;';
  readonly slategray = 'caret-color:slategray;';
  readonly slategrey = 'caret-color:slategrey;';
  readonly snow = 'caret-color:snow;';
  readonly springgreen = 'caret-color:springgreen;';
  readonly steelblue = 'caret-color:steelblue;';
  readonly tan = 'caret-color:tan;';
  readonly teal = 'caret-color:teal;';
  readonly thistle = 'caret-color:thistle;';
  readonly tomato = 'caret-color:tomato;';
  readonly transparent = 'caret-color:transparent;';
  readonly turquoise = 'caret-color:turquoise;';
  readonly unset = 'caret-color:unset;';
  readonly violet = 'caret-color:violet;';
  readonly wheat = 'caret-color:wheat;';
  readonly white = 'caret-color:white;';
  readonly whitesmoke = 'caret-color:whitesmoke;';
  readonly yellow = 'caret-color:yellow;';
  readonly yellowgreen = 'caret-color:yellowgreen;';
  constructor() {
    super('caret-color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 caret-shape；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
 */
export class CaretShapeCss extends CssProperty<Property.CaretShape> {
  readonly auto = 'caret-shape:auto;';
  readonly bar = 'caret-shape:bar;';
  readonly block = 'caret-shape:block;';
  readonly inherit = 'caret-shape:inherit;';
  readonly initial = 'caret-shape:initial;';
  readonly revert = 'caret-shape:revert;';
  readonly revertLayer = 'caret-shape:revert-layer;';
  readonly underscore = 'caret-shape:underscore;';
  readonly unset = 'caret-shape:unset;';
  constructor() {
    super('caret-shape');
  }
}

/** CSS 属性 clear；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
 */
export class ClearCss extends CssProperty<Property.Clear> {
  readonly both = 'clear:both;';
  readonly inherit = 'clear:inherit;';
  readonly initial = 'clear:initial;';
  readonly inlineEnd = 'clear:inline-end;';
  readonly inlineStart = 'clear:inline-start;';
  readonly left = 'clear:left;';
  readonly none = 'clear:none;';
  readonly revert = 'clear:revert;';
  readonly revertLayer = 'clear:revert-layer;';
  readonly right = 'clear:right;';
  readonly unset = 'clear:unset;';
  constructor() {
    super('clear');
  }
}

/** CSS 属性 clip。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip
 */
export class ClipCss extends CssProperty<Property.Clip> {
  readonly auto = 'clip:auto;';
  readonly inherit = 'clip:inherit;';
  readonly initial = 'clip:initial;';
  readonly revert = 'clip:revert;';
  readonly revertLayer = 'clip:revert-layer;';
  readonly unset = 'clip:unset;';
  constructor() {
    super('clip');
  }
}

/** CSS 属性 clip-path；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
 */
export class ClipPathCss extends CssProperty<Property.ClipPath> {
  readonly borderBox = 'clip-path:border-box;';
  readonly contentBox = 'clip-path:content-box;';
  readonly fillBox = 'clip-path:fill-box;';
  readonly inherit = 'clip-path:inherit;';
  readonly initial = 'clip-path:initial;';
  readonly marginBox = 'clip-path:margin-box;';
  readonly none = 'clip-path:none;';
  readonly paddingBox = 'clip-path:padding-box;';
  readonly revert = 'clip-path:revert;';
  readonly revertLayer = 'clip-path:revert-layer;';
  readonly strokeBox = 'clip-path:stroke-box;';
  readonly unset = 'clip-path:unset;';
  readonly viewBox = 'clip-path:view-box;';
  constructor() {
    super('clip-path');
  }
}

/** CSS 属性 clip-rule；初始值 nonzero。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
 */
export class ClipRuleCss extends CssProperty<Property.ClipRule> {
  readonly evenodd = 'clip-rule:evenodd;';
  readonly inherit = 'clip-rule:inherit;';
  readonly initial = 'clip-rule:initial;';
  readonly nonzero = 'clip-rule:nonzero;';
  readonly revert = 'clip-rule:revert;';
  readonly revertLayer = 'clip-rule:revert-layer;';
  readonly unset = 'clip-rule:unset;';
  constructor() {
    super('clip-rule');
  }
}

/** 文本前景色（CSS color）；初始值 canvastext。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
 */
export class ColorCss extends CssProperty<Property.Color> {
  readonly AccentColor = 'color:AccentColor;';
  readonly AccentColorText = 'color:AccentColorText;';
  readonly ActiveBorder = 'color:ActiveBorder;';
  readonly ActiveCaption = 'color:ActiveCaption;';
  readonly ActiveText = 'color:ActiveText;';
  readonly AppWorkspace = 'color:AppWorkspace;';
  readonly Background = 'color:Background;';
  readonly ButtonBorder = 'color:ButtonBorder;';
  readonly ButtonFace = 'color:ButtonFace;';
  readonly ButtonHighlight = 'color:ButtonHighlight;';
  readonly ButtonShadow = 'color:ButtonShadow;';
  readonly ButtonText = 'color:ButtonText;';
  readonly Canvas = 'color:Canvas;';
  readonly CanvasText = 'color:CanvasText;';
  readonly CaptionText = 'color:CaptionText;';
  readonly Field = 'color:Field;';
  readonly FieldText = 'color:FieldText;';
  readonly GrayText = 'color:GrayText;';
  readonly Highlight = 'color:Highlight;';
  readonly HighlightText = 'color:HighlightText;';
  readonly InactiveBorder = 'color:InactiveBorder;';
  readonly InactiveCaption = 'color:InactiveCaption;';
  readonly InactiveCaptionText = 'color:InactiveCaptionText;';
  readonly InfoBackground = 'color:InfoBackground;';
  readonly InfoText = 'color:InfoText;';
  readonly LinkText = 'color:LinkText;';
  readonly Mark = 'color:Mark;';
  readonly MarkText = 'color:MarkText;';
  readonly Menu = 'color:Menu;';
  readonly MenuText = 'color:MenuText;';
  readonly Scrollbar = 'color:Scrollbar;';
  readonly SelectedItem = 'color:SelectedItem;';
  readonly SelectedItemText = 'color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'color:ThreeDFace;';
  readonly ThreeDHighlight = 'color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'color:ThreeDShadow;';
  readonly VisitedText = 'color:VisitedText;';
  readonly Window = 'color:Window;';
  readonly WindowFrame = 'color:WindowFrame;';
  readonly WindowText = 'color:WindowText;';
  readonly aliceblue = 'color:aliceblue;';
  readonly antiquewhite = 'color:antiquewhite;';
  readonly aqua = 'color:aqua;';
  readonly aquamarine = 'color:aquamarine;';
  readonly azure = 'color:azure;';
  readonly beige = 'color:beige;';
  readonly bisque = 'color:bisque;';
  readonly black = 'color:black;';
  readonly blanchedalmond = 'color:blanchedalmond;';
  readonly blue = 'color:blue;';
  readonly blueviolet = 'color:blueviolet;';
  readonly brown = 'color:brown;';
  readonly burlywood = 'color:burlywood;';
  readonly cadetblue = 'color:cadetblue;';
  readonly chartreuse = 'color:chartreuse;';
  readonly chocolate = 'color:chocolate;';
  readonly coral = 'color:coral;';
  readonly cornflowerblue = 'color:cornflowerblue;';
  readonly cornsilk = 'color:cornsilk;';
  readonly crimson = 'color:crimson;';
  readonly currentColor = 'color:currentColor;';
  readonly cyan = 'color:cyan;';
  readonly darkblue = 'color:darkblue;';
  readonly darkcyan = 'color:darkcyan;';
  readonly darkgoldenrod = 'color:darkgoldenrod;';
  readonly darkgray = 'color:darkgray;';
  readonly darkgreen = 'color:darkgreen;';
  readonly darkgrey = 'color:darkgrey;';
  readonly darkkhaki = 'color:darkkhaki;';
  readonly darkmagenta = 'color:darkmagenta;';
  readonly darkolivegreen = 'color:darkolivegreen;';
  readonly darkorange = 'color:darkorange;';
  readonly darkorchid = 'color:darkorchid;';
  readonly darkred = 'color:darkred;';
  readonly darksalmon = 'color:darksalmon;';
  readonly darkseagreen = 'color:darkseagreen;';
  readonly darkslateblue = 'color:darkslateblue;';
  readonly darkslategray = 'color:darkslategray;';
  readonly darkslategrey = 'color:darkslategrey;';
  readonly darkturquoise = 'color:darkturquoise;';
  readonly darkviolet = 'color:darkviolet;';
  readonly deeppink = 'color:deeppink;';
  readonly deepskyblue = 'color:deepskyblue;';
  readonly dimgray = 'color:dimgray;';
  readonly dimgrey = 'color:dimgrey;';
  readonly dodgerblue = 'color:dodgerblue;';
  readonly firebrick = 'color:firebrick;';
  readonly floralwhite = 'color:floralwhite;';
  readonly forestgreen = 'color:forestgreen;';
  readonly fuchsia = 'color:fuchsia;';
  readonly gainsboro = 'color:gainsboro;';
  readonly ghostwhite = 'color:ghostwhite;';
  readonly gold = 'color:gold;';
  readonly goldenrod = 'color:goldenrod;';
  readonly gray = 'color:gray;';
  readonly green = 'color:green;';
  readonly greenyellow = 'color:greenyellow;';
  readonly grey = 'color:grey;';
  readonly honeydew = 'color:honeydew;';
  readonly hotpink = 'color:hotpink;';
  readonly indianred = 'color:indianred;';
  readonly indigo = 'color:indigo;';
  readonly inherit = 'color:inherit;';
  readonly initial = 'color:initial;';
  readonly ivory = 'color:ivory;';
  readonly khaki = 'color:khaki;';
  readonly lavender = 'color:lavender;';
  readonly lavenderblush = 'color:lavenderblush;';
  readonly lawngreen = 'color:lawngreen;';
  readonly lemonchiffon = 'color:lemonchiffon;';
  readonly lightblue = 'color:lightblue;';
  readonly lightcoral = 'color:lightcoral;';
  readonly lightcyan = 'color:lightcyan;';
  readonly lightgoldenrodyellow = 'color:lightgoldenrodyellow;';
  readonly lightgray = 'color:lightgray;';
  readonly lightgreen = 'color:lightgreen;';
  readonly lightgrey = 'color:lightgrey;';
  readonly lightpink = 'color:lightpink;';
  readonly lightsalmon = 'color:lightsalmon;';
  readonly lightseagreen = 'color:lightseagreen;';
  readonly lightskyblue = 'color:lightskyblue;';
  readonly lightslategray = 'color:lightslategray;';
  readonly lightslategrey = 'color:lightslategrey;';
  readonly lightsteelblue = 'color:lightsteelblue;';
  readonly lightyellow = 'color:lightyellow;';
  readonly lime = 'color:lime;';
  readonly limegreen = 'color:limegreen;';
  readonly linen = 'color:linen;';
  readonly magenta = 'color:magenta;';
  readonly maroon = 'color:maroon;';
  readonly mediumaquamarine = 'color:mediumaquamarine;';
  readonly mediumblue = 'color:mediumblue;';
  readonly mediumorchid = 'color:mediumorchid;';
  readonly mediumpurple = 'color:mediumpurple;';
  readonly mediumseagreen = 'color:mediumseagreen;';
  readonly mediumslateblue = 'color:mediumslateblue;';
  readonly mediumspringgreen = 'color:mediumspringgreen;';
  readonly mediumturquoise = 'color:mediumturquoise;';
  readonly mediumvioletred = 'color:mediumvioletred;';
  readonly midnightblue = 'color:midnightblue;';
  readonly mintcream = 'color:mintcream;';
  readonly mistyrose = 'color:mistyrose;';
  readonly moccasin = 'color:moccasin;';
  readonly navajowhite = 'color:navajowhite;';
  readonly navy = 'color:navy;';
  readonly oldlace = 'color:oldlace;';
  readonly olive = 'color:olive;';
  readonly olivedrab = 'color:olivedrab;';
  readonly orange = 'color:orange;';
  readonly orangered = 'color:orangered;';
  readonly orchid = 'color:orchid;';
  readonly palegoldenrod = 'color:palegoldenrod;';
  readonly palegreen = 'color:palegreen;';
  readonly paleturquoise = 'color:paleturquoise;';
  readonly palevioletred = 'color:palevioletred;';
  readonly papayawhip = 'color:papayawhip;';
  readonly peachpuff = 'color:peachpuff;';
  readonly peru = 'color:peru;';
  readonly pink = 'color:pink;';
  readonly plum = 'color:plum;';
  readonly powderblue = 'color:powderblue;';
  readonly purple = 'color:purple;';
  readonly rebeccapurple = 'color:rebeccapurple;';
  readonly red = 'color:red;';
  readonly revert = 'color:revert;';
  readonly revertLayer = 'color:revert-layer;';
  readonly rosybrown = 'color:rosybrown;';
  readonly royalblue = 'color:royalblue;';
  readonly saddlebrown = 'color:saddlebrown;';
  readonly salmon = 'color:salmon;';
  readonly sandybrown = 'color:sandybrown;';
  readonly seagreen = 'color:seagreen;';
  readonly seashell = 'color:seashell;';
  readonly sienna = 'color:sienna;';
  readonly silver = 'color:silver;';
  readonly skyblue = 'color:skyblue;';
  readonly slateblue = 'color:slateblue;';
  readonly slategray = 'color:slategray;';
  readonly slategrey = 'color:slategrey;';
  readonly snow = 'color:snow;';
  readonly springgreen = 'color:springgreen;';
  readonly steelblue = 'color:steelblue;';
  readonly tan = 'color:tan;';
  readonly teal = 'color:teal;';
  readonly thistle = 'color:thistle;';
  readonly tomato = 'color:tomato;';
  readonly transparent = 'color:transparent;';
  readonly turquoise = 'color:turquoise;';
  readonly unset = 'color:unset;';
  readonly violet = 'color:violet;';
  readonly wheat = 'color:wheat;';
  readonly white = 'color:white;';
  readonly whitesmoke = 'color:whitesmoke;';
  readonly yellow = 'color:yellow;';
  readonly yellowgreen = 'color:yellowgreen;';
  constructor() {
    super('color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 color-adjust；初始值 economy。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
 */
export class ColorAdjustCss extends CssProperty<Property.PrintColorAdjust> {
  readonly economy = 'color-adjust:economy;';
  readonly exact = 'color-adjust:exact;';
  readonly inherit = 'color-adjust:inherit;';
  readonly initial = 'color-adjust:initial;';
  readonly revert = 'color-adjust:revert;';
  readonly revertLayer = 'color-adjust:revert-layer;';
  readonly unset = 'color-adjust:unset;';
  constructor() {
    super('color-adjust');
  }
}

/** CSS 属性 color-interpolation。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation
 */
export class ColorInterpolationCss extends CssProperty<Property.ColorInterpolation> {
  readonly auto = 'color-interpolation:auto;';
  readonly inherit = 'color-interpolation:inherit;';
  readonly initial = 'color-interpolation:initial;';
  readonly linearRGB = 'color-interpolation:linearRGB;';
  readonly revert = 'color-interpolation:revert;';
  readonly revertLayer = 'color-interpolation:revert-layer;';
  readonly sRGB = 'color-interpolation:sRGB;';
  readonly unset = 'color-interpolation:unset;';
  constructor() {
    super('color-interpolation');
  }
}

/** CSS 属性 color-interpolation-filters；初始值 linearRGB。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
 */
export class ColorInterpolationFiltersCss extends CssProperty<Property.ColorInterpolationFilters> {
  readonly auto = 'color-interpolation-filters:auto;';
  readonly inherit = 'color-interpolation-filters:inherit;';
  readonly initial = 'color-interpolation-filters:initial;';
  readonly linearRGB = 'color-interpolation-filters:linearRGB;';
  readonly revert = 'color-interpolation-filters:revert;';
  readonly revertLayer = 'color-interpolation-filters:revert-layer;';
  readonly sRGB = 'color-interpolation-filters:sRGB;';
  readonly unset = 'color-interpolation-filters:unset;';
  constructor() {
    super('color-interpolation-filters');
  }
}

/** CSS 属性 color-rendering。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-rendering
 */
export class ColorRenderingCss extends CssProperty<Property.ColorRendering> {
  readonly auto = 'color-rendering:auto;';
  readonly inherit = 'color-rendering:inherit;';
  readonly initial = 'color-rendering:initial;';
  readonly optimizeQuality = 'color-rendering:optimizeQuality;';
  readonly optimizeSpeed = 'color-rendering:optimizeSpeed;';
  readonly revert = 'color-rendering:revert;';
  readonly revertLayer = 'color-rendering:revert-layer;';
  readonly unset = 'color-rendering:unset;';
  constructor() {
    super('color-rendering');
  }
}

/** CSS 属性 color-scheme；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
 */
export class ColorSchemeCss extends CssProperty<Property.ColorScheme> {
  readonly dark = 'color-scheme:dark;';
  readonly inherit = 'color-scheme:inherit;';
  readonly initial = 'color-scheme:initial;';
  readonly light = 'color-scheme:light;';
  readonly normal = 'color-scheme:normal;';
  readonly revert = 'color-scheme:revert;';
  readonly revertLayer = 'color-scheme:revert-layer;';
  readonly unset = 'color-scheme:unset;';
  constructor() {
    super('color-scheme');
  }
}

/** CSS 属性 column-count；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
 */
export class ColumnCountCss extends CssProperty<Property.ColumnCount> {
  readonly auto = 'column-count:auto;';
  readonly inherit = 'column-count:inherit;';
  readonly initial = 'column-count:initial;';
  readonly revert = 'column-count:revert;';
  readonly revertLayer = 'column-count:revert-layer;';
  readonly unset = 'column-count:unset;';
  constructor() {
    super('column-count');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ColumnCount, number> | (string & {}),
    ...others: (Extract<Property.ColumnCount, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ColumnCount, number> | (string & {}),
    ...others: (Extract<Property.ColumnCount, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ColumnCount, number> | (string & {}),
    preferred: Extract<Property.ColumnCount, number> | (string & {}),
    maximum: Extract<Property.ColumnCount, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 column-fill；初始值 balance。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
 */
export class ColumnFillCss extends CssProperty<Property.ColumnFill> {
  readonly auto = 'column-fill:auto;';
  readonly balance = 'column-fill:balance;';
  readonly inherit = 'column-fill:inherit;';
  readonly initial = 'column-fill:initial;';
  readonly revert = 'column-fill:revert;';
  readonly revertLayer = 'column-fill:revert-layer;';
  readonly unset = 'column-fill:unset;';
  constructor() {
    super('column-fill');
  }
}

/** CSS 属性 column-gap；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
 */
export class ColumnGapCss extends LengthCssProperty<Property.ColumnGap> {
  readonly inherit = 'column-gap:inherit;';
  readonly initial = 'column-gap:initial;';
  readonly normal = 'column-gap:normal;';
  readonly revert = 'column-gap:revert;';
  readonly revertLayer = 'column-gap:revert-layer;';
  readonly unset = 'column-gap:unset;';
  constructor() {
    super('column-gap');
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ColumnGap, number> | (string & {}),
    ...others: (Extract<Property.ColumnGap, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ColumnGap, number> | (string & {}),
    ...others: (Extract<Property.ColumnGap, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ColumnGap, number> | (string & {}),
    preferred: Extract<Property.ColumnGap, number> | (string & {}),
    maximum: Extract<Property.ColumnGap, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 column-rule。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
 */
export class ColumnRuleCss extends LengthCssProperty<Property.ColumnRule> {
  readonly AccentColor = 'column-rule:AccentColor;';
  readonly AccentColorText = 'column-rule:AccentColorText;';
  readonly ActiveBorder = 'column-rule:ActiveBorder;';
  readonly ActiveCaption = 'column-rule:ActiveCaption;';
  readonly ActiveText = 'column-rule:ActiveText;';
  readonly AppWorkspace = 'column-rule:AppWorkspace;';
  readonly Background = 'column-rule:Background;';
  readonly ButtonBorder = 'column-rule:ButtonBorder;';
  readonly ButtonFace = 'column-rule:ButtonFace;';
  readonly ButtonHighlight = 'column-rule:ButtonHighlight;';
  readonly ButtonShadow = 'column-rule:ButtonShadow;';
  readonly ButtonText = 'column-rule:ButtonText;';
  readonly Canvas = 'column-rule:Canvas;';
  readonly CanvasText = 'column-rule:CanvasText;';
  readonly CaptionText = 'column-rule:CaptionText;';
  readonly Field = 'column-rule:Field;';
  readonly FieldText = 'column-rule:FieldText;';
  readonly GrayText = 'column-rule:GrayText;';
  readonly Highlight = 'column-rule:Highlight;';
  readonly HighlightText = 'column-rule:HighlightText;';
  readonly InactiveBorder = 'column-rule:InactiveBorder;';
  readonly InactiveCaption = 'column-rule:InactiveCaption;';
  readonly InactiveCaptionText = 'column-rule:InactiveCaptionText;';
  readonly InfoBackground = 'column-rule:InfoBackground;';
  readonly InfoText = 'column-rule:InfoText;';
  readonly LinkText = 'column-rule:LinkText;';
  readonly Mark = 'column-rule:Mark;';
  readonly MarkText = 'column-rule:MarkText;';
  readonly Menu = 'column-rule:Menu;';
  readonly MenuText = 'column-rule:MenuText;';
  readonly Scrollbar = 'column-rule:Scrollbar;';
  readonly SelectedItem = 'column-rule:SelectedItem;';
  readonly SelectedItemText = 'column-rule:SelectedItemText;';
  readonly ThreeDDarkShadow = 'column-rule:ThreeDDarkShadow;';
  readonly ThreeDFace = 'column-rule:ThreeDFace;';
  readonly ThreeDHighlight = 'column-rule:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'column-rule:ThreeDLightShadow;';
  readonly ThreeDShadow = 'column-rule:ThreeDShadow;';
  readonly VisitedText = 'column-rule:VisitedText;';
  readonly Window = 'column-rule:Window;';
  readonly WindowFrame = 'column-rule:WindowFrame;';
  readonly WindowText = 'column-rule:WindowText;';
  readonly aliceblue = 'column-rule:aliceblue;';
  readonly antiquewhite = 'column-rule:antiquewhite;';
  readonly aqua = 'column-rule:aqua;';
  readonly aquamarine = 'column-rule:aquamarine;';
  readonly azure = 'column-rule:azure;';
  readonly beige = 'column-rule:beige;';
  readonly bisque = 'column-rule:bisque;';
  readonly black = 'column-rule:black;';
  readonly blanchedalmond = 'column-rule:blanchedalmond;';
  readonly blue = 'column-rule:blue;';
  readonly blueviolet = 'column-rule:blueviolet;';
  readonly brown = 'column-rule:brown;';
  readonly burlywood = 'column-rule:burlywood;';
  readonly cadetblue = 'column-rule:cadetblue;';
  readonly chartreuse = 'column-rule:chartreuse;';
  readonly chocolate = 'column-rule:chocolate;';
  readonly coral = 'column-rule:coral;';
  readonly cornflowerblue = 'column-rule:cornflowerblue;';
  readonly cornsilk = 'column-rule:cornsilk;';
  readonly crimson = 'column-rule:crimson;';
  readonly currentColor = 'column-rule:currentColor;';
  readonly cyan = 'column-rule:cyan;';
  readonly darkblue = 'column-rule:darkblue;';
  readonly darkcyan = 'column-rule:darkcyan;';
  readonly darkgoldenrod = 'column-rule:darkgoldenrod;';
  readonly darkgray = 'column-rule:darkgray;';
  readonly darkgreen = 'column-rule:darkgreen;';
  readonly darkgrey = 'column-rule:darkgrey;';
  readonly darkkhaki = 'column-rule:darkkhaki;';
  readonly darkmagenta = 'column-rule:darkmagenta;';
  readonly darkolivegreen = 'column-rule:darkolivegreen;';
  readonly darkorange = 'column-rule:darkorange;';
  readonly darkorchid = 'column-rule:darkorchid;';
  readonly darkred = 'column-rule:darkred;';
  readonly darksalmon = 'column-rule:darksalmon;';
  readonly darkseagreen = 'column-rule:darkseagreen;';
  readonly darkslateblue = 'column-rule:darkslateblue;';
  readonly darkslategray = 'column-rule:darkslategray;';
  readonly darkslategrey = 'column-rule:darkslategrey;';
  readonly darkturquoise = 'column-rule:darkturquoise;';
  readonly darkviolet = 'column-rule:darkviolet;';
  readonly dashed = 'column-rule:dashed;';
  readonly deeppink = 'column-rule:deeppink;';
  readonly deepskyblue = 'column-rule:deepskyblue;';
  readonly dimgray = 'column-rule:dimgray;';
  readonly dimgrey = 'column-rule:dimgrey;';
  readonly dodgerblue = 'column-rule:dodgerblue;';
  readonly dotted = 'column-rule:dotted;';
  readonly double = 'column-rule:double;';
  readonly firebrick = 'column-rule:firebrick;';
  readonly floralwhite = 'column-rule:floralwhite;';
  readonly forestgreen = 'column-rule:forestgreen;';
  readonly fuchsia = 'column-rule:fuchsia;';
  readonly gainsboro = 'column-rule:gainsboro;';
  readonly ghostwhite = 'column-rule:ghostwhite;';
  readonly gold = 'column-rule:gold;';
  readonly goldenrod = 'column-rule:goldenrod;';
  readonly gray = 'column-rule:gray;';
  readonly green = 'column-rule:green;';
  readonly greenyellow = 'column-rule:greenyellow;';
  readonly grey = 'column-rule:grey;';
  readonly groove = 'column-rule:groove;';
  readonly hidden = 'column-rule:hidden;';
  readonly honeydew = 'column-rule:honeydew;';
  readonly hotpink = 'column-rule:hotpink;';
  readonly indianred = 'column-rule:indianred;';
  readonly indigo = 'column-rule:indigo;';
  readonly inherit = 'column-rule:inherit;';
  readonly initial = 'column-rule:initial;';
  readonly inset = 'column-rule:inset;';
  readonly ivory = 'column-rule:ivory;';
  readonly khaki = 'column-rule:khaki;';
  readonly lavender = 'column-rule:lavender;';
  readonly lavenderblush = 'column-rule:lavenderblush;';
  readonly lawngreen = 'column-rule:lawngreen;';
  readonly lemonchiffon = 'column-rule:lemonchiffon;';
  readonly lightblue = 'column-rule:lightblue;';
  readonly lightcoral = 'column-rule:lightcoral;';
  readonly lightcyan = 'column-rule:lightcyan;';
  readonly lightgoldenrodyellow = 'column-rule:lightgoldenrodyellow;';
  readonly lightgray = 'column-rule:lightgray;';
  readonly lightgreen = 'column-rule:lightgreen;';
  readonly lightgrey = 'column-rule:lightgrey;';
  readonly lightpink = 'column-rule:lightpink;';
  readonly lightsalmon = 'column-rule:lightsalmon;';
  readonly lightseagreen = 'column-rule:lightseagreen;';
  readonly lightskyblue = 'column-rule:lightskyblue;';
  readonly lightslategray = 'column-rule:lightslategray;';
  readonly lightslategrey = 'column-rule:lightslategrey;';
  readonly lightsteelblue = 'column-rule:lightsteelblue;';
  readonly lightyellow = 'column-rule:lightyellow;';
  readonly lime = 'column-rule:lime;';
  readonly limegreen = 'column-rule:limegreen;';
  readonly linen = 'column-rule:linen;';
  readonly magenta = 'column-rule:magenta;';
  readonly maroon = 'column-rule:maroon;';
  readonly medium = 'column-rule:medium;';
  readonly mediumaquamarine = 'column-rule:mediumaquamarine;';
  readonly mediumblue = 'column-rule:mediumblue;';
  readonly mediumorchid = 'column-rule:mediumorchid;';
  readonly mediumpurple = 'column-rule:mediumpurple;';
  readonly mediumseagreen = 'column-rule:mediumseagreen;';
  readonly mediumslateblue = 'column-rule:mediumslateblue;';
  readonly mediumspringgreen = 'column-rule:mediumspringgreen;';
  readonly mediumturquoise = 'column-rule:mediumturquoise;';
  readonly mediumvioletred = 'column-rule:mediumvioletred;';
  readonly midnightblue = 'column-rule:midnightblue;';
  readonly mintcream = 'column-rule:mintcream;';
  readonly mistyrose = 'column-rule:mistyrose;';
  readonly moccasin = 'column-rule:moccasin;';
  readonly navajowhite = 'column-rule:navajowhite;';
  readonly navy = 'column-rule:navy;';
  readonly none = 'column-rule:none;';
  readonly oldlace = 'column-rule:oldlace;';
  readonly olive = 'column-rule:olive;';
  readonly olivedrab = 'column-rule:olivedrab;';
  readonly orange = 'column-rule:orange;';
  readonly orangered = 'column-rule:orangered;';
  readonly orchid = 'column-rule:orchid;';
  readonly outset = 'column-rule:outset;';
  readonly palegoldenrod = 'column-rule:palegoldenrod;';
  readonly palegreen = 'column-rule:palegreen;';
  readonly paleturquoise = 'column-rule:paleturquoise;';
  readonly palevioletred = 'column-rule:palevioletred;';
  readonly papayawhip = 'column-rule:papayawhip;';
  readonly peachpuff = 'column-rule:peachpuff;';
  readonly peru = 'column-rule:peru;';
  readonly pink = 'column-rule:pink;';
  readonly plum = 'column-rule:plum;';
  readonly powderblue = 'column-rule:powderblue;';
  readonly purple = 'column-rule:purple;';
  readonly rebeccapurple = 'column-rule:rebeccapurple;';
  readonly red = 'column-rule:red;';
  readonly revert = 'column-rule:revert;';
  readonly revertLayer = 'column-rule:revert-layer;';
  readonly ridge = 'column-rule:ridge;';
  readonly rosybrown = 'column-rule:rosybrown;';
  readonly royalblue = 'column-rule:royalblue;';
  readonly saddlebrown = 'column-rule:saddlebrown;';
  readonly salmon = 'column-rule:salmon;';
  readonly sandybrown = 'column-rule:sandybrown;';
  readonly seagreen = 'column-rule:seagreen;';
  readonly seashell = 'column-rule:seashell;';
  readonly sienna = 'column-rule:sienna;';
  readonly silver = 'column-rule:silver;';
  readonly skyblue = 'column-rule:skyblue;';
  readonly slateblue = 'column-rule:slateblue;';
  readonly slategray = 'column-rule:slategray;';
  readonly slategrey = 'column-rule:slategrey;';
  readonly snow = 'column-rule:snow;';
  readonly solid = 'column-rule:solid;';
  readonly springgreen = 'column-rule:springgreen;';
  readonly steelblue = 'column-rule:steelblue;';
  readonly tan = 'column-rule:tan;';
  readonly teal = 'column-rule:teal;';
  readonly thick = 'column-rule:thick;';
  readonly thin = 'column-rule:thin;';
  readonly thistle = 'column-rule:thistle;';
  readonly tomato = 'column-rule:tomato;';
  readonly transparent = 'column-rule:transparent;';
  readonly turquoise = 'column-rule:turquoise;';
  readonly unset = 'column-rule:unset;';
  readonly violet = 'column-rule:violet;';
  readonly wheat = 'column-rule:wheat;';
  readonly white = 'column-rule:white;';
  readonly whitesmoke = 'column-rule:whitesmoke;';
  readonly yellow = 'column-rule:yellow;';
  readonly yellowgreen = 'column-rule:yellowgreen;';
  constructor() {
    super('column-rule');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ColumnRule, number> | (string & {}),
    ...others: (Extract<Property.ColumnRule, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ColumnRule, number> | (string & {}),
    ...others: (Extract<Property.ColumnRule, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ColumnRule, number> | (string & {}),
    preferred: Extract<Property.ColumnRule, number> | (string & {}),
    maximum: Extract<Property.ColumnRule, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 column-rule-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
 */
export class ColumnRuleColorCss extends CssProperty<Property.ColumnRuleColor> {
  readonly AccentColor = 'column-rule-color:AccentColor;';
  readonly AccentColorText = 'column-rule-color:AccentColorText;';
  readonly ActiveBorder = 'column-rule-color:ActiveBorder;';
  readonly ActiveCaption = 'column-rule-color:ActiveCaption;';
  readonly ActiveText = 'column-rule-color:ActiveText;';
  readonly AppWorkspace = 'column-rule-color:AppWorkspace;';
  readonly Background = 'column-rule-color:Background;';
  readonly ButtonBorder = 'column-rule-color:ButtonBorder;';
  readonly ButtonFace = 'column-rule-color:ButtonFace;';
  readonly ButtonHighlight = 'column-rule-color:ButtonHighlight;';
  readonly ButtonShadow = 'column-rule-color:ButtonShadow;';
  readonly ButtonText = 'column-rule-color:ButtonText;';
  readonly Canvas = 'column-rule-color:Canvas;';
  readonly CanvasText = 'column-rule-color:CanvasText;';
  readonly CaptionText = 'column-rule-color:CaptionText;';
  readonly Field = 'column-rule-color:Field;';
  readonly FieldText = 'column-rule-color:FieldText;';
  readonly GrayText = 'column-rule-color:GrayText;';
  readonly Highlight = 'column-rule-color:Highlight;';
  readonly HighlightText = 'column-rule-color:HighlightText;';
  readonly InactiveBorder = 'column-rule-color:InactiveBorder;';
  readonly InactiveCaption = 'column-rule-color:InactiveCaption;';
  readonly InactiveCaptionText = 'column-rule-color:InactiveCaptionText;';
  readonly InfoBackground = 'column-rule-color:InfoBackground;';
  readonly InfoText = 'column-rule-color:InfoText;';
  readonly LinkText = 'column-rule-color:LinkText;';
  readonly Mark = 'column-rule-color:Mark;';
  readonly MarkText = 'column-rule-color:MarkText;';
  readonly Menu = 'column-rule-color:Menu;';
  readonly MenuText = 'column-rule-color:MenuText;';
  readonly Scrollbar = 'column-rule-color:Scrollbar;';
  readonly SelectedItem = 'column-rule-color:SelectedItem;';
  readonly SelectedItemText = 'column-rule-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'column-rule-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'column-rule-color:ThreeDFace;';
  readonly ThreeDHighlight = 'column-rule-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'column-rule-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'column-rule-color:ThreeDShadow;';
  readonly VisitedText = 'column-rule-color:VisitedText;';
  readonly Window = 'column-rule-color:Window;';
  readonly WindowFrame = 'column-rule-color:WindowFrame;';
  readonly WindowText = 'column-rule-color:WindowText;';
  readonly aliceblue = 'column-rule-color:aliceblue;';
  readonly antiquewhite = 'column-rule-color:antiquewhite;';
  readonly aqua = 'column-rule-color:aqua;';
  readonly aquamarine = 'column-rule-color:aquamarine;';
  readonly azure = 'column-rule-color:azure;';
  readonly beige = 'column-rule-color:beige;';
  readonly bisque = 'column-rule-color:bisque;';
  readonly black = 'column-rule-color:black;';
  readonly blanchedalmond = 'column-rule-color:blanchedalmond;';
  readonly blue = 'column-rule-color:blue;';
  readonly blueviolet = 'column-rule-color:blueviolet;';
  readonly brown = 'column-rule-color:brown;';
  readonly burlywood = 'column-rule-color:burlywood;';
  readonly cadetblue = 'column-rule-color:cadetblue;';
  readonly chartreuse = 'column-rule-color:chartreuse;';
  readonly chocolate = 'column-rule-color:chocolate;';
  readonly coral = 'column-rule-color:coral;';
  readonly cornflowerblue = 'column-rule-color:cornflowerblue;';
  readonly cornsilk = 'column-rule-color:cornsilk;';
  readonly crimson = 'column-rule-color:crimson;';
  readonly currentColor = 'column-rule-color:currentColor;';
  readonly cyan = 'column-rule-color:cyan;';
  readonly darkblue = 'column-rule-color:darkblue;';
  readonly darkcyan = 'column-rule-color:darkcyan;';
  readonly darkgoldenrod = 'column-rule-color:darkgoldenrod;';
  readonly darkgray = 'column-rule-color:darkgray;';
  readonly darkgreen = 'column-rule-color:darkgreen;';
  readonly darkgrey = 'column-rule-color:darkgrey;';
  readonly darkkhaki = 'column-rule-color:darkkhaki;';
  readonly darkmagenta = 'column-rule-color:darkmagenta;';
  readonly darkolivegreen = 'column-rule-color:darkolivegreen;';
  readonly darkorange = 'column-rule-color:darkorange;';
  readonly darkorchid = 'column-rule-color:darkorchid;';
  readonly darkred = 'column-rule-color:darkred;';
  readonly darksalmon = 'column-rule-color:darksalmon;';
  readonly darkseagreen = 'column-rule-color:darkseagreen;';
  readonly darkslateblue = 'column-rule-color:darkslateblue;';
  readonly darkslategray = 'column-rule-color:darkslategray;';
  readonly darkslategrey = 'column-rule-color:darkslategrey;';
  readonly darkturquoise = 'column-rule-color:darkturquoise;';
  readonly darkviolet = 'column-rule-color:darkviolet;';
  readonly deeppink = 'column-rule-color:deeppink;';
  readonly deepskyblue = 'column-rule-color:deepskyblue;';
  readonly dimgray = 'column-rule-color:dimgray;';
  readonly dimgrey = 'column-rule-color:dimgrey;';
  readonly dodgerblue = 'column-rule-color:dodgerblue;';
  readonly firebrick = 'column-rule-color:firebrick;';
  readonly floralwhite = 'column-rule-color:floralwhite;';
  readonly forestgreen = 'column-rule-color:forestgreen;';
  readonly fuchsia = 'column-rule-color:fuchsia;';
  readonly gainsboro = 'column-rule-color:gainsboro;';
  readonly ghostwhite = 'column-rule-color:ghostwhite;';
  readonly gold = 'column-rule-color:gold;';
  readonly goldenrod = 'column-rule-color:goldenrod;';
  readonly gray = 'column-rule-color:gray;';
  readonly green = 'column-rule-color:green;';
  readonly greenyellow = 'column-rule-color:greenyellow;';
  readonly grey = 'column-rule-color:grey;';
  readonly honeydew = 'column-rule-color:honeydew;';
  readonly hotpink = 'column-rule-color:hotpink;';
  readonly indianred = 'column-rule-color:indianred;';
  readonly indigo = 'column-rule-color:indigo;';
  readonly inherit = 'column-rule-color:inherit;';
  readonly initial = 'column-rule-color:initial;';
  readonly ivory = 'column-rule-color:ivory;';
  readonly khaki = 'column-rule-color:khaki;';
  readonly lavender = 'column-rule-color:lavender;';
  readonly lavenderblush = 'column-rule-color:lavenderblush;';
  readonly lawngreen = 'column-rule-color:lawngreen;';
  readonly lemonchiffon = 'column-rule-color:lemonchiffon;';
  readonly lightblue = 'column-rule-color:lightblue;';
  readonly lightcoral = 'column-rule-color:lightcoral;';
  readonly lightcyan = 'column-rule-color:lightcyan;';
  readonly lightgoldenrodyellow = 'column-rule-color:lightgoldenrodyellow;';
  readonly lightgray = 'column-rule-color:lightgray;';
  readonly lightgreen = 'column-rule-color:lightgreen;';
  readonly lightgrey = 'column-rule-color:lightgrey;';
  readonly lightpink = 'column-rule-color:lightpink;';
  readonly lightsalmon = 'column-rule-color:lightsalmon;';
  readonly lightseagreen = 'column-rule-color:lightseagreen;';
  readonly lightskyblue = 'column-rule-color:lightskyblue;';
  readonly lightslategray = 'column-rule-color:lightslategray;';
  readonly lightslategrey = 'column-rule-color:lightslategrey;';
  readonly lightsteelblue = 'column-rule-color:lightsteelblue;';
  readonly lightyellow = 'column-rule-color:lightyellow;';
  readonly lime = 'column-rule-color:lime;';
  readonly limegreen = 'column-rule-color:limegreen;';
  readonly linen = 'column-rule-color:linen;';
  readonly magenta = 'column-rule-color:magenta;';
  readonly maroon = 'column-rule-color:maroon;';
  readonly mediumaquamarine = 'column-rule-color:mediumaquamarine;';
  readonly mediumblue = 'column-rule-color:mediumblue;';
  readonly mediumorchid = 'column-rule-color:mediumorchid;';
  readonly mediumpurple = 'column-rule-color:mediumpurple;';
  readonly mediumseagreen = 'column-rule-color:mediumseagreen;';
  readonly mediumslateblue = 'column-rule-color:mediumslateblue;';
  readonly mediumspringgreen = 'column-rule-color:mediumspringgreen;';
  readonly mediumturquoise = 'column-rule-color:mediumturquoise;';
  readonly mediumvioletred = 'column-rule-color:mediumvioletred;';
  readonly midnightblue = 'column-rule-color:midnightblue;';
  readonly mintcream = 'column-rule-color:mintcream;';
  readonly mistyrose = 'column-rule-color:mistyrose;';
  readonly moccasin = 'column-rule-color:moccasin;';
  readonly navajowhite = 'column-rule-color:navajowhite;';
  readonly navy = 'column-rule-color:navy;';
  readonly oldlace = 'column-rule-color:oldlace;';
  readonly olive = 'column-rule-color:olive;';
  readonly olivedrab = 'column-rule-color:olivedrab;';
  readonly orange = 'column-rule-color:orange;';
  readonly orangered = 'column-rule-color:orangered;';
  readonly orchid = 'column-rule-color:orchid;';
  readonly palegoldenrod = 'column-rule-color:palegoldenrod;';
  readonly palegreen = 'column-rule-color:palegreen;';
  readonly paleturquoise = 'column-rule-color:paleturquoise;';
  readonly palevioletred = 'column-rule-color:palevioletred;';
  readonly papayawhip = 'column-rule-color:papayawhip;';
  readonly peachpuff = 'column-rule-color:peachpuff;';
  readonly peru = 'column-rule-color:peru;';
  readonly pink = 'column-rule-color:pink;';
  readonly plum = 'column-rule-color:plum;';
  readonly powderblue = 'column-rule-color:powderblue;';
  readonly purple = 'column-rule-color:purple;';
  readonly rebeccapurple = 'column-rule-color:rebeccapurple;';
  readonly red = 'column-rule-color:red;';
  readonly revert = 'column-rule-color:revert;';
  readonly revertLayer = 'column-rule-color:revert-layer;';
  readonly rosybrown = 'column-rule-color:rosybrown;';
  readonly royalblue = 'column-rule-color:royalblue;';
  readonly saddlebrown = 'column-rule-color:saddlebrown;';
  readonly salmon = 'column-rule-color:salmon;';
  readonly sandybrown = 'column-rule-color:sandybrown;';
  readonly seagreen = 'column-rule-color:seagreen;';
  readonly seashell = 'column-rule-color:seashell;';
  readonly sienna = 'column-rule-color:sienna;';
  readonly silver = 'column-rule-color:silver;';
  readonly skyblue = 'column-rule-color:skyblue;';
  readonly slateblue = 'column-rule-color:slateblue;';
  readonly slategray = 'column-rule-color:slategray;';
  readonly slategrey = 'column-rule-color:slategrey;';
  readonly snow = 'column-rule-color:snow;';
  readonly springgreen = 'column-rule-color:springgreen;';
  readonly steelblue = 'column-rule-color:steelblue;';
  readonly tan = 'column-rule-color:tan;';
  readonly teal = 'column-rule-color:teal;';
  readonly thistle = 'column-rule-color:thistle;';
  readonly tomato = 'column-rule-color:tomato;';
  readonly transparent = 'column-rule-color:transparent;';
  readonly turquoise = 'column-rule-color:turquoise;';
  readonly unset = 'column-rule-color:unset;';
  readonly violet = 'column-rule-color:violet;';
  readonly wheat = 'column-rule-color:wheat;';
  readonly white = 'column-rule-color:white;';
  readonly whitesmoke = 'column-rule-color:whitesmoke;';
  readonly yellow = 'column-rule-color:yellow;';
  readonly yellowgreen = 'column-rule-color:yellowgreen;';
  constructor() {
    super('column-rule-color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 column-rule-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
 */
export class ColumnRuleStyleCss extends CssProperty<Property.ColumnRuleStyle> {
  readonly dashed = 'column-rule-style:dashed;';
  readonly dotted = 'column-rule-style:dotted;';
  readonly double = 'column-rule-style:double;';
  readonly groove = 'column-rule-style:groove;';
  readonly hidden = 'column-rule-style:hidden;';
  readonly inherit = 'column-rule-style:inherit;';
  readonly initial = 'column-rule-style:initial;';
  readonly inset = 'column-rule-style:inset;';
  readonly none = 'column-rule-style:none;';
  readonly outset = 'column-rule-style:outset;';
  readonly revert = 'column-rule-style:revert;';
  readonly revertLayer = 'column-rule-style:revert-layer;';
  readonly ridge = 'column-rule-style:ridge;';
  readonly solid = 'column-rule-style:solid;';
  readonly unset = 'column-rule-style:unset;';
  constructor() {
    super('column-rule-style');
  }
}

/** CSS 属性 column-rule-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
 */
export class ColumnRuleWidthCss extends LengthCssProperty<Property.ColumnRuleWidth> {
  readonly inherit = 'column-rule-width:inherit;';
  readonly initial = 'column-rule-width:initial;';
  readonly medium = 'column-rule-width:medium;';
  readonly revert = 'column-rule-width:revert;';
  readonly revertLayer = 'column-rule-width:revert-layer;';
  readonly thick = 'column-rule-width:thick;';
  readonly thin = 'column-rule-width:thin;';
  readonly unset = 'column-rule-width:unset;';
  constructor() {
    super('column-rule-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ColumnRuleWidth, number> | (string & {}),
    ...others: (Extract<Property.ColumnRuleWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ColumnRuleWidth, number> | (string & {}),
    ...others: (Extract<Property.ColumnRuleWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ColumnRuleWidth, number> | (string & {}),
    preferred: Extract<Property.ColumnRuleWidth, number> | (string & {}),
    maximum: Extract<Property.ColumnRuleWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 column-span；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
 */
export class ColumnSpanCss extends CssProperty<Property.ColumnSpan> {
  readonly all = 'column-span:all;';
  readonly inherit = 'column-span:inherit;';
  readonly initial = 'column-span:initial;';
  readonly none = 'column-span:none;';
  readonly revert = 'column-span:revert;';
  readonly revertLayer = 'column-span:revert-layer;';
  readonly unset = 'column-span:unset;';
  constructor() {
    super('column-span');
  }
}

/** CSS 属性 column-width；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
 */
export class ColumnWidthCss extends LengthCssProperty<Property.ColumnWidth> {
  readonly auto = 'column-width:auto;';
  readonly inherit = 'column-width:inherit;';
  readonly initial = 'column-width:initial;';
  readonly revert = 'column-width:revert;';
  readonly revertLayer = 'column-width:revert-layer;';
  readonly unset = 'column-width:unset;';
  constructor() {
    super('column-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ColumnWidth, number> | (string & {}),
    ...others: (Extract<Property.ColumnWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ColumnWidth, number> | (string & {}),
    ...others: (Extract<Property.ColumnWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ColumnWidth, number> | (string & {}),
    preferred: Extract<Property.ColumnWidth, number> | (string & {}),
    maximum: Extract<Property.ColumnWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 columns。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
 */
export class ColumnsCss extends LengthCssProperty<Property.Columns> {
  readonly auto = 'columns:auto;';
  readonly inherit = 'columns:inherit;';
  readonly initial = 'columns:initial;';
  readonly revert = 'columns:revert;';
  readonly revertLayer = 'columns:revert-layer;';
  readonly unset = 'columns:unset;';
  constructor() {
    super('columns');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Columns, number> | (string & {}),
    ...others: (Extract<Property.Columns, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Columns, number> | (string & {}),
    ...others: (Extract<Property.Columns, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Columns, number> | (string & {}),
    preferred: Extract<Property.Columns, number> | (string & {}),
    maximum: Extract<Property.Columns, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 contain；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
 */
export class ContainCss extends CssProperty<Property.Contain> {
  readonly content = 'contain:content;';
  readonly inherit = 'contain:inherit;';
  readonly initial = 'contain:initial;';
  readonly inlineSize = 'contain:inline-size;';
  readonly layout = 'contain:layout;';
  readonly none = 'contain:none;';
  readonly paint = 'contain:paint;';
  readonly revert = 'contain:revert;';
  readonly revertLayer = 'contain:revert-layer;';
  readonly size = 'contain:size;';
  readonly strict = 'contain:strict;';
  readonly style = 'contain:style;';
  readonly unset = 'contain:unset;';
  constructor() {
    super('contain');
  }
}

/** CSS 属性 contain-intrinsic-block-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
 */
export class ContainIntrinsicBlockSizeCss extends LengthCssProperty<Property.ContainIntrinsicBlockSize> {
  readonly inherit = 'contain-intrinsic-block-size:inherit;';
  readonly initial = 'contain-intrinsic-block-size:initial;';
  readonly none = 'contain-intrinsic-block-size:none;';
  readonly revert = 'contain-intrinsic-block-size:revert;';
  readonly revertLayer = 'contain-intrinsic-block-size:revert-layer;';
  readonly unset = 'contain-intrinsic-block-size:unset;';
  constructor() {
    super('contain-intrinsic-block-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ContainIntrinsicBlockSize, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicBlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ContainIntrinsicBlockSize, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicBlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ContainIntrinsicBlockSize, number> | (string & {}),
    preferred: Extract<Property.ContainIntrinsicBlockSize, number> | (string & {}),
    maximum: Extract<Property.ContainIntrinsicBlockSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 contain-intrinsic-height；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
 */
export class ContainIntrinsicHeightCss extends LengthCssProperty<Property.ContainIntrinsicHeight> {
  readonly inherit = 'contain-intrinsic-height:inherit;';
  readonly initial = 'contain-intrinsic-height:initial;';
  readonly none = 'contain-intrinsic-height:none;';
  readonly revert = 'contain-intrinsic-height:revert;';
  readonly revertLayer = 'contain-intrinsic-height:revert-layer;';
  readonly unset = 'contain-intrinsic-height:unset;';
  constructor() {
    super('contain-intrinsic-height');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ContainIntrinsicHeight, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicHeight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ContainIntrinsicHeight, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicHeight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ContainIntrinsicHeight, number> | (string & {}),
    preferred: Extract<Property.ContainIntrinsicHeight, number> | (string & {}),
    maximum: Extract<Property.ContainIntrinsicHeight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 contain-intrinsic-inline-size；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
 */
export class ContainIntrinsicInlineSizeCss extends LengthCssProperty<Property.ContainIntrinsicInlineSize> {
  readonly inherit = 'contain-intrinsic-inline-size:inherit;';
  readonly initial = 'contain-intrinsic-inline-size:initial;';
  readonly none = 'contain-intrinsic-inline-size:none;';
  readonly revert = 'contain-intrinsic-inline-size:revert;';
  readonly revertLayer = 'contain-intrinsic-inline-size:revert-layer;';
  readonly unset = 'contain-intrinsic-inline-size:unset;';
  constructor() {
    super('contain-intrinsic-inline-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ContainIntrinsicInlineSize, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicInlineSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ContainIntrinsicInlineSize, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicInlineSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ContainIntrinsicInlineSize, number> | (string & {}),
    preferred: Extract<Property.ContainIntrinsicInlineSize, number> | (string & {}),
    maximum: Extract<Property.ContainIntrinsicInlineSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 contain-intrinsic-size。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
 */
export class ContainIntrinsicSizeCss extends LengthCssProperty<Property.ContainIntrinsicSize> {
  readonly inherit = 'contain-intrinsic-size:inherit;';
  readonly initial = 'contain-intrinsic-size:initial;';
  readonly none = 'contain-intrinsic-size:none;';
  readonly revert = 'contain-intrinsic-size:revert;';
  readonly revertLayer = 'contain-intrinsic-size:revert-layer;';
  readonly unset = 'contain-intrinsic-size:unset;';
  constructor() {
    super('contain-intrinsic-size');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ContainIntrinsicSize, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ContainIntrinsicSize, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ContainIntrinsicSize, number> | (string & {}),
    preferred: Extract<Property.ContainIntrinsicSize, number> | (string & {}),
    maximum: Extract<Property.ContainIntrinsicSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 contain-intrinsic-width；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
 */
export class ContainIntrinsicWidthCss extends LengthCssProperty<Property.ContainIntrinsicWidth> {
  readonly inherit = 'contain-intrinsic-width:inherit;';
  readonly initial = 'contain-intrinsic-width:initial;';
  readonly none = 'contain-intrinsic-width:none;';
  readonly revert = 'contain-intrinsic-width:revert;';
  readonly revertLayer = 'contain-intrinsic-width:revert-layer;';
  readonly unset = 'contain-intrinsic-width:unset;';
  constructor() {
    super('contain-intrinsic-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.ContainIntrinsicWidth, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.ContainIntrinsicWidth, number> | (string & {}),
    ...others: (Extract<Property.ContainIntrinsicWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.ContainIntrinsicWidth, number> | (string & {}),
    preferred: Extract<Property.ContainIntrinsicWidth, number> | (string & {}),
    maximum: Extract<Property.ContainIntrinsicWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 container。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
 */
export class ContainerCss extends CssProperty<Property.Container> {
  readonly inherit = 'container:inherit;';
  readonly initial = 'container:initial;';
  readonly none = 'container:none;';
  readonly revert = 'container:revert;';
  readonly revertLayer = 'container:revert-layer;';
  readonly unset = 'container:unset;';
  constructor() {
    super('container');
  }
}

/** CSS 属性 container-name；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
 */
export class ContainerNameCss extends CssProperty<Property.ContainerName> {
  readonly inherit = 'container-name:inherit;';
  readonly initial = 'container-name:initial;';
  readonly none = 'container-name:none;';
  readonly revert = 'container-name:revert;';
  readonly revertLayer = 'container-name:revert-layer;';
  readonly unset = 'container-name:unset;';
  constructor() {
    super('container-name');
  }
}

/** CSS 属性 container-type；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
 */
export class ContainerTypeCss extends CssProperty<Property.ContainerType> {
  readonly inherit = 'container-type:inherit;';
  readonly initial = 'container-type:initial;';
  readonly inlineSize = 'container-type:inline-size;';
  readonly normal = 'container-type:normal;';
  readonly revert = 'container-type:revert;';
  readonly revertLayer = 'container-type:revert-layer;';
  readonly scrollState = 'container-type:scroll-state;';
  readonly size = 'container-type:size;';
  readonly unset = 'container-type:unset;';
  constructor() {
    super('container-type');
  }
}

/** CSS 属性 content；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
 */
export class ContentCss extends CssProperty<Property.Content> {
  readonly closeQuote = 'content:close-quote;';
  readonly inherit = 'content:inherit;';
  readonly initial = 'content:initial;';
  readonly noCloseQuote = 'content:no-close-quote;';
  readonly noOpenQuote = 'content:no-open-quote;';
  readonly none = 'content:none;';
  readonly normal = 'content:normal;';
  readonly openQuote = 'content:open-quote;';
  readonly revert = 'content:revert;';
  readonly revertLayer = 'content:revert-layer;';
  readonly unset = 'content:unset;';
  constructor() {
    super('content');
  }
}

/** CSS 属性 content-visibility；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
 */
export class ContentVisibilityCss extends CssProperty<Property.ContentVisibility> {
  readonly auto = 'content-visibility:auto;';
  readonly hidden = 'content-visibility:hidden;';
  readonly inherit = 'content-visibility:inherit;';
  readonly initial = 'content-visibility:initial;';
  readonly revert = 'content-visibility:revert;';
  readonly revertLayer = 'content-visibility:revert-layer;';
  readonly unset = 'content-visibility:unset;';
  readonly visible = 'content-visibility:visible;';
  constructor() {
    super('content-visibility');
  }
}

/** CSS 属性 counter-increment；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
 */
export class CounterIncrementCss extends CssProperty<Property.CounterIncrement> {
  readonly inherit = 'counter-increment:inherit;';
  readonly initial = 'counter-increment:initial;';
  readonly none = 'counter-increment:none;';
  readonly revert = 'counter-increment:revert;';
  readonly revertLayer = 'counter-increment:revert-layer;';
  readonly unset = 'counter-increment:unset;';
  constructor() {
    super('counter-increment');
  }
}

/** CSS 属性 counter-reset；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
 */
export class CounterResetCss extends CssProperty<Property.CounterReset> {
  readonly inherit = 'counter-reset:inherit;';
  readonly initial = 'counter-reset:initial;';
  readonly none = 'counter-reset:none;';
  readonly revert = 'counter-reset:revert;';
  readonly revertLayer = 'counter-reset:revert-layer;';
  readonly unset = 'counter-reset:unset;';
  constructor() {
    super('counter-reset');
  }
}

/** CSS 属性 counter-set；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
 */
export class CounterSetCss extends CssProperty<Property.CounterSet> {
  readonly inherit = 'counter-set:inherit;';
  readonly initial = 'counter-set:initial;';
  readonly none = 'counter-set:none;';
  readonly revert = 'counter-set:revert;';
  readonly revertLayer = 'counter-set:revert-layer;';
  readonly unset = 'counter-set:unset;';
  constructor() {
    super('counter-set');
  }
}

/** CSS 属性 cursor；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
 */
export class CursorCss extends CssProperty<Property.Cursor> {
  readonly alias = 'cursor:alias;';
  readonly allScroll = 'cursor:all-scroll;';
  readonly auto = 'cursor:auto;';
  readonly cell = 'cursor:cell;';
  readonly colResize = 'cursor:col-resize;';
  readonly contextMenu = 'cursor:context-menu;';
  readonly copy = 'cursor:copy;';
  readonly crosshair = 'cursor:crosshair;';
  readonly default = 'cursor:default;';
  readonly eResize = 'cursor:e-resize;';
  readonly ewResize = 'cursor:ew-resize;';
  readonly grab = 'cursor:grab;';
  readonly grabbing = 'cursor:grabbing;';
  readonly help = 'cursor:help;';
  readonly inherit = 'cursor:inherit;';
  readonly initial = 'cursor:initial;';
  readonly move = 'cursor:move;';
  readonly nResize = 'cursor:n-resize;';
  readonly neResize = 'cursor:ne-resize;';
  readonly neswResize = 'cursor:nesw-resize;';
  readonly noDrop = 'cursor:no-drop;';
  readonly none = 'cursor:none;';
  readonly notAllowed = 'cursor:not-allowed;';
  readonly nsResize = 'cursor:ns-resize;';
  readonly nwResize = 'cursor:nw-resize;';
  readonly nwseResize = 'cursor:nwse-resize;';
  readonly pointer = 'cursor:pointer;';
  readonly progress = 'cursor:progress;';
  readonly revert = 'cursor:revert;';
  readonly revertLayer = 'cursor:revert-layer;';
  readonly rowResize = 'cursor:row-resize;';
  readonly sResize = 'cursor:s-resize;';
  readonly seResize = 'cursor:se-resize;';
  readonly swResize = 'cursor:sw-resize;';
  readonly text = 'cursor:text;';
  readonly unset = 'cursor:unset;';
  readonly verticalText = 'cursor:vertical-text;';
  readonly wResize = 'cursor:w-resize;';
  readonly wait = 'cursor:wait;';
  readonly zoomIn = 'cursor:zoom-in;';
  readonly zoomOut = 'cursor:zoom-out;';
  constructor() {
    super('cursor');
  }
}

/** CSS 属性 cx；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
 */
export class CxCss extends LengthCssProperty<Property.Cx> {
  readonly inherit = 'cx:inherit;';
  readonly initial = 'cx:initial;';
  readonly revert = 'cx:revert;';
  readonly revertLayer = 'cx:revert-layer;';
  readonly unset = 'cx:unset;';
  constructor() {
    super('cx');
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Cx, number> | (string & {}),
    ...others: (Extract<Property.Cx, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Cx, number> | (string & {}),
    ...others: (Extract<Property.Cx, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Cx, number> | (string & {}),
    preferred: Extract<Property.Cx, number> | (string & {}),
    maximum: Extract<Property.Cx, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 cy；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
 */
export class CyCss extends LengthCssProperty<Property.Cy> {
  readonly inherit = 'cy:inherit;';
  readonly initial = 'cy:initial;';
  readonly revert = 'cy:revert;';
  readonly revertLayer = 'cy:revert-layer;';
  readonly unset = 'cy:unset;';
  constructor() {
    super('cy');
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Cy, number> | (string & {}),
    ...others: (Extract<Property.Cy, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Cy, number> | (string & {}),
    ...others: (Extract<Property.Cy, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Cy, number> | (string & {}),
    preferred: Extract<Property.Cy, number> | (string & {}),
    maximum: Extract<Property.Cy, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 d；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
 */
export class DCss extends CssProperty<Property.D> {
  readonly inherit = 'd:inherit;';
  readonly initial = 'd:initial;';
  readonly none = 'd:none;';
  readonly revert = 'd:revert;';
  readonly revertLayer = 'd:revert-layer;';
  readonly unset = 'd:unset;';
  constructor() {
    super('d');
  }
}

/** CSS 属性 direction；初始值 ltr。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
 */
export class DirectionCss extends CssProperty<Property.Direction> {
  readonly inherit = 'direction:inherit;';
  readonly initial = 'direction:initial;';
  readonly ltr = 'direction:ltr;';
  readonly revert = 'direction:revert;';
  readonly revertLayer = 'direction:revert-layer;';
  readonly rtl = 'direction:rtl;';
  readonly unset = 'direction:unset;';
  constructor() {
    super('direction');
  }
}

/** 显示类型（CSS display）；初始值 inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
 */
export class DisplayCss extends CssProperty<Property.Display> {
  readonly block = 'display:block;';
  readonly contents = 'display:contents;';
  readonly flex = 'display:flex;';
  readonly flow = 'display:flow;';
  readonly flowRoot = 'display:flow-root;';
  readonly grid = 'display:grid;';
  readonly inherit = 'display:inherit;';
  readonly initial = 'display:initial;';
  readonly inline = 'display:inline;';
  readonly inlineBlock = 'display:inline-block;';
  readonly inlineFlex = 'display:inline-flex;';
  readonly inlineGrid = 'display:inline-grid;';
  readonly inlineListItem = 'display:inline-list-item;';
  readonly inlineTable = 'display:inline-table;';
  readonly listItem = 'display:list-item;';
  readonly none = 'display:none;';
  readonly revert = 'display:revert;';
  readonly revertLayer = 'display:revert-layer;';
  readonly ruby = 'display:ruby;';
  readonly rubyBase = 'display:ruby-base;';
  readonly rubyBaseContainer = 'display:ruby-base-container;';
  readonly rubyText = 'display:ruby-text;';
  readonly rubyTextContainer = 'display:ruby-text-container;';
  readonly runIn = 'display:run-in;';
  readonly table = 'display:table;';
  readonly tableCaption = 'display:table-caption;';
  readonly tableCell = 'display:table-cell;';
  readonly tableColumn = 'display:table-column;';
  readonly tableColumnGroup = 'display:table-column-group;';
  readonly tableFooterGroup = 'display:table-footer-group;';
  readonly tableHeaderGroup = 'display:table-header-group;';
  readonly tableRow = 'display:table-row;';
  readonly tableRowGroup = 'display:table-row-group;';
  readonly unset = 'display:unset;';
  constructor() {
    super('display');
  }
}

/** CSS 属性 dominant-baseline；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
 */
export class DominantBaselineCss extends CssProperty<Property.DominantBaseline> {
  readonly alphabetic = 'dominant-baseline:alphabetic;';
  readonly auto = 'dominant-baseline:auto;';
  readonly central = 'dominant-baseline:central;';
  readonly hanging = 'dominant-baseline:hanging;';
  readonly ideographic = 'dominant-baseline:ideographic;';
  readonly inherit = 'dominant-baseline:inherit;';
  readonly initial = 'dominant-baseline:initial;';
  readonly mathematical = 'dominant-baseline:mathematical;';
  readonly middle = 'dominant-baseline:middle;';
  readonly revert = 'dominant-baseline:revert;';
  readonly revertLayer = 'dominant-baseline:revert-layer;';
  readonly textBottom = 'dominant-baseline:text-bottom;';
  readonly textTop = 'dominant-baseline:text-top;';
  readonly unset = 'dominant-baseline:unset;';
  constructor() {
    super('dominant-baseline');
  }
}

/** CSS 属性 empty-cells；初始值 show。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
 */
export class EmptyCellsCss extends CssProperty<Property.EmptyCells> {
  readonly hide = 'empty-cells:hide;';
  readonly inherit = 'empty-cells:inherit;';
  readonly initial = 'empty-cells:initial;';
  readonly revert = 'empty-cells:revert;';
  readonly revertLayer = 'empty-cells:revert-layer;';
  readonly show = 'empty-cells:show;';
  readonly unset = 'empty-cells:unset;';
  constructor() {
    super('empty-cells');
  }
}

/** CSS 属性 field-sizing；初始值 fixed。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
 */
export class FieldSizingCss extends CssProperty<Property.FieldSizing> {
  readonly content = 'field-sizing:content;';
  readonly fixed = 'field-sizing:fixed;';
  readonly inherit = 'field-sizing:inherit;';
  readonly initial = 'field-sizing:initial;';
  readonly revert = 'field-sizing:revert;';
  readonly revertLayer = 'field-sizing:revert-layer;';
  readonly unset = 'field-sizing:unset;';
  constructor() {
    super('field-sizing');
  }
}

/** CSS 属性 fill；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
 */
export class FillCss extends CssProperty<Property.Fill> {
  readonly AccentColor = 'fill:AccentColor;';
  readonly AccentColorText = 'fill:AccentColorText;';
  readonly ActiveBorder = 'fill:ActiveBorder;';
  readonly ActiveCaption = 'fill:ActiveCaption;';
  readonly ActiveText = 'fill:ActiveText;';
  readonly AppWorkspace = 'fill:AppWorkspace;';
  readonly Background = 'fill:Background;';
  readonly ButtonBorder = 'fill:ButtonBorder;';
  readonly ButtonFace = 'fill:ButtonFace;';
  readonly ButtonHighlight = 'fill:ButtonHighlight;';
  readonly ButtonShadow = 'fill:ButtonShadow;';
  readonly ButtonText = 'fill:ButtonText;';
  readonly Canvas = 'fill:Canvas;';
  readonly CanvasText = 'fill:CanvasText;';
  readonly CaptionText = 'fill:CaptionText;';
  readonly Field = 'fill:Field;';
  readonly FieldText = 'fill:FieldText;';
  readonly GrayText = 'fill:GrayText;';
  readonly Highlight = 'fill:Highlight;';
  readonly HighlightText = 'fill:HighlightText;';
  readonly InactiveBorder = 'fill:InactiveBorder;';
  readonly InactiveCaption = 'fill:InactiveCaption;';
  readonly InactiveCaptionText = 'fill:InactiveCaptionText;';
  readonly InfoBackground = 'fill:InfoBackground;';
  readonly InfoText = 'fill:InfoText;';
  readonly LinkText = 'fill:LinkText;';
  readonly Mark = 'fill:Mark;';
  readonly MarkText = 'fill:MarkText;';
  readonly Menu = 'fill:Menu;';
  readonly MenuText = 'fill:MenuText;';
  readonly Scrollbar = 'fill:Scrollbar;';
  readonly SelectedItem = 'fill:SelectedItem;';
  readonly SelectedItemText = 'fill:SelectedItemText;';
  readonly ThreeDDarkShadow = 'fill:ThreeDDarkShadow;';
  readonly ThreeDFace = 'fill:ThreeDFace;';
  readonly ThreeDHighlight = 'fill:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'fill:ThreeDLightShadow;';
  readonly ThreeDShadow = 'fill:ThreeDShadow;';
  readonly VisitedText = 'fill:VisitedText;';
  readonly Window = 'fill:Window;';
  readonly WindowFrame = 'fill:WindowFrame;';
  readonly WindowText = 'fill:WindowText;';
  readonly aliceblue = 'fill:aliceblue;';
  readonly antiquewhite = 'fill:antiquewhite;';
  readonly aqua = 'fill:aqua;';
  readonly aquamarine = 'fill:aquamarine;';
  readonly azure = 'fill:azure;';
  readonly beige = 'fill:beige;';
  readonly bisque = 'fill:bisque;';
  readonly black = 'fill:black;';
  readonly blanchedalmond = 'fill:blanchedalmond;';
  readonly blue = 'fill:blue;';
  readonly blueviolet = 'fill:blueviolet;';
  readonly brown = 'fill:brown;';
  readonly burlywood = 'fill:burlywood;';
  readonly cadetblue = 'fill:cadetblue;';
  readonly chartreuse = 'fill:chartreuse;';
  readonly chocolate = 'fill:chocolate;';
  readonly contextFill = 'fill:context-fill;';
  readonly contextStroke = 'fill:context-stroke;';
  readonly coral = 'fill:coral;';
  readonly cornflowerblue = 'fill:cornflowerblue;';
  readonly cornsilk = 'fill:cornsilk;';
  readonly crimson = 'fill:crimson;';
  readonly currentColor = 'fill:currentColor;';
  readonly cyan = 'fill:cyan;';
  readonly darkblue = 'fill:darkblue;';
  readonly darkcyan = 'fill:darkcyan;';
  readonly darkgoldenrod = 'fill:darkgoldenrod;';
  readonly darkgray = 'fill:darkgray;';
  readonly darkgreen = 'fill:darkgreen;';
  readonly darkgrey = 'fill:darkgrey;';
  readonly darkkhaki = 'fill:darkkhaki;';
  readonly darkmagenta = 'fill:darkmagenta;';
  readonly darkolivegreen = 'fill:darkolivegreen;';
  readonly darkorange = 'fill:darkorange;';
  readonly darkorchid = 'fill:darkorchid;';
  readonly darkred = 'fill:darkred;';
  readonly darksalmon = 'fill:darksalmon;';
  readonly darkseagreen = 'fill:darkseagreen;';
  readonly darkslateblue = 'fill:darkslateblue;';
  readonly darkslategray = 'fill:darkslategray;';
  readonly darkslategrey = 'fill:darkslategrey;';
  readonly darkturquoise = 'fill:darkturquoise;';
  readonly darkviolet = 'fill:darkviolet;';
  readonly deeppink = 'fill:deeppink;';
  readonly deepskyblue = 'fill:deepskyblue;';
  readonly dimgray = 'fill:dimgray;';
  readonly dimgrey = 'fill:dimgrey;';
  readonly dodgerblue = 'fill:dodgerblue;';
  readonly firebrick = 'fill:firebrick;';
  readonly floralwhite = 'fill:floralwhite;';
  readonly forestgreen = 'fill:forestgreen;';
  readonly fuchsia = 'fill:fuchsia;';
  readonly gainsboro = 'fill:gainsboro;';
  readonly ghostwhite = 'fill:ghostwhite;';
  readonly gold = 'fill:gold;';
  readonly goldenrod = 'fill:goldenrod;';
  readonly gray = 'fill:gray;';
  readonly green = 'fill:green;';
  readonly greenyellow = 'fill:greenyellow;';
  readonly grey = 'fill:grey;';
  readonly honeydew = 'fill:honeydew;';
  readonly hotpink = 'fill:hotpink;';
  readonly indianred = 'fill:indianred;';
  readonly indigo = 'fill:indigo;';
  readonly inherit = 'fill:inherit;';
  readonly initial = 'fill:initial;';
  readonly ivory = 'fill:ivory;';
  readonly khaki = 'fill:khaki;';
  readonly lavender = 'fill:lavender;';
  readonly lavenderblush = 'fill:lavenderblush;';
  readonly lawngreen = 'fill:lawngreen;';
  readonly lemonchiffon = 'fill:lemonchiffon;';
  readonly lightblue = 'fill:lightblue;';
  readonly lightcoral = 'fill:lightcoral;';
  readonly lightcyan = 'fill:lightcyan;';
  readonly lightgoldenrodyellow = 'fill:lightgoldenrodyellow;';
  readonly lightgray = 'fill:lightgray;';
  readonly lightgreen = 'fill:lightgreen;';
  readonly lightgrey = 'fill:lightgrey;';
  readonly lightpink = 'fill:lightpink;';
  readonly lightsalmon = 'fill:lightsalmon;';
  readonly lightseagreen = 'fill:lightseagreen;';
  readonly lightskyblue = 'fill:lightskyblue;';
  readonly lightslategray = 'fill:lightslategray;';
  readonly lightslategrey = 'fill:lightslategrey;';
  readonly lightsteelblue = 'fill:lightsteelblue;';
  readonly lightyellow = 'fill:lightyellow;';
  readonly lime = 'fill:lime;';
  readonly limegreen = 'fill:limegreen;';
  readonly linen = 'fill:linen;';
  readonly magenta = 'fill:magenta;';
  readonly maroon = 'fill:maroon;';
  readonly mediumaquamarine = 'fill:mediumaquamarine;';
  readonly mediumblue = 'fill:mediumblue;';
  readonly mediumorchid = 'fill:mediumorchid;';
  readonly mediumpurple = 'fill:mediumpurple;';
  readonly mediumseagreen = 'fill:mediumseagreen;';
  readonly mediumslateblue = 'fill:mediumslateblue;';
  readonly mediumspringgreen = 'fill:mediumspringgreen;';
  readonly mediumturquoise = 'fill:mediumturquoise;';
  readonly mediumvioletred = 'fill:mediumvioletred;';
  readonly midnightblue = 'fill:midnightblue;';
  readonly mintcream = 'fill:mintcream;';
  readonly mistyrose = 'fill:mistyrose;';
  readonly moccasin = 'fill:moccasin;';
  readonly navajowhite = 'fill:navajowhite;';
  readonly navy = 'fill:navy;';
  readonly none = 'fill:none;';
  readonly oldlace = 'fill:oldlace;';
  readonly olive = 'fill:olive;';
  readonly olivedrab = 'fill:olivedrab;';
  readonly orange = 'fill:orange;';
  readonly orangered = 'fill:orangered;';
  readonly orchid = 'fill:orchid;';
  readonly palegoldenrod = 'fill:palegoldenrod;';
  readonly palegreen = 'fill:palegreen;';
  readonly paleturquoise = 'fill:paleturquoise;';
  readonly palevioletred = 'fill:palevioletred;';
  readonly papayawhip = 'fill:papayawhip;';
  readonly peachpuff = 'fill:peachpuff;';
  readonly peru = 'fill:peru;';
  readonly pink = 'fill:pink;';
  readonly plum = 'fill:plum;';
  readonly powderblue = 'fill:powderblue;';
  readonly purple = 'fill:purple;';
  readonly rebeccapurple = 'fill:rebeccapurple;';
  readonly red = 'fill:red;';
  readonly revert = 'fill:revert;';
  readonly revertLayer = 'fill:revert-layer;';
  readonly rosybrown = 'fill:rosybrown;';
  readonly royalblue = 'fill:royalblue;';
  readonly saddlebrown = 'fill:saddlebrown;';
  readonly salmon = 'fill:salmon;';
  readonly sandybrown = 'fill:sandybrown;';
  readonly seagreen = 'fill:seagreen;';
  readonly seashell = 'fill:seashell;';
  readonly sienna = 'fill:sienna;';
  readonly silver = 'fill:silver;';
  readonly skyblue = 'fill:skyblue;';
  readonly slateblue = 'fill:slateblue;';
  readonly slategray = 'fill:slategray;';
  readonly slategrey = 'fill:slategrey;';
  readonly snow = 'fill:snow;';
  readonly springgreen = 'fill:springgreen;';
  readonly steelblue = 'fill:steelblue;';
  readonly tan = 'fill:tan;';
  readonly teal = 'fill:teal;';
  readonly thistle = 'fill:thistle;';
  readonly tomato = 'fill:tomato;';
  readonly transparent = 'fill:transparent;';
  readonly turquoise = 'fill:turquoise;';
  readonly unset = 'fill:unset;';
  readonly violet = 'fill:violet;';
  readonly wheat = 'fill:wheat;';
  readonly white = 'fill:white;';
  readonly whitesmoke = 'fill:whitesmoke;';
  readonly yellow = 'fill:yellow;';
  readonly yellowgreen = 'fill:yellowgreen;';
  constructor() {
    super('fill');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 fill-opacity；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
 */
export class FillOpacityCss extends CssProperty<Property.FillOpacity> {
  readonly inherit = 'fill-opacity:inherit;';
  readonly initial = 'fill-opacity:initial;';
  readonly revert = 'fill-opacity:revert;';
  readonly revertLayer = 'fill-opacity:revert-layer;';
  readonly unset = 'fill-opacity:unset;';
  constructor() {
    super('fill-opacity');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FillOpacity, number> | (string & {}),
    ...others: (Extract<Property.FillOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FillOpacity, number> | (string & {}),
    ...others: (Extract<Property.FillOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FillOpacity, number> | (string & {}),
    preferred: Extract<Property.FillOpacity, number> | (string & {}),
    maximum: Extract<Property.FillOpacity, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 fill-rule；初始值 nonzero。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
 */
export class FillRuleCss extends CssProperty<Property.FillRule> {
  readonly evenodd = 'fill-rule:evenodd;';
  readonly inherit = 'fill-rule:inherit;';
  readonly initial = 'fill-rule:initial;';
  readonly nonzero = 'fill-rule:nonzero;';
  readonly revert = 'fill-rule:revert;';
  readonly revertLayer = 'fill-rule:revert-layer;';
  readonly unset = 'fill-rule:unset;';
  constructor() {
    super('fill-rule');
  }
}

/** CSS 属性 filter；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
 */
export class FilterCss extends CssProperty<Property.Filter> {
  readonly inherit = 'filter:inherit;';
  readonly initial = 'filter:initial;';
  readonly none = 'filter:none;';
  readonly revert = 'filter:revert;';
  readonly revertLayer = 'filter:revert-layer;';
  readonly unset = 'filter:unset;';
  constructor() {
    super('filter');
  }
}

/** CSS 属性 flex。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
 */
export class FlexCss extends LengthCssProperty<Property.Flex> {
  readonly auto = 'flex:auto;';
  readonly content = 'flex:content;';
  readonly fitContent = 'flex:fit-content;';
  readonly inherit = 'flex:inherit;';
  readonly initial = 'flex:initial;';
  readonly maxContent = 'flex:max-content;';
  readonly minContent = 'flex:min-content;';
  readonly none = 'flex:none;';
  readonly revert = 'flex:revert;';
  readonly revertLayer = 'flex:revert-layer;';
  readonly unset = 'flex:unset;';
  constructor() {
    super('flex');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.Flex, number> | (string & {}),
    ...others: (Extract<Property.Flex, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Flex, number> | (string & {}),
    ...others: (Extract<Property.Flex, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Flex, number> | (string & {}),
    preferred: Extract<Property.Flex, number> | (string & {}),
    maximum: Extract<Property.Flex, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 flex-basis；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
 */
export class FlexBasisCss extends LengthCssProperty<Property.FlexBasis> {
  readonly auto = 'flex-basis:auto;';
  readonly content = 'flex-basis:content;';
  readonly fitContent = 'flex-basis:fit-content;';
  readonly inherit = 'flex-basis:inherit;';
  readonly initial = 'flex-basis:initial;';
  readonly maxContent = 'flex-basis:max-content;';
  readonly minContent = 'flex-basis:min-content;';
  readonly revert = 'flex-basis:revert;';
  readonly revertLayer = 'flex-basis:revert-layer;';
  readonly unset = 'flex-basis:unset;';
  constructor() {
    super('flex-basis');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FlexBasis, number> | (string & {}),
    ...others: (Extract<Property.FlexBasis, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FlexBasis, number> | (string & {}),
    ...others: (Extract<Property.FlexBasis, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FlexBasis, number> | (string & {}),
    preferred: Extract<Property.FlexBasis, number> | (string & {}),
    maximum: Extract<Property.FlexBasis, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 flex-direction；初始值 row。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
 */
export class FlexDirectionCss extends CssProperty<Property.FlexDirection> {
  readonly column = 'flex-direction:column;';
  readonly columnReverse = 'flex-direction:column-reverse;';
  readonly inherit = 'flex-direction:inherit;';
  readonly initial = 'flex-direction:initial;';
  readonly revert = 'flex-direction:revert;';
  readonly revertLayer = 'flex-direction:revert-layer;';
  readonly row = 'flex-direction:row;';
  readonly rowReverse = 'flex-direction:row-reverse;';
  readonly unset = 'flex-direction:unset;';
  constructor() {
    super('flex-direction');
  }
}

/** CSS 属性 flex-flow。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
 */
export class FlexFlowCss extends CssProperty<Property.FlexFlow> {
  readonly column = 'flex-flow:column;';
  readonly columnReverse = 'flex-flow:column-reverse;';
  readonly inherit = 'flex-flow:inherit;';
  readonly initial = 'flex-flow:initial;';
  readonly nowrap = 'flex-flow:nowrap;';
  readonly revert = 'flex-flow:revert;';
  readonly revertLayer = 'flex-flow:revert-layer;';
  readonly row = 'flex-flow:row;';
  readonly rowReverse = 'flex-flow:row-reverse;';
  readonly unset = 'flex-flow:unset;';
  readonly wrap = 'flex-flow:wrap;';
  readonly wrapReverse = 'flex-flow:wrap-reverse;';
  constructor() {
    super('flex-flow');
  }
}

/** CSS 属性 flex-grow；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
 */
export class FlexGrowCss extends CssProperty<Property.FlexGrow> {
  readonly inherit = 'flex-grow:inherit;';
  readonly initial = 'flex-grow:initial;';
  readonly revert = 'flex-grow:revert;';
  readonly revertLayer = 'flex-grow:revert-layer;';
  readonly unset = 'flex-grow:unset;';
  constructor() {
    super('flex-grow');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FlexGrow, number> | (string & {}),
    ...others: (Extract<Property.FlexGrow, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FlexGrow, number> | (string & {}),
    ...others: (Extract<Property.FlexGrow, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FlexGrow, number> | (string & {}),
    preferred: Extract<Property.FlexGrow, number> | (string & {}),
    maximum: Extract<Property.FlexGrow, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 flex-shrink；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
 */
export class FlexShrinkCss extends CssProperty<Property.FlexShrink> {
  readonly inherit = 'flex-shrink:inherit;';
  readonly initial = 'flex-shrink:initial;';
  readonly revert = 'flex-shrink:revert;';
  readonly revertLayer = 'flex-shrink:revert-layer;';
  readonly unset = 'flex-shrink:unset;';
  constructor() {
    super('flex-shrink');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FlexShrink, number> | (string & {}),
    ...others: (Extract<Property.FlexShrink, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FlexShrink, number> | (string & {}),
    ...others: (Extract<Property.FlexShrink, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FlexShrink, number> | (string & {}),
    preferred: Extract<Property.FlexShrink, number> | (string & {}),
    maximum: Extract<Property.FlexShrink, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 flex-wrap；初始值 nowrap。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
 */
export class FlexWrapCss extends CssProperty<Property.FlexWrap> {
  readonly inherit = 'flex-wrap:inherit;';
  readonly initial = 'flex-wrap:initial;';
  readonly nowrap = 'flex-wrap:nowrap;';
  readonly revert = 'flex-wrap:revert;';
  readonly revertLayer = 'flex-wrap:revert-layer;';
  readonly unset = 'flex-wrap:unset;';
  readonly wrap = 'flex-wrap:wrap;';
  readonly wrapReverse = 'flex-wrap:wrap-reverse;';
  constructor() {
    super('flex-wrap');
  }
}

/** CSS 属性 float；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
 */
export class FloatCss extends CssProperty<Property.Float> {
  readonly inherit = 'float:inherit;';
  readonly initial = 'float:initial;';
  readonly inlineEnd = 'float:inline-end;';
  readonly inlineStart = 'float:inline-start;';
  readonly left = 'float:left;';
  readonly none = 'float:none;';
  readonly revert = 'float:revert;';
  readonly revertLayer = 'float:revert-layer;';
  readonly right = 'float:right;';
  readonly unset = 'float:unset;';
  constructor() {
    super('float');
  }
}

/** CSS 属性 flood-color；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
 */
export class FloodColorCss extends CssProperty<Property.FloodColor> {
  readonly AccentColor = 'flood-color:AccentColor;';
  readonly AccentColorText = 'flood-color:AccentColorText;';
  readonly ActiveBorder = 'flood-color:ActiveBorder;';
  readonly ActiveCaption = 'flood-color:ActiveCaption;';
  readonly ActiveText = 'flood-color:ActiveText;';
  readonly AppWorkspace = 'flood-color:AppWorkspace;';
  readonly Background = 'flood-color:Background;';
  readonly ButtonBorder = 'flood-color:ButtonBorder;';
  readonly ButtonFace = 'flood-color:ButtonFace;';
  readonly ButtonHighlight = 'flood-color:ButtonHighlight;';
  readonly ButtonShadow = 'flood-color:ButtonShadow;';
  readonly ButtonText = 'flood-color:ButtonText;';
  readonly Canvas = 'flood-color:Canvas;';
  readonly CanvasText = 'flood-color:CanvasText;';
  readonly CaptionText = 'flood-color:CaptionText;';
  readonly Field = 'flood-color:Field;';
  readonly FieldText = 'flood-color:FieldText;';
  readonly GrayText = 'flood-color:GrayText;';
  readonly Highlight = 'flood-color:Highlight;';
  readonly HighlightText = 'flood-color:HighlightText;';
  readonly InactiveBorder = 'flood-color:InactiveBorder;';
  readonly InactiveCaption = 'flood-color:InactiveCaption;';
  readonly InactiveCaptionText = 'flood-color:InactiveCaptionText;';
  readonly InfoBackground = 'flood-color:InfoBackground;';
  readonly InfoText = 'flood-color:InfoText;';
  readonly LinkText = 'flood-color:LinkText;';
  readonly Mark = 'flood-color:Mark;';
  readonly MarkText = 'flood-color:MarkText;';
  readonly Menu = 'flood-color:Menu;';
  readonly MenuText = 'flood-color:MenuText;';
  readonly Scrollbar = 'flood-color:Scrollbar;';
  readonly SelectedItem = 'flood-color:SelectedItem;';
  readonly SelectedItemText = 'flood-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'flood-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'flood-color:ThreeDFace;';
  readonly ThreeDHighlight = 'flood-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'flood-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'flood-color:ThreeDShadow;';
  readonly VisitedText = 'flood-color:VisitedText;';
  readonly Window = 'flood-color:Window;';
  readonly WindowFrame = 'flood-color:WindowFrame;';
  readonly WindowText = 'flood-color:WindowText;';
  readonly aliceblue = 'flood-color:aliceblue;';
  readonly antiquewhite = 'flood-color:antiquewhite;';
  readonly aqua = 'flood-color:aqua;';
  readonly aquamarine = 'flood-color:aquamarine;';
  readonly azure = 'flood-color:azure;';
  readonly beige = 'flood-color:beige;';
  readonly bisque = 'flood-color:bisque;';
  readonly black = 'flood-color:black;';
  readonly blanchedalmond = 'flood-color:blanchedalmond;';
  readonly blue = 'flood-color:blue;';
  readonly blueviolet = 'flood-color:blueviolet;';
  readonly brown = 'flood-color:brown;';
  readonly burlywood = 'flood-color:burlywood;';
  readonly cadetblue = 'flood-color:cadetblue;';
  readonly chartreuse = 'flood-color:chartreuse;';
  readonly chocolate = 'flood-color:chocolate;';
  readonly coral = 'flood-color:coral;';
  readonly cornflowerblue = 'flood-color:cornflowerblue;';
  readonly cornsilk = 'flood-color:cornsilk;';
  readonly crimson = 'flood-color:crimson;';
  readonly currentColor = 'flood-color:currentColor;';
  readonly cyan = 'flood-color:cyan;';
  readonly darkblue = 'flood-color:darkblue;';
  readonly darkcyan = 'flood-color:darkcyan;';
  readonly darkgoldenrod = 'flood-color:darkgoldenrod;';
  readonly darkgray = 'flood-color:darkgray;';
  readonly darkgreen = 'flood-color:darkgreen;';
  readonly darkgrey = 'flood-color:darkgrey;';
  readonly darkkhaki = 'flood-color:darkkhaki;';
  readonly darkmagenta = 'flood-color:darkmagenta;';
  readonly darkolivegreen = 'flood-color:darkolivegreen;';
  readonly darkorange = 'flood-color:darkorange;';
  readonly darkorchid = 'flood-color:darkorchid;';
  readonly darkred = 'flood-color:darkred;';
  readonly darksalmon = 'flood-color:darksalmon;';
  readonly darkseagreen = 'flood-color:darkseagreen;';
  readonly darkslateblue = 'flood-color:darkslateblue;';
  readonly darkslategray = 'flood-color:darkslategray;';
  readonly darkslategrey = 'flood-color:darkslategrey;';
  readonly darkturquoise = 'flood-color:darkturquoise;';
  readonly darkviolet = 'flood-color:darkviolet;';
  readonly deeppink = 'flood-color:deeppink;';
  readonly deepskyblue = 'flood-color:deepskyblue;';
  readonly dimgray = 'flood-color:dimgray;';
  readonly dimgrey = 'flood-color:dimgrey;';
  readonly dodgerblue = 'flood-color:dodgerblue;';
  readonly firebrick = 'flood-color:firebrick;';
  readonly floralwhite = 'flood-color:floralwhite;';
  readonly forestgreen = 'flood-color:forestgreen;';
  readonly fuchsia = 'flood-color:fuchsia;';
  readonly gainsboro = 'flood-color:gainsboro;';
  readonly ghostwhite = 'flood-color:ghostwhite;';
  readonly gold = 'flood-color:gold;';
  readonly goldenrod = 'flood-color:goldenrod;';
  readonly gray = 'flood-color:gray;';
  readonly green = 'flood-color:green;';
  readonly greenyellow = 'flood-color:greenyellow;';
  readonly grey = 'flood-color:grey;';
  readonly honeydew = 'flood-color:honeydew;';
  readonly hotpink = 'flood-color:hotpink;';
  readonly indianred = 'flood-color:indianred;';
  readonly indigo = 'flood-color:indigo;';
  readonly inherit = 'flood-color:inherit;';
  readonly initial = 'flood-color:initial;';
  readonly ivory = 'flood-color:ivory;';
  readonly khaki = 'flood-color:khaki;';
  readonly lavender = 'flood-color:lavender;';
  readonly lavenderblush = 'flood-color:lavenderblush;';
  readonly lawngreen = 'flood-color:lawngreen;';
  readonly lemonchiffon = 'flood-color:lemonchiffon;';
  readonly lightblue = 'flood-color:lightblue;';
  readonly lightcoral = 'flood-color:lightcoral;';
  readonly lightcyan = 'flood-color:lightcyan;';
  readonly lightgoldenrodyellow = 'flood-color:lightgoldenrodyellow;';
  readonly lightgray = 'flood-color:lightgray;';
  readonly lightgreen = 'flood-color:lightgreen;';
  readonly lightgrey = 'flood-color:lightgrey;';
  readonly lightpink = 'flood-color:lightpink;';
  readonly lightsalmon = 'flood-color:lightsalmon;';
  readonly lightseagreen = 'flood-color:lightseagreen;';
  readonly lightskyblue = 'flood-color:lightskyblue;';
  readonly lightslategray = 'flood-color:lightslategray;';
  readonly lightslategrey = 'flood-color:lightslategrey;';
  readonly lightsteelblue = 'flood-color:lightsteelblue;';
  readonly lightyellow = 'flood-color:lightyellow;';
  readonly lime = 'flood-color:lime;';
  readonly limegreen = 'flood-color:limegreen;';
  readonly linen = 'flood-color:linen;';
  readonly magenta = 'flood-color:magenta;';
  readonly maroon = 'flood-color:maroon;';
  readonly mediumaquamarine = 'flood-color:mediumaquamarine;';
  readonly mediumblue = 'flood-color:mediumblue;';
  readonly mediumorchid = 'flood-color:mediumorchid;';
  readonly mediumpurple = 'flood-color:mediumpurple;';
  readonly mediumseagreen = 'flood-color:mediumseagreen;';
  readonly mediumslateblue = 'flood-color:mediumslateblue;';
  readonly mediumspringgreen = 'flood-color:mediumspringgreen;';
  readonly mediumturquoise = 'flood-color:mediumturquoise;';
  readonly mediumvioletred = 'flood-color:mediumvioletred;';
  readonly midnightblue = 'flood-color:midnightblue;';
  readonly mintcream = 'flood-color:mintcream;';
  readonly mistyrose = 'flood-color:mistyrose;';
  readonly moccasin = 'flood-color:moccasin;';
  readonly navajowhite = 'flood-color:navajowhite;';
  readonly navy = 'flood-color:navy;';
  readonly oldlace = 'flood-color:oldlace;';
  readonly olive = 'flood-color:olive;';
  readonly olivedrab = 'flood-color:olivedrab;';
  readonly orange = 'flood-color:orange;';
  readonly orangered = 'flood-color:orangered;';
  readonly orchid = 'flood-color:orchid;';
  readonly palegoldenrod = 'flood-color:palegoldenrod;';
  readonly palegreen = 'flood-color:palegreen;';
  readonly paleturquoise = 'flood-color:paleturquoise;';
  readonly palevioletred = 'flood-color:palevioletred;';
  readonly papayawhip = 'flood-color:papayawhip;';
  readonly peachpuff = 'flood-color:peachpuff;';
  readonly peru = 'flood-color:peru;';
  readonly pink = 'flood-color:pink;';
  readonly plum = 'flood-color:plum;';
  readonly powderblue = 'flood-color:powderblue;';
  readonly purple = 'flood-color:purple;';
  readonly rebeccapurple = 'flood-color:rebeccapurple;';
  readonly red = 'flood-color:red;';
  readonly revert = 'flood-color:revert;';
  readonly revertLayer = 'flood-color:revert-layer;';
  readonly rosybrown = 'flood-color:rosybrown;';
  readonly royalblue = 'flood-color:royalblue;';
  readonly saddlebrown = 'flood-color:saddlebrown;';
  readonly salmon = 'flood-color:salmon;';
  readonly sandybrown = 'flood-color:sandybrown;';
  readonly seagreen = 'flood-color:seagreen;';
  readonly seashell = 'flood-color:seashell;';
  readonly sienna = 'flood-color:sienna;';
  readonly silver = 'flood-color:silver;';
  readonly skyblue = 'flood-color:skyblue;';
  readonly slateblue = 'flood-color:slateblue;';
  readonly slategray = 'flood-color:slategray;';
  readonly slategrey = 'flood-color:slategrey;';
  readonly snow = 'flood-color:snow;';
  readonly springgreen = 'flood-color:springgreen;';
  readonly steelblue = 'flood-color:steelblue;';
  readonly tan = 'flood-color:tan;';
  readonly teal = 'flood-color:teal;';
  readonly thistle = 'flood-color:thistle;';
  readonly tomato = 'flood-color:tomato;';
  readonly transparent = 'flood-color:transparent;';
  readonly turquoise = 'flood-color:turquoise;';
  readonly unset = 'flood-color:unset;';
  readonly violet = 'flood-color:violet;';
  readonly wheat = 'flood-color:wheat;';
  readonly white = 'flood-color:white;';
  readonly whitesmoke = 'flood-color:whitesmoke;';
  readonly yellow = 'flood-color:yellow;';
  readonly yellowgreen = 'flood-color:yellowgreen;';
  constructor() {
    super('flood-color');
  }
  /** RGB 通道与可选 alpha；不隐式截断数值。 */
  rgb(red: number, green: number, blue: number, alpha?: number): string {
    return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`);
  }
  /** 色相用度数，饱和度和明度用百分数。 */
  hsl(hue: number, saturation: number, lightness: number, alpha?: number): string {
    return this.raw(
      `hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`,
    );
  }
}

/** CSS 属性 flood-opacity；初始值 black。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
 */
export class FloodOpacityCss extends CssProperty<Property.FloodOpacity> {
  readonly inherit = 'flood-opacity:inherit;';
  readonly initial = 'flood-opacity:initial;';
  readonly revert = 'flood-opacity:revert;';
  readonly revertLayer = 'flood-opacity:revert-layer;';
  readonly unset = 'flood-opacity:unset;';
  constructor() {
    super('flood-opacity');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FloodOpacity, number> | (string & {}),
    ...others: (Extract<Property.FloodOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FloodOpacity, number> | (string & {}),
    ...others: (Extract<Property.FloodOpacity, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FloodOpacity, number> | (string & {}),
    preferred: Extract<Property.FloodOpacity, number> | (string & {}),
    maximum: Extract<Property.FloodOpacity, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 font。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
 */
export class FontCss extends CssProperty<Property.Font> {
  readonly caption = 'font:caption;';
  readonly icon = 'font:icon;';
  readonly inherit = 'font:inherit;';
  readonly initial = 'font:initial;';
  readonly menu = 'font:menu;';
  readonly messageBox = 'font:message-box;';
  readonly revert = 'font:revert;';
  readonly revertLayer = 'font:revert-layer;';
  readonly smallCaption = 'font:small-caption;';
  readonly statusBar = 'font:status-bar;';
  readonly unset = 'font:unset;';
  constructor() {
    super('font');
  }
}

/** CSS 属性 font-family。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
 */
export class FontFamilyCss extends CssProperty<Property.FontFamily> {
  readonly AppleSystem = 'font-family:-apple-system;';
  readonly cursive = 'font-family:cursive;';
  readonly emoji = 'font-family:emoji;';
  readonly fangsong = 'font-family:fangsong;';
  readonly fantasy = 'font-family:fantasy;';
  readonly inherit = 'font-family:inherit;';
  readonly initial = 'font-family:initial;';
  readonly math = 'font-family:math;';
  readonly monospace = 'font-family:monospace;';
  readonly revert = 'font-family:revert;';
  readonly revertLayer = 'font-family:revert-layer;';
  readonly sansSerif = 'font-family:sans-serif;';
  readonly serif = 'font-family:serif;';
  readonly systemUi = 'font-family:system-ui;';
  readonly uiMonospace = 'font-family:ui-monospace;';
  readonly uiRounded = 'font-family:ui-rounded;';
  readonly uiSansSerif = 'font-family:ui-sans-serif;';
  readonly uiSerif = 'font-family:ui-serif;';
  readonly unset = 'font-family:unset;';
  constructor() {
    super('font-family');
  }
}

/** CSS 属性 font-feature-settings；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
 */
export class FontFeatureSettingsCss extends CssProperty<Property.FontFeatureSettings> {
  readonly inherit = 'font-feature-settings:inherit;';
  readonly initial = 'font-feature-settings:initial;';
  readonly normal = 'font-feature-settings:normal;';
  readonly revert = 'font-feature-settings:revert;';
  readonly revertLayer = 'font-feature-settings:revert-layer;';
  readonly unset = 'font-feature-settings:unset;';
  constructor() {
    super('font-feature-settings');
  }
}

/** CSS 属性 font-kerning；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
 */
export class FontKerningCss extends CssProperty<Property.FontKerning> {
  readonly auto = 'font-kerning:auto;';
  readonly inherit = 'font-kerning:inherit;';
  readonly initial = 'font-kerning:initial;';
  readonly none = 'font-kerning:none;';
  readonly normal = 'font-kerning:normal;';
  readonly revert = 'font-kerning:revert;';
  readonly revertLayer = 'font-kerning:revert-layer;';
  readonly unset = 'font-kerning:unset;';
  constructor() {
    super('font-kerning');
  }
}

/** CSS 属性 font-language-override；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
 */
export class FontLanguageOverrideCss extends CssProperty<Property.FontLanguageOverride> {
  readonly inherit = 'font-language-override:inherit;';
  readonly initial = 'font-language-override:initial;';
  readonly normal = 'font-language-override:normal;';
  readonly revert = 'font-language-override:revert;';
  readonly revertLayer = 'font-language-override:revert-layer;';
  readonly unset = 'font-language-override:unset;';
  constructor() {
    super('font-language-override');
  }
}

/** CSS 属性 font-optical-sizing；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
 */
export class FontOpticalSizingCss extends CssProperty<Property.FontOpticalSizing> {
  readonly auto = 'font-optical-sizing:auto;';
  readonly inherit = 'font-optical-sizing:inherit;';
  readonly initial = 'font-optical-sizing:initial;';
  readonly none = 'font-optical-sizing:none;';
  readonly revert = 'font-optical-sizing:revert;';
  readonly revertLayer = 'font-optical-sizing:revert-layer;';
  readonly unset = 'font-optical-sizing:unset;';
  constructor() {
    super('font-optical-sizing');
  }
}

/** CSS 属性 font-palette；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
 */
export class FontPaletteCss extends CssProperty<Property.FontPalette> {
  readonly dark = 'font-palette:dark;';
  readonly inherit = 'font-palette:inherit;';
  readonly initial = 'font-palette:initial;';
  readonly light = 'font-palette:light;';
  readonly normal = 'font-palette:normal;';
  readonly revert = 'font-palette:revert;';
  readonly revertLayer = 'font-palette:revert-layer;';
  readonly unset = 'font-palette:unset;';
  constructor() {
    super('font-palette');
  }
}

/** CSS 属性 font-size；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
 */
export class FontSizeCss extends LengthCssProperty<Property.FontSize> {
  readonly inherit = 'font-size:inherit;';
  readonly initial = 'font-size:initial;';
  readonly large = 'font-size:large;';
  readonly larger = 'font-size:larger;';
  readonly math = 'font-size:math;';
  readonly medium = 'font-size:medium;';
  readonly revert = 'font-size:revert;';
  readonly revertLayer = 'font-size:revert-layer;';
  readonly small = 'font-size:small;';
  readonly smaller = 'font-size:smaller;';
  readonly unset = 'font-size:unset;';
  readonly xLarge = 'font-size:x-large;';
  readonly xSmall = 'font-size:x-small;';
  readonly xxLarge = 'font-size:xx-large;';
  readonly xxSmall = 'font-size:xx-small;';
  readonly xxxLarge = 'font-size:xxx-large;';
  constructor() {
    super('font-size');
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FontSize, number> | (string & {}),
    ...others: (Extract<Property.FontSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FontSize, number> | (string & {}),
    ...others: (Extract<Property.FontSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FontSize, number> | (string & {}),
    preferred: Extract<Property.FontSize, number> | (string & {}),
    maximum: Extract<Property.FontSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 font-size-adjust；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
 */
export class FontSizeAdjustCss extends CssProperty<Property.FontSizeAdjust> {
  readonly fromFont = 'font-size-adjust:from-font;';
  readonly inherit = 'font-size-adjust:inherit;';
  readonly initial = 'font-size-adjust:initial;';
  readonly none = 'font-size-adjust:none;';
  readonly revert = 'font-size-adjust:revert;';
  readonly revertLayer = 'font-size-adjust:revert-layer;';
  readonly unset = 'font-size-adjust:unset;';
  constructor() {
    super('font-size-adjust');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FontSizeAdjust, number> | (string & {}),
    ...others: (Extract<Property.FontSizeAdjust, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FontSizeAdjust, number> | (string & {}),
    ...others: (Extract<Property.FontSizeAdjust, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FontSizeAdjust, number> | (string & {}),
    preferred: Extract<Property.FontSizeAdjust, number> | (string & {}),
    maximum: Extract<Property.FontSizeAdjust, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 font-smooth；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
 */
export class FontSmoothCss extends LengthCssProperty<Property.FontSmooth> {
  readonly always = 'font-smooth:always;';
  readonly auto = 'font-smooth:auto;';
  readonly inherit = 'font-smooth:inherit;';
  readonly initial = 'font-smooth:initial;';
  readonly large = 'font-smooth:large;';
  readonly medium = 'font-smooth:medium;';
  readonly never = 'font-smooth:never;';
  readonly revert = 'font-smooth:revert;';
  readonly revertLayer = 'font-smooth:revert-layer;';
  readonly small = 'font-smooth:small;';
  readonly unset = 'font-smooth:unset;';
  readonly xLarge = 'font-smooth:x-large;';
  readonly xSmall = 'font-smooth:x-small;';
  readonly xxLarge = 'font-smooth:xx-large;';
  readonly xxSmall = 'font-smooth:xx-small;';
  readonly xxxLarge = 'font-smooth:xxx-large;';
  constructor() {
    super('font-smooth');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FontSmooth, number> | (string & {}),
    ...others: (Extract<Property.FontSmooth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FontSmooth, number> | (string & {}),
    ...others: (Extract<Property.FontSmooth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FontSmooth, number> | (string & {}),
    preferred: Extract<Property.FontSmooth, number> | (string & {}),
    maximum: Extract<Property.FontSmooth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 font-stretch。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-stretch
 */
export class FontStretchCss extends CssProperty<Property.FontStretch> {
  readonly condensed = 'font-stretch:condensed;';
  readonly expanded = 'font-stretch:expanded;';
  readonly extraCondensed = 'font-stretch:extra-condensed;';
  readonly extraExpanded = 'font-stretch:extra-expanded;';
  readonly inherit = 'font-stretch:inherit;';
  readonly initial = 'font-stretch:initial;';
  readonly normal = 'font-stretch:normal;';
  readonly revert = 'font-stretch:revert;';
  readonly revertLayer = 'font-stretch:revert-layer;';
  readonly semiCondensed = 'font-stretch:semi-condensed;';
  readonly semiExpanded = 'font-stretch:semi-expanded;';
  readonly ultraCondensed = 'font-stretch:ultra-condensed;';
  readonly ultraExpanded = 'font-stretch:ultra-expanded;';
  readonly unset = 'font-stretch:unset;';
  constructor() {
    super('font-stretch');
  }
}

/** CSS 属性 font-style；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
 */
export class FontStyleCss extends CssProperty<Property.FontStyle> {
  readonly inherit = 'font-style:inherit;';
  readonly initial = 'font-style:initial;';
  readonly italic = 'font-style:italic;';
  readonly normal = 'font-style:normal;';
  readonly oblique = 'font-style:oblique;';
  readonly revert = 'font-style:revert;';
  readonly revertLayer = 'font-style:revert-layer;';
  readonly unset = 'font-style:unset;';
  constructor() {
    super('font-style');
  }
  /** 使用 deg 单位生成声明；数值合法性由浏览器处理。 */
  deg(value: number): string {
    return `${this.name}:${value}deg;`;
  }
  /** 使用 grad 单位生成声明；数值合法性由浏览器处理。 */
  grad(value: number): string {
    return `${this.name}:${value}grad;`;
  }
  /** 使用 rad 单位生成声明；数值合法性由浏览器处理。 */
  rad(value: number): string {
    return `${this.name}:${value}rad;`;
  }
  /** 使用 turn 单位生成声明；数值合法性由浏览器处理。 */
  turn(value: number): string {
    return `${this.name}:${value}turn;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FontStyle, number> | (string & {}),
    ...others: (Extract<Property.FontStyle, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FontStyle, number> | (string & {}),
    ...others: (Extract<Property.FontStyle, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FontStyle, number> | (string & {}),
    preferred: Extract<Property.FontStyle, number> | (string & {}),
    maximum: Extract<Property.FontStyle, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 font-synthesis；初始值 weight style small-caps position 。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
 */
export class FontSynthesisCss extends CssProperty<Property.FontSynthesis> {
  readonly inherit = 'font-synthesis:inherit;';
  readonly initial = 'font-synthesis:initial;';
  readonly none = 'font-synthesis:none;';
  readonly position = 'font-synthesis:position;';
  readonly revert = 'font-synthesis:revert;';
  readonly revertLayer = 'font-synthesis:revert-layer;';
  readonly smallCaps = 'font-synthesis:small-caps;';
  readonly style = 'font-synthesis:style;';
  readonly unset = 'font-synthesis:unset;';
  readonly weight = 'font-synthesis:weight;';
  constructor() {
    super('font-synthesis');
  }
}

/** CSS 属性 font-synthesis-position；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
 */
export class FontSynthesisPositionCss extends CssProperty<Property.FontSynthesisPosition> {
  readonly auto = 'font-synthesis-position:auto;';
  readonly inherit = 'font-synthesis-position:inherit;';
  readonly initial = 'font-synthesis-position:initial;';
  readonly none = 'font-synthesis-position:none;';
  readonly revert = 'font-synthesis-position:revert;';
  readonly revertLayer = 'font-synthesis-position:revert-layer;';
  readonly unset = 'font-synthesis-position:unset;';
  constructor() {
    super('font-synthesis-position');
  }
}

/** CSS 属性 font-synthesis-small-caps；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
 */
export class FontSynthesisSmallCapsCss extends CssProperty<Property.FontSynthesisSmallCaps> {
  readonly auto = 'font-synthesis-small-caps:auto;';
  readonly inherit = 'font-synthesis-small-caps:inherit;';
  readonly initial = 'font-synthesis-small-caps:initial;';
  readonly none = 'font-synthesis-small-caps:none;';
  readonly revert = 'font-synthesis-small-caps:revert;';
  readonly revertLayer = 'font-synthesis-small-caps:revert-layer;';
  readonly unset = 'font-synthesis-small-caps:unset;';
  constructor() {
    super('font-synthesis-small-caps');
  }
}

/** CSS 属性 font-synthesis-style；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
 */
export class FontSynthesisStyleCss extends CssProperty<Property.FontSynthesisStyle> {
  readonly auto = 'font-synthesis-style:auto;';
  readonly inherit = 'font-synthesis-style:inherit;';
  readonly initial = 'font-synthesis-style:initial;';
  readonly none = 'font-synthesis-style:none;';
  readonly revert = 'font-synthesis-style:revert;';
  readonly revertLayer = 'font-synthesis-style:revert-layer;';
  readonly unset = 'font-synthesis-style:unset;';
  constructor() {
    super('font-synthesis-style');
  }
}

/** CSS 属性 font-synthesis-weight；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
 */
export class FontSynthesisWeightCss extends CssProperty<Property.FontSynthesisWeight> {
  readonly auto = 'font-synthesis-weight:auto;';
  readonly inherit = 'font-synthesis-weight:inherit;';
  readonly initial = 'font-synthesis-weight:initial;';
  readonly none = 'font-synthesis-weight:none;';
  readonly revert = 'font-synthesis-weight:revert;';
  readonly revertLayer = 'font-synthesis-weight:revert-layer;';
  readonly unset = 'font-synthesis-weight:unset;';
  constructor() {
    super('font-synthesis-weight');
  }
}

/** CSS 属性 font-variant；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
 */
export class FontVariantCss extends CssProperty<Property.FontVariant> {
  readonly allPetiteCaps = 'font-variant:all-petite-caps;';
  readonly allSmallCaps = 'font-variant:all-small-caps;';
  readonly commonLigatures = 'font-variant:common-ligatures;';
  readonly contextual = 'font-variant:contextual;';
  readonly diagonalFractions = 'font-variant:diagonal-fractions;';
  readonly discretionaryLigatures = 'font-variant:discretionary-ligatures;';
  readonly fullWidth = 'font-variant:full-width;';
  readonly historicalForms = 'font-variant:historical-forms;';
  readonly historicalLigatures = 'font-variant:historical-ligatures;';
  readonly inherit = 'font-variant:inherit;';
  readonly initial = 'font-variant:initial;';
  readonly jis04 = 'font-variant:jis04;';
  readonly jis78 = 'font-variant:jis78;';
  readonly jis83 = 'font-variant:jis83;';
  readonly jis90 = 'font-variant:jis90;';
  readonly liningNums = 'font-variant:lining-nums;';
  readonly noCommonLigatures = 'font-variant:no-common-ligatures;';
  readonly noContextual = 'font-variant:no-contextual;';
  readonly noDiscretionaryLigatures = 'font-variant:no-discretionary-ligatures;';
  readonly noHistoricalLigatures = 'font-variant:no-historical-ligatures;';
  readonly none = 'font-variant:none;';
  readonly normal = 'font-variant:normal;';
  readonly oldstyleNums = 'font-variant:oldstyle-nums;';
  readonly ordinal = 'font-variant:ordinal;';
  readonly petiteCaps = 'font-variant:petite-caps;';
  readonly proportionalNums = 'font-variant:proportional-nums;';
  readonly proportionalWidth = 'font-variant:proportional-width;';
  readonly revert = 'font-variant:revert;';
  readonly revertLayer = 'font-variant:revert-layer;';
  readonly ruby = 'font-variant:ruby;';
  readonly simplified = 'font-variant:simplified;';
  readonly slashedZero = 'font-variant:slashed-zero;';
  readonly smallCaps = 'font-variant:small-caps;';
  readonly stackedFractions = 'font-variant:stacked-fractions;';
  readonly tabularNums = 'font-variant:tabular-nums;';
  readonly titlingCaps = 'font-variant:titling-caps;';
  readonly traditional = 'font-variant:traditional;';
  readonly unicase = 'font-variant:unicase;';
  readonly unset = 'font-variant:unset;';
  constructor() {
    super('font-variant');
  }
}

/** CSS 属性 font-variant-alternates；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
 */
export class FontVariantAlternatesCss extends CssProperty<Property.FontVariantAlternates> {
  readonly historicalForms = 'font-variant-alternates:historical-forms;';
  readonly inherit = 'font-variant-alternates:inherit;';
  readonly initial = 'font-variant-alternates:initial;';
  readonly normal = 'font-variant-alternates:normal;';
  readonly revert = 'font-variant-alternates:revert;';
  readonly revertLayer = 'font-variant-alternates:revert-layer;';
  readonly unset = 'font-variant-alternates:unset;';
  constructor() {
    super('font-variant-alternates');
  }
}

/** CSS 属性 font-variant-caps；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
 */
export class FontVariantCapsCss extends CssProperty<Property.FontVariantCaps> {
  readonly allPetiteCaps = 'font-variant-caps:all-petite-caps;';
  readonly allSmallCaps = 'font-variant-caps:all-small-caps;';
  readonly inherit = 'font-variant-caps:inherit;';
  readonly initial = 'font-variant-caps:initial;';
  readonly normal = 'font-variant-caps:normal;';
  readonly petiteCaps = 'font-variant-caps:petite-caps;';
  readonly revert = 'font-variant-caps:revert;';
  readonly revertLayer = 'font-variant-caps:revert-layer;';
  readonly smallCaps = 'font-variant-caps:small-caps;';
  readonly titlingCaps = 'font-variant-caps:titling-caps;';
  readonly unicase = 'font-variant-caps:unicase;';
  readonly unset = 'font-variant-caps:unset;';
  constructor() {
    super('font-variant-caps');
  }
}

/** CSS 属性 font-variant-east-asian；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
 */
export class FontVariantEastAsianCss extends CssProperty<Property.FontVariantEastAsian> {
  readonly fullWidth = 'font-variant-east-asian:full-width;';
  readonly inherit = 'font-variant-east-asian:inherit;';
  readonly initial = 'font-variant-east-asian:initial;';
  readonly jis04 = 'font-variant-east-asian:jis04;';
  readonly jis78 = 'font-variant-east-asian:jis78;';
  readonly jis83 = 'font-variant-east-asian:jis83;';
  readonly jis90 = 'font-variant-east-asian:jis90;';
  readonly normal = 'font-variant-east-asian:normal;';
  readonly proportionalWidth = 'font-variant-east-asian:proportional-width;';
  readonly revert = 'font-variant-east-asian:revert;';
  readonly revertLayer = 'font-variant-east-asian:revert-layer;';
  readonly ruby = 'font-variant-east-asian:ruby;';
  readonly simplified = 'font-variant-east-asian:simplified;';
  readonly traditional = 'font-variant-east-asian:traditional;';
  readonly unset = 'font-variant-east-asian:unset;';
  constructor() {
    super('font-variant-east-asian');
  }
}

/** CSS 属性 font-variant-emoji；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
 */
export class FontVariantEmojiCss extends CssProperty<Property.FontVariantEmoji> {
  readonly emoji = 'font-variant-emoji:emoji;';
  readonly inherit = 'font-variant-emoji:inherit;';
  readonly initial = 'font-variant-emoji:initial;';
  readonly normal = 'font-variant-emoji:normal;';
  readonly revert = 'font-variant-emoji:revert;';
  readonly revertLayer = 'font-variant-emoji:revert-layer;';
  readonly text = 'font-variant-emoji:text;';
  readonly unicode = 'font-variant-emoji:unicode;';
  readonly unset = 'font-variant-emoji:unset;';
  constructor() {
    super('font-variant-emoji');
  }
}

/** CSS 属性 font-variant-ligatures；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
 */
export class FontVariantLigaturesCss extends CssProperty<Property.FontVariantLigatures> {
  readonly commonLigatures = 'font-variant-ligatures:common-ligatures;';
  readonly contextual = 'font-variant-ligatures:contextual;';
  readonly discretionaryLigatures = 'font-variant-ligatures:discretionary-ligatures;';
  readonly historicalLigatures = 'font-variant-ligatures:historical-ligatures;';
  readonly inherit = 'font-variant-ligatures:inherit;';
  readonly initial = 'font-variant-ligatures:initial;';
  readonly noCommonLigatures = 'font-variant-ligatures:no-common-ligatures;';
  readonly noContextual = 'font-variant-ligatures:no-contextual;';
  readonly noDiscretionaryLigatures = 'font-variant-ligatures:no-discretionary-ligatures;';
  readonly noHistoricalLigatures = 'font-variant-ligatures:no-historical-ligatures;';
  readonly none = 'font-variant-ligatures:none;';
  readonly normal = 'font-variant-ligatures:normal;';
  readonly revert = 'font-variant-ligatures:revert;';
  readonly revertLayer = 'font-variant-ligatures:revert-layer;';
  readonly unset = 'font-variant-ligatures:unset;';
  constructor() {
    super('font-variant-ligatures');
  }
}

/** CSS 属性 font-variant-numeric；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
 */
export class FontVariantNumericCss extends CssProperty<Property.FontVariantNumeric> {
  readonly diagonalFractions = 'font-variant-numeric:diagonal-fractions;';
  readonly inherit = 'font-variant-numeric:inherit;';
  readonly initial = 'font-variant-numeric:initial;';
  readonly liningNums = 'font-variant-numeric:lining-nums;';
  readonly normal = 'font-variant-numeric:normal;';
  readonly oldstyleNums = 'font-variant-numeric:oldstyle-nums;';
  readonly ordinal = 'font-variant-numeric:ordinal;';
  readonly proportionalNums = 'font-variant-numeric:proportional-nums;';
  readonly revert = 'font-variant-numeric:revert;';
  readonly revertLayer = 'font-variant-numeric:revert-layer;';
  readonly slashedZero = 'font-variant-numeric:slashed-zero;';
  readonly stackedFractions = 'font-variant-numeric:stacked-fractions;';
  readonly tabularNums = 'font-variant-numeric:tabular-nums;';
  readonly unset = 'font-variant-numeric:unset;';
  constructor() {
    super('font-variant-numeric');
  }
}

/** CSS 属性 font-variant-position；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
 */
export class FontVariantPositionCss extends CssProperty<Property.FontVariantPosition> {
  readonly inherit = 'font-variant-position:inherit;';
  readonly initial = 'font-variant-position:initial;';
  readonly normal = 'font-variant-position:normal;';
  readonly revert = 'font-variant-position:revert;';
  readonly revertLayer = 'font-variant-position:revert-layer;';
  readonly sub = 'font-variant-position:sub;';
  readonly super = 'font-variant-position:super;';
  readonly unset = 'font-variant-position:unset;';
  constructor() {
    super('font-variant-position');
  }
}

/** CSS 属性 font-variation-settings；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
 */
export class FontVariationSettingsCss extends CssProperty<Property.FontVariationSettings> {
  readonly inherit = 'font-variation-settings:inherit;';
  readonly initial = 'font-variation-settings:initial;';
  readonly normal = 'font-variation-settings:normal;';
  readonly revert = 'font-variation-settings:revert;';
  readonly revertLayer = 'font-variation-settings:revert-layer;';
  readonly unset = 'font-variation-settings:unset;';
  constructor() {
    super('font-variation-settings');
  }
}

/** CSS 属性 font-weight；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
 */
export class FontWeightCss extends CssProperty<Property.FontWeight> {
  readonly bold = 'font-weight:bold;';
  readonly bolder = 'font-weight:bolder;';
  readonly inherit = 'font-weight:inherit;';
  readonly initial = 'font-weight:initial;';
  readonly lighter = 'font-weight:lighter;';
  readonly normal = 'font-weight:normal;';
  readonly revert = 'font-weight:revert;';
  readonly revertLayer = 'font-weight:revert-layer;';
  readonly unset = 'font-weight:unset;';
  constructor() {
    super('font-weight');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FontWeight, number> | (string & {}),
    ...others: (Extract<Property.FontWeight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FontWeight, number> | (string & {}),
    ...others: (Extract<Property.FontWeight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FontWeight, number> | (string & {}),
    preferred: Extract<Property.FontWeight, number> | (string & {}),
    maximum: Extract<Property.FontWeight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 font-width；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-width
 */
export class FontWidthCss extends CssProperty<Property.FontWidth> {
  readonly condensed = 'font-width:condensed;';
  readonly expanded = 'font-width:expanded;';
  readonly extraCondensed = 'font-width:extra-condensed;';
  readonly extraExpanded = 'font-width:extra-expanded;';
  readonly inherit = 'font-width:inherit;';
  readonly initial = 'font-width:initial;';
  readonly normal = 'font-width:normal;';
  readonly revert = 'font-width:revert;';
  readonly revertLayer = 'font-width:revert-layer;';
  readonly semiCondensed = 'font-width:semi-condensed;';
  readonly semiExpanded = 'font-width:semi-expanded;';
  readonly ultraCondensed = 'font-width:ultra-condensed;';
  readonly ultraExpanded = 'font-width:ultra-expanded;';
  readonly unset = 'font-width:unset;';
  constructor() {
    super('font-width');
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value: number): string {
    return `${this.name}:${value}%;`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.FontWidth, number> | (string & {}),
    ...others: (Extract<Property.FontWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.FontWidth, number> | (string & {}),
    ...others: (Extract<Property.FontWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.FontWidth, number> | (string & {}),
    preferred: Extract<Property.FontWidth, number> | (string & {}),
    maximum: Extract<Property.FontWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 forced-color-adjust；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
 */
export class ForcedColorAdjustCss extends CssProperty<Property.ForcedColorAdjust> {
  readonly auto = 'forced-color-adjust:auto;';
  readonly inherit = 'forced-color-adjust:inherit;';
  readonly initial = 'forced-color-adjust:initial;';
  readonly none = 'forced-color-adjust:none;';
  readonly preserveParentColor = 'forced-color-adjust:preserve-parent-color;';
  readonly revert = 'forced-color-adjust:revert;';
  readonly revertLayer = 'forced-color-adjust:revert-layer;';
  readonly unset = 'forced-color-adjust:unset;';
  constructor() {
    super('forced-color-adjust');
  }
}
