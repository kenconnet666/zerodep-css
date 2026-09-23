# CSS 类型生成研究探针

> 历史材料中的 ibind 已在阶段四更名为 bx；当前功能以 architecture.md、roadmap.md 和各包 README 为准。

这个目录用于验证数据和类型方案，不是正式 core/vue/svelte 包，也不会构建或发布框架。

其中早期 API 探针保留研究时的候选形态，不代表当前产品合同。当前属性对象不可调用，token/raw 分离，以 `core/README.md` 和正式生成器为准。

## 复现

```powershell
pnpm --dir C:\code\zerodep-css\.research\css-types install --frozen-lockfile --ignore-scripts
pnpm --dir C:\code\zerodep-css\.research\css-types run audit
```

也可以使用已经安装相同固定依赖的目录：

```powershell
node C:\code\zerodep-css\.research\css-types\audit.mjs --deps C:\path\to\research-dependencies
```

脚本会核对 package.json 声明的精确数据版本。初次执行实际使用临时目录中的依赖，未安装或修改主项目依赖。

## 检查范围

- 用 TypeScript Compiler API 枚举 csstype 的全部 Properties，包括继承的成员，分类计数不相加。
- 抽取字符串字面量关键字，生成属性访问器类型；检查关键字别名和可调用属性成员冲突。
- 生成 857 个属性及相应关键字成员的虚拟 TypeScript 声明，检查全部属性访问和 8 个负例。
- 单位方法仅生成代表性样本，验证参数个数、错误单位和 ibind 的值类型；不是全量单位生成器。
- 解析 Webref 顶层特征及 at-rule 描述符的 syntax；报告没有 syntax 的条目及未直接解析的引用候选，不自动放宽成 string。
- 对照两个来源的 CSS 属性，保留差异名单。名称使用 Webref 的 styleDeclaration 映射，不把所有差异当成产品缺陷。
- 使用 css-tree 自带的值语法验证七个代表性 CSS 值；它不是用完整 Webref 数据重建的验证器。

输出 `report.json`。检查耗时是单次本地值，会随运行变化；生产生成文件不应嵌入这种非确定数据。

## CSS 结构探针

`pnpm run audit:syntax` 或 `node expressiveness.mjs --deps <依赖目录>` 运行 18 个结构用例，输出 `expressiveness-report.json`。

覆盖重复声明、简写顺序、嵌套交错、复杂选择器、条件嵌套、scope、starting-style、层、重复 keyframe 偏移、时间线范围、字体描述符、自定义属性注册、计数器、分页、样式表前导规则和未知规则保留。验证解析与再序列化稳定，并检查若干关键顺序；没有运行浏览器布局/级联/动画验证。

报告中的关键字表按组去重。csstype/Webref/css-tree 的来源许可均为 MIT，TypeScript 为 Apache-2.0；正式分发生成物时仍需保留适用版权和许可说明。

## 不代表已经完成

报告只用于 CSS 类型表达能力研究，不替代 IDE、运行时或框架接入验收。当前实施边界见 [支持矩阵](../../docs/support.md)，原研究决策可从 Git 历史查询。
