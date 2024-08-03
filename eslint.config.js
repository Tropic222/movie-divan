import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlagin from 'eslint-plugin-prettier';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  prettierConfig,

  {
    plagins: {
      prettier: prettierPlagin,
    },
    rules: {
      'prettier/prett': 'error',
    },
  },
];
