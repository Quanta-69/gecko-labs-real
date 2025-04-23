import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cdymuoxmlskkcyfvulpa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkeW11b3htbHNra2N5ZnZ1bHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDc4NzcsImV4cCI6MjA2MDU4Mzg3N30.g7su4MV5y-lZ9-MkurcToHrntE6C9IkIql7OFvR-QQs";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase credentials are missing. Check your .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
export default defineNuxtPlugin(() => {});
