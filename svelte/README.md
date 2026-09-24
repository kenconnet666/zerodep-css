# Svelte

Svelte 适配器把项目作者配置与应用 runtime 分开。项目级 `styles.ts` 配置 CSS 作者类和默认主题一次；每个 SSR 请求或浏览器应用创建自己的 host。

## 配置与组件

```ts
// styles.ts
import { Css, createStyles, defineTheme } from '@zerodep-css/svelte';

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

`AppCss extends Css` 时自行扩展主题能力。需要预设主题关键字时，从 `@zerodep-css/svelte/themes` 导入 `ThemeCss`，再用 `AppCss extends ThemeCss` 添加项目成员。`createStyles` 的配置是只读快照，不创建 runtime。

例如在 `Panel.svelte` 中：

```svelte
<script lang="ts">
  import { provideTheme, useCss, useTheme, useGlobalCss } from './styles';

  let width = $state(120);
  let color = $state('red');
  provideTheme(() => ({ color: { primary: color } }));
  const css = useCss();
  const currentTheme = useTheme();
  const panelClass = $derived(
    css((s) => {
      s.control();
      s.color.primary;
      s.width.px(width);
    }),
  );

  useGlobalCss('page-background', (g) => g.rule('body', (s) => s.backgroundColor.raw(color)));
</script>

<div class={panelClass} data-theme={currentTheme().color.primary}></div>
```

在组件初始化中先 `provideTheme`，再获取 `useCss` 和 `useTheme`。静态对象可直接作为覆盖值；有效主题在解析时形成冻结快照。响应式覆盖使用 getter，例如 `() => ({ color: { primary: color } })`。`null` 和 `undefined` 继承父主题，显式传入 `theme.defaults` 可重置为预设默认值。

`useGlobalCss` 在组件初始化时调用一次。同 key 同序列化内容可以共享，最后一个 owner 卸载才释放；多个 owner 存活时只接受同内容，动态全局建议在根组件声明一次。`$state` 和 `$derived` 由 Svelte 原生响应式系统管理，适配器不创建第二套 store。

## Host、SSR 与水合

根组件接收 host，并在初始化时通过 `untrack` 提供给后代：

```svelte
<script lang="ts">
  import { untrack } from 'svelte';
  import type { StyleHost } from '@zerodep-css/svelte';
  import Panel from './Panel.svelte';

  let { host }: { host: StyleHost } = $props();
  untrack(() => host.provide());
</script>

<Panel />
```

服务器每个请求创建 host，渲染完整组件字符串后收集样式和 manifest，并在 `finally` 中释放。

```ts
import { render } from 'svelte/server';
import { styles } from './styles';
import App from './App.svelte';

export async function renderRequest() {
  const host = styles.createHost({ target: null, namespace: 'app' });
  try {
    const body = (await render(App, { props: { host } })).body;
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

浏览器使用同一配置和 manifest 创建 host，再 `hydrate` 根组件。水合后 `tick()` 并调用 `completeHydration()` 检查服务端全局槽位均已认领。真实应用结束时，在 `unmount` 后显式 `dispose`；HMR 替换根组件而复用 host 时不要提前释放它。

```ts
import { hydrate, tick, unmount } from 'svelte';
import type { StyleManifest } from '@zerodep-css/svelte';
import { styles } from './styles';
import App from './App.svelte';

const manifest = JSON.parse(manifestText) as StyleManifest;
const host = styles.createHost({ namespace: 'app', hydrate: manifest });
const app = hydrate(App, { target, props: { host } });
await tick();
host.completeHydration();
// 应用真正关闭时：
await unmount(app);
host.dispose();
```

`StyleHostOptions`、`StyleManifest` 和 `StyleStats` 从适配器根入口导出；`host.stats()` 返回当前记录数。[SvelteKit 接入](../sveltekit/README.md)负责 Node 请求宿主与静态预渲染；组件 HTML 流式 SSR 与边缘运行环境仍不在首版范围。

## 样式组合与编译

`useCss()` 返回同步的 class 字符串函数。`css(base, override, [condition && extra])` 会在本 host 内按已知样式结构组合类；未知字符串按外部 class 透传。`false`、`null`、`undefined` 和空数组项会忽略。普通 class 字符串是快照，不会复制元素上的动态变量；要追踪状态变化，使用模板表达式或 `$derived`。

普通函数适合复用样式，`if`/`switch` 适合表达条件。属性值继续使用 `token`、`raw` 和单位方法。Vite 自动编译可选启用；可证明的单条动态声明把固定 class 提升到组件内，Svelte 用 `$derived` 或 keyed each 行派生值更新元素变量。支持边界与回退规则见[编译说明](../docs/compiler.md)。

适配器以 Svelte 5 runes 编写，消费者应通过官方 Svelte 编译链构建 `.svelte.js` 模块。完整字符串 SSR 与水合有真实浏览器验收；异步组件必须初始化后再调用 `completeHydration()`。
