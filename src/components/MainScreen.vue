<template>
  <div class="hello">
    <div class="logo">
      <img src="./../assets/logo.svg" alt="" class="logo__img">
    </div>
    <h1 class="title">Экскурсии по всему миру</h1>
    <form class="form" action="">
      <div class="input">
        <input class="form__input" placeholder="Введите название экскурсии" type="text" v-model="searchQuery"
          @input="handleCityChange">
        <div class="clear" @click="clearSearch">
          <img src="./../assets/clear.svg" alt="">
        </div>
      </div>

      <div class="form__custom">
        <select class="form__select" v-model="selectedCityId" @change="handleCityChange">
          <option class="select__option" value="" disabled>Выбрать город</option>
          <option class="select__option" v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>

    </form>
    <div class="events__container" v-if="!isEmpty">
      <div v-for="event in eventsArray" :key="event.id">
        <EventCard :img="event.cover_photo.original" :score="event.customers_review_rating" :name="event.title"
          :price="event.netto_price" :reviews="event.reviews" />
      </div>
    </div>
    <div v-else class="error">Поиск не дал результатов
      <div class="btn" @click="clearSearch">Сбросить фильтры</div>
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
      selectedCityId: '',
      eventsArray: [],
      searchQuery: '',
      isEmpty: false,
    }
  },
  methods: {
    handleCityChange() {

      if (this.searchQuery === '' && this.selectedCityId === '') {
        this.eventsArray = this.products
      }
      else if (this.searchQuery !== '' && this.selectedCityId !== '') {
        const selectedCity = this.cities.find(city => city.id === this.selectedCityId);
        setTimeout(() => {
          const arr = this.products.filter(product =>
            product.city_id === selectedCity.region_id &&
            product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
          if (arr.length === 0) {
            this.isEmpty = true;
          } else {
            this.eventsArray = arr;
            this.isEmpty = false;
          }
        }, 500);

      }
      else if (this.searchQuery === '' && this.selectedCityId !== '') {
        const selectedCity = this.cities.find(city => city.id === this.selectedCityId);
        const arr = this.eventsArray.filter(product => product.city_id === selectedCity.region_id)
        if (arr.length === 0)
          this.isEmpty = true
        else
          this.eventsArray = arr
      }
      else if (this.searchQuery !== '' && this.selectedCityId === '') {
        const arr = this.eventsArray.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        if (arr.length === 0)
          this.isEmpty = true
        else
          this.eventsArray = arr
      }


    },

    clearSearch() {
      this.searchQuery = ''
      this.selectedCityId = ''
      this.isEmpty = false
      this.eventsArray = this.products
    },
  },
  mounted() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.sputnik8.com/v1/products?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com')
      .then(response => response.json())
      .then(data => {
        this.products = data
        this.eventsArray = this.products
      })
      .catch(error => console.error(error));
    fetch('https://cors-anywhere.herokuapp.com/https://api.sputnik8.com/v1/cities?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com')
      .then(response => response.json())
      .then(data => this.cities = data)
      .catch(error => console.error(error));
  },

}
</script>


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

.form__input {
  outline: none;
}

.clear {
  cursor: pointer;
  position: absolute;
  left: 270px;
  top: 15.67px;
}

.form__select {
  appearance: none;


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

.form__custom {
  position: relative;
}

.form__custom::after {
  content: url(./../assets/arrow.svg);
  position: absolute;
  display: block;
  top: 16px;
  left: 269px;
}



.form__select:focus {
  outline: none;
}

.events__container {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
}

.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  font-weight: 400;
  font-size: 24px;
  line-height: 142%;
  color: #000;
}

.btn {
  cursor: pointer;
  border-radius: 3px;
  padding: 0px 34px;
  width: 131px;
  height: 40px;
  background: #00a7ff;

  font-weight: 400;
  font-size: 14px;
  line-height: 286%;
  text-align: center;
  color: #fff;
}
</style>
