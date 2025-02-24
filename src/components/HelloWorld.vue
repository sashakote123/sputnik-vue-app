<template>
  <div class="hello">
    <div class="logo">
      <img src="./../assets/logo.svg" alt="" class="logo__img">
    </div>
    <h1 class="title">Экскурсии по всему миру</h1>
    <form action="">
      <input type="text">
      <select name="" id="">
        <option value="">123</option>
        <option value="">123</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.sputnik8.com/v1/products?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
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
