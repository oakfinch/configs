# tsconfig
Shared base [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for @oakfinch projects

------

[![license](https://badgen.net/github/license/oakfinch/configs)](https://github.com/oakfinch/configs/blob/main/LICENSE)
[![TypeScript](https://badgen.net/badge/icon/TypeScript?icon=typescript&label=)](https://www.typescriptlang.org/)

[![latest release on npm](https://badgen.net/npm/v/@oakfinch/tsconfig?icon=npm&label=)](https://npmjs.com/package/@oakfinch/tsconfig)
[![latest release on github](https://badgen.net/github/release/oakfinch/tsconfig?icon=github&label=)](https://github.com/oakfinch/tsconfig/releases/latest)

------

[![github](https://badgen.net/badge/icon/github?icon=github&scale=2&label=)](https://github.com/oakfinch/tsconfig/)

------

## Installation

Using `npm`:

```
npm install --save-dev @oakfinch/tsconfig
```

Using `yarn`:

```
yarn add -D @oakfinch/tsconfig
```

## Usage

### Basic usage

Defaults to a commonjs build with an es5 target, output to the `./dist` directory

`tsconfig.json`
```json
{
  "extends": "@oakfinch/tsconfig"
}
```

### Explicitly specify a cjs build

`tsconfig.json`
```json
{
  "extends": "@oakfinch/tsconfig/tsconfig.cjs.json"
}
```

### ESM build

`tsconfig.json`
```json
{
  "extends": "@oakfinch/tsconfig/tsconfig.esm.json",
}
```

### Multiple builds

You can create multiple builds by having multiple config files, and then
specifying them with the `--build` flag.

When using multiple builds, you'll want to reference the files as `@oakfinch/tsconfig/<type>`
rather than `@oakfinch/tsconfig/tsconfig.<type>.json` to avoid the builds overriding
each other due to having the same `outDir`.

`tsconfig.json`
```json
{
  "extends": "@oakfinch/tsconfig/tsconfig.cjs.json"
}
```

`tsconfig.esm.json`
```json
{
  "extends": "@oakfinch/tsconfig/tsconfig.esm.json",
}
```

```bash
tsc --build tsconfig.json tsconfig.esm.json 
```