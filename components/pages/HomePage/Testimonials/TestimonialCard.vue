<template>
    <div class="card">
        <div class="text-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <div class="profile">
                <div class="avatar"><img :src="avatar" alt="avatar"></div>
                <div class="profile-content">
                    <h3 class="name">{{ name }}</h3>
                    <h4 class="role">{{ role }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    avatar: String,
    name: String, 
    role: String,
    img: String
})
</script>

<style scoped>
.card{
    backdrop-filter: blur(10px);
    border-radius: 30px;
    @apply flex-row border gap-0 max-w-[max-content] p-0 border-gray-400 bg-[var(--alpha-white)]
}
.text-content{
    @apply max-w-[400px] flex flex-col gap-3 p-4
}
h1{
    @apply text-2xl text-[var(--100)]
}
p{
    @apply text-gray-400
}
.profile{
    h4{
        @apply text-gray-400
    }
    @apply flex gap-4 items-center
}
svg{
    height: 60px;
    width: 60px;
    color: var(--200);
}
.avatar{
    img{
        border-radius: 50%;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>