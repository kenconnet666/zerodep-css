# 当前交接与换机恢复

更新：2026-09-23。本项目为 core/vue/svelte 三包的混合 CSS 框架，保留运行时与复杂场景回退，自动编译使用 cssPlugin/transformCss，公开 bx 已移除。当前状态以 [生产验收](production-audit.md) 与 [执行记录](production-plan.md) 为准，history 下的旧 API 不应继续用于实现。

## 取得工作区

仓库：`https://github.com/kenconnet666/zerodep-css.git`。本轮工作在 `feat/native-reactivity`；换机后明确检出该分支，再核对远端 CI 与提交。不要仅凭默认分支或旧交接中的提交号判断状态。

```powershell
git clone https://github.com/kenconnet666/zerodep-css.git
cd zerodep-css
git switch feat/native-reactivity
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm lsp:setup
```

环境使用 Node 24、pnpm 10.34.5、PowerShell 7。不升级全局工具来绕过版本约束。产品代码、测试入口和源码诊断均不依赖原机器的绝对目录。

## 语言服务

`.codex/config.toml` 被忽略，由 `pnpm lsp:setup` 按当前机器重建；必要时重启 Codex 以加载项目 MCP。不要复制旧配置中的本机路径或修改全局 Codex 配置。

优先使用 zerodep_lsp 的诊断、hover、definitions、references、completions；会话没有该 MCP 或连接关闭时使用 `pnpm lsp:inspect <项目相对文件路径...>`。必须检查 complete=true，超时不代表无错误。桥或依赖变化后执行 `pnpm lsp:verify`；完整语义验收也由 CI 执行。

## 当前主要入口

- core：css/createRuntime/createStyleContext、Css 类与 extendProperty、defineTheme、全局样式与动画资源。
- Vue/Svelte：useStyleRuntime、useGlobalCss、provideStyleContext、provideTheme；Vue 应用入口另有 installStyleContext。
- 编译器：适配器的 `/compiler` 子路径提供 cssPlugin/transformCss。内部生成代码入口不作为业务作者 API。
- `s.name(...).config({ debug })` 提供根命名和相对源码诊断；配置中的 target/nonce/layers 属于 runtime 宿主。

主题和动态样式放在模板、computed 或 $derived 中；普通 const 字符串保留调用时快照。主题视图返回可用于 class 属性的类名列表。模板编译只在可证明正确的作用域提升值，其他代码保留运行时语义；具体边界见 [编译说明](compiler.md)。

## 构建与交付

本地执行类型、构建与改动对应的关键测试。完整生成一致性、LSP/负例、三引擎浏览器、SSR/HMR、独立 tarball 和体积回归由 GitHub Actions 执行。各 CI job 构建一次，后续传 --no-build。

打包使用仓库内的 pnpm pack。beforePacking hook 在 tarball 中移除仅供本地使用的源码条件，不修改工作区清单；JS 地图内嵌源码，声明直接定位已发布的 d.ts。测试夹具、研究探针和机器配置不进入 dist。

所有者负责 context/runtime.dispose。组件只释放自己的全局槽位与订阅；不要清理共享浏览器缓存、其他项目进程或非本轮容器。主题定义不持有请求状态，SSR 每请求创建独立上下文，客户端恢复后调用 completeHydration。

三个包仍保持 private，不自动公开发布或变更许可证。历史交接和原始审查位于 [history](history/handoff-2026-09-22.md)，当前维护先读本页、architecture、compiler 和 production-audit。
