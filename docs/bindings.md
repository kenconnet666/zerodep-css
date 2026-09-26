# bx 显式 CSS 变量绑定

只对显式的 `bx(expression)` 生成 CSS 变量。常量、普通变量、响应式表达式采用同一规则；没有 bx 的声明保持普通运行时字符串语义。bx 返回值的位置是 CSS 值字符串，作用类似 Vue 样式中的 v-bind；不判断 CSS 是否有效，不猜单位，也不自动修复值。

## 写法

Vue 的组件 setup 中：

```ts
import { ref } from 'vue';
import { css, bx } from '@zerodep-css/vue';
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

每次 bx 调用返回形如 `var(--zv-xxx-0)` 的字符串。`bx(24)` 对应变量值 `24`，不会变成 `24px`。需要长度可以传 `bx(width + 'px')`，或者写 `s.width.raw('calc(' + bx(width) + ' * 1px)')`。不要写 `var(--x)px`；CSS 不会把这两个 token 拼成长度。

一条声明可以包含任意多个 bx，也可先 `const size = bx(width.value + 'px')` 再在多个声明复用 size。`const snapshot = width.value; bx(snapshot)` 会生成变量，但 snapshot 本身仍是快照。字面常量直接初始化变量而不创建响应式订阅；普通表达式按框架追踪。表达式应无副作用，框架追踪时可能重复读取。

## 接入

```ts
// Vue 3.5：在 Vue 插件前安装。
import cssBindings from '@zerodep-css/vue/vite';
import vue from '@vitejs/plugin-vue';
export default { plugins: [cssBindings(), vue()] };
```

Svelte 5.20+ 使用 `@zerodep-css/svelte/vite`，放在官方 svelte 插件之前。SvelteKit 使用相同顺序，保留[宿主接入](metaframeworks.md)。Nuxt 模块默认安装转换；关闭 bindings 选项后不能使用 bx。

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

Vue 插件通过官方 AST 扩展缓存可分析的 class 表达式，只缓存样式计算，不冻结其他属性和文字。v-for 使用列表 key 和局部值隔离绑定，替换行对象时更新读取闭包。值变而结果类名不变时可避免额外渲染。`cssBindings({ templateCache: false })` 关闭模板缓存，仍保留 bx 转换。

未知函数、覆写方法、不可追踪普通数据等不强求缓存；这些方法仍按用户实现执行，包括传给它们的 var 字符串。与旧方案不同，bx 不再根据方法身份退回真实值，也不会判断 raw、px 或选择器是否为系统实现。

Svelte 利用原生模板派生，支持 each、const tag、await then/catch 和组件内 snippet 的局部参数。每次 snippet 调用有独立绑定身份。手写 Vue computed（含命名 getter 和可写形式）、Svelte $derived / $derived.by（含命名 getter）同样使用绑定帧，不在派生求值期间创建额外订阅。异步 getter 不支持此保证。

Vue scoped slot 支持 bx，各次调用按参数身份隔离；优先传递有稳定身份的 item 对象，连续变化的原始值参数会建立新的绑定帧。被遮蔽的嵌套循环作用域仍需使用普通运行时 CSS 或将 bx 提到独立行组件。模块引用/导出的 Svelte snippet 不转换 bx，不能引用组件实例宿主。普通无 bx 写法仍可在这些位置使用。

## 选择器、组合和生命周期

`s._hover(s.opacity.raw(bx(alpha)))`、`s._selector`、动画帧和命名全局块都使用相同规则。`css(boundClass, s.color.red)` 会把合成类关联到对应变量；类名可传给子组件，在绑定所有者存活期间有效；所有依赖的绑定都销毁后，私有类和动画会被回收。keyframes 返回的动画名称保持稳定，引用动画的样式类关联其变量。

`globalCss('theme', s._selector('body', s.color.raw(bx(color))))` 更新变量，不再自动重跑整块 globalCss。key、选择器、if/switch 等结构按普通 JS 求值；需要动态结构时由模板、computed/$derived 或显式调用控制。组件卸载清理自己的值规则、订阅及不再拥有活动绑定的私有类/动画，全局块本身仍属宿主，需要删除时调用 `globalCss('theme')`。

组件 setup 中的 bx 创建框架订阅；模板/派生帧由当前框架求值追踪读取。绑定帧按调用位置和列表 key 复用，直到所属组件卸载。无限新增列表 key、反复在事件中创建独立绑定会增加资源，不应把 bx 当成任意位置的临时字符串格式化函数。普通运行时 css 不受此限制。

## 值传输、SSR 与 CSP

本轮沿用私有 CSSOM 值规则，并非 Vue useCssVars 的内联 style 实现。变量声明绑定到引用它们的样式类；跨元素选择器及全局规则需要时使用私有 :root 变量。这样保留单一 class 字符串的传递与组合方式，兼容禁止任意内联 style 的 CSP。用户主题变量仍可按原生继承单独组织。

null/undefined 清空对应变量声明，0 保留。无效值交给浏览器，包括 CSS 变量在计算值阶段失效的原生行为。清空后重新赋值可恢复原有类关联。

SSR 输出初始变量和规则清单，客户端先 hydrateCss 再恢复组件；Nuxt/Kit 处理顺序。nonce 接入、Kit 固定内联样式许可等见[元框架说明](metaframeworks.md)。同页多个独立 SSR 应用需要明确分配宿主身份。流式 SSR、边缘部署、Shadow DOM 尚未验收。

开发构建保留文件、行列诊断；生产不包含位置字典。局部验证使用 `pnpm test:bindings` / `pnpm test:compiler`；浏览器、HMR、元框架和 200/1,000 行性能对照交给 CI，性能模式 bx 与 runtime 分别使用显式绑定和普通运行时路径。

同步的 Vue watch/watchEffect（含 post/sync 变体）与 Svelte $effect/$effect.pre/$effect.root 回调也使用稳定绑定帧，避免每次回调都建立新订阅和私有类。Svelte 原生 effect 不在 SSR 执行；需要首屏样式时在 setup 提供初值。异步回调跨 await 的部分不保证同一帧，连续值优先在 setup、模板或同步框架回调中绑定。
