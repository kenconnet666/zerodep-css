# zerodep-css-svelte

Svelte 5 的运行时 CSS、作者上下文和显式 CSS 变量绑定。提供 ESM 与类型声明，Node 构建/SSR 要求 Node 24+。

```sh
pnpm add zerodep-css-svelte
```

```ts
// 项目自己的 css.ts
import { Css, createCssContext } from 'zerodep-css-svelte';
export class AppCss extends Css {}
export const { provideCss, useCss } = createCssContext<AppCss>();
```

根组件初始化时调用 `provideCss(new AppCss())`，后代通过 useCss 取得同一个作者实例。组件从 `zerodep-css-svelte` 导入 css、bx、keyframes 等 API。

使用 bx 时，在官方插件之前安装：

```ts
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import cssBindings from 'zerodep-css-svelte/vite';
export default defineConfig({ plugins: [cssBindings(), svelte()] });
```

```svelte
<div class={css(s.display.flex, s.width.raw(bx(width + 'px')))}></div>
```

Node 自动选择服务端入口；完整 SSR 渲染需处于请求宿主内。SvelteKit 项目同时配置 zerodep-css-sveltekit。严格禁止内联 style 的项目可设置 `cssBindings({ inlineBindings: false })`。

[入门与手工 SSR](https://github.com/kenconnet666/zerodep-css/blob/main/docs/getting-started.md) · [bx 与编译范围](https://github.com/kenconnet666/zerodep-css/blob/main/docs/bindings.md)
