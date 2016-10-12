var path =  require('path');

var DIST_DIR = path.resolve(__dirname + "/dist");
var SRC_DIR = path.resolve(__dirname + "/src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        publicPath: "/app/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                loader: "babel-loader"
            }
        ]
    }
};

module.exports = config;