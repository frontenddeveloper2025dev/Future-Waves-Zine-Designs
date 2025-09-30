import { useArticles } from "../../hooks/useArticles";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const { articles, loading } = useArticles();

  if (loading) return <p className="text-center">Cargando artículos...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          title={article.slug.replace(/-/g, " ")}
          description={article.contenido.slice(0, 120) + "..."}
          image={article.ruta}
          category={article.categoria}
          categoryHref={`/${article.categoria}`}
          authorName={article.autor || "Redaktion"}
          authorImage={`/images/authors/${article.autor || "default"}.jpg`}
          readTime="4 min"
          date={article.fecha_publicacion?.slice(0, 10) || "2025-09-29"}
          href={`/${article.categoria}/artikel/${article.slug}`}
        />
      ))}
    </div>
  );
}
