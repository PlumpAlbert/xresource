const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./static/index.html",
	filename: "./index.html",
});

module.exports = {
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
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "public"),
		clean: true,
	},
};
