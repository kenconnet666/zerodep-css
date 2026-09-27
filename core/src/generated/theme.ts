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
/**
 * color 的可选语义主题扩展；通过 CSS 变量继承所在 DOM 作用域的主题。
 */
export class ThemeColorCss extends ColorCss {
  /**
   * 页面背景；引用所在 DOM 作用域的主题变量 --z-theme-background。
   *
   * CSS 声明：`color:var(--z-theme-background);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._background
   */
  readonly _background: string = 'color:var(--z-theme-background);';
  /**
   * 容器表面；引用所在 DOM 作用域的主题变量 --z-theme-surface。
   *
   * CSS 声明：`color:var(--z-theme-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._surface
   */
  readonly _surface: string = 'color:var(--z-theme-surface);';
  /**
   * 表面悬停；引用所在 DOM 作用域的主题变量 --z-theme-surface-hover。
   *
   * CSS 声明：`color:var(--z-theme-surface-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._surfaceHover
   */
  readonly _surfaceHover: string = 'color:var(--z-theme-surface-hover);';
  /**
   * 主要文字；引用所在 DOM 作用域的主题变量 --z-theme-text。
   *
   * CSS 声明：`color:var(--z-theme-text);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._text
   */
  readonly _text: string = 'color:var(--z-theme-text);';
  /**
   * 次要文字；引用所在 DOM 作用域的主题变量 --z-theme-muted。
   *
   * CSS 声明：`color:var(--z-theme-muted);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._muted
   */
  readonly _muted: string = 'color:var(--z-theme-muted);';
  /**
   * 边框；引用所在 DOM 作用域的主题变量 --z-theme-border。
   *
   * CSS 声明：`color:var(--z-theme-border);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._border
   */
  readonly _border: string = 'color:var(--z-theme-border);';
  /**
   * 强调色；引用所在 DOM 作用域的主题变量 --z-theme-accent。
   *
   * CSS 声明：`color:var(--z-theme-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._accent
   */
  readonly _accent: string = 'color:var(--z-theme-accent);';
  /**
   * 强调色悬停；引用所在 DOM 作用域的主题变量 --z-theme-accent-hover。
   *
   * CSS 声明：`color:var(--z-theme-accent-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._accentHover
   */
  readonly _accentHover: string = 'color:var(--z-theme-accent-hover);';
  /**
   * 强调色上的文字；引用所在 DOM 作用域的主题变量 --z-theme-on-accent。
   *
   * CSS 声明：`color:var(--z-theme-on-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._onAccent
   */
  readonly _onAccent: string = 'color:var(--z-theme-on-accent);';
  /**
   * 焦点标记；引用所在 DOM 作用域的主题变量 --z-theme-focus。
   *
   * CSS 声明：`color:var(--z-theme-focus);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._focus
   */
  readonly _focus: string = 'color:var(--z-theme-focus);';
  /**
   * 成功；引用所在 DOM 作用域的主题变量 --z-theme-success。
   *
   * CSS 声明：`color:var(--z-theme-success);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._success
   */
  readonly _success: string = 'color:var(--z-theme-success);';
  /**
   * 警告；引用所在 DOM 作用域的主题变量 --z-theme-warning。
   *
   * CSS 声明：`color:var(--z-theme-warning);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._warning
   */
  readonly _warning: string = 'color:var(--z-theme-warning);';
  /**
   * 错误；引用所在 DOM 作用域的主题变量 --z-theme-error。
   *
   * CSS 声明：`color:var(--z-theme-error);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._error
   */
  readonly _error: string = 'color:var(--z-theme-error);';
  /**
   * 禁用文字；引用所在 DOM 作用域的主题变量 --z-theme-disabled。
   *
   * CSS 声明：`color:var(--z-theme-disabled);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._disabled
   */
  readonly _disabled: string = 'color:var(--z-theme-disabled);';
  /**
   * 禁用表面；引用所在 DOM 作用域的主题变量 --z-theme-disabled-surface。
   *
   * CSS 声明：`color:var(--z-theme-disabled-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.color._disabledSurface
   */
  readonly _disabledSurface: string = 'color:var(--z-theme-disabled-surface);';
}
/**
 * background-color 的可选语义主题扩展；通过 CSS 变量继承所在 DOM 作用域的主题。
 */
