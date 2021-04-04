/*
 * @Description:
 * @Author: Chengbotao
 * @Date: 2021-04-04 18:05:15
 * @LastEditors: Chengbotao
 * @FilePath: \lanbitao\docs\.vuepress\common\utils.js
 */

export function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

export default function setHtmlFontSize(baseScale = 19.2) {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;

  if (htmlWidth >= baseScale * 100) {
    htmlWidth = baseScale * 100;
  }

  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = `${htmlWidth / baseScale}px`;
}
