import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SectionPreviewProps = {
  title: string;
  description?: string;
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  colored?: boolean;
};

export default function SectionPreview({
  title,
  description,
  href,
  icon,
  children,
  className,
  colored = false
}: SectionPreviewProps) {
  return (
    <section className={cn(
      "py-12 md:py-16",
      colored && "bg-secondary/30",
      className
    )}>
      <div className="container">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="flex items-center gap-2">
              {icon && (
                <div className="text-primary">
                  {icon}
                </div>
              )}
              <h2 className="section-heading">{title}</h2>
            </div>
            {description && (
              <p className="text-muted-foreground mt-2 max-w-3xl">
                {description}
              </p>
            )}
          </div>
          
          <Button asChild variant="ghost" className="group mt-4 md:mt-0">
            <Link to={href} className="flex items-center gap-2">
              Alle anzeigen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        {children}
      </div>
    </section>
  );
}