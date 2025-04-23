<script setup>
definePageMeta({
    layout: 'auth', // Optional: Use an "auth" layout
});

import { supabase } from '~/plugins/supabase';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

async function handleLogin() {
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });
        if (error) throw error;
        console.log('Login successful, redirecting to /dashboard...');
        navigateTo('/dashboard'); // Redirect to dashboard after login
    } catch (err) {
        errorMessage.value = err.message || 'Invalid credentials. Please try again.';
    }

    const { data, error } = await supabase.auth.getSession();
    if (error) {
        console.error('Error fetching session:', error);
    } else {
        console.log('Session data:', data);
    }
}
</script>

<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <button type="submit">Login</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
        <p>Don't have an account? <NuxtLink to="/signup">Sign Up</NuxtLink>
        </p>
    </div>
</template>

<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--background);
}

input {
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 100%;
    max-width: 300px;
    color: black;
}

button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--primary-light);
    color: white;
    border: none;
    cursor: pointer;
}

.error {
    color: red;
    margin-top: 0.5rem;
}
</style>