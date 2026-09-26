# Vue 与 Svelte 最小用法

五个包仍是工作区 private 包。先运行 `pnpm install --frozen-lockfile` 与 `pnpm build`；浏览器构建使用主入口的默认 DOM 实现，Node SSR 按 `node` 条件使用请求宿主。Nuxt/SvelteKit 已有[专用接入](metaframeworks.md)，[隐式绑定](implicit-bindings.md)、[全局规则与动画](author-api.md)、CSP/nonce 均已提供，支持边界见对应文档。

## 作者类型与组件

Vue 项目从 `@zerodep-css/vue`、Svelte 项目从 `@zerodep-css/svelte` 导入相同名字的 `Css`、`WidthCss`、`createCssContext` 和 `css`。选择器直接使用 `s._hover` / `s._selector`。项目模块只创建类型化上下文，实际作者实例由根组件提供：

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
const className = css(s.display.flex, s.width._md, s._hover(s.color.red));
```

`css(s.width.px(width))` 可直接放在 Vue/Svelte 模板表达式中。不开启转换时按值生成并缓存类；启用[隐式绑定插件](implicit-bindings.md)后，可识别的动态值使用 CSS 变量。有限取值仍可预注册类表，通过 Vue `computed` 或 Svelte `$derived` 选择类名。`css(baseClass, active && s.color.red, [s.padding.px(8)])` 统一处理声明和已登记类的组合，始终返回一个样式类名；外部 class 和独立标记交给模板组合。`raw()` 原样拼接字符串，浏览器按原生 CSS 处理值和层叠。

Vue/Svelte 组件初始化、有限状态选择与连续值绑定的对照写法及 SSR 边界见[框架结合研究](../.research/vue-svelte-runtime-integration.md)。

可直接阅读和测试的组件位于[框架用法示例](framework-examples.md)，测试与文档引用同一份 Vue/Svelte 组件。

## 手工 Node SSR 接入边界

以下用于不经过元框架的手工 SSR。Vue 服务器使用 `renderToString`，Svelte 服务器使用 `render`；两者都在渲染前创建宿主，并在 `withCssHost` 内执行整个渲染：

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
const body = withCssHost(host, () => render(Root).body);
const cssText = host.cssText();
const rules = host.rules();
```

每个 Node 请求创建自己的宿主和根部 `AppCss`，不能把它们放在模块级共享。浏览器 hydration 之前，把服务端的规则放在 `style[data-zerodep-css]` 元素中，再调用 `hydrateCss(rules)`，随后挂载或 hydrate 组件。嵌入 HTML 时使用 `/server` 的 `serializeCssRules(rules)` 输出样式和 JSON 清单；自动读取清单的方式见[元框架接入](metaframeworks.md)。原始 `raw()` 不过滤任意 CSS。

研究夹具的 Vue/Svelte 浏览器、并发 Node SSR、hydration 测试与[性能记录](../.research/minimum-usable-performance.md)提供了可运行的具体示例。缺少作者提供者或服务端活动宿主时会明确抛错。
