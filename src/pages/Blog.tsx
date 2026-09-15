import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/usePageSeo";

const Blog = () => {
  usePageSeo("Blog ingénierie & projets au Mali | ICRED Mali", "Articles et actualités d'ICRED Mali sur l'ingénierie et les projets.", "/blog");
  return <div className="min-h-screen bg-background"><Navbar /><main><section className="pt-36 pb-20 px-4 bg-gradient-dark text-primary-foreground"><div className="container mx-auto max-w-5xl"><p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">Conseils & expertise</p><h1 className="text-4xl md:text-6xl font-bold">Le blog ICRED Mali</h1></div></section></main><Footer /></div>;
};
export default Blog;
