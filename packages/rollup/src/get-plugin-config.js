import { PLUGIN_NAMES, PLUGINS, BUILD_DIR, IS_TYPESCRIPT, OUT_DIR } from './constants.js';
import { getConfigType } from './get-config-type.js';

const getOptions = (type) => ({
  [PLUGIN_NAMES.TYPESCRIPT]: {
    outDir: `${BUILD_DIR}/${type}`,
    exclude: ["**/__test__", "**/__tests__", "**/*.test.ts", "**/*.test.js"],
  },
  [PLUGIN_NAMES.NODE_RESOLVE]: undefined,
  [PLUGIN_NAMES.DOT_ENV]: undefined
})

const replacePlugin = (plugins, name, options) => {
  const newPlugins = [...plugins]
  const replacement = PLUGINS[name](options)
  const index = newPlugins.findIndex(plugin => plugin.name === name)
  if (index === -1) {
    newPlugins.unshift(replacement)
  } else {
    newPlugins.splice(index, 1, replacement)
  }
  return newPlugins
}

const extensions = {
  cjs: '.cjs.js',
  es: '.es.js',
  types: '.d.ts'
};

export const getPluginConfig = (config) => {
  const type = getConfigType(config);
  const buildDir = `${BUILD_DIR}/${type}`;
  const rename = (...[,,fullPath]) => fullPath.replace(buildDir, '');
  const outDir = config.output?.dir ?? OUT_DIR;
  const newPlugins = [
    PLUGIN_NAMES.NODE_RESOLVE,
    PLUGIN_NAMES.DOT_ENV,
    PLUGIN_NAMES.TYPESCRIPT
  ].reduce(
    (acc, name) => (name === PLUGIN_NAMES.TYPESCRIPT && !IS_TYPESCRIPT)
      ? acc
      : replacePlugin(acc, name, getOptions(type)),
    (config.plugins ?? []).filter(
      ({ name }) => !(name === PLUGIN_NAMES.TYPESCRIPT && !IS_TYPESCRIPT)
    )
  );

  return {
    plugins: [
      ...newPlugins,
      PLUGINS[PLUGIN_NAMES.COPY]({
        targets: [
          // all the cjs, es, and typescript files go into subdirectories
          ...Object.entries(extensions).map(([key, ext]) => ({
            src: `${buildDir}/**/*${ext}*(.map)`,
            dest: `${outDir}/${key}`,
            rename,
          })),
          // everything else goes into the root
          {
            src: [
              `${buildDir}/**/*`,
              `!${buildDir}/**/*+(${Object.values(extensions).join('|')})*(.map)`
            ],
            dest: outDir,
            rename
          }
        ],
        hook: 'writeBundle',
      }),
    ]
  }
}
