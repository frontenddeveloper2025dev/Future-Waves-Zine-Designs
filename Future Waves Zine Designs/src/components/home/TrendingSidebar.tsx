import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type TrendingArticle = {
  title: string;
  category: string;
  categoryHref: string;
  href: string;
};

type TrendingSidebarProps = {
  articles: TrendingArticle[];
  className?: string;
};

export default function TrendingSidebar({ articles, className }: TrendingSidebarProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xl">
          <TrendingUp className="w-5 h-5 text-vibrant" />
          <span>Trending Topics</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="flex gap-3 items-start pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="bg-secondary flex items-center justify-center rounded-full w-7 h-7 text-sm font-bold shrink-0">
                {index + 1}
              </div>
              <div>
                <Link to={article.href} className="font-medium hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </Link>
                <Link to={article.categoryHref} className="text-xs text-muted-foreground hover:text-accent transition-colors">
                  {article.category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}