<template>
  <nav class="navbar sticky-top fixed navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.png" width="30" height="30" alt="">
    </a>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
