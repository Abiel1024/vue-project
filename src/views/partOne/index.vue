<template>
  <div class="main">
    <oneHead></oneHead>
    <router-view/>
  </div>
</template>

<script>
import oneHead from '../../components/loginHead'

export default {
  components: { oneHead },
}
</script>
<style lang="scss" scoped>
  .main {
    height: 100%;
  }
</style>
