# Vue / Svelte 可执行样式示例

这些是工作区用法示例，不是新增的公共 API。测试直接编译以下组件，文档不再复制整份组件实现：

| 职责                                        | Vue                                      | Svelte                                            |
| ------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| 请求 / 组件级作者实例、亮暗变量边界         | [App.vue](../vue/examples/App.vue)       | [App.svelte](../svelte/examples/App.svelte)       |
| 样式组合、响应式分支、hover/media、子树覆盖 | [Styles.vue](../vue/examples/Styles.vue) | [Styles.svelte](../svelte/examples/Styles.svelte) |
| 项目类型化上下文                            | [context.ts](../vue/examples/context.ts) | [context.ts](../svelte/examples/context.ts)       |

共用的[示例作者与主题](../core/examples/theme.ts)展示两层继承：`ThemeCss extends Css` 添加变量关键字，`AppCss extends ThemeCss` 再添加应用自己的宽度关键字。亮暗色值只是这个示例的数据，不是系统内置主题 API。

## 根据值的形态选择写法

- 静态组合在组件初始化时调用一次 `css()`，后续绑定返回的类名。
- 相邻静态片段可提前拼成字符串前缀，但保留原有声明顺序。
- 少量常用状态先注册完整组合，Vue `computed` / Svelte `$derived` 只选择类名。两者的派生计算都应保持纯粹，不在其中调用会写规则的 `css()`。
- 开放动态值保留普通 `if` 和同步运行时 `css()` 路径，不强求预枚举状态。
- 连续值可以用 `s.width.raw('var(--demo-width)')` 这样的稳定规则，再用 Vue `:style` 或 Svelte `style:--demo-width` 更新具体元素。这里只是原生变量绑定，没有自动转换编译器。

示例把开放运行时宽度和变量宽度分别绑定到两个按钮，便于验证：前者新值可增加规则，后者连续变化不新增规则。有限状态预注册也不是普遍最优，许多稀疏状态应继续按需走运行时。

Vue 的[计算属性约束](https://vuejs.org/guide/essentials/computed)与 Svelte 的[派生值约束](https://svelte.dev/docs/svelte/$derived)是这些写法的依据。

## 主题与选择器

作者关键字 `_text` / `_hover` 是稳定的 `color:var(--demo-text);` 等字符串；应用根元素设置变量，子树只覆盖自己的变量，兄弟继续继承根元素。切换亮暗色只更新变量，不替换作者实例，不生成新的主题类名。

`ic('&:hover', s.color._hover)` 由浏览器处理选择器，`ic('@media (max-width: 600px)', ...)` 由浏览器处理条件。主题变量可沿 DOM 继承到 hover 分支。实际 DOM 移到主题边界外时不会自动保留原边界变量，这个示例不承诺 Teleport / portal 的主题转移。

`initialWidth` 与 `initialTheme` 是挂载 / SSR 的初始输入，不是受控 props；后续按钮操作修改组件内状态。模块顶层只保存类型化 context 和固定主题数据，作者实例与完整类名在活动组件 / 请求内创建。

## 运行与已验证边界

仓库根运行 `pnpm install --frozen-lockfile`、`pnpm build`，然后进入 `.research/string-css-probe` 安装其固定依赖。运行：

```powershell
pnpm --dir .research/string-css-probe test:examples:browser
```

默认使用本机 Chrome；CI 使用 `CSS_PROBE_BROWSER_CHANNEL=chromium`。测试直接加载上述组件，覆盖静态值、有限状态切换、运行时新值、无关状态更新、连续变量、子树主题隔离、hover 与 media。两个包的类型检查也包含示例。

本阶段浏览器用例通过；同一批组件的并发 SSR 与 hydration 验收接下来补充。Nuxt/SvelteKit 的自动接入仍未提供。
