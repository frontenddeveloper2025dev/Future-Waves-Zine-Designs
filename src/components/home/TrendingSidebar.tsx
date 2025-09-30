import { Link } from "react-router-dom";

type Article = {
  title: string;
  category: string;
  categoryHref: string;
  href: string;
};

type TrendingSidebarProps = {
  articles: Article[];
};

export default function TrendingSidebar({ articles }: TrendingSidebarProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-primary">🔥 Tendencias</h2>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index} className="border-b pb-2">
            <Link to={article.href} className="block hover:text-accent transition-colors">
              <span className="block text-sm text-muted-foreground mb-1">
                {article.category}
              </span>
              <span className="font-medium">{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
