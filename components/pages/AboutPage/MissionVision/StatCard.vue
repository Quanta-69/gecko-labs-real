<template>
<div class="card">
    <img :src= img_url alt="">
    <h1>{{ count }}+ </h1>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
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

<style lang="scss" scoped>

</style>