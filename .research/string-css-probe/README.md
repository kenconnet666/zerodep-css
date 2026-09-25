# 字符串 CSS 作者写法探针

这是研究工作区，不是稳定公开 API。`legacy/` 保存早期单宿主探针，`fixtures/` 是当前 Vue/Svelte 适配器的组件与驱动，`results/` 保存两阶段的原始样本。当前公开写法中，`s.color.red` 是只读声明字符串，`s.width.raw(value)` 返回拼出的声明字符串；适配器的 `css(...parts)` 拼接、缓存并注册规则，最后返回类名。重复属性交给浏览器按 CSS 层叠处理。

```ts
const s = useCss();
const className = css(s.color.red, s.width.raw(`${width}px`));
```

`raw()` 按属性提供值提示：颜色可提示 `red`、`transparent` 等，宽度可提示 `auto`、`min-content`，透明度可提示 `inherit` 等。普通字符串仍可直接传入，例如 `s.color.raw('color(display-p3 .1 .2 .3)')`、`s.width.raw('var(--size)')`。宽度的非零数字用 `s.width.px(24)` 指定像素，透明度可用 `s.opacity.raw(0.5)`；类型提示不额外验证浏览器 CSS 值。

主题关键字通过继承对应属性链添加，不需要注册另一套全局类型。例如：

```ts
import { Css, WidthCss } from '@zerodep-css/core';

class ThemeWidthCss extends WidthCss {
  readonly _md = this.raw('48rem');
}

class ThemeCss extends Css {
  override readonly width = new ThemeWidthCss();
}

const s = new ThemeCss();
s.width._md; // 'width:48rem;'
s.width.raw('20px'); // 原有能力继续可用
```

应用可以直接继承 `Css` 自建主题，也可以继承 `ThemeCss` 后再次扩展 `width` 属性链；对应的两层扩展示例已纳入 `core` 类型检查。

## 运行

在本目录使用 Node 24、pnpm 10.34.5：

```powershell
pnpm install --frozen-lockfile
pnpm probe
pnpm probe:author-storage
pnpm semantics
pnpm test:ic
pnpm test:mup:browser
pnpm test:mup:server
pnpm test:mup:hydration
pnpm test:mup:exports
```

`probe` 使用 Vue 3.5.43、Svelte 5.57.0 的正式编译器生成生产模式浏览器组件，在 Chrome 153 中测量每种写法的 200 个元素。每种写法在同一浏览器中测三轮、轮换执行顺序，表中数字为每轮中位数在两次完整运行中的范围。计时包含框架刷新和布局读取，不是单独的 `css()` 微基准。两次原始记录分别在 [results-a.json](results/results-a.json) 和 [results-b.json](results/results-b.json)；两次均通过 200 个元素的计算样式和规则数断言，第二次额外通过资源清理断言。

`probe:author-storage` 是独立的合成微基准，用于比较 502 条属性链采用实例字段、共享原型及空 `Proxy` 时的创建与读取成本；测法、结果和局限见[代码生成审阅稿](../css-author-generation-design.md)。

`probe:static-fields` 只用 TypeScript AST 提取生成类中的固定声明，展示条件分支和 `ic()` 的候选规则以及动态值回退；它不改写组件，局限与后续方向见[直接字段优化研究](../direct-field-optimization-research.md)。

`probe:runtime` 在 Chrome 中分段测量当前规则注册器的命中、哈希、短声明编码、CSSOM 写入与已启动 Worker 的消息往返；这不是 CI 性能门槛，结果和适用边界见[并行与 SIMD 研究](../runtime-parallel-simd-research.md)。

`test:mup:*` 使用当前 Vue/Svelte 适配器，分别验证浏览器上下文、两个 Node SSR 请求的规则隔离、客户端 hydration 去重及条件导出。它们是最小可用验收，不替代后续的 Nuxt/SvelteKit 集成测试。

设置 `MUP_DIST=1` 后，MUP 浏览器、SSR、hydration 和性能脚本改用仓库根 `pnpm build` 生成的包入口；不设置时读取工作区源码。性能原始样本与[阶段报告](../minimum-usable-performance.md)分开保存，旧的 `results-a/b.json` 不代表当前适配器。

这两份原始计时采于代码迁入 `core` 之前。迁入后重新运行 `pnpm probe` 已通过相同正确性断言；旧计时仅用于观察方案差异，不作为新实现的性能数字。

## 结果

“有限值”让所有元素在 16 种宽度间变化 30 次；“新值”让每次更新产生 200 种新宽度，共测 5 次。表中是更新总耗时，单位毫秒，越低越好。

