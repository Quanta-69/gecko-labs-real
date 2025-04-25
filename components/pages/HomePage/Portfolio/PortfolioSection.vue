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
                <div class="btn-wrap">
                    <NuxtLink to="/portfolio.vue" ><button>See All Projects</button></NuxtLink>
                    <NuxtLink to="/dashboard.vue" ><button>I want a Website</button></NuxtLink>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
import PortfolioCard from './PortfolioCard.vue';
const projects = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('Projects')
            .select('*')
            .limit(3);
        if (error) throw error;
        projects.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching projects:', err.message);
    }
});
</script>

<style lang="scss" scoped></style>