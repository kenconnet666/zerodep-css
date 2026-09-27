# 工作区交接

主线为 codex/runtime-css-research，远程 origin 是 kenconnet666/zerodep-css。当前功能、验收结果和边界分别见 [生产使用](production.md)、[执行记录](production-progress.md)、[性能记录](performance.md)。五包保持 private，本轮不执行 npm 发布。

最新改动参考 Vue v-bind，将模板原生元素的 bx 拆成共享声明和框架 style 更新，Vue/Svelte 同步接入。复杂值表达式、多变量及条件/短路分支保留；作者覆写、跨元素选择器、setup 中传递的 class 保留样式表路径。严格 CSP 用插件/模块 `inlineBindings: false`。共享作者方法检查归 core/src/author-guards.ts，拆分逻辑在 core/src/compiler/element-bindings.ts。性能和三浏览器完整验收交 CI，旧性能表仅作基线。

## 新机器准备

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm check
pnpm --dir test/tools install --frozen-lockfile
pnpm lsp:setup
pnpm lsp:verify
```

使用 Node 24、pnpm 10.34.5。依赖版本由工作区 catalog 与锁文件固定。新机器重装依赖，不复制 Windows 的 node_modules 绝对链接。.codex/config.toml、dist、test-results 不入 Git；LSP 配置由脚本按本机路径生成，重载 Codex 后再验证实际连接。

## 代码归属

- core/src/generated：生成的直接字段和明确方法签名，不手改。
- scripts/generate-css-author.mjs、css-author-methods.mjs、css-author-notes.json：生成规则、单位/颜色方法与少量属性元数据。
- core/src/compiler：bx 转换、模板缓存分析、源码编辑/定位；core/src/compiler.ts 只保留构建入口导出。
- core/src/registry.ts、bindings.ts、browser.ts、server.ts：登记、绑定生命周期、浏览器 CSSOM 与请求宿主。
- vue/src、svelte/src：各自上下文、编译插件及框架调度。
- nuxt/src、sveltekit/src：元框架 SSR 与 hydration 接入。
- test/browser、test/tools：正式浏览器用例、真实组件夹具、打包器及性能工具；.research 仅保留历史解释。

旧的单宿主 legacy 实现和被现行文档替代的阶段计划已删除，必要时从 Git 历史恢复。原始历史样本保留在 test/tools/results，不作为当前性能结论。

## 后续变更流程

先读取 AGENTS.md 和上次 CI。局部运行相应测试，涉及类型入口/基础配置时运行 pnpm check，涉及产物时运行 pnpm build。完整矩阵在远程执行；提交后不等待，下一次提交前检查并修复失败。不要把已推送、静态检查通过或旧版本 CI 通过写成当前版本完整验收通过。

本轮已处理的重点是 API 一致性、显式 bx、常量省订阅、框架回调作用域、严格生成类型、SSR 隔离、KeepAlive、失败回滚、私有样式回收和可选增长诊断。源码仍以直接、易读和合适中文注释为先。
