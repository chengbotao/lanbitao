/*
 * @Author: Chengbotao
 * @Description: Theme configuration.
 * @Date: 2020-10-18 23:43:17
 * @LastEditTime: 2020-10-18 23:51:38
 * @LastEditors: Chengbotao
 * @FilePath: \lanbitao\docs\.vuepress\config\theme.conf.js
 */

const sidebar = require("./theme.sidebar");
const nav = require("./theme.nav");

module.exports = {
  repo: "chengbotao/lanbitao",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "更新于",
  sidebar,
  nav
}