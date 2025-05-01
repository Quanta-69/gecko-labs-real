<template>
    <section>
        <h1 class="sect-intro">Our Latest Projects</h1>
        <p class="sect-desc">Our up and running projects</p>
        <div class="wrapper">
            <div class="card-wrap">
                <PortfolioCard v-for="(project, index) in projects" :key="index" :image="project.image"
                :title="project.title"
                :description="project.description"
                :link="project.link" />
            </div>
        </div>
    </section>
</template>

<script setup>
import PortfolioCard from '~/components/pages/HomePage/Portfolio/PortfolioCard.vue';
const projects = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('Projects')
            .select('*')
            .limit(3)
            .order('created_at', { ascending: false })
            ;
        if (error) throw error;
        projects.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching projects:', err.message);
    }
});
</script>

<style scoped>
section{
    background: url(/assets/svg/projects.svg);
}
</style>