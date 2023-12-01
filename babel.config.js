const CONFIG_DEFAULT = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  ignore: ['src/setupTests.js', 'src/**/__tests__'],
};

const CONFIG_TESTS = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: 'auto',
        targets: 'last 2 Chrome versions',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
};

module.exports = process.env.NODE_ENV !== 'test' ? CONFIG_DEFAULT : CONFIG_TESTS;
