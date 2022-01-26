import { BUILD_TYPES, MODULE_FORMATS, BASE, BUILD_DIR, APP_BUNDLE_FILENAME } from './constants.js'
import { getConfigType } from './get-config-type.js';

const getMinifiedFilename = file => file.replace(
  /(\.min)?\.([^\.]+)$/,
  '.min.$2'
);

const getConfig = (type, output, index) => {
  if (Array.isArray(output)) {
    return output.map((o, i) => getConfig(type, o, i))
  }

  if (typeof index === 'undefined') {
    if (type === BUILD_TYPES.LIB) {
      // create one output config for each module format
      return new Array(MODULE_FORMATS.length)
        .fill(getConfig(type, output, 0))
        .map((o, i) => ({ ...o, format: MODULE_FORMATS[i] }))
    }

    if (type === BUILD_TYPES.APP) {
      // create two output configs, one minified, and one not
      return new Array(2)
        .fill(getConfig(type, output, 0))
        .map(({ compact: _, file = APP_BUNDLE_FILENAME, ...o }, compact) => ({
          compact: !!compact,
          file: !!compact ? getMinifiedFilename(file) : file,
          ...o
        }))
    }
  }

  return {
    ...BASE[BUILD_TYPES.SHARED].output,
    ...(
      output.preserveModules
        ? BASE[BUILD_TYPES.LIB].output
        : BASE[BUILD_TYPES.APP].output
    ),
    ...(
      output.preserveModules ? {} : {
        file: output.compact
          ? getMinifiedFilename(APP_BUNDLE_FILENAME)
          : APP_BUNDLE_FILENAME
      }
    ),
    ...output,
    dir: `${BUILD_DIR}/${type}`,
  }
}

export const getOutputConfig = config => {
  const type = getConfigType(config)
  return { output: getConfig(type, config.output) }
}
