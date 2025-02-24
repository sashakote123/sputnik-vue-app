<template>
  <div class="hello">
    <div class="logo">
      <img src="./../assets/logo.svg" alt="" class="logo__img">
    </div>
    <h1 class="title">Экскурсии по всему миру</h1>
    <form class="form" action="">
      <div class="input">
        <input class="form__input" placeholder="Введите название экскурсии" type="text" v-model="searchQuery"
          @input="handleCityChangeInput">
        <div class="clear">
          <img src="./../assets/clear.svg" alt="">
        </div>
      </div>

      <select class="form__select" v-model="selectedCityId" @change="handleCityChange">
        <option class="select__option" value="" disabled>Выбрать город</option>
        <option class="select__option" v-for="city in cities" :key="city.id" :value="city.id">
          {{ city.name }}
        </option>
      </select>
      <!-- <div v-for="event in eventsArray" :key="event.id">
        <EventCard :img="event.cover_photo.original" :score="event.customers_review_rating" :name="event.title"
          :price="event.netto_price" />
      </div> -->
    </form>
    <div class="events__container">
      <EventCard img="https://cdn.tripster.ru/thumbs2/4bdc50b6-82c2-11ee-aeeb-bacb0497e01f.1220x600.jpeg" score="4.5"
        name="Храм Василия Блаженного: аудиоэкскурсия с билетом" price="2 500 ₽" />
      <EventCard img="https://cdn.tripster.ru/thumbs2/4bdc50b6-82c2-11ee-aeeb-bacb0497e01f.1220x600.jpeg" score="4.5"
        name="Храм Василия Блаженного: аудиоэкскурсия с билетом" price="2 500 ₽" />
      <EventCard img="https://cdn.tripster.ru/thumbs2/4bdc50b6-82c2-11ee-aeeb-bacb0497e01f.1220x600.jpeg" score="4.5"
        name="Храм Василия Блаженного: аудиоэкскурсия с билетом" price="2 500 ₽" />
      <EventCard img="https://cdn.tripster.ru/thumbs2/4bdc50b6-82c2-11ee-aeeb-bacb0497e01f.1220x600.jpeg" score="4.5"
        name="Храм Василия Блаженного: аудиоэкскурсия с билетом" price="2 500 ₽" />
      <EventCard img="https://cdn.tripster.ru/thumbs2/4bdc50b6-82c2-11ee-aeeb-bacb0497e01f.1220x600.jpeg" score="4.5"
        name="Храм Василия Блаженного: аудиоэкскурсия с билетом" price="2 500 ₽" />
      <EventCard img="https://cdn.tripster.ru/thumbs2/4bdc50b6-82c2-11ee-aeeb-bacb0497e01f.1220x600.jpeg" score="4.5"
        name="Храм Василия Блаженного: аудиоэкскурсия с билетом" price="2 500 ₽" />

    </div>

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
      searchQuery: ''
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
    },
    handleCityChangeInput() {
      setTimeout(() => {
        const arr = this.products.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        this.eventsArray = arr
      }, 1000)

    }
  },
  mounted() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.sputnik8.com/v1/products?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com')
      .then(response => response.json())
      .then(data => this.products = data)
      .catch(error => console.error(error));
    fetch('https://cors-anywhere.herokuapp.com/https://api.sputnik8.com/v1/cities?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com')
      .then(response => response.json())
      .then(data => this.cities = data.filter(item => this.products.filter(product => product.city_id === item.region_id).length !== 0))
      .catch(error => console.error(error));
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 50px;
  text-align: center;
  margin: 0 auto;
  max-width: 1135px;
}

.logo {
  margin-bottom: 30px;

}

.logo__img {}

.title {
  font-weight: 700;
  font-size: 48px;
  line-height: 142%;
  color: #000;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  margin-bottom: 90px;
}

.input {
  position: relative;
}

.form__input {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 1px;
  padding: 0px 10px 0px 15px;
  width: 273px;
  height: 48px;

  font-family: "PT Sans Caption", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 131%;
  color: #999;
}

.clear {
  cursor: pointer;
  position: absolute;
  left: 270px;
  top: 15.67px;
}

.form__select {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 1px;
  padding: 0px 15px;
  width: 300px;
  height: 50px;

  font-family: "PT Sans Caption", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 131%;
  color: #999;

}



.events__container {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
}
</style>
