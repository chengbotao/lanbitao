/*
 * @Author: Chengbotao
 * @Description: vuepress 的配置文件
 * @Date: 2020-10-18 23:10:29
 * @LastEditTime: 2020-10-19 02:21:44
 * @LastEditors: Chengbotao
 * @FilePath: \lanbitao\docs\.vuepress\config.js
 */

let { THEME_CONF: themeConfig, MD_CONF: markdown, BASE_CONF: websiteBase } = require("./config/index");

module.exports = {
  ...websiteBase,
  themeConfig,
  markdown
}