<template>
  <div class="main">
    <p>这里是operation page</p>
    <Button type="primary" @click="fChangePath">返回home</Button>
  </div>
</template>

<script>
  export default {
    name: 'operation',
    data() {
      return {}
    },
    methods: {
      fChangePath() {
        this.$router.push(
          {name: 'home'}
        )
      }
    }
  }
</script>
<style scoped>
  .main {
    font-size: 20px;
    text-align: center;
  }
</style>
