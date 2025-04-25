<template>
    <section>
        <h1 class="sect-name"></h1>
        <p class="sect-intro"></p>
        <div class="wrapper">
            <TeamCard v-for="(team, index) in teams"
            :key="index"
            :name="team.name"
            :role="team.role"
            :img_url="team.img_url" />
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

<style scoped></style>