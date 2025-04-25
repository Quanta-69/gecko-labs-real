<template>
<section>
    <h1 class="sect-intro">Websites We Offer</h1>
    <p class="sect-desc">These are the types of websites we can provide you. More coming soon...</p>
    <div class="wrapper">
        <PSCard v-for="(product, index) in products" :key="index"
        :name="product.name"
        :tier="product.tier"
        :description="product.description"
        :highlights="product.highlights"
        :starting_price="product.starting_price"
        :cta_text="product.cta_text"
        :thumbnail="product.thumbnail"
        />
        <NuxtLink to="/pricing" >
            <button>See All Tiers</button>
        </NuxtLink>
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
        products.value = data; // Store fetched data in the `testimonials` ref
    } catch (err) {
        console.error('Error fetching products:', err.message);
    }
});
</script>

<style lang="scss" scoped>

</style>