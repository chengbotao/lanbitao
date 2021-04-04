/*
 * @Author: Chengbotao
 * @Description: Theme configuration.
 * @Date: 2020-10-18 23:43:17
 * @LastEditTime: 2021-04-04 18:15:00
 * @LastEditors: Chengbotao
 * @FilePath: \lanbitao\docs\.vuepress\config\theme.conf.js
 */

const sidebar = require('./theme.sidebar');
const nav = require('./theme.nav');

module.exports = {
  sidebar,
  nav,
  repo: 'chengbotao/lanbitao',
  navbar: true,
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  message: [
    '这里什么都没有。',
    '我是谁？我在哪？',
    '这是一个Four-Oh-Four.',
    '看来我们的链接坏掉了~',
  ],
};
