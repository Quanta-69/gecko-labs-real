<script setup lang="ts">
definePageMeta({
    layout: 'auth',
});
const { validateGmail, handleEnterKey } = useAuthValidation();
const email = ref('');
const isLoading = ref(false);
const isSent = ref(false);
const error = ref < string | null > (null);

const handleReset = async () => {
    error.value = null;
    if (!validateGmail(email.value)) {
        error.value = 'Only @gmail.com emails allowed';
        return;
    }

    isLoading.value = true;
    try {
        const { error: authError } = await supabase.auth.resetPasswordForEmail(email.value);
        if (authError) throw authError;
        isSent.value = true;
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Reset failed';
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
    <div class="auth-container">
        <h1>Forgot Password</h1>
        <form v-if="!isSent" @submit.prevent="handleReset">
            <input v-model="email" type="email" placeholder="Your Gmail" @keyup="handleEnterKey(handleReset)" />
            <button type="submit" :disabled="isLoading">
                {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
            </button>
        </form>
        <div v-else class="success">
            <p>Reset link sent to {{ email }}!</p>
            <NuxtLink to="/auth/login">Back to Login</NuxtLink>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>