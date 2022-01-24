import { existsSync } from 'fs'
import { dirname } from 'path'
import { pkgUpSync } from 'pkg-up'

export const PROJECT_ROOT = dirname(pkgUpSync({ cwd: process.cwd() }))

export const TSCONFIG = `${PROJECT_ROOT}/tsconfig.json`

export const IS_TYPESCRIPT = existsSync(paths.TSCONFIG)

export const ENVS = {
  PROD: 'production',
  DEV: 'development'
}

export const OUT_DIR = 'dist'

export const MODULE_FORMATS = [ 'es', 'cjs']

export const DEFAULT_NODE_ENV = ENVS.PROD

export const { NODE_ENV = DEFAULT_NODE_ENV } = process.env

export const MINIFY_ENVS = [ENVS.PROD]

export const COMPACT = MINIFY_ENVS.includes(NODE_ENV)

export const APP_FILENAME = `app.bundle.${COMPACT ? '.min' : ''}.js`

export const PATHS = Object.fromEntries(
  Object.entries({
    TSCONFIG,
    MODULE_ENTRY: `${PROJECT_ROOT}/src/index.[ext]`,
    APP_ENTRY: `${PROJECT_ROOT}/src/app.[ext]`
  })
  .map(([key, val]) => [key, val.replace(/\[ext]/, IS_TYPESCRIPT ? 'ts' : 'js')])
  .map(([key, val]) => [key, existsSync(val) ? val : undefined])
)
