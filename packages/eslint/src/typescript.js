module.exports = {
  extends: [
    "../src/javascript.js",
  ],
  overrides: [
    {
      files: ["src/**/*.+(ts|tsx)"],
      extends: [
        "../src/base.js",
        "../src/airbnb-typescript.js",
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
