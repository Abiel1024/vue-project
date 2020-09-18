<template>
  <h1 class="header">头部通用组件</h1>
</template>

<script>
import { defineComponent } from 'vue';
import axios from "../util/axios";
import { Message } from 'iview'

export default defineComponent({
  name: 'loginHead',
  setup () {
    const fetchData = async () => {
      const params = {
        sig: '1111',
        uid: '2222'
      }
      const response = await axios.get('public/getUserInfo', params)
      if (response.code === 100000) {
        Message.success(response.msg)
      }
    }
    fetchData()
  }
})
</script>
<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: darkseagreen;
}
</style>
