module.exports = {
  extends: [
    "plugin:json/recommended",
    "plugin:markdown/recommended",
    "airbnb-base"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".cjs", ".mjs", ".json"],
      },
    },
    "import/extensions": [".cjs", ".mjs", ".json"],
  },
  ignorePatterns: ["coverage", "dist", "docs", "node_modules"]
};
