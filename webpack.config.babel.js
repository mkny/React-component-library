import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const isProduction = process.env.NODE_ENV !== 'development';
const libraryName = "react-sb-components";

const config = {
	entry: path.join(__dirname, 'src/index.js'),
	mode: isProduction ? 'production' : 'development',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: libraryName + (isProduction ? '.min.js' : '.js'),
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	plugins: [],
	optimization: {
		minimizer: []
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /(\.jsx|\.js)$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}]
	}
}

if (isProduction) {
	config.optimization.minimizer.push(new UglifyJsPlugin());
}

module.exports = config;