import { supabase } from "~/utils/supabase";

export const useSupabase = () => {
  // Ensures single instance across SSR + client
  return supabase;
};
