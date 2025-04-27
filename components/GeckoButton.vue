<script setup lang="ts">
import { icons, type IconName } from '~/assets/icons/icons'

const props = defineProps({
    // Content
    text: {
        type: String,
        default: 'Click me'
    },
    icon: {
        type: String as () => IconName | null,
        default: null
    },
    iconPosition: {
        type: String as () => 'left' | 'right',
        default: 'right'
    },
    // Style control
    variant: {
        type: String as () => 'primary' | 'secondary' | 'ghost',
        default: 'primary'
    },
    size: {
        type: String as () => 'sm' | 'md' | 'lg',
        default: 'sm'
    },
    customClass: {
        type: String,
        default: ''
    },

    // Behavior
    disabled: {
        type: Boolean,
        default: false
    }
})

const buttonClasses = computed(() => [
    `btn-${props.variant}`,
    `btn-${props.size}`,
    props.customClass,
    { 'opacity-50 cursor-not-allowed': props.disabled }
])
const isHovered = ref(false)
const currentIcon = computed(() => {
    if (!props.icon || !icons[props.icon]) return null
    return icons[props.icon]
})
</script>

<template>
    <button @mouseenter="isHovered = true" @mouseleave="isHovered = false" :class="buttonClasses" :disabled="disabled"
        class="base-btn-styles transition-all">
        <span v-if="currentIcon && iconPosition === 'left'" class="icon-left icon"
            v-html="isHovered ? currentIcon.hover : currentIcon.default" />
        {{ text }}
        <span v-if="currentIcon && iconPosition === 'right'" class="icon-right icon"
            v-html="isHovered ? currentIcon.hover : currentIcon.default" />
    </button>
</template>

<style scoped>
button {
    gap: 5px;
    transition: all .2s !important;
    @apply flex items-center justify-center 
}

.base-btn-styles {
    @apply rounded-md font-semibold hover:cursor-pointer shadow-md;
}

/* Variants */
.btn-primary {
    background: linear-gradient(50deg, var(--primary-light), var(--primary-dark));
    @apply text-[var(--light-text)];
}
.btn-primary:hover{
    background:linear-gradient(-50deg, var(--primary-light), var(--primary-dark));
    @apply text-[var(--dark-text)]
}

.btn-secondary {
    @apply bg-[var(--light-bg)] text-[var(--dark-text)] border;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.106);
    backdrop-filter: blur(10px);
    @apply border text-[var(--light-text)];
}

.btn-ghost {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.106);
    @apply border border-gray-300 hover:bg-[var(--light-text)] hover:text-[var(--dark-text)];
}

/* Sizes */
.btn-sm {
    @apply px-3.5 py-1.5 text-sm;
}

.btn-md {
    @apply px-4 py-2 text-base;
}

.btn-lg {
    @apply px-6 py-3 text-lg;
}
.icon-left {
    @apply w-4 h-4;
}
.icon-right {
    @apply w-5 h-5;
}
</style>