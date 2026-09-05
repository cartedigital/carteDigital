// Configuración de Supabase para CARTE AI
const SUPABASE_URL = 'https://wehybszkkwvhrcsijkgl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_hu-Ogpo6IRazjhoaOfwB4Q_MzSCbCg_';

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
