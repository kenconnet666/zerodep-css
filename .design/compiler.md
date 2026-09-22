# 自动 CSS 编译与运行时回退

Vue/Svelte 的编译入口统一为 `cssPlugin` 与 `transformCss`。公开 `bx`、`Binding` 及旧插件名称已移除；直接传入普通变量。core 仍可独立在运行时使用，框架自动优化需要安装编译插件。

## Vite 接入

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { cssPlugin } from '@zerodep-css/vue/compiler';

export default defineConfig({ plugins: [cssPlugin(), vue()] });
```

Svelte 使用 `@zerodep-css/svelte/compiler` 的同名入口，后接官方 `svelte()` 插件。插件只处理完整组件源码；官方插件继续负责响应式、SSR 和 HMR。直接转换接口为 `transformCss(source, filename, { root?, debug?, bindings? })`，无改动时返回 null。

严格 CSP 禁止 style 属性时使用 `cssPlugin({ bindings: 'runtime' })`。动态值保留原生运行时类名更新，不生成元素变量绑定；静态准备与开发来源仍可用。配合请求 runtime 的 nonce，可在 `style-src-attr 'none'` 下保持 SSR 首屏、hydration 和后续更新一致。该选项不移除应用自己编写的 style 属性，服务端和客户端应使用同一编译配置。

## 作者写法

在组件初始化时取得 `const { css } = useStyleRuntime()`，在原生元素的 class 中直接调用：

```ts
css((s) => {
  s.name('panel');
  s.display.flex;
  s.padding.px(8, gap);
  s.color.raw(color);
  s.hover((h) => {
    h.opacity.raw(opacity);
  });
});
```

- 单位参数整组读取和验证一次，生成一个元素变量。联合数值范围、参数个数和分隔符保持原合同。
- raw/token 的可证明值和完整模板字符串自动绑定。空值仍省略声明；CSS-wide、显式 cssVar，以及属性语法无法证明的未知/未来值保留直接声明，必要时重算类名，避免改变覆盖、fallback 和继承。
- 语法表本身不能证明浏览器支持。变量化进一步限定为基础单位、数值、常见颜色/变换等保守形式；未确认的关键字、较新单位与复杂数学表达式使用直接声明。由此保留浏览器忽略不支持声明时的前置 fallback。
- 静态关键字、字面量、同宿主 selector/media/hover 等结构可准备；字面量能够决定的 if/switch 只为可达分支生成绑定。selector 选中后代、兄弟、祖先或未知伪元素时保留运行时，避免变量不可达或被嵌套实例遮蔽。
- 无动态结构的可准备样式在第一次使用时完整验证，后续通过当前 runtime 的 256 项缓存跳过构建和解析。源码摘要随 HMR 内容变化；清理计算缓存不删除已注册规则。
- raw 字符串校验按组件绑定持有最多 128 项成功结果，合计最多 65,536 个 UTF-16 字符，不建立跨请求缓存。超大合法值仍正常校验与输出，但不长期驻留缓存。

## 支持和回退边界

自动路径支持直接原生 HTML class 使用点，以及保留原模板守卫的单层 keyed 简单数组循环。Vue 使用原生 computed 和按实际使用点的列表缓存；Svelte 使用原生 style 指令。

不能安全提升的回调整体保留运行时行为：未知 if/switch、函数调用和副作用、局部赋值、派生 Css 类型、动态结构参数。脚本 const 保留定义时快照，computed/$derived 保留原生重算；组件透传、class 拼接、复杂循环/slot/异步边界、SVG/MathML 也保持原有源码。回退可能随动态值产生新的哈希类名，这是明确保留的能力。

被提升的变量读取应无副作用；不要在 getter 中隐式写状态。表达式含调用或局部写入时不会提升。资源与全局样式继续使用运行时所有权，不能把元素绑定写到全局 :root。

回调签名也属于安全证明：自动路径只接受一个无默认值、非 rest 的 builder 参数；额外参数、参数初始化、async 和生成器（包含嵌套结构回调）整体回退。这样不会因准备缓存跳过参数初始化的副作用，也不会绕过运行时的同步回调校验。

## 诊断和迁移

开发 Vite 默认记录项目相对文件、行和列；生产默认关闭，可由 `debug` 显式控制。`s.name(...).config({ debug })` 控制整份根样式的可读名称和诊断，来源不参与 CSS 内容哈希。

将 `bx(value)` 改为 `value`，把 `bxPlugin/transformBx` 改为 `cssPlugin/transformCss` 并删除 bx 导入。脚本内需要持续响应的样式继续写 computed/$derived；若需要自动变量优化，将可安全声明直接放在元素 class 中。重新构建服务端和客户端产物，不能混用不同版本生成的变量 ID。

旧宏计划和验收记录保留为历史依据，不代表当前 API。完整生产验收和剩余主题工作见 [生产化计划](production-plan.md)。
