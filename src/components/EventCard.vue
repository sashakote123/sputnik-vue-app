<template>
    <div class="card">
        <img class="card__img" :src="img" alt="123">
        <div class="card__info">
            <div class="info__score">
                <img src="./../assets/star.svg" alt="">
                <div class="scores__score">{{ score }}</div>
                <div class="scores__all">({{ reviews }})</div>
            </div>

            <div class="info__title">{{ name }}</div>
            <div class="info__price">
                <div class="price__price">от {{ price }}</div>
                <div class="price__foot">за экскурсию</div>
            </div>
        </div>
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
            type: String
        },
        reviews: {
            type: Number,
        }
    }
};
</script>

<style>
.card {
    border-radius: 7px;
    cursor: pointer;
    overflow: hidden;
    width: 345px;
    min-height: 332px;

    display: flex;
    flex-direction: column;
}



.card:hover .card__img{
    transition: transform 0.1s ease-in;
    transform: scale(1.05);
}

.card:hover .info__title{
    transition: all 0.1s ease-in;

    text-decoration: underline;
}

.card__img {
    
    border-radius: 7px;
    width: 345px;
    height: 200px;

    margin-bottom: 10px;
}

.card__info {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
}

.info__score {
    display: flex;
    align-items: center;
    gap: 3px;
}

.scores__score {
    font-weight: 400;
    font-size: 14px;
    color: #444;
}

.scores__all {
    font-weight: 400;
    font-size: 12px;
    line-height: 183%;
    color: #999;
}

.info__title {
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #23262f;

    margin-bottom: 10px;
}


.price__price {
    font-weight: 700;
    font-size: 22px;
    line-height: 145%;
    color: #444;
}

.price__foot {
    position: relative;
    top: -10px;
    left: -10px;

    font-weight: 400;
    font-size: 12px;
    line-height: 183%;
    color: #999;
}
</style>