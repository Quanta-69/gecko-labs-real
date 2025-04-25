<template>
    <div class="project-card">
        <img :src="image" :alt="image" />
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <NuxtLink :to="link" class="cta-button" target="_blank" >live demo </NuxtLink>
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
img{
    height: 300px;
    width: 300px;
}
</style>