import { BASE } from './base.js'
import { OUT_DIR, MODULE_FORMATS, PATHS, APP_FILENAME, COMPACT } from './constants.js'

const moduleConfig = PATHS.MODULE_ENTRY && {
  ...BASE,
  input: PATHS.MODULE_ENTRY,
  output: MODULE_FORMATS.map(format => ({
    ...BASE.output,
    format,
    dir: `${OUT_DIR}/${format}`,
    preserveModules: true,
  })),
  external: [ /node_modules/ ]
}

const appConfig = PATHS.APP_ENTRY && {
  ...BASE,
  input: PATHS.APP_ENTRY,
  output: {
    ...BASE.output,
    compact: COMPACT,
    file: `${OUT_DIR}/${APP_FILENAME}`,
  }
}

export const config = [
  ...(moduleConfig ? [moduleConfig] : []),
  ...(appConfig ? [appConfig] : []),
]

export default config
