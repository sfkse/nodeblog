module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
  },
};
