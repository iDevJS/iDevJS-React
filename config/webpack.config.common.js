var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'index': './src/index.tsx'
  },
  resolve: {
    root: path.join(__dirname, '..'),
    extensions: ['', '.tsx', '.ts', '.js', 'styl', '.json']
  },
  externals: {
    'codemirror': 'CodeMirror'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!stylus')
      },
      {
        test: /\.css$/,
        // include: helpers.root('src', 'app'),
        loader: 'raw!style!css'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
