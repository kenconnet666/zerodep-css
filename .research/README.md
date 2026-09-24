# 研究目录

研究代码不参与产品构建，也不代表公开 API。当前作者用法只查五个包 README 和 docs。

- 当前性能入口为 `performance/compare-engines.mjs`、`frameworks.mjs`、`browser-native.mjs`、`profile-runtime.mjs` 与 `cache-paired.mjs`；先根 pnpm build，正式计时串行。原始结果保留在 `performance/results/`，但旧脚本不再属于可运行入口。
- 完整跨引擎对照用 `pnpm research:compare`，版本来自 benchmark catalog；Vue/Svelte 分别通过官方编译器运行。方法、已有结果和局限见 [性能对照](../docs/performance.md)，已提交的原始样本在 performance/results。
- `css-types/`：CSS 数据与类型表达能力研究，根 research:types/research:syntax 命令仍使用它。
- 旧 `bx`、`api-usability`、`legacy-starter` 与 paired/preheat/compile-first 等探针曾依赖已迁移的 runtime API，现已从工作树清理，不应尝试在当前 checkout 运行。清理未删除 `performance/results/` 中的原始证据。需要恢复这些历史材料时，可查看 [清理前的研究目录](https://github.com/kenconnet666/zerodep-css/tree/7756c6e/.research) 或使用 `git show 7756c6e:<repo-relative-path>`。

运行中的产品测试夹具在各包 test，公共测试执行器在 scripts/testing；独占临时项目由对应测试负责清理。
