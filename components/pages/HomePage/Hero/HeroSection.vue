<template>
    <section>
        <div class="wrapper">
            <h1><span>Websites</span> that grow with you - powered by AI <span>Precision</span> and human
                <span>Creativity</span>
            </h1>
            <h2>AI Precision. Human Touch. Perfect Websites.</h2>
            <div class="benefits-wrapper">
                <div class="benefit" v-for="benefit in benefits">
                    <div class="svg" v-html="benefit.icon"></div>
                    <div class="content">
                        <h3>{{ benefit.title }}</h3>
                        <p>{{ benefit.desc }}</p>
                    </div>
                </div>
            </div>
            <div class="btn-wrap">
                <GeckoButton icon="heart" @click="navigateTo('/dashboard')" text="I want a Website" size="md" />
                <GeckoButton icon="bookmark" @click="navigateTo('/portfolio')" text="Explore Projects" size="md" variant="secondary" />
            </div>
        </div>
    </section>
</template>

<script setup>
import benefits from "~/data/Benefits.json";
</script>

<style scoped>
section {
    min-height: 100vh;
    background: url(~/static/hero.jpg) no-repeat fixed center/cover;
    border-image: fill 0 linear-gradient(to right, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.515));
    @apply py-0
}

.wrapper {
    @apply flex flex-col justify-center gap-10 items-center border-0;
}

.benefits-wrapper {
    @apply flex flex-col gap-8 items-center justify-center px-4 md:flex-row md:gap-12;
}

.benefit {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.106);
    @apply flex gap-4 items-center justify-center border border-slate-500 rounded-md px-4 py-1;

    .svg {
        @apply w-8 h-8;

        * {
            @apply fill-[var(--accent)];
        }
    }

    .content {
        @apply flex flex-col gap-2;

        h3 {
            @apply text-xl font-semibold;
        }

        p {
            @apply text-lg text-[var(--primary-light)] font-semibold;
            ;
        }
    }
}

h1 {
    span {
        font-family: var(--font-heading);
        @apply text-[var(--primary-light)] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary-dark)];
    }

    @apply text-6xl font-bold text-center text-gray-400;
}

h2 {
    @apply text-3xl font-semibold italic;
}

p {
    @apply text-xl text-[var(--primary-light)];
}

.btn-wrap {
    @apply mt-4
}
</style>