<template>
    <section>
        <h1 class="sect-intro">Featured Projects</h1>
        <p class="sect-desc">We build agile, innovative websites tailored to your needs. Explore our featured projects below.</p>
            <div class="wrapper">
                <div class="card-wrap">
                    <PortfolioCard
                        v-for="(project, index) in projects"
                        :key="index"
                        :image="project.image"
                        :title="project.title"
                        :description="project.description"
                        :link="project.link"/>
                </div>
                <div class="btn-wrap">
                    <NuxtLink to="/portfolio" ><button>See All Projects</button></NuxtLink>
                    <NuxtLink to="/dashboard" ><button>I want a Website</button></NuxtLink>
                </div>
            </div>
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

<style scoped>
.btn-wrap{
    @apply my-10
}
</style>