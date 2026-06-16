import { createClient } from '@supabase/supabase-js';

// Anon key is intentionally public — protected by Row Level Security on the server.
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://hmjhkfyoovvncfnxfngo.supabase.co';

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtamhrZnlvb3Z2bmNmbnhmbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzODYzNjIsImV4cCI6MjA5Njk2MjM2Mn0.dEQJUqOu3PpisUtzQO1wuF2sDLeqOpwgvuW1r_iCmLo';

export const supabaseMisconfigured = false;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
