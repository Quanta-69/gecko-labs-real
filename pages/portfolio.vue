<template>
    <div>
        <Projects />
        <FaqSection />
        <Testimonials />
    </div>
</template>

<script setup lang="ts">
import { Projects, CaseStudy, Testimonials } from '~/components/pages/PortfolioPage';
import { FaqSection } from '~/components/pages/HomePage';
import { useCustomMeta } from '~/composables/useMeta';
useHead(
    useCustomMeta('Portfolio - Gecko Web Labs', 'Explore our past projects and see how we bring ideas to life with innovative solutions.')
);
</script>

<style scoped></style>