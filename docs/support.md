# 支持矩阵与使用边界

当前版本为 0.2.0，产品包是 private 的 `@zerodep-css/core`、`@zerodep-css/vue`、`@zerodep-css/svelte`。Nuxt 4 与 SvelteKit 2 是首版目标矩阵，专用适配包及 Node SSR、静态预渲染验收仍在后续阶段；现有 Vue/Svelte 适配不等于元框架接入已完成。最终生产验收状态以[实施记录](production.md)和[验证记录](validation.md)为准。

## 当前平台

| 领域     | 当前范围                                                                                   |
| -------- | ------------------------------------------------------------------------------------------ |
| 工具链   | Node 24、pnpm 10.34.5；依赖版本由 workspace catalog 固定                                   |
| 浏览器   | 本地默认已安装 Chrome；Chromium、Firefox、WebKit 是项目验证矩阵，具体 CSS 特性由浏览器决定 |
| Vue      | Vue 3.5；原生 computed/watch、provide/inject、Teleport、客户端与完整字符串 SSR             |
| Svelte   | Svelte 5；原生 rune、context、客户端与完整字符串 SSR，rune 模块走官方编译器                |
| 样式宿主 | Document、ShadowRoot、显式 insertionPoint、CSP style nonce                                 |
| 独立消费 | 仓库构建与 tarball 检查属于验收门槛；目录迁移后的本地独立消费已通过，三个包仍 private      |

运行时 CSS 是正式能力。`css` 的回调可使用普通函数、`if`/`switch` 和真实 `Css` 继承；`css` 执行回调后同步返回 class 字符串，可选编译插件只优化能证明等价的路径。原生 nesting、layer、scope、容器查询等不做通用前缀或 polyfill；不支持的根规则若注册失败，不会被记录为成功。完整字符串 SSR 已有基础 Vue/Svelte 接入；流式分块 SSR、Nuxt/SvelteKit 专用请求流程以及边缘运行环境尚不在当前已验收范围。

core 根入口只提供 `Css`、`cssVar`、`defineTheme` 三个运行值和作者类型；内置预设从 `/themes` 导入。Vue/Svelte 根入口保留 `createStyles`、`Css`、`defineTheme`、`cssVar`、`keyframes` 五个运行值。完整引擎在 `internal/runtime`，构建时复制到适配包各自的 `dist/runtime`；`@zerodep-css/core/internal` 与适配包的 `#runtime` 均不是业务 API。引擎迁移后的本地类型、浏览器和独立消费已通过；跨平台结果以对应提交 CI 为准。

## 项目入口与所有权

应用的 `styles.ts` 通过 `createStyles({ cssType?, theme? })` 固定作者类型和默认主题，并导出带类型的 `useCss`、`useTheme`、`provideTheme`、`useGlobalCss` 与 `createHost`。该模块可共享，但不得在模块顶层创建应用或请求 runtime。每个 Vue 应用或 SSR 请求、每个 Svelte 根或 SSR 请求各自调用 `createHost(options)`；服务器先渲染组件，再输出 `host.renderStyles()` 与 `host.renderManifest()`，最后在 `finally` 中 `host.dispose()`。浏览器先用 manifest 创建 host，随后 hydration，完成后调用 `host.completeHydration()`。

Vue 使用 `host.install(app)`，应用卸载会释放 host；同一 host 不属于第二个 Vue 应用。Svelte 根组件初始化时调用 `host.provide()`，卸载只释放对 host 的认领，以便 HMR 重挂；应用入口在最终 `unmount` 后显式 `host.dispose()`。组件负责释放自己声明的全局槽位与订阅，不释放共享 host。同 key 同序列化内容共享，最后一个 owner 卸载才释放；多个 owner 存活时禁止改值，剩单个 owner 才能更新。动态全局在根组件声明一次，或为各组件选不同稳定 key。提前 host.dispose 也会停止已登记的全局 watcher/effect；完整组件卸载仍由框架负责。

## 值、组合与编译边界

同一上下文内，同一规范属性名后写直接替换前写，前写即使带 `important` 也会删除。不同属性的简写与长属性保持书写顺序，交给浏览器按原生层叠解释。单位方法任一参数为 `null` 或 `undefined` 时省略整条声明，`0` 仍有效；`raw` 接受原生值文本并检查声明结构，不因库内语法表不认识新值就拒绝。局部主题的 `null`/`undefined` 表示继承，显式传入定义的 `defaults` 才恢复预设值。

`css(base, override)` 可从左到右组合本 host 已知 class 和回调；数组可递归展开，`false`/`null`/`undefined` 为空项，普通第三方 class 原样保留。只有本 host 掌握的样式参与属性归并，第三方规则仍由浏览器层叠。已有 class 字符串只是快照：组合时不能复制该元素原有的内联变量，动态值仍应在原组件中由原生响应式读取。HTML class 字符串的排列也不代表 CSS 覆盖顺序。

自动编译目前只分析同一 SFC 中能直接追踪的 `createStyles`/`useCss` 来源，包括直接链式调用；跨项目模块的调用保守保留运行时。安全动态值可成为元素变量绑定，CSS-wide、空值及无法证明等价的结构保持原声明或运行时路径。严格 CSP 禁止元素 style 属性时，可选插件使用 `cssPlugin({ bindings: 'runtime' })` 与请求 nonce；应用自己写的 style 属性仍由应用负责。脚本中的普通 `const` class 是快照，响应式重算由 Vue computed 或 Svelte `$derived`/模板承担。

适配器完整运行时入口的体积与 core 中 `cssVar` 等小入口不同。完整引擎包含属性数据、解析、序列化、宿主注册和缓存。普通结果缓存最多 256 项、键不超过 65,536 字符；绑定字符串缓存最多 128 项且合计不超过 65,536 个 UTF-16 字符。缓存可驱逐，但已注册规则可能仍被 DOM 或已保存的 class 字符串使用，不能随缓存淘汰删除。`maxRecords` 可限制记录增长，超限会拒绝新增且不破坏旧记录。`name` 和 `config({ debug })` 提供按需来源诊断，不改变内容哈希；服务端与客户端恢复应使用同一构建产物。
