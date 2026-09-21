import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePageSeo, useStructuredData } from "@/hooks/usePageSeo";
import { articles, projects } from "@/data/content";
import { keywordPages } from "@/data/keywordPages";

const services = [
  ["Bureau d'études au Mali", "/bureau-etudes-mali"],
  ["Topographie au Mali", "/topographie-mali"],
  ["Études techniques & ingénierie", "/etudes-techniques-mali"],
  ["Génie civil & suivi des travaux", "/genie-civil-mali"],
  ["Ingénierie & conseil", "/ingenierie-conseil-mali"],
  ["Études de faisabilité", "/etude-faisabilite-mali"],
  ["Étude de projet", "/etude-projet-mali"],
  ["Entreprise BTP", "/entreprise-btp-mali"],
  ["Forage d'eau & adduction", "/forage-eau-mali"],
  ["Énergie solaire", "/energie-solaire-mali"],
  ["Étude environnementale & EIES", "/etude-environnementale-mali"],
  ["Travaux routiers & infrastructures", "/travaux-routiers-mali"],
] as const;

const Sitemap = () => {
  usePageSeo("Plan du site | ICRED Mali", "Découvrez toutes les pages, expertises, articles et références du site ICRED Mali.", "/plan-du-site", "website", "plan du site ICRED Mali, pages ICRED Mali");
  useStructuredData("sitemap-schema", {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: "Plan du site ICRED Mali", description: "Toutes les pages du site ICRED Mali.", url: "https://icred-mali.com/plan-du-site/", inLanguage: "fr-ML" },
      { "@type": "SiteNavigationElement", name: "Navigation principale", url: "https://icred-mali.com/plan-du-site/" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://icred-mali.com/" }, { "@type": "ListItem", position: 2, name: "Plan du site", item: "https://icred-mali.com/plan-du-site/" }] },
    ],
  });

  return <div className="min-h-screen bg-background"><Navbar /><main>
    <section className="pt-36 pb-20 px-4 bg-primary text-primary-foreground"><div className="container mx-auto max-w-5xl"><p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">Navigation complète</p><h1 className="text-4xl md:text-6xl font-bold">Plan du site ICRED Mali</h1><p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 max-w-3xl">Retrouvez ici l'ensemble des pages consacrées aux expertises, aux projets, aux conseils et aux services d'ICRED Mali.</p></div></section>
    <section className="section-padding"><div className="container mx-auto max-w-6xl grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      <SitemapGroup title="Navigation"><SitemapLink label="Accueil" href="/" /><SitemapLink label="Tous les services" href="/services" /><SitemapLink label="Blog" href="/blog" /><SitemapLink label="Plan du site" href="/plan-du-site" /></SitemapGroup>
      <SitemapGroup title="Services d'ingénierie">{services.map(([label, href]) => <SitemapLink key={href} label={label} href={href} />)}</SitemapGroup>
      <SitemapGroup title="Nouvelles expertises">{keywordPages.map((page) => <SitemapLink key={page.slug} label={page.title} href={`/${page.slug}`} />)}</SitemapGroup>
      <SitemapGroup title="Articles du blog">{articles.map((article) => <SitemapLink key={article.slug} label={article.title} href={`/blog/${article.slug}`} />)}</SitemapGroup>
      <SitemapGroup title="Projets et références">{projects.map((project) => <SitemapLink key={project.slug} label={project.title} href={`/projets/${project.slug}`} />)}</SitemapGroup>
      <SitemapGroup title="Contact"><SitemapLink label="Nous contacter" href="/#contact" /><p className="text-sm leading-relaxed text-muted-foreground">ICRED Mali SARL<br />Sogoniko, Bamako, Mali<br />contact@icred-mali.com<br />+223 76 08 58 47</p></SitemapGroup>
    </div></section>
  </main><Footer /></div>;
};

const SitemapGroup = ({ title, children }: { title: string; children: ReactNode }) => <section><h2 className="text-2xl font-bold mb-5">{title}</h2><ul className="space-y-3">{children}</ul></section>;
const SitemapLink = ({ label, href }: { label: string; href: string }) => <li><Link to={href} className="text-primary hover:underline leading-relaxed">{label}</Link></li>;

export default Sitemap;
