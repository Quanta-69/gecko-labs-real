<template>
    <div>
        <div class="card">
            <div class="card-svg" :v-html="service.icon" ></div>
            <div class="card-header">
                <h3>{{ service.title }}</h3>
            </div>
            <div class="card-body">
                <p>{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>