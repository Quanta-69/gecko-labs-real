<script setup lang="ts">
definePageMeta({
    layout: "auth",
});
const { validateGmail } = useAuthValidation();
const email = ref < string > ("");
const password = ref < string > ("");
const error = ref < string | null > (null);

const handleSignup = async () => {
    if (!validateGmail(email.value)) {
        alert('Only Gmail addresses accepted');
        return;
    }
    await supabase.auth.signUp({ email: email.value, password: password.value });
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
    <form @submit.prevent="handleSignup">
        <input v-model="email" type="email" placeholder="Email" @keyup.enter="handleSignup" />
        <input v-model="password" type="password" placeholder="Password" @keyup.enter="handleSignup" />
        <button type="submit">Sign Up</button>
    </form>
    <p v-if="error">{{ error }}</p>
</template>