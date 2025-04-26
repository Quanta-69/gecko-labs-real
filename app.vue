<template>
    <div data-scroll-container>
        <NuxtLayout>
            <NuxtPage data-scroll-section/>
        </NuxtLayout>
    </div>
</template>

<script  setup>
supabase.auth.onAuthStateChange((event) => {
    if (event === 'TOKEN_REFRESHED') console.log('Session extended!');
});
import useSmoothScroll from '~/composables/useSmoothScroll'
useSmoothScroll()
</script>