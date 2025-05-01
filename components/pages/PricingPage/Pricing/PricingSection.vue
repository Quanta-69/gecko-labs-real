<template>
    <section>
        <h1 class="sect-intro">Types of sites we offer</h1>
        <p class="sect-desc">If we offer the tier, suit yourself!</p>
        <div class="wrapper">
            <div class="btn-wrap sorter">
                <button>All</button>
                <button>Basic</button>
                <button>Pro</button>
            </div>
            <div class="card-wrap" >
                <PSCard v-for="(product, index) in products" 
                :key="index" 
                :name="product.name" 
                :tier="product.tier"
                :description="product.description" 
                :highlights="product.highlights"
                :starting_price="product.starting_price" 
                :cta_text="product.cta_text"
                :thumbnail="product.thumbnail"
                :class="product.group"    
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import PSCard from '~/components/pages/HomePage/PricingSummary/PSCard.vue';
const products = ref([]);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('Products')
            .select('*')
        if (error) throw error;
        products.value = data;
    } catch (err) {
        console.error('Error fetching products:', err.message);
    }
});
</script>

<style scoped>

</style>