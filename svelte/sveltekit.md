# zerodep-css-svelte/sveltekit

SvelteKit 2 的 Node SSR、样式恢复和预渲染接入。要求 Node 24+；组件作者 API 来自 zerodep-css-svelte。

```sh
pnpm add zerodep-css-svelte
```

```ts
// src/hooks.server.ts
export { handle } from 'zerodep-css-svelte/sveltekit/server';
// src/hooks.client.ts
export { init } from 'zerodep-css-svelte/sveltekit';
```

在 src/app.html 的 head 内加入 `%zerodep-css%`。已有 handle 时使用 Kit 的 sequence 组合；已有 init 时先调用导入的 CSS init。

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import cssBindings from 'zerodep-css-svelte/vite';
export default defineConfig({ plugins: [cssBindings(), sveltekit()] });
```

项目仍自行创建作者上下文并提供实例。动态 nonce 使用 event.locals.zerodepCssNonce；严格 CSP 可关闭元素内联变量。当前支持 Node SSR 和静态预渲染；流式 SSR、边缘部署尚未验收。

[完整接入与 CSP](https://github.com/kenconnet666/zerodep-css/blob/main/docs/metaframeworks.md) · [组件用法](https://github.com/kenconnet666/zerodep-css/blob/main/docs/getting-started.md)
