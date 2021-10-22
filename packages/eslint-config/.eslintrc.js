module.exports = {
  extends: ['./src/exports/base.js'],
  overrides: [
    {
      files: ['./src/exports/*.mjs'],
      rules: {
        'global-require': 'off',
      },
    },
  ],
  ignorePatterns: [
    '!exports/*',
  ],
};
