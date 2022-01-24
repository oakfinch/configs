const typescript = require('@rollup/plugin-typescript')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { PATHS } = require('./constants')

module.exports.BASE = {
  cache: true,
  output: {
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    ...(PATHS.TSCONFIG ? [typescript()] : [])
  ],
}

module.exports.default = BASE
