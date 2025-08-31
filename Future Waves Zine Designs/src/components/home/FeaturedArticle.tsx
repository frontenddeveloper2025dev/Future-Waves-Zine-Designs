import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type FeaturedArticleProps = {
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
  className?: string;
  large?: boolean;
};

export default function FeaturedArticle({
  title,
  description,
  image,
  category,
  categoryHref,
  authorName,
  authorImage,
  readTime,
  date,
  href,
  className,
  large = false
}: FeaturedArticleProps) {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <Link to={href} className="block">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full object-cover",
              large ? "h-[400px]" : "h-[240px]"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
          <div className="absolute bottom-4 left-4">
            <Link to={categoryHref}>
              <Badge className="bg-accent hover:bg-accent/80">{category}</Badge>
            </Link>
          </div>
        </div>
      </Link>
      
      <CardContent className={cn("p-6", large && "space-y-4")}>
        <Link to={href}>
          <h3 className={cn(
            "font-bold tracking-tight hover:text-primary transition-colors line-clamp-2",
            large ? "text-2xl sm:text-3xl mb-3" : "text-xl mb-2"
          )}>
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground line-clamp-3 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={authorImage} 
              alt={authorName}
              className="w-8 h-8 rounded-full object-cover" 
            />
            <span className="text-sm font-medium">{authorName}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{readTime} • {date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}