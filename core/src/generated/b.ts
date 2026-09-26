// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。
import type { Property } from 'csstype';
import { CssProperty, LengthCssProperty } from './base.js';
// 关键字是实例上的声明字符串；系统实例按属性链惰性创建并共享。

/** CSS 属性 backdrop-filter；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
 */
export class BackdropFilterCss extends CssProperty<Property.BackdropFilter> {
  readonly inherit = 'backdrop-filter:inherit;';
  readonly initial = 'backdrop-filter:initial;';
  readonly none = 'backdrop-filter:none;';
  readonly revert = 'backdrop-filter:revert;';
  readonly revertLayer = 'backdrop-filter:revert-layer;';
  readonly unset = 'backdrop-filter:unset;';
  constructor() {
    super('backdrop-filter');
  }
}

/** CSS 属性 backface-visibility；初始值 visible。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
 */
export class BackfaceVisibilityCss extends CssProperty<Property.BackfaceVisibility> {
  readonly hidden = 'backface-visibility:hidden;';
  readonly inherit = 'backface-visibility:inherit;';
  readonly initial = 'backface-visibility:initial;';
  readonly revert = 'backface-visibility:revert;';
  readonly revertLayer = 'backface-visibility:revert-layer;';
  readonly unset = 'backface-visibility:unset;';
  readonly visible = 'backface-visibility:visible;';
  constructor() {
    super('backface-visibility');
  }
}

/** CSS 属性 background。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
 */
export class BackgroundCss extends LengthCssProperty<Property.Background> {
  readonly AccentColor = 'background:AccentColor;';
  readonly AccentColorText = 'background:AccentColorText;';
  readonly ActiveBorder = 'background:ActiveBorder;';
  readonly ActiveCaption = 'background:ActiveCaption;';
  readonly ActiveText = 'background:ActiveText;';
  readonly AppWorkspace = 'background:AppWorkspace;';
  readonly Background = 'background:Background;';
  readonly ButtonBorder = 'background:ButtonBorder;';
  readonly ButtonFace = 'background:ButtonFace;';
  readonly ButtonHighlight = 'background:ButtonHighlight;';
  readonly ButtonShadow = 'background:ButtonShadow;';
  readonly ButtonText = 'background:ButtonText;';
  readonly Canvas = 'background:Canvas;';
  readonly CanvasText = 'background:CanvasText;';
  readonly CaptionText = 'background:CaptionText;';
  readonly Field = 'background:Field;';
  readonly FieldText = 'background:FieldText;';
  readonly GrayText = 'background:GrayText;';
  readonly Highlight = 'background:Highlight;';
  readonly HighlightText = 'background:HighlightText;';
  readonly InactiveBorder = 'background:InactiveBorder;';
  readonly InactiveCaption = 'background:InactiveCaption;';
  readonly InactiveCaptionText = 'background:InactiveCaptionText;';
  readonly InfoBackground = 'background:InfoBackground;';
  readonly InfoText = 'background:InfoText;';
  readonly LinkText = 'background:LinkText;';
  readonly Mark = 'background:Mark;';
  readonly MarkText = 'background:MarkText;';
  readonly Menu = 'background:Menu;';
  readonly MenuText = 'background:MenuText;';
  readonly Scrollbar = 'background:Scrollbar;';
  readonly SelectedItem = 'background:SelectedItem;';
  readonly SelectedItemText = 'background:SelectedItemText;';
  readonly ThreeDDarkShadow = 'background:ThreeDDarkShadow;';
  readonly ThreeDFace = 'background:ThreeDFace;';
  readonly ThreeDHighlight = 'background:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'background:ThreeDLightShadow;';
  readonly ThreeDShadow = 'background:ThreeDShadow;';
  readonly VisitedText = 'background:VisitedText;';
  readonly Window = 'background:Window;';
  readonly WindowFrame = 'background:WindowFrame;';
  readonly WindowText = 'background:WindowText;';
  readonly aliceblue = 'background:aliceblue;';
  readonly antiquewhite = 'background:antiquewhite;';
  readonly aqua = 'background:aqua;';
  readonly aquamarine = 'background:aquamarine;';
  readonly azure = 'background:azure;';
  readonly beige = 'background:beige;';
  readonly bisque = 'background:bisque;';
  readonly black = 'background:black;';
  readonly blanchedalmond = 'background:blanchedalmond;';
  readonly blue = 'background:blue;';
  readonly blueviolet = 'background:blueviolet;';
  readonly borderBox = 'background:border-box;';
  readonly bottom = 'background:bottom;';
  readonly brown = 'background:brown;';
  readonly burlywood = 'background:burlywood;';
  readonly cadetblue = 'background:cadetblue;';
  readonly center = 'background:center;';
  readonly chartreuse = 'background:chartreuse;';
  readonly chocolate = 'background:chocolate;';
  readonly contentBox = 'background:content-box;';
  readonly coral = 'background:coral;';
  readonly cornflowerblue = 'background:cornflowerblue;';
  readonly cornsilk = 'background:cornsilk;';
  readonly crimson = 'background:crimson;';
  readonly currentColor = 'background:currentColor;';
  readonly cyan = 'background:cyan;';
  readonly darkblue = 'background:darkblue;';
  readonly darkcyan = 'background:darkcyan;';
  readonly darkgoldenrod = 'background:darkgoldenrod;';
  readonly darkgray = 'background:darkgray;';
  readonly darkgreen = 'background:darkgreen;';
  readonly darkgrey = 'background:darkgrey;';
  readonly darkkhaki = 'background:darkkhaki;';
  readonly darkmagenta = 'background:darkmagenta;';
  readonly darkolivegreen = 'background:darkolivegreen;';
  readonly darkorange = 'background:darkorange;';
  readonly darkorchid = 'background:darkorchid;';
  readonly darkred = 'background:darkred;';
  readonly darksalmon = 'background:darksalmon;';
  readonly darkseagreen = 'background:darkseagreen;';
  readonly darkslateblue = 'background:darkslateblue;';
  readonly darkslategray = 'background:darkslategray;';
  readonly darkslategrey = 'background:darkslategrey;';
  readonly darkturquoise = 'background:darkturquoise;';
  readonly darkviolet = 'background:darkviolet;';
  readonly deeppink = 'background:deeppink;';
  readonly deepskyblue = 'background:deepskyblue;';
  readonly dimgray = 'background:dimgray;';
  readonly dimgrey = 'background:dimgrey;';
  readonly dodgerblue = 'background:dodgerblue;';
  readonly firebrick = 'background:firebrick;';
  readonly fixed = 'background:fixed;';
  readonly floralwhite = 'background:floralwhite;';
  readonly forestgreen = 'background:forestgreen;';
  readonly fuchsia = 'background:fuchsia;';
  readonly gainsboro = 'background:gainsboro;';
  readonly ghostwhite = 'background:ghostwhite;';
  readonly gold = 'background:gold;';
  readonly goldenrod = 'background:goldenrod;';
  readonly gray = 'background:gray;';
  readonly green = 'background:green;';
  readonly greenyellow = 'background:greenyellow;';
  readonly grey = 'background:grey;';
  readonly honeydew = 'background:honeydew;';
  readonly hotpink = 'background:hotpink;';
  readonly indianred = 'background:indianred;';
  readonly indigo = 'background:indigo;';
  readonly inherit = 'background:inherit;';
  readonly initial = 'background:initial;';
  readonly ivory = 'background:ivory;';
  readonly khaki = 'background:khaki;';
  readonly lavender = 'background:lavender;';
  readonly lavenderblush = 'background:lavenderblush;';
  readonly lawngreen = 'background:lawngreen;';
  readonly left = 'background:left;';
  readonly lemonchiffon = 'background:lemonchiffon;';
  readonly lightblue = 'background:lightblue;';
  readonly lightcoral = 'background:lightcoral;';
  readonly lightcyan = 'background:lightcyan;';
  readonly lightgoldenrodyellow = 'background:lightgoldenrodyellow;';
  readonly lightgray = 'background:lightgray;';
  readonly lightgreen = 'background:lightgreen;';
  readonly lightgrey = 'background:lightgrey;';
  readonly lightpink = 'background:lightpink;';
  readonly lightsalmon = 'background:lightsalmon;';
  readonly lightseagreen = 'background:lightseagreen;';
  readonly lightskyblue = 'background:lightskyblue;';
  readonly lightslategray = 'background:lightslategray;';
  readonly lightslategrey = 'background:lightslategrey;';
  readonly lightsteelblue = 'background:lightsteelblue;';
  readonly lightyellow = 'background:lightyellow;';
  readonly lime = 'background:lime;';
  readonly limegreen = 'background:limegreen;';
  readonly linen = 'background:linen;';
  readonly local = 'background:local;';
  readonly magenta = 'background:magenta;';
  readonly maroon = 'background:maroon;';
  readonly mediumaquamarine = 'background:mediumaquamarine;';
  readonly mediumblue = 'background:mediumblue;';
  readonly mediumorchid = 'background:mediumorchid;';
  readonly mediumpurple = 'background:mediumpurple;';
  readonly mediumseagreen = 'background:mediumseagreen;';
  readonly mediumslateblue = 'background:mediumslateblue;';
  readonly mediumspringgreen = 'background:mediumspringgreen;';
  readonly mediumturquoise = 'background:mediumturquoise;';
  readonly mediumvioletred = 'background:mediumvioletred;';
  readonly midnightblue = 'background:midnightblue;';
  readonly mintcream = 'background:mintcream;';
  readonly mistyrose = 'background:mistyrose;';
  readonly moccasin = 'background:moccasin;';
  readonly navajowhite = 'background:navajowhite;';
  readonly navy = 'background:navy;';
  readonly noRepeat = 'background:no-repeat;';
  readonly none = 'background:none;';
  readonly oldlace = 'background:oldlace;';
  readonly olive = 'background:olive;';
  readonly olivedrab = 'background:olivedrab;';
  readonly orange = 'background:orange;';
  readonly orangered = 'background:orangered;';
  readonly orchid = 'background:orchid;';
  readonly paddingBox = 'background:padding-box;';
  readonly palegoldenrod = 'background:palegoldenrod;';
  readonly palegreen = 'background:palegreen;';
  readonly paleturquoise = 'background:paleturquoise;';
  readonly palevioletred = 'background:palevioletred;';
  readonly papayawhip = 'background:papayawhip;';
  readonly peachpuff = 'background:peachpuff;';
  readonly peru = 'background:peru;';
  readonly pink = 'background:pink;';
  readonly plum = 'background:plum;';
  readonly powderblue = 'background:powderblue;';
  readonly purple = 'background:purple;';
  readonly rebeccapurple = 'background:rebeccapurple;';
  readonly red = 'background:red;';
  readonly repeat = 'background:repeat;';
  readonly repeatX = 'background:repeat-x;';
  readonly repeatY = 'background:repeat-y;';
  readonly revert = 'background:revert;';
  readonly revertLayer = 'background:revert-layer;';
  readonly right = 'background:right;';
  readonly rosybrown = 'background:rosybrown;';
  readonly round = 'background:round;';
  readonly royalblue = 'background:royalblue;';
  readonly saddlebrown = 'background:saddlebrown;';
  readonly salmon = 'background:salmon;';
  readonly sandybrown = 'background:sandybrown;';
  readonly scroll = 'background:scroll;';
  readonly seagreen = 'background:seagreen;';
  readonly seashell = 'background:seashell;';
  readonly sienna = 'background:sienna;';
  readonly silver = 'background:silver;';
  readonly skyblue = 'background:skyblue;';
  readonly slateblue = 'background:slateblue;';
  readonly slategray = 'background:slategray;';
  readonly slategrey = 'background:slategrey;';
  readonly snow = 'background:snow;';
  readonly space = 'background:space;';
  readonly springgreen = 'background:springgreen;';
  readonly steelblue = 'background:steelblue;';
  readonly tan = 'background:tan;';
  readonly teal = 'background:teal;';
  readonly thistle = 'background:thistle;';
  readonly tomato = 'background:tomato;';
  readonly top = 'background:top;';
  readonly transparent = 'background:transparent;';
  readonly turquoise = 'background:turquoise;';
  readonly unset = 'background:unset;';
  readonly violet = 'background:violet;';
  readonly wheat = 'background:wheat;';
  readonly white = 'background:white;';
  readonly whitesmoke = 'background:whitesmoke;';
  readonly yellow = 'background:yellow;';
  readonly yellowgreen = 'background:yellowgreen;';
  constructor() {
    super('background');
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
    value: Extract<Property.Background, number> | (string & {}),
    ...others: (Extract<Property.Background, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Background, number> | (string & {}),
    ...others: (Extract<Property.Background, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Background, number> | (string & {}),
    preferred: Extract<Property.Background, number> | (string & {}),
    maximum: Extract<Property.Background, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 background-attachment；初始值 scroll。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
 */
export class BackgroundAttachmentCss extends CssProperty<Property.BackgroundAttachment> {
  readonly fixed = 'background-attachment:fixed;';
  readonly inherit = 'background-attachment:inherit;';
  readonly initial = 'background-attachment:initial;';
  readonly local = 'background-attachment:local;';
  readonly revert = 'background-attachment:revert;';
  readonly revertLayer = 'background-attachment:revert-layer;';
  readonly scroll = 'background-attachment:scroll;';
  readonly unset = 'background-attachment:unset;';
  constructor() {
    super('background-attachment');
  }
}

/** CSS 属性 background-blend-mode；初始值 normal。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
 */
export class BackgroundBlendModeCss extends CssProperty<Property.BackgroundBlendMode> {
  readonly color = 'background-blend-mode:color;';
  readonly colorBurn = 'background-blend-mode:color-burn;';
  readonly colorDodge = 'background-blend-mode:color-dodge;';
  readonly darken = 'background-blend-mode:darken;';
  readonly difference = 'background-blend-mode:difference;';
  readonly exclusion = 'background-blend-mode:exclusion;';
  readonly hardLight = 'background-blend-mode:hard-light;';
  readonly hue = 'background-blend-mode:hue;';
  readonly inherit = 'background-blend-mode:inherit;';
  readonly initial = 'background-blend-mode:initial;';
  readonly lighten = 'background-blend-mode:lighten;';
  readonly luminosity = 'background-blend-mode:luminosity;';
  readonly multiply = 'background-blend-mode:multiply;';
  readonly normal = 'background-blend-mode:normal;';
  readonly overlay = 'background-blend-mode:overlay;';
  readonly revert = 'background-blend-mode:revert;';
  readonly revertLayer = 'background-blend-mode:revert-layer;';
  readonly saturation = 'background-blend-mode:saturation;';
  readonly screen = 'background-blend-mode:screen;';
  readonly softLight = 'background-blend-mode:soft-light;';
  readonly unset = 'background-blend-mode:unset;';
  constructor() {
    super('background-blend-mode');
  }
}

/** CSS 属性 background-clip；初始值 border-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
 */
export class BackgroundClipCss extends CssProperty<Property.BackgroundClip> {
  readonly borderArea = 'background-clip:border-area;';
  readonly borderBox = 'background-clip:border-box;';
  readonly contentBox = 'background-clip:content-box;';
  readonly inherit = 'background-clip:inherit;';
  readonly initial = 'background-clip:initial;';
  readonly paddingBox = 'background-clip:padding-box;';
  readonly revert = 'background-clip:revert;';
  readonly revertLayer = 'background-clip:revert-layer;';
  readonly text = 'background-clip:text;';
  readonly unset = 'background-clip:unset;';
  constructor() {
    super('background-clip');
  }
}

/** 背景颜色（CSS background-color）；初始值 transparent。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
 */
export class BackgroundColorCss extends CssProperty<Property.BackgroundColor> {
  readonly AccentColor = 'background-color:AccentColor;';
  readonly AccentColorText = 'background-color:AccentColorText;';
  readonly ActiveBorder = 'background-color:ActiveBorder;';
  readonly ActiveCaption = 'background-color:ActiveCaption;';
  readonly ActiveText = 'background-color:ActiveText;';
  readonly AppWorkspace = 'background-color:AppWorkspace;';
  readonly Background = 'background-color:Background;';
  readonly ButtonBorder = 'background-color:ButtonBorder;';
  readonly ButtonFace = 'background-color:ButtonFace;';
  readonly ButtonHighlight = 'background-color:ButtonHighlight;';
  readonly ButtonShadow = 'background-color:ButtonShadow;';
  readonly ButtonText = 'background-color:ButtonText;';
  readonly Canvas = 'background-color:Canvas;';
  readonly CanvasText = 'background-color:CanvasText;';
  readonly CaptionText = 'background-color:CaptionText;';
  readonly Field = 'background-color:Field;';
  readonly FieldText = 'background-color:FieldText;';
  readonly GrayText = 'background-color:GrayText;';
  readonly Highlight = 'background-color:Highlight;';
  readonly HighlightText = 'background-color:HighlightText;';
  readonly InactiveBorder = 'background-color:InactiveBorder;';
  readonly InactiveCaption = 'background-color:InactiveCaption;';
  readonly InactiveCaptionText = 'background-color:InactiveCaptionText;';
  readonly InfoBackground = 'background-color:InfoBackground;';
  readonly InfoText = 'background-color:InfoText;';
  readonly LinkText = 'background-color:LinkText;';
  readonly Mark = 'background-color:Mark;';
  readonly MarkText = 'background-color:MarkText;';
  readonly Menu = 'background-color:Menu;';
  readonly MenuText = 'background-color:MenuText;';
  readonly Scrollbar = 'background-color:Scrollbar;';
  readonly SelectedItem = 'background-color:SelectedItem;';
  readonly SelectedItemText = 'background-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'background-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'background-color:ThreeDFace;';
  readonly ThreeDHighlight = 'background-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'background-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'background-color:ThreeDShadow;';
  readonly VisitedText = 'background-color:VisitedText;';
  readonly Window = 'background-color:Window;';
  readonly WindowFrame = 'background-color:WindowFrame;';
  readonly WindowText = 'background-color:WindowText;';
  readonly aliceblue = 'background-color:aliceblue;';
  readonly antiquewhite = 'background-color:antiquewhite;';
  readonly aqua = 'background-color:aqua;';
  readonly aquamarine = 'background-color:aquamarine;';
  readonly azure = 'background-color:azure;';
  readonly beige = 'background-color:beige;';
  readonly bisque = 'background-color:bisque;';
  readonly black = 'background-color:black;';
  readonly blanchedalmond = 'background-color:blanchedalmond;';
  readonly blue = 'background-color:blue;';
  readonly blueviolet = 'background-color:blueviolet;';
  readonly brown = 'background-color:brown;';
  readonly burlywood = 'background-color:burlywood;';
  readonly cadetblue = 'background-color:cadetblue;';
  readonly chartreuse = 'background-color:chartreuse;';
  readonly chocolate = 'background-color:chocolate;';
  readonly coral = 'background-color:coral;';
  readonly cornflowerblue = 'background-color:cornflowerblue;';
  readonly cornsilk = 'background-color:cornsilk;';
  readonly crimson = 'background-color:crimson;';
  readonly currentColor = 'background-color:currentColor;';
  readonly cyan = 'background-color:cyan;';
  readonly darkblue = 'background-color:darkblue;';
  readonly darkcyan = 'background-color:darkcyan;';
  readonly darkgoldenrod = 'background-color:darkgoldenrod;';
  readonly darkgray = 'background-color:darkgray;';
  readonly darkgreen = 'background-color:darkgreen;';
  readonly darkgrey = 'background-color:darkgrey;';
  readonly darkkhaki = 'background-color:darkkhaki;';
  readonly darkmagenta = 'background-color:darkmagenta;';
  readonly darkolivegreen = 'background-color:darkolivegreen;';
  readonly darkorange = 'background-color:darkorange;';
  readonly darkorchid = 'background-color:darkorchid;';
  readonly darkred = 'background-color:darkred;';
  readonly darksalmon = 'background-color:darksalmon;';
  readonly darkseagreen = 'background-color:darkseagreen;';
  readonly darkslateblue = 'background-color:darkslateblue;';
  readonly darkslategray = 'background-color:darkslategray;';
  readonly darkslategrey = 'background-color:darkslategrey;';
  readonly darkturquoise = 'background-color:darkturquoise;';
  readonly darkviolet = 'background-color:darkviolet;';
  readonly deeppink = 'background-color:deeppink;';
  readonly deepskyblue = 'background-color:deepskyblue;';
  readonly dimgray = 'background-color:dimgray;';
  readonly dimgrey = 'background-color:dimgrey;';
  readonly dodgerblue = 'background-color:dodgerblue;';
  readonly firebrick = 'background-color:firebrick;';
  readonly floralwhite = 'background-color:floralwhite;';
  readonly forestgreen = 'background-color:forestgreen;';
  readonly fuchsia = 'background-color:fuchsia;';
  readonly gainsboro = 'background-color:gainsboro;';
  readonly ghostwhite = 'background-color:ghostwhite;';
  readonly gold = 'background-color:gold;';
  readonly goldenrod = 'background-color:goldenrod;';
  readonly gray = 'background-color:gray;';
  readonly green = 'background-color:green;';
  readonly greenyellow = 'background-color:greenyellow;';
  readonly grey = 'background-color:grey;';
  readonly honeydew = 'background-color:honeydew;';
  readonly hotpink = 'background-color:hotpink;';
  readonly indianred = 'background-color:indianred;';
  readonly indigo = 'background-color:indigo;';
  readonly inherit = 'background-color:inherit;';
  readonly initial = 'background-color:initial;';
  readonly ivory = 'background-color:ivory;';
  readonly khaki = 'background-color:khaki;';
  readonly lavender = 'background-color:lavender;';
  readonly lavenderblush = 'background-color:lavenderblush;';
  readonly lawngreen = 'background-color:lawngreen;';
  readonly lemonchiffon = 'background-color:lemonchiffon;';
  readonly lightblue = 'background-color:lightblue;';
  readonly lightcoral = 'background-color:lightcoral;';
  readonly lightcyan = 'background-color:lightcyan;';
  readonly lightgoldenrodyellow = 'background-color:lightgoldenrodyellow;';
  readonly lightgray = 'background-color:lightgray;';
  readonly lightgreen = 'background-color:lightgreen;';
  readonly lightgrey = 'background-color:lightgrey;';
  readonly lightpink = 'background-color:lightpink;';
  readonly lightsalmon = 'background-color:lightsalmon;';
  readonly lightseagreen = 'background-color:lightseagreen;';
  readonly lightskyblue = 'background-color:lightskyblue;';
  readonly lightslategray = 'background-color:lightslategray;';
  readonly lightslategrey = 'background-color:lightslategrey;';
  readonly lightsteelblue = 'background-color:lightsteelblue;';
  readonly lightyellow = 'background-color:lightyellow;';
  readonly lime = 'background-color:lime;';
  readonly limegreen = 'background-color:limegreen;';
  readonly linen = 'background-color:linen;';
  readonly magenta = 'background-color:magenta;';
  readonly maroon = 'background-color:maroon;';
  readonly mediumaquamarine = 'background-color:mediumaquamarine;';
  readonly mediumblue = 'background-color:mediumblue;';
  readonly mediumorchid = 'background-color:mediumorchid;';
  readonly mediumpurple = 'background-color:mediumpurple;';
  readonly mediumseagreen = 'background-color:mediumseagreen;';
  readonly mediumslateblue = 'background-color:mediumslateblue;';
  readonly mediumspringgreen = 'background-color:mediumspringgreen;';
  readonly mediumturquoise = 'background-color:mediumturquoise;';
  readonly mediumvioletred = 'background-color:mediumvioletred;';
  readonly midnightblue = 'background-color:midnightblue;';
  readonly mintcream = 'background-color:mintcream;';
  readonly mistyrose = 'background-color:mistyrose;';
  readonly moccasin = 'background-color:moccasin;';
  readonly navajowhite = 'background-color:navajowhite;';
  readonly navy = 'background-color:navy;';
  readonly oldlace = 'background-color:oldlace;';
  readonly olive = 'background-color:olive;';
  readonly olivedrab = 'background-color:olivedrab;';
  readonly orange = 'background-color:orange;';
  readonly orangered = 'background-color:orangered;';
  readonly orchid = 'background-color:orchid;';
  readonly palegoldenrod = 'background-color:palegoldenrod;';
  readonly palegreen = 'background-color:palegreen;';
  readonly paleturquoise = 'background-color:paleturquoise;';
  readonly palevioletred = 'background-color:palevioletred;';
  readonly papayawhip = 'background-color:papayawhip;';
  readonly peachpuff = 'background-color:peachpuff;';
  readonly peru = 'background-color:peru;';
  readonly pink = 'background-color:pink;';
  readonly plum = 'background-color:plum;';
  readonly powderblue = 'background-color:powderblue;';
  readonly purple = 'background-color:purple;';
  readonly rebeccapurple = 'background-color:rebeccapurple;';
  readonly red = 'background-color:red;';
  readonly revert = 'background-color:revert;';
  readonly revertLayer = 'background-color:revert-layer;';
  readonly rosybrown = 'background-color:rosybrown;';
  readonly royalblue = 'background-color:royalblue;';
  readonly saddlebrown = 'background-color:saddlebrown;';
  readonly salmon = 'background-color:salmon;';
  readonly sandybrown = 'background-color:sandybrown;';
  readonly seagreen = 'background-color:seagreen;';
  readonly seashell = 'background-color:seashell;';
  readonly sienna = 'background-color:sienna;';
  readonly silver = 'background-color:silver;';
  readonly skyblue = 'background-color:skyblue;';
  readonly slateblue = 'background-color:slateblue;';
  readonly slategray = 'background-color:slategray;';
  readonly slategrey = 'background-color:slategrey;';
  readonly snow = 'background-color:snow;';
  readonly springgreen = 'background-color:springgreen;';
  readonly steelblue = 'background-color:steelblue;';
  readonly tan = 'background-color:tan;';
  readonly teal = 'background-color:teal;';
  readonly thistle = 'background-color:thistle;';
  readonly tomato = 'background-color:tomato;';
  readonly transparent = 'background-color:transparent;';
  readonly turquoise = 'background-color:turquoise;';
  readonly unset = 'background-color:unset;';
  readonly violet = 'background-color:violet;';
  readonly wheat = 'background-color:wheat;';
  readonly white = 'background-color:white;';
  readonly whitesmoke = 'background-color:whitesmoke;';
  readonly yellow = 'background-color:yellow;';
  readonly yellowgreen = 'background-color:yellowgreen;';
  constructor() {
    super('background-color');
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

/** CSS 属性 background-image；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
 */
export class BackgroundImageCss extends CssProperty<Property.BackgroundImage> {
  readonly inherit = 'background-image:inherit;';
  readonly initial = 'background-image:initial;';
  readonly none = 'background-image:none;';
  readonly revert = 'background-image:revert;';
  readonly revertLayer = 'background-image:revert-layer;';
  readonly unset = 'background-image:unset;';
  constructor() {
    super('background-image');
  }
}

/** CSS 属性 background-origin；初始值 padding-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
 */
export class BackgroundOriginCss extends CssProperty<Property.BackgroundOrigin> {
  readonly borderBox = 'background-origin:border-box;';
  readonly contentBox = 'background-origin:content-box;';
  readonly inherit = 'background-origin:inherit;';
  readonly initial = 'background-origin:initial;';
  readonly paddingBox = 'background-origin:padding-box;';
  readonly revert = 'background-origin:revert;';
  readonly revertLayer = 'background-origin:revert-layer;';
  readonly unset = 'background-origin:unset;';
  constructor() {
    super('background-origin');
  }
}

/** CSS 属性 background-position；初始值 0% 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
 */
export class BackgroundPositionCss extends LengthCssProperty<Property.BackgroundPosition> {
  readonly bottom = 'background-position:bottom;';
  readonly center = 'background-position:center;';
  readonly inherit = 'background-position:inherit;';
  readonly initial = 'background-position:initial;';
  readonly left = 'background-position:left;';
  readonly revert = 'background-position:revert;';
  readonly revertLayer = 'background-position:revert-layer;';
  readonly right = 'background-position:right;';
  readonly top = 'background-position:top;';
  readonly unset = 'background-position:unset;';
  constructor() {
    super('background-position');
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
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BackgroundPosition, number> | (string & {}),
    ...others: (Extract<Property.BackgroundPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BackgroundPosition, number> | (string & {}),
    ...others: (Extract<Property.BackgroundPosition, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BackgroundPosition, number> | (string & {}),
    preferred: Extract<Property.BackgroundPosition, number> | (string & {}),
    maximum: Extract<Property.BackgroundPosition, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 background-position-x；初始值 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
 */
export class BackgroundPositionXCss extends LengthCssProperty<Property.BackgroundPositionX> {
  readonly center = 'background-position-x:center;';
  readonly inherit = 'background-position-x:inherit;';
  readonly initial = 'background-position-x:initial;';
  readonly left = 'background-position-x:left;';
  readonly revert = 'background-position-x:revert;';
  readonly revertLayer = 'background-position-x:revert-layer;';
  readonly right = 'background-position-x:right;';
  readonly unset = 'background-position-x:unset;';
  readonly xEnd = 'background-position-x:x-end;';
  readonly xStart = 'background-position-x:x-start;';
  constructor() {
    super('background-position-x');
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
    value: Extract<Property.BackgroundPositionX, number> | (string & {}),
    ...others: (Extract<Property.BackgroundPositionX, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BackgroundPositionX, number> | (string & {}),
    ...others: (Extract<Property.BackgroundPositionX, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BackgroundPositionX, number> | (string & {}),
    preferred: Extract<Property.BackgroundPositionX, number> | (string & {}),
    maximum: Extract<Property.BackgroundPositionX, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 background-position-y；初始值 0%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
 */
export class BackgroundPositionYCss extends LengthCssProperty<Property.BackgroundPositionY> {
  readonly bottom = 'background-position-y:bottom;';
  readonly center = 'background-position-y:center;';
  readonly inherit = 'background-position-y:inherit;';
  readonly initial = 'background-position-y:initial;';
  readonly revert = 'background-position-y:revert;';
  readonly revertLayer = 'background-position-y:revert-layer;';
  readonly top = 'background-position-y:top;';
  readonly unset = 'background-position-y:unset;';
  readonly yEnd = 'background-position-y:y-end;';
  readonly yStart = 'background-position-y:y-start;';
  constructor() {
    super('background-position-y');
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
    value: Extract<Property.BackgroundPositionY, number> | (string & {}),
    ...others: (Extract<Property.BackgroundPositionY, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BackgroundPositionY, number> | (string & {}),
    ...others: (Extract<Property.BackgroundPositionY, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BackgroundPositionY, number> | (string & {}),
    preferred: Extract<Property.BackgroundPositionY, number> | (string & {}),
    maximum: Extract<Property.BackgroundPositionY, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 background-repeat；初始值 repeat。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
 */
export class BackgroundRepeatCss extends CssProperty<Property.BackgroundRepeat> {
  readonly inherit = 'background-repeat:inherit;';
  readonly initial = 'background-repeat:initial;';
  readonly noRepeat = 'background-repeat:no-repeat;';
  readonly repeat = 'background-repeat:repeat;';
  readonly repeatX = 'background-repeat:repeat-x;';
  readonly repeatY = 'background-repeat:repeat-y;';
  readonly revert = 'background-repeat:revert;';
  readonly revertLayer = 'background-repeat:revert-layer;';
  readonly round = 'background-repeat:round;';
  readonly space = 'background-repeat:space;';
  readonly unset = 'background-repeat:unset;';
  constructor() {
    super('background-repeat');
  }
}

/** CSS 属性 background-size；初始值 auto auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
 */
export class BackgroundSizeCss extends LengthCssProperty<Property.BackgroundSize> {
  readonly auto = 'background-size:auto;';
  readonly contain = 'background-size:contain;';
  readonly cover = 'background-size:cover;';
  readonly inherit = 'background-size:inherit;';
  readonly initial = 'background-size:initial;';
  readonly revert = 'background-size:revert;';
  readonly revertLayer = 'background-size:revert-layer;';
  readonly unset = 'background-size:unset;';
  constructor() {
    super('background-size');
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
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BackgroundSize, number> | (string & {}),
    ...others: (Extract<Property.BackgroundSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BackgroundSize, number> | (string & {}),
    ...others: (Extract<Property.BackgroundSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BackgroundSize, number> | (string & {}),
    preferred: Extract<Property.BackgroundSize, number> | (string & {}),
    maximum: Extract<Property.BackgroundSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 baseline-shift；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/baseline-shift
 */
export class BaselineShiftCss extends LengthCssProperty<Property.BaselineShift> {
  readonly baseline = 'baseline-shift:baseline;';
  readonly inherit = 'baseline-shift:inherit;';
  readonly initial = 'baseline-shift:initial;';
  readonly revert = 'baseline-shift:revert;';
  readonly revertLayer = 'baseline-shift:revert-layer;';
  readonly sub = 'baseline-shift:sub;';
  readonly super = 'baseline-shift:super;';
  readonly unset = 'baseline-shift:unset;';
  constructor() {
    super('baseline-shift');
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
    value: Extract<Property.BaselineShift, number> | (string & {}),
    ...others: (Extract<Property.BaselineShift, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BaselineShift, number> | (string & {}),
    ...others: (Extract<Property.BaselineShift, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BaselineShift, number> | (string & {}),
    preferred: Extract<Property.BaselineShift, number> | (string & {}),
    maximum: Extract<Property.BaselineShift, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 block-size；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
 */
export class BlockSizeCss extends LengthCssProperty<Property.BlockSize> {
  readonly auto = 'block-size:auto;';
  readonly fitContent = 'block-size:fit-content;';
  readonly inherit = 'block-size:inherit;';
  readonly initial = 'block-size:initial;';
  readonly maxContent = 'block-size:max-content;';
  readonly minContent = 'block-size:min-content;';
  readonly revert = 'block-size:revert;';
  readonly revertLayer = 'block-size:revert-layer;';
  readonly unset = 'block-size:unset;';
  constructor() {
    super('block-size');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BlockSize, number> | (string & {}),
    ...others: (Extract<Property.BlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BlockSize, number> | (string & {}),
    ...others: (Extract<Property.BlockSize, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BlockSize, number> | (string & {}),
    preferred: Extract<Property.BlockSize, number> | (string & {}),
    maximum: Extract<Property.BlockSize, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** 边框简写（CSS border）。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
 */
export class BorderCss extends LengthCssProperty<Property.Border> {
  readonly AccentColor = 'border:AccentColor;';
  readonly AccentColorText = 'border:AccentColorText;';
  readonly ActiveBorder = 'border:ActiveBorder;';
  readonly ActiveCaption = 'border:ActiveCaption;';
  readonly ActiveText = 'border:ActiveText;';
  readonly AppWorkspace = 'border:AppWorkspace;';
  readonly Background = 'border:Background;';
  readonly ButtonBorder = 'border:ButtonBorder;';
  readonly ButtonFace = 'border:ButtonFace;';
  readonly ButtonHighlight = 'border:ButtonHighlight;';
  readonly ButtonShadow = 'border:ButtonShadow;';
  readonly ButtonText = 'border:ButtonText;';
  readonly Canvas = 'border:Canvas;';
  readonly CanvasText = 'border:CanvasText;';
  readonly CaptionText = 'border:CaptionText;';
  readonly Field = 'border:Field;';
  readonly FieldText = 'border:FieldText;';
  readonly GrayText = 'border:GrayText;';
  readonly Highlight = 'border:Highlight;';
  readonly HighlightText = 'border:HighlightText;';
  readonly InactiveBorder = 'border:InactiveBorder;';
  readonly InactiveCaption = 'border:InactiveCaption;';
  readonly InactiveCaptionText = 'border:InactiveCaptionText;';
  readonly InfoBackground = 'border:InfoBackground;';
  readonly InfoText = 'border:InfoText;';
  readonly LinkText = 'border:LinkText;';
  readonly Mark = 'border:Mark;';
  readonly MarkText = 'border:MarkText;';
  readonly Menu = 'border:Menu;';
  readonly MenuText = 'border:MenuText;';
  readonly Scrollbar = 'border:Scrollbar;';
  readonly SelectedItem = 'border:SelectedItem;';
  readonly SelectedItemText = 'border:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border:ThreeDFace;';
  readonly ThreeDHighlight = 'border:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border:ThreeDShadow;';
  readonly VisitedText = 'border:VisitedText;';
  readonly Window = 'border:Window;';
  readonly WindowFrame = 'border:WindowFrame;';
  readonly WindowText = 'border:WindowText;';
  readonly aliceblue = 'border:aliceblue;';
  readonly antiquewhite = 'border:antiquewhite;';
  readonly aqua = 'border:aqua;';
  readonly aquamarine = 'border:aquamarine;';
  readonly azure = 'border:azure;';
  readonly beige = 'border:beige;';
  readonly bisque = 'border:bisque;';
  readonly black = 'border:black;';
  readonly blanchedalmond = 'border:blanchedalmond;';
  readonly blue = 'border:blue;';
  readonly blueviolet = 'border:blueviolet;';
  readonly brown = 'border:brown;';
  readonly burlywood = 'border:burlywood;';
  readonly cadetblue = 'border:cadetblue;';
  readonly chartreuse = 'border:chartreuse;';
  readonly chocolate = 'border:chocolate;';
  readonly coral = 'border:coral;';
  readonly cornflowerblue = 'border:cornflowerblue;';
  readonly cornsilk = 'border:cornsilk;';
  readonly crimson = 'border:crimson;';
  readonly currentColor = 'border:currentColor;';
  readonly cyan = 'border:cyan;';
  readonly darkblue = 'border:darkblue;';
  readonly darkcyan = 'border:darkcyan;';
  readonly darkgoldenrod = 'border:darkgoldenrod;';
  readonly darkgray = 'border:darkgray;';
  readonly darkgreen = 'border:darkgreen;';
  readonly darkgrey = 'border:darkgrey;';
  readonly darkkhaki = 'border:darkkhaki;';
  readonly darkmagenta = 'border:darkmagenta;';
  readonly darkolivegreen = 'border:darkolivegreen;';
  readonly darkorange = 'border:darkorange;';
  readonly darkorchid = 'border:darkorchid;';
  readonly darkred = 'border:darkred;';
  readonly darksalmon = 'border:darksalmon;';
  readonly darkseagreen = 'border:darkseagreen;';
  readonly darkslateblue = 'border:darkslateblue;';
  readonly darkslategray = 'border:darkslategray;';
  readonly darkslategrey = 'border:darkslategrey;';
  readonly darkturquoise = 'border:darkturquoise;';
  readonly darkviolet = 'border:darkviolet;';
  readonly dashed = 'border:dashed;';
  readonly deeppink = 'border:deeppink;';
  readonly deepskyblue = 'border:deepskyblue;';
  readonly dimgray = 'border:dimgray;';
  readonly dimgrey = 'border:dimgrey;';
  readonly dodgerblue = 'border:dodgerblue;';
  readonly dotted = 'border:dotted;';
  readonly double = 'border:double;';
  readonly firebrick = 'border:firebrick;';
  readonly floralwhite = 'border:floralwhite;';
  readonly forestgreen = 'border:forestgreen;';
  readonly fuchsia = 'border:fuchsia;';
  readonly gainsboro = 'border:gainsboro;';
  readonly ghostwhite = 'border:ghostwhite;';
  readonly gold = 'border:gold;';
  readonly goldenrod = 'border:goldenrod;';
  readonly gray = 'border:gray;';
  readonly green = 'border:green;';
  readonly greenyellow = 'border:greenyellow;';
  readonly grey = 'border:grey;';
  readonly groove = 'border:groove;';
  readonly hidden = 'border:hidden;';
  readonly honeydew = 'border:honeydew;';
  readonly hotpink = 'border:hotpink;';
  readonly indianred = 'border:indianred;';
  readonly indigo = 'border:indigo;';
  readonly inherit = 'border:inherit;';
  readonly initial = 'border:initial;';
  readonly inset = 'border:inset;';
  readonly ivory = 'border:ivory;';
  readonly khaki = 'border:khaki;';
  readonly lavender = 'border:lavender;';
  readonly lavenderblush = 'border:lavenderblush;';
  readonly lawngreen = 'border:lawngreen;';
  readonly lemonchiffon = 'border:lemonchiffon;';
  readonly lightblue = 'border:lightblue;';
  readonly lightcoral = 'border:lightcoral;';
  readonly lightcyan = 'border:lightcyan;';
  readonly lightgoldenrodyellow = 'border:lightgoldenrodyellow;';
  readonly lightgray = 'border:lightgray;';
  readonly lightgreen = 'border:lightgreen;';
  readonly lightgrey = 'border:lightgrey;';
  readonly lightpink = 'border:lightpink;';
  readonly lightsalmon = 'border:lightsalmon;';
  readonly lightseagreen = 'border:lightseagreen;';
  readonly lightskyblue = 'border:lightskyblue;';
  readonly lightslategray = 'border:lightslategray;';
  readonly lightslategrey = 'border:lightslategrey;';
  readonly lightsteelblue = 'border:lightsteelblue;';
  readonly lightyellow = 'border:lightyellow;';
  readonly lime = 'border:lime;';
  readonly limegreen = 'border:limegreen;';
  readonly linen = 'border:linen;';
  readonly magenta = 'border:magenta;';
  readonly maroon = 'border:maroon;';
  readonly medium = 'border:medium;';
  readonly mediumaquamarine = 'border:mediumaquamarine;';
  readonly mediumblue = 'border:mediumblue;';
  readonly mediumorchid = 'border:mediumorchid;';
  readonly mediumpurple = 'border:mediumpurple;';
  readonly mediumseagreen = 'border:mediumseagreen;';
  readonly mediumslateblue = 'border:mediumslateblue;';
  readonly mediumspringgreen = 'border:mediumspringgreen;';
  readonly mediumturquoise = 'border:mediumturquoise;';
  readonly mediumvioletred = 'border:mediumvioletred;';
  readonly midnightblue = 'border:midnightblue;';
  readonly mintcream = 'border:mintcream;';
  readonly mistyrose = 'border:mistyrose;';
  readonly moccasin = 'border:moccasin;';
  readonly navajowhite = 'border:navajowhite;';
  readonly navy = 'border:navy;';
  readonly none = 'border:none;';
  readonly oldlace = 'border:oldlace;';
  readonly olive = 'border:olive;';
  readonly olivedrab = 'border:olivedrab;';
  readonly orange = 'border:orange;';
  readonly orangered = 'border:orangered;';
  readonly orchid = 'border:orchid;';
  readonly outset = 'border:outset;';
  readonly palegoldenrod = 'border:palegoldenrod;';
  readonly palegreen = 'border:palegreen;';
  readonly paleturquoise = 'border:paleturquoise;';
  readonly palevioletred = 'border:palevioletred;';
  readonly papayawhip = 'border:papayawhip;';
  readonly peachpuff = 'border:peachpuff;';
  readonly peru = 'border:peru;';
  readonly pink = 'border:pink;';
  readonly plum = 'border:plum;';
  readonly powderblue = 'border:powderblue;';
  readonly purple = 'border:purple;';
  readonly rebeccapurple = 'border:rebeccapurple;';
  readonly red = 'border:red;';
  readonly revert = 'border:revert;';
  readonly revertLayer = 'border:revert-layer;';
  readonly ridge = 'border:ridge;';
  readonly rosybrown = 'border:rosybrown;';
  readonly royalblue = 'border:royalblue;';
  readonly saddlebrown = 'border:saddlebrown;';
  readonly salmon = 'border:salmon;';
  readonly sandybrown = 'border:sandybrown;';
  readonly seagreen = 'border:seagreen;';
  readonly seashell = 'border:seashell;';
  readonly sienna = 'border:sienna;';
  readonly silver = 'border:silver;';
  readonly skyblue = 'border:skyblue;';
  readonly slateblue = 'border:slateblue;';
  readonly slategray = 'border:slategray;';
  readonly slategrey = 'border:slategrey;';
  readonly snow = 'border:snow;';
  readonly solid = 'border:solid;';
  readonly springgreen = 'border:springgreen;';
  readonly steelblue = 'border:steelblue;';
  readonly tan = 'border:tan;';
  readonly teal = 'border:teal;';
  readonly thick = 'border:thick;';
  readonly thin = 'border:thin;';
  readonly thistle = 'border:thistle;';
  readonly tomato = 'border:tomato;';
  readonly transparent = 'border:transparent;';
  readonly turquoise = 'border:turquoise;';
  readonly unset = 'border:unset;';
  readonly violet = 'border:violet;';
  readonly wheat = 'border:wheat;';
  readonly white = 'border:white;';
  readonly whitesmoke = 'border:whitesmoke;';
  readonly yellow = 'border:yellow;';
  readonly yellowgreen = 'border:yellowgreen;';
  constructor() {
    super('border');
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
    value: Extract<Property.Border, number> | (string & {}),
    ...others: (Extract<Property.Border, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Border, number> | (string & {}),
    ...others: (Extract<Property.Border, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Border, number> | (string & {}),
    preferred: Extract<Property.Border, number> | (string & {}),
    maximum: Extract<Property.Border, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-block。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
 */
export class BorderBlockCss extends LengthCssProperty<Property.BorderBlock> {
  readonly AccentColor = 'border-block:AccentColor;';
  readonly AccentColorText = 'border-block:AccentColorText;';
  readonly ActiveBorder = 'border-block:ActiveBorder;';
  readonly ActiveCaption = 'border-block:ActiveCaption;';
  readonly ActiveText = 'border-block:ActiveText;';
  readonly AppWorkspace = 'border-block:AppWorkspace;';
  readonly Background = 'border-block:Background;';
  readonly ButtonBorder = 'border-block:ButtonBorder;';
  readonly ButtonFace = 'border-block:ButtonFace;';
  readonly ButtonHighlight = 'border-block:ButtonHighlight;';
  readonly ButtonShadow = 'border-block:ButtonShadow;';
  readonly ButtonText = 'border-block:ButtonText;';
  readonly Canvas = 'border-block:Canvas;';
  readonly CanvasText = 'border-block:CanvasText;';
  readonly CaptionText = 'border-block:CaptionText;';
  readonly Field = 'border-block:Field;';
  readonly FieldText = 'border-block:FieldText;';
  readonly GrayText = 'border-block:GrayText;';
  readonly Highlight = 'border-block:Highlight;';
  readonly HighlightText = 'border-block:HighlightText;';
  readonly InactiveBorder = 'border-block:InactiveBorder;';
  readonly InactiveCaption = 'border-block:InactiveCaption;';
  readonly InactiveCaptionText = 'border-block:InactiveCaptionText;';
  readonly InfoBackground = 'border-block:InfoBackground;';
  readonly InfoText = 'border-block:InfoText;';
  readonly LinkText = 'border-block:LinkText;';
  readonly Mark = 'border-block:Mark;';
  readonly MarkText = 'border-block:MarkText;';
  readonly Menu = 'border-block:Menu;';
  readonly MenuText = 'border-block:MenuText;';
  readonly Scrollbar = 'border-block:Scrollbar;';
  readonly SelectedItem = 'border-block:SelectedItem;';
  readonly SelectedItemText = 'border-block:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-block:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-block:ThreeDFace;';
  readonly ThreeDHighlight = 'border-block:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-block:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-block:ThreeDShadow;';
  readonly VisitedText = 'border-block:VisitedText;';
  readonly Window = 'border-block:Window;';
  readonly WindowFrame = 'border-block:WindowFrame;';
  readonly WindowText = 'border-block:WindowText;';
  readonly aliceblue = 'border-block:aliceblue;';
  readonly antiquewhite = 'border-block:antiquewhite;';
  readonly aqua = 'border-block:aqua;';
  readonly aquamarine = 'border-block:aquamarine;';
  readonly azure = 'border-block:azure;';
  readonly beige = 'border-block:beige;';
  readonly bisque = 'border-block:bisque;';
  readonly black = 'border-block:black;';
  readonly blanchedalmond = 'border-block:blanchedalmond;';
  readonly blue = 'border-block:blue;';
  readonly blueviolet = 'border-block:blueviolet;';
  readonly brown = 'border-block:brown;';
  readonly burlywood = 'border-block:burlywood;';
  readonly cadetblue = 'border-block:cadetblue;';
  readonly chartreuse = 'border-block:chartreuse;';
  readonly chocolate = 'border-block:chocolate;';
  readonly coral = 'border-block:coral;';
  readonly cornflowerblue = 'border-block:cornflowerblue;';
  readonly cornsilk = 'border-block:cornsilk;';
  readonly crimson = 'border-block:crimson;';
  readonly currentColor = 'border-block:currentColor;';
  readonly cyan = 'border-block:cyan;';
  readonly darkblue = 'border-block:darkblue;';
  readonly darkcyan = 'border-block:darkcyan;';
  readonly darkgoldenrod = 'border-block:darkgoldenrod;';
  readonly darkgray = 'border-block:darkgray;';
  readonly darkgreen = 'border-block:darkgreen;';
  readonly darkgrey = 'border-block:darkgrey;';
  readonly darkkhaki = 'border-block:darkkhaki;';
  readonly darkmagenta = 'border-block:darkmagenta;';
  readonly darkolivegreen = 'border-block:darkolivegreen;';
  readonly darkorange = 'border-block:darkorange;';
  readonly darkorchid = 'border-block:darkorchid;';
  readonly darkred = 'border-block:darkred;';
  readonly darksalmon = 'border-block:darksalmon;';
  readonly darkseagreen = 'border-block:darkseagreen;';
  readonly darkslateblue = 'border-block:darkslateblue;';
  readonly darkslategray = 'border-block:darkslategray;';
  readonly darkslategrey = 'border-block:darkslategrey;';
  readonly darkturquoise = 'border-block:darkturquoise;';
  readonly darkviolet = 'border-block:darkviolet;';
  readonly dashed = 'border-block:dashed;';
  readonly deeppink = 'border-block:deeppink;';
  readonly deepskyblue = 'border-block:deepskyblue;';
  readonly dimgray = 'border-block:dimgray;';
  readonly dimgrey = 'border-block:dimgrey;';
  readonly dodgerblue = 'border-block:dodgerblue;';
  readonly dotted = 'border-block:dotted;';
  readonly double = 'border-block:double;';
  readonly firebrick = 'border-block:firebrick;';
  readonly floralwhite = 'border-block:floralwhite;';
  readonly forestgreen = 'border-block:forestgreen;';
  readonly fuchsia = 'border-block:fuchsia;';
  readonly gainsboro = 'border-block:gainsboro;';
  readonly ghostwhite = 'border-block:ghostwhite;';
  readonly gold = 'border-block:gold;';
  readonly goldenrod = 'border-block:goldenrod;';
  readonly gray = 'border-block:gray;';
  readonly green = 'border-block:green;';
  readonly greenyellow = 'border-block:greenyellow;';
  readonly grey = 'border-block:grey;';
  readonly groove = 'border-block:groove;';
  readonly hidden = 'border-block:hidden;';
  readonly honeydew = 'border-block:honeydew;';
  readonly hotpink = 'border-block:hotpink;';
  readonly indianred = 'border-block:indianred;';
  readonly indigo = 'border-block:indigo;';
  readonly inherit = 'border-block:inherit;';
  readonly initial = 'border-block:initial;';
  readonly inset = 'border-block:inset;';
  readonly ivory = 'border-block:ivory;';
  readonly khaki = 'border-block:khaki;';
  readonly lavender = 'border-block:lavender;';
  readonly lavenderblush = 'border-block:lavenderblush;';
  readonly lawngreen = 'border-block:lawngreen;';
  readonly lemonchiffon = 'border-block:lemonchiffon;';
  readonly lightblue = 'border-block:lightblue;';
  readonly lightcoral = 'border-block:lightcoral;';
  readonly lightcyan = 'border-block:lightcyan;';
  readonly lightgoldenrodyellow = 'border-block:lightgoldenrodyellow;';
  readonly lightgray = 'border-block:lightgray;';
  readonly lightgreen = 'border-block:lightgreen;';
  readonly lightgrey = 'border-block:lightgrey;';
  readonly lightpink = 'border-block:lightpink;';
  readonly lightsalmon = 'border-block:lightsalmon;';
  readonly lightseagreen = 'border-block:lightseagreen;';
  readonly lightskyblue = 'border-block:lightskyblue;';
  readonly lightslategray = 'border-block:lightslategray;';
  readonly lightslategrey = 'border-block:lightslategrey;';
  readonly lightsteelblue = 'border-block:lightsteelblue;';
  readonly lightyellow = 'border-block:lightyellow;';
  readonly lime = 'border-block:lime;';
  readonly limegreen = 'border-block:limegreen;';
  readonly linen = 'border-block:linen;';
  readonly magenta = 'border-block:magenta;';
  readonly maroon = 'border-block:maroon;';
  readonly medium = 'border-block:medium;';
  readonly mediumaquamarine = 'border-block:mediumaquamarine;';
  readonly mediumblue = 'border-block:mediumblue;';
  readonly mediumorchid = 'border-block:mediumorchid;';
  readonly mediumpurple = 'border-block:mediumpurple;';
  readonly mediumseagreen = 'border-block:mediumseagreen;';
  readonly mediumslateblue = 'border-block:mediumslateblue;';
  readonly mediumspringgreen = 'border-block:mediumspringgreen;';
  readonly mediumturquoise = 'border-block:mediumturquoise;';
  readonly mediumvioletred = 'border-block:mediumvioletred;';
  readonly midnightblue = 'border-block:midnightblue;';
  readonly mintcream = 'border-block:mintcream;';
  readonly mistyrose = 'border-block:mistyrose;';
  readonly moccasin = 'border-block:moccasin;';
  readonly navajowhite = 'border-block:navajowhite;';
  readonly navy = 'border-block:navy;';
  readonly none = 'border-block:none;';
  readonly oldlace = 'border-block:oldlace;';
  readonly olive = 'border-block:olive;';
  readonly olivedrab = 'border-block:olivedrab;';
  readonly orange = 'border-block:orange;';
  readonly orangered = 'border-block:orangered;';
  readonly orchid = 'border-block:orchid;';
  readonly outset = 'border-block:outset;';
  readonly palegoldenrod = 'border-block:palegoldenrod;';
  readonly palegreen = 'border-block:palegreen;';
  readonly paleturquoise = 'border-block:paleturquoise;';
  readonly palevioletred = 'border-block:palevioletred;';
  readonly papayawhip = 'border-block:papayawhip;';
  readonly peachpuff = 'border-block:peachpuff;';
  readonly peru = 'border-block:peru;';
  readonly pink = 'border-block:pink;';
  readonly plum = 'border-block:plum;';
  readonly powderblue = 'border-block:powderblue;';
  readonly purple = 'border-block:purple;';
  readonly rebeccapurple = 'border-block:rebeccapurple;';
  readonly red = 'border-block:red;';
  readonly revert = 'border-block:revert;';
  readonly revertLayer = 'border-block:revert-layer;';
  readonly ridge = 'border-block:ridge;';
  readonly rosybrown = 'border-block:rosybrown;';
  readonly royalblue = 'border-block:royalblue;';
  readonly saddlebrown = 'border-block:saddlebrown;';
  readonly salmon = 'border-block:salmon;';
  readonly sandybrown = 'border-block:sandybrown;';
  readonly seagreen = 'border-block:seagreen;';
  readonly seashell = 'border-block:seashell;';
  readonly sienna = 'border-block:sienna;';
  readonly silver = 'border-block:silver;';
  readonly skyblue = 'border-block:skyblue;';
  readonly slateblue = 'border-block:slateblue;';
  readonly slategray = 'border-block:slategray;';
  readonly slategrey = 'border-block:slategrey;';
  readonly snow = 'border-block:snow;';
  readonly solid = 'border-block:solid;';
  readonly springgreen = 'border-block:springgreen;';
  readonly steelblue = 'border-block:steelblue;';
  readonly tan = 'border-block:tan;';
  readonly teal = 'border-block:teal;';
  readonly thick = 'border-block:thick;';
  readonly thin = 'border-block:thin;';
  readonly thistle = 'border-block:thistle;';
  readonly tomato = 'border-block:tomato;';
  readonly transparent = 'border-block:transparent;';
  readonly turquoise = 'border-block:turquoise;';
  readonly unset = 'border-block:unset;';
  readonly violet = 'border-block:violet;';
  readonly wheat = 'border-block:wheat;';
  readonly white = 'border-block:white;';
  readonly whitesmoke = 'border-block:whitesmoke;';
  readonly yellow = 'border-block:yellow;';
  readonly yellowgreen = 'border-block:yellowgreen;';
  constructor() {
    super('border-block');
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
    value: Extract<Property.BorderBlock, number> | (string & {}),
    ...others: (Extract<Property.BorderBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBlock, number> | (string & {}),
    ...others: (Extract<Property.BorderBlock, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBlock, number> | (string & {}),
    preferred: Extract<Property.BorderBlock, number> | (string & {}),
    maximum: Extract<Property.BorderBlock, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-block-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
 */
export class BorderBlockColorCss extends CssProperty<Property.BorderBlockColor> {
  readonly AccentColor = 'border-block-color:AccentColor;';
  readonly AccentColorText = 'border-block-color:AccentColorText;';
  readonly ActiveBorder = 'border-block-color:ActiveBorder;';
  readonly ActiveCaption = 'border-block-color:ActiveCaption;';
  readonly ActiveText = 'border-block-color:ActiveText;';
  readonly AppWorkspace = 'border-block-color:AppWorkspace;';
  readonly Background = 'border-block-color:Background;';
  readonly ButtonBorder = 'border-block-color:ButtonBorder;';
  readonly ButtonFace = 'border-block-color:ButtonFace;';
  readonly ButtonHighlight = 'border-block-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-block-color:ButtonShadow;';
  readonly ButtonText = 'border-block-color:ButtonText;';
  readonly Canvas = 'border-block-color:Canvas;';
  readonly CanvasText = 'border-block-color:CanvasText;';
  readonly CaptionText = 'border-block-color:CaptionText;';
  readonly Field = 'border-block-color:Field;';
  readonly FieldText = 'border-block-color:FieldText;';
  readonly GrayText = 'border-block-color:GrayText;';
  readonly Highlight = 'border-block-color:Highlight;';
  readonly HighlightText = 'border-block-color:HighlightText;';
  readonly InactiveBorder = 'border-block-color:InactiveBorder;';
  readonly InactiveCaption = 'border-block-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-block-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-block-color:InfoBackground;';
  readonly InfoText = 'border-block-color:InfoText;';
  readonly LinkText = 'border-block-color:LinkText;';
  readonly Mark = 'border-block-color:Mark;';
  readonly MarkText = 'border-block-color:MarkText;';
  readonly Menu = 'border-block-color:Menu;';
  readonly MenuText = 'border-block-color:MenuText;';
  readonly Scrollbar = 'border-block-color:Scrollbar;';
  readonly SelectedItem = 'border-block-color:SelectedItem;';
  readonly SelectedItemText = 'border-block-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-block-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-block-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-block-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-block-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-block-color:ThreeDShadow;';
  readonly VisitedText = 'border-block-color:VisitedText;';
  readonly Window = 'border-block-color:Window;';
  readonly WindowFrame = 'border-block-color:WindowFrame;';
  readonly WindowText = 'border-block-color:WindowText;';
  readonly aliceblue = 'border-block-color:aliceblue;';
  readonly antiquewhite = 'border-block-color:antiquewhite;';
  readonly aqua = 'border-block-color:aqua;';
  readonly aquamarine = 'border-block-color:aquamarine;';
  readonly azure = 'border-block-color:azure;';
  readonly beige = 'border-block-color:beige;';
  readonly bisque = 'border-block-color:bisque;';
  readonly black = 'border-block-color:black;';
  readonly blanchedalmond = 'border-block-color:blanchedalmond;';
  readonly blue = 'border-block-color:blue;';
  readonly blueviolet = 'border-block-color:blueviolet;';
  readonly brown = 'border-block-color:brown;';
  readonly burlywood = 'border-block-color:burlywood;';
  readonly cadetblue = 'border-block-color:cadetblue;';
  readonly chartreuse = 'border-block-color:chartreuse;';
  readonly chocolate = 'border-block-color:chocolate;';
  readonly coral = 'border-block-color:coral;';
  readonly cornflowerblue = 'border-block-color:cornflowerblue;';
  readonly cornsilk = 'border-block-color:cornsilk;';
  readonly crimson = 'border-block-color:crimson;';
  readonly currentColor = 'border-block-color:currentColor;';
  readonly cyan = 'border-block-color:cyan;';
  readonly darkblue = 'border-block-color:darkblue;';
  readonly darkcyan = 'border-block-color:darkcyan;';
  readonly darkgoldenrod = 'border-block-color:darkgoldenrod;';
  readonly darkgray = 'border-block-color:darkgray;';
  readonly darkgreen = 'border-block-color:darkgreen;';
  readonly darkgrey = 'border-block-color:darkgrey;';
  readonly darkkhaki = 'border-block-color:darkkhaki;';
  readonly darkmagenta = 'border-block-color:darkmagenta;';
  readonly darkolivegreen = 'border-block-color:darkolivegreen;';
  readonly darkorange = 'border-block-color:darkorange;';
  readonly darkorchid = 'border-block-color:darkorchid;';
  readonly darkred = 'border-block-color:darkred;';
  readonly darksalmon = 'border-block-color:darksalmon;';
  readonly darkseagreen = 'border-block-color:darkseagreen;';
  readonly darkslateblue = 'border-block-color:darkslateblue;';
  readonly darkslategray = 'border-block-color:darkslategray;';
  readonly darkslategrey = 'border-block-color:darkslategrey;';
  readonly darkturquoise = 'border-block-color:darkturquoise;';
  readonly darkviolet = 'border-block-color:darkviolet;';
  readonly deeppink = 'border-block-color:deeppink;';
  readonly deepskyblue = 'border-block-color:deepskyblue;';
  readonly dimgray = 'border-block-color:dimgray;';
  readonly dimgrey = 'border-block-color:dimgrey;';
  readonly dodgerblue = 'border-block-color:dodgerblue;';
  readonly firebrick = 'border-block-color:firebrick;';
  readonly floralwhite = 'border-block-color:floralwhite;';
  readonly forestgreen = 'border-block-color:forestgreen;';
  readonly fuchsia = 'border-block-color:fuchsia;';
  readonly gainsboro = 'border-block-color:gainsboro;';
  readonly ghostwhite = 'border-block-color:ghostwhite;';
  readonly gold = 'border-block-color:gold;';
  readonly goldenrod = 'border-block-color:goldenrod;';
  readonly gray = 'border-block-color:gray;';
  readonly green = 'border-block-color:green;';
  readonly greenyellow = 'border-block-color:greenyellow;';
  readonly grey = 'border-block-color:grey;';
  readonly honeydew = 'border-block-color:honeydew;';
  readonly hotpink = 'border-block-color:hotpink;';
  readonly indianred = 'border-block-color:indianred;';
  readonly indigo = 'border-block-color:indigo;';
  readonly inherit = 'border-block-color:inherit;';
  readonly initial = 'border-block-color:initial;';
  readonly ivory = 'border-block-color:ivory;';
  readonly khaki = 'border-block-color:khaki;';
  readonly lavender = 'border-block-color:lavender;';
  readonly lavenderblush = 'border-block-color:lavenderblush;';
  readonly lawngreen = 'border-block-color:lawngreen;';
  readonly lemonchiffon = 'border-block-color:lemonchiffon;';
  readonly lightblue = 'border-block-color:lightblue;';
  readonly lightcoral = 'border-block-color:lightcoral;';
  readonly lightcyan = 'border-block-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-block-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-block-color:lightgray;';
  readonly lightgreen = 'border-block-color:lightgreen;';
  readonly lightgrey = 'border-block-color:lightgrey;';
  readonly lightpink = 'border-block-color:lightpink;';
  readonly lightsalmon = 'border-block-color:lightsalmon;';
  readonly lightseagreen = 'border-block-color:lightseagreen;';
  readonly lightskyblue = 'border-block-color:lightskyblue;';
  readonly lightslategray = 'border-block-color:lightslategray;';
  readonly lightslategrey = 'border-block-color:lightslategrey;';
  readonly lightsteelblue = 'border-block-color:lightsteelblue;';
  readonly lightyellow = 'border-block-color:lightyellow;';
  readonly lime = 'border-block-color:lime;';
  readonly limegreen = 'border-block-color:limegreen;';
  readonly linen = 'border-block-color:linen;';
  readonly magenta = 'border-block-color:magenta;';
  readonly maroon = 'border-block-color:maroon;';
  readonly mediumaquamarine = 'border-block-color:mediumaquamarine;';
  readonly mediumblue = 'border-block-color:mediumblue;';
  readonly mediumorchid = 'border-block-color:mediumorchid;';
  readonly mediumpurple = 'border-block-color:mediumpurple;';
  readonly mediumseagreen = 'border-block-color:mediumseagreen;';
  readonly mediumslateblue = 'border-block-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-block-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-block-color:mediumturquoise;';
  readonly mediumvioletred = 'border-block-color:mediumvioletred;';
  readonly midnightblue = 'border-block-color:midnightblue;';
  readonly mintcream = 'border-block-color:mintcream;';
  readonly mistyrose = 'border-block-color:mistyrose;';
  readonly moccasin = 'border-block-color:moccasin;';
  readonly navajowhite = 'border-block-color:navajowhite;';
  readonly navy = 'border-block-color:navy;';
  readonly oldlace = 'border-block-color:oldlace;';
  readonly olive = 'border-block-color:olive;';
  readonly olivedrab = 'border-block-color:olivedrab;';
  readonly orange = 'border-block-color:orange;';
  readonly orangered = 'border-block-color:orangered;';
  readonly orchid = 'border-block-color:orchid;';
  readonly palegoldenrod = 'border-block-color:palegoldenrod;';
  readonly palegreen = 'border-block-color:palegreen;';
  readonly paleturquoise = 'border-block-color:paleturquoise;';
  readonly palevioletred = 'border-block-color:palevioletred;';
  readonly papayawhip = 'border-block-color:papayawhip;';
  readonly peachpuff = 'border-block-color:peachpuff;';
  readonly peru = 'border-block-color:peru;';
  readonly pink = 'border-block-color:pink;';
  readonly plum = 'border-block-color:plum;';
  readonly powderblue = 'border-block-color:powderblue;';
  readonly purple = 'border-block-color:purple;';
  readonly rebeccapurple = 'border-block-color:rebeccapurple;';
  readonly red = 'border-block-color:red;';
  readonly revert = 'border-block-color:revert;';
  readonly revertLayer = 'border-block-color:revert-layer;';
  readonly rosybrown = 'border-block-color:rosybrown;';
  readonly royalblue = 'border-block-color:royalblue;';
  readonly saddlebrown = 'border-block-color:saddlebrown;';
  readonly salmon = 'border-block-color:salmon;';
  readonly sandybrown = 'border-block-color:sandybrown;';
  readonly seagreen = 'border-block-color:seagreen;';
  readonly seashell = 'border-block-color:seashell;';
  readonly sienna = 'border-block-color:sienna;';
  readonly silver = 'border-block-color:silver;';
  readonly skyblue = 'border-block-color:skyblue;';
  readonly slateblue = 'border-block-color:slateblue;';
  readonly slategray = 'border-block-color:slategray;';
  readonly slategrey = 'border-block-color:slategrey;';
  readonly snow = 'border-block-color:snow;';
  readonly springgreen = 'border-block-color:springgreen;';
  readonly steelblue = 'border-block-color:steelblue;';
  readonly tan = 'border-block-color:tan;';
  readonly teal = 'border-block-color:teal;';
  readonly thistle = 'border-block-color:thistle;';
  readonly tomato = 'border-block-color:tomato;';
  readonly transparent = 'border-block-color:transparent;';
  readonly turquoise = 'border-block-color:turquoise;';
  readonly unset = 'border-block-color:unset;';
  readonly violet = 'border-block-color:violet;';
  readonly wheat = 'border-block-color:wheat;';
  readonly white = 'border-block-color:white;';
  readonly whitesmoke = 'border-block-color:whitesmoke;';
  readonly yellow = 'border-block-color:yellow;';
  readonly yellowgreen = 'border-block-color:yellowgreen;';
  constructor() {
    super('border-block-color');
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

/** CSS 属性 border-block-end。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
 */
export class BorderBlockEndCss extends LengthCssProperty<Property.BorderBlockEnd> {
  readonly AccentColor = 'border-block-end:AccentColor;';
  readonly AccentColorText = 'border-block-end:AccentColorText;';
  readonly ActiveBorder = 'border-block-end:ActiveBorder;';
  readonly ActiveCaption = 'border-block-end:ActiveCaption;';
  readonly ActiveText = 'border-block-end:ActiveText;';
  readonly AppWorkspace = 'border-block-end:AppWorkspace;';
  readonly Background = 'border-block-end:Background;';
  readonly ButtonBorder = 'border-block-end:ButtonBorder;';
  readonly ButtonFace = 'border-block-end:ButtonFace;';
  readonly ButtonHighlight = 'border-block-end:ButtonHighlight;';
  readonly ButtonShadow = 'border-block-end:ButtonShadow;';
  readonly ButtonText = 'border-block-end:ButtonText;';
  readonly Canvas = 'border-block-end:Canvas;';
  readonly CanvasText = 'border-block-end:CanvasText;';
  readonly CaptionText = 'border-block-end:CaptionText;';
  readonly Field = 'border-block-end:Field;';
  readonly FieldText = 'border-block-end:FieldText;';
  readonly GrayText = 'border-block-end:GrayText;';
  readonly Highlight = 'border-block-end:Highlight;';
  readonly HighlightText = 'border-block-end:HighlightText;';
  readonly InactiveBorder = 'border-block-end:InactiveBorder;';
  readonly InactiveCaption = 'border-block-end:InactiveCaption;';
  readonly InactiveCaptionText = 'border-block-end:InactiveCaptionText;';
  readonly InfoBackground = 'border-block-end:InfoBackground;';
  readonly InfoText = 'border-block-end:InfoText;';
  readonly LinkText = 'border-block-end:LinkText;';
  readonly Mark = 'border-block-end:Mark;';
  readonly MarkText = 'border-block-end:MarkText;';
  readonly Menu = 'border-block-end:Menu;';
  readonly MenuText = 'border-block-end:MenuText;';
  readonly Scrollbar = 'border-block-end:Scrollbar;';
  readonly SelectedItem = 'border-block-end:SelectedItem;';
  readonly SelectedItemText = 'border-block-end:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-block-end:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-block-end:ThreeDFace;';
  readonly ThreeDHighlight = 'border-block-end:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-block-end:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-block-end:ThreeDShadow;';
  readonly VisitedText = 'border-block-end:VisitedText;';
  readonly Window = 'border-block-end:Window;';
  readonly WindowFrame = 'border-block-end:WindowFrame;';
  readonly WindowText = 'border-block-end:WindowText;';
  readonly aliceblue = 'border-block-end:aliceblue;';
  readonly antiquewhite = 'border-block-end:antiquewhite;';
  readonly aqua = 'border-block-end:aqua;';
  readonly aquamarine = 'border-block-end:aquamarine;';
  readonly azure = 'border-block-end:azure;';
  readonly beige = 'border-block-end:beige;';
  readonly bisque = 'border-block-end:bisque;';
  readonly black = 'border-block-end:black;';
  readonly blanchedalmond = 'border-block-end:blanchedalmond;';
  readonly blue = 'border-block-end:blue;';
  readonly blueviolet = 'border-block-end:blueviolet;';
  readonly brown = 'border-block-end:brown;';
  readonly burlywood = 'border-block-end:burlywood;';
  readonly cadetblue = 'border-block-end:cadetblue;';
  readonly chartreuse = 'border-block-end:chartreuse;';
  readonly chocolate = 'border-block-end:chocolate;';
  readonly coral = 'border-block-end:coral;';
  readonly cornflowerblue = 'border-block-end:cornflowerblue;';
  readonly cornsilk = 'border-block-end:cornsilk;';
  readonly crimson = 'border-block-end:crimson;';
  readonly currentColor = 'border-block-end:currentColor;';
  readonly cyan = 'border-block-end:cyan;';
  readonly darkblue = 'border-block-end:darkblue;';
  readonly darkcyan = 'border-block-end:darkcyan;';
  readonly darkgoldenrod = 'border-block-end:darkgoldenrod;';
  readonly darkgray = 'border-block-end:darkgray;';
  readonly darkgreen = 'border-block-end:darkgreen;';
  readonly darkgrey = 'border-block-end:darkgrey;';
  readonly darkkhaki = 'border-block-end:darkkhaki;';
  readonly darkmagenta = 'border-block-end:darkmagenta;';
  readonly darkolivegreen = 'border-block-end:darkolivegreen;';
  readonly darkorange = 'border-block-end:darkorange;';
  readonly darkorchid = 'border-block-end:darkorchid;';
  readonly darkred = 'border-block-end:darkred;';
  readonly darksalmon = 'border-block-end:darksalmon;';
  readonly darkseagreen = 'border-block-end:darkseagreen;';
  readonly darkslateblue = 'border-block-end:darkslateblue;';
  readonly darkslategray = 'border-block-end:darkslategray;';
  readonly darkslategrey = 'border-block-end:darkslategrey;';
  readonly darkturquoise = 'border-block-end:darkturquoise;';
  readonly darkviolet = 'border-block-end:darkviolet;';
  readonly dashed = 'border-block-end:dashed;';
  readonly deeppink = 'border-block-end:deeppink;';
  readonly deepskyblue = 'border-block-end:deepskyblue;';
  readonly dimgray = 'border-block-end:dimgray;';
  readonly dimgrey = 'border-block-end:dimgrey;';
  readonly dodgerblue = 'border-block-end:dodgerblue;';
  readonly dotted = 'border-block-end:dotted;';
  readonly double = 'border-block-end:double;';
  readonly firebrick = 'border-block-end:firebrick;';
  readonly floralwhite = 'border-block-end:floralwhite;';
  readonly forestgreen = 'border-block-end:forestgreen;';
  readonly fuchsia = 'border-block-end:fuchsia;';
  readonly gainsboro = 'border-block-end:gainsboro;';
  readonly ghostwhite = 'border-block-end:ghostwhite;';
  readonly gold = 'border-block-end:gold;';
  readonly goldenrod = 'border-block-end:goldenrod;';
  readonly gray = 'border-block-end:gray;';
  readonly green = 'border-block-end:green;';
  readonly greenyellow = 'border-block-end:greenyellow;';
  readonly grey = 'border-block-end:grey;';
  readonly groove = 'border-block-end:groove;';
  readonly hidden = 'border-block-end:hidden;';
  readonly honeydew = 'border-block-end:honeydew;';
  readonly hotpink = 'border-block-end:hotpink;';
  readonly indianred = 'border-block-end:indianred;';
  readonly indigo = 'border-block-end:indigo;';
  readonly inherit = 'border-block-end:inherit;';
  readonly initial = 'border-block-end:initial;';
  readonly inset = 'border-block-end:inset;';
  readonly ivory = 'border-block-end:ivory;';
  readonly khaki = 'border-block-end:khaki;';
  readonly lavender = 'border-block-end:lavender;';
  readonly lavenderblush = 'border-block-end:lavenderblush;';
  readonly lawngreen = 'border-block-end:lawngreen;';
  readonly lemonchiffon = 'border-block-end:lemonchiffon;';
  readonly lightblue = 'border-block-end:lightblue;';
  readonly lightcoral = 'border-block-end:lightcoral;';
  readonly lightcyan = 'border-block-end:lightcyan;';
  readonly lightgoldenrodyellow = 'border-block-end:lightgoldenrodyellow;';
  readonly lightgray = 'border-block-end:lightgray;';
  readonly lightgreen = 'border-block-end:lightgreen;';
  readonly lightgrey = 'border-block-end:lightgrey;';
  readonly lightpink = 'border-block-end:lightpink;';
  readonly lightsalmon = 'border-block-end:lightsalmon;';
  readonly lightseagreen = 'border-block-end:lightseagreen;';
  readonly lightskyblue = 'border-block-end:lightskyblue;';
  readonly lightslategray = 'border-block-end:lightslategray;';
  readonly lightslategrey = 'border-block-end:lightslategrey;';
  readonly lightsteelblue = 'border-block-end:lightsteelblue;';
  readonly lightyellow = 'border-block-end:lightyellow;';
  readonly lime = 'border-block-end:lime;';
  readonly limegreen = 'border-block-end:limegreen;';
  readonly linen = 'border-block-end:linen;';
  readonly magenta = 'border-block-end:magenta;';
  readonly maroon = 'border-block-end:maroon;';
  readonly medium = 'border-block-end:medium;';
  readonly mediumaquamarine = 'border-block-end:mediumaquamarine;';
  readonly mediumblue = 'border-block-end:mediumblue;';
  readonly mediumorchid = 'border-block-end:mediumorchid;';
  readonly mediumpurple = 'border-block-end:mediumpurple;';
  readonly mediumseagreen = 'border-block-end:mediumseagreen;';
  readonly mediumslateblue = 'border-block-end:mediumslateblue;';
  readonly mediumspringgreen = 'border-block-end:mediumspringgreen;';
  readonly mediumturquoise = 'border-block-end:mediumturquoise;';
  readonly mediumvioletred = 'border-block-end:mediumvioletred;';
  readonly midnightblue = 'border-block-end:midnightblue;';
  readonly mintcream = 'border-block-end:mintcream;';
  readonly mistyrose = 'border-block-end:mistyrose;';
  readonly moccasin = 'border-block-end:moccasin;';
  readonly navajowhite = 'border-block-end:navajowhite;';
  readonly navy = 'border-block-end:navy;';
  readonly none = 'border-block-end:none;';
  readonly oldlace = 'border-block-end:oldlace;';
  readonly olive = 'border-block-end:olive;';
  readonly olivedrab = 'border-block-end:olivedrab;';
  readonly orange = 'border-block-end:orange;';
  readonly orangered = 'border-block-end:orangered;';
  readonly orchid = 'border-block-end:orchid;';
  readonly outset = 'border-block-end:outset;';
  readonly palegoldenrod = 'border-block-end:palegoldenrod;';
  readonly palegreen = 'border-block-end:palegreen;';
  readonly paleturquoise = 'border-block-end:paleturquoise;';
  readonly palevioletred = 'border-block-end:palevioletred;';
  readonly papayawhip = 'border-block-end:papayawhip;';
  readonly peachpuff = 'border-block-end:peachpuff;';
  readonly peru = 'border-block-end:peru;';
  readonly pink = 'border-block-end:pink;';
  readonly plum = 'border-block-end:plum;';
  readonly powderblue = 'border-block-end:powderblue;';
  readonly purple = 'border-block-end:purple;';
  readonly rebeccapurple = 'border-block-end:rebeccapurple;';
  readonly red = 'border-block-end:red;';
  readonly revert = 'border-block-end:revert;';
  readonly revertLayer = 'border-block-end:revert-layer;';
  readonly ridge = 'border-block-end:ridge;';
  readonly rosybrown = 'border-block-end:rosybrown;';
  readonly royalblue = 'border-block-end:royalblue;';
  readonly saddlebrown = 'border-block-end:saddlebrown;';
  readonly salmon = 'border-block-end:salmon;';
  readonly sandybrown = 'border-block-end:sandybrown;';
  readonly seagreen = 'border-block-end:seagreen;';
  readonly seashell = 'border-block-end:seashell;';
  readonly sienna = 'border-block-end:sienna;';
  readonly silver = 'border-block-end:silver;';
  readonly skyblue = 'border-block-end:skyblue;';
  readonly slateblue = 'border-block-end:slateblue;';
  readonly slategray = 'border-block-end:slategray;';
  readonly slategrey = 'border-block-end:slategrey;';
  readonly snow = 'border-block-end:snow;';
  readonly solid = 'border-block-end:solid;';
  readonly springgreen = 'border-block-end:springgreen;';
  readonly steelblue = 'border-block-end:steelblue;';
  readonly tan = 'border-block-end:tan;';
  readonly teal = 'border-block-end:teal;';
  readonly thick = 'border-block-end:thick;';
  readonly thin = 'border-block-end:thin;';
  readonly thistle = 'border-block-end:thistle;';
  readonly tomato = 'border-block-end:tomato;';
  readonly transparent = 'border-block-end:transparent;';
  readonly turquoise = 'border-block-end:turquoise;';
  readonly unset = 'border-block-end:unset;';
  readonly violet = 'border-block-end:violet;';
  readonly wheat = 'border-block-end:wheat;';
  readonly white = 'border-block-end:white;';
  readonly whitesmoke = 'border-block-end:whitesmoke;';
  readonly yellow = 'border-block-end:yellow;';
  readonly yellowgreen = 'border-block-end:yellowgreen;';
  constructor() {
    super('border-block-end');
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
    value: Extract<Property.BorderBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBlockEnd, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBlockEnd, number> | (string & {}),
    preferred: Extract<Property.BorderBlockEnd, number> | (string & {}),
    maximum: Extract<Property.BorderBlockEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-block-end-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
 */
export class BorderBlockEndColorCss extends CssProperty<Property.BorderBlockEndColor> {
  readonly AccentColor = 'border-block-end-color:AccentColor;';
  readonly AccentColorText = 'border-block-end-color:AccentColorText;';
  readonly ActiveBorder = 'border-block-end-color:ActiveBorder;';
  readonly ActiveCaption = 'border-block-end-color:ActiveCaption;';
  readonly ActiveText = 'border-block-end-color:ActiveText;';
  readonly AppWorkspace = 'border-block-end-color:AppWorkspace;';
  readonly Background = 'border-block-end-color:Background;';
  readonly ButtonBorder = 'border-block-end-color:ButtonBorder;';
  readonly ButtonFace = 'border-block-end-color:ButtonFace;';
  readonly ButtonHighlight = 'border-block-end-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-block-end-color:ButtonShadow;';
  readonly ButtonText = 'border-block-end-color:ButtonText;';
  readonly Canvas = 'border-block-end-color:Canvas;';
  readonly CanvasText = 'border-block-end-color:CanvasText;';
  readonly CaptionText = 'border-block-end-color:CaptionText;';
  readonly Field = 'border-block-end-color:Field;';
  readonly FieldText = 'border-block-end-color:FieldText;';
  readonly GrayText = 'border-block-end-color:GrayText;';
  readonly Highlight = 'border-block-end-color:Highlight;';
  readonly HighlightText = 'border-block-end-color:HighlightText;';
  readonly InactiveBorder = 'border-block-end-color:InactiveBorder;';
  readonly InactiveCaption = 'border-block-end-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-block-end-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-block-end-color:InfoBackground;';
  readonly InfoText = 'border-block-end-color:InfoText;';
  readonly LinkText = 'border-block-end-color:LinkText;';
  readonly Mark = 'border-block-end-color:Mark;';
  readonly MarkText = 'border-block-end-color:MarkText;';
  readonly Menu = 'border-block-end-color:Menu;';
  readonly MenuText = 'border-block-end-color:MenuText;';
  readonly Scrollbar = 'border-block-end-color:Scrollbar;';
  readonly SelectedItem = 'border-block-end-color:SelectedItem;';
  readonly SelectedItemText = 'border-block-end-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-block-end-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-block-end-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-block-end-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-block-end-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-block-end-color:ThreeDShadow;';
  readonly VisitedText = 'border-block-end-color:VisitedText;';
  readonly Window = 'border-block-end-color:Window;';
  readonly WindowFrame = 'border-block-end-color:WindowFrame;';
  readonly WindowText = 'border-block-end-color:WindowText;';
  readonly aliceblue = 'border-block-end-color:aliceblue;';
  readonly antiquewhite = 'border-block-end-color:antiquewhite;';
  readonly aqua = 'border-block-end-color:aqua;';
  readonly aquamarine = 'border-block-end-color:aquamarine;';
  readonly azure = 'border-block-end-color:azure;';
  readonly beige = 'border-block-end-color:beige;';
  readonly bisque = 'border-block-end-color:bisque;';
  readonly black = 'border-block-end-color:black;';
  readonly blanchedalmond = 'border-block-end-color:blanchedalmond;';
  readonly blue = 'border-block-end-color:blue;';
  readonly blueviolet = 'border-block-end-color:blueviolet;';
  readonly brown = 'border-block-end-color:brown;';
  readonly burlywood = 'border-block-end-color:burlywood;';
  readonly cadetblue = 'border-block-end-color:cadetblue;';
  readonly chartreuse = 'border-block-end-color:chartreuse;';
  readonly chocolate = 'border-block-end-color:chocolate;';
  readonly coral = 'border-block-end-color:coral;';
  readonly cornflowerblue = 'border-block-end-color:cornflowerblue;';
  readonly cornsilk = 'border-block-end-color:cornsilk;';
  readonly crimson = 'border-block-end-color:crimson;';
  readonly currentColor = 'border-block-end-color:currentColor;';
  readonly cyan = 'border-block-end-color:cyan;';
  readonly darkblue = 'border-block-end-color:darkblue;';
  readonly darkcyan = 'border-block-end-color:darkcyan;';
  readonly darkgoldenrod = 'border-block-end-color:darkgoldenrod;';
  readonly darkgray = 'border-block-end-color:darkgray;';
  readonly darkgreen = 'border-block-end-color:darkgreen;';
  readonly darkgrey = 'border-block-end-color:darkgrey;';
  readonly darkkhaki = 'border-block-end-color:darkkhaki;';
  readonly darkmagenta = 'border-block-end-color:darkmagenta;';
  readonly darkolivegreen = 'border-block-end-color:darkolivegreen;';
  readonly darkorange = 'border-block-end-color:darkorange;';
  readonly darkorchid = 'border-block-end-color:darkorchid;';
  readonly darkred = 'border-block-end-color:darkred;';
  readonly darksalmon = 'border-block-end-color:darksalmon;';
  readonly darkseagreen = 'border-block-end-color:darkseagreen;';
  readonly darkslateblue = 'border-block-end-color:darkslateblue;';
  readonly darkslategray = 'border-block-end-color:darkslategray;';
  readonly darkslategrey = 'border-block-end-color:darkslategrey;';
  readonly darkturquoise = 'border-block-end-color:darkturquoise;';
  readonly darkviolet = 'border-block-end-color:darkviolet;';
  readonly deeppink = 'border-block-end-color:deeppink;';
  readonly deepskyblue = 'border-block-end-color:deepskyblue;';
  readonly dimgray = 'border-block-end-color:dimgray;';
  readonly dimgrey = 'border-block-end-color:dimgrey;';
  readonly dodgerblue = 'border-block-end-color:dodgerblue;';
  readonly firebrick = 'border-block-end-color:firebrick;';
  readonly floralwhite = 'border-block-end-color:floralwhite;';
  readonly forestgreen = 'border-block-end-color:forestgreen;';
  readonly fuchsia = 'border-block-end-color:fuchsia;';
  readonly gainsboro = 'border-block-end-color:gainsboro;';
  readonly ghostwhite = 'border-block-end-color:ghostwhite;';
  readonly gold = 'border-block-end-color:gold;';
  readonly goldenrod = 'border-block-end-color:goldenrod;';
  readonly gray = 'border-block-end-color:gray;';
  readonly green = 'border-block-end-color:green;';
  readonly greenyellow = 'border-block-end-color:greenyellow;';
  readonly grey = 'border-block-end-color:grey;';
  readonly honeydew = 'border-block-end-color:honeydew;';
  readonly hotpink = 'border-block-end-color:hotpink;';
  readonly indianred = 'border-block-end-color:indianred;';
  readonly indigo = 'border-block-end-color:indigo;';
  readonly inherit = 'border-block-end-color:inherit;';
  readonly initial = 'border-block-end-color:initial;';
  readonly ivory = 'border-block-end-color:ivory;';
  readonly khaki = 'border-block-end-color:khaki;';
  readonly lavender = 'border-block-end-color:lavender;';
  readonly lavenderblush = 'border-block-end-color:lavenderblush;';
  readonly lawngreen = 'border-block-end-color:lawngreen;';
  readonly lemonchiffon = 'border-block-end-color:lemonchiffon;';
  readonly lightblue = 'border-block-end-color:lightblue;';
  readonly lightcoral = 'border-block-end-color:lightcoral;';
  readonly lightcyan = 'border-block-end-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-block-end-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-block-end-color:lightgray;';
  readonly lightgreen = 'border-block-end-color:lightgreen;';
  readonly lightgrey = 'border-block-end-color:lightgrey;';
  readonly lightpink = 'border-block-end-color:lightpink;';
  readonly lightsalmon = 'border-block-end-color:lightsalmon;';
  readonly lightseagreen = 'border-block-end-color:lightseagreen;';
  readonly lightskyblue = 'border-block-end-color:lightskyblue;';
  readonly lightslategray = 'border-block-end-color:lightslategray;';
  readonly lightslategrey = 'border-block-end-color:lightslategrey;';
  readonly lightsteelblue = 'border-block-end-color:lightsteelblue;';
  readonly lightyellow = 'border-block-end-color:lightyellow;';
  readonly lime = 'border-block-end-color:lime;';
  readonly limegreen = 'border-block-end-color:limegreen;';
  readonly linen = 'border-block-end-color:linen;';
  readonly magenta = 'border-block-end-color:magenta;';
  readonly maroon = 'border-block-end-color:maroon;';
  readonly mediumaquamarine = 'border-block-end-color:mediumaquamarine;';
  readonly mediumblue = 'border-block-end-color:mediumblue;';
  readonly mediumorchid = 'border-block-end-color:mediumorchid;';
  readonly mediumpurple = 'border-block-end-color:mediumpurple;';
  readonly mediumseagreen = 'border-block-end-color:mediumseagreen;';
  readonly mediumslateblue = 'border-block-end-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-block-end-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-block-end-color:mediumturquoise;';
  readonly mediumvioletred = 'border-block-end-color:mediumvioletred;';
  readonly midnightblue = 'border-block-end-color:midnightblue;';
  readonly mintcream = 'border-block-end-color:mintcream;';
  readonly mistyrose = 'border-block-end-color:mistyrose;';
  readonly moccasin = 'border-block-end-color:moccasin;';
  readonly navajowhite = 'border-block-end-color:navajowhite;';
  readonly navy = 'border-block-end-color:navy;';
  readonly oldlace = 'border-block-end-color:oldlace;';
  readonly olive = 'border-block-end-color:olive;';
  readonly olivedrab = 'border-block-end-color:olivedrab;';
  readonly orange = 'border-block-end-color:orange;';
  readonly orangered = 'border-block-end-color:orangered;';
  readonly orchid = 'border-block-end-color:orchid;';
  readonly palegoldenrod = 'border-block-end-color:palegoldenrod;';
  readonly palegreen = 'border-block-end-color:palegreen;';
  readonly paleturquoise = 'border-block-end-color:paleturquoise;';
  readonly palevioletred = 'border-block-end-color:palevioletred;';
  readonly papayawhip = 'border-block-end-color:papayawhip;';
  readonly peachpuff = 'border-block-end-color:peachpuff;';
  readonly peru = 'border-block-end-color:peru;';
  readonly pink = 'border-block-end-color:pink;';
  readonly plum = 'border-block-end-color:plum;';
  readonly powderblue = 'border-block-end-color:powderblue;';
  readonly purple = 'border-block-end-color:purple;';
  readonly rebeccapurple = 'border-block-end-color:rebeccapurple;';
  readonly red = 'border-block-end-color:red;';
  readonly revert = 'border-block-end-color:revert;';
  readonly revertLayer = 'border-block-end-color:revert-layer;';
  readonly rosybrown = 'border-block-end-color:rosybrown;';
  readonly royalblue = 'border-block-end-color:royalblue;';
  readonly saddlebrown = 'border-block-end-color:saddlebrown;';
  readonly salmon = 'border-block-end-color:salmon;';
  readonly sandybrown = 'border-block-end-color:sandybrown;';
  readonly seagreen = 'border-block-end-color:seagreen;';
  readonly seashell = 'border-block-end-color:seashell;';
  readonly sienna = 'border-block-end-color:sienna;';
  readonly silver = 'border-block-end-color:silver;';
  readonly skyblue = 'border-block-end-color:skyblue;';
  readonly slateblue = 'border-block-end-color:slateblue;';
  readonly slategray = 'border-block-end-color:slategray;';
  readonly slategrey = 'border-block-end-color:slategrey;';
  readonly snow = 'border-block-end-color:snow;';
  readonly springgreen = 'border-block-end-color:springgreen;';
  readonly steelblue = 'border-block-end-color:steelblue;';
  readonly tan = 'border-block-end-color:tan;';
  readonly teal = 'border-block-end-color:teal;';
  readonly thistle = 'border-block-end-color:thistle;';
  readonly tomato = 'border-block-end-color:tomato;';
  readonly transparent = 'border-block-end-color:transparent;';
  readonly turquoise = 'border-block-end-color:turquoise;';
  readonly unset = 'border-block-end-color:unset;';
  readonly violet = 'border-block-end-color:violet;';
  readonly wheat = 'border-block-end-color:wheat;';
  readonly white = 'border-block-end-color:white;';
  readonly whitesmoke = 'border-block-end-color:whitesmoke;';
  readonly yellow = 'border-block-end-color:yellow;';
  readonly yellowgreen = 'border-block-end-color:yellowgreen;';
  constructor() {
    super('border-block-end-color');
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

/** CSS 属性 border-block-end-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
 */
export class BorderBlockEndStyleCss extends CssProperty<Property.BorderBlockEndStyle> {
  readonly dashed = 'border-block-end-style:dashed;';
  readonly dotted = 'border-block-end-style:dotted;';
  readonly double = 'border-block-end-style:double;';
  readonly groove = 'border-block-end-style:groove;';
  readonly hidden = 'border-block-end-style:hidden;';
  readonly inherit = 'border-block-end-style:inherit;';
  readonly initial = 'border-block-end-style:initial;';
  readonly inset = 'border-block-end-style:inset;';
  readonly none = 'border-block-end-style:none;';
  readonly outset = 'border-block-end-style:outset;';
  readonly revert = 'border-block-end-style:revert;';
  readonly revertLayer = 'border-block-end-style:revert-layer;';
  readonly ridge = 'border-block-end-style:ridge;';
  readonly solid = 'border-block-end-style:solid;';
  readonly unset = 'border-block-end-style:unset;';
  constructor() {
    super('border-block-end-style');
  }
}

/** CSS 属性 border-block-end-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
 */
export class BorderBlockEndWidthCss extends LengthCssProperty<Property.BorderBlockEndWidth> {
  readonly inherit = 'border-block-end-width:inherit;';
  readonly initial = 'border-block-end-width:initial;';
  readonly medium = 'border-block-end-width:medium;';
  readonly revert = 'border-block-end-width:revert;';
  readonly revertLayer = 'border-block-end-width:revert-layer;';
  readonly thick = 'border-block-end-width:thick;';
  readonly thin = 'border-block-end-width:thin;';
  readonly unset = 'border-block-end-width:unset;';
  constructor() {
    super('border-block-end-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderBlockEndWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockEndWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBlockEndWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockEndWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBlockEndWidth, number> | (string & {}),
    preferred: Extract<Property.BorderBlockEndWidth, number> | (string & {}),
    maximum: Extract<Property.BorderBlockEndWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-block-start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
 */
export class BorderBlockStartCss extends LengthCssProperty<Property.BorderBlockStart> {
  readonly AccentColor = 'border-block-start:AccentColor;';
  readonly AccentColorText = 'border-block-start:AccentColorText;';
  readonly ActiveBorder = 'border-block-start:ActiveBorder;';
  readonly ActiveCaption = 'border-block-start:ActiveCaption;';
  readonly ActiveText = 'border-block-start:ActiveText;';
  readonly AppWorkspace = 'border-block-start:AppWorkspace;';
  readonly Background = 'border-block-start:Background;';
  readonly ButtonBorder = 'border-block-start:ButtonBorder;';
  readonly ButtonFace = 'border-block-start:ButtonFace;';
  readonly ButtonHighlight = 'border-block-start:ButtonHighlight;';
  readonly ButtonShadow = 'border-block-start:ButtonShadow;';
  readonly ButtonText = 'border-block-start:ButtonText;';
  readonly Canvas = 'border-block-start:Canvas;';
  readonly CanvasText = 'border-block-start:CanvasText;';
  readonly CaptionText = 'border-block-start:CaptionText;';
  readonly Field = 'border-block-start:Field;';
  readonly FieldText = 'border-block-start:FieldText;';
  readonly GrayText = 'border-block-start:GrayText;';
  readonly Highlight = 'border-block-start:Highlight;';
  readonly HighlightText = 'border-block-start:HighlightText;';
  readonly InactiveBorder = 'border-block-start:InactiveBorder;';
  readonly InactiveCaption = 'border-block-start:InactiveCaption;';
  readonly InactiveCaptionText = 'border-block-start:InactiveCaptionText;';
  readonly InfoBackground = 'border-block-start:InfoBackground;';
  readonly InfoText = 'border-block-start:InfoText;';
  readonly LinkText = 'border-block-start:LinkText;';
  readonly Mark = 'border-block-start:Mark;';
  readonly MarkText = 'border-block-start:MarkText;';
  readonly Menu = 'border-block-start:Menu;';
  readonly MenuText = 'border-block-start:MenuText;';
  readonly Scrollbar = 'border-block-start:Scrollbar;';
  readonly SelectedItem = 'border-block-start:SelectedItem;';
  readonly SelectedItemText = 'border-block-start:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-block-start:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-block-start:ThreeDFace;';
  readonly ThreeDHighlight = 'border-block-start:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-block-start:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-block-start:ThreeDShadow;';
  readonly VisitedText = 'border-block-start:VisitedText;';
  readonly Window = 'border-block-start:Window;';
  readonly WindowFrame = 'border-block-start:WindowFrame;';
  readonly WindowText = 'border-block-start:WindowText;';
  readonly aliceblue = 'border-block-start:aliceblue;';
  readonly antiquewhite = 'border-block-start:antiquewhite;';
  readonly aqua = 'border-block-start:aqua;';
  readonly aquamarine = 'border-block-start:aquamarine;';
  readonly azure = 'border-block-start:azure;';
  readonly beige = 'border-block-start:beige;';
  readonly bisque = 'border-block-start:bisque;';
  readonly black = 'border-block-start:black;';
  readonly blanchedalmond = 'border-block-start:blanchedalmond;';
  readonly blue = 'border-block-start:blue;';
  readonly blueviolet = 'border-block-start:blueviolet;';
  readonly brown = 'border-block-start:brown;';
  readonly burlywood = 'border-block-start:burlywood;';
  readonly cadetblue = 'border-block-start:cadetblue;';
  readonly chartreuse = 'border-block-start:chartreuse;';
  readonly chocolate = 'border-block-start:chocolate;';
  readonly coral = 'border-block-start:coral;';
  readonly cornflowerblue = 'border-block-start:cornflowerblue;';
  readonly cornsilk = 'border-block-start:cornsilk;';
  readonly crimson = 'border-block-start:crimson;';
  readonly currentColor = 'border-block-start:currentColor;';
  readonly cyan = 'border-block-start:cyan;';
  readonly darkblue = 'border-block-start:darkblue;';
  readonly darkcyan = 'border-block-start:darkcyan;';
  readonly darkgoldenrod = 'border-block-start:darkgoldenrod;';
  readonly darkgray = 'border-block-start:darkgray;';
  readonly darkgreen = 'border-block-start:darkgreen;';
  readonly darkgrey = 'border-block-start:darkgrey;';
  readonly darkkhaki = 'border-block-start:darkkhaki;';
  readonly darkmagenta = 'border-block-start:darkmagenta;';
  readonly darkolivegreen = 'border-block-start:darkolivegreen;';
  readonly darkorange = 'border-block-start:darkorange;';
  readonly darkorchid = 'border-block-start:darkorchid;';
  readonly darkred = 'border-block-start:darkred;';
  readonly darksalmon = 'border-block-start:darksalmon;';
  readonly darkseagreen = 'border-block-start:darkseagreen;';
  readonly darkslateblue = 'border-block-start:darkslateblue;';
  readonly darkslategray = 'border-block-start:darkslategray;';
  readonly darkslategrey = 'border-block-start:darkslategrey;';
  readonly darkturquoise = 'border-block-start:darkturquoise;';
  readonly darkviolet = 'border-block-start:darkviolet;';
  readonly dashed = 'border-block-start:dashed;';
  readonly deeppink = 'border-block-start:deeppink;';
  readonly deepskyblue = 'border-block-start:deepskyblue;';
  readonly dimgray = 'border-block-start:dimgray;';
  readonly dimgrey = 'border-block-start:dimgrey;';
  readonly dodgerblue = 'border-block-start:dodgerblue;';
  readonly dotted = 'border-block-start:dotted;';
  readonly double = 'border-block-start:double;';
  readonly firebrick = 'border-block-start:firebrick;';
  readonly floralwhite = 'border-block-start:floralwhite;';
  readonly forestgreen = 'border-block-start:forestgreen;';
  readonly fuchsia = 'border-block-start:fuchsia;';
  readonly gainsboro = 'border-block-start:gainsboro;';
  readonly ghostwhite = 'border-block-start:ghostwhite;';
  readonly gold = 'border-block-start:gold;';
  readonly goldenrod = 'border-block-start:goldenrod;';
  readonly gray = 'border-block-start:gray;';
  readonly green = 'border-block-start:green;';
  readonly greenyellow = 'border-block-start:greenyellow;';
  readonly grey = 'border-block-start:grey;';
  readonly groove = 'border-block-start:groove;';
  readonly hidden = 'border-block-start:hidden;';
  readonly honeydew = 'border-block-start:honeydew;';
  readonly hotpink = 'border-block-start:hotpink;';
  readonly indianred = 'border-block-start:indianred;';
  readonly indigo = 'border-block-start:indigo;';
  readonly inherit = 'border-block-start:inherit;';
  readonly initial = 'border-block-start:initial;';
  readonly inset = 'border-block-start:inset;';
  readonly ivory = 'border-block-start:ivory;';
  readonly khaki = 'border-block-start:khaki;';
  readonly lavender = 'border-block-start:lavender;';
  readonly lavenderblush = 'border-block-start:lavenderblush;';
  readonly lawngreen = 'border-block-start:lawngreen;';
  readonly lemonchiffon = 'border-block-start:lemonchiffon;';
  readonly lightblue = 'border-block-start:lightblue;';
  readonly lightcoral = 'border-block-start:lightcoral;';
  readonly lightcyan = 'border-block-start:lightcyan;';
  readonly lightgoldenrodyellow = 'border-block-start:lightgoldenrodyellow;';
  readonly lightgray = 'border-block-start:lightgray;';
  readonly lightgreen = 'border-block-start:lightgreen;';
  readonly lightgrey = 'border-block-start:lightgrey;';
  readonly lightpink = 'border-block-start:lightpink;';
  readonly lightsalmon = 'border-block-start:lightsalmon;';
  readonly lightseagreen = 'border-block-start:lightseagreen;';
  readonly lightskyblue = 'border-block-start:lightskyblue;';
  readonly lightslategray = 'border-block-start:lightslategray;';
  readonly lightslategrey = 'border-block-start:lightslategrey;';
  readonly lightsteelblue = 'border-block-start:lightsteelblue;';
  readonly lightyellow = 'border-block-start:lightyellow;';
  readonly lime = 'border-block-start:lime;';
  readonly limegreen = 'border-block-start:limegreen;';
  readonly linen = 'border-block-start:linen;';
  readonly magenta = 'border-block-start:magenta;';
  readonly maroon = 'border-block-start:maroon;';
  readonly medium = 'border-block-start:medium;';
  readonly mediumaquamarine = 'border-block-start:mediumaquamarine;';
  readonly mediumblue = 'border-block-start:mediumblue;';
  readonly mediumorchid = 'border-block-start:mediumorchid;';
  readonly mediumpurple = 'border-block-start:mediumpurple;';
  readonly mediumseagreen = 'border-block-start:mediumseagreen;';
  readonly mediumslateblue = 'border-block-start:mediumslateblue;';
  readonly mediumspringgreen = 'border-block-start:mediumspringgreen;';
  readonly mediumturquoise = 'border-block-start:mediumturquoise;';
  readonly mediumvioletred = 'border-block-start:mediumvioletred;';
  readonly midnightblue = 'border-block-start:midnightblue;';
  readonly mintcream = 'border-block-start:mintcream;';
  readonly mistyrose = 'border-block-start:mistyrose;';
  readonly moccasin = 'border-block-start:moccasin;';
  readonly navajowhite = 'border-block-start:navajowhite;';
  readonly navy = 'border-block-start:navy;';
  readonly none = 'border-block-start:none;';
  readonly oldlace = 'border-block-start:oldlace;';
  readonly olive = 'border-block-start:olive;';
  readonly olivedrab = 'border-block-start:olivedrab;';
  readonly orange = 'border-block-start:orange;';
  readonly orangered = 'border-block-start:orangered;';
  readonly orchid = 'border-block-start:orchid;';
  readonly outset = 'border-block-start:outset;';
  readonly palegoldenrod = 'border-block-start:palegoldenrod;';
  readonly palegreen = 'border-block-start:palegreen;';
  readonly paleturquoise = 'border-block-start:paleturquoise;';
  readonly palevioletred = 'border-block-start:palevioletred;';
  readonly papayawhip = 'border-block-start:papayawhip;';
  readonly peachpuff = 'border-block-start:peachpuff;';
  readonly peru = 'border-block-start:peru;';
  readonly pink = 'border-block-start:pink;';
  readonly plum = 'border-block-start:plum;';
  readonly powderblue = 'border-block-start:powderblue;';
  readonly purple = 'border-block-start:purple;';
  readonly rebeccapurple = 'border-block-start:rebeccapurple;';
  readonly red = 'border-block-start:red;';
  readonly revert = 'border-block-start:revert;';
  readonly revertLayer = 'border-block-start:revert-layer;';
  readonly ridge = 'border-block-start:ridge;';
  readonly rosybrown = 'border-block-start:rosybrown;';
  readonly royalblue = 'border-block-start:royalblue;';
  readonly saddlebrown = 'border-block-start:saddlebrown;';
  readonly salmon = 'border-block-start:salmon;';
  readonly sandybrown = 'border-block-start:sandybrown;';
  readonly seagreen = 'border-block-start:seagreen;';
  readonly seashell = 'border-block-start:seashell;';
  readonly sienna = 'border-block-start:sienna;';
  readonly silver = 'border-block-start:silver;';
  readonly skyblue = 'border-block-start:skyblue;';
  readonly slateblue = 'border-block-start:slateblue;';
  readonly slategray = 'border-block-start:slategray;';
  readonly slategrey = 'border-block-start:slategrey;';
  readonly snow = 'border-block-start:snow;';
  readonly solid = 'border-block-start:solid;';
  readonly springgreen = 'border-block-start:springgreen;';
  readonly steelblue = 'border-block-start:steelblue;';
  readonly tan = 'border-block-start:tan;';
  readonly teal = 'border-block-start:teal;';
  readonly thick = 'border-block-start:thick;';
  readonly thin = 'border-block-start:thin;';
  readonly thistle = 'border-block-start:thistle;';
  readonly tomato = 'border-block-start:tomato;';
  readonly transparent = 'border-block-start:transparent;';
  readonly turquoise = 'border-block-start:turquoise;';
  readonly unset = 'border-block-start:unset;';
  readonly violet = 'border-block-start:violet;';
  readonly wheat = 'border-block-start:wheat;';
  readonly white = 'border-block-start:white;';
  readonly whitesmoke = 'border-block-start:whitesmoke;';
  readonly yellow = 'border-block-start:yellow;';
  readonly yellowgreen = 'border-block-start:yellowgreen;';
  constructor() {
    super('border-block-start');
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
    value: Extract<Property.BorderBlockStart, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBlockStart, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBlockStart, number> | (string & {}),
    preferred: Extract<Property.BorderBlockStart, number> | (string & {}),
    maximum: Extract<Property.BorderBlockStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-block-start-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
 */
export class BorderBlockStartColorCss extends CssProperty<Property.BorderBlockStartColor> {
  readonly AccentColor = 'border-block-start-color:AccentColor;';
  readonly AccentColorText = 'border-block-start-color:AccentColorText;';
  readonly ActiveBorder = 'border-block-start-color:ActiveBorder;';
  readonly ActiveCaption = 'border-block-start-color:ActiveCaption;';
  readonly ActiveText = 'border-block-start-color:ActiveText;';
  readonly AppWorkspace = 'border-block-start-color:AppWorkspace;';
  readonly Background = 'border-block-start-color:Background;';
  readonly ButtonBorder = 'border-block-start-color:ButtonBorder;';
  readonly ButtonFace = 'border-block-start-color:ButtonFace;';
  readonly ButtonHighlight = 'border-block-start-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-block-start-color:ButtonShadow;';
  readonly ButtonText = 'border-block-start-color:ButtonText;';
  readonly Canvas = 'border-block-start-color:Canvas;';
  readonly CanvasText = 'border-block-start-color:CanvasText;';
  readonly CaptionText = 'border-block-start-color:CaptionText;';
  readonly Field = 'border-block-start-color:Field;';
  readonly FieldText = 'border-block-start-color:FieldText;';
  readonly GrayText = 'border-block-start-color:GrayText;';
  readonly Highlight = 'border-block-start-color:Highlight;';
  readonly HighlightText = 'border-block-start-color:HighlightText;';
  readonly InactiveBorder = 'border-block-start-color:InactiveBorder;';
  readonly InactiveCaption = 'border-block-start-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-block-start-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-block-start-color:InfoBackground;';
  readonly InfoText = 'border-block-start-color:InfoText;';
  readonly LinkText = 'border-block-start-color:LinkText;';
  readonly Mark = 'border-block-start-color:Mark;';
  readonly MarkText = 'border-block-start-color:MarkText;';
  readonly Menu = 'border-block-start-color:Menu;';
  readonly MenuText = 'border-block-start-color:MenuText;';
  readonly Scrollbar = 'border-block-start-color:Scrollbar;';
  readonly SelectedItem = 'border-block-start-color:SelectedItem;';
  readonly SelectedItemText = 'border-block-start-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-block-start-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-block-start-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-block-start-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-block-start-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-block-start-color:ThreeDShadow;';
  readonly VisitedText = 'border-block-start-color:VisitedText;';
  readonly Window = 'border-block-start-color:Window;';
  readonly WindowFrame = 'border-block-start-color:WindowFrame;';
  readonly WindowText = 'border-block-start-color:WindowText;';
  readonly aliceblue = 'border-block-start-color:aliceblue;';
  readonly antiquewhite = 'border-block-start-color:antiquewhite;';
  readonly aqua = 'border-block-start-color:aqua;';
  readonly aquamarine = 'border-block-start-color:aquamarine;';
  readonly azure = 'border-block-start-color:azure;';
  readonly beige = 'border-block-start-color:beige;';
  readonly bisque = 'border-block-start-color:bisque;';
  readonly black = 'border-block-start-color:black;';
  readonly blanchedalmond = 'border-block-start-color:blanchedalmond;';
  readonly blue = 'border-block-start-color:blue;';
  readonly blueviolet = 'border-block-start-color:blueviolet;';
  readonly brown = 'border-block-start-color:brown;';
  readonly burlywood = 'border-block-start-color:burlywood;';
  readonly cadetblue = 'border-block-start-color:cadetblue;';
  readonly chartreuse = 'border-block-start-color:chartreuse;';
  readonly chocolate = 'border-block-start-color:chocolate;';
  readonly coral = 'border-block-start-color:coral;';
  readonly cornflowerblue = 'border-block-start-color:cornflowerblue;';
  readonly cornsilk = 'border-block-start-color:cornsilk;';
  readonly crimson = 'border-block-start-color:crimson;';
  readonly currentColor = 'border-block-start-color:currentColor;';
  readonly cyan = 'border-block-start-color:cyan;';
  readonly darkblue = 'border-block-start-color:darkblue;';
  readonly darkcyan = 'border-block-start-color:darkcyan;';
  readonly darkgoldenrod = 'border-block-start-color:darkgoldenrod;';
  readonly darkgray = 'border-block-start-color:darkgray;';
  readonly darkgreen = 'border-block-start-color:darkgreen;';
  readonly darkgrey = 'border-block-start-color:darkgrey;';
  readonly darkkhaki = 'border-block-start-color:darkkhaki;';
  readonly darkmagenta = 'border-block-start-color:darkmagenta;';
  readonly darkolivegreen = 'border-block-start-color:darkolivegreen;';
  readonly darkorange = 'border-block-start-color:darkorange;';
  readonly darkorchid = 'border-block-start-color:darkorchid;';
  readonly darkred = 'border-block-start-color:darkred;';
  readonly darksalmon = 'border-block-start-color:darksalmon;';
  readonly darkseagreen = 'border-block-start-color:darkseagreen;';
  readonly darkslateblue = 'border-block-start-color:darkslateblue;';
  readonly darkslategray = 'border-block-start-color:darkslategray;';
  readonly darkslategrey = 'border-block-start-color:darkslategrey;';
  readonly darkturquoise = 'border-block-start-color:darkturquoise;';
  readonly darkviolet = 'border-block-start-color:darkviolet;';
  readonly deeppink = 'border-block-start-color:deeppink;';
  readonly deepskyblue = 'border-block-start-color:deepskyblue;';
  readonly dimgray = 'border-block-start-color:dimgray;';
  readonly dimgrey = 'border-block-start-color:dimgrey;';
  readonly dodgerblue = 'border-block-start-color:dodgerblue;';
  readonly firebrick = 'border-block-start-color:firebrick;';
  readonly floralwhite = 'border-block-start-color:floralwhite;';
  readonly forestgreen = 'border-block-start-color:forestgreen;';
  readonly fuchsia = 'border-block-start-color:fuchsia;';
  readonly gainsboro = 'border-block-start-color:gainsboro;';
  readonly ghostwhite = 'border-block-start-color:ghostwhite;';
  readonly gold = 'border-block-start-color:gold;';
  readonly goldenrod = 'border-block-start-color:goldenrod;';
  readonly gray = 'border-block-start-color:gray;';
  readonly green = 'border-block-start-color:green;';
  readonly greenyellow = 'border-block-start-color:greenyellow;';
  readonly grey = 'border-block-start-color:grey;';
  readonly honeydew = 'border-block-start-color:honeydew;';
  readonly hotpink = 'border-block-start-color:hotpink;';
  readonly indianred = 'border-block-start-color:indianred;';
  readonly indigo = 'border-block-start-color:indigo;';
  readonly inherit = 'border-block-start-color:inherit;';
  readonly initial = 'border-block-start-color:initial;';
  readonly ivory = 'border-block-start-color:ivory;';
  readonly khaki = 'border-block-start-color:khaki;';
  readonly lavender = 'border-block-start-color:lavender;';
  readonly lavenderblush = 'border-block-start-color:lavenderblush;';
  readonly lawngreen = 'border-block-start-color:lawngreen;';
  readonly lemonchiffon = 'border-block-start-color:lemonchiffon;';
  readonly lightblue = 'border-block-start-color:lightblue;';
  readonly lightcoral = 'border-block-start-color:lightcoral;';
  readonly lightcyan = 'border-block-start-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-block-start-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-block-start-color:lightgray;';
  readonly lightgreen = 'border-block-start-color:lightgreen;';
  readonly lightgrey = 'border-block-start-color:lightgrey;';
  readonly lightpink = 'border-block-start-color:lightpink;';
  readonly lightsalmon = 'border-block-start-color:lightsalmon;';
  readonly lightseagreen = 'border-block-start-color:lightseagreen;';
  readonly lightskyblue = 'border-block-start-color:lightskyblue;';
  readonly lightslategray = 'border-block-start-color:lightslategray;';
  readonly lightslategrey = 'border-block-start-color:lightslategrey;';
  readonly lightsteelblue = 'border-block-start-color:lightsteelblue;';
  readonly lightyellow = 'border-block-start-color:lightyellow;';
  readonly lime = 'border-block-start-color:lime;';
  readonly limegreen = 'border-block-start-color:limegreen;';
  readonly linen = 'border-block-start-color:linen;';
  readonly magenta = 'border-block-start-color:magenta;';
  readonly maroon = 'border-block-start-color:maroon;';
  readonly mediumaquamarine = 'border-block-start-color:mediumaquamarine;';
  readonly mediumblue = 'border-block-start-color:mediumblue;';
  readonly mediumorchid = 'border-block-start-color:mediumorchid;';
  readonly mediumpurple = 'border-block-start-color:mediumpurple;';
  readonly mediumseagreen = 'border-block-start-color:mediumseagreen;';
  readonly mediumslateblue = 'border-block-start-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-block-start-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-block-start-color:mediumturquoise;';
  readonly mediumvioletred = 'border-block-start-color:mediumvioletred;';
  readonly midnightblue = 'border-block-start-color:midnightblue;';
  readonly mintcream = 'border-block-start-color:mintcream;';
  readonly mistyrose = 'border-block-start-color:mistyrose;';
  readonly moccasin = 'border-block-start-color:moccasin;';
  readonly navajowhite = 'border-block-start-color:navajowhite;';
  readonly navy = 'border-block-start-color:navy;';
  readonly oldlace = 'border-block-start-color:oldlace;';
  readonly olive = 'border-block-start-color:olive;';
  readonly olivedrab = 'border-block-start-color:olivedrab;';
  readonly orange = 'border-block-start-color:orange;';
  readonly orangered = 'border-block-start-color:orangered;';
  readonly orchid = 'border-block-start-color:orchid;';
  readonly palegoldenrod = 'border-block-start-color:palegoldenrod;';
  readonly palegreen = 'border-block-start-color:palegreen;';
  readonly paleturquoise = 'border-block-start-color:paleturquoise;';
  readonly palevioletred = 'border-block-start-color:palevioletred;';
  readonly papayawhip = 'border-block-start-color:papayawhip;';
  readonly peachpuff = 'border-block-start-color:peachpuff;';
  readonly peru = 'border-block-start-color:peru;';
  readonly pink = 'border-block-start-color:pink;';
  readonly plum = 'border-block-start-color:plum;';
  readonly powderblue = 'border-block-start-color:powderblue;';
  readonly purple = 'border-block-start-color:purple;';
  readonly rebeccapurple = 'border-block-start-color:rebeccapurple;';
  readonly red = 'border-block-start-color:red;';
  readonly revert = 'border-block-start-color:revert;';
  readonly revertLayer = 'border-block-start-color:revert-layer;';
  readonly rosybrown = 'border-block-start-color:rosybrown;';
  readonly royalblue = 'border-block-start-color:royalblue;';
  readonly saddlebrown = 'border-block-start-color:saddlebrown;';
  readonly salmon = 'border-block-start-color:salmon;';
  readonly sandybrown = 'border-block-start-color:sandybrown;';
  readonly seagreen = 'border-block-start-color:seagreen;';
  readonly seashell = 'border-block-start-color:seashell;';
  readonly sienna = 'border-block-start-color:sienna;';
  readonly silver = 'border-block-start-color:silver;';
  readonly skyblue = 'border-block-start-color:skyblue;';
  readonly slateblue = 'border-block-start-color:slateblue;';
  readonly slategray = 'border-block-start-color:slategray;';
  readonly slategrey = 'border-block-start-color:slategrey;';
  readonly snow = 'border-block-start-color:snow;';
  readonly springgreen = 'border-block-start-color:springgreen;';
  readonly steelblue = 'border-block-start-color:steelblue;';
  readonly tan = 'border-block-start-color:tan;';
  readonly teal = 'border-block-start-color:teal;';
  readonly thistle = 'border-block-start-color:thistle;';
  readonly tomato = 'border-block-start-color:tomato;';
  readonly transparent = 'border-block-start-color:transparent;';
  readonly turquoise = 'border-block-start-color:turquoise;';
  readonly unset = 'border-block-start-color:unset;';
  readonly violet = 'border-block-start-color:violet;';
  readonly wheat = 'border-block-start-color:wheat;';
  readonly white = 'border-block-start-color:white;';
  readonly whitesmoke = 'border-block-start-color:whitesmoke;';
  readonly yellow = 'border-block-start-color:yellow;';
  readonly yellowgreen = 'border-block-start-color:yellowgreen;';
  constructor() {
    super('border-block-start-color');
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

/** CSS 属性 border-block-start-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
 */
export class BorderBlockStartStyleCss extends CssProperty<Property.BorderBlockStartStyle> {
  readonly dashed = 'border-block-start-style:dashed;';
  readonly dotted = 'border-block-start-style:dotted;';
  readonly double = 'border-block-start-style:double;';
  readonly groove = 'border-block-start-style:groove;';
  readonly hidden = 'border-block-start-style:hidden;';
  readonly inherit = 'border-block-start-style:inherit;';
  readonly initial = 'border-block-start-style:initial;';
  readonly inset = 'border-block-start-style:inset;';
  readonly none = 'border-block-start-style:none;';
  readonly outset = 'border-block-start-style:outset;';
  readonly revert = 'border-block-start-style:revert;';
  readonly revertLayer = 'border-block-start-style:revert-layer;';
  readonly ridge = 'border-block-start-style:ridge;';
  readonly solid = 'border-block-start-style:solid;';
  readonly unset = 'border-block-start-style:unset;';
  constructor() {
    super('border-block-start-style');
  }
}

/** CSS 属性 border-block-start-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
 */
export class BorderBlockStartWidthCss extends LengthCssProperty<Property.BorderBlockStartWidth> {
  readonly inherit = 'border-block-start-width:inherit;';
  readonly initial = 'border-block-start-width:initial;';
  readonly medium = 'border-block-start-width:medium;';
  readonly revert = 'border-block-start-width:revert;';
  readonly revertLayer = 'border-block-start-width:revert-layer;';
  readonly thick = 'border-block-start-width:thick;';
  readonly thin = 'border-block-start-width:thin;';
  readonly unset = 'border-block-start-width:unset;';
  constructor() {
    super('border-block-start-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderBlockStartWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockStartWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBlockStartWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockStartWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBlockStartWidth, number> | (string & {}),
    preferred: Extract<Property.BorderBlockStartWidth, number> | (string & {}),
    maximum: Extract<Property.BorderBlockStartWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-block-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
 */
export class BorderBlockStyleCss extends CssProperty<Property.BorderBlockStyle> {
  readonly dashed = 'border-block-style:dashed;';
  readonly dotted = 'border-block-style:dotted;';
  readonly double = 'border-block-style:double;';
  readonly groove = 'border-block-style:groove;';
  readonly hidden = 'border-block-style:hidden;';
  readonly inherit = 'border-block-style:inherit;';
  readonly initial = 'border-block-style:initial;';
  readonly inset = 'border-block-style:inset;';
  readonly none = 'border-block-style:none;';
  readonly outset = 'border-block-style:outset;';
  readonly revert = 'border-block-style:revert;';
  readonly revertLayer = 'border-block-style:revert-layer;';
  readonly ridge = 'border-block-style:ridge;';
  readonly solid = 'border-block-style:solid;';
  readonly unset = 'border-block-style:unset;';
  constructor() {
    super('border-block-style');
  }
}

/** CSS 属性 border-block-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
 */
export class BorderBlockWidthCss extends LengthCssProperty<Property.BorderBlockWidth> {
  readonly inherit = 'border-block-width:inherit;';
  readonly initial = 'border-block-width:initial;';
  readonly medium = 'border-block-width:medium;';
  readonly revert = 'border-block-width:revert;';
  readonly revertLayer = 'border-block-width:revert-layer;';
  readonly thick = 'border-block-width:thick;';
  readonly thin = 'border-block-width:thin;';
  readonly unset = 'border-block-width:unset;';
  constructor() {
    super('border-block-width');
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
    value: Extract<Property.BorderBlockWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBlockWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBlockWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBlockWidth, number> | (string & {}),
    preferred: Extract<Property.BorderBlockWidth, number> | (string & {}),
    maximum: Extract<Property.BorderBlockWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-bottom。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
 */
export class BorderBottomCss extends LengthCssProperty<Property.BorderBottom> {
  readonly AccentColor = 'border-bottom:AccentColor;';
  readonly AccentColorText = 'border-bottom:AccentColorText;';
  readonly ActiveBorder = 'border-bottom:ActiveBorder;';
  readonly ActiveCaption = 'border-bottom:ActiveCaption;';
  readonly ActiveText = 'border-bottom:ActiveText;';
  readonly AppWorkspace = 'border-bottom:AppWorkspace;';
  readonly Background = 'border-bottom:Background;';
  readonly ButtonBorder = 'border-bottom:ButtonBorder;';
  readonly ButtonFace = 'border-bottom:ButtonFace;';
  readonly ButtonHighlight = 'border-bottom:ButtonHighlight;';
  readonly ButtonShadow = 'border-bottom:ButtonShadow;';
  readonly ButtonText = 'border-bottom:ButtonText;';
  readonly Canvas = 'border-bottom:Canvas;';
  readonly CanvasText = 'border-bottom:CanvasText;';
  readonly CaptionText = 'border-bottom:CaptionText;';
  readonly Field = 'border-bottom:Field;';
  readonly FieldText = 'border-bottom:FieldText;';
  readonly GrayText = 'border-bottom:GrayText;';
  readonly Highlight = 'border-bottom:Highlight;';
  readonly HighlightText = 'border-bottom:HighlightText;';
  readonly InactiveBorder = 'border-bottom:InactiveBorder;';
  readonly InactiveCaption = 'border-bottom:InactiveCaption;';
  readonly InactiveCaptionText = 'border-bottom:InactiveCaptionText;';
  readonly InfoBackground = 'border-bottom:InfoBackground;';
  readonly InfoText = 'border-bottom:InfoText;';
  readonly LinkText = 'border-bottom:LinkText;';
  readonly Mark = 'border-bottom:Mark;';
  readonly MarkText = 'border-bottom:MarkText;';
  readonly Menu = 'border-bottom:Menu;';
  readonly MenuText = 'border-bottom:MenuText;';
  readonly Scrollbar = 'border-bottom:Scrollbar;';
  readonly SelectedItem = 'border-bottom:SelectedItem;';
  readonly SelectedItemText = 'border-bottom:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-bottom:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-bottom:ThreeDFace;';
  readonly ThreeDHighlight = 'border-bottom:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-bottom:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-bottom:ThreeDShadow;';
  readonly VisitedText = 'border-bottom:VisitedText;';
  readonly Window = 'border-bottom:Window;';
  readonly WindowFrame = 'border-bottom:WindowFrame;';
  readonly WindowText = 'border-bottom:WindowText;';
  readonly aliceblue = 'border-bottom:aliceblue;';
  readonly antiquewhite = 'border-bottom:antiquewhite;';
  readonly aqua = 'border-bottom:aqua;';
  readonly aquamarine = 'border-bottom:aquamarine;';
  readonly azure = 'border-bottom:azure;';
  readonly beige = 'border-bottom:beige;';
  readonly bisque = 'border-bottom:bisque;';
  readonly black = 'border-bottom:black;';
  readonly blanchedalmond = 'border-bottom:blanchedalmond;';
  readonly blue = 'border-bottom:blue;';
  readonly blueviolet = 'border-bottom:blueviolet;';
  readonly brown = 'border-bottom:brown;';
  readonly burlywood = 'border-bottom:burlywood;';
  readonly cadetblue = 'border-bottom:cadetblue;';
  readonly chartreuse = 'border-bottom:chartreuse;';
  readonly chocolate = 'border-bottom:chocolate;';
  readonly coral = 'border-bottom:coral;';
  readonly cornflowerblue = 'border-bottom:cornflowerblue;';
  readonly cornsilk = 'border-bottom:cornsilk;';
  readonly crimson = 'border-bottom:crimson;';
  readonly currentColor = 'border-bottom:currentColor;';
  readonly cyan = 'border-bottom:cyan;';
  readonly darkblue = 'border-bottom:darkblue;';
  readonly darkcyan = 'border-bottom:darkcyan;';
  readonly darkgoldenrod = 'border-bottom:darkgoldenrod;';
  readonly darkgray = 'border-bottom:darkgray;';
  readonly darkgreen = 'border-bottom:darkgreen;';
  readonly darkgrey = 'border-bottom:darkgrey;';
  readonly darkkhaki = 'border-bottom:darkkhaki;';
  readonly darkmagenta = 'border-bottom:darkmagenta;';
  readonly darkolivegreen = 'border-bottom:darkolivegreen;';
  readonly darkorange = 'border-bottom:darkorange;';
  readonly darkorchid = 'border-bottom:darkorchid;';
  readonly darkred = 'border-bottom:darkred;';
  readonly darksalmon = 'border-bottom:darksalmon;';
  readonly darkseagreen = 'border-bottom:darkseagreen;';
  readonly darkslateblue = 'border-bottom:darkslateblue;';
  readonly darkslategray = 'border-bottom:darkslategray;';
  readonly darkslategrey = 'border-bottom:darkslategrey;';
  readonly darkturquoise = 'border-bottom:darkturquoise;';
  readonly darkviolet = 'border-bottom:darkviolet;';
  readonly dashed = 'border-bottom:dashed;';
  readonly deeppink = 'border-bottom:deeppink;';
  readonly deepskyblue = 'border-bottom:deepskyblue;';
  readonly dimgray = 'border-bottom:dimgray;';
  readonly dimgrey = 'border-bottom:dimgrey;';
  readonly dodgerblue = 'border-bottom:dodgerblue;';
  readonly dotted = 'border-bottom:dotted;';
  readonly double = 'border-bottom:double;';
  readonly firebrick = 'border-bottom:firebrick;';
  readonly floralwhite = 'border-bottom:floralwhite;';
  readonly forestgreen = 'border-bottom:forestgreen;';
  readonly fuchsia = 'border-bottom:fuchsia;';
  readonly gainsboro = 'border-bottom:gainsboro;';
  readonly ghostwhite = 'border-bottom:ghostwhite;';
  readonly gold = 'border-bottom:gold;';
  readonly goldenrod = 'border-bottom:goldenrod;';
  readonly gray = 'border-bottom:gray;';
  readonly green = 'border-bottom:green;';
  readonly greenyellow = 'border-bottom:greenyellow;';
  readonly grey = 'border-bottom:grey;';
  readonly groove = 'border-bottom:groove;';
  readonly hidden = 'border-bottom:hidden;';
  readonly honeydew = 'border-bottom:honeydew;';
  readonly hotpink = 'border-bottom:hotpink;';
  readonly indianred = 'border-bottom:indianred;';
  readonly indigo = 'border-bottom:indigo;';
  readonly inherit = 'border-bottom:inherit;';
  readonly initial = 'border-bottom:initial;';
  readonly inset = 'border-bottom:inset;';
  readonly ivory = 'border-bottom:ivory;';
  readonly khaki = 'border-bottom:khaki;';
  readonly lavender = 'border-bottom:lavender;';
  readonly lavenderblush = 'border-bottom:lavenderblush;';
  readonly lawngreen = 'border-bottom:lawngreen;';
  readonly lemonchiffon = 'border-bottom:lemonchiffon;';
  readonly lightblue = 'border-bottom:lightblue;';
  readonly lightcoral = 'border-bottom:lightcoral;';
  readonly lightcyan = 'border-bottom:lightcyan;';
  readonly lightgoldenrodyellow = 'border-bottom:lightgoldenrodyellow;';
  readonly lightgray = 'border-bottom:lightgray;';
  readonly lightgreen = 'border-bottom:lightgreen;';
  readonly lightgrey = 'border-bottom:lightgrey;';
  readonly lightpink = 'border-bottom:lightpink;';
  readonly lightsalmon = 'border-bottom:lightsalmon;';
  readonly lightseagreen = 'border-bottom:lightseagreen;';
  readonly lightskyblue = 'border-bottom:lightskyblue;';
  readonly lightslategray = 'border-bottom:lightslategray;';
  readonly lightslategrey = 'border-bottom:lightslategrey;';
  readonly lightsteelblue = 'border-bottom:lightsteelblue;';
  readonly lightyellow = 'border-bottom:lightyellow;';
  readonly lime = 'border-bottom:lime;';
  readonly limegreen = 'border-bottom:limegreen;';
  readonly linen = 'border-bottom:linen;';
  readonly magenta = 'border-bottom:magenta;';
  readonly maroon = 'border-bottom:maroon;';
  readonly medium = 'border-bottom:medium;';
  readonly mediumaquamarine = 'border-bottom:mediumaquamarine;';
  readonly mediumblue = 'border-bottom:mediumblue;';
  readonly mediumorchid = 'border-bottom:mediumorchid;';
  readonly mediumpurple = 'border-bottom:mediumpurple;';
  readonly mediumseagreen = 'border-bottom:mediumseagreen;';
  readonly mediumslateblue = 'border-bottom:mediumslateblue;';
  readonly mediumspringgreen = 'border-bottom:mediumspringgreen;';
  readonly mediumturquoise = 'border-bottom:mediumturquoise;';
  readonly mediumvioletred = 'border-bottom:mediumvioletred;';
  readonly midnightblue = 'border-bottom:midnightblue;';
  readonly mintcream = 'border-bottom:mintcream;';
  readonly mistyrose = 'border-bottom:mistyrose;';
  readonly moccasin = 'border-bottom:moccasin;';
  readonly navajowhite = 'border-bottom:navajowhite;';
  readonly navy = 'border-bottom:navy;';
  readonly none = 'border-bottom:none;';
  readonly oldlace = 'border-bottom:oldlace;';
  readonly olive = 'border-bottom:olive;';
  readonly olivedrab = 'border-bottom:olivedrab;';
  readonly orange = 'border-bottom:orange;';
  readonly orangered = 'border-bottom:orangered;';
  readonly orchid = 'border-bottom:orchid;';
  readonly outset = 'border-bottom:outset;';
  readonly palegoldenrod = 'border-bottom:palegoldenrod;';
  readonly palegreen = 'border-bottom:palegreen;';
  readonly paleturquoise = 'border-bottom:paleturquoise;';
  readonly palevioletred = 'border-bottom:palevioletred;';
  readonly papayawhip = 'border-bottom:papayawhip;';
  readonly peachpuff = 'border-bottom:peachpuff;';
  readonly peru = 'border-bottom:peru;';
  readonly pink = 'border-bottom:pink;';
  readonly plum = 'border-bottom:plum;';
  readonly powderblue = 'border-bottom:powderblue;';
  readonly purple = 'border-bottom:purple;';
  readonly rebeccapurple = 'border-bottom:rebeccapurple;';
  readonly red = 'border-bottom:red;';
  readonly revert = 'border-bottom:revert;';
  readonly revertLayer = 'border-bottom:revert-layer;';
  readonly ridge = 'border-bottom:ridge;';
  readonly rosybrown = 'border-bottom:rosybrown;';
  readonly royalblue = 'border-bottom:royalblue;';
  readonly saddlebrown = 'border-bottom:saddlebrown;';
  readonly salmon = 'border-bottom:salmon;';
  readonly sandybrown = 'border-bottom:sandybrown;';
  readonly seagreen = 'border-bottom:seagreen;';
  readonly seashell = 'border-bottom:seashell;';
  readonly sienna = 'border-bottom:sienna;';
  readonly silver = 'border-bottom:silver;';
  readonly skyblue = 'border-bottom:skyblue;';
  readonly slateblue = 'border-bottom:slateblue;';
  readonly slategray = 'border-bottom:slategray;';
  readonly slategrey = 'border-bottom:slategrey;';
  readonly snow = 'border-bottom:snow;';
  readonly solid = 'border-bottom:solid;';
  readonly springgreen = 'border-bottom:springgreen;';
  readonly steelblue = 'border-bottom:steelblue;';
  readonly tan = 'border-bottom:tan;';
  readonly teal = 'border-bottom:teal;';
  readonly thick = 'border-bottom:thick;';
  readonly thin = 'border-bottom:thin;';
  readonly thistle = 'border-bottom:thistle;';
  readonly tomato = 'border-bottom:tomato;';
  readonly transparent = 'border-bottom:transparent;';
  readonly turquoise = 'border-bottom:turquoise;';
  readonly unset = 'border-bottom:unset;';
  readonly violet = 'border-bottom:violet;';
  readonly wheat = 'border-bottom:wheat;';
  readonly white = 'border-bottom:white;';
  readonly whitesmoke = 'border-bottom:whitesmoke;';
  readonly yellow = 'border-bottom:yellow;';
  readonly yellowgreen = 'border-bottom:yellowgreen;';
  constructor() {
    super('border-bottom');
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
    value: Extract<Property.BorderBottom, number> | (string & {}),
    ...others: (Extract<Property.BorderBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBottom, number> | (string & {}),
    ...others: (Extract<Property.BorderBottom, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBottom, number> | (string & {}),
    preferred: Extract<Property.BorderBottom, number> | (string & {}),
    maximum: Extract<Property.BorderBottom, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-bottom-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
 */
export class BorderBottomColorCss extends CssProperty<Property.BorderBottomColor> {
  readonly AccentColor = 'border-bottom-color:AccentColor;';
  readonly AccentColorText = 'border-bottom-color:AccentColorText;';
  readonly ActiveBorder = 'border-bottom-color:ActiveBorder;';
  readonly ActiveCaption = 'border-bottom-color:ActiveCaption;';
  readonly ActiveText = 'border-bottom-color:ActiveText;';
  readonly AppWorkspace = 'border-bottom-color:AppWorkspace;';
  readonly Background = 'border-bottom-color:Background;';
  readonly ButtonBorder = 'border-bottom-color:ButtonBorder;';
  readonly ButtonFace = 'border-bottom-color:ButtonFace;';
  readonly ButtonHighlight = 'border-bottom-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-bottom-color:ButtonShadow;';
  readonly ButtonText = 'border-bottom-color:ButtonText;';
  readonly Canvas = 'border-bottom-color:Canvas;';
  readonly CanvasText = 'border-bottom-color:CanvasText;';
  readonly CaptionText = 'border-bottom-color:CaptionText;';
  readonly Field = 'border-bottom-color:Field;';
  readonly FieldText = 'border-bottom-color:FieldText;';
  readonly GrayText = 'border-bottom-color:GrayText;';
  readonly Highlight = 'border-bottom-color:Highlight;';
  readonly HighlightText = 'border-bottom-color:HighlightText;';
  readonly InactiveBorder = 'border-bottom-color:InactiveBorder;';
  readonly InactiveCaption = 'border-bottom-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-bottom-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-bottom-color:InfoBackground;';
  readonly InfoText = 'border-bottom-color:InfoText;';
  readonly LinkText = 'border-bottom-color:LinkText;';
  readonly Mark = 'border-bottom-color:Mark;';
  readonly MarkText = 'border-bottom-color:MarkText;';
  readonly Menu = 'border-bottom-color:Menu;';
  readonly MenuText = 'border-bottom-color:MenuText;';
  readonly Scrollbar = 'border-bottom-color:Scrollbar;';
  readonly SelectedItem = 'border-bottom-color:SelectedItem;';
  readonly SelectedItemText = 'border-bottom-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-bottom-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-bottom-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-bottom-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-bottom-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-bottom-color:ThreeDShadow;';
  readonly VisitedText = 'border-bottom-color:VisitedText;';
  readonly Window = 'border-bottom-color:Window;';
  readonly WindowFrame = 'border-bottom-color:WindowFrame;';
  readonly WindowText = 'border-bottom-color:WindowText;';
  readonly aliceblue = 'border-bottom-color:aliceblue;';
  readonly antiquewhite = 'border-bottom-color:antiquewhite;';
  readonly aqua = 'border-bottom-color:aqua;';
  readonly aquamarine = 'border-bottom-color:aquamarine;';
  readonly azure = 'border-bottom-color:azure;';
  readonly beige = 'border-bottom-color:beige;';
  readonly bisque = 'border-bottom-color:bisque;';
  readonly black = 'border-bottom-color:black;';
  readonly blanchedalmond = 'border-bottom-color:blanchedalmond;';
  readonly blue = 'border-bottom-color:blue;';
  readonly blueviolet = 'border-bottom-color:blueviolet;';
  readonly brown = 'border-bottom-color:brown;';
  readonly burlywood = 'border-bottom-color:burlywood;';
  readonly cadetblue = 'border-bottom-color:cadetblue;';
  readonly chartreuse = 'border-bottom-color:chartreuse;';
  readonly chocolate = 'border-bottom-color:chocolate;';
  readonly coral = 'border-bottom-color:coral;';
  readonly cornflowerblue = 'border-bottom-color:cornflowerblue;';
  readonly cornsilk = 'border-bottom-color:cornsilk;';
  readonly crimson = 'border-bottom-color:crimson;';
  readonly currentColor = 'border-bottom-color:currentColor;';
  readonly cyan = 'border-bottom-color:cyan;';
  readonly darkblue = 'border-bottom-color:darkblue;';
  readonly darkcyan = 'border-bottom-color:darkcyan;';
  readonly darkgoldenrod = 'border-bottom-color:darkgoldenrod;';
  readonly darkgray = 'border-bottom-color:darkgray;';
  readonly darkgreen = 'border-bottom-color:darkgreen;';
  readonly darkgrey = 'border-bottom-color:darkgrey;';
  readonly darkkhaki = 'border-bottom-color:darkkhaki;';
  readonly darkmagenta = 'border-bottom-color:darkmagenta;';
  readonly darkolivegreen = 'border-bottom-color:darkolivegreen;';
  readonly darkorange = 'border-bottom-color:darkorange;';
  readonly darkorchid = 'border-bottom-color:darkorchid;';
  readonly darkred = 'border-bottom-color:darkred;';
  readonly darksalmon = 'border-bottom-color:darksalmon;';
  readonly darkseagreen = 'border-bottom-color:darkseagreen;';
  readonly darkslateblue = 'border-bottom-color:darkslateblue;';
  readonly darkslategray = 'border-bottom-color:darkslategray;';
  readonly darkslategrey = 'border-bottom-color:darkslategrey;';
  readonly darkturquoise = 'border-bottom-color:darkturquoise;';
  readonly darkviolet = 'border-bottom-color:darkviolet;';
  readonly deeppink = 'border-bottom-color:deeppink;';
  readonly deepskyblue = 'border-bottom-color:deepskyblue;';
  readonly dimgray = 'border-bottom-color:dimgray;';
  readonly dimgrey = 'border-bottom-color:dimgrey;';
  readonly dodgerblue = 'border-bottom-color:dodgerblue;';
  readonly firebrick = 'border-bottom-color:firebrick;';
  readonly floralwhite = 'border-bottom-color:floralwhite;';
  readonly forestgreen = 'border-bottom-color:forestgreen;';
  readonly fuchsia = 'border-bottom-color:fuchsia;';
  readonly gainsboro = 'border-bottom-color:gainsboro;';
  readonly ghostwhite = 'border-bottom-color:ghostwhite;';
  readonly gold = 'border-bottom-color:gold;';
  readonly goldenrod = 'border-bottom-color:goldenrod;';
  readonly gray = 'border-bottom-color:gray;';
  readonly green = 'border-bottom-color:green;';
  readonly greenyellow = 'border-bottom-color:greenyellow;';
  readonly grey = 'border-bottom-color:grey;';
  readonly honeydew = 'border-bottom-color:honeydew;';
  readonly hotpink = 'border-bottom-color:hotpink;';
  readonly indianred = 'border-bottom-color:indianred;';
  readonly indigo = 'border-bottom-color:indigo;';
  readonly inherit = 'border-bottom-color:inherit;';
  readonly initial = 'border-bottom-color:initial;';
  readonly ivory = 'border-bottom-color:ivory;';
  readonly khaki = 'border-bottom-color:khaki;';
  readonly lavender = 'border-bottom-color:lavender;';
  readonly lavenderblush = 'border-bottom-color:lavenderblush;';
  readonly lawngreen = 'border-bottom-color:lawngreen;';
  readonly lemonchiffon = 'border-bottom-color:lemonchiffon;';
  readonly lightblue = 'border-bottom-color:lightblue;';
  readonly lightcoral = 'border-bottom-color:lightcoral;';
  readonly lightcyan = 'border-bottom-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-bottom-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-bottom-color:lightgray;';
  readonly lightgreen = 'border-bottom-color:lightgreen;';
  readonly lightgrey = 'border-bottom-color:lightgrey;';
  readonly lightpink = 'border-bottom-color:lightpink;';
  readonly lightsalmon = 'border-bottom-color:lightsalmon;';
  readonly lightseagreen = 'border-bottom-color:lightseagreen;';
  readonly lightskyblue = 'border-bottom-color:lightskyblue;';
  readonly lightslategray = 'border-bottom-color:lightslategray;';
  readonly lightslategrey = 'border-bottom-color:lightslategrey;';
  readonly lightsteelblue = 'border-bottom-color:lightsteelblue;';
  readonly lightyellow = 'border-bottom-color:lightyellow;';
  readonly lime = 'border-bottom-color:lime;';
  readonly limegreen = 'border-bottom-color:limegreen;';
  readonly linen = 'border-bottom-color:linen;';
  readonly magenta = 'border-bottom-color:magenta;';
  readonly maroon = 'border-bottom-color:maroon;';
  readonly mediumaquamarine = 'border-bottom-color:mediumaquamarine;';
  readonly mediumblue = 'border-bottom-color:mediumblue;';
  readonly mediumorchid = 'border-bottom-color:mediumorchid;';
  readonly mediumpurple = 'border-bottom-color:mediumpurple;';
  readonly mediumseagreen = 'border-bottom-color:mediumseagreen;';
  readonly mediumslateblue = 'border-bottom-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-bottom-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-bottom-color:mediumturquoise;';
  readonly mediumvioletred = 'border-bottom-color:mediumvioletred;';
  readonly midnightblue = 'border-bottom-color:midnightblue;';
  readonly mintcream = 'border-bottom-color:mintcream;';
  readonly mistyrose = 'border-bottom-color:mistyrose;';
  readonly moccasin = 'border-bottom-color:moccasin;';
  readonly navajowhite = 'border-bottom-color:navajowhite;';
  readonly navy = 'border-bottom-color:navy;';
  readonly oldlace = 'border-bottom-color:oldlace;';
  readonly olive = 'border-bottom-color:olive;';
  readonly olivedrab = 'border-bottom-color:olivedrab;';
  readonly orange = 'border-bottom-color:orange;';
  readonly orangered = 'border-bottom-color:orangered;';
  readonly orchid = 'border-bottom-color:orchid;';
  readonly palegoldenrod = 'border-bottom-color:palegoldenrod;';
  readonly palegreen = 'border-bottom-color:palegreen;';
  readonly paleturquoise = 'border-bottom-color:paleturquoise;';
  readonly palevioletred = 'border-bottom-color:palevioletred;';
  readonly papayawhip = 'border-bottom-color:papayawhip;';
  readonly peachpuff = 'border-bottom-color:peachpuff;';
  readonly peru = 'border-bottom-color:peru;';
  readonly pink = 'border-bottom-color:pink;';
  readonly plum = 'border-bottom-color:plum;';
  readonly powderblue = 'border-bottom-color:powderblue;';
  readonly purple = 'border-bottom-color:purple;';
  readonly rebeccapurple = 'border-bottom-color:rebeccapurple;';
  readonly red = 'border-bottom-color:red;';
  readonly revert = 'border-bottom-color:revert;';
  readonly revertLayer = 'border-bottom-color:revert-layer;';
  readonly rosybrown = 'border-bottom-color:rosybrown;';
  readonly royalblue = 'border-bottom-color:royalblue;';
  readonly saddlebrown = 'border-bottom-color:saddlebrown;';
  readonly salmon = 'border-bottom-color:salmon;';
  readonly sandybrown = 'border-bottom-color:sandybrown;';
  readonly seagreen = 'border-bottom-color:seagreen;';
  readonly seashell = 'border-bottom-color:seashell;';
  readonly sienna = 'border-bottom-color:sienna;';
  readonly silver = 'border-bottom-color:silver;';
  readonly skyblue = 'border-bottom-color:skyblue;';
  readonly slateblue = 'border-bottom-color:slateblue;';
  readonly slategray = 'border-bottom-color:slategray;';
  readonly slategrey = 'border-bottom-color:slategrey;';
  readonly snow = 'border-bottom-color:snow;';
  readonly springgreen = 'border-bottom-color:springgreen;';
  readonly steelblue = 'border-bottom-color:steelblue;';
  readonly tan = 'border-bottom-color:tan;';
  readonly teal = 'border-bottom-color:teal;';
  readonly thistle = 'border-bottom-color:thistle;';
  readonly tomato = 'border-bottom-color:tomato;';
  readonly transparent = 'border-bottom-color:transparent;';
  readonly turquoise = 'border-bottom-color:turquoise;';
  readonly unset = 'border-bottom-color:unset;';
  readonly violet = 'border-bottom-color:violet;';
  readonly wheat = 'border-bottom-color:wheat;';
  readonly white = 'border-bottom-color:white;';
  readonly whitesmoke = 'border-bottom-color:whitesmoke;';
  readonly yellow = 'border-bottom-color:yellow;';
  readonly yellowgreen = 'border-bottom-color:yellowgreen;';
  constructor() {
    super('border-bottom-color');
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

/** CSS 属性 border-bottom-left-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
 */
export class BorderBottomLeftRadiusCss extends LengthCssProperty<Property.BorderBottomLeftRadius> {
  readonly inherit = 'border-bottom-left-radius:inherit;';
  readonly initial = 'border-bottom-left-radius:initial;';
  readonly revert = 'border-bottom-left-radius:revert;';
  readonly revertLayer = 'border-bottom-left-radius:revert-layer;';
  readonly unset = 'border-bottom-left-radius:unset;';
  constructor() {
    super('border-bottom-left-radius');
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
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderBottomLeftRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderBottomLeftRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBottomLeftRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderBottomLeftRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBottomLeftRadius, number> | (string & {}),
    preferred: Extract<Property.BorderBottomLeftRadius, number> | (string & {}),
    maximum: Extract<Property.BorderBottomLeftRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-bottom-right-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
 */
export class BorderBottomRightRadiusCss extends LengthCssProperty<Property.BorderBottomRightRadius> {
  readonly inherit = 'border-bottom-right-radius:inherit;';
  readonly initial = 'border-bottom-right-radius:initial;';
  readonly revert = 'border-bottom-right-radius:revert;';
  readonly revertLayer = 'border-bottom-right-radius:revert-layer;';
  readonly unset = 'border-bottom-right-radius:unset;';
  constructor() {
    super('border-bottom-right-radius');
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
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderBottomRightRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderBottomRightRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBottomRightRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderBottomRightRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBottomRightRadius, number> | (string & {}),
    preferred: Extract<Property.BorderBottomRightRadius, number> | (string & {}),
    maximum: Extract<Property.BorderBottomRightRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-bottom-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
 */
export class BorderBottomStyleCss extends CssProperty<Property.BorderBottomStyle> {
  readonly dashed = 'border-bottom-style:dashed;';
  readonly dotted = 'border-bottom-style:dotted;';
  readonly double = 'border-bottom-style:double;';
  readonly groove = 'border-bottom-style:groove;';
  readonly hidden = 'border-bottom-style:hidden;';
  readonly inherit = 'border-bottom-style:inherit;';
  readonly initial = 'border-bottom-style:initial;';
  readonly inset = 'border-bottom-style:inset;';
  readonly none = 'border-bottom-style:none;';
  readonly outset = 'border-bottom-style:outset;';
  readonly revert = 'border-bottom-style:revert;';
  readonly revertLayer = 'border-bottom-style:revert-layer;';
  readonly ridge = 'border-bottom-style:ridge;';
  readonly solid = 'border-bottom-style:solid;';
  readonly unset = 'border-bottom-style:unset;';
  constructor() {
    super('border-bottom-style');
  }
}

/** CSS 属性 border-bottom-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
 */
export class BorderBottomWidthCss extends LengthCssProperty<Property.BorderBottomWidth> {
  readonly inherit = 'border-bottom-width:inherit;';
  readonly initial = 'border-bottom-width:initial;';
  readonly medium = 'border-bottom-width:medium;';
  readonly revert = 'border-bottom-width:revert;';
  readonly revertLayer = 'border-bottom-width:revert-layer;';
  readonly thick = 'border-bottom-width:thick;';
  readonly thin = 'border-bottom-width:thin;';
  readonly unset = 'border-bottom-width:unset;';
  constructor() {
    super('border-bottom-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderBottomWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBottomWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderBottomWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderBottomWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderBottomWidth, number> | (string & {}),
    preferred: Extract<Property.BorderBottomWidth, number> | (string & {}),
    maximum: Extract<Property.BorderBottomWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-collapse；初始值 separate。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
 */
export class BorderCollapseCss extends CssProperty<Property.BorderCollapse> {
  readonly collapse = 'border-collapse:collapse;';
  readonly inherit = 'border-collapse:inherit;';
  readonly initial = 'border-collapse:initial;';
  readonly revert = 'border-collapse:revert;';
  readonly revertLayer = 'border-collapse:revert-layer;';
  readonly separate = 'border-collapse:separate;';
  readonly unset = 'border-collapse:unset;';
  constructor() {
    super('border-collapse');
  }
}

/** CSS 属性 border-color。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
 */
export class BorderColorCss extends CssProperty<Property.BorderColor> {
  readonly AccentColor = 'border-color:AccentColor;';
  readonly AccentColorText = 'border-color:AccentColorText;';
  readonly ActiveBorder = 'border-color:ActiveBorder;';
  readonly ActiveCaption = 'border-color:ActiveCaption;';
  readonly ActiveText = 'border-color:ActiveText;';
  readonly AppWorkspace = 'border-color:AppWorkspace;';
  readonly Background = 'border-color:Background;';
  readonly ButtonBorder = 'border-color:ButtonBorder;';
  readonly ButtonFace = 'border-color:ButtonFace;';
  readonly ButtonHighlight = 'border-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-color:ButtonShadow;';
  readonly ButtonText = 'border-color:ButtonText;';
  readonly Canvas = 'border-color:Canvas;';
  readonly CanvasText = 'border-color:CanvasText;';
  readonly CaptionText = 'border-color:CaptionText;';
  readonly Field = 'border-color:Field;';
  readonly FieldText = 'border-color:FieldText;';
  readonly GrayText = 'border-color:GrayText;';
  readonly Highlight = 'border-color:Highlight;';
  readonly HighlightText = 'border-color:HighlightText;';
  readonly InactiveBorder = 'border-color:InactiveBorder;';
  readonly InactiveCaption = 'border-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-color:InfoBackground;';
  readonly InfoText = 'border-color:InfoText;';
  readonly LinkText = 'border-color:LinkText;';
  readonly Mark = 'border-color:Mark;';
  readonly MarkText = 'border-color:MarkText;';
  readonly Menu = 'border-color:Menu;';
  readonly MenuText = 'border-color:MenuText;';
  readonly Scrollbar = 'border-color:Scrollbar;';
  readonly SelectedItem = 'border-color:SelectedItem;';
  readonly SelectedItemText = 'border-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-color:ThreeDShadow;';
  readonly VisitedText = 'border-color:VisitedText;';
  readonly Window = 'border-color:Window;';
  readonly WindowFrame = 'border-color:WindowFrame;';
  readonly WindowText = 'border-color:WindowText;';
  readonly aliceblue = 'border-color:aliceblue;';
  readonly antiquewhite = 'border-color:antiquewhite;';
  readonly aqua = 'border-color:aqua;';
  readonly aquamarine = 'border-color:aquamarine;';
  readonly azure = 'border-color:azure;';
  readonly beige = 'border-color:beige;';
  readonly bisque = 'border-color:bisque;';
  readonly black = 'border-color:black;';
  readonly blanchedalmond = 'border-color:blanchedalmond;';
  readonly blue = 'border-color:blue;';
  readonly blueviolet = 'border-color:blueviolet;';
  readonly brown = 'border-color:brown;';
  readonly burlywood = 'border-color:burlywood;';
  readonly cadetblue = 'border-color:cadetblue;';
  readonly chartreuse = 'border-color:chartreuse;';
  readonly chocolate = 'border-color:chocolate;';
  readonly coral = 'border-color:coral;';
  readonly cornflowerblue = 'border-color:cornflowerblue;';
  readonly cornsilk = 'border-color:cornsilk;';
  readonly crimson = 'border-color:crimson;';
  readonly currentColor = 'border-color:currentColor;';
  readonly cyan = 'border-color:cyan;';
  readonly darkblue = 'border-color:darkblue;';
  readonly darkcyan = 'border-color:darkcyan;';
  readonly darkgoldenrod = 'border-color:darkgoldenrod;';
  readonly darkgray = 'border-color:darkgray;';
  readonly darkgreen = 'border-color:darkgreen;';
  readonly darkgrey = 'border-color:darkgrey;';
  readonly darkkhaki = 'border-color:darkkhaki;';
  readonly darkmagenta = 'border-color:darkmagenta;';
  readonly darkolivegreen = 'border-color:darkolivegreen;';
  readonly darkorange = 'border-color:darkorange;';
  readonly darkorchid = 'border-color:darkorchid;';
  readonly darkred = 'border-color:darkred;';
  readonly darksalmon = 'border-color:darksalmon;';
  readonly darkseagreen = 'border-color:darkseagreen;';
  readonly darkslateblue = 'border-color:darkslateblue;';
  readonly darkslategray = 'border-color:darkslategray;';
  readonly darkslategrey = 'border-color:darkslategrey;';
  readonly darkturquoise = 'border-color:darkturquoise;';
  readonly darkviolet = 'border-color:darkviolet;';
  readonly deeppink = 'border-color:deeppink;';
  readonly deepskyblue = 'border-color:deepskyblue;';
  readonly dimgray = 'border-color:dimgray;';
  readonly dimgrey = 'border-color:dimgrey;';
  readonly dodgerblue = 'border-color:dodgerblue;';
  readonly firebrick = 'border-color:firebrick;';
  readonly floralwhite = 'border-color:floralwhite;';
  readonly forestgreen = 'border-color:forestgreen;';
  readonly fuchsia = 'border-color:fuchsia;';
  readonly gainsboro = 'border-color:gainsboro;';
  readonly ghostwhite = 'border-color:ghostwhite;';
  readonly gold = 'border-color:gold;';
  readonly goldenrod = 'border-color:goldenrod;';
  readonly gray = 'border-color:gray;';
  readonly green = 'border-color:green;';
  readonly greenyellow = 'border-color:greenyellow;';
  readonly grey = 'border-color:grey;';
  readonly honeydew = 'border-color:honeydew;';
  readonly hotpink = 'border-color:hotpink;';
  readonly indianred = 'border-color:indianred;';
  readonly indigo = 'border-color:indigo;';
  readonly inherit = 'border-color:inherit;';
  readonly initial = 'border-color:initial;';
  readonly ivory = 'border-color:ivory;';
  readonly khaki = 'border-color:khaki;';
  readonly lavender = 'border-color:lavender;';
  readonly lavenderblush = 'border-color:lavenderblush;';
  readonly lawngreen = 'border-color:lawngreen;';
  readonly lemonchiffon = 'border-color:lemonchiffon;';
  readonly lightblue = 'border-color:lightblue;';
  readonly lightcoral = 'border-color:lightcoral;';
  readonly lightcyan = 'border-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-color:lightgray;';
  readonly lightgreen = 'border-color:lightgreen;';
  readonly lightgrey = 'border-color:lightgrey;';
  readonly lightpink = 'border-color:lightpink;';
  readonly lightsalmon = 'border-color:lightsalmon;';
  readonly lightseagreen = 'border-color:lightseagreen;';
  readonly lightskyblue = 'border-color:lightskyblue;';
  readonly lightslategray = 'border-color:lightslategray;';
  readonly lightslategrey = 'border-color:lightslategrey;';
  readonly lightsteelblue = 'border-color:lightsteelblue;';
  readonly lightyellow = 'border-color:lightyellow;';
  readonly lime = 'border-color:lime;';
  readonly limegreen = 'border-color:limegreen;';
  readonly linen = 'border-color:linen;';
  readonly magenta = 'border-color:magenta;';
  readonly maroon = 'border-color:maroon;';
  readonly mediumaquamarine = 'border-color:mediumaquamarine;';
  readonly mediumblue = 'border-color:mediumblue;';
  readonly mediumorchid = 'border-color:mediumorchid;';
  readonly mediumpurple = 'border-color:mediumpurple;';
  readonly mediumseagreen = 'border-color:mediumseagreen;';
  readonly mediumslateblue = 'border-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-color:mediumturquoise;';
  readonly mediumvioletred = 'border-color:mediumvioletred;';
  readonly midnightblue = 'border-color:midnightblue;';
  readonly mintcream = 'border-color:mintcream;';
  readonly mistyrose = 'border-color:mistyrose;';
  readonly moccasin = 'border-color:moccasin;';
  readonly navajowhite = 'border-color:navajowhite;';
  readonly navy = 'border-color:navy;';
  readonly oldlace = 'border-color:oldlace;';
  readonly olive = 'border-color:olive;';
  readonly olivedrab = 'border-color:olivedrab;';
  readonly orange = 'border-color:orange;';
  readonly orangered = 'border-color:orangered;';
  readonly orchid = 'border-color:orchid;';
  readonly palegoldenrod = 'border-color:palegoldenrod;';
  readonly palegreen = 'border-color:palegreen;';
  readonly paleturquoise = 'border-color:paleturquoise;';
  readonly palevioletred = 'border-color:palevioletred;';
  readonly papayawhip = 'border-color:papayawhip;';
  readonly peachpuff = 'border-color:peachpuff;';
  readonly peru = 'border-color:peru;';
  readonly pink = 'border-color:pink;';
  readonly plum = 'border-color:plum;';
  readonly powderblue = 'border-color:powderblue;';
  readonly purple = 'border-color:purple;';
  readonly rebeccapurple = 'border-color:rebeccapurple;';
  readonly red = 'border-color:red;';
  readonly revert = 'border-color:revert;';
  readonly revertLayer = 'border-color:revert-layer;';
  readonly rosybrown = 'border-color:rosybrown;';
  readonly royalblue = 'border-color:royalblue;';
  readonly saddlebrown = 'border-color:saddlebrown;';
  readonly salmon = 'border-color:salmon;';
  readonly sandybrown = 'border-color:sandybrown;';
  readonly seagreen = 'border-color:seagreen;';
  readonly seashell = 'border-color:seashell;';
  readonly sienna = 'border-color:sienna;';
  readonly silver = 'border-color:silver;';
  readonly skyblue = 'border-color:skyblue;';
  readonly slateblue = 'border-color:slateblue;';
  readonly slategray = 'border-color:slategray;';
  readonly slategrey = 'border-color:slategrey;';
  readonly snow = 'border-color:snow;';
  readonly springgreen = 'border-color:springgreen;';
  readonly steelblue = 'border-color:steelblue;';
  readonly tan = 'border-color:tan;';
  readonly teal = 'border-color:teal;';
  readonly thistle = 'border-color:thistle;';
  readonly tomato = 'border-color:tomato;';
  readonly transparent = 'border-color:transparent;';
  readonly turquoise = 'border-color:turquoise;';
  readonly unset = 'border-color:unset;';
  readonly violet = 'border-color:violet;';
  readonly wheat = 'border-color:wheat;';
  readonly white = 'border-color:white;';
  readonly whitesmoke = 'border-color:whitesmoke;';
  readonly yellow = 'border-color:yellow;';
  readonly yellowgreen = 'border-color:yellowgreen;';
  constructor() {
    super('border-color');
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

/** CSS 属性 border-end-end-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
 */
export class BorderEndEndRadiusCss extends LengthCssProperty<Property.BorderEndEndRadius> {
  readonly inherit = 'border-end-end-radius:inherit;';
  readonly initial = 'border-end-end-radius:initial;';
  readonly revert = 'border-end-end-radius:revert;';
  readonly revertLayer = 'border-end-end-radius:revert-layer;';
  readonly unset = 'border-end-end-radius:unset;';
  constructor() {
    super('border-end-end-radius');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderEndEndRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderEndEndRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderEndEndRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderEndEndRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderEndEndRadius, number> | (string & {}),
    preferred: Extract<Property.BorderEndEndRadius, number> | (string & {}),
    maximum: Extract<Property.BorderEndEndRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-end-start-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
 */
export class BorderEndStartRadiusCss extends LengthCssProperty<Property.BorderEndStartRadius> {
  readonly inherit = 'border-end-start-radius:inherit;';
  readonly initial = 'border-end-start-radius:initial;';
  readonly revert = 'border-end-start-radius:revert;';
  readonly revertLayer = 'border-end-start-radius:revert-layer;';
  readonly unset = 'border-end-start-radius:unset;';
  constructor() {
    super('border-end-start-radius');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderEndStartRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderEndStartRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderEndStartRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderEndStartRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderEndStartRadius, number> | (string & {}),
    preferred: Extract<Property.BorderEndStartRadius, number> | (string & {}),
    maximum: Extract<Property.BorderEndStartRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-image。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
 */
export class BorderImageCss extends CssProperty<Property.BorderImage> {
  readonly inherit = 'border-image:inherit;';
  readonly initial = 'border-image:initial;';
  readonly none = 'border-image:none;';
  readonly repeat = 'border-image:repeat;';
  readonly revert = 'border-image:revert;';
  readonly revertLayer = 'border-image:revert-layer;';
  readonly round = 'border-image:round;';
  readonly space = 'border-image:space;';
  readonly stretch = 'border-image:stretch;';
  readonly unset = 'border-image:unset;';
  constructor() {
    super('border-image');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderImage, number> | (string & {}),
    ...others: (Extract<Property.BorderImage, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderImage, number> | (string & {}),
    ...others: (Extract<Property.BorderImage, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderImage, number> | (string & {}),
    preferred: Extract<Property.BorderImage, number> | (string & {}),
    maximum: Extract<Property.BorderImage, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-image-outset；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
 */
export class BorderImageOutsetCss extends LengthCssProperty<Property.BorderImageOutset> {
  readonly inherit = 'border-image-outset:inherit;';
  readonly initial = 'border-image-outset:initial;';
  readonly revert = 'border-image-outset:revert;';
  readonly revertLayer = 'border-image-outset:revert-layer;';
  readonly unset = 'border-image-outset:unset;';
  constructor() {
    super('border-image-outset');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderImageOutset, number> | (string & {}),
    ...others: (Extract<Property.BorderImageOutset, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderImageOutset, number> | (string & {}),
    ...others: (Extract<Property.BorderImageOutset, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderImageOutset, number> | (string & {}),
    preferred: Extract<Property.BorderImageOutset, number> | (string & {}),
    maximum: Extract<Property.BorderImageOutset, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-image-repeat；初始值 stretch。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
 */
export class BorderImageRepeatCss extends CssProperty<Property.BorderImageRepeat> {
  readonly inherit = 'border-image-repeat:inherit;';
  readonly initial = 'border-image-repeat:initial;';
  readonly repeat = 'border-image-repeat:repeat;';
  readonly revert = 'border-image-repeat:revert;';
  readonly revertLayer = 'border-image-repeat:revert-layer;';
  readonly round = 'border-image-repeat:round;';
  readonly space = 'border-image-repeat:space;';
  readonly stretch = 'border-image-repeat:stretch;';
  readonly unset = 'border-image-repeat:unset;';
  constructor() {
    super('border-image-repeat');
  }
}

/** CSS 属性 border-image-slice；初始值 100%。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
 */
export class BorderImageSliceCss extends CssProperty<Property.BorderImageSlice> {
  readonly inherit = 'border-image-slice:inherit;';
  readonly initial = 'border-image-slice:initial;';
  readonly revert = 'border-image-slice:revert;';
  readonly revertLayer = 'border-image-slice:revert-layer;';
  readonly unset = 'border-image-slice:unset;';
  constructor() {
    super('border-image-slice');
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(value1: number, value2: number, value3: number): string;
  percent(value1: number, value2: number, value3: number, value4: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderImageSlice, number> | (string & {}),
    ...others: (Extract<Property.BorderImageSlice, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderImageSlice, number> | (string & {}),
    ...others: (Extract<Property.BorderImageSlice, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderImageSlice, number> | (string & {}),
    preferred: Extract<Property.BorderImageSlice, number> | (string & {}),
    maximum: Extract<Property.BorderImageSlice, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-image-source；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
 */
export class BorderImageSourceCss extends CssProperty<Property.BorderImageSource> {
  readonly inherit = 'border-image-source:inherit;';
  readonly initial = 'border-image-source:initial;';
  readonly none = 'border-image-source:none;';
  readonly revert = 'border-image-source:revert;';
  readonly revertLayer = 'border-image-source:revert-layer;';
  readonly unset = 'border-image-source:unset;';
  constructor() {
    super('border-image-source');
  }
}

/** CSS 属性 border-image-width；初始值 1。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
 */
export class BorderImageWidthCss extends LengthCssProperty<Property.BorderImageWidth> {
  readonly auto = 'border-image-width:auto;';
  readonly inherit = 'border-image-width:inherit;';
  readonly initial = 'border-image-width:initial;';
  readonly revert = 'border-image-width:revert;';
  readonly revertLayer = 'border-image-width:revert-layer;';
  readonly unset = 'border-image-width:unset;';
  constructor() {
    super('border-image-width');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(value1: number, value2: number, value3: number): string;
  percent(value1: number, value2: number, value3: number, value4: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderImageWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderImageWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderImageWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderImageWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderImageWidth, number> | (string & {}),
    preferred: Extract<Property.BorderImageWidth, number> | (string & {}),
    maximum: Extract<Property.BorderImageWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-inline。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
 */
export class BorderInlineCss extends LengthCssProperty<Property.BorderInline> {
  readonly AccentColor = 'border-inline:AccentColor;';
  readonly AccentColorText = 'border-inline:AccentColorText;';
  readonly ActiveBorder = 'border-inline:ActiveBorder;';
  readonly ActiveCaption = 'border-inline:ActiveCaption;';
  readonly ActiveText = 'border-inline:ActiveText;';
  readonly AppWorkspace = 'border-inline:AppWorkspace;';
  readonly Background = 'border-inline:Background;';
  readonly ButtonBorder = 'border-inline:ButtonBorder;';
  readonly ButtonFace = 'border-inline:ButtonFace;';
  readonly ButtonHighlight = 'border-inline:ButtonHighlight;';
  readonly ButtonShadow = 'border-inline:ButtonShadow;';
  readonly ButtonText = 'border-inline:ButtonText;';
  readonly Canvas = 'border-inline:Canvas;';
  readonly CanvasText = 'border-inline:CanvasText;';
  readonly CaptionText = 'border-inline:CaptionText;';
  readonly Field = 'border-inline:Field;';
  readonly FieldText = 'border-inline:FieldText;';
  readonly GrayText = 'border-inline:GrayText;';
  readonly Highlight = 'border-inline:Highlight;';
  readonly HighlightText = 'border-inline:HighlightText;';
  readonly InactiveBorder = 'border-inline:InactiveBorder;';
  readonly InactiveCaption = 'border-inline:InactiveCaption;';
  readonly InactiveCaptionText = 'border-inline:InactiveCaptionText;';
  readonly InfoBackground = 'border-inline:InfoBackground;';
  readonly InfoText = 'border-inline:InfoText;';
  readonly LinkText = 'border-inline:LinkText;';
  readonly Mark = 'border-inline:Mark;';
  readonly MarkText = 'border-inline:MarkText;';
  readonly Menu = 'border-inline:Menu;';
  readonly MenuText = 'border-inline:MenuText;';
  readonly Scrollbar = 'border-inline:Scrollbar;';
  readonly SelectedItem = 'border-inline:SelectedItem;';
  readonly SelectedItemText = 'border-inline:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-inline:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-inline:ThreeDFace;';
  readonly ThreeDHighlight = 'border-inline:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-inline:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-inline:ThreeDShadow;';
  readonly VisitedText = 'border-inline:VisitedText;';
  readonly Window = 'border-inline:Window;';
  readonly WindowFrame = 'border-inline:WindowFrame;';
  readonly WindowText = 'border-inline:WindowText;';
  readonly aliceblue = 'border-inline:aliceblue;';
  readonly antiquewhite = 'border-inline:antiquewhite;';
  readonly aqua = 'border-inline:aqua;';
  readonly aquamarine = 'border-inline:aquamarine;';
  readonly azure = 'border-inline:azure;';
  readonly beige = 'border-inline:beige;';
  readonly bisque = 'border-inline:bisque;';
  readonly black = 'border-inline:black;';
  readonly blanchedalmond = 'border-inline:blanchedalmond;';
  readonly blue = 'border-inline:blue;';
  readonly blueviolet = 'border-inline:blueviolet;';
  readonly brown = 'border-inline:brown;';
  readonly burlywood = 'border-inline:burlywood;';
  readonly cadetblue = 'border-inline:cadetblue;';
  readonly chartreuse = 'border-inline:chartreuse;';
  readonly chocolate = 'border-inline:chocolate;';
  readonly coral = 'border-inline:coral;';
  readonly cornflowerblue = 'border-inline:cornflowerblue;';
  readonly cornsilk = 'border-inline:cornsilk;';
  readonly crimson = 'border-inline:crimson;';
  readonly currentColor = 'border-inline:currentColor;';
  readonly cyan = 'border-inline:cyan;';
  readonly darkblue = 'border-inline:darkblue;';
  readonly darkcyan = 'border-inline:darkcyan;';
  readonly darkgoldenrod = 'border-inline:darkgoldenrod;';
  readonly darkgray = 'border-inline:darkgray;';
  readonly darkgreen = 'border-inline:darkgreen;';
  readonly darkgrey = 'border-inline:darkgrey;';
  readonly darkkhaki = 'border-inline:darkkhaki;';
  readonly darkmagenta = 'border-inline:darkmagenta;';
  readonly darkolivegreen = 'border-inline:darkolivegreen;';
  readonly darkorange = 'border-inline:darkorange;';
  readonly darkorchid = 'border-inline:darkorchid;';
  readonly darkred = 'border-inline:darkred;';
  readonly darksalmon = 'border-inline:darksalmon;';
  readonly darkseagreen = 'border-inline:darkseagreen;';
  readonly darkslateblue = 'border-inline:darkslateblue;';
  readonly darkslategray = 'border-inline:darkslategray;';
  readonly darkslategrey = 'border-inline:darkslategrey;';
  readonly darkturquoise = 'border-inline:darkturquoise;';
  readonly darkviolet = 'border-inline:darkviolet;';
  readonly dashed = 'border-inline:dashed;';
  readonly deeppink = 'border-inline:deeppink;';
  readonly deepskyblue = 'border-inline:deepskyblue;';
  readonly dimgray = 'border-inline:dimgray;';
  readonly dimgrey = 'border-inline:dimgrey;';
  readonly dodgerblue = 'border-inline:dodgerblue;';
  readonly dotted = 'border-inline:dotted;';
  readonly double = 'border-inline:double;';
  readonly firebrick = 'border-inline:firebrick;';
  readonly floralwhite = 'border-inline:floralwhite;';
  readonly forestgreen = 'border-inline:forestgreen;';
  readonly fuchsia = 'border-inline:fuchsia;';
  readonly gainsboro = 'border-inline:gainsboro;';
  readonly ghostwhite = 'border-inline:ghostwhite;';
  readonly gold = 'border-inline:gold;';
  readonly goldenrod = 'border-inline:goldenrod;';
  readonly gray = 'border-inline:gray;';
  readonly green = 'border-inline:green;';
  readonly greenyellow = 'border-inline:greenyellow;';
  readonly grey = 'border-inline:grey;';
  readonly groove = 'border-inline:groove;';
  readonly hidden = 'border-inline:hidden;';
  readonly honeydew = 'border-inline:honeydew;';
  readonly hotpink = 'border-inline:hotpink;';
  readonly indianred = 'border-inline:indianred;';
  readonly indigo = 'border-inline:indigo;';
  readonly inherit = 'border-inline:inherit;';
  readonly initial = 'border-inline:initial;';
  readonly inset = 'border-inline:inset;';
  readonly ivory = 'border-inline:ivory;';
  readonly khaki = 'border-inline:khaki;';
  readonly lavender = 'border-inline:lavender;';
  readonly lavenderblush = 'border-inline:lavenderblush;';
  readonly lawngreen = 'border-inline:lawngreen;';
  readonly lemonchiffon = 'border-inline:lemonchiffon;';
  readonly lightblue = 'border-inline:lightblue;';
  readonly lightcoral = 'border-inline:lightcoral;';
  readonly lightcyan = 'border-inline:lightcyan;';
  readonly lightgoldenrodyellow = 'border-inline:lightgoldenrodyellow;';
  readonly lightgray = 'border-inline:lightgray;';
  readonly lightgreen = 'border-inline:lightgreen;';
  readonly lightgrey = 'border-inline:lightgrey;';
  readonly lightpink = 'border-inline:lightpink;';
  readonly lightsalmon = 'border-inline:lightsalmon;';
  readonly lightseagreen = 'border-inline:lightseagreen;';
  readonly lightskyblue = 'border-inline:lightskyblue;';
  readonly lightslategray = 'border-inline:lightslategray;';
  readonly lightslategrey = 'border-inline:lightslategrey;';
  readonly lightsteelblue = 'border-inline:lightsteelblue;';
  readonly lightyellow = 'border-inline:lightyellow;';
  readonly lime = 'border-inline:lime;';
  readonly limegreen = 'border-inline:limegreen;';
  readonly linen = 'border-inline:linen;';
  readonly magenta = 'border-inline:magenta;';
  readonly maroon = 'border-inline:maroon;';
  readonly medium = 'border-inline:medium;';
  readonly mediumaquamarine = 'border-inline:mediumaquamarine;';
  readonly mediumblue = 'border-inline:mediumblue;';
  readonly mediumorchid = 'border-inline:mediumorchid;';
  readonly mediumpurple = 'border-inline:mediumpurple;';
  readonly mediumseagreen = 'border-inline:mediumseagreen;';
  readonly mediumslateblue = 'border-inline:mediumslateblue;';
  readonly mediumspringgreen = 'border-inline:mediumspringgreen;';
  readonly mediumturquoise = 'border-inline:mediumturquoise;';
  readonly mediumvioletred = 'border-inline:mediumvioletred;';
  readonly midnightblue = 'border-inline:midnightblue;';
  readonly mintcream = 'border-inline:mintcream;';
  readonly mistyrose = 'border-inline:mistyrose;';
  readonly moccasin = 'border-inline:moccasin;';
  readonly navajowhite = 'border-inline:navajowhite;';
  readonly navy = 'border-inline:navy;';
  readonly none = 'border-inline:none;';
  readonly oldlace = 'border-inline:oldlace;';
  readonly olive = 'border-inline:olive;';
  readonly olivedrab = 'border-inline:olivedrab;';
  readonly orange = 'border-inline:orange;';
  readonly orangered = 'border-inline:orangered;';
  readonly orchid = 'border-inline:orchid;';
  readonly outset = 'border-inline:outset;';
  readonly palegoldenrod = 'border-inline:palegoldenrod;';
  readonly palegreen = 'border-inline:palegreen;';
  readonly paleturquoise = 'border-inline:paleturquoise;';
  readonly palevioletred = 'border-inline:palevioletred;';
  readonly papayawhip = 'border-inline:papayawhip;';
  readonly peachpuff = 'border-inline:peachpuff;';
  readonly peru = 'border-inline:peru;';
  readonly pink = 'border-inline:pink;';
  readonly plum = 'border-inline:plum;';
  readonly powderblue = 'border-inline:powderblue;';
  readonly purple = 'border-inline:purple;';
  readonly rebeccapurple = 'border-inline:rebeccapurple;';
  readonly red = 'border-inline:red;';
  readonly revert = 'border-inline:revert;';
  readonly revertLayer = 'border-inline:revert-layer;';
  readonly ridge = 'border-inline:ridge;';
  readonly rosybrown = 'border-inline:rosybrown;';
  readonly royalblue = 'border-inline:royalblue;';
  readonly saddlebrown = 'border-inline:saddlebrown;';
  readonly salmon = 'border-inline:salmon;';
  readonly sandybrown = 'border-inline:sandybrown;';
  readonly seagreen = 'border-inline:seagreen;';
  readonly seashell = 'border-inline:seashell;';
  readonly sienna = 'border-inline:sienna;';
  readonly silver = 'border-inline:silver;';
  readonly skyblue = 'border-inline:skyblue;';
  readonly slateblue = 'border-inline:slateblue;';
  readonly slategray = 'border-inline:slategray;';
  readonly slategrey = 'border-inline:slategrey;';
  readonly snow = 'border-inline:snow;';
  readonly solid = 'border-inline:solid;';
  readonly springgreen = 'border-inline:springgreen;';
  readonly steelblue = 'border-inline:steelblue;';
  readonly tan = 'border-inline:tan;';
  readonly teal = 'border-inline:teal;';
  readonly thick = 'border-inline:thick;';
  readonly thin = 'border-inline:thin;';
  readonly thistle = 'border-inline:thistle;';
  readonly tomato = 'border-inline:tomato;';
  readonly transparent = 'border-inline:transparent;';
  readonly turquoise = 'border-inline:turquoise;';
  readonly unset = 'border-inline:unset;';
  readonly violet = 'border-inline:violet;';
  readonly wheat = 'border-inline:wheat;';
  readonly white = 'border-inline:white;';
  readonly whitesmoke = 'border-inline:whitesmoke;';
  readonly yellow = 'border-inline:yellow;';
  readonly yellowgreen = 'border-inline:yellowgreen;';
  constructor() {
    super('border-inline');
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
    value: Extract<Property.BorderInline, number> | (string & {}),
    ...others: (Extract<Property.BorderInline, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderInline, number> | (string & {}),
    ...others: (Extract<Property.BorderInline, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderInline, number> | (string & {}),
    preferred: Extract<Property.BorderInline, number> | (string & {}),
    maximum: Extract<Property.BorderInline, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-inline-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
 */
export class BorderInlineColorCss extends CssProperty<Property.BorderInlineColor> {
  readonly AccentColor = 'border-inline-color:AccentColor;';
  readonly AccentColorText = 'border-inline-color:AccentColorText;';
  readonly ActiveBorder = 'border-inline-color:ActiveBorder;';
  readonly ActiveCaption = 'border-inline-color:ActiveCaption;';
  readonly ActiveText = 'border-inline-color:ActiveText;';
  readonly AppWorkspace = 'border-inline-color:AppWorkspace;';
  readonly Background = 'border-inline-color:Background;';
  readonly ButtonBorder = 'border-inline-color:ButtonBorder;';
  readonly ButtonFace = 'border-inline-color:ButtonFace;';
  readonly ButtonHighlight = 'border-inline-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-inline-color:ButtonShadow;';
  readonly ButtonText = 'border-inline-color:ButtonText;';
  readonly Canvas = 'border-inline-color:Canvas;';
  readonly CanvasText = 'border-inline-color:CanvasText;';
  readonly CaptionText = 'border-inline-color:CaptionText;';
  readonly Field = 'border-inline-color:Field;';
  readonly FieldText = 'border-inline-color:FieldText;';
  readonly GrayText = 'border-inline-color:GrayText;';
  readonly Highlight = 'border-inline-color:Highlight;';
  readonly HighlightText = 'border-inline-color:HighlightText;';
  readonly InactiveBorder = 'border-inline-color:InactiveBorder;';
  readonly InactiveCaption = 'border-inline-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-inline-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-inline-color:InfoBackground;';
  readonly InfoText = 'border-inline-color:InfoText;';
  readonly LinkText = 'border-inline-color:LinkText;';
  readonly Mark = 'border-inline-color:Mark;';
  readonly MarkText = 'border-inline-color:MarkText;';
  readonly Menu = 'border-inline-color:Menu;';
  readonly MenuText = 'border-inline-color:MenuText;';
  readonly Scrollbar = 'border-inline-color:Scrollbar;';
  readonly SelectedItem = 'border-inline-color:SelectedItem;';
  readonly SelectedItemText = 'border-inline-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-inline-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-inline-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-inline-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-inline-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-inline-color:ThreeDShadow;';
  readonly VisitedText = 'border-inline-color:VisitedText;';
  readonly Window = 'border-inline-color:Window;';
  readonly WindowFrame = 'border-inline-color:WindowFrame;';
  readonly WindowText = 'border-inline-color:WindowText;';
  readonly aliceblue = 'border-inline-color:aliceblue;';
  readonly antiquewhite = 'border-inline-color:antiquewhite;';
  readonly aqua = 'border-inline-color:aqua;';
  readonly aquamarine = 'border-inline-color:aquamarine;';
  readonly azure = 'border-inline-color:azure;';
  readonly beige = 'border-inline-color:beige;';
  readonly bisque = 'border-inline-color:bisque;';
  readonly black = 'border-inline-color:black;';
  readonly blanchedalmond = 'border-inline-color:blanchedalmond;';
  readonly blue = 'border-inline-color:blue;';
  readonly blueviolet = 'border-inline-color:blueviolet;';
  readonly brown = 'border-inline-color:brown;';
  readonly burlywood = 'border-inline-color:burlywood;';
  readonly cadetblue = 'border-inline-color:cadetblue;';
  readonly chartreuse = 'border-inline-color:chartreuse;';
  readonly chocolate = 'border-inline-color:chocolate;';
  readonly coral = 'border-inline-color:coral;';
  readonly cornflowerblue = 'border-inline-color:cornflowerblue;';
  readonly cornsilk = 'border-inline-color:cornsilk;';
  readonly crimson = 'border-inline-color:crimson;';
  readonly currentColor = 'border-inline-color:currentColor;';
  readonly cyan = 'border-inline-color:cyan;';
  readonly darkblue = 'border-inline-color:darkblue;';
  readonly darkcyan = 'border-inline-color:darkcyan;';
  readonly darkgoldenrod = 'border-inline-color:darkgoldenrod;';
  readonly darkgray = 'border-inline-color:darkgray;';
  readonly darkgreen = 'border-inline-color:darkgreen;';
  readonly darkgrey = 'border-inline-color:darkgrey;';
  readonly darkkhaki = 'border-inline-color:darkkhaki;';
  readonly darkmagenta = 'border-inline-color:darkmagenta;';
  readonly darkolivegreen = 'border-inline-color:darkolivegreen;';
  readonly darkorange = 'border-inline-color:darkorange;';
  readonly darkorchid = 'border-inline-color:darkorchid;';
  readonly darkred = 'border-inline-color:darkred;';
  readonly darksalmon = 'border-inline-color:darksalmon;';
  readonly darkseagreen = 'border-inline-color:darkseagreen;';
  readonly darkslateblue = 'border-inline-color:darkslateblue;';
  readonly darkslategray = 'border-inline-color:darkslategray;';
  readonly darkslategrey = 'border-inline-color:darkslategrey;';
  readonly darkturquoise = 'border-inline-color:darkturquoise;';
  readonly darkviolet = 'border-inline-color:darkviolet;';
  readonly deeppink = 'border-inline-color:deeppink;';
  readonly deepskyblue = 'border-inline-color:deepskyblue;';
  readonly dimgray = 'border-inline-color:dimgray;';
  readonly dimgrey = 'border-inline-color:dimgrey;';
  readonly dodgerblue = 'border-inline-color:dodgerblue;';
  readonly firebrick = 'border-inline-color:firebrick;';
  readonly floralwhite = 'border-inline-color:floralwhite;';
  readonly forestgreen = 'border-inline-color:forestgreen;';
  readonly fuchsia = 'border-inline-color:fuchsia;';
  readonly gainsboro = 'border-inline-color:gainsboro;';
  readonly ghostwhite = 'border-inline-color:ghostwhite;';
  readonly gold = 'border-inline-color:gold;';
  readonly goldenrod = 'border-inline-color:goldenrod;';
  readonly gray = 'border-inline-color:gray;';
  readonly green = 'border-inline-color:green;';
  readonly greenyellow = 'border-inline-color:greenyellow;';
  readonly grey = 'border-inline-color:grey;';
  readonly honeydew = 'border-inline-color:honeydew;';
  readonly hotpink = 'border-inline-color:hotpink;';
  readonly indianred = 'border-inline-color:indianred;';
  readonly indigo = 'border-inline-color:indigo;';
  readonly inherit = 'border-inline-color:inherit;';
  readonly initial = 'border-inline-color:initial;';
  readonly ivory = 'border-inline-color:ivory;';
  readonly khaki = 'border-inline-color:khaki;';
  readonly lavender = 'border-inline-color:lavender;';
  readonly lavenderblush = 'border-inline-color:lavenderblush;';
  readonly lawngreen = 'border-inline-color:lawngreen;';
  readonly lemonchiffon = 'border-inline-color:lemonchiffon;';
  readonly lightblue = 'border-inline-color:lightblue;';
  readonly lightcoral = 'border-inline-color:lightcoral;';
  readonly lightcyan = 'border-inline-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-inline-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-inline-color:lightgray;';
  readonly lightgreen = 'border-inline-color:lightgreen;';
  readonly lightgrey = 'border-inline-color:lightgrey;';
  readonly lightpink = 'border-inline-color:lightpink;';
  readonly lightsalmon = 'border-inline-color:lightsalmon;';
  readonly lightseagreen = 'border-inline-color:lightseagreen;';
  readonly lightskyblue = 'border-inline-color:lightskyblue;';
  readonly lightslategray = 'border-inline-color:lightslategray;';
  readonly lightslategrey = 'border-inline-color:lightslategrey;';
  readonly lightsteelblue = 'border-inline-color:lightsteelblue;';
  readonly lightyellow = 'border-inline-color:lightyellow;';
  readonly lime = 'border-inline-color:lime;';
  readonly limegreen = 'border-inline-color:limegreen;';
  readonly linen = 'border-inline-color:linen;';
  readonly magenta = 'border-inline-color:magenta;';
  readonly maroon = 'border-inline-color:maroon;';
  readonly mediumaquamarine = 'border-inline-color:mediumaquamarine;';
  readonly mediumblue = 'border-inline-color:mediumblue;';
  readonly mediumorchid = 'border-inline-color:mediumorchid;';
  readonly mediumpurple = 'border-inline-color:mediumpurple;';
  readonly mediumseagreen = 'border-inline-color:mediumseagreen;';
  readonly mediumslateblue = 'border-inline-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-inline-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-inline-color:mediumturquoise;';
  readonly mediumvioletred = 'border-inline-color:mediumvioletred;';
  readonly midnightblue = 'border-inline-color:midnightblue;';
  readonly mintcream = 'border-inline-color:mintcream;';
  readonly mistyrose = 'border-inline-color:mistyrose;';
  readonly moccasin = 'border-inline-color:moccasin;';
  readonly navajowhite = 'border-inline-color:navajowhite;';
  readonly navy = 'border-inline-color:navy;';
  readonly oldlace = 'border-inline-color:oldlace;';
  readonly olive = 'border-inline-color:olive;';
  readonly olivedrab = 'border-inline-color:olivedrab;';
  readonly orange = 'border-inline-color:orange;';
  readonly orangered = 'border-inline-color:orangered;';
  readonly orchid = 'border-inline-color:orchid;';
  readonly palegoldenrod = 'border-inline-color:palegoldenrod;';
  readonly palegreen = 'border-inline-color:palegreen;';
  readonly paleturquoise = 'border-inline-color:paleturquoise;';
  readonly palevioletred = 'border-inline-color:palevioletred;';
  readonly papayawhip = 'border-inline-color:papayawhip;';
  readonly peachpuff = 'border-inline-color:peachpuff;';
  readonly peru = 'border-inline-color:peru;';
  readonly pink = 'border-inline-color:pink;';
  readonly plum = 'border-inline-color:plum;';
  readonly powderblue = 'border-inline-color:powderblue;';
  readonly purple = 'border-inline-color:purple;';
  readonly rebeccapurple = 'border-inline-color:rebeccapurple;';
  readonly red = 'border-inline-color:red;';
  readonly revert = 'border-inline-color:revert;';
  readonly revertLayer = 'border-inline-color:revert-layer;';
  readonly rosybrown = 'border-inline-color:rosybrown;';
  readonly royalblue = 'border-inline-color:royalblue;';
  readonly saddlebrown = 'border-inline-color:saddlebrown;';
  readonly salmon = 'border-inline-color:salmon;';
  readonly sandybrown = 'border-inline-color:sandybrown;';
  readonly seagreen = 'border-inline-color:seagreen;';
  readonly seashell = 'border-inline-color:seashell;';
  readonly sienna = 'border-inline-color:sienna;';
  readonly silver = 'border-inline-color:silver;';
  readonly skyblue = 'border-inline-color:skyblue;';
  readonly slateblue = 'border-inline-color:slateblue;';
  readonly slategray = 'border-inline-color:slategray;';
  readonly slategrey = 'border-inline-color:slategrey;';
  readonly snow = 'border-inline-color:snow;';
  readonly springgreen = 'border-inline-color:springgreen;';
  readonly steelblue = 'border-inline-color:steelblue;';
  readonly tan = 'border-inline-color:tan;';
  readonly teal = 'border-inline-color:teal;';
  readonly thistle = 'border-inline-color:thistle;';
  readonly tomato = 'border-inline-color:tomato;';
  readonly transparent = 'border-inline-color:transparent;';
  readonly turquoise = 'border-inline-color:turquoise;';
  readonly unset = 'border-inline-color:unset;';
  readonly violet = 'border-inline-color:violet;';
  readonly wheat = 'border-inline-color:wheat;';
  readonly white = 'border-inline-color:white;';
  readonly whitesmoke = 'border-inline-color:whitesmoke;';
  readonly yellow = 'border-inline-color:yellow;';
  readonly yellowgreen = 'border-inline-color:yellowgreen;';
  constructor() {
    super('border-inline-color');
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

/** CSS 属性 border-inline-end。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
 */
export class BorderInlineEndCss extends LengthCssProperty<Property.BorderInlineEnd> {
  readonly AccentColor = 'border-inline-end:AccentColor;';
  readonly AccentColorText = 'border-inline-end:AccentColorText;';
  readonly ActiveBorder = 'border-inline-end:ActiveBorder;';
  readonly ActiveCaption = 'border-inline-end:ActiveCaption;';
  readonly ActiveText = 'border-inline-end:ActiveText;';
  readonly AppWorkspace = 'border-inline-end:AppWorkspace;';
  readonly Background = 'border-inline-end:Background;';
  readonly ButtonBorder = 'border-inline-end:ButtonBorder;';
  readonly ButtonFace = 'border-inline-end:ButtonFace;';
  readonly ButtonHighlight = 'border-inline-end:ButtonHighlight;';
  readonly ButtonShadow = 'border-inline-end:ButtonShadow;';
  readonly ButtonText = 'border-inline-end:ButtonText;';
  readonly Canvas = 'border-inline-end:Canvas;';
  readonly CanvasText = 'border-inline-end:CanvasText;';
  readonly CaptionText = 'border-inline-end:CaptionText;';
  readonly Field = 'border-inline-end:Field;';
  readonly FieldText = 'border-inline-end:FieldText;';
  readonly GrayText = 'border-inline-end:GrayText;';
  readonly Highlight = 'border-inline-end:Highlight;';
  readonly HighlightText = 'border-inline-end:HighlightText;';
  readonly InactiveBorder = 'border-inline-end:InactiveBorder;';
  readonly InactiveCaption = 'border-inline-end:InactiveCaption;';
  readonly InactiveCaptionText = 'border-inline-end:InactiveCaptionText;';
  readonly InfoBackground = 'border-inline-end:InfoBackground;';
  readonly InfoText = 'border-inline-end:InfoText;';
  readonly LinkText = 'border-inline-end:LinkText;';
  readonly Mark = 'border-inline-end:Mark;';
  readonly MarkText = 'border-inline-end:MarkText;';
  readonly Menu = 'border-inline-end:Menu;';
  readonly MenuText = 'border-inline-end:MenuText;';
  readonly Scrollbar = 'border-inline-end:Scrollbar;';
  readonly SelectedItem = 'border-inline-end:SelectedItem;';
  readonly SelectedItemText = 'border-inline-end:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-inline-end:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-inline-end:ThreeDFace;';
  readonly ThreeDHighlight = 'border-inline-end:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-inline-end:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-inline-end:ThreeDShadow;';
  readonly VisitedText = 'border-inline-end:VisitedText;';
  readonly Window = 'border-inline-end:Window;';
  readonly WindowFrame = 'border-inline-end:WindowFrame;';
  readonly WindowText = 'border-inline-end:WindowText;';
  readonly aliceblue = 'border-inline-end:aliceblue;';
  readonly antiquewhite = 'border-inline-end:antiquewhite;';
  readonly aqua = 'border-inline-end:aqua;';
  readonly aquamarine = 'border-inline-end:aquamarine;';
  readonly azure = 'border-inline-end:azure;';
  readonly beige = 'border-inline-end:beige;';
  readonly bisque = 'border-inline-end:bisque;';
  readonly black = 'border-inline-end:black;';
  readonly blanchedalmond = 'border-inline-end:blanchedalmond;';
  readonly blue = 'border-inline-end:blue;';
  readonly blueviolet = 'border-inline-end:blueviolet;';
  readonly brown = 'border-inline-end:brown;';
  readonly burlywood = 'border-inline-end:burlywood;';
  readonly cadetblue = 'border-inline-end:cadetblue;';
  readonly chartreuse = 'border-inline-end:chartreuse;';
  readonly chocolate = 'border-inline-end:chocolate;';
  readonly coral = 'border-inline-end:coral;';
  readonly cornflowerblue = 'border-inline-end:cornflowerblue;';
  readonly cornsilk = 'border-inline-end:cornsilk;';
  readonly crimson = 'border-inline-end:crimson;';
  readonly currentColor = 'border-inline-end:currentColor;';
  readonly cyan = 'border-inline-end:cyan;';
  readonly darkblue = 'border-inline-end:darkblue;';
  readonly darkcyan = 'border-inline-end:darkcyan;';
  readonly darkgoldenrod = 'border-inline-end:darkgoldenrod;';
  readonly darkgray = 'border-inline-end:darkgray;';
  readonly darkgreen = 'border-inline-end:darkgreen;';
  readonly darkgrey = 'border-inline-end:darkgrey;';
  readonly darkkhaki = 'border-inline-end:darkkhaki;';
  readonly darkmagenta = 'border-inline-end:darkmagenta;';
  readonly darkolivegreen = 'border-inline-end:darkolivegreen;';
  readonly darkorange = 'border-inline-end:darkorange;';
  readonly darkorchid = 'border-inline-end:darkorchid;';
  readonly darkred = 'border-inline-end:darkred;';
  readonly darksalmon = 'border-inline-end:darksalmon;';
  readonly darkseagreen = 'border-inline-end:darkseagreen;';
  readonly darkslateblue = 'border-inline-end:darkslateblue;';
  readonly darkslategray = 'border-inline-end:darkslategray;';
  readonly darkslategrey = 'border-inline-end:darkslategrey;';
  readonly darkturquoise = 'border-inline-end:darkturquoise;';
  readonly darkviolet = 'border-inline-end:darkviolet;';
  readonly dashed = 'border-inline-end:dashed;';
  readonly deeppink = 'border-inline-end:deeppink;';
  readonly deepskyblue = 'border-inline-end:deepskyblue;';
  readonly dimgray = 'border-inline-end:dimgray;';
  readonly dimgrey = 'border-inline-end:dimgrey;';
  readonly dodgerblue = 'border-inline-end:dodgerblue;';
  readonly dotted = 'border-inline-end:dotted;';
  readonly double = 'border-inline-end:double;';
  readonly firebrick = 'border-inline-end:firebrick;';
  readonly floralwhite = 'border-inline-end:floralwhite;';
  readonly forestgreen = 'border-inline-end:forestgreen;';
  readonly fuchsia = 'border-inline-end:fuchsia;';
  readonly gainsboro = 'border-inline-end:gainsboro;';
  readonly ghostwhite = 'border-inline-end:ghostwhite;';
  readonly gold = 'border-inline-end:gold;';
  readonly goldenrod = 'border-inline-end:goldenrod;';
  readonly gray = 'border-inline-end:gray;';
  readonly green = 'border-inline-end:green;';
  readonly greenyellow = 'border-inline-end:greenyellow;';
  readonly grey = 'border-inline-end:grey;';
  readonly groove = 'border-inline-end:groove;';
  readonly hidden = 'border-inline-end:hidden;';
  readonly honeydew = 'border-inline-end:honeydew;';
  readonly hotpink = 'border-inline-end:hotpink;';
  readonly indianred = 'border-inline-end:indianred;';
  readonly indigo = 'border-inline-end:indigo;';
  readonly inherit = 'border-inline-end:inherit;';
  readonly initial = 'border-inline-end:initial;';
  readonly inset = 'border-inline-end:inset;';
  readonly ivory = 'border-inline-end:ivory;';
  readonly khaki = 'border-inline-end:khaki;';
  readonly lavender = 'border-inline-end:lavender;';
  readonly lavenderblush = 'border-inline-end:lavenderblush;';
  readonly lawngreen = 'border-inline-end:lawngreen;';
  readonly lemonchiffon = 'border-inline-end:lemonchiffon;';
  readonly lightblue = 'border-inline-end:lightblue;';
  readonly lightcoral = 'border-inline-end:lightcoral;';
  readonly lightcyan = 'border-inline-end:lightcyan;';
  readonly lightgoldenrodyellow = 'border-inline-end:lightgoldenrodyellow;';
  readonly lightgray = 'border-inline-end:lightgray;';
  readonly lightgreen = 'border-inline-end:lightgreen;';
  readonly lightgrey = 'border-inline-end:lightgrey;';
  readonly lightpink = 'border-inline-end:lightpink;';
  readonly lightsalmon = 'border-inline-end:lightsalmon;';
  readonly lightseagreen = 'border-inline-end:lightseagreen;';
  readonly lightskyblue = 'border-inline-end:lightskyblue;';
  readonly lightslategray = 'border-inline-end:lightslategray;';
  readonly lightslategrey = 'border-inline-end:lightslategrey;';
  readonly lightsteelblue = 'border-inline-end:lightsteelblue;';
  readonly lightyellow = 'border-inline-end:lightyellow;';
  readonly lime = 'border-inline-end:lime;';
  readonly limegreen = 'border-inline-end:limegreen;';
  readonly linen = 'border-inline-end:linen;';
  readonly magenta = 'border-inline-end:magenta;';
  readonly maroon = 'border-inline-end:maroon;';
  readonly medium = 'border-inline-end:medium;';
  readonly mediumaquamarine = 'border-inline-end:mediumaquamarine;';
  readonly mediumblue = 'border-inline-end:mediumblue;';
  readonly mediumorchid = 'border-inline-end:mediumorchid;';
  readonly mediumpurple = 'border-inline-end:mediumpurple;';
  readonly mediumseagreen = 'border-inline-end:mediumseagreen;';
  readonly mediumslateblue = 'border-inline-end:mediumslateblue;';
  readonly mediumspringgreen = 'border-inline-end:mediumspringgreen;';
  readonly mediumturquoise = 'border-inline-end:mediumturquoise;';
  readonly mediumvioletred = 'border-inline-end:mediumvioletred;';
  readonly midnightblue = 'border-inline-end:midnightblue;';
  readonly mintcream = 'border-inline-end:mintcream;';
  readonly mistyrose = 'border-inline-end:mistyrose;';
  readonly moccasin = 'border-inline-end:moccasin;';
  readonly navajowhite = 'border-inline-end:navajowhite;';
  readonly navy = 'border-inline-end:navy;';
  readonly none = 'border-inline-end:none;';
  readonly oldlace = 'border-inline-end:oldlace;';
  readonly olive = 'border-inline-end:olive;';
  readonly olivedrab = 'border-inline-end:olivedrab;';
  readonly orange = 'border-inline-end:orange;';
  readonly orangered = 'border-inline-end:orangered;';
  readonly orchid = 'border-inline-end:orchid;';
  readonly outset = 'border-inline-end:outset;';
  readonly palegoldenrod = 'border-inline-end:palegoldenrod;';
  readonly palegreen = 'border-inline-end:palegreen;';
  readonly paleturquoise = 'border-inline-end:paleturquoise;';
  readonly palevioletred = 'border-inline-end:palevioletred;';
  readonly papayawhip = 'border-inline-end:papayawhip;';
  readonly peachpuff = 'border-inline-end:peachpuff;';
  readonly peru = 'border-inline-end:peru;';
  readonly pink = 'border-inline-end:pink;';
  readonly plum = 'border-inline-end:plum;';
  readonly powderblue = 'border-inline-end:powderblue;';
  readonly purple = 'border-inline-end:purple;';
  readonly rebeccapurple = 'border-inline-end:rebeccapurple;';
  readonly red = 'border-inline-end:red;';
  readonly revert = 'border-inline-end:revert;';
  readonly revertLayer = 'border-inline-end:revert-layer;';
  readonly ridge = 'border-inline-end:ridge;';
  readonly rosybrown = 'border-inline-end:rosybrown;';
  readonly royalblue = 'border-inline-end:royalblue;';
  readonly saddlebrown = 'border-inline-end:saddlebrown;';
  readonly salmon = 'border-inline-end:salmon;';
  readonly sandybrown = 'border-inline-end:sandybrown;';
  readonly seagreen = 'border-inline-end:seagreen;';
  readonly seashell = 'border-inline-end:seashell;';
  readonly sienna = 'border-inline-end:sienna;';
  readonly silver = 'border-inline-end:silver;';
  readonly skyblue = 'border-inline-end:skyblue;';
  readonly slateblue = 'border-inline-end:slateblue;';
  readonly slategray = 'border-inline-end:slategray;';
  readonly slategrey = 'border-inline-end:slategrey;';
  readonly snow = 'border-inline-end:snow;';
  readonly solid = 'border-inline-end:solid;';
  readonly springgreen = 'border-inline-end:springgreen;';
  readonly steelblue = 'border-inline-end:steelblue;';
  readonly tan = 'border-inline-end:tan;';
  readonly teal = 'border-inline-end:teal;';
  readonly thick = 'border-inline-end:thick;';
  readonly thin = 'border-inline-end:thin;';
  readonly thistle = 'border-inline-end:thistle;';
  readonly tomato = 'border-inline-end:tomato;';
  readonly transparent = 'border-inline-end:transparent;';
  readonly turquoise = 'border-inline-end:turquoise;';
  readonly unset = 'border-inline-end:unset;';
  readonly violet = 'border-inline-end:violet;';
  readonly wheat = 'border-inline-end:wheat;';
  readonly white = 'border-inline-end:white;';
  readonly whitesmoke = 'border-inline-end:whitesmoke;';
  readonly yellow = 'border-inline-end:yellow;';
  readonly yellowgreen = 'border-inline-end:yellowgreen;';
  constructor() {
    super('border-inline-end');
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
    value: Extract<Property.BorderInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderInlineEnd, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineEnd, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderInlineEnd, number> | (string & {}),
    preferred: Extract<Property.BorderInlineEnd, number> | (string & {}),
    maximum: Extract<Property.BorderInlineEnd, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-inline-end-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
 */
export class BorderInlineEndColorCss extends CssProperty<Property.BorderInlineEndColor> {
  readonly AccentColor = 'border-inline-end-color:AccentColor;';
  readonly AccentColorText = 'border-inline-end-color:AccentColorText;';
  readonly ActiveBorder = 'border-inline-end-color:ActiveBorder;';
  readonly ActiveCaption = 'border-inline-end-color:ActiveCaption;';
  readonly ActiveText = 'border-inline-end-color:ActiveText;';
  readonly AppWorkspace = 'border-inline-end-color:AppWorkspace;';
  readonly Background = 'border-inline-end-color:Background;';
  readonly ButtonBorder = 'border-inline-end-color:ButtonBorder;';
  readonly ButtonFace = 'border-inline-end-color:ButtonFace;';
  readonly ButtonHighlight = 'border-inline-end-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-inline-end-color:ButtonShadow;';
  readonly ButtonText = 'border-inline-end-color:ButtonText;';
  readonly Canvas = 'border-inline-end-color:Canvas;';
  readonly CanvasText = 'border-inline-end-color:CanvasText;';
  readonly CaptionText = 'border-inline-end-color:CaptionText;';
  readonly Field = 'border-inline-end-color:Field;';
  readonly FieldText = 'border-inline-end-color:FieldText;';
  readonly GrayText = 'border-inline-end-color:GrayText;';
  readonly Highlight = 'border-inline-end-color:Highlight;';
  readonly HighlightText = 'border-inline-end-color:HighlightText;';
  readonly InactiveBorder = 'border-inline-end-color:InactiveBorder;';
  readonly InactiveCaption = 'border-inline-end-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-inline-end-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-inline-end-color:InfoBackground;';
  readonly InfoText = 'border-inline-end-color:InfoText;';
  readonly LinkText = 'border-inline-end-color:LinkText;';
  readonly Mark = 'border-inline-end-color:Mark;';
  readonly MarkText = 'border-inline-end-color:MarkText;';
  readonly Menu = 'border-inline-end-color:Menu;';
  readonly MenuText = 'border-inline-end-color:MenuText;';
  readonly Scrollbar = 'border-inline-end-color:Scrollbar;';
  readonly SelectedItem = 'border-inline-end-color:SelectedItem;';
  readonly SelectedItemText = 'border-inline-end-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-inline-end-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-inline-end-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-inline-end-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-inline-end-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-inline-end-color:ThreeDShadow;';
  readonly VisitedText = 'border-inline-end-color:VisitedText;';
  readonly Window = 'border-inline-end-color:Window;';
  readonly WindowFrame = 'border-inline-end-color:WindowFrame;';
  readonly WindowText = 'border-inline-end-color:WindowText;';
  readonly aliceblue = 'border-inline-end-color:aliceblue;';
  readonly antiquewhite = 'border-inline-end-color:antiquewhite;';
  readonly aqua = 'border-inline-end-color:aqua;';
  readonly aquamarine = 'border-inline-end-color:aquamarine;';
  readonly azure = 'border-inline-end-color:azure;';
  readonly beige = 'border-inline-end-color:beige;';
  readonly bisque = 'border-inline-end-color:bisque;';
  readonly black = 'border-inline-end-color:black;';
  readonly blanchedalmond = 'border-inline-end-color:blanchedalmond;';
  readonly blue = 'border-inline-end-color:blue;';
  readonly blueviolet = 'border-inline-end-color:blueviolet;';
  readonly brown = 'border-inline-end-color:brown;';
  readonly burlywood = 'border-inline-end-color:burlywood;';
  readonly cadetblue = 'border-inline-end-color:cadetblue;';
  readonly chartreuse = 'border-inline-end-color:chartreuse;';
  readonly chocolate = 'border-inline-end-color:chocolate;';
  readonly coral = 'border-inline-end-color:coral;';
  readonly cornflowerblue = 'border-inline-end-color:cornflowerblue;';
  readonly cornsilk = 'border-inline-end-color:cornsilk;';
  readonly crimson = 'border-inline-end-color:crimson;';
  readonly currentColor = 'border-inline-end-color:currentColor;';
  readonly cyan = 'border-inline-end-color:cyan;';
  readonly darkblue = 'border-inline-end-color:darkblue;';
  readonly darkcyan = 'border-inline-end-color:darkcyan;';
  readonly darkgoldenrod = 'border-inline-end-color:darkgoldenrod;';
  readonly darkgray = 'border-inline-end-color:darkgray;';
  readonly darkgreen = 'border-inline-end-color:darkgreen;';
  readonly darkgrey = 'border-inline-end-color:darkgrey;';
  readonly darkkhaki = 'border-inline-end-color:darkkhaki;';
  readonly darkmagenta = 'border-inline-end-color:darkmagenta;';
  readonly darkolivegreen = 'border-inline-end-color:darkolivegreen;';
  readonly darkorange = 'border-inline-end-color:darkorange;';
  readonly darkorchid = 'border-inline-end-color:darkorchid;';
  readonly darkred = 'border-inline-end-color:darkred;';
  readonly darksalmon = 'border-inline-end-color:darksalmon;';
  readonly darkseagreen = 'border-inline-end-color:darkseagreen;';
  readonly darkslateblue = 'border-inline-end-color:darkslateblue;';
  readonly darkslategray = 'border-inline-end-color:darkslategray;';
  readonly darkslategrey = 'border-inline-end-color:darkslategrey;';
  readonly darkturquoise = 'border-inline-end-color:darkturquoise;';
  readonly darkviolet = 'border-inline-end-color:darkviolet;';
  readonly deeppink = 'border-inline-end-color:deeppink;';
  readonly deepskyblue = 'border-inline-end-color:deepskyblue;';
  readonly dimgray = 'border-inline-end-color:dimgray;';
  readonly dimgrey = 'border-inline-end-color:dimgrey;';
  readonly dodgerblue = 'border-inline-end-color:dodgerblue;';
  readonly firebrick = 'border-inline-end-color:firebrick;';
  readonly floralwhite = 'border-inline-end-color:floralwhite;';
  readonly forestgreen = 'border-inline-end-color:forestgreen;';
  readonly fuchsia = 'border-inline-end-color:fuchsia;';
  readonly gainsboro = 'border-inline-end-color:gainsboro;';
  readonly ghostwhite = 'border-inline-end-color:ghostwhite;';
  readonly gold = 'border-inline-end-color:gold;';
  readonly goldenrod = 'border-inline-end-color:goldenrod;';
  readonly gray = 'border-inline-end-color:gray;';
  readonly green = 'border-inline-end-color:green;';
  readonly greenyellow = 'border-inline-end-color:greenyellow;';
  readonly grey = 'border-inline-end-color:grey;';
  readonly honeydew = 'border-inline-end-color:honeydew;';
  readonly hotpink = 'border-inline-end-color:hotpink;';
  readonly indianred = 'border-inline-end-color:indianred;';
  readonly indigo = 'border-inline-end-color:indigo;';
  readonly inherit = 'border-inline-end-color:inherit;';
  readonly initial = 'border-inline-end-color:initial;';
  readonly ivory = 'border-inline-end-color:ivory;';
  readonly khaki = 'border-inline-end-color:khaki;';
  readonly lavender = 'border-inline-end-color:lavender;';
  readonly lavenderblush = 'border-inline-end-color:lavenderblush;';
  readonly lawngreen = 'border-inline-end-color:lawngreen;';
  readonly lemonchiffon = 'border-inline-end-color:lemonchiffon;';
  readonly lightblue = 'border-inline-end-color:lightblue;';
  readonly lightcoral = 'border-inline-end-color:lightcoral;';
  readonly lightcyan = 'border-inline-end-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-inline-end-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-inline-end-color:lightgray;';
  readonly lightgreen = 'border-inline-end-color:lightgreen;';
  readonly lightgrey = 'border-inline-end-color:lightgrey;';
  readonly lightpink = 'border-inline-end-color:lightpink;';
  readonly lightsalmon = 'border-inline-end-color:lightsalmon;';
  readonly lightseagreen = 'border-inline-end-color:lightseagreen;';
  readonly lightskyblue = 'border-inline-end-color:lightskyblue;';
  readonly lightslategray = 'border-inline-end-color:lightslategray;';
  readonly lightslategrey = 'border-inline-end-color:lightslategrey;';
  readonly lightsteelblue = 'border-inline-end-color:lightsteelblue;';
  readonly lightyellow = 'border-inline-end-color:lightyellow;';
  readonly lime = 'border-inline-end-color:lime;';
  readonly limegreen = 'border-inline-end-color:limegreen;';
  readonly linen = 'border-inline-end-color:linen;';
  readonly magenta = 'border-inline-end-color:magenta;';
  readonly maroon = 'border-inline-end-color:maroon;';
  readonly mediumaquamarine = 'border-inline-end-color:mediumaquamarine;';
  readonly mediumblue = 'border-inline-end-color:mediumblue;';
  readonly mediumorchid = 'border-inline-end-color:mediumorchid;';
  readonly mediumpurple = 'border-inline-end-color:mediumpurple;';
  readonly mediumseagreen = 'border-inline-end-color:mediumseagreen;';
  readonly mediumslateblue = 'border-inline-end-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-inline-end-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-inline-end-color:mediumturquoise;';
  readonly mediumvioletred = 'border-inline-end-color:mediumvioletred;';
  readonly midnightblue = 'border-inline-end-color:midnightblue;';
  readonly mintcream = 'border-inline-end-color:mintcream;';
  readonly mistyrose = 'border-inline-end-color:mistyrose;';
  readonly moccasin = 'border-inline-end-color:moccasin;';
  readonly navajowhite = 'border-inline-end-color:navajowhite;';
  readonly navy = 'border-inline-end-color:navy;';
  readonly oldlace = 'border-inline-end-color:oldlace;';
  readonly olive = 'border-inline-end-color:olive;';
  readonly olivedrab = 'border-inline-end-color:olivedrab;';
  readonly orange = 'border-inline-end-color:orange;';
  readonly orangered = 'border-inline-end-color:orangered;';
  readonly orchid = 'border-inline-end-color:orchid;';
  readonly palegoldenrod = 'border-inline-end-color:palegoldenrod;';
  readonly palegreen = 'border-inline-end-color:palegreen;';
  readonly paleturquoise = 'border-inline-end-color:paleturquoise;';
  readonly palevioletred = 'border-inline-end-color:palevioletred;';
  readonly papayawhip = 'border-inline-end-color:papayawhip;';
  readonly peachpuff = 'border-inline-end-color:peachpuff;';
  readonly peru = 'border-inline-end-color:peru;';
  readonly pink = 'border-inline-end-color:pink;';
  readonly plum = 'border-inline-end-color:plum;';
  readonly powderblue = 'border-inline-end-color:powderblue;';
  readonly purple = 'border-inline-end-color:purple;';
  readonly rebeccapurple = 'border-inline-end-color:rebeccapurple;';
  readonly red = 'border-inline-end-color:red;';
  readonly revert = 'border-inline-end-color:revert;';
  readonly revertLayer = 'border-inline-end-color:revert-layer;';
  readonly rosybrown = 'border-inline-end-color:rosybrown;';
  readonly royalblue = 'border-inline-end-color:royalblue;';
  readonly saddlebrown = 'border-inline-end-color:saddlebrown;';
  readonly salmon = 'border-inline-end-color:salmon;';
  readonly sandybrown = 'border-inline-end-color:sandybrown;';
  readonly seagreen = 'border-inline-end-color:seagreen;';
  readonly seashell = 'border-inline-end-color:seashell;';
  readonly sienna = 'border-inline-end-color:sienna;';
  readonly silver = 'border-inline-end-color:silver;';
  readonly skyblue = 'border-inline-end-color:skyblue;';
  readonly slateblue = 'border-inline-end-color:slateblue;';
  readonly slategray = 'border-inline-end-color:slategray;';
  readonly slategrey = 'border-inline-end-color:slategrey;';
  readonly snow = 'border-inline-end-color:snow;';
  readonly springgreen = 'border-inline-end-color:springgreen;';
  readonly steelblue = 'border-inline-end-color:steelblue;';
  readonly tan = 'border-inline-end-color:tan;';
  readonly teal = 'border-inline-end-color:teal;';
  readonly thistle = 'border-inline-end-color:thistle;';
  readonly tomato = 'border-inline-end-color:tomato;';
  readonly transparent = 'border-inline-end-color:transparent;';
  readonly turquoise = 'border-inline-end-color:turquoise;';
  readonly unset = 'border-inline-end-color:unset;';
  readonly violet = 'border-inline-end-color:violet;';
  readonly wheat = 'border-inline-end-color:wheat;';
  readonly white = 'border-inline-end-color:white;';
  readonly whitesmoke = 'border-inline-end-color:whitesmoke;';
  readonly yellow = 'border-inline-end-color:yellow;';
  readonly yellowgreen = 'border-inline-end-color:yellowgreen;';
  constructor() {
    super('border-inline-end-color');
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

/** CSS 属性 border-inline-end-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
 */
export class BorderInlineEndStyleCss extends CssProperty<Property.BorderInlineEndStyle> {
  readonly dashed = 'border-inline-end-style:dashed;';
  readonly dotted = 'border-inline-end-style:dotted;';
  readonly double = 'border-inline-end-style:double;';
  readonly groove = 'border-inline-end-style:groove;';
  readonly hidden = 'border-inline-end-style:hidden;';
  readonly inherit = 'border-inline-end-style:inherit;';
  readonly initial = 'border-inline-end-style:initial;';
  readonly inset = 'border-inline-end-style:inset;';
  readonly none = 'border-inline-end-style:none;';
  readonly outset = 'border-inline-end-style:outset;';
  readonly revert = 'border-inline-end-style:revert;';
  readonly revertLayer = 'border-inline-end-style:revert-layer;';
  readonly ridge = 'border-inline-end-style:ridge;';
  readonly solid = 'border-inline-end-style:solid;';
  readonly unset = 'border-inline-end-style:unset;';
  constructor() {
    super('border-inline-end-style');
  }
}

/** CSS 属性 border-inline-end-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
 */
export class BorderInlineEndWidthCss extends LengthCssProperty<Property.BorderInlineEndWidth> {
  readonly inherit = 'border-inline-end-width:inherit;';
  readonly initial = 'border-inline-end-width:initial;';
  readonly medium = 'border-inline-end-width:medium;';
  readonly revert = 'border-inline-end-width:revert;';
  readonly revertLayer = 'border-inline-end-width:revert-layer;';
  readonly thick = 'border-inline-end-width:thick;';
  readonly thin = 'border-inline-end-width:thin;';
  readonly unset = 'border-inline-end-width:unset;';
  constructor() {
    super('border-inline-end-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderInlineEndWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineEndWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderInlineEndWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineEndWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderInlineEndWidth, number> | (string & {}),
    preferred: Extract<Property.BorderInlineEndWidth, number> | (string & {}),
    maximum: Extract<Property.BorderInlineEndWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-inline-start。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
 */
export class BorderInlineStartCss extends LengthCssProperty<Property.BorderInlineStart> {
  readonly AccentColor = 'border-inline-start:AccentColor;';
  readonly AccentColorText = 'border-inline-start:AccentColorText;';
  readonly ActiveBorder = 'border-inline-start:ActiveBorder;';
  readonly ActiveCaption = 'border-inline-start:ActiveCaption;';
  readonly ActiveText = 'border-inline-start:ActiveText;';
  readonly AppWorkspace = 'border-inline-start:AppWorkspace;';
  readonly Background = 'border-inline-start:Background;';
  readonly ButtonBorder = 'border-inline-start:ButtonBorder;';
  readonly ButtonFace = 'border-inline-start:ButtonFace;';
  readonly ButtonHighlight = 'border-inline-start:ButtonHighlight;';
  readonly ButtonShadow = 'border-inline-start:ButtonShadow;';
  readonly ButtonText = 'border-inline-start:ButtonText;';
  readonly Canvas = 'border-inline-start:Canvas;';
  readonly CanvasText = 'border-inline-start:CanvasText;';
  readonly CaptionText = 'border-inline-start:CaptionText;';
  readonly Field = 'border-inline-start:Field;';
  readonly FieldText = 'border-inline-start:FieldText;';
  readonly GrayText = 'border-inline-start:GrayText;';
  readonly Highlight = 'border-inline-start:Highlight;';
  readonly HighlightText = 'border-inline-start:HighlightText;';
  readonly InactiveBorder = 'border-inline-start:InactiveBorder;';
  readonly InactiveCaption = 'border-inline-start:InactiveCaption;';
  readonly InactiveCaptionText = 'border-inline-start:InactiveCaptionText;';
  readonly InfoBackground = 'border-inline-start:InfoBackground;';
  readonly InfoText = 'border-inline-start:InfoText;';
  readonly LinkText = 'border-inline-start:LinkText;';
  readonly Mark = 'border-inline-start:Mark;';
  readonly MarkText = 'border-inline-start:MarkText;';
  readonly Menu = 'border-inline-start:Menu;';
  readonly MenuText = 'border-inline-start:MenuText;';
  readonly Scrollbar = 'border-inline-start:Scrollbar;';
  readonly SelectedItem = 'border-inline-start:SelectedItem;';
  readonly SelectedItemText = 'border-inline-start:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-inline-start:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-inline-start:ThreeDFace;';
  readonly ThreeDHighlight = 'border-inline-start:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-inline-start:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-inline-start:ThreeDShadow;';
  readonly VisitedText = 'border-inline-start:VisitedText;';
  readonly Window = 'border-inline-start:Window;';
  readonly WindowFrame = 'border-inline-start:WindowFrame;';
  readonly WindowText = 'border-inline-start:WindowText;';
  readonly aliceblue = 'border-inline-start:aliceblue;';
  readonly antiquewhite = 'border-inline-start:antiquewhite;';
  readonly aqua = 'border-inline-start:aqua;';
  readonly aquamarine = 'border-inline-start:aquamarine;';
  readonly azure = 'border-inline-start:azure;';
  readonly beige = 'border-inline-start:beige;';
  readonly bisque = 'border-inline-start:bisque;';
  readonly black = 'border-inline-start:black;';
  readonly blanchedalmond = 'border-inline-start:blanchedalmond;';
  readonly blue = 'border-inline-start:blue;';
  readonly blueviolet = 'border-inline-start:blueviolet;';
  readonly brown = 'border-inline-start:brown;';
  readonly burlywood = 'border-inline-start:burlywood;';
  readonly cadetblue = 'border-inline-start:cadetblue;';
  readonly chartreuse = 'border-inline-start:chartreuse;';
  readonly chocolate = 'border-inline-start:chocolate;';
  readonly coral = 'border-inline-start:coral;';
  readonly cornflowerblue = 'border-inline-start:cornflowerblue;';
  readonly cornsilk = 'border-inline-start:cornsilk;';
  readonly crimson = 'border-inline-start:crimson;';
  readonly currentColor = 'border-inline-start:currentColor;';
  readonly cyan = 'border-inline-start:cyan;';
  readonly darkblue = 'border-inline-start:darkblue;';
  readonly darkcyan = 'border-inline-start:darkcyan;';
  readonly darkgoldenrod = 'border-inline-start:darkgoldenrod;';
  readonly darkgray = 'border-inline-start:darkgray;';
  readonly darkgreen = 'border-inline-start:darkgreen;';
  readonly darkgrey = 'border-inline-start:darkgrey;';
  readonly darkkhaki = 'border-inline-start:darkkhaki;';
  readonly darkmagenta = 'border-inline-start:darkmagenta;';
  readonly darkolivegreen = 'border-inline-start:darkolivegreen;';
  readonly darkorange = 'border-inline-start:darkorange;';
  readonly darkorchid = 'border-inline-start:darkorchid;';
  readonly darkred = 'border-inline-start:darkred;';
  readonly darksalmon = 'border-inline-start:darksalmon;';
  readonly darkseagreen = 'border-inline-start:darkseagreen;';
  readonly darkslateblue = 'border-inline-start:darkslateblue;';
  readonly darkslategray = 'border-inline-start:darkslategray;';
  readonly darkslategrey = 'border-inline-start:darkslategrey;';
  readonly darkturquoise = 'border-inline-start:darkturquoise;';
  readonly darkviolet = 'border-inline-start:darkviolet;';
  readonly dashed = 'border-inline-start:dashed;';
  readonly deeppink = 'border-inline-start:deeppink;';
  readonly deepskyblue = 'border-inline-start:deepskyblue;';
  readonly dimgray = 'border-inline-start:dimgray;';
  readonly dimgrey = 'border-inline-start:dimgrey;';
  readonly dodgerblue = 'border-inline-start:dodgerblue;';
  readonly dotted = 'border-inline-start:dotted;';
  readonly double = 'border-inline-start:double;';
  readonly firebrick = 'border-inline-start:firebrick;';
  readonly floralwhite = 'border-inline-start:floralwhite;';
  readonly forestgreen = 'border-inline-start:forestgreen;';
  readonly fuchsia = 'border-inline-start:fuchsia;';
  readonly gainsboro = 'border-inline-start:gainsboro;';
  readonly ghostwhite = 'border-inline-start:ghostwhite;';
  readonly gold = 'border-inline-start:gold;';
  readonly goldenrod = 'border-inline-start:goldenrod;';
  readonly gray = 'border-inline-start:gray;';
  readonly green = 'border-inline-start:green;';
  readonly greenyellow = 'border-inline-start:greenyellow;';
  readonly grey = 'border-inline-start:grey;';
  readonly groove = 'border-inline-start:groove;';
  readonly hidden = 'border-inline-start:hidden;';
  readonly honeydew = 'border-inline-start:honeydew;';
  readonly hotpink = 'border-inline-start:hotpink;';
  readonly indianred = 'border-inline-start:indianred;';
  readonly indigo = 'border-inline-start:indigo;';
  readonly inherit = 'border-inline-start:inherit;';
  readonly initial = 'border-inline-start:initial;';
  readonly inset = 'border-inline-start:inset;';
  readonly ivory = 'border-inline-start:ivory;';
  readonly khaki = 'border-inline-start:khaki;';
  readonly lavender = 'border-inline-start:lavender;';
  readonly lavenderblush = 'border-inline-start:lavenderblush;';
  readonly lawngreen = 'border-inline-start:lawngreen;';
  readonly lemonchiffon = 'border-inline-start:lemonchiffon;';
  readonly lightblue = 'border-inline-start:lightblue;';
  readonly lightcoral = 'border-inline-start:lightcoral;';
  readonly lightcyan = 'border-inline-start:lightcyan;';
  readonly lightgoldenrodyellow = 'border-inline-start:lightgoldenrodyellow;';
  readonly lightgray = 'border-inline-start:lightgray;';
  readonly lightgreen = 'border-inline-start:lightgreen;';
  readonly lightgrey = 'border-inline-start:lightgrey;';
  readonly lightpink = 'border-inline-start:lightpink;';
  readonly lightsalmon = 'border-inline-start:lightsalmon;';
  readonly lightseagreen = 'border-inline-start:lightseagreen;';
  readonly lightskyblue = 'border-inline-start:lightskyblue;';
  readonly lightslategray = 'border-inline-start:lightslategray;';
  readonly lightslategrey = 'border-inline-start:lightslategrey;';
  readonly lightsteelblue = 'border-inline-start:lightsteelblue;';
  readonly lightyellow = 'border-inline-start:lightyellow;';
  readonly lime = 'border-inline-start:lime;';
  readonly limegreen = 'border-inline-start:limegreen;';
  readonly linen = 'border-inline-start:linen;';
  readonly magenta = 'border-inline-start:magenta;';
  readonly maroon = 'border-inline-start:maroon;';
  readonly medium = 'border-inline-start:medium;';
  readonly mediumaquamarine = 'border-inline-start:mediumaquamarine;';
  readonly mediumblue = 'border-inline-start:mediumblue;';
  readonly mediumorchid = 'border-inline-start:mediumorchid;';
  readonly mediumpurple = 'border-inline-start:mediumpurple;';
  readonly mediumseagreen = 'border-inline-start:mediumseagreen;';
  readonly mediumslateblue = 'border-inline-start:mediumslateblue;';
  readonly mediumspringgreen = 'border-inline-start:mediumspringgreen;';
  readonly mediumturquoise = 'border-inline-start:mediumturquoise;';
  readonly mediumvioletred = 'border-inline-start:mediumvioletred;';
  readonly midnightblue = 'border-inline-start:midnightblue;';
  readonly mintcream = 'border-inline-start:mintcream;';
  readonly mistyrose = 'border-inline-start:mistyrose;';
  readonly moccasin = 'border-inline-start:moccasin;';
  readonly navajowhite = 'border-inline-start:navajowhite;';
  readonly navy = 'border-inline-start:navy;';
  readonly none = 'border-inline-start:none;';
  readonly oldlace = 'border-inline-start:oldlace;';
  readonly olive = 'border-inline-start:olive;';
  readonly olivedrab = 'border-inline-start:olivedrab;';
  readonly orange = 'border-inline-start:orange;';
  readonly orangered = 'border-inline-start:orangered;';
  readonly orchid = 'border-inline-start:orchid;';
  readonly outset = 'border-inline-start:outset;';
  readonly palegoldenrod = 'border-inline-start:palegoldenrod;';
  readonly palegreen = 'border-inline-start:palegreen;';
  readonly paleturquoise = 'border-inline-start:paleturquoise;';
  readonly palevioletred = 'border-inline-start:palevioletred;';
  readonly papayawhip = 'border-inline-start:papayawhip;';
  readonly peachpuff = 'border-inline-start:peachpuff;';
  readonly peru = 'border-inline-start:peru;';
  readonly pink = 'border-inline-start:pink;';
  readonly plum = 'border-inline-start:plum;';
  readonly powderblue = 'border-inline-start:powderblue;';
  readonly purple = 'border-inline-start:purple;';
  readonly rebeccapurple = 'border-inline-start:rebeccapurple;';
  readonly red = 'border-inline-start:red;';
  readonly revert = 'border-inline-start:revert;';
  readonly revertLayer = 'border-inline-start:revert-layer;';
  readonly ridge = 'border-inline-start:ridge;';
  readonly rosybrown = 'border-inline-start:rosybrown;';
  readonly royalblue = 'border-inline-start:royalblue;';
  readonly saddlebrown = 'border-inline-start:saddlebrown;';
  readonly salmon = 'border-inline-start:salmon;';
  readonly sandybrown = 'border-inline-start:sandybrown;';
  readonly seagreen = 'border-inline-start:seagreen;';
  readonly seashell = 'border-inline-start:seashell;';
  readonly sienna = 'border-inline-start:sienna;';
  readonly silver = 'border-inline-start:silver;';
  readonly skyblue = 'border-inline-start:skyblue;';
  readonly slateblue = 'border-inline-start:slateblue;';
  readonly slategray = 'border-inline-start:slategray;';
  readonly slategrey = 'border-inline-start:slategrey;';
  readonly snow = 'border-inline-start:snow;';
  readonly solid = 'border-inline-start:solid;';
  readonly springgreen = 'border-inline-start:springgreen;';
  readonly steelblue = 'border-inline-start:steelblue;';
  readonly tan = 'border-inline-start:tan;';
  readonly teal = 'border-inline-start:teal;';
  readonly thick = 'border-inline-start:thick;';
  readonly thin = 'border-inline-start:thin;';
  readonly thistle = 'border-inline-start:thistle;';
  readonly tomato = 'border-inline-start:tomato;';
  readonly transparent = 'border-inline-start:transparent;';
  readonly turquoise = 'border-inline-start:turquoise;';
  readonly unset = 'border-inline-start:unset;';
  readonly violet = 'border-inline-start:violet;';
  readonly wheat = 'border-inline-start:wheat;';
  readonly white = 'border-inline-start:white;';
  readonly whitesmoke = 'border-inline-start:whitesmoke;';
  readonly yellow = 'border-inline-start:yellow;';
  readonly yellowgreen = 'border-inline-start:yellowgreen;';
  constructor() {
    super('border-inline-start');
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
    value: Extract<Property.BorderInlineStart, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderInlineStart, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineStart, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderInlineStart, number> | (string & {}),
    preferred: Extract<Property.BorderInlineStart, number> | (string & {}),
    maximum: Extract<Property.BorderInlineStart, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-inline-start-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
 */
export class BorderInlineStartColorCss extends CssProperty<Property.BorderInlineStartColor> {
  readonly AccentColor = 'border-inline-start-color:AccentColor;';
  readonly AccentColorText = 'border-inline-start-color:AccentColorText;';
  readonly ActiveBorder = 'border-inline-start-color:ActiveBorder;';
  readonly ActiveCaption = 'border-inline-start-color:ActiveCaption;';
  readonly ActiveText = 'border-inline-start-color:ActiveText;';
  readonly AppWorkspace = 'border-inline-start-color:AppWorkspace;';
  readonly Background = 'border-inline-start-color:Background;';
  readonly ButtonBorder = 'border-inline-start-color:ButtonBorder;';
  readonly ButtonFace = 'border-inline-start-color:ButtonFace;';
  readonly ButtonHighlight = 'border-inline-start-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-inline-start-color:ButtonShadow;';
  readonly ButtonText = 'border-inline-start-color:ButtonText;';
  readonly Canvas = 'border-inline-start-color:Canvas;';
  readonly CanvasText = 'border-inline-start-color:CanvasText;';
  readonly CaptionText = 'border-inline-start-color:CaptionText;';
  readonly Field = 'border-inline-start-color:Field;';
  readonly FieldText = 'border-inline-start-color:FieldText;';
  readonly GrayText = 'border-inline-start-color:GrayText;';
  readonly Highlight = 'border-inline-start-color:Highlight;';
  readonly HighlightText = 'border-inline-start-color:HighlightText;';
  readonly InactiveBorder = 'border-inline-start-color:InactiveBorder;';
  readonly InactiveCaption = 'border-inline-start-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-inline-start-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-inline-start-color:InfoBackground;';
  readonly InfoText = 'border-inline-start-color:InfoText;';
  readonly LinkText = 'border-inline-start-color:LinkText;';
  readonly Mark = 'border-inline-start-color:Mark;';
  readonly MarkText = 'border-inline-start-color:MarkText;';
  readonly Menu = 'border-inline-start-color:Menu;';
  readonly MenuText = 'border-inline-start-color:MenuText;';
  readonly Scrollbar = 'border-inline-start-color:Scrollbar;';
  readonly SelectedItem = 'border-inline-start-color:SelectedItem;';
  readonly SelectedItemText = 'border-inline-start-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-inline-start-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-inline-start-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-inline-start-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-inline-start-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-inline-start-color:ThreeDShadow;';
  readonly VisitedText = 'border-inline-start-color:VisitedText;';
  readonly Window = 'border-inline-start-color:Window;';
  readonly WindowFrame = 'border-inline-start-color:WindowFrame;';
  readonly WindowText = 'border-inline-start-color:WindowText;';
  readonly aliceblue = 'border-inline-start-color:aliceblue;';
  readonly antiquewhite = 'border-inline-start-color:antiquewhite;';
  readonly aqua = 'border-inline-start-color:aqua;';
  readonly aquamarine = 'border-inline-start-color:aquamarine;';
  readonly azure = 'border-inline-start-color:azure;';
  readonly beige = 'border-inline-start-color:beige;';
  readonly bisque = 'border-inline-start-color:bisque;';
  readonly black = 'border-inline-start-color:black;';
  readonly blanchedalmond = 'border-inline-start-color:blanchedalmond;';
  readonly blue = 'border-inline-start-color:blue;';
  readonly blueviolet = 'border-inline-start-color:blueviolet;';
  readonly brown = 'border-inline-start-color:brown;';
  readonly burlywood = 'border-inline-start-color:burlywood;';
  readonly cadetblue = 'border-inline-start-color:cadetblue;';
  readonly chartreuse = 'border-inline-start-color:chartreuse;';
  readonly chocolate = 'border-inline-start-color:chocolate;';
  readonly coral = 'border-inline-start-color:coral;';
  readonly cornflowerblue = 'border-inline-start-color:cornflowerblue;';
  readonly cornsilk = 'border-inline-start-color:cornsilk;';
  readonly crimson = 'border-inline-start-color:crimson;';
  readonly currentColor = 'border-inline-start-color:currentColor;';
  readonly cyan = 'border-inline-start-color:cyan;';
  readonly darkblue = 'border-inline-start-color:darkblue;';
  readonly darkcyan = 'border-inline-start-color:darkcyan;';
  readonly darkgoldenrod = 'border-inline-start-color:darkgoldenrod;';
  readonly darkgray = 'border-inline-start-color:darkgray;';
  readonly darkgreen = 'border-inline-start-color:darkgreen;';
  readonly darkgrey = 'border-inline-start-color:darkgrey;';
  readonly darkkhaki = 'border-inline-start-color:darkkhaki;';
  readonly darkmagenta = 'border-inline-start-color:darkmagenta;';
  readonly darkolivegreen = 'border-inline-start-color:darkolivegreen;';
  readonly darkorange = 'border-inline-start-color:darkorange;';
  readonly darkorchid = 'border-inline-start-color:darkorchid;';
  readonly darkred = 'border-inline-start-color:darkred;';
  readonly darksalmon = 'border-inline-start-color:darksalmon;';
  readonly darkseagreen = 'border-inline-start-color:darkseagreen;';
  readonly darkslateblue = 'border-inline-start-color:darkslateblue;';
  readonly darkslategray = 'border-inline-start-color:darkslategray;';
  readonly darkslategrey = 'border-inline-start-color:darkslategrey;';
  readonly darkturquoise = 'border-inline-start-color:darkturquoise;';
  readonly darkviolet = 'border-inline-start-color:darkviolet;';
  readonly deeppink = 'border-inline-start-color:deeppink;';
  readonly deepskyblue = 'border-inline-start-color:deepskyblue;';
  readonly dimgray = 'border-inline-start-color:dimgray;';
  readonly dimgrey = 'border-inline-start-color:dimgrey;';
  readonly dodgerblue = 'border-inline-start-color:dodgerblue;';
  readonly firebrick = 'border-inline-start-color:firebrick;';
  readonly floralwhite = 'border-inline-start-color:floralwhite;';
  readonly forestgreen = 'border-inline-start-color:forestgreen;';
  readonly fuchsia = 'border-inline-start-color:fuchsia;';
  readonly gainsboro = 'border-inline-start-color:gainsboro;';
  readonly ghostwhite = 'border-inline-start-color:ghostwhite;';
  readonly gold = 'border-inline-start-color:gold;';
  readonly goldenrod = 'border-inline-start-color:goldenrod;';
  readonly gray = 'border-inline-start-color:gray;';
  readonly green = 'border-inline-start-color:green;';
  readonly greenyellow = 'border-inline-start-color:greenyellow;';
  readonly grey = 'border-inline-start-color:grey;';
  readonly honeydew = 'border-inline-start-color:honeydew;';
  readonly hotpink = 'border-inline-start-color:hotpink;';
  readonly indianred = 'border-inline-start-color:indianred;';
  readonly indigo = 'border-inline-start-color:indigo;';
  readonly inherit = 'border-inline-start-color:inherit;';
  readonly initial = 'border-inline-start-color:initial;';
  readonly ivory = 'border-inline-start-color:ivory;';
  readonly khaki = 'border-inline-start-color:khaki;';
  readonly lavender = 'border-inline-start-color:lavender;';
  readonly lavenderblush = 'border-inline-start-color:lavenderblush;';
  readonly lawngreen = 'border-inline-start-color:lawngreen;';
  readonly lemonchiffon = 'border-inline-start-color:lemonchiffon;';
  readonly lightblue = 'border-inline-start-color:lightblue;';
  readonly lightcoral = 'border-inline-start-color:lightcoral;';
  readonly lightcyan = 'border-inline-start-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-inline-start-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-inline-start-color:lightgray;';
  readonly lightgreen = 'border-inline-start-color:lightgreen;';
  readonly lightgrey = 'border-inline-start-color:lightgrey;';
  readonly lightpink = 'border-inline-start-color:lightpink;';
  readonly lightsalmon = 'border-inline-start-color:lightsalmon;';
  readonly lightseagreen = 'border-inline-start-color:lightseagreen;';
  readonly lightskyblue = 'border-inline-start-color:lightskyblue;';
  readonly lightslategray = 'border-inline-start-color:lightslategray;';
  readonly lightslategrey = 'border-inline-start-color:lightslategrey;';
  readonly lightsteelblue = 'border-inline-start-color:lightsteelblue;';
  readonly lightyellow = 'border-inline-start-color:lightyellow;';
  readonly lime = 'border-inline-start-color:lime;';
  readonly limegreen = 'border-inline-start-color:limegreen;';
  readonly linen = 'border-inline-start-color:linen;';
  readonly magenta = 'border-inline-start-color:magenta;';
  readonly maroon = 'border-inline-start-color:maroon;';
  readonly mediumaquamarine = 'border-inline-start-color:mediumaquamarine;';
  readonly mediumblue = 'border-inline-start-color:mediumblue;';
  readonly mediumorchid = 'border-inline-start-color:mediumorchid;';
  readonly mediumpurple = 'border-inline-start-color:mediumpurple;';
  readonly mediumseagreen = 'border-inline-start-color:mediumseagreen;';
  readonly mediumslateblue = 'border-inline-start-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-inline-start-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-inline-start-color:mediumturquoise;';
  readonly mediumvioletred = 'border-inline-start-color:mediumvioletred;';
  readonly midnightblue = 'border-inline-start-color:midnightblue;';
  readonly mintcream = 'border-inline-start-color:mintcream;';
  readonly mistyrose = 'border-inline-start-color:mistyrose;';
  readonly moccasin = 'border-inline-start-color:moccasin;';
  readonly navajowhite = 'border-inline-start-color:navajowhite;';
  readonly navy = 'border-inline-start-color:navy;';
  readonly oldlace = 'border-inline-start-color:oldlace;';
  readonly olive = 'border-inline-start-color:olive;';
  readonly olivedrab = 'border-inline-start-color:olivedrab;';
  readonly orange = 'border-inline-start-color:orange;';
  readonly orangered = 'border-inline-start-color:orangered;';
  readonly orchid = 'border-inline-start-color:orchid;';
  readonly palegoldenrod = 'border-inline-start-color:palegoldenrod;';
  readonly palegreen = 'border-inline-start-color:palegreen;';
  readonly paleturquoise = 'border-inline-start-color:paleturquoise;';
  readonly palevioletred = 'border-inline-start-color:palevioletred;';
  readonly papayawhip = 'border-inline-start-color:papayawhip;';
  readonly peachpuff = 'border-inline-start-color:peachpuff;';
  readonly peru = 'border-inline-start-color:peru;';
  readonly pink = 'border-inline-start-color:pink;';
  readonly plum = 'border-inline-start-color:plum;';
  readonly powderblue = 'border-inline-start-color:powderblue;';
  readonly purple = 'border-inline-start-color:purple;';
  readonly rebeccapurple = 'border-inline-start-color:rebeccapurple;';
  readonly red = 'border-inline-start-color:red;';
  readonly revert = 'border-inline-start-color:revert;';
  readonly revertLayer = 'border-inline-start-color:revert-layer;';
  readonly rosybrown = 'border-inline-start-color:rosybrown;';
  readonly royalblue = 'border-inline-start-color:royalblue;';
  readonly saddlebrown = 'border-inline-start-color:saddlebrown;';
  readonly salmon = 'border-inline-start-color:salmon;';
  readonly sandybrown = 'border-inline-start-color:sandybrown;';
  readonly seagreen = 'border-inline-start-color:seagreen;';
  readonly seashell = 'border-inline-start-color:seashell;';
  readonly sienna = 'border-inline-start-color:sienna;';
  readonly silver = 'border-inline-start-color:silver;';
  readonly skyblue = 'border-inline-start-color:skyblue;';
  readonly slateblue = 'border-inline-start-color:slateblue;';
  readonly slategray = 'border-inline-start-color:slategray;';
  readonly slategrey = 'border-inline-start-color:slategrey;';
  readonly snow = 'border-inline-start-color:snow;';
  readonly springgreen = 'border-inline-start-color:springgreen;';
  readonly steelblue = 'border-inline-start-color:steelblue;';
  readonly tan = 'border-inline-start-color:tan;';
  readonly teal = 'border-inline-start-color:teal;';
  readonly thistle = 'border-inline-start-color:thistle;';
  readonly tomato = 'border-inline-start-color:tomato;';
  readonly transparent = 'border-inline-start-color:transparent;';
  readonly turquoise = 'border-inline-start-color:turquoise;';
  readonly unset = 'border-inline-start-color:unset;';
  readonly violet = 'border-inline-start-color:violet;';
  readonly wheat = 'border-inline-start-color:wheat;';
  readonly white = 'border-inline-start-color:white;';
  readonly whitesmoke = 'border-inline-start-color:whitesmoke;';
  readonly yellow = 'border-inline-start-color:yellow;';
  readonly yellowgreen = 'border-inline-start-color:yellowgreen;';
  constructor() {
    super('border-inline-start-color');
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

/** CSS 属性 border-inline-start-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
 */
export class BorderInlineStartStyleCss extends CssProperty<Property.BorderInlineStartStyle> {
  readonly dashed = 'border-inline-start-style:dashed;';
  readonly dotted = 'border-inline-start-style:dotted;';
  readonly double = 'border-inline-start-style:double;';
  readonly groove = 'border-inline-start-style:groove;';
  readonly hidden = 'border-inline-start-style:hidden;';
  readonly inherit = 'border-inline-start-style:inherit;';
  readonly initial = 'border-inline-start-style:initial;';
  readonly inset = 'border-inline-start-style:inset;';
  readonly none = 'border-inline-start-style:none;';
  readonly outset = 'border-inline-start-style:outset;';
  readonly revert = 'border-inline-start-style:revert;';
  readonly revertLayer = 'border-inline-start-style:revert-layer;';
  readonly ridge = 'border-inline-start-style:ridge;';
  readonly solid = 'border-inline-start-style:solid;';
  readonly unset = 'border-inline-start-style:unset;';
  constructor() {
    super('border-inline-start-style');
  }
}

/** CSS 属性 border-inline-start-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
 */
export class BorderInlineStartWidthCss extends LengthCssProperty<Property.BorderInlineStartWidth> {
  readonly inherit = 'border-inline-start-width:inherit;';
  readonly initial = 'border-inline-start-width:initial;';
  readonly medium = 'border-inline-start-width:medium;';
  readonly revert = 'border-inline-start-width:revert;';
  readonly revertLayer = 'border-inline-start-width:revert-layer;';
  readonly thick = 'border-inline-start-width:thick;';
  readonly thin = 'border-inline-start-width:thin;';
  readonly unset = 'border-inline-start-width:unset;';
  constructor() {
    super('border-inline-start-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderInlineStartWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineStartWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderInlineStartWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineStartWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderInlineStartWidth, number> | (string & {}),
    preferred: Extract<Property.BorderInlineStartWidth, number> | (string & {}),
    maximum: Extract<Property.BorderInlineStartWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-inline-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
 */
export class BorderInlineStyleCss extends CssProperty<Property.BorderInlineStyle> {
  readonly dashed = 'border-inline-style:dashed;';
  readonly dotted = 'border-inline-style:dotted;';
  readonly double = 'border-inline-style:double;';
  readonly groove = 'border-inline-style:groove;';
  readonly hidden = 'border-inline-style:hidden;';
  readonly inherit = 'border-inline-style:inherit;';
  readonly initial = 'border-inline-style:initial;';
  readonly inset = 'border-inline-style:inset;';
  readonly none = 'border-inline-style:none;';
  readonly outset = 'border-inline-style:outset;';
  readonly revert = 'border-inline-style:revert;';
  readonly revertLayer = 'border-inline-style:revert-layer;';
  readonly ridge = 'border-inline-style:ridge;';
  readonly solid = 'border-inline-style:solid;';
  readonly unset = 'border-inline-style:unset;';
  constructor() {
    super('border-inline-style');
  }
}

/** CSS 属性 border-inline-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
 */
export class BorderInlineWidthCss extends LengthCssProperty<Property.BorderInlineWidth> {
  readonly inherit = 'border-inline-width:inherit;';
  readonly initial = 'border-inline-width:initial;';
  readonly medium = 'border-inline-width:medium;';
  readonly revert = 'border-inline-width:revert;';
  readonly revertLayer = 'border-inline-width:revert-layer;';
  readonly thick = 'border-inline-width:thick;';
  readonly thin = 'border-inline-width:thin;';
  readonly unset = 'border-inline-width:unset;';
  constructor() {
    super('border-inline-width');
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
    value: Extract<Property.BorderInlineWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderInlineWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderInlineWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderInlineWidth, number> | (string & {}),
    preferred: Extract<Property.BorderInlineWidth, number> | (string & {}),
    maximum: Extract<Property.BorderInlineWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-left。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
 */
export class BorderLeftCss extends LengthCssProperty<Property.BorderLeft> {
  readonly AccentColor = 'border-left:AccentColor;';
  readonly AccentColorText = 'border-left:AccentColorText;';
  readonly ActiveBorder = 'border-left:ActiveBorder;';
  readonly ActiveCaption = 'border-left:ActiveCaption;';
  readonly ActiveText = 'border-left:ActiveText;';
  readonly AppWorkspace = 'border-left:AppWorkspace;';
  readonly Background = 'border-left:Background;';
  readonly ButtonBorder = 'border-left:ButtonBorder;';
  readonly ButtonFace = 'border-left:ButtonFace;';
  readonly ButtonHighlight = 'border-left:ButtonHighlight;';
  readonly ButtonShadow = 'border-left:ButtonShadow;';
  readonly ButtonText = 'border-left:ButtonText;';
  readonly Canvas = 'border-left:Canvas;';
  readonly CanvasText = 'border-left:CanvasText;';
  readonly CaptionText = 'border-left:CaptionText;';
  readonly Field = 'border-left:Field;';
  readonly FieldText = 'border-left:FieldText;';
  readonly GrayText = 'border-left:GrayText;';
  readonly Highlight = 'border-left:Highlight;';
  readonly HighlightText = 'border-left:HighlightText;';
  readonly InactiveBorder = 'border-left:InactiveBorder;';
  readonly InactiveCaption = 'border-left:InactiveCaption;';
  readonly InactiveCaptionText = 'border-left:InactiveCaptionText;';
  readonly InfoBackground = 'border-left:InfoBackground;';
  readonly InfoText = 'border-left:InfoText;';
  readonly LinkText = 'border-left:LinkText;';
  readonly Mark = 'border-left:Mark;';
  readonly MarkText = 'border-left:MarkText;';
  readonly Menu = 'border-left:Menu;';
  readonly MenuText = 'border-left:MenuText;';
  readonly Scrollbar = 'border-left:Scrollbar;';
  readonly SelectedItem = 'border-left:SelectedItem;';
  readonly SelectedItemText = 'border-left:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-left:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-left:ThreeDFace;';
  readonly ThreeDHighlight = 'border-left:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-left:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-left:ThreeDShadow;';
  readonly VisitedText = 'border-left:VisitedText;';
  readonly Window = 'border-left:Window;';
  readonly WindowFrame = 'border-left:WindowFrame;';
  readonly WindowText = 'border-left:WindowText;';
  readonly aliceblue = 'border-left:aliceblue;';
  readonly antiquewhite = 'border-left:antiquewhite;';
  readonly aqua = 'border-left:aqua;';
  readonly aquamarine = 'border-left:aquamarine;';
  readonly azure = 'border-left:azure;';
  readonly beige = 'border-left:beige;';
  readonly bisque = 'border-left:bisque;';
  readonly black = 'border-left:black;';
  readonly blanchedalmond = 'border-left:blanchedalmond;';
  readonly blue = 'border-left:blue;';
  readonly blueviolet = 'border-left:blueviolet;';
  readonly brown = 'border-left:brown;';
  readonly burlywood = 'border-left:burlywood;';
  readonly cadetblue = 'border-left:cadetblue;';
  readonly chartreuse = 'border-left:chartreuse;';
  readonly chocolate = 'border-left:chocolate;';
  readonly coral = 'border-left:coral;';
  readonly cornflowerblue = 'border-left:cornflowerblue;';
  readonly cornsilk = 'border-left:cornsilk;';
  readonly crimson = 'border-left:crimson;';
  readonly currentColor = 'border-left:currentColor;';
  readonly cyan = 'border-left:cyan;';
  readonly darkblue = 'border-left:darkblue;';
  readonly darkcyan = 'border-left:darkcyan;';
  readonly darkgoldenrod = 'border-left:darkgoldenrod;';
  readonly darkgray = 'border-left:darkgray;';
  readonly darkgreen = 'border-left:darkgreen;';
  readonly darkgrey = 'border-left:darkgrey;';
  readonly darkkhaki = 'border-left:darkkhaki;';
  readonly darkmagenta = 'border-left:darkmagenta;';
  readonly darkolivegreen = 'border-left:darkolivegreen;';
  readonly darkorange = 'border-left:darkorange;';
  readonly darkorchid = 'border-left:darkorchid;';
  readonly darkred = 'border-left:darkred;';
  readonly darksalmon = 'border-left:darksalmon;';
  readonly darkseagreen = 'border-left:darkseagreen;';
  readonly darkslateblue = 'border-left:darkslateblue;';
  readonly darkslategray = 'border-left:darkslategray;';
  readonly darkslategrey = 'border-left:darkslategrey;';
  readonly darkturquoise = 'border-left:darkturquoise;';
  readonly darkviolet = 'border-left:darkviolet;';
  readonly dashed = 'border-left:dashed;';
  readonly deeppink = 'border-left:deeppink;';
  readonly deepskyblue = 'border-left:deepskyblue;';
  readonly dimgray = 'border-left:dimgray;';
  readonly dimgrey = 'border-left:dimgrey;';
  readonly dodgerblue = 'border-left:dodgerblue;';
  readonly dotted = 'border-left:dotted;';
  readonly double = 'border-left:double;';
  readonly firebrick = 'border-left:firebrick;';
  readonly floralwhite = 'border-left:floralwhite;';
  readonly forestgreen = 'border-left:forestgreen;';
  readonly fuchsia = 'border-left:fuchsia;';
  readonly gainsboro = 'border-left:gainsboro;';
  readonly ghostwhite = 'border-left:ghostwhite;';
  readonly gold = 'border-left:gold;';
  readonly goldenrod = 'border-left:goldenrod;';
  readonly gray = 'border-left:gray;';
  readonly green = 'border-left:green;';
  readonly greenyellow = 'border-left:greenyellow;';
  readonly grey = 'border-left:grey;';
  readonly groove = 'border-left:groove;';
  readonly hidden = 'border-left:hidden;';
  readonly honeydew = 'border-left:honeydew;';
  readonly hotpink = 'border-left:hotpink;';
  readonly indianred = 'border-left:indianred;';
  readonly indigo = 'border-left:indigo;';
  readonly inherit = 'border-left:inherit;';
  readonly initial = 'border-left:initial;';
  readonly inset = 'border-left:inset;';
  readonly ivory = 'border-left:ivory;';
  readonly khaki = 'border-left:khaki;';
  readonly lavender = 'border-left:lavender;';
  readonly lavenderblush = 'border-left:lavenderblush;';
  readonly lawngreen = 'border-left:lawngreen;';
  readonly lemonchiffon = 'border-left:lemonchiffon;';
  readonly lightblue = 'border-left:lightblue;';
  readonly lightcoral = 'border-left:lightcoral;';
  readonly lightcyan = 'border-left:lightcyan;';
  readonly lightgoldenrodyellow = 'border-left:lightgoldenrodyellow;';
  readonly lightgray = 'border-left:lightgray;';
  readonly lightgreen = 'border-left:lightgreen;';
  readonly lightgrey = 'border-left:lightgrey;';
  readonly lightpink = 'border-left:lightpink;';
  readonly lightsalmon = 'border-left:lightsalmon;';
  readonly lightseagreen = 'border-left:lightseagreen;';
  readonly lightskyblue = 'border-left:lightskyblue;';
  readonly lightslategray = 'border-left:lightslategray;';
  readonly lightslategrey = 'border-left:lightslategrey;';
  readonly lightsteelblue = 'border-left:lightsteelblue;';
  readonly lightyellow = 'border-left:lightyellow;';
  readonly lime = 'border-left:lime;';
  readonly limegreen = 'border-left:limegreen;';
  readonly linen = 'border-left:linen;';
  readonly magenta = 'border-left:magenta;';
  readonly maroon = 'border-left:maroon;';
  readonly medium = 'border-left:medium;';
  readonly mediumaquamarine = 'border-left:mediumaquamarine;';
  readonly mediumblue = 'border-left:mediumblue;';
  readonly mediumorchid = 'border-left:mediumorchid;';
  readonly mediumpurple = 'border-left:mediumpurple;';
  readonly mediumseagreen = 'border-left:mediumseagreen;';
  readonly mediumslateblue = 'border-left:mediumslateblue;';
  readonly mediumspringgreen = 'border-left:mediumspringgreen;';
  readonly mediumturquoise = 'border-left:mediumturquoise;';
  readonly mediumvioletred = 'border-left:mediumvioletred;';
  readonly midnightblue = 'border-left:midnightblue;';
  readonly mintcream = 'border-left:mintcream;';
  readonly mistyrose = 'border-left:mistyrose;';
  readonly moccasin = 'border-left:moccasin;';
  readonly navajowhite = 'border-left:navajowhite;';
  readonly navy = 'border-left:navy;';
  readonly none = 'border-left:none;';
  readonly oldlace = 'border-left:oldlace;';
  readonly olive = 'border-left:olive;';
  readonly olivedrab = 'border-left:olivedrab;';
  readonly orange = 'border-left:orange;';
  readonly orangered = 'border-left:orangered;';
  readonly orchid = 'border-left:orchid;';
  readonly outset = 'border-left:outset;';
  readonly palegoldenrod = 'border-left:palegoldenrod;';
  readonly palegreen = 'border-left:palegreen;';
  readonly paleturquoise = 'border-left:paleturquoise;';
  readonly palevioletred = 'border-left:palevioletred;';
  readonly papayawhip = 'border-left:papayawhip;';
  readonly peachpuff = 'border-left:peachpuff;';
  readonly peru = 'border-left:peru;';
  readonly pink = 'border-left:pink;';
  readonly plum = 'border-left:plum;';
  readonly powderblue = 'border-left:powderblue;';
  readonly purple = 'border-left:purple;';
  readonly rebeccapurple = 'border-left:rebeccapurple;';
  readonly red = 'border-left:red;';
  readonly revert = 'border-left:revert;';
  readonly revertLayer = 'border-left:revert-layer;';
  readonly ridge = 'border-left:ridge;';
  readonly rosybrown = 'border-left:rosybrown;';
  readonly royalblue = 'border-left:royalblue;';
  readonly saddlebrown = 'border-left:saddlebrown;';
  readonly salmon = 'border-left:salmon;';
  readonly sandybrown = 'border-left:sandybrown;';
  readonly seagreen = 'border-left:seagreen;';
  readonly seashell = 'border-left:seashell;';
  readonly sienna = 'border-left:sienna;';
  readonly silver = 'border-left:silver;';
  readonly skyblue = 'border-left:skyblue;';
  readonly slateblue = 'border-left:slateblue;';
  readonly slategray = 'border-left:slategray;';
  readonly slategrey = 'border-left:slategrey;';
  readonly snow = 'border-left:snow;';
  readonly solid = 'border-left:solid;';
  readonly springgreen = 'border-left:springgreen;';
  readonly steelblue = 'border-left:steelblue;';
  readonly tan = 'border-left:tan;';
  readonly teal = 'border-left:teal;';
  readonly thick = 'border-left:thick;';
  readonly thin = 'border-left:thin;';
  readonly thistle = 'border-left:thistle;';
  readonly tomato = 'border-left:tomato;';
  readonly transparent = 'border-left:transparent;';
  readonly turquoise = 'border-left:turquoise;';
  readonly unset = 'border-left:unset;';
  readonly violet = 'border-left:violet;';
  readonly wheat = 'border-left:wheat;';
  readonly white = 'border-left:white;';
  readonly whitesmoke = 'border-left:whitesmoke;';
  readonly yellow = 'border-left:yellow;';
  readonly yellowgreen = 'border-left:yellowgreen;';
  constructor() {
    super('border-left');
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
    value: Extract<Property.BorderLeft, number> | (string & {}),
    ...others: (Extract<Property.BorderLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderLeft, number> | (string & {}),
    ...others: (Extract<Property.BorderLeft, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderLeft, number> | (string & {}),
    preferred: Extract<Property.BorderLeft, number> | (string & {}),
    maximum: Extract<Property.BorderLeft, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-left-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
 */
export class BorderLeftColorCss extends CssProperty<Property.BorderLeftColor> {
  readonly AccentColor = 'border-left-color:AccentColor;';
  readonly AccentColorText = 'border-left-color:AccentColorText;';
  readonly ActiveBorder = 'border-left-color:ActiveBorder;';
  readonly ActiveCaption = 'border-left-color:ActiveCaption;';
  readonly ActiveText = 'border-left-color:ActiveText;';
  readonly AppWorkspace = 'border-left-color:AppWorkspace;';
  readonly Background = 'border-left-color:Background;';
  readonly ButtonBorder = 'border-left-color:ButtonBorder;';
  readonly ButtonFace = 'border-left-color:ButtonFace;';
  readonly ButtonHighlight = 'border-left-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-left-color:ButtonShadow;';
  readonly ButtonText = 'border-left-color:ButtonText;';
  readonly Canvas = 'border-left-color:Canvas;';
  readonly CanvasText = 'border-left-color:CanvasText;';
  readonly CaptionText = 'border-left-color:CaptionText;';
  readonly Field = 'border-left-color:Field;';
  readonly FieldText = 'border-left-color:FieldText;';
  readonly GrayText = 'border-left-color:GrayText;';
  readonly Highlight = 'border-left-color:Highlight;';
  readonly HighlightText = 'border-left-color:HighlightText;';
  readonly InactiveBorder = 'border-left-color:InactiveBorder;';
  readonly InactiveCaption = 'border-left-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-left-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-left-color:InfoBackground;';
  readonly InfoText = 'border-left-color:InfoText;';
  readonly LinkText = 'border-left-color:LinkText;';
  readonly Mark = 'border-left-color:Mark;';
  readonly MarkText = 'border-left-color:MarkText;';
  readonly Menu = 'border-left-color:Menu;';
  readonly MenuText = 'border-left-color:MenuText;';
  readonly Scrollbar = 'border-left-color:Scrollbar;';
  readonly SelectedItem = 'border-left-color:SelectedItem;';
  readonly SelectedItemText = 'border-left-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-left-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-left-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-left-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-left-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-left-color:ThreeDShadow;';
  readonly VisitedText = 'border-left-color:VisitedText;';
  readonly Window = 'border-left-color:Window;';
  readonly WindowFrame = 'border-left-color:WindowFrame;';
  readonly WindowText = 'border-left-color:WindowText;';
  readonly aliceblue = 'border-left-color:aliceblue;';
  readonly antiquewhite = 'border-left-color:antiquewhite;';
  readonly aqua = 'border-left-color:aqua;';
  readonly aquamarine = 'border-left-color:aquamarine;';
  readonly azure = 'border-left-color:azure;';
  readonly beige = 'border-left-color:beige;';
  readonly bisque = 'border-left-color:bisque;';
  readonly black = 'border-left-color:black;';
  readonly blanchedalmond = 'border-left-color:blanchedalmond;';
  readonly blue = 'border-left-color:blue;';
  readonly blueviolet = 'border-left-color:blueviolet;';
  readonly brown = 'border-left-color:brown;';
  readonly burlywood = 'border-left-color:burlywood;';
  readonly cadetblue = 'border-left-color:cadetblue;';
  readonly chartreuse = 'border-left-color:chartreuse;';
  readonly chocolate = 'border-left-color:chocolate;';
  readonly coral = 'border-left-color:coral;';
  readonly cornflowerblue = 'border-left-color:cornflowerblue;';
  readonly cornsilk = 'border-left-color:cornsilk;';
  readonly crimson = 'border-left-color:crimson;';
  readonly currentColor = 'border-left-color:currentColor;';
  readonly cyan = 'border-left-color:cyan;';
  readonly darkblue = 'border-left-color:darkblue;';
  readonly darkcyan = 'border-left-color:darkcyan;';
  readonly darkgoldenrod = 'border-left-color:darkgoldenrod;';
  readonly darkgray = 'border-left-color:darkgray;';
  readonly darkgreen = 'border-left-color:darkgreen;';
  readonly darkgrey = 'border-left-color:darkgrey;';
  readonly darkkhaki = 'border-left-color:darkkhaki;';
  readonly darkmagenta = 'border-left-color:darkmagenta;';
  readonly darkolivegreen = 'border-left-color:darkolivegreen;';
  readonly darkorange = 'border-left-color:darkorange;';
  readonly darkorchid = 'border-left-color:darkorchid;';
  readonly darkred = 'border-left-color:darkred;';
  readonly darksalmon = 'border-left-color:darksalmon;';
  readonly darkseagreen = 'border-left-color:darkseagreen;';
  readonly darkslateblue = 'border-left-color:darkslateblue;';
  readonly darkslategray = 'border-left-color:darkslategray;';
  readonly darkslategrey = 'border-left-color:darkslategrey;';
  readonly darkturquoise = 'border-left-color:darkturquoise;';
  readonly darkviolet = 'border-left-color:darkviolet;';
  readonly deeppink = 'border-left-color:deeppink;';
  readonly deepskyblue = 'border-left-color:deepskyblue;';
  readonly dimgray = 'border-left-color:dimgray;';
  readonly dimgrey = 'border-left-color:dimgrey;';
  readonly dodgerblue = 'border-left-color:dodgerblue;';
  readonly firebrick = 'border-left-color:firebrick;';
  readonly floralwhite = 'border-left-color:floralwhite;';
  readonly forestgreen = 'border-left-color:forestgreen;';
  readonly fuchsia = 'border-left-color:fuchsia;';
  readonly gainsboro = 'border-left-color:gainsboro;';
  readonly ghostwhite = 'border-left-color:ghostwhite;';
  readonly gold = 'border-left-color:gold;';
  readonly goldenrod = 'border-left-color:goldenrod;';
  readonly gray = 'border-left-color:gray;';
  readonly green = 'border-left-color:green;';
  readonly greenyellow = 'border-left-color:greenyellow;';
  readonly grey = 'border-left-color:grey;';
  readonly honeydew = 'border-left-color:honeydew;';
  readonly hotpink = 'border-left-color:hotpink;';
  readonly indianred = 'border-left-color:indianred;';
  readonly indigo = 'border-left-color:indigo;';
  readonly inherit = 'border-left-color:inherit;';
  readonly initial = 'border-left-color:initial;';
  readonly ivory = 'border-left-color:ivory;';
  readonly khaki = 'border-left-color:khaki;';
  readonly lavender = 'border-left-color:lavender;';
  readonly lavenderblush = 'border-left-color:lavenderblush;';
  readonly lawngreen = 'border-left-color:lawngreen;';
  readonly lemonchiffon = 'border-left-color:lemonchiffon;';
  readonly lightblue = 'border-left-color:lightblue;';
  readonly lightcoral = 'border-left-color:lightcoral;';
  readonly lightcyan = 'border-left-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-left-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-left-color:lightgray;';
  readonly lightgreen = 'border-left-color:lightgreen;';
  readonly lightgrey = 'border-left-color:lightgrey;';
  readonly lightpink = 'border-left-color:lightpink;';
  readonly lightsalmon = 'border-left-color:lightsalmon;';
  readonly lightseagreen = 'border-left-color:lightseagreen;';
  readonly lightskyblue = 'border-left-color:lightskyblue;';
  readonly lightslategray = 'border-left-color:lightslategray;';
  readonly lightslategrey = 'border-left-color:lightslategrey;';
  readonly lightsteelblue = 'border-left-color:lightsteelblue;';
  readonly lightyellow = 'border-left-color:lightyellow;';
  readonly lime = 'border-left-color:lime;';
  readonly limegreen = 'border-left-color:limegreen;';
  readonly linen = 'border-left-color:linen;';
  readonly magenta = 'border-left-color:magenta;';
  readonly maroon = 'border-left-color:maroon;';
  readonly mediumaquamarine = 'border-left-color:mediumaquamarine;';
  readonly mediumblue = 'border-left-color:mediumblue;';
  readonly mediumorchid = 'border-left-color:mediumorchid;';
  readonly mediumpurple = 'border-left-color:mediumpurple;';
  readonly mediumseagreen = 'border-left-color:mediumseagreen;';
  readonly mediumslateblue = 'border-left-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-left-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-left-color:mediumturquoise;';
  readonly mediumvioletred = 'border-left-color:mediumvioletred;';
  readonly midnightblue = 'border-left-color:midnightblue;';
  readonly mintcream = 'border-left-color:mintcream;';
  readonly mistyrose = 'border-left-color:mistyrose;';
  readonly moccasin = 'border-left-color:moccasin;';
  readonly navajowhite = 'border-left-color:navajowhite;';
  readonly navy = 'border-left-color:navy;';
  readonly oldlace = 'border-left-color:oldlace;';
  readonly olive = 'border-left-color:olive;';
  readonly olivedrab = 'border-left-color:olivedrab;';
  readonly orange = 'border-left-color:orange;';
  readonly orangered = 'border-left-color:orangered;';
  readonly orchid = 'border-left-color:orchid;';
  readonly palegoldenrod = 'border-left-color:palegoldenrod;';
  readonly palegreen = 'border-left-color:palegreen;';
  readonly paleturquoise = 'border-left-color:paleturquoise;';
  readonly palevioletred = 'border-left-color:palevioletred;';
  readonly papayawhip = 'border-left-color:papayawhip;';
  readonly peachpuff = 'border-left-color:peachpuff;';
  readonly peru = 'border-left-color:peru;';
  readonly pink = 'border-left-color:pink;';
  readonly plum = 'border-left-color:plum;';
  readonly powderblue = 'border-left-color:powderblue;';
  readonly purple = 'border-left-color:purple;';
  readonly rebeccapurple = 'border-left-color:rebeccapurple;';
  readonly red = 'border-left-color:red;';
  readonly revert = 'border-left-color:revert;';
  readonly revertLayer = 'border-left-color:revert-layer;';
  readonly rosybrown = 'border-left-color:rosybrown;';
  readonly royalblue = 'border-left-color:royalblue;';
  readonly saddlebrown = 'border-left-color:saddlebrown;';
  readonly salmon = 'border-left-color:salmon;';
  readonly sandybrown = 'border-left-color:sandybrown;';
  readonly seagreen = 'border-left-color:seagreen;';
  readonly seashell = 'border-left-color:seashell;';
  readonly sienna = 'border-left-color:sienna;';
  readonly silver = 'border-left-color:silver;';
  readonly skyblue = 'border-left-color:skyblue;';
  readonly slateblue = 'border-left-color:slateblue;';
  readonly slategray = 'border-left-color:slategray;';
  readonly slategrey = 'border-left-color:slategrey;';
  readonly snow = 'border-left-color:snow;';
  readonly springgreen = 'border-left-color:springgreen;';
  readonly steelblue = 'border-left-color:steelblue;';
  readonly tan = 'border-left-color:tan;';
  readonly teal = 'border-left-color:teal;';
  readonly thistle = 'border-left-color:thistle;';
  readonly tomato = 'border-left-color:tomato;';
  readonly transparent = 'border-left-color:transparent;';
  readonly turquoise = 'border-left-color:turquoise;';
  readonly unset = 'border-left-color:unset;';
  readonly violet = 'border-left-color:violet;';
  readonly wheat = 'border-left-color:wheat;';
  readonly white = 'border-left-color:white;';
  readonly whitesmoke = 'border-left-color:whitesmoke;';
  readonly yellow = 'border-left-color:yellow;';
  readonly yellowgreen = 'border-left-color:yellowgreen;';
  constructor() {
    super('border-left-color');
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

/** CSS 属性 border-left-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
 */
export class BorderLeftStyleCss extends CssProperty<Property.BorderLeftStyle> {
  readonly dashed = 'border-left-style:dashed;';
  readonly dotted = 'border-left-style:dotted;';
  readonly double = 'border-left-style:double;';
  readonly groove = 'border-left-style:groove;';
  readonly hidden = 'border-left-style:hidden;';
  readonly inherit = 'border-left-style:inherit;';
  readonly initial = 'border-left-style:initial;';
  readonly inset = 'border-left-style:inset;';
  readonly none = 'border-left-style:none;';
  readonly outset = 'border-left-style:outset;';
  readonly revert = 'border-left-style:revert;';
  readonly revertLayer = 'border-left-style:revert-layer;';
  readonly ridge = 'border-left-style:ridge;';
  readonly solid = 'border-left-style:solid;';
  readonly unset = 'border-left-style:unset;';
  constructor() {
    super('border-left-style');
  }
}

/** CSS 属性 border-left-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
 */
export class BorderLeftWidthCss extends LengthCssProperty<Property.BorderLeftWidth> {
  readonly inherit = 'border-left-width:inherit;';
  readonly initial = 'border-left-width:initial;';
  readonly medium = 'border-left-width:medium;';
  readonly revert = 'border-left-width:revert;';
  readonly revertLayer = 'border-left-width:revert-layer;';
  readonly thick = 'border-left-width:thick;';
  readonly thin = 'border-left-width:thin;';
  readonly unset = 'border-left-width:unset;';
  constructor() {
    super('border-left-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderLeftWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderLeftWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderLeftWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderLeftWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderLeftWidth, number> | (string & {}),
    preferred: Extract<Property.BorderLeftWidth, number> | (string & {}),
    maximum: Extract<Property.BorderLeftWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-radius。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
 */
export class BorderRadiusCss extends LengthCssProperty<Property.BorderRadius> {
  readonly inherit = 'border-radius:inherit;';
  readonly initial = 'border-radius:initial;';
  readonly revert = 'border-radius:revert;';
  readonly revertLayer = 'border-radius:revert-layer;';
  readonly unset = 'border-radius:unset;';
  constructor() {
    super('border-radius');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(value1: number, value2: number, value3: number): string;
  percent(value1: number, value2: number, value3: number, value4: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderRadius, number> | (string & {}),
    preferred: Extract<Property.BorderRadius, number> | (string & {}),
    maximum: Extract<Property.BorderRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-right。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
 */
export class BorderRightCss extends LengthCssProperty<Property.BorderRight> {
  readonly AccentColor = 'border-right:AccentColor;';
  readonly AccentColorText = 'border-right:AccentColorText;';
  readonly ActiveBorder = 'border-right:ActiveBorder;';
  readonly ActiveCaption = 'border-right:ActiveCaption;';
  readonly ActiveText = 'border-right:ActiveText;';
  readonly AppWorkspace = 'border-right:AppWorkspace;';
  readonly Background = 'border-right:Background;';
  readonly ButtonBorder = 'border-right:ButtonBorder;';
  readonly ButtonFace = 'border-right:ButtonFace;';
  readonly ButtonHighlight = 'border-right:ButtonHighlight;';
  readonly ButtonShadow = 'border-right:ButtonShadow;';
  readonly ButtonText = 'border-right:ButtonText;';
  readonly Canvas = 'border-right:Canvas;';
  readonly CanvasText = 'border-right:CanvasText;';
  readonly CaptionText = 'border-right:CaptionText;';
  readonly Field = 'border-right:Field;';
  readonly FieldText = 'border-right:FieldText;';
  readonly GrayText = 'border-right:GrayText;';
  readonly Highlight = 'border-right:Highlight;';
  readonly HighlightText = 'border-right:HighlightText;';
  readonly InactiveBorder = 'border-right:InactiveBorder;';
  readonly InactiveCaption = 'border-right:InactiveCaption;';
  readonly InactiveCaptionText = 'border-right:InactiveCaptionText;';
  readonly InfoBackground = 'border-right:InfoBackground;';
  readonly InfoText = 'border-right:InfoText;';
  readonly LinkText = 'border-right:LinkText;';
  readonly Mark = 'border-right:Mark;';
  readonly MarkText = 'border-right:MarkText;';
  readonly Menu = 'border-right:Menu;';
  readonly MenuText = 'border-right:MenuText;';
  readonly Scrollbar = 'border-right:Scrollbar;';
  readonly SelectedItem = 'border-right:SelectedItem;';
  readonly SelectedItemText = 'border-right:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-right:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-right:ThreeDFace;';
  readonly ThreeDHighlight = 'border-right:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-right:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-right:ThreeDShadow;';
  readonly VisitedText = 'border-right:VisitedText;';
  readonly Window = 'border-right:Window;';
  readonly WindowFrame = 'border-right:WindowFrame;';
  readonly WindowText = 'border-right:WindowText;';
  readonly aliceblue = 'border-right:aliceblue;';
  readonly antiquewhite = 'border-right:antiquewhite;';
  readonly aqua = 'border-right:aqua;';
  readonly aquamarine = 'border-right:aquamarine;';
  readonly azure = 'border-right:azure;';
  readonly beige = 'border-right:beige;';
  readonly bisque = 'border-right:bisque;';
  readonly black = 'border-right:black;';
  readonly blanchedalmond = 'border-right:blanchedalmond;';
  readonly blue = 'border-right:blue;';
  readonly blueviolet = 'border-right:blueviolet;';
  readonly brown = 'border-right:brown;';
  readonly burlywood = 'border-right:burlywood;';
  readonly cadetblue = 'border-right:cadetblue;';
  readonly chartreuse = 'border-right:chartreuse;';
  readonly chocolate = 'border-right:chocolate;';
  readonly coral = 'border-right:coral;';
  readonly cornflowerblue = 'border-right:cornflowerblue;';
  readonly cornsilk = 'border-right:cornsilk;';
  readonly crimson = 'border-right:crimson;';
  readonly currentColor = 'border-right:currentColor;';
  readonly cyan = 'border-right:cyan;';
  readonly darkblue = 'border-right:darkblue;';
  readonly darkcyan = 'border-right:darkcyan;';
  readonly darkgoldenrod = 'border-right:darkgoldenrod;';
  readonly darkgray = 'border-right:darkgray;';
  readonly darkgreen = 'border-right:darkgreen;';
  readonly darkgrey = 'border-right:darkgrey;';
  readonly darkkhaki = 'border-right:darkkhaki;';
  readonly darkmagenta = 'border-right:darkmagenta;';
  readonly darkolivegreen = 'border-right:darkolivegreen;';
  readonly darkorange = 'border-right:darkorange;';
  readonly darkorchid = 'border-right:darkorchid;';
  readonly darkred = 'border-right:darkred;';
  readonly darksalmon = 'border-right:darksalmon;';
  readonly darkseagreen = 'border-right:darkseagreen;';
  readonly darkslateblue = 'border-right:darkslateblue;';
  readonly darkslategray = 'border-right:darkslategray;';
  readonly darkslategrey = 'border-right:darkslategrey;';
  readonly darkturquoise = 'border-right:darkturquoise;';
  readonly darkviolet = 'border-right:darkviolet;';
  readonly dashed = 'border-right:dashed;';
  readonly deeppink = 'border-right:deeppink;';
  readonly deepskyblue = 'border-right:deepskyblue;';
  readonly dimgray = 'border-right:dimgray;';
  readonly dimgrey = 'border-right:dimgrey;';
  readonly dodgerblue = 'border-right:dodgerblue;';
  readonly dotted = 'border-right:dotted;';
  readonly double = 'border-right:double;';
  readonly firebrick = 'border-right:firebrick;';
  readonly floralwhite = 'border-right:floralwhite;';
  readonly forestgreen = 'border-right:forestgreen;';
  readonly fuchsia = 'border-right:fuchsia;';
  readonly gainsboro = 'border-right:gainsboro;';
  readonly ghostwhite = 'border-right:ghostwhite;';
  readonly gold = 'border-right:gold;';
  readonly goldenrod = 'border-right:goldenrod;';
  readonly gray = 'border-right:gray;';
  readonly green = 'border-right:green;';
  readonly greenyellow = 'border-right:greenyellow;';
  readonly grey = 'border-right:grey;';
  readonly groove = 'border-right:groove;';
  readonly hidden = 'border-right:hidden;';
  readonly honeydew = 'border-right:honeydew;';
  readonly hotpink = 'border-right:hotpink;';
  readonly indianred = 'border-right:indianred;';
  readonly indigo = 'border-right:indigo;';
  readonly inherit = 'border-right:inherit;';
  readonly initial = 'border-right:initial;';
  readonly inset = 'border-right:inset;';
  readonly ivory = 'border-right:ivory;';
  readonly khaki = 'border-right:khaki;';
  readonly lavender = 'border-right:lavender;';
  readonly lavenderblush = 'border-right:lavenderblush;';
  readonly lawngreen = 'border-right:lawngreen;';
  readonly lemonchiffon = 'border-right:lemonchiffon;';
  readonly lightblue = 'border-right:lightblue;';
  readonly lightcoral = 'border-right:lightcoral;';
  readonly lightcyan = 'border-right:lightcyan;';
  readonly lightgoldenrodyellow = 'border-right:lightgoldenrodyellow;';
  readonly lightgray = 'border-right:lightgray;';
  readonly lightgreen = 'border-right:lightgreen;';
  readonly lightgrey = 'border-right:lightgrey;';
  readonly lightpink = 'border-right:lightpink;';
  readonly lightsalmon = 'border-right:lightsalmon;';
  readonly lightseagreen = 'border-right:lightseagreen;';
  readonly lightskyblue = 'border-right:lightskyblue;';
  readonly lightslategray = 'border-right:lightslategray;';
  readonly lightslategrey = 'border-right:lightslategrey;';
  readonly lightsteelblue = 'border-right:lightsteelblue;';
  readonly lightyellow = 'border-right:lightyellow;';
  readonly lime = 'border-right:lime;';
  readonly limegreen = 'border-right:limegreen;';
  readonly linen = 'border-right:linen;';
  readonly magenta = 'border-right:magenta;';
  readonly maroon = 'border-right:maroon;';
  readonly medium = 'border-right:medium;';
  readonly mediumaquamarine = 'border-right:mediumaquamarine;';
  readonly mediumblue = 'border-right:mediumblue;';
  readonly mediumorchid = 'border-right:mediumorchid;';
  readonly mediumpurple = 'border-right:mediumpurple;';
  readonly mediumseagreen = 'border-right:mediumseagreen;';
  readonly mediumslateblue = 'border-right:mediumslateblue;';
  readonly mediumspringgreen = 'border-right:mediumspringgreen;';
  readonly mediumturquoise = 'border-right:mediumturquoise;';
  readonly mediumvioletred = 'border-right:mediumvioletred;';
  readonly midnightblue = 'border-right:midnightblue;';
  readonly mintcream = 'border-right:mintcream;';
  readonly mistyrose = 'border-right:mistyrose;';
  readonly moccasin = 'border-right:moccasin;';
  readonly navajowhite = 'border-right:navajowhite;';
  readonly navy = 'border-right:navy;';
  readonly none = 'border-right:none;';
  readonly oldlace = 'border-right:oldlace;';
  readonly olive = 'border-right:olive;';
  readonly olivedrab = 'border-right:olivedrab;';
  readonly orange = 'border-right:orange;';
  readonly orangered = 'border-right:orangered;';
  readonly orchid = 'border-right:orchid;';
  readonly outset = 'border-right:outset;';
  readonly palegoldenrod = 'border-right:palegoldenrod;';
  readonly palegreen = 'border-right:palegreen;';
  readonly paleturquoise = 'border-right:paleturquoise;';
  readonly palevioletred = 'border-right:palevioletred;';
  readonly papayawhip = 'border-right:papayawhip;';
  readonly peachpuff = 'border-right:peachpuff;';
  readonly peru = 'border-right:peru;';
  readonly pink = 'border-right:pink;';
  readonly plum = 'border-right:plum;';
  readonly powderblue = 'border-right:powderblue;';
  readonly purple = 'border-right:purple;';
  readonly rebeccapurple = 'border-right:rebeccapurple;';
  readonly red = 'border-right:red;';
  readonly revert = 'border-right:revert;';
  readonly revertLayer = 'border-right:revert-layer;';
  readonly ridge = 'border-right:ridge;';
  readonly rosybrown = 'border-right:rosybrown;';
  readonly royalblue = 'border-right:royalblue;';
  readonly saddlebrown = 'border-right:saddlebrown;';
  readonly salmon = 'border-right:salmon;';
  readonly sandybrown = 'border-right:sandybrown;';
  readonly seagreen = 'border-right:seagreen;';
  readonly seashell = 'border-right:seashell;';
  readonly sienna = 'border-right:sienna;';
  readonly silver = 'border-right:silver;';
  readonly skyblue = 'border-right:skyblue;';
  readonly slateblue = 'border-right:slateblue;';
  readonly slategray = 'border-right:slategray;';
  readonly slategrey = 'border-right:slategrey;';
  readonly snow = 'border-right:snow;';
  readonly solid = 'border-right:solid;';
  readonly springgreen = 'border-right:springgreen;';
  readonly steelblue = 'border-right:steelblue;';
  readonly tan = 'border-right:tan;';
  readonly teal = 'border-right:teal;';
  readonly thick = 'border-right:thick;';
  readonly thin = 'border-right:thin;';
  readonly thistle = 'border-right:thistle;';
  readonly tomato = 'border-right:tomato;';
  readonly transparent = 'border-right:transparent;';
  readonly turquoise = 'border-right:turquoise;';
  readonly unset = 'border-right:unset;';
  readonly violet = 'border-right:violet;';
  readonly wheat = 'border-right:wheat;';
  readonly white = 'border-right:white;';
  readonly whitesmoke = 'border-right:whitesmoke;';
  readonly yellow = 'border-right:yellow;';
  readonly yellowgreen = 'border-right:yellowgreen;';
  constructor() {
    super('border-right');
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
    value: Extract<Property.BorderRight, number> | (string & {}),
    ...others: (Extract<Property.BorderRight, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderRight, number> | (string & {}),
    ...others: (Extract<Property.BorderRight, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderRight, number> | (string & {}),
    preferred: Extract<Property.BorderRight, number> | (string & {}),
    maximum: Extract<Property.BorderRight, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-right-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
 */
export class BorderRightColorCss extends CssProperty<Property.BorderRightColor> {
  readonly AccentColor = 'border-right-color:AccentColor;';
  readonly AccentColorText = 'border-right-color:AccentColorText;';
  readonly ActiveBorder = 'border-right-color:ActiveBorder;';
  readonly ActiveCaption = 'border-right-color:ActiveCaption;';
  readonly ActiveText = 'border-right-color:ActiveText;';
  readonly AppWorkspace = 'border-right-color:AppWorkspace;';
  readonly Background = 'border-right-color:Background;';
  readonly ButtonBorder = 'border-right-color:ButtonBorder;';
  readonly ButtonFace = 'border-right-color:ButtonFace;';
  readonly ButtonHighlight = 'border-right-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-right-color:ButtonShadow;';
  readonly ButtonText = 'border-right-color:ButtonText;';
  readonly Canvas = 'border-right-color:Canvas;';
  readonly CanvasText = 'border-right-color:CanvasText;';
  readonly CaptionText = 'border-right-color:CaptionText;';
  readonly Field = 'border-right-color:Field;';
  readonly FieldText = 'border-right-color:FieldText;';
  readonly GrayText = 'border-right-color:GrayText;';
  readonly Highlight = 'border-right-color:Highlight;';
  readonly HighlightText = 'border-right-color:HighlightText;';
  readonly InactiveBorder = 'border-right-color:InactiveBorder;';
  readonly InactiveCaption = 'border-right-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-right-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-right-color:InfoBackground;';
  readonly InfoText = 'border-right-color:InfoText;';
  readonly LinkText = 'border-right-color:LinkText;';
  readonly Mark = 'border-right-color:Mark;';
  readonly MarkText = 'border-right-color:MarkText;';
  readonly Menu = 'border-right-color:Menu;';
  readonly MenuText = 'border-right-color:MenuText;';
  readonly Scrollbar = 'border-right-color:Scrollbar;';
  readonly SelectedItem = 'border-right-color:SelectedItem;';
  readonly SelectedItemText = 'border-right-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-right-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-right-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-right-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-right-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-right-color:ThreeDShadow;';
  readonly VisitedText = 'border-right-color:VisitedText;';
  readonly Window = 'border-right-color:Window;';
  readonly WindowFrame = 'border-right-color:WindowFrame;';
  readonly WindowText = 'border-right-color:WindowText;';
  readonly aliceblue = 'border-right-color:aliceblue;';
  readonly antiquewhite = 'border-right-color:antiquewhite;';
  readonly aqua = 'border-right-color:aqua;';
  readonly aquamarine = 'border-right-color:aquamarine;';
  readonly azure = 'border-right-color:azure;';
  readonly beige = 'border-right-color:beige;';
  readonly bisque = 'border-right-color:bisque;';
  readonly black = 'border-right-color:black;';
  readonly blanchedalmond = 'border-right-color:blanchedalmond;';
  readonly blue = 'border-right-color:blue;';
  readonly blueviolet = 'border-right-color:blueviolet;';
  readonly brown = 'border-right-color:brown;';
  readonly burlywood = 'border-right-color:burlywood;';
  readonly cadetblue = 'border-right-color:cadetblue;';
  readonly chartreuse = 'border-right-color:chartreuse;';
  readonly chocolate = 'border-right-color:chocolate;';
  readonly coral = 'border-right-color:coral;';
  readonly cornflowerblue = 'border-right-color:cornflowerblue;';
  readonly cornsilk = 'border-right-color:cornsilk;';
  readonly crimson = 'border-right-color:crimson;';
  readonly currentColor = 'border-right-color:currentColor;';
  readonly cyan = 'border-right-color:cyan;';
  readonly darkblue = 'border-right-color:darkblue;';
  readonly darkcyan = 'border-right-color:darkcyan;';
  readonly darkgoldenrod = 'border-right-color:darkgoldenrod;';
  readonly darkgray = 'border-right-color:darkgray;';
  readonly darkgreen = 'border-right-color:darkgreen;';
  readonly darkgrey = 'border-right-color:darkgrey;';
  readonly darkkhaki = 'border-right-color:darkkhaki;';
  readonly darkmagenta = 'border-right-color:darkmagenta;';
  readonly darkolivegreen = 'border-right-color:darkolivegreen;';
  readonly darkorange = 'border-right-color:darkorange;';
  readonly darkorchid = 'border-right-color:darkorchid;';
  readonly darkred = 'border-right-color:darkred;';
  readonly darksalmon = 'border-right-color:darksalmon;';
  readonly darkseagreen = 'border-right-color:darkseagreen;';
  readonly darkslateblue = 'border-right-color:darkslateblue;';
  readonly darkslategray = 'border-right-color:darkslategray;';
  readonly darkslategrey = 'border-right-color:darkslategrey;';
  readonly darkturquoise = 'border-right-color:darkturquoise;';
  readonly darkviolet = 'border-right-color:darkviolet;';
  readonly deeppink = 'border-right-color:deeppink;';
  readonly deepskyblue = 'border-right-color:deepskyblue;';
  readonly dimgray = 'border-right-color:dimgray;';
  readonly dimgrey = 'border-right-color:dimgrey;';
  readonly dodgerblue = 'border-right-color:dodgerblue;';
  readonly firebrick = 'border-right-color:firebrick;';
  readonly floralwhite = 'border-right-color:floralwhite;';
  readonly forestgreen = 'border-right-color:forestgreen;';
  readonly fuchsia = 'border-right-color:fuchsia;';
  readonly gainsboro = 'border-right-color:gainsboro;';
  readonly ghostwhite = 'border-right-color:ghostwhite;';
  readonly gold = 'border-right-color:gold;';
  readonly goldenrod = 'border-right-color:goldenrod;';
  readonly gray = 'border-right-color:gray;';
  readonly green = 'border-right-color:green;';
  readonly greenyellow = 'border-right-color:greenyellow;';
  readonly grey = 'border-right-color:grey;';
  readonly honeydew = 'border-right-color:honeydew;';
  readonly hotpink = 'border-right-color:hotpink;';
  readonly indianred = 'border-right-color:indianred;';
  readonly indigo = 'border-right-color:indigo;';
  readonly inherit = 'border-right-color:inherit;';
  readonly initial = 'border-right-color:initial;';
  readonly ivory = 'border-right-color:ivory;';
  readonly khaki = 'border-right-color:khaki;';
  readonly lavender = 'border-right-color:lavender;';
  readonly lavenderblush = 'border-right-color:lavenderblush;';
  readonly lawngreen = 'border-right-color:lawngreen;';
  readonly lemonchiffon = 'border-right-color:lemonchiffon;';
  readonly lightblue = 'border-right-color:lightblue;';
  readonly lightcoral = 'border-right-color:lightcoral;';
  readonly lightcyan = 'border-right-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-right-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-right-color:lightgray;';
  readonly lightgreen = 'border-right-color:lightgreen;';
  readonly lightgrey = 'border-right-color:lightgrey;';
  readonly lightpink = 'border-right-color:lightpink;';
  readonly lightsalmon = 'border-right-color:lightsalmon;';
  readonly lightseagreen = 'border-right-color:lightseagreen;';
  readonly lightskyblue = 'border-right-color:lightskyblue;';
  readonly lightslategray = 'border-right-color:lightslategray;';
  readonly lightslategrey = 'border-right-color:lightslategrey;';
  readonly lightsteelblue = 'border-right-color:lightsteelblue;';
  readonly lightyellow = 'border-right-color:lightyellow;';
  readonly lime = 'border-right-color:lime;';
  readonly limegreen = 'border-right-color:limegreen;';
  readonly linen = 'border-right-color:linen;';
  readonly magenta = 'border-right-color:magenta;';
  readonly maroon = 'border-right-color:maroon;';
  readonly mediumaquamarine = 'border-right-color:mediumaquamarine;';
  readonly mediumblue = 'border-right-color:mediumblue;';
  readonly mediumorchid = 'border-right-color:mediumorchid;';
  readonly mediumpurple = 'border-right-color:mediumpurple;';
  readonly mediumseagreen = 'border-right-color:mediumseagreen;';
  readonly mediumslateblue = 'border-right-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-right-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-right-color:mediumturquoise;';
  readonly mediumvioletred = 'border-right-color:mediumvioletred;';
  readonly midnightblue = 'border-right-color:midnightblue;';
  readonly mintcream = 'border-right-color:mintcream;';
  readonly mistyrose = 'border-right-color:mistyrose;';
  readonly moccasin = 'border-right-color:moccasin;';
  readonly navajowhite = 'border-right-color:navajowhite;';
  readonly navy = 'border-right-color:navy;';
  readonly oldlace = 'border-right-color:oldlace;';
  readonly olive = 'border-right-color:olive;';
  readonly olivedrab = 'border-right-color:olivedrab;';
  readonly orange = 'border-right-color:orange;';
  readonly orangered = 'border-right-color:orangered;';
  readonly orchid = 'border-right-color:orchid;';
  readonly palegoldenrod = 'border-right-color:palegoldenrod;';
  readonly palegreen = 'border-right-color:palegreen;';
  readonly paleturquoise = 'border-right-color:paleturquoise;';
  readonly palevioletred = 'border-right-color:palevioletred;';
  readonly papayawhip = 'border-right-color:papayawhip;';
  readonly peachpuff = 'border-right-color:peachpuff;';
  readonly peru = 'border-right-color:peru;';
  readonly pink = 'border-right-color:pink;';
  readonly plum = 'border-right-color:plum;';
  readonly powderblue = 'border-right-color:powderblue;';
  readonly purple = 'border-right-color:purple;';
  readonly rebeccapurple = 'border-right-color:rebeccapurple;';
  readonly red = 'border-right-color:red;';
  readonly revert = 'border-right-color:revert;';
  readonly revertLayer = 'border-right-color:revert-layer;';
  readonly rosybrown = 'border-right-color:rosybrown;';
  readonly royalblue = 'border-right-color:royalblue;';
  readonly saddlebrown = 'border-right-color:saddlebrown;';
  readonly salmon = 'border-right-color:salmon;';
  readonly sandybrown = 'border-right-color:sandybrown;';
  readonly seagreen = 'border-right-color:seagreen;';
  readonly seashell = 'border-right-color:seashell;';
  readonly sienna = 'border-right-color:sienna;';
  readonly silver = 'border-right-color:silver;';
  readonly skyblue = 'border-right-color:skyblue;';
  readonly slateblue = 'border-right-color:slateblue;';
  readonly slategray = 'border-right-color:slategray;';
  readonly slategrey = 'border-right-color:slategrey;';
  readonly snow = 'border-right-color:snow;';
  readonly springgreen = 'border-right-color:springgreen;';
  readonly steelblue = 'border-right-color:steelblue;';
  readonly tan = 'border-right-color:tan;';
  readonly teal = 'border-right-color:teal;';
  readonly thistle = 'border-right-color:thistle;';
  readonly tomato = 'border-right-color:tomato;';
  readonly transparent = 'border-right-color:transparent;';
  readonly turquoise = 'border-right-color:turquoise;';
  readonly unset = 'border-right-color:unset;';
  readonly violet = 'border-right-color:violet;';
  readonly wheat = 'border-right-color:wheat;';
  readonly white = 'border-right-color:white;';
  readonly whitesmoke = 'border-right-color:whitesmoke;';
  readonly yellow = 'border-right-color:yellow;';
  readonly yellowgreen = 'border-right-color:yellowgreen;';
  constructor() {
    super('border-right-color');
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

/** CSS 属性 border-right-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
 */
export class BorderRightStyleCss extends CssProperty<Property.BorderRightStyle> {
  readonly dashed = 'border-right-style:dashed;';
  readonly dotted = 'border-right-style:dotted;';
  readonly double = 'border-right-style:double;';
  readonly groove = 'border-right-style:groove;';
  readonly hidden = 'border-right-style:hidden;';
  readonly inherit = 'border-right-style:inherit;';
  readonly initial = 'border-right-style:initial;';
  readonly inset = 'border-right-style:inset;';
  readonly none = 'border-right-style:none;';
  readonly outset = 'border-right-style:outset;';
  readonly revert = 'border-right-style:revert;';
  readonly revertLayer = 'border-right-style:revert-layer;';
  readonly ridge = 'border-right-style:ridge;';
  readonly solid = 'border-right-style:solid;';
  readonly unset = 'border-right-style:unset;';
  constructor() {
    super('border-right-style');
  }
}

/** CSS 属性 border-right-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
 */
export class BorderRightWidthCss extends LengthCssProperty<Property.BorderRightWidth> {
  readonly inherit = 'border-right-width:inherit;';
  readonly initial = 'border-right-width:initial;';
  readonly medium = 'border-right-width:medium;';
  readonly revert = 'border-right-width:revert;';
  readonly revertLayer = 'border-right-width:revert-layer;';
  readonly thick = 'border-right-width:thick;';
  readonly thin = 'border-right-width:thin;';
  readonly unset = 'border-right-width:unset;';
  constructor() {
    super('border-right-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderRightWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderRightWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderRightWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderRightWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderRightWidth, number> | (string & {}),
    preferred: Extract<Property.BorderRightWidth, number> | (string & {}),
    maximum: Extract<Property.BorderRightWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-spacing；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
 */
export class BorderSpacingCss extends LengthCssProperty<Property.BorderSpacing> {
  readonly inherit = 'border-spacing:inherit;';
  readonly initial = 'border-spacing:initial;';
  readonly revert = 'border-spacing:revert;';
  readonly revertLayer = 'border-spacing:revert-layer;';
  readonly unset = 'border-spacing:unset;';
  constructor() {
    super('border-spacing');
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
    value: Extract<Property.BorderSpacing, number> | (string & {}),
    ...others: (Extract<Property.BorderSpacing, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderSpacing, number> | (string & {}),
    ...others: (Extract<Property.BorderSpacing, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderSpacing, number> | (string & {}),
    preferred: Extract<Property.BorderSpacing, number> | (string & {}),
    maximum: Extract<Property.BorderSpacing, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-start-end-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
 */
export class BorderStartEndRadiusCss extends LengthCssProperty<Property.BorderStartEndRadius> {
  readonly inherit = 'border-start-end-radius:inherit;';
  readonly initial = 'border-start-end-radius:initial;';
  readonly revert = 'border-start-end-radius:revert;';
  readonly revertLayer = 'border-start-end-radius:revert-layer;';
  readonly unset = 'border-start-end-radius:unset;';
  constructor() {
    super('border-start-end-radius');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderStartEndRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderStartEndRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderStartEndRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderStartEndRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderStartEndRadius, number> | (string & {}),
    preferred: Extract<Property.BorderStartEndRadius, number> | (string & {}),
    maximum: Extract<Property.BorderStartEndRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-start-start-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
 */
export class BorderStartStartRadiusCss extends LengthCssProperty<Property.BorderStartStartRadius> {
  readonly inherit = 'border-start-start-radius:inherit;';
  readonly initial = 'border-start-start-radius:initial;';
  readonly revert = 'border-start-start-radius:revert;';
  readonly revertLayer = 'border-start-start-radius:revert-layer;';
  readonly unset = 'border-start-start-radius:unset;';
  constructor() {
    super('border-start-start-radius');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderStartStartRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderStartStartRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderStartStartRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderStartStartRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderStartStartRadius, number> | (string & {}),
    preferred: Extract<Property.BorderStartStartRadius, number> | (string & {}),
    maximum: Extract<Property.BorderStartStartRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-style。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
 */
export class BorderStyleCss extends CssProperty<Property.BorderStyle> {
  readonly dashed = 'border-style:dashed;';
  readonly dotted = 'border-style:dotted;';
  readonly double = 'border-style:double;';
  readonly groove = 'border-style:groove;';
  readonly hidden = 'border-style:hidden;';
  readonly inherit = 'border-style:inherit;';
  readonly initial = 'border-style:initial;';
  readonly inset = 'border-style:inset;';
  readonly none = 'border-style:none;';
  readonly outset = 'border-style:outset;';
  readonly revert = 'border-style:revert;';
  readonly revertLayer = 'border-style:revert-layer;';
  readonly ridge = 'border-style:ridge;';
  readonly solid = 'border-style:solid;';
  readonly unset = 'border-style:unset;';
  constructor() {
    super('border-style');
  }
}

/** CSS 属性 border-top。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
 */
export class BorderTopCss extends LengthCssProperty<Property.BorderTop> {
  readonly AccentColor = 'border-top:AccentColor;';
  readonly AccentColorText = 'border-top:AccentColorText;';
  readonly ActiveBorder = 'border-top:ActiveBorder;';
  readonly ActiveCaption = 'border-top:ActiveCaption;';
  readonly ActiveText = 'border-top:ActiveText;';
  readonly AppWorkspace = 'border-top:AppWorkspace;';
  readonly Background = 'border-top:Background;';
  readonly ButtonBorder = 'border-top:ButtonBorder;';
  readonly ButtonFace = 'border-top:ButtonFace;';
  readonly ButtonHighlight = 'border-top:ButtonHighlight;';
  readonly ButtonShadow = 'border-top:ButtonShadow;';
  readonly ButtonText = 'border-top:ButtonText;';
  readonly Canvas = 'border-top:Canvas;';
  readonly CanvasText = 'border-top:CanvasText;';
  readonly CaptionText = 'border-top:CaptionText;';
  readonly Field = 'border-top:Field;';
  readonly FieldText = 'border-top:FieldText;';
  readonly GrayText = 'border-top:GrayText;';
  readonly Highlight = 'border-top:Highlight;';
  readonly HighlightText = 'border-top:HighlightText;';
  readonly InactiveBorder = 'border-top:InactiveBorder;';
  readonly InactiveCaption = 'border-top:InactiveCaption;';
  readonly InactiveCaptionText = 'border-top:InactiveCaptionText;';
  readonly InfoBackground = 'border-top:InfoBackground;';
  readonly InfoText = 'border-top:InfoText;';
  readonly LinkText = 'border-top:LinkText;';
  readonly Mark = 'border-top:Mark;';
  readonly MarkText = 'border-top:MarkText;';
  readonly Menu = 'border-top:Menu;';
  readonly MenuText = 'border-top:MenuText;';
  readonly Scrollbar = 'border-top:Scrollbar;';
  readonly SelectedItem = 'border-top:SelectedItem;';
  readonly SelectedItemText = 'border-top:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-top:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-top:ThreeDFace;';
  readonly ThreeDHighlight = 'border-top:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-top:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-top:ThreeDShadow;';
  readonly VisitedText = 'border-top:VisitedText;';
  readonly Window = 'border-top:Window;';
  readonly WindowFrame = 'border-top:WindowFrame;';
  readonly WindowText = 'border-top:WindowText;';
  readonly aliceblue = 'border-top:aliceblue;';
  readonly antiquewhite = 'border-top:antiquewhite;';
  readonly aqua = 'border-top:aqua;';
  readonly aquamarine = 'border-top:aquamarine;';
  readonly azure = 'border-top:azure;';
  readonly beige = 'border-top:beige;';
  readonly bisque = 'border-top:bisque;';
  readonly black = 'border-top:black;';
  readonly blanchedalmond = 'border-top:blanchedalmond;';
  readonly blue = 'border-top:blue;';
  readonly blueviolet = 'border-top:blueviolet;';
  readonly brown = 'border-top:brown;';
  readonly burlywood = 'border-top:burlywood;';
  readonly cadetblue = 'border-top:cadetblue;';
  readonly chartreuse = 'border-top:chartreuse;';
  readonly chocolate = 'border-top:chocolate;';
  readonly coral = 'border-top:coral;';
  readonly cornflowerblue = 'border-top:cornflowerblue;';
  readonly cornsilk = 'border-top:cornsilk;';
  readonly crimson = 'border-top:crimson;';
  readonly currentColor = 'border-top:currentColor;';
  readonly cyan = 'border-top:cyan;';
  readonly darkblue = 'border-top:darkblue;';
  readonly darkcyan = 'border-top:darkcyan;';
  readonly darkgoldenrod = 'border-top:darkgoldenrod;';
  readonly darkgray = 'border-top:darkgray;';
  readonly darkgreen = 'border-top:darkgreen;';
  readonly darkgrey = 'border-top:darkgrey;';
  readonly darkkhaki = 'border-top:darkkhaki;';
  readonly darkmagenta = 'border-top:darkmagenta;';
  readonly darkolivegreen = 'border-top:darkolivegreen;';
  readonly darkorange = 'border-top:darkorange;';
  readonly darkorchid = 'border-top:darkorchid;';
  readonly darkred = 'border-top:darkred;';
  readonly darksalmon = 'border-top:darksalmon;';
  readonly darkseagreen = 'border-top:darkseagreen;';
  readonly darkslateblue = 'border-top:darkslateblue;';
  readonly darkslategray = 'border-top:darkslategray;';
  readonly darkslategrey = 'border-top:darkslategrey;';
  readonly darkturquoise = 'border-top:darkturquoise;';
  readonly darkviolet = 'border-top:darkviolet;';
  readonly dashed = 'border-top:dashed;';
  readonly deeppink = 'border-top:deeppink;';
  readonly deepskyblue = 'border-top:deepskyblue;';
  readonly dimgray = 'border-top:dimgray;';
  readonly dimgrey = 'border-top:dimgrey;';
  readonly dodgerblue = 'border-top:dodgerblue;';
  readonly dotted = 'border-top:dotted;';
  readonly double = 'border-top:double;';
  readonly firebrick = 'border-top:firebrick;';
  readonly floralwhite = 'border-top:floralwhite;';
  readonly forestgreen = 'border-top:forestgreen;';
  readonly fuchsia = 'border-top:fuchsia;';
  readonly gainsboro = 'border-top:gainsboro;';
  readonly ghostwhite = 'border-top:ghostwhite;';
  readonly gold = 'border-top:gold;';
  readonly goldenrod = 'border-top:goldenrod;';
  readonly gray = 'border-top:gray;';
  readonly green = 'border-top:green;';
  readonly greenyellow = 'border-top:greenyellow;';
  readonly grey = 'border-top:grey;';
  readonly groove = 'border-top:groove;';
  readonly hidden = 'border-top:hidden;';
  readonly honeydew = 'border-top:honeydew;';
  readonly hotpink = 'border-top:hotpink;';
  readonly indianred = 'border-top:indianred;';
  readonly indigo = 'border-top:indigo;';
  readonly inherit = 'border-top:inherit;';
  readonly initial = 'border-top:initial;';
  readonly inset = 'border-top:inset;';
  readonly ivory = 'border-top:ivory;';
  readonly khaki = 'border-top:khaki;';
  readonly lavender = 'border-top:lavender;';
  readonly lavenderblush = 'border-top:lavenderblush;';
  readonly lawngreen = 'border-top:lawngreen;';
  readonly lemonchiffon = 'border-top:lemonchiffon;';
  readonly lightblue = 'border-top:lightblue;';
  readonly lightcoral = 'border-top:lightcoral;';
  readonly lightcyan = 'border-top:lightcyan;';
  readonly lightgoldenrodyellow = 'border-top:lightgoldenrodyellow;';
  readonly lightgray = 'border-top:lightgray;';
  readonly lightgreen = 'border-top:lightgreen;';
  readonly lightgrey = 'border-top:lightgrey;';
  readonly lightpink = 'border-top:lightpink;';
  readonly lightsalmon = 'border-top:lightsalmon;';
  readonly lightseagreen = 'border-top:lightseagreen;';
  readonly lightskyblue = 'border-top:lightskyblue;';
  readonly lightslategray = 'border-top:lightslategray;';
  readonly lightslategrey = 'border-top:lightslategrey;';
  readonly lightsteelblue = 'border-top:lightsteelblue;';
  readonly lightyellow = 'border-top:lightyellow;';
  readonly lime = 'border-top:lime;';
  readonly limegreen = 'border-top:limegreen;';
  readonly linen = 'border-top:linen;';
  readonly magenta = 'border-top:magenta;';
  readonly maroon = 'border-top:maroon;';
  readonly medium = 'border-top:medium;';
  readonly mediumaquamarine = 'border-top:mediumaquamarine;';
  readonly mediumblue = 'border-top:mediumblue;';
  readonly mediumorchid = 'border-top:mediumorchid;';
  readonly mediumpurple = 'border-top:mediumpurple;';
  readonly mediumseagreen = 'border-top:mediumseagreen;';
  readonly mediumslateblue = 'border-top:mediumslateblue;';
  readonly mediumspringgreen = 'border-top:mediumspringgreen;';
  readonly mediumturquoise = 'border-top:mediumturquoise;';
  readonly mediumvioletred = 'border-top:mediumvioletred;';
  readonly midnightblue = 'border-top:midnightblue;';
  readonly mintcream = 'border-top:mintcream;';
  readonly mistyrose = 'border-top:mistyrose;';
  readonly moccasin = 'border-top:moccasin;';
  readonly navajowhite = 'border-top:navajowhite;';
  readonly navy = 'border-top:navy;';
  readonly none = 'border-top:none;';
  readonly oldlace = 'border-top:oldlace;';
  readonly olive = 'border-top:olive;';
  readonly olivedrab = 'border-top:olivedrab;';
  readonly orange = 'border-top:orange;';
  readonly orangered = 'border-top:orangered;';
  readonly orchid = 'border-top:orchid;';
  readonly outset = 'border-top:outset;';
  readonly palegoldenrod = 'border-top:palegoldenrod;';
  readonly palegreen = 'border-top:palegreen;';
  readonly paleturquoise = 'border-top:paleturquoise;';
  readonly palevioletred = 'border-top:palevioletred;';
  readonly papayawhip = 'border-top:papayawhip;';
  readonly peachpuff = 'border-top:peachpuff;';
  readonly peru = 'border-top:peru;';
  readonly pink = 'border-top:pink;';
  readonly plum = 'border-top:plum;';
  readonly powderblue = 'border-top:powderblue;';
  readonly purple = 'border-top:purple;';
  readonly rebeccapurple = 'border-top:rebeccapurple;';
  readonly red = 'border-top:red;';
  readonly revert = 'border-top:revert;';
  readonly revertLayer = 'border-top:revert-layer;';
  readonly ridge = 'border-top:ridge;';
  readonly rosybrown = 'border-top:rosybrown;';
  readonly royalblue = 'border-top:royalblue;';
  readonly saddlebrown = 'border-top:saddlebrown;';
  readonly salmon = 'border-top:salmon;';
  readonly sandybrown = 'border-top:sandybrown;';
  readonly seagreen = 'border-top:seagreen;';
  readonly seashell = 'border-top:seashell;';
  readonly sienna = 'border-top:sienna;';
  readonly silver = 'border-top:silver;';
  readonly skyblue = 'border-top:skyblue;';
  readonly slateblue = 'border-top:slateblue;';
  readonly slategray = 'border-top:slategray;';
  readonly slategrey = 'border-top:slategrey;';
  readonly snow = 'border-top:snow;';
  readonly solid = 'border-top:solid;';
  readonly springgreen = 'border-top:springgreen;';
  readonly steelblue = 'border-top:steelblue;';
  readonly tan = 'border-top:tan;';
  readonly teal = 'border-top:teal;';
  readonly thick = 'border-top:thick;';
  readonly thin = 'border-top:thin;';
  readonly thistle = 'border-top:thistle;';
  readonly tomato = 'border-top:tomato;';
  readonly transparent = 'border-top:transparent;';
  readonly turquoise = 'border-top:turquoise;';
  readonly unset = 'border-top:unset;';
  readonly violet = 'border-top:violet;';
  readonly wheat = 'border-top:wheat;';
  readonly white = 'border-top:white;';
  readonly whitesmoke = 'border-top:whitesmoke;';
  readonly yellow = 'border-top:yellow;';
  readonly yellowgreen = 'border-top:yellowgreen;';
  constructor() {
    super('border-top');
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
    value: Extract<Property.BorderTop, number> | (string & {}),
    ...others: (Extract<Property.BorderTop, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderTop, number> | (string & {}),
    ...others: (Extract<Property.BorderTop, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderTop, number> | (string & {}),
    preferred: Extract<Property.BorderTop, number> | (string & {}),
    maximum: Extract<Property.BorderTop, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-top-color；初始值 currentcolor。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
 */
export class BorderTopColorCss extends CssProperty<Property.BorderTopColor> {
  readonly AccentColor = 'border-top-color:AccentColor;';
  readonly AccentColorText = 'border-top-color:AccentColorText;';
  readonly ActiveBorder = 'border-top-color:ActiveBorder;';
  readonly ActiveCaption = 'border-top-color:ActiveCaption;';
  readonly ActiveText = 'border-top-color:ActiveText;';
  readonly AppWorkspace = 'border-top-color:AppWorkspace;';
  readonly Background = 'border-top-color:Background;';
  readonly ButtonBorder = 'border-top-color:ButtonBorder;';
  readonly ButtonFace = 'border-top-color:ButtonFace;';
  readonly ButtonHighlight = 'border-top-color:ButtonHighlight;';
  readonly ButtonShadow = 'border-top-color:ButtonShadow;';
  readonly ButtonText = 'border-top-color:ButtonText;';
  readonly Canvas = 'border-top-color:Canvas;';
  readonly CanvasText = 'border-top-color:CanvasText;';
  readonly CaptionText = 'border-top-color:CaptionText;';
  readonly Field = 'border-top-color:Field;';
  readonly FieldText = 'border-top-color:FieldText;';
  readonly GrayText = 'border-top-color:GrayText;';
  readonly Highlight = 'border-top-color:Highlight;';
  readonly HighlightText = 'border-top-color:HighlightText;';
  readonly InactiveBorder = 'border-top-color:InactiveBorder;';
  readonly InactiveCaption = 'border-top-color:InactiveCaption;';
  readonly InactiveCaptionText = 'border-top-color:InactiveCaptionText;';
  readonly InfoBackground = 'border-top-color:InfoBackground;';
  readonly InfoText = 'border-top-color:InfoText;';
  readonly LinkText = 'border-top-color:LinkText;';
  readonly Mark = 'border-top-color:Mark;';
  readonly MarkText = 'border-top-color:MarkText;';
  readonly Menu = 'border-top-color:Menu;';
  readonly MenuText = 'border-top-color:MenuText;';
  readonly Scrollbar = 'border-top-color:Scrollbar;';
  readonly SelectedItem = 'border-top-color:SelectedItem;';
  readonly SelectedItemText = 'border-top-color:SelectedItemText;';
  readonly ThreeDDarkShadow = 'border-top-color:ThreeDDarkShadow;';
  readonly ThreeDFace = 'border-top-color:ThreeDFace;';
  readonly ThreeDHighlight = 'border-top-color:ThreeDHighlight;';
  readonly ThreeDLightShadow = 'border-top-color:ThreeDLightShadow;';
  readonly ThreeDShadow = 'border-top-color:ThreeDShadow;';
  readonly VisitedText = 'border-top-color:VisitedText;';
  readonly Window = 'border-top-color:Window;';
  readonly WindowFrame = 'border-top-color:WindowFrame;';
  readonly WindowText = 'border-top-color:WindowText;';
  readonly aliceblue = 'border-top-color:aliceblue;';
  readonly antiquewhite = 'border-top-color:antiquewhite;';
  readonly aqua = 'border-top-color:aqua;';
  readonly aquamarine = 'border-top-color:aquamarine;';
  readonly azure = 'border-top-color:azure;';
  readonly beige = 'border-top-color:beige;';
  readonly bisque = 'border-top-color:bisque;';
  readonly black = 'border-top-color:black;';
  readonly blanchedalmond = 'border-top-color:blanchedalmond;';
  readonly blue = 'border-top-color:blue;';
  readonly blueviolet = 'border-top-color:blueviolet;';
  readonly brown = 'border-top-color:brown;';
  readonly burlywood = 'border-top-color:burlywood;';
  readonly cadetblue = 'border-top-color:cadetblue;';
  readonly chartreuse = 'border-top-color:chartreuse;';
  readonly chocolate = 'border-top-color:chocolate;';
  readonly coral = 'border-top-color:coral;';
  readonly cornflowerblue = 'border-top-color:cornflowerblue;';
  readonly cornsilk = 'border-top-color:cornsilk;';
  readonly crimson = 'border-top-color:crimson;';
  readonly currentColor = 'border-top-color:currentColor;';
  readonly cyan = 'border-top-color:cyan;';
  readonly darkblue = 'border-top-color:darkblue;';
  readonly darkcyan = 'border-top-color:darkcyan;';
  readonly darkgoldenrod = 'border-top-color:darkgoldenrod;';
  readonly darkgray = 'border-top-color:darkgray;';
  readonly darkgreen = 'border-top-color:darkgreen;';
  readonly darkgrey = 'border-top-color:darkgrey;';
  readonly darkkhaki = 'border-top-color:darkkhaki;';
  readonly darkmagenta = 'border-top-color:darkmagenta;';
  readonly darkolivegreen = 'border-top-color:darkolivegreen;';
  readonly darkorange = 'border-top-color:darkorange;';
  readonly darkorchid = 'border-top-color:darkorchid;';
  readonly darkred = 'border-top-color:darkred;';
  readonly darksalmon = 'border-top-color:darksalmon;';
  readonly darkseagreen = 'border-top-color:darkseagreen;';
  readonly darkslateblue = 'border-top-color:darkslateblue;';
  readonly darkslategray = 'border-top-color:darkslategray;';
  readonly darkslategrey = 'border-top-color:darkslategrey;';
  readonly darkturquoise = 'border-top-color:darkturquoise;';
  readonly darkviolet = 'border-top-color:darkviolet;';
  readonly deeppink = 'border-top-color:deeppink;';
  readonly deepskyblue = 'border-top-color:deepskyblue;';
  readonly dimgray = 'border-top-color:dimgray;';
  readonly dimgrey = 'border-top-color:dimgrey;';
  readonly dodgerblue = 'border-top-color:dodgerblue;';
  readonly firebrick = 'border-top-color:firebrick;';
  readonly floralwhite = 'border-top-color:floralwhite;';
  readonly forestgreen = 'border-top-color:forestgreen;';
  readonly fuchsia = 'border-top-color:fuchsia;';
  readonly gainsboro = 'border-top-color:gainsboro;';
  readonly ghostwhite = 'border-top-color:ghostwhite;';
  readonly gold = 'border-top-color:gold;';
  readonly goldenrod = 'border-top-color:goldenrod;';
  readonly gray = 'border-top-color:gray;';
  readonly green = 'border-top-color:green;';
  readonly greenyellow = 'border-top-color:greenyellow;';
  readonly grey = 'border-top-color:grey;';
  readonly honeydew = 'border-top-color:honeydew;';
  readonly hotpink = 'border-top-color:hotpink;';
  readonly indianred = 'border-top-color:indianred;';
  readonly indigo = 'border-top-color:indigo;';
  readonly inherit = 'border-top-color:inherit;';
  readonly initial = 'border-top-color:initial;';
  readonly ivory = 'border-top-color:ivory;';
  readonly khaki = 'border-top-color:khaki;';
  readonly lavender = 'border-top-color:lavender;';
  readonly lavenderblush = 'border-top-color:lavenderblush;';
  readonly lawngreen = 'border-top-color:lawngreen;';
  readonly lemonchiffon = 'border-top-color:lemonchiffon;';
  readonly lightblue = 'border-top-color:lightblue;';
  readonly lightcoral = 'border-top-color:lightcoral;';
  readonly lightcyan = 'border-top-color:lightcyan;';
  readonly lightgoldenrodyellow = 'border-top-color:lightgoldenrodyellow;';
  readonly lightgray = 'border-top-color:lightgray;';
  readonly lightgreen = 'border-top-color:lightgreen;';
  readonly lightgrey = 'border-top-color:lightgrey;';
  readonly lightpink = 'border-top-color:lightpink;';
  readonly lightsalmon = 'border-top-color:lightsalmon;';
  readonly lightseagreen = 'border-top-color:lightseagreen;';
  readonly lightskyblue = 'border-top-color:lightskyblue;';
  readonly lightslategray = 'border-top-color:lightslategray;';
  readonly lightslategrey = 'border-top-color:lightslategrey;';
  readonly lightsteelblue = 'border-top-color:lightsteelblue;';
  readonly lightyellow = 'border-top-color:lightyellow;';
  readonly lime = 'border-top-color:lime;';
  readonly limegreen = 'border-top-color:limegreen;';
  readonly linen = 'border-top-color:linen;';
  readonly magenta = 'border-top-color:magenta;';
  readonly maroon = 'border-top-color:maroon;';
  readonly mediumaquamarine = 'border-top-color:mediumaquamarine;';
  readonly mediumblue = 'border-top-color:mediumblue;';
  readonly mediumorchid = 'border-top-color:mediumorchid;';
  readonly mediumpurple = 'border-top-color:mediumpurple;';
  readonly mediumseagreen = 'border-top-color:mediumseagreen;';
  readonly mediumslateblue = 'border-top-color:mediumslateblue;';
  readonly mediumspringgreen = 'border-top-color:mediumspringgreen;';
  readonly mediumturquoise = 'border-top-color:mediumturquoise;';
  readonly mediumvioletred = 'border-top-color:mediumvioletred;';
  readonly midnightblue = 'border-top-color:midnightblue;';
  readonly mintcream = 'border-top-color:mintcream;';
  readonly mistyrose = 'border-top-color:mistyrose;';
  readonly moccasin = 'border-top-color:moccasin;';
  readonly navajowhite = 'border-top-color:navajowhite;';
  readonly navy = 'border-top-color:navy;';
  readonly oldlace = 'border-top-color:oldlace;';
  readonly olive = 'border-top-color:olive;';
  readonly olivedrab = 'border-top-color:olivedrab;';
  readonly orange = 'border-top-color:orange;';
  readonly orangered = 'border-top-color:orangered;';
  readonly orchid = 'border-top-color:orchid;';
  readonly palegoldenrod = 'border-top-color:palegoldenrod;';
  readonly palegreen = 'border-top-color:palegreen;';
  readonly paleturquoise = 'border-top-color:paleturquoise;';
  readonly palevioletred = 'border-top-color:palevioletred;';
  readonly papayawhip = 'border-top-color:papayawhip;';
  readonly peachpuff = 'border-top-color:peachpuff;';
  readonly peru = 'border-top-color:peru;';
  readonly pink = 'border-top-color:pink;';
  readonly plum = 'border-top-color:plum;';
  readonly powderblue = 'border-top-color:powderblue;';
  readonly purple = 'border-top-color:purple;';
  readonly rebeccapurple = 'border-top-color:rebeccapurple;';
  readonly red = 'border-top-color:red;';
  readonly revert = 'border-top-color:revert;';
  readonly revertLayer = 'border-top-color:revert-layer;';
  readonly rosybrown = 'border-top-color:rosybrown;';
  readonly royalblue = 'border-top-color:royalblue;';
  readonly saddlebrown = 'border-top-color:saddlebrown;';
  readonly salmon = 'border-top-color:salmon;';
  readonly sandybrown = 'border-top-color:sandybrown;';
  readonly seagreen = 'border-top-color:seagreen;';
  readonly seashell = 'border-top-color:seashell;';
  readonly sienna = 'border-top-color:sienna;';
  readonly silver = 'border-top-color:silver;';
  readonly skyblue = 'border-top-color:skyblue;';
  readonly slateblue = 'border-top-color:slateblue;';
  readonly slategray = 'border-top-color:slategray;';
  readonly slategrey = 'border-top-color:slategrey;';
  readonly snow = 'border-top-color:snow;';
  readonly springgreen = 'border-top-color:springgreen;';
  readonly steelblue = 'border-top-color:steelblue;';
  readonly tan = 'border-top-color:tan;';
  readonly teal = 'border-top-color:teal;';
  readonly thistle = 'border-top-color:thistle;';
  readonly tomato = 'border-top-color:tomato;';
  readonly transparent = 'border-top-color:transparent;';
  readonly turquoise = 'border-top-color:turquoise;';
  readonly unset = 'border-top-color:unset;';
  readonly violet = 'border-top-color:violet;';
  readonly wheat = 'border-top-color:wheat;';
  readonly white = 'border-top-color:white;';
  readonly whitesmoke = 'border-top-color:whitesmoke;';
  readonly yellow = 'border-top-color:yellow;';
  readonly yellowgreen = 'border-top-color:yellowgreen;';
  constructor() {
    super('border-top-color');
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

/** CSS 属性 border-top-left-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
 */
export class BorderTopLeftRadiusCss extends LengthCssProperty<Property.BorderTopLeftRadius> {
  readonly inherit = 'border-top-left-radius:inherit;';
  readonly initial = 'border-top-left-radius:initial;';
  readonly revert = 'border-top-left-radius:revert;';
  readonly revertLayer = 'border-top-left-radius:revert-layer;';
  readonly unset = 'border-top-left-radius:unset;';
  constructor() {
    super('border-top-left-radius');
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
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderTopLeftRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderTopLeftRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderTopLeftRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderTopLeftRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderTopLeftRadius, number> | (string & {}),
    preferred: Extract<Property.BorderTopLeftRadius, number> | (string & {}),
    maximum: Extract<Property.BorderTopLeftRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-top-right-radius；初始值 0。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
 */
export class BorderTopRightRadiusCss extends LengthCssProperty<Property.BorderTopRightRadius> {
  readonly inherit = 'border-top-right-radius:inherit;';
  readonly initial = 'border-top-right-radius:initial;';
  readonly revert = 'border-top-right-radius:revert;';
  readonly revertLayer = 'border-top-right-radius:revert-layer;';
  readonly unset = 'border-top-right-radius:unset;';
  constructor() {
    super('border-top-right-radius');
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
  /** 使用 % 单位生成声明；数值合法性由浏览器处理。 */
  percent(value1: number): string;
  percent(value1: number, value2: number): string;
  percent(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}%`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderTopRightRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderTopRightRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderTopRightRadius, number> | (string & {}),
    ...others: (Extract<Property.BorderTopRightRadius, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderTopRightRadius, number> | (string & {}),
    preferred: Extract<Property.BorderTopRightRadius, number> | (string & {}),
    maximum: Extract<Property.BorderTopRightRadius, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-top-style；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
 */
export class BorderTopStyleCss extends CssProperty<Property.BorderTopStyle> {
  readonly dashed = 'border-top-style:dashed;';
  readonly dotted = 'border-top-style:dotted;';
  readonly double = 'border-top-style:double;';
  readonly groove = 'border-top-style:groove;';
  readonly hidden = 'border-top-style:hidden;';
  readonly inherit = 'border-top-style:inherit;';
  readonly initial = 'border-top-style:initial;';
  readonly inset = 'border-top-style:inset;';
  readonly none = 'border-top-style:none;';
  readonly outset = 'border-top-style:outset;';
  readonly revert = 'border-top-style:revert;';
  readonly revertLayer = 'border-top-style:revert-layer;';
  readonly ridge = 'border-top-style:ridge;';
  readonly solid = 'border-top-style:solid;';
  readonly unset = 'border-top-style:unset;';
  constructor() {
    super('border-top-style');
  }
}

/** CSS 属性 border-top-width；初始值 medium。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
 */
export class BorderTopWidthCss extends LengthCssProperty<Property.BorderTopWidth> {
  readonly inherit = 'border-top-width:inherit;';
  readonly initial = 'border-top-width:initial;';
  readonly medium = 'border-top-width:medium;';
  readonly revert = 'border-top-width:revert;';
  readonly revertLayer = 'border-top-width:revert-layer;';
  readonly thick = 'border-top-width:thick;';
  readonly thin = 'border-top-width:thin;';
  readonly unset = 'border-top-width:unset;';
  constructor() {
    super('border-top-width');
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderTopWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderTopWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderTopWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderTopWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderTopWidth, number> | (string & {}),
    preferred: Extract<Property.BorderTopWidth, number> | (string & {}),
    maximum: Extract<Property.BorderTopWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 border-width。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
 */
export class BorderWidthCss extends LengthCssProperty<Property.BorderWidth> {
  readonly inherit = 'border-width:inherit;';
  readonly initial = 'border-width:initial;';
  readonly medium = 'border-width:medium;';
  readonly revert = 'border-width:revert;';
  readonly revertLayer = 'border-width:revert-layer;';
  readonly thick = 'border-width:thick;';
  readonly thin = 'border-width:thin;';
  readonly unset = 'border-width:unset;';
  constructor() {
    super('border-width');
  }
  /** 使用 px 单位生成声明；数值合法性由浏览器处理。 */
  px(value1: number): string;
  px(value1: number, value2: number): string;
  px(value1: number, value2: number, value3: number): string;
  px(value1: number, value2: number, value3: number, value4: number): string;
  override px(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}px`).join(' ')};`;
  }
  /** 使用 cm 单位生成声明；数值合法性由浏览器处理。 */
  cm(value1: number): string;
  cm(value1: number, value2: number): string;
  cm(value1: number, value2: number, value3: number): string;
  cm(value1: number, value2: number, value3: number, value4: number): string;
  override cm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cm`).join(' ')};`;
  }
  /** 使用 mm 单位生成声明；数值合法性由浏览器处理。 */
  mm(value1: number): string;
  mm(value1: number, value2: number): string;
  mm(value1: number, value2: number, value3: number): string;
  mm(value1: number, value2: number, value3: number, value4: number): string;
  override mm(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}mm`).join(' ')};`;
  }
  /** 使用 q 单位生成声明；数值合法性由浏览器处理。 */
  q(value1: number): string;
  q(value1: number, value2: number): string;
  q(value1: number, value2: number, value3: number): string;
  q(value1: number, value2: number, value3: number, value4: number): string;
  override q(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}q`).join(' ')};`;
  }
  /** 使用 in 单位生成声明；数值合法性由浏览器处理。 */
  in(value1: number): string;
  in(value1: number, value2: number): string;
  in(value1: number, value2: number, value3: number): string;
  in(value1: number, value2: number, value3: number, value4: number): string;
  override in(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}in`).join(' ')};`;
  }
  /** 使用 pt 单位生成声明；数值合法性由浏览器处理。 */
  pt(value1: number): string;
  pt(value1: number, value2: number): string;
  pt(value1: number, value2: number, value3: number): string;
  pt(value1: number, value2: number, value3: number, value4: number): string;
  override pt(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pt`).join(' ')};`;
  }
  /** 使用 pc 单位生成声明；数值合法性由浏览器处理。 */
  pc(value1: number): string;
  pc(value1: number, value2: number): string;
  pc(value1: number, value2: number, value3: number): string;
  pc(value1: number, value2: number, value3: number, value4: number): string;
  override pc(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}pc`).join(' ')};`;
  }
  /** 使用 em 单位生成声明；数值合法性由浏览器处理。 */
  em(value1: number): string;
  em(value1: number, value2: number): string;
  em(value1: number, value2: number, value3: number): string;
  em(value1: number, value2: number, value3: number, value4: number): string;
  override em(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}em`).join(' ')};`;
  }
  /** 使用 rem 单位生成声明；数值合法性由浏览器处理。 */
  rem(value1: number): string;
  rem(value1: number, value2: number): string;
  rem(value1: number, value2: number, value3: number): string;
  rem(value1: number, value2: number, value3: number, value4: number): string;
  override rem(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rem`).join(' ')};`;
  }
  /** 使用 ex 单位生成声明；数值合法性由浏览器处理。 */
  ex(value1: number): string;
  ex(value1: number, value2: number): string;
  ex(value1: number, value2: number, value3: number): string;
  ex(value1: number, value2: number, value3: number, value4: number): string;
  override ex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ex`).join(' ')};`;
  }
  /** 使用 rex 单位生成声明；数值合法性由浏览器处理。 */
  rex(value1: number): string;
  rex(value1: number, value2: number): string;
  rex(value1: number, value2: number, value3: number): string;
  rex(value1: number, value2: number, value3: number, value4: number): string;
  override rex(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rex`).join(' ')};`;
  }
  /** 使用 ch 单位生成声明；数值合法性由浏览器处理。 */
  ch(value1: number): string;
  ch(value1: number, value2: number): string;
  ch(value1: number, value2: number, value3: number): string;
  ch(value1: number, value2: number, value3: number, value4: number): string;
  override ch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ch`).join(' ')};`;
  }
  /** 使用 rch 单位生成声明；数值合法性由浏览器处理。 */
  rch(value1: number): string;
  rch(value1: number, value2: number): string;
  rch(value1: number, value2: number, value3: number): string;
  rch(value1: number, value2: number, value3: number, value4: number): string;
  override rch(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rch`).join(' ')};`;
  }
  /** 使用 cap 单位生成声明；数值合法性由浏览器处理。 */
  cap(value1: number): string;
  cap(value1: number, value2: number): string;
  cap(value1: number, value2: number, value3: number): string;
  cap(value1: number, value2: number, value3: number, value4: number): string;
  override cap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cap`).join(' ')};`;
  }
  /** 使用 rcap 单位生成声明；数值合法性由浏览器处理。 */
  rcap(value1: number): string;
  rcap(value1: number, value2: number): string;
  rcap(value1: number, value2: number, value3: number): string;
  rcap(value1: number, value2: number, value3: number, value4: number): string;
  override rcap(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rcap`).join(' ')};`;
  }
  /** 使用 ic 单位生成声明；数值合法性由浏览器处理。 */
  ic(value1: number): string;
  ic(value1: number, value2: number): string;
  ic(value1: number, value2: number, value3: number): string;
  ic(value1: number, value2: number, value3: number, value4: number): string;
  override ic(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ic`).join(' ')};`;
  }
  /** 使用 ric 单位生成声明；数值合法性由浏览器处理。 */
  ric(value1: number): string;
  ric(value1: number, value2: number): string;
  ric(value1: number, value2: number, value3: number): string;
  ric(value1: number, value2: number, value3: number, value4: number): string;
  override ric(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}ric`).join(' ')};`;
  }
  /** 使用 lh 单位生成声明；数值合法性由浏览器处理。 */
  lh(value1: number): string;
  lh(value1: number, value2: number): string;
  lh(value1: number, value2: number, value3: number): string;
  lh(value1: number, value2: number, value3: number, value4: number): string;
  override lh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lh`).join(' ')};`;
  }
  /** 使用 rlh 单位生成声明；数值合法性由浏览器处理。 */
  rlh(value1: number): string;
  rlh(value1: number, value2: number): string;
  rlh(value1: number, value2: number, value3: number): string;
  rlh(value1: number, value2: number, value3: number, value4: number): string;
  override rlh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}rlh`).join(' ')};`;
  }
  /** 使用 vw 单位生成声明；数值合法性由浏览器处理。 */
  vw(value1: number): string;
  vw(value1: number, value2: number): string;
  vw(value1: number, value2: number, value3: number): string;
  vw(value1: number, value2: number, value3: number, value4: number): string;
  override vw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vw`).join(' ')};`;
  }
  /** 使用 vh 单位生成声明；数值合法性由浏览器处理。 */
  vh(value1: number): string;
  vh(value1: number, value2: number): string;
  vh(value1: number, value2: number, value3: number): string;
  vh(value1: number, value2: number, value3: number, value4: number): string;
  override vh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vh`).join(' ')};`;
  }
  /** 使用 vi 单位生成声明；数值合法性由浏览器处理。 */
  vi(value1: number): string;
  vi(value1: number, value2: number): string;
  vi(value1: number, value2: number, value3: number): string;
  vi(value1: number, value2: number, value3: number, value4: number): string;
  override vi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vi`).join(' ')};`;
  }
  /** 使用 vb 单位生成声明；数值合法性由浏览器处理。 */
  vb(value1: number): string;
  vb(value1: number, value2: number): string;
  vb(value1: number, value2: number, value3: number): string;
  vb(value1: number, value2: number, value3: number, value4: number): string;
  override vb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vb`).join(' ')};`;
  }
  /** 使用 vmin 单位生成声明；数值合法性由浏览器处理。 */
  vmin(value1: number): string;
  vmin(value1: number, value2: number): string;
  vmin(value1: number, value2: number, value3: number): string;
  vmin(value1: number, value2: number, value3: number, value4: number): string;
  override vmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmin`).join(' ')};`;
  }
  /** 使用 vmax 单位生成声明；数值合法性由浏览器处理。 */
  vmax(value1: number): string;
  vmax(value1: number, value2: number): string;
  vmax(value1: number, value2: number, value3: number): string;
  vmax(value1: number, value2: number, value3: number, value4: number): string;
  override vmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}vmax`).join(' ')};`;
  }
  /** 使用 svw 单位生成声明；数值合法性由浏览器处理。 */
  svw(value1: number): string;
  svw(value1: number, value2: number): string;
  svw(value1: number, value2: number, value3: number): string;
  svw(value1: number, value2: number, value3: number, value4: number): string;
  override svw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svw`).join(' ')};`;
  }
  /** 使用 svh 单位生成声明；数值合法性由浏览器处理。 */
  svh(value1: number): string;
  svh(value1: number, value2: number): string;
  svh(value1: number, value2: number, value3: number): string;
  svh(value1: number, value2: number, value3: number, value4: number): string;
  override svh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svh`).join(' ')};`;
  }
  /** 使用 svi 单位生成声明；数值合法性由浏览器处理。 */
  svi(value1: number): string;
  svi(value1: number, value2: number): string;
  svi(value1: number, value2: number, value3: number): string;
  svi(value1: number, value2: number, value3: number, value4: number): string;
  override svi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svi`).join(' ')};`;
  }
  /** 使用 svb 单位生成声明；数值合法性由浏览器处理。 */
  svb(value1: number): string;
  svb(value1: number, value2: number): string;
  svb(value1: number, value2: number, value3: number): string;
  svb(value1: number, value2: number, value3: number, value4: number): string;
  override svb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svb`).join(' ')};`;
  }
  /** 使用 svmin 单位生成声明；数值合法性由浏览器处理。 */
  svmin(value1: number): string;
  svmin(value1: number, value2: number): string;
  svmin(value1: number, value2: number, value3: number): string;
  svmin(value1: number, value2: number, value3: number, value4: number): string;
  override svmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmin`).join(' ')};`;
  }
  /** 使用 svmax 单位生成声明；数值合法性由浏览器处理。 */
  svmax(value1: number): string;
  svmax(value1: number, value2: number): string;
  svmax(value1: number, value2: number, value3: number): string;
  svmax(value1: number, value2: number, value3: number, value4: number): string;
  override svmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}svmax`).join(' ')};`;
  }
  /** 使用 lvw 单位生成声明；数值合法性由浏览器处理。 */
  lvw(value1: number): string;
  lvw(value1: number, value2: number): string;
  lvw(value1: number, value2: number, value3: number): string;
  lvw(value1: number, value2: number, value3: number, value4: number): string;
  override lvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvw`).join(' ')};`;
  }
  /** 使用 lvh 单位生成声明；数值合法性由浏览器处理。 */
  lvh(value1: number): string;
  lvh(value1: number, value2: number): string;
  lvh(value1: number, value2: number, value3: number): string;
  lvh(value1: number, value2: number, value3: number, value4: number): string;
  override lvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvh`).join(' ')};`;
  }
  /** 使用 lvi 单位生成声明；数值合法性由浏览器处理。 */
  lvi(value1: number): string;
  lvi(value1: number, value2: number): string;
  lvi(value1: number, value2: number, value3: number): string;
  lvi(value1: number, value2: number, value3: number, value4: number): string;
  override lvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvi`).join(' ')};`;
  }
  /** 使用 lvb 单位生成声明；数值合法性由浏览器处理。 */
  lvb(value1: number): string;
  lvb(value1: number, value2: number): string;
  lvb(value1: number, value2: number, value3: number): string;
  lvb(value1: number, value2: number, value3: number, value4: number): string;
  override lvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvb`).join(' ')};`;
  }
  /** 使用 lvmin 单位生成声明；数值合法性由浏览器处理。 */
  lvmin(value1: number): string;
  lvmin(value1: number, value2: number): string;
  lvmin(value1: number, value2: number, value3: number): string;
  lvmin(value1: number, value2: number, value3: number, value4: number): string;
  override lvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmin`).join(' ')};`;
  }
  /** 使用 lvmax 单位生成声明；数值合法性由浏览器处理。 */
  lvmax(value1: number): string;
  lvmax(value1: number, value2: number): string;
  lvmax(value1: number, value2: number, value3: number): string;
  lvmax(value1: number, value2: number, value3: number, value4: number): string;
  override lvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}lvmax`).join(' ')};`;
  }
  /** 使用 dvw 单位生成声明；数值合法性由浏览器处理。 */
  dvw(value1: number): string;
  dvw(value1: number, value2: number): string;
  dvw(value1: number, value2: number, value3: number): string;
  dvw(value1: number, value2: number, value3: number, value4: number): string;
  override dvw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvw`).join(' ')};`;
  }
  /** 使用 dvh 单位生成声明；数值合法性由浏览器处理。 */
  dvh(value1: number): string;
  dvh(value1: number, value2: number): string;
  dvh(value1: number, value2: number, value3: number): string;
  dvh(value1: number, value2: number, value3: number, value4: number): string;
  override dvh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvh`).join(' ')};`;
  }
  /** 使用 dvi 单位生成声明；数值合法性由浏览器处理。 */
  dvi(value1: number): string;
  dvi(value1: number, value2: number): string;
  dvi(value1: number, value2: number, value3: number): string;
  dvi(value1: number, value2: number, value3: number, value4: number): string;
  override dvi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvi`).join(' ')};`;
  }
  /** 使用 dvb 单位生成声明；数值合法性由浏览器处理。 */
  dvb(value1: number): string;
  dvb(value1: number, value2: number): string;
  dvb(value1: number, value2: number, value3: number): string;
  dvb(value1: number, value2: number, value3: number, value4: number): string;
  override dvb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvb`).join(' ')};`;
  }
  /** 使用 dvmin 单位生成声明；数值合法性由浏览器处理。 */
  dvmin(value1: number): string;
  dvmin(value1: number, value2: number): string;
  dvmin(value1: number, value2: number, value3: number): string;
  dvmin(value1: number, value2: number, value3: number, value4: number): string;
  override dvmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmin`).join(' ')};`;
  }
  /** 使用 dvmax 单位生成声明；数值合法性由浏览器处理。 */
  dvmax(value1: number): string;
  dvmax(value1: number, value2: number): string;
  dvmax(value1: number, value2: number, value3: number): string;
  dvmax(value1: number, value2: number, value3: number, value4: number): string;
  override dvmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}dvmax`).join(' ')};`;
  }
  /** 使用 cqw 单位生成声明；数值合法性由浏览器处理。 */
  cqw(value1: number): string;
  cqw(value1: number, value2: number): string;
  cqw(value1: number, value2: number, value3: number): string;
  cqw(value1: number, value2: number, value3: number, value4: number): string;
  override cqw(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqw`).join(' ')};`;
  }
  /** 使用 cqh 单位生成声明；数值合法性由浏览器处理。 */
  cqh(value1: number): string;
  cqh(value1: number, value2: number): string;
  cqh(value1: number, value2: number, value3: number): string;
  cqh(value1: number, value2: number, value3: number, value4: number): string;
  override cqh(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqh`).join(' ')};`;
  }
  /** 使用 cqi 单位生成声明；数值合法性由浏览器处理。 */
  cqi(value1: number): string;
  cqi(value1: number, value2: number): string;
  cqi(value1: number, value2: number, value3: number): string;
  cqi(value1: number, value2: number, value3: number, value4: number): string;
  override cqi(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqi`).join(' ')};`;
  }
  /** 使用 cqb 单位生成声明；数值合法性由浏览器处理。 */
  cqb(value1: number): string;
  cqb(value1: number, value2: number): string;
  cqb(value1: number, value2: number, value3: number): string;
  cqb(value1: number, value2: number, value3: number, value4: number): string;
  override cqb(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqb`).join(' ')};`;
  }
  /** 使用 cqmin 单位生成声明；数值合法性由浏览器处理。 */
  cqmin(value1: number): string;
  cqmin(value1: number, value2: number): string;
  cqmin(value1: number, value2: number, value3: number): string;
  cqmin(value1: number, value2: number, value3: number, value4: number): string;
  override cqmin(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmin`).join(' ')};`;
  }
  /** 使用 cqmax 单位生成声明；数值合法性由浏览器处理。 */
  cqmax(value1: number): string;
  cqmax(value1: number, value2: number): string;
  cqmax(value1: number, value2: number, value3: number): string;
  cqmax(value1: number, value2: number, value3: number, value4: number): string;
  override cqmax(...values: number[]): string {
    return `${this.name}:${values.map((value) => `${value}cqmax`).join(' ')};`;
  }
  /** 数学表达式原样交给浏览器。 */
  calc(expression: string): string {
    return this.raw(`calc(${expression})`);
  }
  min(
    value: Extract<Property.BorderWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.BorderWidth, number> | (string & {}),
    ...others: (Extract<Property.BorderWidth, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.BorderWidth, number> | (string & {}),
    preferred: Extract<Property.BorderWidth, number> | (string & {}),
    maximum: Extract<Property.BorderWidth, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 bottom；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
 */
export class BottomCss extends LengthCssProperty<Property.Bottom> {
  readonly auto = 'bottom:auto;';
  readonly inherit = 'bottom:inherit;';
  readonly initial = 'bottom:initial;';
  readonly revert = 'bottom:revert;';
  readonly revertLayer = 'bottom:revert-layer;';
  readonly unset = 'bottom:unset;';
  constructor() {
    super('bottom');
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
    value: Extract<Property.Bottom, number> | (string & {}),
    ...others: (Extract<Property.Bottom, number> | (string & {}))[]
  ): string {
    return this.raw(`min(${[value, ...others].join(', ')})`);
  }
  max(
    value: Extract<Property.Bottom, number> | (string & {}),
    ...others: (Extract<Property.Bottom, number> | (string & {}))[]
  ): string {
    return this.raw(`max(${[value, ...others].join(', ')})`);
  }
  clamp(
    minimum: Extract<Property.Bottom, number> | (string & {}),
    preferred: Extract<Property.Bottom, number> | (string & {}),
    maximum: Extract<Property.Bottom, number> | (string & {}),
  ): string {
    return this.raw(`clamp(${minimum}, ${preferred}, ${maximum})`);
  }
}

/** CSS 属性 box-decoration-break；初始值 slice。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
 */
export class BoxDecorationBreakCss extends CssProperty<Property.BoxDecorationBreak> {
  readonly clone = 'box-decoration-break:clone;';
  readonly inherit = 'box-decoration-break:inherit;';
  readonly initial = 'box-decoration-break:initial;';
  readonly revert = 'box-decoration-break:revert;';
  readonly revertLayer = 'box-decoration-break:revert-layer;';
  readonly slice = 'box-decoration-break:slice;';
  readonly unset = 'box-decoration-break:unset;';
  constructor() {
    super('box-decoration-break');
  }
}

/** CSS 属性 box-shadow；初始值 none。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
 */
export class BoxShadowCss extends CssProperty<Property.BoxShadow> {
  readonly inherit = 'box-shadow:inherit;';
  readonly initial = 'box-shadow:initial;';
  readonly none = 'box-shadow:none;';
  readonly revert = 'box-shadow:revert;';
  readonly revertLayer = 'box-shadow:revert-layer;';
  readonly unset = 'box-shadow:unset;';
  constructor() {
    super('box-shadow');
  }
}

/** CSS 属性 box-sizing；初始值 content-box。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
 */
export class BoxSizingCss extends CssProperty<Property.BoxSizing> {
  readonly borderBox = 'box-sizing:border-box;';
  readonly contentBox = 'box-sizing:content-box;';
  readonly inherit = 'box-sizing:inherit;';
  readonly initial = 'box-sizing:initial;';
  readonly revert = 'box-sizing:revert;';
  readonly revertLayer = 'box-sizing:revert-layer;';
  readonly unset = 'box-sizing:unset;';
  constructor() {
    super('box-sizing');
  }
}

/** CSS 属性 break-after；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
 */
export class BreakAfterCss extends CssProperty<Property.BreakAfter> {
  readonly all = 'break-after:all;';
  readonly always = 'break-after:always;';
  readonly auto = 'break-after:auto;';
  readonly avoid = 'break-after:avoid;';
  readonly avoidColumn = 'break-after:avoid-column;';
  readonly avoidPage = 'break-after:avoid-page;';
  readonly avoidRegion = 'break-after:avoid-region;';
  readonly column = 'break-after:column;';
  readonly inherit = 'break-after:inherit;';
  readonly initial = 'break-after:initial;';
  readonly left = 'break-after:left;';
  readonly page = 'break-after:page;';
  readonly recto = 'break-after:recto;';
  readonly region = 'break-after:region;';
  readonly revert = 'break-after:revert;';
  readonly revertLayer = 'break-after:revert-layer;';
  readonly right = 'break-after:right;';
  readonly unset = 'break-after:unset;';
  readonly verso = 'break-after:verso;';
  constructor() {
    super('break-after');
  }
}

/** CSS 属性 break-before；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
 */
export class BreakBeforeCss extends CssProperty<Property.BreakBefore> {
  readonly all = 'break-before:all;';
  readonly always = 'break-before:always;';
  readonly auto = 'break-before:auto;';
  readonly avoid = 'break-before:avoid;';
  readonly avoidColumn = 'break-before:avoid-column;';
  readonly avoidPage = 'break-before:avoid-page;';
  readonly avoidRegion = 'break-before:avoid-region;';
  readonly column = 'break-before:column;';
  readonly inherit = 'break-before:inherit;';
  readonly initial = 'break-before:initial;';
  readonly left = 'break-before:left;';
  readonly page = 'break-before:page;';
  readonly recto = 'break-before:recto;';
  readonly region = 'break-before:region;';
  readonly revert = 'break-before:revert;';
  readonly revertLayer = 'break-before:revert-layer;';
  readonly right = 'break-before:right;';
  readonly unset = 'break-before:unset;';
  readonly verso = 'break-before:verso;';
  constructor() {
    super('break-before');
  }
}

/** CSS 属性 break-inside；初始值 auto。
 * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
 */
export class BreakInsideCss extends CssProperty<Property.BreakInside> {
  readonly auto = 'break-inside:auto;';
  readonly avoid = 'break-inside:avoid;';
  readonly avoidColumn = 'break-inside:avoid-column;';
  readonly avoidPage = 'break-inside:avoid-page;';
  readonly avoidRegion = 'break-inside:avoid-region;';
  readonly inherit = 'break-inside:inherit;';
  readonly initial = 'break-inside:initial;';
  readonly revert = 'break-inside:revert;';
  readonly revertLayer = 'break-inside:revert-layer;';
  readonly unset = 'break-inside:unset;';
  constructor() {
    super('break-inside');
  }
}
