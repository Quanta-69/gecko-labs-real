<template>
    <section>
        <h1 class="sect-intro">What Our Clients Say About Us</h1>
        <p class="sect-desc">All testimonials from happy clients</p>
        <div class="wrapper">
            <div class="card-wrap">
                <TestimonialCard v-for="(testimonial, index) in testimonials"
                    :key="index"
                    :title="testimonial.title"
                    :description="testimonial.description" :avatar="testimonial.avatar" :name="testimonial.name"
                    :role="testimonial.role" :img="testimonial.img" />
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
            .order('created_at', { ascending: false });
        if (error) throw error;
        testimonials.value = data
    } catch (err) {
        console.error('Error fetching testimonials:', err.message);
    }
});
import TestimonialCard from '~/components/pages/HomePage/Testimonials/TestimonialCard.vue';
</script>

<style scoped>
section{
    background: url(/assets/svg/testimonial.svg);
}
</style>