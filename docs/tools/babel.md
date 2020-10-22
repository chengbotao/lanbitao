# Babel

## 起因:

对于前端搬砖小工在写一个项目为了使 **新语法(ES6,ES7..)** 兼容 **低版本浏览器** ，都会用到 **Babel** 来转，但使用一些实例的方法 **(Array.includes、Object.assign、async..)**，虽然配置Babel但还会报错,下面就来看看解决方法：

## Babel 作用:

**Babel**是前端的一把利器，使我们可以使用最新JavaScript语法开发，但它不能转化新的API及实例对象的新方法，我们需要使用**polyfill**来达到目的

## 1. 全局引入 babel-polyfill

```js
	// 下载（生产环境下dependencies）
	npm install babel-polyfill --save
	// 使用
	import 'babel-polyfill' // require('babel-polyfill')
	// 如果使用webpack构建的项目可以让babel-polyfill作为入口添加到entry中
	entry：{
		app: [
	         "babel-polyfill",
	         path.join(__dirname, 'src/index.js')
	     ]
	}
```

**优点：** 
::: tip
1. 引入一次，所有高级语法、API、实例方法，随你使用
:::

**缺点：** 
::: tip
1. 使用后 polyfill 构建并 uglify 后的大小为 98k，gzip 后为32.6k，对于性能消耗太大，性能与使用是否方便的根据自己的需要权衡；

2. babel-polyfill 非常暴力，因为它是一个整体，把所有方法都加到原型链上,污染全局变量

3. 在你的整个应用里只能引用一次babel-polyfill。多次引用babel-polyfill会引起报错，因为它可能导致全局冲突和其他难以追踪的问题
:::

## 2. 引入core-js 
::: warning
因为**core-js** 里实现了大部分 **e6、es7** 的高级语法  
**babel-polyfill**也是集成**core-js**和**regenerator**
:::

```js
	// 下载
	npm install core-js
	// 使用
	// 全量引入
	import 'core-js'
	// 差量引入，就是你需要那个你引用那个
	import 'core-js/fn/array/includes' // import 'core-js/library/fn/array/includes'
```	

**core-js使用文档**
::: warning
#### [core-js  npm](https://www.npmjs.com/package/core-js "core-js  npm")

#### [core-js github](https://github.com/zloirock/core-js "core-js github")
:::

**优点：** 
::: tip
1. 相对于babel-polyfill，按需引入。
:::

**缺点：** 
::: tip
1. 手动去引相应的依赖
:::

## 3. 使用babel-runtime和babel-plugin-transform-runtime
::: warning
**babel-plugin-transform-runtime**的polyfill就是依赖**babel-runtime**，两个结合可以实现除了实例化的方法外高级用法都可以使用(比如 async)
:::

```js	
	// 下载(babel-runtime生产环境下dependencies)
	npm install --save-dev babel-plugin-transform-runtime
	npm install --save babel-runtime
	// 使用在 .babelrc 文件中
	{
	  "plugins": [
	    ["transform-runtime", {
	     "helpers": false, 
	      "polyfill": false,
	      "regenerator": true, 
	      "moduleName": "babel-runtime"
	    }]
	  ]
	}
```

[babel-plugin-transform-runtime 配置](https://babeljs.io/docs/en/babel-plugin-transform-runtime/ "具体的属性解释")

**优点：** 
::: tip
1. 不会污染全局变量，帮我们引入静态方法和一些内建模块
:::

**缺点：** 
::: tip
1. 实例方法是不会做转换的(如：Array.includes..)
:::

----------
**重点：**
::: tip
1. 如果在不考虑性能因素下，可以直接使用babel-polyfill，但如果项目中引入了其他库，的了解这些库有没有引入babel-polyfill，不然会造成全局变量混乱或其他错误
2. 如果考虑性能又想使用实例方法，那可以将**babel-runtime**、**babel-plugin-transform-runtime**和**core-js**结合使用。
:::
