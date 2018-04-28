<template>
  <div class="hello">
    <h1>头部信息</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
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
