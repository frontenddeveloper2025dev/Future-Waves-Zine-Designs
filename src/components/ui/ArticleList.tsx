{articles.map((article) => (
  <ArticleCard
    key={article.slug}
    title={article.slug.replace(/-/g, " ")}
    description={article.contenido.slice(0, 120) + "..."}
    image={`/images/${article.categoria}/${article.nombre_imagen}`} // ← esta línea si usas `nombre_imagen`
    category={article.categoria}
    categoryHref={`/${article.categoria}`}
    authorName={article.autor || "Redaktion"}
    authorImage={`/images/authors/${article.autor || "default"}.jpg`}
    readTime="4 min"
    date={article.fecha_publicacion?.slice(0, 10) || "2025-10-01"}
    href={`/${article.categoria}/artikel/${article.slug}`}
  />
))}
