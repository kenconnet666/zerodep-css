# zerodep-css-vue

Vue 3.5 的运行时 CSS、作者上下文和隐式 CSS 变量转换。提供 ESM 与类型声明，Node 构建/SSR 要求 Node 24+。

```sh
pnpm add zerodep-css-vue
```

```ts
// 项目自己的 css.ts
import { Css, createCssContext } from 'zerodep-css-vue';
export class AppCss extends Css {}
export const { provideCss, useCss } = createCssContext<AppCss>();
```

根组件 setup 调用 `provideCss(new AppCss())`，后代通过 useCss 取得同一个作者实例。组件从 `zerodep-css-vue` 导入 css、keyframes 等 API。

启用自动追踪与变量转换时，在官方 Vue 插件之前安装：

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssBindings from 'zerodep-css-vue/vite';
export default defineConfig({ plugins: [cssBindings(), vue()] });
```

```vue
<div :class="css(s.display.flex, s.width.px(width))" />
```

Node 自动选择服务端入口；完整 SSR 渲染需处于请求宿主内。Nuxt 项目使用 zerodep-css-vue/nuxt 模块。严格禁止内联 style 的项目可设置 `cssBindings({ inlineBindings: false })`。

[入门与手工 SSR](https://github.com/kenconnet666/zerodep-css/blob/main/docs/getting-started.md) · [自动转换与支持范围](https://github.com/kenconnet666/zerodep-css/blob/main/docs/bindings.md)
