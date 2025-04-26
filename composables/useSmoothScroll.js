import { onMounted, onBeforeUnmount } from "vue";

export default function useSmoothScroll() {
  const initSmoothScroll = async () => {
    // Dynamic import for SSR compatibility
    const LocomotiveScroll = (await import("locomotive-scroll")).default;

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      inertia: 0.8,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Nuxt page transition handler
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:finish", () => {
      scroll.update();
    });

    onBeforeUnmount(() => {
      scroll.destroy();
    });
  };

  onMounted(() => {
    if (process.client) {
      // Only run on client-side
      initSmoothScroll();
    }
  });
}
