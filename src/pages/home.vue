<template>
  <div>
    <Button type="primary" @click="fChangePath">test</Button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {}
    },
    methods: {
      fChangePath() {
        this.$router.push({
          name: 'operation'
        })
      }
    }
  }
</script>
<style scoped>

</style>
