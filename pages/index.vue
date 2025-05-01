<template>
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <PSSection />
    <CTASection />
    <FaqSection />
    <TestimonialsSection />

</template>

<script setup lang="ts">

import { FaqSection, PSSection,HeroSection, PortfolioSection, ServicesSection, TestimonialsSection, CTASection } from '~/components/pages/HomePage';
</script>

<style scoped>
h1{
    @apply my-10 text-4xl 
}
</style>