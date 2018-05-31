<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App',
  mounted () {
    console.log(process.env)
  }
}
</script>
