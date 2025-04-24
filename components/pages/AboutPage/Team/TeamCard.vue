<template>
    <div class="card">
        <img :src= img_url  alt="team image" height="300" width="300" >
        <h1>{{ name }}</h1>
        <p>{{ role }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    role: String,
    img_url: String
})
</script>

<style scoped></style>