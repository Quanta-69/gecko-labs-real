<template>
    <div>
        <div class="card">
            <div class="card-svg" v-html="icon" ></div>
            <div class="card-header">
                <h3>{{ title }}</h3>
            </div>
            <div class="card-body">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    icon: String,
});
</script>

<style scoped>
.card {
    backdrop-filter: blur(10px);
    background:var(--alpha-white);
    @apply border border-[var(--alpha-white)]
}
h3{
    @apply text-xl 
}
p{
    @apply text-[var(--gray-text)]
}
.card-svg{
    *{
        @apply fill-[var(--dark-text)]
    }
    background: linear-gradient(45deg, var(--100), var(--300));
 @apply w-12 h-12 p-2 rounded-full;
}
</style>