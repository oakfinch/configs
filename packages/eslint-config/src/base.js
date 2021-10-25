module.exports = {
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
