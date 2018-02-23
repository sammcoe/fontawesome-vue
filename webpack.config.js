const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJs = require('uglifyjs-webpack-plugin');
const path = require('path');

var commonConfig = {
  output: {
    path: path.resolve(__dirname + '/dist/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.sass$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'sass-loader'
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new UglifyJs( {
      sourceMap : false,
      uglifyOptions: {
        mangle: true,
        compress: {
          warnings: false
        }
      }
    })
  ]
};

module.exports = [
  // For browsers
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'fontawesome-vue.min.js',
      libraryTarget: 'window',
      library: 'faVue'
    }
  }),
  
  // For Node
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'fontawesome-vue.js',
      libraryTarget: 'umd',
      library: 'fontawesome-vue',
      umdNamedDefine: true
    }
  })
];
