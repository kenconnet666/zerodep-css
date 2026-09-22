/** 固定输入。升级需显式修改并检查生成差异，不在生成时联网。 */
export const sourceVersions = {
  csstype: '3.2.3',
  '@webref/css': '8.7.5',
  'css-tree': '3.2.1',
  typescript: '6.0.3',
};

export const cssGlobals = ['inherit', 'initial', 'revert', 'revert-layer', 'unset'];
// Webref 将查询特征也放入 descriptors；它们不能作为声明块写入。
export const queryContexts = new Set(['@media', '@container']);
export const maximumHelperArguments = 4;
export const animationProperties = [
  'animation-name',
  '-webkit-animation-name',
  '-moz-animation-name',
  '-o-animation-name',
];
export const referenceExceptions = {
  'anchored-feature': {
    reason: 'Webref 8.7.5 缺少该引用定义；不生成依赖它的快捷值。',
    source: 'https://drafts.csswg.org/css-anchor-position-2/',
  },
  'boolean-expr-group': {
    reason: 'Webref 通用布尔语法占位，不能当成独立声明值。',
    source: 'https://drafts.csswg.org/css-conditional-5/',
  },
};
export const keywordAlias = (value) =>
  value.replace(/^-+/, '').replace(/-([a-zA-Z0-9])/g, (_, letter) => letter.toUpperCase());
export const propertyAlias = (value) =>
  value.startsWith('--')
    ? value
    : value
        .replace(/^-webkit-/, 'Webkit-')
        .replace(/^-moz-/, 'Moz-')
        .replace(/^-ms-/, 'ms-')
        .replace(/^-o-/, 'O-')
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
