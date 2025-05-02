<template>
        <div class="card" :class=group>
            <div class="text-content">
                <div class="tag-flex">
                    <h1 class="name">{{ name }}</h1>
                    <p class="tier">{{ tier }}</p>
                </div>
                <p class="desc">{{ description }}</p>
                <ul>
                    <li v-for="(highlight, index) in highlights" :key="index">
                        {{ highlight }}
                    </li>
                </ul>
                <p class="price"><span>${{ starting_price }}</span></p>
                <GeckoButton @click="navigateTo('/dashboard')" :text=cta_text variant="secondary" icon="ext_link" />
            </div>
            <div class="img"><img :src=thumbnail alt="Offer Image"></div>
        </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    tier: String,
    description: String,
    highlights: Array,
    starting_price: Number,
    cta_text: String,
    thumbnail: String,
    link: String,
    group: String
})
</script>

<style scoped>
.card{
    backdrop-filter: blur(10px);
    @apply max-w-[550px]  flex-row items-center bg-[var(--alpha-white)] border border-[var(--alpha-border)]
}
.text-content{
    @apply flex flex-col justify-center h-full  gap-4
}
.tag-flex{
        .tier {
            @apply text-sm  rounded-lg px-3 py-1.5 bg-[var(--accent)] text-[var(--dark-text)];
        }
        .name{
            @apply text-2xl 
        }
    @apply flex gap-6
}
.desc{
    @apply text-lg text-gray-400
}
ul{
    @apply list-disc pl-5 text-[var(--200)]
}
p{
    span{
        @apply text-2xl text-[var(--100)] pl-1 
    }
}
img{
    height: 330px;
    width: 250px;
    object-fit: cover;
    border-radius: 30px;
}
</style>