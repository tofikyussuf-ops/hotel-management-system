import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://sakobkeapywyvocrguqm.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNha29ia2VhcHl3eXZvY3JndXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNTY5MDksImV4cCI6MjA4NTczMjkwOX0.YWv5X2DMQDH3zryNOvG8P2xFoveFNj2ut8fRYXpmaBY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
