// 打包时去掉仅用于本仓库 LSP 的源码条件；本地清单保持不变。
function productionExports(value) {
  if (Array.isArray(value)) return value.map(productionExports);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key]) => key !== 'zerodep-source')
      .map(([key, target]) => [key, productionExports(target)]),
  );
}
module.exports = {
  hooks: {
    beforePacking(pkg) {
      return pkg.exports ? { ...pkg, exports: productionExports(pkg.exports) } : pkg;
    },
  },
};
