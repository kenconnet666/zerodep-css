# 研究目录

研究代码不参与产品构建，也不代表公开 API。当前作者用法只查三个包 README 和 docs。

- `api-usability/`：官方 Vue/Svelte SSR 的主题作用域与派生类探针。
- `performance/`：准备样式、主题覆盖和作者调用成本的可复现对照；先执行根 pnpm build，数据解释见 [验证记录](../docs/validation.md)。
- 完整跨引擎对照用 `pnpm research:compare`，版本来自 benchmark catalog；Vue/Svelte 分别通过官方编译器运行。方法、已有结果和局限见 [性能对照](../docs/performance.md)，已提交的原始样本在 performance/results。
- `css-types/`：CSS 数据与类型表达能力研究，根 research:types/research:syntax 命令仍使用它。
- `bx/`、`legacy-starter/`：旧宏和初始模板的研究归档，不作为当前接入或测试命令执行；其中旧 API 不再维护。

运行中的产品测试夹具在各包 test，公共测试执行器在 scripts/testing；独占临时项目由对应测试负责清理。
