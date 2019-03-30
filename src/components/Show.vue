<template>
  <div class="Show">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-2">
                <img :src="show.image.medium" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ show.name }}</h5>
                  <p class="card-text" v-html="show.summary"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  props: ['show']
}
</script>

<style scoped>
.card {
  transition: .3s;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.1);
}
</style>
