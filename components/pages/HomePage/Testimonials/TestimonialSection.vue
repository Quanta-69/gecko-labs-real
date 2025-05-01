<template>
    <section>
        <h1 class="sect-intro">Hear From Those We've Served</h1>
        <p class="sect-desc">Testimonials from our satisfied clients.</p>
        <div class="wrapper">
            <div class="card-wrap">
                <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index"
                    :title="testimonial.title" :description="testimonial.description" :avatar="testimonial.avatar"
                    :name="testimonial.name" :role="testimonial.role" />
            </div>
            <div class="btn-wrap">
                <GeckoButton @click="navigateTo('/portfolio')" text="See all testimonials" icon="ext_link" size="md"
                    variant="secondary" />
            </div>
        </div>
    </section>
</template>

<script setup>
const testimonials = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('Testimonials')
            .select('*')
            .limit(3)
            .order('created_at', { ascending: false });
        if (error) throw error;
        testimonials.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching testimonials:', err.message);
    }
});
import TestimonialCard from './TestimonialCard.vue';
</script>

<style scoped>
section{
    border-image: fill 0 linear-gradient(to right, transparent, rgba(0, 0, 0, 0.9), black);
    @apply bg-[var(--500)]
}
</style>