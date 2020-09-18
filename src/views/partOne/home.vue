<template>
  <div class="content">
    <p class="user_name">
      <span>用户姓名：</span>
      <span v-text="userInfo.name"></span>
    </p>
    <Button type="primary" @click="getUserInfo">获取用户信息</Button>
    <Button type="primary" @click="fChangePath">跳转到operation</Button>
    <div class="test_class">
      <p>这里是p标签</p>
      <h6>这里是h6标签</h6>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'home',
  setup () {
    const store = useStore()
    const router = useRouter()
    const userInfo = computed(() => {
      return store.getters.userInfo
    })
    const fChangePath = () => {
      router.push({
        name: 'operation'
      })
    }
    const getUserInfo = () => {
      store.dispatch('getUserInfo')
    }
    return { userInfo, fChangePath, getUserInfo }
  },
})
</script>
<style lang="less" scoped>
.content {
  height: calc(100% - 60px);
  background: #ddd;
  text-align: center;
  border: 1px solid transparent;
}

.user_name {
  margin: 10px;
  font-size: 20px;
  color: #333;
  font-weight: bolder;
}
</style>
