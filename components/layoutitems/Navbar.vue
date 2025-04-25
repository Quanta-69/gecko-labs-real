<template>
    <header>
        <nav>
            <h1>GWL</h1>
            <ul>
                <li v-for="navlink in navlinks" >
                    <NuxtLink :to= "navlink.path">{{ navlink.name }}</NuxtLink>
                </li>
            </ul>
            <div class="btn-wrap">
                <NuxtLink  to="/auth/login"><button>Login</button></NuxtLink>
                <NuxtLink to="/auth/signup" ><button>Sign Up</button></NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup>
import navlinks from '~/data/NavLinks.json'
</script>

<style scoped>
.nuxt-link-exact-active{
    @apply text-[var(--primary-light)];
}
header{
    @apply shadow-md p-4 fixed top-0 left-0 right-0 z-10 border-b border-0 border-slate-500;
}
nav{
    @apply flex justify-between items-center
}
ul{
    a{
        @apply font-semibold
    }
    @apply flex gap-4
}
</style>