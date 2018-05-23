<template>
  <div @click="fToHome" class="text">这里是首页，点击可跳转到home页面</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    fToHome() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .text {
    font-size: 20px;
    text-align: center;
    margin: 50px 0;
    cursor: pointer;
  }

  .text:hover {
    color: cornflowerblue;
  }
</style>