export class ThemeBackgroundColorCss extends BackgroundColorCss {
  /**
   * 页面背景；引用所在 DOM 作用域的主题变量 --z-theme-background。
   *
   * CSS 声明：`background-color:var(--z-theme-background);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._background
   */
  readonly _background: string = 'background-color:var(--z-theme-background);';
  /**
   * 容器表面；引用所在 DOM 作用域的主题变量 --z-theme-surface。
   *
   * CSS 声明：`background-color:var(--z-theme-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._surface
   */
  readonly _surface: string = 'background-color:var(--z-theme-surface);';
  /**
   * 表面悬停；引用所在 DOM 作用域的主题变量 --z-theme-surface-hover。
   *
   * CSS 声明：`background-color:var(--z-theme-surface-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._surfaceHover
   */
  readonly _surfaceHover: string = 'background-color:var(--z-theme-surface-hover);';
  /**
   * 主要文字；引用所在 DOM 作用域的主题变量 --z-theme-text。
   *
   * CSS 声明：`background-color:var(--z-theme-text);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._text
   */
  readonly _text: string = 'background-color:var(--z-theme-text);';
  /**
   * 次要文字；引用所在 DOM 作用域的主题变量 --z-theme-muted。
   *
   * CSS 声明：`background-color:var(--z-theme-muted);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._muted
   */
  readonly _muted: string = 'background-color:var(--z-theme-muted);';
  /**
   * 边框；引用所在 DOM 作用域的主题变量 --z-theme-border。
   *
   * CSS 声明：`background-color:var(--z-theme-border);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._border
   */
  readonly _border: string = 'background-color:var(--z-theme-border);';
  /**
   * 强调色；引用所在 DOM 作用域的主题变量 --z-theme-accent。
   *
   * CSS 声明：`background-color:var(--z-theme-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._accent
   */
  readonly _accent: string = 'background-color:var(--z-theme-accent);';
  /**
   * 强调色悬停；引用所在 DOM 作用域的主题变量 --z-theme-accent-hover。
   *
   * CSS 声明：`background-color:var(--z-theme-accent-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._accentHover
   */
  readonly _accentHover: string = 'background-color:var(--z-theme-accent-hover);';
  /**
   * 强调色上的文字；引用所在 DOM 作用域的主题变量 --z-theme-on-accent。
   *
   * CSS 声明：`background-color:var(--z-theme-on-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._onAccent
   */
  readonly _onAccent: string = 'background-color:var(--z-theme-on-accent);';
  /**
   * 焦点标记；引用所在 DOM 作用域的主题变量 --z-theme-focus。
   *
   * CSS 声明：`background-color:var(--z-theme-focus);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._focus
   */
  readonly _focus: string = 'background-color:var(--z-theme-focus);';
  /**
   * 成功；引用所在 DOM 作用域的主题变量 --z-theme-success。
   *
   * CSS 声明：`background-color:var(--z-theme-success);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._success
   */
  readonly _success: string = 'background-color:var(--z-theme-success);';
  /**
   * 警告；引用所在 DOM 作用域的主题变量 --z-theme-warning。
   *
   * CSS 声明：`background-color:var(--z-theme-warning);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._warning
   */
  readonly _warning: string = 'background-color:var(--z-theme-warning);';
  /**
   * 错误；引用所在 DOM 作用域的主题变量 --z-theme-error。
   *
   * CSS 声明：`background-color:var(--z-theme-error);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._error
   */
  readonly _error: string = 'background-color:var(--z-theme-error);';
  /**
   * 禁用文字；引用所在 DOM 作用域的主题变量 --z-theme-disabled。
   *
   * CSS 声明：`background-color:var(--z-theme-disabled);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._disabled
   */
  readonly _disabled: string = 'background-color:var(--z-theme-disabled);';
  /**
   * 禁用表面；引用所在 DOM 作用域的主题变量 --z-theme-disabled-surface。
   *
   * CSS 声明：`background-color:var(--z-theme-disabled-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.backgroundColor._disabledSurface
   */
  readonly _disabledSurface: string = 'background-color:var(--z-theme-disabled-surface);';
}
/**
 * border-color 的可选语义主题扩展；通过 CSS 变量继承所在 DOM 作用域的主题。
 */
