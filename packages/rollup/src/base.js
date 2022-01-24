import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { PATHS } from './constants.js'

export const BASE = {
  cache: true,
  output: {
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    ...(PATHS.TSCONFIG ? [typescript()] : [])
  ],
}

export default BASE
