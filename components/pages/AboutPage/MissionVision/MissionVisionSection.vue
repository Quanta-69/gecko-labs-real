<template>
    <section>
        <h1 class="sect-intro"></h1>
        <p class="sect-desc"></p>
        <div class="wrapper">
            <p>At Gecko Web Labs , we believe in the seamless fusion of human ingenuity and artificial intelligence to create transformative digital experiences. Our mission is to empower businesses and individuals by integrating AI-driven solutions with human creativity, ensuring that technology enhances—not replaces—the unique qualities that make us human.</p>
            <div class="mini-sect">
                <h1 class="mission-vision">Our Mission</h1>
                <p>Empowering businesses and individuals with innovative, user-centric web solutions that drive
                    growth,enhance experiences, and deliver measurable results.</p>
            </div>
            <div class="stats">
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

<style scoped></style>