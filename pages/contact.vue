<template>
    <div>
        <ContactSection />
    </div>
</template>

<script setup lang="ts">
import {ContactSection} from '~/components/pages/ContactPage';
import { useCustomMeta } from '~/composables/useMeta';

useHead(
    useCustomMeta("Contact Us - Gecko Web Labs", "Get in touch with our team to discuss your project or ask questions. We’re here to help!")
);
</script>

<style scoped>

</style>