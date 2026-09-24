# @zerodep-css/sveltekit（Node 与静态接入）

这是 SvelteKit 2.70.3、Svelte 5、Node 24 的私有薄适配。它沿用 `@zerodep-css/svelte` 的 `createStyles()` 与 `StyleHost`，不增加新的 CSS 作者 API。一个请求有一个当前渲染尝试的宿主；浏览器有一个跨客户端导航与 HMR 复用的应用宿主。首版面向 Node 完整 HTML 服务端渲染和静态预渲染，Kit 的延迟数据流仍由框架处理。

Kit 2.70.3 自身仍依赖带有[低危 cookie 参数校验公告](https://github.com/advisories/GHSA-pxg6-pf52-xh8x)的 cookie 0.6。仓库和独立验收应用都使用下面的有界修补；应用采用该 Kit 版本时也应在自己的 `pnpm-workspace.yaml` 中配置，因为库的开发工作区 override 不会随包自动传播：

```yaml
overrides:
  '@sveltejs/kit>cookie@<0.7.0': 0.7.2
```

正常 cookie 的 parse/serialize API 保持一致，非法 name/path/domain 会按修补后的校验抛错。升级到已修正上游依赖的 Kit 版本后可重新审阅这一覆盖。

在 `src/app.html` 的真实 `<head>` 内放一个且仅一个专属标记，推荐紧随 Kit 的 head 占位符：

```html
<head>
  %sveltekit.head%
  <!--zerodep-css:head-->
</head>
```

`src/hooks.server.ts` 安装请求 hook：

```ts
import { createStyleHandle } from '@zerodep-css/sveltekit/server';

export const handle = createStyleHandle();
```

根 `src/routes/+layout.svelte` 的组件脚本顶层最先安装宿主，每棵根组件树只调用一次：

```svelte
<script lang="ts">
  import { provideStyles } from '@zerodep-css/sveltekit';
  provideStyles();
  let { children } = $props();
</script>

{@render children()}
```

业务仍从自己的 `styles.ts` 导出 `createStyles({ cssType?, theme? })` 的 project hooks，在组件内调用 `styles.useCss()`、`styles.provideTheme()` 等。根 `provideStyles()` 不需要重复传作者配置。项目预设主题由自身 hooks 在共享 host 上解析。

`createStyleHandle({ host })` 可以传 `namespace`、`layers`、`layer` 等宿主选项。服务端始终强制 `target:null`；浏览器从安全 JSON manifest 恢复配置和有序记录，并在首次 mount 后执行 `completeHydration()`。原始服务器 manifest 与样式标签都来自现有 Svelte host；标记注入只发生在 Kit 页面 HTML 的 `transformPageChunk` 完成时，endpoint、数据响应、redirect 不注入。Kit 2.70.3 先等待根 SSR 组件渲染完成，再进行 HTML transform；随后发出的 deferred chunks 仅序列化数据，不重新渲染组件。因此 hook 在 resolve 返回后释放宿主，原样保留 Response 与 Kit 的数据流/取消机制；不额外读取整个 body。静态预渲染由同一 `handle` 路径生成 HTML，组件 HTML 流式输出仍不在首版范围。

SSR 根布局重新渲染时（包括 Kit 的 `error(4xx)` 回退），`provideStyles()` 会释放上一次尝试的 host，再创建新 host；失败组件树中的全局样式不会进入错误页。错误页必须使用同一根布局。把 `provideStyles()` 放在根布局顶层、任何样式消费者之前。若同一组件树的后代再次调用，会抛错。应用自己在 Svelte 边界中捕获错误并继续渲染的情况不构成新的 Kit 根渲染尝试，仍遵循同一 host 的正常组件生命周期。

严格 CSP 需要由应用提供明确的 nonce 策略，例如：

```ts
export const handle = createStyleHandle({
  nonce: (event) => event.locals.styleNonce,
});
```

应用须自行把同一 nonce 加入响应的 `style-src`（以及如有需要的 `script-src`）策略。Kit 在 `transformPageChunk` 之前已生成自己的 CSP header 或预渲染 meta；本适配不能读取 Kit 的私有 nonce，也不会自动加入动态样式的 hash。hash-only 的内联样式策略和每请求 nonce 均不适用于无外部策略配合的静态预渲染。HTML 标记是显式模板合同，首版不解析或猜测任意 HTML 中的 `</head>`。浏览器入口通过条件导出选择 `client.js`，不会引用 `node:async_hooks`；Node SSR 入口选择 `server-provider.js`。

与其他 `handle` hook 组合时，使用 Kit 官方 `sequence`，并确保本 hook 的 `transformPageChunk` 仍能看到唯一标记。`pnpm test:sveltekit` 通过独立 tarball 应用验证 Node/静态构建、SSR/异步 hydration、导航、错误隔离与 HMR；最新完成状态见[验证记录](../docs/validation.md)，阶段背景见[实施记录](../docs/production.md)。
