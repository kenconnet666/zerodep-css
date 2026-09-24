import assert from 'node:assert/strict';
import test from 'node:test';
import { beginRoot, requestStyles } from '../dist/server-context.js';

test('同请求错误页的新根渲染替换失败树宿主，异步请求彼此隔离', async () => {
  const create = () => {
    const hosts = [];
    const state = {
      host: undefined,
      rootProvided: false,
      createHost() {
        const host = {
          records: [],
          disposed: false,
          dispose() {
            this.disposed = true;
          },
        };
        hosts.push(host);
        return host;
      },
    };
    state.host = state.createHost();
    return { state, hosts };
  };
  const first = create();
  const second = create();
  await Promise.all([
    requestStyles.run(first.state, async () => {
      const failed = beginRoot(requestStyles.getStore());
      failed.records.push('failed-tree');
      await Promise.resolve();
      const fallback = beginRoot(requestStyles.getStore());
      fallback.records.push('error-tree');
      assert.equal(failed.disposed, true);
      assert.deepEqual(fallback.records, ['error-tree']);
      assert.equal(first.state.host, fallback);
    }),
    requestStyles.run(second.state, async () => {
      await Promise.resolve();
      const current = beginRoot(requestStyles.getStore());
      current.records.push('other-request');
      assert.equal(second.state.host, current);
      assert.equal(current.disposed, false);
    }),
  ]);
  assert.equal(first.hosts.length, 2);
  assert.equal(second.hosts.length, 1);
  assert.notEqual(first.state.host, second.state.host);
});
