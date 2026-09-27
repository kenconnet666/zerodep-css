# zerodep-css-nuxt

Nuxt 4 的 Node SSR、样式恢复和预渲染接入。要求 Node 24+；组件作者 API 来自 zerodep-css-vue。

```sh
pnpm add zerodep-css-nuxt zerodep-css-vue
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({ modules: ['zerodep-css-nuxt'] });
```

模块默认安装 bx 插件，按请求创建宿主并在客户端恢复样式。项目仍需通过 createCssContext 定义自己的作者类型并在根组件提供实例。

可设置 `modules: [['zerodep-css-nuxt', { inlineBindings: false }]]` 以使用适合严格 CSP 的样式表变量路径；`bindings: false` 关闭编译转换。

动态 nonce 使用 event.context.zerodepCssNonce，应用自行设置匹配的 CSP 响应头。当前支持 Node SSR 和静态预渲染；流式 SSR、边缘部署尚未验收。

[完整接入与 CSP](https://github.com/kenconnet666/zerodep-css/blob/main/docs/metaframeworks.md) · [组件用法](https://github.com/kenconnet666/zerodep-css/blob/main/docs/getting-started.md)
