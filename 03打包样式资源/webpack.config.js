/*
webpack.config.js  webpack的配置文件
作用：指示webpack干那些活儿(当你运行 webpack指令时，会加载里面的配置)

所有构建工具都是基于nodejs平台运行的，
模块化默认采用commonjs.

*/

const { resolve } = require('path');

module.exports = {
    //webpack配置
    // 入口起点
    entry: './src/index.js',

    output: {
        //输出文件名称
        filename: 'built.js',
        //输出路径
        // __dirname 是nodejs的变量，代表当前文件的绝对路径
        path: resolve(__dirname,'build')
    },
    //loader的配置
    module: {
        rules: [
            //详细的loader配置
            {
                //匹配那些文件
                test: /\.css$/,
                //使用那些loader进行处理
                use: [
                    // use数组中loader 执行顺序：从右到左，就是现在从下往上
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css 文件变成commonjs模块加载到js中，里面的内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //注意这里需要下载 less-loader 和 less这两个loader
                    'less-loader'
                ]
            }
        ]
    },
    //plugins的配置
    plugins: [
        //详细plugins的配置
    ],
    //模式
    mode: 'development'
    // mode: 'production'
}