import assert from 'node:assert/strict';
import test from 'node:test';
import {
  attachHost,
  collectRendered,
  onHostRelease,
  releaseHost,
  setStyleNonce,
  styleNonce,
  takeHead,
} from '../../src/runtime/request.ts';

function event() {
  return { context: {} };
}
function host(name) {
  let disposed = 0;
  return {
    renderStyles: () => `<style>${name}</style>`,
    renderManifest: () => `{"name":"${name}"}`,
    dispose() {
      disposed++;
    },
    get disposed() {
      return disposed;
    },
  };
}

test('完整 SSR 输出只消费一次，nonce 转义且 host 幂等释放', () => {
  const request = event();
  const current = host('first');
  setStyleNonce(request, 'a"<&');
  attachHost(request, current);
  let listenerRemoved = 0;
  onHostRelease(request, () => listenerRemoved++);
  collectRendered(request);
  assert.equal(current.disposed, 1);
  assert.equal(listenerRemoved, 1);
  assert.deepEqual(takeHead(request), [
    '<style>first</style>',
    '<script id="__zerodep_css_manifest__" type="application/json" nonce="a&quot;&lt;&amp;">{"name":"first"}</script>',
  ]);
  assert.deepEqual(takeHead(request), []);
  releaseHost(request);
  assert.equal(current.disposed, 1);
});

test('同一 event 重试清掉旧输出但沿用显式 nonce，请求之间不共享状态', () => {
  const request = event();
  const other = event();
  setStyleNonce(request, 'per-request');
  const first = host('old');
  attachHost(request, first);
  collectRendered(request);
  const second = host('new');
  attachHost(request, second);
  assert.deepEqual(takeHead(request), []);
  assert.equal(styleNonce(request), 'per-request');
  assert.equal(styleNonce(other), undefined);
  collectRendered(request);
  assert.match(takeHead(request).join(''), /new/);
  assert.equal(first.disposed, 1);
  assert.equal(second.disposed, 1);
});

test('拒绝宿主安装后的 nonce 变更，收集失败仍释放宿主', () => {
  const request = event();
  const current = host('fail');
  current.renderManifest = () => {
    throw new Error('manifest failed');
  };
  attachHost(request, current);
  assert.throws(() => setStyleNonce(request, 'late'), /before the Nuxt app plugin/);
  assert.throws(() => collectRendered(request), /manifest failed/);
  assert.equal(current.disposed, 1);
  assert.deepEqual(takeHead(request), []);
});

test('两份独立模块实例凭 Symbol.for 访问同一请求槽', async () => {
  const nitroCopy = await import('../../src/runtime/request.ts?nitro-copy');
  const request = event();
  const current = host('shared');
  setStyleNonce(request, 'cross-bundle');
  attachHost(request, current);
  assert.equal(nitroCopy.styleNonce(request), 'cross-bundle');
  nitroCopy.collectRendered(request);
  assert.match(takeHead(request).join(''), /shared/);
  assert.equal(current.disposed, 1);
});
