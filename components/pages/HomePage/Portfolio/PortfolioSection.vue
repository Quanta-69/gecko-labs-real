<template>
    <section>
        <h1 class="sect-intro">Showcasing Our Expertise</h1>
        <p class="sect-desc">Explore our diverse portfolio of successful projects.</p>
        <div class="wrapper">
            <div class="card-wrap">
                <PortfolioCard v-for="(project, index) in projects" :key="index" :image="project.image"
                    :title="project.title" :description="project.description" :link="project.link" />
            </div>
            <div class="btn-wrap">
                <GeckoButton @click="navigateTo('/portfolio')" variant="ghost" text="See all projects" icon="bookmark" size="md" />
                <GeckoButton @click="navigateTo('/pricing')" variant="primary" text="I want a website" icon="heart" size="md" />
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
            .limit(3)
            .order('created_at', { ascending: false });
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
.card-wrap{
    @apply flex-nowrap overflow-x-auto
}
.btn-wrap{
    @apply my-10
}</style>