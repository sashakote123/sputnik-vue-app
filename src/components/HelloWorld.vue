<template>
  <div class="hello">
    <div class="logo">
      <img src="./../assets/logo.svg" alt="" class="logo__img">
    </div>
    <h1 class="title">Экскурсии по всему миру</h1>
    <form action="">
      <input type="text">
      <select v-model="selectedCityId" @change="handleCityChange">
        <option value="" disabled>Выберите город</option>
        <option v-for="city in cities" :key="city.id" :value="city.id">
          {{ city.name }}
        </option>
      </select>
      <div v-for="event in eventsArray" :key="event.id">
        <EventCard :img="event.cover_photo.original" :score="event.customers_review_rating" :name="event.title"
          :price="event.netto_price" />
      </div>
    </form>

  </div>
</template>

<script>
import EventCard from './EventCard.vue';



export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    EventCard
  },
  data() {
    return {
      cities: [],
      products: [],
      selectedCityId: '', // ID выбранного города
      eventsArray: [],
    }
  },
  methods: {
    handleCityChange() {
      const selectedCity = this.cities.find(city => city.id === this.selectedCityId);
      console.log('Выбранный город:', selectedCity, selectedCity.region_id);
      //console.log(this.products);
      const arr = this.products.filter(product => product.city_id === selectedCity.region_id)
      this.eventsArray = arr
      console.log(arr);
    }
  },
  mounted() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.sputnik8.com/v1/products?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com')
      .then(response => response.json())
      .then(data => this.products = data)
      .catch(error => console.error(error));
    fetch('https://cors-anywhere.herokuapp.com/https://api.sputnik8.com/v1/cities?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com')
      .then(response => response.json())
      .then(data => this.cities = data)
      .catch(error => console.error(error));
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
