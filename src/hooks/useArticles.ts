import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Asegúrate de que la ruta es correcta

type Article = {
  slug: string;
  contenido: string;
  ruta: string;
  categoria: string;
  autor: string;
  fecha_publicacion: string;
};

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("fecha_publicacion", { ascending: false });

      if (error) {
        console.error("Error al cargar artículos:", error);
      } else {
        setArticles(data || []);
      }

      setLoading(false);
    };

    fetchArticles();
  }, []);

  return { articles, loading };
}
