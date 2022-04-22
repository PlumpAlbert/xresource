const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./public/index.html",
	filename: "./index.html",
});

module.exports = {
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		htmlPlugin,
		new webpack.DefinePlugin({
			"process.env": {
				API_URL: process.env.API_URL || JSON.stringify("http://localhost"),
			},
		}),
	],
};
