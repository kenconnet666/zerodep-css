# 变更记录

## 0.1.0 — 2026-09-23

三个产品包的首个内部生产基线，保持 private；本次不进行公共 npm 发布。

- 移除公开 bx/Binding 和旧插件名称，统一 cssPlugin/transformCss。动态值直接写入 CSS 属性方法，保留复杂代码的运行时回退。
- 支持安全的动态单位/raw/token/模板值、同宿主嵌套和可判定 if/switch；空值与 CSS-wide 保持级联语义。
- 增加真实 Css 继承、类型化关键字扩展、根 name/config(debug) 和相对源码诊断。
- 增加冻结主题定义、预设继承、Vue/Svelte 原生主题作用域、多主题局部覆盖与 DOM 移动支持。
- 增加数值快路径、有界值校验/编译缓存、静态准备和注册命中快路径；保留顺序、资源依赖、事务和 SSR 所有权。
- 修复 props 提升、隐藏行求值、词法遮蔽、局部捕获、重复表达式映射和跨宿主选择器绑定。
- 编译器迁入严格 TypeScript，声明由实现生成；测试与工具目录按职责整理，旧方案文档归档。
- 完整 CI 覆盖 Windows/Linux、LSP、三种浏览器引擎、SSR/HMR、独立安装、生成一致性、产物完整性和体积预算。

从内部 0.0.0 基线迁移：删除 bx 包装与导入，改用 cssPlugin；服务端和客户端一起重新构建。脚本 const 仍是快照，动态场景使用模板、computed 或 $derived。详细边界见 [.design/support.md](.design/support.md)。
