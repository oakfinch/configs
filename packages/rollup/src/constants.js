import { existsSync } from 'fs'
import { dirname } from 'path'
import { pkgUpSync } from 'pkg-up'
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import dotenv from 'rollup-plugin-dotenv';

export const BUILD_DIR = '.rollup.build'

export const OUT_DIR = 'dist'

export const SRC_DIR = 'src'

export const APP_BUNDLE_FILENAME = 'app.bundle.js'

export const MODULE_FORMATS = ['cjs', 'es']

export const SCRIPT_EXTENSIONS = {
  TYPESCRIPT: 'ts',
  JAVASCRIPT: 'js'
}

export const BUILD_TYPES = {
  APP: 'app',
  LIB: 'library',
  OTHER: 'project',
  SHARED: 'shared'
}

export const ENTRY_NAMES = {
  [BUILD_TYPES.APP]: 'app',
  [BUILD_TYPES.LIB]: 'index'
}

export const ENVS = {
  PROD: 'production',
  DEV: 'development'
}

export const PLUGIN_NAMES = {
  NODE_RESOLVE: 'node-resolve',
  DOT_ENV: 'dotenv',
  TYPESCRIPT: 'typescript',
  COPY: 'copy',
  DELETE: 'delete',
}

export const PLUGINS = {
  [PLUGIN_NAMES.NODE_RESOLVE]: nodeResolve,
  [PLUGIN_NAMES.DOT_ENV]: dotenv.default,
  [PLUGIN_NAMES.TYPESCRIPT]: typescript,
  [PLUGIN_NAMES.COPY]: copy,
  [PLUGIN_NAMES.DELETE]: del
}

export const DEFAULT_NODE_ENV = ENVS.PROD

export const NODE_ENV = process.env.NODE_ENV ?? DEFAULT_NODE_ENV

export const PROJECT_ROOT = dirname(pkgUpSync({ cwd: process.cwd() }))

export const TSCONFIG = `${PROJECT_ROOT}/tsconfig.json`

export const IS_TYPESCRIPT = existsSync(TSCONFIG)

export const EXT = IS_TYPESCRIPT
  ? SCRIPT_EXTENSIONS.TYPESCRIPT
  : SCRIPT_EXTENSIONS.JAVASCRIPT

export const PATHS = {
  TSCONFIG: existsSync(TSCONFIG) ? TSCONFIG : undefined,
  ENTRY: Object.fromEntries(
    [BUILD_TYPES.LIB, BUILD_TYPES.APP]
      .map(type => [type, ENTRY_NAMES[type]])
      .map(([type, name]) => [type, `${PROJECT_ROOT}/${SRC_DIR}/${name}.${EXT}`])
      // .map(([type, path]) => [type, existsSync(path) ? path : undefined])
  )
}

export const BASE = {
  [BUILD_TYPES.APP]: {
    output: {}
  },
  [BUILD_TYPES.LIB]: {
    output: {
      exports: 'named',
      entryFileNames: `[name].[format].js`
    }
  },
  [BUILD_TYPES.SHARED]: {
    output: {
      sourcemap: true
    }
  }
}