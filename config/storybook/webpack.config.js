const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // configType = 'DEVELOPMENT' or 'PRODUCTION'
  // ('PRODUCTION' is used when building the static version of storybook)

  // resolve root for module includes
  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    'src': path.resolve(__dirname, '../../src'),
  }

  // From react webpack.config.dev.js
  defaultConfig.module.rules.push({
    test: /\.(css|pcss)$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes')(),
            require('postcss-import')(),
            require('postcss-cssnext')({
              features: {
                customProperties: {
                  variables: Object.assign(
                    require('material-ui/styles/colors'),
                    require('../../src/theme/colors')
                  )
                }
              }
            })
          ],
        },
      },
    ],
    include: path.resolve(__dirname, '../../')
  })

  // Return the altered config
  return defaultConfig;
};
