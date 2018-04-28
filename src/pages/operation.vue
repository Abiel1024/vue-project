<template>
  <Button type="primary" @click="fChangePath">operation page</Button>
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

</style>