export class ThemeBorderColorCss extends BorderColorCss {
  /**
   * 页面背景；引用所在 DOM 作用域的主题变量 --z-theme-background。
   *
   * CSS 声明：`border-color:var(--z-theme-background);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._background
   */
  readonly _background: string = 'border-color:var(--z-theme-background);';
  /**
   * 容器表面；引用所在 DOM 作用域的主题变量 --z-theme-surface。
   *
   * CSS 声明：`border-color:var(--z-theme-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._surface
   */
  readonly _surface: string = 'border-color:var(--z-theme-surface);';
  /**
   * 表面悬停；引用所在 DOM 作用域的主题变量 --z-theme-surface-hover。
   *
   * CSS 声明：`border-color:var(--z-theme-surface-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._surfaceHover
   */
  readonly _surfaceHover: string = 'border-color:var(--z-theme-surface-hover);';
  /**
   * 主要文字；引用所在 DOM 作用域的主题变量 --z-theme-text。
   *
   * CSS 声明：`border-color:var(--z-theme-text);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._text
   */
  readonly _text: string = 'border-color:var(--z-theme-text);';
  /**
   * 次要文字；引用所在 DOM 作用域的主题变量 --z-theme-muted。
   *
   * CSS 声明：`border-color:var(--z-theme-muted);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._muted
   */
  readonly _muted: string = 'border-color:var(--z-theme-muted);';
  /**
   * 边框；引用所在 DOM 作用域的主题变量 --z-theme-border。
   *
   * CSS 声明：`border-color:var(--z-theme-border);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._border
   */
  readonly _border: string = 'border-color:var(--z-theme-border);';
  /**
   * 强调色；引用所在 DOM 作用域的主题变量 --z-theme-accent。
   *
   * CSS 声明：`border-color:var(--z-theme-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._accent
   */
  readonly _accent: string = 'border-color:var(--z-theme-accent);';
  /**
   * 强调色悬停；引用所在 DOM 作用域的主题变量 --z-theme-accent-hover。
   *
   * CSS 声明：`border-color:var(--z-theme-accent-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._accentHover
   */
  readonly _accentHover: string = 'border-color:var(--z-theme-accent-hover);';
  /**
   * 强调色上的文字；引用所在 DOM 作用域的主题变量 --z-theme-on-accent。
   *
   * CSS 声明：`border-color:var(--z-theme-on-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._onAccent
   */
  readonly _onAccent: string = 'border-color:var(--z-theme-on-accent);';
  /**
   * 焦点标记；引用所在 DOM 作用域的主题变量 --z-theme-focus。
   *
   * CSS 声明：`border-color:var(--z-theme-focus);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._focus
   */
  readonly _focus: string = 'border-color:var(--z-theme-focus);';
  /**
   * 成功；引用所在 DOM 作用域的主题变量 --z-theme-success。
   *
   * CSS 声明：`border-color:var(--z-theme-success);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._success
   */
  readonly _success: string = 'border-color:var(--z-theme-success);';
  /**
   * 警告；引用所在 DOM 作用域的主题变量 --z-theme-warning。
   *
   * CSS 声明：`border-color:var(--z-theme-warning);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._warning
   */
  readonly _warning: string = 'border-color:var(--z-theme-warning);';
  /**
   * 错误；引用所在 DOM 作用域的主题变量 --z-theme-error。
   *
   * CSS 声明：`border-color:var(--z-theme-error);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._error
   */
  readonly _error: string = 'border-color:var(--z-theme-error);';
  /**
   * 禁用文字；引用所在 DOM 作用域的主题变量 --z-theme-disabled。
   *
   * CSS 声明：`border-color:var(--z-theme-disabled);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._disabled
   */
  readonly _disabled: string = 'border-color:var(--z-theme-disabled);';
  /**
   * 禁用表面；引用所在 DOM 作用域的主题变量 --z-theme-disabled-surface。
   *
   * CSS 声明：`border-color:var(--z-theme-disabled-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.borderColor._disabledSurface
   */
  readonly _disabledSurface: string = 'border-color:var(--z-theme-disabled-surface);';
}
/**
 * outline-color 的可选语义主题扩展；通过 CSS 变量继承所在 DOM 作用域的主题。
 */
