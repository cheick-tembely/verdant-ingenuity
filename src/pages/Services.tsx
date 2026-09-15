import { ArrowRight, Building2, ClipboardCheck, Map, Ruler, SearchCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/usePageSeo";

const highlightedServices = [
  { title: "Bureau d'études au Mali", text: "Une ingénierie conseil complète, de l'idée à la réalisation.", to: "/bureau-etudes-mali", icon: Building2 },
  { title: "Topographie au Mali", text: "Des levés fiables pour sécuriser chaque décision de terrain.", to: "/topographie-mali", icon: Ruler },
  { title: "Études techniques & ingénierie", text: "Des études rigoureuses, adaptées aux réalités de votre projet.", to: "/etudes-techniques-mali", icon: SearchCheck },
  { title: "Génie civil & suivi des travaux", text: "Le contrôle et l'accompagnement de vos chantiers.", to: "/genie-civil-mali", icon: ClipboardCheck },
  { title: "Études de faisabilité & conseil", text: "Clarifier, chiffrer et orienter vos investissements.", to: "/etude-faisabilite-mali", icon: Map },
];

const otherServices = ["Énergie solaire & hybridation", "Eau & assainissement", "Bâtiment & construction", "Aménagement urbain", "Routes & infrastructures", "Hydro-agricole", "Environnement", "Suivi-évaluation", "Implantation géophysique", "Recherche & développement"];

const Services = () => {
  usePageSeo("Services d'ingénierie au Mali | ICRED Mali", "Découvrez les services d'ICRED, bureau d'études et ingénieur conseil à Bamako : topographie, études techniques, génie civil et faisabilité.", "/services");
  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="pt-36 pb-20 px-4 bg-gradient-dark text-primary-foreground relative overflow-hidden">
        <div className="absolute -right-24 -bottom-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="container mx-auto max-w-5xl relative">
          <p className="text-secondary font-semibold uppercase tracking-[.2em] text-xs mb-5">ICRED Mali · Nos expertises</p>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">Des services d'ingénierie pensés pour faire avancer vos projets.</h1>
          <p className="mt-6 text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">Bureau d'études à Bamako, ICRED accompagne les organisations, collectivités, entreprises et porteurs de projets au Mali.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightedServices.map(({ title, text, to, icon: Icon }) => <Link key={to} to={to} className="group rounded-2xl bg-card border border-border p-7 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-pale text-primary flex items-center justify-center mb-6"><Icon size={24} /></div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{text}</p>
              <span className="inline-flex gap-2 items-center text-primary font-semibold">Découvrir le service <ArrowRight size={17} /></span>
            </Link>)}
          </div>
          <div className="mt-16 rounded-2xl border border-border bg-card p-7 md:p-10">
            <p className="text-primary font-semibold mb-2">Autres domaines d'intervention</p>
            <h2 className="text-3xl font-bold mb-7">Une expertise multidisciplinaire</h2>
            <div className="flex flex-wrap gap-3">{otherServices.map((item) => <span key={item} className="rounded-full bg-green-pale px-4 py-2 text-sm text-foreground/80">{item}</span>)}</div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default Services;
