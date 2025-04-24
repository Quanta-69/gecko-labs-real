// ~/middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  // Only protect dashboard
  if (to.path.startsWith("/dashboard")) {
    const {
      data: { session }
    } = await supabase.auth.getSession();

    if (!session) {
      // Store attempted path for post-login redirect if running in browser
      if (typeof window !== "undefined") {
        localStorage.setItem("redirectPath", to.fullPath);
      }
      return navigateTo("/auth/login");
    }
  }
});