export class ThemeOutlineColorCss extends OutlineColorCss {
  /**
   * 页面背景；引用所在 DOM 作用域的主题变量 --z-theme-background。
   *
   * CSS 声明：`outline-color:var(--z-theme-background);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._background
   */
  readonly _background: string = 'outline-color:var(--z-theme-background);';
  /**
   * 容器表面；引用所在 DOM 作用域的主题变量 --z-theme-surface。
   *
   * CSS 声明：`outline-color:var(--z-theme-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._surface
   */
  readonly _surface: string = 'outline-color:var(--z-theme-surface);';
  /**
   * 表面悬停；引用所在 DOM 作用域的主题变量 --z-theme-surface-hover。
   *
   * CSS 声明：`outline-color:var(--z-theme-surface-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._surfaceHover
   */
  readonly _surfaceHover: string = 'outline-color:var(--z-theme-surface-hover);';
  /**
   * 主要文字；引用所在 DOM 作用域的主题变量 --z-theme-text。
   *
   * CSS 声明：`outline-color:var(--z-theme-text);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._text
   */
  readonly _text: string = 'outline-color:var(--z-theme-text);';
  /**
   * 次要文字；引用所在 DOM 作用域的主题变量 --z-theme-muted。
   *
   * CSS 声明：`outline-color:var(--z-theme-muted);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._muted
   */
  readonly _muted: string = 'outline-color:var(--z-theme-muted);';
  /**
   * 边框；引用所在 DOM 作用域的主题变量 --z-theme-border。
   *
   * CSS 声明：`outline-color:var(--z-theme-border);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._border
   */
  readonly _border: string = 'outline-color:var(--z-theme-border);';
  /**
   * 强调色；引用所在 DOM 作用域的主题变量 --z-theme-accent。
   *
   * CSS 声明：`outline-color:var(--z-theme-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._accent
   */
  readonly _accent: string = 'outline-color:var(--z-theme-accent);';
  /**
   * 强调色悬停；引用所在 DOM 作用域的主题变量 --z-theme-accent-hover。
   *
   * CSS 声明：`outline-color:var(--z-theme-accent-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._accentHover
   */
  readonly _accentHover: string = 'outline-color:var(--z-theme-accent-hover);';
  /**
   * 强调色上的文字；引用所在 DOM 作用域的主题变量 --z-theme-on-accent。
   *
   * CSS 声明：`outline-color:var(--z-theme-on-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._onAccent
   */
  readonly _onAccent: string = 'outline-color:var(--z-theme-on-accent);';
  /**
   * 焦点标记；引用所在 DOM 作用域的主题变量 --z-theme-focus。
   *
   * CSS 声明：`outline-color:var(--z-theme-focus);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._focus
   */
  readonly _focus: string = 'outline-color:var(--z-theme-focus);';
  /**
   * 成功；引用所在 DOM 作用域的主题变量 --z-theme-success。
   *
   * CSS 声明：`outline-color:var(--z-theme-success);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._success
   */
  readonly _success: string = 'outline-color:var(--z-theme-success);';
  /**
   * 警告；引用所在 DOM 作用域的主题变量 --z-theme-warning。
   *
   * CSS 声明：`outline-color:var(--z-theme-warning);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._warning
   */
  readonly _warning: string = 'outline-color:var(--z-theme-warning);';
  /**
   * 错误；引用所在 DOM 作用域的主题变量 --z-theme-error。
   *
   * CSS 声明：`outline-color:var(--z-theme-error);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._error
   */
  readonly _error: string = 'outline-color:var(--z-theme-error);';
  /**
   * 禁用文字；引用所在 DOM 作用域的主题变量 --z-theme-disabled。
   *
   * CSS 声明：`outline-color:var(--z-theme-disabled);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._disabled
   */
  readonly _disabled: string = 'outline-color:var(--z-theme-disabled);';
  /**
   * 禁用表面；引用所在 DOM 作用域的主题变量 --z-theme-disabled-surface。
   *
   * CSS 声明：`outline-color:var(--z-theme-disabled-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.outlineColor._disabledSurface
   */
  readonly _disabledSurface: string = 'outline-color:var(--z-theme-disabled-surface);';
}
/**
 * fill 的可选语义主题扩展；通过 CSS 变量继承所在 DOM 作用域的主题。
 */
