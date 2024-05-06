const typeScriptRules = require('./rulesets/typeScriptRules.cjs')

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['nested-if', 'prettier'],
  extends: [
    'hardcore',
    'hardcore/ts',
    'hardcore/react',
    'hardcore/react-performance',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.*rc.js', 'eslint/**'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'putout/putout': 'off',
    'ext/lines-between-object-properties': ['error', 'never'],
    'nested-if/nested-if-statements': ['error', 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never'],
    'import/exports-last': 'off',
    'import/no-named-as-default': 'off',
    'perfectionist/sort-objects': 'off',
    //Вызывает ошибки в IDE. Включено в отдельном конфиге.
    'import/no-unused-modules': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          args: true,
          props: true,
          Props: true,
          params: true,
          Params: true,
          ref: true,
          Ref: true,
        },
        ignore: ['\\.e2e$', '\\.e2e-spec$'],
        checkShorthandProperties: true,
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'react/forbid-component-props': 'off',
    'react/function-component-definition': 'off',
    ...typeScriptRules,
  },
}
