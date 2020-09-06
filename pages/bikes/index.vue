<template>
  <div class="container">
    <h1>Vores cykler</h1>
    <p>Her er vores cykler</p>
    <select @change="filter" name id="category_filter">
      <option selected value="All">All</option>
      <option value="E-bike">E-Bike</option>
      <option value="City & Touring">City & Touring</option>
      <option value="Race">Racer</option>
      <option value="Trekking">Trekking</option>
    </select>
    <div class="bikes">
      <Bike v-for="bike in bikesShown" :key="bike.id" :bike="bike" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bike from '../../components/Bike'
export default {
  components: {
    Bike,
  },
  data() {
    return {
      ogBikes: [],
      bikesShown: [],
    }
  },
  async created() {
    const endpoint =
      'https://viktorkjeldal.dk/kea/2sem/kogacenter_cph/wordpress/wp-json/wp/v2/cykel?per_page=100'
    try {
      const res = await axios.get(endpoint)
      this.ogBikes = res.data
      this.bikesShown = this.ogBikes
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    filter: function (evt) {
      console.log(evt.target.value)
      if (evt.target.value === 'All') {
        this.bikesShown = this.ogBikes
      } else {
        this.bikesShown = this.ogBikes.filter(
          (bike) => bike.kategori[0] === evt.target.value
        )
      }
    },
  },
  head() {
    return {
      title: 'Vores Cykler',
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

<style>
.bikes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
}
</style>