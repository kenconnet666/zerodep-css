# 研究目录

研究代码不参与产品构建，也不代表公开 API。当前作者用法只查五个包 README 和 docs。

- 当前性能入口为 `performance/compare-engines.mjs`、`frameworks.mjs`、`browser-native.mjs`、`profile-runtime.mjs` 与 `cache-paired.mjs`；先根 pnpm build，正式计时串行。当前原始结果集中在 `performance/results/2026-09-24-runtime-first/`，P1 属性整理样本位于 `performance/results/2026-09-24-normalization-*.json`。
- 完整跨引擎对照用 `pnpm research:compare`，版本来自 benchmark catalog；Vue/Svelte 分别通过官方编译器运行。方法、已有结果和局限见 [性能对照](../docs/performance.md)。当前浏览器横向表早于 P4c 注册优化，后续复测见 [路线图](../docs/roadmap.md)。
- `css-types/`：CSS 数据与类型表达能力研究，根 research:types/research:syntax 命令仍使用它。
- 旧 `bx`、`api-usability`、`legacy-starter` 与 paired/preheat/compile-first 等探针依赖历史 API，已从当前工作树清理。其 2026-09-23 原始样本也已归档到 Git 历史，不能与当前数据拼接计算提速。需要恢复时查看 [清理前的研究目录](https://github.com/kenconnet666/zerodep-css/tree/7756c6e/.research) 或使用 `git show 7756c6e:<repo-relative-path>`。

运行中的产品测试夹具在各包 test，公共测试执行器在 scripts/testing；独占临时项目由对应测试负责清理。
