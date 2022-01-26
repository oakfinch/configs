import { existsSync } from 'fs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { BUILD_TYPES, OUT_DIR, PATHS, IS_TYPESCRIPT } from "./constants.js";

const { APP, LIB } = BUILD_TYPES

const plugins = (outDir, outputTypes) => [
  nodeResolve(),
  ...(IS_TYPESCRIPT ? [typescript({
    outDir: outDir,
    exclude: ["**/__test__", "**/__tests__", "**/*.test.ts", "**/*.test.js"],
    outputToFilesystem: outputTypes
  })] : []),
]

const library = (format) => ({
  input: PATHS.ENTRY[LIB],
  output: {
    dir: `${OUT_DIR}/${format}`,
    format,
    exports: 'named',
    preserveModules: true
  },
  plugins: plugins(`${OUT_DIR}/${format}`, true)
})

const app = {
  input: PATHS.ENTRY[APP],
  output: [{
    compact: false,
    file: `${OUT_DIR}/bundle/app.js`
  }, {
    compact: true,
    file: `${OUT_DIR}/bundle/app.min.js`
  }],
  plugins: plugins(OUT_DIR, false)
}

export const configs = [
  library('cjs'),
  library('es'),
  app
].filter(conf => existsSync(conf.input))

export default configs
