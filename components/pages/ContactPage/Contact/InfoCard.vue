<template>
<div class="card">
    <div class="svg":v-html=icon></div>
    <h1>{{ title }}</h1>
    <p>{{description}}</p>
</div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    icon: String
})
</script>

<style scoped>

</style>