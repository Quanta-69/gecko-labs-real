export default defineNuxtRouteMiddleware(async (to) => {
  // Skip auth check for these routes
  if (["/", "/auth/login", "/auth/signup"].includes(to.path)) return;

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return navigateTo("/auth/login");
});
