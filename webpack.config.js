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
  ],
  externals: {
    axios: 'axios'
  }
};

module.exports = [
  // For browsers
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'github-vue.min.js',
      libraryTarget: 'window',
      library: 'GithubVue'
    }
  }),
  
  // For Node
  merge(commonConfig, {
    entry: path.resolve(__dirname + '/src/GithubVue.vue'),
    output: {
      filename: 'github-vue.js',
      libraryTarget: 'umd',
      library: 'github-vue',
      umdNamedDefine: true
    }
  })
];
