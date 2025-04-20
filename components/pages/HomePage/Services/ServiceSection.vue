<template>
    <section>
        <h1 class="sect-intro">What We Offer</h1>
        <p class="sect-desc"> Agile web development, innovative solutions, and human-crafted code—tailored to your unique needs.</p>
        <div class="wrapper">
            <ServiceCard 
                v-for="(service, index) in services"
                :key="index"
                :icon="service.icon"
                :title="service.title"
                :description="service.description"
                />
        </div>
    </section>
</template>

<script setup lang="ts" >
import ServiceCard from './ServiceCard.vue';
import services  from '~/data/Services.json';
</script>

<style scoped></style>