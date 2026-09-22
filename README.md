# zerodep-css

强类型链式 CSS 运行时框架。公开的 `css(s => { ... }): string` 已能生成和注册哈希类名，既可直接用于浏览器模板，也可先赋值为字符串。

```ts
import { css } from '@zerodep-css/core';

const panelClass = css((s) => {
  s.display.flex;
  s.padding.px(8, 16);
});
```

当前已实现类型生成、运行时序列化、动画资源、全局样式挂载及独立 SSR registry。Vue/Svelte 的专用订阅/上下文适配和 ibind 编译仍在后续阶段。

属性对象不可调用：固定值 `s.display.flex`，严格字面量 `s.display.token(value)`，开放值 `s.width.raw('50%')`，单位方法 `s.width.px(50)`。raw 保留已知值补全，并允许任意字符串通过类型检查；不提供 `s.width(...)`。

```text
core/       生成类型、CSS 运行时、动画/全局资源及 SSR
vue/        适配器工作区和类型夹具
svelte/     适配器工作区和类型夹具
scripts/    数据生成、语言服务和浏览器/类型验收
.design/    实施研究、阶段记录和覆盖清单
.research/  研究探针、原始模板归档
```

要求 Node 24、pnpm 10.34.5、PowerShell 7。版本统一在 pnpm-workspace.yaml 管理，三个包仍保持 private。

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm generate:check
pnpm test
pnpm test:types
pnpm test:browser
```

- [core API、SSR 用法和当前边界](core/README.md)
- [项目语言服务](.design/language-services.md)
- [实施规划与阶段记录](.design/implementation-research.md)
- [正式 CSS 覆盖清单](.design/css-coverage.json)

SSR 必须每个请求创建 runtime，并使用该实例的 css 函数；顶层 css 不使用服务端全局单例。浏览器当前采用原生 CSS nesting，真实验收基于本机 Chrome；兼容范围和测试证据见 core 文档。

项目已配置 zerodep_lsp。可直接运行 `pnpm lsp:inspect <相对文件路径...>`；语言服务改动后运行 `pnpm lsp:verify`。换机使用 `./scripts/language-services/setup.ps1 -Verify` 生成本机配置，不改写用户全局设置。
