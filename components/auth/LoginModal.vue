<script setup>
import BaseModal from '~/components/GeckoBaseModal.vue'
defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
    <BaseModal :isOpen="isOpen" title="Login" @close="emit('close')">
        <!-- Login-specific content -->
        <form class="space-y-4">
            <input type="email" placeholder="Email" class="modal-input">
            <input type="password" placeholder="Password" class="modal-input">
            <button type="submit" class="gradient-border-btn w-full">
                <span class="gradient-border-content">Login</span>
            </button>
        </form>
    </BaseModal>
</template>