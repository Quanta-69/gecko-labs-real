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
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>