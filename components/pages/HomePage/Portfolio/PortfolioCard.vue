<template>
    <div class="card">
        <img :src="image" :alt="image" />
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="btn-wrap">
            <NuxtLink :to="`https://`+link"  target="_blank" >
                <GeckoButton icon="ext_link" text="live demo" variant="secondary"/>
            </NuxtLink>
            <NuxtLink :to="casePage"  target="_blank">
                <GeckoButton icon="heart" text="case study" variant="ghost" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
    link: String,
    casePage: String,
});
</script>

<style scoped>
.card{
    backdrop-filter: blur(10px);
    @apply min-w-[300px] gap-2 border border-[var(--alpha-border)] items-center overflow-hidden
}
h3, p, a{
    @apply ps-2 text-center
}
h3{
    @apply uppercase text-xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--100)] to-[var(--200)] font-bold
}
p{
    @apply text-[var(--gray-text)]
}
img{
    height: 330px;
    width: 250px;
    object-fit: cover;
    border-radius: 30px;
}
img:hover{
    scale: .95;
}
.btn-wrap{
    @apply gap-4
}
</style>