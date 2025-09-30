
import ArticleList from "../components/ui/ArticleList";
import TrendingSidebar from "../components/TrendingSidebar";
import TechSpotlight from "../components/home/TechSpotlight"; // ✅ asegúrate de que esta ruta es correcta

// ✅ Artículos en tendencia (sidebar)
const trendingArticles = [
  {
    title: "Datenjunkies: Sind Data Scientists die „Orakel“ des 21. Jahrhunderts?",
    category: "Datenjunkies",
    categoryHref: "/datenjunkies",
    href: "/datenjunkies/artikel/orakel-des-21-jahrhunderts",
  },
  {
    title: "Codechaos: KI verändert die Webentwicklung",
    category: "Codechaos",
    categoryHref: "/codechaos",
    href: "/codechaos/artikel/ki-veraendert-webentwicklung",
  },
  {
    title: "Stahlrebellen: Wenn KI Robotern Flügel verpasst",
    category: "Stahlrebellen",
    categoryHref: "/stahlrebellen",
    href: "/stahlrebellen/artikel/ki-verleiht-robotern-fluegel",
  },
  {
    title: "Pixel, Pinsel, Programmcode: Wer malt die Zukunft?",
    category: "Maschinengeflüster",
    categoryHref: "/maschinengefluester",
    href: "/maschinengefluester/artikel/kunst-und-code",
  },
  {
    title: "Die Mod-Subkultur: Ihre Geschichte, Einflüsse und globale Bedeutung",
    category: "Multikulturell",
    categoryHref: "/multikulturell",
    href: "/multikulturell/artikel/mod-subkultur-globale-einfluesse",
  },
];

// ✅ Spotlight destacado
const spotlightArticle = {
  title: "Neue Quantenchips revolutionieren das Computing",
  description:
    "Wissenschaftler haben eine neue Generation von Quantenchips entwickelt, die tausendmal schneller als bisherige Modelle sein sollen.",
  image: "/images/techspotlight/quantenchip.jpg", // Asegúrate de que esta imagen exista en /public
  category: "Techgeil",
  categoryHref: "/techgeil",
  href: "/techgeil/artikel/quantenchip-revolution",
};

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
      
      {/* 🔥 Barra lateral de tendencias */}
      <aside className="md:col-span-1">
        <TrendingSidebar articles={trendingArticles} />
      </aside>

      {/* 🌟 Spotlight + artículos */}
      <section className="md:col-span-3">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Zukunft Welle Fanzine 🌀
        </h1>

        {/* 🧠 Spotlight semanal */}
        <TechSpotlight {...spotlightArticle} className="mb-10" />

        {/* 📚 Lista de artículos */}
        <ArticleList />
      </section>
    </main>
  );
}
