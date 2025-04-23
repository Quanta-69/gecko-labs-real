<template>
<section>
    <h1 class="sect-intro">What Our Clients Say About Us</h1>
    <p class="sect-desc"></p>
    <div class="wrapper">
        <TestimonialCard 
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :title="testimonial.title"
        :description="testimonial.description"
        :avatar="testimonial.avatar"
        :name="testimonial.name"
        :role="testimonial.role"
        :img="testimonial.img"
         />
    </div>
</section>
</template>

<script setup>
const testimonials = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase.from('Testimonials').select('*');
        if (error) throw error;
        testimonials.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching testimonials:', err.message);
    }
});
import TestimonialCard from './TestimonialCard.vue';
</script>

<style lang="scss" scoped></style>