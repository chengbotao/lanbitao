<!--
 * @Author: Chengbotao
 * @Description: 
 * @Date: 2020-10-19 00:06:29
 * @LastEditTime: 2020-10-19 00:08:17
 * @LastEditors: Chengbotao
 * @FilePath: \lanbitao\docs\.vuepress\components\gitalk.vue
-->
<template>
  <div id="gitalk-container"></div>
</template>
<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
const { gitalk: gitalkConf } = require("../config/comment");
export default {
  name: "gitalk",
  mounted() {
    this.$nextTick(() => {
      const gitalk = new Gitalk(gitalkConf);
      gitalk.render("gitalk-container");
    });
  },
};
</script>