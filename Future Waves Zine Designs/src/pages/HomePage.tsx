import {
  Brain,
  Code, 
  Database, 
  LineChart,
  Palette, 
  Bot, 
  Users
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedArticle from '@/components/home/FeaturedArticle';
import ArticleCard from '@/components/home/ArticleCard';
import SectionPreview from '@/components/home/SectionPreview';
import TrendingSidebar from '@/components/home/TrendingSidebar';
import TechSpotlight from '@/components/home/TechSpotlight';

// Mock data for trending topics
const trendingArticles = [
  {
    title: "Die Zukunft der Frontend-Entwicklung mit WebGPU",
    category: "Fullstack",
    categoryHref: "/fullstack",
    href: "/fullstack/artikel/zukunft-der-frontend-entwicklung"
  },
  {
    title: "KI-Halluzinationen: Wie große Sprachmodelle die Realität verzerren",
    category: "Künstliche Intelligenz",
    categoryHref: "/kuenstliche-intelligenz",
    href: "/kuenstliche-intelligenz/artikel/ki-halluzinationen"
  },
  {
    title: "Kausalität vs. Korrelation: Der blinde Fleck in der Data Science",
    category: "Data Science",
    categoryHref: "/data-science",
    href: "/data-science/artikel/kausalitaet-vs-korrelation"
  },
  {
    title: "Mehrstufige Robotersysteme für komplexe Fertigungsprozesse",
    category: "Robotik",
    categoryHref: "/robotik",
    href: "/robotik/artikel/mehrstufige-robotersysteme"
  },
  {
    title: "Digitale Kunst trifft KI: Die neuen Grenzen der Kreativität",
    category: "Kunst",
    categoryHref: "/kunst",
    href: "/kunst/artikel/digitale-kunst-trifft-ki"
  }
];

function HomePage() {
  return (
    <Layout>
      <Hero />
      
      {/* Featured Articles */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="section-heading">Ausgewählte Artikel</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FeaturedArticle 
              title="Quantencomputer: Die Revolution des Rechenzeitalters ist näher als gedacht"
              description="Neue Durchbrüche in der Quantencomputer-Forschung versprechen bis 2026 praktische Anwendungen in der Kryptographie und Materialwissenschaft. Erfahren Sie, wie diese Technologie unsere digitale Zukunft umgestalten wird."
              image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop"
              category="Forecasting"
              categoryHref="/forecasting"
              authorName="Dr. Martina Schneider"
              authorImage="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop"
              readTime="6 min"
              date="10 Aug"
              href="/forecasting/artikel/quantencomputer-revolution"
              large={true}
              className="lg:col-span-2 lg:row-span-2"
            />
            
            <FeaturedArticle 
              title="TypeScript 5.5: Die wichtigsten Features für moderne Entwickler"
              description="Die neueste Version bringt entscheidende Verbesserungen für Frontend-Entwickler. Hier sind die Top-Features, die Sie kennen sollten."
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop"
              category="Fullstack"
              categoryHref="/fullstack"
              authorName="Lukas Wagner"
              authorImage="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop"
              readTime="4 min"
              date="12 Aug"
              href="/fullstack/artikel/typescript-5-5-features"
            />
            
            <FeaturedArticle 
              title="Generative KI und ethische Grenzen in der digitalen Kunst"
              description="Künstler und KI-Experten diskutieren die rechtlichen und ethischen Herausforderungen von generativer Kunst. Ist der Mensch noch Schöpfer oder nur Kurator?"
              image="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=500&fit=crop"
              category="Kunst"
              categoryHref="/kunst"
              authorName="Sophia Müller"
              authorImage="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop"
              readTime="5 min"
              date="8 Aug"
              href="/kunst/artikel/generative-ki-und-ethik"
            />
          </div>
        </div>
      </section>
      
      {/* Tech Spotlight */}
      <section className="py-12">
        <div className="container">
          <TechSpotlight 
            title="Brain-Computer-Interfaces: Gedankengesteuerte Technologie wird Mainstream"
            description="Während Neuralink klinische Studien beginnt, entwickeln Startups erschwingliche, nicht-invasive BCIs, die in den nächsten 18 Monaten Produktreife erreichen könnten. Die Verschmelzung von Mensch und Technologie beschleunigt sich, mit potenziellen Durchbrüchen bei neurologischen Erkrankungen und völlig neuen Mensch-Maschine-Schnittstellen."
            image="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=600&fit=crop"
            category="Human-Centered Design"
            categoryHref="/human-centered-design"
            href="/human-centered-design/artikel/brain-computer-interfaces"
          />
        </div>
      </section>
      
      {/* AI Section */}
      <SectionPreview
        title="Künstliche Intelligenz"
        description="Neueste Entwicklungen, Forschungsergebnisse und praktische Anwendungen im Bereich der KI."
        href="/kuenstliche-intelligenz"
        icon={<Brain className="w-6 h-6" />}
        colored={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArticleCard 
            title="Multimodale KI-Systeme: Das Zusammenspiel von Text, Bild und Ton"
            description="Wie neueste KI-Architekturen mehrere Datentypen gleichzeitig verarbeiten und daraus komplexe Zusammenhänge lernen."
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop"
            category="Künstliche Intelligenz"
            categoryHref="/kuenstliche-intelligenz"
            authorName="Prof. Klaus Weber"
            authorImage="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=100&h=100&fit=crop"
            readTime="7 min"
            date="11 Aug"
            href="/kuenstliche-intelligenz/artikel/multimodale-ki-systeme"
          />
          
          <ArticleCard 
            title="Reinforcement Learning: Die Zukunft der autonomen Systeme"
            description="Wie selbstlernende Algorithmen die nächste Generation von Robotern und autonomen Fahrzeugen prägen."
            image="https://images.unsplash.com/photo-1531279550271-23c2a77a765c?w=800&h=500&fit=crop"
            category="Künstliche Intelligenz"
            categoryHref="/kuenstliche-intelligenz"
            authorName="Dr. Anna Hoffmann"
            authorImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
            readTime="5 min"
            date="9 Aug"
            href="/kuenstliche-intelligenz/artikel/reinforcement-learning-autonome-systeme"
          />
          
          <ArticleCard 
            title="KI-generierte Inhalte und die Zukunft des Urheberrechts"
            description="Rechtliche Herausforderungen und neue Gesetzgebungsansätze für KI-erzeugte Texte, Bilder und Musik."
            image="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop"
            category="Künstliche Intelligenz"
            categoryHref="/kuenstliche-intelligenz"
            authorName="Dr. Thomas Berger"
            authorImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
            readTime="6 min"
            date="7 Aug"
            href="/kuenstliche-intelligenz/artikel/ki-urheberrecht"
          />
        </div>
      </SectionPreview>
      
      {/* Fullstack + Trending */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Code className="w-6 h-6 text-primary" />
                <h2 className="section-heading mb-0">Fullstack</h2>
              </div>
              
              <ArticleCard
                title="Micro-Frontends: Architektur der Zukunft oder überkomplizierter Trend?"
                description="Untersuchen der Vor- und Nachteile von Micro-Frontend-Architekturen und wann sie sinnvoll eingesetzt werden sollten. Eine kritische Analyse mit Fallstudien aus der Industrie."
                image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop"
                category="Fullstack"
                categoryHref="/fullstack"
                authorName="Jan Nowak"
                authorImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
                readTime="8 min"
                date="11 Aug"
                href="/fullstack/artikel/micro-frontends"
                horizontal={true}
                className="mb-6"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ArticleCard
                  title="Die Renaissance der Server-Komponenten"
                  description="Wie Next.js, Remix und andere Frameworks Server-Komponenten zurück ins Web bringen und die Performance verbessern."
                  image="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=500&fit=crop"
                  category="Fullstack"
                  categoryHref="/fullstack"
                  authorName="Markus Klein"
                  authorImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  readTime="5 min"
                  date="9 Aug"
                  href="/fullstack/artikel/server-komponenten-renaissance"
                />
                
                <ArticleCard
                  title="API-Design: Von RESTful zu GraphQL und gRPC"
                  description="Ein Vergleich moderner API-Paradigmen und wann welche Technologie die beste Wahl ist."
                  image="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&h=500&fit=crop"
                  category="Fullstack"
                  categoryHref="/fullstack"
                  authorName="Julia Schmidt"
                  authorImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop"
                  readTime="6 min"
                  date="10 Aug"
                  href="/fullstack/artikel/api-design-vergleich"
                />
              </div>
            </div>
            
            {/* Trending Sidebar */}
            <div>
              <TrendingSidebar 
                articles={trendingArticles}
                className="sticky top-20"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Science Section */}
      <SectionPreview
        title="Data Science"
        description="Big Data, Datenanalyse und Machine Learning - Erkenntnisse und Best Practices."
        href="/data-science"
        icon={<Database className="w-6 h-6" />}
        colored={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArticleCard 
            title="Zeitreihenanalyse mit Python: Moderne Ansätze jenseits von ARIMA"
            description="Neue Bibliotheken und Methoden, die traditionelle statistische Modelle übertreffen."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
            category="Data Science"
            categoryHref="/data-science"
            authorName="Dr. Sarah Meier"
            authorImage="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
            readTime="9 min"
            date="8 Aug"
            href="/data-science/artikel/zeitreihenanalyse-python"
          />
          
          <ArticleCard 
            title="Feature Engineering: Die unterschätzte Kunst der Data Science"
            description="Warum selbst einfache Modelle mit brillanten Features komplexe Algorithmen übertreffen können."
            image="https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&h=500&fit=crop"
            category="Data Science"
            categoryHref="/data-science"
            authorName="Martin Weber"
            authorImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            readTime="5 min"
            date="7 Aug"
            href="/data-science/artikel/feature-engineering"
          />
          
          <ArticleCard 
            title="Explainable AI: Wenn der Algorithmus seine Entscheidungen begründet"
            description="Methoden zur Interpretation komplexer Machine-Learning-Modelle für kritische Anwendungen."
            image="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=800&h=500&fit=crop"
            category="Data Science"
            categoryHref="/data-science"
            authorName="Prof. Lisa Bauer"
            authorImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            readTime="7 min"
            date="6 Aug"
            href="/data-science/artikel/explainable-ai"
          />
        </div>
      </SectionPreview>
      
      {/* Other Categories */}
      <section className="py-12">
        <div className="container">
          <h2 className="section-heading">Weitere Kategorien</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
              <LineChart className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Forecasting</h3>
              <p className="text-muted-foreground mb-4">Trends und Prognosen zur digitalen Zukunft und technologischen Entwicklung.</p>
              <a href="/forecasting" className="text-primary font-medium hover:underline">Mehr erfahren →</a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors">
              <Bot className="w-10 h-10 mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">Robotik</h3>
              <p className="text-muted-foreground mb-4">Fortschritte in der Robotertechnologie, Automation und Mensch-Maschine-Interaktion.</p>
              <a href="/robotik" className="text-accent font-medium hover:underline">Mehr erfahren →</a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-vibrant transition-colors">
              <Users className="w-10 h-10 mb-4 text-vibrant" />
              <h3 className="text-xl font-bold mb-2">Human-Centered Design</h3>
              <p className="text-muted-foreground mb-4">Nutzerorientierte Gestaltung und die Schnittstelle zwischen Mensch und Technologie.</p>
              <a href="/human-centered-design" className="text-vibrant font-medium hover:underline">Mehr erfahren →</a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/70 transition-colors">
              <Palette className="w-10 h-10 mb-4 text-primary/70" />
              <h3 className="text-xl font-bold mb-2">Kunst</h3>
              <p className="text-muted-foreground mb-4">Digitale Kunst, generative Techniken und die kreative Seite der Technologie.</p>
              <a href="/kunst" className="text-primary/70 font-medium hover:underline">Mehr erfahren →</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading">Newsletter abonnieren</h2>
            <p className="text-muted-foreground mb-6">
              Erhalten Sie wöchentliche Updates mit den neuesten Technologietrends und exklusiven Inhalten direkt in Ihren Posteingang.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail Adresse"
                className="rounded-md border border-border bg-background px-4 py-2 flex-grow"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;