/*
 * @Author: Chengbotao
 * @Description: vuepress 的应用级优化
 * @Date: 2020-10-18 23:14:04
 * @LastEditTime: 2020-10-19 02:41:40
 * @LastEditors: Chengbotao
 * @FilePath: \lanbitao\docs\.vuepress\enhanceApp.js
 */

/**
 * @description: 钩子函数
 * @param {Vue} VuePress 正在使用的 Vue 构造函数
 * @param {options} 附加到根实例的一些选项
 * @param {router} 当前应用的路由实例
 * @param {siteData} 站点元数据
 * @param {isServer} 当前应用配置是处于 服务端渲染 或 客户端
 * @return {void} 
 */

export default ({
  Vue,
  options,
  router,
  siteData,
  isServer
}) => {
  // ...应用级的优化
}