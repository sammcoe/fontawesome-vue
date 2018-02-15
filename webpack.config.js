const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
  output: {
    path: path.resolve(__dirname + '/dist/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
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
