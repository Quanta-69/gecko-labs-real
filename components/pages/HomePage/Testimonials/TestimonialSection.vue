<template>
    <section>
        <h1 class="sect-intro">Hear From Those We've Served</h1>
        <p class="sect-desc">Testimonials from our satisfied clients.</p>
        <div class="wrapper">
            <div class="card-wrap">
                <div v-if="isLoading" class="loading-card">
                    <USkeleton height="120px" class="mb-2 rounded-md" />
                    <USkeleton width="70%" class="mb-1 rounded-md" />
                    <USkeleton class="mb-1 rounded-md" />
                    <USkeleton width="50%" class="rounded-md" />
                </div>
                <TestimonialCard v-else-if="item" v-for="(testimonial, index) in testimonials" :key="index"
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

// Spacing
import { ref, onMounted } from 'vue';
import { USkeleton, UButton } from '@nuxt/ui/dist/runtime/components'; // Import the components

const isLoading = ref(true);
const item = ref(null);
const error = ref(null);

onMounted(async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const response = {
            image: 'https://via.placeholder.com/150',
            title: 'Loaded Title',
            description: 'Loaded description text.',
        };
        item.value = response;
        isLoading.value = false;
    } catch (err) {
        error.value = err;
        isLoading.value = false;
    }
});
</script>

<style scoped>
section{
    border-image: fill 0 linear-gradient(to right, transparent, rgba(0, 0, 0, 0.9), black);
    @apply bg-[var(--500)]
}
</style>