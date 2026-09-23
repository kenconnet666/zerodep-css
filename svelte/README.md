# Svelte 适配

`useTheme(definition, scope?)` 返回读取当前有效主题的函数，适用于图表等 JavaScript 消费者。组件初始化时获取函数，在模板或 `$derived` 中调用以追踪原生依赖：

```svelte
<script lang="ts">
  import { useTheme } from '@zerodep-css/svelte';
  import { lightTheme } from '@zerodep-css/svelte/themes';

  const currentTheme = useTheme(lightTheme);
  const chartColor = $derived(currentTheme().color.primary);
</script>
```

默认捕获当前组件 context 中的逻辑作用域，也可显式传入 `useTheme(theme, scope)`。无同名 provider 时返回传入预设默认值，同名不兼容 schema 报错。返回值深只读；普通 `const snapshot = currentTheme()` 是调用时快照。读取函数可以在初始化后继续调用，不会再次访问 context；不注册样式、不新建 store，也不依赖 style context。

主题使用 `defineTheme` 的静态定义和 `provideTheme(theme, () => overrides)` 的原生 rune 覆盖。当前组件在 provideTheme 之后调用 `useStyleRuntime()` 即可使用，后代也自动继承。显式 `useStyleRuntime({ context })` 只使用指定运行时；需要主题时同时传入 scope。

主题运行时的 css 返回可用于 class 属性的类名列表，其中包含有效主题变量类和内容类。放在模板或 $derived 中会随主题变化更新；普通 const 字符串仍是调用时快照。子对象只覆盖指定字段，null 恢复当前预设默认值。主题类附在样式元素上，移动 DOM 后仍保持逻辑组件作用域的主题。provider 不销毁共享 context，应用/请求宿主负责最终 dispose。

编译插件接在框架官方 Vite 插件之前；自动值绑定、静态准备、严格 CSP 和运行时回退的完整边界统一见 [编译说明](../docs/compiler.md)。

使用 Svelte 5 原生模板跟踪和 `$derived`，不导入 `svelte/internal`，不建立第二套 store。可安全分离的动态值使用原生 style 绑定；复杂回调继续原生重算并切换哈希 class。

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

`useStyleRuntime(options?)` 在组件初始化时读取 context 并返回 runtime；之后 css 闭包不再查询 context。显式传入 context 可在组件外取得 runtime。适配器不再导出默认 css；组件使用初始化时取得的 css。core 的浏览器默认入口不读取组件 context，不能代替 SSR/自定义配置。

`const cls = css(...)` 只是一次计算；需要动态外部变量时使用 `$derived`。样式回调必须同步，不修改响应式状态。css 在派生读取时会同步注册规则，具有幂等注册副作用，不是纯函数；废弃计算产生的 class 也保留到 context.dispose，不承诺对中止渲染自动回收。

`useGlobalCss(key, factory, context?)` 在组件初始化时调用一次。客户端纯 `$derived` 构建定义，首次同步挂载，`$effect.pre` 更新原槽位，`onDestroy` 停止 effect root 并释放；返回 `{ id, dispose }` 允许提前停止。effect 只写 CSSOM，不写 Svelte 状态。SSR effect 不运行，所以走同步收集分支；服务端 onDestroy 不删除尚未输出的规则。

全局 key 在同一 context 的活跃挂载内必须唯一，列表组件使用带业务 ID 的稳定 key。删除组件不删除其他组件共享的 class/动画；应用宿主在 unmount 完成后 dispose 整个 context。

## SSR 与恢复

服务器每个请求创建 `createStyleContext({ target: null, namespace: 'app' })`，然后 `await render(App, { props: { context } })`（来自 svelte/server）。渲染完成后读取 context.renderStyles/renderManifest，并在 finally 中 dispose。将样式写进 head，manifest 写进 application/json script。

客户端先用相同 namespace/layers/nonce 等配置创建 `createStyleContext({ namespace: 'app', hydrate: manifest })`，再 `hydrate(App, { target, props: { context } })`。`await tick()` 后调用 `context.completeHydration()` 检查全局槽位均已认领。完整字符串 SSR 已验收；流式 SSR、异步 boundary 和 SvelteKit 专用插件没有验收，相关异步组件必须全部初始化后才能完成认领检查。

包由 svelte-package 输出，包含 `.svelte.js` rune 模块，消费者须经过 Svelte 官方编译链（通常由 Vite Svelte 插件处理）。测试使用官方 compile/compileModule 同时构建客户端和服务端，并实际测试 dist 入口。

本地验证：`pnpm check`、`pnpm test:browser:frameworks`。报告位于 `test-results/frameworks/results.json`；CI 运行完整语言服务和浏览器回归并上传报告。

## 一次选择作者类与作用域

`const { css } = useStyleRuntime({ cssType: AppCss })` 在初始化时选择作者类，后续 `css(s => { ... })` 自动推断它的自定义成员和嵌套类型。也可以传 `{ context, theme: scope, cssType: AppCss }`；选项只读取一次，修改选项对象不会切换已创建的视图。运行时依旧由宿主拥有，视图不新建样式表。

不指定 cssType 时使用系统 Css；AppCss 可以直接继承 Css 自建主题，也可以继承 `/themes` 的 ThemeCss 保留内置主题后继续扩展。单次仍可用 `css(factory, OtherCss)` 覆盖类型。普通 JS 函数负责样式复用，if/switch 负责条件；focus/focusWithin/active/disabled 提供常用状态快捷写法。

先 provideTheme 再取得 css/useTheme，当前组件即可使用该主题。先前取得的读取函数或视图不追溯切换作用域。显式 context 保留隔离语义，需要主题时同时传 theme。初始化统一使用选项对象；迁移见 [精简说明](../docs/migration.md)。

自定义作者类和无法证明初始化类型的调用保留运行时行为；标准类使用 `useStyleRuntime()` 或 `useStyleRuntime({ context })` 等明确选项对象时仍可自动优化。
