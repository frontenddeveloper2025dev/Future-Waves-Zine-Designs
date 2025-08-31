import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ArticleCardProps = {
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
  horizontal?: boolean;
};

export default function ArticleCard({
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
  horizontal = false
}: ArticleCardProps) {
  if (horizontal) {
    return (
      <Card className={cn("overflow-hidden card-hover", className)}>
        <div className="flex flex-col md:flex-row">
          <Link to={href} className="md:w-1/3">
            <div className="relative h-60 md:h-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
              <div className="absolute top-4 left-4">
                <Link to={categoryHref}>
                  <Badge className="bg-accent hover:bg-accent/80">{category}</Badge>
                </Link>
              </div>
            </div>
          </Link>
          
          <CardContent className="p-6 md:w-2/3 flex flex-col justify-between">
            <div>
              <Link to={href}>
                <h3 className="text-xl font-bold tracking-tight hover:text-primary transition-colors mb-2 line-clamp-2">
                  {title}
                </h3>
              </Link>
              
              <p className="text-muted-foreground line-clamp-3 mb-4">{description}</p>
            </div>
            
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
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <Link to={href} className="block">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
          <div className="absolute bottom-4 left-4">
            <Link to={categoryHref}>
              <Badge className="bg-accent hover:bg-accent/80">{category}</Badge>
            </Link>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-5">
        <Link to={href}>
          <h3 className="text-lg font-bold tracking-tight hover:text-primary transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={authorImage} 
              alt={authorName}
              className="w-7 h-7 rounded-full object-cover" 
            />
            <span className="text-xs font-medium">{authorName}</span>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}