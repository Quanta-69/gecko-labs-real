<template>
    <div class="card">
        <img :src=img_url alt="">
        <div class="text-content">
            <h1>{{ count }}+ </h1>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    count: String,
    img_url: String
})
</script>

<style scoped>
img{
    height: 400px; /* The Height and Width should be in sync with the text-background height and width*/ 
    width: 290px;
    border-radius: 30px;
    object-fit: cover;
    position: relative;
    z-index: -1;
}
.text-content{
    background: linear-gradient(-150deg, transparent, rgba(0, 0, 0, 0.4), rgb(0, 0, 0));
    border-radius: 30px;
    position: absolute;
    height: 400px;
    max-width: 290px;
    @apply py-4 flex flex-col justify-end gap-2 ps-4
}
h1{
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, var(--100), var(--300));
    @apply text-5xl 
}
h2{
    @apply text-xl
}
p{
    @apply text-gray-400
}

</style>