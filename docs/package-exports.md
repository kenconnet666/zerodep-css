# 包入口

普通组件从 `@zerodep-css/vue` 或 `@zerodep-css/svelte` 导入作者类、`css`、`ic`、`createCssContext`。主入口按构建目标选择浏览器或 Node 实现，不要求组件手工切换路径，也不在每次调用时判断环境。

| 路径                                       | 职责                                      |
| ------------------------------------------ | ----------------------------------------- |
| `@zerodep-css/core`                        | 环境无关的作者类、声明字符串工具与类型    |
| `@zerodep-css/core/browser`                | DOM 样式宿主与 hydration                  |
| `@zerodep-css/core/server`                 | Node 请求宿主                             |
| `@zerodep-css/vue` / `@zerodep-css/svelte` | 组件使用的统一入口                        |
| 对应适配包的 `/server`                     | 手工 SSR 或元框架集成使用的明确服务端入口 |

core 的三个路径供适配器明确选择底层依赖，普通业务组件不必同时导入它们。服务端实现依赖 `node:async_hooks`，不能直接放进浏览器入口。`types` 指向类型声明；`default` 是解析条件的后备项，不是 JavaScript 的默认导出。

已删除与后备项完全相同的 `browser` 条件：core 的 `/browser` 保留类型与默认目标；Vue/Svelte 根入口先匹配 Node，否则使用浏览器产物。`/server` 继续限定 Node 条件。入口的类型和 JavaScript 目标通过 Bundler / NodeNext 与两种构建平台验收。

元框架包也已生成 JS 和声明产物：`@zerodep-css/nuxt` 主入口是 Node 构建时注册的 Nuxt module；`@zerodep-css/sveltekit` 主入口提供客户端 `init`，其 `/server` 提供请求 `handle`。业务组件继续从 Vue/Svelte 包导入作者 API，元框架包不重复导出这些符号。配置见[元框架接入](metaframeworks.md)。
