var path = require('path');

var assetsPath = path.join(__dirname, "public", "assets");
var serverPath = path.join(__dirname, "server");

var commonLoaders = [
	{ test: /\.js$/, loader: "jsx-loader" },
	{ test: /\.png$/, loader: "url-loader" },
	{ test: /\.jpg$/, loader: "file-loader" },
]

module.exports = [
	{
		name: "browser",
		entry: './app/entry.js',
		output: {
			path: assetsPath,
			filename: 'entry.generator.js'
		},
		module: {
	        rules: [ 
	            { test: /\.js/, loader: "jsx-loader" }
	        ]
	    }

	},
	{
		name: "server-side rending",
		entry: './server/page.js',
		target: "node",
		output: {
			path: serverPath,
			filename: "page.generator.js",
			// 使用page.generator.js的是nodejs，所以需要将
			// webpack模块转化为CMD模块
			library: 'page',
			libraryTarget: 'commonjs2' 
		},
		module: {
			rules: [ 
	            { test: /\.js/, loader: "jsx-loader" }
	    	]

		}
	}
]