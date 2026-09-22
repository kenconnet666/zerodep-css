// 语法表示能力探针；不把解析成功等同于浏览器支持或正确样式效果。
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const arg = process.argv.indexOf('--deps');
const deps = arg < 0 ? here : resolve(process.argv[arg + 1]);
const require = createRequire(join(deps, 'package.json'));
const tree = require('css-tree');
const version = require('css-tree/package.json').version;
assert.equal(version, '3.2.1');

const cases = [
  ['fallback-order', '.x{height:100vh;height:100dvh}'],
  ['shorthand-order', '.x{margin-left:4px;margin:8px;margin-left:12px}'],
  ['nested-order', '.x{color:red;&:hover{color:blue}color:green}'],
  ['selector-context', '.group:hover .x,.peer:checked~.x{color:red}.x:has(>img){display:grid}'],
  ['selector-literal-ampersand', '.x[data-symbol="&"]::before{content:"a&b;c:d"}'],
  ['conditions', '@media (width >= 48rem){@supports (display:grid){@container card (width > 20rem){.x{display:grid}}}}'],
  ['scope', '@scope (.card) to (.nested){:scope{color:red}}'],
  ['starting-style', '.x{@starting-style{opacity:0}opacity:1}'],
  ['layers', '@layer reset,base,components,overrides;@layer components{.x{color:red!important}}'],
  ['keyframes-duplicate-offset', '@keyframes a{from{opacity:0}50%{opacity:.5}50%{transform:scale(1.1)}to{opacity:1}}'],
  ['keyframes-timeline-range', '@keyframes scroll{entry 0%{opacity:0}entry 100%{opacity:1}}'],
  ['font-face', '@font-face{font-family:Demo;src:url(demo.woff2) format("woff2");font-weight:100 900;font-display:swap}'],
  ['property-registration', '@property --progress{syntax:"<number>";inherits:false;initial-value:0}'],
  ['counter-style', '@counter-style steps{system:cyclic;symbols:"①" "②";suffix:" "}'],
  ['page-margin-box', '@page :first{margin:1cm;@top-center{content:"Report"}}'],
  ['stylesheet-preamble', '@layer reset,base;@import url("theme.css") layer(base);@namespace svg url("http://www.w3.org/2000/svg");svg|a{fill:red}'],
  ['custom-properties', '.x{--offset:12px;transform:translate(var(--offset),var(--other,0px));background:color-mix(in oklch,red,blue)}'],
  ['unknown-rule-preservation', '@future-feature x{.x{future-property:y}}'],
];

function parse(css) {
  const errors = [];
  const ast = tree.parse(css, {parseCustomProperty: true, onParseError: error => errors.push(error.message)});
  assert.deepEqual(errors, []);
  return ast;
}
const results = cases.map(([name, input]) => {
  const ast = parse(input);
  const output = tree.generate(ast);
  assert.equal(tree.generate(parse(output)), output, `${name}: 输出再解析不稳定`);
  const nodes = {};
  const declarations = [];
  const rules = [];
  tree.walk(ast, node => {
    nodes[node.type] = (nodes[node.type] ?? 0) + 1;
    if (node.type === 'Declaration') declarations.push([node.property, tree.generate(node.value)]);
    if (node.type === 'Rule') rules.push(tree.generate(node.prelude));
  });
  assert.equal(nodes.Raw ?? 0, 0, `${name}: 出现未解析片段`);
  if (name === 'fallback-order') assert.deepEqual(declarations, [['height', '100vh'], ['height', '100dvh']]);
  if (name === 'shorthand-order') assert.deepEqual(declarations.map(d => d[0]), ['margin-left', 'margin', 'margin-left']);
  if (name === 'nested-order') assert.deepEqual(declarations.map(d => d[1]), ['red', 'blue', 'green']);
  if (name === 'keyframes-duplicate-offset') assert.deepEqual(rules, ['from', '50%', '50%', 'to']);
  if (name === 'selector-literal-ampersand') {
    assert.ok(output.includes('[data-symbol="&"]'));
    assert.ok(output.includes('"a&b;c:d"'));
  }
  return {name, input, output, nodes, declarations, rules};
});
const report = {
  purpose: '检验候选中间表示需要承载的 CSS 结构；不验证浏览器实现、级联结果或 zerodep 引擎。',
  source: {package: 'css-tree', version},
  passed: results.length,
  unknownRuleNote: '未知 at-rule 能解析成结构，不代表存在对应规范、类型或浏览器支持。',
  results,
};
await writeFile(join(here, 'expressiveness-report.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({source: report.source, passed: results.length, cases: results.map(r => r.name)}, null, 2));
