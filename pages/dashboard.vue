<template>
    <div>
        <!--         <ProjectProgress/>
        <PaymentHistory/>
        <ChatSupport /> -->
        <div v-if="user">
            <h1>Welcome, {{ user.email }}</h1>
            <button @click="supabase.auth.signOut()">Logout</button>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabase()
const user = ref(null)

onMounted(async () => {
    const { data: { user: userData } } = await supabase.auth.getUser()
    user.value = userData
})

import { ChatSupport, PaymentHistory, ProjectProgress } from '~/components/pages/DashboardPage';
import { useCustomMeta } from '~/composables/useMeta';

useHead(
    useCustomMeta('Dashboard - Gecko Web Labs', 'Manage your projects and settings in one place.')
);
</script>

<style scoped>

</style>