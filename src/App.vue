<template>
  <div id="app">
    <Navbar />
    <ShowContainer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ShowContainer from './components/ShowContainer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    ShowContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
