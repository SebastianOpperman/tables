const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, mode) => {
	return {
		entry: "./src/index.tsx",
		stats: "minimal",
		watch: mode === "development",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js",
		},
		resolve: {
			extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
		},
		devServer: {
			contentBase: path.join(__dirname, "dist"),
			port: 3000,
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					loader: "awesome-typescript-loader",
				},
				{
					test: /\.js$/,
					loader: "source-map-loader",
				},
				{
					test: /\.css$/,
					use: [
						"style-loader",
						{ loader: "css-loader", options: { importLoaders: 1 } },
						{
							loader: "postcss-loader",
							options: {
								ident: "postcss",
								plugins: () => [
									require('postcss-preset-env')({stage: 0}),
									require('autoprefixer'),
									require('postcss-nested')
								],
							},
						},
					],
				},

			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "public", "index.html"),
			}),
		],
	};
};
