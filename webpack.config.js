const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
    new Dotenv({
      path: '.env',
      safe: true,
      allowEmptyValues: false,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      baseUrl: '/',
    }),
    new Dotenv({
      path: './.env',
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
  ],
};
