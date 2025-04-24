<script setup>
const supabase = useSupabase()
const user = ref(null)

onMounted(async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser()
    user.value = currentUser
})
</script>

<template>
    <div>
        <h1>Welcome, {{ user?.email }}</h1>
        <!-- Logout button was originally here -->
    </div>
</template>