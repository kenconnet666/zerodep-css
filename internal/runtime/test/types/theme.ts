import { defineTheme, readTheme, createRuntime, Css, type ThemeOverrides } from '../../index.js';

const theme = defineTheme('app', { color: { brand: 'red' }, opacity: 1 });
const values = readTheme(theme);
const brand: string = values.color.brand;
const opacity: number = values.opacity;
void brand;
void opacity;
// @ts-expect-error 主题读取保留字段结构
values.color.unknown;
// @ts-expect-error 读取结果是深只读快照
values.color.brand = 'blue';
// @ts-expect-error 数字叶不会退化成字符串
const invalidOpacity: string = values.opacity;
void invalidOpacity;
const overrides: ThemeOverrides<typeof theme.defaults> = { color: { brand: 'blue' } };
theme.resolve(overrides);
theme.extend({ opacity: 0.5 });
theme.resolve({ color: null });
// @ts-expect-error 主题字段受声明结构限制
theme.resolve({ size: '10px' });
// @ts-expect-error 数字叶不能变成字符串
theme.resolve({ opacity: '0.5' });
// @ts-expect-error 主题只接受 CSS 标量叶
defineTheme('bad', { visible: true });
// @ts-expect-error 字符串字段不能变成数字
theme.extend({ color: { brand: 1 } });
class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }
}
const runtime = createRuntime({ target: null });
runtime.css((s) => {
  s.color.brand;
  s.hover((h) => {
    h.color.brand;
  });
}, AppCss);
runtime.css((s) => {
  // @ts-expect-error 新关键字不污染系统基类
  s.color.brand;
});
// @ts-expect-error token 树仍是只读引用
theme.tokens.color.brand = theme.tokens.color.brand;
