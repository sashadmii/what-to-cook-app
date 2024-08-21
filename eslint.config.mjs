import globals from 'globals';
import js from '@eslint/js';
import eslintReact from 'eslint-plugin-react';
import eslintImport from 'eslint-plugin-import';
import eslintSimpleImportSort from 'eslint-plugin-simple-import-sort';

/** @type {import('eslint').Linter.FlatConfig[]} */

export default [
  {
    plugins: {
      react: eslintReact,
      import: eslintImport,
      'simple-import-sort': eslintSimpleImportSort,
    },
  },
  {
    ignores: ['node_modules'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, process: true },
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      'react/prop-types': 0,
      'import/prefer-default-export': 0,
      'no-restricted-syntax': [
        'error',
        'WithStatement',
        "BinaryExpression[operator='in']",
      ],

      semi: ['error', 'always'],
      'no-debugger': 'error',
      'no-console': 'warn',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],

      'import/no-cycle': [
        'error',
        {
          maxDepth: 1,
        },
      ],

      'no-underscore-dangle': 'off',

      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      'max-len': [
        1,
        {
          code: 120,
        },
      ],

      'no-useless-constructor': 'error',
      'no-unused-vars': 'error',

      'no-empty-function': [
        'error',
        {
          allow: ['constructors'],
        },
      ],

      camelcase: 'warn',
      'class-methods-use-this': 'off',
      'max-classes-per-file': ['error', 4],
      'consistent-return': 'off',
      'no-shadow': 'off',
    },
  },
];
