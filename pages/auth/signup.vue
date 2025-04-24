<script setup>
const supabase = useSupabase()
const email = ref('')
const password = ref('')
const error = ref('')

const handleSignup = async () => {
    error.value = ''
    try {
        const { error: authError } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
        })

        if (authError) throw authError
        navigateTo('/dashboard')
    } catch (err) {
        error.value = err.message.includes('already registered')
            ? 'Email already in use'
            : 'Signup failed'
    }
}
</script>

<template>
    <div class="auth-page">
        <form @submit.prevent="handleSignup">
            <input v-model="email" type="email" placeholder="Email" required>
            <input v-model="password" type="password" placeholder="Password" required>

            <div v-if="error" class="error">{{ error }}</div>

            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<style scoped>
/* Same styles as login.vue */
</style>