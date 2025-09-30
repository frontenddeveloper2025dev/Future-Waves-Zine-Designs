import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
// 🔄 usamos imports relativos:
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

type TechSpotlightProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  categoryHref: string;
  href: string;
  className?: string;
};

export default function TechSpotlight({
  title,
  description,
  image,
  category,
  categoryHref,
  href,
  className,
}: TechSpotlightProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="relative">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full object-cover h-[240px] md:h-[320px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <CardContent className="relative z-10 p-6 -mt-32 md:-mt-48">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-vibrant p-1 rounded-full">
              <Sparkles className="w-5 h-5 text-vibrant-foreground" />
            </div>
            <span className="font-bold text-vibrant">Zukunfts-Technologie der Woche</span>
          </div>

          <Link to={categoryHref}>
            <Badge className="mb-3 bg-accent hover:bg-accent/80">{category}</Badge>
          </Link>

          <Link to={href}>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>

          <p className="text-muted-foreground mb-6 max-w-3xl">
            {description}
          </p>

          <Button asChild>
            <Link to={href}>Mehr erfahren</Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
