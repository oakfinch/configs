# prettier-config
Shared base [Prettier](https://prettier.io) config for @oakfinch projects

---

[![license](https://badgen.net/github/license/oakfinch/configs)](https://github.com/oakfinch/configs/blob/main/LICENSE)
[![TypeScript](https://badgen.net/badge/icon/TypeScript?icon=typescript&label=)](https://www.typescriptlang.org/)

[![latest release on npm](https://badgen.net/npm/v/@oakfinch/prettier-config?icon=npm&label=)](https://npmjs.com/package/@oakfinch/prettier-config)
[![latest release on github](https://badgen.net/github/release/oakfinch/prettier-config?icon=github&label=)](https://github.com/oakfinch/prettier-config/releases/latest)

---

[![github](https://badgen.net/badge/icon/github?icon=github&scale=2&label=)](https://github.com/oakfinch/prettier-config/)

---

## NOTE

This package is used by [`@oakfinch/eslint-config`](../eslint) via
[`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier).
If you're using `@oakfinch/eslint-config` and don't need to add any custom
prettier configuration, you do not need this package.

## Installation

Using `npm`:

```
npm install -D @oakfinch/prettier-config
```

Using `yarn`:

```
yarn add -D @oakfinch/prettier-config
```

## Usage

`.prettierrc.js`

```
module.exports = {
  ...require("@oakfinch/prettier-config"),
  // your rules here
};
```
