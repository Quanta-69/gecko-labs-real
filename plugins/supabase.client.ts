import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {

    
if (process.client) {
     const supabase = createClient(
    "https://cdymuoxmlskkcyfvulpa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkeW11b3htbHNra2N5ZnZ1bHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDc4NzcsImV4cCI6MjA2MDU4Mzg3N30.g7su4MV5y-lZ9-MkurcToHrntE6C9IkIql7OFvR-QQs",
    {
      auth: {
        persistSession: true, // Critical for session persistence
        autoRefreshToken: true, // Maintains active session
        detectSessionInUrl: false, // Disable for cleaner redirects
      },
    }
  );
  return {
    provide: { supabase },
    };        
    }
});
