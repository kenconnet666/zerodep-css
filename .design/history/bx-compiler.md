> 历史记录：此页描述已移除的显式宏方案；当前 API 以 [自动 CSS 编译](compiler.md) 为准。

# 显式 bx 编译：首版使用与边界

`bx` 原名 ibind；三个包现在只导出 `bx`，不保留 ibind/cx 别名。`bx` 标记编译绑定，不是运行时 identity 函数，也不负责 class 拼接。未使用编译插件时调用它会明确报错。

## 安装位置

在官方 Vite 插件前启用对应适配器的编译插件：

```ts
// Vue
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { bxPlugin } from '@zerodep-css/vue/compiler';

export default defineConfig({ plugins: [bxPlugin(), vue()] });
```

```ts
// Svelte
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { bxPlugin } from '@zerodep-css/svelte/compiler';

export default defineConfig({ plugins: [bxPlugin(), svelte()] });
```

`bxPlugin({ root })` 可显式指定共同项目根目录；省略时采用 Vite root。手动接入可调用 `transformBx(source, filename, { root })`，返回 `{ code, map }` 或无转换时的 null。文件必须位于 root 内，客户端和服务端使用相同 root 规则；文件 ID 使用项目相对路径，不写入本机 checkout 绝对路径。

compiler 子路径面向构建环境，使用当前锁定的框架编译器、TypeScript AST、magic-string 与源码映射编码器。两端共用的词法/单位分析在构建时内联，不增加产品包。默认浏览器入口不导入这些模块；生成组件只依赖框架原生能力和 `@zerodep-css/core/binding` 的内部值格式化入口，业务不应直接依赖后者。

## 作者写法

Vue script setup 中：

```ts
import { computed, ref } from 'vue';
import { bx, useStyleRuntime } from '@zerodep-css/vue';

const { css } = useStyleRuntime();
const width = ref(20);
const color = ref('red');
const panel = computed(() =>
  css((s) => {
    s.color.raw(color.value);
    s.width.px(bx(width.value));
  }),
);
// 模板：<div :class="panel"></div>
```

Svelte 5 runes 组件中：

```ts
import { bx, useStyleRuntime } from '@zerodep-css/svelte';

const { css } = useStyleRuntime();
let width = $state(20);
let color = $state('red');
const panel = $derived(
  css((s) => {
    s.color.raw(color);
    s.width.px(bx(width));
  }),
);
// 模板：<div class={panel}></div>
```

也可直接把 `css(s => { ... })` 写在原生元素 class 表达式中。Vue 编译器生成只跟踪普通依赖的 computed，Svelte 保留原生模板计算；两者都把显式绑定读取移出样式回调。脚本 const 仍保持一次计算，computed/$derived 保持原生派生语义，不自动把普通 const 变成响应式。

## 已支持

- 从 core 或对应适配器直接导入 bx，包含导入别名；css 来自对应适配器 useStyleRuntime 的顶层解构，支持 css 属性的本地别名。
- Vue script setup、Svelte 实例脚本中的原生 HTML 元素；内联 css、同组件的 const/computed/$derived class，及多个直接使用点。
- token/raw 标量、单位方法、多参数单位方法、普通参数和 bx 混用；运行时检查标量、有限数值、单位参数范围、token 与 CSS 值边界。
- 同一变量在不同单位中使用；模板字符串中的独立 CSS 值及明确单位后缀，例如 `translate(${bx(x)}px, ${bx(y)}px)`。x/y 各自绑定，不绑定整段 transform，不产生 `var(--x)px`。
- 元素条件挂载、单层 keyed 数组循环的简单局部变量、重排、实例隔离和卸载。Vue 循环在原模板使用点按实际行和索引缓存派生值，隐藏行不提前计算，单个绑定更新不重跑样式回调。
- Vue 的显式 style 字符串/对象/数组，Svelte 的显式 style 属性和 style 指令。生成变量使用保留前缀 `--zbx-`；业务不要写入该前缀，生成绑定拥有其优先级和生命周期。
- 完整字符串 SSR 初值、请求隔离、hydration 复用、生产构建、独立 tarball 消费及官方 Vite HMR。

数值当前值不进入 class 哈希。绑定更新只更新元素变量；普通值继续重算/换 class。若某个值也在普通声明中读取，或参与外层普通依赖，则该部分仍触发重算。组件卸载只释放自身绑定，已有 class 规则保留到 runtime/context.dispose，HMR 也不改变该合同。

## 明确限制

- 含 bx 的回调首版限直线声明；暂不支持回调内 if/循环/提前返回、嵌套 builder 回调的绑定、捕获回调局部变量、具有调用/赋值/自增副作用的绑定源。先在组件作用域派生，再传入 bx。
- 内联表达式必须直接调用 css；脚本 class 限未导出的 const 直接 css、Vue computed 的直接 css 箭头函数、Svelte `$derived(css(...))`。不支持 `$derived.by`、任意包装函数或 class 拼接/再别名。
- 含 bx 的 class 不支持组件透传、跨文件导出、其他模板属性或脚本用途；可识别的外逃给出源码位置诊断，不静默遗漏绑定。
- 元素上的动态属性 spread/无参数 v-bind、slot/snippet、异步边界、嵌套或解构循环、非 keyed 循环、SVG/MathML、Teleport、动态 keyframes/global 未纳入首版。已有普通样式能力不受这些限制。
- 不支持引号、转义或标识符片段中的模板插值，也不把未知字符串拼接猜测成 CSS 变量。
- 具有多参数联合备选约束的单位方法，首版只允许 bx 与数值常量混用，避免在元素更新时重新读取 const 样式本应保持快照的普通参数。
- Vue 普通 script、Svelte module script、JSX、跨文件宏重导出及无法静态解析的动态调用没有编译接入；保留未编译 bx 的运行时报错。

原生语言服务负责 TS 参数类型、补全和跳转；宏作用域/宿主诊断由构建插件提供，未宣称这些新诊断已经进入 LSP。源码映射保留原始组件内容，生成绑定片段指回对应 bx 调用。

## 验收入口

- `pnpm test:unit --no-build` 包含双框架编译器正反例及格式化边界测试。
- `pnpm test:browser:frameworks --no-build` 包含原响应式回归、bx 浏览器/SSR 场景及真实 Vite HMR。
- `pnpm test:consumer --no-build` 使用仓库外 tarball 安装 compiler 子路径并经官方插件生产构建。
- `pnpm test:types --no-build` 和原生 zerodep_lsp 验证作者代码；`pnpm size:check --no-build` 检查默认浏览器入口体积及编译依赖泄漏。

上述 `--no-build` 仅在本轮已经成功 build 且源码未再改变时使用。`.research/bx/probe.mjs` 保留原始候选路径比较，不替代产品测试。实际报告在忽略的 `test-results/bindings`、`bindings-hmr`、`consumer` 和 `bundle`。
