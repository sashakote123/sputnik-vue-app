<template>
  <MainScreen />
</template>

<script>
import MainScreen from './components/MainScreen.vue';

export default {
  name: 'App',
  components: {
    MainScreen
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap');

#app {
  font-family: "PT Sans Caption", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
