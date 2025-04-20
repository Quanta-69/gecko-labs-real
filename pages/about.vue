<template>
    <div>
        
        <MissionVision />
        <TeamSection />
        <ProcessSection />
        <WCUSection />

    </div>
</template>

<script setup lang="ts">
import {MissionVision, TeamSection, ProcessSection, WCUSection} from '~/components/pages/AboutPage';

import { useCustomMeta } from '~/composables/useMeta';

useHead(
    useCustomMeta('About Us - Gecko Web Labs', 'Learn more about our team, mission, and process.')
);
</script>

<style scoped></style>