export class ThemeFillCss extends FillCss {
  /**
   * 页面背景；引用所在 DOM 作用域的主题变量 --z-theme-background。
   *
   * CSS 声明：`fill:var(--z-theme-background);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._background
   */
  readonly _background: string = 'fill:var(--z-theme-background);';
  /**
   * 容器表面；引用所在 DOM 作用域的主题变量 --z-theme-surface。
   *
   * CSS 声明：`fill:var(--z-theme-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._surface
   */
  readonly _surface: string = 'fill:var(--z-theme-surface);';
  /**
   * 表面悬停；引用所在 DOM 作用域的主题变量 --z-theme-surface-hover。
   *
   * CSS 声明：`fill:var(--z-theme-surface-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._surfaceHover
   */
  readonly _surfaceHover: string = 'fill:var(--z-theme-surface-hover);';
  /**
   * 主要文字；引用所在 DOM 作用域的主题变量 --z-theme-text。
   *
   * CSS 声明：`fill:var(--z-theme-text);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._text
   */
  readonly _text: string = 'fill:var(--z-theme-text);';
  /**
   * 次要文字；引用所在 DOM 作用域的主题变量 --z-theme-muted。
   *
   * CSS 声明：`fill:var(--z-theme-muted);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._muted
   */
  readonly _muted: string = 'fill:var(--z-theme-muted);';
  /**
   * 边框；引用所在 DOM 作用域的主题变量 --z-theme-border。
   *
   * CSS 声明：`fill:var(--z-theme-border);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._border
   */
  readonly _border: string = 'fill:var(--z-theme-border);';
  /**
   * 强调色；引用所在 DOM 作用域的主题变量 --z-theme-accent。
   *
   * CSS 声明：`fill:var(--z-theme-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._accent
   */
  readonly _accent: string = 'fill:var(--z-theme-accent);';
  /**
   * 强调色悬停；引用所在 DOM 作用域的主题变量 --z-theme-accent-hover。
   *
   * CSS 声明：`fill:var(--z-theme-accent-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._accentHover
   */
  readonly _accentHover: string = 'fill:var(--z-theme-accent-hover);';
  /**
   * 强调色上的文字；引用所在 DOM 作用域的主题变量 --z-theme-on-accent。
   *
   * CSS 声明：`fill:var(--z-theme-on-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._onAccent
   */
  readonly _onAccent: string = 'fill:var(--z-theme-on-accent);';
  /**
   * 焦点标记；引用所在 DOM 作用域的主题变量 --z-theme-focus。
   *
   * CSS 声明：`fill:var(--z-theme-focus);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._focus
   */
  readonly _focus: string = 'fill:var(--z-theme-focus);';
  /**
   * 成功；引用所在 DOM 作用域的主题变量 --z-theme-success。
   *
   * CSS 声明：`fill:var(--z-theme-success);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._success
   */
  readonly _success: string = 'fill:var(--z-theme-success);';
  /**
   * 警告；引用所在 DOM 作用域的主题变量 --z-theme-warning。
   *
   * CSS 声明：`fill:var(--z-theme-warning);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._warning
   */
  readonly _warning: string = 'fill:var(--z-theme-warning);';
  /**
   * 错误；引用所在 DOM 作用域的主题变量 --z-theme-error。
   *
   * CSS 声明：`fill:var(--z-theme-error);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._error
   */
  readonly _error: string = 'fill:var(--z-theme-error);';
  /**
   * 禁用文字；引用所在 DOM 作用域的主题变量 --z-theme-disabled。
   *
   * CSS 声明：`fill:var(--z-theme-disabled);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._disabled
   */
  readonly _disabled: string = 'fill:var(--z-theme-disabled);';
  /**
   * 禁用表面；引用所在 DOM 作用域的主题变量 --z-theme-disabled-surface。
   *
   * CSS 声明：`fill:var(--z-theme-disabled-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.fill._disabledSurface
   */
  readonly _disabledSurface: string = 'fill:var(--z-theme-disabled-surface);';
}
/**
 * stroke 的可选语义主题扩展；通过 CSS 变量继承所在 DOM 作用域的主题。
 */
