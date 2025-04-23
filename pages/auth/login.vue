<script setup>
definePageMeta({
    layout: 'auth',
});

const supabase = useSupabase()
const email = ref('')
const password = ref('')
const error = ref(null)
let errorTimeout = null

const handleLogin = async () => {
    clearTimeout(errorTimeout)
    error.value = null

    try {
        const { error: authError } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })

        if (authError) throw authError
        navigateTo('/dashboard')
    } catch (err) {
        error.value = getFriendlyError(err.message)
        errorTimeout = setTimeout(() => error.value = null, 5000)
    }
}

const getFriendlyError = (message) => {
    const errors = {
        'Invalid login credentials': 'Invalid email or password',
        'Email not confirmed': 'Please verify your email first',
        'Too many requests': 'Too many attempts. Try again later'
    }
    return errors[message] || 'Login failed. Please try again'
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div class="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300">
            <div class="p-8">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                    <p class="text-gray-500">Sign in to continue</p>
                </div>

                <form @submit.prevent="handleLogin" class="space-y-4">
                    <!-- Error Message (Auto-dismissing) -->
                    <transition enter-active-class="transform transition duration-300 ease-out"
                        enter-from-class="translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transform transition duration-200 ease-in"
                        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-2 opacity-0">
                        <div v-if="error"
                            class="flex items-start px-4 py-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                            <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd" />
                            </svg>
                            <div>
                                <p class="text-sm font-medium">{{ error }}</p>
                            </div>
                        </div>
                    </transition>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input v-model="email" type="email" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="you@example.com">
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input v-model="password" type="password" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="••••••••">
                    </div>

                    <div class="flex items-center justify-between">
                        <NuxtLink to="/auth/forgot-password" class="text-sm text-blue-600 hover:underline">Forgot
                            password?</NuxtLink>
                    </div>

                    <button type="submit"
                        class="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition flex justify-center items-center">
                        Sign In
                    </button>
                </form>

                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-600">
                        Don't have an account?
                        <NuxtLink to="/auth/signup" class="text-blue-600 font-medium hover:underline">Sign up</NuxtLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>