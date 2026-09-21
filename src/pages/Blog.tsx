import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSeo, useStructuredData } from "@/hooks/usePageSeo";
import { articles } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogHero from "@/assets/service-heroes/blog.jpg";

const Blog = () => {
  usePageSeo("Blog ingénierie & projets au Mali | ICRED Mali", "Articles, conseils et actualités d'ICRED Mali sur l'ingénierie, les études techniques, le BTP, l'énergie solaire et les projets d'infrastructure au Mali.", "/blog", "website", "blog ingénierie Mali, projets au Mali, conseils ingénierie, actualités BTP Mali", { image: blogHero });
  useStructuredData("blog-schema", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Blog ICRED Mali",
        description: "Conseils et actualités sur l'ingénierie, les études techniques et les projets d'infrastructure au Mali.",
        url: "https://icred-mali.com/blog/",
        inLanguage: "fr-ML",
        publisher: { "@id": "https://icred-mali.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://icred-mali.com/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://icred-mali.com/blog/" },
        ],
      },
    ],
  });
  return <div className="min-h-screen bg-background"><Navbar /><main><section className="relative isolate overflow-hidden pt-36 pb-20 px-4 text-primary-foreground"><img src={blogHero} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" /><div className="container mx-auto max-w-5xl"><p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">Conseils & expertise</p><h1 className="text-4xl md:text-6xl font-bold">Le blog ICRED Mali</h1><p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">Nos conseils pour préparer, concevoir et suivre les projets d'infrastructure, d'énergie et d'accès à l'eau au Mali.</p></div></section><section className="section-padding"><div className="container mx-auto max-w-6xl"><div className="max-w-3xl mb-10"><p className="text-primary font-semibold">Nos publications</p><h2 className="mt-2 text-3xl font-bold">Conseils pour vos projets</h2><p className="mt-4 text-muted-foreground leading-8">Retrouvez nos repères pour mieux cadrer une étude, choisir une solution technique, préparer un dossier de consultation ou suivre un chantier. Chaque article renvoie vers les services ICRED pertinents pour passer de l'information à l'action.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <article key={article.slug} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"><img src={article.image} alt="" className="h-44 w-full object-cover" /><div className="p-6"><p className="text-sm font-semibold text-primary">{article.service}</p><h3 className="mt-2 text-xl font-bold leading-snug">{article.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.intro}</p><Link to={`/blog/${article.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Lire l'article <ArrowRight size={17} /></Link></div></article>)}</div><section className="mt-16 rounded-2xl border border-border bg-card p-7 md:p-10"><p className="text-primary font-semibold">Tous les articles</p><h2 className="mt-2 text-3xl font-bold">Explorer nos conseils par sujet</h2><ul className="mt-6 grid gap-4 md:grid-cols-2">{articles.map((article) => <li key={article.slug}><Link to={`/blog/${article.slug}`} className="inline-flex items-start gap-2 font-semibold text-primary hover:underline"><ArrowRight className="mt-1 shrink-0" size={16}/><span>{article.title}</span></Link></li>)}</ul></section></div></section></main><Footer /></div>;
};
export default Blog;
