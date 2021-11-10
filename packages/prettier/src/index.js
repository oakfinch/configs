const { jsxBracketSameLine: bracketSameLine, ...config } = require('prettier-airbnb-config')

module.exports = {
  bracketSameLine,
  ...config,
  semi: false
};
