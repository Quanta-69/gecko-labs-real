<template>
    <section>
        <h1 class="sect-intro">Featured Projects</h1>
        <p class="sect-desc">We build agile, innovative websites tailored to your needs. Explore our featured projects below.</p>

        <section>
            <div class="wrapper">
                <PortfolioCard 
                    v-for="(project, index) in projects"
                    :key="index"
                    :image="project.image"
                    :title="project.title"
                    :description="project.description"
                    :link="project.link"
                    />
            </div>
        </section>
    </section>
</template>

<script setup>
import PortfolioCard from './PortfolioCard.vue';
import projects from '~/data/Portfolio.json';
</script>

<style lang="scss" scoped></style>