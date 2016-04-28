var path = require('path');
// var webpack = require('webpack');
// var definePlugin = new webpack.DefinePlugin({
//     __DEV__: JSON.stringify(JSON.parse(process.env.npm_package_config_build_dev || 'false')),
// });

module.exports = {
    entry: {
        summary: './test/summary.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'webpack_demo',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: [
                //使用.babelre的[配置]{@link http://babeljs.io/docs/usage/options/}
                'babel?babelrc'
            ],
            exclude: /node_modules/
        }]
    },
    //plugins: [definePlugin]
};
