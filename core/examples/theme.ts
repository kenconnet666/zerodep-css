import { ColorCss, Css, WidthCss } from '@zerodep-css/core';

export type ThemeName = 'light' | 'dark';
export interface ExampleProps {
  initialWidth?: number;
  initialTheme?: ThemeName;
}

export const themes = {
  light: { '--demo-text': '#111827', '--demo-hover': '#2563eb' },
  dark: { '--demo-text': '#e5e7eb', '--demo-hover': '#93c5fd' },
};

class ThemeColorCss extends ColorCss {
  readonly _text = this.raw('var(--demo-text)');
  readonly _hover = this.raw('var(--demo-hover)');
}

/** 主题关键字只引用变量，值由组件的 DOM 边界提供。 */
export class ThemeCss extends Css {
  override readonly color = new ThemeColorCss();
}

class AppWidthCss extends WidthCss {
  readonly _initial: string;
  readonly _live = this.raw('var(--demo-width)');

  constructor(width: number) {
    super();
    this._initial = this.px(width);
  }
}

/** 应用继续继承主题；请求相关的作者实例不能放在模块顶层。 */
export class AppCss extends ThemeCss {
  override readonly width: AppWidthCss;
  constructor(readonly initialWidth = 24) {
    super();
    this.width = new AppWidthCss(initialWidth);
  }
}
