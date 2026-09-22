# zerodep-css

强类型链式 CSS 运行时框架。公开的 `css(s => { ... }): string` 已能生成和注册哈希类名，既可直接用于浏览器模板，也可先赋值为字符串。

```ts
import { css } from '@zerodep-css/core';

const panelClass = css((s) => {
  s.display.flex;
  s.padding.px(8, 16);
});
```

当前已实现类型生成、运行时序列化、动画资源、全局样式挂载，以及 Vue/Svelte 原生响应式、上下文与 SSR 恢复接入。Vue/Svelte 自动编译支持动态变量、静态准备与复杂情形运行时回退，详见[编译说明](.design/compiler.md)。

属性对象不可调用：固定值 `s.display.flex`，严格字面量 `s.display.token(value)`，开放值 `s.width.raw('50%')`，单位方法 `s.width.px(50)`。raw 保留已知值补全，并允许任意字符串通过类型检查；不提供 `s.width(...)`。

```text
core/       生成类型、CSS 运行时、动画/全局资源及 SSR
vue/        Vue 上下文、全局样式监听与组件夹具
svelte/     Svelte context、runes 全局样式与组件夹具
scripts/    数据生成、语言服务和浏览器/类型验收
.design/    实施研究、阶段记录和覆盖清单
.research/  研究探针、原始模板归档
```

要求 Node 24、pnpm 10.34.5、PowerShell 7。版本统一在 pnpm-workspace.yaml 管理，三个包仍保持 private。

打包使用仓库内 `pnpm pack`：`.pnpmfile.cjs` 在 tarball 清单中移除仅供本地 LSP 使用的 `zerodep-source` 条件。发布产物只导出存在的 dist 文件；core/Vue JS source map 内嵌源码，声明定位到已发布的 d.ts。独立消费者 CI 检查所有导出目标和地图，不依赖当前机器的源目录。

本地已有构建时，可用 `node scripts/testing/browser-core.mjs --match 缓存` 执行名称匹配的关键场景；定向报告放在 `test-results/browser-focused`，不会覆盖完整报告。CI 默认不传筛选条件，执行完整回归。

浏览器测试统一由 `ZERODEP_BROWSER_ENGINE` 选择 chromium/firefox/webkit；默认 chromium 使用本机 Chrome，`ZERODEP_BROWSER_CHANNEL=chromium` 改用 Playwright 安装的 Chromium。CI 对三种引擎分别运行样式、框架、SSR 和 HMR 回归；当前运行状态以实际 CI 结果为准。

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm generate:check
pnpm test
pnpm test:types
pnpm test:browser:core
pnpm test:consumer
pnpm size:check
pnpm test:browser:frameworks
```

- [core API、SSR 用法和当前边界](core/README.md)
- [Vue 适配与 SSR](vue/README.md)
- [Svelte 适配与 SSR](svelte/README.md)
- [项目语言服务](.design/language-services.md)
- [实施规划与阶段记录](.design/implementation-research.md)
- [当前架构](.design/architecture.md)
- [换机交接与恢复步骤](.design/handoff.md)
- [后续路线](.design/roadmap.md)
- [目录、命名与基础设施审计及下一阶段](.design/architecture-audit.md)
- [正式 CSS 覆盖清单](.design/css-coverage.json)

SSR 必须每个请求创建 runtime，并使用该实例的 css 函数；顶层 css 不使用服务端全局单例。浏览器当前采用原生 CSS nesting，真实验收基于本机 Chrome；兼容范围和测试证据见 core 文档。

项目已配置 zerodep_lsp。可直接运行 `pnpm lsp:inspect <相对文件路径...>`；语言服务改动后运行 `pnpm lsp:verify`。换机使用 `./scripts/language-services/setup.ps1 -Verify` 生成本机配置，不改写用户全局设置。

GitHub Actions 在 Linux 运行完整验证、独立 tarball 消费与体积预算，在 Windows 验证安装、类型、构建和单元测试，并上传报告。测试命令默认准备构建；同一轮已构建后可传 --no-build，CI 每个 job 只构建一次。日常本地至少运行 `pnpm check`、`pnpm build` 与对应单元/组件测试；完整类型补全验收和 core 浏览器回归可由 CI 执行。浏览器默认使用本机 Chrome，CI 使用 Playwright Chromium；不发布包或部署站点。
