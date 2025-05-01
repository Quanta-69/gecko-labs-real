<template>
    <section>
        <h1 class="sect-intro">Empowering Your Digital Journey</h1>
        <p class="sect-desc">A suite of offerings to meet your needs.</p>
        <div class="wrapper">
            <div class="card-wrap">
                <ServiceCard v-for="(service, index) in services" :key="index" :icon="service.icon"
                    :title="service.title" :description="service.description" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts" >
import ServiceCard from './ServiceCard.vue';
import services  from '~/data/Services.json';
</script>

<style scoped>
section{
    background: url(/assets/svg/services.svg);

}
</style>