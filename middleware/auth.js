export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data } = await useAsyncData("session", async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
  });

  // Exclude public routes (e.g., /login, /signup)
  const publicRoutes = ["/auth/login", "/auth/signup"];

  // Redirect unauthenticated users to /login for protected routes
  if (!data.value && !publicRoutes.includes(to.path)) {
    console.log("No session found, redirecting to /login...");
    return navigateTo("/auth/login");
  }
});
