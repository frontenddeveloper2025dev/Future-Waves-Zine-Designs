import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code, 
  LineChart, 
  Database, 
  Brain, 
  Bot, 
  Users, 
  Palette, 
  Menu, 
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: 'Fullstack', href: '/fullstack', icon: <Code className="w-5 h-5" /> },
  { name: 'Forecasting', href: '/forecasting', icon: <LineChart className="w-5 h-5" /> },
  { name: 'Data Science', href: '/data-science', icon: <Database className="w-5 h-5" /> },
  { name: 'Künstliche Intelligenz', href: '/kuenstliche-intelligenz', icon: <Brain className="w-5 h-5" /> },
  { name: 'Robotik', href: '/robotik', icon: <Bot className="w-5 h-5" /> },
  { name: 'Human-Centered Design', href: '/human-centered-design', icon: <Users className="w-5 h-5" /> },
  { name: 'Kunst', href: '/kunst', icon: <Palette className="w-5 h-5" /> },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary via-accent to-vibrant flex items-center justify-center">
              <span className="font-bold text-white">ZW</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Zukunft-Wellefanzine</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "nav-link flex items-center gap-1",
                location.pathname === item.href ? "nav-link-active" : "nav-link-inactive"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden py-2 px-4 pb-4 border-b border-border">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-link flex items-center gap-2 py-3",
                  location.pathname === item.href ? "nav-link-active" : "nav-link-inactive"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}