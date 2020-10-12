module.exports = {
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
  overrides: [
    {
      files: ['src/**/index.js'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}
