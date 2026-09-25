# CSS 作者链代码生成设计（待审核）

本文件只提出生成方案，不实现生成器，也不把当前三条试验属性链视为定稿 API。目标是让标准 CSS 属性都有 `s.backgroundColor`、`s.gridTemplateColumns` 等链；属性类型允许的固定关键字直接是声明字符串，例如 `s.width.auto === 'width:auto;'`；任意复杂值仍由 `raw(value)` 写入，并保留当前 `class ThemeWidthCss extends WidthCss` 的继承方式。

## 数据来源与实测规模

1. **主数据：已固定的 [`csstype` 3.2.3](https://github.com/frenic/csstype)。** 它由 MDN 数据生成，提供标准长属性、简写、SVG、厂商前缀和过时属性的分类、`Property.*` 值类型，以及语法、初始值和 MDN 链接注释。生成脚本用 TypeScript 编译器 API 读取类型声明的 AST 和字面量联合类型；不从排版后的类型文本做正则解析。
2. **注释元数据：固定版本的 [MDN CSS 数据](https://github.com/mdn/data/blob/main/css/properties.json)。** `properties.json` 提供属性语法、初始值、继承性、状态和文档链接；[维护说明](https://github.com/mdn/data/blob/main/docs/updating_css_json.md)说明这些字段来自规范。它用于生成注释与交叉检查，不另行决定有哪些快捷关键字。
3. **可选审计：[W3C Webref CSS](https://github.com/w3c/webref)。** 它是规范提取数据，可报告 `csstype` 暂缺的新属性；不直接加入首版生成输入，因为规范里的新特性不等同于目标浏览器已支持。

对本机版本用 TypeScript 类型检查器统计：标准长属性 421 个、简写 76 个；SVG 属性 60 个，其中 55 个与标准属性重合，所以建议首版是 **502 个不同属性**。此外数据中还有 250 个厂商前缀属性、107 个过时属性；合并去重后共 857 个属性。标准属性的字面量值在各属性下出现约 13,139 次；过滤厂商私有关键字和不能作为 JS 成员名的值后，约有 12,544 个快捷成员。按 `readonly x = 'property:value;'` 粗算，单是这些字段的源码文本约 619 KB，**这不是构建后的包体积或运行时内存测量**。

建议首版对 502 个标准与独有 SVG 属性生成直接链。厂商前缀、过时属性和 `--custom-property` 暂不生成直接成员；用户仍可通过原生字符串片段表达。这是需要审核的范围选择，而不是“所有浏览器都支持这 502 个属性”的承诺。

## 生成规则

- 从 `StandardLonghandProperties`、`StandardShorthandProperties` 与 SVG 接口取得属性及 `Property.*` 类型；与对应的 `*PropertiesHyphen` 接口对齐以获取准确的 CSS 属性名。当前版本的三组接口分别是 421/421、76/76、60/60，逐项类型一致。以后若数量、顺序或类型不符，生成失败并报告，不猜测名称。
- 用 TypeScript 类型检查器展开每个属性类型，收集字符串字面量作为候选快捷值。`(string & {})`、数值、函数语法、任意长度和时间值不是固定关键字，交给 `raw()`。`raw()` 继续使用对应的 `Property.*` 类型并允许普通字符串；当前 `width` 的数字输入约定需要保留或单独审核。
- CSS 值名转成 JS 成员名，例如 `space-between → spaceBetween`、`revert-layer → revertLayer`。跳过厂商私有关键字和不能无歧义映射的值；遇到 `raw`、`constructor`、`then` 等成员冲突，或两种值映射成同一名称，生成失败并在报告中列出，供人决定是否只经 `raw()` 提供。
- 每个快捷成员的值是**预先生成的完整声明字符串**，不会在 `s.width.auto` 读取时解析、验证或拼接 CSS。浏览器仍负责值语义；数据更新后由生成差异供人审查。
- 保留现有公开名称 `ColorCss`、`WidthCss`、`OpacityCss`、`Css` 与 `useCss`；新增属性链按同一命名规则生成，不同时保留另一套同义 API。主题或应用成员写在手工代码里，不进入生成文件。

## 输出形态与实例化

不能照当前试验代码为每个 `new Css()` 执行约 502 次 `new PropertyCss()`，更不能为每次调用重建约 1.25 万个关键字字符串。建议让生成的关键字对象只在模块装载时创建一次，并挂到属性链类的原型；系统 `Css` 的属性链引用也挂在原型上。TypeScript 使用 `declare readonly` 声明公开成员，实例不产生对应字段，子类仍可覆盖属性链。已用当前 TypeScript 6 验证这种声明允许 `override readonly width = new ThemeWidthCss()`。

下面只是输出结构示意，不是准备手写的最终文件：

```ts
const widthKeywords = {
  auto: 'width:auto;',
  minContent: 'width:min-content;',
} as const;

type WidthKeywords = Readonly<typeof widthKeywords>;
export interface WidthCss extends WidthKeywords {}
export class WidthCss extends CssProperty<Property.Width<number>> {
  constructor() {
    super('width');
  }
}
Object.assign(WidthCss.prototype, widthKeywords);

export class Css {
  declare readonly width: WidthCss;
}
Object.assign(Css.prototype, { width: new WidthCss() });
```

`CssProperty<T>.raw(value: T | (string & {}))` 负责少量动态值拼接。属性快捷字符串共享，主题仍可继承 `WidthCss` 增加 `_md`，再继承 `Css` 覆盖 `width`。生成前先拿 10 个高频属性做小探针，比较模块加载、`useCss()` 实例化、`s.color.red` 读取和构建体积；确认收益后再展开全量输出。

## 注释与目录

生成文件放在 `core/src/generated/`，按属性名首字母分组，配一个生成入口；不把数万行内容堆在手写的 `author.ts`。每个属性链至少有简短 JSDoc：CSS 原名、语法或初始值、MDN 链接。约 30～50 个高频属性在独立的手工映射文件里补一句经过审核的中文用途说明；其余统一生成“CSS 属性 `…`；初始值 `…`”这样的中文提示。不自动翻译 MDN 文本，也不复制兼容性表格。关键字本身通常不逐个注释，以免生成文件膨胀；含义容易混淆的值可在手工映射中添加短注释。

建议的职责边界：`scripts/generate-css-author.mjs` 读取固定依赖并生成文件，`scripts/css-author-notes.json` 保存少量中文说明与命名例外，`core/src/generated/` 只放生成结果。输出头部标明来源版本和“请运行生成脚本，勿手改”。

## 生成与审核流程

提供 `pnpm css:generate` 更新生成结果，以及 `pnpm css:generate:check` 在内存中生成并与仓库文件比较。生成顺序固定，换机安装固定 lockfile 后应得到相同字节。升级来源数据时先看属性增删、关键字增删、跳过和冲突清单，再更新生成文件。

验证分三层：类型检查所有属性链并保留两层主题继承例子；抽样检查长属性、简写、SVG、普通字符串和关键词补全；浏览器抽样验证声明、`ic()` 嵌套与样式层叠。继续沿用性能探针观察启动、规则注册和访问成本，但不以“等同原生 CSS”为门槛。生成器不承担浏览器值合法性检查，也不实现响应式变量绑定编译。

## 请审核的边界

1. **覆盖范围**：推荐先生成 502 个标准与独有 SVG 属性。是否也要将厂商前缀和过时属性纳入直接链？若要，建议作为单独一轮生成与审查。
2. **快捷值规模**：推荐对上述属性生成全部可无歧义命名的字符串字面量，约 1.25 万个字段；若实测装载和产物代价明显，优先讨论过滤重复的简写快捷值，`raw()` 始终完整可用。
3. **数字参数**：当前 `width.raw(number)` 可写出原生 CSS 文本；全量生成时是统一保持宽松数字输入，还是按 `csstype` 的属性类型分别处理，需要定一个规则。
