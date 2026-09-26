// 由 scripts/generate-css-author.mjs 生成；请勿手改。
import {
  Css,
  ColorCss,
  BackgroundColorCss,
  BorderColorCss,
  OutlineColorCss,
  FillCss,
  StrokeCss,
} from './author.js';
export class ThemeColorCss extends ColorCss {
  /** 页面背景；继承所在 DOM 作用域的主题变量。 */
  readonly _background: string = 'color:var(--z-theme-background);';
  /** 容器表面；继承所在 DOM 作用域的主题变量。 */
  readonly _surface: string = 'color:var(--z-theme-surface);';
  /** 表面悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _surfaceHover: string = 'color:var(--z-theme-surface-hover);';
  /** 主要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _text: string = 'color:var(--z-theme-text);';
  /** 次要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _muted: string = 'color:var(--z-theme-muted);';
  /** 边框；继承所在 DOM 作用域的主题变量。 */
  readonly _border: string = 'color:var(--z-theme-border);';
  /** 强调色；继承所在 DOM 作用域的主题变量。 */
  readonly _accent: string = 'color:var(--z-theme-accent);';
  /** 强调色悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _accentHover: string = 'color:var(--z-theme-accent-hover);';
  /** 强调色上的文字；继承所在 DOM 作用域的主题变量。 */
  readonly _onAccent: string = 'color:var(--z-theme-on-accent);';
  /** 焦点标记；继承所在 DOM 作用域的主题变量。 */
  readonly _focus: string = 'color:var(--z-theme-focus);';
  /** 成功；继承所在 DOM 作用域的主题变量。 */
  readonly _success: string = 'color:var(--z-theme-success);';
  /** 警告；继承所在 DOM 作用域的主题变量。 */
  readonly _warning: string = 'color:var(--z-theme-warning);';
  /** 错误；继承所在 DOM 作用域的主题变量。 */
  readonly _error: string = 'color:var(--z-theme-error);';
  /** 禁用文字；继承所在 DOM 作用域的主题变量。 */
  readonly _disabled: string = 'color:var(--z-theme-disabled);';
  /** 禁用表面；继承所在 DOM 作用域的主题变量。 */
  readonly _disabledSurface: string = 'color:var(--z-theme-disabled-surface);';
}
export class ThemeBackgroundColorCss extends BackgroundColorCss {
  /** 页面背景；继承所在 DOM 作用域的主题变量。 */
  readonly _background: string = 'background-color:var(--z-theme-background);';
  /** 容器表面；继承所在 DOM 作用域的主题变量。 */
  readonly _surface: string = 'background-color:var(--z-theme-surface);';
  /** 表面悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _surfaceHover: string = 'background-color:var(--z-theme-surface-hover);';
  /** 主要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _text: string = 'background-color:var(--z-theme-text);';
  /** 次要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _muted: string = 'background-color:var(--z-theme-muted);';
  /** 边框；继承所在 DOM 作用域的主题变量。 */
  readonly _border: string = 'background-color:var(--z-theme-border);';
  /** 强调色；继承所在 DOM 作用域的主题变量。 */
  readonly _accent: string = 'background-color:var(--z-theme-accent);';
  /** 强调色悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _accentHover: string = 'background-color:var(--z-theme-accent-hover);';
  /** 强调色上的文字；继承所在 DOM 作用域的主题变量。 */
  readonly _onAccent: string = 'background-color:var(--z-theme-on-accent);';
  /** 焦点标记；继承所在 DOM 作用域的主题变量。 */
  readonly _focus: string = 'background-color:var(--z-theme-focus);';
  /** 成功；继承所在 DOM 作用域的主题变量。 */
  readonly _success: string = 'background-color:var(--z-theme-success);';
  /** 警告；继承所在 DOM 作用域的主题变量。 */
  readonly _warning: string = 'background-color:var(--z-theme-warning);';
  /** 错误；继承所在 DOM 作用域的主题变量。 */
  readonly _error: string = 'background-color:var(--z-theme-error);';
  /** 禁用文字；继承所在 DOM 作用域的主题变量。 */
  readonly _disabled: string = 'background-color:var(--z-theme-disabled);';
  /** 禁用表面；继承所在 DOM 作用域的主题变量。 */
  readonly _disabledSurface: string = 'background-color:var(--z-theme-disabled-surface);';
}
export class ThemeBorderColorCss extends BorderColorCss {
  /** 页面背景；继承所在 DOM 作用域的主题变量。 */
  readonly _background: string = 'border-color:var(--z-theme-background);';
  /** 容器表面；继承所在 DOM 作用域的主题变量。 */
  readonly _surface: string = 'border-color:var(--z-theme-surface);';
  /** 表面悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _surfaceHover: string = 'border-color:var(--z-theme-surface-hover);';
  /** 主要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _text: string = 'border-color:var(--z-theme-text);';
  /** 次要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _muted: string = 'border-color:var(--z-theme-muted);';
  /** 边框；继承所在 DOM 作用域的主题变量。 */
  readonly _border: string = 'border-color:var(--z-theme-border);';
  /** 强调色；继承所在 DOM 作用域的主题变量。 */
  readonly _accent: string = 'border-color:var(--z-theme-accent);';
  /** 强调色悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _accentHover: string = 'border-color:var(--z-theme-accent-hover);';
  /** 强调色上的文字；继承所在 DOM 作用域的主题变量。 */
  readonly _onAccent: string = 'border-color:var(--z-theme-on-accent);';
  /** 焦点标记；继承所在 DOM 作用域的主题变量。 */
  readonly _focus: string = 'border-color:var(--z-theme-focus);';
  /** 成功；继承所在 DOM 作用域的主题变量。 */
  readonly _success: string = 'border-color:var(--z-theme-success);';
  /** 警告；继承所在 DOM 作用域的主题变量。 */
  readonly _warning: string = 'border-color:var(--z-theme-warning);';
  /** 错误；继承所在 DOM 作用域的主题变量。 */
  readonly _error: string = 'border-color:var(--z-theme-error);';
  /** 禁用文字；继承所在 DOM 作用域的主题变量。 */
  readonly _disabled: string = 'border-color:var(--z-theme-disabled);';
  /** 禁用表面；继承所在 DOM 作用域的主题变量。 */
  readonly _disabledSurface: string = 'border-color:var(--z-theme-disabled-surface);';
}
export class ThemeOutlineColorCss extends OutlineColorCss {
  /** 页面背景；继承所在 DOM 作用域的主题变量。 */
  readonly _background: string = 'outline-color:var(--z-theme-background);';
  /** 容器表面；继承所在 DOM 作用域的主题变量。 */
  readonly _surface: string = 'outline-color:var(--z-theme-surface);';
  /** 表面悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _surfaceHover: string = 'outline-color:var(--z-theme-surface-hover);';
  /** 主要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _text: string = 'outline-color:var(--z-theme-text);';
  /** 次要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _muted: string = 'outline-color:var(--z-theme-muted);';
  /** 边框；继承所在 DOM 作用域的主题变量。 */
  readonly _border: string = 'outline-color:var(--z-theme-border);';
  /** 强调色；继承所在 DOM 作用域的主题变量。 */
  readonly _accent: string = 'outline-color:var(--z-theme-accent);';
  /** 强调色悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _accentHover: string = 'outline-color:var(--z-theme-accent-hover);';
  /** 强调色上的文字；继承所在 DOM 作用域的主题变量。 */
  readonly _onAccent: string = 'outline-color:var(--z-theme-on-accent);';
  /** 焦点标记；继承所在 DOM 作用域的主题变量。 */
  readonly _focus: string = 'outline-color:var(--z-theme-focus);';
  /** 成功；继承所在 DOM 作用域的主题变量。 */
  readonly _success: string = 'outline-color:var(--z-theme-success);';
  /** 警告；继承所在 DOM 作用域的主题变量。 */
  readonly _warning: string = 'outline-color:var(--z-theme-warning);';
  /** 错误；继承所在 DOM 作用域的主题变量。 */
  readonly _error: string = 'outline-color:var(--z-theme-error);';
  /** 禁用文字；继承所在 DOM 作用域的主题变量。 */
  readonly _disabled: string = 'outline-color:var(--z-theme-disabled);';
  /** 禁用表面；继承所在 DOM 作用域的主题变量。 */
  readonly _disabledSurface: string = 'outline-color:var(--z-theme-disabled-surface);';
}
export class ThemeFillCss extends FillCss {
  /** 页面背景；继承所在 DOM 作用域的主题变量。 */
  readonly _background: string = 'fill:var(--z-theme-background);';
  /** 容器表面；继承所在 DOM 作用域的主题变量。 */
  readonly _surface: string = 'fill:var(--z-theme-surface);';
  /** 表面悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _surfaceHover: string = 'fill:var(--z-theme-surface-hover);';
  /** 主要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _text: string = 'fill:var(--z-theme-text);';
  /** 次要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _muted: string = 'fill:var(--z-theme-muted);';
  /** 边框；继承所在 DOM 作用域的主题变量。 */
  readonly _border: string = 'fill:var(--z-theme-border);';
  /** 强调色；继承所在 DOM 作用域的主题变量。 */
  readonly _accent: string = 'fill:var(--z-theme-accent);';
  /** 强调色悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _accentHover: string = 'fill:var(--z-theme-accent-hover);';
  /** 强调色上的文字；继承所在 DOM 作用域的主题变量。 */
  readonly _onAccent: string = 'fill:var(--z-theme-on-accent);';
  /** 焦点标记；继承所在 DOM 作用域的主题变量。 */
  readonly _focus: string = 'fill:var(--z-theme-focus);';
  /** 成功；继承所在 DOM 作用域的主题变量。 */
  readonly _success: string = 'fill:var(--z-theme-success);';
  /** 警告；继承所在 DOM 作用域的主题变量。 */
  readonly _warning: string = 'fill:var(--z-theme-warning);';
  /** 错误；继承所在 DOM 作用域的主题变量。 */
  readonly _error: string = 'fill:var(--z-theme-error);';
  /** 禁用文字；继承所在 DOM 作用域的主题变量。 */
  readonly _disabled: string = 'fill:var(--z-theme-disabled);';
  /** 禁用表面；继承所在 DOM 作用域的主题变量。 */
  readonly _disabledSurface: string = 'fill:var(--z-theme-disabled-surface);';
}
export class ThemeStrokeCss extends StrokeCss {
  /** 页面背景；继承所在 DOM 作用域的主题变量。 */
  readonly _background: string = 'stroke:var(--z-theme-background);';
  /** 容器表面；继承所在 DOM 作用域的主题变量。 */
  readonly _surface: string = 'stroke:var(--z-theme-surface);';
  /** 表面悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _surfaceHover: string = 'stroke:var(--z-theme-surface-hover);';
  /** 主要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _text: string = 'stroke:var(--z-theme-text);';
  /** 次要文字；继承所在 DOM 作用域的主题变量。 */
  readonly _muted: string = 'stroke:var(--z-theme-muted);';
  /** 边框；继承所在 DOM 作用域的主题变量。 */
  readonly _border: string = 'stroke:var(--z-theme-border);';
  /** 强调色；继承所在 DOM 作用域的主题变量。 */
  readonly _accent: string = 'stroke:var(--z-theme-accent);';
  /** 强调色悬停；继承所在 DOM 作用域的主题变量。 */
  readonly _accentHover: string = 'stroke:var(--z-theme-accent-hover);';
  /** 强调色上的文字；继承所在 DOM 作用域的主题变量。 */
  readonly _onAccent: string = 'stroke:var(--z-theme-on-accent);';
  /** 焦点标记；继承所在 DOM 作用域的主题变量。 */
  readonly _focus: string = 'stroke:var(--z-theme-focus);';
  /** 成功；继承所在 DOM 作用域的主题变量。 */
  readonly _success: string = 'stroke:var(--z-theme-success);';
  /** 警告；继承所在 DOM 作用域的主题变量。 */
  readonly _warning: string = 'stroke:var(--z-theme-warning);';
  /** 错误；继承所在 DOM 作用域的主题变量。 */
  readonly _error: string = 'stroke:var(--z-theme-error);';
  /** 禁用文字；继承所在 DOM 作用域的主题变量。 */
  readonly _disabled: string = 'stroke:var(--z-theme-disabled);';
  /** 禁用表面；继承所在 DOM 作用域的主题变量。 */
  readonly _disabledSurface: string = 'stroke:var(--z-theme-disabled-surface);';
}
/** 可选亮暗主题作者类；仍可继续继承属性类添加项目关键字。 */
export class ThemeCss extends Css {
  override readonly color = new ThemeColorCss();
  override readonly backgroundColor = new ThemeBackgroundColorCss();
  override readonly borderColor = new ThemeBorderColorCss();
  override readonly outlineColor = new ThemeOutlineColorCss();
  override readonly fill = new ThemeFillCss();
  override readonly stroke = new ThemeStrokeCss();
}
