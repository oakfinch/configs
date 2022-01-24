module.exports = {
  extends: [
    "plugin:json/recommended",
    "plugin:markdown/recommended",
    "../src/base.js",
    // prettier plugin must be last
    "plugin:prettier/recommended"
  ],
  overrides: [{ files: ["**/*.+(jsx|cjs|mjs)"] }],
}
