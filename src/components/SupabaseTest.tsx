import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function SupabaseTest() {
  const [message, setMessage] = useState("Conectando...");

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from("articles").select("*").limit(1);
        if (error) {
          setMessage("❌ Error: " + error.message);
        } else {
          setMessage("✅ Conexión exitosa. Artículos encontrados: " + data.length);
        }
      } catch (err) {
        setMessage("⚠️ Fallo en conexión con Supabase");
      }
    }

    testConnection();
  }, []);

  return <div className="p-4 bg-gray-100 text-sm rounded">{message}</div>;
}
