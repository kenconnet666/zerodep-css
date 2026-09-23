# Vue 适配

`useTheme(definition, scope?)` 返回读取当前有效主题的函数，适用于图表等 JavaScript 消费者。在 setup 中调用一次，在模板、computed 或 effect 中调用返回函数以追踪原生响应式依赖：

```ts
import { computed } from 'vue';
import { useTheme } from '@zerodep-css/vue';
import { lightTheme } from '@zerodep-css/vue/themes';

const currentTheme = useTheme(lightTheme);
const chartColor = computed(() => currentTheme().color.primary);
```

默认读取当前组件已提供的主题，未提供时继承祖先；也可显式 `useTheme(theme, scope)` 选择作用域。无同名 provider 时返回传入预设默认值，同名不兼容 schema 报错。返回值深只读；`const snapshot = currentTheme()` 是调用时快照，不能代替 computed。该 API 不注册样式、不新建订阅，也不依赖 style context。

主题使用 `defineTheme` 的静态定义和 `provideTheme(theme, () => overrides)` 的原生 computed 覆盖。当前组件在 provideTheme 之后调用 `useStyleRuntime()` 即可使用，后代也自动继承。同组件可连续提供多个主题。显式 `useStyleRuntime({ context })` 只使用指定运行时；需要主题时同时传入 scope。

主题运行时的 css 返回可用于 class 属性的类名列表，其中包含有效主题变量类和内容类。放在模板或 computed 中会随主题变化更新；普通 const 字符串仍是调用时快照。子对象只覆盖指定字段，null/undefined 继承父值；显式传入 theme.defaults 可恢复预设默认值。主题类附在样式元素上，因此 Vue Teleport 后仍保持逻辑组件作用域的主题。provider 不销毁共享 context，应用/请求宿主负责最终 dispose。

编译插件接在框架官方 Vite 插件之前；自动值绑定、静态准备、严格 CSP 和运行时回退的完整边界统一见 [编译说明](../docs/compiler.md)。

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
- `provideStyleContext(context)` 用于 setup 中覆盖后代上下文；Vue inject 不读取本组件刚 provide 的值，本组件可用 `useStyleRuntime({ context })` 显式取得它。显式参数也适用于组件外调用。
- `useGlobalCss(key, factory, context?)` 要求活跃 setup/effect scope，返回 `{ id, dispose }`。客户端用 computed + watch，在 pre 阶段更新原槽位，scope 结束或手动 dispose 时停止监听并释放。SSR 只同步执行一次并保留到请求输出。
- 同一 context 内同时挂载的全局 key 必须唯一；列表组件使用带业务 ID 的稳定 key，并保持服务端和客户端一致。不能在模板中反复调用 useGlobalCss。
- 适配器不再导出默认 `css`。组件使用 `useStyleRuntime()` 返回的 css；纯浏览器默认实例便捷入口只从 core 导入，不能代替请求/应用上下文。

## SSR 与恢复

服务器每个请求创建 `createStyleContext({ target: null, namespace: 'app' })`；创建 `createSSRApp(App)` 并 install；`await renderToString(app)` 后读取 `context.renderStyles()`、`context.renderManifest()`。在 finally 中 dispose。将样式放进 head，manifest 放进 application/json script。失败请求同样释放，不使用模块级可变上下文。

浏览器先读取 manifest，调用 `createStyleContext({ namespace: 'app', hydrate: manifest })`，再 install 到 `createSSRApp(App)` 并 mount。`await nextTick()` 后调用 `context.completeHydration()`。nonce、layers、layer 等配置须与服务端保持一致。

只有全局槽位需要 key；普通类名由内容哈希决定。完整字符串 SSR 已有真实组件验收；流式 SSR、Suspense 中尚未恢复的异步子树和 Nuxt 专用插件没有验收，completeHydration 必须等所有相关组件实际初始化后调用。

本地验证：`pnpm check`、`pnpm test:unit`、`pnpm test:browser:frameworks`。完整 LSP 补全/错误夹具和 core 浏览器回归也在 CI 中执行。

## 一次选择作者类与作用域

`const { css } = useStyleRuntime({ cssType: AppCss })` 在初始化时选择作者类，后续 `css(s => { ... })` 自动推断它的自定义成员和嵌套类型。也可以传 `{ context, theme: scope, cssType: AppCss }`；选项只读取一次，修改选项对象不会切换已创建的视图。运行时依旧由宿主拥有，视图不新建样式表。

不指定 cssType 时使用系统 Css；AppCss 可以直接继承 Css 自建主题，也可以继承 `/themes` 的 ThemeCss 保留内置主题后继续扩展。单次仍可用 `css(factory, OtherCss)` 覆盖类型。普通 JS 函数负责样式复用，if/switch 负责条件；focus/focusWithin/active/disabled 提供常用状态快捷写法。

先 provideTheme 再取得 css/useTheme，当前组件即可使用该主题。先前取得的读取函数或视图不追溯切换作用域。显式 context 保留隔离语义，需要主题时同时传 theme。初始化统一使用选项对象；迁移见 [精简说明](../docs/migration.md)。

自定义作者类和无法证明初始化类型的调用保留运行时行为；标准类使用 `useStyleRuntime()` 或 `useStyleRuntime({ context })` 等明确选项对象时仍可自动优化。
