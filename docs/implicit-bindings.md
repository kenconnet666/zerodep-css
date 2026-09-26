# 隐式响应式值绑定

隐式绑定是可选的构建优化。作者类、`raw`、单位方法继续返回声明字符串，`css()` 仍返回一个类名字符串；不开启插件时，原有运行时路径照常使用。没有新增公开 `var()` 或要求作者传 getter。

## 接入

Vue 3.5 的 Vite 项目把插件放在 Vue 插件之前：

```ts
import cssBindings from '@zerodep-css/vue/vite';
import vue from '@vitejs/plugin-vue';
export default { plugins: [cssBindings(), vue()] };
```

Svelte 5.20 及以上使用原生 `$props.id()` 保持 SSR / 客户端实例身份：

```ts
import cssBindings from '@zerodep-css/svelte/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
export default { plugins: [cssBindings(), svelte()] };
```

SvelteKit 把上面的 `svelte()` 换成 `sveltekit()`，并保留 [Kit 的三个宿主接入点](metaframeworks.md)。Nuxt 模块默认安装 Vue 转换；可用 `modules: [['@zerodep-css/nuxt', { bindings: false }]]` 关闭。构建环境需要工作区固定的 TypeScript 和 magic-string；它们不会进入浏览器运行时。

## 组件写法

Vue `<script setup>` 中先从自己的 context 取得 `s`：

```ts
const width = ref(24);
const top = ref(4);
const side = ref(8);
const red = ref(120);
const box = css(
  s.width.px(width.value),
  s.padding.px(top.value, side.value),
  s.color.rgb(red.value, 20, 30, 0.8),
  s.transform.raw(`translate(${width.value}px, ${top.value}px)`),
);
```

模板使用 `<div :class="box" />`。更新 ref 会更新变量值，`box` 类名保持不变。Svelte 实例脚本写 `let width = $state(24)`，同样调用 `s.width.px(width)`，模板使用 `<div class={box}>`。

一条声明允许多个动态参数、同一变量重复引用及不同单位复用。已知属性方法按参数绑定，单位包含在变量值内；不会生成 `var(--x)px`。复杂 `raw()` 绑定完整的求值结果，其内多个插值都参与框架依赖追踪。值合法性与无效值行为交给浏览器，采用 CSS 变量的原生语义。

`const snapshot = width.value` / `const snapshot = width` 仍是快照；把 snapshot 传给单位方法不会擅自变成响应式。支持先计算 Vue computed / Svelte `$derived` **值**，再传入 `css(s.width.px(value))`。

模板 class 表达式中的 `css()`、调用本组件声明的辅助函数、带 key 的列表均可绑定。模板每次求值为调用分配稳定作用域，列表重排按 key 复用。没有 key 时采用框架循环位置。两个组件实例和两行的不同值不会互相覆盖。

## 组合、动画与全局块

`css(bound, anotherClass)` 或 `css(bound, s.color.red)` 会将合成类加入原有变量的目标选择器，无需先给追加声明生成一个中间类。`css` 的嵌套数组及逻辑条件右侧也参与绑定转换；条件本身继续按原有 JS 求值时机选择结构。类名可以作为字符串传给子组件；不要求在该子组件再运行转换。

`css(s._hover(s.width.px(width)))`、`s._selector` 内的动态声明支持相同转换。选择器快捷方法均以下划线开头，声明片段可以使用数组和条件空项。用户覆写快捷方法或 `_selector` 时，整个片段回退为原始求值；在 `css` / `keyframes` 外提前计算的独立片段仍遵循原有快照语义。

`keyframes(s._selector('from', s.opacity.raw(alpha / 2)), s._selector('to', s.opacity.raw(alpha)))` 支持动态帧值。动画名称不随连续值变化；通过 `animationName.raw(name)` 或 animation 简写使用该名称的类会关联对应变量。

顶层 `globalCss('theme', ...rules)` 使用框架响应式 effect 更新整个命名块。它沿用显式 API 的宿主所有权，组件卸载时停止 effect，但不自动删除同名全局块；需要移除时调用 `globalCss('theme')`。全局 key 应明确、稳定，多个组件写同一个 key 仍遵循后一次调用替换的约定。

