module.exports = {
  extends: [
    "plugin:json/recommended",
    "plugin:markdown/recommended",
    "airbnb-base"
  ],
  overrides: [{ files: ["**/*.+(jsx|cjs|mjs)"] }],
  ignorePatterns: ["coverage", "dist", "docs", "node_modules"]
};
