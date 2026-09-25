# Vue 与 Svelte 最小用法

当前三个包仍是工作区 private 包。先运行 `pnpm install --frozen-lockfile` 与 `pnpm build`；浏览器构建按 `browser` 条件使用 DOM 宿主，Node SSR 按 `node` 条件使用请求宿主。Nuxt 与 SvelteKit 专用封装、响应式变量编译、全局规则、keyframes 和 CSP/nonce 配置尚未提供。

## 作者类型与组件

Vue 项目从 `@zerodep-css/vue`、Svelte 项目从 `@zerodep-css/svelte` 导入相同名字的 `Css`、`WidthCss`、`createCssContext`、`css` 和 `ic`。项目模块只创建类型化上下文，实际作者实例由根组件提供：

```ts
import { Css, WidthCss, createCssContext } from '@zerodep-css/vue';

class ThemeWidthCss extends WidthCss {
  readonly _md = this.raw('48rem');
}
export class AppCss extends Css {
  override readonly width = new ThemeWidthCss();
}
export const { provideCss, useCss } = createCssContext<AppCss>();
```

在 Vue 根组件的 `<script setup>` 中调用 `provideCss(new AppCss())`；Svelte 根组件的 `<script>` 中同样调用一次，并从 Svelte 项目的模块导入函数。后代组件写法是：

```ts
const s = useCss(); // 取得上层的同一个 AppCss 实例
const className = css(s.display.flex, s.width._md, ic('&:hover', s.color.red));
```

`css(s.width.px(width))` 可直接放在 Vue/Svelte 模板表达式中；宽度变化时按值生成并缓存类。有限取值可在组件初始化时预注册类表，再用 Vue `computed` 或 Svelte `$derived` **只选择类名**。`css()` 本身会注册规则，不建议把它普遍放进派生表达式。连续变化的值可以手写一条使用 `var(--...)` 的规则并在目标元素绑定变量；自动改写属于后续编译优化。`raw()` 原样拼接字符串，浏览器按原生 CSS 处理值和层叠。两种值形态的测量与取舍见[性能方向复核](../.research/runtime-performance-review.md)。

Vue/Svelte 组件初始化、有限状态选择与连续值绑定的对照写法及 SSR 边界见[框架结合研究](../.research/vue-svelte-runtime-integration.md)。

## 手工 Node SSR 接入边界

目前提供底层请求宿主，还没有 Nuxt/SvelteKit 自动封装。Vue 服务器使用 `renderToString`，Svelte 服务器使用 `render`；两者都在渲染前创建宿主，并在 `withCssHost` 内执行整个渲染：

```ts
import { renderToString } from 'vue/server-renderer';
import { createServerCssHost, withCssHost } from '@zerodep-css/vue/server';

const host = createServerCssHost();
const html = await withCssHost(host, () => renderToString(app));
const cssText = host.cssText();
const rules = host.rules();
```

Svelte 的相同步骤使用 `render` 并取得 `body`：

```ts
import { render } from 'svelte/server';
import { createServerCssHost, withCssHost } from '@zerodep-css/svelte/server';

const host = createServerCssHost();
const { body } = withCssHost(host, () => render(Root));
const cssText = host.cssText();
const rules = host.rules();
```

每个 Node 请求创建自己的宿主和根部 `AppCss`，不能把它们放在模块级共享。浏览器 hydration 之前，把服务端的规则放在一个 `style[data-zerodep-css]` 元素中，再从适配包导入 `hydrateCss` 并调用 `hydrateCss(rules)`；它核对规则清单与样式文本并预热缓存，随后挂载或 hydrate 组件。服务端 HTML 中安全嵌入 CSS 与规则清单的序列化属于应用集成责任；当前原始 `raw()` 不做输入清理，不能把不可信数据直接拼进 HTML。

研究夹具的 Vue/Svelte 浏览器、并发 Node SSR、hydration 测试与[性能记录](../.research/minimum-usable-performance.md)提供了可运行的具体示例。缺少作者提供者或服务端活动宿主时会明确抛错。
