import assert from 'node:assert/strict';
import test from 'node:test';
import { serializeCssRules } from '../../src/serialization.ts';

test('SSR 清单阻止 HTML 标签截断，并保持原始声明供哈希恢复', () => {
  const rules = [
    { className: 'z-test', body: 'content:"\\</StYlE><script>x</script>";\r\ncolor:red;' },
  ];
  const { cssText, manifest } = serializeCssRules(rules);
  assert.equal(/<\/style/i.test(cssText), false);
  assert.equal(manifest.includes('<'), false);
  assert.deepEqual(JSON.parse(manifest), rules);
  assert.ok(cssText.includes('<\\/StYlE>'));
  assert.equal(cssText.includes('\r'), false);
});
