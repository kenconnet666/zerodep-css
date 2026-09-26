import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/** 同一 runner 对照相同源码，只在研究副本中关闭平铺模板缓存。 */
export function bindingCacheVariant(enabled) {
  let loaded = 0;
  return {
    name: `binding-cache-${enabled}`,
    setup(build) {
      build.onResolve(
        { filter: /^@zerodep-css\/core(?:\/(browser|bindings|server))?$/ },
        ({ path }) => ({
          path: fileURLToPath(
            new URL(`../../core/src/${path.split('/')[2] ?? 'index'}.ts`, import.meta.url),
          ),
        }),
      );
      build.onLoad({ filter: /[\\/]core[\\/]src[\\/]bindings\.ts$/ }, async ({ path }) => {
        let contents = (await readFile(path, 'utf8')).replace(/\r\n/g, '\n');
        loaded++;
        const start = contents.indexOf('      // 值变化时模板字符串通常不变');
        const end = contents.indexOf('\n    },\n    bind(', start);
        assert.ok(
          start >= 0 && end > start,
          'Binding cache probe must find the current implementation',
        );
        if (!enabled)
          contents =
            contents.slice(0, start) + '      return register(...parts);' + contents.slice(end);
        return { contents, loader: 'ts' };
      });
      build.onEnd(() => assert.equal(loaded, 1));
    },
  };
}
