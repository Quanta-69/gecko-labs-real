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
    @apply  bg-black backdrop-blur-[6px] bg-opacity-60 flex items-center justify-center p-4 z-50;
}
.modal-container {
    @apply bg-red-400 rounded-lg shadow-xl p-6 w-full max-w-md relative;
}

.modal-close-btn {
    @apply absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700;
}

.modal-title {
    @apply text-xl font-bold mb-4;
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