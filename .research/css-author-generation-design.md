# CSS 作者链代码生成设计（按新写法调整，待审核）

本文件只提出生成方案，不实现生成器。已确定的范围是 **502 个标准与独有 SVG 属性**；包体积不是筛选关键字的理由，优先保证写法自然。每个属性是一条链，常见用法直接产出声明字符串：

```ts
s.display.flex; // 'display:flex;'
s.width.auto; // 'width:auto;'
s.width.px(24); // 'width:24px;'
s.width.raw('calc(100% - 2rem)'); // 'width:calc(100% - 2rem);'
```

系统关键字、`px(number)` 和 `raw(value)` 是同一属性链上的三种输入。`raw('xx')` 是逃生舱：直接拼成 `width:xx;`，不解析、不校验、不补单位，浏览器决定该声明是否生效。它的类型仍提示本属性已知值，同时允许任意普通字符串。主题关键字通过继承属性链添加，例如 `s.width._md`，不需要另一套关键字 API。当前手写的三条属性链只是原型，实现生成器时再替换。

## 数据来源与实测规模

1. **主数据：已固定的 [`csstype` 3.2.3](https://github.com/frenic/csstype)。** 它由 MDN 数据生成，提供标准长属性、简写、SVG、厂商前缀和过时属性的分类、`Property.*` 值类型，以及语法、初始值和 MDN 链接注释。生成脚本用 TypeScript 编译器 API 读取类型声明的 AST 和字面量联合类型；不从排版后的类型文本做正则解析。
2. **注释元数据：固定版本的 [MDN CSS 数据](https://github.com/mdn/data/blob/main/css/properties.json)。** `properties.json` 提供属性语法、初始值、继承性、状态和文档链接；[维护说明](https://github.com/mdn/data/blob/main/docs/updating_css_json.md)说明这些字段来自规范。它用于生成注释与交叉检查，不另行决定有哪些快捷关键字。
3. **可选审计：[W3C Webref CSS](https://github.com/w3c/webref)。** 它是规范提取数据，可报告 `csstype` 暂缺的新属性；不直接加入首版生成输入，因为规范里的新特性不等同于目标浏览器已支持。

对本机版本用 TypeScript 类型检查器统计：标准长属性 421 个、简写 76 个；SVG 属性 60 个，其中 55 个与标准属性重合，因此本轮生成 **502 个不同属性**。标准属性的字面量值在各属性下出现约 13,139 次；过滤厂商私有关键字和不能作为 JS 成员名的值后，约有 12,544 个快捷成员。按 `readonly x = 'property:value;'` 粗算，单是这些字段的源码文本约 619 KB，**这不是构建后的包体积或运行时内存测量**。

厂商前缀、过时属性和 `--custom-property` 暂不生成直接成员；用户仍可通过原生字符串片段表达。数据快照的 502 个属性不意味着每个目标浏览器均支持它们。

## 生成规则

- 从 `StandardLonghandProperties`、`StandardShorthandProperties` 与 SVG 接口取得属性及 `Property.*` 类型；与对应的 `*PropertiesHyphen` 接口对齐以获取准确的 CSS 属性名。当前版本的三组接口分别是 421/421、76/76、60/60，逐项类型一致。以后若数量、顺序或类型不符，生成失败并报告，不猜测名称。
- 用 TypeScript 类型检查器展开每个属性类型，收集字符串字面量作为候选快捷值。`(string & {})`、数值、函数语法、任意长度和时间值不是固定关键字。每条链的 `raw()` 使用对应的 `Property.* | (string & {})`：有字面量补全，也接纳普通字符串。数字仅按该属性类型允许的情况接纳；例如 `opacity.raw(0.5)` 可直接输出 `opacity:0.5;`，长度值优先使用 `width.px(24)`，`width.raw('24px')` 仍可用。这会把当前试验版允许的 `width.raw(24)` 收紧为类型错误；应改用 `width.px(24)`，运行时 `raw()` 仍只是原样拼接。
- 对允许 CSS 长度的属性生成 `px(value: number)`，只执行 `property:${value}px;` 的字符串拼接。当前 `csstype` 中标准属性有 177 个引用 `TLength` 泛型，可作为候选清单；生成器将清单和例外输出供审核，不由字段名猜测。首轮只提供 `px` 这一种单位方法，其他单位和 `calc()` 等组合值可用 `raw()`。
- CSS 值名转成 JS 成员名，例如 `space-between → spaceBetween`、`revert-layer → revertLayer`。跳过厂商私有关键字和不能无歧义映射的值；遇到 `raw`、`constructor`、`then` 等成员冲突，或两种值映射成同一名称，生成失败并在报告中列出，供人决定是否只经 `raw()` 提供。
- 每个系统关键字成员的值是**预先生成的完整声明字符串**，不会在 `s.width.auto` 读取时解析、验证或拼接 CSS。`px()` 和 `raw()` 是薄字符串函数，不共享旧版回调式写入状态。浏览器仍负责值语义；数据更新后由生成差异供人审查。
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
export class WidthCss extends LengthPropertyCss<Property.Width> {
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

`CssProperty<T>.raw(value: T | (string & {}))` 只拼接原始值；`LengthPropertyCss<T>.px(value: number)` 只拼接 `px`。已用当前 TypeScript 6 的语言服务验证：这种泛型 `raw()` 仍提示 `auto`、`min-content`，而任意普通字符串没有诊断。属性快捷字符串共享，主题仍可继承 `WidthCss` 增加 `_md`，再继承 `Css` 覆盖 `width`。生成前先拿 10 个高频属性做小探针，比较模块加载、`useCss()` 实例化、`s.color.red` 读取和构建体积；性能只帮助选择内部存储结构，不用于砍掉已确定的属性和关键字。

## 归档使用例子的借鉴范围

只读查看了旧项目的 README、Vue 类型示例和组件夹具。`s.display.flex`、`s.width.px(width)`、`s.width.raw('fit-content')` 的调用形式验证了关键字、单位和开放值在一条链上比较顺手；`s.padding.px(8, 16)` 说明常见简写的多参数单位写法值得单独考虑。旧项目的 `css((s) => { ... })` 是有状态作者回调，当前方案要求这些表达式直接返回字符串，**不迁移旧回调、`token()` 或内部解析/覆盖机制**。

## 注释与目录

生成文件放在 `core/src/generated/`，按属性名首字母分组，配一个生成入口；不把数万行内容堆在手写的 `author.ts`。每个属性链至少有简短 JSDoc：CSS 原名、语法或初始值、MDN 链接。约 30～50 个高频属性在独立的手工映射文件里补一句经过审核的中文用途说明；其余统一生成“CSS 属性 `…`；初始值 `…`”这样的中文提示。不自动翻译 MDN 文本，也不复制兼容性表格。关键字本身通常不逐个注释，以免生成文件膨胀；含义容易混淆的值可在手工映射中添加短注释。

建议的职责边界：`scripts/generate-css-author.mjs` 读取固定依赖并生成文件，`scripts/css-author-notes.json` 保存少量中文说明与命名例外，`core/src/generated/` 只放生成结果。输出头部标明来源版本和“请运行生成脚本，勿手改”。

## 生成与审核流程

提供 `pnpm css:generate` 更新生成结果，以及 `pnpm css:generate:check` 在内存中生成并与仓库文件比较。生成顺序固定，换机安装固定 lockfile 后应得到相同字节。升级来源数据时先看属性增删、关键字增删、跳过和冲突清单，再更新生成文件。

验证分三层：类型检查所有属性链并保留两层主题继承例子；抽样检查长属性、简写、SVG、普通字符串、关键字补全及 `px(number)` 是否只出现在长度属性上；浏览器抽样验证声明、`ic()` 嵌套与样式层叠。继续沿用性能探针观察启动、规则注册和访问成本，但不以“等同原生 CSS”为门槛。生成器不承担浏览器值合法性检查，也不实现响应式变量绑定编译。

## 仍请审核的写法细节

1. **`px()` 的覆盖**：推荐根据 `TLength` 生成约 177 个候选属性，逐项报告例外；不用属性名猜测，也不做运行时单位校验。
2. **多参数简写**：推荐先保证 `s.padding.px(8)`；对 `padding`、`margin`、`gap` 等同质长度简写，再按各自 CSS 语法提供 `px(8, 16)` 一类少量重载。不把所有简写无差别地变成可接收任意个数字。
3. **原型存储**：推荐共享关键字与默认属性链，同时保持 `s.width.auto` 是已存在的字符串，不在读取时生成。先用 10 个属性验证这一输出形态与主题继承，再全量生成。
