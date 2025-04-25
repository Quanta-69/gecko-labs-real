<template>
    <section>
        <h1 class="sect-intro">Get in touch</h1>
        <p class="sect-desc">still need more information? contact us</p>
        <div class="wrapper">
            <div class="info"><InfoCard v-for="(info, index) in infos" :key="index" :icon="info.icon" :title="info.title" :description="info.description" /></div>
            <div class="form-wrap"><ContactForm/></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ContactForm from '~/components/pages/ContactPage/Contact/ContactForm.vue';
import InfoCard from './InfoCard.vue';
import infos from '~/data/ContactInfo.json'
</script>

<style scoped>

</style>