module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': 'off',
    'react/prop-types': 'off',
    indent: [
      'error',
      2
    ],
    'eol-last': 'off'
  }
}
