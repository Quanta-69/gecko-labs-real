export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabase();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Public routes
  const publicRoutes = [
    "/",
    "/auth/login",
    "/auth/signup",
    "/auth/forgot-password",
  ];

  if (!session && !publicRoutes.includes(to.path)) {
    return navigateTo("/auth/login");
  }
});
