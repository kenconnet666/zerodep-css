# Nuxt / SvelteKit 接入研究

2026-09-24，P5 的只读前置研究。尚未实现、尚未通过真实项目原型，不能作为支持完成的证据。首版目标为 Nuxt 4、SvelteKit 2、Node 服务端及静态预渲染，完整字符串 SSR。

## Nuxt

4.5.2 服务端每次创建 Nuxt/Vue 应用并执行插件。模块可通过 addPlugin 安装项目样式入口；实际 runtime 归该应用／请求持有，不进入共享模块或 payload。对应版本渲染器在 renderToString 后调用 app:rendered，再生成 SSR head，因此可在该钩子收集完整 CSS 后加入 head。

成功、app:error、app:redirected 路径均需幂等释放。客户端插件须在挂载前恢复 SSR 样式，完成 hydration 后检查认领；app:suspense:resolve 的具体时机需原型验证。不能把实验 ssrStreaming 路径套用同一输出时序，首版需要明确检测并要求完整渲染模式。

来源：[模块注册](https://nuxt.com/docs/4.x/guide/modules/recipes-basics)、[应用入口](https://github.com/nuxt/nuxt/blob/v4.5.2/packages/nuxt/src/app/entry.ts)、[渲染器](https://github.com/nuxt/nuxt/blob/v4.5.2/packages/nitro-server/src/runtime/handlers/renderer.ts)、[实验特性](https://nuxt.com/docs/4.x/guide/going-further/experimental-features)。

## SvelteKit

handle 能创建请求 runtime，event.locals 可传到服务端 load/endpoint，但不能把 runtime 放进 load 返回数据，因为它们需要序列化。候选是在 Node handle 内通过 AsyncLocalStorage 为 resolve 建立请求作用域，再由 server/browser 条件入口让根布局取得对应实例并同步 setContext。ALS 容器可以是模块级，存入的 runtime 必须逐请求创建。

关键原型：两个导出入口不能因分别打包而生成两份 ALS 实例；SSR/client 条件解析在 dev、build、prerender 和 tarball 安装下都必须一致，客户端产物不能包含 node:async_hooks。不依赖组件直接调用 $app/server.getRequestEvent，因为公开合同没有承诺这个调用位置。

transformPageChunk 允许多个且不保证完整的 HTML 块。完整渲染模式可缓冲到 done 后注入 CSS，但必须验证取消、失败、重定向、非 HTML 响应以及 resolve 返回时是否已经完成消费，不能过早 dispose。SPA 导航复用客户端根 runtime，组件自动释放其全局样式。

Kit 的 CSP 可能在 transformPageChunk 前计算；事后插入内联 style 不会自动加入其 hash/nonce。需要设计并实测与框架 nonce/CSP 配置的协作，不能只断言 HTML 中出现了 CSS。

来源：[Hooks](https://svelte.dev/docs/kit/hooks)、[load](https://svelte.dev/docs/kit/load)、[服务端模块](https://svelte.dev/docs/kit/server-only-modules)、[页面渲染源码](https://github.com/sveltejs/kit/blob/%40sveltejs/kit%402.70.3/packages/kit/src/runtime/server/page/render.js)、[Vite SSR 条件](https://vite.dev/config/ssr-options)。
