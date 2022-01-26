import { getInputConfig } from "./get-input-config.js";
import { getOutputConfig } from "./get-output-config.js";
import { getConfigType } from "./get-config-type.js";
import { getPluginConfig } from "./get-plugin-config.js";
import { BUILD_TYPES } from "./constants.js";

export const rollup = (config) => {
  if (Array.isArray(config)) {
    return config.map(conf => rollup(conf))
  }

  const type = getConfigType(config)
  return {
    cache: true,
    ...config,
    external: [
      ...(config.external ?? []),
      ...(type === BUILD_TYPES.LIB ? [/node_modules/] : []),
    ],
    ...getInputConfig(config),
    ...getOutputConfig(config),
    ...getPluginConfig(config),
  }
};

export const library = rollup({
  output: {
    preserveModules: true
  }
})

export const app = rollup({
  output: {
    preserveModules: false
  }
})

export const configs = [library, app]

export default rollup
