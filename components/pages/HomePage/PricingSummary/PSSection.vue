<template>
    <section>
        <h1 class="sect-intro">Websites Crafted for Your Needs</h1>
        <p class="sect-desc">From e-commerce to portfolios, we bring your vision to life.</p>
        <div class="wrapper">
            <div class="card-wrap">
                <PSCard v-for="(product, index) in products" :key="index" 
                    :name="product.name" 
                    :tier="product.tier"
                    :description="product.description" 
                    :highlights="product.highlights"
                    :starting_price="product.starting_price" 
                    :cta_text="product.cta_text" 
                    :thumbnail="product.thumbnail" />
            </div>
            <div class="btn-wrap">
                <GeckoButton @click="navigateTo('/pricing')" variant="secondary" size="md" text="See All Tiers" icon="ext_link" />
            </div>
        </div>
    </section>
</template>

<script setup>
import PSCard from './PSCard.vue';
const products = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('Products')
            .select('*')
            .limit(3);
        if (error) throw error;
        products.value = data;
    } catch (err) {
        console.error('Error fetching products:', err.message);
    }
});
</script>

<style scoped>
section{
    background: url(/assets/svg/offer.svg);
}
</style>