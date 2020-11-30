const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = 'production';

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname),
		publicPath: path.resolve(__dirname),
	},
	mode: mode,
	devtool: (mode === 'development') ? 'inline-source-map' : false,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	target: 'node',
	externals: {
		"fs": "require('fs')",
	}
	// node: {
	// 	fs: 'empty',
	// }
}
