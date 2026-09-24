# 交接与换机恢复

更新：2026-09-24。主线是 `codex/runtime-first`，远程为 `https://github.com/kenconnet666/zerodep-css.git`。当前架构是运行时 CSS 为正式能力、编译插件为可选等价优化；不要把 `codex/static-css` 的强制静态限制带回本分支。产品五包保持 private，本次不发布 npm。

## 状态与入口

P1—P5 已完成作者语义、薄 core、原生响应式与主题生命周期、性能优化、Nuxt/Kit 适配。P6 已补齐编译诊断、修复 Nuxt 请求 context 别名和开发来源包装问题，清理旧探针并完成文档审核。最后提交的远程 CI 状态以 [Actions](https://github.com/kenconnet666/zerodep-css/actions?query=branch%3Acodex%2Fruntime-first) 中对应 SHA 为准；本地通过不能替代远程成功。

- [支持边界](support.md)、[API 迁移](migration.md)：当前公开能力和唯一推荐入口。
- [生产实施记录](production.md)：分阶段提交、修复依据与实际验证；[已确认合同](runtime-first.md)保留产品决策。
- [编译边界](compiler.md)：插件不能证明等价时保留运行时；显式 debug 可查看未命中原因。
- [性能对照](performance.md)：Vue/Svelte 分开测量，包含原生 CSS、Emotion 等对照；没有等同原生 CSS 的承诺。
- [Nuxt 接入](../nuxt/README.md)、[SvelteKit 接入](../sveltekit/README.md)：Node SSR、静态部署、HMR 和 CSP 的具体要求。

## 架构与维护约定

`core` 提供 Css、cssVar、defineTheme；`core/themes` 提供可选 ThemeCss 与亮暗预设。用户可继承仅系统关键字的 Css，也可继续继承 ThemeCss。完整引擎位于 `internal/runtime`，构建时复制到 Vue/Svelte 包的私有 `#runtime`，不作为独立业务 API。编译实现位于 `internal/compiler`。

项目用 `createStyles({ cssType?, theme? })` 统一绑定 `useCss`、`useTheme`、`provideTheme`、`useGlobalCss`、`createHost`。组件 `const css = useCss()`，不再公开 useStyleRuntime/bx/cx 等同义入口。css 返回 class 字符串；动态计算使用模板或框架原生 computed/$derived，普通脚本字符串仍是快照。

同一规范化属性和上下文后写直接替换前写，包括前者 important；不同简写/长属性保留原生先后关系。null/undefined 跳过整条声明，raw 只检查结构边界，具体值是否有效由浏览器决定。优先普通函数和 if/switch，不另建 recipes/variants 系统。

Vue `app.use(host)`，Svelte 根 `host.provide()`；独立 SSR 完整输出后 finally dispose。Nuxt/Kit 包负责框架宿主和请求收集，不额外创建第二个业务 host。禁止模块级业务请求状态，继续复用原生响应式和作用域。

## 新机器恢复

使用 Node 24、pnpm 10.34.5，Windows 的语言服务安装脚本需要 PowerShell 7。依赖精确版本在 pnpm-workspace.yaml；不升级全局工具绕过约束。

```powershell
git clone https://github.com/kenconnet666/zerodep-css.git
cd zerodep-css
git switch codex/runtime-first
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm test:unit --no-build
pnpm lsp:setup
```

`.codex/config.toml` 被忽略，由 lsp:setup 按新机器重建；必要时重启 Codex 加载 MCP。不要复制旧机器路径、修改全局配置或结束其他项目进程。先核对 git status、HEAD 和对应远程 SHA 的检查状态，保留用户改动。

优先使用 zerodep_lsp 的 diagnostics、hover、definitions、references、completions；不可用时 `pnpm lsp:inspect <项目相对路径...>`。complete=false 或超时不能视为没有错误。桥或相关依赖改变后运行 `pnpm lsp:verify`。

## 验证与交付

本轮本地已通过根 check/build、218 项单元、三语言类型负例、Vue/Svelte 真实 SSR/hydration/HMR、Nuxt 全新隔离消费者完整流程及关键文件 LSP。Nuxt 报告 runId 为 `3e622a82-deaa-48b3-8cb4-a3edd0225236`，cleanFullPass=true，包含缓存响应、内部请求与原生路由规则刷新。Kit 在 P5 已通过独立 Node/静态/异步子组件/HMR 验收及该提交远程 CI。最终九个 CI job 的准确状态见生产实施记录。

完整命令和证据入口在 [validation](validation.md)。只由一个流程 build，其余测试传 --no-build，避免并行清空 dist。类型负例运行期间不要全目录格式化或中途终止。正确性测试可并行，性能计时必须独占负载。每个阶段中文提交，推送后区分本地与对应提交的远程验收。

## 已知边界与后续范围

- Nuxt 单实例根全局样式的脚本 HMR 需要 README 的显式 hot.data 租约交接；纯模板更新不能无条件 dispose。原生 route-rules 模板重生成可能刷新整页，库不拦截。
- Nuxt 缓存 HTML 与每请求 nonce 必须由应用统一安排；不能把一次性 nonce 冻结进公共缓存。请求宿主按实际 event 隔离，nonce 配置可继承但已有 host 保留快照。
- Kit app.html 必须保留显式 head 标记；Node ALS 仅服务端使用。锁定的 Kit 2.70.3 使用 cookie 0.6 传递依赖，应用需采用 README 的有界 0.7.2 override；库不能替应用传播 workspace override。
- 当前验收为 Vue 3.5、Svelte 5、Nuxt 4、Kit 2 的锁定版本，Node SSR 与静态部署。边缘部署、组件 HTML 流式 SSR、未知框架版本升级需要另行验收。
- 跨模块作者继承、复杂控制流或 CSS 值无法证明可优化时正常运行；不把优化命中率当功能门槛。持续全新值优先评估变量绑定，规则默认无硬上限，增长提示不等于泄漏。
- 性能结论以既有样本为限。完整运行时与 Emotion 路线不同，包体积差异已接受；继续从实测热点选择小幅可维护优化，不牺牲语义或请求隔离。

旧性能脚本和示例已从当前工作树清理，`.research/README.md` 提供历史源码位置，当前原始性能 JSON 与锁文件仍保留。成功测试自动清理自己创建的临时应用；失败诊断保存在忽略的 test-results。此前三个 consumer 临时目录及六个 p4c 注册探针目录的删除被自动审批拒绝，仍保留本机，不绕过限制、不进入 Git。换机不需要复制这些临时文件。