export class ThemeStrokeCss extends StrokeCss {
  /**
   * 页面背景；引用所在 DOM 作用域的主题变量 --z-theme-background。
   *
   * CSS 声明：`stroke:var(--z-theme-background);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._background
   */
  readonly _background: string = 'stroke:var(--z-theme-background);';
  /**
   * 容器表面；引用所在 DOM 作用域的主题变量 --z-theme-surface。
   *
   * CSS 声明：`stroke:var(--z-theme-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._surface
   */
  readonly _surface: string = 'stroke:var(--z-theme-surface);';
  /**
   * 表面悬停；引用所在 DOM 作用域的主题变量 --z-theme-surface-hover。
   *
   * CSS 声明：`stroke:var(--z-theme-surface-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._surfaceHover
   */
  readonly _surfaceHover: string = 'stroke:var(--z-theme-surface-hover);';
  /**
   * 主要文字；引用所在 DOM 作用域的主题变量 --z-theme-text。
   *
   * CSS 声明：`stroke:var(--z-theme-text);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._text
   */
  readonly _text: string = 'stroke:var(--z-theme-text);';
  /**
   * 次要文字；引用所在 DOM 作用域的主题变量 --z-theme-muted。
   *
   * CSS 声明：`stroke:var(--z-theme-muted);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._muted
   */
  readonly _muted: string = 'stroke:var(--z-theme-muted);';
  /**
   * 边框；引用所在 DOM 作用域的主题变量 --z-theme-border。
   *
   * CSS 声明：`stroke:var(--z-theme-border);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._border
   */
  readonly _border: string = 'stroke:var(--z-theme-border);';
  /**
   * 强调色；引用所在 DOM 作用域的主题变量 --z-theme-accent。
   *
   * CSS 声明：`stroke:var(--z-theme-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._accent
   */
  readonly _accent: string = 'stroke:var(--z-theme-accent);';
  /**
   * 强调色悬停；引用所在 DOM 作用域的主题变量 --z-theme-accent-hover。
   *
   * CSS 声明：`stroke:var(--z-theme-accent-hover);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._accentHover
   */
  readonly _accentHover: string = 'stroke:var(--z-theme-accent-hover);';
  /**
   * 强调色上的文字；引用所在 DOM 作用域的主题变量 --z-theme-on-accent。
   *
   * CSS 声明：`stroke:var(--z-theme-on-accent);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._onAccent
   */
  readonly _onAccent: string = 'stroke:var(--z-theme-on-accent);';
  /**
   * 焦点标记；引用所在 DOM 作用域的主题变量 --z-theme-focus。
   *
   * CSS 声明：`stroke:var(--z-theme-focus);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._focus
   */
  readonly _focus: string = 'stroke:var(--z-theme-focus);';
  /**
   * 成功；引用所在 DOM 作用域的主题变量 --z-theme-success。
   *
   * CSS 声明：`stroke:var(--z-theme-success);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._success
   */
  readonly _success: string = 'stroke:var(--z-theme-success);';
  /**
   * 警告；引用所在 DOM 作用域的主题变量 --z-theme-warning。
   *
   * CSS 声明：`stroke:var(--z-theme-warning);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._warning
   */
  readonly _warning: string = 'stroke:var(--z-theme-warning);';
  /**
   * 错误；引用所在 DOM 作用域的主题变量 --z-theme-error。
   *
   * CSS 声明：`stroke:var(--z-theme-error);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._error
   */
  readonly _error: string = 'stroke:var(--z-theme-error);';
  /**
   * 禁用文字；引用所在 DOM 作用域的主题变量 --z-theme-disabled。
   *
   * CSS 声明：`stroke:var(--z-theme-disabled);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._disabled
   */
  readonly _disabled: string = 'stroke:var(--z-theme-disabled);';
  /**
   * 禁用表面；引用所在 DOM 作用域的主题变量 --z-theme-disabled-surface。
   *
   * CSS 声明：`stroke:var(--z-theme-disabled-surface);`。变量需由主题规则提供，本字段不创建主题容器。
   * @example
   * s.stroke._disabledSurface
   */
  readonly _disabledSurface: string = 'stroke:var(--z-theme-disabled-surface);';
}
/** 可选亮暗主题作者类；仍可继续继承属性类添加项目关键字。 */
export class ThemeCss extends Css {
  /**
   * color 的主题属性作者，保留原生关键字并添加语义主题字段。
   */
  override readonly color = new ThemeColorCss();
  /**
   * backgroundColor 的主题属性作者，保留原生关键字并添加语义主题字段。
   */
  override readonly backgroundColor = new ThemeBackgroundColorCss();
  /**
   * borderColor 的主题属性作者，保留原生关键字并添加语义主题字段。
   */
  override readonly borderColor = new ThemeBorderColorCss();
  /**
   * outlineColor 的主题属性作者，保留原生关键字并添加语义主题字段。
   */
  override readonly outlineColor = new ThemeOutlineColorCss();
  /**
   * fill 的主题属性作者，保留原生关键字并添加语义主题字段。
   */
  override readonly fill = new ThemeFillCss();
  /**
   * stroke 的主题属性作者，保留原生关键字并添加语义主题字段。
   */
  override readonly stroke = new ThemeStrokeCss();
}
