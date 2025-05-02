<template>
    <section>
        <h1 class="sect-intro">Get in touch</h1>
        <p class="sect-desc">still need more information? contact us</p>
        <div class="wrapper">
                <div class="card-wrap">
                    <InfoCard v-for="(info, index) in infos" 
                    :key="index" 
                    :svg="info.svg" 
                    :title="info.title" 
                    :description="info.description" />
                </div>
            <div class="form-wrap">
                <ContactForm/>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ContactForm from '~/components/pages/ContactPage/Contact/ContactForm.vue';
import InfoCard from './InfoCard.vue';
import infos from '~/data/ContactInfo.json'
</script>

<style scoped>
section{
    min-height: 100vh;
    background: url(/assets/svg/contact.svg);
}
.wrapper{
    @apply flex justify-between items-center
}
.card-wrap, .form-wrap{
    @apply w-full
}
.card-wrap{
    @apply justify-center flex flex-row gap-4
}
</style>