// ==========================================
// CARTE AI - CONEXIÓN CON SUPABASE
// ==========================================

const SUPABASE_URL = "https://wehybszkkwvhrcsijkgl.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_hu-Ogpo6IRazjhoaOfwB4Q_MzSCbCg_";

// Cargar la librería de Supabase desde CDN
const supabaseScript = document.createElement("script");

supabaseScript.src =
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

supabaseScript.onload = function () {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log("CARTE AI conectado correctamente con Supabase.");
};

document.head.appendChild(supabaseScript);
