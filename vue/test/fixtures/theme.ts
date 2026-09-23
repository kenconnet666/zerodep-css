import { Css, defineTheme } from '@zerodep-css/core';
import { createStyles } from '@zerodep-css/vue';
export const theme = defineTheme('app-theme', { color: { brand: 'red', text: 'black' } });
export const spacing = defineTheme('app-spacing', { gap: '4px' });
export class AppCss extends Css {
  // 核验初始化绑定的派生属性不能被按系统属性自动提升。
  get width() {
    const base = super.width;
    return new Proxy(base, {
      get(target, key, receiver) {
        return key === 'px'
          ? (value: number) => target.px(value * 2)
          : Reflect.get(target, key, receiver);
      },
    });
  }
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }
  get backgroundColor() {
    return this.extendProperty(super.backgroundColor, theme.tokens.color);
  }
}
export const styles = createStyles({ cssType: AppCss, theme });
