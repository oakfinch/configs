module.exports = {
  extends: ["./src/exports/javascript.js"],
  overrides: [
    {
      files: ["./src/exports/*.mjs"],
      rules: {
        "global-require": "off",
      },
    },
  ],
};
