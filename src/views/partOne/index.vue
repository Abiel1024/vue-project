<template>
  <div class="main">
    <oneHead></oneHead>
    <router-view/>
  </div>
</template>

<script>
  import oneHead from '../../components/loginHead'

  export default {
    components: {oneHead},
    name: 'partOne',
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style scoped>
  .main {
    height: 100%;
    border: 1px solid transparent;
  }
</style>
