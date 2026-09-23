# 迁移到项目 styles 与 host API

Vue 和 Svelte 适配器现在以 `createStyles` 作为项目入口。项目模块保存作者类与默认主题；每个应用或 SSR 请求另建 host，拥有 runtime、样式记录和 SSR 恢复状态。

## 一次配置项目入口

```ts
// styles.ts
import { Css, createStyles, defineTheme } from '@zerodep-css/vue';

export const theme = defineTheme('app', { color: { primary: 'red' } });
export class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }
}

export const styles = createStyles({ cssType: AppCss, theme });
export const { useCss, useTheme, provideTheme, useGlobalCss } = styles;
```

Svelte 项目把入口改为 `@zerodep-css/svelte`。默认使用系统 `Css`；继承 `Css` 可定义自己的作者模型，继承 `/themes` 提供的 `ThemeCss` 可保留预设主题关键字后继续扩展。CSS 构造器在 `createStyles({ cssType })` 中选择，不再逐次传给 `css`。

## 组件 API

- `useStyleRuntime()` 或 `useStyleRuntime(options)` 改为 `styles.useCss()`。从项目模块导入 hook 可正常运行；自动编译只有在同一组件文件内能直接证明 `createStyles` 与 `useCss` 绑定时才优化，跨模块写法保留 runtime。
- 独立 `provideTheme`、`useTheme` 改为 `styles.provideTheme(...)`、`styles.useTheme(...)`。有默认主题时可省略定义；额外主题仍显式传入定义。`null`/`undefined` 继承，`theme.defaults` 显式重置。
- standalone `useGlobalCss` 改为 `styles.useGlobalCss(key, factory)`，在组件 setup 中调用一次。key 在同 host 的活跃挂载中唯一；同 key 多组件共享尚未提供。
- standalone `globalCss` 不再是适配器根入口。全局定义写在 `useGlobalCss` 的工厂中。
- `provideStyleContext` 与手动 context props 不再是适配器业务 API；host 安装样式 context。

响应式主题覆盖建议通过 getter 读取 Vue ref 或 Svelte rune；库不自动解包 ref/store。静态对象也可直接传入，有效值在解析时形成冻结快照。普通 `css(...)` 字符串也是快照，不会携带元素变量绑定。需要响应式 class 时，在模板、Vue `computed` 或 Svelte `$derived` 中调用 `css`。优先用普通函数复用以及 `if`/`switch` 表达条件。

`css(base, override, [condition && extra])` 会在同一 host 内组合已知 class 的样式结构；外部 class 透传，空项忽略。字符串 composition 不复制原元素变量。

## Host 与 SSR

适配器根入口公开 `createStyles`、`Css`、`defineTheme`、`cssVar` 和 `keyframes`，以及 `StyleHostOptions`、`StyleManifest`、`StyleStats` 等类型。`styles.createHost(options)` 返回的 host 有 `stats()`、`snapshot()`、`renderStyles()`、`renderManifest()`、`completeHydration()` 和 `dispose()`。

Vue 用 `app.use(host)` 安装。客户端 `app.unmount()` 自动 dispose；SSR 每个请求用独立 `styles.createHost({ target: null })`，渲染和收集完毕后在 `finally` 中 dispose。

Svelte 根组件通过 `host.provide()` 安装 context，应在 `untrack(() => host.provide())` 中执行。应用结束时先 `unmount`，再显式 `host.dispose()`；HMR 替换根组件但复用 host 时保留 runtime。

客户端用 SSR manifest 创建同配置 host，完成框架水合和相关组件初始化后调用 `completeHydration()`。它会报告尚未认领的服务端全局槽位。完整字符串 SSR 与水合有真实组件验证；Nuxt/Kit 集成尚未完成。

core 中的旧独立 engine 入口仍在，计划在 P2e 移除；新适配器项目应使用 `createStyles` 和 host API。
