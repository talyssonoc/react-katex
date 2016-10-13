const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'react-katex': './index.js',
    'react-katex.min': './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ReactKaTeX',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    katex: 'katex'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compressor: { warnings: false },
      sourceMap: false
    })
  ]
};
