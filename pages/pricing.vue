<template>
    <div>
        <PricingSection />
    </div>
</template>

<script setup lang="ts">
import { PricingSection } from '~/components/pages/PricingPage';
import { useCustomMeta } from '~/composables/useMeta';

useHead(
    useCustomMeta('Pricing Plans- Gecko Web Labs', 'Discover our competitive pricing plans tailored to fit your needs.')
);
</script>

<style scoped>

</style>