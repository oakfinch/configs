module.exports = {
  extends: [
    "../src/javascript.js",
  ],
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      extends: [
        "../src/base.js",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      settings: {
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
        },
        "import/extensions": [".ts", ".tsx"],
      },
    }
  ],
};
