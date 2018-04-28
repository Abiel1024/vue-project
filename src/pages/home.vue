<template>
  <div>
    <p v-text="userInfo.name"></p>
    <Button type="primary" @click="getUserInfo">获取用户信息</Button>
    <Button type="primary" @click="fChangePath">跳转到operation</Button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    methods: {
      fChangePath() {
        this.$router.push({
          name: 'operation'
        })
      },
      async getUserInfo() {
        let result = await this.$store.dispatch('getUserInfo')
        console.log('信息获取成功，在组件用也能看到哦')
        console.log(result)
      }
    }
  }
</script>
<style scoped>

</style>
