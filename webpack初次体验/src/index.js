/*
  index.js 是webpack 入口起点文件

  1.运行指令
  开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
  webpack 会以 ./src/index.js 入口文件开始打包，打包后输出到 ./build/built.js
  整体环境是开发环境

  生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
  webpack 会以 ./src/index.js 入口文件开始打包，打包后输出到 ./build/built.js
  整体环境是生产环境

  2.结论：
   a.webpack 能处理js/json资源，不能处理css/img等其他资源
   b.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
   c.生产环境比开发环境多一个压缩js代码。
*/

import data from './data.json'

console.log(data)

function add(x, y) {
    return x + y;
}

console.log(add(2, 3))