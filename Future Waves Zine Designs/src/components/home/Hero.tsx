import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Die Zukunft der Technologie <span className="gradient-text">heute entdecken</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tauchen Sie ein in die neuesten Entwicklungen und Trends der Technologiewelt mit Deutschlands innovativem Tech-Blog.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/kuenstliche-intelligenz">KI Trends entdecken</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/fullstack">Entwickler-Ressourcen</Link>
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span>Täglich neue Artikel</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span>Experten Meinungen</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-vibrant" />
                <span>Zukunfts Prognosen</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square w-full rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=800&fit=crop" 
                alt="Technologie der Zukunft" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-vibrant text-vibrant-foreground px-4 py-2 rounded-md font-bold shadow-lg">
              Neu
            </div>
            
            {/* Tech Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="tech-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" className="text-white/10" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tech-pattern)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}