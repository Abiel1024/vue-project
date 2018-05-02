<template>
  <h1 class="header">头部通用组件</h1>
</template>

<script>
  export default {
    name: 'loginHead',
    data() {
      return {}
    },
    methods: {
      async fetchData() {
        let params = {
          sig: '1111',
          uid: '2222'
        }
        const data = await this.$http.get('public/getstaffinfo', params)
        if (data.code === 100000) {
          this.$Message.success(data.msg)
        }
      }
    }
  }
</script>
<style scoped>
  .header {
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: darkseagreen;
  }
</style>
