<script setup lang="ts">
definePageMeta({
    layout: "auth",
});
const { login } = useAuth();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = async () => {
    try {
        await login(email.value, password.value);
        navigateTo("/dashboard");
    } catch (err) {
        error.value = handleError(err);
    }
};
</script>

<template>
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
    <p v-if="error">{{ error }}</p>
</template>