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
    mounted: function () {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        let params = {
          sig: '277355575301a9c6572659fc08b1f002',
          uid: '933_2819'
        }
        const data = await this.$http.get('public/getstaffinfo', params)
        if (data.code === 100000) {
          this.$Message.success(data.msg)
        }
      }
    }
  }
</script>
