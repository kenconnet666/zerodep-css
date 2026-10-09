# CSS 自动追踪与变量

Vue/Svelte 的普通组件使用 `css(...)`，无需为宽度、颜色等直接动态值额外写 bx。插件识别库的命名、别名和命名空间导入，局部同名函数不转换。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Css, css } from 'zerodep-css-vue';
const s = new Css();
const width = ref(24);
const box = css(s.width.px(width.value));
</script>
<template>
  <div :class="box" />
  <div :class="css(s.width.px(width))" />
</template>
```

Svelte 直接写 `<div class={css(s.width.px(width))}></div>`，width 可以来自 `$state`。组件顶层 `const name = css(...)` 自动成为 Vue computed / Svelte derived，Vue 脚本引用由编译器解包；`const saved = name` 仍保留字符串快照。Svelte 原生静态分析不了解插件转换，直接声明读取 $state 时可能提示 state_referenced_locally；模板直接调用没有这个问题，示例只对确认由插件转换的声明加局部说明注释，不关闭全局诊断。

原生 class 与 style 共用一次求值，已有 style 和指令保留。直接响应式值/循环字段交给 core 的 inlineDeclaration 检查：有限非负单位数值、支持的系统关键字、十六进制颜色及 0–1 opacity 可以生成私有 `--zj-*` 元素变量。主题关键字复用 inlineKeyword，始终读取当前主题。CSS-wide、已有 var()/复杂 raw 值、无效值、负单位值、自定义或覆写作者方法保留原始声明，避免改变层叠。

命名 css 只有全部用途可证明是本组件原生 class 时才携带元素变量；跨组件传递、其他脚本用途、同名遮蔽或属性 spread 保留响应式字符串。复杂计算、嵌套选择器与普通 helper 不承诺变量优化，仍可在模板/computed/$derived 中正常重新求值。元素变量随 DOM 移除，不需要绑定帧或额外清理。模块脚本、普通 .ts 和 Vue Options API 不参与组件自动转换。

安装方式仍为下文的 Vite 插件，放在官方 Vue/Svelte 插件之前。Nuxt 使用 `zerodep-css-vue/nuxt`，Kit 使用 `zerodep-css-svelte/sveltekit` 和其 `/server` 子入口，不再安装独立元框架适配包。`inlineBindings: false` 关闭隐式元素变量，但保留命名 css 的自动追踪。

[Vue 示例](../vue/examples/Implicit.vue)与 [Svelte 示例](../svelte/examples/Implicit.svelte)覆盖命名/直接调用、列表重排、自定义作者和快照。`test/implicit-css.test.mjs` 验证安全回退，`test/browser/implicit.mjs` 验证 CSR、SSR 首屏、接管、实际样式和卸载。

## 特殊场景的显式 bx

既有 bx 继续用于任意用户方法、动画帧和跨元素/全局规则等场景。以下说明这一显式路径：bx 返回完整 CSS 值中的 var() 字符串，不判断 CSS 是否有效、不补单位，与上面的隐式安全优化规则不同。

## 写法

Vue 的组件 setup 中：

```ts
import { ref } from 'vue';
import { css, bx } from 'zerodep-css-vue';
const width = ref(24);
const x = ref(4);
const box = css(
  s.width.raw(bx(width.value + 'px')),
  s.padding.raw(bx('8px') + ' ' + bx(width.value + 'px')),
  s.opacity.raw(bx(0.8)),
  s.transform.raw('translate(' + bx(x.value + 'px') + ', ' + bx('0px') + ')'),
);
```

模板使用 `<div :class="box" />`。Svelte 实例脚本使用 `let width = $state(24)`，表达式改为 `bx(width + 'px')`，模板使用 `<div class={box}>`。值更新时只更新变量，声明和类名可保持稳定。

bx 的结果是 `var(...)` 字符串。模板元素绑定使用固定的 `--zi-...` 名称，通用样式表绑定使用私有的 `--zv-...` 名称；名称属于内部实现。`bx(24)` 对应变量值 `24`，不会变成 `24px`。需要长度可以传 `bx(width + 'px')`，或者写 `s.width.raw('calc(' + bx(width) + ' * 1px)')`。不要写 `var(--x)px`；CSS 不会把这两个 token 拼成长度。

一条声明可以包含任意多个 bx，也可先 `const size = bx(width.value + 'px')` 再在多个声明复用 size。`const snapshot = width.value; bx(snapshot)` 会生成变量，但 snapshot 本身仍是快照。字面常量直接初始化变量而不创建响应式订阅；普通表达式按框架追踪。表达式应无副作用，框架追踪时可能重复读取。

## 接入

```ts
// Vue 3.5：在 Vue 插件前安装。
import cssBindings from 'zerodep-css-vue/vite';
import vue from '@vitejs/plugin-vue';
export default { plugins: [cssBindings(), vue()] };
```

Svelte 5.20+ 使用 `zerodep-css-svelte/vite`，放在官方 svelte 插件之前。SvelteKit 使用相同顺序，保留[宿主接入](metaframeworks.md)。Nuxt 模块默认安装转换；关闭 bindings 选项后不能使用 bx。

Svelte 适配器会预先声明编译器注入的绑定运行时，避免依赖预优化在首次挂载中途重载 Svelte。0.1.1 同时处理依赖 SSR / HMR 的 `.svelte?v=...`、`.svelte?t=...` 缓存查询，变量身份仍由原始文件路径确定；样式、raw、url 等资源子请求不参与组件转换。

bx 是组件编译入口，必须经过插件；未经转换直接调用会报错，不会悄悄退回普通字符串。Vue 处理 script setup 和模板，Svelte 处理实例脚本及组件模板；普通 .ts、Vue Options API 和 Svelte 模块导出的 snippet 不在本阶段支持范围。别名导入和命名空间导入可识别，局部同名 bx 不转换。调用只接受一个参数，不支持嵌套 bx、await/yield 参数。

## 模板直接调用与自动缓存

```vue
<div
  v-for="item in items"
  :key="item.id"
  :class="
    css(
      s.display.flex,
      item.compact ? s.padding.px(4) : s.padding.px(16),
      s.width.raw(bx(item.width + 'px')),
    )
  "
