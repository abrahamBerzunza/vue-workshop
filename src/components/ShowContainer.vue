<template>
  <div class="Show-Container">
    <Show v-for="show in shows" :show="show" :key="show.id"/>
  </div>
</template>

<script>
import api from '../service/ShowService.js'

import Show from './Show'

export default {
  name: 'ShowContainer',
  data () {
    return {
      shows: []
    }
  },
  created () {
    api.getShows()
      .then(res => {
        this.shows = res.data
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
        alert('Ha ocurrido un error al obtener los shows!')
      }) 
  },
  components: {
    Show
  }
}
</script>

<style scoped>
.Show-Container {
  background-color: black;
  padding: 64px 0;
}
</style>
