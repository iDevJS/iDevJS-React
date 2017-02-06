var webpackMerge = require('webpack-merge')
var commonConfig = require('./webpack.config.common.js')
var helpers = require('./helpers')

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  watch: true,
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8100/dist',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    port: 8100,
    contentBase: helpers.root('dist'),
    publicPath: 'http://localhost:8100/dist',
  },
  node: {
    __filename: false,
    __dirname: false
  },

  // plugins: [

  //   // new webpack.HotModuleReplacementPlugin()
  // ],
  target: 'web'
})
