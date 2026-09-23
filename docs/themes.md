# 系统亮暗主题

`@zerodep-css/core/themes`、`@zerodep-css/vue/themes` 和 `@zerodep-css/svelte/themes` 各自提供 `lightTheme`、`darkTheme` 与 `ThemeCss`。预设位于独立入口；只导入标准 `Css` 不会加载内置主题关键字，也不会自动向页面注册主题规则。

## 在项目入口绑定类型和主题

Vue 项目可以在可共享的 `styles.ts` 中配置预设：

```ts
// styles.ts
import { createStyles } from '@zerodep-css/vue';
import { lightTheme, ThemeCss } from '@zerodep-css/vue/themes';

export const { createHost, useCss, useTheme, provideTheme } = createStyles({
  cssType: ThemeCss,
  theme: lightTheme,
});
```

应用入口为每个 Vue 应用或 SSR 请求创建 `const host = createHost(options)`，随后调用 `host.install(app)`。组件 setup 中使用框架原生依赖读取：

```ts
import { ref } from 'vue';
import { darkTheme, lightTheme } from '@zerodep-css/vue/themes';
import { provideTheme, useCss } from './styles';

const dark = ref(false);
provideTheme(() => (dark.value ? darkTheme.defaults : lightTheme.defaults));
const css = useCss();
// 模板中调用 css(s => { s.color.text; s.backgroundColor.surface; s.padding.lg; })
```

Svelte 5 使用同形的项目入口，从 `@zerodep-css/svelte` 及其 `/themes` 导入。根组件初始化时调用 `host.provide()`；组件内以 `$state` 保存切换状态，再调用 `provideTheme(() => dark ? darkTheme.defaults : lightTheme.defaults)` 和 `const css = useCss()`。Svelte 应用最终 `unmount` 后显式 `host.dispose()`；SSR 则在输出完整 styles/manifest 后由请求宿主释放。两端都由原生响应式追踪 getter，不增加库自有的响应式系统。

即使没有同名 provider，`createStyles({ theme: lightTheme })` 的 `useCss()` 仍会为样式加入默认主题变量类；局部同名 provider 优先。只导入预设而不使用绑定的样式或 provider 不会产生页面样式。若项目没有配置默认主题，`useTheme`/`provideTheme` 的无定义快捷形式在类型层不可用；仍可显式传入其他 `ThemeDefinition`，在同一逻辑组件树中使用多个主题。

`provideTheme` 接受静态覆盖对象、返回覆盖对象的 getter，以及 `null`/`undefined`。getter 可在内部读取 Vue ref 或 Svelte 响应式值，但库不会自动解包传入的 ref/store。局部覆盖中的 `null`/`undefined` 均表示继续继承父级值；需要主题定义的初始值时显式传入 `definition.defaults`。`useTheme()` 返回读取有效值的函数，可在模板、computed 或 `$derived` 中保留原生依赖追踪。主题按组件逻辑树继承，Teleport/Portal 移动 DOM 不改变有效值。

## 作者继承与 token

`darkTheme` 由 `lightTheme.extend(...)` 创建，两者 schema 和 token 变量身份一致。`extend` 创建新的预设定义，不修改系统默认值。系统基类 `Css` 只提供标准属性；`ThemeCss extends Css` 为内置 token 增加类型化关键字。业务既可 `class AppCss extends Css` 自行组织主题，也可 `class AppCss extends ThemeCss` 继续增加 getter、方法和私有成员；两条路径都通过 `createStyles({ cssType: AppCss })` 或同时传入 `theme` 来绑定真实构造器。未配置 `cssType` 时默认系统 `Css`，不会凭主题定义扩展标准属性对象。

- `color`：canvas、surface、surfaceRaised、text/textMuted/textDisabled、primary/secondary/accent/success/warning/danger/info 及对应 on 前景色、border/borderSubtle/focusRing/overlay。
- `space`：zero/xs/sm/md/lg/xl/xxl；`radius`：sm/md/lg/pill。
- `fontFamily`：body/mono；`fontSize`：xs/sm/md/lg/xl。
- `duration`：fast/normal/slow；`shadow`：sm/md/lg；`colorScheme`：light/dark。

`ThemeCss` 在颜色、padding/margin/gap、borderRadius、fontFamily/fontSize、transitionDuration、boxShadow 和 colorScheme 属性上提供对应便利成员，例如 `s.color.text`、`s.padding.lg`、`s.colorScheme.theme`。预设不自动设置页面 reset、动画、系统跟随策略或偏好持久化；这些行为由应用负责。主题类只携带变量规则，普通样式与其引用的动画仍受各应用或请求 host 管理。

## 对比度与验证边界

预设的约定文字/表面、强调色/on 前景色按 [WCAG 2.2 文本对比度](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)以未取整数值验证至少 4.5:1；border 和 focusRing 对各表面按[非文本对比度](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)验证至少 3:1。borderSubtle 和 overlay 用于装饰或遮罩，不替代必要的交互边界或文字前景。这些检查针对明确配对，不表示任意业务覆盖或整站自动符合可访问性标准；组件与浏览器实测见[验证记录](validation.md)。
