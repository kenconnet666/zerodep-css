# 可选亮暗主题

纯系统 `Css` 不携带主题。需要预设时从 `@zerodep-css/core/theme` 导入 `ThemeCss`、对应的 `ThemeColorCss` 等属性类和 `themes`。此入口独立于 core 主入口，不新增包。

```ts
import { ThemeCss, ThemeColorCss, themes } from '@zerodep-css/core/theme';
import { css, createCssContext } from '@zerodep-css/vue'; // Svelte 使用对应适配包

class ProjectColor extends ThemeColorCss {
  readonly _brand = this.raw('#c026d3');
}
class AppCss extends ThemeCss {
  override readonly color = new ProjectColor();
}
export const { provideCss, useCss } = createCssContext<AppCss>();
```

用户也可以直接 `class AppCss extends Css`，自行安排主题。系统属性、主题属性和用户扩展通过普通类继承衔接，没有额外主题注册表或公开 var 方法。

在组件 / 请求作用域登记两套静态类：

```ts
const s = provideCss(new AppCss());
const light = css(themes.light);
const dark = css(themes.dark);
const panel = css(
  s.color._text,
  s.backgroundColor._surface,
  s.borderColor._border,
  s._hover(s.backgroundColor._surfaceHover),
);
```

Vue 使用 `<section :class="isDark ? dark : light">`，Svelte 使用 `<section class={isDark ? dark : light}>`。后代只挂 `panel`；切换主题只切换边界上的类，不重建作者对象，不随切换累加规则，也不要求内联 style。

预设提供 15 个语义关键字：`_background`、`_surface`、`_surfaceHover`、`_text`、`_muted`、`_border`、`_accent`、`_accentHover`、`_onAccent`、`_focus`、`_success`、`_warning`、`_error`、`_disabled`、`_disabledSurface`。它们可用于 `color`、`backgroundColor`、`borderColor`、`outlineColor`、`fill`、`stroke`。例如强调色背景配 `_onAccent` 文字，主题不替组件自动决定这些用途。

关键字引用 `--z-theme-*` CSS 变量，camelCase 对应连字符，如 `_surfaceHover` 使用 `--z-theme-surface-hover`。两套预设均输出完整变量和 `color-scheme`。选择器与变量采用原生 CSS 语义。

子树可以只覆盖一项：

```ts
const nested = css('--z-theme-text:#c026d3;');
```

将 `nested` 放到子树边界；兄弟继续继承父级主题。移除它后恢复父级继承，其他未覆盖变量仍随父主题变化。DOM 被移到边界外时，继承也会随物理位置改变，不自动复制主题。

可执行样板：[Vue](../vue/examples/Theme.vue)、[Svelte](../svelte/examples/Theme.svelte)。它们通过真正的 context 注入同一个作者实例，并展示项目关键字、父主题切换、子树覆盖和撤销。元框架 CI 同时验证首屏无 JS、hydration、静态部署及 nonce CSP；主题不使用内联 style。

样板的 `initialDark` 只用于挂载 / SSR 初值，后续切换由组件状态负责。CI 在同一页面同时放置初始亮色、初始暗色两个作用域，核对它们的首屏和隔离。
