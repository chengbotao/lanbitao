# webpack

**Q: 目录与环境**  
**A:** 如下:
  ::: tip
  1. 对于项目一般会有以下几个环境
    > 开发  
    > 测试  
    > 预发
    > 线上
  2. 对于 webpack 的配置环境
    > 开发  
    > 测试  
    > 线上
  :::

**Q: 比较优秀的 loader 和插件**  
**A:** 如下: 
  ::: tip
  plugins
    > webpack.DefinePlugin --- 在打包阶段定义全局变量
    > webpack.HashedModuledsPlugin --- (强缓存) 保持module id 稳定, hash为了缓存
    > webpack.NoEmitOErrorsPlugin --- 屏蔽错误 (在开发环境下不会因为小的错误导致dev模式关闭，需要重新dev)
    > webpack.ProvidePlugin --- 提供全局用到的第三方库
    > copy-webpack-plugin ---  拷贝目录内容到打包结构体里
  :::

**Q: 优化打包速度**  
**A:** 如下:
  ::: tip
  1. dll 优化
    > webpack.dll.config.js  
    > 第三方包一般不会改变,但webpack每次打包都会处理第三方包, 所以我们先处理第三方包,然后再打包
  ```js
    // webpack.dll.config.js
    const webpack = require("webpack");
    module.exports = {
      entry: {
        // vendor 为第三方库的集合
        vendor: ["jquery"]
      },
      output: {
        path: __dirname + "/dll",
        filename: "[name].dll.js",
        library: "[name]_library"
      },
      plugins: [
        new webpack.DllPlugin({
          path: __dirname + "/dll/[name]-manifest.json",
          name: "[name]_library"
        })
      ]
    }

    // webpack.config.js
    // ...
    module.exports = {
      // ...
      plugins: [
        // ...
        new webpack.DllReferencePlugin({
          // require 的是 webpack.dll.config.js 输出的json文件
          mainfest: require("./dll/vendor-manifest.json")
        })
      ]
    }
  ```
  2. Happypack 
    > js 单线程,node是可以开webWork 
    > 利用 node 的webWork 多线程处理文件 
  ```js
    // webpack.config.js
    const Happypack = require("happypack");
    // 开启多个线程池 根据cpu数量
    const happyPackThreadPool = Happypack.ThreadPool({
      // 通过node的os模块获取cpu的数量
      szie: os.cpu().length
    })
    module.exports = {
      // ...
      module: {
        rules: [
          {
            test: /\.js$/,
            // 使用单个loader
            // loader: "babel-loader",
            // 使用 Happypack 单独处理babel-loader 
            loader: "Happypack?loader='babel-loader'",
            // 使用多个loader
            /*use: [
              {
                loader: "babel-loader"
              }
            ]*/
          }
        ]
      },
      plugins: [
        new Happupack({
          id: "babel-loader",
          threadPool: happyPackThreadPool
        })
      ]
    }
  ```
  :::
**Q: webpack解决方案**  
**A:** 如下:
  ::: tip
  1. 对模块内容进行处理
    > 优先使用 loader   
    > loader 对某一类型的文件进行处理,一个文件相等于一个模块
  ```js
    // myloader.js
    module.exports = function(content){
      // 做处理
    }
  ```
  2. 增加特殊的功能
    > 自定义插件(plugin)
  ```js
    function A() {

    }
    A.prototype.apply = function(compiler){
      // 在 apply 对打包的某个周期进行监听
      // done、emit,...
      compiler.hooks.done.tap("dist", function(compilation){
        // dist 目录已经生成
        // 做处理
      })
    }
  ```
  3. 打包简化,可变性的配置
    > 编写相应的操作函数
    > e.g. 多页应用的入口文件 可以提取出一个方法来返回入口文件的集合
  :::
