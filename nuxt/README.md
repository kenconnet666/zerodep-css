# Nuxt 4

在 `nuxt.config.ts` 注册模块即可为每个 Nuxt SSR 请求和浏览器应用安装独立样式宿主：

```ts
export default defineNuxtConfig({
  modules: ['@zerodep-css/nuxt'],
});
```

组件继续从 `@zerodep-css/vue` 或项目共享的 `styles.ts` 使用 `createStyles`、`useCss` 和主题 hooks。项目 `styles.ts` 只保存作者配置，模块无需导入它；`createStyles({ theme })` 会在组件内使用默认主题，而同名 provider 优先。首版面向 Node 24、Nuxt 4.5.2 的完整字符串 SSR 和静态预渲染。模块为这些路由关闭实验性流式响应。

模块选项直接对应可序列化的宿主选项：`namespace`、`layers`、`layer`、`maxRecords`、`warnAt`、`debug`。`compiler` 默认为 `false`；设为 `true` 或 Vue 编译器选项对象才注册可选优化。启用编译时沿用模块的 debug，嵌套 compiler.debug 可以单独覆盖；详见[编译诊断](../docs/compiler.md)。跨文件项目 hooks 和复杂 CSS 仍保留运行时行为。

根 `app.vue` 的动态全局样式建议集中声明。Nuxt 的 Suspense 在脚本热替换时可能先创建新根，再卸载旧根；下面使用 Vite 的模块数据，在新 setup 中显式交接这个单实例根的租约：

```vue
<script setup lang="ts">
import { styles } from './styles';

const hot = import.meta.client ? import.meta.hot : undefined;
hot?.data['zerodep-css:root-global']?.dispose();
const rootGlobal = styles.useGlobalCss('page-background', (g) =>
  g.rule('body', (s) => s.backgroundColor.raw('#fff')),
);
if (hot) hot.data['zerodep-css:root-global'] = rootGlobal;
</script>

<template>
  <NuxtPage />
</template>
```

这段交接只用于单应用、单实例的根组件；多条根全局声明使用各自的 hot.data 槽位。它沿用卸载后重新挂载的语义，脚本热替换可能改变槽位 ID 及相对顺序；新工厂失败也不能恢复已经主动释放的旧租约。纯模板更新不重跑 setup，因而不会释放样式。不要改为无条件 hot.dispose：模板更新可能只重绘、不重新执行 setup。普通组件之间的同 key 内容冲突规则不变；稳定层叠顺序使用显式 CSS layers。

使用严格 CSP 时，让创建本请求 nonce 的服务端中间件显式调用 `setStyleNonce(event, nonce)`（从 `@zerodep-css/nuxt/server` 导入），并让同一 CSP 策略允许该 nonce 的内联样式。模块不会猜测其他安全模块的 `event.context` 字段。静态 HTML 的 CSP hash 只能授权已知的固定样式，不能自动授权客户端后续生成的新规则；静态部署仍需选择允许运行时样式的部署策略，构建期固定 nonce 不能当作每请求 nonce。

缓存代理可以继承 nonce 配置，但宿主和输出按真实请求 event 隔离，不能借共享 context 释放另一个事件的宿主。`routeRules.cache` 保存完整响应；使用每请求 nonce 时应禁用对应 HTML 缓存，或由部署层一致地重写响应 nonce 与 CSP，不能把一次性的 nonce 冻结到公共缓存。

开发阶段 Nuxt 可能因路由规则模板重生成而主动刷新整页。模块遵循框架的刷新行为；集成测试分别验证没有路由规则干扰的同文档 HMR，以及保留缓存规则时原生刷新后的样式恢复，不把整页刷新误记作 HMR 成功。

服务端只将样式字符串与 JSON manifest 写入 HTML，运行时实例不进入 Nuxt payload。客户端在 Vue 挂载前恢复 manifest，并在根 Suspense 完成后检查全局样式槽位。普通 SPA 导航复用该应用宿主。
