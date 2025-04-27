<template>
    <div class="card">
        <img :src="image" :alt="image" />
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <NuxtLink :to="link" class="cta-button" target="_blank" >
            <GeckoButton icon="ext_link" text="live demo" variant="secondary"/>
        </NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
    link: String,
});
</script>

<style scoped>
.card{
    @apply min-w-[300px] gap-2 border-0
}
h3, p, a{
    @apply ps-2
}
h3{
    @apply uppercase 
}
p{
    @apply text-sm
}
img{
    height: 330px;
    width: 250px;
    object-fit: cover;
    filter: grayscale(1);
    border-radius: 30px;
}
.card:hover img{
    filter: grayscale(0);
}
</style>