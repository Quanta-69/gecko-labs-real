<template>
    <div>
        <ProjectProgress/>
        <PaymentHistory/>
        <ChatSupport />
    </div>
</template>

<script setup lang="ts">
import { ChatSupport, PaymentHistory, ProjectProgress } from '~/components/pages/DashboardPage';
import { useCustomMeta } from '~/composables/useMeta';

useHead(
    useCustomMeta('Dashboard - Gecko Web Labs', 'Manage your projects and settings in one place.')
);
</script>

<style scoped>

</style>