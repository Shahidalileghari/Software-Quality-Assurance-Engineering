export default [{
  files: ['**/*.js'],
  ignores: ['node_modules/**', 'coverage/**', 'playwright-report/**'],
  languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'no-unused-vars': 'warn',
    'no-constant-condition': 'error',
    'eqeqeq': ['error', 'always'],
    'no-duplicate-imports': 'error'
  }
}];
