import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/** 两个版本都读取当前 core 源码，避免把旧 dist 和新源码误当成算法差异。 */
export function concatVariant(variant) {
  assert.ok(['join', 'loop'].includes(variant));
  let loaded = 0;
  return {
    name: `concat-${variant}`,
    setup(bundler) {
      bundler.onResolve({ filter: /^@zerodep-css\/core(?:\/(browser|server))?$/ }, ({ path }) => ({
        path: fileURLToPath(
          new URL(`../../core/src/${path.split('/')[2] ?? 'index'}.ts`, import.meta.url),
        ),
      }));
      bundler.onLoad({ filter: /[\\/]core[\\/]src[\\/]registry\.ts$/ }, async ({ path }) => {
        const source = await readFile(path, 'utf8');
        const join = "const body = parts.join('');";
        assert.equal(source.split(join).length, 2);
        loaded++;
        return {
          contents:
            variant === 'join'
              ? source
              : source.replace(
                  join,
                  "let body = ''; for (let index = 0; index < parts.length; index++) body += parts[index];",
                ),
          loader: 'ts',
        };
      });
      bundler.onEnd(() => assert.equal(loaded, 1, '必须实际替换一次注册器，不能静默测到相同版本'));
    },
  };
}
