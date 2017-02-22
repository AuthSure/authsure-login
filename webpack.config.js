var path = require("path");
module.exports = {
	entry: {
		"bundle": "./src/index.js"
	},
	output: { // https://webpack.js.org/concepts/output/#output-library
		// The absolute path to place the output
		path: path.resolve(__dirname, "dist"),
		// The filename to output in disk, [name] is the chunk
		filename: "[name].js",
		// The path the output will be served under (used by the dev server
		publicPath: "/",
		// The name of the library being published
		library: 'AuthSure',
		// The format to export the library
		libraryTarget: "var"
	},
	resolve: {
		// add ts and tsx extensions for typescript
		extensions: [".js", ".json", ".ts", ".tsx"]
	},
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ test: /\.js$/, enforce: "pre", loader: "source-map-loader" },
			{ test: /\.html$/, loader: "file-loader?name=[name].[ext]" },
			{ test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=[name].[ext]" },
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"jquery": "jQuery"
	},
	devServer: {
		port: 8888,
        historyApiFallback: true,
		watchOptions: {
			poll: 1000
		}
	},
	performance: {
		hints: false
	}
};