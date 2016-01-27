var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./app/main.js",
	output: {
		path: 'public',
		filename: 'javascripts/[name].[hash].js',
  },

  module: {
    loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel',
        include: /app/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css?minimize!'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loaders: [
					'file?name=images/[name].[hash].[ext]',
					'image-webpack?' + JSON.stringify({
						progressive: true,
						optimizationLevel: 7,
						interlaced: true
					})
				]
			},
			{
				test: /\.(woff|ttf|eot)$/,
				loader: 'file?name=fonts/[name].[hash].[ext]'
      }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
      inject: 'body'
    })
  ],

	devtool: "source-map"
};
