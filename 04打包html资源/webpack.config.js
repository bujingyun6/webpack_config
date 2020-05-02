/*
loader: 1.下载， 2.使用
plugins : 1.下载 2.引用，3使用
*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // loader 的配置
        ]
    },
    plugins: [
        // plugins 的配置
        // html-webpack-plugin 插件,默认会创建一个html文件，自动引入打包输出的所有资源(js/css)
        // 需求：需要有个结构的html 文件
        new HtmlWebpackPlugin({
            //复制 ./src/index.html 文件，并自动引入打包输出的所有资源(js/css)
            template: './src/index.html'
        })
    ],
    mode: 'development'
}