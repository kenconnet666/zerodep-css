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

`ic('&:hover', s.color._hover)` 由浏览器处理选择器，`ic('@media (max-width: 600px)', ...)` 由浏览器处理条件。主题变量可沿 DOM 继承到 hover 分支；撤销子树覆盖后，其常态色和 hover 色重新继承父级。两个连续值元素共用同一个类名，但各自的变量值互不影响。实际 DOM 移到主题边界外时不会自动保留原边界变量，这个示例不承诺 Teleport / portal 的主题转移。

`initialWidth` 与 `initialTheme` 是挂载 / SSR 的初始输入，不是受控 props；后续按钮操作修改组件内状态。模块顶层只保存类型化 context 和固定主题数据，作者实例与完整类名在活动组件 / 请求内创建。

## 运行与已验证边界

仓库根运行 `pnpm install --frozen-lockfile`、`pnpm build`，然后进入 `.research/string-css-probe` 安装其固定依赖。运行：

```powershell
pnpm --dir .research/string-css-probe test:examples:browser
pnpm --dir .research/string-css-probe test:examples:hydration
```

默认使用本机 Chrome；CI 使用 `CSS_PROBE_BROWSER_CHANNEL=chromium`。测试直接加载上述组件，覆盖静态值、有限状态切换、运行时新值、无关状态更新、连续变量、子树主题隔离、hover 与 media。两个包的类型检查也包含示例。

`test:examples:hydration` 在两个并发 Node 请求中分别渲染亮色 / 24px 和暗色 / 40px，再分别恢复客户端并执行与浏览器用例相同的交互。它验证：

- 客户端脚本运行前，服务端 HTML、主题变量、声明与计算样式已经正确。
- 并发请求不混入其他请求特有的声明，重复请求生成同一份规则清单。
- hydration 复用原 DOM 元素，不出现告警，不创建第二张样式表，不重复插入已有规则。
- 首次更新与重复分支切换结果正确；有限状态预热后不继续增加规则，连续变量与主题切换不增加规则，开放动态新值按需增加规则。
- 卸载后重新挂载复用同一文档规则；新组件回到自己的初始状态，不继承上一个组件的临时状态。

测试使用[Vue 服务端驱动](../.research/string-css-probe/fixtures/vue-examples-server.ts)和[Svelte 服务端驱动](../.research/string-css-probe/fixtures/svelte-examples-server.ts)。完整组件渲染必须包在 `withCssHost()` 的请求生命周期内；浏览器必须先收到服务端样式，再在首次挂载前调用一次 `hydrateCss(rules)`。同一文档的普通后续挂载不重复调用 `hydrateCss()`。

测试结果不代表生产化已经全部完成。Nuxt/SvelteKit 的自动接入、流式 SSR、HTML 安全序列化、CSP/nonce、Teleport / portal 和 HMR 仍需要各自的接入与验收。
