import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { compile } from 'svelte/compiler';
import { parse, compileScript } from 'vue/compiler-sfc';

const directory = dirname(fileURLToPath(import.meta.url));

export async function bundle(framework, platform, entry, options = {}) {
  const browser = platform === 'browser';
  const dist = options.dist ?? process.env.MUP_DIST === '1';
  const result = await build({
    entryPoints: [
      resolve(
        directory,
        'fixtures',
        entry ?? `${framework}-mup-${browser ? 'driver' : 'server'}.ts`,
      ),
    ],
    bundle: true,
    minify: options.minify ?? false,
    write: false,
    format: browser ? 'iife' : 'esm',
    ...(browser ? { globalName: 'mupBundle' } : {}),
    platform,
    alias: {
      [framework === 'vue' ? '@zerodep-css/vue' : '@zerodep-css/svelte']: resolve(
        directory,
        `../../${framework}/${dist ? 'dist' : 'src'}/${browser ? 'index' : 'server'}.${dist ? 'js' : 'ts'}`,
      ),
    },
    target: 'es2023',
    define: {
      'process.env.NODE_ENV': '"production"',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    },
    plugins: [
      ...(options.plugins ?? []),
      {
        name: 'single-framework-runtime',
        setup(bundler) {
          // 示例位于包内、驱动位于探针目录；两者必须使用同一份响应式运行时。
          bundler.onResolve({ filter: new RegExp(`^${framework}(?:/.*)?$`) }, async (args) => {
            if (args.pluginData?.singleFramework) return;
            const result = await bundler.resolve(args.path, {
              resolveDir: directory,
              kind: args.kind,
              pluginData: { singleFramework: true },
            });
            return { path: result.path, errors: result.errors };
          });
        },
      },
      ...(framework === 'svelte'
        ? [
            {
              name: 'svelte-compiler',
              setup(bundler) {
                bundler.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
                  const source = await readFile(path, 'utf8');
                  const result = compile(source, {
                    filename: path,
                    generate: browser ? 'client' : 'server',
                    dev: false,
                  });
                  assert.deepEqual(
                    result.warnings.filter((item) => item.code !== 'state_referenced_locally'),
                    [],
                  );
                  return { contents: result.js.code, loader: 'js', resolveDir: dirname(path) };
                });
              },
            },
          ]
        : [
            {
              name: 'vue-compiler',
              setup(bundler) {
                bundler.onLoad({ filter: /\.vue$/ }, async ({ path }) => {
                  const source = await readFile(path, 'utf8');
                  const { descriptor, errors } = parse(source, { filename: path });
                  assert.deepEqual(errors, []);
                  return {
                    contents: compileScript(descriptor, {
                      id: 'mup-performance',
                      isProd: true,
                      inlineTemplate: true,
                    }).content,
                    loader: 'ts',
                    resolveDir: dirname(path),
                  };
                });
              },
            },
          ]),
    ],
  });
  return result.outputFiles[0].text;
}
