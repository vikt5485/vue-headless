<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  components: {
    AppHeader,
  },
}
</script>
<style>
h1 {
  font-size: 2rem;
  font-weight: bold;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

p {
  margin: 1rem 0;
}

p:first-of-type {
  margin: 0 0 1rem 0;
}

.container {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>
