# zerodep-css

使用普通类字段和方法生成 CSS 声明字符串；注册器按内容复用规则。运行时 CSS 始终可用，框架编译插件只提供可选优化。

```sh
pnpm add zerodep-css
```

```ts
import { Css } from 'zerodep-css';
import { css } from 'zerodep-css/browser';

const s = new Css();
const button = css(s.display.flex, s.padding.rem(0.5, 1), s._hover(s.color.blue));
```

- 主入口：502 个属性类、关键字、类型和独立 className 标记。
- 类型声明内置中文属性说明、常用关键字解释，以及单位、颜色、数学与 Grid 方法的参数和调用示例；可通过编辑器悬停、补全详情和参数提示查看。
- `/browser`：DOM 样式登记、hydrateCss、configureCss 和 cssStats。
- `/server`：Node 请求宿主、withCssHost 与安全的 HTML 序列化。
- `/theme`：可选 ThemeCss、亮暗预设及主题关键字。
- `/compiler`、`/bindings`：框架插件内部入口。单独使用 compiler 时安装 TypeScript 和 magic-string；Vue/Svelte 适配包已声明这些依赖。

Node 构建/服务端要求 Node 24+，产物为 ESM。浏览器使用原生 CSS 嵌套。Vue/Svelte 项目通常直接使用对应适配包。

[入门](https://github.com/kenconnet666/zerodep-css/blob/main/docs/getting-started.md) · [作者 API](https://github.com/kenconnet666/zerodep-css/blob/main/docs/author-api.md) · [主题](https://github.com/kenconnet666/zerodep-css/blob/main/docs/themes.md)

生成的属性、关键字、语法和初始值数据来自 MIT 许可的 CSSType，中文语义和调用示例由项目维护；许可原文见随包提供的 THIRD_PARTY_NOTICES.md。
