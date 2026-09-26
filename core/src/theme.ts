import { themePalette, themeVariable } from './theme-palette.js';
export * from './generated/theme.js';

function declarations(mode: 'light' | 'dark'): string {
  const index = mode === 'light' ? 1 : 2;
  return (
    `color-scheme:${mode};` +
    Object.entries(themePalette)
      .map(([name, values]) => `${themeVariable(name)}:${values[index]};`)
      .join('')
  );
}

/** 纯声明字符串；在当前组件 / 请求中用 css(themes.light) 登记作用域类。 */
export const themes = Object.freeze({ light: declarations('light'), dark: declarations('dark') });
