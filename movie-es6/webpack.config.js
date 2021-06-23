var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app.bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      // { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        // query: {
        //   name: 'src/assets/[name].[hash:8].[ext]',
        // },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    inject: 'body',
  })],
  devServer: {
    contentBase: './src/public',
  },
};
