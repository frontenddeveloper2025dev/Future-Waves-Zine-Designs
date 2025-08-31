import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/home/ArticleCard';
import TrendingSidebar from '@/components/home/TrendingSidebar';
import { cn } from '@/lib/utils';

type SectionPageProps = {
  title: string;
  description: string;
  icon: ReactNode;
  backgroundColor?: string;
  articles: Array<{
    title: string;
    description: string;
    image: string;
    category: string;
    categoryHref: string;
    authorName: string;
    authorImage: string;
    readTime: string;
    date: string;
    href: string;
  }>;
  trendingArticles: Array<{
    title: string;
    category: string;
    categoryHref: string;
    href: string;
  }>;
};

export default function SectionPage({
  title,
  description,
  icon,
  backgroundColor = 'bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10',
  articles,
  trendingArticles
}: SectionPageProps) {
  return (
    <Layout>
      {/* Header */}
      <section className={cn("py-16", backgroundColor)}>
        <div className="container">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-4 p-3 rounded-full bg-background border border-border shadow-sm">
              {icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8">
                {articles.map((article, index) => (
                  <ArticleCard
                    key={index}
                    title={article.title}
                    description={article.description}
                    image={article.image}
                    category={article.category}
                    categoryHref={article.categoryHref}
                    authorName={article.authorName}
                    authorImage={article.authorImage}
                    readTime={article.readTime}
                    date={article.date}
                    href={article.href}
                    horizontal={true}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Link 
                    to="#" 
                    className="px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
                  >
                    Vorherige
                  </Link>
                  <Link
                    to="#"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                  >
                    1
                  </Link>
                  <Link
                    to="#"
                    className="px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
                  >
                    2
                  </Link>
                  <Link
                    to="#"
                    className="px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
                  >
                    3
                  </Link>
                  <Link
                    to="#"
                    className="px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
                  >
                    Nächste
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <TrendingSidebar
                articles={trendingArticles}
                className="sticky top-20 mb-8"
              />
              
              {/* Topics */}
              <div className="bg-card rounded-lg border border-border p-6 mt-8">
                <h3 className="font-bold text-xl mb-4">Themen</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Zukunft', 'Machine Learning', 'UI/UX', 'DevOps', 'Web3', 'Node.js', 'Python', 'Cloud'].map((topic) => (
                    <Link
                      key={topic}
                      to="#"
                      className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary/10 transition-colors"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-card rounded-lg border border-border p-6 mt-8">
                <h3 className="font-bold text-xl mb-2">Newsletter</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Bleiben Sie auf dem neuesten Stand mit unseren wöchentlichen Updates.
                </p>
                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail Adresse"
                    className="rounded-md border border-border bg-background px-3 py-2"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md font-medium"
                  >
                    Abonnieren
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}