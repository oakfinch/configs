import { PATHS, BUILD_TYPES, ENTRY_NAMES } from "./constants.js"
import { getConfigType } from "./get-config-type.js"

export const getInputConfig = config => {
  if (config.input) {
    return { input: config.input }
  }

  const type = getConfigType(config)
  const input = Object.fromEntries(
    (type === BUILD_TYPES.APP
      ? [BUILD_TYPES.APP]
      : [BUILD_TYPES.LIB, BUILD_TYPES.APP]
    )
    .map(buildType => [ENTRY_NAMES[buildType], PATHS.ENTRY[buildType]])
    // .filter(([, path]) => !!path)
  )

  return { input }
}