## 实现与代价

编译器保留表达式，不在运行时根据一个数字猜测它是不是 ref。core 的内部绑定协议接收读取函数；Vue / Svelte 负责追踪、批量调度及卸载清理。

每个绑定组拥有实例唯一的私有变量名，普通样式类引用这些变量。变量值写到专用 CSSOM 样式表，选择器指向用到该变量的类；因此不用改变 class 字符串契约，也不用自动覆盖元素已有的 style。兄弟选择器或选择器列表可能越过元素后代范围，此时实例私有变量同时设在 `:root`。它们不是用户主题变量，不承担向下覆盖的主题 API。

首次绑定会增加一条值规则，实例之间的类也不一定共享；这是保留字符串 class、任意传递和禁止内联 style 的 CSP 支持所付出的成本。连续值更新复用已有规则。模板列表的绑定缓存保留到所属组件卸载；长期无限增加全新 key 的同一组件仍会增长，应合理划分组件生命周期。普通类与动画沿用宿主缓存，卸载只移除该组件的私有值规则，不承诺自动清除一切历史类。

## 明确的回退边界

- Vue 首版处理 `<script setup>`，Svelte 处理实例脚本；普通 `.ts`、Options API 和跨文件辅助函数不做隐式转换。
- 选择器、media、if/switch 等**结构**依然由普通 JS 执行。要让结构随状态变化，放在模板调用或 computed / `$derived` 的原有运行时求值路径中；setup 中一次执行的 if 不会被改造成响应式结构。
- computed / `$derived` 内的 **css 调用**保留运行时行为并给出构建提示，避免在纯派生阶段额外注册订阅。
- 未知字符串加工函数、spread、自增/赋值等表达式保留原始求值并提示。编译器不能证明任意函数无副作用，传给动态声明的普通表达式函数应当纯净。
- Vue slot 参数、被遮蔽的嵌套循环变量和 Svelte snippet 参数采用运行时回退。模板上的动态 class 字符串插值、render 函数不属于当前转换范围。
- 用户覆写属性方法时，运行时比较方法身份，保留用户自己的实现；开发构建提示回退。原始 const 初始化的回退不会凭空获得响应性，需要作者用模板或派生求值组织更新。
- 同一页面多个独立 SSR 应用需要明确分配 Vue `app.config.idPrefix` 等宿主身份；首版验收每页一个元框架应用，不承诺岛屿 / 微前端跨宿主合并。

## SSR 与 CSP

服务端输出初始变量值，恢复清单包含值规则和引用它们的类。客户端先 `hydrateCss()`，再挂载或恢复组件。Nuxt / Kit 接入负责调用顺序。Svelte 的 `render(...).body` 必须在活动宿主回调内读取，因为渲染可能延迟到读取结果时发生。

浏览器可在首次使用前调用 `configureCss({ nonce })`。Node SSR 宿主接受 nonce；手工输出使用 `serializeCssRules(rules, { nonce }).nonceAttribute`。Nuxt 读取 `event.context.zerodepCssNonce`，Kit 读取前置 hook 设置的 `event.locals.zerodepCssNonce`；应用负责生成请求独立的 nonce 并设置匹配的 CSP 响应头。

动态绑定通过有 nonce 的样式标签和 CSSOM 更新，Vue/Svelte 独立组件及 Nuxt 验证策略包含 `style-src-attr 'none'`。SvelteKit 本身的容器和无障碍播报节点使用固定内联样式，Kit 夹具用 `unsafe-hashes` 加这两段内容的精确 SHA-256 许可，不允许任意内联样式。升级 Kit 时需要重新验证这一框架边界。静态部署已单独验收，但不能把构建时固定 nonce 当作请求独立 nonce；静态站点的 CSP 策略由部署方式另行配置。流式 SSR、边缘运行环境和 Shadow DOM 尚未纳入此阶段验收。

焦点验证：`pnpm test:bindings`、`pnpm --dir .research/string-css-probe test:bindings`；性能探针：`pnpm --dir .research/string-css-probe probe:bindings`。时间只作诊断，不作为 CI 硬阈值。
