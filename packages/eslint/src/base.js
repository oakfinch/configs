module.exports = {
  extends: [
    "plugin:json/recommended",
    "plugin:markdown/recommended",
    "airbnb-base"
  ],
  ignorePatterns: ["coverage", "dist", "docs", "node_modules"],
  overrides: [
    {
      files: ['./*'],
      rules: {
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
      }
    }
  ]
};
