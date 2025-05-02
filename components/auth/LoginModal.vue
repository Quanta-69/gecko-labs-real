<script setup lang="ts">
import BaseModal from '~/components/GeckoBaseModal.vue'
defineProps({
    isOpen: Boolean
})
const emit = defineEmits(['close']);

</script>

<template>
    <BaseModal :isOpen="isOpen" title="Pickup Where You Left Off" @close="emit('close')">
        <!-- Login-specific content -->
        <form>
            <input type="email" placeholder="Email" class="modal-input">
            <input type="password" placeholder="Password" class="modal-input">
            <GeckoButton class="w-full max-w-[200px]" text="Login" variant="secondary" icon="ext_link"/>
        </form>
    </BaseModal>
</template>

<style scoped>
form{
    input{
        outline: 0;
        backdrop-filter: blur(10px);
        @apply h-10 bg-[var(--alpha-white)] rounded-md font-medium text-[var(--light-text)] px-2 w-full max-w-[320px]
    }
    @apply space-y-4 flex flex-col gap-4 w-full justify-center items-center
}
</style>