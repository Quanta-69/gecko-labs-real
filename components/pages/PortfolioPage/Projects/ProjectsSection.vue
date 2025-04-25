<template>
    <section>
        <h1 class="sect-name">Previous Works</h1>
        <p class="sect-desc">Our up and running projects.</p>
        <div class="wrapper">
            <PortfolioCard v-for="(project, index) in projects" :key="index" :image="project.image"
            :title="project.title" 
            :description="project.description" 
            :link="project.link" />
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
            .limit(3);
        if (error) throw error;
        projects.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching projects:', err.message);
    }
});
</script>

<style lang="scss" scoped>

</style>