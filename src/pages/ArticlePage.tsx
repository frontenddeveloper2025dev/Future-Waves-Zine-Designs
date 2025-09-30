import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

type ArticleData = {
  contenido: string;
  nombre_imagen: string;
  categoria: string;
  slug: string;
  estado?: string;
  autor?: string;
  fecha_publicacion?: string;
};

export default function ArticlePage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category && slug) {
      supabase
        .from("articles")
        .select("*")
        .eq("categoria", category)
        .eq("slug", slug)
        .single()
        .then(({ data, error }) => {
          if (error || !data) {
            console.error("Error cargando artículo:", error);
            setArticle(null);
          } else {
            setArticle(data);
          }
          setLoading(false);
        });
    }
  }, [category, slug]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-10 text-red-500">
        Artículo no encontrado.
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <img
        src={`/images/${category}/${article.nombre_imagen}`}
        alt={article.slug}
        className="rounded-md mb-6 w-full object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">
        {article.slug.replace(/-/g, " ")}
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        {article.fecha_publicacion || "Sin fecha"} —{" "}
        {article.autor || "Anónimo"}
      </p>
      <div className="prose max-w-none text-lg leading-relaxed whitespace-pre-line">
        {article.contenido}
      </div>
    </article>
  );
}
