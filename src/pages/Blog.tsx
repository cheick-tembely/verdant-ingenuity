import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSeo, useStructuredData } from "@/hooks/usePageSeo";
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
        url: "https://icred-mali.com/blog",
        inLanguage: "fr-ML",
        publisher: { "@id": "https://icred-mali.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://icred-mali.com/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://icred-mali.com/blog" },
        ],
      },
    ],
  });
  return <div className="min-h-screen bg-background"><Navbar /><main><section className="relative isolate overflow-hidden pt-36 pb-20 px-4 text-primary-foreground"><img src={blogHero} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" /><div className="container mx-auto max-w-5xl"><p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">Conseils & expertise</p><h1 className="text-4xl md:text-6xl font-bold">Le blog ICRED Mali</h1></div></section></main><Footer /></div>;
};
export default Blog;
