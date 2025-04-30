<template>
    <section>
        <h1 class="sect-intro">Meet our leadership team</h1>
        <p class="sect-desc">Our Success is driven by these professionals.</p>
        <div class="wrapper">
            <div class="card-wrap">
                <TeamCard v-for="(team, index) in teams"
                :key="index"
                :name="team.name"
                :role="team.role"
                :img_url="team.img_url"
                :insta="team.insta" 
                :whatsapp="team.whatsapp"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import TeamCard from './TeamCard.vue';
const teams = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase.from('Team').select('*');
        if (error) throw error;
        teams.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching teams:', err.message);
    }
});
</script>

<style scoped>
section{
    @apply bg-[var(--600)]
}
.card-wrap{
    @apply border mx-auto
}
</style>