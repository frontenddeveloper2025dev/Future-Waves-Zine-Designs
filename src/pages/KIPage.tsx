import { Brain } from 'lucide-react';
import SectionPage from './SectionPage';

// Mock trending articles
const trendingArticles = [
  {
    title: "Datenjunkies: Sind Data Scientists die „Orakel“ des 21. Jahrhunderts?",
    category: "Datenjunkies",
    categoryHref: "/Datenjunkies",
    href: "/kuenstliche-intelligenz/artikel/ki-halluzinationen"
  },
  {
    title: "Die Zukunft der Frontend-Entwicklung mit WebGPU",
    category: "Fullstack",
    categoryHref: "/fullstack",
    href: "/fullstack/artikel/zukunft-der-frontend-entwicklung"
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

// Mock articles
const articles = [
  {
    title: "Multimodale KI-Systeme: Das Zusammenspiel von Text, Bild und Ton",
    description: "Wie neueste KI-Architekturen mehrere Datentypen gleichzeitig verarbeiten und daraus komplexe Zusammenhänge lernen. Diese Systeme repräsentieren einen entscheidenden Fortschritt in der Entwicklung von künstlicher Intelligenz, die der menschlichen Wahrnehmung näher kommt.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
    category: "Künstliche Intelligenz",
    categoryHref: "/kuenstliche-intelligenz",
    authorName: "Prof. Klaus Weber",
    authorImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=100&h=100&fit=crop",
    readTime: "7 min",
    date: "11 Aug",
    href: "/kuenstliche-intelligenz/artikel/multimodale-ki-systeme"
  },
  {
    title: "Reinforcement Learning: Die Zukunft der autonomen Systeme",
    description: "Wie selbstlernende Algorithmen die nächste Generation von Robotern und autonomen Fahrzeugen prägen. Dieser Artikel beleuchtet die neuesten Durchbrüche im Bereich des Reinforcement Learning und deren praktische Anwendungen in der realen Welt.",
    image: "https://images.unsplash.com/photo-1531279550271-23c2a77a765c?w=800&h=500&fit=crop",
    category: "Künstliche Intelligenz",
    categoryHref: "/kuenstliche-intelligenz",
    authorName: "Dr. Anna Hoffmann",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    readTime: "5 min",
    date: "9 Aug",
    href: "/kuenstliche-intelligenz/artikel/reinforcement-learning-autonome-systeme"
  },
  {
    title: "KI-generierte Inhalte und die Zukunft des Urheberrechts",
    description: "Rechtliche Herausforderungen und neue Gesetzgebungsansätze für KI-erzeugte Texte, Bilder und Musik. Dieser Artikel analysiert die komplexen rechtlichen Fragen rund um geistiges Eigentum in einer Ära, in der Maschinen kreative Werke erzeugen können.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop",
    category: "Künstliche Intelligenz",
    categoryHref: "/kuenstliche-intelligenz",
    authorName: "Dr. Thomas Berger",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
    readTime: "6 min",
    date: "7 Aug",
    href: "/kuenstliche-intelligenz/artikel/ki-urheberrecht"
  },
  {
    title: "KI-Halluzinationen: Wie große Sprachmodelle die Realität verzerren",
    description: "Eine tiefgehende Analyse der Fehlerquellen in großen Sprachmodellen und Strategien, um diese zu minimieren. Warum selbst fortschrittliche KI-Systeme manchmal Dinge 'erfinden' und welche Lösungsansätze Forscher verfolgen.",
    image: "https://images.unsplash.com/photo-1620266757065-5814239881fd?w=800&h=500&fit=crop",
    category: "Künstliche Intelligenz",
    categoryHref: "/kuenstliche-intelligenz",
    authorName: "Dr. Sophia Neumann",
    authorImage: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=100&h=100&fit=crop",
    readTime: "8 min",
    date: "5 Aug",
    href: "/kuenstliche-intelligenz/artikel/ki-halluzinationen"
  },
  {
    title: "Explainable AI: Wenn der Algorithmus seine Entscheidungen begründet",
    description: "Methoden zur Interpretation komplexer Machine-Learning-Modelle für kritische Anwendungen. Dieser Artikel erklärt, warum Transparenz in KI-Systemen essentiell ist und welche Techniken entwickelt werden, um die 'Black Box' zu öffnen.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=500&fit=crop",
    category: "Künstliche Intelligenz",
    categoryHref: "/kuenstliche-intelligenz",
    authorName: "Prof. Lisa Bauer",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    readTime: "7 min",
    date: "3 Aug",
    href: "/kuenstliche-intelligenz/artikel/explainable-ai"
  },
];

export default function KIPage() {
  return (
    <SectionPage
      title="Künstliche Intelligenz"
      description="Neueste Entwicklungen, Forschungsergebnisse und praktische Anwendungen im Bereich der KI und maschinellem Lernen."
      icon={<Brain className="w-12 h-12 text-accent" />}
      backgroundColor="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10"
      articles={articles}
      trendingArticles={trendingArticles}
    />
  );
}