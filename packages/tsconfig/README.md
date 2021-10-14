# tsconfig
Base tsconfig for oakfinch projects

------

[github](https://github.com/oakfinch/tsconfig) | [npm](https://www.npmjs.com/package/@oakfinch/tsconfig)

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
  "extends": "@oakfinch/tsconfig",
}
```

### Explicitly specify a cjs build

`tsconfig.json`
```json
{
  "extends": "@oakfinch/tsconfig/tsconfig.cjs.json",
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
  "extends": "@oakfinch/tsconfig/cjs",
}
```

`tsconfig.esm.json`
```json
{
  "extends": "@oakfinch/tsconfig/esm",
}
```

```bash
tsc --build tsconfig.json tsconfig.esm.json 
```