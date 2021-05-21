<template>
  <div class="content">
    <div class="test_class">
      <p>这里是p标签</p>
      <h6>这里是h6标签</h6>
    </div>
    <p>这里是operation page</p>
    <el-button type="primary" @click="fChangePath">返回home</el-button>
  </div>
</template>

<script>
export default {
  name: 'operation',
  data () {
    return {}
  },
  methods: {
    fChangePath () {
      this.$router.push(
        { name: 'home' }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  font-size: 20px;
  text-align: center;
}

.test_class {
  font-size: 20px;
  p {
    color: red;
  }
}
</style>
