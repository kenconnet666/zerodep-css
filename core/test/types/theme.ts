import { ColorCss, Css, WidthCss, useCss } from '../../src';

class ThemeWidthCss extends WidthCss {
  readonly _md = this.raw('48rem');
}

class ThemeColorCss extends ColorCss {
  readonly brand = this.raw('rebeccapurple');
}

class ThemeCss extends Css {
  override readonly width = new ThemeWidthCss();
  override readonly color = new ThemeColorCss();
}

class AppWidthCss extends ThemeWidthCss {
  readonly _sidebar = this.raw('18rem');
}

class AppCss extends ThemeCss {
  override readonly width = new AppWidthCss();
}

const s = useCss(AppCss);
s.width._md satisfies string;
s.width._sidebar satisfies string;
s.width.raw('20px') satisfies string;
s.color.brand satisfies string;
s.color.red satisfies string;
