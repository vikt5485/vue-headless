<template>
  <div class="container">
    <h1>Home</h1>
  </div>
  <!-- <div class="bikes" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;">
    <div class="card" style="margin: 1rem; padding: 0.5rem;" v-for="bike in bikes" :key="bike.id">
      <div class="card-image">
        <figure class="image">
          <img :src="bike.billede.guid" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ bike.title.rendered }}</p>
        <p class="subtitle is-6">{{ bike.kort }}</p>
      </div>
      <nuxt-link :to="'/bikes/' + bike.slug">See more</nuxt-link>
    </div>
  </div>-->
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Cykler jaaa',
        },
      ],
    }
  },
}
// import axios from 'axios'

// export default {
//   fetch({ store }) {
//     return axios
//       .get(
//         'https://viktorkjeldal.dk/kea/2sem/kogacenter_cph/wordpress/wp-json/wp/v2/cykel?page=1&per_page=100'
//       )
//       .then((res) => {
//         let wpBikes = res.data
//         wpBikes = wpBikes.filter((el) => el.status === 'publish')
//         wpBikes = wpBikes.map(
//           ({ title, slug, kort, pris, kategori, id, billede }) => ({
//             title,
//             slug,
//             kort,
//             pris,
//             kategori,
//             id,
//             billede,
//           })
//         )
//         store.commit('updatewpBikes', wpBikes)
//       })
//   },
//   computed: {
//     bikes() {
//       return this.$store.state.wpBikes
//     },
//   },
// }
</script>
