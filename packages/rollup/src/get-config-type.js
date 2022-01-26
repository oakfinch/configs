import { BUILD_TYPES } from './constants.js'

const cache = new Map()

export const getConfigType = config => {
  if (cache.has(config)) {
    return cache.get(config)
  }

  const isLibrary = Array.isArray(config.output)
    ? config.output.every(({ preserveModules }) => !!preserveModules)
    : !!config.output?.preserveModules
  
  const isApp = Array.isArray(config.output)
    ? config.output.every(({ preserveModules }) => !preserveModules)
    : !config.output?.preserveModules

  const type = (
    (isLibrary && !isApp) ? BUILD_TYPES.LIB :
    (isApp && !isLibrary) ? BUILD_TYPES.APP :
    BUILD_TYPES.OTHER
  )

  cache.set(config, type)

  return type
}