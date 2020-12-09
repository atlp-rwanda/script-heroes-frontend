require('dotenv').config();
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    stats: 'minimal',
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 5000,
    contentBase: './build',
  },
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './public',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      baseUrl: '/',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_BACKEND_URL: JSON.stringify(
          process.env.REACT_APP_BACKEND_URL
        ),
      },
    }),
  ],
};
