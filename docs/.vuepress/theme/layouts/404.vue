<!--
 * @Description: 
 * @Author: Chengbotao
 * @Date: 2020-10-22 17:01:43
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-11-06 14:44:09
 * @FilePath: \lanbitao\docs\.vuepress\theme\layouts\404.vue
-->
<template>
  <section class="theme-container">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <router-link to="/">返回首页</router-link>
  </section>
</template>
<script>
export default {
  name: 'surprise',
  methods: {
    getMsg() {
      let msg = [
        `这里什么都没有。`,
        `我是谁？我在哪？`,
        `这是一个Four-Oh-Four.`,
        `看来我们的链接坏掉了~`,
      ];
      // console.log(this.$themeConfig)
      return msg[Math.floor(Math.random() * msg.length)];
    },
  },
};
</script>
<style lang="stylus" scoped>
.theme-container
  text-align center
</style>