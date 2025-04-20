<template>
    <div>
        <CaseStudy/>
        <Projects/>
        <Testimonials/>
    </div>
</template>

<script setup lang="ts">
import { Projects, CaseStudy, Testimonials } from '~/components/pages/PortfolioPage';
import { useCustomMeta } from '~/composables/useMeta';
useHead(
    useCustomMeta('Portfolio - Gecko Web Labs', 'Explore our past projects and see how we bring ideas to life with innovative solutions.')
);
</script>

<style scoped></style>