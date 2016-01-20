var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./app/main.js",
  output: {
    path: 'public',
    filename: 'js/[name].[hash].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.(js|jsx)$/,
        include: /app/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        loader: 'file',
        test: /\.(png|jpg|jpeg|gif)$/
      },
      {
        loader: 'file',
        test: /\.(svg|woff|ttf|eot)$/
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body'
    })
  ]
};
