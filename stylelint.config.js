module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'apply', 'tailwind', 'components', 'utilities', 'screen'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'declaration-empty-line-before': ['never'],
    'comment-empty-line-before': ['never'],
    'no-empty-source': null,
    'no-descending-specificity': null,
    'block-no-empty': null,
  },
}
