<template>
    <header :class="{'scrolled' : scrolled, 'static' : !scrolled}">
        <nav class="navbar">
            <h1>GWL</h1>
            <ul>
                <li v-for="navlink in navlinks">
                    <NuxtLink :to="navlink.path">{{ navlink.name }}</NuxtLink>
                </li>
            </ul>
            <div class="btn-wrap">
                <GeckoButton icon="signup" iconPosition="left" text="Signup" variant="secondary" size="sm"
                    @click="showSignup = true" />
                <GeckoButton icon="login" iconPosition="left" text="Login" variant="ghost" size="sm"
                    @click="showLogin = true" />
            </div>
        </nav>
        <LoginModal :isOpen="showLogin" @close="showLogin = false" />
        <LoginModal v-if="showLoginModal" @close="showLoginModal = false" @login-success="handleAuthSuccess" />
        <SignupModal v-if="showSignupModal" @close="showSignupModal = false" @signup-success="handleAuthSuccess" />
        <SignUpModal :isOpen="showSignup" @close="showSignup = false" />
    </header>
</template>

<script setup>
const showLogin = ref(false)
const showSignup = ref(false)
import navlinks from '~/data/NavLinks.json'
import LoginModal from '../auth/LoginModal.vue'
import SignUpModal from '../auth/SignUpModal.vue'
const scrolled = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 500 // Change after 50px scroll
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.scrolled{
    background-color: rgba(0, 0, 0, 0.5);
    max-width: 100vw;
    backdrop-filter: blur(10px);
}

header{
    backdrop-filter: blur(10px);
    @apply sticky top-0 left-0 right-0 shadow-md p-4 z-10 border-b border-0 border-slate-500;
}
nav{
    @apply flex justify-between items-center
}
.navbar a {
    transition: .15s;
    @apply p-2 mx-1 px-1 relative inline-flex items-center justify-center
}

.navbar a::before {
    content: '';
    background: linear-gradient(to right, var(--100), var(--200));
    height: 3px;
    top: 85%;
    transition: width .3s ease-in-out;
    @apply w-0 absolute
}

.navbar a:hover::before {
    @apply w-full
}
.router-link-active{
    @apply text-[var(--100)]
}
.navbar .router-link-active::before {
    content: '';
    background: linear-gradient(to right, var(--100), var(--200));
    height: 3px;
    top: 85%;
    @apply absolute w-full
}
ul{
    a{
        @apply font-semibold
    }
    @apply flex gap-8 items-center justify-center
}
.btn-wrap{
    @apply gap-4 my-0
}
</style>