<script setup lang="ts">
definePageMeta({
    layout: 'auth',
});
const { validateGmail, handleEnterKey } = useAuthValidation();
const email = ref('');
const password = ref('');
const error = ref<string | null>(null);

const handleLogin = async () => {
    error.value = null;
    if (!validateGmail(email.value)) {
        error.value = 'Only @gmail.com emails allowed';
        return;
    }

    try {
        const { error: authError } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });
        if (authError) throw authError;
        navigateTo('/dashboard');
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Login failed';
    } 
};
</script>

<template>
    <div class="auth-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <input v-model="email" type="email" placeholder="Your Gmail" @keyup="handleEnterKey(handleLogin)" />
            <input v-model="password" type="password" placeholder="Password" @keyup="handleEnterKey(handleLogin)" />
            <button type="submit" >Login</button>
            <NuxtLink to="/auth/forgot-password" class="forgot-password">
                Forgot password?
            </NuxtLink>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>