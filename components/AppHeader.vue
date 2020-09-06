<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/">
        <h1>KOGA</h1>
      </nuxt-link>
      <MenuItems />
    </div>
  </header>
</template>

<script>
import MenuItems from './MenuItems'

export default {
  name: 'AppHeader',
  components: {
    MenuItems,
  },
}
</script>

<style>
.header {
  width: 100vw;
  background-color: #0e7dc7;
  color: white;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}

.header .container ul {
  display: flex;
}

.header .container ul li {
  margin-left: 1.5rem;
}
.header a {
  color: white;
}
</style>