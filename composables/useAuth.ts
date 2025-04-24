import type { User } from "@supabase/supabase-js";

export const useAuth = () => {
  const user = ref<User | null>(null);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    user.value = session?.user ?? null;
    return session;
  };

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signup = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };

  return { user, checkAuth, login, signup, logout };
};
