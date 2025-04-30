<template>
    <section>
        <h1 class="sect-intro">Who we are</h1>
        <p class="sect-desc">Our brief history lesson</p>
        <div class="wrapper">
            <div class="about-flex">
                <p>At Gecko Web Labs , we believe in the seamless fusion of human ingenuity and artificial intelligence to create transformative digital experiences. Our mission is to empower businesses and individuals by integrating AI-driven solutions with human creativity, ensuring that technology enhances—not replaces—the unique qualities that make us human.</p>
                <div class="img-wrap"><img src="/assets/svg/about.svg" alt="about image">
            </div>
            </div>
            <div class="mini-sect">
                <h1 class="mission-vision">Our Mission</h1>
                <p>Empowering businesses and individuals with innovative, user-centric web solutions that drive growth,enhance experiences, and deliver measurable results.</p>
            </div>
            <div class="card-wrap">
                <StatCard v-for="(stat, index) in stats" :key="index" :title="stat.title"
                    :description="stat.description" 
                    :count="stat.count"
                    :img_url="stat.img_url" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import StatCard from './StatCard.vue';
import stats from '~/data/Stats.json';
</script>

<style scoped>
.about-flex{
    p{
        @apply max-w-[600px] text-2xl text-center
    }
    @apply flex flex-wrap justify-between items-center border-b border-gray-600
}
.mini-sect{
    h1{
        @apply text-[var(--100)] text-3xl
    }
    p{
        @apply max-w-[600px] text-xl text-center
    }
    @apply flex flex-col items-center justify-center gap-4 py-28 border-b border-gray-600
}
</style>