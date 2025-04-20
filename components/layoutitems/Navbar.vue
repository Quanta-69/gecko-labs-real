<template>
    <header>
        <nav>
            <h1>Logo</h1>
            <ul>
                <li v-for="navlink in navlinks" >
                    <NuxtLink :to= "navlink.path">{{ navlink.name }}</NuxtLink>
                </li>
            </ul>
            <div class="btn-wrap">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import navlinks from '~/data/NavLinks.json'
</script>

<style scoped>

</style>