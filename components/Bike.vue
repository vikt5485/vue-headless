<template>
  <nuxt-link :to="'bikes/' + bike.slug" class="bike">
    <img class="archive-img" :src="bike.billede.guid" alt />
    <h3>{{bike.title.rendered}}</h3>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Bike',
  props: ['bike'],
}
</script>
<style>
.bike {
  padding: 0.5rem;
}

.archive-img {
  max-height: 200px;
}
</style>