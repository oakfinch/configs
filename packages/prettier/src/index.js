const { config, jsxBracketSameLine: bracketSameLine } = require('prettier-airbnb-config')

module.exports = {
  bracketSameLine,
  ...config,
  semi: false
};
