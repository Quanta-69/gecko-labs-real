<template>
    <section>
        <h1 class="sect-intro">Hear From Those We've Served</h1>
        <p class="sect-desc">Testimonials from our satisfied clients.</p>
        <div class="wrapper">
            <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :title="testimonial.title"
                :description="testimonial.description" :avatar="testimonial.avatar" :name="testimonial.name"
                :role="testimonial.role" :img="testimonial.img" />

            <div class="btn-wrap">
                <NuxtLink to="/portfolio"><button>See all Testimonials</button></NuxtLink>
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
            .limit(3);
        if (error) throw error;
        testimonials.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching testimonials:', err.message);
    }
});
import TestimonialCard from './TestimonialCard.vue';
</script>

<style lang="scss" scoped></style>