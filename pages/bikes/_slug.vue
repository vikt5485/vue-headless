<template>
  <div class="container">
    <nuxt-link to="/bikes">← Tilbage</nuxt-link>
    <h1>KOGA {{bike.model}}</h1>
    <p>{{bike.lang_1}}</p>
    <p>{{bike.lang_2}}</p>
    <p>{{bike.lang_3}}</p>
    <img :src="bike.img" alt />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      bike: {},
    }
  },
  async created() {
    const endpoint = `https://viktorkjeldal.dk/kea/2sem/kogacenter_cph/wordpress/wp-json/wp/v2/cykel?slug=${this.$route.params.slug}`
    try {
      const res = await axios.get(endpoint)
      console.log(res.data[0])
      this.bike = res.data[0]
      this.bike.img = res.data[0].billede.guid
    } catch (error) {
      console.log(error)
    }
  },
  head() {
    return {
      title: `KOGA cykel`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Her er alle vores cykler jaaa',
        },
      ],
    }
  },
}
</script>