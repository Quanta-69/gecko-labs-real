<template>
    <details class="accordion">
        <summary class="accordion-header">{{ question }}</summary>
        <div class="accordion-body">
            <p>{{ answer }}</p>
        </div>
    </details>
</template>

<script setup>
defineProps({
    question: String,
    answer: String
})
</script>

<style scoped>
summary{
    cursor: pointer;
}
</style>