<template>
    <div class="container">
        <img :src="img" alt="123">
        <div>{{ name }}</div>
        <div>{{ score }}</div>
    </div>

</template>

<script>
export default {
    name: 'EventCard',
    props: {
        img: {
            type: String,
            required: true
        },
        score: {
            type: Number,
        },
        name: {
            type: String
        },
        price: {
            type: Number
        }
    }
};
</script>

<style>
.container {
    border: 1px, red, solid;
    margin: 5px;
}
</style>