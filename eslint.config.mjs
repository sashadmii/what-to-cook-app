import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintImport from 'eslint-plugin-import';
import eslintSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: [
      'dist/**/*.ts',
      'dist/**',
      '**/*.mjs',
      'eslint.config.mjs',
      '**/*.js',
    ],
  },
  {
    plugins: {
      'simple-import-sort': eslintSimpleImportSort,
      import: eslintImport,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
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

      'simple-import-sort/imports': 'error',
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

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          mjs: 'never',
          jsx: 'never',
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
      'simple-import-sort/imports': 'error',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  }
);
