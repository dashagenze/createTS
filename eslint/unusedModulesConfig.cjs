module.exports = {
  rules: {
    'import/no-unused-modules': [
      'error',
      {
        unusedExports: true,
        missingExports: true,
        ignoreExports: ['src/app/**'],
      },
    ],
  },
}
