module.exports = function(api) {
  api.cache(false);
  return {
    plugins: [
      '@realm/babel-plugin',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      'react-native-reanimated/plugin',
    ],
    presets: ['babel-preset-expo'],
  };
};
