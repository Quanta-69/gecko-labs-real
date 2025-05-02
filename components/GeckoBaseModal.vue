<script setup lang="ts">
const props = defineProps({
    isOpen: Boolean,
    title: String
})

const emit = defineEmits(['close'])

// Scroll lock logic
const toggleBodyScroll = (isOpen: boolean) => {
    if (process) {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }
}

watch(() => props.isOpen, (isOpen) => {
    toggleBodyScroll(isOpen)
})

onBeforeUnmount(() => {
    toggleBodyScroll(false)
})
</script>

<template>
    <Transition name="fade">
        <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
            <div class="modal-container">
                <button @click="emit('close')" class="modal-close-btn">×</button>
                <h2 v-if="title" class="modal-title">{{ title }}</h2>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.modal-overlay {
    min-height: 100vh;
    background: url(/assets/svg/account.svg) no-repeat fixed center/cover;
    border-image:fill 0 linear-gradient(-150deg, rgba(0, 0, 0, 0.442), black);
    @apply backdrop-blur-[6px] bg-opacity-60 flex items-center justify-center p-4 z-50;
}
.modal-container {
    backdrop-filter: blur(10px);
    @apply h-[50vh] flex flex-col items-center gap-2 justify-center bg-[var(--alpha-white)] border border-[var(--alpha-border)] max-w-[600px] rounded-lg shadow-xl p-6 w-full relative;
}

.modal-close-btn {
    @apply absolute top-4 right-4 text-4xl text-gray-200 hover:text-gray-400;
}

.modal-title {
    @apply text-2xl font-bold mb-4;
}
h2{
    background: linear-gradient(to right, var(--100), var(--200));
    @apply bg-clip-text text-transparent
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>