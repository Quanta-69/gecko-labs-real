<template>
    <div>
        <!--         <ProjectProgress/>
        <PaymentHistory/>
        <ChatSupport /> -->
        <div v-if="user" class="dashboard-page">
            <h1>Dashboard</h1>
            <p>Welcome, {{ user.email }}!</p>
            <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth',
});

import { supabase } from '~/plugins/supabase';

const user = ref(null);

onBeforeMount(async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        console.error('Error fetching user:', error);
    } else {
        user.value = data.user;
        console.log('User session:', user.value);
    }

    // Debugging: Check if user is null
    if (!user.value) {
        console.warn('No user session found on dashboard.');
        navigateTo('/auth/login'); 
    }
});

import { ChatSupport, PaymentHistory, ProjectProgress } from '~/components/pages/DashboardPage';
import { useCustomMeta } from '~/composables/useMeta';

useHead(
    useCustomMeta('Dashboard - Gecko Web Labs', 'Manage your projects and settings in one place.')
);
</script>

<style scoped>

</style>