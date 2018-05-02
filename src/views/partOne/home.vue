<template>
  <div class="main">
    <p class="user_name">
      <span>用户姓名：</span>
      <span v-text="userInfo.name"></span>
    </p>
    <Poptip trigger="hover" placement="bottom">
      <Button type="primary" @click="getUserInfo">获取用户信息</Button>
      <div slot="content">点击派发一个action，从而修改store中的值。</div>
    </Poptip>
    <Button type="primary" @click="fChangePath">跳转到operation</Button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Poptip} from 'iview'

  export default {
    components: {Poptip},
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
  .main {
    text-align: center;
    height: calc(100% - 60px);
    background: #ddd;
  }

  .user_name {
    margin: 10px;
    font-size: 20px;
    color: #333;
    font-weight: bolder;
  }
</style>
