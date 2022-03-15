module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multi-spaces': ['error', {exceptions: {'ImportDeclaration': true}}],
    'no-trailing-spaces': ['error', {'skipBlankLines': false, 'ignoreComments': false}],
    'prefer-const': ['error', {'destructuring': 'any'}],
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'quotes': ['error', 'single'],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'sort-keys': 'off',
    'no-multiple-empty-lines': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'new-parens': ['error'],
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    'max-classes-per-file': 'off',
    'max-len': ['error', {'code': 400}],
    '@typescript-eslint/type-annotation-spacing': ['off', {'before': false, 'after': true}],
    'arrow-parens': ['off', 'as-needed'],
    'eol-last': ['off', 'always'],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/array-type': ['off', {'default': 'array-simple', 'readonly': 'array-simple'}],
    'comma-dangle': ['off', {'arrays': 'always-multiline', 'objects': 'always-multiline', 'imports': 'always-multiline', 'exports': 'always-multiline', 'functions': 'never'}],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
