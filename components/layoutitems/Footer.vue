<template>
    <footer>
        <div class="wrapper">
            <h1 class="logo" >Gecko Web Labs</h1>
            <div class="link-wrap">
                <h1>Secondary Links</h1>
                <div class="links" v-for="footerlink in footerlinks">
                    <NuxtLink class="link" :to="footerlink.path">{{ footerlink.name }}</NuxtLink>
                </div>
            </div>
            <div class="social"></div>
        </div>
        <p class="copyright"> © 2025 Gecko Web Labs</p>
        <p class="copyright">All rights reserved</p>
        <p class="copyright">Privacy Policy | Terms of Service</p>
        <p class="copyright">Made with <span class="heart">❤️</span> by Gecko Web Labs</p>
    </footer>
</template>

<script setup lang="ts">
import footerlinks from '~/data/FooterLinks.json'

</script>

<style scoped>
.router-link-active {
    color: var(--200) !important;
}
footer{
    min-height: 50vh;
    @apply flex flex-col justify-center items-center
}
.wrapper{
    border-image: fill 0 linear-gradient(to right, rgba(0, 0, 0, 0.728), rgba(0, 0, 0, 0.728));
    min-height: inherit;
    background: url(/assets/svg/footer.svg) no-repeat fixed center/contain;
    @apply flex flex-row h-full justify-between items-center gap-6 px-10
}
.logo{
    @apply text-4xl text-[var(--100)]
}
.link-wrap{
    h1{
        @apply text-xl
    }
    .link{
        @apply text-gray-400
    }
    @apply flex flex-col gap-4 justify-center items-center
}
</style>