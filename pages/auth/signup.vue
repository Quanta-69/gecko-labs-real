<script setup>
definePageMeta({
    layout: 'auth',
});
const supabase = useSupabase()
const email = ref('')
const password = ref('')
const error = ref(null)
let errorTimeout = null

const handleSignup = async () => {
    clearTimeout(errorTimeout)
    error.value = null

    try {
        const { error: authError } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
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
        'User already registered': 'Account already exists. Try signing in',
        'Password should be at least': 'Password must be 8+ characters',
        'Invalid email format': 'Please enter a valid email',
        'Too many requests': 'Too many attempts. Try again later'
    }
    return errors[message] || 'Signup failed. Please try again'
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div class="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300">
            <div class="p-8">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                    <p class="text-gray-500">Start your journey today</p>
                </div>

                <form @submit.prevent="handleSignup" class="space-y-4">
                    <!-- Error Message (Same animation as login) -->
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
                        <p class="mt-1 text-xs text-gray-500">At least 8 characters</p>
                    </div>

                    <button type="submit"
                        class="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition flex justify-center items-center">
                        Create Account
                    </button>
                </form>

                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-600">
                        Already have an account?
                        <NuxtLink to="/auth/login" class="text-blue-600 font-medium hover:underline">Sign in</NuxtLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>