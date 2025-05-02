<template>
<div class="card">
    <div class="svg":v-html=icon></div>
    <div class="text-content">
        <h1>{{ title }}</h1>
        <p>{{description}}</p>
    </div>
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
.card{
    backdrop-filter: blur(10px);
    @apply border bg-[var(--alpha-white)] rounded-lg max-w-[300px] w-full
}
</style>