# zerodep-css-compiler

Vue/Svelte 适配器共用的模板编译器。TypeScript AST 与 magic-string 依赖归本包所有，普通 CSS 使用者无需安装它们。

原 `zerodep-css/compiler` 导入改为 `zerodep-css-compiler`。zerodep-js 的 TSX 转换使用自身 Babel 插件，不依赖本包。
