# Vue

Vue 适配器把项目作者配置与应用运行时分开。项目级 `styles.ts` 配置 CSS 作者类和默认主题一次；每个 SSR 请求或浏览器应用创建自己的 host。

## 配置与组件

```ts
// styles.ts
import { Css, createStyles, defineTheme } from '@zerodep-css/vue';

export const theme = defineTheme('app', { color: { primary: 'red' } });

export class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }

  control() {
    this.padding.px(8);
  }
}

export const styles = createStyles({ cssType: AppCss, theme });
export const { useCss, useTheme, provideTheme, useGlobalCss } = styles;
```

`AppCss extends Css` 时自行扩展主题能力。需要预设主题的关键字时，从 `@zerodep-css/vue/themes` 导入 `ThemeCss`，再用 `AppCss extends ThemeCss` 添加项目成员。`createStyles` 的配置是只读快照，不创建 runtime。

```vue
<script setup lang="ts">
import { computed, ref } from 'vue';
import { provideTheme, useCss, useGlobalCss, useTheme } from './styles';

const width = ref(120);
const color = ref('red');
provideTheme(() => ({ color: { primary: color.value } }));
const css = useCss();
const currentTheme = useTheme();
const panelClass = computed(() =>
  css((s) => {
    s.control();
    s.color.primary;
    s.width.px(width.value);
  }),
);

useGlobalCss('page-background', (g) => g.rule('body', (s) => s.backgroundColor.raw(color.value)));
</script>

<template>
  <div :class="panelClass" :data-theme="currentTheme().color.primary"></div>
</template>
```

在组件 setup 中先 `provideTheme`，再获取 `useCss` 和 `useTheme`。静态对象可直接作为覆盖值；有效主题在解析时形成冻结快照。Vue ref 必须通过 getter 读取，例如 `() => ({ color: { primary: color.value } })`，`createStyles` 不会自动解包 ref。`null` 和 `undefined` 继承父主题，显式传入 `theme.defaults` 可重置为预设默认值。

`useGlobalCss` 必须在组件 setup 中调用。同 key 同序列化内容可以共享，最后一个 owner 卸载才释放；多个 owner 存活时只接受同内容，动态全局建议在根组件声明一次。Nuxt 根组件的开发热替换交接见 [Nuxt 接入](../nuxt/README.md)。

## Host、SSR 与水合

Vue host 是应用插件。`app.use(host)` 安装样式 context 和默认主题，并注册 `app.unmount()` 清理。SSR 每个请求单独创建 host，在完整字符串渲染后收集样式与 manifest，并在 `finally` 中释放。

```ts
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import type { StyleHostOptions } from '@zerodep-css/vue';
import { styles } from './styles';
import App from './App.vue';

export async function renderRequest(options: StyleHostOptions = {}) {
  const host = styles.createHost({ ...options, target: null, namespace: 'app' });
  try {
    const app = createSSRApp(App);
    app.use(host);
    const body = await renderToString(app);
    return {
      body,
      head: host.renderStyles(),
      manifest: host.renderManifest(),
      stats: host.stats(),
    };
  } finally {
    host.dispose();
  }
}
```

把 `head` 放进 HTML 的 `<head>`，把 manifest 放进 `application/json` script。浏览器从 manifest 恢复同配置的 host，安装到 `createSSRApp` 后 mount；Vue 会水合现有 DOM。所有相关组件初始化后调用 `completeHydration()`，它会检查服务端全局槽位是否全部认领。应用卸载会自动 dispose host。

```ts
import { createSSRApp, nextTick } from 'vue';
import type { StyleManifest } from '@zerodep-css/vue';
import { styles } from './styles';
import App from './App.vue';

const manifest = JSON.parse(manifestText) as StyleManifest;
const host = styles.createHost({ namespace: 'app', hydrate: manifest });
const app = createSSRApp(App);
app.use(host);
app.mount('#app');
await nextTick();
host.completeHydration();
```

`StyleHostOptions`、`StyleManifest` 和 `StyleStats` 从适配器根入口导出。常用统计可通过 `host.stats()` 获取。[Nuxt 模块](../nuxt/README.md)负责其专用请求流程；组件 HTML 流式 SSR 与边缘运行环境仍不在首版范围。

## 样式组合

`useCss()` 返回同步的 class 字符串函数。`css(base, override, [condition && extra])` 会在本 host 内按已知样式结构组合类；不属于当前 host 的字符串会透传。`false`、`null`、`undefined` 和空数组项会忽略。

普通 class 字符串是调用时快照。字符串组合不会复制原元素上的动态绑定变量；要保持响应式，应在模板表达式或 `computed` 中调用 `css`。样式回调优先使用普通函数复用和 `if`/`switch` 表达条件。样式属性采用 `s.property.token(...)`、`s.property.raw(...)` 和 `s.property.px(...)` 等属性对象 API。

Vite 自动编译可选启用；可证明的单条动态声明会把固定 class 提升到组件内，模板只通过 Vue `computed` 更新元素变量。列表局部值保留在 `v-for` 回调中，复杂回调仍按调用时运行。支持范围与安全回退见[编译说明](../docs/compiler.md)。
