# 系统亮暗主题

core、vue、svelte 的 `/themes` 独立入口提供 `lightTheme`、`darkTheme` 与可选作者类 `ThemeCss`。默认入口不加载预设，标准 `Css` 仍只包含系统 CSS 属性和关键字。

```ts
import { lightTheme, darkTheme, ThemeCss } from '@zerodep-css/vue/themes';
import { provideTheme, useStyleRuntime } from '@zerodep-css/vue';
import { ref } from 'vue';

const dark = ref(false);
provideTheme(lightTheme, () => (dark.value ? darkTheme.defaults : lightTheme.defaults));
const { css } = useStyleRuntime({ cssType: ThemeCss });
// 模板中调用 css(s => { s.color.text; s.backgroundColor.surface; s.padding.lg; })
```

Svelte 使用同名 `/themes` 入口、`$state` 和 `provideTheme(lightTheme, () => dark ? darkTheme.defaults : lightTheme.defaults)`。后代组件自动继承作用域；局部 provider 可只覆盖需要修改的字段。

暗色通过亮色预设的 extend 创建，两者 schema 与变量身份一致。自定义预设也使用 `darkTheme.extend({ color: { primary: '#...' } })`，不会修改系统默认值。应用可以继续继承 ThemeCss 增加自己的关键字，或直接继承 Css 使用预设的 token 树。

作者类保持两重继承：系统 Css 只含标准能力；ThemeCss extends Css 增加内置主题关键字。用户可以 `class AppCss extends Css` 自行组织主题，也可以 `class AppCss extends ThemeCss` 继续增加成员。`useStyleRuntime({ cssType: AppCss })` 对两条路径都保留完整类型；没有传 cssType 时仍使用系统 Css，不隐式加载或注入主题关键字。

## Token 分组

- color：canvas、surface、surfaceRaised，text/textMuted/textDisabled，primary/secondary/accent/success/warning/danger/info 及其对应 on 前景色，border/borderSubtle/focusRing/overlay。
- space：zero/xs/sm/md/lg/xl/xxl；radius：sm/md/lg/pill。
- fontFamily：body/mono；fontSize：xs/sm/md/lg/xl。
- duration：fast/normal/slow；shadow：sm/md/lg。暗色覆盖阴影，其他尺度共享。
- colorScheme：light/dark；通过 `s.colorScheme.theme` 使用，便于原生控件与当前预设一致。

ThemeCss 为颜色属性、padding/margin/gap、borderRadius、fontFamily/fontSize、transitionDuration、boxShadow 和 colorScheme 提供上述便利成员。预设不会导入即注入全局样式，也不会自动设置页面 reset、动画或 prefers-color-scheme；选择策略由应用拥有。

## 对比度与验证边界

约定的文字/表面组合和强调色/on 前景色按 [WCAG 2.2 文本对比度](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)以未取整数值验证至少 4.5:1；border 和 focusRing 对各表面按[非文本对比度](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)验证至少 3:1。borderSubtle 和 overlay 是装饰/遮罩用途，不用于替代必要的交互边界或文字前景。

这些检查针对明确的颜色配对，不代表任意混搭、自定义覆盖或整个应用自动满足可访问性标准。真实组件、亮暗切换、SSR 和三引擎追加验证的进度见 [追加审计](presets-audit-plan.md)。
