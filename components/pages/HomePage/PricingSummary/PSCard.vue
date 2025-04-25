<template>
    <div class="card">
        <div class="text-content">
            <div>
                <h1 class="name">{{ name }}</h1>
                <p class="role">{{ tier }}</p>
            </div>
            <p class="desc">{{ description }}</p>
            <ul>
                <li v-for="(highlight, index) in highlights" :key="index">
                    {{ highlight }}
                </li>
            </ul>
            <p class="price">${{ starting_price }}</p>
            <NuxtLink to="/dashboard" >
                <button>{{ cta_text }}</button>
            </NuxtLink>
        </div>
        <div class="img"><img :src=thumbnail alt=""></div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    tier: String,
    description: String,
    highlights: Array,
    starting_price: Number,
    cta_text: String,
    thumbnail: String,
    link: String,
})
</script>

<style scoped>
img{
    height: 300px;
    width: 300px;
}
</style>