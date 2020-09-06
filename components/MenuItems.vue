<template>
  <nav>
    <ul>
      <li v-for="item in menuItems" :key="item.slug">
        <nuxt-link :to="item.slug == 'home' ? '/' : '/' + item.slug">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MenuItems',
  data() {
    return {
      menuItems: {},
    }
  },
  async created() {
    const endpoint = `https://viktorkjeldal.dk/kea/2sem/kogacenter_cph/wordpress/wp-json/menus/v1/locations/menu-1`
    try {
      const res = await axios.get(endpoint)
      console.log(res.data.items)
      this.menuItems = res.data.items
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
</style>