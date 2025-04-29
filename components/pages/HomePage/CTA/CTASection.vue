<template>
    <section>
        <div class="wrapper">
            <div class="text-content">
                <h1>Build that dream website. It's just a click away!</h1>
                <div class="btn-content">
                    <GeckoButton icon="heart" @click= "navigateTo('/pricing')" text="Get Started" variant="primary" size="md"/>
                </div>
            </div>
            <div class="img-wrap"><img src="/assets/svg/cta.svg" alt=""></div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
section{
    border-image: fill 0 linear-gradient(to right, transparent, rgba(0, 0, 0, 0.9), black);
    @apply bg-[var(--500)]
}
.wrapper{
    @apply flex-row flex justify-between items-center
}
.text-content{
    max-width: 650px;
    @apply flex flex-col gap-4 items-center justify-center
}
h1{
    @apply text-5xl text-[var(--100)] text-center
}
.img-wrap{
    img{
        border-radius: 30px;
        object-fit: cover;
    }
    max-width: 650px;
}
</style>