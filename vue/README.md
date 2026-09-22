# Vue 适配

自动绑定迁移已开始：没有旧 `bx` 导入时，编译插件可将原生模板直接 `css(s => { s.padding.px(8, gap); })` 中的动态单位值编译为元素 CSS 变量。支持静态参数的嵌套结构和字面量可判定的 if/switch；未知控制流、派生类、脚本快照、组件透传和复杂表达式保留运行时行为。可证明稳定的样式第一次执行仍经过完整校验，后续由 runtime 有界缓存跳过重复构建和解析。完整迁移目标见[生产化计划](../.design/production-plan.md)。

显式 `bx` 编译通过 `@zerodep-css/vue/compiler` 的 `bxPlugin()` 接入官方 Vite Vue 插件。支持内联及同组件脚本 class、单位/多绑定、完整字符串 SSR 和 hydration。安装示例、支持范围与定位诊断见 [bx 编译说明](../.design/bx-compiler.md)。

`css(factory): string` 保持同步字符串返回；普通值依赖 Vue 原生 render/computed 跟踪。属性写法与 core 完全相同，`token` 严格字面量、`raw` 允许字符串，属性对象不能直接调用。

应用启动时安装一个上下文：

```ts
import { createApp } from 'vue';
import { createStyleContext, installStyleContext } from '@zerodep-css/vue';
import App from './App.vue';

const context = createStyleContext({ namespace: 'app' });
const app = createApp(App);
installStyleContext(app, context);
app.mount('#app');
// 宿主结束应用时：app.unmount(); context.dispose();
```

组件中初始化一次，之后模板与 computed 共用这个 css：

```vue
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGlobalCss, useStyleRuntime } from '@zerodep-css/vue';

const { css } = useStyleRuntime();
const width = ref(120);
const color = ref('red');
const panelClass = computed(() =>
  css((s) => {
    s.width.px(width.value);
    s.color.raw(color.value);
  }),
);

useGlobalCss('page/background', (g) => {
  g.rule('body', (s) => s.backgroundColor.raw(color.value));
});
</script>

<template>
  <div
    :class="
      css((s) => {
        s.display.flex;
        s.width.px(width);
      })
    "
  ></div>
  <div :class="panelClass"></div>
</template>
```

- 模板里的调用可以随组件其他依赖更新再次执行；computed 按自己的依赖缓存。`const cls = css(...)` 是一次计算，不会自动变化。
- css 会同步确保样式注册，是带幂等注册副作用的计算，不是纯函数；不应在回调中修改响应式状态或启动异步任务。
- `provideStyleContext(context)` 用于 setup 中覆盖后代上下文；Vue inject 不读取本组件刚 provide 的值，本组件可用 `useStyleRuntime(context)` 显式取得它。显式参数也适用于组件外调用。
- `useGlobalCss(key, factory, context?)` 要求活跃 setup/effect scope，返回 `{ id, dispose }`。客户端用 computed + watch，在 pre 阶段更新原槽位，scope 结束或手动 dispose 时停止监听并释放。SSR 只同步执行一次并保留到请求输出。
- 同一 context 内同时挂载的全局 key 必须唯一；列表组件使用带业务 ID 的稳定 key，并保持服务端和客户端一致。不能在模板中反复调用 useGlobalCss。
- 适配器不再导出默认 `css`。组件使用 `useStyleRuntime()` 返回的 css；纯浏览器默认实例便捷入口只从 core 导入，不能代替请求/应用上下文。

## SSR 与恢复

服务器每个请求创建 `createStyleContext({ target: null, namespace: 'app' })`；创建 `createSSRApp(App)` 并 install；`await renderToString(app)` 后读取 `context.renderStyles()`、`context.renderManifest()`。在 finally 中 dispose。将样式放进 head，manifest 放进 application/json script。失败请求同样释放，不使用模块级可变上下文。

浏览器先读取 manifest，调用 `createStyleContext({ namespace: 'app', hydrate: manifest })`，再 install 到 `createSSRApp(App)` 并 mount。`await nextTick()` 后调用 `context.completeHydration()`。nonce、layers、layer 等配置须与服务端保持一致。

只有全局槽位需要 key；普通类名由内容哈希决定。完整字符串 SSR 已有真实组件验收；流式 SSR、Suspense 中尚未恢复的异步子树和 Nuxt 专用插件没有验收，completeHydration 必须等所有相关组件实际初始化后调用。

本地验证：`pnpm check`、`pnpm test:unit`、`pnpm test:browser:frameworks`。完整 LSP 补全/错误夹具和 core 浏览器回归也在 CI 中执行。
