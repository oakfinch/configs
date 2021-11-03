# lint-staged-config
Shared base [lint-staged](https://github.com/okonet/lint-staged) config for @oakfinch projects

---

[![license](https://badgen.net/github/license/oakfinch/configs)](https://github.com/oakfinch/configs/blob/main/LICENSE)
[![latest release on npm](https://badgen.net/npm/v/@oakfinch/lint-staged-config?icon=npm&label=)](https://npmjs.com/package/@oakfinch/lint-staged-config)
[![latest release on github](https://badgen.net/github/release/oakfinch/lint-staged-config?icon=github&label=)](https://github.com/oakfinch/lint-staged-config/releases/latest)

---

[![github](https://badgen.net/badge/icon/github?icon=github&scale=2&label=)](https://github.com/oakfinch/lint-staged-config/)

---

## Installation

Using `npm`:

```
npm install --save-dev @oakfinch/lint-staged-config
```

Using `yarn`:

```
yarn add -D @oakfinch/lint-staged-config
```

## Usage

`.lintstaged.js`

```
module.exports = {
  ...require("@oakfinch/lint-staged-config"),
  // your rules here
};
```
