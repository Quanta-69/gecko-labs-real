<script setup lang="ts">
definePageMeta({
    layout: "auth",
});
const email = ref < string > ("");
const password = ref < string > ("");
const error = ref < string | null > (null);

const handleSignup = async () => {
    try {
        const { data, error: authError } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        });
        if (authError) throw authError;
        navigateTo("/dashboard"); // or /login for email confirmation
    } catch (err) {
        error.value = err instanceof Error ? err.message : "An unknown error occurred";    }
};
</script>

<template>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleSignup">Sign Up</button>
    <p v-if="error">{{ error }}</p>
</template>