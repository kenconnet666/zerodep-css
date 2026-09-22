# 换机继续开发交接

交接日期：2026-09-22。本次交付范围为阶段 3.5；ibind 编译是下一阶段，尚未实现。

## 先确认分支

- 远程仓库：https://github.com/kenconnet666/zerodep-css
- 继续开发的分支：`feat/native-reactivity`。本阶段尚未合并到 master，不能只检出默认分支就开始后续开发。
- 实现提交：`d4c94ed8be88029b5eed09042ec9b6ec4941b018`，中文说明为“整理样式 API 与测试目录并补齐独立消费和跨平台验证”。本交接文档通过后续文档提交补入，代码基线不变。
- 对应 CI：[35710928474](https://github.com/kenconnet666/zerodep-css/actions/runs/35710928474)，已核对 status=completed、conclusion=success。Ubuntu 基础检查、Windows 基础检查、三语言 LSP、Chromium 回归、独立消费者五个 job 全部通过。

## 新电脑恢复步骤

先准备 Git、Node 24.x、pnpm 10.34.5 和 PowerShell 7。版本以 package.json、.node-version、pnpm-workspace.yaml 为准，不升级成任意 latest。本机安装目录可不同，不需要复制旧电脑的 Node 路径。

下面是 Windows PowerShell 示例；目标目录尚不存在时执行 clone：

```powershell
git clone --branch feat/native-reactivity https://github.com/kenconnet666/zerodep-css.git C:\code\zerodep-css
Set-Location C:\code\zerodep-css
git status --short
git log -3 --oneline
node --version
pnpm --version
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm test:unit --no-build
```

已有 checkout 时，先保留自己的未提交改动，再 fetch/switch/pull，不能 reset 覆盖。当前工作分支跟踪 origin/feat/native-reactivity。

产品构建不依赖 C:\code\vue-core、svelte、emotion、zui-svelte 这些参考仓库；后续研究源码时可另行克隆。node_modules、dist、test-results、.idea、.codex/config.toml 不进 Git，也不需要从旧电脑复制。

## 语言服务重建

```powershell
pwsh -NoProfile -File scripts/language-services/setup.ps1 -SkipInstall -Verify
```

该脚本会构建并用模板生成本机 .codex/config.toml，配置项目 zerodep_lsp 和官方 Svelte MCP；不会修改用户全局 Codex 配置。生成后重启客户端或新建项目任务，使其加载新配置。不要直接复制旧电脑的 config.toml，其中的 Node 和工作区绝对路径会失效。

```powershell
pnpm lsp:inspect vue/src/global.ts svelte/test/fixtures/ReactiveStyles.svelte
pnpm lsp:verify
```

inspect/verify 必须报告完成的诊断；timeout、complete=false、Transport closed 都不算无错误。旧电脑长会话的 MCP transport 曾关闭，之后独立 inspect 对上述两个文件返回 complete=true、errors=0，完整 verify 也通过；新机应以自己的实测为准。

## 浏览器和完整验证

默认使用已安装的 Chrome。若没有 Chrome，可安装项目锁定版本的 Playwright Chromium：

```powershell
pnpm exec playwright install chromium
$env:ZERODEP_BROWSER_CHANNEL = 'chromium'
pnpm test:browser:core --no-build
pnpm test:browser:frameworks --no-build
pnpm test:consumer --no-build
```

Linux CI 使用 playwright install --with-deps chromium，含字体等系统依赖。不要假定任意旧浏览器支持当前原生 CSS nesting 能力。

测试命令默认先构建。只有本轮已经成功 build 且未改源码时才传 --no-build：

| 命令                         | 覆盖                                                                   |
| ---------------------------- | ---------------------------------------------------------------------- |
| pnpm test / pnpm test:unit   | core、生成语法、Vue 单元及跨包公开入口合同，共 38 项                   |
| pnpm test:types              | TS/Vue/Svelte 各五处错误检出、修复清零及 token/raw 补全                |
| pnpm lsp:verify              | 诊断、hover、definitions、references、completions 五项语义验收         |
| pnpm test:browser:core       | 17 个真实 DOM/CSSOM 场景及失败留证自检                                 |
| pnpm test:browser:frameworks | 双框架客户端、SSR、hydration、派生缓存、全局与卸载                     |
| pnpm test:consumer           | 仓库外 tarball 安装、严格声明检查、官方 Vite 生产/SSR 构建及 hydration |
| pnpm size:check              | 最小入口体积预算、模块贡献与浏览器编译依赖泄漏检查                     |
| pnpm generate:check          | 固定来源数据生成一致性；不要手改生成文件                               |
| pnpm format:check            | 产品包、脚本、CI 和维护文档格式                                        |

test:consumer 在系统临时目录独立安装，不发布包。成功后清理目录；失败时保留目录路径到报告以便诊断。消费者顶层版本从当前锁定安装取得，传递依赖会重新解析；报告保留两份消费者 lockfile，不能把它们等同于主 workspace 的 frozen lockfile。

## 本阶段完成内容与迁移差异

1. 保留根目录 core/vue/svelte 三包。Vue 拆为 context.ts/global.ts，index.ts 仅导出；测试分 unit/types/fixtures/browser，执行器归 scripts/testing。
2. 内部 useCss 改为 buildStyleProgram；RootBuilder/RootFactory 改为 StylesheetBuilder/StylesheetFactory；全局 container 改为 containerQuery。内部 IR 不再大面积从 core 根入口导出。
3. 适配器不再导出默认 css。组件初始化时使用 `const { css } = useStyleRuntime()`；浏览器默认实例仍从 core 导入 css。SSR、nonce、ShadowRoot 不能绕过上下文。
4. 构建会检查真实路径并清理三个 dist，避免重命名残留。生成声明的内部 import 与生成器模板同步，schema digest 和 1116 个属性成员未改变；已有 class 哈希增加固定回归断言。
5. 增加官方 Vite Vue/Svelte 消费验证，只新增开发工具依赖，没有升级 Vue/Svelte。增加 Linux/Windows CI、体积预算和失败证据。
6. 当前架构与路线从历史研究中分离。中文注释解释所有权、响应式和 SSR 边界；提交说明继续使用中文。

旧命令 test:adapters、test:frameworks、test:browser 已由表中的明确命令替代。旧单元/组件文件路径也已变更，后续工具不要继续使用历史记录中的路径。

## 验证证据和已知边界

本地 Node 24 / Chrome 153 上已通过：check、build、38 项 unit、17 项 core 浏览器、双框架组件、独立 tarball 消费（关闭 skipLibCheck）、完整 LSP/类型验收、格式、生成一致性和体积预算。

体积基线（单函数保活、esbuild minify/gzip 字节）：css 为 491511/98516，createRuntime 为 491287/98437，createStyleContext 为 493134/98938，cssVar 为 3610/1333。完整消费者包含框架后 Vite 会提示大于 500 kB；这是已知体积问题，未屏蔽警告，也没有因此删除 CSS 校验。后续先看 test-results/bundle/results.json 的模块贡献。

CI 上传 bundle-size、language-services、browser-results、consumer-results，保留 7 天；到期后可重新运行。报告不提交仓库。browser/evidence-self-test 中故意失败的 case 用来检验截图与 trace，verification.json 的 passed 才表示该自检成功，不应误报成产品失败。

如需下载上述 CI 的报告：

```powershell
gh run download 35710928474 --dir test-results/ci-reference
```

Git 推送需在新机配置自己的 GitHub 凭据。旧机曾使用已登录的 gh 单次 credential helper 绕过失效的默认凭据；不要复制 token、用户全局 Git/Codex 配置或旧认证文件。所有必要项目配置和源码都在远程分支中。

目前仍 private，不发布、不部署。core 仍有 css-tree 运行时依赖。项目许可证、发布元数据和声明地图源码可达性属于发布前事项。流式 SSR、异步 Suspense/boundary 全流程、Nuxt/SvelteKit 插件尚未验收。

## 下一位开发者从哪里继续

先读 AGENTS.md、architecture.md、roadmap.md，再看三个包 README。implementation-research.md、architecture-audit.md 是历史依据，其中的“下一阶段”不能覆盖当前路线。

下一阶段是 ibind 编译：普通值保持运行时重算和哈希类名切换，只有显式 ibind 生成元素 CSS 变量绑定。首先做两种官方编译链的最小探针，验证导入别名/作用域、单位、多变量、SSR 初值和绑定更新不重跑样式回调。编译器放适配器独立子路径，Node/AST/Vite 依赖不能进入默认浏览器入口。不提前创建第四个产品包或全套空插件。

关键约束：ibind 绑定变量本身，不绑定整个 transform 字符串；`${ibind(x)}px` 不能替换成 var(--x)px。脚本 class 复用到多个元素时必须明确绑定使用点；无法追踪的情况给出诊断，不能悄悄丢绑定。具体退出条件见 roadmap.md。

可直接交给新任务的起始说明：

> 在 feat/native-reactivity 分支继续 zerodep-css。先读取 AGENTS.md 与 .design/handoff.md、architecture.md、roadmap.md，核对远程最新提交和工作区状态。阶段 3.5 已完成，接下来研究并实施显式 ibind 的官方 Vue/Svelte 编译链最小探针，保留 css(factory): string、token/raw 分离及普通值运行时重算。代码写适当中文注释，中文 Git 提交；耗时回归交给 CI，并核实对应提交的结果。
