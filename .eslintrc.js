module.exports = {
  extends: [
    // 'erb',
    'eslint:recommended',
    'airbnb-typescript',
  ],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-param-reassign': ['error', { props: false }],
    // A temporary hack related to IDE not resolving correct package.json
    '@typescript-eslint/no-empty-interface': 'off',
    'react/no-unused-prop-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    'operator-linebreak': ['error', 'after'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'implicit-arrow-linebreak': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['off'],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'object-curly-newline': ['error', { consistent: true }],
    semi: ['error'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'arrow-parens': ['error', 'as-needed'],
    'import/order': 'off',
    // 'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'func-names': ['error', 'as-needed'],
    // If production: replace below
    // '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': 'off',
    // 'arrow-body-style': ['warn', 'as-needed', { requireReturnForObjectLiteral: true }],
    'arrow-body-style': 'off',
    'import/no-duplicates': 'off',
    'import/no-self-import': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'react/require-default-props': [0],
    'react/jsx-one-expression-per-line': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./config/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
