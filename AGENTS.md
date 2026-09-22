# zerodep-css 工作约定

- 默认中文沟通。当前已实现 core 样式引擎和 Vue/Svelte 原生响应式、上下文与完整字符串 SSR 接入；ibind 编译尚未实现。实际 API 见各包 README，阶段状态见 `.design/implementation-research.md`，不要把其他候选 API 当作已实现功能。
- 三个产品包是根目录的 `core`、`vue`、`svelte`。core 不依赖 Vue/Svelte，适配器使用框架原生响应式；包名暂定且保持 private。
- 普通动态值运行时重算并切换哈希类名。只有显式 `ibind` 才进行 CSS 变量编译绑定，不隐式提升普通变量。
- CSS 属性对象不可调用。使用 s.display.flex、s.display.token(value)、s.width.raw('50%')、s.width.px(50)；token 是严格字面量，raw 保留类型/补全并允许任意字符串。s.xx(...) 用于 selector/media/hover 等结构方法，不用于属性直接赋值。
- Git 提交说明使用中文；验证通过后提交，不把过渡中的失败状态当作完成版提交。
- 代码保留适当的中文注释，重点解释公共 API 合同、所有权/生命周期、响应式与 SSR 边界、事务/缓存策略；不要逐行复述显而易见的语法。生成文件的注释由生成器维护。
- 依赖精确版本集中在 `pnpm-workspace.yaml`，包内使用 catalog/workspace 协议。使用 Node 24、pnpm 10.34.5，不升级全局工具。
- 修改 TS/Vue/Svelte 后至少执行对应包的 check；基础配置或跨包变更执行根 `pnpm check`、`pnpm build`。
- 修改 CSS 数据/生成器后运行 `pnpm generate:css`、`pnpm generate:check`；不要手改 `core/src/generated`。Builder 或生成类型变更运行 `pnpm test`、`pnpm test:types`，保留规范独立负例。
- 修改序列化、资源注册或 SSR 恢复后运行 `pnpm test:browser`；默认使用已安装 Chrome。css 顶层入口只使用浏览器默认实例，SSR 每请求独立 createRuntime，不增加服务端全局缓存。
- 框架/上下文变更运行 `pnpm test:adapters`、`pnpm test:frameworks`。后者通过官方编译器构建真实组件并测试 dist，覆盖客户端与 SSR 恢复；Svelte rune 模块不能当作普通未编译 JS 执行。
- 长时完整 LSP、生成一致性和 core 浏览器回归可交给 GitHub Actions；本地仍完成类型/构建与改动对应的关键测试。交付须区分本地通过、CI 通过或 CI 未完成，不把 workflow 文件当作运行成功。
- createStyleContext 由应用/请求宿主拥有；全局样式用稳定且唯一的 key 挂载，恢复后 completeHydration 检查遗漏。组件只释放自身全局槽位和订阅，不能 dispose 共享上下文。
- 使用项目 `zerodep_lsp` 做诊断、hover、definitions、references、completions。当前会话没有该 MCP 时，使用 `pnpm lsp:inspect <相对文件路径...>`。超时或 complete=false 不是无错误。
- 修改语言服务桥或升级相关依赖后运行 `pnpm lsp:verify`，必须通过预置错误检出、修复清零和五项工具验收。WebStorm MCP 的空问题列表不能代替语义验收。
- `.codex/config.toml` 由 `pnpm lsp:setup` 生成并忽略；模板和启动脚本可迁移。不要修改用户全局 Codex 配置或结束其他项目 Node 进程。
- `.research` 保留研究探针和旧模板归档，不参与产品构建；测试夹具放所属包的 test 目录，不发布到 dist。