>{{ item.label }}</div>
```

插件默认将原生元素中可分析的 class 表达式拆成两部分：固定变量引用留在 class，动态值进入该元素的 style。同一调用位置的各行/组件实例共用变量名和样式类，通过 DOM 隔离值，不再为每个列表 key 建立私有变量规则。Vue 生成并合并 `:style`，Svelte 生成 `style:--zi-...` 指令，SSR 同样输出初值。已有 style、静态 class 和其他属性继续由框架合并。

bx 内的函数调用、计算、模板字符串和常量都按原表达式求值；一条声明可绑定多个变量。条件及短路分支保留惰性，不执行未选中的 bx 值。表达式应无副作用，条件可能由 class 和 style 分别读取。

Vue 通过官方 AST 扩展缓存可分析的 class 表达式，不冻结其他属性和文字。普通数值更新走框架元素 style 更新，稳定声明不重新登记；它仍可能触发组件 render，不能等同于完全不运行 JS。`cssBindings({ templateCache: false })` 只关闭 class 缓存，仍保留元素变量转换。

未知样式辅助函数、覆写作者方法、任意 `_selector`、动态 raw 原文等继续使用样式表绑定；这保持跨元素选择器和自定义作者行为。系统 `_hover` / `_before` 等快捷选择器支持元素变量。作者方法身份检查只选择传输/缓存路径，bx 在两条路径中都生成变量，不退回真实值，也不判断 CSS 值是否有效。

项目可自行定义 `_media`、主题覆盖等字符串方法，直接传入 `bx(value)`；不需要额外注册或注解。编译器保留用户方法执行，使用通用绑定路径。内置 Grid repeat/minmax/fitContent 方法与其他系统属性方法一样支持模板缓存和元素变量。

Svelte 利用原生模板派生，支持 each、const tag、await then/catch 和组件内 snippet 的局部参数。每次 snippet 调用有独立绑定身份。手写 Vue computed（含命名 getter 和可写形式）、Svelte $derived / $derived.by（含命名 getter）同样使用绑定帧，不在派生求值期间创建额外订阅。异步 getter 不支持此保证。

Vue scoped slot 支持 bx，各次调用按参数身份隔离；优先传递有稳定身份的 item 对象，连续变化的原始值参数会建立新的绑定帧。被遮蔽的嵌套循环作用域仍需使用普通运行时 CSS 或将 bx 提到独立行组件。模块引用/导出的 Svelte snippet 不转换 bx，不能引用组件实例宿主。普通无 bx 写法仍可在这些位置使用。

## 选择器、组合和生命周期

`s._hover(s.opacity.raw(bx(alpha)))`、`s._selector`、动画帧和命名全局块都使用相同规则。`css(boundClass, s.color.red)` 会把合成类关联到对应变量；类名可传给子组件，在绑定所有者存活期间有效；所有依赖的绑定都销毁后，私有类和动画会被回收。keyframes 返回的动画名称保持稳定，引用动画的样式类关联其变量。

`globalCss('theme', s._selector('body', s.color.raw(bx(color))))` 更新变量，不再自动重跑整块 globalCss。key、选择器、if/switch 等结构按普通 JS 求值；需要动态结构时由模板、computed/$derived 或显式调用控制。组件卸载清理自己的值规则、订阅及不再拥有活动绑定的私有类/动画，全局块本身仍属宿主，需要删除时调用 `globalCss('theme')`。

组件 setup 中的 bx 创建框架订阅；样式表路径的模板/派生帧由当前框架求值追踪读取，并按调用位置和列表 key 复用到组件卸载。元素变量由框架直接管理，不建立这类帧；DOM 移除时值随元素消失，共享静态类保留。样式表路径无限新增 key 或反复在事件中创建独立绑定仍会增加资源。普通运行时 css 不受此限制。

## 值传输、SSR 与 CSP

模板原生元素的默认快路径参考 Vue CSS v-bind：共享声明，值写到元素内联 style；不直接依赖 Vue 内部 useCssVars API。script/setup、需要传递的 class、动画/全局规则和跨元素选择器继续使用私有 CSSOM 值规则，必要时使用私有 :root 变量。普通 css 仍可在运行时构建，没有要求静态提取全部样式。

SSR 内联变量受页面 `style-src-attr` 策略约束。项目禁止内联 style 时，在 Vue/Svelte 插件上设置 `cssBindings({ inlineBindings: false })`，统一使用样式表传输；Nuxt 模块对应选项同名：`modules: [['zerodep-css-vue/nuxt', { inlineBindings: false }]]`。此选项不关闭 bx。不要依赖客户端 CSSOM 写入是否被 CSP 放行来推断服务端内联 HTML 也被许可。

null/undefined 在私有样式表路径清空声明；元素路径写入 initial，避免继承外层同名变量。0 保留。无效值交给浏览器，包括 CSS 变量在计算值阶段失效的原生行为。重新赋值后恢复。

SSR 输出初始变量和规则清单，客户端先 hydrateCss 再恢复组件；Nuxt/Kit 处理顺序。nonce 接入、Kit 固定内联样式许可等见[元框架说明](metaframeworks.md)。同页多个独立 SSR 应用需要明确分配宿主身份。流式 SSR、边缘部署、Shadow DOM 尚未验收。

开发构建保留文件、行列诊断；生产不包含位置字典。局部验证使用 `pnpm test:bindings` / `pnpm test:compiler`；浏览器、HMR、元框架和 200/1,000 行性能对照交给 CI，性能模式 bx 与 runtime 分别使用显式绑定和普通运行时路径。

同步的 Vue watch/watchEffect（含 post/sync 变体）与 Svelte $effect/$effect.pre/$effect.root 回调也使用稳定绑定帧，避免每次回调都建立新订阅和私有类。Svelte 原生 effect 不在 SSR 执行；需要首屏样式时在 setup 提供初值。异步回调跨 await 的部分不保证同一帧，连续值优先在 setup、模板或同步框架回调中绑定。
