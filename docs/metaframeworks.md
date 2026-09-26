# Nuxt 4 与 SvelteKit 2 接入

五个包仍为 private 工作区包。先构建包产物，普通组件继续从 `@zerodep-css/vue` / `@zerodep-css/svelte` 使用原有 API；元框架包负责宿主生命周期，不重新导出一套作者 API。

本阶段验收 Nuxt 4.5.2、SvelteKit 2.70.3、Vue 3.5.43、Svelte 5.57.0，运行环境为 Node 24 和 Chromium。覆盖标准 Node SSR、客户端导航、静态预渲染页面及其恢复，包含[隐式多变量绑定](implicit-bindings.md)。

## Nuxt

在 `nuxt.config.ts` 注册模块：

```ts
export default defineNuxtConfig({
  modules: ['@zerodep-css/nuxt'],
});
```

应用仍自行定义 `createCssContext<AppCss>()` 并在根组件 `provideCss(new AppCss())`，使用方式见[组件示例](framework-examples.md)。模块不猜测用户的作者类或主题。

模块默认安装绑定转换；`modules: [['@zerodep-css/nuxt', { bindings: false }]]` 可以关闭。动态 nonce 从 `event.context.zerodepCssNonce` 读取，应用在前置服务器 middleware 中生成并设置匹配的 CSP 响应头。

模块注册两个插件：服务端为每个 Nuxt Vue 应用创建独立宿主，组件渲染结束后向 head 输出样式和 JSON 清单；客户端在组件创建前恢复清单。组件内同步调用和异步 setup 恢复上下文后的 `css()` 都使用当前应用宿主。脱离组件上下文的任意服务器任务不会自动获得这个宿主，手工 SSR 仍可使用 `withCssHost()`。

Vue `/server` 新增 `provideCssHost(app, host)`，用于由元框架掌握渲染调度的场景。它是应用级依赖注入，不调用全局 `AsyncLocalStorage.enterWith()`；原有请求路径继续可用。

可运行夹具：[Nuxt 配置](../nuxt/test/app/nuxt.config.ts)、[页面](../nuxt/test/app/app/pages/index.vue)。

## SvelteKit

先在 Vite 中启用转换，再配置宿主：

```ts
import cssBindings from '@zerodep-css/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
export default { plugins: [cssBindings(), sveltekit()] };
```

```ts
// src/hooks.server.ts
export { handle } from '@zerodep-css/sveltekit/server';
```

已有服务器 hook 时用 Kit 的 `sequence` 组合；[夹具](../sveltekit/test/app/src/hooks.server.ts)验证了组合后的自定义响应头仍然保留。需要 nonce 时，由前置 hook 设置 `event.locals.zerodepCssNonce` 和匹配的 CSP 响应头，再进入 CSS handle。

```ts
// src/hooks.client.ts
export { init } from '@zerodep-css/sveltekit';
```

已有客户端 `init` 时，在自己的初始化函数中先调用导入的 `init`，再执行其他初始化，不覆盖原有逻辑。

在 `src/app.html` 的 head 中放入固定标记：

```html
<head>
  %sveltekit.head% %zerodep-css%
</head>
```

CSS handle 在请求作用域内执行 `resolve()`，通过 `transformPageChunk` 缓冲 HTML 到渲染结束，再替换标记。显式标记避免依赖 HTML 字符串中某个 `</head>` 恰好是目标位置。JSON/API 响应不执行 HTML 替换。缺少标记时会明确报错。

首版使用完整 HTML 缓冲，不能保留流式首字节收益；不要把渲染结束后才继续产生 CSS 的延迟任务当作已支持的流式方案。普通同步组件、等待数据后渲染的页面、预渲染均已验证。

可运行夹具：[app.html](../sveltekit/test/app/src/app.html)、[页面](../sveltekit/test/app/src/routes/+page.svelte)。

## 恢复清单与安全输出

两个元框架共用 `serializeCssRules(rules)`，由 core `/server` 提供并经框架 `/server` 导出。返回的 `cssText` 用于 `style[data-zerodep-css]`，`manifest` 用于 `script[type="application/json"][data-zerodep-css]`。

- 样式输出处理 HTML style 结束标签边界，保留 CSS 转义后的值语义。
- JSON 中的 `<` 转成 Unicode 转义，不会变成可执行 script 标签。
- 无参数 `hydrateCss()` 读取、校验并消费清单；没有清单的纯客户端页面直接继续。原来的显式 `hydrateCss(rules)` 仍可使用。
- 已消费清单不会在后续导航时重复恢复；新组件按原注册器规则复用类名。
- 校验失败不占用文档宿主，修正清单后可以重试。

这解决 CSS 与清单嵌入 HTML 的边界，不代表 `raw()` 会过滤任意 CSS。请求独立 nonce 由 `/bindings-live` 夹具验收；Nuxt 禁止所有内联 style，Kit 仅为其自身的容器和播报节点添加固定内容的 CSP 哈希许可，库的绑定不使用内联 style。`/bindings` 验证静态部署。边缘运行环境、流式 SSR 尚未验收。

## 焦点验收

仓库根运行：

```powershell
pnpm build
node scripts/prepare-framework-fixtures.mjs
```

分别在 `nuxt/test/app` 和 `sveltekit/test/app` 构建真实应用：

```powershell
# 工作目录 nuxt/test/app
node ../../node_modules/nuxt/bin/nuxt.mjs build

# 工作目录 sveltekit/test/app
node ../../node_modules/vite/bin/vite.js build
```

回到仓库根运行：

```powershell
pnpm --dir .research/string-css-probe test:transport
pnpm --dir .research/string-css-probe test:metaframeworks
```

准备脚本只在夹具的 node_modules 中链接当前工作区包，路径按仓库位置计算，无需本机绝对路径配置。夹具通过真实 exports 消费 dist，不用源码 alias 绕过包入口。

验收启动自己的生产服务器，发起不同初值的并发请求，禁用 JavaScript 检查首屏，再启用客户端检查恢复、交互和无整页刷新导航。静态验收使用普通文件服务器，仅提供预渲染 HTML 与客户端资源，不运行 SSR。结束后自动关闭自己的进程、文件服务器和浏览器。

CI 在 Ubuntu 构建并执行这些集成用例；Windows / Ubuntu 都运行五包类型与基础检查。本机还执行了 Windows 元框架应用构建，不等同于所有部署环境的生产认证。
