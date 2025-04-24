<script setup>
const supabase = useSupabase()
const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
    error.value = ''
    try {
        const { error: authError } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })

        if (authError) throw authError
        navigateTo('/dashboard')
    } catch (err) {
        error.value = err.message.includes('Invalid')
            ? 'Invalid email or password'
            : 'Login failed'
    }
}
</script>

<template>
    <div class="auth-page">
        <form @submit.prevent="handleLogin">
            <input v-model="email" type="email" placeholder="Email" required>
            <input v-model="password" type="password" placeholder="Password" required>

            <div v-if="error" class="error">{{ error }}</div>

            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<style scoped>
.auth-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
}

.error {
    color: red;
    margin: 1rem 0;
}
</style>