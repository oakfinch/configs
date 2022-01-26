import { existsSync } from 'fs'
import { dirname } from 'path'
import { pkgUpSync } from 'pkg-up'

export const OUT_DIR = 'dist'
export const SRC_DIR = 'src'
export const APP_BUNDLE_FILENAME = 'app.bundle.js'

export const BUILD_TYPES = {
  APP: 'app',
  LIB: 'library',
}

export const SCRIPT_EXTENSIONS = {
  TYPESCRIPT: 'ts',
  JAVASCRIPT: 'js'
}

export const ENTRY_NAMES = {
  [BUILD_TYPES.APP]: 'app',
  [BUILD_TYPES.LIB]: 'index'
}

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
  )
}
