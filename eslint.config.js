import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default ts.config(
  {
    ignores: ['**/dist/', '**/node_modules/', '*.config.js'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [js.configs.recommended, ...ts.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
