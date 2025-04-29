<template>
    <section>
        <h1 class="sect-intro">Answers at Your Fingertips</h1>
        <p class="sect-desc">FAQs to ensure a seamless experience.</p>
        <div class="wrapper">
            <div class="card-wrap">
                <FaqCard v-for="(faq, index) in faqs" :key="index" :question="faq.question" :answer="faq.answer" />
            </div>
            <div class="img-wrap"><img src="/assets/svg/faq.svg" alt=""/></div>
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
        faqs.value = data;
    } catch (err) {
        console.error('Error fetching FAQs:', err.message);
    }
});

</script >
<style scoped>
section{
    border-image: fill 0 linear-gradient(to left, transparent, rgba(0, 0, 0, 0.9), black);
    @apply bg-[var(--500)]
}
.wrapper{
    @apply flex-row-reverse justify-between flex items-center
}
.card-wrap{
    @apply max-w-[600px] border w-full gap-3
}
.img-wrap{
    img{
        border-radius: 30px;
        object-fit: cover;
    }
    max-width: 600px;
}
</style>