import { Css } from './css.js';
import { defineTheme } from './theme.js';

/** 可选预设不从默认入口加载；颜色以用途命名，应用可通过 extend 覆盖。 */
export const lightTheme = defineTheme('system', {
  colorScheme: 'light',
  color: {
    canvas: '#f8fafc',
    surface: '#ffffff',
    surfaceRaised: '#ffffff',
    text: '#0f172a',
    textMuted: '#475569',
    textDisabled: '#64748b',
    primary: '#2563eb',
    onPrimary: '#ffffff',
    secondary: '#475569',
    onSecondary: '#ffffff',
    accent: '#7c3aed',
    onAccent: '#ffffff',
    success: '#15803d',
    onSuccess: '#ffffff',
    warning: '#b45309',
    onWarning: '#ffffff',
    danger: '#b91c1c',
    onDanger: '#ffffff',
    info: '#0369a1',
    onInfo: '#ffffff',
    border: '#64748b',
    borderSubtle: '#e2e8f0',
    focusRing: '#2563eb',
    overlay: 'rgba(15, 23, 42, 0.48)',
  },
  space: { zero: '0px', xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px', xxl: '32px' },
  radius: { sm: '4px', md: '8px', lg: '12px', pill: '9999px' },
  fontFamily: {
    body: 'system-ui, -apple-system, "Segoe UI", sans-serif',
    mono: 'ui-monospace, "Cascadia Code", monospace',
  },
  fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '24px' },
  duration: { fast: '120ms', normal: '180ms', slow: '280ms' },
  shadow: {
    sm: '0 1px 3px rgba(15, 23, 42, 0.12)',
    md: '0 6px 18px rgba(15, 23, 42, 0.14)',
    lg: '0 16px 40px rgba(15, 23, 42, 0.18)',
  },
});

/** 同一主题家族只覆盖值，预设切换不会改变 token 的变量身份。 */
export const darkTheme: typeof lightTheme = lightTheme.extend({
  colorScheme: 'dark',
  color: {
    canvas: '#020617',
    surface: '#0f172a',
    surfaceRaised: '#1e293b',
    text: '#f8fafc',
    textMuted: '#cbd5e1',
    textDisabled: '#94a3b8',
    primary: '#93c5fd',
    onPrimary: '#0b1220',
    secondary: '#94a3b8',
    onSecondary: '#0b1220',
    accent: '#c4b5fd',
    onAccent: '#1e1b4b',
    success: '#86efac',
    onSuccess: '#052e16',
    warning: '#fcd34d',
    onWarning: '#422006',
    danger: '#fca5a5',
    onDanger: '#450a0a',
    info: '#7dd3fc',
    onInfo: '#082f49',
    border: '#94a3b8',
    borderSubtle: '#334155',
    focusRing: '#93c5fd',
    overlay: 'rgba(0, 0, 0, 0.64)',
  },
  shadow: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.35)',
    md: '0 6px 18px rgba(0, 0, 0, 0.45)',
    lg: '0 16px 40px rgba(0, 0, 0, 0.55)',
  },
});

type ThemeMembers<T> = { readonly [K in keyof T]: void };

/** 可选语义作者类；标准 Css 不会因为导入预设而增加主题关键字。 */
export class ThemeCss extends Css {
  get color(): Css['color'] & ThemeMembers<typeof lightTheme.tokens.color> {
    return this.extendProperty(super.color, lightTheme.tokens.color);
  }
  get backgroundColor(): Css['backgroundColor'] & ThemeMembers<typeof lightTheme.tokens.color> {
    return this.extendProperty(super.backgroundColor, lightTheme.tokens.color);
  }
  get borderColor(): Css['borderColor'] & ThemeMembers<typeof lightTheme.tokens.color> {
    return this.extendProperty(super.borderColor, lightTheme.tokens.color);
  }
  get outlineColor(): Css['outlineColor'] & ThemeMembers<typeof lightTheme.tokens.color> {
    return this.extendProperty(super.outlineColor, lightTheme.tokens.color);
  }
  get fill(): Css['fill'] & ThemeMembers<typeof lightTheme.tokens.color> {
    return this.extendProperty(super.fill, lightTheme.tokens.color);
  }
  get stroke(): Css['stroke'] & ThemeMembers<typeof lightTheme.tokens.color> {
    return this.extendProperty(super.stroke, lightTheme.tokens.color);
  }
  get padding(): Css['padding'] & ThemeMembers<typeof lightTheme.tokens.space> {
    return this.extendProperty(super.padding, lightTheme.tokens.space);
  }
  get margin(): Css['margin'] & ThemeMembers<typeof lightTheme.tokens.space> {
    return this.extendProperty(super.margin, lightTheme.tokens.space);
  }
  get gap(): Css['gap'] & ThemeMembers<typeof lightTheme.tokens.space> {
    return this.extendProperty(super.gap, lightTheme.tokens.space);
  }
  get borderRadius(): Css['borderRadius'] & ThemeMembers<typeof lightTheme.tokens.radius> {
    return this.extendProperty(super.borderRadius, lightTheme.tokens.radius);
  }
  get fontFamily(): Css['fontFamily'] & ThemeMembers<typeof lightTheme.tokens.fontFamily> {
    return this.extendProperty(super.fontFamily, lightTheme.tokens.fontFamily);
  }
  get fontSize(): Css['fontSize'] & ThemeMembers<typeof lightTheme.tokens.fontSize> {
    return this.extendProperty(super.fontSize, lightTheme.tokens.fontSize);
  }
  get transitionDuration(): Css['transitionDuration'] &
    ThemeMembers<typeof lightTheme.tokens.duration> {
    return this.extendProperty(super.transitionDuration, lightTheme.tokens.duration);
  }
  get boxShadow(): Css['boxShadow'] & ThemeMembers<typeof lightTheme.tokens.shadow> {
    return this.extendProperty(super.boxShadow, lightTheme.tokens.shadow);
  }
  get colorScheme(): Css['colorScheme'] & { readonly theme: void } {
    return this.extendProperty(super.colorScheme, { theme: lightTheme.tokens.colorScheme });
  }
}
