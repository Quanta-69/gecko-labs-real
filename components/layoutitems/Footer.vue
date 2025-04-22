<template>
    <footer>
        <h1>Gecko Web Labs</h1>
        <div class="links" v-for="footerlink in footerlinks">
            <NuxtLink :to="footerlink.path" >{{ footerlink.name }}</NuxtLink>
        </div>
        <div class="social"></div>
        <p class="copyright"></p>
    </footer>
</template>

<script setup lang="ts">
import footerlinks from '~/data/FooterLinks.json'

</script>

<style scoped></style>