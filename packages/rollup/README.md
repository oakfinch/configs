# rollup-config
Shared base [rollup](https://rollupjs.org/guide/en/) config for @oakfinch projects

------

[![license](https://badgen.net/github/license/oakfinch/configs)](https://github.com/oakfinch/configs/blob/main/LICENSE)
[![TypeScript](https://badgen.net/badge/icon/TypeScript?icon=typescript&label=)](https://www.typescriptlang.org/)

[![latest release on npm](https://badgen.net/npm/v/@oakfinch/rollup-config?icon=npm&label=)](https://npmjs.com/package/@oakfinch/rollup-config)
[![latest release on github](https://badgen.net/github/release/oakfinch/tsconfig?icon=github&label=)](https://github.com/oakfinch/tsconfig/releases/latest)

------

[![github](https://badgen.net/badge/icon/github?icon=github&scale=2&label=)](https://github.com/oakfinch/tsconfig/)

------

## Installation

Using `npm`:

```
npm install --save-dev @oakfinch/rollup-config
```

Using `yarn`:

```
yarn add -D @oakfinch/rollup-config
```

## Usage

`rollup.config.js`
```javascript
import { configs } from '@oakfinch/rollup-config'

export default configs
```

For libraries, CommonJS and ES modules will be created in `dist/cjs` and `dist/es`.

An application bundle will be built in `dist/bundle/app.js`
(and `dist/bundle/app.min.js`) if your project has a file named `src/app.js`
(or `src/app.ts`) with that file being used as the entrypoint.
