export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabase();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 1. Allow auth pages if unauthenticated
  if (["/auth/login", "/auth/signup"].includes(to.path) && !session) return;

  // 2. Redirect to login if no session (except auth pages)
  if (!session && !["/auth/login", "/auth/signup"].includes(to.path)) {
    return navigateTo("/auth/login");
  }

  // 3. Redirect to dashboard if logged-in user hits auth pages
  if (session && ["/auth/login", "/auth/signup"].includes(to.path)) {
    return navigateTo("/dashboard");
  }
});
