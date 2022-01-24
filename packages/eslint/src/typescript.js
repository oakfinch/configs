module.exports = {
  extends: ["../src/base.js"],
  overrides: [
    {
      files: ["**/*.+(ts|tsx)"],
      extends: [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        // prettier plugin must be last
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    }
  ],
};
