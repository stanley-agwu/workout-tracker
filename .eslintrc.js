module.exports = {
  extends: ['utility', 'utility/import'],
  parserOptions: {
    project: './backend/tsconfig.json',
  },
  rules: {
    'no-underscore-dangle': 1,
    'import/no-import-module-exports': 1,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/no-namespace': 1,
  },
};
