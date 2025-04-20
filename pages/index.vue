<template>

    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <PSSection />
    <TestimonialsSection />
    <CTASection />
    <CISection />

</template>

<script setup lang="ts">

import { CISection, PSSection, HeroSection, PortfolioSection, ServicesSection, TestimonialsSection, CTASection } from '~/components/pages/HomePage';

</script>

<style scoped>
h1{
    @apply my-10 text-4xl 
}
</style>