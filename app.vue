<template>
    <div>
        <NuxtLayout>
            <Loader/>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script  setup>
supabase.auth.onAuthStateChange((event) => {
    if (event === 'TOKEN_REFRESHED') console.log('Session extended!');
});
</script>