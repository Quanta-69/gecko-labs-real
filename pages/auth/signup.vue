<script setup>
definePageMeta({
    layout: 'auth', // Optional: Use an "auth" layout
});

import { supabase } from '~/plugins/supabase';
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');

async function handleSignup() {
    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Passwords do not match.';
        return;
    }

    try {
        const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                data: { name: name.value }, // Store additional user data
            },
        });
        if (error) throw error;
        navigateTo('/verify-email'); // Redirect to verify-email page
    } catch (err) {
        errorMessage.value = err.message || 'Failed to create account. Please try again.';
    }
}
</script>

<template>
    <div class="signup-page">
        <h1>Sign Up</h1>
        <form @submit.prevent="handleSignup">
            <input type="text" placeholder="Name" v-model="name" required />
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <input type="password" placeholder="Confirm Password" v-model="confirmPassword" required />
            <button type="submit">Sign Up</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
        <p>Already have an account? <NuxtLink to="/login">Login</NuxtLink>
        </p>
    </div>
</template>

<style scoped>
.signup-page {
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