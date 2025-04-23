<script setup>
definePageMeta({
    layout: 'auth',
});
</script>

<template>
    <div class="verify-email-page">
        <h1>Verify Your Email</h1>
        <p>Please check your inbox and click the link in the email we sent to verify your account.</p>
        <NuxtLink to="/login">Back to Login</NuxtLink>
    </div>
</template>

<style scoped>
.verify-email-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--background);
}
</style>