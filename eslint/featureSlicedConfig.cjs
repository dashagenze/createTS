module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:boundaries/recommended',
  ],
  settings: {
    'import/resolver': { typescript: {} },
    'boundaries/elements': [
      { type: 'app', pattern: 'app/*' },
      { type: 'pages', pattern: 'pages/*' },
      { type: 'processes', pattern: 'processes/*' },
      { type: 'widgets', pattern: 'widgets/*' },
      { type: 'features', pattern: 'features/*' },
      { type: 'entities', pattern: 'entities/*' },
      // Указываем, что именно в src, потому что папки shared у нас могут быть и в слайсах
      { type: 'shared', pattern: 'src/*/shared/*' },
    ],
    'boundaries/ignore': ['**/*.test.*'],
  },
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          { group: 'internal', position: 'after', pattern: '~/processes/**' },
          { group: 'internal', position: 'after', pattern: '~/pages/**' },
          { group: 'internal', position: 'after', pattern: '~/widgets/**' },
          { group: 'internal', position: 'after', pattern: '~/features/**' },
          { group: 'internal', position: 'after', pattern: '~/entities/**' },
          { group: 'internal', position: 'after', pattern: '~/shared/**' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          // У всех паттернов кроме pages и app уровень +1, т.к. мы можем захотеть сгруппировать те или иные сущности.
          // Рекомендуется группировать сущности по признаку связанности с тем или иным процессом.
          // Например - entities/database и entities/basket
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['~/src/app/**'],
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['~/src/pages/*/**'],
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['~/src/processes/*/*/**'],
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['~/src/widgets/*/*/**'],
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['~/src/features/*/*/**'],
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['~/src/entities/*/*/**'],
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['~/src/shared/*/*/**'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/app'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/processes'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/pages'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/widgets'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/features'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/entities'],
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/shared'],
          },
        ],
      },
    ],
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            from: 'app',
            allow: [
              'processes',
              'pages',
              'widgets',
              'features',
              'entities',
              'shared',
            ],
          },
          {
            from: 'processes',
            allow: ['pages', 'widgets', 'features', 'entities', 'shared'],
          },
          {
            from: 'pages',
            allow: ['widgets', 'features', 'entities', 'shared'],
          },
          { from: 'widgets', allow: ['features', 'entities', 'shared'] },
          { from: 'features', allow: ['entities', 'shared'] },
          { from: 'entities', allow: ['shared'] },
          { from: 'shared', allow: ['shared'] },
        ],
      },
    ],
  },
}
