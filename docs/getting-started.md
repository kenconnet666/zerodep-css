# Vue 与 Svelte 开始使用

Vue 项目安装 `zerodep-css-vue`，Svelte 项目安装 `zerodep-css-svelte`；Node 构建/SSR 要求 24+，产物为 ESM。浏览器构建使用主入口的默认 DOM 实现，Node SSR 按 `node` 条件使用请求宿主。Nuxt/SvelteKit 已有[专用接入](metaframeworks.md)，[bx 绑定](bindings.md)、[全局规则与动画](author-api.md)、CSP/nonce 均已提供，支持边界见对应文档。

当前候选为 0.3.1，请安装 `zerodep-css-vue@0.3.1` 或 `zerodep-css-svelte@0.3.1`；元框架包同样使用 0.3.1。next 已更新，latest 保持原值，未指定版本的安装不保证获得本页对应的新候选。

主题值可以由 SystemKeywords 派生，通过 new Css(theme) 注入；需要跟踪主题替换时由 Provider 使用 new Css(() => currentTheme)。后代仍然只读取 useCss()，详见 [注入关键字](keyword-injection.md)。

## 作者类型与组件

Vue 项目从 `zerodep-css-vue`、Svelte 项目从 `zerodep-css-svelte` 导入相同名字的 `Css`、`WidthCss`、`createCssContext` 和 `css`。选择器直接使用 `s._hover` / `s._selector`。项目模块只创建类型化上下文，实际作者实例由根组件提供：

```ts
import { Css, WidthCss, createCssContext } from 'zerodep-css-vue';

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

`css(s.width.px(width))` 可直接放在 Vue/Svelte 模板表达式中。不开启转换时按值生成并缓存类；启用[bx 绑定插件](bindings.md)后，只有显式 bx(value) 使用 CSS 变量，常量也会转换。有限取值仍可预注册类表，通过 Vue `computed` 或 Svelte `$derived` 选择类名。`css(baseClass, active && s.color.red, [s.padding.px(8)])` 统一处理声明和已登记类的组合，始终返回一个样式类名；外部 class 和独立标记交给模板组合。`raw()` 原样拼接字符串，浏览器按原生 CSS 处理值和层叠。

## 包入口与示例

| 入口                                     | 用途                                                              |
| ---------------------------------------- | ----------------------------------------------------------------- |
| `zerodep-css-vue` / `zerodep-css-svelte` | 组件统一入口，按 Node 条件选择服务器实现，其余构建使用 DOM 实现   |
| 对应适配包的 `/server`                   | 手工 Node SSR；暴露请求宿主、序列化等服务器能力                   |
| 对应适配包的 `/vite`                     | bx 与模板优化的构建插件                                           |
| `zerodep-css`                            | 框架无关的作者类与类型；适配器从 `/browser` 或 `/server` 选择宿主 |
| `zerodep-css/theme`                      | 可选 ThemeCss、主题属性类与 themes.light/dark                     |

`zerodep-css-compiler` 和适配包的 `/bindings` 是编译器内部协议，业务组件不直接调用。运行时不引入 TypeScript 编译器。Nuxt/Kit 包只提供元框架接入，不重复导出作者 API；配置见[元框架文档](metaframeworks.md)。

| 示例               | Vue                                                                          | Svelte                                                                                   |
| ------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 上下文、作者实例   | [App.vue](../vue/examples/App.vue)、[context.ts](../vue/examples/context.ts) | [App.svelte](../svelte/examples/App.svelte)、[context.ts](../svelte/examples/context.ts) |
| 声明、选择器与条件 | [Styles.vue](../vue/examples/Styles.vue)                                     | [Styles.svelte](../svelte/examples/Styles.svelte)                                        |
| 预设主题与局部覆盖 | [Theme.vue](../vue/examples/Theme.vue)                                       | [Theme.svelte](../svelte/examples/Theme.svelte)                                          |

这些组件就是 CI 使用的输入，不在文档复制另一份实现。静态样式在 setup 创建；动态结构用模板、computed/$derived 或普通函数；连续值优先 bx。适配器支持在派生求值中登记 CSS，但全局块更新和其他业务副作用不应放入派生 getter。模块顶层保留作者类型、上下文和纯声明字符串，SSR 的完整类名在活动请求宿主内创建。

## 手工 Node SSR 接入边界

以下用于不经过元框架的手工 SSR。Vue 服务器使用 `renderToString`，Svelte 服务器使用 `render`；两者都在渲染前创建宿主，并在 `withCssHost` 内执行整个渲染：

```ts
import { renderToString } from 'vue/server-renderer';
import { createServerCssHost, withCssHost } from 'zerodep-css-vue/server';

const host = createServerCssHost();
const html = await withCssHost(host, () => renderToString(app));
const cssText = host.cssText();
const rules = host.rules();
```

Svelte 的相同步骤使用 `render` 并取得 `body`：

```ts
import { render } from 'svelte/server';
import { createServerCssHost, withCssHost } from 'zerodep-css-svelte/server';

const host = createServerCssHost();
const body = withCssHost(host, () => render(Root).body);
const cssText = host.cssText();
const rules = host.rules();
```

每个 Node 请求创建自己的宿主和根部 `AppCss`，不能把它们放在模块级共享。浏览器 hydration 之前，把服务端的规则放在 `style[data-zerodep-css]` 元素中，再调用 `hydrateCss(rules)`，随后挂载或 hydrate 组件。嵌入 HTML 时使用 `/server` 的 `serializeCssRules(rules)` 输出样式和 JSON 清单；自动读取清单的方式见[元框架接入](metaframeworks.md)。原始 `raw()` 不过滤任意 CSS。

缺少作者提供者或服务端活动宿主时会明确抛错。浏览器、并发 Node SSR 和 hydration 用例由 [test/tools](../test/tools/README.md) 组织，完整运行交 CI；当前数据见[性能与验收](performance.md)。
