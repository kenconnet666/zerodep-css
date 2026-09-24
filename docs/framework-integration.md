# 元框架接入依据

当前接入步骤见 [Nuxt](../nuxt/README.md) 与 [SvelteKit](../sveltekit/README.md)，验收状态见 [实施记录](production.md)。本文记录 2026-09-24 对固定版本源码的核对，替代实现前的候选方案；不能将它推广为其他版本的生命周期保证。

## Nuxt 4.5.2

服务端每次创建 Vue/Nuxt 应用，模块通过早期 app 插件安装请求宿主。完整组件渲染之后依次执行 app:rendered、head 构造、Nitro render:html；在最后一步收集，允许其他 app:rendered 钩子继续工作。重定向、响应错误和连接关闭均有释放兜底，app:error 可能早于错误页渲染，因此不能直接在它上面提前关闭宿主。来源：[应用入口](https://github.com/nuxt/nuxt/blob/v4.5.2/packages/nuxt/src/app/entry.ts)、[渲染器](https://github.com/nuxt/nuxt/blob/v4.5.2/packages/nitro-server/src/runtime/handlers/renderer.ts)。

客户端挂载前恢复，首次根 Suspense resolve 后检查认领。Nuxt 的根 App 脚本热替换会先初始化新分支、后卸载旧分支；根动态全局样式采用 README 中的客户端 hot.data 交接，遵循卸载再挂载语义。模板仅重绘时没有新 setup，不能无条件通过 hot.dispose 删除租约。来源：[Vue Suspense](https://github.com/vuejs/core/blob/v3.5.43/packages/runtime-core/src/components/Suspense.ts)、[Vite HMR data](https://vite.dev/guide/api-hmr)。

## SvelteKit 2.70.3

Node hook 通过 AsyncLocalStorage 保存请求宿主，根布局调用 provideStyles；条件导出保证浏览器入口不引用 Node 上下文。两个入口在真实独立构建中必须共享同一 ALS 模块，runtime 不放入 load 返回数据。

Kit 在 HTML transform 前已 await 完整根组件渲染；后续 deferred chunks 是数据序列化脚本，不继续渲染组件。因此收集后直接返回原 Response，在 resolve 的 finally 释放宿主；额外缓存整个响应体会无谓延长样式资源生命周期。来源：[页面渲染](https://github.com/sveltejs/kit/blob/%40sveltejs/kit%402.70.3/packages/kit/src/runtime/server/page/render.js)、[数据序列化](https://github.com/sveltejs/kit/blob/%40sveltejs/kit%402.70.3/packages/kit/src/runtime/server/page/data_serializer.js)。

SSR 普通异常和 HTTP 错误都可能重渲染根布局，但 HttpError 不调用用户 handleError。通过新根初始化更换宿主，才能覆盖两条错误路径，避免失败树的全局样式进入错误页。来源：[错误页](https://github.com/sveltejs/kit/blob/%40sveltejs/kit%402.70.3/packages/kit/src/runtime/server/page/respond_with_error.js)、[错误处理](https://github.com/sveltejs/kit/blob/%40sveltejs/kit%402.70.3/packages/kit/src/runtime/server/utils.js)。

Kit 在 transform 前已生成自己的 CSP header/meta，适配器后注入的样式不会自动获得其 hash 或 nonce。采用显式应用 nonce，并由应用配置对应策略；静态 hash-only 策略不能授权后续动态样式。来源：[CSP 配置](https://svelte.dev/docs/kit/configuration#csp)。
