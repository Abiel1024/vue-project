<template>
  <div @click="fToHome">这里是首页，点击可跳转到home页面</div>
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
<style scoped>

</style>
