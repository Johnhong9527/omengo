module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
    'quotes': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
