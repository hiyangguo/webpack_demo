var path = require('path');
var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.npm_package_config_build_dev || 'false'))
});
var websitePath = process.env.npm_package_config_website_path || '/';

module.exports = {
    //入口文件
    entry: {
        index: './test/index.js'
    },
    //输出
    output: {
        //使用绝对路径
        publicPath: websitePath,
        //路径
        path: path.join(__dirname, 'dist'),
        //文件名 [name].js 以源文件名输出
        filename: '[name].js',
        library: 'webpack_demo',
        libraryTarget: 'umd'
    },
    module: {
        //[加载器]{@link http://webpack.github.io/docs/using-loaders.html}
        //所有的loaders 都需要先使用 npm install xxx-loader --save-dev安装
        loaders: [{
            //匹配文件规则
            test: /\.js$/,
            //加载器，每一个加载器为数组的一项
            loaders: [
                //使用.babelre的[配置]{@link http://babeljs.io/docs/usage/options/}
                'babel?babelrc'
            ],
            //排除的文件夹
            exclude: /node_modules/
        }, {
            //[less loader]{@link https://github.com/webpack/less-loader}
            test: /\.less$/,
            //加载器 多个加载器用!隔开
            loader: 'style!css!less'
        }, {
            //[css loader]{@link https://github.com/webpack/css-loader}
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpe?g|gif)$/,
            // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.ico$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.eot$|\.ttf$|\.svg$|\.woff2?$/,
            loader: 'file?name=[name].[ext]'
        }]
    },
    plugins: [definePlugin]
};
