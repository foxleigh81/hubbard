module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'sonarjs'],
  extends: ['eslint:recommended', 'plugin:sonarjs/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true
      },
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint'
      ]
    }
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'sonarjs/cognitive-complexity': 'warn',
    'react/prop-types': [2, { ignore: ['children'] }]
  }
}
