const withCss = require('@zeit/next-css')
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const aliases = {
  'reactism/components': path.resolve(__dirname, 'components/'),
  'reactism/static': path.resolve(__dirname, 'static/'),
  'reactism/containers': path.resolve(__dirname, 'components/containers/'),
  'reactism/elements': path.resolve(__dirname, 'components/elements/'),
  'reactism/utils': path.resolve(__dirname, 'components/utilities/'),
  'reactism/layout': path.resolve(__dirname, 'components/pageLayouts/'),
  'reactism/hocs': path.resolve(__dirname, 'hocs/'),
  'reactism/actions': path.resolve(__dirname, 'redux/actions'),
  'reactism/reducers': path.resolve(__dirname, 'redux/reducers'),
  'reactism/moduls': path.resolve(__dirname, 'redux/moduls'),
  'reactism/types': path.resolve(__dirname, 'redux/types'),
  'reactism/config': path.resolve(__dirname, 'config/'),
  'reactism/routes': path.resolve(__dirname, 'config/routes')
}

module.exports = withCss({
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },

  // Disallow pages as route
  useFileSystemPublicRoutes: false,

  // Alias
  alias: aliases,

  // Webpack
  webpack: (config) => {
    // Resolve path
    config.resolve = {
      extensions: ['.js', '.jsx', '.scss', '.css', '.mdx'],
      alias: aliases,
    }

    config.node = {
      fs: 'empty'
    }

    // Service Worker
    // config.plugins.push(
    //   new SWPrecacheWebpackPlugin({
    //     verbose: true,
    //     staticFileGlobsIgnorePatterns: [/\.next\//],
    //     runtimeCaching: [
    //       {
    //         handler: 'networkFirst',
    //         urlPattern: /^https?.*/
    //       }
    //     ]
    //   })
    // )

    config.module.rules.push(
      {
        test: /.*\.(otf|eot|woff|woff2|ttf|svg|png|jpe?g|gif|md)$/i,
        use: [
          {
            loader: 'url-loader'
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    )

    return config
  }

})
