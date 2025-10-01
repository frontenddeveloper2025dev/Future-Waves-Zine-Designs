import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ArticlePage() {
  const { category, slug } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .eq("categoria", category)
        .single();

      if (error) {
        console.error("❌ Error al obtener el artículo:", error);
      } else {
        setArticle(data);
      }

      setLoading(false);
    };

    fetchArticle();
  }, [slug, category]);

  if (loading) return <p className="text-center mt-10">Cargando artículo...</p>;

  if (!article) return <p className="text-center mt-10">Artículo no encontrado 🕳️</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <img
        src={article.ruta}
        alt={article.slug}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{article.slug.replace(/-/g, " ")}</h1>
      <p className="text-muted-foreground text-sm mb-6">
        {article.fecha_publicacion?.slice(0, 10)} · Por {article.autor}
      </p>
      <p className="text-lg leading-relaxed whitespace-pre-line">{article.contenido}</p>
    </div>
  );
}
