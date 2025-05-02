<template>
<div class="card">
    <div class="svg" v-html= svg ></div>
    <div class="text-content">
        <h1>{{ title }}</h1>
        <p>{{description}}</p>
    </div>
</div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    svg: String
})
</script>

<style scoped>
.card{
    backdrop-filter: blur(10px);
    @apply border bg-[var(--alpha-white)] rounded-lg max-w-[300px] w-full flex-row justify-start max-w-[330px] border-[var(--alpha-border)]
}
.svg{
    *{
        color: var(--100);
    }
    @apply h-12 w-12 rounded-full p-2 bg-[var(--alpha-white)]
}
.text-content{
    h1{
        @apply text-xl
    }
    p{
        @apply text-[var(--gray-text)]
    }
}
</style>