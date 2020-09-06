<template>
  <div class="container">
    <h1>{{page.header}}</h1>
    <div v-html="page.content"></div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      page: {},
    }
  },
  async created() {
    const endpoint = `https://viktorkjeldal.dk/kea/2sem/kogacenter_cph/wordpress/wp-json/wp/v2/pages?slug=${this.$route.params.page}`
    try {
      const res = await axios.get(endpoint)
      this.page = res.data[0]
      this.page.header = res.data[0].title.rendered
      this.page.content = res.data[0].content.rendered
    } catch (error) {
      console.log(error)
    }
  },
  head() {
    return {
      title: this.page.header,
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