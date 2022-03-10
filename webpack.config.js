const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'assets');
const commonLoaders = [
  { test: /\.js$/,

      loaders: [
          'react-hot',
          'babel-loader'
          //,'jsx-loader'
      ]
  }
];

const config = 
{
  name: 'client',
  target: 'web',
  mode: 'development',
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081' // WebpackDevServer host & port

  ],
  output: {
    path: buildPath,
    filename: '[name].js',
    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: 'http://localhost:8081/assets/'
  },
  resolve: {
      alias: {
          semantic: path.resolve(__dirname, 'semantic/src/'),
      },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    'static': {
      directory: buildPath
    }
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + '/public/index.html',
          filename: 'index.html',
          inject: 'body'
      })
  ]
};

module.exports = [ config ];