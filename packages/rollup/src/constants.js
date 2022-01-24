const { existsSync } = require('fs')
const { dirname } = require('path')
const { pkgUpSync } = require('pkg-up')

module.exports.PROJECT_ROOT = dirname(pkgUpSync({ cwd: process.cwd() }))

module.exports.TSCONFIG = `${PROJECT_ROOT}/tsconfig.json`

module.exports.IS_TYPESCRIPT = existsSync(paths.TSCONFIG)

module.exports.ENVS = {
  PROD: 'production',
  DEV: 'development'
}

module.exports.OUT_DIR = 'dist'

module.exports.MODULE_FORMATS = [ 'es', 'cjs']

module.exports.DEFAULT_NODE_ENV = ENVS.PROD

module.exports.NODE_ENV = process.env.NODE_ENV ?? DEFAULT_NODE_ENV

module.exports.MINIFY_ENVS = [ENVS.PROD]

module.exports.COMPACT = MINIFY_ENVS.includes(NODE_ENV)

module.exports.APP_FILENAME = `app.bundle.${COMPACT ? '.min' : ''}.js`

module.exports.PATHS = Object.fromEntries(
  Object.entries({
    TSCONFIG,
    MODULE_ENTRY: `${PROJECT_ROOT}/src/index.[ext]`,
    APP_ENTRY: `${PROJECT_ROOT}/src/app.[ext]`
  })
  .map(([key, val]) => [key, val.replace(/\[ext]/, IS_TYPESCRIPT ? 'ts' : 'js')])
  .map(([key, val]) => [key, existsSync(val) ? val : undefined])
)
