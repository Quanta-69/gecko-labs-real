<template>
  <div v-if="isLoading" class="loading">
    <div class="sk-spinner sk-spinner-circle"></div>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useEventBus } from '~/composables/useEventBus';
import { useNuxtApp } from '#app';

const isLoading = ref(false);
const eventBus = useEventBus();
const nuxtApp = useNuxtApp();

// Function to toggle the loading state
const toggleLoading = (loading) => {
  isLoading.value = loading;
};

// Event listeners for route changes
eventBus.on('route-change-start', () => toggleLoading(true));
eventBus.on('route-change-end', () => toggleLoading(false));
eventBus.on('route-change-error', () => toggleLoading(false));

// Cleanup event listeners
onUnmounted(() => {
  eventBus.off('route-change-start', toggleLoading);
  eventBus.off('route-change-end', toggleLoading);
  eventBus.off('route-change-error', toggleLoading);
});
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.sk-spinner-circle {
  /* Add your spinner styles here */
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>