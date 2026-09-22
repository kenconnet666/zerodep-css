import { createRuntime } from '../../src/index.js';
import { ThemeCss, lightTheme, darkTheme } from '../../src/themes.js';

const runtime = createRuntime({ target: null });
runtime.css((s) => {
  s.color.primary;
  s.backgroundColor.surface;
  s.padding.md;
  s.colorScheme.theme;
}, ThemeCss);
runtime.css((s) => {
  // @ts-expect-error 预设关键字不属于系统基类
  s.color.primary;
});
darkTheme.extend({ color: { primary: '#123456' }, space: { md: '14px' } });
// @ts-expect-error 主题颜色不能变成数字
lightTheme.extend({ color: { primary: 1 } });
// @ts-expect-error 未声明的主题字段
darkTheme.extend({ color: { unknown: 'red' } });
class AppCss extends ThemeCss {
  get color() {
    return this.extendProperty(super.color, { brand: lightTheme.tokens.color.primary });
  }
}
runtime.css((s) => {
  s.color.brand;
  s.hover((h) => {
    h.color.primary;
  });
}, AppCss);
