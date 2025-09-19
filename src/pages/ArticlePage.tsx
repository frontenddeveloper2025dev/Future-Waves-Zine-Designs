import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

type ArticleData = {
  title: string;
  author: string;
  date: string;
  image: string;
  content: string[];
};

export default function ArticlePage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    if (category && slug) {
      import(`../data/articles/${category}/${slug}.ts`)
        .then((module) => setArticle(module.default))
        .catch(() => {
          console.error('No se pudo cargar el artículo');
          setArticle(null);
        });
    }
  }, [category, slug]);

  if (!article) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <img
        src={`/images/${category}/${article.image}`}
        alt={article.title}
        className="rounded-md mb-6 w-full object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">
        {article.date} — {article.author}
      </p>
      <div className="space-y-4 text-lg leading-relaxed">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