| 写法                               | Vue 有限值 | Svelte 有限值 |  Vue 新值 | Svelte 新值 |
| ---------------------------------- | ---------: | ------------: | --------: | ----------: |
| 模板中直接 `css(...)`              |  39.8–42.0 |     40.6–42.6 | 20.5–21.7 |   19.1–21.2 |
| Vue `computed` / Svelte `$derived` |  40.2–42.7 |     43.5–45.0 | 18.9–19.1 |   18.0–21.9 |
| 预先注册 16 个类并查表             |  38.8–39.1 |     36.4–37.0 |    不适用 |      不适用 |
| 一个类 + 元素 CSS 变量             |  84.5–84.8 |     82.3–84.2 | 14.2–14.4 |   13.3–14.4 |
| Emotion 接收相同字符串片段         |  50.9–51.4 |     51.0–51.4 | 25.7–25.8 |   26.7–28.9 |

有限值场景中，前四种类注册方案最终有 16 条规则，CSS 变量方案只有 1 条；新值场景中，类注册方案最终有 1400 条规则，CSS 变量方案仍只有 1 条。Vue 模板直接调用 `css()` 时，20 次无关更新额外调用 4000 次；`computed` 为 0 次。Svelte 的直接模板在这项无关更新里也是 0 次，故 `$derived` 在这里没有额外优势。真正的宽度更新仍会使 Vue `computed` 和 Svelte `$derived` 调用 `css()`，它们不能代替规则缓存。

这组结果支持两个不同的优化：有限、可枚举的值优先复用已有类；连续变化且不断出现新值的声明考虑编译成 CSS 变量绑定。**CSS 变量并非普遍更快**：本实验中有限值时，每个元素更新内联变量的成本超过了命中类缓存的成本。此探针的缓存器只有一个浏览器宿主和一张样式表；它尚未实现 SSR、多宿主、并发请求隔离、nonce、全局样式或错误恢复，因此速度结果不能外推为正式框架全面优于 Emotion。

## 响应式 CSS 变量绑定规划

Vue SFC 的 [`v-bind()`](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css) 可以直接作为参照。用当前安装的 Vue 3.5.43 编译 `.box{width:v-bind(width)}`，得到 `.box[data-v-probe]{width:var(--probe-width)}`；脚本生成 `useCssVars` 读取 `width.value`。Vue 运行时把该变量写到组件根元素的内联样式，响应式值变化时更新。它没有为每个值重新生成 CSS 规则。

我们的编译器沿用这个简单机制：把可识别的响应式声明值替换为稳定的 `var(--...)`，静态类只生成一次，再通过 Vue `:style` 或 Svelte 的 style 指令把当前值绑定到使用该类的元素。Vue 的 SFC `v-bind()` 将变量放在组件根元素；我们的 `v-for` 中每项可以有不同值，因此绑定位置是各项自己的元素。无需检查 CSS 值是否合法或模拟级联；编译后按浏览器原生 CSS 变量语义执行。编译器尚未覆盖的结构性变化继续调用运行时 `css(...)`。Vue 可用 `computed`、Svelte 可用 `$derived` 避免重复计算，但它们不是绑定变量的必要条件。

`pnpm semantics` 只记录直接声明和 CSS 变量在无效值下各自的原生行为，不作为绑定转换的限制条件。实现时需要让生成的变量名稳定，并与元素已有的 `class`、`style` 一起工作。

## 选择器片段试验

`ic(selector, ...parts)` 只返回嵌套 CSS 字符串，外层 `css()` 仍只注册一次规则。它同时用于伪类、子元素和媒体条件，不需要给每一种条件提供专用入口：

```ts
const s = useCss();
const buttonClass = css(
  s.color.red,
  ic('&:hover', s.color.blue),
  ic('&:active', s.color.green),
  ic('& > .icon', s.opacity.raw('0.6')),
);
```

`selector` 在 TypeScript 中提示常见的 `&:hover`、`&:active`、`&:focus-visible`、`&::before` 等写法，也接受任意普通字符串，例如 `ic('&[data-state=open]', s.color.blue)`。提示列表不限制原生选择器或 `@` 规则。

`pnpm test:ic` 用当前 Chrome 验证了嵌套规则经 CSSOM 插入后，默认、hover、active、子元素和媒体条件均生效；悬停期间更新元素上的 CSS 变量，也会立即改变样式。这个测试只覆盖浏览器原生嵌套行为；`ic()` 本身不解析或改写选择器，响应式值自动绑定仍待实现。

当前 Vue/Svelte 适配器已有浏览器文档宿主、Node 请求隔离和 hydration 测试。Nuxt 4、SvelteKit 2 专用封装及响应式 CSS 变量编译仍待实现；旧探针中的单宿主性能数字不能代替当前适配器的[性能记录](../minimum-usable-performance.md)。
