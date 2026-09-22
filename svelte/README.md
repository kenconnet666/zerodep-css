# Svelte 适配

自动绑定迁移已开始：没有旧 `bx` 导入时，编译插件可将原生模板直接 `css(s => { s.padding.px(8, gap); })` 中的动态单位值编译为原生 style 绑定。支持静态参数的嵌套结构和字面量可判定的 if/switch；未知控制流、派生类、脚本快照、组件透传和复杂表达式保留运行时行为。可证明稳定的样式第一次执行仍经过完整校验，后续由 runtime 有界缓存跳过重复构建和解析。完整迁移目标见[生产化计划](../.design/production-plan.md)。

显式 `bx` 编译通过 `@zerodep-css/svelte/compiler` 的 `bxPlugin()` 接入官方 Vite Svelte 插件，生成原生 style 绑定。安装示例、支持范围与定位诊断见 [bx 编译说明](../.design/bx-compiler.md)。

使用 Svelte 5 原生模板跟踪和 `$derived`，不导入 `svelte/internal`，不建立第二套 store。普通动态值重新计算并切换哈希 class；`bx` 通过独立 compiler 插件接入，范围见下文。

宿主创建应用/请求自己的 `createStyleContext`，通过根组件 props 传入：

```svelte
<!-- App.svelte -->
<script lang="ts">
  import { provideStyleContext, type StyleContext } from '@zerodep-css/svelte';
  import Panel from './Panel.svelte';
  let { context }: { context: StyleContext } = $props();
  // context 在该组件树生命周期内固定；更换上下文应重新挂载树。
  // svelte-ignore state_referenced_locally
  provideStyleContext(context);
</script>

<Panel />
```

子组件中获取一次 runtime：

```svelte
<script lang="ts">
  import { useGlobalCss, useStyleRuntime } from '@zerodep-css/svelte';
  const { css } = useStyleRuntime();
  let width = $state(120);
  let color = $state('red');
  const panelClass = $derived(
    css((s) => {
      s.width.px(width);
      s.color.raw(color);
    }),
  );
  useGlobalCss('page/background', (g) => {
    g.rule('body', (s) => s.backgroundColor.raw(color));
  });
</script>

<div
  class={css((s) => {
    s.display.flex;
    s.width.px(width);
  })}
></div>
<div class={panelClass}></div>
```

`useStyleRuntime(context?)` 在组件初始化时读取 context 并返回 runtime；之后 css 闭包不再查询 context。显式传入 context 可在组件外取得 runtime。适配器不再导出默认 css；组件使用初始化时取得的 css。core 的浏览器默认入口不读取组件 context，不能代替 SSR/自定义配置。

`const cls = css(...)` 只是一次计算；需要动态外部变量时使用 `$derived`。样式回调必须同步，不修改响应式状态。css 在派生读取时会同步注册规则，具有幂等注册副作用，不是纯函数；废弃计算产生的 class 也保留到 context.dispose，不承诺对中止渲染自动回收。

`useGlobalCss(key, factory, context?)` 在组件初始化时调用一次。客户端纯 `$derived` 构建定义，首次同步挂载，`$effect.pre` 更新原槽位，`onDestroy` 停止 effect root 并释放；返回 `{ id, dispose }` 允许提前停止。effect 只写 CSSOM，不写 Svelte 状态。SSR effect 不运行，所以走同步收集分支；服务端 onDestroy 不删除尚未输出的规则。

全局 key 在同一 context 的活跃挂载内必须唯一，列表组件使用带业务 ID 的稳定 key。删除组件不删除其他组件共享的 class/动画；应用宿主在 unmount 完成后 dispose 整个 context。

## SSR 与恢复

服务器每个请求创建 `createStyleContext({ target: null, namespace: 'app' })`，然后 `await render(App, { props: { context } })`（来自 svelte/server）。渲染完成后读取 context.renderStyles/renderManifest，并在 finally 中 dispose。将样式写进 head，manifest 写进 application/json script。

客户端先用相同 namespace/layers/nonce 等配置创建 `createStyleContext({ namespace: 'app', hydrate: manifest })`，再 `hydrate(App, { target, props: { context } })`。`await tick()` 后调用 `context.completeHydration()` 检查全局槽位均已认领。完整字符串 SSR 已验收；流式 SSR、异步 boundary 和 SvelteKit 专用插件没有验收，相关异步组件必须全部初始化后才能完成认领检查。

包由 svelte-package 输出，包含 `.svelte.js` rune 模块，消费者须经过 Svelte 官方编译链（通常由 Vite Svelte 插件处理）。测试使用官方 compile/compileModule 同时构建客户端和服务端，并实际测试 dist 入口。

本地验证：`pnpm check`、`pnpm test:browser:frameworks`。报告位于 `test-results/frameworks/results.json`；CI 运行完整语言服务和浏览器回归并上传报告。
