<template>
  <div @click="fToHome" class="text">这里是首页，点击可跳转到home页面</div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: '',
  setup () {
    const Router = useRouter()

    const fToHome = () => {
      Router.push({
        name: 'home'
      })
    }
    return { fToHome }
  },
})
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
