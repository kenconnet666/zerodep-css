# 作者 API 注释维护

## 目标与边界

全部系统属性提供中文基础说明；全部生成的公开方法提供调用说明；常用且容易误解的关键字提供专门解释。文档随源码与类型声明发布，保留现有类、字段、方法签名和运行时输出。

属性和关键字集合仍来自工作区固定的 csstype。中文语义和本库调用示例由项目维护，生成过程不联网、不翻译远程页面，也不引入运行时文档对象。初始值与 CSS 语法只在上游提供时提取，不推测缺失值；初始值不同于浏览器默认样式表中的实际样式。

## 文件职责

- `scripts/css-author-notes.json`：影响 API 生成的参数数量、百分比等配置。
- `scripts/css-author-docs.json`：全部属性的中文简介、专门说明和关键字解释。
- `scripts/css-author-docs.mjs`：文档渲染、单位解释、参数顺序和数据覆盖校验。
- `scripts/css-author-methods.mjs`：方法代码与对应参数/示例文档。
- `scripts/generate-css-author.mjs`：合并类型信息与文档，唯一写入 `core/src/generated`。

同一属性的入口字段和属性类都应有简介。关键字说明附着于最终 readonly 字段；方法说明附着于公开签名，每个重载都有对应参数含义。继承的单位方法保持通用，不为不同文案复制子类方法。

## 内容规则

使用中文短句说明用途；保留 CSS 原名、必要条件、实际输出和参考链接。示例中 `s` 是 `Css` 作者，方法返回完整声明，不能把 `s.width.px(16)` 当作 `16px` 值传给其他方法。数学和 Grid 函数内的尺寸应写带单位的 CSS 值字符串。

全局关键字共用解释；`auto`、`normal`、`none` 等依赖属性语义的值必须按属性维护。主题字段说明变量继承和宿主责任。CSS 属性支持情况不等于其每个值都受支持，不内嵌易过时的完整浏览器版本表；仅对有明确依据的条目使用弃用标签。

资料参考：[MDN CSS 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties)、[CSS Values and Units](https://drafts.csswg.org/css-values-4/)、[CSS Speech](https://drafts.csswg.org/css-speech-1/)、[TypeScript JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)。中文说明为项目整理，类型、语法和初始值沿用固定版本 CSSType，来源声明见 core/THIRD_PARTY_NOTICES.md。

## 验收

先验证 display、position、margin、gap、width、color 的字段、方法、重载与继承提示，再检查全部属性和公开方法覆盖率。语言服务测试须读取构建后的公共类型入口，检查 hover、completion details、signature help；同时执行文档示例，避免只断言生成器自己的模板。生成一致性、包类型和产物检查通过后按既有五包统一版本流程发布。

`pnpm test:author` 包含文档专项验收：全部 502 个属性入口、13,184 个公开字段及 6,817 个公开方法/构造签名的声明文档检查；从实际包导出解析补全、悬停和重载参数；批量编译文档中的作者表达式，并执行代表性示例验证输出。关键字元数据当前有 146 条属性专属解释，另有全局值、颜色值和同语义属性共享说明；未专门解释的关键字保留实际 CSS 声明提示。
