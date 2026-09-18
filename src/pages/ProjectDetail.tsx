import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/content";
import { usePageSeo, useStructuredData } from "@/hooks/usePageSeo";
import { whatsappUrl } from "@/lib/whatsapp";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  usePageSeo(project ? `${project.title} | ICRED Mali` : "Projet introuvable | ICRED Mali", project?.summary ?? "Cette réalisation n'existe pas.", `/projets/${slug ?? ""}`, "article", "projet ingénierie Mali, référence ICRED Mali", { image: project?.image, robots: project ? undefined : "noindex, follow" });
  useStructuredData(`project-schema-${slug}`, project ? { "@context": "https://schema.org", "@type": "Article", headline: project.title, description: project.summary, image: project.image, mainEntityOfPage: `https://icred-mali.com/projets/${project.slug}`, publisher: { "@id": "https://icred-mali.com/#organization" } } : {});
  if (!project) return null;
  return <div className="min-h-screen bg-background"><Navbar /><main>
    <section className="relative isolate overflow-hidden pt-36 pb-20 px-4 text-primary-foreground"><img src={project.image} alt="Illustration de projet d'ingénierie ICRED" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" /><div className="container mx-auto max-w-5xl"><p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">Référence ICRED · {project.service}</p><h1 className="text-4xl md:text-6xl font-bold max-w-4xl">{project.title}</h1><p className="mt-5 text-primary-foreground/80">{project.location}</p><p className="mt-6 text-lg leading-relaxed max-w-3xl">{project.summary}</p></div></section>
    <section className="section-padding"><div className="container mx-auto max-w-5xl grid lg:grid-cols-[1fr_.7fr] gap-12"><div className="space-y-10"><article><h2 className="text-3xl font-bold mb-4">Le rôle d'ICRED</h2><p className="text-muted-foreground leading-8 text-lg">{project.role}</p></article><article><h2 className="text-3xl font-bold mb-5">Repères du projet</h2><ul className="space-y-4">{project.results.map((result) => <li key={result} className="flex gap-3 text-foreground/80"><CheckCircle2 className="shrink-0 text-primary" size={20} />{result}</li>)}</ul></article><article><h2 className="text-3xl font-bold mb-4">Expertise associée</h2><p className="text-muted-foreground leading-8 text-lg">Ce projet illustre l'expertise d'ICRED en {project.service.toLowerCase()}. Découvrez notre accompagnement, de l'étude à la préparation et au suivi du projet.</p><Link to={project.serviceUrl} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Découvrir ce service <ArrowRight size={17} /></Link></article></div><aside className="rounded-2xl bg-card border border-border p-7 h-fit"><h2 className="text-2xl font-bold mb-3">Un projet similaire ?</h2><p className="text-muted-foreground leading-relaxed">Présentez votre besoin à nos ingénieurs pour être orienté vers l'accompagnement adapté.</p><a href={whatsappUrl(`Bonjour ICRED, mon projet est similaire à : ${project.title}.`)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold">Demander un échange <ArrowRight size={17} /></a><a href="tel:+22376085847" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary"><Phone size={17} /> Appeler ICRED</a></aside></div></section>
  </main><Footer /></div>;
};
export default ProjectDetail;
