module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:json/recommended", "airbnb-base"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".cjs", ".mjs", ".jsx", ".json"],
      },
    },
    "import/extensions": [".js", ".cjs", ".mjs", ".jsx", ".json"],
  },
};
