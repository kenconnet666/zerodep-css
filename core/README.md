# @zerodep-css/core

core 是共享作者模型，不再提供可独立运行的 CSS 引擎。业务从根入口取得 `Css`、`cssVar`、`defineTheme` 及其类型；可选 `/themes` 入口提供 `ThemeCss`、`lightTheme`、`darkTheme`。生成的标准属性类型保留在 `core/src/generated/properties.ts`，完整值元数据和执行引擎位于 `internal/runtime`，构建时复制到 Vue、Svelte 适配包各自的 `dist/runtime`。

## 作者类与主题定义

```ts
import { Css, cssVar, defineTheme } from '@zerodep-css/core';

export const theme = defineTheme('app', {
  color: { brand: '#2463eb', text: '#202020' },
});

export class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }

  control() {
    this.display.flex;
    this.color.brand;
  }
}

export const foreground = cssVar('--app-foreground', '#202020');
```

`Css` 是真实类。派生 getter、方法、`super`、私有字段和嵌套回调保留 JavaScript 类语义；`extendProperty` 只增加类型化关键字，拒绝覆盖已有属性操作。引擎为每次同步样式求值创建作者实例，结束后不能继续使用该实例。属性对象不可直接调用：固定值用 `s.display.flex`，严格字面量用 `s.display.token(value)`，开放值用 `s.width.raw('50%')`，单位值用 `s.width.px(50)`。结构方法如 `hover`、`media`、`selector` 仍在根层调用。

`defineTheme` 冻结默认值与 token 树。`extend` 创建新预设并保持同一主题家族的变量身份；局部覆盖中 `null`/`undefined` 表示继承，显式传入 `theme.defaults` 才恢复定义值。主题叶允许字符串或有限数字，CSS-wide 关键字和不完整的声明结构会在定义时拒绝。主题定义只保存可共享的静态数据，不拥有应用或 SSR 请求运行状态。内置 `ThemeCss extends Css` 是可选第二层，业务也可以直接继承 `Css`。

## 框架接入与内部边界

Vue/Svelte 业务从对应适配包导入 `createStyles`，在项目 `styles.ts` 绑定 `AppCss` 与默认主题；组件调用绑定后的 `useCss()`、`provideTheme()`、`useGlobalCss()` 等方法。每个应用或 SSR 请求再由适配器 `createHost(options)` 创建独立运行时。`keyframes` 从适配器根入口导入，普通 class、全局样式、SSR 样式输出与恢复均由适配器 host 管理。完整示例见 [Vue](../vue/README.md)、[Svelte](../svelte/README.md) 和[架构](../docs/architecture.md)。

`@zerodep-css/core/internal` 是适配器使用的非业务子路径，保存跨两份引擎必须共享的 `Css` 身份、变量品牌、主题与编译元数据标记、浏览器宿主仲裁。适配包的 `#runtime` 是包内私有导入，指向自身 `dist/runtime`；不要从业务代码引用这些内部入口，也不要在模块顶层创建请求运行时。core 不依赖 Vue 或 Svelte，主题值检查仍使用 `css-tree` 的轻量 tokenizer；完整运行时的解析、序列化和 CSSOM 操作在内部引擎中。

CSS 属性声明与运行时元数据同源生成：属性类型在 `core/src/generated/properties.ts`，完整运行时数据在 `internal/runtime/generated/metadata.ts`。不要手改生成文件。作者模型用 core 的类型检查验证，运行时另执行 `pnpm check:runtime` 与 `pnpm test:browser:runtime`；这些命令的最新完成状态以[实施记录](../docs/production.md)为准。
