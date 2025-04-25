<template>
    <section>
        <h1 class="sect-intro">Frequently Asked Questions</h1>
        <p class="sect-desc">Find quick answers to common questions about our SaaS platform.</p>
        <div class="wrapper">
            <div class="text-content">
                <FaqCard v-for="(faq, index) in faqs"
                :key="index"
                :question="faq.question"
                :answer="faq.answer" />
            </div>
            <div class="img-content"></div>
        </div>
    </section>
</template>

<script setup>
import FaqCard from './FaqCard.vue';
const faqs = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('FAQ')
            .select('*');
        if (error) throw error;
        faqs.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching FAQs:', err.message);
    }
});

</script >
<style scoped>

</style>