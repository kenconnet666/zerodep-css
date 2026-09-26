import { ThemeCss, ThemeColorCss, themes } from '../../src/theme.js';
import { Css } from '../../src/index.js';
class BrandColor extends ThemeColorCss {
  readonly _brand = this.raw('#c026d3');
}
class AppCss extends ThemeCss {
  override readonly color = new BrandColor();
}
const s = new AppCss();
s.color._brand satisfies string;
s.color._text satisfies string;
s.backgroundColor._surface satisfies string;
s.fill._accent satisfies string;
s.width.rem(2) satisfies string;
themes.dark satisfies string;
// @ts-expect-error 纯系统作者不隐式获得主题关键字
new Css().color._text;
