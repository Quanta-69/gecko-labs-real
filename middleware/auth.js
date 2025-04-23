export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data: session } = await useSupabaseAuthClient().auth.getSession();
  if (!session) {
    return navigateTo("/login"); // Redirect to login if not authenticated
  }
});