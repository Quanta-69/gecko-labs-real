// ~/pages/dashboard.vue
<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';

const { user, checkAuth, logout } = useAuth();
const error = ref<string | null>(null);

// Check session on page load and handle redirect
onMounted(async () => {
    if (typeof window !== 'undefined') { // ← Only runs in browser
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) navigateTo('/auth/login');
    }
    try {
        const session = await checkAuth();
        if (!session) {
            navigateTo('/auth/login');
        }
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Session check failed';
    }
});

const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/'; // Hard redirect prevents loops
};
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <p v-if="user">Welcome, {{ user.email }}</p>
        <button @click="handleLogout">Logout</button>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>