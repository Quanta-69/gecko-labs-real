<template>

    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <CTASection />
    <FaqSection />
    <TestimonialsSection />

</template>

<script setup lang="ts">

import { FaqSection, HeroSection, PortfolioSection, ServicesSection, TestimonialsSection, CTASection } from '~/components/pages/HomePage';
</script>

<style scoped>
h1{
    @apply my-10 text-4xl 
}
</style>